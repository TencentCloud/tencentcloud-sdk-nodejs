/**
 * RefreshDomain返回参数结构体
 */
export interface RefreshDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDomain请求参数结构体
 */
export interface DeleteDomainRequest {
    /**
      * 域名ID，可通过<a href="https://cloud.tencent.com/document/api/1084/49339">搜索域名</a>接口获得
      */
    DomainId: number;
}
/**
 * DescribeNoticeInfo请求参数结构体
 */
export declare type DescribeNoticeInfoRequest = null;
/**
 * ModifyDomainTags返回参数结构体
 */
export interface ModifyDomainTagsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainCerts请求参数结构体
 */
export interface DescribeDomainCertsRequest {
    /**
      * 域名ID，可通过搜索域名接口获得
      */
    DomainId: number;
}
/**
 * RefreshDomain请求参数结构体
 */
export interface RefreshDomainRequest {
    /**
      * 域名列表中的ID，可通过搜索域名接口获得
      */
    DomainId: number;
}
/**
 * ResolveDomain请求参数结构体
 */
export interface ResolveDomainRequest {
    /**
      * 域名
      */
    Domain: string;
}
/**
 * 监控域名列表
 */
export interface DescribeDomains {
    /**
      * 列表数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: Array<DomainSiteInfo>;
    /**
      * 搜索出来的数量
      */
    SearchTotal: number;
    /**
      * 总数
      */
    Total: number;
    /**
      * 允许的监控数量
      */
    AllowMonitoringCount: number;
    /**
      * 当前监控的数量
      */
    CurrentMonitoringCount: number;
    /**
      * 允许添加域名总数
      */
    AllowMaxAddDomain: number;
}
/**
 * 面板数据
 */
export interface DashboardResult {
    /**
      * 安全等级图表
      */
    SecurityLevelPie: Array<ChartNameValue>;
    /**
      * 证书品牌图表
      */
    CertBrandsPie: Array<ChartNameValue>;
    /**
      * 证书有效时间图表
      */
    CertValidTimePie: Array<ChartNameValue>;
    /**
      * 证书类型图表
      */
    CertTypePie: Array<ChartNameValue>;
    /**
      * ssl bugs图表
      */
    SSLBugsLoopholeHistogram: Array<ChartHistogram>;
    /**
      * 合规图表
      */
    ComplianceHistogram: Array<ChartHistogram>;
}
/**
 * DescribeNoticeInfo返回参数结构体
 */
