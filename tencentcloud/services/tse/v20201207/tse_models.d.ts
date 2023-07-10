/**
 * DescribeNacosReplicas请求参数结构体
 */
export interface DescribeNacosReplicasRequest {
    /**
     * 引擎实例ID
     */
    InstanceId: string;
    /**
     * 副本列表Limit
     */
    Limit?: number;
    /**
     * 副本列表Offset
     */
    Offset?: number;
}
/**
 * CreateCloudNativeAPIGatewayService返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayServiceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCloudNativeAPIGatewayRouteRateLimit返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayRouteRateLimitResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Apollo 环境配置参数
 */
export interface ApolloEnvParam {
    /**
     * 环境名称
     */
    Name: string;
    /**
     * 环境内引擎的节点规格 ID
  -1C2G
  -2C4G
  兼容原spec-xxxxxx形式的规格ID
     */
    EngineResourceSpec: string;
    /**
     * 环境内引擎的节点数量
     */
    EngineNodeNum: number;
    /**
     * 配置存储空间大小，以GB为单位
     */
    StorageCapacity: number;
    /**
     * VPC ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址
     */
    VpcId: string;
    /**
     * 子网 ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址
     */
    SubnetId: string;
    /**
     * 环境描述
     */
    EnvDesc?: string;
}
/**
 * DescribeCloudNativeAPIGatewayServiceRateLimit请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayServiceRateLimitRequest {
    /**
     * 网关Id
     */
    GatewayId: string;
    /**
     * 服务名称，或服务ID。
     */
    Name: string;
}
/**
 * 含百分比流量配置的服务
 */
export interface CloudNativeAPIGatewayBalancedService {
    /**
     * 服务 ID，作为入参时，必填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceID?: string;
    /**
     * 服务名称，作为入参时，无意义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName?: string;
    /**
     * Upstream 名称，作为入参时，无意义
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamName?: string;
    /**
     * 百分比，10 即 10%，范围0-100
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Percent?: number;
}
/**
 * DescribeCloudNativeAPIGatewayNodes请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayNodesRequest {
    /**
     * 云原生API网关实例ID。
     */
    GatewayId: string;
    /**
     * 实例分组id
     */
    GroupId?: string;
    /**
     * 翻页获取多少个
     */
    Limit?: number;
    /**
     * 翻页从第几个开始获取
     */
    Offset?: number;
}
/**
 * ModifyCloudNativeAPIGatewayRoute请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayRouteRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 所属服务的ID
     */
    ServiceID: string;
    /**
     * 路由的ID，实例级别唯一
     */
    RouteID: string;
    /**
     * 路由的名字，实例级别唯一，可以不提供
     */
    RouteName?: string;
    /**
     * 路由的方法，其中方法可选值：
  - GET
  - POST
  - DELETE
  - PUT
  - OPTIONS
  - PATCH
  - HEAD
  - ANY
  - TRACE
  - COPY
  - MOVE
  - PROPFIND
  - PROPPATCH
  - MKCOL
  - LOCK
  - UNLOCK
     */
    Methods?: Array<string>;
    /**
     * 路由的域名
     */
    Hosts?: Array<string>;
    /**
     * 路由的路径
     */
    Paths?: Array<string>;
    /**
     * 路由的协议，可选
  - https
  - http
     */
    Protocols?: Array<string>;
    /**
     * 转发到后端时是否保留Host
     */
    PreserveHost?: boolean;
    /**
     * https重定向状态码
     */
    HttpsRedirectStatusCode?: number;
    /**
     * 转发到后端时是否StripPath
     */
    StripPath?: boolean;
    /**
     * 是否开启强制HTTPS
     * @deprecated
     */
    ForceHttps?: boolean;
    /**
     * 四层匹配的目的端口
     */
    DestinationPorts?: Array<number>;
    /**
     * 路由的Headers
     */
    Headers?: Array<KVMapping>;
}
/**
 * DescribeSREInstanceAccessAddress返回参数结构体
 */
export interface DescribeSREInstanceAccessAddressResponse {
    /**
     * 内网访问地址
     */
    IntranetAddress: string;
    /**
     * 公网访问地址
     */
    InternetAddress: string;
    /**
     * apollo多环境公网ip
     */
    EnvAddressInfos: Array<EnvAddressInfo>;
    /**
     * 控制台公网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsoleInternetAddress: string;
    /**
     * 控制台内网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsoleIntranetAddress: string;
    /**
     * 客户端公网带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetBandWidth: number;
    /**
     * 控制台公网带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsoleInternetBandWidth: number;
    /**
     * 北极星限流server节点接入IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LimiterAddressInfos: Array<PolarisLimiterAddress>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCloudNativeAPIGatewayCanaryRule请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayCanaryRuleRequest {
    /**
     * 网关 ID
     */
    GatewayId: string;
    /**
     * 服务 ID
     */
    ServiceId: string;
    /**
     * 优先级
     */
    Priority: number;
}
/**
 * DescribeCloudNativeAPIGatewayServices返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayServicesResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: KongServices;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 云原生网关限流插件Qps阈值
 */
