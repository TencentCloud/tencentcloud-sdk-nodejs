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
  RiskDetailInfo,
  AntiFraudRecord,
  AntiFraudFilter,
  AntiFraudCryptoFilter,
  FinanceAntiFraudRecord,
  DescribeAntiFraudResponse,
  RiskDetail,
  FinanceOtherModelScores,
  SimpleKindRiskDetail,
  OtherModelScoresDetail,
  GetAntiFraudRequest,
  DescribeAntiFraudRequest,
  FinanceAntiFraudFilter,
  QueryAntiFraudResponse,
  GetAntiFraudResponse,
  QueryAntiFraudRequest,
  FinanceAntiFraudCryptoFilter,
} from "./af_models"

/**
 * af client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("af.tencentcloudapi.com", "2020-02-26", clientConfig)
  }

  /**
     * 天御反欺诈服务，主要应用于银行、证券、保险、消费金融等金融行业客户，通过腾讯的大数据风控能力，
可以准确识别恶意用户信息，解决客户在支付、活动、理财，风控等业务环节遇到的欺诈威胁，降低企业
的损失。
     */
  async QueryAntiFraud(
    req: QueryAntiFraudRequest,
    cb?: (error: string, rep: QueryAntiFraudResponse) => void
  ): Promise<QueryAntiFraudResponse> {
    return this.request("QueryAntiFraud", req, cb)
  }

  /**
   * 反欺诈评分接口
   */
  async GetAntiFraud(
    req: GetAntiFraudRequest,
    cb?: (error: string, rep: GetAntiFraudResponse) => void
  ): Promise<GetAntiFraudResponse> {
    return this.request("GetAntiFraud", req, cb)
  }

  /**
     * 该接口未在使用，后端地址已无法访问，经查近60天日志无正常业务访问记录，申请预下线。

天御反欺诈服务，主要应用于银行、证券、保险、消费金融等金融行业客户，通过腾讯的大数据风控能力，
可以准确识别恶意用户信息，解决客户在支付、活动、理财，风控等业务环节遇到的欺诈威胁，降低企业
的损失。
     */
  async DescribeAntiFraud(
    req: DescribeAntiFraudRequest,
    cb?: (error: string, rep: DescribeAntiFraudResponse) => void
  ): Promise<DescribeAntiFraudResponse> {
    return this.request("DescribeAntiFraud", req, cb)
  }
}
