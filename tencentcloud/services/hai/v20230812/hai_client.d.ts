import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TerminateInstancesResponse, TerminateInstancesRequest, RunInstancesResponse, RunInstancesRequest } from "./hai_models";
/**
 * hai client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口 (RunInstances) 用于创建一个或多个指定配置的实例。
     */
    RunInstances(req: RunInstancesRequest, cb?: (error: string, rep: RunInstancesResponse) => void): Promise<RunInstancesResponse>;
    /**
     * 本接口 (TerminateInstances) 用于主动退还实例。
     */
    TerminateInstances(req: TerminateInstancesRequest, cb?: (error: string, rep: TerminateInstancesResponse) => void): Promise<TerminateInstancesResponse>;
}
