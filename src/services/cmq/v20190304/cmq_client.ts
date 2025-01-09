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
  DescribeQueueDetailResponse,
  DeadLetterPolicy,
  Filter,
  TopicSet,
  Tag,
  DescribeTopicDetailResponse,
  TransactionPolicy,
  DescribeTopicDetailRequest,
  QueueSet,
  DescribeQueueDetailRequest,
  DeadLetterSource,
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
   * 查询主题详情
   */
  async DescribeTopicDetail(
    req: DescribeTopicDetailRequest,
    cb?: (error: string, rep: DescribeTopicDetailResponse) => void
  ): Promise<DescribeTopicDetailResponse> {
    return this.request("DescribeTopicDetail", req, cb)
  }

  /**
   * 枚举队列列表
   */
  async DescribeQueueDetail(
    req: DescribeQueueDetailRequest,
    cb?: (error: string, rep: DescribeQueueDetailResponse) => void
  ): Promise<DescribeQueueDetailResponse> {
    return this.request("DescribeQueueDetail", req, cb)
  }
}
