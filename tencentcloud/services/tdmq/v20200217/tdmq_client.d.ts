import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyEnvironmentAttributesRequest, DescribeSubscriptionsRequest, DescribeEnvironmentAttributesRequest, ResetMsgSubOffsetByTimestampResponse, DescribeTopicsResponse, CreateTopicResponse, DescribeEnvironmentsResponse, ModifyTopicResponse, DescribeProducersRequest, DescribeEnvironmentAttributesResponse, DeleteTopicsResponse, DescribeSubscriptionsResponse, DescribeProducersResponse, CreateTopicRequest, DescribeTopicsRequest, DeleteEnvironmentsResponse, DeleteTopicsRequest, DescribeEnvironmentRolesResponse, CreateSubscriptionRequest, ModifyTopicRequest, ModifyEnvironmentAttributesResponse, DeleteSubscriptionsRequest, CreateEnvironmentResponse, ResetMsgSubOffsetByTimestampRequest, DeleteSubscriptionsResponse, CreateSubscriptionResponse, DeleteEnvironmentsRequest, DescribeEnvironmentsRequest, CreateEnvironmentRequest, DescribeEnvironmentRolesRequest } from "./tdmq_models";
/**
 * tdmq client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 新增指定分区、类型的消息主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 批量删除租户下的环境
     */
    DeleteEnvironments(req: DeleteEnvironmentsRequest, cb?: (error: string, rep: DeleteEnvironmentsResponse) => void): Promise<DeleteEnvironmentsResponse>;
    /**
     * 修改主题备注和分区数
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 批量删除topics
     */
    DeleteTopics(req: DeleteTopicsRequest, cb?: (error: string, rep: DeleteTopicsResponse) => void): Promise<DeleteTopicsResponse>;
    /**
     * 创建一个主题的订阅关系
     */
    CreateSubscription(req: CreateSubscriptionRequest, cb?: (error: string, rep: CreateSubscriptionResponse) => void): Promise<CreateSubscriptionResponse>;
    /**
     * 查询指定环境和主题下的订阅者列表
     */
    DescribeSubscriptions(req: DescribeSubscriptionsRequest, cb?: (error: string, rep: DescribeSubscriptionsResponse) => void): Promise<DescribeSubscriptionsResponse>;
    /**
     * 获取环境下主题列表
     */
    DescribeTopics(req: DescribeTopicsRequest, cb?: (error: string, rep: DescribeTopicsResponse) => void): Promise<DescribeTopicsResponse>;
    /**
     * 获取指定环境的属性
     */
    DescribeEnvironmentAttributes(req: DescribeEnvironmentAttributesRequest, cb?: (error: string, rep: DescribeEnvironmentAttributesResponse) => void): Promise<DescribeEnvironmentAttributesResponse>;
    /**
     * 修改指定环境的属性值
     */
    ModifyEnvironmentAttributes(req: ModifyEnvironmentAttributesRequest, cb?: (error: string, rep: ModifyEnvironmentAttributesResponse) => void): Promise<ModifyEnvironmentAttributesResponse>;
    /**
     * 用于在用户账户下创建消息队列 Tdmq环境（命名空间）
     */
    CreateEnvironment(req: CreateEnvironmentRequest, cb?: (error: string, rep: CreateEnvironmentResponse) => void): Promise<CreateEnvironmentResponse>;
    /**
     * 获取租户下环境列表
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 根据时间戳进行消息回溯，精确到毫秒
     */
    ResetMsgSubOffsetByTimestamp(req: ResetMsgSubOffsetByTimestampRequest, cb?: (error: string, rep: ResetMsgSubOffsetByTimestampResponse) => void): Promise<ResetMsgSubOffsetByTimestampResponse>;
    /**
     * 获取生产者列表，仅显示在线的生产者
     */
    DescribeProducers(req: DescribeProducersRequest, cb?: (error: string, rep: DescribeProducersResponse) => void): Promise<DescribeProducersResponse>;
    /**
     * 获取环境角色列表
     */
    DescribeEnvironmentRoles(req: DescribeEnvironmentRolesRequest, cb?: (error: string, rep: DescribeEnvironmentRolesResponse) => void): Promise<DescribeEnvironmentRolesResponse>;
    /**
     * 删除订阅关系
     */
    DeleteSubscriptions(req: DeleteSubscriptionsRequest, cb?: (error: string, rep: DeleteSubscriptionsResponse) => void): Promise<DeleteSubscriptionsResponse>;
}
