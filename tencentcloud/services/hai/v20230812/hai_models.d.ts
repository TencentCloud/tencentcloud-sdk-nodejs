/**
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * RunInstances返回参数结构体
 */
export interface RunInstancesResponse {
    /**
     * 实例ID列表
     */
    InstanceIdSet?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
