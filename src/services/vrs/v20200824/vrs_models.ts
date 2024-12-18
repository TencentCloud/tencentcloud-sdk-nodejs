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
 * CancelVRSTask请求参数结构体
 */
export interface CancelVRSTaskRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * DescribeVRSTaskStatus返回参数结构体
 */
export interface DescribeVRSTaskStatusResponse {
  /**
   * 声音复刻任务结果
   */
  Data?: DescribeVRSTaskStatusRespData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTrainingText请求参数结构体
 */
export interface GetTrainingTextRequest {
  /**
   * 复刻类型。
0 - 轻量版声音复刻（默认）;
5 - 一句话声音复刻。
   */
  TaskType?: number
  /**
   * 音色场景。（仅支持一句话声音复刻，其余复刻类型不生效） 
0 - 通用场景（默认）； 
1 - 聊天场景； 
2 - 阅读场景； 
3 - 资讯播报场景。
   */
  Domain?: number
  /**
   * 文本语种。（仅支持一句话声音复刻，其余复刻类型不生效） 
1 - 中文（默认）。
   */
  TextLanguage?: number
}

/**
 * DownloadVRSModel请求参数结构体
 */
export interface DownloadVRSModelRequest {
  /**
   * 任务ID
   */
  TaskId: string
}

/**
 * GetVRSVoiceTypeInfo返回参数结构体
 */
export interface GetVRSVoiceTypeInfoResponse {
  /**
   * 音色信息
   */
  Data?: VoiceTypeInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DownloadVRSModel返回参数结构体
 */
export interface DownloadVRSModelResponse {
  /**
   * 响应
   */
  Data?: DownloadVRSModelRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetVRSVoiceTypes返回参数结构体
 */
export interface GetVRSVoiceTypesResponse {
  /**
   * 复刻音色信息
   */
  Data?: VoiceTypeListData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetVRSVoiceTypeInfo请求参数结构体
 */
export interface GetVRSVoiceTypeInfoRequest {
  /**
   * 音色id。
   */
  VoiceType: number
  /**
   * 0 - 除快速声音复刻外其他复刻类型（默认）； 5 - 快速声音复刻。 默认为0。
   */
  TaskType?: number
  /**
   * 快速复刻音色id。
   */
  FastVoiceType?: string
}

/**
 * CancelVRSTask返回参数结构体
 */
export interface CancelVRSTaskResponse {
  /**
   * 任务ID
   */
  Data?: CancelVRSTaskRsp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetVRSVoiceTypes请求参数结构体
 */
export interface GetVRSVoiceTypesRequest {
  /**
   * 复刻类型。
0 - 除快速声音复刻外其他复刻类型（默认）；
5 - 一句话声音复刻。
   */
  TaskType?: number
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
   * 音色id。（若为一句话复刻时，该值为固定值“200000000”）
注意：此字段可能返回 null，表示取不到有效值。
   */
  VoiceType?: number
  /**
   * 失败原因说明。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: string
  /**
   * 任务过期时间。（当复刻类型为一句话复刻时展示）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 快速复刻音色ID。（当复刻类型为一句话复刻时展示）
注意：此字段可能返回 null，表示取不到有效值。
   */
  FastVoiceType?: string
}

/**
 * 音色信息列表
 */
export interface VoiceTypeListData {
  /**
   * 音色信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  VoiceTypeList?: Array<VoiceTypeInfo>
}

/**
 * 音频检测提示信息：
1.检测字是否存在多读、 少读、 错读等
2.检测准确度和流畅度
 */
export interface Words {
  /**
   * 准确度 (小于75则认为不合格)
注意：此字段可能返回 null，表示取不到有效值。
   */
  PronAccuracy?: number
  /**
   * 流畅度 (小于0.95则认为不合格)
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
 * GetTrainingText返回参数结构体
 */
export interface GetTrainingTextResponse {
  /**
   * 文本列表
   */
  Data?: TrainingTexts
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 离线声音复刻模型下载响应
 */
export interface DownloadVRSModelRsp {
  /**
   * 模型cos地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model?: string
  /**
   * 音色名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VoiceName?: string
  /**
   * 音色性别:
1-male
2-female
注意：此字段可能返回 null，表示取不到有效值。
   */
  VoiceGender?: number
  /**
   * 语言类型：
1-中文
注意：此字段可能返回 null，表示取不到有效值。
   */
  VoiceLanguage?: number
  /**
   * 任务ID
   */
  TaskId?: string
}

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
   * 音色性别:

1-male

2-female
   */
  VoiceGender: number
  /**
   * 语言类型：

1-中文
   */
  VoiceLanguage: number
  /**
   * 音频ID集合。（一句话声音复刻仅需填写一个音质检测接口返回的AudioId）
   */
  AudioIdList: Array<string>
  /**
   * 音频采样率：

16000：16k
   */
  SampleRate?: number
  /**
   * 音频格式，音频类型(wav,mp3,aac,m4a)
   */
  Codec?: string
  /**
   * 回调 URL，用户自行搭建的用于接收结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。（注意：回调方式目前仅支持轻量版声音复刻）
回调采用POST请求方式，Content-Type为application/json，回调数据格式如下:{"TaskId":"xxxxxxxxxxxxxx","Status":2,"StatusStr":"success","VoiceType":xxxxx,"ErrorMsg":""}
   */
  CallbackUrl?: string
  /**
   * 模型类型 1:在线 2:离线  默认为1
   */
  ModelType?: number
  /**
   * 复刻类型。
0 - 轻量版声音复刻（默认）；
5 - 一句话声音复刻。
   */
  TaskType?: number
  /**
   * 校验音频ID。（仅基础版声音复刻使用）
   */
  VPRAudioId?: string
}

/**
 * 训练文本
 */
export interface TrainingText {
  /**
   * 文本ID
当复刻类型为一句话声音复刻时，生成的TextId有效期为7天，且在成功创建一次复刻任务后失效。
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
 * DetectEnvAndSoundQuality返回参数结构体
 */
export interface DetectEnvAndSoundQualityResponse {
  /**
   * 检测结果
   */
  Data?: DetectionEnvAndSoundQualityRespData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 复刻音色详情
 */
export interface VoiceTypeInfo {
  /**
   * 音色id。（若为一句话复刻时，该值为固定值“200000000”）
   */
  VoiceType?: number
  /**
   * 音色名称
   */
  VoiceName?: string
  /**
   * 音色性别: 1-male 2-female
   */
  VoiceGender?: number
  /**
   * 复刻类型: 0-轻量版复刻 1-基础版复刻
   */
  TaskType?: number
  /**
   * 复刻任务 ID
   */
  TaskID?: string
  /**
   * 创建时间
   */
  DateCreated?: string
  /**
   * 部署状态。若已部署，则可通过语音合成接口调用该音色
   */
  IsDeployed?: boolean
  /**
   * 任务过期时间。（当复刻类型为一句话复刻时展示）

注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 快速复刻音色ID。（当复刻类型为一句话复刻时展示）
注意：此字段可能返回 null，表示取不到有效值。
   */
  FastVoiceType?: string
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
   * 语音数据 要使用base64编码(采用python语言时注意读取文件时需要转成base64字符串编码，例如：str(base64.b64encode(open("input.aac", mode="rb").read()), encoding='utf-8') )。
   */
  AudioData: string
  /**
   * 1:环境检测 2:音质检测
   */
  TypeId: number
  /**
   * 音频格式，音频类型(wav,mp3,aac,m4a)
   */
  Codec?: string
  /**
   * 音频采样率。
16000：16k（默认）；
24000：24k（仅一句话声音复刻支持）；
48000：48k（仅一句话声音复刻支持）。
   */
  SampleRate?: number
  /**
   * 复刻类型。
0 - 轻量版声音复刻（默认）;
5 - 一句话声音复刻。
   */
  TaskType?: number
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
 * 取消任务响应
 */
export type CancelVRSTaskRsp = null
