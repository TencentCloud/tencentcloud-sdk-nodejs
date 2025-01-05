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
 * 第三方 Prometheus 配置参数
 */
export interface CustomPromConfig {
    /**
     * Prometheus 访问地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Url: string;
    /**
     * 认证方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthType: string;
    /**
     * 是否公网地址，缺省为 false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPublicAddr?: boolean;
    /**
     * 虚拟网络id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * Prometheus 用户名（用于 basic 认证方式）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Username?: string;
    /**
     * Prometheus 密码（用于 basic 认证方式）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
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
 * UnlinkPrometheus返回参数结构体
 */
export interface UnlinkPrometheusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 负载均衡实例 Hostname
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerHostname: string;
}
/**
 * ModifyTracingConfig返回参数结构体
 */
export interface ModifyTracingConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeMesh返回参数结构体
 */
export interface DescribeMeshResponse {
    /**
     * Mesh详细信息
     */
    Mesh?: Mesh;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAccessLogConfig请求参数结构体
 */
export interface ModifyAccessLogConfigRequest {
    /**
     * mesh ID
     */
    MeshId: string;
    /**
     * 选中的范围
     */
    SelectedRange?: SelectedRange;
    /**
     * 采用的模板，可选值：istio（默认）、trace、custom
     */
    Template?: string;
    /**
     * 是否启用
     */
    Enable?: boolean;
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
    /**
     * 是否启用标准输出
     */
    EnableStdout?: boolean;
    /**
     * 是否启动GRPC第三方服务器
     */
    EnableServer?: boolean;
    /**
     * GRPC第三方服务器地址
     */
    Address?: string;
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
 * UnlinkCluster返回参数结构体
 */
export interface UnlinkClusterResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LinkClusterList返回参数结构体
 */
export interface LinkClusterListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAccessLogConfig返回参数结构体
 */
export interface ModifyAccessLogConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * IngressGateway状态
 */
export interface IngressGatewayStatus {
    /**
     * 负载均衡实例状态
     */
    LoadBalancer: LoadBalancerStatus;
    /**
     * ingress gateway 当前的版本
     */
    CurrentVersion: string;
    /**
     * ingress gateway 目标的版本
     */
    DesiredVersion: string;
    /**
     * ingress gateway的状态，取值running, upgrading, rollbacking
     */
    State: string;
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
 * CreateMesh返回参数结构体
 */
export interface CreateMeshResponse {
    /**
     * 创建的Mesh的Id
     */
    MeshId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LinkClusterList请求参数结构体
 */
export interface LinkClusterListRequest {
    /**
     * 网格Id
     */
    MeshId: string;
    /**
     * 关联集群
     */
    ClusterList: Array<Cluster>;
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
 * UnlinkPrometheus请求参数结构体
 */
export interface UnlinkPrometheusRequest {
    /**
     * 网格ID
     */
    MeshID: string;
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
    /**
     * 组件的部署模式，取值说明：
  IN_GENERAL_NODE：常规节点
  IN_EKLET：eklet 节点
  IN_SHARED_NODE_POOL：共享节电池
  IN_EXCLUSIVE_NODE_POOL：独占节点池
     */
    DeployMode?: string;
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
    /**
     * 工作负载的状态
     */
    Status?: EgressGatewayStatus;
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
    /**
     * 支持HTTP1.0协议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnablePilotHTTP?: boolean;
    /**
     * 禁用HTTP重试策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisableHTTPRetry?: boolean;
    /**
     * SmartDNS策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SmartDNS?: SmartDNSConfig;
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
    /**
     * 标签列表
     */
    TagList: Array<Tag>;
}
/**
 * DescribeAccessLogConfig返回参数结构体
 */
export interface DescribeAccessLogConfigResponse {
    /**
     * 访问日志输出路径。默认 /dev/stdout
     */
    File?: string;
    /**
     * 访问日志的格式。
     */
    Format?: string;
    /**
     * 访问日志输出编码，可取值为 "TEXT" 或 "JSON"，默认 TEXT"
     */
    Encoding?: string;
    /**
     * 选中的范围
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelectedRange?: SelectedRange;
    /**
     * 采用的模板，可取值为"istio" 或 "trace"，默认为"istio"
     */
    Template?: string;
    /**
     * 腾讯云日志服务相关参数
     */
    CLS?: CLS;
    /**
     * GRPC第三方服务器地址
     */
    Address?: string;
    /**
     * 是否启用GRPC第三方服务器
     */
    EnableServer?: boolean;
    /**
     * 是否启用标准输出
     */
    EnableStdout?: boolean;
    /**
     * 是否启用访问日志采集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enable?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LinkPrometheus请求参数结构体
 */
export interface LinkPrometheusRequest {
    /**
     * 网格ID
     */
    MeshID: string;
    /**
     * 配置
     */
    Prometheus: PrometheusConfig;
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
 * DeleteMesh返回参数结构体
 */
export interface DeleteMeshResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DeleteMesh请求参数结构体
 */
export interface DeleteMeshRequest {
    /**
     * 需要删除的MeshId
     */
    MeshId: string;
    /**
     * CLS组件是否被删除
     */
    NeedDeleteCLS?: boolean;
    /**
     * TMP组件是否被删除
     */
    NeedDeleteTMP?: boolean;
    /**
     * APM组件是否被删除
     */
    NeedDeleteAPM?: boolean;
    /**
     * Grafana组件是否被删除
     */
    NeedDeleteGrafana?: boolean;
}
/**
 * LinkPrometheus返回参数结构体
 */
export interface LinkPrometheusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeAccessLogConfig请求参数结构体
 */
export interface DescribeAccessLogConfigRequest {
    /**
     * mesh名字
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
 * CreateMesh请求参数结构体
 */
export interface CreateMeshRequest {
    /**
     * Mesh名称
     */
    DisplayName: string;
    /**
     * Mesh版本
     */
    MeshVersion: string;
    /**
     * Mesh类型，取值范围：
  - HOSTED：托管网格
     */
    Type: string;
    /**
     * Mesh配置
     */
    Config: MeshConfig;
    /**
     * 关联集群
     */
    ClusterList?: Array<Cluster>;
    /**
     * 标签列表
     */
    TagList?: Array<Tag>;
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
    /**
     * Prometheus 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
}
/**
 * 负载均衡跨域设置
 */
export declare type CrossRegionConfig = null;
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
    /**
     * 第三方 Prometheus
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomProm?: CustomPromConfig;
}
/**
 * 内网独占集群配置
 */
export interface ExtensiveCluster {
    /**
     * Cluster ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
}
/**
 * 智能DNS配置
 */
export interface SmartDNSConfig {
    /**
     * 开启DNS代理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IstioMetaDNSCapture?: boolean;
    /**
     * 开启自动地址分配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IstioMetaDNSAutoAllocate?: boolean;
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
 * ModifyMesh返回参数结构体
 */
export interface ModifyMeshResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UnlinkCluster请求参数结构体
 */
export interface UnlinkClusterRequest {
    /**
     * 网格Id
     */
    MeshId: string;
    /**
     * 取消关联的集群Id
     */
    ClusterId?: string;
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
    /**
     * 是否删除
     */
    NeedDelete?: boolean;
    /**
     * cls 主题创建的地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
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
    /**
     * 启动第三方服务器的地址
     */
    Zipkin?: TracingZipkin;
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
 * egress gateway 的状态
 */
export interface EgressGatewayStatus {
    /**
     * egress gateway的当前版本
     */
    CurrentVersion: string;
    /**
     * egress gateway的目标版本
     */
    DesiredVersion: string;
    /**
     * egress gateway的状态，取值：running，upgrading，rollbacking
     */
    State: string;
}
/**
 * 内网独占集群配置列表
 */
export interface ExtensiveClusters {
    /**
     * 4层集群配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    L4Clusters?: Array<ExtensiveCluster>;
    /**
     * 7层集群配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    L7Clusters?: Array<ExtensiveCluster>;
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
 * ModifyTracingConfig请求参数结构体
 */
export interface ModifyTracingConfigRequest {
    /**
     * mesh名字
     */
    MeshId: string;
    /**
     * 是否启用调用跟踪
     */
    Enable?: boolean;
    /**
     * 腾讯云 APM 服务相关参数
     */
    APM?: APM;
    /**
     * 调用跟踪采样值
     */
    Sampling?: number;
    /**
     * 调用追踪Zipkin相关配置
     */
    Zipkin?: TracingZipkin;
}
/**
 * ModifyMesh请求参数结构体
 */
export interface ModifyMeshRequest {
    /**
     * 需要修改的网格Id
     */
    MeshId: string;
    /**
     * 修改的网格名称
     */
    DisplayName?: string;
    /**
     * 修改的网格配置
     */
    Config?: MeshConfig;
    /**
     * 修改的集群配置
     */
    ClusterList?: Array<Cluster>;
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
    /**
     * 集群关联的 Namespace 列表
     */
    HostedNamespaces?: Array<string>;
}
/**
 * 标签
 */
export interface Tag {
    /**
     * 标签键
     */
    Key: string;
    /**
     * 标签值
     */
    Value: string;
    /**
     * 是否透传给其他关联产品
     */
    Passthrough?: boolean;
}
/**
 * DescribeMeshList返回参数结构体
 */
export interface DescribeMeshListResponse {
    /**
     * 查询到的网格信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MeshList?: Array<Mesh>;
    /**
     * 总数
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 调用追踪的Zipkin设置
 */
export interface TracingZipkin {
    /**
     * Zipkin调用地址
     */
    Address: string;
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
    /**
     * 是否要删除APM实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NeedDelete?: boolean;
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
    /**
     * GRPC第三方服务器地址
     */
    Address?: string;
    /**
     * 是否启用GRPC第三方服务器
     */
    EnableServer?: boolean;
    /**
     * 是否启用标准输出
     */
    EnableStdout?: boolean;
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
    LoadBalancerType?: string;
    /**
     * 负载均衡实例所在的子网（仅对内网VPC型LB有意义），只读。
     */
    SubnetId?: string;
    /**
     * TRAFFIC_POSTPAID_BY_HOUR 按流量按小时后计费 ; BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;只读。
     */
    InternetChargeType?: string;
    /**
     * 最大出带宽，单位Mbps，仅对公网属性的LB生效，默认值 10
     */
    InternetMaxBandwidthOut?: number;
    /**
     * 可用区 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneID?: string;
    /**
     * 运营商类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VipIsp?: string;
    /**
     * TGW Group 名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TgwGroupName?: string;
    /**
     * IP 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddressIPVersion?: string;
    /**
     * 标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
    /**
     * 内网独占集群配置列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtensiveClusters?: ExtensiveClusters;
    /**
     * 负载均衡跨地域配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrossRegionConfig?: CrossRegionConfig;
    /**
     * 设置跨可用区容灾时的主可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MasterZoneID?: string;
    /**
     * 设置跨可用区容灾时的备可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SlaveZoneID?: string;
}
