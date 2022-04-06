/**
 * 自定义键值对
 */
export interface EventVar {
    /**
      * 自定义键
      */
    Name: string;
    /**
      * 自定义值
      */
    Value: string;
}
/**
 * 计算环境
 */
export interface AnonymousComputeEnv {
    /**
      * 计算环境管理类型
      */
    EnvType?: string;
    /**
      * 计算环境具体参数
      */
    EnvData?: EnvData;
    /**
      * 数据盘挂载选项
      */
    MountDataDisks?: Array<MountDataDisk>;
    /**
      * agent运行模式，适用于Windows系统
      */
    AgentRunningMode?: AgentRunningMode;
}
/**
 * DeleteComputeEnv返回参数结构体
 */
export interface DeleteComputeEnvResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SubmitJob请求参数结构体
 */
export interface SubmitJobRequest {
    /**
      * 作业所提交的位置信息。通过该参数可以指定作业关联CVM所属可用区等信息。
      */
    Placement: Placement;
    /**
      * 作业信息
      */
    Job: Job;
    /**
      * 用于保证请求幂等性的字符串。该字符串由用户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
      */
    ClientToken?: string;
}
/**
 * 计算环境属性数据
 */
export interface ComputeEnvData {
    /**
      * CVM实例类型列表
      */
    InstanceTypes: Array<string>;
}
/**
 * 授权认证信息
 */
export interface Authentication {
    /**
      * 授权场景，例如COS
      */
    Scene: string;
    /**
      * SecretId
      */
    SecretId: string;
    /**
      * SecretKey
      */
    SecretKey: string;
}
/**
 * RetryJobs返回参数结构体
 */
export interface RetryJobsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TerminateComputeNode请求参数结构体
 */
export interface TerminateComputeNodeRequest {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 计算节点ID
      */
    ComputeNodeId: string;
}
/**
 * DescribeTaskLogs请求参数结构体
 */
export interface DescribeTaskLogsRequest {
    /**
      * 作业ID
      */
    JobId: string;
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 任务实例集合
      */
    TaskInstanceIndexes?: Array<number>;
    /**
      * 起始任务实例
      */
    Offset?: number;
    /**
      * 最大任务实例数
      */
    Limit?: number;
}
/**
 * agent运行模式
 */
export interface AgentRunningMode {
    /**
      * 场景类型，支持WINDOWS
      */
    Scene: string;
    /**
      * 运行Agent的User
      */
    User: string;
    /**
      * 运行Agent的Session
      */
    Session: string;
}
/**
 * 计算环境数据
 */
export interface EnvData {
    /**
      * CVM实例类型，不能与InstanceTypes和InstanceTypeOptions同时出现。
      */
    InstanceType?: string;
    /**
      * CVM镜像ID
      */
    ImageId?: string;
    /**
      * 实例系统盘配置信息
      */
    SystemDisk?: SystemDisk;
    /**
      * 实例数据盘配置信息
      */
    DataDisks?: Array<DataDisk>;
    /**
      * 私有网络相关信息配置，与Zones和VirtualPrivateClouds不能同时指定。
      */
    VirtualPrivateCloud?: VirtualPrivateCloud;
    /**
      * 公网带宽相关信息设置
      */
    InternetAccessible?: InternetAccessible;
    /**
      * CVM实例显示名称
      */
    InstanceName?: string;
    /**
      * 实例登录设置
      */
    LoginSettings?: LoginSettings;
    /**
      * 实例所属安全组
      */
    SecurityGroupIds?: Array<string>;
    /**
      * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。
      */
    EnhancedService?: EnhancedService;
    /**
      * CVM实例计费类型<br><li>POSTPAID_BY_HOUR：按小时后付费<br><li>SPOTPAID：竞价付费<br>默认值：POSTPAID_BY_HOUR。
      */
    InstanceChargeType?: string;
    /**
      * 实例的市场相关选项，如竞价实例相关参数
      */
    InstanceMarketOptions?: InstanceMarketOptionsRequest;
    /**
      * CVM实例类型列表，不能与InstanceType和InstanceTypeOptions同时出现。指定该字段后，计算节点按照机型先后顺序依次尝试创建，直到实例创建成功，结束遍历过程。最多支持10个机型。
      */
    InstanceTypes?: Array<string>;
    /**
      * CVM实例机型配置。不能与InstanceType和InstanceTypes同时出现。
      */
    InstanceTypeOptions?: InstanceTypeOptions;
    /**
      * 可用区列表，支持跨可用区创建CVM实例。与VirtualPrivateCloud和VirtualPrivateClouds不能同时指定。
      */
    Zones?: Array<string>;
    /**
      * 私有网络列表，支持跨私有网络创建CVM实例。与VirtualPrivateCloud和Zones不能同时指定。
      */
    VirtualPrivateClouds?: Array<VirtualPrivateCloud>;
}
/**
 * DescribeTaskTemplates请求参数结构体
 */
export interface DescribeTaskTemplatesRequest {
    /**
      * 任务模板ID列表，与Filters参数不能同时指定。
      */
    TaskTemplateIds?: Array<string>;
    /**
      * 过滤条件
<li> task-template-name - String - 是否必填：否 -（过滤条件）按照任务模板名称过滤。</li>
<li> tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。</li>
<li> tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。</li>
<li> tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。</li>
与TaskTemplateIds参数不能同时指定。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 返回数量
      */
    Limit?: number;
}
/**
 * 通知信息
 */
export interface Notification {
    /**
      * CMQ主题名字，要求主题名有效且关联订阅
      */
    TopicName: string;
    /**
      * 事件配置
      */
    EventConfigs: Array<EventConfig>;
}
/**
 * 描述了操作系统所在块设备即系统盘的信息
 */
export interface SystemDisk {
    /**
      * 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><br>默认取值：当前有库存的硬盘类型。
      */
    DiskType?: string;
    /**
      * 系统盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。
      */
    DiskId?: string;
    /**
      * 系统盘大小，单位：GB。默认值为 50
      */
    DiskSize?: number;
    /**
      * 所属的独享集群ID。
      */
    CdcId?: string;
}
/**
 * 任务
 */
export interface Task {
    /**
      * 应用程序信息
      */
    Application: Application;
    /**
      * 任务名称，在一个作业内部唯一
      */
    TaskName?: string;
    /**
      * 任务实例运行个数
      */
    TaskInstanceNum?: number;
    /**
      * 运行环境信息，ComputeEnv 和 EnvId 必须指定一个（且只有一个）参数。
      */
    ComputeEnv?: AnonymousComputeEnv;
    /**
      * 计算环境ID，ComputeEnv 和 EnvId 必须指定一个（且只有一个）参数。
      */
    EnvId?: string;
    /**
      * 重定向信息
      */
    RedirectInfo?: RedirectInfo;
    /**
      * 重定向本地信息
      */
    RedirectLocalInfo?: RedirectLocalInfo;
    /**
      * 输入映射
      */
    InputMappings?: Array<InputMapping>;
    /**
      * 输出映射
      */
    OutputMappings?: Array<OutputMapping>;
    /**
      * 输出映射配置
      */
    OutputMappingConfigs?: Array<OutputMappingConfig>;
    /**
      * 自定义环境变量
      */
    EnvVars?: Array<EnvVar>;
    /**
      * 授权信息
      */
    Authentications?: Array<Authentication>;
    /**
      * TaskInstance失败后处理方式，取值包括TERMINATE（默认）、INTERRUPT、FAST_INTERRUPT。
      */
    FailedAction?: string;
    /**
      * 任务失败后的最大重试次数，默认为0
      */
    MaxRetryCount?: number;
    /**
      * 任务启动后的超时时间，单位秒，默认为86400秒
      */
    Timeout?: number;
    /**
      * 任务最大并发数限制，默认没有限制。
      */
    MaxConcurrentNum?: number;
    /**
      * 任务完成后，重启计算节点。适用于指定计算环境执行任务。
      */
    RestartComputeNode?: boolean;
    /**
      * 启动任务过程中，创建计算资源如CVM失败后的最大重试次数，默认为0。最大值100。
      */
    ResourceMaxRetryCount?: number;
}
/**
 * 批量计算可用的InstanceTypeConfig信息
 */
