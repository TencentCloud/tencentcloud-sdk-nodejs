/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeRabbitMQServerlessConnectionResponse,
  DeleteRabbitMQServerlessPermissionResponse,
  RabbitMQBindingListInfo,
  ModifyRabbitMQServerlessUserResponse,
  CreateRabbitMQServerlessVirtualHostRequest,
  DescribeRabbitMQServerlessUserResponse,
  ModifyRabbitMQServerlessExchangeResponse,
  DescribeRabbitMQServerlessConsumersResponse,
  DescribeRabbitMQServerlessQueueDetailResponse,
  DescribeRabbitMQServerlessVirtualHostRequest,
  ModifyRabbitMQServerlessVirtualHostRequest,
  CreateRabbitMQServerlessUserResponse,
  DeleteRabbitMQServerlessQueueRequest,
  ListRabbitMQServerlessInstancesResponse,
  CreateRabbitMQServerlessUserRequest,
  ModifyRabbitMQServerlessUserRequest,
  DeleteRabbitMQServerlessPermissionRequest,
  CreateRabbitMQServerlessVirtualHostResponse,
  ModifyRabbitMQServerlessInstanceRequest,
  RabbitMQServerlessInstance,
  DescribeRabbitMQServerlessExchangesResponse,
  DeleteRabbitMQServerlessVirtualHostResponse,
  RabbitMQUser,
  RabbitMQServerlessAccessInfo,
  RabbitMQPermission,
  QueueQuota,
  DescribeRabbitMQServerlessVirtualHostResponse,
  DescribeRabbitMQServerlessQueuesResponse,
  ModifyRabbitMQServerlessInstanceResponse,
  ModifyRabbitMQServerlessVirtualHostResponse,
  CreateRabbitMQServerlessExchangeRequest,
  DescribeRabbitMQServerlessConnectionRequest,
  DescribeRabbitMQServerlessUserRequest,
  DeleteRabbitMQServerlessUserResponse,
  RabbitMQClusterInfo,
  DescribeRabbitMQServerlessBindingsResponse,
  CreateRabbitMQServerlessExchangeResponse,
  DeleteRabbitMQServerlessExchangeResponse,
  DeleteRabbitMQServerlessUserRequest,
  DescribeRabbitMQServerlessConsumersRequest,
  RabbitMQConsumersListInfo,
  CreateRabbitMQServerlessBindingResponse,
  UserQuota,
  ModifyRabbitMQServerlessPermissionRequest,
  CreateRabbitMQServerlessQueueRequest,
  DeleteRabbitMQServerlessBindingRequest,
  RabbitMQVirtualHostStatistics,
  DescribeRabbitMQServerlessQueueDetailRequest,
  RabbitMQQueueListInfo,
  Filter,
  ModifyRabbitMQServerlessPermissionResponse,
  DeleteRabbitMQServerlessExchangeRequest,
  DescribeRabbitMQServerlessExchangeDetailRequest,
  RabbitMQClusterSpecInfo,
  ModifyRabbitMQServerlessQueueResponse,
  CreateRabbitMQServerlessBindingRequest,
  RabbitMQServerlessEndpoint,
  RabbitMQVirtualHostInfo,
  ExchangeQuota,
  DescribeRabbitMQServerlessInstanceResponse,
  ListRabbitMQServerlessInstancesRequest,
  RabbitMQConnection,
  RabbitMQQueueListConsumerDetailInfo,
  DescribeRabbitMQServerlessInstanceRequest,
  DescribeRabbitMQServerlessPermissionRequest,
  DescribeRabbitMQServerlessExchangeDetailResponse,
  VpcEndpointInfo,
  DescribeRabbitMQServerlessExchangesRequest,
  RabbitMQServerlessWhiteListInfo,
  DeleteRabbitMQServerlessQueueResponse,
  CreateRabbitMQServerlessQueueResponse,
  DescribeRabbitMQServerlessQueuesRequest,
  DescribeRabbitMQServerlessBindingsRequest,
  DescribeRabbitMQServerlessPermissionResponse,
  DeleteRabbitMQServerlessBindingResponse,
  VirtualHostQuota,
  DeleteRabbitMQServerlessVirtualHostRequest,
  ModifyRabbitMQServerlessExchangeRequest,
  RabbitMQExchangeListInfo,
  ModifyRabbitMQServerlessQueueRequest,
} from "./trabbit_models"

