/**
 * ResetPassword请求参数结构体
 */
export interface ResetPasswordRequest {
    /**
      * 用户ID
      */
    UserId: string;
    /**
      * 用户目录ID
      */
    UserStoreId: string;
}
/**
 * ResetPassword返回参数结构体
 */
export interface ResetPasswordResponse {
    /**
      * 重置后的用户密码
      */
    Password: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
