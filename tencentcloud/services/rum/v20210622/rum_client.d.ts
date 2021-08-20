import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDataPerformancePageResponse, DescribeDataPerformancePageRequest, DescribeErrorRequest, DescribeDataLogUrlStatisticsResponse, CreateProjectResponse, DescribeErrorResponse, DescribeDataLogUrlStatisticsRequest, CreateProjectRequest } from "./rum_models";
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
}
