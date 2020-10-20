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
  TopicSet,
  RewindQueueRequest,
  DescribeSubscriptionDetailRequest,
  ModifyQueueAttributeResponse,
  CreateQueueRequest,
  ModifySubscriptionAttributeResponse,
  DeadLetterPolicy,
  ModifyTopicAttributeResponse,
  DeleteSubscribeRequest,
  DescribeSubscriptionDetailResponse,
  CreateSubscribeRequest,
  ClearQueueRequest,
  CreateTopicResponse,
  ClearSubscriptionFilterTagsResponse,
  UnbindDeadLetterResponse,
  TransactionPolicy,
  DescribeTopicDetailRequest,
  DeleteTopicRequest,
  DescribeTopicDetailResponse,
  DescribeQueueDetailResponse,
  UnbindDeadLetterRequest,
  CreateTopicRequest,
  DeleteQueueRequest,
  Filter,
  DescribeDeadLetterSourceQueuesResponse,
  RewindQueueResponse,
  ModifyTopicAttributeRequest,
  DescribeQueueDetailRequest,
  QueueSet,
  DeleteTopicResponse,
  ClearSubscriptionFilterTagsRequest,
  CreateQueueResponse,
  DeleteSubscribeResponse,
  DescribeDeadLetterSourceQueuesRequest,
  Tag,
  DeadLetterSource,
  CreateSubscribeResponse,
  ClearQueueResponse,
  ModifySubscriptionAttributeRequest,
  Subscription,
  DeleteQueueResponse,
  ModifyQueueAttributeRequest,
} from "./cmq_models"

/**
 * cmq client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cmq.tencentcloudapi.com", "2019-03-04", clientConfig)
  }

  /**
   * 创建主题
   */
  async CreateTopic(
    req: CreateTopicRequest,
    cb?: (error: string, rep: CreateTopicResponse) => void
  ): Promise<CreateTopicResponse> {
    return this.request("CreateTopic", req, cb)
  }

  /**
   * 创建订阅接口
   */
  async CreateSubscribe(
    req: CreateSubscribeRequest,
    cb?: (error: string, rep: CreateSubscribeResponse) => void
  ): Promise<CreateSubscribeResponse> {
    return this.request("CreateSubscribe", req, cb)
  }

  /**
   * 修改主题属性
   */
  async ModifyTopicAttribute(
    req: ModifyTopicAttributeRequest,
    cb?: (error: string, rep: ModifyTopicAttributeResponse) => void
  ): Promise<ModifyTopicAttributeResponse> {
    return this.request("ModifyTopicAttribute", req, cb)
  }

  /**
   * 清空订阅者消息标签
   */
  async ClearSubscriptionFilterTags(
    req: ClearSubscriptionFilterTagsRequest,
    cb?: (error: string, rep: ClearSubscriptionFilterTagsResponse) => void
  ): Promise<ClearSubscriptionFilterTagsResponse> {
    return this.request("ClearSubscriptionFilterTags", req, cb)
  }

  /**
   * 删除订阅
   */
  async DeleteSubscribe(
    req: DeleteSubscribeRequest,
    cb?: (error: string, rep: DeleteSubscribeResponse) => void
  ): Promise<DeleteSubscribeResponse> {
    return this.request("DeleteSubscribe", req, cb)
  }

  /**
     * 创建队列接口

     */
  async CreateQueue(
    req: CreateQueueRequest,
    cb?: (error: string, rep: CreateQueueResponse) => void
  ): Promise<CreateQueueResponse> {
    return this.request("CreateQueue", req, cb)
  }

  /**
   * 回溯队列
   */
  async RewindQueue(
    req: RewindQueueRequest,
    cb?: (error: string, rep: RewindQueueResponse) => void
  ): Promise<RewindQueueResponse> {
    return this.request("RewindQueue", req, cb)
  }

  /**
   * 修改订阅属性
   */
  async ModifySubscriptionAttribute(
    req: ModifySubscriptionAttributeRequest,
    cb?: (error: string, rep: ModifySubscriptionAttributeResponse) => void
  ): Promise<ModifySubscriptionAttributeResponse> {
    return this.request("ModifySubscriptionAttribute", req, cb)
  }

  /**
   * 查询主题详情
   */
  async DescribeTopicDetail(
    req: DescribeTopicDetailRequest,
    cb?: (error: string, rep: DescribeTopicDetailResponse) => void
  ): Promise<DescribeTopicDetailResponse> {
    return this.request("DescribeTopicDetail", req, cb)
  }

  /**
   * 枚举队列
   */
  async DescribeQueueDetail(
    req: DescribeQueueDetailRequest,
    cb?: (error: string, rep: DescribeQueueDetailResponse) => void
  ): Promise<DescribeQueueDetailResponse> {
    return this.request("DescribeQueueDetail", req, cb)
  }

  /**
   * DeleteQueue
   */
  async DeleteQueue(
    req: DeleteQueueRequest,
    cb?: (error: string, rep: DeleteQueueResponse) => void
  ): Promise<DeleteQueueResponse> {
    return this.request("DeleteQueue", req, cb)
  }

  /**
   * 查询订阅详情
   */
  async DescribeSubscriptionDetail(
    req: DescribeSubscriptionDetailRequest,
    cb?: (error: string, rep: DescribeSubscriptionDetailResponse) => void
  ): Promise<DescribeSubscriptionDetailResponse> {
    return this.request("DescribeSubscriptionDetail", req, cb)
  }

  /**
   * 枚举死信队列源队列
   */
  async DescribeDeadLetterSourceQueues(
    req: DescribeDeadLetterSourceQueuesRequest,
    cb?: (error: string, rep: DescribeDeadLetterSourceQueuesResponse) => void
  ): Promise<DescribeDeadLetterSourceQueuesResponse> {
    return this.request("DescribeDeadLetterSourceQueues", req, cb)
  }

  /**
   * 删除主题
   */
  async DeleteTopic(
    req: DeleteTopicRequest,
    cb?: (error: string, rep: DeleteTopicResponse) => void
  ): Promise<DeleteTopicResponse> {
    return this.request("DeleteTopic", req, cb)
  }

  /**
   * 清除queue中的所有消息
   */
  async ClearQueue(
    req: ClearQueueRequest,
    cb?: (error: string, rep: ClearQueueResponse) => void
  ): Promise<ClearQueueResponse> {
    return this.request("ClearQueue", req, cb)
  }

  /**
   * 解绑死信队列
   */
  async UnbindDeadLetter(
    req: UnbindDeadLetterRequest,
    cb?: (error: string, rep: UnbindDeadLetterResponse) => void
  ): Promise<UnbindDeadLetterResponse> {
    return this.request("UnbindDeadLetter", req, cb)
  }

  /**
   * 修改队列属性
   */
  async ModifyQueueAttribute(
    req: ModifyQueueAttributeRequest,
    cb?: (error: string, rep: ModifyQueueAttributeResponse) => void
  ): Promise<ModifyQueueAttributeResponse> {
    return this.request("ModifyQueueAttribute", req, cb)
  }
}
