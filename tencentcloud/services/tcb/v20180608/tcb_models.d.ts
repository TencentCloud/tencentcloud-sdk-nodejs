/**
 * CreateHostingDomain返回参数结构体
 */
export interface CreateHostingDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateStaticStore返回参数结构体
 */
export interface CreateStaticStoreResponse {
    /**
      * 创建静态资源结果(succ/fail)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEnvLimit请求参数结构体
 */
export declare type DescribeEnvLimitRequest = null;
/**
 * DescribeQuotaData返回参数结构体
 */
export interface DescribeQuotaDataResponse {
    /**
      * 指标名
      */
    MetricName?: string;
    /**
      * 指标的值
      */
    Value?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckTcbService返回参数结构体
 */
export interface CheckTcbServiceResponse {
    /**
      * true表示已开通
      */
    Initialized?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCloudBaseRunServerVersion请求参数结构体
 */
export interface CreateCloudBaseRunServerVersionRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 枚举（package/repository/image)
      */
    UploadType: string;
    /**
      * 流量占比
      */
    FlowRatio: number;
    /**
      * Cpu的大小，单位：核
      */
    Cpu: number;
    /**
      * Mem的大小，单位：G
      */
    Mem: number;
    /**
      * 最小副本数，最小值：0
      */
    MinNum: number;
    /**
      * 副本最大数，最大值：50
      */
    MaxNum: number;
    /**
      * 策略类型(枚举值：比如cpu)
      */
    PolicyType: string;
    /**
      * 策略阈值
      */
    PolicyThreshold: number;
    /**
      * 服务端口
      */
    ContainerPort: number;
    /**
      * 服务名称
      */
    ServerName: string;
    /**
      * repository的类型(coding/gitlab/github/coding)
      */
    RepositoryType?: string;
    /**
      * Dockerfile地址
      */
    DockerfilePath?: string;
    /**
      * 构建目录
      */
    BuildDir?: string;
    /**
      * 环境变量
      */
    EnvParams?: string;
    /**
      * repository地址
      */
    Repository?: string;
    /**
      * 分支
      */
    Branch?: string;
    /**
      * 版本备注
      */
    VersionRemark?: string;
    /**
      * 代码包名字
      */
    PackageName?: string;
    /**
      * 代码包的版本
      */
    PackageVersion?: string;
    /**
      * Image的详情
      */
    ImageInfo?: CloudBaseRunImageInfo;
    /**
      * Github等拉取代码的详情
      */
    CodeDetail?: CloudBaseCodeRepoDetail;
    /**
      * 私有镜像秘钥信息
      */
    ImageSecretInfo?: CloudBaseRunImageSecretInfo;
    /**
      * 私有镜像 认证名称
      */
    ImagePullSecret?: string;
    /**
      * 用户自定义采集日志路径
      */
    CustomLogs?: string;
    /**
      * 延迟多长时间开始健康检查（单位s）
      */
    InitialDelaySeconds?: number;
    /**
      * cfs挂载信息
      */
    MountVolumeInfo?: Array<CloudBaseRunVolumeMount>;
    /**
      * 4 代表只能微信链路访问
      */
    AccessType?: number;
    /**
      * es信息
      */
    EsInfo?: CloudBaseEsInfo;
    /**
      * 是否使用统一域名
      */
    EnableUnion?: boolean;
}
/**
 * StorageInfo 资源信息
 */
export interface StorageInfo {
    /**
      * 资源所属地域。
当前支持ap-shanghai
      */
    Region: string;
    /**
      * 桶名，存储资源的唯一标识
      */
    Bucket: string;
    /**
      * cdn 域名
      */
    CdnDomain: string;
    /**
      * 资源所属用户的腾讯云appId
      */
    AppId: string;
}
/**
 * DescribeCloudBaseRunVersionSnapshot请求参数结构体
 */
export interface DescribeCloudBaseRunVersionSnapshotRequest {
    /**
      * 服务名
      */
    ServerName: string;
    /**
      * 版本名
      */
    VersionName: string;
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 版本历史名
      */
    SnapshotName?: string;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 限制大小
      */
    Limit?: number;
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
 * DescribeCloudBaseRunServerVersion请求参数结构体
 */
export interface DescribeCloudBaseRunServerVersionRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 服务名称
      */
    ServerName: string;
    /**
      * 版本名称
      */
    VersionName: string;
}
/**
 * 函数的信息
 */
export interface FunctionInfo {
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 所属地域。
当前支持ap-shanghai
      */
    Region: string;
}
/**
 * CreatePostpayPackage返回参数结构体
 */
export interface CreatePostpayPackageResponse {
    /**
      * 后付费订单号
      */
    TranId?: string;
    /**
      * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudBaseRunServerVersion返回参数结构体
 */
export interface DescribeCloudBaseRunServerVersionResponse {
    /**
      * 版本名称
      */
    VersionName?: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark?: string;
    /**
      * Dockefile的路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    DockerfilePath?: string;
    /**
      * DockerBuild的目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    BuildDir?: string;
    /**
      * 请使用CPUSize
      */
    Cpu?: number;
    /**
      * 请使用MemSize
      */
    Mem?: number;
    /**
      * 副本最小值
      */
    MinNum?: number;
    /**
      * 副本最大值
      */
    MaxNum?: number;
    /**
      * 策略类型
      */
    PolicyType?: string;
    /**
      * 策略阈值
      */
    PolicyThreshold?: number;
    /**
      * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvParams?: string;
    /**
      * 创建时间
      */
    CreatedTime?: string;
    /**
      * 更新时间
      */
    UpdatedTime?: string;
    /**
      * 版本的IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionIP?: string;
    /**
      * 版本的端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionPort?: number;
    /**
      * 版本状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: string;
    /**
      * 代码包的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageName?: string;
    /**
      * 代码版本的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageVersion?: string;
    /**
      * 枚举（package/repository/image)
注意：此字段可能返回 null，表示取不到有效值。
      */
    UploadType?: string;
    /**
      * Repo的类型(coding/gitlab/github/coding)
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepoType?: string;
    /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Repo?: string;
    /**
      * 分支
注意：此字段可能返回 null，表示取不到有效值。
      */
    Branch?: string;
    /**
      * 服务名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServerName?: string;
    /**
      * 是否对于外网开放
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsPublic?: boolean;
    /**
      * vpc id
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 子网实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetIds?: Array<string>;
    /**
      * 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomLogs?: string;
    /**
      * 监听端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerPort?: number;
    /**
      * 延迟多长时间开始健康检查（单位s）
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitialDelaySeconds?: number;
    /**
      * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageUrl?: string;
    /**
      * CPU 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuSize?: number;
    /**
      * MEM 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemSize?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CommonServiceAPI请求参数结构体
 */
export interface CommonServiceAPIRequest {
    /**
      * Service名，需要转发访问的接口名
      */
    Service: string;
    /**
      * 需要转发的云API参数，要转成JSON格式
      */
    JSONData?: string;
}
/**
 * 按量付费免费配额信息
 */
export interface PostpayEnvQuota {
    /**
      * 资源类型
      */
    ResourceType: string;
    /**
      * 指标名
      */
    MetricName: string;
    /**
      * 配额值
      */
    Value: number;
    /**
      * 配额生效时间
为空表示没有时间限制
      */
    StartTime: string;
    /**
      * 配额失效时间
为空表示没有时间限制
      */
    EndTime: string;
}
/**
 * DescribeEndUsers返回参数结构体
 */
export interface DescribeEndUsersResponse {
    /**
      * 用户总数
      */
    Total?: number;
    /**
      * 用户列表
      */
    Users?: Array<EndUserInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 合法域名
 */
export interface AuthDomain {
    /**
      * 域名ID
      */
    Id: string;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名类型。包含以下取值：
<li>SYSTEM</li>
<li>USER</li>
      */
    Type: string;
    /**
      * 状态。包含以下取值：
<li>ENABLE</li>
<li>DISABLE</li>
      */
    Status: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
}
/**
 * 云日志服务相关信息
 */
export interface LogServiceInfo {
    /**
      * log名
      */
    LogsetName: string;
    /**
      * log-id
      */
    LogsetId: string;
    /**
      * topic名
      */
    TopicName: string;
    /**
      * topic-id
      */
    TopicId: string;
    /**
      * cls日志所属地域
      */
    Region: string;
}
/**
 * EstablishCloudBaseRunServer请求参数结构体
 */
export interface EstablishCloudBaseRunServerRequest {
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 服务名称
      */
    ServiceName: string;
    /**
      * 是否开通外网访问
      */
    IsPublic: boolean;
    /**
      * 镜像仓库
      */
    ImageRepo?: string;
    /**
      * 服务描述
      */
    Remark?: string;
    /**
      * es信息
      */
    EsInfo?: CloudBaseEsInfo;
    /**
      * 日志类型; es/cls
      */
    LogType?: string;
}
/**
 * DescribeEnvLimit返回参数结构体
 */
export interface DescribeEnvLimitResponse {
    /**
      * 环境总数上限
      */
    MaxEnvNum?: number;
    /**
      * 目前环境总数
      */
    CurrentEnvNum?: number;
    /**
      * 免费环境数量上限
      */
    MaxFreeEnvNum?: number;
    /**
      * 目前免费环境数量
      */
    CurrentFreeEnvNum?: number;
    /**
      * 总计允许销毁环境次数上限
      */
    MaxDeleteTotal?: number;
    /**
      * 目前已销毁环境次数
      */
    CurrentDeleteTotal?: number;
    /**
      * 每月允许销毁环境次数上限
      */
    MaxDeleteMonthly?: number;
    /**
      * 本月已销毁环境次数
      */
    CurrentDeleteMonthly?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateStaticStore请求参数结构体
 */
export interface CreateStaticStoreRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * CommonServiceAPI返回参数结构体
 */
export interface CommonServiceAPIResponse {
    /**
      * json格式response
      */
    JSONResp?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEndUserStatistic返回参数结构体
 */
export interface DescribeEndUserStatisticResponse {
    /**
      * 终端用户各平台统计
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlatformStatistics?: Array<PlatformStatistic>;
    /**
      * 终端用户总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExtraPkgBillingInfo返回参数结构体
 */
export interface DescribeExtraPkgBillingInfoResponse {
    /**
      * 增值包计费信息列表
      */
    EnvInfoList?: Array<EnvBillingInfoItem>;
    /**
      * 增值包数目
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DestroyStaticStore返回参数结构体
 */
export interface DestroyStaticStoreResponse {
    /**
      * 条件任务结果(succ/fail)
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePostpayPackageFreeQuotas请求参数结构体
 */
export interface DescribePostpayPackageFreeQuotasRequest {
    /**
      * 环境ID
      */
    EnvId?: string;
    /**
      * 免费额度类型标识
      */
    FreeQuotaType?: string;
}
/**
 * CreateAuthDomain返回参数结构体
 */
export interface CreateAuthDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudBaseBuildService返回参数结构体
 */
export interface DescribeCloudBaseBuildServiceResponse {
    /**
      * 上传url
      */
    UploadUrl?: string;
    /**
      * heder
      */
    UploadHeaders?: Array<KVPair>;
    /**
      * 包名
      */
    PackageName?: string;
    /**
      * 包版本
      */
    PackageVersion?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEnv请求参数结构体
 */
export interface ModifyEnvRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 环境备注名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
      */
    Alias?: string;
}
/**
 * DescribeEndUsers请求参数结构体
 */
export interface DescribeEndUsersRequest {
    /**
      * 开发者的环境ID
      */
    EnvId: string;
    /**
      * 可选参数，偏移量，默认 0
      */
    Offset?: number;
    /**
      * 可选参数，拉取数量，默认 20
      */
    Limit?: number;
    /**
      * 按照 uuid 列表过滤，最大个数为100
      */
    UUIds?: Array<string>;
}
/**
 * DescribeDownloadFile请求参数结构体
 */
export interface DescribeDownloadFileRequest {
    /**
      * 代码uri
      */
    CodeUri: string;
}
/**
 * DescribeEnvs请求参数结构体
 */
export interface DescribeEnvsRequest {
    /**
      * 环境ID，如果传了这个参数则只返回该环境的相关信息
      */
    EnvId?: string;
    /**
      * 指定Channels字段为可见渠道列表或不可见渠道列表
如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"]
      */
    IsVisible?: boolean;
    /**
      * 渠道列表，代表可见或不可见渠道由IsVisible参数指定
      */
    Channels?: Array<string>;
}
/**
 * DescribeQuotaData请求参数结构体
 */
export interface DescribeQuotaDataRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * <li> 指标名: </li>
<li> StorageSizepkg: 当月存储空间容量, 单位MB </li>
<li> StorageReadpkg: 当月存储读请求次数 </li>
<li> StorageWritepkg: 当月存储写请求次数 </li>
<li> StorageCdnOriginFluxpkg: 当月CDN回源流量, 单位字节 </li>
<li> StorageCdnOriginFluxpkgDay: 当日CDN回源流量, 单位字节 </li>
<li> StorageReadpkgDay: 当日存储读请求次数 </li>
<li> StorageWritepkgDay: 当日写请求次数 </li>
<li> CDNFluxpkg: 当月CDN流量, 单位为字节 </li>
<li> CDNFluxpkgDay: 当日CDN流量, 单位为字节 </li>
<li> FunctionInvocationpkg: 当月云函数调用次数 </li>
<li> FunctionGBspkg: 当月云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkg: 当月云函数流量, 单位千字节(KB) </li>
<li> FunctionInvocationpkgDay: 当日云函数调用次数 </li>
<li> FunctionGBspkgDay: 当日云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkgDay: 当日云函数流量, 单位千字节(KB) </li>
<li> DbSizepkg: 当月数据库容量大小, 单位MB </li>
<li> DbReadpkg: 当日数据库读请求数 </li>
<li> DbWritepkg: 当日数据库写请求数 </li>
<li> StaticFsFluxPkgDay: 当日静态托管流量 </li>
<li> StaticFsFluxPkg: 当月静态托管流量</li>
<li> StaticFsSizePkg: 当月静态托管容量 </li>
<li> TkeCpuUsedPkg: 当月容器托管CPU使用量，单位核 </li>
<li> TkeMemUsedPkg: 当月容器托管内存使用量，单位MB </li>
      */
    MetricName: string;
    /**
      * 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocationpkg, FunctionGBspkg, FunctionFluxpkg)、容器托管（服务名称）。如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传。
      */
    ResourceID?: string;
}
/**
 * DescribeCloudBaseBuildService请求参数结构体
 */
export interface DescribeCloudBaseBuildServiceRequest {
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 服务名
      */
    ServiceName: string;
    /**
      * build类型,枚举值有: cloudbaserun, framework-ci
      */
    CIBusiness?: string;
}
/**
 * DescribeEndUserStatistic请求参数结构体
 */
export interface DescribeEndUserStatisticRequest {
    /**
      * 环境id
      */
    EnvId: string;
}
/**
 * 后付费免费额度
 */
export interface PackageFreeQuotaInfo {
    /**
      * 资源类型
<li>COS</li>
<li>CDN</li>
<li>FLEXDB</li>
<li>SCF</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType: string;
    /**
      * 资源指标名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceMetric: string;
    /**
      * 资源指标免费量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreeQuota: number;
    /**
      * 指标单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricUnit: string;
    /**
      * 免费量抵扣周期
<li>sum-month:以月为单位抵扣</li>
<li>sum-day:以天为单位抵扣</li>
<li>totalize:总容量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeductType: string;
    /**
      * 免费量类型
<li>basic:通用量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreeQuotaType: string;
}
/**
 * 代码仓库里 Repo的信息描述
 */
export interface CloudBaseCodeRepoDetail {
    /**
      * repo的名字
      */
    Name?: CloudBaseCodeRepoName;
    /**
      * repo的url
      */
    Url?: string;
}
/**
 * CheckTcbService请求参数结构体
 */
export declare type CheckTcbServiceRequest = null;
/**
 * ModifyDatabaseACL返回参数结构体
 */
export interface ModifyDatabaseACLResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 静态CDN资源信息
 */
export interface StaticStorageInfo {
    /**
      * 静态CDN域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    StaticDomain: string;
    /**
      * 静态CDN默认文件夹，当前为根目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    DefaultDirName: string;
    /**
      * 资源状态(process/online/offline/init)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * cos所属区域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * bucket信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Bucket: string;
}
/**
 * 订单信息
 */
export interface OrderInfo {
    /**
      * 订单号
      */
    TranId: string;
    /**
      * 订单要切换的套餐ID
      */
    PackageId: string;
    /**
      * 订单类型
<li>1 购买</li>
<li>2 续费</li>
<li>3 变配</li>
      */
    TranType: string;
    /**
      * 订单状态。
<li>1未支付</li>
<li>2 支付中</li>
<li>3 发货中</li>
<li>4 发货成功</li>
<li>5 发货失败</li>
<li>6 已退款</li>
<li>7 已取消</li>
<li>100 已删除</li>
      */
    TranStatus: string;
    /**
      * 订单更新时间
      */
    UpdateTime: string;
    /**
      * 订单创建时间
      */
    CreateTime: string;
    /**
      * 付费模式.
<li>prepayment 预付费</li>
<li>postpaid 后付费</li>
      */
    PayMode: string;
    /**
      * 订单绑定的扩展ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtensionId: string;
    /**
      * 资源初始化结果(仅当ExtensionId不为空时有效): successful(初始化成功), failed(初始化失败), doing(初始化进行中), init(准备初始化)
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceReady: string;
}
/**
 * CloudRunServiceSimpleVersionSnapshot 信息
 */
export interface CloudRunServiceSimpleVersionSnapshot {
    /**
      * 版本名
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionName?: string;
    /**
      * 版本备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark?: string;
    /**
      * cpu规格
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cpu?: number;
    /**
      * 内存规格
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mem?: number;
    /**
      * 最小副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinNum?: number;
    /**
      * 最大副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxNum?: number;
    /**
      * 镜像url
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageUrl?: string;
    /**
      * 扩容策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyType?: string;
    /**
      * 策略阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyThreshold?: number;
    /**
      * 环境参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvParams?: string;
    /**
      * 容器端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerPort?: number;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: string;
    /**
      * 更新类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    UploadType?: string;
    /**
      * dockerfile路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    DockerfilePath?: string;
    /**
      * 构建路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    BuildDir?: string;
    /**
      * repo类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepoType?: string;
    /**
      * 仓库
注意：此字段可能返回 null，表示取不到有效值。
      */
    Repo?: string;
    /**
      * 分支
注意：此字段可能返回 null，表示取不到有效值。
      */
    Branch?: string;
    /**
      * 环境id
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvId?: string;
    /**
      * 服务名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServerName?: string;
    /**
      * package名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageName?: string;
    /**
      * package版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageVersion?: string;
    /**
      * 自定义log路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomLogs?: string;
    /**
      * 延时健康检查时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitialDelaySeconds?: number;
    /**
      * snapshot名
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotName?: string;
    /**
      * 镜像信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageInfo?: CloudBaseRunImageInfo;
    /**
      * 代码仓库信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeDetail?: CloudBaseCodeRepoDetail;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: string;
}
/**
 * DescribeExtraPkgBillingInfo请求参数结构体
 */
export interface DescribeExtraPkgBillingInfoRequest {
    /**
      * 已购买增值包的环境ID
      */
    EnvId?: string;
}
/**
 * CreateCloudBaseRunResource请求参数结构体
 */
export interface CreateCloudBaseRunResourceRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * vpc的ID
      */
    VpcId?: string;
    /**
      * 子网ID列表，当VpcId不为空，SubnetIds也不能为空
      */
    SubnetIds?: Array<string>;
}
/**
 * CreatePostpayPackage请求参数结构体
 */
export interface CreatePostpayPackageRequest {
    /**
      * 环境ID，需要系统自动创建环境时，此字段不传
      */
    EnvId?: string;
    /**
      * 微信 AppId，微信必传
      */
    WxAppId?: string;
    /**
      * 付费来源
<li>miniapp</li>
<li>qcloud</li>
      */
    Source?: string;
    /**
      * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
      */
    FreeQuota?: string;
    /**
      * 环境创建来源，取值：
<li>miniapp</li>
<li>qcloud</li>
用法同CreateEnv接口的Source参数
和 Channel 参数同时传，或者同时不传；EnvId 为空时必传。
      */
    EnvSource?: string;
    /**
      * 环境别名，要以a-z开头，不能包含  a-z,0-9,-  以外的字符
      */
    Alias?: string;
    /**
      * 如果envsource为miniapp, channel可以为ide或api;
如果envsource为qcloud, channel可以为qc_console,cocos, qq, cloudgame,dcloud,serverless_framework
和 EnvSource 参数同时传，或者同时不传；EnvId 为空时必传。
      */
    Channel?: string;
    /**
      * 扩展ID
      */
    ExtensionId?: string;
    /**
      * 订单标记。建议使用方统一转大小写之后再判断。
<li>QuickStart：快速启动来源</li>
<li>Activity：活动来源</li>
      */
    Flag?: string;
}
/**
 * DescribeEnvFreeQuota请求参数结构体
 */
export interface DescribeEnvFreeQuotaRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 资源类型：可选值：CDN, COS, FLEXDB, HOSTING, SCF
不传则返回全部资源指标
      */
    ResourceTypes?: Array<string>;
}
/**
 * 数据库资源信息
 */
export interface DatabasesInfo {
    /**
      * 数据库唯一标识
      */
    InstanceId: string;
    /**
      * 状态。包含以下取值：
<li>INITIALIZING：资源初始化中</li>
<li>RUNNING：运行中，可正常使用的状态</li>
<li>UNUSABLE：禁用，不可用</li>
<li>OVERDUE：资源过期</li>
      */
    Status: string;
    /**
      * 所属地域。
当前支持ap-shanghai
      */
    Region: string;
}
/**
 * 终端用户登录新增统计
 */
export interface LoginStatistic {
    /**
      * 统计类型 新增NEWUSER 和登录 LOGIN
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatisticalType?: string;
    /**
      * 统计周期：日DAY，周WEEK，月MONTH
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatisticalCycle?: string;
    /**
      * 统计总量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Count?: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: string;
}
/**
 * DescribeAuthDomains请求参数结构体
 */
export interface DescribeAuthDomainsRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * DescribeEndUserLoginStatistic返回参数结构体
 */
export interface DescribeEndUserLoginStatisticResponse {
    /**
      * 环境终端用户新增与登录统计
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoginStatistics?: Array<LoginStatistic>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAuthDomains返回参数结构体
 */
export interface DescribeAuthDomainsResponse {
    /**
      * 安全域名列表列表
      */
    Domains?: Array<AuthDomain>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * cfs挂载点
 */
export interface CloudBaseRunVolumeMount {
    /**
      * 资源名
      */
    Name?: string;
    /**
      * 挂载路径
      */
    MountPath?: string;
    /**
      * 是否只读
      */
    ReadOnly?: boolean;
    /**
      * Nfs挂载信息
      */
    NfsVolumes?: Array<CloudBaseRunNfsVolumeSource>;
}
/**
 * ReinstateEnv请求参数结构体
 */
export interface ReinstateEnvRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * CreateCloudBaseRunResource返回参数结构体
 */
export interface CreateCloudBaseRunResourceResponse {
    /**
      * 返回集群创建是否成功 succ为成功。并且中间无err
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDatabaseACL请求参数结构体
 */
export interface DescribeDatabaseACLRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 集合名称
      */
    CollectionName: string;
}
/**
 * 终端用户平台统计信息
 */
export interface PlatformStatistic {
    /**
      * 终端用户从属平台
注意：此字段可能返回 null，表示取不到有效值。
      */
    Platform?: string;
    /**
      * 平台终端用户数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Count?: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: string;
}
/**
 * CreateHostingDomain请求参数结构体
 */
export interface CreateHostingDomainRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 证书ID
      */
    CertId: string;
}
/**
 * CreateCloudBaseRunServerVersion返回参数结构体
 */
export interface CreateCloudBaseRunServerVersionResponse {
    /**
      * 状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 版本名称（只有Result为succ的时候，才会返回VersionName)
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionName?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEndUser返回参数结构体
 */
export interface DeleteEndUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 环境计费信息
 */
export interface EnvBillingInfoItem {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * tcb产品套餐ID，参考DescribePackages接口的返回值。
      */
    PackageId: string;
    /**
      * 自动续费标记
      */
    IsAutoRenew: boolean;
    /**
      * 状态。包含以下取值：
<li> 空字符串：初始化中</li>
<li> NORMAL：正常</li>
<li> ISOLATE：隔离</li>
      */
    Status: string;
    /**
      * 支付方式。包含以下取值：
<li> PREPAYMENT：预付费</li>
<li> POSTPAID：后付费</li>
      */
    PayMode: string;
    /**
      * 隔离时间，最近一次隔离的时间
      */
    IsolatedTime: string;
    /**
      * 过期时间，套餐即将到期的时间
      */
    ExpireTime: string;
    /**
      * 创建时间，第一次接入计费方案的时间。
      */
    CreateTime: string;
    /**
      * 更新时间，计费信息最近一次更新的时间。
      */
    UpdateTime: string;
    /**
      * true表示从未升级过付费版。
      */
    IsAlwaysFree: boolean;
    /**
      * 付费渠道。
<li> miniapp：小程序</li>
<li> qcloud：腾讯云</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    PaymentChannel: string;
    /**
      * 最新的订单信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrderInfo: OrderInfo;
    /**
      * 免费配额信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreeQuota: string;
}
/**
 * DescribeEndUserLoginStatistic请求参数结构体
 */
export interface DescribeEndUserLoginStatisticRequest {
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 终端用户来源
<li> qcloud </li>
<li>miniapp</li>
      */
    Source?: string;
}
/**
 * DescribeEnvFreeQuota返回参数结构体
 */
export interface DescribeEnvFreeQuotaResponse {
    /**
      * 免费抵扣配额详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    QuotaItems?: Array<PostpayEnvQuota>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * es信息
 */
export interface CloudBaseEsInfo {
    /**
      * es的id
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id?: number;
    /**
      * secret名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecretName?: string;
    /**
      * ip地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip?: string;
    /**
      * 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: string;
    /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Account?: string;
    /**
      * 密码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Password?: string;
}
/**
 * ModifyEnv返回参数结构体
 */
export interface ModifyEnvResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEndUser请求参数结构体
 */
export interface ModifyEndUserRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * C端用户端的唯一ID
      */
    UUId: string;
    /**
      * 帐号的状态
      */
    Status?: string;
}
/**
 * DescribeDatabaseACL返回参数结构体
 */
export interface DescribeDatabaseACLResponse {
    /**
      * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
      */
    AclTag?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReinstateEnv返回参数结构体
 */
export interface ReinstateEnvResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * nfs挂载资源
 */
export interface CloudBaseRunNfsVolumeSource {
    /**
      * NFS挂载Server
      */
    Server?: string;
    /**
      * Server路径
      */
    Path?: string;
    /**
      * 是否只读
      */
    ReadOnly?: boolean;
}
/**
 * EstablishCloudBaseRunServer返回参数结构体
 */
export interface EstablishCloudBaseRunServerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 环境信息
 */
export interface EnvInfo {
    /**
      * 账户下该环境唯一标识
      */
    EnvId: string;
    /**
      * 环境来源。包含以下取值：
<li>miniapp：微信小程序</li>
<li>qcloud ：腾讯云</li>
      */
    Source: string;
    /**
      * 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
      */
    Alias: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 最后修改时间
      */
    UpdateTime: string;
    /**
      * 环境状态。包含以下取值：
<li>NORMAL：正常可用</li>
<li>UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中</li>
      */
    Status: string;
    /**
      * 数据库列表
      */
    Databases: Array<DatabasesInfo>;
    /**
      * 存储列表
      */
    Storages: Array<StorageInfo>;
    /**
      * 函数列表
      */
    Functions: Array<FunctionInfo>;
    /**
      * tcb产品套餐ID，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageId: string;
    /**
      * 套餐中文名称，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageName: string;
    /**
      * 云日志服务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogServices: Array<LogServiceInfo>;
    /**
      * 静态资源信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StaticStorages: Array<StaticStorageInfo>;
    /**
      * 是否到期自动降为免费版
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsAutoDegrade: boolean;
    /**
      * 环境渠道
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvChannel: string;
    /**
      * 支付方式。包含以下取值：
<li> prepayment：预付费</li>
<li> postpaid：后付费</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayMode: string;
    /**
      * 是否为默认环境
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDefault: boolean;
    /**
      * 环境所属地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
}
/**
 * CloudBaseRun 镜像信息
 */
export interface CloudBaseRunImageInfo {
    /**
      * 镜像仓库名称
      */
    RepositoryName: string;
    /**
      * 是否公有
      */
    IsPublic: boolean;
    /**
      * 镜像tag名称
      */
    TagName: string;
    /**
      * 镜像server
      */
    ServerAddr: string;
    /**
      * 镜像拉取地址
      */
    ImageUrl: string;
}
/**
 * DestroyEnv返回参数结构体
 */
export interface DestroyEnvResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDatabaseACL请求参数结构体
 */
export interface ModifyDatabaseACLRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 集合名称
      */
    CollectionName: string;
    /**
      * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
      */
    AclTag: string;
}
/**
 * DestroyStaticStore请求参数结构体
 */
export interface DestroyStaticStoreRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * cdn域名
      */
    CdnDomain?: string;
}
/**
 * ModifyEndUser返回参数结构体
 */
export interface ModifyEndUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 终端用户信息
 */
export interface EndUserInfo {
    /**
      * 用户唯一ID
      */
    UUId: string;
    /**
      * 微信ID
      */
    WXOpenId: string;
    /**
      * qq ID
      */
    QQOpenId: string;
    /**
      * 手机号
      */
    Phone: string;
    /**
      * 邮箱
      */
    Email: string;
    /**
      * 昵称
      */
    NickName: string;
    /**
      * 性别
      */
    Gender: string;
    /**
      * 头像地址
      */
    AvatarUrl: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 是否为匿名用户
      */
    IsAnonymous: boolean;
    /**
      * 是否禁用账户
      */
    IsDisabled: boolean;
    /**
      * 是否设置过密码
      */
    HasPassword: boolean;
    /**
      * 用户名
      */
    UserName: string;
}
/**
 * DescribeCloudBaseRunVersionSnapshot返回参数结构体
 */
export interface DescribeCloudBaseRunVersionSnapshotResponse {
    /**
      * 版本历史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Snapshots?: Array<CloudRunServiceSimpleVersionSnapshot>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePostpayPackageFreeQuotas返回参数结构体
 */
export interface DescribePostpayPackageFreeQuotasResponse {
    /**
      * 免费量资源信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageFreeQuotaInfos?: Array<PackageFreeQuotaInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEndUser请求参数结构体
 */
export interface DeleteEndUserRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 用户列表，每一项都是uuid
      */
    UserList: Array<string>;
}
/**
 * ImageSecretInfo的信息
 */
export interface CloudBaseRunImageSecretInfo {
    /**
      * 镜像地址
      */
    RegistryServer?: string;
    /**
      * 用户名
      */
    UserName?: string;
    /**
      * 仓库密码
      */
    Password?: string;
    /**
      * 邮箱
      */
    Email?: string;
}
/**
 * DescribeEnvs返回参数结构体
 */
export interface DescribeEnvsResponse {
    /**
      * 环境信息列表
      */
    EnvList?: Array<EnvInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 代码仓库 repo的名字
 */
export interface CloudBaseCodeRepoName {
    /**
      * repo的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * repo的完整全名
注意：此字段可能返回 null，表示取不到有效值。
      */
    FullName?: string;
}
/**
 * DescribeDownloadFile返回参数结构体
 */
export interface DescribeDownloadFileResponse {
    /**
      * 文件路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilePath?: string;
    /**
      * 加密key
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomKey?: string;
    /**
      * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAuthDomain请求参数结构体
 */
export interface CreateAuthDomainRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 安全域名
      */
    Domains: Array<string>;
}
/**
 * DestroyEnv请求参数结构体
 */
export interface DestroyEnvRequest {
    /**
      * 环境Id
      */
    EnvId: string;
    /**
      * 针对预付费 删除隔离中的环境时要传true 正常环境直接跳过隔离期删除
      */
    IsForce?: boolean;
    /**
      * 是否绕过资源检查，资源包等额外资源，默认为false，如果为true，则不检查资源是否有数据，直接删除。
      */
    BypassCheck?: boolean;
}
