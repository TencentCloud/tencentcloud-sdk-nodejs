/**
 * DescribePublicConfigSummary请求参数结构体
 */
export interface DescribePublicConfigSummaryRequest {
    /**
      * 查询关键字，模糊查询：配置项名称，不传入时查询全量
      */
    SearchWord?: string;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 每页条数，默认为20
      */
    Limit?: number;
}
/**
 * ApiDetailResponse
 */
export interface ApiDetailResponse {
    /**
      * API 请求参数
      */
    Request: Array<ApiRequestDescr>;
    /**
      * API 响应参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Response: Array<ApiResponseDescr>;
    /**
      * API 复杂结构定义
      */
    Definitions: Array<ApiDefinitionDescr>;
    /**
      * API 的 content type
注意：此字段可能返回 null，表示取不到有效值。
      */
    RequestContentType: string;
    /**
      * API  能否调试
注意：此字段可能返回 null，表示取不到有效值。
      */
    CanRun: boolean;
    /**
      * API 状态 0:离线 1:在线，默认0
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * cos临时帐号信息
 */
export interface CosCredentials {
    /**
      * 会话Token
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionToken: string;
    /**
      * 临时应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpAppId: string;
    /**
      * 临时调用者身份ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpSecretId: string;
    /**
      * 临时密钥
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmpSecretKey: string;
    /**
      * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpiredTime: number;
    /**
      * 所在域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
}
/**
 * DescribeImageTags请求参数结构体
 */
export interface DescribeImageTagsRequest {
    /**
      * 应用Id
      */
    ApplicationId: string;
    /**
      * 偏移量，取值从0开始
      */
    Offset?: number;
    /**
      * 分页个数，默认为20， 取值应为1~100
      */
    Limit?: number;
    /**
      * 不填和0:查询 1:不查询
      */
    QueryImageIdFlag?: number;
    /**
      * 可用于搜索的 tag 名字
      */
    SearchWord?: string;
}
/**
 * ReleaseConfig返回参数结构体
 */
export interface ReleaseConfigResponse {
    /**
      * true：发布成功；false：发布失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApiVersions返回参数结构体
 */
export interface DescribeApiVersionsResponse {
    /**
      * API版本列表
      */
    Result?: Array<ApiVersionArray>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopContainerGroup返回参数结构体
 */
export interface StopContainerGroupResponse {
    /**
      * 停止操作是否成功。
true：停止成功
false：停止失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteLane返回参数结构体
 */
export interface DeleteLaneResponse {
    /**
      * true / false
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfigReleaseLogs返回参数结构体
 */
export interface DescribeConfigReleaseLogsResponse {
    /**
      * 分页的配置项发布历史列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageConfigReleaseLog;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ContinueRunFailedTaskBatch请求参数结构体
 */
export interface ContinueRunFailedTaskBatchRequest {
    /**
      * 批次ID。
      */
    BatchId: string;
}
/**
 * DescribeSimpleClusters返回参数结构体
 */
export interface DescribeSimpleClustersResponse {
    /**
      * TSF集群分页对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageCluster;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRepository返回参数结构体
 */
export interface DeleteRepositoryResponse {
    /**
      * 删除仓库是否成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
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
      * 删除应用操作是否成功。
true：操作成功。
false：操作失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 分位数据模型
 */
export interface QuantileEntity {
    /**
      * 最大值
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxValue: string;
    /**
      * 最小值
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinValue: string;
    /**
      * 五分位值
注意：此字段可能返回 null，表示取不到有效值。
      */
    FifthPositionValue: string;
    /**
      * 九分位值
注意：此字段可能返回 null，表示取不到有效值。
      */
    NinthPositionValue: string;
}
/**
 * UpdateRepository请求参数结构体
 */
export interface UpdateRepositoryRequest {
    /**
      * 仓库ID
      */
    RepositoryId: string;
    /**
      * 仓库描述
      */
    RepositoryDesc?: string;
}
/**
 * DescribeConfigs返回参数结构体
 */
export interface DescribeConfigsResponse {
    /**
      * 分页后的配置项列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageConfig;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyContainerReplicas请求参数结构体
 */
export interface ModifyContainerReplicasRequest {
    /**
      * 部署组ID，部署组唯一标识
      */
    GroupId: string;
    /**
      * 实例数量
      */
    InstanceNum: number;
}
/**
 * CreateGatewayApi返回参数结构体
 */
export interface CreateGatewayApiResponse {
    /**
      * 是否成功
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApiVersions请求参数结构体
 */
export interface DescribeApiVersionsRequest {
    /**
      * 微服务ID
      */
    MicroserviceId: string;
    /**
      * API 请求路径
      */
    Path?: string;
    /**
      * 请求方法
      */
    Method?: string;
}
/**
 * TSF配置项发布日志分页对象
 */
export interface TsfPageConfigReleaseLog {
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 配置项发布日志数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<ConfigReleaseLog>;
}
/**
 * DescribeGroupBindedGateways返回参数结构体
 */
export interface DescribeGroupBindedGatewaysResponse {
    /**
      * 翻页结构体
      */
    Result?: TsfPageGatewayDeployGroup;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnbindApiGroup请求参数结构体
 */
export interface UnbindApiGroupRequest {
    /**
      * 分组网关id列表
      */
    GroupGatewayList: Array<GatewayGroupIds>;
}
/**
 * CreateNamespace返回参数结构体
 */
export interface CreateNamespaceResponse {
    /**
      * 成功时为命名空间ID，失败为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RedoTaskBatch请求参数结构体
 */
export interface RedoTaskBatchRequest {
    /**
      * 任务ID
      */
    TaskId: string;
    /**
      * 批次ID
      */
    BatchId: string;
}
/**
 * DescribeTaskLastStatus请求参数结构体
 */
export interface DescribeTaskLastStatusRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * ModifyUploadInfo返回参数结构体
 */
export interface ModifyUploadInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TsfPage<Config>
 */
export interface TsfPageConfig {
    /**
      * TsfPageConfig
      */
    TotalCount: number;
    /**
      * 配置项列表
      */
    Content: Array<Config>;
}
/**
 * CreateApiRateLimitRule请求参数结构体
 */
export interface CreateApiRateLimitRuleRequest {
    /**
      * Api Id
      */
    ApiId: string;
    /**
      * qps值
      */
    MaxQps: number;
    /**
      * 开启/禁用，enabled/disabled, 不传默认开启
      */
    UsableStatus?: string;
}
/**
 * ChangeApiUsableStatus请求参数结构体
 */
export interface ChangeApiUsableStatusRequest {
    /**
      * API ID
      */
    ApiId: string;
    /**
      * 切换状态，enabled/disabled
      */
    UsableStatus: string;
}
/**
 * DescribeApiRateLimitRules请求参数结构体
 */
export interface DescribeApiRateLimitRulesRequest {
    /**
      * Api ID
      */
    ApiId: string;
}
/**
 * DescribeApiGroups返回参数结构体
 */
export interface DescribeApiGroupsResponse {
    /**
      * 翻页结构体
      */
    Result?: TsfPageApiGroupInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeletePublicConfig请求参数结构体
 */
export interface DeletePublicConfigRequest {
    /**
      * 配置项ID
      */
    ConfigId: string;
}
/**
 * DeleteNamespace返回参数结构体
 */
export interface DeleteNamespaceResponse {
    /**
      * 删除命名空间是否成功。
true：删除成功。
false：删除失败。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateMicroservice请求参数结构体
 */
export interface CreateMicroserviceRequest {
    /**
      * 命名空间ID
      */
    NamespaceId: string;
    /**
      * 微服务名称
      */
    MicroserviceName: string;
    /**
      * 微服务描述信息
      */
    MicroserviceDesc?: string;
}
/**
 * DeleteImageTags请求参数结构体
 */
export interface DeleteImageTagsRequest {
    /**
      * 镜像版本数组
      */
    ImageTags: Array<DeleteImageTag>;
}
/**
 * DescribeRepositories请求参数结构体
 */
export interface DescribeRepositoriesRequest {
    /**
      * 查询关键字（按照仓库名称搜索）
      */
    SearchWord?: string;
    /**
      * 查询起始偏移
      */
    Offset?: number;
    /**
      * 返回数量限制
      */
    Limit?: number;
    /**
      * 仓库类型（默认仓库：default，私有仓库：private）
      */
    RepositoryType?: string;
}
/**
 * RollbackConfig请求参数结构体
 */
export interface RollbackConfigRequest {
    /**
      * 配置项发布历史ID
      */
    ConfigReleaseLogId: string;
    /**
      * 回滚描述
      */
    ReleaseDesc?: string;
}
/**
 * CreateGatewayApi请求参数结构体
 */
export interface CreateGatewayApiRequest {
    /**
      * API 分组ID
      */
    GroupId: string;
    /**
      * Api信息
      */
    ApiList: Array<ApiInfo>;
}
/**
 * DescribeCreateGatewayApiStatus返回参数结构体
 */
export interface DescribeCreateGatewayApiStatusResponse {
    /**
      * 是否已完成导入任务
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteConfig返回参数结构体
 */
export interface DeleteConfigResponse {
    /**
      * true：删除成功；false：删除失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGroupGateways请求参数结构体
 */
export interface DescribeGroupGatewaysRequest {
    /**
      * 网关部署组ID
      */
    GatewayDeployGroupId: string;
    /**
      * 翻页查询偏移量
      */
    Offset: number;
    /**
      * 翻页查询每页记录数
      */
    Limit: number;
    /**
      * 搜索关键字
      */
    SearchWord?: string;
}
/**
 * UpdateApiRateLimitRule返回参数结构体
 */
export interface UpdateApiRateLimitRuleResponse {
    /**
      * 是否成功
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGatewayAllGroupApis返回参数结构体
 */
export interface DescribeGatewayAllGroupApisResponse {
    /**
      * 网关分组和API列表信息
      */
    Result?: GatewayVo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 泳道规则
 */
export interface LaneRule {
    /**
      * 泳道规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId: string;
    /**
      * 泳道规则名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleName: string;
    /**
      * 优先级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Priority: number;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 泳道规则标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleTagList: Array<LaneRuleTag>;
    /**
      * 泳道规则标签关系
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleTagRelationship: string;
    /**
      * 泳道ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LaneId: string;
    /**
      * 开启状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enable: boolean;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: number;
}
/**
 * 微服务实例信息
 */
export interface MsInstance {
    /**
      * 机器实例ID信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 机器实例名称信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 服务运行的端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: string;
    /**
      * 机器实例内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    LanIp: string;
    /**
      * 机器实例外网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    WanIp: string;
    /**
      * 机器可用状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceAvailableStatus: string;
    /**
      * 服务运行状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceInstanceStatus: string;
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 机器TSF可用状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceStatus: string;
    /**
      * 健康检查URL
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCheckUrl: string;
    /**
      * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterType: string;
    /**
      * 应用程序包版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationPackageVersion: string;
    /**
      * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * 服务状态，passing 在线，critical 离线
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceStatus: string;
    /**
      * 注册时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistrationTime: number;
    /**
      * 上次心跳时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastHeartbeatTime: number;
    /**
      * 实例注册id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistrationId: string;
    /**
      * 屏蔽状态，hidden 为屏蔽，unhidden 为未屏蔽
注意：此字段可能返回 null，表示取不到有效值。
      */
    HiddenStatus: string;
}
/**
 * DescribeServerlessGroups返回参数结构体
 */
export interface DescribeServerlessGroupsResponse {
    /**
      * 数据列表对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ServerlessGroupPage;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfigs请求参数结构体
 */
export interface DescribeConfigsRequest {
    /**
      * 应用ID，不传入时查询全量
      */
    ApplicationId?: string;
    /**
      * 配置项ID，不传入时查询全量，高优先级
      */
    ConfigId?: string;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 每页条数
      */
    Limit?: number;
    /**
      * 配置项ID列表，不传入时查询全量，低优先级
      */
    ConfigIdList?: Array<string>;
    /**
      * 配置项名称，精确查询，不传入时查询全量
      */
    ConfigName?: string;
    /**
      * 配置项版本，精确查询，不传入时查询全量
      */
    ConfigVersion?: string;
}
/**
 * 镜像仓库
 */
export interface ImageRepository {
    /**
      * 仓库名,含命名空间,如tsf/nginx
注意：此字段可能返回 null，表示取不到有效值。
      */
    Reponame: string;
    /**
      * 仓库类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Repotype: string;
    /**
      * 镜像版本数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagCount: number;
    /**
      * 是否公共,1:公有,0:私有
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsPublic: number;
    /**
      * 是否被用户收藏。true：是，false：否
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsUserFavor: boolean;
    /**
      * 是否是腾讯云官方仓库。 是否是腾讯云官方仓库。true：是，false：否
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsQcloudOfficial: boolean;
    /**
      * 被所有用户收藏次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    FavorCount: number;
    /**
      * 拉取次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    PullCount: number;
    /**
      * 描述内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreationTime: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
}
/**
 * AddInstances返回参数结构体
 */
export interface AddInstancesResponse {
    /**
      * 添加云主机是否成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartContainerGroup请求参数结构体
 */
export interface StartContainerGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
}
/**
 * StopGroup返回参数结构体
 */
export interface StopGroupResponse {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TaskId;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 机器实例
 */
export interface Instance {
    /**
      * 机器实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 机器名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 机器内网地址IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    LanIp: string;
    /**
      * 机器外网地址IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    WanIp: string;
    /**
      * 机器描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceDesc: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * VM的状态 虚机：虚机的状态 容器：Pod所在虚机的状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceStatus: string;
    /**
      * VM的可使用状态 虚机：虚机是否能够作为资源使用 容器：虚机是否能够作为资源部署POD
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceAvailableStatus: string;
    /**
      * 服务下的服务实例的状态 虚机：应用是否可用 + Agent状态 容器：Pod状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceInstanceStatus: string;
    /**
      * 标识此instance是否已添加在tsf中
注意：此字段可能返回 null，表示取不到有效值。
      */
    CountInTsf: number;
    /**
      * 机器所属部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 机器所属应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 机器所属应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 机器实例在CVM的创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceCreatedTime: string;
    /**
      * 机器实例在CVM的过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceExpiredTime: string;
    /**
      * 机器实例在CVM的计费模式
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceChargeType: string;
    /**
      * 机器实例总CPU信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceTotalCpu: number;
    /**
      * 机器实例总内存信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceTotalMem: number;
    /**
      * 机器实例使用的CPU信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceUsedCpu: number;
    /**
      * 机器实例使用的内存信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceUsedMem: number;
    /**
      * 机器实例Limit CPU信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceLimitCpu: number;
    /**
      * 机器实例Limit 内存信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceLimitMem: number;
    /**
      * 包版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstancePkgVersion: string;
    /**
      * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterType: string;
    /**
      * 机器实例业务状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestrictState: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 实例执行状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationState: number;
    /**
      * NamespaceId Ns ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * InstanceZoneId 可用区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceZoneId: string;
    /**
      * InstanceImportMode 导入模式
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceImportMode: string;
    /**
      * ApplicationType应用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * ApplicationResourceType 资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationResourceType: string;
    /**
      * sidecar状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceSidecarStatus: string;
    /**
      * 部署组名
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * NS名
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 健康检查原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Reason: string;
}
/**
 * UpdateHealthCheckSettings请求参数结构体
 */
export interface UpdateHealthCheckSettingsRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
    /**
      * 是否能使健康检查
      */
    EnableHealthCheck?: boolean;
    /**
      * 健康检查配置
      */
    HealthCheckSettings?: HealthCheckSettings;
}
/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
    /**
      * 集群ID
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateMicroservice返回参数结构体
 */
export interface CreateMicroserviceResponse {
    /**
      * 新增微服务是否成功。
true：操作成功。
false：操作失败。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopGroup请求参数结构体
 */
export interface StopGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
}
/**
 * ShrinkGroup返回参数结构体
 */
export interface ShrinkGroupResponse {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TaskId;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * cos上传所需信息
 */
export interface CosUploadInfo {
    /**
      * 程序包ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgId: string;
    /**
      * 桶
注意：此字段可能返回 null，表示取不到有效值。
      */
    Bucket: string;
    /**
      * 目标地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 存储路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * 鉴权信息
      */
    Credentials: CosCredentials;
}
/**
 * DescribeLanes返回参数结构体
 */
export interface DescribeLanesResponse {
    /**
      * 泳道列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: LaneInfos;
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
      * 集群ID
      */
    ClusterId?: string;
    /**
      * 命名空间描述
      */
    NamespaceDesc?: string;
    /**
      * 命名空间资源类型(默认值为DEF)
      */
    NamespaceResourceType?: string;
    /**
      * 是否是全局命名空间(默认是DEF，表示普通命名空间；GLOBAL表示全局命名空间)
      */
    NamespaceType?: string;
    /**
      * 命名空间ID
      */
    NamespaceId?: string;
    /**
      * 是否开启高可用
      */
    IsHaEnable?: string;
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
      * 搜索字段
      */
    SearchWord?: string;
    /**
      * 排序字段
      */
    OrderBy?: string;
    /**
      * 排序类型
      */
    OrderType?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 分页个数
      */
    Limit?: number;
}
/**
 * DescribeGroupBindedGateways请求参数结构体
 */
export interface DescribeGroupBindedGatewaysRequest {
    /**
      * API 分组ID
      */
    GroupId: string;
    /**
      * 翻页查询偏移量
      */
    Offset: number;
    /**
      * 翻页查询每页记录数
      */
    Limit: number;
    /**
      * 搜索关键字
      */
    SearchWord?: string;
}
/**
 * DescribeRepository请求参数结构体
 */
export interface DescribeRepositoryRequest {
    /**
      * 仓库ID
      */
    RepositoryId: string;
}
/**
 * RedoTask请求参数结构体
 */
export interface RedoTaskRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * DeleteApiGroup返回参数结构体
 */
export interface DeleteApiGroupResponse {
    /**
      * 成功失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 镜像版本列表
 */
export interface ImageTagsResult {
    /**
      * 总记录数
      */
    TotalCount: number;
    /**
      * 仓库名,含命名空间,如tsf/ngin
      */
    RepoName: string;
    /**
      * 镜像服务器地址
      */
    Server: string;
    /**
      * 列表信息
      */
    Content: Array<ImageTag>;
}
/**
 * 仓库信息
 */
export interface RepositoryInfo {
    /**
      * 仓库ID
      */
    RepositoryId: string;
    /**
      * 仓库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepositoryName: string;
    /**
      * 仓库类型（默认仓库：default，私有仓库：private）
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepositoryType: string;
    /**
      * 仓库描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepositoryDesc: string;
    /**
      * 仓库是否正在被使用
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsUsed: boolean;
    /**
      * 仓库创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 仓库桶名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    BucketName: string;
    /**
      * 仓库桶所在地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    BucketRegion: string;
    /**
      * 仓库目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    Directory: string;
}
/**
 * DraftApiGroup请求参数结构体
 */
export interface DraftApiGroupRequest {
    /**
      * Api 分组ID
      */
    GroupId: string;
}
/**
 * CreateLane返回参数结构体
 */
export interface CreateLaneResponse {
    /**
      * 泳道ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePkgs返回参数结构体
 */
export interface DescribePkgsResponse {
    /**
      * 符合查询程序包信息列表
      */
    Result?: PkgList;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSimpleNamespaces返回参数结构体
 */
export interface DescribeSimpleNamespacesResponse {
    /**
      * 命名空间分页列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageNamespace;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 需要删除的镜像版本
 */
export interface DeleteImageTag {
    /**
      * 仓库名，如/tsf/nginx
      */
    RepoName: string;
    /**
      * 版本号:如V1
      */
    TagName: string;
}
/**
 * DescribeMicroservices返回参数结构体
 */
export interface DescribeMicroservicesResponse {
    /**
      * 微服务分页列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageMicroservice;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务最近一次执行状态
 */
export interface TaskLastExecuteStatus {
    /**
      * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchId: string;
    /**
      * 运行状态，RUNNING/SUCCESS/FAIL/HALF/TERMINATED
注意：此字段可能返回 null，表示取不到有效值。
      */
    State: string;
    /**
      * 批次历史ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    BatchLogId: string;
}
/**
 * DescribePublicConfig请求参数结构体
 */
export interface DescribePublicConfigRequest {
    /**
      * 需要查询的配置项ID
      */
    ConfigId: string;
}
/**
 * TSF基本资源信息概览
 */
export interface OverviewBasicResourceUsage {
    /**
      * 应用总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationCount: number;
    /**
      * 命名空间总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceCount: number;
    /**
      * 部署组个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupCount: number;
    /**
      * 程序包存储空间用量，单位字节
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageSpaceUsed: number;
    /**
      * 已注册实例数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConsulInstanceCount: number;
}
/**
 * CreatePublicConfig返回参数结构体
 */
export interface CreatePublicConfigResponse {
    /**
      * true：创建成功；false：创建失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 泳道规则分页查询
 */
export interface LaneRules {
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 泳道规则列表
      */
    Content: Array<LaneRule>;
}
/**
 * 列表中部署组分页信息
 */
export interface TsfPageVmGroup {
    /**
      * 虚拟机部署组总数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 虚拟机部署组列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<VmGroupSimple>;
}
/**
 * CreateConfig返回参数结构体
 */
export interface CreateConfigResponse {
    /**
      * true：创建成功；false：创建失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCreateGatewayApiStatus请求参数结构体
 */
export interface DescribeCreateGatewayApiStatusRequest {
    /**
      * 请求方法
      */
    GroupId?: string;
    /**
      * 微服务ID
      */
    MicroserviceId?: string;
}
/**
 * DescribeConfigReleaseLogs请求参数结构体
 */
export interface DescribeConfigReleaseLogsRequest {
    /**
      * 部署组ID，不传入时查询全量
      */
    GroupId?: string;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 每页条数，默认为20
      */
    Limit?: number;
    /**
      * 命名空间ID，不传入时查询全量
      */
    NamespaceId?: string;
    /**
      * 集群ID，不传入时查询全量
      */
    ClusterId?: string;
    /**
      * 应用ID，不传入时查询全量
      */
    ApplicationId?: string;
}
/**
 * ModifyContainerGroup请求参数结构体
 */
export interface ModifyContainerGroupRequest {
    /**
      * 部署组ID
      */
    GroupId?: string;
    /**
      * 0:公网 1:集群内访问 2：NodePort
      */
    AccessType?: number;
    /**
      * ProtocolPorts数组
      */
    ProtocolPorts?: Array<ProtocolPort>;
    /**
      * 更新方式：0:快速更新 1:滚动更新
      */
    UpdateType?: number;
    /**
      * 更新间隔,单位秒
      */
    UpdateIvl?: number;
    /**
      * 子网ID
      */
    SubnetId?: string;
}
/**
 * UpdateRepository返回参数结构体
 */
export interface UpdateRepositoryResponse {
    /**
      * 更新仓库是否成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RollbackConfig返回参数结构体
 */
export interface RollbackConfigResponse {
    /**
      * true：回滚成功；false：回滚失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RevocationConfig请求参数结构体
 */
export interface RevocationConfigRequest {
    /**
      * 配置项发布ID
      */
    ConfigReleaseId: string;
}
/**
 * StartContainerGroup返回参数结构体
 */
export interface StartContainerGroupResponse {
    /**
      * 启动操作是否成功。
true：启动成功
false：启动失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTask请求参数结构体
 */
export interface ModifyTaskRequest {
    /**
      * 任务ID
      */
    TaskId: string;
    /**
      * 任务名称
      */
    TaskName?: string;
    /**
      * 任务类型
      */
    TaskType?: string;
    /**
      * 任务内容
      */
    TaskContent?: string;
    /**
      * 任务执行类型
      */
    ExecuteType?: string;
    /**
      * 触发规则
      */
    TaskRule?: TaskRule;
    /**
      * 超时时间，单位 ms
      */
    TimeOut?: number;
    /**
      * 分组ID
      */
    GroupId?: string;
    /**
      * 分片数量
      */
    ShardCount?: number;
    /**
      * 分片参数
      */
    ShardArguments?: ShardArgument;
    /**
      * 高级设置
      */
    AdvanceSettings?: AdvanceSettings;
    /**
      * 判断任务成功的操作符 GT/GTE
      */
    SuccessOperator?: string;
    /**
      * 判断任务成功率的阈值
      */
    SuccessRatio?: number;
    /**
      * 重试次数
      */
    RetryCount?: number;
    /**
      * 重试间隔
      */
    RetryInterval?: number;
    /**
      * 任务参数，长度限制10000个字符
      */
    TaskArgument?: string;
}
/**
 * DisableTask请求参数结构体
 */
export interface DisableTaskRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * DescribeBasicResourceUsage返回参数结构体
 */
export interface DescribeBasicResourceUsageResponse {
    /**
      * TSF基本资源信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: OverviewBasicResourceUsage;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述程序包关联信息
 */
export interface PkgBind {
    /**
      * 应用id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 部署组id
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
}
/**
 * RemoveInstances请求参数结构体
 */
export interface RemoveInstancesRequest {
    /**
      * 集群 ID
      */
    ClusterId: string;
    /**
      * 云主机 ID 列表
      */
    InstanceIdList: Array<string>;
}
/**
 * TSF机器实例分页对象
 */
export interface TsfPageInstance {
    /**
      * 机器实例总数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 机器实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<Instance>;
}
/**
 * DeleteGroup返回参数结构体
 */
export interface DeleteGroupResponse {
    /**
      * 删除部署组操作是否成功。
true：操作成功。
false：操作失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSimpleApplications返回参数结构体
 */
export interface DescribeSimpleApplicationsResponse {
    /**
      * 简单应用分页对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageSimpleApplication;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeployContainerGroup请求参数结构体
 */
export interface DeployContainerGroupRequest {
    /**
      * 部署组ID，分组唯一标识
      */
    GroupId: string;
    /**
      * 镜像版本名称,如v1
      */
    TagName: string;
    /**
      * 实例数量
      */
    InstanceNum: number;
    /**
      * 镜像server
      */
    Server?: string;
    /**
      * 旧版镜像名，如/tsf/nginx
      */
    Reponame?: string;
    /**
      * 业务容器最大的 CPU 核数，对应 K8S 的 limit；不填时默认为 request 的 2 倍
      */
    CpuLimit?: string;
    /**
      * 业务容器最大的内存 MiB 数，对应 K8S 的 limit；不填时默认为 request 的 2 倍
      */
    MemLimit?: string;
    /**
      * jvm参数
      */
    JvmOpts?: string;
    /**
      * 业务容器分配的 CPU 核数，对应 K8S 的 request
      */
    CpuRequest?: string;
    /**
      * 业务容器分配的内存 MiB 数，对应 K8S 的 request
      */
    MemRequest?: string;
    /**
      * 是否不立即启动
      */
    DoNotStart?: boolean;
    /**
      * （优先使用）新版镜像名，如/tsf/nginx
      */
    RepoName?: string;
    /**
      * 更新方式：0:快速更新 1:滚动更新
      */
    UpdateType?: number;
    /**
      * 滚动更新必填，更新间隔
      */
    UpdateIvl?: number;
    /**
      * agent 容器分配的 CPU 核数，对应 K8S 的 request
      */
    AgentCpuRequest?: string;
    /**
      * agent 容器最大的 CPU 核数，对应 K8S 的 limit
      */
    AgentCpuLimit?: string;
    /**
      * agent 容器分配的内存 MiB 数，对应 K8S 的 request
      */
    AgentMemRequest?: string;
    /**
      * agent 容器最大的内存 MiB 数，对应 K8S 的 limit
      */
    AgentMemLimit?: string;
    /**
      * istioproxy 容器分配的 CPU 核数，对应 K8S 的 request
      */
    IstioCpuRequest?: string;
    /**
      * istioproxy 容器最大的 CPU 核数，对应 K8S 的 limit
      */
    IstioCpuLimit?: string;
    /**
      * istioproxy 容器分配的内存 MiB 数，对应 K8S 的 request
      */
    IstioMemRequest?: string;
    /**
      * istioproxy 容器最大的内存 MiB 数，对应 K8S 的 limit
      */
    IstioMemLimit?: string;
    /**
      * kubernetes滚动更新策略的MaxSurge参数
      */
    MaxSurge?: string;
    /**
      * kubernetes滚动更新策略的MaxUnavailable参数
      */
    MaxUnavailable?: string;
    /**
      * 健康检查配置信息，若不指定该参数，则默认不设置健康检查。
      */
    HealthCheckSettings?: HealthCheckSettings;
    /**
      * 部署组应用运行的环境变量。若不指定该参数，则默认不设置额外的环境变量。
      */
    Envs?: Array<Env>;
    /**
      * 容器部署组的网络设置。
      */
    ServiceSetting?: ServiceSetting;
    /**
      * 是否部署 agent 容器。若不指定该参数，则默认不部署 agent 容器。
      */
    DeployAgent?: boolean;
    /**
      * 节点调度策略。若不指定改参数，则默认不使用节点调度策略。
      */
    SchedulingStrategy?: SchedulingStrategy;
}
/**
 * DescribeSimpleApplications请求参数结构体
 */
export interface DescribeSimpleApplicationsRequest {
    /**
      * 应用ID列表
      */
    ApplicationIdList?: Array<string>;
    /**
      * 应用类型
      */
    ApplicationType?: string;
    /**
      * 每页条数
      */
    Limit?: number;
    /**
      * 起始偏移量
      */
    Offset?: number;
    /**
      * 微服务类型
      */
    MicroserviceType?: string;
    /**
      * 资源类型数组
      */
    ApplicationResourceTypeList?: Array<string>;
    /**
      * 通过id和name进行关键词过滤
      */
    SearchWord?: string;
}
/**
 * 部署组列表（应用下钻界面的）
 */
export interface ContainGroup {
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId?: string;
    /**
      * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName?: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 镜像server
注意：此字段可能返回 null，表示取不到有效值。
      */
    Server: string;
    /**
      * 镜像名，如/tsf/nginx
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepoName: string;
    /**
      * 镜像版本名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagName: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 初始分配的 CPU 核数，对应 K8S request
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuRequest: string;
    /**
      * 最大分配的 CPU 核数，对应 K8S limit
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuLimit: string;
    /**
      * 初始分配的内存 MiB 数，对应 K8S request
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemRequest: string;
    /**
      * 最大分配的内存 MiB 数，对应 K8S limit
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemLimit: string;
}
/**
 * 部署组列表（应用下钻）
 */
export interface ContainGroupResult {
    /**
      * 部署组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<ContainGroup>;
    /**
      * 总记录数
      */
    TotalCount: number;
}
/**
 * DescribePublicConfigs请求参数结构体
 */
export interface DescribePublicConfigsRequest {
    /**
      * 配置项ID，不传入时查询全量，高优先级
      */
    ConfigId?: string;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 每页条数，默认为20
      */
    Limit?: number;
    /**
      * 配置项ID列表，不传入时查询全量，低优先级
      */
    ConfigIdList?: Array<string>;
    /**
      * 配置项名称，精确查询，不传入时查询全量
      */
    ConfigName?: string;
    /**
      * 配置项版本，精确查询，不传入时查询全量
      */
    ConfigVersion?: string;
}
/**
 * ReleaseApiGroup返回参数结构体
 */
export interface ReleaseApiGroupResponse {
    /**
      * 成功/失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateApiRateLimitRules请求参数结构体
 */
export interface UpdateApiRateLimitRulesRequest {
    /**
      * API ID 列表
      */
    ApiIds: Array<string>;
    /**
      * 开启/禁用，enabled/disabled
      */
    UsableStatus: string;
    /**
      * QPS值。开启限流规则时，必填
      */
    MaxQps?: number;
}
/**
 * DescribeGroupInstances请求参数结构体
 */
export interface DescribeGroupInstancesRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
    /**
      * 搜索字段
      */
    SearchWord?: string;
    /**
      * 排序字段
      */
    OrderBy?: string;
    /**
      * 排序类型
      */
    OrderType?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 分页个数
      */
    Limit?: number;
}
/**
 * DescribeMsApiList请求参数结构体
 */
export interface DescribeMsApiListRequest {
    /**
      * 微服务ID
      */
    MicroserviceId: string;
    /**
      * 搜索关键字
      */
    SearchWord?: string;
    /**
      * 每页的数量
      */
    Limit?: number;
    /**
      * 翻页偏移量
      */
    Offset?: number;
}
/**
 * DescribeUploadInfo返回参数结构体
 */
export interface DescribeUploadInfoResponse {
    /**
      * COS上传信息
      */
    Result?: CosUploadInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMsApiList返回参数结构体
 */
export interface DescribeMsApiListResponse {
    /**
      * 相应结果
      */
    Result?: TsfApiListResponse;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EnableTask请求参数结构体
 */
export interface EnableTaskRequest {
    /**
      * 启用任务
      */
    TaskId: string;
}
/**
 * DisableTask返回参数结构体
 */
export interface DisableTaskResponse {
    /**
      * 操作成功 or 失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMicroservice请求参数结构体
 */
export interface DescribeMicroserviceRequest {
    /**
      * 微服务ID
      */
    MicroserviceId: string;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 分页个数
      */
    Limit?: number;
}
/**
 * DescribePodInstances返回参数结构体
 */
export interface DescribePodInstancesResponse {
    /**
      * 查询的权限数据对象
      */
    Result?: GroupPodResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRepositories返回参数结构体
 */
export interface DescribeRepositoriesResponse {
    /**
      * 符合查询仓库信息列表
      */
    Result?: RepositoryList;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 监控概览对象
 */
export interface MonitorOverview {
    /**
      * 近24小时调用数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvocationCountOfDay: string;
    /**
      * 总调用数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvocationCount: string;
    /**
      * 近24小时调用错误数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorCountOfDay: string;
    /**
      * 总调用错误数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorCount: string;
    /**
      * 近24小时调用成功率
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccessRatioOfDay: string;
    /**
      * 总调用成功率
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccessRatio: string;
}
/**
 * CreateGroup请求参数结构体
 */
export interface CreateGroupRequest {
    /**
      * 部署组所属的应用ID
      */
    ApplicationId: string;
    /**
      * 部署组所属命名空间ID
      */
    NamespaceId: string;
    /**
      * 部署组名称
      */
    GroupName: string;
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 部署组描述
      */
    GroupDesc?: string;
    /**
      * 部署组资源类型
      */
    GroupResourceType?: string;
}
/**
 * StopTaskBatch返回参数结构体
 */
export interface StopTaskBatchResponse {
    /**
      * 操作成功 or 失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateContainGroup返回参数结构体
 */
export interface CreateContainGroupResponse {
    /**
      * 返回创建成功的部署组ID，返回null表示失败
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeContainerGroupDetail返回参数结构体
 */
export interface DescribeContainerGroupDetailResponse {
    /**
      * 容器部署组详情
      */
    Result?: ContainerGroupDetail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGroupGateways返回参数结构体
 */
export interface DescribeGroupGatewaysResponse {
    /**
      * API分组信息
      */
    Result?: TsfPageApiGroupInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeployServerlessGroup返回参数结构体
 */
export interface DeployServerlessGroupResponse {
    /**
      * 结果true：成功；false：失败；
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAllGatewayApiAsync返回参数结构体
 */
export interface CreateAllGatewayApiAsyncResponse {
    /**
      * 是否成功
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteTask返回参数结构体
 */
export interface DeleteTaskResponse {
    /**
      * 删除成功or失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 微服务实例的分页内容
 */
export interface TsfPageMsInstance {
    /**
      * 微服务实例总数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 微服务实例列表内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<MsInstance>;
}
/**
 * DeleteMicroservice请求参数结构体
 */
export interface DeleteMicroserviceRequest {
    /**
      * 微服务ID
      */
    MicroserviceId: string;
}
/**
 * RemoveInstances返回参数结构体
 */
export interface RemoveInstancesResponse {
    /**
      * 集群移除机器是否成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务规则
 */
export interface TaskRule {
    /**
      * 触发规则类型, Cron/Repeat
      */
    RuleType: string;
    /**
      * Cron类型规则，cron表达式。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Expression?: string;
    /**
      * 时间间隔， 单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepeatInterval: number;
}
/**
 * 命名空间
 */
export interface Namespace {
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间编码
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceCode: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 命名空间描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceDesc: string;
    /**
      * 默认命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDefault: string;
    /**
      * 命名空间状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceStatus: string;
    /**
      * 删除标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeleteFlag: boolean;
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
      * 集群数组，仅携带集群ID，集群名称，集群类型等基础信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterList: Array<Cluster>;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceResourceType: string;
    /**
      * 命名空间类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceType: string;
    /**
      * 是否开启高可用
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsHaEnable: string;
}
/**
 * DescribeGroup返回参数结构体
 */
export interface DescribeGroupResponse {
    /**
      * 虚拟机部署组详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: VmGroup;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 环境变量
 */
export interface Env {
    /**
      * 环境变量名称
      */
    Name: string;
    /**
      * 服务端口
      */
    Value: string;
}
/**
 * DeleteContainerGroup返回参数结构体
 */
export interface DeleteContainerGroupResponse {
    /**
      * 删除操作是否成功：
true：成功
false：失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteServerlessGroup返回参数结构体
 */
export interface DeleteServerlessGroupResponse {
    /**
      * 结果true：成功；false：失败。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteImageTags返回参数结构体
 */
export interface DeleteImageTagsResponse {
    /**
      * 批量删除操作是否成功。
true：成功。
false：失败。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ApiGroupInfo翻页结构体
 */
export interface TsfPageApiGroupInfo {
    /**
      * 总记录数
      */
    TotalCount: number;
    /**
      * API分组信息
      */
    Content: Array<ApiGroupInfo>;
}
/**
 * ExecuteTask请求参数结构体
 */
export interface ExecuteTaskRequest {
    /**
      * 任务 ID。
      */
    TaskId: string;
}
/**
 * DescribeApplication返回参数结构体
 */
export interface DescribeApplicationResponse {
    /**
      * 应用信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ApplicationForPage;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 泳道
 */
export interface LaneInfo {
    /**
      * 泳道ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LaneId: string;
    /**
      * 泳道名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    LaneName: string;
    /**
      * 泳道备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: number;
    /**
      * 泳道部署组
注意：此字段可能返回 null，表示取不到有效值。
      */
    LaneGroupList: Array<LaneGroup>;
    /**
      * 是否入口应用
注意：此字段可能返回 null，表示取不到有效值。
      */
    Entrance: boolean;
    /**
      * 泳道已经关联部署组的命名空间列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceIdList: Array<string>;
}
/**
 * 简单应用
 */
export interface SimpleApplication {
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * 应用微服务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceType: string;
    /**
      * ApplicationDesc
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationDesc: string;
    /**
      * ProgLang
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProgLang: string;
    /**
      * ApplicationResourceType
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationResourceType: string;
    /**
      * CreateTime
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * UpdateTime
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * ApigatewayServiceId
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApigatewayServiceId: string;
    /**
      * ApplicationRuntimeType
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationRuntimeType: string;
}
/**
 * DescribeApiUseDetail请求参数结构体
 */
export interface DescribeApiUseDetailRequest {
    /**
      * 网关部署组ID
      */
    GatewayDeployGroupId: string;
    /**
      * 网关分组Api ID
      */
    ApiId: string;
    /**
      * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
      */
    StartTime: string;
    /**
      * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
      */
    EndTime: string;
}
/**
 * DescribeSimpleGroups返回参数结构体
 */
export interface DescribeSimpleGroupsResponse {
    /**
      * 简单部署组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageSimpleGroup;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFlowLastBatchState请求参数结构体
 */
export interface DescribeFlowLastBatchStateRequest {
    /**
      * 工作流 ID
      */
    FlowId: string;
}
/**
 * DeletePublicConfig返回参数结构体
 */
export interface DeletePublicConfigResponse {
    /**
      * true：删除成功；false：删除失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Tsf分页集群对象
 */
export interface TsfPageCluster {
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 集群列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<Cluster>;
}
/**
 * TerminateTaskFlowBatch返回参数结构体
 */
export interface TerminateTaskFlowBatchResponse {
    /**
      * 是否停止成功
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ShrinkInstances返回参数结构体
 */
export interface ShrinkInstancesResponse {
    /**
      * 任务ID
      */
    Result?: TaskId;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApiRateLimitRules返回参数结构体
 */
export interface DescribeApiRateLimitRulesResponse {
    /**
      * 限流结果
      */
    Result?: Array<ApiRateLimitRule>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddClusterInstances请求参数结构体
 */
export interface AddClusterInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 云主机ID列表
      */
    InstanceIdList: Array<string>;
    /**
      * 操作系统名称
      */
    OsName?: string;
    /**
      * 操作系统镜像ID
      */
    ImageId?: string;
    /**
      * 重装系统密码设置
      */
    Password?: string;
    /**
      * 重装系统，关联密钥设置
      */
    KeyId?: string;
    /**
      * 安全组设置
      */
    SgId?: string;
    /**
      * 云主机导入方式，虚拟机集群必填，容器集群不填写此字段，R：重装TSF系统镜像，M：手动安装agent
      */
    InstanceImportMode?: string;
    /**
      * 镜像定制类型
      */
    OsCustomizeType?: string;
    /**
      * 镜像特征ID列表
      */
    FeatureIdList?: Array<string>;
}
/**
 * DescribeGroupUseDetail返回参数结构体
 */
export interface DescribeGroupUseDetailResponse {
    /**
      * 日使用统计对象
      */
    Result?: GroupDailyUseStatistics;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Tsf命名空间分页对象
 */
export interface TsfPageNamespace {
    /**
      * 命名空间总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 命名空间列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<Namespace>;
}
/**
 * DescribeSimpleNamespaces请求参数结构体
 */
export interface DescribeSimpleNamespacesRequest {
    /**
      * 命名空间ID列表，不传入时查询全量
      */
    NamespaceIdList?: Array<string>;
    /**
      * 集群ID，不传入时查询全量
      */
    ClusterId?: string;
    /**
      * 每页条数
      */
    Limit?: number;
    /**
      * 起始偏移量
      */
    Offset?: number;
    /**
      * 命名空间ID，不传入时查询全量
      */
    NamespaceId?: string;
    /**
      * 查询资源类型列表
      */
    NamespaceResourceTypeList?: Array<string>;
    /**
      * 通过id和name进行过滤
      */
    SearchWord?: string;
    /**
      * 查询的命名空间类型列表
      */
    NamespaceTypeList?: Array<string>;
    /**
      * 通过命名空间名精确过滤
      */
    NamespaceName?: string;
    /**
      * 通过是否是默认命名空间过滤，不传表示拉取全部命名空间。0：默认，命名空间。1：非默认命名空间
      */
    IsDefault?: string;
}
/**
 * ExecuteTaskFlow返回参数结构体
 */
export interface ExecuteTaskFlowResponse {
    /**
      * 工作流批次ID
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ExpandGroup返回参数结构体
 */
export interface ExpandGroupResponse {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TaskId;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePublicConfigs返回参数结构体
 */
export interface DescribePublicConfigsResponse {
    /**
      * 分页后的全局配置项列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageConfig;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RevocationPublicConfig返回参数结构体
 */
export interface RevocationPublicConfigResponse {
    /**
      * true：撤销成功；false：撤销失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ContinueRunFailedTaskBatch返回参数结构体
 */
export interface ContinueRunFailedTaskBatchResponse {
    /**
      * 成功或失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSimpleClusters请求参数结构体
 */
export interface DescribeSimpleClustersRequest {
    /**
      * 需要查询的集群ID列表，不填或不传入时查询所有内容
      */
    ClusterIdList?: Array<string>;
    /**
      * 需要查询的集群类型，不填或不传入时查询所有内容
      */
    ClusterType?: string;
    /**
      * 查询偏移量，默认为0
      */
    Offset?: number;
    /**
      * 分页个数，默认为20， 取值应为1~50
      */
    Limit?: number;
    /**
      * 对id和name进行关键词过滤
      */
    SearchWord?: string;
}
/**
 * DeployServerlessGroup请求参数结构体
 */
export interface DeployServerlessGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
    /**
      * 程序包ID
      */
    PkgId: string;
    /**
      * 所需实例内存大小，取值为 1Gi 2Gi 4Gi 8Gi 16Gi，缺省为 1Gi，不传表示维持原态
      */
    Memory?: string;
    /**
      * 要求最小实例数，取值范围 [1, 4]，缺省为 1，不传表示维持原态
      */
    InstanceRequest?: number;
    /**
      * 部署组启动参数，不传表示维持原态
      */
    StartupParameters?: string;
}
/**
 * API 对象类型描述
 */
export interface ApiDefinitionDescr {
    /**
      * 对象名称
      */
    Name: string;
    /**
      * 对象属性列表
      */
    Properties: Array<PropertyField>;
}
/**
 * DescribeLaneRules返回参数结构体
 */
export interface DescribeLaneRulesResponse {
    /**
      * 泳道规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: LaneRules;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImageRepository请求参数结构体
 */
export interface DescribeImageRepositoryRequest {
    /**
      * 仓库名，搜索关键字,不带命名空间的
      */
    SearchWord?: string;
    /**
      * 偏移量，取值从0开始
      */
    Offset?: number;
    /**
      * 分页个数，默认为20， 取值应为1~100
      */
    Limit?: number;
}
/**
 * DescribeApiGroup请求参数结构体
 */
export interface DescribeApiGroupRequest {
    /**
      * API 分组ID
      */
    GroupId: string;
}
/**
 * RedoTaskExecute返回参数结构体
 */
export interface RedoTaskExecuteResponse {
    /**
      * 成功失败
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeContainerGroupDetail请求参数结构体
 */
export interface DescribeContainerGroupDetailRequest {
    /**
      * 分组ID
      */
    GroupId: string;
}
/**
 * 镜像仓库列表
 */
export interface ImageRepositoryResult {
    /**
      * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 镜像服务器地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Server: string;
    /**
      * 列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<ImageRepository>;
}
/**
 * ModifyTask返回参数结构体
 */
export interface ModifyTaskResponse {
    /**
      * 更新是否成功
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGroup请求参数结构体
 */
export interface DescribeGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
}
/**
 * 健康检查配置信息，若不指定该参数，则默认不设置健康检查。
 */
export interface HealthCheckSetting {
    /**
      * 健康检查方法。HTTP：通过 HTTP 接口检查；CMD：通过执行命令检查；TCP：通过建立 TCP 连接检查。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActionType: string;
    /**
      * 容器延时启动健康检查的时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitialDelaySeconds?: number;
    /**
      * 每次健康检查响应的最大超时时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeoutSeconds?: number;
    /**
      * 进行健康检查的时间间隔。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PeriodSeconds?: number;
    /**
      * 表示后端容器从失败到成功的连续健康检查成功次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccessThreshold?: number;
    /**
      * 表示后端容器从成功到失败的连续健康检查成功次数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailureThreshold?: number;
    /**
      * HTTP 健康检查方法使用的检查协议。支持HTTP、HTTPS。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scheme?: string;
    /**
      * 健康检查端口，范围 1~65535 。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
    /**
      * HTTP 健康检查接口的请求路径。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path?: string;
    /**
      * 执行命令检查方式，执行的命令。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Command?: Array<string>;
    /**
      * TSF_DEFAULT：tsf 默认就绪探针。K8S_NATIVE：k8s 原生探针。不填默认为 k8s 原生探针。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
}
/**
 * api分组已绑定的网关部署组
 */
export interface GatewayDeployGroup {
    /**
      * 网关部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployGroupId: string;
    /**
      * 网关部署组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployGroupName: string;
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 应用分类：V：虚拟机应用，C：容器应用
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * 部署组应用状态,取值: Running、Waiting、Paused、Updating、RollingBack、Abnormal、Unknown
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupStatus: string;
    /**
      * 集群类型，C ：容器，V：虚拟机
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterType: string;
}
/**
 * 包列表
 */
export interface PkgList {
    /**
      * 程序包总量
      */
    TotalCount: number;
    /**
      * 程序包信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<PkgInfo>;
    /**
      * 程序包仓库id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepositoryId: string;
    /**
      * 程序包仓库类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepositoryType: string;
    /**
      * 程序包仓库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepositoryName: string;
}
/**
 * 集群
 */
export interface Cluster {
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
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
      * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterType: string;
    /**
      * 集群所属私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 集群状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterStatus: string;
    /**
      * 集群CIDR
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterCIDR: string;
    /**
      * 集群总CPU，单位: 核
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterTotalCpu: number;
    /**
      * 集群总内存，单位: G
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterTotalMem: number;
    /**
      * 集群已使用CPU，单位: 核
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterUsedCpu: number;
    /**
      * 集群已使用内存，单位: G
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterUsedMem: number;
    /**
      * 集群机器实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceCount: number;
    /**
      * 集群可用的机器实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunInstanceCount: number;
    /**
      * 集群正常状态的机器实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    NormalInstanceCount: number;
    /**
      * 删除标记：true：可以删除；false：不可删除
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeleteFlag: boolean;
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
      * 集群所属TSF地域ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TsfRegionId: string;
    /**
      * 集群所属TSF地域名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TsfRegionName: string;
    /**
      * 集群所属TSF可用区ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TsfZoneId: string;
    /**
      * 集群所属TSF可用区名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TsfZoneName: string;
    /**
      * 集群不可删除的原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeleteFlagReason: string;
    /**
      * 集群最大CPU限制，单位：核
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterLimitCpu: number;
    /**
      * 集群最大内存限制，单位：G
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterLimitMem: number;
    /**
      * 集群可用的服务实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunServiceInstanceCount: number;
    /**
      * 集群所属子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 返回给前端的控制信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationInfo: OperationInfo;
    /**
      * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterVersion: string;
}
/**
 * DescribeGroupUseDetail请求参数结构体
 */
export interface DescribeGroupUseDetailRequest {
    /**
      * 网关部署组ID
      */
    GatewayDeployGroupId: string;
    /**
      * 网关分组ID
      */
    GroupId: string;
    /**
      * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
      */
    StartTime: string;
    /**
      * 查询的日期,格式：yyyy-MM-dd HH:mm:ss
      */
    EndTime: string;
    /**
      * 指定top的条数,默认为10
      */
    Count?: number;
}
/**
 * 微服务
 */
export interface Microservice {
    /**
      * 微服务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceId?: string;
    /**
      * 微服务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceName?: string;
    /**
      * 微服务描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceDesc?: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: number;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId?: string;
    /**
      * 微服务的运行实例数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunInstanceCount?: number;
    /**
      * 微服务的离线实例数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    CriticalInstanceCount?: number;
}
/**
 * StopTaskExecute返回参数结构体
 */
export interface StopTaskExecuteResponse {
    /**
      * 操作成功 or 失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartGroup返回参数结构体
 */
export interface StartGroupResponse {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TaskId;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeServerlessGroup请求参数结构体
 */
export interface DescribeServerlessGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
}
/**
 * ShrinkGroup请求参数结构体
 */
export interface ShrinkGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
}
/**
 * 仓库列表
 */
export interface RepositoryList {
    /**
      * 仓库总量
      */
    TotalCount: number;
    /**
      * 仓库信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<RepositoryInfo>;
}
/**
 * CreateLaneRule返回参数结构体
 */
export interface CreateLaneRuleResponse {
    /**
      * 泳道规则Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
    /**
      * 任务ID
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeContainerGroups返回参数结构体
 */
export interface DescribeContainerGroupsResponse {
    /**
      * 查询的权限数据对象
      */
    Result?: ContainGroupResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateApiGroup返回参数结构体
 */
export interface UpdateApiGroupResponse {
    /**
      * 返回结果，true: 成功, false: 失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddInstances请求参数结构体
 */
export interface AddInstancesRequest {
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 云主机ID列表
      */
    InstanceIdList: Array<string>;
    /**
      * 操作系统名称
      */
    OsName?: string;
    /**
      * 操作系统镜像ID
      */
    ImageId?: string;
    /**
      * 重装系统密码设置
      */
    Password?: string;
    /**
      * 重装系统，关联密钥设置
      */
    KeyId?: string;
    /**
      * 安全组设置
      */
    SgId?: string;
    /**
      * 云主机导入方式，虚拟机集群必填，容器集群不填写此字段，R：重装TSF系统镜像，M：手动安装agent
      */
    InstanceImportMode?: string;
}
/**
 * 网关分组简单信息
 */
export interface GatewayApiGroupVo {
    /**
      * 分组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 分组下API个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupApiCount: number;
    /**
      * 分组API列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupApis: Array<GatewayGroupApiVo>;
}
/**
 * CreateApplication请求参数结构体
 */
export interface CreateApplicationRequest {
    /**
      * 应用名称
      */
    ApplicationName: string;
    /**
      * 应用类型，V：虚拟机应用；C：容器应用；S：serverless应用
      */
    ApplicationType: string;
    /**
      * 应用微服务类型，M：service mesh应用；N：普通应用；G：网关应用
      */
    MicroserviceType: string;
    /**
      * 应用描述
      */
    ApplicationDesc?: string;
    /**
      * 应用日志配置项，废弃参数
      */
    ApplicationLogConfig?: string;
    /**
      * 应用资源类型，废弃参数
      */
    ApplicationResourceType?: string;
    /**
      * 应用runtime类型
      */
    ApplicationRuntimeType?: string;
}
/**
 * DeployGroup请求参数结构体
 */
export interface DeployGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
    /**
      * 程序包ID
      */
    PkgId: string;
    /**
      * 部署组启动参数
      */
    StartupParameters?: string;
    /**
      * 部署应用描述信息
      */
    DeployDesc?: string;
    /**
      * 是否允许强制启动
      */
    ForceStart?: boolean;
    /**
      * 是否开启健康检查
      */
    EnableHealthCheck?: boolean;
    /**
      * 开启健康检查时，配置健康检查
      */
    HealthCheckSettings?: HealthCheckSettings;
    /**
      * 部署方式，0表示快速更新，1表示滚动更新
      */
    UpdateType?: number;
    /**
      * 是否启用beta批次
      */
    DeployBetaEnable?: boolean;
    /**
      * 滚动发布每个批次参与的实例比率
      */
    DeployBatch?: Array<number>;
    /**
      * 滚动发布的执行方式
      */
    DeployExeMode?: string;
    /**
      * 滚动发布每个批次的时间间隔
      */
    DeployWaitTime?: number;
}
/**
 * 泳道分页查询
 */
export interface LaneInfos {
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 泳道信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<LaneInfo>;
}
/**
 * CreateTaskFlow请求参数结构体
 */
export interface CreateTaskFlowRequest {
    /**
      * 工作流名称
      */
    FlowName: string;
    /**
      * 触发方式
      */
    TriggerRule: TaskRule;
    /**
      * 工作流任务节点列表
      */
    FlowEdges: Array<TaskFlowEdge>;
    /**
      * 工作流执行超时时间
      */
    TimeOut: number;
}
/**
 * ModifyContainerReplicas返回参数结构体
 */
export interface ModifyContainerReplicasResponse {
    /**
      * 结果true：成功；false：失败；
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * API 日统计数据点
 */
export interface ApiUseStatisticsEntity {
    /**
      * 名称
      */
    Name: string;
    /**
      * 次数
      */
    Count: string;
    /**
      * 比率
      */
    Ratio: string;
}
/**
 * UnbindApiGroup返回参数结构体
 */
export interface UnbindApiGroupResponse {
    /**
      * 返回结果，成功失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateApplication返回参数结构体
 */
export interface CreateApplicationResponse {
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 网关部署组ID和网关API分组ID元组
 */
export interface GatewayGroupIds {
    /**
      * 网关部署组ID
      */
    GatewayDeployGroupId: string;
    /**
      * 分组id
      */
    GroupId: string;
}
/**
 * DeployGroup返回参数结构体
 */
export interface DeployGroupResponse {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TaskId;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeServerlessGroup返回参数结构体
 */
export interface DescribeServerlessGroupResponse {
    /**
      * 结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: ServerlessGroup;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RedoTaskBatch返回参数结构体
 */
export interface RedoTaskBatchResponse {
    /**
      * 批次ID
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务id
 */
export interface TaskId {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
}
/**
 * UpdateApiGroup请求参数结构体
 */
export interface UpdateApiGroupRequest {
    /**
      * Api 分组ID
      */
    GroupId: string;
    /**
      * Api 分组名称
      */
    GroupName?: string;
    /**
      * Api 分组描述
      */
    Description?: string;
    /**
      * 鉴权类型
      */
    AuthType?: string;
    /**
      * 分组上下文
      */
    GroupContext?: string;
}
/**
 * TsfApiListResponse
 */
export interface TsfApiListResponse {
    /**
      * 数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * API 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<MsApiArray>;
}
/**
 * GatewayDeployGroup 翻页对象
 */
export interface TsfPageGatewayDeployGroup {
    /**
      * 记录总数
      */
    TotalCount: number;
    /**
      * 记录实体列表
      */
    Content: Array<GatewayDeployGroup>;
}
/**
 * 列表信息
 */
export interface ImageTag {
    /**
      * 仓库名
      */
    RepoName: string;
    /**
      * 版本名称
      */
    TagName: string;
    /**
      * 版本ID
      */
    TagId: string;
    /**
      * 镜像ID
      */
    ImageId: string;
    /**
      * 大小
      */
    Size: string;
    /**
      * 创建时间
      */
    CreationTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 镜像制作者
      */
    Author: string;
    /**
      * CPU架构
      */
    Architecture: string;
    /**
      * Docker客户端版本
      */
    DockerVersion: string;
    /**
      * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
      */
    Os: string;
    /**
      * push时间
      */
    PushTime: string;
    /**
      * 单位为字节
      */
    SizeByte: number;
}
/**
 * ExecuteTaskFlow请求参数结构体
 */
export interface ExecuteTaskFlowRequest {
    /**
      * 工作流 ID
      */
    FlowId?: string;
}
/**
 * TerminateTaskFlowBatch请求参数结构体
 */
export interface TerminateTaskFlowBatchRequest {
    /**
      * 工作流批次 ID
      */
    FlowBatchId: string;
}
/**
 * DeleteServerlessGroup请求参数结构体
 */
export interface DeleteServerlessGroupRequest {
    /**
      * groupId，分组唯一标识
      */
    GroupId: string;
}
/**
 * 虚拟机部署组信息
 */
export interface VmGroup {
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 部署组状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupStatus: string;
    /**
      * 程序包ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageId: string;
    /**
      * 程序包名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageName: string;
    /**
      * 程序包版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageVersion: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 部署组机器数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceCount: number;
    /**
      * 部署组运行中机器数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunInstanceCount: number;
    /**
      * 部署组启动参数信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartupParameters: string;
    /**
      * 部署组创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 部署组更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 部署组停止机器数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    OffInstanceCount: number;
    /**
      * 部署组描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupDesc: string;
    /**
      * 微服务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceType: string;
    /**
      * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * 部署组资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupResourceType: string;
    /**
      * 部署组更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedTime: number;
    /**
      * 部署应用描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployDesc: string;
    /**
      * 滚动发布的更新方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateType: number;
    /**
      * 发布是否启用beta批次
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployBetaEnable: boolean;
    /**
      * 滚动发布的批次比例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployBatch: Array<number>;
    /**
      * 滚动发布的批次执行方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployExeMode: string;
    /**
      * 滚动发布的每个批次的等待时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployWaitTime: number;
    /**
      * 是否开启了健康检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnableHealthCheck: boolean;
    /**
      * 健康检查配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCheckSettings: HealthCheckSettings;
}
/**
 * DescribeApiUseDetail返回参数结构体
 */
export interface DescribeApiUseDetailResponse {
    /**
      * 日使用统计对象
      */
    Result?: GroupApiUseStatistics;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 容器网络设置。
 */
export interface ServiceSetting {
    /**
      * 0:公网 1:集群内访问 2：NodePort
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessType: number;
    /**
      * 容器端口映射
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProtocolPorts: Array<ProtocolPort>;
    /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
}
/**
 * ModifyUploadInfo请求参数结构体
 */
export interface ModifyUploadInfoRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 调用DescribeUploadInfo接口时返回的软件包ID
      */
    PkgId: string;
    /**
      * COS返回上传结果（默认为0：成功，其他值表示失败）
      */
    Result: number;
    /**
      * 程序包MD5
      */
    Md5: string;
    /**
      * 程序包大小（单位字节）
      */
    Size?: number;
    /**
      * 程序包仓库类型
      */
    RepositoryType?: string;
    /**
      * 程序包仓库id
      */
    RepositoryId?: string;
}
/**
 * 分页的应用描述信息字段
 */
export interface ApplicationForPage {
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationDesc: string;
    /**
      * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * 微服务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceType: string;
    /**
      * 编程语言
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProgLang: string;
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
      * 应用资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationResourceType: string;
    /**
      * 应用runtime类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationRuntimeType: string;
    /**
      * Apigateway的serviceId
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApigatewayServiceId: string;
}
/**
 * UpdateGatewayApi返回参数结构体
 */
export interface UpdateGatewayApiResponse {
    /**
      * 返回结果，成功失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyLane返回参数结构体
 */
export interface ModifyLaneResponse {
    /**
      * 操作状态
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePublicConfigSummary返回参数结构体
 */
export interface DescribePublicConfigSummaryResponse {
    /**
      * 分页的全局配置统计信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageConfig;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePublicConfigReleaseLogs请求参数结构体
 */
export interface DescribePublicConfigReleaseLogsRequest {
    /**
      * 命名空间ID，不传入时查询全量
      */
    NamespaceId?: string;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 每页条数，默认为20
      */
    Limit?: number;
}
/**
 * CreateServerlessGroup返回参数结构体
 */
export interface CreateServerlessGroupResponse {
    /**
      * 创建成功的部署组ID，返回null表示失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 分片参数
 */
export interface ShardArgument {
    /**
      * 分片参数 KEY，整形
      */
    ShardKey: number;
    /**
      * 分片参数 VALUE
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShardValue: string;
}
/**
 * DescribeApplicationAttribute返回参数结构体
 */
export interface DescribeApplicationAttributeResponse {
    /**
      * 应用列表其它字段返回参数
      */
    Result?: ApplicationAttribute;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyLane请求参数结构体
 */
export interface ModifyLaneRequest {
    /**
      * 泳道ID
      */
    LaneId: string;
    /**
      * 泳道名称
      */
    LaneName: string;
    /**
      * 备注
      */
    Remark: string;
}
/**
 * DescribeLanes请求参数结构体
 */
export interface DescribeLanesRequest {
    /**
      * 每页展示的条数
      */
    Limit: number;
    /**
      * 翻页偏移量
      */
    Offset: number;
    /**
      * 搜索关键字
      */
    SearchWord?: string;
}
/**
 * DescribeGatewayMonitorOverview返回参数结构体
 */
export interface DescribeGatewayMonitorOverviewResponse {
    /**
      * 监控概览对象
      */
    Result?: MonitorOverview;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreatePublicConfig请求参数结构体
 */
export interface CreatePublicConfigRequest {
    /**
      * 配置项名称
      */
    ConfigName: string;
    /**
      * 配置项版本
      */
    ConfigVersion: string;
    /**
      * 配置项值，总是接收yaml格式的内容
      */
    ConfigValue: string;
    /**
      * 配置项版本描述
      */
    ConfigVersionDesc?: string;
    /**
      * 配置项类型
      */
    ConfigType?: string;
    /**
      * Base64编码的配置项
      */
    EncodeWithBase64?: boolean;
}
/**
 * CreateAllGatewayApiAsync请求参数结构体
 */
export interface CreateAllGatewayApiAsyncRequest {
    /**
      * API分组ID
      */
    GroupId: string;
    /**
      * 微服务ID
      */
    MicroserviceId: string;
}
/**
 * EnableTaskFlow返回参数结构体
 */
export interface EnableTaskFlowResponse {
    /**
      * true成功，false: 失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TSF配置项发布信息分页对象
 */
export interface TsfPageConfigRelease {
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 配置项发布信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<ConfigRelease>;
}
/**
 * DisableTaskFlow返回参数结构体
 */
export interface DisableTaskFlowResponse {
    /**
      * true成功，false: 失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGatewayMonitorOverview请求参数结构体
 */
export interface DescribeGatewayMonitorOverviewRequest {
    /**
      * 网关部署组ID
      */
    GatewayDeployGroupId: string;
}
/**
 * DescribeImageTags返回参数结构体
 */
export interface DescribeImageTagsResponse {
    /**
      * 查询的权限数据对象
      */
    Result?: ImageTagsResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RedoTaskFlowBatch请求参数结构体
 */
export interface RedoTaskFlowBatchRequest {
    /**
      * 工作流批次 ID
      */
    FlowBatchId: string;
}
/**
 * StopTaskExecute请求参数结构体
 */
export interface StopTaskExecuteRequest {
    /**
      * 任务执行ID
      */
    ExecuteId: string;
    /**
      * 任务批次ID
      */
    BatchId?: string;
    /**
      * 任务ID
      */
    TaskId?: string;
}
/**
 * DescribePkgs请求参数结构体
 */
export interface DescribePkgsRequest {
    /**
      * 应用ID（只传入应用ID，返回该应用下所有软件包信息）
      */
    ApplicationId: string;
    /**
      * 查询关键字（支持根据包ID，包名，包版本号搜索）
      */
    SearchWord?: string;
    /**
      * 排序关键字（默认为"UploadTime"：上传时间）
      */
    OrderBy?: string;
    /**
      * 升序：0/降序：1（默认降序）
      */
    OrderType?: number;
    /**
      * 查询起始偏移
      */
    Offset?: number;
    /**
      * 返回数量限制
      */
    Limit?: number;
    /**
      * 程序包仓库类型
      */
    RepositoryType?: string;
    /**
      * 程序包仓库id
      */
    RepositoryId?: string;
}
/**
 * tsf 容器集群节点调度策略
 */
export interface SchedulingStrategy {
    /**
      * NONE：不使用调度策略；CROSS_AZ：跨可用区部署
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
}
/**
 * 网关部署组、分组、API列表数据
 */
export interface GatewayVo {
    /**
      * 网关部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GatewayDeployGroupId: string;
    /**
      * 网关部署组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GatewayDeployGroupName: string;
    /**
      * API 分组个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupNum: number;
    /**
      * API 分组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Groups: Array<GatewayApiGroupVo>;
}
/**
 * DescribeApplicationAttribute请求参数结构体
 */
export interface DescribeApplicationAttributeRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
}
/**
 * CreateTask请求参数结构体
 */
export interface CreateTaskRequest {
    /**
      * 任务名称，任务长度64字符
      */
    TaskName: string;
    /**
      * 任务内容，长度限制65536个字节
      */
    TaskContent: string;
    /**
      * 执行类型，UNICAST/BROADCAST
      */
    ExecuteType: string;
    /**
      * 任务类型
      */
    TaskType: string;
    /**
      * 任务超时时间， 时间单位 ms
      */
    TimeOut: number;
    /**
      * 部署组ID
      */
    GroupId: string;
    /**
      * 触发规则
      */
    TaskRule?: TaskRule;
    /**
      * 重试次数，0 <= RetryCount<= 10
      */
    RetryCount?: number;
    /**
      * 重试间隔， 0 <= RetryInterval <= 600000， 时间单位 ms
      */
    RetryInterval?: number;
    /**
      * 分片数量
      */
    ShardCount?: number;
    /**
      * 分片参数
      */
    ShardArguments?: Array<ShardArgument>;
    /**
      * 判断任务成功的操作符
      */
    SuccessOperator?: string;
    /**
      * 判断任务成功率的阈值，如99.99
      */
    SuccessRatio?: string;
    /**
      * 高级设置
      */
    AdvanceSettings?: AdvanceSettings;
    /**
      * 任务参数，长度限制10000个字符
      */
    TaskArgument?: string;
}
/**
 * 提供给前端，控制按钮是否显示
 */
export interface OperationInfo {
    /**
      * 初始化按钮的控制信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Init: OperationInfoDetail;
    /**
      * 添加实例按钮的控制信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddInstance: OperationInfoDetail;
    /**
      * 销毁机器的控制信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Destroy: OperationInfoDetail;
}
/**
 * DescribePublicConfig返回参数结构体
 */
export interface DescribePublicConfigResponse {
    /**
      * 全局配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: Config;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfig返回参数结构体
 */
export interface DescribeConfigResponse {
    /**
      * 配置项
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: Config;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 部署组
 */
export interface SimpleGroup {
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterType: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 启动参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartupParameters: string;
    /**
      * 部署组资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupResourceType: string;
    /**
      * 应用微服务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppMicroServiceType: string;
}
/**
 * ModifyContainerGroup返回参数结构体
 */
export interface ModifyContainerGroupResponse {
    /**
      * 更新部署组是否成功。
true：成功。
false：失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
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
      * 应用ID
      */
    ApplicationId: string;
}
/**
 * RevocationPublicConfig请求参数结构体
 */
export interface RevocationPublicConfigRequest {
    /**
      * 配置项发布ID
      */
    ConfigReleaseId: string;
}
/**
 * DeleteTask请求参数结构体
 */
export interface DeleteTaskRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * 健康检查参数
 */
export interface HealthCheckSettings {
    /**
      * 存活健康检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    LivenessProbe?: HealthCheckSetting;
    /**
      * 就绪健康检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadinessProbe?: HealthCheckSetting;
}
/**
 * 虚拟机部署组列表简要字段
 */
export interface VmGroupSimple {
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * 部署组描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupDesc: string;
    /**
      * 部署组更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 部署组启动参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartupParameters: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 部署组创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 应用微服务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceType: string;
    /**
      * 部署组资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupResourceType: string;
    /**
      * 部署组更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedTime: number;
    /**
      * 部署应用描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployDesc: string;
}
/**
 * API 响应的参数结构描述
 */
export interface ApiResponseDescr {
    /**
      * 参数描述
      */
    Name: string;
    /**
      * 参数类型
      */
    Type: string;
    /**
      * 参数描述
      */
    Description: string;
}
/**
 * ApiRequestDescr
 */
export interface ApiRequestDescr {
    /**
      * 参数名称
      */
    Name: string;
    /**
      * 参数类型
      */
    Type: string;
    /**
      * 参数位置
      */
    In: string;
    /**
      * 参数描述
      */
    Description: string;
    /**
      * 参数是否必须
      */
    Required: boolean;
    /**
      * 参数的默认值
注意：此字段可能返回 null，表示取不到有效值。
      */
    DefaultValue: string;
}
/**
 * API版本数组
 */
export interface ApiVersionArray {
    /**
      * App ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * App 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * App 包版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgVersion: string;
}
/**
 * 配置项发布日志
 */
export interface ConfigReleaseLog {
    /**
      * 配置项发布日志ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigReleaseLogId: string;
    /**
      * 配置项ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigId: string;
    /**
      * 配置项名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigName: string;
    /**
      * 配置项版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigVersion: string;
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseTime: string;
    /**
      * 发布描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseDesc: string;
    /**
      * 发布状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseStatus: string;
    /**
      * 上次发布的配置项ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastConfigId: string;
    /**
      * 上次发布的配置项名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastConfigName: string;
    /**
      * 上次发布的配置项版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastConfigVersion: string;
    /**
      * 回滚标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    RollbackFlag: boolean;
}
/**
 * CreateConfig请求参数结构体
 */
export interface CreateConfigRequest {
    /**
      * 配置项名称
      */
    ConfigName: string;
    /**
      * 配置项版本
      */
    ConfigVersion: string;
    /**
      * 配置项值
      */
    ConfigValue: string;
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 配置项版本描述
      */
    ConfigVersionDesc?: string;
    /**
      * 配置项值类型
      */
    ConfigType?: string;
    /**
      * Base64编码的配置项
      */
    EncodeWithBase64?: boolean;
}
/**
 * DescribeUploadInfo请求参数结构体
 */
export interface DescribeUploadInfoRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 程序包名
      */
    PkgName: string;
    /**
      * 程序包版本
      */
    PkgVersion: string;
    /**
      * 程序包类型
      */
    PkgType: string;
    /**
      * 程序包介绍
      */
    PkgDesc?: string;
    /**
      * 程序包仓库类型
      */
    RepositoryType?: string;
    /**
      * 程序包仓库id
      */
    RepositoryId?: string;
}
/**
 * 工作流最近批次的状态
 */
export interface TaskFlowLastBatchState {
    /**
      * 批次ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowBatchId: string;
    /**
      * 批次历史ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowBatchLogId: string;
    /**
      * 状态,WAITING/SUCCESS/FAILED/RUNNING/TERMINATING
注意：此字段可能返回 null，表示取不到有效值。
      */
    State: string;
}
/**
 * UpdateGatewayApi请求参数结构体
 */
export interface UpdateGatewayApiRequest {
    /**
      * API ID
      */
    ApiId: string;
    /**
      * API 路径
      */
    Path?: string;
    /**
      * Api 请求方法
      */
    Method?: string;
    /**
      * 请求映射
      */
    PathMapping?: string;
    /**
      * api所在服务host
      */
    Host?: string;
    /**
      * api描述信息
      */
    Description?: string;
}
/**
 * DescribeRepository返回参数结构体
 */
export interface DescribeRepositoryResponse {
    /**
      * 查询的仓库信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: RepositoryInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApiGroups请求参数结构体
 */
export interface DescribeApiGroupsRequest {
    /**
      * 搜索关键字
      */
    SearchWord?: string;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 每页条数，默认为20
      */
    Limit?: number;
    /**
      * 分组类型。 ms： 微服务分组； external:外部Api分组
      */
    GroupType?: string;
    /**
      * 鉴权类型。 secret： 秘钥鉴权； none:无鉴权
      */
    AuthType?: string;
    /**
      * 发布状态, drafted: 未发布。 released: 发布
      */
    Status?: string;
    /**
      * 排序字段："created_time"或"group_context"
      */
    OrderBy?: string;
    /**
      * 排序类型：0(ASC)或1(DESC)
      */
    OrderType?: number;
}
/**
 * 应用列表其它字段
 */
export interface ApplicationAttribute {
    /**
      * 总实例个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceCount: number;
    /**
      * 运行实例个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunInstanceCount: number;
    /**
      * 应用下部署组个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupCount: number;
}
/**
 * DeletePkgs返回参数结构体
 */
export interface DeletePkgsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGroups返回参数结构体
 */
export interface DescribeGroupsResponse {
    /**
      * 虚拟机部署组分页信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageVmGroup;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyLaneRule请求参数结构体
 */
export interface ModifyLaneRuleRequest {
    /**
      * 泳道规则ID
      */
    RuleId: string;
    /**
      * 泳道规则名称
      */
    RuleName: string;
    /**
      * 泳道规则备注
      */
    Remark: string;
    /**
      * 泳道规则标签列表
      */
    RuleTagList: Array<LaneRuleTag>;
    /**
      * 泳道规则标签关系
      */
    RuleTagRelationship: string;
    /**
      * 泳道ID
      */
    LaneId: string;
    /**
      * 开启状态
      */
    Enable: boolean;
}
/**
 * CreateTaskFlow返回参数结构体
 */
export interface CreateTaskFlowResponse {
    /**
      * 工作流 ID
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMicroservices请求参数结构体
 */
export interface DescribeMicroservicesRequest {
    /**
      * 命名空间ID
      */
    NamespaceId: string;
    /**
      * 搜索字段
      */
    SearchWord?: string;
    /**
      * 排序字段
      */
    OrderBy?: string;
    /**
      * 排序类型
      */
    OrderType?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 分页个数
      */
    Limit?: number;
    /**
      * 状态过滤，online、offline、single_online
      */
    Status?: Array<string>;
}
/**
 * AddClusterInstances返回参数结构体
 */
export interface AddClusterInstancesResponse {
    /**
      * 添加云主机的返回列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: AddInstanceResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTaskLastStatus返回参数结构体
 */
export interface DescribeTaskLastStatusResponse {
    /**
      * 任务上一次执行状态
      */
    Result?: TaskLastExecuteStatus;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReleasePublicConfig返回参数结构体
 */
export interface ReleasePublicConfigResponse {
    /**
      * true：发布成功；false：发布失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 网关API简单信息
 */
export interface GatewayGroupApiVo {
    /**
      * API ID
      */
    ApiId: string;
    /**
      * API 请求路径
      */
    Path: string;
    /**
      * API 微服务名称
      */
    MicroserviceName: string;
    /**
      * API 请求方法
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
}
/**
 * DescribeApplications请求参数结构体
 */
export interface DescribeApplicationsRequest {
    /**
      * 搜索字段
      */
    SearchWord?: string;
    /**
      * 排序字段
      */
    OrderBy?: string;
    /**
      * 排序类型
      */
    OrderType?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 分页个数
      */
    Limit?: number;
    /**
      * 应用类型
      */
    ApplicationType?: string;
    /**
      * 应用的微服务类型
      */
    MicroserviceType?: string;
    /**
      * 应用资源类型数组
      */
    ApplicationResourceTypeList?: Array<string>;
}
/**
 * DescribePublicConfigReleases请求参数结构体
 */
export interface DescribePublicConfigReleasesRequest {
    /**
      * 配置项名称，不传入时查询全量
      */
    ConfigName?: string;
    /**
      * 命名空间ID，不传入时查询全量
      */
    NamespaceId?: string;
    /**
      * 每页条数
      */
    Limit?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 配置项ID，不传入时查询全量
      */
    ConfigId?: string;
}
/**
 * DescribeLaneRules请求参数结构体
 */
export interface DescribeLaneRulesRequest {
    /**
      * 每页展示的条数
      */
    Limit: number;
    /**
      * 翻页偏移量
      */
    Offset: number;
    /**
      * 搜索关键词
      */
    SearchWord?: string;
    /**
      * 泳道规则ID（用于精确搜索）
      */
    RuleId?: string;
}
/**
 * CreateServerlessGroup请求参数结构体
 */
export interface CreateServerlessGroupRequest {
    /**
      * 分组所属应用ID
      */
    ApplicationId: string;
    /**
      * 分组名称字段，长度1~60，字母或下划线开头，可包含字母数字下划线
      */
    GroupName: string;
    /**
      * 分组所属名字空间ID
      */
    NamespaceId: string;
    /**
      * 分组所属集群ID
      */
    ClusterId: string;
}
/**
 * CreateRepository返回参数结构体
 */
export interface CreateRepositoryResponse {
    /**
      * 创建仓库是否成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateLaneRule请求参数结构体
 */
export interface CreateLaneRuleRequest {
    /**
      * 泳道规则名称
      */
    RuleName: string;
    /**
      * 泳道规则备注
      */
    Remark: string;
    /**
      * 泳道规则标签列表
      */
    RuleTagList: Array<LaneRuleTag>;
    /**
      * 泳道规则标签关系
      */
    RuleTagRelationship: string;
    /**
      * 泳道Id
      */
    LaneId: string;
}
/**
 * DescribeServerlessGroups请求参数结构体
 */
export interface DescribeServerlessGroupsRequest {
    /**
      * 搜索字段，模糊搜索groupName字段
      */
    SearchWord?: string;
    /**
      * 分组所属应用ID
      */
    ApplicationId?: string;
    /**
      * 排序字段，默认为 createTime字段，支持id， name， createTime
      */
    OrderBy?: string;
    /**
      * 排序方式，默认为1：倒序排序，0：正序，1：倒序
      */
    OrderType?: string;
    /**
      * 偏移量，取值从0开始
      */
    Offset?: number;
    /**
      * 分页个数，默认为20， 取值应为1~50
      */
    Limit?: number;
    /**
      * 分组所属名字空间ID
      */
    NamespaceId?: string;
    /**
      * 分组所属集群ID
      */
    ClusterId?: string;
}
/**
 * Cos下载所需信息
 */
export interface CosDownloadInfo {
    /**
      * 桶名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Bucket: string;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * 鉴权信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Credentials: CosCredentials;
}
/**
 * DeletePkgs请求参数结构体
 */
export interface DeletePkgsRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 需要删除的程序包ID列表
      */
    PkgIds: Array<string>;
    /**
      * 程序包仓库类型
      */
    RepositoryType?: string;
    /**
      * 程序包仓库id
      */
    RepositoryId?: string;
}
/**
 * ServerlessGroup 翻页对象
 */
export interface ServerlessGroupPage {
    /**
      * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<ServerlessGroup>;
}
/**
 * API监控明细数据
 */
export interface GroupApiUseStatistics {
    /**
      * 总调用数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopStatusCode: Array<ApiUseStatisticsEntity>;
    /**
      * 平均错误率
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopTimeCost: Array<ApiUseStatisticsEntity>;
    /**
      * 分位值对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    Quantile: QuantileEntity;
}
/**
 * ChangeApiUsableStatus返回参数结构体
 */
export interface ChangeApiUsableStatusResponse {
    /**
      * API 信息
      */
    Result?: ApiDetailInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EnableTask返回参数结构体
 */
export interface EnableTaskResponse {
    /**
      * 操作成功or失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateApiRateLimitRules返回参数结构体
 */
export interface UpdateApiRateLimitRulesResponse {
    /**
      * 是否成功
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGroupInstances返回参数结构体
 */
export interface DescribeGroupInstancesResponse {
    /**
      * 部署组机器信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageInstance;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDownloadInfo请求参数结构体
 */
export interface DescribeDownloadInfoRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
    /**
      * 程序包ID
      */
    PkgId: string;
    /**
      * 程序包仓库ID
      */
    RepositoryId?: string;
    /**
      * 程序包仓库类型
      */
    RepositoryType?: string;
}
/**
 * DeleteApiGroup请求参数结构体
 */
export interface DeleteApiGroupRequest {
    /**
      * API 分组ID
      */
    GroupId: string;
}
/**
 * ReleaseApiGroup请求参数结构体
 */
export interface ReleaseApiGroupRequest {
    /**
      * Api 分组ID
      */
    GroupId: string;
}
/**
 * StartGroup请求参数结构体
 */
export interface StartGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
}
/**
 * DescribeClusterInstances返回参数结构体
 */
export interface DescribeClusterInstancesResponse {
    /**
      * 集群机器实例分页信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageInstance;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ExpandGroup请求参数结构体
 */
export interface ExpandGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
    /**
      * 扩容的机器实例ID列表
      */
    InstanceIdList: Array<string>;
}
/**
 * ModifyLaneRule返回参数结构体
 */
export interface ModifyLaneRuleResponse {
    /**
      * 操作状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TSF简单部署组分页列表
 */
export interface TsfPageSimpleGroup {
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 简单部署组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<SimpleGroup>;
}
/**
 * 包信息
 */
export interface PkgInfo {
    /**
      * 程序包ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgId: string;
    /**
      * 程序包名
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgName: string;
    /**
      * 程序包类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgType: string;
    /**
      * 程序包版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgVersion: string;
    /**
      * 程序包描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgDesc: string;
    /**
      * 上传时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UploadTime: string;
    /**
      * 程序包MD5
注意：此字段可能返回 null，表示取不到有效值。
      */
    Md5: string;
    /**
      * 程序包状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgPubStatus: number;
    /**
      * 程序包关联关系
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgBindInfo: Array<PkgBind>;
}
/**
 * 部署组实例列表
 */
export interface GroupPod {
    /**
      * 实例名称(对应到kubernetes的pod名称)
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodName: string;
    /**
      * 实例ID(对应到kubernetes的pod id)
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodId: string;
    /**
      * 实例状态，请参考后面的实例以及容器的状态定义
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 实例处于当前状态的原因，例如容器下载镜像失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Reason: string;
    /**
      * 主机IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeIp: string;
    /**
      * 实例IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip: string;
    /**
      * 实例中容器的重启次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartCount: number;
    /**
      * 实例中已就绪容器的个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadyCount: number;
    /**
      * 运行时长
注意：此字段可能返回 null，表示取不到有效值。
      */
    Runtime: string;
    /**
      * 实例启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedAt: string;
    /**
      * 服务实例状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceInstanceStatus: string;
    /**
      * 机器实例可使用状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceAvailableStatus: string;
    /**
      * 机器实例状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceStatus: string;
    /**
      * 节点实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeInstanceId: string;
}
/**
 * EnableTaskFlow请求参数结构体
 */
export interface EnableTaskFlowRequest {
    /**
      * 工作流 ID
      */
    FlowId: string;
}
/**
 * DescribeReleasedConfig请求参数结构体
 */
export interface DescribeReleasedConfigRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
}
/**
 * 微服务网关API信息
 */
export interface ApiInfo {
    /**
      * 命名空间Id，若为外部API,为固定值："namespace-external"
      */
    NamespaceId: string;
    /**
      * 服务Id，若为外部API,为固定值："ms-external"
      */
    MicroserviceId: string;
    /**
      * API path
      */
    Path: string;
    /**
      * Api 请求
      */
    Method: string;
    /**
      * 请求映射
      */
    PathMapping: string;
    /**
      * api所在服务host,限定外部Api填写。格式: `http://127.0.0.1:8080`
      */
    Host?: string;
    /**
      * api描述信息
      */
    Description?: string;
}
/**
 * ModifyMicroservice请求参数结构体
 */
export interface ModifyMicroserviceRequest {
    /**
      * 微服务 ID
      */
    MicroserviceId: string;
    /**
      * 微服务备注信息
      */
    MicroserviceDesc: string;
}
/**
 * DescribeConfigReleases请求参数结构体
 */
export interface DescribeConfigReleasesRequest {
    /**
      * 配置项名称，不传入时查询全量
      */
    ConfigName?: string;
    /**
      * 部署组ID，不传入时查询全量
      */
    GroupId?: string;
    /**
      * 命名空间ID，不传入时查询全量
      */
    NamespaceId?: string;
    /**
      * 集群ID，不传入时查询全量
      */
    ClusterId?: string;
    /**
      * 每页条数
      */
    Limit?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 配置ID，不传入时查询全量
      */
    ConfigId?: string;
    /**
      * 应用ID，不传入时查询全量
      */
    ApplicationId?: string;
}
/**
 * 分组日使用统计对象
 */
export interface GroupDailyUseStatistics {
    /**
      * 总调用数
      */
    TopReqAmount: Array<GroupUseStatisticsEntity>;
    /**
      * 平均错误率
      */
    TopFailureRate: Array<GroupUseStatisticsEntity>;
    /**
      * 平均响应耗时
      */
    TopAvgTimeCost: Array<GroupUseStatisticsEntity>;
}
/**
 * DescribeApiGroup返回参数结构体
 */
export interface DescribeApiGroupResponse {
    /**
      * API分组信息
      */
    Result?: ApiGroupInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateApiRateLimitRule请求参数结构体
 */
export interface UpdateApiRateLimitRuleRequest {
    /**
      * 限流规则ID
      */
    RuleId: string;
    /**
      * 开启/禁用，enabled/disabled
      */
    UsableStatus: string;
    /**
      * qps值，开启限流规则时，必填
      */
    MaxQps?: number;
}
/**
 * CreateLane请求参数结构体
 */
export interface CreateLaneRequest {
    /**
      * 泳道名称
      */
    LaneName: string;
    /**
      * 泳道备注
      */
    Remark: string;
    /**
      * 泳道部署组信息
      */
    LaneGroupList: Array<LaneGroup>;
}
/**
 * CreateApiGroup返回参数结构体
 */
export interface CreateApiGroupResponse {
    /**
      * API分组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RedoTaskExecute请求参数结构体
 */
export interface RedoTaskExecuteRequest {
    /**
      * 任务批次ID
      */
    BatchId: string;
    /**
      * 任务执行ID
      */
    ExecuteId: string;
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * DescribeApplications返回参数结构体
 */
export interface DescribeApplicationsResponse {
    /**
      * 应用分页列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageApplication;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfig请求参数结构体
 */
export interface DescribeConfigRequest {
    /**
      * 配置项ID
      */
    ConfigId: string;
}
/**
 * DescribeGatewayAllGroupApis请求参数结构体
 */
export interface DescribeGatewayAllGroupApisRequest {
    /**
      * 网关部署组ID
      */
    GatewayDeployGroupId: string;
    /**
      * 搜索关键字，支持分组名称或API Path
      */
    SearchWord?: string;
}
/**
 * DeleteGroup请求参数结构体
 */
export interface DeleteGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
}
/**
 *  容器部署组详情
 */
export interface ContainerGroupDetail {
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 实例总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceNum: number;
    /**
      * 已启动实例总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    CurrentNum: number;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 镜像server
注意：此字段可能返回 null，表示取不到有效值。
      */
    Server: string;
    /**
      * 镜像名，如/tsf/nginx
注意：此字段可能返回 null，表示取不到有效值。
      */
    Reponame: string;
    /**
      * 镜像版本名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagName: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 负载均衡ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    LbIp: string;
    /**
      * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationType: string;
    /**
      * Service ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterIp: string;
    /**
      * NodePort端口，只有公网和NodePort访问方式才有值
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodePort: number;
    /**
      * 最大分配的 CPU 核数，对应 K8S limit
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuLimit: string;
    /**
      * 最大分配的内存 MiB 数，对应 K8S limit
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemLimit: string;
    /**
      * 0:公网 1:集群内访问 2：NodePort
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessType: number;
    /**
      * 更新方式：0:快速更新 1:滚动更新
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateType: number;
    /**
      * 更新间隔,单位秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateIvl: number;
    /**
      * 端口数组对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProtocolPorts: Array<ProtocolPort>;
    /**
      * 环境变量数组对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    Envs: Array<Env>;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * pod错误信息描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 部署组状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 服务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceType: string;
    /**
      * 初始分配的 CPU 核数，对应 K8S request
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuRequest: string;
    /**
      * 初始分配的内存 MiB 数，对应 K8S request
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemRequest: string;
    /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 部署组资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupResourceType: string;
    /**
      * 部署组实例个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceCount: number;
    /**
      * 部署组更新时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedTime: number;
    /**
      * kubernetes滚动更新策略的MaxSurge参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxSurge: string;
    /**
      * kubernetes滚动更新策略的MaxUnavailable参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxUnavailable: string;
}
/**
 * BindApiGroup请求参数结构体
 */
export interface BindApiGroupRequest {
    /**
      * 分组绑定网关列表
      */
    GroupGatewayList: Array<GatewayGroupIds>;
}
/**
 * StopTaskBatch请求参数结构体
 */
export interface StopTaskBatchRequest {
    /**
      * 批次ID
      */
    BatchId: string;
    /**
      * 参数ID
      */
    TaskId?: string;
}
/**
 * Serverless部署组信息
 */
export interface ServerlessGroup {
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 分组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 服务状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 程序包ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgId: string;
    /**
      * 程序包名
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgName: string;
    /**
      * 集群id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 命名空间id
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * vpc ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * vpc 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 程序包版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgVersion: string;
    /**
      * 所需实例内存大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Memory: string;
    /**
      * 要求最小实例数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceRequest: number;
    /**
      * 部署组启动参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartupParameters: string;
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 部署组实例数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceCount: number;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: Array<string>;
}
/**
 * API 明细
 */
export interface ApiDetailInfo {
    /**
      * API ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiId: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 服务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceId: string;
    /**
      * 服务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    MicroserviceName: string;
    /**
      * API 请求路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * Api 映射路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    PathMapping: string;
    /**
      * 请求方法
注意：此字段可能返回 null，表示取不到有效值。
      */
    Method: string;
    /**
      * 所属分组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 是否禁用
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsableStatus: string;
    /**
      * 发布状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseStatus: string;
    /**
      * 开启限流
注意：此字段可能返回 null，表示取不到有效值。
      */
    RateLimitStatus: string;
    /**
      * 是否开启mock
注意：此字段可能返回 null，表示取不到有效值。
      */
    MockStatus: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedTime: string;
    /**
      * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleasedTime: string;
    /**
      * 所属分组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * API 超时，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timeout: number;
    /**
      * Api所在服务host
注意：此字段可能返回 null，表示取不到有效值。
      */
    Host: string;
    /**
      * API类型。 ms ： 微服务API； external :外部服务Api
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiType: string;
    /**
      * Api描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
}
/**
 * DescribeContainerGroups请求参数结构体
 */
export interface DescribeContainerGroupsRequest {
    /**
      * 搜索字段，模糊搜索groupName字段
      */
    SearchWord?: string;
    /**
      * 分组所属应用ID
      */
    ApplicationId?: string;
    /**
      * 排序字段，默认为 createTime字段，支持id， name， createTime
      */
    OrderBy?: string;
    /**
      * 排序方式，默认为1：倒序排序，0：正序，1：倒序
      */
    OrderType?: number;
    /**
      * 偏移量，取值从0开始
      */
    Offset?: number;
    /**
      * 分页个数，默认为20， 取值应为1~50
      */
    Limit?: number;
    /**
      * 集群ID
      */
    ClusterId?: string;
    /**
      * 命名空间 ID
      */
    NamespaceId?: string;
}
/**
 * DisableTaskFlow请求参数结构体
 */
export interface DisableTaskFlowRequest {
    /**
      * 工作流 ID
      */
    FlowId: string;
}
/**
 * DescribePodInstances请求参数结构体
 */
export interface DescribePodInstancesRequest {
    /**
      * 实例所属groupId
      */
    GroupId: string;
    /**
      * 偏移量，取值从0开始
      */
    Offset?: number;
    /**
      * 分页个数，默认为20， 取值应为1~50
      */
    Limit?: number;
}
/**
 * RedoTask返回参数结构体
 */
export interface RedoTaskResponse {
    /**
      * 操作成功or失败
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ShrinkInstances请求参数结构体
 */
export interface ShrinkInstancesRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
    /**
      * 下线机器实例ID列表
      */
    InstanceIdList: Array<string>;
}
/**
 * 应用分页信息
 */
export interface TsfPageApplication {
    /**
      * 应用总数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 应用信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<ApplicationForPage>;
}
/**
 * DeleteConfig请求参数结构体
 */
export interface DeleteConfigRequest {
    /**
      * 配置项ID
      */
    ConfigId: string;
}
/**
 * DescribePublicConfigReleaseLogs返回参数结构体
 */
export interface DescribePublicConfigReleaseLogsResponse {
    /**
      * 分页后的公共配置项发布历史列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageConfigReleaseLog;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ExecuteTask返回参数结构体
 */
export interface ExecuteTaskResponse {
    /**
      * 成功/失败
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateApiRateLimitRule返回参数结构体
 */
export interface CreateApiRateLimitRuleResponse {
    /**
      * 是否成功
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 配置项
 */
export interface Config {
    /**
      * 配置项ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigId: string;
    /**
      * 配置项名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigName: string;
    /**
      * 配置项版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigVersion: string;
    /**
      * 配置项版本描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigVersionDesc: string;
    /**
      * 配置项值
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigValue: string;
    /**
      * 配置项类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigType: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreationTime: string;
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: string;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName: string;
    /**
      * 删除标识，true：可以删除；false：不可删除
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeleteFlag: boolean;
    /**
      * 最后更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastUpdateTime: string;
    /**
      * 配置项版本数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigVersionCount: number;
}
/**
 * 	端口对象
 */
export interface ProtocolPort {
    /**
      * TCP UDP
      */
    Protocol: string;
    /**
      * 服务端口
      */
    Port: number;
    /**
      * 容器端口
      */
    TargetPort: number;
    /**
      * 主机端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodePort?: number;
}
/**
 * RevocationConfig返回参数结构体
 */
export interface RevocationConfigResponse {
    /**
      * true：回滚成功；false：回滚失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCluster请求参数结构体
 */
export interface CreateClusterRequest {
    /**
      * 集群名称
      */
    ClusterName: string;
    /**
      * 集群类型
      */
    ClusterType: string;
    /**
      * 私有网络ID
      */
    VpcId: string;
    /**
      * 分配给集群容器和服务IP的CIDR
      */
    ClusterCIDR?: string;
    /**
      * 集群备注
      */
    ClusterDesc?: string;
    /**
      * 集群所属TSF地域
      */
    TsfRegionId?: string;
    /**
      * 集群所属TSF可用区
      */
    TsfZoneId?: string;
    /**
      * 私有网络子网ID
      */
    SubnetId?: string;
    /**
      * 集群版本
      */
    ClusterVersion?: string;
}
/**
 * 微服务列表信息
 */
export interface TsfPageMicroservice {
    /**
      * 微服务总数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 微服务列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<Microservice>;
}
/**
 * 配置项发布信息
 */
export interface ConfigRelease {
    /**
      * 配置项发布ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigReleaseId: string;
    /**
      * 配置项ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigId: string;
    /**
      * 配置项名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigName: string;
    /**
      * 配置项版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigVersion: string;
    /**
      * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseTime: string;
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 部署组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 发布描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReleaseDesc: string;
}
/**
 * DeleteContainerGroup请求参数结构体
 */
export interface DeleteContainerGroupRequest {
    /**
      * 部署组ID，分组唯一标识
      */
    GroupId: string;
}
/**
 * 高级选项设置
 */
export interface AdvanceSettings {
    /**
      * 子任务单机并发数限制，默认值为2
      */
    SubTaskConcurrency?: number;
}
/**
 * ReleaseConfig请求参数结构体
 */
export interface ReleaseConfigRequest {
    /**
      * 配置ID
      */
    ConfigId: string;
    /**
      * 部署组ID
      */
    GroupId: string;
    /**
      * 发布描述
      */
    ReleaseDesc?: string;
}
/**
 * 微服务API数组
 */
export interface MsApiArray {
    /**
      * API 请求路径
      */
    Path: string;
    /**
      * 请求方法
      */
    Method: string;
    /**
      * 方法描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * API状态 0:离线 1:在线
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * DescribeApiDetail请求参数结构体
 */
export interface DescribeApiDetailRequest {
    /**
      * 微服务id
      */
    MicroserviceId: string;
    /**
      * 请求路径
      */
    Path: string;
    /**
      * 请求方法
      */
    Method: string;
    /**
      * 包版本
      */
    PkgVersion: string;
    /**
      * 应用ID
      */
    ApplicationId: string;
}
/**
 * StopContainerGroup请求参数结构体
 */
export interface StopContainerGroupRequest {
    /**
      * 部署组ID
      */
    GroupId: string;
}
/**
 * UpdateHealthCheckSettings返回参数结构体
 */
export interface UpdateHealthCheckSettingsResponse {
    /**
      * 更新健康检查配置操作是否成功。
true：操作成功。
false：操作失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 微服务网关API限流规则
 */
export interface ApiRateLimitRule {
    /**
      * rule Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId: string;
    /**
      * API ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiId: string;
    /**
      * 限流名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleName: string;
    /**
      * 最大限流qps
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxQps: number;
    /**
      * 生效/禁用, enabled/disabled
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsableStatus: string;
    /**
      * 规则内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleContent: string;
    /**
      * Tsf Rule ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TsfRuleId: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedTime: string;
}
/**
 * API分组日使用统计对象数据点
 */
export interface GroupUseStatisticsEntity {
    /**
      * API 路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiPath: string;
    /**
      * 服务名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceName: string;
    /**
      * 统计值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * API ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiId: string;
}
/**
 * 添加实例到集群的结果
 */
export interface AddInstanceResult {
    /**
      * 添加集群失败的节点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedInstanceIds: Array<string>;
    /**
      * 添加集群成功的节点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccInstanceIds: Array<string>;
    /**
      * 添加集群超时的节点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeoutInstanceIds: Array<string>;
}
/**
 * DescribeFlowLastBatchState返回参数结构体
 */
export interface DescribeFlowLastBatchStateResponse {
    /**
      * 工作流批次最新状态
      */
    Result?: TaskFlowLastBatchState;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSimpleGroups请求参数结构体
 */
export interface DescribeSimpleGroupsRequest {
    /**
      * 部署组ID列表，不填写时查询全量
      */
    GroupIdList?: Array<string>;
    /**
      * 应用ID，不填写时查询全量
      */
    ApplicationId?: string;
    /**
      * 集群ID，不填写时查询全量
      */
    ClusterId?: string;
    /**
      * 命名空间ID，不填写时查询全量
      */
    NamespaceId?: string;
    /**
      * 每页条数
      */
    Limit?: number;
    /**
      * 起始偏移量
      */
    Offset?: number;
    /**
      * 部署组ID，不填写时查询全量
      */
    GroupId?: string;
    /**
      * 模糊查询，部署组名称，不填写时查询全量
      */
    SearchWord?: string;
    /**
      * 部署组类型，精确过滤字段，M：service mesh, P：原生应用， G：网关应用
      */
    AppMicroServiceType?: string;
}
/**
 * DescribeConfigReleases返回参数结构体
 */
export interface DescribeConfigReleasesResponse {
    /**
      * 分页的配置发布信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageConfigRelease;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * API分组信息
 */
export interface ApiGroupInfo {
    /**
      * Api Group Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * Api Group 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 分组上下文
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupContext: string;
    /**
      * 鉴权类型。 secret： 密钥鉴权； none:无鉴权
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthType: string;
    /**
      * 发布状态, drafted: 未发布。 released: 发布
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 分组创建时间 如:2019-06-20 15:51:28
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTime: string;
    /**
      * 分组更新时间 如:2019-06-20 15:51:28
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedTime: string;
    /**
      * api分组已绑定的网关部署组
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindedGatewayDeployGroups: Array<GatewayDeployGroup>;
    /**
      * api 个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiCount: number;
    /**
      * 访问group的ACL类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    AclMode: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 分组类型。 ms： 微服务分组； external:外部Api分组
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupType: string;
}
/**
 * ModifyMicroservice返回参数结构体
 */
export interface ModifyMicroserviceResponse {
    /**
      * 修改微服务详情是否成功。
true：操作成功。
false：操作失败。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateApiGroup请求参数结构体
 */
export interface CreateApiGroupRequest {
    /**
      * 分组名称, 不能包含中文
      */
    GroupName: string;
    /**
      * 分组上下文
      */
    GroupContext: string;
    /**
      * 鉴权类型。secret： 密钥鉴权； none:无鉴权
      */
    AuthType?: string;
    /**
      * 备注
      */
    Description?: string;
    /**
      * 分组类型,默认ms。 ms： 微服务分组； external:外部Api分组
      */
    GroupType?: string;
}
/**
 * DescribeDownloadInfo返回参数结构体
 */
export interface DescribeDownloadInfoResponse {
    /**
      * COS鉴权信息
      */
    Result?: CosDownloadInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 部署组实例列表
 */
export interface GroupPodResult {
    /**
      * 总记录数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<GroupPod>;
}
/**
 * DescribeApplication请求参数结构体
 */
export interface DescribeApplicationRequest {
    /**
      * 应用ID
      */
    ApplicationId: string;
}
/**
 * DeployContainerGroup返回参数结构体
 */
export interface DeployContainerGroupResponse {
    /**
      * 部署容器应用是否成功。
true：成功。
false：失败。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBasicResourceUsage请求参数结构体
 */
export declare type DescribeBasicResourceUsageRequest = null;
/**
 * DeleteMicroservice返回参数结构体
 */
export interface DeleteMicroserviceResponse {
    /**
      * 删除微服务是否成功。
true：操作成功。
false：操作失败。
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeReleasedConfig返回参数结构体
 */
export interface DescribeReleasedConfigResponse {
    /**
      * 已发布的配置内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TSF分页简单应用对象
 */
export interface TsfPageSimpleApplication {
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 简单应用列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<SimpleApplication>;
}
/**
 * 属性字段
 */
export interface PropertyField {
    /**
      * 属性名称
      */
    Name: string;
    /**
      * 属性类型
      */
    Type: string;
    /**
      * 属性描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
}
/**
 * DescribeApiDetail返回参数结构体
 */
export interface DescribeApiDetailResponse {
    /**
      * API 详情
      */
    Result?: ApiDetailResponse;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeGroups请求参数结构体
 */
export interface DescribeGroupsRequest {
    /**
      * 搜索字段
      */
    SearchWord?: string;
    /**
      * 应用ID
      */
    ApplicationId?: string;
    /**
      * 排序字段
      */
    OrderBy?: string;
    /**
      * 排序方式
      */
    OrderType?: number;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 分页个数
      */
    Limit?: number;
    /**
      * 命名空间ID
      */
    NamespaceId?: string;
    /**
      * 集群ID
      */
    ClusterId?: string;
    /**
      * 部署组资源类型列表
      */
    GroupResourceTypeList?: Array<string>;
    /**
      * 部署组状态过滤字段
      */
    Status?: string;
}
/**
 * 泳道规则标签
 */
export interface LaneRuleTag {
    /**
      * 标签ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagId: string;
    /**
      * 标签名
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagName: string;
    /**
      * 标签操作符
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagOperator: string;
    /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagValue: string;
    /**
      * 泳道规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LaneRuleId: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: number;
}
/**
 * 提供给前端控制按钮显示逻辑的字段
 */
export interface OperationInfoDetail {
    /**
      * 不显示的原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    DisabledReason: string;
    /**
      * 该按钮是否可点击
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enabled: boolean;
    /**
      * 是否显示该按钮
注意：此字段可能返回 null，表示取不到有效值。
      */
    Supported: boolean;
}
/**
 * CreateRepository请求参数结构体
 */
export interface CreateRepositoryRequest {
    /**
      * 仓库名称
      */
    RepositoryName: string;
    /**
      * 仓库类型（默认仓库：default，私有仓库：private）
      */
    RepositoryType: string;
    /**
      * 仓库所在桶名称
      */
    BucketName: string;
    /**
      * 仓库所在桶地域
      */
    BucketRegion: string;
    /**
      * 目录
      */
    Directory?: string;
    /**
      * 仓库描述
      */
    RepositoryDesc?: string;
}
/**
 * DeleteNamespace请求参数结构体
 */
export interface DeleteNamespaceRequest {
    /**
      * 命名空间ID
      */
    NamespaceId: string;
    /**
      * 集群ID
      */
    ClusterId?: string;
}
/**
 * BindApiGroup返回参数结构体
 */
export interface BindApiGroupResponse {
    /**
      * 返回结果，成功失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMicroservice返回参数结构体
 */
export interface DescribeMicroserviceResponse {
    /**
      * 微服务详情实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageMsInstance;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImageRepository返回参数结构体
 */
export interface DescribeImageRepositoryResponse {
    /**
      * 查询的权限数据对象
      */
    Result?: ImageRepositoryResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfigSummary返回参数结构体
 */
export interface DescribeConfigSummaryResponse {
    /**
      * 配置项分页对象
      */
    Result?: TsfPageConfig;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateContainGroup请求参数结构体
 */
export interface CreateContainGroupRequest {
    /**
      * 分组所属应用ID
      */
    ApplicationId: string;
    /**
      * 分组所属命名空间ID
      */
    NamespaceId: string;
    /**
      * 分组名称字段，长度1~60，字母或下划线开头，可包含字母数字下划线
      */
    GroupName: string;
    /**
      * 实例数量
      */
    InstanceNum: number;
    /**
      * 0:公网 1:集群内访问 2：NodePort
      */
    AccessType: number;
    /**
      * 数组对象，见下方定义
      */
    ProtocolPorts: Array<ProtocolPort>;
    /**
      * 集群ID
      */
    ClusterId: string;
    /**
      * 最大分配 CPU 核数，对应 K8S limit
      */
    CpuLimit?: string;
    /**
      * 最大分配内存 MiB 数，对应 K8S limit
      */
    MemLimit?: string;
    /**
      * 分组备注字段，长度应不大于200字符
      */
    GroupComment?: string;
    /**
      * 更新方式：0:快速更新 1:滚动更新
      */
    UpdateType?: number;
    /**
      * 滚动更新必填，更新间隔
      */
    UpdateIvl?: number;
    /**
      * 初始分配的 CPU 核数，对应 K8S request
      */
    CpuRequest?: string;
    /**
      * 初始分配的内存 MiB 数，对应 K8S request
      */
    MemRequest?: string;
    /**
      * 部署组资源类型
      */
    GroupResourceType?: string;
    /**
      * 子网ID
      */
    SubnetId?: string;
    /**
      * agent 容器分配的 CPU 核数，对应 K8S 的 request
      */
    AgentCpuRequest?: string;
    /**
      * agent 容器最大的 CPU 核数，对应 K8S 的 limit
      */
    AgentCpuLimit?: string;
    /**
      * agent 容器分配的内存 MiB 数，对应 K8S 的 request
      */
    AgentMemRequest?: string;
    /**
      * agent 容器最大的内存 MiB 数，对应 K8S 的 limit
      */
    AgentMemLimit?: string;
    /**
      * istioproxy 容器分配的 CPU 核数，对应 K8S 的 request
      */
    IstioCpuRequest?: string;
    /**
      * istioproxy 容器最大的 CPU 核数，对应 K8S 的 limit
      */
    IstioCpuLimit?: string;
    /**
      * istioproxy 容器分配的内存 MiB 数，对应 K8S 的 request
      */
    IstioMemRequest?: string;
    /**
      * istioproxy 容器最大的内存 MiB 数，对应 K8S 的 limit
      */
    IstioMemLimit?: string;
}
/**
 * DescribePublicConfigReleases返回参数结构体
 */
export interface DescribePublicConfigReleasesResponse {
    /**
      * 公共配置发布信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: TsfPageConfigRelease;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRepository请求参数结构体
 */
export interface DeleteRepositoryRequest {
    /**
      * 仓库ID
      */
    RepositoryId: string;
}
/**
 * DraftApiGroup返回参数结构体
 */
export interface DraftApiGroupResponse {
    /**
      * true: 成功, false: 失败
      */
    Result?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfigSummary请求参数结构体
 */
export interface DescribeConfigSummaryRequest {
    /**
      * 应用ID，不传入时查询全量
      */
    ApplicationId?: string;
    /**
      * 查询关键字，模糊查询：应用名称，配置项名称，不传入时查询全量
      */
    SearchWord?: string;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 每页条数，默认为20
      */
    Limit?: number;
}
/**
 * DeleteLane请求参数结构体
 */
export interface DeleteLaneRequest {
    /**
      * 泳道Idl
      */
    LaneId: string;
}
/**
 * ReleasePublicConfig请求参数结构体
 */
export interface ReleasePublicConfigRequest {
    /**
      * 配置ID
      */
    ConfigId: string;
    /**
      * 命名空间ID
      */
    NamespaceId: string;
    /**
      * 发布描述
      */
    ReleaseDesc?: string;
}
/**
 * 工作流图中的边
 */
export interface TaskFlowEdge {
    /**
      * 节点 ID
      */
    NodeId: string;
    /**
      * 子节点 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ChildNodeId: string;
    /**
      * 是否核心任务,Y/N
注意：此字段可能返回 null，表示取不到有效值。
      */
    CoreNode: string;
    /**
      * 边类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    EdgeType: string;
    /**
      * 任务节点类型
      */
    NodeType: string;
    /**
      * X轴坐标位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    PositionX: string;
    /**
      * Y轴坐标位置
注意：此字段可能返回 null，表示取不到有效值。
      */
    PositionY: string;
    /**
      * 图 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GraphId: string;
    /**
      * 工作流 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: string;
    /**
      * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeName: string;
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 任务历史ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskLogId: string;
}
/**
 * RedoTaskFlowBatch返回参数结构体
 */
export interface RedoTaskFlowBatchResponse {
    /**
      * 工作流批次历史 ID
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 泳道部署组
 */
export interface LaneGroup {
    /**
      * 部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 是否入口应用
注意：此字段可能返回 null，表示取不到有效值。
      */
    Entrance: boolean;
    /**
      * 泳道部署组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LaneGroupId?: string;
    /**
      * 泳道ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LaneId?: string;
    /**
      * 部署组名
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName?: string;
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId?: string;
    /**
      * 应用名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationName?: string;
    /**
      * 命名空间ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceId?: string;
    /**
      * 命名空间名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceName?: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: number;
    /**
      * 集群类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterType?: string;
}
/**
 * CreateGroup返回参数结构体
 */
export interface CreateGroupResponse {
    /**
      * groupId， null表示创建失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
