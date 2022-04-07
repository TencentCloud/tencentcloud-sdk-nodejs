/**
 * HPA 配置
 */
export interface HorizontalPodAutoscalerSpec {
    /**
      * 最小副本数
      */
    MinReplicas: number;
    /**
      * 最大副本数
      */
    MaxReplicas: number;
    /**
      * 用于计算副本数的指标
      */
    Metrics: Array<MetricSpec>;
}
/**
 * Service信息
 */
export interface Service {
    /**
      * ClusterIP/NodePort/LoadBalancer
      */
    Type?: string;
    /**
      * 是否开启LB直通Pod
      */
    CLBDirectAccess?: boolean;
    /**
      * 服务是否希望将外部流量路由到节点本地或集群范围的端点。 有两个可用选项：Cluster（默认）和 Local。Cluster 隐藏了客户端源 IP，可能导致第二跳到另一个节点；Local 保留客户端源 IP 并避免 LoadBalancer 和 NodePort 类型服务的第二跳。
      */
    ExternalTrafficPolicy?: string;
}
/**
 * 网格配置项
 */
export interface MeshConfig {
    /**
      * Istio配置
      */
    Istio?: IstioConfig;
    /**
      * AccessLog配置
      */
    AccessLog?: AccessLogConfig;
    /**
      * Prometheus配置
      */
    Prometheus?: PrometheusConfig;
    /**
      * 自动注入配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Inject?: InjectConfig;
    /**
      * 调用跟踪配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tracing?: TracingConfig;
    /**
      * Sidecar自定义资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    SidecarResources?: ResourceRequirements;
}
/**
 * 负载均衡状态信息
 */
export interface LoadBalancerStatus {
    /**
      * 负载均衡实例 ID
      */
    LoadBalancerId: string;
    /**
      * 负载均衡实例名字
      */
    LoadBalancerName: string;
    /**
      * 负载均衡实例 VIP
      */
    LoadBalancerVip: string;
}
/**
 * DescribeMesh返回参数结构体
 */
export interface DescribeMeshResponse {
    /**
      * Mesh详细信息
      */
    Mesh: Mesh;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述某一网格在特定命名空间下的自动注入状态
 */
export interface AutoInjectionNamespaceState {
    /**
      * 命名空间名称
      */
    Namespace: string;
    /**
      * 注入状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    State?: string;
}
/**
 * IngressGateway状态
 */
export interface IngressGatewayStatus {
    /**
      * 负载均衡实例状态
      */
    LoadBalancer: LoadBalancerStatus;
}
/**
 * ResourceMetricSource 定义了如何根据已知类型的资源指标进行扩缩容
 */
export interface ResourceMetricSource {
    /**
      * 资源名称 cpu/memory
      */
    Name: string;
    /**
      * 目标平均利用率
      */
    TargetAverageUtilization: number;
    /**
      * 目标平均值
      */
    TargetAverageValue: string;
}
/**
 * DescribeMeshList请求参数结构体
 */
export interface DescribeMeshListRequest {
    /**
      * 过滤条件
      */
    Filters?: Array<Filter>;
    /**
      * 分页限制
      */
    Limit?: number;
    /**
      * 分页偏移
      */
    Offset?: number;
}
/**
 * 集群配置
 */
export interface ClusterConfig {
    /**
      * 自动注入SideCar的NameSpace
      */
    AutoInjectionNamespaceList: Array<string>;
    /**
      * Ingress配置列表
      */
    IngressGatewayList?: Array<IngressGateway>;
    /**
      * Egress配置列表
      */
    EgressGatewayList?: Array<EgressGateway>;
    /**
      * Istiod配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Istiod?: IstiodConfig;
    /**
      * 部署配置
      */
    DeployConfig?: DeployConfig;
    /**
      * 自动注入命名空间状态列表
      */
    AutoInjectionNamespaceStateList?: Array<AutoInjectionNamespaceState>;
}
/**
 * MetricSpec 描述如何通过指定指标进行自动扩缩容
 */
export interface MetricSpec {
    /**
      * 指标来源类型，支持 Pods/Resource
      */
    Type: string;
    /**
      * 使用自定义指标扩进行自动扩缩容
      */
    Pods?: PodsMetricSource;
    /**
      * 使用资源指标扩进行自动扩缩容
      */
    Resource?: ResourceMetricSource;
}
/**
 * 工作负载配置
 */
export interface WorkloadConfig {
    /**
      * 工作副本数
      */
    Replicas?: number;
    /**
      * 资源配置
      */
    Resources?: ResourceRequirements;
    /**
      * HPA策略
      */
    HorizontalPodAutoscaler?: HorizontalPodAutoscalerSpec;
    /**
      * 部署到指定节点
      */
    SelectedNodeList?: Array<string>;
}
/**
 * Egress配置
 */
export interface EgressGateway {
    /**
      * Egress名称
      */
    Name: string;
    /**
      * 所在的Namespace
      */
    Namespace: string;
    /**
      * 工作负载配置
      */
    Workload?: WorkloadConfig;
}
/**
 * Mesh信息
 */
export interface Mesh {
    /**
      * Mesh实例Id
      */
    MeshId: string;
    /**
      * Mesh名称
      */
    DisplayName: string;
    /**
      * Mesh类型，取值范围：
- STANDALONE：独立网格
- HOSTED：托管网格
      */
    Type: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 版本
      */
    Version: string;
    /**
      * Mesh状态，取值范围：
- PENDING：等待中
- CREATING：创建中
- RUNNING：运行中
- ABNORMAL：异常
- UPGRADING：升级中
- CANARY_UPGRADED：升级灰度完成
- ROLLBACKING：升级回滚
- DELETING：删除中
- CREATE_FAILED：安装失败
- DELETE_FAILED：删除失败
- UPGRADE_FAILED：升级失败
- ROLLBACK_FAILED：回滚失败
      */
    State: string;
    /**
      * 创建时间
      */
    CreatedTime: string;
    /**
      * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedTime: string;
    /**
      * 集群列表
      */
    ClusterList: Array<Cluster>;
    /**
      * Mesh配置
      */
    Config: MeshConfig;
    /**
      * Mesh详细状态
      */
    Status: MeshStatus;
}
/**
 * Grafana信息
 */
export interface GrafanaInfo {
    /**
      * 是否开启
      */
    Enabled: boolean;
    /**
      * 内网地址
      */
    InternalURL: string;
    /**
      * 公网地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicURL: string;
    /**
      * 公网失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicFailedReason: string;
    /**
      * 公网失败详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    PublicFailedMessage: string;
}
/**
 * Mesh当前状态
 */
export interface MeshStatus {
    /**
      * 服务数量
      */
    ServiceCount: number;
    /**
      * 灰度升级的版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    CanaryVersion: string;
    /**
      * 已废弃
注意：此字段可能返回 null，表示取不到有效值。
      */
    Prometheus: Array<PrometheusStatus>;
    /**
      * 状态附带信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StateMessage: string;
    /**
      * 正在执行的异步操作
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActiveOperationList: Array<ActiveOperation>;
    /**
      * 获取TPS信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TPS: PrometheusStatus;
}
/**
 * Istiod配置
 */
export interface IstiodConfig {
    /**
      * 工作负载配置
      */
    Workload?: WorkloadConfig;
}
/**
 * 自动注入配置
 */
export interface InjectConfig {
    /**
      * 不需要进行代理的 ip 地址范围
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExcludeIPRanges?: Array<string>;
    /**
      * 是否等待sidecar启动
注意：此字段可能返回 null，表示取不到有效值。
      */
    HoldApplicationUntilProxyStarts?: boolean;
    /**
      * 是否允许sidecar等待
注意：此字段可能返回 null，表示取不到有效值。
      */
    HoldProxyUntilApplicationEnds?: boolean;
}
/**
 * PodsMetricSource 定义了如何根据特定指标进行扩缩容
 */
export interface PodsMetricSource {
    /**
      * 指标名
      */
    MetricName: string;
    /**
      * 目标值
      */
    TargetAverageValue: string;
}
/**
 * Resource 定义了资源类型和数量
 */
export interface Resource {
    /**
      * 资源类型 cpu/memory
      */
    Name?: string;
    /**
      * 资源数量
      */
    Quantity?: string;
}
/**
 * 部署配置
 */
export interface DeployConfig {
    /**
      * 部署类型，取值范围：
- SPECIFIC：专有模式
- AUTO：普通模式
      */
    NodeSelectType?: string;
    /**
      * 指定的节点
      */
    Nodes?: Array<string>;
}
/**
 * DescribeMesh请求参数结构体
 */
export interface DescribeMeshRequest {
    /**
      * 需要查询的网格 Id
      */
    MeshId: string;
}
/**
 * 正在执行的异步操作
 */
export interface ActiveOperation {
    /**
      * 操作Id
      */
    OperationId: string;
    /**
      * 操作类型，取值范围：
- LINK_CLUSTERS: 关联集群
- RELINK_CLUSTERS: 重新关联集群
- UNLINK_CLUSTERS: 解关联集群
- INSTALL_MESH: 安装网格
      */
    Type: string;
}
/**
 * Prometheus状态信息
 */
export interface PrometheusStatus {
    /**
      * Prometheus Id
      */
    PrometheusId: string;
    /**
      * 展示名称
      */
    DisplayName: string;
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * 虚拟网络Id
      */
    VpcId: string;
    /**
      * 状态
      */
    State: string;
    /**
      * 地区
      */
    Region: string;
    /**
      * Grafana信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grafana: GrafanaInfo;
}
/**
 * 键值对过滤器，用于条件过滤查询。例如过滤ID、名称等
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
 * Prometheus 配置
 */
export interface PrometheusConfig {
    /**
      * 虚拟网络Id
      */
    VpcId?: string;
    /**
      * 子网Id
      */
    SubnetId?: string;
    /**
      * 地域
      */
    Region?: string;
    /**
      * 关联已存在实例Id，不填则默认创建
      */
    InstanceId?: string;
}
/**
 * Istio配置
 */
export interface IstioConfig {
    /**
      * 外部流量策略
      */
    OutboundTrafficPolicy: string;
    /**
      * 调用链配置（Deprecated，请使用 MeshConfig.Tracing 进行配置）
      */
    Tracing?: TracingConfig;
    /**
      * 禁用策略检查功能
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisablePolicyChecks?: boolean;
}
/**
 * 腾讯云日志服务相关参数
 */
export interface CLS {
    /**
      * 是否启用
      */
    Enable: boolean;
    /**
      * 日志集
      */
    LogSet?: string;
    /**
      * 日志主题
      */
    Topic?: string;
}
/**
 * 调用链配置
 */
export interface TracingConfig {
    /**
      * 调用链采样率，百分比
      */
    Sampling?: number;
    /**
      * 是否启用调用跟踪
      */
    Enable?: boolean;
    /**
      * 腾讯云 APM 服务相关参数
      */
    APM?: APM;
}
/**
 * IngressGateway 实例信息
 */
export interface IngressGateway {
    /**
      * IngressGateway 实例名字
      */
    Name: string;
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 集群 ID
      */
    ClusterId: string;
    /**
      * Service 配置
      */
    Service: Service;
    /**
      * Workload 配置
      */
    Workload: WorkloadConfig;
    /**
      * 负载均衡配置，自动创建 CLB 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalancer?: LoadBalancer;
    /**
      * IngressGateway 状态信息，只读
      */
    Status?: IngressGatewayStatus;
    /**
      * 负载均衡实例ID，使用已有 CLB 时返回
      */
    LoadBalancerId?: string;
}
/**
 * 选中的项目
 */
export interface SelectedItems {
    /**
      * 命名空间
      */
    Namespace?: string;
    /**
      * 集群名称
      */
    ClusterName?: string;
    /**
      * 选中项目名字
      */
    ItemName?: string;
    /**
      * ingress gw的名称列表
      */
    Gateways?: Array<string>;
}
/**
 * Mesh集群信息
 */
export interface Cluster {
    /**
      * 集群Id
      */
    ClusterId: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 集群角色，取值范围：
- MASTER：控制面所在的主集群
- REMOTE：主集群管理的远端集群
      */
    Role: string;
    /**
      * 私有网络Id
      */
    VpcId: string;
    /**
      * 子网Id
      */
    SubnetId: string;
    /**
      * 名称，只读
      */
    DisplayName?: string;
    /**
      * 状态，只读
      */
    State?: string;
    /**
      * 关联时间，只读
      */
    LinkedTime?: string;
    /**
      * 集群配置
      */
    Config?: ClusterConfig;
    /**
      * 详细状态，只读
      */
    Status?: ClusterStatus;
    /**
      * 类型，取值范围：
- TKE
- EKS
      */
    Type?: string;
}
/**
 * DescribeMeshList返回参数结构体
 */
export interface DescribeMeshListResponse {
    /**
      * 查询到的网格信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MeshList: Array<Mesh>;
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
 * 腾讯云应用性能管理服务参数
 */
export interface APM {
    /**
      * 是否启用
      */
    Enable: boolean;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region?: string;
    /**
      * APM 实例，如果创建时传入的参数为空，则表示自动创建 APM 实例。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId?: string;
}
/**
 * ResourceRequirements 描述了计算资源需求。
 */
export interface ResourceRequirements {
    /**
      * Limits 描述了允许的最大计算资源量。
      */
    Limits?: Array<Resource>;
    /**
      * Requests 描述所需的最小计算资源量。
      */
    Requests?: Array<Resource>;
}
/**
 * 集群状态
 */
export interface ClusterStatus {
    /**
      * 关联状态，取值范围：
- LINKING: 关联中
- LINKED: 已关联
- UNLINKING: 解关联中
- LINK_FAILED: 关联失败
- UNLINK_FAILED: 解关联失败
      */
    LinkState: string;
    /**
      * 关联错误详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    LinkErrorDetail: string;
}
/**
 * 被选中的范围
 */
export interface SelectedRange {
    /**
      * 选中的项目详细内容
      */
    Items?: Array<SelectedItems>;
    /**
      * 是否全选
      */
    All?: boolean;
}
/**
 * AccessLog 配置
 */
export interface AccessLogConfig {
    /**
      * 是否启用
      */
    Enable?: boolean;
    /**
      * 采用的模板，可选值：istio（默认）、trace
      */
    Template?: string;
    /**
      * 选中的范围
      */
    SelectedRange?: SelectedRange;
    /**
      * 腾讯云日志服务相关参数
      */
    CLS?: CLS;
    /**
      * 编码格式，可选值：TEXT、JSON
      */
    Encoding?: string;
    /**
      * 日志格式
      */
    Format?: string;
}
/**
 * 负载均衡配置
 */
export interface LoadBalancer {
    /**
      * 负载均衡实例的网络类型：
OPEN：公网属性， INTERNAL：内网属性。
只读。
      */
    LoadBalancerType: string;
    /**
      * 负载均衡实例所在的子网（仅对内网VPC型LB有意义），只读。
      */
    SubnetId?: string;
    /**
      * TRAFFIC_POSTPAID_BY_HOUR 按流量按小时后计费 ; BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;只读。
      */
    InternetChargeType?: string;
    /**
      * 最大出带宽，单位Mbps，范围支持0到2048，仅对公网属性的LB生效，默认值 10
      */
    InternetMaxBandwidthOut?: number;
}
