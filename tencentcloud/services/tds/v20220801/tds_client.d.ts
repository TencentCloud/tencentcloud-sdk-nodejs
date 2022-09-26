import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeFraudBaseRequest, DescribeFraudPremiumResponse, DescribeTrustedIDResponse, DescribeFraudBaseResponse, DescribeTrustedIDRequest, DescribeFraudPremiumRequest } from "./tds_models";
/**
 * tds client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询设备风险
     */
    DescribeFraudBase(req: DescribeFraudBaseRequest, cb?: (error: string, rep: DescribeFraudBaseResponse) => void): Promise<DescribeFraudBaseResponse>;
    /**
     * 查询设备标识
     */
    DescribeTrustedID(req: DescribeTrustedIDRequest, cb?: (error: string, rep: DescribeTrustedIDResponse) => void): Promise<DescribeTrustedIDResponse>;
    /**
     * 查询设备标识及风险
     */
    DescribeFraudPremium(req: DescribeFraudPremiumRequest, cb?: (error: string, rep: DescribeFraudPremiumResponse) => void): Promise<DescribeFraudPremiumResponse>;
}
