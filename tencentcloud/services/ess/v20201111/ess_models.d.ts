/**
 * CreateSeal请求参数结构体
 */
export interface CreateSealRequest {
    /**
     * 操作人信息
     */
    Operator: UserInfo;
    /**
     * 电子印章名字
     */
    SealName: string;
    /**
     * 应用相关信息
     */
    Agent?: Agent;
    /**
     * 本接口支持上传图片印章及系统直接生成印章；如果要使用系统生成印章，此值传：SealGenerateSourceSystem；如果要使用图片上传请传字段 Image
     */
    GenerateSource?: string;
    /**
     * 电子印章类型，OFFICIAL-公章,CONTRACT-合同专用章
     */
    SealType?: string;
    /**
     * 电子印章图片文件名称
     */
    FileName?: string;
    /**
     * 电子印章图片base64编码
  参数Image,FileToken或GenerateSource=SealGenerateSourceSystem三选一。
     */
    Image?: string;
    /**
     * 电子印章宽度,单位px
  参数不再启用，系统会设置印章大小为标准尺寸。
     */
    Width?: number;
    /**
     * 电子印章高度,单位px
  参数不再启用，系统会设置印章大小为标准尺寸。
     */
    Height?: number;
    /**
     * 电子印章印章颜色(默认红色RED),RED-红色
  
  系统目前只支持红色印章创建。
     */
    Color?: string;
    /**
     * 暂时不支持横向文字设置
     */
    SealHorizontalText?: string;
    /**
     * 暂时不支持下弦文字设置
     */
    SealChordText?: string;
    /**
     * 系统生成的印章只支持STAR
     */
    SealCentralType?: string;
    /**
     * 通过文件上传时，服务端生成的电子印章上传图片的token
  
     */
    FileToken?: string;
}
/**
 * ModifyIntegrationDepartment返回参数结构体
 */
export interface ModifyIntegrationDepartmentResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
  
     */
    Agent?: Agent;
}
/**
 * UpdateIntegrationEmployees返回参数结构体
 */
export interface UpdateIntegrationEmployeesResponse {
    /**
     * 更新成功的用户列表
     */
    SuccessEmployeeData?: Array<SuccessUpdateStaffData>;
    /**
     * 更新失败的用户列表
     */
    FailedEmployeeData?: Array<FailedUpdateStaffData>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集成版员工部门信息
 */
export interface Department {
    /**
     * 部门id
     */
    DepartmentId?: string;
    /**
     * 部门名称
     */
    DepartmentName?: string;
}
/**
 * CreatePreparedPersonalEsign请求参数结构体
 */
export interface CreatePreparedPersonalEsignRequest {
    /**
     * 个人用户姓名
     */
    UserName: string;
    /**
     * 身份证件号码
     */
    IdCardNumber: string;
    /**
     * 印章名称
     */
    SealName: string;
    /**
     * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId代发合同。
     */
    Operator?: UserInfo;
    /**
     * 身份证件类型:
  ID_CARD 身份证
  PASSPORT 护照
  HONGKONG_AND_MACAO 中国香港
  FOREIGN_ID_CARD 境外身份
  HONGKONG_MACAO_AND_TAIWAN 中国台湾
     */
    IdCardType?: string;
    /**
     * 印章图片的base64
  注：已废弃
  请先通过UploadFiles接口上传文件，获取 FileId
     * @deprecated
     */
    SealImage?: string;
    /**
     * 是否开启印章图片压缩处理，默认不开启，如需开启请设置为 true。当印章超过 2M 时建议开启，开启后图片的 hash 将发生变化。
     */
    SealImageCompress?: boolean;
    /**
     * 手机号码；当需要开通自动签时，该参数必传
     */
    Mobile?: string;
    /**
     * 是否开通自动签，该功能需联系运营工作人员开通后使用
     */
    EnableAutoSign?: boolean;
    /**
     * 印章颜色（参数ProcessSeal=true时生效）
  默认值：BLACK黑色
  取值:
  BLACK 黑色,
  RED 红色,
  BLUE 蓝色。
     */
    SealColor?: string;
    /**
     * 是否处理印章
  默认不做印章处理。
  取值：false：不做任何处理；
  true：做透明化处理和颜色增强。
     */
    ProcessSeal?: boolean;
    /**
     * 印章图片文件 id
  取值：
  填写的FileId通过UploadFiles接口上传文件获取。
     */
    FileId?: string;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。 0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次 1-不绑定，发起合同时将按标准合同套餐进行扣减
     */
    LicenseType?: number;
}
/**
 * DescribeIntegrationDepartments返回参数结构体
 */
export interface DescribeIntegrationDepartmentsResponse {
    /**
     * 部门列表
     */
    Departments?: Array<IntegrationDepartment>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 模板中文件的信息结构
 */
export interface FileInfo {
    /**
     * 文件ID
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
     * 文件上传时间，格式为Unix标准时间戳（秒）
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
    QrCode?: SignQrCode;
    /**
     * 签署链接对象
     */
    SignUrls?: SignUrl;
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
  3：企业自动签署
  注：类型为3（企业自动签署）时，会自动完成该签署方的签署。
  自动签署仅进行盖章操作，不能是手写签名。
  本方企业自动签署的签署人会默认是当前的发起人
  他方企业自动签署的签署人是自动签模板的他方企业授权人
  7: 个人自动签署，适用于个人自动签场景。
  注: 个人自动签场景为白名单功能, 使用前请联系对接的客户经理沟通。
     */
    ApproverType: number;
    /**
     * 签署人企业名称
  <br/>当approverType=1 或 approverType=3时，必须指定
  
  
     */
    OrganizationName?: string;
    /**
     * 签署方经办人姓名
  <br/>在未指定签署人电子签UserId情况下，为必填参数
     */
    ApproverName?: string;
    /**
     * 签署方经办人手机号码
  <br/>在未指定签署人电子签UserId情况下，为必填参数
  
     */
    ApproverMobile?: string;
    /**
     * 签署人的证件类型
  ID_CARD 身份证
  HONGKONG_AND_MACAO 港澳居民来往内地通行证
  HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
  OTHER_CARD_TYPE 其他（需要使用该类型请先联系运营经理）
     */
    ApproverIdCardType?: string;
    /**
     * 签署人证件号（长度不超过18位）
     */
    ApproverIdCardNumber?: string;
    /**
     * 签署方经办人在模板中的参与方ID
  <br/>模板发起合同时，该参数为必填项
  <br/>文件发起合同是，该参数无序传值
  
     */
    RecipientId?: string;
    /**
     * 签署意愿确认渠道,WEIXINAPP:人脸识别
     */
    VerifyChannel?: Array<string>;
    /**
     * 是否发送短信
  <br/>sms--短信通知
  <br/>none--不通知
  <br/>默认为sms
  <br/>发起方=签署方时不发送短信
     */
    NotifyType?: string;
    /**
     * 合同强制需要阅读全文，无需传此参数
     */
    IsFullText?: boolean;
    /**
     * 合同的强制预览时间：3~300s，未指定则按合同页数计算
     */
    PreReadTime?: number;
    /**
     * 签署人userId，仅支持本企业的员工userid， 可在控制台组织管理处获得
  
  若传此字段 则以userid的信息为主，会覆盖传递过来的签署人基本信息， 包括姓名，手机号，证件类型等信息
     */
    UserId?: string;
    /**
     * 当前只支持true，默认为true
     */
    Required?: boolean;
    /**
     * 签署人用户来源，此参数仅针对企微用户开放
  
  企微侧用户请传入：WEWORKAPP
     */
    ApproverSource?: string;
    /**
     * 企业签署方或签标识，客户自定义，64位长度
  <br>用于发起含有或签签署人的合同。或签参与人必须有此字段。
  <br/>合同内不同或签参与人CustomApproverTag需要保证唯一。
  <br/>如果或签签署人为本方企微参与人，ApproverSource参数需要指定WEWORKAPP
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
    /**
     * 签署完前端跳转的url，暂未使用
     * @deprecated
     */
    JumpUrl?: string;
    /**
     * 签署ID
  - 发起流程时系统自动补充
  - 创建签署链接时，可以通过查询详情接口获得签署人的SignId，然后可传入此值为该签署人创建签署链接，无需再传姓名、手机号、证件号等其他信息
     */
    SignId?: string;
    /**
     * 当前签署方进行签署操作是否需要企业内部审批
  <br>true 则为需要
  <br/>false,无序企业内部审批（默认）
  <br/>为个人签署方时则由发起方企业审核。
     */
    ApproverNeedSignReview?: boolean;
    /**
     * 签署人签署控件， 此参数仅针对文件发起（CreateFlowByFiles）生效
  <br/>文件发起时，可通过该参数为签署人指定签署控件类型以及位置
     */
    SignComponents?: Array<Component>;
    /**
     * 签署人填写控件 此参数仅针对文件发起（CreateFlowByFiles）生效
  <br/>文件发起时，可通过该参数为签署人指定填写控件类型以及位置
     */
    Components?: Array<Component>;
    /**
     * 签署方控件类型为 SIGN_SIGNATURE时，可以指定签署方签名方式
      HANDWRITE – 手写签名
      OCR_ESIGN -- AI智能识别手写签名
      ESIGN -- 个人印章类型
      SYSTEM_ESIGN -- 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署）
     */
    ComponentLimitType?: Array<string>;
    /**
     * 合同查看方式<br/>默认1 -实名查看 <br/>2-短信验证码查看(企业签署方暂不支持该方式)
     */
    ApproverVerifyTypes?: Array<number>;
    /**
     * 合同签署方式(默认1,2) <br/>1-人脸认证 <br/>2-签署密码 <br/>3-运营商三要素
     */
    ApproverSignTypes?: Array<number>;
}
/**
 * 关注方信息
 */
export interface ReviewerInfo {
    /**
     * 姓名
     */
    Name?: string;
    /**
     * 手机号
     */
    Mobile?: string;
}
/**
 * DescribeThirdPartyAuthCode返回参数结构体
 */
export interface DescribeThirdPartyAuthCodeResponse {
    /**
     * 用户是否实名，VERIFIED 为实名，UNVERIFIED 未实名
     */
    VerifyStatus?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 被授权用户信息
 */
export interface HasAuthUser {
    /**
     * 用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 用户归属
  MainOrg：主企业
  CurrentOrg：当前企业
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BelongTo?: string;
}
/**
 * DisableUserAutoSign返回参数结构体
 */
export interface DisableUserAutoSignResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CancelUserAutoSignEnableUrl返回参数结构体
 */
export interface CancelUserAutoSignEnableUrlResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindEmployeeUserIdWithClientOpenId返回参数结构体
 */
export interface BindEmployeeUserIdWithClientOpenIdResponse {
    /**
     * 绑定是否成功，1表示成功，0表示失败
     */
    Status?: number;
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
     * 待创建员工的信息，不超过20个。
  所有类型的企业支持的入参：Mobile和DisplayName必填,OpenId、Email和Department.DepartmentId选填，其他字段暂不支持。
  企微类型的企业特有支持的入参：WeworkOpenId，传入此字段无需在传入其他信息
     */
    Employees: Array<Staff>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * 创建合同个性化参数
 */
export interface CreateFlowOption {
    /**
     * 是否允许修改发起合同时确认弹窗的合同信息（合同名称、合同类型、签署截止时间），若不允许编辑，则表单字段将被禁止输入。
  <br/>true：允许编辑（默认），<br/>false：不允许编辑<br/>默认：false：不允许编辑
     */
    CanEditFlow?: boolean;
    /**
     * 是否允许编辑模板控件
  <br/>true:允许编辑模板控件信息
  <br/>false:不允许编辑模板控件信息
  <br/>默认false:不允许编辑模板控件信息
     */
    CanEditFormField?: boolean;
    /**
     * 发起页面隐藏合同名称展示
  <br/>true:发起页面隐藏合同名称展示
  <br/>false:发起页面不隐藏合同名称展示
  <br/>默认false:发起页面不隐藏合同名称展示
     */
    HideShowFlowName?: boolean;
    /**
     * 发起页面隐藏合同类型展示
  <br/>true:发起页面隐藏合同类型展示
  <br/>false:发起页面不隐藏合同类型展示
  <br/>默认false:发起页面不隐藏合同类型展示
  
     */
    HideShowFlowType?: boolean;
    /**
     * 发起页面隐藏合同截止日期展示
  <br/>true:发起页面隐藏合同截止日期展示
  <br/>false:发起页面不隐藏合同截止日期展示
  <br/>默认false:发起页面不隐藏合同截止日期展示
     */
    HideShowDeadline?: boolean;
    /**
     * 发起页面允许跳过添加签署人环节
  <br/>true:发起页面允许跳过添加签署人环节
  <br/>false:发起页面不允许跳过添加签署人环节
  <br/>默认false:发起页面不允许跳过添加签署人环节
  
     */
    CanSkipAddApprover?: boolean;
    /**
     * 文件发起页面跳过文件上传步骤
  <br/>true:文件发起页面跳过文件上传步骤
  <br/>false:文件发起页面不跳过文件上传步骤
  <br/>默认false:文件发起页面不跳过文件上传步骤
     */
    SkipUploadFile?: boolean;
    /**
     * 禁止编辑填写控件
  <br/>true:禁止编辑填写控件
  <br/>false:允许编辑填写控件
  <br/>默认false:允许编辑填写控件
     */
    ForbidEditFillComponent?: boolean;
    /**
     * 定制化发起合同弹窗的描述信息，描述信息最长500
  
     */
    CustomCreateFlowDescription?: string;
}
/**
 * 解除协议的签署人，如不指定，默认使用待解除流程（即原流程）中的签署人。
注意：不支持更换C端（个人身份类型）签署人，如果原流程中含有C端签署人，默认使用原流程中的该C端签署人。
注意：目前不支持替换C端（个人身份类型）签署人，但是可以指定C端签署人的签署方自定义控件别名，具体见参数ApproverSignRole描述。
注意：当指定C端签署人的签署方自定义控件别名不空时，除RelievedApproverReceiptId参数外，可以只参数ApproverSignRole。
 */
export interface ReleasedApprover {
    /**
     * 签署人姓名，最大长度50个字符
  
     */
    Name: string;
    /**
     * 签署人手机号
     */
    Mobile: string;
    /**
     * 要替换的参与人在原合同参与人列表中的签署人编号,通过DescribeFlowInfo 接口获取（即FlowDetailInfos. FlowApproverInfos 结构中的ReceiptId ）
     */
    RelievedApproverReceiptId: string;
    /**
     * 指定签署人类型，目前仅支持
  ORGANIZATION-企业
  ENTERPRISESERVER-企业静默签
     */
    ApproverType?: string;
    /**
     * 签署控件类型，支持自定义企业签署方的签署控件为“印章”或“签名”
  - SIGN_SEAL-默认为印章控件类型
  - SIGN_SIGNATURE-手写签名控件类型
     */
    ApproverSignComponentType?: string;
    /**
     * 参与方在合同中的角色是按照创建合同的时候来排序的; 解除协议会将第一个参与人叫甲方, 第二个叫乙方,第三个叫丙方，以此类推。  如果想改动参与人的角色名字, 可以设置此签署方自定义控件别名字段，最大20个字符
     */
    ApproverSignRole?: string;
}
/**
 * DescribeIntegrationRoles请求参数结构体
 */
export interface DescribeIntegrationRolesRequest {
    /**
     * 操作人信息，UserId必填
     */
    Operator: UserInfo;
    /**
     * 指定每页多少条数据，单页最大200
     */
    Limit: number;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 查询的关键字段:
  Key:"RoleType",Values:["1"]查询系统角色，Values:["2"]查询自定义角色
  Key:"RoleStatus",Values:["1"]查询启用角色，Values:["2"]查询禁用角色
  Key:"IsGroupRole"，Values:["0"],查询非集团角色，Values:["1"]表示查询集团角色
     */
    Filters?: Array<Filter>;
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大2000
     */
    Offset?: number;
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
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
  
