import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDataRepositoryTaskRequest, CreateDataRepositoryTaskResponse, DescribeDataRepositoryTaskStatusRequest, DescribeDataRepositoryTaskStatusResponse } from "./goosefs_models";
/**
 * goosefs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取数据流通任务实时状态，用作客户端控制
     */
    DescribeDataRepositoryTaskStatus(req: DescribeDataRepositoryTaskStatusRequest, cb?: (error: string, rep: DescribeDataRepositoryTaskStatusResponse) => void): Promise<DescribeDataRepositoryTaskStatusResponse>;
    /**
     * 创建数据流通任务,包括从将文件系统的数据上传到存储桶下, 以及从存储桶下载到文件系统里。
     */
    CreateDataRepositoryTask(req: CreateDataRepositoryTaskRequest, cb?: (error: string, rep: CreateDataRepositoryTaskResponse) => void): Promise<CreateDataRepositoryTaskResponse>;
}
