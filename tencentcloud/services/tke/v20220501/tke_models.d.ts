/**
 * StartMachines返回参数结构体
 */
export interface StartMachinesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 节点信息
 */
export interface NativeNodeInfo {
    /**
     * 节点名称
     */
    MachineName?: string;
    /**
     * Machine 状态
     */
    MachineState?: string;
    /**
     * Machine 所在可用区
     */
    Zone?: string;
    /**
     * 节点计费类型。PREPAID：包年包月；POSTPAID_BY_HOUR：按量计费（默认）；
     */
    InstanceChargeType?: string;
    /**
     * 创建时间
     */
    CreatedAt?: string;
    /**
     * Machine 登录状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoginStatus?: string;
    /**
     * 是否开启缩容保护
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsProtectedFromScaleIn?: boolean;
    /**
     * Machine 名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisplayName?: string;
    /**
     * CPU核数，单位：核
     */
    CPU?: number;
    /**
     * GPU核数，单位：核
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GPU?: number;
    /**
     * 自动续费标识
     */
    RenewFlag?: string;
    /**
     * 节点计费模式（已弃用）
     */
    PayMode?: string;
    /**
     * 节点内存容量，单位：`GB`
     */
    Memory?: number;
    /**
     * 公网带宽相关信息设置
     */
    InternetAccessible?: InternetAccessible;
    /**
     * 机型所属机型族
     */
    InstanceFamily?: string;
    /**
     * 节点内网 IP
     */
    LanIp?: string;
    /**
     * 机型
     */
    InstanceType?: string;
    /**
     * 包年包月节点计费过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredTime?: string;
    /**
     * 安全组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecurityGroupIDs?: Array<string>;
    /**
     * VPC 唯一 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 子网唯一 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * OS的名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OsImage?: string;
    /**
     * **原生节点对应的实例 ID**
  
  - ins-q47ofw6 表示这个实例是一个 CVM 的实例
  - eks-f8mvyaep 表示这个实例是一个 CXM 的实例
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
}
/**
 * 健康检测模板规则
 */
export interface HealthCheckTemplateRule {
    /**
     * 健康检测项目名称
     */
    Name: string;
    /**
     * 健康检测规则描述
     */
    Description: string;
    /**
     * 修复动作
     */
    RepairAction: string;
    /**
     * 修复影响
     */
    RepairEffect: string;
    /**
     * 是否建议开启检测
     */
    ShouldEnable: boolean;
    /**
     * 是否建议修复
     */
    ShouldRepair: boolean;
    /**
     * 问题严重程度
     */
    Severity: string;
}
/**
 * 机型名称与GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本，是否开启MIG以及是否开启Fabric等相关配置信息
 */
export interface GPUConfig {
    /**
     * 机型名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceType: string;
    /**
     * GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本，是否开启MIG以及是否开启Fabric等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GPUParams: GPUParams;
}
/**
 * 健康检测规则
 */
export interface HealthCheckPolicyRule {
    /**
     * 健康检测规则
     */
    Name: string;
    /**
     * 是否检测此项目
     */
    Enabled: boolean;
    /**
     * 是否启用修复
     */
    AutoRepairEnabled: boolean;
}
/**
 * DeleteHealthCheckPolicy请求参数结构体
 */
export interface DeleteHealthCheckPolicyRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * 健康检测策略名称
     */
    HealthCheckPolicyName: string;
}
/**
 * CreateNodePool返回参数结构体
 */
export interface CreateNodePoolResponse {
    /**
     * 节点池 ID
     */
    NodePoolId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云主机实例。
 */
export interface TagSpecification {
    /**
     * 标签绑定的资源类型，当前支持类型：
  1.cluster：集群相关接口，TagSpecification 的 ResourceType 传参为 cluster
  2.machine：节点池相关接口，如：CreateNodePool, DescribeNodePools 等，TagSpecification 的 ResourceType 传参为 machine
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType?: string;
    /**
     * 标签对列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
}
/**
 * 原生节点池创建参数
 */
export interface CreateNativeNodePoolParam {
    /**
     * 节点池伸缩配置
     */
    Scaling: MachineSetScaling;
    /**
     * 子网列表
     */
    SubnetIds: Array<string>;
    /**
     * 节点计费类型。PREPAID：包年包月；POSTPAID_BY_HOUR：按量计费（默认）；
     */
    InstanceChargeType: string;
    /**
     * 系统盘配置
     */
    SystemDisk: Disk;
    /**
     * 机型列表
     */
    InstanceTypes: Array<string>;
    /**
     * 安全组列表
     */
    SecurityGroupIds?: Array<string>;
    /**
     * 自动升级配置
     */
    UpgradeSettings?: MachineUpgradeSettings;
    /**
     * 是否开启自愈能力
     */
    AutoRepair?: boolean;
    /**
     * 包年包月机型计费配置
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 节点池 Management 参数设置
     */
    Management?: ManagementConfig;
    /**
     * 故障自愈规则名称
     */
    HealthCheckPolicyName?: string;
    /**
     * 原生节点池hostName模式串
     */
    HostNamePattern?: string;
    /**
     * kubelet 自定义参数
     */
    KubeletArgs?: Array<string>;
    /**
     * 预定义脚本
     */
    Lifecycle?: LifecycleConfig;
    /**
     * 运行时根目录
     */
    RuntimeRootDir?: string;
    /**
     * 是否开启弹性伸缩
     */
    EnableAutoscaling?: boolean;
    /**
     * 期望节点数
     */
    Replicas?: number;
    /**
     * 公网带宽设置
     */
    InternetAccessible?: InternetAccessible;
    /**
     * 原生节点池数据盘列表
     */
    DataDisks?: Array<DataDisk>;
    /**
     * 节点池ssh公钥id数组
     */
    KeyIds?: Array<string>;
    /**
     * 节点池类型
     */
    MachineType?: string;
}
/**
 * DescribeNodePools返回参数结构体
 */
export interface DescribeNodePoolsResponse {
    /**
     * 节点池列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodePools?: Array<NodePool>;
    /**
     * 资源总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 第三方节点
 */
export interface ExternalNodeInfo {
    /**
     * 第三方节点名称
     */
    Name?: string;
    /**
     * CPU核数，单位：核
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CPU?: number;
    /**
     * 节点内存容量，单位：`GB`
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Memory?: number;
    /**
     * 第三方节点kubelet版本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    K8SVersion?: string;
}
/**
 * DescribeClusterInstances返回参数结构体
 */
export interface DescribeClusterInstancesResponse {
    /**
     * 集群中实例总数
     */
    TotalCount?: number;
    /**
     * 集群中实例列表
     */
    InstanceSet?: Array<Instance>;
    /**
     * 错误信息集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Errors?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 托管节点池运维窗口设置
 */
export interface AutoUpgradeOptions {
    /**
     * 自动升级开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoUpgradeStartTime?: string;
    /**
     * 自动升级持续时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Duration?: string;
    /**
     * 运维日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeeklyPeriod?: Array<string>;
}
/**
 * 自动扩缩容的节点
 */
export interface AutoscalingAdded {
    /**
     * 正在加入中的节点数量
     */
    Joining?: number;
    /**
     * 初始化中的节点数量
     */
    Initializing?: number;
    /**
     * 正常的节点数量
     */
    Normal?: number;
    /**
     * 节点总数
     */
    Total?: number;
}
/**
 * 集群的实例信息
 */
export interface Instance {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER
     */
    InstanceRole?: string;
    /**
     * 实例异常(或者处于初始化中)的原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedReason?: string;
    /**
     * 实例的状态
  - initializing创建中
  - running 运行中
  - failed 异常
     */
    InstanceState?: string;
    /**
     * 是否不可调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Unschedulable?: boolean;
    /**
     * 添加时间
     */
    CreatedTime?: string;
    /**
     * 节点内网IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LanIP?: string;
    /**
     * 资源池ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodePoolId?: string;
    /**
     * 原生节点参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Native?: NativeNodeInfo;
    /**
     * 普通节点参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Regular?: RegularNodeInfo;
    /**
     * 超级节点参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Super?: SuperNodeInfo;
    /**
     * 第三方节点参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    External?: ExternalNodeInfo;
    /**
     * 节点类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeType?: string;
}
/**
 * DescribeHealthCheckPolicyBindings请求参数结构体
 */
export interface DescribeHealthCheckPolicyBindingsRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * ·  HealthCheckPolicyName
      按照【健康检测规则名称】进行过滤。
      类型：String
      必选：否
     */
    Filter?: Array<Filter>;
    /**
     * 最大输出条数，默认20，最大为100
     */
    Limit?: number;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
}
/**
 * 节点统计列表
 */
export interface NodeCountSummary {
    /**
     * 手动管理的节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ManuallyAdded?: ManuallyAdded;
    /**
     * 自动管理的节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoscalingAdded?: AutoscalingAdded;
}
/**
 * 虚拟节点池信息
 */
export interface SuperNodePoolInfo {
    /**
     * 子网列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetIds?: Array<string>;
    /**
     * 安全组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecurityGroupIds?: Array<string>;
}
/**
 * 运行时配置
 */
export interface RuntimeConfig {
    /**
     * 运行时类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeType?: string;
    /**
     * 运行时版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeVersion?: string;
    /**
     * 运行时根目录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeRootDir?: string;
}
/**
 * k8s中标签，一般以数组的方式存在
 */
export interface Label {
    /**
     * map表中的Name
     */
    Name: string;
    /**
     * map表中的Value
     */
    Value: string;
}
/**
 * 健康检测策略和节点池的绑定关系
 */
export interface HealthCheckPolicyBinding {
    /**
     * 健康检测策略名称
     */
    Name?: string;
    /**
     * 规则创建时间
     */
    CreatedAt?: string;
    /**
     * 关联节点池数组
     */
    NodePools?: Array<string>;
}
/**
 * CreateHealthCheckPolicy请求参数结构体
 */
export interface CreateHealthCheckPolicyRequest {
    /**
     * 集群ID
     */
    ClusterId: string;
    /**
     * 健康检测策略
     */
    HealthCheckPolicy: HealthCheckPolicy;
}
/**
 * 节点自定义参数
 */
export interface InstanceExtraArgs {
    /**
     * kubelet自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Kubelet?: Array<string>;
}
/**
 * 托管节点池自动升级配置
 */
export interface MachineUpgradeSettings {
    /**
     * 是否开启自动升级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoUpgrade?: boolean;
    /**
     * 运维窗口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpgradeOptions?: AutoUpgradeOptions;
    /**
     * 升级项
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Components?: Array<string>;
    /**
     * 升级时，最大不可升级的节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxUnavailable?: IntOrString;
}
/**
 * StartMachines请求参数结构体
 */
export interface StartMachinesRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * 节点名字列表，一次请求，传入节点数量上限为100个
     */
    MachineNames: Array<string>;
}
/**
 * RebootMachines返回参数结构体
 */
export interface RebootMachinesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 包年包月配置
 */
export interface InstanceChargePrepaid {
    /**
     * 后付费计费周期，单位（月）：
  1，2，3，4，5，，6，7， 8，9，10，11，12，24，36，48，60
     */
    Period: number;
    /**
     * 预付费续费方式：
  - NOTIFY_AND_AUTO_RENEW：通知用户过期，且自动续费 (默认）
  - NOTIFY_AND_MANUAL_RENEW：通知用户过期，但不自动续费
  - DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知用户过期，也不自动续费
  
     */
    RenewFlag?: string;
}
/**
 * DeleteNodePool返回参数结构体
 */
export interface DeleteNodePoolResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签绑定的资源类型，当前支持类型："cluster"
 */
export interface Tag {
    /**
     * 标签键
     */
    Key?: string;
    /**
     * 标签值
     */
    Value?: string;
}
/**
 * 节点池弹性伸缩配置
 */
export interface MachineSetScaling {
    /**
     * 节点池最小副本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinReplicas?: number;
    /**
     * 节点池最大副本数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxReplicas?: number;
    /**
     * 节点池扩容策略。ZoneEquality：多可用区打散；ZonePriority：首选可用区优先；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatePolicy?: string;
}
/**
 * ModifyNodePool请求参数结构体
 */
export interface ModifyNodePoolRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * 节点池 ID
     */
    NodePoolId: string;
    /**
     * 节点池名称
     */
    Name?: string;
    /**
     * 节点  Labels
     */
    Labels?: Array<Label>;
    /**
     * 节点污点
     */
    Taints?: Array<Taint>;
    /**
     * 节点标签
     */
    Tags?: Array<TagSpecification>;
    /**
     * 是否开启删除保护
     */
    DeletionProtection?: boolean;
    /**
     * 节点是否不可调度
     */
    Unschedulable?: boolean;
    /**
     * 原生节点池更新参数
     */
    Native?: UpdateNativeNodePoolParam;
    /**
     * 节点 Annotation 列表
     */
    Annotations?: Array<Annotation>;
}
/**
 * 修改原生节点池参数
 */
export interface UpdateNativeNodePoolParam {
    /**
     * 伸缩配置
     */
    Scaling?: MachineSetScaling;
    /**
     * 子网列表
     */
    SubnetIds?: Array<string>;
    /**
     * 安全组列表
     */
    SecurityGroupIds?: Array<string>;
    /**
     * 自动升级配置
     */
    UpgradeSettings?: MachineUpgradeSettings;
    /**
     * 是否开启自愈能力
     */
    AutoRepair?: boolean;
    /**
     * 节点计费类型变更
  当前仅支持按量计费转包年包月：
  - PREPAID
  
     */
    InstanceChargeType?: string;
    /**
     * 包年包月机型计费配置
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 系统盘配置
     */
    SystemDisk?: Disk;
    /**
     * Machine 系统配置
     */
    Management?: ManagementConfig;
    /**
     * 故障自愈规则名称
     */
    HealthCheckPolicyName?: string;
    /**
     * 原生节点池hostName模式串
     */
    HostNamePattern?: string;
    /**
     * kubelet 自定义参数
     */
    KubeletArgs?: Array<string>;
    /**
     * 预定义脚本
     */
    Lifecycle?: LifecycleConfig;
    /**
     * 运行时根目录
     */
    RuntimeRootDir?: string;
    /**
     * 是否开启弹性伸缩
     */
    EnableAutoscaling?: boolean;
    /**
     * 机型列表
     */
    InstanceTypes?: Array<string>;
    /**
     * 期望节点数
     */
    Replicas?: number;
    /**
     * 数据盘列表
     */
    DataDisks?: Array<DataDisk>;
    /**
     * ssh公钥id数组
     */
    KeyIds?: Array<string>;
    /**
     * 节点池 GPU 配置
     */
    GPUConfigs?: Array<GPUConfig>;
}
/**
 * k8s中标注，一般以数组的方式存在
 */
export interface Annotation {
    /**
     * map表中的Name
     */
    Name: string;
    /**
     * map表中的Value
     */
    Value: string;
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
     * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Offset?: number;
    /**
     * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
     */
    Limit?: number;
    /**
     * 过滤条件列表:
  InstanceIds(实例ID),InstanceType(实例类型：Regular，Native，Super，External),VagueIpAddress(模糊匹配IP),Labels(k8s节点label),NodePoolNames(节点池名称),VagueInstanceName(模糊匹配节点名),InstanceStates(节点状态),Unschedulable(是否封锁),NodePoolIds(节点池ID)
     */
    Filters?: Array<Filter>;
    /**
     * 排序信息
     */
    SortBy?: SortBy;
}
/**
 * DeleteHealthCheckPolicy返回参数结构体
 */
export interface DeleteHealthCheckPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本，是否开启MIG以及是否开启Fabric
 */
export interface GPUParams {
    /**
     * GPU驱动版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Driver?: string;
    /**
     * CUDA版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CUDA?: string;
    /**
     * CUDNN版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CUDNN?: string;
    /**
     * 是否启用MIG特性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MIGEnable?: boolean;
    /**
     * 是否启用Fabric特性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Fabric?: boolean;
    /**
     * 自定义驱动下载地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomGPUDriver?: string;
}
/**
 * 节点池自定义脚本
 */
export interface LifecycleConfig {
    /**
     * 节点初始化前自定义脚本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreInit?: string;
    /**
     * 节点初始化后自定义脚本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PostInit?: string;
}
/**
 * RebootMachines请求参数结构体
 */
export interface RebootMachinesRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * 节点名字列表，一次请求，传入节点数量上限为100个
     */
    MachineNames: Array<string>;
    /**
     * 实例的关闭模式。取值范围：
  soft_first：表示在正常关闭失败后进行强制关闭
  hard：直接强制关闭
  soft：仅软关机默认取值：soft。
     */
    StopType?: string;
}
/**
 * ModifyNodePool返回参数结构体
 */
export interface ModifyNodePoolResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 普通节点池信息
 */
export interface RegularNodePoolInfo {
    /**
     * LaunchConfigurationId 配置
     */
    LaunchConfigurationId?: string;
    /**
     * AutoscalingGroupId 分组id
     */
    AutoscalingGroupId?: string;
    /**
     * NodeCountSummary 节点列表
     */
    NodeCountSummary?: NodeCountSummary;
    /**
     * 状态信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoscalingGroupStatus?: string;
    /**
     * 最大节点数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxNodesNum?: number;
    /**
     * 最小节点数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinNodesNum?: number;
    /**
     * 期望的节点数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DesiredNodesNum?: number;
    /**
     * 节点池osName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodePoolOs?: string;
    /**
     * 节点配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
}
/**
 * StopMachines请求参数结构体
 */
export interface StopMachinesRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * 节点名字列表，一次请求，传入节点数量上限为100个
     */
    MachineNames: Array<string>;
    /**
     * 实例的关闭模式。取值范围：
  soft_first：表示在正常关闭失败后进行强制关闭
  hard：直接强制关闭
  soft：仅软关机
     */
    StopType?: string;
}
/**
 * kubernetes Taint
 */
export interface Taint {
    /**
     * Taint的Key
     */
    Key?: string;
    /**
     * Taint的Value
     */
    Value?: string;
    /**
     * Taint的Effect
     */
    Effect?: string;
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
 * DescribeHealthCheckPolicies请求参数结构体
 */
export interface DescribeHealthCheckPoliciesRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * ·  HealthCheckPolicyName
      按照【健康检测策略名称】进行过滤。
      类型：String
      必选：否
     */
    Filters?: Array<Filter>;
    /**
     * 最大输出条数，默认20，最大为100
     */
    Limit?: number;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
}
/**
 * DescribeHealthCheckTemplate返回参数结构体
 */
export interface DescribeHealthCheckTemplateResponse {
    /**
     * 健康检测策略模板
     */
    HealthCheckTemplate?: HealthCheckTemplate;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateNodePool请求参数结构体
 */
export interface CreateNodePoolRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * 节点池名称
     */
    Name: string;
    /**
     * 节点池类型
     */
    Type: string;
    /**
     * 节点  Labels
     */
    Labels?: Array<Label>;
    /**
     * 节点污点
     */
    Taints?: Array<Taint>;
    /**
     * 节点标签
     */
    Tags?: Array<TagSpecification>;
    /**
     * 是否开启删除保护
     */
    DeletionProtection?: boolean;
    /**
     * 节点是否默认不可调度
     */
    Unschedulable?: boolean;
    /**
     * 原生节点池创建参数
     */
    Native?: CreateNativeNodePoolParam;
    /**
     * 节点 Annotation 列表
     */
    Annotations?: Array<Annotation>;
}
/**
 * 普通节点信息
 */
export interface RegularNodeInfo {
    /**
     * 节点配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /**
     * 自动伸缩组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoscalingGroupId?: string;
}
/**
 * DescribeHealthCheckPolicyBindings返回参数结构体
 */
export interface DescribeHealthCheckPolicyBindingsResponse {
    /**
     * 健康检测规则数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckPolicyBindings?: Array<HealthCheckPolicyBinding>;
    /**
     * 健康检测规则数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 原生节点池信息
 */
export interface NativeNodePoolInfo {
    /**
     * 伸缩配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Scaling?: MachineSetScaling;
    /**
     * 子网列表
     */
    SubnetIds?: Array<string>;
    /**
     * 安全组列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecurityGroupIds?: Array<string>;
    /**
     * 自动升级配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpgradeSettings?: MachineUpgradeSettings;
    /**
     * 是否开启自愈能力
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRepair?: boolean;
    /**
     * 节点计费类型
     */
    InstanceChargeType?: string;
    /**
     * 包年包月机型计费配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /**
     * 系统盘配置
     */
    SystemDisk?: Disk;
    /**
     * 密钥 ID 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyIds?: Array<string>;
    /**
     * Machine 系统配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Management?: ManagementConfig;
    /**
     * 故障自愈规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckPolicyName?: string;
    /**
     * 原生节点池hostName模式串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HostNamePattern?: string;
    /**
     * kubelet 自定义参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KubeletArgs?: Array<string>;
    /**
     * 预定义脚本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Lifecycle?: LifecycleConfig;
    /**
     * 运行时根目录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeRootDir?: string;
    /**
     * 是否开启弹性伸缩
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableAutoscaling?: boolean;
    /**
     * 机型列表
     */
    InstanceTypes?: Array<string>;
    /**
     * 期望节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Replicas?: number;
    /**
     * 就绪 Machine 个数
     */
    ReadyReplicas?: number;
    /**
     * 公网带宽设置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InternetAccessible?: InternetAccessible;
    /**
     * 原生节点池数据盘
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataDisks?: Array<DataDisk>;
    /**
     * 原生节点机型 Native, NativeCVM
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MachineType?: string;
}
/**
 * DescribeNodePools请求参数结构体
 */
export interface DescribeNodePoolsRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * 查询过滤条件：
  ·  NodePoolsName
      按照【节点池名】进行过滤。
      类型：String
      必选：否
  
