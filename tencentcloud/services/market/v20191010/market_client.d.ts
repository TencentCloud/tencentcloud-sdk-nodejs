import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetUsagePlanUsageAmountResponse, GetCateTreeResponse, GetUsagePlanUsageAmountRequest, GetCateTreeRequest } from "./market_models";
/**
 * market client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取分类名称
     */
    GetCateTree(req: GetCateTreeRequest, cb?: (error: string, rep: GetCateTreeResponse) => void): Promise<GetCateTreeResponse>;
    /**
     * 该接口可以根据InstanceId查询实例的api的使用情况。

默认接口请求频率限制：20次/秒。
     */
    GetUsagePlanUsageAmount(req: GetUsagePlanUsageAmountRequest, cb?: (error: string, rep: GetUsagePlanUsageAmountResponse) => void): Promise<GetUsagePlanUsageAmountResponse>;
}
