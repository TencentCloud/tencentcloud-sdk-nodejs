import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateDSPADbMetaResourcesRequest, CreateDSPADbMetaResourcesResponse } from "./dsgc_models";
/**
 * dsgc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 添加用户云上数据库类型资源
     */
    CreateDSPADbMetaResources(req: CreateDSPADbMetaResourcesRequest, cb?: (error: string, rep: CreateDSPADbMetaResourcesResponse) => void): Promise<CreateDSPADbMetaResourcesResponse>;
}
