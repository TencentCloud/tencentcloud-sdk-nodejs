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
  VodPoliticalOcrReviewResult,
  Candidate,
  TerrorismResult,
  VodPoliticalAsrReviewResult,
  VideoModerationResponse,
  VodMetaData,
  ImageModerationResponse,
  VodVideoStreamItem,
  ImageModerationRequest,
  VideoModerationRequest,
  VodPoliticalReviewSegmentItem,
  VodPornReviewResult,
  DisgustResult,
  VodPornReviewSegmentItem,
  VodPoliticalReviewResult,
  VodAudioStreamItem,
  VodOcrTextSegmentItem,
  PoliticsResult,
  VodAsrTextSegmentItem,
  PornResult,
  DescribeVideoTaskRequest,
  VodTerrorismReviewResult,
  FaceResult,
  VodPornAsrReviewResult,
  DescribeVideoTaskResponse,
  FaceRect,
  VodPornOcrResult,
} from "./ticm_models"

/**
 * ticm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ticm.tencentcloudapi.com", "2018-11-27", clientConfig)
  }

  /**
   * 本接口提供多种维度的图像审核能力，支持色情和性感内容识别，政治人物和涉政敏感场景识别，以及暴恐人物、场景、旗帜标识等违禁内容的识别。
   */
  async ImageModeration(
    req: ImageModerationRequest,
    cb?: (error: string, rep: ImageModerationResponse) => void
  ): Promise<ImageModerationResponse> {
    return this.request("ImageModeration", req, cb)
  }

  /**
   * 本接口提供多种维度的视频审核能力，支持色情和性感内容识别，政治人物和涉政敏感场景识别，以及暴恐人物、场景、旗帜标识等违禁内容的识别。
   */
  async VideoModeration(
    req: VideoModerationRequest,
    cb?: (error: string, rep: VideoModerationResponse) => void
  ): Promise<VideoModerationResponse> {
    return this.request("VideoModeration", req, cb)
  }

  /**
   * 提交完视频审核任务后，可以通过本接口来获取当前处理的进度和结果
   */
  async DescribeVideoTask(
    req: DescribeVideoTaskRequest,
    cb?: (error: string, rep: DescribeVideoTaskResponse) => void
  ): Promise<DescribeVideoTaskResponse> {
    return this.request("DescribeVideoTask", req, cb)
  }
}
