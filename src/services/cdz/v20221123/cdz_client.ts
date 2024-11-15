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
  DescribeCloudDedicatedZoneResourceSummaryRequest,
  CloudDedicatedZoneResourceStatisticsInfo,
  DescribeCloudDedicatedZoneHostsResponse,
  ExtraInfo,
  CloudDedicatedZoneHostsInfo,
  DescribeCloudDedicatedZoneHostsRequest,
  CloudDedicatedZoneResourceSummaryInfo,
  DescribeCloudDedicatedZoneResourceSummaryResponse,
} from "./cdz_models"

/**
 * cdz client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cdz.tencentcloudapi.com", "2022-11-23", clientConfig)
  }

  /**
   * 查询专属可用区各个垂直产品的资源使用情况
   */
  async DescribeCloudDedicatedZoneResourceSummary(
    req: DescribeCloudDedicatedZoneResourceSummaryRequest,
    cb?: (error: string, rep: DescribeCloudDedicatedZoneResourceSummaryResponse) => void
  ): Promise<DescribeCloudDedicatedZoneResourceSummaryResponse> {
    return this.request("DescribeCloudDedicatedZoneResourceSummary", req, cb)
  }

  /**
   * 查询可用区的Host和Host上部署的实例
   */
  async DescribeCloudDedicatedZoneHosts(
    req: DescribeCloudDedicatedZoneHostsRequest,
    cb?: (error: string, rep: DescribeCloudDedicatedZoneHostsResponse) => void
  ): Promise<DescribeCloudDedicatedZoneHostsResponse> {
    return this.request("DescribeCloudDedicatedZoneHosts", req, cb)
  }
}
