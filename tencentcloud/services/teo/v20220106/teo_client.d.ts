import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreatePurgeTaskResponse, CreatePurgeTaskRequest, DescribePurgeTasksRequest, CreatePrefetchTaskResponse, DescribePrefetchTasksResponse, DescribeZonesRequest, DescribeZonesResponse, CreatePrefetchTaskRequest, DescribePurgeTasksResponse, DescribePrefetchTasksRequest } from "./teo_models";
/**
 * teo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建清除缓存任务
     */
    CreatePurgeTask(req: CreatePurgeTaskRequest, cb?: (error: string, rep: CreatePurgeTaskResponse) => void): Promise<CreatePurgeTaskResponse>;
    /**
     * 查询清除缓存历史记录
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 创建预热任务
     */
    CreatePrefetchTask(req: CreatePrefetchTaskRequest, cb?: (error: string, rep: CreatePrefetchTaskResponse) => void): Promise<CreatePrefetchTaskResponse>;
    /**
     * 查询预热任务状态
     */
    DescribePrefetchTasks(req: DescribePrefetchTasksRequest, cb?: (error: string, rep: DescribePrefetchTasksResponse) => void): Promise<DescribePrefetchTasksResponse>;
    /**
     * 用户查询用户站点信息列表，支持分页
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
}
