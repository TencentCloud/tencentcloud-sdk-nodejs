/**
 * DescribeIgOrderList请求参数结构体
 */
export interface DescribeIgOrderListRequest {
    /**
     * 页码
     */
    PageNumber: number;
    /**
     * 每页数目
     */
    PageSize: number;
    /**
     * 产品类型
     */
    ProductType: string;
    /**
     * 订单状态
     */
    OrderStatus?: number;
    /**
     * 搜索关键字
     */
    KeyWord?: string;
}
/**
 * DescribeIgOrderList返回参数结构体
 */
export interface DescribeIgOrderListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
