/**
 * UnBindSubDomain返回参数结构体
 */
export interface UnBindSubDomainResponse {
    /**
      * 解绑自定义域名操作是否成功。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateApiKey请求参数结构体
 */
export interface UpdateApiKeyRequest {
    /**
      * 待更换的密钥 ID。
      */
    AccessKeyId: string;
    /**
      * 待更换的密钥 Key，更新自定义密钥时，该字段为必传。长度10 - 50字符，包括字母、数字、英文下划线。
      */
    AccessKeySecret?: string;
}
/**
 * 展示服务列表用
 */
export interface Service {
    /**
      * 内网访问https端口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerHttpsPort: number;
    /**
      * 用户自定义的服务描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceDesc: string;
    /**
      * 服务的前端请求类型。如http、https 或者 http&https。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime: string;
    /**
      * 服务支持的网络类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetTypes: Array<string>;
    /**
      * 独占集群名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExclusiveSetName: string;
    /**
      * 服务唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceId: string;
    /**
      * IP版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpVersion: string;
    /**
      * 已经发布的环境列表。如test、prepub、release。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AvailableEnvironments: Array<string>;
    /**
      * 用户自定义的服务名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceName: string;
    /**
      * 系统为该服务分配的外网域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OuterSubDomain: string;
    /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 内网访问http端口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerHttpPort: number;
    /**
      * 系统为该服务自动分配的内网域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InnerSubDomain: string;
    /**
      * 服务的计费状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TradeIsolateStatus: number;
    /**
      * 服务绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
}
/**
 * 服务发布版本
 */
export interface ServiceReleaseVersion {
    /**
      * 发布版本总数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 发布版本列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionList: Array<ServiceReleaseHistoryInfo>;
}
/**
 * api绑定使用计划列表
 */
export interface ApiUsagePlanSet {
    /**
      * API 绑定的使用计划总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * API 绑定使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiUsagePlanList: Array<ApiUsagePlan>;
}
/**
 * DescribeUsagePlan请求参数结构体
 */
export interface DescribeUsagePlanRequest {
    /**
      * 待查询的使用计划唯一 ID。
      */
    UsagePlanId: string;
}
/**
 * DeleteUsagePlan返回参数结构体
 */
export interface DeleteUsagePlanResponse {
    /**
      * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisableApiKey返回参数结构体
 */
export interface DisableApiKeyResponse {
    /**
      * 禁用密钥操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnReleaseService请求参数结构体
 */
export interface UnReleaseServiceRequest {
    /**
      * 待下线服务的唯一 ID。
      */
    ServiceId: string;
    /**
      * 待下线的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。
      */
    EnvironmentName: string;
    /**
      * 保留字段，待下线的API列表。
      */
    ApiIds?: Array<string>;
}
/**
 * ModifySubDomain请求参数结构体
 */
export interface ModifySubDomainRequest {
    /**
      * 服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 待修改路径映射的自定义的域名。
      */
    SubDomain: string;
    /**
      * 是否修改为使用默认路径映射。为 true，表示使用默认路径映射，为 false，表示使用自定义路径映射。
      */
    IsDefaultMapping: boolean;
    /**
      * 证书 ID，协议包含 HTTPS 的时候要传该字段。
      */
    CertificateId?: string;
    /**
      * 修改后的自定义域名协议类型。（http，https 或 http&https)
      */
    Protocol?: string;
    /**
      * 修改后的路径映射列表。
      */
    PathMappingSet?: Array<PathMapping>;
    /**
      * 网络类型 （'INNER' 或 'OUTER'）
      */
    NetType?: string;
    /**
      * 是否将HTTP请求强制跳转 HTTPS，默认为false。参数为 true时，API网关会将所有使用该自定义域名的 HTTP 协议的请求重定向至 HTTPS 协议进行转发。
      */
    IsForcedHttps?: boolean;
}
/**
 * DescribeServiceEnvironmentList返回参数结构体
 */
export interface DescribeServiceEnvironmentListResponse {
    /**
      * 服务绑定环境详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ServiceEnvironmentSet;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyApi返回参数结构体
 */
export interface ModifyApiResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 服务环境策略
 */
export interface ServiceEnvironmentStrategy {
    /**
      * 环境名。
      */
    EnvironmentName: string;
    /**
      * 访问服务对应环境的url。
      */
    Url: string;
    /**
      * 发布状态。
      */
    Status: number;
    /**
      * 发布的版本号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionName: string;
    /**
      * 限流值。
      */
    Strategy: number;
}
/**
 * DemoteServiceUsagePlan请求参数结构体
 */
export interface DemoteServiceUsagePlanRequest {
    /**
      * 使用计划ID。
      */
    UsagePlanId: string;
    /**
      * 待降级的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 环境名称。
      */
    Environment: string;
}
/**
 * tsf serverless入参
 */
export interface TargetServicesReq {
    /**
      * vm ip
      */
    VmIp: string;
    /**
      * vpc id
      */
    VpcId: string;
    /**
      * vm port
      */
    VmPort: number;
    /**
      * cvm所在宿主机ip
      */
    HostIp: string;
    /**
      * docker ip
      */
    DockerIp?: string;
}
/**
 * TsfLoadBalanceConf 出参使用
 */
export interface TsfLoadBalanceConfResp {
    /**
      * 是否开启负载均衡。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsLoadBalance?: boolean;
    /**
      * 负载均衡方式。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method?: string;
    /**
      * 是否开启会话保持。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionStickRequired?: boolean;
    /**
      * 会话保持超时时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionStickTimeout?: number;
}
/**
 * CreateIPStrategy请求参数结构体
 */
export interface CreateIPStrategyRequest {
    /**
      * 服务的唯一ID。
      */
    ServiceId: string;
    /**
      * 用户自定义的策略名称。
      */
    StrategyName: string;
    /**
      * 策略类型。支持WHITE（白名单）和BLACK（黑名单）。
      */
    StrategyType: string;
    /**
      * 策略详情。
      */
    StrategyData: string;
}
/**
 * ip策略
 */
export interface IPStrategy {
    /**
      * 策略唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategyId: string;
    /**
      * 用户自定义策略名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategyName: string;
    /**
      * 策略类型。支持WHITE（白名单）和BLACK（黑名单）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategyType: string;
    /**
      * IP列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategyData: string;
    /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 修改时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime: string;
    /**
      * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceId: string;
    /**
      * 策略绑定的API数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindApiTotalCount: number;
    /**
      * 绑定的API详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindApis: Array<DesApisStatus>;
}
/**
 * DescribeUsagePlansStatus返回参数结构体
 */
export interface DescribeUsagePlansStatusResponse {
    /**
      * 使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: UsagePlansStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 健康检查配置，包括TsfHealthCheckConf和TargetServicesHealthCheckConf
 */
export interface HealthCheckConf {
    /**
      * 是否开启健康检查。
      */
    IsHealthCheck?: boolean;
    /**
      * 健康检查阈值。
      */
    RequestVolumeThreshold?: number;
    /**
      * 窗口大小。
      */
    SleepWindowInMilliseconds?: number;
    /**
      * 阈值百分比。
      */
    ErrorThresholdPercentage?: number;
}
/**
 * API网关插件详情。
 */
export interface Plugin {
    /**
      * 插件ID。
      */
    PluginId: string;
    /**
      * 插件名称。
      */
    PluginName: string;
    /**
      * 插件类型。
      */
    PluginType: string;
    /**
      * 插件定义语句。
      */
    PluginData: string;
    /**
      * 插件描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 插件创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
      */
    CreatedTime: string;
    /**
      * 插件修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
      */
    ModifiedTime: string;
    /**
      * 插件绑定的API总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AttachedApiTotalCount: number;
    /**
      * 插件绑定的API信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AttachedApis: Array<AttachedApiInfo>;
}
/**
 * DescribeApiUsagePlan返回参数结构体
 */
export interface DescribeApiUsagePlanResponse {
    /**
      * api绑定使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ApiUsagePlanSet;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteIPStrategy请求参数结构体
 */
export interface DeleteIPStrategyRequest {
    /**
      * 待删除的IP策略所属的服务唯一ID。
      */
    ServiceId: string;
    /**
      * 待删除的IP策略唯一ID。
      */
    StrategyId: string;
}
/**
 * 自定义服务域名展示
 */
export interface DomainSets {
    /**
      * 服务下的自定义域名数量。
      */
    TotalCount: number;
    /**
      * 自定义服务域名列表。
      */
    DomainSet: Array<DomainSetList>;
}
/**
 * DeleteUsagePlan请求参数结构体
 */
export interface DeleteUsagePlanRequest {
    /**
      * 待删除的使用计划唯一 ID。
      */
    UsagePlanId: string;
}
/**
 * DeleteService请求参数结构体
 */
export interface DeleteServiceRequest {
    /**
      * 待删除服务的唯一 ID。
      */
    ServiceId: string;
}
/**
 * DescribeApiEnvironmentStrategy请求参数结构体
 */
export interface DescribeApiEnvironmentStrategyRequest {
    /**
      * API所属服务唯一ID。
      */
    ServiceId: string;
    /**
      * 环境列表。
      */
    EnvironmentNames?: Array<string>;
    /**
      * API唯一ID。
      */
    ApiId?: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
}
/**
 * UpdateService返回参数结构体
 */
export interface UpdateServiceResponse {
    /**
      * 切换版本操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ServiceConfig
 */
export interface ServiceConfig {
    /**
      * 后端类型。启用vpc时生效，目前支持的类型为clb。
      */
    Product?: string;
    /**
      * vpc 的唯一ID。
      */
    UniqVpcId?: string;
    /**
      * API 的后端服务url。如果ServiceType是HTTP，则此参数必传。
      */
    Url?: string;
    /**
      * API 的后端服务路径，如 /path。如果 ServiceType 是 HTTP，则此参数必传。前后端路径可不同。
      */
    Path?: string;
    /**
      * API的后端服务请求方法，如 GET。如果 ServiceType 是 HTTP，则此参数必传。前后端方法可不同。
      */
    Method?: string;
}
/**
 * 服务绑定环境详情
 */
export interface ServiceEnvironmentSet {
    /**
      * 服务绑定环境总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 服务绑定环境列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvironmentList: Array<Environment>;
}
/**
 * DescribeService返回参数结构体
 */
export interface DescribeServiceResponse {
    /**
      * 服务唯一ID。
      */
    ServiceId?: string;
    /**
      * 服务 环境列表。
      */
    AvailableEnvironments?: Array<string>;
    /**
      * 服务名称。
      */
    ServiceName?: string;
    /**
      * 服务描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceDesc?: string;
    /**
      * 服务支持协议，可选值为http、https、http&https。
      */
    Protocol?: string;
    /**
      * 服务创建时间。
      */
    CreatedTime?: string;
    /**
      * 服务修改时间。
      */
    ModifiedTime?: string;
    /**
      * 独立集群名称。
      */
    ExclusiveSetName?: string;
    /**
      * 网络类型列表，INNER为内网访问，OUTER为外网访问。
      */
    NetTypes?: Array<string>;
    /**
      * 内网访问子域名。
      */
    InternalSubDomain?: string;
    /**
      * 外网访问子域名。
      */
    OuterSubDomain?: string;
    /**
      * 内网访问http服务端口号。
      */
    InnerHttpPort?: number;
    /**
      * 内网访问https端口号。
      */
    InnerHttpsPort?: number;
    /**
      * API总数。
      */
    ApiTotalCount?: number;
    /**
      * API列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiIdStatusSet?: Array<ApiIdStatus>;
    /**
      * 使用计划总数量。
      */
    UsagePlanTotalCount?: number;
    /**
      * 使用计划数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanList?: Array<UsagePlan>;
    /**
      * IP版本。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpVersion?: string;
    /**
      * 此服务的用户类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserType?: string;
    /**
      * 预留字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SetId?: number;
    /**
      * 服务绑定的标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags?: Array<Tag>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 使用计划绑定环境的列表。
 */
export interface UsagePlanEnvironmentStatus {
    /**
      * 使用计划绑定的服务的环境数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 使用计划已经绑定的各个服务的环境状态。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvironmentList: Array<UsagePlanEnvironment>;
}
/**
 * ModifyIPStrategy返回参数结构体
 */
export interface ModifyIPStrategyResponse {
    /**
      * 修改操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindSubDomain返回参数结构体
 */
export interface BindSubDomainResponse {
    /**
      * 绑定操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindEnvironment返回参数结构体
 */
export interface BindEnvironmentResponse {
    /**
      * 绑定操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * API绑定的标签信息。
 */
export interface Tag {
    /**
      * 标签的 key。
      */
    Key: string;
    /**
      * 便签的 value。
      */
    Value: string;
}
/**
 * DescribeServiceEnvironmentStrategy返回参数结构体
 */
export interface DescribeServiceEnvironmentStrategyResponse {
    /**
      * 限流策略列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ServiceEnvironmentStrategyStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 常量参数
 */
export interface ConstantParameter {
    /**
      * 常量参数名称。只有 ServiceType 是 HTTP 才会用到此参数。
      */
    Name?: string;
    /**
      * 常量参数描述。只有 ServiceType 是 HTTP 才会用到此参数。
      */
    Desc?: string;
    /**
      * 常量参数位置。只有 ServiceType 是 HTTP 才会用到此参数。
      */
    Position?: string;
    /**
      * 常量参数默认值。只有 ServiceType 是 HTTP 才会用到此参数。
      */
    DefaultValue?: string;
}
/**
 * 使用计划列表
 */
export interface UsagePlansStatus {
    /**
      * 符合条件的使用计划数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanStatusSet: Array<UsagePlanStatusInfo>;
}
/**
 * ModifySubDomain返回参数结构体
 */
export interface ModifySubDomainResponse {
    /**
      * 修改自定义域名操作是否成功。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 检索条件入参
 */
export interface LogQuery {
    /**
      * 检索字段
      */
    Name: string;
    /**
      * 操作符
      */
    Operator: string;
    /**
      * 检索值
      */
    Value: string;
}
/**
 * ServiceParameter
 */
export interface ServiceParameter {
    /**
      * API的后端服务参数名称。只有ServiceType是HTTP才会用到此参数。前后端参数名称可不同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * API 的后端服务参数位置，如 head。只有 ServiceType 是 HTTP 才会用到此参数。前后端参数位置可配置不同。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Position?: string;
    /**
      * API 的后端服务参数对应的前端参数位置，如 head。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelevantRequestParameterPosition?: string;
    /**
      * API 的后端服务参数对应的前端参数名称。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelevantRequestParameterName?: string;
    /**
      * API 的后端服务参数默认值。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DefaultValue?: string;
    /**
      * API 的后端服务参数备注。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelevantRequestParameterDesc?: string;
    /**
      * API 的后端服务参数类型。只有 ServiceType 是 HTTP 才会用到此参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelevantRequestParameterType?: string;
}
/**
 * ModifyService返回参数结构体
 */
export interface ModifyServiceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisableApiKey请求参数结构体
 */
export interface DisableApiKeyRequest {
    /**
      * 待禁用的密钥 ID。
      */
    AccessKeyId: string;
}
/**
 * 自定义域名的路径映射。
 */
export interface PathMapping {
    /**
      * 路径。
      */
    Path: string;
    /**
      * 发布环境，可选值为“test”、 ”prepub“、”release“。
      */
    Environment: string;
}
/**
 * UnBindIPStrategy返回参数结构体
 */
export interface UnBindIPStrategyResponse {
    /**
      * 解绑操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindIPStrategy返回参数结构体
 */
export interface BindIPStrategyResponse {
    /**
      * 绑定操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApisStatus请求参数结构体
 */
export interface DescribeApisStatusRequest {
    /**
      * API 所在的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 返回数量，默认为 20，最大值为 100
      */
    Limit?: number;
    /**
      * API过滤条件。支持ApiId、ApiName、ApiPath、ApiType、AuthRelationApiId、AuthType、ApiBuniessType、NotUsagePlanId、Environment、Tags (values为 $tag_key:tag_value的列表)、TagKeys （values 为 tag key的列表）。
      */
    Filters?: Array<Filter>;
}
/**
 * DeleteServiceSubDomainMapping请求参数结构体
 */
export interface DeleteServiceSubDomainMappingRequest {
    /**
      * 服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 服务绑定的自定义域名。
      */
    SubDomain: string;
    /**
      * 待删除映射的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。
      */
    Environment: string;
}
/**
 * DescribeIPStrategy返回参数结构体
 */
export interface DescribeIPStrategyResponse {
    /**
      * IP策略详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: IPStrategy;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteApi返回参数结构体
 */
export interface DeleteApiResponse {
    /**
      * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateApi返回参数结构体
 */
export interface CreateApiResponse {
    /**
      * api信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: CreateApiRsp;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeIPStrategyApisStatus请求参数结构体
 */
export interface DescribeIPStrategyApisStatusRequest {
    /**
      * 服务唯一ID。
      */
    ServiceId: string;
    /**
      * 策略唯一ID。
      */
    StrategyId: string;
    /**
      * 策略所在环境。
      */
    EnvironmentName: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 过滤条件。支持 ApiPath、ApiName、KeyWord（模糊查询Path 和Name）。
      */
    Filters?: Array<Filter>;
}
/**
 * UnBindEnvironment请求参数结构体
 */
export interface UnBindEnvironmentRequest {
    /**
      * 绑定类型，取值为 API、SERVICE，默认值为 SERVICE。
      */
    BindType: string;
    /**
      * 待绑定的使用计划唯一 ID 列表。
      */
    UsagePlanIds: Array<string>;
    /**
      * 待解绑的服务环境。
      */
    Environment: string;
    /**
      * 待解绑的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * API 唯一 ID 数组，当 BindType=API 时，需要传入此参数。
      */
    ApiIds?: Array<string>;
}
/**
 * Oauth授权配置信息
 */
export interface OauthConfig {
    /**
      * 公钥，用于验证用户token。
      */
    PublicKey: string;
    /**
      * token传递位置。
      */
    TokenLocation: string;
    /**
      * 重定向地址，用于引导用户登录操作。
      */
    LoginRedirectUrl?: string;
}
/**
 * ModifyApiEnvironmentStrategy请求参数结构体
 */
export interface ModifyApiEnvironmentStrategyRequest {
    /**
      * 服务唯一ID。
      */
    ServiceId: string;
    /**
      * 限流值。
      */
    Strategy: number;
    /**
      * 环境名。
      */
    EnvironmentName: string;
    /**
      * API列表。
      */
    ApiIds: Array<string>;
}
/**
 * ModifyUsagePlan返回参数结构体
 */
export interface ModifyUsagePlanResponse {
    /**
      * 使用计划详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: UsagePlanInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateUsagePlan返回参数结构体
 */
export interface CreateUsagePlanResponse {
    /**
      * 使用计划详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: UsagePlanInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 请求参数
 */
export interface ReqParameter {
    /**
      * API 的前端参数名称。
      */
    Name: string;
    /**
      * API 的前端参数位置，如 header。目前支持 header、query、path。
      */
    Position: string;
    /**
      * API 的前端参数类型，如 String、int。
      */
    Type: string;
    /**
      * API 的前端参数默认值。
      */
    DefaultValue: string;
    /**
      * API 的前端参数是否必填，True：表示必填，False：表示可选。
      */
    Required: boolean;
    /**
      * API 的前端参数备注。
      */
    Desc: string;
}
/**
 * DescribeServicesStatus请求参数结构体
 */
export interface DescribeServicesStatusRequest {
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 过滤条件。支持ServiceId、ServiceName、NotUsagePlanId、Environment、IpVersion。
      */
    Filters?: Array<Filter>;
}
/**
 * 前端路径配置
 */
export interface RequestConfig {
    /**
      * API 的路径，如 /path。
      */
    Path: string;
    /**
      * API 的请求方法，如 GET。
      */
    Method: string;
}
/**
 * DeleteApiKey返回参数结构体
 */
export interface DeleteApiKeyResponse {
    /**
      * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * usagePlan详情
 */
export interface UsagePlan {
    /**
      * 环境名称。
      */
    Environment: string;
    /**
      * 使用计划唯一ID。
      */
    UsagePlanId: string;
    /**
      * 使用计划名称。
      */
    UsagePlanName: string;
    /**
      * 使用计划描述。
      */
    UsagePlanDesc: string;
    /**
      * 使用计划qps，-1表示没有限制。
      */
    MaxRequestNumPreSec: number;
    /**
      * 使用计划时间。
      */
    CreatedTime: string;
    /**
      * 使用计划修改时间。
      */
    ModifiedTime: string;
}
/**
 * DescribeServiceReleaseVersion请求参数结构体
 */
export interface DescribeServiceReleaseVersionRequest {
    /**
      * 待查询的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
}
/**
 * DescribeUsagePlanSecretIds请求参数结构体
 */
export interface DescribeUsagePlanSecretIdsRequest {
    /**
      * 绑定的使用计划唯一 ID。
      */
    UsagePlanId: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
}
/**
 * DescribeLogSearch返回参数结构体
 */
export interface DescribeLogSearchResponse {
    /**
      * 获取更多检索结果的游标，值为""表示无后续结果
      */
    ConText?: string;
    /**
      * 由0或多条日志组成，每条日志格式如下：
'[$app_id][$env_name][$service_id][$http_host][$api_id][$uri][$scheme][rsp_st:$status][ups_st:$upstream_status]'
'[cip:$remote_addr][uip:$upstream_addr][vip:$server_addr][rsp_len:$bytes_sent][req_len:$request_length]'
'[req_t:$request_time][ups_rsp_t:$upstream_response_time][ups_conn_t:$upstream_connect_time][ups_head_t:$upstream_header_time]’
'[err_msg:$err_msg][tcp_rtt:$tcpinfo_rtt][$pid][$time_local][req_id:$request_id]';

说明：
app_id： 用户 ID。
env_name：环境名称。
service_id： 服务 ID。
http_host： 域名。
api_id： API 的 ID。
uri：请求的路径。
scheme： HTTP/HTTPS 协议。
rsp_st： 请求响应状态码。
ups_st： 后端业务服务器的响应状态码（如果请求透传到后端，改变量不为空。如果请求在 APIGW 就被拦截了，那么该变量显示为 -）。
cip： 客户端 IP。
uip： 后端业务服务（upstream）的 IP。
vip： 请求访问的 VIP。
rsp_len： 响应长度。
req_len： 请求长度。
req_t： 请求响应的总时间。
ups_rsp_t： 后端响应的总时间（apigw 建立连接到接收到后端响应的时间）。
ups_conn_t: 与后端业务服务器连接建立成功时间。
ups_head_t：后端响应的头部到达时间。
err_msg： 错误信息。
tcp_rtt： 客户端 TCP 连接信息，RTT（Round Trip Time）由三部分组成：链路的传播时间（propagation delay）、末端系统的处理时间、路由器缓存中的排队和处理时间（queuing delay）。
req_id：请求id。
      */
    LogSet?: Array<string>;
    /**
      * 单次搜索返回的日志条数，TotalCount <= Limit
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 错误码入参
 */
export interface ResponseErrorCodeReq {
    /**
      * 自定义响应配置错误码。
      */
    Code: number;
    /**
      * 自定义响应配置错误信息。
      */
    Msg: string;
    /**
      * 自定义响应配置错误码备注。
      */
    Desc: string;
    /**
      * 自定义错误码转换。
      */
    ConvertedCode: number;
    /**
      * 是否需要开启错误码转换。
      */
    NeedConvert: boolean;
}
/**
 * CreateService请求参数结构体
 */
export interface CreateServiceRequest {
    /**
      * 用户自定义的服务名称。
      */
    ServiceName: string;
    /**
      * 服务的前端请求类型。如 http、https、http&https。
      */
    Protocol: string;
    /**
      * 用户自定义的服务描述。
      */
    ServiceDesc?: string;
    /**
      * 独立集群名称，用于指定创建服务所在的独立集群。
      */
    ExclusiveSetName?: string;
    /**
      * 网络类型列表，用于指定支持的访问类型，INNER为内网访问，OUTER为外网访问。默认为OUTER。
      */
    NetTypes?: Array<string>;
    /**
      * IP版本号，支持IPv4和IPv6，默认为IPv4。
      */
    IpVersion?: string;
    /**
      * 集群名称。保留字段，tsf serverlss类型使用。
      */
    SetServerName?: string;
    /**
      * 用户类型。保留类型，serverless用户使用。
      */
    AppIdType?: string;
    /**
      * 标签。
      */
    Tags?: Array<Tag>;
}
/**
 * DescribeIPStrategysStatus请求参数结构体
 */
export interface DescribeIPStrategysStatusRequest {
    /**
      * 服务唯一ID。
      */
    ServiceId: string;
    /**
      * 过滤条件。支持StrategyName。
      */
    Filters?: Array<Filter>;
}
/**
 * DemoteServiceUsagePlan返回参数结构体
 */
export interface DemoteServiceUsagePlanResponse {
    /**
      * 降级操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EnableApiKey返回参数结构体
 */
export interface EnableApiKeyResponse {
    /**
      * 启动密钥操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 服务发布历史
 */
export interface ServiceReleaseHistory {
    /**
      * 发布版本总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 历史版本列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionList: Array<ServiceReleaseHistoryInfo>;
}
/**
 * UnReleaseService返回参数结构体
 */
export interface UnReleaseServiceResponse {
    /**
      * 下线操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeService请求参数结构体
 */
export interface DescribeServiceRequest {
    /**
      * 待查询的服务唯一 ID。
      */
    ServiceId: string;
}
/**
 * CreateUsagePlan请求参数结构体
 */
export interface CreateUsagePlanRequest {
    /**
      * 用户自定义的使用计划名称。
      */
    UsagePlanName: string;
    /**
      * 用户自定义的使用计划描述。
      */
    UsagePlanDesc?: string;
    /**
      * 请求配额总数，取值范围为-1或者[1, 99999999]，默认为-1，表示不开启。
      */
    MaxRequestNum?: number;
    /**
      * 每秒请求限制数，取值范围为-1或者[1, 2000]，默认-1，表示不开启。
      */
    MaxRequestNumPreSec?: number;
}
/**
 * DescribeUsagePlanSecretIds返回参数结构体
 */
export interface DescribeUsagePlanSecretIdsResponse {
    /**
      * 使用计划绑定的密钥列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: UsagePlanBindSecretStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateService请求参数结构体
 */
export interface UpdateServiceRequest {
    /**
      * 待切换服务的唯一 Id。
      */
    ServiceId: string;
    /**
      * 待切换的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。
      */
    EnvironmentName: string;
    /**
      * 切换的版本号。
      */
    VersionName: string;
    /**
      * 本次的切换描述。
      */
    UpdateDesc?: string;
}
/**
 * 发布服务返回
 */
export interface ReleaseService {
    /**
      * 发布时的备注信息填写。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseDesc: string;
    /**
      * 发布的版本id。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseVersion: string;
}
/**
 * DescribeServiceSubDomainMappings返回参数结构体
 */
export interface DescribeServiceSubDomainMappingsResponse {
    /**
      * 自定义路径映射列表。
      */
    Result?: ServiceSubDomainMappings;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindSecretIds请求参数结构体
 */
export interface BindSecretIdsRequest {
    /**
      * 待绑定的使用计划唯一 ID。
      */
    UsagePlanId: string;
    /**
      * 待绑定的密钥 ID 数组。
      */
    AccessKeyIds: Array<string>;
}
/**
 * UnBindEnvironment返回参数结构体
 */
export interface UnBindEnvironmentResponse {
    /**
      * 解绑操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 使用计划绑定密钥
 */
export interface UsagePlanBindSecret {
    /**
      * 密钥ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessKeyId: string;
    /**
      * 密钥名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecretName: string;
    /**
      * 密钥状态，0表示已禁用，1表示启用中。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * DeleteApiKey请求参数结构体
 */
export interface DeleteApiKeyRequest {
    /**
      * 待删除的密钥 ID。
      */
    AccessKeyId: string;
}
/**
 * ModifyApiEnvironmentStrategy返回参数结构体
 */
export interface ModifyApiEnvironmentStrategyResponse {
    /**
      * 修改操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 服务自定义域名列表
 */
export interface DomainSetList {
    /**
      * 域名名称。
      */
    DomainName: string;
    /**
      * 域名解析状态。True 表示正常解析，False 表示解析失败。
      */
    Status: number;
    /**
      * 证书ID。
      */
    CertificateId: string;
    /**
      * 是否使用默认路径映射。
      */
    IsDefaultMapping: boolean;
    /**
      * 自定义域名协议类型。
      */
    Protocol: string;
    /**
      * 网络类型（'INNER' 或 'OUTER'）。
      */
    NetType: string;
}
/**
 * 策略列表
 */
export interface IPStrategysStatus {
    /**
      * 策略数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 策略列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategySet: Array<IPStrategy>;
}
/**
 * DescribeApiKey返回参数结构体
 */
export interface DescribeApiKeyResponse {
    /**
      * 密钥详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ApiKey;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyApiIncrement返回参数结构体
 */
export interface ModifyApiIncrementResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyApi请求参数结构体
 */
export interface ModifyApiRequest {
    /**
      * API 所在的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * API 的后端服务类型。支持HTTP、MOCK、TSF、CLB、SCF、WEBSOCKET、TARGET（内测）。
      */
    ServiceType: string;
    /**
      * 请求的前端配置。
      */
    RequestConfig: RequestConfig;
    /**
      * API 接口唯一 ID。
      */
    ApiId: string;
    /**
      * 用户自定义的 API 名称。
      */
    ApiName?: string;
    /**
      * 用户自定义的 API 接口描述。
      */
    ApiDesc?: string;
    /**
      * API 类型，支持NORMAL和TSF，默认为NORMAL。
      */
    ApiType?: string;
    /**
      * API 鉴权类型。支持SECRET、NONE、OAUTH。默认为NONE。
      */
    AuthType?: string;
    /**
      * 是否需要签名认证，True 表示需要，False 表示不需要。待废弃。
      */
    AuthRequired?: boolean;
    /**
      * API 的后端服务超时时间，单位是秒。
      */
    ServiceTimeout?: number;
    /**
      * API 的前端请求类型，如 HTTP 或 HTTPS 或者 HTTP 和 HTTPS。
      */
    Protocol?: string;
    /**
      * 是否需要开启跨域，Ture 表示需要，False 表示不需要。
      */
    EnableCORS?: boolean;
    /**
      * 常量参数。
      */
    ConstantParameters?: Array<ConstantParameter>;
    /**
      * 前端请求参数。
      */
    RequestParameters?: Array<ReqParameter>;
    /**
      * 当AuthType 为 OAUTH时，该字段有效， NORMAL：业务api   OAUTH：授权API。
      */
    ApiBusinessType?: string;
    /**
      * API 的后端 Mock 返回信息。如果 ServiceType 是 Mock，则此参数必传。
      */
    ServiceMockReturnMessage?: string;
    /**
      * API绑定微服务服务列表。
      */
    MicroServices?: Array<MicroServiceReq>;
    /**
      * 微服务的负载均衡配置。
      */
    ServiceTsfLoadBalanceConf?: TsfLoadBalanceConfResp;
    /**
      * 微服务的健康检查配置。
      */
    ServiceTsfHealthCheckConf?: HealthCheckConf;
    /**
      * target类型负载均衡配置。（内测阶段）
      */
    TargetServicesLoadBalanceConf?: number;
    /**
      * target健康检查配置。（内测阶段）
      */
    TargetServicesHealthCheckConf?: HealthCheckConf;
    /**
      * scf 函数名称。当后端类型是SCF时生效。
      */
    ServiceScfFunctionName?: string;
    /**
      * scf websocket注册函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketRegisterFunctionName?: string;
    /**
      * scf websocket清理函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketCleanupFunctionName?: string;
    /**
      * scf websocket传输函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketTransportFunctionName?: string;
    /**
      * scf 函数命名空间。当后端类型是SCF时生效。
      */
    ServiceScfFunctionNamespace?: string;
    /**
      * scf函数版本。当后端类型是SCF时生效。
      */
    ServiceScfFunctionQualifier?: string;
    /**
      * scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketRegisterFunctionNamespace?: string;
    /**
      * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketRegisterFunctionQualifier?: string;
    /**
      * scf websocket传输函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketTransportFunctionNamespace?: string;
    /**
      * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketTransportFunctionQualifier?: string;
    /**
      * scf websocket清理函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketCleanupFunctionNamespace?: string;
    /**
      * scf websocket清理函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketCleanupFunctionQualifier?: string;
    /**
      * 是否开启响应集成。当后端类型是SCF时生效。
      */
    ServiceScfIsIntegratedResponse?: boolean;
    /**
      * 开始调试后计费。（云市场预留字段）
      */
    IsDebugAfterCharge?: boolean;
    /**
      * 标签。
      */
    TagSpecifications?: Tag;
    /**
      * 是否删除自定义响应配置错误码，如果不传或者传 False，不删除，当传 True 时，则删除此 API 所有自定义响应配置错误码。
      */
    IsDeleteResponseErrorCodes?: boolean;
    /**
      * 返回类型。
      */
    ResponseType?: string;
    /**
      * 自定义响应配置成功响应示例。
      */
    ResponseSuccessExample?: string;
    /**
      * 自定义响应配置失败响应示例。
      */
    ResponseFailExample?: string;
    /**
      * API 的后端服务配置。
      */
    ServiceConfig?: ServiceConfig;
    /**
      * 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。
      */
    AuthRelationApiId?: string;
    /**
      * API的后端服务参数。
      */
    ServiceParameters?: Array<ServiceParameter>;
    /**
      * oauth配置。当AuthType是OAUTH时生效。
      */
    OauthConfig?: OauthConfig;
    /**
      * 用户自定义错误码配置。
      */
    ResponseErrorCodes?: Array<ResponseErrorCodeReq>;
    /**
      * 是否开启Base64编码，只有后端为scf时才会生效。
      */
    IsBase64Encoded?: boolean;
    /**
      * 是否开启Base64编码的header触发，只有后端为scf时才会生效。
      */
    IsBase64Trigger?: boolean;
    /**
      * Header触发规则，总规则数不能超过10。
      */
    Base64EncodedTriggerRules?: Array<Base64EncodedTriggerRule>;
}
/**
 * ModifyUsagePlan请求参数结构体
 */
export interface ModifyUsagePlanRequest {
    /**
      * 使用计划唯一 ID。
      */
    UsagePlanId: string;
    /**
      * 修改后的用户自定义的使用计划名称。
      */
    UsagePlanName?: string;
    /**
      * 修改后的用户自定义的使用计划描述。
      */
    UsagePlanDesc?: string;
    /**
      * 请求配额总数，取值范围为-1或者[1, 99999999]，默认为-1，表示不开启。
      */
    MaxRequestNum?: number;
    /**
      * 每秒请求限制数，取值范围为-1或者[1, 2000]，默认-1，表示不开启。
      */
    MaxRequestNumPreSec?: number;
}
/**
 * api请求配置
 */
export interface ApiRequestConfig {
    /**
      * path
      */
    Path: string;
    /**
      * 方法
      */
    Method: string;
}
/**
 * ModifyService请求参数结构体
 */
export interface ModifyServiceRequest {
    /**
      * 待修改服务的唯一 Id。
      */
    ServiceId: string;
    /**
      * 修改后的服务名称。
      */
    ServiceName?: string;
    /**
      * 修改后的服务描述。
      */
    ServiceDesc?: string;
    /**
      * 修改后的服务前端请求类型，如 http、https和 http&https。
      */
    Protocol?: string;
    /**
      * 网络类型列表，用于指定支持的访问类型，INNER为内网访问，OUTER为外网访问。默认为OUTER。
      */
    NetTypes?: Array<string>;
}
/**
 * API状态
 */
export interface ApiIdStatus {
    /**
      * 服务唯一ID。
      */
    ServiceId: string;
    /**
      * API唯一ID。
      */
    ApiId: string;
    /**
      * API描述
      */
    ApiDesc: string;
    /**
      * API PATH。
      */
    Path: string;
    /**
      * API METHOD。
      */
    Method: string;
    /**
      * 服务创建时间。
      */
    CreatedTime: string;
    /**
      * 服务修改时间。
      */
    ModifiedTime: string;
    /**
      * API名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiName: string;
    /**
      * VPC唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UniqVpcId: string;
    /**
      * API类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiType: string;
    /**
      * API协议。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 是否买后调试。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDebugAfterCharge: boolean;
    /**
      * 授权类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthType: string;
    /**
      * API业务类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiBusinessType: string;
    /**
      * 关联授权API唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthRelationApiId: string;
    /**
      * 授权API关联的业务API列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelationBuniessApiIds: Array<string>;
    /**
      * oauth配置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OauthConfig: OauthConfig;
    /**
      * oauth2.0API请求，token存放位置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TokenLocation: string;
}
/**
 * CreateApi请求参数结构体
 */
export interface CreateApiRequest {
    /**
      * API 所在的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * API 的后端服务类型。支持HTTP、MOCK、TSF、SCF、WEBSOCKET、TARGET（内测）。
      */
    ServiceType: string;
    /**
      * API 的后端服务超时时间，单位是秒。
      */
    ServiceTimeout: number;
    /**
      * API 的前端请求协议，支持HTTP和WEBSOCKET。
      */
    Protocol: string;
    /**
      * 请求的前端配置。
      */
    RequestConfig: ApiRequestConfig;
    /**
      * 用户自定义的 API 名称。
      */
    ApiName?: string;
    /**
      * 用户自定义的 API 接口描述。
      */
    ApiDesc?: string;
    /**
      * API 类型，支持NORMAL（普通API）和TSF（微服务API），默认为NORMAL。
      */
    ApiType?: string;
    /**
      * API 鉴权类型。支持SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH。默认为NONE。
      */
    AuthType?: string;
    /**
      * 是否开启跨域。
      */
    EnableCORS?: boolean;
    /**
      * 常量参数。
      */
    ConstantParameters?: Array<ConstantParameter>;
    /**
      * 前端请求参数。
      */
    RequestParameters?: Array<RequestParameter>;
    /**
      * 当AuthType 为 OAUTH时，该字段有效， NORMAL：业务api OAUTH：授权API。
      */
    ApiBusinessType?: string;
    /**
      * API 的后端 Mock 返回信息。如果 ServiceType 是 Mock，则此参数必传。
      */
    ServiceMockReturnMessage?: string;
    /**
      * API绑定微服务服务列表。
      */
    MicroServices?: Array<MicroServiceReq>;
    /**
      * 微服务的负载均衡配置。
      */
    ServiceTsfLoadBalanceConf?: TsfLoadBalanceConfResp;
    /**
      * 微服务的健康检查配置。
      */
    ServiceTsfHealthCheckConf?: HealthCheckConf;
    /**
      * target类型后端资源信息。（内测阶段）
      */
    TargetServices?: Array<TargetServicesReq>;
    /**
      * target类型负载均衡配置。（内测阶段）
      */
    TargetServicesLoadBalanceConf?: number;
    /**
      * target健康检查配置。（内测阶段）
      */
    TargetServicesHealthCheckConf?: HealthCheckConf;
    /**
      * scf 函数名称。当后端类型是SCF时生效。
      */
    ServiceScfFunctionName?: string;
    /**
      * scf websocket注册函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketRegisterFunctionName?: string;
    /**
      * scf websocket清理函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketCleanupFunctionName?: string;
    /**
      * scf websocket传输函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketTransportFunctionName?: string;
    /**
      * scf 函数命名空间。当后端类型是SCF时生效。
      */
    ServiceScfFunctionNamespace?: string;
    /**
      * scf函数版本。当后端类型是SCF时生效。
      */
    ServiceScfFunctionQualifier?: string;
    /**
      * scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketRegisterFunctionNamespace?: string;
    /**
      * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketRegisterFunctionQualifier?: string;
    /**
      * scf websocket传输函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketTransportFunctionNamespace?: string;
    /**
      * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketTransportFunctionQualifier?: string;
    /**
      * scf websocket清理函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketCleanupFunctionNamespace?: string;
    /**
      * scf websocket清理函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
      */
    ServiceWebsocketCleanupFunctionQualifier?: string;
    /**
      * 是否开启响应集成。当后端类型是SCF时生效。
      */
    ServiceScfIsIntegratedResponse?: boolean;
    /**
      * 开始调试后计费。（云市场预留字段）
      */
    IsDebugAfterCharge?: boolean;
    /**
      * 是否删除自定义响应配置错误码，如果不传或者传 False，不删除，当传 True 时，则删除此 API 所有自定义响应配置错误码。
      */
    IsDeleteResponseErrorCodes?: boolean;
    /**
      * 返回类型。
      */
    ResponseType?: string;
    /**
      * 自定义响应配置成功响应示例。
      */
    ResponseSuccessExample?: string;
    /**
      * 自定义响应配置失败响应示例。
      */
    ResponseFailExample?: string;
    /**
      * API 的后端服务配置。
      */
    ServiceConfig?: ServiceConfig;
    /**
      * 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。
      */
    AuthRelationApiId?: string;
    /**
      * API的后端服务参数。
      */
    ServiceParameters?: Array<ServiceParameter>;
    /**
      * oauth配置。当AuthType是OAUTH时生效。
      */
    OauthConfig?: OauthConfig;
    /**
      * 用户自定义错误码配置。
      */
    ResponseErrorCodes?: Array<ResponseErrorCodeReq>;
    /**
      * tsf serverless 命名空间ID。（内测中）
      */
    TargetNamespaceId?: string;
    /**
      * 用户类型。
      */
    UserType?: string;
    /**
      * 是否打开Base64编码，只有后端是scf时才会生效。
      */
    IsBase64Encoded?: boolean;
}
/**
 * DescribeServiceEnvironmentStrategy请求参数结构体
 */
export interface DescribeServiceEnvironmentStrategyRequest {
    /**
      * 服务唯一ID。
      */
    ServiceId: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
}
/**
 * ReleaseService请求参数结构体
 */
export interface ReleaseServiceRequest {
    /**
      * 待发布服务的唯一 ID。
      */
    ServiceId: string;
    /**
      * 待发布的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。
      */
    EnvironmentName: string;
    /**
      * 本次的发布描述。
      */
    ReleaseDesc: string;
    /**
      * apiId列表，预留字段，默认全量api发布。
      */
    ApiIds?: Array<string>;
}
/**
 * DeleteService返回参数结构体
 */
export interface DeleteServiceResponse {
    /**
      * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeServiceEnvironmentReleaseHistory返回参数结构体
 */
export interface DescribeServiceEnvironmentReleaseHistoryResponse {
    /**
      * 服务发布历史。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ServiceReleaseHistory;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 服务发布的环境信息。
 */
export interface Environment {
    /**
      * 环境名称。
      */
    EnvironmentName: string;
    /**
      * 访问路径。
      */
    Url: string;
    /**
      * 发布状态，1 表示已发布，0 表示未发布。
      */
    Status: number;
    /**
      * 运行版本。
      */
    VersionName: string;
}
/**
 * 服务发布列表详情
 */
export interface ServiceReleaseHistoryInfo {
    /**
      * 版本号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionName: string;
    /**
      * 版本描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionDesc: string;
    /**
      * 版本发布时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseTime: string;
}
/**
 * DescribePlugins返回参数结构体
 */
export interface DescribePluginsResponse {
    /**
      * 插件详情。
      */
    Result: PluginSummary;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReleaseService返回参数结构体
 */
export interface ReleaseServiceResponse {
    /**
      * 发布信息。
      */
    Result?: ReleaseService;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnBindIPStrategy请求参数结构体
 */
export interface UnBindIPStrategyRequest {
    /**
      * 待解绑的服务唯一ID。
      */
    ServiceId: string;
    /**
      * 待解绑的IP策略唯一ID。
      */
    StrategyId: string;
    /**
      * 待解绑的环境。
      */
    EnvironmentName: string;
    /**
      * 待解绑的 API 列表。
      */
    UnBindApiIds: Array<string>;
}
/**
 * 插件列表详情。
 */
export interface PluginSummary {
    /**
      * 插件个数。
      */
    TotalCount: number;
    /**
      * 插件详情。
      */
    PluginSet: Array<Plugin>;
}
/**
 * ModifyApiIncrement请求参数结构体
 */
export interface ModifyApiIncrementRequest {
    /**
      * 服务ID
      */
    ServiceId: string;
    /**
      * 接口ID
      */
    ApiId: string;
    /**
      * 需要修改的API auth类型(可选择OAUTH-授权API)
      */
    BusinessType: string;
    /**
      * oauth接口需要修改的公钥值
      */
    PublicKey?: string;
    /**
      * oauth接口重定向地址
      */
    LoginRedirectUrl?: string;
}
/**
 * GenerateApiDocument请求参数结构体
 */
export interface GenerateApiDocumentRequest {
    /**
      * 待创建文档的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 待创建 SDK 的服务所在环境。
      */
    GenEnvironment: string;
    /**
      * 待创建 SDK 的语言。当前只支持 Python 和 JavaScript。
      */
    GenLanguage: string;
}
/**
 * 服务绑定使用计划列表
 */
export interface ServiceUsagePlanSet {
    /**
      * 服务上绑定的使用计划总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 服务上绑定的使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceUsagePlanList: Array<ApiUsagePlan>;
}
/**
 * DescribeIPStrategyApisStatus返回参数结构体
 */
export interface DescribeIPStrategyApisStatusResponse {
    /**
      * 环境绑定API列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: IPStrategyApiStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyServiceEnvironmentStrategy返回参数结构体
 */
export interface ModifyServiceEnvironmentStrategyResponse {
    /**
      * 修改操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateApiKey返回参数结构体
 */
export interface UpdateApiKeyResponse {
    /**
      * 更换后的密钥详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ApiKey;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApisStatus返回参数结构体
 */
export interface DescribeApisStatusResponse {
    /**
      * API 详情列表。
      */
    Result?: ApisStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApiKeysStatus请求参数结构体
 */
export interface DescribeApiKeysStatusRequest {
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 过滤条件。支持AccessKeyId、AccessKeySecret、SecretName、NotUsagePlanId、Status、KeyWord（ 可以匹配name或者path）。
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeApi返回参数结构体
 */
export interface DescribeApiResponse {
    /**
      * API 详情。
      */
    Result?: ApiInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindSecretIds返回参数结构体
 */
export interface BindSecretIdsResponse {
    /**
      * 绑定操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 创建api返回
 */
export interface CreateApiRsp {
    /**
      * api id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiId: string;
    /**
      * path
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * method
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
}
/**
 * 使用计划绑定环境信息
 */
export interface UsagePlanBindEnvironment {
    /**
      * 环境名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvironmentName: string;
    /**
      * 服务唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceId: string;
}
/**
 * DeleteApi请求参数结构体
 */
export interface DeleteApiRequest {
    /**
      * API 所在的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * API 接口唯一 ID。
      */
    ApiId: string;
}
/**
 * DescribeServiceSubDomainMappings请求参数结构体
 */
export interface DescribeServiceSubDomainMappingsRequest {
    /**
      * 服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 服务绑定的自定义域名。
      */
    SubDomain: string;
}
/**
 * DescribeServiceEnvironmentList请求参数结构体
 */
export interface DescribeServiceEnvironmentListRequest {
    /**
      * 待查询的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
}
/**
 * 服务自定义域名路径映射
 */
export interface ServiceSubDomainMappings {
    /**
      * 是否使用默认路径映射，为 True 表示使用默认路径映射；为 False 的话，表示使用自定义路径映射，此时 PathMappingSet 不为空。
      */
    IsDefaultMapping: boolean;
    /**
      * 自定义路径映射列表。
      */
    PathMappingSet: Array<PathMapping>;
}
/**
 * DescribeApiKey请求参数结构体
 */
export interface DescribeApiKeyRequest {
    /**
      * API 密钥 ID。
      */
    AccessKeyId: string;
}
/**
 * DescribeUsagePlan返回参数结构体
 */
export interface DescribeUsagePlanResponse {
    /**
      * 使用计划详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: UsagePlanInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>

 */
export interface Filter {
    /**
      * 需要过滤的字段。
      */
    Name: string;
    /**
      * 字段的过滤值。
      */
    Values: Array<string>;
}
/**
 * 使用计划绑定密钥列表
 */
export interface UsagePlanBindSecretStatus {
    /**
      * 使用计划绑定密钥的数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 密钥详情列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessKeyList: Array<UsagePlanBindSecret>;
}
/**
 * DeleteServiceSubDomainMapping返回参数结构体
 */
export interface DeleteServiceSubDomainMappingResponse {
    /**
      * 删除自定义域名的路径映射操作是否成功。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeServiceUsagePlan请求参数结构体
 */
export interface DescribeServiceUsagePlanRequest {
    /**
      * 待查询的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
}
/**
 * DescribeUsagePlansStatus请求参数结构体
 */
export interface DescribeUsagePlansStatusRequest {
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 使用计划过滤条件。支持UsagePlanId、UsagePlanName、NotServiceId、NotApiId、Environment。
      */
    Filters?: Array<Filter>;
}
/**
 * 使用计划绑定环境详情。
 */
export interface UsagePlanEnvironment {
    /**
      * 绑定的服务唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceId: string;
    /**
      * API 的唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiId: string;
    /**
      * API 的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiName: string;
    /**
      * API 的路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * API 的方法。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method: string;
    /**
      * 已经绑定的环境名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Environment: string;
    /**
      * 已经使用的配额。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InUseRequestNum: number;
    /**
      * 最大请求量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxRequestNum: number;
    /**
      * 每秒最大请求次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxRequestNumPreSec: number;
    /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime: string;
    /**
      * 服务名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceName: string;
}
/**
 * ModifyIPStrategy请求参数结构体
 */
export interface ModifyIPStrategyRequest {
    /**
      * 待修改的策略所属服务的唯一ID。
      */
    ServiceId: string;
    /**
      * 待修改的策略唯一ID。
      */
    StrategyId: string;
    /**
      * 待修改的策略详情。
      */
    StrategyData: string;
}
/**
 * UnBindSecretIds请求参数结构体
 */
export interface UnBindSecretIdsRequest {
    /**
      * 待解绑的使用计划唯一 ID。
      */
    UsagePlanId: string;
    /**
      * 待解绑的密钥 ID 数组。
      */
    AccessKeyIds: Array<string>;
}
/**
 * api环境绑定策略
 */
export interface ApiEnvironmentStrategy {
    /**
      * API唯一ID。
      */
    ApiId: string;
    /**
      * 用户自定义API名称。
      */
    ApiName: string;
    /**
      * API的路径。如/path。
      */
    Path: string;
    /**
      * API的方法。如GET。
      */
    Method: string;
    /**
      * 环境的限流信息。
      */
    EnvironmentStrategySet: Array<EnvironmentStrategy>;
}
/**
 * UnBindSecretIds返回参数结构体
 */
export interface UnBindSecretIdsResponse {
    /**
      * 解绑操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * api或service绑定使用计划详情
 */
export interface ApiUsagePlan {
    /**
      * 服务唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceId: string;
    /**
      * API 唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiId: string;
    /**
      * API 名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiName: string;
    /**
      * API 路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * API 方法。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method: string;
    /**
      * 使用计划的唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanId: string;
    /**
      * 使用计划的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanName: string;
    /**
      * 使用计划的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanDesc: string;
    /**
      * 使用计划绑定的服务环境。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Environment: string;
    /**
      * 已经使用的配额。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InUseRequestNum: number;
    /**
      * 请求配额总量，-1表示没有限制。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxRequestNum: number;
    /**
      * 请求 QPS 上限，-1 表示没有限制。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxRequestNumPreSec: number;
    /**
      * 使用计划创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 使用计划最后修改时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime: string;
    /**
      * 服务名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceName: string;
}
/**
 * 策略绑定api列表
 */
export interface IPStrategyApi {
    /**
      * API 唯一 ID。
      */
    ApiId: string;
    /**
      * 用户自定义的 API 名称。
      */
    ApiName: string;
    /**
      * API 类型。取值为NORMAL（普通API）和TSF （微服务API）。
      */
    ApiType: string;
    /**
      * API 的路径。如 /path。
      */
    Path: string;
    /**
      * API 的请求方法。如 GET。
      */
    Method: string;
    /**
      * API 已经绑定的其他策略唯一ID。
      */
    OtherIPStrategyId: string;
    /**
      * API 已经绑定的环境。
      */
    OtherEnvironmentName: string;
}
/**
 * api文档下载
 */
export interface DocumentSDK {
    /**
      * 生成的 document 会存放到 COS 中，此出参返回产生文件的下载链接。
      */
    DocumentURL: string;
    /**
      * 生成的 SDK 会存放到 COS 中，此出参返回产生 SDK 文件的下载链接。
      */
    SdkURL: string;
}
/**
 * DescribePlugins请求参数结构体
 */
export interface DescribePluginsRequest {
    /**
      * 要查询的插件列表。
      */
    PluginIds?: Array<string>;
    /**
      * 要查询的插件名称。
      */
    PluginName?: string;
    /**
      * 要查询的插件类型。
      */
    PluginType?: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 过滤条件。预留字段，目前不支持过滤。
      */
    Filters?: Array<Filter>;
}
/**
 * ModifyServiceEnvironmentStrategy请求参数结构体
 */
export interface ModifyServiceEnvironmentStrategyRequest {
    /**
      * 服务的唯一ID。
      */
    ServiceId: string;
    /**
      * 限流值。
      */
    Strategy: number;
    /**
      * 环境列表。
      */
    EnvironmentNames: Array<string>;
}
/**
 * DescribeServiceSubDomains请求参数结构体
 */
export interface DescribeServiceSubDomainsRequest {
    /**
      * 服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
}
/**
 * GenerateApiDocument返回参数结构体
 */
export interface GenerateApiDocumentResponse {
    /**
      * api文档&sdk链接。
      */
    Result?: DocumentSDK;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUsagePlanEnvironments返回参数结构体
 */
export interface DescribeUsagePlanEnvironmentsResponse {
    /**
      * 使用计划绑定详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: UsagePlanEnvironmentStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeServiceSubDomains返回参数结构体
 */
export interface DescribeServiceSubDomainsResponse {
    /**
      * 查询服务自定义域名列表。
      */
    Result?: DomainSets;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindSubDomain请求参数结构体
 */
export interface BindSubDomainRequest {
    /**
      * 服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 待绑定的自定义的域名。
      */
    SubDomain: string;
    /**
      * 服务支持协议，可选值为http、https、http&https。
      */
    Protocol: string;
    /**
      * 网络类型，可选值为OUTER、INNER。
      */
    NetType: string;
    /**
      * 是否使用默认路径映射，默认为 true。为 false 时，表示自定义路径映射，此时 PathMappingSet 必填。
      */
    IsDefaultMapping: boolean;
    /**
      * 默认域名。
      */
    NetSubDomain: string;
    /**
      * 待绑定自定义域名的证书唯一 ID。针对Protocol 为https或http&https可以选择上传。
      */
    CertificateId?: string;
    /**
      * 自定义域名路径映射，最多输入三个Environment，并且只能分别取值“test”、 ”prepub“、”release“。
      */
    PathMappingSet?: Array<PathMapping>;
    /**
      * 是否将HTTP请求强制跳转 HTTPS，默认为false。参数为 true时，API网关会将所有使用该自定义域名的 HTTP 协议的请求重定向至 HTTPS 协议进行转发。
      */
    IsForcedHttps?: boolean;
}
/**
 * ip策略绑定api详情
 */
export interface IPStrategyApiStatus {
    /**
      * 环境绑定API数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 环境绑定API详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiIdStatusSet: Array<IPStrategyApi>;
}
/**
 * CreateIPStrategy返回参数结构体
 */
export interface CreateIPStrategyResponse {
    /**
      * 新建的IP策略详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: IPStrategy;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 插件绑定的API信息
 */
export interface AttachedApiInfo {
    /**
      * API所在服务ID。
      */
    ServiceId: string;
    /**
      * API所在服务名称。
      */
    ServiceName: string;
    /**
      * API所在服务描述信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceDesc: string;
    /**
      * API ID。
      */
    ApiId: string;
    /**
      * API名称。
      */
    ApiName: string;
    /**
      * API描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiDesc: string;
    /**
      * 插件绑定API的环境。
      */
    Environment: string;
    /**
      * 插件和API绑定时间。
      */
    AttachedTime: string;
}
/**
 * BindIPStrategy请求参数结构体
 */
export interface BindIPStrategyRequest {
    /**
      * 待绑定的IP策略所属的服务唯一ID。
      */
    ServiceId: string;
    /**
      * 待绑定的IP策略唯一ID。
      */
    StrategyId: string;
    /**
      * IP策略待绑定的环境。
      */
    EnvironmentName: string;
    /**
      * IP策略待绑定的API列表。
      */
    BindApiIds: Array<string>;
}
/**
 * tsf类型入参
 */
export interface MicroServiceReq {
    /**
      * 微服务集群。
      */
    ClusterId: string;
    /**
      * 微服务命名空间。
      */
    NamespaceId: string;
    /**
      * 微服务名称。
      */
    MicroServiceName: string;
}
/**
 * 用户自定义错误码
 */
export interface ErrorCodes {
    /**
      * 自定义响应配置错误码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code?: number;
    /**
      * 自定义响应配置错误信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Msg?: string;
    /**
      * 自定义响应配置错误码备注。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc?: string;
    /**
      * 自定义错误码转换。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConvertedCode?: number;
    /**
      * 是否需要开启错误码转换。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NeedConvert?: boolean;
}
/**
 * 环境绑定策略列表
 */
export interface ServiceEnvironmentStrategyStatus {
    /**
      * 限流策略数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 限流策略列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvironmentList: Array<ServiceEnvironmentStrategy>;
}
/**
 * DescribeApiEnvironmentStrategy返回参数结构体
 */
export interface DescribeApiEnvironmentStrategyResponse {
    /**
      * api绑定策略详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ApiEnvironmentStrategyStataus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * API绑定的微服务信息。
 */
export interface MicroService {
    /**
      * 微服务集群ID。
      */
    ClusterId?: string;
    /**
      * 微服务命名空间ID。
      */
    NamespaceId?: string;
    /**
      * 微服务名称。
      */
    MicroServiceName?: string;
}
/**
 * API绑定策略列表
 */
export interface ApiEnvironmentStrategyStataus {
    /**
      * API绑定的限流策略数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * API绑定的限流策略列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiEnvironmentStrategySet: Array<ApiEnvironmentStrategy>;
}
/**
 * DeleteIPStrategy返回参数结构体
 */
export interface DeleteIPStrategyResponse {
    /**
      * 删除操作是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 密钥详情
 */
export interface ApiKey {
    /**
      * 创建的 API 密钥 ID 。
      */
    AccessKeyId: string;
    /**
      * 创建的 API 密钥 Key。
      */
    AccessKeySecret: string;
    /**
      * 密钥类型，auto 或者 manual。
      */
    AccessKeyType: string;
    /**
      * 用户自定义密钥名称。
      */
    SecretName: string;
    /**
      * 最后一次修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
      */
    ModifiedTime: string;
    /**
      * 密钥状态。0表示禁用，1表示启用。
      */
    Status: number;
    /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
      */
    CreatedTime: string;
}
/**
 * BindEnvironment请求参数结构体
 */
export interface BindEnvironmentRequest {
    /**
      * 待绑定的使用计划唯一 ID 列表。
      */
    UsagePlanIds: Array<string>;
    /**
      * 绑定类型，取值为API、SERVICE，默认值为SERVICE。
      */
    BindType: string;
    /**
      * 待绑定的环境。
      */
    Environment: string;
    /**
      * 待绑定的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * API唯一ID数组，当bindType=API时，需要传入此参数。
      */
    ApiIds?: Array<string>;
}
/**
 * DescribeIPStrategy请求参数结构体
 */
export interface DescribeIPStrategyRequest {
    /**
      * 服务唯一ID。
      */
    ServiceId: string;
    /**
      * IP 策略唯一ID。
      */
    StrategyId: string;
    /**
      * 策略关联的环境。
      */
    EnvironmentName?: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 过滤条件。预留字段，目前不支持过滤。
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeUsagePlanEnvironments请求参数结构体
 */
export interface DescribeUsagePlanEnvironmentsRequest {
    /**
      * 待查询的使用计划唯一 ID。
      */
    UsagePlanId: string;
    /**
      * 定类型，取值为 API、SERVICE，默认值为 SERVICE。
      */
    BindType: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
}
/**
 * CreateApiKey返回参数结构体
 */
export interface CreateApiKeyResponse {
    /**
      * 新增的密钥详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ApiKey;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeServiceReleaseVersion返回参数结构体
 */
export interface DescribeServiceReleaseVersionResponse {
    /**
      * 服务发布版本列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ServiceReleaseVersion;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 请求参数
 */
export interface RequestParameter {
    /**
      * 请求参数名称
      */
    Name?: string;
    /**
      * 描述
      */
    Desc?: string;
    /**
      * 参数位置
      */
    Position?: string;
    /**
      * 参数类型
      */
    Type?: string;
    /**
      * 默认值
      */
    DefaultValue?: string;
    /**
      * 是否必须
      */
    Required?: boolean;
}
/**
 * 使用计划详情。
 */
export interface UsagePlanInfo {
    /**
      * 使用计划唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanId: string;
    /**
      * 使用计划名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanName: string;
    /**
      * 使用计划描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanDesc: string;
    /**
      * 初始化调用次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitQuota: number;
    /**
      * 每秒请求限制数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxRequestNumPreSec: number;
    /**
      * 最大调用次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxRequestNum: number;
    /**
      * 是否隐藏。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsHide: number;
    /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime: string;
    /**
      * 绑定密钥的数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindSecretIdTotalCount: number;
    /**
      * 绑定密钥的详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindSecretIds: Array<string>;
    /**
      * 绑定环境数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindEnvironmentTotalCount: number;
    /**
      * 绑定环境详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindEnvironments: Array<UsagePlanBindEnvironment>;
}
/**
 * DescribeServiceEnvironmentReleaseHistory请求参数结构体
 */
export interface DescribeServiceEnvironmentReleaseHistoryRequest {
    /**
      * 待查询的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 环境名称。
      */
    EnvironmentName: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
}
/**
 * 用于使用计划列表展示
 */
export interface UsagePlanStatusInfo {
    /**
      * 使用计划唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanId: string;
    /**
      * 用户自定义的使用计划名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanName: string;
    /**
      * 用户自定义的使用计划描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsagePlanDesc: string;
    /**
      * 每秒最大请求次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxRequestNumPreSec: number;
    /**
      * 请求配额总量，-1表示没有限制。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxRequestNum: number;
    /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime: string;
}
/**
 * CreateService返回参数结构体
 */
export interface CreateServiceResponse {
    /**
      * 服务唯一ID。
      */
    ServiceId?: string;
    /**
      * 用户自定义服务名称。
      */
    ServiceName?: string;
    /**
      * 用户自定义服务描述。
      */
    ServiceDesc?: string;
    /**
      * 外网默认域名。
      */
    OuterSubDomain?: string;
    /**
      * vpc内网默认域名。
      */
    InnerSubDomain?: string;
    /**
      * 服务创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
      */
    CreatedTime?: string;
    /**
      * 网络类型列表，INNER为内网访问，OUTER为外网访问。
      */
    NetTypes?: Array<string>;
    /**
      * IP版本号。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpVersion?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * api状态详情
 */
export interface DesApisStatus {
    /**
      * 服务唯一ID。
      */
    ServiceId: string;
    /**
      * API唯一ID。
      */
    ApiId: string;
    /**
      * 用户自定义的 API 接口描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiDesc: string;
    /**
      * 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime: string;
    /**
      * API 接口的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiName: string;
    /**
      * VPCID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: number;
    /**
      * VPC唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UniqVpcId: string;
    /**
      * API类型。取值为NORMAL（普通API）和TSF（微服务API）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiType: string;
    /**
      * API协议。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 是否买后调试。（云市场预留字段）
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDebugAfterCharge: boolean;
    /**
      * API 鉴权类型。取值为SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthType: string;
    /**
      * OAUTH API的类型。当AuthType 为 OAUTH时该字段有效， 取值为NORMAL（业务API）和 OAUTH（授权API）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiBusinessType: string;
    /**
      * 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthRelationApiId: string;
    /**
      * OAUTH 配置信息。当AuthType是OAUTH时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OauthConfig: OauthConfig;
    /**
      * 授权API关联的业务API列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelationBuniessApiIds: Array<string>;
    /**
      * API关联的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<string>;
    /**
      * API 的路径，如 /path。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * API 的请求方法，如 GET。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method: string;
}
/**
 * DescribeApiKeysStatus返回参数结构体
 */
export interface DescribeApiKeysStatusResponse {
    /**
      * 密钥列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ApiKeysStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 服务列表展示
 */
export interface ServicesStatus {
    /**
      * 服务列表总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 服务列表详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceSet: Array<Service>;
}
/**
 * DescribeLogSearch请求参数结构体
 */
export interface DescribeLogSearchRequest {
    /**
      * 日志开始时间
      */
    StartTime: string;
    /**
      * 日志结束时间
      */
    EndTime: string;
    /**
      * 服务id
      */
    ServiceId: string;
    /**
      * 保留字段
      */
    Filters?: Array<Filter>;
    /**
      * 单次要返回的日志条数，单次返回的最大条数为100
      */
    Limit?: number;
    /**
      * 根据上次返回的ConText，获取后续的内容，最多可获取10000条
      */
    ConText?: string;
    /**
      * 按时间排序 asc（升序）或者 desc（降序），默认为 desc
      */
    Sort?: string;
    /**
      * 保留字段
      */
    Query?: string;
    /**
      * 检索条件,支持的检索条件如下：
req_id：“=”
api_id：“=”
cip：“=”
uip：“:”
err_msg：“:”
rsp_st：“=” 、“!=” 、 “:” 、 “>” 、 “<”
req_t：”>=“ 、 ”<=“

说明：
“:”表示包含，“!=”表示不等于，字段含义见输出参数的LogSet说明
      */
    LogQuerys?: Array<LogQuery>;
}
/**
 * 描述api列表状态
 */
export interface ApisStatus {
    /**
      * 符合条件的 API 接口数量。
      */
    TotalCount: number;
    /**
      * API 接口列表。
      */
    ApiIdStatusSet: Array<DesApisStatus>;
}
/**
 * 密钥列表
 */
export interface ApiKeysStatus {
    /**
      * 符合条件的 API 密钥数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * API 密钥列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiKeySet: Array<ApiKey>;
}
/**
 * DescribeServiceUsagePlan返回参数结构体
 */
export interface DescribeServiceUsagePlanResponse {
    /**
      * 服务绑定使用计划列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ServiceUsagePlanSet;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApiUsagePlan请求参数结构体
 */
export interface DescribeApiUsagePlanRequest {
    /**
      * 待查询的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 返回数量，默认为 20，最大值为 100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0。
      */
    Offset?: number;
}
/**
 * UnBindSubDomain请求参数结构体
 */
export interface UnBindSubDomainRequest {
    /**
      * 服务唯一 ID。
      */
    ServiceId: string;
    /**
      * 待解绑的自定义的域名。
      */
    SubDomain: string;
}
/**
 * DescribeApi请求参数结构体
 */
export interface DescribeApiRequest {
    /**
      * API 所在的服务唯一 ID。
      */
    ServiceId: string;
    /**
      * API 接口唯一 ID。
      */
    ApiId: string;
}
/**
 * DescribeIPStrategysStatus返回参数结构体
 */
export interface DescribeIPStrategysStatusResponse {
    /**
      * 符合条件的策略列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: IPStrategysStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 展示api信息
 */
export interface ApiInfo {
    /**
      * API 所在的服务唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceId: string;
    /**
      * API 所在的服务的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceName: string;
    /**
      * API 所在的服务的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceDesc: string;
    /**
      * API 接口唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiId: string;
    /**
      * API 接口的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiDesc: string;
    /**
      * 创建时间，按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 最后修改时间，按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModifiedTime: string;
    /**
      * API 接口的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiName: string;
    /**
      * API 类型。可取值为NORMAL（普通API）、TSF（微服务API）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiType: string;
    /**
      * API 的前端请求类型，如 HTTP 或 HTTPS 或者 HTTP 和 HTTPS。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * API 鉴权类型。可取值为 SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthType: string;
    /**
      * OAUTH API的类型。可取值为NORMAL（业务API）、OAUTH（授权API）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiBusinessType: string;
    /**
      * OAUTH 业务API 关联的授权API 唯一 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthRelationApiId: string;
    /**
      * OAUTH配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OauthConfig: OauthConfig;
    /**
      * 是否购买后调试（云市场预留参数）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDebugAfterCharge: boolean;
    /**
      * 请求的前端配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RequestConfig: RequestConfig;
    /**
      * 返回类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResponseType: string;
    /**
      * 自定义响应配置成功响应示例。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResponseSuccessExample: string;
    /**
      * 自定义响应配置失败响应示例。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResponseFailExample: string;
    /**
      * 用户自定义错误码配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResponseErrorCodes: Array<ErrorCodes>;
    /**
      * 前端请求参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RequestParameters: Array<ReqParameter>;
    /**
      * API 的后端服务超时时间，单位是秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceTimeout: number;
    /**
      * API 的后端服务类型。可取值为 HTTP、MOCK、TSF、CLB、SCF、WEBSOCKET、TARGET（内测）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceType: string;
    /**
      * API 的后端服务配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceConfig: ServiceConfig;
    /**
      * API的后端服务参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceParameters: Array<ServiceParameter>;
    /**
      * 常量参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConstantParameters: Array<ConstantParameter>;
    /**
      * API 的后端 Mock 返回信息。如果 ServiceType 是 Mock，则此参数必传。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceMockReturnMessage: string;
    /**
      * scf 函数名称。当后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceScfFunctionName: string;
    /**
      * scf 函数命名空间。当后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceScfFunctionNamespace: string;
    /**
      * scf函数版本。当后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceScfFunctionQualifier: string;
    /**
      * 是否开启集成响应。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceScfIsIntegratedResponse: boolean;
    /**
      * scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceWebsocketRegisterFunctionName: string;
    /**
      * scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceWebsocketRegisterFunctionNamespace: string;
    /**
      * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceWebsocketRegisterFunctionQualifier: string;
    /**
      * scf websocket清理函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceWebsocketCleanupFunctionName: string;
    /**
      * scf websocket清理函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceWebsocketCleanupFunctionNamespace: string;
    /**
      * scf websocket清理函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceWebsocketCleanupFunctionQualifier: string;
    /**
      * WEBSOCKET 回推地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InternalDomain: string;
    /**
      * scf websocket传输函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceWebsocketTransportFunctionName: string;
    /**
      * scf websocket传输函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceWebsocketTransportFunctionNamespace: string;
    /**
      * scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceWebsocketTransportFunctionQualifier: string;
    /**
      * API绑定微服务服务列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroServices: Array<MicroService>;
    /**
      * 微服务信息详情。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroServicesInfo: Array<number>;
    /**
      * 微服务的负载均衡配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceTsfLoadBalanceConf: TsfLoadBalanceConfResp;
    /**
      * 微服务的健康检查配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceTsfHealthCheckConf: HealthCheckConf;
    /**
      * 是否开启跨域。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnableCORS: boolean;
    /**
      * API绑定的tag信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * API已发布的环境信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Environments: Array<string>;
    /**
      * 是否开启Base64编码，只有后端为scf时才会生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsBase64Encoded: boolean;
    /**
      * 是否开启Base64编码的header触发，只有后端为scf时才会生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsBase64Trigger: boolean;
    /**
      * Header触发规则，总规则数量不超过10。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Base64EncodedTriggerRules: Array<Base64EncodedTriggerRule>;
}
/**
 * 环境限流
 */
export interface EnvironmentStrategy {
    /**
      * 环境名
      */
    EnvironmentName: string;
    /**
      * 限流值
      */
    Quota: number;
}
/**
 * EnableApiKey请求参数结构体
 */
export interface EnableApiKeyRequest {
    /**
      * 待启用的密钥 ID。
      */
    AccessKeyId: string;
}
/**
 * Base64编码的header触发规则
 */
export interface Base64EncodedTriggerRule {
    /**
      * 进行编码触发的header，可选值 "Accept"和"Content_Type" 对应实际数据流请求header中的Accept和 Content-Type。
      */
    Name: string;
    /**
      * 进行编码触发的header的可选值数组, 数组元素的字符串最大长度为40，元素可以包括数字，英文字母以及特殊字符，特殊字符的可选值为： `.`    `+`    `*`   `-`   `/`  `_`

例如 [
    "application/x-vpeg005",
    "application/xhtml+xml",
    "application/vnd.ms-project",
    "application/vnd.rn-rn_music_package"
] 等都是合法的。
      */
    Value: Array<string>;
}
/**
 * DescribeServicesStatus返回参数结构体
 */
export interface DescribeServicesStatusResponse {
    /**
      * 服务列表查询结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ServicesStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateApiKey请求参数结构体
 */
export interface CreateApiKeyRequest {
    /**
      * 用户自定义密钥名称。
      */
    SecretName: string;
    /**
      * 密钥类型，支持 auto 和 manual（自定义密钥），默认为 auto。
      */
    AccessKeyType?: string;
    /**
      * 用户自定义密钥 ID，AccessKeyType 为 manual 时必传。长度为5 - 50字符，由字母、数字、英文下划线组成。
      */
    AccessKeyId?: string;
    /**
      * 用户自定义密钥 Key，AccessKeyType 为 manual 时必传。长度为10 - 50字符，由字母、数字、英文下划线。
      */
    AccessKeySecret?: string;
}
