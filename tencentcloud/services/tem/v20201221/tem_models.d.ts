/**
 * 挂载配置信息
 */
export interface MountedSettingConf {
    /**
      * 配置名称
      */
    ConfigDataName: string;
    /**
      * 挂载路径
      */
    MountedPath: string;
    /**
      * 配置内容
      */
    Data?: Array<Pair>;
}
/**
 * ModifyServiceInfo返回参数结构体
 */
export interface ModifyServiceInfoResponse {
    /**
      * 成功与否
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据卷挂载信息
 */
export interface StorageMountConf {
    /**
      * 数据卷名
      */
    VolumeName: string;
    /**
      * 数据卷绑定路径
      */
    MountPath: string;
}
/**
 * CreateResource请求参数结构体
 */
export interface CreateResourceRequest {
    /**
      * 命名空间 Id
      */
    NamespaceId: string;
    /**
      * 资源类型，目前支持文件系统：CFS；日志服务：CLS；注册中心：TSE_SRE
      */
    ResourceType: string;
    /**
      * 资源 Id
      */
    ResourceId: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * CreateServiceV2返回参数结构体
 */
export interface CreateServiceV2Response {
    /**
      * 服务code
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCosTokenV2请求参数结构体
 */
export interface CreateCosTokenV2Request {
    /**
      * 服务ID
      */
    ServiceId: string;
    /**
      * 包名
      */
    PkgName: string;
    /**
      * optType 1上传  2查询
      */
    OptType: number;
    /**
      * 来源 channel
      */
    SourceChannel?: number;
    /**
      * 充当deployVersion入参
      */
    TimeVersion?: string;
}
/**
 * DeployServiceV2返回参数结构体
 */
export interface DeployServiceV2Response {
    /**
      * 版本ID（前端可忽略）
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 弹性伸缩配置
 */
export interface EsInfo {
    /**
      * 最小实例数
      */
    MinAliveInstances: number;
    /**
      * 最大实例数
      */
    MaxAliveInstances: number;
    /**
      * 弹性策略,1:cpu，2:内存
      */
    EsStrategy: number;
    /**
      * 弹性扩缩容条件值
      */
    Threshold: number;
    /**
      * 版本Id
      */
    VersionId?: string;
}
/**
 * DescribeNamespaces返回参数结构体
 */
export interface DescribeNamespacesResponse {
    /**
      * 返回结果
      */
    Result: NamespacePage;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 服务端口映射
 */
export interface PortMapping {
    /**
      * 端口
      */
    Port: number;
    /**
      * 映射端口
      */
    TargetPort: number;
    /**
      * 协议栈 TCP/UDP
      */
    Protocol: string;
}
/**
 * RestartServiceRunPod请求参数结构体
 */
export interface RestartServiceRunPodRequest {
    /**
      * 环境id
      */
    NamespaceId: string;
    /**
      * 服务名id
      */
    ServiceId: string;
    /**
      * 名字
      */
    PodName: string;
    /**
      * 单页条数
      */
    Limit?: number;
    /**
      * 分页下标
      */
    Offset?: number;
    /**
      * pod状态
      */
    Status?: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * ModifyIngress返回参数结构体
 */
export interface ModifyIngressResponse {
    /**
      * 创建成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteIngress请求参数结构体
 */
export interface DeleteIngressRequest {
    /**
      * tem NamespaceId
      */
    NamespaceId: string;
    /**
      * eks namespace 名
      */
    EksNamespace: string;
    /**
      * ingress 规则名
      */
    Name: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * ModifyServiceInfo请求参数结构体
 */
export interface ModifyServiceInfoRequest {
    /**
      * 服务ID
      */
    ServiceId: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * CreateNamespace返回参数结构体
 */
export interface CreateNamespaceResponse {
    /**
      * 成功时为命名空间ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRelatedIngresses请求参数结构体
 */
export interface DescribeRelatedIngressesRequest {
    /**
      * 环境 id
      */
    NamespaceId?: string;
    /**
      * EKS namespace
      */
    EksNamespace?: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * 服务 ID
      */
    ServiceId?: string;
}
/**
 * Cos token
 */
export interface CosToken {
    /**
      * 唯一请求 ID
      */
    RequestId: string;
    /**
      * 存储桶桶名
      */
    Bucket: string;
    /**
      * 存储桶所在区域
      */
    Region: string;
    /**
      * 临时密钥的SecretId
      */
    TmpSecretId: string;
    /**
      * 临时密钥的SecretKey
      */
    TmpSecretKey: string;
    /**
      * 临时密钥的 sessionToken
      */
    SessionToken: string;
    /**
      * 临时密钥获取的开始时间
      */
    StartTime: string;
    /**
      * 临时密钥的 expiredTime
      */
    ExpiredTime: string;
    /**
      * 包完整路径
      */
    FullPath: string;
}
/**
 * DescribeNamespaces请求参数结构体
 */
export interface DescribeNamespacesRequest {
    /**
      * 分页limit
      */
    Limit?: number;
    /**
      * 分页下标
      */
    Offset?: number;
    /**
      * 来源source
      */
    SourceChannel?: number;
}
/**
 * CreateCosToken请求参数结构体
 */
export interface CreateCosTokenRequest {
    /**
      * 服务ID
      */
    ServiceId: string;
    /**
      * 服务版本ID
      */
    VersionId: string;
    /**
      * 包名
      */
    PkgName: string;
    /**
      * optType 1上传  2查询
      */
    OptType: number;
    /**
      * 来源 channel
      */
    SourceChannel?: number;
}
/**
 * DeployServiceV2请求参数结构体
 */
export interface DeployServiceV2Request {
    /**
      * 服务ID
      */
    ServiceId: string;
    /**
      * 容器端口
      */
    ContainerPort: number;
    /**
      * 初始化 pod 数
      */
    InitPodNum: number;
    /**
      * cpu规格
      */
    CpuSpec: number;
    /**
      * 内存规格
      */
    MemorySpec: number;
    /**
      * 环境ID
      */
    NamespaceId: string;
    /**
      * 镜像仓库
      */
    ImgRepo?: string;
    /**
      * 版本描述信息
      */
    VersionDesc?: string;
    /**
      * 启动参数
      */
    JvmOpts?: string;
    /**
      * 弹性伸缩配置，不传默认不启用弹性伸缩配置
      */
    EsInfo?: EsInfo;
    /**
      * 环境变量配置
      */
    EnvConf?: Array<Pair>;
    /**
      * 日志配置
      */
    LogConfs?: Array<string>;
    /**
      * 数据卷配置
      */
    StorageConfs?: Array<StorageConf>;
    /**
      * 数据卷挂载配置
      */
    StorageMountConfs?: Array<StorageMountConf>;
    /**
      * 部署类型。
- JAR：通过 jar 包部署
- WAR：通过 war 包部署
- IMAGE：通过镜像部署
      */
    DeployMode?: string;
    /**
      * 部署类型为 IMAGE 时，该参数表示镜像 tag。
部署类型为 JAR/WAR 时，该参数表示包版本号。
      */
    DeployVersion?: string;
    /**
      * 包名。使用 JAR 包或者 WAR 包部署的时候必填。
      */
    PkgName?: string;
    /**
      * JDK 版本。
- KONA：使用 kona jdk。
- OPEN：使用 open jdk。
      */
    JdkVersion?: string;
    /**
      * 安全组ID s
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 日志输出配置
      */
    LogOutputConf?: LogOutputConf;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * 版本描述
      */
    Description?: string;
    /**
      * 镜像命令
      */
    ImageCommand?: string;
    /**
      * 镜像命令参数
      */
    ImageArgs?: Array<string>;
    /**
      * 服务端口映射
      */
    PortMappings?: Array<PortMapping>;
    /**
      * 是否添加默认注册中心配置
      */
    UseRegistryDefaultConfig?: boolean;
    /**
      * 挂载配置信息
      */
    SettingConfs?: Array<MountedSettingConf>;
    /**
      * eks 访问设置
      */
    EksService?: EksService;
    /**
      * 要回滚到的历史版本id
      */
    VersionId?: string;
    /**
      * 启动后执行的脚本
      */
    PostStart?: string;
    /**
      * 停止前执行的脚本
      */
    PreStop?: string;
    /**
      * 分批发布策略配置
      */
    DeployStrategyConf?: DeployStrategyConf;
    /**
      * 存活探针配置
      */
    Liveness?: HealthCheckConfig;
    /**
      * 就绪探针配置
      */
    Readiness?: HealthCheckConfig;
}
/**
 * ModifyIngress请求参数结构体
 */
export interface ModifyIngressRequest {
    /**
      * Ingress 规则配置
      */
    Ingress: IngressInfo;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * GenerateDownloadUrl返回参数结构体
 */
export interface GenerateDownloadUrlResponse {
    /**
      * 包下载临时链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRelatedIngresses返回参数结构体
 */
export interface DescribeRelatedIngressesResponse {
    /**
      * ingress 数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: Array<IngressInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateNamespace请求参数结构体
 */
export interface CreateNamespaceRequest {
    /**
      * 命名空间名称
      */
    NamespaceName: string;
    /**
      * 私有网络名称
      */
    Vpc: string;
    /**
      * 子网列表
      */
    SubnetIds: Array<string>;
    /**
      * 命名空间描述
      */
    Description?: string;
    /**
      * K8s version
      */
    K8sVersion?: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * 是否开启tsw服务
      */
    EnableTswTraceService?: boolean;
}
/**
 * DescribeIngresses请求参数结构体
 */
export interface DescribeIngressesRequest {
    /**
      * namespace id
      */
    NamespaceId?: string;
    /**
      * namespace
      */
    EksNamespace?: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * ingress 规则名列表
      */
    Names?: Array<string>;
}
/**
 * 版本pod列表
 */
export interface DescribeRunPodPage {
    /**
      * 分页下标
      */
    Offset: number;
    /**
      * 单页条数
      */
    Limit: number;
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 请求id
      */
    RequestId: string;
    /**
      * 条目
      */
    PodList: Array<RunVersionPod>;
}
/**
 * DescribeServiceRunPodListV2请求参数结构体
 */
export interface DescribeServiceRunPodListV2Request {
    /**
      * 环境id
      */
    NamespaceId: string;
    /**
      * 服务名id
      */
    ServiceId: string;
    /**
      * 单页条数，默认值20
      */
    Limit?: number;
    /**
      * 分页下标，默认值0
      */
    Offset?: number;
    /**
      * 实例状态
- Running
- Pending
- Error
      */
    Status?: string;
    /**
      * 实例名字
      */
    PodName?: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * 日志输出配置
 */
export interface LogOutputConf {
    /**
      * 日志消费端类型
      */
    OutputType: string;
    /**
      * cls日志集
      */
    ClsLogsetName?: string;
    /**
      * cls日志主题
      */
    ClsLogTopicId?: string;
    /**
      * cls日志集id
      */
    ClsLogsetId?: string;
    /**
      * cls日志名称
      */
    ClsLogTopicName?: string;
}
/**
 * DescribeIngresses返回参数结构体
 */
export interface DescribeIngressesResponse {
    /**
      * ingress 数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: Array<IngressInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Ingress 配置
 */
export interface IngressInfo {
    /**
      * tem namespaceId
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * eks namespace
      */
    EksNamespace: string;
    /**
      * ip version
      */
    AddressIPVersion: string;
    /**
      * ingress name
      */
    Name: string;
    /**
      * rules 配置
      */
    Rules: Array<IngressRule>;
    /**
      * clb ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClbId?: string;
    /**
      * tls 配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tls?: Array<IngressTls>;
    /**
      * eks clusterId
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId?: string;
    /**
      * clb ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vip?: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 是否混合 https，默认 false，可选值 true 代表有 https 协议监听
      */
    Mixed?: boolean;
}
/**
 * DeleteIngress返回参数结构体
 */
export interface DeleteIngressResponse {
    /**
      * 是否删除成功
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RestartServiceRunPod返回参数结构体
 */
export interface RestartServiceRunPodResponse {
    /**
      * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyNamespace请求参数结构体
 */
export interface ModifyNamespaceRequest {
    /**
      * 环境id
      */
    NamespaceId: string;
    /**
      * 命名空间名称
      */
    NamespaceName?: string;
    /**
      * 命名空间描述
      */
    Description?: string;
    /**
      * 私有网络名称
      */
    Vpc?: string;
    /**
      * 子网网络
      */
    SubnetIds?: Array<string>;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * Ingress 规则 backend 配置
 */
export interface IngressRuleBackend {
    /**
      * eks service 名
      */
    ServiceName: string;
    /**
      * eks service 端口
      */
    ServicePort: number;
}
/**
 * DescribeIngress返回参数结构体
 */
export interface DescribeIngressResponse {
    /**
      * Ingress 规则配置
      */
    Result: IngressInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCosToken返回参数结构体
 */
export interface CreateCosTokenResponse {
    /**
      * 成功时为CosToken对象，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: CosToken;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ingress rule 配置
 */
export interface IngressRule {
    /**
      * ingress rule value
      */
    Http: IngressRuleValue;
    /**
      * host 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Host?: string;
    /**
      * 协议，选项为 http， https，默认为 http
      */
    Protocol?: string;
}
/**
 * Ingress Rule Path 配置
 */
export interface IngressRulePath {
    /**
      * path 信息
      */
    Path: string;
    /**
      * backend 配置
      */
    Backend: IngressRuleBackend;
}
/**
 * 存储卷配置
 */
export interface StorageConf {
    /**
      * 存储卷名称
      */
    StorageVolName: string;
    /**
      * 存储卷路径
      */
    StorageVolPath: string;
    /**
      * 存储卷IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageVolIp?: string;
}
/**
 * ModifyNamespace返回参数结构体
 */
export interface ModifyNamespaceResponse {
    /**
      * 成功时为命名空间ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 版本pod
 */
export interface RunVersionPod {
    /**
      * shell地址
      */
    Webshell: string;
    /**
      * pod的id
      */
    PodId: string;
    /**
      * 状态
      */
    Status: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 实例的ip
      */
    PodIp: string;
    /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone: string;
    /**
      * 部署版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployVersion: string;
    /**
      * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartCount: number;
}
/**
 * Ingress Rule Value 配置
 */
export interface IngressRuleValue {
    /**
      * rule 整体配置
      */
    Paths: Array<IngressRulePath>;
}
/**
 * CreateResource返回参数结构体
 */
export interface CreateResourceResponse {
    /**
      * 成功与否
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeServiceRunPodListV2返回参数结构体
 */
export interface DescribeServiceRunPodListV2Response {
    /**
      * 返回结果
      */
    Result: DescribeRunPodPage;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 命名空间对象
 */
export interface TemNamespaceInfo {
    /**
      * 命名空间id
      */
    NamespaceId: string;
    /**
      * 渠道
      */
    Channel: string;
    /**
      * 命名空间名称
      */
    NamespaceName: string;
    /**
      * 区域名称
      */
    Region: string;
    /**
      * 命名空间描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 状态,1:已销毁;0:正常
      */
    Status: number;
    /**
      * vpc网络
      */
    Vpc: string;
    /**
      * 创建时间
      */
    CreateDate: string;
    /**
      * 修改时间
      */
    ModifyDate: string;
    /**
      * 修改人
      */
    Modifier: string;
    /**
      * 创建人
      */
    Creator: string;
    /**
      * 服务数
      */
    ServiceNum: number;
    /**
      * 运行实例数
      */
    RunInstancesNum: number;
    /**
      * 子网络
      */
    SubnetId: string;
    /**
      * tcb环境状态
      */
    TcbEnvStatus: string;
    /**
      * eks cluster status
      */
    ClusterStatus: string;
    /**
      * 是否开启tsw
      */
    EnableTswTraceService: boolean;
}
/**
 * 命名空间分页
 */
export interface NamespacePage {
    /**
      * 分页内容
      */
    Records: Array<TemNamespaceInfo>;
    /**
      * 总数
      */
    Total: number;
    /**
      * 条目数
      */
    Size: number;
    /**
      * 页数
      */
    Pages: number;
}
/**
 * 健康检查配置
 */
export interface HealthCheckConfig {
    /**
      * 支持的健康检查类型，如 HttpGet，TcpSocket，Exec
      */
    Type: string;
    /**
      * 仅当健康检查类型为 HttpGet 时有效，表示协议类型，如 HTTP，HTTPS
      */
    Protocol?: string;
    /**
      * 仅当健康检查类型为 HttpGet 时有效，表示请求路径
      */
    Path?: string;
    /**
      * 仅当健康检查类型为 Exec 时有效，表示执行的脚本内容
      */
    Exec?: string;
    /**
      * 仅当健康检查类型为 HttpGet\TcpSocket 时有效，表示请求路径
      */
    Port?: number;
    /**
      * 检查延迟开始时间，单位为秒，默认为 0
      */
    InitialDelaySeconds?: number;
    /**
      * 超时时间，单位为秒，默认为 1
      */
    TimeoutSeconds?: number;
    /**
      * 间隔时间，单位为秒，默认为 10
      */
    PeriodSeconds?: number;
}
/**
 * CreateCosTokenV2返回参数结构体
 */
export interface CreateCosTokenV2Response {
    /**
      * 成功时为CosToken对象，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: CosToken;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ingress tls 配置
 */
export interface IngressTls {
    /**
      * host 数组, 空数组表示全部域名的默认证书
      */
    Hosts: Array<string>;
    /**
      * secret name，如使用证书，则填空字符串
      */
    SecretName: string;
    /**
      * SSL Certificate Id
      */
    CertificateId?: string;
}
/**
 * GenerateDownloadUrl请求参数结构体
 */
export interface GenerateDownloadUrlRequest {
    /**
      * 服务ID
      */
    ServiceId: string;
    /**
      * 包名
      */
    PkgName: string;
    /**
      * 需要下载的包版本
      */
    DeployVersion: string;
    /**
      * 来源 channel
      */
    SourceChannel?: number;
}
/**
 * 分批发布策略配置
 */
export interface DeployStrategyConf {
    /**
      * 总分批数
      */
    TotalBatchCount?: number;
    /**
      * beta分批实例数
      */
    BetaBatchNum?: number;
    /**
      * 分批策略：0-全自动，1-全手动，beta分批一定是手动的，这里的策略指定的是剩余批次
      */
    DeployStrategyType?: number;
    /**
      * 每批暂停间隔
      */
    BatchInterval?: number;
}
/**
 * DescribeIngress请求参数结构体
 */
export interface DescribeIngressRequest {
    /**
      * tem namespaceId
      */
    NamespaceId: string;
    /**
      * eks namespace 名
      */
    EksNamespace: string;
    /**
      * ingress 规则名
      */
    Name: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * CreateServiceV2请求参数结构体
 */
export interface CreateServiceV2Request {
    /**
      * 服务名
      */
    ServiceName: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 是否使用默认镜像服务 1-是，0-否
      */
    UseDefaultImageService?: number;
    /**
      * 如果是绑定仓库，绑定的仓库类型，0-个人版，1-企业版
      */
    RepoType?: number;
    /**
      * 企业版镜像服务的实例id
      */
    InstanceId?: string;
    /**
      * 绑定镜像服务器地址
      */
    RepoServer?: string;
    /**
      * 绑定镜像仓库名
      */
    RepoName?: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * 服务所在子网
      */
    SubnetList?: Array<string>;
    /**
      * 编程语言
- JAVA
- OTHER
      */
    CodingLanguage?: string;
    /**
      * 部署方式
- IMAGE
- JAR
- WAR
      */
    DeployMode?: string;
}
/**
 * eks service info
 */
export interface EksService {
    /**
      * service name
      */
    Name?: string;
    /**
      * 可用端口
      */
    Ports?: Array<number>;
    /**
      * yaml 内容
      */
    Yaml?: string;
    /**
      * 服务名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceName?: string;
    /**
      * 版本名
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionName?: string;
    /**
      * 内网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterIp?: Array<string>;
    /**
      * 外网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExternalIp?: string;
    /**
      * 访问类型，可选值：
- EXTERNAL（公网访问）
- VPC（vpc内访问）
- CLUSTER（集群内访问）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 子网ID，只在类型为vpc访问时才有值
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId?: string;
    /**
      * 负载均衡ID，只在外网访问和vpc内访问才有值，默认自动创建
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoadBalanceId?: string;
    /**
      * 端口映射
注意：此字段可能返回 null，表示取不到有效值。
      */
    PortMappings?: Array<PortMapping>;
}
/**
 * 键值对
 */
export interface Pair {
    /**
      * 建
      */
    Key: string;
    /**
      * 值
      */
    Value: string;
}
