import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ManageMarketingRiskRequest, ManageMarketingRiskResponse } from "./rce_models";
/**
 * rce client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 风控引擎
     */
    ManageMarketingRisk(req: ManageMarketingRiskRequest, cb?: (error: string, rep: ManageMarketingRiskResponse) => void): Promise<ManageMarketingRiskResponse>;
}
