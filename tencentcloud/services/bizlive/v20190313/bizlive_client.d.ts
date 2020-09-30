import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeWorkersResponse, ForbidLiveStreamResponse, RegisterIMRequest, StopGameResponse, ForbidLiveStreamRequest, StopGameRequest, RegisterIMResponse, DescribeWorkersRequest, CreateSessionResponse, DescribeStreamPlayInfoListResponse, CreateSessionRequest, DescribeStreamPlayInfoListRequest } from "./bizlive_models";
/**
 * bizlive client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
     */
    ForbidLiveStream(req: ForbidLiveStreamRequest, cb?: (error: string, rep: ForbidLiveStreamResponse) => void): Promise<ForbidLiveStreamResponse>;
    /**
     * 强制退出游戏
     */
    StopGame(req: StopGameRequest, cb?: (error: string, rep: StopGameResponse) => void): Promise<StopGameResponse>;
    /**
     * 注册聊天室
     */
    RegisterIM(req: RegisterIMRequest, cb?: (error: string, rep: RegisterIMResponse) => void): Promise<RegisterIMResponse>;
    /**
     * 查询空闲机器数量
     */
    DescribeWorkers(req?: DescribeWorkersRequest, cb?: (error: string, rep: DescribeWorkersResponse) => void): Promise<DescribeWorkersResponse>;
    /**
     * 查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据。
     */
    DescribeStreamPlayInfoList(req: DescribeStreamPlayInfoListRequest, cb?: (error: string, rep: DescribeStreamPlayInfoListResponse) => void): Promise<DescribeStreamPlayInfoListResponse>;
    /**
     * 创建会话
     */
    CreateSession(req: CreateSessionRequest, cb?: (error: string, rep: CreateSessionResponse) => void): Promise<CreateSessionResponse>;
}
