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
  AsrTimestamps,
  ConfirmVideoTranslateJobRequest,
  SubmitVideoTranslateJobRequest,
  ConfirmVideoTranslateJobResponse,
  DescribeVideoTranslateJobRequest,
  SubmitVideoTranslateJobResponse,
  TranslateResult,
  AudioTranslateResult,
  DescribeVideoTranslateJobResponse,
} from "./vtc_models"

/**
 * vtc client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vtc.tencentcloudapi.com", "2024-02-23", clientConfig)
  }

  /**
   * 提交视频转译任务
   */
  async SubmitVideoTranslateJob(
    req: SubmitVideoTranslateJobRequest,
    cb?: (error: string, rep: SubmitVideoTranslateJobResponse) => void
  ): Promise<SubmitVideoTranslateJobResponse> {
    return this.request("SubmitVideoTranslateJob", req, cb)
  }

  /**
   * 查询视频翻译任务
   */
  async DescribeVideoTranslateJob(
    req: DescribeVideoTranslateJobRequest,
    cb?: (error: string, rep: DescribeVideoTranslateJobResponse) => void
  ): Promise<DescribeVideoTranslateJobResponse> {
    return this.request("DescribeVideoTranslateJob", req, cb)
  }

  /**
   * 确认视频翻译结果
   */
  async ConfirmVideoTranslateJob(
    req: ConfirmVideoTranslateJobRequest,
    cb?: (error: string, rep: ConfirmVideoTranslateJobResponse) => void
  ): Promise<ConfirmVideoTranslateJobResponse> {
    return this.request("ConfirmVideoTranslateJob", req, cb)
  }
}
