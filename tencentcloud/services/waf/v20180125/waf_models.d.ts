/**
 * DescribeAccessFastAnalysis返回参数结构体
 */
export interface DescribeAccessFastAnalysisResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAccessExport请求参数结构体
 */
export interface CreateAccessExportRequest {
    /**
      * 客户要查询的日志主题ID，每个客户都有对应的一个主题
      */
    TopicId: string;
    /**
      * 要查询的日志的起始时间，Unix时间戳，单位ms
      */
    From: number;
    /**
      * 要查询的日志的结束时间，Unix时间戳，单位ms
      */
    To: number;
    /**
      * 日志导出检索语句
      */
    Query: string;
    /**
      * 日志导出数量，最大值100w
      */
    Count: number;
    /**
      * 日志导出数据格式。json，csv，默认为json
      */
    Format?: string;
    /**
      * 日志导出时间排序。desc，asc，默认为desc
      */
    Order?: string;
}
/**
 * DescribeCustomRules接口回包中的复杂类型
 */
export interface DescribeCustomRulesRspRuleListItem {
    /**
      * 动作类型
      */
    ActionType: string;
    /**
      * 跳过的策略
      */
    Bypass: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 过期时间
      */
    ExpireTime: string;
    /**
      * 策略名称
      */
    Name: string;
    /**
      * 重定向地址
      */
    Redirect: string;
    /**
      * 策略ID
      */
    RuleId: string;
    /**
      * 优先级
      */
    SortId: string;
    /**
      * 状态
      */
    Status: string;
    /**
      * 策略详情
      */
    Strategies: Array<Strategy>;
}
/**
 * DescribeAccessIndex
 */
