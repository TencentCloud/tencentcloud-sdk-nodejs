/**
 * VerifyBizLicense请求参数结构体
 */
export interface VerifyBizLicenseRequest {
    /**
        * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必选一个输入。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必选一个输入。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageUrl?: string;
    /**
        * 用于入参是营业执照图片的场景，表示需要校验的参数：RegNum（注册号或者统一社会信用代码），Name（企业名称），Address（经营地址）。选择后会返回相关参数校验结果。RegNum为必选，Name和Address可选。
  格式为{RegNum: true, Name:true/false, Address:true/false}
  
  设置方式参考：
  Config = Json.stringify({"Name":true,"Address":true})
  API 3.0 Explorer 设置方式参考：
  Config = {"Name":true,"Address":true}
        */
    ImageConfig?: string;
    /**
     * 用于入参是文本的场景，RegNum表示注册号或者统一社会信用代码。RegNum为必选项。
     */
    RegNum?: string;
    /**
     * 用于入参是文本的场景，Name表示企业名称。Name为可选项，填写后会返回Name的校验结果。
     */
    Name?: string;
    /**
     * 用于入参是文本的场景，Address表示经营地址，填写后会返回Name的校验结果。
     */
    Address?: string;
}
/**
 * BusinessCardOCR返回参数结构体
 */
