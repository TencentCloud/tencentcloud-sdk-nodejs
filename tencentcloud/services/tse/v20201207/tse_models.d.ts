/**
 * 获取云原生API网关实例列表响应结果。
 */
export interface ListCloudNativeAPIGatewayResult {
    /**
     * 总数。
     */
    TotalCount: number;
    /**
     * 云原生API网关实例列表。
     */
    GatewayList: Array<DescribeCloudNativeAPIGatewayResult>;
}
/**
 * DescribeCloudNativeAPIGateway返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayResponse {
    /**
     * 获取云原生API网关基础信息响应结果。
     */
    Result: DescribeCloudNativeAPIGatewayResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateCloudNativeAPIGatewayService返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayServiceResponse {
    /**
     * 网关服务创建结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: CreateGatewayServiceResult;
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
 * CreateCloudNativeAPIGateway请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayRequest {
    /**
     * 云原生API网关名字, 最多支持60个字符。
     */
    Name: string;
    /**
     * 云原生API网关类型, 目前只支持kong。
     */
    Type: string;
    /**
     * 云原生API网关版本。参考值：
  - 2.4.1
  - 2.5.1
     */
    GatewayVersion: string;
    /**
     * 云原生API网关节点配置。
     */
    NodeConfig: CloudNativeAPIGatewayNodeConfig;
    /**
     * 云原生API网关vpc配置。
     */
    VpcConfig: CloudNativeAPIGatewayVpcConfig;
    /**
     * 云原生API网关描述信息, 最多支持120个字符。
     */
    Description?: string;
    /**
     * 标签列表
     */
    Tags?: Array<InstanceTagInfo>;
    /**
     * 是否开启 CLS 日志。默认值：fasle
     */
    EnableCls?: boolean;
    /**
     * 产品版本。参考值：
  - TRIAL：开发版
  - STANDARD：标准版 （默认值）
  - PROFESSIONAL：专业版
     */
    FeatureVersion?: string;
    /**
     * 公网出流量带宽，[1,2048]Mbps
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 实例实际的地域信息，默认值：ap-guangzhou
     */
    EngineRegion?: string;
    /**
     * ingress Class名称
     */
    IngressClassName?: string;
    /**
     * 付费类型。参考值：
  0：后付费（默认值）
  1：预付费（接口暂不支持创建预付费实例）
     */
    TradeType?: number;
    /**
     * 公网相关配置
     */
    InternetConfig?: InternetConfig;
}
/**
 * 定时伸缩策略配置
 */
export interface CloudNativeAPIGatewayStrategyCronScalerConfig {
    /**
     * 是否开启定时伸缩
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enabled?: boolean;
    /**
     * 定时伸缩配置参数列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Params?: Array<CloudNativeAPIGatewayStrategyCronScalerConfigParam>;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    CreateTime?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    ModifyTime?: string;
    /**
     * 弹性策略ID
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    StrategyId?: string;
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
    DestinationPorts?: Array<number | bigint>;
    /**
     * 路由的Headers
     */
    Headers?: Array<KVMapping>;
}
/**
 * DeleteNativeGatewayServerGroup返回参数结构体
 */
