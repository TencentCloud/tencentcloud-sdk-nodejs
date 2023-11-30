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
  StopOnlineRecordResponse,
  SetVideoGenerationTaskCallbackKeyRequest,
  DescribeTIWRoomDailyUsageRequest,
  DescribeWhiteboardPushRequest,
  DescribeWhiteboardPushSearchResponse,
  ResumeOnlineRecordResponse,
  UsageDataItem,
  DescribeWhiteboardApplicationConfigResponse,
  WhiteboardPushResult,
  CreateSnapshotTaskResponse,
  ModifyApplicationResponse,
  SetPPTCheckCallbackKeyResponse,
  CreateTranscodeResponse,
  DescribeUserResourcesResponse,
  UserListItem,
  DescribePPTCheckResponse,
  CustomLayout,
  Interrupt,
  CreateApplicationRequest,
  RoomListItem,
  ModifyWhiteboardBucketConfigRequest,
  SetOnlineRecordCallbackKeyResponse,
  DescribeRecordSearchResponse,
  DescribeAPIServiceRequest,
  DescribeQualityMetricsRequest,
  CreateVideoGenerationTaskRequest,
  DescribeTranscodeCallbackRequest,
  DescribeTranscodeSearchResponse,
  ResumeOnlineRecordRequest,
  SetWhiteboardPushCallbackKeyResponse,
  DescribeRoomListRequest,
  SetWhiteboardPushCallbackResponse,
  ApplyTiwTrialResponse,
  OmittedDuration,
  PPTErrSlide,
  PauseOnlineRecordRequest,
  DescribeRunningTasksResponse,
  DescribeApplicationUsageResponse,
  DescribeAPIServiceResponse,
  TimeValue,
  DescribeWarningCallbackResponse,
  RecordTaskResult,
  DescribeWhiteboardBucketConfigRequest,
  DescribeUsageSummaryResponse,
  DescribeRunningTasksRequest,
  DescribeApplicationUsageRequest,
  SnapshotResult,
  SetWarningCallbackResponse,
  SetVideoGenerationTaskCallbackKeyResponse,
  DescribeVideoGenerationTaskResponse,
  SetPPTCheckCallbackKeyRequest,
  DataItem,
  DescribeVideoGenerationTaskRequest,
  DescribeWhiteboardPushCallbackRequest,
  DescribeOnlineRecordResponse,
  DescribeTranscodeRequest,
  DescribeBoardSDKLogResponse,
  SetOnlineRecordCallbackResponse,
  DescribePPTCheckCallbackResponse,
  DescribeTranscodeCallbackResponse,
  DescribeUserListResponse,
  ModifyAutoRenewFlagResponse,
  DescribeApplicationInfosResponse,
  DescribeTIWDailyUsageRequest,
  DescribeWhiteboardBucketConfigResponse,
  MixStream,
  DescribeBoardSDKLogRequest,
  DescribeVideoGenerationTaskCallbackRequest,
  SetVideoGenerationTaskCallbackRequest,
  SetWhiteboardPushCallbackKeyRequest,
  DescribeTranscodeSearchRequest,
  ApplyTiwTrialRequest,
  AuthParam,
  Detail,
  StartWhiteboardPushRequest,
  SetWarningCallbackRequest,
  DescribeVideoGenerationTaskCallbackResponse,
  WhiteboardPushTaskSearchResult,
  ModifyWhiteboardApplicationConfigRequest,
  WhiteboardPushBackupParam,
  DescribeSnapshotTaskRequest,
  StartOnlineRecordRequest,
  DescribeUserStatusRequest,
  DescribeOnlineRecordCallbackRequest,
  RecordTaskSearchResult,
  DescribeWarningCallbackRequest,
  SetTranscodeCallbackResponse,
  StopOnlineRecordRequest,
  SetVideoGenerationTaskCallbackResponse,
  ApplicationItem,
  DescribeTranscodeByUrlResponse,
  CreatePPTCheckTaskRequest,
  VideoInfo,
  SetWhiteboardPushCallbackRequest,
  DescribeTIWDailyUsageResponse,
  Concat,
  DescribeWhiteboardApplicationConfigRequest,
  RoomUsageDataItem,
  SnapshotCOS,
  CreateVideoGenerationTaskResponse,
  DescribePPTCheckCallbackRequest,
  Whiteboard,
  PauseOnlineRecordResponse,
  ModifyWhiteboardApplicationConfigResponse,
  CreateSnapshotTaskRequest,
  DescribeTranscodeResponse,
  SetOnlineRecordCallbackKeyRequest,
  ModifyApplicationRequest,
  DescribeOnlineRecordCallbackResponse,
  RecordControl,
  DescribeQualityMetricsResponse,
  TranscodeTaskResult,
  DescribeIMApplicationsResponse,
  SetOnlineRecordCallbackRequest,
  DescribeUserListRequest,
  DescribeUserResourcesRequest,
  SetPPTCheckCallbackResponse,
  DescribeOnlineRecordRequest,
  StopWhiteboardPushResponse,
  DescribeTranscodeByUrlRequest,
  ExcelParam,
  DescribePostpaidUsageRequest,
  LayoutParams,
  StreamControl,
  DescribeRoomListResponse,
  DescribeIMApplicationsRequest,
  ModifyAutoRenewFlagRequest,
  PPTErr,
  DescribeSnapshotTaskResponse,
  DescribeUserStatusResponse,
  StreamLayout,
  DescribeTIWRoomDailyUsageResponse,
  DescribeWhiteboardPushCallbackResponse,
  DescribeApplicationInfosRequest,
  DescribeWhiteboardPushSearchRequest,
  RunningTaskItem,
  SetTranscodeCallbackKeyResponse,
  SetPPTCheckCallbackRequest,
  DescribeWhiteboardPushResponse,
  StartOnlineRecordResponse,
  Tag,
  DescribeUsageSummaryRequest,
  SnapshotWhiteboard,
  CreatePPTCheckTaskResponse,
  ModifyWhiteboardBucketConfigResponse,
  CreateTranscodeRequest,
  SetTranscodeCallbackKeyRequest,
  SetTranscodeCallbackRequest,
  DescribePostpaidUsageResponse,
  StartWhiteboardPushResponse,
  WhiteboardApplicationConfig,
  TranscodeTaskSearchResult,
  CreateApplicationResponse,
  StopWhiteboardPushRequest,
  DescribeRecordSearchRequest,
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
   * 查询文档转码，实时录制存储桶的配置
   */
  async DescribeWhiteboardBucketConfig(
    req: DescribeWhiteboardBucketConfigRequest,
    cb?: (error: string, rep: DescribeWhiteboardBucketConfigResponse) => void
  ): Promise<DescribeWhiteboardBucketConfigResponse> {
    return this.request("DescribeWhiteboardBucketConfig", req, cb)
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
   * 查询客户端白板日志
   */
  async DescribeBoardSDKLog(
    req: DescribeBoardSDKLogRequest,
    cb?: (error: string, rep: DescribeBoardSDKLogResponse) => void
  ): Promise<DescribeBoardSDKLogResponse> {
    return this.request("DescribeBoardSDKLog", req, cb)
  }

  /**
   * 查询白板用户列表
   */
  async DescribeUserList(
    req: DescribeUserListRequest,
    cb?: (error: string, rep: DescribeUserListResponse) => void
  ): Promise<DescribeUserListResponse> {
    return this.request("DescribeUserList", req, cb)
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
   * 根据房间号搜索实时录制任务
   */
  async DescribeRecordSearch(
    req?: DescribeRecordSearchRequest,
    cb?: (error: string, rep: DescribeRecordSearchResponse) => void
  ): Promise<DescribeRecordSearchResponse> {
    return this.request("DescribeRecordSearch", req, cb)
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
   * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  async SetOnlineRecordCallbackKey(
    req: SetOnlineRecordCallbackKeyRequest,
    cb?: (error: string, rep: SetOnlineRecordCallbackKeyResponse) => void
  ): Promise<SetOnlineRecordCallbackKeyResponse> {
    return this.request("SetOnlineRecordCallbackKey", req, cb)
  }

  /**
   * 查询白板应用任务相关的配置，包括存储桶、回调等
   */
  async DescribeWhiteboardApplicationConfig(
    req: DescribeWhiteboardApplicationConfigRequest,
    cb?: (error: string, rep: DescribeWhiteboardApplicationConfigResponse) => void
  ): Promise<DescribeWhiteboardApplicationConfigResponse> {
    return this.request("DescribeWhiteboardApplicationConfig", req, cb)
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
   * 申请互动白板试用，默认15天
   */
  async ApplyTiwTrial(
    req?: ApplyTiwTrialRequest,
    cb?: (error: string, rep: ApplyTiwTrialResponse) => void
  ): Promise<ApplyTiwTrialResponse> {
    return this.request("ApplyTiwTrial", req, cb)
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
     * 查询互动白板房间维度每天计费用量。
1. 单次查询统计区间最多不能超过31天。
2. 由于统计延迟等原因，暂时不支持查询当天数据，建议在次日上午7点以后再来查询前一天的用量，例如在10月27日上午7点后，再来查询到10月26日整天的用量

     */
  async DescribeTIWRoomDailyUsage(
    req: DescribeTIWRoomDailyUsageRequest,
    cb?: (error: string, rep: DescribeTIWRoomDailyUsageResponse) => void
  ): Promise<DescribeTIWRoomDailyUsageResponse> {
    return this.request("DescribeTIWRoomDailyUsage", req, cb)
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
   * 通过文档URL查询转码任务，返回最近一次的转码任务状态
   */
  async DescribeTranscodeByUrl(
    req: DescribeTranscodeByUrlRequest,
    cb?: (error: string, rep: DescribeTranscodeByUrlResponse) => void
  ): Promise<DescribeTranscodeByUrlResponse> {
    return this.request("DescribeTranscodeByUrl", req, cb)
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
   * 修改白板应用
   */
  async ModifyApplication(
    req: ModifyApplicationRequest,
    cb?: (error: string, rep: ModifyApplicationResponse) => void
  ): Promise<ModifyApplicationResponse> {
    return this.request("ModifyApplication", req, cb)
  }

  /**
   * 修改白板应用任务相关的配置，包括存储桶、回调等
   */
  async ModifyWhiteboardApplicationConfig(
    req: ModifyWhiteboardApplicationConfigRequest,
    cb?: (error: string, rep: ModifyWhiteboardApplicationConfigResponse) => void
  ): Promise<ModifyWhiteboardApplicationConfigResponse> {
    return this.request("ModifyWhiteboardApplicationConfig", req, cb)
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
   * 设置白板月功能费自动续费
   */
  async ModifyAutoRenewFlag(
    req: ModifyAutoRenewFlagRequest,
    cb?: (error: string, rep: ModifyAutoRenewFlagResponse) => void
  ): Promise<ModifyAutoRenewFlagResponse> {
    return this.request("ModifyAutoRenewFlag", req, cb)
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
   * 查询文档转码回调地址
   */
  async DescribeTranscodeCallback(
    req: DescribeTranscodeCallbackRequest,
    cb?: (error: string, rep: DescribeTranscodeCallbackResponse) => void
  ): Promise<DescribeTranscodeCallbackResponse> {
    return this.request("DescribeTranscodeCallback", req, cb)
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
   * 通过服务角色调用其他云产品API接口获取信息
   */
  async DescribeAPIService(
    req: DescribeAPIServiceRequest,
    cb?: (error: string, rep: DescribeAPIServiceResponse) => void
  ): Promise<DescribeAPIServiceResponse> {
    return this.request("DescribeAPIService", req, cb)
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
   * 查询白板应用详情
   */
  async DescribeApplicationInfos(
    req?: DescribeApplicationInfosRequest,
    cb?: (error: string, rep: DescribeApplicationInfosResponse) => void
  ): Promise<DescribeApplicationInfosResponse> {
    return this.request("DescribeApplicationInfos", req, cb)
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
   * 查询用户后付费用量
   */
  async DescribePostpaidUsage(
    req: DescribePostpaidUsageRequest,
    cb?: (error: string, rep: DescribePostpaidUsageResponse) => void
  ): Promise<DescribePostpaidUsageResponse> {
    return this.request("DescribePostpaidUsage", req, cb)
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
   * 按文档名称搜索转码任务
   */
  async DescribeTranscodeSearch(
    req?: DescribeTranscodeSearchRequest,
    cb?: (error: string, rep: DescribeTranscodeSearchResponse) => void
  ): Promise<DescribeTranscodeSearchResponse> {
    return this.request("DescribeTranscodeSearch", req, cb)
  }

  /**
   * 查询客户资源列表
   */
  async DescribeUserResources(
    req?: DescribeUserResourcesRequest,
    cb?: (error: string, rep: DescribeUserResourcesResponse) => void
  ): Promise<DescribeUserResourcesResponse> {
    return this.request("DescribeUserResources", req, cb)
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
   * 创建视频生成任务
   */
  async CreateVideoGenerationTask(
    req: CreateVideoGenerationTaskRequest,
    cb?: (error: string, rep: CreateVideoGenerationTaskResponse) => void
  ): Promise<CreateVideoGenerationTaskResponse> {
    return this.request("CreateVideoGenerationTask", req, cb)
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
   * 停止实时录制
   */
  async StopOnlineRecord(
    req: StopOnlineRecordRequest,
    cb?: (error: string, rep: StopOnlineRecordResponse) => void
  ): Promise<StopOnlineRecordResponse> {
    return this.request("StopOnlineRecord", req, cb)
  }

  /**
   * 查询指定时间段内子产品的用量汇总
   */
  async DescribeUsageSummary(
    req: DescribeUsageSummaryRequest,
    cb?: (error: string, rep: DescribeUsageSummaryResponse) => void
  ): Promise<DescribeUsageSummaryResponse> {
    return this.request("DescribeUsageSummary", req, cb)
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
   * 根据房间号搜索白板推流任务
   */
  async DescribeWhiteboardPushSearch(
    req?: DescribeWhiteboardPushSearchRequest,
    cb?: (error: string, rep: DescribeWhiteboardPushSearchResponse) => void
  ): Promise<DescribeWhiteboardPushSearchResponse> {
    return this.request("DescribeWhiteboardPushSearch", req, cb)
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
   * 创建白板应用
   */
  async CreateApplication(
    req: CreateApplicationRequest,
    cb?: (error: string, rep: CreateApplicationResponse) => void
  ): Promise<CreateApplicationResponse> {
    return this.request("CreateApplication", req, cb)
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
   * 查询可用于创建白板应用的IM应用列表
   */
  async DescribeIMApplications(
    req?: DescribeIMApplicationsRequest,
    cb?: (error: string, rep: DescribeIMApplicationsResponse) => void
  ): Promise<DescribeIMApplicationsResponse> {
    return this.request("DescribeIMApplications", req, cb)
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
   * 发起一个白板推流任务
   */
  async StartWhiteboardPush(
    req: StartWhiteboardPushRequest,
    cb?: (error: string, rep: StartWhiteboardPushResponse) => void
  ): Promise<StartWhiteboardPushResponse> {
    return this.request("StartWhiteboardPush", req, cb)
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
   * 查询互动白板各个子产品用量
   */
  async DescribeApplicationUsage(
    req: DescribeApplicationUsageRequest,
    cb?: (error: string, rep: DescribeApplicationUsageResponse) => void
  ): Promise<DescribeApplicationUsageResponse> {
    return this.request("DescribeApplicationUsage", req, cb)
  }

  /**
   * 查询白板房间列表
   */
  async DescribeRoomList(
    req: DescribeRoomListRequest,
    cb?: (error: string, rep: DescribeRoomListResponse) => void
  ): Promise<DescribeRoomListResponse> {
    return this.request("DescribeRoomList", req, cb)
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
     * 查询互动白板用户详情，包括是否开通了互动白板，当前互动白板服务有效期等信息

     */
  async DescribeUserStatus(
    req?: DescribeUserStatusRequest,
    cb?: (error: string, rep: DescribeUserStatusResponse) => void
  ): Promise<DescribeUserStatusResponse> {
    return this.request("DescribeUserStatus", req, cb)
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

  /**
   * 设置文档转码，实时录制存储桶的配置
   */
  async ModifyWhiteboardBucketConfig(
    req: ModifyWhiteboardBucketConfigRequest,
    cb?: (error: string, rep: ModifyWhiteboardBucketConfigResponse) => void
  ): Promise<ModifyWhiteboardBucketConfigResponse> {
    return this.request("ModifyWhiteboardBucketConfig", req, cb)
  }
}