     */
    Agent?: Agent;
}
/**
 * StartFlow返回参数结构体
 */
export interface StartFlowResponse {
    /**
     * 发起成功之后返回状态，
  
  START-发起成功，
  
  REVIEW-提交审核成功，
  
  EXECUTING-已提交发起任务
     */
    Status?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 模板中指定的印章信息
 */
export interface SealInfo {
    /**
     * 印章ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SealId?: string;
    /**
     * 印章类型。LEGAL_PERSON_SEAL: 法定代表人章；
  ORGANIZATIONSEAL：企业印章；
  OFFICIAL：企业公章；
  CONTRACT：合同专用章
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SealType?: string;
    /**
     * 印章名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SealName?: string;
}
/**
 * 集成版企业角色信息
 */
export interface StaffRole {
    /**
     * 角色id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleId?: string;
    /**
     * 角色名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleName?: string;
}
/**
 * 签署链接信息
 */
export interface FlowApproverUrlInfo {
    /**
     * 签署链接。注意该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SignUrl?: string;
    /**
     * 签署人类型 1-个人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproverType?: number;
    /**
     * 签署人姓名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproverName?: string;
    /**
     * 签署人手机号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproverMobile?: string;
    /**
     * 签署长链接。注意该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LongUrl?: string;
}
/**
 * 授权用户
 */
export interface AuthorizedUser {
    /**
     * 电子签系统中的用户id
     */
    UserId: string;
}
/**
 * CreateConvertTaskApi请求参数结构体
 */
export interface CreateConvertTaskApiRequest {
    /**
     * 资源类型 支持doc,docx,html,xls,xlsx,jpg,jpeg,png,bmp文件类型
     */
    ResourceType: string;
    /**
     * 资源名称，长度限制为256字符
     */
    ResourceName: string;
    /**
     * 文件Id，通过UploadFiles获取
     */
    ResourceId: string;
    /**
     * 调用方用户信息，userId 必填
     */
    Operator?: UserInfo;
    /**
     * 应用号信息
     * @deprecated
     */
    Agent?: Agent;
    /**
     * 暂未开放
     * @deprecated
     */
    Organization?: OrganizationInfo;
}
/**
 * DeleteIntegrationEmployees返回参数结构体
 */
export interface DeleteIntegrationEmployeesResponse {
    /**
     * 员工删除数据
     */
    DeleteEmployeeResult?: DeleteStaffsResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateFlowReminds返回参数结构体
 */
export interface CreateFlowRemindsResponse {
    /**
     * 催办合同详情列表
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
     * 指定每页多少条数据，单页最大1000
     */
    Limit: number;
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0
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
     * 是否导出当前成员企业数据
     */
    Export?: boolean;
    /**
     * 成员企业机构 ID，在PC控制台 集团管理可获取
     */
    Id?: string;
}
/**
 * 代理相关应用信息，如集团主企业代子企业操作
 */
export interface Agent {
    /**
     * 代理机构的应用编号,32位字符串，一般不用传
     * @deprecated
     */
    AppId?: string;
    /**
     * 被代理机构的应用号，一般不用传
     * @deprecated
     */
    ProxyAppId?: string;
    /**
     * 被代理机构在电子签平台的机构编号，集团代理下场景必传
     */
    ProxyOrganizationId?: string;
    /**
     * 被代理机构的经办人，一般不用传
     * @deprecated
     */
    ProxyOperator?: string;
}
/**
 * 签署人详情信息
 */
export interface FlowApproverDetail {
    /**
     * 签署时的相关信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproveMessage?: string;
    /**
     * 签署方姓名
     */
    ApproveName?: string;
    /**
     * 签署方的签署状态
  0：还没有发起
  1：流程中 没有开始处理
  2：待签署
  3：已签署
  4：已拒绝
  5：已过期
  6：已撤销
  7：还没有预发起
  8：待填写
  9：因为各种原因而终止
  10：填写完成
  15：已解除
  19：转他人处理
     */
    ApproveStatus?: number;
    /**
     * 模板配置中的参与方ID,与控件绑定
     */
    ReceiptId?: string;
    /**
     * 客户自定义的用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomUserId?: string;
    /**
     * 签署人手机号
     */
    Mobile?: string;
    /**
     * 签署顺序，如果是有序签署，签署顺序从小到大
     */
    SignOrder?: number;
    /**
     * 签署人签署时间，时间戳，单位秒
     */
    ApproveTime?: number;
    /**
     * 签署方类型，ORGANIZATION-企业员工，PERSON-个人，ENTERPRISESERVER-企业静默签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproveType?: string;
    /**
     * 签署方侧用户来源，如WEWORKAPP-企业微信等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproverSource?: string;
    /**
     * 客户自定义签署方标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CustomApproverTag?: string;
    /**
     * 签署方企业Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrganizationId?: string;
    /**
     * 签署方企业名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrganizationName?: string;
}
/**
 * CreateFlowGroupByFiles请求参数结构体
 */
export interface CreateFlowGroupByFilesRequest {
    /**
     * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId 代发合同
     */
    Operator: UserInfo;
    /**
     * 合同（流程）组名称,最大长度200个字符
     */
    FlowGroupName: string;
    /**
     * 合同（流程）组的子合同信息，支持2-50个子合同
     */
    FlowGroupInfos: Array<FlowGroupInfo>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 合同（流程）组的配置项信息。包括是否通知本企业签署方，是否通知其他签署方
     */
    FlowGroupOptions?: FlowGroupOptions;
}
/**
 * DescribeFlowComponents返回参数结构体
 */
export interface DescribeFlowComponentsResponse {
    /**
     * 流程关联的填写控件信息，按照参与方进行分类返回。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecipientComponentInfos?: Array<RecipientComponentInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFlowEvidenceReport返回参数结构体
 */
export interface DescribeFlowEvidenceReportResponse {
    /**
     * 出证报告PDF的下载 URL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportUrl?: string;
    /**
     * 出证任务执行的状态, 分布表示下面的含义
  
  EvidenceStatusExecuting  出证任务在执行中
  EvidenceStatusSuccess  出证任务执行成功
  EvidenceStatusFailed  出证任务执行失败
     */
    Status?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 应用回调信息
 */
export interface CallbackInfo {
    /**
     * 回调url
     */
    CallbackUrl: string;
    /**
     * 回调加密key，已废弃
     * @deprecated
     */
    Token?: string;
    /**
     * 回调加密key
     */
    CallbackKey?: string;
    /**
     * 回调验签token
     */
    CallbackToken?: string;
}
/**
 * CreateFlowGroupByTemplates返回参数结构体
 */
export interface CreateFlowGroupByTemplatesResponse {
    /**
     * 合同(流程)组的合同组Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowGroupId?: string;
    /**
     * 合同(流程)组中子合同列表.
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowIds?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 此结构体 (TemplateInfo) 用于描述模板的信息。

> **模板组成**
>
>  一个模板通常会包含以下结构信息
>- 模板基本信息
>- 发起方参与信息Promoter、签署参与方 Recipients，后者会在模板发起合同时用于指定参与方
>- 填写控件 Components
>- 签署控件 SignComponents
>- 生成模板的文件基础信息 FileInfos
 */
export interface TemplateInfo {
    /**
     * 模板ID，模板的唯一标识
     */
    TemplateId?: string;
    /**
     * 模板名
     */
    TemplateName?: string;
    /**
     * 模板描述信息
     */
    Description?: string;
    /**
     * 模板关联的资源ID列表
     */
    DocumentResourceIds?: Array<string>;
    /**
     * 生成模板的文件基础信息
     */
    FileInfos?: Array<FileInfo>;
    /**
     * 附件关联的资源ID
     */
    AttachmentResourceIds?: Array<string>;
    /**
     * 签署顺序
  无序 -1
  有序为序列数字 0,1,2
     */
    SignOrder?: Array<number>;
    /**
     * 模板中的签署参与方列表
     */
    Recipients?: Array<Recipient>;
    /**
     * 模板的填充控件列表
     */
    Components?: Array<Component>;
    /**
     * 模板中的签署控件列表
     */
    SignComponents?: Array<Component>;
    /**
     * 模板状态
  -1:不可用
  0:草稿态
  1:正式态，可以正常使用
     */
    Status?: number;
    /**
     * 模板的创建者信息，电子签系统用户ID
     */
    Creator?: string;
    /**
     * 模板创建的时间戳，格式为Unix标准时间戳（秒）
     */
    CreatedOn?: number;
    /**
     * 发起方参与信息Promoter
     */
    Promoter?: Recipient;
    /**
     * 模板类型：
  1  静默签,
  3  普通模板
     */
    TemplateType?: number;
    /**
     * 模板可用状态：
  1 启用（默认）
  2 停用
     */
    Available?: number;
    /**
     * 创建模板的企业ID，电子签的机构ID
     */
    OrganizationId?: string;
    /**
     * 模板预览链接，有效时间5分钟
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreviewUrl?: string;
    /**
     * 模板版本。默认为空时，全数字字符，初始版本为yyyyMMdd001。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateVersion?: string;
    /**
     * 模板是否已发布：
  true-已发布
  false-未发布
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Published?: boolean;
    /**
     * 模板内部指定的印章列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateSeals?: Array<SealInfo>;
    /**
     * 模板内部指定的印章列表
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    Seals?: Array<SealInfo>;
}
/**
 * CreateDocument返回参数结构体
 */
export interface CreateDocumentResponse {
    /**
     * 签署流程电子文档ID
     */
    DocumentId?: string;
    /**
     * 签署流程文件的预览地址, 5分钟内有效。仅当NeedPreview为true 时返回
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreviewFileUrl?: string;
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
     * 指定每页多少条数据，单页最大20
     */
    Limit: number;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 查询过滤实名用户，Key为Status，Values为["IsVerified"]
  根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...]
     */
    Filters?: Array<Filter>;
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大20000
     */
    Offset?: number;
}
/**
 * CreateIntegrationUserRoles返回参数结构体
 */
export interface CreateIntegrationUserRolesResponse {
    /**
     * 绑定角色失败列表信息
     */
    FailedCreateRoleData?: Array<FailedCreateRoleData>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
  注意 approver中的顺序需要和模板中的顺序保持一致， 否则会导致模板中配置的信息无效。
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
     * 签署流程的签署截止时间。
  值为unix时间戳,精确到秒,不传默认为当前时间一年后
     */
    DeadLine?: number;
    /**
     * 合同到期提醒时间戳，单位秒。设定该值后，可以提前进行到期通知，方便客户处理合同到期事务，如合同续签等。该值支持的范围是从发起时间起到往后的10年内。仅合同发起方企业的发起人可以编辑修改。
     */
    RemindedOn?: number;
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
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 被抄送人的信息列表。
  注: 此功能为白名单功能，若有需要，请联系电子签客服开白使用。
     */
    CcInfos?: Array<CcInfo>;
    /**
     * 个人自动签场景。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
     */
    AutoSignScene?: string;
    /**
     * 暂未开放
     * @deprecated
     */
    RelatedFlowId?: string;
    /**
     * 暂未开放
     * @deprecated
     */
    CallbackUrl?: string;
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
     * 要跳转的链接类型
  
