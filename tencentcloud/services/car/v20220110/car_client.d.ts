import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateSessionResponse, DestroySessionResponse, ApplyConcurrentResponse, ApplyConcurrentRequest, DestroySessionRequest, CreateSessionRequest } from "./car_models";
/**
 * car client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 申请并发
     */
    ApplyConcurrent(req: ApplyConcurrentRequest, cb?: (error: string, rep: ApplyConcurrentResponse) => void): Promise<ApplyConcurrentResponse>;
    /**
     * 销毁会话
     */
    DestroySession(req: DestroySessionRequest, cb?: (error: string, rep: DestroySessionResponse) => void): Promise<DestroySessionResponse>;
    /**
     * 创建会话
     */
    CreateSession(req: CreateSessionRequest, cb?: (error: string, rep: CreateSessionResponse) => void): Promise<CreateSessionResponse>;
}
