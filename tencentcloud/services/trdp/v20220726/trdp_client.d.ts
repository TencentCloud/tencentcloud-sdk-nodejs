import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { EvaluateUserRiskRequest, EvaluateUserRiskResponse } from "./trdp_models";
/**
 * trdp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 用户风险质量接口
     */
    EvaluateUserRisk(req: EvaluateUserRiskRequest, cb?: (error: string, rep: EvaluateUserRiskResponse) => void): Promise<EvaluateUserRiskResponse>;
}
