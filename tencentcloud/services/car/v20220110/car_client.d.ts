import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateSessionResponse, StopPublishStreamRequest, StartPublishStreamWithURLResponse, StopPublishStreamResponse, StartPublishStreamWithURLRequest, DestroySessionResponse, StartPublishStreamResponse, ApplyConcurrentResponse, ApplyConcurrentRequest, DestroySessionRequest, StartPublishStreamRequest, CreateSessionRequest } from "./car_models";
/**
 * car client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口用于申请并发。接口超时时间：20秒。
     */
    ApplyConcurrent(req: ApplyConcurrentRequest, cb?: (error: string, rep: ApplyConcurrentResponse) => void): Promise<ApplyConcurrentResponse>;
    /**
     * 销毁会话。如果该会话开启了云端推流，那么销毁会话时会结束云端推流。
     */
    DestroySession(req: DestroySessionRequest, cb?: (error: string, rep: DestroySessionResponse) => void): Promise<DestroySessionResponse>;
    /**
     * 开始云端推流。云端推流 codec 根据客户端（SDK）能力来自动选择，默认优先顺序为 H265、H264、VP8、VP9。
     */
    StartPublishStream(req: StartPublishStreamRequest, cb?: (error: string, rep: StartPublishStreamResponse) => void): Promise<StartPublishStreamResponse>;
    /**
     * 停止云端推流
     */
    StopPublishStream(req: StopPublishStreamRequest, cb?: (error: string, rep: StopPublishStreamResponse) => void): Promise<StopPublishStreamResponse>;
    /**
     * 开始云端推流到指定URL。云端推流 codec 根据客户端（SDK）能力来自动选择，默认优先顺序为 H265、H264、VP8、VP9。该推流方式需要单独计费，详细计费方式请查看[指定地址推流费用说明](https://cloud.tencent.com/document/product/1547/72168#98ac188a-d122-4caf-88be-05268ecefdf6)
     */
    StartPublishStreamWithURL(req: StartPublishStreamWithURLRequest, cb?: (error: string, rep: StartPublishStreamWithURLResponse) => void): Promise<StartPublishStreamWithURLResponse>;
    /**
     * 本接口用于创建会话。接口超时时间：5秒。
     */
    CreateSession(req: CreateSessionRequest, cb?: (error: string, rep: CreateSessionResponse) => void): Promise<CreateSessionResponse>;
}
