import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DismissRoomRequest, ChangeRoomPlayerProfileResponse, ChangeRoomPlayerProfileRequest, RemoveRoomPlayerResponse, ModifyRoomResponse, ModifyRoomRequest, ChangeRoomPlayerStatusResponse, ChangeRoomPlayerStatusRequest, DismissRoomResponse, RemoveRoomPlayerRequest } from "./mgobe_models";
/**
 * mgobe client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 修改房间玩家自定义属性
     */
    ChangeRoomPlayerProfile(req: ChangeRoomPlayerProfileRequest, cb?: (error: string, rep: ChangeRoomPlayerProfileResponse) => void): Promise<ChangeRoomPlayerProfileResponse>;
    /**
     * 踢出房间玩家
     */
    RemoveRoomPlayer(req: RemoveRoomPlayerRequest, cb?: (error: string, rep: RemoveRoomPlayerResponse) => void): Promise<RemoveRoomPlayerResponse>;
    /**
     * 修改玩家自定义状态
     */
    ChangeRoomPlayerStatus(req: ChangeRoomPlayerStatusRequest, cb?: (error: string, rep: ChangeRoomPlayerStatusResponse) => void): Promise<ChangeRoomPlayerStatusResponse>;
    /**
     * 通过game_id、room_id解散房间
     */
    DismissRoom(req: DismissRoomRequest, cb?: (error: string, rep: DismissRoomResponse) => void): Promise<DismissRoomResponse>;
    /**
     * 修改房间
     */
    ModifyRoom(req: ModifyRoomRequest, cb?: (error: string, rep: ModifyRoomResponse) => void): Promise<ModifyRoomResponse>;
}
