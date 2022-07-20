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
  InvokeServiceRequest,
  DescribeInvocationResultResponse,
  AlgorithmResult,
  InvokeServiceResponse,
  DescribeInvocationResultRequest,
} from "./tcex_models"

/**
 * tcex client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tcex.tencentcloudapi.com", "2020-07-27", clientConfig)
  }

  /**
     * 产品控制台已经下线

获取服务调用结果。和InvokeService接口配置合适，其InvokeId参数为InvokeService接口返回的RequestId。
     */
  async DescribeInvocationResult(
    req: DescribeInvocationResultRequest,
    cb?: (error: string, rep: DescribeInvocationResultResponse) => void
  ): Promise<DescribeInvocationResultResponse> {
    return this.request("DescribeInvocationResult", req, cb)
  }

  /**
     * 产品控制台已经下线

通过传入文档url，测试服务算法。此接口需要和DescribeInvocationResult接口配置使用，该接口使用InvokeService返回的RequestId作为InvokeId参数，用于查询调用结果。
     */
  async InvokeService(
    req: InvokeServiceRequest,
    cb?: (error: string, rep: InvokeServiceResponse) => void
  ): Promise<InvokeServiceResponse> {
    return this.request("InvokeService", req, cb)
  }
}
