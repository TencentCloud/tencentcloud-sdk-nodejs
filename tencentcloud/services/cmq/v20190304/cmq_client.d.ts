import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { RewindQueueRequest, DescribeSubscriptionDetailRequest, ModifyQueueAttributeResponse, CreateQueueRequest, ModifySubscriptionAttributeResponse, ModifyTopicAttributeResponse, DeleteSubscribeRequest, DescribeSubscriptionDetailResponse, CreateSubscribeRequest, ClearQueueRequest, CreateTopicResponse, ClearSubscriptionFilterTagsResponse, UnbindDeadLetterResponse, DescribeTopicDetailRequest, DeleteTopicRequest, DescribeTopicDetailResponse, DescribeQueueDetailResponse, UnbindDeadLetterRequest, CreateTopicRequest, DeleteQueueRequest, DescribeDeadLetterSourceQueuesResponse, RewindQueueResponse, ModifyTopicAttributeRequest, DescribeQueueDetailRequest, DeleteTopicResponse, ClearSubscriptionFilterTagsRequest, CreateQueueResponse, DeleteSubscribeResponse, DescribeDeadLetterSourceQueuesRequest, CreateSubscribeResponse, ClearQueueResponse, ModifySubscriptionAttributeRequest, DeleteQueueResponse, ModifyQueueAttributeRequest } from "./cmq_models";
/**
 * cmq client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 创建订阅接口
     */
    CreateSubscribe(req: CreateSubscribeRequest, cb?: (error: string, rep: CreateSubscribeResponse) => void): Promise<CreateSubscribeResponse>;
    /**
     * 修改主题属性
     */
    ModifyTopicAttribute(req: ModifyTopicAttributeRequest, cb?: (error: string, rep: ModifyTopicAttributeResponse) => void): Promise<ModifyTopicAttributeResponse>;
    /**
     * 清空订阅者消息标签
     */
    ClearSubscriptionFilterTags(req: ClearSubscriptionFilterTagsRequest, cb?: (error: string, rep: ClearSubscriptionFilterTagsResponse) => void): Promise<ClearSubscriptionFilterTagsResponse>;
    /**
     * 删除订阅
     */
    DeleteSubscribe(req: DeleteSubscribeRequest, cb?: (error: string, rep: DeleteSubscribeResponse) => void): Promise<DeleteSubscribeResponse>;
    /**
     * 创建队列接口

     */
    CreateQueue(req: CreateQueueRequest, cb?: (error: string, rep: CreateQueueResponse) => void): Promise<CreateQueueResponse>;
    /**
     * 回溯队列
     */
    RewindQueue(req: RewindQueueRequest, cb?: (error: string, rep: RewindQueueResponse) => void): Promise<RewindQueueResponse>;
    /**
     * 修改订阅属性
     */
    ModifySubscriptionAttribute(req: ModifySubscriptionAttributeRequest, cb?: (error: string, rep: ModifySubscriptionAttributeResponse) => void): Promise<ModifySubscriptionAttributeResponse>;
    /**
     * 查询主题详情
     */
    DescribeTopicDetail(req: DescribeTopicDetailRequest, cb?: (error: string, rep: DescribeTopicDetailResponse) => void): Promise<DescribeTopicDetailResponse>;
    /**
     * 枚举队列
     */
    DescribeQueueDetail(req: DescribeQueueDetailRequest, cb?: (error: string, rep: DescribeQueueDetailResponse) => void): Promise<DescribeQueueDetailResponse>;
    /**
     * DeleteQueue
     */
    DeleteQueue(req: DeleteQueueRequest, cb?: (error: string, rep: DeleteQueueResponse) => void): Promise<DeleteQueueResponse>;
    /**
     * 查询订阅详情
     */
    DescribeSubscriptionDetail(req: DescribeSubscriptionDetailRequest, cb?: (error: string, rep: DescribeSubscriptionDetailResponse) => void): Promise<DescribeSubscriptionDetailResponse>;
    /**
     * 枚举死信队列源队列
     */
    DescribeDeadLetterSourceQueues(req: DescribeDeadLetterSourceQueuesRequest, cb?: (error: string, rep: DescribeDeadLetterSourceQueuesResponse) => void): Promise<DescribeDeadLetterSourceQueuesResponse>;
    /**
     * 删除主题
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 清除queue中的所有消息
     */
    ClearQueue(req: ClearQueueRequest, cb?: (error: string, rep: ClearQueueResponse) => void): Promise<ClearQueueResponse>;
    /**
     * 解绑死信队列
     */
    UnbindDeadLetter(req: UnbindDeadLetterRequest, cb?: (error: string, rep: UnbindDeadLetterResponse) => void): Promise<UnbindDeadLetterResponse>;
    /**
     * 修改队列属性
     */
    ModifyQueueAttribute(req: ModifyQueueAttributeRequest, cb?: (error: string, rep: ModifyQueueAttributeResponse) => void): Promise<ModifyQueueAttributeResponse>;
}
