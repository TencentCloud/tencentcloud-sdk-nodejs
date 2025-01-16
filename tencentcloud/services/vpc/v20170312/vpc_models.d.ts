/**
 * DescribeNatsEipsInternal返回参数结构体
 */
export interface DescribeNatsEipsInternalResponse {
    /**
     * eip Ip列表
     */
    EipSet?: Array<string>;
    /**
     * eip ip列表总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeNatsEipsInternal请求参数结构体
 */
export interface DescribeNatsEipsInternalRequest {
    /**
     * limit
     */
    Limit?: number;
    /**
     * offset
     */
    Offset?: number;
}
