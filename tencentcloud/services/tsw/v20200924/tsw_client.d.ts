import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeAgentShellResponse, DescribeAgentShellRequest } from "./tsw_models";
/**
 * tsw client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取服务接入信息
     */
    DescribeAgentShell(req?: DescribeAgentShellRequest, cb?: (error: string, rep: DescribeAgentShellResponse) => void): Promise<DescribeAgentShellResponse>;
}
