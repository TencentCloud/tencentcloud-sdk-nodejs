import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ManagePortraitRiskResponse, ManagePortraitRiskRequest } from "./taf_models";
/**
 * taf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 虚假流量识别
     */
    ManagePortraitRisk(req: ManagePortraitRiskRequest, cb?: (error: string, rep: ManagePortraitRiskResponse) => void): Promise<ManagePortraitRiskResponse>;
}
