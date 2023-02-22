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
 * DescribeFlowEvidenceReport请求参数结构体
 */
export interface DescribeFlowEvidenceReportRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 出证报告编号
      */
    ReportId: string;
}
/**
 * 集成版员工部门信息
 */
export interface Department {
    /**
      * 部门id
      */
    DepartmentId: string;
    /**
      * 部门名称
      */
    DepartmentName: string;
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
 * CreateFlowApprovers返回参数结构体
 */
export interface CreateFlowApproversResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeIntegrationMainOrganizationUser请求参数结构体
 */
export interface DescribeIntegrationMainOrganizationUserRequest {
    /**
      * 操作人信息，userId必填
      */
    Operator: UserInfo;
}
/**
 * ModifyApplicationCallbackInfo返回参数结构体
 */
export interface ModifyApplicationCallbackInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 是否发送短信，sms--短信通知，none--不通知，默认为sms；发起方=签署方时不发送短信
      */
    NotifyType?: string;
    /**
      * 签署前置条件：是否需要阅读全文，默认为不需要
      */
    IsFullText?: boolean;
    /**
      * 签署前置条件：阅读时长限制，单位秒，默认为不需要
      */
    PreReadTime?: number;
    /**
      * 签署方经办人的用户ID,和签署方经办人姓名+手机号+证件必须有一个。
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
    /**
      * 签署人个性化能力值
      */
    ApproverOption?: ApproverOption;
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
 * CreateIntegrationEmployees请求参数结构体
 */
export interface CreateIntegrationEmployeesRequest {
    /**
      * 操作人信息，userId必填
      */
    Operator: UserInfo;
    /**
      * 待创建员工的信息，Mobile和DisplayName必填
      */
    Employees: Array<Staff>;
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
 * 集成版企业角色信息
 */
export interface StaffRole {
    /**
      * 角色id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RoleId: string;
    /**
      * 角色名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    RoleName: string;
}
/**
 * 签署链接信息
 */
export interface FlowApproverUrlInfo {
    /**
      * 签署链接，注意该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SignUrl?: string;
    /**
      * 签署人手机号
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproverMobile?: string;
    /**
      * 签署人姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproverName?: string;
    /**
      * 签署人类型 1-个人
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproverType?: number;
}
/**
 * CreateConvertTaskApi请求参数结构体
 */
export interface CreateConvertTaskApiRequest {
    /**
      * 资源类型 取值范围doc,docx,html,xls,xlsx之一
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
      * 调用方用户信息，userId 必填
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
 * CreateFlowReminds返回参数结构体
 */
export interface CreateFlowRemindsResponse {
    /**
      * 签署连接过期时间字符串：年月日-时分秒
      */
    RemindFlowRecords?: Array<RemindFlowRecords>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeOrganizationGroupOrganizations请求参数结构体
 */
export interface DescribeOrganizationGroupOrganizationsRequest {
    /**
      * 操作人信息，userId必填
      */
    Operator: UserInfo;
    /**
      * 单次查询成员企业最大返回数量
      */
    Limit: number;
    /**
      * 页面偏移量
      */
    Offset: number;
    /**
      * 查询成员企业的企业名，模糊匹配
      */
    Name?: string;
    /**
      * 成员企业加入集团的当前状态:1-待授权;2-已授权待激活;3-拒绝授权;4-已解除;5-已加入
      */
    Status?: number;
    /**
      * 是否到处当前成员企业数据
      */
    Export?: boolean;
    /**
      * 成员企业id
      */
    Id?: string;
}
/**
 * 主企业代子企业操作 或 渠道子客应用相关信息
 */
export interface Agent {
    /**
      * 应用编号,32位字符串
      */
    AppId?: string;
    /**
      * 主组织的应用号
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyAppId?: string;
    /**
      * 主组织在平台的机构编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyOrganizationId?: string;
    /**
      * 主组织的操作人
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyOperator?: string;
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
      * 企业组织相关信息
      */
    Organization?: OrganizationInfo;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
    /**
      * 查询偏移位置，默认0
      */
    Offset?: number;
    /**
      * 查询个数，默认20，最大200
      */
    Limit?: number;
    /**
      * 搜索条件，具体参考Filter结构体。本接口取值：template-id：按照【 **模板唯一标识** 】进行过滤
      */
    Filters?: Array<Filter>;
    /**
      * 这个参数跟下面的IsChannel参数配合使用。
IsChannel=false时，ApplicationId参数不起任何作用。
IsChannel=true时，ApplicationId为空，查询所有渠道模板列表；ApplicationId不为空，查询指定渠道下的模板列表
ApplicationId为空，查询渠道模板列表
      */
    ApplicationId?: string;
    /**
      * 默认为false，查询SaaS模板库列表；
为true，查询渠道模板库管理列表
      */
    IsChannel?: boolean;
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
 * DescribeFlowEvidenceReport返回参数结构体
 */
export interface DescribeFlowEvidenceReportResponse {
    /**
      * 报告 URL
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportUrl: string;
    /**
      * 执行中：EvidenceStatusExecuting
成功：EvidenceStatusSuccess
失败：EvidenceStatusFailed
      */
    Status: string;
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
    /**
      * 模板创建组织id
      */
    OrganizationId?: string;
    /**
      * 模板预览链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreviewUrl?: string;
    /**
      * 模板版本。默认为空时，全数字字符，初始版本为yyyyMMdd001。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateVersion?: string;
    /**
      * 模板是否已发布。true-已发布；false-未发布
注意：此字段可能返回 null，表示取不到有效值。
      */
    Published?: boolean;
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
 * DescribeIntegrationEmployees请求参数结构体
 */
export interface DescribeIntegrationEmployeesRequest {
    /**
      * 操作人信息，userId必填
      */
    Operator: UserInfo;
    /**
      * 返回最大数量，最大为20
      */
    Limit: number;
    /**
      * 查询过滤实名用户，Key为Status，Values为["IsVerified"]
根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...]
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0，最大为20000
      */
    Offset?: number;
}
/**
 * CreateFlow请求参数结构体
 */
export interface CreateFlowRequest {
    /**
      * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId代发合同。
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
    RelatedFlowId?: string;
    /**
      * 签署流程的签署截止时间。
值为unix时间戳,精确到秒,不传默认为当前时间一年后
      */
    DeadLine?: number;
    /**
      * 用户自定义字段，回调的时候会进行透传，长度需要小于20480
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
      * 发起方企业的签署人进行签署操作是否需要企业内部审批。使用此功能需要发起方企业有参与签署。
若设置为true，审核结果需通过接口 CreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。

注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
      */
    NeedSignReview?: boolean;
    /**
      * 暂未开放
      */
    CallbackUrl?: string;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
    /**
      * 被抄送人的信息列表。
注: 此功能为白名单功能，若有需要，请联系电子签客服开白使用。
      */
    CcInfos?: Array<CcInfo>;
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
    /**
      * 应用信息
      */
    Agent?: Agent;
}
/**
 * DeleteSealPolicies返回参数结构体
 */
export interface DeleteSealPoliciesResponse {
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
 * 持有的电子印章信息
 */
export interface OccupiedSeal {
    /**
      * 电子印章编号
      */
    SealId: string;
    /**
      * 电子印章名称
      */
    SealName: string;
    /**
      * 电子印章授权时间戳
      */
    CreateOn: number;
    /**
      * 电子印章授权人
      */
    Creator: string;
    /**
      * 电子印章策略Id
      */
    SealPolicyId: string;
    /**
      * 印章状态，有以下六种：CHECKING（审核中）SUCCESS（已启用）FAIL（审核拒绝）CHECKING-SADM（待超管审核）DISABLE（已停用）STOPPED（已终止）
      */
    SealStatus: string;
    /**
      * 审核失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailReason: string;
    /**
      * 印章图片url，5分钟内有效
      */
    Url: string;
    /**
      * 印章类型
      */
    SealType: string;
    /**
      * 用印申请是否为永久授权
      */
    IsAllTime: boolean;
    /**
      * 授权人列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthorizedUsers: Array<AuthorizedUser>;
}
/**
 * 删除员工失败数据
 */
export interface FailedDeleteStaffData {
    /**
      * 员工在电子签的userId
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
    /**
      * 员工在第三方平台的openId
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenId: string;
    /**
      * 失败原因
      */
    Reason: string;
}
/**
 * 合同文件验签单个结果结构体
 */
export interface PdfVerifyResult {
    /**
      * 验签结果
      */
    VerifyResult: number;
    /**
      * 签署平台
      */
    SignPlatform: string;
    /**
      * 签署人名称
      */
    SignerName: string;
    /**
      * 签署时间
      */
    SignTime: number;
    /**
      * 签名算法
      */
    SignAlgorithm: string;
    /**
      * 签名证书序列号
      */
    CertSn: string;
    /**
      * 证书起始时间
      */
    CertNotBefore: number;
    /**
      * 证书过期时间
      */
    CertNotAfter: number;
    /**
      * 签名域横坐标
      */
    ComponentPosX: number;
    /**
      * 签名域纵坐标
      */
    ComponentPosY: number;
    /**
      * 签名域宽度
      */
    ComponentWidth: number;
    /**
      * 签名域高度
      */
    ComponentHeight: number;
    /**
      * 签名域所在页码
      */
    ComponentPage: number;
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
 * CreateSealPolicy返回参数结构体
 */
export interface CreateSealPolicyResponse {
    /**
      * 最终授权成功的。其他的跳过的是已经授权了的
      */
    UserIds?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeIntegrationEmployees返回参数结构体
 */
export interface DescribeIntegrationEmployeesResponse {
    /**
      * 员工数据列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Employees: Array<Staff>;
    /**
      * 偏移量，默认为0，最大为20000
注意：此字段可能返回 null，表示取不到有效值。
      */
    Offset: number;
    /**
      * 返回最大数量，最大为20
      */
    Limit: number;
    /**
      * 符合条件的员工数量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 删除员工的成功数据
 */
export interface SuccessDeleteStaffData {
    /**
      * 员工名
      */
    DisplayName: string;
    /**
      * 员工手机号
      */
    Mobile: string;
    /**
      * 员工在电子签平台的id
      */
    UserId: string;
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
 * 创建员工的失败数据
 */
export interface FailedCreateStaffData {
    /**
      * 员工名
      */
    DisplayName: string;
    /**
      * 员工手机号
      */
    Mobile: string;
    /**
      * 失败原因
      */
    Reason: string;
}
/**
 * CreateFlowByFiles请求参数结构体
 */
export interface CreateFlowByFilesRequest {
    /**
      * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId 代发合同
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
      * 预览链接类型 默认:0-文件流, 1- H5链接 注意:此参数在NeedPreview 为true 时有效,
      */
    PreviewType?: number;
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
      * 用户自定义字段，回调的时候会进行透传，长度需要小于20480
      */
    UserData?: string;
    /**
      * 应用号信息
      */
    Agent?: Agent;
    /**
      * 签署人校验方式
VerifyCheck: 人脸识别（默认）
MobileCheck：手机号验证
参数说明：可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。
      */
    ApproverVerifyType?: string;
    /**
      * 签署流程描述,最大长度1000个字符
      */
    FlowDescription?: string;
    /**
      * 标识是否允许发起后添加控件。0为不允许1为允许。如果为1，创建的时候不能有签署控件，只能创建后添加。注意发起后添加控件功能不支持添加骑缝章和签批控件
      */
    SignBeanTag?: number;
}
/**
 * CreateFlowSignUrl返回参数结构体
 */
export interface CreateFlowSignUrlResponse {
    /**
      * 签署人签署链接信息
      */
    FlowApproverUrlInfos: Array<FlowApproverUrlInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFileUrls请求参数结构体
 */
export interface DescribeFileUrlsRequest {
    /**
      * 调用方用户信息，UserId 必填
      */
    Operator: UserInfo;
    /**
      * 文件对应的业务类型，目前支持：
- 流程 "FLOW"，如需下载合同文件请选择此项
- 模板 "TEMPLATE"
- 文档 "DOCUMENT"
- 印章  “SEAL”
      */
    BusinessType: string;
    /**
      * 业务编号的数组，如流程编号、模板编号、文档编号、印章编号。如需下载合同文件请传入FlowId
最大支持20个资源
      */
    BusinessIds: Array<string>;
    /**
      * 下载后的文件命名，只有FileType为zip的时候生效
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
    CcToken?: string;
    /**
      * 暂不开放
      */
    Scene?: string;
    /**
      * 应用相关信息
      */
    Agent?: Agent;
}
/**
 * 电子文档的控件填充信息。按照控件类型进行相应的填充。

【数据表格传参说明】
当模板的 ComponentType='DYNAMIC_TABLE'时（渠道版或集成版），FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）
输入示例1：

```
{
    "headers":[
        {
            "content":"head1"
        },
        {
            "content":"head2"
        },
        {
            "content":"head3"
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123"
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456"
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789"
            }
        ]
    }
}

```

输入示例2（表格表头宽度比例配置）：

```
{
    "headers":[
        {
            "content":"head1",
            "widthPercent": 30
        },
        {
            "content":"head2",
            "widthPercent": 30
        },
        {
            "content":"head3",
            "widthPercent": 40
        }
    ],
    "rowCount":3,
    "body":{
        "cells":[
            {
                "rowStart":1,
                "rowEnd":1,
                "columnStart":1,
                "columnEnd":1,
                "content":"123"
            },
            {
                "rowStart":2,
                "rowEnd":3,
                "columnStart":1,
                "columnEnd":2,
                "content":"456"
            },
            {
                "rowStart":3,
                "rowEnd":3,
                "columnStart":3,
                "columnEnd":3,
                "content":"789"
            }
        ]
    }
}

```
表格参数说明

| 名称                | 类型    | 描述                                              |
| ------------------- | ------- | ------------------------------------------------- |
| headers             | Array   | 表头：不超过10列，不支持单元格合并，字数不超过100 |
| rowCount            | Integer | 表格内容最大行数                                  |
| cells.N.rowStart    | Integer | 单元格坐标：行起始index                           |
| cells.N.rowEnd      | Integer | 单元格坐标：行结束index                           |
| cells.N.columnStart | Integer | 单元格坐标：列起始index                           |
| cells.N.columnEnd   | Integer | 单元格坐标：列结束index                           |
| cells.N.content     | String  | 单元格内容，字数不超过100                         |

表格参数headers说明
widthPercent Integer 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35
content String 表头单元格内容，字数不超过100
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
 * 企业员工信息
 */
export interface Staff {
    /**
      * 用户在电子签平台的id
      */
    UserId?: string;
    /**
      * 显示的用户名/昵称
      */
    DisplayName?: string;
    /**
      * 用户手机号
      */
    Mobile?: string;
    /**
      * 用户邮箱
注意：此字段可能返回 null，表示取不到有效值。
      */
    Email?: string;
    /**
      * 用户在第三方平台id
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenId?: string;
    /**
      * 员工角色
注意：此字段可能返回 null，表示取不到有效值。
      */
    Roles?: Array<StaffRole>;
    /**
      * 员工部门
注意：此字段可能返回 null，表示取不到有效值。
      */
    Department?: Department;
    /**
      * 员工是否实名
      */
    Verified?: boolean;
    /**
      * 员工创建时间戳
      */
    CreatedOn?: number;
    /**
      * 员工实名时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    VerifiedOn?: number;
    /**
      * 员工是否离职：0-未离职，1-离职
注意：此字段可能返回 null，表示取不到有效值。
      */
    QuiteJob?: number;
}
/**
 * CreateFlowEvidenceReport返回参数结构体
 */
export interface CreateFlowEvidenceReportResponse {
    /**
      * 出证报告 ID，用于查询出证报告DescribeFlowEvidenceReport接口时用到
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportId: string;
    /**
      * 执行中：EvidenceStatusExecuting
成功：EvidenceStatusSuccess
失败：EvidenceStatusFailed
      */
    Status: string;
    /**
      * 废除，字段无效
注意：此字段可能返回 null，表示取不到有效值。
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
    FileUrls?: Array<FileUrl>;
    /**
      * URL数量
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 授权用户
 */
export interface AuthorizedUser {
    /**
      * 用户id
      */
    UserId: string;
}
/**
 * CreateDocument请求参数结构体
 */
export interface CreateDocumentRequest {
    /**
      * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId代发合同。
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
      * 预览链接类型 默认:0-文件流, 1- H5链接 注意:此参数在NeedPreview 为true 时有效,
      */
    PreviewType?: number;
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
 * 催办接口返回详细信息
 */
export interface RemindFlowRecords {
    /**
      * 是否能够催办
      */
    CanRemind: boolean;
    /**
      * 合同id
      */
    FlowId: string;
    /**
      * 催办详情
      */
    RemindMessage: string;
}
/**
 * DescribeOrganizationSeals返回参数结构体
 */
export interface DescribeOrganizationSealsResponse {
    /**
      * 在设置了SealId时返回0或1，没有设置时返回公司的总印章数量，可能比返回的印章数组数量多
      */
    TotalCount?: number;
    /**
      * 查询到的印章结果数组
      */
    Seals?: Array<OccupiedSeal>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteIntegrationEmployees请求参数结构体
 */
export interface DeleteIntegrationEmployeesRequest {
    /**
      * 操作人信息，userId必填
      */
    Operator: UserInfo;
    /**
      * 待移除员工的信息，userId和openId二选一，必填一个
      */
    Employees: Array<Staff>;
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
 * 成员企业信息
 */
export interface GroupOrganization {
    /**
      * 成员企业名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 成员企业别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alias?: string;
    /**
      * 成员企业id
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationId?: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: number;
    /**
      * 成员企业状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: number;
    /**
      * 是否为集团主企业
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsMainOrganization?: boolean;
    /**
      * 企业社会信用代码
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdCardNumber?: string;
    /**
      * 企业超管信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdminInfo?: Admin;
    /**
      * 企业许可证
注意：此字段可能返回 null，表示取不到有效值。
      */
    License?: string;
    /**
      * 企业许可证过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LicenseExpireTime?: number;
    /**
      * 成员企业加入集团时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    JoinTime?: number;
    /**
      * 是否可以使用审批流引擎
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowEngineEnable?: boolean;
}
/**
 * CreateFlowSignUrl请求参数结构体
 */
export interface CreateFlowSignUrlRequest {
    /**
      * 流程编号
      */
    FlowId: string;
    /**
      * 流程签署人，其中ApproverName，ApproverMobile和ApproverType必传，其他可不传，ApproverType目前只支持个人类型的签署人。还需注意签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。
      */
    FlowApproverInfos: Array<FlowCreateApprover>;
    /**
      * 机构信息，暂未开放
      */
    Organization: OrganizationInfo;
    /**
      * 用户信息，此结构体UserId必填
      */
    Operator?: UserInfo;
}
/**
 * CreateIntegrationEmployees返回参数结构体
 */
export interface CreateIntegrationEmployeesResponse {
    /**
      * 创建员工的结果
      */
    CreateEmployeeResult: CreateStaffResult;
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
 * 创建员工的成功数据
 */
export interface SuccessCreateStaffData {
    /**
      * 员工名
      */
    DisplayName: string;
    /**
      * 员工手机号
      */
    Mobile: string;
    /**
      * 员工在电子签平台的id
      */
    UserId: string;
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
 * VerifyPdf请求参数结构体
 */
export interface VerifyPdfRequest {
    /**
      * 合同Id，流程Id
      */
    FlowId: string;
    /**
      * 调用方用户信息，userId 必填
      */
    Operator?: UserInfo;
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
      * 签署人userId，传此字段则不用传姓名、手机号
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
    /**
      * 签署人个性化能力值
      */
    ApproverOption?: ApproverOption;
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
 * 创建员工的结果
 */
export interface CreateStaffResult {
    /**
      * 创建员工的成功列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccessEmployeeData: Array<SuccessCreateStaffData>;
    /**
      * 创建员工的失败列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedEmployeeData: Array<FailedCreateStaffData>;
}
/**
 * DescribeIntegrationMainOrganizationUser返回参数结构体
 */
export interface DescribeIntegrationMainOrganizationUserResponse {
    /**
      * 主企业员工账号信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    IntegrationMainOrganizationUser?: IntegrationMainOrganizationUser;
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
 * DeleteSealPolicies请求参数结构体
 */
export interface DeleteSealPoliciesRequest {
    /**
      * 操作撤销的用户信息
      */
    Operator: UserInfo;
    /**
      * 印章授权编码数组。这个参数跟下面的SealId其中一个必填，另外一个可选填
      */
    PolicyIds?: Array<string>;
    /**
      * 应用相关
      */
    Agent?: Agent;
    /**
      * 印章ID。这个参数跟上面的PolicyIds其中一个必填，另外一个可选填
      */
    SealId?: string;
    /**
      * 待授权的员工ID
      */
    UserIds?: Array<string>;
}
/**
 * CreatePrepareFlow返回参数结构体
 */
export interface CreatePrepareFlowResponse {
    /**
      * 快速发起预览链接
      */
    Url: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * ModifyApplicationCallbackInfo请求参数结构体
 */
export declare type ModifyApplicationCallbackInfoRequest = null;
/**
 * 主企业员工账号信息
 */
export interface IntegrationMainOrganizationUser {
    /**
      * 主企业id
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainOrganizationId?: string;
    /**
      * 主企业员工UserId
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainUserId?: string;
    /**
      * 主企业员工名
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserName?: string;
}
/**
 * StartFlow请求参数结构体
 */
export interface StartFlowRequest {
    /**
      * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId代发合同。
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
 * CreatePrepareFlow请求参数结构体
 */
export interface CreatePrepareFlowRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 资源Id，通过多文件上传（UploadFiles）接口获得
      */
    ResourceId: string;
    /**
      * 合同名称
      */
    FlowName: string;
    /**
      * 是否顺序签署(true:无序签,false:顺序签)
      */
    Unordered?: boolean;
    /**
      * 签署流程的签署截止时间。
值为unix时间戳,精确到秒,不传默认为当前时间一年后
      */
    Deadline?: number;
    /**
      * 用户自定义合同类型
      */
    UserFlowTypeId?: string;
    /**
      * 签署流程参与者信息，最大限制50方
      */
    Approvers?: Array<FlowCreateApprover>;
    /**
      * 打开智能添加填写区(默认开启，打开:"OPEN" 关闭："CLOSE")
      */
    IntelligentStatus?: string;
}
/**
 * 签署人个性化能力信息
 */
export interface ApproverOption {
    /**
      * 是否可以拒签 false-可以拒签,默认 true-不可以拒签
      */
    NoRefuse?: boolean;
    /**
      * 是否可以转发 false-可以转发,默认 true-不可以转发
      */
    NoTransfer?: boolean;
}
/**
 * CreateSealPolicy请求参数结构体
 */
export interface CreateSealPolicyRequest {
    /**
      * 授权发起人在平台信息，具体参考UserInfo结构体
      */
    Operator: UserInfo;
    /**
      * 用户在电子文件签署平台标识信息，具体参考UserInfo结构体。可跟下面的UserIds可叠加起作用
      */
    Users: Array<UserInfo>;
    /**
      * 印章ID
      */
    SealId: string;
    /**
      * 授权有效期。时间戳秒级
      */
    Expired: number;
    /**
      * 印章授权内容
      */
    Policy?: string;
    /**
      * 应用相关
      */
    Agent?: Agent;
    /**
      * 需要授权的用户UserId集合。跟上面的SealId参数配合使用。选填，跟上面的Users同时起作用
      */
    UserIds?: Array<string>;
}
/**
 * DescribeOrganizationSeals请求参数结构体
 */
export interface DescribeOrganizationSealsRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 返回最大数量，最大为100
      */
    Limit: number;
    /**
      * 偏移量，默认为0，最大为20000
      */
    Offset?: number;
    /**
      * 查询信息类型，为0时不返回授权用户，为1时返回
      */
    InfoType?: number;
    /**
      * 印章id（没有输入返回所有）
      */
    SealId?: string;
    /**
      * 印章类型列表（都是组织机构印章）。
为空时查询所有类型的印章。
目前支持以下类型：
OFFICIAL：企业公章；
CONTRACT：合同专用章；
ORGANIZATION_SEAL：企业印章(图片上传创建)；
LEGAL_PERSON_SEAL：法定代表人章
      */
    SealTypes?: Array<string>;
    /**
      * 主企业代子企业操作 或 渠道子客应用相关信息
      */
    Agent?: Agent;
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
 * 模板控件信息
 */
export interface Component {
    /**
      * 如果是Component控件类型，则可选的字段为：
TEXT - 普通文本控件，输入文本字符串；
MULTI_LINE_TEXT - 多行文本控件，输入文本字符串；
CHECK_BOX - 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串；
FILL_IMAGE - 图片控件，ComponentValue 填写图片的资源 ID；
DYNAMIC_TABLE - 动态表格控件；
ATTACHMENT - 附件控件,ComponentValue 填写福建图片的资源 ID列表，以逗号分割；
SELECTOR - 选择器控件，ComponentValue填写选择的字符串内容；
DATE - 日期控件；默认是格式化为xxxx年xx月xx日字符串；
DISTRICT - 省市区行政区划控件，ComponentValue填写省市区行政区划字符串内容；

如果是SignComponent控件类型，则可选的字段为
SIGN_SEAL - 签署印章控件；
SIGN_DATE - 签署日期控件；
SIGN_SIGNATURE - 用户签名控件；
SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；
SIGN_PAGING_SEAL - 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight
SIGN_OPINION - 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认；
SIGN_LEGAL_PERSON_SEAL - 企业法定代表人控件。

表单域的控件不能作为印章和签名控件
      */
    ComponentType: string;
    /**
      * 控件所属文件的序号（模板中的resourceId排列序号，取值为：0-N）
      */
    FileIndex: number;
    /**
      * 参数控件高度，单位pt
      */
    ComponentHeight: number;
    /**
      * 参数控件宽度，单位pt
      */
    ComponentWidth: number;
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
      * 控件关联的签署人ID
      */
    ComponentRecipientId?: string;
    /**
      * 扩展参数：
为JSON格式。

ComponentType为FILL_IMAGE时，支持以下参数：
NotMakeImageCenter：bool。是否设置图片居中。false：居中（默认）。 true: 不居中
FillMethod: int. 填充方式。0-铺满（默认）；1-等比例缩放

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
      * 是否是表单域类型，默认不存在
      */
    IsFormType?: boolean;
    /**
      * 控件填充vaule，ComponentType和传入值类型对应关系：
TEXT - 文本内容
MULTI_LINE_TEXT - 文本内容
CHECK_BOX - true/false
FILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取
SELECTOR - 选项值
DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525#FlowInfo
DATE - 默认是格式化为xxxx年xx月xx日
SIGN_SEAL - 印章ID，于控制台查询获取
SIGN_PAGING_SEAL - 可以指定印章ID，于控制台查询获取

控件值约束说明：
企业全称控件：
  约束：企业名称中文字符中文括号
  检查正则表达式：/^[\u3400-\u4dbf\u4e00-\u9fa5（）]+$/

统一社会信用代码控件：
  检查正则表达式：/^[A-Z0-9]{1,18}$/

法人名称控件：
  约束：最大50个字符，2到25个汉字或者1到50个字母
  检查正则表达式：/^([\u3400-\u4dbf\u4e00-\u9fa5.·]{2,25}|[a-zA-Z·,\s-]{1,50})$/

签署意见控件：
  约束：签署意见最大长度为50字符

签署人手机号控件：
  约束：国内手机号 13,14,15,16,17,18,19号段长度11位

签署人身份证控件：
  约束：合法的身份证号码检查

控件名称：
  约束：控件名称最大长度为20字符

单行文本控件：
  约束：只允许输入中文，英文，数字，中英文标点符号

多行文本控件：
  约束：只允许输入中文，英文，数字，中英文标点符号

勾选框控件：
  约束：选择填字符串true，不选填字符串false

选择器控件：
  约束：同单行文本控件约束，填写选择值中的字符串

数字控件：
  约束：请输入有效的数字(可带小数点)
  检查正则表达式：/^(-|\+)?\d+(\.\d+)?$/

日期控件：
  约束：格式：yyyy年mm月dd日

附件控件：
  约束：JPG或PNG图片，上传数量限制，1到6个，最大6个附件

图片控件：
  约束：JPG或PNG图片，填写上传的图片资源ID

邮箱控件：
  约束：请输入有效的邮箱地址, w3c标准
  检查正则表达式：/^([A-Za-z0-9_\-.!#$%&])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  参考：https://emailregex.com/

地址控件：
  同单行文本控件约束

省市区控件：
  同单行文本控件约束

性别控件：
  同单行文本控件约束，填写选择值中的字符串

学历控件：
  同单行文本控件约束，填写选择值中的字符串
      */
    ComponentValue?: string;
    /**
      * NORMAL 正常模式，使用坐标制定签署控件位置
FIELD 表单域，需使用ComponentName指定表单域名称
KEYWORD 关键字，使用ComponentId指定关键字
      */
    GenerateMode?: string;
    /**
      * 日期签署控件的字号，默认为 12
      */
    ComponentDateFontSize?: number;
    /**
      * 渠道版控件 id 标识
      */
    ChannelComponentId?: string;
    /**
      * 指定关键字时横坐标偏移量，单位pt
      */
    OffsetX?: number;
    /**
      * 指定关键字时纵坐标偏移量，单位pt
      */
    OffsetY?: number;
    /**
      * //渠道子客控件来源。0-渠道指定；1-用户自定义
      */
    ChannelComponentSource?: number;
    /**
      * 指定关键字排序规则，Positive-正序，Reverse-倒序。传入Positive时会根据关键字在PDF文件内的顺序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的第一个关键字。
传入Reverse时会根据关键字在PDF文件内的反序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的最后一个关键字。
      */
    KeywordOrder?: string;
    /**
      * 指定关键字页码，可选参数，指定页码后，将只在指定的页码内查找关键字，非该页码的关键字将不会查询出来
      */
    KeywordPage?: number;
    /**
      * 关键字位置模式，Middle-居中，Below-正下方，Right-正右方，LowerRight-右上角，UpperRight-右下角。示例：如果设置Middle的关键字盖章，则印章的中心会和关键字的中心重合，如果设置Below，则印章在关键字的正下方
      */
    RelativeLocation?: string;
    /**
      * 关键字索引，可选参数，如果一个关键字在PDF文件中存在多个，可以通过关键字索引指定使用第几个关键字作为最后的结果，可指定多个索引。示例：[0,2]，说明使用PDF文件内第1个和第3个关键字位置。
      */
    KeywordIndexes?: Array<number>;
}
/**
 * CreateFlowReminds请求参数结构体
 */
export interface CreateFlowRemindsRequest {
    /**
      * 调用方用户信息，userId 必填
      */
    Operator: UserInfo;
    /**
      * 需要执行催办的签署流程id数组，最多100个
      */
    FlowIds: Array<string>;
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
 * DeleteIntegrationEmployees返回参数结构体
 */
export interface DeleteIntegrationEmployeesResponse {
    /**
      * 员工删除数据
      */
    DeleteEmployeeResult: DeleteStaffsResult;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * VerifyPdf返回参数结构体
 */
export interface VerifyPdfResponse {
    /**
      * 验签结果，1-文件未被篡改，全部签名在腾讯电子签完成； 2-文件未被篡改，部分签名在腾讯电子签完成；3-文件被篡改；4-异常：文件内没有签名域；5-异常：文件签名格式错误
      */
    VerifyResult: number;
    /**
      * 验签结果详情,内部状态1-验签成功，在电子签签署；2-验签成功，在其他平台签署；3-验签失败；4-pdf文件没有签名域
；5-文件签名格式错误
      */
    PdfVerifyResults: Array<PdfVerifyResult>;
    /**
      * 验签序列号
      */
    VerifySerialNo: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 删除员工结果
 */
export interface DeleteStaffsResult {
    /**
      * 删除员工的成功数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    SuccessEmployeeData: Array<SuccessDeleteStaffData>;
    /**
      * 删除员工的失败数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedEmployeeData: Array<FailedDeleteStaffData>;
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
 * 企业超管信息
 */
export interface Admin {
    /**
      * 超管名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 超管手机号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mobile?: string;
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
 * UploadFiles请求参数结构体
 */
export interface UploadFilesRequest {
    /**
      * 文件对应业务类型
1. TEMPLATE - 模板； 文件类型：.pdf/.doc/.docx/.html
2. DOCUMENT - 签署过程及签署后的合同文档/图片控件 文件类型：.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html
3. SEAL - 印章； 文件类型：.jpg/.jpeg/.png
      */
    BusinessType: string;
    /**
      * 调用方信息，其中OperatorId为必填字段，即用户的UserId
      */
    Caller?: Caller;
    /**
      * 上传文件内容数组，最多支持20个文件
      */
    FileInfos?: Array<UploadFile>;
    /**
      * 文件类型， 默认通过文件内容解析得到文件类型，客户可以显示的说明上传文件的类型。
如：PDF 表示上传的文件 xxx.pdf的文件类型是 PDF
      */
    FileType?: string;
    /**
      * 此参数只对 PDF 文件有效。是否将pdf灰色矩阵置白
true--是，处理置白
默认为false--否，不处理
      */
    CoverRect?: boolean;
    /**
      * 用户自定义ID数组，与上传文件一一对应
      */
    CustomIds?: Array<string>;
    /**
      * 不再使用，上传文件链接数组，最多支持20个URL
      */
    FileUrls?: string;
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
      * 用户信息
      */
    Operator: UserInfo;
    /**
      * 模板ID
      */
    TemplateId: string;
    /**
      * 签署流程名称，最大长度不超过200字符
      */
    FlowName: string;
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
    Restrictions?: Array<ApproverRestriction>;
    /**
      * 回调地址,最大长度1000字符串
回调时机：
用户通过签署二维码发起签署流程时，企业额度不足导致失败
      */
    CallbackUrl?: string;
    /**
      * 应用信息
      */
    Agent?: Agent;
    /**
      * 限制二维码用户条件（已弃用）
      */
    ApproverRestrictions?: ApproverRestriction;
}
/**
 * DescribeFlowInfo返回参数结构体
 */
export interface DescribeFlowInfoResponse {
    /**
      * 签署流程信息
      */
    FlowDetailInfos?: Array<FlowDetailInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DescribeOrganizationGroupOrganizations返回参数结构体
 */
export interface DescribeOrganizationGroupOrganizationsResponse {
    /**
      * 查询到的符合条件的成员企业总数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: number;
    /**
      * 已授权待激活的企业数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    JoinedTotal?: number;
    /**
      * 已加入的企业数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActivedTotal?: number;
    /**
      * 导出文件的url
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExportUrl?: string;
    /**
      * 成员企业信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    List?: Array<GroupOrganization>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
