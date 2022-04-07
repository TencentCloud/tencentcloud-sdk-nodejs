/**
 * PurgePathCache请求参数结构体
 */
export interface PurgePathCacheRequest {
    /**
      * 要刷新的目录列表，必须包含协议头部。
      */
    Paths: Array<string>;
    /**
      * 刷新类型，flush 代表刷新有更新的资源，delete 表示刷新全部资源。
      */
    FlushType: string;
}
/**
 * DescribeEcdnStatistics请求参数结构体
 */
export interface DescribeEcdnStatisticsRequest {
    /**
      * 查询起始时间，如：2019-12-13 00:00:00
      */
    StartTime: string;
    /**
      * 查询结束时间，如：2019-12-13 23:59:59
      */
    EndTime: string;
    /**
      * 指定查询指标，支持的类型有：
flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
2xx：返回 2xx 状态码汇总或者 2 开头状态码数据，单位为 个
3xx：返回 3xx 状态码汇总或者 3 开头状态码数据，单位为 个
4xx：返回 4xx 状态码汇总或者 4 开头状态码数据，单位为 个
5xx：返回 5xx 状态码汇总或者 5 开头状态码数据，单位为 个
      */
    Metrics: Array<string>;
    /**
      * 时间粒度，支持以下几种模式：
1 天	 1，5，15，30，60，120，240，1440
2 ~ 3 天	15，30，60，120，240，1440
4 ~ 7 天	30，60，120，240，1440
8 ~ 31 天	 60，120，240，1440
      */
    Interval: number;
    /**
      * 指定查询域名列表

最多可一次性查询30个加速域名。
      */
    Domains?: Array<string>;
    /**
      * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
      */
    Projects?: Array<number>;
    /**
      * 统计区域:
mainland: 境内
oversea: 境外
global: 全部
默认 global
      */
    Area?: string;
}
/**
 * StartEcdnDomain请求参数结构体
 */
export interface StartEcdnDomainRequest {
    /**
      * 待启用域名。
      */
    Domain: string;
}
/**
 * DescribeDomainsConfig返回参数结构体
 */
