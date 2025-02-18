import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeRabbitMQServerlessConnectionResponse, DeleteRabbitMQServerlessPermissionResponse, ModifyRabbitMQServerlessUserResponse, CreateRabbitMQServerlessVirtualHostRequest, DescribeRabbitMQServerlessUserResponse, ModifyRabbitMQServerlessExchangeResponse, DescribeRabbitMQServerlessConsumersResponse, DescribeRabbitMQServerlessQueueDetailResponse, DescribeRabbitMQServerlessVirtualHostRequest, ModifyRabbitMQServerlessVirtualHostRequest, CreateRabbitMQServerlessUserResponse, DeleteRabbitMQServerlessQueueRequest, ListRabbitMQServerlessInstancesResponse, CreateRabbitMQServerlessUserRequest, ModifyRabbitMQServerlessUserRequest, DeleteRabbitMQServerlessPermissionRequest, CreateRabbitMQServerlessVirtualHostResponse, ModifyRabbitMQServerlessInstanceRequest, DescribeRabbitMQServerlessExchangesResponse, DeleteRabbitMQServerlessVirtualHostResponse, DescribeRabbitMQServerlessVirtualHostResponse, DescribeRabbitMQServerlessQueuesResponse, ModifyRabbitMQServerlessInstanceResponse, ModifyRabbitMQServerlessVirtualHostResponse, CreateRabbitMQServerlessExchangeRequest, DescribeRabbitMQServerlessConnectionRequest, DescribeRabbitMQServerlessUserRequest, DeleteRabbitMQServerlessUserResponse, DescribeRabbitMQServerlessBindingsResponse, CreateRabbitMQServerlessExchangeResponse, DeleteRabbitMQServerlessExchangeResponse, DeleteRabbitMQServerlessUserRequest, DescribeRabbitMQServerlessConsumersRequest, CreateRabbitMQServerlessBindingResponse, ModifyRabbitMQServerlessPermissionRequest, CreateRabbitMQServerlessQueueRequest, DeleteRabbitMQServerlessBindingRequest, DescribeRabbitMQServerlessQueueDetailRequest, ModifyRabbitMQServerlessPermissionResponse, DeleteRabbitMQServerlessExchangeRequest, DescribeRabbitMQServerlessExchangeDetailRequest, ModifyRabbitMQServerlessQueueResponse, CreateRabbitMQServerlessBindingRequest, DescribeRabbitMQServerlessInstanceResponse, ListRabbitMQServerlessInstancesRequest, DescribeRabbitMQServerlessInstanceRequest, DescribeRabbitMQServerlessPermissionRequest, DescribeRabbitMQServerlessExchangeDetailResponse, DescribeRabbitMQServerlessExchangesRequest, DeleteRabbitMQServerlessQueueResponse, CreateRabbitMQServerlessQueueResponse, DescribeRabbitMQServerlessQueuesRequest, DescribeRabbitMQServerlessBindingsRequest, DescribeRabbitMQServerlessPermissionResponse, DeleteRabbitMQServerlessBindingResponse, DeleteRabbitMQServerlessVirtualHostRequest, ModifyRabbitMQServerlessExchangeRequest, ModifyRabbitMQServerlessQueueRequest } from "./trabbit_models";
/**
 * trabbit client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 解绑RabbitMQ路由关系
     */
    DeleteRabbitMQServerlessBinding(req: DeleteRabbitMQServerlessBindingRequest, cb?: (error: string, rep: DeleteRabbitMQServerlessBindingResponse) => void): Promise<DeleteRabbitMQServerlessBindingResponse>;
    /**
     * 修改集群信息
     */
    ModifyRabbitMQServerlessInstance(req: ModifyRabbitMQServerlessInstanceRequest, cb?: (error: string, rep: ModifyRabbitMQServerlessInstanceResponse) => void): Promise<ModifyRabbitMQServerlessInstanceResponse>;
    /**
     * 创建RabbitMQ的vhost
     */
    CreateRabbitMQServerlessVirtualHost(req: CreateRabbitMQServerlessVirtualHostRequest, cb?: (error: string, rep: CreateRabbitMQServerlessVirtualHostResponse) => void): Promise<CreateRabbitMQServerlessVirtualHostResponse>;
    /**
     * 获取单个RabbitMQ专享实例信息
     */
    DescribeRabbitMQServerlessInstance(req: DescribeRabbitMQServerlessInstanceRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessInstanceResponse) => void): Promise<DescribeRabbitMQServerlessInstanceResponse>;
    /**
     * 查询RabbitMQ队列消费者列表
     */
    DescribeRabbitMQServerlessConsumers(req: DescribeRabbitMQServerlessConsumersRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessConsumersResponse) => void): Promise<DescribeRabbitMQServerlessConsumersResponse>;
    /**
     * 删除RabbitMQ队列
     */
    DeleteRabbitMQServerlessQueue(req: DeleteRabbitMQServerlessQueueRequest, cb?: (error: string, rep: DeleteRabbitMQServerlessQueueResponse) => void): Promise<DeleteRabbitMQServerlessQueueResponse>;
    /**
     * 删除RabbitMQ的用户
     */
    DeleteRabbitMQServerlessUser(req: DeleteRabbitMQServerlessUserRequest, cb?: (error: string, rep: DeleteRabbitMQServerlessUserResponse) => void): Promise<DeleteRabbitMQServerlessUserResponse>;
    /**
     * 删除RabbitMQ的vhost
     */
    DeleteRabbitMQServerlessVirtualHost(req: DeleteRabbitMQServerlessVirtualHostRequest, cb?: (error: string, rep: DeleteRabbitMQServerlessVirtualHostResponse) => void): Promise<DeleteRabbitMQServerlessVirtualHostResponse>;
    /**
     * 修改RabbitMQ的用户
     */
    ModifyRabbitMQServerlessUser(req: ModifyRabbitMQServerlessUserRequest, cb?: (error: string, rep: ModifyRabbitMQServerlessUserResponse) => void): Promise<ModifyRabbitMQServerlessUserResponse>;
    /**
     * 查询RabbitMQ用户列表
     */
    DescribeRabbitMQServerlessUser(req: DescribeRabbitMQServerlessUserRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessUserResponse) => void): Promise<DescribeRabbitMQServerlessUserResponse>;
    /**
     * 查询RabbitMQ exchange 详情
     */
    DescribeRabbitMQServerlessExchangeDetail(req: DescribeRabbitMQServerlessExchangeDetailRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessExchangeDetailResponse) => void): Promise<DescribeRabbitMQServerlessExchangeDetailResponse>;
    /**
     * 查询RabbitMQ vhost列表
     */
    DescribeRabbitMQServerlessVirtualHost(req: DescribeRabbitMQServerlessVirtualHostRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessVirtualHostResponse) => void): Promise<DescribeRabbitMQServerlessVirtualHostResponse>;
    /**
     * 查询RabbitMQ exchange 列表
     */
    DescribeRabbitMQServerlessExchanges(req: DescribeRabbitMQServerlessExchangesRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessExchangesResponse) => void): Promise<DescribeRabbitMQServerlessExchangesResponse>;
    /**
     * 获取路由关系列表
     */
    DescribeRabbitMQServerlessBindings(req: DescribeRabbitMQServerlessBindingsRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessBindingsResponse) => void): Promise<DescribeRabbitMQServerlessBindingsResponse>;
    /**
     * 创建RabbitMQ的用户
     */
    CreateRabbitMQServerlessUser(req: CreateRabbitMQServerlessUserRequest, cb?: (error: string, rep: CreateRabbitMQServerlessUserResponse) => void): Promise<CreateRabbitMQServerlessUserResponse>;
    /**
     * 查询RabbitMQ队列列表
     */
    DescribeRabbitMQServerlessQueues(req: DescribeRabbitMQServerlessQueuesRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessQueuesResponse) => void): Promise<DescribeRabbitMQServerlessQueuesResponse>;
    /**
     * 修改RabbitMQ的vhost
     */
    ModifyRabbitMQServerlessVirtualHost(req: ModifyRabbitMQServerlessVirtualHostRequest, cb?: (error: string, rep: ModifyRabbitMQServerlessVirtualHostResponse) => void): Promise<ModifyRabbitMQServerlessVirtualHostResponse>;
    /**
     * 创建RabbitMQ队列
     */
    CreateRabbitMQServerlessQueue(req: CreateRabbitMQServerlessQueueRequest, cb?: (error: string, rep: CreateRabbitMQServerlessQueueResponse) => void): Promise<CreateRabbitMQServerlessQueueResponse>;
    /**
     * 删除RabbitMQ exchange
     */
    DeleteRabbitMQServerlessExchange(req: DeleteRabbitMQServerlessExchangeRequest, cb?: (error: string, rep: DeleteRabbitMQServerlessExchangeResponse) => void): Promise<DeleteRabbitMQServerlessExchangeResponse>;
    /**
     * 查询RabbitMQ权限列表
     */
    DescribeRabbitMQServerlessPermission(req: DescribeRabbitMQServerlessPermissionRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessPermissionResponse) => void): Promise<DescribeRabbitMQServerlessPermissionResponse>;
    /**
     * 查询RabbitMQ队列详情
     */
    DescribeRabbitMQServerlessQueueDetail(req: DescribeRabbitMQServerlessQueueDetailRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessQueueDetailResponse) => void): Promise<DescribeRabbitMQServerlessQueueDetailResponse>;
    /**
     * 查询RabbitMQ连接列表
     */
    DescribeRabbitMQServerlessConnection(req: DescribeRabbitMQServerlessConnectionRequest, cb?: (error: string, rep: DescribeRabbitMQServerlessConnectionResponse) => void): Promise<DescribeRabbitMQServerlessConnectionResponse>;
    /**
     * 修改RabbitMQ队列
     */
    ModifyRabbitMQServerlessQueue(req: ModifyRabbitMQServerlessQueueRequest, cb?: (error: string, rep: ModifyRabbitMQServerlessQueueResponse) => void): Promise<ModifyRabbitMQServerlessQueueResponse>;
    /**
     * 修改RabbitMQ exchange
     */
    ModifyRabbitMQServerlessExchange(req: ModifyRabbitMQServerlessExchangeRequest, cb?: (error: string, rep: ModifyRabbitMQServerlessExchangeResponse) => void): Promise<ModifyRabbitMQServerlessExchangeResponse>;
    /**
     * 创建RabbitMQ路由关系
     */
    CreateRabbitMQServerlessBinding(req: CreateRabbitMQServerlessBindingRequest, cb?: (error: string, rep: CreateRabbitMQServerlessBindingResponse) => void): Promise<CreateRabbitMQServerlessBindingResponse>;
    /**
     * 删除RabbitMQ的权限
     */
    DeleteRabbitMQServerlessPermission(req: DeleteRabbitMQServerlessPermissionRequest, cb?: (error: string, rep: DeleteRabbitMQServerlessPermissionResponse) => void): Promise<DeleteRabbitMQServerlessPermissionResponse>;
    /**
     * 获取实例列表
     */
    ListRabbitMQServerlessInstances(req: ListRabbitMQServerlessInstancesRequest, cb?: (error: string, rep: ListRabbitMQServerlessInstancesResponse) => void): Promise<ListRabbitMQServerlessInstancesResponse>;
    /**
     * 创建RabbitMQ exchange
     */
    CreateRabbitMQServerlessExchange(req: CreateRabbitMQServerlessExchangeRequest, cb?: (error: string, rep: CreateRabbitMQServerlessExchangeResponse) => void): Promise<CreateRabbitMQServerlessExchangeResponse>;
    /**
     * 修改RabbitMQ的权限
     */
    ModifyRabbitMQServerlessPermission(req: ModifyRabbitMQServerlessPermissionRequest, cb?: (error: string, rep: ModifyRabbitMQServerlessPermissionResponse) => void): Promise<ModifyRabbitMQServerlessPermissionResponse>;
}
