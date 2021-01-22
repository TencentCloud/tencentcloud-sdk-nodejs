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
 * DescribeImagePersonal返回参数结构体
 */
export interface DescribeImagePersonalResponse {
    /**
      * 镜像tag信息
      */
    Data?: TagInfoResp;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeReplicationInstances返回参数结构体
 */
export interface DescribeReplicationInstancesResponse {
    /**
      * 总实例个数
      */
    TotalCount?: number;
    /**
      * 同步实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReplicationRegistries?: Array<ReplicationRegistry>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeReplicationInstanceCreateTasks返回参数结构体
 */
export interface DescribeReplicationInstanceCreateTasksResponse {
    /**
      * 任务详情
      */
    TaskDetail?: Array<TaskDetail>;
    /**
      * 整体任务状态
      */
    Status?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    VpcId: string;
    /**
      * 子网Id
      */
    SubnetId: string;
    /**
      * 内网接入状态
      */
    Status: string;
    /**
      * 内网接入Ip
      */
    AccessIp: string;
}
/**
 * ModifyRepository返回参数结构体
 */
export interface ModifyRepositoryResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    RepoName: string;
    /**
      * Tag名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagName: string;
    /**
      * 触发器名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TriggerName: string;
    /**
      * 触发方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokeSource: string;
    /**
      * 触发动作
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokeAction: string;
    /**
      * 触发时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokeTime: string;
    /**
      * 触发条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokeCondition: TriggerInvokeCondition;
    /**
      * 触发参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokePara: TriggerInvokePara;
    /**
      * 触发结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokeResult: TriggerInvokeResult;
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
 * CreateInstance返回参数结构体
 */
export interface CreateInstanceResponse {
    /**
      * 企业版实例Id
      */
    RegistryId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * 任务详情
 */
export interface TaskDetail {
    /**
      * 任务
      */
    TaskName: string;
    /**
      * 任务UUID
      */
    TaskUUID: string;
    /**
      * 任务状态
      */
    TaskStatus: string;
    /**
      * 任务的状态信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskMessage: string;
    /**
      * 任务开始时间
      */
    CreatedTime: string;
    /**
      * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    FinishedTime: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
    Username: string;
    /**
      * 仓库名
      */
    RepoName: string;
    /**
      * 类型
      */
    Type: string;
    /**
      * 策略值
      */
    Value: number;
    /**
      * Valid
      */
    Valid: number;
    /**
      * 创建时间
      */
    CreationTime: string;
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
 * RenewInstance返回参数结构体
 */
export interface RenewInstanceResponse {
    /**
      * 企业版实例Id
      */
    RegistryId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例信息结构体
 */
export interface Registry {
    /**
      * 实例ID
      */
    RegistryId: string;
    /**
      * 实例名称
      */
    RegistryName: string;
    /**
      * 实例规格
      */
    RegistryType: string;
    /**
      * 实例状态
      */
    Status: string;
    /**
      * 实例的公共访问地址
      */
    PublicDomain: string;
    /**
      * 实例创建时间
      */
    CreatedAt: string;
    /**
      * 地域名称
      */
    RegionName: string;
    /**
      * 地域Id
      */
    RegionId: number;
    /**
      * 是否支持匿名
      */
    EnableAnonymous: boolean;
    /**
      * Token有效时间
      */
    TokenValidTime: number;
    /**
      * 实例内部访问地址
      */
    InternalEndpoint: string;
    /**
      * 实例云标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSpecification: TagSpecification;
    /**
      * 实例过期时间（预付费）
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpiredAt: string;
    /**
      * 实例付费类型，0表示后付费，1表示预付费
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayMod: number;
    /**
      * 预付费续费标识，0表示手动续费，1表示自动续费，2不续费并且不通知
注意：此字段可能返回 null，表示取不到有效值。
      */
    RenewFlag: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteInstanceToken返回参数结构体
 */
export interface DeleteInstanceTokenResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyInstanceToken返回参数结构体
 */
export interface ModifyInstanceTokenResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount: number;
    /**
      * 仓库信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepoInfo: Array<Favors>;
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
 * DeleteNamespacePersonal请求参数结构体
 */
export interface DeleteNamespacePersonalRequest {
    /**
      * 命名空间名称
      */
    Namespace: string;
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
 * RenewInstance请求参数结构体
 */
export interface RenewInstanceRequest {
    /**
      * 实例Id
      */
    RegistryId: string;
    /**
      * 预付费自动续费标识和购买时长
      */
    RegistryChargePrepaid: RegistryChargePrepaid;
    /**
      * 0 续费， 1按量转包年包月
      */
    Flag: number;
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
 * DeleteRepository返回参数结构体
 */
export interface DeleteRepositoryResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteImagePersonal返回参数结构体
 */
export interface DeleteImagePersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例创建过程
 */
export interface RegistryCondition {
    /**
      * 实例创建过程类型
      */
    Type: string;
    /**
      * 实例创建过程状态
      */
    Status: string;
    /**
      * 转换到该过程的简明原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Reason: string;
}
/**
 * DeleteWebhookTrigger返回参数结构体
 */
export interface DeleteWebhookTriggerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteImageLifecycleGlobalPersonal返回参数结构体
 */
export interface DeleteImageLifecycleGlobalPersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DuplicateImagePersonal返回参数结构体
 */
export interface DuplicateImagePersonalResponse {
    /**
      * 复制镜像返回值
      */
    Data?: DupImageTagResp;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 云标签Tag
 */
export interface Tag {
    /**
      * 云标签的key
      */
    Key: string;
    /**
      * 云标签的值
      */
    Value: string;
}
/**
 * 复制镜像tag返回值
 */
export interface DupImageTagResp {
    /**
      * 镜像Digest值
      */
    Digest: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeInternalEndpoints返回参数结构体
 */
export interface DescribeInternalEndpointsResponse {
    /**
      * 内网接入信息的列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessVpcSet?: Array<AccessVpc>;
    /**
      * 内网接入总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount: number;
    /**
      * 自动删除策略列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    StrategyInfo: Array<AutoDelStrategyInfo>;
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
 * DescribeImageLifecyclePersonal返回参数结构体
 */
export interface DescribeImageLifecyclePersonalResponse {
    /**
      * 自动删除策略信息
      */
    Data?: AutoDelStrategyInfoResp;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 启用或禁用实例长期访问凭证
      */
    Enable: boolean;
    /**
      * 实例 ID
      */
    RegistryId: string;
}
/**
 * DeleteImageLifecyclePersonal返回参数结构体
 */
export interface DeleteImageLifecyclePersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateNamespace返回参数结构体
 */
export interface CreateNamespaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyWebhookTrigger返回参数结构体
 */
export interface ModifyWebhookTriggerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateImageLifecyclePersonal返回参数结构体
 */
export interface CreateImageLifecyclePersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 仓库是否存在的返回值
 */
export interface RepoIsExistResp {
    /**
      * 仓库是否存在
      */
    IsExist: boolean;
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
      * 镜像大小
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateNamespacePersonal返回参数结构体
 */
export interface CreateNamespacePersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteInstance返回参数结构体
 */
export interface DeleteInstanceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeInstanceStatus返回参数结构体
 */
export interface DescribeInstanceStatusResponse {
    /**
      * 实例的状态列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryStatusSet?: Array<RegistryStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteNamespace返回参数结构体
 */
export interface DeleteNamespaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    RepoName: string;
    /**
      * 仓库类型
      */
    RepoType: string;
    /**
      * Pull总共的次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    PullCount: number;
    /**
      * 仓库收藏次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    FavorCount: number;
    /**
      * 仓库是否公开
注意：此字段可能返回 null，表示取不到有效值。
      */
    Public: number;
    /**
      * 是否为官方所有
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsQcloudOfficial: boolean;
    /**
      * 仓库Tag的数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagCount: number;
    /**
      * Logo
注意：此字段可能返回 null，表示取不到有效值。
      */
    Logo: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 地域的Id
      */
    RegionId: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyNamespace返回参数结构体
 */
export interface ModifyNamespaceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Name: string;
    /**
      * 创建时间
      */
    CreationTime: string;
    /**
      * 访问级别
      */
    Public: boolean;
    /**
      * 命名空间的Id
      */
    NamespaceId: number;
}
/**
 * DeleteApplicationTriggerPersonal返回参数结构体
 */
export interface DeleteApplicationTriggerPersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRepositoryInfoPersonal返回参数结构体
 */
export interface ModifyRepositoryInfoPersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * CreateUserPersonal请求参数结构体
 */
export interface CreateUserPersonalRequest {
    /**
      * 用户密码
      */
    Password: string;
}
/**
 * 仓库信息的返回信息
 */
export interface RepoInfoResp {
    /**
      * 仓库总数
      */
    TotalCount: number;
    /**
      * 仓库信息列表
      */
    RepoInfo: Array<RepoInfo>;
    /**
      * Server信息
      */
    Server: string;
}
/**
 * ManageImageLifecycleGlobalPersonal返回参数结构体
 */
export interface ManageImageLifecycleGlobalPersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 访问凭证过期时间戳
      */
    ExpTime?: number;
    /**
      * 长期凭证的TokenId，短期凭证没有TokenId
注意：此字段可能返回 null，表示取不到有效值。
      */
    TokenId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount: number;
    /**
      * 触发日志列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogInfo: Array<TriggerLogResp>;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    NamespaceCount: number;
    /**
      * 命名空间信息
      */
    NamespaceInfo: Array<NamespaceInfo>;
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
 * DescribeImageFilterPersonal返回参数结构体
 */
export interface DescribeImageFilterPersonalResponse {
    /**
      * payload
      */
    Data?: SameImagesResp;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateImageLifecyclePersonal请求参数结构体
 */
export interface CreateImageLifecyclePersonalRequest {
    /**
      * 仓库名称
      */
    RepoName: string;
    /**
      * keep_last_days:保留最近几天的数据;keep_last_nums:保留最近多少个
      */
    Type: string;
    /**
      * 策略值
      */
    Val: number;
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
 * 触发器触发结果
 */
export interface TriggerInvokeResult {
    /**
      * 请求TKE返回值
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnCode: number;
    /**
      * 请求TKE返回信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReturnMsg: string;
}
/**
 * CreateUserPersonal返回参数结构体
 */
export interface CreateUserPersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWebhookTrigger返回参数结构体
 */
export interface DescribeWebhookTriggerResponse {
    /**
      * 触发器总数
      */
    TotalCount?: number;
    /**
      * 触发器列表
      */
    Triggers?: Array<WebhookTrigger>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
    IsPublic: boolean;
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
      * 默认值为0
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
      * 实例计费类型，0表示按量计费，1表示预付费，当前版本只支持后付费，默认为按量计费
      */
    RegistryChargeType?: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 命名空间的名称
      */
    NamespaceName: string;
    /**
      * 是否公开，true为公开，fale为私有
      */
    IsPublic: boolean;
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
 * 触发器触发条件
 */
export interface TriggerInvokeCondition {
    /**
      * 触发方式
      */
    InvokeMethod: string;
    /**
      * 触发表达式
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokeExpr: string;
}
/**
 * ValidateRepositoryExistPersonal返回参数结构体
 */
export interface ValidateRepositoryExistPersonalResponse {
    /**
      * 仓库是否存在
      */
    Data?: RepoIsExistResp;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeReplicationInstanceCreateTasks请求参数结构体
 */
export interface DescribeReplicationInstanceCreateTasksRequest {
    /**
      * 同步实例Id
      */
    ReplicationRegistryId: string;
    /**
      * 同步实例的地域ID
      */
    ReplicationRegionId: number;
}
/**
 * 仓库的信息
 */
export interface RepoInfo {
    /**
      * 仓库名称
      */
    RepoName: string;
    /**
      * 仓库类型
      */
    RepoType: string;
    /**
      * Tag数量
      */
    TagCount: number;
    /**
      * 是否为公开
      */
    Public: number;
    /**
      * 是否为用户收藏
      */
    IsUserFavor: boolean;
    /**
      * 是否为腾讯云官方仓库
      */
    IsQcloudOfficial: boolean;
    /**
      * 被收藏的个数
      */
    FavorCount: number;
    /**
      * 拉取的数量
      */
    PullCount: number;
    /**
      * 描述
      */
    Description: string;
    /**
      * 仓库创建时间
      */
    CreationTime: string;
    /**
      * 仓库更新时间
      */
    UpdateTime: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DeleteImageLifecyclePersonal请求参数结构体
 */
export interface DeleteImageLifecyclePersonalRequest {
    /**
      * 仓库名称
      */
    RepoName: string;
}
/**
 * ModifyApplicationTriggerPersonal返回参数结构体
 */
export interface ModifyApplicationTriggerPersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteNamespacePersonal返回参数结构体
 */
export interface DeleteNamespacePersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 页偏移
      */
    Offset?: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRepositoryAccessPersonal返回参数结构体
 */
export interface ModifyRepositoryAccessPersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 触发器名称
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
 * ModifyUserPasswordPersonal请求参数结构体
 */
export interface ModifyUserPasswordPersonalRequest {
    /**
      * 更新后的密码
      */
    Password: string;
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
      * 命名空间是否存在
      */
    Data?: NamespaceIsExistsResp;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 拉取触发器列表返回值
 */
export interface DescribeApplicationTriggerPersonalResp {
    /**
      * 返回条目总数
      */
    TotalCount: number;
    /**
      * 触发器列表
      */
    TriggerInfo: Array<TriggerResp>;
}
/**
 * 镜像tag信息
 */
export interface TagInfo {
    /**
      * Tag名称
      */
    TagName: string;
    /**
      * 镜像Id
      */
    TagId: string;
    /**
      * docker image 可以看到的id
      */
    ImageId: string;
    /**
      * 大小
      */
    Size: string;
    /**
      * 镜像的创建时间
      */
    CreationTime: string;
    /**
      * 镜像创建至今时间长度
注意：此字段可能返回 null，表示取不到有效值。
      */
    DurationDays: string;
    /**
      * 镜像的作者
      */
    Author: string;
    /**
      * 次镜像建议运行的系统架构
      */
    Architecture: string;
    /**
      * 创建此镜像的docker版本
      */
    DockerVersion: string;
    /**
      * 此镜像建议运行系统
      */
    OS: string;
    /**
      * SizeByte
      */
    SizeByte: number;
    /**
      * Id
      */
    Id: number;
    /**
      * 数据更新时间
      */
    UpdateTime: string;
    /**
      * 镜像更新时间
      */
    PushTime: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 指定镜像版本(Tag)，不填默认返回仓库内全部容器镜像
      */
    ImageVersion?: string;
    /**
      * 每页个数，用于分页，默认20
      */
    Limit?: number;
    /**
      * 页数，默认值为1
      */
    Offset?: number;
}
/**
 * 触发器返回值
 */
export interface TriggerResp {
    /**
      * 触发器名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TriggerName: string;
    /**
      * 触发来源
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokeSource: string;
    /**
      * 触发动作
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokeAction: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 触发条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokeCondition: TriggerInvokeCondition;
    /**
      * 触发器参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvokePara: TriggerInvokePara;
}
/**
 * CreateRepository返回参数结构体
 */
export interface CreateRepositoryResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * CreateNamespacePersonal请求参数结构体
 */
export interface CreateNamespacePersonalRequest {
    /**
      * 命名空间名称
      */
    Namespace: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 创建时间
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
      * 更新时间
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
      * 仓库名称的名称
      */
    RepositoryName: string;
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
      * 镜像仓库名称
      */
    RepositoryName: string;
    /**
      * 镜像版本
      */
    ImageVersion: string;
    /**
      * 命名空间名称
      */
    NamespaceName: string;
}
/**
 * CreateRepositoryPersonal返回参数结构体
 */
export interface CreateRepositoryPersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateApplicationTriggerPersonal返回参数结构体
 */
export interface CreateApplicationTriggerPersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 请求的地域ID
      */
    RegionId?: number;
}
/**
 * BatchDeleteImagePersonal返回参数结构体
 */
export interface BatchDeleteImagePersonalResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
