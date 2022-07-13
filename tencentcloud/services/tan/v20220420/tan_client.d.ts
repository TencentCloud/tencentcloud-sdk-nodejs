import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateBlockNodeRecordsRequest, CreateBlockNodeRecordsResponse } from "./tan_models";
/**
 * tan client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 推送节点数据
     */
    CreateBlockNodeRecords(req: CreateBlockNodeRecordsRequest, cb?: (error: string, rep: CreateBlockNodeRecordsResponse) => void): Promise<CreateBlockNodeRecordsResponse>;
}