export interface AccessFullTextInfo {
    /**
      * 是否大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaseSensitive: boolean;
    /**
      * 全文索引的分词符，字符串中每个字符代表一个分词符
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tokenizer: string;
    /**
      * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainZH: boolean;
}
/**
 * ModifyCustomRuleStatus返回参数结构体
 */
export interface ModifyCustomRuleStatusResponse {
    /**
      * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
      */
    Success: ResponseCode;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 响应体的返回码
 */
export interface ResponseCode {
    /**
      * 如果成功则返回Success，失败则返回yunapi定义的错误码
      */
    Code: string;
    /**
      * 如果成功则返回Success，失败则返回WAF定义的二级错误码
      */
    Message: string;
}
/**
 * DescribeUserClbWafRegions返回参数结构体
 */
export interface DescribeUserClbWafRegionsResponse {
    /**
      * 地域（标准的ap-格式）列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAttackDownloadRecord返回参数结构体
 */
export interface DeleteAttackDownloadRecordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAccessPeriod返回参数结构体
 */
export interface ModifyAccessPeriodResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccessExports返回参数结构体
 */
export interface DescribeAccessExportsResponse {
    /**
      * 日志导出ID。
      */
    TotalCount: number;
    /**
      * 日志导出列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Exports: Array<ExportAccessInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFlowTrend请求参数结构体
 */
export interface DescribeFlowTrendRequest {
    /**
      * 需要获取流量趋势的域名, all表示所有域名
      */
    Domain: string;
    /**
      * 起始时间戳，精度秒
      */
    StartTs: number;
    /**
      * 结束时间戳，精度秒
      */
    EndTs: number;
}
/**
 * 日志KeyValue对数组，用于搜索访问日志
 */
export interface AccessLogItems {
    /**
      * 分析结果返回的KV数据对
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<AccessLogItem>;
}
/**
 * ModifyCustomRuleStatus请求参数结构体
 */
export interface ModifyCustomRuleStatusRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 规则ID
      */
    RuleId: number;
    /**
      * 开关的状态，1是开启、0是关闭
      */
    Status: number;
    /**
      * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
      */
    Edition?: string;
}
/**
 * DescribeAccessIndex接口的出参
 */
export interface AccessRuleKeyValueInfo {
    /**
      * 是否大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaseSensitive: boolean;
    /**
      * 需要建立索引的键值对信息；最大只能配置100个键值对
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyValues: Array<AccessKeyValueInfo>;
}
/**
 * SearchAccessLog返回参数结构体
 */
export interface SearchAccessLogResponse {
    /**
      * 加载后续内容的Context
      */
    Context: string;
    /**
      * 日志查询结果是否全部返回
      */
    ListOver: boolean;
    /**
      * 返回的是否为分析结果
      */
    Analysis: boolean;
    /**
      * 如果Analysis为True，则返回分析结果的列名，否则为空
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ColNames: Array<string>;
    /**
      * 日志查询结果；当Analysis为True时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<AccessLogInfo>;
    /**
      * 日志分析结果；当Analysis为False时，可能返回为null
注意：此字段可能返回 null，表示取不到有效值
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnalysisResults: Array<AccessLogItems>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDownloadRecord返回参数结构体
 */
export interface DeleteDownloadRecordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAccessExport请求参数结构体
 */
export interface DeleteAccessExportRequest {
    /**
      * 日志导出ID
      */
    ExportId: string;
    /**
      * 日志主题
      */
    TopicId: string;
}
/**
 * ModifyAccessPeriod请求参数结构体
 */
export interface ModifyAccessPeriodRequest {
    /**
      * 访问日志保存期限，范围为[1, 30]
      */
    Period: number;
    /**
      * 日志主题
      */
    TopicId: string;
}
/**
 * DescribeUserClbWafRegions请求参数结构体
 */
export declare type DescribeUserClbWafRegionsRequest = null;
/**
 * DeleteAttackDownloadRecord请求参数结构体
 */
export interface DeleteAttackDownloadRecordRequest {
    /**
      * 下载任务记录唯一标记
      */
    Id: number;
}
/**
 * DescribeAccessIndex接口的出参
 */
export interface AccessRuleTagInfo {
    /**
      * 是否大小写敏感
注意：此字段可能返回 null，表示取不到有效值。
      */
    CaseSensitive: boolean;
    /**
      * 标签索引配置中的字段信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyValues: Array<AccessKeyValueInfo>;
}
/**
 * DescribeAccessIndex请求参数结构体
 */
export declare type DescribeAccessIndexRequest = null;
/**
 * DescribeAccessIndex接口的出参数
 */
export interface AccessRuleInfo {
    /**
      * 全文索引配置
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FullText: AccessFullTextInfo;
    /**
      * 键值索引配置
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyValue: AccessRuleKeyValueInfo;
    /**
      * 元字段索引配置
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tag: AccessRuleTagInfo;
}
/**
 * DescribeAccessFastAnalysis请求参数结构体
 */
export declare type DescribeAccessFastAnalysisRequest = null;
/**
 * 用于DescribeAccessIndex接口的出参
 */
export interface AccessValueInfo {
    /**
      * 字段类型，目前支持的类型有：long、text、double
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 字段的分词符，只有当字段类型为text时才有意义；输入字符串中的每个字符代表一个分词符
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tokenizer: string;
    /**
      * 字段是否开启分析功能
注意：此字段可能返回 null，表示取不到有效值。
      */
    SqlFlag: boolean;
    /**
      * 是否包含中文
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainZH: boolean;
}
/**
 * DeleteSession返回参数结构体
 */
export interface DeleteSessionResponse {
    /**
      * 结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 日志KeyValue对
 */
export interface AccessLogItem {
    /**
      * 日记Key
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 日志Value
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 单条日志数据描述
 */
export interface AccessLogInfo {
    /**
      * 日志时间，单位ms
注意：此字段可能返回 null，表示取不到有效值。
      */
    Time: number;
    /**
      * 日志主题ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicId: string;
    /**
      * 日志主题名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TopicName: string;
    /**
      * 日志来源IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    Source: string;
    /**
      * 日志文件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileName: string;
    /**
      * 日志上报请求包的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgId: string;
    /**
      * 请求包内日志的ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgLogId: string;
    /**
      * 日志内容的Json序列化字符串
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogJson: string;
}
/**
 * DeleteSession请求参数结构体
 */
export interface DeleteSessionRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * clb-waf 或者 sprta-waf
      */
    Edition?: string;
}
/**
 * DescribeAccessExports请求参数结构体
 */
export interface DescribeAccessExportsRequest {
    /**
      * 客户要查询的日志主题ID，每个客户都有对应的一个主题
      */
    TopicId: string;
    /**
      * 分页的偏移量，默认值为0
      */
    Offset?: number;
    /**
      * 分页单页限制数目，默认值为20，最大值100
      */
    Limit?: number;
}
/**
 * DescribeAccessIndex返回参数结构体
 */
export interface DescribeAccessIndexResponse {
    /**
      * 是否生效
      */
    Status: boolean;
    /**
      * 索引配置信息
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rule: AccessRuleInfo;
    /**
      * 索引修改时间，初始值为索引创建时间。
      */
    ModifyTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAttackDownloadTask返回参数结构体
 */
export interface CreateAttackDownloadTaskResponse {
    /**
      * 任务ID
      */
    Flow: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAccessExport返回参数结构体
 */
export interface CreateAccessExportResponse {
    /**
      * 日志导出ID。
      */
    ExportId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddCustomRule返回参数结构体
 */
export interface AddCustomRuleResponse {
    /**
      * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
      */
    Success: ResponseCode;
    /**
      * 添加成功的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用于 DescribeAccessIndex 的出参
 */
export interface AccessKeyValueInfo {
    /**
      * 需要配置键值或者元字段索引的字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 字段的索引描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: AccessValueInfo;
}
/**
 * bot的趋势图对象
 */
export interface BotStatPointItem {
    /**
      * 横坐标
      */
    TimeStamp: string;
    /**
      * value的所属对象
      */
    Key: string;
    /**
      * 纵列表
      */
    Value: number;
    /**
      * Key对应的页面展示内容
      */
    Label: string;
}
/**
 * AddCustomRule请求参数结构体
 */
export interface AddCustomRuleRequest {
    /**
      * 规则名称
      */
    Name: string;
    /**
      * 优先级
      */
    SortId: string;
    /**
      * 过期时间
      */
    ExpireTime: string;
    /**
      * 策略详情
      */
    Strategies: Array<Strategy>;
    /**
      * 需要添加策略的域名
      */
    Domain: string;
    /**
      * 动作类型
      */
    ActionType: string;
    /**
      * 如果动作是重定向，则表示重定向的地址；其他情况可以为空
      */
    Redirect?: string;
    /**
      * "clb-waf"或者"sparta-waf"
      */
    Edition?: string;
    /**
      * 放行的详情
      */
    Bypass?: string;
}
/**
 * DescribeCustomRules返回参数结构体
 */
export interface DescribeCustomRulesResponse {
    /**
      * 规则详情
      */
    RuleList: Array<DescribeCustomRulesRspRuleListItem>;
    /**
      * 规则条数
      */
    TotalCount: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFlowTrend返回参数结构体
 */
export interface DescribeFlowTrendResponse {
    /**
      * 流量趋势数据
      */
    Data: Array<BotStatPointItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 自定义规则的匹配条件结构体
 */
export interface Strategy {
    /**
      * 匹配字段
      */
    Field: string;
    /**
      * 逻辑符号
      */
    CompareFunc: string;
    /**
      * 匹配内容
      */
    Content: string;
    /**
      * 匹配参数
      */
    Arg: string;
}
/**
 * DescribeCustomRules请求参数结构体
 */
export interface DescribeCustomRulesRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 分页参数
      */
    Paging: DescribeCustomRulesPagingInfo;
    /**
      * clb-waf或者sparta-waf
      */
    Edition?: string;
    /**
      * 过滤参数：动作类型：0放行，1阻断，2人机识别，3观察，4重定向
      */
    ActionType?: string;
    /**
      * 过滤参数：规则名称过滤条件
      */
    Search?: string;
}
/**
 * DescribeCustomRules接口的翻页参数
 */
export interface DescribeCustomRulesPagingInfo {
    /**
      * 当前页码
      */
    Offset: number;
    /**
      * 当前页的最大数据条数
      */
    Limit: number;
}
/**
 * DeleteDownloadRecord请求参数结构体
 */
export interface DeleteDownloadRecordRequest {
    /**
      * 记录id
      */
    Flow: string;
}
/**
 * DescribeAccessExports接口
 */
export interface ExportAccessInfo {
    /**
      * 日志导出任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExportId: string;
    /**
      * 日志导出查询语句
注意：此字段可能返回 null，表示取不到有效值。
      */
    Query: string;
    /**
      * 日志导出文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileName: string;
    /**
      * 日志文件大小
      */
    FileSize: number;
    /**
      * 日志导出时间排序
注意：此字段可能返回 null，表示取不到有效值。
      */
    Order: string;
    /**
      * 日志导出格式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Format: string;
    /**
      * 日志导出数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Count: number;
    /**
      * 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）
      */
    Status: string;
    /**
      * 日志导出起始时间
      */
    From: number;
    /**
      * 日志导出结束时间
      */
    To: number;
    /**
      * 日志导出路径
      */
    CosPath: string;
    /**
      * 日志导出创建时间
      */
    CreateTime: string;
}
/**
 * DeleteAccessExport返回参数结构体
 */
export interface DeleteAccessExportResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAttackDownloadTask请求参数结构体
 */
export interface CreateAttackDownloadTaskRequest {
    /**
      * 域名，所有域名填写all
      */
    Domain: string;
    /**
      * 查询起始时间
      */
    FromTime: string;
    /**
      * 查询结束时间
      */
    ToTime: string;
    /**
      * 下载任务名字
      */
    Name: string;
    /**
      * 风险等级
      */
    RiskLevel?: number;
    /**
      * 拦截状态
      */
    Status?: number;
    /**
      * 自定义策略ID
      */
    RuleId?: number;
    /**
      * 攻击者IP
      */
    AttackIp?: string;
    /**
      * 攻击类型
      */
    AttackType?: string;
}
/**
 * SearchAccessLog请求参数结构体
 */
export interface SearchAccessLogRequest {
    /**
      * 客户要查询的日志主题ID，每个客户都有对应的一个主题
      */
    TopicId: string;
    /**
      * 要查询的日志的起始时间，Unix时间戳，单位ms
      */
    From: number;
    /**
      * 要查询的日志的结束时间，Unix时间戳，单位ms
      */
    To: number;
    /**
      * 查询语句，语句长度最大为4096
      */
    Query: string;
    /**
      * 单次查询返回的日志条数，最大值为100
      */
    Limit?: number;
    /**
      * 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容
      */
    Context?: string;
    /**
      * 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc
      */
    Sort?: string;
}
