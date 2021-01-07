import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { StopGameRequest, SaveGameArchiveResponse, SwitchGameArchiveRequest, TrylockWorkerResponse, StopGameResponse, CreateSessionResponse, SaveGameArchiveRequest, TrylockWorkerRequest, SwitchGameArchiveResponse, CreateSessionRequest } from "./gs_models";
/**
 * gs client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 保存游戏存档
     */
    SaveGameArchive(req: SaveGameArchiveRequest, cb?: (error: string, rep: SaveGameArchiveResponse) => void): Promise<SaveGameArchiveResponse>;
    /**
     * 尝试锁定机器
     */
    TrylockWorker(req: TrylockWorkerRequest, cb?: (error: string, rep: TrylockWorkerResponse) => void): Promise<TrylockWorkerResponse>;
    /**
     * 创建会话
     */
    CreateSession(req: CreateSessionRequest, cb?: (error: string, rep: CreateSessionResponse) => void): Promise<CreateSessionResponse>;
    /**
     * 强制退出游戏
     */
    StopGame(req: StopGameRequest, cb?: (error: string, rep: StopGameResponse) => void): Promise<StopGameResponse>;
    /**
     * 切换游戏存档
     */
    SwitchGameArchive(req: SwitchGameArchiveRequest, cb?: (error: string, rep: SwitchGameArchiveResponse) => void): Promise<SwitchGameArchiveResponse>;
}
