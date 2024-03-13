/**
 * TextProcess返回参数结构体
 */
export interface TextProcessResponse {
    /**
     * 当前会话状态{会话开始: START; 会话中: COUTINUE; 会话结束: COMPLETE}。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DialogStatus?: string;
    /**
     * 匹配到的机器人名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotName?: string;
    /**
     * 匹配到的意图名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntentName?: string;
    /**
     * 槽位信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlotInfoList?: Array<SlotInfo>;
    /**
     * 原始的用户说法。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputText?: string;
    /**
     * 透传字段，由用户自定义的WebService服务返回。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SessionAttributes?: string;
    /**
     * 机器人对话的应答文本。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResponseText?: string;
    /**
     * 结果类型 {中间逻辑出错:0; 任务型机器人:1; 问答型机器人:2; 闲聊型机器人:3; 未匹配上，返回预设兜底话术:5; 未匹配上，返回相似问题列表:6}。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultType?: string;
    /**
     * 机器人应答。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResponseMessage?: ResponseMessage;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Group是消息组的具体定义，当前包含ContentType、Url、Content三个字段。其中，具体的ContentType字段定义，参考互联网MIME类型标准。
 */
export interface Group {
    /**
     * 消息类型参考互联网MIME类型标准，当前仅支持"text/plain"。
     */
    ContentType?: string;
    /**
     * 返回内容以链接形式提供。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Url?: string;
    /**
     * 普通文本。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: string;
}
/**
 * 槽位信息
 */
export interface SlotInfo {
    /**
     * 槽位名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlotName: string;
    /**
     * 槽位值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlotValue: string;
}
/**
 * TextReset请求参数结构体
 */
export interface TextResetRequest {
    /**
     * 机器人标识，用于定义抽象机器人。
     */
    BotId: string;
    /**
     * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
     */
    TerminalId: string;
    /**
     * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
     */
    BotEnv?: string;
}
/**
 * Reset请求参数结构体
 */
export interface ResetRequest {
    /**
     * 机器人标识
     */
    BotId: string;
    /**
     * 子账户id，每个终端对应一个
     */
    UserId: string;
    /**
     * 机器人版本号。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
     */
    BotVersion?: string;
    /**
     * 机器人环境{dev:测试;release:线上}。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev
     */
    BotEnv?: string;
}
/**
 * TextReset返回参数结构体
 */
export interface TextResetResponse {
    /**
     * 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DialogStatus?: string;
    /**
     * 匹配到的机器人名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotName?: string;
    /**
     * 匹配到的意图名称。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntentName?: string;
    /**
     * 槽位信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlotInfoList?: Array<SlotInfo>;
    /**
     * 原始的用户说法。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputText?: string;
    /**
     * 透传字段，由用户自定义的WebService服务返回。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SessionAttributes?: string;
    /**
     * 机器人对话的应答文本。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResponseText?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 从TBP-RTS服务v1.3版本起，机器人以消息组列表的形式响应，消息组列表GroupList包含多组消息，用户根据需要对部分或全部消息组进行组合使用。
 */
export interface ResponseMessage {
    /**
     * 消息组列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupList?: Array<Group>;
}
/**
 * CreateBot返回参数结构体
 */
export interface CreateBotResponse {
    /**
     * 任务ID
     */
    TaskRequestId?: string;
    /**
     * 任务信息
     */
    Msg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Reset返回参数结构体
 */
export interface ResetResponse {
    /**
     * 当前会话状态。取值:"start"/"continue"/"complete"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DialogStatus?: string;
    /**
     * 匹配到的机器人名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BotName?: string;
    /**
     * 匹配到的意图名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntentName?: string;
    /**
     * 机器人回答
     */
    ResponseText?: string;
    /**
     * 语义解析的槽位结果列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlotInfoList?: Array<SlotInfo>;
    /**
     * 透传字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SessionAttributes?: string;
    /**
     * 用户说法。该说法是用户原生说法或ASR识别结果，未经过语义优化
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Question?: string;
    /**
     * tts合成pcm音频存储链接。仅当请求参数NeedTts=true时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WaveUrl?: string;
    /**
     * tts合成的pcm音频。二进制数组经过base64编码(暂时不返回)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WaveData?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBot请求参数结构体
 */
export interface CreateBotRequest {
    /**
     * 机器人名称
     */
    BotName: string;
    /**
     * 机器人中文名称
     */
    BotCnName?: string;
}
/**
 * TextProcess请求参数结构体
 */
export interface TextProcessRequest {
    /**
     * 机器人标识，用于定义抽象机器人。
     */
    BotId: string;
    /**
     * 终端标识，每个终端(或线程)对应一个，区分并发多用户。
     */
    TerminalId: string;
    /**
     * 请求的文本。
     */
    InputText: string;
    /**
     * 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。
     */
    BotEnv?: string;
    /**
     * 透传字段，透传给用户自定义的WebService服务。
     */
    SessionAttributes?: string;
}
