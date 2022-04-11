import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { GetIndustryV1HomeMembersRequest, GetIndustryV1HomeMembersResponse } from "./icr_models";
/**
 * icr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取成员列表接口
     */
    GetIndustryV1HomeMembers(req: GetIndustryV1HomeMembersRequest, cb?: (error: string, rep: GetIndustryV1HomeMembersResponse) => void): Promise<GetIndustryV1HomeMembersResponse>;
}
