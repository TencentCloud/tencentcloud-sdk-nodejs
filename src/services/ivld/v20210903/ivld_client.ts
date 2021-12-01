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
  DeleteMediaResponse,
  ShowInfo,
  MultiLevelTag,
  DescribeTasksRequest,
  L2Tag,
  ImportMediaRequest,
  DescribeMediasRequest,
  VideoAppearInfo,
  TextInfo,
  DescribeTaskResponse,
  AppearIndexPair,
  DescribeTaskDetailResponse,
  CreateTaskResponse,
  DescribeTaskDetailRequest,
  TaskFilter,
  TextAppearInfo,
  DescribeMediaResponse,
  Data,
  DescribeTaskRequest,
  L1Tag,
  DescribeTasksResponse,
  AudioInfo,
  CreateTaskRequest,
  L3Tag,
  MediaFilter,
  MediaPreknownInfo,
  AppearInfo,
  DeleteMediaRequest,
  ImportMediaResponse,
  DescribeMediasResponse,
  MediaInfo,
  SortBy,
  MediaMetadata,
  DescribeMediaRequest,
  TaskInfo,
} from "./ivld_models"

/**
 * ivld client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ivld.tencentcloudapi.com", "2021-09-03", clientConfig)
  }

  /**
     * 创建智能标签任务。

请注意，本接口为异步接口，**返回TaskId只代表任务创建成功，不代表任务执行成功**。

     */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
     * 将URL指向的媒资视频文件导入系统之中。

**请注意，本接口为异步接口**。接口返回MediaId仅代表导入视频任务发起，不代表任务完成，您可调用读接口(DescribeMedia/DescribeMedias)接口查询MediaId对应的媒资文件的状态。

当前URL只支持COS地址，其形式为`https://${Bucket}-${AppId}.cos.${Region}.myqcloud.com/${ObjectKey}`，其中`${Bucket}`为您的COS桶名称，Region为COS桶所在[可用区](https://cloud.tencent.com/document/product/213/6091)，`${ObjectKey}`为指向存储在COS桶内的待分析的视频的[ObjectKey](https://cloud.tencent.com/document/product/436/13324)

分析完成后，本产品将在您的`${Bucket}`桶内创建名为`${ObjectKey}-${task-start-time}`的目录(`task-start-time`形式为1970-01-01T08:08:08)并将分析结果将回传回该目录，也即，结构化分析结果(包括图片，JSON等数据)将会写回`https://${Bucket}-${AppId}.cos.${Region}.myqcloud.com/${ObjectKey}-${task-start-time}`目录

     */
  async ImportMedia(
    req: ImportMediaRequest,
    cb?: (error: string, rep: ImportMediaResponse) => void
  ): Promise<ImportMediaResponse> {
    return this.request("ImportMedia", req, cb)
  }

  /**
     * 依照输入条件，描述命中的媒资文件信息，包括媒资状态，分辨率，帧率等。

请注意，本接口最多支持同时描述**50**个媒资文件

如果媒资文件未完成导入，本接口将仅输出媒资文件的状态信息；导入完成后，本接口还将输出媒资文件的其他元信息。
     */
  async DescribeMedias(
    req: DescribeMediasRequest,
    cb?: (error: string, rep: DescribeMediasResponse) => void
  ): Promise<DescribeMediasResponse> {
    return this.request("DescribeMedias", req, cb)
  }

  /**
     * 描述媒资文件信息，包括媒资状态，分辨率，帧率等。

如果媒资文件未完成导入，本接口将仅输出媒资文件的状态信息；导入完成后，本接口还将输出媒资文件的其他元信息。
     */
  async DescribeMedia(
    req: DescribeMediaRequest,
    cb?: (error: string, rep: DescribeMediaResponse) => void
  ): Promise<DescribeMediaResponse> {
    return this.request("DescribeMedia", req, cb)
  }

  /**
   * 描述任务信息，如果任务成功完成，还将返回任务结果
   */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
     * 描述智能标签任务进度。

请注意，**此接口仅返回任务执行状态信息，不返回任务执行结果**


     */
  async DescribeTask(
    req: DescribeTaskRequest,
    cb?: (error: string, rep: DescribeTaskResponse) => void
  ): Promise<DescribeTaskResponse> {
    return this.request("DescribeTask", req, cb)
  }

  /**
     * 依照输入条件，描述命中的任务信息，包括任务创建时间，处理时间信息等。

请注意，本接口最多支持同时描述**50**个任务信息
     */
  async DescribeTasks(
    req: DescribeTasksRequest,
    cb?: (error: string, rep: DescribeTasksResponse) => void
  ): Promise<DescribeTasksResponse> {
    return this.request("DescribeTasks", req, cb)
  }

  /**
     * 将MediaId对应的媒资文件从系统中删除。

**请注意，本接口仅删除媒资文件，媒资文件对应的视频分析结果不会被删除**。如您需要删除结构化分析结果，请调用DeleteTask接口。
     */
  async DeleteMedia(
    req: DeleteMediaRequest,
    cb?: (error: string, rep: DeleteMediaResponse) => void
  ): Promise<DeleteMediaResponse> {
    return this.request("DeleteMedia", req, cb)
  }
}
