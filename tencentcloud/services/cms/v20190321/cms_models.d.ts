/**
 * 文本返回的自定义词库结果
 */
export interface CustomResult {
    /**
      * 命中的自定义关键词
      */
    Keywords?: Array<string>;
    /**
      * 自定义库id
      */
    LibId?: string;
    /**
      * 自定义词库名称
      */
    LibName?: string;
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
      * 是否恶意 0：正常 1：可疑
      */
    EvilFlag: number;
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
      * 消息类公共相关参数
      */
    Common?: TextOutputComm;
    /**
      * 返回的自定义词库结果
      */
    CustomResult?: Array<CustomResult>;
    /**
      * 返回的详细结果
      */
    DetailResult?: Array<DetailResult>;
    /**
      * 消息类ID信息
      */
    ID?: TextOutputID;
    /**
      * 消息类输出结果
      */
    Res?: TextOutputRes;
    /**
      * 账号风险检测结果
      */
    RiskDetails?: Array<RiskDetails>;
    /**
      * 最终使用的BizType
      */
    BizType?: number;
    /**
      * 和请求中的DataId一致，原样返回
      */
    DataId?: string;
    /**
      * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
      */
    EvilLabel?: string;
    /**
      * 输出的其他信息，不同客户内容不同
      */
    Extra?: string;
    /**
      * 命中的关键词
      */
    Keywords?: Array<string>;
    /**
      * 命中的模型分值
      */
    Score?: number;
    /**
      * 建议值,Block：打击,Review：待复审,Normal：正常
      */
    Suggestion?: string;
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
      * 设备相关信息
      */
    Device?: Device;
    /**
      * 用户相关信息
      */
    User?: User;
    /**
      * 该字段用于标识业务场景。您可以在内容安全控制台创建对应的ID，配置不同的内容审核策略，通过接口调用，默认不填为0，后端使用默认策略
      */
    BizType?: number;
    /**
      * 数据ID，英文字母、下划线、-组成，不超过64个字符
      */
    DataId?: string;
    /**
      * 业务应用ID
      */
    SdkAppId?: number;
}
/**
 * 文本返回的详细结果
 */
export interface DetailResult {
    /**
      * 恶意标签，Normal：正常，Polity：涉政，Porn：色情，Illegal：违法，Abuse：谩骂，Terror：暴恐，Ad：广告，Custom：自定义关键词
      */
    EvilLabel?: string;
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
      * 该标签下命中的关键词
      */
    Keywords?: Array<string>;
    /**
      * 该标签模型命中的分值
      */
    Score?: number;
}
/**
 * ImageModeration返回参数结构体
 */
