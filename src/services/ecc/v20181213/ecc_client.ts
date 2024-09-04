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
  CorrectMultiImageResponse,
  DescribeTaskRequest,
  SentenceItem,
  ECCResponse,
  EHOCRResponse,
  ErrorCoordinate,
  ECCRequest,
  SentenceCom,
  SentenceSuggest,
  CorrectData,
  ScoreCategory,
  Aspect,
  CompostionContext,
  DescribeTaskResponse,
  EHOCRRequest,
  CompositionContext,
  CorrectMultiImageRequest,
} from "./ecc_models"

/**
 * ecc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ecc.tencentcloudapi.com", "2018-12-13", clientConfig)
  }

  /**
     * https://ecc.tencentcloudapi.com/?Action=EHOCR
图像识别批改接口
     */
  async EHOCR(
    req: EHOCRRequest,
    cb?: (error: string, rep: EHOCRResponse) => void
  ): Promise<EHOCRResponse> {
    return this.request("EHOCR", req, cb)
  }

  /**
   * 纯文本英语作文批改
   */
  async ECC(req: ECCRequest, cb?: (error: string, rep: ECCResponse) => void): Promise<ECCResponse> {
    return this.request("ECC", req, cb)
  }

  /**
   * 异步任务结果查询接口
   */
  async DescribeTask(
    req: DescribeTaskRequest,
    cb?: (error: string, rep: DescribeTaskResponse) => void
  ): Promise<DescribeTaskResponse> {
    return this.request("DescribeTask", req, cb)
  }

  /**
     * https://ecc.tencentcloudapi.com/?Action=CorrectMultiImage
多图像识别批改接口
     */
  async CorrectMultiImage(
    req: CorrectMultiImageRequest,
    cb?: (error: string, rep: CorrectMultiImageResponse) => void
  ): Promise<CorrectMultiImageResponse> {
    return this.request("CorrectMultiImage", req, cb)
  }
}
