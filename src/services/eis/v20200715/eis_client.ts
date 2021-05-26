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
  EisConnectionOperation,
  ListEisConnectorsRequest,
  EisConnectorSummary,
  ListEisConnectorOperationsResponse,
  DescribeEisConnectorConfigResponse,
  ListEisConnectorOperationsRequest,
  DescribeEisConnectorConfigRequest,
  ListEisConnectorsResponse,
} from "./eis_models"

/**
 * eis client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("eis.tencentcloudapi.com", "2020-07-15", clientConfig)
  }

  /**
   * 获取连接器操作列表
   */
  async ListEisConnectorOperations(
    req: ListEisConnectorOperationsRequest,
    cb?: (error: string, rep: ListEisConnectorOperationsResponse) => void
  ): Promise<ListEisConnectorOperationsResponse> {
    return this.request("ListEisConnectorOperations", req, cb)
  }

  /**
   * 连接器列表
   */
  async ListEisConnectors(
    req: ListEisConnectorsRequest,
    cb?: (error: string, rep: ListEisConnectorsResponse) => void
  ): Promise<ListEisConnectorsResponse> {
    return this.request("ListEisConnectors", req, cb)
  }

  /**
   * 获取连接器配置参数
   */
  async DescribeEisConnectorConfig(
    req: DescribeEisConnectorConfigRequest,
    cb?: (error: string, rep: DescribeEisConnectorConfigResponse) => void
  ): Promise<DescribeEisConnectorConfigResponse> {
    return this.request("DescribeEisConnectorConfig", req, cb)
  }
}
