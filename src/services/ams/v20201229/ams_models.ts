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
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 每页展示多少条。（默认展示10条）
   */
  Limit?: number

  /**
   * 过滤参数
   */
  Filter?: TaskFilter

  /**
   * 翻页token，在向前或向后翻页时需要
   */
  PageToken?: string

  /**
   * 开始时间。默认是最近3天。
   */
  StartTime?: string

  /**
   * 结束时间。默认为空
   */
  EndTime?: string
}

/**
 *  数据存储信息
 */
export interface StorageInfo {
  /**
      * 类型 可选：
URL 资源链接类型
COS 腾讯云对象存储类型
      */
  Type?: string

  /**
   * 资源链接
   */
  Url?: string

  /**
   * 腾讯云存储桶信息
   */
  BucketInfo?: BucketInfo
}

/**
 * 文件桶信息
参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352
 */
export interface BucketInfo {
  /**
   * 腾讯云对象存储，存储桶名称
   */
  Bucket: string

  /**
   * 地域
   */
  Region: string

  /**
   * 对象Key
   */
  Object: string
}

/**
 * CreateAudioModerationTask返回参数结构体
 */
export interface CreateAudioModerationTaskResponse {
  /**
      * 任务创建结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results: Array<TaskResult>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建任务时的返回结果
 */
export interface TaskResult {
  /**
      * 请求时传入的DataId
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataId: string

  /**
      * TaskId，任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 错误码。如果code为OK，则表示创建成功，其他则参考公共错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Code: string

  /**
      * 如果错误，该字段表示错误详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message: string
}

/**
 * CancelTask请求参数结构体
 */
export interface CancelTaskRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
  /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId: string

  /**
      * 审核时传入的数据Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataId: string

  /**
      * 业务类型，用户可以在控制台查看自己配置的BizType
注意：此字段可能返回 null，表示取不到有效值。
      */
  BizType: string

  /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 查询内容审核任务的状态，可选值：
FINISH 已完成
PENDING 等待中
RUNNING 进行中
ERROR 出错
CANCELLED 已取消
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: string

  /**
      * 任务类型：可选AUDIO（点播音频），LIVE_AUDIO（直播音频）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 智能审核服务对于内容违规类型的等级，可选值：
Pass 建议通过；
Reveiw 建议复审；
Block 建议屏蔽；
注意：此字段可能返回 null，表示取不到有效值。
      */
  Suggestion: string

  /**
      * 智能审核服务对于内容违规类型的判断，详见返回值列表
如：Label：Porn（色情）；
注意：此字段可能返回 null，表示取不到有效值。
      */
  Labels: Array<TaskLabel>

  /**
      * 输入的媒体信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  InputInfo: InputInfo

  /**
      * 音频文本，备注：这里的文本最大只返回前1000个字符
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioText: string

  /**
      * 音频片段审核信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioSegments: Array<AudioSegments>

  /**
      * 错误类型，如果任务状态为Error，则该字段不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorType: string

  /**
      * 错误描述，如果任务状态为Error，则该字段不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorDescription: string

  /**
      * 任务创建时间，格式为 ISO 8601
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreatedAt: string

  /**
      * 任务最后更新时间，格式为 ISO 8601
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdatedAt: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAudioModerationTask请求参数结构体
 */
export interface CreateAudioModerationTaskRequest {
  /**
   * 输入的任务信息，最多可以同时创建10个任务
   */
  Tasks: Array<TaskInput>

  /**
   * 默认为：default，客户可以在音频审核控制台配置自己的BizType
   */
  BizType?: string

  /**
   * 审核类型，这里可选：AUDIO (点播音频)和 LIVE_AUDIO（直播音频），默认为 AUDIIO
   */
  Type?: string

  /**
   * （可选）回调签名key，具体可以查看 回调签名示例
   */
  Seed?: string

  /**
   * 接收审核信息回调地址，如果设置，则审核过程中产生的违规音频片段和画面截帧发送此接口
   */
  CallbackUrl?: string
}

/**
 * 音视频任务结构
 */
export interface TaskInput {
  /**
   * 数据ID
   */
  DataId?: string

  /**
   * 任务名
   */
  Name?: string

  /**
   * 任务输入
   */
  Input?: StorageInfo
}

/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
  /**
   * 任务ID，创建任务后返回的TaskId字段
   */
  TaskId: string

  /**
   * 是否展示所有分片，默认只展示命中规则的分片
   */
  ShowAllSegments?: boolean
}

/**
 * 任务输出标签
 */
export interface TaskLabel {
  /**
      * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label: string

  /**
      * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
  Suggestion: string

  /**
      * 得分，分数是 0 ～ 100
注意：此字段可能返回 null，表示取不到有效值。
      */
  Score: number
}

/**
 * 任务筛选器
 */
export interface TaskFilter {
  /**
   * 任务业务类型
   */
  BizType?: string

