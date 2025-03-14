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
  CreateVideoGenerationTaskRequest,
  SetVideoGenerationTaskCallbackKeyRequest,
  DescribeWhiteboardPushRequest,
  ResumeOnlineRecordResponse,
  SetPPTCheckCallbackKeyResponse,
  CreateTranscodeResponse,
  VideoInfo,
  DescribePPTCheckResponse,
  CustomLayout,
  Interrupt,
  DescribeOnlineRecordRequest,
  SetOnlineRecordCallbackKeyResponse,
  StopOnlineRecordResponse,
  DescribeTranscodeCallbackRequest,
  ResumeOnlineRecordRequest,
  SetWhiteboardPushCallbackKeyResponse,
  SetWhiteboardPushCallbackResponse,
  OmittedDuration,
  PPTErrSlide,
  PauseOnlineRecordRequest,
  DescribeRunningTasksResponse,
  DescribeWhiteboardPushResponse,
  SetVideoGenerationTaskCallbackRequest,
  DescribeWarningCallbackResponse,
  DescribeRunningTasksRequest,
  SnapshotResult,
  DescribeVideoGenerationTaskRequest,
  SetVideoGenerationTaskCallbackKeyResponse,
  DescribeVideoGenerationTaskResponse,
  SetWarningCallbackResponse,
  DescribeWhiteboardPushCallbackRequest,
  DescribeOnlineRecordResponse,
  DescribeTranscodeRequest,
  SetOnlineRecordCallbackResponse,
  DescribePPTCheckCallbackResponse,
  DescribeTranscodeCallbackResponse,
  SetOnlineRecordCallbackRequest,
  MixStream,
  DescribeVideoGenerationTaskCallbackRequest,
  SetWhiteboardPushCallbackKeyRequest,
  AuthParam,
  StartWhiteboardPushRequest,
  DescribeVideoGenerationTaskCallbackResponse,
  WhiteboardPushBackupParam,
  DescribeSnapshotTaskRequest,
  StartOnlineRecordRequest,
  DescribeOnlineRecordCallbackRequest,
  DescribeWarningCallbackRequest,
  SetTranscodeCallbackResponse,
  StopOnlineRecordRequest,
  SetVideoGenerationTaskCallbackResponse,
  DescribeTranscodeByUrlResponse,
  StopWhiteboardPushRequest,
  SetWhiteboardPushCallbackRequest,
  Concat,
  SnapshotCOS,
  CreateVideoGenerationTaskResponse,
  DescribePPTCheckCallbackRequest,
  CreatePPTCheckTaskRequest,
  PauseOnlineRecordResponse,
  CreateSnapshotTaskRequest,
  DescribeTranscodeResponse,
  SetOnlineRecordCallbackKeyRequest,
  DescribeOnlineRecordCallbackResponse,
  RecordControl,
  SetPPTCheckCallbackKeyRequest,
  SetPPTCheckCallbackResponse,
  StopWhiteboardPushResponse,
  DescribeTranscodeByUrlRequest,
  ExcelParam,
  LayoutParams,
  StreamControl,
  PPTErr,
  DescribeSnapshotTaskResponse,
  StreamLayout,
  CreateSnapshotTaskResponse,
  DescribeWhiteboardPushCallbackResponse,
  RunningTaskItem,
  SetTranscodeCallbackKeyResponse,
  SetPPTCheckCallbackRequest,
  SetWarningCallbackRequest,
  StartOnlineRecordResponse,
  Whiteboard,
  SnapshotWhiteboard,
  CreatePPTCheckTaskResponse,
  CreateTranscodeRequest,
  SetTranscodeCallbackKeyRequest,
  SetTranscodeCallbackRequest,
  StartWhiteboardPushResponse,
  DescribePPTCheckRequest,
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
   * 查询PPT检测任务回调地址
   */
  async DescribePPTCheckCallback(
    req: DescribePPTCheckCallbackRequest,
    cb?: (error: string, rep: DescribePPTCheckCallbackResponse) => void
  ): Promise<DescribePPTCheckCallbackResponse> {
    return this.request("DescribePPTCheckCallback", req, cb)
  }

  /**
   * 设置告警回调地址。此功能需要申请白名单使用。
   */
  async SetWarningCallback(
    req: SetWarningCallbackRequest,
    cb?: (error: string, rep: SetWarningCallbackResponse) => void
  ): Promise<SetWarningCallbackResponse> {
    return this.request("SetWarningCallback", req, cb)
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
   * 设置PPT检测任务回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  async SetPPTCheckCallbackKey(
    req: SetPPTCheckCallbackKeyRequest,
    cb?: (error: string, rep: SetPPTCheckCallbackKeyResponse) => void
  ): Promise<SetPPTCheckCallbackKeyResponse> {
    return this.request("SetPPTCheckCallbackKey", req, cb)
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
   * 设置PPT检测任务回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260#c9cbe05f-fe1a-4410-b4dc-40cc301c7b81
   */
  async SetPPTCheckCallback(
    req: SetPPTCheckCallbackRequest,
    cb?: (error: string, rep: SetPPTCheckCallbackResponse) => void
  ): Promise<SetPPTCheckCallbackResponse> {
    return this.request("SetPPTCheckCallback", req, cb)
  }

  /**
   * 通过文档URL查询转码任务，返回最近一天内最新的转码任务状态
   */
  async DescribeTranscodeByUrl(
    req: DescribeTranscodeByUrlRequest,
    cb?: (error: string, rep: DescribeTranscodeByUrlResponse) => void
  ): Promise<DescribeTranscodeByUrlResponse> {
    return this.request("DescribeTranscodeByUrl", req, cb)
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
   * 发起一个实时录制任务
   */
  async StartOnlineRecord(
    req: StartOnlineRecordRequest,
    cb?: (error: string, rep: StartOnlineRecordResponse) => void
  ): Promise<StartOnlineRecordResponse> {
    return this.request("StartOnlineRecord", req, cb)
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
   * 查询告警回调地址。此功能需要申请白名单使用。
   */
  async DescribeWarningCallback(
    req: DescribeWarningCallbackRequest,
    cb?: (error: string, rep: DescribeWarningCallbackResponse) => void
  ): Promise<DescribeWarningCallbackResponse> {
    return this.request("DescribeWarningCallback", req, cb)
  }

  /**
   * 检测PPT文件，识别PPT中包含的动态转码任务（Transcode）不支持的元素
   */
  async CreatePPTCheckTask(
    req: CreatePPTCheckTaskRequest,
    cb?: (error: string, rep: CreatePPTCheckTaskResponse) => void
  ): Promise<CreatePPTCheckTaskResponse> {
    return this.request("CreatePPTCheckTask", req, cb)
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
   * 根据指定的任务类型，获取当前正在执行中的任务列表。只能查询最近3天内创建的任务。
   */
  async DescribeRunningTasks(
    req: DescribeRunningTasksRequest,
    cb?: (error: string, rep: DescribeRunningTasksResponse) => void
  ): Promise<DescribeRunningTasksResponse> {
    return this.request("DescribeRunningTasks", req, cb)
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
   * 查询PPT检测任务的执行进度或结果，支持查询最近半年内的任务结果
   */
  async DescribePPTCheck(
    req: DescribePPTCheckRequest,
    cb?: (error: string, rep: DescribePPTCheckResponse) => void
  ): Promise<DescribePPTCheckResponse> {
    return this.request("DescribePPTCheck", req, cb)
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
