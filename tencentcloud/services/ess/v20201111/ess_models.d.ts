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
 * CreateFlowEvidenceReport返回参数结构体
 */
export interface CreateFlowEvidenceReportResponse {
    /**
      * 出证报告 URL（有效期5分钟）
      */
    ReportUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 签署流程编号，由CreateFlow接口返回
      */
    FlowId: string;
    /**
      * 客户端Token，保持接口幂等性,最大长度64个字符
      */
    ClientToken?: string;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
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
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 签署流程编号,由CreateFlow接口返回
      */
    FlowId: string;
    /**
      * 用户上传的模板ID
      */
    TemplateId: string;
    /**
      * 文件名列表，单个文件名最大长度200个字符，暂时仅支持单文件发起
      */
    FileNames: Array<string>;
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
    /**
      * 应用相关信息
      */
    Agent?: Agent;
}
/**
 * CreateFlow请求参数结构体
 */
export interface CreateFlowRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 签署流程名称,最大长度200个字符
      */
    FlowName: string;
    /**
      * 签署流程参与者信息，最大限制50方
      */
    Approvers: Array<FlowCreateApprover>;
    /**
      * 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符
      */
    FlowType?: string;
    /**
      * 客户端Token，保持接口幂等性,最大长度64个字符
      */
    ClientToken?: string;
    /**
      * 暂未开放
      */
    CallbackUrl?: string;
    /**
      * 签署流程的签署截止时间。
值为unix时间戳,精确到秒,不传默认为当前时间一年后
      */
    DeadLine?: number;
    /**
      * 用户自定义字段(需进行base64 encode),回调的时候会进行透传, 长度需要小于20480
      */
    UserData?: string;
    /**
      * 签署流程描述,最大长度1000个字符
      */
    FlowDescription?: string;
    /**
      * 发送类型：
true：无序签
false：有序签
注：默认为false（有序签），请和模板中的配置保持一致
      */
    Unordered?: boolean;
    /**
      * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
      */
    CustomShowMap?: string;
    /**
      * 发起方企业的签署人进行签署操作是否需要企业内部审批。
若设置为true,审核结果需通过接口 CreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。

注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
      */
    NeedSignReview?: boolean;
    /**
      * 暂未开放
      */
    RelatedFlowId?: string;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
}
/**
 * CreateSchemeUrl请求参数结构体
 */
export interface CreateSchemeUrlRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 企业名称
      */
    OrganizationName?: string;
    /**
      * 姓名,最大长度50个字符
      */
    Name?: string;
    /**
      * 手机号，大陆手机号11位
      */
    Mobile?: string;
    /**
      * 链接类型
HTTP：跳转电子签小程序的http_url，
APP：第三方APP或小程序跳转电子签小程序的path。
默认为HTTP类型
      */
    EndPoint?: string;
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
    /**
      * 应用相关信息
      */
    Agent?: Agent;
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
 * CreateFlowApprovers返回参数结构体
 */
export interface CreateFlowApproversResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFlowInfo请求参数结构体
 */
export interface DescribeFlowInfoRequest {
    /**
      * 需要查询的流程ID列表，限制最大100个
      */
    FlowIds: Array<string>;
    /**
      * 调用方用户信息
      */
    Operator?: UserInfo;
}
/**
 * 发起流程快速注册相关信息
 */
export interface RegisterInfo {
    /**
      * 法人姓名
      */
    LegalName: string;
    /**
      * 社会统一信用代码
      */
    Uscc: string;
}
/**
 * CancelFlow请求参数结构体
 */
export interface CancelFlowRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 签署流程id
      */
    FlowId: string;
    /**
      * 撤销原因，最长200个字符；
      */
    CancelMessage: string;
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
      * 如果是Component控件类型，则可选的字段为：
TEXT - 普通文本控件；
MULTI_LINE_TEXT - 多行文本控件；
CHECK_BOX - 勾选框控件；
FILL_IMAGE - 图片控件；
DYNAMIC_TABLE - 动态表格控件；
ATTACHMENT - 附件控件；
SELECTOR - 选择器控件；

如果是SignComponent控件类型，则可选的字段为
SIGN_SEAL - 签署印章控件；
SIGN_DATE - 签署日期控件；
SIGN_SIGNATURE - 用户签名控件；
SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；

表单域的控件不能作为印章和签名控件
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
      * 控件填充vaule，ComponentType和传入值类型对应关系：
