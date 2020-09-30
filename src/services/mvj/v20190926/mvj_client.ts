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
import { MarketingValueJudgementRequest, Data, MarketingValueJudgementResponse } from "./mvj_models"

/**
 * mvj client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("mvj.tencentcloudapi.com", "2019-09-26", clientConfig)
  }

  /**
     * 欢迎使用营销价值判断（Marketing Value Judgement，简称 MVJ）。

营销价值判断（MVJ）是针对零售场景的风控服务，通过识别高价值顾客，以帮助零售商保障营销资金
     */
  async MarketingValueJudgement(
    req: MarketingValueJudgementRequest,
    cb?: (error: string, rep: MarketingValueJudgementResponse) => void
  ): Promise<MarketingValueJudgementResponse> {
    return this.request("MarketingValueJudgement", req, cb)
  }
}
