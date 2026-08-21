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
  SearchResourcesResponse,
  ResourceSummary,
  SearchResourcesRequest,
  ExtendedFilter,
  Tag,
  DescribeResourceRequest,
  DescribeResourceResponse,
} from "./cloudrc_models"

/**
 * cloudrc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cloudrc.tencentcloudapi.com", "2024-06-06", clientConfig)
  }

  /**
   * 查询资源详情
   */
  async DescribeResource(
    req: DescribeResourceRequest,
    cb?: (error: string, rep: DescribeResourceResponse) => void
  ): Promise<DescribeResourceResponse> {
    return this.request("DescribeResource", req, cb)
  }

  /**
   * 搜索资源
   */
  async SearchResources(
    req: SearchResourcesRequest,
    cb?: (error: string, rep: SearchResourcesResponse) => void
  ): Promise<SearchResourcesResponse> {
    return this.request("SearchResources", req, cb)
  }
}
