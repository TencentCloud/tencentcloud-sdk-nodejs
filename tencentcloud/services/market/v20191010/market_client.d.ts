import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SyncUserAndOrderInfoResponse, SyncUserAndOrderInfoRequest, FlowProductRemindResponse, GetUsagePlanUsageAmountResponse, FlowProductRemindRequest, GetUsagePlanUsageAmountRequest } from "./market_models";
/**
 * market client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 同步企微的用户信息和订单信息到云市场
     */
    SyncUserAndOrderInfo(req: SyncUserAndOrderInfoRequest, cb?: (error: string, rep: SyncUserAndOrderInfoResponse) => void): Promise<SyncUserAndOrderInfoResponse>;
    /**
     * 该接口可以根据InstanceId查询实例的api的使用情况。

     */
    GetUsagePlanUsageAmount(req: GetUsagePlanUsageAmountRequest, cb?: (error: string, rep: GetUsagePlanUsageAmountResponse) => void): Promise<GetUsagePlanUsageAmountResponse>;
    /**
     * 计量商品用量提醒，用于服务商调用云服务，云服务向客户发送提醒信息
     */
    FlowProductRemind(req: FlowProductRemindRequest, cb?: (error: string, rep: FlowProductRemindResponse) => void): Promise<FlowProductRemindResponse>;
}
