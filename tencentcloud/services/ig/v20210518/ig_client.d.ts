import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeIgOrderListRequest, DescribeIgOrderListResponse } from "./ig_models";
/**
 * ig client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询智能导诊订单列表
     */
    DescribeIgOrderList(req: DescribeIgOrderListRequest, cb?: (error: string, rep: DescribeIgOrderListResponse) => void): Promise<DescribeIgOrderListResponse>;
}
