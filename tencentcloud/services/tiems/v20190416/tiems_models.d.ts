/**
 * DisableRsgAsGroup请求参数结构体
 */
export interface DisableRsgAsGroupRequest {
    /**
      * 伸缩组 ID
      */
    Id: string;
}
/**
 * ExposeService返回参数结构体
 */
export interface ExposeServiceResponse {
    /**
      * 暴露方式
      */
    Expose?: ExposeInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 伸缩组活动关联的节点
 */
export interface RsgAsActivityRelatedInstance {
    /**
      * 节点 ID
      */
    InstanceId: string;
    /**
      * 节点状态
      */
    InstanceStatus: string;
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
 * DeleteRuntime返回参数结构体
 */
export interface DeleteRuntimeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateJob请求参数结构体
 */
export interface CreateJobRequest {
    /**
      * 任务名称
      */
    Name: string;
    /**
      * 使用的资源组 Id，默认使用共享资源组
      */
    ResourceGroupId: string;
    /**
      * 处理器配置, 单位为1/1000核；范围[100, 256000]
      */
    Cpu: number;
    /**
      * 内存配置, 单位为1M；范围[100, 256000]
      */
    Memory: number;
    /**
      * 运行集群
      */
    Cluster?: string;
    /**
      * 预测输入
      */
    PredictInput?: PredictInput;
    /**
      * 任务描述
      */
    Description?: string;
    /**
      * 同时处理任务的 Worker 个数
      */
    WorkerCount?: number;
    /**
      * 使用的配置 Id
      */
    ConfigId?: string;
    /**
      * GPU算力配置，单位为1/1000 卡，范围 [0, 256000]
      */
    Gpu?: number;
    /**
      * 显存配置, 单位为1M，范围 [0, 256000]
      */
    GpuMemory?: number;
    /**
      * GPU类型
      */
    GpuType?: string;
    /**
      * 量化输入
      */
    QuantizationInput?: QuantizationInput;
    /**
      * Cls日志主题ID
      */
    LogTopicId?: string;
}
/**
 * ExposeService请求参数结构体
 */
export interface ExposeServiceRequest {
    /**
      * 服务Id
      */
    ServiceId: string;
    /**
      * 暴露方式，支持 EXTERNAL（外网暴露），VPC （VPC内网打通）
      */
    ExposeType: string;
    /**
      * 暴露方式为 VPC 时，填写需要打通的私有网络Id
      */
    VpcId?: string;
    /**
      * 暴露方式为 VPC 时，填写需要打通的子网Id
      */
    SubnetId?: string;
}
/**
 * DescribeServiceConfigs返回参数结构体
 */
export interface DescribeServiceConfigsResponse {
    /**
      * 服务配置
      */
    ServiceConfigs?: Array<Config>;
    /**
      * 服务配置总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 扩缩容配置
 */
export interface Scaler {
    /**
      * 最大副本数，ScaleMode 为 MANUAL 时辞会此值会被置为 StartReplicas 取值
      */
    MaxReplicas: number;
    /**
      * 最小副本数，ScaleMode 为 MANUAL 时辞会此值会被置为 StartReplicas 取值
      */
    MinReplicas: number;
    /**
      * 起始副本数
      */
    StartReplicas: number;
    /**
      * 扩缩容指标，选择自动扩缩容时至少需要选择一个指标，支持CPU-UTIL、MEMORY-UTIL
      */
    HpaMetrics?: Array<Option>;
}
/**
 * CreateJob返回参数结构体
 */
export interface CreateJobResponse {
    /**
      * 任务
      */
    Job?: Job;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteService返回参数结构体
 */
export interface DeleteServiceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRsgAsGroups返回参数结构体
 */
export interface DescribeRsgAsGroupsResponse {
    /**
      * 所查询的伸缩组数组
      */
    RsgAsGroupSet?: Array<RsgAsGroup>;
    /**
      * 伸缩组数组总数目
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateService返回参数结构体
 */
export interface UpdateServiceResponse {
    /**
      * 服务
      */
    Service?: ModelService;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 节点
 */
export interface Instance {
    /**
      * 节点 ID
      */
    Id: string;
    /**
      * 节点所在地区
      */
    Zone: string;
    /**
      * 节点类型
      */
    InstanceType: string;
    /**
      * 节点充值类型
      */
    InstanceChargeType: string;
    /**
      * Cpu 核数
      */
    Cpu: number;
    /**
      * 内存
      */
    Memory: number;
    /**
      * Gpu 核数
      */
    Gpu: number;
    /**
      * 节点状态
      */
    State: string;
    /**
      * 节点故障信息
      */
    AbnormalReason: string;
    /**
      * 创建时间
      */
    Created: string;
    /**
      * 更新时间
      */
    Updated: string;
    /**
      * 到期时间
      */
    DeadlineTime: string;
    /**
      * 所属资源组 ID
      */
    ResourceGroupId: string;
    /**
      * 自动续费标签
      */
    RenewFlag: string;
    /**
      * 节点所在地域
      */
    Region: string;
    /**
      * 当前 Cpu 申请使用量
      */
    CpuRequested: number;
    /**
      * 当前 Memory 申请使用量
      */
    MemoryRequested: number;
    /**
      * 当前 Gpu 申请使用量
      */
    GpuRequested: number;
    /**
      * 节点所在伸缩组 ID
      */
    RsgAsGroupId: string;
}
/**
 * UpdateRsgAsGroup返回参数结构体
 */
export interface UpdateRsgAsGroupResponse {
    /**
      * 资源组的伸缩组
      */
    RsgAsGroup?: RsgAsGroup;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeServices返回参数结构体
 */
export interface DescribeServicesResponse {
    /**
      * 服务列表
      */
    Services?: Array<ModelService>;
    /**
      * 服务总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceGroups返回参数结构体
 */
export interface DescribeResourceGroupsResponse {
    /**
      * 资源组总数
      */
    TotalCount?: number;
    /**
      * 资源组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceGroups?: Array<ResourceGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRsgAsGroups请求参数结构体
 */
export interface DescribeRsgAsGroupsRequest {
    /**
      * 筛选选项
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为 0
      */
    Offset?: number;
    /**
      * 返回数量，默认为 20，最大值为 200
      */
    Limit?: number;
    /**
      * 输出列表的排列顺序。取值范围："ASC", "DESC"
      */
    Order?: string;
    /**
      * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
      */
    OrderField?: string;
}
/**
 * DeleteResourceGroup请求参数结构体
 */
export interface DeleteResourceGroupRequest {
    /**
      * 要删除的资源组 ID
      */
    ResourceGroupId: string;
}
/**
 * 状态
 */
export interface Conditions {
    /**
      * 原因
      */
    Reason: string;
    /**
      * 具有相同原因的副本个数
      */
    Count: number;
}
/**
 * DescribeServiceConfigs请求参数结构体
 */
export interface DescribeServiceConfigsRequest {
    /**
      * 筛选选项，支持按照name等进行筛选
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为1000
      */
    Limit?: number;
    /**
      * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
      */
    Order?: string;
    /**
      * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
      */
    OrderField?: string;
    /**
      * 是否按照配置名分页
      */
    PageByName?: boolean;
}
/**
 * DeleteRsgAsGroup请求参数结构体
 */
export interface DeleteRsgAsGroupRequest {
    /**
      * 伸缩组 ID
      */
    Id: string;
}
/**
 * 实例信息
 */
export interface ReplicaInfo {
    /**
      * 实例名称
      */
    Name: string;
    /**
      * 弹性网卡模式时，弹性网卡Ip
注意：此字段可能返回 null，表示取不到有效值。
      */
    EniIp: string;
    /**
      * Normal: 正常运行中; Abnormal: 异常；Waiting：等待中
      */
    Status: string;
    /**
      * 当 status为 Abnormal 的时候，一些额外的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
    /**
      * 重启次数
      */
    Restarted: number;
}
/**
 * DeleteServiceConfig返回参数结构体
 */
export interface DeleteServiceConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateRsgAsGroup请求参数结构体
 */
export interface UpdateRsgAsGroupRequest {
    /**
      * 伸缩组 ID
      */
    Id: string;
    /**
      * 重命名名称
      */
    Name?: string;
    /**
      * 伸缩组最大节点数
      */
    MaxSize?: number;
    /**
      * 伸缩组最小节点数
      */
    MinSize?: number;
    /**
      * 伸缩组期望的节点数
      */
    DesiredSize?: number;
}
/**
 * DeleteRsgAsGroup返回参数结构体
 */
export interface DeleteRsgAsGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 配置
 */
export interface Config {
    /**
      * Id
      */
    Id: string;
    /**
      * 配置名
      */
    Name: string;
    /**
      * 模型地址
      */
    ModelUri: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 运行环境
      */
    Runtime: string;
    /**
      * 配置版本
      */
    Version: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 配置描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
}
/**
 * 配置项
 */
export interface Option {
    /**
      * 名称
      */
    Name: string;
    /**
      * 取值
      */
    Value: number;
}
/**
 * 预测输入
 */
export interface PredictInput {
    /**
      * 输入路径，支持 cos 格式路径文件夹或文件
      */
    InputPath: string;
    /**
      * 输出路径，支持 cos 格式路径
      */
    OutputPath: string;
    /**
      * 输入数据格式，目前支持：JSON
      */
    InputDataFormat?: string;
    /**
      * 输出数据格式，目前支持：JSON
      */
    OutputDataFormat?: string;
    /**
      * 预测批大小，默认为 64
      */
    BatchSize?: number;
    /**
      * 模型签名
注意：此字段可能返回 null，表示取不到有效值。
      */
    SignatureName?: string;
}
/**
 * CreateRuntime返回参数结构体
 */
export interface CreateRuntimeResponse {
    /**
      * 运行环境
      */
    Runtime?: Runtime;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务
 */
export interface Job {
    /**
      * 任务 Id
      */
    Id: string;
    /**
      * 集群名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cluster: string;
    /**
      * Region 名
      */
    Region: string;
    /**
      * 任务名称
      */
    Name: string;
    /**
      * Worker 使用的运行环境
注意：此字段可能返回 null，表示取不到有效值。
      */
    Runtime: string;
    /**
      * 任务描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 配置 Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigId: string;
    /**
      * 预测输入
注意：此字段可能返回 null，表示取不到有效值。
      */
    PredictInput: PredictInput;
    /**
      * 任务状态
      */
    Status: JobStatus;
    /**
      * 任务创建时间
      */
    CreateTime: string;
    /**
      * 任务开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: string;
    /**
      * 任务结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: string;
    /**
      * 任务取消时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CancelTime: string;
    /**
      * 任务使用资源组 Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceGroupId: string;
    /**
      * 处理器配置, 单位为1/1000核；范围[100, 256000]
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cpu: number;
    /**
      * 内存配置, 单位为1M；范围[100, 256000]
注意：此字段可能返回 null，表示取不到有效值。
      */
    Memory: number;
    /**
      * GPU算力配置，单位为1/1000 卡，范围 [0, 256000]
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gpu: number;
    /**
      * 显存配置, 单位为1M，范围 [0, 256000]
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuMemory: number;
    /**
      * 任务使用资源组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceGroupName: string;
    /**
      * GPU类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuType: string;
    /**
      * 配置名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigName: string;
    /**
      * 配置版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigVersion: string;
    /**
      * Job类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobType: string;
    /**
      * 量化输入
注意：此字段可能返回 null，表示取不到有效值。
      */
    QuantizationInput: QuantizationInput;
    /**
      * Cls日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogTopicId: string;
}
/**
 * UpdateJob请求参数结构体
 */
export interface UpdateJobRequest {
    /**
      * 任务 Id
      */
    JobId: string;
    /**
      * 任务更新动作，支持：Cancel
      */
    JobAction?: string;
    /**
      * 备注
      */
    Description?: string;
}
/**
 * DescribeResourceGroups请求参数结构体
 */
export interface DescribeResourceGroupsRequest {
    /**
      * 筛选选项
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为200
      */
    Limit?: number;
    /**
      * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
      */
    Order?: string;
    /**
      * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
      */
    OrderField?: string;
}
/**
 * DescribeRuntimes返回参数结构体
 */
export interface DescribeRuntimesResponse {
    /**
      * TIEMS支持的运行环境列表
      */
    Runtimes?: Array<Runtime>;
    /**
      * 用户对runtime对权限
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserAccess?: number;
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
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
      * 资源组下节点总数
      */
    TotalCount?: number;
    /**
      * 资源组下节点列表
      */
    Instances?: Array<Instance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteResourceGroup返回参数结构体
 */
export interface DeleteResourceGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DisableRsgAsGroup返回参数结构体
 */
export interface DisableRsgAsGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
      * 筛选选项
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为200
      */
    Limit?: number;
    /**
      * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
      */
    Order?: string;
    /**
      * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
      */
    OrderField?: string;
    /**
      * 要查询的资源组 ID
      */
    ResourceGroupId?: string;
}
/**
 * CreateService返回参数结构体
 */
export interface CreateServiceResponse {
    /**
      * 服务
      */
    Service?: ModelService;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateService请求参数结构体
 */
export interface CreateServiceRequest {
    /**
      * 扩缩容配置
      */
    Scaler: Scaler;
    /**
      * 服务配置Id
      */
    ServiceConfigId: string;
    /**
      * 服务名称
      */
    Name: string;
    /**
      * 扩缩容方式，支持AUTO, MANUAL，分别表示自动扩缩容和手动扩缩容
      */
    ScaleMode: string;
    /**
      * 部署要使用的资源组Id，默认为共享资源组
      */
    ResourceGroupId: string;
    /**
      * 处理器配置, 单位为1/1000核；范围[100, 256000]
      */
    Cpu: number;
    /**
      * 内存配置, 单位为1M；范围[100, 256000]
      */
    Memory: number;
    /**
      * 集群，不填则使用默认集群
      */
    Cluster?: string;
    /**
      * 默认为空，表示不需要鉴权，TOKEN 表示选择 Token 鉴权方式
      */
    Authentication?: string;
    /**
      * GPU算力配置，单位为1/1000 卡，范围 [0, 256000]
      */
    Gpu?: number;
    /**
      * 显存配置, 单位为1M，范围 [0, 256000]
      */
    GpuMemory?: number;
    /**
      * 备注
      */
    Description?: string;
    /**
      * GPU类型
      */
    GpuType?: string;
    /**
      * Cls日志主题ID
      */
    LogTopicId?: string;
}
/**
 * EnableRsgAsGroup返回参数结构体
 */
export interface EnableRsgAsGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 任务状态
 */
export interface JobStatus {
    /**
      * 任务状态
      */
    Status: string;
    /**
      * 错误时为错误描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 预期Worker数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    DesiredWorkers: number;
    /**
      * 当前Worker数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    CurrentWorkers: number;
    /**
      * 副本名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Replicas: Array<string>;
    /**
      * 副本实例
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReplicaInfos: Array<ReplicaInfo>;
}
/**
 * UpdateService请求参数结构体
 */
export interface UpdateServiceRequest {
    /**
      * 服务Id
      */
    ServiceId: string;
    /**
      * 扩缩容配置
      */
    Scaler?: Scaler;
    /**
      * 服务配置Id
      */
    ServiceConfigId?: string;
    /**
      * 支持AUTO, MANUAL，分别表示自动扩缩容，手动扩缩容
      */
    ScaleMode?: string;
    /**
      * 支持STOP(停止) RESUME(重启)
      */
    ServiceAction?: string;
    /**
      * 备注
      */
    Description?: string;
    /**
      * GPU卡类型
      */
    GpuType?: string;
    /**
      * 处理器配置，单位为 1/1000 核
      */
    Cpu?: number;
    /**
      * 内存配置，单位为1M
      */
    Memory?: number;
    /**
      * 显卡配置，单位为 1/1000 卡
      */
    Gpu?: number;
    /**
      * Cls日志主题ID
      */
    LogTopicId?: string;
}
/**
 * 筛选项
 */
export interface Filter {
    /**
      * 名称
      */
    Name: string;
    /**
      * 取值
      */
    Values: Array<string>;
}
/**
 * CreateServiceConfig返回参数结构体
 */
export interface CreateServiceConfigResponse {
    /**
      * 服务配置
      */
    ServiceConfig?: Config;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 暴露信息
 */
export interface ExposeInfo {
    /**
      * 暴露方式，支持 EXTERNAL（外网暴露），VPC （VPC内网打通）
      */
    ExposeType: string;
    /**
      * 暴露Ip。暴露方式为 EXTERNAL 为外网 Ip，暴露方式为 VPC 时为指定 Vpc 下的Vip
      */
    Ip: string;
    /**
      * 暴露方式为 VPC 时，打通的私有网络Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 暴露方式为 VPC 时，打通的子网Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetId: string;
    /**
      * GATEWAY 服务id，ExposeType = GATEWAY 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    GateWayServiceId: string;
    /**
      * GATEWAY api id，ExposeType = GATEWAY 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    GateWayAPIId: string;
    /**
      * GATEWAY domain，ExposeType = GATEWAY 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    GateWayDomain: string;
}
/**
 * 资源组的伸缩组
 */
export interface RsgAsGroup {
    /**
      * 伸缩组 ID
      */
    Id: string;
    /**
      * 伸缩组所在地域
      */
    Region: string;
    /**
      * 伸缩组所在可用区
      */
    Zone: string;
    /**
      * 伸缩组所在集群
      */
    Cluster: string;
    /**
      * 伸缩组所在资源组 ID
      */
    RsgId: string;
    /**
      * 伸缩组名称
      */
    Name: string;
    /**
      * 伸缩组允许的最大节点个数
      */
    MaxSize: number;
    /**
      * 伸缩组允许的最小节点个数
      */
    MinSize: number;
    /**
      * 伸缩组创建时间
      */
    CreateTime: string;
    /**
      * 伸缩组更新时间
      */
    UpdateTime: string;
    /**
      * 伸缩组状态
      */
    Status: string;
    /**
      * 伸缩组节点类型
      */
    InstanceType: string;
    /**
      * 伸缩组内节点个数
      */
    InstanceCount: number;
    /**
      * 伸缩组起始节点数
      */
    DesiredSize: number;
}
/**
 * DeleteService请求参数结构体
 */
export interface DeleteServiceRequest {
    /**
      * 服务Id
      */
    ServiceId: string;
}
/**
 * 运行环境
 */
export interface Runtime {
    /**
      * 运行环境名称
      */
    Name: string;
    /**
      * 运行环境框架
      */
    Framework: string;
    /**
      * 运行环境描述
      */
    Description: string;
    /**
      * 是否为公开运行环境
注意：此字段可能返回 null，表示取不到有效值。
      */
    Public: boolean;
    /**
      * 是否打开健康检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    HealthCheckOn: boolean;
    /**
      * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Image: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: string;
}
/**
 * CreateRsgAsGroup返回参数结构体
 */
export interface CreateRsgAsGroupResponse {
    /**
      * 所创建的资源组的伸缩组
      */
    RsgAsGroup?: RsgAsGroup;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 服务状态
 */
export interface ServiceStatus {
    /**
      * 预期副本数
      */
    DesiredReplicas: number;
    /**
      * 当前副本数
      */
    CurrentReplicas: number;
    /**
      * Normal：正常运行中；Abnormal：服务异常，例如容器启动失败等；Waiting：服务等待中，例如容器下载镜像过程等；Stopped：已停止 Stopping 停止中；Resuming：重启中；Updating：服务更新中
      */
    Status: string;
    /**
      * 服务处于当前状态的原因集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    Conditions: Array<Conditions>;
    /**
      * 副本名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Replicas: Array<string>;
    /**
      * 运行状态对额外信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 副本信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReplicaInfos: Array<ReplicaInfo>;
}
/**
 * 伸缩组活动信息
 */
export interface RsgAsGroupActivity {
    /**
      * 伸缩组活动 ID
      */
    Id: string;
    /**
      * 关联的伸缩组 ID
      */
    RsgAsGroupId: string;
    /**
      * 活动类型
      */
    ActivityType: string;
    /**
      * 状态的编码
      */
    StatusCode: string;
    /**
      * 状态的消息
      */
    StatusMessage: string;
    /**
      * 活动原因
      */
    Cause: string;
    /**
      * 活动描述
      */
    Description: string;
    /**
      * 活动开始时间
      */
    StartTime: string;
    /**
      * 活动结束时间
      */
    EndTime: string;
    /**
      * 活动创建时间
      */
    CreateTime: string;
    /**
      * 活动相关联的节点
      */
    RsgAsActivityRelatedInstance: Array<RsgAsActivityRelatedInstance>;
    /**
      * 简略的状态消息
      */
    StatusMessageSimplified: string;
}
/**
 * DescribeRsgAsGroupActivities请求参数结构体
 */
export interface DescribeRsgAsGroupActivitiesRequest {
    /**
      * 伸缩组 ID
      */
    Id: string;
    /**
      * 查询活动的开始时间
      */
    StartTime?: string;
    /**
      * 查询互动的结束时间
      */
    EndTime?: string;
    /**
      * 筛选选项
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为 0
      */
    Offset?: number;
    /**
      * 返回数量，默认为 20，最大值为 200
      */
    Limit?: number;
    /**
      * 输出列表的排列顺序。取值范围："ASC", "DESC"
      */
    Order?: string;
    /**
      * 排序的依据字段， 取值范围 "CREATE_TIME", "UPDATE_TIME", "NAME"
      */
    OrderField?: string;
}
/**
 * 资源组
 */
export interface ResourceGroup {
    /**
      * 资源组 Id
      */
    Id: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 集群
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cluster: string;
    /**
      * 资源组名称
      */
    Name: string;
    /**
      * 资源组描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * 创建时间
      */
    Created: string;
    /**
      * 更新时间
      */
    Updated: string;
    /**
      * 资源组主机数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceCount: number;
    /**
      * 使用资源组的服务数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceCount: number;
    /**
      * 使用资源组的任务数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    JobCount: number;
    /**
      * 资源组是否为公共资源组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Public: boolean;
    /**
      * 机器类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceType: string;
    /**
      * 资源组状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 显卡总张数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Gpu: number;
    /**
      * 处理器总核数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cpu: number;
    /**
      * 内存总量，单位为G
注意：此字段可能返回 null，表示取不到有效值。
      */
    Memory: number;
    /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone: string;
    /**
      * Gpu类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuType: Array<string>;
    /**
      * 该资源组下是否有预付费资源
注意：此字段可能返回 null，表示取不到有效值。
      */
    HasPrepaid: boolean;
    /**
      * 资源组是否允许预付费或后付费模式
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayMode: string;
}
/**
 * DeleteJob请求参数结构体
 */
export interface DeleteJobRequest {
    /**
      * 任务 Id
      */
    JobId: string;
}
/**
 * DeleteInstance请求参数结构体
 */
export interface DeleteInstanceRequest {
    /**
      * 要删除的节点 ID
      */
    InstanceId: string;
}
/**
 * CreateRsgAsGroup请求参数结构体
 */
export interface CreateRsgAsGroupRequest {
    /**
      * 资源组 ID
      */
    RsgId: string;
    /**
      * 伸缩组允许的最大节点数
      */
    MaxSize: number;
    /**
      * 伸缩组允许的最小节点数
      */
    MinSize: number;
    /**
      * 伸缩组的节点规格
      */
    InstanceType: string;
    /**
      * 资源组所在的集群名
      */
    Cluster?: string;
    /**
      * 伸缩组名称
      */
    Name?: string;
    /**
      * 伸缩组期望的节点数
      */
    DesiredSize?: number;
}
/**
 * DescribeRuntimes请求参数结构体
 */
export declare type DescribeRuntimesRequest = null;
/**
 * EnableRsgAsGroup请求参数结构体
 */
export interface EnableRsgAsGroupRequest {
    /**
      * 伸缩组 ID
      */
    Id: string;
}
/**
 * CreateServiceConfig请求参数结构体
 */
export interface CreateServiceConfigRequest {
    /**
      * 配置名称
      */
    Name: string;
    /**
      * 运行环境
      */
    Runtime: string;
    /**
      * 模型地址，支持cos路径，格式为 cos://bucket名-appid.cos.region名.myqcloud.com/模型文件夹路径。为模型文件的上一层文件夹地址。
      */
    ModelUri: string;
    /**
      * 配置描述
      */
    Description?: string;
}
/**
 * 量化输入
 */
export interface QuantizationInput {
    /**
      * 量化输入路径
      */
    InputPath: string;
    /**
      * 量化输出路径
      */
    OutputPath: string;
    /**
      * 量化批大小
      */
    BatchSize?: number;
    /**
      * 量化精度，支持：FP32，FP16，INT8
      */
    Precision?: string;
    /**
      * 转换类型
      */
    ConvertType?: string;
}
/**
 * UpdateJob返回参数结构体
 */
export interface UpdateJobResponse {
    /**
      * 任务
注意：此字段可能返回 null，表示取不到有效值。
      */
    Job?: Job;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateRuntime请求参数结构体
 */
export interface CreateRuntimeRequest {
    /**
      * 全局唯一的运行环境名称
      */
    Name: string;
    /**
      * 运行环境镜像地址
      */
    Image: string;
    /**
      * 运行环境框架
      */
    Framework?: string;
    /**
      * 运行环境描述
      */
    Description?: string;
    /**
      * 是否支持健康检查，默认为False
      */
    HealthCheckOn?: boolean;
}
/**
 * 模型服务
 */
export interface ModelService {
    /**
      * 服务ID
      */
    Id: string;
    /**
      * 运行集群
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cluster: string;
    /**
      * 服务名称
      */
    Name: string;
    /**
      * 运行环境
      */
    Runtime: string;
    /**
      * 模型地址
      */
    ModelUri: string;
    /**
      * 处理器配置, 单位为1/1000核
      */
    Cpu: number;
    /**
      * 内存配置, 单位为1M
      */
    Memory: number;
    /**
      * GPU 配置, 单位为1/1000 卡
      */
    Gpu: number;
    /**
      * 显存配置, 单位为1M
      */
    GpuMemory: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 支持AUTO, MANUAL
      */
    ScaleMode: string;
    /**
      * 弹性伸缩配置
      */
    Scaler: Scaler;
    /**
      * 服务状态
      */
    Status: ServiceStatus;
    /**
      * 访问密钥
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccessToken: string;
    /**
      * 服务配置Id
      */
    ConfigId: string;
    /**
      * 服务配置名
      */
    ConfigName: string;
    /**
      * 服务运行时长
      */
    ServeSeconds: number;
    /**
      * 配置版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigVersion: string;
    /**
      * 服务使用资源组 Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceGroupId: string;
    /**
      * 暴露方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Exposes: Array<ExposeInfo>;
    /**
      * Region 名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 服务使用资源组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceGroupName: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description: string;
    /**
      * GPU类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    GpuType: string;
    /**
      * Cls日志主题Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogTopicId: string;
}
/**
 * DeleteServiceConfig请求参数结构体
 */
export interface DeleteServiceConfigRequest {
    /**
      * 服务配置Id
      */
    ServiceConfigId?: string;
    /**
      * 服务配置名称
      */
    ServiceConfigName?: string;
}
/**
 * DeleteRuntime请求参数结构体
 */
export interface DeleteRuntimeRequest {
    /**
      * 要删除的Runtime名
      */
    Runtime: string;
}
/**
 * DescribeRsgAsGroupActivities返回参数结构体
 */
export interface DescribeRsgAsGroupActivitiesResponse {
    /**
      * 伸缩组活动数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    RsgAsGroupActivitySet?: Array<RsgAsGroupActivity>;
    /**
      * 所查询的伸缩组活动总数目
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeServices请求参数结构体
 */
export interface DescribeServicesRequest {
    /**
      * 筛选选项，支持筛选的字段：id, region, zone, cluster, status, runtime, rsg_id
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 返回数量，默认为20，最大值为100
      */
    Limit?: number;
    /**
      * 输出列表的排列顺序。取值范围：ASC：升序排列 DESC：降序排列
      */
    Order?: string;
    /**
      * 排序的依据字段， 取值范围 "CREATE_TIME" "UPDATE_TIME"
      */
    OrderField?: string;
}
