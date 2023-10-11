import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DestroyInstanceByApiResponse, DestroyInstanceByApiRequest, CreateInstanceByApiRequest, CreateInstanceByApiResponse, DescribeSimpleInstancesResponse, DescribeSimpleInstancesRequest } from "./cdwpg_models";
/**
 * cdwpg client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 销毁集群
     */
    DestroyInstanceByApi(req: DestroyInstanceByApiRequest, cb?: (error: string, rep: DestroyInstanceByApiResponse) => void): Promise<DestroyInstanceByApiResponse>;
    /**
     * 创建集群
     */
    CreateInstanceByApi(req: CreateInstanceByApiRequest, cb?: (error: string, rep: CreateInstanceByApiResponse) => void): Promise<CreateInstanceByApiResponse>;
    /**
     * 获取集群实例列表
     */
    DescribeSimpleInstances(req: DescribeSimpleInstancesRequest, cb?: (error: string, rep: DescribeSimpleInstancesResponse) => void): Promise<DescribeSimpleInstancesResponse>;
}
