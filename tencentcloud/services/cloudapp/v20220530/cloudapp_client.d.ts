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
     * 通过运行时roleId查询对应的软件 LICENSE
     */
    VerifyLicense(req?: VerifyLicenseRequest, cb?: (error: string, rep: VerifyLicenseResponse) => void): Promise<VerifyLicenseResponse>;
}
