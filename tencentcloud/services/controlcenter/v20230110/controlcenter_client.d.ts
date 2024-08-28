import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { BatchApplyAccountBaselinesResponse, BatchApplyAccountBaselinesRequest } from "./controlcenter_models";
/**
 * controlcenter client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 批量对存量账号应用基线
     */
    BatchApplyAccountBaselines(req: BatchApplyAccountBaselinesRequest, cb?: (error: string, rep: BatchApplyAccountBaselinesResponse) => void): Promise<BatchApplyAccountBaselinesResponse>;
}
