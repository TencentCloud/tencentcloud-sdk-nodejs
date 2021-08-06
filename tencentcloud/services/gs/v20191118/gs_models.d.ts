/**
 * StopGame请求参数结构体
 */
export interface StopGameRequest {
    /**
      * 游戏用户ID
      */
    UserId: string;
    /**
      * 【多人游戏】游戏主机用户ID
      */
    HostUserId?: string;
}
/**
 * SaveGameArchive返回参数结构体
 */
export interface SaveGameArchiveResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SwitchGameArchive请求参数结构体
 */
export interface SwitchGameArchiveRequest {
    /**
      * 游戏用户ID
      */
    UserId: string;
    /**
      * 游戏ID
      */
    GameId: string;
    /**
      * 游戏存档Url
      */
    GameArchiveUrl?: string;
    /**
      * 游戏相关参数
      */
    GameContext?: string;
}
/**
 * TrylockWorker返回参数结构体
 */
export interface TrylockWorkerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstancesCount返回参数结构体
 */
export interface DescribeInstancesCountResponse {
    /**
      * 客户的实例总数
      */
    Total: number;
    /**
      * 客户的实例运行数
      */
    Running: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSession请求参数结构体
 */
export interface CreateSessionRequest {
    /**
      * 客户端session信息，从JSSDK请求中获得
      */
    ClientSession: string;
    /**
      * 游戏用户ID
      */
    UserId: string;
    /**
      * 游戏ID
      */
    GameId: string;
    /**
      * 【已废弃】只在TrylockWorker时生效
      */
    GameRegion?: string;
    /**
      * 游戏参数
      */
    GameParas?: string;
    /**
      * 分辨率,，可设置为1080p或720p或1920x1080格式
      */
    Resolution?: string;
    /**
      * 背景图url，格式为png或jpeg，宽高1920*1080
      */
    ImageUrl?: string;
    /**
      * 【已废弃】
      */
    SetNo?: number;
    /**
      * 单位Mbps，固定码率建议值，有一定浮动范围，后端不动态调整(MaxBitrate和MinBitrate将无效)
      */
    Bitrate?: number;
    /**
      * 单位Mbps，动态调整最大码率建议值，会按实际情况调整
      */
    MaxBitrate?: number;
    /**
      * 单位Mbps，动态调整最小码率建议值，会按实际情况调整
      */
    MinBitrate?: number;
    /**
      * 帧率，可设置为30、45、60、90、120、144
      */
    Fps?: number;
    /**
      * 【已废弃】只在TrylockWorker时生效
      */
    UserIp?: string;
    /**
      * 【已废弃】优化项，便于客户灰度开启新的优化项，默认为0
      */
    Optimization?: number;
    /**
      * 【互动云游】游戏主机用户ID
      */
    HostUserId?: string;
    /**
      * 【互动云游】角色；Player表示玩家；Viewer表示观察者
      */
    Role?: string;
    /**
      * 游戏相关参数
      */
    GameContext?: string;
}
/**
 * CreateSession返回参数结构体
 */
export interface CreateSessionResponse {
    /**
      * 服务端session信息，返回给JSSDK
      */
    ServerSession: string;
    /**
      * 【已废弃】
      */
    RoleNumber: string;
    /**
      * 【互动云游】角色；Player表示玩家；Viewer表示观察者
      */
    Role: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstancesCount请求参数结构体
 */
export interface DescribeInstancesCountRequest {
    /**
      * 游戏ID
      */
    GameId?: string;
    /**
      * 实例分组ID
      */
    GroupId?: string;
}
/**
 * SaveGameArchive请求参数结构体
 */
export interface SaveGameArchiveRequest {
    /**
      * 游戏用户ID
      */
    UserId: string;
    /**
      * 游戏ID
      */
    GameId: string;
}
/**
 * TrylockWorker请求参数结构体
 */
export interface TrylockWorkerRequest {
    /**
      * 游戏用户ID
      */
    UserId: string;
    /**
      * 游戏ID
      */
    GameId: string;
    /**
      * 游戏区域，ap-guangzhou、ap-shanghai、ap-beijing等，如果不为空，优先按照该区域进行调度分配机器
      */
    GameRegion?: string;
    /**
      * 【废弃】资源池编号
      */
    SetNo?: number;
    /**
      * 【必选】用户IP，用于就近调度，不填将严重影响用户体验
      */
    UserIp?: string;
    /**
      * 分组ID
      */
    GroupId?: string;
}
/**
 * SwitchGameArchive返回参数结构体
 */
export interface SwitchGameArchiveResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopGame返回参数结构体
 */
export interface StopGameResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
