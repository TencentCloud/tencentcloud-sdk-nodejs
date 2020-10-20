/**
 * DescribeSdkAppid返回参数结构体
 */
export interface DescribeSdkAppidResponse {
    /**
      * 表示 appid 对应的 SdkAppid 的数据
      */
    SdkAppids?: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSdkAppid请求参数结构体
 */
export declare type DescribeSdkAppidRequest = null;
