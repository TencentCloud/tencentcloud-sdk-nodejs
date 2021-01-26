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
}
/**
 * DescribeImages返回参数结构体
 */
export interface DescribeImagesResponse {
    /**
      * 页偏移量
      */
    Offset?: number;
    /**
      * 页大小
      */
    Limit?: number;
    /**
      * 总条数
      */
    Total?: number;
    /**
      * 是否有下一页
      */
    HaveMore?: boolean;
    /**
      * 图片信息数组
      */
    Items?: Array<ImageItem>;
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
    ImageId?: number;
    /**
      * 图片标题
      */
    Title?: string;
    /**
      * 图片描述
      */
    Description?: string;
    /**
      * 图片预览链接
      */
    PreviewUrl?: string;
    /**
      * 图片缩略图
      */
    ThumbUrl?: string;
    /**
      * 图片供应商
      */
    Vendor?: string;
    /**
      * 图片售卖组合信息
      */
    Marshals?: Array<ImageMarshal>;
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
 * BatchDescribeOrderImage请求参数结构体
 */
export interface BatchDescribeOrderImageRequest {
    /**
      * 要下载图片的订单id
      */
    OrderIds: Array<string>;
}
