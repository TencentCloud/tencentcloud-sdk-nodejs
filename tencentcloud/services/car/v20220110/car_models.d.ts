/**
 * CreateSession返回参数结构体
 */
export interface CreateSessionResponse {
    /**
     * 服务端session信息，返回给SDK
     */
    ServerSession?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopPublishStream请求参数结构体
 */
export interface StopPublishStreamRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
     */
    UserId: string;
}
/**
 * StartPublishStreamWithURL返回参数结构体
 */
export interface StartPublishStreamWithURLResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopPublishStream返回参数结构体
 */
export interface StopPublishStreamResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartPublishStreamWithURL请求参数结构体
 */
export interface StartPublishStreamWithURLRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。
     */
    UserId: string;
    /**
     * 推流地址，仅支持rtmp协议。
     */
    PublishStreamURL: string;
}
/**
 * DestroySession返回参数结构体
 */
export interface DestroySessionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartPublishStream返回参数结构体
 */
export interface StartPublishStreamResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ApplyConcurrent返回参数结构体
 */
export interface ApplyConcurrentResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ApplyConcurrent请求参数结构体
 */
export interface ApplyConcurrentRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
     */
    UserId: string;
    /**
     * 用户IP，用户客户端的公网IP，用于就近调度
     */
    UserIp: string;
    /**
     * 项目ID
     */
    ProjectId: string;
    /**
     * 应用版本ID。如果请求应用的当前版本，可以不用填写该字段。如果请求应用的其它版本时，才需要通过该字段来指定应用的版本。
     */
    ApplicationVersionId?: string;
    /**
     * 应用ID。如果是独享项目，将忽略该参数，使用项目绑定的应用。如果是共享项目，使用该参数来指定应用。
     */
    ApplicationId?: string;
}
/**
 * DestroySession请求参数结构体
 */
export interface DestroySessionRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
     */
    UserId: string;
}
/**
 * StartPublishStream请求参数结构体
 */
export interface StartPublishStreamRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（UserId将作为StreamId进行推流，比如绑定推流域名为abc.livepush.myqcloud.com，那么推流地址为rtmp://abc.livepush.myqcloud.com/live/UserId?txSecret=xxx&txTime=xxx）
     */
    UserId: string;
    /**
     * 推流参数，推流时携带自定义参数。
     */
    PublishStreamArgs?: string;
}
/**
 * CreateSession请求参数结构体
 */
export interface CreateSessionRequest {
    /**
     * 唯一用户身份标识，由业务方自定义，平台不予理解。（可根据业务需要决定使用用户的唯一身份标识或是使用时间戳随机生成；在用户重连时应保持UserId不变）
     */
    UserId: string;
    /**
     * 用户IP，用户客户端的公网IP，用于就近调度
     */
    UserIp: string;
    /**
     * 客户端session信息，从SDK请求中获得。特殊的，当 RunMode 参数为 RunWithoutClient 时，该字段可以为空
     */
    ClientSession?: string;
    /**
     * 云端运行模式。
  RunWithoutClient：允许无客户端连接的情况下仍保持云端 App 运行
  默认值（空）：要求必须有客户端连接才会保持云端 App 运行。
     */
    RunMode?: string;
    /**
     * 应用启动参数。
  如果请求的是多应用共享项目，此参数生效；
  如果请求的是关闭预启动的单应用独享项目，此参数生效；
  如果请求的是开启预启动的单应用独享项目，此参数失效。
  
  注意：在此参数生效的情况下，将会被追加到控制台应用或项目配置的启动参数的后面。
  例如，对于某关闭预启动的单应用独享项目，若在控制台中项目配置的启动参数为bar=0，而ApplicationParameters参数为foo=1，则实际应用启动参数为bar=0 foo=1。
     */
    ApplicationParameters?: string;
    /**
     * 【多人互动】房主用户ID，在多人互动模式下为必填字段。
  如果该用户是房主，HostUserId需要和UserId保持一致；
  如果该用户非房主，HostUserId需要填写房主的HostUserId。
     */
    HostUserId?: string;
    /**
     * 【多人互动】角色。
  Player：玩家（可通过键鼠等操作应用）
  Viewer：观察者（只能观看，无法操作）
     */
    Role?: string;
}
