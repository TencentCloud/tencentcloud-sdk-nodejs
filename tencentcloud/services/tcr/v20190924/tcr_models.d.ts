/**
 * DeleteInstanceCustomizedDomain返回参数结构体
 */
export interface DeleteInstanceCustomizedDomainResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ManageImageLifecycleGlobalPersonal返回参数结构体
 */
export interface ManageImageLifecycleGlobalPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ManageExternalEndpoint请求参数结构体
 */
export interface ManageExternalEndpointRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 操作（Create/Delete）
     */
    Operation: string;
}
/**
 * DescribeImagePersonal返回参数结构体
 */
export interface DescribeImagePersonalResponse {
    /**
     * 镜像tag信息
     */
    Data?: TagInfoResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserQuotaPersonal请求参数结构体
 */
export declare type DescribeUserQuotaPersonalRequest = null;
/**
 * 触发器目标
 */
export interface WebhookTarget {
    /**
     * 目标地址
     */
    Address: string;
    /**
     * 自定义 Headers
     */
    Headers?: Array<Header>;
}
/**
 * DeleteSignaturePolicy请求参数结构体
 */
export interface DeleteSignaturePolicyRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间的名称
     */
    NamespaceName: string;
}
/**
 * DescribeReplicationInstanceCreateTasks返回参数结构体
 */
export interface DescribeReplicationInstanceCreateTasksResponse {
    /**
     * 任务详情
     */
    TaskDetail: Array<TaskDetail>;
    /**
     * 整体任务状态
     */
    Status: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 触发器日志
 */
export interface WebhookTriggerLog {
    /**
     * 日志 Id
     */
    Id: number;
    /**
     * 触发器 Id
     */
    TriggerId: number;
    /**
     * 事件类型
     */
    EventType: string;
    /**
     * 通知类型
     */
    NotifyType: string;
    /**
     * 详情
     */
    Detail: string;
    /**
     * 创建时间
     */
    CreationTime: string;
    /**
     * 更新时间
     */
    UpdateTime: string;
    /**
     * 状态
     */
    Status: string;
}
/**
 * 内网接入信息
 */
export interface AccessVpc {
    /**
     * Vpc的Id
     */
    VpcId?: string;
    /**
     * 子网Id
     */
    SubnetId?: string;
    /**
     * 内网接入状态
     */
    Status?: string;
    /**
     * 内网接入Ip
     */
    AccessIp?: string;
}
/**
 * ModifyTagRetentionRule请求参数结构体
 */
export interface ModifyTagRetentionRuleRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 命名空间的Id，必须填写原有的命名空间id
     */
    NamespaceId: number;
    /**
     * 保留策略
     */
    RetentionRule: RetentionRule;
    /**
     * 执行周期，必须填写为原来的设置
     */
    CronSetting: string;
    /**
     * 规则Id
     */
    RetentionId: number;
    /**
     * 是否禁用规则
     */
    Disabled?: boolean;
}
/**
 * ModifyRepository返回参数结构体
 */
export interface ModifyRepositoryResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 触发器触发参数
 */
