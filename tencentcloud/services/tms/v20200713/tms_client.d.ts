import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { TextModerationRequest, AccountTipoffAccessRequest, AccountTipoffAccessResponse, TextModerationResponse } from "./tms_models";
/**
 * tms client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 举报恶意账号
     */
    AccountTipoffAccess(req: AccountTipoffAccessRequest, cb?: (error: string, rep: AccountTipoffAccessResponse) => void): Promise<AccountTipoffAccessResponse>;
    /**
     * 文本内容检测（Text Moderation）服务使用了深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。
     */
    TextModeration(req: TextModerationRequest, cb?: (error: string, rep: TextModerationResponse) => void): Promise<TextModerationResponse>;
}
