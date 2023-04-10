import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeDrawResourceListResponse, DescribeDrawResourceListRequest } from "./tourism_models";
/**
 * tourism client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 依据客户的Uin查询开通的资源列表
     */
    DescribeDrawResourceList(req: DescribeDrawResourceListRequest, cb?: (error: string, rep: DescribeDrawResourceListResponse) => void): Promise<DescribeDrawResourceListResponse>;
}