  ·  NodePoolsId
      按照【节点池id】进行过滤。
      类型：String
      必选：否
  
  ·  tags
      按照【标签键值对】进行过滤。
      类型：String
      必选：否
  
  ·  tag:tag-key
      按照【标签键值对】进行过滤。
      类型：String
      必选：否
     */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 最大输出条数，默认20，最大为100
     */
    Limit?: number;
}
/**
 * 节点池信息
 */
export interface NodePool {
    /**
     * 集群 ID
     */
    ClusterId?: string;
    /**
     * 节点池 ID
     */
    NodePoolId?: string;
    /**
     * 节点标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<TagSpecification>;
    /**
     * 节点污点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Taints?: Array<Taint>;
    /**
     * 是否开启删除保护
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeletionProtection?: boolean;
    /**
     * 节点是否不可调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Unschedulable?: boolean;
    /**
     * 节点池类型
     */
    Type?: string;
    /**
     * 节点  Labels
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<Label>;
    /**
     * 节点池状态
     */
    LifeState?: string;
    /**
     * 创建时间
     */
    CreatedAt?: string;
    /**
     * 节点池名称
     */
    Name?: string;
    /**
     * 原生节点池参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Native?: NativeNodePoolInfo;
    /**
     * 节点 Annotation 列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Annotations?: Array<Annotation>;
    /**
     * 超级节点池参数，在Type等于Super该字段才有值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Super?: SuperNodePoolInfo;
    /**
     * 普通节点池参数，在Type等于Regular该字段才有值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Regular?: RegularNodePoolInfo;
    /**
     * 第三方节点池参数，在Type等于External该字段才有值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    External?: ExternalNodePoolInfo;
}
/**
 * DeleteNodePool请求参数结构体
 */
export interface DeleteNodePoolRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * 节点池 ID
     */
    NodePoolId: string;
}
/**
 * 描述了k8s集群相关配置与信息。
 */
export interface InstanceAdvancedSettings {
    /**
     * 该节点属于podCIDR大小自定义模式时，可指定节点上运行的pod数量上限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DesiredPodNumber: number;
    /**
     * base64 编码的用户脚本，在初始化节点之前执行，目前只对添加已有节点生效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreStartUserScript: string;
    /**
     * 运行时描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeConfig?: RuntimeConfig;
    /**
     * base64 编码的用户脚本, 此脚本会在 k8s 组件运行后执行, 需要用户保证脚本的可重入及重试逻辑, 脚本及其生成的日志文件可在节点的 /data/ccs_userscript/ 路径查看, 如果要求节点需要在进行初始化完成后才可加入调度, 可配合 unschedulable 参数使用, 在 userScript 最后初始化完成后, 添加 kubectl uncordon nodename --kubeconfig=/root/.kube/config 命令使节点加入调度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserScript?: string;
    /**
     * 节点相关的自定义参数信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraArgs?: InstanceExtraArgs;
}
/**
 * 数值结构
 */
export interface IntOrString {
    /**
     * 数值类型，0是int,  1是字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: number;
    /**
     * 整数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntVal?: number;
    /**
     * 字符串
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StrVal?: string;
}
/**
 * 第三方节点池信息
 */
export interface ExternalNodePoolInfo {
    /**
     * 第三方节点Runtime配置
     */
    RuntimeConfig?: RuntimeConfig;
    /**
     * 节点数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodesNum?: number;
}
/**
 * StopMachines返回参数结构体
 */
export interface StopMachinesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeHealthCheckTemplate请求参数结构体
 */
export declare type DescribeHealthCheckTemplateRequest = null;
/**
 * DescribeHealthCheckPolicies返回参数结构体
 */
export interface DescribeHealthCheckPoliciesResponse {
    /**
     * 健康检测策略数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HealthCheckPolicies?: Array<HealthCheckPolicy>;
    /**
     * 数组总数目
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 健康检测模板
 */
export interface HealthCheckTemplate {
    /**
     * 健康检测项
     */
    Rules: Array<HealthCheckTemplateRule>;
}
/**
 * 公网带宽
 */
export interface InternetAccessible {
    /**
     * 带宽
     */
    MaxBandwidthOut: number;
    /**
     * 网络计费方式
     */
    ChargeType: string;
    /**
     * 带宽包 ID
     */
    BandwidthPackageId?: string;
}
/**
 * ModifyHealthCheckPolicy请求参数结构体
 */
export interface ModifyHealthCheckPolicyRequest {
    /**
     * 集群 ID
     */
    ClusterId: string;
    /**
     * 健康检测策略
     */
    HealthCheckPolicy: HealthCheckPolicy;
}
/**
 * 超级节点信息
 */
export interface SuperNodeInfo {
    /**
     * 实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 自动续费标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewFlag?: number;
    /**
     * 资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType?: string;
    /**
     * 节点的 CPU 规格，单位：核。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CPU?: number;
    /**
     * 节点上 Pod 的 CPU总和，单位：核。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedCPU?: number;
    /**
     * 节点的内存规格，单位：Gi。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Memory?: number;
    /**
     * 节点上 Pod 的内存总和，单位：Gi。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedMemory?: number;
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * VPC 唯一 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 子网唯一 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 生效时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActiveAt?: string;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireAt?: string;
    /**
     * 可调度的单 Pod 最大 CPU 规格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxCPUScheduledPod?: number;
    /**
     * 实例属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceAttribute?: string;
}
/**
 * 手动加入的节点
 */
export interface ManuallyAdded {
    /**
     * 加入中的节点数量
     */
    Joining?: number;
    /**
     * 初始化中的节点数量
     */
    Initializing?: number;
    /**
     * 正常的节点数量
     */
    Normal?: number;
    /**
     * 节点总数
     */
    Total?: number;
}
/**
 * 托管节点池Management配置
 */
export interface ManagementConfig {
    /**
     * dns 配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Nameservers?: Array<string>;
    /**
     * hosts 配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Hosts?: Array<string>;
    /**
     * 内核参数配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KernelArgs?: Array<string>;
}
/**
 * ModifyHealthCheckPolicy返回参数结构体
 */
export interface ModifyHealthCheckPolicyResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 排序信息
 */
export interface SortBy {
    /**
     * 排序指标
     */
    FieldName?: string;
    /**
     * 排序方式
     */
    OrderType?: string;
}
/**
 * 健康检测规则
 */
export interface HealthCheckPolicy {
    /**
     * 健康检测策略名称
     */
    Name: string;
    /**
     * 健康检测策略规则列表
     */
    Rules: Array<HealthCheckPolicyRule>;
}
/**
 * 节点系统盘和数据盘配置
 */
export interface Disk {
    /**
     * 云盘类型
     */
    DiskType: string;
    /**
     * 云盘大小(G）
     */
    DiskSize: number;
    /**
     * 是否自动化格式盘并挂载
     */
    AutoFormatAndMount?: boolean;
    /**
     * 文件系统
     */
    FileSystem?: string;
    /**
     * 挂载目录
     */
    MountTarget?: string;
}
/**
 * CreateHealthCheckPolicy返回参数结构体
 */
export interface CreateHealthCheckPolicyResponse {
    /**
     * 健康检测策略名称
     */
    HealthCheckPolicyName?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述了k8s节点数据盘相关配置与信息。
 */
export interface DataDisk {
    /**
     * 云盘类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskType: string;
    /**
     * 文件系统(ext3/ext4/xfs)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileSystem: string;
    /**
     * 云盘大小(G）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskSize: number;
    /**
     * 是否自动化格式盘并挂载
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoFormatAndMount: boolean;
    /**
     * 挂载设备名或分区名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskPartition: string;
    /**
     * 挂载目录
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MountTarget?: string;
    /**
     * 传入该参数用于创建加密云盘，取值固定为ENCRYPT
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Encrypt?: string;
    /**
     * 购买加密盘时自定义密钥，当传入该参数时, Encrypt入参不为空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KmsKeyId?: string;
    /**
     * 快照ID，如果传入则根据此快照创建云硬盘，快照类型必须为数据盘快照
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotId?: string;
    /**
     * 云硬盘性能，单位：MB/s。使用此参数可给云硬盘购买额外的性能
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ThroughputPerformance?: number;
}
