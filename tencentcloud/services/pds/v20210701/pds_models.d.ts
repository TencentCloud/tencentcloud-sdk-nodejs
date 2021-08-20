/**
 * DescribeStockEstimation返回参数结构体
 */
export interface DescribeStockEstimationResponse {
    /**
      * 用户信誉分，1-5从低到高
      */
    ServiceRsp: Score;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNewUserAcquisition请求参数结构体
 */
export interface DescribeNewUserAcquisitionRequest {
    /**
      * 用户信息
      */
    ServiceParams: UserInfos;
}
/**
 * 信誉分，1-5从低到高
 */
export interface Score {
    /**
      * 信誉分，1-5从低到高
      */
    Star: number;
}
/**
 * 用户信息
 */
export interface UserInfos {
    /**
      * 用户的手机号
      */
    PhoneNum: string;
    /**
      * 用户的微信OpenID
      */
    Openid: string;
    /**
      * 用户移动设备的客户端IP
      */
    IP?: string;
    /**
      * 用户WiFi的BSSID
      */
    WiFiBssid?: string;
    /**
      * 用户Android设备的IMEI
      */
    IMEI?: string;
    /**
      * 用户Android设备的OAID
      */
    OAID?: string;
    /**
      * 用户iOS设备的IDFA
      */
    IDFA?: string;
}
/**
 * DescribeStockEstimation请求参数结构体
 */
export interface DescribeStockEstimationRequest {
    /**
      * 用户信息
      */
    ServiceParams: UserInfos;
}
/**
 * DescribeNewUserAcquisition返回参数结构体
 */
export interface DescribeNewUserAcquisitionResponse {
    /**
      * 用户信誉分，1-5从低到高
      */
    ServiceRsp: Score;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
