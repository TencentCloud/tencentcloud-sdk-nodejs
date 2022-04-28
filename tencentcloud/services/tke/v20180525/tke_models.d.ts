/**
 * EnableVpcCniNetworkType请求参数结构体
 */
export interface EnableVpcCniNetworkTypeRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 开启vpc-cni的模式，tke-route-eni开启的是策略路由模式，tke-direct-eni开启的是独立网卡模式
      */
    VpcCniType: string;
    /**
      * 是否开启固定IP模式
      */
    EnableStaticIp: boolean;
    /**
      * 使用的容器子网
      */
    Subnets: Array<string>;
    /**
      * 在固定IP模式下，Pod销毁后退还IP的时间，传参必须大于300；不传默认IP永不销毁。
      */
    ExpiredSeconds?: number;
}
/**
 * DescribeClusterEndpointVipStatus请求参数结构体
 */
export interface DescribeClusterEndpointVipStatusRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * CreateEKSContainerInstances返回参数结构体
 */
export interface CreateEKSContainerInstancesResponse {
    /**
      * EKS Container Instance Id集合，格式为eksci-xxx，是容器实例的唯一标识。
      */
    EksCiIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterSecurity返回参数结构体
 */
export interface DescribeClusterSecurityResponse {
    /**
      * 集群的账号名称
      */
    UserName: string;
    /**
      * 集群的访问密码
      */
    Password: string;
    /**
      * 集群访问CA证书
      */
    CertificationAuthority: string;
    /**
      * 集群访问的地址
      */
    ClusterExternalEndpoint: string;
    /**
      * 集群访问的域名
      */
    Domain: string;
    /**
      * 集群Endpoint地址
      */
    PgwEndpoint: string;
    /**
      * 集群访问策略组
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecurityPolicy: Array<string>;
    /**
      * 集群Kubeconfig文件
注意：此字段可能返回 null，表示取不到有效值。
      */
    Kubeconfig: string;
    /**
      * 集群JnsGw的访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    JnsGwEndpoint: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ScaleOutClusterMaster请求参数结构体
 */
export interface ScaleOutClusterMasterRequest {
    /**
      * 集群实例ID
      */
    ClusterId: string;
    /**
      * 新建节点参数
      */
    RunInstancesForNode?: Array<RunInstancesForNode>;
    /**
      * 添加已有节点相关参数
      */
    ExistedInstancesForNode?: Array<ExistedInstancesForNode>;
    /**
      * 实例高级设置
      */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /**
      * 集群master组件自定义参数
      */
    ExtraArgs?: ClusterExtraArgs;
}
/**
 * DescribeClusterSecurity请求参数结构体
 */
export interface DescribeClusterSecurityRequest {
    /**
      * 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段
      */
    ClusterId: string;
}
/**
 * ModifyPrometheusAlertRule请求参数结构体
 */
export interface ModifyPrometheusAlertRuleRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 告警配置
      */
    AlertRule: PrometheusAlertRuleDetail;
}
/**
 * DeleteClusterInstances返回参数结构体
 */
export interface DeleteClusterInstancesResponse {
    /**
      * 删除成功的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccInstanceIds: Array<string>;
    /**
      * 删除失败的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedInstanceIds: Array<string>;
    /**
      * 未匹配到的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NotFoundInstanceIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EKS Instance Volume,  可选包括CbsVolume和NfsVolume
 */
export interface EksCiVolume {
    /**
      * Cbs Volume
注意：此字段可能返回 null，表示取不到有效值。
      */
    CbsVolumes?: Array<CbsVolume>;
    /**
      * Nfs Volume
注意：此字段可能返回 null，表示取不到有效值。
      */
    NfsVolumes?: Array<NfsVolume>;
}
/**
 * GetTkeAppChartList请求参数结构体
 */
export interface GetTkeAppChartListRequest {
    /**
      * app类型，取值log,scheduler,network,storage,monitor,dns,image,other,invisible
      */
    Kind?: string;
    /**
      * app支持的操作系统，取值arm32、arm64、amd64
      */
    Arch?: string;
    /**
      * 集群类型，取值tke、eks
      */
    ClusterType?: string;
}
/**
 * ModifyNodePoolDesiredCapacityAboutAsg返回参数结构体
 */
export interface ModifyNodePoolDesiredCapacityAboutAsgResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterNodePool返回参数结构体
 */
export interface ModifyClusterNodePoolResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterKubeconfig返回参数结构体
 */
export interface DescribeClusterKubeconfigResponse {
    /**
      * 子账户kubeconfig文件，可用于直接访问集群kube-apiserver
      */
    Kubeconfig: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveNodeFromNodePool返回参数结构体
 */
export interface RemoveNodeFromNodePoolResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusterRoute请求参数结构体
 */
export interface CreateClusterRouteRequest {
    /**
      * 路由表名称。
      */
    RouteTableName: string;
    /**
      * 目的端CIDR。
      */
    DestinationCidrBlock: string;
    /**
      * 下一跳地址。
      */
    GatewayIp: string;
}
/**
 * DescribeClusterEndpointVipStatus返回参数结构体
 */
export interface DescribeClusterEndpointVipStatusResponse {
    /**
      * 端口操作状态 (Creating 创建中  CreateFailed 创建失败 Created 创建完成 Deleting 删除中 DeletedFailed 删除失败 Deleted 已删除 NotFound 未发现操作 )
      */
    Status?: string;
    /**
      * 操作失败的原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMsg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterEndpointSP请求参数结构体
 */
export interface ModifyClusterEndpointSPRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
      */
    SecurityPolicies?: Array<string>;
}
/**
 * DescribeClusterInstances返回参数结构体
 */
export interface DescribeClusterInstancesResponse {
    /**
      * 集群中实例总数
      */
    TotalCount?: number;
    /**
      * 集群中实例列表
      */
    InstanceSet?: Array<Instance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器状态
 */
export interface ContainerState {
    /**
      * 容器运行开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 容器状态：created, running, exited, unknown
      */
    State: string;
    /**
      * 容器运行结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    FinishTime: string;
    /**
      * 容器运行退出码
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExitCode: number;
    /**
      * 容器状态 Reason
注意：此字段可能返回 null，表示取不到有效值。
      */
    Reason: string;
    /**
      * 容器状态信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 容器重启次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartCount: number;
}
/**
 * CreatePrometheusAlertRule请求参数结构体
 */
export interface CreatePrometheusAlertRuleRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 告警配置
      */
    AlertRule: PrometheusAlertRuleDetail;
}
/**
 * UpdateEKSCluster请求参数结构体
 */
export interface UpdateEKSClusterRequest {
    /**
      * 弹性集群Id
      */
    ClusterId: string;
    /**
      * 弹性集群名称
      */
    ClusterName?: string;
    /**
      * 弹性集群描述信息
      */
    ClusterDesc?: string;
    /**
      * 子网Id 列表
      */
    SubnetIds?: Array<string>;
    /**
      * 弹性容器集群公网访问LB信息
      */
    PublicLB?: ClusterPublicLB;
    /**
      * 弹性容器集群内网访问LB信息
      */
    InternalLB?: ClusterInternalLB;
    /**
      * Service 子网Id
      */
    ServiceSubnetId?: string;
    /**
      * 集群自定义的dns 服务器信息
      */
    DnsServers?: Array<DnsServerConf>;
    /**
      * 是否清空自定义dns 服务器设置。为1 表示 是。其他表示 否。
      */
    ClearDnsServer?: string;
    /**
      * 将来删除集群时是否要删除cbs。默认为 FALSE
      */
    NeedDeleteCbs?: boolean;
    /**
      * 标记是否是新的内外网。默认为false
      */
    ProxyLB?: boolean;
    /**
      * 扩展参数。须是map[string]string 的json 格式。
      */
    ExtraParam?: string;
}
/**
 * CreateClusterRouteTable返回参数结构体
 */
export interface CreateClusterRouteTableResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterCommonNames请求参数结构体
 */
export interface DescribeClusterCommonNamesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 子账户列表，不可超出最大值50
      */
    SubaccountUins?: Array<string>;
    /**
      * 角色ID列表，不可超出最大值50
      */
    RoleIds?: Array<string>;
}
/**
 * DescribeTKEEdgeScript返回参数结构体
 */
export interface DescribeTKEEdgeScriptResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EKS Instance Nfs Volume
 */
export interface NfsVolume {
    /**
      * nfs volume 数据卷名称
      */
    Name: string;
    /**
      * NFS 服务器地址
      */
    Server: string;
    /**
      * NFS 数据卷路径
      */
    Path: string;
    /**
      * 默认为 False
      */
    ReadOnly?: boolean;
}
/**
 * DeleteClusterEndpoint返回参数结构体
 */
export interface DeleteClusterEndpointResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 云原生Prometheus模板可修改项
 */
export interface PrometheusTemplateModify {
    /**
      * 修改名称
      */
    Name?: string;
    /**
      * 修改描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Describe?: string;
    /**
      * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlertRules?: Array<PrometheusAlertRule>;
    /**
      * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordRules?: Array<PrometheusConfigItem>;
    /**
      * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceMonitors?: Array<PrometheusConfigItem>;
    /**
      * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodMonitors?: Array<PrometheusConfigItem>;
    /**
      * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RawJobs?: Array<PrometheusConfigItem>;
    /**
      * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlertDetailRules?: Array<PrometheusAlertRuleDetail>;
}
/**
 * EKS Instnace CBS volume
 */
export interface CbsVolume {
    /**
      * cbs volume 数据卷名称
      */
    Name: string;
    /**
      * 腾讯云cbs盘Id
      */
    CbsDiskId: string;
}
/**
 * amp告警渠道配置
 */
export interface PrometheusNotification {
    /**
      * 是否启用
      */
    Enabled: boolean;
    /**
      * 收敛时间
      */
    RepeatInterval: string;
    /**
      * 生效起始时间
      */
    TimeRangeStart: string;
    /**
      * 生效结束时间
      */
    TimeRangeEnd: string;
    /**
      * 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。
分别代表：短信、邮件、电话、微信
注意：此字段可能返回 null，表示取不到有效值。
      */
    NotifyWay?: Array<string>;
    /**
      * 告警接收组（用户组）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiverGroups?: Array<number>;
    /**
      * 电话告警顺序。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneNotifyOrder?: Array<number>;
    /**
      * 电话告警次数。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneCircleTimes?: number;
    /**
      * 电话告警轮内间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneInnerInterval?: number;
    /**
      * 电话告警轮外间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneCircleInterval?: number;
    /**
      * 电话告警触达通知
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneArriveNotice?: boolean;
    /**
      * 通道类型，默认为amp，支持以下
amp
webhook
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 如果Type为webhook, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
      */
    WebHook?: string;
}
/**
 * 集群版本信息
 */
export interface ClusterVersion {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群主版本号列表，例如1.18.4
      */
    Versions: Array<string>;
}
/**
 * CreatePrometheusTemplate请求参数结构体
 */
export interface CreatePrometheusTemplateRequest {
    /**
      * 模板设置
      */
    Template: PrometheusTemplate;
}
/**
 * CreateImageCache返回参数结构体
 */
export interface CreateImageCacheResponse {
    /**
      * 镜像缓存Id
      */
    ImageCacheId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 探针在容器内执行检测命令参数类型
 */
export interface Exec {
    /**
      * 容器内检测的命令
注意：此字段可能返回 null，表示取不到有效值。
      */
    Commands?: Array<string>;
}
/**
 * RestartEKSContainerInstances请求参数结构体
 */
export interface RestartEKSContainerInstancesRequest {
    /**
      * EKS instance ids
      */
    EksCiIds: Array<string>;
}
/**
 * DescribeExternalClusterSpec请求参数结构体
 */
export interface DescribeExternalClusterSpecRequest {
    /**
      * 注册集群ID
      */
    ClusterId: string;
    /**
      * 默认false 获取内网，是否获取外网版注册命令
      */
    IsExtranet?: boolean;
    /**
      * 默认false 不刷新有效时间 ，true刷新有效时间
      */
    IsRefreshExpirationTime?: boolean;
}
/**
 * DeletePrometheusTemplate请求参数结构体
 */
export interface DeletePrometheusTemplateRequest {
    /**
      * 模板id
      */
    TemplateId: string;
}
/**
 * DescribeClusterAsGroupOption请求参数结构体
 */
export interface DescribeClusterAsGroupOptionRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * 地域属性信息
 */
export interface RegionInstance {
    /**
      * 地域名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegionName: string;
    /**
      * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegionId: number;
    /**
      * 地域状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 地域特性开关(按照JSON的形式返回所有属性)
注意：此字段可能返回 null，表示取不到有效值。
      */
    FeatureGates: string;
    /**
      * 地域简称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias: string;
    /**
      * 地域白名单
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
}
/**
 * DescribeEKSContainerInstanceRegions请求参数结构体
 */
export declare type DescribeEKSContainerInstanceRegionsRequest = null;
/**
 * DescribeEKSClusters返回参数结构体
 */
export interface DescribeEKSClustersResponse {
    /**
      * 集群总个数
      */
    TotalCount?: number;
    /**
      * 集群信息列表
      */
    Clusters?: Array<EksCluster>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据卷挂载路径信息
 */
export interface VolumeMount {
    /**
      * volume名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 挂载路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    MountPath: string;
    /**
      * 是否只读
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnly?: boolean;
    /**
      * 子路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubPath?: string;
    /**
      * 传播挂载方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    MountPropagation?: string;
    /**
      * 子路径表达式
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubPathExpr?: string;
}
/**
 * 集群路由表对象
 */
export interface RouteTableInfo {
    /**
      * 路由表名称。
      */
    RouteTableName: string;
    /**
      * 路由表CIDR。
      */
    RouteTableCidrBlock: string;
    /**
      * VPC实例ID。
      */
    VpcId: string;
}
/**
 * IP 地址
 */
export interface IPAddress {
    /**
      * Ip 地址的类型。可为 advertise, public 等
      */
    Type: string;
    /**
      * Ip 地址
      */
    Ip: string;
    /**
      * 网络端口
      */
    Port: number;
}
/**
 * 自动变配集群等级
 */
export interface AutoUpgradeClusterLevel {
    /**
      * 是否开启自动变配集群等级
      */
    IsAutoUpgrade: boolean;
}
/**
 * GetMostSuitableImageCache请求参数结构体
 */
export interface GetMostSuitableImageCacheRequest {
    /**
      * 容器镜像列表
      */
    Images: Array<string>;
}
/**
 * prometheus一个抓取目标的信息
 */
export interface PrometheusTarget {
    /**
      * 抓取目标的URL
      */
    Url: string;
    /**
      * target当前状态,当前支持
up = 健康
down = 不健康
unknown = 未知
      */
    State: string;
    /**
      * target的元label
      */
    Labels: Array<Label>;
    /**
      * 上一次抓取的时间
      */
    LastScrape: string;
    /**
      * 上一次抓取的耗时，单位是s
      */
    ScrapeDuration: number;
    /**
      * 上一次抓取如果错误，该字段存储错误信息
      */
    Error: string;
}
/**
 * cloudrun安全特性
 */
export interface SecurityContext {
    /**
      * 安全能力清单
注意：此字段可能返回 null，表示取不到有效值。
      */
    Capabilities?: Capabilities;
}
/**
 * CreateEKSCluster请求参数结构体
 */
export interface CreateEKSClusterRequest {
    /**
      * k8s版本号。可为1.14.4, 1.12.8。
      */
    K8SVersion: string;
    /**
      * vpc 的Id
      */
    VpcId: string;
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * 子网Id 列表
      */
    SubnetIds: Array<string>;
    /**
      * 集群描述信息
      */
    ClusterDesc?: string;
    /**
      * Serivce 所在子网Id
      */
    ServiceSubnetId?: string;
    /**
      * 集群自定义的Dns服务器信息
      */
    DnsServers?: Array<DnsServerConf>;
    /**
      * 扩展参数。须是map[string]string 的json 格式。
      */
    ExtraParam?: string;
    /**
      * 是否在用户集群内开启Dns。默认为true
      */
    EnableVpcCoreDNS?: boolean;
    /**
      * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到集群实例。
      */
    TagSpecification?: Array<TagSpecification>;
}
/**
 * 自定义DNS配置
 */
export interface DNSConfig {
    /**
      * DNS 服务器IP地址列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nameservers?: Array<string>;
    /**
      * DNS搜索域列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Searches?: Array<string>;
    /**
      * 对象选项列表，每个对象由name和value（可选）构成
注意：此字段可能返回 null，表示取不到有效值。
      */
    Options?: Array<DNSConfigOption>;
}
/**
 * 某个节点的升级进度
 */
export interface InstanceUpgradeProgressItem {
    /**
      * 节点instanceID
      */
    InstanceID: string;
    /**
      * 任务生命周期
process 运行中
paused 已停止
pauing 正在停止
done  已完成
timeout 已超时
aborted 已取消
pending 还未开始
      */
    LifeState: string;
    /**
      * 升级开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartAt: string;
    /**
      * 升级结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndAt: string;
    /**
      * 升级前检查结果
      */
    CheckResult: InstanceUpgradePreCheckResult;
    /**
      * 升级步骤详情
      */
    Detail: Array<TaskStepInfo>;
}
/**
 * DNS配置选项
 */
export interface DNSConfigOption {
    /**
      * 配置项名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 项值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * DeleteClusterAsGroups请求参数结构体
 */
export interface DeleteClusterAsGroupsRequest {
    /**
      * 集群ID，通过[DescribeClusters](https://cloud.tencent.com/document/api/457/31862)接口获取。
      */
    ClusterId: string;
    /**
      * 集群伸缩组ID的列表
      */
    AutoScalingGroupIds: Array<string>;
    /**
      * 是否保留伸缩组中的节点(默认值： false(不保留))
      */
    KeepInstance?: boolean;
}
/**
 * DescribeClusterControllers返回参数结构体
 */
export interface DescribeClusterControllersResponse {
    /**
      * 描述集群中各个控制器的状态
      */
    ControllerStatusSet: Array<ControllerStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExistedInstances请求参数结构体
 */
export interface DescribeExistedInstancesRequest {
    /**
      * 集群 ID，请填写查询集群列表 接口中返回的 ClusterId 字段（仅通过ClusterId获取需要过滤条件中的VPCID。节点状态比较时会使用该地域下所有集群中的节点进行比较。参数不支持同时指定InstanceIds和ClusterId。
      */
    ClusterId?: string;
    /**
      * 按照一个或者多个实例ID查询。实例ID形如：ins-xxxxxxxx。（此参数的具体格式可参考API简介的id.N一节）。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。
      */
    InstanceIds?: Array<string>;
    /**
      * 过滤条件,字段和详见[CVM查询实例](https://cloud.tencent.com/document/api/213/15728)如果设置了ClusterId，会附加集群的VPCID作为查询字段，在此情况下如果在Filter中指定了"vpc-id"作为过滤字段，指定的VPCID必须与集群的VPCID相同。
      */
    Filters?: Array<Filter>;
    /**
      * 实例IP进行过滤(同时支持内网IP和外网IP)
      */
    VagueIpAddress?: string;
    /**
      * 实例名称进行过滤
      */
    VagueInstanceName?: string;
    /**
      * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 根据多个实例IP进行过滤
      */
    IpAddresses?: Array<string>;
}
/**
 * 节点自定义参数
 */
export interface InstanceExtraArgs {
    /**
      * kubelet自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
注意：此字段可能返回 null，表示取不到有效值。
      */
    Kubelet?: Array<string>;
}
/**
 * 标签绑定的资源类型，当前支持类型："cluster"
 */
export interface Tag {
    /**
      * 标签键
      */
    Key?: string;
    /**
      * 标签值
      */
    Value?: string;
}
/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
    /**
      * 地域的数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 地域列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegionInstanceSet: Array<RegionInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * prometheus告警历史
 */
export interface PrometheusAlertHistoryItem {
    /**
      * 告警名称
      */
    RuleName: string;
    /**
      * 告警开始时间
      */
    StartTime: string;
    /**
      * 告警内容
      */
    Content: string;
    /**
      * 告警状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    State?: string;
    /**
      * 触发的规则名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleItem?: string;
    /**
      * 告警渠道的id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicId?: string;
    /**
      * 告警渠道的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicName?: string;
}
/**
 * CreateClusterRoute返回参数结构体
 */
export interface CreateClusterRouteResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群等级变配记录
 */
export interface ClusterLevelChangeRecord {
    /**
      * 记录ID
      */
    ID: string;
    /**
      * 集群ID
      */
    ClusterID: string;
    /**
      * 变配状态：trading 发货中,upgrading 变配中,success 变配成功,failed 变配失败。
      */
    Status: string;
    /**
      * 状态描述
      */
    Message: string;
    /**
      * 变配前规模
      */
    OldLevel: string;
    /**
      * 变配后规模
      */
    NewLevel: string;
    /**
      * 变配触发类型：manual 手动,auto 自动
      */
    TriggerType: string;
    /**
      * 开始时间
      */
    StartedAt: string;
    /**
      * 结束时间
      */
    EndedAt: string;
}
/**
 * 云原生Prometheus模板同步目标
 */
export interface PrometheusTemplateSyncTarget {
    /**
      * 目标所在地域
      */
    Region: string;
    /**
      * 目标实例
      */
    InstanceId: string;
    /**
      * 集群id，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId?: string;
    /**
      * 最后一次同步时间， 用于出参
注意：此字段可能返回 null，表示取不到有效值。
      */
    SyncTime?: string;
    /**
      * 当前使用的模板版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version?: string;
    /**
      * 集群类型，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterType?: string;
    /**
      * 用于出参，实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName?: string;
    /**
      * 用于出参，集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName?: string;
}
/**
 * DescribePrometheusTemplates请求参数结构体
 */
export interface DescribePrometheusTemplatesRequest {
    /**
      * 模糊过滤条件，支持
Level 按模板级别过滤
Name 按名称过滤
Describe 按描述过滤
ID 按templateId过滤
      */
    Filters?: Array<Filter>;
    /**
      * 分页偏移
      */
    Offset?: number;
    /**
      * 总数限制
      */
    Limit?: number;
}
/**
 * ModifyPrometheusAlertRule返回参数结构体
 */
export interface ModifyPrometheusAlertRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddNodeToNodePool请求参数结构体
 */
export interface AddNodeToNodePoolRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 节点池id
      */
    NodePoolId: string;
    /**
      * 节点id
      */
    InstanceIds: Array<string>;
}
/**
 * master节点缩容参数
 */
export interface ScaleInMaster {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 缩容的实例角色：MASTER,ETCD,MASTER_ETCD
      */
    NodeRole: string;
    /**
      * 实例的保留模式
      */
    InstanceDeleteMode: string;
}
/**
 * DescribeEKSContainerInstanceEvent返回参数结构体
 */
export interface DescribeEKSContainerInstanceEventResponse {
    /**
      * 事件集合
      */
    Events: Array<Event>;
    /**
      * 容器实例id
      */
    EksCiId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePrometheusAlertRule返回参数结构体
 */
export interface DescribePrometheusAlertRuleResponse {
    /**
      * 告警详情
      */
    AlertRules: Array<PrometheusAlertRuleDetail>;
    /**
      * 总数
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EnableClusterDeletionProtection返回参数结构体
 */
export interface EnableClusterDeletionProtectionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群关联的伸缩组信息
 */
export interface ClusterAsGroup {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId: string;
    /**
      * 伸缩组状态(开启 enabled 开启中 enabling 关闭 disabled 关闭中 disabling 更新中 updating 删除中 deleting 开启缩容中 scaleDownEnabling 关闭缩容中 scaleDownDisabling)
      */
    Status: string;
    /**
      * 节点是否设置成不可调度
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsUnschedulable: boolean;
    /**
      * 伸缩组的label列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Labels: Array<Label>;
    /**
      * 创建时间
      */
    CreatedTime: string;
}
/**
 * 集群的实例信息
 */
export interface Instance {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER
      */
    InstanceRole: string;
    /**
      * 实例异常(或者处于初始化中)的原因
      */
    FailedReason: string;
    /**
      * 实例的状态（running 运行中，initializing 初始化中，failed 异常）
      */
    InstanceState: string;
    /**
      * 实例是否封锁状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    DrainStatus: string;
    /**
      * 节点配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceAdvancedSettings: InstanceAdvancedSettings;
    /**
      * 添加时间
      */
    CreatedTime: string;
    /**
      * 节点内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    LanIP: string;
    /**
      * 资源池ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodePoolId: string;
    /**
      * 自动伸缩组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoscalingGroupId: string;
}
/**
 * DescribePrometheusInstance返回参数结构体
 */
export interface DescribePrometheusInstanceResponse {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    Name: string;
    /**
      * 私有网络id
      */
    VpcId: string;
    /**
      * 子网id
      */
    SubnetId: string;
    /**
      * cos桶名称
      */
    COSBucket: string;
    /**
      * 数据查询地址
      */
    QueryAddress: string;
    /**
      * 实例中grafana相关的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grafana: PrometheusGrafanaInfo;
    /**
      * 用户自定义alertmanager
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlertManagerUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
    /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & *  - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。<br><li>Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Password?: string;
    /**
      * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyIds?: Array<string>;
    /**
      * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeepImageLogin?: string;
}
/**
 * DescribeVpcCniPodLimits返回参数结构体
 */
export interface DescribeVpcCniPodLimitsResponse {
    /**
      * 机型数据数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 机型信息及其可支持的最大VPC-CNI模式Pod数量信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodLimitsInstanceSet: Array<PodLimitsInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EksCi地域信息
 */
export interface EksCiRegionInfo {
    /**
      * 地域别名，形如gz
      */
    Alias: string;
    /**
      * 地域名，形如ap-guangzhou
      */
    RegionName: string;
    /**
      * 地域ID
      */
    RegionId: number;
}
/**
 * DescribeVersions返回参数结构体
 */
export interface DescribeVersionsResponse {
    /**
      * 版本数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 版本列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionInstanceSet: Array<VersionInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ScaleInClusterMaster请求参数结构体
 */
export interface ScaleInClusterMasterRequest {
    /**
      * 集群实例ID
      */
    ClusterId: string;
    /**
      * master缩容选项
      */
    ScaleInMasters: Array<ScaleInMaster>;
}
/**
 * EnvironmentVariable
 */
export interface EnvironmentVariable {
    /**
      * key
      */
    Name?: string;
    /**
      * val
      */
    Value?: string;
}
/**
 * UpdateImageCache请求参数结构体
 */
export interface UpdateImageCacheRequest {
    /**
      * 镜像缓存Id
      */
    ImageCacheId: string;
    /**
      * 镜像缓存名称
      */
    ImageCacheName?: string;
}
/**
 * CreateClusterNodePoolFromExistingAsg请求参数结构体
 */
export interface CreateClusterNodePoolFromExistingAsgRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 伸缩组ID
      */
    AutoscalingGroupId: string;
}
/**
 * Prometheus告警规则
 */
export interface PrometheusAlertRule {
    /**
      * 规则名称
      */
    Name: string;
    /**
      * prometheus语句
      */
    Rule: string;
    /**
      * 额外标签
      */
    Labels: Array<Label>;
    /**
      * 告警发送模板
      */
    Template: string;
    /**
      * 持续时间
      */
    For: string;
    /**
      * 该条规则的描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Describe?: string;
    /**
      * 参考prometheus rule中的annotations
注意：此字段可能返回 null，表示取不到有效值。
      */
    Annotations?: Array<Label>;
    /**
      * 告警规则状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleState?: number;
}
/**
 * 镜像缓存的信息
 */
export interface ImageCache {
    /**
      * 镜像缓存Id
      */
    ImageCacheId: string;
    /**
      * 镜像缓存名称
      */
    ImageCacheName: string;
    /**
      * 镜像缓存大小。单位：GiB
      */
    ImageCacheSize: number;
    /**
      * 镜像缓存包含的镜像列表
      */
    Images: Array<string>;
    /**
      * 创建时间
      */
    CreationTime: string;
    /**
      * 到期时间
      */
    ExpireDateTime: string;
    /**
      * 镜像缓存事件信息
      */
    Events: Array<ImageCacheEvent>;
    /**
      * 最新一次匹配到镜像缓存的时间
      */
    LastMatchedTime: string;
    /**
      * 镜像缓存对应的快照Id
      */
    SnapshotId: string;
    /**
      * 镜像缓存状态，可能取值：
Pending：创建中
Ready：创建完成
Failed：创建失败
Updating：更新中
UpdateFailed：更新失败
只有状态为Ready时，才能正常使用镜像缓存
      */
    Status: string;
}
/**
 * DescribePrometheusAgentInstances请求参数结构体
 */
export interface DescribePrometheusAgentInstancesRequest {
    /**
      * 集群id
可以是tke, eks, edge的集群id
      */
    ClusterId: string;
}
/**
 * ForwardApplicationRequestV3返回参数结构体
 */
export interface ForwardApplicationRequestV3Response {
    /**
      * 请求集群addon后返回的数据
      */
    ResponseBody: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群网络相关的参数
 */
export interface ClusterNetworkSettings {
    /**
      * 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突
      */
    ClusterCIDR: string;
    /**
      * 是否忽略 ClusterCIDR 冲突错误, 默认不忽略
      */
    IgnoreClusterCIDRConflict?: boolean;
    /**
      * 集群中每个Node上最大的Pod数量(默认为256)
      */
    MaxNodePodNum?: number;
    /**
      * 集群最大的service数量(默认为256)
      */
    MaxClusterServiceNum?: number;
    /**
      * 是否启用IPVS(默认不开启)
      */
    Ipvs?: boolean;
    /**
      * 集群的VPCID（如果创建空集群，为必传值，否则自动设置为和集群的节点保持一致）
      */
    VpcId?: string;
    /**
      * 网络插件是否启用CNI(默认开启)
      */
    Cni?: boolean;
    /**
      * service的网络模式，当前参数只适用于ipvs+bpf模式
注意：此字段可能返回 null，表示取不到有效值。
      */
    KubeProxyMode: string;
    /**
      * 用于分配service的IP range，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceCIDR: string;
    /**
      * 集群关联的容器子网
注意：此字段可能返回 null，表示取不到有效值。
      */
    Subnets: Array<string>;
}
/**
 * DescribeImages返回参数结构体
 */
export interface DescribeImagesResponse {
    /**
      * 镜像数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 镜像信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageInstanceSet: Array<ImageInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群关联的伸缩组最大实例数最小值实例数
 */
export interface AutoScalingGroupRange {
    /**
      * 伸缩组最小实例数
      */
    MinSize?: number;
    /**
      * 伸缩组最大实例数
      */
    MaxSize?: number;
}
/**
 * ModifyClusterAttribute请求参数结构体
 */
export interface ModifyClusterAttributeRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群所属项目
      */
    ProjectId?: number;
    /**
      * 集群名称
      */
    ClusterName?: string;
    /**
      * 集群描述
      */
    ClusterDesc?: string;
    /**
      * 集群等级
      */
    ClusterLevel?: string;
    /**
      * 自动变配集群等级
      */
    AutoUpgradeClusterLevel?: AutoUpgradeClusterLevel;
}
/**
 * DeleteClusterRoute返回参数结构体
 */
export interface DeleteClusterRouteResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterEndpointSP返回参数结构体
 */
export interface ModifyClusterEndpointSPResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusterEndpointVip返回参数结构体
 */
export interface CreateClusterEndpointVipResponse {
    /**
      * 请求任务的FlowId
      */
    RequestFlowId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群资源使用量
 */
export interface ResourceUsage {
    /**
      * 资源类型
      */
    Name: string;
    /**
      * 资源使用量
      */
    Usage: number;
    /**
      * 资源使用详情
      */
    Details: Array<ResourceUsageDetail>;
}
/**
 * 自动扩所容的节点
 */
export interface AutoscalingAdded {
    /**
      * 正在加入中的节点数量
      */
    Joining: number;
    /**
      * 初始化中的节点数量
      */
    Initializing: number;
    /**
      * 正常的节点数量
      */
    Normal: number;
    /**
      * 节点总数
      */
    Total: number;
}
/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
    /**
      * 集群ID列表(为空时，
表示获取账号下所有集群)
      */
    ClusterIds?: Array<string>;
    /**
      * 偏移量,默认0
      */
    Offset?: number;
    /**
      * 最大输出条数，默认20，最大为100
      */
    Limit?: number;
    /**
      * ·  ClusterName
    按照【集群名】进行过滤。
    类型：String
    必选：否

·  ClusterType
    按照【集群类型】进行过滤。
    类型：String
    必选：否

·  ClusterStatus
    按照【集群状态】进行过滤。
    类型：String
    必选：否

·  Tags
    按照【标签键值对】进行过滤。
    类型：String
    必选：否

·  vpc-id
    按照【VPC】进行过滤。
    类型：String
    必选：否

·  tag-key
    按照【标签键】进行过滤。
    类型：String
    必选：否

·  tag-value
    按照【标签值】进行过滤。
    类型：String
    必选：否

·  tag:tag-key
    按照【标签键值对】进行过滤。
    类型：String
    必选：否
      */
    Filters?: Array<Filter>;
    /**
      * 集群类型，例如：MANAGED_CLUSTER
      */
    ClusterType?: string;
}
/**
 * ModifyClusterAttribute返回参数结构体
 */
export interface ModifyClusterAttributeResponse {
    /**
      * 集群所属项目
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: number;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 集群描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterDesc: string;
    /**
      * 集群等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterLevel: string;
    /**
      * 自动变配集群等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoUpgradeClusterLevel: AutoUpgradeClusterLevel;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 弹性容器集群公网访问负载均衡信息
 */
export interface ClusterPublicLB {
    /**
      * 是否开启公网访问LB
      */
    Enabled: boolean;
    /**
      * 允许访问的来源CIDR列表
      */
    AllowFromCidrs?: Array<string>;
    /**
      * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
      */
    SecurityPolicies?: Array<string>;
    /**
      * 外网访问相关的扩展参数，格式为json
      */
    ExtraParam?: string;
    /**
      * 新内外网功能，需要传递安全组
      */
    SecurityGroup?: string;
}
/**
 * 创建集群时，选择安装的扩展组件的信息
 */
export interface ExtensionAddon {
    /**
      * 扩展组件名称
      */
    AddonName: string;
    /**
      * 扩展组件信息(扩展组件资源对象的json字符串描述)
      */
    AddonParam: string;
}
/**
 * DeletePrometheusAlertRule请求参数结构体
 */
export interface DeletePrometheusAlertRuleRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 告警规则id列表
      */
    AlertIds: Array<string>;
}
/**
 * DescribePrometheusTemplateSync返回参数结构体
 */
export interface DescribePrometheusTemplateSyncResponse {
    /**
      * 同步目标详情
      */
    Targets?: Array<PrometheusTemplateSyncTarget>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * k8s中标签，一般以数组的方式存在
 */
export interface Label {
    /**
      * map表中的Name
      */
    Name: string;
    /**
      * map表中的Value
      */
    Value: string;
}
/**
 * DescribePrometheusAlertHistory请求参数结构体
 */
export interface DescribePrometheusAlertHistoryRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 告警名称
      */
    RuleName?: string;
    /**
      * 开始时间
      */
    StartTime?: string;
    /**
      * 结束时间
      */
    EndTime?: string;
    /**
      * label集合
      */
    Labels?: string;
    /**
      * 分片
      */
    Offset?: number;
    /**
      * 分片
      */
    Limit?: number;
}
/**
 * DeletePrometheusTemplateSync请求参数结构体
 */
export interface DeletePrometheusTemplateSyncRequest {
    /**
      * 模板id
      */
    TemplateId: string;
    /**
      * 取消同步的对象列表
      */
    Targets: Array<PrometheusTemplateSyncTarget>;
}
/**
 * SetNodePoolNodeProtection返回参数结构体
 */
export interface SetNodePoolNodeProtectionResponse {
    /**
      * 成功设置的节点id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SucceedInstanceIds: Array<string>;
    /**
      * 没有成功设置的节点id
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedInstanceIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisableVpcCniNetworkType请求参数结构体
 */
export interface DisableVpcCniNetworkTypeRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * 资源使用明细
 */
export interface ResourceUsageDetail {
    /**
      * 资源名称
      */
    Name: string;
    /**
      * 资源使用量
      */
    Usage: number;
}
/**
 * DeleteEKSContainerInstances请求参数结构体
 */
export interface DeleteEKSContainerInstancesRequest {
    /**
      * 需要删除的EksCi的Id。 最大数量不超过20
      */
    EksCiIds: Array<string>;
    /**
      * 是否释放为EksCi自动创建的Eip
      */
    ReleaseAutoCreatedEip?: boolean;
}
/**
 * 托管prometheus告警配置实例
 */
export interface PrometheusAlertRuleDetail {
    /**
      * 规则名称
      */
    Name: string;
    /**
      * 规则列表
      */
    Rules: Array<PrometheusAlertRule>;
    /**
      * 最后修改时间
      */
    UpdatedAt?: string;
    /**
      * 告警渠道
      */
    Notification?: PrometheusNotification;
    /**
      * 告警 id
      */
    Id?: string;
    /**
      * 如果该告警来至模板下发，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateId?: string;
    /**
      * 计算周期
注意：此字段可能返回 null，表示取不到有效值。
      */
    Interval?: string;
}
/**
 * UpgradeClusterInstances请求参数结构体
 */
export interface UpgradeClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * create 表示开始一次升级任务
pause 表示停止任务
resume表示继续任务
abort表示终止任务
      */
    Operation: string;
    /**
      * 升级类型，只有Operation是create需要设置
reset 大版本重装升级
hot 小版本热升级
major 大版本原地升级
      */
    UpgradeType?: string;
    /**
      * 需要升级的节点列表
      */
    InstanceIds?: Array<string>;
    /**
      * 当节点重新加入集群时候所使用的参数，参考添加已有节点接口
      */
    ResetParam?: UpgradeNodeResetParam;
    /**
      * 是否忽略节点升级前检查
      */
    SkipPreCheck?: boolean;
    /**
      * 最大可容忍的不可用Pod比例
      */
    MaxNotReadyPercent?: number;
}
/**
 * DeleteClusterEndpointVip返回参数结构体
 */
export interface DeleteClusterEndpointVipResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SyncPrometheusTemplate请求参数结构体
 */
export interface SyncPrometheusTemplateRequest {
    /**
      * 实例id
      */
    TemplateId: string;
    /**
      * 同步目标
      */
    Targets: Array<PrometheusTemplateSyncTarget>;
}
/**
 * 描述集群的基本配置信息
 */
export interface ClusterBasicSettings {
    /**
      * 集群系统。centos7.2x86_64 或者 ubuntu16.04.1 LTSx86_64，默认取值为ubuntu16.04.1 LTSx86_64
      */
    ClusterOs?: string;
    /**
      * 集群版本,默认值为1.10.5
      */
    ClusterVersion?: string;
    /**
      * 集群名称
      */
    ClusterName?: string;
    /**
      * 集群描述
      */
    ClusterDescription?: string;
    /**
      * 私有网络ID，形如vpc-xxx。创建托管空集群时必传。
      */
    VpcId?: string;
    /**
      * 集群内新增资源所属项目ID。
      */
    ProjectId?: number;
    /**
      * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到集群实例。
      */
    TagSpecification?: Array<TagSpecification>;
    /**
      * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
      */
    OsCustomizeType?: string;
    /**
      * 是否开启节点的默认安全组(默认: 否，Alpha特性)
      */
    NeedWorkSecurityGroup?: boolean;
    /**
      * 当选择Cilium Overlay网络插件时，TKE会从该子网获取2个IP用来创建内网负载均衡
      */
    SubnetId?: string;
    /**
      * 集群等级，针对托管集群生效
      */
    ClusterLevel?: string;
    /**
      * 自动变配集群等级，针对托管集群生效
      */
    AutoUpgradeClusterLevel?: AutoUpgradeClusterLevel;
}
/**
 * CreatePrometheusDashboard返回参数结构体
 */
export interface CreatePrometheusDashboardResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEKSClusterCredential返回参数结构体
 */
export interface DescribeEKSClusterCredentialResponse {
    /**
      * 集群的接入地址信息
      */
    Addresses: Array<IPAddress>;
    /**
      * 集群的认证信息
      */
    Credential: ClusterCredential;
    /**
      * 集群的公网访问信息
      */
    PublicLB: ClusterPublicLB;
    /**
      * 集群的内网访问信息
      */
    InternalLB: ClusterInternalLB;
    /**
      * 标记是否新的内外网功能
      */
    ProxyLB: boolean;
    /**
      * 连接用户集群k8s 的Config
      */
    Kubeconfig: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteClusterInstances请求参数结构体
 */
export interface DeleteClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 主机InstanceId列表
      */
    InstanceIds: Array<string>;
    /**
      * 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例）
      */
    InstanceDeleteMode?: string;
    /**
      * 是否强制删除(当节点在初始化时，可以指定参数为TRUE)
      */
    ForceDelete?: boolean;
}
/**
 * 节点升级重装参数
 */
export interface UpgradeNodeResetParam {
    /**
      * 实例额外需要设置参数信息
      */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;
    /**
      * 节点登录信息（目前仅支持使用Password或者单个KeyIds）
      */
    LoginSettings?: LoginSettings;
    /**
      * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。（目前仅支持设置单个sgId）
      */
    SecurityGroupIds?: Array<string>;
}
/**
 * ModifyClusterAsGroupAttribute返回参数结构体
 */
export interface ModifyClusterAsGroupAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusterInstances请求参数结构体
 */
export interface CreateClusterInstancesRequest {
    /**
      * 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段
      */
    ClusterId: string;
    /**
      * CVM创建透传参数，json化字符串格式，如需要保证扩展集群节点请求幂等性需要在此参数添加ClientToken字段，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。
      */
    RunInstancePara: string;
    /**
      * 实例额外需要设置参数信息
      */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /**
      * 校验规则相关选项，可配置跳过某些校验规则。目前支持GlobalRouteCIDRCheck（跳过GlobalRouter的相关校验），VpcCniCIDRCheck（跳过VpcCni相关校验）
      */
    SkipValidateOptions?: Array<string>;
}
/**
 * DescribeClusterAuthenticationOptions请求参数结构体
 */
export interface DescribeClusterAuthenticationOptionsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * DescribeEksContainerInstanceLog返回参数结构体
 */
export interface DescribeEksContainerInstanceLogResponse {
    /**
      * 容器名称
      */
    ContainerName: string;
    /**
      * 日志内容
      */
    LogContent: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEKSCluster返回参数结构体
 */
export interface DeleteEKSClusterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterStatus请求参数结构体
 */
export interface DescribeClusterStatusRequest {
    /**
      * 集群ID列表，不传默认拉取所有集群
      */
    ClusterIds?: Array<string>;
}
/**
 * 版本信息
 */
export interface VersionInstance {
    /**
      * 版本名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 版本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version: string;
    /**
      * Remark
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
}
/**
 * prometheus配置
 */
export interface PrometheusConfigItem {
    /**
      * 名称
      */
    Name: string;
    /**
      * 配置内容
      */
    Config: string;
    /**
      * 用于出参，如果该配置来至模板，则为模板id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateId?: string;
}
/**
 * DescribeClusterStatus返回参数结构体
 */
export interface DescribeClusterStatusResponse {
    /**
      * 集群状态列表
      */
    ClusterStatusSet: Array<ClusterStatus>;
    /**
      * 集群个数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteClusterNodePool请求参数结构体
 */
export interface DeleteClusterNodePoolRequest {
    /**
      * 节点池对应的 ClusterId
      */
    ClusterId: string;
    /**
      * 需要删除的节点池 Id 列表
      */
    NodePoolIds: Array<string>;
    /**
      * 删除节点池时是否保留节点池内节点(节点仍然会被移出集群，但对应的实例不会被销毁)
      */
    KeepInstance: boolean;
}
/**
 * EksContainerInstance实例类型
 */
export interface EksCi {
    /**
      * EKS Cotainer Instance Id
      */
    EksCiId?: string;
    /**
      * EKS Cotainer Instance Name
      */
    EksCiName?: string;
    /**
      * 内存大小
      */
    Memory?: number;
    /**
      * CPU大小
      */
    Cpu?: number;
    /**
      * 安全组ID
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 容器组的重启策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartPolicy?: string;
    /**
      * 返回容器组创建状态：Pending，Running，Succeeded，Failed。其中：
Failed （运行失败）指的容器组退出，RestartPolilcy为Never， 有容器exitCode非0；
Succeeded（运行成功）指的是容器组退出了，RestartPolicy为Never或onFailure，所有容器exitCode都为0；
Failed和Succeeded这两种状态都会停止运行，停止计费。
Pending是创建中，Running是 运行中。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: string;
    /**
      * 接到请求后的系统创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreationTime?: string;
    /**
      * 容器全部成功退出后的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    SucceededTime?: string;
    /**
      * 容器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Containers?: Array<Container>;
    /**
      * 数据卷信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    EksCiVolume?: EksCiVolume;
    /**
      * 容器组运行的安全上下文
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecurityContext?: SecurityContext;
    /**
      * 内网ip地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIp?: string;
    /**
      * 容器实例绑定的Eip地址，注意可能为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    EipAddress?: string;
    /**
      * GPU类型。如无使用GPU则不返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuType?: string;
    /**
      * CPU类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuType?: string;
    /**
      * GPU卡数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuCount?: number;
    /**
      * 实例所属VPC的Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 实例所属子网Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId?: string;
    /**
      * 初始化容器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitContainers?: Array<Container>;
    /**
      * 为容器实例关联 CAM 角色，value 填写 CAM 角色名称，容器实例可获取该 CAM 角色包含的权限策略，方便 容器实例 内的程序进行如购买资源、读写存储等云资源操作。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CamRoleName?: string;
    /**
      * 自动为用户创建的EipId
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoCreatedEipId?: string;
    /**
      * 容器状态是否持久化
注意：此字段可能返回 null，表示取不到有效值。
      */
    PersistStatus?: boolean;
}
/**
 * UpdateImageCache返回参数结构体
 */
export interface UpdateImageCacheResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisableVpcCniNetworkType返回参数结构体
 */
export interface DisableVpcCniNetworkTypeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterKubeconfig请求参数结构体
 */
export interface DescribeClusterKubeconfigRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 默认false 获取内网，是否获取外网访问的kubeconfig
      */
    IsExtranet?: boolean;
}
/**
 * 集群容器网络相关参数
 */
export interface ClusterCIDRSettings {
    /**
      * 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。
      */
    ClusterCIDR?: string;
    /**
      * 是否忽略 ClusterCIDR 冲突错误, 默认不忽略
      */
    IgnoreClusterCIDRConflict?: boolean;
    /**
      * 集群中每个Node上最大的Pod数量。取值范围4～256。不为2的幂值时会向上取最接近的2的幂值。
      */
    MaxNodePodNum?: number;
    /**
      * 集群最大的service数量。取值范围32～32768，不为2的幂值时会向上取最接近的2的幂值。默认值256
      */
    MaxClusterServiceNum?: number;
    /**
      * 用于分配集群服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。
      */
    ServiceCIDR?: string;
    /**
      * VPC-CNI网络模式下，弹性网卡的子网Id。
      */
    EniSubnetIds?: Array<string>;
    /**
      * VPC-CNI网络模式下，弹性网卡IP的回收时间，取值范围[300,15768000)
      */
    ClaimExpiredSeconds?: number;
}
/**
 * 描述了 “云安全” 服务相关的信息
 */
export interface RunSecurityServiceEnabled {
    /**
      * 是否开启[云安全](/document/product/296)服务。取值范围：<br><li>TRUE：表示开启云安全服务<br><li>FALSE：表示不开启云安全服务<br><br>默认取值：TRUE。
      */
    Enabled?: boolean;
}
/**
 * CreatePrometheusTemplate返回参数结构体
 */
export interface CreatePrometheusTemplateResponse {
    /**
      * 模板Id
      */
    TemplateId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusterEndpointVip请求参数结构体
 */
export interface CreateClusterEndpointVipRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有)
      */
    SecurityPolicies?: Array<string>;
}
/**
 * 集群路由对象
 */
export interface RouteInfo {
    /**
      * 路由表名称。
      */
    RouteTableName: string;
    /**
      * 目的端CIDR。
      */
    DestinationCidrBlock: string;
    /**
      * 下一跳地址。
      */
    GatewayIp: string;
}
/**
 * 探针使用TcpSocket检测容器
 */
export interface TcpSocket {
    /**
      * TcpSocket检测的端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
}
/**
 * 弹性容器集群内网访问LB信息
 */
export interface ClusterInternalLB {
    /**
      * 是否开启内网访问LB
      */
    Enabled: boolean;
    /**
      * 内网访问LB关联的子网Id
      */
    SubnetId?: string;
}
/**
 * EnableVpcCniNetworkType返回参数结构体
 */
export interface EnableVpcCniNetworkTypeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckInstancesUpgradeAble请求参数结构体
 */
export interface CheckInstancesUpgradeAbleRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 节点列表，空为全部节点
      */
    InstanceIds?: Array<string>;
    /**
      * 升级类型
      */
    UpgradeType?: string;
    /**
      * 分页Offset
      */
    Offset?: number;
    /**
      * 分页Limit
      */
    Limit?: number;
    /**
      * 过滤
      */
    Filter?: Array<Filter>;
}
/**
 * 已经存在的实例信息
 */
export interface ExistedInstance {
    /**
      * 实例是否支持加入集群(TRUE 可以加入 FALSE 不能加入)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Usable: boolean;
    /**
      * 实例不支持加入的原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnusableReason: string;
    /**
      * 实例已经所在的集群ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlreadyInCluster: string;
    /**
      * 实例ID形如：ins-xxxxxxxx。
      */
    InstanceId: string;
    /**
      * 实例名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 实例主网卡的内网IP列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateIpAddresses: Array<string>;
    /**
      * 实例主网卡的公网IP列表。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicIpAddresses: Array<string>;
    /**
      * 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 实例的CPU核数，单位：核。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CPU: number;
    /**
      * 实例内存容量，单位：GB。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Memory: number;
    /**
      * 操作系统名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OsName: string;
    /**
      * 实例机型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceType: string;
    /**
      * 伸缩组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoscalingGroupId: string;
    /**
      * 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceChargeType: string;
}
/**
 * ModifyNodePoolInstanceTypes请求参数结构体
 */
export interface ModifyNodePoolInstanceTypesRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 节点池id
      */
    NodePoolId: string;
    /**
      * 机型列表
      */
    InstanceTypes: Array<string>;
}
/**
 * 镜像缓存的事件
 */
export interface ImageCacheEvent {
    /**
      * 镜像缓存Id
      */
    ImageCacheId: string;
    /**
      * 事件类型, Normal或者Warning
      */
    Type: string;
    /**
      * 事件原因简述
      */
    Reason: string;
    /**
      * 事件原因详述
      */
    Message: string;
    /**
      * 事件第一次出现时间
      */
    FirstTimestamp: string;
    /**
      * 事件最后一次出现时间
      */
    LastTimestamp: string;
}
/**
 * AddClusterCIDR请求参数结构体
 */
export interface AddClusterCIDRRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 增加的ClusterCIDR
      */
    ClusterCIDRs: Array<string>;
    /**
      * 是否忽略ClusterCIDR与VPC路由表的冲突
      */
    IgnoreClusterCIDRConflict?: boolean;
}
/**
 * DeleteEKSContainerInstances返回参数结构体
 */
export interface DeleteEKSContainerInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePrometheusAlertRule请求参数结构体
 */
export interface DescribePrometheusAlertRuleRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 分页
      */
    Offset?: number;
    /**
      * 分页
      */
    Limit?: number;
    /**
      * 过滤
支持ID，Name
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeEKSClusterCredential请求参数结构体
 */
export interface DescribeEKSClusterCredentialRequest {
    /**
      * 集群Id
      */
    ClusterId: string;
}
/**
 * GetUpgradeInstanceProgress请求参数结构体
 */
export interface GetUpgradeInstanceProgressRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 最多获取多少个节点的进度
      */
    Limit?: number;
    /**
      * 从第几个节点开始获取进度
      */
    Offset?: number;
}
/**
 * EnableClusterDeletionProtection请求参数结构体
 */
export interface EnableClusterDeletionProtectionRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * ModifyPrometheusTemplate请求参数结构体
 */
export interface ModifyPrometheusTemplateRequest {
    /**
      * 模板ID
      */
    TemplateId: string;
    /**
      * 修改内容
      */
    Template: PrometheusTemplateModify;
}
/**
 * DescribeExternalClusterSpec返回参数结构体
 */
export interface DescribeExternalClusterSpecResponse {
    /**
      * 导入第三方集群YAML定义
      */
    Spec: string;
    /**
      * agent.yaml文件过期时间字符串，时区UTC
      */
    Expiration: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddNodeToNodePool返回参数结构体
 */
export interface AddNodeToNodePoolResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 某机型可支持的最大 VPC-CNI 模式的 Pod 数量
 */
export interface PodLimitsByType {
    /**
      * TKE共享网卡非固定IP模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TKERouteENINonStaticIP: number;
    /**
      * TKE共享网卡固定IP模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TKERouteENIStaticIP: number;
    /**
      * TKE独立网卡模式可支持的Pod数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TKEDirectENI: number;
}
/**
 * DescribeClusterLevelAttribute请求参数结构体
 */
export interface DescribeClusterLevelAttributeRequest {
    /**
      * 集群ID，变配时使用
      */
    ClusterID?: string;
}
/**
 * UpdateEKSCluster返回参数结构体
 */
export interface UpdateEKSClusterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisableClusterDeletionProtection请求参数结构体
 */
export interface DisableClusterDeletionProtectionRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * 节点池描述
 */
export interface NodePool {
    /**
      * NodePoolId 资源池id
      */
    NodePoolId: string;
    /**
      * Name 资源池名称
      */
    Name: string;
    /**
      * ClusterInstanceId 集群实例id
      */
    ClusterInstanceId: string;
    /**
      * LifeState 状态，当前节点池生命周期状态包括：creating，normal，updating，deleting，deleted
      */
    LifeState: string;
    /**
      * LaunchConfigurationId 配置
      */
    LaunchConfigurationId: string;
    /**
      * AutoscalingGroupId 分组id
      */
    AutoscalingGroupId: string;
    /**
      * Labels 标签
      */
    Labels: Array<Label>;
    /**
      * Taints 污点标记
      */
    Taints: Array<Taint>;
    /**
      * NodeCountSummary 节点列表
      */
    NodeCountSummary: NodeCountSummary;
    /**
      * 状态信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoscalingGroupStatus: string;
    /**
      * 最大节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxNodesNum: number;
    /**
      * 最小节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinNodesNum: number;
    /**
      * 期望的节点数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    DesiredNodesNum: number;
    /**
      * 节点池osName
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodePoolOs: string;
    /**
      * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
注意：此字段可能返回 null，表示取不到有效值。
      */
    OsCustomizeType: string;
    /**
      * 镜像id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageId: string;
    /**
      * 集群属于节点podCIDR大小自定义模式时，节点池需要带上pod数量属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    DesiredPodNum: number;
    /**
      * 用户自定义脚本
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserScript: string;
    /**
      * 资源标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
}
/**
 * 服务事件
 */
export interface Event {
    /**
      * pod名称
      */
    PodName: string;
    /**
      * 事件原因内容
      */
    Reason: string;
    /**
      * 事件类型
      */
    Type: string;
    /**
      * 事件出现次数
      */
    Count: number;
    /**
      * 事件第一次出现时间
      */
    FirstTimestamp: string;
    /**
      * 事件最后一次出现时间
      */
    LastTimestamp: string;
    /**
      * 事件内容
      */
    Message: string;
}
/**
 * DescribeRegions请求参数结构体
 */
export declare type DescribeRegionsRequest = null;
/**
 * UpdateEKSContainerInstance请求参数结构体
 */
export interface UpdateEKSContainerInstanceRequest {
    /**
      * 容器实例 ID
      */
    EksCiId: string;
    /**
      * 实例重启策略： Always(总是重启)、Never(从不重启)、OnFailure(失败时重启)
      */
    RestartPolicy?: string;
    /**
      * 数据卷，包含NfsVolume数组和CbsVolume数组
      */
    EksCiVolume?: EksCiVolume;
    /**
      * 容器组
      */
    Containers?: Array<Container>;
    /**
      * Init 容器组
      */
    InitContainers?: Array<Container>;
    /**
      * 容器实例名称
      */
    Name?: string;
    /**
      * 镜像仓库凭证数组
      */
    ImageRegistryCredentials?: Array<ImageRegistryCredential>;
}
/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
    /**
      * 集群总个数
      */
    TotalCount: number;
    /**
      * 集群信息列表
      */
    Clusters: Array<Cluster>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 接入k8s 的认证信息
 */
export interface ClusterCredential {
    /**
      * CA 根证书
      */
    CACert: string;
    /**
      * 认证用的Token
      */
    Token?: string;
}
/**
 * DescribeVpcCniPodLimits请求参数结构体
 */
export interface DescribeVpcCniPodLimitsRequest {
    /**
      * 查询的机型所在可用区，如：ap-guangzhou-3，默认为空，即不按可用区过滤信息
      */
    Zone?: string;
    /**
      * 查询的实例机型系列信息，如：S5，默认为空，即不按机型系列过滤信息
      */
    InstanceFamily?: string;
    /**
      * 查询的实例机型信息，如：S5.LARGE8，默认为空，即不按机型过滤信息
      */
    InstanceType?: string;
}
/**
 * DescribePrometheusOverviews请求参数结构体
 */
export interface DescribePrometheusOverviewsRequest {
    /**
      * 用于分页
      */
    Offset?: number;
    /**
      * 用于分页
      */
    Limit?: number;
    /**
      * 过滤实例，目前支持：
ID: 通过实例ID来过滤
Name: 通过实例名称来过滤
      */
    Filters?: Array<Filter>;
}
/**
 * 集群master自定义参数
 */
export interface ClusterExtraArgs {
    /**
      * kube-apiserver自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
注意：此字段可能返回 null，表示取不到有效值。
      */
    KubeAPIServer?: Array<string>;
    /**
      * kube-controller-manager自定义参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    KubeControllerManager?: Array<string>;
    /**
      * kube-scheduler自定义参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    KubeScheduler?: Array<string>;
    /**
      * etcd自定义参数，只支持独立集群
注意：此字段可能返回 null，表示取不到有效值。
      */
    Etcd?: Array<string>;
}
/**
 * DescribeRouteTableConflicts请求参数结构体
 */
export interface DescribeRouteTableConflictsRequest {
    /**
      * 路由表CIDR
      */
    RouteTableCidrBlock: string;
    /**
      * 路由表绑定的VPC
      */
    VpcId: string;
}
/**
 * SyncPrometheusTemplate返回参数结构体
 */
export interface SyncPrometheusTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述了k8s节点数据盘相关配置与信息。
 */
export interface DataDisk {
    /**
      * 云盘类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiskType: string;
    /**
      * 文件系统(ext3/ext4/xfs)
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileSystem: string;
    /**
      * 云盘大小(G）
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiskSize: number;
    /**
      * 是否自动化格式盘并挂载
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoFormatAndMount: boolean;
    /**
      * 挂载目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    MountTarget?: string;
    /**
      * 挂载设备名或分区名，当且仅当添加已有节点时需要
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiskPartition: string;
}
/**
 * DeleteEKSCluster请求参数结构体
 */
export interface DeleteEKSClusterRequest {
    /**
      * 弹性集群Id
      */
    ClusterId: string;
}
/**
 * GetUpgradeInstanceProgress返回参数结构体
 */
export interface GetUpgradeInstanceProgressResponse {
    /**
      * 升级节点总数
      */
    Total?: number;
    /**
      * 已升级节点总数
      */
    Done?: number;
    /**
      * 升级任务生命周期
process 运行中
paused 已停止
pauing 正在停止
done  已完成
timeout 已超时
aborted 已取消
      */
    LifeState?: string;
    /**
      * 各节点升级进度详情
      */
    Instances?: Array<InstanceUpgradeProgressItem>;
    /**
      * 集群当前状态
      */
    ClusterStatus?: InstanceUpgradeClusterStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExistedInstances返回参数结构体
 */
export interface DescribeExistedInstancesResponse {
    /**
      * 已经存在的实例信息数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExistedInstanceSet: Array<ExistedInstance>;
    /**
      * 符合条件的实例数量。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEKSCluster返回参数结构体
 */
export interface CreateEKSClusterResponse {
    /**
      * 弹性集群Id
      */
    ClusterId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteImageCaches返回参数结构体
 */
export interface DeleteImageCachesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreatePrometheusAlertRule返回参数结构体
 */
export interface CreatePrometheusAlertRuleResponse {
    /**
      * 告警id
      */
    Id: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateEKSContainerInstance返回参数结构体
 */
export interface UpdateEKSContainerInstanceResponse {
    /**
      * 容器实例 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EksCiId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 资源删除选项
 */
export interface ResourceDeleteOption {
    /**
      * 资源类型，例如CBS
      */
    ResourceType: string;
    /**
      * 集群删除时资源的删除模式：terminate（销毁），retain （保留）
      */
    DeleteMode: string;
}
/**
 * Eks 自定义域名服务器 配置
 */
export interface DnsServerConf {
    /**
      * 域名。空字符串表示所有域名。
      */
    Domain: string;
    /**
      * dns 服务器地址列表。地址格式 ip:port
      */
    DnsServers: Array<string>;
}
/**
 * 弹性集群信息
 */
export interface EksCluster {
    /**
      * 集群Id
      */
    ClusterId: string;
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * Vpc Id
      */
    VpcId: string;
    /**
      * 子网列表
      */
    SubnetIds: Array<string>;
    /**
      * k8s 版本号
      */
    K8SVersion: string;
    /**
      * 集群状态(running运行中，initializing 初始化中，failed异常)
      */
    Status?: string;
    /**
      * 集群描述信息
      */
    ClusterDesc?: string;
    /**
      * 集群创建时间
      */
    CreatedTime?: string;
    /**
      * Service 子网Id
      */
    ServiceSubnetId?: string;
    /**
      * 集群的自定义dns 服务器信息
      */
    DnsServers?: Array<DnsServerConf>;
    /**
      * 将来删除集群时是否要删除cbs。默认为 FALSE
      */
    NeedDeleteCbs?: boolean;
    /**
      * 是否在用户集群内开启Dns。默认为TRUE
      */
    EnableVpcCoreDNS?: boolean;
    /**
      * 标签描述列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSpecification?: Array<TagSpecification>;
}
/**
 * ModifyNodePoolInstanceTypes返回参数结构体
 */
export interface ModifyNodePoolInstanceTypesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusterNodePoolFromExistingAsg返回参数结构体
 */
export interface CreateClusterNodePoolFromExistingAsgResponse {
    /**
      * 节点池ID
      */
    NodePoolId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEnableVpcCniProgress请求参数结构体
 */
export interface DescribeEnableVpcCniProgressRequest {
    /**
      * 开启vpc-cni的集群ID
      */
    ClusterId: string;
}
/**
 * DescribeClusterEndpointStatus请求参数结构体
 */
export interface DescribeClusterEndpointStatusRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE）
      */
    IsExtranet?: boolean;
}
/**
 * GetClusterLevelPrice返回参数结构体
 */
export interface GetClusterLevelPriceResponse {
    /**
      * 询价结果，单位：分，打折后
      */
    Cost: number;
    /**
      * 询价结果，单位：分，折扣前
      */
    TotalCost: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Probe中的HttpGet
 */
export interface HttpGet {
    /**
      * HttpGet检测的路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * HttpGet检测的端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * HTTP or HTTPS
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scheme: string;
}
/**
 * DescribeResourceUsage返回参数结构体
 */
export interface DescribeResourceUsageResponse {
    /**
      * CRD使用量
      */
    CRDUsage: ResourceUsage;
    /**
      * Pod使用量
      */
    PodUsage: number;
    /**
      * ConfigMap使用量
      */
    ConfigMapUsage: number;
    /**
      * 其他资源使用量
      */
    OtherUsage: ResourceUsage;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusterAsGroup请求参数结构体
 */
export interface CreateClusterAsGroupRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 伸缩组创建透传参数，json化字符串格式，详见[伸缩组创建实例](https://cloud.tencent.com/document/api/377/20440)接口。LaunchConfigurationId由LaunchConfigurePara参数创建，不支持填写
      */
    AutoScalingGroupPara: string;
    /**
      * 启动配置创建透传参数，json化字符串格式，详见[创建启动配置](https://cloud.tencent.com/document/api/377/20447)接口。另外ImageId参数由于集群维度已经有的ImageId信息，这个字段不需要填写。UserData字段设置通过UserScript设置，这个字段不需要填写。
      */
    LaunchConfigurePara: string;
    /**
      * 节点高级配置信息
      */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /**
      * 节点Label数组
      */
    Labels?: Array<Label>;
}
/**
 * 从镜像仓库拉取镜像的凭据
 */
export interface ImageRegistryCredential {
    /**
      * 镜像仓库地址
      */
    Server?: string;
    /**
      * 用户名
      */
    Username?: string;
    /**
      * 密码
      */
    Password?: string;
    /**
      * ImageRegistryCredential的名字
      */
    Name?: string;
}
/**
 * DescribeClusterNodePools返回参数结构体
 */
export interface DescribeClusterNodePoolsResponse {
    /**
      * NodePools（节点池列表）
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodePoolSet: Array<NodePool>;
    /**
      * 资源总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRouteTableConflicts返回参数结构体
 */
export interface DescribeRouteTableConflictsResponse {
    /**
      * 路由表是否冲突。
      */
    HasConflict: boolean;
    /**
      * 路由表冲突列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RouteTableConflictSet: Array<RouteTableConflict>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ServiceAccount认证相关配置
 */
export interface ServiceAccountAuthenticationOptions {
    /**
      * service-account-issuer
注意：此字段可能返回 null，表示取不到有效值。
      */
    Issuer?: string;
    /**
      * service-account-jwks-uri
注意：此字段可能返回 null，表示取不到有效值。
      */
    JWKSURI?: string;
    /**
      * 如果为true，则会自动创建允许匿名用户访问'/.well-known/openid-configuration'和/openid/v1/jwks的rbac规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoCreateDiscoveryAnonymousAuth?: boolean;
}
/**
 * DescribeVersions请求参数结构体
 */
export declare type DescribeVersionsRequest = null;
/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterRoutes返回参数结构体
 */
export interface DescribeClusterRoutesResponse {
    /**
      * 符合条件的实例数量。
      */
    TotalCount?: number;
    /**
      * 集群路由对象。
      */
    RouteSet?: Array<RouteInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEKSContainerInstances返回参数结构体
 */
export interface DescribeEKSContainerInstancesResponse {
    /**
      * 容器组总数
      */
    TotalCount: number;
    /**
      * 容器组列表
      */
    EksCis: Array<EksCi>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteClusterRouteTable请求参数结构体
 */
export interface DeleteClusterRouteTableRequest {
    /**
      * 路由表名称
      */
    RouteTableName: string;
}
/**
 * DescribeAvailableClusterVersion请求参数结构体
 */
export interface DescribeAvailableClusterVersionRequest {
    /**
      * 集群 Id
      */
    ClusterId?: string;
    /**
      * 集群 Id 列表
      */
    ClusterIds?: Array<string>;
}
/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
    /**
      * 集群容器网络配置信息
      */
    ClusterCIDRSettings: ClusterCIDRSettings;
    /**
      * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
      */
    ClusterType: string;
    /**
      * CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。总机型(包括地域)数量不超过10个，相同机型(地域)购买多台机器可以通过设置参数中RunInstances中InstanceCount来实现。
      */
    RunInstancesForNode?: Array<RunInstancesForNode>;
    /**
      * 集群的基本配置信息
      */
    ClusterBasicSettings?: ClusterBasicSettings;
    /**
      * 集群高级配置信息
      */
    ClusterAdvancedSettings?: ClusterAdvancedSettings;
    /**
      * 节点高级配置信息
      */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /**
      * 已存在实例的配置信息。所有实例必须在同一个VPC中，最大数量不超过100，不支持添加竞价实例。
      */
    ExistedInstancesForNode?: Array<ExistedInstancesForNode>;
    /**
      * CVM类型和其对应的数据盘挂载配置信息
      */
    InstanceDataDiskMountSettings?: Array<InstanceDataDiskMountSetting>;
    /**
      * 需要安装的扩展组件信息
      */
    ExtensionAddons?: Array<ExtensionAddon>;
}
/**
 * DeletePrometheusAlertRule返回参数结构体
 */
export interface DeletePrometheusAlertRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 模板实例
 */
export interface PrometheusTemplate {
    /**
      * 模板名称
      */
    Name: string;
    /**
      * 模板维度，支持以下类型
instance 实例级别
cluster 集群级别
      */
    Level: string;
    /**
      * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Describe?: string;
    /**
      * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlertRules?: Array<PrometheusAlertRule>;
    /**
      * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordRules?: Array<PrometheusConfigItem>;
    /**
      * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceMonitors?: Array<PrometheusConfigItem>;
    /**
      * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodMonitors?: Array<PrometheusConfigItem>;
    /**
      * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RawJobs?: Array<PrometheusConfigItem>;
    /**
      * 模板的ID, 用于出参
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateId?: string;
    /**
      * 最近更新时间，用于出参
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: string;
    /**
      * 当前版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version?: string;
    /**
      * 是否系统提供的默认模板，用于出参
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDefault?: boolean;
    /**
      * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlertDetailRules?: Array<PrometheusAlertRuleDetail>;
}
/**
 * AcquireClusterAdminRole请求参数结构体
 */
export interface AcquireClusterAdminRoleRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * CreateClusterAsGroup返回参数结构体
 */
export interface CreateClusterAsGroupResponse {
    /**
      * 启动配置ID
      */
    LaunchConfigurationId?: string;
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEksContainerInstanceLog请求参数结构体
 */
export interface DescribeEksContainerInstanceLogRequest {
    /**
      * Eks Container Instance Id，即容器实例Id
      */
    EksCiId: string;
    /**
      * 容器名称，单容器的实例可选填。如果为多容器实例，请指定容器名称。
      */
    ContainerName?: string;
    /**
      * 返回最新日志行数，默认500，最大2000。日志内容最大返回 1M 数据。
      */
    Tail?: number;
    /**
      * UTC时间，RFC3339标准
      */
    StartTime?: string;
    /**
      * 是否是查上一个容器（如果容器退出重启了）
      */
    Previous?: boolean;
    /**
      * 查询最近多少秒内的日志
      */
    SinceSeconds?: number;
    /**
      * 日志总大小限制
      */
    LimitBytes?: number;
}
/**
 * ModifyClusterAuthenticationOptions返回参数结构体
 */
export interface ModifyClusterAuthenticationOptionsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterAuthenticationOptions返回参数结构体
 */
export interface DescribeClusterAuthenticationOptionsResponse {
    /**
      * ServiceAccount认证配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceAccounts: ServiceAccountAuthenticationOptions;
    /**
      * 最近一次修改操作结果，返回值可能为：Updating，Success，Failed，TimeOut
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestOperationState: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteClusterAsGroups返回参数结构体
 */
export interface DeleteClusterAsGroupsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePrometheusTemplates返回参数结构体
 */
export interface DescribePrometheusTemplatesResponse {
    /**
      * 模板列表
      */
    Templates?: Array<PrometheusTemplate>;
    /**
      * 总数
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePrometheusInstance请求参数结构体
 */
export interface DescribePrometheusInstanceRequest {
    /**
      * 实例id
      */
    InstanceId: string;
}
/**
 * DescribeClusterInstances请求参数结构体
 */
export interface DescribeClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
    /**
      * 需要获取的节点实例Id列表。如果为空，表示拉取集群下所有节点实例。
      */
    InstanceIds?: Array<string>;
    /**
      * 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER。默认为WORKER类型。
      */
    InstanceRole?: string;
    /**
      * 过滤条件列表；Name的可选值为nodepool-id、nodepool-instance-type；Name为nodepool-id表示根据节点池id过滤机器，Value的值为具体的节点池id，Name为nodepool-instance-type表示节点加入节点池的方式，Value的值为MANUALLY_ADDED（手动加入节点池）、AUTOSCALING_ADDED（伸缩组扩容方式加入节点池）、ALL（手动加入节点池 和 伸缩组扩容方式加入节点池）
      */
    Filters?: Array<Filter>;
}
/**
 * 描述了k8s集群相关配置与信息。
 */
export interface InstanceAdvancedSettings {
    /**
      * 数据盘挂载点, 默认不挂载数据盘. 已格式化的 ext3，ext4，xfs 文件系统的数据盘将直接挂载，其他文件系统或未格式化的数据盘将自动格式化为ext4 (tlinux系统格式化成xfs)并挂载，请注意备份数据! 无数据盘或有多块数据盘的云主机此设置不生效。
注意，注意，多盘场景请使用下方的DataDisks数据结构，设置对应的云盘类型、云盘大小、挂载路径、是否格式化等信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MountTarget?: string;
    /**
      * dockerd --graph 指定值, 默认为 /var/lib/docker
注意：此字段可能返回 null，表示取不到有效值。
      */
    DockerGraphPath?: string;
    /**
      * base64 编码的用户脚本, 此脚本会在 k8s 组件运行后执行, 需要用户保证脚本的可重入及重试逻辑, 脚本及其生成的日志文件可在节点的 /data/ccs_userscript/ 路径查看, 如果要求节点需要在进行初始化完成后才可加入调度, 可配合 unschedulable 参数使用, 在 userScript 最后初始化完成后, 添加 kubectl uncordon nodename --kubeconfig=/root/.kube/config 命令使节点加入调度
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserScript?: string;
    /**
      * 设置加入的节点是否参与调度，默认值为0，表示参与调度；非0表示不参与调度, 待节点初始化完成之后, 可执行kubectl uncordon nodename使node加入调度.
      */
    Unschedulable?: number;
    /**
      * 节点Label数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Labels?: Array<Label>;
    /**
      * 多盘数据盘挂载信息：新建节点时请确保购买CVM的参数传递了购买多个数据盘的信息，如CreateClusterInstances API的RunInstancesPara下的DataDisks也需要设置购买多个数据盘, 具体可以参考CreateClusterInstances接口的添加集群节点(多块数据盘)样例；添加已有节点时，请确保填写的分区信息在节点上真实存在
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataDisks?: Array<DataDisk>;
    /**
      * 节点相关的自定义参数信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtraArgs?: InstanceExtraArgs;
    /**
      * 该节点属于podCIDR大小自定义模式时，可指定节点上运行的pod数量上限
注意：此字段可能返回 null，表示取不到有效值。
      */
    DesiredPodNumber: number;
    /**
      * base64 编码的用户脚本，在初始化节点之前执行，目前只对添加已有节点生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreStartUserScript: string;
}
/**
 * DescribeResourceUsage请求参数结构体
 */
export interface DescribeResourceUsageRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * 机型信息和其可支持的最大VPC-CNI模式Pod数量信息
 */
export interface PodLimitsInstance {
    /**
      * 机型所在可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone: string;
    /**
      * 机型所属机型族
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceFamily: string;
    /**
      * 实例机型名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceType: string;
    /**
      * 机型可支持的最大VPC-CNI模式Pod数量信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodLimits: PodLimitsByType;
}
/**
 * DescribePrometheusAgents请求参数结构体
 */
export interface DescribePrometheusAgentsRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 用于分页
      */
    Offset?: number;
    /**
      * 用于分页
      */
    Limit?: number;
}
/**
 * DescribeEnableVpcCniProgress返回参数结构体
 */
export interface DescribeEnableVpcCniProgressResponse {
    /**
      * 任务进度的描述：Running/Succeed/Failed
      */
    Status: string;
    /**
      * 当任务进度为Failed时，对任务状态的进一步描述，例如IPAMD组件安装失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMessage: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddClusterCIDR返回参数结构体
 */
export interface AddClusterCIDRResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 托管prometheus agent概览
 */
export interface PrometheusAgentOverview {
    /**
      * 集群类型
      */
    ClusterType: string;
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * agent状态
normal = 正常
abnormal = 异常
      */
    Status: string;
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * 额外labels
本集群的所有指标都会带上这几个label
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExternalLabels: Array<Label>;
}
/**
 * 集群中控制器的状态描述
 */
export interface ControllerStatus {
    /**
      * 控制器的名字
      */
    Name: string;
    /**
      * 控制器是否开启
      */
    Enabled: boolean;
}
/**
 * app所支持的chart
 */
export interface AppChart {
    /**
      * chart名称
      */
    Name: string;
    /**
      * chart的标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * chart的版本
      */
    LatestVersion: string;
}
/**
 * >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。
> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。
>
> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：
```
Filters.0.Name=zone
&Filters.0.Values.0=ap-guangzhou-1
&Filters.1.Name=instance-charge-type
&Filters.1.Values.0=PREPAID
&Filters.1.Values.1=POSTPAID_BY_HOUR
```
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
 * ModifyClusterNodePool请求参数结构体
 */
export interface ModifyClusterNodePoolRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 节点池ID
      */
    NodePoolId: string;
    /**
      * 名称
      */
    Name?: string;
    /**
      * 最大节点数
      */
    MaxNodesNum?: number;
    /**
      * 最小节点数
      */
    MinNodesNum?: number;
    /**
      * 标签
      */
    Labels?: Array<Label>;
    /**
      * 污点
      */
    Taints?: Array<Taint>;
    /**
      * 是否开启伸缩
      */
    EnableAutoscale?: boolean;
    /**
      * 操作系统名称
      */
    OsName?: string;
    /**
      * 镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
      */
    OsCustomizeType?: string;
    /**
      * 节点自定义参数
      */
    ExtraArgs?: InstanceExtraArgs;
    /**
      * 资源标签
      */
    Tags?: Array<Tag>;
    /**
      * 设置加入的节点是否参与调度，默认值为0，表示参与调度；非0表示不参与调度, 待节点初始化完成之后, 可执行kubectl uncordon nodename使node加入调度.
      */
    Unschedulable?: number;
}
/**
 * 镜像信息
 */
export interface ImageInstance {
    /**
      * 镜像别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias: string;
    /**
      * 操作系统名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    OsName: string;
    /**
      * 镜像ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageId: string;
    /**
      * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
注意：此字段可能返回 null，表示取不到有效值。
      */
    OsCustomizeType: string;
}
/**
 * 可升级节点信息
 */
export interface UpgradeAbleInstancesItem {
    /**
      * 节点Id
      */
    InstanceId: string;
    /**
      * 节点的当前版本
      */
    Version: string;
    /**
      * 当前版本的最新小版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    LatestVersion: string;
}
/**
 * DescribeImageCaches返回参数结构体
 */
export interface DescribeImageCachesResponse {
    /**
      * 镜像缓存总数
      */
    TotalCount: number;
    /**
      * 镜像缓存信息列表
      */
    ImageCaches: Array<ImageCache>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetClusterLevelPrice请求参数结构体
 */
export interface GetClusterLevelPriceRequest {
    /**
      * 集群规格，托管集群询价
      */
    ClusterLevel: string;
}
/**
 * CreateClusterEndpoint返回参数结构体
 */
export interface CreateClusterEndpointResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEKSClusters请求参数结构体
 */
export interface DescribeEKSClustersRequest {
    /**
      * 集群ID列表(为空时，
表示获取账号下所有集群)
      */
    ClusterIds?: Array<string>;
    /**
      * 偏移量,默认0
      */
    Offset?: number;
    /**
      * 最大输出条数，默认20
      */
    Limit?: number;
    /**
      * 过滤条件,当前只支持按照单个条件ClusterName进行过滤
      */
    Filters?: Array<Filter>;
}
/**
 * CreateClusterNodePool请求参数结构体
 */
export interface CreateClusterNodePoolRequest {
    /**
      * cluster id
      */
    ClusterId: string;
    /**
      * AutoScalingGroupPara AS组参数
      */
    AutoScalingGroupPara: string;
    /**
      * LaunchConfigurePara 运行参数
      */
    LaunchConfigurePara: string;
    /**
      * InstanceAdvancedSettings 示例参数
      */
    InstanceAdvancedSettings: InstanceAdvancedSettings;
    /**
      * 是否启用自动伸缩
      */
    EnableAutoscale: boolean;
    /**
      * 节点池名称
      */
    Name?: string;
    /**
      * Labels标签
      */
    Labels?: Array<Label>;
    /**
      * Taints互斥
      */
    Taints?: Array<Taint>;
    /**
      * 节点池os
      */
    NodePoolOs?: string;
    /**
      * 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值)
      */
    OsCustomizeType?: string;
    /**
      * 资源标签
      */
    Tags?: Array<Tag>;
}
/**
 * 集群高级配置
 */
export interface ClusterAdvancedSettings {
    /**
      * 是否启用IPVS
      */
    IPVS?: boolean;
    /**
      * 是否启用集群节点自动扩缩容(创建集群流程不支持开启此功能)
      */
    AsEnabled?: boolean;
    /**
      * 集群使用的runtime类型，包括"docker"和"containerd"两种类型，默认为"docker"
      */
    ContainerRuntime?: string;
    /**
      * 集群中节点NodeName类型（包括 hostname,lan-ip两种形式，默认为lan-ip。如果开启了hostname模式，创建节点时需要设置HostName参数，并且InstanceName需要和HostName一致）
      */
    NodeNameType?: string;
    /**
      * 集群自定义参数
      */
    ExtraArgs?: ClusterExtraArgs;
    /**
      * 集群网络类型（包括GR(全局路由)和VPC-CNI两种模式，默认为GR。
      */
    NetworkType?: string;
    /**
      * 集群VPC-CNI模式是否为非固定IP，默认: FALSE 固定IP。
      */
    IsNonStaticIpMode?: boolean;
    /**
      * 是否启用集群删除保护
      */
    DeletionProtection?: boolean;
    /**
      * 集群的网络代理模型，目前tke集群支持的网络代理模式有三种：iptables,ipvs,ipvs-bpf，此参数仅在使用ipvs-bpf模式时使用，三种网络模式的参数设置关系如下：
iptables模式：IPVS和KubeProxyMode都不设置
ipvs模式: 设置IPVS为true, KubeProxyMode不设置
ipvs-bpf模式: 设置KubeProxyMode为kube-proxy-bpf
使用ipvs-bpf的网络模式需要满足以下条件：
1. 集群版本必须为1.14及以上；
2. 系统镜像必须是: Tencent Linux 2.4；
      */
    KubeProxyMode?: string;
    /**
      * 是否开启审计开关
      */
    AuditEnabled?: boolean;
    /**
      * 审计日志上传到的logset日志集
      */
    AuditLogsetId?: string;
    /**
      * 审计日志上传到的topic
      */
    AuditLogTopicId?: string;
    /**
      * 区分共享网卡多IP模式和独立网卡模式，共享网卡多 IP 模式填写"tke-route-eni"，独立网卡模式填写"tke-direct-eni"，默认为共享网卡模式
      */
    VpcCniType?: string;
    /**
      * 运行时版本
      */
    RuntimeVersion?: string;
    /**
      * 是否开节点podCIDR大小的自定义模式
      */
    EnableCustomizedPodCIDR?: boolean;
    /**
      * 自定义模式下的基础pod数量
      */
    BasePodNumber?: number;
    /**
      * 启用 CiliumMode 的模式，空值表示不启用，“clusterIP” 表示启用 Cilium 支持 ClusterIP
      */
    CiliumMode?: string;
}
/**
 * AcquireClusterAdminRole返回参数结构体
 */
export interface AcquireClusterAdminRoleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * kubernetes Taint
 */
export interface Taint {
    /**
      * Key
      */
    Key?: string;
    /**
      * Value
      */
    Value?: string;
    /**
      * Effect
      */
    Effect?: string;
}
/**
 * RestartEKSContainerInstances返回参数结构体
 */
export interface RestartEKSContainerInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 健康检查探测参数
 */
export interface Probe {
    /**
      * Number of seconds after the container has started before liveness probes are initiated.
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitialDelaySeconds?: number;
    /**
      * Number of seconds after which the probe times out.
Defaults to 1 second. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeoutSeconds?: number;
    /**
      * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
      */
    PeriodSeconds?: number;
    /**
      * Minimum consecutive successes for the probe to be considered successful after having failed.Defaults to 1. Must be 1 for liveness. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccessThreshold?: number;
    /**
      * Minimum consecutive failures for the probe to be considered failed after having succeeded.Defaults to 3. Minimum value is 1.
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailureThreshold?: number;
}
/**
 * ModifyPrometheusTemplate返回参数结构体
 */
export interface ModifyPrometheusTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTkeAppChartList返回参数结构体
 */
export interface GetTkeAppChartListResponse {
    /**
      * 所支持的chart列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppCharts: Array<AppChart>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeletePrometheusTemplate返回参数结构体
 */
export interface DeletePrometheusTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePrometheusTemplateSync请求参数结构体
 */
export interface DescribePrometheusTemplateSyncRequest {
    /**
      * 模板ID
      */
    TemplateId: string;
}
/**
 * UpdateClusterVersion请求参数结构体
 */
export interface UpdateClusterVersionRequest {
    /**
      * 集群 Id
      */
    ClusterId: string;
    /**
      * 需要升级到的版本
      */
    DstVersion: string;
    /**
      * 集群自定义参数
      */
    ExtraArgs?: ClusterExtraArgs;
    /**
      * 可容忍的最大不可用pod数目
      */
    MaxNotReadyPercent?: number;
    /**
      * 是否跳过预检查阶段
      */
    SkipPreCheck?: boolean;
}
/**
 * ModifyClusterAuthenticationOptions请求参数结构体
 */
export interface ModifyClusterAuthenticationOptionsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * ServiceAccount认证配置
      */
    ServiceAccounts?: ServiceAccountAuthenticationOptions;
}
/**
 * DeleteClusterEndpointVip请求参数结构体
 */
export interface DeleteClusterEndpointVipRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * 健康探针
 */
export interface LivenessOrReadinessProbe {
    /**
      * 探针参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Probe: Probe;
    /**
      * HttpGet检测参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    HttpGet?: HttpGet;
    /**
      * 容器内检测命令参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Exec?: Exec;
    /**
      * TcpSocket检测的端口参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TcpSocket?: TcpSocket;
}
/**
 * DescribeClusterLevelChangeRecords返回参数结构体
 */
export interface DescribeClusterLevelChangeRecordsResponse {
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 集群规模
      */
    Items: Array<ClusterLevelChangeRecord>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckInstancesUpgradeAble返回参数结构体
 */
export interface CheckInstancesUpgradeAbleResponse {
    /**
      * 集群master当前小版本
      */
    ClusterVersion?: string;
    /**
      * 集群master对应的大版本目前最新小版本
      */
    LatestVersion?: string;
    /**
      * 可升级节点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpgradeAbleInstances?: Array<UpgradeAbleInstancesItem>;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群信息结构体
 */
export interface Cluster {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * 集群描述
      */
    ClusterDescription: string;
    /**
      * 集群版本（默认值为1.10.5）
      */
    ClusterVersion: string;
    /**
      * 集群系统。centos7.2x86_64 或者 ubuntu16.04.1 LTSx86_64，默认取值为ubuntu16.04.1 LTSx86_64
      */
    ClusterOs: string;
    /**
      * 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。
      */
    ClusterType: string;
    /**
      * 集群网络相关参数
      */
    ClusterNetworkSettings: ClusterNetworkSettings;
    /**
      * 集群当前node数量
      */
    ClusterNodeNum: number;
    /**
      * 集群所属的项目ID
      */
    ProjectId: number;
    /**
      * 标签描述列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSpecification: Array<TagSpecification>;
    /**
      * 集群状态 (Running 运行中  Creating 创建中 Idling 闲置中  Abnormal 异常  )
      */
    ClusterStatus: string;
    /**
      * 集群属性(包括集群不同属性的MAP，属性字段包括NodeNameType (lan-ip模式和hostname 模式，默认无lan-ip模式))
注意：此字段可能返回 null，表示取不到有效值。
      */
    Property: string;
    /**
      * 集群当前master数量
      */
    ClusterMaterNodeNum: number;
    /**
      * 集群使用镜像id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageId: string;
    /**
      * OsCustomizeType 系统定制类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    OsCustomizeType: string;
    /**
      * 集群运行环境docker或container
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerRuntime: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 删除保护开关
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeletionProtection: boolean;
    /**
      * 集群是否开启第三方节点支持
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnableExternalNode: boolean;
    /**
      * 集群等级，针对托管集群生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterLevel: string;
    /**
      * 自动变配集群等级，针对托管集群生效
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoUpgradeClusterLevel: boolean;
}
/**
 * DescribeClusterEndpointStatus返回参数结构体
 */
export interface DescribeClusterEndpointStatusResponse {
    /**
      * 查询集群访问端口状态（Created 开启成功，Creating 开启中，NotFound 未开启）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 开启访问入口失败信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMsg: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群状态信息
 */
export interface ClusterStatus {
    /**
      * 集群Id
      */
    ClusterId: string;
    /**
      * 集群状态
      */
    ClusterState: string;
    /**
      * 集群下机器实例的状态
      */
    ClusterInstanceState: string;
    /**
      * 集群是否开启监控
      */
    ClusterBMonitor: boolean;
    /**
      * 集群创建中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
      */
    ClusterInitNodeNum: number;
    /**
      * 集群运行中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
      */
    ClusterRunningNodeNum: number;
    /**
      * 集群异常的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
      */
    ClusterFailedNodeNum: number;
    /**
      * 集群已关机的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterClosedNodeNum: number;
    /**
      * 集群关机中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterClosingNodeNum: number;
    /**
      * 集群是否开启删除保护
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterDeletionProtection: boolean;
    /**
      * 集群是否可审计
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterAuditEnabled: boolean;
}
/**
 * UpgradeClusterInstances返回参数结构体
 */
export interface UpgradeClusterInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreatePrometheusDashboard请求参数结构体
 */
export interface CreatePrometheusDashboardRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 面板组名称
      */
    DashboardName: string;
    /**
      * 面板列表
每一项是一个grafana dashboard的json定义
      */
    Contents: Array<string>;
}
/**
 * DescribePrometheusAgents返回参数结构体
 */
export interface DescribePrometheusAgentsResponse {
    /**
      * 被关联集群信息
      */
    Agents?: Array<PrometheusAgentOverview>;
    /**
      * 被关联集群总量
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddExistedInstances返回参数结构体
 */
export interface AddExistedInstancesResponse {
    /**
      * 失败的节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedInstanceIds: Array<string>;
    /**
      * 成功的节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccInstanceIds: Array<string>;
    /**
      * 超时未返回出来节点的ID(可能失败，也可能成功)
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeoutInstanceIds: Array<string>;
    /**
      * 失败的节点的失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedReasons: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteClusterRouteTable返回参数结构体
 */
export interface DeleteClusterRouteTableResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateClusterInstances返回参数结构体
 */
export interface CreateClusterInstancesResponse {
    /**
      * 节点实例ID
      */
    InstanceIdSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisableClusterDeletionProtection返回参数结构体
 */
export interface DisableClusterDeletionProtectionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCluster请求参数结构体
 */
export interface DeleteClusterRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例）
      */
    InstanceDeleteMode: string;
    /**
      * 集群删除时资源的删除策略，目前支持CBS（默认保留CBS）
      */
    ResourceDeleteOptions?: Array<ResourceDeleteOption>;
}
/**
 * DescribePrometheusAgentInstances返回参数结构体
 */
export interface DescribePrometheusAgentInstancesResponse {
    /**
      * 关联该集群的实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Instances?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EKS Instance Container容器
 */
export interface Container {
    /**
      * 镜像
      */
    Image: string;
    /**
      * 容器名
      */
    Name: string;
    /**
      * 容器启动命令
      */
    Commands?: Array<string>;
    /**
      * 容器启动参数
      */
    Args?: Array<string>;
    /**
      * 容器内操作系统的环境变量
      */
    EnvironmentVars?: Array<EnvironmentVariable>;
    /**
      * CPU，制改容器最多可使用的核数，该值不可超过容器实例的总核数。单位：核。
      */
    Cpu?: number;
    /**
      * 内存，限制该容器最多可使用的内存值，该值不可超过容器实例的总内存值。单位：GiB
      */
    Memory?: number;
    /**
      * 数据卷挂载信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    VolumeMounts?: Array<VolumeMount>;
    /**
      * 当前状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    CurrentState?: ContainerState;
    /**
      * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartCount?: number;
    /**
      * 容器工作目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkingDir?: string;
    /**
      * 存活探针
注意：此字段可能返回 null，表示取不到有效值。
      */
    LivenessProbe?: LivenessOrReadinessProbe;
    /**
      * 就绪探针
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadinessProbe?: LivenessOrReadinessProbe;
    /**
      * Gpu限制
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuLimit?: number;
    /**
      * 容器的安全上下文
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecurityContext?: SecurityContext;
}
/**
 * CreateClusterEndpoint请求参数结构体
 */
export interface CreateClusterEndpointRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群端口所在的子网ID  (仅在开启非外网访问时需要填，必须为集群所在VPC内的子网)
      */
    SubnetId?: string;
    /**
      * 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE）
      */
    IsExtranet?: boolean;
}
/**
 * prometheus一个job的targets
 */
export interface PrometheusJobTargets {
    /**
      * 该Job的targets列表
      */
    Targets: Array<PrometheusTarget>;
    /**
      * job的名称
      */
    JobName: string;
    /**
      * targets总数
      */
    Total: number;
    /**
      * 健康的target总数
      */
    Up: number;
}
/**
 * DescribeEKSContainerInstanceRegions返回参数结构体
 */
export interface DescribeEKSContainerInstanceRegionsResponse {
    /**
      * EKS Container Instance支持的地域信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Regions: Array<EksCiRegionInfo>;
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyClusterAsGroupOptionAttribute返回参数结构体
 */
export interface ModifyClusterAsGroupOptionAttributeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterLevelAttribute返回参数结构体
 */
export interface DescribeClusterLevelAttributeResponse {
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 集群规模
      */
    Items: Array<ClusterLevelAttribute>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * cloudrun安全特性能力
 */
export interface Capabilities {
    /**
      * 启用安全能力项列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Add?: Array<string>;
    /**
      * 禁用安全能力向列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Drop?: Array<string>;
}
/**
 * AddExistedInstances请求参数结构体
 */
export interface AddExistedInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 实例列表，不支持竞价实例
      */
    InstanceIds: Array<string>;
    /**
      * 实例额外需要设置参数信息(默认值)
      */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;
    /**
      * 节点登录信息（目前仅支持使用Password或者单个KeyIds）
      */
    LoginSettings?: LoginSettings;
    /**
      * 重装系统时，可以指定修改实例的HostName(集群为HostName模式时，此参数必传，规则名称除不支持大写字符外与[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口HostName一致)
      */
    HostName?: string;
    /**
      * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。（目前仅支持设置单个sgId）
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 节点池选项
      */
    NodePool?: NodePoolOption;
    /**
      * 校验规则相关选项，可配置跳过某些校验规则。目前支持GlobalRouteCIDRCheck（跳过GlobalRouter的相关校验），VpcCniCIDRCheck（跳过VpcCni相关校验）
      */
    SkipValidateOptions?: Array<string>;
    /**
      * 参数InstanceAdvancedSettingsOverride数组用于定制化地配置各台instance，与InstanceIds顺序对应。当传入InstanceAdvancedSettingsOverrides数组时，将覆盖默认参数InstanceAdvancedSettings；当没有传入参数InstanceAdvancedSettingsOverrides时，InstanceAdvancedSettings参数对每台instance生效。

参数InstanceAdvancedSettingsOverride数组的长度应与InstanceIds数组一致；当长度大于InstanceIds数组长度时将报错；当长度小于InstanceIds数组时，没有对应配置的instace将使用默认配置。
      */
    InstanceAdvancedSettingsOverrides?: Array<InstanceAdvancedSettings>;
}
/**
 * DescribeTKEEdgeScript请求参数结构体
 */
export interface DescribeTKEEdgeScriptRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 网卡名
      */
    Interface: string;
    /**
      * 节点名字
      */
    NodeName?: string;
    /**
      * json格式的节点配置
      */
    Config?: string;
}
/**
 * 集群弹性伸缩配置
 */
export interface ClusterAsGroupOption {
    /**
      * 是否开启缩容
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsScaleDownEnabled?: boolean;
    /**
      * 多伸缩组情况下扩容选择算法(random 随机选择，most-pods 最多类型的Pod least-waste 最少的资源浪费，默认为random)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Expander?: string;
    /**
      * 最大并发缩容数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxEmptyBulkDelete?: number;
    /**
      * 集群扩容后多少分钟开始判断缩容（默认为10分钟）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScaleDownDelay?: number;
    /**
      * 节点连续空闲多少分钟后被缩容（默认为 10分钟）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScaleDownUnneededTime?: number;
    /**
      * 节点资源使用量低于多少(百分比)时认为空闲(默认: 50(百分比))
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScaleDownUtilizationThreshold?: number;
    /**
      * 含有本地存储Pod的节点是否不缩容(默认： FALSE)
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkipNodesWithLocalStorage?: boolean;
    /**
      * 含有kube-system namespace下非DaemonSet管理的Pod的节点是否不缩容 (默认： FALSE)
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkipNodesWithSystemPods?: boolean;
    /**
      * 计算资源使用量时是否默认忽略DaemonSet的实例(默认值: False，不忽略)
注意：此字段可能返回 null，表示取不到有效值。
      */
    IgnoreDaemonSetsUtilization?: boolean;
    /**
      * CA做健康性判断的个数，默认3，即超过OkTotalUnreadyCount个数后，CA会进行健康性判断。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OkTotalUnreadyCount: number;
    /**
      * 未就绪节点的最大百分比，此后CA会停止操作
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxTotalUnreadyPercentage: number;
    /**
      * 表示未准备就绪的节点在有资格进行缩减之前应该停留多长时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScaleDownUnreadyTime: number;
    /**
      * CA删除未在Kubernetes中注册的节点之前等待的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnregisteredNodeRemovalTime: number;
}
/**
 * AddVpcCniSubnets返回参数结构体
 */
export interface AddVpcCniSubnetsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyNodePoolDesiredCapacityAboutAsg请求参数结构体
 */
export interface ModifyNodePoolDesiredCapacityAboutAsgRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 节点池id
      */
    NodePoolId: string;
    /**
      * 节点池所关联的伸缩组的期望实例数
      */
    DesiredCapacity: number;
}
/**
 * DescribeClusterNodePools请求参数结构体
 */
export interface DescribeClusterNodePoolsRequest {
    /**
      * ClusterId（集群id）
      */
    ClusterId: string;
    /**
      * ·  NodePoolsName
    按照【节点池名】进行过滤。
    类型：String
    必选：否

·  NodePoolsId
    按照【节点池id】进行过滤。
    类型：String
    必选：否

·  tags
    按照【标签键值对】进行过滤。
    类型：String
    必选：否

·  tag:tag-key
    按照【标签键值对】进行过滤。
    类型：String
    必选：否
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeClusterRouteTables请求参数结构体
 */
export declare type DescribeClusterRouteTablesRequest = null;
/**
 * ModifyClusterAsGroupOptionAttribute请求参数结构体
 */
export interface ModifyClusterAsGroupOptionAttributeRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群弹性伸缩属性
      */
    ClusterAsGroupOption: ClusterAsGroupOption;
}
/**
 * 不同角色的已存在节点配置参数
 */
export interface ExistedInstancesForNode {
    /**
      * 节点角色，取值:MASTER_ETCD, WORKER。MASTER_ETCD只有在创建 INDEPENDENT_CLUSTER 独立集群时需要指定。MASTER_ETCD节点数量为3～7，建议为奇数。MASTER_ETCD最小配置为4C8G。
      */
    NodeRole: string;
    /**
      * 已存在实例的重装参数
      */
    ExistedInstancesPara: ExistedInstancesPara;
    /**
      * 节点高级设置，会覆盖集群级别设置的InstanceAdvancedSettings（当前只对节点自定义参数ExtraArgs生效）
      */
    InstanceAdvancedSettingsOverride?: InstanceAdvancedSettings;
    /**
      * 自定义模式集群，可指定每个节点的pod数量
      */
    DesiredPodNumbers?: Array<number>;
}
/**
 * 节点升级过程中集群当前状态
 */
export interface InstanceUpgradeClusterStatus {
    /**
      * pod总数
      */
    PodTotal: number;
    /**
      * NotReady pod总数
      */
    NotReadyPod: number;
}
/**
 * 不同角色的节点配置参数
 */
export interface RunInstancesForNode {
    /**
      * 节点角色，取值:MASTER_ETCD, WORKER。MASTER_ETCD只有在创建 INDEPENDENT_CLUSTER 独立集群时需要指定。MASTER_ETCD节点数量为3～7，建议为奇数。MASTER_ETCD节点最小配置为4C8G。
      */
    NodeRole: string;
    /**
      * CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口，传入公共参数外的其他参数即可，其中ImageId会替换为TKE集群OS对应的镜像。
      */
    RunInstancesPara: Array<string>;
    /**
      * 节点高级设置，该参数会覆盖集群级别设置的InstanceAdvancedSettings，和上边的RunInstancesPara按照顺序一一对应（当前只对节点自定义参数ExtraArgs生效）。
      */
    InstanceAdvancedSettingsOverrides?: Array<InstanceAdvancedSettings>;
}
/**
 * DescribeClusterRoutes请求参数结构体
 */
export interface DescribeClusterRoutesRequest {
    /**
      * 路由表名称。
      */
    RouteTableName: string;
    /**
      * 过滤条件,当前只支持按照单个条件GatewayIP进行过滤（可选）
      */
    Filters?: Array<Filter>;
}
/**
 * DeleteClusterRoute请求参数结构体
 */
export interface DeleteClusterRouteRequest {
    /**
      * 路由表名称。
      */
    RouteTableName: string;
    /**
      * 下一跳地址。
      */
    GatewayIp: string;
    /**
      * 目的端CIDR。
      */
    DestinationCidrBlock: string;
}
/**
 * DescribePrometheusOverviews返回参数结构体
 */
export interface DescribePrometheusOverviewsResponse {
    /**
      * 实例列表
      */
    Instances?: Array<PrometheusInstanceOverview>;
    /**
      * 实例总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 托管集群等级属性
 */
export interface ClusterLevelAttribute {
    /**
      * 集群等级
      */
    Name: string;
    /**
      * 等级名称
      */
    Alias: string;
    /**
      * 节点数量
      */
    NodeCount: number;
    /**
      * Pod数量
      */
    PodCount: number;
    /**
      * Configmap数量
      */
    ConfigMapCount: number;
    /**
      * CRD数量
      */
    CRDCount: number;
    /**
      * 是否启用
      */
    Enable: boolean;
    /**
      * 其他资源数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    OtherCount: number;
}
/**
 * DescribePrometheusTargets请求参数结构体
 */
export interface DescribePrometheusTargetsRequest {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 集群类型
      */
    ClusterType: string;
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 过滤条件，当前支持
Name=state
Value=up, down, unknown
      */
    Filters?: Array<Filter>;
}
/**
 * DescribePrometheusTargets返回参数结构体
 */
export interface DescribePrometheusTargetsResponse {
    /**
      * 所有Job的targets信息
      */
    Jobs?: Array<PrometheusJobTargets>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent
 */
export interface EnhancedService {
    /**
      * 开启云安全服务。若不指定该参数，则默认开启云安全服务。
      */
    SecurityService?: RunSecurityServiceEnabled;
    /**
      * 开启云监控服务。若不指定该参数，则默认开启云监控服务。
      */
    MonitorService?: RunMonitorServiceEnabled;
    /**
      * 开启云自动化助手服务。若不指定该参数，则默认不开启云自动化助手服务。
      */
    AutomationService?: RunAutomationServiceEnabled;
}
/**
 * DescribeClusterNodePoolDetail请求参数结构体
 */
export interface DescribeClusterNodePoolDetailRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 节点池id
      */
    NodePoolId: string;
}
/**
 * SetNodePoolNodeProtection请求参数结构体
 */
export interface SetNodePoolNodeProtectionRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 节点池id
      */
    NodePoolId: string;
    /**
      * 节点id
      */
    InstanceIds: Array<string>;
    /**
      * 节点是否需要移出保护
      */
    ProtectedFromScaleIn: boolean;
}
/**
 * DeletePrometheusTemplateSync返回参数结构体
 */
export interface DeletePrometheusTemplateSyncResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 路由表冲突对象
 */
export interface RouteTableConflict {
    /**
      * 路由表类型。
      */
    RouteTableType: string;
    /**
      * 路由表CIDR。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RouteTableCidrBlock: string;
    /**
      * 路由表名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RouteTableName: string;
    /**
      * 路由表ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RouteTableId: string;
}
/**
 * CreateClusterRouteTable请求参数结构体
 */
export interface CreateClusterRouteTableRequest {
    /**
      * 路由表名称
      */
    RouteTableName: string;
    /**
      * 路由表CIDR
      */
    RouteTableCidrBlock: string;
    /**
      * 路由表绑定的VPC
      */
    VpcId: string;
    /**
      * 是否忽略CIDR冲突
      */
    IgnoreClusterCidrConflict?: number;
}
/**
 * 某个节点升级前检查结果
 */
export interface InstanceUpgradePreCheckResult {
    /**
      * 检查是否通过
      */
    CheckPass: boolean;
    /**
      * 检查项数组
      */
    Items: Array<InstanceUpgradePreCheckResultItem>;
    /**
      * 本节点独立pod列表
      */
    SinglePods: Array<string>;
}
/**
 * ScaleInClusterMaster返回参数结构体
 */
export interface ScaleInClusterMasterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterAsGroups请求参数结构体
 */
export interface DescribeClusterAsGroupsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 伸缩组ID列表，如果为空，表示拉取集群关联的所有伸缩组。
      */
    AutoScalingGroupIds?: Array<string>;
    /**
      * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
      */
    Limit?: number;
}
/**
 * DescribeImages请求参数结构体
 */
export declare type DescribeImagesRequest = null;
/**
 * 任务步骤信息
 */
export interface TaskStepInfo {
    /**
      * 步骤名称
      */
    Step: string;
    /**
      * 生命周期
pending : 步骤未开始
running: 步骤执行中
success: 步骤成功完成
failed: 步骤失败
      */
    LifeState: string;
    /**
      * 步骤开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartAt: string;
    /**
      * 步骤结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndAt: string;
    /**
      * 若步骤生命周期为failed,则此字段显示错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedMsg: string;
}
/**
 * GetMostSuitableImageCache返回参数结构体
 */
export interface GetMostSuitableImageCacheResponse {
    /**
      * 是否有匹配的镜像缓存
      */
    Found: boolean;
    /**
      * 匹配的镜像缓存
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageCache: ImageCache;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAvailableClusterVersion返回参数结构体
 */
export interface DescribeAvailableClusterVersionResponse {
    /**
      * 可升级的集群版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Versions?: Array<string>;
    /**
      * 集群信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Clusters?: Array<ClusterVersion>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云主机实例。
 */
export interface TagSpecification {
    /**
      * 标签绑定的资源类型，当前支持类型："cluster"
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType?: string;
    /**
      * 标签对列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags?: Array<Tag>;
}
/**
 * DescribeClusterLevelChangeRecords请求参数结构体
 */
export interface DescribeClusterLevelChangeRecordsRequest {
    /**
      * 集群ID
      */
    ClusterID: string;
    /**
      * 开始时间
      */
    StartAt?: string;
    /**
      * 结束时间
      */
    EndAt?: string;
    /**
      * 偏移量,默认0
      */
    Offset?: number;
    /**
      * 最大输出条数，默认20
      */
    Limit?: number;
}
/**
 * DescribeClusterRouteTables返回参数结构体
 */
export interface DescribeClusterRouteTablesResponse {
    /**
      * 符合条件的实例数量。
      */
    TotalCount?: number;
    /**
      * 集群路由表对象。
      */
    RouteTableSet?: Array<RouteTableInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddVpcCniSubnets请求参数结构体
 */
export interface AddVpcCniSubnetsRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 为集群容器网络增加的子网列表
      */
    SubnetIds: Array<string>;
    /**
      * 集群所属的VPC的ID
      */
    VpcId: string;
}
/**
 * 节点升级检查项结果
 */
export interface InstanceUpgradePreCheckResultItem {
    /**
      * 工作负载的命名空间
      */
    Namespace: string;
    /**
      * 工作负载类型
      */
    WorkLoadKind: string;
    /**
      * 工作负载名称
      */
    WorkLoadName: string;
    /**
      * 驱逐节点前工作负载running的pod数目
      */
    Before: number;
    /**
      * 驱逐节点后工作负载running的pod数目
      */
    After: number;
    /**
      * 工作负载在本节点上的pod列表
      */
    Pods: Array<string>;
}
/**
 * DescribePrometheusAlertHistory返回参数结构体
 */
export interface DescribePrometheusAlertHistoryResponse {
    /**
      * 告警历史
      */
    Items: Array<PrometheusAlertHistoryItem>;
    /**
      * 总数
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeClusterCommonNames返回参数结构体
 */
export interface DescribeClusterCommonNamesResponse {
    /**
      * 子账户Uin与其客户端证书的CN字段映射
      */
    CommonNames: Array<CommonName>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 已存在实例的重装参数
 */
export interface ExistedInstancesPara {
    /**
      * 集群ID
      */
    InstanceIds: Array<string>;
    /**
      * 实例额外需要设置参数信息
      */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;
    /**
      * 节点登录信息（目前仅支持使用Password或者单个KeyIds）
      */
    LoginSettings?: LoginSettings;
    /**
      * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 重装系统时，可以指定修改实例的HostName(集群为HostName模式时，此参数必传，规则名称除不支持大写字符外与[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口HostName一致)
      */
    HostName?: string;
}
/**
 * 账户UIN与客户端证书CommonName的映射
 */
export interface CommonName {
    /**
      * 子账户UIN
      */
    SubaccountUin: string;
    /**
      * 子账户客户端证书中的CommonName字段
      */
    CN: string;
}
/**
 * DescribeClusterAsGroupOption返回参数结构体
 */
export interface DescribeClusterAsGroupOptionResponse {
    /**
      * 集群弹性伸缩属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterAsGroupOption?: ClusterAsGroupOption;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 集群伸缩组属性
 */
export interface ClusterAsGroupAttribute {
    /**
      * 伸缩组ID
      */
    AutoScalingGroupId?: string;
    /**
      * 是否开启
      */
    AutoScalingGroupEnabled?: boolean;
    /**
      * 伸缩组最大最小实例数
      */
    AutoScalingGroupRange?: AutoScalingGroupRange;
}
/**
 * DeleteClusterNodePool返回参数结构体
 */
export interface DeleteClusterNodePoolResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述了 “云自动化助手” 服务相关的信息
 */
export interface RunAutomationServiceEnabled {
    /**
      * 是否开启云自动化助手。取值范围：<br><li>TRUE：表示开启云自动化助手服务<br><li>FALSE：表示不开启云自动化助手服务<br><br>默认取值：FALSE。
      */
    Enabled?: boolean;
}
/**
 * DeleteImageCaches请求参数结构体
 */
export interface DeleteImageCachesRequest {
    /**
      * 镜像缓存Id数组
      */
    ImageCacheIds: Array<string>;
}
/**
 * 描述了 “云监控” 服务相关的信息
 */
export interface RunMonitorServiceEnabled {
    /**
      * 是否开启[云监控](/document/product/248)服务。取值范围：<br><li>TRUE：表示开启云监控服务<br><li>FALSE：表示不开启云监控服务<br><br>默认取值：TRUE。
      */
    Enabled?: boolean;
}
/**
 * UpdateClusterVersion返回参数结构体
 */
export interface UpdateClusterVersionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEKSContainerInstances请求参数结构体
 */
export interface CreateEKSContainerInstancesRequest {
    /**
      * 容器组
      */
    Containers: Array<Container>;
    /**
      * EKS Container Instance容器实例名称
      */
    EksCiName: string;
    /**
      * 指定新创建实例所属于的安全组Id
      */
    SecurityGroupIds: Array<string>;
    /**
      * 实例所属子网Id
      */
    SubnetId: string;
    /**
      * 实例所属VPC的Id
      */
    VpcId: string;
    /**
      * 内存，单位：GiB。可参考[资源规格](https://cloud.tencent.com/document/product/457/39808)文档
      */
    Memory: number;
    /**
      * CPU，单位：核。可参考[资源规格](https://cloud.tencent.com/document/product/457/39808)文档
      */
    Cpu: number;
    /**
      * 实例重启策略： Always(总是重启)、Never(从不重启)、OnFailure(失败时重启)，默认：Always。
      */
    RestartPolicy?: string;
    /**
      * 镜像仓库凭证数组
      */
    ImageRegistryCredentials?: Array<ImageRegistryCredential>;
    /**
      * 数据卷，包含NfsVolume数组和CbsVolume数组
      */
    EksCiVolume?: EksCiVolume;
    /**
      * 实例副本数，默认为1
      */
    Replicas?: number;
    /**
      * Init 容器
      */
    InitContainers?: Array<Container>;
    /**
      * 自定义DNS配置
      */
    DnsConfig?: DNSConfig;
    /**
      * 用来绑定容器实例的已有EIP的列表。如传值，需要保证数值和Replicas相等。
另外此参数和AutoCreateEipAttribute互斥。
      */
    ExistedEipIds?: Array<string>;
    /**
      * 自动创建EIP的可选参数。若传此参数，则会自动创建EIP。
另外此参数和ExistedEipIds互斥
      */
    AutoCreateEipAttribute?: EipAttribute;
    /**
      * 是否为容器实例自动创建EIP，默认为false。若传true，则此参数和ExistedEipIds互斥
      */
    AutoCreateEip?: boolean;
    /**
      * Pod 所需的 CPU 资源型号，如果不填写则默认不强制指定 CPU 类型。目前支持型号如下：
intel
amd
- 支持优先级顺序写法，如 “amd,intel” 表示优先创建 amd 资源 Pod，如果所选地域可用区 amd 资源不足，则会创建 intel 资源 Pod。
      */
    CpuType?: string;
    /**
      * 容器实例所需的 GPU 资源型号，目前支持型号如下：
1/4\*V100
1/2\*V100
V100
1/4\*T4
1/2\*T4
T4
      */
    GpuType?: string;
    /**
      * Pod 所需的 GPU 数量，如填写，请确保为支持的规格。默认单位为卡，无需再次注明。
      */
    GpuCount?: number;
    /**
      * 为容器实例关联 CAM 角色，value 填写 CAM 角色名称，容器实例可获取该 CAM 角色包含的权限策略，方便 容器实例 内的程序进行如购买资源、读写存储等云资源操作。
      */
    CamRoleName?: string;
}
/**
 * DeleteClusterEndpoint请求参数结构体
 */
export interface DeleteClusterEndpointRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE）
      */
    IsExtranet?: boolean;
}
/**
 * CreateClusterNodePool返回参数结构体
 */
export interface CreateClusterNodePoolResponse {
    /**
      * 节点池id
      */
    NodePoolId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 手动加入的节点
 */
export interface ManuallyAdded {
    /**
      * 加入中的节点数量
      */
    Joining: number;
    /**
      * 初始化中的节点数量
      */
    Initializing: number;
    /**
      * 正常的节点数量
      */
    Normal: number;
    /**
      * 节点总数
      */
    Total: number;
}
/**
 * 加入存量节点时的节点池选项
 */
export interface NodePoolOption {
    /**
      * 是否加入节点池
      */
    AddToNodePool?: boolean;
    /**
      * 节点池id
      */
    NodePoolId?: string;
    /**
      * 是否继承节点池相关配置
      */
    InheritConfigurationFromNodePool?: boolean;
}
/**
 * CreateImageCache请求参数结构体
 */
export interface CreateImageCacheRequest {
    /**
      * 用于制作镜像缓存的容器镜像列表
      */
    Images: Array<string>;
    /**
      * 实例所属子网Id
      */
    SubnetId: string;
    /**
      * 实例所属VPC Id
      */
    VpcId: string;
    /**
      * 镜像缓存名称
      */
    ImageCacheName?: string;
    /**
      * 安全组Id
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 镜像仓库凭证数组
      */
    ImageRegistryCredentials?: Array<ImageRegistryCredential>;
    /**
      * 用来绑定容器实例的已有EIP
      */
    ExistedEipId?: string;
    /**
      * 是否为容器实例自动创建EIP，默认为false。若传true，则此参数和ExistedEipIds互斥
      */
    AutoCreateEip?: boolean;
    /**
      * 自动创建EIP的可选参数。若传此参数，则会自动创建EIP。
另外此参数和ExistedEipIds互斥
      */
    AutoCreateEipAttribute?: EipAttribute;
    /**
      * 镜像缓存的大小。默认为20 GiB。取值范围参考[云硬盘类型](https://cloud.tencent.com/document/product/362/2353)中的高性能云盘类型的大小限制。
      */
    ImageCacheSize?: number;
    /**
      * 镜像缓存保留时间天数，过期将会自动清理，默认为0，永不过期。
      */
    RetentionDays?: number;
}
/**
 * ModifyClusterAsGroupAttribute请求参数结构体
 */
export interface ModifyClusterAsGroupAttributeRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 集群关联的伸缩组属性
      */
    ClusterAsGroupAttribute?: ClusterAsGroupAttribute;
}
/**
 * 托管prometheus中grafana的信息
 */
export interface PrometheusGrafanaInfo {
    /**
      * 是否启用
      */
    Enabled: boolean;
    /**
      * 域名，只有开启外网访问才有效果
      */
    Domain: string;
    /**
      * 内网地址，或者外网地址
      */
    Address: string;
    /**
      * 是否开启了外网访问
close = 未开启外网访问
opening = 正在开启外网访问
open  = 已开启外网访问
      */
    Internet: string;
    /**
      * grafana管理员用户名
      */
    AdminUser: string;
}
/**
 * 用以帮助用户自动创建EIP的配置
 */
export interface EipAttribute {
    /**
      * 容器实例删除后，EIP是否释放。
Never表示不释放，其他任意值（包括空字符串）表示释放。
      */
    DeletePolicy: string;
    /**
      * EIP线路类型。默认值：BGP。
已开通静态单线IP白名单的用户，可选值：
CMCC：中国移动
CTCC：中国电信
CUCC：中国联通
注意：仅部分地域支持静态单线IP。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InternetServiceProvider?: string;
    /**
      * EIP出带宽上限，单位：Mbps。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InternetMaxBandwidthOut?: number;
}
/**
 * CVM实例数据盘挂载配置
 */
export interface InstanceDataDiskMountSetting {
    /**
      * CVM实例类型
      */
    InstanceType: string;
    /**
      * 数据盘挂载信息
      */
    DataDisks: Array<DataDisk>;
    /**
      * CVM实例所属可用区
      */
    Zone: string;
}
/**
 * RemoveNodeFromNodePool请求参数结构体
 */
export interface RemoveNodeFromNodePoolRequest {
    /**
      * 集群id
      */
    ClusterId: string;
    /**
      * 节点池id
      */
    NodePoolId: string;
    /**
      * 节点id列表，一次最多支持100台
      */
    InstanceIds: Array<string>;
}
/**
 * 托管prometheus实例概览
 */
export interface PrometheusInstanceOverview {
    /**
      * 实例id
      */
    InstanceId: string;
    /**
      * 实例名称
      */
    Name: string;
    /**
      * 实例vpcId
      */
    VpcId: string;
    /**
      * 实例子网Id
      */
    SubnetId: string;
    /**
      * 实例当前的状态
prepare_env = 初始化环境
install_suit = 安装组件
running = 运行中
      */
    Status: string;
    /**
      * COS桶存储
      */
    COSBucket: string;
    /**
      * grafana默认地址，如果开启外网访问得为域名，否则为内网地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    GrafanaURL: string;
    /**
      * 关联集群总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    BoundTotal: number;
    /**
      * 运行正常的集群数
注意：此字段可能返回 null，表示取不到有效值。
      */
    BoundNormal: number;
}
/**
 * 节点统计列表
 */
export interface NodeCountSummary {
    /**
      * 手动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
      */
    ManuallyAdded: ManuallyAdded;
    /**
      * 自动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoscalingAdded: AutoscalingAdded;
}
/**
 * DescribeClusterAsGroups返回参数结构体
 */
export interface DescribeClusterAsGroupsResponse {
    /**
      * 集群关联的伸缩组总数
      */
    TotalCount: number;
    /**
      * 集群关联的伸缩组列表
      */
    ClusterAsGroupSet: Array<ClusterAsGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEKSContainerInstances请求参数结构体
 */
export interface DescribeEKSContainerInstancesRequest {
    /**
      * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100
      */
    Limit?: number;
    /**
      * 偏移量,默认0
      */
    Offset?: number;
    /**
      * 过滤条件，可条件：
(1)实例名称
KeyName: eks-ci-name
类型：String

(2)实例状态
KeyName: status
类型：String
可选值："Pending", "Running", "Succeeded", "Failed"

(3)内网ip
KeyName: private-ip
类型：String

(4)EIP地址
KeyName: eip-address
类型：String

(5)VpcId
KeyName: vpc-id
类型：String
      */
    Filters?: Array<Filter>;
    /**
      * 容器实例 ID 数组
      */
    EksCiIds?: Array<string>;
}
/**
 * DescribeClusterNodePoolDetail返回参数结构体
 */
export interface DescribeClusterNodePoolDetailResponse {
    /**
      * 节点池详情
      */
    NodePool?: NodePool;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ForwardApplicationRequestV3请求参数结构体
 */
export interface ForwardApplicationRequestV3Request {
    /**
      * 请求集群addon的访问
      */
    Method: string;
    /**
      * 请求集群addon的路径
      */
    Path: string;
    /**
      * 请求集群addon后允许接收的数据格式
      */
    Accept?: string;
    /**
      * 请求集群addon的数据格式
      */
    ContentType?: string;
    /**
      * 请求集群addon的数据
      */
    RequestBody?: string;
    /**
      * 集群名称
      */
    ClusterName?: string;
    /**
      * 是否编码请求内容
      */
    EncodedBody?: string;
}
/**
 * DescribeClusterControllers请求参数结构体
 */
export interface DescribeClusterControllersRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
}
/**
 * DescribeEKSContainerInstanceEvent请求参数结构体
 */
export interface DescribeEKSContainerInstanceEventRequest {
    /**
      * 容器实例id
      */
    EksCiId: string;
    /**
      * 最大事件数量。默认为50，最大取值100。
      */
    Limit?: number;
}
/**
 * ScaleOutClusterMaster返回参数结构体
 */
export interface ScaleOutClusterMasterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImageCaches请求参数结构体
 */
export interface DescribeImageCachesRequest {
    /**
      * 镜像缓存Id数组
      */
    ImageCacheIds?: Array<string>;
    /**
      * 镜像缓存名称数组
      */
    ImageCacheNames?: Array<string>;
    /**
      * 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过50
      */
    Limit?: number;
    /**
      * 偏移量,默认0
      */
    Offset?: number;
    /**
      * 过滤条件，可选条件：
(1)实例名称
KeyName: image-cache-name
类型：String
      */
    Filters?: Array<Filter>;
}
