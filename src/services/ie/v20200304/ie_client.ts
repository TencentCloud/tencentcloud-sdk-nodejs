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
  VideoSuperResolution,
  DynamicImageInfo,
  MediaJoiningTaskResult,
  Denoise,
  StripTaskResultItem,
  CosAuthMode,
  OpeningEndingTaskResultItem,
  MediaCuttingTaskResult,
  CoverTaskResultItem,
  MediaCuttingInfo,
  IntervalTime,
  LowLightEnhance,
  MuxInfo,
  TargetVideoInfo,
  VideoInfo,
  DescribeQualityControlTaskResultRequest,
  DescribeMediaQualityRestorationTaskRusultResponse,
  DarInfo,
  CreateQualityControlTaskResponse,
  LoudnessInfo,
  SubTaskTranscodeInfo,
  CreateQualityControlTaskRequest,
  FrameTagRec,
  HighlightsTaskResultItem,
  CreateMediaQualityRestorationTaskResponse,
  Sharp,
  MediaRecognitionTaskResult,
  MediaRecognitionInfo,
  SaveInfo,
  ScratchRepair,
  ArtifactReduction,
  TagEditingInfo,
  StopMediaQualityRestorationTaskResponse,
  StripEditingInfo,
  EditingInfo,
  CreateMediaProcessTaskRequest,
  SubtitleResult,
  CreateMediaProcessTaskResponse,
  TaskResultFile,
  CreateEditingTaskResponse,
  UrlInfo,
  MediaSourceInfo,
  CallbackInfo,
  SectionTime,
  SubtitleRec,
  ResultVideoInfo,
  PicMarkInfoItem,
  MediaJoiningInfo,
  MediaCuttingWatermarkText,
  DescribeMediaQualityRestorationTaskRusultRequest,
  ColorEnhance,
  SegmentInfo,
  OpeningEndingEditingInfo,
  MediaTargetInfo,
  TagTaskResultItem,
  QualityControlInfo,
  DownInfo,
  ClassificationEditingInfo,
  HighlightsTaskResult,
  DescribeEditingTaskResultRequest,
  AudioInfoResultItem,
  EditInfo,
  RemoveReverb,
  StopMediaProcessTaskResponse,
  DescribeEditingTaskResultResponse,
  QualityControlInfoTaskResult,
  MediaQualityRestorationTaskResult,
  HiddenMarkInfo,
  MediaCuttingOutForm,
  StopMediaQualityRestorationTaskRequest,
  DescribeQualityControlTaskResultResponse,
  ClassificationTaskResultItem,
  AudioInfo,
  SubTaskResultItem,
  StripTaskResult,
  HighlightsEditingInfo,
  FileInfo,
  ResultAudioInfo,
  OpeningEndingTaskResult,
  VideoEnhance,
  VideoRepair,
  QualityControlResultItems,
  FrameTagItem,
  QualityControlItem,
  CoverTaskResult,
  TagTaskResult,
  AudioEnhance,
  CosInfo,
  MediaCuttingWatermarkImage,
  MediaResultInfo,
  FrameTagResult,
  TextMarkInfoItem,
  MediaCuttingTimeInfo,
  TargetInfo,
  CreateMediaQualityRestorationTaskRequest,
  CreateEditingTaskRequest,
  Denoising,
  FaceProtect,
  VideoInfoResultItem,
  StopMediaProcessTaskRequest,
  CoverEditingInfo,
  SubtitleItem,
  DescribeMediaProcessTaskResultRequest,
  SpriteImageInfo,
  MediaProcessTaskResult,
  EditingTaskResult,
  MediaProcessInfo,
  ClassificationTaskResult,
  TagItem,
  DescribeMediaProcessTaskResultResponse,
  HighlightsTaskResultItemSegment,
  MediaCuttingWatermark,
} from "./ie_models"

