/**
 * 标签描述
 */
export interface Tag {
    /**
     * 标签的键
     */
    TagKey: string;
    /**
     * 标签的值
     */
    TagValue: string;
}
/**
 * 实例节点描述信息
 */
export interface InstanceNode {
    /**
     * IP地址
     */
    Ip?: string;
    /**
     * 机型，如 S1
     */
    Spec?: string;
    /**
     * cpu核数
     */
    Core?: number;
    /**
     * 内存大小
     */
    Memory?: number;
    /**
     * 磁盘类型
     */
    DiskType?: string;
    /**
     * 磁盘大小
     */
    DiskSize?: number;
    /**
     * 所属clickhouse cluster名称
     */
    Role?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * rip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rip?: string;
    /**
     * FE节点角色
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeRole?: string;
    /**
     * UUID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UUID?: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 搜索的集群id名称
     */
    SearchInstanceId?: string;
    /**
     * 搜索的集群name
     */
    SearchInstanceName?: string;
    /**
     * 分页参数，第一页为0，第二页为10
     */
    Offset?: number;
    /**
     * 分页参数，分页步长，默认为10
     */
    Limit?: number;
    /**
     * 搜索标签列表
     */
    SearchTags?: Array<SearchTags>;
}
/**
 * DescribeInstanceNodes返回参数结构体
 */
export interface DescribeInstanceNodesResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 实例节点总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceNodesList?: Array<InstanceNode>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
    /**
     * 集群实例ID
     */
    InstanceId: string;
}
/**
 * 列表页搜索的标记列表
 */
export interface SearchTags {
    /**
     * 标签的键
     */
    TagKey?: string;
    /**
     * 标签的值
     */
    TagValue?: string;
    /**
     * 1表示只输入标签的键，没有输入值；0表示输入键时且输入值
     */
    AllValue?: number;
}
/**
 * 集群内节点的规格磁盘规格描述
 */
export interface AttachCBSSpec {
    /**
     * 节点磁盘类型，例如“CLOUD_SSD”\"CLOUD_PREMIUM"
     */
    DiskType?: string;
    /**
     * 磁盘容量，单位G
     */
    DiskSize?: number;
    /**
     * 磁盘总数
     */
    DiskCount?: number;
    /**
     * 描述
     */
    DiskDesc?: string;
}
/**
 * DescribeInstanceNodes请求参数结构体
 */
export interface DescribeInstanceNodesRequest {
    /**
     * 集群实例ID
     */
    InstanceId: string;
    /**
     * 集群角色类型，默认为 "data"数据节点
     */
    NodeRole?: string;
    /**
     * 分页参数，第一页为0，第二页为10
     */
    Offset?: number;
    /**
     * 分页参数，分页步长，默认为10
     */
    Limit?: number;
    /**
     * 展现策略，All时显示所有
     */
    DisplayPolicy?: string;
}
/**
 * 实例描述信息
 */
export interface InstanceInfo {
    /**
     * 集群实例ID, "cdw-xxxx" 字符串类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 集群实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 状态,
  Init 创建中; Serving 运行中；
  Deleted已销毁；Deleting 销毁中；
  Modify 集群变更中；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: string;
    /**
     * 地域, ap-guangzhou
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 可用区， ap-guangzhou-3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 私有网络名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 子网名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 付费类型，"hour", "prepay"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
    /**
     * 数据节点描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MasterSummary?: NodesSummary;
    /**
     * zookeeper节点描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoreSummary?: NodesSummary;
    /**
     * 高可用，“true" "false"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HA?: string;
    /**
     * 高可用类型：
  0：非高可用
  1：读高可用
  2：读写高可用。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HaType?: number;
    /**
     * 访问地址，例如 "10.0.0.1:9000"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessInfo?: string;
    /**
     * 记录ID，数值型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * regionId, 表示地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
    /**
     * 可用区说明，例如 "广州二区"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneDesc?: string;
    /**
     * 错误流程说明信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowMsg?: string;
    /**
     * 状态描述，例如“运行中”等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusDesc?: string;
    /**
     * 自动续费标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: boolean;
    /**
     * 标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
    /**
     * 监控信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Monitor?: string;
    /**
     * 是否开通日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HasClsTopic?: boolean;
    /**
     * 日志主题ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClsTopicId?: string;
    /**
     * 日志集ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClsLogSetId?: string;
    /**
     * 是否支持xml配置管理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableXMLConfig?: number;
    /**
     * 区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionDesc?: string;
    /**
     * 弹性网卡地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Eip?: string;
    /**
     * 冷热分层系数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosMoveFactor?: number;
    /**
     * external/local/yunti
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Kind?: string;
    /**
     * cos桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosBucketName?: string;
    /**
     * cbs
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CanAttachCbs?: boolean;
    /**
     * 小版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BuildVersion?: string;
    /**
     * 组件信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Components?: string;
    /**
     * 判断审计日志表是否有catalog字段
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    IfExistCatalog?: number;
    /**
     * 页面特性，用于前端屏蔽一些页面入口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Characteristic?: Array<string>;
}
/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
    /**
     * 实例描述信息
     */
    InstanceInfo?: InstanceInfo;
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
     * 实例总数
     */
    TotalCount?: number;
    /**
     * 实例数组
     */
    InstancesList?: Array<InstanceInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 节点角色描述信息
 */
export interface NodesSummary {
    /**
     * 机型，如 S1
     */
    Spec?: string;
    /**
     * 节点数目
     */
    NodeSize?: number;
    /**
     * cpu核数，单位个
     */
    Core?: number;
    /**
     * 内存大小，单位G
     */
    Memory?: number;
    /**
     * 磁盘大小，单位G
     */
    Disk?: number;
    /**
     * 磁盘类型
     */
    DiskType?: string;
    /**
     * 磁盘描述
     */
    DiskDesc?: string;
    /**
     * 挂载云盘信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttachCBSSpec?: AttachCBSSpec;
    /**
     * 子产品名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubProductType?: string;
    /**
     * 规格核数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpecCore?: number;
    /**
     * 规格内存
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpecMemory?: number;
    /**
     * 磁盘大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskCount?: number;
    /**
     * 是否加密
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Encrypt?: number;
    /**
     * 最大磁盘
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDiskSize?: number;
}
