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

/**
 * 混流画布参数
 */
export interface Canvas {
  /**
   * 混流画布宽高配置
   */
  LayoutParams: LayoutParams
  /**
   * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
   */
  BackgroundColor?: string
}

/**
 * StopOnlineRecord返回参数结构体
 */
export interface StopOnlineRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetVideoGenerationTaskCallbackKey请求参数结构体
 */
export interface SetVideoGenerationTaskCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
  /**
   * 设置视频生成回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥
   */
  CallbackKey: string
}

/**
 * DescribeTIWRoomDailyUsage请求参数结构体
 */
export interface DescribeTIWRoomDailyUsageRequest {
  /**
   * 互动白板应用SdkAppId
   */
  SdkAppId: number
  /**
   * 需要查询的子产品用量，支持传入以下值
- sp_tiw_board: 互动白板时长，单位为分钟
- sp_tiw_ric: 实时录制时长，单位分钟
   */
  SubProduct: string
  /**
   * 开始时间，格式YYYY-MM-DD，查询结果里包括该天数据
   */
  StartTime: string
  /**
   * 结束时间，格式YYYY-MM-DD，查询结果里包括该天数据，单次查询统计区间最多不能超过31天。
   */
  EndTime: string
  /**
   * 需要查询的房间ID列表，不填默认查询全部房间
   */
  RoomIDs?: Array<number | bigint>
  /**
   * 查询偏移量，默认为0
   */
  Offset?: number
  /**
   * 每次查询返回条目限制，默认为20
   */
  Limit?: number
}

/**
 * DescribeWhiteboardPush请求参数结构体
 */
export interface DescribeWhiteboardPushRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 白板推流任务Id
   */
  TaskId: string
}

/**
 * DescribeWhiteboardPushSearch返回参数结构体
 */