/**
 * ie client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ie.tencentcloudapi.com", "2020-03-04", clientConfig)
  }

  /**
   * 获取画质重生任务结果，查看结束后的文件信息
   */
  async DescribeMediaQualityRestorationTaskRusult(
    req: DescribeMediaQualityRestorationTaskRusultRequest,
    cb?: (error: string, rep: DescribeMediaQualityRestorationTaskRusultResponse) => void
  ): Promise<DescribeMediaQualityRestorationTaskRusultResponse> {
    return this.request("DescribeMediaQualityRestorationTaskRusult", req, cb)
  }

  /**
   * 用于创建编辑处理任务，如媒体截取、媒体编辑、媒体拼接、媒体字幕。
   */
  async CreateMediaProcessTask(
    req: CreateMediaProcessTaskRequest,
    cb?: (error: string, rep: CreateMediaProcessTaskResponse) => void
  ): Promise<CreateMediaProcessTaskResponse> {
    return this.request("CreateMediaProcessTask", req, cb)
  }

  /**
   * 删除正在进行的画质重生任务
   */
  async StopMediaQualityRestorationTask(
    req: StopMediaQualityRestorationTaskRequest,
    cb?: (error: string, rep: StopMediaQualityRestorationTaskResponse) => void
  ): Promise<StopMediaQualityRestorationTaskResponse> {
    return this.request("StopMediaQualityRestorationTask", req, cb)
  }

  /**
   * 用于获取编辑处理任务的结果。
   */
  async DescribeMediaProcessTaskResult(
    req: DescribeMediaProcessTaskResultRequest,
    cb?: (error: string, rep: DescribeMediaProcessTaskResultResponse) => void
  ): Promise<DescribeMediaProcessTaskResultResponse> {
    return this.request("DescribeMediaProcessTaskResult", req, cb)
  }

  /**
   * 创建画质重生任务，对视频进行转码、去噪、去划痕、去毛刺、超分、细节增强和色彩增强。
   */
  async CreateMediaQualityRestorationTask(
    req: CreateMediaQualityRestorationTaskRequest,
    cb?: (error: string, rep: CreateMediaQualityRestorationTaskResponse) => void
  ): Promise<CreateMediaQualityRestorationTaskResponse> {
    return this.request("CreateMediaQualityRestorationTask", req, cb)
  }

  /**
   * 获取编辑理解任务结果。
   */
  async DescribeEditingTaskResult(
    req: DescribeEditingTaskResultRequest,
    cb?: (error: string, rep: DescribeEditingTaskResultResponse) => void
  ): Promise<DescribeEditingTaskResultResponse> {
    return this.request("DescribeEditingTaskResult", req, cb)
  }

  /**
   * 用于停止正在进行中的编辑处理任务。
   */
  async StopMediaProcessTask(
    req: StopMediaProcessTaskRequest,
    cb?: (error: string, rep: StopMediaProcessTaskResponse) => void
  ): Promise<StopMediaProcessTaskResponse> {
    return this.request("StopMediaProcessTask", req, cb)
  }

  /**
   * 获取媒体质检任务结果
   */
  async DescribeQualityControlTaskResult(
    req: DescribeQualityControlTaskResultRequest,
    cb?: (error: string, rep: DescribeQualityControlTaskResultResponse) => void
  ): Promise<DescribeQualityControlTaskResultResponse> {
    return this.request("DescribeQualityControlTaskResult", req, cb)
  }

  /**
   * 通过接口可以智能检测视频画面中抖动重影、模糊、低光照、过曝光、黑边、白边、黑屏、白屏、花屏、噪点、马赛克、二维码等在内的多个场景，还可以自动检测视频无音频异常、无声音片段。
   */
  async CreateQualityControlTask(
    req: CreateQualityControlTaskRequest,
    cb?: (error: string, rep: CreateQualityControlTaskResponse) => void
  ): Promise<CreateQualityControlTaskResponse> {
    return this.request("CreateQualityControlTask", req, cb)
  }

  /**
   * 创建编辑理解任务，可以同时选择视频标签识别、分类识别、智能拆条、智能集锦、智能封面和片头片尾识别中的一项或者多项能力。
   */
  async CreateEditingTask(
    req: CreateEditingTaskRequest,
    cb?: (error: string, rep: CreateEditingTaskResponse) => void
  ): Promise<CreateEditingTaskResponse> {
    return this.request("CreateEditingTask", req, cb)
  }
}
