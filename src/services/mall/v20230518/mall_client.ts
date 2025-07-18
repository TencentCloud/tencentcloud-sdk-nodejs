/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  DescribeDrawResourceListResponse,
  ResourceDrawListType,
  DescribeDrawResourceListRequest,
} from "./mall_models"

/**
 * mall client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mall.tencentcloudapi.com", "2023-05-18", clientConfig)
  }

  /**
   * 依据客户的Uin查询开通的资源列表
   */
  async DescribeDrawResourceList(
    req: DescribeDrawResourceListRequest,
    cb?: (error: string, rep: DescribeDrawResourceListResponse) => void
  ): Promise<DescribeDrawResourceListResponse> {
    return this.request("DescribeDrawResourceList", req, cb)
  }
}
