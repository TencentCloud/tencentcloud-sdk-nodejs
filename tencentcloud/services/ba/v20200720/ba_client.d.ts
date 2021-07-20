import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SyncIcpOrderWebInfoRequest, SyncIcpOrderWebInfoResponse, CreateWeappQRUrlRequest, CreateWeappQRUrlResponse } from "./ba_models";
/**
 * ba client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 将备案ICP订单下的一个网站信息 同步给订单下其他网站，需要被同步的网站被检查通过(isCheck:true)；
只有指定的网站信息字段能被同步
     */
    SyncIcpOrderWebInfo(req: SyncIcpOrderWebInfoRequest, cb?: (error: string, rep: SyncIcpOrderWebInfoResponse) => void): Promise<SyncIcpOrderWebInfoResponse>;
    /**
     * 创建渠道备案小程序二维码
     */
    CreateWeappQRUrl(req: CreateWeappQRUrlRequest, cb?: (error: string, rep: CreateWeappQRUrlResponse) => void): Promise<CreateWeappQRUrlResponse>;
}
