/**
 * DescribeApplicationYaml返回参数结构体
 */
export interface DescribeApplicationYamlResponse {
    /**
      * base64 后的yaml
注意：此字段可能返回 null，表示取不到有效值。
      */
    Yaml: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 操作日志状态查询条件
 */
export interface OperationLogsCondition {
    /**
      * 状态列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: Array<number>;
}
/**
 * RedeployEdgeUnitApplication返回参数结构体
 */
export interface RedeployEdgeUnitApplicationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEdgeUnitCloud返回参数结构体
 */
export interface CreateEdgeUnitCloudResponse {
    /**
      * tke集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * IECP集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EdgeUnitId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeUnitApplicationBasicInfo请求参数结构体
 */
export interface ModifyEdgeUnitApplicationBasicInfoRequest {
    /**
      * 应用基本信息
      */
    BasicInfo: ApplicationBasicInfo;
    /**
      * 单元ID
      */
    EdgeUnitId?: number;
    /**
      * 应用ID
      */
    ApplicationId?: number;
}
/**
 * CreateEdgeNodeGroup请求参数结构体
 */
export interface CreateEdgeNodeGroupRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * NodeGroup名称
      */
    Name: string;
    /**
      * 命名空间，不填默认为default
      */
    Namespace?: string;
    /**
      * 描述
      */
    Description?: string;
    /**
      * 模版ID数组
      */
    NodeUnitTemplateIDs?: Array<number>;
}
/**
 * CreateEdgeUnitApplicationVisualization请求参数结构体
 */
export interface CreateEdgeUnitApplicationVisualizationRequest {
    /**
      * 基本信息
      */
    BasicInfo: ApplicationBasicInfo;
    /**
      * 基本配置
      */
    BasicConfig: ApplicationBasicConfig;
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 卷列表
      */
    Volumes?: Array<Volume>;
    /**
      * 服务配置
      */
    Service?: Service;
    /**
      * 模版ID
      */
    TemplateID?: number;
    /**
      * Job配置
      */
    Job?: Job;
    /**
      * CronJob配置
      */
    CronJob?: CronJob;
    /**
      * 重新运行策略
      */
    RestartPolicy?: string;
    /**
      * 镜像拉取密钥
      */
    ImagePullSecrets?: Array<string>;
    /**
      * HPA配置
      */
    HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
    /**
      * 初始化容器列表
      */
    InitContainers?: Array<Container>;
    /**
      * 容器列表
      */
    Containers?: Array<Container>;
}
/**
 * GridPod信息
 */
export interface GridPodInfo {
    /**
      * Pod名称
      */
    Name: string;
    /**
      * 命名空间
      */
    NameSpace: string;
    /**
      * 状态(Pending｜Running｜Succeeded｜Failed｜Unknown)
      */
    Status: string;
    /**
      * 节点名
      */
    NodeName: string;
    /**
      * 节点IP
      */
    NodeIP: string;
    /**
      * Pod的IP
      */
    PodIP: string;
    /**
      * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 运行时长（秒）
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunSec: number;
    /**
      * 重启次数
      */
    RestartCount: number;
    /**
      * 集群名称ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterID: string;
}
/**
 * CreateSecret请求参数结构体
 */
export interface CreateSecretRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * secret名
      */
    SecretName: string;
    /**
      * 命名空间（默认:default）
      */
    SecretNamespace?: string;
    /**
      * secret类型(取值范围:DockerConfigJson,Opaque 默认Opaque)
      */
    SecretType?: string;
    /**
      * DockerConfig的序列化base64编码后的字符串
      */
    DockerConfigJson?: string;
    /**
      * Opaque类型的Secret内容
      */
    CloudData?: Array<KeyValueObj>;
    /**
      * DockerConfig配置
      */
    DockerConfig?: DockerConfig;
}
/**
 * DescribeEdgeUnitApplicationYaml请求参数结构体
 */
export interface DescribeEdgeUnitApplicationYamlRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 应用ID
      */
    ApplicationId: number;
}
/**
 * CreateEdgeUnitApplicationVisualization返回参数结构体
 */
export interface CreateEdgeUnitApplicationVisualizationResponse {
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEdgeNodeBatch返回参数结构体
 */
export interface CreateEdgeNodeBatchResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNamespaces返回参数结构体
 */
export interface DescribeNamespacesResponse {
    /**
      * 命名空间信息列表
      */
    Items: Array<NamespaceInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecret返回参数结构体
 */
export interface DescribeSecretResponse {
    /**
      * Secret名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * secret的yaml格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Yaml: string;
    /**
      * secret的json格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Json: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * NodeUnit模版信息
 */
export interface NodeUnitTemplate {
    /**
      * NodeUnit模版ID
      */
    ID: number;
    /**
      * NodeUnit模版名称
      */
    Name: string;
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 包含节点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeList: Array<NodeSimpleInfo>;
    /**
      * NodeGroup列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeGroups: Array<string>;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
}
/**
 * DescribeSecretYamlError返回参数结构体
 */
export interface DescribeSecretYamlErrorResponse {
    /**
      * 校验是通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckPass: boolean;
    /**
      * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrType: number;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrInfo: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeUnitDeployGridItem请求参数结构体
 */
export interface ModifyEdgeUnitDeployGridItemRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * Grid名称
      */
    GridItemName: string;
    /**
      * 负载类型（StatefulSetGrid｜DeploymentGrid）
      */
    WorkloadKind: string;
    /**
      * 副本数
      */
    Replicas: number;
    /**
      * 命名空间，默认default
      */
    Namespace?: string;
}
/**
 * 指定NodeGroup中查询NodeUnit模版
 */
export interface NodeGroupNodeUnitTemplateInfo {
    /**
      * 模版ID
      */
    ID: number;
    /**
      * 名称
      */
    Name: string;
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 包含节点列表
      */
    NodeList: Array<NodeSimpleInfo>;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 是否关联
      */
    Relation: boolean;
}
/**
 * DescribeEdgeUnitMonitorStatus请求参数结构体
 */
export interface DescribeEdgeUnitMonitorStatusRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
}
/**
 * GetMarketComponent返回参数结构体
 */
export interface GetMarketComponentResponse {
    /**
      * 组件ID
      */
    ID: number;
    /**
      * 组件名称
      */
    AppName: string;
    /**
      * 发行组织
      */
    Author: string;
    /**
      * 发布时间
      */
    ReleaseTime: string;
    /**
      * 组件简介
      */
    Outline: string;
    /**
      * 详细介绍链接
      */
    Detail: string;
    /**
      * 图标连接
      */
    Icon: string;
    /**
      * 组件版本
      */
    Version: string;
    /**
      * 组件可视化配置
      */
    WorkloadVisualConfig: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateApplicationVisualization请求参数结构体
 */
export interface CreateApplicationVisualizationRequest {
    /**
      * 基本信息
      */
    BasicInfo: ApplicationBasicInfo;
    /**
      * 基本配置
      */
    BasicConfig: ApplicationBasicConfig;
    /**
      * 卷列表
      */
    Volumes?: Array<Volume>;
    /**
      * 服务配置
      */
    Service?: Service;
    /**
      * Job配置
      */
    Job?: Job;
    /**
      * CronJob配置
      */
    CronJob?: CronJob;
    /**
      * 重新运行策略
      */
    RestartPolicy?: string;
    /**
      * 镜像拉取密钥
      */
    ImagePullSecrets?: Array<string>;
    /**
      * HPA配置
      */
    HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
    /**
      * 初始化容器列表
      */
    InitContainers?: Array<Container>;
    /**
      * 容器列表
      */
    Containers?: Array<Container>;
}
/**
 * NodeUnit中边缘节点信息
 */
export interface NodeUnitNodeInfo {
    /**
      * 节点ID
      */
    Id: number;
    /**
      * 节点状态  NodeStatusHealthy (健康)/NodeStatusAbnormal (异常)/NodeStatusOffline (下线)/NodeStatusNotActivated (未激活
      */
    Status: string;
    /**
      * 节点名称
      */
    NodeName: string;
    /**
      * 内网节点IP
      */
    InternalIP: string;
}
/**
 * DeleteNodeUnit返回参数结构体
 */
export interface DeleteNodeUnitResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * NFS挂载卷
 */
export interface VolumeNFS {
    /**
      * 服务地址
      */
    Server: string;
    /**
      * 对应服务器路径
      */
    ServerPath: string;
    /**
      * 对应本地路径
      */
    Path: string;
}
/**
 * 服务配置
 */
export interface Service {
    /**
      * 名称
      */
    Name: string;
    /**
      * 类型 (ClusterIP|NodePort)
      */
    Type: string;
    /**
      * 端口配置
      */
    Ports: Array<PortConfig>;
    /**
      * 标签
      */
    Labels: Array<Label>;
    /**
      * 命名空间默认default
      */
    Namespace?: string;
    /**
      * 服务IP
      */
    ClusterIP?: string;
}
/**
 * DescribeEdgeUnitApplications返回参数结构体
 */
export interface DescribeEdgeUnitApplicationsResponse {
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 应用列表
      */
    ApplicationSet: Array<ApplicationStatusInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNodeUnitTemplateOnNodeGroup返回参数结构体
 */
export interface DescribeNodeUnitTemplateOnNodeGroupResponse {
    /**
      * 记录总数
      */
    Total: number;
    /**
      * NodeUnit模板
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeUnitTemplates: Array<NodeGroupNodeUnitTemplateInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 应用状态
 */
export interface ApplicationStatusInfo {
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id?: number;
    /**
      * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 应用版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Version: string;
    /**
      * 应用状态(1:待部署 2:部署中 3:运行中 4:待更新 5:更新中 6:待删除 7:删除中 8:已删除
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 管理地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ManageUrl: string;
    /**
      * 负载类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkloadKind: string;
    /**
      * 应用部署模式
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployMode: ApplicationDeployMode;
    /**
      * 期望Pod数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Replicas: number;
    /**
      * 运行Pod数
注意：此字段可能返回 null，表示取不到有效值。
      */
    AvailableReplicas: number;
}
/**
 * DescribeEdgeUnitGridEvents返回参数结构体
 */
export interface DescribeEdgeUnitGridEventsResponse {
    /**
      * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventSet: Array<GridEventInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 子设备列表信息
 */
export interface IotDevicesInfo {
    /**
      * 设备id
      */
    Id: number;
    /**
      * 设备名称
      */
    Name: string;
    /**
      * 设备状态
      */
    Status: number;
    /**
      * 设备打开状态
      */
    Disabled: boolean;
    /**
      * 描述
      */
    Description: string;
    /**
      * 设备创建时间
      */
    CreateTime: string;
    /**
      * 最后在线时间
      */
    LastOnlineTime: string;
    /**
      * 设备是否绑定到节点
      */
    IsBound: boolean;
    /**
      * 设备版本
      */
    Version: string;
    /**
      * 无
      */
    Region: string;
    /**
      * 无
      */
    UnitID: number;
    /**
      * 无
      */
    UnitName: string;
}
/**
 * DescribeEdgeUnitApplicationYamlError返回参数结构体
 */
export interface DescribeEdgeUnitApplicationYamlErrorResponse {
    /**
      * 是否通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckPass: boolean;
    /**
      * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrType: number;
    /**
      * 错误信息
      */
    ErrInfo: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEdgeUnitCloud返回参数结构体
 */
export interface DeleteEdgeUnitCloudResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyConfigMap请求参数结构体
 */
export interface ModifyConfigMapRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * ConfigMap名称
      */
    ConfigMapName: string;
    /**
      * Yaml配置, base64之后的串
      */
    Yaml: string;
    /**
      * ConfigMap命名空间
      */
    ConfigMapNamespace?: string;
}
/**
 * 应用基本配置
 */
export interface ApplicationBasicConfig {
    /**
      * 名称
      */
    Name: string;
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 工作负载类型
      */
    WorkflowKind: string;
    /**
      * 标签信息
      */
    Labels?: Array<Label>;
    /**
      * Grid唯一Key
      */
    GridUniqKey?: string;
    /**
      * NodeSelector标签
      */
    NodeSelector?: Array<Label>;
    /**
      * 实例数
      */
    Replicas?: number;
    /**
      * 可用实例数
      */
    AvailableReplicas?: number;
    /**
      * 是否开启service环境变量注入pod
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnableServiceLinks?: boolean;
}
/**
 * 数据挂载
 */
export interface VolumeMount {
    /**
      * 名称
      */
    Name: string;
    /**
      * 挂载路径
      */
    MountPath: string;
    /**
      * 子路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubPath?: string;
    /**
      * 是否只读
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReadOnly?: boolean;
}
/**
 * ModifyApplicationBasicInfo返回参数结构体
 */
export interface ModifyApplicationBasicInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEdgeUnitDeployGridItem返回参数结构体
 */
export interface DeleteEdgeUnitDeployGridItemResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApplicationVisualization请求参数结构体
 */
export interface DescribeApplicationVisualizationRequest {
    /**
      * 应用模板ID
      */
    ApplicationId: number;
}
/**
 * DescribeEdgeSnNodes返回参数结构体
 */
export interface DescribeEdgeSnNodesResponse {
    /**
      * 满足条件的总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 节点详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeSet: Array<EdgeDracoNodeInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeUnitApplications请求参数结构体
 */
export interface DescribeEdgeUnitApplicationsRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 翻页偏移
      */
    Offset: number;
    /**
      * 翻页大小
      */
    Limit: number;
    /**
      * 名称模糊匹配
      */
    NamePattern?: string;
    /**
      * 字段排序 (Sort.Filed为:StartTime）
      */
    Sort?: Array<FieldSort>;
    /**
      * 命名空间过滤
      */
    Namespace?: string;
}
/**
 * DescribeEdgeUnitApplicationYaml返回参数结构体
 */
export interface DescribeEdgeUnitApplicationYamlResponse {
    /**
      * Yaml配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Yaml: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfigMapYamlError返回参数结构体
 */
export interface DescribeConfigMapYamlErrorResponse {
    /**
      * 校验是通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckPass: boolean;
    /**
      * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrType: number;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrInfo: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfigMap返回参数结构体
 */
export interface DescribeConfigMapResponse {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * yaml配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Yaml: string;
    /**
      * 配置项的json格式(base64编码)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Json: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetMarketComponentList请求参数结构体
 */
export interface GetMarketComponentListRequest {
    /**
      * 页偏移，从0开始
      */
    Offset: number;
    /**
      * 每页条数
      */
    Limit: number;
    /**
      * 名称模糊筛选
      */
    Filter?: string;
    /**
      * 以名称排序，ASC、DESC
      */
    Order?: string;
}
/**
 * DescribeApplicationYaml请求参数结构体
 */
export interface DescribeApplicationYamlRequest {
    /**
      * 应用模板ID
      */
    ApplicationId: number;
}
/**
 * ModifyApplicationVisualization请求参数结构体
 */
export interface ModifyApplicationVisualizationRequest {
    /**
      * 应用ID
      */
    ApplicationId: number;
    /**
      * 应用配置
      */
    BasicConfig: ApplicationBasicConfig;
    /**
      * 卷配置
      */
    Volumes?: Array<Volume>;
    /**
      * 初始容器
      */
    InitContainers?: Array<Container>;
    /**
      * 容器配置
      */
    Containers?: Array<Container>;
    /**
      * 服务配置
      */
    Service?: Service;
    /**
      * Job配置
      */
    Job?: Job;
    /**
      * CronJob配置
      */
    CronJob?: CronJob;
    /**
      * 重启策略
      */
    RestartPolicy?: string;
    /**
      * 镜像拉取密钥
      */
    ImagePullSecrets?: Array<string>;
    /**
      * HPA配置
      */
    HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
    /**
      * 单个初始化容器
      */
    InitContainer?: Container;
}
/**
 * DescribeEdgeUnitNodeUnitTemplates请求参数结构体
 */
export interface DescribeEdgeUnitNodeUnitTemplatesRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 命名空间，默认为default
      */
    Namespace?: string;
    /**
      * 分页查询offset，默认为0
      */
    Offset?: number;
    /**
      * 分页查询limit，默认为20
      */
    Limit?: number;
    /**
      * 模糊匹配，精确匹配时失效
      */
    NameFilter?: string;
    /**
      * 精确匹配
      */
    NameMatched?: string;
    /**
      * 按时间排序顺序，默认为DESC
      */
    Order?: string;
}
/**
 * DeleteEdgeUnitApplications请求参数结构体
 */
export interface DeleteEdgeUnitApplicationsRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * 应用ID列表
      */
    ApplicationIDs: Array<number>;
}
/**
 * DeleteApplications请求参数结构体
 */
export interface DeleteApplicationsRequest {
    /**
      * 应用模板ID列表
      */
    ApplicationIds: Array<number>;
}
/**
 * DescribeEdgeUnitApplicationPodContainers请求参数结构体
 */
export interface DescribeEdgeUnitApplicationPodContainersRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 应用ID
      */
    ApplicationId: number;
    /**
      * Pod名
      */
    PodName: string;
}
/**
 * TCP探测配置
 */
export interface TcpProbe {
    /**
      * 连接端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
}
/**
 * ConfigMap的key挂载到路径
 */
export interface VolumeConfigMapKeyToPath {
    /**
      * 健名
      */
    Key: string;
    /**
      * 对应本地路径
      */
    Path: string;
    /**
      * 对应权限模式
      */
    Mode: string;
}
/**
 * DescribeDracoEdgeNodeInstaller返回参数结构体
 */
export interface DescribeDracoEdgeNodeInstallerResponse {
    /**
      * 在线安装命名
注意：此字段可能返回 null，表示取不到有效值。
      */
    OnlineInstallationCommand: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeUnitCloudApi请求参数结构体
 */
export interface ModifyEdgeUnitCloudApiRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 边缘单元名称，64字符内
      */
    Name?: string;
    /**
      * 描述，200字符内
      */
    Description?: string;
    /**
      * 是否开启监控
      */
    OpenCloudMonitor?: boolean;
}
/**
 * DescribeEdgeUnitDeployGridItem请求参数结构体
 */
export interface DescribeEdgeUnitDeployGridItemRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * Grid名称
      */
    GridName: string;
    /**
      * 负载类型（StatefulSetGrid｜DeploymentGrid）
      */
    WorkloadKind: string;
    /**
      * 命名空间，默认default
      */
    Namespace?: string;
    /**
      * 排序，默认ASC
      */
    Order?: string;
}
/**
 * ModifyEdgeUnit请求参数结构体
 */
export interface ModifyEdgeUnitRequest {
    /**
      * 边缘集群ID
      */
    EdgeUnitId: number;
    /**
      * 边缘集群名称，64字符以内
      */
    Name: string;
    /**
      * 集群描述，200字符以内
      */
    Description?: string;
}
/**
 * 容器状态
 */
export interface ContainerStatus {
    /**
      * 容器名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 容器ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ID: string;
    /**
      * 镜像
注意：此字段可能返回 null，表示取不到有效值。
      */
    Image: string;
    /**
      * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartCount: number;
    /**
      * 状态
      */
    Status: string;
}
/**
 * DescribeEdgeUnitCloud返回参数结构体
 */
export interface DescribeEdgeUnitCloudResponse {
    /**
      * 边缘集群名称
      */
    Name: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
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
      * 集群最后探活时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LiveTime: string;
    /**
      * 集群状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    MasterStatus: string;
    /**
      * 版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    K8sVersion: string;
    /**
      * pod cidr
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodCIDR: string;
    /**
      * service cidr
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceCIDR: string;
    /**
      * 集群内网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    APIServerAddress: string;
    /**
      * 集群外网访问地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    APIServerExposeAddress: string;
    /**
      * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    UID: string;
    /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnitID: number;
    /**
      * 集群标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cluster: string;
    /**
      * 节点统计
注意：此字段可能返回 null，表示取不到有效值。
      */
    Node: EdgeUnitStatisticItem;
    /**
      * 工作负载统计
注意：此字段可能返回 null，表示取不到有效值。
      */
    Workload: EdgeUnitStatisticItem;
    /**
      * Grid应用统计
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grid: EdgeUnitStatisticItem;
    /**
      * 设备统计
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubDevice: EdgeUnitStatisticItem;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Pod状态信息
 */
export interface PodStatus {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    NameSpace: string;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * IP地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    IP: string;
    /**
      * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 运行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunSec: number;
    /**
      * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartCount: number;
}
/**
 * RedeployEdgeUnitApplication请求参数结构体
 */
export interface RedeployEdgeUnitApplicationRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 应用ID
      */
    ApplicationId: number;
}
/**
 * DescribeEdgeNodeRemarkList请求参数结构体
 */
export interface DescribeEdgeNodeRemarkListRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitId: number;
}
/**
 * DeleteSecret返回参数结构体
 */
export interface DeleteSecretResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteConfigMap返回参数结构体
 */
export interface DeleteConfigMapResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApplications返回参数结构体
 */
export interface DescribeApplicationsResponse {
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 详细列表
      */
    ApplicationSet: Array<ApplicationTemplate>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteConfigMap请求参数结构体
 */
export interface DeleteConfigMapRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * ConfigMap名
      */
    ConfigMapName: string;
    /**
      * ConfigMap命名空间，默认：default
      */
    ConfigMapNamespace?: string;
}
/**
 * DescribeEdgeUnitDeployGridItem返回参数结构体
 */
export interface DescribeEdgeUnitDeployGridItemResponse {
    /**
      * 记录总数
      */
    TotalCount: number;
    /**
      * Grid部署列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeploySet: Array<GridItemInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateMessageRoute请求参数结构体
 */
export interface CreateMessageRouteRequest {
    /**
      * 路由名称
      */
    RouteName: string;
    /**
      * 路由备注
      */
    Descript?: string;
}
/**
 * DescribeEdgeUnitExtra请求参数结构体
 */
export interface DescribeEdgeUnitExtraRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
}
/**
 * CreateUpdateNodeUnit请求参数结构体
 */
export interface CreateUpdateNodeUnitRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * NodeUnit所属的NodeGroup名称
      */
    NodeGroupName: string;
    /**
      * 命名空间，默认为default
      */
    Namespace?: string;
    /**
      * NodeUnit名称，通过模版创建可不填
      */
    NodeUnitName?: string;
    /**
      * NodeUnit包含的节点列表，通过模版创建可不填
      */
    Nodes?: Array<string>;
    /**
      * NodeUnit模版ID列表
      */
    NodeUnitTemplateIDs?: Array<number>;
}
/**
 * DescribeIotDevice请求参数结构体
 */
export interface DescribeIotDeviceRequest {
    /**
      * 设备id，传0值表示此参数无效
      */
    DeviceId?: number;
    /**
      * 无
      */
    ProductID?: string;
    /**
      * 无
      */
    DeviceName?: string;
}
/**
 * CreateConfigMap返回参数结构体
 */
export interface CreateConfigMapResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeUnitsCloud请求参数结构体
 */
export interface DescribeEdgeUnitsCloudRequest {
    /**
      * 偏移量
      */
    Offset: number;
    /**
      * limit值
      */
    Limit: number;
    /**
      * 集群名称模糊匹配
      */
    NamePattern?: string;
    /**
      * 排序，ASC/DESC(默认)
      */
    Order?: string;
}
/**
 * 应用模板列表详情
 */
export interface ApplicationTemplate {
    /**
      * 模板ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: number;
    /**
      * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 来源。1 自定义应用模板 ;  2 官方应用模板
注意：此字段可能返回 null，表示取不到有效值。
      */
    Source: number;
    /**
      * 应用类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkloadKind: string;
    /**
      * 管理地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ManageUrl: string;
    /**
      * 发布时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    DistributeTime: string;
}
/**
 * 应用基本信息
 */
export interface ApplicationBasicInfo {
    /**
      * 名称
      */
    Name: string;
    /**
      * 管理URL地址
      */
    ManageUrl?: string;
    /**
      * 描述信息
      */
    Description?: string;
    /**
      * 创建时间
      */
    CreateTime?: string;
    /**
      * 是否允许可视化修改
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllowVisualModify?: boolean;
}
/**
 * DescribeEdgeDefaultVpc请求参数结构体
 */
export declare type DescribeEdgeDefaultVpcRequest = null;
/**
 * DescribeSecrets返回参数结构体
 */
export interface DescribeSecretsResponse {
    /**
      * 总数目
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * Secret列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Items: Array<SecretItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEdgeNodeGroup请求参数结构体
 */
export interface DeleteEdgeNodeGroupRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * NodeGroup名称
      */
    Name: string;
    /**
      * 命名空间，默认为default
      */
    Namespace?: string;
}
/**
 * DescribeEdgeUnitApplicationYamlError请求参数结构体
 */
export interface DescribeEdgeUnitApplicationYamlErrorRequest {
    /**
      * Yaml配置
      */
    Yaml: string;
}
/**
 * DescribeEdgeNodePods返回参数结构体
 */
export interface DescribeEdgeNodePodsResponse {
    /**
      * Pod列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodSet: Array<EdgeNodePodInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgePod返回参数结构体
 */
export interface DescribeEdgePodResponse {
    /**
      * Pod详情信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Pod: EdgeNodePodInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEdgeNodeUnitTemplate返回参数结构体
 */
export interface CreateEdgeNodeUnitTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMonitorMetrics返回参数结构体
 */
export interface DescribeMonitorMetricsResponse {
    /**
      * 查询监控指标结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Metrics: Array<MonitorMetricsColumn>;
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
      * 名称
      */
    Name: string;
    /**
      * 值
      */
    Value: string;
    /**
      * 值引用
      */
    ValueFrom: EnvValueSelector;
}
/**
 * DescribeConfigMaps返回参数结构体
 */
export interface DescribeConfigMapsResponse {
    /**
      * ConfigMap列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Items: Array<ConfigMapBasicInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * NodeGroup信息
 */
export interface NodeGroupInfo {
    /**
      * 描述
      */
    Description: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * NodeGroup名称
      */
    NodeGroupName: string;
    /**
      * DeploymentGrid数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeploymentGridList: Array<GridDetail>;
    /**
      * StatefulSetGrid数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatefulSetGridList: Array<GridDetail>;
    /**
      * 是否平台保护
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protect: boolean;
}
/**
 * 操作日志
 */
export interface OperationLog {
    /**
      * 操作时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperateTime: string;
    /**
      * 模块名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Module: string;
    /**
      * 操作信息
      */
    Description: string;
    /**
      * 用户ID
      */
    UserId: string;
    /**
      * 状态: 1:成功 2:失败
      */
    Status: number;
    /**
      * 操作用户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperatorUserID: string;
    /**
      * 操作动作
注意：此字段可能返回 null，表示取不到有效值。
      */
    Action: string;
}
/**
 * GetMarketComponentList返回参数结构体
 */
export interface GetMarketComponentListResponse {
    /**
      * 组件列表
      */
    ComponentList: Array<MarketComponentInfo>;
    /**
      * 组件总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeNodePodContainers返回参数结构体
 */
export interface DescribeEdgeNodePodContainersResponse {
    /**
      * Pod容器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerSet: Array<EdgeNodePodContainerInfo>;
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
 * DeleteEdgeUnitDevices请求参数结构体
 */
export interface DeleteEdgeUnitDevicesRequest {
    /**
      * 无
      */
    EdgeUnitId: number;
    /**
      * 无
      */
    Devices: Array<DeleteEdgeUnitDevicesDevice>;
}
/**
 * CronJob配置
 */
export interface CronJob {
    /**
      * 调度配置
      */
    Schedule: string;
    /**
      * 运行时间
      */
    StartingDeadlineSeconds: number;
    /**
      * job并行策略(Allow|Forbid|Replace)
      */
    ConcurrencyPolicy: string;
    /**
      * Job配置
      */
    Job: Job;
}
/**
 * DeleteEdgeUnitPod请求参数结构体
 */
export interface DeleteEdgeUnitPodRequest {
    /**
      * 集群ID
      */
    ClusterID: string;
    /**
      * Pod名称
      */
    PodName: string;
    /**
      * 命名空间
      */
    Namespace: string;
}
/**
 * CreateIotDevice请求参数结构体
 */
export interface CreateIotDeviceRequest {
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 设备所属的产品id
      */
    ProductId: string;
    /**
      * 描述
      */
    Description?: string;
    /**
      * 无
      */
    UnitID?: number;
}
/**
 * CreateSecret返回参数结构体
 */
export interface CreateSecretResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEdgeNodeUnitTemplates请求参数结构体
 */
export interface DeleteEdgeNodeUnitTemplatesRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 删除的NodeUnit模板ID列表
      */
    NodeUnitTemplateIDs: Array<number>;
}
/**
 * ModifyEdgeNodeLabels返回参数结构体
 */
export interface ModifyEdgeNodeLabelsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeUnitNodeGroup请求参数结构体
 */
export interface DescribeEdgeUnitNodeGroupRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 命名空间，默认为default
      */
    Namespace?: string;
    /**
      * 分页offset，默认为0
      */
    Offset?: number;
    /**
      * 分页limit，默认为20
      */
    Limit?: number;
    /**
      * 模糊匹配参数，精确匹配时失效
      */
    NameFilter?: string;
    /**
      * 精确匹配参数
      */
    NameMatched?: string;
    /**
      * 按时间排序，ASC/DESC，默认为DESC
      */
    Order?: string;
}
/**
 * 单元内的统计信息
 */
export interface EdgeUnitStatisticItem {
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 在线数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Online: number;
    /**
      * 异常数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Abnormal: number;
    /**
      * 离线数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Offline: number;
    /**
      * 未激活
注意：此字段可能返回 null，表示取不到有效值。
      */
    NotActive: number;
}
/**
 * DescribeEdgeUnitApplicationPods请求参数结构体
 */
export interface DescribeEdgeUnitApplicationPodsRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 应用ID
      */
    ApplicationId: number;
}
/**
 * Job配置
 */
export interface Job {
    /**
      * 并发数
      */
    Parallelism: number;
    /**
      * 完成数
      */
    Completion: number;
    /**
      * 最大运行时间
      */
    ActiveDeadlineSeconds: number;
    /**
      * 失败前重试次数
      */
    BackOffLimit: number;
}
/**
 * DescribeEdgeUnitApplicationLogs返回参数结构体
 */
export interface DescribeEdgeUnitApplicationLogsResponse {
    /**
      * 日志列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeUnitDeployGridItem返回参数结构体
 */
export interface ModifyEdgeUnitDeployGridItemResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEdgeNode请求参数结构体
 */
export interface CreateEdgeNodeRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 节点名称
      */
    Name: string;
}
/**
 * BuildMessageRoute返回参数结构体
 */
export interface BuildMessageRouteResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeUnitMonitorStatus返回参数结构体
 */
export interface DescribeEdgeUnitMonitorStatusResponse {
    /**
      * 监控状态描述：
"running" 单元监控正常运行
"deploying" 单元监控部署中
"norsc" 单元需要可用节点以部署监控
"abnormal" 单元监控异常
"none" 单元监控不可用
      */
    MonitorStatus: string;
    /**
      * 监控是否就绪
      */
    IsAvailable: boolean;
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
 * DescribeEdgeUnitExtra返回参数结构体
 */
export interface DescribeEdgeUnitExtraResponse {
    /**
      * APIServer类型
      */
    APIServerType: string;
    /**
      * 域名URL
      */
    APIServerURL: string;
    /**
      * 域名URL对应的端口
      */
    APIServerURLPort: string;
    /**
      * 域名URL对应的端口
      */
    APIServerResolveIP: string;
    /**
      * 对外可访问的IP
      */
    APIServerExposeAddress: string;
    /**
      * 是否开启监控
      */
    IsCreatePrometheus: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfigMaps请求参数结构体
 */
export interface DescribeConfigMapsRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * 翻页偏移量
      */
    Offset: number;
    /**
      * 每页大小(最大100)
      */
    Limit: number;
    /**
      * 命名空间
      */
    ConfigMapNamespace?: string;
    /**
      * 模糊匹配的名称
      */
    NamePattern?: string;
    /**
      * Sort.Fileld填写CreateTime Sort.Order(ASC|DESC) 默认ASC
      */
    Sort?: FieldSort;
}
/**
 * DescribeEdgeUnitNodeUnitTemplates返回参数结构体
 */
export interface DescribeEdgeUnitNodeUnitTemplatesResponse {
    /**
      * 符合查询条件的记录总数
      */
    Total: number;
    /**
      * NodeUnit模板列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeUnitTemplates: Array<NodeUnitTemplate>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ServiceGroup中Grid信息
 */
export interface GridDetail {
    /**
      * Grid名称
      */
    Name: string;
    /**
      * GridID
      */
    Id: number;
}
/**
 * ModifyIotDevice返回参数结构体
 */
export interface ModifyIotDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeNodeLabels请求参数结构体
 */
export interface ModifyEdgeNodeLabelsRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * IECP边缘节点ID
      */
    NodeId: number;
    /**
      * 标签列表
      */
    Labels: Array<KeyValueObj>;
}
/**
 * DeleteEdgeUnitDevices返回参数结构体
 */
export interface DeleteEdgeUnitDevicesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEdgeNodeGroup返回参数结构体
 */
export interface CreateEdgeNodeGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 边缘节点Pod信息
 */
export interface EdgeNodePodInfo {
    /**
      * Pod名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * Pod状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 所在节点IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeIp: string;
    /**
      * 实例IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip: string;
    /**
      * CPU Request
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuRequest: string;
    /**
      * Memory Request
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemoryRequest: string;
    /**
      * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace: string;
    /**
      * 工作负载类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkloadType: string;
    /**
      * 工作负载名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkloadName: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartCount: number;
    /**
      * 集群ID
      */
    ClusterID: string;
}
/**
 * 消息路由
 */
export interface RouteInfo {
    /**
      * 无
      */
    RouteID: number;
    /**
      * 无
      */
    RouteName: string;
    /**
      * 无
      */
    SourceProductID: string;
    /**
      * 无
      */
    TopicFilter: string;
    /**
      * 无
      */
    Mode: string;
    /**
      * 无
      */
    TargetOptions: string;
    /**
      * 无
      */
    CreateTime: string;
    /**
      * 无
      */
    Descript: string;
    /**
      * 无
      */
    Healthy: string;
    /**
      * 无
      */
    Status: string;
    /**
      * 无
      */
    MessageCount: number;
    /**
      * 无
      */
    MessageLastTime: string;
    /**
      * 无
      */
    SourceProductName: string;
    /**
      * 无
      */
    SourceUnitIDList: Array<string>;
    /**
      * 无
      */
    SourceUnitNameList: Array<string>;
    /**
      * 无
      */
    SourceDeviceNameList: Array<string>;
}
/**
 * CreateEdgeUnitApplicationYaml请求参数结构体
 */
export interface CreateEdgeUnitApplicationYamlRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * base64后的Yaml配置
      */
    Yaml: string;
    /**
      * 基本信息
      */
    BasicInfo?: ApplicationBasicInfo;
}
/**
 * Http探测头
 */
export interface HttpHeader {
    /**
      * HTTP头的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * HTTP头的值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * DeleteEdgeUnitApplications返回参数结构体
 */
export interface DeleteEdgeUnitApplicationsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecret请求参数结构体
 */
export interface DescribeSecretRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitID: number;
    /**
      * secret名
      */
    SecretName: string;
    /**
      * 命名空间(默认值:default）
      */
    SecretNamespace?: string;
}
/**
 * DeleteApplications返回参数结构体
 */
export interface DeleteApplicationsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Draco 设备预录入信息
 */
export interface DracoNodeInfo {
    /**
      * 设备SN。SN仅支持大写字母、数字，长度限制为1~32个字符
      */
    SN: string;
    /**
      * 节点名称。长度限制为1~63个字符，节点名称只支持小写英文、数字、中横线、英文句号
      */
    Name: string;
    /**
      * 节点备注
      */
    Remark?: string;
}
/**
 * NodeUnit信息
 */
export interface NodeUnitInfo {
    /**
      * NodeUnitId
      */
    Id: number;
    /**
      * NodeUnit名称
      */
    NodeUnitName: string;
    /**
      * 包含节点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeList: Array<NodeUnitNodeInfo>;
}
/**
 * docker配置
 */
export interface DockerConfig {
    /**
      * 镜像仓库地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegistryDomain: string;
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 密码
      */
    Password: string;
}
/**
 * DescribeEdgeUnitDeployGridItemYaml请求参数结构体
 */
export interface DescribeEdgeUnitDeployGridItemYamlRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 负载类型（StatefulSetGrid｜DeploymentGrid）
      */
    WorkloadKind: string;
    /**
      * Grid部署项名称
      */
    GridItemName: string;
    /**
      * 命名空间，默认default
      */
    Namespace?: string;
}
/**
 * CreateEdgeNodeBatch请求参数结构体
 */
export interface CreateEdgeNodeBatchRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 节点信息
      */
    Nodes: Array<DracoNodeInfo>;
}
/**
 * DescribeNamespace请求参数结构体
 */
export interface DescribeNamespaceRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * 命名空间名
      */
    Namespace: string;
}
/**
 * DescribeNamespace返回参数结构体
 */
export interface DescribeNamespaceResponse {
    /**
      * 命名空间名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace: string;
    /**
      * 状态 (Active|Terminating)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 是否保护-不允许删除
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protected: boolean;
    /**
      * Yaml文件格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Yaml: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 组件市场的组件描述
 */
export interface MarketComponentInfo {
    /**
      * 组件ID
      */
    ID: number;
    /**
      * 组件名称
      */
    AppName: string;
    /**
      * 发布者
      */
    Author?: string;
    /**
      * 发布时间
      */
    ReleaseTime?: string;
    /**
      * 组件简介
      */
    Outline?: string;
    /**
      * 指向详细描述的url
      */
    Detail?: string;
    /**
      * 图标链接
      */
    Icon?: string;
    /**
      * 组件版本
      */
    Version?: string;
    /**
      * 组件可视化信息
      */
    WorkloadVisualConfig?: string;
    /**
      * 无
      */
    DetailUrl?: string;
    /**
      * 无
      */
    Installed?: boolean;
}
/**
 * DescribeConfigMap请求参数结构体
 */
export interface DescribeConfigMapRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * ConfigMap名称
      */
    ConfigMapName: string;
    /**
      * ConfigMap命名空间
      */
    ConfigMapNamespace?: string;
}
/**
 * ConfigMap基本信息
 */
export interface ConfigMapBasicInfo {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
}
/**
 * 命名空间信息
 */
export interface NamespaceInfo {
    /**
      * 命名空间名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace: string;
    /**
      * 状态(Active|Terminating)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 是否保护(不允许删除)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Protected: boolean;
    /**
      * 对应的Yaml配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Yaml: string;
}
/**
 * CreateEdgeNodeUnitTemplate请求参数结构体
 */
export interface CreateEdgeNodeUnitTemplateRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * NodeUnit模板名称
      */
    Name: string;
    /**
      * 命名空间，默认default
      */
    Namespace?: string;
    /**
      * 包含的节点列表
      */
    Nodes?: Array<string>;
    /**
      * 描述
      */
    Description?: string;
}
/**
 * Grid信息
 */
export interface GridInfo {
    /**
      * DeployGridId
      */
    Id: number;
    /**
      * 名称
      */
    Name: string;
    /**
      * Key
      */
    GridUniqKey: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 工作负载类型
      */
    WorkloadKind: string;
    /**
      * 启动时间
      */
    StartTime: string;
    /**
      * 副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Replicas: number;
    /**
      * 创建人
      */
    Publisher: string;
    /**
      * 版本信息
      */
    Version: string;
}
/**
 * CreateApplicationVisualization返回参数结构体
 */
export interface CreateApplicationVisualizationResponse {
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 事件信息
 */
export interface Event {
    /**
      * 第一次出现时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstTime: string;
    /**
      * 最后一次出现时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastTime: string;
    /**
      * 事件关联对象类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvolvedObjectKind: string;
    /**
      * 事件关联对象名
注意：此字段可能返回 null，表示取不到有效值。
      */
    InvolvedObjectName: string;
    /**
      * 事件类型(Normal|Warning)
      */
    Type: string;
    /**
      * 原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Reason: string;
    /**
      * 内容
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
 * DescribeEdgeUnitCloud请求参数结构体
 */
export interface DescribeEdgeUnitCloudRequest {
    /**
      * 边缘集群ID
      */
    EdgeUnitId: number;
}
/**
 * CreateEdgeUnitApplicationYaml返回参数结构体
 */
export interface CreateEdgeUnitApplicationYamlResponse {
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApplicationId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecretYamlError请求参数结构体
 */
export interface DescribeSecretYamlErrorRequest {
    /**
      * yaml文件
      */
    Yaml: string;
}
/**
 * DescribeMessageRouteList返回参数结构体
 */
export interface DescribeMessageRouteListResponse {
    /**
      * 无
      */
    RouteList: Array<RouteInfo>;
    /**
      * 无
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 字段排序
 */
export interface FieldSort {
    /**
      * 字段名
      */
    Field?: string;
    /**
      * 排序(ASC:升序 DESC:降序
      */
    Order?: string;
}
/**
 * 获取边缘集群列表
 */
export interface EdgeCloudCluster {
    /**
      * IECP侧边缘集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EdgeId: number;
    /**
      * 边缘集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterId: string;
    /**
      * 区域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 集群名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterName: string;
    /**
      * 集群版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    K8SVersion: string;
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterDesc: string;
    /**
      * 集群状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * pod cidr
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodCIDR: string;
    /**
      * service cidr
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceCIDR: string;
    /**
      * 边缘版本类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    EdgeClusterVersion: string;
    /**
      * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    UID: string;
}
/**
 * CreateUserToken返回参数结构体
 */
export interface CreateUserTokenResponse {
    /**
      * 无
      */
    Token: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSecret请求参数结构体
 */
export interface DeleteSecretRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * secret名称
      */
    SecretName: string;
    /**
      * secret命名空间（默认:default）
      */
    SecretNamespace?: string;
}
/**
 * DescribeEdgeUnitApplicationPods返回参数结构体
 */
export interface DescribeEdgeUnitApplicationPodsResponse {
    /**
      * Pod列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodSet: Array<PodStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 预注册节点的信息
 */
export interface EdgeDracoNodeInfo {
    /**
      * 节点ID
      */
    Id: number;
    /**
      * 节点名称
      */
    Name: string;
    /**
      * 是否已激活
      */
    IsUsed: boolean;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 备注信息，如批次
      */
    Remark: string;
    /**
      * SN 设备号
      */
    SN: string;
}
/**
 * DescribeEdgeUnitApplicationVisualization请求参数结构体
 */
export interface DescribeEdgeUnitApplicationVisualizationRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 应用ID
      */
    ApplicationId: number;
}
/**
 * DescribeEdgeNodes返回参数结构体
 */
export interface DescribeEdgeNodesResponse {
    /**
      * 边缘节点数量
      */
    TotalCount: number;
    /**
      * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeSet: Array<EdgeNodeInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyIotDevice请求参数结构体
 */
export interface ModifyIotDeviceRequest {
    /**
      * 设备id
      */
    DeviceId: number;
    /**
      * 描述
      */
    Description?: string;
    /**
      * 设备是否开启
      */
    Disabled?: boolean;
    /**
      * 日志设置
      */
    LogSetting?: number;
    /**
      * 日志级别
      */
    LogLevel?: number;
}
/**
 * DescribeEdgeUnitGridPods请求参数结构体
 */
export interface DescribeEdgeUnitGridPodsRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * Grid名称
      */
    GridName: string;
    /**
      * 负载类型（StatefulSetGrid｜DeploymentGrid）
      */
    WorkloadKind: string;
    /**
      * NodeUnit名
      */
    NodeUnit: string;
    /**
      * 命名空间，默认default
      */
    Namespace?: string;
}
/**
 * ConfigMap挂载卷
 */
export interface VolumeConfigMap {
    /**
      * 名称
      */
    Name: string;
    /**
      * Key列表配置
      */
    Items: Array<VolumeConfigMapKeyToPath>;
}
/**
 * 从单元批量解绑设备
 */
export interface DeleteEdgeUnitDevicesDevice {
    /**
      * 无
      */
    ProductId: string;
    /**
      * 无
      */
    DeviceName: string;
}
/**
 * DeleteIotDevice返回参数结构体
 */
export interface DeleteIotDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeDefaultVpc返回参数结构体
 */
export interface DescribeEdgeDefaultVpcResponse {
    /**
      * 私有网络ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 网络CIDR
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcCidrBlock: string;
    /**
      * 子网ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * 子网CIDR
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetCidrBlock: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyNodeUnitTemplate请求参数结构体
 */
export interface ModifyNodeUnitTemplateRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * NodeUnit模板ID
      */
    NodeUnitTemplateID: number;
    /**
      * 包含的节点列表
      */
    Nodes?: Array<string>;
}
/**
 * DescribeEdgeNodes请求参数结构体
 */
export interface DescribeEdgeNodesRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 边缘节点名称模糊搜索串
      */
    NamePattern?: string;
    /**
      * 边缘节点名称列表，支持批量查询 ，优先于模糊查询
      */
    NameMatchedList?: Array<string>;
    /**
      * 排序信息列表
      */
    Sort?: Array<Sort>;
    /**
      * 偏移量
      */
    Offset?: number;
    /**
      * 页面大小Limit
      */
    Limit?: number;
    /**
      * 节点类型
      */
    NodeType?: number;
}
/**
 * DescribeEdgeUnitApplicationLogs请求参数结构体
 */
export interface DescribeEdgeUnitApplicationLogsRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 应用ID
      */
    ApplicationId: number;
    /**
      * 最大条数
      */
    Limit: number;
    /**
      * Pod名
      */
    PodName: string;
    /**
      * 容器名
      */
    ContainerName?: string;
}
/**
 * CreateUserToken请求参数结构体
 */
export interface CreateUserTokenRequest {
    /**
      * token过期时间，有效值是1~300秒
      */
    Second?: number;
}
/**
 * DescribeEdgeAgentNodeInstaller返回参数结构体
 */
export interface DescribeEdgeAgentNodeInstallerResponse {
    /**
      * 节点在线安装信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Online: EdgeNodeInstallerOnline;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeUnitApplicationVisualization请求参数结构体
 */
export interface ModifyEdgeUnitApplicationVisualizationRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 应用ID
      */
    ApplicationId: number;
    /**
      * 应用配置
      */
    BasicConfig: ApplicationBasicConfig;
    /**
      * 卷配置
      */
    Volumes?: Array<Volume>;
    /**
      * 初始容器列表
      */
    InitContainers?: Array<Container>;
    /**
      * 容器配置
      */
    Containers?: Array<Container>;
    /**
      * 服务配置
      */
    Service?: Service;
    /**
      * Job配置
      */
    Job?: Job;
    /**
      * CronJob配置
      */
    CronJob?: CronJob;
    /**
      * 重启策略
      */
    RestartPolicy?: string;
    /**
      * 镜像拉取密钥
      */
    ImagePullSecrets?: Array<string>;
    /**
      * HPA配置
      */
    HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
}
/**
 * ModifyConfigMap返回参数结构体
 */
export interface ModifyConfigMapResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyApplicationVisualization返回参数结构体
 */
export interface ModifyApplicationVisualizationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeNodePods请求参数结构体
 */
export interface DescribeEdgeNodePodsRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 节点ID
      */
    NodeId: number;
    /**
      * 命名空间
      */
    Namespace?: string;
    /**
      * Pod名称过滤串
      */
    PodNamePattern?: string;
}
/**
 * DeleteIotDeviceBatch请求参数结构体
 */
export interface DeleteIotDeviceBatchRequest {
    /**
      * 无
      */
    DeviceIDList: Array<number>;
}
/**
 * DescribeEdgeAgentNodeInstaller请求参数结构体
 */
export interface DescribeEdgeAgentNodeInstallerRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * IECP边缘节点ID
      */
    NodeId: number;
}
/**
 * DescribeApplicationVisualization返回参数结构体
 */
export interface DescribeApplicationVisualizationResponse {
    /**
      * 基本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicInfo: ApplicationBasicInfo;
    /**
      * 基本配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicConfig: ApplicationBasicConfig;
    /**
      * 卷配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Volumes: Array<Volume>;
    /**
      * 初始化容器配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitContainers: Array<Container>;
    /**
      * 容器配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Containers: Array<Container>;
    /**
      * 服务配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Service: Service;
    /**
      * Job配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Job: Job;
    /**
      * CronJob配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    CronJob: CronJob;
    /**
      * 重启策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartPolicy: string;
    /**
      * HPA
注意：此字段可能返回 null，表示取不到有效值。
      */
    HorizontalPodAutoscaler: HorizontalPodAutoscaler;
    /**
      * 镜像拉取Secret
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImagePullSecrets: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDracoEdgeNodeInstaller请求参数结构体
 */
export interface DescribeDracoEdgeNodeInstallerRequest {
    /**
      * 设备SN
      */
    SN: string;
}
/**
 * CreateNamespace请求参数结构体
 */
export interface CreateNamespaceRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 描述信息
      */
    Description?: string;
}
/**
 * 数据卷主机路径，取值参考: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 */
export interface VolumeHostPath {
    /**
      * 类型
      */
    Type: string;
    /**
      * 路径
      */
    Path: string;
}
/**
 * DeleteMessageRoute请求参数结构体
 */
export interface DeleteMessageRouteRequest {
    /**
      * 无
      */
    RouteID: number;
}
/**
 * ApplyMarketComponent请求参数结构体
 */
export interface ApplyMarketComponentRequest {
    /**
      * 组件ID
      */
    ID: number;
}
/**
 * 节点基础信息
 */
export interface NodeSimpleInfo {
    /**
      * 节点ID
      */
    ID: number;
    /**
      * 节点名称
      */
    NodeName: string;
}
/**
 * 环境变量选择
 */
export interface EnvValueSelector {
    /**
      * 健名
      */
    Key: string;
    /**
      * 对象名
      */
    ObjectName: string;
    /**
      * 对象值
      */
    ObjectType: string;
}
/**
 * DescribeNamespaceResources返回参数结构体
 */
export interface DescribeNamespaceResourcesResponse {
    /**
      * 资源列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Resources: Array<NamespaceResource>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeUnitGridEvents请求参数结构体
 */
export interface DescribeEdgeUnitGridEventsRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * Grid名称
      */
    GridName: string;
    /**
      * 负载类型（StatefulSetGrid｜DeploymentGrid）
      */
    WorkloadKind: string;
    /**
      * 命名空间，默认为default
      */
    Namespace?: string;
    /**
      * NodeUnit名称
      */
    NodeUnit?: string;
    /**
      * Pod名称
      */
    PodName?: string;
}
/**
 * CreateEdgeUnitDevices返回参数结构体
 */
export interface CreateEdgeUnitDevicesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Secret信息
 */
export interface SecretItem {
    /**
      * Secret名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 命名空间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * Secret类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecretType: string;
}
/**
 * ModifyEdgeDracoNode请求参数结构体
 */
export interface ModifyEdgeDracoNodeRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 边缘节点ID
      */
    NodeId: number;
    /**
      * 节点信息
      */
    NodeInfo?: DracoNodeInfo;
    /**
      * 是否重置draco设备
      */
    IsReset?: boolean;
}
/**
 * CreateMessageRoute返回参数结构体
 */
export interface CreateMessageRouteResponse {
    /**
      * 路由id
      */
    RouteID: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNodeUnit返回参数结构体
 */
export interface DescribeNodeUnitResponse {
    /**
      * 符合查询条件的记录总数
      */
    TotalCount: number;
    /**
      * NodeUnit信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeGridInfo: Array<NodeUnitInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEdgeNodeGroup返回参数结构体
 */
export interface DeleteEdgeNodeGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMessageRouteList请求参数结构体
 */
export interface DescribeMessageRouteListRequest {
    /**
      * 无
      */
    Limit: number;
    /**
      * 无
      */
    Offset: number;
    /**
      * 无
      */
    Filter?: string;
    /**
      * 无
      */
    StartTime?: string;
    /**
      * 无
      */
    EndTime?: string;
    /**
      * 无
      */
    Order?: string;
}
/**
 * KeyValue对象
 */
export interface KeyValueObj {
    /**
      * Key值
      */
    Key: string;
    /**
      * Value值
      */
    Value: string;
}
/**
 * 标签信息
 */
export interface Label {
    /**
      * 健名
      */
    Key: string;
    /**
      * 健值
      */
    Value: string;
}
/**
 * ModifyEdgeUnit返回参数结构体
 */
export interface ModifyEdgeUnitResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeYeheResourceLimit返回参数结构体
 */
export interface DescribeYeheResourceLimitResponse {
    /**
      * 用户父账号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Uin: string;
    /**
      * 允许创建的节点数
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateNodeLimit: number;
    /**
      * 允许创建的集群数
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateClusterLimit: number;
    /**
      * 是否有监控开启权限
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnablePermMonitor: boolean;
    /**
      * 节点是否有admin的所有权限
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnablePermAdminNode: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeUnitsCloud返回参数结构体
 */
export interface DescribeEdgeUnitsCloudResponse {
    /**
      * 总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 集群详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    EdgeUnitSet: Array<EdgeCloudCluster>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeIotDevices请求参数结构体
 */
export interface DescribeIotDevicesRequest {
    /**
      * 页偏移
      */
    Offset: number;
    /**
      * 每页数量
      */
    Limit: number;
    /**
      * 产品id
      */
    ProductId?: string;
    /**
      * 设备名称模糊查找
      */
    NamePattern?: string;
    /**
      * 版本列表
      */
    Versions?: Array<string>;
    /**
      * ASC 或 DESC
      */
    Order?: string;
}
/**
 * CreateConfigMap请求参数结构体
 */
export interface CreateConfigMapRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * ConfigMap名称
      */
    ConfigMapName: string;
    /**
      * ConfigMap内容
      */
    ConfigMapData: Array<KeyValueObj>;
    /**
      * ConfigMap命名空间,默认：default
      */
    ConfigMapNamespace?: string;
}
/**
 * DescribeEdgeUnitDeployGrid返回参数结构体
 */
export interface DescribeEdgeUnitDeployGridResponse {
    /**
      * 记录总数
      */
    TotalCount: number;
    /**
      * Grid列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    GridSet: Array<GridInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeUnitCloudApi返回参数结构体
 */
export interface ModifyEdgeUnitCloudApiResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateUpdateNodeUnit返回参数结构体
 */
export interface CreateUpdateNodeUnitResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeUnitApplicationVisualization返回参数结构体
 */
export interface ModifyEdgeUnitApplicationVisualizationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEdgeNodes返回参数结构体
 */
export interface DeleteEdgeNodesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 边缘节点Pod容器信息
 */
export interface EdgeNodePodContainerInfo {
    /**
      * Pod名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 容器ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: string;
    /**
      * 镜像（含版本号）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Image: string;
    /**
      * CPU Request
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuRequest: string;
    /**
      * CPU Limit
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuLimit: string;
    /**
      * Memory Request
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemoryRequest: string;
    /**
      * Memory Limit
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemoryLimit: string;
    /**
      * 重启次数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartCount: number;
    /**
      * 容器状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
}
/**
 * BuildMessageRoute请求参数结构体
 */
export interface BuildMessageRouteRequest {
    /**
      * 路由名字
      */
    RouteName: string;
    /**
      * 源产品id
      */
    SourceProductID: string;
    /**
      * 源设备名列表
      */
    SourceDeviceNameList: Array<string>;
    /**
      * 第一个字符为 "0"或"1"，"1"表示自定义topic
      */
    TopicFilter: string;
    /**
      * http或mqtt-broker
      */
    Mode: string;
    /**
      * 源单元id列表
      */
    SourceUnitIDList?: Array<string>;
    /**
      * 描述
      */
    Descript?: string;
    /**
      * 无
      */
    TargetOptions?: string;
}
/**
 * Grid事件信息
 */
export interface GridEventInfo {
    /**
      * 首次出现时间
      */
    FirstTime: string;
    /**
      * 最后出现时间
      */
    LastTime: string;
    /**
      * 对象类型
      */
    InvolvedObjectKind: string;
    /**
      * 对象名称
      */
    InvolvedObjectName: string;
    /**
      * 事件类型(Normal,Warning)
      */
    Type: string;
    /**
      * 事件原因
      */
    Reason: string;
    /**
      * 事件内容
      */
    Message: string;
    /**
      * 次数
      */
    Count: number;
    /**
      * 节点名（Pod事件类型时有值）
      */
    NodeName: string;
    /**
      * 节点内部IP（Pod事件类型时有值）
注意：此字段可能返回 null，表示取不到有效值。
      */
    IP: string;
}
/**
 * 资源目标指标
 */
export interface ResourceMetricTarget {
    /**
      * 类型(cpu|memory)
      */
    Type: string;
    /**
      * 平均值
      */
    AverageValue: number;
    /**
      * 单位
      */
    Scale: string;
    /**
      * 平均值
      */
    AverageUtilization: number;
}
/**
 * DescribeEdgeNodePodContainers请求参数结构体
 */
export interface DescribeEdgeNodePodContainersRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 节点ID
      */
    NodeId: number;
    /**
      * Pod名称
      */
    PodName: string;
    /**
      * 命名空间
      */
    Namespace?: string;
}
/**
 * DescribeEdgeUnitApplicationEvents返回参数结构体
 */
export interface DescribeEdgeUnitApplicationEventsResponse {
    /**
      * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventSet: Array<Event>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySecret请求参数结构体
 */
export interface ModifySecretRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitID: number;
    /**
      * Secret名
      */
    SecretName: string;
    /**
      * Secret的Yaml格式
      */
    Yaml: string;
    /**
      * Secret命名空间（默认:default）
      */
    SecretNamespace?: string;
}
/**
 * DeleteEdgeUnitPod返回参数结构体
 */
export interface DeleteEdgeUnitPodResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 探针配置
 */
export interface Probe {
    /**
      * 启动后，延迟探测时间 单位:秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitialDelaySeconds?: number;
    /**
      * 探测间隔，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    PeriodSeconds?: number;
    /**
      * 探测超时时间 单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    TimeoutSeconds?: number;
    /**
      * 失败后检查成功的最小连续成功次数。默认为1.活跃度必须为1。最小值为1
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccessThreshold?: number;
    /**
      * 当Pod成功启动且检查失败时，放弃之前尝试次数。默认为3.最小值为1
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailureThreshold?: number;
    /**
      * HTTP探测配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    HttpProbe?: HttpProbe;
    /**
      * TCP探测配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    TcpProbe?: TcpProbe;
}
/**
 * 容器配置信息
 */
export interface Container {
    /**
      * 名称
      */
    Name: string;
    /**
      * 镜像名
      */
    ImageName: string;
    /**
      * 镜像版本
      */
    ImageVersion: string;
    /**
      * 镜像拉取策略(Always|Never|IfNotPresent)
      */
    ImagePullPolicy: string;
    /**
      * 卷挂载配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    VolumeMounts: Array<VolumeMount>;
    /**
      * cpu最低配置
      */
    CpuRequest: string;
    /**
      * cpu最高限制
      */
    CpuLimit: string;
    /**
      * 内存最低要求
      */
    MemoryRequest: string;
    /**
      * 内存最高要求
      */
    MemoryLimit: string;
    /**
      * 内存单位
      */
    MemoryUnit: string;
    /**
      * gpu最高限制
      */
    GpuLimit?: string;
    /**
      * 资源配置
      */
    ResourceMapCloud?: Array<KeyValueObj>;
    /**
      * 环境配置
      */
    Envs?: Array<Env>;
    /**
      * 工作目录
      */
    WorkingDir?: string;
    /**
      * 命令
      */
    Commands?: Array<string>;
    /**
      * 参数
      */
    Args?: Array<string>;
    /**
      * 安全配置
      */
    SecurityContext?: SecurityContext;
    /**
      * 就绪探针配置
      */
    ReadinessProbe?: Probe;
}
/**
 * DescribeEdgeUnitApplicationEvents请求参数结构体
 */
export interface DescribeEdgeUnitApplicationEventsRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 应用ID
      */
    ApplicationId: number;
}
/**
 * DescribeNamespaces请求参数结构体
 */
export interface DescribeNamespacesRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitID: number;
    /**
      * 边缘节点名称模糊搜索串
      */
    NamePattern?: string;
}
/**
 * DeleteIotDevice请求参数结构体
 */
export interface DeleteIotDeviceRequest {
    /**
      * 设备id
      */
    DeviceId: number;
}
/**
 * DescribeEdgeNodeRemarkList返回参数结构体
 */
export interface DescribeEdgeNodeRemarkListResponse {
    /**
      * 边缘单元内的备注列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remarks: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * pod水平伸缩配置
 */
export interface HorizontalPodAutoscaler {
    /**
      * 名称
      */
    Name: string;
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 最小实例数
      */
    MinReplicas: number;
    /**
      * 最大实例数
      */
    MaxReplicas: number;
    /**
      * 资源目标指标
      */
    ResourceMetricTarget: Array<ResourceMetricTarget>;
}
/**
 * 命名空间下资源描述
 */
export interface NamespaceResource {
    /**
      * 类型(workload|grid|configmap|secret)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Count: number;
    /**
      * 名称(最多返回5个）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Names: Array<string>;
}
/**
 * 节点在线安装信息
 */
export interface EdgeNodeInstallerOnline {
    /**
      * 节点安装脚本名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScriptName: string;
    /**
      * 节点安装脚本下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScriptDownloadUrl: string;
    /**
      * 节点安装命令
注意：此字段可能返回 null，表示取不到有效值。
      */
    Guide: string;
}
/**
 * DescribeEdgeUnitApplicationPodContainers返回参数结构体
 */
export interface DescribeEdgeUnitApplicationPodContainersResponse {
    /**
      * 容器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerSet: Array<ContainerStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyApplicationBasicInfo请求参数结构体
 */
export interface ModifyApplicationBasicInfoRequest {
    /**
      * 应用模板ID
      */
    ApplicationId: number;
    /**
      * 应用模板基本信息
      */
    BasicInfo: ApplicationBasicInfo;
}
/**
 * DescribeEdgeUnitNodeGroup返回参数结构体
 */
export interface DescribeEdgeUnitNodeGroupResponse {
    /**
      * 记录总数
      */
    Total: number;
    /**
      * NodeGroup数组
      */
    NodeGroupInfo: Array<NodeGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeOperationLogs返回参数结构体
 */
export interface DescribeEdgeOperationLogsResponse {
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 操作日志列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperationLogSet: Array<OperationLog>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeSnNodes请求参数结构体
 */
export interface DescribeEdgeSnNodesRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 根据节点名称模糊匹配
      */
    NamePattern?: string;
    /**
      * 根据设备SN模糊匹配
      */
    SNPattern?: string;
    /**
      * 根据备注批次信息模糊匹配
      */
    RemarkPattern?: string;
    /**
      * 默认0
      */
    Offset?: number;
    /**
      * 默认20
      */
    Limit?: number;
}
/**
 * DeleteEdgeUnitDeployGridItem请求参数结构体
 */
export interface DeleteEdgeUnitDeployGridItemRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 负载类型（StatefulSetGrid｜DeploymentGrid）
      */
    WorkloadKind: string;
    /**
      * Grid部署名称
      */
    GridItemName: string;
    /**
      * 命名空间，默认default
      */
    Namespace?: string;
}
/**
 * 安全上下文
 */
export interface SecurityContext {
    /**
      * 是否开启特权模式
      */
    Privilege: boolean;
    /**
      * 目录/Proc挂载方式
      */
    ProcMount: string;
    /**
      * 安全配置
      */
    Capabilities?: SecurityCapabilities;
}
/**
 * 应用部署模式
 */
export interface ApplicationDeployMode {
    /**
      * 1:指定节点部署 2:单元部署
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: number;
    /**
      * 资源ID
      */
    ResourceID: number;
    /**
      * 资源名
      */
    ResourceName: string;
}
/**
 * CreateIotDevice返回参数结构体
 */
export interface CreateIotDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEdgeUnitDevices请求参数结构体
 */
export interface CreateEdgeUnitDevicesRequest {
    /**
      * 无
      */
    EdgeUnitId: number;
    /**
      * 无
      */
    ProductId: string;
    /**
      * 无
      */
    DeviceNames: Array<string>;
}
/**
 * ModifySecret返回参数结构体
 */
export interface ModifySecretResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询结果排序条件
 */
export interface Sort {
    /**
      * 排序字段
      */
    Field?: string;
    /**
      * 排序方式，升序ASC / 降序DESC
      */
    Order?: string;
}
/**
 * DescribeEdgeUnitDeployGridItemYaml返回参数结构体
 */
export interface DescribeEdgeUnitDeployGridItemYamlResponse {
    /**
      * yaml，base64编码字符串
      */
    Yaml: string;
    /**
      * 对应类型的副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Replicas: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeUnitApplicationVisualization返回参数结构体
 */
export interface DescribeEdgeUnitApplicationVisualizationResponse {
    /**
      * 基本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicInfo: ApplicationBasicInfo;
    /**
      * 基本配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicConfig: ApplicationBasicConfig;
    /**
      * 卷配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Volumes: Array<Volume>;
    /**
      * 初始化容器配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitContainers: Array<Container>;
    /**
      * 容器配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Containers: Array<Container>;
    /**
      * 服务配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Service: Service;
    /**
      * Job配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Job: Job;
    /**
      * CronJob配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    CronJob: CronJob;
    /**
      * 重启策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestartPolicy: string;
    /**
      * HPA
注意：此字段可能返回 null，表示取不到有效值。
      */
    HorizontalPodAutoscaler: HorizontalPodAutoscaler;
    /**
      * 镜像拉取Secret
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImagePullSecrets: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeIotDevice返回参数结构体
 */
export interface DescribeIotDeviceResponse {
    /**
      * 设备id
      */
    Id: number;
    /**
      * 设备名称
      */
    Name: string;
    /**
      * 版本号
      */
    Version: string;
    /**
      * ssl证书
      */
    Cert: string;
    /**
      * ssl私钥
      */
    PrivateKey: string;
    /**
      * psk认证密钥
      */
    Psk: string;
    /**
      * 设备是否打开
      */
    Disabled: boolean;
    /**
      * 设备日志
      */
    LogSetting: number;
    /**
      * 设备日志级别
      */
    LogLevel: number;
    /**
      * mqtt参数
      */
    UserName: string;
    /**
      * mqtt参数
      */
    Password: string;
    /**
      * mqtt参数
      */
    ClientID: string;
    /**
      * 16进制的psk格式
      */
    PskHex: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 设备在线状态
      */
    Status: number;
    /**
      * 无
      */
    Region: string;
    /**
      * 无
      */
    UnitID: number;
    /**
      * 无
      */
    UnitName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgePod请求参数结构体
 */
export interface DescribeEdgePodRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * Pod名称
      */
    Name: string;
}
/**
 * DescribeNamespaceResources请求参数结构体
 */
export interface DescribeNamespaceResourcesRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * 命名空间
      */
    Namespace: string;
}
/**
 * DescribeMonitorMetrics请求参数结构体
 */
export interface DescribeMonitorMetricsRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 查询维度
      */
    QueryType: string;
    /**
      * 起始时间Unix秒时间戳
      */
    StartTime: number;
    /**
      * 终止时间Unix秒时间戳
      */
    EndTime: number;
    /**
      * 步长（分钟）
      */
    Interval: number;
    /**
      * 节点名称，查询节点监控时必填
      */
    NodeName?: string;
    /**
      * 命名空间，不填则默认为default
      */
    Namespace?: string;
    /**
      * Pod名称，查询Pod监控时必填
      */
    PodName?: string;
    /**
      * Workload名称，查询Workload监控时必填
      */
    WorkloadName?: string;
}
/**
 * ModifyNodeUnitTemplate返回参数结构体
 */
export interface ModifyNodeUnitTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 卷
 */
export interface Volume {
    /**
      * 来源(emptyDir|hostPath|configMap|secret|nfs)
      */
    Source: string;
    /**
      * 名称
      */
    Name: string;
    /**
      * Host挂载配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    HostPath?: VolumeHostPath;
    /**
      * ConfigMap挂载配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigMap?: VolumeConfigMap;
    /**
      * Secret挂载配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Secret?: VolumeConfigMap;
    /**
      * NFS挂载配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    NFS?: VolumeNFS;
}
/**
 * DescribeApplications请求参数结构体
 */
export interface DescribeApplicationsRequest {
    /**
      * 模糊搜索字符串
      */
    NamePattern?: string;
    /**
      * 默认 0
      */
    Offset?: number;
    /**
      * 默认 20
      */
    Limit?: number;
    /**
      * 仅支持对 DistributeTime 字段排序，ASC/DESC
      */
    Sort?: Array<FieldSort>;
}
/**
 * DescribeEdgeOperationLogs请求参数结构体
 */
export interface DescribeEdgeOperationLogsRequest {
    /**
      * 开始时间
      */
    BeginTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 偏移量
      */
    Offset: number;
    /**
      * 翻页大小
      */
    Limit: number;
    /**
      * 排序字段
      */
    Sort?: Array<FieldSort>;
    /**
      * 模块
      */
    Module?: string;
    /**
      * 过滤条件
      */
    Condition?: OperationLogsCondition;
}
/**
 * Grid部署应用信息
 */
export interface GridItemInfo {
    /**
      * 名称
      */
    Name: string;
    /**
      * 期望副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Replicas: number;
    /**
      * 可用副本数
      */
    AvailableReplicas: number;
    /**
      * 启动时间
      */
    StartTime: string;
    /**
      * 工作负载类型
      */
    WorkloadKind: string;
}
/**
 * SetRouteOnOff返回参数结构体
 */
export interface SetRouteOnOffResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 边缘节点标签
 */
export interface EdgeNodeLabel {
    /**
      * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 是否受保护
      */
    Protected: boolean;
}
/**
 * DeleteNamespace请求参数结构体
 */
export interface DeleteNamespaceRequest {
    /**
      * 单元ID
      */
    EdgeUnitID: number;
    /**
      * 命名空间
      */
    Namespace: string;
}
/**
 * 边缘节点信息
 */
export interface EdgeNodeInfo {
    /**
      * IECP边缘节点ID
      */
    Id: number;
    /**
      * 节点名称
      */
    Name: string;
    /**
      * 节点状态 （1健康｜2异常｜3离线｜4未激活）
      */
    Status: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 节点资源信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Resource: EdgeNodeResourceInfo;
    /**
      * CPU体系结构
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuArchitecture: string;
    /**
      * IP地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip: string;
    /**
      * 操作系统
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperatingSystem: string;
    /**
      * 节点所属的NodeUnit
key：NodeUnit模版ID，Value：NodeUnit模版名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    NodeUnits: KeyValueObj;
}
/**
 * GetMarketComponent请求参数结构体
 */
export interface GetMarketComponentRequest {
    /**
      * 组件ID
      */
    ID: number;
}
/**
 * HTTP探测配置
 */
export interface HttpProbe {
    /**
      * 请求路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    Path: string;
    /**
      * 请求端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port: number;
    /**
      * 请求地址，默认Pod的IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    Host?: string;
    /**
      * 请求模式  HTTP|HTTPS，默认HTTP
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scheme?: string;
    /**
      * HTTP的请求头
注意：此字段可能返回 null，表示取不到有效值。
      */
    Headers?: Array<HttpHeader>;
}
/**
 * DeleteMessageRoute返回参数结构体
 */
export interface DeleteMessageRouteResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeUnitDeployGrid请求参数结构体
 */
export interface DescribeEdgeUnitDeployGridRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * 命名空间，默认为default
      */
    Namespace?: string;
    /**
      * 模糊匹配
      */
    NamePattern?: string;
    /**
      * 分页offset，默认为0
      */
    Offset?: number;
    /**
      * 分页limit，默认为20
      */
    Limit?: number;
    /**
      * 排序，默认为ASC
      */
    Order?: string;
}
/**
 * ApplyMarketComponent返回参数结构体
 */
export interface ApplyMarketComponentResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApplicationYamlError返回参数结构体
 */
export interface DescribeApplicationYamlErrorResponse {
    /**
      * 是否通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    CheckPass: boolean;
    /**
      * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrType: number;
    /**
      * 错误信息
      */
    ErrInfo: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteIotDeviceBatch返回参数结构体
 */
export interface DeleteIotDeviceBatchResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEdgeNode返回参数结构体
 */
export interface CreateEdgeNodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEdgeNodes请求参数结构体
 */
export interface DeleteEdgeNodesRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * IECP边缘节点ID列表
      */
    NodeIds: Array<number>;
}
/**
 * DescribeApplicationYamlError请求参数结构体
 */
export interface DescribeApplicationYamlErrorRequest {
    /**
      * Yaml配置
      */
    Yaml: string;
}
/**
 * 端口配置
 */
export interface PortConfig {
    /**
      * 协议类型(tcp|udp)
      */
    Protocol: string;
    /**
      * 源端口
      */
    Port: number;
    /**
      * 目标端口
      */
    TargetPort: number;
    /**
      * 节点端口
      */
    NodePort: number;
}
/**
 * DescribeYeheResourceLimit请求参数结构体
 */
export declare type DescribeYeheResourceLimitRequest = null;
/**
 * DescribeIotDevices返回参数结构体
 */
export interface DescribeIotDevicesResponse {
    /**
      * 符合查找条件的总数量
      */
    TotalCount: number;
    /**
      * 设备列表
      */
    DeviceSet: Array<IotDevicesInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSecrets请求参数结构体
 */
export interface DescribeSecretsRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitID: number;
    /**
      * 页号
      */
    Offset: number;
    /**
      * 每页数目
      */
    Limit: number;
    /**
      * 命名空间
      */
    SecretNamespace?: string;
    /**
      * Secret名(模糊匹配)
      */
    NamePattern?: string;
    /**
      * Sort.Field:CreateTime Sort.Order:ASC|DESC
      */
    Sort?: FieldSort;
    /**
      * Secret类型(DockerConfigJson或Opaque)
      */
    SecretType?: string;
}
/**
 * DescribeNodeUnitTemplateOnNodeGroup请求参数结构体
 */
export interface DescribeNodeUnitTemplateOnNodeGroupRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * NodeGroup名称
      */
    NodeGroupName: string;
    /**
      * 命名空间，默认default
      */
    Namespace?: string;
    /**
      * 名称模糊匹配
      */
    NodeUnitNamePattern?: string;
    /**
      * 分页查询offset，默认0
      */
    Offset?: number;
    /**
      * 分页查询limit，默认20
      */
    Limit?: number;
    /**
      * 排序，默认DESC
      */
    Order?: string;
}
/**
 * 监控数据列
 */
export interface MonitorMetricsColumn {
    /**
      * 数据名称
      */
    ColumnName: string;
    /**
      * 数据内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    ColumnData: Array<string>;
    /**
      * 数据所属，查询Workload类型时有值
      */
    ColumnBelong: string;
    /**
      * 最大值
      */
    MaxValue: number;
    /**
      * 最小值
      */
    MinValue: number;
    /**
      * 平均值
      */
    AvgValue: number;
    /**
      * 时间戳数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ColumnTime: number;
}
/**
 * DescribeEdgeNode请求参数结构体
 */
export interface DescribeEdgeNodeRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * IECP边缘节点ID
      */
    NodeId: number;
}
/**
 * DescribeNodeUnit请求参数结构体
 */
export interface DescribeNodeUnitRequest {
    /**
      * 边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * NodeUnit所属的NodeGroup名称
      */
    NodeGroupName: string;
    /**
      * 命名空间，默认default
      */
    Namespace?: string;
    /**
      * 分页查询limit，默认20
      */
    Limit?: number;
    /**
      * 分页查询offset，默认0
      */
    Offset?: number;
    /**
      * 模糊匹配
      */
    NameFilter?: string;
}
/**
 * DeleteNodeUnit请求参数结构体
 */
export interface DeleteNodeUnitRequest {
    /**
      * IECP边缘单元ID
      */
    EdgeUnitId: number;
    /**
      * NodeUnit所属的NodeGroup名称
      */
    NodeGroupName: string;
    /**
      * NodeUnit名称
      */
    NodeUnitName: string;
    /**
      * 命名空间，默认为default
      */
    Namespace?: string;
    /**
      * NodeUnit包含的节点列表
      */
    Nodes?: Array<string>;
}
/**
 * ModifyEdgeUnitApplicationYaml返回参数结构体
 */
export interface ModifyEdgeUnitApplicationYamlResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 边缘节点资源信息
 */
export interface EdgeNodeResourceInfo {
    /**
      * 可使用的CPU 单位: m核
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllocatedCPU: string;
    /**
      * CPU总量 单位:m核
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCPU: string;
    /**
      * 已分配的内存 单位G
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllocatedMemory: string;
    /**
      * 内存总量 单位G
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalMemory: string;
    /**
      * 已分配的GPU资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    AllocatedGPU: string;
    /**
      * GPU总量
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalGPU: string;
    /**
      * 可使用的CPU 单位: m核
注意：此字段可能返回 null，表示取不到有效值。
      */
    AvailableCPU: string;
    /**
      * 可使用的内存 单位: G
注意：此字段可能返回 null，表示取不到有效值。
      */
    AvailableMemory: string;
    /**
      * 可使用的GPU资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    AvailableGPU: string;
}
/**
 * 安全能力
 */
export interface SecurityCapabilities {
    /**
      * 允许操作列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Add?: Array<string>;
    /**
      * 禁止操作列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Drop?: Array<string>;
}
/**
 * DeleteEdgeNodeUnitTemplates返回参数结构体
 */
export interface DeleteEdgeNodeUnitTemplatesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeDracoNode返回参数结构体
 */
export interface ModifyEdgeDracoNodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEdgeNode返回参数结构体
 */
export interface DescribeEdgeNodeResponse {
    /**
      * 节点ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: number;
    /**
      * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Kind: string;
    /**
      * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 节点状态 （1健康｜2异常｜3离线｜4未激活）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * CPU体系结构
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuArchitecture: string;
    /**
      * AI处理器体系结构
注意：此字段可能返回 null，表示取不到有效值。
      */
    AiChipArchitecture: string;
    /**
      * IP地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip: string;
    /**
      * 节点标签列表
      */
    Labels: Array<EdgeNodeLabel>;
    /**
      * 节点资源信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Resource: EdgeNodeResourceInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEdgeUnitApplicationYaml请求参数结构体
 */
export interface ModifyEdgeUnitApplicationYamlRequest {
    /**
      * 单元ID
      */
    EdgeUnitId: number;
    /**
      * 应用ID
      */
    ApplicationId: number;
    /**
      * Yaml配置
      */
    Yaml: string;
}
/**
 * DeleteEdgeUnitCloud请求参数结构体
 */
export interface DeleteEdgeUnitCloudRequest {
    /**
      * 边缘集群ID
      */
    EdgeUnitId: number;
}
/**
 * CreateEdgeUnitCloud请求参数结构体
 */
export interface CreateEdgeUnitCloudRequest {
    /**
      * 集群名称，长度小于32
      */
    Name: string;
    /**
      * k8s版本，仅支持1.16.7 和 1.18.2
      */
    K8sVersion: string;
    /**
      * 私有网络ID
      */
    VpcId?: string;
    /**
      * 集群描述
      */
    Description?: string;
    /**
      * 集群pod cidr， 默认  10.1.0.0/16
      */
    PodCIDR?: string;
    /**
      * 集群service cidr, 默认 10.2.0.0/16
      */
    ServiceCIDR?: string;
    /**
      * 是否开启监控。目前内存中权限开启联系产品开通白名单
      */
    OpenCloudMonitor?: boolean;
}
/**
 * DescribeEdgeUnitGridPods返回参数结构体
 */
export interface DescribeEdgeUnitGridPodsResponse {
    /**
      * Pod列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PodSet: Array<GridPodInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeConfigMapYamlError请求参数结构体
 */
export interface DescribeConfigMapYamlErrorRequest {
    /**
      * yaml文件
      */
    Yaml: string;
}
/**
 * ModifyEdgeUnitApplicationBasicInfo返回参数结构体
 */
export interface ModifyEdgeUnitApplicationBasicInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SetRouteOnOff请求参数结构体
 */
export interface SetRouteOnOffRequest {
    /**
      * 无
      */
    RouteID: number;
    /**
      * on 或 off
      */
    Status: string;
}
