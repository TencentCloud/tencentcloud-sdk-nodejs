import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DismissRoomRequest, ChangeRoomPlayerProfileResponse, ModifyRoomRequest, ChangeRoomPlayerProfileRequest, DescribeRoomResponse, ModifyRoomResponse, DescribePlayerRequest, DismissRoomResponse, ChangeRoomPlayerStatusResponse, ChangeRoomPlayerStatusRequest, RemoveRoomPlayerResponse, DescribePlayerResponse, DescribeRoomRequest, RemoveRoomPlayerRequest } from "./mgobe_models";
/**
 * mgobe client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 此接口无法使用，游戏联机对战引擎MGOBE已于6.1正式下架，感谢您的支持

该接口用于查询玩家信息。支持两种用法，当OpenId不传的时候，PlayerId必传，传入PlayerId可以查询当前PlayerId的玩家信息，当OpenId传入的时候，PlayerId可不传，按照OpenId查询玩家信息。
     */
    DescribePlayer(req: DescribePlayerRequest, cb?: (error: string, rep: DescribePlayerResponse) => void): Promise<DescribePlayerResponse>;
    /**
     * 此接口无法使用，游戏联机对战引擎MGOBE已于6.1正式下架，感谢您的支持

修改玩家自定义状态
     */
    ChangeRoomPlayerStatus(req: ChangeRoomPlayerStatusRequest, cb?: (error: string, rep: ChangeRoomPlayerStatusResponse) => void): Promise<ChangeRoomPlayerStatusResponse>;
    /**
     * 此接口无法使用，游戏联机对战引擎MGOBE已于6.1正式下架，感谢您的支持

修改房间
     */
    ModifyRoom(req: ModifyRoomRequest, cb?: (error: string, rep: ModifyRoomResponse) => void): Promise<ModifyRoomResponse>;
    /**
     * 此接口无法使用，游戏联机对战引擎MGOBE已于6.1正式下架，感谢您的支持

踢出房间玩家
     */
    RemoveRoomPlayer(req: RemoveRoomPlayerRequest, cb?: (error: string, rep: RemoveRoomPlayerResponse) => void): Promise<RemoveRoomPlayerResponse>;
    /**
     * 此接口无法使用，游戏联机对战引擎MGOBE已于6.1正式下架，感谢您的支持

该接口用于查询房间信息。支持两种用法，当房间Id不传的时候，玩家Id必传，传入玩家Id可以查询当前玩家所在的房间信息，当房间Id传入的时候，玩家Id可不传，按照房间Id查询房间信息。
     */
    DescribeRoom(req: DescribeRoomRequest, cb?: (error: string, rep: DescribeRoomResponse) => void): Promise<DescribeRoomResponse>;
    /**
     * 此接口无法使用，游戏联机对战引擎MGOBE已于6.1正式下架，感谢您的支持

修改房间玩家自定义属性
     */
    ChangeRoomPlayerProfile(req: ChangeRoomPlayerProfileRequest, cb?: (error: string, rep: ChangeRoomPlayerProfileResponse) => void): Promise<ChangeRoomPlayerProfileResponse>;
    /**
     * 此接口无法使用，游戏联机对战引擎MGOBE已于6.1正式下架，感谢您的支持

通过game_id、room_id解散房间
     */
    DismissRoom(req: DismissRoomRequest, cb?: (error: string, rep: DismissRoomResponse) => void): Promise<DismissRoomResponse>;
}