export interface DescribeWhiteboardPushSearchResponse {
  /**
   * 推流任务搜索结果集合
   */
  WhiteboardPushTaskSet: Array<WhiteboardPushTaskSearchResult>
  /**
   * 推流总任务数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeOnlineRecord返回参数结构体
 */
export interface ResumeOnlineRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 互动白板用量信息
 */
export interface UsageDataItem {
  /**
   * 日期，格式为YYYY-MM-DD
   */
  Time: string
  /**
   * 白板应用SDKAppID
   */
  SdkAppId: number
  /**
   * 互动白板子产品，请求参数传入的一致
- sp_tiw_board: 互动白板时长
- sp_tiw_dt: 动态转码页数
- sp_tiw_st: 静态转码页数
- sp_tiw_ric: 实时录制时长
   */
  SubProduct: string
  /**
   * 用量值
- 静态转码、动态转码单位为页
- 白板时长、实时录制时长单位为分钟
   */
  Value: number
}

/**
 * DescribeWhiteboardApplicationConfig返回参数结构体
 */
export interface DescribeWhiteboardApplicationConfigResponse {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 白板应用任务相关配置
   */
  Configs: Array<WhiteboardApplicationConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 白板推流任务结果
 */
export interface WhiteboardPushResult {
  /**
   * AUTO - 自动停止推流， USER_CALL - 用户主动调用停止推流
   */
  FinishReason: string
  /**
   * 异常数
   */
  ExceptionCnt: number
  /**
   * 房间号
   */
  RoomId: number
  /**
   * IM群组ID
   */
  GroupId: string
  /**
   * 推流真实开始时间
   */
  PushStartTime: number
  /**
   * 推流结束时间
   */
  PushStopTime: number
  /**
   * 白板推流首帧对应的IM时间戳，可用于录制回放时IM聊天消息与白板推流视频进行同步对时。
   */
  IMSyncTime: number
  /**
   * 任务失败错误码
   */
  ErrorCode: number
  /**
   * 错误信息
   */
  ErrorMsg: string
}

/**
 * CreateSnapshotTask返回参数结构体
 */
export interface CreateSnapshotTaskResponse {
  /**
   * 白板板书生成任务ID，只有任务创建成功的时候才会返回此字段
   */
  TaskID: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyApplication返回参数结构体
 */
export interface ModifyApplicationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetPPTCheckCallbackKey返回参数结构体
 */
export interface SetPPTCheckCallbackKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTranscode返回参数结构体
 */
export interface CreateTranscodeResponse {
  /**
   * 文档转码任务的唯一标识Id，用于查询该任务的进度以及转码结果
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserResources返回参数结构体
 */
export interface DescribeUserResourcesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志查询里返回的白板用户数据
 */
export interface UserListItem {
  /**
   * 房间内的用户ID
   */
  UserId: string
  /**
   * 用户在查询时间段内最早出现的时间，Unix时间戳，单位毫秒
   */
  StartTime: number
  /**
   * 用户在查询时间段内最晚出现的时间，Unix时间戳，单位毫秒
   */
  EndTime: number
}

/**
 * DescribePPTCheck返回参数结构体
 */
export interface DescribePPTCheckResponse {
  /**
   * 任务的唯一标识Id
   */
  TaskId?: string
  /**
   * PPT文件是否正常
   */
  IsOK?: boolean
  /**
   * 修复后的PPT URL，只有创建任务时参数AutoHandleUnsupportedElement=true，才返回此参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultUrl?: string
  /**
   * 错误PPT页面列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Slides?: Array<PPTErrSlide>
  /**
   * 任务的当前状态 - QUEUED: 正在排队等待 - PROCESSING: 执行中 - FINISHED: 执行完成
   */
  Status?: string
  /**
   * 当前进度,取值范围为0~100
   */
  Progress?: number
  /**
   * 错误列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errs?: Array<PPTErr>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义混流布局参数
 */
export interface CustomLayout {
  /**
   * 混流画布参数
   */
  Canvas: Canvas
  /**
   * 流布局参数，每路流的布局不能超出画布区域
   */
  InputStreamList: Array<StreamLayout>
}

/**
 * 实时录制中出现的用户视频流断流次数统计
 */
export interface Interrupt {
  /**
   * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId: string
  /**
   * 视频流断流次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count: number
}

/**
 * CreateApplication请求参数结构体
 */
export interface CreateApplicationRequest {
  /**
   * 应用SdkAppId
   */
  SdkAppId: number
  /**
   * App名字
   */
  AppName?: string
  /**
   * 创建IM应用需要的SKey
   */
  SKey?: string
  /**
   * 创建IM应用需要的TinyId
   */
  TinyId?: string
  /**
   * 需要绑定的标签列表
   */
  TagList?: Array<Tag>
}

/**
 * 日志查询里返回的白板房间数据
 */
export interface RoomListItem {
  /**
   * 房间ID
   */
  RoomId: string
  /**
   * 房间在查询时间段内最早出现的时间，Unix时间戳，单位毫秒
   */
  StartTime: number
  /**
   * 房间在查询时间段内最晚出现的时间，Unix时间戳，单位毫秒
   */
  EndTime: number
  /**
   * 房间里成员数
   */
  UserNumber: number
}

/**
 * ModifyWhiteboardBucketConfig请求参数结构体
 */
export interface ModifyWhiteboardBucketConfigRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 需要查询的任务类型
recording: 实时录制
transcode: 文档转码
   */
  TaskType: string
  /**
   * COS存储桶名字
   */
  BucketName: string
  /**
   * COS存储桶地域
   */
  BucketLocation: string
  /**
   * 存储桶里资源前缀
   */
  BucketPrefix: string
  /**
   * 返回Url域名
   */
  ResultDomain: string
}

/**
 * SetOnlineRecordCallbackKey返回参数结构体
 */
export interface SetOnlineRecordCallbackKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordSearch返回参数结构体
 */
export interface DescribeRecordSearchResponse {
  /**
   * 录制任务搜索结果集合
   */
  RecordTaskSet: Array<RecordTaskSearchResult>
  /**
   * 录制总任务数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAPIService请求参数结构体
 */
export interface DescribeAPIServiceRequest {
  /**
   * 目前支持的Service为cos:GetService，cdn:DescribeDomainsConfig
   */
  Service: string
  /**
   * JSON格式的请求参数
   */
  Data?: string
}

/**
 * DescribeQualityMetrics请求参数结构体
 */
export interface DescribeQualityMetricsRequest {
  /**
   * 白板应用的SdkAppId
   */
  SdkAppId: number
  /**
   * 开始时间，Unix时间戳，单位秒，时间跨度不能超过7天
   */
  StartTime: number
  /**
   * 结束时间，Unix时间戳，单位秒，时间跨度不能超过7天
   */
  EndTime: number
  /**
   * 查询的指标，目前支持以下值
  - image_load_total_count: 图片加载总数（单位，次）
  - image_load_fail_count: 图片加载失败数量（单位，次）
  - image_load_success_rate: 图片加载成功率（百分比）
  - ppt_load_total_count: PPT加载总数（单位，次）
  - ppt_load_fail_count: PPT加载失败总数（单位，次）
  - ppt_load_success_rate: PPT加载成功率（单位，百分比）
  - verify_sdk_total_count: 白板鉴权总次数（单位，次）
  - verify_sdk_fail_count: 白板鉴权失败次数（单位，次）
  - verify_sdk_success_rate: 白板鉴权成功率（单位，百分比）
  - verify_sdk_in_one_second_rate: 白板鉴权秒开率（单位，百分比）
  - verify_sdk_cost_avg: 白板鉴权耗时平均时间（单位，毫秒）
   */
  Metric: string
  /**
   * 聚合的时间维度，目前只支持1小时，输入值为"1h"
   */
  Interval?: string
}

/**
 * CreateVideoGenerationTask请求参数结构体
 */
export interface CreateVideoGenerationTaskRequest {
  /**
   * 录制任务的TaskId
   */
  OnlineRecordTaskId: string
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 视频生成的白板参数，例如白板宽高等。

此参数与开始录制接口提供的Whiteboard参数互斥，在本接口与开始录制接口都提供了Whiteboard参数时，优先使用本接口指定的Whiteboard参数进行视频生成，否则使用开始录制接口提供的Whiteboard参数进行视频生成。
   */
  Whiteboard?: Whiteboard
  /**
   * 视频拼接参数

此参数与开始录制接口提供的Concat参数互斥，在本接口与开始录制接口都提供了Concat参数时，优先使用本接口指定的Concat参数进行视频拼接，否则使用开始录制接口提供的Concat参数进行视频拼接。
   */
  Concat?: Concat
  /**
   * 视频生成混流参数

此参数与开始录制接口提供的MixStream参数互斥，在本接口与开始录制接口都提供了MixStream参数时，优先使用本接口指定的MixStream参数进行视频混流，否则使用开始录制接口提供的MixStream参数进行视频拼混流。
   */
  MixStream?: MixStream
  /**
   * 视频生成控制参数，用于更精细地指定需要生成哪些流，某一路流是否禁用音频，是否只录制小画面等

此参数与开始录制接口提供的RecordControl参数互斥，在本接口与开始录制接口都提供了RecordControl参数时，优先使用本接口指定的RecordControl参数进行视频生成控制，否则使用开始录制接口提供的RecordControl参数进行视频拼生成控制。
   */
  RecordControl?: RecordControl
  /**
   * 内部参数
   */
  ExtraData?: string
}

/**
 * DescribeTranscodeCallback请求参数结构体
 */
export interface DescribeTranscodeCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * DescribeTranscodeSearch返回参数结构体
 */
export interface DescribeTranscodeSearchResponse {
  /**
   * 转码任务搜索结果集合
   */
  TranscodeTaskSet: Array<TranscodeTaskSearchResult>
  /**
   * 转码总任务数
   */
  TotalCount: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeOnlineRecord请求参数结构体
 */
export interface ResumeOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 恢复录制的实时录制任务 Id
   */
  TaskId: string
}

/**
 * SetWhiteboardPushCallbackKey返回参数结构体
 */
export interface SetWhiteboardPushCallbackKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRoomList请求参数结构体
 */
export interface DescribeRoomListRequest {
  /**
   * 白板应用的SdkAppId
   */
  SdkAppId: number
  /**
   * 查询时间段，Unix时间戳，单位毫秒，第一个值为开始时间戳，第二个值为结束时间
   */
  TimeRange: Array<number | bigint>
  /**
   * 额外的查询条件
   */
  Query?: string
  /**
   * 返回最大的数据条数，默认1000
   */
  MaxSize?: number
}

/**
 * SetWhiteboardPushCallback返回参数结构体
 */
export interface SetWhiteboardPushCallbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ApplyTiwTrial返回参数结构体
 */
export interface ApplyTiwTrialResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 拼接视频中被忽略的时间段
 */
export interface OmittedDuration {
  /**
   * 录制暂停时间戳对应的视频播放时间(单位: 毫秒)
   */
  VideoTime: number
  /**
   * 录制暂停时间戳(单位: 毫秒)
   */
  PauseTime: number
  /**
   * 录制恢复时间戳(单位: 毫秒)
   */
  ResumeTime: number
}

/**
 * PPT错误页面列表
 */
export interface PPTErrSlide {
  /**
   * 异常元素存在的页面，由页面类型+页码组成，页码类型包括：幻灯片、幻灯片母版、幻灯片布局等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Page?: string
  /**
   * 错误元素列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errs?: Array<PPTErr>
}

/**
 * PauseOnlineRecord请求参数结构体
 */
export interface PauseOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 实时录制任务 Id
   */
  TaskId: string
}

/**
 * DescribeRunningTasks返回参数结构体
 */
export interface DescribeRunningTasksResponse {
  /**
   * 当前正在执行中的任务总数
   */
  Total?: number
  /**
   * 任务信息列表
   */
  Tasks?: Array<RunningTaskItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationUsage返回参数结构体
 */
export interface DescribeApplicationUsageResponse {
  /**
   * 画图所需的用量数据
   */
  Data: Array<DataItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAPIService返回参数结构体
 */
export interface DescribeAPIServiceResponse {
  /**
   * Json格式的响应数据
   */
  ResponseData?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询指标返回的时间序列
 */
export interface TimeValue {
  /**
   * Unix时间戳，单位秒
   */
  Time: number
  /**
   * 查询指标对应当前时间的值
   */
  Value: number
}

/**
 * DescribeWarningCallback返回参数结构体
 */
export interface DescribeWarningCallbackResponse {
  /**
   * 告警事件回调地址，如果未设置回调地址，该字段为空字符串
   */
  Callback?: string
  /**
   * 告警回调鉴权密钥
   */
  CallbackKey?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时录制结果
 */
export interface RecordTaskResult {
  /**
   * AUTO - 自动停止录制， USER_CALL - 用户主动调用停止录制
   */
  FinishReason: string
  /**
   * 异常数
   */
  ExceptionCnt: number
  /**
   * 房间号
   */
  RoomId: number
  /**
   * 分组
   */
  GroupId: string
  /**
   * 录制真实开始时间
   */
  RecordStartTime: number
  /**
   * 录制结束时间
   */
  RecordStopTime: number
  /**
   * 录制总时长
   */
  TotalTime: number
  /**
   * 视频信息列表
   */
  VideoInfos: Array<VideoInfo>
  /**
   * 被忽略的视频时间段
   */
  OmittedDurations: Array<OmittedDuration>
  /**
   * 详情
   */
  Details: string
  /**
   * 任务失败错误码
   */
  ErrorCode: number
  /**
   * 错误信息
   */
  ErrorMsg: string
}

/**
 * DescribeWhiteboardBucketConfig请求参数结构体
 */
export interface DescribeWhiteboardBucketConfigRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 需要查询的任务类型
recording: 实时录制
transcode: 文档转码
   */
  TaskType: string
}

/**
 * DescribeUsageSummary返回参数结构体
 */
export interface DescribeUsageSummaryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRunningTasks请求参数结构体
 */
export interface DescribeRunningTasksRequest {
  /**
   * 应用的SdkAppID
   */
  SdkAppID: number
  /**
   * 指定需要获取的任务类型。
有效取值如下：
- TranscodeH5: 动态转码任务，文档转HTML5页面
- TranscodeJPG: 静态转码任务，文档转图片
- WhiteboardPush: 白板推流任务
- OnlineRecord: 实时录制任务
   */
  TaskType: string
  /**
   * 分页获取时的任务偏移量，默认为0。
   */
  Offset?: number
  /**
   * 每次获取任务列表时最大获取任务数，默认值为100。
有效取值范围：[1, 500]
   */
  Limit?: number
}

/**
 * DescribeApplicationUsage请求参数结构体
 */
export interface DescribeApplicationUsageRequest {
  /**
   * 用量开始时间（包括该时间点）
   */
  BeginTime: string
  /**
   * 用量结束时间（不包括该时间点）
   */
  EndTime: string
  /**
   * 白板子产品名
   */
  SubProduct: string
  /**
   * 时间跨度单位
- MONTHLY：月
- DAILY：天
- MINUTELY：分钟
   */
  TimeLevel: string
  /**
   * 白板应用的SdkAppId
   */
  SdkAppId?: number
  /**
   * true: 返回加权求和后的用量数据
false: 返回原始用量数据
   */
  IsWeighted?: boolean
}

/**
 * 白板板书结果
 */
export interface SnapshotResult {
  /**
   * 任务执行错误码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorCode: string
  /**
   * 任务执行错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMessage: string
  /**
   * 快照生成图片总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 快照图片链接列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Snapshots: Array<string>
}

/**
 * SetWarningCallback返回参数结构体
 */
export interface SetWarningCallbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetVideoGenerationTaskCallbackKey返回参数结构体
 */
export interface SetVideoGenerationTaskCallbackKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoGenerationTask返回参数结构体
 */
export interface DescribeVideoGenerationTaskResponse {
  /**
   * 任务对应的群组Id
   */
  GroupId?: string
  /**
   * 任务对应的房间号
   */
  RoomId?: number
  /**
   * 任务的Id
   */
  TaskId?: string
  /**
   * 已废弃
   */
  Progress?: number
  /**
   * 录制视频生成任务状态
- QUEUED: 正在排队
- PROCESSING: 正在生成视频
- FINISHED: 生成视频结束（成功完成或失败结束，可以通过错误码和错误信息进一步判断）
   */
  Status?: string
  /**
   * 回放视频总时长,单位：毫秒
   */
  TotalTime?: number
  /**
   * 已废弃，请使用`VideoInfoList`参数
   */
  VideoInfos?: VideoInfo
  /**
   * 录制视频生成视频列表
   */
  VideoInfoList?: Array<VideoInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetPPTCheckCallbackKey请求参数结构体
 */
export interface SetPPTCheckCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
  /**
   * 设置回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * 画图数据，Time/Value/Details
 */
export interface DataItem {
  /**
   * 时间
按月格式yyyy-mm
按天格式yyyy-mm-dd
按分钟格式 yyyy-mm-dd HH:MM:SS
   */
  Time: string
  /**
   * 画图所需要的值
   */
  Value: number
  /**
   * 各个具体指标的详情
   */
  Details: Array<Detail>
}

/**
 * DescribeVideoGenerationTask请求参数结构体
 */
export interface DescribeVideoGenerationTaskRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 录制视频生成的任务Id
   */
  TaskId: string
}

/**
 * DescribeWhiteboardPushCallback请求参数结构体
 */
export interface DescribeWhiteboardPushCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * DescribeOnlineRecord返回参数结构体
 */
export interface DescribeOnlineRecordResponse {
  /**
   * 录制结束原因，
- AUTO: 房间内长时间没有音视频上行及白板操作导致自动停止录制
- USER_CALL: 主动调用了停止录制接口
- EXCEPTION: 录制异常结束
- FORCE_STOP: 强制停止录制，一般是因为暂停超过90分钟或者录制总时长超过24小时。
   */
  FinishReason: string
  /**
   * 需要查询结果的录制任务Id
   */
  TaskId: string
  /**
   * 录制任务状态
- PREPARED: 表示录制正在准备中（进房/启动录制服务等操作）
- RECORDING: 表示录制已开始
- PAUSED: 表示录制已暂停
- STOPPED: 表示录制已停止，正在处理并上传视频
- FINISHED: 表示视频处理并上传完成，成功生成录制结果
   */
  Status: string
  /**
   * 房间号
   */
  RoomId: number
  /**
   * 白板的群组 Id
   */
  GroupId: string
  /**
   * 录制用户Id
   */
  RecordUserId: string
  /**
   * 实际开始录制时间，Unix 时间戳，单位秒
   */
  RecordStartTime: number
  /**
   * 实际停止录制时间，Unix 时间戳，单位秒
   */
  RecordStopTime: number
  /**
   * 回放视频总时长（单位：毫秒）
   */
  TotalTime: number
  /**
   * 录制过程中出现异常的次数
   */
  ExceptionCnt: number
  /**
   * 拼接视频中被忽略的时间段，只有开启视频拼接功能的时候，这个参数才是有效的
   */
  OmittedDurations: Array<OmittedDuration>
  /**
   * 录制视频列表
   */
  VideoInfos: Array<VideoInfo>
  /**
   * 回放URL，需配合信令播放器使用。此字段仅适用于`视频生成模式`
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplayUrl: string
  /**
   * 视频流在录制过程中断流次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Interrupts: Array<Interrupt>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTranscode请求参数结构体
 */
export interface DescribeTranscodeRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 文档转码任务的唯一标识Id
   */
  TaskId: string
}

/**
 * DescribeBoardSDKLog返回参数结构体
 */
export interface DescribeBoardSDKLogResponse {
  /**
   * 总共能查到日志条数
   */
  Total: number
  /**
   * 日志详细内容
   */
  Sources: Array<string>
  /**
   * 按时间段聚合后每个时间段的日志条数
   */
  Buckets: Array<string>
  /**
   * 用于递归拉取的上下文Key，下一次请求的时候带上
   */
  Context: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetOnlineRecordCallback返回参数结构体
 */
export interface SetOnlineRecordCallbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePPTCheckCallback返回参数结构体
 */
export interface DescribePPTCheckCallbackResponse {
  /**
   * 回调地址
   */
  Callback?: string
  /**
   * 回调鉴权密钥
   */
  CallbackKey?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTranscodeCallback返回参数结构体
 */
export interface DescribeTranscodeCallbackResponse {
  /**
   * 文档转码回调地址
   */
  Callback: string
  /**
   * 文档转码回调鉴权密钥
   */
  CallbackKey: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserList返回参数结构体
 */
export interface DescribeUserListResponse {
  /**
   * 房间内的用户列表
   */
  UserList: Array<UserListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAutoRenewFlag返回参数结构体
 */
export interface ModifyAutoRenewFlagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationInfos返回参数结构体
 */
export interface DescribeApplicationInfosResponse {
  /**
   * 应用列表
   */
  ApplicationInfos: Array<ApplicationItem>
  /**
   * 是否包含所有的应用，0-不包含，1-包含
   */
  AllOption: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTIWDailyUsage请求参数结构体
 */
export interface DescribeTIWDailyUsageRequest {
  /**
   * 互动白板应用SdkAppId
   */
  SdkAppId: number
  /**
   * 需要查询的子产品用量，支持传入以下值
- sp_tiw_board: 互动白板时长，单位为分钟
- sp_tiw_dt: 动态转码页数，单位页
- sp_tiw_st: 静态转码页数，单位页
- sp_tiw_ric: 实时录制时长，单位分钟

注意：动态转码以1:8的比例计算文档转码页数，静态转码以1:1的比例计算文档转码页数
   */
  SubProduct: string
  /**
   * 开始时间，格式YYYY-MM-DD，查询结果里包括该天数据
   */
  StartTime: string
  /**
   * 结束时间，格式YYYY-MM-DD，查询结果里包括该天数据，单次查询统计区间最多不能超过31天。
   */
  EndTime: string
}

/**
 * DescribeWhiteboardBucketConfig返回参数结构体
 */
export interface DescribeWhiteboardBucketConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 混流配置
 */
export interface MixStream {
  /**
   * 是否开启混流
   */
  Enabled: boolean
  /**
   * 是否禁用音频混流
   */
  DisableAudio?: boolean
  /**
   * 内置混流布局模板ID, 取值 [1, 2], 区别见内置混流布局模板样式示例说明
在没有填Custom字段时候，ModelId是必填的
   */
  ModelId?: number
  /**
   * 老师用户ID
此字段只有在ModelId填了的情况下生效
填写TeacherId的效果是把指定为TeacherId的用户视频流显示在内置模板的第一个小画面中
   */
  TeacherId?: string
  /**
   * 自定义混流布局参数
当此字段存在时，ModelId 及 TeacherId 字段将被忽略
   */
  Custom?: CustomLayout
}

/**
 * DescribeBoardSDKLog请求参数结构体
 */
export interface DescribeBoardSDKLogRequest {
  /**
   * 白板应用的SdkAppId
   */
  SdkAppId: number
  /**
   * 需要查询日志的白板房间号
   */
  RoomId: string
  /**
   * 需要查询日志的用户ID
   */
  UserId: string
  /**
   * 查询时间段，Unix时间戳，单位毫秒，第一个值为开始时间戳，第二个值为结束时间
   */
  TimeRange: Array<number | bigint>
  /**
   * 聚合日志条数查询的桶的时间范围，如5m, 1h, 4h等
   */
  AggregationInterval: string
  /**
   * 额外的查询条件
   */
  Query?: string
  /**
   * 是否按时间升序排列
   */
  Ascending?: boolean
  /**
   * 用于递归拉取的上下文Key，在上一次请求中返回
   */
  Context?: string
}

/**
 * DescribeVideoGenerationTaskCallback请求参数结构体
 */
export interface DescribeVideoGenerationTaskCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * SetVideoGenerationTaskCallback请求参数结构体
 */
export interface SetVideoGenerationTaskCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 课后录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头
   */
  Callback: string
}

/**
 * SetWhiteboardPushCallbackKey请求参数结构体
 */
export interface SetWhiteboardPushCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
  /**
   * 设置白板推流回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥。回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * DescribeTranscodeSearch请求参数结构体
 */
export type DescribeTranscodeSearchRequest = null

/**
 * ApplyTiwTrial请求参数结构体
 */
export type ApplyTiwTrialRequest = null

/**
 * 鉴权参数
 */
export interface AuthParam {
  /**
   * 应用SdkAppId
   */
  SdkAppId: number
  /**
   * 用户ID
   */
  UserId: string
  /**
   * 用户ID对应的签名
   */
  UserSig: string
}

/**
 * 计费用量数据里，带不同指标Tag的详情
 */
export interface Detail {
  /**
   * 用量指标
   */
  TagName: string
  /**
   * 用量权重
   */
  Weight: number
  /**
   * 用量的值
   */
  Value: number
}

/**
 * StartWhiteboardPush请求参数结构体
 */
export interface StartWhiteboardPushRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 需要推流的白板房间号，取值范围: (1, 4294967295)。

1. 在没有指定`GroupId`的情况下，白板推流默认以`RoomId`的字符串表达形式作为IM群组ID（比如RoomId为1234，则IM群组ID为"1234"），并加群进行信令同步，请在开始推流前确保相应IM群组已创建完成，否则会导致推流失败。
2. 在没有指定`TRTCRoomId`和`TRTCRoomIdStr`的情况下，默认会以`RoomId`作为白板流进行推流的TRTC房间号。
   */
  RoomId: number
  /**
   * 用于白板推流服务进入白板房间的用户ID。在没有额外指定`IMAuthParam`和`TRTCAuthParam`的情况下，这个用户ID同时会用于IM登录、IM加群、TRTC进房推流等操作。
用户ID最大长度不能大于60个字节，该用户ID必须是一个单独的未同时在其他地方使用的用户ID，白板推流服务使用这个用户ID进入房间进行白板音视频推流，若该用户ID和其他地方同时在使用的用户ID重复，会导致白板推流服务与其他使用场景帐号互踢，影响正常推流。
   */
  PushUserId: string
  /**
   * 与`PushUserId`对应的IM签名(usersig)。
   */
  PushUserSig: string
  /**
   * 白板参数，例如白板宽高、背景颜色等
   */
  Whiteboard?: Whiteboard
  /**
   * 自动停止推流超时时间，单位秒，取值范围[300, 259200], 默认值为1800秒。

当白板超过设定时间没有操作的时候，白板推流服务会自动停止白板推流。
   */
  AutoStopTimeout?: number
  /**
   * 对主白板推流任务进行操作时，是否同时同步操作备份任务
   */
  AutoManageBackup?: boolean
  /**
   * 备份白板推流相关参数。

指定了备份参数的情况下，白板推流服务会在房间内新增一路白板画面视频流，即同一个房间内会有两路白板画面推流。
   */
  Backup?: WhiteboardPushBackupParam
  /**
   * TRTC高级权限控制参数，如果在实时音视频开启了高级权限控制功能，必须提供PrivateMapKey才能保证正常推流。
   */
  PrivateMapKey?: string
  /**
   * 白板推流视频帧率，取值范围[0, 30]，默认20fps
   */
  VideoFPS?: number
  /**
   * 白板推流码率， 取值范围[0, 2000]，默认1200kbps。

这里的码率设置是一个参考值，实际推流的时候使用的是动态码率，所以真实码率不会固定为指定值，会在指定值附近波动。
   */
  VideoBitrate?: number
  /**
   * 在实时音视频云端录制模式选择为 `指定用户录制` 模式的时候是否自动录制白板推流。

默认在实时音视频的云端录制模式选择为 `指定用户录制` 模式的情况下，不会自动进行白板推流录制，如果希望进行白板推流录制，请将此参数设置为true。

如果实时音视频的云端录制模式选择为 `全局自动录制` 模式，可忽略此参数。
   */
  AutoRecord?: boolean
  /**
   * 指定白板推流这路流在音视频云端录制中的RecordID，指定的RecordID会用于填充实时音视频云端录制完成后的回调消息中的 "userdefinerecordid" 字段内容，便于您更方便的识别录制回调，以及在点播媒体资源管理中查找相应的录制视频文件。

限制长度为64字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符。

此字段设置后，不管`AutoRecord`字段取值如何，都将自动进行白板推流录制。

默认RecordId生成规则如下：
urlencode(SdkAppID_RoomID_PushUserID)

例如：
SdkAppID = 12345678，RoomID = 12345，PushUserID = push_user_1
那么：RecordId = 12345678_12345_push_user_1
   */
  UserDefinedRecordId?: string
  /**
   * 在实时音视频旁路推流模式选择为`指定用户旁路`模式的时候，是否自动旁路白板推流。

默认在实时音视频的旁路推流模式选择为 `指定用户旁路` 模式的情况下，不会自动旁路白板推流，如果希望旁路白板推流，请将此参数设置为true。

如果实时音视频的旁路推流模式选择为 `全局自动旁路` 模式，可忽略此参数。
   */
  AutoPublish?: boolean
  /**
   * 指定实时音视频在旁路白板推流这路流时的StreamID，设置之后，您就可以在腾讯云直播 CDN 上通过标准直播方案（FLV或HLS）播放该用户的音视频流。

限制长度为64字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符。

此字段设置后，不管`AutoPublish`字段取值如何，都将自动旁路白板推流。

默认StreamID生成规则如下：
urlencode(SdkAppID_RoomID_PushUserID_main)

例如：
SdkAppID = 12345678，RoomID = 12345，PushUserID = push_user_1
那么：StreamID = 12345678_12345_push_user_1_main
   */
  UserDefinedStreamId?: string
  /**
   * 内部参数，不需要关注此参数
   */
  ExtraData?: string
  /**
   * TRTC数字类型房间号，取值范围: (1, 4294967295)。

在同时指定了`RoomId`与`TRTCRoomId`的情况下，优先使用`TRTCRoomId`作为白板流进行推流的TRTC房间号。

当指定了`TRTCRoomIdStr`的情况下，此字段将被忽略。
   */
  TRTCRoomId?: number
  /**
   * TRTC字符串类型房间号。

在指定了`TRTCRoomIdStr`的情况下，会优先使用`TRTCRoomIdStr`作为白板流进行推流的TRTC房间号。
   */
  TRTCRoomIdStr?: string
  /**
   * IM鉴权信息参数，用于IM鉴权。
当白板信令所使用的IM应用与白板应用的SdkAppId不一致时，可以通过此参数提供对应IM应用鉴权信息。

如果提供了此参数，白板推流服务会优先使用此参数指定的SdkAppId作为白板信令的传输通道，否则使用公共参数中的SdkAppId作为白板信令的传输通道。
   */
  IMAuthParam?: AuthParam
  /**
   * TRTC鉴权信息参数，用于TRTC进房推流鉴权。
当需要推流到的TRTC房间所对应的TRTC应用与白板应用的SdkAppId不一致时，可以通过此参数提供对应的TRTC应用鉴权信息。

如果提供了此参数，白板推流服务会优先使用此参数指定的SdkAppId作为白板推流的目标TRTC应用，否则使用公共参数中的SdkAppId作为白板推流的目标TRTC应用。
   */
  TRTCAuthParam?: AuthParam
  /**
   * 指定白板推流时推流用户进TRTC房间的进房模式。默认为 TRTCAppSceneVideoCall

TRTCAppSceneVideoCall - 视频通话场景，即绝大多数时间都是两人或两人以上视频通话的场景，内部编码器和网络协议优化侧重流畅性，降低通话延迟和卡顿率。
TRTCAppSceneLIVE - 直播场景，即绝大多数时间都是一人直播，偶尔有多人视频互动的场景，内部编码器和网络协议优化侧重性能和兼容性，性能和清晰度表现更佳。
   */
  TRTCEnterRoomMode?: string
  /**
   * 白板进行信令同步的 IM 群组 ID。
在没有指定`GroupId`的情况下，白板推流服务将使用 `RoomId` 的字符串形式作为同步白板信令的IM群组ID。
在指定了`GroupId`的情况下，白板推流将优先`GroupId`作为同步白板信令的群组ID。请在开始推流前确保指定的IM群组已创建完成，否则会导致推流失败。
   */
  GroupId?: string
}

/**
 * SetWarningCallback请求参数结构体
 */
export interface SetWarningCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 告警回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持http或https协议，即回调地址以http://或https://开头。
回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/90112
   */
  Callback: string
  /**
   * 设置告警回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * DescribeVideoGenerationTaskCallback返回参数结构体
 */
export interface DescribeVideoGenerationTaskCallbackResponse {
  /**
   * 录制视频生成回调地址
   */
  Callback?: string
  /**
   * 录制视频生成回调鉴权密钥
   */
  CallbackKey?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时录制任务搜索结果
 */
export interface WhiteboardPushTaskSearchResult {
  /**
   * 任务唯一ID
   */
  TaskId: string
  /**
   * 白板推流任务状态
- PREPARED: 推流在准备阶段
- PUSHING: 正在推流
- STOPPED：推流已停止
   */
  Status: string
  /**
   * 白板推流房间号
   */
  RoomId: number
  /**
   * 任务创建时间
   */
  CreateTime: string
  /**
   * 用户应用SdkAppId
   */
  SdkAppId: number
  /**
   * 白板推流结果
   */
  Result: WhiteboardPushResult
  /**
   * 白板推流用户ID
   */
  PushUserId: string
}

/**
 * ModifyWhiteboardApplicationConfig请求参数结构体
 */
export interface ModifyWhiteboardApplicationConfigRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 白板应用任务相关配置
   */
  Configs: Array<WhiteboardApplicationConfig>
}

/**
 * 白板推流备份相关请求参数
 */
export interface WhiteboardPushBackupParam {
  /**
   * 用于白板推流服务进房的用户ID，
该ID必须是一个单独的未在SDK中使用的ID，白板推流服务将使用这个用户ID进入房间进行白板推流，若该ID和SDK中使用的ID重复，会导致SDK和录制服务互踢，影响正常推流。
   */
  PushUserId: string
  /**
   * 与PushUserId对应的签名
   */
  PushUserSig: string
}

/**
 * DescribeSnapshotTask请求参数结构体
 */
export interface DescribeSnapshotTaskRequest {
  /**
   * 查询任务ID
   */
  TaskID: string
  /**
   * 任务SdkAppId
   */
  SdkAppId: number
}

/**
 * StartOnlineRecord请求参数结构体
 */
export interface StartOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 需要录制的白板房间号，取值范围: (1, 4294967295)。

1. 在没有指定`GroupId`的情况下，实时录制默认以`RoomId`的字符串表达形式作为同步白板信令的IM群组ID（比如`RoomId`为1234，则IM群组ID为"1234"），并加群进行信令同步，请在开始录制前确保相应IM群组已创建完成，否则会导致录制失败。
2. 在没有指定`TRTCRoomId`和`TRTCRoomIdStr`的情况下，默认会以`RoomId`作为TRTC房间号进房拉流进行录制。
   */
  RoomId: number
  /**
   * 用于录制服务进房的用户ID，最大长度不能大于60个字节，格式为`tic_record_user_${RoomId}_${Random}`，其中 `${RoomId} `与录制房间号对应，`${Random}`为一个随机字符串。
该ID必须是一个单独的未在SDK中使用的ID，录制服务使用这个用户ID进入房间进行音视频与白板录制，若该ID和SDK中使用的ID重复，会导致SDK和录制服务互踢，影响正常录制。
   */
  RecordUserId: string
  /**
   * 与`RecordUserId`对应的IM签名
   */
  RecordUserSig: string
  /**
   * 白板进行信令同步的 IM 群组 ID。
在没有指定`GroupId`的情况下，实时录制服务将使用 `RoomId` 的字符串形式作为同步白板信令的IM群组ID。
在指定了`GroupId`的情况下，实时录制将优先使用`GroupId`作为同步白板信令的群组ID。请在开始录制前确保相应的IM群组已创建完成，否则会导致录制失败。
   */
  GroupId?: string
  /**
   * 录制视频拼接参数
   */
  Concat?: Concat
  /**
   * 录制白板参数，例如白板宽高等
   */
  Whiteboard?: Whiteboard
  /**
   * 录制混流参数
特别说明：
1. 混流功能需要根据额外开通， 请联系腾讯云互动白板客服人员
2. 使用混流功能，必须提供 Extras 参数，且 Extras 参数中必须包含 "MIX_STREAM"
   */
  MixStream?: MixStream
  /**
   * 使用到的高级功能列表
可以选值列表：
MIX_STREAM - 混流功能
   */
  Extras?: Array<string>
  /**
   * 是否需要在结果回调中返回各路流的纯音频录制文件，文件格式为mp3
   */
  AudioFileNeeded?: boolean
  /**
   * 录制控制参数，用于更精细地指定需要录制哪些流，某一路流是否禁用音频，是否只录制小画面等
   */
  RecordControl?: RecordControl
  /**
   * 录制模式

REALTIME_MODE - 实时录制模式（默认）
VIDEO_GENERATION_MODE - 视频生成模式（内测中，需邮件申请开通）
   */
  RecordMode?: string
  /**
   * 聊天群组ID，此字段仅适用于`视频生成模式`

在`视频生成模式`下，默认会记录白板群组内的非白板信令消息，如果指定了`ChatGroupId`，则会记录指定群ID的聊天消息。
   */
  ChatGroupId?: string
  /**
   * 自动停止录制超时时间，单位秒，取值范围[300, 86400], 默认值为300秒。

当超过设定时间房间内没有音视频上行且没有白板操作的时候，录制服务会自动停止当前录制任务。
   */
  AutoStopTimeout?: number
  /**
   * 内部参数，可忽略
   */
  ExtraData?: string
  /**
   * TRTC数字类型房间号，取值范围: (1, 4294967295)。

在同时指定了`RoomId`与`TRTCRoomId`的情况下，优先使用`TRTCRoomId`作为实时录制拉TRTC流的TRTC房间号。

当指定了`TRTCRoomIdStr`的情况下，此字段将被忽略。
   */
  TRTCRoomId?: number
  /**
   * TRTC字符串类型房间号。

在指定了`TRTCRoomIdStr`的情况下，会优先使用`TRTCRoomIdStr`作为实时录制拉TRTC流的TRTC房间号。
   */
  TRTCRoomIdStr?: string
}

/**
 * DescribeUserStatus请求参数结构体
 */
export type DescribeUserStatusRequest = null

/**
 * DescribeOnlineRecordCallback请求参数结构体
 */
export interface DescribeOnlineRecordCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * 实时录制任务搜索结果
 */
export interface RecordTaskSearchResult {
  /**
   * 任务唯一ID
   */
  TaskId: string
  /**
   * 实时录制任务状态
- PAUSED: 录制已暂停
- PREPARED: 录制在准备阶段
- RECORDING: 正在录制
- STOPPED：录制已停止
- FINISHED: 录制已结束
   */
  Status: string
  /**
   * 实时录制房间号
   */
  RoomId: number
  /**
   * 任务创建时间
   */
  CreateTime: string
  /**
   * 用户应用SdkAppId
   */
  SdkAppId: number
  /**
   * 实时录制结果
   */
  Result: RecordTaskResult
}

/**
 * DescribeWarningCallback请求参数结构体
 */
export interface DescribeWarningCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * SetTranscodeCallback返回参数结构体
 */
export interface SetTranscodeCallbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopOnlineRecord请求参数结构体
 */
export interface StopOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 需要停止录制的任务 Id
   */
  TaskId: string
}

/**
 * SetVideoGenerationTaskCallback返回参数结构体
 */
export interface SetVideoGenerationTaskCallbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 白板应用
 */
export interface ApplicationItem {
  /**
   * 应用SdkAppId
   */
  SdkAppId: number
  /**
   * 应用名
   */
  AppName: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 标签列表
   */
  TagList: Array<Tag>
}

/**
 * DescribeTranscodeByUrl返回参数结构体
 */
export interface DescribeTranscodeByUrlResponse {
  /**
   * 转码的当前进度,取值范围为0~100
   */
  Progress?: number
  /**
   * 任务的当前状态
- QUEUED: 正在排队等待转换
- PROCESSING: 转换中
- FINISHED: 转换完成
- EXCEPTION: 转换异常
   */
  Status?: string
  /**
   * 转码任务的唯一标识Id
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePPTCheckTask请求参数结构体
 */
export interface CreatePPTCheckTaskRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 经过URL编码后的PPT文件地址。URL 编码会将字符转换为可通过因特网传输的格式，例如文档地址为http://example.com/测试.pptx，经过URL编码之后为http://example.com/%E6%B5%8B%E8%AF%95.pptx。为了提高URL解析的成功率，请对URL进行编码。
   */
  Url: string
  /**
   * 是否对不支持元素开启自动处理的功能，默认不开启。
true -- 开启
false -- 不开启

当设置为`true`时，可配合`AutoHandleUnsupportedElementTypes`参数使用，具体有哪些不兼容元素类型，可参考`AutoHandleUnsupportedElementTypes`参数的说明。
   */
  AutoHandleUnsupportedElement?: boolean
  /**
   * 此参数仅在`AutoHandleUnsupportedElement`参数为`true`的情况下有效。

指定需要自动处理的不兼容元素类型，默认对所有不兼容的元素进行自动处理。

目前支持检测的不兼容元素类型及对应的自动处理方式如下：
0: 不支持的墨迹类型
-- 自动处理方式：移除墨迹

1: 自动翻页
-- 自动处理方式：移除自动翻页设置，并修改为单击切换

2: 已损坏音视频
-- 自动处理方式：移除对损坏音视频的引用

3: 不可访问资源
-- 自动处理方式：移除对不可访问的资源的引用

4: 只读文件
-- 自动处理方式：移除只读设置

5: 不支持的元素编辑锁定状态
-- 自动处理方式：移除锁定状态

6: 可能有兼容问题的字体
-- 自动处理方式： 不支持处理

7: 设置了柔化边缘的GIF图片
-- 自动处理方式：移除柔化边缘设置

8: 存在不兼容的空格下划线
-- 自动处理方式：通过调整空格下划线前后文本的字体语言体系，保证空格下划线表现正常

9: 存在设置了分段动画的数学公式和文本混合内容
-- 自动处理方式： 不支持处理

10: 存在设置了分段动画的渐变色文本
-- 自动处理方式： 不支持处理

11: 存在不兼容的分散对齐方式
-- 自动处理方式： 不支持处理

12: 存在不兼容的多倍行距设置
-- 自动处理方式： 不支持处理
   */
  AutoHandleUnsupportedElementTypes?: Array<number | bigint>
}

/**
 * 视频信息
 */
export interface VideoInfo {
  /**
   * 视频开始播放的时间（单位：毫秒）
   */
  VideoPlayTime: number
  /**
   * 视频大小（字节）
   */
  VideoSize: number
  /**
   * 视频格式
   */
  VideoFormat: string
  /**
   * 视频播放时长（单位：毫秒）
   */
  VideoDuration: number
  /**
   * 视频文件URL
   */
  VideoUrl: string
  /**
   * 视频文件Id
   */
  VideoId: string
  /**
   * 视频流类型 
- 0：摄像头视频 
- 1：屏幕分享视频
- 2：白板视频 
- 3：混流视频
- 4：纯音频（mp3)
   */
  VideoType: number
  /**
   * 摄像头/屏幕分享视频所属用户的 Id（白板视频为空、混流视频tic_mixstream_房间号_混流布局类型、辅路视频tic_substream_用户Id）
   */
  UserId: string
  /**
   * 视频分辨率的宽
   */
  Width: number
  /**
   * 视频分辨率的高
   */
  Height: number
}

/**
 * SetWhiteboardPushCallback请求参数结构体
 */
export interface SetWhiteboardPushCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 白板推流任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  Callback: string
}

/**
 * DescribeTIWDailyUsage返回参数结构体
 */
export interface DescribeTIWDailyUsageResponse {
  /**
   * 指定区间指定产品的用量汇总
   */
  Usages: Array<UsageDataItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实时录制视频拼接参数
 */
export interface Concat {
  /**
   * 是否开启拼接功能
在开启了视频拼接功能的情况下，实时录制服务会把同一个用户因为暂停导致的多段视频拼接成一个视频
   */
  Enabled: boolean
  /**
   * 视频拼接时使用的垫片图片下载地址，不填默认用全黑的图片进行视频垫片
   */
  Image?: string
}

/**
 * DescribeWhiteboardApplicationConfig请求参数结构体
 */
export interface DescribeWhiteboardApplicationConfigRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 需要查询的任务类型
recording: 实时录制
transcode: 文档转码
   */
  TaskTypes: Array<string>
  /**
   * 需要查询配置的SdkAppId列表
   */
  SdkAppIds?: Array<number | bigint>
}

/**
 * 互动白板房间用量信息
 */
export interface RoomUsageDataItem {
  /**
   * 日期，格式为YYYY-MM-DD
   */
  Time: string
  /**
   * 白板应用SDKAppID
   */
  SdkAppId: number
  /**
   * 互动白板子产品，请求参数传入的一致
- sp_tiw_board: 互动白板时长
- sp_tiw_ric: 实时录制时长
   */
  SubProduct: string
  /**
   * 用量值
- 白板时长、实时录制时长单位为分钟
   */
  Value: number
  /**
   * 互动白板房间号
   */
  RoomID: number
}

/**
 * 板书文件存储cos参数
 */
export interface SnapshotCOS {
  /**
   * cos所在腾讯云账号uin
   */
  Uin: number
  /**
   * cos所在地区
   */
  Region: string
  /**
   * cos存储桶名称
   */
  Bucket: string
  /**
   * 板书文件存储根目录
   */
  TargetDir?: string
  /**
   * CDN加速域名
   */
  Domain?: string
}

/**
 * CreateVideoGenerationTask返回参数结构体
 */
export interface CreateVideoGenerationTaskResponse {
  /**
   * 视频生成的任务Id
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePPTCheckCallback请求参数结构体
 */
export interface DescribePPTCheckCallbackRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
}

/**
 * 实时录制白板参数，例如白板宽高等
 */
export interface Whiteboard {
  /**
   * 实时录制结果里白板视频宽，取值必须大于等于2，默认为1280
   */
  Width?: number
  /**
   * 实时录制结果里白板视频高，取值必须大于等于2，默认为960
   */
  Height?: number
  /**
   * 白板初始化参数，透传到白板 SDK
   */
  InitParam?: string
}

/**
 * PauseOnlineRecord返回参数结构体
 */
export interface PauseOnlineRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWhiteboardApplicationConfig返回参数结构体
 */
export interface ModifyWhiteboardApplicationConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSnapshotTask请求参数结构体
 */
export interface CreateSnapshotTaskRequest {
  /**
   * 白板相关参数
   */
  Whiteboard: SnapshotWhiteboard
  /**
   * 白板房间 `SdkAppId`
   */
  SdkAppId: number
  /**
   * 白板房间号
   */
  RoomId: number
  /**
   * 白板板书生成结果通知回调地址
   */
  CallbackURL?: string
  /**
   * 白板板书文件 `COS` 存储参数， 不填默认存储在公共存储桶，公共存储桶的数据仅保存3天
   */
  COS?: SnapshotCOS
  /**
   * 白板板书生成模式，默认为 `AllMarks`。取值说明如下：

`AllMarks` - 全量模式，即对于客户端每一次调用 `addSnapshotMark` 接口打上的白板板书生成标志全部都会生成对应的白板板书图片。

`LatestMarksOnly` - 单页去重模式，即对于客户端在同一页白板上多次调用 `addSnapshotMark` 打上的白板板书生成标志仅保留最新一次标志来生成对应白板页的白板板书图片。

（**注意：`LatestMarksOnly` 模式只有客户端使用v2.6.8及以上版本的白板SDK调用 `addSnapshotMark` 时才生效，否则即使在调用本API是指定了 `LatestMarksOnly` 模式，服务后台会使用默认的 `AllMarks` 模式生成白板板书**）
   */
  SnapshotMode?: string
}

/**
 * DescribeTranscode返回参数结构体
 */
export interface DescribeTranscodeResponse {
  /**
   * 文档的总页数
   */
  Pages?: number
  /**
   * 转码的当前进度,取值范围为0~100
   */
  Progress?: number
  /**
   * 文档的分辨率
   */
  Resolution?: string
  /**
   * 转码完成后结果的URL
动态转码：PPT转动态H5的链接
静态转码：文档每一页的图片URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/`，那么文档第1页的图片URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推
   */
  ResultUrl?: string
  /**
   * 任务的当前状态
- QUEUED: 正在排队等待转换
- PROCESSING: 转换中
- FINISHED: 转换完成
   */
  Status?: string
  /**
   * 转码任务的唯一标识Id
   */
  TaskId?: string
  /**
   * 文档的文件名
   */
  Title?: string
  /**
   * 缩略图URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/ `，那么动态PPT第1页的缩略图URL为
`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推

如果发起文档转码请求参数中带了ThumbnailResolution参数，并且转码类型为动态转码，该参数不为空，其余情况该参数为空字符串
   */
  ThumbnailUrl?: string
  /**
   * 动态转码缩略图生成分辨率
   */
  ThumbnailResolution?: string
  /**
   * 转码压缩文件下载的URL，如果发起文档转码请求参数中`CompressFileType`为空或者不是支持的压缩格式，该参数为空字符串
   */
  CompressFileUrl?: string
  /**
   * 资源清单文件下载URL(内测体验)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceListUrl?: string
  /**
   * 文档制作方式(内测体验)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ext?: string
  /**
   * 文档转码任务创建时间，单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * 文档转码任务分配时间，单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssignTime?: number
  /**
   * 文档转码任务完成时间，单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishedTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetOnlineRecordCallbackKey请求参数结构体
 */
export interface SetOnlineRecordCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
  /**
   * 设置实时录制回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥。回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * ModifyApplication请求参数结构体
 */
export interface ModifyApplicationRequest {
  /**
   * 应用SdkAppId
   */
  SdkAppId: number
  /**
   * App名字
   */
  AppName: string
}

/**
 * DescribeOnlineRecordCallback返回参数结构体
 */
export interface DescribeOnlineRecordCallbackResponse {
  /**
   * 实时录制事件回调地址，如果未设置回调地址，该字段为空字符串
   */
  Callback: string
  /**
   * 实时录制回调鉴权密钥
   */
  CallbackKey: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 录制控制参数， 用于指定全局录制控制及具体流录制控制参数，比如设置需要对哪些流进行录制，是否只录制小画面等
 */
export interface RecordControl {
  /**
   * 设置是否开启录制控制参数，只有设置为true的时候，录制控制参数才生效。
   */
  Enabled: boolean
  /**
   * 设置是否禁用录制的全局控制参数。一般与`StreamControls`参数配合使用。

true - 所有流都不录制。
false - 所有流都录制。默认为false。

这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。
   */
  DisableRecord?: boolean
  /**
   * 设置是否禁用所有流的音频录制的全局控制参数。一般与`StreamControls`参数配合使用。

true - 所有流的录制都不对音频进行录制。
false - 所有流的录制都需要对音频进行录制。默认为false。

这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。
   */
  DisableAudio?: boolean
  /**
   * 设置是否所有流都只录制小画面的全局控制参数。一般与`StreamControls`参数配合使用。

true - 所有流都只录制小画面。设置为true时，请确保上行端在推流的时候同时上行了小画面，否则录制视频可能是黑屏。
false - 所有流都录制大画面，默认为false。

这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。
   */
  PullSmallVideo?: boolean
  /**
   * 针对具体流指定控制参数，如果列表为空，则所有流采用全局配置的控制参数进行录制。列表不为空，则列表中指定的流将优先按此列表指定的控制参数进行录制。
   */
  StreamControls?: Array<StreamControl>
}

/**
 * DescribeQualityMetrics返回参数结构体
 */
export interface DescribeQualityMetricsResponse {
  /**
   * 输入的查询指标
   */
  Metric: string
  /**
   * 时间序列
   */
  Content: Array<TimeValue>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转码任务结果
 */
export interface TranscodeTaskResult {
  /**
   * 转码结果地址
   */
  ResultUrl: string
  /**
   * 分辨率
   */
  Resolution: string
  /**
   * 标题（一般为文件名）
   */
  Title: string
  /**
   * 转码页数
   */
  Pages: number
  /**
   * 缩略图URL前缀，比如，该URL前缀为http://example.com/g0jb42ps49vtebjshilb/，那么动态PPT第1页的缩略图URL为
http://example.com/g0jb42ps49vtebjshilb/1.jpg，其它页以此类推

如果发起文档转码请求参数中带了ThumbnailResolution参数，并且转码类型为动态转码，该参数不为空，其余情况该参数为空字符串
   */
  ThumbnailUrl: string
  /**
   * 动态转码缩略图生成分辨率
   */
  ThumbnailResolution: string
  /**
   * 转码压缩文件下载的URL，如果发起文档转码请求参数中CompressFileType为空或者不是支持的压缩格式，该参数为空字符串
   */
  CompressFileUrl: string
  /**
   * 任务失败错误码
   */
  ErrorCode: number
  /**
   * 任务失败错误信息
   */
  ErrorMsg: string
}

/**
 * DescribeIMApplications返回参数结构体
 */
export interface DescribeIMApplicationsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetOnlineRecordCallback请求参数结构体
 */
export interface SetOnlineRecordCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 实时录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
   */
  Callback: string
}

/**
 * DescribeUserList请求参数结构体
 */
export interface DescribeUserListRequest {
  /**
   * 白板应用的SdkAppId
   */
  SdkAppId: number
  /**
   * 需要查询用户列表的白板房间号
   */
  RoomId: string
  /**
   * 查询时间段，Unix时间戳，单位毫秒，第一个值为开始时间戳，第二个值为结束时间
   */
  TimeRange: Array<number | bigint>
  /**
   * 额外的查询条件
   */
  Query?: string
  /**
   * 返回最大的数据条数，默认1000
   */
  MaxSize?: number
}

/**
 * DescribeUserResources请求参数结构体
 */
export type DescribeUserResourcesRequest = null

/**
 * SetPPTCheckCallback返回参数结构体
 */
export interface SetPPTCheckCallbackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeOnlineRecord请求参数结构体
 */
export interface DescribeOnlineRecordRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 实时录制任务Id
   */
  TaskId: string
}

/**
 * StopWhiteboardPush返回参数结构体
 */
export interface StopWhiteboardPushResponse {
  /**
   * 备份任务相关参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Backup?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTranscodeByUrl请求参数结构体
 */
export interface DescribeTranscodeByUrlRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 经过URL编码后的转码文件地址。URL 编码会将字符转换为可通过因特网传输的格式，比如文档地址为http://example.com/测试.pdf，经过URL编码之后为http://example.com/%E6%B5%8B%E8%AF%95.pdf。为了提高URL解析的成功率，请对URL进行编码。
   */
  Url: string
}

/**
 * Excel转码相关参数
 */
export interface ExcelParam {
  /**
   * 表格转码纸张（画布）大小，默认为0。
0 -- A4
1 -- A2 
2 -- A0

注：当设置的值超出合法取值范围时，将采用默认值。
   */
  PaperSize?: number
  /**
   * 表格文件转换纸张方向，默认为0。
0 -- 代表垂直方向
非0 -- 代表水平方向
   */
  PaperDirection?: number
}

/**
 * DescribePostpaidUsage请求参数结构体
 */
export interface DescribePostpaidUsageRequest {
  /**
   * 开始时间
   */
  BeginTime: string
  /**
   * 结束时间
   */
  EndTime: string
}

/**
 * 自定义混流配置布局参数
 */
export interface LayoutParams {
  /**
   * 流画面宽，取值范围[2,3000]
   */
  Width: number
  /**
   * 流画面高，取值范围[2,3000]
   */
  Height: number
  /**
   * 当前画面左上角顶点相对于Canvas左上角顶点的x轴偏移量，默认为0，取值范围[0,3000]
   */
  X?: number
  /**
   * 当前画面左上角顶点相对于Canvas左上角顶点的y轴偏移量，默认为0， 取值范围[0,3000]
   */
  Y?: number
  /**
   * 画面z轴位置，默认为0
z轴确定了重叠画面的遮盖顺序，z轴值大的画面处于顶层
   */
  ZOrder?: number
}

/**
 * 指定流录制的控制参数，比如是否禁用音频、视频是录制大画面还是录制小画面等
 */
export interface StreamControl {
  /**
   * 视频流ID
视频流ID的取值含义如下：
1. tic_record_user - 表示白板视频流
2. tic_substream - 表示辅路视频流
3. 特定用户ID - 表示指定用户的视频流

在实际录制过程中，视频流ID的匹配规则为前缀匹配，只要真实流ID的前缀与指定的流ID一致就认为匹配成功。
   */
  StreamId: string
  /**
   * 设置是否对此路流开启录制。

true - 表示不对这路流进行录制，录制结果将不包含这路流的视频。
false - 表示需要对这路流进行录制，录制结果会包含这路流的视频。

默认为 false。
   */
  DisableRecord?: boolean
  /**
   * 设置是否禁用这路流的音频录制。

true - 表示不对这路流的音频进行录制，录制结果里这路流的视频将会没有声音。
false - 录制视频会保留音频，如果设置为true，则录制视频会丢弃这路流的音频。

默认为 false。
   */
  DisableAudio?: boolean
  /**
   * 设置当前流录制视频是否只录制小画面。

true - 录制小画面。设置为true时，请确保上行端同时上行了小画面，否则录制视频可能是黑屏。
false - 录制大画面。

默认为 false。
   */
  PullSmallVideo?: boolean
}

/**
 * DescribeRoomList返回参数结构体
 */
export interface DescribeRoomListResponse {
  /**
   * 白板房间列表
   */
  RoomList: Array<RoomListItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeIMApplications请求参数结构体
 */
export type DescribeIMApplicationsRequest = null

/**
 * ModifyAutoRenewFlag请求参数结构体
 */
export interface ModifyAutoRenewFlagRequest {
  /**
   * 资源Id，从DescribeUserResources接口中获取Level=1的正式月功能费的SubProduct，一般为sp_tiw_package
   */
  SubProduct: string
  /**
   * 资源Id，从DescribeUserResources接口中获取Level=1的正式月功能费资源Id
   */
  ResourceId: string
  /**
   * 自动续费标记，0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置)，若业务无续费概念或无需自动续 费，需要设置为0
   */
  AutoRenewFlag: number
}

/**
 * PPT错误元素
 */
export interface PPTErr {
  /**
   * 元素名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 0: 不支持的墨迹类型，1: 不支持自动翻页，2: 存在已损坏音视频，3: 存在不可访问资源，4: 只读文件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 错误详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Detail?: string
}

/**
 * DescribeSnapshotTask返回参数结构体
 */
export interface DescribeSnapshotTaskResponse {
  /**
   * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskID: string
  /**
   * 任务状态
Running - 任务执行中
Finished - 任务已结束
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 任务创建时间，单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: number
  /**
   * 任务完成时间，单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  FinishTime: number
  /**
   * 任务结果信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Result: SnapshotResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserStatus返回参数结构体
 */
export interface DescribeUserStatusResponse {
  /**
   * 客户的AppId
   */
  AppId?: number
  /**
   * 是否开通过白板（试用或正式）

0: 从未开通过白板服务
1: 已经开通过白板服务
   */
  IsTiwUser?: number
  /**
   * 是否开通过互动课堂（试用或正式）
   */
  IsSaaSUser?: number
  /**
   * 是否使用白板的课后录制
   */
  IsTiwOfflineRecordUser?: number
  /**
   * 用户是否实名认证
   */
  IsAuthenticated?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 流布局参数
 */
export interface StreamLayout {
  /**
   * 流布局配置参数
   */
  LayoutParams: LayoutParams
  /**
   * 视频流ID
流ID的取值含义如下：
1. tic_record_user - 表示当前画面用于显示白板视频流
2. tic_substream - 表示当前画面用于显示辅路视频流
3. 特定用户ID - 表示当前画面用于显示指定用户的视频流
4. 不填 - 表示当前画面用于备选，当有新的视频流加入时，会从这些备选的空位中选择一个没有被占用的位置来显示新的视频流画面
   */
  InputStreamId?: string
  /**
   * 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000"
   */
  BackgroundColor?: string
  /**
   * 视频画面填充模式。

0 - 自适应模式，对视频画面进行等比例缩放，在指定区域内显示完整的画面。此模式可能存在黑边。
1 - 全屏模式，对视频画面进行等比例缩放，让画面填充满整个指定区域。此模式不会存在黑边，但会将超出区域的那一部分画面裁剪掉。
   */
  FillMode?: number
}

/**
 * DescribeTIWRoomDailyUsage返回参数结构体
 */
export interface DescribeTIWRoomDailyUsageResponse {
  /**
   * 指定区间指定产品的房间用量列表
   */
  Usages: Array<RoomUsageDataItem>
  /**
   * 用量列表总数
   */
  Total: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWhiteboardPushCallback返回参数结构体
 */
export interface DescribeWhiteboardPushCallbackResponse {
  /**
   * 白板推流事件回调地址，如果未设置回调地址，该字段为空字符串
   */
  Callback: string
  /**
   * 白板推流回调鉴权密钥
   */
  CallbackKey: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationInfos请求参数结构体
 */
export type DescribeApplicationInfosRequest = null

/**
 * DescribeWhiteboardPushSearch请求参数结构体
 */
export type DescribeWhiteboardPushSearchRequest = null

/**
 * 正在运行的任务列表项
 */
export interface RunningTaskItem {
  /**
   * 应用SdkAppID
   */
  SdkAppID?: number
  /**
   * 任务ID
   */
  TaskID?: string
  /**
   * 任务类型
- TranscodeH5: 动态转码任务，文档转HTML5页面
- TranscodeJPG: 静态转码任务，文档转图片
- WhiteboardPush: 白板推流任务
- OnlineRecord: 实时录制任务
   */
  TaskType?: string
  /**
   * 任务创建时间
   */
  CreateTime?: string
  /**
   * 任务取消时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CancelTime?: string
  /**
   * 任务状态
- QUEUED: 任务正在排队等待执行中
- PROCESSING: 任务正在执行中 
- FINISHED: 任务已完成
   */
  Status?: string
  /**
   * 任务当前进度
   */
  Progress?: number
  /**
   * 转码任务中转码文件的原始URL
此参数只有任务类型为TranscodeH5、TranscodeJPG类型时才会有有效值。其他任务类型为空字符串。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileURL?: string
  /**
   * 房间号

当任务类型为TranscodeH5、TranscodeJPG时，房间号为0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoomID?: number
}

/**
 * SetTranscodeCallbackKey返回参数结构体
 */
export interface SetTranscodeCallbackKeyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetPPTCheckCallback请求参数结构体
 */
export interface SetPPTCheckCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 进度回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持http或https协议，即回调地址以http://或https://开头。 回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260#c9cbe05f-fe1a-4410-b4dc-40cc301c7b81
   */
  Callback: string
}

/**
 * DescribeWhiteboardPush返回参数结构体
 */
export interface DescribeWhiteboardPushResponse {
  /**
   * 推流结束原因，
- AUTO: 房间内长时间没有音视频上行及白板操作导致自动停止推流
- USER_CALL: 主动调用了停止推流接口
- EXCEPTION: 推流异常结束
   */
  FinishReason?: string
  /**
   * 需要查询结果的白板推流任务Id
   */
  TaskId?: string
  /**
   * 推流任务状态
- PREPARED: 表示推流正在准备中（进房/启动推流服务等操作）
- PUSHING: 表示推流已开始
- STOPPED: 表示推流已停止
   */
  Status?: string
  /**
   * 房间号
   */
  RoomId?: number
  /**
   * 白板的群组 Id
   */
  GroupId?: string
  /**
   * 推流用户Id
   */
  PushUserId?: string
  /**
   * 实际开始推流时间，Unix 时间戳，单位秒
   */
  PushStartTime?: number
  /**
   * 实际停止推流时间，Unix 时间戳，单位秒
   */
  PushStopTime?: number
  /**
   * 推流过程中出现异常的次数
   */
  ExceptionCnt?: number
  /**
   * 白板推流首帧对应的IM时间戳，可用于录制回放时IM聊天消息与白板推流视频进行同步对时。
   */
  IMSyncTime?: number
  /**
   * 备份推流任务结果信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Backup?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartOnlineRecord返回参数结构体
 */
export interface StartOnlineRecordResponse {
  /**
   * 录制任务Id
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签
 */
export interface Tag {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DescribeUsageSummary请求参数结构体
 */
export interface DescribeUsageSummaryRequest {
  /**
   * 统计时间段的开始时间
   */
  BeginTime: string
  /**
   * 统计时间段的结束时间
   */
  EndTime: string
  /**
   * 需要获取用量的子产品列表
   */
  SubProducts: Array<string>
  /**
   * true: 返回加权后的数据
false: 返回原始数据
   */
  IsWeighted?: boolean
}

/**
 * 生成白板板书时的白板参数，例如白板宽高等
 */
export interface SnapshotWhiteboard {
  /**
   * 白板宽度大小，默认为1280，有效取值范围[0，2560]
   */
  Width?: number
  /**
   * 白板高度大小，默认为720，有效取值范围[0，2560]
   */
  Height?: number
  /**
   * 白板初始化参数的JSON转义字符串，透传到白板 SDK
   */
  InitParams?: string
}

/**
 * CreatePPTCheckTask返回参数结构体
 */
export interface CreatePPTCheckTaskResponse {
  /**
   * 检测任务的唯一标识Id，用于查询该任务的进度以及检测结果
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyWhiteboardBucketConfig返回参数结构体
 */
export interface ModifyWhiteboardBucketConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTranscode请求参数结构体
 */
export interface CreateTranscodeRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 经过URL编码后的转码文件地址。URL 编码会将字符转换为可通过因特网传输的格式，比如文档地址为http://example.com/测试.pdf，经过URL编码之后为http://example.com/%E6%B5%8B%E8%AF%95.pdf。为了提高URL解析的成功率，请对URL进行编码。
   */
  Url: string
  /**
   * 是否为静态PPT，默认为False；
如果IsStaticPPT为False，后缀名为.ppt或.pptx的文档会动态转码成HTML5页面，其他格式的文档会静态转码成图片；如果IsStaticPPT为True，所有格式的文档会静态转码成图片；
   */
  IsStaticPPT?: boolean
  /**
   * 注意: 该参数已废弃, 请使用最新的 [云API SDK](https://cloud.tencent.com/document/api/1137/40060#SDK) ，使用 MinScaleResolution字段传递分辨率

转码后文档的最小分辨率，不传、传空字符串或分辨率格式错误则使用文档原分辨率

示例：1280x720，注意分辨率宽高中间为英文字母"xyz"的"x"
   */
  MinResolution?: string
  /**
   * 动态PPT转码可以为文件生成该分辨率的缩略图，不传、传空字符串或分辨率格式错误则不生成缩略图，分辨率格式同MinResolution
   */
  ThumbnailResolution?: string
  /**
   * 转码文件压缩格式，不传、传空字符串或不是指定的格式则不生成压缩文件，目前支持如下压缩格式：

zip： 生成`.zip`压缩包
tar.gz： 生成`.tar.gz`压缩包
   */
  CompressFileType?: string
  /**
   * 内部参数
   */
  ExtraData?: string
  /**
   * 文档转码优先级， 只有对于PPT动态转码生效，支持填入以下值：<br/>
- low: 低优先级转码，对于动态转码，能支持500MB（下载超时时间10分钟）以及2000页文档，但资源有限可能会有比较长时间的排队，请酌情使用该功能。<br/>
- 不填表示正常优先级转码，支持200MB文件（下载超时时间2分钟），500页以内的文档进行转码
<br/>
注意：对于PDF等静态文件转码，无论是正常优先级或者低优先级，最大只能支持200MB
   */
  Priority?: string
  /**
   * 转码后文档的最小分辨率，不传、传空字符串或分辨率格式错误则使用文档原分辨率。
分辨率越高，效果越清晰，转出来的图片资源体积会越大，课件加载耗时会变长，请根据实际使用场景配置此参数。

示例：1280x720，注意分辨率宽高中间为英文字母"xyz"的"x"
   */
  MinScaleResolution?: string
  /**
   * 此参数仅对动态转码生效。

是否对不支持元素开启自动处理的功能，默认不开启。
true -- 开启
false -- 不开启

当设置为`true`时，可配合`AutoHandleUnsupportedElementTypes`参数使用，具体有哪些不兼容元素类型，可参考`AutoHandleUnsupportedElementTypes`参数的说明。
   */
  AutoHandleUnsupportedElement?: boolean
  /**
   * 此参数仅在`AutoHandleUnsupportedElement`参数为`true`的情况下有效。

指定需要自动处理的不兼容元素类型，默认对所有不兼容的元素进行自动处理。

目前支持检测的不兼容元素类型及对应的自动处理方式如下：
0: 不支持的墨迹类型
-- 自动处理方式：移除墨迹

1: 自动翻页
-- 自动处理方式：移除自动翻页设置，并修改为单击切换

2: 已损坏音视频
-- 自动处理方式：移除对损坏音视频的引用

3: 不可访问资源
-- 自动处理方式：移除对不可访问的资源的引用

4: 只读文件
-- 自动处理方式：移除只读设置

5: 不支持的元素编辑锁定状态
-- 自动处理方式：移除锁定状态

6: 可能有兼容问题的字体
-- 自动处理方式： 不支持处理

7: 设置了柔化边缘的GIF图片
-- 自动处理方式：移除柔化边缘设置

8: 存在不兼容的空格下划线
-- 自动处理方式：通过调整空格下划线前后文本的字体语言体系，保证空格下划线表现正常

9: 存在设置了分段动画的数学公式和文本混合内容
-- 自动处理方式： 不支持处理

10: 存在设置了分段动画的渐变色文本
-- 自动处理方式： 不支持处理

11: 存在不兼容的分散对齐方式
-- 自动处理方式： 不支持处理

12: 存在不兼容的多倍行距设置
-- 自动处理方式： 不支持处理

13: 存在带有特殊符号内容的datetime类型的a:fld标签元素
-- 自动处理方式： a:fld标签替换为普通文本
   */
  AutoHandleUnsupportedElementTypes?: Array<number | bigint>
  /**
   * Excel表格转码参数，可设置转码时表格纸张大小及纸张方向等参数（仅对转码文件为Excel表格文件的静态转码任务生效）
   */
  ExcelParam?: ExcelParam
}

/**
 * SetTranscodeCallbackKey请求参数结构体
 */
export interface SetTranscodeCallbackKeyRequest {
  /**
   * 应用的SdkAppId
   */
  SdkAppId: number
  /**
   * 设置文档转码回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
   */
  CallbackKey: string
}

/**
 * SetTranscodeCallback请求参数结构体
 */
export interface SetTranscodeCallbackRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 文档转码进度回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持http或https协议，即回调地址以http://或https://开头。
回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
   */
  Callback: string
}

/**
 * DescribePostpaidUsage返回参数结构体
 */
export interface DescribePostpaidUsageResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartWhiteboardPush返回参数结构体
 */
export interface StartWhiteboardPushResponse {
  /**
   * 推流任务Id
   */
  TaskId?: string
  /**
   * 备份任务结果参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Backup?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 白板应用配置，包括资源存储桶，域名，回调地址，回调密钥等
 */
export interface WhiteboardApplicationConfig {
  /**
   * 任务类型

recording: 实时录制
transcode: 文档转码
   */
  TaskType: string
  /**
   * 存储桶名字
   */
  BucketName: string
  /**
   * 存储桶地域
   */
  BucketLocation: string
  /**
   * 资源在存储桶中的前缀
   */
  BucketPrefix: string
  /**
   * 目标CDN域名
   */
  ResultDomain: string
  /**
   * 回调地址
   */
  Callback: string
  /**
   * 回调鉴权密钥
   */
  CallbackKey: string
  /**
   * 配置的应用SdkAppId
   */
  SdkAppId?: number
  /**
   * IM管理员UserId
   */
  AdminUserId?: string
  /**
   * IM管理员UserSig
   */
  AdminUserSig?: string
}

/**
 * 转码任务搜索结果
 */
export interface TranscodeTaskSearchResult {
  /**
   * 任务创建时间
   */
  CreateTime: string
  /**
   * 任务唯一ID
   */
  TaskId: string
  /**
   * 任务的当前状态
- QUEUED: 正在排队等待转换
- PROCESSING: 转换中
- FINISHED: 转换完成
   */
  Status: string
  /**
   * 转码文件原始名称
   */
  OriginalFilename: string
  /**
   * 用户应用SdkAppId
   */
  SdkAppId: number
  /**
   * 转码任务结果
   */
  Result: TranscodeTaskResult
  /**
   * 是否静态转码
   */
  IsStatic: boolean
}

/**
 * CreateApplication返回参数结构体
 */
export interface CreateApplicationResponse {
  /**
   * 客户的AppId
   */
  AppId?: number
  /**
   * App名字
   */
  AppName?: string
  /**
   * 应用SdkAppId
   */
  SdkAppId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopWhiteboardPush请求参数结构体
 */
export interface StopWhiteboardPushRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 需要停止的白板推流任务 Id
   */
  TaskId: string
}

/**
 * DescribeRecordSearch请求参数结构体
 */
export type DescribeRecordSearchRequest = null

/**
 * DescribePPTCheck请求参数结构体
 */
export interface DescribePPTCheckRequest {
  /**
   * 客户的SdkAppId
   */
  SdkAppId: number
  /**
   * 任务的唯一标识Id
   */
  TaskId: string
}
