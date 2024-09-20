import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeInstanceListResponse, DescribeInstanceRequest, DescribeInstanceResponse, DescribeInstanceListRequest } from "./mqtt_models";
/**
 * mqtt client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询实例信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    DescribeInstanceList(req: DescribeInstanceListRequest, cb?: (error: string, rep: DescribeInstanceListResponse) => void): Promise<DescribeInstanceListResponse>;
}
