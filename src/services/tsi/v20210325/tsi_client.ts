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
  TongChuanSyncResponse,
  DisplayInfo,
  TongChuanRecognizeResponse,
  TongChuanDisplayRequest,
  TongChuanRecognizeRequest,
  TongChuanDisplayResponse,
  TongChuanSyncRequest,
} from "./tsi_models"

/**
 * tsi client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tsi.tencentcloudapi.com", "2021-03-25", clientConfig)
  }

  /**
   * 本接口提供上传音频，将音频进行语音识别并翻译成文本的服务，目前开放中英互译的同传服务。 待识别和翻译的音频文件格式是 pcm，pcm采样率要求16kHz、位深16bit、单声道、每个分片时长200ms~500ms，音频内语音清晰。
   */
  async TongChuanRecognize(
    req: TongChuanRecognizeRequest,
    cb?: (error: string, rep: TongChuanRecognizeResponse) => void
  ): Promise<TongChuanRecognizeResponse> {
    return this.request("TongChuanRecognize", req, cb)
  }

  /**
   * 获取同传结果。
   */
  async TongChuanDisplay(
    req: TongChuanDisplayRequest,
    cb?: (error: string, rep: TongChuanDisplayResponse) => void
  ): Promise<TongChuanDisplayResponse> {
    return this.request("TongChuanDisplay", req, cb)
  }

  /**
   * 本接口提供上传音频，将音频进行语音识别并翻译成文本的服务，目前开放中英互译的同传服务。 待识别和翻译的音频文件格式是 pcm，pcm采样率要求16kHz、位深16bit、单声道、每个分片时长200ms~500ms，音频内语音清晰。
   */
  async TongChuanSync(
    req: TongChuanSyncRequest,
    cb?: (error: string, rep: TongChuanSyncResponse) => void
  ): Promise<TongChuanSyncResponse> {
    return this.request("TongChuanSync", req, cb)
  }
}