/**
 * trabbit client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("trabbit.tencentcloudapi.com", "2023-04-18", clientConfig)
  }

  /**
   * 解绑RabbitMQ路由关系
   */
  async DeleteRabbitMQServerlessBinding(
    req: DeleteRabbitMQServerlessBindingRequest,
    cb?: (error: string, rep: DeleteRabbitMQServerlessBindingResponse) => void
  ): Promise<DeleteRabbitMQServerlessBindingResponse> {
    return this.request("DeleteRabbitMQServerlessBinding", req, cb)
  }

  /**
   * 修改集群信息
   */
  async ModifyRabbitMQServerlessInstance(
    req: ModifyRabbitMQServerlessInstanceRequest,
    cb?: (error: string, rep: ModifyRabbitMQServerlessInstanceResponse) => void
  ): Promise<ModifyRabbitMQServerlessInstanceResponse> {
    return this.request("ModifyRabbitMQServerlessInstance", req, cb)
  }

  /**
   * 创建RabbitMQ的vhost
   */
  async CreateRabbitMQServerlessVirtualHost(
    req: CreateRabbitMQServerlessVirtualHostRequest,
    cb?: (error: string, rep: CreateRabbitMQServerlessVirtualHostResponse) => void
  ): Promise<CreateRabbitMQServerlessVirtualHostResponse> {
    return this.request("CreateRabbitMQServerlessVirtualHost", req, cb)
  }

  /**
   * 获取单个RabbitMQ专享实例信息
   */
  async DescribeRabbitMQServerlessInstance(
    req: DescribeRabbitMQServerlessInstanceRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessInstanceResponse) => void
  ): Promise<DescribeRabbitMQServerlessInstanceResponse> {
    return this.request("DescribeRabbitMQServerlessInstance", req, cb)
  }

  /**
   * 查询RabbitMQ队列消费者列表
   */
  async DescribeRabbitMQServerlessConsumers(
    req: DescribeRabbitMQServerlessConsumersRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessConsumersResponse) => void
  ): Promise<DescribeRabbitMQServerlessConsumersResponse> {
    return this.request("DescribeRabbitMQServerlessConsumers", req, cb)
  }

  /**
   * 删除RabbitMQ队列
   */
  async DeleteRabbitMQServerlessQueue(
    req: DeleteRabbitMQServerlessQueueRequest,
    cb?: (error: string, rep: DeleteRabbitMQServerlessQueueResponse) => void
  ): Promise<DeleteRabbitMQServerlessQueueResponse> {
    return this.request("DeleteRabbitMQServerlessQueue", req, cb)
  }

  /**
   * 删除RabbitMQ的用户
   */
  async DeleteRabbitMQServerlessUser(
    req: DeleteRabbitMQServerlessUserRequest,
    cb?: (error: string, rep: DeleteRabbitMQServerlessUserResponse) => void
  ): Promise<DeleteRabbitMQServerlessUserResponse> {
    return this.request("DeleteRabbitMQServerlessUser", req, cb)
  }

  /**
   * 删除RabbitMQ的vhost
   */
  async DeleteRabbitMQServerlessVirtualHost(
    req: DeleteRabbitMQServerlessVirtualHostRequest,
    cb?: (error: string, rep: DeleteRabbitMQServerlessVirtualHostResponse) => void
  ): Promise<DeleteRabbitMQServerlessVirtualHostResponse> {
    return this.request("DeleteRabbitMQServerlessVirtualHost", req, cb)
  }

  /**
   * 修改RabbitMQ的用户
   */
  async ModifyRabbitMQServerlessUser(
    req: ModifyRabbitMQServerlessUserRequest,
    cb?: (error: string, rep: ModifyRabbitMQServerlessUserResponse) => void
  ): Promise<ModifyRabbitMQServerlessUserResponse> {
    return this.request("ModifyRabbitMQServerlessUser", req, cb)
  }

  /**
   * 查询RabbitMQ用户列表
   */
  async DescribeRabbitMQServerlessUser(
    req: DescribeRabbitMQServerlessUserRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessUserResponse) => void
  ): Promise<DescribeRabbitMQServerlessUserResponse> {
    return this.request("DescribeRabbitMQServerlessUser", req, cb)
  }

  /**
   * 查询RabbitMQ exchange 详情
   */
  async DescribeRabbitMQServerlessExchangeDetail(
    req: DescribeRabbitMQServerlessExchangeDetailRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessExchangeDetailResponse) => void
  ): Promise<DescribeRabbitMQServerlessExchangeDetailResponse> {
    return this.request("DescribeRabbitMQServerlessExchangeDetail", req, cb)
  }

  /**
   * 查询RabbitMQ vhost列表
   */
  async DescribeRabbitMQServerlessVirtualHost(
    req: DescribeRabbitMQServerlessVirtualHostRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessVirtualHostResponse) => void
  ): Promise<DescribeRabbitMQServerlessVirtualHostResponse> {
    return this.request("DescribeRabbitMQServerlessVirtualHost", req, cb)
  }

  /**
   * 查询RabbitMQ exchange 列表
   */
  async DescribeRabbitMQServerlessExchanges(
    req: DescribeRabbitMQServerlessExchangesRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessExchangesResponse) => void
  ): Promise<DescribeRabbitMQServerlessExchangesResponse> {
    return this.request("DescribeRabbitMQServerlessExchanges", req, cb)
  }

  /**
   * 获取路由关系列表
   */
  async DescribeRabbitMQServerlessBindings(
    req: DescribeRabbitMQServerlessBindingsRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessBindingsResponse) => void
  ): Promise<DescribeRabbitMQServerlessBindingsResponse> {
    return this.request("DescribeRabbitMQServerlessBindings", req, cb)
  }

  /**
   * 创建RabbitMQ的用户
   */
  async CreateRabbitMQServerlessUser(
    req: CreateRabbitMQServerlessUserRequest,
    cb?: (error: string, rep: CreateRabbitMQServerlessUserResponse) => void
  ): Promise<CreateRabbitMQServerlessUserResponse> {
    return this.request("CreateRabbitMQServerlessUser", req, cb)
  }

  /**
   * 查询RabbitMQ队列列表
   */
  async DescribeRabbitMQServerlessQueues(
    req: DescribeRabbitMQServerlessQueuesRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessQueuesResponse) => void
  ): Promise<DescribeRabbitMQServerlessQueuesResponse> {
    return this.request("DescribeRabbitMQServerlessQueues", req, cb)
  }

  /**
   * 修改RabbitMQ的vhost
   */
  async ModifyRabbitMQServerlessVirtualHost(
    req: ModifyRabbitMQServerlessVirtualHostRequest,
    cb?: (error: string, rep: ModifyRabbitMQServerlessVirtualHostResponse) => void
  ): Promise<ModifyRabbitMQServerlessVirtualHostResponse> {
    return this.request("ModifyRabbitMQServerlessVirtualHost", req, cb)
  }

  /**
   * 创建RabbitMQ队列
   */
  async CreateRabbitMQServerlessQueue(
    req: CreateRabbitMQServerlessQueueRequest,
    cb?: (error: string, rep: CreateRabbitMQServerlessQueueResponse) => void
  ): Promise<CreateRabbitMQServerlessQueueResponse> {
    return this.request("CreateRabbitMQServerlessQueue", req, cb)
  }

  /**
   * 删除RabbitMQ exchange
   */
  async DeleteRabbitMQServerlessExchange(
    req: DeleteRabbitMQServerlessExchangeRequest,
    cb?: (error: string, rep: DeleteRabbitMQServerlessExchangeResponse) => void
  ): Promise<DeleteRabbitMQServerlessExchangeResponse> {
    return this.request("DeleteRabbitMQServerlessExchange", req, cb)
  }

  /**
   * 查询RabbitMQ权限列表
   */
  async DescribeRabbitMQServerlessPermission(
    req: DescribeRabbitMQServerlessPermissionRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessPermissionResponse) => void
  ): Promise<DescribeRabbitMQServerlessPermissionResponse> {
    return this.request("DescribeRabbitMQServerlessPermission", req, cb)
  }

  /**
   * 查询RabbitMQ队列详情
   */
  async DescribeRabbitMQServerlessQueueDetail(
    req: DescribeRabbitMQServerlessQueueDetailRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessQueueDetailResponse) => void
  ): Promise<DescribeRabbitMQServerlessQueueDetailResponse> {
    return this.request("DescribeRabbitMQServerlessQueueDetail", req, cb)
  }

  /**
   * 查询RabbitMQ连接列表
   */
  async DescribeRabbitMQServerlessConnection(
    req: DescribeRabbitMQServerlessConnectionRequest,
    cb?: (error: string, rep: DescribeRabbitMQServerlessConnectionResponse) => void
  ): Promise<DescribeRabbitMQServerlessConnectionResponse> {
    return this.request("DescribeRabbitMQServerlessConnection", req, cb)
  }

  /**
   * 修改RabbitMQ队列
   */
  async ModifyRabbitMQServerlessQueue(
    req: ModifyRabbitMQServerlessQueueRequest,
    cb?: (error: string, rep: ModifyRabbitMQServerlessQueueResponse) => void
  ): Promise<ModifyRabbitMQServerlessQueueResponse> {
    return this.request("ModifyRabbitMQServerlessQueue", req, cb)
  }

  /**
   * 修改RabbitMQ exchange
   */
  async ModifyRabbitMQServerlessExchange(
    req: ModifyRabbitMQServerlessExchangeRequest,
    cb?: (error: string, rep: ModifyRabbitMQServerlessExchangeResponse) => void
  ): Promise<ModifyRabbitMQServerlessExchangeResponse> {
    return this.request("ModifyRabbitMQServerlessExchange", req, cb)
  }

  /**
   * 创建RabbitMQ路由关系
   */
  async CreateRabbitMQServerlessBinding(
    req: CreateRabbitMQServerlessBindingRequest,
    cb?: (error: string, rep: CreateRabbitMQServerlessBindingResponse) => void
  ): Promise<CreateRabbitMQServerlessBindingResponse> {
    return this.request("CreateRabbitMQServerlessBinding", req, cb)
  }

  /**
   * 删除RabbitMQ的权限
   */
  async DeleteRabbitMQServerlessPermission(
    req: DeleteRabbitMQServerlessPermissionRequest,
    cb?: (error: string, rep: DeleteRabbitMQServerlessPermissionResponse) => void
  ): Promise<DeleteRabbitMQServerlessPermissionResponse> {
    return this.request("DeleteRabbitMQServerlessPermission", req, cb)
  }

  /**
   * 获取实例列表
   */
  async ListRabbitMQServerlessInstances(
    req: ListRabbitMQServerlessInstancesRequest,
    cb?: (error: string, rep: ListRabbitMQServerlessInstancesResponse) => void
  ): Promise<ListRabbitMQServerlessInstancesResponse> {
    return this.request("ListRabbitMQServerlessInstances", req, cb)
  }

  /**
   * 创建RabbitMQ exchange
   */
  async CreateRabbitMQServerlessExchange(
    req: CreateRabbitMQServerlessExchangeRequest,
    cb?: (error: string, rep: CreateRabbitMQServerlessExchangeResponse) => void
  ): Promise<CreateRabbitMQServerlessExchangeResponse> {
    return this.request("CreateRabbitMQServerlessExchange", req, cb)
  }

  /**
   * 修改RabbitMQ的权限
   */
  async ModifyRabbitMQServerlessPermission(
    req: ModifyRabbitMQServerlessPermissionRequest,
    cb?: (error: string, rep: ModifyRabbitMQServerlessPermissionResponse) => void
  ): Promise<ModifyRabbitMQServerlessPermissionResponse> {
    return this.request("ModifyRabbitMQServerlessPermission", req, cb)
  }
}