export interface ImageModerationResponse {
    /**
      * 识别结果
      */
    Data?: ImageData;
    /**
      * 业务返回码
      */
    BusinessCode?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * TextModeration返回参数结构体
 */
export interface TextModerationResponse {
    /**
      * 识别结果
      */
    Data?: TextData;
    /**
      * 业务返回码
      */
    BusinessCode?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ImageModeration请求参数结构体
 */
export interface ImageModerationRequest {
    /**
      * 文件内容 Base64,与FileUrl必须二填一
      */
    FileContent?: string;
    /**
      * 文件MD5值
      */
    FileMD5?: string;
    /**
      * 文件地址
      */
    FileUrl?: string;
}
/**
 * CreateFileSample请求参数结构体
 */
export interface CreateFileSampleRequest {
    /**
      * 文件类型结构数组
      */
    Contents: Array<FileSample>;
    /**
      * 恶意类型
100：正常
20001：政治
20002：色情
20006：涉毒违法
20007：谩骂
24001：暴恐
20105：广告引流
      */
    EvilType: number;
    /**
      * image：图片
      */
    FileType: string;
    /**
      * 样本类型
1：黑库
2：白库
      */
    Label: number;
}
/**
 * 图片识别结果详情
 */
export interface ImageData {
    /**
      * 是否恶意 0：正常 1：可疑
      */
    EvilFlag: number;
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
      * 图片二维码详情
      */
    CodeDetect?: CodeDetect;
    /**
      * 图片性感详情
      */
    HotDetect?: ImageHotDetect;
    /**
      * 图片违法详情
      */
    IllegalDetect?: ImageIllegalDetect;
    /**
      * logo详情
      */
    LogoDetect?: LogoDetail;
    /**
      * 图片OCR详情
      */
    OCRDetect?: OCRDetect;
    /**
      * 手机检测详情
      */
    PhoneDetect?: PhoneDetect;
    /**
      * 图片涉政详情
      */
    PolityDetect?: ImagePolityDetect;
    /**
      * 图片涉黄详情
      */
    PornDetect?: ImagePornDetect;
    /**
      * 图片相似度详情
      */
    Similar?: Similar;
    /**
      * 图片暴恐详情
      */
    TerrorDetect?: ImageTerrorDetect;
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
/**
 * DeleteTextSample返回参数结构体
 */
export interface DeleteTextSampleResponse {
    /**
      * 任务状态
1：已完成
2：处理中
      */
    Progress?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文字样本信息
 */
export interface TextSample {
    /**
      * 处理错误码
      */
    Code: number;
    /**
      * 关键词
      */
    Content: string;
    /**
      * 创建时间戳
      */
    CreatedAt: number;
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
      * 唯一标识
      */
    Id: string;
    /**
      * 样本类型
1：黑库
2：白库
      */
    Label: number;
    /**
      * 任务状态
1：已完成
2：处理中
      */
    Status: number;
}
/**
 * CreateTextSample返回参数结构体
 */
export interface CreateTextSampleResponse {
    /**
      * 操作样本失败时返回的错误信息示例：  "样本1":错误码，"样本2":错误码
      */
    ErrMsg?: string;
    /**
      * 任务状态
1：已完成
2：处理中
      */
    Progress?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * ManualReview请求参数结构体
 */
export interface ManualReviewRequest {
    /**
      * 人工审核信息
      */
    ReviewContent: ManualReviewContent;
}
/**
 * 用户相关信息
 */
export interface User {
    /**
      * 账号类别，"1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
      */
    AccountType?: number;
    /**
      * 年龄 默认0 未知
      */
    Age?: number;
    /**
      * 性别 默认0 未知 1 男性 2 女性
      */
    Gender?: number;
    /**
      * 用户等级，默认0 未知 1 低 2 中 3 高
      */
    Level?: number;
    /**
      * 用户昵称
      */
    Nickname?: string;
    /**
      * 手机号
      */
    Phone?: string;
    /**
      * 用户账号ID，如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
      */
    UserId?: string;
}
/**
 * 文件样本返回信息
 */
export interface FileSampleInfo {
    /**
      * 处理错误码
      */
    Code: number;
    /**
      * 创建时间戳
      */
    CreatedAt: number;
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
      * 文件的md5
      */
    FileMd5: string;
    /**
      * 文件名称
      */
    FileName: string;
    /**
      * 文件类型
      */
    FileType: string;
    /**
      * 唯一标识
      */
    Id: string;
    /**
      * 样本类型
1：黑库
2：白库
      */
    Label: number;
    /**
      * 任务状态
1：添加完成
2：添加处理中
3：下载中
4：下载完成
5：上传完成
6：步骤完成
      */
    Status: number;
    /**
      * 文件压缩后云url
      */
    CompressFileUrl?: string;
    /**
      * 文件的url
      */
    FileUrl?: string;
}
/**
 * DescribeFileSample请求参数结构体
 */
export interface DescribeFileSampleRequest {
    /**
      * 支持通过标签值进行筛选
      */
    Filters?: Array<Filter>;
    /**
      * 数量限制，默认为20，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 升序（asc）还是降序（desc），默认：desc
      */
    OrderDirection?: string;
    /**
      * 按某个字段排序，目前仅支持CreatedAt排序
      */
    OrderField?: string;
}
/**
 * 设备信息
 */
export interface Device {
    /**
      * 设备指纹ID
      */
    DeviceId?: string;
    /**
      * IOS设备，Identifier For Advertising（广告标识符）
      */
    IDFA?: string;
    /**
      * IOS设备，IDFV - Identifier For Vendor（应用开发商标识符）
      */
    IDFV?: string;
    /**
      * 设备序列号
      */
    IMEI?: string;
    /**
      * 用户IP
      */
    IP?: string;
    /**
      * Mac地址
      */
    Mac?: string;
    /**
      * 设备指纹Token
      */
    TokenId?: string;
}
/**
 * 图片二维码详情
 */
export interface CodeDetect {
    /**
      * 从图片中检测到的二维码，可能为多个
      */
    ModerationDetail?: Array<CodeDetail>;
    /**
      * 检测是否成功，0：成功，-1：出错
      */
    ModerationCode?: number;
}
/**
 * 图片暴恐详情
 */
export interface ImageTerrorDetect {
    /**
      * 恶意类型
100：正常
24001：暴恐
      */
    EvilType?: number;
    /**
      * 处置判定 0：正常 1：可疑
      */
    HitFlag?: number;
    /**
      * 关键词明细
      */
    Keywords?: Array<string>;
    /**
      * 暴恐标签：返回暴恐特征中文描述
      */
    Labels?: Array<string>;
    /**
      * 暴恐分：分值范围0--100，分数越高暴恐倾向越明显
      */
    Score?: number;
}
/**
 * DescribeTextSample返回参数结构体
 */
export interface DescribeTextSampleResponse {
    /**
      * 符合要求的样本的信息
      */
    TextSampleSet?: Array<TextSample>;
    /**
      * 符合要求的样本的数量
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 二维码在图片中的位置，由边界点的坐标表示
 */
export interface CodePosition {
    /**
      * 二维码边界点X轴坐标
      */
    FloatX?: number;
    /**
      * 二维码边界点Y轴坐标
      */
    FloatY?: number;
}
/**
 * DeleteFileSample返回参数结构体
 */
export interface DeleteFileSampleResponse {
    /**
      * 任务状态
1：已完成
2：处理中
      */
    Progress?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文件类型样本
 */
export interface FileSample {
    /**
      * 文件md5
      */
    FileMd5: string;
    /**
      * 文件名称
      */
    FileName: string;
    /**
      * 文件url
      */
    FileUrl: string;
    /**
      * 文件压缩后云url
      */
    CompressFileUrl?: string;
}
/**
 * DescribeFileSample返回参数结构体
 */
export interface DescribeFileSampleResponse {
    /**
      * 符合要求的样本的信息
      */
    FileSampleSet?: Array<FileSampleInfo>;
    /**
      * 符合要求的样本的数量
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 恶意操作码，
删除（1）， 通过（2）， 先审后发（100012）
      */
    ResultCode?: number;
    /**
      * 操作结果备注说明
      */
    ResultMsg?: string;
    /**
      * 恶意类型，广告（10001）， 政治（20001）， 色情（20002）， 社会事件（20004）， 暴力（20011）， 低俗（20012）， 违法犯罪（20006）， 欺诈（20008）， 版权（20013）， 谣言（20104）， 其他（21000）
      */
    ResultType?: number;
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
      * 风险类别，RiskAccount，RiskIP, RiskIMEI
      */
    Label?: string;
    /**
      * 预留字段，暂时不用
      */
    Lable?: string;
    /**
      * 风险等级，1:疑似，2：恶意
      */
    Level?: number;
}
/**
 * CreateTextSample请求参数结构体
 */
export interface CreateTextSampleRequest {
    /**
      * 关键词数组
      */
    Contents: Array<string>;
    /**
      * 恶意类型
100：正常
20001：政治
20002：色情
20006：涉毒违法
20007：谩骂
24001：暴恐
20105：广告引流
      */
    EvilType: number;
    /**
      * 样本类型
1：黑库
2：白库
      */
    Label: number;
    /**
      * 测试修改参数
      */
    Test?: string;
}
/**
 * DeleteFileSample请求参数结构体
 */
export interface DeleteFileSampleRequest {
    /**
      * 唯一标识数组
      */
    Ids: Array<string>;
}
/**
 * 筛选数据结构
 */
export interface Filter {
    /**
      * 需要过滤的字段
      */
    Name: string;
    /**
      * 需要过滤字段的值
      */
    Value: string;
}
/**
 * 人工审核接口返回结果，由ContentId和BatchId组成
 */
export interface ManualReviewData {
    /**
      * 人审内容批次号
      */
    BatchId: string;
    /**
      * 人审内容ID
      */
    ContentId: string;
}
/**
 * OCR识别结果详情
 */
export interface OCRDetect {
    /**
      * 识别到的详细信息
      */
    Item?: Array<OCRItem>;
    /**
      * 识别到的文本信息
      */
    TextInfo?: string;
}
/**
 * 人审审核数据相关信息
 */
export interface ManualReviewContent {
    /**
      * 审核批次号
      */
    BatchId: string;
    /**
      * 审核内容
      */
    Content: string;
    /**
      * 消息Id
      */
    ContentId: string;
    /**
      * 审核内容类型 1 图片 2 视频 3 文本 4 音频
      */
    ContentType: number;
    /**
      * 用户信息
      */
    UserInfo?: User;
    /**
      * 机器审核类型，与腾讯机器审核定义一致
100 正常
20001 政治
20002 色情
20006 违法
20007 谩骂
24001 暴恐
20105 广告
20103 性感
      */
    AutoDetailCode?: number;
    /**
      * 机器审核结果 0 放过 1 拦截
      */
    AutoResult?: number;
    /**
      * 回调信息标识，回传数据时原样返回
      */
    CallBackInfo?: string;
    /**
      * 创建时间 格式“2020-01-01 00:00:12”
      */
    CreateTime?: string;
    /**
      * 审核优先级，可选值 [1,2,3,4]，其中 1 最高，4 最低
      */
    Priority?: number;
    /**
      * 标题
      */
    Title?: string;
}
/**
 * 坐标
 */
export interface Coordinate {
    /**
      * 左上角横坐标
      */
    Cx?: number;
    /**
      * 左上角纵坐标
      */
    Cy?: number;
    /**
      * 高度
      */
    Height?: number;
    /**
      * 宽度
      */
    Width?: number;
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
      */
    SeedUrl: string;
}
/**
 * 图片性感详情
 */
export interface ImageHotDetect {
    /**
      * 恶意类型
100：正常
20103：性感
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
      * 性感标签：性感特征中文描述
      */
    Labels?: Array<string>;
    /**
      * 性感分：分值范围 0-100，分数越高性感倾向越明显
      */
    Score?: number;
}
/**
 * 消息类输出公共参数
 */
export interface TextOutputComm {
    /**
      * 接入业务的唯一ID
      */
    AppID?: number;
    /**
      * 接口唯一ID，旁路调用接口返回有该字段，标识唯一接口
      */
    BUCtrlID?: number;
    /**
      * 消息发送时间
      */
    SendTime?: number;
    /**
      * 请求字段里的Common.Uin
      */
    Uin?: number;
}
/**
 * DescribeTextSample请求参数结构体
 */
export interface DescribeTextSampleRequest {
    /**
      * 支持通过标签值进行筛选
      */
    Filters?: Array<Filter>;
    /**
      * 数量限制，默认为20，最大值为100
      */
    Limit?: number;
    /**
      * 偏移量，默认为0
      */
    Offset?: number;
    /**
      * 升序（asc）还是降序（desc），默认：desc
      */
    OrderDirection?: string;
    /**
      * 按某个字段排序，目前仅支持CreatedAt排序
      */
    OrderField?: string;
}
/**
 * 从图片中检测到的二维码，可能为多个
 */
export interface CodeDetail {
    /**
      * 二维码在图片中的位置，由边界点的坐标表示
      */
    CodePosition?: Array<CodePosition>;
    /**
      * 二维码文本的编码格式
      */
    CodeCharset?: string;
    /**
      * 二维码的文本内容
      */
    CodeText?: string;
    /**
      * 二维码的类型：1:ONED_BARCODE，2:QRCOD，3:WXCODE，4:PDF417，5:DATAMATRIX
      */
    CodeType?: number;
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
      * 命中的logo标签信息
      */
    PolityLogoDetail?: Array<Logo>;
    /**
      * 命中的人脸名称
      */
    FaceNames?: Array<string>;
    /**
      * 关键词明细
      */
    Keywords?: Array<string>;
    /**
      * 命中的政治物品名称
      */
    PolityItems?: Array<string>;
    /**
      * 政治（人脸）分：分值范围 0-100，分数越高可疑程度越高
      */
    Score?: number;
}
/**
 * OCR详情
 */
export interface OCRItem {
    /**
      * 检测到的文本坐标信息
      */
    TextPosition?: Coordinate;
    /**
      * 文本命中具体标签
      */
    EvilLabel?: string;
    /**
      * 文本命中恶意违规类型
      */
    EvilType?: number;
    /**
      * 文本命中违规的关键词
      */
    Keywords?: Array<string>;
    /**
      * 文本涉嫌违规分值
      */
    Rate?: number;
    /**
      * 检测到的文本信息
      */
    TextContent?: string;
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
      * logo横坐标
      */
    Cx?: number;
    /**
      * logo纵坐标
      */
    Cy?: number;
    /**
      * logo图标高度
      */
    Height?: number;
    /**
      * logo图标中心旋转度
      */
    Rotate?: number;
    /**
      * logo图标宽度
      */
    Width?: number;
}
/**
 * CreateFileSample返回参数结构体
 */
export interface CreateFileSampleResponse {
    /**
      * 任务状态
1：已完成
2：处理中
      */
    Progress?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ManualReview返回参数结构体
 */
export interface ManualReviewResponse {
    /**
      * 人审接口同步响应结果
      */
    Data?: ManualReviewData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * LogoDetail
 */
export interface LogoDetail {
    /**
      * 命中的Applogo详情
      */
    AppLogoDetail?: Array<Logo>;
}
/**
 * Logo
 */
export interface Logo {
    /**
      * logo图标坐标信息
      */
    RrectF?: RrectF;
    /**
      * logo图标置信度
      */
    Confidence?: number;
    /**
      * logo图标名称
      */
    Name?: string;
}
/**
 * 手机模型识别检测
 */
export interface PhoneDetect {
    /**
      * 恶意类型
100：正常
21000：综合
      */
    EvilType?: number;
    /**
      * 处置判定 0：正常 1：可疑
      */
    HitFlag?: number;
    /**
      * 特征中文描述
      */
    Labels?: Array<string>;
    /**
      * 分值范围 0-100，分数越高倾向越明显
      */
    Score?: number;
}
/**
 * DeleteTextSample请求参数结构体
 */
export interface DeleteTextSampleRequest {
    /**
      * 唯一标识数组，目前暂时只支持单个删除
      */
    Ids: Array<string>;
}