TEXT - 文本内容
MULTI_LINE_TEXT - 文本内容
CHECK_BOX - true/false
FILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取
SELECTOR - 选项值
DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525#FlowInfo
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
      * 签署链接对象
      */
    SignUrls: SignUrl;
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
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。
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
      * 签署方经办人的用户ID,和签署方经办人姓名+手机号+证件必须有一个。非企微场景不使用此字段
      */
    UserId?: string;
    /**
      * 当前只支持true，默认为true
      */
    Required?: boolean;
    /**
      * 签署人用户来源,企微侧用户请传入：WEWORKAPP
      */
    ApproverSource?: string;
    /**
      * 客户自定义签署人标识，64位长度，保证唯一。非企微场景不使用此字段
      */
    CustomApproverTag?: string;
    /**
      * 快速注册相关信息，目前暂未开放！
      */
    RegisterInfo?: RegisterInfo;
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
 * 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息
 */
export interface FlowDetailInfo {
    /**
      * 合同(流程)的Id
      */
    FlowId: string;
    /**
      * 合同(流程)的名字
      */
    FlowName: string;
    /**
      * 合同(流程)的类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowType: string;
    /**
      * 合同(流程)的状态
1：未签署
2：部分签署
3：已退回
4：完成签署
5：已过期
6：已取消
      */
    FlowStatus: number;
    /**
      * 合同(流程)的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowMessage: string;
    /**
      * 流程的描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowDescription: string;
    /**
      * 合同(流程)的创建时间戳
      */
    CreatedOn: number;
    /**
      * 合同(流程)的签署人数组
      */
    FlowApproverInfos: Array<FlowApproverDetail>;
}
/**
 * CreateFlowByFiles返回参数结构体
 */
export interface CreateFlowByFilesResponse {
    /**
      * 签署流程编号。

注：如入参 是否需要预览 NeedPreview 设置为 true，不会正式发起合同，此处不会有值返回；如入参 是否需要预览 NeedPreview 设置为 false，此处会正常返回签署流程编号 FlowId。
      */
    FlowId: string;
    /**
      * 合同预览链接。

注：如入参 是否需要预览 NeedPreview 设置为 true，会开启“预览模式”，此处会返回预览链接；如入参 是否需要预览 NeedPreview 设置为 false，此处不会有值返回。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreviewUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 机构信息
 */
export interface OrganizationInfo {
    /**
      * 机构在平台的编号
      */
    OrganizationId?: string;
    /**
      * 用户渠道
      */
    Channel?: string;
    /**
      * 用户在渠道的机构编号
      */
    OrganizationOpenId?: string;
    /**
      * 用户真实的IP
      */
    ClientIp?: string;
    /**
      * 机构的代理IP
      */
    ProxyIp?: string;
}
/**
 * DescribeFlowBriefs请求参数结构体
 */
export interface DescribeFlowBriefsRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 需要查询的流程ID列表，限制最大20个
      */
    FlowIds: Array<string>;
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
 * 补充签署人信息
 */
export interface FillApproverInfo {
    /**
      * 签署人签署Id
      */
    RecipientId: string;
    /**
      * 签署人来源
WEWORKAPP: 企业微信
      */
    ApproverSource: string;
    /**
      * 企业自定义账号Id
WEWORKAPP场景下指企业自有应用获取企微明文的userid
      */
    CustomUserId: string;
}
/**
 * 一码多扫签署二维码签署信息
 */
export interface SignUrl {
    /**
      * 小程序签署链接
      */
    AppSignUrl: string;
    /**
      * 签署链接有效时间
      */
    EffectiveTime: string;
    /**
      * 移动端签署链接
      */
    HttpSignUrl: string;
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
注：类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。
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
      * 本环节操作人签署控件配置
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
    /**
      * 签署人userId，非企微场景不使用此字段
      */
    UserId?: string;
    /**
      * 签署人用户来源,企微侧用户请传入：WEWORKAPP
      */
    ApproverSource?: string;
    /**
      * 客户自定义签署人标识，64位长度，保证唯一，非企微场景不使用此字段
      */
    CustomApproverTag?: string;
}
/**
 * CreateFlowSignReview返回参数结构体
 */
export interface CreateFlowSignReviewResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * CreateFlowEvidenceReport请求参数结构体
 */
export interface CreateFlowEvidenceReportRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 签署流程编号
      */
    FlowId: string;
}
/**
 * CreateBatchCancelFlowUrl返回参数结构体
 */
