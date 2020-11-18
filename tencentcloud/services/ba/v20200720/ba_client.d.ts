import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateWeappQRUrlRequest, CreateWeappQRUrlResponse } from "./ba_models";
/**
 * ba client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建渠道备案小程序二维码
     */
    CreateWeappQRUrl(req: CreateWeappQRUrlRequest, cb?: (error: string, rep: CreateWeappQRUrlResponse) => void): Promise<CreateWeappQRUrlResponse>;
}
