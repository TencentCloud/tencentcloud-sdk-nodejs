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
  ImageSegments,
  ImageResultResult,
  StorageInfo,
  BucketInfo,
  CreateVideoModerationTaskResponse,
  TaskResult,
  CancelTaskRequest,
  DescribeTaskDetailResponse,
  DescribeVideoStatResponse,
  CreateBizConfigResponse,
  TaskInput,
  DescribeTaskDetailRequest,
  TaskLabel,
  ImageResultsResultDetail,
  DescribeVideoStatRequest,
  InputInfo,
  EvilCount,
  CreateVideoModerationTaskRequest,
  AudioResultDetailLanguageResult,
  FileOutput,
  CancelTaskResponse,
  TrendCount,
  AudioResultDetailTextResult,
  Overview,
  AudioResult,
  AudioResultDetailMoanResult,
  CreateBizConfigRequest,
  MediaInfo,
  MediaModerationConfig,
  AudioSegments,
  Filters,
  ImageResultsResultDetailLocation,
  ImageResult,
} from "./vm_models"

/**
 * vm client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("vm.tencentcloudapi.com", "2020-07-09", clientConfig)
  }

  /**
   * 查看任务详情DescribeTaskDetail
   */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
   * 通过URL或存储桶创建审核任务
   */
  async CreateVideoModerationTask(
    req: CreateVideoModerationTaskRequest,
    cb?: (error: string, rep: CreateVideoModerationTaskResponse) => void
  ): Promise<CreateVideoModerationTaskResponse> {
    return this.request("CreateVideoModerationTask", req, cb)
  }

  /**
   * 控制台识别统计
   */
  async DescribeVideoStat(
    req: DescribeVideoStatRequest,
    cb?: (error: string, rep: DescribeVideoStatResponse) => void
  ): Promise<DescribeVideoStatResponse> {
    return this.request("DescribeVideoStat", req, cb)
  }

  /**
     * 创建业务配置，1个账号最多可以创建20个配置，可定义音频审核的场景，如色情、谩骂等，

在创建业务配置之前，你需要以下步骤：
1. 开通COS存储捅功能，新建存储桶，例如 cms_segments，用来存储 视频转换过程中生成对音频和图片。
2. 然后在COS控制台，授权天御内容安全主账号 对 cms_segments 存储桶对读写权限。具体授权操作，参考https://cloud.tencent.com/document/product/436/38648

     */
  async CreateBizConfig(
    req: CreateBizConfigRequest,
    cb?: (error: string, rep: CreateBizConfigResponse) => void
  ): Promise<CreateBizConfigResponse> {
    return this.request("CreateBizConfig", req, cb)
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
