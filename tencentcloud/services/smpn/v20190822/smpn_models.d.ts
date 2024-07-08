/**
 * DescribeSmpnChp请求参数结构体
 */
export interface DescribeSmpnChpRequest {
    /**
     * 客户用于计费的资源Id
     */
    ResourceId: string;
    /**
     * 终端骚扰保护请求
     */
    RequestData: CHPRequest;
}
/**
 * DescribeSmpnFnr返回参数结构体
 */
export interface DescribeSmpnFnrResponse {
    /**
     * 虚假号码识别回应内容
     */
    ResponseData?: FNRResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSmpnFnr请求参数结构体
 */
export interface DescribeSmpnFnrRequest {
    /**
     * 虚假号码识别请求内容
     */
    RequestData: FNRRequest;
    /**
     * 用于计费的资源ID
     */
    ResourceId: string;
}
/**
 * 终端骚扰保护请求内容
 */
export interface CHPRequest {
    /**
     * 电话号码
     */
    PhoneNumber: string;
}
/**
 * 虚假号码识别回应
 */
export interface FNRResponse {
    /**
     * 虚假号码描述
     */
    Status: number;
}
/**
 * 终端骚扰保护
 */
export interface CHPResponse {
    /**
     * 标记类型
   0: 无标记
   50:骚扰电话
   51:房产中介
   52:保险理财
   53:广告推销
   54:诈骗电话
   55:快递电话
   56:出租车专车
     */
    TagType: number;
    /**
     * 标记次数
     */
    TagCount: number;
}
/**
 * DescribeSmpnChp返回参数结构体
 */
export interface DescribeSmpnChpResponse {
    /**
     * 终端骚扰保护回应
     */
    ResponseData?: CHPResponse;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 虚假号码识别请求
 */
export interface FNRRequest {
    /**
     * 电话号码
     */
    PhoneNumber: string;
}