export interface BusinessCardOCRResponse {
    /**
     * 名片识别结果，具体内容请点击左侧链接。
     */
    BusinessCardInfos?: Array<BusinessCardInfo>;
    /**
     * 返回图像预处理后的图片，图像预处理未开启时返回内容为空。
     */
    RetImageBase64?: string;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
     */
    Angle?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 算式识别结果
 */
export interface TextArithmetic {
    /**
     * 识别出的文本行内容
     */
    DetectedText: string;
    /**
     * 算式运算结果
     */
    Result: boolean;
    /**
     * 保留字段，暂不支持
     */
    Confidence: number;
    /**
        * 原图文本行坐标，以四个顶点坐标表示（保留字段，暂不支持）
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Polygon: Array<Coord>;
    /**
     * 保留字段，暂不支持
     */
    AdvancedInfo: string;
    /**
     * 文本行旋转纠正之后在图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
     */
    ItemCoord: ItemCoord;
    /**
        * 算式题型编号：
  ‘1’: 加减乘除四则
  ‘2’: 加减乘除已知结果求运算因子
  ‘3’: 判断大小
  ‘4’: 约等于估算
  ‘5’: 带余数除法
  ‘6’: 分数四则运算
  ‘7’: 单位换算
  ‘8’: 竖式加减法
  ‘9’: 竖式乘除法
  ‘10’: 脱式计算
  ‘11’: 解方程
        */
    ExpressionType: string;
}
/**
 * HKIDCardOCR请求参数结构体
 */
export interface HKIDCardOCRRequest {
    /**
     * 是否鉴伪。
     */
    DetectFake: boolean;
    /**
     * 是否返回人像照片。
     */
    ReturnHeadImage: boolean;
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * CarInvoiceOCR请求参数结构体
 */
export interface CarInvoiceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * 混贴票据单张发票识别信息
 */
export interface MixedInvoiceItem {
    /**
        * 识别结果。
  OK：表示识别成功；FailedOperation.UnsupportedInvioce：表示不支持识别；
  FailedOperation.UnKnowError：表示识别失败；
  其它错误码见各个票据接口的定义。
        */
    Code: string;
    /**
        * 识别出的图片所属的票据类型。
  -1：未知类型
  0：出租车发票
  1：定额发票
  2：火车票
  3：增值税发票
  5：机票行程单
  8：通用机打发票
  9：汽车票
  10：轮船票
  11：增值税发票（卷票 ）
  12：购车发票
  13：过路过桥费发票
        */
    Type: number;
    /**
     * 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。
     */
    Rect: Rect;
    /**
     * 识别出的图片在混贴票据图片中的旋转角度。
     */
    Angle: number;
    /**
     * 识别到的内容。
     */
    SingleInvoiceInfos: Array<SingleInvoiceInfo>;
}
/**
 * TrainTicketOCR请求参数结构体
 */
export interface TrainTicketOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * EstateCertOCR返回参数结构体
 */
export interface EstateCertOCRResponse {
    /**
     * 权利人
     */
    Obligee?: string;
    /**
     * 共有情况
     */
    Ownership?: string;
    /**
     * 坐落
     */
    Location?: string;
    /**
     * 不动产单元号
     */
    Unit?: string;
    /**
     * 权利类型
     */
    Type?: string;
    /**
     * 权利性质
     */
    Property?: string;
    /**
     * 用途
     */
    Usage?: string;
    /**
     * 面积
     */
    Area?: string;
    /**
     * 使用期限
     */
    Term?: string;
    /**
     * 权利其他状况，多行会用换行符\n连接。
     */
    Other?: string;
    /**
     * 图片旋转角度
     */
    Angle?: number;
    /**
     * 不动产权号
     */
    Number?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FlightInvoiceOCR请求参数结构体
 */
export interface FlightInvoiceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * MLIDPassportOCR请求参数结构体
 */
export interface MLIDPassportOCRRequest {
    /**
     * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
     */
    ImageBase64: string;
    /**
     * 是否返回图片，默认false
     */
    RetImage?: boolean;
}
/**
 * TextDetect返回参数结构体
 */
export interface TextDetectResponse {
    /**
     * 图片中是否包含文字。
     */
    HasText?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VerifyBizLicense返回参数结构体
 */
export interface VerifyBizLicenseResponse {
    /**
     * 状态码
     */
    ErrorCode?: number;
    /**
     * 统一社会信用代码
     */
    CreditCode?: string;
    /**
     * 组织机构代码
     */
    OrgCode?: string;
    /**
     * 经营期限自（YYYY-MM-DD）
     */
    OpenFrom?: string;
    /**
     * 经营期限至（YYYY-MM-DD）
     */
    OpenTo?: string;
    /**
     * 法人姓名
     */
    FrName?: string;
    /**
     * 经营状态（在营、注销、吊销、其他）
     */
    EnterpriseStatus?: string;
    /**
     * 经营（业务）范围及方式
     */
    OperateScopeAndForm?: string;
    /**
     * 注册资金（单位:万元）
     */
    RegCap?: string;
    /**
     * 注册币种
     */
    RegCapCur?: string;
    /**
     * 登记机关
     */
    RegOrg?: string;
    /**
     * 开业日期（YYYY-MM-DD）
     */
    EsDate?: string;
    /**
     * 企业（机构）类型
     */
    EnterpriseType?: string;
    /**
     * 注销日期
     */
    CancelDate?: string;
    /**
     * 吊销日期
     */
    RevokeDate?: string;
    /**
     * 许可经营项目
     */
    AbuItem?: string;
    /**
     * 一般经营项目
     */
    CbuItem?: string;
    /**
     * 核准时间
     */
    ApprDate?: string;
    /**
     * 省
     */
    Province?: string;
    /**
     * 地级市
     */
    City?: string;
    /**
     * 区\县
     */
    County?: string;
    /**
     * 住所所在行政区划代码
     */
    AreaCode?: string;
    /**
     * 行业门类代码
     */
    IndustryPhyCode?: string;
    /**
     * 行业门类名称
     */
    IndustryPhyName?: string;
    /**
     * 国民经济行业代码
     */
    IndustryCode?: string;
    /**
     * 国民经济行业名称
     */
    IndustryName?: string;
    /**
     * 经营（业务）范围
     */
    OperateScope?: string;
    /**
     * 要核验的工商注册号
     */
    VerifyRegNo?: string;
    /**
     * 工商注册号
     */
    RegNo?: string;
    /**
     * 要核验的企业名称
     */
    VerifyEnterpriseName?: string;
    /**
     * 企业名称
     */
    EnterpriseName?: string;
    /**
     * 要核验的注册地址
     */
    VerifyAddress?: string;
    /**
     * 注册地址
     */
    Address?: string;
    /**
     * 验证结果
     */
    RegNumResult?: BizLicenseVerifyResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FinanBillSliceOCR返回参数结构体
 */
export interface FinanBillSliceOCRResponse {
    /**
     * 金融票据切片识别结果，具体内容请点击左侧链接。
     */
    FinanBillSliceInfos?: Array<FinanBillSliceInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DriverLicenseOCR返回参数结构体
 */
export interface DriverLicenseOCRResponse {
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 性别
     */
    Sex?: string;
    /**
     * 国籍
     */
    Nationality?: string;
    /**
     * 住址
     */
    Address?: string;
    /**
     * 出生日期
     */
    DateOfBirth?: string;
    /**
     * 初次领证日期
     */
    DateOfFirstIssue?: string;
    /**
     * 准驾车型
     */
    Class?: string;
    /**
     * 有效期开始时间
     */
    StartDate?: string;
    /**
     * 有效期截止时间
     */
    EndDate?: string;
    /**
     * 证号
     */
    CardCode?: string;
    /**
     * 档案编号
     */
    ArchivesCode?: string;
    /**
     * 记录
     */
    Record?: string;
    /**
        * Code 告警码列表和释义：
  -9102  复印件告警
  -9103  翻拍件告警
  -9106  ps告警
  注：告警码可以同时存在多个
        */
    RecognizeWarnCode?: Array<number>;
    /**
        * 告警码说明：
  WARN_DRIVER_LICENSE_COPY_CARD 复印件告警
  WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警
  WARN_DRIVER_LICENSE_PS_CARD ps告警
  注：告警信息可以同时存在多个
        */
    RecognizeWarnMsg?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 识别出来的单词信息包括单词（包括单词Character和单词置信度confidence）
 */
export interface Words {
    /**
     * 置信度 0 ~100
     */
    Confidence: number;
    /**
     * 候选字Character
     */
    Character: string;
}
/**
 * 英文识别结果
 */
export interface TextDetectionEn {
    /**
     * 识别出的文本行内容。
     */
    DetectedText: string;
    /**
     * 置信度 0 ~100。
     */
    Confidence: number;
    /**
        * 文本行坐标，以四个顶点坐标表示。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Polygon: Array<Coord>;
    /**
     * 此字段为扩展字段。目前EnglishOCR接口返回内容为空。
     */
    AdvancedInfo: string;
    /**
     * 单词在原图中的四点坐标。
     */
    WordCoordPoint: Array<WordCoordPoint>;
    /**
     * 候选字符集(包含候选字Character以及置信度Confidence)。
     */
    CandWord: Array<CandWord>;
    /**
     * 识别出来的单词信息（包括单词Character和单词置信度confidence）
     */
    Words: Array<Words>;
}
/**
 * PermitOCR返回参数结构体
 */
export interface PermitOCRResponse {
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 英文姓名
     */
    EnglishName?: string;
    /**
     * 证件号
     */
    Number?: string;
    /**
     * 性别
     */
    Sex?: string;
    /**
     * 有效期限
     */
    ValidDate?: string;
    /**
     * 签发机关
     */
    IssueAuthority?: string;
    /**
     * 签发地点
     */
    IssueAddress?: string;
    /**
     * 出生日期
     */
    Birthday?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InvoiceGeneralOCR请求参数结构体
 */
export interface InvoiceGeneralOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * 矩形坐标
 */
export interface Rect {
    /**
     * 左上角x
     */
    X: number;
    /**
     * 左上角y
     */
    Y: number;
    /**
     * 宽度
     */
    Width: number;
    /**
     * 高度
     */
    Height: number;
}
/**
 * WaybillOCR返回参数结构体
 */
export interface WaybillOCRResponse {
    /**
     * 检测到的文本信息，具体内容请点击左侧链接。
     */
    TextDetections?: TextWaybill;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 混贴票据中单张发票的内容
 */
export interface SingleInvoiceInfo {
    /**
     * 识别出的字段名称
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
     */
    Value: string;
}
/**
 * 数学公式识别结果
 */
export interface TextFormula {
    /**
     * 识别出的文本行内容
     */
    DetectedText: string;
}
/**
 * MLIDCardOCR请求参数结构体
 */
export interface MLIDCardOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。( 中国地区之外不支持这个字段 )
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
     * 是否返回图片，默认false
     */
    RetImage?: boolean;
}
/**
 * 增值税发票项目明细
 */
export interface VatInvoiceItem {
    /**
     * 行号
     */
    LineNo: string;
    /**
     * 名称
     */
    Name: string;
    /**
     * 规格
     */
    Spec: string;
    /**
     * 单位
     */
    Unit: string;
    /**
     * 数量
     */
    Quantity: string;
    /**
     * 单价
     */
    UnitPrice: string;
    /**
     * 不含税金额
     */
    AmountWithoutTax: string;
    /**
     * 税率
     */
    TaxRate: string;
    /**
     * 税额
     */
    TaxAmount: string;
}
/**
 * 机动车登记证书识别结果
 */
export interface VehicleRegCertInfo {
    /**
     * 识别出的字段名称
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
     */
    Value: string;
}
/**
 * VehicleLicenseOCR请求参数结构体
 */
export interface VehicleLicenseOCRRequest {
    /**
        * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
  建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
        */
    ImageUrl?: string;
    /**
        * FRONT 为行驶证主页正面（有红色印章的一面），
  BACK 为行驶证副页正面（有号码号牌的一面）。
        */
    CardSide?: string;
}
/**
 * EnterpriseLicenseOCR返回参数结构体
 */
export interface EnterpriseLicenseOCRResponse {
    /**
     * 企业证照识别结果，具体内容请点击左侧链接。
     */
    EnterpriseLicenseInfos?: Array<EnterpriseLicenseInfo>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
     */
    Angle?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 通用机打发票信息
 */
export interface InvoiceGeneralInfo {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
    /**
     * 文本行在旋转纠正之后的图像中的像素坐标。
     */
    Rect: Rect;
}
/**
 * 英文OCR识别出的单词在原图中的四点坐标数组
 */
export interface WordCoordPoint {
    /**
     * 英文OCR识别出的每个单词在原图中的四点坐标。
     */
    WordCoordinate: Array<Coord>;
}
/**
 * InstitutionOCR返回参数结构体
 */
export interface InstitutionOCRResponse {
    /**
     * 注册号
     */
    RegId?: string;
    /**
     * 有效期
     */
    ValidDate?: string;
    /**
     * 住所
     */
    Location?: string;
    /**
     * 名称
     */
    Name?: string;
    /**
     * 法定代表人
     */
    LegalPerson?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DriverLicenseOCR请求参数结构体
 */
export interface DriverLicenseOCRRequest {
    /**
        * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
  建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
        */
    ImageUrl?: string;
    /**
        * FRONT 为驾驶证主页正面（有红色印章的一面），
  BACK 为驾驶证副页正面（有档案编号的一面）。
        */
    CardSide?: string;
}
/**
 * 验真接口
 */
export interface BizLicenseVerifyResult {
    /**
        * “0“：一致
  “-1”：此号未查询到结果
        */
    RegNum: string;
    /**
        * “0“：一致
  “-1”：不一致
  “”：不验真
        */
    Name: string;
    /**
        * “0“：一致
  “-1”：不一致
  “”：不验真
        */
    Address: string;
}
/**
 * 文字识别结果
 */
export interface TextDetection {
    /**
     * 识别出的文本行内容
     */
    DetectedText: string;
    /**
     * 置信度 0 ~100
     */
    Confidence: number;
    /**
        * 文本行坐标，以四个顶点坐标表示
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Polygon: Array<Coord>;
    /**
        * 此字段为扩展字段。
  GeneralBasicOcr接口返回段落信息Parag，包含ParagNo。
        */
    AdvancedInfo: string;
    /**
     * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
     */
    ItemPolygon: ItemCoord;
}
/**
 * 数学试题识别结果
 */
export interface TextEduPaper {
    /**
     * 识别出的字段名称（关键字）
     */
    Item: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Item对应的字符串结果
     */
    DetectedText: string;
    /**
     * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
     */
    Itemcoord: ItemCoord;
}
/**
 * QrcodeOCR返回参数结构体
 */
export interface QrcodeOCRResponse {
    /**
     * 二维码/条形码识别结果信息，具体内容请点击左侧链接。
     */
    CodeResults?: Array<QrcodeResultsInfo>;
    /**
     * 图片大小，具体内容请点击左侧链接。
     */
    ImgSize?: QrcodeImgSize;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 运单识别对象
 */
export interface WaybillObj {
    /**
     * 识别出的文本行内容
     */
    Text: string;
}
/**
 * 票据检测结果
 */
export interface InvoiceDetectInfo {
    /**
     * 识别出的图片在混贴票据图片中的旋转角度。
     */
    Angle: number;
    /**
        * 识别出的图片所属的票据类型。
  -1：未知类型
  0：出租车发票
  1：定额发票
  2：火车票
  3：增值税发票
  4：客运限额发票
  5：机票行程单
  6：酒店账单
  7：完税证明
  8：通用机打发票
  9：汽车票
  10：轮船票
  11：增值税发票（卷票 ）
  12：购车发票
  13：过路过桥费发票
  14：购物小票
        */
    Type: number;
    /**
     * 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。
     */
    Rect: Rect;
    /**
        * 入参 ReturnImage 为 True 时返回 Base64 编码后的图片。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Image: string;
}
/**
 * MainlandPermitOCR请求参数结构体
 */
export interface MainlandPermitOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
     * 是否返回头像。默认不返回。
     */
    RetProfile?: boolean;
}
/**
 * EnterpriseLicenseOCR请求参数结构体
 */
export interface EnterpriseLicenseOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * BankCardOCR请求参数结构体
 */
export interface BankCardOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * PropOwnerCertOCR返回参数结构体
 */
export interface PropOwnerCertOCRResponse {
    /**
     * 房地产权利人
     */
    Owner?: string;
    /**
     * 共有情况
     */
    Possession?: string;
    /**
     * 登记时间
     */
    RegisterTime?: string;
    /**
     * 规划用途
     */
    Purpose?: string;
    /**
     * 房屋性质
     */
    Nature?: string;
    /**
     * 房地坐落
     */
    Location?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 金融票据整单识别单个字段的内容
 */
export interface FinanBillInfo {
    /**
     * 识别出的字段名称。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
}
/**
 * TrainTicketOCR返回参数结构体
 */
export interface TrainTicketOCRResponse {
    /**
     * 编号
     */
    TicketNum?: string;
    /**
     * 出发站
     */
    StartStation?: string;
    /**
     * 到达站
     */
    DestinationStation?: string;
    /**
     * 出发时间
     */
    Date?: string;
    /**
     * 车次
     */
    TrainNum?: string;
    /**
     * 座位号
     */
    Seat?: string;
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 票价
     */
    Price?: string;
    /**
     * 席别
     */
    SeatCategory?: string;
    /**
     * 身份证号
     */
    ID?: string;
    /**
     * 发票消费类型
     */
    InvoiceType?: string;
    /**
     * 序列号
     */
    SerialNumber?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 过路过桥费字段信息
 */
export interface TollInvoiceInfo {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
    /**
     * 文本行在旋转纠正之后的图像中的像素坐标。
     */
    Rect: Rect;
}
/**
 * ArithmeticOCR返回参数结构体
 */
export interface ArithmeticOCRResponse {
    /**
     * 检测到的文本信息，具体内容请点击左侧链接。
     */
    TextDetections?: Array<TextArithmetic>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * FormulaOCR返回参数结构体
 */
export interface FormulaOCRResponse {
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负
     */
    Angle?: number;
    /**
     * 检测到的文本信息，具体内容请点击左侧链接。
     */
    FormulaInfos?: Array<TextFormula>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 汽车票字段信息
 */
export interface BusInvoiceInfo {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
    /**
     * 文本行在旋转纠正之后的图像中的像素坐标。
     */
    Rect: Rect;
}
/**
 * 增值税发票识别结果
 */
export interface TextVatInvoice {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
    /**
        * 字段在原图中的中的四点坐标。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Polygon: Polygon;
}
/**
 * GeneralHandwritingOCR请求参数结构体
 */
export interface GeneralHandwritingOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
        * 场景字段，默认不用填写。
  可选值:only_hw  表示只输出手写体识别结果，过滤印刷体。
        */
    Scene?: string;
    /**
     * 是否开启单字的四点定位坐标输出，默认值为false。
     */
    EnableWordPolygon?: boolean;
}
/**
 * BizLicenseOCR请求参数结构体
 */
export interface BizLicenseOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * MixedInvoiceDetect返回参数结构体
 */
export interface MixedInvoiceDetectResponse {
    /**
     * 检测出的票据类型列表，具体内容请点击左侧链接。
     */
    InvoiceDetectInfos?: Array<InvoiceDetectInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InsuranceBillOCR返回参数结构体
 */
export interface InsuranceBillOCRResponse {
    /**
     * 保险单据识别结果，具体内容请点击左侧链接。
     */
    InsuranceBillInfos?: Array<InsuranceBillInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GeneralEfficientOCR返回参数结构体
 */
export interface GeneralEfficientOCRResponse {
    /**
     * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
     */
    TextDetections?: Array<TextDetection>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
     */
    Angel?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * HmtResidentPermitOCR请求参数结构体
 */
export interface HmtResidentPermitOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
        * FRONT：有照片的一面（人像面），
  BACK：无照片的一面（国徽面），
  该参数如果不填或填错，将为您自动判断正反面。
        */
    CardSide?: string;
}
/**
 * QrcodeOCR请求参数结构体
 */
export interface QrcodeOCRRequest {
    /**
        * 图片的 Base64 值。要求图片经Base64编码后不超过 3M，支持PNG、JPG、JPEG格式。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。要求图片经Base64编码后不超过 3M，支持PNG、JPG、JPEG格式。
  建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
        */
    ImageUrl?: string;
}
/**
 * TaxiInvoiceOCR返回参数结构体
 */
export interface TaxiInvoiceOCRResponse {
    /**
     * 发票代码
     */
    InvoiceNum?: string;
    /**
     * 发票号码
     */
    InvoiceCode?: string;
    /**
     * 日期
     */
    Date?: string;
    /**
     * 金额
     */
    Fare?: string;
    /**
     * 上车时间
     */
    GetOnTime?: string;
    /**
     * 下车时间
     */
    GetOffTime?: string;
    /**
     * 里程
     */
    Distance?: string;
    /**
     * 发票所在地
     */
    Location?: string;
    /**
     * 车牌号
     */
    PlateNumber?: string;
    /**
     * 发票消费类型
     */
    InvoiceType?: string;
    /**
        * 省
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Province?: string;
    /**
        * 市
  注意：此字段可能返回 null，表示取不到有效值。
        */
    City?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GeneralBasicOCR返回参数结构体
 */
export interface GeneralBasicOCRResponse {
    /**
     * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
     */
    TextDetections?: Array<TextDetection>;
    /**
     * 检测到的语言类型，目前支持的语言类型参考入参LanguageType说明。
     */
    Language?: string;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看<a href="https://cloud.tencent.com/document/product/866/45139">如何纠正倾斜文本</a>
     */
    Angel?: number;
    /**
     * 图片为PDF时，返回PDF的总页数，默认为0
     */
    PdfPageSize?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RecognizeThaiIDCardOCR返回参数结构体
 */
export interface RecognizeThaiIDCardOCRResponse {
    /**
     * 身份证号码
     */
    ID?: string;
    /**
     * 泰文姓名
     */
    ThaiName?: string;
    /**
     * 英文姓名
     */
    EnFirstName?: string;
    /**
     * 地址
     */
    Address?: string;
    /**
     * 出生日期
     */
    Birthday?: string;
    /**
     * 首次领用日期
     */
    IssueDate?: string;
    /**
     * 签发日期
     */
    ExpirationDate?: string;
    /**
     * 英文姓名
     */
    EnLastName?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QuotaInvoiceOCR请求参数结构体
 */
export interface QuotaInvoiceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * MixedInvoiceOCR返回参数结构体
 */
export interface MixedInvoiceOCRResponse {
    /**
     * 混贴票据识别结果，具体内容请点击左侧链接。
     */
    MixedInvoiceItems?: Array<MixedInvoiceItem>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ClassifyDetectOCR返回参数结构体
 */
export interface ClassifyDetectOCRResponse {
    /**
     * 智能卡证分类结果。当图片类型不支持分类识别或者识别出的类型不在请求参数DiscernType指定的范围内时，返回结果中的Type字段将为空字符串，Name字段将返回"其它"
     */
    ClassifyDetectInfos?: Array<ClassifyDetectInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VehicleLicenseOCR返回参数结构体
 */
export interface VehicleLicenseOCRResponse {
    /**
        * 行驶证主页正面的识别结果，CardSide 为 FRONT。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FrontInfo?: TextVehicleFront;
    /**
        * 行驶证副页正面的识别结果，CardSide 为 BACK。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    BackInfo?: TextVehicleBack;
    /**
        * Code 告警码列表和释义：
  -9102 复印件告警
  -9103 翻拍件告警
  -9106 ps告警
  注：告警码可以同时存在多个
        */
    RecognizeWarnCode?: Array<number>;
    /**
        * 告警码说明：
  WARN_DRIVER_LICENSE_COPY_CARD 复印件告警
  WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警
  WARN_DRIVER_LICENSE_PS_CARD ps告警
  注：告警信息可以同时存在多个
        */
    RecognizeWarnMsg?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VatInvoiceOCR请求参数结构体
 */
export interface VatInvoiceOCRRequest {
    /**
        * 图片/PDF的 Base64 值。
  支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
  支持的图片/PDF大小：所下载文件经Base64编码后不超过 3M。文件下载时间不超过 3 秒。
  输入参数 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片/PDF的 Url 地址。
  支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。
  支持的图片/PDF大小：所下载文件经 Base64 编码后不超过 3M。文件下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
     * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
     */
    IsPdf?: boolean;
    /**
     * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
     */
    PdfPageNumber?: number;
}
/**
 * IDCardOCR返回参数结构体
 */
export interface IDCardOCRResponse {
    /**
     * 姓名（人像面）
     */
    Name?: string;
    /**
     * 性别（人像面）
     */
    Sex?: string;
    /**
     * 民族（人像面）
     */
    Nation?: string;
    /**
     * 出生日期（人像面）
     */
    Birth?: string;
    /**
     * 地址（人像面）
     */
    Address?: string;
    /**
     * 身份证号（人像面）
     */
    IdNum?: string;
    /**
     * 发证机关（国徽面）
     */
    Authority?: string;
    /**
     * 证件有效期（国徽面）
     */
    ValidDate?: string;
    /**
        * 扩展信息，不请求则不返回，具体输入参考示例3和示例4。
  IdCard，裁剪后身份证照片的base64编码，请求 Config.CropIdCard 时返回；
  Portrait，身份证头像照片的base64编码，请求 Config.CropPortrait 时返回；
  
  Quality，图片质量分数，请求 Config.Quality 时返回（取值范围：0~100，分数越低越模糊，建议阈值≥50）;
  BorderCodeValue，身份证边框不完整告警阈值分数，请求 Config.BorderCheckWarn时返回（取值范围：0~100，分数越低边框遮挡可能性越低，建议阈值≥50）;
  
  WarnInfos，告警信息，Code 告警码列表和释义：
  -9100	身份证有效日期不合法告警，
  -9101	身份证边框不完整告警，
  -9102	身份证复印件告警，
  -9103	身份证翻拍告警，
  -9105	身份证框内遮挡告警，
  -9104	临时身份证告警，
  -9106	身份证 PS 告警，
  -9107       身份证反光告警。
        */
    AdvancedInfo?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ClassifyDetectOCR请求参数结构体
 */
export interface ClassifyDetectOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
        * 可以指定要识别的票证类型,指定后不出现在此列表的票证将不返回类型。不指定时默认返回所有支持类别票证的识别信息。
  
