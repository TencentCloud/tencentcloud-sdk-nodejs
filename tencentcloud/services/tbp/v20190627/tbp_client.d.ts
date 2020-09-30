import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TextProcessResponse, TextResetRequest, TextResetResponse, TextProcessRequest } from "./tbp_models";
/**
 * tbp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 会话重置接口。
     */
    TextReset(req: TextResetRequest, cb?: (error: string, rep: TextResetResponse) => void): Promise<TextResetResponse>;
    /**
     * 接收调用侧的文本输入，返回应答文本。
     */
    TextProcess(req: TextProcessRequest, cb?: (error: string, rep: TextProcessResponse) => void): Promise<TextProcessResponse>;
}
