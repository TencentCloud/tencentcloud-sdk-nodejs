import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SendMessageResponse, SendMessageRequest } from "./dataintegration_models";
/**
 * dataintegration client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 使用SDK将数据上报到DIP
     */
    SendMessage(req: SendMessageRequest, cb?: (error: string, rep: SendMessageResponse) => void): Promise<SendMessageResponse>;
}
