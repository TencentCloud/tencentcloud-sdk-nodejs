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
  Canvas,
  SetWhiteboardPushCallbackKeyRequest,
  TimeValue,
  LayoutParams,
  SetVideoGenerationTaskCallbackRequest,
  StreamControl,
  StopOnlineRecordResponse,
  SetVideoGenerationTaskCallbackKeyRequest,
  StartWhiteboardPushRequest,
  OmittedDuration,
  DescribeWhiteboardPushRequest,
  DescribeQualityMetricsResponse,
  ResumeOnlineRecordResponse,
  SetVideoGenerationTaskCallbackResponse,
  SetWhiteboardPushCallbackKeyResponse,
  WhiteboardPushBackupParam,
  DescribeSnapshotTaskRequest,
  StartOnlineRecordRequest,
  DescribeVideoGenerationTaskCallbackResponse,
  DescribeSnapshotTaskResponse,
  StartWhiteboardPushResponse,
  ResumeOnlineRecordRequest,
  DescribeOnlineRecordCallbackRequest,
  SnapshotCOS,
  DescribeOnlineRecordCallbackResponse,
  StopWhiteboardPushRequest,
  SetTranscodeCallbackResponse,
  StopOnlineRecordRequest,
  SnapshotWhiteboard,
  UsageDataItem,
  SetVideoGenerationTaskCallbackKeyResponse,
  CreateTranscodeResponse,
  CreateSnapshotTaskResponse,
  DescribeVideoGenerationTaskResponse,
  DescribeWhiteboardPushCallbackResponse,
  CustomLayout,
  Interrupt,
  VideoInfo,
  SetTranscodeCallbackKeyResponse,
  DescribeTIWDailyUsageResponse,
  Concat,
  DescribeOnlineRecordRequest,
  DescribeWhiteboardPushResponse,
  StartOnlineRecordResponse,
  SetOnlineRecordCallbackKeyResponse,
  DescribeVideoGenerationTaskRequest,
  SnapshotResult,
  CreateVideoGenerationTaskResponse,
  PauseOnlineRecordResponse,
  CreateTranscodeRequest,
  DescribeWhiteboardPushCallbackRequest,
  DescribeOnlineRecordResponse,
  SetTranscodeCallbackKeyRequest,
  DescribeTranscodeRequest,
  DescribeTranscodeResponse,
  StreamLayout,
  DescribeQualityMetricsRequest,
  SetOnlineRecordCallbackKeyRequest,
  CreateVideoGenerationTaskRequest,
  DescribeTranscodeCallbackRequest,
  CreateSnapshotTaskRequest,
  DescribeTranscodeCallbackResponse,
  SetTranscodeCallbackRequest,
  SetWhiteboardPushCallbackRequest,
  SetWhiteboardPushCallbackResponse,
  RecordControl,
  DescribeTIWDailyUsageRequest,
  Whiteboard,
  MixStream,
  DescribeVideoGenerationTaskCallbackRequest,
  SetOnlineRecordCallbackRequest,
  PauseOnlineRecordRequest,
  StopWhiteboardPushResponse,
  SetOnlineRecordCallbackResponse,
} from "./tiw_models"

