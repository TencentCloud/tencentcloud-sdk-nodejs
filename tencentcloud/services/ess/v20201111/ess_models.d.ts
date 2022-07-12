/**
 * 此结构体 (UploadFile) 用于描述多文件上传的文件信息。
 */
export interface UploadFile {
    /**
      * Base64编码后的文件内容
      */
    FileBody: string;
    /**
      * 文件名，最大长度不超过200字符
      */
    FileName?: string;
}
/**
 * CancelMultiFlowSignQRCode请求参数结构体
 */
export interface CancelMultiFlowSignQRCodeRequest {
    /**
      * 用户信息
      */
    Operator: UserInfo;
    /**
      * 二维码id
      */
    QrCodeId: string;
    /**
      * 应用信息
      */
    Agent?: Agent;
}
/**
 * DescribeFileUrls返回参数结构体
 */
export interface DescribeFileUrlsResponse {
    /**
      * URL信息
      */
    FileUrls: Array<FileUrl>;
    /**
      * URL数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 二期接口返回的模板的信息结构
 */
export interface TemplateInfo {
    /**
      * 模板ID
      */
    TemplateId?: string;
    /**
      * 模板名字
      */
    TemplateName?: string;
    /**
      * 模板描述信息
      */
    Description?: string;
    /**
      * 模板关联的资源IDs
      */
    DocumentResourceIds?: Array<string>;
    /**
      * 返回的文件信息结构
      */
    FileInfos?: Array<FileInfo>;
    /**
      * 附件关联的资源ID是
      */
    AttachmentResourceIds?: Array<string>;
    /**
      * 签署顺序
      */
    SignOrder?: Array<number>;
    /**
      * 签署参与者的信息
      */
    Recipients?: Array<Recipient>;
    /**
      * 模板信息结构
      */
    Components?: Array<Component>;
    /**
      * 签署区模板信息结构
      */
    SignComponents?: Array<Component>;
    /**
      * 模板状态(-1:不可用；0:草稿态；1:正式态)
      */
    Status?: number;
    /**
      * 模板的创建人
      */
    Creator?: string;
    /**
      * 模板创建的时间戳（精确到秒）
      */
    CreatedOn?: number;
    /**
      * 发起人角色信息
      */
    Promoter?: Recipient;
}
/**
 * CreateDocument返回参数结构体
 */
export interface CreateDocumentResponse {
    /**
      * 签署流程电子文档ID
      */
    DocumentId: string;
    /**
      * 签署流程文件的预览地址, 5分钟内有效。仅当NeedPreview为true 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreviewFileUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartFlow请求参数结构体
 */
export interface StartFlowRequest {
    /**
      * 签署流程编号，由CreateFlow接口返回
      */
    FlowId: string;
    /**
      * 用户信息
      */
    Operator: UserInfo;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
    /**
      * 客户端Token，保持接口幂等性,最大长度64个字符
      */
    ClientToken?: string;
}
/**
 * CancelFlow返回参数结构体
 */
export interface CancelFlowResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDocument请求参数结构体
 */
export interface CreateDocumentRequest {
    /**
      * 签署流程编号,由CreateFlow接口返回
      */
    FlowId: string;
    /**
      * 用户上传的模板ID
      */
    TemplateId: string;
    /**
      * 文件名列表,单个文件名最大长度200个字符
      */
    FileNames: Array<string>;
    /**
      * 无
      */
    Operator: UserInfo;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
    /**
      * 内容控件信息数组
      */
    FormFields?: Array<FormField>;
    /**
      * 是否需要生成预览文件 默认不生成；
预览链接有效期300秒；
      */
    NeedPreview?: boolean;
    /**
      * 客户端Token，保持接口幂等性,最大长度64个字符
      */
    ClientToken?: string;
}
/**
 * CreateFlow请求参数结构体
 */
export interface CreateFlowRequest {
    /**
      * 签署流程名称,最大长度200个字符
      */
    FlowName: string;
    /**
      * 签署流程参与者信息
      */
    Approvers: Array<FlowCreateApprover>;
    /**
      * 操作人信息
      */
    Operator: UserInfo;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
    /**
      * 发送类型：
true：无序签
false：有序签
注：默认为false（有序签），请和模板中的配置保持一致
      */
    Unordered?: boolean;
    /**
      * 签署流程的签署截止时间。
值为unix时间戳,精确到秒,不传默认为当前时间一年后
      */
    DeadLine?: number;
    /**
      * 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符
      */
    FlowType?: string;
    /**
      * 用户自定义字段(需进行base64 encode),回调的时候会进行透传, 长度需要小于20480
      */
    UserData?: string;
    /**
      * 签署流程描述,最大长度1000个字符
      */
    FlowDescription?: string;
    /**
      * 客户端Token，保持接口幂等性,最大长度64个字符
      */
    ClientToken?: string;
    /**
      * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
      */
    CustomShowMap?: string;
    /**
      * 暂未开放
      */
    RelatedFlowId?: string;
    /**
      * 暂未开放
      */
    CallbackUrl?: string;
}
/**
 * CreateSchemeUrl请求参数结构体
 */
export interface CreateSchemeUrlRequest {
    /**
      * 调用方用户信息，参考通用结构
      */
    Operator: UserInfo;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
    /**
      * 链接类型
HTTP：跳转电子签小程序的http_url，
APP：第三方APP或小程序跳转电子签小程序的path。
默认为HTTP类型
      */
    EndPoint?: string;
    /**
      * 姓名,最大长度50个字符
      */
    Name?: string;
    /**
      * 手机号，大陆手机号11位
      */
    Mobile?: string;
    /**
      * 企业名称
      */
    OrganizationName?: string;
    /**
      * 签署流程编号 (PathType=1时必传)
      */
    FlowId?: string;
    /**
      * 跳转页面 1: 小程序合同详情 2: 小程序合同列表页 0: 不传, 默认主页
      */
    PathType?: number;
    /**
      * 是否自动回跳 true：是， false：否。该参数只针对"APP" 类型的签署链接有效
      */
    AutoJumpBack?: boolean;
}
/**
 * 下载文件的URL信息
 */
export interface FileUrl {
    /**
      * 下载文件的URL
      */
    Url: string;
    /**
      * 下载文件的附加信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Option: string;
}
/**
 * DescribeThirdPartyAuthCode请求参数结构体
 */
export interface DescribeThirdPartyAuthCodeRequest {
    /**
      * 电子签小程序跳转客户小程序时携带的授权查看码
      */
    AuthCode: string;
}
/**
 * 一码多扫签署二维码对象
 */
export interface SignQrCode {
    /**
      * 二维码id
      */
    QrCodeId: string;
    /**
      * 二维码url
      */
    QrCodeUrl: string;
    /**
      * 二维码过期时间
      */
    ExpiredTime: number;
}
/**
 * UploadFiles请求参数结构体
 */
export interface UploadFilesRequest {
    /**
      * 文件对应业务类型，用于区分文件存储路径：
1. TEMPLATE - 模板； 文件类型：.pdf/.html
2. DOCUMENT - 签署过程及签署后的合同文档 文件类型：.pdf/.html
3. SEAL - 印章； 文件类型：.jpg/.jpeg/.png
      */
    BusinessType: string;
    /**
      * 调用方信息
      */
    Caller?: Caller;
    /**
      * 上传文件内容数组，最多支持20个文件
      */
    FileInfos?: Array<UploadFile>;
    /**
      * 上传文件链接数组，最多支持20个URL
      */
    FileUrls?: string;
    /**
      * 此参数只对 PDF 文件有效。是否将pdf灰色矩阵置白
true--是，处理置白
false--否，不处理
      */
    CoverRect?: boolean;
    /**
      * 文件类型， 默认通过文件内容解析得到文件类型，客户可以显示的说明上传文件的类型。
如：PDF 表示上传的文件 xxx.pdf的文件类型是 PDF
      */
    FileType?: string;
    /**
      * 用户自定义ID数组，与上传文件一一对应
      */
    CustomIds?: Array<string>;
}
/**
 * CancelFlow请求参数结构体
 */
export interface CancelFlowRequest {
    /**
      * 签署流程id
      */
    FlowId: string;
    /**
      * 撤销原因，最长200个字符；
      */
    CancelMessage: string;
    /**
      * 操作用户id
      */
    Operator: UserInfo;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
}
/**
 * DescribeFlowBriefs返回参数结构体
 */
export interface DescribeFlowBriefsResponse {
    /**
      * 流程列表
      */
    FlowBriefs: Array<FlowBrief>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 模板控件信息
 */
export interface Component {
    /**
      * 如果是 Component 控件类型，则可选类型为：
TEXT - 内容文本控件
DATE - 内容日期控件
CHECK_BOX - 勾选框控件
如果是 SignComponent 控件类型，则可选类型为：
SIGN_SEAL - 签署印章控件
SIGN_DATE - 签署日期控件
SIGN_SIGNATURE - 手写签名控件
      */
    ComponentType: string;
    /**
      * 参数控件宽度，单位pt
      */
    ComponentWidth: number;
    /**
      * 参数控件高度，单位pt
      */
    ComponentHeight: number;
    /**
      * 参数控件所在页码，取值为：1-N
      */
    ComponentPage: number;
    /**
      * 参数控件X位置，单位pt
      */
    ComponentPosX: number;
    /**
      * 参数控件Y位置，单位pt
      */
    ComponentPosY: number;
    /**
      * 控件所属文件的序号（模板中的resourceId排列序号，取值为：0-N）
      */
    FileIndex: number;
    /**
      * GenerateMode==KEYWORD 指定关键字
      */
    ComponentId?: string;
    /**
      * GenerateMode==FIELD 指定表单域名称
      */
    ComponentName?: string;
    /**
      * 是否必选，默认为false
      */
    ComponentRequired?: boolean;
    /**
      * 扩展参数：
ComponentType为SIGN_SIGNATURE类型可以控制签署方式
{“ComponentTypeLimit”: [“xxx”]}
xxx可以为：
HANDWRITE – 手写签名
BORDERLESS_ESIGN – 自动生成无边框腾讯体
OCR_ESIGN -- AI智能识别手写签名
ESIGN -- 个人印章类型
如：{“ComponentTypeLimit”: [“BORDERLESS_ESIGN”]}
      */
    ComponentExtra?: string;
    /**
      * 控件关联的签署人ID
      */
    ComponentRecipientId?: string;
    /**
      * 控件所填写的内容
      */
    ComponentValue?: string;
    /**
      * 是否是表单域类型，默认不存在
      */
    IsFormType?: boolean;
    /**
      * NORMAL 正常模式，使用坐标制定签署控件位置
FIELD 表单域，需使用ComponentName指定表单域名称
KEYWORD 关键字，使用ComponentId指定关键字
      */
    GenerateMode?: string;
    /**
      * 日期控件类型字号
      */
    ComponentDateFontSize?: number;
    /**
      * 指定关键字时横坐标偏移量，单位pt
      */
    OffsetX?: number;
    /**
      * 指定关键字时纵坐标偏移量，单位pt
      */
    OffsetY?: number;
}
/**
 * CreateMultiFlowSignQRCode返回参数结构体
 */
export interface CreateMultiFlowSignQRCodeResponse {
    /**
      * 签署二维码对象
      */
    QrCode: SignQrCode;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 创建流程的签署方信息
 */
export interface FlowCreateApprover {
    /**
      * 参与者类型：
0：企业
1：个人
3：企业静默签署
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。
      */
    ApproverType: number;
    /**
      * 如果签署方为企业，需要填入企业全称
      */
    OrganizationName?: string;
    /**
      * 签署方经办人姓名
      */
    ApproverName?: string;
    /**
      * 签署方经办人手机号码
      */
    ApproverMobile?: string;
    /**
      * 签署方经办人证件类型ID_CARD 身份证
HONGKONG_AND_MACAO 港澳居民来往内地通行证
HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
      */
    ApproverIdCardType?: string;
    /**
      * 签署方经办人证件号码
      */
    ApproverIdCardNumber?: string;
    /**
      * 签署方经办人在模板中的角色ID
      */
    RecipientId?: string;
    /**
      * 签署意愿确认渠道,WEIXINAPP:人脸识别
      */
    VerifyChannel?: Array<string>;
    /**
      * 是否发送短信，sms--短信通知，none--不通知，默认为sms
      */
    NotifyType?: string;
    /**
      * 签署前置条件：是否需要阅读全文，默认为不需要
      */
    IsFullText?: boolean;
    /**
      * 签署前置条件：阅读时长限制，默认为不需要
      */
    PreReadTime?: number;
    /**
      * 签署方经办人的用户ID,和签署方经办人姓名+手机号+证件必须有一个
      */
    UserId?: string;
    /**
      * 当前只支持true，默认为true
      */
    Required?: boolean;
}
/**
 * UploadFiles返回参数结构体
 */
export interface UploadFilesResponse {
    /**
      * 文件id数组
      */
    FileIds: Array<string>;
    /**
      * 上传成功文件数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeThirdPartyAuthCode返回参数结构体
 */
export interface DescribeThirdPartyAuthCodeResponse {
    /**
      * 用户是否实名，VERIFIED 为实名，UNVERIFIED 未实名
      */
    VerifyStatus: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateFlowByFiles返回参数结构体
 */
export interface CreateFlowByFilesResponse {
    /**
      * 签署流程编号
      */
    FlowId: string;
    /**
      * 合同预览链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreviewUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFlowBriefs请求参数结构体
 */
export interface DescribeFlowBriefsRequest {
    /**
      * 需要查询的流程ID列表
      */
    FlowIds: Array<string>;
    /**
      * 操作人信息
      */
    Operator: UserInfo;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
}
/**
 * 签署参与者信息
 */
export interface Recipient {
    /**
      * 签署参与者ID
      */
    RecipientId?: string;
    /**
      * 参与者类型（ENTERPRISE/INDIVIDUAL）
      */
    RecipientType?: string;
    /**
      * 描述信息
      */
    Description?: string;
    /**
      * 角色名称
      */
    RoleName?: string;
    /**
      * 是否需要验证，默认为false
      */
    RequireValidation?: boolean;
    /**
      * 是否需要签署，默认为true
      */
    RequireSign?: boolean;
    /**
      * 添加序列
      */
    RoutingOrder?: number;
    /**
      * 是否需要发送，默认为true
      */
    RequireDelivery?: boolean;
    /**
      * 邮箱地址
      */
    Email?: string;
    /**
      * 电话号码
      */
    Mobile?: string;
    /**
      * 关联的用户ID
      */
    UserId?: string;
    /**
      * 发送方式（EMAIL/MOBILE）
      */
    DeliveryMethod?: string;
    /**
      * 附属信息
      */
    RecipientExtra?: string;
}
/**
 * DescribeFileUrls请求参数结构体
 */
export interface DescribeFileUrlsRequest {
    /**
      * 文件对应的业务类型，目前支持：
- 模板 "TEMPLATE"
- 文档 "DOCUMENT"
- 印章  “SEAL”
- 流程 "FLOW"
      */
    BusinessType: string;
    /**
      * 业务编号的数组，如模板编号、文档编号、印章编号
最大支持20个资源
      */
    BusinessIds: Array<string>;
    /**
      * 操作者信息
      */
    Operator: UserInfo;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
    /**
      * 下载后的文件命名，只有fileType为zip的时候生效
      */
    FileName?: string;
    /**
      * 文件类型，"JPG", "PDF","ZIP"等
      */
    FileType?: string;
    /**
      * 指定资源起始偏移量，默认0
      */
    Offset?: number;
    /**
      * 指定资源数量，查询全部资源则传入-1
      */
    Limit?: number;
    /**
      * 下载url过期时间，单位秒。0: 按默认值5分钟，允许范围：1s~24x60x60s(1天)
      */
    UrlTtl?: number;
    /**
      * 暂不开放
      */
    Scene?: string;
    /**
      * 暂不开放
      */
    CcToken?: string;
}
/**
 * 参与者信息
 */
export interface ApproverInfo {
    /**
      * 参与者类型：
0：企业
1：个人
3：企业静默签署
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。
      */
    ApproverType: number;
    /**
      * 本环节需要操作人的名字
      */
    ApproverName: string;
    /**
      * 本环节需要操作人的手机号
      */
    ApproverMobile: string;
    /**
      * 本环节操作人签署控件配置，为企业静默签署时，只允许类型为SIGN_SEAL（印章）和SIGN_DATE（日期）控件，并且传入印章编号。
      */
    SignComponents: Array<Component>;
    /**
      * 如果是企业,则为企业的名字
      */
    OrganizationName?: string;
    /**
      * 身份证号
      */
    ApproverIdCardNumber?: string;
    /**
      * 证件类型
ID_CARD 身份证
HONGKONG_AND_MACAO 港澳居民来往内地通行证
HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
      */
    ApproverIdCardType?: string;
    /**
      * sms--短信，none--不通知
      */
    NotifyType?: string;
    /**
      * 1--收款人、2--开具人、3--见证人
      */
    ApproverRole?: number;
    /**
      * 签署意愿确认渠道,WEIXINAPP:人脸识别
      */
    VerifyChannel?: Array<string>;
    /**
      * 合同的强制预览时间：3~300s，未指定则按合同页数计算
      */
    PreReadTime?: number;
}
/**
 * 此结构体 (Caller) 用于描述调用方属性。
 */
export interface Caller {
    /**
      * 应用号
      */
    ApplicationId?: string;
    /**
      * 主机构ID
      */
    OrganizationId?: string;
    /**
      * 经办人的用户ID
      */
    OperatorId?: string;
    /**
      * 下属机构ID
      */
    SubOrganizationId?: string;
}
/**
 * DescribeFlowTemplates返回参数结构体
 */
export interface DescribeFlowTemplatesResponse {
    /**
      * 模板详情列表
      */
    Templates: Array<TemplateInfo>;
    /**
      * 查询到的总个数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询过滤条件
 */
export interface Filter {
    /**
      * 查询过滤条件的Key
      */
    Key: string;
    /**
      * 查询过滤条件的Value列表
      */
    Values: Array<string>;
}
/**
 * 二期接口返回的模板中文件的信息结构
 */
export interface FileInfo {
    /**
      * 文件Id
      */
    FileId?: string;
    /**
      * 文件名
      */
    FileName?: string;
    /**
      * 文件大小，单位为Byte
      */
    FileSize?: number;
    /**
      * 文件上传时间，10位时间戳（精确到秒）
      */
    CreatedOn?: number;
}
/**
 * CreateMultiFlowSignQRCode请求参数结构体
 */
export interface CreateMultiFlowSignQRCodeRequest {
    /**
      * 模板ID
      */
    TemplateId: string;
    /**
      * 签署流程名称，最大长度不超过200字符
      */
    FlowName: string;
    /**
      * 用户信息
      */
    Operator: UserInfo;
    /**
      * 应用信息
      */
    Agent?: Agent;
    /**
      * 回调地址,最大长度1000字符串
回调时机：
用户通过签署二维码发起签署流程时，企业额度不足导致失败
      */
    CallbackUrl?: string;
    /**
      * 最大可发起签署流程份数，默认5份
发起流程数量超过此上限后二维码自动失效
      */
    MaxFlowNum?: number;
    /**
      * 签署流程有效天数 默认7天 最高设置不超过30天
      */
    FlowEffectiveDay?: number;
    /**
      * 二维码有效天数 默认7天 最高设置不超过90天
      */
    QrEffectiveDay?: number;
}
/**
 * StartFlow返回参数结构体
 */
export interface StartFlowResponse {
    /**
      * 返回描述，START-发起成功， REVIEW-提交审核成功，EXECUTING-已提交发起任务
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSchemeUrl返回参数结构体
 */
export interface CreateSchemeUrlResponse {
    /**
      * 小程序链接地址
      */
    SchemeUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateFlowByFiles请求参数结构体
 */
export interface CreateFlowByFilesRequest {
    /**
      * 签署流程名称,最大长度200个字符
      */
    FlowName: string;
    /**
      * 签署参与者信息
      */
    Approvers: Array<ApproverInfo>;
    /**
      * 签署pdf文件的资源编号列表，通过UploadFiles接口获取
      */
    FileIds: Array<string>;
    /**
      * 调用方用户信息
      */
    Operator: UserInfo;
    /**
      * 应用号信息
      */
    Agent?: Agent;
    /**
      * 经办人内容控件配置。可选类型为：
TEXT - 内容文本控件
MULTI_LINE_TEXT - 多行文本控件
CHECK_BOX - 勾选框控件
注：默认字体大小为 字号12
      */
    Components?: Array<Component>;
    /**
      * 签署流程的签署截止时间。
值为unix时间戳,精确到秒,不传默认为当前时间一年后
      */
    Deadline?: number;
    /**
      * 发送类型：
true：无序签
false：有序签
注：默认为false（有序签）
      */
    Unordered?: boolean;
    /**
      * 是否需要预览，true：预览模式，false：非预览（默认）；
预览链接有效期300秒；
      */
    NeedPreview?: boolean;
    /**
      * 签署流程描述,最大长度1000个字符
      */
    FlowDescription?: string;
    /**
      * 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符
      */
    FlowType?: string;
    /**
      * 被抄送人的信息列表。
注:此功能为白名单功能，若有需要，请联系电子签客服开白使用
      */
    CcInfos?: Array<CcInfo>;
    /**
      * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
      */
    CustomShowMap?: string;
}
/**
 * CancelMultiFlowSignQRCode返回参数结构体
 */
export interface CancelMultiFlowSignQRCodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateFlow返回参数结构体
 */
export interface CreateFlowResponse {
    /**
      * 签署流程编号
      */
    FlowId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 应用相关信息
 */
export declare type Agent = null;
/**
 * 电子文档的控件填充信息
 */
export interface FormField {
    /**
      * 控件填充value
      */
    ComponentValue: string;
    /**
      * 控件id
      */
    ComponentId?: string;
    /**
      * 控件名字，最大长度不超过30字符
      */
    ComponentName?: string;
}
/**
 * DescribeFlowTemplates请求参数结构体
 */
export interface DescribeFlowTemplatesRequest {
    /**
      * 操作人信息
      */
    Operator: UserInfo;
    /**
      * 查询偏移位置，默认0
      */
    Offset?: number;
    /**
      * 查询个数，默认20，最大100
      */
    Limit?: number;
    /**
      * 搜索条件，具体参考Filter结构体。本接口取值：template-id：按照【 **模板唯一标识** 】进行过滤
      */
    Filters?: Array<Filter>;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
    /**
      * 暂未开放
      */
    GenerateSource?: number;
    /**
      * 查询内容：0-模板列表及详情（默认），1-仅模板列表
      */
    ContentType?: number;
}
/**
 * 用户信息
 */
export interface UserInfo {
    /**
      * 用户在平台的编号
      */
    UserId?: string;
    /**
      * 用户的来源渠道
      */
    Channel?: string;
    /**
      * 用户在渠道的编号
      */
    OpenId?: string;
    /**
      * 用户真实IP
      */
    ClientIp?: string;
    /**
      * 用户代理IP
      */
    ProxyIp?: string;
}
/**
 * 流程信息摘要
 */
export interface FlowBrief {
    /**
      * 流程的编号
      */
    FlowId: string;
    /**
      * 流程的名称
      */
    FlowName: string;
    /**
      * 流程的描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowDescription: string;
    /**
      * 流程的类型
      */
    FlowType: string;
    /**
      * 流程状态
- `1` 未签署
- `2`  部分签署
- `3`  已退回
- `4`  完成签署
- `5`  已过期
- `6`  已取消
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowStatus: number;
    /**
      * 流程创建的时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedOn: number;
    /**
      * 拒签或者取消的原因描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowMessage: string;
}
/**
 * 抄送信息
 */
export interface CcInfo {
    /**
      * 被抄送人手机号
      */
    Mobile?: string;
}
