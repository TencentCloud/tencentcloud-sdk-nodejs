import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeNatsEipsInternalResponse, DescribeNatsEipsInternalRequest } from "./vpc_models";
/**
 * vpc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 内部用户查询所有NAT网关的EIP IP列表信息
     */
    DescribeNatsEipsInternal(req: DescribeNatsEipsInternalRequest, cb?: (error: string, rep: DescribeNatsEipsInternalResponse) => void): Promise<DescribeNatsEipsInternalResponse>;
}
