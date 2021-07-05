import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeTransactionsRequest, DescribeTransactionsResponse } from "./dtf_models";
/**
 * dtf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询主事务列表
     */
    DescribeTransactions(req: DescribeTransactionsRequest, cb?: (error: string, rep: DescribeTransactionsResponse) => void): Promise<DescribeTransactionsResponse>;
}
