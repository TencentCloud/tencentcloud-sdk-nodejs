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
  DescribeTokenRequest,
  DescribeServiceAlertObjectResponse,
  DescribeComponentAlertObjectResponse,
  DescribeServiceAlertObjectRequest,
  DescribeComponentAlertObjectRequest,
  DescribeTokenResponse,
} from "./tsw_models"

/**
 * tsw client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tsw.tencentcloudapi.com", "2021-04-12", clientConfig)
  }

  /**
   * 查询token
   */
  async DescribeToken(
    req: DescribeTokenRequest,
    cb?: (error: string, rep: DescribeTokenResponse) => void
  ): Promise<DescribeTokenResponse> {
    return this.request("DescribeToken", req, cb)
  }

  /**
   * 获取告警对象-服务告警表
   */
  async DescribeServiceAlertObject(
    req?: DescribeServiceAlertObjectRequest,
    cb?: (error: string, rep: DescribeServiceAlertObjectResponse) => void
  ): Promise<DescribeServiceAlertObjectResponse> {
    return this.request("DescribeServiceAlertObject", req, cb)
  }

  /**
   * 获取告警对象-组件告警
   */
  async DescribeComponentAlertObject(
    req?: DescribeComponentAlertObjectRequest,
    cb?: (error: string, rep: DescribeComponentAlertObjectResponse) => void
  ): Promise<DescribeComponentAlertObjectResponse> {
    return this.request("DescribeComponentAlertObject", req, cb)
  }
}
