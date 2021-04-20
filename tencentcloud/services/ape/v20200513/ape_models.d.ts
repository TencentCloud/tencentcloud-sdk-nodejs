/**
 * DescribeImages请求参数结构体
 */
export interface DescribeImagesRequest {
    /**
      * 页偏移量
      */
    Offset: number;
    /**
      * 页大小
      */
    Limit: number;
    /**
      * 搜索关键字
      */
    Keyword: string;
    /**
      * 构图方式，可选以下值：horizontal、vertical、square，分别代表以下含义：横图、竖图、方图
      */
    Orientation?: string;
    /**
      * 图片类型，可选以下值：照片、插画
      */
    ImageSenseType?: string;
    /**
      * 分层图库id数组，可选以下数值：1(基础)，2(精选)，3(高级)
      */
    LayeredGalleryIds?: Array<number>;
}
/**
 * BatchDescribeOrderCertificate请求参数结构体
 */
export interface BatchDescribeOrderCertificateRequest {
    /**
      * 要下载授权书的订单id
      */
    OrderIds: Array<string>;
}
/**
 * BatchDescribeOrderImage返回参数结构体
 */
export interface BatchDescribeOrderImageResponse {
    /**
      * 图片的下载地址
      */
    ImageUrls?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 图片信息条目
 */
export interface ImageItem {
    /**
      * 图片ID
      */
    ImageId: number;
    /**
      * 图片标题
      */
    Title: string;
    /**
      * 图片描述
      */
    Description: string;
    /**
      * 图片预览链接
      */
    PreviewUrl: string;
    /**
      * 图片缩略图
      */
    ThumbUrl: string;
    /**
      * 图片供应商
      */
    Vendor: string;
    /**
      * 图片关键词
      */
    Keywords: string;
    /**
      * 宽
      */
    Width: number;
    /**
      * 高
      */
    Height: number;
}
/**
 * DescribeImages返回参数结构体
 */
export interface DescribeImagesResponse {
    /**
      * 页偏移量
      */
    Offset: number;
    /**
      * 页大小
      */
    Limit: number;
    /**
      * 总条数
      */
    Total: number;
    /**
      * 是否有下一页
      */
    HaveMore: boolean;
    /**
      * 图片信息数组
      */
    Items: Array<ImageItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 图片基础信息
 */
export interface ImageInfo {
    /**
      * 图片Id
      */
    ImageId: number;
    /**
      * 授权场景Id
      */
    LicenseScopeId?: number;
    /**
      * 尺寸名称Id
      */
    DimensionsNameId?: number;
    /**
      * 平台用户标识
      */
    UserId?: string;
    /**
      * 平台用户下载图片购买的价格(单位:分)
      */
    DownloadPrice?: number;
    /**
      * 下载类型。匹配集合中的任意元素：
<li>Single: 单张购买下载</li>
<li>BasicEnterpriseMember: 企业基础会员下载</li>
<li>AdvancedEnterpriseMember: 企业高级会员下载</li>
<li>DistinguishedEnterpriseMember: 企业尊享会员下载</li>
      */
    DownloadType?: string;
}
/**
 * CreateOrderAndDownloads请求参数结构体
 */
export interface CreateOrderAndDownloadsRequest {
    /**
      * ImageId必填，单张购买，所有必填，会员身份可以省略部分参数
      */
    ImageInfos: Array<ImageInfo>;
}
/**
 * 图片售卖组合信息
 */
export interface ImageMarshal {
    /**
      * 售卖组合唯一标识
      */
    MarshalId: number;
    /**
      * 图片高度
      */
    Height: number;
    /**
      * 图片宽度
      */
    Width: number;
    /**
      * 图片大小
      */
    Size: number;
    /**
      * 图片格式
      */
    Format: string;
    /**
      * 图片价格(单位:分)
      */
    Price: number;
    /**
      * 授权范围
      */
    LicenseScope: string;
    /**
      * 是否支持VIP购买
      */
    IsVip: boolean;
    /**
      * 授权范围id
      */
    LicenseScopeId: number;
    /**
      * 尺寸
      */
    DimensionsName: string;
    /**
      * 尺寸id
      */
    DimensionsNameId: number;
}
/**
 * BatchDescribeOrderCertificate返回参数结构体
 */
export interface BatchDescribeOrderCertificateResponse {
    /**
      * 授权书的下载地址
      */
    CertificateUrls?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeImage返回参数结构体
 */
export interface DescribeImageResponse {
    /**
      * 图片ID
      */
    ImageId: number;
    /**
      * 图片标题
      */
    Title: string;
    /**
      * 图片描述
      */
    Description: string;
    /**
      * 图片预览链接
      */
    PreviewUrl: string;
    /**
      * 图片缩略图
      */
    ThumbUrl: string;
    /**
      * 图片供应商
      */
    Vendor: string;
    /**
      * 图片售卖组合信息
      */
    Marshals: Array<ImageMarshal>;
    /**
      * 宽
      */
    Width: number;
    /**
      * 高
      */
    Height: number;
    /**
      * 图片格式 jpg/eps/psd/...
      */
    ImageFormat: string;
    /**
      * 图片类型 摄影图片、插画、漫画、图表、矢量、psd、全景、gif、模板
      */
    ImageSenseType: string;
    /**
      * 关键词，多关键词用空格分隔
      */
    Keywords: string;
    /**
      * 分层图库id
      */
    LayeredGalleryId: number;
    /**
      * 构图方式：horizontal:横图、vertical:竖图、square:方图
      */
    Orientation: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAuthUsers返回参数结构体
 */
export interface DescribeAuthUsersResponse {
    /**
      * 授权人信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    Users?: Array<AuthInfo>;
    /**
      * 总记录数
      */
    TotalCount?: number;
    /**
      * 是否是老策略用户
      */
    OldUser?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 图片下载信息
 */
export interface DownloadInfo {
    /**
      * 图片基础信息
      */
    ImageInfo: ImageInfo;
    /**
      * 图片原图URL
      */
    ImageUrl: string;
    /**
      * 图片缩略图URL
      */
    ImageThumbUrl: string;
    /**
      * 订单Id
      */
    OrderId: string;
    /**
      * 订单创建时间
      */
    OrderCreateTime: string;
    /**
      * 下载Id
      */
    DownloadId: string;
    /**
      * 下载时间
      */
    DownloadTime: string;
    /**
      * 图片购买类型，单张/会员
      */
    ConsumeType: number;
    /**
      * 是否首次下载
      */
    FirstDownload: boolean;
}
/**
 * 授权人信息
 */
export interface AuthInfo {
    /**
      * 主键
      */
    Id: string;
    /**
      * 授权人名称
      */
    Name: string;
    /**
      * 身份证号/社会信用代码
      */
    Code: string;
    /**
      * 授权人类型
      */
    Type: number;
    /**
      * 创建时间
      */
    CreateTime: string;
}
/**
 * DescribeImage请求参数结构体
 */
export interface DescribeImageRequest {
    /**
      * 图片ID
      */
    ImageId: number;
}
/**
 * DescribeDownloadInfos返回参数结构体
 */
export interface DescribeDownloadInfosResponse {
    /**
      * 核销下载记录
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadInfos: Array<DownloadInfo>;
    /**
      * 总记录数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateOrderAndPay返回参数结构体
 */
export interface CreateOrderAndPayResponse {
    /**
      * 订单ID
      */
    OrderId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAuthUsers请求参数结构体
 */
export interface DescribeAuthUsersRequest {
    /**
      * 分页大小
      */
    Limit: number;
    /**
      * 页偏移量
      */
    Offset: number;
}
/**
 * DescribeDownloadInfos请求参数结构体
 */
export interface DescribeDownloadInfosRequest {
    /**
      * 默认10
      */
    Limit?: number;
    /**
      * 默认0
      */
    Offset?: number;
    /**
      * 开始时间晚于指定时间
      */
    BeginTime?: string;
    /**
      * 结束时间早于指定时间
      */
    EndTime?: string;
    /**
      * 无效值，过滤结果为空
      */
    ImageIds?: Array<number>;
}
/**
 * CreateOrderAndPay请求参数结构体
 */
export interface CreateOrderAndPayRequest {
    /**
      * 图片ID
      */
    ImageId: number;
    /**
      * 授权人ID
      */
    AuthUserId: string;
    /**
      * 售卖组合id
      */
    MarshalId: number;
}
/**
 * CreateOrderAndDownloads返回参数结构体
 */
export interface CreateOrderAndDownloadsResponse {
    /**
      * 成功核销后可以获取图片基本信息和原图地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadInfos: Array<DownloadInfo>;
    /**
      * 可下载图片数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BatchDescribeOrderImage请求参数结构体
 */
export interface BatchDescribeOrderImageRequest {
    /**
      * 要下载图片的订单id
      */
    OrderIds: Array<string>;
}
