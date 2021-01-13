import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TextModerationRequest, TextModerationResponse } from "./tms_models";
/**
 * tms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别可能令人反感、不安全或不适宜的文本内容，同时支持用户配置词库黑白名单，打击自定义识别类型的图片。
     */
    TextModeration(req: TextModerationRequest, cb?: (error: string, rep: TextModerationResponse) => void): Promise<TextModerationResponse>;
}
