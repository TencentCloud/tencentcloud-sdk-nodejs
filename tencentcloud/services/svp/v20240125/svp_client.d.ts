import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateSavingPlanOrderRequest, CreateSavingPlanOrderResponse } from "./svp_models";
/**
 * svp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建节省计划订单
     */
    CreateSavingPlanOrder(req: CreateSavingPlanOrderRequest, cb?: (error: string, rep: CreateSavingPlanOrderResponse) => void): Promise<CreateSavingPlanOrderResponse>;
}
