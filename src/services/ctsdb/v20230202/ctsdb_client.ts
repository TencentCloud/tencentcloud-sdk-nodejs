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
  Filter,
  Spec,
  Tag,
  Network,
  DescribeClustersRequest,
  Database,
  DescribeDatabasesResponse,
  Component,
  Period,
  DescribeDatabasesRequest,
  DescribeClusterDetailRequest,
  DescribeClusterDetailResponse,
  Cluster,
  DescribeClustersResponse,
  ClusterDetail,
  Order,
  Tenant,
} from "./ctsdb_models"

/**
 * ctsdb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ctsdb.tencentcloudapi.com", "2023-02-02", clientConfig)
  }

  /**
   * 查询实例列表及详情
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 查询实例详情
   */
  async DescribeClusterDetail(
    req?: DescribeClusterDetailRequest,
    cb?: (error: string, rep: DescribeClusterDetailResponse) => void
  ): Promise<DescribeClusterDetailResponse> {
    return this.request("DescribeClusterDetail", req, cb)
  }

  /**
     * 查看数据库/列表

```
  "Database":{
    "ClusterID":"ctsdbi-rebg0ghl",
    "Name":"" //不指定则查询实例下所有db
  }
```
     */
  async DescribeDatabases(
    req: DescribeDatabasesRequest,
    cb?: (error: string, rep: DescribeDatabasesResponse) => void
  ): Promise<DescribeDatabasesResponse> {
    return this.request("DescribeDatabases", req, cb)
  }
}
