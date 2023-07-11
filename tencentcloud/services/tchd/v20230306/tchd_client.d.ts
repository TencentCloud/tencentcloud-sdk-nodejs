import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeEventsResponse, DescribeEventsRequest } from "./tchd_models";
/**
 * tchd client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口用于查询腾讯云健康看板的可用性事件信息，可以通过产品列表、地域列表和事件发生日期进行过滤查询。
     */
    DescribeEvents(req: DescribeEventsRequest, cb?: (error: string, rep: DescribeEventsResponse) => void): Promise<DescribeEventsResponse>;
}
