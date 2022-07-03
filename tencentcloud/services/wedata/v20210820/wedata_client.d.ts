import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeProjectResponse, DescribeProjectRequest, DescribeTaskInstancesRequest, DescribeTaskInstancesResponse, DescribeRelatedInstancesRequest, DescribeRelatedInstancesResponse } from "./wedata_models";
/**
 * wedata client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取项目信息
     */
    DescribeProject(req: DescribeProjectRequest, cb?: (error: string, rep: DescribeProjectResponse) => void): Promise<DescribeProjectResponse>;
    /**
     * 查询任务实例的关联实例列表
     */
    DescribeRelatedInstances(req: DescribeRelatedInstancesRequest, cb?: (error: string, rep: DescribeRelatedInstancesResponse) => void): Promise<DescribeRelatedInstancesResponse>;
    /**
     * 查询任务实例列表
     */
    DescribeTaskInstances(req: DescribeTaskInstancesRequest, cb?: (error: string, rep: DescribeTaskInstancesResponse) => void): Promise<DescribeTaskInstancesResponse>;
}
