import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ManageConfigRequest, ManageConfigResponse } from "./tse_models";
/**
 * tse client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 管理配置
     */
    ManageConfig(req: ManageConfigRequest, cb?: (error: string, rep: ManageConfigResponse) => void): Promise<ManageConfigResponse>;
}
