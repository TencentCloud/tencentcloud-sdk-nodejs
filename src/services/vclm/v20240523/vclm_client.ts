/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
  DescribeImageToVideoGeneralJobResponse,
  SubmitVideoStylizationJobRequest,
  LogoParam,
  DescribeVideoVoiceJobResponse,
  SubmitHumanActorJobRequest,
  SubmitImageAnimateJobResponse,
  FaceTemplateInfo,
  SubmitImageAnimateJobRequest,
  DescribeVideoVoiceJobRequest,
  SubmitImageToVideoGeneralJobResponse,
  DescribeVideoFaceFusionJobResponse,
  DescribeVideoFaceFusionJobRequest,
  FaceRect,
  DescribePortraitSingJobRequest,
  DescribeHunyuanToVideoJobRequest,
  SubmitVideoFaceFusionJobResponse,
  DescribeTemplateToVideoJobResponse,
  SubmitVideoVoiceJobResponse,
  FaceMergeInfo,
  CheckAnimateImageJobResponse,
  SubmitVideoEditJobResponse,
  SubmitTemplateToVideoJobResponse,
  CheckAnimateImageJobRequest,
  DescribeVideoStylizationJobRequest,
  SubmitHumanActorJobResponse,
  DescribeImageAnimateJobResponse,
  SubmitPortraitSingJobRequest,
  LogoRect,
  SubmitVideoVoiceJobRequest,
  SubmitHunyuanToVideoJobResponse,
  DescribeHumanActorJobResponse,
  ExtraParam,
  DescribeVideoEditJobResponse,
  DescribeVideoStylizationJobResponse,
  SubmitVideoStylizationJobResponse,
  SubmitVideoFaceFusionJobRequest,
  SubmitPortraitSingJobResponse,
  SubmitTemplateToVideoJobRequest,
  SubmitImageToVideoGeneralJobRequest,
  SubmitHunyuanToVideoJobRequest,
  Image,
  DescribeVideoEditJobRequest,
  DescribeHumanActorJobRequest,
  DescribeImageToVideoGeneralJobRequest,
  DescribeTemplateToVideoJobRequest,
  SubmitVideoEditJobRequest,
  DescribeImageAnimateJobRequest,
  DescribePortraitSingJobResponse,
  DescribeHunyuanToVideoJobResponse,
  VideoEditParam,
} from "./vclm_models"

