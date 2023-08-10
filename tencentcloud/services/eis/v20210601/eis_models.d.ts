/**
 * ListRuntimesMC返回参数结构体
 */
export interface ListRuntimesMCResponse {
    /**
     * 运行时列表
     */
    Runtimes?: Array<RuntimeMC>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 运行时详细信息
 */
export interface RuntimeMC {
    /**
     * 环境id
     */
    RuntimeId: number;
    /**
     * 主账号uin
     */
    Uin: string;
    /**
     * 环境名称，用户输入，同一uin内唯一
     */
    DisplayName: string;
    /**
     * 环境所在地域，tianjin，beijiing，guangzhou等
     */
    Zone: string;
    /**
     * 环境类型：0: sandbox, 1:shared, 2:private 3: trial
     */
    Type: number;
    /**
     * 运行时状态：1:running, 2:deleting, 3:creating, 4:scaling, 5:unavailable, 6:deleted, 7:errored
     */
    Status: number;
    /**
     * 环境创建时间
     */
    CreatedAt: number;
    /**
     * 环境更新时间
     */
    UpdatedAt: number;
    /**
     * 环境资源配置，worker总配额，0:0vCore0G, 1:1vCore2G, 2:2vCore4G, 4:4vCore8G, 8:8vCore16G, 12:12vCore24G, 16:16vCore32G, 100:unlimited
     */
    WorkerSize: number;
    /**
     * 环境资源配置，worker副本数
     */
    WorkerReplica: number;
    /**
     * 正在运行的应用实例数量
     */
    RunningInstanceCount: number;
    /**
     * 已使用cpu核数
     */
    CpuUsed: number;
    /**
     * cpu核数上限
     */
    CpuLimit: number;
    /**
     * 已使用内存 MB
     */
    MemoryUsed: number;
    /**
     * 内存上限 MB
     */
    MemoryLimit: number;
    /**
     * 环境过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpiredAt: number;
    /**
     * 收费类型：0:缺省，1:自助下单页购买(支持续费/升配等操作)，2:代销下单页购买
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChargeType: number;
    /**
     * 资源限制类型：0:无限制，1:有限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceLimitType: number;
    /**
     * 是否开启自动续费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AutoRenewal: boolean;
    /**
     * 扩展组件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkerExtensions: Array<RuntimeExtensionMC>;
    /**
     * 环境类型：0: sandbox, 1:shared, 2:private 3: trial
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeType: number;
    /**
     * 环境运行类型：0:运行时类型、1:api类型、2:etl环境
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuntimeClass: number;
    /**
     * 已使用出带宽 Mbps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BandwidthOutUsed: number;
    /**
     * 出带宽上限 Mbps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BandwidthOutLimit: number;
}
/**
 * GetRuntimeResourceMonitorMetricMC返回参数结构体
 */
export interface GetRuntimeResourceMonitorMetricMCResponse {
    /**
     * 指标名称，K8sWorkloadCpuCoreUsed，K8sWorkloadMemUsageBytes，K8sWorkloadNetworkReceiveBytesBw，K8sWorkloadNetworkTransmitBytesBw
     */
    MetricType?: string;
    /**
     * metric数值列表
     */
    Values?: Array<MetricValueMC>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListRuntimeDeployedInstancesMC请求参数结构体
 */
export interface ListRuntimeDeployedInstancesMCRequest {
    /**
     * 运行时id
     */
    RuntimeId: number;
    /**
     * 最大请求数量
     */
    Limit: number;
    /**
     * 请求偏移量
     */
    Offset: number;
    /**
     * 排序类型：1:创建时间排序, 2:更新时间排序（默认）
     */
    SortType: number;
    /**
     * 排序方式：asc，desc（默认）
     */
    Sort: string;
    /**
     * 运行时地域
     */
    Zone: string;
    /**
     * 1:3.0版本新控制台传1；否则传0
     */
    ApiVersion?: number;
    /**
     * -1:不按项目筛选，获取所有
  >=0: 按项目id筛选
     */
    GroupId?: number;
    /**
     * -2: 不按状态筛选，获取所有
  0: 运行中
  2: 已停止
     */
    Status?: number;
    /**
     * 0: 应用集成
  1: API管理
  2: ETL
     */
    RuntimeClass?: number;
}
/**
 * 运行环境扩展组件
 */
export interface RuntimeExtensionMC {
    /**
     * 扩展组件类型：0:cdc 1:dataway-java
     */
    Type: number;
    /**
     * 部署规格vcore数
     */
    Size?: number;
    /**
     * 副本数
     */
    Replica?: number;
    /**
     * 扩展组件名称
     */
    Name?: string;
    /**
     * 状态 1:未启用 2:已启用
     */
    Status?: number;
    /**
     * 创建时间
     */
    CreatedAt?: number;
    /**
     * 修改时间
     */
    UpdatedAt?: number;
}
/**
 * ListDeployableRuntimesMC返回参数结构体
 */
export interface ListDeployableRuntimesMCResponse {
    /**
     * 运行时列表
     */
    Runtimes?: Array<AbstractRuntimeMC>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetRuntimeMC返回参数结构体
 */
export interface GetRuntimeMCResponse {
    /**
     * 运行时详情
     */
    Runtime: RuntimeMC;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListDeployableRuntimesMC请求参数结构体
 */
export interface ListDeployableRuntimesMCRequest {
    /**
     * 应用id
     */
    ProjectId?: number;
    /**
     * 实例id
     */
    InstanceId?: number;
    /**
     * 版本类型 0-pro 1-lite
     */
    PlanType?: number;
    /**
     * 0：应用集成，1：API，2：ETL
     */
    RuntimeClass?: number;
}
/**
 * ListRuntimesMC请求参数结构体
 */
export interface ListRuntimesMCRequest {
    /**
     * 环境运行类型：0:运行时类型、1:api类型
     */
    RuntimeClass?: number;
    /**
     * 计划类型：0-pro 1-lite
     */
    PlanType?: number;
}
/**
 * GetRuntimeMC请求参数结构体
 */
export interface GetRuntimeMCRequest {
    /**
     * 环境id
     */
    RuntimeId: number;
    /**
     * 环境地域
     */
    Zone: string;
    /**
     * 环境运行类型：0:运行时类型、1:api类型
     */
    RuntimeClass?: number;
}
/**
 * GetMonitorMetricResponse
 */
export interface MetricValueMC {
    /**
     * 时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time: number;
    /**
     * 对应的value值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Val: string;
}
/**
 * GetRuntimeResourceMonitorMetricMC请求参数结构体
 */
export interface GetRuntimeResourceMonitorMetricMCRequest {
    /**
     * 运行时id
     */
    RuntimeId: number;
    /**
     * 起始时间
     */
    StartTime: number;
    /**
     * 结束时间
     */
    EndTime: number;
    /**
     * 指标类型：0:CPU, 1:MemUsageBytes, 2:K8sWorkloadNetworkReceiveBytesBw, 3:K8sWorkloadNetworkTransmitBytesBw
     */
    MetricType: number;
    /**
     * 是否返回百分比数值，仅支持CPU，Memory
     */
    RateType: boolean;
    /**
     * 采样粒度：60(s), 300(s), 3600(s), 86400(s)
     */
    Interval?: number;
    /**
     * 环境运行类型：0:运行时类型、1:api类型
     */
    RuntimeClass?: number;
    /**
     * 资源指标聚合类型：0: 环境维度 1:执行引擎维度 2:datatwaypy维度 3.datawayjava维度
     */
    AggregationType?: number;
}
/**
 * 运行时精简信息
 */
export interface AbstractRuntimeMC {
    /**
     * 环境id
     */
    RuntimeId: number;
    /**
     * 环境名称，用户输入，同一uin内唯一
     */
    DisplayName: string;
    /**
     * 环境类型：0: sandbox, 1:shared, 2:private
     */
    Type: number;
    /**
     * 环境所在地域，tianjin，beijiing，guangzhou等
     */
    Zone: string;
    /**
     * 环境所在地域，tianjin，beijiing，guangzhou等（同Zone）
     */
    Area: string;
    /**
     * 环境应用listener地址后缀
     */
    Addr: string;
    /**
     * 环境状态
     */
    Status: number;
    /**
     * 环境过期时间
     */
    ExpiredAt: number;
    /**
     * 环境运行类型：0:运行时类型、1:api类型
     */
    RuntimeClass: number;
    /**
     * 是否已在当前环境发布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Deployed: boolean;
    /**
     * 环境扩展组件是否满足应用要求：0=true, 1=false 表示该应用需要扩展组件0(cdc)以及1(java)，但是独立环境有cdc无java，不满足发布要求
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MatchExtensions?: string;
}
/**
 * ListRuntimeDeployedInstancesMC返回参数结构体
 */
export interface ListRuntimeDeployedInstancesMCResponse {
    /**
     * 运行时所部属的应用实例列表
     */
    Instances?: Array<RuntimeDeployedInstanceMC>;
    /**
     * 满足条件的记录总数，用于分页器
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 运行时部署的应用实例详情
 */
export interface RuntimeDeployedInstanceMC {
    /**
     * 项目id
     */
    GroupId: number;
    /**
     * 项目名称
     */
    GroupName: string;
    /**
     * 应用id
     */
    ProjectId: number;
    /**
     * 应用名称
     */
    ProjectName: string;
    /**
     * 应用实例id
     */
    InstanceId: number;
    /**
     * 应用实例版本
     */
    InstanceVersion: number;
    /**
     * 应用实例创建时间
     */
    InstanceCreatedAt: number;
    /**
     * 应用实例部署状态. 0:running, 1:deleting
     */
    Status: number;
    /**
     * 应用实例部署创建时间
     */
    CreatedAt: number;
    /**
     * 应用实例部署更新时间
     */
    UpdatedAt: number;
    /**
     * 应用类型：0:NormalApp普通应用 1:TemplateApp模板应用 2:LightApp轻应用 3:MicroConnTemplate微连接模板 4:MicroConnApp微连接应用
     */
    ProjectType: number;
    /**
     * 应用版本：0:旧版 1:3.0新控制台
     */
    ProjectVersion: number;
}
