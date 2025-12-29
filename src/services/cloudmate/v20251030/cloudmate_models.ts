/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
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
 * CloudMateAgent请求参数结构体
 */
export interface CloudMateAgentRequest {
  /**
   * 空间 ID
   */
  WorkspaceId: string
  /**
   * 用户提问内容
   */
  Message: string
  /**
   * 场景 ID
   */
  ScenarioId?: string
  /**
   * 会话 ID

- 填写上一次接口调用返回的会话 ID（SessionId），可在原有会话基础上继续对话
- 未填写会话 ID 时，创建新会话
   */
  SessionId?: string
  /**
   * 是否使用流式响应，默认为 false，不启用流式响应
   */
  Streaming?: boolean
}

/**
 * CloudMateAgent返回参数结构体
 */
export interface CloudMateAgentResponse {
  /**
   * 会话ID，用于后续继续对话
   */
  SessionId?: string
  /**
   * unix时间戳
   */
  Timestamp?: number
  /**
   * 诊断内容
   */
  Content?: ChatContent
  /**
   * 是否为部分内容（流式场景）
   */
  Partial?: boolean
  /**
   * 本轮对话是否完成
   */
  TurnComplete?: boolean
  /**
   * 错误代码，无错误时无该字段
   */
  ErrorCode?: string
  /**
   * 错误详细信息，无错误时无该字段
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 智能诊断时间内容分片结构
 */
export interface ChatEventContentPart {
  /**
   * 文本内容（流式或完整）
   */
  Text?: string
  /**
   * 函数调用信息
   */
  FunctionCall?: string
  /**
   * 函数返回结果
   */
  FunctionResponse?: string
}

/**
 * 智能诊断结果内容结构
 */
export interface ChatContent {
  /**
   * 角色，可选值：
 - user
 - model_thinking
 - model_output
 - knowledge
   */
  Role?: string
  /**
   * 内容分片
注意：此字段可能返回 null，表示取不到有效值。
   */
  Parts?: Array<ChatEventContentPart>
}
