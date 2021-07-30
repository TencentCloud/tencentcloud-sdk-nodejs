/**
 * DescribeGetAuthInfo返回参数结构体
 */
export interface DescribeGetAuthInfoResponse {
    /**
      * 实名认证状态：0未实名，1已实名
      */
    IsTenPayMasked: string;
    /**
      * 实名认证类型：0个人，1企业
      */
    IsAuthenticated: string;
    /**
      * 认证类型，个人0，企业1
      */
    Type: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SyncIcpOrderWebInfo返回参数结构体
 */
export interface SyncIcpOrderWebInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SyncIcpOrderWebInfo请求参数结构体
 */
export interface SyncIcpOrderWebInfoRequest {
    /**
      * 备案ICP订单号
      */
    IcpOrderId: string;
    /**
      * 订单里的webId
      */
    SourceWebId: string;
    /**
      * 订单里的webId 数组(如果传入的webIds含有 订单中不包含的webId，会自动跳过)
      */
    TargetWebIds: Array<string>;
    /**
      * 网站信息字段名 数组
      */
    SyncFields: Array<string>;
    /**
      * 是否先判断同步的网站负责人是否一致 (这里会判断 sitePersonName, sitePersonCerType,sitePersonCerNum三个字段完全一致)  默认:true. 非必要 不建议关闭修改该参数默认值
      */
    CheckSamePerson?: boolean;
}
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
/**
 * DescribeGetAuthInfo请求参数结构体
 */
export declare type DescribeGetAuthInfoRequest = null;
