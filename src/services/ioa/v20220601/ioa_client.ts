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
  Sort,
  DescribeDevicesPageRsp,
  FilterGroup,
  DescribeDevicesResponse,
  Filter,
  DescribeDevicesRequest,
  Paging,
  DeviceDetail,
  Condition,
} from "./ioa_models"

/**
 * ioa client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ioa.tencentcloudapi.com", "2022-06-01", clientConfig)
  }

  /**
   * 查询满足条件的终端数据详情，私有化调用path为：/capi/Assets/Device/DescribeDevices
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
  }
}