export interface DeleteNativeGatewayServerGroupResponse {
    /**
     * 删除信息
     */
    Result?: DeleteNativeGatewayServerGroupResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCloudNativeAPIGatewayCertificate返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayCertificateResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeSREInstanceAccessAddress返回参数结构体
 */
export interface DescribeSREInstanceAccessAddressResponse {
    /**
     * 内网访问地址
     */
    IntranetAddress?: string;
    /**
     * 公网访问地址
     */
    InternetAddress?: string;
    /**
     * apollo多环境公网ip
     */
    EnvAddressInfos?: Array<EnvAddressInfo>;
    /**
     * 控制台公网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsoleInternetAddress?: string;
    /**
     * 控制台内网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsoleIntranetAddress?: string;
    /**
     * 客户端公网带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetBandWidth?: number;
    /**
     * 控制台公网带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsoleInternetBandWidth?: number;
    /**
     * 北极星限流server节点接入IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LimiterAddressInfos?: Array<PolarisLimiterAddress>;
    /**
     * InternetAddress 的公网 CLB 多可用区信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLBMultiRegion?: CLBMultiRegion;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 云原生API网关节点配置。
 */
export interface CloudNativeAPIGatewayNodeConfig {
    /**
     * 节点配置, 1c2g|2c4g|4c8g|8c16g。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Specification: string;
    /**
     * 节点数量，2-9。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Number: number;
}
/**
 * CreateNativeGatewayServerGroup请求参数结构体
 */
export interface CreateNativeGatewayServerGroupRequest {
    /**
     * 网关实例id。
  只支持后付费实例
     */
    GatewayId: string;
    /**
     * 网关分组名
     */
    Name: string;
    /**
     * 节点配置
     */
    NodeConfig: CloudNativeAPIGatewayNodeConfig;
    /**
     * 子网id
     */
    SubnetId: string;
    /**
     * 描述信息
     */
    Description?: string;
    /**
     * 公网带宽信息
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 公网配置。
     */
    InternetConfig?: InternetConfig;
}
/**
 * DescribeCloudNativeAPIGatewayCertificates请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayCertificatesRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 列表数量
     */
    Limit?: number;
    /**
     * 列表offset
     */
    Offset?: number;
    /**
     * 过滤条件，多个过滤条件之间是与的关系，支持BindDomain ，Name
     */
    Filters?: Array<ListFilter>;
}
/**
 * 删除云原生API网关响应结果。
 */
export interface DeleteCloudNativeAPIGatewayResult {
    /**
     * 云原生网关ID。
     */
    GatewayId: string;
    /**
     * 云原生网关状态。
     */
    Status: string;
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
 * CreateCloudNativeAPIGateway返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayResponse {
    /**
     * 创建云原生API网关实例响应结果。
     */
    Result?: CreateCloudNativeAPIGatewayResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteCloudNativeAPIGatewayCertificate返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayCertificateResponse {
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
 * 网关实例协议端口列表
 */
export interface GatewayInstanceSchemeAndPorts {
    /**
     * 端口协议，可选HTTP、HTTPS、TCP和UDP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Scheme?: string;
    /**
     * 端口列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PortList?: Array<number | bigint>;
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
 * ModifyCloudNativeAPIGatewayCertificate请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayCertificateRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 证书id
     */
    Id: string;
    /**
     * 证书名称，即将废弃
     * @deprecated
     */
    Name?: string;
    /**
     * 证书私钥，CertSource为native时必填。
     */
    Key?: string;
    /**
     * 证书pem格式，CertSource为native时必填。
     */
    Crt?: string;
    /**
     * 绑定的域名，即将废弃
     * @deprecated
     */
    BindDomains?: Array<string>;
    /**
     * ssl平台证书 Id，CertSource为ssl时必填。
     */
    CertId?: string;
    /**
     * 证书来源
  - ssl (ssl平台证书)，默认值
  - native (kong自定义证书)
  
     */
    CertSource?: string;
}
/**
 * 多环境网络信息
 */
export interface EnvAddressInfo {
    /**
     * 环境名
     */
    EnvName?: string;
    /**
     * 是否开启config公网
     */
    EnableConfigInternet?: boolean;
    /**
     * config公网ip
     */
    ConfigInternetServiceIp?: string;
    /**
     * config内网访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigIntranetAddress?: string;
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
    /**
     * 客户端公网CLB多可用区信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLBMultiRegion?: CLBMultiRegion;
}
/**
 * CLB多可用区信息
 */
export interface CLBMultiRegion {
    /**
     * 是否启用多可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLBMultiZoneFlag?: boolean;
    /**
     * 主可用区信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLBMasterZone?: string;
    /**
     * 备可用区信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLBSlaveZone?: string;
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
    /**
     * 存储额外配置选项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageOption?: Array<StorageOption>;
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
 * UpdateUpstreamTargets返回参数结构体
 */
export interface UpdateUpstreamTargetsResponse {
    /**
     * 是否更新成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCloudNativeAPIGatewayCertificates返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayCertificatesResponse {
    /**
     * 无
     */
    Result?: KongCertificatesList;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 创建云原生网关服务结果
 */
export interface CreateGatewayServiceResult {
    /**
     * 网关服务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceId?: string;
}
/**
 * 云原生网关证书
 */
export interface KongCertificate {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cert?: KongCertificatesPreview;
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
 * UpdateUpstreamTargets请求参数结构体
 */
export interface UpdateUpstreamTargetsRequest {
    /**
     * 网关实例ID
     */
    GatewayId: string;
    /**
     * 服务名称或ID
     */
    Name: string;
    /**
     * 实例列表
     */
    Targets?: Array<KongTarget>;
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
 * 实例监听端口信息
 */
export interface InstancePort {
    /**
     * 监听的 http 端口范围。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HttpPort?: string;
    /**
     * 监听的 https 端口范围。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HttpsPort?: string;
    /**
     * 监听的 tcp 端口范围。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TcpPort?: string;
    /**
     * 监听的 udp 端口范围。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UdpPort?: string;
}
/**
 * 获取云原生API网关基础信息响应结果。
 */
export interface DescribeCloudNativeAPIGatewayResult {
    /**
     * 云原生API网关ID。
     */
    GatewayId?: string;
    /**
     * 云原生API网关状态。
     */
    Status?: string;
    /**
     * 云原生API网关名。
     */
    Name?: string;
    /**
     * 云原生API网关类型。
     */
    Type?: string;
    /**
     * 实例版本：
  - 2.4.1
  - 2.5.1
     */
    GatewayVersion?: string;
    /**
     * 云原生API网关节点信息。
     */
    NodeConfig?: CloudNativeAPIGatewayNodeConfig;
    /**
     * 云原生API网关vpc配置。
     */
    VpcConfig?: CloudNativeAPIGatewayVpcConfig;
    /**
     * 云原生API网关描述。
     */
    Description?: string;
    /**
     * 云原生API网关创建时间。
     */
    CreateTime?: string;
    /**
     * 实例的标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<InstanceTagInfo>;
    /**
     * 是否开启 cls 日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableCls?: boolean;
    /**
     * 付费模式，0表示后付费，1预付费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TradeType?: number;
    /**
     * 实例版本，当前支持开发版、标准版、专业版【TRIAL、STANDARD、PROFESSIONAL】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeatureVersion?: string;
    /**
     * 公网出流量带宽，[1,2048]Mbps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 自动续费标记，0表示默认状态(用户未设置，即初始状态)；
  1表示自动续费，2表示明确不自动续费(用户设置)，若业务无续费概念或无需自动续费，需要设置为0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewFlag?: number;
    /**
     * 到期时间，预付费时使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurDeadline?: string;
    /**
     * 隔离时间，实例隔离时使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsolateTime?: string;
    /**
     * 是否开启客户端公网。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableInternet?: boolean;
    /**
     * 实例实际的地域信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EngineRegion?: string;
    /**
     * Ingress class名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IngressClassName?: string;
    /**
     * 公网计费方式。可选取值 BANDWIDTH | TRAFFIC ，表示按带宽和按流量计费。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetPayMode?: string;
    /**
     * 云原生API网关小版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayMinorVersion?: string;
    /**
     * 实例监听的端口信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstancePort?: InstancePort;
    /**
     * 公网CLB默认类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerType?: string;
    /**
     * 公网IP地址列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIpAddresses?: Array<string>;
}
/**
 * 北极星日志主题信息
 */
export interface PolarisCLSTopicInfo {
    /**
     * 日志集ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogSetId?: string;
    /**
     * 日志集名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogSetName?: string;
    /**
     * 日志主题ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId?: string;
    /**
     * 日志主题名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName?: string;
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
 * DescribeCloudNativeAPIGatewayPorts返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayPortsResponse {
    /**
     * 云原生API网关实例协议端口列表响应结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: DescribeGatewayInstancePortResult;
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
 * DeleteNativeGatewayServerGroup请求参数结构体
 */
export interface DeleteNativeGatewayServerGroupRequest {
    /**
     * 网关实例id。
  只支持后付费实例
     */
    GatewayId: string;
    /**
     * 网关分组id
     */
    GroupId: string;
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
 * 删除网关实例结果
 */
export interface DeleteNativeGatewayServerGroupResult {
    /**
     * 网关实例id
     */
    GatewayId?: string;
    /**
     * 网关分组id
     */
    GroupId?: string;
    /**
     * 删除状态
     */
    Status?: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
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
    /**
     * 引擎关联CLS日志主题信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CLSTopics?: Array<PolarisCLSTopicInfo>;
}
/**
 * DescribeNacosReplicas返回参数结构体
 */
export interface DescribeNacosReplicasResponse {
    /**
     * 引擎实例副本信息
     */
    Replicas?: Array<NacosReplica>;
    /**
     * 副本个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
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
 * 云原生API网关vpc配置。
 */
export interface CloudNativeAPIGatewayVpcConfig {
    /**
     * 私有网络ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 子网ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
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
 * DescribeCloudNativeAPIGatewayConfig返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayConfigResponse {
    /**
     * 获取云原生API网关响应结果。
     */
    Result?: DescribeCloudNativeAPIGatewayConfigResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * @deprecated
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
    DestinationPorts?: Array<number | bigint>;
    /**
     * 路由的Headers
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Headers?: Array<KVMapping>;
}
/**
 * kong证书列表
 */
export interface KongCertificatesList {
    /**
     * 证书列表总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertificatesList?: Array<KongCertificatesPreview>;
    /**
     * 证书列表总页数
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    Pages?: number;
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
 * DescribeCloudNativeAPIGatewayConfig请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayConfigRequest {
    /**
     * 云原生API网关实例ID。
     */
    GatewayId: string;
    /**
     * 分组id，不填时为默认分组
     */
    GroupId?: string;
}
/**
 * Kong Upstream中的Target
 */
export interface KongTarget {
    /**
     * Host
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Host: string;
    /**
     * 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port: number;
    /**
     * 权重
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Weight: number;
    /**
     * 健康状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Health?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * Target的来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Source?: string;
}
/**
 * DescribeCloudNativeAPIGateways请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewaysRequest {
    /**
     * 返回数量，默认为 20，最大值为 100。
     */
    Limit?: number;
    /**
     * 偏移量，默认为 0。
     */
    Offset?: number;
    /**
     * 请求过滤参数，支持按照实例名称、ID和标签键值（Name、GatewayId、Tag）筛选
     */
    Filters?: Array<Filter>;
}
/**
 * 扩容策略
 */
export interface AutoScalerPolicy {
    /**
     * 类型，Pods或Percent
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: number;
    /**
     * 扩容周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PeriodSeconds?: number;
}
/**
 * DescribeNacosServerInterfaces返回参数结构体
 */
export interface DescribeNacosServerInterfacesResponse {
    /**
     * 接口总个数
     */
    TotalCount?: number;
    /**
     * 接口列表
     */
    Content?: Array<NacosServerInterface>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 获取云原生API网关实例网络配置结果。
 */
export interface DescribeCloudNativeAPIGatewayConfigResult {
    /**
     * 网关实例ID。
     */
    GatewayId?: string;
    /**
     * 分组网络配置列表。
     */
    ConfigList?: Array<CloudNativeAPIGatewayConfig>;
    /**
     * 分组子网信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupSubnetId?: string;
    /**
     * 分组VPC信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupVpcId?: string;
    /**
     * 分组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
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
     * Headers
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
 * CreateCloudNativeAPIGatewayCertificate返回参数结构体
 */
export interface CreateCloudNativeAPIGatewayCertificateResponse {
    /**
     * 创建证书结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: CertificateInfo;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 存储的额外选项
 */
export interface StorageOption {
    /**
     * 存储对象，分为snap和txn两种
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 存储类型，分为三类CLOUD_PREMIUM/CLOUD_SSD/CLOUD_SSD_PLUS，分别对应高性能云硬盘、SSD云硬盘、增强型SSD云硬盘
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 存储容量，[50, 3200]的范围
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Capacity?: number;
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
 * ModifyNativeGatewayServerGroup请求参数结构体
 */
export interface ModifyNativeGatewayServerGroupRequest {
    /**
     * 云原生API网关实例ID。
     */
    GatewayId: string;
    /**
     * 网关分组 id
     */
    GroupId: string;
    /**
     * 云原生API网关名字, 最多支持60个字符。
     */
    Name?: string;
    /**
     * 云原生API网关描述信息, 最多支持120个字符。
     */
    Description?: string;
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
 * 实例地域信息描述
 */
export interface DescribeInstanceRegionInfo {
    /**
     * 引擎部署地域信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EngineRegion?: string;
    /**
     * 引擎在该地域的副本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Replica?: number;
    /**
     * 引擎在该地域的规格id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpecId?: string;
    /**
     * 客户端内网的网络信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntranetVpcInfos?: Array<VpcInfo>;
    /**
     * 控制台内网的网络信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsoleIntranetVpcInfos?: Array<VpcInfo>;
    /**
     * 是否开公网
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableClientInternet?: boolean;
    /**
     * 限流客户端内网的网络信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LimiterIntranetVpcInfos?: Array<VpcInfo>;
    /**
     * 是否为主地域，仅在服务治理中心多地域有效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MainRegion?: boolean;
    /**
     * 该地域所在的EKS集群
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EKSClusterID?: string;
}
/**
 * 网关实例策略
 */
export interface CloudNativeAPIGatewayStrategy {
    /**
     * 策略ID
     */
    StrategyId?: string;
    /**
     * 策略名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StrategyName?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 策略描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 弹性伸缩配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Config?: CloudNativeAPIGatewayStrategyAutoScalerConfig;
    /**
     * 网关实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayId?: string;
    /**
     * 定时伸缩配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CronConfig?: CloudNativeAPIGatewayStrategyCronScalerConfig;
    /**
     * 最大节点数
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    MaxReplicas?: number;
}
/**
 * DescribeCloudNativeAPIGateways返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewaysResponse {
    /**
     * 获取云原生API网关实例列表响应结果。
     */
    Result: ListCloudNativeAPIGatewayResult;
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
 * UpdateCloudNativeAPIGatewaySpec请求参数结构体
 */
export interface UpdateCloudNativeAPIGatewaySpecRequest {
    /**
     * 云原生API网关实例ID。
  只支持后付费实例
     */
    GatewayId: string;
    /**
     * 网关分组id
     */
    GroupId: string;
    /**
     * 网关分组节点规格配置。
     */
    NodeConfig: CloudNativeAPIGatewayNodeConfig;
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
 * 指标伸缩行为
 */
export interface AutoScalerBehavior {
    /**
     * 扩容行为配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScaleUp?: AutoScalerRules;
    /**
     * 缩容行为配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScaleDown?: AutoScalerRules;
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
 * DeleteCloudNativeAPIGatewayCertificate请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayCertificateRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 证书Id
     */
    Id: string;
}
/**
 * 云原生网关分组信息
 */
export interface NativeGatewayServerGroup {
    /**
     * 云原生网关分组唯一id
     */
    GroupId?: string;
    /**
     * 分组名
     */
    Name?: string;
    /**
     * 描述信息
     */
    Description?: string;
    /**
     * 节点规格、节点数信息
     */
    NodeConfig?: CloudNativeAPIGatewayNodeConfig;
    /**
     * 网关分组状态。
     */
    Status?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 是否是默认分组。
  0：否。
  1：是。
     */
    IsFirstGroup?: number;
    /**
     * 关联策略信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindingStrategy?: CloudNativeAPIGatewayStrategy;
    /**
     * 网关实例 id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayId?: string;
    /**
     * 带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModifyTime?: string;
    /**
     * 子网id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetIds?: string;
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
 * 弹性伸缩配置指标
 */
export interface CloudNativeAPIGatewayStrategyAutoScalerConfigMetric {
    /**
     * 指标类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 指标资源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 指标目标类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetType?: string;
    /**
     * 指标目标值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetValue?: number;
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
 * UpdateCloudNativeAPIGatewaySpec返回参数结构体
 */
export interface UpdateCloudNativeAPIGatewaySpecResponse {
    /**
     * 更新云原生API网关实例规格的响应结果。
     */
    Result?: UpdateCloudNativeAPIGatewayResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 云原生API网关配置信息。
 */
export interface CloudNativeAPIGatewayConfig {
    /**
     * 控制台类型。
     */
    ConsoleType?: string;
    /**
     * HTTP链接地址。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HttpUrl?: string;
    /**
     * HTTPS链接地址。
     */
    HttpsUrl?: string;
    /**
     * 网络类型, Open|Internal。
     */
    NetType?: string;
    /**
     * 管理员用户名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdminUser?: string;
    /**
     * 管理员密码。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdminPassword?: string;
    /**
     * 网络状态, Open|Closed|Updating
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 网络访问策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessControl?: NetworkAccessControl;
    /**
     * 内网子网 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 内网VPC ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 负载均衡的描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 负载均衡的规格类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlaType?: string;
    /**
     * clb规格名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlaName?: string;
    /**
     * clb vip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Vip?: string;
    /**
     * 带宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 是否多可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MultiZoneFlag?: boolean;
    /**
     * 主可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MasterZoneId?: string;
    /**
     * 备可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlaveZoneId?: string;
    /**
     * 主可用区名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MasterZoneName?: string;
    /**
     * 备可用区名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlaveZoneName?: string;
    /**
     * 网络 id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetworkId?: string;
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
 * DescribeNativeGatewayServerGroups请求参数结构体
 */
export interface DescribeNativeGatewayServerGroupsRequest {
    /**
     * 云原生API网关实例ID。
     */
    GatewayId: string;
    /**
     * 翻页从第几个开始获取
     */
    Offset?: number;
    /**
     * 翻页获取多少个
     */
    Limit?: number;
    /**
     * 过滤参数
     */
    Filters?: Array<Filter>;
}
/**
 * 证书信息
 */
export interface CertificateInfo {
    /**
     * 唯一id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
}
/**
 * 获取云原生API网关实例协议端口列表响应结果
 */
export interface DescribeGatewayInstancePortResult {
    /**
     * 云原生API网关ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayId?: string;
    /**
     * 网关实例协议端口列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayInstancePortList?: Array<GatewayInstanceSchemeAndPorts>;
}
/**
 * DeleteCloudNativeAPIGateway请求参数结构体
 */
export interface DeleteCloudNativeAPIGatewayRequest {
    /**
     * 云原生API网关实例ID。
     */
    GatewayId: string;
    /**
     * 是否删除实例关联的 CLS 日志主题。
     */
    DeleteClsTopic?: boolean;
}
/**
 * DescribeCloudNativeAPIGatewayCertificateDetails返回参数结构体
 */
export interface DescribeCloudNativeAPIGatewayCertificateDetailsResponse {
    /**
     * 无
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: KongCertificate;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateCloudNativeAPIGatewayCertificateInfo请求参数结构体
 */
export interface UpdateCloudNativeAPIGatewayCertificateInfoRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 证书id
     */
    Id: string;
    /**
     * 绑定的域名列表
     */
    BindDomains: Array<string>;
    /**
     * 证书名称
     */
    Name?: string;
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
 * DeleteCloudNativeAPIGateway返回参数结构体
 */
export interface DeleteCloudNativeAPIGatewayResponse {
    /**
     * 删除云原生API网关实例响应结果。
     */
    Result: DeleteCloudNativeAPIGatewayResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * CreateCloudNativeAPIGatewayCertificate请求参数结构体
 */
export interface CreateCloudNativeAPIGatewayCertificateRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 绑定的域名
     */
    BindDomains: Array<string>;
    /**
     * ssl平台证书 Id
     */
    CertId: string;
    /**
     * 证书名称
     */
    Name?: string;
    /**
     * 证书私钥
     * @deprecated
     */
    Key?: string;
    /**
     * 证书pem格式
     * @deprecated
     */
    Crt?: string;
}
/**
 * ModifyCloudNativeAPIGateway返回参数结构体
 */
export interface ModifyCloudNativeAPIGatewayResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 网络访问策略
 */
export interface NetworkAccessControl {
    /**
     * 访问模式：Whitelist|Blacklist
     */
    Mode: string;
    /**
     * 白名单列表
     */
    CidrWhiteList?: Array<string>;
    /**
     * 黑名单列表
     */
    CidrBlackList?: Array<string>;
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
 * 更新云原生API网关响应结果。
 */
export interface UpdateCloudNativeAPIGatewayResult {
    /**
     * 云原生API网关ID。
     */
    GatewayId?: string;
    /**
     * 云原生网关状态。
     */
    Status?: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
}
/**
 * DescribeCloudNativeAPIGateway请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayRequest {
    /**
     * 云原生API网关实例ID
     */
    GatewayId: string;
}
/**
 * DescribeNativeGatewayServerGroups返回参数结构体
 */
export interface DescribeNativeGatewayServerGroupsResponse {
    /**
     * 分组列表信息
     */
    Result: NativeGatewayServerGroups;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 定时伸缩配置参数
 */
export interface CloudNativeAPIGatewayStrategyCronScalerConfigParam {
    /**
     * 定时伸缩周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Period?: string;
    /**
     * 定时伸缩开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartAt?: string;
    /**
     * 定时伸缩目标节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetReplicas?: number;
    /**
     * 定时伸缩cron表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Crontab?: string;
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
 * 公网负载均衡配置
 */
export interface InternetConfig {
    /**
     * 公网地址版本，可选："IPV4" | "IPV6" 。不填默认 IPV4 。
     */
    InternetAddressVersion?: string;
    /**
     * 公网付费类型，当前仅可选："BANDWIDTH"。不填默认为 "BANDWIDTH"
     */
    InternetPayMode?: string;
    /**
     * 公网带宽。
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 负载均衡描述
     */
    Description?: string;
    /**
     * 负载均衡的规格类型，支持clb.c2.medium、clb.c3.small、clb.c3.medium、clb.c4.small、clb.c4.medium、clb.c4.large、clb.c4.xlarge，不传为共享型。
     */
    SlaType?: string;
    /**
     * 负载均衡是否多可用区
     */
    MultiZoneFlag?: boolean;
    /**
     * 主可用区
     */
    MasterZoneId?: string;
    /**
     * 备可用区
     */
    SlaveZoneId?: string;
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
 * 弹性伸缩策略
 */
export interface CloudNativeAPIGatewayStrategyAutoScalerConfig {
    /**
     * 最大副本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxReplicas?: number;
    /**
     * 指标列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Metrics?: Array<CloudNativeAPIGatewayStrategyAutoScalerConfigMetric>;
    /**
     * 是否开启指标伸缩
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enabled?: boolean;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    CreateTime?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    ModifyTime?: string;
    /**
     * 弹性策略ID
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    StrategyId?: string;
    /**
     * 指标配置ID
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    AutoScalerId?: string;
    /**
     * 指标伸缩行为配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Behavior?: AutoScalerBehavior;
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
    TotalCount?: number;
    /**
     * 实例记录
     */
    Content?: Array<SREInstance>;
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
 * 创建网关分组信息
 */
export interface CreateCloudNativeAPIGatewayServerGroupResult {
    /**
     * 网关实例id
     */
    GatewayId?: string;
    /**
     * 分组id
     */
    GroupId?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
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
    /**
     * 绑定的kubernetes集群所在地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindRegion?: string;
}
/**
 * DescribeCloudNativeAPIGatewayCertificateDetails请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayCertificateDetailsRequest {
    /**
     * 网关ID
     */
    GatewayId: string;
    /**
     * 证书Id
     */
    Id: string;
}
/**
 * 指标伸缩的规则
 */
export interface AutoScalerRules {
    /**
     * 稳定窗口时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StabilizationWindowSeconds?: number;
    /**
     * 选择策略依据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelectPolicy?: string;
    /**
     * 扩容策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Policies?: Array<AutoScalerPolicy>;
}
/**
 * 服务的后端配置
 */
export interface KongUpstreamInfo {
    /**
     * IP或域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Host?: string;
    /**
     * 端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * 服务来源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceID?: string;
    /**
     * 命名空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Namespace?: string;
    /**
     * 服务（注册中心或Kubernetes中的服务）名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName?: string;
    /**
     * 服务后端类型是IPList时提供
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Targets?: Array<KongTarget>;
    /**
     * 服务来源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceType?: string;
    /**
     * SCF函数类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScfType?: string;
    /**
     * SCF函数命名空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScfNamespace?: string;
    /**
     * SCF函数名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScfLambdaName?: string;
    /**
     * SCF函数版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScfLambdaQualifier?: string;
    /**
     * 冷启动时间，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlowStart?: number;
    /**
     * 负载均衡算法，默认为 round-robin，还支持 least-connections，consisten_hashing
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Algorithm?: string;
    /**
     * CVM弹性伸缩组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoScalingGroupID?: string;
    /**
     * CVM弹性伸缩组端口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoScalingCvmPort?: number;
    /**
     * CVM弹性伸缩组使用的CVM TAT命令状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoScalingTatCmdStatus?: string;
    /**
     * CVM弹性伸缩组生命周期挂钩状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoScalingHookStatus?: string;
    /**
     * 服务来源的名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceName?: string;
    /**
     * 精确的服务来源类型，新建服务来源时候传入的类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RealSourceType?: string;
    /**
     * upstream健康状态HEALTHY（健康）, UNHEALTHY（异常）, HEALTHCHECKS_OFF（未开启）和NONE（不支持健康检查）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthStatus?: string;
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
    DestinationPorts?: Array<number | bigint>;
    /**
     * 路由的Headers
     */
    Headers?: Array<KVMapping>;
}
/**
 * CreateNativeGatewayServerGroup返回参数结构体
 */
export interface CreateNativeGatewayServerGroupResponse {
    /**
     * 网关分组创建信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: CreateCloudNativeAPIGatewayServerGroupResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 云原生网关证书预览信息
 */
export interface KongCertificatesPreview {
    /**
     * 证书名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id: string;
    /**
     * 绑定的域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindDomains?: Array<string>;
    /**
     * 证书状态：expired(已过期)
                     active(生效中)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 证书pem格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Crt?: string;
    /**
     * 证书私钥
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * 证书过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
    /**
     * 证书上传时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 证书签发时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IssueTime?: string;
    /**
     * 证书来源：native(kong自定义证书)
                      ssl(ssl平台证书)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertSource?: string;
    /**
     * ssl平台证书Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertId?: string;
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
    Replicas?: Array<ZookeeperReplica>;
    /**
     * 副本个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 网关分组列表
 */
export interface NativeGatewayServerGroups {
    /**
     * 总数
     */
    TotalCount: number;
    /**
     * 分组信息数组。
     */
    GatewayGroupList: Array<NativeGatewayServerGroup>;
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
 * 创建云原生API网关响应结果。
 */
export interface CreateCloudNativeAPIGatewayResult {
    /**
     * 云原生API网关ID。
     */
    GatewayId: string;
    /**
     * 云原生网关状态。
     */
    Status: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
}
/**
 * ModifyCloudNativeAPIGateway请求参数结构体
 */
export interface ModifyCloudNativeAPIGatewayRequest {
    /**
     * 云原生API网关实例ID。
     */
    GatewayId: string;
    /**
     * 云原生API网关名字, 最多支持60个字符。
     */
    Name?: string;
    /**
     * 云原生API网关描述信息, 最多支持120个字符。
     */
    Description?: string;
    /**
     * 是否开启 CLS 日志。暂时取值只能是 true，即只能从关闭状态变成开启状态。
     */
    EnableCls?: boolean;
    /**
     * 公网计费模式。可选取值 BANDWIDTH | TRAFFIC ，表示按带宽和按流量计费。
     */
    InternetPayMode?: string;
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
    /**
     * 请求路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
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
 * DescribeCloudNativeAPIGatewayPorts请求参数结构体
 */
export interface DescribeCloudNativeAPIGatewayPortsRequest {
    /**
     * 云原生API网关实例ID
     */
    GatewayId: string;
}
/**
 * ModifyNativeGatewayServerGroup返回参数结构体
 */
export interface ModifyNativeGatewayServerGroupResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 是否为主地域
     */
    MainRegion?: boolean;
    /**
     * 引擎规格ID
     */
    SpecId?: string;
}
/**
 * UpdateCloudNativeAPIGatewayCertificateInfo返回参数结构体
 */
export interface UpdateCloudNativeAPIGatewayCertificateInfoResponse {
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
