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
  DescribeSmpnChpRequest,
  DescribeSmpnFnrResponse,
  DescribeSmpnFnrRequest,
  CHPRequest,
  FNRResponse,
  CHPResponse,
  DescribeSmpnChpResponse,
  FNRRequest,
} from "./smpn_models"

/**
 * smpn client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("smpn.tencentcloudapi.com", "2019-08-22", clientConfig)
  }

  /**
     * 不在使用的API

虚假号码识别
     */
  async DescribeSmpnFnr(
    req: DescribeSmpnFnrRequest,
    cb?: (error: string, rep: DescribeSmpnFnrResponse) => void
  ): Promise<DescribeSmpnFnrResponse> {
    return this.request("DescribeSmpnFnr", req, cb)
  }

  /**
     * 不在使用的API

查询号码的标记和标记次数
     */
  async DescribeSmpnChp(
    req: DescribeSmpnChpRequest,
    cb?: (error: string, rep: DescribeSmpnChpResponse) => void
  ): Promise<DescribeSmpnChpResponse> {
    return this.request("DescribeSmpnChp", req, cb)
  }
}
