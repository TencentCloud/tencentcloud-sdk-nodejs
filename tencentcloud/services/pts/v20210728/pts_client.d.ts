import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCronJobsRequest, UpdateJobRequest, UpdateCronJobResponse, DescribeSampleMatrixQueryResponse, DescribeSampleLogsRequest, DeleteJobsRequest, DescribeAlertRecordsRequest, DeleteAlertChannelResponse, DescribeLabelValuesRequest, AbortCronJobsResponse, DescribeRequestSummaryResponse, DescribeScenarioWithJobsRequest, CreateCronJobResponse, RestartCronJobsResponse, UpdateProjectRequest, AbortJobResponse, UpdateEnvironmentRequest, DescribeRegionsResponse, CreateEnvironmentResponse, UpdateScenarioResponse, DescribeEnvironmentsRequest, CreateProjectRequest, AdjustJobSpeedRequest, DescribeRequestSummaryRequest, CreateFileResponse, DeleteProjectsResponse, UpdateEnvironmentResponse, DescribeLabelValuesResponse, DescribeAvailableMetricsRequest, CopyScenarioResponse, DescribeSampleMatrixQueryRequest, GenerateTmpKeyResponse, DescribeFilesResponse, DeleteProjectsRequest, UpdateFileScenarioRelationRequest, DeleteJobsResponse, AdjustJobSpeedResponse, CreateProjectResponse, DescribeSampleQueryRequest, DescribeSampleMatrixBatchQueryResponse, DeleteEnvironmentsResponse, DescribeRegionsRequest, DeleteScenariosResponse, CreateEnvironmentRequest, DescribeErrorSummaryRequest, CopyScenarioRequest, DescribeNormalLogsResponse, DescribeSampleBatchQueryRequest, RestartCronJobsRequest, DeleteScenariosRequest, CreateAlertChannelResponse, CreateAlertChannelRequest, DescribeAlertChannelsRequest, DescribeAvailableMetricsResponse, DescribeMetricLabelWithValuesResponse, DescribeEnvironmentsResponse, DescribeAlertChannelsResponse, CreateCronJobRequest, UpdateJobResponse, DescribeCheckSummaryRequest, DeleteFilesResponse, CreateFileRequest, DeleteCronJobsRequest, DescribeSampleLogsResponse, DescribeCronJobsResponse, DescribeNormalLogsRequest, DescribeJobsRequest, DescribeFilesRequest, AbortCronJobsRequest, DescribeSampleMatrixBatchQueryRequest, DescribeAlertRecordsResponse, DescribeProjectsRequest, DescribeSampleQueryResponse, DeleteEnvironmentsRequest, CreateScenarioRequest, DescribeMetricLabelWithValuesRequest, DescribeProjectsResponse, UpdateCronJobRequest, DescribeCheckSummaryResponse, DescribeScenariosRequest, DescribeScenariosResponse, CreateScenarioResponse, AbortJobRequest, DeleteFilesRequest, DescribeJobsResponse, GenerateTmpKeyRequest, DescribeSampleBatchQueryResponse, StartJobResponse, UpdateScenarioRequest, DeleteCronJobsResponse, StartJobRequest, DescribeScenarioWithJobsResponse, DeleteAlertChannelRequest, DescribeErrorSummaryResponse, UpdateProjectResponse, UpdateFileScenarioRelationResponse } from "./pts_models";
/**
 * pts client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询场景配置并附带已经执行的任务内容
     */
    DescribeScenarioWithJobs(req: DescribeScenarioWithJobsRequest, cb?: (error: string, rep: DescribeScenarioWithJobsResponse) => void): Promise<DescribeScenarioWithJobsResponse>;
    /**
     * 删除环境
     */
    DeleteEnvironments(req?: DeleteEnvironmentsRequest, cb?: (error: string, rep: DeleteEnvironmentsResponse) => void): Promise<DeleteEnvironmentsResponse>;
    /**
     * 更新任务
     */
    UpdateJob(req: UpdateJobRequest, cb?: (error: string, rep: UpdateJobResponse) => void): Promise<UpdateJobResponse>;
    /**
     * 更新定时任务
     */
    UpdateCronJob(req: UpdateCronJobRequest, cb?: (error: string, rep: UpdateCronJobResponse) => void): Promise<UpdateCronJobResponse>;
    /**
     * 创建并启动任务
     */
    StartJob(req: StartJobRequest, cb?: (error: string, rep: StartJobResponse) => void): Promise<StartJobResponse>;
    /**
     * 更新场景
     */
    UpdateScenario(req: UpdateScenarioRequest, cb?: (error: string, rep: UpdateScenarioResponse) => void): Promise<UpdateScenarioResponse>;
    /**
     * 查询文件列表
     */
    DescribeFiles(req: DescribeFilesRequest, cb?: (error: string, rep: DescribeFilesResponse) => void): Promise<DescribeFilesResponse>;
    /**
     * 删除项目
     */
    DeleteProjects(req: DeleteProjectsRequest, cb?: (error: string, rep: DeleteProjectsResponse) => void): Promise<DeleteProjectsResponse>;
    /**
     * 查询指标，返回固定时间点指标内容
     */
    DescribeSampleQuery(req: DescribeSampleQueryRequest, cb?: (error: string, rep: DescribeSampleQueryResponse) => void): Promise<DescribeSampleQueryResponse>;
    /**
     * 查询任务列表
     */
    DescribeJobs(req: DescribeJobsRequest, cb?: (error: string, rep: DescribeJobsResponse) => void): Promise<DescribeJobsResponse>;
    /**
     * 创建场景
     */
    CreateScenario(req: CreateScenarioRequest, cb?: (error: string, rep: CreateScenarioResponse) => void): Promise<CreateScenarioResponse>;
    /**
     * 删除文件
     */
    DeleteFiles(req: DeleteFilesRequest, cb?: (error: string, rep: DeleteFilesResponse) => void): Promise<DeleteFilesResponse>;
    /**
     * 查询地域列表
     */
    DescribeRegions(req: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 查询检查点汇总信息
     */
    DescribeCheckSummary(req: DescribeCheckSummaryRequest, cb?: (error: string, rep: DescribeCheckSummaryResponse) => void): Promise<DescribeCheckSummaryResponse>;
    /**
     * 批量查询指标矩阵
     */
    DescribeSampleMatrixBatchQuery(req: DescribeSampleMatrixBatchQueryRequest, cb?: (error: string, rep: DescribeSampleMatrixBatchQueryResponse) => void): Promise<DescribeSampleMatrixBatchQueryResponse>;
    /**
     * 查询指标矩阵
     */
    DescribeSampleMatrixQuery(req: DescribeSampleMatrixQueryRequest, cb?: (error: string, rep: DescribeSampleMatrixQueryResponse) => void): Promise<DescribeSampleMatrixQueryResponse>;
    /**
     * 查询请求汇总信息
     */
    DescribeRequestSummary(req: DescribeRequestSummaryRequest, cb?: (error: string, rep: DescribeRequestSummaryResponse) => void): Promise<DescribeRequestSummaryResponse>;
    /**
     * 删除场景
     */
    DeleteScenarios(req: DeleteScenariosRequest, cb?: (error: string, rep: DeleteScenariosResponse) => void): Promise<DeleteScenariosResponse>;
    /**
     * 查询项目列表
     */
    DescribeProjects(req: DescribeProjectsRequest, cb?: (error: string, rep: DescribeProjectsResponse) => void): Promise<DescribeProjectsResponse>;
    /**
     * 返回告警历史项的列表
     */
    DescribeAlertRecords(req: DescribeAlertRecordsRequest, cb?: (error: string, rep: DescribeAlertRecordsResponse) => void): Promise<DescribeAlertRecordsResponse>;
    /**
     * 批量查询指标，返回固定时间点指标内容
     */
    DescribeSampleBatchQuery(req: DescribeSampleBatchQueryRequest, cb?: (error: string, rep: DescribeSampleBatchQueryResponse) => void): Promise<DescribeSampleBatchQueryResponse>;
    /**
     * 查询告警通知接收组
     */
    DescribeAlertChannels(req: DescribeAlertChannelsRequest, cb?: (error: string, rep: DescribeAlertChannelsResponse) => void): Promise<DescribeAlertChannelsResponse>;
    /**
     * 查询系统支持的指标
     */
    DescribeAvailableMetrics(req?: DescribeAvailableMetricsRequest, cb?: (error: string, rep: DescribeAvailableMetricsResponse) => void): Promise<DescribeAvailableMetricsResponse>;
    /**
     * 查询标签内容
     */
    DescribeLabelValues(req: DescribeLabelValuesRequest, cb?: (error: string, rep: DescribeLabelValuesResponse) => void): Promise<DescribeLabelValuesResponse>;
    /**
     * 停止定时任务
     */
    AbortCronJobs(req: AbortCronJobsRequest, cb?: (error: string, rep: AbortCronJobsResponse) => void): Promise<AbortCronJobsResponse>;
    /**
     * 更新关联文件场景
     */
    UpdateFileScenarioRelation(req: UpdateFileScenarioRelationRequest, cb?: (error: string, rep: UpdateFileScenarioRelationResponse) => void): Promise<UpdateFileScenarioRelationResponse>;
    /**
     * 重启状态为已中止的定时任务
     */
    RestartCronJobs(req: RestartCronJobsRequest, cb?: (error: string, rep: RestartCronJobsResponse) => void): Promise<RestartCronJobsResponse>;
    /**
     * 更新环境
     */
    UpdateEnvironment(req?: UpdateEnvironmentRequest, cb?: (error: string, rep: UpdateEnvironmentResponse) => void): Promise<UpdateEnvironmentResponse>;
    /**
     * 创建告警通知接收组
     */
    CreateAlertChannel(req: CreateAlertChannelRequest, cb?: (error: string, rep: CreateAlertChannelResponse) => void): Promise<CreateAlertChannelResponse>;
    /**
     * 查看环境列表
     */
    DescribeEnvironments(req?: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 删除任务
     */
    DeleteJobs(req: DeleteJobsRequest, cb?: (error: string, rep: DeleteJobsResponse) => void): Promise<DeleteJobsResponse>;
    /**
     * 查询错误详情汇总信息
     */
    DescribeErrorSummary(req: DescribeErrorSummaryRequest, cb?: (error: string, rep: DescribeErrorSummaryResponse) => void): Promise<DescribeErrorSummaryResponse>;
    /**
     * 压测过程日志包括引擎输出日志及用户输出日志
     */
    DescribeNormalLogs(req: DescribeNormalLogsRequest, cb?: (error: string, rep: DescribeNormalLogsResponse) => void): Promise<DescribeNormalLogsResponse>;
    /**
     * 复制场景
     */
    CopyScenario(req: CopyScenarioRequest, cb?: (error: string, rep: CopyScenarioResponse) => void): Promise<CopyScenarioResponse>;
    /**
     * 查询采样日志
     */
    DescribeSampleLogs(req: DescribeSampleLogsRequest, cb?: (error: string, rep: DescribeSampleLogsResponse) => void): Promise<DescribeSampleLogsResponse>;
    /**
     * 创建环境
     */
    CreateEnvironment(req?: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 查询场景列表
     */
    DescribeScenarios(req: DescribeScenariosRequest, cb?: (error: string, rep: DescribeScenariosResponse) => void): Promise<DescribeScenariosResponse>;
    /**
     * 删除定时任务
     */
    DeleteCronJobs(req: DeleteCronJobsRequest, cb?: (error: string, rep: DeleteCronJobsResponse) => void): Promise<DeleteCronJobsResponse>;
    /**
     * 列出定时任务，非必填数组为空就默认全选
     */
    DescribeCronJobs(req: DescribeCronJobsRequest, cb?: (error: string, rep: DescribeCronJobsResponse) => void): Promise<DescribeCronJobsResponse>;
    /**
     * 删除告警通知接收组
     */
    DeleteAlertChannel(req: DeleteAlertChannelRequest, cb?: (error: string, rep: DeleteAlertChannelResponse) => void): Promise<DeleteAlertChannelResponse>;
    /**
     * 创建文件
     */
    CreateFile(req: CreateFileRequest, cb?: (error: string, rep: CreateFileResponse) => void): Promise<CreateFileResponse>;
    /**
     * 调整任务的目标RPS
     */
    AdjustJobSpeed(req: AdjustJobSpeedRequest, cb?: (error: string, rep: AdjustJobSpeedResponse) => void): Promise<AdjustJobSpeedResponse>;
    /**
     * 创建项目
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 停止任务
     */
    AbortJob(req: AbortJobRequest, cb?: (error: string, rep: AbortJobResponse) => void): Promise<AbortJobResponse>;
    /**
     * 更新项目
     */
    UpdateProject(req: UpdateProjectRequest, cb?: (error: string, rep: UpdateProjectResponse) => void): Promise<UpdateProjectResponse>;
    /**
     * 生成临时COS凭证
     */
    GenerateTmpKey(req: GenerateTmpKeyRequest, cb?: (error: string, rep: GenerateTmpKeyResponse) => void): Promise<GenerateTmpKeyResponse>;
    /**
     * 查询指标所有的label及values值
     */
    DescribeMetricLabelWithValues(req: DescribeMetricLabelWithValuesRequest, cb?: (error: string, rep: DescribeMetricLabelWithValuesResponse) => void): Promise<DescribeMetricLabelWithValuesResponse>;
    /**
     * 创建定时任务
     */
    CreateCronJob(req: CreateCronJobRequest, cb?: (error: string, rep: CreateCronJobResponse) => void): Promise<CreateCronJobResponse>;
}
