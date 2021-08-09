import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateProjectResponse, DescribeDataPerformancePageResponse, CreateProjectRequest, DescribeDataPerformancePageRequest } from "./rum_models";
/**
 * rum client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取PerformancePage信息
     */
    DescribeDataPerformancePage(req: DescribeDataPerformancePageRequest, cb?: (error: string, rep: DescribeDataPerformancePageResponse) => void): Promise<DescribeDataPerformancePageResponse>;
    /**
     * 创建项目（归属于某个团队）
     */
    CreateProject(req: CreateProjectRequest, cb?: (error: string, rep: CreateProjectResponse) => void): Promise<CreateProjectResponse>;
}
