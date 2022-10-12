/**
 * 保护网站信息
 */
export interface ProtectURLInfo {
    /**
      * xxx
      */
    ProtectURLId: number;
    /**
      * xxx
      */
    ProtectURL: string;
    /**
      * xxx
      */
    ProtectWeb: string;
    /**
      * xxx
      */
    ProtectURLStatus: number;
    /**
      * xxx
      */
    ProtectURLNote: string;
    /**
      * xxx
      */
    CreateTime: string;
}
/**
 * ModifyCRWhiteList请求参数结构体
 */
export interface ModifyCRWhiteListRequest {
    /**
      * 该字段已废弃，白名单ID
      */
    WhiteListId?: number;
    /**
      * 该字段已废弃，平台名称
      */
    PlatForm?: string;
    /**
      * 该字段已废弃，平台站点链接
      */
    PlatUrl?: string;
    /**
      * 该字段已废弃，作者ID
      */
    AuthorId?: string;
    /**
      * 该字段已废弃，作品ID
      */
    WorksId?: number;
    /**
      * 作品ID
      */
    WorkId?: number;
    /**
      * 白名单列表，以\n分割
      */
    WhiteSites?: string;
}
/**
 * CreateCRUserVerify请求参数结构体
 */
export interface CreateCRUserVerifyRequest {
    /**
      * 用户真实姓名
      */
    UserName: string;
    /**
      * 用户身份证号
      */
    UserID: string;
    /**
      * 用户手机号码
      */
    UserPhone: string;
    /**
      * 短信验证码，接口接入可以置空
      */
    VerificationCode?: string;
    /**
      * 字段已废弃，认证类型
      */
    Type?: string;
}
/**
 * CreateBPFalseTicket返回参数结构体
 */
export interface CreateBPFalseTicketResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRRightFile请求参数结构体
 */
export interface CreateCRRightFileRequest {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 权属文件列表
      */
    FileList: Array<File>;
}
/**
 * CreateCRRight返回参数结构体
 */
