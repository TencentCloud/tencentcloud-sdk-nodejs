import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SubmitTaskEventResponse, SubmitTaskEventRequest } from "./smop_models";
/**
 * smop client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 提交任务事件接口
     */
    SubmitTaskEvent(req: SubmitTaskEventRequest, cb?: (error: string, rep: SubmitTaskEventResponse) => void): Promise<SubmitTaskEventResponse>;
}
