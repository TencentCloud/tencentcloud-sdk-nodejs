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
当查询的产品对应时间内无事件时将返回空结果。
可以参考健康看板历史事件页面来获取查询案例（链接：https://status.cloud.tencent.com/history）。
     */
    DescribeEvents(req: DescribeEventsRequest, cb?: (error: string, rep: DescribeEventsResponse) => void): Promise<DescribeEventsResponse>;
}
