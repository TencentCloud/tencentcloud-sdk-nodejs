import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeSmpnChpRequest, DescribeSmpnFnrResponse, DescribeSmpnFnrRequest, DescribeSmpnChpResponse } from "./smpn_models";
/**
 * smpn client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 不在使用的API

虚假号码识别
     */
    DescribeSmpnFnr(req: DescribeSmpnFnrRequest, cb?: (error: string, rep: DescribeSmpnFnrResponse) => void): Promise<DescribeSmpnFnrResponse>;
    /**
     * 不在使用的API

查询号码的标记和标记次数
     */
    DescribeSmpnChp(req: DescribeSmpnChpRequest, cb?: (error: string, rep: DescribeSmpnChpResponse) => void): Promise<DescribeSmpnChpResponse>;
}
