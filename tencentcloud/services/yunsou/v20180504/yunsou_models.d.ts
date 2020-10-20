/**
 * DataSearch返回参数结构体
 */
export interface DataSearchResponse {
    /**
      * 数据返回信息
      */
    RetMsg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DataSearch请求参数结构体
 */
export interface DataSearchRequest {
    /**
      * 云搜的业务ID，用以表明当前数据请求的业务
      */
    ResourceId: number;
    /**
      * 检索串
      */
    SearchQuery?: string;
    /**
      * 当前页，从第0页开始计算
      */
    PageId?: number;
    /**
      * 每页结果数
      */
    NumPerPage?: number;
    /**
      * 当前检索号，用于定位问题，建议指定并且全局唯一
      */
    SearchId?: string;
    /**
      * 请求编码，0表示utf8，1表示gbk，建议指定
      */
    QueryEncode?: number;
    /**
      * 排序类型
      */
    RankType?: number;
    /**
      * 数值过滤，结果中按属性过滤
      */
    NumFilter?: string;
    /**
      * 分类过滤，导航类检索请求
      */
    ClFilter?: string;
    /**
      * 检索用户相关字段
      */
    Extra?: string;
    /**
      * 检索来源
      */
    SourceId?: number;
    /**
      * 是否进行二次检索，0关闭，1打开
      */
    SecondSearch?: number;
    /**
      * 指定返回最大篇数，无特殊原因不建议指定
      */
    MaxDocReturn?: number;
    /**
      * 是否smartbox检索，0关闭，1打开
      */
    IsSmartbox?: number;
    /**
      * 是否打开高红标亮，0关闭，1打开
      */
    EnableAbsHighlight?: number;
    /**
      * 指定访问QC纠错业务ID
      */
    QcBid?: number;
    /**
      * 按指定字段进行group by，只能对数值字段进行操作
      */
    GroupBy?: string;
    /**
      * 按指定字段进行distinct，只能对数值字段进行操作
      */
    Distinct?: string;
    /**
      * 高级排序参数，具体参见高级排序说明
      */
    L4RankExpression?: string;
    /**
      * 高级排序参数，具体参见高级排序说明
      */
    MatchValue?: string;
    /**
      * 经度信息
      */
    Longitude?: number;
    /**
      * 纬度信息
      */
    Latitude?: number;
    /**
      * 分类过滤并集
      */
    MultiFilter?: Array<string>;
}
/**
 * DataManipulation请求参数结构体
 */
export interface DataManipulationRequest {
    /**
      * 操作类型，add或del
      */
    OpType: string;
    /**
      * 数据编码类型
      */
    Encoding: string;
    /**
      * 数据
      */
    Contents: string;
    /**
      * 应用Id
      */
    ResourceId: number;
}
/**
 * DataManipulation返回参数结构体
 */
export interface DataManipulationResponse {
    /**
      * 返回信息
      */
    RetMsg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
