import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyAgentGroupRequest, CreateTaskExResponse, DescribeProbeNodesResponse, RunTaskRequest, DescribeTaskDetailResponse, DescribeProbeMetricDataResponse, DeleteTasksResponse, BindAlarmPolicyRequest, DeleteProbeTaskRequest, DescribeDetailedSingleProbeDataResponse, DescribeAlarmsByTaskRequest, DescribeAlarmsRequest, DescribeUserLimitResponse, CreateTaskExRequest, PauseTaskRequest, GetResultSummaryRequest, DescribeAlarmTopicResponse, DescribeUserLimitRequest, DescribeAgentsRequest, GetReturnCodeInfoRequest, DescribeAgentsResponse, CreateAgentGroupResponse, DescribeDetailedSingleProbeDataRequest, DeleteAgentGroupResponse, GetReturnCodeHistoryRequest, GetRealAvailRatioResponse, UpdateProbeTaskConfigurationListResponse, CreateAgentGroupRequest, ResumeProbeTaskResponse, ModifyTaskExResponse, DescribeAlarmsByTaskResponse, ModifyTaskExRequest, ResumeProbeTaskRequest, DescribeTasksByTypeRequest, GetReturnCodeHistoryResponse, GetAvailRatioHistoryRequest, GetTaskTotalNumberResponse, GetDailyAvailRatioRequest, SuspendProbeTaskResponse, GetRespTimeTrendExResponse, DescribeCatLogsRequest, GetAvailRatioHistoryResponse, DescribeProbeTasksResponse, DescribeAlarmsResponse, DescribeTasksByTypeResponse, DescribeAlarmTopicRequest, DescribeAgentGroupsResponse, SuspendProbeTaskRequest, DescribeProbeMetricDataRequest, GetRespTimeTrendExRequest, UpdateProbeTaskConfigurationListRequest, CreateProbeTasksRequest, DescribeAgentGroupsRequest, DescribeCatLogsResponse, GetReturnCodeInfoResponse, BindAlarmPolicyResponse, RunTaskResponse, VerifyResultRequest, GetTaskTotalNumberRequest, ModifyAgentGroupResponse, DescribeTaskDetailRequest, GetResultSummaryResponse, VerifyResultResponse, DeleteTasksRequest, DescribeProbeTasksRequest, PauseTaskResponse, GetDailyAvailRatioResponse, DeleteAgentGroupRequest, GetRealAvailRatioRequest, DeleteProbeTaskResponse, CreateProbeTasksResponse, DescribeProbeNodesRequest } from "./cat_models";
/**
 * cat client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 暂停拨测任务
     */
    SuspendProbeTask(req: SuspendProbeTaskRequest, cb?: (error: string, rep: SuspendProbeTaskResponse) => void): Promise<SuspendProbeTaskResponse>;
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
     * 验证拨测任务，结果验证查询（验证成功的，才建议创建拨测任务）
     */
    VerifyResult(req: VerifyResultRequest, cb?: (error: string, rep: VerifyResultResponse) => void): Promise<VerifyResultResponse>;
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
     * 批量创建拨测任务
     */
    CreateProbeTasks(req: CreateProbeTasksRequest, cb?: (error: string, rep: CreateProbeTasksResponse) => void): Promise<CreateProbeTasksResponse>;
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
     * 列出云拨测指标详细数据
     */
    DescribeProbeMetricData(req: DescribeProbeMetricDataRequest, cb?: (error: string, rep: DescribeProbeMetricDataResponse) => void): Promise<DescribeProbeMetricDataResponse>;
    /**
     * 恢复拨测任务
     */
    ResumeProbeTask(req: ResumeProbeTaskRequest, cb?: (error: string, rep: ResumeProbeTaskResponse) => void): Promise<ResumeProbeTaskResponse>;
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
     * 批量更新拨测任务配置
     */
    UpdateProbeTaskConfigurationList(req: UpdateProbeTaskConfigurationListRequest, cb?: (error: string, rep: UpdateProbeTaskConfigurationListResponse) => void): Promise<UpdateProbeTaskConfigurationListResponse>;
    /**
     * 根据时间范围、任务ID、运营商等条件查询单次拨测详情数据
     */
    DescribeDetailedSingleProbeData(req: DescribeDetailedSingleProbeDataRequest, cb?: (error: string, rep: DescribeDetailedSingleProbeDataResponse) => void): Promise<DescribeDetailedSingleProbeDataResponse>;
    /**
     * 绑定拨测任务和告警策略组
     */
    BindAlarmPolicy(req: BindAlarmPolicyRequest, cb?: (error: string, rep: BindAlarmPolicyResponse) => void): Promise<BindAlarmPolicyResponse>;
    /**
     * 查询拨测任务列表
     */
    DescribeProbeTasks(req: DescribeProbeTasksRequest, cb?: (error: string, rep: DescribeProbeTasksResponse) => void): Promise<DescribeProbeTasksResponse>;
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
     * 查询拨测节点
     */
    DescribeProbeNodes(req: DescribeProbeNodesRequest, cb?: (error: string, rep: DescribeProbeNodesResponse) => void): Promise<DescribeProbeNodesResponse>;
    /**
     * 查询拨测任务的返回码统计信息
     */
    GetReturnCodeInfo(req: GetReturnCodeInfoRequest, cb?: (error: string, rep: GetReturnCodeInfoResponse) => void): Promise<GetReturnCodeInfoResponse>;
    /**
     * 按任务查询拨测告警列表
     */
    DescribeAlarmsByTask(req: DescribeAlarmsByTaskRequest, cb?: (error: string, rep: DescribeAlarmsByTaskResponse) => void): Promise<DescribeAlarmsByTaskResponse>;
    /**
     * 删除拨测任务
     */
    DeleteProbeTask(req: DeleteProbeTaskRequest, cb?: (error: string, rep: DeleteProbeTaskResponse) => void): Promise<DeleteProbeTaskResponse>;
    /**
     * 获取AppId下的拨测任务总数
     */
    GetTaskTotalNumber(req?: GetTaskTotalNumberRequest, cb?: (error: string, rep: GetTaskTotalNumberResponse) => void): Promise<GetTaskTotalNumberResponse>;
}
