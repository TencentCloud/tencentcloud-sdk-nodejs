/**
 * SendMessage返回参数结构体
 */
export interface SendMessageResponse {
    /**
     * 消息ID
     */
    MessageId: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 批量消息
 */
export interface BatchContent {
    /**
     * 消息体
     */
    Body: string;
    /**
     * 消息的键名
     */
    Key?: string;
}
/**
 * SendMessage请求参数结构体
 */
export interface SendMessageRequest {
    /**
     * 接入资源ID
     */
    DataHubId: string;
    /**
     * 批量消息
     */
    Message: Array<BatchContent>;
}
