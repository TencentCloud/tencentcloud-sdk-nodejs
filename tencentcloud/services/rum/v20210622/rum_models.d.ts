/**
 * Rum 项目信息
 */
export interface RumProject {
    /**
      * 项目名
      */
    Name: string;
    /**
      * 创建者 id
      */
    Creator: string;
    /**
      * 实例 id
      */
    InstanceID: string;
    /**
      * 项目类型
      */
    Type: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 项目仓库地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Repo: string;
    /**
      * 项目网址地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    URL: string;
    /**
      * 项目采样频率
      */
    Rate: string;
    /**
      * 项目唯一key（长度 12 位）
      */
    Key: string;
    /**
      * 是否开启url聚类
      */
    EnableURLGroup: number;
    /**
      * 实例名
      */
    InstanceName: string;
    /**
      * 项目 ID
      */
    ID: number;
    /**
      * 实例 key
      */
    InstanceKey: string;
    /**
      * 项目描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Desc: string;
    /**
      * 是否星标  1:是 0:否
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsStar: number;
}
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
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
    /**
      * 列表总数
      */
    TotalCount: number;
    /**
      * 项目列表
      */
    ProjectSet: Array<RumProject>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeScores请求参数结构体
 */
export interface DescribeScoresRequest {
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 项目ID
      */
    ID?: number;
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
 * project Score分数实体
 */
export interface ScoreInfo {
    /**
      * duration
      */
    StaticDuration: string;
    /**
      * pv
      */
    PagePv: string;
    /**
      * 失败
      */
    ApiFail: string;
    /**
      * 请求
      */
    ApiNum: string;
    /**
      * fail
      */
    StaticFail: string;
    /**
      * 项目id
      */
    ProjectID: number;
    /**
      * uv
      */
    PageUv: string;
    /**
      * 请求次数
      */
    ApiDuration: string;
    /**
      * 分数
      */
    Score: string;
    /**
      * error
      */
    PageError: string;
    /**
      * num
      */
    StaticNum: string;
    /**
      * num
      */
    RecordNum: number;
    /**
      * Duration
      */
    PageDuration: string;
}
/**
 * DescribeProjects请求参数结构体
 */
export interface DescribeProjectsRequest {
    /**
      * 分页每页数目，整型
      */
    Limit: number;
    /**
      * 分页页码，整型
      */
    Offset: number;
    /**
      * 过滤条件
      */
    Filters?: Array<Filter>;
}
/**
 * DescribeLogList返回参数结构体
 */
export interface DescribeLogListResponse {
    /**
      * 返回字符串
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等

· 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
· 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
    /**
      * 一个或者多个过滤值。
      */
    Values?: Array<string>;
    /**
      * 过滤键的名称。
      */
    Name?: string;
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
 * DescribeLogList请求参数结构体
 */
export interface DescribeLogListRequest {
    /**
      * 排序方式  desc  asc
      */
    Sort: string;
    /**
      * searchlog   histogram
      */
    ActionType: string;
    /**
      * 项目ID
      */
    ID: number;
    /**
      * 开始时间
      */
    StartTime?: string;
    /**
      * 限制
      */
    Limit?: number;
    /**
      * 上下文
      */
    Context?: string;
    /**
      * 查询语句
      */
    Query?: string;
    /**
      * 结束时间
      */
    EndTime?: string;
}
/**
 * DescribeScores返回参数结构体
 */
export interface DescribeScoresResponse {
    /**
      * 数组
      */
    ScoreSet: Array<ScoreInfo>;
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
      * 业务系统 ID
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
