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
  ConfigRule,
  Tag,
  ListConfigRulesResponse,
  InputParameterForManage,
  ListConfigRulesRequest,
  SourceConditionForManage,
  TriggerType,
  PutEvaluationsRequest,
  ListAggregateConfigRulesRequest,
  ListAggregateConfigRulesResponse,
  PutEvaluationsResponse,
  InputParameter,
  Evaluation,
  Annotation,
} from "./config_models"

/**
 * config client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("config.tencentcloudapi.com", "2022-08-02", clientConfig)
  }

  /**
   * 获取规则列表
   */
  async ListConfigRules(
    req: ListConfigRulesRequest,
    cb?: (error: string, rep: ListConfigRulesResponse) => void
  ): Promise<ListConfigRulesResponse> {
    return this.request("ListConfigRules", req, cb)
  }

  /**
   * 账号组获取规则列表
   */
  async ListAggregateConfigRules(
    req: ListAggregateConfigRulesRequest,
    cb?: (error: string, rep: ListAggregateConfigRulesResponse) => void
  ): Promise<ListAggregateConfigRulesResponse> {
    return this.request("ListAggregateConfigRules", req, cb)
  }

  /**
   * 上报自定义规则评估结果
   */
  async PutEvaluations(
    req: PutEvaluationsRequest,
    cb?: (error: string, rep: PutEvaluationsResponse) => void
  ): Promise<PutEvaluationsResponse> {
    return this.request("PutEvaluations", req, cb)
  }
}
