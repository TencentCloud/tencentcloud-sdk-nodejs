/**
 * DeleteRewrite请求参数结构体
 */
export interface DeleteRewriteRequest {
    /**
      * 负载均衡实例ID
      */
    LoadBalancerId: string;
    /**
      * 源监听器ID
      */
    SourceListenerId: string;
    /**
      * 目标监听器ID
      */
    TargetListenerId: string;
    /**
      * 转发规则之间的重定向关系
      */
    RewriteInfos: Array<RewriteLocationMap>;
}
/**
 * DescribeTargetGroupList返回参数结构体
 */
export interface DescribeTargetGroupListResponse {
    /**
      * 显示的结果数量
      */
    TotalCount?: number;
    /**
      * 显示的目标组信息集合
      */
    TargetGroupSet?: Array<TargetGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeQuota请求参数结构体
 */
export declare type DescribeQuotaRequest = null;
/**
 * DescribeTargetGroupList请求参数结构体
 */
export interface DescribeTargetGroupListRequest {
    /**
      * 目标组ID数组
      */
    TargetGroupIds?: Array<string>;
    /**
      * 过滤条件数组，支持TargetGroupVpcId和TargetGroupName。与TargetGroupIds互斥，优先使用目标组ID，
      */
    Filters?: Array<Filter>;
    /**
      * 显示的偏移起始量
      */
    Offset?: number;
    /**
      * 显示条数限制，默认为20
      */
    Limit?: number;
}
/**
 * BatchDeregisterTargets返回参数结构体
 */
export interface BatchDeregisterTargetsResponse {
    /**
      * 解绑失败的监听器ID
      */
    FailListenerIdSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetLoadBalancerSecurityGroups返回参数结构体
 */
export interface SetLoadBalancerSecurityGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 暂做保留，一般用户无需关注。
 */
export interface ExtraInfo {
    /**
      * 是否开通VIP直通
注意：此字段可能返回 null，表示取不到有效值。
      */
    ZhiTong: boolean;
    /**
      * TgwGroup名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TgwGroupName: string;
}
/**
 * BatchModifyTargetWeight返回参数结构体
 */
export interface BatchModifyTargetWeightResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetSecurityGroupForLoadbalancers请求参数结构体
 */
export interface SetSecurityGroupForLoadbalancersRequest {
    /**
      * 安全组ID，如 sg-12345678
      */
    SecurityGroup: string;
    /**
      * ADD 绑定安全组；
DEL 解绑安全组
      */
    OperationType: string;
    /**
      * 负载均衡实例ID数组
      */
    LoadBalancerIds: Array<string>;
}
/**
 * CreateLoadBalancer请求参数结构体
 */
export interface CreateLoadBalancerRequest {
    /**
      * 负载均衡实例的网络类型：
OPEN：公网属性， INTERNAL：内网属性。
      */
    LoadBalancerType: string;
    /**
      * 负载均衡实例的类型。1：通用的负载均衡实例，目前只支持传入1
      */
    Forward?: number;
    /**
      * 负载均衡实例的名称，只在创建一个实例的时候才会生效。规则：1-60 个英文、汉字、数字、连接线“-”或下划线“_”。
注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。
      */
    LoadBalancerName?: string;
    /**
      * 负载均衡后端目标设备所属的网络 ID，如vpc-12345678，可以通过 DescribeVpcEx 接口获取。 不传此参数则默认为基础网络（"0"）。
      */
    VpcId?: string;
    /**
      * 在私有网络内购买内网负载均衡实例的情况下，必须指定子网 ID，内网负载均衡实例的 VIP 将从这个子网中产生。
      */
    SubnetId?: string;
    /**
      * 负载均衡实例所属的项目 ID，可以通过 DescribeProject 接口获取。不传此参数则视为默认项目。
      */
    ProjectId?: number;
    /**
      * 仅适用于公网负载均衡。IP版本，可取值：IPV4、IPV6、IPv6FullChain，默认值 IPV4。
      */
    AddressIPVersion?: string;
    /**
      * 创建负载均衡的个数，默认值 1。
      */
    Number?: number;
    /**
      * 仅适用于公网负载均衡。设置跨可用区容灾时的主可用区ID，例如 100001 或 ap-guangzhou-1
注：主可用区是需要承载流量的可用区，备可用区默认不承载流量，主可用区不可用时才使用备可用区，平台将为您自动选择最佳备可用区。可通过 DescribeMasterZones 接口查询一个地域的主可用区的列表。
      */
    MasterZoneId?: string;
    /**
      * 仅适用于公网负载均衡。可用区ID，指定可用区以创建负载均衡实例。如：ap-guangzhou-1
      */
    ZoneId?: string;
    /**
      * 仅适用于公网负载均衡。负载均衡的网络计费模式。
      */
    InternetAccessible?: InternetAccessible;
    /**
      * 仅适用于公网负载均衡。CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通，如果不指定本参数，则默认使用BGP。可通过 DescribeSingleIsp 接口查询一个地域所支持的Isp。如果指定运营商，则网络计费式只能使用按带宽包计费(BANDWIDTH_PACKAGE)。
      */
    VipIsp?: string;
    /**
      * 购买负载均衡同时，给负载均衡打上标签
      */
    Tags?: Array<TagInfo>;
    /**
      * 指定Vip申请负载均衡
      */
    Vip?: string;
    /**
      * 带宽包ID，指定此参数时，网络计费方式（InternetAccessible.InternetChargeType）只支持按带宽包计费（BANDWIDTH_PACKAGE）
      */
    BandwidthPackageId?: string;
    /**
      * 独占集群信息
      */
    ExclusiveCluster?: ExclusiveCluster;
    /**
      * 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
      */
    ClientToken?: string;
    /**
      * 是否支持绑定跨地域/跨Vpc绑定IP的功能。
      */
    SnatPro?: boolean;
    /**
      * 开启绑定跨地域/跨Vpc绑定IP的功能后，创建SnatIp。
      */
    SnatIps?: Array<SnatIp>;
    /**
      * Stgw独占集群的标签。
      */
    ClusterTag?: string;
    /**
      * EIP 的唯一 ID，形如：eip-11112222，仅适用于内网负载均衡绑定EIP
      */
    EipAddressId?: string;
}
/**
 * 一条转发规则的健康检查状态
 */
export interface RuleHealth {
    /**
      * 转发规则ID
      */
    LocationId: string;
    /**
      * 转发规则的域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 转发规则的Url
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 本规则上绑定的后端服务的健康检查状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Targets: Array<TargetHealth>;
}
/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 要删除的转发规则的ID组成的数组
      */
    LocationIds?: Array<string>;
    /**
      * 要删除的转发规则的域名，已提供LocationIds参数时本参数不生效
      */
    Domain?: string;
    /**
      * 要删除的转发规则的转发路径，已提供LocationIds参数时本参数不生效
      */
    Url?: string;
    /**
      * 监听器下必须配置一个默认域名，当需要删除默认域名时，可以指定另一个域名作为新的默认域名。
      */
    NewDefaultServerDomain?: string;
}
/**
 * DisassociateTargetGroups返回参数结构体
 */
export interface DisassociateTargetGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetLoadBalancerClsLog返回参数结构体
 */
export interface SetLoadBalancerClsLogResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeLoadBalancerTraffic返回参数结构体
 */
export interface DescribeLoadBalancerTrafficResponse {
    /**
      * 按出带宽从高到低排序后的负载均衡信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerTraffic?: Array<LoadBalancerTraffic>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRule请求参数结构体
 */
export interface ModifyRuleRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 要修改的转发规则的 ID。
      */
    LocationId: string;
    /**
      * 转发规则的新的转发路径，如不需修改Url，则不需提供此参数
      */
    Url?: string;
    /**
      * 健康检查信息
      */
    HealthCheck?: HealthCheck;
    /**
      * 规则的请求转发方式，可选值：WRR、LEAST_CONN、IP_HASH
分别表示按权重轮询、最小连接数、按IP哈希， 默认为 WRR。
      */
    Scheduler?: string;
    /**
      * 会话保持时间
      */
    SessionExpireTime?: number;
    /**
      * 负载均衡实例与后端服务之间的转发协议，默认HTTP，可取值：HTTP、HTTPS、TRPC
      */
    ForwardType?: string;
    /**
      * TRPC被调服务器路由，ForwardType为TRPC时必填
      */
    TrpcCallee?: string;
    /**
      * TRPC调用服务接口，ForwardType为TRPC时必填
      */
    TrpcFunc?: string;
}
/**
 * DescribeBlockIPList返回参数结构体
 */
export interface DescribeBlockIPListResponse {
    /**
      * 返回的IP的数量
      */
    BlockedIPCount?: number;
    /**
      * 获取用户真实IP的字段
      */
    ClientIPField?: string;
    /**
      * 加入了12360黑名单的IP列表
      */
    BlockedIPList?: Array<BlockedIP>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRewrite请求参数结构体
 */
export interface DescribeRewriteRequest {
    /**
      * 负载均衡实例ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器ID数组
      */
    SourceListenerIds?: Array<string>;
    /**
      * 负载均衡转发规则的ID数组
      */
    SourceLocationIds?: Array<string>;
}
/**
 * ModifyLoadBalancerAttributes返回参数结构体
 */
export interface ModifyLoadBalancerAttributesResponse {
    /**
      * 切换负载均衡计费方式时，可用此参数查询切换任务是否成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DealName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTargetGroupInstances请求参数结构体
 */
export interface DescribeTargetGroupInstancesRequest {
    /**
      * 过滤条件，当前仅支持TargetGroupId，BindIP，InstanceId过滤
      */
    Filters: Array<Filter>;
    /**
      * 显示数量限制，默认20
      */
    Limit?: number;
    /**
      * 显示的偏移量，默认为0
      */
    Offset?: number;
}
/**
 * AssociateTargetGroups请求参数结构体
 */
export interface AssociateTargetGroupsRequest {
    /**
      * 绑定的关系数组
      */
    Associations: Array<TargetGroupAssociation>;
}
/**
 * DescribeLoadBalancers请求参数结构体
 */
export interface DescribeLoadBalancersRequest {
    /**
      * 负载均衡实例 ID。
      */
    LoadBalancerIds?: Array<string>;
    /**
      * 负载均衡实例的网络类型：
OPEN：公网属性， INTERNAL：内网属性。
      */
    LoadBalancerType?: string;
    /**
      * 负载均衡实例的类型。1：通用的负载均衡实例，0：传统型负载均衡实例。如果不传此参数，则查询所有类型的负载均衡实例。
      */
    Forward?: number;
    /**
      * 负载均衡实例的名称。
      */
    LoadBalancerName?: string;
    /**
      * 腾讯云为负载均衡实例分配的域名，本参数仅对传统型公网负载均衡才有意义。
      */
    Domain?: string;
    /**
      * 负载均衡实例的 VIP 地址，支持多个。
      */
    LoadBalancerVips?: Array<string>;
    /**
      * 负载均衡绑定的后端服务的外网 IP。
      */
    BackendPublicIps?: Array<string>;
    /**
      * 负载均衡绑定的后端服务的内网 IP。
      */
    BackendPrivateIps?: Array<string>;
    /**
      * 数据偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 返回负载均衡实例的数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 排序参数，支持以下字段：LoadBalancerName，CreateTime，Domain，LoadBalancerType。
      */
    OrderBy?: string;
    /**
      * 1：倒序，0：顺序，默认按照创建时间倒序。
      */
    OrderType?: number;
    /**
      * 搜索字段，模糊匹配名称、域名、VIP。
      */
    SearchKey?: string;
    /**
      * 负载均衡实例所属的项目 ID，可以通过 DescribeProject 接口获取。
      */
    ProjectId?: number;
    /**
      * 负载均衡是否绑定后端服务，0：没有绑定后端服务，1：绑定后端服务，-1：查询全部。
      */
    WithRs?: number;
    /**
      * 负载均衡实例所属私有网络唯一ID，如 vpc-bhqkbhdx，
基础网络可传入'0'。
      */
    VpcId?: string;
    /**
      * 安全组ID，如 sg-m1cc9123
      */
    SecurityGroup?: string;
    /**
      * 主可用区ID，如 ："100001" （对应的是广州一区）
      */
    MasterZone?: string;
    /**
      * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。详细的过滤条件如下：
<li> internet-charge-type - String - 是否必填：否 - （过滤条件）按照 CLB 的网络计费模式过滤，包括"BANDWIDTH_PREPAID","TRAFFIC_POSTPAID_BY_HOUR","BANDWIDTH_POSTPAID_BY_HOUR","BANDWIDTH_PACKAGE"。</li>
<li> master-zone-id - String - 是否必填：否 - （过滤条件）按照 CLB 的主可用区ID过滤，如 ："100001" （对应的是广州一区）。</li>
<li> tag-key - String - 是否必填：否 - （过滤条件）按照 CLB 标签的键过滤。</li>
<li> tag-value - String - 是否必填：否 - （过滤条件）按照 CLB 标签的值过滤。</li>
<li> function-name - String - 是否必填：否 - （过滤条件）按照 CLB 后端绑定的SCF云函数的函数名称过滤。</li>
      */
    Filters?: Array<Filter>;
}
/**
 * 传统型负载均衡的后端服务相关信息
 */
export interface ClassicalTarget {
    /**
      * 后端服务的类型，可取值：CVM、ENI（即将支持）
      */
    Type: string;
    /**
      * 后端服务的唯一 ID，可通过 DescribeInstances 接口返回字段中的 unInstanceId 字段获取
      */
    InstanceId: string;
    /**
      * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
      */
    Weight: number;
    /**
      * 后端服务的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpAddresses: Array<string>;
    /**
      * 后端服务的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIpAddresses: Array<string>;
    /**
      * 后端服务的实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 后端服务的状态
1：故障，2：运行中，3：创建中，4：已关机，5：已退还，6：退还中， 7：重启中，8：开机中，9：关机中，10：密码重置中，11：格式化中，12：镜像制作中，13：带宽设置中，14：重装系统中，19：升级中，21：热迁移中
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunFlag: number;
}
/**
 * 修改节点权重的数据类型
 */
export interface RsWeightRule {
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 要修改权重的后端机器列表
      */
    Targets: Array<Target>;
    /**
      * 转发规则的ID，七层规则时需要此参数，4层规则不需要
      */
    LocationId?: string;
    /**
      * 目标规则的域名，提供LocationId参数时本参数不生效
      */
    Domain?: string;
    /**
      * 目标规则的URL，提供LocationId参数时本参数不生效
      */
    Url?: string;
    /**
      * 后端服务新的转发权重，取值范围：0~100。
      */
    Weight?: number;
}
/**
 * DeregisterTargetsFromClassicalLB请求参数结构体
 */
export interface DeregisterTargetsFromClassicalLBRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 后端服务的实例ID列表
      */
    InstanceIds: Array<string>;
}
/**
 * SetSecurityGroupForLoadbalancers返回参数结构体
 */
export interface SetSecurityGroupForLoadbalancersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 监听器或者转发规则绑定的目标组基本信息
 */
export interface BasicTargetGroupInfo {
    /**
      * 目标组ID
      */
    TargetGroupId: string;
    /**
      * 目标组名称
      */
    TargetGroupName: string;
}
/**
 * ModifyTargetWeight返回参数结构体
 */
export interface ModifyTargetWeightResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
    /**
      * 请求ID，即接口返回的 RequestId 参数
      */
    TaskId?: string;
}
/**
 * 目标组实例
 */
export interface TargetGroupInstance {
    /**
      * 目标组实例的内网IP
      */
    BindIP: string;
    /**
      * 目标组实例的端口
      */
    Port: number;
    /**
      * 目标组实例的权重
      */
    Weight?: number;
    /**
      * 目标组实例的新端口
      */
    NewPort?: number;
}
/**
 * DescribeClassicalLBByInstanceId返回参数结构体
 */
export interface DescribeClassicalLBByInstanceIdResponse {
    /**
      * 负载均衡相关信息列表
      */
    LoadBalancerInfoList?: Array<ClassicalLoadBalancerInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateRule返回参数结构体
 */
export interface CreateRuleResponse {
    /**
      * 创建的转发规则的唯一标识数组
      */
    LocationIds?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExclusiveClusters返回参数结构体
 */
export interface DescribeExclusiveClustersResponse {
    /**
      * 集群列表
      */
    ClusterSet?: Array<Cluster>;
    /**
      * 集群总数目
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RegisterTargetGroupInstances返回参数结构体
 */
export interface RegisterTargetGroupInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 传统型负载均衡的后端信息
 */
export interface ClassicalTargetInfo {
    /**
      * 后端实例ID
      */
    InstanceId: string;
    /**
      * 权重，取值范围 [0, 100]
      */
    Weight?: number;
}
/**
 * DescribeTargets请求参数结构体
 */
export interface DescribeTargetsRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 监听器 ID列表
      */
    ListenerIds?: Array<string>;
    /**
      * 监听器协议类型
      */
    Protocol?: string;
    /**
      * 监听器端口
      */
    Port?: number;
}
/**
 * 可用区相关信息
 */
export interface ZoneInfo {
    /**
      * 可用区数值形式的唯一ID，如：100001
注意：此字段可能返回 null，表示取不到有效值。
      */
    ZoneId: number;
    /**
      * 可用区字符串形式的唯一ID，如：ap-guangzhou-1
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone: string;
    /**
      * 可用区名称，如：广州一区
注意：此字段可能返回 null，表示取不到有效值。
      */
    ZoneName: string;
}
/**
 * RegisterTargetsWithClassicalLB返回参数结构体
 */
export interface RegisterTargetsWithClassicalLBResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTargetGroups返回参数结构体
 */
export interface DescribeTargetGroupsResponse {
    /**
      * 显示的结果数量
      */
    TotalCount?: number;
    /**
      * 显示的目标组信息集合
      */
    TargetGroupSet?: Array<TargetGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 负载均衡实例的健康检查状态
 */
export interface LoadBalancerHealth {
    /**
      * 负载均衡实例ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerName: string;
    /**
      * 监听器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Listeners: Array<ListenerHealth>;
}
/**
 * SetLoadBalancerClsLog请求参数结构体
 */
export interface SetLoadBalancerClsLogRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 日志服务(CLS)的日志集ID
      */
    LogSetId: string;
    /**
      * 日志服务(CLS)的日志主题ID
      */
    LogTopicId: string;
}
/**
 * DeleteLoadBalancerListeners请求参数结构体
 */
export interface DeleteLoadBalancerListenersRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 指定删除的监听器ID数组，若不填则删除负载均衡的所有监听器
      */
    ListenerIds?: Array<string>;
}
/**
 * 加入了12306黑名单的IP
 */
export interface BlockedIP {
    /**
      * 黑名单IP
      */
    IP: string;
    /**
      * 加入黑名单的时间
      */
    CreateTime: string;
    /**
      * 过期时间
      */
    ExpireTime: string;
}
/**
 * ModifyRule返回参数结构体
 */
export interface ModifyRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClassicalLBTargets请求参数结构体
 */
export interface DescribeClassicalLBTargetsRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
}
/**
 * DescribeListeners返回参数结构体
 */
export interface DescribeListenersResponse {
    /**
      * 监听器列表
      */
    Listeners?: Array<Listener>;
    /**
      * 总的监听器个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AutoRewrite请求参数结构体
 */
export interface AutoRewriteRequest {
    /**
      * 负载均衡实例ID。
      */
    LoadBalancerId: string;
    /**
      * HTTPS:443监听器的ID。
      */
    ListenerId: string;
    /**
      * HTTPS:443监听器下需要重定向的域名，若不填，对HTTPS:443监听器下的所有域名都设置重定向。
      */
    Domains?: Array<string>;
}
/**
 * DescribeLoadBalancerListByCertId返回参数结构体
 */
export interface DescribeLoadBalancerListByCertIdResponse {
    /**
      * 证书ID，以及与该证书ID关联的负载均衡实例列表
      */
    CertSet?: Array<CertIdRelatedWithLoadBalancers>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTargetGroupInstancesWeight返回参数结构体
 */
export interface ModifyTargetGroupInstancesWeightResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTargetGroups请求参数结构体
 */
export interface DescribeTargetGroupsRequest {
    /**
      * 目标组ID，与Filters互斥
      */
    TargetGroupIds?: Array<string>;
    /**
      * 显示条数限制，默认为20
      */
    Limit?: number;
    /**
      * 显示的偏移起始量
      */
    Offset?: number;
    /**
      * 过滤条件数组，与TargetGroupIds互斥，支持TargetGroupVpcId和TargetGroupName
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
    /**
      * 任务的当前状态。 0：成功，1：失败，2：进行中。
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BatchRegisterTargets返回参数结构体
 */
export interface BatchRegisterTargetsResponse {
    /**
      * 绑定失败的监听器ID，如为空表示全部绑定成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailListenerIdSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyLoadBalancerAttributes请求参数结构体
 */
export interface ModifyLoadBalancerAttributesRequest {
    /**
      * 负载均衡的唯一ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡实例名称
      */
    LoadBalancerName?: string;
    /**
      * 负载均衡绑定的后端服务的地域信息
      */
    TargetRegionInfo?: TargetRegionInfo;
    /**
      * 网络计费相关参数
      */
    InternetChargeInfo?: InternetAccessible;
    /**
      * Target是否放通来自CLB的流量。开启放通（true）：只验证CLB上的安全组；不开启放通（false）：需同时验证CLB和后端实例上的安全组。
      */
    LoadBalancerPassToTarget?: boolean;
    /**
      * 是否开启SnatPro
      */
    SnatPro?: boolean;
}
/**
 * 转发目标，即绑定在负载均衡上的后端服务
 */
export interface Target {
    /**
      * 后端服务的监听端口。
注意：绑定CVM（云服务器）或ENI（弹性网卡）时必传此参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 后端服务的类型，可取：CVM（云服务器）、ENI（弹性网卡）；作为入参时，目前本参数暂不生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 绑定CVM时需要传入此参数，代表CVM的唯一 ID，可通过 DescribeInstances 接口返回字段中的 InstanceId 字段获取。表示绑定主网卡主IP。
注意：参数 InstanceId、EniIp 只能传入一个且必须传入一个。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId?: string;
    /**
      * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
      */
    Weight?: number;
    /**
      * 绑定IP时需要传入此参数，支持弹性网卡的IP和其他内网IP，如果是弹性网卡则必须先绑定至CVM，然后才能绑定到负载均衡实例。
注意：参数 InstanceId、EniIp 只能传入一个且必须传入一个。如果绑定双栈IPV6子机，必须传该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EniIp?: string;
}
/**
 * DescribeLoadBalancerTraffic请求参数结构体
 */
export interface DescribeLoadBalancerTrafficRequest {
    /**
      * 负载均衡所在地域，不传默认返回所有地域负载均衡。
      */
    LoadBalancerRegion?: string;
}
/**
 * DescribeBlockIPList请求参数结构体
 */
export interface DescribeBlockIPListRequest {
    /**
      * 负载均衡实例 ID。
      */
    LoadBalancerId: string;
    /**
      * 数据偏移量，默认为 0。
      */
    Offset?: number;
    /**
      * 返回IP的最大个数，默认为 100000。
      */
    Limit?: number;
}
/**
 * 证书ID，以及与该证书ID关联的负载均衡实例列表
 */
export interface CertIdRelatedWithLoadBalancers {
    /**
      * 证书ID
      */
    CertId: string;
    /**
      * 与证书关联的负载均衡实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancers: Array<LoadBalancer>;
}
/**
 * DescribeClassicalLBHealthStatus返回参数结构体
 */
export interface DescribeClassicalLBHealthStatusResponse {
    /**
      * 后端健康状态列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthList?: Array<ClassicalHealth>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClsLogSet请求参数结构体
 */
export declare type DescribeClsLogSetRequest = null;
/**
 * 监听器的信息
 */
export interface Listener {
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 监听器协议
      */
    Protocol: string;
    /**
      * 监听器端口
      */
    Port: number;
    /**
      * 监听器绑定的证书信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Certificate: CertificateOutput;
    /**
      * 监听器的健康检查信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCheck: HealthCheck;
    /**
      * 请求的调度方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scheduler: string;
    /**
      * 会话保持时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionExpireTime: number;
    /**
      * 是否开启SNI特性（本参数仅对于HTTPS监听器有意义）
注意：此字段可能返回 null，表示取不到有效值。
      */
    SniSwitch: number;
    /**
      * 监听器下的全部转发规则（本参数仅对于HTTP/HTTPS监听器有意义）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rules: Array<RuleOutput>;
    /**
      * 监听器的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerName: string;
    /**
      * 监听器的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 端口段结束端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndPort: number;
    /**
      * 后端服务器类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetType: string;
    /**
      * 绑定的目标组基本信息；当监听器绑定目标组时，会返回该字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetGroup: BasicTargetGroupInfo;
    /**
      * 会话保持类型。NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionType: string;
    /**
      * 是否开启长连接（本参数仅对于HTTP/HTTPS监听器有意义）
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeepaliveEnable: number;
}
/**
 * 负载均衡流量数据。
 */
export interface LoadBalancerTraffic {
    /**
      * 负载均衡ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡名字
      */
    LoadBalancerName: string;
    /**
      * 负载均衡所在地域
      */
    Region: string;
    /**
      * 负载均衡的vip
      */
    Vip: string;
    /**
      * 最大出带宽，单位：Mbps
      */
    OutBandwidth: number;
}
/**
 * RegisterTargetsWithClassicalLB请求参数结构体
 */
export interface RegisterTargetsWithClassicalLBRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 后端服务信息
      */
    Targets: Array<ClassicalTargetInfo>;
}
/**
 * ModifyDomainAttributes返回参数结构体
 */
export interface ModifyDomainAttributesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReplaceCertForLoadBalancers返回参数结构体
 */
export interface ReplaceCertForLoadBalancersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTargets返回参数结构体
 */
export interface DescribeTargetsResponse {
    /**
      * 监听器后端绑定的机器信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Listeners?: Array<ListenerBackend>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyListener请求参数结构体
 */
export interface ModifyListenerRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 新的监听器名称
      */
    ListenerName?: string;
    /**
      * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
      */
    SessionExpireTime?: number;
    /**
      * 健康检查相关参数，此参数仅适用于TCP/UDP/TCP_SSL监听器
      */
    HealthCheck?: HealthCheck;
    /**
      * 证书相关信息，此参数仅适用于HTTPS/TCP_SSL监听器
      */
    Certificate?: CertificateInput;
    /**
      * 监听器转发的方式。可选值：WRR、LEAST_CONN
分别表示按权重轮询、最小连接数， 默认为 WRR。
      */
    Scheduler?: string;
    /**
      * 是否开启SNI特性，此参数仅适用于HTTPS监听器。注意：未开启SNI的监听器可以开启SNI；已开启SNI的监听器不能关闭SNI
      */
    SniSwitch?: number;
    /**
      * 是否开启长连接，此参数仅适用于HTTP/HTTPS监听器
      */
    KeepaliveEnable?: number;
}
/**
 * DeregisterTargetGroupInstances返回参数结构体
 */
export interface DeregisterTargetGroupInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RegisterTargets请求参数结构体
 */
export interface RegisterTargetsRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 待绑定的后端服务列表，数组长度最大支持20
      */
    Targets: Array<Target>;
    /**
      * 转发规则的ID，当绑定后端服务到七层转发规则时，必须提供此参数或Domain+Url两者之一
      */
    LocationId?: string;
    /**
      * 目标转发规则的域名，提供LocationId参数时本参数不生效
      */
    Domain?: string;
    /**
      * 目标转发规则的URL，提供LocationId参数时本参数不生效
      */
    Url?: string;
}
/**
 * 健康检查信息。
注意，自定义探测相关参数 目前只有少量区域灰度支持。
 */
export interface HealthCheck {
    /**
      * 是否开启健康检查：1（开启）、0（关闭）。
      */
    HealthSwitch?: number;
    /**
      * 健康检查的响应超时时间（仅适用于四层监听器），可选值：2~60，默认值：2，单位：秒。响应超时时间要小于检查间隔时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeOut?: number;
    /**
      * 健康检查探测间隔时间，默认值：5，可选值：5~300，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IntervalTime?: number;
    /**
      * 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2~10，单位：次。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthNum?: number;
    /**
      * 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发异常，可选值：2~10，单位：次。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnHealthNum?: number;
    /**
      * 健康检查状态码（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式）。可选值：1~31，默认 31。
1 表示探测后返回值 1xx 代表健康，2 表示返回 2xx 代表健康，4 表示返回 3xx 代表健康，8 表示返回 4xx 代表健康，16 表示返回 5xx 代表健康。若希望多种返回码都可代表健康，则将相应的值相加。注意：TCP监听器的HTTP健康检查方式，只支持指定一种健康检查状态码。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HttpCode?: number;
    /**
      * 健康检查路径（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HttpCheckPath?: string;
    /**
      * 健康检查域名（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HttpCheckDomain?: string;
    /**
      * 健康检查方法（仅适用于HTTP/HTTPS转发规则、TCP监听器的HTTP健康检查方式），默认值：HEAD，可选值HEAD或GET。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HttpCheckMethod?: string;
    /**
      * 自定义探测相关参数。健康检查端口，默认为后端服务的端口，除非您希望指定特定端口，否则建议留空。（仅适用于TCP/UDP监听器）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckPort?: number;
    /**
      * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查的输入格式，可取值：HEX或TEXT；取值为HEX时，SendContext和RecvContext的字符只能在0123456789ABCDEF中选取且长度必须是偶数位。（仅适用于TCP/UDP监听器）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContextType?: string;
    /**
      * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查发送的请求内容，只允许ASCII可见字符，最大长度限制500。（仅适用于TCP/UDP监听器）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SendContext?: string;
    /**
      * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查返回的结果，只允许ASCII可见字符，最大长度限制500。（仅适用于TCP/UDP监听器）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecvContext?: string;
    /**
      * 自定义探测相关参数。健康检查使用的协议：TCP | HTTP | CUSTOM（仅适用于TCP/UDP监听器，其中UDP监听器只支持CUSTOM；如果使用自定义健康检查功能，则必传）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckType?: string;
    /**
      * 自定义探测相关参数。健康检查协议CheckType的值取HTTP时，必传此字段，代表后端服务的HTTP版本：HTTP/1.0、HTTP/1.1；（仅适用于TCP监听器）
注意：此字段可能返回 null，表示取不到有效值。
      */
    HttpVersion?: string;
}
/**
 * AssociateTargetGroups返回参数结构体
 */
export interface AssociateTargetGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTopic请求参数结构体
 */
export interface CreateTopicRequest {
    /**
      * 日志主题的名字
      */
    TopicName: string;
    /**
      * 主题分区 partition个数，不传参默认创建1个，最大创建允许10个，分裂/合并操作会改变分区数量，整体上限50个。
      */
    PartitionCount?: number;
}
/**
 * DeleteListener请求参数结构体
 */
export interface DeleteListenerRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 要删除的监听器 ID
      */
    ListenerId: string;
}
/**
 * 传统型负载均衡后端服务的健康状态
 */
export interface ClassicalHealth {
    /**
      * 后端服务的内网 IP
      */
    IP: string;
    /**
      * 后端服务的端口
      */
    Port: number;
    /**
      * 负载均衡的监听端口
      */
    ListenerPort: number;
    /**
      * 转发协议
      */
    Protocol: string;
    /**
      * 健康检查结果，1 表示健康，0 表示不健康
      */
    HealthStatus: number;
}
/**
 * ModifyTargetPort返回参数结构体
 */
export interface ModifyTargetPortResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeLoadBalancersDetail请求参数结构体
 */
export interface DescribeLoadBalancersDetailRequest {
    /**
      * 返回负载均衡列表数目，默认20，最大值100。
      */
    Limit?: number;
    /**
      * 返回负载均衡列表起始偏移量，默认0
      */
    Offset?: number;
    /**
      * 选择返回的Fields列表，默认添加LoadBalancerId和LoadBalancerName。
      */
    Fields?: Array<string>;
    /**
      * 当Fields包含TargetId、TargetAddress、TargetPort、TargetWeight等Fields时，必选选择导出目标组的Target或者非目标组Target，值范围NODE、GROUP。
      */
    TargetType?: string;
    /**
      * 查询负载均衡详细信息列表条件，详细的过滤条件如下：
<li> loadbalancer-id - String - 是否必填：否 - （过滤条件）按照 负载均衡ID 过滤，如："lb-12345678"。</li>
<li> project-id - String - 是否必填：否 - （过滤条件）按照 项目ID 过滤，如："0","123"。</li>
<li> network - String - 是否必填：否 - （过滤条件）按照 负载均衡网络类型 过滤，如："Public","Private"。</li>
<li> vip - String - 是否必填：否 - （过滤条件）按照 负载均衡Vip 过滤，如："1.1.1.1","2204::22:3"。</li>
<li> target-ip - String - 是否必填：否 - （过滤条件）按照 后端目标内网Ip 过滤，如："1.1.1.1","2203::214:4"。</li>
<li> vpcid - String - 是否必填：否 - （过滤条件）按照 负载均衡所属vpcId 过滤，如："vpc-12345678"。</li>
<li> zone - String - 是否必填：否 - （过滤条件）按照 负载均衡所属的可用区 过滤，如："ap-guangzhou-1"。</li>
<li> tag-key - String - 是否必填：否 - （过滤条件）按照 负载均衡标签的标签键 过滤，如："name"。</li>
<li> tag:* - String - 是否必填：否 - （过滤条件）按照 负载均衡的标签 过滤，':' 后面跟的是标签键。如：过滤标签键name，标签值zhangsan,lisi，{"Name": "tag:name","Values": ["zhangsan", "lisi"]}。</li>
<li> fuzzy-search - String - 是否必填：否 - （过滤条件）按照 负载均衡Vip，负载均衡名称 模糊搜索，如："1.1"。</li>
      */
    Filters?: Array<Filter>;
}
/**
 * 目标组绑定的后端服务器
 */
export interface TargetGroupBackend {
    /**
      * 目标组ID
      */
    TargetGroupId: string;
    /**
      * 后端服务的类型，可取：CVM、ENI（即将支持）
      */
    Type: string;
    /**
      * 后端服务的唯一 ID
      */
    InstanceId: string;
    /**
      * 后端服务的监听端口
      */
    Port: number;
    /**
      * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
      */
    Weight: number;
    /**
      * 后端服务的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpAddresses: Array<string>;
    /**
      * 后端服务的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIpAddresses: Array<string>;
    /**
      * 后端服务的实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 后端服务被绑定的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegisteredTime: string;
    /**
      * 弹性网卡唯一ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EniId: string;
}
/**
 * DescribeClassicalLBByInstanceId请求参数结构体
 */
export interface DescribeClassicalLBByInstanceIdRequest {
    /**
      * 后端实例ID列表
      */
    InstanceIds: Array<string>;
}
/**
 * ManualRewrite返回参数结构体
 */
export interface ManualRewriteResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBlockIPList请求参数结构体
 */
export interface ModifyBlockIPListRequest {
    /**
      * 负载均衡实例ID
      */
    LoadBalancerIds: Array<string>;
    /**
      * 操作类型，可取：
<li> add_customized_field（首次设置header，开启黑名单功能）</li>
<li> set_customized_field（修改header）</li>
<li> del_customized_field（删除header）</li>
<li> add_blocked（添加黑名单）</li>
<li> del_blocked（删除黑名单）</li>
<li> flush_blocked（清空黑名单）</li>
      */
    Type: string;
    /**
      * 客户端真实IP存放的header字段名
      */
    ClientIPField: string;
    /**
      * 封禁IP列表，单次操作数组最大长度支持200000
      */
    BlockIPList?: Array<string>;
    /**
      * 过期时间，单位秒，默认值3600
      */
    ExpireTime?: number;
    /**
      * 添加IP的策略，可取：fifo（如果黑名单容量已满，新加入黑名单的IP采用先进先出策略）
      */
    AddStrategy?: string;
}
/**
 * DescribeClusterResources返回参数结构体
 */
export interface DescribeClusterResourcesResponse {
    /**
      * 集群中资源列表
      */
    ClusterResourceSet?: Array<ClusterResource>;
    /**
      * 集群中资源总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBlockIPList返回参数结构体
 */
export interface ModifyBlockIPListResponse {
    /**
      * 异步任务的ID
      */
    JodId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterResources请求参数结构体
 */
export interface DescribeClusterResourcesRequest {
    /**
      * 返回集群中资源列表数目，默认20，最大值100
      */
    Limit?: number;
    /**
      * 返回集群中资源列表起始偏移量，默认0
      */
    Offset?: number;
    /**
      * 查询集群中资源列表条件，详细的过滤条件如下：
<li> cluster-id - String - 是否必填：否 - （过滤条件）按照 集群 的唯一ID过滤，如 ："tgw-12345678","stgw-12345678","vpcgw-12345678"。</li>
<li> vip - String - 是否必填：否 - （过滤条件）按照vip过滤。</li>
<li> loadblancer-id - String - 是否必填：否 - （过滤条件）按照负载均衡唯一ID过滤。</li>
<li> idle - String 是否必填：否 - （过滤条件）按照是否闲置过滤，如"True","False"。</li>
      */
    Filters?: Array<Filter>;
}
/**
 * ModifyDomainAttributes请求参数结构体
 */
export interface ModifyDomainAttributesRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 域名（必须是已经创建的转发规则下的域名）
      */
    Domain: string;
    /**
      * 要修改的新域名
      */
    NewDomain?: string;
    /**
      * 域名相关的证书信息，注意，仅对启用SNI的监听器适用。
      */
    Certificate?: CertificateInput;
    /**
      * 是否开启Http2，注意，只有HTTPS域名才能开启Http2。
      */
    Http2?: boolean;
    /**
      * 是否设为默认域名，注意，一个监听器下只能设置一个默认域名。
      */
    DefaultServer?: boolean;
    /**
      * 监听器下必须配置一个默认域名，若要关闭原默认域名，必须同时指定另一个域名作为新的默认域名。
      */
    NewDefaultServerDomain?: string;
}
/**
 * DescribeClassicalLBHealthStatus请求参数结构体
 */
export interface DescribeClassicalLBHealthStatusRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器ID
      */
    ListenerId?: string;
}
/**
 * ModifyDomain请求参数结构体
 */
export interface ModifyDomainRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 监听器下的某个旧域名。
      */
    Domain: string;
    /**
      * 新域名，	长度限制为：1-120。有三种使用格式：非正则表达式格式，通配符格式，正则表达式格式。非正则表达式格式只能使用字母、数字、‘-’、‘.’。通配符格式的使用 ‘*’ 只能在开头或者结尾。正则表达式以'~'开头。
      */
    NewDomain: string;
}
/**
 * CreateClsLogSet返回参数结构体
 */
export interface CreateClsLogSetResponse {
    /**
      * 日志集的 ID。
      */
    LogsetId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 监听器绑定的后端服务的详细信息
 */
export interface Backend {
    /**
      * 后端服务的类型，可取：CVM、ENI
      */
    Type: string;
    /**
      * 后端服务的唯一 ID，如 ins-abcd1234
      */
    InstanceId: string;
    /**
      * 后端服务的监听端口
      */
    Port: number;
    /**
      * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
      */
    Weight: number;
    /**
      * 后端服务的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpAddresses: Array<string>;
    /**
      * 后端服务的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIpAddresses: Array<string>;
    /**
      * 后端服务的实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 后端服务被绑定的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegisteredTime: string;
    /**
      * 弹性网卡唯一ID，如 eni-1234abcd
注意：此字段可能返回 null，表示取不到有效值。
      */
    EniId: string;
}
/**
 * lb实例包年包月相关配置属性
 */
export interface LBChargePrepaid {
    /**
      * 续费类型：AUTO_RENEW 自动续费，  MANUAL_RENEW 手动续费
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewFlag?: string;
    /**
      * 购买时长，单位：月
注意：此字段可能返回 null，表示取不到有效值。
      */
    Period?: number;
}
/**
 * 传统型负载均衡监听器信息
 */
export interface ClassicalListener {
    /**
      * 负载均衡监听器ID
      */
    ListenerId: string;
    /**
      * 负载均衡监听器端口
      */
    ListenerPort: number;
    /**
      * 监听器后端转发端口
      */
    InstancePort: number;
    /**
      * 监听器名称
      */
    ListenerName: string;
    /**
      * 监听器协议类型
      */
    Protocol: string;
    /**
      * 会话保持时间
      */
    SessionExpire: number;
    /**
      * 是否开启了健康检查：1（开启）、0（关闭）
      */
    HealthSwitch: number;
    /**
      * 响应超时时间
      */
    TimeOut: number;
    /**
      * 检查间隔
      */
    IntervalTime: number;
    /**
      * 健康阈值
      */
    HealthNum: number;
    /**
      * 不健康阈值
      */
    UnhealthNum: number;
    /**
      * 传统型公网负载均衡的 HTTP、HTTPS 监听器的请求均衡方法。wrr 表示按权重轮询，ip_hash 表示根据访问的源 IP 进行一致性哈希方式来分发
      */
    HttpHash: string;
    /**
      * 传统型公网负载均衡的 HTTP、HTTPS 监听器的健康检查返回码。具体可参考创建监听器中对该字段的解释
      */
    HttpCode: number;
    /**
      * 传统型公网负载均衡的 HTTP、HTTPS 监听器的健康检查路径
      */
    HttpCheckPath: string;
    /**
      * 传统型公网负载均衡的 HTTPS 监听器的认证方式
      */
    SSLMode: string;
    /**
      * 传统型公网负载均衡的 HTTPS 监听器的服务端证书 ID
      */
    CertId: string;
    /**
      * 传统型公网负载均衡的 HTTPS 监听器的客户端证书 ID
      */
    CertCaId: string;
    /**
      * 监听器的状态，0 表示创建中，1 表示运行中
      */
    Status: number;
}
/**
 * DeleteLoadBalancer请求参数结构体
 */
export interface DeleteLoadBalancerRequest {
    /**
      * 要删除的负载均衡实例 ID数组，数组大小最大支持20
      */
    LoadBalancerIds: Array<string>;
}
/**
 * 证书信息
 */
export interface CertificateInput {
    /**
      * 认证类型，UNIDIRECTIONAL：单向认证，MUTUAL：双向认证
      */
    SSLMode?: string;
    /**
      * 服务端证书的 ID，如果不填写此项则必须上传证书，包括 CertContent，CertKey，CertName。
      */
    CertId?: string;
    /**
      * 客户端证书的 ID，当监听器采用双向认证，即 SSLMode=MUTUAL 时，如果不填写此项则必须上传客户端证书，包括 CertCaContent，CertCaName。
      */
    CertCaId?: string;
    /**
      * 上传服务端证书的名称，如果没有 CertId，则此项必传。
      */
    CertName?: string;
    /**
      * 上传服务端证书的 key，如果没有 CertId，则此项必传。
      */
    CertKey?: string;
    /**
      * 上传服务端证书的内容，如果没有 CertId，则此项必传。
      */
    CertContent?: string;
    /**
      * 上传客户端 CA 证书的名称，如果 SSLMode=mutual，如果没有 CertCaId，则此项必传。
      */
    CertCaName?: string;
    /**
      * 上传客户端证书的内容，如果 SSLMode=mutual，如果没有 CertCaId，则此项必传。
      */
    CertCaContent?: string;
}
/**
 * CreateListener返回参数结构体
 */
export interface CreateListenerResponse {
    /**
      * 创建的监听器的唯一标识数组
      */
    ListenerIds?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTargetGroup返回参数结构体
 */
export interface CreateTargetGroupResponse {
    /**
      * 创建目标组后生成的id
      */
    TargetGroupId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateLoadBalancerSnatIps返回参数结构体
 */
export interface CreateLoadBalancerSnatIpsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 负载均衡信息
 */
export interface ClassicalLoadBalancerInfo {
    /**
      * 后端实例ID
      */
    InstanceId: string;
    /**
      * 负载均衡实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerIds: Array<string>;
}
/**
 * HTTP/HTTPS监听器的转发规则（输出）
 */
export interface RuleOutput {
    /**
      * 转发规则的 ID
      */
    LocationId?: string;
    /**
      * 转发规则的域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 转发规则的路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 会话保持时间
      */
    SessionExpireTime?: number;
    /**
      * 健康检查信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCheck?: HealthCheck;
    /**
      * 证书信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Certificate?: CertificateOutput;
    /**
      * 规则的请求转发方式
      */
    Scheduler?: string;
    /**
      * 转发规则所属的监听器 ID
      */
    ListenerId: string;
    /**
      * 转发规则的重定向目标信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    RewriteTarget: RewriteTarget;
    /**
      * 是否开启gzip
      */
    HttpGzip: boolean;
    /**
      * 转发规则是否为自动创建
      */
    BeAutoCreated: boolean;
    /**
      * 是否作为默认域名
      */
    DefaultServer: boolean;
    /**
      * 是否开启Http2
      */
    Http2: boolean;
    /**
      * 负载均衡与后端服务之间的转发协议
      */
    ForwardType: string;
    /**
      * 转发规则的创建时间
      */
    CreateTime: string;
    /**
      * 后端服务器类型
      */
    TargetType: string;
    /**
      * 绑定的目标组基本信息；当规则绑定目标组时，会返回该字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetGroup: BasicTargetGroupInfo;
    /**
      * WAF实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    WafDomainId: string;
    /**
      * TRPC被调服务器路由，ForwardType为TRPC时有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    TrpcCallee: string;
    /**
      * TRPC调用服务接口，ForwardType为TRPC时有效
注意：此字段可能返回 null，表示取不到有效值。
      */
    TrpcFunc: string;
    /**
      * QUIC状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    QuicStatus: string;
}
/**
 * CreateTopic返回参数结构体
 */
export interface CreateTopicResponse {
    /**
      * 日志主题的 ID
      */
    TopicId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateRule请求参数结构体
 */
export interface CreateRuleRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 监听器 ID
      */
    ListenerId: string;
    /**
      * 新建转发规则的信息
      */
    Rules: Array<RuleInput>;
}
/**
 * ModifyTargetGroupInstancesPort返回参数结构体
 */
export interface ModifyTargetGroupInstancesPortResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * HTTP/HTTPS监听器下的转发规则绑定的后端服务信息
 */
export interface RuleTargets {
    /**
      * 转发规则的 ID
      */
    LocationId: string;
    /**
      * 转发规则的域名
      */
    Domain: string;
    /**
      * 转发规则的路径。
      */
    Url: string;
    /**
      * 后端服务的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Targets: Array<Backend>;
}
/**
 * BatchDeregisterTargets请求参数结构体
 */
export interface BatchDeregisterTargetsRequest {
    /**
      * 负载均衡ID
      */
    LoadBalancerId: string;
    /**
      * 解绑目标
      */
    Targets: Array<BatchTarget>;
}
/**
 * DeregisterTargetGroupInstances请求参数结构体
 */
export interface DeregisterTargetGroupInstancesRequest {
    /**
      * 目标组ID
      */
    TargetGroupId: string;
    /**
      * 待解绑的服务器信息
      */
    TargetGroupInstances: Array<TargetGroupInstance>;
}
/**
 * ManualRewrite请求参数结构体
 */
export interface ManualRewriteRequest {
    /**
      * 负载均衡实例ID
      */
    LoadBalancerId: string;
    /**
      * 源监听器ID
      */
    SourceListenerId: string;
    /**
      * 目标监听器ID
      */
    TargetListenerId: string;
    /**
      * 转发规则之间的重定向关系
      */
    RewriteInfos: Array<RewriteLocationMap>;
}
/**
 * ModifyListener返回参数结构体
 */
export interface ModifyListenerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTargetHealth返回参数结构体
 */
export interface DescribeTargetHealthResponse {
    /**
      * 负载均衡实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancers?: Array<LoadBalancerHealth>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTargetGroupInstances返回参数结构体
 */
export interface DescribeTargetGroupInstancesResponse {
    /**
      * 本次查询的结果数量
      */
    TotalCount?: number;
    /**
      * 绑定的服务器信息
      */
    TargetGroupInstanceSet?: Array<TargetGroupBackend>;
    /**
      * 实际统计数量，不受Limit，Offset，CAM的影响
      */
    RealCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTargetGroup请求参数结构体
 */
export interface CreateTargetGroupRequest {
    /**
      * 目标组名称，限定50个字符
      */
    TargetGroupName?: string;
    /**
      * 目标组的vpcid属性，不填则使用默认vpc
      */
    VpcId?: string;
    /**
      * 目标组的默认端口， 后续添加服务器时可使用该默认端口
      */
    Port?: number;
    /**
      * 目标组绑定的后端服务器
      */
    TargetGroupInstances?: Array<TargetGroupInstance>;
}
/**
 * 独占集群信息
 */
export interface ClusterItem {
    /**
      * 集群唯一ID
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName?: string;
    /**
      * 集群所在可用区，如ap-guangzhou-1
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone?: string;
}
/**
 * CreateListener请求参数结构体
 */
export interface CreateListenerRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 要将监听器创建到哪些端口，每个端口对应一个新的监听器
      */
    Ports: Array<number>;
    /**
      * 监听器协议： TCP | UDP | HTTP | HTTPS | TCP_SSL（TCP_SSL 正在内测中，如需使用请通过工单申请）
      */
    Protocol: string;
    /**
      * 要创建的监听器名称列表，名称与Ports数组按序一一对应，如不需立即命名，则无需提供此参数
      */
    ListenerNames?: Array<string>;
    /**
      * 健康检查相关参数，此参数仅适用于TCP/UDP/TCP_SSL监听器
      */
    HealthCheck?: HealthCheck;
    /**
      * 证书相关信息，此参数仅适用于TCP_SSL监听器和未开启SNI特性的HTTPS监听器。
      */
    Certificate?: CertificateInput;
    /**
      * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
      */
    SessionExpireTime?: number;
    /**
      * 监听器转发的方式。可选值：WRR、LEAST_CONN
分别表示按权重轮询、最小连接数， 默认为 WRR。此参数仅适用于TCP/UDP/TCP_SSL监听器。
      */
    Scheduler?: string;
    /**
      * 是否开启SNI特性，此参数仅适用于HTTPS监听器。
      */
    SniSwitch?: number;
    /**
      * 后端目标类型，NODE表示绑定普通节点，TARGETGROUP表示绑定目标组。
      */
    TargetType?: string;
    /**
      * 会话保持类型。不传或传NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。QUIC_CID只支持UDP协议。
      */
    SessionType?: string;
    /**
      * 是否开启长连接，此参数仅适用于HTTP/HTTPS监听器，0:关闭；1:开启， 默认关闭
      */
    KeepaliveEnable?: number;
}
/**
 * CreateClsLogSet请求参数结构体
 */
export interface CreateClsLogSetRequest {
    /**
      * 日志集的保存周期，单位：天，最大 90。
      */
    Period: number;
    /**
      * 日志集的名字，不能和cls其他日志集重名。不填默认为clb_logset。
      */
    LogsetName?: string;
}
/**
 * DisassociateTargetGroups请求参数结构体
 */
export interface DisassociateTargetGroupsRequest {
    /**
      * 待解绑的规则关系数组
      */
    Associations: Array<TargetGroupAssociation>;
}
/**
 * 过滤器条件
 */
export interface Filter {
    /**
      * 过滤器的名称
      */
    Name: string;
    /**
      * 过滤器的值数组
      */
    Values: Array<string>;
}
/**
 * 集群内资源类型
 */
export interface ClusterResource {
    /**
      * 集群唯一ID，如tgw-12345678。
      */
    ClusterId: string;
    /**
      * ip地址。
      */
    Vip: string;
    /**
      * 负载均衡唯一ID，如lb-12345678。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerId: string;
    /**
      * 资源是否闲置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Idle: string;
    /**
      * 集群名称。
      */
    ClusterName: string;
}
/**
 * ModifyDomain返回参数结构体
 */
export interface ModifyDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RegisterTargets返回参数结构体
 */
export interface RegisterTargetsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeregisterTargetsFromClassicalLB返回参数结构体
 */
export interface DeregisterTargetsFromClassicalLBResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群所在的可用区。
 */
export interface ClustersZone {
    /**
      * 集群所在的主可用区。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterZone: Array<string>;
    /**
      * 集群所在的备可用区。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SlaveZone: Array<string>;
}
/**
 * DeleteLoadBalancer返回参数结构体
 */
export interface DeleteLoadBalancerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AutoRewrite返回参数结构体
 */
export interface AutoRewriteResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeregisterTargets返回参数结构体
 */
export interface DeregisterTargetsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 重定向目标的信息
 */
export interface RewriteTarget {
    /**
      * 重定向目标的监听器ID
注意：此字段可能返回 null，表示无重定向。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetListenerId: string;
    /**
      * 重定向目标的转发规则ID
注意：此字段可能返回 null，表示无重定向。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetLocationId: string;
}
/**
 * 集群的详细信息，如集群ID，名称，类型，可用区，标签等
 */
export interface Cluster {
    /**
      * 集群唯一ID
      */
    ClusterId: string;
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * 集群类型，如TGW，STGW，VPCGW
      */
    ClusterType: string;
    /**
      * 集群标签，只有STGW集群有标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterTag: string;
    /**
      * 集群所在可用区，如ap-guangzhou-1
      */
    Zone: string;
    /**
      * 集群网络类型，如Public，Private
      */
    Network: string;
    /**
      * 最大连接数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxConn: number;
    /**
      * 最大入带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxInFlow: number;
    /**
      * 最大入包量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxInPkg: number;
    /**
      * 最大出带宽
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxOutFlow: number;
    /**
      * 最大出包量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxOutPkg: number;
    /**
      * 最大新建连接数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxNewConn: number;
    /**
      * http最大新建连接数
注意：此字段可能返回 null，表示取不到有效值。
      */
    HTTPMaxNewConn: number;
    /**
      * https最大新建连接数
注意：此字段可能返回 null，表示取不到有效值。
      */
    HTTPSMaxNewConn: number;
    /**
      * http QPS
注意：此字段可能返回 null，表示取不到有效值。
      */
    HTTPQps: number;
    /**
      * https QPS
注意：此字段可能返回 null，表示取不到有效值。
      */
    HTTPSQps: number;
    /**
      * 集群内资源总数目
      */
    ResourceCount: number;
    /**
      * 集群内空闲资源数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdleResourceCount: number;
    /**
      * 集群内转发机的数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalanceDirectorCount: number;
    /**
      * 集群的Isp属性，如："BGP","CMCC","CUCC","CTCC","INTERNAL"。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Isp: string;
    /**
      * 集群所在的可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClustersZone: ClustersZone;
}
/**
 * ModifyTargetWeight请求参数结构体
 */
export interface ModifyTargetWeightRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 转发规则的ID，当绑定机器到七层转发规则时，必须提供此参数或Domain+Url两者之一
      */
    LocationId?: string;
    /**
      * 目标规则的域名，提供LocationId参数时本参数不生效
      */
    Domain?: string;
    /**
      * 目标规则的URL，提供LocationId参数时本参数不生效
      */
    Url?: string;
    /**
      * 要修改权重的后端服务列表
      */
    Targets?: Array<Target>;
    /**
      * 后端服务新的转发权重，取值范围：0~100，默认值10。如果设置了 Targets.Weight 参数，则此参数不生效。
      */
    Weight?: number;
}
/**
 * DescribeLoadBalancersDetail返回参数结构体
 */
export interface DescribeLoadBalancersDetailResponse {
    /**
      * 负载均衡详情列表总数。
      */
    TotalCount?: number;
    /**
      * 负载均衡详情列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerDetailSet?: Array<LoadBalancerDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 负载均衡详细信息
 */
export interface LoadBalancerDetail {
    /**
      * 负载均衡实例 ID。
      */
    LoadBalancerId: string;
    /**
      * 负载均衡实例的名称。
      */
    LoadBalancerName: string;
    /**
      * 负载均衡实例的网络类型：
Public：公网属性， Private：内网属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerType: string;
    /**
      * 负载均衡实例的状态，包括
0：创建中，1：正常运行。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 负载均衡实例的 VIP 。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Address: string;
    /**
      * 负载均衡实例 VIP 的IPv6地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddressIPv6: string;
    /**
      * 负载均衡实例IP版本，IPv4 | IPv6。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddressIPVersion: string;
    /**
      * 负载均衡实例IPv6地址类型，IPv6Nat64 | IPv6FullChain。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IPv6Mode: string;
    /**
      * 负载均衡实例所在可用区。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone: string;
    /**
      * 负载均衡实例IP地址所属的ISP。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddressIsp: string;
    /**
      * 负载均衡实例所属私有网络的 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 负载均衡实例所属的项目 ID， 0 表示默认项目。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: number;
    /**
      * 负载均衡实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 负载均衡实例的计费类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChargeType: string;
    /**
      * 负载均衡实例的网络属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkAttributes: InternetAccessible;
    /**
      * 负载均衡实例的预付费相关属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrepaidAttributes: LBChargePrepaid;
    /**
      * 暂做保留，一般用户无需关注。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtraInfo: ExtraInfo;
    /**
      * 负载均衡维度的个性化配置ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigId: string;
    /**
      * 负载均衡实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<TagInfo>;
    /**
      * 负载均衡监听器 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerId: string;
    /**
      * 监听器协议。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protocol: string;
    /**
      * 监听器端口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 转发规则的 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LocationId: string;
    /**
      * 转发规则的域名。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 转发规则的路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 后端目标ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetId: string;
    /**
      * 后端目标的IP地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetAddress: string;
    /**
      * 后端目标监听端口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetPort: number;
    /**
      * 后端目标转发权重。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetWeight: number;
    /**
      * 0：表示未被隔离，1：表示被隔离。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Isolation: number;
}
/**
 * BatchModifyTargetWeight请求参数结构体
 */
export interface BatchModifyTargetWeightRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 要批量修改权重的列表
      */
    ModifyList: Array<RsWeightRule>;
}
/**
 * DeleteRewrite返回参数结构体
 */
export interface DeleteRewriteResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 批量绑定类型
 */
export interface BatchTarget {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 绑定端口
      */
    Port: number;
    /**
      * 子机ID。表示绑定主网卡主IP
      */
    InstanceId?: string;
    /**
      * 弹性网卡ip或其他内网IP。如果是双栈IPV6子机，必须传该参数。
      */
    EniIp?: string;
    /**
      * 子机权重，范围[0, 100]。绑定时如果不存在，则默认为10
      */
    Weight?: number;
    /**
      * 七层规则ID
      */
    LocationId?: string;
}
/**
 * DescribeLoadBalancerListByCertId请求参数结构体
 */
export interface DescribeLoadBalancerListByCertIdRequest {
    /**
      * 服务端证书的ID，或客户端证书的ID
      */
    CertIds: Array<string>;
}
/**
 * 负载均衡实例所绑定的后端服务的信息，包括所属地域、所属网络。
 */
export interface TargetRegionInfo {
    /**
      * Target所属地域，如 ap-guangzhou
      */
    Region: string;
    /**
      * Target所属网络，私有网络格式如 vpc-abcd1234，如果是基础网络，则为"0"
      */
    VpcId: string;
}
/**
 * DescribeTargetHealth请求参数结构体
 */
export interface DescribeTargetHealthRequest {
    /**
      * 要查询的负载均衡实例 ID列表
      */
    LoadBalancerIds: Array<string>;
}
/**
 * ReplaceCertForLoadBalancers请求参数结构体
 */
export interface ReplaceCertForLoadBalancersRequest {
    /**
      * 需要被替换的证书的ID，可以是服务端证书或客户端证书
      */
    OldCertificateId: string;
    /**
      * 新证书的内容等相关信息
      */
    Certificate: CertificateInput;
}
/**
 * DeleteRule返回参数结构体
 */
export interface DeleteRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClsLogSet返回参数结构体
 */
export interface DescribeClsLogSetResponse {
    /**
      * 日志集的 ID。
      */
    LogsetId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTargetGroupAttribute请求参数结构体
 */
export interface ModifyTargetGroupAttributeRequest {
    /**
      * 目标组的ID
      */
    TargetGroupId: string;
    /**
      * 目标组的新名称
      */
    TargetGroupName?: string;
    /**
      * 目标组的新默认端口
      */
    Port?: number;
}
/**
 * 独占集群
 */
export interface ExclusiveCluster {
    /**
      * 4层独占集群列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    L4Clusters?: Array<ClusterItem>;
    /**
      * 7层独占集群列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    L7Clusters?: Array<ClusterItem>;
    /**
      * vpcgw集群
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClassicalCluster?: ClusterItem;
}
/**
 * DeregisterTargets请求参数结构体
 */
export interface DeregisterTargetsRequest {
    /**
      * 负载均衡实例 ID，格式如 lb-12345678
      */
    LoadBalancerId: string;
    /**
      * 监听器 ID，格式如 lbl-12345678
      */
    ListenerId: string;
    /**
      * 要解绑的后端服务列表，数组长度最大支持20
      */
    Targets: Array<Target>;
    /**
      * 转发规则的ID，格式如 loc-12345678，当从七层转发规则解绑机器时，必须提供此参数或Domain+Url两者之一
      */
    LocationId?: string;
    /**
      * 目标规则的域名，提供LocationId参数时本参数不生效
      */
    Domain?: string;
    /**
      * 目标规则的URL，提供LocationId参数时本参数不生效
      */
    Url?: string;
}
/**
 * 网络计费模式，最大出带宽
 */
export interface InternetAccessible {
    /**
      * TRAFFIC_POSTPAID_BY_HOUR 按流量按小时后计费 ; BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;
BANDWIDTH_PACKAGE 按带宽包计费;
注意：此字段可能返回 null，表示取不到有效值。
      */
    InternetChargeType?: string;
    /**
      * 最大出带宽，单位Mbps，范围支持0到2048，仅对公网属性的LB生效，默认值 10
注意：此字段可能返回 null，表示取不到有效值。
      */
    InternetMaxBandwidthOut?: number;
    /**
      * 带宽包的类型，如SINGLEISP
注意：此字段可能返回 null，表示取不到有效值。
      */
    BandwidthpkgSubType?: string;
}
/**
 * CreateLoadBalancerSnatIps请求参数结构体
 */
export interface CreateLoadBalancerSnatIpsRequest {
    /**
      * 负载均衡唯一性Id，如lb-12345678
      */
    LoadBalancerId: string;
    /**
      * 添加SnatIp信息，可指定Ip申请，或者指定子网自动申请
      */
    SnatIps: Array<SnatIp>;
}
/**
 * ModifyTargetGroupInstancesWeight请求参数结构体
 */
export interface ModifyTargetGroupInstancesWeightRequest {
    /**
      * 目标组ID
      */
    TargetGroupId: string;
    /**
      * 待修改权重的服务器数组
      */
    TargetGroupInstances: Array<TargetGroupInstance>;
}
/**
 * DescribeQuota返回参数结构体
 */
export interface DescribeQuotaResponse {
    /**
      * 配额列表
      */
    QuotaSet?: Array<Quota>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteTargetGroups返回参数结构体
 */
export interface DeleteTargetGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTargetGroupInstancesPort请求参数结构体
 */
export interface ModifyTargetGroupInstancesPortRequest {
    /**
      * 目标组ID
      */
    TargetGroupId: string;
    /**
      * 待修改端口的服务器数组
      */
    TargetGroupInstances: Array<TargetGroupInstance>;
}
/**
 * BatchRegisterTargets请求参数结构体
 */
export interface BatchRegisterTargetsRequest {
    /**
      * 负载均衡ID
      */
    LoadBalancerId: string;
    /**
      * 绑定目标
      */
    Targets: Array<BatchTarget>;
}
/**
 * 监听器上绑定的后端服务的信息
 */
export interface ListenerBackend {
    /**
      * 监听器 ID
      */
    ListenerId: string;
    /**
      * 监听器的协议
      */
    Protocol: string;
    /**
      * 监听器的端口
      */
    Port: number;
    /**
      * 监听器下的规则信息（仅适用于HTTP/HTTPS监听器）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rules: Array<RuleTargets>;
    /**
      * 监听器上绑定的后端服务列表（仅适用于TCP/UDP/TCP_SSL监听器）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Targets: Array<Backend>;
    /**
      * 若支持端口段，则为端口段结束端口；若不支持端口段，则为0
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndPort: number;
}
/**
 * HTTP/HTTPS转发规则（输入）
 */
export interface RuleInput {
    /**
      * 转发规则的域名。长度限制为：1~80。
      */
    Domain: string;
    /**
      * 转发规则的路径。长度限制为：1~200。
      */
    Url: string;
    /**
      * 会话保持时间。设置为0表示关闭会话保持，开启会话保持可取值30~3600，单位：秒。
      */
    SessionExpireTime?: number;
    /**
      * 健康检查信息。详情请参见：[健康检查](https://cloud.tencent.com/document/product/214/6097)
      */
    HealthCheck?: HealthCheck;
    /**
      * 证书信息
      */
    Certificate?: CertificateInput;
    /**
      * 规则的请求转发方式，可选值：WRR、LEAST_CONN、IP_HASH
分别表示按权重轮询、最小连接数、按IP哈希， 默认为 WRR。
      */
    Scheduler?: string;
    /**
      * 负载均衡与后端服务之间的转发协议，目前支持 HTTP/HTTPS/TRPC
      */
    ForwardType?: string;
    /**
      * 是否将该域名设为默认域名，注意，一个监听器下只能设置一个默认域名。
      */
    DefaultServer?: boolean;
    /**
      * 是否开启Http2，注意，只有HTTPS域名才能开启Http2。
      */
    Http2?: boolean;
    /**
      * 后端目标类型，NODE表示绑定普通节点，TARGETGROUP表示绑定目标组
      */
    TargetType?: string;
    /**
      * TRPC被调服务器路由，ForwardType为TRPC时必填
      */
    TrpcCallee?: string;
    /**
      * TRPC调用服务接口，ForwardType为TRPC时必填
      */
    TrpcFunc?: string;
    /**
      * 是否开启QUIC，注意，只有HTTPS域名才能开启QUIC
      */
    Quic?: boolean;
}
/**
 * 负载均衡的标签信息
 */
export interface TagInfo {
    /**
      * 标签的键
      */
    TagKey: string;
    /**
      * 标签的值
      */
    TagValue: string;
}
/**
 * SnatIp的信息结构
 */
export interface SnatIp {
    /**
      * 私有网络子网的唯一性id，如subnet-12345678
      */
    SubnetId: string;
    /**
      * IP地址，如192.168.0.1
      */
    Ip?: string;
}
/**
 * DescribeBlockIPTask返回参数结构体
 */
export interface DescribeBlockIPTaskResponse {
    /**
      * 1 running，2 fail，6 succ
      */
    Status?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClassicalLBListeners返回参数结构体
 */
export interface DescribeClassicalLBListenersResponse {
    /**
      * 监听器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Listeners?: Array<ClassicalListener>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExclusiveClusters请求参数结构体
 */
export interface DescribeExclusiveClustersRequest {
    /**
      * 返回集群列表数目，默认20，最大值100
      */
    Limit?: number;
    /**
      * 返回集群列表起始偏移量，默认0
      */
    Offset?: number;
    /**
      * 查询集群列表条件，详细的过滤条件如下：
<li> cluster-type - String - 是否必填：否 - （过滤条件）按照 集群 的类型过滤，包括"TGW","STGW","VPCGW"。</li>
<li> cluster-id - String - 是否必填：否 - （过滤条件）按照 集群 的唯一ID过滤，如 ："tgw-12345678","stgw-12345678","vpcgw-12345678"。</li>
<li> cluster-name - String - 是否必填：否 - （过滤条件）按照 集群 的名称过滤。</li>
<li> cluster-tag - String - 是否必填：否 - （过滤条件）按照 集群 的标签过滤。（只有TGW/STGW集群有集群标签） </li>
<li> vip - String - 是否必填：否 - （过滤条件）按照 集群 内的vip过滤。</li>
<li> loadblancer-id - String - 是否必填：否 - （过滤条件）按照 集群 内的负载均衡唯一ID过滤。</li>
<li> network - String - 是否必填：否 - （过滤条件）按照 集群 的网络类型过滤，如："Public","Private"。</li>
<li> zone - String - 是否必填：否 - （过滤条件）按照 集群 所在可用区过滤，如："ap-guangzhou-1"（广州一区）。</li>
<li> isp -- String - 是否必填：否 - （过滤条件）按照TGW集群的 Isp 类型过滤，如："BGP","CMCC","CUCC","CTCC","INTERNAL"。</li>
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeBlockIPTask请求参数结构体
 */
export interface DescribeBlockIPTaskRequest {
    /**
      * ModifyBlockIPList 接口返回的异步任务的ID。
      */
    TaskId: string;
}
/**
 * CreateLoadBalancer返回参数结构体
 */
export interface CreateLoadBalancerResponse {
    /**
      * 由负载均衡实例唯一 ID 组成的数组。
      */
    LoadBalancerIds?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRewrite返回参数结构体
 */
export interface DescribeRewriteResponse {
    /**
      * 重定向转发规则构成的数组，若无重定向规则，则返回空数组
      */
    RewriteSet?: Array<RuleOutput>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述配额信息，所有配额均指当前地域下的配额。
 */
export interface Quota {
    /**
      * 配额名称，取值范围：
<li> TOTAL_OPEN_CLB_QUOTA: 用户当前地域下的公网LB配额 </li>
<li> TOTAL_INTERNAL_CLB_QUOTA: 用户当前地域下的内网LB配额 </li>
<li> TOTAL_LISTENER_QUOTA: 一个CLB下的监听器配额 </li>
<li> TOTAL_LISTENER_RULE_QUOTA: 一个监听器下的转发规则配额 </li>
<li> TOTAL_TARGET_BIND_QUOTA: 一条转发规则下绑定设备配额 </li>
      */
    QuotaId: string;
    /**
      * 当前使用数量，为 null 时表示无意义。
注意：此字段可能返回 null，表示取不到有效值。
      */
    QuotaCurrent: number;
    /**
      * 配额数量。
      */
    QuotaLimit: number;
}
/**
 * ModifyTargetGroupAttribute返回参数结构体
 */
export interface ModifyTargetGroupAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteLoadBalancerListeners返回参数结构体
 */
export interface DeleteLoadBalancerListenersResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeListeners请求参数结构体
 */
export interface DescribeListenersRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 要查询的负载均衡监听器 ID数组
      */
    ListenerIds?: Array<string>;
    /**
      * 要查询的监听器协议类型，取值 TCP | UDP | HTTP | HTTPS | TCP_SSL
      */
    Protocol?: string;
    /**
      * 要查询的监听器的端口
      */
    Port?: number;
}
/**
 * DeleteLoadBalancerSnatIps请求参数结构体
 */
export interface DeleteLoadBalancerSnatIpsRequest {
    /**
      * 负载均衡唯一Id，如lb-12345678
      */
    LoadBalancerId: string;
    /**
      * 删除SnatIp地址数组
      */
    Ips: Array<string>;
}
/**
 * SetLoadBalancerSecurityGroups请求参数结构体
 */
export interface SetLoadBalancerSecurityGroupsRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 安全组ID构成的数组，一个负载均衡实例最多可绑定50个安全组，如果要解绑所有安全组，可不传此参数，或传入空数组。
      */
    SecurityGroups?: Array<string>;
}
/**
 * DescribeClassicalLBTargets返回参数结构体
 */
export interface DescribeClassicalLBTargetsResponse {
    /**
      * 后端服务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Targets?: Array<ClassicalTarget>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 转发规则之间的重定向关系
 */
export interface RewriteLocationMap {
    /**
      * 源转发规则ID
      */
    SourceLocationId: string;
    /**
      * 重定向至的目标转发规则ID
      */
    TargetLocationId: string;
}
/**
 * ModifyTargetPort请求参数结构体
 */
export interface ModifyTargetPortRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器 ID
      */
    ListenerId: string;
    /**
      * 要修改端口的后端服务列表
      */
    Targets: Array<Target>;
    /**
      * 后端服务绑定到监听器或转发规则的新端口
      */
    NewPort: number;
    /**
      * 转发规则的ID，当后端服务绑定到七层转发规则时，必须提供此参数或Domain+Url两者之一
      */
    LocationId?: string;
    /**
      * 目标规则的域名，提供LocationId参数时本参数不生效
      */
    Domain?: string;
    /**
      * 目标规则的URL，提供LocationId参数时本参数不生效
      */
    Url?: string;
}
/**
 * DescribeLoadBalancers返回参数结构体
 */
export interface DescribeLoadBalancersResponse {
    /**
      * 满足过滤条件的负载均衡实例总数。此数值与入参中的Limit无关。
      */
    TotalCount?: number;
    /**
      * 返回的负载均衡实例数组。
      */
    LoadBalancerSet?: Array<LoadBalancer>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteListener返回参数结构体
 */
export interface DeleteListenerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteLoadBalancerSnatIps返回参数结构体
 */
export interface DeleteLoadBalancerSnatIpsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 证书相关信息
 */
export interface CertificateOutput {
    /**
      * 认证类型，UNIDIRECTIONAL：单向认证，MUTUAL：双向认证
      */
    SSLMode: string;
    /**
      * 服务端证书的 ID。
      */
    CertId: string;
    /**
      * 客户端证书的 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertCaId: string;
}
/**
 * DeleteTargetGroups请求参数结构体
 */
export interface DeleteTargetGroupsRequest {
    /**
      * 目标组的ID数组
      */
    TargetGroupIds: Array<string>;
}
/**
 * DescribeClassicalLBListeners请求参数结构体
 */
export interface DescribeClassicalLBListenersRequest {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡监听器ID列表
      */
    ListenerIds?: Array<string>;
    /**
      * 负载均衡监听的协议, 'TCP', 'UDP', 'HTTP', 'HTTPS'
      */
    Protocol?: string;
    /**
      * 负载均衡监听端口， 范围[1-65535]
      */
    ListenerPort?: number;
    /**
      * 监听器的状态，0 表示创建中，1 表示运行中
      */
    Status?: number;
}
/**
 * 描述一个Target的健康信息
 */
export interface TargetHealth {
    /**
      * Target的内网IP
      */
    IP: string;
    /**
      * Target绑定的端口
      */
    Port: number;
    /**
      * 当前健康状态，true：健康，false：不健康（包括尚未开始探测、探测中、状态异常等几种状态）。只有处于健康状态（且权重大于0），负载均衡才会向其转发流量。
      */
    HealthStatus: boolean;
    /**
      * Target的实例ID，如 ins-12345678
      */
    TargetId: string;
    /**
      * 当前健康状态的详细信息。如：Alive、Dead、Unknown。Alive状态为健康，Dead状态为异常，Unknown状态包括尚未开始探测、探测中、状态未知。
      */
    HealthStatusDetial: string;
}
/**
 * 规则与目标组的关联关系
 */
export interface TargetGroupAssociation {
    /**
      * 负载均衡ID
      */
    LoadBalancerId: string;
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 目标组ID
      */
    TargetGroupId: string;
    /**
      * 转发规则ID
      */
    LocationId?: string;
}
/**
 * 监听器的健康检查信息
 */
export interface ListenerHealth {
    /**
      * 监听器ID
      */
    ListenerId: string;
    /**
      * 监听器名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ListenerName: string;
    /**
      * 监听器的协议
      */
    Protocol: string;
    /**
      * 监听器的端口
      */
    Port: number;
    /**
      * 监听器的转发规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rules: Array<RuleHealth>;
}
/**
 * 目标组关联到的规则
 */
export interface AssociationItem {
    /**
      * 关联到的负载均衡ID
      */
    LoadBalancerId: string;
    /**
      * 关联到的监听器ID
      */
    ListenerId: string;
    /**
      * 关联到的转发规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LocationId: string;
    /**
      * 关联到的监听器协议类型，如HTTP,TCP,
      */
    Protocol: string;
    /**
      * 关联到的监听器端口
      */
    Port: number;
    /**
      * 关联到的转发规则域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 关联到的转发规则URL
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 负载均衡名称
      */
    LoadBalancerName: string;
    /**
      * 监听器名称
      */
    ListenerName: string;
}
/**
 * 目标组信息
 */
export interface TargetGroupInfo {
    /**
      * 目标组ID
      */
    TargetGroupId: string;
    /**
      * 目标组的vpcid
      */
    VpcId: string;
    /**
      * 目标组的名字
      */
    TargetGroupName: string;
    /**
      * 目标组的默认端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 目标组的创建时间
      */
    CreatedTime: string;
    /**
      * 目标组的修改时间
      */
    UpdatedTime: string;
    /**
      * 关联到的规则数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    AssociatedRule: Array<AssociationItem>;
}
/**
 * RegisterTargetGroupInstances请求参数结构体
 */
export interface RegisterTargetGroupInstancesRequest {
    /**
      * 目标组ID
      */
    TargetGroupId: string;
    /**
      * 服务器实例数组
      */
    TargetGroupInstances: Array<TargetGroupInstance>;
}
/**
 * 负载均衡实例的信息
 */
export interface LoadBalancer {
    /**
      * 负载均衡实例 ID。
      */
    LoadBalancerId?: string;
    /**
      * 负载均衡实例的名称。
      */
    LoadBalancerName?: string;
    /**
      * 负载均衡实例的网络类型：
OPEN：公网属性， INTERNAL：内网属性。
      */
    LoadBalancerType?: string;
    /**
      * 负载均衡类型标识，1：负载均衡，0：传统型负载均衡。
      */
    Forward?: number;
    /**
      * 负载均衡实例的域名，仅公网传统型负载均衡实例才提供该字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain?: string;
    /**
      * 负载均衡实例的 VIP 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerVips?: Array<string>;
    /**
      * 负载均衡实例的状态，包括
0：创建中，1：正常运行。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 负载均衡实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 负载均衡实例的上次状态转换时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusTime?: string;
    /**
      * 负载均衡实例所属的项目 ID， 0 表示默认项目。
      */
    ProjectId?: number;
    /**
      * 私有网络的 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 高防 LB 的标识，1：高防负载均衡 0：非高防负载均衡。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenBgp?: number;
    /**
      * 在 2016 年 12 月份之前的传统型内网负载均衡都是开启了 snat 的。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Snat?: boolean;
    /**
      * 0：表示未被隔离，1：表示被隔离。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Isolation?: number;
    /**
      * 用户开启日志的信息，日志只有公网属性创建了 HTTP 、HTTPS 监听器的负载均衡才会有日志。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Log?: string;
    /**
      * 负载均衡实例所在的子网（仅对内网VPC型LB有意义）
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId?: string;
    /**
      * 负载均衡实例的标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags?: Array<TagInfo>;
    /**
      * 负载均衡实例的安全组
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecureGroups?: Array<string>;
    /**
      * 负载均衡实例绑定的后端设备的基本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetRegionInfo?: TargetRegionInfo;
    /**
      * anycast负载均衡的发布域，对于非anycast的负载均衡，此字段返回为空字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnycastZone?: string;
    /**
      * IP版本，ipv4 | ipv6
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddressIPVersion?: string;
    /**
      * 数值形式的私有网络 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NumericalVpcId?: number;
    /**
      * 负载均衡IP地址所属的ISP
注意：此字段可能返回 null，表示取不到有效值。
      */
    VipIsp?: string;
    /**
      * 主可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterZone?: ZoneInfo;
    /**
      * 备可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackupZoneSet?: Array<ZoneInfo>;
    /**
      * 负载均衡实例被隔离的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsolatedTime?: string;
    /**
      * 负载均衡实例的过期时间，仅对预付费负载均衡生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime?: string;
    /**
      * 负载均衡实例的计费类型，PREPAID：包年包月，POSTPAID_BY_HOUR：按量计费
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChargeType?: string;
    /**
      * 负载均衡实例的网络属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkAttributes?: InternetAccessible;
    /**
      * 负载均衡实例的预付费相关属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrepaidAttributes?: LBChargePrepaid;
    /**
      * 负载均衡日志服务(CLS)的日志集ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogSetId?: string;
    /**
      * 负载均衡日志服务(CLS)的日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogTopicId?: string;
    /**
      * 负载均衡实例的IPv6地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddressIPv6?: string;
    /**
      * 暂做保留，一般用户无需关注。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtraInfo?: ExtraInfo;
    /**
      * 是否可绑定高防包
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDDos?: boolean;
    /**
      * 负载均衡维度的个性化配置ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigId?: string;
    /**
      * 后端服务是否放通来自LB的流量
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancerPassToTarget?: boolean;
    /**
      * 内网独占集群
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExclusiveCluster?: ExclusiveCluster;
    /**
      * IP地址版本为ipv6时此字段有意义， IPv6Nat64 | IPv6FullChain
注意：此字段可能返回 null，表示取不到有效值。
      */
    IPv6Mode?: string;
    /**
      * 是否开启SnatPro。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnatPro?: boolean;
    /**
      * 开启SnatPro负载均衡后，SnatIp列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnatIps?: Array<SnatIp>;
    /**
      * 性能保障规格
注意：此字段可能返回 null，表示取不到有效值。
      */
    SlaType?: string;
    /**
      * vip是否被封堵
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsBlock?: boolean;
    /**
      * 封堵或解封时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsBlockTime?: string;
    /**
      * IP类型是否是本地BGP
注意：此字段可能返回 null，表示取不到有效值。
      */
    LocalBgp?: boolean;
    /**
      * 7层独占标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterTag?: string;
    /**
      * 开启IPv6FullChain负载均衡7层监听器支持混绑IPv4/IPv6目标功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MixIpTarget?: boolean;
    /**
      * 私有网络内网负载均衡，就近接入模式下规则所落在的可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zones?: Array<string>;
}