/**
 * vclm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vclm.tencentcloudapi.com", "2024-05-23", clientConfig)
  }

  /**
     * ●混元生视频接口，基于混元大模型，根据输入的文本或图片智能生成视频。

●默认提供1个并发，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后，才能开始处理下一个任务。
     */
  async SubmitHunyuanToVideoJob(
    req: SubmitHunyuanToVideoJobRequest,
    cb?: (error: string, rep: SubmitHunyuanToVideoJobResponse) => void
  ): Promise<SubmitHunyuanToVideoJobResponse> {
    return this.request("SubmitHunyuanToVideoJob", req, cb)
  }

  /**
   * 用于提交视频编辑任务，支持上传视频、文本及图片素材开展编辑操作，涵盖风格迁移、元素替换、内容增减等核心能力。
   */
  async DescribeVideoEditJob(
    req: DescribeVideoEditJobRequest,
    cb?: (error: string, rep: DescribeVideoEditJobResponse) => void
  ): Promise<DescribeVideoEditJobResponse> {
    return this.request("DescribeVideoEditJob", req, cb)
  }

  /**
   * 用于查询视频特效任务。
   */
  async DescribeTemplateToVideoJob(
    req: DescribeTemplateToVideoJobRequest,
    cb?: (error: string, rep: DescribeTemplateToVideoJobResponse) => void
  ): Promise<DescribeTemplateToVideoJobResponse> {
    return this.request("DescribeTemplateToVideoJob", req, cb)
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
     * 用于提交图片唱演任务。
支持提交音频和图片生成唱演视频，满足社交娱乐、互动营销等场景的需求。
     */
  async SubmitPortraitSingJob(
    req: SubmitPortraitSingJobRequest,
    cb?: (error: string, rep: SubmitPortraitSingJobResponse) => void
  ): Promise<SubmitPortraitSingJobResponse> {
    return this.request("SubmitPortraitSingJob", req, cb)
  }

  /**
     * 用于查询图片唱演任务。
支持提交音频和图片生成唱演视频，满足社交娱乐、互动营销等场景的需求。
     */
  async DescribePortraitSingJob(
    req: DescribePortraitSingJobRequest,
    cb?: (error: string, rep: DescribePortraitSingJobResponse) => void
  ): Promise<DescribePortraitSingJobResponse> {
    return this.request("DescribePortraitSingJob", req, cb)
  }

  /**
     * 用于提交人像驱动任务
支持提交音频和图文来生成对应视频，满足动态交互、内容生产等场景需求。
     */
  async SubmitHumanActorJob(
    req: SubmitHumanActorJobRequest,
    cb?: (error: string, rep: SubmitHumanActorJobResponse) => void
  ): Promise<SubmitHumanActorJobResponse> {
    return this.request("SubmitHumanActorJob", req, cb)
  }

  /**
   * 提交视频特效任务接口
   */
  async SubmitTemplateToVideoJob(
    req: SubmitTemplateToVideoJobRequest,
    cb?: (error: string, rep: SubmitTemplateToVideoJobResponse) => void
  ): Promise<SubmitTemplateToVideoJobResponse> {
    return this.request("SubmitTemplateToVideoJob", req, cb)
  }

  /**
   * 通过JobId提交请求，获取视频配音频任务的结果信息。
   */
  async DescribeVideoVoiceJob(
    req: DescribeVideoVoiceJobRequest,
    cb?: (error: string, rep: DescribeVideoVoiceJobResponse) => void
  ): Promise<DescribeVideoVoiceJobResponse> {
    return this.request("DescribeVideoVoiceJob", req, cb)
  }

  /**
   * 用于提交视频编辑任务，支持上传视频、文本及图片素材开展编辑操作，涵盖风格迁移、元素替换、内容增减等核心能力。
   */
  async SubmitVideoEditJob(
    req: SubmitVideoEditJobRequest,
    cb?: (error: string, rep: SubmitVideoEditJobResponse) => void
  ): Promise<SubmitVideoEditJobResponse> {
    return this.request("SubmitVideoEditJob", req, cb)
  }

  /**
   * 查询视频人脸融合任务
   */
  async DescribeVideoFaceFusionJob(
    req: DescribeVideoFaceFusionJobRequest,
    cb?: (error: string, rep: DescribeVideoFaceFusionJobResponse) => void
  ): Promise<DescribeVideoFaceFusionJobResponse> {
    return this.request("DescribeVideoFaceFusionJob", req, cb)
  }

  /**
   * 用于查询图片跳舞任务。图片跳舞能力支持舞蹈动作结合图片生成跳舞视频，满足社交娱乐、互动营销等场景的需求。
   */
  async DescribeImageAnimateJob(
    req: DescribeImageAnimateJobRequest,
    cb?: (error: string, rep: DescribeImageAnimateJobResponse) => void
  ): Promise<DescribeImageAnimateJobResponse> {
    return this.request("DescribeImageAnimateJob", req, cb)
  }

  /**
   * 用于提交图片跳舞任务。图片跳舞能力支持舞蹈动作结合图片生成跳舞视频，满足社交娱乐、互动营销等场景的需求。
   */
  async SubmitImageAnimateJob(
    req: SubmitImageAnimateJobRequest,
    cb?: (error: string, rep: SubmitImageAnimateJobResponse) => void
  ): Promise<SubmitImageAnimateJobResponse> {
    return this.request("SubmitImageAnimateJob", req, cb)
  }

  /**
   * 提交视频配音效任务，输入视频后提交请求，会返回一个JobId，用于查询视频配音效的处理进度。
   */
  async SubmitVideoVoiceJob(
    req: SubmitVideoVoiceJobRequest,
    cb?: (error: string, rep: SubmitVideoVoiceJobResponse) => void
  ): Promise<SubmitVideoVoiceJobResponse> {
    return this.request("SubmitVideoVoiceJob", req, cb)
  }

  /**
   * 查询混元生视频任务
   */
  async DescribeHunyuanToVideoJob(
    req: DescribeHunyuanToVideoJobRequest,
    cb?: (error: string, rep: DescribeHunyuanToVideoJobResponse) => void
  ): Promise<DescribeHunyuanToVideoJobResponse> {
    return this.request("DescribeHunyuanToVideoJob", req, cb)
  }

  /**
   * 图生视频通用能力接口
   */
  async SubmitImageToVideoGeneralJob(
    req: SubmitImageToVideoGeneralJobRequest,
    cb?: (error: string, rep: SubmitImageToVideoGeneralJobResponse) => void
  ): Promise<SubmitImageToVideoGeneralJobResponse> {
    return this.request("SubmitImageToVideoGeneralJob", req, cb)
  }

  /**
   * 检查图片跳舞输入图
   */
  async CheckAnimateImageJob(
    req: CheckAnimateImageJobRequest,
    cb?: (error: string, rep: CheckAnimateImageJobResponse) => void
  ): Promise<CheckAnimateImageJobResponse> {
    return this.request("CheckAnimateImageJob", req, cb)
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

  /**
   * 查询图生视频通用能力任务接口
   */
  async DescribeImageToVideoGeneralJob(
    req: DescribeImageToVideoGeneralJobRequest,
    cb?: (error: string, rep: DescribeImageToVideoGeneralJobResponse) => void
  ): Promise<DescribeImageToVideoGeneralJobResponse> {
    return this.request("DescribeImageToVideoGeneralJob", req, cb)
  }

  /**
   * 提交视频人脸融合任务
   */
  async SubmitVideoFaceFusionJob(
    req: SubmitVideoFaceFusionJobRequest,
    cb?: (error: string, rep: SubmitVideoFaceFusionJobResponse) => void
  ): Promise<SubmitVideoFaceFusionJobResponse> {
    return this.request("SubmitVideoFaceFusionJob", req, cb)
  }

  /**
   * 通过JobId提交请求，获取人像驱动任务的结果信息。
   */
  async DescribeHumanActorJob(
    req: DescribeHumanActorJobRequest,
    cb?: (error: string, rep: DescribeHumanActorJobResponse) => void
  ): Promise<DescribeHumanActorJobResponse> {
    return this.request("DescribeHumanActorJob", req, cb)
  }
}
