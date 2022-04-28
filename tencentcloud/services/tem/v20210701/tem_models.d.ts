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
    /**
      * 加密配置名称
      */
    SecretDataName?: string;
}
/**
 * RestartApplicationPod返回参数结构体
 */
export interface RestartApplicationPodResponse {
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
 * DeleteApplication请求参数结构体
 */
export interface DeleteApplicationRequest {
    /**
      * 服务Id
      */
    ApplicationId: string;
    /**
      * 环境ID
      */
    EnvironmentId: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * 当服务没有任何运行版本时，是否删除此服务
      */
    DeleteApplicationIfNoRunningVersion?: boolean;
}
/**
 * CreateResource请求参数结构体
 */
export interface CreateResourceRequest {
    /**
      * 环境 Id
      */
    EnvironmentId: string;
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
    /**
      * 资源来源，目前支持：existing，已有资源；creating，自动创建
      */
    ResourceFrom?: string;
    /**
      * 设置 resource 的额外配置
      */
    ResourceConfig?: string;
}
/**
 * ResumeDeployApplication返回参数结构体
 */
export interface ResumeDeployApplicationResponse {
    /**
      * 是否成功
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RestartApplication返回参数结构体
 */
export interface RestartApplicationResponse {
    /**
      * 返回结果
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopApplication请求参数结构体
 */
export interface StopApplicationRequest {
    /**
      * 服务id
      */
    ApplicationId: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * 环境ID
      */
    EnvironmentId?: string;
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
 * 分批发布详情
 */
export interface TemDeployApplicationDetailInfo {
    /**
      * 分批发布策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployStrategyConf: DeployStrategyConf;
    /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 当前状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * beta分批详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    BetaBatchDetail: DeployServiceBatchDetail;
    /**
      * 其他分批详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    OtherBatchDetail: Array<DeployServiceBatchDetail>;
    /**
      * 老版本pod列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    OldVersionPodList: DescribeRunPodPage;
    /**
      * 当前批次id
注意：此字段可能返回 null，表示取不到有效值。
      */
    CurrentBatchIndex: number;
    /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorMessage: string;
    /**
      * 当前批次状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    CurrentBatchStatus: string;
    /**
      * 新版本version
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewDeployVersion: string;
    /**
      * 旧版本version
注意：此字段可能返回 null，表示取不到有效值。
      */
    OldDeployVersion: string;
    /**
      * 包名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewVersionPackageInfo: string;
    /**
      * 下一批次开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    NextBatchStartTime: number;
}
/**
 * DescribeDeployApplicationDetail请求参数结构体
 */
export interface DescribeDeployApplicationDetailRequest {
    /**
      * 服务id
      */
    ApplicationId?: string;
    /**
      * 环境id
      */
    EnvironmentId?: string;
    /**
      * 版本部署id
      */
    VersionId?: string;
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
 * 分批发布单批次详情
 */
export interface DeployServiceBatchDetail {
    /**
      * 旧实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    OldPodList?: DeployServicePodDetail;
    /**
      * 新实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewPodList?: DeployServicePodDetail;
    /**
      * 当前批次状态："WaitForTimeExceed", "WaitForResume", "Deploying", "Finish", "NotStart"
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchStatus?: string;
    /**
      * 该批次预计旧实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodNum?: number;
    /**
      * 批次id
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchIndex?: number;
    /**
      * 旧实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    OldPods?: Array<DeployServicePodDetail>;
    /**
      * 新实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NewPods?: Array<DeployServicePodDetail>;
    /**
      * =0：手动确认批次；>0：下一批次开始时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    NextBatchStartTime?: number;
}
/**
 * DescribeApplicationPods返回参数结构体
 */
export interface DescribeApplicationPodsResponse {
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
 * DeleteIngress请求参数结构体
 */
export interface DeleteIngressRequest {
    /**
      * 环境ID
      */
    EnvironmentId: string;
    /**
      * 环境 namespace
      */
    ClusterNamespace: string;
    /**
      * ingress 规则名
      */
    IngressName: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * RestartApplicationPod请求参数结构体
 */
export interface RestartApplicationPodRequest {
    /**
      * 环境id
      */
    EnvironmentId: string;
    /**
      * 应用id
      */
    ApplicationId: string;
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
 * DescribeRelatedIngresses请求参数结构体
 */
export interface DescribeRelatedIngressesRequest {
    /**
      * 环境 id
      */
    EnvironmentId?: string;
    /**
      * 环境 namespace
      */
    ClusterNamespace?: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * 应用 ID
      */
    ApplicationId?: string;
}
/**
 * ModifyEnvironment返回参数结构体
 */
export interface ModifyEnvironmentResponse {
    /**
      * 成功时为环境ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * GenerateApplicationPackageDownloadUrl请求参数结构体
 */
export interface GenerateApplicationPackageDownloadUrlRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
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
 * DeployApplication请求参数结构体
 */
export interface DeployApplicationRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
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
    EnvironmentId: string;
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
      * 弹性伸缩配置（已废弃，请使用HorizontalAutoscaler设置弹性策略）
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
- KONA:8：使用 kona jdk 8。
- OPEN:8：使用 open jdk 8。
- KONA:11：使用 kona jdk 11。
- OPEN:11：使用 open jdk 11。
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
      * 是否添加默认注册中心配置
      */
    UseRegistryDefaultConfig?: boolean;
    /**
      * 挂载配置信息
      */
    SettingConfs?: Array<MountedSettingConf>;
    /**
      * 应用访问设置
      */
    Service?: EksService;
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
      * 存活探针配置
      */
    Liveness?: HealthCheckConfig;
    /**
      * 就绪探针配置
      */
    Readiness?: HealthCheckConfig;
    /**
      * 分批发布策略配置
      */
    DeployStrategyConf?: DeployStrategyConf;
    /**
      * 弹性策略
      */
    HorizontalAutoscaler?: Array<HorizontalAutoscaler>;
    /**
      * 定时弹性策略
      */
    CronHorizontalAutoscaler?: Array<CronHorizontalAutoscaler>;
    /**
      * 是否启用log，1为启用，0为不启用
      */
    LogEnable?: number;
    /**
      * （除开镜像配置）配置是否修改
      */
    ConfEdited?: boolean;
    /**
      * 是否开启应用加速
      */
    SpeedUp?: boolean;
    /**
      * 启动探针配置
      */
    StartupProbe?: HealthCheckConfig;
    /**
      * 操作系统版本；
当选择openjdk时，可选参数：
- ALPINE
- CENTOS
当选择konajdk时，可选参数：
- ALPINE
- TENCENTOS
      */
    OsFlavour?: string;
    /**
      * 是否开启prometheus 业务指标监控
      */
    EnablePrometheusConf?: EnablePrometheusConf;
}
/**
 * Ingress 配置
 */
export interface IngressInfo {
    /**
      * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvironmentId: string;
    /**
      * 环境namespace
      */
    ClusterNamespace: string;
    /**
      * ip version
      */
    AddressIPVersion: string;
    /**
      * ingress name
      */
    IngressName: string;
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
      * 环境集群ID
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
    /**
      * 重定向模式，可选值：
- AUTO（自动重定向http到https）
- NONE（不使用重定向）
注意：此字段可能返回 null，表示取不到有效值。
      */
    RewriteType?: string;
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
 * DescribeEnvironments返回参数结构体
 */
export interface DescribeEnvironmentsResponse {
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
 * DescribeApplicationPods请求参数结构体
 */
export interface DescribeApplicationPodsRequest {
    /**
      * 环境id
      */
    EnvironmentId: string;
    /**
      * 应用id
      */
    ApplicationId: string;
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
 * CreateApplication请求参数结构体
 */
export interface CreateApplicationRequest {
    /**
      * 应用名
      */
    ApplicationName: string;
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
      * 应用所在子网
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
    /**
      * 是否开启 Java 应用的 APM 自动上报功能，1 表示启用；0 表示关闭
      */
    EnableTracing?: number;
    /**
      * 使用默认镜像服务额外参数
      */
    UseDefaultImageServiceParameters?: UseDefaultRepoParameters;
}
/**
 * 开启prometheus监控配置
 */
export interface EnablePrometheusConf {
    /**
      * 应用开放的监听端口
      */
    Port?: number;
    /**
      * 业务指标暴露的url path
      */
    Path?: string;
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
 * DescribeIngresses请求参数结构体
 */
export interface DescribeIngressesRequest {
    /**
      * 环境 id
      */
    EnvironmentId?: string;
    /**
      * 环境 namespace
      */
    ClusterNamespace?: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * ingress 规则名列表
      */
    IngressNames?: Array<string>;
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
 * 分批发布单批次详情
 */
export interface DeployServicePodDetail {
    /**
      * pod Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodId?: string;
    /**
      * pod状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodStatus?: Array<string>;
    /**
      * pod版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodVersion?: string;
    /**
      * pod创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * pod所在可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone?: string;
    /**
      * webshell地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Webshell?: string;
}
/**
 * ModifyApplicationReplicas返回参数结构体
 */
export interface ModifyApplicationReplicasResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyApplicationReplicas请求参数结构体
 */
export interface ModifyApplicationReplicasRequest {
    /**
      * 服务id
      */
    ApplicationId: string;
    /**
      * 环境ID
      */
    EnvironmentId: string;
    /**
      * 实例数量
      */
    Replicas: number;
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
 * 命名空间对象
 */
export interface TemNamespaceInfo {
    /**
      * 环境id
      */
    EnvironmentId: string;
    /**
      * 渠道
      */
    Channel: string;
    /**
      * 环境名称
      */
    EnvironmentName: string;
    /**
      * 区域名称
      */
    Region: string;
    /**
      * 环境描述
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
      * 应用数
      */
    ApplicationNum: number;
    /**
      * 运行实例数
      */
    RunInstancesNum: number;
    /**
      * 子网络
      */
    SubnetId: string;
    /**
      * 环境集群 status
      */
    ClusterStatus: string;
    /**
      * 是否开启tsw
      */
    EnableTswTraceService: boolean;
    /**
      * 环境锁，1为上锁，0则为上锁
      */
    Locked: number;
}
/**
 * GenerateApplicationPackageDownloadUrl返回参数结构体
 */
export interface GenerateApplicationPackageDownloadUrlResponse {
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
 * 定时伸缩策略
 */
export interface CronHorizontalAutoscaler {
    /**
      * 定时伸缩策略名称
      */
    Name: string;
    /**
      * 策略周期
* * *，三个范围，第一个是天，第二个是月，第三个是周，中间用空格隔开
例子：
* * * （每天）
* * 0-3 （每周日到周三）
1,11,21 * *（每个月1号，11号，21号）
      */
    Period: string;
    /**
      * 定时伸缩策略明细
      */
    Schedules: Array<CronHorizontalAutoscalerSchedule>;
    /**
      * 是否启用
      */
    Enabled: boolean;
    /**
      * 策略优先级，值越大优先级越高，0为最小值
      */
    Priority?: number;
}
/**
 * RollingUpdateApplicationByVersion返回参数结构体
 */
export interface RollingUpdateApplicationByVersionResponse {
    /**
      * 版本ID
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RollingUpdateApplicationByVersion请求参数结构体
 */
export interface RollingUpdateApplicationByVersionRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 环境ID
      */
    EnvironmentId: string;
    /**
      * 更新版本，IMAGE 部署为 tag 值；JAR/WAR 部署 为 Version
      */
    DeployVersion: string;
    /**
      * JAR/WAR 包名，仅 JAR/WAR 部署时必填
      */
    PackageName?: string;
    /**
      * 请求来源平台，含 IntelliJ，Coding
      */
    From?: string;
    /**
      * 部署策略，AUTO 为全自动；BETA 为小批量验证后自动；MANUAL 为全手动；
      */
    DeployStrategyType?: string;
    /**
      * 发布批次数
      */
    TotalBatchCount?: number;
    /**
      * 批次间隔时间
      */
    BatchInterval?: number;
    /**
      * 小批量验证批次的实例数
      */
    BetaBatchNum?: number;
    /**
      * 发布过程中保障的最小可用实例数
      */
    MinAvailable?: number;
}
/**
 * 应用实例
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
    /**
      * pod是否就绪
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ready: boolean;
    /**
      * 容器状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerState: string;
}
/**
 * DescribeDeployApplicationDetail返回参数结构体
 */
export interface DescribeDeployApplicationDetailResponse {
    /**
      * 分批发布结果详情
      */
    Result: TemDeployApplicationDetailInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * ModifyApplicationInfo请求参数结构体
 */
export interface ModifyApplicationInfoRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * 是否开启调用链, 0 为关闭，1位开启
      */
    EnableTracing?: number;
}
/**
 * ModifyApplicationInfo返回参数结构体
 */
export interface ModifyApplicationInfoResponse {
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
 * DeleteApplication返回参数结构体
 */
export interface DeleteApplicationResponse {
    /**
      * 返回结果
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * CreateEnvironment返回参数结构体
 */
export interface CreateEnvironmentResponse {
    /**
      * 成功时为环境ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * RestartApplication请求参数结构体
 */
export interface RestartApplicationRequest {
    /**
      * 服务id
      */
    ApplicationId: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
    /**
      * 环境ID
      */
    EnvironmentId?: string;
}
/**
 * CreateApplication返回参数结构体
 */
export interface CreateApplicationResponse {
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
 * 弹性伸缩策略
 */
export interface HorizontalAutoscaler {
    /**
      * 最小实例数
      */
    MinReplicas: number;
    /**
      * 最大实例数
      */
    MaxReplicas: number;
    /**
      * 指标度量（CPU or MEMORY）
      */
    Metrics: string;
    /**
      * 阈值（百分比）
      */
    Threshold: number;
}
/**
 * RevertDeployApplication请求参数结构体
 */
export interface RevertDeployApplicationRequest {
    /**
      * 需要回滚的服务id
      */
    ApplicationId?: string;
    /**
      * 需要回滚的服务所在环境id
      */
    EnvironmentId?: string;
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
 * ModifyEnvironment请求参数结构体
 */
export interface ModifyEnvironmentRequest {
    /**
      * 环境id
      */
    EnvironmentId: string;
    /**
      * 环境名称
      */
    EnvironmentName?: string;
    /**
      * 环境描述
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
 * 创建应用，创建仓库参数
 */
export interface UseDefaultRepoParameters {
    /**
      * 企业版实例名
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnterpriseInstanceName: string;
    /**
      * 企业版收费类型  0 按量收费   1 包年包月
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnterpriseInstanceChargeType: number;
    /**
      * 企业版规格：basic-基础班 ，standard-标准版，premium-高级版
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnterpriseInstanceType: string;
}
/**
 * RevertDeployApplication返回参数结构体
 */
export interface RevertDeployApplicationResponse {
    /**
      * 是否成功
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 分批策略：0-全自动，1-全手动，2-beta分批，beta批一定是手动的，3-首次发布
      */
    DeployStrategyType?: number;
    /**
      * 每批暂停间隔
      */
    BatchInterval?: number;
    /**
      * 最小可用实例数
      */
    MinAvailable?: number;
    /**
      * 是否强制发布
      */
    Force?: boolean;
}
/**
 * DescribeIngress请求参数结构体
 */
export interface DescribeIngressRequest {
    /**
      * 环境ID
      */
    EnvironmentId: string;
    /**
      * 环境namespace
      */
    ClusterNamespace: string;
    /**
      * ingress 规则名
      */
    IngressName: string;
    /**
      * 来源渠道
      */
    SourceChannel?: number;
}
/**
 * CreateCosToken请求参数结构体
 */
export interface CreateCosTokenRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
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
 * DescribeEnvironments请求参数结构体
 */
export interface DescribeEnvironmentsRequest {
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
 * StopApplication返回参数结构体
 */
export interface StopApplicationResponse {
    /**
      * 返回结果
      */
    Result: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
    ApplicationName?: string;
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
 * 定时伸缩策略明细
 */
export interface CronHorizontalAutoscalerSchedule {
    /**
      * 触发事件，小时分钟，用:分割
例如
00:00（零点零分触发）
      */
    StartAt: string;
    /**
      * 目标实例数（不大于50）
注意：此字段可能返回 null，表示取不到有效值。
      */
    TargetReplicas?: number;
}
/**
 * ResumeDeployApplication请求参数结构体
 */
export interface ResumeDeployApplicationRequest {
    /**
      * 需要开始下一批次的服务id
      */
    ApplicationId?: string;
    /**
      * 环境id
      */
    EnvironmentId?: string;
}
/**
 * DeployApplication返回参数结构体
 */
export interface DeployApplicationResponse {
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
 * CreateEnvironment请求参数结构体
 */
export interface CreateEnvironmentRequest {
    /**
      * 环境名称
      */
    EnvironmentName: string;
    /**
      * 私有网络名称
      */
    Vpc: string;
    /**
      * 子网列表
      */
    SubnetIds: Array<string>;
    /**
      * 环境描述
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
 * 键值对
 */
export interface Pair {
    /**
      * 键
      */
    Key: string;
    /**
      * 值
      */
    Value: string;
    /**
      * 类型，default 为自定义，reserved 为系统变量，referenced 为引用配置项
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 配置名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Config?: string;
    /**
      * 加密配置名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Secret?: string;
}
