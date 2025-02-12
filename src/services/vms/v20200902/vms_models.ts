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
 * SendTtsVoice返回参数结构体
 */
export interface SendTtsVoiceResponse {
  /**
   * 语音通知发送状态。
   */
  SendStatus?: SendStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SendCodeVoice返回参数结构体
 */
export interface SendCodeVoiceResponse {
  /**
   * 语音验证码发送状态。
   */
  SendStatus?: SendStatus
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 语音验证码发送状态
 */
export interface SendStatus {
  /**
   * 标识本次发送 ID，标识一次下发记录。
   */
  CallId?: string
  /**
   * 用户的 session 内容，腾讯 server 回包中会原样返回。
   */
  SessionContext?: string
}

/**
 * SendCodeVoice请求参数结构体
 */
export interface SendCodeVoiceRequest {
  /**
   * 验证码，仅支持填写数字，实际播报语音时，会自动在数字前补充语音文本"您的验证码是"。
   */
  CodeMessage: string
  /**
   * 被叫手机号码，采用 e.164 标准，格式为+[国家或地区码][用户号码]。
例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
   */
  CalledNumber: string
  /**
   * 在[语音控制台](https://console.cloud.tencent.com/vms)添加应用后生成的实际SdkAppid，示例如1400006666。
   */
  VoiceSdkAppid: string
  /**
   * 播放次数，可选，最多3次，默认2次。
   */
  PlayTimes?: number
  /**
   * 用户的 session 内容，腾讯 server 回包中会原样返回。
   */
  SessionContext?: string
}

/**
 * SendTtsVoice请求参数结构体
 */
export interface SendTtsVoiceRequest {
  /**
   * 模板 ID，在控制台审核通过的模板 ID。
   */
  TemplateId: string
  /**
   * 被叫手机号码，采用 e.164 标准，格式为+[国家或地区码][用户号码]。
例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。
   */
  CalledNumber: string
  /**
   * 在[语音控制台](https://console.cloud.tencent.com/vms)添加应用后生成的实际SdkAppid，示例如1400006666。
   */
  VoiceSdkAppid: string
  /**
   * 模板参数，若模板没有参数，请提供为空数组。
注：语音消息的内容长度不超过350字。
   */
  TemplateParamSet?: Array<string>
  /**
   * 播放次数，可选，最多3次，默认2次。
   */
  PlayTimes?: number
  /**
   * 用户的 session 内容，腾讯 server 回包中会原样返回。
   */
  SessionContext?: string
}
