import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeRoleListResponse, DeleteMQTTTopicRequest, CreateInstanceResponse, ModifyRoleResponse, DeleteMQTTInsPublicEndpointRequest, ModifyInstanceRequest, CreateMQTTInsPublicEndpointResponse, ImportSourceClusterConsumerGroupsResponse, DeleteTopicRequest, ModifyMQTTInstanceRequest, DescribeMQTTProductSKUListResponse, DescribeRoleListRequest, DescribeMQTTClientResponse, DescribeMQTTMessageListResponse, DescribeMQTTProductSKUListRequest, ImportSourceClusterConsumerGroupsRequest, DescribeMQTTMessageResponse, DescribeMQTTInstanceListResponse, DescribeInstanceListResponse, ModifyInstanceResponse, CreateConsumerGroupRequest, ModifyMQTTTopicResponse, DescribeMQTTClientRequest, DescribeMQTTInsVPCEndpointsResponse, DescribeMQTTInsPublicEndpointsResponse, DescribeInstanceListRequest, DeleteMQTTUserRequest, ModifyMQTTInstanceCertBindingRequest, CreateMQTTTopicResponse, DescribeMQTTInstanceRequest, ImportSourceClusterTopicsRequest, CreateMQTTUserResponse, DeleteInstanceResponse, DescribeTopicResponse, DeleteMQTTInsPublicEndpointResponse, DeleteInstanceRequest, ModifyRoleRequest, DescribeMQTTInsVPCEndpointsRequest, DescribeFusionInstanceListResponse, CreateTopicRequest, DeleteRoleRequest, DeleteConsumerGroupRequest, CreateConsumerGroupResponse, DescribeMQTTUserListResponse, ModifyMQTTUserResponse, ModifyMQTTInsPublicEndpointRequest, ModifyMQTTInstanceCertBindingResponse, DeleteMQTTInstanceResponse, DescribeTopicRequest, DeleteMQTTInstanceRequest, CreateTopicResponse, DescribeMQTTInstanceListRequest, CreateMQTTInstanceResponse, DescribeMQTTInstanceResponse, DeleteMQTTUserResponse, ImportSourceClusterTopicsResponse, DescribeTopicListRequest, ModifyConsumerGroupRequest, DescribeConsumerGroupRequest, DescribeConsumerGroupListRequest, CreateInstanceRequest, DescribeConsumerGroupResponse, ModifyTopicResponse, DescribeMQTTInsPublicEndpointsRequest, DeleteRoleResponse, DescribeMQTTInstanceCertResponse, DescribeMQTTTopicListRequest, ModifyTopicRequest, DescribeInstanceResponse, DeleteMQTTTopicResponse, ModifyConsumerGroupResponse, DescribeMQTTInstanceCertRequest, ModifyMQTTInsPublicEndpointResponse, CreateMQTTUserRequest, DescribeFusionInstanceListRequest, DescribeMQTTMessageRequest, CreateRoleResponse, DescribeMQTTTopicListResponse, DescribeMQTTUserListRequest, ModifyMQTTInstanceResponse, CreateMQTTInstanceRequest, DescribeTopicListResponse, DescribeMQTTTopicRequest, CreateRoleRequest, DeleteConsumerGroupResponse, ModifyMQTTTopicRequest, DescribeConsumerGroupListResponse, ModifyMQTTUserRequest, CreateMQTTInsPublicEndpointRequest, CreateMQTTTopicRequest, DeleteTopicResponse, DescribeMQTTMessageListRequest, DescribeMQTTTopicResponse, DescribeInstanceRequest } from "./trocket_models";
/**
 * trocket client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询消息列表，如查询死信，请设置ConsumerGroup参数
     */
    DescribeMQTTMessageList(req: DescribeMQTTMessageListRequest, cb?: (error: string, rep: DescribeMQTTMessageListResponse) => void): Promise<DescribeMQTTMessageListResponse>;
    /**
     * 更新MQTT集群绑定证书
参数传空，则为删除证书
     */
    ModifyMQTTInstanceCertBinding(req: ModifyMQTTInstanceCertBindingRequest, cb?: (error: string, rep: ModifyMQTTInstanceCertBindingResponse) => void): Promise<ModifyMQTTInstanceCertBindingResponse>;
    /**
     * 修改主题属性
     */
    ModifyTopic(req: ModifyTopicRequest, cb?: (error: string, rep: ModifyTopicResponse) => void): Promise<ModifyTopicResponse>;
    /**
     * 修改主题属性
     */
    ModifyMQTTTopic(req: ModifyMQTTTopicRequest, cb?: (error: string, rep: ModifyMQTTTopicResponse) => void): Promise<ModifyMQTTTopicResponse>;
    /**
     * 删除MQTT访问用户
     */
    DeleteMQTTUser(req: DeleteMQTTUserRequest, cb?: (error: string, rep: DeleteMQTTUserResponse) => void): Promise<DeleteMQTTUserResponse>;
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
     * 获取产品售卖规格
     */
    DescribeMQTTProductSKUList(req?: DescribeMQTTProductSKUListRequest, cb?: (error: string, rep: DescribeMQTTProductSKUListResponse) => void): Promise<DescribeMQTTProductSKUListResponse>;
    /**
     * 导入topic列表
     */
    ImportSourceClusterTopics(req: ImportSourceClusterTopicsRequest, cb?: (error: string, rep: ImportSourceClusterTopicsResponse) => void): Promise<ImportSourceClusterTopicsResponse>;
    /**
     * 查询用户列表，Filter参数使用说明如下：

1. Username，用户名称模糊搜索
     */
    DescribeMQTTUserList(req: DescribeMQTTUserListRequest, cb?: (error: string, rep: DescribeMQTTUserListResponse) => void): Promise<DescribeMQTTUserListResponse>;
    /**
     * 删除MQTT实例的公网接入点
     */
    DeleteMQTTInsPublicEndpoint(req: DeleteMQTTInsPublicEndpointRequest, cb?: (error: string, rep: DeleteMQTTInsPublicEndpointResponse) => void): Promise<DeleteMQTTInsPublicEndpointResponse>;
    /**
     * 查询角色列表，Filter参数使用说明如下：

1. RoleName，角色名称模糊搜索
     */
    DescribeRoleList(req: DescribeRoleListRequest, cb?: (error: string, rep: DescribeRoleListResponse) => void): Promise<DescribeRoleListResponse>;
    /**
     * 修改MQTT角色
     */
    ModifyMQTTUser(req: ModifyMQTTUserRequest, cb?: (error: string, rep: ModifyMQTTUserResponse) => void): Promise<ModifyMQTTUserResponse>;
    /**
     * 删除消费组
     */
    DeleteConsumerGroup(req: DeleteConsumerGroupRequest, cb?: (error: string, rep: DeleteConsumerGroupResponse) => void): Promise<DeleteConsumerGroupResponse>;
    /**
     * 修改消费组属性
     */
    ModifyConsumerGroup(req: ModifyConsumerGroupRequest, cb?: (error: string, rep: ModifyConsumerGroupResponse) => void): Promise<ModifyConsumerGroupResponse>;
    /**
     * 查询MQTT实例公网接入点
     */
    DescribeMQTTInsVPCEndpoints(req: DescribeMQTTInsVPCEndpointsRequest, cb?: (error: string, rep: DescribeMQTTInsVPCEndpointsResponse) => void): Promise<DescribeMQTTInsVPCEndpointsResponse>;
    /**
     * 删除角色
     */
    DeleteRole(req: DeleteRoleRequest, cb?: (error: string, rep: DeleteRoleResponse) => void): Promise<DeleteRoleResponse>;
    /**
     * 删除MQTT实例
     */
    DeleteMQTTInstance(req: DeleteMQTTInstanceRequest, cb?: (error: string, rep: DeleteMQTTInstanceResponse) => void): Promise<DeleteMQTTInstanceResponse>;
    /**
     * 查询MQTT消息详情
     */
    DescribeMQTTMessage(req: DescribeMQTTMessageRequest, cb?: (error: string, rep: DescribeMQTTMessageResponse) => void): Promise<DescribeMQTTMessageResponse>;
    /**
     * 查询mqtt主题详情
     */
    DescribeMQTTTopic(req: DescribeMQTTTopicRequest, cb?: (error: string, rep: DescribeMQTTTopicResponse) => void): Promise<DescribeMQTTTopicResponse>;
    /**
     * 更新MQTT实例公网接入点
     */
    ModifyMQTTInsPublicEndpoint(req: ModifyMQTTInsPublicEndpointRequest, cb?: (error: string, rep: ModifyMQTTInsPublicEndpointResponse) => void): Promise<ModifyMQTTInsPublicEndpointResponse>;
    /**
     * 查询消费组详情
     */
    DescribeConsumerGroup(req: DescribeConsumerGroupRequest, cb?: (error: string, rep: DescribeConsumerGroupResponse) => void): Promise<DescribeConsumerGroupResponse>;
    /**
     * 创建主题
     */
    CreateTopic(req: CreateTopicRequest, cb?: (error: string, rep: CreateTopicResponse) => void): Promise<CreateTopicResponse>;
    /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
    DescribeMQTTTopicList(req: DescribeMQTTTopicListRequest, cb?: (error: string, rep: DescribeMQTTTopicListResponse) => void): Promise<DescribeMQTTTopicListResponse>;
    /**
     * 查询实例信息
     */
    DescribeMQTTInstance(req: DescribeMQTTInstanceRequest, cb?: (error: string, rep: DescribeMQTTInstanceResponse) => void): Promise<DescribeMQTTInstanceResponse>;
    /**
     * 创建主题
     */
    CreateMQTTTopic(req: CreateMQTTTopicRequest, cb?: (error: string, rep: CreateMQTTTopicResponse) => void): Promise<CreateMQTTTopicResponse>;
    /**
     * 创建 RocketMQ 5.x 集群
     */
    CreateInstance(req: CreateInstanceRequest, cb?: (error: string, rep: CreateInstanceResponse) => void): Promise<CreateInstanceResponse>;
    /**
     * 删除MQTT主题
     */
    DeleteMQTTTopic(req: DeleteMQTTTopicRequest, cb?: (error: string, rep: DeleteMQTTTopicResponse) => void): Promise<DeleteMQTTTopicResponse>;
    /**
     * 查询实例信息
     */
    DescribeInstance(req: DescribeInstanceRequest, cb?: (error: string, rep: DescribeInstanceResponse) => void): Promise<DescribeInstanceResponse>;
    /**
     * 获取主题列表，Filter参数使用说明如下：

1. TopicName，主题名称模糊搜索
2. TopicType，主题类型查询，支持多选，可选值：Normal,Order,Transaction,DelayScheduled
     */
    DescribeTopicList(req: DescribeTopicListRequest, cb?: (error: string, rep: DescribeTopicListResponse) => void): Promise<DescribeTopicListResponse>;
    /**
     * 查询MQTT实例公网接入点
     */
    DescribeMQTTInsPublicEndpoints(req: DescribeMQTTInsPublicEndpointsRequest, cb?: (error: string, rep: DescribeMQTTInsPublicEndpointsResponse) => void): Promise<DescribeMQTTInsPublicEndpointsResponse>;
    /**
     * 查询MQTT集群证书列表
     */
    DescribeMQTTInstanceCert(req: DescribeMQTTInstanceCertRequest, cb?: (error: string, rep: DescribeMQTTInstanceCertResponse) => void): Promise<DescribeMQTTInstanceCertResponse>;
    /**
     * 修改实例属性
     */
    ModifyMQTTInstance(req: ModifyMQTTInstanceRequest, cb?: (error: string, rep: ModifyMQTTInstanceResponse) => void): Promise<ModifyMQTTInstanceResponse>;
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
     * 获取消费组列表，Filter参数使用说明如下：