  - HTTP：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型  (默认)，此时返回长链
  - HTTP_SHORT_URL：跳转电子签小程序的http_url, 短信通知或者H5跳转适合此类型，此时返回短链
  - APP： 第三方APP或小程序跳转电子签小程序的path,  APP或者小程序跳转适合此类型
  
     */
    EndPoint?: string;
    /**
     * 签署流程编号 (PathType=1时必传)
     */
    FlowId?: string;
    /**
     * 合同组ID
     */
    FlowGroupId?: string;
    /**
     * 要跳转到的页面类型
  
  - 0: 不传, 主页 (默认)
  - 1: 小程序合同详情
  - 2: 小程序合同列表页
  
     */
    PathType?: number;
    /**
     * 是否自动回跳
  true：是，
  false：否。
  该参数只针对"APP" 类型的签署链接有效
     */
    AutoJumpBack?: boolean;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 生成的签署链接在签署过程隐藏的按钮列表, 可以设置隐藏的按钮列表如下
  
  - 0:合同签署页面更多操作按钮
  - 1:合同签署页面更多操作的拒绝签署按钮
  - 2:合同签署页面更多操作的转他人处理按钮
  - 3:签署成功页的查看详情按钮
     */
    Hides?: Array<number>;
}
/**
 * DeleteIntegrationDepartment返回参数结构体
 */
export interface DeleteIntegrationDepartmentResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 自动签开启、签署相关配置
 */
export interface AutoSignConfig {
    /**
     * 自动签开通个人用户的三要素
     */
    UserInfo: UserThreeFactor;
    /**
     * 接受回调URL地址。支持http://或者https://协议
  
  Post数据到此地址后返回httpcode200表示接受回调成功, 返回其他httpcode表示接受回调失败
     */
    CallbackUrl: string;
    /**
     * 是否回调证书信息
  false-不需要 (默认值)
  true-需要
     */
    CertInfoCallback?: boolean;
    /**
     * 是否支持用户自定义签名印章
  false-不需要(默认)
  true-需要
     */
    UserDefineSeal?: boolean;
    /**
     * 是否需要回调的时候返回印章(签名) 图片的 base64
  
  false-不需要(默认)
  true-需要
     */
    SealImgCallback?: boolean;
    /**
     * 开通时候的验证方式, 分布为
  
  WEIXINAPP : 微信人脸识别
  INSIGHT : 慧眼人脸认别
  TELECOM : 运营商三要素验证
  
  如果是小程序开通链接，支持传 WEIXINAPP / TELECOM。
  
  如果是 H5 开通链接，支持传 INSIGHT / TELECOM。默认值 WEIXINAPP / INSIGHT。
     */
    VerifyChannels?: Array<string>;
    /**
     * 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。
  0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次
  1-不绑定，发起合同时将按标准合同套餐进行扣减
  
     */
    LicenseType?: number;
}
/**
 * DescribeThirdPartyAuthCode请求参数结构体
 */
export interface DescribeThirdPartyAuthCodeRequest {
    /**
     * 电子签小程序跳转客户小程序时携带的授权查看码
     */
    AuthCode: string;
    /**
     * 操作人信息
     */
    Operator?: UserInfo;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * UnbindEmployeeUserIdWithClientOpenId返回参数结构体
 */
export interface UnbindEmployeeUserIdWithClientOpenIdResponse {
    /**
     * 解绑是否成功，1表示成功，0表示失败
     */
    Status?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateReleaseFlow返回参数结构体
 */
export interface CreateReleaseFlowResponse {
    /**
     * 解除协议流程编号
  
     */
    FlowId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWebThemeConfig返回参数结构体
 */
export interface CreateWebThemeConfigResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * BindEmployeeUserIdWithClientOpenId请求参数结构体
 */
export interface BindEmployeeUserIdWithClientOpenIdRequest {
    /**
     * 用户信息，OpenId与UserId二选一必填一个，OpenId是第三方客户ID，userId是用户实名后的电子签生成的ID,当传入客户系统openId，传入的openId需与电子签员工userId绑定，且参数Channel必填，Channel值为INTEGRATE；当传入参数UserId，Channel无需指定。（参数参考示例）
     */
    Operator: UserInfo;
    /**
     * 电子签系统员工UserId
     */
    UserId: string;
    /**
     * 客户系统OpenId
     */
    OpenId: string;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * DescribeIntegrationDepartments请求参数结构体
 */
export interface DescribeIntegrationDepartmentsRequest {
    /**
     * 执行本接口操作的员工信息。
  注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。`
     */
    Operator: UserInfo;
    /**
     * 查询类型 0-查询单个部门节点 1-单个部门节点及一级子节点部门列表
     */
    QueryType: number;
    /**
     * 代理企业和员工的信息。
  在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
     */
    Agent?: Agent;
    /**
     * 部门ID,与DeptOpenId二选一,优先DeptId,都为空时获取根节点数据
     */
    DeptId?: string;
    /**
     * 客户系统部门ID,与DeptId二选一,优先DeptId,都为空时获取根节点数据
     */
    DeptOpenId?: string;
}
/**
 * CreateIntegrationDepartment返回参数结构体
 */
export interface CreateIntegrationDepartmentResponse {
    /**
     * 电子签部门ID
     */
    DeptId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeFlowTemplates请求参数结构体
 */
export interface DescribeFlowTemplatesRequest {
    /**
     * 调用方员工/经办人信息
  UserId 必填，在企业控制台组织架构中可以查到员工的UserId
  注：请保证员工有相关的角色权限
     */
    Operator: UserInfo;
    /**
     * 代理相关应用信息
  如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 查询内容类型
  0-模板列表及详情（默认）
  1-仅模板列表
     */
    ContentType?: number;
    /**
     * 搜索条件，本字段用于指定模板Id进行查询。
  Key：template-id
  Values：需要查询的模板Id列表
     */
    Filters?: Array<Filter>;
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默从第一页返回。页码从0开始，即首页为0。
     */
    Offset?: number;
    /**
     * 指定每页多少条数据，如果不传默认为20，单页最大200。
     */
    Limit?: number;
    /**
     * 用于查询指定应用号下单模板列表。
  ApplicationId不为空，查询指定应用下的模板列表
  ApplicationId为空，查询所有应用下的模板列表
     */
    ApplicationId?: string;
    /**
     * 默认为false，查询SaaS模板库列表；
  为true，查询第三方应用集成平台企业模板库管理列表
     * @deprecated
     */
    IsChannel?: boolean;
    /**
     * 暂未开放
     * @deprecated
     */
    Organization?: OrganizationInfo;
    /**
     * 暂未开放
     * @deprecated
     */
    GenerateSource?: number;
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
     * 机构在平台的编号，内部字段，暂未开放
     * @deprecated
     */
    OrganizationId?: string;
    /**
     * 用户渠道，内部字段，暂未开放
     * @deprecated
     */
    Channel?: string;
    /**
     * 用户在渠道的机构编号，内部字段，暂未开放
     * @deprecated
     */
    OrganizationOpenId?: string;
    /**
     * 用户真实的IP，内部字段，暂未开放
     * @deprecated
     */
    ClientIp?: string;
    /**
     * 机构的代理IP，内部字段，暂未开放
     * @deprecated
     */
    ProxyIp?: string;
}
/**
 * DescribeUserAutoSignStatus返回参数结构体
 */
export interface DescribeUserAutoSignStatusResponse {
    /**
     * 查询用户是否已开通自动签
     */
    IsOpen?: boolean;
    /**
     * 自动签许可生效时间。当且仅当已开通自动签时有值。
  
  值为unix时间戳,单位为秒。
     */
    LicenseFrom?: number;
    /**
     * 自动签许可到期时间。当且仅当已开通自动签时有值。
  值为unix时间戳,单位为秒。
     */
    LicenseTo?: number;
    /**
     * 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。
  0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次
  1-不绑定，发起合同时将按标准合同套餐进行扣减
     */
    LicenseType?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 补充签署人信息
- RecipientId 必须指定
-  通过企业自定义账号ID补充签署人时，ApproverSource 和 CustomUserId 必填，ApproverSource取值：WEWORKAPP
- 通过二要素（姓名/手机号）补充签署人时，ApproverName 和 ApproverMobile 必填，ApproverSource设置为空
 */
export interface FillApproverInfo {
    /**
     * 对应模板中的参与方ID
     */
    RecipientId: string;
    /**
     * 签署人来源
  WEWORKAPP: 企业微信
  <br/>仅【企微或签】时指定WEWORKAPP
     */
    ApproverSource?: string;
    /**
     * 企业自定义账号ID
  <br/>当ApproverSource为WEWORKAPP的企微或签场景下，必须指企业自有应用获取企微明文的userid
     */
    CustomUserId?: string;
    /**
     * 补充签署人姓名
     */
    ApproverName?: string;
    /**
     * 补充签署人手机号
     */
    ApproverMobile?: string;
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
     * 电子印章授权时间戳，单位秒
     */
    CreateOn: number;
    /**
     * 电子印章授权人的UserId
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
     * 印章类型,OFFICIAL-企业公章, CONTRACT-合同专用章,ORGANIZATIONSEAL-企业印章(本地上传印章类型),LEGAL_PERSON_SEAL-法人印章
     */
    SealType: string;
    /**
     * 用印申请是否为永久授权，true-是，false-否
     */
    IsAllTime: boolean;
    /**
     * 授权人列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthorizedUsers: Array<AuthorizedUser>;
}
/**
 * CreatePersonAuthCertificateImage返回参数结构体
 */
export interface CreatePersonAuthCertificateImageResponse {
    /**
     * 个人用户证明证书的下载链接
     */
    AuthCertUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 验签结果。0-签名域未签名；1-验签成功； 3-验签失败；4-未找到签名域：文件内没有签名域；5-签名值格式不正确。
     */
    VerifyResult?: number;
    /**
     * 签署平台，如果文件是在腾讯电子签平台签署，则返回腾讯电子签，如果文件不在腾讯电子签平台签署，则返回其他平台。
     */
    SignPlatform?: string;
    /**
     * 签署人名称
     */
    SignerName?: string;
    /**
     * 签署时间戳，单位秒
     */
    SignTime?: number;
    /**
     * 签名算法
     */
    SignAlgorithm?: string;
    /**
     * 签名证书序列号
     */
    CertSn?: string;
    /**
     * 证书起始时间戳，单位毫秒
     */
    CertNotBefore?: number;
    /**
     * 证书过期时间戳，单位毫秒
     */
    CertNotAfter?: number;
    /**
     * 签名域横坐标，单位pt
     */
    ComponentPosX?: number;
    /**
     * 签名域纵坐标，单位pt
     */
    ComponentPosY?: number;
    /**
     * 签名域宽度，单位pt
     */
    ComponentWidth?: number;
    /**
     * 签名域高度，单位pt
     */
    ComponentHeight?: number;
    /**
     * 签名域所在页码，1～N
     */
    ComponentPage?: number;
}
/**
 * CreateBatchCancelFlowUrl返回参数结构体
 */
export interface CreateBatchCancelFlowUrlResponse {
    /**
     * 批量撤回签署流程链接
     */
    BatchCancelFlowUrl?: string;
    /**
     * 签署流程撤回失败信息
  数组里边的错误原因与传进来的FlowIds一一对应,如果是空字符串则标识没有出错
     */
    FailMessages?: Array<string>;
    /**
     * 签署连接过期时间字符串：年月日-时分秒
  
  例如:2023-07-28 17:25:59
     */
    UrlExpireOn?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户的三要素：姓名，证件号，证件类型
 */
export interface UserThreeFactor {
    /**
     * 姓名
     */
    Name: string;
    /**
     * 证件类型:
  ID_CARD 身份证
  HONGKONG_AND_MACAO 港澳居民来往内地通行证
  HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
     */
    IdCardType: string;
    /**
     * 证件号，如果有 X 请大写
     */
    IdCardNumber: string;
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
     * 二维码过期时间戳，单位秒
     */
    ExpiredTime: number;
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
 * DisableUserAutoSign请求参数结构体
 */
export interface DisableUserAutoSignRequest {
    /**
     * 操作人信息,UserId必填
     */
    Operator: UserInfo;
    /**
     * 自动签场景:
  E_PRESCRIPTION_AUTO_SIGN 电子处方
     */
    SceneKey: string;
    /**
     * 关闭自动签的个人的三要素
     */
    UserInfo: UserThreeFactor;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * DescribeIntegrationEmployees返回参数结构体
 */
export interface DescribeIntegrationEmployeesResponse {
    /**
     * 员工数据列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Employees?: Array<Staff>;
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大20000
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Offset?: number;
    /**
     * 指定每页多少条数据，单页最大20
     */
    Limit?: number;
    /**
     * 符合条件的员工数量
     */
    TotalCount?: number;
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
    TaskId?: string;
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
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 审核签署节点使用 非必填 如果填写则审核该签署节点。给个人审核时必填。
     */
    RecipientId?: string;
    /**
     * 操作类型：（接口通过该字段区分操作类型）
  
  SignReview:签署审核
  CreateReview:发起审核
  
  默认：SignReview；SignReview:签署审核
  
  该字段不传或者为空，则默认为SignReview签署审核，走签署审核流程
  若发起个人审核，则指定该字段为：SignReview
     */
    OperateType?: string;
}
/**
 * UnbindEmployeeUserIdWithClientOpenId请求参数结构体
 */
export interface UnbindEmployeeUserIdWithClientOpenIdRequest {
    /**
     * 用户信息，OpenId与UserId二选一必填一个，OpenId是第三方客户ID，userId是用户实名后的电子签生成的ID,当传入客户系统openId，传入的openId需与电子签员工userId绑定，且参数Channel必填，Channel值为INTEGRATE；当传入参数UserId，Channel无需指定(参数用法参考示例)
     */
    Operator: UserInfo;
    /**
     * 电子签系统员工UserId
     */
    UserId: string;
    /**
     * 客户系统OpenId
     */
    OpenId: string;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * CreateSchemeUrl返回参数结构体
 */
export interface CreateSchemeUrlResponse {
    /**
     * 小程序链接地址，有效期90天。如果EndPoint是App，得到的链接Path如’weixin://dl/business/?t= *TICKET*‘，用于客户APP、小程序直接拉起电子签小程序；其他EndPoint得到的https链接如'https://essurl.cn/xxx'，点击链接会打开一个H5页面，然后拉起电子签小程序。
     */
    SchemeUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateUserAutoSignEnableUrl返回参数结构体
 */
export interface CreateUserAutoSignEnableUrlResponse {
    /**
     * 跳转短链
     */
    Url?: string;
    /**
     * 小程序AppId
     */
    AppId?: string;
    /**
     * 小程序 原始 Id
     */
    AppOriginalId?: string;
    /**
     * 跳转路径
     */
    Path?: string;
    /**
     * base64格式跳转二维码,可以通过微信扫描后跳转到业务界面
     */
    QrCode?: string;
    /**
     * 链接类型，空-默认小程序端链接，H5SIGN-h5端链接
     */
    UrlType?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 此结构体(FlowGroupInfo)描述的是合同组(流程组)的单个合同(流程)信息
 */
export interface FlowGroupInfo {
    /**
     * 合同（流程）的名称
     */
    FlowName: string;
    /**
     * 合同（流程）的签署方信息
     */
    Approvers: Array<ApproverInfo>;
    /**
     * 发起合同（流程）的资源Id,此资源必须是PDF文件,来自UploadFiles,使用文件发起合同(流程)组时必传
     */
    FileIds?: Array<string>;
    /**
     * 发起合同（流程）的模板Id,用模板发起合同（流程）组时必填
     */
    TemplateId?: string;
    /**
     * 合同（流程）的类型
     */
    FlowType?: string;
    /**
     * 合同（流程）的描述
     */
    FlowDescription?: string;
    /**
     * 合同（流程）的截止时间戳，单位秒。默认是一年
     */
    Deadline?: number;
    /**
     * 合同（流程）的回调地址
     */
    CallbackUrl?: string;
    /**
     * 第三方平台传递过来的信息, 限制1024字符 格式必须是base64的
     */
    UserData?: string;
    /**
     * 合同（流程）的签署是否是无序签, true - 无序。 false - 有序, 默认
     */
    Unordered?: boolean;
    /**
     * 合同（流程）发起方的填写控件, 由发起方进行在发起时进行填充
     */
    Components?: Array<Component>;
    /**
     * 本企业（发起方）是否需要签署审批，若需要审批则只允许查看不允许签署，需要您调用接口CreateFlowSignReview提交审批结果。
     */
    NeedSignReview?: boolean;
    /**
     * 本企业（发起方）自动签署，需要您在发起合同时给印章控件指定自动签的印章。
     */
    AutoSignScene?: string;
}
/**
 * CreateFlowSignUrl返回参数结构体
 */
export interface CreateFlowSignUrlResponse {
    /**
     * 签署人签署链接信息
     */
    FlowApproverUrlInfos?: Array<FlowApproverUrlInfo>;
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
     * @deprecated
     */
    CcToken?: string;
    /**
     * 暂不开放
     * @deprecated
     */
    Scene?: string;
    /**
     * 应用相关信息
     * @deprecated
     */
    Agent?: Agent;
}
/**
 * 电子文档的控件填充信息。按照控件类型进行相应的填充。

当控件的 ComponentType='TEXT'时，FormField.ComponentValue填入文本内容
```
FormFiled输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "文本内容"
}
```
当控件的 ComponentType='MULTI_LINE_TEXT'时，FormField.ComponentValue填入文本内容，支持自动换行。
```
FormFiled输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "多行文本内容"
}
```
当控件的 ComponentType='CHECK_BOX'时，FormField.ComponentValue填入true或false文本
```
FormFiled输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "true"
}
```
当控件的 ComponentType='FILL_IMAGE'时，FormField.ComponentValue填入图片的资源ID
```
FormFiled输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```
当控件的 ComponentType='ATTACHMENT'时，FormField.ComponentValue填入附件图片的资源ID列表，以逗号分隔，单个附件控件最多支持6个资源ID；
```
FormFiled输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx1,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx2,yDwhsxxxxxxxxxxxxxxxxxxxxxxxxxx3"
}
```
当控件的 ComponentType='SELECTOR'时，FormField.ComponentValue填入选择的选项内容；
```
FormFiled输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "选择的内容"
}
```
当控件的 ComponentType='DATE'时，FormField.ComponentValue填入日期内容；
```
FormFiled输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "2023年01月01日"
}
```
当控件的 ComponentType='DISTRICT'时，FormField.ComponentValue填入省市区内容；
```
FormFiled输入示例：
{
    "ComponentId": "componentId1",
    "ComponentValue": "广东省深圳市福田区"
}
```
【数据表格传参说明】
当控件的 ComponentType='DYNAMIC_TABLE'时，FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）
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
 * CreateChannelSubOrganizationModifyQrCode请求参数结构体
 */
export interface CreateChannelSubOrganizationModifyQrCodeRequest {
    /**
     * 操作人信息，userId必填
     */
    Operator: UserInfo;
    /**
     * 应用编号
     */
    ApplicationId: string;
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
     * 用户的来源渠道，一般不用传，特定场景根据接口说明传值
     * @deprecated
     */
    Channel?: string;
    /**
     * 用户在渠道的编号，一般不用传，特定场景根据接口说明传值
     * @deprecated
     */
    OpenId?: string;
    /**
     * 用户真实IP，内部字段，暂未开放
     * @deprecated
     */
    ClientIp?: string;
    /**
     * 用户代理IP，内部字段，暂未开放
     * @deprecated
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
    /**
     * 企微消息中的发起人
     */
    Initiator?: string;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作
  
  
     */
    Agent?: Agent;
}
/**
 * 企业员工信息
 */
export interface Staff {
    /**
     * 用户在电子签平台的id
  注：创建和更新场景无需填写
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
     * 用户在第三方平台id，如需在此接口提醒员工实名，该参数不传
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OpenId?: string;
    /**
     * 员工角色
  注：创建和更新场景无需填写
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
  注：创建和更新场景无需填写
     */
    Verified?: boolean;
    /**
     * 员工创建时间戳，单位秒
  注：创建和更新场景无需填写
     */
    CreatedOn?: number;
    /**
     * 员工实名时间戳，单位秒
  注：创建和更新场景无需填写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VerifiedOn?: number;
    /**
     * 员工是否离职：0-未离职，1-离职
  注：创建和更新场景无需填写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QuiteJob?: number;
    /**
     * 员工离职交接人用户id
  注：创建和更新场景无需填写
     */
    ReceiveUserId?: string;
    /**
     * 员工离职交接人用户OpenId
  注：创建和更新场景无需填写
     */
    ReceiveOpenId?: string;
    /**
     * 企业微信用户账号ID
  注：仅企微类型的企业创建员工接口支持该字段
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WeworkOpenId?: string;
}
/**
 * 参与方填写控件信息
 */
export interface RecipientComponentInfo {
    /**
     * 参与方Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecipientId?: string;
    /**
     * 参与方填写状态
  0-未填写
  1-已填写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecipientFillStatus?: string;
    /**
     * 是否为发起方
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPromoter?: boolean;
    /**
     * 填写控件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Components?: Array<FilledComponent>;
}
/**
 * CreateFlowEvidenceReport返回参数结构体
 */
export interface CreateFlowEvidenceReportResponse {
    /**
     * 出证报告 ID，用于查询出证报告DescribeFlowEvidenceReport接口时用到
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportId?: string;
    /**
     * 执行中：EvidenceStatusExecuting
  成功：EvidenceStatusSuccess
  失败：EvidenceStatusFailed
     */
    Status?: string;
    /**
     * 废除，字段无效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportUrl?: string;
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
     * 文件URL信息；
  链接不是永久链接，有效期5分钟后链接失效。
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
 * DescribeFlowComponents请求参数结构体
 */
export interface DescribeFlowComponentsRequest {
    /**
     * 操作者信息
     */
    Operator: UserInfo;
    /**
     * 流程(合同)的编号
     */
    FlowId: string;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * CreateIntegrationDepartment请求参数结构体
 */
export interface CreateIntegrationDepartmentRequest {
    /**
     * 执行本接口操作的员工信息。
  注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。`
     */
    Operator: UserInfo;
    /**
     * 部门名称，不超过50个字符
     */
    DeptName: string;
    /**
     * 代理企业和员工的信息。
  在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
     */
    Agent?: Agent;
    /**
     * 电子签父部门ID，与ParentDeptOpenId二选一,优先ParentDeptId,都为空时自动填充至根节点下
     */
    ParentDeptId?: string;
    /**
     * 第三方平台中父部门ID,与ParentDeptId二选一,优先ParentDeptId,都为空时自动填充至根节点下
     */
    ParentDeptOpenId?: string;
    /**
     * 客户系统部门ID，不超过64个字符
     */
    DeptOpenId?: string;
    /**
     * 排序号,1~30000范围内
     */
    OrderNo?: number;
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
     * 更新时间，时间戳，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: number;
    /**
     * 成员企业加入集团的当前状态:1-待授权;2-已授权待激活;3-拒绝授权;4-已解除;5-已加入
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
     * 企业许可证过期时间，时间戳，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LicenseExpireTime?: number;
    /**
     * 成员企业加入集团时间，时间戳，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JoinTime?: number;
    /**
     * 是否使用自建审批流引擎（即不是企微审批流引擎），true-是，false-否
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowEngineEnable?: boolean;
}
/**
 * DeleteIntegrationRoleUsers返回参数结构体
 */
export interface DeleteIntegrationRoleUsersResponse {
    /**
     * 角色id
     */
    RoleId?: string;
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
     * 文件名列表，单个文件名最大长度200个字符，暂时仅支持单文件发起。设置后流程对应的文件名称当前设置的值。
     */
    FileNames?: Array<string>;
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
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 客户端Token，保持接口幂等性,最大长度64个字符
     */
    ClientToken?: string;
}
/**
 * 此结构体(FlowDetailInfo)描述的是合同(流程)的详细信息
 */
export interface FlowDetailInfo {
    /**
     * 合同(流程)的ID
     */
    FlowId?: string;
    /**
     * 合同(流程)的名字
     */
    FlowName?: string;
    /**
     * 合同(流程)的类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowType?: string;
    /**
     * 流程状态
  - 0 还没有发起
  - 1 待签署
  - 2 部分签署
  - 3 已拒签
  - 4 已签署
  - 5 已过期
  - 6 已撤销
  - 7 还没有预发起
  - 8 等待填写
  - 9 部分填写
  - 10 拒填
  - 21 已解除
     */
    FlowStatus?: number;
    /**
     * 合同(流程)的信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowMessage?: string;
    /**
     * 流程的描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowDescription?: string;
    /**
     * 合同(流程)的创建时间戳，单位秒
     */
    CreatedOn?: number;
    /**
     * 合同(流程)的签署方数组
     */
    FlowApproverInfos?: Array<FlowApproverDetail>;
    /**
     * 合同(流程)的关注方信息列表
     */
    CcInfos?: Array<FlowApproverDetail>;
    /**
     * 合同发起人UserId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
}
/**
 * CreatePreparedPersonalEsign返回参数结构体
 */
export interface CreatePreparedPersonalEsignResponse {
    /**
     * 导入生成的印章ID
     */
    SealId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * CreateEmbedWebUrl请求参数结构体
 */
export interface CreateEmbedWebUrlRequest {
    /**
     * 操作者信息
     */
    Operator: UserInfo;
    /**
     * WEB嵌入资源类型。
  <br/>CREATE_SEAL: 生成创建印章的嵌入页面
  <br/>CREATE_TEMPLATE：生成创建模板的嵌入页面
  <br/>MODIFY_TEMPLATE：生成编辑模板的嵌入页面
  <br/>PREVIEW_TEMPLATE：生成预览模板的嵌入页面
  <br/>PREVIEW_SEAL_LIST：生成预览印章列表的嵌入页面
  <br/>PREVIEW_SEAL_DETAIL：生成预览印章详情的嵌入页面
  <br/>EXTEND_SERVICE：生成拓展服务的嵌入页面
  <br/>PREVIEW_FLOW：生成预览合同的嵌入页面
  <br/>PREVIEW_FLOW_DETAIL：生成查看合同详情的嵌入页面
  
     */
    EmbedType: string;
    /**
     * WEB嵌入的业务资源ID
  <br/>PREVIEW_SEAL_DETAIL，必填，取值为印章id
  <br/>MODIFY_TEMPLATE，PREVIEW_TEMPLATE，必填，取值为模板id
  <br/>PREVIEW_FLOW，PREVIEW_FLOW_DETAIL，必填，取值为合同id
     */
    BusinessId?: string;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作
     */
    Agent?: Agent;
    /**
     * 抄送方信息
     */
    Reviewer?: ReviewerInfo;
    /**
     * 个性化参数
     */
    Option?: EmbedUrlOption;
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
     * 待移除员工的信息，userId和openId二选一，必填一个，如果需要指定交接人的话，ReceiveUserId或者ReceiveOpenId字段二选一
     */
    Employees: Array<Staff>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId需填充子企业Id
     */
    Agent?: Agent;
}
/**
 * 更新员工信息失败返回的数据信息
 */
export interface FailedUpdateStaffData {
    /**
     * 用户传入的名称
     */
    DisplayName?: string;
    /**
     * 用户传入的手机号
     */
    Mobile?: string;
    /**
     * 失败原因
     */
    Reason?: string;
    /**
     * 用户Id
     */
    UserId?: string;
    /**
     * 员工在第三方平台的openId
     */
    OpenId?: string;
}
/**
 * GetTaskResultApi请求参数结构体
 */
export interface GetTaskResultApiRequest {
    /**
     * 任务Id，通过接口CreateConvertTaskApi或CreateMergeFileTask得到的返回任务id
     */
    TaskId: string;
    /**
     * 操作人信息,UserId必填
     */
    Operator?: UserInfo;
    /**
     * 应用号信息
     * @deprecated
     */
    Agent?: Agent;
    /**
     * 暂未开放
     * @deprecated
     */
    Organization?: OrganizationInfo;
}
/**
 * 此结构体(FlowGroupOptions)描述的是合同组的个性化配置，支持控制是否发送短信、未实名个人签署方查看合同组时是否需要实名认证（仅在合同组文件发起配置时生效）
 */
export interface FlowGroupOptions {
    /**
     * 发起合同（流程）组的合同（流程）签署人校验方式
  VerifyCheck: 人脸识别（默认）
  MobileCheck：手机号验证
  参数说明：此参数仅在合同组文件发起有效，可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。
     */
    ApproverVerifyType?: string;
    /**
     * 发起合同（流程）组本方企业经办人通知方式
  签署通知类型：sms--短信，none--不通知
     */
    SelfOrganizationApproverNotifyType?: string;
    /**
     * 发起合同（流程）组他方经办人通知方式
  签署通知类型：sms--短信，none--不通知
     */
    OtherApproverNotifyType?: string;
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
     * @deprecated
     */
    Uscc?: string;
    /**
     * 社会统一信用代码
     */
    UnifiedSocialCreditCode?: string;
}
/**
 * CreateFlowGroupByFiles返回参数结构体
 */
export interface CreateFlowGroupByFilesResponse {
    /**
     * 合同(流程)组的合同组Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowGroupId?: string;
    /**
     * 合同(流程)组中子合同列表.
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowIds?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateIntegrationEmployees返回参数结构体
 */
export interface CreateIntegrationEmployeesResponse {
    /**
     * 创建员工的结果
     */
    CreateEmployeeResult?: CreateStaffResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteIntegrationRoleUsers请求参数结构体
 */
export interface DeleteIntegrationRoleUsersRequest {
    /**
     * 操作人信息，userId必填
     */
    Operator: UserInfo;
    /**
     * 角色id
     */
    RoleId: string;
    /**
     * 用户信息,最多 200 个用户，并且 UserId 和 OpenId 二选一，其他字段不需要传
     */
    Users: Array<UserInfo>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * CreateFlowByFiles请求参数结构体
 */
export interface CreateFlowByFilesRequest {
    /**
     * 执行本接口操作的员工信息。使用此接口时，必须填写userId。
  支持填入集团子公司经办人 userId 代发合同。
  
  注: `在调用此接口时，请确保指定的员工已获得所需的接口调用权限，并具备接口传入的相应资源的数据权限。`
     */
    Operator: UserInfo;
    /**
     * 合同流程的名称（可自定义此名称），长度不能超过200，只能由中文、字母、数字和下划线组成。
  
  该名称还将用于合同签署完成后的下载文件名。
     */
    FlowName: string;
    /**
     * 合同流程的参与方列表，最多可支持50个参与方，可在列表中指定企业B端签署方和个人C端签署方的联系和认证方式等信息，具体定义可以参考开发者中心的ApproverInfo结构体。
  
  如果合同流程是有序签署，Approvers列表中参与人的顺序就是默认的签署顺序，请确保列表中参与人的顺序符合实际签署顺序。
     */
    Approvers: Array<ApproverInfo>;
    /**
     * 本合同流程需包含的PDF文件资源编号列表，通过<a href="https://qian.tencent.com/developers/companyApis/templatesAndFiles/UploadFiles" target="_blank">UploadFiles</a>接口获取PDF文件资源编号。
  
  注:  `目前，此接口仅支持单个文件发起。`
     */
    FileIds: Array<string>;
    /**
     * 合同流程描述信息(可自定义此描述)，最大长度1000个字符。
     */
    FlowDescription?: string;
    /**
     * 合同流程的类别分类（可自定义名称，如销售合同/入职合同等），最大长度为200个字符，仅限中文、字母、数字和下划线组成。
     */
    FlowType?: string;
    /**
     * 模板或者合同中的填写控件列表，列表中可支持下列多种填写控件，控件的详细定义参考开发者中心的Component结构体
  <ul><li> 单行文本控件      </li>
  <li> 多行文本控件      </li>
  <li> 勾选框控件        </li>
  <li> 数字控件          </li>
  <li> 图片控件          </li>
  <li> 动态表格等填写控件</li></ul>
     */
    Components?: Array<Component>;
    /**
     * 合同流程的抄送人列表，最多可支持50个抄送人，抄送人可查看合同内容及签署进度，但无需参与合同签署。
  
  注:`此功能为白名单功能，使用前请联系对接的客户经理沟通。`
     */
    CcInfos?: Array<CcInfo>;
    /**
     * 可以设置以下时间节点来给抄送人发送短信通知来查看合同内容：
  <ul><li> **0**：合同发起时通知（默认值）</li>
  <li> **1**：签署完成后通知</li></ul>
     */
    CcNotifyType?: number;
    /**
     * 是否为预览模式，取值如下：
  <ul><li> **false**：非预览模式（默认），会产生合同流程并返回合同流程编号FlowId。</li>
  <li> **true**：预览模式，不产生合同流程，不返回合同流程编号FlowId，而是返回预览链接PreviewUrl，有效期为300秒，用于查看真实发起后合同的样子。</li></ul>
     */
    NeedPreview?: boolean;
    /**
     * 预览模式下产生的预览链接类型
  <ul><li> **0** :(默认) 文件流 ,点开后后下载预览的合同PDF文件 </li>
  <li> **1** :H5链接 ,点开后在浏览器中展示合同的样子</li></ul>
  注: `此参数在NeedPreview 为true时有效`
  
     */
    PreviewType?: number;
    /**
     * 合同流程的签署截止时间，格式为Unix标准时间戳（秒），如果未设置签署截止时间，则默认为合同流程创建后的365天时截止。
  如果在签署截止时间前未完成签署，则合同状态会变为已过期，导致合同作废。
     */
    Deadline?: number;
    /**
     * 合同到期提醒时间，为Unix标准时间戳（秒）格式，支持的范围是从发起时间开始到后10年内。
  
  到达提醒时间后，腾讯电子签会短信通知发起方企业合同提醒，可用于处理合同到期事务，如合同续签等事宜。
     */
    RemindedOn?: number;
    /**
     * 合同流程的签署顺序类型：
  <ul><li> **false**：(默认)有序签署, 本合同多个参与人需要依次签署 </li>
  <li> **true**：无序签署, 本合同多个参与人没有先后签署限制</li></ul>
     */
    Unordered?: boolean;
    /**
     * 您可以自定义腾讯电子签小程序合同列表页展示的合同内容模板，模板中支持以下变量：
  <ul><li>{合同名称}   </li>
  <li>{发起方企业} </li>
  <li>{发起方姓名} </li>
  <li>{签署方N企业}</li>
  <li>{签署方N姓名}</li></ul>
  其中，N表示签署方的编号，从1开始，不能超过签署人的数量。
  
  例如，如果是腾讯公司张三发给李四名称为“租房合同”的合同，您可以将此字段设置为：`合同名称:{合同名称};发起方: {发起方企业}({发起方姓名});签署方:{签署方1姓名}`，则小程序中列表页展示此合同为以下样子
  
  合同名称：租房合同
  发起方：腾讯公司(张三)
  签署方：李四
  
  
     */
    CustomShowMap?: string;
    /**
     * 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：
  <ul><li> **false**：（默认）不需要审批，直接签署。</li>
  <li> **true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
  企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
  <ul><li> 如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
  <li> 如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>
  注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同`
     */
    NeedSignReview?: boolean;
    /**
     * 调用方自定义的个性化字段(可自定义此名称)，并以base64方式编码，支持的最大数据大小为 20480长度。
  
  在合同状态变更的回调信息等场景中，该字段的信息将原封不动地透传给贵方。回调的相关说明可参考开发者中心的<a href="https://qian.tencent.com/developers/company/callback_types_v2" target="_blank">回调通知</a>模块。
     */
    UserData?: string;
    /**
     * 指定个人签署方查看合同的校验方式
  <ul><li>   **VerifyCheck**  :（默认）人脸识别,人脸识别后才能合同内容 </li>
  <li>   **MobileCheck**  :  手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容</li></ul>
     */
    ApproverVerifyType?: string;
    /**
     * 签署方签署控件（印章/签名等）的生成方式：
  <ul><li> **0**：在合同流程发起时，由发起人指定签署方的签署控件的位置和数量。</li>
  <li> **1**：签署方在签署时自行添加签署控件，可以拖动位置和控制数量。</li></ul>
     */
    SignBeanTag?: number;
    /**
     * 代理企业和员工的信息。
  在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
     */
    Agent?: Agent;
    /**
     * 个人自动签名的使用场景包括以下, 个人自动签署(即ApproverType设置成个人自动签署时)业务此值必传：
  <ul><li> **E_PRESCRIPTION_AUTO_SIGN**：处方单（医疗自动签）  </li></ul>
  注: `个人自动签名场景是白名单功能，使用前请与对接的客户经理联系沟通。`
     */
    AutoSignScene?: string;
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
     * 流程签署人列表，其中结构体的ApproverName，ApproverMobile和ApproverType必传，其他可不传，ApproverType目前只支持个人类型的签署人。
  
