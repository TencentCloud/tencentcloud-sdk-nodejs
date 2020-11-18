/**
 * CreateWeappQRUrl请求参数结构体
 */
export interface CreateWeappQRUrlRequest {
    /**
      * 代理角色临时密钥的Token
      */
    SessionKey: string;
}
/**
 * CreateWeappQRUrl返回参数结构体
 */
export interface CreateWeappQRUrlResponse {
    /**
      * 渠道备案小程序二维码
      */
    Url?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
