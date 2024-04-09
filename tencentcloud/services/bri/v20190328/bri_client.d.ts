import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeBRIRequest, DescribeBRIResponse } from "./bri_models";
/**
 * bri client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 产品不在使用，业务已经下线

输入业务名 (bri_num, bri_dev, bri_ip, bri_apk, bri_url, bri_social 六种之一)  及其 相应字段, 获取业务风险分数和标签。

当业务名为bri_num时，必须填PhoneNumber字段.

当业务名为bri_dev时, 必须填Imei字段.

当业务名为bri_ip时，必须填IP字段.

当业务名为bri_apk时，必须填 (PackageName,CertMd5,FileSize) 三个字段 或者 FileMd5一个字段.

当业务名为bri_url时，必须填Url字段.

当业务名为bri_social时，必须填QQ和Wechat字段两者其中一个或者两个.
     */
    DescribeBRI(req: DescribeBRIRequest, cb?: (error: string, rep: DescribeBRIResponse) => void): Promise<DescribeBRIResponse>;
}
