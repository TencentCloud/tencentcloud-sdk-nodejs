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
  MessageCntStats,
  CallDeviceActionAsyncResponse,
  DescribeDeviceDataStatsResponse,
  DescribeDeviceDataStatsRequest,
  CallDeviceActionSyncResponse,
  DeviceCntStats,
  DescribeMessageDataStatsResponse,
  DescribeMessageDataStatsRequest,
  CallDeviceActionAsyncRequest,
  CallDeviceActionSyncRequest,
} from "./iotvideo_models"

/**
 * iotvideo client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("iotvideo.tencentcloudapi.com", "2021-11-25", clientConfig)
  }

  /**
   * 查询设备消息数量统计
   */
  async DescribeMessageDataStats(
    req: DescribeMessageDataStatsRequest,
    cb?: (error: string, rep: DescribeMessageDataStatsResponse) => void
  ): Promise<DescribeMessageDataStatsResponse> {
    return this.request("DescribeMessageDataStats", req, cb)
  }

  /**
   * 异步调用设备行为
   */
  async CallDeviceActionAsync(
    req: CallDeviceActionAsyncRequest,
    cb?: (error: string, rep: CallDeviceActionAsyncResponse) => void
  ): Promise<CallDeviceActionAsyncResponse> {
    return this.request("CallDeviceActionAsync", req, cb)
  }

  /**
   * 同步调用设备行为
   */
  async CallDeviceActionSync(
    req: CallDeviceActionSyncRequest,
    cb?: (error: string, rep: CallDeviceActionSyncResponse) => void
  ): Promise<CallDeviceActionSyncResponse> {
    return this.request("CallDeviceActionSync", req, cb)
  }

  /**
   * 查询设备数据统计
   */
  async DescribeDeviceDataStats(
    req: DescribeDeviceDataStatsRequest,
    cb?: (error: string, rep: DescribeDeviceDataStatsResponse) => void
  ): Promise<DescribeDeviceDataStatsResponse> {
    return this.request("DescribeDeviceDataStats", req, cb)
  }
}
