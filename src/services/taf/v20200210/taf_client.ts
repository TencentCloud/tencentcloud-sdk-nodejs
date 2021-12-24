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
  OutputRecognizeEffectiveFlowValue,
  OutputKolData,
  InputKolBspData,
  RecognizeEffectiveFlowRequest,
  EnhanceTaDegreeRequest,
  OutputRecognizeTargetAudienceValue,
  SendTrafficSecuritySmsMessageRequest,
  DetectFraudKOLResponse,
  RecognizeCustomizedAudienceResponse,
  OutputKolValue,
  EnhanceTaDegreeResponse,
  InputTaBspData,
  Device,
  OutputSendTrafficSecuritySmsMsg,
  RecognizeEffectiveFlowResponse,
  SendTrafficSecuritySmsMessageResponse,
  DetectFraudKOLRequest,
  RecognizeCustomizedAudienceRequest,
  RecognizeTargetAudienceRequest,
  RecognizeTargetAudienceResponse,
  OutputRecognizeEffectiveFlow,
  InputRecognizeTargetAudience,
  OutputTaData,
  OutputTaValue,
  RecognizePreciseTargetAudienceRequest,
  InputKolDataList,
  RecognizePreciseTargetAudienceResponse,
  InputRecognizeEffectiveFlow,
  InputBusinessEncryptData,
  OutputRecognizeTargetAudience,
  InputSendTrafficSecuritySmsMsg,
} from "./taf_models"

/**
 * taf client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("taf.tencentcloudapi.com", "2020-02-10", clientConfig)
  }

  /**
   * 流量反欺诈-虚假TA识别
   */
  async EnhanceTaDegree(
    req: EnhanceTaDegreeRequest,
    cb?: (error: string, rep: EnhanceTaDegreeResponse) => void
  ): Promise<EnhanceTaDegreeResponse> {
    return this.request("EnhanceTaDegree", req, cb)
  }

  /**
   * 流量反欺诈-流量验准
   */
  async RecognizeTargetAudience(
    req: RecognizeTargetAudienceRequest,
    cb?: (error: string, rep: RecognizeTargetAudienceResponse) => void
  ): Promise<RecognizeTargetAudienceResponse> {
    return this.request("RecognizeTargetAudience", req, cb)
  }

  /**
     * 该服务已不再对外提供能力

筛选敏感易骚扰人群
     */
  async RecognizeEffectiveFlow(
    req: RecognizeEffectiveFlowRequest,
    cb?: (error: string, rep: RecognizeEffectiveFlowResponse) => void
  ): Promise<RecognizeEffectiveFlowResponse> {
    return this.request("RecognizeEffectiveFlow", req, cb)
  }

  /**
   * 流量反欺诈-流量验准定制版
   */
  async RecognizeCustomizedAudience(
    req: RecognizeCustomizedAudienceRequest,
    cb?: (error: string, rep: RecognizeCustomizedAudienceResponse) => void
  ): Promise<RecognizeCustomizedAudienceResponse> {
    return this.request("RecognizeCustomizedAudience", req, cb)
  }

  /**
   * 流量反欺诈-KOL欺诈识别
   */
  async DetectFraudKOL(
    req: DetectFraudKOLRequest,
    cb?: (error: string, rep: DetectFraudKOLResponse) => void
  ): Promise<DetectFraudKOLResponse> {
    return this.request("DetectFraudKOL", req, cb)
  }

  /**
   * 流量反欺诈-流量验准高级版
   */
  async RecognizePreciseTargetAudience(
    req: RecognizePreciseTargetAudienceRequest,
    cb?: (error: string, rep: RecognizePreciseTargetAudienceResponse) => void
  ): Promise<RecognizePreciseTargetAudienceResponse> {
    return this.request("RecognizePreciseTargetAudience", req, cb)
  }

  /**
   * 流量安选产品，短信发送接口
   */
  async SendTrafficSecuritySmsMessage(
    req: SendTrafficSecuritySmsMessageRequest,
    cb?: (error: string, rep: SendTrafficSecuritySmsMessageResponse) => void
  ): Promise<SendTrafficSecuritySmsMessageResponse> {
    return this.request("SendTrafficSecuritySmsMessage", req, cb)
  }
}
