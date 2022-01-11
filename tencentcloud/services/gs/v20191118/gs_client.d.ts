import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { StopPublishStreamResponse, StopGameRequest, SaveGameArchiveResponse, StopPublishStreamRequest, SwitchGameArchiveRequest, TrylockWorkerResponse, DescribeInstancesCountResponse, StartPublishStreamResponse, CreateSessionRequest, CreateSessionResponse, DescribeInstancesCountRequest, SaveGameArchiveRequest, TrylockWorkerRequest, SwitchGameArchiveResponse, StartPublishStreamRequest, StopGameResponse } from "./gs_models";
/**
 * gs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取实例总数和运行数
     */
    DescribeInstancesCount(req: DescribeInstancesCountRequest, cb?: (error: string, rep: DescribeInstancesCountResponse) => void): Promise<DescribeInstancesCountResponse>;
    /**
     * 尝试锁定机器
     */
    TrylockWorker(req: TrylockWorkerRequest, cb?: (error: string, rep: TrylockWorkerResponse) => void): Promise<TrylockWorkerResponse>;
    /**
     * 强制退出游戏
     */
    StopGame(req: StopGameRequest, cb?: (error: string, rep: StopGameResponse) => void): Promise<StopGameResponse>;
    /**
     * 保存游戏存档
     */
    SaveGameArchive(req: SaveGameArchiveRequest, cb?: (error: string, rep: SaveGameArchiveResponse) => void): Promise<SaveGameArchiveResponse>;
    /**
     * 切换游戏存档
     */
    SwitchGameArchive(req: SwitchGameArchiveRequest, cb?: (error: string, rep: SwitchGameArchiveResponse) => void): Promise<SwitchGameArchiveResponse>;
    /**
     * 开始云端推流
     */
    StartPublishStream(req: StartPublishStreamRequest, cb?: (error: string, rep: StartPublishStreamResponse) => void): Promise<StartPublishStreamResponse>;
    /**
     * 停止云端推流
     */
    StopPublishStream(req: StopPublishStreamRequest, cb?: (error: string, rep: StopPublishStreamResponse) => void): Promise<StopPublishStreamResponse>;
    /**
     * 创建会话
     */
    CreateSession(req: CreateSessionRequest, cb?: (error: string, rep: CreateSessionResponse) => void): Promise<CreateSessionResponse>;
}
