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
  UploadIdResponse,
  QueryCallDetailsRequest,
  GeneralStat,
  LabelValue,
  GetTaskDetailResponse,
  QueryCallDetailsResponse,
  UploadIdRequest,
  LabelDetailData,
  QueryGeneralStatResponse,
  PredictRatingRequest,
  GetTaskListResponse,
  CallStatItem,
  CallDetailItem,
  GetTaskListRequest,
  TaskListData,
  GetTaskDetailRequest,
  CallDetails,
  TaskDetailData,
  RatingData,
  QueryCallStatResponse,
  QueryCallStatRequest,
  ListModel,
  TaskData,
  QueryGeneralStatRequest,
  PredictRatingResponse,
} from "./apcas_models"

/**
 * apcas client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("apcas.tencentcloudapi.com", "2020-11-27", clientConfig)
  }

  /**
   * 获取日/月/周/总调用量统计数据
   */
  async QueryGeneralStat(
    req: QueryGeneralStatRequest,
    cb?: (error: string, rep: QueryGeneralStatResponse) => void
  ): Promise<QueryGeneralStatResponse> {
    return this.request("QueryGeneralStat", req, cb)
  }

  /**
   * 查询当前账号AppID下的画像洞察任务列表
   */
  async GetTaskList(
    req: GetTaskListRequest,
    cb?: (error: string, rep: GetTaskListResponse) => void
  ): Promise<GetTaskListResponse> {
    return this.request("GetTaskList", req, cb)
  }

  /**
   * 按时间维度获取调用量统计
   */
  async QueryCallStat(
    req: QueryCallStatRequest,
    cb?: (error: string, rep: QueryCallStatResponse) => void
  ): Promise<QueryCallStatResponse> {
    return this.request("QueryCallStat", req, cb)
  }

  /**
   * 上传群体画像的ID列表（支持的ID类型：0:imei 7:IDFA 8:MD5(imei)），后台返回生成的画像分析任务ID
   */
  async UploadId(
    req: UploadIdRequest,
    cb?: (error: string, rep: UploadIdResponse) => void
  ): Promise<UploadIdResponse> {
    return this.request("UploadId", req, cb)
  }

  /**
   * 查询画像洞察任务详情
   */
  async GetTaskDetail(
    req: GetTaskDetailRequest,
    cb?: (error: string, rep: GetTaskDetailResponse) => void
  ): Promise<GetTaskDetailResponse> {
    return this.request("GetTaskDetail", req, cb)
  }

  /**
   * 查询调用明细
   */
  async QueryCallDetails(
    req: QueryCallDetailsRequest,
    cb?: (error: string, rep: QueryCallDetailsResponse) => void
  ): Promise<QueryCallDetailsResponse> {
    return this.request("QueryCallDetails", req, cb)
  }

  /**
   * 根据传入的设备号（IMEI、IDFA、手机号、手机号MD5），返回意向评级结果
   */
  async PredictRating(
    req: PredictRatingRequest,
    cb?: (error: string, rep: PredictRatingResponse) => void
  ): Promise<PredictRatingResponse> {
    return this.request("PredictRating", req, cb)
  }
}
