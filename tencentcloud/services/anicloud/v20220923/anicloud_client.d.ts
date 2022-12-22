import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CheckAppidExistRequest, QueryResourceInfoResponse, CheckAppidExistResponse, QueryResourceInfoRequest, QueryResourceResponse, QueryResourceRequest } from "./anicloud_models";
/**
 * anicloud client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查看appid是否存在
     */
    CheckAppidExist(req: CheckAppidExistRequest, cb?: (error: string, rep: CheckAppidExistResponse) => void): Promise<CheckAppidExistResponse>;
    /**
     * 查询购买资源
     */
    QueryResource(req: QueryResourceRequest, cb?: (error: string, rep: QueryResourceResponse) => void): Promise<QueryResourceResponse>;
    /**
     * 查询资源信息
     */
    QueryResourceInfo(req: QueryResourceInfoRequest, cb?: (error: string, rep: QueryResourceInfoResponse) => void): Promise<QueryResourceInfoResponse>;
}
