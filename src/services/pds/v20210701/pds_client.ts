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
  DescribeStockEstimationResponse,
  DescribeNewUserAcquisitionRequest,
  Score,
  UserInfos,
  DescribeStockEstimationRequest,
  DescribeNewUserAcquisitionResponse,
} from "./pds_models"

/**
 * pds client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("pds.tencentcloudapi.com", "2021-07-01", clientConfig)
  }

  /**
   * 查询存量判断服务
   */
  async DescribeStockEstimation(
    req: DescribeStockEstimationRequest,
    cb?: (error: string, rep: DescribeStockEstimationResponse) => void
  ): Promise<DescribeStockEstimationResponse> {
    return this.request("DescribeStockEstimation", req, cb)
  }

  /**
   * 判断新用户信誉值
   */
  async DescribeNewUserAcquisition(
    req: DescribeNewUserAcquisitionRequest,
    cb?: (error: string, rep: DescribeNewUserAcquisitionResponse) => void
  ): Promise<DescribeNewUserAcquisitionResponse> {
    return this.request("DescribeNewUserAcquisition", req, cb)
  }
}
