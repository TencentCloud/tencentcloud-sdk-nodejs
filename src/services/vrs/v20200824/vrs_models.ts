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
 * DescribeVRSTaskStatus返回参数结构体
 */
export interface DescribeVRSTaskStatusResponse {
  /**
   * 声音复刻任务结果
   */
  Data?: DescribeVRSTaskStatusRespData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVRSTask返回参数结构体
 */
export interface CreateVRSTaskResponse {
  /**
   * 创建任务结果
   */
  Data?: CreateVRSTaskRespData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 声音复刻任务创建响应
 */
export interface CreateVRSTaskRespData {
  /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: string
}

/**
 * 环境检测和音频检测响应
 */
export interface DetectionEnvAndSoundQualityRespData {
  /**
      * 音频ID （用于创建任务接口AudioIds）,环境检测该值为空，仅在音质检测情况下返回
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioId?: string

  /**
      * 检测code 

0 表示当前语音通过
-1 表示检测失败，需要重试
-2 表示语音检测不通过，提示用户再重新录制一下（通常漏读，错读，或多读）
-3 表示语音中噪声较大，不通过
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetectionCode?: number

  /**
      * 检测提示信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetectionMsg?: string

  /**
      * 检测提示信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  DetectionTip?: Array<Words>
}

/**
 * GetTrainingText返回参数结构体
 */
export interface GetTrainingTextResponse {
  /**
   * 文本列表
   */
  Data?: TrainingTexts

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVRSTaskStatus请求参数结构体
 */
export interface DescribeVRSTaskStatusRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * DetectEnvAndSoundQuality请求参数结构体
 */
export interface DetectEnvAndSoundQualityRequest {
  /**
   * 标注文本信息 ID
   */
  TextId: string

  /**
   * 语音数据 要使用base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。
   */
  AudioData: string

  /**
   * 音频格式，音频类型(wav,mp3,aac,m4a)
   */
  Codec: string

  /**
   * 1:环境检测 2:音质检测
   */
  TypeId: number

  /**
      * 音频采样率：

16000：16k（默认）
      */
  SampleRate?: number
}

/**
 * 任务结果
 */
export interface DescribeVRSTaskStatusRespData {
  /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskId?: string

  /**
      * 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
      * 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusStr?: string

  /**
      * 音色id
注意：此字段可能返回 null，表示取不到有效值。
      */
  VoiceType?: number

  /**
      * 失败原因说明。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrorMsg?: string
}

/**
 * 训练文本
 */
export interface TrainingText {
  /**
      * 文本ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TextId?: string

  /**
      * 文本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Text?: string
}

/**
 * 音频检测提示信息：
1.检测字是否存在多读、 少读、 错读等
2.检测准确度和流畅度
 */
export interface Words {
  /**
      * 准确度 (<75则认为不合格)
注意：此字段可能返回 null，表示取不到有效值。
      */
  PronAccuracy?: number

  /**
      * 流畅度 (<0.95则认为不合格)
注意：此字段可能返回 null，表示取不到有效值。
      */
  PronFluency?: number

  /**
      * tag: 
0: match  匹配
1: insert   多读
2: delete  少读
3: replace 错读
4: oov  待评估字不在发音评估的词库
5: unknown 未知错误
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tag?: number

  /**
      * 字
注意：此字段可能返回 null，表示取不到有效值。
      */
  Word?: string
}

/**
 * 训练文本列表
 */
export interface TrainingTexts {
  /**
      * 训练文本列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TrainingTextList?: Array<TrainingText>
}

/**
 * DetectEnvAndSoundQuality返回参数结构体
 */
export interface DetectEnvAndSoundQualityResponse {
  /**
   * 检测结果
   */
  Data?: DetectionEnvAndSoundQualityRespData

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTrainingText请求参数结构体
 */
export type GetTrainingTextRequest = null

/**
 * CreateVRSTask请求参数结构体
 */
export interface CreateVRSTaskRequest {
  /**
   * 唯一请求 ID
   */
  SessionId: string

  /**
   * 音色名称
   */
  VoiceName: string

  /**
      * 音频采样率：

16000：16k（默认）
      */
  SampleRate: number

  /**
      * 音色性别:

1-male

2-female
      */
  VoiceGender: number

  /**
      * 语言类型：

1-中文（默认）
      */
  VoiceLanguage: number

  /**
   * 音频格式，音频类型(wav,mp3,aac,m4a)
   */
  Codec: string

  /**
   * 音频ID集合
   */
  AudioIdList: Array<string>

  /**
      * 回调 URL，用户自行搭建的用于接收结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。
回调采用POST请求方式，Content-Type为application/x-www-form-urlencoded，回调数据格式如下:callback_body=checksum=&data={"TaskId":"xxxxxxxxxxxxxx","Status":2,"StatusStr":"success","VoiceType":xxxxx,"ErrorMsg":""}
      */
  CallbackUrl?: string
}