export interface CreateBatchCancelFlowUrlResponse {
    /**
      * 批量撤回签署流程链接
      */
    BatchCancelFlowUrl: string;
    /**
      * 签署流程撤回失败信息
      */
    FailMessages: Array<string>;
    /**
      * 签署连接过期时间字符串：年月日-时分秒
      */
    UrlExpireOn: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UploadFiles请求参数结构体
 */
export interface UploadFilesRequest {
    /**
      * 文件对应业务类型，用于区分文件存储路径：
1. TEMPLATE - 模板； 文件类型：.pdf .doc .docx .html
2. DOCUMENT - 签署过程及签署后的合同文档/图片控件 文件类型：.pdf/.jpg/.png
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
      * 不再使用，上传文件链接数组，最多支持20个URL
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
 * GetTaskResultApi请求参数结构体
 */
export interface GetTaskResultApiRequest {
    /**
      * 任务Id，通过CreateConvertTaskApi得到
      */
    TaskId: string;
    /**
      * 操作人信息
      */
    Operator?: UserInfo;
    /**
      * 应用号信息
      */
    Agent?: Agent;
    /**
      * 暂未开放
      */
    Organization?: OrganizationInfo;
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
 * CreateBatchCancelFlowUrl请求参数结构体
 */
export interface CreateBatchCancelFlowUrlRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 需要执行撤回的签署流程id数组，最多100个
      */
    FlowIds: Array<string>;
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
    /**
      * 限制二维码用户条件
      */
    ApproverRestrictions?: ApproverRestriction;
}
/**
 * CreateConvertTaskApi返回参数结构体
 */
export interface CreateConvertTaskApiResponse {
    /**
      * 转换任务Id
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateFlowSignReview请求参数结构体
 */
export interface CreateFlowSignReviewRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 签署流程编号
      */
    FlowId: string;
    /**
      * 企业内部审核结果
PASS: 通过
REJECT: 拒绝
      */
    ReviewType: string;
    /**
      * 审核原因
当ReviewType 是REJECT 时此字段必填,字符串长度不超过200
      */
    ReviewMessage?: string;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
}
/**
 * CreateConvertTaskApi请求参数结构体
 */
export interface CreateConvertTaskApiRequest {
    /**
      * 资源类型 取值范围doc,docx,html之一
      */
    ResourceType: string;
    /**
      * 资源名称，长度限制为256字符
      */
    ResourceName: string;
    /**
      * 资源Id，通过UploadFiles获取
      */
    ResourceId: string;
    /**
      * 操作者信息
      */
    Operator?: UserInfo;
    /**
      * 应用号信息
      */
    Agent?: Agent;
    /**
      * 暂未开放
      */
    Organization?: OrganizationInfo;
}
/**
 * DescribeFlowInfo返回参数结构体
 */
export interface DescribeFlowInfoResponse {
    /**
      * 签署流程信息
      */
    FlowDetailInfos: Array<FlowDetailInfo>;
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
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 签署流程名称,最大长度200个字符
      */
    FlowName: string;
    /**
      * 签署参与者信息，最大限制50方
      */
    Approvers: Array<ApproverInfo>;
    /**
      * 签署pdf文件的资源编号列表，通过UploadFiles接口获取，暂时仅支持单文件发起
      */
    FileIds: Array<string>;
    /**
      * 签署流程的类型(如销售合同/入职合同等)，最大长度200个字符
      */
    FlowType?: string;
    /**
      * 经办人内容控件配置
      */
    Components?: Array<Component>;
    /**
      * 被抄送人的信息列表。
注:此功能为白名单功能，若有需要，请联系电子签客服开白使用
      */
    CcInfos?: Array<CcInfo>;
    /**
      * 是否需要预览，true：预览模式，false：非预览（默认）；
预览链接有效期300秒；

注：如果使用“预览模式”，出参会返回合同预览链接 PreviewUrl，不会正式发起合同，且出参不会返回签署流程编号 FlowId；如果使用“非预览”，则会正常返回签署流程编号 FlowId，不会生成合同预览链接 PreviewUrl。
      */
    NeedPreview?: boolean;
    /**
      * 签署流程描述,最大长度1000个字符
      */
    FlowDescription?: string;
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
      * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
      */
    CustomShowMap?: string;
    /**
      * 发起方企业的签署人进行签署操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。
若设置为true，审核结果需通过接口 CreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。

注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
      */
    NeedSignReview?: boolean;
    /**
      * 应用号信息
      */
    Agent?: Agent;
}
/**
 * 指定签署人限制项
 */
export interface ApproverRestriction {
    /**
      * 指定签署人名字
      */
    Name?: string;
    /**
      * 指定签署人手机号
      */
    Mobile?: string;
    /**
      * 指定签署人证件类型
      */
    IdCardType?: string;
    /**
      * 指定签署人证件号码
      */
    IdCardNumber?: string;
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
      * 控件填充vaule，ComponentType和传入值类型对应关系：
TEXT - 文本内容
MULTI_LINE_TEXT - 文本内容
CHECK_BOX - true/false
FILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取
SELECTOR - 选项值
DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525#FlowInfo
      */
    ComponentValue: string;
    /**
      * 控件id，和ComponentName选择一项传入即可
      */
    ComponentId?: string;
    /**
      * 控件名字，最大长度不超过30字符，和ComponentId选择一项传入即可
      */
    ComponentName?: string;
}
/**
 * 签署人详情信息
 */
export interface FlowApproverDetail {
    /**
      * 签署人信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproveMessage?: string;
    /**
      * 签署人名字
      */
    ApproveName: string;
    /**
      * 签署人的状态
0：还没有发起
1：流程中 没有开始处理
2：待处理
3：签署态
4：拒绝态
5：过期没人处理
6：取消态
7：还没有预发起
8：待填写
9：因为各种原因而终止
      */
    ApproveStatus: number;
    /**
      * 模板配置时候的签署人id,与控件绑定
      */
    ReceiptId: string;
    /**
      * 客户自定义userId
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomUserId: string;
    /**
      * 签署人手机号
      */
    Mobile: string;
    /**
      * 签署顺序
      */
    SignOrder: number;
    /**
      * 签署人签署时间
      */
    ApproveTime: number;
    /**
      * 参与者类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproveType: string;
    /**
      * 签署人侧用户来源
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproverSource: string;
    /**
      * 客户自定义签署人标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomApproverTag: string;
    /**
      * 签署人企业Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationId: string;
    /**
      * 签署人企业名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationName: string;
}
/**
 * DescribeFlowTemplates请求参数结构体
 */
export interface DescribeFlowTemplatesRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 搜索条件，具体参考Filter结构体。本接口取值：template-id：按照【 **模板唯一标识** 】进行过滤
      */
    Filters?: Array<Filter>;
    /**
      * 查询个数，默认20，最大200
      */
    Limit?: number;
    /**
      * 查询偏移位置，默认0
      */
    Offset?: number;
    /**
      * 查询内容：0-模板列表及详情（默认），1-仅模板列表
      */
    ContentType?: number;
    /**
      * 暂未开放
      */
    GenerateSource?: number;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
}
/**
 * GetTaskResultApi返回参数结构体
 */
export interface GetTaskResultApiResponse {
    /**
      * 任务Id
      */
    TaskId: string;
    /**
      * 任务状态，需要关注的状态
0  :NeedTranform   - 任务已提交
4  :Processing     - 文档转换中
8  :TaskEnd        - 任务处理完成
-2 :DownloadFailed - 下载失败
-6 :ProcessFailed  - 转换失败
-13:ProcessTimeout - 转换文件超时
      */
    TaskStatus: number;
    /**
      * 状态描述，需要关注的状态
NeedTranform   - 任务已提交
Processing     - 文档转换中
TaskEnd        - 任务处理完成
DownloadFailed - 下载失败
ProcessFailed  - 转换失败
ProcessTimeout - 转换文件超时
      */
    TaskMessage: string;
    /**
      * 资源Id，也是FileId，用于文件发起使用
      */
    ResourceId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateFlowApprovers请求参数结构体
 */
export interface CreateFlowApproversRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 签署流程编号
      */
    FlowId: string;
    /**
      * 补充签署人信息
      */
    Approvers: Array<FillApproverInfo>;
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
- `0`  还没有发起
- `1`  未签署
- `2`  部分签署
- `3`  已退回
- `4`  完成签署
- `5`  已过期
- `6`  已取消
- `7`  还没有预发起
- `8`  等待填写
- `9`  部分填写
- `10`  拒填
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
