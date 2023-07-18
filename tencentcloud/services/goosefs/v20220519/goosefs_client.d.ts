import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDataRepositoryTaskStatusResponse, DescribeClusterRoleTokenRequest, DescribeClusterRoleTokenResponse, DescribeClusterRolesRequest, CreateDataRepositoryTaskRequest, DescribeClusterClientTokenRequest, CreateDataRepositoryTaskResponse, DescribeClusterRolesResponse, DescribeDataRepositoryTaskStatusRequest, DescribeClusterClientTokenResponse } from "./goosefs_models";
/**
 * goosefs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询GooseFS集群角色
     */
    DescribeClusterRoles(req: DescribeClusterRolesRequest, cb?: (error: string, rep: DescribeClusterRolesResponse) => void): Promise<DescribeClusterRolesResponse>;
    /**
     * 查询GooseFS集群客户端凭证
     */
    DescribeClusterClientToken(req: DescribeClusterClientTokenRequest, cb?: (error: string, rep: DescribeClusterClientTokenResponse) => void): Promise<DescribeClusterClientTokenResponse>;
    /**
     * 获取数据流通任务实时状态，用作客户端控制
     */
    DescribeDataRepositoryTaskStatus(req: DescribeDataRepositoryTaskStatusRequest, cb?: (error: string, rep: DescribeDataRepositoryTaskStatusResponse) => void): Promise<DescribeDataRepositoryTaskStatusResponse>;
    /**
     * 查询GooseFS集群角色凭证
     */
    DescribeClusterRoleToken(req: DescribeClusterRoleTokenRequest, cb?: (error: string, rep: DescribeClusterRoleTokenResponse) => void): Promise<DescribeClusterRoleTokenResponse>;
    /**
     * 创建数据流通任务,包括从将文件系统的数据上传到存储桶下, 以及从存储桶下载到文件系统里。
     */
    CreateDataRepositoryTask(req: CreateDataRepositoryTaskRequest, cb?: (error: string, rep: CreateDataRepositoryTaskResponse) => void): Promise<CreateDataRepositoryTaskResponse>;
}
