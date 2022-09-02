import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateVideoModerationTaskResponse, CancelTaskRequest, DescribeTaskDetailResponse, DescribeTasksRequest, DescribeTaskDetailRequest, CreateVideoModerationTaskRequest, DescribeTasksResponse, CancelTaskResponse } from "./vm_models";
/**
 * vm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查看任务详情DescribeTaskDetail
     */
    DescribeTaskDetail(req: DescribeTaskDetailRequest, cb?: (error: string, rep: DescribeTaskDetailResponse) => void): Promise<DescribeTaskDetailResponse>;
    /**
     * 通过URL或存储桶创建审核任务
     */
    CreateVideoModerationTask(req: CreateVideoModerationTaskRequest, cb?: (error: string, rep: CreateVideoModerationTaskResponse) => void): Promise<CreateVideoModerationTaskResponse>;
    /**
     * 通过查看审核任务列表接口，可查询任务队列；您可根据多种业务信息（业务类型、审核结果、任务状态等）筛选审核任务列表。<br>

默认接口请求频率限制：**20次/秒**。
     */
    DescribeTasks(req: DescribeTasksRequest, cb?: (error: string, rep: DescribeTasksResponse) => void): Promise<DescribeTasksResponse>;
    /**
     * 取消任务
     */
    CancelTask(req: CancelTaskRequest, cb?: (error: string, rep: CancelTaskResponse) => void): Promise<CancelTaskResponse>;
}