  签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。
     */
    FlowApproverInfos: Array<FlowCreateApprover>;
    /**
     * 用户信息，此结构体UserId必填
     */
    Operator?: UserInfo;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 机构信息，暂未开放
     * @deprecated
     */
    Organization?: OrganizationInfo;
    /**
     * 签署完之后的H5页面的跳转链接，此链接支持http://和https://，最大长度1000个字符。
     */
    JumpUrl?: string;
}
/**
 * CreateReleaseFlow请求参数结构体
 */
export interface CreateReleaseFlowRequest {
    /**
     * 调用方用户信息，userId 必填
     */
    Operator: UserInfo;
    /**
     * 待解除的签署流程编号（即原签署流程的编号）
     */
    NeedRelievedFlowId: string;
    /**
     * 解除协议内容
     */
    ReliveInfo: RelieveInfo;
    /**
     * 非必须，解除协议的本企业签署人列表，
  默认使用原流程的签署人列表,当解除协议的签署人与原流程的签署人不能相同时（例如原流程签署人离职了），需要指定本企业其他已实名员工来替换原流程中的原签署人，注意需要指明原签署人的编号(ReceiptId,通过DescribeFlowInfo接口获取)来代表需要替换哪一个签署人
  解除协议的签署人数量不能多于原流程的签署人数量
     */
    ReleasedApprovers?: Array<ReleasedApprover>;
    /**
     * 签署流程的签署截止时间。 值为unix时间戳,精确到秒,不传默认为当前时间七天后
     */
    Deadline?: number;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * CreateIntegrationUserRoles请求参数结构体
 */
export interface CreateIntegrationUserRolesRequest {
    /**
     * 操作人信息，UserId必填
     */
    Operator: UserInfo;
    /**
     * 绑定角色的用户id列表，不能重复，不能大于 100 个
     */
    UserIds: Array<string>;
    /**
     * 绑定角色的角色id列表，不能重复，不能大于 100，可以通过DescribeIntegrationRoles接口获取
     */
    RoleIds: Array<string>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * CreateChannelSubOrganizationModifyQrCode返回参数结构体
 */
export interface CreateChannelSubOrganizationModifyQrCodeResponse {
    /**
     * 二维码下载链接
     */
    QrCodeUrl?: string;
    /**
     * 二维码失效时间 UNIX 时间戳 精确到秒
     */
    ExpiredTime?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 更新员工信息成功返回的数据信息
 */
export interface SuccessUpdateStaffData {
    /**
     * 传入的用户名称
     */
    DisplayName?: string;
    /**
     * 传入的手机号
     */
    Mobile?: string;
    /**
     * 用户Id
     */
    UserId?: string;
}
/**
 * CreatePersonAuthCertificateImage请求参数结构体
 */
export interface CreatePersonAuthCertificateImageRequest {
    /**
     * 操作人信息
     */
    Operator: UserInfo;
    /**
     * 个人用户名称
     */
    UserName: string;
    /**
     * 身份证件类型取值：
  ID_CARD 身居民身份证
  PASSPORT 护照
  HONGKONG_AND_MACAO 港澳居民来往内地通行证
  FOREIGN_ID_CARD 外国人永久居留身份证
  HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)
     */
    IdCardType: string;
    /**
     * 身份证件号码
     */
    IdCardNumber: string;
}
/**
 * CreateFlowByFiles返回参数结构体
 */
export interface CreateFlowByFilesResponse {
    /**
     * 合同流程ID，为32位字符串。
  建议开发者妥善保存此流程ID，以便于顺利进行后续操作。
  可登录腾讯电子签控制台，在 "合同"->"合同中心" 中查看某个合同的FlowId(在页面中展示为合同ID)。
  
  注: 如果是预览模式(即NeedPreview设置为true)时, 此处不会有值返回。
     */
    FlowId?: string;
    /**
     * 合同预览链接URL。
  
  注：如果是预览模式(即NeedPreview设置为true)时, 才会有此预览链接URL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreviewUrl?: string;
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
    FileIds?: Array<string>;
    /**
     * 上传成功文件数量
     */
    TotalCount?: number;
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
    DisplayName?: string;
    /**
     * 员工手机号
     */
    Mobile?: string;
    /**
     * 员工在电子签平台的id
     */
    UserId?: string;
    /**
     * 提示，当创建已存在未实名用户时，该字段有值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Note?: string;
    /**
     * 传入的企微账号id
     */
    WeworkOpenId?: string;
}
/**
 * 流程中参与方的信息结构
 */
export interface Recipient {
    /**
     * 签署参与者ID，唯一标识
     */
    RecipientId?: string;
    /**
     * 参与者类型。
  默认为空。
  ENTERPRISE-企业；
  INDIVIDUAL-个人；
  PROMOTER-发起方
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
     * 是否需要验证，
  默认为false-不需要验证
     */
    RequireValidation?: boolean;
    /**
     * 是否需要签署，
  默认为true-需要签署
     */
    RequireSign?: boolean;
    /**
     * 此参与方添加的顺序，从0～N
     */
    RoutingOrder?: number;
    /**
     * 是否需要发送，
  默认为true-需要发送
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
     * 关联的用户ID，电子签系统的用户ID
     */
    UserId?: string;
    /**
     * 发送方式，默认为EMAIL。
  EMAIL-邮件；
  MOBILE-手机短信；
  WECHAT-微信通知
     */
    DeliveryMethod?: string;
    /**
     * 参与方的一些附属信息，json格式
     */
    RecipientExtra?: string;
}
/**
 * VerifyPdf请求参数结构体
 */
export interface VerifyPdfRequest {
    /**
     * 流程ID
     */
    FlowId: string;
    /**
     * 调用方用户信息，userId 必填
     */
    Operator?: UserInfo;
}
/**
 * 绑定角色失败信息
 */
export interface FailedCreateRoleData {
    /**
     * 用户userId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 角色id列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleIds?: Array<string>;
}
/**
 * 参与者信息
 */
export interface ApproverInfo {
    /**
     * 在指定签署方时，可选择企业B端或个人C端等不同的参与者类型，可选类型如下:
  **0**：企业
  **1**：个人
  **3**：企业静默签署
  注：`类型为3（企业静默签署）时，此接口会默认完成该签署方的签署。静默签署仅进行盖章操作，不能自动签名。`
  **7**: 个人自动签署，适用于个人自动签场景。
  注: `个人自动签场景为白名单功能，使用前请联系对接的客户经理沟通。`
     */
    ApproverType: number;
    /**
     * 签署方经办人的姓名。
  经办人的姓名将用于身份认证和电子签名，请确保填写的姓名为签署方的真实姓名，而非昵称等代名。
     */
    ApproverName: string;
    /**
     * 本企业的签署方经办人的员工UserId
  可登录腾讯电子签控制台，在 "更多能力"->"组织管理" 中查看某位员工的UserId(在页面中展示为用户ID)。
  
  注: `若传该字段，则签署方经办人的其他信息（如签署方经办人的姓名、证件号码、手机号码等）将被忽略。`
     */
    ApproverMobile: string;
    /**
     * 组织机构名称。
  如果签署方是企业签署方(approverType = 1 或者 approverType = 3)， 则企业名称必填。
  
  注: `请确认该名称与企业营业执照中注册的名称一致 ; 如果名称中包含英文括号()，请使用中文括号（）代替。`
     */
    OrganizationName?: string;
    /**
     * 合同中的签署控件列表，列表中可支持下列多种签署控件,控件的详细定义参考开发者中心的Component结构体
  <ul><li> 个人签名/印章</li>
  <li> 企业印章</li>
  <li> 骑缝章等签署控件</li></ul>
     */
    SignComponents?: Array<Component>;
    /**
     * 签署方经办人的证件类型，支持以下类型
  <ul><li>ID_CARD 居民身份证  (默认值)</li>
  <li>HONGKONG_AND_MACAO 港澳居民来往内地通行证</li>
  <li>HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证(格式同居民身份证)</li>
  <li>OTHER_CARD_TYPE 其他证件</li></ul>
  
  注: `其他证件类型为白名单功能，使用前请联系对接的客户经理沟通。`
     */
    ApproverIdCardType?: string;
    /**
     * 签署方经办人的证件号码，应符合以下规则
  <ul><li>居民身份证号码应为18位字符串，由数字和大写字母X组成（如存在X，请大写）。</li>
  <li>港澳居民来往内地通行证号码应为9位字符串，第1位为“C”，第2位为英文字母（但“I”、“O”除外），后7位为阿拉伯数字。</li>
  <li>港澳台居民居住证号码编码规则与中国大陆身份证相同，应为18位字符串。</li></ul>
     */
    ApproverIdCardNumber?: string;
    /**
     * 通知签署方经办人的方式,  有以下途径:
  <ul><li>  **sms**  :  (默认)短信</li>
  <li>   **none**   : 不通知</li></ul>
     */
    NotifyType?: string;
    /**
     * 收据场景设置签署人角色类型, 可以设置如下****类型****:
  <ul><li> **1**  :收款人</li>
  <li>   **2**   :开具人</li>
  <li>   **3** :见证人</li></ul>
  注: `收据场景为白名单功能，使用前请联系对接的客户经理沟通。`
     */
    ApproverRole?: number;
    /**
     * 签署意愿确认渠道，默认为WEIXINAPP:人脸识别
  
  注: 将要废弃, 用ApproverSignTypes签署人签署合同时的认证方式代替, 新客户可请用ApproverSignTypes来设置
     */
    VerifyChannel?: Array<string>;
    /**
     * 签署方在签署合同之前，需要强制阅读合同的时长，可指定为3秒至300秒之间的任意值。
  
  若未指定阅读时间，则会按照合同页数大小计算阅读时间，计算规则如下：
  <ul><li>合同页数少于等于2页，阅读时间为3秒；</li>
  <li>合同页数为3到5页，阅读时间为5秒；</li>
  <li>合同页数大于等于6页，阅读时间为10秒。</li></ul>
     */
    PreReadTime?: number;
    /**
     * 签署人userId，仅支持本企业的员工userid， 可在控制台组织管理处获得
  
  注: `若传此字段 则以userid的信息为主，会覆盖传递过来的签署人基本信息， 包括姓名，手机号，证件类型等信息`
     */
    UserId?: string;
    /**
     * 在企微场景下使用，需设置参数为**WEWORKAPP**，以表明合同来源于企微。
     */
    ApproverSource?: string;
    /**
     * 在企业微信场景下，表明该合同流程为或签，其最大长度为64位字符串。
  所有参与或签的人员均需具备该标识。
  注意，在合同中，不同的或签参与人必须保证其CustomApproverTag唯一。
  如果或签签署人为本方企业微信参与人，则需要指定ApproverSource参数为WEWORKAPP。
     */
    CustomApproverTag?: string;
    /**
     * 可以控制签署方在签署合同时能否进行某些操作，例如拒签、转交他人等。
  详细操作可以参考开发者中心的ApproverOption结构体。
     */
    ApproverOption?: ApproverOption;
    /**
     * 指定个人签署方查看合同的校验方式,可以传值如下:
  <ul><li>  **1**   : （默认）人脸识别,人脸识别后才能合同内容</li>
  <li>  **2**  : 手机号验证, 用户手机号和参与方手机号(ApproverMobile)相同即可查看合同内容</li></ul>
  注:
  <ul><li>如果合同流程设置ApproverVerifyType查看合同的校验方式,    则忽略此签署人的查看合同的校验方式</li>
  <li>此字段不可传多个校验方式</li></ul>
     */
    ApproverVerifyTypes?: Array<number>;
    /**
     * 您可以指定签署方签署合同的认证校验方式，可传递以下值：
  <ul><li>**1**：人脸认证，需进行人脸识别成功后才能签署合同；</li>
  <li>**2**：签署密码，需输入与用户在腾讯电子签设置的密码一致才能校验成功进行合同签署；</li>
  <li>**3**：运营商三要素，需到运营商处比对手机号实名信息（名字、手机号、证件号）校验一致才能成功进行合同签署。</li></ul>
  注：
  <ul><li>默认情况下，认证校验方式为人脸认证和签署密码两种形式；</li>
  <li>您可以传递多种值，表示可用多种认证校验方式。</li></ul>
     */
    ApproverSignTypes?: Array<number>;
    /**
     * 发起方企业的签署人进行签署操作前，是否需要企业内部走审批流程，取值如下：
  <ul><li>**false**：（默认）不需要审批，直接签署。</li>
  <li>**true**：需要走审批流程。当到对应参与人签署时，会阻塞其签署操作，等待企业内部审批完成。</li></ul>
  企业可以通过CreateFlowSignReview审批接口通知腾讯电子签平台企业内部审批结果
  <ul><li>如果企业通知腾讯电子签平台审核通过，签署方可继续签署动作。</li>
  <li>如果企业通知腾讯电子签平台审核未通过，平台将继续阻塞签署方的签署动作，直到企业通知平台审核通过。</li></ul>
  
  注：`此功能可用于与企业内部的审批流程进行关联，支持手动、静默签署合同`
     */
    ApproverNeedSignReview?: boolean;
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
 * ModifyIntegrationDepartment请求参数结构体
 */
export interface ModifyIntegrationDepartmentRequest {
    /**
     * 执行本接口操作的员工信息。
  注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。`
     */
    Operator: UserInfo;
    /**
     * 电子签部门ID,通过DescribeIntegrationDepartments接口可以获取
     */
    DeptId: string;
    /**
     * 代理企业和员工的信息。
  在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
     */
    Agent?: Agent;
    /**
     * 电子签父部门ID，通过DescribeIntegrationDepartments接口可以获取
     */
    ParentDeptId?: string;
    /**
     * 部门名称，不超过50个字符
     */
    DeptName?: string;
    /**
     * 客户系统部门ID，不超过64个字符
     */
    DeptOpenId?: string;
    /**
     * 排序号,1~30000范围内
     */
    OrderNo?: number;
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
 * CreateUserAutoSignEnableUrl请求参数结构体
 */
export interface CreateUserAutoSignEnableUrlRequest {
    /**
     * 操作人信息,UserId必填
     */
    Operator: UserInfo;
    /**
     * 自动签场景:
  E_PRESCRIPTION_AUTO_SIGN 电子处方
     */
    SceneKey: string;
    /**
     * 自动签开通，签署相关配置
     */
    AutoSignConfig: AutoSignConfig;
    /**
     * 链接类型，
  空-默认小程序端链接
  H5SIGN-h5端链接
     */
    UrlType?: string;
    /**
     * 通知类型
  
  默认不设置为不通知开通方，
  SMS 为短信通知 , 此种方式需要NotifyAddress填写手机号。
     */
    NotifyType?: string;
    /**
     * 如果通知类型NotifyType选择为SMS，则此处为手机号, 其他通知类型不需要设置此项
     */
    NotifyAddress?: string;
    /**
     * 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为30天。如果不传，默认有效期为7天。
     */
    ExpiredTime?: number;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * CreateOrganizationBatchSignUrl返回参数结构体
 */
export interface CreateOrganizationBatchSignUrlResponse {
    /**
     * 批量签署入口链接
     */
    SignUrl?: string;
    /**
     * 链接过期时间戳
     */
    ExpiredTime?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * 催办接口返回详细信息
 */
export interface RemindFlowRecords {
    /**
     * 是否能够催办，true-是，false-否
     */
    CanRemind: boolean;
    /**
     * 合同id
     */
    FlowId: string;
    /**
     * 催办详情信息
     */
    RemindMessage: string;
}
/**
 * CancelUserAutoSignEnableUrl请求参数结构体
 */
export interface CancelUserAutoSignEnableUrlRequest {
    /**
     * 操作人信息，UseId必填
     */
    Operator: UserInfo;
    /**
     * 自动签场景: E_PRESCRIPTION_AUTO_SIGN 电子处方
     */
    SceneKey: string;
    /**
     * 指定撤销链接的用户指定撤销链接的用户信息，包含姓名、证件类型、证件号码。
  
     */
    UserInfo: UserThreeFactor;
}
/**
 * 创建员工的失败数据
 */
export interface FailedCreateStaffData {
    /**
     * 员工名
     */
    DisplayName?: string;
    /**
     * 员工手机号
     */
    Mobile?: string;
    /**
     * 传入的企微账号id
     */
    WeworkOpenId?: string;
    /**
     * 失败原因
     */
    Reason?: string;
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
     * 指定签署人手机号，11位数字
     */
    Mobile?: string;
    /**
     * 指定签署人证件类型，ID_CARD-身份证
     */
    IdCardType?: string;
    /**
     * 指定签署人证件号码，字母大写
     */
    IdCardNumber?: string;
}
/**
 * CreateWebThemeConfig请求参数结构体
 */
export interface CreateWebThemeConfigRequest {
    /**
     * 操作人信息
     */
    Operator: UserInfo;
    /**
     * 主题类型
  <br/>EMBED_WEB_THEME：嵌入式主题
  <br/>目前只支持EMBED_WEB_THEME，web页面嵌入的主题风格配置
     */
    ThemeType: string;
    /**
     * 主题配置
     */
    WebThemeConfig: WebThemeConfig;
    /**
     * 代理企业和员工的信息。 在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
     */
    Agent?: Agent;
}
/**
 * DeleteSealPolicies请求参数结构体
 */
export interface DeleteSealPoliciesRequest {
    /**
     * 调用方用户信息，userId 必填
     */
    Operator: UserInfo;
    /**
     * 印章授权编码数组。这个参数跟下面的SealId其中一个必填，另外一个可选填
     */
    PolicyIds?: Array<string>;
    /**
     * 印章ID。这个参数跟上面的PolicyIds其中一个必填，另外一个可选填
     */
    SealId?: string;
    /**
     * 待授权的员工ID
     */
    UserIds?: Array<string>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * CreateOrganizationBatchSignUrl请求参数结构体
 */
export interface CreateOrganizationBatchSignUrlRequest {
    /**
     * 调用方用户信息，UserId 必填，支持填入集团子公司经办人UserId。
     */
    Operator: UserInfo;
    /**
     * 指定需要进行批量签署的流程id，数量1-100，填写后用户将通过链接对这些合同进行批量签署。
     */
    FlowIds: Array<string>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填。
     */
    Agent?: Agent;
    /**
     * 员工的UserId，该UserId对应的员工必须已经加入企业并实名，Name和Mobile为空时该字段不能为空。（优先使用UserId对应的员工）
     */
    UserId?: string;
    /**
     * 员工姓名，该字段需要与Mobile组合使用，UserId为空时该字段不能为空。（UserId为空时，使用Name和Mbile对应的员工）
     */
    Name?: string;
    /**
     * 员工手机号码，该字段需要与Name组合使用，UserId为空时该字段不能为空。（UserId为空时，使用Name和Mbile对应的员工）
     */
    Mobile?: string;
}
/**
 * 企业角色数据信息
 */
export interface IntegrateRole {
    /**
     * 角色id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleId?: string;
    /**
     * 角色名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleName?: string;
    /**
     * 角色状态，1-启用，2-禁用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleStatus?: number;
    /**
     * 是否是集团角色，true-是，false-否
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsGroupRole?: boolean;
    /**
     * 管辖的子企业列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubOrgIdList?: Array<string>;
}
/**
 * CreatePrepareFlow返回参数结构体
 */
export interface CreatePrepareFlowResponse {
    /**
     * 快速发起预览链接，有效期5分钟
     */
    Url?: string;
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
    TaskId?: string;
    /**
     * 任务状态，需要关注的状态
  0  :NeedTranform   - 任务已提交
  4  :Processing     - 文档转换中
  8  :TaskEnd        - 任务处理完成
  -2 :DownloadFailed - 下载失败
  -6 :ProcessFailed  - 转换失败
  -13:ProcessTimeout - 转换文件超时
     */
    TaskStatus?: number;
    /**
     * 状态描述，需要关注的状态
  NeedTranform   - 任务已提交
  Processing     - 文档转换中
  TaskEnd        - 任务处理完成
  DownloadFailed - 下载失败
  ProcessFailed  - 转换失败
  ProcessTimeout - 转换文件超时
     */
    TaskMessage?: string;
    /**
     * 资源Id，也是FileId，用于文件发起时使用
     */
    ResourceId?: string;
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
     * 调用方用户信息，userId 必填
     */
    Operator: UserInfo;
    /**
     * 二维码id
     */
    QrCodeId: string;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * DeleteIntegrationDepartment请求参数结构体
 */
export interface DeleteIntegrationDepartmentRequest {
    /**
     * 执行本接口操作的员工信息。
  注: `在调用此接口时，请确保指定的员工已获得组织架构管理权限，并具备接口传入的相应资源的数据权限。`
     */
    Operator: UserInfo;
    /**
     * 电子签中的部门id,通过DescribeIntegrationDepartments接口可获得
     */
    DeptId: string;
    /**
     * 代理企业和员工的信息。
  在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
     */
    Agent?: Agent;
    /**
     * 交接部门ID。待删除部门中的合同、印章和模板数据，交接至该部门ID下，未填写交接至公司根部门。
     */
    ReceiveDeptId?: string;
}
/**
 * 页面主题配置
 */
export interface WebThemeConfig {
    /**
     * 是否页面底部显示电子签logo
  <br/>true：允许在页面底部隐藏电子签logo
  <br/>false：不允许允许在页面底部隐藏电子签logo
  <br/>默认false，不隐藏logo
     */
    DisplaySignBrandLogo?: boolean;
    /**
     * 主题颜色
  <br/>支持十六进制颜色值以及RGB格式颜色值，例如：#D54941，rgb(213, 73, 65)
     */
    WebEmbedThemeColor?: string;
}
/**
 * ModifyApplicationCallbackInfo请求参数结构体
 */
export interface ModifyApplicationCallbackInfoRequest {
    /**
     * 调用方用户信息，userId 必填
     */
    Operator: UserInfo;
    /**
     * 操作类型：1-新增，2-删除
     */
    OperateType: number;
    /**
     * 回调信息
     */
    CallbackInfo: CallbackInfo;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
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
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 给关注人发送短信通知的类型，
  
