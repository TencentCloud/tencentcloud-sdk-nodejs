import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyInstanceResponse, CreateTopicResponse, CreateConsumerGroupRequest, ModifyInstanceRequest, DescribeTopicListRequest, DescribeInstanceListRequest, CreateInstanceResponse, DescribeTopicListResponse, DeleteInstanceResponse, ModifyConsumerGroupRequest, DescribeConsumerGroupRequest, DescribeConsumerGroupResponse, CreateInstanceRequest, DeleteTopicRequest, DeleteConsumerGroupResponse, ModifyTopicResponse, DescribeTopicResponse, DescribeTopicStatsOpRequest, CreateTopicRequest, DescribeTopicStatsOpResponse, ModifyTopicRequest, DescribeInstanceResponse, DeleteConsumerGroupRequest, DeleteTopicResponse, CreateConsumerGroupResponse, ModifyConsumerGroupResponse, DeleteInstanceRequest, DescribeInstanceRequest, DescribeInstanceListResponse, DescribeTopicRequest } from "./trocket_models";
/**
 * trocket client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 运营端查询topicStata
     */
    DescribeTopicStatsOp(req: DescribeTopicStatsOpRequest, cb?: (error: string, rep: DescribeTopicStatsOpResponse) => void): Promise<DescribeTopicStatsOpResponse>;
    /**
     * 查询消费组详情
     */
    DescribeConsumerGroup(req: DescribeConsumerGroupRequest, cb?: (error: string, rep: DescribeConsumerGroupResponse) => void): Promise<DescribeConsumerGroupResponse>;
    /**
     * 创建主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 删除消费组
     */
    DeleteConsumerGroup(req: DeleteConsumerGroupRequest, cb?: (error: string, rep: DeleteConsumerGroupResponse) => void): Promise<DeleteConsumerGroupResponse>;
    /**
     * 修改消费组属性
     */
    ModifyConsumerGroup(req: ModifyConsumerGroupRequest, cb?: (error: string, rep: ModifyConsumerGroupResponse) => void): Promise<ModifyConsumerGroupResponse>;
    /**
     * 购买新实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    DescribeInstanceList(req: DescribeInstanceListRequest, cb?: (error: string, rep: DescribeInstanceListResponse) => void): Promise<DescribeInstanceListResponse>;
    /**
     * 查询主题详情，Offset和Limit参数是指订阅该主题的消费组查询分页参数，Filter参数使用说明如下：

ConsumerGroup，消费组名称过滤
     */
    DescribeTopic(req: DescribeTopicRequest, cb?: (error: string, rep: DescribeTopicResponse) => void): Promise<DescribeTopicResponse>;
    /**
     * 修改主题属性
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 查询实例信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 删除实例
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
    DescribeTopicList(req: DescribeTopicListRequest, cb?: (error: string, rep: DescribeTopicListResponse) => void): Promise<DescribeTopicListResponse>;
    /**
     * 删除主题
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 创建消费组
     */
    CreateConsumerGroup(req: CreateConsumerGroupRequest, cb?: (error: string, rep: CreateConsumerGroupResponse) => void): Promise<CreateConsumerGroupResponse>;
    /**
     * 修改实例属性
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
}
