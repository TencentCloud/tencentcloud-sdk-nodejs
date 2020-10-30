/**
 * DismissRoom请求参数结构体
 */
export interface DismissRoomRequest {
    /**
      * 表示游戏资源唯一 ID, 由后台自动分配, 无法修改。
      */
    GameId: string;
    /**
      * 表示游戏房间唯一ID。
      */
    RoomId: string;
}
/**
 * DismissRoom返回参数结构体
 */
export interface DismissRoomResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
