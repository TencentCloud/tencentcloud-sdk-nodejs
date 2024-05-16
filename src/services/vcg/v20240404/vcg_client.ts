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
  DescribeVideoStylizationJobResponse,
  SubmitVideoStylizationJobResponse,
  DescribeVideoStylizationJobRequest,
  SubmitVideoStylizationJobRequest,
} from "./vcg_models"

/**
 * vcg client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vcg.tencentcloudapi.com", "2024-04-04", clientConfig)
  }

  /**
   * 用于提交视频风格化任务。支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
   */
  async SubmitVideoStylizationJob(
    req: SubmitVideoStylizationJobRequest,
    cb?: (error: string, rep: SubmitVideoStylizationJobResponse) => void
  ): Promise<SubmitVideoStylizationJobResponse> {
    return this.request("SubmitVideoStylizationJob", req, cb)
  }

  /**
   * 用于查询视频风格化任务。视频风格化支持将输入视频生成特定风格的视频。生成后的视频画面风格多样、流畅自然，能够满足社交娱乐、互动营销、视频素材制作等场景的需求。
   */
  async DescribeVideoStylizationJob(
    req: DescribeVideoStylizationJobRequest,
    cb?: (error: string, rep: DescribeVideoStylizationJobResponse) => void
  ): Promise<DescribeVideoStylizationJobResponse> {
    return this.request("DescribeVideoStylizationJob", req, cb)
  }
}
