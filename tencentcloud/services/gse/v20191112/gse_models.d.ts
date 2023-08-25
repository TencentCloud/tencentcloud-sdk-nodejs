/**
 * 基于规则的动态扩缩容配置项
 */
export interface TargetConfiguration {
    /**
     * 预留存率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetValue?: number;
}
/**
 * DeleteGameServerSessionQueue请求参数结构体
 */
export interface DeleteGameServerSessionQueueRequest {
    /**
     * 游戏服务器会话队列名字，长度1~128
     */
    Name: string;
}
/**
 * 服务部署属性
 */
export interface FleetAttributes {
    /**
     * 生成包 Id
     */
    AssetId: string;
    /**
     * 创建服务器舰队时间
     */
    CreationTime: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 服务器舰队资源描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetArn: string;
    /**
     * 服务器舰队 Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId: string;
    /**
     * 服务器舰队类型，目前只支持ON_DEMAND
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetType: string;
    /**
     * 服务器类型，例如S5.LARGE8
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType: string;
    /**
     * 服务器舰队名称
     */
    Name: string;
    /**
     * 游戏会话保护策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NewGameServerSessionProtectionPolicy: string;
    /**
     * 操作系统类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatingSystem: string;
    /**
     * 资源创建限制策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceCreationLimitPolicy: ResourceCreationLimitPolicy;
    /**
     * 状态：新建、下载中、验证中、生成中、激活中、活跃、异常、删除中、结束
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 服务器舰队停止状态，为空时表示自动扩缩容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StoppedActions: Array<string>;
    /**
     * 服务器舰队终止时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerminationTime: string;
    /**
     * 时限保护超时时间，默认60分钟，最小值5，最大值1440
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessionProtectionTimeLimit: number;
    /**
     * 计费状态：未开通、已开通、异常、欠费隔离、销毁、解冻
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BillingStatus: string;
    /**
     * 标签列表，最大长度50组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<Tag>;
    /**
     * 数据盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-32000GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，10-32000GB；容量以10为单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataDiskInfo: Array<DiskInfo>;
    /**
     * 系统盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-500GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，50-500GB；容量以1为单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SystemDiskInfo: DiskInfo;
    /**
     * 云联网相关信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RelatedCcnInfos: Array<RelatedCcnInfo>;
    /**
     * fleet公网出带宽最大值，默认100Mbps，范围1-200Mbps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetMaxBandwidthOut: number;
}
/**
 * CreateAsset返回参数结构体
 */
export interface CreateAssetResponse {
    /**
     * 生成包ID
     */
    AssetId: string;
    /**
     * 生成包的全局唯一资源标识符
     */
    AssetArn: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 允许网络访问范围
 */
export interface InboundPermission {
    /**
     * 起始端口号，最小值1025
     */
    FromPort?: number;
    /**
     * IP 段范围，合法的 CIDR 地址类型，如所有IPv4来源：0.0.0.0/0
     */
    IpRange?: string;
    /**
     * 协议类型：TCP或者UDP
     */
    Protocol?: string;
    /**
     * 终止端口号，最大值60000
     */
    ToPort?: number;
}
/**
 * GetInstanceAccess返回参数结构体
 */
export interface GetInstanceAccessResponse {
    /**
     * 实例登录所需要的凭据
     */
    InstanceAccess?: InstanceAccess;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 生成包信息
 */
export interface Asset {
    /**
     * 生成包ID
     */
    AssetId: string;
    /**
     * 生成包名字，最小长度为1，最大长度为64
     */
    AssetName: string;
    /**
     * 生成包版本，最小长度为1，最大长度为64
     */
    AssetVersion: string;
    /**
     * 生成包可运行的操作系统，暂时只支持CentOS7.16
     */
    OperateSystem: string;
    /**
     * 生成包状态，0代表上传中，1代表上传失败，2代表上传成功
     */
    Stauts: number;
    /**
     * 生成包大小
     */
    Size: string;
    /**
     * 生成包创建时间
     */
    CreateTime: string;
    /**
     * 生成包绑定的Fleet个数，最小值为0
     */
    BindFleetNum: number;
    /**
     * 生成包的全局唯一资源标识符
     */
    AssetArn: string;
    /**
     * 生成包支持的操作系统镜像id
     */
    ImageId: string;
    /**
     * 生成包支持的操作系统类型
     */
    OsType: string;
    /**
     * 生成包资源类型，ASSET 或者 IMAGE；ASSET 代表是原有生成包类型，IMAGE 为扩充使用镜像类型
     */
    ResourceType: string;
    /**
     * 镜像资源共享类型，当 ResourceType 为 IMAGE 时该字段有意义，SHARED 表示共享、SHARED_IMAGE 表示未共享；ResourceType 为 ASSET 时这里返回 UNKNOWN_SHARED 用于占位
     */
    SharingStatus: string;
    /**
     * 标签列表，最大长度50组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<Tag>;
}
/**
 * ListAliases返回参数结构体
 */
export interface ListAliasesResponse {
    /**
     * 别名对象数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Aliases?: Array<Alias>;
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateBucketCORSOpt返回参数结构体
 */
export interface UpdateBucketCORSOptResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteGameServerSessionQueue返回参数结构体
 */
export interface DeleteGameServerSessionQueueResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetAttributes请求参数结构体
 */
export interface DescribeFleetAttributesRequest {
    /**
     * 服务器舰队 Ids
     */
    FleetIds?: Array<string>;
    /**
     * 结果返回最大数量，默认值20，最大值100
     */
    Limit?: number;
    /**
     * 返回结果偏移，最小值0
     */
    Offset?: number;
}
/**
 * ResolveAlias请求参数结构体
 */
export interface ResolveAliasRequest {
    /**
     * 要获取fleetId的别名ID
     */
    AliasId: string;
}
/**
 * GetGameServerInstanceLogUrl返回参数结构体
 */
export interface GetGameServerInstanceLogUrlResponse {
    /**
     * 日志下载URL的数组，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PresignedUrls: Array<string>;
    /**
     * 总条数
     */
    Total: number;
    /**
     * 是否还有没拉取完的
     */
    HasNext: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartGameServerSessionPlacement返回参数结构体
 */
export interface StartGameServerSessionPlacementResponse {
    /**
     * 游戏服务器会话放置
     */
    GameServerSessionPlacement?: GameServerSessionPlacement;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetStatisticDetails请求参数结构体
 */
export interface DescribeFleetStatisticDetailsRequest {
    /**
     * 服务器舰队ID
     */
    FleetId?: string;
    /**
     * 查询开始时间，时间格式：YYYY-MM-DD hh:mm:ss
     */
    BeginTime?: string;
    /**
     * 查询结束时间，时间格式：YYYY-MM-DD hh:mm:ss
     */
    EndTime?: string;
    /**
     * 结果返回最大数量，最小值0，最大值100
     */
    Limit?: number;
    /**
     * 返回结果偏移，最小值0
     */
    Offset?: number;
}
/**
 * DescribeAssetSystems请求参数结构体
 */
export interface DescribeAssetSystemsRequest {
    /**
     * 生成包支持的操作系统类型
     */
    OsType?: string;
    /**
     * 生成包支持的操作系统位数
     */
    OsBit?: number;
}
/**
 * GetInstanceAccess请求参数结构体
 */
export interface GetInstanceAccessRequest {
    /**
     * 服务器舰队ID
     */
    FleetId: string;
    /**
     * 实例Id
     */
    InstanceId: string;
}
/**
 * CreateFleet请求参数结构体
 */
export interface CreateFleetRequest {
    /**
     * 生成包 Id
     */
    AssetId?: string;
    /**
     * 描述，最小长度0，最大长度100
     */
    Description?: string;
    /**
     * 网络配置
     */
    InboundPermissions?: Array<InboundPermission>;
    /**
     * 服务器类型，参数根据[获取服务器实例类型列表](https://cloud.tencent.com/document/product/1165/48732)接口获取。
     */
    InstanceType?: string;
    /**
     * 服务器舰队类型，目前只支持ON_DEMAND类型
     */
    FleetType?: string;
    /**
     * 服务器舰队名称，最小长度1，最大长度50
     */
    Name?: string;
    /**
     * 保护策略：不保护NoProtection、完全保护FullProtection、时限保护TimeLimitProtection
     */
    NewGameServerSessionProtectionPolicy?: string;
    /**
     * VPC 网络 Id，对等连接已不再使用
     */
    PeerVpcId?: string;
    /**
     * 资源创建限制策略
     */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    /**
     * 进程配置
     */
    RuntimeConfiguration?: RuntimeConfiguration;
    /**
     * VPC 子网，对等连接已不再使用
     */
    SubNetId?: string;
    /**
     * 时限保护超时时间，默认60分钟，最小值5，最大值1440；当NewGameSessionProtectionPolicy为TimeLimitProtection时参数有效
     */
    GameServerSessionProtectionTimeLimit?: number;
    /**
     * 标签列表，最大长度50组
     */
    Tags?: Array<Tag>;
    /**
     * 系统盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-500GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，50-500GB；容量以1为单位
     */
    SystemDiskInfo?: DiskInfo;
    /**
     * 数据盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-32000GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，10-32000GB；容量以10为单位
     */
    DataDiskInfo?: Array<DiskInfo>;
    /**
     * 云联网信息，包含对应的账号信息及所属id
     */
    CcnInfos?: Array<CcnInfo>;
    /**
     * fleet公网出带宽最大值，默认100Mbps，范围1-200Mbps
     */
    InternetMaxBandwidthOut?: number;
}
/**
 * StartFleetActions请求参数结构体
 */
export interface StartFleetActionsRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
    /**
     * 服务器舰队扩展策略，值为["AUTO_SCALING"]
     */
    Actions?: Array<string>;
}
/**
 * UpdateFleetPortSettings返回参数结构体
 */
export interface UpdateFleetPortSettingsResponse {
    /**
     * 服务部署 Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 实例信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Instances: Array<Instance>;
    /**
     * 结果返回最大数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListFleets返回参数结构体
 */
export interface ListFleetsResponse {
    /**
     * 服务器舰队 Id 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetIds?: Array<string>;
    /**
     * 服务器舰队 Id 总数，最小值0
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAsset返回参数结构体
 */
export interface DeleteAssetResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetUtilization返回参数结构体
 */
export interface DescribeFleetUtilizationResponse {
    /**
     * 服务器舰队利用率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetUtilization: Array<FleetUtilization>;
    /**
     * 总数，最小值0
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetRelatedResources返回参数结构体
 */
export interface DescribeFleetRelatedResourcesResponse {
    /**
     * 与服务器舰队关联的资源信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resources: Array<FleetRelatedResource>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeScalingPolicies请求参数结构体
 */
export interface DescribeScalingPoliciesRequest {
    /**
     * 服务器舰队ID
     */
    FleetId?: string;
    /**
     * 状态过滤条件，取值：ACTIVE表示活跃
     */
    StatusFilter?: string;
    /**
     * 返回结果偏移，最小值0
     */
    Offset?: number;
    /**
     * 结果返回最大数量，最小值0，最大值100
     */
    Limit?: number;
}
/**
 * DeleteFleet请求参数结构体
 */
export interface DeleteFleetRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
}
/**
 * 定时器策略消息
 */
export interface TimerScalingPolicy {
    /**
     * 定时器ID，进行encode，填写时更新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimerId?: string;
    /**
     * 定时器名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimerName?: string;
    /**
     * 定时器状态(未定义0、未生效1、生效中2、已停止3、已过期4)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimerStatus?: number;
    /**
     * 定时器弹性伸缩策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimerFleetCapacity?: TimerFleetCapacity;
    /**
     * 重复周期配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimerConfiguration?: TimerConfiguration;
}
/**
 * DetachCcnInstances返回参数结构体
 */
export interface DetachCcnInstancesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetPortSettings返回参数结构体
 */
export interface DescribeFleetPortSettingsResponse {
    /**
     * 安全组信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InboundPermissions?: Array<InboundPermission>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserQuotas请求参数结构体
 */
export declare type DescribeUserQuotasRequest = null;
/**
 * UpdateAsset请求参数结构体
 */
export interface UpdateAssetRequest {
    /**
     * 生成包ID
     */
    AssetId: string;
    /**
     * 生成包名字，最小长度为1，最大长度为64
     */
    AssetName: string;
    /**
     * 生成包版本，最小长度为1，最大长度为64
     */
    AssetVersion: string;
}
/**
 * 云联网相关信息
 */
export interface CcnInfo {
    /**
     * 云联网所属账号
     */
    AccountId: string;
    /**
     * 云联网id
     */
    CcnId: string;
}
/**
 * UpdateFleetPortSettings请求参数结构体
 */
export interface UpdateFleetPortSettingsRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
    /**
     * 新增安全组
     */
    InboundPermissionAuthorizations?: Array<InboundPermissionAuthorization>;
    /**
     * 移除安全组
     */
    InboundPermissionRevocations?: Array<InboundPermissionRevocations>;
}
/**
 * 云联网实例信息
 */
export interface CcnInstanceSets {
    /**
     * 云联网账号 Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountId: string;
    /**
     * 云联网 Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CcnId: string;
    /**
     * 云联网关联时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 云联网实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName: string;
    /**
     * 云联网状态：申请中、已连接、已过期、已拒绝、已删除、失败的、关联中、解关联中、解关联失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State: string;
}
/**
 * UpdateAlias请求参数结构体
 */
export interface UpdateAliasRequest {
    /**
     * 要更新的别名的唯一标识符
     */
    AliasId: string;
    /**
     * 名字，长度不小于1字符不超过1024字符
     */
    Name?: string;
    /**
     * 别名的可读说明，长度不小于1字符不超过1024字符
     */
    Description?: string;
    /**
     * 别名的路由配置
     */
    RoutingStrategy?: RoutingStrategy;
}
/**
 * 游戏会话部署对象
 */
export interface GameServerSessionPlacement {
    /**
     * 部署Id
     */
    PlacementId: string;
    /**
     * 服务部署组名称
     */
    GameServerSessionQueueName: string;
    /**
     * 玩家延迟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerLatencies: Array<PlayerLatency>;
    /**
     * 服务部署状态
     */
    Status: string;
    /**
     * 分配给正在运行游戏会话的实例的DNS标识符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DnsName: string;
    /**
     * 游戏会话Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessionId: string;
    /**
     * 游戏会话名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessionName: string;
    /**
     * 服务部署区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessionRegion: string;
    /**
     * 游戏属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameProperties: Array<GameProperty>;
    /**
     * 游戏服务器允许同时连接到游戏会话的最大玩家数量，最小值1，最大值为玩家会话最大限额
     */
    MaximumPlayerSessionCount: number;
    /**
     * 游戏会话数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessionData: string;
    /**
     * 运行游戏会话的实例的IP地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpAddress: string;
    /**
     * 运行游戏会话的实例的端口号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * 游戏匹配数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MatchmakerData: string;
    /**
     * 部署的玩家游戏数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlacedPlayerSessions: Array<PlacedPlayerSession>;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
}
/**
 * JoinGameServerSessionBatch请求参数结构体
 */
export interface JoinGameServerSessionBatchRequest {
    /**
     * 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符
     */
    GameServerSessionId: string;
    /**
     * 玩家ID列表，最小1组，最大25组
     */
    PlayerIds: Array<string>;
    /**
     * 玩家自定义数据
     */
    PlayerDataMap?: PlayerDataMap;
}
/**
 * 服务部署组对象
 */
export interface GameServerSessionQueue {
    /**
     * 服务部署组名字
     */
    Name: string;
    /**
     * 服务部署组资源
     */
    GameServerSessionQueueArn: string;
    /**
     * 目的fleet（可为别名）列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Destinations: Array<GameServerSessionQueueDestination>;
    /**
     * 延迟策略集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerLatencyPolicies: Array<PlayerLatencyPolicy>;
    /**
     * 超时时间
     */
    TimeoutInSeconds: number;
    /**
     * 标签列表，最大长度50组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<Tag>;
}
/**
 * UpdateFleetCapacity返回参数结构体
 */
export interface UpdateFleetCapacityResponse {
    /**
     * 服务器舰队ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRuntimeConfiguration返回参数结构体
 */
export interface DescribeRuntimeConfigurationResponse {
    /**
     * 服务器舰队运行配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeConfiguration?: RuntimeConfiguration;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateGameServerSession请求参数结构体
 */
export interface CreateGameServerSessionRequest {
    /**
     * 最大玩家数量，最小值不小于0
     */
    MaximumPlayerSessionCount: number;
    /**
     * 别名ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID
     */
    AliasId?: string;
    /**
     * 创建者ID，最大长度不超过1024个ASCII字符
     */
    CreatorId?: string;
    /**
     * 舰队ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID
     */
    FleetId?: string;
    /**
     * 游戏属性，最大长度不超过16组
     */
    GameProperties?: Array<GameProperty>;
    /**
     * 游戏服务器会话属性详情，最大长度不超过4096个ASCII字符
     */
    GameServerSessionData?: string;
    /**
     * 游戏服务器会话自定义ID，最大长度不超过4096个ASCII字符
     */
    GameServerSessionId?: string;
    /**
     * 幂等token，最大长度不超过48个ASCII字符
     */
    IdempotencyToken?: string;
    /**
     * 游戏服务器会话名称，最大长度不超过1024个ASCII字符
     */
    Name?: string;
}
/**
 * UpdateAlias返回参数结构体
 */
export interface UpdateAliasResponse {
    /**
     * 别名对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: Alias;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 游戏服务器会话详情（GameServerSessionDetail）
 */
export interface GameServerSessionDetail {
    /**
     * 游戏服务器会话
     */
    GameServerSession: GameServerSession;
    /**
     * 保护策略，可选（NoProtection,FullProtection）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProtectionPolicy: string;
}
/**
 * UpdateGameServerSessionQueue返回参数结构体
 */
export interface UpdateGameServerSessionQueueResponse {
    /**
     * 部署服务组对象
     */
    GameServerSessionQueue?: GameServerSessionQueue;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGameServerSessionQueues请求参数结构体
 */
export interface DescribeGameServerSessionQueuesRequest {
    /**
     * 游戏服务器会话队列名称数组，单个名字长度1~128
     */
    Names?: Array<string>;
    /**
     * 结果返回最大数量，最小值0，最大值100
     */
    Limit?: number;
    /**
     * 返回结果偏移，最小值0
     */
    Offset?: number;
    /**
     * 资源过滤字段，可以按照资源名称、资源ID和标签进行过滤- 资源名称过滤    - Key: 固定字符串 "resource:name"    - Values: 资源名称数组（游戏服务器会话队列支持多个名称的过滤）- 标签过滤    - 通过标签键过滤        - Key: 固定字符串 "tag:key"        - Values 不传    - 通过标签键值过滤        - Key: 固定字符串 "tag:key-value"        - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"]
     */
    Filters?: Array<Filter>;
}
/**
 * GetUploadFederationToken返回参数结构体
 */
export interface GetUploadFederationTokenResponse {
    /**
     * 临时证书的过期时间，Unix 时间戳，精确到秒
     */
    ExpiredTime?: number;
    /**
     * 临时证书
     */
    AssetCredentials?: AssetCredentials;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteScalingPolicy返回参数结构体
 */
export interface DeleteScalingPolicyResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetStatisticSummary请求参数结构体
 */
export interface DescribeFleetStatisticSummaryRequest {
    /**
     * 服务器舰队ID
     */
    FleetId?: string;
    /**
     * 查询开始时间，时间格式: YYYY-MM-DD hh:mm:ss
     */
    BeginTime?: string;
    /**
     * 查询结束时间，时间格式: YYYY-MM-DD hh:mm:ss
     */
    EndTime?: string;
}
/**
 * 标签结构体
 */
export interface Tag {
    /**
     * 标签键，最大长度127字节
     */
    Key: string;
    /**
     * 标签值，最大长度255字节
     */
    Value: string;
}
/**
 * 玩家自定义数据
 */
export interface PlayerDataMap {
    /**
     * 玩家自定义数据键，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
     */
    Key: string;
    /**
     * 玩家自定义数据值，最小长度不小于1个ASCII字符，最大长度不超过2048个ASCII字符
     */
    Value: string;
}
/**
 * ResolveAlias返回参数结构体
 */
export interface ResolveAliasResponse {
    /**
     * 别名指向的fleet的唯一标识符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstancesExtend返回参数结构体
 */
export interface DescribeInstancesExtendResponse {
    /**
     * 实例信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Instances: Array<InstanceExtend>;
    /**
     * 梳理信息总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 事件对象
 */
export interface Event {
    /**
     * 事件代码，支持以下的事件代码
  
  - FLEET_CREATED
  - FLEET_STATE_DOWNLOADING
  - FLEET_BINARY_DOWNLOAD_FAILED
  - FLEET_CREATION_EXTRACTING_BUILD
  - FLEET_CREATION_VALIDATING_RUNTIME_CONFIG
  - FLEET_STATE_VALIDATING
  - FLEET_STATE_BUILDING
  - FLEET_STATE_ACTIVATING
  - FLEET_STATE_ACTIVE
  - FLEET_SCALING_EVENT
  - FLEET_STATE_ERROR
  - FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND
  - FLEET_ACTIVATION_FAILED_NO_INSTANCES
  - FLEET_VPC_PEERING_SUCCEEDED
  - FLEET_VPC_PEERING_FAILED
  - FLEET_VPC_PEERING_DELETE
  - FLEET_INITIALIZATION_FAILED
  - FLEET_DELETED
  - FLEET_STATE_DELETING
  - FLEET_ACTIVATION_FAILED
  - GAME_SESSION_ACTIVATION_TIMEOUT
     */
    EventCode: string;
    /**
     * 事件的唯一标识 ID
     */
    EventId: string;
    /**
     * 事件的发生时间，UTC 时间格式
     */
    EventTime: string;
    /**
     * 事件的消息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message: string;
    /**
     * 事件相关的日志存储路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreSignedLogUrl: string;
    /**
     * 事件对应的资源对象唯一标识 ID，例如服务器舰队 ID
     */
    ResourceId: string;
}
/**
 * PutTimerScalingPolicy请求参数结构体
 */
export interface PutTimerScalingPolicyRequest {
    /**
     * 定时器策略消息
     */
    TimerScalingPolicy?: TimerScalingPolicy;
}
/**
 * 云联网相关信息描述
 */
export interface RelatedCcnInfo {
    /**
     * 云联网所属账号
     */
    AccountId: string;
    /**
     * 云联网 ID
     */
    CcnId: string;
    /**
     * 关联云联网状态
     */
    AttachType: string;
}
/**
 * DescribeCcnInstances返回参数结构体
 */
export interface DescribeCcnInstancesResponse {
    /**
     * 云联网实例信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CcnInstanceSets: Array<CcnInstanceSets>;
    /**
     * 云联网实例个数，最小值为0
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 生成包支持操作系统详细信息
 */
export interface AssetSupportSys {
    /**
     * 生成包操作系统的镜像Id
     */
    ImageId: string;
    /**
     * 生成包操作系统的类型
     */
    OsType: string;
    /**
     * 生成包操作系统的位数
     */
    OsBit: number;
    /**
     * 生成包操作系统的版本
     */
    OsVersion: string;
}
/**
 * DeleteTimerScalingPolicy返回参数结构体
 */
export interface DeleteTimerScalingPolicyResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTimerScalingPolicies请求参数结构体
 */
export interface DescribeTimerScalingPoliciesRequest {
    /**
     * 扩缩容配置服务器舰队ID
     */
    FleetId?: string;
    /**
     * 定时器名称
     */
    TimerName?: string;
    /**
     * 定时器开始时间
     */
    BeginTime?: string;
    /**
     * 定时器结束时间
     */
    EndTime?: string;
    /**
     * 分页偏移量
     */
    Offset?: number;
    /**
     * 页大小
     */
    Limit?: number;
}
/**
 * DescribeInstanceLimit返回参数结构体
 */
export interface DescribeInstanceLimitResponse {
    /**
     * 限额
     */
    Limit?: number;
    /**
     * 详细信息
     */
    ExtraInfos?: Array<ExtraInfos>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAsset返回参数结构体
 */
export interface DescribeAssetResponse {
    /**
     * 生成包信息
     */
    Asset?: Asset;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 部署的玩家游戏会话
 */
export interface PlacedPlayerSession {
    /**
     * 玩家Id
     */
    PlayerId: string;
    /**
     * 玩家会话Id
     */
    PlayerSessionId: string;
}
/**
 * DescribeFleetStatisticSummary返回参数结构体
 */
export interface DescribeFleetStatisticSummaryResponse {
    /**
     * 总时长，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalUsedTimeSeconds: string;
    /**
     * 总流量，单位MB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalUsedFlowMegaBytes: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 服务部署利用率
 */
export interface FleetUtilization {
    /**
     * 游戏会话数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActiveGameServerSessionCount: number;
    /**
     * 活跃进程数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActiveServerProcessCount: number;
    /**
     * 当前游戏玩家数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentPlayerSessionCount: number;
    /**
     * 服务部署 Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId: string;
    /**
     * 最大玩家会话数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaximumPlayerSessionCount: number;
}
/**
 * DescribeGameServerSessionQueues返回参数结构体
 */
export interface DescribeGameServerSessionQueuesResponse {
    /**
     * 游戏服务器会话队列数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessionQueues?: Array<GameServerSessionQueue>;
    /**
     * 游戏服务器会话队列总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAlias请求参数结构体
 */
export interface DeleteAliasRequest {
    /**
     * 要删除的别名ID
     */
    AliasId: string;
}
/**
 * UpdateBucketCORSOpt请求参数结构体
 */
export interface UpdateBucketCORSOptRequest {
    /**
     * 允许的访问来源;具体参见 [cos文档](https://cloud.tencent.com/document/product/436/8279)
     */
    AllowedOrigins: Array<string>;
    /**
     * 允许的 HTTP 操作方法;可以配置多个:PUT、GET、POST、HEAD。[cos文档](https://cloud.tencent.com/document/product/436/8279)
     */
    AllowedMethods: Array<string>;
    /**
     * 用于指定允许浏览器发送 CORS 请求时携带的自定义 HTTP 请求头部;可以配置*，代表允许所有头部，为了避免遗漏，推荐配置为*。[cos文档](https://cloud.tencent.com/document/product/436/8279)
     */
    AllowedHeaders?: Array<string>;
    /**
     * 跨域资源共享配置的有效时间，单位为秒。[cos文档](https://cloud.tencent.com/document/product/436/8279)
     */
    MaxAgeSeconds?: number;
    /**
     * 允许浏览器获取的 CORS 请求响应中的头部，不区分大小写；默认情况下浏览器只能访问简单响应头部：Cache-Control、Content-Type、Expires、Last-Modified，如果需要访问其他响应头部，需要添加 ExposeHeader 配置。[cos文档](https://cloud.tencent.com/document/product/436/8279)
     */
    ExposeHeaders?: Array<string>;
}
/**
 * DescribeAssetSystems返回参数结构体
 */
export interface DescribeAssetSystemsResponse {
    /**
     * 生成包支持的操作系统类型列表
     */
    AssetSupportSys?: Array<AssetSupportSys>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetAttributes返回参数结构体
 */
export interface DescribeFleetAttributesResponse {
    /**
     * 服务器舰队属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetAttributes: Array<FleetAttributes>;
    /**
     * 服务器舰队总数，最小值0
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetUploadCredentials返回参数结构体
 */
export interface GetUploadCredentialsResponse {
    /**
     * 上传文件授权信息Auth
     */
    BucketAuth?: string;
    /**
     * Bucket名字
     */
    BucketName?: string;
    /**
     * 生成包所在地域
     */
    AssetRegion?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttachCcnInstances请求参数结构体
 */
export interface AttachCcnInstancesRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId?: string;
    /**
     * 云联网账号 Uin
     */
    AccountId?: string;
    /**
     * 云联网 Id
     */
    CcnId?: string;
}
/**
 * 需要移除的安全组
 */
export interface InboundPermissionRevocations {
    /**
     * 起始端口号
     */
    FromPort?: number;
    /**
     * IP 端范围，CIDR 方式换分
     */
    IpRange?: string;
    /**
     * 协议类型：UDP或者TCP
     */
    Protocol?: string;
    /**
     * 终止端口号
     */
    ToPort?: number;
}
/**
 * DescribeAssets请求参数结构体
 */
export interface DescribeAssetsRequest {
    /**
     * 生成包支持的可部署 [地域列表](https://cloud.tencent.com/document/api/1165/42053#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)
     */
    AssetRegion: string;
    /**
     * 偏移，代表页数，与asset实际数量相关
     */
    Offset: number;
    /**
     * 前端界面每页显示的最大条数，不超过100
     */
    Limit: number;
    /**
     * 搜索条件，支持包ID或包名字过滤，该字段会逐步废弃，建议使用 Filters 字段
     */
    Filter?: string;
    /**
     * 资源过滤字段，可以按照资源名称、资源ID和标签进行过滤- 资源名称过滤    - Key: 固定字符串 "resource:name"    - Values: 资源名称数组（生成包当前仅支持单个名称的过滤）- 资源ID过滤    - Key: 固定字符串 "resource:resourceId"    - Values: 生成包ID数组（生成包当前仅支持单个生成包ID的过滤）- 标签过滤    - 通过标签键过滤        - Key: 固定字符串 "tag:key"        - Values 不传    - 通过标签键值过滤        - Key: 固定字符串 "tag:key-value"        - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"]
     */
    Filters?: Array<Filter>;
}
/**
 * SetServerWeight返回参数结构体
 */
export interface SetServerWeightResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 动态扩缩容配置
 */
export interface ScalingPolicy {
    /**
     * 服务部署ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId: string;
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 保留参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScalingAdjustment: string;
    /**
     * 保留参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScalingAdjustmentType: string;
    /**
     * 保留参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComparisonOperator: string;
    /**
     * 保留参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Threshold: string;
    /**
     * 保留参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EvaluationPeriods: string;
    /**
     * 保留参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricName: string;
    /**
     * 策略类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyType: string;
    /**
     * 基于规则的配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetConfiguration: TargetConfiguration;
}
/**
 * DescribeGameServerSessions请求参数结构体
 */
export interface DescribeGameServerSessionsRequest {
    /**
     * 别名ID
     */
    AliasId?: string;
    /**
     * 舰队ID
     */
    FleetId?: string;
    /**
     * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
     */
    GameServerSessionId?: string;
    /**
     * 单次查询记录数上限
     */
    Limit?: number;
    /**
     * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
     */
    NextToken?: string;
    /**
     * 游戏服务器会话状态(ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR)
     */
    StatusFilter?: string;
}
/**
 * GetUploadCredentials请求参数结构体
 */
export interface GetUploadCredentialsRequest {
    /**
     * 生成包所在地域，详见产品支持的 [地域列表](https://cloud.tencent.com/document/api/1165/42053#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)
     */
    AssetRegion: string;
    /**
     * 生成包的ZIP包名，例如：server.zip
     */
    BucketKey: string;
}
/**
 * DescribePlayerSessions请求参数结构体
 */
export interface DescribePlayerSessionsRequest {
    /**
     * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
     */
    GameServerSessionId?: string;
    /**
     * 单次查询记录数上限
     */
    Limit?: number;
    /**
     * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
     */
    NextToken?: string;
    /**
     * 玩家ID，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
     */
    PlayerId?: string;
    /**
     * 玩家会话ID，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
     */
    PlayerSessionId?: string;
    /**
     * 玩家会话状态（RESERVED,ACTIVE,COMPLETED,TIMEDOUT）
     */
    PlayerSessionStatusFilter?: string;
}
/**
 * DeleteAsset请求参数结构体
 */
export interface DeleteAssetRequest {
    /**
     * 生成包ID
     */
    AssetId: string;
}
/**
 * DescribeAssets返回参数结构体
 */
export interface DescribeAssetsResponse {
    /**
     * 生成包总数
     */
    TotalCount?: number;
    /**
     * 生成包列表
     */
    Assets?: Array<Asset>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetCapacity请求参数结构体
 */
export interface DescribeFleetCapacityRequest {
    /**
     * 服务器舰队ID列表
     */
    FleetIds: Array<string>;
    /**
     * 结果返回最大数量，最大值 100
     */
    Limit?: number;
    /**
     * 返回结果偏移，最小值 0
     */
    Offset?: number;
}
/**
 * DescribeCcnInstances请求参数结构体
 */
export interface DescribeCcnInstancesRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId?: string;
}
/**
 * DescribeFleetStatisticDetails返回参数结构体
 */
export interface DescribeFleetStatisticDetailsResponse {
    /**
     * 服务部署统计详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DetailList: Array<FleetStatisticDetail>;
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 统计时间类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeType: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTimerScalingPolicy请求参数结构体
 */
export interface DeleteTimerScalingPolicyRequest {
    /**
     * 定时器ID, 进行encode
     */
    TimerId?: string;
    /**
     * 扩缩容配置服务器舰队ID
     */
    FleetId?: string;
    /**
     * 定时器名称
     */
    TimerName?: string;
}
/**
 * JoinGameServerSession返回参数结构体
 */
export interface JoinGameServerSessionResponse {
    /**
     * 玩家会话
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerSession?: PlayerSession;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 上传Asset的临时证书
 */
export interface AssetCredentials {
    /**
     * 临时证书密钥ID
     */
    TmpSecretId: string;
    /**
     * 临时证书密钥Key
     */
    TmpSecretKey: string;
    /**
     * 临时证书Token
     */
    Token: string;
}
/**
 * DescribeFleetRelatedResources请求参数结构体
 */
export interface DescribeFleetRelatedResourcesRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
}
/**
 * DescribeGameServerSessionPlacement请求参数结构体
 */
export interface DescribeGameServerSessionPlacementRequest {
    /**
     * 游戏服务器会话放置的唯一标识符
     */
    PlacementId: string;
}
/**
 * 服务部署组目的集合
 */
export interface GameServerSessionQueueDestination {
    /**
     * 服务部署组目的的资源描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DestinationArn?: string;
    /**
     * 服务部署组目的的状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetStatus?: string;
}
/**
 * UpdateGameServerSessionQueue请求参数结构体
 */
export interface UpdateGameServerSessionQueueRequest {
    /**
     * 游戏服务器会话队列名字，长度1~128
     */
    Name: string;
    /**
     * 目的服务器舰队（可为别名）列表
     */
    Destinations?: Array<GameServerSessionQueueDestination>;
    /**
     * 延迟策略集合
     */
    PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
    /**
     * 超时时间
     */
    TimeoutInSeconds?: number;
}
/**
 * 服务部署组容量配置
 */
export interface FleetCapacity {
    /**
     * 服务部署 Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId: string;
    /**
     * 服务器类型，如S3.LARGE8,S2.LARGE8,S5.LARGE8等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType: string;
    /**
     * 服务器实例统计数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCounts: InstanceCounts;
    /**
     * 服务器伸缩容间隔，单位分钟，最小值3，最大值30，默认值10
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScalingInterval: number;
}
/**
 * SetServerWeight请求参数结构体
 */
export interface SetServerWeightRequest {
    /**
     * 服务器舰队ID
     */
    FleetId: string;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 权重，最小值0，最大值10，默认值5
     */
    Weight: number;
}
/**
 * GetGameServerSessionLogUrl返回参数结构体
 */
export interface GetGameServerSessionLogUrlResponse {
    /**
     * 日志下载URL，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreSignedUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateBucketAccelerateOpt请求参数结构体
 */
export interface UpdateBucketAccelerateOptRequest {
    /**
     * true为开启全球加速，false为关闭
     */
    Allowed: boolean;
}
/**
 * DeleteFleet返回参数结构体
 */
export interface DeleteFleetResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartGameServerSessionPlacement请求参数结构体
 */
export interface StartGameServerSessionPlacementRequest {
    /**
     * 开始部署游戏服务器会话的唯一标识符，最大值48个ASCII字符，模式：[a-zA-Z0-9-]+
     */
    PlacementId: string;
    /**
     * 游戏服务器会话队列名称
     */
    GameServerSessionQueueName: string;
    /**
     * 游戏服务器允许同时连接到游戏会话的最大玩家数量，最小值1，最大值为玩家会话最大限额
     */
    MaximumPlayerSessionCount: number;
    /**
     * 玩家游戏会话信息
     */
    DesiredPlayerSessions?: Array<DesiredPlayerSession>;
    /**
     * 玩家游戏会话属性
     */
    GameProperties?: Array<GameProperty>;
    /**
     * 游戏服务器会话数据，最大长度不超过4096个ASCII字符
     */
    GameServerSessionData?: string;
    /**
     * 游戏服务器会话名称，最大长度不超过4096个ASCII字符
     */
    GameServerSessionName?: string;
    /**
     * 玩家延迟
     */
    PlayerLatencies?: Array<PlayerLatency>;
}
/**
 * 服务器实例类型信息
 */
export interface InstanceTypeInfo {
    /**
     * 类型名，例如“标准型SA1”
     */
    TypeName: string;
    /**
     * 类型，例如"SA1.SMALL1"
     */
    InstanceType: string;
    /**
     * CPU，例如1核就是1
     */
    Cpu: number;
    /**
     * 内存，例如2G就是2
     */
    Memory: number;
    /**
     * 网络收到包,例如25万PPS就是25
     */
    NetworkCard: number;
}
/**
 * DescribeGameServerSessionPlacement返回参数结构体
 */
export interface DescribeGameServerSessionPlacementResponse {
    /**
     * 游戏服务器会话放置
     */
    GameServerSessionPlacement?: GameServerSessionPlacement;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateRuntimeConfiguration返回参数结构体
 */
export interface UpdateRuntimeConfigurationResponse {
    /**
     * 服务器舰队配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeConfiguration?: RuntimeConfiguration;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAlias返回参数结构体
 */
export interface CreateAliasResponse {
    /**
     * 别名对象
     */
    Alias?: Alias;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资源创建规则
 */
export interface ResourceCreationLimitPolicy {
    /**
     * 创建数量，最小值1，默认2
     */
    NewGameServerSessionsPerCreator?: number;
    /**
     * 单位时间，最小值1，默认3，单位分钟
     */
    PolicyPeriodInMinutes?: number;
}
/**
 * ListFleets请求参数结构体
 */
export interface ListFleetsRequest {
    /**
     * 生成包 Id
     */
    AssetId?: string;
    /**
     * 结果返回最大值，暂未使用
     */
    Limit?: number;
    /**
     * 结果返回偏移，暂未使用
     */
    Offset?: number;
    /**
     * 资源过滤字段，可以按照资源名称和标签进行过滤- 资源名称过滤    - Key: 固定字符串 "resource:name"    - Values: 资源名称数组（当前仅支持单个名称的过滤）- 标签过滤    - 通过标签键过滤        - Key: 固定字符串 "tag:key"        - Values 不传    - 通过标签键值过滤        - Key: 固定字符串 "tag:key-value"        - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"]
     */
    Filters?: Array<Filter>;
}
/**
 * UpdateFleetAttributes请求参数结构体
 */
export interface UpdateFleetAttributesRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
    /**
     * 服务器舰队描述，最小长度0，最大长度100
     */
    Description?: string;
    /**
     * 服务器舰队名称，最小长度1，最大长度50
     */
    Name?: string;
    /**
     * 保护策略：不保护NoProtection、完全保护FullProtection、时限保护TimeLimitProtection
     */
    NewGameSessionProtectionPolicy?: string;
    /**
     * 资源创建限制策略
     */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    /**
     * 时限保护超时时间，默认60分钟，最小值5，最大值1440；当NewGameSessionProtectionPolicy为TimeLimitProtection时参数有效
     */
    GameServerSessionProtectionTimeLimit?: number;
}
/**
 * 实例类型限额配置额外信息
 */
export interface ExtraInfos {
    /**
     * 实例类型，例如S5.LARGE8
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType: string;
    /**
     * 实例限额数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalInstances: number;
}
/**
 * AttachCcnInstances返回参数结构体
 */
export interface AttachCcnInstancesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetPortSettings请求参数结构体
 */
export interface DescribeFleetPortSettingsRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
}
/**
 * StopFleetActions返回参数结构体
 */
export interface StopFleetActionsResponse {
    /**
     * 服务器舰队 Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAlias返回参数结构体
 */
export interface DeleteAliasResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteScalingPolicy请求参数结构体
 */
export interface DeleteScalingPolicyRequest {
    /**
     * 服务器舰队ID
     */
    FleetId: string;
    /**
     * 扩缩容策略名称，最小长度为0，最大长度为1024
     */
    Name?: string;
}
/**
 * DescribeAlias返回参数结构体
 */
export interface DescribeAliasResponse {
    /**
     * 别名对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: Alias;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopFleetActions请求参数结构体
 */
export interface StopFleetActionsRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
    /**
     * 服务器舰队扩展策略，值为["AUTO_SCALING"]
     */
    Actions?: Array<string>;
}
/**
 * 实例信息
 */
export interface Instance {
    /**
     * 服务部署ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId: string;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId: string;
    /**
     * IP地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IpAddress: string;
    /**
     * dns
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DnsName: string;
    /**
     * 操作系统
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatingSystem: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 实例权重
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Weight: number;
    /**
     * 实例是否保留, 1-保留，0-不保留,默认
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReserveValue: number;
    /**
     * 实例的私有IP地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrivateIpAddress: string;
}
/**
 * SearchGameServerSessions请求参数结构体
 */
export interface SearchGameServerSessionsRequest {
    /**
     * 别名ID
     */
    AliasId?: string;
    /**
     * 舰队ID
     */
    FleetId?: string;
    /**
     * 单次查询记录数上限
     */
    Limit?: number;
    /**
     * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
     */
    NextToken?: string;
    /**
     * 搜索条件表达式，支持如下变量
  gameServerSessionName 游戏会话名称 String
  gameServerSessionId 游戏会话ID String
  maximumSessions 最大的玩家会话数 Number
  creationTimeMillis 创建时间，单位：毫秒 Number
  playerSessionCount 当前玩家会话数 Number
  hasAvailablePlayerSessions 是否有可用玩家数 String 取值true或false
  gameServerSessionProperties 游戏会话属性 String
  
  表达式String类型 等于=，不等于<>判断
  表示Number类型支持 =,<>,>,>=,<,<=
  
  例如：
  FilterExpression取值
  playerSessionCount>=2 AND hasAvailablePlayerSessions=true"
  表示查找至少有两个玩家，而且有可用玩家会话的游戏会话。
  FilterExpression取值
  gameServerSessionProperties.K1 = 'V1' AND gameServerSessionProperties.K2 = 'V2' OR gameServerSessionProperties.K3 = 'V3'
  
  表示
  查询满足如下游戏服务器会话属性的游戏会话
  {
      "GameProperties":[
          {
              "Key":"K1",
              "Value":"V1"
          },
          {
              "Key":"K2",
              "Value":"V2"
          },
          {
              "Key":"K3",
              "Value":"V3"
          }
      ]
  }
     */
    FilterExpression?: string;
    /**
     * 排序条件关键字
  支持排序字段
  gameServerSessionName 游戏会话名称 String
  gameServerSessionId 游戏会话ID String
  maximumSessions 最大的玩家会话数 Number
  creationTimeMillis 创建时间，单位：毫秒 Number
  playerSessionCount 当前玩家会话数 Number
     */
    SortExpression?: string;
}
/**
 * DescribePlayerSessions返回参数结构体
 */
export interface DescribePlayerSessionsResponse {
    /**
     * 玩家会话列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerSessions?: Array<PlayerSession>;
    /**
     * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextToken?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserQuota请求参数结构体
 */
export interface DescribeUserQuotaRequest {
    /**
     * 资源类型
     */
    ResourceType?: number;
}
/**
 * DescribeInstanceLimit请求参数结构体
 */
export declare type DescribeInstanceLimitRequest = null;
/**
 * CreateGameServerSessionQueue返回参数结构体
 */
export interface CreateGameServerSessionQueueResponse {
    /**
     * 游戏服务器会话队列
     */
    GameServerSessionQueue: GameServerSessionQueue;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceTypes请求参数结构体
 */
export declare type DescribeInstanceTypesRequest = null;
/**
 * 玩家延迟信息
 */
export interface PlayerLatency {
    /**
     * 玩家Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerId?: string;
    /**
     * 延迟对应的区域名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionIdentifier?: string;
    /**
     * 毫秒级延迟
     */
    LatencyInMilliseconds?: number;
}
/**
 * SetServerReserved返回参数结构体
 */
export interface SetServerReservedResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopGameServerSessionPlacement请求参数结构体
 */
export interface StopGameServerSessionPlacementRequest {
    /**
     * 游戏服务器会话放置的唯一标识符
     */
    PlacementId: string;
}
/**
 * UpdateFleetName返回参数结构体
 */
export interface UpdateFleetNameResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 定时器弹性伸缩策略
 */
export interface TimerFleetCapacity {
    /**
     * 扩缩容配置服务器舰队ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId?: string;
    /**
     * 期望实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DesiredInstances?: number;
    /**
     * 最小实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinSize?: number;
    /**
     * 最大实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxSize?: number;
    /**
     * 伸缩容间隔，单位：分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScalingInterval?: number;
    /**
     * 扩缩容类型（手动1，自动2、未定义0）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScalingType?: number;
    /**
     * 基于目标的扩展策略的设置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetConfiguration?: TargetConfiguration;
}
/**
 * DescribeAlias请求参数结构体
 */
export interface DescribeAliasRequest {
    /**
     * 要检索的队列别名的唯一标识符
     */
    AliasId: string;
}
/**
 * CreateAlias请求参数结构体
 */
export interface CreateAliasRequest {
    /**
     * 名字，长度不小于1字符不超过1024字符
     */
    Name: string;
    /**
     * 别名的路由配置
     */
    RoutingStrategy: RoutingStrategy;
    /**
     * 别名的可读说明，长度不小于1字符不超过1024字符
     */
    Description?: string;
    /**
     * 标签列表，最大长度50组
     */
    Tags?: Array<Tag>;
}
/**
 * 定时器取值配置
 */
export interface TimerValue {
    /**
     * 每X天，执行一次(重复周期-按天/单次)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Day?: number;
    /**
     * 每月从第x天，执行一次(重复周期-按月)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FromDay?: number;
    /**
     * 每月到第x天，执行一次(重复周期-按月)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ToDay?: number;
    /**
     * 重复周期-按周，周几（多个值,取值周一(1,2,3,4,5,6,7)周日）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeekDays?: Array<number | bigint>;
}
/**
 * CopyFleet返回参数结构体
 */
export interface CopyFleetResponse {
    /**
     * 服务器舰队属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetAttributes: Array<FleetAttributes>;
    /**
     * 服务器舰队数量
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateGameServerSession请求参数结构体
 */
export interface UpdateGameServerSessionRequest {
    /**
     * 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符
     */
    GameServerSessionId: string;
    /**
     * 最大玩家数量，最小值不小于0
     */
    MaximumPlayerSessionCount?: number;
    /**
     * 游戏服务器会话名称，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
     */
    Name?: string;
    /**
     * 玩家会话创建策略，包括允许所有玩家加入和禁止所有玩家加入（ACCEPT_ALL,DENY_ALL）
     */
    PlayerSessionCreationPolicy?: string;
    /**
     * 保护策略，包括不保护、时限保护和完全保护(NoProtection,TimeLimitProtection,FullProtection)
     */
    ProtectionPolicy?: string;
}
/**
 * ListAliases请求参数结构体
 */
export interface ListAliasesRequest {
    /**
     * 名字，长度不小于1字符不超过1024字符
     */
    Name?: string;
    /**
     * 路由策略类型，有效值常规别名(SIMPLE)、终止别名(TERMINAL)
     */
    RoutingStrategyType?: string;
    /**
     * 要返回的最大结果数，最小值1
     */
    Limit?: number;
    /**
     * 偏移，默认0
     */
    Offset?: number;
    /**
     * 排序字段，例如CreationTime
     */
    OrderBy?: string;
    /**
     * 排序方式，有效值asc|desc
     */
    OrderWay?: string;
    /**
     * 资源过滤字段，可以按照资源名称和标签进行过滤- 资源名称过滤    - Key: 固定字符串 "resource:name"    - Values: 资源名称数组（舰队当前仅支持单个名称的过滤）- 标签过滤    - 通过标签键过滤        - Key: 固定字符串 "tag:key"        - Values 不传    - 通过标签键值过滤        - Key: 固定字符串 "tag:key-value"        - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"]
     */
    Filters?: Array<Filter>;
}
/**
 * CreateAsset请求参数结构体
 */
export interface CreateAssetRequest {
    /**
     * 生成包的ZIP包名，例如：server.zip
     */
    BucketKey: string;
    /**
     * 生成包名字，最小长度为1，最大长度为64
     */
    AssetName: string;
    /**
     * 生成包版本，最小长度为1，最大长度为64
     */
    AssetVersion: string;
    /**
     * 生成包所在地域，详见产品支持的 [地域列表](https://cloud.tencent.com/document/api/1165/42053#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)
     */
    AssetRegion: string;
    /**
     * 生成包可运行的操作系统，若传入参数为CentOS7.16则不需要传入ImageId字段，否则，需要传入Imageid字段（该方式是为了兼容之前的版本，后续建议使用ImageId来替代该字段）。这里可通过[DescribeAssetSystems](https://cloud.tencent.com/document/product/1165/49191)接口获取asset支持的操作系统进行传入（使用AssetSupportSys的OsVersion字段）
     */
    OperateSystem: string;
    /**
     * 生成包支持的操作系统镜像id，若传入OperateSystem字段的值是CentOS7.16，则不需要传入该值；如果不是，则需要通过[DescribeAssetSystems](https://cloud.tencent.com/document/product/1165/49191)接口获取asset支持的操作系统ImageId进行传入
     */
    ImageId?: string;
    /**
     * 标签列表，最大长度50组
     */
    Tags?: Array<Tag>;
}
/**
 * DescribeGameServerSessionDetails返回参数结构体
 */
export interface DescribeGameServerSessionDetailsResponse {
    /**
     * 游戏服务器会话详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessionDetails?: Array<GameServerSessionDetail>;
    /**
     * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextToken?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 访问实例所需要的凭据
 */
export interface Credentials {
    /**
     * ssh私钥
     */
    Secret: string;
    /**
     * 用户名
     */
    UserName: string;
}
/**
 * GetGameServerSessionLogUrl请求参数结构体
 */
export interface GetGameServerSessionLogUrlRequest {
    /**
     * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
     */
    GameServerSessionId: string;
}
/**
 * 用于新增安全组
 */
export interface InboundPermissionAuthorization {
    /**
     * 起始端口号
     */
    FromPort?: number;
    /**
     * IP 端范围，CIDR方式划分
     */
    IpRange?: string;
    /**
     * 协议类型
     */
    Protocol?: string;
    /**
     * 终止端口号
     */
    ToPort?: number;
}
/**
 * CreateGameServerSession返回参数结构体
 */
export interface CreateGameServerSessionResponse {
    /**
     * 游戏服务器会话
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSession?: GameServerSession;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 服务器舰队ID
     */
    FleetId?: string;
    /**
     * CVM实例ID
     */
    InstanceId?: string;
    /**
     * 结果返回最大数量，最小值0，最大值100
     */
    Offset?: number;
    /**
     * 返回结果偏移，最小值0
     */
    Limit?: number;
    /**
     * CVM实例公网IP
     */
    IpAddress?: string;
}
/**
 * 配额资源
 */
export interface QuotaResource {
    /**
     * 资源类型，1生成包、2服务部署、3别名、4游戏服务器队列、5实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType: number;
    /**
     * 总额度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HardLimit: number;
    /**
     * 剩余额度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remaining: number;
    /**
     * 额外信息，可能为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInfo: string;
}
/**
 * DescribeFleetStatisticFlows返回参数结构体
 */
export interface DescribeFleetStatisticFlowsResponse {
    /**
     * 流量统计列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedFlowList: Array<FleetStatisticFlows>;
    /**
     * 时长统计列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedTimeList: Array<FleetStatisticTimes>;
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 统计时间类型，取值：小时和天
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeType: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 磁盘存储信息
 */
export interface DiskInfo {
    /**
     * 磁盘类型，支持：高性能云硬盘（CLOUD_PREMIUM）、SSD云硬盘（CLOUD_SSD）
     */
    DiskType: string;
    /**
     * 系统盘：可选硬盘容量，50-500GB，数字以1为单位，数据盘：可选硬盘容量：10-32000GB，数字以10为单位；当磁盘类型为SSD云硬盘（CLOUD_SSD）最小大小为 100GB
     */
    DiskSize: number;
}
/**
 * 重复周期配置
 */
export interface TimerConfiguration {
    /**
     * 定时器重复周期类型（未定义0，单次1、按天2、按月3、按周4）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimerType?: number;
    /**
     * 定时器取值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimerValue?: TimerValue;
    /**
     * 定时器开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime?: string;
    /**
     * 定时器结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
}
/**
 * CreateFleet返回参数结构体
 */
export interface CreateFleetResponse {
    /**
     * 服务器舰队属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetAttributes: FleetAttributes;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 过滤字段内容
 */
export interface Filter {
    /**
     * 过滤属性的 key
     */
    Key?: string;
    /**
     * 过滤属性的 values 值
     */
    Values?: Array<string>;
}
/**
 * UpdateFleetAttributes返回参数结构体
 */
export interface UpdateFleetAttributesResponse {
    /**
     * 服务器舰队Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetUtilization请求参数结构体
 */
export interface DescribeFleetUtilizationRequest {
    /**
     * 服务器舰队 Ids
     */
    FleetIds: Array<string>;
}
/**
 * DescribeInstanceTypes返回参数结构体
 */
export interface DescribeInstanceTypesResponse {
    /**
     * 服务器实例类型列表
     */
    InstanceTypeList?: Array<InstanceTypeInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartFleetActions返回参数结构体
 */
export interface StartFleetActionsResponse {
    /**
     * 服务器舰队 Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGameServerSessionDetails请求参数结构体
 */
export interface DescribeGameServerSessionDetailsRequest {
    /**
     * 别名ID
     */
    AliasId?: string;
    /**
     * 舰队ID
     */
    FleetId?: string;
    /**
     * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
     */
    GameServerSessionId?: string;
    /**
     * 单次查询记录数上限
     */
    Limit?: number;
    /**
     * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
     */
    NextToken?: string;
    /**
     * 游戏服务器会话状态(ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR)
     */
    StatusFilter?: string;
}
/**
 * 游戏会话详情
 */
export interface GameServerSession {
    /**
     * 游戏服务器会话创建时间
     */
    CreationTime: string;
    /**
     * 创建者ID，最大长度不超过1024个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatorId: string;
    /**
     * 当前玩家数量，最小值不小于0
     */
    CurrentPlayerSessionCount: number;
    /**
     * CVM的DNS标识符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DnsName: string;
    /**
     * 舰队ID
     */
    FleetId: string;
    /**
     * 游戏属性，最大长度不超过16组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameProperties: Array<GameProperty>;
    /**
     * 游戏服务器会话属性详情，最大长度不超过4096个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessionData: string;
    /**
     * 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符
     */
    GameServerSessionId: string;
    /**
     * CVM IP地址
     */
    IpAddress: string;
    /**
     * 对战进程详情，最大长度不超过400000个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MatchmakerData: string;
    /**
     * 最大玩家数量，最小值不小于0
     */
    MaximumPlayerSessionCount: number;
    /**
     * 游戏服务器会话名称，最大长度不超过1024个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 玩家会话创建策略（ACCEPT_ALL,DENY_ALL）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerSessionCreationPolicy: string;
    /**
     * 端口号，最小值不小于1，最大值不超过60000
     */
    Port: number;
    /**
     * 游戏服务器会话状态（ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR）
     */
    Status: string;
    /**
     * 游戏服务器会话状态附加信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusReason: string;
    /**
     * 终止的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerminationTime: string;
    /**
     * 实例类型，最大长度不超过128个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType: string;
    /**
     * 当前自定义数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentCustomCount: number;
    /**
     * 最大自定义数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxCustomCount: number;
    /**
     * 权重
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Weight: number;
    /**
     * 会话可用性状态，是否被屏蔽（Enable,Disable）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvailabilityStatus: string;
}
/**
 * 延迟策略
 */
export interface PlayerLatencyPolicy {
    /**
     * 任意player允许的最大延迟，单位：毫秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaximumIndividualPlayerLatencyMilliseconds: number;
    /**
     * 放置新GameServerSession时强制实施策略的时间长度，单位：秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyDurationSeconds?: number;
}
/**
 * 与服务器舰队关联的资源，如别名和队列
 */
export interface FleetRelatedResource {
    /**
     * 资源类型。
  - ALIAS：别名
  - QUEUE：队列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 资源ID，目前仅支持别名ID和队列名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId: string;
    /**
     * 资源所在区域，如ap-shanghai、na-siliconvalley等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceRegion: string;
}
/**
 * UpdateRuntimeConfiguration请求参数结构体
 */
export interface UpdateRuntimeConfigurationRequest {
    /**
     * 服务器舰队Id
     */
    FleetId: string;
    /**
     * 服务器舰队配置
     */
    RuntimeConfiguration?: RuntimeConfiguration;
}
/**
 * EndGameServerSessionAndProcess请求参数结构体
 */
export interface EndGameServerSessionAndProcessRequest {
    /**
     * 游戏服务器会话ID，如果传入游戏服务器会话ID，结束对应进程以及游戏服务器会话和玩家会话。
     */
    GameServerSessionId?: string;
    /**
     * CVM的公网IP地址，需同时传入IpAddress和Port，结束IpAddress和Port对应的进程以及游戏服务器会话（如果存在）和玩家会话（如果存在），单独传入IpAddress不生效。
     */
    IpAddress?: string;
    /**
     * 端口号，取值范围1025-60000，需同时传入IpAddress和Port，结束IpAddress和Port对应的进程以及游戏服务器会话（如果存在）和玩家会话（如果存在），单独传入Port不生效。
     */
    Port?: number;
}
/**
 * 游戏属性详情
 */
export interface GameProperty {
    /**
     * 属性名称，最大长度不超过32个ASCII字符
     */
    Key: string;
    /**
     * 属性值，最大长度不超过96个ASCII字符
     */
    Value: string;
}
/**
 * CreateAssetWithImage返回参数结构体
 */
export interface CreateAssetWithImageResponse {
    /**
     * 生成包ID
     */
    AssetId?: string;
    /**
     * 生成包的全局唯一资源标识符
     */
    AssetArn?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 舰队统计总时长
 */
export interface FleetStatisticTimes {
    /**
     * 统计开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime: string;
    /**
     * 统计总时长，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalUsedTimeSeconds: string;
}
/**
 * 舰队统计流量
 */
export interface FleetStatisticFlows {
    /**
     * 总流量，单位MB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalUsedFlowMegaBytes: number;
    /**
     * 统计开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime: string;
}
/**
 * DescribeAsset请求参数结构体
 */
export interface DescribeAssetRequest {
    /**
     * 生成包ID
     */
    AssetId: string;
}
/**
 * DescribeInstancesExtend请求参数结构体
 */
export interface DescribeInstancesExtendRequest {
    /**
     * 服务器舰队ID
     */
    FleetId: string;
    /**
     * 返回结果偏移，最小值0
     */
    Offset: number;
    /**
     * 结果返回最大数量，最小值0，最大值100
     */
    Limit: number;
    /**
     * CVM实例公网IP
     */
    IpAddress?: string;
}
/**
 * DescribeGameServerSessions返回参数结构体
 */
export interface DescribeGameServerSessionsResponse {
    /**
     * 游戏服务器会话列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessions?: Array<GameServerSession>;
    /**
     * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextToken?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 服务器实例统计数据
 */
export interface InstanceCounts {
    /**
     * 活跃的服务器实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Active: number;
    /**
     * 期望的服务器实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Desired: number;
    /**
     * 空闲的服务器实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Idle: number;
    /**
     * 服务器实例数最大限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxiNum: number;
    /**
     * 服务器实例数最小限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MiniNum: number;
    /**
     * 已开始创建，但未激活的服务器实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Pending: number;
    /**
     * 结束中的服务器实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Terminating: number;
}
/**
 * UpdateBucketAccelerateOpt返回参数结构体
 */
export interface UpdateBucketAccelerateOptResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * JoinGameServerSession请求参数结构体
 */
export interface JoinGameServerSessionRequest {
    /**
     * 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符
     */
    GameServerSessionId: string;
    /**
     * 玩家ID，最大长度1024个ASCII字符
     */
    PlayerId: string;
    /**
     * 玩家自定义数据，最大长度2048个ASCII字符
     */
    PlayerData?: string;
}
/**
 * DescribeUserQuotas返回参数结构体
 */
export interface DescribeUserQuotasResponse {
    /**
     * 配额信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QuotaResource?: Array<QuotaResource>;
    /**
     * 配额信息列表总数，最小值0
     */
    Total?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetUploadFederationToken请求参数结构体
 */
export declare type GetUploadFederationTokenRequest = null;
/**
 * DescribeTimerScalingPolicies返回参数结构体
 */
export interface DescribeTimerScalingPoliciesResponse {
    /**
     * 定时器扩缩容策略配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimerScalingPolicies: Array<TimerScalingPolicy>;
    /**
     * 定时器总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CopyFleet请求参数结构体
 */
export interface CopyFleetRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
    /**
     * 复制数量，最小值1，最大值为剩余配额，可以根据[获取用户配额](https://cloud.tencent.com/document/product/1165/48732)接口获取。
     */
    CopyNumber: number;
    /**
     * 生成包 Id
     */
    AssetId?: string;
    /**
     * 描述，最小长度0，最大长度100
     */
    Description?: string;
    /**
     * 网络配置
     */
    InboundPermissions?: Array<InboundPermission>;
    /**
     * 服务器类型，参数根据[获取服务器实例类型列表](https://cloud.tencent.com/document/product/1165/48732)接口获取。
     */
    InstanceType?: string;
    /**
     * 服务器舰队类型，目前只支持ON_DEMAND类型
     */
    FleetType?: string;
    /**
     * 服务器舰队名称，最小长度1，最大长度50
     */
    Name?: string;
    /**
     * 保护策略：不保护NoProtection、完全保护FullProtection、时限保护TimeLimitProtection
     */
    NewGameServerSessionProtectionPolicy?: string;
    /**
     * 资源创建限制策略
     */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
    /**
     * 进程配置
     */
    RuntimeConfiguration?: RuntimeConfiguration;
    /**
     * 时限保护超时时间，默认60分钟，最小值5，最大值1440；当NewGameSessionProtectionPolicy为TimeLimitProtection时参数有效
     */
    GameServerSessionProtectionTimeLimit?: number;
    /**
     * 是否选择扩缩容：SCALING_SELECTED 或者 SCALING_UNSELECTED；默认是 SCALING_UNSELECTED
     */
    SelectedScalingType?: string;
    /**
     * 是否选择云联网：CCN_SELECTED_BEFORE_CREATE（创建前关联）， CCN_SELECTED_AFTER_CREATE（创建后关联）或者 CCN_UNSELECTED（不关联）；默认是 CCN_UNSELECTED
     */
    SelectedCcnType?: string;
    /**
     * 标签列表，最大长度50组
     */
    Tags?: Array<Tag>;
    /**
     * 系统盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-500GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，50-500GB；容量以1为单位
     */
    SystemDiskInfo?: DiskInfo;
    /**
     * 数据盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-32000GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，10-32000GB；容量以10为单位
     */
    DataDiskInfo?: Array<DiskInfo>;
    /**
     * 是否选择复制定时器策略：TIMER_SELECTED 或者 TIMER_UNSELECTED；默认是 TIMER_UNSELECTED
     */
    SelectedTimerType?: string;
    /**
     * 云联网信息，包含对应的账号信息及所属id
     */
    CcnInfos?: Array<CcnInfo>;
    /**
     * fleet公网出带宽最大值，默认100Mbps，范围1-200Mbps
     */
    InternetMaxBandwidthOut?: number;
}
/**
 * EndGameServerSessionAndProcess返回参数结构体
 */
export interface EndGameServerSessionAndProcessResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchGameServerSessions返回参数结构体
 */
export interface SearchGameServerSessionsResponse {
    /**
     * 游戏服务器会话列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameServerSessions?: Array<GameServerSession>;
    /**
     * 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextToken?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PutTimerScalingPolicy返回参数结构体
 */
export interface PutTimerScalingPolicyResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetEvents返回参数结构体
 */
export interface DescribeFleetEventsResponse {
    /**
     * 返回的事件列表
     */
    Events: Array<Event>;
    /**
     * 返回的事件总数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 路由策略
 */
export interface RoutingStrategy {
    /**
     * 别名的路由策略的类型，有效值常规别名(SIMPLE)、终止别名(TERMINAL)
     */
    Type: string;
    /**
     * 别名指向的队列的唯一标识符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId?: string;
    /**
     * 与终端路由策略一起使用的消息文本，长度不小于1字符不超过1024字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
}
/**
 * GetGameServerInstanceLogUrl请求参数结构体
 */
export interface GetGameServerInstanceLogUrlRequest {
    /**
     * 游戏舰队ID
     */
    FleetId: string;
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 实例IP
     */
    ServerIp?: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 每次条数
     */
    Size?: number;
}
/**
 * DescribeFleetCapacity返回参数结构体
 */
export interface DescribeFleetCapacityResponse {
    /**
     * 服务器舰队的容量配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetCapacity: Array<FleetCapacity>;
    /**
     * 结果返回最大数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserQuota返回参数结构体
 */
export interface DescribeUserQuotaResponse {
    /**
     * 配额资源信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QuotaResource?: QuotaResource;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetEvents请求参数结构体
 */
export interface DescribeFleetEventsRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
    /**
     * 分页时返回服务器舰队事件的数量，默认为20，最大值为100
     */
    Limit?: number;
    /**
     * 分页时的数据偏移量，默认为0
     */
    Offset?: number;
    /**
     * 事件代码
     */
    EventCode?: string;
    /**
     * 发生事件的开始时间
     */
    StartTime?: string;
    /**
     * 发生事件的结束时间
     */
    EndTime?: string;
}
/**
 * UpdateAsset返回参数结构体
 */
export interface UpdateAssetResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAssetWithImage请求参数结构体
 */
export interface CreateAssetWithImageRequest {
    /**
     * 生成包名字，最小长度为1，最大长度为64
     */
    AssetName: string;
    /**
     * 生成包版本，最小长度为1，最大长度为64
     */
    AssetVersion: string;
    /**
     * 生成包所在地域，详见产品支持的 [地域列表](https://cloud.tencent.com/document/api/1165/42053#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)
     */
    AssetRegion: string;
    /**
     * 生成包支持的操作系统镜像id
     */
    ImageId: string;
    /**
     * 操作系统镜像包大小，比如：40GB，支持单位 KB、MB、GB
     */
    ImageSize: string;
    /**
     * 操作系统镜像包名称，最小长度为1，最大长度为64
     */
    ImageOs: string;
    /**
     * 操作系统镜像包类型，CentOS 或者 Windows
     */
    OsType: string;
    /**
     * 操作系统镜像包类型，当前只支持 SHARED_IMAGE
     */
    ImageType: string;
    /**
     * 操作系统镜像包位数，32 或者 64
     */
    OsBit: number;
}
/**
 * 玩家会话详情
 */
export interface PlayerSession {
    /**
     * 玩家会话创建时间
     */
    CreationTime: string;
    /**
     * 游戏服务器会话运行的DNS标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DnsName: string;
    /**
     * 舰队ID
     */
    FleetId: string;
    /**
     * 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符
     */
    GameServerSessionId: string;
    /**
     * 游戏服务器会话运行的CVM地址
     */
    IpAddress: string;
    /**
     * 玩家自定义数据，最大长度2048个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerData: string;
    /**
     * 玩家ID，最大长度1024个ASCII字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerId: string;
    /**
     * 玩家会话ID
     */
    PlayerSessionId: string;
    /**
     * 端口号，最小值不小于1，最大值不超过60000
     */
    Port: number;
    /**
     * 玩家会话的状态（RESERVED = 1,ACTIVE = 2,COMPLETED = 3,TIMEDOUT = 4）
     */
    Status: string;
    /**
     * 玩家会话终止时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerminationTime: string;
}
/**
 * PutScalingPolicy返回参数结构体
 */
export interface PutScalingPolicyResponse {
    /**
     * 规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateGameServerSessionQueue请求参数结构体
 */
export interface CreateGameServerSessionQueueRequest {
    /**
     * 游戏服务器会话队列名称，长度1~128
     */
    Name: string;
    /**
     * 目的服务器舰队（可为别名）列表
     */
    Destinations?: Array<GameServerSessionQueueDestination>;
    /**
     * 延迟策略集合
     */
    PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
    /**
     * 超时时间（单位秒，默认值为600秒）
     */
    TimeoutInSeconds?: number;
    /**
     * 标签列表，最大长度50组
     */
    Tags?: Array<Tag>;
}
/**
 * UpdateFleetName请求参数结构体
 */
export interface UpdateFleetNameRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
    /**
     * 服务器舰队名称，最小长度1，最大长度50
     */
    Name: string;
}
/**
 * 别名对象
 */
export interface Alias {
    /**
     * 别名的唯一标识符
     */
    AliasId: string;
    /**
     * 别名的全局唯一资源标识符
     */
    AliasArn: string;
    /**
     * 名字，长度不小于1字符不超过1024字符
     */
    Name: string;
    /**
     * 别名的可读说明，长度不小于1字符不超过1024字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 别名的路由配置
     */
    RoutingStrategy: RoutingStrategy;
    /**
     * 创建时间
     */
    CreationTime: string;
    /**
     * 上次修改此数据对象的时间
     */
    LastUpdatedTime: string;
    /**
     * 标签列表，最大长度50组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<Tag>;
}
/**
 * DescribeRuntimeConfiguration请求参数结构体
 */
export interface DescribeRuntimeConfigurationRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId: string;
}
/**
 * 运行配置
 */
export interface RuntimeConfiguration {
    /**
     * 游戏会话进程超时，最小值1，最大值600，单位秒
     */
    GameServerSessionActivationTimeoutSeconds?: number;
    /**
     * 最大游戏会话数，最小值1，最大值2147483647
     */
    MaxConcurrentGameServerSessionActivations?: number;
    /**
     * 服务进程配置，至少有一个进程配置
     */
    ServerProcesses?: Array<ServerProcesse>;
}
/**
 * DescribeScalingPolicies返回参数结构体
 */
export interface DescribeScalingPoliciesResponse {
    /**
     * 动态扩缩容配置策略数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScalingPolicies?: Array<ScalingPolicy>;
    /**
     * 动态扩缩容配置策略总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DetachCcnInstances请求参数结构体
 */
export interface DetachCcnInstancesRequest {
    /**
     * 服务器舰队 Id
     */
    FleetId?: string;
}
/**
 * 游戏服务进程
 */
export interface ServerProcesse {
    /**
     * 并发执行数量，所有进程并发执行总数最小值1，最大值50
     */
    ConcurrentExecutions?: number;
    /**
     * 启动路径：Linux路径/local/game/ 或WIndows路径C:\game\，最小长度1，最大长度1024
     */
    LaunchPath?: string;
    /**
     * 启动参数，最小长度0，最大长度1024
     */
    Parameters?: string;
}
/**
 * UpdateGameServerSession返回参数结构体
 */
export interface UpdateGameServerSessionResponse {
    /**
     * 更新后的游戏会话
     */
    GameServerSession?: GameServerSession;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例访问凭证信息
 */
export interface InstanceAccess {
    /**
     * 访问实例所需要的凭据
     */
    Credentials: Credentials;
    /**
     * 服务部署Id
     */
    FleetId: string;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 实例公网IP
     */
    IpAddress: string;
    /**
     * 操作系统
     */
    OperatingSystem: string;
}
/**
 * UpdateFleetCapacity请求参数结构体
 */
export interface UpdateFleetCapacityRequest {
    /**
     * 服务器舰队ID
     */
    FleetId: string;
    /**
     * 期望的服务器实例数
     */
    DesiredInstances?: number;
    /**
     * 服务器实例数最小限制，最小值0，最大值不超过最高配额查看各地区最高配额减1
     */
    MinSize?: number;
    /**
     * 服务器实例数最大限制，最小值1，最大值不超过最高配额查看各地区最高配额
     */
    MaxSize?: number;
    /**
     * 服务器伸缩容间隔，单位分钟，最小值3，最大值30，默认值10
     */
    ScalingInterval?: number;
}
/**
 * 舰队统计详情
 */
export interface FleetStatisticDetail {
    /**
     * 舰队ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FleetId: string;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId: string;
    /**
     * 实例IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceIP: string;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime: string;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
    /**
     * 总时长，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalUsedTimeSeconds: string;
    /**
     * 总流量，单位MB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalUsedFlowMegaBytes: number;
}
/**
 * 玩家游戏会话信息
 */
export interface DesiredPlayerSession {
    /**
     * 与玩家会话关联的唯一玩家标识
     */
    PlayerId: string;
    /**
     * 开发人员定义的玩家数据
     */
    PlayerData: string;
}
/**
 * JoinGameServerSessionBatch返回参数结构体
 */
export interface JoinGameServerSessionBatchResponse {
    /**
     * 玩家会话列表，最大25组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerSessions?: Array<PlayerSession>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetServerReserved请求参数结构体
 */
export interface SetServerReservedRequest {
    /**
     * 扩缩容配置服务器舰队ID
     */
    FleetId: string;
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 实例是否保留, 1-保留，0-不保留,默认
     */
    ReserveValue?: number;
}
/**
 * 实例扩展信息
 */
export interface InstanceExtend {
    /**
     * 实例信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Instance: Instance;
    /**
     * 实例状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State: string;
    /**
     * 健康进程数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthyProcessCnt: number;
    /**
     * 活跃进程数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActiveProcessCnt: number;
    /**
     * 当前游戏会话总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GameSessionCnt: number;
    /**
     * 最大游戏会话数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxGameSessionCnt: number;
    /**
     * 当前玩家会话数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlayerSessionCnt: number;
    /**
     * 最大玩家会话数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxPlayerSessionCnt: number;
}
/**
 * PutScalingPolicy请求参数结构体
 */
export interface PutScalingPolicyRequest {
    /**
     * 扩缩容配置服务器舰队ID
     */
    FleetId: string;
    /**
     * 扩缩容策略名称，最小长度为1，最大长度为1024
     */
    Name?: string;
    /**
     * 扩缩容调整值，ScalingAdjustmentType取值PercentChangeInCapacity时，取值范围-99~99
  ScalingAdjustmentType取值ChangeInCapacity或ExactCapacity时，最小值要缩容的最多CVM个数，最大值为实际最大的CVM个数限额
     */
    ScalingAdjustment?: number;
    /**
     * 扩缩容调整类型，取值（ChangeInCapacity，ExactCapacity，PercentChangeInCapacity）
     */
    ScalingAdjustmentType?: string;
    /**
     * 扩缩容指标阈值
     */
    Threshold?: number;
    /**
     * 扩缩容策略比较符，取值：>,>=,<,<=
     */
    ComparisonOperator?: string;
    /**
     * 单个策略持续时间长度（分钟）
     */
    EvaluationPeriods?: number;
    /**
     * 扩缩容参与计算的指标名称，PolicyType取值RuleBased，
  MetricName取值（AvailableGameServerSessions，AvailableCustomCount，PercentAvailableCustomCount，ActiveInstances，IdleInstances，CurrentPlayerSessions和PercentIdleInstances）；
  PolicyType取值TargetBased时，MetricName取值PercentAvailableGameSessions
     */
    MetricName?: string;
    /**
     * 策略类型，取值：TargetBased表示基于目标的策略；RuleBased表示基于规则的策略
     */
    PolicyType?: string;
    /**
     * 扩缩容目标值配置，只有TargetBased类型的策略生效
     */
    TargetConfiguration?: TargetConfiguration;
}
/**
 * StopGameServerSessionPlacement返回参数结构体
 */
export interface StopGameServerSessionPlacementResponse {
    /**
     * 游戏服务器会话放置
     */
    GameServerSessionPlacement?: GameServerSessionPlacement;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFleetStatisticFlows请求参数结构体
 */
export interface DescribeFleetStatisticFlowsRequest {
    /**
     * 服务器舰队ID
     */
    FleetId?: string;
    /**
     * 查询开始时间，时间格式：YYYY-MM-DD hh:mm:ss
     */
    BeginTime?: string;
    /**
     * 查询结束时间，时间格式：YYYY-MM-DD hh:mm:ss
     */
    EndTime?: string;
    /**
     * 结果返回最大数量，最小值0，最大值100
     */
    Limit?: number;
    /**
     * 返回结果偏移，最小值0
     */
    Offset?: number;
}