1. ConsumerGroupName，名称模糊查询
2. ConsumeMessageOrderly，投递顺序性。"true":顺序投递；"false":并发投递
     */
    DescribeConsumerGroupList(req: DescribeConsumerGroupListRequest, cb?: (error: string, rep: DescribeConsumerGroupListResponse) => void): Promise<DescribeConsumerGroupListResponse>;
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
     * 获取实例列表，Filters参数使用说明如下：
1. InstanceName, 名称模糊查询
2. InstanceId，实例ID查询
3. InstanceType, 实例类型查询，支持多选
4. Version，实例版本查询
当使用TagFilters查询时，Filters参数失效。
     */
    DescribeFusionInstanceList(req: DescribeFusionInstanceListRequest, cb?: (error: string, rep: DescribeFusionInstanceListResponse) => void): Promise<DescribeFusionInstanceListResponse>;
    /**
     * 添加mqtt角色
     */
    CreateMQTTUser(req: CreateMQTTUserRequest, cb?: (error: string, rep: CreateMQTTUserResponse) => void): Promise<CreateMQTTUserResponse>;
    /**
     * 修改角色
     */
    ModifyRole(req: ModifyRoleRequest, cb?: (error: string, rep: ModifyRoleResponse) => void): Promise<ModifyRoleResponse>;
    /**
     * 查询 MQTT 客户端详情
     */
    DescribeMQTTClient(req: DescribeMQTTClientRequest, cb?: (error: string, rep: DescribeMQTTClientResponse) => void): Promise<DescribeMQTTClientResponse>;
    /**
     * 查询主题详情，Offset和Limit参数是指订阅该主题的消费组查询分页参数，Filter参数使用说明如下：

ConsumerGroup，消费组名称过滤
     */
    DescribeTopic(req: DescribeTopicRequest, cb?: (error: string, rep: DescribeTopicResponse) => void): Promise<DescribeTopicResponse>;
    /**
     * 修改实例属性
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 删除主题
     */
    DeleteTopic(req: DeleteTopicRequest, cb?: (error: string, rep: DeleteTopicResponse) => void): Promise<DeleteTopicResponse>;
    /**
     * 为MQTT实例创建公网接入点
     */
    CreateMQTTInsPublicEndpoint(req: CreateMQTTInsPublicEndpointRequest, cb?: (error: string, rep: CreateMQTTInsPublicEndpointResponse) => void): Promise<CreateMQTTInsPublicEndpointResponse>;
}
