import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { VerifyLicenseRequest, VerifyLicenseResponse } from "./cloudapp_models";
/**
 * cloudapp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 从软件进程读取 LICENSE。
     */
    VerifyLicense(req?: VerifyLicenseRequest, cb?: (error: string, rep: VerifyLicenseResponse) => void): Promise<VerifyLicenseResponse>;
}
