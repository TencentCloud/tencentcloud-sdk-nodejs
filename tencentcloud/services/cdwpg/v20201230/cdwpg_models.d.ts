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
 * DestroyInstanceByApi请求参数结构体
 */
export interface DestroyInstanceByApiRequest {
    /**
     * 实例名称，例如"cdwpg-xxxx"
     */
    InstanceId: string;
}
