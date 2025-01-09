/**
 * HAI 实例的网络配置和消耗情况
 */
export interface NetworkStatus {
    /**
     * HAI 的实例 ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 公网 IP 地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AddressIp?: string;
    /**
     * 出带宽上限，单位Mbps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bandwidth?: number;
    /**
     * 流量包总量，单位GB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalTrafficAmount?: number;
    /**
     * 流量包剩余量，单位GB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemainingTrafficAmount?: number;
}
/**
 * InquirePriceRunInstances返回参数结构体
 */
export interface InquirePriceRunInstancesResponse {
    /**
     * 发货参数对应的价格组合，当DryRun=True，会返回空
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Price?: Price;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StopInstance请求参数结构体
 */
export interface StopInstanceRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * hai实例关机的模式，目前仅支持关机不收费：
  STOP_CHARGE -- 关闭hai实例，释放计算资源，停止收取计算资源的费用。
  注意：默认值为STOP_CHARGE
     */
    StopMode?: string;
    /**
     * 默认为False，True代表只验证接口连通性
     */
    DryRun?: boolean;
}
/**
 * DescribeServiceLoginSettings返回参数结构体
 */
export interface DescribeServiceLoginSettingsResponse {
    /**
     * 服务登录配置详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoginSettings?: Array<LoginSetting>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceNetworkStatus返回参数结构体
 */
export interface DescribeInstanceNetworkStatusResponse {
    /**
     * 查询结果集长度
     */
    TotalCount?: number;
    /**
     * 查询结果集
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NetworkStatusSet?: Array<NetworkStatus>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例信息
 */
export interface Instance {
    /**
     * 实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 实例状态：
  PENDING：表示创建中
  LAUNCH_FAILED：表示创建失败
  RUNNING：表示运行中
  ARREARS：表示待回收
  STOPPED_NO_CHARGE：表示关机不收费
  TERMINATING：表示销毁中
  TERMINATED：表示已销毁
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceState?: string;
    /**
     * 应用名称
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationName?: string;
    /**
     * 算力套餐名称
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BundleName?: string;
    /**
     * 实例所包含的GPU卡数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GPUCount?: number;
    /**
     * 算力
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GPUPerformance?: string;
    /**
     * 显存
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GPUMemory?: string;
    /**
     * CPU核数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CPU?: string;
    /**
     * 内存
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Memory?: string;
    /**
     * 系统盘数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SystemDisk?: SystemDisk;
    /**
     * 内网ip地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PrivateIpAddresses?: Array<string>;
    /**
     * 公网ip地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PublicIpAddresses?: Array<string>;
    /**
     * 安全组ID
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecurityGroupIds?: Array<string>;
    /**
     * 实例最新操作
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestOperation?: string;
    /**
     * 实例最新操作状态：
  SUCCESS：表示操作成功
  OPERATING：表示操作执行中
  FAILED：表示操作失败
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LatestOperationState?: string;
    /**
     * 实例创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 公网出带宽上限，默认10Mbps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxOutBandwidth?: string;
    /**
     * 每月免费流量，默认500G
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxFreeTraffic?: string;
    /**
     * 应用配置环境
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigurationEnvironment?: string;
    /**
     * 实例包含的登录服务详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LoginServices?: Array<LoginService>;
    /**
     * 应用服务的操作系统类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OSType?: string;
}
/**
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeApplications返回参数结构体
 */
export interface DescribeApplicationsResponse {
    /**
     * 应用总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 分页返回的应用列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationSet?: Array<ApplicationInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * StartInstance请求参数结构体
 */
export interface StartInstanceRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 默认为False，True代表只验证接口连通性
     */
    DryRun?: boolean;
}
/**
 * 某服务的登录配置
 */
export interface LoginSetting {
    /**
     * 服务名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName?: string;
    /**
     * 服务登录url
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Url?: string;
}
/**
 * 地域列表
 */
export interface RegionInfo {
    /**
     * ap-guangzhou
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 华南地区(广州)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionName?: string;
    /**
     * 地域是否可用状态
  AVAILABLE：可用
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionState?: string;
    /**
     * 学术加速是否支持：
  NO_NEED_SUPPORT表示不需支持；NOT_SUPPORT_YET表示暂未支持；ALREADY_SUPPORT表示已经支持。对于ALREADY_SUPPORT的地域才需进一步调用DescribeScholarRocketStatus查看学术加速是开启还是关闭
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScholarRocketSupportState?: string;
}
/**
 * 费用数据结构体
 */
export interface Price {
    /**
     * 实例价格信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstancePrice?: ItemPrice;
    /**
     * 云盘价格信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CloudDiskPrice?: ItemPrice;
    /**
     * 分实例价格
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PriceDetailSet?: Array<ItemPriceDetail>;
}
/**
 * TerminateInstances请求参数结构体
 */
export interface TerminateInstancesRequest {
    /**
     * 实例ID列表
     */
    InstanceIds: Array<string>;
    /**
     * 默认为False，True代表只验证接口连通性
     */
    DryRun?: boolean;
}
/**
 * DescribeMuskPrompts请求参数结构体
 */
export interface DescribeMuskPromptsRequest {
    /**
     * workgroup id
     */
    WorkgroupId: string;
    /**
     * workflow id
     */
    WorkflowId: string;
    /**
     * offset
     */
    Offset: number;
    /**
     * limit
     */
    Limit: number;
    /**
     * 过滤参数 支持过滤的键值： PromptId，Status
     */
    Filters?: Array<Filter>;
}
/**
 * DescribeScenes返回参数结构体
 */
export interface DescribeScenesResponse {
    /**
     * 场景详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SceneSet?: Array<SceneInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeApplications请求参数结构体
 */
export interface DescribeApplicationsRequest {
    /**
     * 应用id列表
     */
    ApplicationIds?: Array<string>;
    /**
     * 过滤器，跟ApplicationIds不能共用，支持的filter主要有：
  application-id: 精确匹配;
  scene-id: 精确匹配;
  application-name: 模糊匹配;
  application-type: 精确匹配;
     */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认为0
     */
    Offset?: number;
    /**
     * 返回量，默认为20
  MC：1000
  用户：100
  
     */
    Limit?: number;
    /**
     * 应用列表排序的依据字段。取值范围："CREATED_TIME"：依据应用的创建时间排序。 "APPLICATION_SIZE"：依据应用的大小排序。默认按应用的创建时间排序。
     */
    OrderField?: string;
    /**
     * 输出应用列表的排列顺序。取值范围："ASC"：升序排列。 "DESC"：降序排列。默认按降序排列。
     */
    Order?: string;
}
/**
 * 场景详情
 */
export interface SceneInfo {
    /**
     * 场景id
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SceneId?: string;
    /**
     * 场景名
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SceneName?: string;
}
/**
 * RunInstances请求参数结构体
 */
export interface RunInstancesRequest {
    /**
     * 应用ID
     */
    ApplicationId: string;
    /**
     * 算力套餐类型
     */
    BundleType: string;
    /**
     * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
     */
    SystemDisk?: SystemDisk;
    /**
     * 购买实例数量。
     */
    InstanceCount?: number;
    /**
     * 实例显示名称
     */
    InstanceName?: string;
    /**
     * 幂等请求的token
     */
    ClientToken?: string;
    /**
     * DryRun为True就是只验接口连通性，默认为False
     */
    DryRun?: boolean;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 实例总数
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 分页实例详情
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceSet?: Array<Instance>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 描述了操作系统所在块设备即系统盘的信息
 */
export interface SystemDisk {
    /**
     * 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：<br><li>LOCAL_BASIC：本地硬盘<br><li>LOCAL_SSD：本地SSD硬盘<br><li>CLOUD_BASIC：普通云硬盘<br><li>CLOUD_SSD：SSD云硬盘<br><li>CLOUD_PREMIUM：高性能云硬盘<br><li>CLOUD_BSSD：通用性SSD云硬盘<br><br>默认取值：当前有库存的硬盘类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskType?: string;
    /**
     * 系统盘大小，单位：GB。默认值为 80
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskSize?: number;
    /**
     * 系统盘分区盘符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskName?: string;
}
/**
 * RunInstances返回参数结构体
 */
export interface RunInstancesResponse {
    /**
     * 实例ID列表
     */
    InstanceIdSet?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 实例元组
     */
    InstanceIds?: Array<string>;
    /**
     * 描述键值对过滤器，用于条件过滤查询。目前支持的过滤器有：instance-id，实例id；instance-state，实例状态；charge-type，付费方式；public-ip-address，公网IP过滤
     */
    Filters?: Array<Filter>;
    /**
     * 偏移量，默认为0
  
     */
    Offset?: number;
    /**
     * 返回量，默认为20
     */
    Limit?: number;
}
/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

- 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
- 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
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
 * musk prompt详情
 */
export interface MuskPromptInfo {
    /**
     * workflow id
     */
    WorkflowId?: string;
    /**
     * workgroup id
     */
    WorkgroupId?: string;
    /**
     * prompt id
     */
    PromptId?: string;
    /**
     * 生成的内容
     */
    OutputResource?: Array<string>;
    /**
     * prompt status
  0: 执行中
  1: 执行成功
  2: 执行失败
     */
    Status?: number;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 更新时间
     */
    UpdateTime?: string;
    /**
     * 任务执行耗时，单位毫秒
     */
    Cost?: number;
    /**
     * 任务执行失败错误信息
     */
    ErrorMessage?: string;
}
/**
 * DescribeScenes请求参数结构体
 */
export interface DescribeScenesRequest {
    /**
     * 场景id列表
     */
    SceneIds?: Array<string>;
}
/**
 * DescribeRegions返回参数结构体
 */
export interface DescribeRegionsResponse {
    /**
     * 地域列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionSet?: Array<RegionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InquirePriceRunInstances请求参数结构体
 */
export interface InquirePriceRunInstancesRequest {
    /**
     * 应用ID
     */
    ApplicationId: string;
    /**
     * 算力套餐类型
     */
    BundleType: string;
    /**
     * 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。
     */
    SystemDisk?: SystemDisk;
    /**
     * 购买实例数量。
     */
    InstanceCount?: number;
    /**
     * 实例显示名称
     */
    InstanceName?: string;
    /**
     * 幂等请求token
     */
    ClientToken?: string;
    /**
     * DryRun为True就是只验接口连通性，默认为False
     */
    DryRun?: boolean;
    /**
     * 付费方式，POSTPAID_BY_HOUR按量后付费，PREPAID_BY_MONTH预付费按月，PREPAID_BY_DAY预付费按天
     */
    InstanceChargeType?: string;
    /**
     * 预付费参数
     */
    InstanceChargePrepaid?: InstanceChargePrepaid;
}
/**
 * StartInstance返回参数结构体
 */
export interface StartInstanceResponse {
    /**
     * task任务id
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateMuskPrompt返回参数结构体
 */
export interface CreateMuskPromptResponse {
    /**
     * prompt id
     */
    PromptId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeServiceLoginSettings请求参数结构体
 */
export interface DescribeServiceLoginSettingsRequest {
    /**
     * 实例id
     */
    InstanceId: string;
    /**
     * 服务名称
     */
    ServiceName?: string;
}
/**
 * 应用信息
 */
export interface ApplicationInfo {
    /**
     * 应用id
  
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
    Description?: string;
    /**
     * 应用的环境配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigEnvironment?: string;
    /**
     * 系统盘大小下限
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MinSystemDiskSize?: number;
    /**
     * 应用类型，目前该项取值可以为PRIVATE_APPLICATION或者PUBLIC_APPLICATION
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationType?: string;
    /**
     * 应用状态：CREATING-创建中；ONLINE -正常在线；DELETING -删除中；ARREARS - 欠费隔离
  示例值：ONLINE
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationState?: string;
    /**
     * 应用创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 应用大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApplicationSize?: number;
}
/**
 * 分实例价格
 */
export interface ItemPriceDetail {
    /**
     * 实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 实例价格详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstancePrice?: ItemPrice;
    /**
     * 磁盘价格详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CloudDiskPrice?: ItemPrice;
    /**
     * 该实例的总价钱
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceTotalPrice?: ItemPrice;
}
/**
 * CreateMuskPrompt请求参数结构体
 */
export interface CreateMuskPromptRequest {
    /**
     * workgroup id
     */
    WorkgroupId: string;
    /**
     * workflow id
     */
    WorkflowId: string;
    /**
     * prompt 参数
     */
    PromptParams: string;
}
/**
 * DescribeRegions请求参数结构体
 */
export declare type DescribeRegionsRequest = null;
/**
 * 套餐价格
 */
export interface ItemPrice {
    /**
     * 原单价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UnitPrice?: number;
    /**
     * 折扣后单价
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiscountUnitPrice?: number;
    /**
     * 折扣
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Discount?: number;
    /**
     * 单位：时/月
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChargeUnit?: string;
    /**
     * 商品数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Amount?: number;
}
/**
 * DescribeInstanceNetworkStatus请求参数结构体
 */
export interface DescribeInstanceNetworkStatusRequest {
    /**
     * 实例ID数组，单次请求最多不超过100个实例
     */
    InstanceIds: Array<string>;
}
/**
 * 登录服务详情
 */
export interface LoginService {
    /**
     * 登录方式名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceName?: string;
}
/**
 * StopInstance返回参数结构体
 */
export interface StopInstanceResponse {
    /**
     * task任务id
     */
    TaskId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例预付费入参
 */
export interface InstanceChargePrepaid {
    /**
     * 时长，默认值：1
     */
    Period?: number;
    /**
     * 续费标志可选参数：
  NOTIFY_AND_MANUAL_RENEW：表示默认状态(用户未设置，即初始状态：若用户有预付费不停服特权，也会对该值进行自动续费)
  NOTIFY_AND_AUTO_RENEW：表示自动续费
  DISABLE_NOTIFY_AND_MANUAL_RENEW：表示明确不自动续费(用户设置)
  默认值：NOTIFY_AND_MANUAL_RENEW
  
     */
    RenewFlag?: string;
    /**
     * 时长单位，默认值MONTH
     */
    TimeUnit?: string;
}
/**
 * DescribeMuskPrompts返回参数结构体
 */
export interface DescribeMuskPromptsResponse {
    /**
     * total count
     */
    TotalCount?: number;
    /**
     * prompt列表详情
     */
    MuskPromptInfos?: Array<MuskPromptInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
