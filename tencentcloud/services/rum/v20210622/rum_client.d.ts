import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDataPerformancePageResponse, DescribeDataPerformancePageRequest, DescribeProjectsResponse, DescribeScoresRequest, DescribeErrorRequest, DescribeProjectsRequest, DescribeLogListResponse, DescribeDataLogUrlStatisticsResponse, CreateProjectResponse, DescribeLogListRequest, DescribeScoresResponse, DescribeErrorResponse, DescribeDataLogUrlStatisticsRequest, CreateProjectRequest } from "./rum_models";
/**
 * rum client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取首页错误信息
     */
    DescribeError(req: DescribeErrorRequest, cb?: (error: string, rep: DescribeErrorResponse) => void): Promise<DescribeErrorResponse>;
    /**
     * 获取项目下的日志列表（实例创建的项目下的日志列表）
     */
    DescribeLogList(req: DescribeLogListRequest, cb?: (error: string, rep: DescribeLogListResponse) => void): Promise<DescribeLogListResponse>;
    /**
     * 获取首页分数列表
     */
    DescribeScores(req: DescribeScoresRequest, cb?: (error: string, rep: DescribeScoresResponse) => void): Promise<DescribeScoresResponse>;
    /**
     * 获取PerformancePage信息
     */
    DescribeDataPerformancePage(req: DescribeDataPerformancePageRequest, cb?: (error: string, rep: DescribeDataPerformancePageResponse) => void): Promise<DescribeDataPerformancePageResponse>;
    /**
     * 创建项目（归属于某个团队）
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
    /**
     * 获取LogUrlStatistics信息
     */
    DescribeDataLogUrlStatistics(req: DescribeDataLogUrlStatisticsRequest, cb?: (error: string, rep: DescribeDataLogUrlStatisticsResponse) => void): Promise<DescribeDataLogUrlStatisticsResponse>;
    /**
     * 获取项目列表（实例创建的团队下的项目列表）
     */
    DescribeProjects(req: DescribeProjectsRequest, cb?: (error: string, rep: DescribeProjectsResponse) => void): Promise<DescribeProjectsResponse>;
}
