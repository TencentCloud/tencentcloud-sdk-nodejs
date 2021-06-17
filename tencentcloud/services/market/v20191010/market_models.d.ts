/**
 * GetUsagePlanUsageAmount返回参数结构体
 */
export interface GetUsagePlanUsageAmountResponse {
    /**
      * 最大调用量
      */
    MaxRequestNum: number;
    /**
      * 已经调用量
      */
    InUseRequestNum: number;
    /**
      * 剩余调用量
      */
    RemainingRequestNum: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetCateTree返回参数结构体
 */
export interface GetCateTreeResponse {
    /**
      * 分类ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    CateId: number;
    /**
      * 分类名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetUsagePlanUsageAmount请求参数结构体
 */
export interface GetUsagePlanUsageAmountRequest {
    /**
      * 用于查询实例的Id
      */
    InstanceId: string;
}
/**
 * GetCateTree请求参数结构体
 */
export interface GetCateTreeRequest {
    /**
      * 分类ID
      */
    CateId: number;
}