export interface InstanceTypeConfig {
    /**
      * 内存容量，单位：`GB`。
      */
    Mem: number;
    /**
      * CPU核数，单位：核。
      */
    Cpu: number;
    /**
      * 实例机型。
      */
    InstanceType: string;
    /**
      * 可用区。
      */
    Zone: string;
    /**
      * 实例机型系列。
      */
    InstanceFamily: string;
}
/**
 * 描述了实例登录相关配置与信息。
 */
export interface LoginSettings {
    /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：<br><li>Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? \/ ]中的特殊符号。<br><li>Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = { } [ ] : ; ' , . ? \/]中的特殊符号。<br><br>若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。
      */
    Password?: string;
    /**
      * 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。
      */
    KeyIds?: Array<string>;
    /**
      * 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：<br><li>TRUE：表示保持镜像的登录设置<br><li>FALSE：表示不保持镜像的登录设置<br><br>默认取值：FALSE。
      */
    KeepImageLogin?: string;
}
/**
 * TerminateComputeNodes返回参数结构体
 */
export interface TerminateComputeNodesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComputeEnvActivities返回参数结构体
 */
export interface DescribeComputeEnvActivitiesResponse {
    /**
      * 计算环境中的活动列表
      */
    ActivitySet: Array<Activity>;
    /**
      * 活动数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务实例统计指标
 */
export interface TaskInstanceMetrics {
    /**
      * Submitted个数
      */
    SubmittedCount: number;
    /**
      * Pending个数
      */
    PendingCount: number;
    /**
      * Runnable个数
      */
    RunnableCount: number;
    /**
      * Starting个数
      */
    StartingCount: number;
    /**
      * Running个数
      */
    RunningCount: number;
    /**
      * Succeed个数
      */
    SucceedCount: number;
    /**
      * FailedInterrupted个数
      */
    FailedInterruptedCount: number;
    /**
      * Failed个数
      */
    FailedCount: number;
}
/**
 * 任务实例日志详情。
 */
export interface TaskInstanceLog {
    /**
      * 任务实例
      */
    TaskInstanceIndex: number;
    /**
      * 标准输出日志（Base64编码，解码后最大日志长度2048字节）
注意：此字段可能返回 null，表示取不到有效值。
      */
    StdoutLog: string;
    /**
      * 标准错误日志（Base64编码，解码后最大日志长度2048字节）
注意：此字段可能返回 null，表示取不到有效值。
      */
    StderrLog: string;
    /**
      * 标准输出重定向路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    StdoutRedirectPath: string;
    /**
      * 标准错误重定向路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    StderrRedirectPath: string;
    /**
      * 标准输出重定向文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
    StdoutRedirectFileName: string;
    /**
      * 标准错误重定向文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
    StderrRedirectFileName: string;
}
/**
 * 数据盘挂载选项
 */
export interface MountDataDisk {
    /**
      * 挂载点，Linux系统合法路径，或Windows系统盘符,比如"H:\\"
      */
    LocalPath: string;
    /**
      * 文件系统类型，Linux系统下支持"EXT3"和"EXT4"两种，默认"EXT3"；Windows系统下仅支持"NTFS"
      */
    FileSystemType?: string;
}
/**
 * 任务视图信息
 */
export interface TaskView {
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 任务状态
      */
    TaskState: string;
    /**
      * 开始时间
      */
    CreateTime: string;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime?: string;
}
/**
 * 标签。
 */
export interface Tag {
    /**
      * 标签键。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 标签值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 扩展数据
 */
export interface Externals {
    /**
      * 释放地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseAddress?: boolean;
    /**
      * 不支持的网络类型，取值范围：<br><li>BASIC：基础网络<br><li>VPC1.0：私有网络VPC1.0
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnsupportNetworks?: Array<string>;
    /**
      * HDD本地存储属性
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageBlockAttr?: StorageBlock;
}
/**
 * 操作系统类型
 */
export interface OsInfo {
    /**
      * 操作系统ID。
      */
    OsTypeId: number;
    /**
      * 操作系统名称。
      */
    OsName: string;
    /**
      * 操作系统名称描述。
      */
    OsDescription: string;
    /**
      * 操作系统英文名称。
      */
    OsEnglishDescription: string;
    /**
      * 操作系统的分类，如CentOs Debian。
      */
    OsClass: string;
    /**
      * 标识镜像分类。public:公共镜像; private: 专属镜像。
      */
    ImageTag: string;
    /**
      * 操作系统，ext4文件下所支持的最大的磁盘大小。单位为T。
      */
    MaxPartitionSize: number;
}
/**
 * DescribeComputeEnv返回参数结构体
 */
export interface DescribeComputeEnvResponse {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 计算环境名称
      */
    EnvName: string;
    /**
      * 位置信息
      */
    Placement: Placement;
    /**
      * 计算环境创建时间
      */
    CreateTime: string;
    /**
      * 计算节点列表信息
      */
    ComputeNodeSet: Array<ComputeNode>;
    /**
      * 计算节点统计指标
      */
    ComputeNodeMetrics: ComputeNodeMetrics;
    /**
      * 计算节点期望个数
      */
    DesiredComputeNodeCount: number;
    /**
      * 计算环境类型
      */
    EnvType: string;
    /**
      * 计算环境资源类型，当前为CVM和CPM（黑石）
      */
    ResourceType: string;
    /**
      * 下一步动作
      */
    NextAction: string;
    /**
      * 用户添加到计算环境中的计算节点个数
      */
    AttachedComputeNodeCount: number;
    /**
      * 计算环境绑定的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCpmOsInfo返回参数结构体
 */
export interface DescribeCpmOsInfoResponse {
    /**
      * 操作系统信息列表。
      */
    OsInfoSet: Array<OsInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TerminateJob请求参数结构体
 */
export interface TerminateJobRequest {
    /**
      * 作业ID
      */
    JobId: string;
}
/**
 * DetachInstances返回参数结构体
 */
export interface DetachInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 应用程序信息
 */
export interface Application {
    /**
      * 任务执行命令
      */
    Command: string;
    /**
      * 应用程序的交付方式，包括PACKAGE、LOCAL 两种取值，分别指远程存储的软件包、计算环境本地。
      */
    DeliveryForm: string;
    /**
      * 应用程序软件包的远程存储路径
      */
    PackagePath?: string;
    /**
      * 应用使用Docker的相关配置。在使用Docker配置的情况下，DeliveryForm 为 LOCAL 表示直接使用Docker镜像内部的应用软件，通过Docker方式运行；DeliveryForm 为 PACKAGE，表示将远程应用包注入到Docker镜像后，通过Docker方式运行。为避免Docker不同版本的兼容性问题，Docker安装包及相关依赖由Batch统一负责，对于已安装Docker的自定义镜像，请卸载后再使用Docker特性。
      */
    Docker?: Docker;
}
/**
 * 黑石计算环境数据
 */
export interface EnvDataCpm {
    /**
      * 黑石可用区名称列表。如ap-guangzhou-bls-1, 可通过黑石接口[DescribeRegions]( https://cloud.tencent.com/document/api/386/33564)接口获取。不是Batch可用区名称。目前仅支持一个可用区名称。
      */
    Zones: Array<string>;
    /**
      * 购买的机型ID。通过黑石接口[DescribeDeviceClass]( https://cloud.tencent.com/document/api/386/32911)查询设备型号，获取机型信息。
      */
    InstanceTypes: Array<string>;
    /**
      * 购买时长单位，取值：m(月)。
      */
    TimeUnit: string;
    /**
      * 购买时长。
      */
    TimeSpan: number;
    /**
      * RAID类型ID。通过黑石接口[DescribeDeviceClassPartition]( https://cloud.tencent.com/document/api/386/32910)查询机型RAID方式以及系统盘大小，获取RAID信息。
      */
    RaidId: number;
    /**
      * 部署服务器的操作系统ID。通过批量计算接口DescribeCpmOsInfo查询操作系统信息。
      */
    OsTypeId: number;
    /**
      * 黑石VPC列表，目前仅支持一个VPC。
      */
    VirtualPrivateClouds: Array<CpmVirtualPrivateCloud>;
    /**
      * 是否安装安全Agent，取值：1(安装) 0(不安装)，默认取值0。
      */
    NeedSecurityAgent?: number;
    /**
      * 是否安装监控Agent，取值：1(安装) 0(不安装)，默认取值0。
      */
    NeedMonitorAgent?: number;
    /**
      * 自动续费标志位，取值：1(自动续费) 0(不自动续费)，默认取值0。
      */
    AutoRenewFlag?: number;
    /**
      * 数据盘是否格式化，取值：1(格式化) 0(不格式化)，默认取值为1。
      */
    IsZoning?: number;
    /**
      * 指定数据盘的文件系统格式，当前支持 ext4和xfs选项， 默认为ext4。 参数适用于数据盘和Linux， 且在IsZoning为1时生效。
      */
    FileSystem?: string;
    /**
      * 设置Linux root或Windows Administrator的密码。若不设置此参数，默认情况下会随机生成密码，并以站内信方式通知到用户。
      */
    Password?: string;
    /**
      * 是否分配弹性公网IP，取值：1(分配) 0(不分配)，默认取值0。
      */
    ApplyEip?: number;
    /**
      * 弹性公网IP计费模式，取值：flow(按流量计费) bandwidth(按带宽计费)，默认取值flow。
      */
    EipPayMode?: string;
    /**
      * 弹性公网IP带宽限制，单位Mb。
      */
    EipBandwidth?: number;
    /**
      * 自定义镜像ID，取值生效时用自定义镜像部署物理机。
      */
    ImageId?: string;
    /**
      * 系统盘根分区大小，单位为G，默认取值10G。通过黑石接口[DescribeDeviceClassPartition]( https://cloud.tencent.com/document/api/386/32910)查询机型RAID方式以及系统盘大小，获取根分区信息。
      */
    SysRootSpace?: number;
    /**
      * /data分区大小，单位为G。如果系统盘还有剩余大小，会分配给/data分区。（特殊情况：如果剩余空间不足10G，并且没有指定/data分区，则剩余空间会分配给Root分区）。
      */
    SysDataSpace?: number;
    /**
      * 是否开启超线程，取值：1(开启) 0(关闭)，默认取值1。
      */
    HyperThreading?: number;
    /**
      * 指定的内网IP列表，不指定时自动分配。
      */
    LanIps?: Array<string>;
}
/**
 * 输出映射配置
 */
export interface OutputMappingConfig {
    /**
      * 存储类型，仅支持COS
      */
    Scene: string;
    /**
      * 并行worker数量
      */
    WorkerNum: number;
    /**
      * worker分块大小，单位MB
      */
    WorkerPartSize: number;
}
/**
 * AttachInstances返回参数结构体
 */
export interface AttachInstancesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 计算节点统计指标
 */
export interface ComputeNodeMetrics {
    /**
      * 已经完成提交的计算节点数量
      */
    SubmittedCount: number;
    /**
      * 创建中的计算节点数量
      */
    CreatingCount: number;
    /**
      * 创建失败的计算节点数量
      */
    CreationFailedCount: number;
    /**
      * 完成创建的计算节点数量
      */
    CreatedCount: number;
    /**
      * 运行中的计算节点数量
      */
    RunningCount: number;
    /**
      * 销毁中的计算节点数量
      */
    DeletingCount: number;
    /**
      * 异常的计算节点数量
      */
    AbnormalCount: number;
}
/**
 * 任务统计指标
 */
export interface TaskMetrics {
    /**
      * Submitted个数
      */
    SubmittedCount: number;
    /**
      * Pending个数
      */
    PendingCount: number;
    /**
      * Runnable个数
      */
    RunnableCount: number;
    /**
      * Starting个数
      */
    StartingCount: number;
    /**
      * Running个数
      */
    RunningCount: number;
    /**
      * Succeed个数
      */
    SucceedCount: number;
    /**
      * FailedInterrupted个数
      */
    FailedInterruptedCount: number;
    /**
      * Failed个数
      */
    FailedCount: number;
}
/**
 * TerminateComputeNodes请求参数结构体
 */
export interface TerminateComputeNodesRequest {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 计算节点ID列表
      */
    ComputeNodeIds: Array<string>;
}
/**
 * 本地磁盘规格
 */
export interface LocalDiskType {
    /**
      * 本地磁盘类型。
      */
    Type: string;
    /**
      * 本地磁盘属性。
      */
    PartitionType: string;
    /**
      * 本地磁盘最小值。
      */
    MinSize: number;
    /**
      * 本地磁盘最大值。
      */
    MaxSize: number;
    /**
      * 购买时本地盘是否为必选。取值范围：<br><li>REQUIRED：表示必选<br><li>OPTIONAL：表示可选。
      */
    Required: string;
}
/**
 * DescribeComputeEnvActivities请求参数结构体
 */
export interface DescribeComputeEnvActivitiesRequest {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 返回数量
      */
    Limit?: number;
    /**
      * 过滤条件
<li> compute-node-id - String - 是否必填：否 -（过滤条件）按照计算节点ID过滤。</li>
      */
    Filters?: Filter;
}
/**
 * CreateTaskTemplate请求参数结构体
 */
export interface CreateTaskTemplateRequest {
    /**
      * 任务模板名称
      */
    TaskTemplateName: string;
    /**
      * 任务模板内容，参数要求与任务一致
      */
    TaskTemplateInfo: Task;
    /**
      * 任务模板描述
      */
    TaskTemplateDescription?: string;
    /**
      * 标签列表。通过指定该参数可以支持绑定标签到任务模板。每个任务模板最多绑定10个标签。
      */
    Tags?: Array<Tag>;
}
/**
 * 作业
 */
export interface Job {
    /**
      * 任务信息
      */
    Tasks: Array<Task>;
    /**
      * 作业名称
      */
    JobName?: string;
    /**
      * 作业描述
      */
    JobDescription?: string;
    /**
      * 作业优先级，任务（Task）和任务实例（TaskInstance）会继承作业优先级
      */
    Priority?: number;
    /**
      * 依赖信息
      */
    Dependences?: Array<Dependence>;
    /**
      * 通知信息
      */
    Notifications?: Array<Notification>;
    /**
      * 对于存在依赖关系的任务中，后序任务执行对于前序任务的依赖条件。取值范围包括 PRE_TASK_SUCCEED，PRE_TASK_AT_LEAST_PARTLY_SUCCEED，PRE_TASK_FINISHED，默认值为PRE_TASK_SUCCEED。
      */
    TaskExecutionDependOn?: string;
    /**
      * 表示创建 CVM 失败按照何种策略处理。取值范围包括 FAILED，RUNNABLE。FAILED 表示创建 CVM 失败按照一次执行失败处理，RUNNABLE 表示创建 CVM 失败按照继续等待处理。默认值为FAILED。StateIfCreateCvmFailed对于提交的指定计算环境的作业无效。
      */
    StateIfCreateCvmFailed?: string;
    /**
      * 标签列表。通过指定该参数可以支持绑定标签到作业。每个作业最多绑定10个标签。
      */
    Tags?: Array<Tag>;
    /**
      * 表示通知信息的通知目标类型。
取值范围：CMQ，TDMQ_CMQ。
CMQ:表示向腾讯云CMQ发送消息。
TDMQ_CMQ：表示向腾讯云TDMQ_CMQ发送消息。<br/>默认值为CMQ。<br/>注：腾讯云计划于2022年6月前正式下线消息队列 CMQ，建议使用TDMQ_CMQ。参考文档：[CMQ迁移到TDMQ_CMQ](https://cloud.tencent.com/document/product/406/60860)
      */
    NotificationTarget?: string;
}
/**
 * DeleteComputeEnv请求参数结构体
 */
export interface DeleteComputeEnvRequest {
    /**
      * 计算环境ID
      */
    EnvId: string;
}
/**
 * CreateComputeEnv请求参数结构体
 */
export interface CreateComputeEnvRequest {
    /**
      * 计算环境信息
      */
    ComputeEnv: NamedComputeEnv;
    /**
      * 位置信息
      */
    Placement: Placement;
    /**
      * 用于保证请求幂等性的字符串。该字符串由用户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
      */
    ClientToken?: string;
}
/**
 * DescribeComputeEnvCreateInfo返回参数结构体
 */
export interface DescribeComputeEnvCreateInfoResponse {
    /**
      * 计算环境 ID
      */
    EnvId: string;
    /**
      * 计算环境名称
      */
    EnvName: string;
    /**
      * 计算环境描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvDescription: string;
    /**
      * 计算环境类型，仅支持“MANAGED”类型
      */
    EnvType: string;
    /**
      * 计算环境参数
      */
    EnvData: EnvData;
    /**
      * 数据盘挂载选项
      */
    MountDataDisks: Array<MountDataDisk>;
    /**
      * 输入映射
      */
    InputMappings: Array<InputMapping>;
    /**
      * 授权信息
      */
    Authentications: Array<Authentication>;
    /**
      * 通知信息
      */
    Notifications: Array<Notification>;
    /**
      * 计算节点期望个数
      */
    DesiredComputeNodeCount: number;
    /**
      * 计算环境绑定的标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TerminateJob返回参数结构体
 */
export interface TerminateJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 计算环境创建信息。
 */
export interface ComputeEnvCreateInfo {
    /**
      * 计算环境 ID
      */
    EnvId: string;
    /**
      * 计算环境名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvName: string;
    /**
      * 计算环境描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvDescription: string;
    /**
      * 计算环境类型，仅支持“MANAGED”类型
      */
    EnvType: string;
    /**
      * 计算环境参数
      */
    EnvData: EnvData;
    /**
      * 数据盘挂载选项
注意：此字段可能返回 null，表示取不到有效值。
      */
    MountDataDisks: Array<MountDataDisk>;
    /**
      * 输入映射
注意：此字段可能返回 null，表示取不到有效值。
      */
    InputMappings: Array<InputMapping>;
    /**
      * 授权信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Authentications: Array<Authentication>;
    /**
      * 通知信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Notifications: Array<Notification>;
    /**
      * 计算节点期望个数
      */
    DesiredComputeNodeCount: number;
    /**
      * 计算环境标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
}
/**
 * DescribeComputeEnvCreateInfos请求参数结构体
 */
export interface DescribeComputeEnvCreateInfosRequest {
    /**
      * 计算环境ID列表，与Filters参数不能同时指定。
      */
    EnvIds?: Array<string>;
    /**
      * 过滤条件
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> env-id - String - 是否必填：否 -（过滤条件）按照计算环境ID过滤。</li>
<li> env-name - String - 是否必填：否 -（过滤条件）按照计算环境名称过滤。</li>
与EnvIds参数不能同时指定。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 返回数量
      */
    Limit?: number;
}
/**
 * DescribeComputeEnv请求参数结构体
 */
export interface DescribeComputeEnvRequest {
    /**
      * 计算环境ID
      */
    EnvId: string;
}
/**
 * 竞价请求相关选项
 */
export interface InstanceMarketOptionsRequest {
    /**
      * 竞价相关选项
      */
    SpotOptions: SpotMarketOptions;
    /**
      * 市场选项类型，当前只支持取值：spot
      */
    MarketType?: string;
}
/**
 * DescribeTaskTemplates返回参数结构体
 */
export interface DescribeTaskTemplatesResponse {
    /**
      * 任务模板列表
      */
    TaskTemplateSet: Array<TaskTemplateView>;
    /**
      * 任务模板数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCpmComputeEnv返回参数结构体
 */
export interface CreateCpmComputeEnvResponse {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteJob请求参数结构体
 */
export interface DeleteJobRequest {
    /**
      * 作业ID
      */
    JobId: string;
}
/**
 * CreateCpmComputeEnv请求参数结构体
 */
export interface CreateCpmComputeEnvRequest {
    /**
      * 计算环境信息
      */
    ComputeEnv: NamedCpmComputeEnv;
    /**
      * 位置信息
      */
    Placement?: Placement;
    /**
      * 用于保证请求幂等性的字符串。该字符串由用户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。
      */
    ClientToken?: string;
}
/**
 * DescribeTaskLogs返回参数结构体
 */
export interface DescribeTaskLogsResponse {
    /**
      * 任务实例总数
      */
    TotalCount: number;
    /**
      * 任务实例日志详情集合
      */
    TaskInstanceLogSet: Array<TaskInstanceLog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 黑石计算环境
 */
export interface NamedCpmComputeEnv {
    /**
      * 计算环境名称
      */
    EnvName: string;
    /**
      * 计算环境具体参数
      */
    EnvData: EnvDataCpm;
    /**
      * 计算节点期望个数
      */
    DesiredComputeNodeCount: number;
    /**
      * 计算环境描述
      */
    EnvDescription?: string;
    /**
      * 计算环境管理类型， 取值MANAGED。
      */
    EnvType?: string;
    /**
      * 授权信息
      */
    Authentications?: Array<Authentication>;
    /**
      * 输入映射信息
      */
    InputMappings?: Array<InputMapping>;
    /**
      * 通知信息
      */
    Notifications?: Notification;
    /**
      * 非活跃节点处理策略，默认“RECREATE”，即对于实例创建失败或异常退还的计算节点，定期重新创建实例资源。
      */
    ActionIfComputeNodeInactive?: string;
    /**
      * 对于实例创建失败或异常退还的计算节点，定期重新创建实例资源的最大重试次数，最大值100，如果不设置的话，系统会设置一个默认值，当前为7。
      */
    ResourceMaxRetryCount?: number;
    /**
      * 标签列表。通过指定该参数可以支持绑定标签到黑石计算环境。每个黑石计算环境最多绑定10个标签。
      */
    Tags?: Array<Tag>;
    /**
      * 表示通知信息的通知目标类型。
取值范围：CMQ，TDMQ_CMQ。
CMQ:表示向腾讯云CMQ发送消息。
TDMQ_CMQ：表示向腾讯云TDMQ_CMQ发送消息。<br/>默认值为CMQ。<br/>注：腾讯云计划于2022年6月前正式下线消息队列 CMQ，建议使用TDMQ_CMQ。参考文档：[CMQ迁移到TDMQ_CMQ](https://cloud.tencent.com/document/product/406/60860)
      */
    NotificationTarget?: string;
}
/**
 * DeleteTaskTemplates请求参数结构体
 */
export interface DeleteTaskTemplatesRequest {
    /**
      * 用于删除任务模板信息
      */
    TaskTemplateIds: Array<string>;
}
/**
 * DescribeJob返回参数结构体
 */
export interface DescribeJobResponse {
    /**
      * 作业ID
      */
    JobId: string;
    /**
      * 作业名称
      */
    JobName: string;
    /**
      * 可用区信息
      */
    Zone: string;
    /**
      * 作业优先级
      */
    Priority: number;
    /**
      * 作业状态
      */
    JobState: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 任务视图信息
      */
    TaskSet: Array<TaskView>;
    /**
      * 任务间依赖信息
      */
    DependenceSet: Array<Dependence>;
    /**
      * 任务统计指标
      */
    TaskMetrics: TaskMetrics;
    /**
      * 任务实例统计指标
      */
    TaskInstanceMetrics: TaskInstanceMetrics;
    /**
      * 作业失败原因
      */
    StateReason: string;
    /**
      * 作业绑定的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 下一步动作
注意：此字段可能返回 null，表示取不到有效值。
      */
    NextAction: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComputeEnvCreateInfo请求参数结构体
 */
export interface DescribeComputeEnvCreateInfoRequest {
    /**
      * 计算环境ID
      */
    EnvId: string;
}
/**
 * ModifyTaskTemplate请求参数结构体
 */
export interface ModifyTaskTemplateRequest {
    /**
      * 任务模板ID
      */
    TaskTemplateId: string;
    /**
      * 任务模板名称
      */
    TaskTemplateName?: string;
    /**
      * 任务模板描述
      */
    TaskTemplateDescription?: string;
    /**
      * 任务模板信息
      */
    TaskTemplateInfo?: Task;
}
/**
 * DescribeCpmOsInfo请求参数结构体
 */
export interface DescribeCpmOsInfoRequest {
    /**
      * 黑石设备类型代号。 可以从[DescribeDeviceClass](https://cloud.tencent.com/document/api/386/32911)查询设备类型列表。
      */
    DeviceClassCode?: string;
}
/**
 * 描述了数据盘的信息
 */
export interface DataDisk {
    /**
      * 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。
      */
    DiskSize: number;
    /**
      * 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定<br><li>LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_HSSD：增强型SSD云硬盘<br><li>CLOUD_TSSD：极速型SSD云硬盘<br><br>默认取值：LOCAL_BASIC。<br><br>该参数对`ResizeInstanceDisk`接口无效。
      */
    DiskType?: string;
    /**
      * 数据盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID，暂时不支持该参数。
该参数目前仅用于`DescribeInstances`接口。
      */
    DiskId?: string;
    /**
      * 数据盘是否随子机销毁。取值范围：
<li>TRUE：子机销毁时，销毁数据盘，只支持按小时后付费云盘
<li>FALSE：子机销毁时，保留数据盘<br>
默认取值：TRUE<br>
该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeleteWithInstance?: boolean;
    /**
      * 数据盘快照ID。选择的数据盘快照大小需小于数据盘大小。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotId?: string;
    /**
      * 数据盘是加密。取值范围：
<li>TRUE：加密
<li>FALSE：不加密<br>
默认取值：FALSE<br>
该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Encrypt?: boolean;
    /**
      * 自定义CMK对应的ID，取值为UUID或者类似kms-abcd1234。用于加密云盘。

该参数目前仅用于 `RunInstances` 接口。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KmsKeyId?: string;
    /**
      * 云硬盘性能，单位：MB/s
注意：此字段可能返回 null，表示取不到有效值。
      */
    ThroughputPerformance?: number;
    /**
      * 所属的独享集群ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CdcId?: string;
}
/**
 * 计算环境
 */
export interface NamedComputeEnv {
    /**
      * 计算环境名称
      */
    EnvName: string;
    /**
      * 计算节点期望个数
      */
    DesiredComputeNodeCount: number;
    /**
      * 计算环境描述
      */
    EnvDescription?: string;
    /**
      * 计算环境管理类型
      */
    EnvType?: string;
    /**
      * 计算环境具体参数
      */
    EnvData?: EnvData;
    /**
      * 数据盘挂载选项
      */
    MountDataDisks?: Array<MountDataDisk>;
    /**
      * 授权信息
      */
    Authentications?: Array<Authentication>;
    /**
      * 输入映射信息
      */
    InputMappings?: Array<InputMapping>;
    /**
      * agent运行模式，适用于Windows系统
      */
    AgentRunningMode?: AgentRunningMode;
    /**
      * 通知信息
      */
    Notifications?: Array<Notification>;
    /**
      * 非活跃节点处理策略，默认“RECREATE”，即对于实例创建失败或异常退还的计算节点，定期重新创建实例资源。
      */
    ActionIfComputeNodeInactive?: string;
    /**
      * 对于实例创建失败或异常退还的计算节点，定期重新创建实例资源的最大重试次数，最大值100，如果不设置的话，系统会设置一个默认值，当前为7
      */
    ResourceMaxRetryCount?: number;
    /**
      * 标签列表。通过指定该参数可以支持绑定标签到计算环境。每个计算环境最多绑定10个标签。
      */
    Tags?: Array<Tag>;
    /**
      * 表示通知信息的通知目标类型。
取值范围：CMQ，TDMQ_CMQ。
CMQ:表示向腾讯云CMQ发送消息。
TDMQ_CMQ：表示向腾讯云TDMQ_CMQ发送消息。<br/>默认值为CMQ。<br/>注：腾讯云计划于2022年6月前正式下线消息队列 CMQ，建议使用TDMQ_CMQ。参考文档：[CMQ迁移到TDMQ_CMQ](https://cloud.tencent.com/document/product/406/60860)
      */
    NotificationTarget?: string;
}
/**
 * DeleteJob返回参数结构体
 */
export interface DeleteJobResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 事件配置
 */
export interface EventConfig {
    /**
      * 事件类型，包括：<br/><li>“JOB_RUNNING”：作业运行，适用于"SubmitJob"。</li><li>“JOB_SUCCEED”：作业成功，适用于"SubmitJob"。</li><li>“JOB_FAILED”：作业失败，适用于"SubmitJob"。</li><li>“JOB_FAILED_INTERRUPTED”：作业失败，保留实例，适用于"SubmitJob"。</li><li>“TASK_RUNNING”：任务运行，适用于"SubmitJob"。</li><li>“TASK_SUCCEED”：任务成功，适用于"SubmitJob"。</li><li>“TASK_FAILED”：任务失败，适用于"SubmitJob"。</li><li>“TASK_FAILED_INTERRUPTED”：任务失败，保留实例，适用于"SubmitJob"。</li><li>“TASK_INSTANCE_RUNNING”：任务实例运行，适用于"SubmitJob"。</li><li>“TASK_INSTANCE_SUCCEED”：任务实例成功，适用于"SubmitJob"。</li><li>“TASK_INSTANCE_FAILED”：任务实例失败，适用于"SubmitJob"。</li><li>“TASK_INSTANCE_FAILED_INTERRUPTED”：任务实例失败，保留实例，适用于"SubmitJob"。</li><li>“COMPUTE_ENV_CREATED”：计算环境已创建，适用于"CreateComputeEnv"。</li><li>“COMPUTE_ENV_DELETED”：计算环境已删除，适用于"CreateComputeEnv"。</li><li>“COMPUTE_NODE_CREATED”：计算节点已创建，适用于"CreateComputeEnv"和"SubmitJob"。</li><li>“COMPUTE_NODE_CREATION_FAILED”：计算节点创建失败，适用于"CreateComputeEnv"和"SubmitJob"。</li><li>“COMPUTE_NODE_RUNNING”：计算节点运行中，适用于"CreateComputeEnv"和"SubmitJob"。</li><li>“COMPUTE_NODE_ABNORMAL”：计算节点异常，适用于"CreateComputeEnv"和"SubmitJob"。</li><li>“COMPUTE_NODE_DELETING”：计算节点已删除，适用于"CreateComputeEnv"和"SubmitJob"。</li>
      */
    EventName: string;
    /**
      * 自定义键值对
      */
    EventVars: Array<EventVar>;
}
/**
 * 竞价相关选项
 */
export interface SpotMarketOptions {
    /**
      * 竞价出价
      */
    MaxPrice: string;
    /**
      * 竞价请求类型，当前仅支持类型：one-time
      */
    SpotInstanceType?: string;
}
/**
 * 黑石私有网络
 */
export interface CpmVirtualPrivateCloud {
    /**
      * 黑石私有网络ID
      */
    VpcId: string;
    /**
      * 黑石子网ID
      */
    SubnetId: string;
}
/**
 * DetachInstances请求参数结构体
 */
export interface DetachInstancesRequest {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 实例ID列表
      */
    InstanceIds: Array<string>;
}
/**
 * 描述实例的信息
 */
export interface Instance {
    /**
      * 实例ID
      */
    InstanceId: string;
    /**
      * 镜像ID
      */
    ImageId?: string;
    /**
      * 实例登录设置。
      */
    LoginSettings?: LoginSettings;
}
/**
 * 输出映射
 */
export interface OutputMapping {
    /**
      * 源端路径
      */
    SourcePath: string;
    /**
      * 目的端路径
      */
    DestinationPath: string;
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
 * 描述了 “云自动化助手” 服务相关的信息
 */
export interface RunAutomationServiceEnabled {
    /**
      * 是否开启云自动化助手。取值范围：<br><li>TRUE：表示开启云自动化助手服务<br><li>FALSE：表示不开启云自动化助手服务<br><br>默认取值：FALSE。
      */
    Enabled?: boolean;
}
/**
 * DescribeJobSubmitInfo返回参数结构体
 */
export interface DescribeJobSubmitInfoResponse {
    /**
      * 作业ID
      */
    JobId: string;
    /**
      * 作业名称
      */
    JobName: string;
    /**
      * 作业描述
      */
    JobDescription: string;
    /**
      * 作业优先级，任务（Task）和任务实例（TaskInstance）会继承作业优先级
      */
    Priority: number;
    /**
      * 任务信息
      */
    Tasks: Array<Task>;
    /**
      * 依赖信息
      */
    Dependences: Array<Dependence>;
    /**
      * 作业绑定的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeComputeEnvCreateInfos返回参数结构体
 */
export interface DescribeComputeEnvCreateInfosResponse {
    /**
      * 计算环境数量
      */
    TotalCount: number;
    /**
      * 计算环境创建信息列表
      */
    ComputeEnvCreateInfoSet: Array<ComputeEnvCreateInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DescribeJob请求参数结构体
 */
export interface DescribeJobRequest {
    /**
      * 作业标识
      */
    JobId: string;
}
/**
 * 重定向信息

 */
export interface RedirectInfo {
    /**
      * 标准输出重定向路径
      */
    StdoutRedirectPath?: string;
    /**
      * 标准错误重定向路径
      */
    StderrRedirectPath?: string;
    /**
      * 标准输出重定向文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX}
      */
    StdoutRedirectFileName?: string;
    /**
      * 标准错误重定向文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX}
      */
    StderrRedirectFileName?: string;
}
/**
 * DescribeInstanceCategories返回参数结构体
 */
export interface DescribeInstanceCategoriesResponse {
    /**
      * CVM实例分类列表
      */
    InstanceCategorySet?: Array<InstanceCategoryItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTaskTemplate返回参数结构体
 */
export interface ModifyTaskTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SubmitJob返回参数结构体
 */
export interface SubmitJobResponse {
    /**
      * 当通过本接口来提交作业时会返回该参数，表示一个作业ID。返回作业ID列表并不代表作业解析/运行成功，可根据 DescribeJob 接口查询其状态。
      */
    JobId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 输入映射
 */
export interface InputMapping {
    /**
      * 源端路径
      */
    SourcePath: string;
    /**
      * 目的端路径
      */
    DestinationPath: string;
    /**
      * 挂载配置项参数
      */
    MountOptionParameter?: string;
}
/**
 * 本地重定向信息
 */
export interface RedirectLocalInfo {
    /**
      * 标准输出重定向本地路径
      */
    StdoutLocalPath?: string;
    /**
      * 标准错误重定向本地路径
      */
    StderrLocalPath?: string;
    /**
      * 标准输出重定向本地文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX}
      */
    StdoutLocalFileName?: string;
    /**
      * 标准错误重定向本地文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX}
      */
    StderrLocalFileName?: string;
}
/**
 * DescribeJobSubmitInfo请求参数结构体
 */
export interface DescribeJobSubmitInfoRequest {
    /**
      * 作业ID
      */
    JobId: string;
}
/**
 * 依赖关系
 */
export interface Dependence {
    /**
      * 依赖关系的起点任务名称
      */
    StartTask: string;
    /**
      * 依赖关系的终点任务名称
      */
    EndTask: string;
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
 * CreateComputeEnv返回参数结构体
 */
export interface CreateComputeEnvResponse {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Docker容器信息
 */
export interface Docker {
    /**
      * Docker Hub 用户名或 Tencent Registry 用户名
      */
    User: string;
    /**
      * Docker Hub 密码或 Tencent Registry 密码
      */
    Password: string;
    /**
      * Docker Hub填写“[user/repo]:[tag]”，Tencent Registry填写“ccr.ccs.tencentyun.com/[namespace/repo]:[tag]”
      */
    Image: string;
    /**
      * Docker Hub 可以不填，但确保具有公网访问能力。或者是 Tencent Registry 服务地址“ccr.ccs.tencentyun.com”
      */
    Server?: string;
}
/**
 * ModifyComputeEnv返回参数结构体
 */
export interface ModifyComputeEnvResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅CDH产品可用），母机ip等
 */
export interface Placement {
    /**
      * 实例所属的可用区ID。该参数可以通过调用  [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。
      */
    Zone: string;
    /**
      * 实例所属项目ID。该参数可以通过调用 [DescribeProject](/document/api/378/4400) 的返回值中的 projectId 字段来获取。不填为默认项目。
      */
    ProjectId?: number;
    /**
      * 实例所属的专用宿主机ID列表，仅用于入参。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。
      */
    HostIds?: Array<string>;
    /**
      * 指定母机ip生产子机
      */
    HostIps?: Array<string>;
    /**
      * 实例所属的专用宿主机ID，仅用于出参。
      */
    HostId?: string;
}
/**
 * 计算节点
 */
export interface ComputeNode {
    /**
      * 计算节点ID
      */
    ComputeNodeId: string;
    /**
      * 计算节点实例ID，对于CVM场景，即为CVM的InstanceId
      */
    ComputeNodeInstanceId?: string;
    /**
      * 计算节点状态
      */
    ComputeNodeState: string;
    /**
      * CPU核数
      */
    Cpu: number;
    /**
      * 内存容量，单位GiB
      */
    Mem: number;
    /**
      * 资源创建完成时间
      */
    ResourceCreatedTime?: string;
    /**
      * 计算节点运行  TaskInstance 可用容量。0表示计算节点忙碌。
      */
    TaskInstanceNumAvailable: number;
    /**
      * Batch Agent 版本
      */
    AgentVersion?: string;
    /**
      * 实例内网IP
      */
    PrivateIpAddresses: Array<string>;
    /**
      * 实例公网IP
      */
    PublicIpAddresses: Array<string>;
    /**
      * 计算环境资源类型，当前为CVM和CPM（黑石）
      */
    ResourceType: string;
    /**
      * 计算环境资源来源。<br>BATCH_CREATED：由批量计算创建的实例资源。<br>
USER_ATTACHED：用户添加到计算环境中的实例资源。
      */
    ResourceOrigin: string;
}
/**
 * 描述了单项的价格信息
 */
export interface ItemPrice {
    /**
      * 后续合计费用的原价，后付费模式使用，单位：元。<br><li>如返回了其他时间区间项，如UnitPriceSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPrice?: number;
    /**
      * 后续计价单元，后付费模式使用，可取值范围： <br><li>HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）：<br><li>GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChargeUnit?: string;
    /**
      * 预支合计费用的原价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginalPrice?: number;
    /**
      * 预支合计费用的折扣价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountPrice?: number;
    /**
      * 折扣，如20.0代表2折。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Discount?: number;
    /**
      * 后续合计费用的折扣价，后付费模式使用，单位：元<br><li>如返回了其他时间区间项，如UnitPriceDiscountSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscount?: number;
    /**
      * 使用时间区间在(96, 360)小时的后续合计费用的原价，后付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceSecondStep?: number;
    /**
      * 使用时间区间在(96, 360)小时的后续合计费用的折扣价，后付费模式使用，单位：元
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscountSecondStep?: number;
    /**
      * 使用时间区间在(360, ∞)小时的后续合计费用的原价，后付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceThirdStep?: number;
    /**
      * 使用时间区间在(360, ∞)小时的后续合计费用的折扣价，后付费模式使用，单位：元
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitPriceDiscountThirdStep?: number;
    /**
      * 预支三年合计费用的原价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginalPriceThreeYear?: number;
    /**
      * 预支三年合计费用的折扣价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountPriceThreeYear?: number;
    /**
      * 预支三年应用的折扣，如20.0代表2折。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountThreeYear?: number;
    /**
      * 预支五年合计费用的原价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginalPriceFiveYear?: number;
    /**
      * 预支五年合计费用的折扣价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountPriceFiveYear?: number;
    /**
      * 预支五年应用的折扣，如20.0代表2折。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountFiveYear?: number;
    /**
      * 预支一年合计费用的原价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginalPriceOneYear?: number;
    /**
      * 预支一年合计费用的折扣价，预付费模式使用，单位：元。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountPriceOneYear?: number;
    /**
      * 预支一年应用的折扣，如20.0代表2折。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DiscountOneYear?: number;
}
/**
 * 描述实例机型配额信息。
 */
export interface InstanceTypeQuotaItem {
    /**
      * 可用区。
      */
    Zone: string;
    /**
      * 实例机型。
      */
    InstanceType: string;
    /**
      * 实例计费模式。取值范围： <br><li>PREPAID：表示预付费，即包年包月<br><li>POSTPAID_BY_HOUR：表示后付费，即按量计费<br><li>CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对CDH计费，不对CDH上的实例计费。<br><li>`SPOTPAID`：表示竞价实例付费。
      */
    InstanceChargeType: string;
    /**
      * 网卡类型，例如：25代表25G网卡
      */
    NetworkCard: number;
    /**
      * 扩展属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Externals: Externals;
    /**
      * 实例的CPU核数，单位：核。
      */
    Cpu: number;
    /**
      * 实例内存容量，单位：`GB`。
      */
    Memory: number;
    /**
      * 实例机型系列。
      */
    InstanceFamily: string;
    /**
      * 机型名称。
      */
    TypeName: string;
    /**
      * 本地磁盘规格列表。当该参数返回为空值时，表示当前情况下无法创建本地盘。
      */
    LocalDiskTypeList: Array<LocalDiskType>;
    /**
      * 实例是否售卖。取值范围： <br><li>SELL：表示实例可购买<br><li>SOLD_OUT：表示实例已售罄。
      */
    Status: string;
    /**
      * 实例的售卖价格。
      */
    Price: ItemPrice;
    /**
      * 售罄原因。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SoldOutReason: string;
    /**
      * 内网带宽，单位Gbps。
      */
    InstanceBandwidth: number;
    /**
      * 网络收发包能力，单位万PPS。
      */
    InstancePps: number;
    /**
      * 本地存储块数量。
      */
    StorageBlockAmount: number;
    /**
      * 处理器型号。
      */
    CpuType: string;
    /**
      * 实例的GPU数量。
      */
    Gpu: number;
    /**
      * 实例的FPGA数量。
      */
    Fpga: number;
    /**
      * 实例备注信息。
      */
    Remark: string;
}
/**
 * CreateTaskTemplate返回参数结构体
 */
export interface CreateTaskTemplateResponse {
    /**
      * 任务模板ID
      */
    TaskTemplateId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * HDD的本地存储信息
 */
export interface StorageBlock {
    /**
      * HDD本地存储类型，值为：LOCAL_PRO.
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * HDD本地存储的最小容量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinSize: number;
    /**
      * HDD本地存储的最大容量
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxSize: number;
}
/**
 * DescribeJobs请求参数结构体
 */
export interface DescribeJobsRequest {
    /**
      * 作业ID列表，与Filters参数不能同时指定。
      */
    JobIds?: Array<string>;
    /**
      * 过滤条件
<li> job-id - String - 是否必填：否 -（过滤条件）按照作业ID过滤。</li>
<li> job-name - String - 是否必填：否 -（过滤条件）按照作业名称过滤。</li>
<li> job-state - String - 是否必填：否 -（过滤条件）按照作业状态过滤。</li>
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。</li>
<li> tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。</li>
<li> tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。</li>
与JobIds参数不能同时指定。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 返回数量
      */
    Limit?: number;
}
/**
 * 任务模板信息
 */
export interface TaskTemplateView {
    /**
      * 任务模板ID
      */
    TaskTemplateId: string;
    /**
      * 任务模板名称
      */
    TaskTemplateName: string;
    /**
      * 任务模板描述
      */
    TaskTemplateDescription: string;
    /**
      * 任务模板信息
      */
    TaskTemplateInfo: Task;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 任务模板绑定的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
}
/**
 * 实例机型配置。
 */
export interface InstanceTypeOptions {
    /**
      * CPU核数。
      */
    CPU: number;
    /**
      * 内存值，单位GB。
      */
    Memory: number;
    /**
      * 实例机型类别，可选参数：“ALL”、“GENERAL”、“GENERAL_2”、“GENERAL_3”、“COMPUTE”、“COMPUTE_2”和“COMPUTE_3”。默认值“ALL”。
      */
    InstanceCategories?: Array<string>;
}
/**
 * DeleteTaskTemplates返回参数结构体
 */
export interface DeleteTaskTemplatesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCvmZoneInstanceConfigInfos请求参数结构体
 */
export interface DescribeCvmZoneInstanceConfigInfosRequest {
    /**
      * 过滤条件。
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> instance-family String - 是否必填：否 -（过滤条件）按照机型系列过滤。实例机型系列形如：S1、I1、M1等。</li>
<li> instance-type - String - 是否必填：否 - （过滤条件）按照机型过滤。</li>
<li> instance-charge-type - String - 是否必填：否 -（过滤条件）按照实例计费模式过滤。 ( POSTPAID_BY_HOUR：表示后付费，即按量计费机型 | SPOTPAID：表示竞价付费机型。 )  </li>
      */
    Filters?: Array<Filter>;
}
/**
 * TerminateTaskInstance请求参数结构体
 */
export interface TerminateTaskInstanceRequest {
    /**
      * 作业ID
      */
    JobId: string;
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 任务实例索引
      */
    TaskInstanceIndex: number;
}
/**
 * TerminateTaskInstance返回参数结构体
 */
export interface TerminateTaskInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RetryJobs请求参数结构体
 */
export interface RetryJobsRequest {
    /**
      * 作业ID列表。
      */
    JobIds: Array<string>;
}
/**
 * 任务实例视图信息
 */
export interface TaskInstanceView {
    /**
      * 任务实例索引
      */
    TaskInstanceIndex: number;
    /**
      * 任务实例状态
      */
    TaskInstanceState: string;
    /**
      * 应用程序执行结束的exit code
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExitCode?: number;
    /**
      * 任务实例状态原因，任务实例失败时，会记录失败原因
      */
    StateReason: string;
    /**
      * 任务实例运行时所在计算节点（例如CVM）的InstanceId。任务实例未运行或者完结时，本字段为空。任务实例重试时，本字段会随之变化
注意：此字段可能返回 null，表示取不到有效值。
      */
    ComputeNodeInstanceId?: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LaunchTime?: string;
    /**
      * 开始运行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunningTime?: string;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime?: string;
    /**
      * 重定向信息
      */
    RedirectInfo: RedirectInfo;
    /**
      * 任务实例状态原因详情，任务实例失败时，会记录失败原因
      */
    StateDetailedReason: string;
}
/**
 * DescribeAvailableCvmInstanceTypes返回参数结构体
 */
export interface DescribeAvailableCvmInstanceTypesResponse {
    /**
      * 机型配置数组
      */
    InstanceTypeConfigSet?: Array<InstanceTypeConfig>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTask返回参数结构体
 */
export interface DescribeTaskResponse {
    /**
      * 作业ID
      */
    JobId: string;
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 任务状态
      */
    TaskState: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 任务实例总数
      */
    TaskInstanceTotalCount: number;
    /**
      * 任务实例信息
      */
    TaskInstanceSet: Array<TaskInstanceView>;
    /**
      * 任务实例统计指标
      */
    TaskInstanceMetrics: TaskInstanceMetrics;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例分类列表
 */
export interface InstanceCategoryItem {
    /**
      * 实例类型名
      */
    InstanceCategory: string;
    /**
      * 实例族列表
      */
    InstanceFamilySet: Array<string>;
}
/**
 * 计算环境信息
 */
export interface ComputeEnvView {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 计算环境名称
      */
    EnvName: string;
    /**
      * 位置信息
      */
    Placement: Placement;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 计算节点统计指标
      */
    ComputeNodeMetrics: ComputeNodeMetrics;
    /**
      * 计算环境类型
      */
    EnvType: string;
    /**
      * 计算节点期望个数
      */
    DesiredComputeNodeCount: number;
    /**
      * 计算环境资源类型，当前为CVM和CPM（黑石）
      */
    ResourceType: string;
    /**
      * 下一步动作
      */
    NextAction: string;
    /**
      * 用户添加到计算环境中的计算节点个数
      */
    AttachedComputeNodeCount: number;
    /**
      * 计算环境绑定的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
}
/**
 * DescribeComputeEnvs返回参数结构体
 */
export interface DescribeComputeEnvsResponse {
    /**
      * 计算环境列表
      */
    ComputeEnvSet: Array<ComputeEnvView>;
    /**
      * 计算环境数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTask请求参数结构体
 */
export interface DescribeTaskRequest {
    /**
      * 作业ID
      */
    JobId: string;
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 返回数量。默认取值100，最大取值1000。
      */
    Limit?: number;
    /**
      * 过滤条件，详情如下：
<li> task-instance-type - String - 是否必填： 否 - 按照任务实例状态进行过滤（SUBMITTED：已提交；PENDING：等待中；RUNNABLE：可运行；STARTING：启动中；RUNNING：运行中；SUCCEED：成功；FAILED：失败；FAILED_INTERRUPTED：失败后保留实例）。</li>
      */
    Filters?: Array<Filter>;
}
/**
 * AttachInstances请求参数结构体
 */
export interface AttachInstancesRequest {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 加入计算环境实例列表
      */
    Instances: Array<Instance>;
}
/**
 * DescribeComputeEnvs请求参数结构体
 */
export interface DescribeComputeEnvsRequest {
    /**
      * 计算环境ID列表，与Filters参数不能同时指定。
      */
    EnvIds?: Array<string>;
    /**
      * 过滤条件
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> env-id - String - 是否必填：否 -（过滤条件）按照计算环境ID过滤。</li>
<li> env-name - String - 是否必填：否 -（过滤条件）按照计算环境名称过滤。</li>
<li> resource-type - String - 是否必填：否 -（过滤条件）按照计算资源类型过滤，取值CVM或者CPM(黑石)。</li>
<li> tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。</li>
<li>tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。</li>
<li>tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。</li>
与EnvIds参数不能同时指定。
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 返回数量
      */
    Limit?: number;
}
/**
 * DescribeCvmZoneInstanceConfigInfos返回参数结构体
 */
export interface DescribeCvmZoneInstanceConfigInfosResponse {
    /**
      * 可用区机型配置列表。
      */
    InstanceTypeQuotaSet?: Array<InstanceTypeQuotaItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeJobs返回参数结构体
 */
export interface DescribeJobsResponse {
    /**
      * 作业列表
      */
    JobSet: Array<JobView>;
    /**
      * 符合条件的作业数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 计算环境的创建或销毁活动
 */
export interface Activity {
    /**
      * 活动ID
      */
    ActivityId: string;
    /**
      * 计算节点ID
      */
    ComputeNodeId: string;
    /**
      * 计算节点活动类型，创建或者销毁
      */
    ComputeNodeActivityType: string;
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 起因
      */
    Cause: string;
    /**
      * 活动状态
      */
    ActivityState: string;
    /**
      * 状态原因
      */
    StateReason: string;
    /**
      * 活动开始时间
      */
    StartTime: string;
    /**
      * 活动结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime?: string;
    /**
      * 云服务器实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
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
 * TerminateComputeNode返回参数结构体
 */
export interface TerminateComputeNodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述了VPC相关信息，包括子网，IP信息等
 */
export interface VirtualPrivateCloud {
    /**
      * 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。
      */
    VpcId: string;
    /**
      * 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口  [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。
      */
    SubnetId: string;
    /**
      * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：<br><li>TRUE：表示用作公网网关<br><li>FALSE：表示不作为公网网关<br><br>默认取值：FALSE。
      */
    AsVpcGateway?: boolean;
    /**
      * 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。
      */
    PrivateIpAddresses?: Array<string>;
    /**
      * 为弹性网卡指定随机生成的 IPv6 地址数量。
      */
    Ipv6AddressCount?: number;
}
/**
 * DescribeAvailableCvmInstanceTypes请求参数结构体
 */
export interface DescribeAvailableCvmInstanceTypesRequest {
    /**
      * 过滤条件。
<li> zone - String - 是否必填：否 -（过滤条件）按照可用区过滤。</li>
<li> instance-family String - 是否必填：否 -（过滤条件）按照机型系列过滤。实例机型系列形如：S1、I1、M1等。</li>
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeInstanceCategories请求参数结构体
 */
export declare type DescribeInstanceCategoriesRequest = null;
/**
 * ModifyComputeEnv请求参数结构体
 */
export interface ModifyComputeEnvRequest {
    /**
      * 计算环境ID
      */
    EnvId: string;
    /**
      * 计算节点期望个数
      */
    DesiredComputeNodeCount?: number;
    /**
      * 计算环境名称
      */
    EnvName?: string;
    /**
      * 计算环境描述
      */
    EnvDescription?: string;
    /**
      * 计算环境属性数据
      */
    EnvData?: ComputeEnvData;
}
/**
 * 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等
 */
export interface InternetAccessible {
    /**
      * 网络计费类型。取值范围：<br><li>BANDWIDTH_PREPAID：预付费按带宽结算<br><li>TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费<br><li>BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费<br><li>BANDWIDTH_PACKAGE：带宽包用户<br>默认取值：非带宽包用户默认与子机付费类型保持一致。
      */
    InternetChargeType?: string;
    /**
      * 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/12523)。
      */
    InternetMaxBandwidthOut?: number;
    /**
      * 是否分配公网IP。取值范围：<br><li>TRUE：表示分配公网IP<br><li>FALSE：表示不分配公网IP<br><br>当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。该参数仅在RunInstances接口中作为入参使用。
      */
    PublicIpAssigned?: boolean;
    /**
      * 带宽包ID。可通过[`DescribeBandwidthPackages`](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。该参数仅在RunInstances接口中作为入参使用。
      */
    BandwidthPackageId?: string;
}
/**
 * 作业信息
 */
export interface JobView {
    /**
      * 作业ID
      */
    JobId: string;
    /**
      * 作业名称
      */
    JobName: string;
    /**
      * 作业状态
      */
    JobState: string;
    /**
      * 作业优先级
      */
    Priority: number;
    /**
      * 位置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Placement?: Placement;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime?: string;
    /**
      * 任务统计指标
      */
    TaskMetrics: TaskMetrics;
    /**
      * 作业绑定的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
}
/**
 * 环境变量
 */
export interface EnvVar {
    /**
      * 环境变量名称
      */
    Name: string;
    /**
      * 环境变量取值
      */
    Value: string;
}
