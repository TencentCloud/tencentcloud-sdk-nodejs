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
  SendTtsVoiceResponse,
  SendCodeVoiceResponse,
  SendStatus,
  SendCodeVoiceRequest,
  SendTtsVoiceRequest,
} from "./vms_models"

/**
 * vms client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vms.tencentcloudapi.com", "2020-09-02", clientConfig)
  }

  /**
   * 给用户发语音验证码（仅支持数字）。
   */
  async SendCodeVoice(
    req: SendCodeVoiceRequest,
    cb?: (error: string, rep: SendCodeVoiceResponse) => void
  ): Promise<SendCodeVoiceResponse> {
    return this.request("SendCodeVoice", req, cb)
  }

  /**
   * 给用户发送指定模板的语音通知。
   */
  async SendTtsVoice(
    req: SendTtsVoiceRequest,
    cb?: (error: string, rep: SendTtsVoiceResponse) => void
  ): Promise<SendTtsVoiceResponse> {
    return this.request("SendTtsVoice", req, cb)
  }
}
