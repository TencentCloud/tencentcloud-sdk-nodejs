import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeQueueDetailResponse, DescribeTopicDetailResponse, DescribeTopicDetailRequest, DescribeQueueDetailRequest } from "./cmq_models";
/**
 * cmq client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询主题详情
     */
    DescribeTopicDetail(req: DescribeTopicDetailRequest, cb?: (error: string, rep: DescribeTopicDetailResponse) => void): Promise<DescribeTopicDetailResponse>;
    /**
     * 枚举队列列表
     */
    DescribeQueueDetail(req: DescribeQueueDetailRequest, cb?: (error: string, rep: DescribeQueueDetailResponse) => void): Promise<DescribeQueueDetailResponse>;
}
