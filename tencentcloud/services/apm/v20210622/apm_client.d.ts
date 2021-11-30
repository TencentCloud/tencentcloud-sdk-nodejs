import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeApmAgentRequest, DescribeApmAgentResponse } from "./apm_models";
/**
 * apm client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取Apm Agent信息
     */
    DescribeApmAgent(req: DescribeApmAgentRequest, cb?: (error: string, rep: DescribeApmAgentResponse) => void): Promise<DescribeApmAgentResponse>;
}