export interface DescribeDomainsConfigResponse {
    /**
      * 域名列表。
      */
    Domains: Array<DomainDetailInfo>;
    /**
      * 符合查询条件的域名总数，用于分页查询。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 回源的自定义Https配置
 */
export interface AdvanceHttps {
    /**
      * 自定义Tls数据开关
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomTlsStatus?: string;
    /**
      * Tls版本列表，支持设置 TLSv1, TLSV1.1, TLSV1.2, TLSv1.3，修改时必须开启连续的版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    TlsVersion?: Array<string>;
    /**
      * 自定义加密套件
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cipher?: string;
    /**
      * 回源双向校验开启状态
off - 关闭校验
oneWay - 校验源站
twoWay - 双向校验
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyOriginType?: string;
    /**
      * 回源层证书配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertInfo?: ServerCert;
    /**
      * 源站证书配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginCertInfo?: ClientCert;
}
/**
 * CreateVerifyRecord返回参数结构体
 */
export interface CreateVerifyRecordResponse {
    /**
      * 子解析
      */
    SubDomain: string;
    /**
      * 解析值
      */
    Record: string;
    /**
      * 解析类型
      */
    RecordType: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询对象及其对应的访问明细数据
 */
export interface ResourceData {
    /**
      * 资源名称，根据查询条件不同分为以下几类：
具体域名：表示该域名明细数据
multiDomains：表示多域名汇总明细数据
项目 ID：指定项目查询时，显示为项目 ID
all：账号维度明细数据
      */
    Resource: string;
    /**
      * 资源对应的数据明细
      */
    EcdnData: EcdnData;
}
/**
 * 域名https配置。
 */
export interface Https {
    /**
      * https配置开关，on或off。开启https配置的域名在部署中状态，开关保持off。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Switch: string;
    /**
      * 是否开启http2，on或off。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Http2?: string;
    /**
      * 是否开启OCSP功能，on或off。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcspStapling?: string;
    /**
      * 是否开启客户端证书校验功能，on或off，开启时必选上传客户端证书信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifyClient?: string;
    /**
      * 服务器证书配置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertInfo?: ServerCert;
    /**
      * 客户端证书配置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClientCertInfo?: ClientCert;
    /**
      * 是否开启Spdy，on或off。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Spdy?: string;
    /**
      * https证书部署状态，closed，deploying，deployed，failed分别表示已关闭，部署中，部署成功，部署失败。不可作为入参使用。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SslStatus?: string;
    /**
      * Hsts配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    Hsts?: Hsts;
}
/**
 * 缓存配置简单版本，该版本不支持设置源站未返回max-age情况下的缓存规则。
 */
export interface Cache {
    /**
      * 缓存配置规则数组。
      */
    CacheRules: Array<CacheRule>;
    /**
      * 遵循源站 Cache-Control: max-age 配置，白名单功能。
on：开启
off：关闭
开启后，未能匹配 CacheRules 规则的资源将根据源站返回的 max-age 值进行节点缓存；匹配了 CacheRules 规则的资源将按照 CacheRules 中设置的缓存过期时间在节点进行缓存
注意：此字段可能返回 null，表示取不到有效值。
      */
    FollowOrigin?: string;
}
/**
 * 访问协议强制跳转配置。
 */
export interface ForceRedirect {
    /**
      * 访问协议强制跳转配置开关，on或off。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Switch: string;
    /**
      * 强制跳转访问协议类型，支持http，https，分别表示请求强制跳转http协议，请求强制跳转https协议。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RedirectType?: string;
    /**
      * 强制跳转开启时返回的http状态码，支持301或302。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RedirectStatusCode?: number;
}
/**
 * DescribeIpStatus返回参数结构体
 */
export interface DescribeIpStatusResponse {
    /**
      * 节点列表
      */
    Ips: Array<IpStatus>;
    /**
      * 节点总个数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePurgeQuota返回参数结构体
 */
export interface DescribePurgeQuotaResponse {
    /**
      * Url刷新用量及配额。
      */
    UrlPurge: Quota;
    /**
      * 目录刷新用量及配额。
      */
    PathPurge: Quota;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEcdnDomainStatistics返回参数结构体
 */
export interface DescribeEcdnDomainStatisticsResponse {
    /**
      * 域名数据
      */
    Data: Array<DomainData>;
    /**
      * 数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 时间戳与其对应的数值
 */
export interface TimestampData {
    /**
      * 数据统计时间点，采用向前汇总模式
以 5 分钟粒度为例，13:35:00 时间点代表的统计数据区间为 13:35:00 至 13:39:59
      */
    Time: string;
    /**
      * 数据值
      */
    Value: Array<number>;
}
/**
 * 排序类型数据结构
 */
export interface DomainData {
    /**
      * 域名
      */
    Resource: string;
    /**
      * 结果详情
      */
    DetailData: Array<DetailData>;
}
/**
 * StopEcdnDomain请求参数结构体
 */
export interface StopEcdnDomainRequest {
    /**
      * 待停用域名。
      */
    Domain: string;
}
/**
 * 查询结果排序条件。
 */
export interface Sort {
    /**
      * 排序字段，当前支持：
createTime，域名创建时间
certExpireTime，证书过期时间
      */
    Key: string;
    /**
      * asc/desc，默认desc。
      */
    Sequence?: string;
}
/**
 * IP限频配置。
 */
export interface IpFreqLimit {
    /**
      * IP限频配置开关，on或off。
      */
    Switch: string;
    /**
      * 每秒请求数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Qps?: number;
}
/**
 * DescribePurgeTasks请求参数结构体
 */
export interface DescribePurgeTasksRequest {
    /**
      * 查询刷新类型。url：查询 url 刷新记录；path：查询目录刷新记录。
      */
    PurgeType?: string;
    /**
      * 开始时间，如2018-08-08 00:00:00。
      */
    StartTime?: string;
    /**
      * 结束时间，如2018-08-08 23:59:59。
      */
    EndTime?: string;
    /**
      * 提交时返回的任务 Id，查询时 TaskId 和起始时间必须指定一项。
      */
    TaskId?: string;
    /**
      * 分页查询偏移量，默认为0（从第0条开始）。
      */
    Offset?: number;
    /**
      * 分页查询限制数目，默认为20。
      */
    Limit?: number;
    /**
      * 查询关键字，请输入域名或 http(s):// 开头完整 URL。
      */
    Keyword?: string;
    /**
      * 查询指定任务状态，fail表示失败，done表示成功，process表示刷新中。
      */
    Status?: string;
}
/**
 * 域名查询时过滤条件。
 */
export interface DomainFilter {
    /**
      * 过滤字段名，支持的列表如下：
- origin：主源站。
- domain：域名。
- resourceId：域名id。
- status：域名状态，online，offline，processing。
- disable：域名封禁状态，normal，unlicensed。
- projectId：项目ID。
- fullUrlCache：全路径缓存，on或off。
- https：是否配置https，on，off或processing。
- originPullProtocol：回源协议类型，支持http，follow或https。
- area：加速区域，支持mainland，overseas或global。
- tagKey：标签键。
      */
    Name: string;
    /**
      * 过滤字段值。
      */
    Value: Array<string>;
    /**
      * 是否启用模糊查询，仅支持过滤字段名为origin，domain。
      */
    Fuzzy?: boolean;
}
/**
 * 域名日志信息
 */
export interface DomainLogs {
    /**
      * 日志起始时间。
      */
    StartTime: string;
    /**
      * 日志结束时间。
      */
    EndTime: string;
    /**
      * 日志下载路径。
      */
    LogPath: string;
}
/**
 * HSTS 配置。
 */
export interface Hsts {
    /**
      * 是否开启，on或off。
      */
    Switch: string;
    /**
      * MaxAge数值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxAge?: number;
    /**
      * 是否包含子域名，on或off。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IncludeSubDomains?: string;
}
/**
 * PurgeUrlsCache请求参数结构体
 */
export interface PurgeUrlsCacheRequest {
    /**
      * 要刷新的Url列表，必须包含协议头部。
      */
    Urls: Array<string>;
}
/**
 * 分路径的http头部设置规则。
 */
export interface HttpHeaderPathRule {
    /**
      * http头部设置方式，支持add，set或del，分别表示新增，设置或删除头部。
请求头部暂不支持set。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HeaderMode: string;
    /**
      * http头部名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HeaderName: string;
    /**
      * http头部值。del时可不填写该字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HeaderValue: string;
    /**
      * 生效的url路径规则类型，支持all，file，directory或path，分别表示全部路径，文件后缀类型，目录或绝对路径生效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleType: string;
    /**
      * url路径或文件类型列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RulePaths: Array<string>;
}
/**
 * UpdateDomainConfig返回参数结构体
 */
export interface UpdateDomainConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 排序类型的数据结构
 */
export interface DetailData {
    /**
      * 数据类型的名称
      */
    Name: string;
    /**
      * 数据值
      */
    Value: number;
}
/**
 * DescribePurgeQuota请求参数结构体
 */
export declare type DescribePurgeQuotaRequest = null;
/**
 * DescribeEcdnDomainLogs返回参数结构体
 */
export interface DescribeEcdnDomainLogsResponse {
    /**
      * 日志链接列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainLogs: Array<DomainLogs>;
    /**
      * 日志链接总条数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 访问明细数据类型
 */
export interface EcdnData {
    /**
      * 查询指定的指标名称：Bandwidth，Flux，Request，Delay，状态码，LogBandwidth，LogFlux，LogRequest
      */
    Metrics: Array<string>;
    /**
      * 明细数据组合
      */
    DetailData: Array<TimestampData>;
}
/**
 * UpdateDomainConfig请求参数结构体
 */
export interface UpdateDomainConfigRequest {
    /**
      * 域名。
      */
    Domain: string;
    /**
      * 源站配置。
      */
    Origin?: Origin;
    /**
      * 项目id。
      */
    ProjectId?: number;
    /**
      * IP黑白名单配置。
      */
    IpFilter?: IpFilter;
    /**
      * IP限频配置。
      */
    IpFreqLimit?: IpFreqLimit;
    /**
      * 源站响应头部配置。
      */
    ResponseHeader?: ResponseHeader;
    /**
      * 节点缓存配置。
      */
    CacheKey?: CacheKey;
    /**
      * 缓存规则配置。
      */
    Cache?: Cache;
    /**
      * Https配置。
      */
    Https?: Https;
    /**
      * 访问协议强制跳转配置。
      */
    ForceRedirect?: ForceRedirect;
    /**
      * 域名加速区域，mainland，overseas或global，分别表示中国境内加速，海外加速或全球加速。
      */
    Area?: string;
    /**
      * WebSocket配置
      */
    WebSocket?: WebSocket;
}
/**
 * DescribeDomainsConfig请求参数结构体
 */
export interface DescribeDomainsConfigRequest {
    /**
      * 分页查询的偏移地址，默认0。
      */
    Offset?: number;
    /**
      * 分页查询的域名个数，默认100。
      */
    Limit?: number;
    /**
      * 查询条件过滤器。
      */
    Filters?: Array<DomainFilter>;
    /**
      * 查询结果排序规则。
      */
    Sort?: Sort;
}
/**
 * https客户端证书配置。
 */
export interface ClientCert {
    /**
      * 客户端证书，pem格式。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Certificate: string;
    /**
      * 客户端证书名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertName?: string;
    /**
      * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime?: string;
    /**
      * 证书颁发时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployTime?: string;
}
/**
 * CDN域名简要信息。
 */
export interface DomainBriefInfo {
    /**
      * 域名ID。
      */
    ResourceId: string;
    /**
      * 腾讯云账号ID。
      */
    AppId: number;
    /**
      * CDN加速域名。
      */
    Domain: string;
    /**
      * 域名CName。
      */
    Cname: string;
    /**
      * 域名状态，pending，rejected，processing， online，offline，deleted分别表示审核中，审核未通过，审核通过部署中，已开启，已关闭，已删除。
      */
    Status: string;
    /**
      * 项目ID。
      */
    ProjectId: number;
    /**
      * 域名创建时间。
      */
    CreateTime: string;
    /**
      * 域名更新时间。
      */
    UpdateTime: string;
    /**
      * 源站配置详情。
      */
    Origin: Origin;
    /**
      * 域名封禁状态，normal，overdue，quota，malicious，ddos，idle，unlicensed，capping，readonly分别表示 正常，欠费停服，试用客户流量包耗尽，恶意用户，ddos攻击，无流量域名，未备案，带宽封顶，只读
      */
    Disable: string;
    /**
      * 加速区域，mainland，oversea或global。
      */
    Area: string;
    /**
      * 域名锁定状态，normal、global，分别表示未被锁定、全球锁定。
      */
    Readonly: string;
    /**
      * 域名标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tag: Array<Tag>;
}
/**
 * StartEcdnDomain返回参数结构体
 */
export interface StartEcdnDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEcdnDomain返回参数结构体
 */
export interface DeleteEcdnDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签键和标签值
 */
export interface Tag {
    /**
      * 标签键
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagKey: string;
    /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagValue: string;
}
/**
 * WebSocket配置。
 */
export interface WebSocket {
    /**
      * WebSocket 超时配置开关, 开关为off时，平台仍支持WebSocket连接，此时超时时间默认为15秒，若需要调整超时时间，将开关置为on.

* WebSocket 为内测功能,如需使用,请联系腾讯云工程师开白.
      */
    Switch: string;
    /**
      * 设置超时时间，单位为秒，最大超时时间65秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timeout?: number;
}
/**
 * StopEcdnDomain返回参数结构体
 */
export interface StopEcdnDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * PurgePathCache返回参数结构体
 */
export interface PurgePathCacheResponse {
    /**
      * 刷新任务Id。
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * PurgeUrlsCache返回参数结构体
 */
export interface PurgeUrlsCacheResponse {
    /**
      * 刷新任务Id。
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IP黑白名单。
 */
export interface IpFilter {
    /**
      * IP黑白名单开关，on或off。
      */
    Switch: string;
    /**
      * IP黑白名单类型，whitelist或blacklist。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterType?: string;
    /**
      * IP黑白名单列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Filters?: Array<string>;
}
/**
 * AddEcdnDomain请求参数结构体
 */
export interface AddEcdnDomainRequest {
    /**
      * 域名。
      */
    Domain: string;
    /**
      * 源站配置。
      */
    Origin: Origin;
    /**
      * 域名加速区域，mainland，overseas或global，分别表示中国境内加速，海外加速或全球加速。
      */
    Area: string;
    /**
      * 项目id，默认0。
      */
    ProjectId?: number;
    /**
      * IP黑白名单配置。
      */
    IpFilter?: IpFilter;
    /**
      * IP限频配置。
      */
    IpFreqLimit?: IpFreqLimit;
    /**
      * 源站响应头部配置。
      */
    ResponseHeader?: ResponseHeader;
    /**
      * 节点缓存配置。
      */
    CacheKey?: CacheKey;
    /**
      * 缓存规则配置。
      */
    Cache?: Cache;
    /**
      * Https配置。
      */
    Https?: Https;
    /**
      * 访问协议强制跳转配置。
      */
    ForceRedirect?: ForceRedirect;
    /**
      * 域名绑定的标签
      */
    Tag?: Array<Tag>;
    /**
      * WebSocket配置
      */
    WebSocket?: WebSocket;
}
/**
 * 自定义响应头配置。
 */
export interface ResponseHeader {
    /**
      * 自定义响应头开关，on或off。
      */
    Switch: string;
    /**
      * 自定义响应头规则数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HeaderRules?: Array<HttpHeaderPathRule>;
}
/**
 * DescribeDomains返回参数结构体
 */
export interface DescribeDomainsResponse {
    /**
      * 域名信息列表。
      */
    Domains: Array<DomainBriefInfo>;
    /**
      * 域名总个数。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEcdnDomain请求参数结构体
 */
export interface DeleteEcdnDomainRequest {
    /**
      * 待删除域名。
      */
    Domain: string;
}
/**
 * DescribePurgeTasks返回参数结构体
 */
export interface DescribePurgeTasksResponse {
    /**
      * 刷新历史记录。
      */
    PurgeLogs: Array<PurgeTask>;
    /**
      * 任务总数，用于分页。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddEcdnDomain返回参数结构体
 */
export interface AddEcdnDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 节点 IP 信息
 */
export interface IpStatus {
    /**
      * 节点 IP
      */
    Ip: string;
    /**
      * 节点所属区域
      */
    District: string;
    /**
      * 节点所属运营商
      */
    Isp: string;
    /**
      * 节点所在城市
      */
    City: string;
    /**
      * 节点状态
online：上线状态，正常调度服务中
offline：下线状态
      */
    Status: string;
    /**
      * 节点 IP 添加时间
      */
    CreateTime: string;
}
/**
 * 刷新任务日志详情
 */
export interface PurgeTask {
    /**
      * 刷新任务ID。
      */
    TaskId: string;
    /**
      * 刷新Url。
      */
    Url: string;
    /**
      * 刷新任务状态，fail表示失败，done表示成功，process表示刷新中。
      */
    Status: string;
    /**
      * 刷新类型，url表示url刷新，path表示目录刷新。
      */
    PurgeType: string;
    /**
      * 刷新资源方式，flush代表刷新更新资源，delete代表刷新全部资源。
      */
    FlushType: string;
    /**
      * 刷新任务提交时间
      */
    CreateTime: string;
}
/**
 * 缓存配置规则。
 */
export interface CacheRule {
    /**
      * 缓存类型，支持all，file，directory，path，index，分别表示全部文件，后缀类型，目录，完整路径，首页。
      */
    CacheType: string;
    /**
      * 缓存内容列表。
      */
    CacheContents: Array<string>;
    /**
      * 缓存时间，单位秒。
      */
    CacheTime: number;
}
/**
 * DescribeEcdnStatistics返回参数结构体
 */
export interface DescribeEcdnStatisticsResponse {
    /**
      * 指定条件查询得到的数据明细
      */
    Data: Array<ResourceData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 源站配置。
 */
export interface Origin {
    /**
      * 主源站列表，IP与域名源站不可混填。配置源站端口["origin1:port1", "origin2:port2"]，配置回源权重["origin1::weight1", "origin2::weight2"]，同时配置端口与权重 ["origin1:port1:weight1", "origin2:port2:weight2"]，权重值有效范围为0-100。
      */
    Origins?: Array<string>;
    /**
      * 主源站类型，支持domain，ip，分别表示域名源站，ip源站。
设置Origins时必须填写。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginType?: string;
    /**
      * 回源时Host头部值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServerName?: string;
    /**
      * 回源协议类型，支持http，follow，https，分别表示强制http回源，协议跟随回源，https回源。
不传入的情况下默认为http回源.
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginPullProtocol?: string;
    /**
      * 备份源站列表。
      */
    BackupOrigins?: Array<string>;
    /**
      * 备份源站类型，同OriginType。
设置BackupOrigins时必须填写。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BackupOriginType?: string;
    /**
      * HTTPS回源高级配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdvanceHttps?: AdvanceHttps;
}
/**
 * https服务端证书配置。
 */
export interface ServerCert {
    /**
      * 服务器证书id，当证书为腾讯云托管证书时必填。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertId?: string;
    /**
      * 服务器证书名称，当证书为腾讯云托管证书时必填。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertName?: string;
    /**
      * 服务器证书信息，上传自有证书时必填，必须包含完整的证书链信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Certificate?: string;
    /**
      * 服务器密钥信息，上传自有证书时必填。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PrivateKey?: string;
    /**
      * 证书过期时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime?: string;
    /**
      * 证书颁发时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeployTime?: string;
    /**
      * 证书备注信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message?: string;
}
/**
 * 缓存相关配置。
 */
export interface CacheKey {
    /**
      * 是否开启全路径缓存，on或off。
      */
    FullUrlCache?: string;
}
/**
 * DescribeEcdnDomainStatistics请求参数结构体
 */
export interface DescribeEcdnDomainStatisticsRequest {
    /**
      * 查询起始时间，如：2019-12-13 00:00:00。
起止时间不超过90天。
      */
    StartTime: string;
    /**
      * 查询结束时间，如：2019-12-13 23:59:59。
起止时间不超过90天。
      */
    EndTime: string;
    /**
      * 统计指标名称:
flux：流量，单位为 byte
bandwidth：带宽，单位为 bps
request：请求数，单位为 次
      */
    Metrics: Array<string>;
    /**
      * 指定查询域名列表
      */
    Domains?: Array<string>;
    /**
      * 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)
未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主
      */
    Projects?: Array<number>;
    /**
      * 列表分页起始地址，默认0。
      */
    Offset?: number;
    /**
      * 列表分页记录条数，默认1000，最大3000。
      */
    Limit?: number;
    /**
      * 统计区域:
mainland: 境内
oversea: 境外
global: 全部
默认 global
      */
    Area?: string;
}
/**
 * 刷新用量及刷新配额
 */
export interface Quota {
    /**
      * 单次批量提交配额上限。
      */
    Batch: number;
    /**
      * 每日提交配额上限。
      */
    Total: number;
    /**
      * 每日剩余的可提交配额。
      */
    Available: number;
}
/**
 * DescribeEcdnDomainLogs请求参数结构体
 */
export interface DescribeEcdnDomainLogsRequest {
    /**
      * 待查询域名。
      */
    Domain: string;
    /**
      * 日志起始时间。如：2019-10-01 00:00:00
      */
    StartTime: string;
    /**
      * 日志结束时间，只支持最近30天内日志查询。2019-10-02 00:00:00
      */
    EndTime: string;
    /**
      * 日志链接列表分页起始地址，默认0。
      */
    Offset?: number;
    /**
      * 日志链接列表分页记录条数，默认100，最大1000。
      */
    Limit?: number;
}
/**
 * ECDN域名详细配置信息。
 */
export interface DomainDetailInfo {
    /**
      * 域名ID。
      */
    ResourceId: string;
    /**
      * 腾讯云账号ID。
      */
    AppId: number;
    /**
      * 加速域名。
      */
    Domain: string;
    /**
      * 域名CName。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cname: string;
    /**
      * 域名状态，pending，rejected，processing， online，offline，deleted分别表示审核中，审核未通过，审核通过部署中，已开启，已关闭，已删除。
      */
    Status: string;
    /**
      * 项目ID。
      */
    ProjectId: number;
    /**
      * 域名创建时间。
      */
    CreateTime: string;
    /**
      * 域名更新时间。
      */
    UpdateTime: string;
    /**
      * 源站配置。
      */
    Origin: Origin;
    /**
      * IP黑白名单配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpFilter: IpFilter;
    /**
      * IP限频配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    IpFreqLimit: IpFreqLimit;
    /**
      * 源站响应头部配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResponseHeader: ResponseHeader;
    /**
      * 节点缓存配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CacheKey: CacheKey;
    /**
      * 缓存规则配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cache: Cache;
    /**
      * Https配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Https: Https;
    /**
      * 域名封禁状态，normal，overdue，quota，malicious，ddos，idle，unlicensed，capping，readonly分别表示 正常，欠费停服，试用客户流量包耗尽，恶意用户，ddos攻击，无流量域名，未备案，带宽封顶，只读。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Disable: string;
    /**
      * 访问协议强制跳转配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ForceRedirect: ForceRedirect;
    /**
      * 加速区域，mainland，overseas或global。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Area: string;
    /**
      * 域名锁定状态，normal、global 分别表示未被锁定，全球锁定。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Readonly: string;
    /**
      * 域名标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tag: Array<Tag>;
    /**
      * WebSocket配置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    WebSocket: WebSocket;
}
/**
 * DescribeIpStatus请求参数结构体
 */
export interface DescribeIpStatusRequest {
    /**
      * 加速域名
      */
    Domain: string;
    /**
      * 查询区域：
mainland: 国内节点
overseas: 海外节点
global: 全球节点
      */
    Area?: string;
}
/**
 * DescribeDomains请求参数结构体
 */
export interface DescribeDomainsRequest {
    /**
      * 分页查询的偏移地址，默认0。
      */
    Offset?: number;
    /**
      * 分页查询的域名个数，默认100，最大支持1000。
      */
    Limit?: number;
    /**
      * 查询条件过滤器。
      */
    Filters?: Array<DomainFilter>;
}
/**
 * CreateVerifyRecord请求参数结构体
 */
export interface CreateVerifyRecordRequest {
    /**
      * 要取回的域名
      */
    Domain: string;
}