export interface CreateCRRightResponse {
    /**
      * 侵权ID
      */
    TortId: number;
    /**
      * 该字段已废弃
      */
    TortNum: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRWork返回参数结构体
 */
export interface CreateCRWorkResponse {
    /**
      * 作品ID，一个作品对应唯一的workid
      */
    WorkId: number;
    /**
      * 存证ID，忽略该字段
      */
    EvidenceId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRRight请求参数结构体
 */
export interface CreateCRRightRequest {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 侵权链接
      */
    TortUrl: string;
    /**
      * 侵权标题
      */
    TortTitle?: string;
    /**
      * 侵权平台
      */
    TortPlat?: string;
    /**
      * 发函结果回调地址
      */
    RightUrl?: string;
    /**
      * 授权书下载地址
      */
    FileUrl?: string;
    /**
      * 授权书生效日期
      */
    ValidStartDate?: string;
    /**
      * 授权书截止日期
      */
    ValidEndDate?: string;
    /**
      * 委托书下载地址
      */
    CommFileUrl?: string;
    /**
      * 委托书生效日期
      */
    CommValidStartDate?: string;
    /**
      * 委托书截止日期
      */
    CommValidEndDate?: string;
    /**
      * 主页下载地址
      */
    HomeFileUrl?: string;
    /**
      * 主页生效日期
      */
    HomeValidStartDate?: string;
    /**
      * 主页截止日期
      */
    HomeValidEndDate?: string;
    /**
      * 是否著作权人：0-否 1-是
      */
    IsProducer?: string;
    /**
      * 存证证书下载地址
      */
    EvidenceFileUrl?: string;
    /**
      * 存证证书生效日期
      */
    EvidenceValidStartDate?: string;
    /**
      * 存证证书截止日期
      */
    EvidenceValidEndDate?: string;
}
/**
 * CreateBPOfflineTicket返回参数结构体
 */
export interface CreateBPOfflineTicketResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRTort请求参数结构体
 */
export interface CreateCRTortRequest {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 侵权网址
      */
    TortURL: string;
    /**
      * 侵权平台
      */
    TortPlat?: string;
    /**
      * 侵权标题
      */
    TortTitle?: string;
}
/**
 * UpdateCRWork请求参数结构体
 */
export interface UpdateCRWorkRequest {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 文件的扩展名，比如txt，docx
      */
    ContentType?: string;
    /**
      * 内容的base64编码
      */
    Content?: string;
    /**
      * 本次存证类型：0-不存证 1-存当前文件 2-存历史全量文件
      */
    CertType?: string;
}
/**
 * DescribeBPFakeURLs请求参数结构体
 */
export interface DescribeBPFakeURLsRequest {
    /**
      * xxx
      */
    Filters?: Array<Filter>;
    /**
      * xxx
      */
    PageSize?: number;
    /**
      * xxx
      */
    PageNumber?: number;
}
/**
 * ModifyCRBlockStatus返回参数结构体
 */
export interface ModifyCRBlockStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 版权保护-监测结果
 */
export interface Monitor {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 作品名称
      */
    WorkName: string;
    /**
      * 作品内容类型 01-视频 02-音频 03-文本 04-图片
      */
    WorkType: string;
    /**
      * 侵权平台数量
      */
    TortPlatNum: number;
    /**
      * 侵权链接数量
      */
    TortURLNum: number;
    /**
      * 监测时间
      */
    MonitorTime: string;
    /**
      * 0-待监测 1-监测中 2-不监测 3-暂停监测
      */
    MonitorStatus: number;
    /**
      * 作品类型
      */
    WorkCategory: string;
    /**
      * 新增时间
      */
    InsertTime: string;
    /**
      * 监测状态说明
      */
    MonitorNote: string;
}
/**
 * ModifyCRObtainStatus请求参数结构体
 */
export interface ModifyCRObtainStatusRequest {
    /**
      * 侵权ID
      */
    TortId: number;
    /**
      * 取证类型：1-网页取证 2-过程取证
      */
    ObtainType: number;
    /**
      * 过程取证的取证时长，单位分钟，范围0-120
      */
    ObtainDuration: number;
    /**
      * 结果回调地址
      */
    ObtainUrl?: string;
}
/**
 * 举报网址信息
 */
export interface ReportFakeURLInfo {
    /**
      * xxx
      */
    FakeURLId: number;
    /**
      * xxx
      */
    DetectTime: string;
    /**
      * xxx
      */
    ProtectURL: string;
    /**
      * xxx
      */
    ProtectWeb: string;
    /**
      * xxx
      */
    FakeURL: string;
    /**
      * xxx
      */
    Snapshot: string;
    /**
      * xxx
      */
    IP: string;
    /**
      * xxx
      */
    IPLoc: string;
    /**
      * xxx
      */
    Heat: number;
    /**
      * xxx
      */
    Status: number;
    /**
      * xxx
      */
    Note: string;
    /**
      * xxx
      */
    FakeURLCompany: string;
    /**
      * xxx
      */
    FakeURLAttr: string;
    /**
      * xxx
      */
    FakeURLName: string;
    /**
      * xxx
      */
    FakeURLICP: string;
    /**
      * xxx
      */
    FakeURLCreateTime: string;
    /**
      * xxx
      */
    FakeURLExpireTime: string;
    /**
      * xxx
      */
    BlockTime: string;
}
/**
 * DescribeCRWorkInfo请求参数结构体
 */
export interface DescribeCRWorkInfoRequest {
    /**
      * 作品ID
      */
    WorkId: number;
}
/**
 * ModifyBPOfflineAttachment请求参数结构体
 */
export interface ModifyBPOfflineAttachmentRequest {
    /**
      * xx
      */
    LicenseName?: string;
    /**
      * xx
      */
    AuthorizationName?: string;
    /**
      * xx
      */
    BrandName?: string;
    /**
      * xx
      */
    BrandCertificateName?: string;
    /**
      * xx
      */
    TransferName?: string;
}
/**
 * DescribeBPFakeURLs返回参数结构体
 */
export interface DescribeBPFakeURLsResponse {
    /**
      * xxx
      */
    FakeURLInfos: Array<FakeURLInfo>;
    /**
      * xxx
      */
    TotalCount: number;
    /**
      * xxx
      */
    ExportURL: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBPOfflineAttachment返回参数结构体
 */
export interface CreateBPOfflineAttachmentResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBPReportFakeURLs请求参数结构体
 */
export interface DescribeBPReportFakeURLsRequest {
    /**
      * xxx
      */
    Filters?: Array<Filter>;
    /**
      * xxx
      */
    PageSize?: number;
    /**
      * xxx
      */
    PageNumber?: number;
}
/**
 * 监测侵权信息详情
 */
export interface MonitorTort {
    /**
      * 侵权信息ID
      */
    TortId: number;
    /**
      * 侵权标题
      */
    TortTitle: string;
    /**
      * 侵权平台
      */
    TortPlat: string;
    /**
      * 侵权链接
      */
    TortURL: string;
    /**
      * 侵权链接发布时间
      */
    PubTime: string;
    /**
      * 作者
      */
    Author: string;
    /**
      * 发现时间
      */
    DetectTime: string;
    /**
      * 取证状态
      */
    ObtainStatus: number;
    /**
      * 维权状态
      */
    RightStatus: number;
    /**
      * 拦截状态
      */
    BlockStatus: number;
    /**
      * 侵权编号
      */
    TortNum: string;
    /**
      * 取证状态说明
      */
    ObtainNote: string;
    /**
      * 作品标题
      */
    WorkTitle: string;
    /**
      * 侵权站点
      */
    TortSite: string;
    /**
      * ICP备案信息
      */
    ICP: string;
    /**
      * 维权状态说明
      */
    RightNote: string;
    /**
      * 取证类型
      */
    ObtainType: number;
    /**
      * 拦截状态说明
      */
    BlockNote: string;
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 作品名称
      */
    WorkName: string;
    /**
      * 授权书状态
      */
    AuthStatus: number;
    /**
      * 委托书状态
      */
    CommStatus: number;
    /**
      * 存证证书状态
      */
    EvidenceStatus: number;
    /**
      * 是否著作权人
      */
    IsProducer: number;
    /**
      * 是否海外网址
      */
    IsOverseas: number;
}
/**
 * CreateBPFakeURL请求参数结构体
 */
export interface CreateBPFakeURLRequest {
    /**
      * xxx
      */
    ProtectURLId?: number;
    /**
      * xxx
      */
    FakeURL?: string;
    /**
      * xxx
      */
    SnapshotNames?: Array<string>;
    /**
      * xxx
      */
    Note?: string;
}
/**
 * CreateBPProtectURLs返回参数结构体
 */
export interface CreateBPProtectURLsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBPProtectURLs返回参数结构体
 */
export interface DescribeBPProtectURLsResponse {
    /**
      * xxx
      */
    ProtectURLInfos: Array<ProtectURLInfo>;
    /**
      * xxx
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCRMonitors返回参数结构体
 */
export interface DescribeCRMonitorsResponse {
    /**
      * 监测结果
      */
    Monitors: Array<Monitor>;
    /**
      * 记录总条数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRCompanyVerify返回参数结构体
 */
export interface CreateCRCompanyVerifyResponse {
    /**
      * 认证状态：0-认证成功 1-认证失败
      */
    Status: number;
    /**
      * 认证状态说明，包括认证失败的原因
      */
    Note: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBPOfflineAttachment请求参数结构体
 */
export interface CreateBPOfflineAttachmentRequest {
    /**
      * xxx
      */
    BrandName?: string;
    /**
      * xx
      */
    BrandCertificateName?: string;
    /**
      * xx
      */
    TransferName?: string;
    /**
      * xx
      */
    AuthorizationName?: string;
}
/**
 * CreateBPProtectURLs请求参数结构体
 */
export interface CreateBPProtectURLsRequest {
    /**
      * xxx
      */
    CompanyName?: string;
    /**
      * xxx
      */
    Phone?: string;
    /**
      * xxx
      */
    LicenseName?: string;
    /**
      * xxx
      */
    ProtectURLs?: Array<string>;
    /**
      * xxx
      */
    ProtectWebs?: Array<string>;
}
/**
 * UpdateCRWork返回参数结构体
 */
export interface UpdateCRWorkResponse {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 存证ID
      */
    EvidenceId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCRBlockStatus请求参数结构体
 */
export interface ModifyCRBlockStatusRequest {
    /**
      * 侵权ID
      */
    TortId: number;
    /**
      * 拦截结果回调地址
      */
    BlockUrl?: string;
}
/**
 * ModifyCRMonitor请求参数结构体
 */
export interface ModifyCRMonitorRequest {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 监测状态：1-开启监测 2-关闭监测
      */
    MonitorStatus: string;
    /**
      * 监测截止时间
      */
    MonitorEnd?: string;
}
/**
 * DescribeCRMonitorDetail返回参数结构体
 */
export interface DescribeCRMonitorDetailResponse {
    /**
      * 侵权数组
      */
    Torts: Array<MonitorTort>;
    /**
      * 总记录数
      */
    TotalCount: number;
    /**
      * 监测状态
      */
    MonitorStatus: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRWork请求参数结构体
 */
export interface CreateCRWorkRequest {
    /**
      * 作品名称
      */
    WorkName: string;
    /**
      * 作品分类
      */
    WorkCategory: string;
    /**
      * 作品内容类型
      */
    WorkType: string;
    /**
      * 作品标签
      */
    WorkSign?: string;
    /**
      * 字段已废弃，作品图片
      */
    WorkPic?: string;
    /**
      * 作品描述
      */
    WorkDesc?: string;
    /**
      * 是否原创：0-否 1-是
      */
    IsOriginal?: string;
    /**
      * 是否发布：0-未发布 1-已发布
      */
    IsRelease?: string;
    /**
      * 字段已废弃，著作权人ID
      */
    ProducerID?: number;
    /**
      * 创作时间
      */
    ProduceTime?: string;
    /**
      * 字段已废弃
      */
    SampleContentURL?: string;
    /**
      * 作品下载地址
      */
    SampleDownloadURL?: string;
    /**
      * 作品在线地址
      */
    SamplePublicURL?: string;
    /**
      * 字段已废弃，授予类型
      */
    GrantType?: string;
    /**
      * 是否监测：0-不监测 1-监测
      */
    IsMonitor?: string;
    /**
      * 是否存证：0-不存证  2-存证 注意是2
      */
    IsCert?: string;
    /**
      * 存证回调地址
      */
    CertUrl?: string;
    /**
      * 监测回调地址
      */
    MonitorUrl?: string;
    /**
      * 字段已废弃，创作性质
      */
    ProduceType?: string;
    /**
      * 白名单列表
      */
    WhiteLists?: Array<string>;
    /**
      * 作品ID，忽略该字段
      */
    WorkId?: number;
    /**
      * 著作权人姓名
      */
    ProducerName?: string;
    /**
      * 作者，小说类型必填
      */
    Nickname?: string;
    /**
      * 授权书下载地址
      */
    Authorization?: string;
    /**
      * 授权书开始时间
      */
    AuthorizationStartTime?: string;
    /**
      * 授权书结束时间
      */
    AuthorizationEndTime?: string;
    /**
      * 内容格式，支持txt、doc等，表示Content的具体格式
      */
    ContentType?: string;
    /**
      * 文件内容base64编码，该字段仅在无法提供下载链接时使用
      */
    Content?: string;
    /**
      * 监测结束时间
      */
    MonitorEndTime?: string;
    /**
      * 申请人ID，用于存证和取证
      */
    ApplierId?: string;
    /**
      * 申请人姓名，用于存证和取证
      */
    ApplierName?: string;
}
/**
 * DescribeBPCompanyInfo请求参数结构体
 */
export declare type DescribeBPCompanyInfoRequest = null;
/**
 * DescribeBPReportFakeURLs返回参数结构体
 */
export interface DescribeBPReportFakeURLsResponse {
    /**
      * xxx
      */
    ReportFakeURLInfos: Array<ReportFakeURLInfo>;
    /**
      * xxx
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCRMonitorDetail请求参数结构体
 */
export interface DescribeCRMonitorDetailRequest {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 页数
      */
    PageSize?: number;
    /**
      * 页码
      */
    PageNumber?: number;
    /**
      * 过滤参数
      */
    Filters?: Array<Filter>;
}
/**
 * 过滤参数
 */
export declare type Filter = null;
/**
 * CreateCRBlock返回参数结构体
 */
export interface CreateCRBlockResponse {
    /**
      * 侵权ID
      */
    TortId: number;
    /**
      * 该字段已废弃
      */
    TortNum: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCRRightStatus请求参数结构体
 */
export interface ModifyCRRightStatusRequest {
    /**
      * 侵权ID
      */
    TortId: number;
    /**
      * 发函结果回调地址
      */
    RightUrl?: string;
}
/**
 * DescribeCRMonitors请求参数结构体
 */
export interface DescribeCRMonitorsRequest {
    /**
      * 过滤条件
      */
    Filters?: Array<Filter>;
    /**
      * 页数
      */
    PageSize?: number;
    /**
      * 页码
      */
    PageNumber?: number;
}
/**
 * DescribeCRWorkInfo返回参数结构体
 */
export interface DescribeCRWorkInfoResponse {
    /**
      * 作品名称
      */
    WorkName: string;
    /**
      * 监测状态
      */
    MonitorStatus: number;
    /**
      * 授权文件状态
      */
    AuthStatus: number;
    /**
      * 委托书状态
      */
    CommStatus: number;
    /**
      * 是否著作权人
      */
    IsProducer: number;
    /**
      * 存证证书状态
      */
    EvidenceStatus: number;
    /**
      * 作品类型
      */
    WorkCategory: string;
    /**
      * 是否原创
      */
    IsOriginal: string;
    /**
      * 是否已发表
      */
    IsRelease: string;
    /**
      * 著作权人姓名
      */
    ProducerName: string;
    /**
      * 发表时间
      */
    ProduceTime: string;
    /**
      * 白名单
      */
    WhiteLists: Array<string>;
    /**
      * 作品描述
      */
    WorkDesc: string;
    /**
      * 授权书
      */
    Authorization: string;
    /**
      * 授权书生效日期
      */
    AuthorizationStartTime: string;
    /**
      * 授权书截止日期
      */
    AuthorizationEndTime: string;
    /**
      * 委托书
      */
    Commission: string;
    /**
      * 委托书生效日期
      */
    CommissionStartTime: string;
    /**
      * 委托书截止日期
      */
    CommissionEndTime: string;
    /**
      * 存证证书
      */
    EvidenceUrl: string;
    /**
      * 存证证书生效日期
      */
    EvidenceStartTime: string;
    /**
      * 存证证书截止日期
      */
    EvidenceEndTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRRightFile返回参数结构体
 */
export interface CreateCRRightFileResponse {
    /**
      * 权属文件Id，按提交顺序排序
      */
    FileIds: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCRWhiteList返回参数结构体
 */
export interface ModifyCRWhiteListResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 仿冒网站信息
 */
export interface FakeURLInfo {
    /**
      * xxx
      */
    FakeURLId: number;
    /**
      * xxx
      */
    ProtectWeb: string;
    /**
      * xxx
      */
    DetectTime: string;
    /**
      * xxx
      */
    FakeURL: string;
    /**
      * xxx
      */
    Snapshot: string;
    /**
      * xxx
      */
    IP: string;
    /**
      * xxx
      */
    IPLoc: string;
    /**
      * xxx
      */
    Heat: number;
    /**
      * xxx
      */
    Status: number;
    /**
      * xxx
      */
    Note: string;
    /**
      * xxx
      */
    FakeURLCompany: string;
    /**
      * xxx
      */
    FakeURLAttr: string;
    /**
      * xxx
      */
    FakeURLName: string;
    /**
      * xxx
      */
    FakeURLICP: string;
    /**
      * xxx
      */
    FakeURLCreateTime: string;
    /**
      * xxx
      */
    FakeURLExpireTime: string;
}
/**
 * CreateBPOfflineTicket请求参数结构体
 */
export interface CreateBPOfflineTicketRequest {
    /**
      * xxx
      */
    FakeURLId?: number;
}
/**
 * CreateCRUserVerify返回参数结构体
 */
export interface CreateCRUserVerifyResponse {
    /**
      * 认证状态：0-认证成功 1-认证失败
      */
    Status: number;
    /**
      * 认证状态说明，包括认证失败原因等
      */
    Note: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 商标信息
 */
export interface BrandData {
    /**
      * xxx
      */
    BrandName: string;
    /**
      * xxx
      */
    BrandCertificateName: string;
    /**
      * xxx
      */
    BrandStatus: number;
    /**
      * xxx
      */
    BrandNote: string;
    /**
      * xxx
      */
    TransferName: string;
    /**
      * xxx
      */
    TransferStatus: number;
    /**
      * xxx
      */
    TransferNote: string;
}
/**
 * ModifyCRRightStatus返回参数结构体
 */
export interface ModifyCRRightStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBPCompanyInfo返回参数结构体
 */
export interface DescribeBPCompanyInfoResponse {
    /**
      * xx
      */
    CompanyName: string;
    /**
      * xx
      */
    Phone: string;
    /**
      * xx
      */
    LicenseName: string;
    /**
      * xx
      */
    LicenseStatus: number;
    /**
      * xx
      */
    LicenseNote: string;
    /**
      * xx
      */
    AuthorizationName: string;
    /**
      * xx
      */
    AuthorizationStatus: number;
    /**
      * xx
      */
    AuthorizationNote: string;
    /**
      * xx
      */
    BrandDatas: Array<BrandData>;
    /**
      * xx
      */
    CompanyId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyBPOfflineAttachment返回参数结构体
 */
export interface ModifyBPOfflineAttachmentResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRBlock请求参数结构体
 */
export interface CreateCRBlockRequest {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 侵权链接
      */
    TortUrl: string;
    /**
      * 侵权标题
      */
    TortTitle?: string;
    /**
      * 侵权平台
      */
    TortPlat?: string;
    /**
      * 拦截结果回调地址
      */
    BlockUrl?: string;
    /**
      * 授权书下载地址
      */
    FileUrl?: string;
    /**
      * 授权书生效日期
      */
    ValidStartDate?: string;
    /**
      * 授权书截止日期
      */
    ValidEndDate?: string;
    /**
      * 侵权截图
      */
    TortPic?: string;
    /**
      * 委托书下载地址
      */
    CommFileUrl?: string;
    /**
      * 委托书生效日期
      */
    CommValidStartDate?: string;
    /**
      * 委托书截止日期
      */
    CommValidEndDate?: string;
    /**
      * 是否著作权人：0-否 1-是
      */
    IsProducer?: string;
    /**
      * 存证证书下载地址
      */
    EvidenceFileUrl?: string;
    /**
      * 存证证书生效日期
      */
    EvidenceValidStartDate?: string;
    /**
      * 存证证书截止日期
      */
    EvidenceValidEndDate?: string;
}
/**
 * CreateBPFakeURL返回参数结构体
 */
export interface CreateBPFakeURLResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRTort返回参数结构体
 */
export interface CreateCRTortResponse {
    /**
      * 作品ID
      */
    WorkId: number;
    /**
      * 侵权ID
      */
    TortId: number;
    /**
      * 侵权标题
      */
    TortTitle: string;
    /**
      * 侵权平台
      */
    TortPlat: string;
    /**
      * 侵权网址
      */
    TortURL: string;
    /**
      * 侵权域名
      */
    TortDomain: string;
    /**
      * 侵权主体
      */
    TortBodyName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateBPFalseTicket请求参数结构体
 */
export interface CreateBPFalseTicketRequest {
    /**
      * xxx
      */
    FakeURL?: string;
}
/**
 * ModifyCRMonitor返回参数结构体
 */
export interface ModifyCRMonitorResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 权属文件列表
 */
export interface File {
    /**
      * xxx
      */
    FileUrl: string;
    /**
      * xxx
      */
    FileType: number;
    /**
      * xxx
      */
    ValidStartDate: string;
    /**
      * xxx
      */
    ValidEndDate: string;
}
/**
 * DescribeBPProtectURLs请求参数结构体
 */
export interface DescribeBPProtectURLsRequest {
    /**
      * xxx
      */
    PageSize?: number;
    /**
      * xxx
      */
    PageNumber?: number;
}
/**
 * ModifyCRObtainStatus返回参数结构体
 */
export interface ModifyCRObtainStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCRCompanyVerify请求参数结构体
 */
export interface CreateCRCompanyVerifyRequest {
    /**
      * 企业名称
      */
    CompanyName: string;
    /**
      * 企业证件号码
      */
    CompanyID?: string;
    /**
      * 企业法人姓名
      */
    CompanyLegalName?: string;
    /**
      * 联系人姓名
      */
    ManagerName?: string;
    /**
      * 联系人手机号
      */
    ManagerPhone?: string;
    /**
      * 手机验证码，接口接入可以置空
      */
    VerificationCode?: string;
    /**
      * 字段已废弃，企业认证号码类型 1：社会信用代码 2：组织机构代码 3：企业工商注册码 4：其他 默认为1
      */
    CompanyIDType?: string;
    /**
      * 字段已废弃，认证类型
      */
    Type?: string;
}
