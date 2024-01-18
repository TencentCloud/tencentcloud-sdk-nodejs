import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyInstanceResponse, CreateTopicResponse, ImportSourceClusterTopicsResponse, CreateConsumerGroupRequest, CreateRoleResponse, CreateMQTTInstanceResponse, ImportSourceClusterConsumerGroupsRequest, DescribeRoleListResponse, ModifyInstanceRequest, DescribeTopicListRequest, DescribeInstanceListRequest, CreateInstanceResponse, CreateMQTTInstanceRequest, DescribeTopicListResponse, DeleteInstanceResponse, ModifyConsumerGroupRequest, DescribeConsumerGroupRequest, DescribeConsumerGroupListRequest, ModifyRoleResponse, DescribeConsumerGroupResponse, CreateInstanceRequest, CreateRoleRequest, DeleteTopicRequest, DeleteConsumerGroupResponse, ImportSourceClusterTopicsRequest, DescribeTopicResponse, ImportSourceClusterConsumerGroupsResponse, DeleteRoleResponse, ModifyRoleRequest, DescribeTopicStatsOpRequest, CreateTopicRequest, DescribeConsumerGroupListResponse, DeleteRoleRequest, DescribeMQTTProductSKUListResponse, DescribeRoleListRequest, ModifyTopicResponse, ModifyConsumerGroupResponse, ModifyTopicRequest, DescribeInstanceResponse, DescribeTopicStatsOpResponse, DeleteConsumerGroupRequest, DeleteTopicResponse, CreateConsumerGroupResponse, DescribeMQTTProductSKUListRequest, DeleteInstanceRequest, DescribeInstanceRequest, DescribeMQTTInstanceListRequest, DescribeMQTTInstanceListResponse, DescribeInstanceListResponse, DescribeTopicRequest } from "./trocket_models";
/**
 * trocket client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改主题属性
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 添加角色
     */
    CreateRole(req: CreateRoleRequest, cb?: (error: string, rep: CreateRoleResponse) => void): Promise<CreateRoleResponse>;
    /**
     * 导入消费者组列表
     */
    ImportSourceClusterConsumerGroups(req: ImportSourceClusterConsumerGroupsRequest, cb?: (error: string, rep: ImportSourceClusterConsumerGroupsResponse) => void): Promise<ImportSourceClusterConsumerGroupsResponse>;
    /**
     * 删除实例
     */
    DeleteInstance(req: DeleteInstanceRequest, cb?: (error: string, rep: DeleteInstanceResponse) => void): Promise<DeleteInstanceResponse>;
    /**
     * 创建消费组
     */
    CreateConsumerGroup(req: CreateConsumerGroupRequest, cb?: (error: string, rep: CreateConsumerGroupResponse) => void): Promise<CreateConsumerGroupResponse>;
    /**
     * 查询角色列表，Filter参数使用说明如下：

1. RoleName，角色名称模糊搜索
     */
    DescribeRoleList(req: DescribeRoleListRequest, cb?: (error: string, rep: DescribeRoleListResponse) => void): Promise<DescribeRoleListResponse>;
    /**
     * 运营端查询topicStata
     */
    DescribeTopicStatsOp(req: DescribeTopicStatsOpRequest, cb?: (error: string, rep: DescribeTopicStatsOpResponse) => void): Promise<DescribeTopicStatsOpResponse>;
    /**
     * 非对外接口，获取产品售卖规格
     */
    DescribeMQTTProductSKUList(req?: DescribeMQTTProductSKUListRequest, cb?: (error: string, rep: DescribeMQTTProductSKUListResponse) => void): Promise<DescribeMQTTProductSKUListResponse>;
    /**
     * 删除消费组
     */
    DeleteConsumerGroup(req: DeleteConsumerGroupRequest, cb?: (error: string, rep: DeleteConsumerGroupResponse) => void): Promise<DeleteConsumerGroupResponse>;
    /**
     * 修改消费组属性
     */
    ModifyConsumerGroup(req: ModifyConsumerGroupRequest, cb?: (error: string, rep: ModifyConsumerGroupResponse) => void): Promise<ModifyConsumerGroupResponse>;
    /**
     * 删除角色
     */
    DeleteRole(req: DeleteRoleRequest, cb?: (error: string, rep: DeleteRoleResponse) => void): Promise<DeleteRoleResponse>;
    /**
     * 查询消费组详情
     */
    DescribeConsumerGroup(req: DescribeConsumerGroupRequest, cb?: (error: string, rep: DescribeConsumerGroupResponse) => void): Promise<DescribeConsumerGroupResponse>;
    /**
     * 创建主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 购买新实例
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 查询实例信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 删除主题
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
3. InstanceStatus，实例状态查询，支持多选

当使用TagFilters查询时，Filters参数失效。
     */
    DescribeMQTTInstanceList(req: DescribeMQTTInstanceListRequest, cb?: (error: string, rep: DescribeMQTTInstanceListResponse) => void): Promise<DescribeMQTTInstanceListResponse>;
    /**
     * 导入topic列表
     */
    ImportSourceClusterTopics(req: ImportSourceClusterTopicsRequest, cb?: (error: string, rep: ImportSourceClusterTopicsResponse) => void): Promise<ImportSourceClusterTopicsResponse>;
    /**
     * 购买新的MQTT实例
     */
    CreateMQTTInstance(req: CreateMQTTInstanceRequest, cb?: (error: string, rep: CreateMQTTInstanceResponse) => void): Promise<CreateMQTTInstanceResponse>;
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
     * 获取消费组列表，Filter参数使用说明如下：

1. ConsumerGroupName，名称模糊查询
2. ConsumeMessageOrderly，投递顺序性。"true":顺序投递；"false":并发投递
     */
    DescribeConsumerGroupList(req: DescribeConsumerGroupListRequest, cb?: (error: string, rep: DescribeConsumerGroupListResponse) => void): Promise<DescribeConsumerGroupListResponse>;
    /**
     * 修改角色
     */
    ModifyRole(req: ModifyRoleRequest, cb?: (error: string, rep: ModifyRoleResponse) => void): Promise<ModifyRoleResponse>;
    /**
     * 查询主题详情，Offset和Limit参数是指订阅该主题的消费组查询分页参数，Filter参数使用说明如下：

ConsumerGroup，消费组名称过滤
     */
    DescribeTopic(req: DescribeTopicRequest, cb?: (error: string, rep: DescribeTopicResponse) => void): Promise<DescribeTopicResponse>;
    /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
    DescribeTopicList(req: DescribeTopicListRequest, cb?: (error: string, rep: DescribeTopicListResponse) => void): Promise<DescribeTopicListResponse>;
    /**
     * 修改实例属性
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
}
