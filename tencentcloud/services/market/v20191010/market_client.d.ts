import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetCateTreeRequest, FlowProductRemindResponse, GetCateTreeResponse, GetUsagePlanUsageAmountResponse, FlowProductRemindRequest, GetUsagePlanUsageAmountRequest } from "./market_models";
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

     */
    GetUsagePlanUsageAmount(req: GetUsagePlanUsageAmountRequest, cb?: (error: string, rep: GetUsagePlanUsageAmountResponse) => void): Promise<GetUsagePlanUsageAmountResponse>;
    /**
     * 计量商品用量提醒，用于服务商调用云服务，云服务向客户发送提醒信息
     */
    FlowProductRemind(req: FlowProductRemindRequest, cb?: (error: string, rep: FlowProductRemindResponse) => void): Promise<FlowProductRemindResponse>;
}
