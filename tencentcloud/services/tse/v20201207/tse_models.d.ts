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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
}
