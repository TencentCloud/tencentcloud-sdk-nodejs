/**
 * DescribeBrandPosComments请求参数结构体
 */
export interface DescribeBrandPosCommentsRequest {
    /**
      * 品牌ID
      */
    BrandId: string;
    /**
      * 查询开始时间
      */
    StartDate: string;
    /**
      * 查询结束时间
      */
    EndDate: string;
    /**
      * 查询条数上限，默认20
      */
    Limit?: number;
    /**
      * 查询偏移，从0开始
      */
    Offset?: number;
}
/**
 * 文章信息
 */
export interface BrandReportArticle {
    /**
      * 文章标题
      */
    Title: string;
    /**
      * 文章url地址
      */
    Url: string;
    /**
      * 文章来源
      */
    FromSite: string;
    /**
      * 文章发表日期
      */
    PubTime: string;
    /**
      * 文章标识
      */
    Flag: number;
    /**
      * 文章热度值
      */
    Hot: number;
    /**
      * 文章来源等级
      */
    Level: number;
    /**
      * 文章摘要
      */
    Abstract: string;
    /**
      * 文章ID
      */
    ArticleId: string;
}
/**
 * DescribeBrandSocialOpinion返回参数结构体
 */
export interface DescribeBrandSocialOpinionResponse {
    /**
      * 文章总数
      */
    ArticleCount?: number;
    /**
      * 来源统计总数
      */
    FromCount?: number;
    /**
      * 疑似负面报道总数
      */
    AdverseCount?: number;
    /**
      * 文章列表详情
      */
    ArticleSet?: Array<BrandReportArticle>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBrandExposure返回参数结构体
 */
export interface DescribeBrandExposureResponse {
    /**
      * 累计曝光量
      */
    TotalCount?: number;
    /**
      * 按天计算的统计数据
      */
    DateCountSet?: Array<DateCount>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBrandPosComments返回参数结构体
 */
export interface DescribeBrandPosCommentsResponse {
    /**
      * 评论列表
      */
    BrandCommentSet?: Array<CommentInfo>;
    /**
      * 总的好评个数
      */
    TotalComments?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeIndustryNews请求参数结构体
 */
export interface DescribeIndustryNewsRequest {
    /**
      * 行业ID
      */
    IndustryId: string;
    /**
      * 查询开始时间
      */
    StartDate: string;
    /**
      * 查询结束时间
      */
    EndDate: string;
    /**
      * 是否显示列表，若为 true，则返回文章列表
      */
    ShowList?: boolean;
    /**
      * 查询偏移，默认从0开始
      */
    Offset?: number;
    /**
      * 查询条数上限，默认20
      */
    Limit?: number;
}
/**
 * DescribeBrandSocialOpinion请求参数结构体
 */
export interface DescribeBrandSocialOpinionRequest {
    /**
      * 品牌ID
      */
    BrandId: string;
    /**
      * 检索开始时间
      */
    StartDate: string;
    /**
      * 检索结束时间
      */
    EndDate: string;
    /**
      * 查询偏移，默认从0开始
      */
    Offset?: number;
    /**
      * 查询条数上限，默认20
      */
    Limit?: number;
    /**
      * 列表显示标记，若为true，则返回文章列表详情
      */
    ShowList?: boolean;
}
/**
 * DescribeBrandSocialReport请求参数结构体
 */
export interface DescribeBrandSocialReportRequest {
    /**
      * 品牌ID
      */
    BrandId: string;
    /**
      * 查询开始时间
      */
    StartDate: string;
    /**
      * 查询结束时间
      */
    EndDate: string;
}
/**
 * DescribeBrandSocialReport返回参数结构体
 */
export interface DescribeBrandSocialReportResponse {
    /**
      * 累计统计数据
      */
    TotalCount?: number;
    /**
      * 按天计算的统计数据
      */
    DateCountSet?: Array<DateCount>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBrandExposure请求参数结构体
 */
export interface DescribeBrandExposureRequest {
    /**
      * 品牌ID
      */
    BrandId: string;
    /**
      * 查询开始时间
      */
    StartDate: string;
    /**
      * 查询结束时间
      */
    EndDate: string;
}
/**
 * 用户评论内容类型
 */
export interface CommentInfo {
    /**
      * 用户评论内容
      */
    Comment: string;
    /**
      * 评论的时间
      */
    Date: string;
}
/**
 * 明星喜好画像元素
 */
export interface StarPortrait {
    /**
      * 喜欢的明星名字
      */
    Name: string;
    /**
      * 百分比
      */
    Percent: number;
}
/**
 * 按日期的统计数据
 */
export interface DateCount {
    /**
      * 统计日期
      */
    Date: string;
    /**
      * 统计值
      */
    Count: number;
}
/**
 * 用户性别画像元素数组
 */
export interface GenderPortraitInfo {
    /**
      * 用户性别画像数组
      */
    PortraitSet: Array<GenderPortrait>;
}
/**
 * 行业报道新闻
 */
export interface IndustryNews {
    /**
      * 行业报道ID
      */
    IndustryId: string;
    /**
      * 报道发表时间
      */
    PubTime: string;
    /**
      * 报道来源
      */
    FromSite: string;
    /**
      * 报道标题
      */
    Title: string;
    /**
      * 报道来源url
      */
    Url: string;
    /**
      * 报道来源等级
      */
    Level: number;
    /**
      * 热度值
      */
    Hot: number;
    /**
      * 报道标识
      */
    Flag: number;
    /**
      * 报道摘要
      */
    Abstract: string;
}
/**
 * 省份画像元素
 */
export interface ProvincePortrait {
    /**
      * 省份名称
      */
    Province: string;
    /**
      * 百分比
      */
    Percent: number;
}
/**
 * 用户喜好的明星画像元素数组
 */
export interface StarPortraitInfo {
    /**
      * 用户喜好的明星画像数组
      */
    PortraitSet: Array<StarPortrait>;
}
/**
 * 用户年龄画像元素数组
 */
export interface AgePortraitInfo {
    /**
      * 用户年龄画像数组
      */
    PortraitSet: Array<AgePortrait>;
}
/**
 * DescribeUserPortrait返回参数结构体
 */
export interface DescribeUserPortraitResponse {
    /**
      * 年龄画像
      */
    Age?: AgePortraitInfo;
    /**
      * 性别画像
      */
    Gender?: GenderPortraitInfo;
    /**
      * 省份画像
      */
    Province?: ProvincePortraitInfo;
    /**
      * 电影喜好画像
      */
    Movie?: MoviePortraitInfo;
    /**
      * 明星喜好画像
      */
    Star?: StarPortraitInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBrandCommentCount请求参数结构体
 */
export interface DescribeBrandCommentCountRequest {
    /**
      * 品牌ID
      */
    BrandId: string;
    /**
      * 查询开始日期
      */
    StartDate: string;
    /**
      * 查询结束日期
      */
    EndDate: string;
}
/**
 * DescribeBrandMediaReport请求参数结构体
 */
export interface DescribeBrandMediaReportRequest {
    /**
      * 品牌ID
      */
    BrandId: string;
    /**
      * 查询开始时间
      */
    StartDate: string;
    /**
      * 查询结束时间
      */
    EndDate: string;
}
/**
 * DescribeBrandMediaReport返回参数结构体
 */
export interface DescribeBrandMediaReportResponse {
    /**
      * 查询范围内文章总数
      */
    TotalCount?: number;
    /**
      * 按天计算的每天文章数
      */
    DateCountSet?: Array<DateCount>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用户好评差评个数信息
 */
export interface Comment {
    /**
      * 评论的日期
      */
    Date: string;
    /**
      * 差评的个数
      */
    NegCommentCount: number;
    /**
      * 好评的个数
      */
    PosCommentCount: number;
}
/**
 * 用户省份画像元素数组
 */
export interface ProvincePortraitInfo {
    /**
      * 用户省份画像数组
      */
    PortraitSet: Array<ProvincePortrait>;
}
/**
 * DescribeBrandCommentCount返回参数结构体
 */
export interface DescribeBrandCommentCountResponse {
    /**
      * 按天统计好评/差评数
      */
    CommentSet?: Array<Comment>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 电影喜好画像元素
 */
export interface MoviePortrait {
    /**
      * 电影名称
      */
    Name: string;
    /**
      * 百分比
      */
    Percent: number;
}
/**
 * DescribeIndustryNews返回参数结构体
 */
export interface DescribeIndustryNewsResponse {
    /**
      * 总计文章数量
      */
    NewsCount?: number;
    /**
      * 总计来源数量
      */
    FromCount?: number;
    /**
      * 总计疑似负面数量
      */
    AdverseCount?: number;
    /**
      * 文章列表
      */
    NewsSet?: Array<IndustryNews>;
    /**
      * 按天统计的数量列表
      */
    DateCountSet?: Array<DateCount>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBrandNegComments返回参数结构体
 */
export interface DescribeBrandNegCommentsResponse {
    /**
      * 评论列表
      */
    BrandCommentSet?: Array<CommentInfo>;
    /**
      * 总的差评个数
      */
    TotalComments?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserPortrait请求参数结构体
 */
export interface DescribeUserPortraitRequest {
    /**
      * 品牌ID
      */
    BrandId: string;
}
/**
 * DescribeBrandNegComments请求参数结构体
 */
export interface DescribeBrandNegCommentsRequest {
    /**
      * 品牌ID
      */
    BrandId: string;
    /**
      * 查询开始时间
      */
    StartDate: string;
    /**
      * 查询结束时间
      */
    EndDate: string;
    /**
      * 查询条数上限，默认20
      */
    Limit?: number;
    /**
      * 查询偏移，默认从0开始
      */
    Offset?: number;
}
/**
 * 用户年龄画像
 */
export interface AgePortrait {
    /**
      * 年龄区间
      */
    AgeRange: string;
    /**
      * 百分比
      */
    Percent: number;
}
/**
 * 用户喜好电影画像元素数组
 */
export interface MoviePortraitInfo {
    /**
      * 用户喜好电影画像数组
      */
    PortraitSet: Array<MoviePortrait>;
}
/**
 * 性别画像元素
 */
export interface GenderPortrait {
    /**
      * 性别
      */
    Gender: string;
    /**
      * 百分比
      */
    Percent: number;
}
