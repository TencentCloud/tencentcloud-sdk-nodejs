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
    /**
     * 按时间排序：creation_time；按名称排序：config_name
     */
    OrderBy?: string;
    /**
     * 升序传 0，降序传 1
     */
    OrderType?: number;
    /**
     * 无
     */
    ConfigTagList?: Array<string>;
    /**
     * 无
     */
    DisableProgramAuthCheck?: boolean;
    /**
     * 无
     */
    ConfigIdList?: Array<string>;
}
/**
 * 文件配置项列表
 */
export interface TsfPageFileConfig {
    /**
     * 总数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 文件配置数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<FileConfig>;
}
/**
 * ModifyPathRewrite请求参数结构体
 */
export interface ModifyPathRewriteRequest {
    /**
     * 路径重写规则ID
     */
    PathRewriteId: string;
    /**
     * 正则表达式
     */
    Regex?: string;
    /**
     * 替换的内容
     */
    Replacement?: string;
    /**
     * 是否屏蔽映射后路径，Y: 是 N: 否
     */
    Blocked?: string;
    /**
     * 规则顺序，越小优先级越高
     */
    Order?: number;
}
/**
 * DescribeUnitRulesV2返回参数结构体
 */
export interface DescribeUnitRulesV2Response {
    /**
     * 分页列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageUnitRuleV2;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ApiDetailResponse描述
 */
export interface ApiDetailResponse {
    /**
     * API 请求参数
     */
    Request?: Array<ApiRequestDescr>;
    /**
     * API 响应参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Response?: Array<ApiResponseDescr>;
    /**
     * API 复杂结构定义
     */
    Definitions?: Array<ApiDefinitionDescr>;
    /**
     * API 的 content type
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RequestContentType?: string;
    /**
     * API  能否调试
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CanRun?: boolean;
    /**
     * API 状态 0:离线 1:在线，默认0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * API 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
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
 * DeleteCluster返回参数结构体
 */
export interface DeleteClusterResponse {
    /**
     * 删除集群操作是否成功。
  true：操作成功。
  false：操作失败。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * cos临时账号信息
 */
export interface CosCredentials {
    /**
     * 会话Token
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SessionToken?: string;
    /**
     * 临时应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TmpAppId?: string;
    /**
     * 临时调用者身份ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TmpSecretId?: string;
    /**
     * 临时密钥
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TmpSecretKey?: string;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredTime?: number;
    /**
     * 所在域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Domain?: string;
}
/**
 * DeletePathRewrites返回参数结构体
 */
export interface DeletePathRewritesResponse {
    /**
     * true/false
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 路径重写翻页对象
 */
export interface PathRewritePage {
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * 路径重写规则列表
     */
    Content?: Array<PathRewrite>;
}
/**
 * DescribeUnitApiUseDetail请求参数结构体
 */
export interface DescribeUnitApiUseDetailRequest {
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
    /**
     * 网关实例ID
     */
    GatewayInstanceId: string;
    /**
     * 网关分组ID
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
     * 监控统计数据粒度
     */
    Period?: number;
}
/**
 * 集群详情
 */
export interface ClusterV2 {
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 集群描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterDesc?: string;
    /**
     * 集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
    /**
     * 集群所属私有网络ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 集群状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterStatus?: string;
    /**
     * 集群CIDR
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterCIDR?: string;
    /**
     * 集群总CPU，单位: 核
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterTotalCpu?: number;
    /**
     * 集群总内存，单位: G
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterTotalMem?: number;
    /**
     * 集群已使用CPU，单位: 核
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterUsedCpu?: number;
    /**
     * 集群已使用内存，单位: G
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterUsedMem?: number;
    /**
     * 集群机器实例数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCount?: number;
    /**
     * 集群运行中的机器实例数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunInstanceCount?: number;
    /**
     * 集群正常状态的机器实例数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalInstanceCount?: number;
    /**
     * 删除标记：true：可以删除；false：不可删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlag?: boolean;
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
     * 集群所属TSF地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsfRegionId?: string;
    /**
     * 集群所属TSF地域名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsfRegionName?: string;
    /**
     * 集群所属TSF可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsfZoneId?: string;
    /**
     * 集群所属TSF可用区名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsfZoneName?: string;
    /**
     * 集群不可删除的原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlagReason?: string;
    /**
     * 集群所属私有网络子网ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 集群剩余 cpu limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterLimitCpu?: string;
    /**
     * 集群剩余 memory limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterLimitMem?: string;
    /**
     * 运行服务实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunServiceInstanceCount?: number;
    /**
     * 给前端的按钮控制信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperationInfo?: OperationInfo;
    /**
     * 容器集群版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterVersion?: string;
    /**
     * 部署组总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupCount?: number;
    /**
     * 运行中部署组数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunGroupCount?: number;
    /**
     * 停止中部署组数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StopGroupCount?: number;
    /**
     * 异常部署组数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AbnormalGroupCount?: number;
    /**
     * 集群备注名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterRemarkName?: string;
    /**
     * api地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KuberneteApiServer?: string;
    /**
     * K : kubeconfig, S : service account
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KuberneteNativeType?: string;
    /**
     * native secret
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KuberneteNativeSecret?: string;
    /**
     * 是否开启cls日志功能
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableLogCollection?: boolean;
}
/**
 * ModifyApplication返回参数结构体
 */
export interface ModifyApplicationResponse {
    /**
     * true：操作成功
  false：操作失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReassociateBusinessLogConfig请求参数结构体
 */
export interface ReassociateBusinessLogConfigRequest {
    /**
     * 原关联日志配置ID
     */
    ConfigId: string;
    /**
     * 新关联日志配置ID
     */
    NewConfigId: string;
    /**
     * TSF应用ID
     */
    ApplicationId: string;
    /**
     * TSF部署组ID
     */
    GroupId: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateConfigTemplateWithDetailResp返回参数结构体
 */
export interface CreateConfigTemplateWithDetailRespResponse {
    /**
     * 创建成功，返回 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: ConfigTemplate;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeletePathRewrites请求参数结构体
 */
export interface DeletePathRewritesRequest {
    /**
     * 路径重写规则IDs
     */
    PathRewriteIds: Array<string>;
}
/**
 * DeleteLane返回参数结构体
 */
export interface DeleteLaneResponse {
    /**
     * 删除成功: true / 删除失败: false
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupRelease请求参数结构体
 */
export interface DescribeGroupReleaseRequest {
    /**
     * 部署组ID
     */
    GroupId: string;
}
/**
 * DescribeConfigTemplate返回参数结构体
 */
export interface DescribeConfigTemplateResponse {
    /**
     * 导入结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: ConfigTemplate;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeDeliveryConfig返回参数结构体
 */
export interface DescribeDeliveryConfigResponse {
    /**
     * 投递kafka配置
     */
    Result?: KafkaDeliveryConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 强制调度配置
 */
export interface ForceSchedule {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AffinityList?: Array<Affinity>;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AntiAffinityList?: Array<Affinity>;
}
/**
 * 简单应用
 */
export interface SimpleApplication {
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 应用微服务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceType?: string;
    /**
     * ApplicationDesc
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationDesc?: string;
    /**
     * ProgLang
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgLang?: string;
    /**
     * ApplicationResourceType
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationResourceType?: string;
    /**
     * CreateTime
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * UpdateTime
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * ApigatewayServiceId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApigatewayServiceId?: string;
    /**
     * ApplicationRuntimeType
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationRuntimeType?: string;
    /**
     * Apm业务系统id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AmpInstanceId?: string;
    /**
     * Apm业务系统Name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApmInstanceName?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    MaxValue?: string;
    /**
     * 最小值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinValue?: string;
    /**
     * 五分位值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FifthPositionValue?: string;
    /**
     * 九分位值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NinthPositionValue?: string;
}
/**
 * ModifyProgram请求参数结构体
 */
export interface ModifyProgramRequest {
    /**
     * 数据集ID
     */
    ProgramId: string;
    /**
     * 数据集名称，不传入时不更新
     */
    ProgramName?: string;
    /**
     * 数据集描述，不传入时不更新
     */
    ProgramDesc?: string;
    /**
     * 数据项列表，传入null不更新，传入空数组全量删除
     */
    ProgramItemList?: Array<ProgramItem>;
    /**
     * ProgramItemList是否是空数组
     */
    EmptyProgramItemList?: boolean;
}
/**
 * DescribePathRewrite返回参数结构体
 */
export interface DescribePathRewriteResponse {
    /**
     * 路径重写规则对象
     */
    Result?: PathRewrite;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeConfigs返回参数结构体
 */
export interface DescribeConfigsResponse {
    /**
     * 分页后的配置项列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: TsfPageConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ReleaseFileConfig请求参数结构体
 */
export interface ReleaseFileConfigRequest {
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
 * 标签
 */
export interface Tag {
    /**
     * 标签键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagKey?: string;
    /**
     * 标签值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagValue?: string;
}
/**
 * DescribeInvocationMetricDataDimension返回参数结构体
 */
export interface DescribeInvocationMetricDataDimensionResponse {
    /**
     * 维度
     */
    Result?: TsfPageDimension;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchStdoutLog返回参数结构体
 */
export interface SearchStdoutLogResponse {
    /**
     * 标准输出日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageStdoutLogV2;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateGatewayApi返回参数结构体
 */
export interface CreateGatewayApiResponse {
    /**
     * 是否成功
     */
    Result: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFileConfigs返回参数结构体
 */
export interface DescribeFileConfigsResponse {
    /**
     * 文件配置项列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: TsfPageFileConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusters请求参数结构体
 */
export interface DescribeClustersRequest {
    /**
     * 搜索词
     */
    SearchWord?: string;
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
     * 集群类型
     */
    ClusterType?: string;
    /**
     * idList
     */
    ClusterIdList?: Array<string>;
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
 * DeleteConfigTemplate返回参数结构体
 */
export interface DeleteConfigTemplateResponse {
    /**
     * true：删除成功；false：删除失败
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupBindedGateways返回参数结构体
 */
export interface DescribeGroupBindedGatewaysResponse {
    /**
     * 翻页结构体
     */
    Result: TsfPageGatewayDeployGroup;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeJvmMonitor请求参数结构体
 */
export interface DescribeJvmMonitorRequest {
    /**
     * 查询的实例Id
     */
    InstanceId: string;
    /**
     * 实例所属应用Id
     */
    ApplicationId: string;
    /**
     * 时间粒度,单位:秒
     */
    TimeGranularity: number;
    /**
     * 查询数据起始时间格式(yyyy-MM-dd HH:mm:ss)
     */
    From: string;
    /**
     * 查询数据结束时间格式(yyyy-MM-dd HH:mm:ss)
     */
    To: string;
    /**
     * 查询的监控图列表,以返回值属性名作为入参
     */
    RequiredPictures: Array<string>;
    /**
     * 扩展字段
     */
    Tag?: string;
}
/**
 * EnableLaneRule请求参数结构体
 */
export interface EnableLaneRuleRequest {
    /**
     * 泳道规则ID
     */
    RuleId: string;
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
    RepeatInterval?: number;
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
 * 任务定义
 */
export interface TaskRecord {
    /**
     * 任务名称
     */
    TaskName?: string;
    /**
     * 任务类型
     */
    TaskType?: string;
    /**
     * 执行类型
     */
    ExecuteType?: string;
    /**
     * 任务内容，长度限制65535字节
     */
    TaskContent?: string;
    /**
     * 分组ID
     */
    GroupId?: string;
    /**
     * 超时时间
     */
    TimeOut?: number;
    /**
     * 重试次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryCount?: number;
    /**
     * 重试间隔
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RetryInterval?: number;
    /**
     * 触发规则
     */
    TaskRule?: TaskRule;
    /**
     * 是否启用任务,ENABLED/DISABLED
     */
    TaskState?: string;
    /**
     * 任务ID
     */
    TaskId?: string;
    /**
     * 判断任务成功的操作符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessOperator?: string;
    /**
     * 判断任务成功的阈值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessRatio?: number;
    /**
     * 分片数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShardCount?: number;
    /**
     * 高级设置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdvanceSettings?: AdvanceSettings;
    /**
     * 分片参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShardArguments?: Array<ShardArgument>;
    /**
     * 所属工作流ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BelongFlowIds?: Array<string>;
    /**
     * 任务历史ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLogId?: string;
    /**
     * 触发类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerType?: string;
    /**
     * 任务参数，长度限制10000个字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskArgument?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeGroups返回参数结构体
 */
export interface DescribeGroupsResponse {
    /**
     * 虚拟机部署组分页信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageVmGroup;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUploadInfo返回参数结构体
 */
export interface ModifyUploadInfoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EnableLaneRule返回参数结构体
 */
export interface EnableLaneRuleResponse {
    /**
     * 操作状态。成功：true，失败：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 配置项列表
     */
    Content?: Array<Config>;
}
/**
 * CreateProgram请求参数结构体
 */
export interface CreateProgramRequest {
    /**
     * 数据集名称
     */
    ProgramName: string;
    /**
     * 数据集描述
     */
    ProgramDesc?: string;
    /**
     * 数据项列表，传入null或空数组时不新增
     */
    ProgramItemList?: Array<ProgramItem>;
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
 * DisableLaneRule返回参数结构体
 */
export interface DisableLaneRuleResponse {
    /**
     * 操作状态。成功：true，失败：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 翻页查询的任务记录返回
 */
export interface TaskRecordPage {
    /**
     * 总数量
     */
    TotalCount?: number;
    /**
     * 任务记录列表
     */
    Content?: Array<TaskRecord>;
}
/**
 * AssociateBusinessLogConfig请求参数结构体
 */
export interface AssociateBusinessLogConfigRequest {
    /**
     * TSF分组ID
     */
    GroupId: string;
    /**
     * 日志配置项ID列表
     */
    ConfigIdList?: Array<string>;
}
/**
 * DescribeJvmMonitor返回参数结构体
 */
export interface DescribeJvmMonitorResponse {
    /**
     * Java实例jvm监控数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: JvmMonitorData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeliveryConfig请求参数结构体
 */
export interface DescribeDeliveryConfigRequest {
    /**
     * 投递配置id
     */
    ConfigId: string;
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
 * DescribeMicroservices返回参数结构体
 */
export interface DescribeMicroservicesResponse {
    /**
     * 微服务分页列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageMicroservice;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageApiGroupInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * ReleaseConfig返回参数结构体
 */
export interface ReleaseConfigResponse {
    /**
     * true：发布成功；false：发布失败
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnitRule返回参数结构体
 */
export interface DescribeUnitRuleResponse {
    /**
     * 单元化规则对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: UnitRule;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteImageTags请求参数结构体
 */
export interface DeleteImageTagsRequest {
    /**
     * 镜像版本数组
     */
    ImageTags: Array<DeleteImageTag>;
    /**
     * 企业: tcr ；个人: personal或者不填
     */
    RepoType?: string;
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
 * 监控数据散点图
 */
export interface InvocationMetricScatterPlot {
    /**
     * 时间轴截止时间，GMT，精确到毫秒
     */
    EndTime: number;
    /**
     * 时间粒度
     */
    StartTime: number;
    /**
     * 时间轴开始时间，GMT，精确到毫秒
     */
    Period: number;
    /**
     * 多值数据点集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataPoints: Array<MultiValueDataPoints>;
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
 * DisassociateBusinessLogConfig返回参数结构体
 */
export interface DisassociateBusinessLogConfigResponse {
    /**
     * 操作结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    RuleId?: string;
    /**
     * 泳道规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
    /**
     * 优先级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Priority?: number;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 泳道规则标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleTagList?: Array<LaneRuleTag>;
    /**
     * 泳道规则标签关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleTagRelationship?: string;
    /**
     * 泳道ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LaneId?: string;
    /**
     * 开启状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enable?: boolean;
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
}
/**
 * 微服务实例信息
 */
export interface MsInstance {
    /**
     * 机器实例ID信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 机器实例名称信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 服务运行的端口号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: string;
    /**
     * 机器实例内网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LanIp?: string;
    /**
     * 机器实例外网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WanIp?: string;
    /**
     * 机器可用状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceAvailableStatus?: string;
    /**
     * 服务运行状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceInstanceStatus?: string;
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
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
     * 部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 机器TSF可用状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceStatus?: string;
    /**
     * 健康检查URL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckUrl?: string;
    /**
     * 集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
    /**
     * 应用程序包版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationPackageVersion?: string;
    /**
     * 应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 服务状态，passing 在线，critical 离线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceStatus?: string;
    /**
     * 注册时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistrationTime?: number;
    /**
     * 上次心跳时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastHeartbeatTime?: number;
    /**
     * 实例注册id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistrationId?: string;
    /**
     * 屏蔽状态，hidden 为屏蔽，unhidden 为未屏蔽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HiddenStatus?: string;
    /**
     * json格式的 meta 信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaJson?: string;
}
/**
 * 微服务网关插件绑定对象
 */
export interface GatewayPluginBoundParam {
    /**
     * 插件id
     */
    PluginId: string;
    /**
     * 插件绑定到的对象类型:group/api/all
     */
    ScopeType: string;
    /**
     * 插件绑定到的对象主键值，例如分组的ID/API的ID
     */
    ScopeValue: string;
    /**
     * 创建关联的服务id，关联envoy网关时使用
     */
    MicroserviceId?: string;
    /**
     * 网关id
     */
    GatewayInstanceId?: string;
}
/**
 * ModifyNamespace返回参数结构体
 */
export interface ModifyNamespaceResponse {
    /**
     * Result
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * AddInstances返回参数结构体
 */
export interface AddInstancesResponse {
    /**
     * 添加云主机是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeRepository返回参数结构体
 */
export interface DescribeRepositoryResponse {
    /**
     * 查询的仓库信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: RepositoryInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReleaseConfigWithDetailResp返回参数结构体
 */
export interface ReleaseConfigWithDetailRespResponse {
    /**
     * 配置项发布 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: ConfigRelease;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    InstanceId?: string;
    /**
     * 机器名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 机器内网地址IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LanIp?: string;
    /**
     * 机器外网地址IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WanIp?: string;
    /**
     * 机器描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceDesc?: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * VM的状态 虚机：虚机的状态 容器：Pod所在虚机的状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceStatus?: string;
    /**
     * VM的可使用状态 虚机：虚机是否能够作为资源使用 容器：虚机是否能够作为资源部署POD
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceAvailableStatus?: string;
    /**
     * 服务下的服务实例的状态 虚机：应用是否可用 + Agent状态 容器：Pod状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceInstanceStatus?: string;
    /**
     * 标识此instance是否已添加在tsf中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CountInTsf?: number;
    /**
     * 机器所属部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 机器所属应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 机器所属应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 机器实例在CVM的创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCreatedTime?: string;
    /**
     * 机器实例在CVM的过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceExpiredTime?: string;
    /**
     * 机器实例在CVM的计费模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceChargeType?: string;
    /**
     * 机器实例总CPU信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTotalCpu?: number;
    /**
     * 机器实例总内存信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTotalMem?: number;
    /**
     * 机器实例使用的CPU信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceUsedCpu?: number;
    /**
     * 机器实例使用的内存信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceUsedMem?: number;
    /**
     * 机器实例Limit CPU信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceLimitCpu?: number;
    /**
     * 机器实例Limit 内存信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceLimitMem?: number;
    /**
     * 包版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstancePkgVersion?: string;
    /**
     * 集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
    /**
     * 机器实例业务状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RestrictState?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 实例执行状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperationState?: number;
    /**
     * NamespaceId Ns ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceId?: string;
    /**
     * InstanceZoneId 可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceZoneId?: string;
    /**
     * InstanceImportMode 导入模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceImportMode?: string;
    /**
     * ApplicationType应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * ApplicationResourceType 资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationResourceType?: string;
    /**
     * sidecar状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceSidecarStatus?: string;
    /**
     * 部署组名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * NS名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceName?: string;
    /**
     * 健康检查原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reason?: string;
    /**
     * agent版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentVersion?: string;
    /**
     * 容器母机实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeInstanceId?: string;
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
     * 是否开启健康检查
     */
    EnableHealthCheck?: boolean;
    /**
     * 健康检查配置
     */
    HealthCheckSettings?: HealthCheckSettings;
}
/**
 * ScalableRule值
 */
export interface ScalableRule {
    /**
     * RuleId值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleId?: string;
    /**
     * Name值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * ExpandVmCountLimit值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpandVmCountLimit?: number;
    /**
     * ShrinkVmCountLimit值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShrinkVmCountLimit?: number;
    /**
     * GroupCount值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupCount?: number;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Desc?: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 是否关闭指标伸缩, 默认0, 0:打开指标伸缩 1:关闭指标伸缩
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisableMetricAS?: number;
    /**
     * 开启定时伸缩规则, 默认0, 0:关闭定时伸缩 1:开启定时伸缩
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableCronAS?: number;
}
/**
 * EnableUnitRule请求参数结构体
 */
export interface EnableUnitRuleRequest {
    /**
     * 规则ID
     */
    Id: string;
}
/**
 * CreateCluster返回参数结构体
 */
export interface CreateClusterResponse {
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateFileConfigWithDetailResp请求参数结构体
 */
export interface CreateFileConfigWithDetailRespRequest {
    /**
     * 配置项名称
     */
    ConfigName: string;
    /**
     * 配置项版本
     */
    ConfigVersion: string;
    /**
     * 配置项文件名
     */
    ConfigFileName: string;
    /**
     * 配置项文件内容（原始内容编码需要 utf-8 格式，如果 ConfigFileCode 为 gbk，后台会进行转换）
     */
    ConfigFileValue: string;
    /**
     * 配置项关联应用ID
     */
    ApplicationId: string;
    /**
     * 发布路径
     */
    ConfigFilePath: string;
    /**
     * 配置项版本描述
     */
    ConfigVersionDesc?: string;
    /**
     * 配置项文件编码，utf-8 或 gbk。注：如果选择 gbk，需要新版本 tsf-consul-template （公有云虚拟机需要使用 1.32 tsf-agent，容器需要从文档中获取最新的 tsf-consul-template-docker.tar.gz）的支持
     */
    ConfigFileCode?: string;
    /**
     * 后置命令
     */
    ConfigPostCmd?: string;
    /**
     * Base64编码的配置项
     */
    EncodeWithBase64?: boolean;
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
}
/**
 * 部署javaagent的类型、版本信息
 */
export interface AgentProfile {
    /**
     * Agent类型
     */
    AgentType?: string;
    /**
     * Agent版本号
     */
    AgentVersion?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    PkgId?: string;
    /**
     * 桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * 目标地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 存储路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * 鉴权信息
     */
    Credentials?: CosCredentials;
}
/**
 * DescribeLanes返回参数结构体
 */
export interface DescribeLanesResponse {
    /**
     * 泳道列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: LaneInfos;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 是否开启高可用，1 表示开启，0 表示不开启
     */
    IsHaEnable?: string;
    /**
     * 需要绑定的数据集ID
     */
    ProgramId?: string;
    /**
     * 需要绑定的数据集ID
     */
    ProgramIdList?: Array<string>;
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
 * CreatePublicConfigWithDetailResp请求参数结构体
 */
export interface CreatePublicConfigWithDetailRespRequest {
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
}
/**
 * DescribeResourceTaskStatus返回参数结构体
 */
export interface DescribeResourceTaskStatusResponse {
    /**
     * 资源任务执行状态结果
     */
    Result?: ResourceTaskStatusResult;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 仓库名,含命名空间,如tsf/ngin
     */
    RepoName?: string;
    /**
     * 镜像服务器地址
     */
    Server?: string;
    /**
     * 列表信息
     */
    Content?: Array<ImageTag>;
}
/**
 * 仓库信息
 */
export interface RepositoryInfo {
    /**
     * 仓库ID
     */
    RepositoryId?: string;
    /**
     * 仓库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepositoryName?: string;
    /**
     * 仓库类型（默认仓库：default，私有仓库：private）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepositoryType?: string;
    /**
     * 仓库描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepositoryDesc?: string;
    /**
     * 仓库是否正在被使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUsed?: boolean;
    /**
     * 仓库创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 仓库桶名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BucketName?: string;
    /**
     * 仓库桶所在地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BucketRegion?: string;
    /**
     * 仓库目录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Directory?: string;
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
    Result: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeliveryConfigs返回参数结构体
 */
export interface DescribeDeliveryConfigsResponse {
    /**
     * 投递项关联部署组信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: DeliveryConfigBindGroups;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * tcr仓库信息
 */
export interface TcrRepoInfo {
    /**
     * 地域（填数字）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryId?: string;
    /**
     * 实例名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegistryName?: string;
    /**
     * 命名空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Namespace?: string;
    /**
     * 仓库名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoName?: string;
}
/**
 * UpdateApiTimeouts返回参数结构体
 */
export interface UpdateApiTimeoutsResponse {
    /**
     * 是否成功
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 维度分页
 */
export interface TsfPageDimension {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 维度
     */
    Content?: Array<string>;
}
/**
 * 微服务网关单元化规则
 */
export interface UnitRule {
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 网关实体ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayInstanceId?: string;
    /**
     * 规则描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 使用状态：enabled/disabled
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 规则项列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitRuleItemList?: Array<UnitRuleItem>;
    /**
     * CreatedTime
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * UpdatedTime
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ConfigMap可选项
 */
export interface ConfigMapOption {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Mode?: string;
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
 * DescribeContainerGroupDeployInfo返回参数结构体
 */
export interface DescribeContainerGroupDeployInfoResponse {
    /**
     * 获取部署组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: ContainerGroupDeploy;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeOverviewInvocation请求参数结构体
 */
export interface DescribeOverviewInvocationRequest {
    /**
     * 命名空间ID
     */
    NamespaceId?: string;
    /**
     * 监控统计类型，可选值：SumReqAmount、AvgFailureRate、AvgTimeCost，分别对应请求量、请求错误率、平均响应耗时
     */
    Type?: string;
    /**
     * 监控统计数据粒度，可选值：60、3600、86400，分别对应1分钟、1小时、1天
     */
    Period?: number;
    /**
     * 查询开始时间，默认为当天的 00:00:00
     */
    StartTime?: string;
    /**
     * 查询结束时间，默认为当前时间
     */
    EndTime?: string;
}
/**
 * 任务最近一次执行状态
 */
export interface TaskLastExecuteStatus {
    /**
     * 批次ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BatchId?: string;
    /**
     * 运行状态，RUNNING/SUCCESS/FAIL/HALF/TERMINATED
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State?: string;
    /**
     * 批次历史ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BatchLogId?: string;
}
/**
 * DescribePrograms请求参数结构体
 */
export interface DescribeProgramsRequest {
    /**
     * 模糊查询数据集ID，数据集名称，不传入时查询全量
     */
    SearchWord?: string;
    /**
     * 每页数量
     */
    Limit?: number;
    /**
     * 起始偏移量
     */
    Offset?: number;
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
 * 镜像仓库
 */
export interface ImageRepository {
    /**
     * 仓库名,含命名空间,如tsf/nginx
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reponame?: string;
    /**
     * 仓库类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Repotype?: string;
    /**
     * 镜像版本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagCount?: number;
    /**
     * 是否公共,1:公有,0:私有
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPublic?: number;
    /**
     * 是否被用户收藏。true：是，false：否
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsUserFavor?: boolean;
    /**
     * 是否是腾讯云官方仓库。 是否是腾讯云官方仓库。true：是，false：否
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsQcloudOfficial?: boolean;
    /**
     * 被所有用户收藏次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FavorCount?: number;
    /**
     * 拉取次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PullCount?: number;
    /**
     * 描述内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * TcrRepoInfo值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TcrRepoInfo?: TcrRepoInfo;
    /**
     * TcrBindingId值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TcrBindingId?: number;
    /**
     * applicationid值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * ApplicationName值（废弃）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: ScalableRule;
    /**
     * ApplicationName值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationNameReal?: string;
    /**
     * 是否公共,1:公有,0:私有
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Public?: number;
    /**
     * 创建方式：manual | automatic
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateMode?: string;
    /**
     * 仓库名，等同reponame字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoName?: string;
}
/**
 * DescribeOverviewInvocation返回参数结构体
 */
export interface DescribeOverviewInvocationResponse {
    /**
     * 监控统计数据列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: Array<MetricDataPoint>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 通用选项
 */
export interface CommonOption {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelName?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LabelValue?: string;
}
/**
 * CreatePublicConfig返回参数结构体
 */
export interface CreatePublicConfigResponse {
    /**
     * true：创建成功；false：创建失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 泳道规则列表
     */
    Content?: Array<LaneRule>;
}
/**
 * 列表中部署组分页信息
 */
export interface TsfPageVmGroup {
    /**
     * 虚拟机部署组总数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 虚拟机部署组列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<VmGroupSimple>;
}
/**
 * CreateConfig返回参数结构体
 */
export interface CreateConfigResponse {
    /**
     * true：创建成功；false：创建失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RevokeFileConfig请求参数结构体
 */
export interface RevokeFileConfigRequest {
    /**
     * 配置项发布ID
     */
    ConfigReleaseId: string;
}
/**
 * DescribeCreateGatewayApiStatus请求参数结构体
 */
export interface DescribeCreateGatewayApiStatusRequest {
    /**
     * 所属分组ID
     */
    GroupId?: string;
    /**
     * 微服务ID
     */
    MicroserviceId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * AssociateConfigWithGroup返回参数结构体
 */
export interface AssociateConfigWithGroupResponse {
    /**
     * 绑定是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisassociateKafkaConfig请求参数结构体
 */
export interface DisassociateKafkaConfigRequest {
    /**
     * 配置项id
     */
    ConfigId: string;
    /**
     * 部署组id
     */
    GroupIds?: Array<string>;
}
/**
 * 配置中心
 */
export interface TsfConfigCenter {
    /**
     * 配置中心类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigType?: string;
    /**
     * 配置中心实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigCenterInstanceId?: string;
    /**
     * 配置中心实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigCenterInstanceName?: string;
    /**
     * 实例地域id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: string;
    /**
     * 命名空间id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceId?: string;
    /**
     * 当前版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentVersion?: string;
    /**
     * 需要升级的版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetVersion?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ShardArguments?: Array<ShardArgument>;
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
}
/**
 * DeleteUnitNamespaces返回参数结构体
 */
export interface DeleteUnitNamespacesResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeStatistics返回参数结构体
 */
export interface DescribeStatisticsResponse {
    /**
     * 查询服务统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: ServiceStatisticsResults;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    TotalCount?: number;
    /**
     * 机器实例列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<Instance>;
}
/**
 * ModifyLane返回参数结构体
 */
export interface ModifyLaneResponse {
    /**
     * 更新成功: true / 更新失败: false
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * @deprecated
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
     * 业务容器分配的 CPU 核数，对应 K8S 的 request，默认0.25
     */
    CpuRequest?: string;
    /**
     * 业务容器分配的内存 MiB 数，对应 K8S 的 request，默认640 MiB
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
     * 节点调度策略。若不指定该参数，则默认不使用节点调度策略。
     */
    SchedulingStrategy?: SchedulingStrategy;
    /**
     * 是否进行增量部署，默认为false，全量更新
     */
    IncrementalDeployment?: boolean;
    /**
     * tcr或者不填
     */
    RepoType?: string;
    /**
     * 数据卷信息-废弃，请用VolumeInfoList参数
     */
    VolumeInfos?: VolumeInfo;
    /**
     * 数据卷挂载点信息-废弃，请用VolumeMountInfoList参数
     */
    VolumeMountInfos?: VolumeMountInfo;
    /**
     * 数据卷信息，list
     */
    VolumeInfoList?: Array<VolumeInfo>;
    /**
     * 数据卷挂载点信息，list
     */
    VolumeMountInfoList?: Array<VolumeMountInfo>;
    /**
     * 是否清除数据卷信息，默认false
     */
    VolumeClean?: boolean;
    /**
     * javaagent信息: SERVICE_AGENT/OT_AGENT
     */
    AgentProfileList?: Array<AgentProfile>;
    /**
     * 预热配置信息
     */
    WarmupSetting?: WarmupSetting;
}
/**
 * CreateApiRateLimitRuleWithDetailResp请求参数结构体
 */
export interface CreateApiRateLimitRuleWithDetailRespRequest {
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
 * CreateUnitRuleWithDetailResp请求参数结构体
 */
export interface CreateUnitRuleWithDetailRespRequest {
    /**
     * 网关实体ID
     */
    GatewayInstanceId: string;
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 规则描述
     */
    Description?: string;
    /**
     * 规则项列表
     */
    UnitRuleItemList?: Array<UnitRuleItem>;
}
/**
 * DescribeContainerGroupAttribute请求参数结构体
 */
export interface DescribeContainerGroupAttributeRequest {
    /**
     * 部署组ID
     */
    GroupId: string;
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
    /**
     * 无
     */
    DisableProgramAuthCheck?: boolean;
    /**
     * 查询指定微服务类型的应用列表
     */
    MicroserviceTypeList?: Array<string>;
}
/**
 * DescribeDeliveryConfigByGroupId返回参数结构体
 */
export interface DescribeDeliveryConfigByGroupIdResponse {
    /**
     * 投递kafka配置项
     */
    Result?: SimpleKafkaDeliveryConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 部署组备注
     */
    Alias?: string;
}
/**
 * OperateApplicationTcrBinding请求参数结构体
 */
export interface OperateApplicationTcrBindingRequest {
    /**
     * bind 或 unbind
     */
    Command?: string;
    /**
     * 应用id
     */
    ApplicationId?: string;
    /**
     * TcrRepoInfo值
     */
    TcrRepoInfo?: TcrRepoInfo;
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
    Server?: string;
    /**
     * 镜像名，如/tsf/nginx
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoName?: string;
    /**
     * 镜像版本名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagName?: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
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
     * 初始分配的 CPU 核数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuRequest?: string;
    /**
     * 最大分配的 CPU 核数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuLimit?: string;
    /**
     * 初始分配的内存 MiB 数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemRequest?: string;
    /**
     * 最大分配的内存 MiB 数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemLimit?: string;
    /**
     * 部署组备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: string;
    /**
     * KubeInjectEnable值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KubeInjectEnable?: boolean;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: string;
}
/**
 * CreateConfigWithDetailResp返回参数结构体
 */
export interface CreateConfigWithDetailRespResponse {
    /**
     * 配置项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: Config;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupBusinessLogConfigs返回参数结构体
 */
export interface DescribeGroupBusinessLogConfigsResponse {
    /**
     * 业务日志配置列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageBusinessLogConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 部署组列表（应用下钻）
 */
export interface ContainGroupResult {
    /**
     * 部署组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<ContainGroup>;
    /**
     * 总记录数
     */
    TotalCount?: number;
}
/**
 * UpdateUnitRule请求参数结构体
 */
export interface UpdateUnitRuleRequest {
    /**
     * 规则ID
     */
    Id: string;
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 规则描述
     */
    Description?: string;
    /**
     * 规则项列表
     */
    UnitRuleItemList?: Array<UnitRuleItem>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 容器导入实例高级设置
 */
export interface InstanceAdvancedSettings {
    /**
     * 数据盘挂载点, 默认不挂载数据盘. 已格式化的 ext3，ext4，xfs 文件系统的数据盘将直接挂载，其他文件系统或未格式化的数据盘将自动格式化为ext4 并挂载，请注意备份数据! 无数据盘或有多块数据盘的云主机此设置不生效。
  注意，注意，多盘场景请使用下方的DataDisks数据结构，设置对应的云盘类型、云盘大小、挂载路径、是否格式化等信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MountTarget: string;
    /**
     * dockerd --graph 指定值, 默认为 /var/lib/docker
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DockerGraphPath: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 业务日志
 */
export interface BusinessLogV2 {
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 日志内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: string;
    /**
     * 日志时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Timestamp?: number;
    /**
     * 实例IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceIp?: string;
    /**
     * 日志ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogId?: string;
    /**
     * 部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 可选，根据部署组ID进行过滤
     */
    GroupIds?: Array<string>;
    /**
     * 过滤条件。多个 filter 之间是与关系，单个 filter 多个 value 之间是或关系。filter name 取值有：id（实例id）、name（实例名）、lan-ip（内网ip）、node-ip（所在节点ip）
     */
    Filters?: Array<Filter>;
}
/**
 * Tsf分页集群对象
 */
export interface TsfPageCluster {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 集群列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<Cluster>;
}
/**
 * InstanceEnrichedInfo列表结构
 */
export interface InstanceEnrichedInfoPage {
    /**
     * 总数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<InstanceEnrichedInfo>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文件配置项发布信息
 */
export interface FileConfigRelease {
    /**
     * 配置项发布ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigReleaseId?: string;
    /**
     * 配置项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigId?: string;
    /**
     * 配置项名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigName?: string;
    /**
     * 配置项版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigVersion?: string;
    /**
     * 发布描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleaseDesc?: string;
    /**
     * 发布时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleaseTime?: string;
    /**
     * 部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
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
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 配置中心发布详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigCenters?: Array<TsfConfigCenter>;
}
/**
 * DescribeInvocationMetricDataPoint请求参数结构体
 */
export interface DescribeInvocationMetricDataPointRequest {
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 维度，并且 维度 key value 不能为空
     */
    MetricDimensionValues: Array<MetricDimensionValue>;
    /**
     * 指标，并且 key, value 不能为空
     */
    Metrics: Array<Metric>;
    /**
     * 调用视角。可选值：SERVER, CLIENT。默认为SERVER
     */
    Kind?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    InvocationCountOfDay?: string;
    /**
     * 总调用数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvocationCount?: string;
    /**
     * 近24小时调用错误数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorCountOfDay?: string;
    /**
     * 总调用错误数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorCount?: string;
    /**
     * 近24小时调用成功率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessRatioOfDay?: string;
    /**
     * 总调用成功率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccessRatio?: string;
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
     * 部署组资源类型；DEF 表示默认资源类型；GW 表示网关资源类型
     */
    GroupResourceType?: string;
    /**
     * 部署组备注
     */
    Alias?: string;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
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
     * 是否只解绑，不删除容器集群，默认不传则删除容器集群。
     */
    Unbind?: boolean;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 服务统计结果
 */
export interface ServiceStatisticsResult {
    /**
     * 请求模板路径:type为接口时返回，服务时不返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * 请求方法:type为接口时返回，服务时不返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Method?: string;
    /**
     * 微服务Id
     */
    MicroserviceId?: string;
    /**
     * 微服务名称
     */
    MicroserviceName?: string;
    /**
     * 请求数
     */
    RequestCount?: number;
    /**
     * 请求错误率，不带百分号
     */
    ErrorRate?: number;
    /**
     * 平均响应耗时ms
     */
    AvgTimeConsuming?: number;
    /**
     * 响应耗时曲线
     */
    MetricDataCurves?: Array<MetricDataCurve>;
    /**
     * 实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 实例name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 部署组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 部署组name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 部署组类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
    /**
     * 部署组是否存在
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupExist?: number;
    /**
     * 实例是否存在，仅限cvm
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceExist?: number;
    /**
     * 应用id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 微服务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceType?: string;
    /**
     * cpu使用率
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuPercent?: number;
    /**
     * 已用堆大小,单位KB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeapUsed?: number;
    /**
     * 数据库
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbName?: string;
    /**
     * Script值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Script?: string;
    /**
     * 数据库类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbType?: string;
    /**
     * Apdex值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Apdex?: number;
    /**
     * Qps值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Qps?: number;
    /**
     * 实例在线数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceOnlineCount?: number;
    /**
     * 实例总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTotalCount?: number;
    /**
     * normal/error
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * normal/warn/error
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorRateLevel?: string;
    /**
     * normal/warn/error
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvgTimeConsumingLevel?: string;
    /**
     * normal/warn/error
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApdexLevel?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePathRewritesWithDetailResp返回参数结构体
 */
export interface CreatePathRewritesWithDetailRespResponse {
    /**
     * 返回路径重写规则 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 服务端口
 */
export interface Ports {
    /**
     * 服务端口
     */
    TargetPort: number;
    /**
     * 端口协议
     */
    Protocol: string;
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
 * DescribeGroupGateways返回参数结构体
 */
export interface DescribeGroupGatewaysResponse {
    /**
     * API分组信息
     */
    Result?: TsfPageApiGroupInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 日志投递kafka配置描述的缩简版
 */
export interface SimpleKafkaDeliveryConfig {
    /**
     * 配置项id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigId?: string;
    /**
     * 配置项名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigName?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ApplicationId?: string;
    /**
     * 部署组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 微服务实例列表内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<MsInstance>;
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
 * CreatePublicConfigWithDetailResp返回参数结构体
 */
export interface CreatePublicConfigWithDetailRespResponse {
    /**
     * 公共配置项 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: Config;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateConfigWithDetailResp请求参数结构体
 */
export interface CreateConfigWithDetailRespRequest {
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeContainerEvents请求参数结构体
 */
export interface DescribeContainerEventsRequest {
    /**
     * event 的资源类型, group 或者 instance
     */
    ResourceType: string;
    /**
     * event 的资源 id
     */
    ResourceId: string;
    /**
     * 偏移量，取值从0开始
     */
    Offset?: number;
    /**
     * 分页个数，默认为20， 取值应为1~50
     */
    Limit?: number;
    /**
     * 当类型是 instance 时需要
     */
    GroupId?: string;
    /**
     * event的资源kind
     */
    Kind?: string;
    /**
     * event 的type
     */
    Type?: string;
    /**
     * 资源名称
     */
    ResourceName?: string;
    /**
     * 关键词查询
     */
    SearchWord?: string;
}
/**
 * DisableUnitRule请求参数结构体
 */
export interface DisableUnitRuleRequest {
    /**
     * 规则ID
     */
    Id: string;
}
/**
 * 命名空间
 */
export interface Namespace {
    /**
     * 命名空间ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceId?: string;
    /**
     * 命名空间编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceCode?: string;
    /**
     * 命名空间名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceName?: string;
    /**
     * 命名空间描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceDesc?: string;
    /**
     * 默认命名空间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsDefault?: string;
    /**
     * 命名空间状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceStatus?: string;
    /**
     * 删除标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlag?: boolean;
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
     * 集群数组，仅携带集群ID，集群名称，集群类型等基础信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterList?: Array<Cluster>;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceResourceType?: string;
    /**
     * 命名空间类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceType?: string;
    /**
     * 是否开启高可用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsHaEnable?: string;
    /**
     * KubeInjectEnable值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KubeInjectEnable?: boolean;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 环境变量值
     */
    Value?: string;
    /**
     * k8s ValueFrom
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueFrom?: ValueFrom;
}
/**
 * ModifyCluster请求参数结构体
 */
export interface ModifyClusterRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * 集群名称
     */
    ClusterName?: string;
    /**
     * 集群描述信息
     */
    ClusterDesc?: string;
    /**
     * 备注名
     */
    ClusterRemarkName?: string;
    /**
     * 是否开启cls日志功能
     */
    EnableLogCollection?: boolean;
    /**
     * 是否修复cls日志功能
     */
    RepairLog?: boolean;
}
/**
 * tsf-privilege 模块，资源
 */
export interface Resource {
    /**
     * 资源ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 资源编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceCode?: string;
    /**
     * 资源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 资源所属产品编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceCode?: string;
    /**
     * 选取资源使用的Action
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceAction?: string;
    /**
     * 资源数据查询的ID字段名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdField?: string;
    /**
     * 资源数据查询的名称字段名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NameField?: string;
    /**
     * 资源数据查询的ID过滤字段名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelectIdsField?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTime?: number;
    /**
     * 最后更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdateTime?: number;
    /**
     * 删除标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlag?: boolean;
    /**
     * 资源描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceDesc?: string;
    /**
     * 是否可以选择全部
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CanSelectAll?: boolean;
    /**
     * 资源数据查询的模糊查询字段名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SearchWordField?: string;
    /**
     * 排序
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Index?: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * kafka投递的topic和path的信息
 */
export interface DeliveryKafkaInfo {
    /**
     * 投递kafka的topic
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Topic?: string;
    /**
     * 采集日志的path
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: Array<string>;
    /**
     * default，默认换行符分行
  time，按时间分行
  custom, 选了custom那么CustomRule就要填入具体的自定义值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LineRule?: string;
    /**
     * 自定义的分行值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomRule?: string;
}
/**
 * 单元化API使用详情统计对象列表
 */
export interface GroupUnitApiDailyUseStatistics {
    /**
     * 命名空间ID
     */
    NamespaceId: string;
    /**
     * 命名空间名称
     */
    NamespaceName: string;
    /**
     * 该API在该命名空间下的总调用次数
     */
    SumReqAmount: string;
    /**
     * 该API在该命名空间下的平均错误率
     */
    AvgFailureRate: string;
    /**
     * 该API在该命名空间下的平均响应时间
     */
    AvgTimeCost: string;
    /**
     * 监控数据曲线点位图Map集合
     */
    MetricDataPointMap: MetricDataPointMap;
    /**
     * 状态码分布详情
     */
    TopStatusCode: Array<ApiUseStatisticsEntity>;
    /**
     * 耗时分布详情
     */
    TopTimeCost: Array<ApiUseStatisticsEntity>;
    /**
     * 分位值对象
     */
    Quantile: QuantileEntity;
}
/**
 * DescribeFileConfigReleases返回参数结构体
 */
export interface DescribeFileConfigReleasesResponse {
    /**
     * 配置项发布信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageFileConfigRelease;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisableUnitRoute返回参数结构体
 */
export interface DisableUnitRouteResponse {
    /**
     * 返回结果，成功失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExecuteTask请求参数结构体
 */
export interface ExecuteTaskRequest {
    /**
     * 任务 ID
     */
    TaskId: string;
}
/**
 * DescribeGroupBusinessLogConfigs请求参数结构体
 */
export interface DescribeGroupBusinessLogConfigsRequest {
    /**
     * 分组ID
     */
    GroupId: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    LaneId?: string;
    /**
     * 泳道名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LaneName?: string;
    /**
     * 泳道备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
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
     * 泳道部署组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LaneGroupList?: Array<LaneGroup>;
    /**
     * 是否入口应用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Entrance?: boolean;
    /**
     * 泳道已经关联部署组的命名空间列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceIdList?: Array<string>;
    /**
     * 泳道部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LaneGroupId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 指标监控数据曲线
 */
export interface MetricDataCurve {
    /**
     * 指标名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricName?: string;
    /**
     * 指标计算方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricFunction?: string;
    /**
     * 指标数据点集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricDataPoints?: Array<MetricDataPoint>;
}
/**
 * 日志投递kafka用，描述部署组信息
 */
export interface GroupInfo {
    /**
     * 部署组id
     */
    GroupId: string;
    /**
     * 部署组名称
     */
    GroupName: string;
    /**
     * 集群类型
     */
    ClusterType: string;
    /**
     * 集群id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 命名空间名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceName?: string;
    /**
     * 绑定时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociateTime?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisassociateKafkaConfig返回参数结构体
 */
export interface DisassociateKafkaConfigResponse {
    /**
     * 解除绑定是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * k8s env 的 ValueFrom
 */
export interface ValueFrom {
    /**
     * k8s env 的 FieldRef
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldRef?: FieldRef;
    /**
     * k8s env 的 ResourceFieldRef
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceFieldRef?: ResourceFieldRef;
    /**
     * k8s env的configMapKeyRef
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigMapKeyRef?: CommonRef;
    /**
     * k8s env 的 secretKeyRef
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretKeyRef?: CommonRef;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteLaneRule返回参数结构体
 */
export interface DeleteLaneRuleResponse {
    /**
     * 操作状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 部署组列表-其它字段
 */
export interface ContainerGroupOther {
    /**
     * 实例总数
     */
    InstanceNum?: number;
    /**
     * 已启动实例总数
     */
    CurrentNum?: number;
    /**
     * 负载均衡DNS地址
     */
    LbDns?: string;
    /**
     * 负载均衡ip
     */
    LbIp?: string;
    /**
     * Service ip
     */
    ClusterIp?: string;
    /**
     * 服务状态，请参考后面的状态定义
     */
    Status?: string;
    /**
     * 服务状态，请参考后面的状态定义
     */
    Message?: string;
    /**
     * 环境变量
     */
    Envs?: Array<Env>;
    /**
     * Service NodePort
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodePort?: number;
    /**
     * 子网ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 健康检查相关字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckSettings?: HealthCheckSettings;
    /**
     * 服务配置信息是否匹配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNotEqualServiceConfig?: boolean;
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
    /**
     * 实例额外需要设置参数信息
     */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /**
     * 安全组 ID 列表
     */
    SecurityGroupIds?: Array<string>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 获取部署组
 */
export interface ContainerGroupDeploy {
    /**
     * 部署组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 分组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 实例总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceNum?: number;
    /**
     * 已启动实例总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentNum?: number;
    /**
     * 镜像server
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Server?: string;
    /**
     * 镜像名，如/tsf/nginx
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reponame?: string;
    /**
     * 镜像版本名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagName?: string;
    /**
     * 业务容器初始分配的 CPU 核数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuRequest?: string;
    /**
     * 业务容器最大分配的 CPU 核数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuLimit?: string;
    /**
     * 业务容器初始分配的内存 MiB 数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemRequest?: string;
    /**
     * 业务容器最大分配的内存 MiB 数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemLimit?: string;
    /**
     * 0:公网 1:集群内访问 2：NodePort
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessType?: number;
    /**
     * 端口映射
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProtocolPorts?: Array<ProtocolPort>;
    /**
     * 更新方式：0:快速更新 1:滚动更新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateType?: number;
    /**
     * 更新间隔,单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateIvl?: number;
    /**
     * jvm参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JvmOpts?: string;
    /**
     * 子网id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * agent容器初始分配的 CPU 核数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentCpuRequest?: string;
    /**
     * agent容器最大分配的 CPU 核数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentCpuLimit?: string;
    /**
     * agent容器初始分配的内存 MiB 数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentMemRequest?: string;
    /**
     * agent容器最大分配的内存 MiB 数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentMemLimit?: string;
    /**
     * istioproxy容器初始分配的 CPU 核数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IstioCpuRequest?: string;
    /**
     * istioproxy容器最大分配的 CPU 核数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IstioCpuLimit?: string;
    /**
     * istioproxy容器初始分配的内存 MiB 数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IstioMemRequest?: string;
    /**
     * istioproxy容器最大分配的内存 MiB 数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IstioMemLimit?: string;
    /**
     * 部署组的环境变量数组，这里没有展示 tsf 使用的环境变量，只展示了用户设置的环境变量。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Envs?: Array<Env>;
    /**
     * 健康检查配置信息，若不指定该参数，则默认不设置健康检查。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckSettings?: HealthCheckSettings;
    /**
     * 是否部署Agent容器
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployAgent?: boolean;
    /**
     * 部署组备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: string;
    /**
     * 是否创建 k8s service
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisableService?: boolean;
    /**
     * service 是否为 headless 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeadlessService?: boolean;
    /**
     * TcrRepoInfo值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TcrRepoInfo?: TcrRepoInfo;
    /**
     * 数据卷信息，list
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VolumeInfos?: Array<VolumeInfo>;
    /**
     * 数据卷挂载信息，list
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VolumeMountInfos?: Array<VolumeMountInfo>;
    /**
     * KubeInjectEnable值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KubeInjectEnable?: boolean;
    /**
     * 仓库类型 (person, tcr)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoType?: string;
    /**
     * 预热配置设置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarmupSetting?: WarmupSetting;
    /**
     * Envoy网关服务配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayConfig?: GatewayConfig;
    /**
     * 容器名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerName?: string;
    /**
     * 附加容器列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdditionalContainerList?: Array<GroupContainerInfo>;
    /**
     * 内部容器列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternalContainerList?: Array<GroupContainerInfo>;
    /**
     * service列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceSettingList?: Array<ServiceSetting>;
}
/**
 * Tsf命名空间分页对象
 */
export interface TsfPageNamespace {
    /**
     * 命名空间总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 命名空间列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<Namespace>;
}
/**
 * 容器卷挂载信息
 */
export interface VolumeInfo {
    /**
     * 数据卷类型
     */
    VolumeType: string;
    /**
     * 数据卷名称
     */
    VolumeName: string;
    /**
     * 数据卷配置
     */
    VolumeConfig?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigMapOptions?: Array<ConfigMapOption>;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EmptyDirOption?: EmptyDirOption;
}
/**
 * UpdateApiTimeouts请求参数结构体
 */
export interface UpdateApiTimeoutsRequest {
    /**
     * API ID 列表
     */
    ApiIds: Array<string>;
    /**
     * 开启/禁用，enabled/disabled
     */
    UsableStatus: string;
    /**
     * 超时时间，单位毫秒，开启API超时时，必填
     */
    Timeout?: number;
}
/**
 * 指标
 */
export interface Metric {
    /**
     * 指标名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 指标计算方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Function?: string;
}
/**
 * DescribeInovcationIndicators请求参数结构体
 */
export interface DescribeInovcationIndicatorsRequest {
    /**
     * 维度
     */
    Dimension: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 命名空间ID
     */
    NamespaceId?: string;
    /**
     * 微服务ID
     */
    ServiceId?: string;
    /**
     * 调用方服务名
     */
    CallerServiceName?: string;
    /**
     * 被调方服务名
     */
    CalleeServiceName?: string;
    /**
     * 调用方接口名
     */
    CallerInterfaceName?: string;
    /**
     * 被调方接口名
     */
    CalleeInterfaceName?: string;
    /**
     * 应用ID
     */
    ApplicationId?: string;
    /**
     * 部署组ID
     */
    GroupId?: string;
    /**
     * 实例ID
     */
    InstanceId?: string;
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
     * 通过是否是默认命名空间过滤，不传表示拉取全部命名空间。0：默认命名空间。1：非默认命名空间
     */
    IsDefault?: string;
    /**
     * 是否关闭鉴权查询
     */
    DisableProgramAuthCheck?: boolean;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusters返回参数结构体
 */
export interface DescribeClustersResponse {
    /**
     * Cluster分页信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageClusterV2;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchBusinessLog请求参数结构体
 */
export interface SearchBusinessLogRequest {
    /**
     * 日志配置项ID
     */
    ConfigId: string;
    /**
     * 机器实例ID，不传表示全部实例
     */
    InstanceIds?: Array<string>;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * 请求偏移量，取值范围大于等于0，默认值为0
     */
    Offset?: number;
    /**
     * 单页请求配置数量，取值范围[1, 200]，默认值为50
     */
    Limit?: number;
    /**
     * 排序规则，默认值"time"
     */
    OrderBy?: string;
    /**
     * 排序方式，取值"asc"或"desc"，默认值"desc"
     */
    OrderType?: string;
    /**
     * 检索关键词
     */
    SearchWords?: Array<string>;
    /**
     * 部署组ID列表，不传表示全部部署组
     */
    GroupIds?: Array<string>;
    /**
     * 检索类型，取值"LUCENE", "REGEXP", "NORMAL"
     */
    SearchWordType?: string;
    /**
     * 批量请求类型，取值"page"或"scroll"
     */
    BatchType?: string;
    /**
     * 游标ID
     */
    ScrollId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Result: TsfPageConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnitNamespaces返回参数结构体
 */
export interface DescribeUnitNamespacesResponse {
    /**
     * 单元化命名空间对象列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageUnitNamespace;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ContinueRunFailedTaskBatch返回参数结构体
 */
export interface ContinueRunFailedTaskBatchResponse {
    /**
     * true：操作成功、false：操作失败
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 是否关闭鉴权
     */
    DisableProgramAuthCheck?: boolean;
}
/**
 * tsf-privilege模块 Program数据集
 */
export interface Program {
    /**
     * 数据集ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgramId?: string;
    /**
     * 数据集名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgramName?: string;
    /**
     * 数据集描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgramDesc?: string;
    /**
     * 删除标识，true: 可以删除; false: 不可删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlag?: boolean;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTime?: number;
    /**
     * 最后更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdateTime?: number;
    /**
     * 数据项列表，无值时返回空数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgramItemList?: Array<ProgramItem>;
}
/**
 * 投递kafka配置项
 */
export interface KafkaDeliveryConfig {
    /**
     * 配置项id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigId?: string;
    /**
     * 配置名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigName?: string;
    /**
     * 采集路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CollectPath?: Array<string>;
    /**
     * kafka vip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaVIp?: string;
    /**
     * kafka vport
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaVPort?: string;
    /**
     * kafka topic
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Topic?: string;
    /**
     * 换行规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LineRule?: string;
    /**
     * 是否需要认证
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableAuth?: boolean;
    /**
     * 用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Username?: string;
    /**
     * 密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * 投递的topic和path
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaInfos?: Array<DeliveryKafkaInfo>;
    /**
     * 是否应用单行规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableGlobalLineRule?: boolean;
    /**
     * 自定义分行规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomRule?: string;
    /**
     * KafkaAddress
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaAddress?: string;
}
/**
 * API 对象类型描述
 */
export interface ApiDefinitionDescr {
    /**
     * 对象名称
     */
    Name?: string;
    /**
     * 对象属性列表
     */
    Properties?: Array<PropertyField>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 企业: tcr ；个人: personal或者不填
     */
    RepoType?: string;
    /**
     * 应用id
     */
    ApplicationId?: string;
    /**
     * TcrRepoInfo值
     */
    TcrRepoInfo?: TcrRepoInfo;
    /**
     * 镜像仓库名称
     */
    RepoName?: string;
}
/**
 * 监控指标坐标
 */
export interface IndicatorCoord {
    /**
     * 指标横坐标值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoordX?: string;
    /**
     * 指标纵坐标值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoordY?: string;
    /**
     * 指标标签，用于标识附加信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoordTag?: string;
}
/**
 * 单元化规则翻页对象
 */
export interface TsfPageUnitRule {
    /**
     * 记录总数
     */
    TotalCount?: number;
    /**
     * 记录实体列表
     */
    Content?: Array<UnitRule>;
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
 * AssociateBusinessLogConfig返回参数结构体
 */
export interface AssociateBusinessLogConfigResponse {
    /**
     * 操作结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGatewayApis请求参数结构体
 */
export interface DescribeGatewayApisRequest {
    /**
     * 分组ID
     */
    GroupId: string;
    /**
     * 翻页偏移量
     */
    Offset: number;
    /**
     * 每页的记录数
     */
    Limit: number;
    /**
     * 搜索关键字，支持 API path
     */
    SearchWord?: string;
    /**
     * 部署组ID
     */
    GatewayDeployGroupId?: string;
    /**
     * 发布状态, drafted(未发布)/released(已发布)/releasing(发布中)/failed(发布失败)
     */
    ReleaseStatus?: string;
}
/**
 * AssociateConfigWithGroup请求参数结构体
 */
export interface AssociateConfigWithGroupRequest {
    /**
     * 配置项id
     */
    ConfigId: string;
    /**
     * 部署组信息
     */
    Groups?: Array<GroupInfo>;
    /**
     * 是否选择全部投递，1 表示全部，0或不填表示非全部
     */
    SelectAll?: number;
    /**
     * 命名空间id
     */
    NamespaceId?: string;
    /**
     * 集群id
     */
    ClusterId?: string;
    /**
     * 模糊搜索关键词
     */
    SearchWord?: string;
}
/**
 * TSF配置项发布日志分页对象
 */
export interface TsfPageConfigReleaseLog {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 配置项发布日志数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<ConfigReleaseLog>;
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
 * DescribeJvmMonitor查询jvm监控数据接口返回数据封装
 */
export interface JvmMonitorData {
    /**
     * 堆内存监控图,三条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeapMemory?: MemoryPicture;
    /**
     * 非堆内存监控图,三条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NonHeapMemory?: MemoryPicture;
    /**
     * 伊甸园区监控图,三条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EdenSpace?: MemoryPicture;
    /**
     * 幸存者区监控图,三条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SurvivorSpace?: MemoryPicture;
    /**
     * 老年代监控图,三条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OldSpace?: MemoryPicture;
    /**
     * 元空间监控图,三条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaSpace?: MemoryPicture;
    /**
     * 线程监控图,三条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ThreadPicture?: ThreadPicture;
    /**
     * youngGC增量监控图,一条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    YoungGC?: Array<CurvePoint>;
    /**
     * fullGC增量监控图,一条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FullGC?: Array<CurvePoint>;
    /**
     * cpu使用率,一条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuUsage?: Array<CurvePoint>;
    /**
     * 加载类数,一条线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClassCount?: Array<CurvePoint>;
}
/**
 * DescribeGroupsWithPlugin请求参数结构体
 */
export interface DescribeGroupsWithPluginRequest {
    /**
     * 插件ID
     */
    PluginId: string;
    /**
     * 翻页偏移量
     */
    Offset: number;
    /**
     * 每页记录数量
     */
    Limit: number;
    /**
     * 绑定/未绑定: true / false
     */
    Bound?: boolean;
    /**
     * 搜索关键字
     */
    SearchWord?: string;
    /**
     * 网关实体ID
     */
    GatewayInstanceId?: string;
}
/**
 * 镜像仓库列表
 */
export interface ImageRepositoryResult {
    /**
     * 总记录数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 镜像服务器地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Server?: string;
    /**
     * 列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<ImageRepository>;
}
/**
 * ModifyTask返回参数结构体
 */
export interface ModifyTaskResponse {
    /**
     * 更新是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RevokeFileConfig返回参数结构体
 */
export interface RevokeFileConfigResponse {
    /**
     * 撤回结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchBusinessLog返回参数结构体
 */
export interface SearchBusinessLogResponse {
    /**
     * 业务日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageBusinessLogV2;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteUnitNamespaces请求参数结构体
 */
export interface DeleteUnitNamespacesRequest {
    /**
     * 网关实体ID
     */
    GatewayInstanceId: string;
    /**
     * 单元化命名空间ID数组
     */
    UnitNamespaceList: Array<string>;
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
 * 微服务网关单元化规则项
 */
export interface UnitRuleItem {
    /**
     * 逻辑关系：AND/OR
     */
    Relationship: string;
    /**
     * 目的地命名空间ID
     */
    DestNamespaceId: string;
    /**
     * 目的地命名空间名称
     */
    DestNamespaceName: string;
    /**
     * 规则项名称
     */
    Name: string;
    /**
     * 规则项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 单元化规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitRuleId?: string;
    /**
     * 规则顺序，越小优先级越高：默认为0
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Priority?: number;
    /**
     * 规则描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 规则标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitRuleTagList?: Array<UnitRuleTag>;
    /**
     * 规则项索引
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ItemIndex?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: string;
}
/**
 * UpdateConfigTemplate返回参数结构体
 */
export interface UpdateConfigTemplateResponse {
    /**
     * 更新成功: true / 更新失败: false
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 尽量调度
 */
export interface TrySchedule {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AffinityList?: Array<Affinity>;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AntiAffinityList?: Array<Affinity>;
}
/**
 * BindPlugin请求参数结构体
 */
export interface BindPluginRequest {
    /**
     * 分组/API绑定插件列表
     */
    PluginInstanceList: Array<GatewayPluginBoundParam>;
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
 * DeleteLaneRule请求参数结构体
 */
export interface DeleteLaneRuleRequest {
    /**
     * 泳道规则Id
     */
    RuleId: string;
}
/**
 * 指标维度
 */
export interface MetricDimension {
    /**
     * 指标维度名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 指标维度取值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
/**
 * 部署组容器信息
 */
export interface GroupContainerInfo {
    /**
     * 镜像版本名称
     */
    TagName: string;
    /**
     * 容器名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ContainerName?: string;
    /**
     * 镜像名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoName?: string;
    /**
     * 仓库类型,tcr，address，personal，默认personal
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoType?: string;
    /**
     * tcr仓库信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TcrRepoInfo?: TcrRepoInfo;
    /**
     * 镜像server
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Server?: string;
    /**
     * 凭证名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretName?: string;
    /**
     * jvm 参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JvmOpts?: string;
    /**
     * 容器最大的 CPU 核数，对应 K8S 的 limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuLimit?: string;
    /**
     * 容器分配的 CPU 核数，对应 K8S 的 request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuRequest?: string;
    /**
     * 容器分配的内存 MiB 数，对应 K8S 的 request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemRequest?: string;
    /**
     * 容器最大的内存 MiB 数，对应 K8S 的 limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemLimit?: string;
    /**
     * 健康检查配置信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckSettings?: HealthCheckSettings;
    /**
     * 环境变量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Envs?: Array<Env>;
    /**
     * 环境变量,作为入参时不用填
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserEnvs?: Array<Env>;
    /**
     * 数据卷挂载点信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VolumeMountInfoList?: Array<VolumeMountInfo>;
}
/**
 * CreateUnitRuleWithDetailResp返回参数结构体
 */
export interface CreateUnitRuleWithDetailRespResponse {
    /**
     * 单元化规则信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: UnitRule;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * api分组已绑定的网关部署组
 */
export interface GatewayDeployGroup {
    /**
     * 网关部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployGroupId?: string;
    /**
     * 网关部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployGroupName?: string;
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 应用分类：V：虚拟机应用，C：容器应用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 部署组应用状态,取值: Running、Waiting、Paused、Updating、RollingBack、Abnormal、Unknown
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupStatus?: string;
    /**
     * 集群类型，C ：容器，V：虚拟机
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
}
/**
 * 包列表
 */
export interface PkgList {
    /**
     * 程序包总量
     */
    TotalCount?: number;
    /**
     * 程序包信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<PkgInfo>;
    /**
     * 程序包仓库id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepositoryId?: string;
    /**
     * 程序包仓库类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepositoryType?: string;
    /**
     * 程序包仓库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepositoryName?: string;
}
/**
 * CreateProgram返回参数结构体
 */
export interface CreateProgramResponse {
    /**
     * true: 创建成功；false: 创建失败
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集群
 */
export interface Cluster {
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 集群描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterDesc?: string;
    /**
     * 集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
    /**
     * 集群所属私有网络ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 集群状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterStatus?: string;
    /**
     * 集群CIDR
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterCIDR?: string;
    /**
     * 集群总CPU，单位: 核
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterTotalCpu?: number;
    /**
     * 集群总内存，单位: G
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterTotalMem?: number;
    /**
     * 集群已使用CPU，单位: 核
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterUsedCpu?: number;
    /**
     * 集群已使用内存，单位: G
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterUsedMem?: number;
    /**
     * 集群机器实例数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCount?: number;
    /**
     * 集群可用的机器实例数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunInstanceCount?: number;
    /**
     * 集群正常状态的机器实例数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NormalInstanceCount?: number;
    /**
     * 删除标记：true：可以删除；false：不可删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlag?: boolean;
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
     * 集群所属TSF地域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsfRegionId?: string;
    /**
     * 集群所属TSF地域名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsfRegionName?: string;
    /**
     * 集群所属TSF可用区ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsfZoneId?: string;
    /**
     * 集群所属TSF可用区名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsfZoneName?: string;
    /**
     * 集群不可删除的原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlagReason?: string;
    /**
     * 集群最大CPU限制，单位：核
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterLimitCpu?: number;
    /**
     * 集群最大内存限制，单位：G
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterLimitMem?: number;
    /**
     * 集群可用的服务实例数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunServiceInstanceCount?: number;
    /**
     * 集群所属子网ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 返回给前端的控制信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperationInfo?: OperationInfo;
    /**
     * 集群版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterVersion?: string;
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
 * UpdateUnitRule返回参数结构体
 */
export interface UpdateUnitRuleResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUnitRule请求参数结构体
 */
export interface CreateUnitRuleRequest {
    /**
     * 网关实体ID
     */
    GatewayInstanceId: string;
    /**
     * 规则名称
     */
    Name: string;
    /**
     * 规则描述
     */
    Description?: string;
    /**
     * 规则项列表
     */
    UnitRuleItemList?: Array<UnitRuleItem>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 部署组配置发布相关信息
 */
export interface GroupRelease {
    /**
     * 程序包ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageId?: string;
    /**
     * 程序包名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageName?: string;
    /**
     * 程序包版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageVersion?: string;
    /**
     * 镜像名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoName?: string;
    /**
     * 镜像版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagName?: string;
    /**
     * 已发布的全局配置列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicConfigReleaseList?: Array<ConfigRelease>;
    /**
     * 已发布的应用配置列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigReleaseList?: Array<ConfigRelease>;
    /**
     * 已发布的文件配置列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileConfigReleaseList?: Array<FileConfigRelease>;
}
/**
 * DescribePathRewrites请求参数结构体
 */
export interface DescribePathRewritesRequest {
    /**
     * 网关部署组ID
     */
    GatewayGroupId: string;
    /**
     * 根据正则表达式或替换的内容模糊查询
     */
    SearchWord?: string;
    /**
     * 每页数量
     */
    Limit?: number;
    /**
     * 起始偏移量
     */
    Offset?: number;
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
 * 标准输出日志列表
 */
export interface TsfPageStdoutLogV2 {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 标准输出日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<StdoutLogV2>;
    /**
     * 游标ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScrollId?: string;
    /**
     * 查询状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
}
/**
 * 仓库列表
 */
export interface RepositoryList {
    /**
     * 仓库总量
     */
    TotalCount?: number;
    /**
     * 仓库信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<RepositoryInfo>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUnitNamespaces返回参数结构体
 */
export interface CreateUnitNamespacesResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateApiGroup返回参数结构体
 */
export interface UpdateApiGroupResponse {
    /**
     * 返回结果，true: 成功, false: 失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupsWithPlugin返回参数结构体
 */
export interface DescribeGroupsWithPluginResponse {
    /**
     * API分组信息列表
     */
    Result?: TsfPageApiGroupInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 安全组id
     */
    SecurityGroupIds?: string;
}
/**
 * 微服务网关插件实例对象
 */
export interface GatewayPlugin {
    /**
     * 网关插件id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 插件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 插件类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 插件描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: string;
    /**
     * 发布状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
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
    /**
     * 网关实例的类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayInstanceType: string;
    /**
     * 网关实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayInstanceId: string;
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
    /**
     * 需要绑定的数据集ID
     */
    ProgramId?: string;
    /**
     * 服务配置信息列表
     */
    ServiceConfigList?: Array<ServiceConfig>;
    /**
     * 忽略创建镜像仓库
     */
    IgnoreCreateImageRepository?: boolean;
    /**
     * 数据集id列表
     */
    ProgramIdList?: Array<string>;
    /**
     * apm业务系统id
     */
    ApmInstanceId?: string;
    /**
     * 编程语言;
  J - JAVA；
  C - C/C++；
  P - Python；
  G - Go；
  O - Other；
     */
    ProgramLanguage?: string;
    /**
     * 开发框架-SpringCloud/Dubbo/Go-GRPC/Other
     */
    FrameworkType?: string;
    /**
     * 注册配置治理
     */
    ServiceGovernanceConfig?: ServiceGovernanceConfig;
    /**
     * 是否创建并关联同名镜像仓库
     */
    CreateSameNameImageRepository?: boolean;
}
/**
 * 服务统计结果集
 */
export interface ServiceStatisticsResults {
    /**
     * 返回结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<ServiceStatisticsResult>;
    /**
     * 条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
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
     * 滚动发布的执行方式，auto表示自动， manual表示手动
     */
    DeployExeMode?: string;
    /**
     * 滚动发布每个批次的时间间隔
     */
    DeployWaitTime?: number;
    /**
     * 启动脚本 base64编码
     */
    StartScript?: string;
    /**
     * 停止脚本 base64编码
     */
    StopScript?: string;
    /**
     * 是否进行增量部署，默认为false，全量更新
     */
    IncrementalDeployment?: boolean;
    /**
     * JDK名称: konaJDK或openJDK
     */
    JdkName?: string;
    /**
     * konaJDK版本：8、11和17
  openJDK版本：8、17
     */
    JdkVersion?: string;
    /**
     * 部署agent的类型、版本
     */
    AgentProfileList?: Array<AgentProfile>;
    /**
     * 预热参数配置
     */
    WarmupSetting?: WarmupSetting;
    /**
     * 开启分批健康检查
     */
    EnableBatchHealthCheck?: boolean;
}
/**
 * 泳道分页查询
 */
export interface LaneInfos {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 泳道信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<LaneInfo>;
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
}
/**
 * CreateFileConfigWithDetailResp返回参数结构体
 */
export interface CreateFileConfigWithDetailRespResponse {
    /**
     * 文件配置项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: FileConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateConfigTemplateWithDetailResp请求参数结构体
 */
export interface CreateConfigTemplateWithDetailRespRequest {
    /**
     * 配置模板名称
     */
    ConfigTemplateName: string;
    /**
     * 配置模板对应的微服务框架
     */
    ConfigTemplateType: string;
    /**
     * 配置模板数据
     */
    ConfigTemplateValue: string;
    /**
     * 配置模板描述
     */
    ConfigTemplateDesc?: string;
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
}
/**
 * GatewayPlugin 翻页对象
 */
export interface TsfPageGatewayPlugin {
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录实体列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<GatewayPlugin>;
}
/**
 * API 日统计数据点
 */
export interface ApiUseStatisticsEntity {
    /**
     * 名称
     */
    Name?: string;
    /**
     * 次数
     */
    Count?: string;
    /**
     * 比率
     */
    Ratio?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupRelease返回参数结构体
 */
export interface DescribeGroupReleaseResponse {
    /**
     * 部署组发布的相关信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: GroupRelease;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribePathRewrite请求参数结构体
 */
export interface DescribePathRewriteRequest {
    /**
     * 路径重写规则ID
     */
    PathRewriteId: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeInvocationMetricDataDimension请求参数结构体
 */
export interface DescribeInvocationMetricDataDimensionRequest {
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 开始index
     */
    Offset: number;
    /**
     * 分页大小
     */
    Limit: number;
    /**
     * 聚合维度
     */
    DimensionName: string;
    /**
     * 搜索关键字
     */
    SearchWord?: string;
    /**
     * 维度
     */
    MetricDimensionValues?: Array<MetricDimensionValue>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyGroup返回参数结构体
 */
export interface ModifyGroupResponse {
    /**
     * 更新部署组详情是否成功。
  true：操作成功。
  false：操作失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnitRulesV2请求参数结构体
 */
export interface DescribeUnitRulesV2Request {
    /**
     * 网关实体ID
     */
    GatewayInstanceId: string;
    /**
     * 根据规则名或备注内容模糊查询
     */
    SearchWord?: string;
    /**
     * 启用状态, disabled: 未发布， enabled: 发布
     */
    Status?: string;
    /**
     * 翻页查询偏移量
     */
    Offset?: number;
    /**
     * 翻页查询每页记录数
     */
    Limit?: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 监控统计数据点Map集合（单元化网关使用）
 */
export interface MetricDataPointMap {
    /**
     * 总调用次数监控数据点集合
     */
    SumReqAmount: Array<MetricDataPoint>;
    /**
     * 平均错误率监控数据点集合
     */
    AvgFailureRate: Array<MetricDataPoint>;
    /**
     * 平均响应时间监控数据点集合
     */
    AvgTimeCost: Array<MetricDataPoint>;
}
/**
 * DescribeGroupAttribute返回参数结构体
 */
export interface DescribeGroupAttributeResponse {
    /**
     * 虚拟机部署组信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: VmGroupOther;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyPathRewrite返回参数结构体
 */
export interface ModifyPathRewriteResponse {
    /**
     * true/false
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EnableUnitRule返回参数结构体
 */
export interface EnableUnitRuleResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeEnabledUnitRule返回参数结构体
 */
export interface DescribeEnabledUnitRuleResponse {
    /**
     * 单元化规则对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: UnitRule;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 鉴权类型。 secret： 密钥鉴权； none:无鉴权
     */
    AuthType?: string;
    /**
     * 分组上下文
     */
    GroupContext?: string;
    /**
     * 命名空间参数key值
     */
    NamespaceNameKey?: string;
    /**
     * 微服务名参数key值
     */
    ServiceNameKey?: string;
    /**
     * 命名空间参数位置，path，header或query，默认是path
     */
    NamespaceNameKeyPosition?: string;
    /**
     * 微服务名参数位置，path，header或query，默认是path
     */
    ServiceNameKeyPosition?: string;
}
/**
 * TsfApiListResponse
 */
export interface TsfApiListResponse {
    /**
     * 数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * API 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<MsApiArray>;
}
/**
 * EnableUnitRoute返回参数结构体
 */
export interface EnableUnitRouteResponse {
    /**
     * 返回结果，成功失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * API分组日使用统计对象数据点
 */
export interface GroupUseStatisticsEntity {
    /**
     * API 路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApiPath?: string;
    /**
     * 服务名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName?: string;
    /**
     * 统计值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * API ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApiId?: string;
}
/**
 * DescribeBusinessLogConfig请求参数结构体
 */
export interface DescribeBusinessLogConfigRequest {
    /**
     * 配置项ID
     */
    ConfigId: string;
}
/**
 * GatewayDeployGroup 翻页对象
 */
export interface TsfPageGatewayDeployGroup {
    /**
     * 记录总数
     */
    TotalCount?: number;
    /**
     * 记录实体列表
     */
    Content?: Array<GatewayDeployGroup>;
}
/**
 * 列表信息
 */
export interface ImageTag {
    /**
     * 仓库名
     */
    RepoName?: string;
    /**
     * 版本名称
     */
    TagName?: string;
    /**
     * 版本ID
     */
    TagId?: string;
    /**
     * 镜像ID
     */
    ImageId?: string;
    /**
     * 大小
     */
    Size?: string;
    /**
     * 创建时间
     */
    CreationTime?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 镜像制作者
     */
    Author?: string;
    /**
     * CPU架构
     */
    Architecture?: string;
    /**
     * Docker客户端版本
     */
    DockerVersion?: string;
    /**
     * 操作系统
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Os?: string;
    /**
     * push时间
     */
    PushTime?: string;
    /**
     * 单位为字节
     */
    SizeByte?: number;
    /**
     * TcrRepoInfo值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TcrRepoInfo?: TcrRepoInfo;
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
 * DescribeBusinessLogConfig返回参数结构体
 */
export interface DescribeBusinessLogConfigResponse {
    /**
     * 日志配置项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: BusinessLogConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * CreateUnitRule返回参数结构体
 */
export interface CreateUnitRuleResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUnitNamespaces请求参数结构体
 */
export interface CreateUnitNamespacesRequest {
    /**
     * 网关实体ID
     */
    GatewayInstanceId: string;
    /**
     * 单元化命名空间对象列表
     */
    UnitNamespaceList?: Array<UnitNamespace>;
}
/**
 * DescribeTaskRecords返回参数结构体
 */
export interface DescribeTaskRecordsResponse {
    /**
     * 任务记录列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TaskRecordPage;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 虚拟机部署组信息
 */
export interface VmGroup {
    /**
     * 部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 部署组状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupStatus?: string;
    /**
     * 程序包ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageId?: string;
    /**
     * 程序包名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageName?: string;
    /**
     * 程序包版本号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageVersion?: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
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
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 部署组机器数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCount?: number;
    /**
     * 部署组运行中机器数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunInstanceCount?: number;
    /**
     * 部署组启动参数信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupParameters?: string;
    /**
     * 部署组创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 部署组更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 部署组停止机器数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffInstanceCount?: number;
    /**
     * 部署组描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupDesc?: string;
    /**
     * 微服务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceType?: string;
    /**
     * 应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 部署组资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupResourceType?: string;
    /**
     * 部署组更新时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: number;
    /**
     * 部署应用描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployDesc?: string;
    /**
     * 滚动发布的更新方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateType?: number;
    /**
     * 发布是否启用beta批次
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployBetaEnable?: boolean;
    /**
     * 滚动发布的批次比例列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployBatch?: Array<number>;
    /**
     * 滚动发布的批次执行方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployExeMode?: string;
    /**
     * 滚动发布的每个批次的等待时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployWaitTime?: number;
    /**
     * 是否开启了健康检查
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableHealthCheck?: boolean;
    /**
     * 健康检查配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckSettings?: HealthCheckSettings;
    /**
     * 程序包类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageType?: string;
    /**
     * 启动脚本 base64编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartScript?: string;
    /**
     * 停止脚本 base64编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StopScript?: string;
    /**
     * 部署组备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: string;
    /**
     * javaagent信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AgentProfileList?: Array<AgentProfile>;
    /**
     * 预热属性配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarmupSetting?: WarmupSetting;
    /**
     * Envoy网关配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayConfig?: GatewayConfig;
    /**
     * 批次是否开启健康检查
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableBatchHealthCheck?: boolean;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 容器网络设置。
 */
export interface ServiceSetting {
    /**
     * 0:公网, 1:集群内访问, 2：NodePort, 3: VPC 内网访问
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
    /**
     * 是否创建 k8s service，默认为 false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisableService?: boolean;
    /**
     * service 是否为 headless 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeadlessService?: boolean;
    /**
     * 当为 true 且 DisableService 也为 true 时，会删除之前创建的 service，请小心使用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowDeleteService?: boolean;
    /**
     * 开启SessionAffinity，true为开启，false为不开启，默认为false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OpenSessionAffinity?: boolean;
    /**
     * SessionAffinity会话时间，默认10800
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SessionAffinityTimeoutSeconds?: number;
    /**
     * 服务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName?: string;
    /**
     * 外部流量策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExternalTrafficStrategy?: string;
    /**
     * 外部流量策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExternalTrafficPolicy?: string;
    /**
     * 负载均衡提供者
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerProvisioner?: string;
    /**
     * 负载均衡类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancingType?: string;
    /**
     * k8s负载均衡内网vip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterIp?: string;
    /**
     * 禁用服务Int记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisableServiceInt?: number;
    /**
     * 开启SessionAffinity Int记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OpenSessionAffinityInt?: number;
    /**
     * 开启HeadlessService int记录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeadlessServiceInt?: number;
    /**
     * 服务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * VPC网络ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 负载均衡VIP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancingIp?: string;
    /**
     * 负载均衡id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoadBalancerId?: string;
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
 * DescribeGatewayApis返回参数结构体
 */
export interface DescribeGatewayApisResponse {
    /**
     * 翻页结构
     */
    Result?: TsfPageApiDetailInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUnitRule请求参数结构体
 */
export interface DescribeUnitRuleRequest {
    /**
     * 单元化规则ID
     */
    Id: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 机器列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: InstanceEnrichedInfoPage;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 打散调度规则
 */
export interface AvailableZoneScatterScheduleRule {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScatterDimension?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxUnbalanceQuantity?: number;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsForceSchedule?: boolean;
}
/**
 * CreatePathRewritesWithDetailResp请求参数结构体
 */
export interface CreatePathRewritesWithDetailRespRequest {
    /**
     * 路径重写列表
     */
    PathRewrites: Array<PathRewriteCreateObject>;
}
/**
 * DeleteFileConfig返回参数结构体
 */
export interface DeleteFileConfigResponse {
    /**
     * 删除结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 资源任务转态结果
 */
export interface ResourceTaskStatusResult {
    /**
     * 任务的执行状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskStatus?: number;
}
/**
 * 返回容器的事件，比如 k8s deployment 或者 pod 的 events
 */
export interface ContainerEvent {
    /**
     * 第一次出现的时间，以 ms 为单位的时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FirstTimestamp: number;
    /**
     * 最后一次出现的时间，以 ms 为单位的时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastTimestamp: number;
    /**
     * 级别
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Kind: string;
    /**
     * 资源名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reason: string;
    /**
     * 详细描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message: string;
    /**
     * 出现次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count: number;
}
/**
 * DeleteApiRateLimitRule返回参数结构体
 */
export interface DeleteApiRateLimitRuleResponse {
    /**
     * 是否成功
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteFileConfig请求参数结构体
 */
export interface DeleteFileConfigRequest {
    /**
     * 文件配置项ID
     */
    ConfigId: string;
}
/**
 * DescribePublicConfigSummary返回参数结构体
 */
export interface DescribePublicConfigSummaryResponse {
    /**
     * 分页的全局配置统计信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: TsfPageConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 分片参数
 */
export interface ShardArgument {
    /**
     * 分片参数 KEY，整形, 范围 [1,1000]
     */
    ShardKey?: number;
    /**
     * 分片参数 VALUE
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ShardValue?: string;
}
/**
 * 指标维度多值匹配
 */
export interface MetricDimensionValue {
    /**
     * 维度名
     */
    Name: string;
    /**
     * 维度值
     */
    Value: Array<string>;
}
/**
 * 监控统计数据点
 */
export interface MetricDataPoint {
    /**
     * 数据点键
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * 数据点值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * 数据点标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tag?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    Limit?: number;
    /**
     * 翻页偏移量
     */
    Offset?: number;
    /**
     * 搜索关键字
     */
    SearchWord?: string;
    /**
     * 无
     */
    LaneIdList?: Array<string>;
    /**
     * 无
     */
    DisableProgramAuthCheck?: boolean;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 业务日志配置关联部署组信息
 */
export interface BusinesLogConfigAssociatedGroup {
    /**
     * 部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 部署组所属应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 部署组所属应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 部署组所属应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 部署组所属命名空间ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceId?: string;
    /**
     * 部署组所属命名空间名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceName?: string;
    /**
     * 部署组所属集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 部署组所属集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 部署组所属集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
    /**
     * 部署组关联日志配置时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociatedTime?: string;
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
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
    /**
     * 命名空间ID
     */
    NamespaceId?: string;
}
/**
 * 路径重写
 */
export interface PathRewrite {
    /**
     * 路径重写规则ID
     */
    PathRewriteId?: string;
    /**
     * 网关部署组ID
     */
    GatewayGroupId?: string;
    /**
     * 正则表达式
     */
    Regex?: string;
    /**
     * 替换的内容
     */
    Replacement?: string;
    /**
     * 是否屏蔽映射后路径，Y: 是 N: 否
     */
    Blocked?: string;
    /**
     * 规则顺序，越小优先级越高
     */
    Order?: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * API 明细
 */
export interface ApiDetailInfo {
    /**
     * API ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApiId?: string;
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
     * 服务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceId?: string;
    /**
     * 服务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceName?: string;
    /**
     * API 请求路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * Api 映射路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PathMapping?: string;
    /**
     * 请求方法
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Method?: string;
    /**
     * 所属分组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 是否禁用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsableStatus?: string;
    /**
     * 发布状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleaseStatus?: string;
    /**
     * 开启限流
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RateLimitStatus?: string;
    /**
     * 是否开启mock
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MockStatus?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: string;
    /**
     * 发布时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleasedTime?: string;
    /**
     * 所属分组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * API 超时，单位毫秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Timeout?: number;
    /**
     * Api所在服务host
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Host?: string;
    /**
     * API类型。 ms ： 微服务API； external :外部服务Api
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApiType?: string;
    /**
     * Api描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * API路径匹配类型。normal：普通API；wildcard：通配API。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApiMatchType?: string;
    /**
     * RPC 额外信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RpcExt?: string;
    /**
     * 部署组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayDeployGroupId?: string;
    /**
     * md5
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5?: string;
    /**
     * RPC 类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RpcType?: string;
}
/**
 * DeleteUnitRule返回参数结构体
 */
export interface DeleteUnitRuleResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 配置项发布信息数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<ConfigRelease>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindPlugin返回参数结构体
 */
export interface BindPluginResponse {
    /**
     * 返回结果，成功失败
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
 * 单元化命名空间翻页对象
 */
export interface TsfPageUnitNamespace {
    /**
     * 记录总数
     */
    TotalCount?: number;
    /**
     * 记录实体列表
     */
    Content?: Array<UnitNamespace>;
}
/**
 * 分页的 ContainerEvent
 */
export interface TsfPageContainerEvent {
    /**
     * 返回个数
     */
    TotalCount: number;
    /**
     * events 数组
     */
    Content: Array<ContainerEvent>;
}
/**
 * CreateMicroserviceWithDetailResp请求参数结构体
 */
export interface CreateMicroserviceWithDetailRespRequest {
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
 * 业务日志配置解析规则
 */
export interface BusinessLogConfigSchema {
    /**
     * 解析规则类型
     */
    SchemaType: number;
    /**
     * 解析规则内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaContent?: string;
    /**
     * 解析规则时间格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaDateFormat?: string;
    /**
     * 解析规则对应的多行匹配规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaMultilinePattern?: string;
    /**
     * 解析规则创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaCreateTime?: string;
    /**
     * 用户填写的解析规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SchemaPatternLayout?: string;
}
/**
 * 单值指标
 */
export interface MetricDataSingleValue {
    /**
     * 指标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricName: string;
    /**
     * 统计方式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricFunction: string;
    /**
     * 指标值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetricDataValue: string;
    /**
     * 日环比
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DailyPercent: number;
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
 * DeleteApiRateLimitRule请求参数结构体
 */
export interface DeleteApiRateLimitRuleRequest {
    /**
     * 限流规则ID
     */
    RuleId: string;
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
    /**
     * 程序包类型数组支持（fatjar jar war tar.gz zip）
     */
    PackageTypeList?: Array<string>;
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
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeScheduleStrategyType?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeScheduleOptions?: Array<CommonOption>;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StrongAffinityList?: Array<CommonOption>;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeakAffinityList?: Array<CommonOption>;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeakAffinityWeight?: number;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvailableZoneScatterScheduleType?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvailableZoneScatterScheduleRules?: Array<AvailableZoneScatterScheduleRule>;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodScheduleStrategyType?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomPodSchedule?: CustomPodSchedule;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TolerateScheduleType?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomTolerateSchedules?: Array<CustomTolerateSchedule>;
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
 * ReleaseConfigWithDetailResp请求参数结构体
 */
export interface ReleaseConfigWithDetailRespRequest {
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
     * 执行类型，unicast/broadcast
     */
    ExecuteType: string;
    /**
     * 任务类型,java
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
     * 判断任务成功率的阈值，如100
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUsableUnitNamespaces返回参数结构体
 */
export interface DescribeUsableUnitNamespacesResponse {
    /**
     * 单元化命名空间对象列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageUnitNamespace;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReleaseFileConfig返回参数结构体
 */
export interface ReleaseFileConfigResponse {
    /**
     * 发布结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * jvm监控数据线程数据封装
 */
export interface ThreadPicture {
    /**
     * 总线程数
     */
    ThreadCount?: Array<CurvePoint>;
    /**
     * 活跃线程数
     */
    ThreadActive?: Array<CurvePoint>;
    /**
     * 守护线程数
     */
    DeamonThreadCount?: Array<CurvePoint>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    GroupId?: string;
    /**
     * 部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
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
     * 启动参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupParameters?: string;
    /**
     * 部署组资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupResourceType?: string;
    /**
     * 应用微服务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppMicroServiceType?: string;
}
/**
 * CreateApiRateLimitRuleWithDetailResp返回参数结构体
 */
export interface CreateApiRateLimitRuleWithDetailRespResponse {
    /**
     * 创建的规则 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: ApiRateLimitRule;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskRecords请求参数结构体
 */
export interface DescribeTaskRecordsRequest {
    /**
     * 翻页偏移量。
     */
    Offset?: number;
    /**
     * 翻页查询单页数量。
     */
    Limit?: number;
    /**
     * 模糊查询关键字，支持任务ID和任务名称。
     */
    SearchWord?: string;
    /**
     * 任务启用状态。enabled/disabled
     */
    TaskState?: string;
    /**
     * 分组ID。
     */
    GroupId?: string;
    /**
     * 任务类型。
     */
    TaskType?: string;
    /**
     * 任务触发类型，UNICAST、BROADCAST。
     */
    ExecuteType?: string;
    /**
     * 无
     */
    Ids?: Array<string>;
}
/**
 * 自定义容忍调度规则列表
 */
export interface CustomTolerateSchedule {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Effect?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TolerationSeconds?: number;
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
    Result: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 独占实例
 */
export interface ExclusiveInstance {
    /**
     * 配置中心类型[Registration、Configuration]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CenterType?: string;
    /**
     * 实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 实例类型[Polaris]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType?: string;
    /**
     * 实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 实例地域id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: string;
    /**
     * 实例命名空间ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceNamespaceId?: string;
}
/**
 * DeleteApplication请求参数结构体
 */
export interface DeleteApplicationRequest {
    /**
     * 应用ID
     */
    ApplicationId: string;
    /**
     * 是否删除镜像仓库
     */
    SyncDeleteImageRepository?: boolean;
}
/**
 * DescribeUnitNamespaces请求参数结构体
 */
export interface DescribeUnitNamespacesRequest {
    /**
     * 网关实体ID
     */
    GatewayInstanceId: string;
    /**
     * 根据命名空间名或ID模糊查询
     */
    SearchWord?: string;
    /**
     * 翻页查询偏移量
     */
    Offset?: number;
    /**
     * 翻页查询每页记录数
     */
    Limit?: number;
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
    GroupId?: string;
    /**
     * 部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 部署组描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupDesc?: string;
    /**
     * 部署组更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 部署组启动参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartupParameters?: string;
    /**
     * 命名空间ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceId?: string;
    /**
     * 部署组创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 命名空间名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceName?: string;
    /**
     * 应用微服务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceType?: string;
    /**
     * 部署组资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupResourceType?: string;
    /**
     * 部署组更新时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: number;
    /**
     * 部署应用描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeployDesc?: string;
    /**
     * 部署组备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: string;
}
/**
 * API 响应的参数结构描述
 */
export interface ApiResponseDescr {
    /**
     * 参数描述
     */
    Name?: string;
    /**
     * 参数类型
     */
    Type?: string;
    /**
     * 参数描述
     */
    Description?: string;
}
/**
 * DescribeBusinessLogConfigs请求参数结构体
 */
export interface DescribeBusinessLogConfigsRequest {
    /**
     * 偏移量，取值范围大于等于0，默认值为0
     */
    Offset?: number;
    /**
     * 单页请求配置数量，取值范围[1, 50]，默认值为10
     */
    Limit?: number;
    /**
     * 模糊匹配关键词
     */
    SearchWord?: string;
    /**
     * 无
     */
    DisableProgramAuthCheck?: boolean;
    /**
     * 无
     */
    ConfigIdList?: Array<string>;
}
/**
 * DeleteConfigTemplate请求参数结构体
 */
export interface DeleteConfigTemplateRequest {
    /**
     * 无
     */
    ConfigTemplateId: string;
}
/**
 * DescribePluginInstances请求参数结构体
 */
export interface DescribePluginInstancesRequest {
    /**
     * 分组或者API的ID
     */
    ScopeValue: string;
    /**
     * 翻页偏移量
     */
    Offset: number;
    /**
     * 每页展示的条数
     */
    Limit: number;
    /**
     * 绑定: true; 未绑定: false
     */
    Bound?: boolean;
    /**
     * 插件类型
     */
    Type?: string;
    /**
     * 搜索关键字
     */
    SearchWord?: string;
}
/**
 * ApiRequestDescr
 */
export interface ApiRequestDescr {
    /**
     * 参数名称
     */
    Name?: string;
    /**
     * 参数类型
     */
    Type?: string;
    /**
     * 参数位置
     */
    In?: string;
    /**
     * 参数描述
     */
    Description?: string;
    /**
     * 参数是否必须
     */
    Required?: boolean;
    /**
     * 参数的默认值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultValue?: string;
}
/**
 * API版本数组
 */
export interface ApiVersionArray {
    /**
     * App ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * App 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * App 包版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgVersion?: string;
}
/**
 * TSF Envoy网关服务配置
 */
export interface GatewayConfig {
    /**
     * 服务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
}
/**
 * 描述配置项绑定的部署组
 */
export interface DeliveryConfigBindGroups {
    /**
     * 公共条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<DeliveryConfigBindGroup>;
}
/**
 * DescribeInovcationIndicators返回参数结构体
 */
export interface DescribeInovcationIndicatorsResponse {
    /**
     * 服务调用监控指标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: InvocationIndicator;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 多值数据点集合
 */
export interface MultiValueDataPoints {
    /**
     * 多值数据点
     */
    Points: Array<MultiValue>;
    /**
     * 指标名称
     */
    MetricName: string;
    /**
     * 多值数据点key列表，每个值表示当前数据点所在区域的下限
     */
    PointKeys: Array<string>;
}
/**
 * 配置项发布日志
 */
export interface ConfigReleaseLog {
    /**
     * 配置项发布日志ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigReleaseLogId?: string;
    /**
     * 配置项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigId?: string;
    /**
     * 配置项名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigName?: string;
    /**
     * 配置项版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigVersion?: string;
    /**
     * 部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
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
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 发布时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleaseTime?: string;
    /**
     * 发布描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleaseDesc?: string;
    /**
     * 发布状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleaseStatus?: string;
    /**
     * 上次发布的配置项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastConfigId?: string;
    /**
     * 上次发布的配置项名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastConfigName?: string;
    /**
     * 上次发布的配置项版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastConfigVersion?: string;
    /**
     * 回滚标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RollbackFlag?: boolean;
    /**
     * 发布成功的配置中心
   ALL/EXCLUSIVE/SHARE/NONE
  
  全部发布成功，独占发布成功，共享发布成功，全部发布失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleasedConfigCenter?: string;
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
}
/**
 * Tsf分页集群对象
 */
export interface TsfPageClusterV2 {
    /**
     * 集群总数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 集群列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<ClusterV2>;
}
/**
 * DeleteGatewayApi返回参数结构体
 */
export interface DeleteGatewayApiResponse {
    /**
     * 是否成功
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TSF基本资源信息概览
 */
export interface OverviewBasicResourceUsage {
    /**
     * 应用总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationCount?: number;
    /**
     * 命名空间总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceCount?: number;
    /**
     * 部署组个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupCount?: number;
    /**
     * 程序包存储空间用量，单位字节
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageSpaceUsed?: number;
    /**
     * 已注册实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConsulInstanceCount?: number;
}
/**
 * DescribeUnitRules返回参数结构体
 */
export interface DescribeUnitRulesResponse {
    /**
     * 分页列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: Array<TsfPageUnitRule>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 过滤条件
     */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 分页个数，默认为20，最大100
     */
    Limit?: number;
}
/**
 * ReassociateBusinessLogConfig返回参数结构体
 */
export interface ReassociateBusinessLogConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 路径重写创建对象
 */
export interface PathRewriteCreateObject {
    /**
     * 网关部署组ID
     */
    GatewayGroupId: string;
    /**
     * 正则表达式
     */
    Regex: string;
    /**
     * 替换的内容
     */
    Replacement: string;
    /**
     * 是否屏蔽映射后路径，Y: 是 N: 否
     */
    Blocked: string;
    /**
     * 规则顺序，越小优先级越高
     */
    Order: number;
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
     * 鉴权类型。 secret： 密钥鉴权； none:无鉴权
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
    /**
     * 网关实体ID
     */
    GatewayInstanceId?: string;
}
/**
 * DeleteUnitRule请求参数结构体
 */
export interface DeleteUnitRuleRequest {
    /**
     * 规则ID
     */
    Id: string;
}
/**
 * 应用列表其它字段
 */
export interface ApplicationAttribute {
    /**
     * 总实例个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCount?: number;
    /**
     * 运行实例个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunInstanceCount?: number;
    /**
     * 应用下部署组个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupCount?: number;
    /**
     * 运行中部署组个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunningGroupCount?: string;
    /**
     * 异常部署组个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AbnormalCount?: string;
}
/**
 * 工作流最近批次的状态
 */
export interface TaskFlowLastBatchState {
    /**
     * 批次ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowBatchId?: string;
    /**
     * 批次历史ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowBatchLogId?: string;
    /**
     * 状态,WAITING/SUCCESS/FAILED/RUNNING/TERMINATING
  注意：此字段可能返回 null，表示取不到有效值。
     */
    State?: string;
}
/**
 * DeletePkgs返回参数结构体
 */
export interface DeletePkgsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeBusinessLogConfigs返回参数结构体
 */
export interface DescribeBusinessLogConfigsResponse {
    /**
     * 业务日志配置列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageBusinessLogConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分页的应用描述信息字段
 */
export interface ApplicationForPage {
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 应用描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationDesc?: string;
    /**
     * 应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 微服务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceType?: string;
    /**
     * 编程语言
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgLang?: string;
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
     * 应用资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationResourceType?: string;
    /**
     * 应用runtime类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationRuntimeType?: string;
    /**
     * Apigateway的serviceId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApigatewayServiceId?: string;
    /**
     * 应用备注名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationRemarkName?: string;
    /**
     * 服务配置信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceConfigList?: Array<ServiceConfig>;
    /**
     * IgnoreCreateImageRepository
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IgnoreCreateImageRepository?: boolean;
    /**
     * Apm业务系统id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApmInstanceId?: string;
    /**
     * Apm业务系统Name
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApmInstanceName?: string;
    /**
     * 同步删除镜像仓库
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SyncDeleteImageRepository?: boolean;
    /**
     * 应用微服务子类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceSubType?: string;
    /**
     * 应用编程语言类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgramLanguage?: string;
    /**
     * 开发框架类型[SpringCloud，Dubbo，Go-GRPC，Other]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FrameworkType?: string;
    /**
     * 注册配置治理信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceGovernanceConfig?: ServiceGovernanceConfig;
    /**
     * 微服务类型列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceTypeList?: Array<string>;
    /**
     * 是否同时创建镜像仓库
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateSameNameImageRepository?: boolean;
}
/**
 * DescribeInvocationMetricScatterPlot请求参数结构体
 */
export interface DescribeInvocationMetricScatterPlotRequest {
    /**
     * 查询开始时间
     */
    StartTime?: string;
    /**
     * 查询结束时间
     */
    EndTime?: string;
    /**
     * 查询时间粒度，单位秒。可选值：60、3600、86400。
     */
    Period?: number;
    /**
     * 查询指标维度, 不能为空。可选 NamespaceId, GroupId, InstanceId, OperationName, ServiceName, PeerServiceName, PeerOperationName
     */
    MetricDimensions?: Array<MetricDimension>;
    /**
     * 查询指标名， 不能为空。仅支持 range_count_duratioin 为 key 下的 sum 方法
     */
    Metrics?: Array<Metric>;
    /**
     * 视图视角。可选值：SERVER, CLIENT。默认为SERVER
     */
    Kind?: string;
}
/**
 * CreateTaskFlow返回参数结构体
 */
export interface CreateTaskFlowResponse {
    /**
     * 工作流 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * IdList
     */
    MicroserviceIdList?: Array<string>;
    /**
     * 搜索的服务名列表
     */
    MicroserviceNameList?: Array<string>;
    /**
     * 注册中心实例id
     */
    ConfigCenterInstanceId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInvocationMetricDataCurve请求参数结构体
 */
export interface DescribeInvocationMetricDataCurveRequest {
    /**
     * 查询开始时间
     */
    StartTime?: string;
    /**
     * 查询结束时间
     */
    EndTime?: string;
    /**
     * 查询时间粒度，单位秒可选值：60、3600、86400
     */
    Period?: number;
    /**
     * 查询指标维度，不能为空，支持 ServiceName, OperationName, PeerServiceName, PeerOperationName
     */
    MetricDimensions?: Array<MetricDimension>;
    /**
     * 查询指标名，不能为空.
     */
    Metrics?: Array<Metric>;
    /**
     * 视图视角。可选值：SERVER, CLIENT。默认为SERVER
     */
    Kind?: string;
    /**
     * 类型。组件监控使用，可选值：SQL 或者 NoSQL
     */
    Type?: string;
}
/**
 * 虚拟机部署组其他字段
 */
export interface VmGroupOther {
    /**
     * 部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 程序包ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageId?: string;
    /**
     * 程序包名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageName?: string;
    /**
     * 程序包版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PackageVersion?: string;
    /**
     * 部署组实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCount?: number;
    /**
     * 部署组运行中实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RunInstanceCount?: number;
    /**
     * 部署组中停止实例数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffInstanceCount?: number;
    /**
     * 部署组状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupStatus?: string;
    /**
     * 服务配置信息是否匹配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNotEqualServiceConfig?: boolean;
    /**
     * HealthCheckSettings
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckSettings?: HealthCheckSettings;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 网关API简单信息
 */
export interface GatewayGroupApiVo {
    /**
     * API ID
     */
    ApiId?: string;
    /**
     * API 请求路径
     */
    Path?: string;
    /**
     * API 微服务名称
     */
    MicroserviceName?: string;
    /**
     * API 请求方法
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Method?: string;
    /**
     * 命名空间名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceName?: string;
}
/**
 * 业务日志配置关联部署组信息
 */
export interface BusinessLogConfigAssociatedGroup {
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
     * 部署组所属应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId: string;
    /**
     * 部署组所属应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName: string;
    /**
     * 部署组所属应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType: string;
    /**
     * 部署组所属命名空间ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceId: string;
    /**
     * 部署组所属命名空间名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceName: string;
    /**
     * 部署组所属集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId: string;
    /**
     * 部署组所属集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName: string;
    /**
     * 部署组所属集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType: string;
    /**
     * 部署组关联日志配置时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssociatedTime: string;
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
    /**
     * IdList
     */
    ApplicationIdList?: Array<string>;
    /**
     * 查询多种微服务类型的应用
     */
    MicroserviceTypeList?: Array<string>;
}
/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
    /**
     * 任务ID
     */
    TaskId: string;
    /**
     * 任务历史ID
     */
    TaskLogId?: string;
}
/**
 * 多值数据
 */
export interface MultiValue {
    /**
     * 数据点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Values?: Array<number>;
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
 * 文件配置项发布信息列表
 */
export interface TsfPageFileConfigRelease {
    /**
     * 数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<FileConfigRelease>;
}
/**
 * DescribeLaneRules请求参数结构体
 */
export interface DescribeLaneRulesRequest {
    /**
     * 每页展示的条数
     */
    Limit?: number;
    /**
     * 翻页偏移量
     */
    Offset?: number;
    /**
     * 搜索关键词
     */
    SearchWord?: string;
    /**
     * 泳道规则ID（用于精确搜索）
     */
    RuleId?: string;
    /**
     * 无
     */
    RuleIdList?: Array<string>;
}
/**
 * DescribeContainerEvents返回参数结构体
 */
export interface DescribeContainerEventsResponse {
    /**
     * events 分页列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TsfPageContainerEvent;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 微服务网关单元化规则标签
 */
export interface UnitRuleTag {
    /**
     * 标签类型 : U(用户标签)/S(系统标签)
     */
    TagType: string;
    /**
     * 标签名
     */
    TagField: string;
    /**
     * 操作符:IN/NOT_IN/EQUAL/NOT_EQUAL/REGEX
     */
    TagOperator: string;
    /**
     * 标签值
     */
    TagValue: string;
    /**
     * 单元化规则项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitRuleItemId?: string;
    /**
     * 规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
}
/**
 * DescribePluginInstances返回参数结构体
 */
export interface DescribePluginInstancesResponse {
    /**
     * 插件信息列表
     */
    Result?: TsfPageGatewayPlugin;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
}
/**
 * 构成监控数据图的曲线坐标点
 */
export interface CurvePoint {
    /**
     * 当前坐标 X轴的值 当前是日期格式:"yyyy-MM-dd HH:mm:ss"
     */
    Label?: string;
    /**
     * 当前坐标 Y轴的值
     */
    Value?: string;
    /**
     * 该坐标点时间戳
     */
    Timestamp?: string;
}
/**
 * Cos下载所需信息
 */
export interface CosDownloadInfo {
    /**
     * 桶名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
    /**
     * 鉴权信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Credentials?: CosCredentials;
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
 * CreateFileConfig请求参数结构体
 */
export interface CreateFileConfigRequest {
    /**
     * 配置项名称
     */
    ConfigName: string;
    /**
     * 配置项版本
     */
    ConfigVersion: string;
    /**
     * 配置项文件名
     */
    ConfigFileName: string;
    /**
     * 配置项文件内容（原始内容编码需要 utf-8 格式，如果 ConfigFileCode 为 gbk，后台会进行转换）
     */
    ConfigFileValue: string;
    /**
     * 配置项关联应用ID
     */
    ApplicationId: string;
    /**
     * 发布路径
     */
    ConfigFilePath: string;
    /**
     * 配置项版本描述
     */
    ConfigVersionDesc?: string;
    /**
     * 配置项文件编码，utf-8 或 gbk。注：如果选择 gbk，需要新版本 tsf-consul-template （公有云虚拟机需要使用 1.32 tsf-agent，容器需要从文档中获取最新的 tsf-consul-template-docker.tar.gz）的支持
     */
    ConfigFileCode?: string;
    /**
     * 后置命令
     */
    ConfigPostCmd?: string;
    /**
     * Base64编码的配置项
     */
    EncodeWithBase64?: boolean;
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeContainerGroupAttribute返回参数结构体
 */
export interface DescribeContainerGroupAttributeResponse {
    /**
     * 部署组列表-其它字段
     */
    Result?: ContainerGroupOther;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateFileConfig返回参数结构体
 */
export interface CreateFileConfigResponse {
    /**
     * true：创建成功；false：创建失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 容器卷挂载点信息
 */
export interface VolumeMountInfo {
    /**
     * 挂载数据卷名称
     */
    VolumeMountName: string;
    /**
     * 挂载路径
     */
    VolumeMountPath: string;
    /**
     * 挂载子路径
     */
    VolumeMountSubPath?: string;
    /**
     * 读写，1：读 2：读写
     */
    ReadOrWrite?: string;
}
/**
 * tsf-privilege模块，分页数据集列表
 */
export interface PagedProgram {
    /**
     * 总条数
     */
    TotalCount?: number;
    /**
     * 数据集列表
     */
    Content?: Array<Program>;
}
/**
 * 查询网关API监控明细数据（单元化网关使用详情）
 */
export interface GroupUnitApiUseStatistics {
    /**
     * 总记录数
     */
    TotalCount: number;
    /**
     * 查询网关API监控明细对象集合
     */
    Content: Array<GroupUnitApiDailyUseStatistics>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeContainerGroupDeployInfo请求参数结构体
 */
export interface DescribeContainerGroupDeployInfoRequest {
    /**
     * 实例所属 groupId
     */
    GroupId: string;
}
/**
 * DescribeDeliveryConfigs请求参数结构体
 */
export interface DescribeDeliveryConfigsRequest {
    /**
     * 关键字
     */
    SearchWord?: string;
    /**
     * 偏移
     */
    Offset?: number;
    /**
     * 搜索条数
     */
    Limit?: number;
    /**
     * 数据集idList
     */
    ProgramIdList?: Array<string>;
    /**
     * ConfigIdList
     */
    ConfigIdList?: Array<string>;
}
/**
 * DisassociateBusinessLogConfig请求参数结构体
 */
export interface DisassociateBusinessLogConfigRequest {
    /**
     * 业务日志配置项ID列表
     */
    ConfigIdList: Array<string>;
    /**
     * TSF分组ID
     */
    GroupId: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeFileConfigReleases请求参数结构体
 */
export interface DescribeFileConfigReleasesRequest {
    /**
     * 配置项ID
     */
    ConfigId?: string;
    /**
     * 配置项名称
     */
    ConfigName?: string;
    /**
     * 部署组ID
     */
    GroupId?: string;
    /**
     * 命名空间ID
     */
    NamespaceId?: string;
    /**
     * 集群ID
     */
    ClusterId?: string;
    /**
     * 应用ID
     */
    ApplicationId?: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 每页条数
     */
    Limit?: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
    /**
     * 任务详情
     */
    Result?: TaskRecord;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 空目录选项
 */
export interface EmptyDirOption {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableMemory?: boolean;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageCapacity?: number;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageUnit?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SizeLimit?: string;
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
 * RevocationPublicConfig请求参数结构体
 */
export interface RevocationPublicConfigRequest {
    /**
     * 配置项发布ID
     */
    ConfigReleaseId: string;
}
/**
 * ModifyLaneRule返回参数结构体
 */
export interface ModifyLaneRuleResponse {
    /**
     * 操作状态。成功：true，失败：false
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 简单部署组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<SimpleGroup>;
}
/**
 * DescribeGroupAttribute请求参数结构体
 */
export interface DescribeGroupAttributeRequest {
    /**
     * 部署组ID字段
     */
    GroupId: string;
}
/**
 * ModifyCluster返回参数结构体
 */
export interface ModifyClusterResponse {
    /**
     * 更新集群详情操作是否成功。
  true： 操作成功。
  false：操作失败。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 包信息
 */
export interface PkgInfo {
    /**
     * 程序包ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgId?: string;
    /**
     * 程序包名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgName?: string;
    /**
     * 程序包类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgType?: string;
    /**
     * 程序包版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgVersion?: string;
    /**
     * 程序包描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgDesc?: string;
    /**
     * 上传时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UploadTime?: string;
    /**
     * 程序包MD5
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Md5?: string;
    /**
     * 程序包状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgPubStatus?: number;
    /**
     * 程序包关联关系
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PkgBindInfo?: Array<PkgBind>;
}
/**
 * 部署组实例列表
 */
export interface GroupPod {
    /**
     * 实例名称(对应到kubernetes的pod名称)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodName?: string;
    /**
     * 实例ID(对应到kubernetes的pod id)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PodId?: string;
    /**
     * 实例状态，请参考后面的实例以及容器的状态定义。启动中（pod 未 ready）：Starting；运行中：Running；异常：Abnormal；停止：Stopped；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 实例处于当前状态的原因，例如容器下载镜像失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reason?: string;
    /**
     * 主机IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeIp?: string;
    /**
     * 实例IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ip?: string;
    /**
     * 实例中容器的重启次数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RestartCount?: number;
    /**
     * 实例中已就绪容器的个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReadyCount?: number;
    /**
     * 运行时长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Runtime?: string;
    /**
     * 实例启动时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedAt?: string;
    /**
     * 服务实例状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceInstanceStatus?: string;
    /**
     * 机器实例可使用状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceAvailableStatus?: string;
    /**
     * 机器实例状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceStatus?: string;
    /**
     * 节点实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeInstanceId?: string;
    /**
     * 预期副本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpecTotalCount?: string;
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
 * StopGroup返回参数结构体
 */
export interface StopGroupResponse {
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: TaskId;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePathRewrites请求参数结构体
 */
export interface CreatePathRewritesRequest {
    /**
     * 路径重写列表
     */
    PathRewrites: PathRewriteCreateObject;
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
 * ValueFrom 通用结构
 */
export interface CommonRef {
    /**
     * 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * Key值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key?: string;
}
/**
 * 标准输出日志
 */
export interface StdoutLogV2 {
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 日志内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: string;
    /**
     * 日志时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Timestamp?: number;
    /**
     * 实例IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceIp?: string;
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
 * DescribeEnabledUnitRule请求参数结构体
 */
export interface DescribeEnabledUnitRuleRequest {
    /**
     * 网关实体ID
     */
    GatewayInstanceId: string;
}
/**
 * CreateConfigTemplate请求参数结构体
 */
export interface CreateConfigTemplateRequest {
    /**
     * 配置模板名称
     */
    ConfigTemplateName: string;
    /**
     * 配置模板对应的微服务框架
     */
    ConfigTemplateType: string;
    /**
     * 配置模板数据
     */
    ConfigTemplateValue: string;
    /**
     * 配置模板描述
     */
    ConfigTemplateDesc?: string;
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
}
/**
 * DescribeApiGroup返回参数结构体
 */
export interface DescribeApiGroupResponse {
    /**
     * API分组信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result: ApiGroupInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 服务配置
 */
export interface ServiceConfig {
    /**
     * 服务名
     */
    Name: string;
    /**
     * 端口信息列表
     */
    Ports: Array<Ports>;
    /**
     * 健康检查配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheck?: HealthCheckConfig;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 服务调用监控指标
 */
export interface InvocationIndicator {
    /**
     * 总请求数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvocationQuantity?: number;
    /**
     * 请求成功率，百分比
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvocationSuccessRate?: number;
    /**
     * 请求平均耗时，单位毫秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvocationAvgDuration?: number;
    /**
     * 成功请求数时间分布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvocationSuccessDistribution?: Array<IndicatorCoord>;
    /**
     * 失败请求数时间分布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvocationFailedDistribution?: Array<IndicatorCoord>;
    /**
     * 状态码分布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvocationStatusDistribution?: Array<IndicatorCoord>;
    /**
     * 时延分布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvocationDurationDistribution?: Array<IndicatorCoord>;
    /**
     * 并发请求次数时间分布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvocationQuantityDistribution?: Array<IndicatorCoord>;
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
 * OperateApplicationTcrBinding返回参数结构体
 */
export interface OperateApplicationTcrBindingResponse {
    /**
     * 是否成功
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DisableUnitRoute请求参数结构体
 */
export interface DisableUnitRouteRequest {
    /**
     * 网关实体ID
     */
    Id: string;
}
/**
 * DescribeUnitRules请求参数结构体
 */
export interface DescribeUnitRulesRequest {
    /**
     * 网关实体ID
     */
    GatewayInstanceId: string;
    /**
     * 根据规则名或备注内容模糊查询
     */
    SearchWord?: string;
    /**
     * 启用状态, disabled: 未发布， enabled: 发布
     */
    Status?: string;
    /**
     * 翻页查询偏移量
     */
    Offset?: number;
    /**
     * 翻页查询每页记录数
     */
    Limit?: number;
}
/**
 * UpdateConfigTemplate请求参数结构体
 */
export interface UpdateConfigTemplateRequest {
    /**
     * 配置模板id
     */
    ConfigTemplateId: string;
    /**
     * 配置模板名称
     */
    ConfigTemplateName: string;
    /**
     * 配置模板对应的微服务框架
     */
    ConfigTemplateType: string;
    /**
     * 配置模板数据
     */
    ConfigTemplateValue: string;
    /**
     * 配置模板描述
     */
    ConfigTemplateDesc?: string;
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
     * 搜索关键字，支持命名空间名称或服务名称
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
 * 容器部署组详情
 */
export interface ContainerGroupDetail {
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
     * 实例总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceNum?: number;
    /**
     * 已启动实例总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CurrentNum?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 镜像server
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Server?: string;
    /**
     * 镜像名，如/tsf/nginx
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Reponame?: string;
    /**
     * 镜像版本名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagName?: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
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
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 负载均衡ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LbIp?: string;
    /**
     * 应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * Service ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterIp?: string;
    /**
     * NodePort端口，只有公网和NodePort访问方式才有值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodePort?: number;
    /**
     * 最大分配的 CPU 核数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuLimit?: string;
    /**
     * 最大分配的内存 MiB 数，对应 K8S limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemLimit?: string;
    /**
     * 0:公网 1:集群内访问 2：NodePort
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessType?: number;
    /**
     * 更新方式：0:快速更新 1:滚动更新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateType?: number;
    /**
     * 更新间隔,单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateIvl?: number;
    /**
     * 端口数组对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProtocolPorts?: Array<ProtocolPort>;
    /**
     * 环境变量数组对象
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Envs?: Array<Env>;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * pod错误信息描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
    /**
     * 部署组状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 服务类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MicroserviceType?: string;
    /**
     * 初始分配的 CPU 核数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuRequest?: string;
    /**
     * 初始分配的内存 MiB 数，对应 K8S request
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemRequest?: string;
    /**
     * 子网id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 部署组资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupResourceType?: string;
    /**
     * 部署组实例个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceCount?: number;
    /**
     * 部署组更新时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: number;
    /**
     * kubernetes滚动更新策略的MaxSurge参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxSurge?: string;
    /**
     * kubernetes滚动更新策略的MaxUnavailable参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxUnavailable?: string;
    /**
     * 部署组健康检查设置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckSettings?: HealthCheckSettings;
    /**
     * 允许PlainYamlDeploy
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AllowPlainYamlDeploy?: boolean;
    /**
     * 是否不等于ServiceConfig
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsNotEqualServiceConfig?: boolean;
    /**
     * 仓库名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepoName?: string;
    /**
     * 别名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Alias?: string;
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
 * 配置模板对象
 */
export interface ConfigTemplate {
    /**
     * 配置模板Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigTemplateId?: string;
    /**
     * 配置模板名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigTemplateName?: string;
    /**
     * 配置模板描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigTemplateDesc?: string;
    /**
     * 配置模板对应的微服务框架
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigTemplateType?: string;
    /**
     * 配置模板数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigTemplateValue?: string;
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
}
/**
 * DescribeUnitApiUseDetail返回参数结构体
 */
export interface DescribeUnitApiUseDetailResponse {
    /**
     * 单元化使用统计对象
     */
    Result?: GroupUnitApiUseStatistics;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInvocationMetricScatterPlot返回参数结构体
 */
export interface DescribeInvocationMetricScatterPlotResponse {
    /**
     * 多值时间统计指标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: InvocationMetricScatterPlot;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUsableUnitNamespaces请求参数结构体
 */
export interface DescribeUsableUnitNamespacesRequest {
    /**
     * 根据命名空间名或ID模糊查询
     */
    SearchWord?: string;
    /**
     * 翻页查询偏移量
     */
    Offset?: number;
    /**
     * 翻页查询每页记录数
     */
    Limit?: number;
}
/**
 * DescribeContainerGroups请求参数结构体
 */
export interface DescribeContainerGroupsRequest {
    /**
     * 分组所属应用ID。
     */
    ApplicationId: string;
    /**
     * 搜索字段，模糊搜索groupName字段
     */
    SearchWord?: string;
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
 * 业务日志配置项列表
 */
export interface TsfPageBusinessLogConfig {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 业务日志配置项列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<BusinessLogConfig>;
}
/**
 * DescribePrograms返回参数结构体
 */
export interface DescribeProgramsResponse {
    /**
     * 数据集列表
     */
    Result?: PagedProgram;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * tsf-privilege模块，数据项
 */
export interface ProgramItem {
    /**
     * 数据项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgramItemId?: string;
    /**
     * 资源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource?: Resource;
    /**
     * 数据值列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueList?: Array<string>;
    /**
     * 全选标识，true: 全选；false: 非全选
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAll?: boolean;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTime?: number;
    /**
     * 最后更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdateTime?: number;
    /**
     * 删除标识，true: 可删除；false: 不可删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlag?: boolean;
    /**
     * 数据集ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProgramId?: string;
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
    /**
     * 过滤字段
     */
    PodNameList?: Array<string>;
    /**
     * 新老版本pod批次标识
     */
    DeployVersion?: string;
    /**
     * 任务ID
     */
    TaskId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述投递配置项绑定的部署组
 */
export interface DeliveryConfigBindGroup {
    /**
     * 配置id
     */
    ConfigId: string;
    /**
     * 配置名
     */
    ConfigName: string;
    /**
     * 采集路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CollectPath: Array<string>;
    /**
     * 关联部署组信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Groups: Array<GroupInfo>;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * KafkaVIp
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaVIp?: string;
    /**
     * KafkaAddress
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaAddress?: string;
    /**
     * KafkaVPort
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaVPort?: string;
    /**
     * Topic
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Topic?: string;
    /**
     * LineRule
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LineRule?: string;
    /**
     * CustomRule
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomRule?: string;
    /**
     * EnableGlobalLineRule
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableGlobalLineRule?: boolean;
    /**
     * EnableAuth
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableAuth?: boolean;
    /**
     * Username
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Username?: string;
    /**
     * Password
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
    /**
     * KafkaInfos
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KafkaInfos?: Array<DeliveryKafkaInfo>;
}
/**
 * 自定义Pod调度规则
 */
export interface CustomPodSchedule {
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ForceSchedule?: ForceSchedule;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TrySchedule?: TrySchedule;
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
 * 预热配置
 */
export interface WarmupSetting {
    /**
     * 是否开启预热
     */
    Enabled?: boolean;
    /**
     * 预热时间
     */
    WarmupTime?: number;
    /**
     * 预热曲率，取值 1~5
     */
    Curvature?: number;
    /**
     * 是否开启预热保护，在开启保护的情况下，超过 50% 的节点处于预热中，则会中止预热
     */
    EnabledProtection?: boolean;
}
/**
 * EnableUnitRoute请求参数结构体
 */
export interface EnableUnitRouteRequest {
    /**
     * 网关实体ID
     */
    Id: string;
}
/**
 * 应用分页信息
 */
export interface TsfPageApplication {
    /**
     * 应用总数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 应用信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<ApplicationForPage>;
    /**
     * 获取部署组实例列表返回的原始批次个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpecTotalCount?: number;
}
/**
 * DisableLaneRule请求参数结构体
 */
export interface DisableLaneRuleRequest {
    /**
     * 泳道规则ID
     */
    RuleId: string;
}
/**
 * 包含虚拟机所在TSF中的位置信息
 */
export interface InstanceEnrichedInfo {
    /**
     * 机器ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 机器名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 机器内网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LanIp?: string;
    /**
     * 机器外网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WanIp?: string;
    /**
     * 机器所在VPC
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 机器运行状态 Pending Running Stopped Rebooting Starting Stopping Abnormal Unknown
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceStatus?: string;
    /**
     * 机器可用状态（表示机器上的Agent在线）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceAvailableStatus?: string;
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 应用类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 集群类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterType?: string;
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
     * 机器所在部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
}
/**
 * DescribeResourceTaskStatus请求参数结构体
 */
export interface DescribeResourceTaskStatusRequest {
    /**
     * 任务ID
     */
    TaskId: string;
}
/**
 * DescribeInvocationMetricDataCurve返回参数结构体
 */
export interface DescribeInvocationMetricDataCurveResponse {
    /**
     * 指标监控数据曲线集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: Array<MetricDataCurve>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * DescribeFileConfigs请求参数结构体
 */
export interface DescribeFileConfigsRequest {
    /**
     * 配置项ID
     */
    ConfigId?: string;
    /**
     * 配置项ID列表
     */
    ConfigIdList?: Array<string>;
    /**
     * 配置项名称
     */
    ConfigName?: string;
    /**
     * 应用ID
     */
    ApplicationId?: string;
    /**
     * 偏移量
     */
    Offset?: number;
    /**
     * 每页条数
     */
    Limit?: number;
    /**
     * 配置项版本
     */
    ConfigVersion?: string;
}
/**
 * CreateConfigTemplate返回参数结构体
 */
export interface CreateConfigTemplateResponse {
    /**
     * true：创建成功；false：创建失败
     */
    Result: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    ConfigId?: string;
    /**
     * 配置项名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigName?: string;
    /**
     * 配置项版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigVersion?: string;
    /**
     * 配置项版本描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigVersionDesc?: string;
    /**
     * 配置项值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigValue?: string;
    /**
     * 配置项类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigType?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTime?: string;
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 删除标识，true：可以删除；false：不可删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlag?: boolean;
    /**
     * 最后更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdateTime?: string;
    /**
     * 配置项版本数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigVersionCount?: number;
}
/**
 * 端口对象
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
    /**
     * 端口名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
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
 * CreateMicroserviceWithDetailResp返回参数结构体
 */
export interface CreateMicroserviceWithDetailRespResponse {
    /**
     * 微服务ID
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 业务日志列表
 */
export interface TsfPageBusinessLogV2 {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 业务日志列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<BusinessLogV2>;
    /**
     * 游标ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScrollId?: string;
    /**
     * 查询状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
}
/**
 * 容器 env 的 FieldRef
 */
export interface FieldRef {
    /**
     * k8s 的 FieldPath
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FieldPath?: string;
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
    /**
     * 集群中每个Node上最大的Pod数量。取值范围4～256。不为2的幂值时会向上取最接近的2的幂值。
     */
    MaxNodePodNum?: number;
    /**
     * 集群最大的service数量。取值范围32～32768，不为2的幂值时会向上取最接近的2的幂值。
     */
    MaxClusterServiceNum?: number;
    /**
     * 需要绑定的数据集ID
     */
    ProgramId?: string;
    /**
     * api地址
     */
    KuberneteApiServer?: string;
    /**
     * K : kubeconfig, S : service account
     */
    KuberneteNativeType?: string;
    /**
     * native secret
     */
    KuberneteNativeSecret?: string;
    /**
     * 无
     */
    ProgramIdList?: Array<string>;
    /**
     * 是否开启cls日志功能
     */
    EnableLogCollection?: boolean;
}
/**
 * DescribeDeliveryConfigByGroupId请求参数结构体
 */
export interface DescribeDeliveryConfigByGroupIdRequest {
    /**
     * 部署组id
     */
    GroupId: string;
}
/**
 * 微服务列表信息
 */
export interface TsfPageMicroservice {
    /**
     * 微服务总数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 微服务列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<Microservice>;
}
/**
 * 配置项发布信息
 */
export interface ConfigRelease {
    /**
     * 配置项发布ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigReleaseId?: string;
    /**
     * 配置项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigId?: string;
    /**
     * 配置项名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigName?: string;
    /**
     * 配置项版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigVersion?: string;
    /**
     * 发布时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleaseTime?: string;
    /**
     * 部署组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 部署组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
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
     * 集群ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterId?: string;
    /**
     * 集群名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClusterName?: string;
    /**
     * 发布描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReleaseDesc?: string;
    /**
     * 应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 配置中心发布情况
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigCenters?: Array<TsfConfigCenter>;
    /**
     * DUAL_STATUS_WRITE_REGISTRATION_ON 双写&&双注册开启
  
  DUAL_STATUS_WRITE_REGISTRATION_OFF 双写&&双注册关闭
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DaulStatus?: string;
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
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubTaskConcurrency?: number;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    Path?: string;
    /**
     * 请求方法
     */
    Method?: string;
    /**
     * 方法描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * API状态 0:离线 1:在线
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
}
/**
 * 业务日志配置
 */
export interface BusinessLogConfig {
    /**
     * 配置项ID
     */
    ConfigId?: string;
    /**
     * 配置项名称
     */
    ConfigName?: string;
    /**
     * 配置项日志路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigPath?: string;
    /**
     * 配置项描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigDesc?: string;
    /**
     * 配置项标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigTags?: string;
    /**
     * 配置项对应的ES管道
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigPipeline?: string;
    /**
     * 配置项创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigCreateTime?: string;
    /**
     * 配置项更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigUpdateTime?: string;
    /**
     * 配置项解析规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigSchema?: BusinessLogConfigSchema;
    /**
     * 配置项关联部署组
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    ConfigAssociatedGroups?: Array<BusinesLogConfigAssociatedGroup>;
    /**
     * 配置项关联部署组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigAssociatedGroupList?: Array<BusinessLogConfigAssociatedGroup>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    RuleId?: string;
    /**
     * API ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApiId?: string;
    /**
     * 限流名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
    /**
     * 最大限流qps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxQps?: number;
    /**
     * 生效/禁用, enabled/disabled
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsableStatus?: string;
    /**
     * 规则内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleContent?: string;
    /**
     * Tsf Rule ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TsfRuleId?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: string;
    /**
     * 分页参数limit
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Limit?: number;
    /**
     * 分页参数offset
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Offset?: number;
    /**
     * AppId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
}
/**
 * 用于请求参数中的条件过滤字段
 */
export interface Filter {
    /**
     * 过滤条件名
     */
    Name: string;
    /**
     * 过滤条件匹配值，几个条件间是或关系
     */
    Values: Array<string>;
}
/**
 * DescribeInvocationMetricDataPoint返回参数结构体
 */
export interface DescribeInvocationMetricDataPointResponse {
    /**
     * 单值指标列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: Array<MetricDataSingleValue>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 注册配置治理信息
 */
export interface ServiceGovernanceConfig {
    /**
     * 是否开启服务注册治理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableGovernance?: boolean;
    /**
     * 服务治理类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GovernanceType?: string;
    /**
     * 独享实例列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExclusiveInstances?: Array<ExclusiveInstance>;
}
/**
 * DisableUnitRule返回参数结构体
 */
export interface DisableUnitRuleResponse {
    /**
     * 是否成功
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyApplication请求参数结构体
 */
export interface ModifyApplicationRequest {
    /**
     * 应用ID
     */
    ApplicationId: string;
    /**
     * 应用名称
     */
    ApplicationName?: string;
    /**
     * 应用备注
     */
    ApplicationDesc?: string;
    /**
     * 应用备注名
     */
    ApplicationRemarkName?: string;
    /**
     * 服务配置信息列表
     */
    ServiceConfigList?: Array<ServiceConfig>;
    /**
     * 应用的微服务类型
     */
    MicroserviceType?: string;
    /**
     * 注册配置治理信息
     */
    ServiceGovernanceConfig?: ServiceGovernanceConfig;
    /**
     * 应用开发框架
     */
    FrameworkType?: string;
}
/**
 * DescribePathRewrites返回参数结构体
 */
export interface DescribePathRewritesResponse {
    /**
     * 路径重写翻页对象
     */
    Result?: PathRewritePage;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteGatewayApi请求参数结构体
 */
export interface DeleteGatewayApiRequest {
    /**
     * 分组ID
     */
    GroupId: string;
    /**
     * Api ID 数组
     */
    ApiList: Array<string>;
}
/**
 * ModifyProgram返回参数结构体
 */
export interface ModifyProgramResponse {
    /**
     * true: 更新成功；false: 更新失败
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 添加实例到集群的结果
 */
export interface AddInstanceResult {
    /**
     * 添加集群失败的节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedInstanceIds?: Array<string>;
    /**
     * 添加集群成功的节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuccInstanceIds?: Array<string>;
    /**
     * 添加集群超时的节点列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeoutInstanceIds?: Array<string>;
    /**
     * 失败的节点的失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedReasons?: Array<string>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 单元化规则翻页对象
 */
export interface TsfPageUnitRuleV2 {
    /**
     * 记录总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 记录实体列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<UnitRule>;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    GroupId?: string;
    /**
     * Api Group 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
    /**
     * 分组上下文
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupContext?: string;
    /**
     * 鉴权类型。 secret： 密钥鉴权； none:无鉴权
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthType?: string;
    /**
     * 发布状态, drafted: 未发布。 released: 发布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 分组创建时间 如:2019-06-20 15:51:28
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * 分组更新时间 如:2019-06-20 15:51:28
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: string;
    /**
     * api分组已绑定的网关部署组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindedGatewayDeployGroups?: Array<GatewayDeployGroup>;
    /**
     * api 个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApiCount?: number;
    /**
     * 访问group的ACL类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AclMode?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * 分组类型。 ms： 微服务分组； external:外部Api分组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupType?: string;
    /**
     * 网关实例的类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayInstanceType?: string;
    /**
     * 网关实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayInstanceId?: string;
    /**
     * 命名空间参数key值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceNameKey?: string;
    /**
     * 微服务名参数key值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceNameKey?: string;
    /**
     * 命名空间参数位置，path，header或query，默认是path
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NamespaceNameKeyPosition?: string;
    /**
     * 微服务名参数位置，path，header或query，默认是path
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceNameKeyPosition?: string;
    /**
     * 网关实例ID列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayInstanceIdList?: Array<string>;
}
/**
 * 微服务网关单元化命名空间
 */
export interface UnitNamespace {
    /**
     * 命名空间ID
     */
    NamespaceId: string;
    /**
     * 命名空间Name
     */
    NamespaceName: string;
    /**
     * 单元化命名空间ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: string;
    /**
     * 网关实体ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GatewayInstanceId?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedTime?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 网关实体ID
     */
    GatewayInstanceId?: string;
    /**
     * 命名空间参数key值
     */
    NamespaceNameKey?: string;
    /**
     * 微服务名参数key值
     */
    ServiceNameKey?: string;
    /**
     * 命名空间参数位置，path，header或query，默认是path
     */
    NamespaceNameKeyPosition?: string;
    /**
     * 微服务名参数位置，path，header或query，默认是path
     */
    ServiceNameKeyPosition?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount?: number;
    /**
     * 列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<GroupPod>;
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
 * 文件配置项
 */
export interface FileConfig {
    /**
     * 配置项ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigId?: string;
    /**
     * 配置项名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigName?: string;
    /**
     * 配置项版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigVersion?: string;
    /**
     * 配置项版本描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigVersionDesc?: string;
    /**
     * 配置项文件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigFileName?: string;
    /**
     * 配置项文件内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigFileValue?: string;
    /**
     * 配置项文件编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigFileCode?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreationTime?: string;
    /**
     * 配置项归属应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationId?: string;
    /**
     * 应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 删除标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteFlag?: boolean;
    /**
     * 配置项版本数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigVersionCount?: number;
    /**
     * 配置项最后更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastUpdateTime?: string;
    /**
     * 发布路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigFilePath?: string;
    /**
     * 后置命令
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigPostCmd?: string;
    /**
     * 配置项文件长度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigFileValueLength?: number;
}
/**
 * DeployContainerGroup返回参数结构体
 */
export interface DeployContainerGroupResponse {
    /**
     * 部署容器应用是否成功。
  true：成功。
  false：失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ApiDetailInfo 翻页对象
 */
export interface TsfPageApiDetailInfo {
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * API 信息列表
     */
    Content?: Array<ApiDetailInfo>;
}
/**
 * DescribeBasicResourceUsage请求参数结构体
 */
export interface DescribeBasicResourceUsageRequest {
    /**
     * 是否拥有权限查询全租户的，默认 true。注：无论 true 还是 false，PackageSpaceUsed 和 ConsulInstanceCount  都是全租户的
     */
    All?: boolean;
}
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * k8s env 的 ResourceFieldRef
 */
export interface ResourceFieldRef {
    /**
     * k8s 的 Resource
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Resource?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 健康检查配置
 */
export interface HealthCheckConfig {
    /**
     * 健康检查路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Path?: string;
}
/**
 * TSF分页简单应用对象
 */
export interface TsfPageSimpleApplication {
    /**
     * 总条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 简单应用列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: Array<SimpleApplication>;
}
/**
 * 亲和规则
 */
export interface Affinity {
    /**
     * 亲和性范围
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Scope?: string;
    /**
     * 亲和规则的权重
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Weight?: string;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Paths?: Array<CommonOption>;
}
/**
 * 属性字段
 */
export interface PropertyField {
    /**
     * 属性名称
     */
    Name?: string;
    /**
     * 属性类型
     */
    Type?: string;
    /**
     * 属性描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 无
     */
    GroupIdList?: Array<string>;
}
/**
 * 泳道规则标签
 */
export interface LaneRuleTag {
    /**
     * 标签ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagId?: string;
    /**
     * 标签名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagName?: string;
    /**
     * 标签操作符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagOperator?: string;
    /**
     * 标签值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagValue?: string;
    /**
     * 泳道规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LaneRuleId?: string;
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
}
/**
 * ModifyNamespace请求参数结构体
 */
export interface ModifyNamespaceRequest {
    /**
     * 命名空间ID
     */
    NamespaceId: string;
    /**
     * 命名空间名称
     */
    NamespaceName?: string;
    /**
     * 命名空间备注
     */
    NamespaceDesc?: string;
    /**
     * 是否开启高可用
     */
    IsHaEnable?: string;
}
/**
 * 提供给前端控制按钮显示逻辑的字段
 */
export interface OperationInfoDetail {
    /**
     * 不显示的原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisabledReason?: string;
    /**
     * 该按钮是否可点击
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Enabled?: boolean;
    /**
     * 是否显示该按钮
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Supported?: boolean;
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
 * SearchStdoutLog请求参数结构体
 */
export interface SearchStdoutLogRequest {
    /**
     * 机器实例ID， 和  实例 ID 二者必选其一，不能同时为空
     */
    InstanceId?: string;
    /**
     * 单页请求配置数量，取值范围[1, 500]，默认值为100
     */
    Limit?: number;
    /**
     * 检索关键词
     */
    SearchWords?: Array<string>;
    /**
     * 查询起始时间
     */
    StartTime?: string;
    /**
     * 部署组ID，和 InstanceId 二者必选其一，不能同时为空
     */
    GroupId?: string;
    /**
     * 查询结束时间
     */
    EndTime?: string;
    /**
     * 请求偏移量，取值范围大于等于0，默认值为
  0
     */
    Offset?: number;
    /**
     * 排序规则，默认值"time"
     */
    OrderBy?: string;
    /**
     * 排序方式，取值"asc"或"desc"，默认
  值"desc"
     */
    OrderType?: string;
    /**
     * 检索类型，取值"LUCENE", "REGEXP",
  "NORMAL"
     */
    SearchWordType?: string;
    /**
     * 批量请求类型，取值"page"或"scroll"，默认
  值"page"
     */
    BatchType?: string;
    /**
     * 游标ID
     */
    ScrollId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeStatistics请求参数结构体
 */
export interface DescribeStatisticsRequest {
    /**
     * 类型：Interface、Service、Group、Instance、SQL、NoSQL
     */
    Type: string;
    /**
     * 步长，单位s：60、3600、86400
     */
    TimeStep: number;
    /**
     * 偏移量，取值范围大于等于0，默认值为0
     */
    Offset: number;
    /**
     * 单页请求配置数量，取值范围[1, 50]，默认值为10
     */
    Limit: number;
    /**
     * 命名空间Id,此字段，和 NamespaceIdList 或者 MetricDimensionValues 字段包含 namespaceId 维度信息。三者选其一。
     */
    NamespaceId?: string;
    /**
     * 排序字段:AvgTimeConsuming[默认]、RequestCount、ErrorRate。实例监控还支持 CpuPercent
     */
    OrderBy?: string;
    /**
     * 排序方式：ASC:0、DESC:1
     */
    OrderType?: number;
    /**
     * 开始时间：年月日 时分秒2020-05-12 14:43:12， 不能为空
     */
    EndTime?: string;
    /**
     * 开始时间：年月日 时分秒2020-05-12 14:43:12， 不能为空
     */
    StartTime?: string;
    /**
     * 服务名称
     */
    ServiceName?: string;
    /**
     * 搜索关键词
     */
    SearchWord?: string;
    /**
     * 维度
     */
    MetricDimensionValues?: Array<MetricDimensionValue>;
    /**
     * 聚合关键词
     */
    BucketKey?: string;
    /**
     * 数据库
     */
    DbName?: string;
    /**
     * 命名空间id数组
     */
    NamespaceIdList?: Array<string>;
    /**
     * 独占配置中心的ID
     */
    ConfigCenterInstanceId?: string;
}
/**
 * ModifyGroup请求参数结构体
 */
export interface ModifyGroupRequest {
    /**
     * 部署组ID
     */
    GroupId: string;
    /**
     * 部署组名称
     */
    GroupName?: string;
    /**
     * 部署组描述
     */
    GroupDesc?: string;
    /**
     * 部署组备注
     */
    Alias?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    TaskId?: string;
}
/**
 * DescribeImageTags请求参数结构体
 */
export interface DescribeImageTagsRequest {
    /**
     * 应用Id
     */
    ApplicationId?: string;
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
    /**
     * 企业: tcr ；个人: personal或者不填
     */
    RepoType?: string;
    /**
     * TcrRepoInfo值
     */
    TcrRepoInfo?: TcrRepoInfo;
    /**
     * 仓库名
     */
    RepoName?: string;
}
/**
 * Jvm监控内存数据封装
 */
export interface MemoryPicture {
    /**
     * 内存最大值
     */
    Max: Array<CurvePoint>;
    /**
     * 已用内存大小
     */
    Used: Array<CurvePoint>;
    /**
     * 系统分配内存大小
     */
    Committed: Array<CurvePoint>;
}
/**
 * DescribeConfigSummary返回参数结构体
 */
export interface DescribeConfigSummaryResponse {
    /**
     * 配置项分页对象
     */
    Result: TsfPageConfig;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 部署组资源类型；
  DEF — 默认资源类型；
  GW — 网关资源类型；
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreatePathRewrites返回参数结构体
 */
export interface CreatePathRewritesResponse {
    /**
     * true/false
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeConfigTemplate请求参数结构体
 */
export interface DescribeConfigTemplateRequest {
    /**
     * 配置模板Id
     */
    ConfigTemplateId: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
    /**
     * 按时间排序：creation_time；按名称排序：config_name
     */
    OrderBy?: string;
    /**
     * 升序传 0，降序传 1
     */
    OrderType?: number;
    /**
     * 无
     */
    ConfigTagList?: Array<string>;
    /**
     * 无
     */
    DisableProgramAuthCheck?: boolean;
    /**
     * 无
     */
    ConfigIdList?: Array<string>;
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
 * ApiGroupInfo翻页结构体
 */
export interface TsfPageApiGroupInfo {
    /**
     * 总记录数
     */
    TotalCount?: number;
    /**
     * API分组信息
     */
    Content?: Array<ApiGroupInfo>;
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
    NodeId?: string;
    /**
     * 子节点 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChildNodeId?: string;
    /**
     * 是否核心任务,Y/N
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoreNode?: string;
    /**
     * 边类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EdgeType?: string;
    /**
     * 任务节点类型
     */
    NodeType?: string;
    /**
     * X轴坐标位置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PositionX?: string;
    /**
     * Y轴坐标位置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PositionY?: string;
    /**
     * 图 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GraphId?: string;
    /**
     * 工作流 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowId?: string;
    /**
     * 节点名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeName?: string;
    /**
     * 任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 任务历史ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskLogId?: string;
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
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
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
