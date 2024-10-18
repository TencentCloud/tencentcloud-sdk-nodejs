/**
 * CreateBPFakeAPP返回参数结构体
 */
export interface CreateBPFakeAPPResponse {
    /**
     * FakeAPPId
     */
    FakeAPPId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteBPWhiteList返回参数结构体
 */
export interface DeleteBPWhiteListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBPBrands返回参数结构体
 */
export interface DescribeBPBrandsResponse {
    /**
     * 品牌信息
     */
    Brands?: Array<BrandData>;
    /**
     * 品牌审核通知栏状态：0 不显示 1 显示
     */
    NoticeStatus?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBPBrands请求参数结构体
 */
export declare type DescribeBPBrandsRequest = null;
/**
 * CreateBPBrand请求参数结构体
 */
export interface CreateBPBrandRequest {
    /**
     * 品牌名称
     */
    BrandName: string;
    /**
     * 企业名称
     */
    CompanyName?: string;
    /**
     * 品牌logo
     */
    BrandLogo?: string;
    /**
     * 联系电话
     */
    Phone?: string;
    /**
     * 营业执照
     */
    License?: string;
    /**
     * 授权书
     */
    Authorization?: string;
    /**
     * 商标名称
     */
    TrademarkNames?: Array<string>;
    /**
     * 商标证明
     */
    Trademarks?: Array<string>;
    /**
     * 是否涉及转让: 0-不转让 1-转让
     */
    IsTransfers?: Array<string>;
    /**
     * 转让证明
     */
    Transfers?: Array<string>;
    /**
     * 保护网址
     */
    ProtectURLs?: Array<string>;
    /**
     * 保护应用
     */
    ProtectAPPs?: Array<string>;
    /**
     * 保护公众号
     */
    ProtectOfficialAccounts?: Array<string>;
    /**
     * 保护小程序
     */
    ProtectMiniPrograms?: Array<string>;
    /**
     * 请求来源：0-反钓鱼 2-反假冒
     */
    APISource?: number;
}
/**
 * DescribeBPFakeURLs请求参数结构体
 */
export interface DescribeBPFakeURLsRequest {
    /**
     * 过滤参数
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
 * 仿冒应用数据
 */
export interface FakeAPPData {
    /**
     * 仿冒应用id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FakeAPPId?: number;
    /**
     * 品牌名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrandName?: string;
    /**
     * 仿冒来源：0-系统检测 1-人工举报
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Origin?: number;
    /**
     * 仿冒应用名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FakeAPPName?: string;
    /**
     * 仿冒应用包名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FakeAPPPackageName?: string;
    /**
     * 仿冒应用证书
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FakeAPPCert?: string;
    /**
     * 仿冒应用大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FakeAPPSize?: string;
    /**
     * 热度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Heat?: number;
    /**
     * 协助处置状态：0-未处置 1-处置中 2-处置成功 3-处置失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlockStatus?: number;
    /**
     * 协助处置状态说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlockNote?: string;
    /**
     * 关停状态：0-未关停 1-关停中 2-关停成功 3-关停失败 4-重复上架
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OfflineStatus?: number;
    /**
     * 关停状态说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OfflineNote?: string;
    /**
     * app来源
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadWay?: string;
    /**
     * 新增时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InsertTime?: string;
    /**
     * App下载链接
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DownloadCosURL?: string;
    /**
     * 资质证明状态:0-不可用 1-可用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertificationStatus?: number;
}
/**
 * 白名单数据
 */
export interface WhiteListData {
    /**
     * 白名单id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WhiteListId?: number;
    /**
     * 企业id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompanyId?: number;
    /**
     * 品牌名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrandName?: string;
    /**
     * 资产类型：0-网站 1-app 2-公众号 3-小程序
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AssetsType?: number;
    /**
     * 白名单
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WhiteList?: string;
    /**
     * 白名单备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark?: string;
    /**
     * 新增时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InsertTime?: string;
}
/**
 * 商标响应数据
 */
export interface TrademarkData {
    /**
     * 商标证明
     */
    Trademark?: string;
    /**
     * 商标审核状态
     */
    TrademarkStatus?: number;
    /**
     * 商标审核状态说明
     */
    TrademarkNote?: string;
    /**
     * 商标id
     */
    TrademarkId?: number;
    /**
     * 商标转让书
     */
    Transfer?: string;
    /**
     * 商标转让书审核状态
     */
    TransferStatus?: number;
    /**
     * 商标转让书审核状态说明
     */
    TransferNote?: string;
    /**
     * 商标名称
     */
    TrademarkName?: string;
}
/**
 * DescribeBPFakeURLs返回参数结构体
 */
export interface DescribeBPFakeURLsResponse {
    /**
     * 仿冒网址列表
     */
    FakeURLs?: Array<FakeURLData>;
    /**
     * 仿冒网址总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBPFakeURL请求参数结构体
 */
export interface CreateBPFakeURLRequest {
    /**
     * 企业id
     */
    CompanyId: number;
    /**
     * 仿冒网址
     */
    FakeURL: string;
    /**
     * 仿冒网址截图
     */
    FakeURLSnapshots?: Array<string>;
    /**
     * 备注
     */
    Note?: string;
}
/**
 * CreateBPFakeAPPList返回参数结构体
 */
export interface CreateBPFakeAPPListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBPWhiteLists返回参数结构体
 */
export interface DescribeBPWhiteListsResponse {
    /**
     * 白名单列表
     */
    WhiteLists?: Array<WhiteListData>;
    /**
     * 白名单总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBPFakeAPPList请求参数结构体
 */
export interface CreateBPFakeAPPListRequest {
    /**
     * 批量模板
     */
    FakeAPPs: string;
}
/**
 * 过滤参数
 */
export interface Filter {
    /**
     * 过滤参数键
     */
    Name: string;
    /**
     * 过滤参数值
     */
    Value: string;
}
/**
 * CreateBPWhiteList返回参数结构体
 */
export interface CreateBPWhiteListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 服务响应数据
 */
export interface ServiceData {
    /**
     * 网站保护关联资产数
     */
    ProtectURLCount?: number;
    /**
     * 网站保护服务到期时间
     */
    ProtectURLExpireTime?: string;
    /**
     * 应用保护关联资产数
     */
    ProtectAPPCount?: number;
    /**
     * 应用保护服务到期时间
     */
    ProtectAPPExpireTime?: string;
    /**
     * 公众号保护关联资产数
     */
    ProtectOfficialAccountCount?: number;
    /**
     * 公众号保护服务到期时间
     */
    ProtectOfficialAccountExpireTime?: string;
    /**
     * 小程序保护关联资产数
     */
    ProtectMiniProgramCount?: number;
    /**
     * 小程序保护服务到期时间
     */
    ProtectMiniProgramExpireTime?: string;
    /**
     * 关停下架使用次数
     */
    OfflineCount?: number;
}
/**
 * 仿冒网址数据
 */
export interface FakeURLData {
    /**
     * 仿冒网址id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FakeURLId?: number;
    /**
     * 品牌名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BrandName?: string;
    /**
     * 仿冒来源：0-系统检测 1-人工举报
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Origin?: number;
    /**
     * 仿冒网址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FakeURL?: string;
    /**
     * 仿冒域名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FakeDomain?: string;
    /**
     * 热度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Heat?: number;
    /**
     * 拦截处置状态：0-未处置 1-处置中 2-处置成功 3-处置失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlockStatus?: number;
    /**
     * 拦截处置状态说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlockNote?: string;
    /**
     * 关停状态：0-未关停 1-关停中 2-关停成功 3-关停失败 4-重复上架
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OfflineStatus?: number;
    /**
     * 关停状态说明
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OfflineNote?: string;
    /**
     * ip地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IP?: string;
    /**
     * ip地理位置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IPLocation?: string;
    /**
     * 网站所属单位
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebCompany?: string;
    /**
     * 网站性质
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebAttribute?: string;
    /**
     * 网站名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebName?: string;
    /**
     * 备案号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebICP?: string;
    /**
     * 网站创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebCreateTime?: string;
    /**
     * 网站过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebExpireTime?: string;
    /**
     * 新增时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InsertTime?: string;
    /**
     * 资质证明状态：0-不可用 1-可用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CertificationStatus?: number;
    /**
     * 网址截图
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Snapshot?: string;
    /**
     * 账户资源状态：0-不可用 1-可用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountStatus?: number;
    /**
     * 审核状态：0-未审核 1-审核中 2-审核成功 3-审核失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuditStatus?: number;
    /**
     * 下线时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OfflineTime?: string;
}
/**
 * DeleteBPWhiteList请求参数结构体
 */
export interface DeleteBPWhiteListRequest {
    /**
     * 白名单id
     */
    WhiteListId: number;
}
/**
 * DescribeBPWhiteLists请求参数结构体
 */
export interface DescribeBPWhiteListsRequest {
    /**
     * 过滤参数
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
 * CreateBPFakeURLs返回参数结构体
 */
export interface CreateBPFakeURLsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBPFakeAPPList请求参数结构体
 */
export interface DescribeBPFakeAPPListRequest {
    /**
     * 过滤参数
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
 * CreateBPFakeAPP请求参数结构体
 */
export interface CreateBPFakeAPPRequest {
    /**
     * 企业id
     */
    CompanyId: number;
    /**
     * 仿冒应用名称
     */
    FakeAPPName: string;
    /**
     * 仿冒来源
     */
    APPChan?: string;
    /**
     * 仿冒应用包名
     */
    FakeAPPPackageName?: string;
    /**
     * 仿冒应用证书
     */
    FakeAPPCert?: string;
    /**
     * 仿冒应用大小
     */
    FakeAPPSize?: string;
    /**
     * 仿冒截图
     */
    FakeAPPSnapshots?: Array<string>;
    /**
     * 备注
     */
    Note?: string;
}
/**
 * 品牌响应数据
 */
export interface BrandData {
    /**
     * 品牌Id
     */
    CompanyId?: number;
    /**
     * 企业名称
     */
    CompanyName?: string;
    /**
     * 品牌名称
     */
    BrandName?: string;
    /**
     * 联系电话
     */
    Phone?: string;
    /**
     * 营业执照
     */
    License?: string;
    /**
     * 营业执照审核状态
     */
    LicenseStatus?: number;
    /**
     * 营业执照审核状态说明
     */
    LicenseNote?: string;
    /**
     * 授权书
     */
    Authorization?: string;
    /**
     * 授权书审核状态
     */
    AuthorizationStatus?: number;
    /**
     * 授权书审核状态说明
     */
    AuthorizationNote?: string;
    /**
     * 商标信息
     */
    Trademarks?: Array<TrademarkData>;
    /**
     * 新增时间
     */
    InsertTime?: string;
    /**
     * 服务信息
     */
    Services?: ServiceData;
    /**
     * 账号id
     */
    Uin?: string;
}
/**
 * CreateBPBrand返回参数结构体
 */
export interface CreateBPBrandResponse {
    /**
     * 企业id
     */
    CompanyId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBPFakeURL返回参数结构体
 */
export interface CreateBPFakeURLResponse {
    /**
     * FakeURLId
     */
    FakeURLId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateBPWhiteList请求参数结构体
 */
export interface CreateBPWhiteListRequest {
    /**
     * 企业Id
     */
    CompanyId: number;
    /**
     * 白名单类型：0-网站 1-应用 2-公众号 3-小程
     */
    WhiteListType: number;
    /**
     * 白名单名称
     */
    WhiteLists: Array<string>;
    /**
     * 白名单备注
     */
    Remark?: string;
}
/**
 * CreateBPFakeURLs请求参数结构体
 */
export interface CreateBPFakeURLsRequest {
    /**
     * 批量模板
     */
    FakeURLs: string;
}
/**
 * DescribeBPFakeAPPList返回参数结构体
 */
export interface DescribeBPFakeAPPListResponse {
    /**
     * 仿冒应用列表
     */
    FakeAPPList?: Array<FakeAPPData>;
    /**
     * 仿冒应用总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
