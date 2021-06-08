import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryActivityLiveCodeListRequest, QueryActivityLiveCodeListResponse } from "./wav_models";
/**
 * wav client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 根据游标拉取活动活码列表信息
     */
    QueryActivityLiveCodeList(req: QueryActivityLiveCodeListRequest, cb?: (error: string, rep: QueryActivityLiveCodeListResponse) => void): Promise<QueryActivityLiveCodeListResponse>;
}