  0-合同发起时通知
  
  1-签署完成后通知
     */
    CcNotifyType?: number;
}
/**
 * CreateSeal返回参数结构体
 */
export interface CreateSealResponse {
    /**
     * 电子印章编号
     */
    SealId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 是否顺序签署
  true:无序签
  false:顺序签
     */
    Unordered?: boolean;
    /**
     * 签署流程的签署截止时间。
  值为unix时间戳,精确到秒
  不传默认为当前时间一年后
     */
    Deadline?: number;
    /**
     * 用户自定义合同类型Id
  该id为电子签企业内的合同类型id
     */
    UserFlowTypeId?: string;
    /**
     * 签署流程参与者信息，最大限制50方
     */
    Approvers?: Array<FlowCreateApprover>;
    /**
     * 打开智能添加填写区
  (默认开启，打开:"OPEN"
   关闭："CLOSE"
     */
    IntelligentStatus?: string;
    /**
     * 资源类型，
  1：文件，
  2：模板
  不传默认为1：文件
  目前仅支持文件
     */
    ResourceType?: number;
    /**
     * 发起方填写控件
  该类型控件由发起方完成填写
     */
    Components?: Component;
    /**
     * 发起合同个性化参数
  用于满足创建及页面操作过程中的个性化要求
  具体定制化内容详见数据接口说明
     */
    FlowOption?: CreateFlowOption;
    /**
     * 是否开启发起方签署审核
  true:开启发起方签署审核
  false:不开启发起方签署审核
  默认false:不开启发起方签署审核
     */
    NeedSignReview?: boolean;
    /**
     * 开启发起方发起合同审核
  true:开启发起方发起合同审核
  false:不开启发起方发起合同审核
  默认false:不开启发起方发起合同审核
     */
    NeedCreateReview?: boolean;
    /**
     * 用户自定义参数
     */
    UserData?: string;
    /**
     * 合同id,用于通过已web页面发起的合同id快速生成一个web发起合同链接
     */
    FlowId?: string;
    /**
     * 合同类型名称
  该字段用于客户自定义合同类型
  建议使用时指定合同类型，便于之后合同分类以及查看
     */
    FlowType?: string;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * 签署人个性化能力信息
 */
export interface ApproverOption {
    /**
     * 签署方是否可以拒签
  
  <ul><li> **false** : ( 默认)可以拒签</li>
  <li> **true** :不可以拒签</li></ul>
     */
    NoRefuse?: boolean;
    /**
     * 签署方是否可以转他人处理
  
  <ul><li> **false** : ( 默认)可以转他人处理</li>
  <li> **true** :不可以转他人处理</li></ul>
     */
    NoTransfer?: boolean;
}
/**
 * CreateEmbedWebUrl返回参数结构体
 */
export interface CreateEmbedWebUrlResponse {
    /**
     * 嵌入的web链接，有效期：5分钟
  EmbedType=PREVIEW_CC_FLOW，该url为h5链接
     */
    WebUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSealPolicy请求参数结构体
 */
export interface CreateSealPolicyRequest {
    /**
     * 调用方用户信息，userId 必填
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
     * 需要授权的用户UserId集合。跟上面的SealId参数配合使用。选填，跟上面的Users同时起作用
     */
    UserIds?: Array<string>;
    /**
     * 印章授权内容
     */
    Policy?: string;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
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
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
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
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
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
 * 模板/流程中控件信息，可以是填充控件或签署控件
 */
export interface Component {
    /**
     * 如果是Component填写控件类型，则可选的字段为：
  TEXT - 普通文本控件，输入文本字符串；
  MULTI_LINE_TEXT - 多行文本控件，输入文本字符串；
  CHECK_BOX - 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串；
  FILL_IMAGE - 图片控件，ComponentValue 填写图片的资源 ID；
  DYNAMIC_TABLE - 动态表格控件；
  ATTACHMENT - 附件控件,ComponentValue 填写附件图片的资源 ID列表，以逗号分隔；
  SELECTOR - 选择器控件，ComponentValue填写选择的字符串内容；
  DATE - 日期控件；默认是格式化为xxxx年xx月xx日字符串；
  DISTRICT - 省市区行政区控件，ComponentValue填写省市区行政区字符串内容；
  
  如果是SignComponent签署控件类型，则可选的字段为
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
     * 控件所属文件的序号（取值为：0-N）。
  目前单文件的情况下，值是0
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
     * 控件唯一ID。
  或使用文件发起合同时用于GenerateMode==KEYWORD 指定关键字
     */
    ComponentId?: string;
    /**
     * 控件名。
  或使用文件发起合同时用于GenerateMode==FIELD 指定表单域名称
     */
    ComponentName?: string;
    /**
     * 是否必选，默认为false-非必选
     */
    ComponentRequired?: boolean;
    /**
     * 控件关联的参与方ID，对应Recipient结构体中的RecipientId
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
  OCR_ESIGN -- AI智能识别手写签名
  ESIGN -- 个人印章类型
  SYSTEM_ESIGN -- 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署）
  如：{“ComponentTypeLimit”: [“SYSTEM_ESIGN”]}
  
  ComponentType为SIGN_DATE时，支持以下参数：
  1 Font：字符串类型目前只支持"黑体"、"宋体"，如果不填默认为"黑体"
  2 FontSize： 数字类型，范围6-72，默认值为12
  3 FontAlign： 字符串类型，可取Left/Right/Center，对应左对齐/居中/右对齐
  4 Format： 字符串类型，日期格式，必须是以下五种之一 “yyyy m d”，”yyyy年m月d日”，”yyyy/m/d”，”yyyy-m-d”，”yyyy.m.d”。
  5 Gaps:： 字符串类型，仅在Format为“yyyy m d”时起作用，格式为用逗号分开的两个整数，例如”2,2”，两个数字分别是日期格式的前后两个空隙中的空格个数
  如果extra参数为空，默认为”yyyy年m月d日”格式的居中日期
  特别地，如果extra中Format字段为空或无法被识别，则extra参数会被当作默认值处理（Font，FontSize，Gaps和FontAlign都不会起效）
  参数样例：    "ComponentExtra": "{\"Format\":“yyyy m d”,\"FontSize\":12,\"Gaps\":\"2,2\", \"FontAlign\":\"Right\"}"
  
  ComponentType为SIGN_SEAL类型时，支持以下参数：
  1.PageRanges：PageRange的数组，通过PageRanges属性设置该印章在PDF所有页面上盖章（适用于标书在所有页面盖章的情况）
  参数样例："ComponentExtra":"{\"PageRanges\":[{\"BeginPage\":1,\"EndPage\":-1}]}"
     */
    ComponentExtra?: string;
    /**
     * 是否是表单域类型，默认false-不是
  注意：此字段可能返回 null，表示取不到有效值。
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
     * 第三方应用集成平台模板控件 ID 标识
     */
    ChannelComponentId?: string;
    /**
     * 指定关键字时横坐标偏移量，单位pt
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffsetX?: number;
    /**
     * 指定关键字时纵坐标偏移量，单位pt
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffsetY?: number;
    /**
     * 第三方应用集成中子客企业控件来源。
  0-平台指定；
  1-用户自定义
     */
    ChannelComponentSource?: number;
    /**
     * 指定关键字排序规则，Positive-正序，Reverse-倒序。
  传入Positive时会根据关键字在PDF文件内的顺序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的第一个关键字。
  传入Reverse时会根据关键字在PDF文件内的反序进行排列。在指定KeywordIndexes时，0代表在PDF内查找内容时，查找到的最后一个关键字。
     */
    KeywordOrder?: string;
    /**
     * 指定关键字页码。
  指定页码后，将只在指定的页码内查找关键字，非该页码的关键字将不会查询出来
     */
    KeywordPage?: number;
    /**
     * 关键字位置模式，
  Middle-居中，
  Below-正下方，
  Right-正右方，
  LowerRight-右上角，
  UpperRight-右下角。
  示例：如果设置Middle的关键字盖章，则印章的中心会和关键字的中心重合，如果设置Below，则印章在关键字的正下方
     */
    RelativeLocation?: string;
    /**
     * 关键字索引。
  如果一个关键字在PDF文件中存在多个，可以通过关键字索引指定使用第几个关键字作为最后的结果，可指定多个索引。
  示例：[0,2]，说明使用PDF文件内第1个和第3个关键字位置。
     */
    KeywordIndexes?: Array<number>;
    /**
     * 是否锁定控件值不允许编辑（嵌入式发起使用）
  <br/>默认false：不锁定控件值，允许在页面编辑控件值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockComponentValue?: boolean;
    /**
     * 是否禁止移动和删除控件
  <br/>默认false，不禁止移动和删除控件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ForbidMoveAndDelete?: boolean;
}
/**
 * 部门信息
 */
export interface IntegrationDepartment {
    /**
     * 部门ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeptId?: string;
    /**
     * 部门名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeptName?: string;
    /**
     * 父部门ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentDeptId?: string;
    /**
     * 客户系统部门ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeptOpenId?: string;
    /**
     * 序列号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrderNo?: number;
}
/**
 * DescribeExtendedServiceAuthInfos请求参数结构体
 */
export interface DescribeExtendedServiceAuthInfosRequest {
    /**
     * 操作人信息
     */
    Operator: UserInfo;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作
     */
    Agent?: Agent;
    /**
     * 扩展服务类型，默认为空，查询目前支持的所有扩展服务信息，单个指定则查询单个扩展服务开通信息，取值：
  OPEN_SERVER_SIGN：开通企业静默签署
  OVERSEA_SIGN：企业与港澳台居民签署合同
  MOBILE_CHECK_APPROVER：使用手机号验证签署方身份
  PAGING_SEAL：骑缝章
  BATCH_SIGN：批量签署
     */
    ExtendServiceType?: string;
}
/**
 * DescribeIntegrationRoles返回参数结构体
 */
export interface DescribeIntegrationRolesResponse {
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大2000
     */
    Offset?: number;
    /**
     * 指定每页多少条数据，单页最大200
     */
    Limit?: number;
    /**
     * 符合查询条件的总的角色数
     */
    TotalCount?: number;
    /**
     * 企业角色信息列表
     */
    IntegrateRoles?: Array<IntegrateRole>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * UpdateIntegrationEmployees请求参数结构体
 */
export interface UpdateIntegrationEmployeesRequest {
    /**
     * 当前用户信息，UserId必填
     */
    Operator: UserInfo;
    /**
     * 员工信息，不超过100个。
  根据UserId或OpenId更新员工，必填一个，优先UserId。
  可更新Mobile、DisplayName、Email和Department.DepartmentId字段，其他字段暂不支持
     */
    Employees: Array<Staff>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId需填充子企业Id
     */
    Agent?: Agent;
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
     * 需要查询的流程ID列表，限制最大100个
     */
    FlowIds: Array<string>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * CreateFlowGroupByTemplates请求参数结构体
 */
export interface CreateFlowGroupByTemplatesRequest {
    /**
     * 调用方用户信息，userId 必填。支持填入集团子公司经办人 userId 代发合同
     */
    Operator: UserInfo;
    /**
     * 合同组名称,最大长度200个字符
     */
    FlowGroupName: string;
    /**
     * 合同组的子合同信息，支持2-50个子合同
     */
    FlowGroupInfos: Array<FlowGroupInfo>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 合同组的配置信息。包括是否通知本企业签署方，是否通知其他签署方
     */
    FlowGroupOptions?: FlowGroupOptions;
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
    VerifyResult?: number;
    /**
     * 验签结果详情,内部状态1-验签成功，在电子签签署；2-验签成功，在其他平台签署；3-验签失败；4-pdf文件没有签名域；5-文件签名格式错误
     */
    PdfVerifyResults?: Array<PdfVerifyResult>;
    /**
     * 验签序列号
     */
    VerifySerialNo?: string;
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
    FlowBriefs?: Array<FlowBrief>;
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
     * @deprecated
     */
    ApplicationId?: string;
    /**
     * 主机构ID
     * @deprecated
     */
    OrganizationId?: string;
    /**
     * 经办人的用户ID，同UserId
     */
    OperatorId?: string;
    /**
     * 下属机构ID
     * @deprecated
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
    Templates?: Array<TemplateInfo>;
    /**
     * 查询到的总数
     */
    TotalCount?: number;
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
     * @deprecated
     */
    FileUrls?: string;
}
/**
 * 授权服务信息
 */
export interface ExtendAuthInfo {
    /**
     * 授权服务类型
  OPEN_SERVER_SIGN：开通企业静默签署
  OVERSEA_SIGN：企业与港澳台居民签署合同
  MOBILE_CHECK_APPROVER：使用手机号验证签署方身份
  PAGING_SEAL：骑缝章
  BATCH_SIGN：批量签署
     */
    Type?: string;
    /**
     * 授权服务名称
     */
    Name?: string;
    /**
     * 授权服务状态，ENABLE：开通
  DISABLE：未开通
     */
    Status?: string;
    /**
     * 授权人用户id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorUserId?: string;
    /**
     * 授权时间戳，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateOn?: number;
    /**
     * 被授权用户列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HasAuthUserList?: Array<HasAuthUser>;
}
/**
 * 解除协议文档中内容信息，包括但不限于：解除理由、解除后仍然有效的条款-保留条款、原合同事项处理-费用结算、原合同事项处理-其他事项、其他约定等。
 */
export interface RelieveInfo {
    /**
     * 解除理由，最大支持200个字
     */
    Reason: string;
    /**
     * 解除后仍然有效的条款，保留条款，最大支持200个字
  
     */
    RemainInForceItem?: string;
    /**
     * 原合同事项处理-费用结算，最大支持200个字
  
     */
    OriginalExpenseSettlement?: string;
    /**
     * 原合同事项处理-其他事项，最大支持200个字
  
     */
    OriginalOtherSettlement?: string;
    /**
     * 其他约定，最大支持200个字
  
     */
    OtherDeals?: string;
}
/**
 * 个性化参数
 */
export interface EmbedUrlOption {
    /**
     * 合同详情预览，允许展示控件信息
  <br/>true：允许在合同详情页展示控件
  <br/>false：不允许在合同详情页展示控件
  <br/>默认false，合同详情页不展示控件
     */
    ShowFlowDetailComponent?: boolean;
    /**
     * 模板预览，允许展示模板控件信息
  <br/>true：允许在模板预览页展示控件
  <br/>false：不允许在模板预览页展示控件
  <br/>默认false，模板预览页不展示控件
     */
    ShowTemplateComponent?: boolean;
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
     * 需要执行撤回的流程(合同)的编号列表，最多100个.
  列表中的流程(合同)编号不要重复.
     */
    FlowIds: Array<string>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
  