export interface DescribeNoticeInfoResponse {
    /**
      * 通知信息结果
      */
    Data?: NoticeInfoResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 通用图表键值对
 */
export interface ChartNameValue {
    /**
      * 图表项名称
      */
    Name: string;
    /**
      * 图表项值
      */
    Value: number;
}
/**
 * CreateDomain请求参数结构体
 */
export interface CreateDomainRequest {
    /**
      * 监控的服务器类型（0：web，1：smtp，2：imap，3：pops）
      */
    ServerType: number;
    /**
      * 添加的域名
      */
    Domain: string;
    /**
      * 添加的端口
      */
    Port: string;
    /**
      * 指定域名的IP
      */
    IP?: string;
    /**
      * 是否开启通知告警；true：开启通知告警，false：关闭通知告警
      */
    Notice?: boolean;
    /**
      * 给域名添加标签，多个以逗号隔开
      */
    Tags?: string;
}
/**
 * ResolveDomain返回参数结构体
 */
export interface ResolveDomainResponse {
    /**
      * 响应数据
      */
    Data?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDomainTags请求参数结构体
 */
export interface ModifyDomainTagsRequest {
    /**
      * 账号下域名ID
      */
    AccountDomainId: number;
    /**
      * 更新后的tag，多个以逗号隔开
      */
    Tags: string;
}
/**
 * 证书信息
 */
export interface CertInfo {
    /**
      * 证书sha1
      */
    Hash: string;
    /**
      * 证书通用名称
      */
    CN: string;
    /**
      * 备用名称
      */
    SANs: string;
    /**
      * 公钥算法
      */
    KeyAlgo: string;
    /**
      * 颁发者
      */
    Issuer: string;
    /**
      * 有效期开始
      */
    BeginTime: string;
    /**
      * 有效期结束
      */
    EndTime: string;
    /**
      * 剩余天数
      */
    Days: number;
    /**
      * 品牌
      */
    Brand: string;
    /**
      * 信任状态
      */
    TrustStatus: string;
    /**
      * 证书类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    CertType: string;
}
/**
 * DescribeDashboard返回参数结构体
 */
export interface DescribeDashboardResponse {
    /**
      * dashboard面板数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: DashboardResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainTags返回参数结构体
 */
export interface DescribeDomainTagsResponse {
    /**
      * Tag数组
      */
    Data?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 直方图数据结构
 */
export interface ChartHistogram {
    /**
      * 项目名
      */
    Name: string;
    /**
      * 项目值
      */
    Children: Array<ChartNameValue>;
}
/**
 * 通知额度限制信息
 */
export interface LimitInfo {
    /**
      * 通知类型：
limit_emai：邮件
limit_wechat：微信
limit_phone：手机
      */
    Type: string;
    /**
      * 总量
      */
    Total: number;
    /**
      * 已发送
      */
    Sent: number;
}
/**
 * DescribeDashboard请求参数结构体
 */
export declare type DescribeDashboardRequest = null;
/**
 * DescribeDomains返回参数结构体
 */
export interface DescribeDomainsResponse {
    /**
      * 列表数据
      */
    Data: DescribeDomains;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 通知信息结果
 */
export interface NoticeInfoResult {
    /**
      * 通知ID
      */
    Id: number;
    /**
      * 通知开关信息；0：关闭；15开启
      */
    NoticeType: number;
    /**
      * 额度信息
      */
    LimitInfos: Array<LimitInfo>;
}
/**
 * DescribeDomainCerts返回参数结构体
 */
export interface DescribeDomainCertsResponse {
    /**
      * 证书信息
      */
    Data?: Array<CertInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 监控的域名站点信息
 */
export interface DomainSiteInfo {
    /**
      * ID标识
      */
    Id: number;
    /**
      * 域名
      */
    Domain: string;
    /**
      * IP地址
      */
    Ip: string;
    /**
      * 是否自动获取IP：true：是，false:否
      */
    AutoIP: boolean;
    /**
      * 评级
"A+"，
 "A"，
"A-"，
"B"，
"C"，
"D"，
 "E"，
 "F"，
"T"，
      */
    Grade: string;
    /**
      * 证书品牌
      */
    Brand: string;
    /**
      * 监控服务类型
0 :Web
1: SMTP
2: IMAP
3: POP3
      */
    ServerType: number;
    /**
      * 评级Code
0："unknown"，
1："A+"，
2： "A"，
3："A-"，
4："B"，
5："C"，
6："D"，
7： "E"，
8： "F"，
9："T"，
      */
    GradeCode: number;
    /**
      * 是否监控告警；true：是，false:否
      */
    Notice: boolean;
    /**
      * 账号域名关系ID
      */
    AccountDomainId: number;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<string>;
    /**
      * 域名状态:
连接异常，
证书已过期，
证书已吊销，
证书黑名单，
证书域名不匹配，
证书不可信，
证书密钥弱，
证书即将过期，少于7天，
证书即将过期，少于30天，
正常，
部分异常
      */
    Status: string;
    /**
      * 域名端口
      */
    Port: string;
}
/**
 * DeleteDomain返回参数结构体
 */
export interface DeleteDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDomain返回参数结构体
 */
export interface CreateDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainTags请求参数结构体
 */
export declare type DescribeDomainTagsRequest = null;
/**
 * DescribeDomains请求参数结构体
 */
export interface DescribeDomainsRequest {
    /**
      * 偏移量
      */
    Offset: number;
    /**
      * 获取数量
      */
    Limit: number;
    /**
      * 搜索的类型有：none，tags，grade，brand，code，hash，limit，domain。
选tags，入参请填Tag，
选grade，入参请填Grade，
选brand，入参请填Brand，
选code，入参请填Code，
选hash，入参请填Hash
选limit，标识只返回数量信息
选domain，入参请填Domain
      */
    SearchType: string;
    /**
      * 标签，多个标签用逗号分隔
      */
    Tag?: string;
    /**
      * 等级
      */
    Grade?: string;
    /**
      * 品牌
      */
    Brand?: string;
    /**
      * 混合搜索
      */
    Code?: string;
    /**
      * 证书指纹
      */
    Hash?: string;
    /**
      * 搜索图标类型
      */
    Item?: string;
    /**
      * 搜索图标值
      */
    Status?: string;
    /**
      * 搜索域名
      */
    Domain?: string;
}
