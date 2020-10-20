/**
 * DescribeStatus请求参数结构体
 */
export interface DescribeStatusRequest {
    /**
      * 购买服务后获得的授权帐号，用于保证请求有效性
      */
    Pk: string;
    /**
      * 需要获取分析结果的样本md5
      */
    Md5: string;
}
/**
 * StartAnalyse返回参数结构体
 */
export interface StartAnalyseResponse {
    /**
      * 接口调用状态，1表示成功，非1表示失败
      */
    Status?: number;
    /**
      * 成功时返回success，失败时返回具体的失败原因
      */
    Info?: string;
    /**
      * 保留字段
      */
    Data?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartAnalyse请求参数结构体
 */
export interface StartAnalyseRequest {
    /**
      * 购买服务后获得的授权帐号，用于保证请求有效性
      */
    Pk: string;
    /**
      * 样本md5，用于对下载获得的样本完整性进行校验
      */
    Md5: string;
    /**
      * 待分析样本下载地址
      */
    DlUrl: string;
}
/**
 * DescribeStatus返回参数结构体
 */
export interface DescribeStatusResponse {
    /**
      * 接口调用状态，1表示成功，非1表示失败
      */
    Status?: number;
    /**
      * 成功时返回success，失败时返回具体的失败原因，如样本分析未完成
      */
    Info?: string;
    /**
      * 成功时返回样本日志下载地址，该地址10分钟内有效
      */
    Data?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
