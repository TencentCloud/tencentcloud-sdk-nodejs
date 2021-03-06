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
  TextResult,
  DescribeTasksRequest,
  StorageInfo,
  CreateAudioModerationSyncTaskRequest,
  BucketInfo,
  CreateAudioModerationTaskResponse,
  TaskResult,
  CancelTaskRequest,
  DescribeTaskDetailResponse,
  CreateAudioModerationTaskRequest,
  TaskInput,
  DescribeTaskDetailRequest,
  CreateAudioModerationSyncTaskResponse,
  TaskLabel,
  TaskFilter,
  InputInfo,
  DescribeTasksResponse,
  AudioResultDetailLanguageResult,
  MoanResult,
  CancelTaskResponse,
  AudioResultDetailTextResult,
  AudioResult,
  AudioResultDetailMoanResult,
  TaskData,
  MediaInfo,
  AudioSegments,
} from "./ams_models"

/**
 * ams client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ams.tencentcloudapi.com", "2020-12-29", clientConfig)
  }

  /**
     * 本接口（Audio Moderation）用于提交音频内容（包括音频文件或流地址）进行智能审核任务，使用前请您登陆控制台开通音频内容安全服务。

### 功能使用说明：
- 前往“内容安全控制台-音频内容安全”开启使用音频内容安全服务，首次开通可获得20小时免费调用时长

### 接口功能说明：
- 支持对音频流或音频文件进行检测，判断其中是否包含违规内容；
- 支持设置回调地址 Callback 获取检测结果，或通过接口(查询音频检测结果)主动轮询获取检测结果；
- 支持识别违规内容，包括：低俗、谩骂、色情、涉政、广告等场景；
- 支持批量提交检测任务。检测任务列表最多支持10个；

### 音频文件调用说明：
- 音频文件大小支持：文件 < 500M；
- 音频文件时长支持：< 1小时；
- 音频码率类型支持：128 Kbps - 256 Kbps ；
- 音频文件支持格式：wav、mp3、aac、flac、amr、3gp、 m4a、wma、ogg、ape；
- 支持音视频文件分离并对音频文件进行独立识别；

### 音频流调用说明：
- 音频流时长支持：< 3小时；
- 音频码率类型支持：128 Kbps - 256 Kbps ；
- 音频流支持的传输协议：RTMP、HTTP、HTTPS；
- 音频流格式支持的类型：rtp、srtp、rtmp、rtmps、mmsh、 mmst、hls、http、tcp、https、m3u8；
- 支持音视频流分离并对音频流进行独立识别；
     */
  async CreateAudioModerationTask(
    req: CreateAudioModerationTaskRequest,
    cb?: (error: string, rep: CreateAudioModerationTaskResponse) => void
  ): Promise<CreateAudioModerationTaskResponse> {
    return this.request("CreateAudioModerationTask", req, cb)
  }

  /**
     * 本接口（CreateAudioModerationSyncTask） 用于提交短音频内容进行智能审核任务，使用前请您登陆控制台开通音频内容安全服务。

功能使用说明：
前往“内容安全控制台-音频内容安全”开启使用音频内容安全服务，首次开通可获得10小时免费调用时长；

接口限制：
- 音频文件大小支持：文件 < 5M;
- 音频文件时长小于60s，超过60s音频调用则报错；
- 音频码率类型支持：8Kbps - 16Kbps；
- 音频文件支持格式：wav、mp3；
- 接口仅限音频文件传入，视频文件传入请调用长音频异步接口；
- 接口默认QPS为10，默认接口请求频率限制20次/秒，如需要更高的并发或请求频率，请工单咨询；
- 接口超时为5s，每一次请求超过该时长会报错；
     */
  async CreateAudioModerationSyncTask(
    req: CreateAudioModerationSyncTaskRequest,
    cb?: (error: string, rep: CreateAudioModerationSyncTaskResponse) => void
  ): Promise<CreateAudioModerationSyncTaskResponse> {
    return this.request("CreateAudioModerationSyncTask", req, cb)
  }

  /**
   * 查看任务详情
   */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
   * 查看审核任务列表
   */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
   * 取消任务
   */
  async CancelTask(
    req: CancelTaskRequest,
    cb?: (error: string, rep: CancelTaskResponse) => void
  ): Promise<CancelTaskResponse> {
    return this.request("CancelTask", req, cb)
  }
}