     */
    Agent?: Agent;
}
/**
 * CreateMultiFlowSignQRCode请求参数结构体
 */
export interface CreateMultiFlowSignQRCodeRequest {
    /**
     * 用户信息，其中UserId为必填参数
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
  <br/>发起流程数量超过此上限后二维码自动失效
     */
    MaxFlowNum?: number;
    /**
     * 签署流程有效天数
  <br/>默认7天
  <br/>最高设置不超过30天
     */
    FlowEffectiveDay?: number;
    /**
     * 二维码有效天数 默认7天 最高设置不超过90天
     */
    QrEffectiveDay?: number;
    /**
     * 指定的签署人信息
  <br/>指定后，则只允许指定的签署人扫码签署
     */
    Restrictions?: Array<ApproverRestriction>;
    /**
     * 用户自定义字段
  <br/>回调的时候会进行透传，长度需要小于20480
     */
    UserData?: string;
    /**
     * 回调地址,最大长度1000字符串
  <br/>回调时机：用户通过签署二维码发起签署流程时，企业额度不足导致失败
     */
    CallbackUrl?: string;
    /**
     * 应用信息
     * @deprecated
     */
    Agent?: Agent;
    /**
     * 限制二维码用户条件（已弃用）
     * @deprecated
     */
    ApproverRestrictions?: ApproverRestriction;
}
/**
 * DescribeFlowInfo请求参数结构体
 */
export interface DescribeFlowInfoRequest {
    /**
     * 调用方用户信息，userId 必填
     */
    Operator?: UserInfo;
    /**
     * 需要查询的流程ID列表，限制最大100个
  
  如果查询合同组的信息,不要传此参数
     */
    FlowIds?: Array<string>;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
    /**
     * 合同组ID, 如果传此参数会忽略FlowIds入参
   所以如传此参数不要传FlowIds参数
  
     */
    FlowGroupId?: string;
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
     * 合同组ID
     */
    FlowGroupId?: string;
    /**
     * 合同组名称
     */
    FlowGroupName?: string;
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
/**
 * CreateFlow返回参数结构体
 */
export interface CreateFlowResponse {
    /**
     * 签署流程编号
     */
    FlowId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserAutoSignStatus请求参数结构体
 */
export interface DescribeUserAutoSignStatusRequest {
    /**
     * 操作人信息，UserId必填
     */
    Operator: UserInfo;
    /**
     * 自动签场景:
  E_PRESCRIPTION_AUTO_SIGN 电子处方
     */
    SceneKey: string;
    /**
     * 要查询开启状态的用户信息
     */
    UserInfo: UserThreeFactor;
    /**
     * 代理相关应用信息，如集团主企业代子企业操作的场景中ProxyOrganizationId必填
     */
    Agent?: Agent;
}
/**
 * 文档内的填充控件返回结构体，返回控件的基本信息和填写内容值
 */
export interface FilledComponent {
    /**
     * 控件Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentId?: string;
    /**
     * 控件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentName?: string;
    /**
     * 控件填写状态；0-未填写；1-已填写
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentFillStatus?: string;
    /**
     * 控件填写内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentValue?: string;
    /**
     * 控件所属参与方Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentRecipientId?: string;
    /**
     * 图片填充控件下载链接，如果是图片填充控件时，这里返回图片的下载链接。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageUrl?: string;
}
/**
 * 下载文件的URL信息
 */
export interface FileUrl {
    /**
     * 下载文件的URL，有效期为输入的UrlTtl，默认5分钟
     */
    Url: string;
    /**
     * 下载文件的附加信息。如果是pdf文件，会返回pdf文件每页的有效高宽
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Option: string;
}
/**
 * 流程信息摘要
 */
export interface FlowBrief {
    /**
     * 流程的编号ID
     */
    FlowId?: string;
    /**
     * 流程的名称
     */
    FlowName?: string;
    /**
     * 流程的描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowDescription?: string;
    /**
     * 流程的类型
     */
    FlowType?: string;
    /**
     * 流程状态
  - 0 还没有发起
  - 1 待签署
  - 2 部分签署
  - 3 已拒签
  - 4 已签署
  - 5 已过期
  - 6 已撤销
  - 7 还没有预发起
  - 8 等待填写
  - 9 部分填写
  - 10 拒填
  - 21 已解除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowStatus?: number;
    /**
     * 流程创建的时间戳，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedOn?: number;
    /**
     * 当合同被拒签或者取消后(当FlowStatus=3或者FlowStatus=6的时候)
  此字段展示拒签或者取消的原因描述
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowMessage?: string;
    /**
     *  合同发起人userId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Creator?: string;
    /**
     * 合同过期时间，时间戳，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Deadline?: number;
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
     * 已加入的企业数量(废弃,请使用ActivatedTotal)
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    ActivedTotal?: number;
    /**
     * 如果入参Export为 true 时使用，表示导出Excel的url
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExportUrl?: string;
    /**
     * 成员企业信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<GroupOrganization>;
    /**
     * 已加入的企业数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ActivatedTotal?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeExtendedServiceAuthInfos返回参数结构体
 */
export interface DescribeExtendedServiceAuthInfosResponse {
    /**
     * 授权服务信息列表
     */
    AuthInfoList?: Array<ExtendAuthInfo>;
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
     * 被抄送方手机号码， 支持国内手机号11位数字(无需加+86前缀或其他字符)。
  请确认手机号所有方为此业务通知方。
     */
    Mobile?: string;
    /**
     * 被抄送方姓名。
  抄送方的姓名将用于身份认证，请确保填写的姓名为抄送方的真实姓名，而非昵称等代名。
     */
    Name?: string;
    /**
     * 被抄送方类型, 可设置以下类型:
  <ul><li> **0** :个人抄送方</li>
  <li> **1** :企业员工抄送方</li></ul>
     */
    CcType?: number;
    /**
     * 被抄送方权限, 可设置如下权限:
  <ul><li> **0** :可查看合同内容</li>
  <li> **1** :可查看合同内容也可下载原文</li></ul>
     */
    CcPermission?: number;
    /**
     * 通知签署方经办人的方式,  有以下途径:
  <ul><li> **sms** :  (默认)短信</li>
  <li> **none** : 不通知</li></ul>
     */
    NotifyType?: string;
}