/**
 * tiw client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tiw.tencentcloudapi.com", "2019-09-19", clientConfig)
  }

  /**
   * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
   */
  async SetOnlineRecordCallback(
    req: SetOnlineRecordCallbackRequest,
    cb?: (error: string, rep: SetOnlineRecordCallbackResponse) => void
  ): Promise<SetOnlineRecordCallbackResponse> {
    return this.request("SetOnlineRecordCallback", req, cb)
  }

  /**
   * 设置录制视频生成回调地址
   */
  async SetVideoGenerationTaskCallback(
    req: SetVideoGenerationTaskCallbackRequest,
    cb?: (error: string, rep: SetVideoGenerationTaskCallbackResponse) => void
  ): Promise<SetVideoGenerationTaskCallbackResponse> {
    return this.request("SetVideoGenerationTaskCallback", req, cb)
  }

  /**
   * 创建视频生成任务
   */
  async CreateVideoGenerationTask(
    req: CreateVideoGenerationTaskRequest,
    cb?: (error: string, rep: CreateVideoGenerationTaskResponse) => void
  ): Promise<CreateVideoGenerationTaskResponse> {
    return this.request("CreateVideoGenerationTask", req, cb)
  }

  /**
   * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  async SetOnlineRecordCallbackKey(
    req: SetOnlineRecordCallbackKeyRequest,
    cb?: (error: string, rep: SetOnlineRecordCallbackKeyResponse) => void
  ): Promise<SetOnlineRecordCallbackKeyResponse> {
    return this.request("SetOnlineRecordCallbackKey", req, cb)
  }

  /**
   * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
   */
  async SetTranscodeCallback(
    req: SetTranscodeCallbackRequest,
    cb?: (error: string, rep: SetTranscodeCallbackResponse) => void
  ): Promise<SetTranscodeCallbackResponse> {
    return this.request("SetTranscodeCallback", req, cb)
  }

  /**
   * 恢复实时录制
   */
  async ResumeOnlineRecord(
    req: ResumeOnlineRecordRequest,
    cb?: (error: string, rep: ResumeOnlineRecordResponse) => void
  ): Promise<ResumeOnlineRecordResponse> {
    return this.request("ResumeOnlineRecord", req, cb)
  }

  /**
   * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  async SetTranscodeCallbackKey(
    req: SetTranscodeCallbackKeyRequest,
    cb?: (error: string, rep: SetTranscodeCallbackKeyResponse) => void
  ): Promise<SetTranscodeCallbackKeyResponse> {
    return this.request("SetTranscodeCallbackKey", req, cb)
  }

  /**
   * 创建白板板书生成任务, 在任务结束后，如果提供了回调地址，将通过回调地址通知板书生成结果
   */
  async CreateSnapshotTask(
    req: CreateSnapshotTaskRequest,
    cb?: (error: string, rep: CreateSnapshotTaskResponse) => void
  ): Promise<CreateSnapshotTaskResponse> {
    return this.request("CreateSnapshotTask", req, cb)
  }

  /**
   * 查询录制任务状态与结果
   */
  async DescribeOnlineRecord(
    req: DescribeOnlineRecordRequest,
    cb?: (error: string, rep: DescribeOnlineRecordResponse) => void
  ): Promise<DescribeOnlineRecordResponse> {
    return this.request("DescribeOnlineRecord", req, cb)
  }

  /**
   * 查询实时录制回调地址
   */
  async DescribeOnlineRecordCallback(
    req: DescribeOnlineRecordCallbackRequest,
    cb?: (error: string, rep: DescribeOnlineRecordCallbackResponse) => void
  ): Promise<DescribeOnlineRecordCallbackResponse> {
    return this.request("DescribeOnlineRecordCallback", req, cb)
  }

  /**
   * 查询白板推流回调地址
   */
  async DescribeWhiteboardPushCallback(
    req: DescribeWhiteboardPushCallbackRequest,
    cb?: (error: string, rep: DescribeWhiteboardPushCallbackResponse) => void
  ): Promise<DescribeWhiteboardPushCallbackResponse> {
    return this.request("DescribeWhiteboardPushCallback", req, cb)
  }

  /**
   * 发起一个白板推流任务
   */
  async StartWhiteboardPush(
    req: StartWhiteboardPushRequest,
    cb?: (error: string, rep: StartWhiteboardPushResponse) => void
  ): Promise<StartWhiteboardPushResponse> {
    return this.request("StartWhiteboardPush", req, cb)
  }

  /**
   * 创建一个文档转码任务
   */
  async CreateTranscode(
    req: CreateTranscodeRequest,
    cb?: (error: string, rep: CreateTranscodeResponse) => void
  ): Promise<CreateTranscodeResponse> {
    return this.request("CreateTranscode", req, cb)
  }

  /**
   * 查询录制视频生成回调地址
   */
  async DescribeVideoGenerationTaskCallback(
    req: DescribeVideoGenerationTaskCallbackRequest,
    cb?: (error: string, rep: DescribeVideoGenerationTaskCallbackResponse) => void
  ): Promise<DescribeVideoGenerationTaskCallbackResponse> {
    return this.request("DescribeVideoGenerationTaskCallback", req, cb)
  }

  /**
   * 设置白板推流回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  async SetWhiteboardPushCallback(
    req: SetWhiteboardPushCallbackRequest,
    cb?: (error: string, rep: SetWhiteboardPushCallbackResponse) => void
  ): Promise<SetWhiteboardPushCallbackResponse> {
    return this.request("SetWhiteboardPushCallback", req, cb)
  }

  /**
   * 发起一个实时录制任务
   */
  async StartOnlineRecord(
    req: StartOnlineRecordRequest,
    cb?: (error: string, rep: StartOnlineRecordResponse) => void
  ): Promise<StartOnlineRecordResponse> {
    return this.request("StartOnlineRecord", req, cb)
  }

  /**
   * 停止实时录制
   */
  async StopOnlineRecord(
    req: StopOnlineRecordRequest,
    cb?: (error: string, rep: StopOnlineRecordResponse) => void
  ): Promise<StopOnlineRecordResponse> {
    return this.request("StopOnlineRecord", req, cb)
  }

  /**
   * 设置白板推流回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  async SetWhiteboardPushCallbackKey(
    req: SetWhiteboardPushCallbackKeyRequest,
    cb?: (error: string, rep: SetWhiteboardPushCallbackKeyResponse) => void
  ): Promise<SetWhiteboardPushCallbackKeyResponse> {
    return this.request("SetWhiteboardPushCallbackKey", req, cb)
  }

  /**
   * 查询文档转码任务的执行进度与转码结果
   */
  async DescribeTranscode(
    req: DescribeTranscodeRequest,
    cb?: (error: string, rep: DescribeTranscodeResponse) => void
  ): Promise<DescribeTranscodeResponse> {
    return this.request("DescribeTranscode", req, cb)
  }

  /**
     * 查询互动白板天维度计费用量。
1. 单次查询统计区间最多不能超过31天。
2. 由于统计延迟等原因，暂时不支持查询当天数据，建议在次日上午7点以后再来查询前一天的用量，例如在10月27日上午7点后，再来查询到10月26日整天的用量

     */
  async DescribeTIWDailyUsage(
    req: DescribeTIWDailyUsageRequest,
    cb?: (error: string, rep: DescribeTIWDailyUsageResponse) => void
  ): Promise<DescribeTIWDailyUsageResponse> {
    return this.request("DescribeTIWDailyUsage", req, cb)
  }

  /**
   * 停止白板推流任务
   */
  async StopWhiteboardPush(
    req: StopWhiteboardPushRequest,
    cb?: (error: string, rep: StopWhiteboardPushResponse) => void
  ): Promise<StopWhiteboardPushResponse> {
    return this.request("StopWhiteboardPush", req, cb)
  }

  /**
   * 查询互动白板质量数据
   */
  async DescribeQualityMetrics(
    req: DescribeQualityMetricsRequest,
    cb?: (error: string, rep: DescribeQualityMetricsResponse) => void
  ): Promise<DescribeQualityMetricsResponse> {
    return this.request("DescribeQualityMetrics", req, cb)
  }

  /**
   * 暂停实时录制
   */
  async PauseOnlineRecord(
    req: PauseOnlineRecordRequest,
    cb?: (error: string, rep: PauseOnlineRecordResponse) => void
  ): Promise<PauseOnlineRecordResponse> {
    return this.request("PauseOnlineRecord", req, cb)
  }

  /**
   * 查询文档转码回调地址
   */
  async DescribeTranscodeCallback(
    req: DescribeTranscodeCallbackRequest,
    cb?: (error: string, rep: DescribeTranscodeCallbackResponse) => void
  ): Promise<DescribeTranscodeCallbackResponse> {
    return this.request("DescribeTranscodeCallback", req, cb)
  }

  /**
   * 设置视频生成回调鉴权密钥
   */
  async SetVideoGenerationTaskCallbackKey(
    req: SetVideoGenerationTaskCallbackKeyRequest,
    cb?: (error: string, rep: SetVideoGenerationTaskCallbackKeyResponse) => void
  ): Promise<SetVideoGenerationTaskCallbackKeyResponse> {
    return this.request("SetVideoGenerationTaskCallbackKey", req, cb)
  }

  /**
   * 查询推流任务状态与结果
   */
  async DescribeWhiteboardPush(
    req: DescribeWhiteboardPushRequest,
    cb?: (error: string, rep: DescribeWhiteboardPushResponse) => void
  ): Promise<DescribeWhiteboardPushResponse> {
    return this.request("DescribeWhiteboardPush", req, cb)
  }

  /**
   * 查询录制视频生成任务状态与结果
   */
  async DescribeVideoGenerationTask(
    req: DescribeVideoGenerationTaskRequest,
    cb?: (error: string, rep: DescribeVideoGenerationTaskResponse) => void
  ): Promise<DescribeVideoGenerationTaskResponse> {
    return this.request("DescribeVideoGenerationTask", req, cb)
  }

  /**
   * 获取指定白板板书生成任务信息
   */
  async DescribeSnapshotTask(
    req: DescribeSnapshotTaskRequest,
    cb?: (error: string, rep: DescribeSnapshotTaskResponse) => void
  ): Promise<DescribeSnapshotTaskResponse> {
    return this.request("DescribeSnapshotTask", req, cb)
  }
}
