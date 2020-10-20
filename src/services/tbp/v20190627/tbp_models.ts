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
 * TextProcess返回参数结构体
 */
export interface TextProcessResponse {
  /**
      * 当前会话状态{会话开始: START; 会话中: COUTINUE; 会话结束: COMPLETE}。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DialogStatus?: string

  /**
      * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BotName?: string

  /**
      * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntentName?: string

  /**
      * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SlotInfoList?: Array<SlotInfo>

  /**
      * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InputText?: string

  /**
      * 机器人应答。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseMessage?: ResponseMessage

  /**
      * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SessionAttributes?: string

  /**
      * 结果类型 {中间逻辑出错:0; 任务型机器人:1; 问答型机器人:2; 闲聊型机器人:3; 未匹配上，返回预设兜底话术:5; 未匹配上，返回相似问题列表:6}。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultType?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Group是消息组的具体定义，当前包含ContentType、Url、Content三个字段。其中，具体的ContentType字段定义，参考互联网MIME类型标准。
 */
export interface Group {
  /**
   * 消息类型参考互联网MIME类型标准，当前仅支持"text/plain"。
   */
  ContentType: string

  /**
      * 返回内容以链接形式提供。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Url: string

  /**
      * 普通文本。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Content: string
}

/**
 * 槽位信息
 */
export interface SlotInfo {
  /**
      * 槽位名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  SlotName: string

  /**
      * 槽位值
注意：此字段可能返回 null，表示取不到有效值。
      */
  SlotValue: string
}

/**
 * TextReset请求参数结构体
 */
export interface TextResetRequest {
  /**
   * 机器人标识，用于定义抽象机器人。
   */
  BotId: string

  /**
   * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
   */
  BotEnv: string

  /**
   * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
   */
  TerminalId: string

  /**
   * 平台类型，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount；企业微信: WXWork}。
   */
  PlatformType?: string

  /**
   * 当PlatformType为微信公众号或企业微信时，传递对应微信公众号或企业微信的唯一标识
   */
  PlatformId?: string
}

/**
 * TextReset返回参数结构体
 */
export interface TextResetResponse {
  /**
      * 当前会话状态{会话开始: START; 会话中: COUTINUE; 会话结束: COMPLETE}。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DialogStatus?: string

  /**
      * 匹配到的机器人名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  BotName?: string

  /**
      * 匹配到的意图名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntentName?: string

  /**
      * 槽位信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SlotInfoList?: Array<SlotInfo>

  /**
      * 原始的用户说法。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InputText?: string

  /**
      * 机器人应答。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResponseMessage?: ResponseMessage

  /**
      * 透传字段，由用户自定义的WebService服务返回。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SessionAttributes?: string

  /**
      * 结果类型 {中间逻辑出错:0; 任务型机器人:1; 问答型机器人:2; 闲聊型机器人:3; 未匹配上，返回预设兜底话术:5; 未匹配上，返回相似问题列表:6}。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ResultType?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 从TBP-RTS服务v1.3版本起，机器人以消息组列表的形式响应，消息组列表GroupList包含多组消息，用户根据需要对部分或全部消息组进行组合使用。
 */
export interface ResponseMessage {
  /**
      * 消息组列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupList: Array<Group>
}

/**
 * TextProcess请求参数结构体
 */
export interface TextProcessRequest {
  /**
   * 机器人标识，用于定义抽象机器人。
   */
  BotId: string

  /**
   * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
   */
  BotEnv: string

  /**
   * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
   */
  TerminalId: string

  /**
   * 请求的文本。
   */
  InputText: string

  /**
   * 透传字段，透传给用户自定义的WebService服务。
   */
  SessionAttributes?: string

  /**
   * 平台类型，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount；企业微信: WXWork}。
   */
  PlatformType?: string

  /**
   * 当PlatformType为微信公众号或企业微信时，传递对应微信公众号或企业微信的唯一标识
   */
  PlatformId?: string
}
