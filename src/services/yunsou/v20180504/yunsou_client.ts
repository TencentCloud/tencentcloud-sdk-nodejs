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
  DataSearchResponse,
  DataSearchRequest,
  DataManipulationRequest,
  DataManipulationResponse,
} from "./yunsou_models"

/**
 * yunsou client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("yunsou.tencentcloudapi.com", "2018-05-04", clientConfig)
  }

  /**
   * 上传云搜数据的API接口
   */
  async DataManipulation(
    req: DataManipulationRequest,
    cb?: (error: string, rep: DataManipulationResponse) => void
  ): Promise<DataManipulationResponse> {
    return this.request("DataManipulation", req, cb)
  }

  /**
   * 用于检索云搜中的数据
   */
  async DataSearch(
    req: DataSearchRequest,
    cb?: (error: string, rep: DataSearchResponse) => void
  ): Promise<DataSearchResponse> {
    return this.request("DataSearch", req, cb)
  }
}
