import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SendTtsVoiceResponse, SendCodeVoiceResponse, SendCodeVoiceRequest, SendTtsVoiceRequest } from "./vms_models";
/**
 * vms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 给用户发语音验证码（仅支持数字）。
     */
    SendCodeVoice(req: SendCodeVoiceRequest, cb?: (error: string, rep: SendCodeVoiceResponse) => void): Promise<SendCodeVoiceResponse>;
    /**
     * 给用户发送指定模板的语音通知。
     */
    SendTtsVoice(req: SendTtsVoiceRequest, cb?: (error: string, rep: SendTtsVoiceResponse) => void): Promise<SendTtsVoiceResponse>;
}
