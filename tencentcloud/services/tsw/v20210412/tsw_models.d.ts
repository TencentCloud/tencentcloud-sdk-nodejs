/**
 * DescribeToken请求参数结构体
 */
export interface DescribeTokenRequest {
    /**
     * 命名空间
     */
    Namespace: string;
}
/**
 * DescribeServiceAlertObject返回参数结构体
 */
export interface DescribeServiceAlertObjectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeComponentAlertObject返回参数结构体
 */
export interface DescribeComponentAlertObjectResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeServiceAlertObject请求参数结构体
 */
export declare type DescribeServiceAlertObjectRequest = null;
/**
 * DescribeComponentAlertObject请求参数结构体
 */
export declare type DescribeComponentAlertObjectRequest = null;
/**
 * DescribeToken返回参数结构体
 */
export interface DescribeTokenResponse {
    /**
     * token
     */
    Result: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
