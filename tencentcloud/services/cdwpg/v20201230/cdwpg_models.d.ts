/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceState请求参数结构体
 */
export interface DescribeInstanceStateRequest {
    /**
     * 集群实例名称
     */
    InstanceId: string;
}
/**
 * 资源规格
 */
export interface ResourceSpecNew {
    /**
     * 资源名称
     */
    SpecName: string;
    /**
     * 资源数
     */
    Count: number;
    /**
     * 磁盘信息
     */
    DiskSpec: CBSSpec;
    /**
     * 资源类型，DATA
     */
    Type: string;
}
/**
 * DestroyInstanceByApi返回参数结构体
 */
export interface DestroyInstanceByApiResponse {
    /**
     * 销毁流程Id
     */
    FlowId?: string;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DestroyInstanceByApi请求参数结构体
 */
export interface DestroyInstanceByApiRequest {
    /**
     * 实例名称，例如"cdwpg-xxxx"
     */
    InstanceId: string;
}
/**
 * CreateInstanceByApi请求参数结构体
 */
export interface CreateInstanceByApiRequest {
    /**
     * 实例名称
     */
    InstanceName: string;
    /**
     * 可用区
     */
    Zone: string;
    /**
     * 私有网络
     */
    UserVPCId: string;
    /**
     * 子网
     */
    UserSubnetId: string;
    /**
     * 计费方式
     */
    ChargeProperties: ChargeProperties;
    /**
     * 集群密码
     */
    AdminPassword: string;
    /**
     * 资源信息
     */
    Resources: Array<ResourceSpecNew>;
    /**
     * 标签列表
     */
    Tags?: Tag;
}
/**
 * 磁盘规格
 */
export interface CBSSpec {
    /**
     * 盘类型
     */
    DiskType: string;
    /**
     * 大小
     */
    DiskSize: number;
    /**
     * 个数
     */
    DiskCount: number;
}
/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 新修改的实例名称
     */
    InstanceName: string;
}
/**
 * CreateInstanceByApi返回参数结构体
 */
export interface CreateInstanceByApiResponse {
    /**
     * 流程ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowId?: string;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSimpleInstances返回参数结构体
 */
export interface DescribeSimpleInstancesResponse {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstancesList?: Array<InstanceSimpleInfoNew>;
    /**
     * -
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
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
 * DescribeInstanceState返回参数结构体
 */
export interface DescribeInstanceStateResponse {
    /**
     * 集群状态，例如：Serving
     */
    InstanceState?: string;
    /**
     * 集群操作创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowCreateTime?: string;
    /**
     * 集群操作名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowName?: string;
    /**
     * 集群操作进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowProgress?: number;
    /**
     * 集群状态描述，例如：运行中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceStateDesc?: string;
    /**
     * 集群流程错误信息，例如：“创建失败，资源不足”
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowMsg?: string;
    /**
     * 当前步骤的名称，例如：”购买资源中“
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcessName?: string;
    /**
     * 集群备份任务开启状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupStatus?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 精简集群信息
 */
export interface InstanceSimpleInfoNew {
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ID?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionDesc?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneId?: number;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneDesc?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessInfo?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: string;
    /**
     * 1
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: boolean;
}
/**
 * 计费时间参数
 */
export interface ChargeProperties {
    /**
     * 1-需要自动续期
     */
    RenewFlag: number;
    /**
     * 订单时间范围
     */
    TimeSpan: number;
    /**
     * 时间单位，一般为h和m
     */
    TimeUnit: string;
    /**
     * 计费类型0-按量计费，1-包年包月
     */
    PayMode?: number;
    /**
     * PREPAID、POSTPAID_BY_HOUR
     */
    ChargeType?: string;
}
/**
 * DescribeSimpleInstances请求参数结构体
 */
export interface DescribeSimpleInstancesRequest {
    /**
     * 11
     */
    SearchInstanceId?: string;
    /**
     * 11
     */
    SearchInstanceName?: string;
    /**
     * 11
     */
    Offset?: number;
    /**
     * 11
     */
    Limit?: number;
    /**
     * 11
     */
    SearchTags?: Array<string>;
}
