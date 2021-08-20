/**
 * DescribeDataPerformancePage返回参数结构体
 */
export interface DescribeDataPerformancePageResponse {
    /**
      * 返回值
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDataPerformancePage请求参数结构体
 */
export interface DescribeDataPerformancePageRequest {
    /**
      * 项目ID
      */
    ID: number;
    /**
      * 开始时间
      */
    StartTime: number;
    /**
      * 结束时间
      */
    EndTime: number;
    /**
      * ["pagepv", "allcount"]
      */
    Type: string;
    /**
      * 日志等级
      */
    Level?: string;
    /**
      * 运营商
      */
    Isp?: string;
    /**
      * 地区
      */
    Area?: string;
    /**
      * 网络类型
      */
    NetType?: string;
    /**
      * 平台
      */
    Platform?: string;
    /**
      * 机型
      */
    Device?: string;
    /**
      * 版本
      */
    VersionNum?: string;
    /**
      * 自定义1
      */
    ExtFirst?: string;
    /**
      * 自定义2
      */
    ExtSecond?: string;
    /**
      * 自定义3
      */
    ExtThird?: string;
    /**
      * 是否海外
      */
    IsAbroad?: string;
    /**
      * 浏览器
      */
    Browser?: string;
    /**
      * 操作系统
      */
    Os?: string;
    /**
      * 浏览器引擎
      */
    Engine?: string;
    /**
      * 品牌
      */
    Brand?: string;
    /**
      * 来源页面
      */
    From?: string;
    /**
      * 耗时计算方式
      */
    CostType?: string;
}
/**
 * DescribeError请求参数结构体
 */
export interface DescribeErrorRequest {
    /**
      * 日期
      */
    Date: string;
    /**
      * 项目ID
      */
    ID: number;
}
/**
 * DescribeDataLogUrlStatistics返回参数结构体
 */
export interface DescribeDataLogUrlStatisticsResponse {
    /**
      * 返回值
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
    /**
      * 项目 id
      */
    ID: number;
    /**
      * 项目唯一key
      */
    Key: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeError返回参数结构体
 */
export interface DescribeErrorResponse {
    /**
      * 内容
      */
    Content: string;
    /**
      * 项目ID
      */
    ID: number;
    /**
      * 时间
      */
    CreateTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDataLogUrlStatistics请求参数结构体
 */
export interface DescribeDataLogUrlStatisticsRequest {
    /**
      * 开始时间
      */
    StartTime: number;
    /**
      * "analysis", "compare", "samp", "version", "ext3","nettype", "platform","isp","region","device","browser","ext1","ext2"
      */
    Type: string;
    /**
      * 结束时间
      */
    EndTime: number;
    /**
      * 项目ID
      */
    ID: number;
    /**
      * 自定义2
      */
    ExtSecond?: string;
    /**
      * 浏览器引擎
      */
    Engine?: string;
    /**
      * 运营商
      */
    Isp?: string;
    /**
      * 来源页面
      */
    From?: string;
    /**
      * 日志等级
      */
    Level?: string;
    /**
      * 品牌
      */
    Brand?: string;
    /**
      * 地区
      */
    Area?: string;
    /**
      * 版本
      */
    VersionNum?: string;
    /**
      * 平台
      */
    Platform?: string;
    /**
      * 自定义3
      */
    ExtThird?: string;
    /**
      * 自定义1
      */
    ExtFirst?: string;
    /**
      * 网络类型
      */
    NetType?: string;
    /**
      * 机型
      */
    Device?: string;
    /**
      * 是否海外
      */
    IsAbroad?: string;
    /**
      * 操作系统
      */
    Os?: string;
    /**
      * 浏览器
      */
    Browser?: string;
}
/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
    /**
      * 创建的项目名(不为空且最长为 200)
      */
    Name: string;
    /**
      * 项目对应实例 id
      */
    InstanceID: string;
    /**
      * 项目抽样率(大于等于 0)
      */
    Rate: string;
    /**
      * 是否开启聚类
      */
    EnableURLGroup: number;
    /**
      * 项目类型("web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn")
      */
    Type: string;
    /**
      * 项目对应仓库地址(可选，最长为 256)
      */
    Repo?: string;
    /**
      * 项目对应网页地址(可选，最长为 256)
      */
    URL?: string;
    /**
      * 创建的项目描述(可选，最长为 1000)
      */
    Desc?: string;
}