  以下是当前支持的类型：
  IDCardFront: 身份证正面识别
  IDCardBack: 身份证背面识别
  Passport: 护照
  BusinessCard: 名片识别
  BankCard: 银行卡识别
  VehicleLicenseFront: 行驶证主页识别
  VehicleLicenseBack: 行驶证副页识别
  DriverLicenseFront: 驾驶证主页识别
  DriverLicenseBack: 驾驶证副页识别
  PermitFront: 港澳台通行证正面
  ResidenceBooklet: 户口本资料页
  MainlandPermitFront: 港澳台来往内地通行证正面
  HmtResidentPermitFront: 港澳台居住证正面
  HmtResidentPermitBack: 港澳台居住证背面
  EstateCert: 不动产证
  BizLicense: 营业执照
        */
    DiscernType?: Array<string>;
}
/**
 * DutyPaidProofOCR返回参数结构体
 */
export interface DutyPaidProofOCRResponse {
    /**
     * 完税证明识别结果，具体内容请点击左侧链接。
     */
    DutyPaidProofInfos?: Array<DutyPaidProofInfo>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
     */
    Angle?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TollInvoiceOCR请求参数结构体
 */
export interface TollInvoiceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * LicensePlateOCR返回参数结构体
 */
export interface LicensePlateOCRResponse {
    /**
     * 识别出的车牌号码。
     */
    Number?: string;
    /**
     * 置信度，0 - 100 之间。
     */
    Confidence?: number;
    /**
     * 文本行在原图片中的像素坐标框。
     */
    Rect?: Rect;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * HKIDCardOCR返回参数结构体
 */
export interface HKIDCardOCRResponse {
    /**
     * 中文姓名
     */
    CnName?: string;
    /**
     * 英文姓名
     */
    EnName?: string;
    /**
     * 中文姓名对应电码
     */
    TelexCode?: string;
    /**
     * 性别 ：“男M”或“女F”
     */
    Sex?: string;
    /**
     * 出生日期
     */
    Birthday?: string;
    /**
        * 永久性居民身份证。
  0：非永久；
  1：永久；
  -1：未知。
        */
    Permanent?: number;
    /**
     * 身份证号码
     */
    IdNum?: string;
    /**
     * 证件符号，出生日期下的符号，例如"***AZ"
     */
    Symbol?: string;
    /**
     * 首次签发日期
     */
    FirstIssueDate?: string;
    /**
     * 最近领用日期
     */
    CurrentIssueDate?: string;
    /**
        * 真假判断。
  0：无法判断（图像模糊、不完整、反光、过暗等导致无法判断）；
  1：假；
  2：真。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FakeDetectResult?: number;
    /**
        * 人像照片Base64后的结果
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HeadImage?: string;
    /**
        * 多重告警码，当身份证是翻拍、复印、PS件时返回对应告警码。
  -9102：证照复印件告警
  -9103：证照翻拍告警
  -9104：证照PS告警
  -9105：证照防伪告警
        */
    WarningCode?: Array<number>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PermitOCR请求参数结构体
 */
export interface PermitOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * InvoiceGeneralOCR返回参数结构体
 */
export interface InvoiceGeneralOCRResponse {
    /**
     * 通用机打发票识别结果，具体内容请点击左侧链接。
     */
    InvoiceGeneralInfos?: Array<InvoiceGeneralInfo>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
     */
    Angle?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TaxiInvoiceOCR请求参数结构体
 */
export interface TaxiInvoiceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * PropOwnerCertOCR请求参数结构体
 */
export interface PropOwnerCertOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * TextDetect请求参数结构体
 */
export interface TextDetectRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * VatRollInvoiceOCR返回参数结构体
 */
export interface VatRollInvoiceOCRResponse {
    /**
     * 增值税发票（卷票）识别结果，具体内容请点击左侧链接。
     */
    VatRollInvoiceInfos?: Array<VatRollInvoiceInfo>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
     */
    Angle?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VatInvoiceVerify请求参数结构体
 */
export interface VatInvoiceVerifyRequest {
    /**
     * 发票代码， 一张发票一天只能查询5次。
     */
    InvoiceCode: string;
    /**
     * 发票号码（8位）。
     */
    InvoiceNo: string;
    /**
     * 开票日期（不支持当天发票查询，只支持一年以内），如：2019-12-20。
     */
    InvoiceDate: string;
    /**
        * 金额/发票校验码后6位（根据票种传递对应值，如果报参数错误，请仔细检查每个票种对应的值）
  增值税专用发票：开具金额（不含税）
  增值税普通发票、增值税电子普通发票（含通行费发票）、增值税普通发票（卷票）：校验码后6位
  机动车销售统一发票：不含税价
  货物运输业增值税专用发票：合计金额
  二手车销售统一发票：车价合计
        */
    Additional: string;
}
/**
 * EduPaperOCR返回参数结构体
 */
export interface EduPaperOCRResponse {
    /**
     * 检测到的文本信息，具体内容请点击左侧链接。
     */
    EduPaperInfos?: Array<TextEduPaper>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。
     */
    Angle?: number;
    /**
     * 结构化方式输出，具体内容请点击左侧链接。
     */
    QuestionBlockInfos?: Array<QuestionBlockObj>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RecognizeThaiIDCardOCR请求参数结构体
 */
export interface RecognizeThaiIDCardOCRRequest {
    /**
        * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
        */
    ImageUrl?: string;
}
/**
 * 名片识别结果
 */
export interface BusinessCardInfo {
    /**
        * 识别出的字段名称（关键字，可能重复，比如多个手机），能识别的字段名为：
  姓名、英文姓名、英文地址、公司、英文公司、职位、英文职位、部门、英文部门、手机、电话、传真、社交帐号、QQ、MSN、微信、微博、邮箱、邮编、网址、公司账号、其他。
        */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
     */
    Value: string;
    /**
     * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
     */
    ItemCoord: ItemCoord;
}
/**
 * 文字识别结果
 */
export interface TextGeneralHandwriting {
    /**
     * 识别出的文本行内容
     */
    DetectedText: string;
    /**
     * 置信度 0 - 100
     */
    Confidence: number;
    /**
     * 文本行坐标，以四个顶点坐标表示
     */
    Polygon: Array<Coord>;
    /**
        * 此字段为扩展字段。
  能返回文本行的段落信息，例如：{\"Parag\":{\"ParagNo\":2}}，
  其中ParagNo为段落行，从1开始。
        */
    AdvancedInfo: string;
    /**
        * 字的坐标数组，以四个顶点坐标表示
  注意：此字段可能返回 null，表示取不到有效值。
        */
    WordPolygon: Array<Polygon>;
}
/**
 * TableOCR请求参数结构体
 */
export interface TableOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * 图片大小
 */
export interface QrcodeImgSize {
    /**
     * 宽
     */
    Wide: number;
    /**
     * 高
     */
    High: number;
}
/**
 * VerifyBasicBizLicense返回参数结构体
 */
export interface VerifyBasicBizLicenseResponse {
    /**
     * 状态码，成功时返回0
     */
    ErrorCode?: number;
    /**
     * 统一社会信用代码
     */
    CreditCode?: string;
    /**
     * 经营期限自（YYYY-MM-DD）
     */
    Opfrom?: string;
    /**
     * 经营期限至（YYYY-MM-DD）
     */
    Opto?: string;
    /**
     * 法人姓名
     */
    Frname?: string;
    /**
     * 经营状态（在营、注销、吊销、其他）
     */
    Entstatus?: string;
    /**
     * 经营业务范围
     */
    Zsopscope?: string;
    /**
     * 状态信息
     */
    Reason?: string;
    /**
     * 原注册号
     */
    Oriregno?: string;
    /**
     * 要核验的工商注册号
     */
    VerifyRegno?: string;
    /**
     * 工商注册号
     */
    Regno?: string;
    /**
     * 要核验的企业名称
     */
    VerifyEntname?: string;
    /**
     * 企业名称
     */
    Entname?: string;
    /**
     * 要核验的住址
     */
    VerifyDom?: string;
    /**
     * 住址
     */
    Dom?: string;
    /**
     * 验证结果
     */
    RegNumResult?: BizLicenseVerifyResult;
    /**
     * 注册资本（单位：万元）,只有输入参数regCapital为1的时候才输出
     */
    RegCapital?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VehicleRegCertOCR请求参数结构体
 */
export interface VehicleRegCertOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * 商品码信息
 */
export interface ProductDataRecord {
    /**
     * 产品名称
     */
    ProductName: string;
    /**
     * 产品名称(英文)
     */
    EnName: string;
    /**
     * 品牌名称
     */
    BrandName: string;
    /**
     * 规格型号
     */
    Type: string;
    /**
     * 宽度，单位毫米
     */
    Width: string;
    /**
     * 高度，单位毫米
     */
    Height: string;
    /**
     * 深度，单位毫米
     */
    Depth: string;
    /**
     * 关键字
     */
    KeyWord: string;
    /**
     * 简短描述
     */
    Description: string;
    /**
     * 图片链接
     */
    ImageLink: Array<string>;
    /**
     * 厂家名称
     */
    ManufacturerName: string;
    /**
     * 厂家地址
     */
    ManufacturerAddress: string;
    /**
     * 企业社会信用代码
     */
    FirmCode: string;
    /**
        * 表示数据查询状态
  checkResult	状态说明
  1	 经查，该商品条码已在中国物品编码中心注册
  2	经查，该厂商识别代码已在中国物品编码中心注册，但编码信息未按规定通报。
  3	经查，该厂商识别代码已于xxxxx注销，请关注产品生产日期。
  4	经查，该企业以及条码未经条码中心注册，属于违法使用
  -1	经查，该商品条码被冒用
  -2	经查，该厂商识别代码已在中国物品编码中心注册，但该产品已经下市
  S001                未找到该厂商识别代码的注册信息。
  S002		该厂商识别代码已经在GS1注册，但编码信息未通报
  S003		该商品条码已在GS1通报
  S004		该商品条码已注销
  S005		数字不正确。GS1前缀（3位国家/地区代码）用于特殊用途。
  E001		完整性失败：此GTIN的长度无效。
  E002		完整性失败：校验位不正确。
  E003		完整性失败：字符串包含字母数字字符。
  E004		数字不正确。GS1前缀（3位国家/地区代码）不存在。
  E005		数字不正确。GS1前缀（3位国家/地区代码）用于特殊用途。
  E006		数字不正确。尚未分配该GS1公司前缀。
  E008	        经查，该企业厂商识别代码以及条码尚未通报
        */
    CheckResult: string;
    /**
     * UNSPSC分类码
     */
    CategoryCode: string;
}
/**
 * LicensePlateOCR请求参数结构体
 */
export interface LicensePlateOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * GeneralBasicOCR请求参数结构体
 */
export interface GeneralBasicOCRRequest {
    /**
        * 图片/PDF的 Base64 值。
  要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片/PDF的 Url 地址。
  要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
     * 保留字段。
     */
    Scene?: string;
    /**
        * 识别语言类型。
  支持自动识别语言类型，同时支持自选语言种类，默认中英文混合(zh)，各种语言均支持与英文混合的文字识别。
  可选值：
  zh\auto\jap\kor\
  spa\fre\ger\por\
  vie\may\rus\ita\
  hol\swe\fin\dan\
  nor\hun\tha\lat\ara
  可选值分别表示：
  中英文混合、自动识别、日语、韩语、
  西班牙语、法语、德语、葡萄牙语、
  越南语、马来语、俄语、意大利语、
  荷兰语、瑞典语、芬兰语、丹麦语、
  挪威语、匈牙利语、泰语、拉丁语系、
  阿拉伯语。
        */
    LanguageType?: string;
    /**
     * 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。
     */
    IsPdf?: boolean;
    /**
     * 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。
     */
    PdfPageNumber?: number;
}
/**
 * 行驶证副页正面的识别结果
 */
export interface TextVehicleBack {
    /**
        * 号牌号码
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PlateNo: string;
    /**
        * 档案编号
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FileNo: string;
    /**
        * 核定人数
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AllowNum: string;
    /**
        * 总质量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TotalMass: string;
    /**
        * 整备质量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CurbWeight: string;
    /**
        * 核定载质量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    LoadQuality: string;
    /**
        * 外廓尺寸
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ExternalSize: string;
    /**
        * 备注
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Marks: string;
    /**
        * 检验记录
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Record: string;
    /**
        * 准牵引总质量
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TotalQuasiMass: string;
}
/**
 * GeneralEfficientOCR请求参数结构体
 */
export interface GeneralEfficientOCRRequest {
    /**
        * 图片的 Base64 值。
  要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * TollInvoiceOCR返回参数结构体
 */
export interface TollInvoiceOCRResponse {
    /**
     * 过路过桥费发票识别结果，具体内容请点击左侧链接。
     */
    TollInvoiceInfos?: Array<TollInvoiceInfo>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
     */
    Angle?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RideHailingDriverLicenseOCR返回参数结构体
 */
export interface RideHailingDriverLicenseOCRResponse {
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 证号，对应网约车驾驶证字段：证号/从业资格证号/驾驶员证号/身份证号
     */
    LicenseNumber?: string;
    /**
     * 有效起始日期
     */
    StartDate?: string;
    /**
     * 有效期截止时间，对应网约车驾驶证字段：有效期至/营运期限止
     */
    EndDate?: string;
    /**
     * 初始发证日期，对应网约车驾驶证字段：初始领证日期/发证日期
     */
    ReleaseDate?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EnglishOCR请求参数结构体
 */
export interface EnglishOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
        * 单词四点坐标开关，开启可返回图片中单词的四点坐标。
  该参数默认值为false。
        */
    EnableCoordPoint?: boolean;
    /**
        * 候选字开关，开启可返回识别时多个可能的候选字（每个候选字对应其置信度）。
  该参数默认值为false。
        */
    EnableCandWord?: boolean;
}
/**
 * VatInvoiceVerify返回参数结构体
 */
export interface VatInvoiceVerifyResponse {
    /**
     * 增值税发票信息，详情请点击左侧链接。
     */
    Invoice?: VatInvoice;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PassportOCR返回参数结构体
 */
export interface PassportOCRResponse {
    /**
     * 国家码
     */
    Country?: string;
    /**
     * 护照号
     */
    PassportNo?: string;
    /**
     * 性别
     */
    Sex?: string;
    /**
     * 国籍
     */
    Nationality?: string;
    /**
     * 出生日期
     */
    BirthDate?: string;
    /**
     * 出生地点
     */
    BirthPlace?: string;
    /**
     * 签发日期
     */
    IssueDate?: string;
    /**
     * 签发地点
     */
    IssuePlace?: string;
    /**
     * 有效期
     */
    ExpiryDate?: string;
    /**
     * 持证人签名
     */
    Signature?: string;
    /**
     * 最下方第一行 MRZ Code 序列
     */
    CodeSet?: string;
    /**
     * 最下方第二行 MRZ Code 序列
     */
    CodeCrc?: string;
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 姓
     */
    FamilyName?: string;
    /**
     * 名
     */
    FirstName?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GeneralAccurateOCR请求参数结构体
 */
export interface GeneralAccurateOCRRequest {
    /**
        * 图片的 Base64 值。
  要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * OrgCodeCertOCR请求参数结构体
 */
export interface OrgCodeCertOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * FlightInvoiceOCR返回参数结构体
 */
export interface FlightInvoiceOCRResponse {
    /**
     * 机票行程单识别结果，具体内容请点击左侧链接。
     */
    FlightInvoiceInfos?: Array<FlightInvoiceInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * InstitutionOCR请求参数结构体
 */
export interface InstitutionOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * 购车发票识别结果
 */
export interface CarInvoiceInfo {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段name对应的字符串结果。
     */
    Value: string;
    /**
     * 字段在旋转纠正之后的图像中的像素坐标。
     */
    Rect: Rect;
    /**
        * 字段在原图中的中的四点坐标。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Polygon: Polygon;
}
/**
 * 机票行程单识别结果
 */
export interface FlightInvoiceInfo {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段 Name 对应的字符串结果。
     */
    Value: string;
}
/**
 * 行驶证主页正面的识别结果
 */
export interface TextVehicleFront {
    /**
        * 号牌号码
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PlateNo: string;
    /**
        * 车辆类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    VehicleType: string;
    /**
        * 所有人
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Owner: string;
    /**
        * 住址
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Address: string;
    /**
        * 使用性质
  注意：此字段可能返回 null，表示取不到有效值。
        */
    UseCharacter: string;
    /**
        * 品牌型号
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Model: string;
    /**
        * 车辆识别代号
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Vin: string;
    /**
        * 发动机号码
  注意：此字段可能返回 null，表示取不到有效值。
        */
    EngineNo: string;
    /**
        * 注册日期
  注意：此字段可能返回 null，表示取不到有效值。
        */
    RegisterDate: string;
    /**
        * 发证日期
  注意：此字段可能返回 null，表示取不到有效值。
        */
    IssueDate: string;
    /**
        * 印章
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Seal: string;
}
/**
 * 金融票据切片识别单个字段的内容
 */
export interface FinanBillSliceInfo {
    /**
     * 识别出的字段名称。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
}
/**
 * QueryBarCode返回参数结构体
 */
export interface QueryBarCodeResponse {
    /**
     * 条码
     */
    BarCode?: string;
    /**
     * 条码信息数组
     */
    ProductDataRecords?: Array<ProductDataRecord>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ArithmeticOCR请求参数结构体
 */
export interface ArithmeticOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * FinanBillSliceOCR请求参数结构体
 */
export interface FinanBillSliceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * MLIDPassportOCR返回参数结构体
 */
export interface MLIDPassportOCRResponse {
    /**
     * 护照ID
     */
    ID?: string;
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 出生日期
     */
    DateOfBirth?: string;
    /**
     * 性别（F女，M男）
     */
    Sex?: string;
    /**
     * 有效期
     */
    DateOfExpiration?: string;
    /**
     * 发行国
     */
    IssuingCountry?: string;
    /**
     * 国籍
     */
    Nationality?: string;
    /**
        * 告警码
  -9103	证照翻拍告警
  -9102	证照复印件告警
  -9106       证件遮挡告警
        */
    Warn?: Array<number>;
    /**
     * 证件图片
     */
    Image?: string;
    /**
        * 扩展字段:
  {
      ID:{
          Confidence:0.9999
      },
      Name:{
          Confidence:0.9996
      }
  }
        */
    AdvancedInfo?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VatRollInvoiceOCR请求参数结构体
 */
export interface VatRollInvoiceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * 坐标
 */
export interface Coord {
    /**
     * 横坐标
     */
    X: number;
    /**
     * 纵坐标
     */
    Y: number;
}
/**
 * SealOCR返回参数结构体
 */
export interface SealOCRResponse {
    /**
     * 印章内容
     */
    SealBody?: string;
    /**
     * 印章坐标
     */
    Location?: Rect;
    /**
     * 其它文本内容
     */
    OtherTexts?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 识别出的字段
 */
export interface DutyPaidProofInfo {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
    /**
     * 文本行在旋转纠正之后的图像中的像素坐标。
     */
    Rect: Rect;
}
/**
 * FinanBillOCR返回参数结构体
 */
export interface FinanBillOCRResponse {
    /**
     * 金融票据整单识别结果，具体内容请点击左侧链接。
     */
    FinanBillInfos?: Array<FinanBillInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 运单识别结果
 */
export interface TextWaybill {
    /**
     * 收件人姓名
     */
    RecName: WaybillObj;
    /**
     * 收件人手机号
     */
    RecNum: WaybillObj;
    /**
     * 收件人地址
     */
    RecAddr: WaybillObj;
    /**
     * 寄件人姓名
     */
    SenderName: WaybillObj;
    /**
     * 寄件人手机号
     */
    SenderNum: WaybillObj;
    /**
     * 寄件人地址
     */
    SenderAddr: WaybillObj;
    /**
     * 运单号
     */
    WaybillNum: WaybillObj;
}
/**
 * 试题识别结构化信息
 */
export interface QuestionObj {
    /**
     * 题号
     */
    QuestionTextNo: string;
    /**
        * 题型：
  1: "选择题"
  2: "填空题"
  3: "解答题"
        */
    QuestionTextType: number;
    /**
     * 题干
     */
    QuestionText: string;
    /**
     * 选择题选项，包含1个或多个option
     */
    QuestionOptions: string;
    /**
     * 所有子题的question属性
     */
    QuestionSubquestion: string;
}
/**
 * VinOCR返回参数结构体
 */
export interface VinOCRResponse {
    /**
     * 检测到的车辆 VIN 码。
     */
    Vin?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EduPaperOCR请求参数结构体
 */
export interface EduPaperOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
        * 扩展配置信息。
  配置格式：{"option1":value1,"option2":value2}
  可配置信息：
        参数名称  是否必选   类型   可选值  默认值  描述
        task_type  否  Int32  [0,1]  1  用于选择任务类型: 0: 关闭版式分析与处理 1: 开启版式分析处理
        is_structuralization 否 Bool false\true true  用于选择是否结构化输出：false：返回包体返回通用输出 true：返回包体同时返回通用和结构化输出
        if_readable_format 否 Bool false\true false 是否按照版式整合通用文本/公式输出结果
  例子：
  {"task_type": 1,"is_structuralization": true,"if_readable_format": true}
        */
    Config?: string;
}
/**
 * FormulaOCR请求参数结构体
 */
export interface FormulaOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * PassportOCR请求参数结构体
 */
export interface PassportOCRRequest {
    /**
        * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
        */
    ImageUrl?: string;
    /**
        * 默认填写CN
  支持中国大陆地区护照。
        */
    Type?: string;
}
/**
 * DutyPaidProofOCR请求参数结构体
 */
export interface DutyPaidProofOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * RideHailingDriverLicenseOCR请求参数结构体
 */
export interface RideHailingDriverLicenseOCRRequest {
    /**
        * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
  建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
        */
    ImageUrl?: string;
}
/**
 * QueryBarCode请求参数结构体
 */
export interface QueryBarCodeRequest {
    /**
     * 条形码
     */
    BarCode: string;
}
/**
 * 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height）
 */
export interface ItemCoord {
    /**
     * 左上角x
     */
    X: number;
    /**
     * 左上角y
     */
    Y: number;
    /**
     * 宽width
     */
    Width: number;
    /**
     * 高height
     */
    Height: number;
}
/**
 * OrgCodeCertOCR返回参数结构体
 */
export interface OrgCodeCertOCRResponse {
    /**
     * 代码
     */
    OrgCode?: string;
    /**
     * 机构名称
     */
    Name?: string;
    /**
     * 地址
     */
    Address?: string;
    /**
     * 有效期
     */
    ValidDate?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * MixedInvoiceOCR请求参数结构体
 */
export interface MixedInvoiceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
        * 需要识别的票据类型列表，为空或不填表示识别全部类型。
  0：出租车发票
  1：定额发票
  2：火车票
  3：增值税发票
  5：机票行程单
  8：通用机打发票
  9：汽车票
  10：轮船票
  11：增值税发票（卷票 ）
  12：购车发票
  13：过路过桥费发票
        */
    Types?: Array<number>;
}
/**
 * ResidenceBookletOCR返回参数结构体
 */
export interface ResidenceBookletOCRResponse {
    /**
     * 户号
     */
    HouseholdNumber?: string;
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 性别
     */
    Sex?: string;
    /**
     * 出生地
     */
    BirthPlace?: string;
    /**
     * 民族
     */
    Nation?: string;
    /**
     * 籍贯
     */
    NativePlace?: string;
    /**
     * 出生日期
     */
    BirthDate?: string;
    /**
     * 公民身份证件编号
     */
    IdCardNumber?: string;
    /**
     * 文化程度
     */
    EducationDegree?: string;
    /**
     * 服务处所
     */
    ServicePlace?: string;
    /**
     * 户别
     */
    Household?: string;
    /**
     * 住址
     */
    Address?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CarInvoiceOCR返回参数结构体
 */
export interface CarInvoiceOCRResponse {
    /**
     * 购车发票识别结果，具体内容请点击左侧链接。
     */
    CarInvoiceInfos?: Array<CarInvoiceInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GeneralFastOCR请求参数结构体
 */
export interface GeneralFastOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * 文本的坐标，以四个顶点坐标表示
注意：此字段可能返回 null，表示取不到有效值
 */
export interface Polygon {
    /**
     * 左上顶点坐标
     */
    LeftTop: Coord;
    /**
     * 右上顶点坐标
     */
    RightTop: Coord;
    /**
     * 右下顶点坐标
     */
    RightBottom: Coord;
    /**
     * 左下顶点坐标
     */
    LeftBottom: Coord;
}
/**
 * ShipInvoiceOCR返回参数结构体
 */
export interface ShipInvoiceOCRResponse {
    /**
     * 轮船票识别结果，具体内容请点击左侧链接。
     */
    ShipInvoiceInfos?: Array<ShipInvoiceInfo>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
     */
    Angle?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 保险单据信息
 */
export interface InsuranceBillInfo {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
}
/**
 * VehicleRegCertOCR返回参数结构体
 */
export interface VehicleRegCertOCRResponse {
    /**
     * 机动车登记证书识别结果，具体内容请点击左侧链接。
     */
    VehicleRegCertInfos?: Array<VehicleRegCertInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 卡证智能分类结果
 */
export interface ClassifyDetectInfo {
    /**
     * 分类名称
     */
    Name: string;
    /**
        * 分类类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Type: string;
    /**
     * 位置坐标
     */
    Rect: Rect;
}
/**
 * GeneralAccurateOCR返回参数结构体
 */
export interface GeneralAccurateOCRResponse {
    /**
     * 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。
     */
    TextDetections?: Array<TextDetection>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。
     */
    Angel?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SealOCR请求参数结构体
 */
export interface SealOCRRequest {
    /**
        * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
  建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
        */
    ImageUrl?: string;
}
/**
 * 表格识别结果
 */
export interface TextTable {
    /**
     * 单元格左上角的列索引
     */
    ColTl: number;
    /**
     * 单元格左上角的行索引
     */
    RowTl: number;
    /**
     * 单元格右下角的列索引
     */
    ColBr: number;
    /**
     * 单元格右下角的行索引
     */
    RowBr: number;
    /**
     * 单元格文字
     */
    Text: string;
    /**
     * 单元格类型，包含body（表格主体）、header（表头）、footer（表尾）三种
     */
    Type: string;
    /**
     * 置信度 0 ~100
     */
    Confidence: number;
    /**
     * 文本行坐标，以四个顶点坐标表示
     */
    Polygon: Array<Coord>;
    /**
     * 此字段为扩展字段
     */
    AdvancedInfo: string;
}
/**
 * ResidenceBookletOCR请求参数结构体
 */
export interface ResidenceBookletOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * BusInvoiceOCR返回参数结构体
 */
export interface BusInvoiceOCRResponse {
    /**
     * 汽车票识别结果，具体内容请点击左侧链接。
     */
    BusInvoiceInfos?: Array<BusInvoiceInfo>;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。
     */
    Angle?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 二维码/条形码识别结果信息
 */
export interface QrcodeResultsInfo {
    /**
     * 类型（二维码、条形码）
     */
    TypeName: string;
    /**
     * 二维码/条形码包含的地址
     */
    Url: string;
    /**
     * 二维码/条形码坐标（二维码会返回位置坐标，条形码暂不返回位置坐标，因此默认X和Y返回值均为-1）
     */
    Position: QrcodePositionObj;
}
/**
 * MainlandPermitOCR返回参数结构体
 */
export interface MainlandPermitOCRResponse {
    /**
     * 中文姓名
     */
    Name?: string;
    /**
     * 英文姓名
     */
    EnglishName?: string;
    /**
     * 性别
     */
    Sex?: string;
    /**
     * 出生日期
     */
    Birthday?: string;
    /**
     * 签发机关
     */
    IssueAuthority?: string;
    /**
     * 有效期限
     */
    ValidDate?: string;
    /**
     * 证件号
     */
    Number?: string;
    /**
     * 签发地点
     */
    IssueAddress?: string;
    /**
     * 签发次数
     */
    IssueNumber?: string;
    /**
     * 证件类别， 如：台湾居民来往大陆通行证、港澳居民来往内地通行证。
     */
    Type?: string;
    /**
     * RetProfile为True时返回头像字段， Base64编码
     */
    Profile?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 增值税发票信息
 */
export interface VatInvoice {
    /**
     * 发票代码
     */
    Code: string;
    /**
     * 发票号码
     */
    Number: string;
    /**
     * 开票日期
     */
    Date: string;
    /**
     * 购方抬头
     */
    BuyerName: string;
    /**
     * 购方税号
     */
    BuyerTaxCode: string;
    /**
     * 购方地址电话
     */
    BuyerAddressPhone: string;
    /**
     * 购方银行账号
     */
    BuyerBankAccount: string;
    /**
     * 销方名称
     */
    SellerName: string;
    /**
     * 销方税号
     */
    SellerTaxCode: string;
    /**
     * 销方地址电话
     */
    SellerAddressPhone: string;
    /**
     * 销方银行账号
     */
    SellerBankAccount: string;
    /**
     * 备注
     */
    Remark: string;
    /**
     * 机器编码
     */
    MachineNo: string;
    /**
        * 发票类型
  01：专用发票
  02：货运发票
  03：机动车发票
  04：普通发票
  10：电子发票
  11：卷式发票
  14：通行费发票
  15：二手车发票
        */
    Type: string;
    /**
     * 检验码
     */
    CheckCode: string;
    /**
        * 是否作废（红冲）是否作废（红冲）
  Y: 已作废 N：未作废 H：红冲
        */
    IsAbandoned: string;
    /**
        * 是否有销货清单
  Y: 有清单 N：无清单
  卷票无
        */
    HasSellerList: string;
    /**
     * 销货清单标题
     */
    SellerListTitle: string;
    /**
     * 销货清单税额
     */
    SellerListTax: string;
    /**
     * 不含税金额
     */
    AmountWithoutTax: string;
    /**
     * 税额
     */
    TaxAmount: string;
    /**
     * 含税金额
     */
    AmountWithTax: string;
    /**
     * 项目明细
     */
    Items: Array<VatInvoiceItem>;
}
/**
 * HmtResidentPermitOCR返回参数结构体
 */
export interface HmtResidentPermitOCRResponse {
    /**
     * 证件姓名
     */
    Name?: string;
    /**
     * 性别
     */
    Sex?: string;
    /**
     * 出生日期
     */
    Birth?: string;
    /**
     * 地址
     */
    Address?: string;
    /**
     * 身份证号
     */
    IdCardNo?: string;
    /**
        * 0-正面
  1-反面
        */
    CardType?: number;
    /**
     * 证件有效期限
     */
    ValidDate?: string;
    /**
     * 签发机关
     */
    Authority?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EnglishOCR返回参数结构体
 */
export interface EnglishOCRResponse {
    /**
     * 检测到的文本信息，具体内容请点击左侧链接。
     */
    TextDetections?: Array<TextDetectionEn>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BusInvoiceOCR请求参数结构体
 */
export interface BusInvoiceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * QuotaInvoiceOCR返回参数结构体
 */
export interface QuotaInvoiceOCRResponse {
    /**
     * 发票号码
     */
    InvoiceNum?: string;
    /**
     * 发票代码
     */
    InvoiceCode?: string;
    /**
     * 大写金额
     */
    Rate?: string;
    /**
     * 小写金额
     */
    RateNum?: string;
    /**
     * 发票消费类型
     */
    InvoiceType?: string;
    /**
        * 省
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Province?: string;
    /**
        * 市
  注意：此字段可能返回 null，表示取不到有效值。
        */
    City?: string;
    /**
        * 是否有公司印章（1有 0无 空为识别不出）
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HasStamp?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RideHailingTransportLicenseOCR返回参数结构体
 */
export interface RideHailingTransportLicenseOCRResponse {
    /**
     * 交运管许可字号。
     */
    OperationLicenseNumber?: string;
    /**
     * 车辆所有人，对应网约车运输证字段：车辆所有人/车主名称/业户名称。
     */
    VehicleOwner?: string;
    /**
     * 车牌号码，对应网约车运输证字段：车牌号码/车辆号牌。
     */
    VehicleNumber?: string;
    /**
     * 有效起始日期。
     */
    StartDate?: string;
    /**
     * 有效期截止时间，对应网约车运输证字段：有效期至/营运期限止。
     */
    EndDate?: string;
    /**
     * 初始发证日期，对应网约车运输证字段：初始领证日期/发证日期。
     */
    ReleaseDate?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 候选字符集(包含候选字Character以及置信度Confidence)
 */
export interface CandWord {
    /**
     * 候选字符集的单词信息（包括单词Character和单词置信度confidence）
     */
    CandWords: Array<Words>;
}
/**
 * 企业证照单个字段的内容
 */
export interface EnterpriseLicenseInfo {
    /**
     * 识别出的字段名称。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
}
/**
 * InsuranceBillOCR请求参数结构体
 */
export interface InsuranceBillOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * GeneralHandwritingOCR返回参数结构体
 */
export interface GeneralHandwritingOCRResponse {
    /**
     * 检测到的文本信息，具体内容请点击左侧链接。
     */
    TextDetections?: Array<TextGeneralHandwriting>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TableOCR返回参数结构体
 */
export interface TableOCRResponse {
    /**
     * 检测到的文本信息，具体内容请点击左侧链接。
     */
    TextDetections?: Array<TextTable>;
    /**
     * Base64 编码后的 Excel 数据。
     */
    Data?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 数学试题识别结构化对象
 */
export interface QuestionBlockObj {
    /**
     * 数学试题识别结构化信息数组
     */
    QuestionArr: Array<QuestionObj>;
}
/**
 * WaybillOCR请求参数结构体
 */
export interface WaybillOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * 增值税发票卷票信息
 */
export interface VatRollInvoiceInfo {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
    /**
     * 文本行在旋转纠正之后的图像中的像素坐标。
     */
    Rect: Rect;
}
/**
 * 轮船票字段信息
 */
export interface ShipInvoiceInfo {
    /**
     * 识别出的字段名称（关键字）。
     */
    Name: string;
    /**
     * 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。
     */
    Value: string;
    /**
     * 文本行在旋转纠正之后的图像中的像素坐标。
     */
    Rect: Rect;
}
/**
 * IDCardOCR请求参数结构体
 */
export interface IDCardOCRRequest {
    /**
        * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
        */
    ImageUrl?: string;
    /**
        * FRONT：身份证有照片的一面（人像面），
  BACK：身份证有国徽的一面（国徽面），
  该参数如果不填，将为您自动判断身份证正反面。
        */
    CardSide?: string;
    /**
        * 以下可选字段均为bool 类型，默认false：
  CropIdCard，身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）
  CropPortrait，人像照片裁剪（自动抠取身份证头像区域）
  CopyWarn，复印件告警
  BorderCheckWarn，边框和框内遮挡告警
  ReshootWarn，翻拍告警
  DetectPsWarn，PS检测告警
  TempIdWarn，临时身份证告警
  InvalidDateWarn，身份证有效日期不合法告警
  Quality，图片质量分数（评价图片的模糊程度）
  MultiCardDetect，是否开启多卡证检测
  ReflectWarn，是否开启反光检测
  
  SDK 设置方式参考：
  Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})
  API 3.0 Explorer 设置方式参考：
  Config = {"CropIdCard":true,"CropPortrait":true}
        */
    Config?: string;
}
/**
 * MixedInvoiceDetect请求参数结构体
 */
export interface MixedInvoiceDetectRequest {
    /**
     * 是否需要返回裁剪后的图片。
     */
    ReturnImage: boolean;
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * VinOCR请求参数结构体
 */
export interface VinOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * RideHailingTransportLicenseOCR请求参数结构体
 */
export interface RideHailingTransportLicenseOCRRequest {
    /**
        * 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。
  建议图片存储于腾讯云，可保障更高的下载速度和稳定性。
        */
    ImageUrl?: string;
}
/**
 * MLIDCardOCR返回参数结构体
 */
export interface MLIDCardOCRResponse {
    /**
     * 身份证号
     */
    ID?: string;
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 地址
     */
    Address?: string;
    /**
     * 性别
     */
    Sex?: string;
    /**
        * 告警码
  -9103	证照翻拍告警
  -9102	证照复印件告警
  -9106       证件遮挡告警
        */
    Warn?: Array<number>;
    /**
     * 证件图片
     */
    Image?: string;
    /**
        * 扩展字段：
  {
      ID:{
          Confidence:0.9999
      },
      Name:{
          Confidence:0.9996
      }
  }
        */
    AdvancedInfo?: string;
    /**
        * 证件类型
  MyKad  身份证
  MyPR    永居证
  MyTentera   军官证
  MyKAS    临时身份证
  POLIS  警察
  IKAD   劳工证
        */
    Type?: string;
    /**
     * 出生日期（目前该字段仅支持IKAD劳工证）
     */
    Birthday?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EstateCertOCR请求参数结构体
 */
export interface EstateCertOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * VerifyBasicBizLicense请求参数结构体
 */
export interface VerifyBasicBizLicenseRequest {
    /**
        * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必选一个输入。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必选一个输入。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageUrl?: string;
    /**
        * 用于入参是营业执照图片的场景，表示需要校验的参数：RegNum（注册号或者统一社会信用代码），Name（企业名称），Address（经营地址）。选择后会返回相关参数校验结果。RegNum为必选，Name和Address可选。
  格式为{RegNum: true, Name:true/false, Address:true/false}
  
  设置方式参考：
  Config = Json.stringify({"Name":true,"Address":true})
  API 3.0 Explorer 设置方式参考：
  Config = {"Name":true,"Address":true}
        */
    ImageConfig?: string;
    /**
     * 用于入参是文本的场景，RegNum表示注册号或者统一社会信用代码。RegNum为必选项。
     */
    RegNum?: string;
    /**
     * 用于入参是文本的场景，Name表示企业名称。Name为可选项，填写后会返回Name的校验结果。
     */
    Name?: string;
    /**
     * 用于入参是文本的场景，Address表示经营地址，填写后会返回Name的校验结果。
     */
    Address?: string;
    /**
     * 1表示输出注册资本字段（单位：万元），其他值表示不输出。默认不输出。
     */
    RegCapital?: number;
}
/**
 * BizLicenseOCR返回参数结构体
 */
export interface BizLicenseOCRResponse {
    /**
     * 统一社会信用代码（三合一之前为注册号）
     */
    RegNum?: string;
    /**
     * 公司名称
     */
    Name?: string;
    /**
     * 注册资本
     */
    Capital?: string;
    /**
     * 法定代表人
     */
    Person?: string;
    /**
     * 地址
     */
    Address?: string;
    /**
     * 经营范围
     */
    Business?: string;
    /**
     * 主体类型
     */
    Type?: string;
    /**
     * 营业期限
     */
    Period?: string;
    /**
     * 组成形式
     */
    ComposingForm?: string;
    /**
     * 成立日期
     */
    SetDate?: string;
    /**
        * Code 告警码列表和释义：
  -20001 非营业执照
  注：告警码可以同时存在多个
        */
    RecognizeWarnCode?: Array<number>;
    /**
        * 告警码说明：
  OCR_WARNING_TPYE_NOT_MATCH 非营业执照
  注：告警信息可以同时存在多个
        */
    RecognizeWarnMsg?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * VatInvoiceOCR返回参数结构体
 */
export interface VatInvoiceOCRResponse {
    /**
     * 检测到的文本信息，具体内容请点击左侧链接。
     */
    VatInvoiceInfos?: Array<TextVatInvoice>;
    /**
     * 明细条目。VatInvoiceInfos中关于明细项的具体条目。
     */
    Items?: Array<VatInvoiceItem>;
    /**
     * 图片为PDF时，返回PDF的总页数，默认为0
     */
    PdfPageSize?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ShipInvoiceOCR请求参数结构体
 */
export interface ShipInvoiceOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * BankCardOCR返回参数结构体
 */
export interface BankCardOCRResponse {
    /**
     * 卡号
     */
    CardNo?: string;
    /**
     * 银行信息
     */
    BankInfo?: string;
    /**
     * 有效期
     */
    ValidDate?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BusinessCardOCR请求参数结构体
 */
export interface BusinessCardOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
    /**
        * 可选字段，根据需要选择是否请求对应字段。
  目前支持的字段为：
  RetImageType-“PROPROCESS” 图像预处理，string 类型。
  图像预处理功能为，检测图片倾斜的角度，将原本倾斜的图片围绕中心点转正，最终输出一张正的名片抠图。
  
  SDK 设置方式参考：
  Config = Json.stringify({"RetImageType":"PROPROCESS"})
  API 3.0 Explorer 设置方式参考：
  Config = {"RetImageType":"PROPROCESS"}
        */
    Config?: string;
}
/**
 * FinanBillOCR请求参数结构体
 */
export interface FinanBillOCRRequest {
    /**
        * 图片的 Base64 值。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。
  图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。
        */
    ImageBase64?: string;
    /**
        * 图片的 Url 地址。
  支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。
  支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。
  图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。
  非腾讯云存储的 Url 速度和稳定性可能受一定影响。
        */
    ImageUrl?: string;
}
/**
 * GeneralFastOCR返回参数结构体
 */
export interface GeneralFastOCRResponse {
    /**
     * 检测到的文本信息，具体内容请点击左侧链接。
     */
    TextDetections?: Array<TextDetection>;
    /**
        * 检测到的语言，目前支持的语种范围为：简体中文、繁体中文、英文、日文、韩文。未来将陆续新增对更多语种的支持。
  返回结果含义为：zh - 中英混合，jap - 日文，kor - 韩文。
        */
    Language?: string;
    /**
     * 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负
     */
    Angel?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 二维码/条形码坐标信息
 */
export interface QrcodePositionObj {
    /**
     * 左上顶点坐标（如果是条形码，X和Y都为-1）
     */
    LeftTop: Coord;
    /**
     * 右上顶点坐标（如果是条形码，X和Y都为-1）
     */
    RightTop: Coord;
    /**
     * 右下顶点坐标（如果是条形码，X和Y都为-1）
     */
    RightBottom: Coord;
    /**
     * 左下顶点坐标（如果是条形码，X和Y都为-1）
     */
    LeftBottom: Coord;
}