export interface TriggerInvokePara {
    /**
     * AppId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId: string;
    /**
     * TKE集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId: string;
    /**
     * TKE集群命名空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Namespace: string;
    /**
     * TKE集群工作负载名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName: string;
    /**
     * TKE集群工作负载中容器名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerName: string;
    /**
     * TKE集群地域数字ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterRegion: number;
}
/**
 * DescribeNamespaces返回参数结构体
 */
export interface DescribeNamespacesResponse {
    /**
     * 命名空间列表信息
     */
    NamespaceList?: Array<TcrNamespaceInfo>;
    /**
     * 总个数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceCustomizedDomain返回参数结构体
 */
export interface DescribeInstanceCustomizedDomainResponse {
    /**
     * 域名信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DomainInfoList?: Array<CustomizedDomainInfo>;
    /**
     * 总个数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 触发器日志
 */
export interface TriggerLogResp {
    /**
     * 仓库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoName?: string;
    /**
     * Tag名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagName?: string;
    /**
     * 触发器名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerName?: string;
    /**
     * 触发方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokeSource?: string;
    /**
     * 触发动作
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokeAction?: string;
    /**
     * 触发时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokeTime?: string;
    /**
     * 触发条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokeCondition?: TriggerInvokeCondition;
    /**
     * 触发参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokePara?: TriggerInvokePara;
    /**
     * 触发结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokeResult?: TriggerInvokeResult;
}
/**
 * DownloadHelmChart请求参数结构体
 */
export interface DownloadHelmChartRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * Helm chart名称
     */
    ChartName: string;
    /**
     * Helm chart版本
     */
    ChartVersion: string;
}
/**
 * DuplicateImagePersonal请求参数结构体
 */
export interface DuplicateImagePersonalRequest {
    /**
     * 源镜像名称，不包含domain。例如： tencentyun/foo:v1
     */
    SrcImage: string;
    /**
     * 目的镜像名称，不包含domain。例如： tencentyun/foo:latest
     */
    DestImage: string;
}
/**
 * 版本保留规则
 */
export interface RetentionRule {
    /**
     * 支持的策略，可选值为latestPushedK（保留最新推送多少个版本）nDaysSinceLastPush（保留近天内推送）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key: string;
    /**
     * 规则设置下的对应值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: number;
}
/**
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
    /**
     * 企业版实例Id
     */
    RegistryId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteInstanceToken请求参数结构体
 */
export interface DeleteInstanceTokenRequest {
    /**
     * 实例 ID
     */
    RegistryId: string;
    /**
     * 访问凭证 ID
     */
    TokenId: string;
}
/**
 * Tag列表的返回值
 */
export interface TagInfoResp {
    /**
     * Tag的总数
     */
    TagCount: number;
    /**
     * TagInfo列表
     */
    TagInfo: Array<TagInfo>;
    /**
     * Server
     */
    Server: string;
    /**
     * 仓库名称
     */
    RepoName: string;
}
/**
 * ModifyRepository请求参数结构体
 */
export interface ModifyRepositoryRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * 镜像仓库名称
     */
    RepositoryName: string;
    /**
     * 仓库简短描述
     */
    BriefDescription: string;
    /**
     * 仓库详细描述
     */
    Description: string;
}
/**
 * 实例创建过程
 */
export interface RegistryCondition {
    /**
     * 实例创建过程类型
     */
    Type?: string;
    /**
     * 实例创建过程状态
     */
    Status?: string;
    /**
     * 转换到该过程的简明原因
     */
    Reason?: string;
}
/**
 * DescribeInternalEndpointDnsStatus请求参数结构体
 */
export interface DescribeInternalEndpointDnsStatusRequest {
    /**
     * vpc列表
     */
    VpcSet: Array<VpcAndDomainInfo>;
}
/**
 * CreateApplicationTriggerPersonal请求参数结构体
 */
export interface CreateApplicationTriggerPersonalRequest {
    /**
     * 触发器关联的镜像仓库，library/test格式
     */
    RepoName: string;
    /**
     * 触发器名称
     */
    TriggerName: string;
    /**
     * 触发方式，"all"全部触发，"taglist"指定tag触发，"regex"正则触发
     */
    InvokeMethod: string;
    /**
     * 应用所在TKE集群ID
     */
    ClusterId: string;
    /**
     * 应用所在TKE集群命名空间
     */
    Namespace: string;
    /**
     * 应用所在TKE集群工作负载类型,支持Deployment、StatefulSet、DaemonSet、CronJob、Job。
     */
    WorkloadType: string;
    /**
     * 应用所在TKE集群工作负载名称
     */
    WorkloadName: string;
    /**
     * 应用所在TKE集群工作负载下容器名称
     */
    ContainerName: string;
    /**
     * 应用所在TKE集群地域
     */
    ClusterRegion: number;
    /**
     * 触发方式对应的表达式
     */
    InvokeExpr?: string;
}
/**
 * 自动删除策略信息
 */
export interface AutoDelStrategyInfo {
    /**
     * 用户名
     */
    Username?: string;
    /**
     * 仓库名
     */
    RepoName?: string;
    /**
     * 类型
     */
    Type?: string;
    /**
     * 策略值
     */
    Value?: number;
    /**
     * Valid
     */
    Valid?: number;
    /**
     * 创建时间
     */
    CreationTime?: string;
}
/**
 * DeleteInternalEndpointDns请求参数结构体
 */
export interface DeleteInternalEndpointDnsRequest {
    /**
     * tcr实例id
     */
    InstanceId: string;
    /**
     * 私有网络id
     */
    VpcId: string;
    /**
     * tcr内网访问链路ip
     */
    EniLBIp: string;
    /**
     * true：使用默认域名
  false:  使用带有vpc的域名
     */
    UsePublicDomain?: boolean;
    /**
     * 解析地域，需要保证和vpc处于同一地域，如果不填则默认为主实例地域
     */
    RegionName?: string;
}
/**
 * ValidateNamespaceExistPersonal请求参数结构体
 */
export interface ValidateNamespaceExistPersonalRequest {
    /**
     * 命名空间名称
     */
    Namespace: string;
}
/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 实例的规格,
  基础版：basic
  标准版：standard
  高级版：premium
     */
    RegistryType?: string;
    /**
     * 实例删除保护，false为关闭
     */
    DeletionProtection?: boolean;
}
/**
 * RenewInstance返回参数结构体
 */
export interface RenewInstanceResponse {
    /**
     * 企业版实例Id
     */
    RegistryId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ManageInternalEndpoint请求参数结构体
 */
export interface ManageInternalEndpointRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * Create/Delete
     */
    Operation: string;
    /**
     * 需要接入的用户vpcid
     */
    VpcId: string;
    /**
     * 需要接入的用户子网id
     */
    SubnetId: string;
    /**
     * 请求的地域ID，用于实例复制地域
     */
    RegionId?: number;
    /**
     * 请求的地域名称，用于实例复制地域
     */
    RegionName?: string;
}
/**
 * CreateImmutableTagRules请求参数结构体
 */
export interface CreateImmutableTagRulesRequest {
    /**
     * 实例 Id
     */
    RegistryId: string;
    /**
     * 命名空间
     */
    NamespaceName: string;
    /**
     * 规则
     */
    Rule: ImmutableTagRule;
}
/**
 * DescribeRepositories返回参数结构体
 */
export interface DescribeRepositoriesResponse {
    /**
     * 仓库信息列表
     */
    RepositoryList?: Array<TcrRepositoryInfo>;
    /**
     * 总个数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * vpc和domain信息
 */
export interface VpcAndDomainInfo {
    /**
     * tcr实例id
     */
    InstanceId: string;
    /**
     * 私有网络id
     */
    VpcId: string;
    /**
     * tcr内网访问链路ip
     */
    EniLBIp: string;
    /**
     * true：use instance name as subdomain
  false: use instancename+"-vpc" as subdomain
     */
    UsePublicDomain?: boolean;
    /**
     * 解析地域，需要保证和vpc处于同一地域，如果不填则默认为主实例地域
     */
    RegionName?: string;
}
/**
 * DeleteInstanceToken返回参数结构体
 */
export interface DeleteInstanceTokenResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 总实例个数
     */
    TotalCount?: number;
    /**
     * 实例信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Registries?: Array<Registry>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateReplicationInstance请求参数结构体
 */
export interface CreateReplicationInstanceRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 复制实例地域ID
     */
    ReplicationRegionId?: number;
    /**
     * 复制实例地域名称
     */
    ReplicationRegionName?: string;
    /**
     * 是否同步TCR云标签至生成的COS Bucket
     */
    SyncTag?: boolean;
}
/**
 * ModifyInstanceToken返回参数结构体
 */
export interface ModifyInstanceTokenResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeApplicationTriggerLogPersonal返回参数结构体
 */
export interface DescribeApplicationTriggerLogPersonalResponse {
    /**
     * 触发日志返回值
     */
    Data?: DescribeApplicationTriggerLogPersonalResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用于获取收藏仓库的响应
 */
export interface FavorResp {
    /**
     * 收藏仓库的总数
     */
    TotalCount?: number;
    /**
     * 仓库信息数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoInfo?: Array<Favors>;
}
/**
 * DeleteNamespacePersonal请求参数结构体
 */
export interface DeleteNamespacePersonalRequest {
    /**
     * 命名空间名称
     */
    Namespace: string;
}
/**
 * ModifyImmutableTagRules返回参数结构体
 */
export interface ModifyImmutableTagRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 地域信息
 */
export interface Region {
    /**
     * gz
     */
    Alias: string;
    /**
     * 1
     */
    RegionId: number;
    /**
     * ap-guangzhou
     */
    RegionName: string;
    /**
     * alluser
     */
    Status: string;
    /**
     * remark
     */
    Remark: string;
    /**
     * 创建时间
     */
    CreatedAt: string;
    /**
     * 更新时间
     */
    UpdatedAt: string;
    /**
     * id
     */
    Id: number;
}
/**
 * ModifyServiceAccount请求参数结构体
 */
export interface ModifyServiceAccountRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 服务级账号名
     */
    Name: string;
    /**
     * 服务级账号描述
     */
    Description?: string;
    /**
     * 有效期(单位：天)，从当前时间开始计算，优先级高于ExpiresAt
     */
    Duration?: number;
    /**
     * 过期时间（时间戳，单位:毫秒）
     */
    ExpiresAt?: number;
    /**
     * 是否禁用服务级账号
     */
    Disable?: boolean;
    /**
     * 策略列表
     */
    Permissions?: Array<Permission>;
}
/**
 * CreateImageAccelerationService返回参数结构体
 */
export interface CreateImageAccelerationServiceResponse {
    /**
     * 实例Id
     */
    RegistryId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateMultipleSecurityPolicy返回参数结构体
 */
export interface CreateMultipleSecurityPolicyResponse {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 触发器返回值
 */
export interface TriggerResp {
    /**
     * 触发器名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerName?: string;
    /**
     * 触发来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokeSource?: string;
    /**
     * 触发动作
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokeAction?: string;
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
     * 触发条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokeCondition?: TriggerInvokeCondition;
    /**
     * 触发器参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokePara?: TriggerInvokePara;
}
/**
 * CreateTagRetentionRule返回参数结构体
 */
export interface CreateTagRetentionRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
    /**
     * 返回的总数
     */
    TotalCount?: number;
    /**
     * 地域信息列表
     */
    Regions?: Array<Region>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChartDownloadInfo返回参数结构体
 */
export interface DescribeChartDownloadInfoResponse {
    /**
     * 用于下载的url的预签名地址
     */
    PreSignedDownloadURL?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 命名空间信息
 */
export interface NamespaceInfo {
    /**
     * 命名空间
     */
    Namespace: string;
    /**
     * 创建时间
     */
    CreationTime: string;
    /**
     * 命名空间下仓库数量
     */
    RepoCount: number;
}
/**
 * DescribeServiceAccounts请求参数结构体
 */
export interface DescribeServiceAccountsRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 列出所有服务级账号
     */
    All?: boolean;
    /**
     * 是否填充权限信息
     */
    EmbedPermission?: boolean;
    /**
     * 过滤条件，key 目前只支持ServiceAccountName
     */
    Filters?: Array<Filter>;
    /**
     * 偏移量,默认0
     */
    Offset?: number;
    /**
     * 最大输出条数，默认20，最大为100（超出最大值，调整到最大值）
     */
    Limit?: number;
}
/**
 * DescribeExternalEndpointStatus请求参数结构体
 */
export interface DescribeExternalEndpointStatusRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
}
/**
 * DeleteRepository返回参数结构体
 */
export interface DeleteRepositoryResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteImagePersonal返回参数结构体
 */
export interface DeleteImagePersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWebhookTriggerLog返回参数结构体
 */
export interface DescribeWebhookTriggerLogResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 日志列表
     */
    Logs?: Array<WebhookTriggerLog>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DownloadHelmChart返回参数结构体
 */
export interface DownloadHelmChartResponse {
    /**
     * 临时token
     */
    TmpToken?: string;
    /**
     * 临时的secretId
     */
    TmpSecretId?: string;
    /**
     * 临时的secretKey
     */
    TmpSecretKey?: string;
    /**
     * 存储桶信息
     */
    Bucket?: string;
    /**
     * 实例ID
     */
    Region?: string;
    /**
     * chart信息
     */
    Path?: string;
    /**
     * 开始时间时间戳
     */
    StartTime?: number;
    /**
     * token过期时间时间戳
     */
    ExpiredTime?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ManageReplication请求参数结构体
 */
export interface ManageReplicationRequest {
    /**
     * 复制源实例ID
     */
    SourceRegistryId: string;
    /**
     * 复制目标实例ID
     */
    DestinationRegistryId: string;
    /**
     * 同步规则
     */
    Rule: ReplicationRule;
    /**
     * 规则描述
     */
    Description?: string;
    /**
     * 目标实例的地域ID，如广州是1
     */
    DestinationRegionId?: number;
    /**
     * 开启跨主账号实例同步配置项
     */
    PeerReplicationOption?: PeerReplicationOption;
}
/**
 * DeleteWebhookTrigger返回参数结构体
 */
export interface DeleteWebhookTriggerResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteImageLifecycleGlobalPersonal返回参数结构体
 */
export interface DeleteImageLifecycleGlobalPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySecurityPolicy请求参数结构体
 */
export interface ModifySecurityPolicyRequest {
    /**
     * 实例的Id
     */
    RegistryId: string;
    /**
     * PolicyId
     */
    PolicyIndex: number;
    /**
     * 192.168.0.0/24 白名单Ip
     */
    CidrBlock: string;
    /**
     * 备注
     */
    Description: string;
}
/**
 * DescribeReplicationInstanceSyncStatus返回参数结构体
 */
export interface DescribeReplicationInstanceSyncStatusResponse {
    /**
     * 同步状态
     */
    ReplicationStatus: string;
    /**
     * 同步完成时间
     */
    ReplicationTime: string;
    /**
     * 同步日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReplicationLog: ReplicationLog;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteInstanceCustomizedDomain请求参数结构体
 */
export interface DeleteInstanceCustomizedDomainRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 自定义域名
     */
    DomainName: string;
    /**
     * 证书ID
     */
    CertificateId?: string;
}
/**
 * 云标签Tag
 */
export interface Tag {
    /**
     * 云标签的key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key: string;
    /**
     * 云标签的值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: string;
}
/**
 *  作业调度信息
 */
export interface Schedule {
    /**
     * 类型：Hourly, Daily, Weekly, Custom, Manual, Dryrun, None
     */
    Type: string;
}
/**
 * 复制镜像tag返回值
 */
export interface DupImageTagResp {
    /**
     * 镜像Digest值
     */
    Digest?: string;
}
/**
 * CreateImmutableTagRules返回参数结构体
 */
export interface CreateImmutableTagRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteApplicationTriggerPersonal返回参数结构体
 */
export interface DeleteApplicationTriggerPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRepositoryFilterPersonal请求参数结构体
 */
export interface DescribeRepositoryFilterPersonalRequest {
    /**
     * 搜索镜像名
     */
    RepoName?: string;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回最大数量，默认 20，最大100
     */
    Limit?: number;
    /**
     * 筛选条件：1表示public，0表示private
     */
    Public?: number;
    /**
     * 命名空间
     */
    Namespace?: string;
}
/**
 * DescribeTagRetentionExecutionTask返回参数结构体
 */
export interface DescribeTagRetentionExecutionTaskResponse {
    /**
     * 版本保留执行任务列表
     */
    RetentionTaskList?: Array<RetentionTask>;
    /**
     * 版本保留执行任务总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInternalEndpoints返回参数结构体
 */
export interface DescribeInternalEndpointsResponse {
    /**
     * 内网接入信息的列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessVpcSet: Array<AccessVpc>;
    /**
     * 内网接入总数
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteImmutableTagRules返回参数结构体
 */
export interface DeleteImmutableTagRulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRepositoryPersonal请求参数结构体
 */
export interface DescribeRepositoryPersonalRequest {
    /**
     * 仓库名字
     */
    RepoName: string;
}
/**
 * 获取自动删除策略
 */
export interface AutoDelStrategyInfoResp {
    /**
     * 总数目
     */
    TotalCount?: number;
    /**
     * 自动删除策略列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StrategyInfo?: Array<AutoDelStrategyInfo>;
}
/**
 * ModifyTagRetentionRule返回参数结构体
 */
export interface ModifyTagRetentionRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteApplicationTriggerPersonal请求参数结构体
 */
export interface DeleteApplicationTriggerPersonalRequest {
    /**
     * 触发器名称
     */
    TriggerName: string;
}
/**
 * 获取满足输入搜索条件的用户镜像仓库
 */
export interface SearchUserRepositoryResp {
    /**
     * 总个数
     */
    TotalCount: number;
    /**
     * 仓库列表
     */
    RepoInfo: Array<RepoInfo>;
    /**
     * Server
     */
    Server: string;
    /**
     * PrivilegeFiltered
     */
    PrivilegeFiltered: boolean;
}
/**
 * CreateTagRetentionRule请求参数结构体
 */
export interface CreateTagRetentionRuleRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 命名空间的Id
     */
    NamespaceId: number;
    /**
     * 保留策略
     */
    RetentionRule: RetentionRule;
    /**
     * 执行周期，当前只能选择： manual;daily;weekly;monthly
     */
    CronSetting: string;
    /**
     * 是否禁用规则，默认值为false
     */
    Disabled?: boolean;
}
/**
 * DuplicateImagePersonal返回参数结构体
 */
export interface DuplicateImagePersonalResponse {
    /**
     * 复制镜像返回值
     */
    Data: DupImageTagResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageLifecyclePersonal返回参数结构体
 */
export interface DescribeImageLifecyclePersonalResponse {
    /**
     * 自动删除策略信息
     */
    Data?: AutoDelStrategyInfoResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceStatus返回参数结构体
 */
export interface DescribeInstanceStatusResponse {
    /**
     * 实例的状态列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryStatusSet?: Array<RegistryStatus>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateImageAccelerationService请求参数结构体
 */
export interface CreateImageAccelerationServiceRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 创建CFS的归属的VPCID
     */
    VpcId: string;
    /**
     * 创建CFS的归属的子网ID
     */
    SubnetId: string;
    /**
     * 创建CFS的存储类型，其中 SD 为标准型存储， HP为性能存储。
     */
    StorageType: string;
    /**
     * 权限组 ID
     */
    PGroupId: string;
    /**
     * 可用区名称，例如ap-beijing-1，请参考 概览 文档中的地域与可用区列表
     */
    Zone: string;
    /**
     * 云标签描述
     */
    TagSpecification?: TagSpecification;
}
/**
 * DescribeWebhookTrigger返回参数结构体
 */
export interface DescribeWebhookTriggerResponse {
    /**
     * 触发器总数
     */
    TotalCount: number;
    /**
     * 触发器列表
     */
    Triggers: Array<WebhookTrigger>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceToken请求参数结构体
 */
export interface ModifyInstanceTokenRequest {
    /**
     * 实例长期访问凭证 ID
     */
    TokenId: string;
    /**
     * 实例 ID
     */
    RegistryId: string;
    /**
     * 启用或禁用实例长期访问凭证
     */
    Enable?: boolean;
    /**
     * 访问凭证描述
     */
    Desc?: string;
    /**
     * 1为修改描述 2为操作启动禁用，默认值为2
     */
    ModifyFlag?: number;
}
/**
 * CreateNamespace返回参数结构体
 */
export interface CreateNamespaceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyImmutableTagRules请求参数结构体
 */
export interface ModifyImmutableTagRulesRequest {
    /**
     * 实例 Id
     */
    RegistryId: string;
    /**
     * 命名空间
     */
    NamespaceName: string;
    /**
     * 规则 Id
     */
    RuleId: number;
    /**
     * 规则
     */
    Rule: ImmutableTagRule;
}
/**
 * DescribeRepositoryOwnerPersonal返回参数结构体
 */
export interface DescribeRepositoryOwnerPersonalResponse {
    /**
     * 仓库信息
     */
    Data?: RepoInfoResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * vpc私有域名解析状态
 */
export interface VpcPrivateDomainStatus {
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: string;
    /**
     * unique vpc id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId: string;
    /**
     * ENABLE代表已经开启，DISABLE代表未开启，ERROR代表查询出错
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
}
/**
 * 策略
 */
export interface Permission {
    /**
     * 资源路径，目前仅支持Namespace
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource: string;
    /**
     * 动作，目前仅支持：tcr:PushRepository、tcr:PullRepository、tcr:CreateRepository、tcr:CreateHelmChart、tcr:DescribeHelmCharts
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Actions: Array<string>;
}
/**
 * DescribeSecurityPolicies返回参数结构体
 */
export interface DescribeSecurityPoliciesResponse {
    /**
     * 实例安全策略组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecurityPolicySet: Array<SecurityPolicy>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSignature返回参数结构体
 */
export interface CreateSignatureResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRepositoryTags请求参数结构体
 */
export interface DeleteRepositoryTagsRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * 仓库名称
     */
    RepositoryName: string;
    /**
     * Tag列表，单次请求Tag数量最大为20
     */
    Tags: Array<string>;
}
/**
 * 仓库是否存在的返回值
 */
export interface RepoIsExistResp {
    /**
     * 仓库是否存在
     */
    IsExist?: boolean;
}
/**
 * 镜像信息
 */
export interface TcrImageInfo {
    /**
     * 哈希值
     */
    Digest: string;
    /**
     * 镜像体积（单位：字节）
     */
    Size: number;
    /**
     * Tag名称
     */
    ImageVersion: string;
    /**
     * 更新时间
     */
    UpdateTime: string;
    /**
     * 制品类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Kind: string;
    /**
     * KMS 签名信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KmsSignature: string;
}
/**
 * 版本保留策略
 */
export interface RetentionPolicy {
    /**
     * 版本保留策略Id
     */
    RetentionId?: number;
    /**
     * 命名空间的名称
     */
    NamespaceName?: string;
    /**
     * 规则列表
     */
    RetentionRuleList?: Array<RetentionRule>;
    /**
     * 定期执行方式
     */
    CronSetting?: string;
    /**
     * 是否启用规则
     */
    Disabled?: boolean;
    /**
     * 基于当前时间根据cronSetting后下一次任务要执行的时间，仅做参考使用
     */
    NextExecutionTime?: string;
}
/**
 * DescribeImageLifecycleGlobalPersonal返回参数结构体
 */
export interface DescribeImageLifecycleGlobalPersonalResponse {
    /**
     * 全局自动删除策略信息
     */
    Data?: AutoDelStrategyInfoResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNamespacePersonal返回参数结构体
 */
export interface CreateNamespacePersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeReplicationInstanceSyncStatus请求参数结构体
 */
export interface DescribeReplicationInstanceSyncStatusRequest {
    /**
     * 主实例Id
     */
    RegistryId: string;
    /**
     * 复制实例Id
     */
    ReplicationRegistryId: string;
    /**
     * 复制实例的地域Id
     */
    ReplicationRegionId?: number;
    /**
     * 是否显示同步日志
     */
    ShowReplicationLog?: boolean;
    /**
     * 日志页号, 默认0
     */
    Offset?: number;
    /**
     * 最大输出条数，默认5，最大为20
     */
    Limit?: number;
}
/**
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteImageLifecycleGlobalPersonal请求参数结构体
 */
export declare type DeleteImageLifecycleGlobalPersonalRequest = null;
/**
 * DescribeInstanceStatus请求参数结构体
 */
export interface DescribeInstanceStatusRequest {
    /**
     * 实例ID的数组
     */
    RegistryIds: Array<string>;
}
/**
 * ModifyWebhookTrigger请求参数结构体
 */
export interface ModifyWebhookTriggerRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 触发器参数
     */
    Trigger: WebhookTrigger;
    /**
     * 命名空间
     */
    Namespace: string;
}
/**
 * DeleteReplicationInstance请求参数结构体
 */
export interface DeleteReplicationInstanceRequest {
    /**
     * 实例id
     */
    RegistryId: string;
    /**
     * 复制实例ID
     */
    ReplicationRegistryId: string;
    /**
     * 复制实例地域Id
     */
    ReplicationRegionId: number;
}
/**
 * DeleteNamespace返回参数结构体
 */
export interface DeleteNamespaceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteNamespacePersonal返回参数结构体
 */
export interface DeleteNamespacePersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 仓库收藏
 */
export interface Favors {
    /**
     * 仓库名字
     */
    RepoName?: string;
    /**
     * 仓库类型
     */
    RepoType?: string;
    /**
     * Pull总共的次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PullCount?: number;
    /**
     * 仓库收藏次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FavorCount?: number;
    /**
     * 仓库是否公开
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Public?: number;
    /**
     * 是否为官方所有
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsQcloudOfficial?: boolean;
    /**
     * 仓库Tag的数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagCount?: number;
    /**
     * Logo
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Logo?: string;
    /**
     * 地域
     */
    Region?: string;
    /**
     * 地域的Id
     */
    RegionId?: number;
}
/**
 * CreateSignature请求参数结构体
 */
export interface CreateSignatureRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * 仓库名称
     */
    RepositoryName: string;
    /**
     * Tag名称
     */
    ImageVersion: string;
}
/**
 * DescribeRepositoryPersonal返回参数结构体
 */
export interface DescribeRepositoryPersonalResponse {
    /**
     * 仓库信息
     */
    Data?: RepositoryInfoResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSecurityPolicy返回参数结构体
 */
export interface CreateSecurityPolicyResponse {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRepositories请求参数结构体
 */
export interface DescribeRepositoriesRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 指定命名空间，不填写默认为查询所有命名空间下镜像仓库
     */
    NamespaceName?: string;
    /**
     * 指定镜像仓库，不填写默认查询指定命名空间下所有镜像仓库
     */
    RepositoryName?: string;
    /**
     * 页数，用于分页
     */
    Offset?: number;
    /**
     * 每页个数，用于分页
     */
    Limit?: number;
    /**
     * 基于字段排序，支持的值有-creation_time,-name, -update_time
     */
    SortBy?: string;
}
/**
 * CreateUserPersonal请求参数结构体
 */
export interface CreateUserPersonalRequest {
    /**
     * 用户密码，密码必须为8到16位
     */
    Password: string;
}
/**
 * DeleteServiceAccount返回参数结构体
 */
export interface DeleteServiceAccountResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNamespace返回参数结构体
 */
export interface ModifyNamespaceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ValidateRepositoryExistPersonal请求参数结构体
 */
export interface ValidateRepositoryExistPersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
}
/**
 * ModifyUserPasswordPersonal返回参数结构体
 */
export interface ModifyUserPasswordPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Tcr 命名空间的描述
 */
export interface TcrNamespaceInfo {
    /**
     * 命名空间名称
     */
    Name?: string;
    /**
     * 创建时间
     */
    CreationTime?: string;
    /**
     * 访问级别
     */
    Public?: boolean;
    /**
     * 命名空间的Id
     */
    NamespaceId?: number;
    /**
     * 实例云标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagSpecification?: TagSpecification;
    /**
     * 命名空间元数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Metadata?: Array<KeyValueString>;
    /**
     * 漏洞白名单列表
     */
    CVEWhitelistItems?: Array<CVEWhitelistItem>;
    /**
     * 扫描级别，true为自动，false为手动
     */
    AutoScan?: boolean;
    /**
     * 安全阻断级别，true为开启，false为关闭
     */
    PreventVUL?: boolean;
    /**
     * 阻断漏洞等级，目前仅支持low、medium、high, 为""时表示没有设置
     */
    Severity?: string;
}
/**
 * DescribeImages返回参数结构体
 */
export interface DescribeImagesResponse {
    /**
     * 容器镜像信息列表
     */
    ImageInfoList?: Array<TcrImageInfo>;
    /**
     * 容器镜像总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRepositoryInfoPersonal返回参数结构体
 */
export interface ModifyRepositoryInfoPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWebhookTriggerLog请求参数结构体
 */
export interface DescribeWebhookTriggerLogRequest {
    /**
     * 实例 Id
     */
    RegistryId: string;
    /**
     * 命名空间
     */
    Namespace: string;
    /**
     * 触发器 Id
     */
    Id?: number;
    /**
     * 分页单页数量
     */
    Limit?: number;
    /**
     * 分页偏移量
     */
    Offset?: number;
}
/**
 * RenewInstance请求参数结构体
 */
export interface RenewInstanceRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 预付费自动续费标识和购买时长,0：手动续费，1：自动续费，2：不续费并且不通知;单位为月
     */
    RegistryChargePrepaid: RegistryChargePrepaid;
    /**
     * 0 续费， 1按量转包年包月
     */
    Flag: number;
}
/**
 * DescribeImageFilterPersonal请求参数结构体
 */
export interface DescribeImageFilterPersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
    /**
     * Tag名
     */
    Tag: string;
}
/**
 * DescribeTagRetentionExecutionTask请求参数结构体
 */
export interface DescribeTagRetentionExecutionTaskRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 规则Id
     */
    RetentionId: number;
    /**
     * 规则执行Id
     */
    ExecutionId: number;
    /**
     * 分页Page
     */
    Offset?: number;
    /**
     * 分页PageSize
     */
    Limit?: number;
}
/**
 * 同步规则
 */
export interface ReplicationRule {
    /**
     * 同步规则名称
     */
    Name: string;
    /**
     * 目标命名空间
     */
    DestNamespace: string;
    /**
     * 是否覆盖
     */
    Override: boolean;
    /**
     * 同步过滤条件
     */
    Filters: Array<ReplicationFilter>;
    /**
     * 是否同步删除事件
     */
    Deletion?: boolean;
}
/**
 * 仓库信息的返回信息
 */
export interface RepoInfoResp {
    /**
     * 仓库总数
     */
    TotalCount?: number;
    /**
     * 仓库信息列表
     */
    RepoInfo?: Array<RepoInfo>;
    /**
     * Server信息
     */
    Server?: string;
}
/**
 * DeleteRepositoryTags返回参数结构体
 */
export interface DeleteRepositoryTagsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteMultipleSecurityPolicy请求参数结构体
 */
export interface DeleteMultipleSecurityPolicyRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 安全组策略
     */
    SecurityGroupPolicySet: Array<SecurityPolicy>;
}
/**
 * DeleteSecurityPolicy返回参数结构体
 */
export interface DeleteSecurityPolicyResponse {
    /**
     * 实例Id
     */
    RegistryId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSignaturePolicy返回参数结构体
 */
export interface CreateSignaturePolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInternalEndpointDnsStatus返回参数结构体
 */
export interface DescribeInternalEndpointDnsStatusResponse {
    /**
     * vpc私有域名解析状态列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcSet: Array<VpcPrivateDomainStatus>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Webhook 触发器
 */
export interface WebhookTrigger {
    /**
     * 触发器名称
     */
    Name: string;
    /**
     * 触发器目标
     */
    Targets: Array<WebhookTarget>;
    /**
     * 触发动作
     */
    EventTypes: Array<string>;
    /**
     * 触发规则
     */
    Condition: string;
    /**
     * 启用触发器
     */
    Enabled: boolean;
    /**
     * 触发器Id
     */
    Id?: number;
    /**
     * 触发器描述
     */
    Description?: string;
    /**
     * 触发器所属命名空间 Id
     */
    NamespaceId?: number;
    /**
     * 触发器所属命名空间名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceName?: string;
}
/**
 * 实例状态
 */
export interface RegistryStatus {
    /**
     * 实例的Id
     */
    RegistryId: string;
    /**
     * 实例的状态
     */
    Status: string;
    /**
     * 附加状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Conditions: Array<RegistryCondition>;
}
/**
 * 安全策略
 */
export interface SecurityPolicy {
    /**
     * 策略索引
     */
    PolicyIndex?: number;
    /**
     * 备注
     */
    Description?: string;
    /**
     * 运行访问的公网IP地址端
     */
    CidrBlock?: string;
    /**
     * 安全策略的版本
     */
    PolicyVersion?: string;
}
/**
 * DescribeNamespacePersonal请求参数结构体
 */
export interface DescribeNamespacePersonalRequest {
    /**
     * 命名空间，支持模糊查询
     */
    Namespace: string;
    /**
     * 单页数量
     */
    Limit: number;
    /**
     * 偏移量
     */
    Offset: number;
}
/**
 * DeleteRepositoryPersonal返回参数结构体
 */
export interface DeleteRepositoryPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateInstanceToken返回参数结构体
 */
export interface CreateInstanceTokenResponse {
    /**
     * 用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Username?: string;
    /**
     * 访问凭证
     */
    Token?: string;
    /**
     * 访问凭证过期时间戳，是一个时间戳数字，无单位
     */
    ExpTime?: number;
    /**
     * 长期凭证的TokenId，短期凭证没有TokenId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TokenId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询应用更新触发器触发日志返回值
 */
export interface DescribeApplicationTriggerLogPersonalResp {
    /**
     * 返回总数
     */
    TotalCount?: number;
    /**
     * 触发日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogInfo?: Array<TriggerLogResp>;
}
/**
 * DeleteImagePersonal请求参数结构体
 */
export interface DeleteImagePersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
    /**
     * Tag名
     */
    Tag: string;
}
/**
 * DescribeApplicationTriggerPersonal返回参数结构体
 */
export interface DescribeApplicationTriggerPersonalResponse {
    /**
     * 触发器列表返回值
     */
    Data?: DescribeApplicationTriggerPersonalResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 版本保留执行的规则
 */
export interface RetentionTask {
    /**
     * 任务Id
     */
    TaskId: number;
    /**
     * 所属的规则执行Id
     */
    ExecutionId: number;
    /**
     * 任务开始时间
     */
    StartTime: string;
    /**
     * 任务结束时间
     */
    EndTime: string;
    /**
     * 任务的执行状态，Failed, Succeed, Stopped, InProgress
     */
    Status: string;
    /**
     * 总tag数
     */
    Total: number;
    /**
     * 保留tag数
     */
    Retained: number;
    /**
     * 应用的仓库
     */
    Repository: string;
}
/**
 * DescribeImageAccelerateService返回参数结构体
 */
export interface DescribeImageAccelerateServiceResponse {
    /**
     * 镜像加速状态
     */
    Status?: string;
    /**
     * CFS的VIP
     */
    CFSVIP?: string;
    /**
     * 是否开通
     */
    IsEnable?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 获取命名空间信息返回
 */
export interface NamespaceInfoResp {
    /**
     * 命名空间数量
     */
    NamespaceCount?: number;
    /**
     * 命名空间信息
     */
    NamespaceInfo?: Array<NamespaceInfo>;
}
/**
 * CreateRepositoryPersonal请求参数结构体
 */
export interface CreateRepositoryPersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
    /**
     * 是否公共,1:公共,0:私有
     */
    Public?: number;
    /**
     * 仓库描述
     */
    Description?: string;
}
/**
 * ModifyServiceAccountPassword请求参数结构体
 */
export interface ModifyServiceAccountPasswordRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 服务级账号名
     */
    Name: string;
    /**
     * 是否随机生成密码
     */
    Random: boolean;
    /**
     * 服务级账号密码，长度在8到20之间且需包含至少一个大写字符，一个小写字符和一个数字
     */
    Password?: string;
}
/**
 * DescribeImageFilterPersonal返回参数结构体
 */
export interface DescribeImageFilterPersonalResponse {
    /**
     * 返回tag镜像内容相同的tag列表
     */
    Data?: SameImagesResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeReplicationInstances请求参数结构体
 */
export interface DescribeReplicationInstancesRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 偏移量,默认0
     */
    Offset?: number;
    /**
     * 最大输出条数，默认20，最大为100
     */
    Limit?: number;
}
/**
 * DeleteWebhookTrigger请求参数结构体
 */
export interface DeleteWebhookTriggerRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 命名空间
     */
    Namespace: string;
    /**
     * 触发器 Id
     */
    Id: number;
}
/**
 * DeleteSignaturePolicy返回参数结构体
 */
export interface DeleteSignaturePolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 触发器触发结果
 */
export interface TriggerInvokeResult {
    /**
     * 请求TKE返回值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReturnCode?: number;
    /**
     * 请求TKE返回信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReturnMsg?: string;
}
/**
 * CreateUserPersonal返回参数结构体
 */
export interface CreateUserPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 自定义域名信息
 */
export interface CustomizedDomainInfo {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 证书ID
     */
    CertId: string;
    /**
     * 域名名称
     */
    DomainName: string;
    /**
     * 域名创建状态（SUCCESS, FAILURE, CREATING, DELETING）
     */
    Status: string;
}
/**
 * DeleteServiceAccount请求参数结构体
 */
export interface DeleteServiceAccountRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 服务级账号名
     */
    Name: string;
}
/**
 * DescribeImageManifests请求参数结构体
 */
export interface DescribeImageManifestsRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * 镜像仓库名称
     */
    RepositoryName: string;
    /**
     * 镜像版本
     */
    ImageVersion: string;
}
/**
 * 实例预付费模式
 */
export interface RegistryChargePrepaid {
    /**
     * 购买实例的时长，单位：月
     */
    Period: number;
    /**
     * 自动续费标识，0：手动续费，1：自动续费，2：不续费并且不通知
     */
    RenewFlag: number;
}
/**
 * ModifyNamespace请求参数结构体
 */
export interface ModifyNamespaceRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * 访问级别，True为公开，False为私有
     */
    IsPublic?: boolean;
    /**
     * 扫描级别，True为自动，False为手动
     */
    IsAutoScan?: boolean;
    /**
     * 阻断开关，True为开放，False为关闭
     */
    IsPreventVUL?: boolean;
    /**
     * 阻断漏洞等级，目前仅支持 low、medium、high
     */
    Severity?: string;
    /**
     * 漏洞白名单列表
     */
    CVEWhitelistItems?: Array<CVEWhitelistItem>;
}
/**
 * DeleteImage请求参数结构体
 */
export interface DeleteImageRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * 镜像仓库名称
     */
    RepositoryName: string;
    /**
     * 镜像版本
     */
    ImageVersion: string;
}
/**
 * ModifyRepositoryAccessPersonal请求参数结构体
 */
export interface ModifyRepositoryAccessPersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
    /**
     * 默认值为0, 1公共，0私有
     */
    Public: number;
}
/**
 * 云标签
 */
export interface TagSpecification {
    /**
     * 默认值为instance
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType: string;
    /**
     * 云标签数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<Tag>;
}
/**
 * CreateMultipleSecurityPolicy请求参数结构体
 */
export interface CreateMultipleSecurityPolicyRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 安全组策略
     */
    SecurityGroupPolicySet: Array<SecurityPolicy>;
}
/**
 * 通用参数字符串键值对
 */
export interface KeyValueString {
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
 * DescribeNamespaces请求参数结构体
 */
export interface DescribeNamespacesRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 指定命名空间，不填写默认查询所有命名空间
     */
    NamespaceName?: string;
    /**
     * 每页个数
     */
    Limit?: number;
    /**
     * 页面偏移（第几页）
     */
    Offset?: number;
    /**
     * 列出所有命名空间
     */
    All?: boolean;
    /**
     * 过滤条件
  - 按照【标签】过滤
     Name: Tags
     Value:   tagKey:tagVal
  
     */
    Filters?: Array<Filter>;
    /**
     * 仅查询启用了 KMS 镜像签名的空间
     */
    KmsSignPolicy?: boolean;
}
/**
 * ModifyRepositoryAccessPersonal返回参数结构体
 */
export interface ModifyRepositoryAccessPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageLifecycleGlobalPersonal请求参数结构体
 */
export declare type DescribeImageLifecycleGlobalPersonalRequest = null;
/**
 * DescribeImageLifecyclePersonal请求参数结构体
 */
export interface DescribeImageLifecyclePersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
}
/**
 * DeleteSecurityPolicy请求参数结构体
 */
export interface DeleteSecurityPolicyRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 白名单Id
     */
    PolicyIndex?: number;
    /**
     * 白名单版本
     */
    PolicyVersion?: string;
    /**
     * 网段或IP(互斥)
     */
    CidrBlock?: string;
}
/**
 * 查询共享版仓库信息返回
 */
export interface RepositoryInfoResp {
    /**
     * 镜像仓库名字
     */
    RepoName: string;
    /**
     * 镜像仓库类型
     */
    RepoType: string;
    /**
     * 镜像仓库服务地址
     */
    Server: string;
    /**
     * 创建时间
     */
    CreationTime: string;
    /**
     * 镜像仓库描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 是否为公有镜像
     */
    Public: number;
    /**
     * 下载次数
     */
    PullCount: number;
    /**
     * 收藏次数
     */
    FavorCount: number;
    /**
     * 是否为用户收藏
     */
    IsUserFavor: boolean;
    /**
     * 是否为腾讯云官方镜像
     */
    IsQcloudOfficial: boolean;
}
/**
 * CreateInstance请求参数结构体
 */
export interface CreateInstanceRequest {
    /**
     * 企业版实例名称
     */
    RegistryName: string;
    /**
     * 企业版实例类型（basic 基础版；standard 标准版；premium 高级版）
     */
    RegistryType: string;
    /**
     * 云标签描述
     */
    TagSpecification?: TagSpecification;
    /**
     * 实例计费类型，0表示按量计费，1表示预付费，默认为按量计费
     */
    RegistryChargeType?: number;
    /**
     * 预付费自动续费标识和购买时长
     */
    RegistryChargePrepaid?: RegistryChargePrepaid;
    /**
     * 是否同步TCR云标签至生成的COS Bucket
     */
    SyncTag?: boolean;
    /**
     * 是否开启Cos桶多AZ特性
     */
    EnableCosMAZ?: boolean;
    /**
     * 是否开启实例删除保护
     */
    DeletionProtection?: boolean;
}
/**
 * DescribeInstanceToken请求参数结构体
 */
export interface DescribeInstanceTokenRequest {
    /**
     * 实例 ID
     */
    RegistryId: string;
    /**
     * 分页单页数量
     */
    Limit?: number;
    /**
     * 分页偏移量
     */
    Offset?: number;
}
/**
 * BatchDeleteRepositoryPersonal返回参数结构体
 */
export interface BatchDeleteRepositoryPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNamespace请求参数结构体
 */
export interface CreateNamespaceRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间的名称（长度2-30个字符，只能包含小写字母、数字及分隔符("."、"_"、"-")，且不能以分隔符开头、结尾或连续）
     */
    NamespaceName: string;
    /**
     * 是否公开，true为公开，fale为私有
     */
    IsPublic: boolean;
    /**
     * 云标签描述
     */
    TagSpecification?: TagSpecification;
    /**
     * 自动扫描级别，true为自动，false为手动
     */
    IsAutoScan?: boolean;
    /**
     * 安全阻断级别，true为自动，false为手动
     */
    IsPreventVUL?: boolean;
    /**
     * 阻断漏洞等级，目前仅支持low、medium、high
     */
    Severity?: string;
    /**
     * 漏洞白名单列表
     */
    CVEWhitelistItems?: Array<CVEWhitelistItem>;
}
/**
 * CreateServiceAccount返回参数结构体
 */
export interface CreateServiceAccountResponse {
    /**
     * 服务级账号名（会自动加上前缀tcr$）
     */
    Name?: string;
    /**
     * 服务级账号密码，仅展示一次，请注意留存
     */
    Password?: string;
    /**
     * 服务级账号失效时间（时间戳）
     */
    ExpiresAt?: number;
    /**
     * 服务级账号创建时间
     */
    CreateTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BatchDeleteRepositoryPersonal请求参数结构体
 */
export interface BatchDeleteRepositoryPersonalRequest {
    /**
     * 仓库名称数组
     */
    RepoNames: Array<string>;
}
/**
 * GC 执行信息
 */
export interface GCJobInfo {
    /**
     * 作业 ID
     */
    ID?: number;
    /**
     * 作业状态
     */
    JobStatus?: string;
    /**
     * 创建时间
     */
    CreationTime?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 调度信息
     */
    Schedule?: Schedule;
}
/**
 * 实例信息结构体
 */
export interface Registry {
    /**
     * 实例ID
     */
    RegistryId?: string;
    /**
     * 实例名称
     */
    RegistryName?: string;
    /**
     * 实例规格
     */
    RegistryType?: string;
    /**
     * 实例状态。有以下状态：
  Pending, 初始化中
  Deploying, 创建中
  Running, 运行中
  Unhealthy, 状态异常
  FailedCreated, 创建失败
  FailedUpdated, 更新失败
  Bucket-Error, 存储桶异常
  Isolate, 待回收
  Deleting, 删除中
  DeleteBucketFailed, 实例删除存储桶失败
  DeleteFailed, 实例删除失败
     */
    Status?: string;
    /**
     * 实例的公共访问地址
     */
    PublicDomain?: string;
    /**
     * 实例创建时间
     */
    CreatedAt?: string;
    /**
     * 地域名称
     */
    RegionName?: string;
    /**
     * 地域Id
     */
    RegionId?: number;
    /**
     * 是否支持匿名
     */
    EnableAnonymous?: boolean;
    /**
     * Token有效时间
     */
    TokenValidTime?: number;
    /**
     * 实例内部访问地址
     */
    InternalEndpoint?: string;
    /**
     * 实例云标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagSpecification?: TagSpecification;
    /**
     * 实例过期时间（预付费）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredAt?: string;
    /**
     * 实例付费类型，0表示后付费，1表示预付费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMod?: number;
    /**
     * 预付费续费标识，0表示手动续费，1表示自动续费，2不续费并且不通知
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: number;
    /**
     * 是否开启实例删除保护，false表示不开启
     */
    DeletionProtection?: boolean;
}
/**
 * DescribeChartDownloadInfo请求参数结构体
 */
export interface DescribeChartDownloadInfoRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间
     */
    NamespaceName: string;
    /**
     * Chart包的名称
     */
    ChartName: string;
    /**
     * Chart包的版本
     */
    ChartVersion: string;
}
/**
 * ValidateRepositoryExistPersonal返回参数结构体
 */
export interface ValidateRepositoryExistPersonalResponse {
    /**
     * 验证个人版仓库是否存在返回信息
     */
    Data?: RepoIsExistResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteImageAccelerateService请求参数结构体
 */
export interface DeleteImageAccelerateServiceRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
}
/**
 * CheckInstance返回参数结构体
 */
export interface CheckInstanceResponse {
    /**
     * 检查结果，true为合法，false为非法
     */
    IsValidated?: boolean;
    /**
     * 实例所在的RegionId
     */
    RegionId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * NamespaceIsExists返回类型
 */
export interface NamespaceIsExistsResp {
    /**
     * 命名空间是否存在
     */
    IsExist: boolean;
    /**
     * 是否为保留命名空间
     */
    IsPreserved: boolean;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 实例ID列表(为空时，
  表示获取账号下所有实例)
     */
    Registryids?: Array<string>;
    /**
     * 偏移量,默认0
     */
    Offset?: number;
    /**
     * 最大输出条数，默认20，最大为100
     */
    Limit?: number;
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
    /**
     * 获取所有地域的实例，默认为False
     */
    AllRegion?: boolean;
}
/**
 * CreateInternalEndpointDns请求参数结构体
 */
export interface CreateInternalEndpointDnsRequest {
    /**
     * tcr实例id
     */
    InstanceId: string;
    /**
     * 私有网络id
     */
    VpcId: string;
    /**
     * tcr内网访问链路ip
     */
    EniLBIp: string;
    /**
     * true：为默认域名，公网域名一致
  false: 使用vpc域名
  默认为vpc域名
     */
    UsePublicDomain?: boolean;
    /**
     * 解析地域，需要保证和vpc处于同一地域，如果不填则默认为主实例地域
     */
    RegionName?: string;
    /**
     * 请求的地域ID，用于实例复制地域
     */
    RegionId?: number;
}
/**
 * 触发器触发条件
 */
export interface TriggerInvokeCondition {
    /**
     * 触发方式
     */
    InvokeMethod?: string;
    /**
     * 触发表达式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvokeExpr?: string;
}
/**
 * DescribeImmutableTagRules请求参数结构体
 */
export interface DescribeImmutableTagRulesRequest {
    /**
     * 实例 Id
     */
    RegistryId: string;
}
/**
 * 过滤器
 */
export interface Filter {
    /**
     * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
     */
    Name: string;
    /**
     * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
     */
    Values: Array<string>;
}
/**
 * 版本保留规则执行
 */
export interface RetentionExecution {
    /**
     * 执行Id
     */
    ExecutionId: number;
    /**
     * 所属规则id
     */
    RetentionId: number;
    /**
     * 执行的开始时间
     */
    StartTime: string;
    /**
     * 执行的结束时间
     */
    EndTime: string;
    /**
     * 执行的状态，Failed, Succeed, Stopped, InProgress
     */
    Status: string;
}
/**
 * DuplicateImage返回参数结构体
 */
export interface DuplicateImageResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeReplicationInstanceCreateTasks请求参数结构体
 */
export interface DescribeReplicationInstanceCreateTasksRequest {
    /**
     * 同步实例Id，见实例返回列表中的同步实例ID
     */
    ReplicationRegistryId: string;
    /**
     * 同步实例的地域ID，见实例返回列表中地域ID
     */
    ReplicationRegionId: number;
}
/**
 * ModifyWebhookTrigger返回参数结构体
 */
export interface ModifyWebhookTriggerResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 仓库的信息
 */
export interface RepoInfo {
    /**
     * 仓库名称
     */
    RepoName?: string;
    /**
     * 仓库类型
     */
    RepoType?: string;
    /**
     * Tag数量
     */
    TagCount?: number;
    /**
     * 是否为公开
     */
    Public?: number;
    /**
     * 是否为用户收藏
     */
    IsUserFavor?: boolean;
    /**
     * 是否为腾讯云官方仓库
     */
    IsQcloudOfficial?: boolean;
    /**
     * 被收藏的个数
     */
    FavorCount?: number;
    /**
     * 拉取的数量
     */
    PullCount?: number;
    /**
     * 描述
     */
    Description?: string;
    /**
     * 仓库创建时间
     */
    CreationTime?: string;
    /**
     * 仓库更新时间
     */
    UpdateTime?: string;
}
/**
 * ManageImageLifecycleGlobalPersonal请求参数结构体
 */
export interface ManageImageLifecycleGlobalPersonalRequest {
    /**
     * global_keep_last_days:全局保留最近几天的数据;global_keep_last_nums:全局保留最近多少个
     */
    Type: string;
    /**
     * 策略值
     */
    Val: number;
}
/**
 * DescribeUserQuotaPersonal返回参数结构体
 */
export interface DescribeUserQuotaPersonalResponse {
    /**
     * 配额返回信息
     */
    Data?: RespLimit;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务详情
 */
export interface TaskDetail {
    /**
     * 任务
     */
    TaskName?: string;
    /**
     * 任务UUID
     */
    TaskUUID?: string;
    /**
     * 任务状态
     */
    TaskStatus?: string;
    /**
     * 任务的状态信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskMessage?: string;
    /**
     * 任务开始时间
     */
    CreatedTime?: string;
    /**
     * 任务结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FinishedTime?: string;
}
/**
 * DescribeImagePersonal请求参数结构体
 */
export interface DescribeImagePersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回最大数量，默认 20, 最大值 100
     */
    Limit?: number;
    /**
     * tag名称，可根据输入搜索
     */
    Tag?: string;
}
/**
 * CreateServiceAccount请求参数结构体
 */
export interface CreateServiceAccountRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 服务级账号名
     */
    Name: string;
    /**
     * 策略列表
     */
    Permissions: Array<Permission>;
    /**
     * 服务级账号描述
     */
    Description?: string;
    /**
     * 有效期(单位：天)，从当前时间开始计算，优先级高于ExpiresAt
     */
    Duration?: number;
    /**
     * 过期时间（时间戳，单位:毫秒）
     */
    ExpiresAt?: number;
    /**
     * 是否禁用服务级账号
     */
    Disable?: boolean;
}
/**
 * DescribeRepositoryFilterPersonal返回参数结构体
 */
export interface DescribeRepositoryFilterPersonalResponse {
    /**
     * 仓库信息
     */
    Data?: SearchUserRepositoryResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySecurityPolicy返回参数结构体
 */
export interface ModifySecurityPolicyResponse {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyApplicationTriggerPersonal返回参数结构体
 */
export interface ModifyApplicationTriggerPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
    /**
     * 实例id
     */
    RegistryId: string;
    /**
     * 是否删除存储桶，默认为false
     */
    DeleteBucket?: boolean;
    /**
     * 是否dryRun模式，缺省值：false
     */
    DryRun?: boolean;
}
/**
 * DescribeImageManifests返回参数结构体
 */
export interface DescribeImageManifestsResponse {
    /**
     * 镜像的Manifest信息
     */
    Manifest?: string;
    /**
     * 镜像的配置信息
     */
    Config?: string;
    /**
     * 镜像的Labels信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<KeyValueString>;
    /**
     * 镜像大小，单位：byte
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNamespacePersonal返回参数结构体
 */
export interface DescribeNamespacePersonalResponse {
    /**
     * 用户命名空间返回信息
     */
    Data?: NamespaceInfoResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteReplicationInstance返回参数结构体
 */
export interface DeleteReplicationInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWebhookTrigger请求参数结构体
 */
export interface DescribeWebhookTriggerRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 分页单页数量
     */
    Limit?: number;
    /**
     * 分页偏移量
     */
    Offset?: number;
    /**
     * 命名空间
     */
    Namespace?: string;
}
/**
 * 镜像 tag 不可变规则
 */
export interface ImmutableTagRule {
    /**
     * 仓库匹配规则
     */
    RepositoryPattern: string;
    /**
     * Tag 匹配规则
     */
    TagPattern: string;
    /**
     * repoMatches或repoExcludes
     */
    RepositoryDecoration: string;
    /**
     * matches或excludes
     */
    TagDecoration: string;
    /**
     * 禁用规则
     */
    Disabled?: boolean;
    /**
     * 规则 Id
     */
    RuleId?: number;
    /**
     * 命名空间
     */
    NsName?: string;
}
/**
 * Header KV
 */
export interface Header {
    /**
     * Header Key
     */
    Key: string;
    /**
     * Header Values
     */
    Values: Array<string>;
}
/**
 * DescribeReplicationInstances返回参数结构体
 */
export interface DescribeReplicationInstancesResponse {
    /**
     * 总实例个数
     */
    TotalCount: number;
    /**
     * 同步实例列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReplicationRegistries: Array<ReplicationRegistry>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSecurityPolicy请求参数结构体
 */
export interface CreateSecurityPolicyRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 192.168.0.0/24
     */
    CidrBlock: string;
    /**
     * 备注
     */
    Description: string;
}
/**
 * ManageReplication返回参数结构体
 */
export interface ManageReplicationResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWebhookTrigger请求参数结构体
 */
export interface CreateWebhookTriggerRequest {
    /**
     * 实例 Id
     */
    RegistryId: string;
    /**
     * 触发器参数
     */
    Trigger: WebhookTrigger;
    /**
     * 命名空间
     */
    Namespace: string;
}
/**
 * DeleteImageAccelerateService返回参数结构体
 */
export interface DeleteImageAccelerateServiceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 命名空间漏洞白名单列表
 */
export interface CVEWhitelistItem {
    /**
     * 漏洞白名单 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CVEID?: string;
}
/**
 * ModifyRepositoryInfoPersonal请求参数结构体
 */
export interface ModifyRepositoryInfoPersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
    /**
     * 仓库描述
     */
    Description: string;
}
/**
 * DescribeApplicationTriggerLogPersonal请求参数结构体
 */
export interface DescribeApplicationTriggerLogPersonalRequest {
    /**
     * 仓库名称
     */
    RepoName?: string;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回最大数量，默认 20, 最大值 100
     */
    Limit?: number;
    /**
     * 升序或降序
     */
    Order?: string;
    /**
     * 按某列排序
     */
    OrderBy?: string;
}
/**
 * DescribeGCJobs返回参数结构体
 */
export interface DescribeGCJobsResponse {
    /**
     * GC Job 列表
     */
    Jobs: Array<GCJobInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFavorRepositoryPersonal请求参数结构体
 */
export interface DescribeFavorRepositoryPersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
    /**
     * 分页Limit
     */
    Limit: number;
    /**
     * Offset用于分页
     */
    Offset: number;
}
/**
 * DescribeApplicationTriggerPersonal请求参数结构体
 */
export interface DescribeApplicationTriggerPersonalRequest {
    /**
     * 仓库名称
     */
    RepoName?: string;
    /**
     * 触发器名称
     */
    TriggerName?: string;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回最大数量，默认 20, 最大值 100
     */
    Limit?: number;
}
/**
 * DeleteMultipleSecurityPolicy返回参数结构体
 */
export interface DeleteMultipleSecurityPolicyResponse {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ManageInternalEndpoint返回参数结构体
 */
export interface ManageInternalEndpointResponse {
    /**
     * 实例Id
     */
    RegistryId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRepositoryPersonal返回参数结构体
 */
export interface CreateRepositoryPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateInstanceCustomizedDomain请求参数结构体
 */
export interface CreateInstanceCustomizedDomainRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 自定义域名
     */
    DomainName: string;
    /**
     * 证书ID
     */
    CertificateId: string;
}
/**
 * CreateTagRetentionExecution返回参数结构体
 */
export interface CreateTagRetentionExecutionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFavorRepositoryPersonal返回参数结构体
 */
export interface DescribeFavorRepositoryPersonalResponse {
    /**
     * 个人收藏仓库列表返回信息
     */
    Data?: FavorResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckInstanceName返回参数结构体
 */
export interface CheckInstanceNameResponse {
    /**
     * 检查结果，true为合法，false为非法
     */
    IsValidated?: boolean;
    /**
     * 1: Illegal（名称非法）, 2:Reserved（名字保留）, 3:Existed（名字已存在）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DetailCode?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTagRetentionRule返回参数结构体
 */
export interface DeleteTagRetentionRuleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRepositoryOwnerPersonal请求参数结构体
 */
export interface DescribeRepositoryOwnerPersonalRequest {
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回最大数量，默认 20, 最大值 100
     */
    Limit?: number;
    /**
     * 仓库名称
     */
    RepoName?: string;
}
/**
 * DescribeExternalEndpointStatus返回参数结构体
 */
export interface DescribeExternalEndpointStatusResponse {
    /**
     * 开启公网访问状态，开启中（Opening）、已开启（Opened）、关闭（Closed）
     */
    Status: string;
    /**
     * 原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reason: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTagRetentionRules返回参数结构体
 */
export interface DescribeTagRetentionRulesResponse {
    /**
     * 版本保留策略列表
     */
    RetentionPolicyList?: Array<RetentionPolicy>;
    /**
     * 版本保留策略总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRegions请求参数结构体
 */
export declare type DescribeRegionsRequest = null;
/**
 * ManageExternalEndpoint返回参数结构体
 */
export interface ManageExternalEndpointResponse {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImmutableTagRules返回参数结构体
 */
export interface DescribeImmutableTagRulesResponse {
    /**
     * 规则列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rules?: Array<ImmutableTagRule>;
    /**
     * 未创建规则的命名空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EmptyNs?: Array<string>;
    /**
     * 规则总量
     */
    Total?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyApplicationTriggerPersonal请求参数结构体
 */
export interface ModifyApplicationTriggerPersonalRequest {
    /**
     * 触发器关联的镜像仓库，library/test格式
     */
    RepoName?: string;
    /**
     * 触发器名称，必填参数
     */
    TriggerName?: string;
    /**
     * 触发方式，"all"全部触发，"taglist"指定tag触发，"regex"正则触发
     */
    InvokeMethod?: string;
    /**
     * 触发方式对应的表达式
     */
    InvokeExpr?: string;
    /**
     * 应用所在TKE集群ID
     */
    ClusterId?: string;
    /**
     * 应用所在TKE集群命名空间
     */
    Namespace?: string;
    /**
     * 应用所在TKE集群工作负载类型,支持Deployment、StatefulSet、DaemonSet、CronJob、Job。
     */
    WorkloadType?: string;
    /**
     * 应用所在TKE集群工作负载名称
     */
    WorkloadName?: string;
    /**
     * 应用所在TKE集群工作负载下容器名称
     */
    ContainerName?: string;
    /**
     * 应用所在TKE集群地域数字ID，如1（广州）、16（成都）
     */
    ClusterRegion?: number;
    /**
     * 新触发器名称
     */
    NewTriggerName?: string;
}
/**
 * CreateReplicationInstance返回参数结构体
 */
export interface CreateReplicationInstanceResponse {
    /**
     * 企业版复制实例Id
     */
    ReplicationRegistryId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateInstanceToken请求参数结构体
 */
export interface CreateInstanceTokenRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 访问凭证类型，longterm 为长期访问凭证，temp 为临时访问凭证，默认是临时访问凭证，有效期1小时
     */
    TokenType?: string;
    /**
     * 长期访问凭证描述信息
     */
    Desc?: string;
}
/**
 * DescribeServiceAccounts返回参数结构体
 */
export interface DescribeServiceAccountsResponse {
    /**
     * 服务级账号列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceAccounts?: Array<ServiceAccount>;
    /**
     * 服务级账户数量
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateInstanceCustomizedDomain返回参数结构体
 */
export interface CreateInstanceCustomizedDomainResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 跨主账号实例同步参数
 */
export interface PeerReplicationOption {
    /**
     * 待同步实例的uin
     */
    PeerRegistryUin: string;
    /**
     * 待同步实例的访问永久Token
     */
    PeerRegistryToken: string;
    /**
     * 是否开启跨主账号实例同步
     */
    EnablePeerReplication: boolean;
}
/**
 * DescribeSecurityPolicies请求参数结构体
 */
export interface DescribeSecurityPoliciesRequest {
    /**
     * 实例的Id
     */
    RegistryId: string;
}
/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 企业版复制实例
 */
export interface ReplicationRegistry {
    /**
     * 主实例ID
     */
    RegistryId: string;
    /**
     * 复制实例ID
     */
    ReplicationRegistryId: string;
    /**
     * 复制实例的地域ID
     */
    ReplicationRegionId: number;
    /**
     * 复制实例的地域名称
     */
    ReplicationRegionName: string;
    /**
     * 复制实例的状态
     */
    Status: string;
    /**
     * 创建时间
     */
    CreatedAt: string;
}
/**
 * DescribeInternalEndpoints请求参数结构体
 */
export interface DescribeInternalEndpointsRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
}
/**
 * ValidateNamespaceExistPersonal返回参数结构体
 */
export interface ValidateNamespaceExistPersonalResponse {
    /**
     * 验证命名空间是否存在返回信息
     */
    Data?: NamespaceIsExistsResp;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CheckInstance请求参数结构体
 */
export interface CheckInstanceRequest {
    /**
     * 待检测的实例Id
     */
    RegistryId: string;
}
/**
 * 拉取触发器列表返回值
 */
export interface DescribeApplicationTriggerPersonalResp {
    /**
     * 返回条目总数
     */
    TotalCount?: number;
    /**
     * 触发器列表
     */
    TriggerInfo?: Array<TriggerResp>;
}
/**
 * 镜像tag信息
 */
export interface TagInfo {
    /**
     * Tag名称
     */
    TagName?: string;
    /**
     * 制品的 ID
     */
    TagId?: string;
    /**
     * docker image 可以看到的id
     */
    ImageId?: string;
    /**
     * 大小
     */
    Size?: string;
    /**
     * 制品的创建时间
     */
    CreationTime?: string;
    /**
     * 制品创建至今时间长度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DurationDays?: string;
    /**
     * 标注的制品作者
     */
    Author?: string;
    /**
     * 标注的制品平台
     */
    Architecture?: string;
    /**
     * 创建制品的 Docker 版本
     */
    DockerVersion?: string;
    /**
     * 标注的制品操作系统
     */
    OS?: string;
    /**
     * 制品大小
     */
    SizeByte?: number;
    /**
     * 序号
     */
    Id?: number;
    /**
     * 数据更新时间
     */
    UpdateTime?: string;
    /**
     * 制品更新时间
     */
    PushTime?: string;
    /**
     * 制品类型
     */
    Kind?: string;
}
/**
 * CreateRepository请求参数结构体
 */
export interface CreateRepositoryRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * 仓库名称
     */
    RepositoryName: string;
    /**
     * 仓库简短描述
     */
    BriefDescription?: string;
    /**
     * 仓库详细描述
     */
    Description?: string;
}
/**
 * DeleteImage返回参数结构体
 */
export interface DeleteImageResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageAccelerateService请求参数结构体
 */
export interface DescribeImageAccelerateServiceRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
}
/**
 * DeleteNamespace请求参数结构体
 */
export interface DeleteNamespaceRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间的名称
     */
    NamespaceName: string;
}
/**
 * BatchDeleteImagePersonal请求参数结构体
 */
export interface BatchDeleteImagePersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
    /**
     * Tag列表
     */
    Tags: Array<string>;
}
/**
 * DescribeImages请求参数结构体
 */
export interface DescribeImagesRequest {
    /**
     * 实例ID
     */
    RegistryId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * 镜像仓库名称
     */
    RepositoryName: string;
    /**
     * 指定镜像版本进行查找，当前为模糊搜索
     */
    ImageVersion?: string;
    /**
     * 每页个数，用于分页，默认20
     */
    Limit?: number;
    /**
     * 页数，默认值为1
  补充说明：limit指的是每页的大小，offset指的是具体第几页。
  举例：limit 20 offset 1指的是1-20；limit 20 offset 2 指的是21-40；limit 30 offset 4 是指 90-120。
     */
    Offset?: number;
    /**
     * 指定镜像 Digest 进行查找
     */
    Digest?: string;
    /**
     * 指定是否为精准匹配，true为精准匹配，不填为模糊匹配
     */
    ExactMatch?: boolean;
}
/**
 * DescribeGCJobs请求参数结构体
 */
export interface DescribeGCJobsRequest {
    /**
     * 实例 Id
     */
    RegistryId: string;
}
/**
 * DescribeTagRetentionExecution请求参数结构体
 */
export interface DescribeTagRetentionExecutionRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 规则Id
     */
    RetentionId: number;
    /**
     * 分页PageSize
     */
    Limit?: number;
    /**
     * 分页Page
     */
    Offset?: number;
}
/**
 * CreateRepository返回参数结构体
 */
export interface CreateRepositoryResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTagRetentionRules请求参数结构体
 */
export interface DescribeTagRetentionRulesRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 命名空间的名称
     */
    NamespaceName?: string;
    /**
     * 分页PageSize
     */
    Limit?: number;
    /**
     * 分页Page
     */
    Offset?: number;
}
/**
 * 服务级账号
 */
export interface ServiceAccount {
    /**
     * 服务级账号名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 是否禁用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Disable?: boolean;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiresAt?: number;
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
     * 策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Permissions?: Array<Permission>;
}
/**
 * 用户配额返回值
 */
export interface RespLimit {
    /**
     * 配额信息
     */
    LimitInfo: Array<Limit>;
}
/**
 * CheckInstanceName请求参数结构体
 */
export interface CheckInstanceNameRequest {
    /**
     * 待创建的实例名称
     */
    RegistryName: string;
}
/**
 * DescribeInstanceAllNamespaces请求参数结构体
 */
export interface DescribeInstanceAllNamespacesRequest {
    /**
     * 每页个数
     */
    Limit?: number;
    /**
     * 起始偏移位置
     */
    Offset?: number;
}
/**
 * DescribeInstanceToken返回参数结构体
 */
export interface DescribeInstanceTokenResponse {
    /**
     * 长期访问凭证总数
     */
    TotalCount?: number;
    /**
     * 长期访问凭证列表
     */
    Tokens?: Array<TcrInstanceToken>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceCustomizedDomain请求参数结构体
 */
export interface DescribeInstanceCustomizedDomainRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 分页Limit
     */
    Limit?: number;
    /**
     * 分页Offset
     */
    Offset?: number;
}
/**
 * 指定tag镜像内容相同的tag列表
 */
export interface SameImagesResp {
    /**
     * tag列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SameImages: Array<string>;
}
/**
 * DescribeTagRetentionExecution返回参数结构体
 */
export interface DescribeTagRetentionExecutionResponse {
    /**
     * 版本保留执行记录列表
     */
    RetentionExecutionList?: Array<RetentionExecution>;
    /**
     * 版本保留执行记录总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNamespacePersonal请求参数结构体
 */
export interface CreateNamespacePersonalRequest {
    /**
     * 命名空间名称
     */
    Namespace: string;
}
/**
 * DeleteImmutableTagRules请求参数结构体
 */
export interface DeleteImmutableTagRulesRequest {
    /**
     * 实例 Id
     */
    RegistryId: string;
    /**
     * 命名空间
     */
    NamespaceName: string;
    /**
     * 规则 Id
     */
    RuleId: number;
}
/**
 * CreateWebhookTrigger返回参数结构体
 */
export interface CreateWebhookTriggerResponse {
    /**
     * 新建的触发器
     */
    Trigger?: WebhookTrigger;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyServiceAccount返回参数结构体
 */
export interface ModifyServiceAccountResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSignaturePolicy请求参数结构体
 */
export interface CreateSignaturePolicyRequest {
    /**
     * 实例 Id
     */
    RegistryId: string;
    /**
     * 策略名称
     */
    Name: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * KMS 密钥
     */
    KmsId: string;
    /**
     * KMS 密钥所属地域
     */
    KmsRegion: string;
    /**
     * 用户自定义域名，为空时使用 TCR 实例默认域名生成签名
     */
    Domain?: string;
    /**
     * 禁用加签策略，默认为 false
     */
    Disabled?: boolean;
}
/**
 * DeleteTagRetentionRule请求参数结构体
 */
export interface DeleteTagRetentionRuleRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 版本保留规则的Id
     */
    RetentionId: number;
}
/**
 * 同步规则过滤器
 */
export interface ReplicationFilter {
    /**
     * 类型（name、tag和resource）
     */
    Type: string;
    /**
     * 默认为空
     */
    Value?: string;
}
/**
 * Tcr镜像仓库信息
 */
export interface TcrRepositoryInfo {
    /**
     * 仓库名称
     */
    Name: string;
    /**
     * 命名空间名称
     */
    Namespace: string;
    /**
     * 创建时间，格式"2006-01-02 15:04:05.999999999 -0700 MST"
     */
    CreationTime: string;
    /**
     * 是否公开
     */
    Public: boolean;
    /**
     * 仓库详细描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * 简单描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BriefDescription: string;
    /**
     * 更新时间，格式"2006-01-02 15:04:05.999999999 -0700 MST"
     */
    UpdateTime: string;
}
/**
 * 实例登录令牌
 */
export interface TcrInstanceToken {
    /**
     * 令牌ID
     */
    Id: string;
    /**
     * 令牌描述
     */
    Desc: string;
    /**
     * 令牌所属实例ID
     */
    RegistryId: string;
    /**
     * 令牌启用状态
     */
    Enabled: boolean;
    /**
     * 令牌创建时间
     */
    CreatedAt: string;
    /**
     * 令牌过期时间戳
     */
    ExpiredAt: number;
}
/**
 * ModifyUserPasswordPersonal请求参数结构体
 */
export interface ModifyUserPasswordPersonalRequest {
    /**
     * 更新后的密码
     */
    Password: string;
}
/**
 * DeleteRepository请求参数结构体
 */
export interface DeleteRepositoryRequest {
    /**
     * 实例Id
     */
    RegistryId: string;
    /**
     * 命名空间的名称
     */
    NamespaceName: string;
    /**
     * 镜像仓库的名称
     */
    RepositoryName: string;
}
/**
 * CreateInternalEndpointDns返回参数结构体
 */
export interface CreateInternalEndpointDnsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DuplicateImage请求参数结构体
 */
export interface DuplicateImageRequest {
    /**
     * 实例id
     */
    RegistryId: string;
    /**
     * 源命名空间名称
     */
    SourceNamespace: string;
    /**
     * 源镜像仓库名称
     */
    SourceRepo: string;
    /**
     * 源镜像tag或digest值，目前仅支持tag
     */
    SourceReference: string;
    /**
     * 目标镜像版本
     */
    DestinationTag: string;
    /**
     * 目标命名空间，不填默认与源一致
     */
    DestinationNamespace?: string;
    /**
     * 目标镜像仓库，不填默认与源一致
     */
    DestinationRepo?: string;
    /**
     * 是否覆盖
     */
    Override?: boolean;
}
/**
 * CreateTagRetentionExecution请求参数结构体
 */
export interface CreateTagRetentionExecutionRequest {
    /**
     * 主实例iD
     */
    RegistryId: string;
    /**
     * 版本保留规则Id
     */
    RetentionId: number;
    /**
     * 是否模拟执行，默认值为false，即非模拟执行
     */
    DryRun?: boolean;
}
/**
 * 同步日志
 */
export interface ReplicationLog {
    /**
     * 资源类型
     */
    ResourceType?: string;
    /**
     * 源资源
     */
    Source?: string;
    /**
     * 目的资源
     */
    Destination?: string;
    /**
     * 同步状态
     */
    Status?: string;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
}
/**
 * DescribeInstanceAllNamespaces返回参数结构体
 */
export interface DescribeInstanceAllNamespacesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyServiceAccountPassword返回参数结构体
 */
export interface ModifyServiceAccountPasswordResponse {
    /**
     * 自定义用户密码，仅展示一次，请注意留存
     */
    Password?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateApplicationTriggerPersonal返回参数结构体
 */
export interface CreateApplicationTriggerPersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 共享镜像仓库用户配额
 */
export interface Limit {
    /**
     * 用户名
     */
    Username: string;
    /**
     * 配额的类型
     */
    Type: string;
    /**
     * 配置的值
     */
    Value: number;
}
/**
 * BatchDeleteImagePersonal返回参数结构体
 */
export interface BatchDeleteImagePersonalResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteInternalEndpointDns返回参数结构体
 */
export interface DeleteInternalEndpointDnsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRepositoryPersonal请求参数结构体
 */
export interface DeleteRepositoryPersonalRequest {
    /**
     * 仓库名称
     */
    RepoName: string;
}
