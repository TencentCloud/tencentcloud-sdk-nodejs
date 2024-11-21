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
  EventDetail,
  DescribeEventsResponse,
  DescribeEventsRequest,
  ProductEventList,
} from "./tchd_models"

/**
 * tchd client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tchd.tencentcloudapi.com", "2023-03-06", clientConfig)
  }

  /**
     * 本接口用于查询腾讯云健康看板的可用性事件信息，可以通过产品列表、地域列表和事件发生日期进行过滤查询。
当查询的产品对应时间内无事件时将返回空结果。
可以参考健康看板历史事件页面来获取查询案例（链接：https://status.cloud.tencent.com/history）。
     */
  async DescribeEvents(
    req: DescribeEventsRequest,
    cb?: (error: string, rep: DescribeEventsResponse) => void
  ): Promise<DescribeEventsResponse> {
    return this.request("DescribeEvents", req, cb)
  }
}
