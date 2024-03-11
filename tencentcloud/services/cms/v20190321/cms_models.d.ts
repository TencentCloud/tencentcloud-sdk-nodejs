/**
 * CreateKeywordsSamples返回参数结构体
 */
export interface CreateKeywordsSamplesResponse {
    /**
     * 添加成功的关键词ID列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SampleIDs?: Array<string>;
    /**
     * 成功入库关键词列表
     */
    SuccessInfos?: Array<UserKeywordInfo>;
    /**
     * 重复关键词列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DupInfos?: Array<UserKeywordInfo>;
    /**
     * 无效关键词列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvalidSamples?: Array<InvalidSample>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateKeywordsSamples请求参数结构体
 */
export interface CreateKeywordsSamplesRequest {
    /**
     * 关键词库信息：单次限制写入2000个，词库总容量不可超过10000个。
     */
    UserKeywords: Array<UserKeyword>;
    /**
     * 词库ID
     */
    LibID?: string;
}
/**
 * 文本返回的自定义词库结果
 */
export interface CustomResult {
    /**
     * 命中的自定义关键词
     */
    Keywords?: Array<string>;
    /**
     * 自定义词库名称
     */
    LibName?: string;
    /**
     * 自定义库id
     */
    LibId?: string;
    /**
     * 命中的自定义关键词的类型
     */
    Type?: string;
}
/**
 * 文本识别结果详情
 */
export interface TextData {
    /**
     * 恶意类型
  100：正常
  20001：政治
  20002：色情
  20006：涉毒违法
  20007：谩骂
  20105：广告引流
  24001：暴恐
     */
    EvilType: number;
    /**
     * 是否恶意 0：正常 1：可疑
     */
    EvilFlag: number;
    /**
     * 和请求中的DataId一致，原样返回
     */
    DataId?: string;
    /**
     * 输出的其他信息，不同客户内容不同
     */
    Extra?: string;
    /**
     * 最终使用的BizType
     */
    BizType?: number;
    /**
     * 消息类输出结果
     */
    Res?: TextOutputRes;
    /**
     * 账号风险检测结果
     */
    RiskDetails?: Array<RiskDetails>;
    /**
     * 消息类ID信息
     */
    ID?: TextOutputID;
    /**
     * 命中的模型分值
     */
    Score?: number;
    /**
     * 消息类公共相关参数
     */
    Common?: TextOutputComm;
    /**
     * 建议值,Block：打击,Review：待复审,Normal：正常
     */
    Suggestion?: string;
    /**
     * 命中的关键词
     */
    Keywords?: Array<string>;
    /**
     * 返回的详细结果
     */
    DetailResult?: Array<DetailResult>;
    /**
     * 返回的自定义词库结果
     */
    CustomResult?: Array<CustomResult>;
    /**
     * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
     */
    EvilLabel?: string;
}
/**
 * DescribeKeywordsLibs请求参数结构体
 */
export interface DescribeKeywordsLibsRequest {
    /**
     * 单页条数，最大为100条
     */
    Limit: number;
    /**
     * 条数偏移量
     */
    Offset: number;
    /**
     * 过滤器(支持LibName模糊查询,CustomLibIDs词库id列表过滤)
     */
    Filters?: Array<Filters>;
}
/**
 * 文本返回的详细结果
 */
export interface DetailResult {
    /**
     * 该标签下命中的关键词
     */
    Keywords?: Array<string>;
    /**
     * 恶意类型
  100：正常
  20001：政治
  20002：色情
  20006：涉毒违法
  20007：谩骂
  20105：广告引流
  24001：暴恐
     */
    EvilType?: number;
    /**
     * 该标签模型命中的分值
     */
    Score?: number;
    /**
     * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
     */
    EvilLabel?: string;
}
/**
 * ImageModeration返回参数结构体
 */
export interface ImageModerationResponse {
    /**
     * 业务返回码
     */
    BusinessCode?: number;
    /**
     * 识别结果
     */
    Data?: ImageData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * TextModeration返回参数结构体
 */
export interface TextModerationResponse {
    /**
     * 业务返回码
     */
    BusinessCode?: number;
    /**
     * 识别结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: TextData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ImageModeration请求参数结构体
 */
export interface ImageModerationRequest {
    /**
     * 文件地址
     */
    FileUrl?: string;
    /**
     * 文件MD5值
     */
    FileMD5?: string;
    /**
     * 文件内容 Base64,与FileUrl必须二填一
     */
    FileContent?: string;
}
/**
 * 图片识别结果详情
 */
export interface ImageData {
    /**
     * 恶意类型
  100：正常
  20001：政治
  20002：色情
  20006：涉毒违法
  20007：谩骂
  20103：性感
  24001：暴恐
     */
    EvilType: number;
    /**
     * 图片性感详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HotDetect?: ImageHotDetect;
    /**
     * 是否恶意 0：正常 1：可疑
     */
    EvilFlag: number;
    /**
     * 图片二维码详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CodeDetect?: CodeDetect;
    /**
     * 图片涉政详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolityDetect?: ImagePolityDetect;
    /**
     * 图片违法详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IllegalDetect?: ImageIllegalDetect;
    /**
     * 图片涉黄详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PornDetect?: ImagePornDetect;
    /**
     * 图片暴恐详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerrorDetect?: ImageTerrorDetect;
    /**
     * 图片OCR详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OCRDetect?: OCRDetect;
    /**
     * logo详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogoDetect?: LogoDetail;
    /**
     * 图片相似度详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Similar?: Similar;
    /**
     * 手机检测详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PhoneDetect?: PhoneDetect;
}
/**
 * 关键词信息
 */
export interface UserKeywordInfo {
    /**
     * 关键词条ID
     */
    ID: string;
    /**
     * 关键词内容
     */
    Content: string;
    /**
     * 关键词标签；取值范围为："Normal","Polity","Porn","Sexy","Ad","Illegal","Abuse","Terror","Spam","Moan"
     */
    Label: string;
    /**
     * 创建时间
     */
    CreateTime: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark: string;
    /**
     * 词类型：Default,Pinyin,English,CompoundWord,ExclusionWord,AffixWord
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WordType: string;
}
/**
 * DescribeLibSamples返回参数结构体
 */
export interface DescribeLibSamplesResponse {
    /**
     * 词记录数
     */
    TotalCount?: number;
    /**
     * 词详情
     */
    Infos?: Array<UserKeywordInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLibSamples请求参数结构体
 */
export interface DescribeLibSamplesRequest {
    /**
     * 单页条数，最大为100条
     */
    Limit: number;
    /**
     * 条数偏移量
     */
    Offset: number;
    /**
     * 词库ID
     */
    LibID?: string;
    /**
     * 词内容过滤
     */
    Content?: string;
    /**
     * 违规类型列表过滤
     */
    EvilTypeList?: Array<number | bigint>;
    /**
     * 样本词ID列表过滤
     */
    SampleIDs?: Array<string>;
}
/**
 * 词库关键词删除结果详情
 */
export interface DeleteSampleDetails {
    /**
     * 关键词ID
     */
    SampleID: string;
    /**
     * 关键词内容
     */
    Content: string;
    /**
     * 是否删除成功
     */
    Deleted: boolean;
    /**
     * 错误信息
     */
    ErrorInfo: string;
}
/**
 * 消息类输出ID参数
 */
export interface TextOutputID {
    /**
     * 接入业务的唯一ID
     */
    MsgID?: string;
    /**
     * 用户账号uin，对应请求协议里的Content.User.Uin。旁路结果有回带，串联结果无该字段
     */
    Uin?: string;
}
/**
 * 用户相关信息
 */
export interface User {
    /**
     * 用户等级，默认0 未知 1 低 2 中 3 高
     */
    Level?: number;
    /**
     * 性别 默认0 未知 1 男性 2 女性
     */
    Gender?: number;
    /**
     * 年龄 默认0 未知
     */
    Age?: number;
    /**
     * 用户账号ID，如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
     */
    UserId?: string;
    /**
     * 手机号
     */
    Phone?: string;
    /**
     * 账号类别，"1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
     */
    AccountType?: number;
    /**
     * 用户昵称
     */
    Nickname?: string;
}
/**
 * DeleteLibSamples返回参数结构体
 */
export interface DeleteLibSamplesResponse {
    /**
     * 删除成功的数量
     */
    Count?: number;
    /**
     * 每个关键词删除的结果
     */
    Details?: Array<DeleteSampleDetails>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设备信息
 */
export interface Device {
    /**
     * IOS设备，IDFV - Identifier For Vendor（应用开发商标识符）
     */
    IDFV?: string;
    /**
     * 设备指纹Token
     */
    TokenId?: string;
    /**
     * 用户IP
     */
    IP?: string;
    /**
     * Mac地址
     */
    Mac?: string;
    /**
     * IOS设备，Identifier For Advertising（广告标识符）
     */
    IDFA?: string;
    /**
     * 设备指纹ID
     */
    DeviceId?: string;
    /**
     * 设备序列号
     */
    IMEI?: string;
}
/**
 * 图片二维码详情
 */
export interface CodeDetect {
    /**
     * 检测是否成功，0：成功，-1：出错
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModerationCode?: number;
    /**
     * 从图片中检测到的二维码，可能为多个
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ModerationDetail?: Array<CodeDetail>;
}
/**
 * 图片暴恐详情
 */
export interface ImageTerrorDetect {
    /**
     * 关键词明细
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Keywords?: Array<string>;
    /**
     * 恶意类型
  100：正常
  24001：暴恐
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EvilType?: number;
    /**
     * 暴恐标签：返回暴恐特征中文描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<string>;
    /**
     * 暴恐分：分值范围0--100，分数越高暴恐倾向越明显
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: number;
    /**
     * 处置判定 0：正常 1：可疑
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HitFlag?: number;
}
/**
 * 二维码在图片中的位置，由边界点的坐标表示
 */
export interface CodePosition {
    /**
     * 二维码边界点X轴坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FloatX?: number;
    /**
     * 二维码边界点Y轴坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FloatY?: number;
}
/**
 * 无效关键词
 */
export interface InvalidSample {
    /**
     * 关键词
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Content?: string;
    /**
     * 无效代码:1-标签不存在;2-词过长;3-词类型不匹配;4-备注超长
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvalidCode?: number;
    /**
     * 无效描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InvalidMessage?: string;
}
/**
 * 消息类输出结果参数
 */
export interface TextOutputRes {
    /**
     * 操作人,信安处理人企业微信ID
     */
    Operator?: string;
    /**
     * 恶意类型，广告（10001）， 政治（20001）， 色情（20002）， 社会事件（20004）， 暴力（20011）， 低俗（20012）， 违法犯罪（20006）， 欺诈（20008）， 版权（20013）， 谣言（20104）， 其他（21000）
     */
    ResultType?: number;
    /**
     * 恶意操作码，
  删除（1）， 通过（2）， 先审后发（100012）
     */
    ResultCode?: number;
    /**
     * 操作结果备注说明
     */
    ResultMsg?: string;
}
/**
 * 账号风险检测结果
 */
export interface RiskDetails {
    /**
     * 预留字段，暂时不使用
     */
    Keywords?: Array<string>;
    /**
     * 预留字段，暂时不用
     */
    Lable?: string;
    /**
     * 风险类别，RiskAccount，RiskIP, RiskIMEI
     */
    Label?: string;
    /**
     * 风险等级，1:疑似，2：恶意
     */
    Level?: number;
}
/**
 * TextModeration请求参数结构体
 */
export interface TextModerationRequest {
    /**
     * 文本内容Base64编码。原文长度需小于15000字节，即5000个汉字以内。
     */
    Content: string;
    /**
     * 数据ID，英文字母、下划线、-组成，不超过64个字符
     */
    DataId?: string;
    /**
     * 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略
     */
    BizType?: number;
    /**
     * 用户相关信息
     */
    User?: User;
    /**
     * 业务应用ID
     */
    SdkAppId?: number;
    /**
     * 设备相关信息
     */
    Device?: Device;
}
/**
 * OCR识别结果详情
 */
export interface OCRDetect {
    /**
     * 识别到的详细信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Item?: Array<OCRItem>;
    /**
     * 识别到的文本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TextInfo?: string;
}
/**
 * 坐标
 */
export interface Coordinate {
    /**
     * 宽度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Width?: number;
    /**
     * 左上角纵坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cy?: number;
    /**
     * 左上角横坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cx?: number;
    /**
     * 高度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Height?: number;
}
/**
 * 相似度详情
 */
export interface Similar {
    /**
     * 恶意类型
  100：正常
  20001：政治
  20002：色情
  20006：涉毒违法
  20007：谩骂
  24001：暴恐
     */
    EvilType: number;
    /**
     * 处置判定 0：未匹配到 1：恶意 2：白样本
     */
    HitFlag: number;
    /**
     * 返回的种子url
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SeedUrl: string;
}
/**
 * 手机模型识别检测
 */
export interface PhoneDetect {
    /**
     * 恶意类型
  100：正常
  21000：综合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EvilType?: number;
    /**
     * 特征中文描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<string>;
    /**
     * 分值范围 0-100，分数越高倾向越明显
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: number;
    /**
     * 处置判定 0：正常 1：可疑
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HitFlag?: number;
}
/**
 * 图片性感详情
 */
export interface ImageHotDetect {
    /**
     * 关键词明细
     */
    Keywords?: Array<string>;
    /**
     * 恶意类型
  100：正常
  20103：性感
     */
    EvilType: number;
    /**
     * 性感标签：性感特征中文描述
     */
    Labels?: Array<string>;
    /**
     * 性感分：分值范围 0-100，分数越高性感倾向越明显
     */
    Score?: number;
    /**
     * 处置判定 0：正常 1：可疑
     */
    HitFlag: number;
}
/**
 * 消息类输出公共参数
 */
export interface TextOutputComm {
    /**
     * 接口唯一ID，旁路调用接口返回有该字段，标识唯一接口
     */
    BUCtrlID?: number;
    /**
     * 消息发送时间
     */
    SendTime?: number;
    /**
     * 接入业务的唯一ID
     */
    AppID?: number;
    /**
     * 请求字段里的Common.Uin
     */
    Uin?: number;
}
/**
 * 关键词库信息
 */
export interface KeywordsLibInfo {
    /**
     * 关键词库ID
     */
    ID: string;
    /**
     * 关键词库名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LibName: string;
    /**
     * 关键词库描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Describe: string;
    /**
     * 关键词库创建时间
     */
    CreateTime: string;
    /**
     * 审核建议(Review/Block)
     */
    Suggestion: string;
    /**
     * 匹配模式(ExactMatch/FuzzyMatch)
     */
    MatchType: string;
    /**
     * 关联策略BizType列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizTypes?: Array<string>;
}
/**
 * 从图片中检测到的二维码，可能为多个
 */
export interface CodeDetail {
    /**
     * 二维码文本的编码格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StrCharset?: string;
    /**
     * 二维码在图片中的位置，由边界点的坐标表示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QrCodePosition?: Array<CodePosition>;
    /**
     * 二维码的文本内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StrQrCodeText?: string;
    /**
     * 二维码的类型：1:ONED_BARCODE，2:QRCOD，3:WXCODE，4:PDF417，5:DATAMATRIX
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uint32QrCodeType?: number;
    /**
     * 二维码文本的编码格式（已废弃）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CodeCharset?: string;
    /**
     * 二维码在图片中的位置，由边界点的坐标表示（已废弃）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CodePosition?: Array<CodePosition>;
    /**
     * 二维码的文本内容（已废弃）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CodeText?: string;
    /**
     * 二维码的类型：1:ONED_BARCODE，2:QRCOD，3:WXCODE，4:PDF417，5:DATAMATRIX（已废弃）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CodeType?: number;
}
/**
 * 添加关键词。
 */
export interface UserKeyword {
    /**
     * 关键词内容：最多40个字符，并且符合词类型的规则
     */
    Content: string;
    /**
     * 关键词类型，取值范围为："Normal","Polity","Porn","Ad","Illegal","Abuse","Terror","Spam"
     */
    Label: string;
    /**
     * 关键词备注：最多100个字符。
     */
    Remark?: string;
    /**
     * 词类型：Default,Pinyin,English,CompoundWord,ExclusionWord,AffixWord
     */
    WordType?: string;
}
/**
 * 图片涉政详情
 */
export interface ImagePolityDetect {
    /**
     * 恶意类型
  100：正常
  20001：政治
     */
    EvilType: number;
    /**
     * 处置判定  0：正常 1：可疑
     */
    HitFlag: number;
    /**
     * 命中的人脸名称
     */
    FaceNames?: Array<string>;
    /**
     * 命中的logo标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolityLogoDetail?: Array<Logo>;
    /**
     * 命中的政治物品名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolityItems?: Array<string>;
    /**
     * 政治（人脸）分：分值范围 0-100，分数越高可疑程度越高
     */
    Score?: number;
    /**
     * 关键词明细
     */
    Keywords?: Array<string>;
}
/**
 * OCR详情
 */
export interface OCRItem {
    /**
     * 检测到的文本坐标信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TextPosition?: Coordinate;
    /**
     * 文本命中恶意违规类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EvilType?: number;
    /**
     * 检测到的文本信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TextContent?: string;
    /**
     * 文本涉嫌违规分值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rate?: number;
    /**
     * 文本命中具体标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EvilLabel?: string;
    /**
     * 文本命中违规的关键词
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Keywords?: Array<string>;
}
/**
 * 图片违法详情
 */
export interface ImageIllegalDetect {
    /**
     * 恶意类型
  100：正常
  20006：涉毒违法
     */
    EvilType: number;
    /**
     * 处置判定 0：正常 1：可疑
     */
    HitFlag: number;
    /**
     * 关键词明细
     */
    Keywords?: Array<string>;
    /**
     * 违法标签：返回违法特征中文描述，如赌桌，枪支
     */
    Labels?: Array<string>;
    /**
     * 违法分：分值范围 0-100，分数越高违法倾向越明显
     */
    Score?: number;
}
/**
 * logo位置信息
 */
export interface RrectF {
    /**
     * logo图标宽度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Width?: number;
    /**
     * logo纵坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cy?: number;
    /**
     * logo横坐标
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Cx?: number;
    /**
     * logo图标中心旋转度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rotate?: number;
    /**
     * logo图标高度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Height?: number;
}
/**
 * DeleteLibSamples请求参数结构体
 */
export interface DeleteLibSamplesRequest {
    /**
     * 关键词ID列表
     */
    SampleIDs: Array<string>;
    /**
     * 词库ID
     */
    LibID?: string;
    /**
     * 关键词内容列表
     */
    SampleContents?: Array<string>;
}
/**
 * 入参过滤条件
 */
export interface Filters {
    /**
     * 查询字段
     */
    Name: string;
    /**
     * 查询值
     */
    Values: Array<string>;
}
/**
 * Logo命中详情
 */
export interface LogoDetail {
    /**
     * 命中的Applogo详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppLogoDetail?: Array<Logo>;
}
/**
 * Logo审核结果
 */
export interface Logo {
    /**
     * logo图标置信度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence?: number;
    /**
     * logo图标坐标信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RrectF?: RrectF;
    /**
     * logo图标名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
}
/**
 * DescribeKeywordsLibs返回参数结构体
 */
export interface DescribeKeywordsLibsResponse {
    /**
     * 词库记录数
     */
    TotalCount?: number;
    /**
     * 词库详情
     */
    Infos?: Array<KeywordsLibInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图片涉黄详情
 */
export interface ImagePornDetect {
    /**
     * 恶意类型
  100：正常
  20002：色情
     */
    EvilType: number;
    /**
     * 处置判定 0：正常 1：可疑
     */
    HitFlag: number;
    /**
     * 关键词明细
     */
    Keywords?: Array<string>;
    /**
     * 色情标签：色情特征中文描述
     */
    Labels?: Array<string>;
    /**
     * 色情分：分值范围 0-100，分数越高色情倾向越明显
     */
    Score?: number;
}
