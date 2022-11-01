/**
 * 资源链接信息
 */
export interface ResourceUrlInfo {
    /**
      * 资源链接地址，过期时间5分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
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
      * 签名类型
      */
    SignType: number;
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
 * 创建签署流程签署人入参。

其中签署方FlowApproverInfo需要传递的参数
非单C、单B、B2C合同，ApproverType、RecipientId（模板发起合同时）必传，建议都传。其他身份标识
1-个人：Name、Mobile必传
2-渠道子客企业指定经办人：OpenId必传，OrgName必传、OrgOpenId必传；
3-渠道合作企业不指定经办人：（暂不支持）
4-非渠道合作企业：Name、Mobile必传，OrgName必传，且NotChannelOrganization=True。

RecipientId参数：
从DescribeTemplates接口中，可以得到模板下的签署方Recipient列表，根据模板自定义的Rolename在此结构体中确定其RecipientId
 */
export interface FlowApproverInfo {
    /**
      * 签署人姓名，最大长度50个字符
      */
    Name?: string;
    /**
      * 经办人身份证件类型
1.ID_CARD 居民身份证
2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证
3.HONGKONG_AND_MACAO 港澳居民来往内地通行证
      */
    IdCardType?: string;
    /**
      * 经办人证件号
      */
    IdCardNumber?: string;
    /**
      * 签署人手机号，脱敏显示。大陆手机号为11位，暂不支持海外手机号。
      */
    Mobile?: string;
    /**
      * 企业签署方工商营业执照上的企业名称，签署方为非发起方企业场景下必传，最大长度64个字符；
      */
    OrganizationName?: string;
    /**
      * 指定签署人非渠道企业下员工，在ApproverType为ORGANIZATION时指定。
默认为false，即签署人位于同一个渠道应用号下；
      */
    NotChannelOrganization?: boolean;
    /**
      * 用户侧第三方id，最大长度64个字符
      */
    OpenId?: string;
    /**
      * 企业签署方在同一渠道下的其他合作企业OpenId，签署方为非发起方企业场景下必传，最大长度64个字符；
      */
    OrganizationOpenId?: string;
    /**
      * 签署人类型，PERSON-个人；
PERSON_AUTO_SIGN-个人自动签；
ORGANIZATION-企业；
ENTERPRISESERVER-企业静默签;
注：ENTERPRISESERVER 类型仅用于使用文件创建签署流程（ChannelCreateFlowByFiles）接口；
      */
    ApproverType?: string;
    /**
      * 签署流程签署人在模板中对应的签署人Id；在非单方签署、以及非B2C签署的场景下必传，用于指定当前签署方在签署流程中的位置；
      */
    RecipientId?: string;
    /**
      * 签署截止时间，默认一年
      */
    Deadline?: number;
    /**
      * 签署完回调url，最大长度1000个字符
      */
    CallbackUrl?: string;
    /**
      * 使用PDF文件直接发起合同时，签署人指定的签署控件
      */
    SignComponents?: Array<Component>;
    /**
      * 个人签署方指定签署控件类型，目前仅支持：OCR_ESIGN(AI智慧手写签名)
      */
    ComponentLimitType?: Array<string>;
    /**
      * 合同的强制预览时间：3~300s，未指定则按合同页数计算
      */
    PreReadTime?: number;
    /**
      * 签署完前端跳转的url，暂未使用
      */
    JumpUrl?: string;
    /**
      * 签署人个性化能力值
      */
    ApproverOption?: ApproverOption;
    /**
      * 当前签署方进行签署操作是否需要企业内部审批，true 则为需要
      */
    ApproverNeedSignReview?: boolean;
}
/**
 * ChannelCreateConvertTaskApi返回参数结构体
 */
export interface ChannelCreateConvertTaskApiResponse {
    /**
      * 任务id
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * OperateChannelTemplate请求参数结构体
 */
export interface OperateChannelTemplateRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 操作类型，查询:"SELECT"，删除:"DELETE"，更新:"UPDATE"
      */
    OperateType: string;
    /**
      * 渠道方模板库模板唯一标识
      */
    TemplateId: string;
    /**
      * 合作企业方第三方机构唯一标识数据，支持多个， 用","进行分隔
      */
    ProxyOrganizationOpenIds?: string;
    /**
      * 模板可见性, 全部可见-"all", 部分可见-"part"
      */
    AuthTag?: string;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * 此结构体 (TemplateInfo) 用于描述模板的信息。
 */
export interface TemplateInfo {
    /**
      * 模板ID
      */
    TemplateId: string;
    /**
      * 模板名字
      */
    TemplateName: string;
    /**
      * 模板描述信息
      */
    Description: string;
    /**
      * 模板控件信息结构
      */
    Components: Array<Component>;
    /**
      * 签署区模板信息结构
      */
    SignComponents: Array<Component>;
    /**
      * 模板中的流程参与人信息
      */
    Recipients: Array<Recipient>;
    /**
      * 模板类型：1-静默签；3-普通模板
      */
    TemplateType: number;
    /**
      * 是否是发起人 ,已弃用
      */
    IsPromoter: boolean;
    /**
      * 模板的创建者信息
      */
    Creator: string;
    /**
      * 模板创建的时间戳（精确到秒）
      */
    CreatedOn: number;
}
/**
 * ChannelDescribeEmployees请求参数结构体
 */
export interface ChannelDescribeEmployeesRequest {
    /**
      * 返回最大数量，最大为20
      */
    Limit: number;
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent?: Agent;
    /**
      * 查询过滤实名用户，Key为Status，Values为["IsVerified"]
根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...]
      */
    Filters?: Array<Filter>;
    /**
      * 偏移量，默认为0，最大为20000
      */
    Offset?: number;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * SyncProxyOrganization返回参数结构体
 */
export interface SyncProxyOrganizationResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ChannelCreateFlowGroupByFiles返回参数结构体
 */
export interface ChannelCreateFlowGroupByFilesResponse {
    /**
      * 合同组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowGroupId: string;
    /**
      * 子合同ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetDownloadFlowUrl返回参数结构体
 */
export interface GetDownloadFlowUrlResponse {
    /**
      * 合同（流程）下载地址
      */
    DownLoadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTemplates返回参数结构体
 */
export interface DescribeTemplatesResponse {
    /**
      * 模板详情
      */
    Templates: Array<TemplateInfo>;
    /**
      * 查询总数
      */
    TotalCount: number;
    /**
      * 查询数量
      */
    Limit: number;
    /**
      * 查询起始偏移
      */
    Offset: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeResourceUrlsByFlows返回参数结构体
 */
export interface DescribeResourceUrlsByFlowsResponse {
    /**
      * 签署流程资源对应链接信息
      */
    FlowResourceUrlInfos: Array<FlowResourceUrlInfo>;
    /**
      * 创建消息，对应多个合同ID，
成功为“”,创建失败则对应失败消息
      */
    ErrorMessages: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ChannelCreateMultiFlowSignQRCode返回参数结构体
 */
export interface ChannelCreateMultiFlowSignQRCodeResponse {
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
 * 签署人个性化能力信息
 */
export interface ApproverOption {
    /**
      * 是否隐藏一键签署 false-不隐藏,默认 true-隐藏
      */
    HideOneKeySign?: boolean;
}
/**
 * 签署参与者信息
 */
export interface Recipient {
    /**
      * 签署人唯一标识
      */
    RecipientId?: string;
    /**
      * 签署方类型：ENTERPRISE-企业INDIVIDUAL-自然人
      */
    RecipientType?: string;
    /**
      * 描述
      */
    Description?: string;
    /**
      * 签署方备注信息
      */
    RoleName?: string;
    /**
      * 是否需要校验
      */
    RequireValidation?: boolean;
    /**
      * 是否必须填写
      */
    RequireSign?: boolean;
    /**
      * 签署类型
      */
    SignType?: number;
    /**
      * 签署顺序：数字越小优先级越高
      */
    RoutingOrder?: number;
    /**
      * 是否是发起方
      */
    IsPromoter?: boolean;
}
/**
 * 渠道版员工部门信息
 */
export interface Department {
    /**
      * 部门id
注意：此字段可能返回 null，表示取不到有效值。
      */
    DepartmentId: string;
    /**
      * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    DepartmentName: string;
}
/**
 * OperateChannelTemplate返回参数结构体
 */
export interface OperateChannelTemplateResponse {
    /**
      * 腾讯电子签颁发给渠道的应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppId: string;
    /**
      * 渠道方模板库模板唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateId: string;
    /**
      * 全部成功-"all-success",部分成功-"part-success", 全部失败-"fail"失败的会在FailMessageList中展示
注意：此字段可能返回 null，表示取不到有效值。
      */
    OperateResult: string;
    /**
      * 模板可见性, 全部可见-"all", 部分可见-"part"
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthTag: string;
    /**
      * 合作企业方第三方机构唯一标识数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyOrganizationOpenIds: Array<string>;
    /**
      * 操作失败信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailMessageList: Array<AuthFailMessage>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 渠道版员工角色信息
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
 * CreateSignUrls返回参数结构体
 */
export interface CreateSignUrlsResponse {
    /**
      * 签署参与者签署H5链接信息数组
      */
    SignUrlInfos: Array<SignUrlInfo>;
    /**
      * 生成失败时的错误信息，成功返回”“，顺序和出参SignUrlInfos保持一致
      */
    ErrorMessages: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSignUrls请求参数结构体
 */
export interface CreateSignUrlsRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 签署流程编号数组，最多支持100个。(备注：该参数和合同组编号必须二选一)
      */
    FlowIds?: Array<string>;
    /**
      * 合同组编号(备注：该参数和合同(流程)编号数组必须二选一)
      */
    FlowGroupId?: string;
    /**
      * 签署链接类型：“WEIXINAPP”-短链直接跳小程序；“CHANNEL”-跳转H5页面；“APP”-第三方APP或小程序跳转电子签小程序；"LONGURL2WEIXINAPP"-长链接跳转小程序；默认“WEIXINAPP”类型，即跳转至小程序；
      */
    Endpoint?: string;
    /**
      * 签署链接生成类型，默认是 "ALL"；
"ALL"：全部签署方签署链接，此时不会给自动签署的签署方创建签署链接；
"CHANNEL"：渠道合作企业；
"NOT_CHANNEL"：非渠道合作企业；
"PERSON"：个人；
"FOLLOWER"：关注方，目前是合同抄送方；
      */
    GenerateType?: string;
    /**
      * 非渠道合作企业参与方的企业名称，GenerateType为"NOT_CHANNEL"时必填
      */
    OrganizationName?: string;
    /**
      * 参与人姓名，GenerateType为"PERSON"时必填
      */
    Name?: string;
    /**
      * 参与人手机号；
GenerateType为"PERSON"或"FOLLOWER"时必填
      */
    Mobile?: string;
    /**
      * 渠道合作企业的企业Id，GenerateType为"CHANNEL"时必填
      */
    OrganizationOpenId?: string;
    /**
      * 渠道合作企业参与人OpenId，GenerateType为"CHANNEL"时可用，指定到具体参与人
      */
    OpenId?: string;
    /**
      * Endpoint为"APP" 类型的签署链接，可以设置此值；支持调用方小程序打开签署链接，在电子签小程序完成签署后自动回跳至调用方小程序
      */
    AutoJumpBack?: boolean;
    /**
      * 签署完之后的H5页面的跳转链接，针对Endpoint为CHANNEL时有效，最大长度1000个字符。
      */
    JumpUrl?: string;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * ChannelCreateMultiFlowSignQRCode请求参数结构体
 */
export interface ChannelCreateMultiFlowSignQRCodeRequest {
    /**
      * 渠道应用相关信息。
此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 必填。
      */
    Agent: Agent;
    /**
      * 模版ID
      */
    TemplateId: string;
    /**
      * 签署流程名称，最大长度200个字符。
      */
    FlowName: string;
    /**
      * 最大可发起签署流程份数，默认5份；发起签署流程数量超过此上限后，二维码自动失效。
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
      * 回调地址，最大长度1000个字符
不传默认使用渠道应用号配置的回调地址
回调时机:用户通过签署二维码发起合同时，企业额度不足导致失败
      */
    CallbackUrl?: string;
    /**
      * 用户信息
      */
    Operator?: UserInfo;
    /**
      * 限制二维码用户条件（已弃用）
      */
    ApproverRestrictions?: ApproverRestriction;
}
/**
 * 授权出错信息
 */
export interface AuthFailMessage {
    /**
      * 合作企业Id
      */
    ProxyOrganizationOpenId: string;
    /**
      * 出错信息
      */
    Message: string;
}
/**
 * DescribeFlowDetailInfo请求参数结构体
 */
export interface DescribeFlowDetailInfoRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 合同(流程)编号数组，最多支持100个。
（备注：该参数和合同组编号必须二选一）
      */
    FlowIds?: Array<string>;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
    /**
      * 合同组编号（备注：该参数和合同(流程)编号数组必须二选一）
      */
    FlowGroupId?: string;
}
/**
 * ChannelGetTaskResultApi返回参数结构体
 */
export interface ChannelGetTaskResultApiResponse {
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
      * 预览文件Url，有效期30分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
    PreviewUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 文件名
      */
    FileName?: string;
}
/**
 * 合同组中每个子合同的发起信息
 */
export interface FlowFileInfo {
    /**
      * 签署文件资源Id列表，目前仅支持单个文件
      */
    FileIds: Array<string>;
    /**
      * 签署流程名称，长度不超过200个字符
      */
    FlowName: string;
    /**
      * 签署流程签约方列表，最多不超过5个参与方
      */
    FlowApprovers: Array<FlowApproverInfo>;
    /**
      * 签署流程截止时间，十位数时间戳，最大值为33162419560，即3020年
      */
    Deadline?: number;
    /**
      * 签署流程的描述，长度不超过1000个字符
      */
    FlowDescription?: string;
    /**
      * 签署流程的类型，长度不超过255个字符
      */
    FlowType?: string;
    /**
      * 签署流程回调地址，长度不超过255个字符
      */
    CallbackUrl?: string;
    /**
      * 渠道的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
      */
    CustomerData?: string;
    /**
      * 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署
      */
    Unordered?: boolean;
    /**
      * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
      */
    CustomShowMap?: string;
    /**
      * 本企业(发起方企业)是否需要签署审批
      */
    NeedSignReview?: boolean;
}
/**
 * ChannelGetTaskResultApi请求参数结构体
 */
export interface ChannelGetTaskResultApiRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 任务Id，通过ChannelCreateConvertTaskApi接口获得
      */
    TaskId: string;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
    /**
      * 暂未开放
      */
    Organization?: OrganizationInfo;
}
/**
 * ChannelVerifyPdf返回参数结构体
 */
export interface ChannelVerifyPdfResponse {
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 签署链接内容
 */
export interface SignUrlInfo {
    /**
      * 签署链接，过期时间为30天
注意：此字段可能返回 null，表示取不到有效值。
      */
    SignUrl: string;
    /**
      * 合同过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Deadline: number;
    /**
      * 当流程为顺序签署此参数有效时，数字越小优先级越高，暂不支持并行签署 可选
注意：此字段可能返回 null，表示取不到有效值。
      */
    SignOrder: number;
    /**
      * 签署人编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    SignId: string;
    /**
      * 自定义用户编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomUserId: string;
    /**
      * 用户姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 用户手机号码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mobile: string;
    /**
      * 签署参与者机构名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrganizationName: string;
    /**
      * 参与者类型:
ORGANIZATION 企业经办人
PERSON 自然人
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproverType: string;
    /**
      * 经办人身份证号
注意：此字段可能返回 null，表示取不到有效值。
      */
    IdCardNumber: string;
    /**
      * 签署链接对应流程Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: string;
    /**
      * 企业经办人 用户在渠道的编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenId: string;
    /**
      * 合同组签署链接对应的合同组id
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowGroupId: string;
}
/**
 * 此结构体 (Component) 用于描述控件属性。

在通过文件发起合同时，对应的component有三种定位方式
1. 绝对定位方式
2. 表单域(FIELD)定位方式
3. 关键字(KEYWORD)定位方式
可以参考官网说明
https://cloud.tencent.com/document/product/1323/78346#component-.E4.B8.89.E7.A7.8D.E5.AE.9A.E4.BD.8D.E6.96.B9.E5.BC.8F.E8.AF.B4.E6.98.8E
 */
export interface Component {
    /**
      * 控件编号

CreateFlowByTemplates发起合同时优先以ComponentId（不为空）填充；否则以ComponentName填充

注：
当GenerateMode=3时，通过"^"来决定是否使用关键字整词匹配能力。
例：
当GenerateMode=3时，如果传入关键字"^甲方签署^"，则会在PDF文件中有且仅有"甲方签署"关键字的地方进行对应操作。
如传入的关键字为"甲方签署"，则PDF文件中每个出现关键字的位置都会执行相应操作。

创建控件时，此值为空
查询时返回完整结构
      */
    ComponentId?: string;
    /**
      * 如果是Component控件类型，则可选的字段为：
TEXT - 普通文本控件；
MULTI_LINE_TEXT - 多行文本控件；
CHECK_BOX - 勾选框控件；
FILL_IMAGE - 图片控件；
DYNAMIC_TABLE - 动态表格控件；
ATTACHMENT - 附件控件；
SELECTOR - 选择器控件；
DATE - 日期控件；默认是格式化为xxxx年xx月xx日

如果是SignComponent控件类型，则可选的字段为
SIGN_SEAL - 签署印章控件；
SIGN_DATE - 签署日期控件；
SIGN_SIGNATURE - 用户签名控件；
SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；
SIGN_PAGING_SEAL - 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight

表单域的控件不能作为印章和签名控件
      */
    ComponentType?: string;
    /**
      * 控件简称，不能超过30个字符
      */
    ComponentName?: string;
    /**
      * 定义控件是否为必填项，默认为false
      */
    ComponentRequired?: boolean;
    /**
      * 控件关联的签署方id
      */
    ComponentRecipientId?: string;
    /**
      * 控件所属文件的序号 (文档中文件的排列序号，从0开始)
      */
    FileIndex?: number;
    /**
      * 控件生成的方式：
NORMAL - 普通控件
FIELD - 表单域
KEYWORD - 关键字
      */
    GenerateMode?: string;
    /**
      * 参数控件宽度，默认100，单位px
表单域和关键字转换控件不用填
      */
    ComponentWidth?: number;
    /**
      * 参数控件高度，默认100，单位px
表单域和关键字转换控件不用填
      */
    ComponentHeight?: number;
    /**
      * 参数控件所在页码，从1开始
      */
    ComponentPage?: number;
    /**
      * 参数控件X位置，单位px
      */
    ComponentPosX?: number;
    /**
      * 参数控件Y位置，单位px
      */
    ComponentPosY?: number;
    /**
      * 参数控件样式，json格式表述
不同类型的控件会有部分非通用参数
TEXT/MULTI_LINE_TEXT控件可以指定
1 Font：目前只支持黑体、宋体
2 FontSize： 范围12-72
3 FontAlign： Left/Right/Center，左对齐/居中/右对齐
例如：{"FontSize":12}
      */
    ComponentExtra?: string;
    /**
      * 控件填充vaule，ComponentType和传入值类型对应关系：
TEXT - 文本内容
MULTI_LINE_TEXT - 文本内容
CHECK_BOX - true/false
FILL_IMAGE、ATTACHMENT - 附件的FileId，需要通过UploadFiles接口上传获取
SELECTOR - 选项值
DATE - 默认是格式化为xxxx年xx月xx日
DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo：https://cloud.tencent.com/document/api/1420/61525#FlowInfo
SIGN_SEAL - 印章ID
SIGN_PAGING_SEAL - 可以指定印章ID
      */
    ComponentValue?: string;
    /**
      * 日期签署控件的字号，默认为 12

签署区日期控件会转换成图片格式并带存证，需要通过字体决定图片大小
      */
    ComponentDateFontSize?: number;
    /**
      * 控件所属文档的Id, 模块相关接口为空值
      */
    DocumentId?: string;
    /**
      * 控件描述，不能超过30个字符
      */
    ComponentDescription?: string;
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
 * GetDownloadFlowUrl请求参数结构体
 */
export interface GetDownloadFlowUrlRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 文件夹数组，签署流程总数不能超过50个，一个文件夹下，不能超过20个签署流程
      */
    DownLoadFlows?: Array<DownloadFlowInfo>;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * ChannelBatchCancelFlows请求参数结构体
 */
export interface ChannelBatchCancelFlowsRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 签署流程Id数组，最多100个，超过100不处理
      */
    FlowIds: Array<string>;
    /**
      * 撤销理由
      */
    CancelMessage?: string;
    /**
      * 撤销理由自定义格式；选项：
0 默认格式
1 只保留身份信息：展示为【发起方】
2 保留身份信息+企业名称：展示为【发起方xxx公司】
3 保留身份信息+企业名称+经办人名称：展示为【发起方xxxx公司-经办人姓名】
      */
    CancelMessageFormat?: number;
    /**
      * 操作人信息
      */
    Operator?: UserInfo;
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
      */
    FlowType: string;
    /**
      * 合同(流程)的状态
      */
    FlowStatus: string;
    /**
      * 合同(流程)的信息
      */
    FlowMessage: string;
    /**
      * 合同(流程)的创建时间戳
      */
    CreateOn: number;
    /**
      * 合同(流程)的签署截止时间戳
      */
    DeadLine: number;
    /**
      * 用户自定义数据
      */
    CustomData: string;
    /**
      * 合同(流程)的签署人数组
      */
    FlowApproverInfos: Array<FlowApproverDetail>;
}
/**
 * 同步经办人失败原因
 */
export interface SyncFailReason {
    /**
      * 经办人Id
      */
    Id: string;
    /**
      * 失败原因
例如：Id不符合规范、证件号码不合法等
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
}
/**
 * CreateConsoleLoginUrl请求参数结构体
 */
export interface CreateConsoleLoginUrlRequest {
    /**
      * 应用信息
此接口Agent.AppId、Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填
      */
    Agent: Agent;
    /**
      * 渠道子客企业名称，最大长度64个字符
      */
    ProxyOrganizationName: string;
    /**
      * 渠道子客企业经办人的姓名，最大长度50个字符
      */
    ProxyOperatorName?: string;
    /**
      * 控制台指定模块，文件/合同管理:"DOCUMENT"，模板管理:"TEMPLATE"，印章管理:"SEAL"，组织架构/人员:"OPERATOR"，空字符串："账号信息"
      */
    Module?: string;
    /**
      * 控制台指定模块Id
      */
    ModuleId?: string;
    /**
      * 渠道子客企业统一社会信用代码，最大长度200个字符
      */
    UniformSocialCreditCode?: string;
    /**
      * 是否展示左侧菜单栏 是：ENABLE（默认） 否：DISABLE
      */
    MenuStatus?: string;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * 机构信息
 */
export interface OrganizationInfo {
    /**
      * 用户在渠道的机构编号
      */
    OrganizationOpenId: string;
    /**
      * 用户真实的IP
      */
    ClientIp: string;
    /**
      * 机构的代理IP
      */
    ProxyIp: string;
    /**
      * 机构在平台的编号
      */
    OrganizationId?: string;
    /**
      * 用户渠道
      */
    Channel?: string;
}
/**
 * CreateFlowsByTemplates返回参数结构体
 */
export interface CreateFlowsByTemplatesResponse {
    /**
      * 多个合同ID
      */
    FlowIds: Array<string>;
    /**
      * 渠道的业务信息，限制1024字符
      */
    CustomerData: Array<string>;
    /**
      * 创建消息，对应多个合同ID，
成功为“”,创建失败则对应失败消息
      */
    ErrorMessages: Array<string>;
    /**
      * 预览模式下返回的预览文件url数组
      */
    PreviewUrls: Array<string>;
    /**
      * 复杂文档合成任务的任务信息数组
      */
    TaskInfos: Array<TaskInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ChannelCreateFlowSignReview请求参数结构体
 */
export interface ChannelCreateFlowSignReviewRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 签署流程编号
      */
    FlowId: string;
    /**
      * 企业内部审核结果
PASS: 通过
REJECT: 拒绝
SIGN_REJECT:拒签(流程结束)
      */
    ReviewType: string;
    /**
      * 审核原因
当ReviewType 是REJECT 时此字段必填,字符串长度不超过200
      */
    ReviewMessage?: string;
}
/**
 * DescribeUsage返回参数结构体
 */
export interface DescribeUsageResponse {
    /**
      * 用量明细条数
      */
    Total: number;
    /**
      * 用量明细
注意：此字段可能返回 null，表示取不到有效值。
      */
    Details: Array<UsageDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 合作企业经办人列表信息
 */
export interface ProxyOrganizationOperator {
    /**
      * 经办人ID（渠道颁发），最大长度64个字符
      */
    Id: string;
    /**
      * 经办人姓名，最大长度50个字符
      */
    Name?: string;
    /**
      * 经办人身份证件类型
1.ID_CARD 居民身份证
2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证
3.HONGKONG_AND_MACAO 港澳居民来往内地通行证
      */
    IdCardType?: string;
    /**
      * 经办人证件号
      */
    IdCardNumber?: string;
    /**
      * 经办人手机号，大陆手机号输入11位，暂不支持海外手机号。
      */
    Mobile?: string;
}
/**
 * SyncProxyOrganizationOperators返回参数结构体
 */
export interface SyncProxyOrganizationOperatorsResponse {
    /**
      * Status 同步状态,全部同步失败接口会直接报错
1-成功
2-部分成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 同步失败经办人及其失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedList: Array<SyncFailReason>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSealByImage返回参数结构体
 */
export interface CreateSealByImageResponse {
    /**
      * 印章id
      */
    SealId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ChannelVerifyPdf请求参数结构体
 */
export interface ChannelVerifyPdfRequest {
    /**
      * 合同Id，流程Id
      */
    FlowId: string;
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent?: Agent;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * DescribeResourceUrlsByFlows请求参数结构体
 */
export interface DescribeResourceUrlsByFlowsRequest {
    /**
      * 渠道应用相关信息。
此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 查询资源所对应的签署流程Id，最多支持50个
      */
    FlowIds?: Array<string>;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * 流程对应资源链接信息
 */
export interface FlowResourceUrlInfo {
    /**
      * 流程对应Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: string;
    /**
      * 流程对应资源链接信息数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceUrlInfos: Array<ResourceUrlInfo>;
}
/**
 * ChannelCancelFlow请求参数结构体
 */
export interface ChannelCancelFlowRequest {
    /**
      * 签署流程编号
      */
    FlowId: string;
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent?: Agent;
    /**
      * 撤回原因，最大不超过200字符
      */
    CancelMessage?: string;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
    /**
      * 撤销理由自定义格式；选项：
0 默认格式
1 只保留身份信息：展示为【发起方】
2 保留身份信息+企业名称：展示为【发起方xxx公司】
3 保留身份信息+企业名称+经办人名称：展示为【发起方xxxx公司-经办人姓名】
      */
    CancelMessageFormat?: number;
}
/**
 * DescribeTemplates请求参数结构体
 */
export interface DescribeTemplatesRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 模板唯一标识，查询单个模板时使用
      */
    TemplateId?: string;
    /**
      * 查询内容：0-模板列表及详情（默认），1-仅模板列表
      */
    ContentType?: number;
    /**
      * 查询个数，默认20，最大100；在查询列表的时候有效
      */
    Limit?: number;
    /**
      * 查询偏移位置，默认0；在查询列表的时候有效
      */
    Offset?: number;
    /**
      * 是否返回所有组件信息。默认false，只返回发起方控件；true，返回所有签署方控件
      */
    QueryAllComponents?: boolean;
    /**
      * 模糊搜索模板名称，最大长度200
      */
    TemplateName?: string;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * SyncProxyOrganizationOperators请求参数结构体
 */
export interface SyncProxyOrganizationOperatorsRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.AppId 和 Agent.ProxyOrganizationOpenId必填。
      */
    Agent: Agent;
    /**
      * 操作类型，新增:"CREATE"，修改:"UPDATE"，离职:"RESIGN"
      */
    OperatorType: string;
    /**
      * 经办人信息列表，最大长度200
      */
    ProxyOrganizationOperators: Array<ProxyOrganizationOperator>;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * CreateConsoleLoginUrl返回参数结构体
 */
export interface CreateConsoleLoginUrlResponse {
    /**
      * 子客Web控制台url，此链接5分钟内有效，且只能访问一次。同时需要注意：
1. 此链接仅单次有效，使用后需要再次创建新的链接（部分聊天软件，如企业微信默认会对链接进行解析，此时需要使用类似“代码片段”的方式或者放到txt文件里发送链接）；
2. 创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义
      */
    ConsoleUrl: string;
    /**
      * 渠道子客企业是否已开通腾讯电子签
      */
    IsActivated: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateFlowsByTemplates请求参数结构体
 */
export interface CreateFlowsByTemplatesRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 多个合同（签署流程）信息，最多支持20个
      */
    FlowInfos: Array<FlowInfo>;
    /**
      * 是否为预览模式；默认为false，即非预览模式，此时发起合同并返回FlowIds；若为预览模式，不会发起合同，会返回PreviewUrls（此Url返回的是PDF文件流 ）；
预览链接有效期300秒；
      */
    NeedPreview?: boolean;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * 此结构体 (Filter) 用于描述查询过滤条件。
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
 * SyncProxyOrganization请求参数结构体
 */
export interface SyncProxyOrganizationRequest {
    /**
      * 应用信息
此接口Agent.AppId、Agent.ProxyOrganizationOpenId必填
      */
    Agent: Agent;
    /**
      * 渠道侧合作企业名称，最大长度64个字符
      */
    ProxyOrganizationName: string;
    /**
      * 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M
      */
    BusinessLicense?: string;
    /**
      * 渠道侧合作企业统一社会信用代码，最大长度200个字符
      */
    UniformSocialCreditCode?: string;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * CreateSealByImage请求参数结构体
 */
export interface CreateSealByImageRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 印章名称，最大长度不超过30字符
      */
    SealName: string;
    /**
      * 印章图片base64
      */
    SealImage: string;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
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
 * ChannelBatchCancelFlows返回参数结构体
 */
export interface ChannelBatchCancelFlowsResponse {
    /**
      * 签署流程批量撤销失败原因，错误信息与流程Id一一对应，如果部分流程不可撤销，不会返回错误信息，只会撤销可撤销流程
      */
    FailMessages: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * PrepareFlows请求参数结构体
 */
export interface PrepareFlowsRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 多个合同（签署流程）信息，最大支持20个签署流程。
      */
    FlowInfos: Array<FlowInfo>;
    /**
      * 操作完成后的跳转地址，最大长度200
      */
    JumpUrl: string;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * 用量明细
 */
export interface UsageDetail {
    /**
      * 渠道侧合作企业唯一标识
      */
    ProxyOrganizationOpenId: string;
    /**
      * 渠道侧合作企业名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyOrganizationName: string;
    /**
      * 日期，当需要汇总数据时日期为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    Date: string;
    /**
      * 消耗数量
      */
    Usage: number;
    /**
      * 撤回数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cancel: number;
}
/**
 * ChannelCreateBatchCancelFlowUrl返回参数结构体
 */
export interface ChannelCreateBatchCancelFlowUrlResponse {
    /**
      * 批量撤销url
      */
    BatchCancelFlowUrl: string;
    /**
      * 签署流程批量撤销失败原因
      */
    FailMessages: Array<string>;
    /**
      * 签署撤销url过期时间-年月日-时分秒
      */
    UrlExpireOn: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ChannelCancelFlow返回参数结构体
 */
export interface ChannelCancelFlowResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 签署流程下载信息
 */
export interface DownloadFlowInfo {
    /**
      * 文件夹名称
      */
    FileName: string;
    /**
      * 签署流程的标识数组
      */
    FlowIdList: Array<string>;
}
/**
 * ChannelCancelMultiFlowSignQRCode请求参数结构体
 */
export interface ChannelCancelMultiFlowSignQRCodeRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 二维码id
      */
    QrCodeId: string;
    /**
      * 用户信息
      */
    Operator?: UserInfo;
}
/**
 * PrepareFlows返回参数结构体
 */
export interface PrepareFlowsResponse {
    /**
      * 待发起文件确认页
      */
    ConfirmUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ChannelDescribeEmployees返回参数结构体
 */
export interface ChannelDescribeEmployeesResponse {
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
 * 复杂文档合成任务的任务信息
 */
export interface TaskInfo {
    /**
      * 合成任务Id，可以通过 ChannelGetTaskResultApi 接口获取任务信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 任务状态：READY - 任务已完成；NOTREADY - 任务未完成；
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskStatus: string;
}
/**
 * DescribeUsage请求参数结构体
 */
export interface DescribeUsageRequest {
    /**
      * 应用信息
      */
    Agent: Agent;
    /**
      * 开始时间，例如：2021-03-21
      */
    StartDate: string;
    /**
      * 结束时间，例如：2021-06-21；
开始时间到结束时间的区间长度小于等于90天。
      */
    EndDate: string;
    /**
      * 是否汇总数据，默认不汇总。
不汇总：返回在统计区间内渠道下所有企业的每日明细，即每个企业N条数据，N为统计天数；
汇总：返回在统计区间内渠道下所有企业的汇总后数据，即每个企业一条数据；
      */
    NeedAggregate?: boolean;
    /**
      * 单次返回的最多条目数量。默认为1000，且不能超过1000。
      */
    Limit?: number;
    /**
      * 偏移量，默认是0。
      */
    Offset?: number;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * ChannelCreateBatchCancelFlowUrl请求参数结构体
 */
export interface ChannelCreateBatchCancelFlowUrlRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 签署流程Id数组
      */
    FlowIds: Array<string>;
    /**
      * 操作人信息
      */
    Operator?: UserInfo;
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
 * ChannelCreateFlowByFiles请求参数结构体
 */
export interface ChannelCreateFlowByFilesRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent?: Agent;
    /**
      * 签署流程名称，长度不超过200个字符
      */
    FlowName?: string;
    /**
      * 签署流程签约方列表，最多不超过5个参与方
      */
    FlowApprovers?: Array<FlowApproverInfo>;
    /**
      * 签署文件资源Id列表，目前仅支持单个文件
      */
    FileIds?: Array<string>;
    /**
      * 签署文件中的发起方的填写控件，需要在发起的时候进行填充
      */
    Components?: Array<Component>;
    /**
      * 签署流程截止时间，十位数时间戳，最大值为33162419560，即3020年
      */
    Deadline?: number;
    /**
      * 签署流程回调地址，长度不超过255个字符
      */
    CallbackUrl?: string;
    /**
      * 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署。有序签署时以传入FlowApprovers数组的顺序作为签署顺序
      */
    Unordered?: boolean;
    /**
      * 签署流程的类型，长度不超过255个字符
      */
    FlowType?: string;
    /**
      * 签署流程的描述，长度不超过1000个字符
      */
    FlowDescription?: string;
    /**
      * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
      */
    CustomShowMap?: string;
    /**
      * 渠道的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
      */
    CustomerData?: string;
    /**
      * 发起方企业的签署人进行签署操作是否需要企业内部审批。 若设置为true,审核结果需通过接口 ChannelCreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。  注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
      */
    NeedSignReview?: boolean;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * ChannelCreateFlowByFiles返回参数结构体
 */
export interface ChannelCreateFlowByFilesResponse {
    /**
      * 合同签署流程ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowId: string;
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
      * 文件id数组，有效期一个小时；有效期内此文件id可以反复使用
      */
    FileIds: Array<string>;
    /**
      * 上传成功文件数量
      */
    TotalCount: number;
    /**
      * 文件Url
      */
    FileUrls: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ChannelCreateFlowSignReview返回参数结构体
 */
export interface ChannelCreateFlowSignReviewResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 应用相关信息
 */
export interface Agent {
    /**
      * 腾讯电子签颁发给渠道的应用ID，32位字符串
      */
    AppId: string;
    /**
      * 渠道/平台合作企业的企业ID，最大64位字符串
      */
    ProxyOrganizationOpenId?: string;
    /**
      * 渠道/平台合作企业经办人（操作员）
      */
    ProxyOperator?: UserInfo;
    /**
      * 腾讯电子签颁发给渠道侧合作企业的应用ID
      */
    ProxyAppId?: string;
    /**
      * 内部参数，腾讯电子签颁发给渠道侧合作企业的企业ID，不需要传
      */
    ProxyOrganizationId?: string;
}
/**
 * 此结构 (FormField) 用于描述内容控件填充结构。

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
      * 表单域或控件的ID，跟ComponentName二选一，不能全为空；
CreateFlowsByTemplates 接口不使用此字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ComponentId?: string;
    /**
      * 控件的名字，跟ComponentId二选一，不能全为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    ComponentName?: string;
}
/**
 * 接口调用者信息
 */
export interface UserInfo {
    /**
      * 用户在渠道的编号，最大64位字符串
      */
    OpenId?: string;
    /**
      * 用户的来源渠道
      */
    Channel?: string;
    /**
      * 自定义用户编号
      */
    CustomUserId?: string;
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
 * ChannelCreateConvertTaskApi请求参数结构体
 */
export interface ChannelCreateConvertTaskApiRequest {
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent: Agent;
    /**
      * 资源类型 取值范围doc,docx,html,excel之一
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
      * 暂未开放
      */
    Organization?: OrganizationInfo;
}
/**
 * 签署人的流程信息明细
 */
export interface FlowApproverDetail {
    /**
      * 模板配置时候的签署人id,与控件绑定
      */
    ReceiptId: string;
    /**
      * 渠道侧企业的第三方id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyOrganizationOpenId: string;
    /**
      * 渠道侧企业操作人的第三方id
      */
    ProxyOperatorOpenId: string;
    /**
      * 渠道侧企业名称
      */
    ProxyOrganizationName: string;
    /**
      * 签署人手机号
      */
    Mobile: string;
    /**
      * 签署人签署顺序
      */
    SignOrder: number;
    /**
      * 签署人姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproveName: string;
    /**
      * 当前签署人的状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproveStatus: string;
    /**
      * 签署人信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproveMessage: string;
    /**
      * 签署人签署时间
      */
    ApproveTime: number;
    /**
      * 参与者类型 (ORGANIZATION企业/PERSON个人)
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApproveType: string;
}
/**
 * 此结构体 (FlowInfo) 用于描述签署流程信息。

【动态表格传参说明】
当模板的 ComponentType='DYNAMIC_TABLE'时（渠道版），FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充动态表格（支持内容的单元格合并）
输入示例

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

 */
export interface FlowInfo {
    /**
      * 合同名字，最大长度200个字符
      */
    FlowName: string;
    /**
      * 签署截止时间戳，超过有效签署时间则该签署流程失败，默认一年
      */
    Deadline: number;
    /**
      * 模板ID
      */
    TemplateId?: string;
    /**
      * 多个签署人信息，最大支持50个签署方
      */
    FlowApprovers?: Array<FlowApproverInfo>;
    /**
      * 表单K-V对列表
      */
    FormFields?: Array<FormField>;
    /**
      * 回调地址，最大长度1000个字符
      */
    CallbackUrl?: string;
    /**
      * 合同类型，如：1. “劳务”；2. “销售”；3. “租赁”；4. “其他”，最大长度200个字符
      */
    FlowType?: string;
    /**
      * 合同描述，最大长度1000个字符
      */
    FlowDescription?: string;
    /**
      * 渠道的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
      */
    CustomerData?: string;
    /**
      * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
      */
    CustomShowMap?: string;
    /**
      * 被抄送人的信息列表，抄送功能暂不开放
      */
    CcInfos?: Array<CcInfo>;
    /**
      * 发起方企业的签署人进行签署操作是否需要企业内部审批。
若设置为true,审核结果需通过接口 ChannelCreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。

注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
      */
    NeedSignReview?: boolean;
}
/**
 * ChannelCreateFlowGroupByFiles请求参数结构体
 */
export interface ChannelCreateFlowGroupByFilesRequest {
    /**
      * 每个子合同的发起所需的信息，数量限制2-100
      */
    FlowFileInfos: Array<FlowFileInfo>;
    /**
      * 合同组名称，长度不超过200个字符
      */
    FlowGroupName: string;
    /**
      * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 均必填。
      */
    Agent?: Agent;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * UploadFiles请求参数结构体
 */
export interface UploadFilesRequest {
    /**
      * 应用相关信息，若是渠道版调用 appid 和proxyappid 必填
      */
    Agent: Agent;
    /**
      * 文件对应业务类型
1. TEMPLATE - 模板； 文件类型：.pdf/.doc/.docx/.html
2. DOCUMENT - 签署过程及签署后的合同文档/图片控件 文件类型：.pdf/.doc/.docx/.jpg/.png/.xls.xlsx/.html
      */
    BusinessType: string;
    /**
      * 上传文件内容数组，最多支持20个文件
      */
    FileInfos?: Array<UploadFile>;
    /**
      * 操作者的信息
      */
    Operator?: UserInfo;
}
/**
 * 企业员工信息
 */
export interface Staff {
    /**
      * 员工在电子签平台的id
      */
    UserId: string;
    /**
      * 显示的员工名
      */
    DisplayName: string;
    /**
      * 员工手机号
      */
    Mobile: string;
    /**
      * 员工邮箱
注意：此字段可能返回 null，表示取不到有效值。
      */
    Email: string;
    /**
      * 员工在第三方平台id
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenId: string;
    /**
      * 员工角色
注意：此字段可能返回 null，表示取不到有效值。
      */
    Roles: Array<StaffRole>;
    /**
      * 员工部门
注意：此字段可能返回 null，表示取不到有效值。
      */
    Department: Department;
    /**
      * 员工是否实名
      */
    Verified: boolean;
    /**
      * 员工创建时间戳
      */
    CreatedOn: number;
    /**
      * 员工实名时间戳
      */
    VerifiedOn: number;
}
/**
 * 抄送信息
 */
export interface CcInfo {
    /**
      * 被抄送人手机号，大陆11位手机号
      */
    Mobile?: string;
}
/**
 * ChannelCancelMultiFlowSignQRCode返回参数结构体
 */
export interface ChannelCancelMultiFlowSignQRCodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeFlowDetailInfo返回参数结构体
 */
export interface DescribeFlowDetailInfoResponse {
    /**
      * 渠道侧应用号Id
      */
    ApplicationId: string;
    /**
      * 渠道侧企业第三方Id
      */
    ProxyOrganizationOpenId: string;
    /**
      * 合同(签署流程)的具体详细描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowInfo: Array<FlowDetailInfo>;
    /**
      * 合同组编号
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowGroupId: string;
    /**
      * 合同组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowGroupName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