export interface QpsThreshold {
    /**
     * qps阈值控制维度,包含:second、minute、hour、day、month、year
     */
    Unit: string;
    /**
     * 阈值
     */
    Max: number;
}
/**
 * ModifyCloudNativeAPIGatewayService返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayServiceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCloudNativeAPIGatewayNodes返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayNodesResponse {
    /**
     * 获取云原生网关节点列表结果。
     */
    Result: DescribeCloudNativeAPIGatewayNodesResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 私有网络信息
 */
export interface VpcInfo {
    /**
     * Vpc Id
     */
    VpcId: string;
    /**
     * 子网ID
     */
    SubnetId: string;
    /**
     * 内网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntranetAddress?: string;
}
/**
 * ModifyCloudNativeAPIGatewayCanaryRule返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayCanaryRuleResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 云原生网关服务预览信息
 */
export interface KongServicePreview {
    /**
     * 服务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ID: string;
    /**
     * 服务名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<string>;
    /**
     * 后端配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamInfo?: KongUpstreamInfo;
    /**
     * 后端类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamType?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * 是否可编辑
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Editable?: boolean;
}
/**
 * ModifyCloudNativeAPIGatewayRouteRateLimit请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayRouteRateLimitRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 路由id，或路由名称。
  不支持“未命名”
     */
    Id: string;
    /**
     * 限流配置
     */
    LimitDetail: CloudNativeAPIGatewayRateLimitDetail;
}
/**
 * nacos服务端接口列表，用于云监控
 */
export interface NacosServerInterface {
    /**
     * 接口名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Interface: string;
}
/**
 * CreateCloudNativeAPIGatewayService请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayServiceRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 服务名称
     */
    Name: string;
    /**
     * 请求协议：
  - https
  - http
  - tcp
  - udp
     */
    Protocol: string;
    /**
     * 请求路径
     */
    Path: string;
    /**
     * 超时时间，单位ms
     */
    Timeout: number;
    /**
     * 重试次数
     */
    Retries: number;
    /**
     * 服务类型:
  - Kubernetes
  - Registry
  - IPList
  - HostIP
  - Scf
     */
    UpstreamType: string;
    /**
     * 服务配置信息
     */
    UpstreamInfo: KongUpstreamInfo;
}
/**
 * 云原生网关限流插件外部redis配置
 */
export interface ExternalRedis {
    /**
     * redis ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RedisHost: string;
    /**
     * redis密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RedisPassword: string;
    /**
     * redis端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RedisPort: number;
    /**
     * 超时时间  ms
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RedisTimeout: number;
}
/**
 * 多环境网络信息
 */
export interface EnvAddressInfo {
    /**
     * 环境名
     */
    EnvName: string;
    /**
     * 是否开启config公网
     */
    EnableConfigInternet: boolean;
    /**
     * config公网ip
     */
    ConfigInternetServiceIp: string;
    /**
     * config内网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigIntranetAddress: string;
    /**
     * 是否开启config内网clb
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableConfigIntranet?: boolean;
    /**
     * 客户端公网带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetBandWidth?: number;
}
/**
 * 引擎实例的标签信息
 */
export interface InstanceTagInfo {
    /**
     * 标签键
     */
    TagKey?: string;
    /**
     * 标签值
     */
    TagValue?: string;
}
/**
 * DescribeCloudNativeAPIGatewayServices请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayServicesRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 列表数量
     */
    Limit?: number;
    /**
     * 列表 offset
     */
    Offset?: number;
    /**
     * 过滤条件，多个过滤条件之间是与的关系，支持 name,upstreamType
     */
    Filters?: Array<ListFilter>;
}
/**
 * Nacos副本信息
 */
export interface NacosReplica {
    /**
     * 名称
     */
    Name: string;
    /**
     * 角色
     */
    Role: string;
    /**
     * 状态
     */
    Status: string;
    /**
     * 子网ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId: string;
    /**
     * 可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone: string;
    /**
     * 可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId: string;
    /**
     * VPC ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
}
/**
 * UpdateEngineInternetAccess请求参数结构体
 */
export interface UpdateEngineInternetAccessRequest {
    /**
     * 引擎ID
     */
    InstanceId: string;
    /**
     * 引擎类型
     */
    EngineType: string;
    /**
     * 是否开启客户端公网访问，true开 false关
     */
    EnableClientInternetAccess?: boolean;
}
/**
 * CreateCloudNativeAPIGatewayCanaryRule返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayCanaryRuleResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCloudNativeAPIGatewayRoute请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayRouteRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 所属服务的ID
     */
    ServiceID: string;
    /**
     * 路由的名字，实例级别唯一，可以不提供
     */
    RouteName?: string;
    /**
     * 路由的方法，其中方法可选值：
  - GET
  - POST
  - DELETE
  - PUT
  - OPTIONS
  - PATCH
  - HEAD
  - ANY
  - TRACE
  - COPY
  - MOVE
  - PROPFIND
  - PROPPATCH
  - MKCOL
  - LOCK
  - UNLOCK
     */
    Methods?: Array<string>;
    /**
     * 路由的域名
     */
    Hosts?: Array<string>;
    /**
     * 路由的路径
     */
    Paths?: Array<string>;
    /**
     * 路由的协议，可选
  - https
  - http
     */
    Protocols?: Array<string>;
    /**
     * 转发到后端时是否保留Host
     */
    PreserveHost?: boolean;
    /**
     * https重定向状态码
     */
    HttpsRedirectStatusCode?: number;
    /**
     * 转发到后端时是否StripPath
     */
    StripPath?: boolean;
    /**
     * 是否开启强制HTTPS
     * @deprecated
     */
    ForceHttps?: boolean;
    /**
     * 四层匹配的目的端口
     */
    DestinationPorts?: Array<number>;
    /**
     * 路由的Headers
     */
    Headers?: Array<KVMapping>;
}
/**
 * 键值对
 */
export interface KVPair {
    /**
     * 键
     */
    Key: string;
    /**
     * 值
     */
    Value: string;
}
/**
 * DeleteEngine返回参数结构体
 */
export interface DeleteEngineResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCloudNativeAPIGatewayRoutes返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayRoutesResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: KongServiceRouteList;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeZookeeperReplicas请求参数结构体
 */
export interface DescribeZookeeperReplicasRequest {
    /**
     * 注册引擎实例ID
     */
    InstanceId: string;
    /**
     * 副本列表Limit
     */
    Limit?: number;
    /**
     * 副本列表Offset
     */
    Offset?: number;
}
/**
 * DeleteCloudNativeAPIGatewayService返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayServiceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCloudNativeAPIGatewayRoute返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayRouteResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCloudNativeAPIGatewayRouteRateLimit请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayRouteRateLimitRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 路由id，或路由名称。
  不支持“未命名”
     */
    Id: string;
    /**
     * 限流配置
     */
    LimitDetail: CloudNativeAPIGatewayRateLimitDetail;
}
/**
 * ModifyCloudNativeAPIGatewayRoute返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayRouteResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 服务治理相关的信息
 */
export interface ServiceGovernanceInfo {
    /**
     * 引擎所在的地域
     */
    EngineRegion: string;
    /**
     * 服务治理引擎绑定的kubernetes集群信息
     */
    BoundK8SInfos?: Array<BoundK8SInfo>;
    /**
     * 服务治理引擎绑定的网络信息
     */
    VpcInfos?: Array<VpcInfo>;
    /**
     * 当前实例鉴权是否开启
     */
    AuthOpen?: boolean;
    /**
     * 该实例支持的功能，鉴权就是 Auth
     */
    Features?: Array<string>;
    /**
     * 主账户名默认为 polaris，该值为主账户的默认密码
     */
    MainPassword?: string;
    /**
     * 服务治理pushgateway引擎绑定的网络信息
     */
    PgwVpcInfos?: Array<VpcInfo>;
    /**
     * 服务治理限流server引擎绑定的网络信息
     */
    LimiterVpcInfos?: Array<VpcInfo>;
}
/**
 * DescribeNacosReplicas返回参数结构体
 */
export interface DescribeNacosReplicasResponse {
    /**
     * 引擎实例副本信息
     */
    Replicas: Array<NacosReplica>;
    /**
     * 副本个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCloudNativeAPIGatewayServiceRateLimit请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayServiceRateLimitRequest {
    /**
     * 网关Id
     */
    GatewayId: string;
    /**
     * 服务名称，或服务ID
     */
    Name: string;
}
/**
 * 灰度规则列表
 */
export interface CloudAPIGatewayCanaryRuleList {
    /**
     * 灰度规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CanaryRuleList?: Array<CloudNativeAPIGatewayCanaryRule>;
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * 云原生网关路由信息
 */
export interface KongRoutePreview {
    /**
     * 服务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ID: string;
    /**
     * 服务名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Methods?: Array<string>;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Paths?: Array<string>;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Hosts?: Array<string>;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocols?: Array<string>;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreserveHost?: boolean;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HttpsRedirectStatusCode?: number;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StripPath?: boolean;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * 是否开启了强制HTTPS
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ForceHttps?: boolean;
    /**
     * 服务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName?: string;
    /**
     * 服务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceID?: string;
    /**
     * 目的端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DestinationPorts?: Array<number>;
    /**
     * 路由的Headers
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Headers?: KVMapping;
}
/**
 * 云原生网关Tse 限流插件配置
 */
export interface CloudNativeAPIGatewayRateLimitDetail {
    /**
     * 插件启用状态
     */
    Enabled: boolean;
    /**
     * qps阈值
     */
    QpsThresholds: Array<QpsThreshold>;
    /**
     * 限流依据
  ip service consumer credential path header
     */
    LimitBy: string;
    /**
     * 响应策略
  url请求转发
  text 响应配置
  default 直接返回
  
     */
    ResponseType: string;
    /**
     * 是否隐藏限流客户端响应头
     */
    HideClientHeaders: boolean;
    /**
     * 是否开启请求排队
     */
    IsDelay: boolean;
    /**
     * 需要进行流量控制的请求路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * 需要进行流量控制的请求头Key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Header?: string;
    /**
     * 外部redis配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExternalRedis?: ExternalRedis;
    /**
     * 计数器策略
  local 单机
  redis  默认redis
  external_redis 外部redis
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Policy?: string;
    /**
     * 响应配置，响应策略为text
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RateLimitResponse?: RateLimitResponse;
    /**
     * 请求转发地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RateLimitResponseUrl?: string;
    /**
     * 排队时间
     */
    LineUpTime?: number;
}
/**
 * CreateCloudNativeAPIGatewayRoute返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayRouteResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例地域信息描述
 */
export interface DescribeInstanceRegionInfo {
    /**
     * 引擎部署地域信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EngineRegion: string;
    /**
     * 引擎在该地域的副本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Replica: number;
    /**
     * 引擎在该地域的规格id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpecId: string;
    /**
     * 内网的网络信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntranetVpcInfos: Array<VpcInfo>;
    /**
     * 是否开公网
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableClientInternet: boolean;
}
/**
 * Kong Upstream中的Target
 */
export interface KongTarget {
    /**
     * Host
     */
    Host: string;
    /**
     * 端口
     */
    Port: number;
    /**
     * 权重
     */
    Weight: number;
    /**
     * 健康状态
     */
    Health?: string;
    /**
     * 创建时间
     */
    CreatedTime?: string;
    /**
     * Target的来源
     */
    Source?: string;
}
/**
 * 引擎地域配置详情
 */
export interface EngineRegionInfo {
    /**
     * 引擎节点所在地域
     */
    EngineRegion: string;
    /**
     * 此地域节点分配数量
     */
    Replica: number;
    /**
     * 集群网络信息
     */
    VpcInfos: Array<VpcInfo>;
}
/**
 * DescribeNacosServerInterfaces返回参数结构体
 */
export interface DescribeNacosServerInterfacesResponse {
    /**
     * 接口总个数
     */
    TotalCount: number;
    /**
     * 接口列表
     */
    Content: Array<NacosServerInterface>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 键值对
 */
export interface KVMapping {
    /**
     * key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * value
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
/**
 * 云原生网关限流插件自定义响应
 */
export interface RateLimitResponse {
    /**
     * 自定义响应体
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Body?: string;
    /**
     * headrs
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Headers?: Array<KVMapping>;
    /**
     * http状态码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HttpStatus?: number;
}
/**
 * DescribeCloudNativeAPIGatewayServiceRateLimit返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayServiceRateLimitResponse {
    /**
     * 获取云原生网关限流插件(服务)
     */
    Result?: CloudNativeAPIGatewayRateLimitDetail;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCloudNativeAPIGatewayService请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayServiceRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 服务名字，服务ID
     */
    Name: string;
}
/**
 * 环境具体信息
 */
export interface EnvInfo {
    /**
     * 环境名称
     */
    EnvName: string;
    /**
     * 环境对应的网络信息
     */
    VpcInfos: Array<VpcInfo>;
    /**
     * 云硬盘容量
     */
    StorageCapacity: number;
    /**
     * 运行状态
     */
    Status?: string;
    /**
     * Admin service 访问地址
     */
    AdminServiceIp?: string;
    /**
     * Config service访问地址
     */
    ConfigServiceIp?: string;
    /**
     * 是否开启config-server公网
     */
    EnableConfigInternet?: boolean;
    /**
     * config-server公网访问地址
     */
    ConfigInternetServiceIp?: string;
    /**
     * 规格ID
     */
    SpecId?: string;
    /**
     * 环境的节点数
     */
    EnvReplica?: number;
    /**
     * 环境运行的节点数
     */
    RunningCount?: number;
    /**
     * 环境别名
     */
    AliasEnvName?: string;
    /**
     * 环境描述
     */
    EnvDesc?: string;
    /**
     * 客户端带宽
     */
    ClientBandWidth?: number;
    /**
     * 客户端内网开关
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableConfigIntranet?: boolean;
}
/**
 * DescribeCloudNativeAPIGatewayRouteRateLimit请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayRouteRateLimitRequest {
    /**
     * 网关Id
     */
    GatewayId: string;
    /**
     * 路由Id，或路由名称。
  不支持“未命名”
     */
    Id: string;
}
/**
 * DescribeOneCloudNativeAPIGatewayService请求参数结构体
 */
export interface DescribeOneCloudNativeAPIGatewayServiceRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 服务名字，或服务ID
     */
    Name: string;
}
/**
 * CreateCloudNativeAPIGatewayRouteRateLimit返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayRouteRateLimitResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateEngineInternetAccess返回参数结构体
 */
export interface UpdateEngineInternetAccessResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCloudNativeAPIGatewayRouteRateLimit请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayRouteRateLimitRequest {
    /**
     * 网关Id
     */
    GatewayId: string;
    /**
     * 路由Id，或路由名称。
  不支持“未命名”
     */
    Id: string;
}
/**
 * 列表过滤条件，模糊匹配
 */
export interface ListFilter {
    /**
     * 过滤字段
     */
    Key?: string;
    /**
     * 过滤值
     */
    Value?: string;
}
/**
 * DeleteEngine请求参数结构体
 */
export interface DeleteEngineRequest {
    /**
     * 引擎实例 ID
     */
    InstanceId: string;
}
/**
 * Zookeeper副本信息
 */
export interface ZookeeperReplica {
    /**
     * 名称
     */
    Name: string;
    /**
     * 角色
     */
    Role: string;
    /**
     * 状态
     */
    Status: string;
    /**
     * 子网ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId: string;
    /**
     * 可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone: string;
    /**
     * 可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId: string;
    /**
     * 别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AliasName: string;
    /**
     * VPC ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
}
/**
 * DescribeCloudNativeAPIGatewayCanaryRules返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayCanaryRulesResponse {
    /**
     * 灰度规则列表
     */
    Result?: CloudAPIGatewayCanaryRuleList;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 微服务注册引擎实例
 */
export interface SREInstance {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 名称
     */
    Name: string;
    /**
     * 版本号
     */
    Edition: string;
    /**
     * 状态, 枚举值:creating/create_fail/running/updating/update_fail/restarting/restart_fail/destroying/destroy_fail
     */
    Status: string;
    /**
     * 规格ID
     */
    SpecId: string;
    /**
     * 副本数
     */
    Replica: number;
    /**
     * 类型
     */
    Type: string;
    /**
     * Vpc iD
     */
    VpcId: string;
    /**
     * 子网ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetIds: Array<string>;
    /**
     * 是否开启持久化存储
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableStorage: boolean;
    /**
     * 数据存储方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageType: string;
    /**
     * 云硬盘容量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageCapacity: number;
    /**
     * 计费方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Paymode: string;
    /**
     * EKS集群的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EKSClusterID: string;
    /**
     * 集群创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 环境配置信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnvInfos: Array<EnvInfo>;
    /**
     * 引擎所在的区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EngineRegion: string;
    /**
     * 注册引擎是否开启公网
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableInternet: boolean;
    /**
     * 私有网络列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcInfos: Array<VpcInfo>;
    /**
     * 服务治理相关信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceGovernanceInfos: Array<ServiceGovernanceInfo>;
    /**
     * 实例的标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<KVPair>;
    /**
     * 引擎实例是否开启控制台公网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableConsoleInternet: boolean;
    /**
     * 引擎实例是否开启控制台内网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableConsoleIntranet: boolean;
    /**
     * 引擎实例是否展示参数配置页面
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigInfoVisible: boolean;
    /**
     * 引擎实例控制台默认密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsoleDefaultPwd: string;
    /**
     * 交易付费类型，0后付费/1预付费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TradeType: number;
    /**
     * 自动续费标记：0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewFlag: number;
    /**
     * 预付费到期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurDeadline: string;
    /**
     * 隔离开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateTime: string;
    /**
     * 实例地域相关的描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionInfos: Array<DescribeInstanceRegionInfo>;
    /**
     * 所在EKS环境，分为common和yunti
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EKSType: string;
    /**
     * 引擎的产品版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeatureVersion?: string;
    /**
     * 引擎实例是否开启客户端内网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableClientIntranet?: boolean;
}
/**
 * DeleteCloudNativeAPIGatewayServiceRateLimit返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayServiceRateLimitResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCloudNativeAPIGatewayServiceRateLimit请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayServiceRateLimitRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 服务名称，或服务ID
     */
    Name: string;
    /**
     * 限流配置
     */
    LimitDetail: CloudNativeAPIGatewayRateLimitDetail;
}
/**
 * 云原生API网关节点信息。
 */
export interface CloudNativeAPIGatewayNode {
    /**
     * 云原生网关节点 id
     */
    NodeId: string;
    /**
     * 节点 ip
     */
    NodeIp: string;
    /**
     * Zone id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: string;
    /**
     * Zone
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 分组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 分组名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
}
/**
 * DescribeZookeeperServerInterfaces返回参数结构体
 */
export interface DescribeZookeeperServerInterfacesResponse {
    /**
     * 接口总个数
     */
    TotalCount: number;
    /**
     * 接口列表
     */
    Content: Array<ZookeeperServerInterface>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询过滤通用对象
 */
export interface Filter {
    /**
     * 过滤参数名
     */
    Name: string;
    /**
     * 过滤参数值
     */
    Values: Array<string>;
}
/**
 * 查询Limiter的接入地址
 */
export interface PolarisLimiterAddress {
    /**
     * VPC接入IP列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntranetAddress: string;
}
/**
 * DescribeOneCloudNativeAPIGatewayService返回参数结构体
 */
export interface DescribeOneCloudNativeAPIGatewayServiceResponse {
    /**
     * 无
     */
    Result?: KongServiceDetail;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCloudNativeAPIGatewayService请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayServiceRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 服务名称
     */
    Name: string;
    /**
     * 请求协议：
  - https
  - http
  - tcp
  - udp
     */
    Protocol: string;
    /**
     * 请求路径
     */
    Path: string;
    /**
     * 超时时间，单位ms
     */
    Timeout: number;
    /**
     * 重试次数
     */
    Retries: number;
    /**
     * 服务类型:
  - Kubernetes
  - Registry
  - IPList
  - HostIP
  - Scf
     */
    UpstreamType: string;
    /**
     * 服务配置
     */
    UpstreamInfo: KongUpstreamInfo;
    /**
     * 服务ID
     */
    ID: string;
}
/**
 * kong实例的服务列表
 */
export interface KongServices {
    /**
     * kong实例的服务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceList?: Array<KongServicePreview>;
    /**
     * 列表总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * DescribeZookeeperServerInterfaces请求参数结构体
 */
export interface DescribeZookeeperServerInterfacesRequest {
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 返回的列表个数
     */
    Limit?: number;
    /**
     * 返回的列表起始偏移量
     */
    Offset?: number;
}
/**
 * DescribeCloudNativeAPIGatewayRouteRateLimit返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayRouteRateLimitResponse {
    /**
     * 获取云原生网关限流插件(路由)
     */
    Result?: CloudNativeAPIGatewayRateLimitDetail;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCloudNativeAPIGatewayCanaryRule请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayCanaryRuleRequest {
    /**
     * 网关 ID
     */
    GatewayId: string;
    /**
     * 服务 ID
     */
    ServiceId: string;
    /**
     * 灰度规则配置
     */
    CanaryRule: CloudNativeAPIGatewayCanaryRule;
}
/**
 * DeleteCloudNativeAPIGatewayRoute请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayRouteRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 路由的ID或名字，不支持名称“未命名”
     */
    Name: string;
}
/**
 * DescribeCloudNativeAPIGatewayRoutes请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayRoutesRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 翻页单页查询限制数量[0,1000], 默认值0
     */
    Limit?: number;
    /**
     * 翻页单页偏移量，默认值0
     */
    Offset?: number;
    /**
     * 服务的名字，精确匹配
     */
    ServiceName?: string;
    /**
     * 路由的名字，精确匹配
     */
    RouteName?: string;
    /**
     * 过滤条件，多个过滤条件之间是与的关系，支持 name, path, host, method, service, protocol
     */
    Filters?: Array<ListFilter>;
}
/**
 * CreateEngine返回参数结构体
 */
export interface CreateEngineResponse {
    /**
     * 引擎实例 ID
     */
    InstanceId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCloudNativeAPIGatewayServiceRateLimit返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayServiceRateLimitResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 获取网关节点信息
 */
export interface DescribeCloudNativeAPIGatewayNodesResult {
    /**
     * 获取云原生API网关节点列表响应结果。
     */
    TotalCount: number;
    /**
     * 云原生API网关节点列表。
     */
    NodeList: Array<CloudNativeAPIGatewayNode>;
}
/**
 * 灰度规则
 */
export interface CloudNativeAPIGatewayCanaryRule {
    /**
     * 优先级，值范围为 0 到 100；值越大，优先级越高；不同规则间优先级不可重复
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Priority: number;
    /**
     * 是否启用规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enabled: boolean;
    /**
     * 参数匹配条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConditionList?: Array<CloudNativeAPIGatewayCanaryRuleCondition>;
    /**
     * 服务的流量百分比配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BalancedServiceList?: Array<CloudNativeAPIGatewayBalancedService>;
    /**
     * 归属服务 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceId?: string;
    /**
     * 归属服务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName?: string;
}
/**
 * ModifyCloudNativeAPIGatewayServiceRateLimit返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayServiceRateLimitResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNacosServerInterfaces请求参数结构体
 */
export interface DescribeNacosServerInterfacesRequest {
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * 返回的列表个数
     */
    Limit?: number;
    /**
     * 返回的列表起始偏移量
     */
    Offset?: number;
}
/**
 * 灰度规则中的条件配置
 */
export interface CloudNativeAPIGatewayCanaryRuleCondition {
    /**
     * 条件类型，支持 path, method, query, header, cookie, body 和 system。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 参数名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * 操作符，支持 "le", "eq", "lt", "ne", "ge", "gt", "regex", "exists", "in", "not in",  "prefix" ,"exact", "regex" 等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 目标参数值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * 分隔符，当 Operator 为 in 或者 not in 时生效。支持值为英文逗号，英文分号，空格，换行符。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Delimiter?: string;
    /**
     * 全局配置 Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GlobalConfigId?: string;
    /**
     * 全局配置名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GlobalConfigName?: string;
}
/**
 * DescribeSREInstances返回参数结构体
 */
export interface DescribeSREInstancesResponse {
    /**
     * 总数量
     */
    TotalCount: number;
    /**
     * 实例记录
     */
    Content: Array<SREInstance>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Zookeeper服务端接口列表，用于云监控
 */
export interface ZookeeperServerInterface {
    /**
     * 接口名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Interface: string;
}
/**
 * 服务治理引擎绑定的kubernetes信息
 */
export interface BoundK8SInfo {
    /**
     * 绑定的kubernetes集群ID
     */
    BoundClusterId: string;
    /**
     * 绑定的kubernetes的集群类型，分tke和eks两种
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BoundClusterType: string;
    /**
     * 服务同步模式，all为全量同步，demand为按需同步
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SyncMode?: string;
}
/**
 * 服务的后端配置
 */
export interface KongUpstreamInfo {
    /**
     * IP或域名
     */
    Host?: string;
    /**
     * 端口
     */
    Port?: number;
    /**
     * 服务来源ID
     */
    SourceID?: string;
    /**
     * 名字空间
     */
    Namespace?: string;
    /**
     * 服务（注册中心或Kubernetes中的服务）名字
     */
    ServiceName?: string;
    /**
     * 服务后端类型是IPList时提供
     */
    Targets?: Array<KongTarget>;
    /**
     * 服务来源类型
     */
    SourceType?: string;
    /**
     * SCF函数类型
     */
    ScfType?: string;
    /**
     * SCF函数命名空间
     */
    ScfNamespace?: string;
    /**
     * SCF函数名
     */
    ScfLambdaName?: string;
    /**
     * SCF函数版本
     */
    ScfLambdaQualifier?: string;
    /**
     * 冷启动时间，单位秒
     */
    SlowStart?: number;
    /**
     * 负载均衡算法，默认为 round-robin，还支持 least-connections，consisten_hashing
     */
    Algorithm?: string;
    /**
     * CVM弹性伸缩组ID
     */
    AutoScalingGroupID?: string;
    /**
     * CVM弹性伸缩组端口
     */
    AutoScalingCvmPort?: number;
    /**
     * CVM弹性伸缩组使用的CVM TAT命令状态
     */
    AutoScalingTatCmdStatus?: string;
    /**
     * CVM弹性伸缩组生命周期挂钩状态
     */
    AutoScalingHookStatus?: string;
    /**
     * 服务来源的名字
     */
    SourceName?: string;
    /**
     * 精确的服务来源类型，新建服务来源时候传入的类型
     */
    RealSourceType?: string;
}
/**
 * DescribeSREInstances请求参数结构体
 */
export interface DescribeSREInstancesRequest {
    /**
     * 请求过滤参数
     */
    Filters?: Array<Filter>;
    /**
     * 翻页单页查询限制数量[0,1000], 默认值0
     */
    Limit?: number;
    /**
     * 翻页单页偏移量，默认值0
     */
    Offset?: number;
    /**
     * 查询类型
     */
    QueryType?: string;
    /**
     * 调用方来源
     */
    QuerySource?: string;
}
/**
 * CreateCloudNativeAPIGatewayServiceRateLimit请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayServiceRateLimitRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 服务名称，或服务ID
     */
    Name: string;
    /**
     * 限流配置
     */
    LimitDetail: CloudNativeAPIGatewayRateLimitDetail;
}
/**
 * DescribeZookeeperReplicas返回参数结构体
 */
export interface DescribeZookeeperReplicasResponse {
    /**
     * 注册引擎实例副本信息
     */
    Replicas: Array<ZookeeperReplica>;
    /**
     * 副本个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEngine请求参数结构体
 */
export interface CreateEngineRequest {
    /**
     * 引擎类型。参考值：
  - zookeeper
  - nacos
  - consul
  - apollo
  - eureka
  - polaris
     */
    EngineType: string;
    /**
     * 引擎的开源版本。每种引擎支持的开源版本不同，请参考产品文档或者控制台购买页
     */
    EngineVersion: string;
    /**
     * 引擎的产品版本。参考值：
  - STANDARD： 标准版
  
  引擎各版本及可选择的规格、节点数说明：
  apollo - STANDARD版本
  规格列表：1C2G、2C4G、4C8G、8C16G、16C32G
  节点数：1，2，3，4，5
  
  eureka - STANDARD版本
  规格列表：1C2G、2C4G、4C8G、8C16G、16C32G
  节点数：3，4，5
  
  polarismesh - STANDARD版本
  规格列表：NUM50、NUM100、NUM200、NUM500、NUM1000、NUM5000、NUM10000、NUM50000
  
  兼容原spec-xxxxxx形式的规格ID
     */
    EngineProductVersion: string;
    /**
     * 引擎所在地域。参考值说明：
  中国区 参考值：
  - ap-guangzhou：广州
  - ap-beijing：北京
  - ap-chengdu：成都
  - ap-chongqing：重庆
  - ap-nanjing：南京
  - ap-shanghai：上海
  - ap-hongkong：香港
  - ap-taipei：台北
  亚太区 参考值：
  - ap-jakarta：雅加达
  - ap-singapore：新加坡
  北美区 参考值
  - na-toronto：多伦多
  金融专区 参考值
  - ap-beijing-fsi：北京金融
  - ap-shanghai-fsi：上海金融
  - ap-shenzhen-fsi：深圳金融
     */
    EngineRegion: string;
    /**
     * 引擎名称。参考值：
  - eurek-test
     */
    EngineName: string;
    /**
     * 付费类型。参考值：
  - 0：后付费
  - 1：预付费（接口暂不支持创建预付费实例）
     */
    TradeType: number;
    /**
     * 引擎的节点规格 ID。参见EngineProductVersion字段说明
     */
    EngineResourceSpec?: string;
    /**
     * 引擎的节点数量。参见EngineProductVersion字段说明
     */
    EngineNodeNum?: number;
    /**
     * VPC ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：
  - vpc-conz6aix
     */
    VpcId?: string;
    /**
     * 子网 ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：
  - subnet-ahde9me9
     */
    SubnetId?: string;
    /**
     * Apollo 环境配置参数列表。参数说明：
  如果创建Apollo类型，此参数为必填的环境信息列表，最多可选4个环境。环境信息参数说明：
  - Name：环境名。参考值：prod, dev, fat, uat
  - EngineResourceSpec：环境内引擎的节点规格ID。参见EngineProductVersion参数说明
  - EngineNodeNum：环境内引擎的节点数量。参见EngineProductVersion参数说明，其中prod环境支持的节点数为2，3，4，5
  - StorageCapacity：配置存储空间大小，以GB为单位，步长为5.参考值：35
  - VpcId：VPC ID。参考值：vpc-conz6aix
  - SubnetId：子网 ID。参考值：subnet-ahde9me9
     */
    ApolloEnvParams?: Array<ApolloEnvParam>;
    /**
     * 引擎的标签列表。用户自定义的key/value形式，无参考值
     */
    EngineTags?: Array<InstanceTagInfo>;
    /**
     * 引擎的初始帐号信息。可设置参数：
  - Name：控制台初始用户名
  - Password：控制台初始密码
  - Token：引擎接口的管理员 Token
     */
    EngineAdmin?: EngineAdmin;
    /**
     * 预付费时长，以月为单位
     */
    PrepaidPeriod?: number;
    /**
     * 自动续费标记，仅预付费使用。参考值：
  - 0：不自动续费
  - 1：自动续费
     */
    PrepaidRenewFlag?: number;
    /**
     * 跨地域部署的引擎地域配置详情
     */
    EngineRegionInfos?: Array<EngineRegionInfo>;
}
/**
 * ModifyCloudNativeAPIGatewayCanaryRule请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayCanaryRuleRequest {
    /**
     * 网关 ID
     */
    GatewayId: string;
    /**
     * 服务 ID
     */
    ServiceId: string;
    /**
     * 优先级，同一个服务的灰度规则优先级是唯一的
     */
    Priority: number;
    /**
     * 灰度规则配置
     */
    CanaryRule: CloudNativeAPIGatewayCanaryRule;
}
/**
 * kong服务路由列表
 */
export interface KongServiceRouteList {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RouteList?: Array<KongRoutePreview>;
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
}
/**
 * DescribeSREInstanceAccessAddress请求参数结构体
 */
export interface DescribeSREInstanceAccessAddressRequest {
    /**
     * 注册引擎实例Id
     */
    InstanceId?: string;
    /**
     * VPC ID
     */
    VpcId?: string;
    /**
     * 子网ID
     */
    SubnetId?: string;
    /**
     * 引擎其他组件名称（pushgateway、polaris-limiter）
     */
    Workload?: string;
    /**
     * 部署地域
     */
    EngineRegion?: string;
}
/**
 * ModifyCloudNativeAPIGatewayRouteRateLimit返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayRouteRateLimitResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 引擎的初始管理帐号
 */
export interface EngineAdmin {
    /**
     * 控制台初始用户名
     */
    Name?: string;
    /**
     * 控制台初始密码
     */
    Password?: string;
    /**
     * 引擎接口的管理员 Token
     */
    Token?: string;
}
/**
 * DescribeCloudNativeAPIGatewayCanaryRules请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayCanaryRulesRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 服务 ID
     */
    ServiceId: string;
    /**
     * 列表数量
     */
    Limit?: number;
    /**
     * 列表offset
     */
    Offset?: number;
}
/**
 * DeleteCloudNativeAPIGatewayCanaryRule返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayCanaryRuleResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 云原生网关服务详细信息
 */
export interface KongServiceDetail {
    /**
     * 服务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ID: string;
    /**
     * 服务名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 后端协议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocol?: string;
    /**
     * 后端路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * 后端延时，单位ms
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Timeout?: number;
    /**
     * 重试次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Retries?: number;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<string>;
    /**
     * 后端配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamInfo?: KongUpstreamInfo;
    /**
     * 后端类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpstreamType?: string;
    /**
     * 是否可编辑
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Editable?: boolean;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
}
