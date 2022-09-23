import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { OutApproveBpaasApplicationResponse, GetBpaasApproveDetailRequest, GetBpaasApproveDetailResponse, OutApproveBpaasApplicationRequest } from "./bpaas_models";
/**
 * bpaas client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查看审批详情
     */
    GetBpaasApproveDetail(req: GetBpaasApproveDetailRequest, cb?: (error: string, rep: GetBpaasApproveDetailResponse) => void): Promise<GetBpaasApproveDetailResponse>;
    /**
     * 外部审批申请单
     */
    OutApproveBpaasApplication(req: OutApproveBpaasApplicationRequest, cb?: (error: string, rep: OutApproveBpaasApplicationResponse) => void): Promise<OutApproveBpaasApplicationResponse>;
}
