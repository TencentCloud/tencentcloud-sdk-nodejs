import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TextProcessResponse, TextResetRequest, ResetRequest, TextResetResponse, CreateBotResponse, ResetResponse, CreateBotRequest, TextProcessRequest } from "./tbp_models";
/**
 * tbp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 对当前机器人的会话状态进行复位
     */
    Reset(req: ResetRequest, cb?: (error: string, rep: ResetResponse) => void): Promise<ResetResponse>;
    /**
     * 创建机器人
     */
    CreateBot(req: CreateBotRequest, cb?: (error: string, rep: CreateBotResponse) => void): Promise<CreateBotResponse>;
    /**
     * 会话重置接口。已废弃，推荐使用最新版TextReset接口。
     */
    TextReset(req: TextResetRequest, cb?: (error: string, rep: TextResetResponse) => void): Promise<TextResetResponse>;
    /**
     * 接收调用侧的文本输入，返回应答文本。已废弃，推荐使用最新版TextProcess接口。
     */
    TextProcess(req: TextProcessRequest, cb?: (error: string, rep: TextProcessResponse) => void): Promise<TextProcessResponse>;
}
