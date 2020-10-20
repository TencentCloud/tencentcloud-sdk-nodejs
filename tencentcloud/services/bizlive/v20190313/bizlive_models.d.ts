/**
 * 流播放信息
 */
export interface DayStreamPlayInfo {
    /**
      * 带宽（单位Mbps）。
      */
    Bandwidth: number;
    /**
      * 流量 （单位MB）。
      */
    Flux: number;
    /**
      * 在线人数。
      */
    Online: number;
    /**
      * 请求数。
      */
    Request: number;
    /**
      * 数据时间点，格式：yyyy-mm-dd HH:MM:SS。
      */
    Time: string;
}
/**
 * DescribeWorkers返回参数结构体
 */
export interface DescribeWorkersResponse {
    /**
      * 各个区域的机器情况
      */
    RegionDetail?: Array<WorkerRegionInfo>;
    /**
      * 空闲机器总数量
      */
    Idle?: number;
    /**
      * 区域个数
      */
    RegionNum?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ForbidLiveStream返回参数结构体
 */
export interface ForbidLiveStreamResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * worker的区域信息
 */
export interface WorkerRegionInfo {
    /**
      * 该区域空闲机器数量
      */
    Idle?: number;
    /**
      * 区域
      */
    Region?: string;
}
/**
 * RegisterIM请求参数结构体
 */
export interface RegisterIMRequest {
    /**
      * 用户昵称
      */
    Nickname: string;
    /**
      * 用户唯一ID，建议采用用户小程序OpenID加盐形式
      */
    UserId: string;
    /**
      * 用户头像URL
      */
    HeadImgUrl?: string;
    /**
      * 用户身份，默认值：0，表示无特殊身份
      */
    Level?: number;
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
/**
 * ForbidLiveStream请求参数结构体
 */
export interface ForbidLiveStreamRequest {
    /**
      * 应用名称。
      */
    AppName: string;
    /**
      * 您的推流域名。
      */
    DomainName: string;
    /**
      * 流名称。
      */
    StreamName: string;
    /**
      * 恢复流的时间。UTC 格式，例如：2018-11-29T19:00:00Z。
注意：默认禁播90天，且最长支持禁播90天。
      */
    ResumeTime?: string;
}
/**
 * StopGame请求参数结构体
 */
export interface StopGameRequest {
    /**
      * 游戏用户ID
      */
    UserId: string;
}
/**
 * RegisterIM返回参数结构体
 */
export interface RegisterIMResponse {
    /**
      * 用来传递给插件的关键字段
      */
    UserKey?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWorkers请求参数结构体
 */
export declare type DescribeWorkersRequest = null;
/**
 * CreateSession返回参数结构体
 */
export interface CreateSessionResponse {
    /**
      * 服务端session信息，返回给JSSDK
      */
    ServerSession?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStreamPlayInfoList返回参数结构体
 */
export interface DescribeStreamPlayInfoListResponse {
    /**
      * 统计信息列表。
      */
    DataInfoList?: Array<DayStreamPlayInfo>;
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
      * 游戏ID
      */
    GameId: string;
    /**
      * 游戏用户ID
      */
    UserId: string;
    /**
      * 游戏参数
      */
    GameParas?: string;
    /**
      * 游戏区域
      */
    GameRegion?: string;
    /**
      * 背景图url
      */
    ImageUrl?: string;
    /**
      * 分辨率
      */
    Resolution?: string;
}
/**
 * DescribeStreamPlayInfoList请求参数结构体
 */
export interface DescribeStreamPlayInfoListRequest {
    /**
      * 结束时间，北京时间，格式：2019-04-28 10:36:00
结束时间 和 开始时间  必须在同一天内。
      */
    EndTime: string;
    /**
      * 播放域名。
      */
    PlayDomain: string;
    /**
      * 开始时间，北京时间，格式：2019-04-28 10:36:00
当前时间 和 开始时间 间隔不超过30天。
      */
    StartTime: string;
    /**
      * 流名称，精确匹配。
若不填，则为查询总体播放数据。
      */
    StreamName?: string;
}