  /**
   * 任务类型，可选：VIDEO，AUDIO， LIVE_VIDEO, LIVE_AUDIO
   */
  Type?: string

  /**
   * 建议，可选：Pass, Review,Block
   */
  Suggestion?: string

  /**
   * 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED
   */
  TaskStatus?: string
}

/**
 * 输入信息详情
 */
export interface InputInfo {
  /**
      * 传入的类型可选：URL，COS
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * Url地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  Url: string

  /**
      * 桶信息。当输入当时COS时，该字段不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  BucketInfo: BucketInfo
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
      * 任务总量，为 int 字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total?: string

  /**
      * 当前页数据
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data?: Array<TaskData>

  /**
      * 翻页Token，当已经到最后一页时，该字段为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  PageToken?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 音频小语种检测结果
 */
export interface AudioResultDetailLanguageResult {
  /**
      * 语言信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label: string

  /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
  Score: number

  /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: number

  /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: number

  /**
      * 子标签码
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubLabelCode: string
}

/**
 * CancelTask返回参数结构体
 */
export interface CancelTaskResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 音频ASR文本审核结果
 */
export interface AudioResultDetailTextResult {
  /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label: string

  /**
      * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
  Keywords: Array<string>

  /**
      * 命中的LibId
注意：此字段可能返回 null，表示取不到有效值。
      */
  LibId: string

  /**
      * 命中的LibName
注意：此字段可能返回 null，表示取不到有效值。
      */
  LibName: string

  /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
  Score: number

  /**
      * 审核建议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Suggestion: string

  /**
   * 词库类型 1 黑白库 2 自定义库
   */
  LibType: number
}

/**
 * 音频输出参数
 */
export interface AudioResult {
  /**
      * 是否命中
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
      */
  HitFlag: number

  /**
      * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告，Custom：自定义词库。
以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label: string

  /**
      * 建议您拿到判断结果后的执行操作。
建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
  Suggestion: string

  /**
      * 得分，0-100
注意：此字段可能返回 null，表示取不到有效值。
      */
  Score: number

  /**
      * 音频ASR文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Text: string

  /**
      * 音频片段存储URL，有效期为1天
注意：此字段可能返回 null，表示取不到有效值。
      */
  Url: string

  /**
   * 音频时长
   */
  Duration: string

  /**
   * 拓展字段
   */
  Extra: string

  /**
   * 文本识别结果
   */
  TextResults: Array<AudioResultDetailTextResult>

  /**
   * 音频呻吟检测结果
   */
  MoanResults: Array<AudioResultDetailMoanResult>

  /**
   * 音频语言检测结果
   */
  LanguageResults: Array<AudioResultDetailLanguageResult>
}

/**
 * 音频呻吟审核结果
 */
export interface AudioResultDetailMoanResult {
  /**
      * 固定为Moan（呻吟）
注意：此字段可能返回 null，表示取不到有效值。
      */
  Label: string

  /**
   * 分数
   */
  Score: number

  /**
   * 开始时间
   */
  StartTime: number

  /**
   * 结束时间
   */
  EndTime: number

  /**
   * 子标签码
   */
  SubLabelCode: string
}

/**
 * 任务数据
 */
export interface TaskData {
  /**
      * 输入的数据ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataId: string

  /**
   * 任务ID
   */
  TaskId: string

  /**
   * 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED
   */
  Status: string

  /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  BizType: string

  /**
      * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Type: string

  /**
      * 建议。可选：Pass，Block，Review
注意：此字段可能返回 null，表示取不到有效值。
      */
  Suggestion: string

  /**
      * 输入信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaInfo: MediaInfo

  /**
      * 任务违规标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  Labels: Array<TaskLabel>

  /**
   * 创建时间（ iso 8601 格式）
   */
  CreatedAt: string

  /**
      * 更新时间（ iso 8601 格式）
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdatedAt: string
}

/**
 * 媒体类型
 */
export interface MediaInfo {
  /**
   * 编码格式
   */
  Codecs: string

  /**
      * 流检测时分片时长
注意：此字段可能返回 0，表示取不到有效值。
      */
  Duration: number

  /**
   * 宽，单位为像素
   */
  Width: number

  /**
   * 高，单位为像素
   */
  Height: number

  /**
   * 缩略图
   */
  Thumbnail: string
}

/**
 * 声音段信息
 */
export interface AudioSegments {
  /**
      * 截帧时间, 单位：秒
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
注意：此字段可能返回 null，表示取不到有效值。
      */
  OffsetTime: string

  /**
      * 结果集
注意：此字段可能返回 null，表示取不到有效值。
      */
  Result: AudioResult
}
