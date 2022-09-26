/**
 * DescribeFraudBase请求参数结构体
 */
export interface DescribeFraudBaseRequest {
    /**
      * 客户端通过SDK获取的设备Token
      */
    DeviceToken: string;
}
/**
 * 风险信息
 */
export interface RiskInfo {
    /**
      * 风险类型
      */
    Type: number;
    /**
      * 风险等级
      */
    Level: number;
}
/**
 * DescribeFraudPremium返回参数结构体
 */
export interface DescribeFraudPremiumResponse {
    /**
      * App版本信息
      */
    AppVersion: string;
    /**
      * 品牌
      */
    Brand: string;
    /**
      * 客户端IP
      */
    ClientIp: string;
    /**
      * 机型
      */
    Model: string;
    /**
      * 网络类型
      */
    NetworkType: string;
    /**
      * 应用包名
      */
    PackageName: string;
    /**
      * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
      */
    Platform: string;
    /**
      * 系统版本
      */
    SystemVersion: string;
    /**
      * SDK版本号
      */
    SdkBuildNo: string;
    /**
      * 实时风险信息
      */
    RiskInfos: Array<RiskInfo>;
    /**
      * 离线风险信息
      */
    HistRiskInfos: Array<RiskInfo>;
    /**
      * 设备匿名标识
      */
    Openid: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTrustedID返回参数结构体
 */
export interface DescribeTrustedIDResponse {
    /**
      * 设备匿名标识
      */
    Openid: string;
    /**
      * App版本信息
      */
    AppVersion: string;
    /**
      * 品牌
      */
    Brand: string;
    /**
      * 客户端IP
      */
    ClientIp: string;
    /**
      * 机型
      */
    Model: string;
    /**
      * 网络类型
      */
    NetworkType: string;
    /**
      * 应用包名
      */
    PackageName: string;
    /**
      * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
      */
    Platform: string;
    /**
      * 系统版本
      */
    SystemVersion: string;
    /**
      * SDK版本号
      */
    SdkBuildNo: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFraudBase返回参数结构体
 */
export interface DescribeFraudBaseResponse {
    /**
      * App版本信息
      */
    AppVersion: string;
    /**
      * 品牌
      */
    Brand: string;
    /**
      * 客户端IP
      */
    ClientIp: string;
    /**
      * 机型
      */
    Model: string;
    /**
      * 网络类型
      */
    NetworkType: string;
    /**
      * 应用包名
      */
    PackageName: string;
    /**
      * 平台（2-Android，3-iOS，4-H5，5-微信小程序）
      */
    Platform: string;
    /**
      * 系统版本
      */
    SystemVersion: string;
    /**
      * SDK版本号
      */
    SdkBuildNo: string;
    /**
      * 实时风险信息
      */
    RiskInfos: Array<RiskInfo>;
    /**
      * 离线风险信息
      */
    HistRiskInfos: Array<RiskInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTrustedID请求参数结构体
 */
export interface DescribeTrustedIDRequest {
    /**
      * 客户端通过SDK获取的设备Token
      */
    DeviceToken: string;
}
/**
 * DescribeFraudPremium请求参数结构体
 */
export interface DescribeFraudPremiumRequest {
    /**
      * 客户端通过SDK获取的设备Token
      */
    DeviceToken: string;
}
