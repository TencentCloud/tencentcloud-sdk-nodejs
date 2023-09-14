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
 * ChannelCreateConvertTaskApi返回参数结构体
 */
export interface ChannelCreateConvertTaskApiResponse {
    /**
     * 任务id
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelCreateFlowReminds返回参数结构体
 */
export interface ChannelCreateFlowRemindsResponse {
    /**
     * 合同催办详情信息
     */
    RemindFlowRecords?: Array<RemindFlowRecords>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
  当GenerateMode=KEYWORD时，通过"^"来决定是否使用关键字整词匹配能力。
  例：当GenerateMode=KEYWORD时，如果传入关键字"^甲方签署^"，则会在PDF文件中有且仅有"甲方签署"关键字的地方进行对应操作。
  如传入的关键字为"甲方签署"，则PDF文件中每个出现关键字的位置都会执行相应操作。
  
  创建控件时，此值为空
  查询时返回完整结构
     */
    ComponentId?: string;
    /**
     * 如果是Component控件类型，则可选的字段为：
  TEXT - 普通文本控件，输入文本字符串；
  MULTI_LINE_TEXT - 多行文本控件，输入文本字符串；
  CHECK_BOX - 勾选框控件，若选中填写ComponentValue 填写 true或者 false 字符串；
  FILL_IMAGE - 图片控件，ComponentValue 填写图片的资源 ID；
  DYNAMIC_TABLE - 动态表格控件；
  ATTACHMENT - 附件控件,ComponentValue 填写附件图片的资源 ID列表，以逗号分割；
  SELECTOR - 选择器控件，ComponentValue填写选择的字符串内容；
  DATE - 日期控件；默认是格式化为xxxx年xx月xx日字符串；
  DISTRICT - 省市区行政区控件，ComponentValue填写省市区行政区字符串内容；
  
  如果是SignComponent控件类型，则可选的字段为
  SIGN_SEAL - 签署印章控件；
  SIGN_DATE - 签署日期控件；
  SIGN_SIGNATURE - 用户签名控件；
  SIGN_PERSONAL_SEAL - 个人签署印章控件（使用文件发起暂不支持此类型）；
  SIGN_PAGING_SEAL - 骑缝章；若文件发起，需要对应填充ComponentPosY、ComponentWidth、ComponentHeight
  SIGN_OPINION - 签署意见控件，用户需要根据配置的签署意见内容，完成对意见内容的确认;
  SIGN_LEGAL_PERSON_SEAL - 企业法定代表人控件。
  
  表单域的控件不能作为印章和签名控件
     */
    ComponentType?: string;
    /**
     * 控件简称，不超过30个字符
     */
    ComponentName?: string;
    /**
     * 控件是否为必填项，
  默认为false-非必填
     */
    ComponentRequired?: boolean;
    /**
     * 控件关联的参与方ID，对应Recipient结构体中的RecipientId
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
     * 扩展参数：
  为JSON格式。
  不同类型的控件会有部分非通用参数
  
  TEXT/MULTI_LINE_TEXT控件可以指定
  1 Font：目前只支持黑体、宋体
  2 FontSize： 范围12-72
  3 FontAlign： Left/Right/Center，左对齐/居中/右对齐
  例如：{"FontSize":12}
  
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
  参数样例： "ComponentExtra": "{"Format":“yyyy m d”,"FontSize":12,"Gaps":"2,2", "FontAlign":"Right"}"
  
  ComponentType为SIGN_SEAL类型时，支持以下参数：
  1.PageRanges：PageRange的数组，通过PageRanges属性设置该印章在PDF所有页面上盖章（适用于标书在所有页面盖章的情况）
  参数样例： "ComponentExtra":"{["PageRange":{"BeginPage":1,"EndPage":-1}]}"
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
     * 日期签署控件的字号，默认为 12
  
  签署区日期控件会转换成图片格式并带存证，需要通过字体决定图片大小
     */
    ComponentDateFontSize?: number;
    /**
     * 控件所属文档的Id, 模板相关接口为空值
     */
    DocumentId?: string;
    /**
     * 控件描述，不超过30个字符
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
    /**
     * 平台企业控件ID。
  如果不为空，属于平台企业预设控件；
     */
    ChannelComponentId?: string;
    /**
     * 指定关键字排序规则，
  Positive-正序，
  Reverse-倒序。
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
     * 关键字索引，如果一个关键字在PDF文件中存在多个，可以通过关键字索引指定使用第几个关键字作为最后的结果，可指定多个索引。
  示例[0,2]，说明使用PDF文件内第1个和第3个关键字位置。
     */
    KeywordIndexes?: Array<number | bigint>;
    /**
     * 填写提示的内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Placeholder?: string;
    /**
     * 是否锁定控件值不允许编辑（嵌入式发起使用） <br/>默认false：不锁定控件值，允许在页面编辑控件值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockComponentValue?: boolean;
    /**
     * 是否禁止移动和删除控件 <br/>默认false，不禁止移动和删除控件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ForbidMoveAndDelete?: boolean;
}
/**
 * ChannelDeleteSealPolicies请求参数结构体
 */
export interface ChannelDeleteSealPoliciesRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 指定印章ID
     */
    SealId: string;
    /**
     * 指定用户ID数组，电子签系统用户ID
  可以填写OpenId，系统会通过组织+渠道+OpenId查询得到UserId进行授权取消。
     */
    UserIds: Array<string>;
    /**
     * 组织机构信息，不用传
     * @deprecated
     */
    Organization?: OrganizationInfo;
    /**
     * 操作人（用户）信息，不用传
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelBatchCancelFlows返回参数结构体
 */
export interface ChannelBatchCancelFlowsResponse {
    /**
     * 签署流程批量撤销失败原因，错误信息与流程Id一一对应，成功为“”,失败则对应失败消息
     */
    FailMessages?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelDisableUserAutoSign返回参数结构体
 */
export interface ChannelDisableUserAutoSignResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 第三方应用集成员工部门信息
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
 * 签署人配置信息
 */
export interface CommonApproverOption {
    /**
     * 是否允许修改签署人信息
     */
    CanEditApprover?: boolean;
}
/**
 * ChannelCreateFlowGroupByTemplates返回参数结构体
 */
export interface ChannelCreateFlowGroupByTemplatesResponse {
    /**
     * 合同组ID
     */
    FlowGroupId?: string;
    /**
     * 子合同ID列表
     */
    FlowIds?: Array<string>;
    /**
     * 复杂文档合成任务（如，包含动态表格的预览任务）的任务信息数组；
  如果文档需要异步合成，此字段会返回该异步任务的任务信息，后续可以通过ChannelGetTaskResultApi接口查询任务详情；
     */
    TaskInfos?: Array<TaskInfo>;
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
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
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
    /**
     * 签署节点审核时需要指定，给个人审核时必填。
     */
    RecipientId?: string;
    /**
     * 操作类型，默认：SignReview；SignReview:签署审核，CreateReview：发起审核
  注：接口通过该字段区分操作类型
  该字段不传或者为空，则默认为SignReview签署审核，走签署审核流程
  若想使用发起审核，请指定该字段为：CreateReview
  若发起个人审核，则指定该字段为：SignReview
     */
    OperateType?: string;
}
/**
 * 授权出错信息
 */
export interface AuthFailMessage {
    /**
     * 第三方应用平台的子客企业OpenId
     */
    ProxyOrganizationOpenId: string;
    /**
     * 错误信息
     */
    Message: string;
}
/**
 * DescribeFlowDetailInfo请求参数结构体
 */
export interface DescribeFlowDetailInfoRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 合同(流程)编号数组，最多支持100个。
  <br/>备注：该参数和合同组编号必须二选一, 如果填写FlowGroupId则忽略此FlowIds的入参
     */
    FlowIds?: Array<string>;
    /**
     * 合同组编号
  <br/>备注：该参数和合同(流程)编号数组必须二选一
     */
    FlowGroupId?: string;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelCancelUserAutoSignEnableUrl返回参数结构体
 */
export interface ChannelCancelUserAutoSignEnableUrlResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyExtendedService请求参数结构体
 */
export interface ModifyExtendedServiceRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
  
  注: 此接口 参数Agent. ProxyOperator.OpenId 需要传递超管或者法人的OpenId
     */
    Agent: Agent;
    /**
     *   扩展服务类型
    AUTO_SIGN             企业静默签（自动签署）
    OVERSEA_SIGN          企业与港澳台居民*签署合同
    MOBILE_CHECK_APPROVER 使用手机号验证签署方身份
    PAGING_SEAL           骑缝章
    DOWNLOAD_FLOW         授权渠道下载合同
     */
    ServiceType: string;
    /**
     * 操作类型
  OPEN:开通
  CLOSE:关闭
     */
    Operate: string;
}
/**
 * DescribeResourceUrlsByFlows请求参数结构体
 */
export interface DescribeResourceUrlsByFlowsRequest {
    /**
     * 应用相关信息。
  此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 查询资源所对应的签署流程Id，最多支持50个
     */
    FlowIds?: Array<string>;
    /**
     * 操作者的信息，不用传
     * @deprecated
     */
    Operator?: UserInfo;
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
 * ChannelCreateFlowSignUrl返回参数结构体
 */
export interface ChannelCreateFlowSignUrlResponse {
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
 * ChannelCreatePrepareFlow返回参数结构体
 */
export interface ChannelCreatePrepareFlowResponse {
    /**
     * 预发起的合同链接， 可以直接点击进入进行合同发起
     */
    PrepareFlowUrl?: string;
    /**
     * 合同发起后预览链接， 注意此时合同并未发起，仅只是展示效果
     */
    PreviewFlowUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 主题配置
 */
export interface WebThemeConfig {
    /**
     * 页面底部是否显示电子签logo
  <br/>true：允许在页面底部隐藏电子签logo
  <br/>默认false，不允许允许在页面底部隐藏电子签logo
     */
    DisplaySignBrandLogo?: boolean;
    /**
     * 嵌入式主题颜色
  <br/>支持十六进制颜色值以及RGB格式颜色值，例如：#D54941，rgb(213, 73, 65)
     */
    WebEmbedThemeColor?: string;
}
/**
 * OperateChannelTemplate返回参数结构体
 */
export interface OperateChannelTemplateResponse {
    /**
     * 腾讯电子签颁发给第三方应用平台的应用ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AppId?: string;
    /**
     * 第三方应用平台模板库模板唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateId?: string;
    /**
     * 描述模板可见性更改的结果，和参数中Available无关。
  全部成功-"all-success",
  部分成功-"part-success",
  全部失败-"fail"，失败的会在FailMessageList中展示。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateResult?: string;
    /**
     * 模板可见性,
  全部可见-"all",
  部分可见-"part"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthTag?: string;
    /**
     * 合作企业方第三方机构唯一标识数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProxyOrganizationOpenIds?: Array<string>;
    /**
     * 操作失败信息数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailMessageList?: Array<AuthFailMessage>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 第三方应用的业务信息，最大长度1000个字符。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
     */
    CustomerData?: string;
    /**
     * 合同签署顺序类型(无序签,顺序签)，默认为false，即有序签署
     */
    Unordered?: boolean;
    /**
     * 签署文件中的发起方的填写控件，需要在发起的时候进行填充
     */
    Components?: Array<Component>;
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
 * 创建合同个性化参数
 */
export interface CreateFlowOption {
    /**
     * 是否允许修改合同信息，true-是，false-否
     */
    CanEditFlow?: boolean;
    /**
     * 是否允许发起合同弹窗隐藏合同名称，true-允许，false-不允许
     */
    HideShowFlowName?: boolean;
    /**
     * 是否允许发起合同弹窗隐藏合同类型，true-允许，false-不允许
     */
    HideShowFlowType?: boolean;
    /**
     * 是否允许发起合同弹窗隐藏合同到期时间，true-允许，false-不允许
     */
    HideShowDeadline?: boolean;
    /**
     * 是否允许发起合同步骤跳过指定签署方步骤，true-允许，false-不允许
     */
    CanSkipAddApprover?: boolean;
    /**
     * 定制化发起合同弹窗的描述信息，描述信息最长500
     */
    CustomCreateFlowDescription?: string;
}
/**
 * 基础流程信息
 */
export interface BaseFlowInfo {
    /**
     * 合同流程名称
     */
    FlowName: string;
    /**
     * 合同流程类型
  <br/>客户自定义，用于合同分类展示
     */
    FlowType: string;
    /**
     * 合同流程描述信息
     */
    FlowDescription: string;
    /**
     * 合同流程截止时间，unix时间戳，单位秒
     */
    Deadline: number;
    /**
     * 是否顺序签署(true:无序签,false:顺序签)
  <br/>默认false，有序签署合同
     */
    Unordered?: boolean;
    /**
     * 是否打开智能添加填写区(默认开启，打开:"OPEN" 关闭："CLOSE")
     */
    IntelligentStatus?: string;
    /**
     * 填写控件内容
     */
    FormFields?: Array<FormField>;
    /**
     * 本企业(发起方企业)是否需要签署审批
  <br/>true：开启发起方签署审批
  <br/>false：不开启发起方签署审批
  <br/>开启后，使用ChannelCreateFlowSignReview接口提交审批结果，才能继续完成签署
     */
    NeedSignReview?: boolean;
    /**
     * 用户流程自定义数据参数
     */
    UserData?: string;
    /**
     * 抄送人信息
     */
    CcInfos?: Array<CcInfo>;
    /**
     * 是否需要开启发起方发起前审核
  <br/>true：开启发起方发起前审核
  <br/>false：不开启发起方发起前审核
  <br/>当指定NeedCreateReview=true，则提交审核后，需要使用接口：ChannelCreateFlowSignReview，来完成发起前审核，审核通过后，可以继续查看，签署合同
     */
    NeedCreateReview?: boolean;
    /**
     * 填写控件：文件发起使用
     */
    Components?: Array<Component>;
}
/**
 * 解除协议的签署人，如不指定，默认使用待解除流程（即原流程）中的签署人。
注意：不支持更换C端（个人身份类型）签署人，如果原流程中含有C端签署人，默认使用原流程中的该签署人。
注意：目前不支持替换C端（个人身份类型）签署人，但是可以指定C端签署人的签署方自定义控件别名，具体见参数ApproverSignRole描述。
注意：当指定C端签署人的签署方自定义控件别名不空时，除参数ApproverNumber外，可以只参数ApproverSignRole。

如果需要指定B端（机构身份类型）签署人，其中ReleasedApprover需要传递的参数如下：
ApproverNumber, OrganizationName, ApproverType必传。
对于其他身份标识
- 子客企业指定经办人：OpenId必传，OrganizationOpenId必传；
- 非子客企业：Name、Mobile必传。
 */
export interface ReleasedApprover {
    /**
     * 企业签署方工商营业执照上的企业名称，签署方为非发起方企业场景下必传，最大长度64个字符
     */
    OrganizationName: string;
    /**
     * 签署人在原流程中的签署人列表中的顺序序号（从0开始，按顺序依次递增），如果不清楚原流程中的签署人列表，可以通过DescribeFlows接口查看
     */
    ApproverNumber: number;
    /**
     * 签署人类型，目前仅支持
  ORGANIZATION-企业
  ENTERPRISESERVER-企业静默签
     */
    ApproverType: string;
    /**
     * 签署人姓名，最大长度50个字符
     */
    Name?: string;
    /**
     * 签署人身份证件类型
  1.ID_CARD 居民身份证
  2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证
  3.HONGKONG_AND_MACAO 港澳居民来往内地通行证
     */
    IdCardType?: string;
    /**
     * 签署人证件号
     */
    IdCardNumber?: string;
    /**
     * 签署人手机号，脱敏显示。大陆手机号为11位，暂不支持海外手机号
     */
    Mobile?: string;
    /**
     * 企业签署方在同一第三方应用下的其他合作企业OpenId，签署方为非发起方企业场景下必传，最大长度64个字符
     */
    OrganizationOpenId?: string;
    /**
     * 用户侧第三方id，最大长度64个字符
  当签署方为同一第三方应用下的员工时，该字必传
     */
    OpenId?: string;
    /**
     * 签署控件类型，支持自定义企业签署方的签署控件为“印章”或“签名”
  - SIGN_SEAL-默认为印章控件类型
  - SIGN_SIGNATURE-手写签名控件类型
     */
    ApproverSignComponentType?: string;
    /**
     * 签署方自定义控件别名，最大长度20个字符
     */
    ApproverSignRole?: string;
}
/**
 * CreateConsoleLoginUrl返回参数结构体
 */
export interface CreateConsoleLoginUrlResponse {
    /**
     * 子客企业Web控制台url注意事项：
  1. 所有类型的链接在企业未认证/员工未认证完成时，只要在有效期内（一年）都可以访问
  2. 若企业认证完成且员工认证完成后，重新获取pc端的链接在5分钟之内有效，且只能访问一次
  3. 若企业认证完成且员工认证完成后，重新获取CHANNEL/APP的链接只要在有效期内（一年）都可以访问
  4. 此链接仅单次有效，每次登录需要需要重新创建新的链接，尽量不要做链接存储，多次使用。
  5. 创建的链接应避免被转义，如：&被转义为\u0026；如使用Postman请求后，请选择响应类型为 JSON，否则链接将被转义
     */
    ConsoleUrl?: string;
    /**
     * 子客企业是否已开通腾讯电子签，true-是，false-否
  注意：
  1、企业是否实名根据传参Agent.ProxyOrganizationOpenId进行判断，非企业名称或者社会信用代码
     */
    IsActivated?: boolean;
    /**
     * 当前经办人是否已认证，true-是，false-否
  注意：
  1、经办人是否实名是根据Agent.ProxyOperator.OpenId判断，非经办人姓名
     */
    ProxyOperatorIsVerified?: boolean;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelDeleteRoleUsers请求参数结构体
 */
export interface ChannelDeleteRoleUsersRequest {
    /**
     * 代理信息此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 角色Id（非超管或法人角色Id）
     */
    RoleId: string;
    /**
     * 电子签用户ID列表，与OpenIds参数二选一,优先UserIds参数，最多两百
     */
    UserIds?: Array<string>;
    /**
     * 操作人信息
     * @deprecated
     */
    Operator?: UserInfo;
    /**
     * 客户系统用户ID列表，与UserIds参数二选一,优先UserIds参数，最多两百
     */
    OpenIds?: Array<string>;
}
/**
 * ChannelCreateUserRoles返回参数结构体
 */
export interface ChannelCreateUserRolesResponse {
    /**
     * 绑定失败的用户角色列表
     */
    FailedCreateRoleData?: Array<FailedCreateRoleData>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 第三方平台子客企业名称，最大长度64个字符
     */
    ProxyOrganizationName: string;
    /**
     * 营业执照正面照(PNG或JPG) base64格式, 大小不超过5M
     */
    BusinessLicense?: string;
    /**
     * 第三方平台子客企业统一社会信用代码，最大长度200个字符
     */
    UniformSocialCreditCode?: string;
    /**
     * 第三方平台子客企业法人/负责人姓名
     */
    ProxyLegalName?: string;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
    /**
     * 第三方平台子客企业法人/负责人证件类型，默认居民身份证（ID_CARD）类型，暂不支持其他类型
     */
    ProxyLegalIdCardType?: string;
    /**
     * 第三方平台子客企业法人/负责人证件号
     */
    ProxyLegalIdCardNumber?: string;
}
/**
 * ChannelCreatePrepareFlow请求参数结构体
 */
export interface ChannelCreatePrepareFlowRequest {
    /**
     * 资源id，与ResourceType对应
     */
    ResourceId: string;
    /**
     * 资源类型，与ResourceId对应1：模板   2: 文件
     */
    ResourceType: number;
    /**
     * 合同流程基础信息
     */
    FlowInfo: BaseFlowInfo;
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填
     */
    Agent?: Agent;
    /**
     * 合同流程配置信息，用于配置发起合同时定制化
     */
    FlowOption?: CreateFlowOption;
    /**
     * 合同签署人信息
     */
    FlowApproverList?: Array<CommonFlowApprover>;
    /**
     * 通过flowid快速获得之前成功通过页面发起的合同生成链接
     */
    FlowId?: string;
    /**
     * 该参数不可用，请通过获取 web 可嵌入接口获取合同流程预览 URL
     * @deprecated
     */
    NeedPreview?: boolean;
    /**
     * 企业机构信息，不用传
     * @deprecated
     */
    Organization?: OrganizationInfo;
    /**
     * 操作人（用户）信息，不用传
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelCreateFlowReminds请求参数结构体
 */
export interface ChannelCreateFlowRemindsRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 签署流程Id数组，最多100个，超过100不处理
     */
    FlowIds: Array<string>;
}
/**
 * ChannelCreateSealPolicy返回参数结构体
 */
export interface ChannelCreateSealPolicyResponse {
    /**
     * 最终授权成功的电子签系统用户ID数组。其他的跳过的是已经授权了的。
  请求参数填写OpenId时，返回授权成功的 Openid。
     */
    UserIds?: Array<string>;
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
 * 签署人签署链接信息
 */
export interface FlowApproverUrlInfo {
    /**
     * 签署短链接，不支持小程序嵌入，只支持移动端浏览器打开。注意该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。
     */
    SignUrl: string;
    /**
     * 签署人类型 PERSON-个人
     */
    ApproverType: string;
    /**
     * 签署人姓名
     */
    Name: string;
    /**
     * 签署人手机号
     */
    Mobile: string;
    /**
     * 签署长链接，支持小程序嵌入。注意该链接有效期为30分钟，同时需要注意保密，不要外泄给无关用户。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LongUrl?: string;
}
/**
 * ChannelCreateWebThemeConfig请求参数结构体
 */
export interface ChannelCreateWebThemeConfigRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 主题类型<br/>EMBED_WEB_THEME：嵌入式主题
  <br/>目前只支持EMBED_WEB_THEME，web页面嵌入的主题风格配置
     */
    ThemeType: string;
    /**
     * 主题配置
     */
    WebThemeConfig: WebThemeConfig;
}
/**
 * ChannelCreateConvertTaskApi请求参数结构体
 */
export interface ChannelCreateConvertTaskApiRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
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
     * 调用方用户信息，不用传
     * @deprecated
     */
    Operator?: UserInfo;
    /**
     * 暂未开放
     * @deprecated
     */
    Organization?: OrganizationInfo;
}
/**
 * ChannelCreateFlowByFiles请求参数结构体
 */
export interface ChannelCreateFlowByFilesRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 均必填。
     */
    Agent?: Agent;
    /**
     * 签署流程名称，长度不超过200个字符
     */
    FlowName?: string;
    /**
     * 签署流程的描述，长度不超过1000个字符
     */
    FlowDescription?: string;
    /**
     * 签署流程签约方列表，最多不超过50个参与方
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
     * 签署流程的签署截止时间。
  值为unix时间戳,精确到秒,不传默认为当前时间一年后
  不能早于当前时间
     */
    Deadline?: number;
    /**
     * 签署流程回调地址，长度不超过255个字符
  如果不传递回调地址， 则默认是配置应用号时候使用的回调地址
     */
    CallbackUrl?: string;
    /**
     * 合同签署顺序类型
  true - 无序签,
  false - 顺序签，
  默认为false，即有序签署。
  有序签署时以传入FlowApprovers数组的顺序作为签署顺序
     */
    Unordered?: boolean;
    /**
     * 签署流程的类型，长度不超过255个字符
     */
    FlowType?: string;
    /**
     * 合同显示的页卡模板，说明：只支持{合同名称}, {发起方企业}, {发起方姓名}, {签署方N企业}, {签署方N姓名}，且N不能超过签署人的数量，N从1开始
     */
    CustomShowMap?: string;
    /**
     * 业务信息，最大长度1000个字符。
     */
    CustomerData?: string;
    /**
     * 发起方企业的签署人进行签署操作是否需要企业内部审批。 若设置为true,审核结果需通过接口 ChannelCreateFlowSignReview 通知电子签，审核通过后，发起方企业签署人方可进行签署操作，否则会阻塞其签署操作。  注：企业可以通过此功能与企业内部的审批流程进行关联，支持手动、静默签署合同。
     */
    NeedSignReview?: boolean;
    /**
     * 签署人校验方式
  VerifyCheck: 人脸识别（默认）
  MobileCheck：手机号验证，用户手机号和参与方手机号（ApproverMobile）相同即可查看合同内容（当手写签名方式为OCR_ESIGN时，该校验方式无效，因为这种签名方式依赖实名认证）
  参数说明：可选人脸识别或手机号验证两种方式，若选择后者，未实名个人签署方在签署合同时，无需经过实名认证和意愿确认两次人脸识别，该能力仅适用于个人签署方。
     */
    ApproverVerifyType?: string;
    /**
     * 标识是否允许发起后添加控件。
  0为不允许
  1为允许。
  如果为1，创建的时候不能有签署控件，只能创建后添加。注意发起后添加控件功能不支持添加骑缝章和签批控件
     */
    SignBeanTag?: number;
    /**
     * 被抄送人信息列表
     */
    CcInfos?: Array<CcInfo>;
    /**
     * 给关注人发送短信通知的类型，
  0-合同发起时通知
  1-签署完成后通知
     */
    CcNotifyType?: number;
    /**
     * 个人自动签场景。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
     */
    AutoSignScene?: string;
    /**
     * 操作者的信息，不用传
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * 渠道角色信息
 */
export interface ChannelRole {
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
     * 角色状态：1-启用；2-禁用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleStatus?: number;
}
/**
 * ChannelCreatePreparedPersonalEsign返回参数结构体
 */
export interface ChannelCreatePreparedPersonalEsignResponse {
    /**
     * 导入的印章 ID
     */
    SealId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 签署人的流程信息明细
 */
export interface FlowApproverDetail {
    /**
     * 模板配置时候的签署人id,与控件绑定
     */
    ReceiptId?: string;
    /**
     * 平台企业的第三方id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProxyOrganizationOpenId?: string;
    /**
     * 平台企业操作人的第三方id
     */
    ProxyOperatorOpenId?: string;
    /**
     * 平台企业名称
     */
    ProxyOrganizationName?: string;
    /**
     * 签署人手机号
     */
    Mobile?: string;
    /**
     * 签署人签署顺序
     */
    SignOrder?: number;
    /**
     * 签署人姓名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproveName?: string;
    /**
     * 当前签署人的状态, 状态如下
  <br/>PENDING 待签署
  <br/>FILLPENDING 待填写
  <br/>FILLACCEPT 填写完成
  <br/>FILLREJECT 拒绝填写
  <br/>WAITPICKUP 待领取
  <br/>ACCEPT 已签署
  <br/>REJECT 拒签
  <br/>DEADLINE 过期没人处理
  <br/>CANCEL 流程已撤回
  <br/>FORWARD 已经转他人处理
  <br/>STOP 流程已终止
  <br/>RELIEVED 解除协议（已解除）
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproveStatus?: string;
    /**
     * 签署人自定义信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproveMessage?: string;
    /**
     * 签署人签署时间戳，单位秒
     */
    ApproveTime?: number;
    /**
     * 参与者类型
  <br/>ORGANIZATION：企业签署人
  <br/>PERSON：个人签署人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproveType?: string;
}
/**
 * DescribeResourceUrlsByFlows返回参数结构体
 */
export interface DescribeResourceUrlsByFlowsResponse {
    /**
     * 签署流程资源对应链接信息
     */
    FlowResourceUrlInfos?: Array<FlowResourceUrlInfo>;
    /**
     * 创建消息，对应多个合同ID，
  成功为“”,创建失败则对应失败消息
     */
    ErrorMessages?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelCreateFlowGroupByFiles请求参数结构体
 */
export interface ChannelCreateFlowGroupByFilesRequest {
    /**
     * 每个子合同的发起所需的信息，数量限制2-50
     */
    FlowFileInfos: Array<FlowFileInfo>;
    /**
     * 合同组名称，长度不超过200个字符
     */
    FlowGroupName: string;
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent?: Agent;
    /**
     * 签署人校验方式
  VerifyCheck: 人脸识别（默认）
  MobileCheck：手机号验证
  参数说明：若选择后者，未实名的个人签署方查看合同时，无需进行人脸识别实名认证（但签署合同时仍然需要人脸实名），该能力仅适用于个人签署方。
     */
    ApproverVerifyType?: string;
    /**
     * 合同组的配置项信息包括：在合同组签署过程中，是否需要对每个子合同进行独立的意愿确认。
     */
    FlowGroupOptions?: FlowGroupOptions;
    /**
     * 操作者的信息，此参数不用传
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelCreateOrganizationModifyQrCode请求参数结构体
 */
export interface ChannelCreateOrganizationModifyQrCodeRequest {
    /**
     * 应用相关信息。 此接口Agent.AppId 必填。
     */
    Agent: Agent;
}
/**
 * DescribeFlowDetailInfo返回参数结构体
 */
export interface DescribeFlowDetailInfoResponse {
    /**
     * 第三方平台应用号Id
     */
    ApplicationId?: string;
    /**
     * 第三方平台子客企业OpenId
     */
    ProxyOrganizationOpenId?: string;
    /**
     * 合同(签署流程)的具体详细描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowInfo?: Array<FlowDetailInfo>;
    /**
     * 合同组编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowGroupId?: string;
    /**
     * 合同组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowGroupName?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecipientFillStatus?: string;
    /**
     * 是否发起方
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsPromoter?: boolean;
    /**
     * 填写控件内容
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Components?: Array<FilledComponent>;
}
/**
 * ChannelDescribeRoles请求参数结构体
 */
export interface ChannelDescribeRolesRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大2000
     */
    Offset: number;
    /**
     * 指定每页多少条数据，单页最大200
     */
    Limit: string;
    /**
     * 查询的关键字段:
  Key:"RoleType",Values:["1"]查询系统角色，Values:["2"]查询自定义角色
  Key:"RoleStatus",Values:["1"]查询启用角色，Values:["2"]查询禁用角色
     */
    Filters?: Array<Filter>;
    /**
     * 操作人信息
     * @deprecated
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
    ConfirmUrl?: string;
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
>- 签署参与方 Recipients，在模板发起合同时用于指定参与方
>- 填写控件 Components
>- 签署控件 SignComponents
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
     * 模板的填充控件列表
     */
    Components?: Array<Component>;
    /**
     * 模板中的签署参与方列表
     */
    Recipients?: Array<Recipient>;
    /**
     * 模板中的签署控件列表
     */
    SignComponents?: Array<Component>;
    /**
     * 模板类型：1-静默签；3-普通模板
     */
    TemplateType?: number;
    /**
     * 是否是发起人 ,已弃用
     * @deprecated
     */
    IsPromoter?: boolean;
    /**
     * 模板的创建者信息，电子签系统用户ID
     */
    Creator?: string;
    /**
     * 模板创建的时间戳，格式为Unix标准时间戳（秒）
     */
    CreatedOn?: number;
    /**
     * 模板的H5预览链接,有效期5分钟。
  可以通过浏览器打开此链接预览模板，或者嵌入到iframe中预览模板。
  （此功能开放需要联系客户经理）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PreviewUrl?: string;
    /**
     * 第三方应用集成-模板PDF文件链接，有效期5分钟。
  请求参数WithPdfUrl=true时返回
  （此功能开放需要联系客户经理）。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PdfUrl?: string;
    /**
     * 本模板关联的第三方应用平台企业模板ID
     */
    ChannelTemplateId?: string;
    /**
     * 本模板关联的三方应用平台平台企业模板名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelTemplateName?: string;
    /**
     * 0-需要子客企业手动领取平台企业的模板(默认);
  1-平台自动设置子客模板
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelAutoSave?: number;
    /**
     * 模板版本，全数字字符。
  默认为空，初始版本为yyyyMMdd001。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateVersion?: string;
    /**
     * 模板可用状态：
  1启用（默认）
  2停用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Available?: number;
}
/**
 * GetDownloadFlowUrl返回参数结构体
 */
export interface GetDownloadFlowUrlResponse {
    /**
     * 合同（流程）下载地址
     */
    DownLoadUrl?: string;
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
     * 应用的唯一标识。不同的业务系统可以采用不同的AppId，不同AppId下的数据是隔离的。可以由控制台开发者中心-应用集成自主生成。
     */
    AppId: string;
    /**
     * 第三方应用平台自定义，对应第三方平台子客企业的唯一标识。一个第三方平台子客企业主体与子客企业ProxyOrganizationOpenId是一一对应的，不可更改，不可重复使用。（例如，可以使用企业名称的hash值，或者社会统一信用代码的hash值，或者随机hash值，需要第三方应用平台保存），最大64位字符串
     */
    ProxyOrganizationOpenId?: string;
    /**
     * 第三方平台子客企业中的员工/经办人，通过第三方应用平台进入电子签完成实名、且被赋予相关权限后，可以参与到企业资源的管理或签署流程中。
     */
    ProxyOperator?: UserInfo;
    /**
     * 非必需参数，在第三方平台子客企业开通电子签后，会生成唯一的子客应用Id（ProxyAppId）用于代理调用时的鉴权，在子客开通的回调中获取。
     */
    ProxyAppId?: string;
    /**
     * 内部参数，暂未开放使用
     * @deprecated
     */
    ProxyOrganizationId?: string;
}
/**
 * 流程中参与方的信息结构
 */
export interface Recipient {
    /**
     * 签署人唯一标识，在通过模板发起合同的时候对应签署方ID
     */
    RecipientId?: string;
    /**
     * 参与者类型，默认为空。
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
     * 是否需要校验，
  true-是，
  false-否
     */
    RequireValidation?: boolean;
    /**
     * 是否必须填写，
  true-是，
  false-否
     */
    RequireSign?: boolean;
    /**
     * 内部字段，签署类型
     */
    SignType?: number;
    /**
     * 签署顺序：数字越小优先级越高
     */
    RoutingOrder?: number;
    /**
     * 是否是发起方，
  true-是
  false-否
     */
    IsPromoter?: boolean;
}
/**
 * DescribeTemplates返回参数结构体
 */
export interface DescribeTemplatesResponse {
    /**
     * 模板列表
     */
    Templates?: Array<TemplateInfo>;
    /**
     * 查询到的总数
     */
    TotalCount?: number;
    /**
     * 每页多少条数据
     */
    Limit?: number;
    /**
     * 查询结果分页返回，此处指定第几页。页码从0开始，即首页为0。
     */
    Offset?: number;
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
     * 是否回调证书信息
     */
    CertInfoCallback?: boolean;
    /**
     * 是否支持用户自定义签名印章
     */
    UserDefineSeal?: boolean;
    /**
     * 是否需要回调的时候返回印章(签名) 图片的 base64
     */
    SealImgCallback?: boolean;
    /**
     * 回调链接，如果渠道已经配置了，可以不传
     */
    CallbackUrl?: string;
    /**
     * 开通时候的验证方式，取值：WEIXINAPP（微信人脸识别），INSIGHT（慧眼人脸认别），TELECOM（运营商三要素验证）。如果是小程序开通链接，支持传 WEIXINAPP / TELECOM。如果是 H5 开通链接，支持传 INSIGHT / TELECOM。默认值 WEIXINAPP / INSIGHT。
     */
    VerifyChannels?: Array<string>;
    /**
     * 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。 0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次
     */
    LicenseType?: number;
}
/**
 * 第三方应用集成员工角色信息
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
 * ChannelVerifyPdf请求参数结构体
 */
export interface ChannelVerifyPdfRequest {
    /**
     * 流程ID
     */
    FlowId: string;
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent?: Agent;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * CreateChannelFlowEvidenceReport请求参数结构体
 */
export interface CreateChannelFlowEvidenceReportRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填
     */
    Agent: Agent;
    /**
     * 签署流程编号
     */
    FlowId: string;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelCancelUserAutoSignEnableUrl请求参数结构体
 */
export interface ChannelCancelUserAutoSignEnableUrlRequest {
    /**
     * 渠道应用相关信息
     */
    Agent: Agent;
    /**
     * 操作人信息
     */
    Operator: UserInfo;
    /**
     * 自动签场景: E_PRESCRIPTION_AUTO_SIGN 电子处方
     */
    SceneKey: string;
    /**
     * 指定撤销链接的用户信息，包含姓名、证件类型、证件号码。
     */
    UserInfo: UserThreeFactor;
}
/**
 * 签署控件的类型和范围限制条件，用于控制文件发起后签署人拖拽签署区时可使用的控件类型和具体的印章或签名方式。
 */
export interface ComponentLimit {
    /**
     * 控件类型，支持以下类型
  <ul><li>SIGN_SEAL : 印章控件</li>
  <li>SIGN_PAGING_SEAL : 骑缝章控件</li>
  <li>SIGN_LEGAL_PERSON_SEAL : 企业法定代表人控件</li>
  <li>SIGN_SIGNATURE : 用户签名控件</li></ul>
     */
    ComponentType: string;
    /**
     * 签署控件类型的值(可选)，用与限制签署时印章或者签名的选择范围
  
  1.当ComponentType 是 SIGN_SEAL 或者 SIGN_PAGING_SEAL 时可传入企业印章Id（支持多个）
  
  2.当ComponentType 是 SIGN_SIGNATURE 时可传入以下类型（支持多个）
  
  <ul><li>HANDWRITE : 手写签名</li>
  <li>OCR_ESIGN : OCR印章（智慧手写签名）</li>
  <li>ESIGN : 个人印章</li>
  <li>SYSTEM_ESIGN : 系统印章</li></ul>
  
  3.当ComponentType 是 SIGN_LEGAL_PERSON_SEAL 时无需传递此参数。
     */
    ComponentValue?: Array<string>;
}
/**
 * ChannelVerifyPdf返回参数结构体
 */
export interface ChannelVerifyPdfResponse {
    /**
     * 验签结果，1-文件未被篡改，全部签名在腾讯电子签完成； 2-文件未被篡改，部分签名在腾讯电子签完成；3-文件被篡改；4-异常：文件内没有签名域；5-异常：文件签名格式错误
     */
    VerifyResult?: number;
    /**
     * 验签结果详情,内部状态1-验签成功，在电子签签署；2-验签成功，在其他平台签署；3-验签失败；4-pdf文件没有签名域；5-文件签名格式错误
     */
    PdfVerifyResults?: Array<PdfVerifyResult>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
     * 子客企业名称，最大长度64个字符
  注意：
  1、如果您的企业已经在认证授权中或者激活完成，这里修改子客企业名字将不会生效。
  2、该名称需要与Agent.ProxyOrganizationOpenId相匹配。
     */
    ProxyOrganizationName: string;
    /**
     * 子客企业统一社会信用代码，最大长度200个字符
  注意：
  1、如果您的企业已经在认证授权中或者激活完成，这里修改子客企业名字将不会生效。
     */
    UniformSocialCreditCode?: string;
    /**
     * 子客企业经办人的姓名，最大长度50个字符
  注意：
  1、若经办人已经实名，这里修改经办人名字传入将不会生效。
  2、该名称需要和Agent. ProxyOperator.OpenId相匹配
     */
    ProxyOperatorName?: string;
    /**
     * PC控制台登录后进入该参数指定的模块，如果不传递，将默认进入控制台首页。支持的模块包括：
  1、DOCUMENT:合同管理模块，
  2、TEMPLATE:企业模板管理模块，
  3、SEAL:印章管理模块，
  4、OPERATOR:组织管理模块，
  默认将进入企业中心模块
  注意：
  1、如果EndPoint选择"CHANNEL"或"APP"，该参数仅支持传递"SEAL"，进入印章管理模块
  2、该参数仅在企业和员工激活完成，登录控制台场景才生效。
     */
    Module?: string;
    /**
     * 该参数和Module参数配合使用，用于指定模块下的资源Id，指定后链接登录将展示该资源的详情。
  根据Module参数的不同所代表的含义不同。当前支持：
  1、如果Module="SEAL"，ModuleId代表印章Id, 登录链接将直接查看指定印章的详情。
  2、如果Module="TEMPLATE"，ModuleId代表模版Id，登录链接将直接查看指定模版的详情。
  3、如果Module="1、DOCUMENT"，ModuleId代表合同Id，登录链接将直接查看指定合同的详情。
  注意：
  1、该参数仅在企业和员工激活完成，登录控制台场景才生效。
  2、ModuleId需要和Module对应，ModuleId可以通过API或者控制台获取到。
     */
    ModuleId?: string;
    /**
     * 是否展示左侧菜单栏
  "ENABLE": 是，展示
  “DISABLE”: 否，不展示
  默认值为ENABLE
  注意：
  1、该参数仅在企业和员工激活完成，登录控制台场景才生效。
     */
    MenuStatus?: string;
    /**
     * 生成链接的类型：
  "PC"：PC控制台链接
  "CHANNEL"：H5跳转到电子签小程序链接
  "APP"：第三方APP或小程序跳转电子签小程序链接
  默认将生成PC控制台链接
     */
    Endpoint?: string;
    /**
     * 触发自动跳转事件，仅对EndPoint为App类型有效，可选值包括：
  "VERIFIED":企业认证完成/员工认证完成后跳回原App/小程序
     */
    AutoJumpBackEvent?: string;
    /**
     * 可选的企业授权方式:
  1：上传授权书
  2：转法定代表人授权
  4：企业实名认证（信任第三方认证源）（此项仅支持单选）
  未选择信任第三方认证源时，如果是法人进行企业激活，仅支持法人扫脸直接授权，该配置不生效；选择信任第三方认证源时，请先通过“同步企业信息”接口同步信息。
  该参数仅在企业激活场景生效
     */
    AuthorizationTypes?: Array<number | bigint>;
    /**
     * 暂未开放
     * @deprecated
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
     * 机构在平台的编号
     */
    OrganizationId?: string;
    /**
     * 用户渠道
     */
    Channel?: string;
    /**
     * 用户真实的IP
     * @deprecated
     */
    ClientIp?: string;
    /**
     * 机构的代理IP
     * @deprecated
     */
    ProxyIp?: string;
}
/**
 * 签署链接内容
 */
export interface SignUrlInfo {
    /**
     * 签署链接，过期时间为90天
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SignUrl?: string;
    /**
     * 合同过期时间戳，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Deadline?: number;
    /**
     * 当流程为顺序签署此参数有效时，数字越小优先级越高，暂不支持并行签署 可选
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SignOrder?: number;
    /**
     * 签署人编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SignId?: string;
    /**
     * 自定义用户编号
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    CustomUserId?: string;
    /**
     * 用户姓名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 用户手机号码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Mobile?: string;
    /**
     * 签署参与者机构名字
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OrganizationName?: string;
    /**
     * 参与者类型:
  ORGANIZATION 企业经办人
  PERSON 自然人
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ApproverType?: string;
    /**
     * 经办人身份证号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdCardNumber?: string;
    /**
     * 签署链接对应流程Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowId?: string;
    /**
     * 企业经办人 用户在渠道的编号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OpenId?: string;
    /**
     * 合同组签署链接对应的合同组id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowGroupId?: string;
}
/**
 * 通用签署人信息
 */
export interface CommonFlowApprover {
    /**
     * 指定当前签署人为第三方应用集成子客，默认false：当前签署人为第三方应用集成子客，true：当前签署人为saas企业用户
     */
    NotChannelOrganization: boolean;
    /**
     * 签署人类型,目前支持：0-企业签署人，1-个人签署人，3-企业静默签署人
     */
    ApproverType?: number;
    /**
     * 企业id
     */
    OrganizationId?: string;
    /**
     * 企业OpenId，第三方应用集成非静默签子客企业签署人发起合同必传
     */
    OrganizationOpenId?: string;
    /**
     * 企业名称，第三方应用集成非静默签子客企业签署人必传，saas企业签署人必传
     */
    OrganizationName?: string;
    /**
     * 用户id
     */
    UserId?: string;
    /**
     * 用户openId，第三方应用集成非静默签子客企业签署人必传
     */
    OpenId?: string;
    /**
     * 签署人名称，saas企业签署人，个人签署人必传
     */
    ApproverName?: string;
    /**
     * 签署人手机号，saas企业签署人，个人签署人必传
     */
    ApproverMobile?: string;
    /**
     * 签署人Id，使用模板发起是，对应模板配置中的签署人RecipientId
  注意：模板发起时该字段必填
     */
    RecipientId?: string;
    /**
     * 签署前置条件：阅读时长限制，不传默认10s,最大300s，最小3s
     */
    PreReadTime?: number;
    /**
     * 签署前置条件：阅读全文限制
     */
    IsFullText?: boolean;
    /**
     * 通知类型：SMS（短信） NONE（不做通知）, 不传 默认SMS
     */
    NotifyType?: string;
    /**
     * 签署人配置
     */
    ApproverOption?: CommonApproverOption;
    /**
     * 签署控件：文件发起使用
     */
    SignComponents?: Array<Component>;
    /**
     * 签署人查看合同时认证方式, 1-实名查看 2-短信验证码查看(企业签署方不支持该方式) 如果不传默认为1 查看合同的认证方式 Flow层级的优先于approver层级的 （当手写签名方式为OCR_ESIGN时，合同认证方式2无效，因为这种签名方式依赖实名认证）
     */
    ApproverVerifyTypes?: Array<number | bigint>;
    /**
     * 签署人签署合同时的认证方式 1-人脸认证 2-签署密码 3-运营商三要素(默认为1,2)
     */
    ApproverSignTypes?: Array<number | bigint>;
}
/**
 * 合同文件验签单个结果结构体
 */
export interface PdfVerifyResult {
    /**
     * 验签结果。0-签名域未签名；1-验签成功； 3-验签失败；4-未找到签名域：文件内没有签名域；5-签名值格式不正确。
     */
    VerifyResult: number;
    /**
     * 签署平台，如果文件是在腾讯电子签平台签署，则返回腾讯电子签，如果文件不在腾讯电子签平台签署，则返回其他平台。
     */
    SignPlatform: string;
    /**
     * 签署人名称
     */
    SignerName: string;
    /**
     * 签署时间戳，单位秒
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
     * 证书起始时间戳，单位秒
     */
    CertNotBefore: number;
    /**
     * 证书过期时间戳，单位秒
     */
    CertNotAfter: number;
    /**
     * 签名类型
     */
    SignType: number;
    /**
     * 签名域横坐标，单位px
     */
    ComponentPosX: number;
    /**
     * 签名域纵坐标，单位px
     */
    ComponentPosY: number;
    /**
     * 签名域宽度，单位px
     */
    ComponentWidth: number;
    /**
     * 签名域高度，单位px
     */
    ComponentHeight: number;
    /**
     * 签名域所在页码，1～N
     */
    ComponentPage: number;
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
 * ChannelCreateUserAutoSignEnableUrl请求参数结构体
 */
export interface ChannelCreateUserAutoSignEnableUrlRequest {
    /**
     * 渠道应用相关信息
     */
    Agent: Agent;
    /**
     * 自动签场景:
  E_PRESCRIPTION_AUTO_SIGN 电子处方
     */
    SceneKey: string;
    /**
     * 操作人信息
     */
    Operator?: UserInfo;
    /**
     * 自动签开通，签署相关配置
     */
    AutoSignConfig?: AutoSignConfig;
    /**
     * 链接类型，空-默认小程序端链接，H5SIGN-h5端链接
     */
    UrlType?: string;
    /**
     * 通知类型，默认不填为不通知开通方，填写 SMS 为短信通知。
     */
    NotifyType?: string;
    /**
     * 若上方填写为 SMS，则此处为手机号
     */
    NotifyAddress?: string;
    /**
     * 链接的过期时间，格式为Unix时间戳，不能早于当前时间，且最大为30天。如果不传，默认有效期为7天。
     */
    ExpiredTime?: number;
}
/**
 * ChannelCancelMultiFlowSignQRCode请求参数结构体
 */
export interface ChannelCancelMultiFlowSignQRCodeRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId必填。
     */
    Agent: Agent;
    /**
     * 二维码id
     */
    QrCodeId: string;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * 合同组的配置项信息包括：在合同组签署过程中，是否需要对每个子合同进行独立的意愿确认。
 */
export interface FlowGroupOptions {
    /**
     * 发起方企业经办人（即签署人为发起方企业员工）是否需要对子合同进行独立的意愿确认：
  fasle：发起方企业经办人签署时对所有子合同进行统一的意愿确认
  true：发起方企业经办人签署时需要对子合同进行独立的意愿确认
  默认为fasle。
     */
    SelfOrganizationApproverSignEach?: boolean;
    /**
     * 非发起方企业经办人（即：签署人为个人或者不为发起方企业的员工）是否需要对子合同进行独立的意愿确认：
  fasle：非发起方企业经办人签署时对所有子合同进行统一的意愿确认
  true：非发起方企业经办人签署时需要对子合同进行独立的意愿确认
  默认为false。
     */
    OtherApproverSignEach?: boolean;
}
/**
 * ChannelDescribeOrganizationSeals请求参数结构体
 */
export interface ChannelDescribeOrganizationSealsRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 返回最大数量，最大为100
     */
    Limit: number;
    /**
     * 偏移量，默认为0，最大为20000
     */
    Offset?: number;
    /**
     * 查询信息类型，为1时返回授权用户，为其他值时不返回
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
}
/**
 * DescribeUsage请求参数结构体
 */
export interface DescribeUsageRequest {
    /**
     * 应用信息，此接口Agent.AppId必填
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
  不汇总：返回在统计区间内第三方平台下所有企业的每日明细，即每个企业N条数据，N为统计天数；
  汇总：返回在统计区间内第三方平台下所有企业的汇总后数据，即每个企业一条数据；
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
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * DescribeExtendedServiceAuthInfo请求参数结构体
 */
export interface DescribeExtendedServiceAuthInfoRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填
  
  注: 此接口 参数Agent. ProxyOperator.OpenId 需要传递超管或者法人的OpenId
  
     */
    Agent: Agent;
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
  DYNAMIC_TABLE - 传入json格式的表格内容，具体见数据结构FlowInfo
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
    /**
     * 是否锁定模板控件值，锁定后无法修改（用于嵌入式发起合同），true-锁定，false-不锁定
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LockComponentValue?: boolean;
}
/**
 * 此结构体 (FlowInfo) 用于描述签署流程信息。

【数据表格传参说明】
当模板的 ComponentType='DYNAMIC_TABLE'时（ 第三方应用集成或集成版），FormField.ComponentValue需要传递json格式的字符串参数，用于确定表头&填充数据表格（支持内容的单元格合并）
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

| 名称                | 类型    | 描述                                              |
| ------------------- | ------- | ------------------------------------------------- |
| widthPercent   | Integer | 表头单元格列占总表头的比例，例如1：30表示 此列占表头的30%，不填写时列宽度平均拆分；例如2：总2列，某一列填写40，剩余列可以为空，按照60计算。；例如3：总3列，某一列填写30，剩余2列可以为空，分别为(100-30)/2=35                    |
| content    | String  | 表头单元格内容，字数不超过100                         |
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
     *  第三方应用平台的业务信息，最大长度1000个字符。
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
    /**
     * 给关注人发送短信通知的类型，0-合同发起时通知 1-签署完成后通知
     */
    CcNotifyType?: number;
    /**
     * 个人自动签场景。发起自动签署时，需设置对应自动签署场景，目前仅支持场景：处方单-E_PRESCRIPTION_AUTO_SIGN
     */
    AutoSignScene?: string;
}
/**
 * 接口调用者信息
 */
export interface UserInfo {
    /**
     * 第三方应用平台自定义，对应第三方平台子客企业员的唯一标识。一个OpenId在一个子客企业内唯一对应一个真实员工，不可在其他子客企业内重复使用。（例如，可以使用经办人企业名+员工身份证的hash值，需要第三方应用平台保存），最大64位字符串
     */
    OpenId?: string;
    /**
     * 内部参数，暂未开放使用
     * @deprecated
     */
    Channel?: string;
    /**
     * 内部参数，暂未开放使用
     * @deprecated
     */
    CustomUserId?: string;
    /**
     * 内部参数，暂未开放使用
     * @deprecated
     */
    ClientIp?: string;
    /**
     * 内部参数，暂未开放使用
     * @deprecated
     */
    ProxyIp?: string;
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
 * ChannelCreateBoundFlows返回参数结构体
 */
export interface ChannelCreateBoundFlowsResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 企业员工信息
 */
export interface Staff {
    /**
     * 员工在电子签平台的用户ID
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
     * 员工在第三方应用平台的用户ID
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
     * 员工创建时间戳，单位秒
     */
    CreatedOn: number;
    /**
     * 员工实名时间戳，单位秒
     */
    VerifiedOn: number;
    /**
     * 员工是否离职：0-未离职，1-离职
     */
    QuiteJob: number;
}
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
 * ChannelCreateBoundFlows请求参数结构体
 */
export interface ChannelCreateBoundFlowsRequest {
    /**
     * 应用信息
  此接口Agent.AppId、Agent.ProxyOrganizationOpenId 和 Agent. ProxyOperator.OpenId 必填
     */
    Agent: Agent;
    /**
     * 领取的合同id列表
     */
    FlowIds?: Array<string>;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelDescribeEmployees请求参数结构体
 */
export interface ChannelDescribeEmployeesRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 指定每页多少条数据，单页最大20
     */
    Limit: number;
    /**
     * 查询过滤实名用户，Key为Status，Values为["IsVerified"]
  根据第三方系统openId过滤查询员工时,Key为StaffOpenId,Values为["OpenId","OpenId",...]
  查询离职员工时，Key为Status，Values为["QuiteJob"]
     */
    Filters?: Array<Filter>;
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0,最大为20000
     */
    Offset?: number;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * 授权用户
 */
export interface AuthorizedUser {
    /**
     * 第三方应用平台的用户openid
     */
    OpenId: string;
}
/**
 * ChannelDeleteRoleUsers返回参数结构体
 */
export interface ChannelDeleteRoleUsersResponse {
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
 * SyncProxyOrganizationOperators请求参数结构体
 */
export interface SyncProxyOrganizationOperatorsRequest {
    /**
     * 应用相关信息。 此接口Agent.AppId 和 Agent.ProxyOrganizationOpenId必填。
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
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * CreateSignUrls请求参数结构体
 */
export interface CreateSignUrlsRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 流程(合同)的编号列表，最多支持100个。(备注：该参数和合同组编号必须二选一)
     */
    FlowIds?: Array<string>;
    /**
     * 合同组编号(备注：该参数和合同(流程)编号数组必须二选一)
     */
    FlowGroupId?: string;
    /**
     * 签署链接类型,可以设置的参数如下
  
  - WEIXINAPP:短链直接跳小程序 (默认类型)
  - CHANNEL:跳转H5页面
  - APP:第三方APP或小程序跳转电子签小程序
  - LONGURL2WEIXINAPP:长链接跳转小程序
     */
    Endpoint?: string;
    /**
     * 签署链接生成类型，可以选择的类型如下
  
  - ALL：全部签署方签署链接，此时不会给自动签署的签署方创建签署链接(默认类型)
  - CHANNEL：第三方平台子客企业企业
  - NOT_CHANNEL：非第三方平台子客企业企业
  - PERSON：个人
  - FOLLOWER：关注方，目前是合同抄送方
     */
    GenerateType?: string;
    /**
     * 非第三方平台子客企业参与方的企业名称，GenerateType为"NOT_CHANNEL"时必填
     */
    OrganizationName?: string;
    /**
     * 参与人姓名
  GenerateType为"PERSON"(即个人签署方)时必填
     */
    Name?: string;
    /**
     * 参与人手机号
  GenerateType为"PERSON"或"FOLLOWER"时必填
     */
    Mobile?: string;
    /**
     * 第三方平台子客企业的企业OpenId，GenerateType为"CHANNEL"时必填
     */
    OrganizationOpenId?: string;
    /**
     * 第三方平台子客企业参与人OpenId，GenerateType为"CHANNEL"时可用，指定到具体参与人, 仅展示已经实名的经办人信息
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
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
    /**
     * 生成的签署链接在签署过程隐藏的按钮列表, 可以设置隐藏的按钮列表如下
  
  - 0:合同签署页面更多操作按钮
  - 1:合同签署页面更多操作的拒绝签署按钮
  - 2:合同签署页面更多操作的转他人处理按钮
  - 3:签署成功页的查看详情按钮
     */
    Hides?: Array<number | bigint>;
}
/**
 * ChannelCreateMultiFlowSignQRCode请求参数结构体
 */
export interface ChannelCreateMultiFlowSignQRCodeRequest {
    /**
     * 应用相关信息。
  此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
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
     * 最大可发起签署流程份数
  <br/>默认5份
  <br/>备注：发起签署流程数量超过此上限后，二维码自动失效。
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
     * 指定的签署二维码签署人
  <br/>指定后，只允许知道的人操作和签署
     */
    Restrictions?: Array<ApproverRestriction>;
    /**
     * 已废弃，回调配置统一使用企业应用管理-应用集成-第三方应用中的配置
  <br/> 通过一码多扫二维码发起的合同，回调消息可参考文档 https://qian.tencent.com/developers/partner/callback_types_contracts_sign
  <br/> 用户通过签署二维码发起合同时，因企业额度不足导致失败 会触发签署二维码相关回调,具体参考文档 https://qian.tencent.com/developers/partner/callback_types_commons#%E7%AD%BE%E7%BD%B2%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%9B%B8%E5%85%B3%E5%9B%9E%E8%B0%83
     * @deprecated
     */
    CallbackUrl?: string;
    /**
     * 限制二维码用户条件（已弃用）
     * @deprecated
     */
    ApproverRestrictions?: ApproverRestriction;
    /**
     * 暂未开放
     * @deprecated
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
 * 创建签署流程签署人入参。

其中签署方FlowApproverInfo需要传递的参数
非单C、单B、B2C合同，ApproverType、RecipientId（模板发起合同时）必传，建议都传。其他身份标识
1-个人：Name、Mobile必传
2-第三方平台子客企业指定经办人：OpenId必传，OrgName必传、OrgOpenId必传；
3-第三方平台子客企业不指定经办人：OrgName必传、OrgOpenId必传；
4-非第三方平台子客企业：Name、Mobile必传，OrgName必传，且NotChannelOrganization=True。

RecipientId参数：
从DescribeTemplates接口中，可以得到模板下的签署方Recipient列表，根据模板自定义的Rolename在此结构体中确定其RecipientId。
 */
export interface FlowApproverInfo {
    /**
     * 签署人姓名，最大长度50个字符
     */
    Name?: string;
    /**
     * 签署人的证件类型
  1.ID_CARD 居民身份证
  2.HONGKONG_MACAO_AND_TAIWAN 港澳台居民居住证
  3.HONGKONG_AND_MACAO 港澳居民来往内地通行证
  4.OTHER_CARD_TYPE 其他（需要使用该类型请先联系运营经理）
     */
    IdCardType?: string;
    /**
     * 签署人证件号（长度不超过18位）
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
     * 指定签署人非第三方平台子客企业下员工，在ApproverType为ORGANIZATION时指定。
  默认为false，即签署人位于同一个第三方平台应用号下；默认为false，即签署人位于同一个第三方应用号下；
     */
    NotChannelOrganization?: boolean;
    /**
     * 用户侧第三方id，最大长度64个字符
  当签署方为同一第三方平台下的员工时，该字段若不指定，则发起【待领取】的流程
     */
    OpenId?: string;
    /**
     * 企业签署方在同一第三方平台应用下的其他合作企业OpenId，签署方为非发起方企业场景下必传，最大长度64个字符；
     */
    OrganizationOpenId?: string;
    /**
     * 签署人类型
  PERSON-个人/自然人；
  PERSON_AUTO_SIGN-个人自动签署，适用于个人自动签场景
  注: 个人自动签场景为白名单功能, 使用前请联系对接的客户经理沟通。
  ORGANIZATION-企业（企业签署方或模板发起时的企业静默签）；
  ENTERPRISESERVER-企业静默签（文件发起时的企业静默签字）。
     */
    ApproverType?: string;
    /**
     * 签署流程签署人在模板中对应的签署人Id；在非单方签署、以及非B2C签署的场景下必传，用于指定当前签署方在签署流程中的位置；
     */
    RecipientId?: string;
    /**
     * 签署截止时间戳，默认一年
     */
    Deadline?: number;
    /**
     * 签署完回调url，最大长度1000个字符
     * @deprecated
     */
    CallbackUrl?: string;
    /**
     * 使用PDF文件直接发起合同时，签署人指定的签署控件；<br/>使用模板发起合同时，指定本企业印章签署控件的印章ID: <br/>通过ComponentId或ComponenetName指定签署控件，ComponentValue为印章ID。
     */
    SignComponents?: Array<Component>;
    /**
     * 签署方控件类型为 SIGN_SIGNATURE时，可以指定签署方签名方式
      HANDWRITE – 手写签名
      OCR_ESIGN -- AI智能识别手写签名
      ESIGN -- 个人印章类型
      SYSTEM_ESIGN -- 系统签名（该类型可以在用户签署时根据用户姓名一键生成一个签名来进行签署）
     */
    ComponentLimitType?: Array<string>;
    /**
     * 合同的强制预览时间：3~300s，未指定则按合同页数计算
     */
    PreReadTime?: number;
    /**
     * 签署完前端跳转的url，此字段的用法场景请联系客户经理确认
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
    /**
     * 签署人查看合同时认证方式, 1-实名查看 2-短信验证码查看(企业签署方不支持该方式) 如果不传默认为1
  查看合同的认证方式 Flow层级的优先于approver层级的
  （当手写签名方式为OCR_ESIGN时，合同认证方式2无效，因为这种签名方式依赖实名认证）
     */
    ApproverVerifyTypes?: Array<number | bigint>;
    /**
     * 签署人签署合同时的认证方式
  1-人脸认证 2-签署密码 3-运营商三要素(默认为1,2)
     */
    ApproverSignTypes?: Array<number | bigint>;
    /**
     * 签署ID
  - 发起流程时系统自动补充
  - 创建签署链接时，可以通过查询详情接口获得签署人的SignId，然后可传入此值为该签署人创建签署链接，无需再传姓名、手机号、证件号等其他信息
     */
    SignId?: string;
    /**
     * SMS: 短信(需确保“电子签短信通知签署方”功能是开启状态才能生效); NONE: 不发信息
  默认为SMS(签署方为子客时该字段不生效)
     */
    NotifyType?: string;
    /**
     * [通过文件创建签署流程](https://qian.tencent.com/developers/partnerApis/startFlows/ChannelCreateFlowByFiles)时,如果设置了外层参数SignBeanTag=1(允许签署过程中添加签署控件),则可通过此参数明确规定合同所使用的签署控件类型（骑缝章、普通章法人章等）和具体的印章（印章ID）或签名方式。
  
  注：`限制印章控件或骑缝章控件情况下,仅本企业签署方可以指定具体印章（通过传递ComponentValue,支持多个），他方企业或个人只支持限制控件类型。`
     */
    AddSignComponentsLimits?: Array<ComponentLimit>;
}
/**
 * ChannelCreateUserAutoSignEnableUrl返回参数结构体
 */
export interface ChannelCreateUserAutoSignEnableUrlResponse {
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
     * base64格式跳转二维码
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
 * ChannelGetTaskResultApi请求参数结构体
 */
export interface ChannelGetTaskResultApiRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 均必填。
     */
    Agent: Agent;
    /**
     * 任务Id，通过ChannelCreateConvertTaskApi接口获得
     */
    TaskId: string;
    /**
     * 操作者的信息，不用传
     * @deprecated
     */
    Operator?: UserInfo;
    /**
     * 暂未开放
     * @deprecated
     */
    Organization?: OrganizationInfo;
}
/**
 * ChannelCreatePreparedPersonalEsign请求参数结构体
 */
export interface ChannelCreatePreparedPersonalEsignRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 和 Agent.ProxyAppId 必填。
     */
    Agent: Agent;
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
     * 印章图片的base64，最大不超过 8M
     */
    SealImage: string;
    /**
     * 操作者信息
     */
    Operator?: UserInfo;
    /**
     * 身份证件类型
     */
    IdCardType?: string;
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
     * 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。 0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次 1-不绑定，发起合同时将按标准合同套餐进行扣减
     */
    LicenseType?: number;
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
     * 合同(流程)的状态, 状态如下
  
  INIT 合同创建
  PART 合同签署中
  REJECT 合同拒签
  ALL 合同签署完成
  DEADLINE 合同流签(合同过期)
  CANCEL 合同撤回
  RELIEVED 解除协议（已解除）
   
     */
    FlowStatus: string;
    /**
     * 合同(流程)的信息
     */
    FlowMessage: string;
    /**
     * 合同(流程)的创建时间戳，单位秒
     */
    CreateOn: number;
    /**
     * 合同(流程)的签署截止时间戳，单位秒
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
    /**
     * 合同(流程)关注方信息列表
     */
    CcInfos?: Array<FlowApproverDetail>;
    /**
     * 是否需要发起前审批，当NeedCreateReview为true，表明当前流程是需要发起前审核的合同，可能无法进行查看，签署操作，需要等审核完成后，才可以继续后续流程
     */
    NeedCreateReview?: boolean;
}
/**
 * CreateFlowsByTemplates返回参数结构体
 */
export interface CreateFlowsByTemplatesResponse {
    /**
     * 多个合同ID
     */
    FlowIds?: Array<string>;
    /**
     * 第三方应用平台的业务信息, 与创建合同的FlowInfos数组中的CustomerData一一对应
     */
    CustomerData?: Array<string>;
    /**
     * 创建消息，对应多个合同ID，
  成功为“”,创建失败则对应失败消息
     */
    ErrorMessages?: Array<string>;
    /**
     * 预览模式下返回的预览文件url数组
     */
    PreviewUrls?: Array<string>;
    /**
     * 复杂文档合成任务（如，包含动态表格的预览任务）的任务信息数组；
  如果文档需要异步合成，此字段会返回该异步任务的任务信息，后续可以通过ChannelGetTaskResultApi接口查询任务详情；
     */
    TaskInfos?: Array<TaskInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChannelFlowEvidenceReport请求参数结构体
 */
export interface DescribeChannelFlowEvidenceReportRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填
     */
    Agent: Agent;
    /**
     * 出证报告编号
     */
    ReportId: string;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
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
    Status?: number;
    /**
     * 同步失败经办人及其失败原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailedList?: Array<SyncFailReason>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 绑定失败的用户角色信息
 */
export interface FailedCreateRoleData {
    /**
     * 用户userId
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserId?: string;
    /**
     * 角色RoleId列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RoleIds?: Array<string>;
}
/**
 * ChannelDescribeUserAutoSignStatus请求参数结构体
 */
export interface ChannelDescribeUserAutoSignStatusRequest {
    /**
     * 渠道应用相关信息
     */
    Agent: Agent;
    /**
     * 自动签场景:
  E_PRESCRIPTION_AUTO_SIGN 电子处方
     */
    SceneKey: string;
    /**
     * 查询开启状态的用户信息
     */
    UserInfo: UserThreeFactor;
    /**
     * 操作人信息
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
 * 企业扩展服务授权信息
 */
export interface ExtentServiceAuthInfo {
    /**
     * 扩展服务类型
    AUTO_SIGN             企业静默签（自动签署）
    OVERSEA_SIGN          企业与港澳台居民*签署合同
    MOBILE_CHECK_APPROVER 使用手机号验证签署方身份
    PAGING_SEAL           骑缝章
    DOWNLOAD_FLOW         授权平台企业下载合同
     */
    Type?: string;
    /**
     * 扩展服务名称
     */
    Name?: string;
    /**
     * 服务状态
  ENABLE 开启
  DISABLE 关闭
     */
    Status?: string;
    /**
     * 最近操作人第三方应用平台的用户openid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperatorOpenId?: string;
    /**
     * 最近操作时间戳，单位秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OperateOn?: number;
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
     * 图片填充控件下载链接，如果是图片填充控件时，这里返回图片的下载链接。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageUrl?: string;
}
/**
 * CreateSignUrls返回参数结构体
 */
export interface CreateSignUrlsResponse {
    /**
     * 签署参与者签署H5链接信息数组
     */
    SignUrlInfos?: Array<SignUrlInfo>;
    /**
     * 生成失败时的错误信息，成功返回”“，顺序和出参SignUrlInfos保持一致
     */
    ErrorMessages?: Array<string>;
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
     * 上传成功文件数量
     */
    TotalCount?: number;
    /**
     * 文件id数组，有效期一个小时；有效期内此文件id可以反复使用
     */
    FileIds?: Array<string>;
    /**
     * 文件Url
     */
    FileUrls?: Array<string>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelCreateBatchCancelFlowUrl请求参数结构体
 */
export interface ChannelCreateBatchCancelFlowUrlRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 签署流程Id数组
     */
    FlowIds: Array<string>;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * 指定签署人限制项
 */
export interface ApproverRestriction {
    /**
     * 指定签署人姓名
     */
    Name?: string;
    /**
     * 指定签署人手机号，11位数字
     */
    Mobile?: string;
    /**
     * 指定签署人证件类型，ID_CARD-身份证，HONGKONG_AND_MACAO-港澳居民来往内地通行证，HONGKONG_MACAO_AND_TAIWAN-港澳台居民居住证
     */
    IdCardType?: string;
    /**
     * 指定签署人证件号码，其中字母大写
     */
    IdCardNumber?: string;
}
/**
 * PrepareFlows请求参数结构体
 */
export interface PrepareFlowsRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
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
     * 暂未开放
     * @deprecated
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
    FlowId?: string;
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
 * ChannelDisableUserAutoSign请求参数结构体
 */
export interface ChannelDisableUserAutoSignRequest {
    /**
     * 渠道应用相关信息
     */
    Agent: Agent;
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
     * 操作人信息
     */
    Operator?: UserInfo;
}
/**
 * ChannelDescribeOrganizationSeals返回参数结构体
 */
export interface ChannelDescribeOrganizationSealsResponse {
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
 * CreateSealByImage返回参数结构体
 */
export interface CreateSealByImageResponse {
    /**
     * 电子印章ID，为32位字符串。
  建议开发者保留此印章ID，后续指定签署区印章或者操作印章需此印章ID。
  可登录腾讯电子签控制台，在 "印章"->"印章中心"选择查看的印章，在"印章详情" 中查看某个印章的SealId(在页面中展示为印章ID)。
     */
    SealId?: string;
    /**
     * 电子印章预览链接地址，地址默认失效时间为24小时。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
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
 * ChannelDescribeRoles返回参数结构体
 */
export interface ChannelDescribeRolesResponse {
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默认从第一页返回。页码从 0 开始，即首页为 0，最大2000
     */
    Offset?: number;
    /**
     * 指定每页多少条数据，单页最大200
     */
    Limit?: number;
    /**
     * 查询角色的总数量
     */
    TotalCount?: number;
    /**
     * 角色信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelRoles?: Array<ChannelRole>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelCreateReleaseFlow请求参数结构体
 */
export interface ChannelCreateReleaseFlowRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 待解除的流程编号（即原流程的编号）
     */
    NeedRelievedFlowId: string;
    /**
     * 解除协议内容
     */
    ReliveInfo: RelieveInfo;
    /**
     * 非必须，解除协议的本企业签署人列表，默认使用原流程的签署人列表；当解除协议的签署人与原流程的签署人不能相同时（例如原流程签署人离职了），需要指定本企业的其他签署人来替换原流程中的原签署人，注意需要指明ApproverNumber来代表需要替换哪一个签署人，已转发的签署人不包含在内，解除协议的签署人数量不能多于原流程的签署人数量
     */
    ReleasedApprovers?: Array<ReleasedApprover>;
    /**
     * 签署完回调url，最大长度1000个字符
     */
    CallbackUrl?: string;
    /**
     * 暂未开放
     * @deprecated
     */
    Organization?: OrganizationInfo;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
    /**
     * 签署流程的签署截止时间。 值为unix时间戳,精确到秒,不传默认为当前时间七天后
     */
    Deadline?: number;
}
/**
 * ChannelDescribeFlowComponents返回参数结构体
 */
export interface ChannelDescribeFlowComponentsResponse {
    /**
     * 流程关联的填写控件信息，控件会按照参与方进行分类。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecipientComponentInfos?: Array<RecipientComponentInfo>;
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
    FlowGroupId?: string;
    /**
     * 子合同ID列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowIds?: Array<string>;
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
 * 签署人个性化能力信息
 */
export interface ApproverOption {
    /**
     * 是否隐藏一键签署 默认false-不隐藏true-隐藏
     */
    HideOneKeySign?: boolean;
}
/**
 * 合作企业经办人列表信息
 */
export interface ProxyOrganizationOperator {
    /**
     * 对应Agent-ProxyOperator-OpenId。第三方应用平台自定义，对子客企业员的唯一标识。一个OpenId在一个子客企业内唯一对应一个真实员工，不可在其他子客企业内重复使用。（例如，可以使用经办人企业名+员工身份证的hash值，需要第三方应用平台保存），最大64位字符串
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
    /**
     * 默认角色，值为以下三个对应的英文：
  业务管理员：admin
  经办人：channel-normal-operator
  业务员：channel-sales-man
     */
    DefaultRole?: string;
}
/**
 * ModifyExtendedService返回参数结构体
 */
export interface ModifyExtendedServiceResponse {
    /**
     * 操作跳转链接，有效期24小时
  若操作时没有返回跳转链接，表示无需跳转操作，此时会直接开通/关闭服务。
  
  当操作类型是 OPEN 且 扩展服务类型是  AUTO_SIGN 或 DOWNLOAD_FLOW 或者 OVERSEA_SIGN 时返回操作链接，
  返回的链接需要平台方自行触达超管或法人，超管或法人点击链接完成服务开通操作。
     */
    OperateUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelCreateUserRoles请求参数结构体
 */
export interface ChannelCreateUserRolesRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 绑定角色的角色id列表，最多 100 个
     */
    RoleIds: Array<string>;
    /**
     * 电子签用户ID列表，与OpenIds参数二选一,优先UserIds参数，最多 100 个
     */
    UserIds?: Array<string>;
    /**
     * 客户系统用户ID列表，与UserIds参数二选一,优先UserIds参数，最多 100 个
     */
    OpenIds?: Array<string>;
    /**
     * 操作者信息
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelGetTaskResultApi返回参数结构体
 */
export interface ChannelGetTaskResultApiResponse {
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
     * 资源Id，也是FileId，用于文件发起使用
     */
    ResourceId?: string;
    /**
     * 预览文件Url，有效期30分钟
  当前字段返回为空，发起的时候，将ResourceId 放入发起即可
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    PreviewUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelCreateOrganizationModifyQrCode返回参数结构体
 */
export interface ChannelCreateOrganizationModifyQrCodeResponse {
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
 * ChannelDeleteSealPolicies返回参数结构体
 */
export interface ChannelDeleteSealPoliciesResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelCreateWebThemeConfig返回参数结构体
 */
export interface ChannelCreateWebThemeConfigResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetDownloadFlowUrl请求参数结构体
 */
export interface GetDownloadFlowUrlRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 文件夹数组，签署流程总数不能超过50个，一个文件夹下，不能超过20个签署流程
     */
    DownLoadFlows?: Array<DownloadFlowInfo>;
    /**
     * 操作者的信息，不用传
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelCreateEmbedWebUrl返回参数结构体
 */
export interface ChannelCreateEmbedWebUrlResponse {
    /**
     * 嵌入的web链接
     */
    WebUrl?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelBatchCancelFlows请求参数结构体
 */
export interface ChannelBatchCancelFlowsRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 签署流程Id数组，最多100个，超过100不处理
     */
    FlowIds: Array<string>;
    /**
     * 撤销理由,不超过200个字符
     */
    CancelMessage?: string;
    /**
     * 撤销理由自定义格式；选项：
  
  - 0 默认格式
  - 1 只保留身份信息：展示为【发起方】
  - 2 保留身份信息+企业名称：展示为【发起方xxx公司】
  - 3 保留身份信息+企业名称+经办人名称：展示为【发起方xxxx公司-经办人姓名】
     */
    CancelMessageFormat?: number;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelUpdateSealStatus请求参数结构体
 */
export interface ChannelUpdateSealStatusRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 操作的印章状态，DISABLE-停用印章
     */
    Status: string;
    /**
     * 印章ID
     */
    SealId: string;
    /**
     * 更新印章状态原因说明
     */
    Reason?: string;
    /**
     * 操作者的信息
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * ChannelCreateFlowGroupByTemplates请求参数结构体
 */
export interface ChannelCreateFlowGroupByTemplatesRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 均必填。
     */
    Agent: Agent;
    /**
     * 每个子合同的发起所需的信息，数量限制2-50（合同组暂不支持抄送功能）
     */
    FlowInfos: Array<FlowInfo>;
    /**
     * 合同组名称，长度不超过200个字符
     */
    FlowGroupName: string;
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
 * ChannelCancelFlow请求参数结构体
 */
export interface ChannelCancelFlowRequest {
    /**
     * 签署流程编号
     */
    FlowId: string;
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent?: Agent;
    /**
     * 撤回原因，最大不超过200字符
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
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * DescribeTemplates请求参数结构体
 */
export interface DescribeTemplatesRequest {
    /**
     * 应用相关信息。
  此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId必填。
     */
    Agent: Agent;
    /**
     * 模板唯一标识，查询单个模板时使用
     */
    TemplateId?: string;
    /**
     * 查询内容：
  0-模板列表及详情（默认），
  1-仅模板列表
     */
    ContentType?: number;
    /**
     * 指定每页多少条数据，如果不传默认为20，单页最大100。
     */
    Limit?: number;
    /**
     * 查询结果分页返回，此处指定第几页，如果不传默从第一页返回。页码从0开始，即首页为0。
     */
    Offset?: number;
    /**
     * 是否返回所有组件信息。
  默认false，只返回发起方控件；
  true，返回所有签署方控件
     */
    QueryAllComponents?: boolean;
    /**
     * 模糊搜索模板名称，最大长度200
     */
    TemplateName?: string;
    /**
     * 是否获取模板预览链接，
  默认false-不获取
  true-获取
     */
    WithPreviewUrl?: boolean;
    /**
     * 是否获取模板的PDF文件链接。
  默认false-不获取
  true-获取
  请联系客户经理开白后使用。
     */
    WithPdfUrl?: boolean;
    /**
     * 对应第三方应用平台企业的模板ID
     */
    ChannelTemplateId?: string;
    /**
     * 操作者的信息
     * @deprecated
     */
    Operator?: UserInfo;
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
 * ChannelCreateSealPolicy请求参数结构体
 */
export interface ChannelCreateSealPolicyRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 指定印章ID
     */
    SealId: string;
    /**
     * 指定待授权的用户ID数组,电子签的用户ID
  可以填写OpenId，系统会通过组织+渠道+OpenId查询得到UserId进行授权。
     */
    UserIds: Array<string>;
    /**
     * 操作人（用户）信息，不用传
     * @deprecated
     */
    Operator?: UserInfo;
    /**
     * 企业机构信息，不用传
     * @deprecated
     */
    Organization?: OrganizationInfo;
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
     * 电子印章授权人，电子签的UserId
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
     * 印章类型，OFFICIAL-企业公章，CONTRACT-合同专用章，LEGAL_PERSON_SEAL-法人章
     */
    SealType: string;
    /**
     * 用印申请是否为永久授权
     */
    IsAllTime: boolean;
    /**
     * 授权人列表
     */
    AuthorizedUsers: Array<AuthorizedUser>;
}
/**
 * CreateFlowsByTemplates请求参数结构体
 */
export interface CreateFlowsByTemplatesRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 均必填。
     */
    Agent: Agent;
    /**
     * 要创建的合同信息列表，最多支持一次创建20个合同
     */
    FlowInfos: Array<FlowInfo>;
    /**
     * 是否为预览模式；默认为false，即非预览模式，此时发起合同并返回FlowIds；若为预览模式，不会发起合同，会返回PreviewUrls；
  预览链接有效期300秒；
  同时，如果预览的文件中指定了动态表格控件，需要进行异步合成；此时此接口返回的是合成前的文档预览链接，而合成完成后的文档预览链接会通过：回调通知的方式、或使用返回的TaskInfo中的TaskId通过ChannelGetTaskResultApi接口查询；
     */
    NeedPreview?: boolean;
    /**
     * 预览链接类型 默认:0-文件流, 1- H5链接 注意:此参数在NeedPreview 为true 时有效,
     */
    PreviewType?: number;
    /**
     * 操作者的信息，不用传
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * UploadFiles请求参数结构体
 */
export interface UploadFilesRequest {
    /**
     * 应用相关信息，若是第三方应用集成调用 若是第三方应用集成调用,Agent.AppId 和 Agent.ProxyOrganizationOpenId 必填
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
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * DescribeUsage返回参数结构体
 */
export interface DescribeUsageResponse {
    /**
     * 用量明细条数
     */
    Total?: number;
    /**
     * 用量明细
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Details?: Array<UsageDetail>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用量明细
 */
export interface UsageDetail {
    /**
     * 子客企业唯一标识
     */
    ProxyOrganizationOpenId: string;
    /**
     * 子客企业名
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
    /**
     * 消耗渠道
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowChannel: string;
}
/**
 * ChannelCreateBatchCancelFlowUrl返回参数结构体
 */
export interface ChannelCreateBatchCancelFlowUrlResponse {
    /**
     * 批量撤销url
     */
    BatchCancelFlowUrl?: string;
    /**
     * 签署流程批量撤销失败原因
     */
    FailMessages?: Array<string>;
    /**
     * 签署撤销url过期时间-年月日-时分秒
     */
    UrlExpireOn?: string;
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
     * 应用相关信息。
  此接口Agent.AppId必填。
     */
    Agent: Agent;
    /**
     * 操作类型，
  查询:"SELECT"，
  删除:"DELETE"，
  更新:"UPDATE"
     */
    OperateType: string;
    /**
     * 第三方应用平台模板库模板唯一标识
     */
    TemplateId: string;
    /**
     * 合作企业方第三方机构唯一标识数据.
  支持多个， 用","进行分隔
     */
    ProxyOrganizationOpenIds?: string;
    /**
     * 模板可见性,
  全部可见-"all",
   部分可见-"part"
     */
    AuthTag?: string;
    /**
     * 当OperateType=UPDATE时，可以通过设置此字段对模板启停用状态进行操作。
  若此字段值为0，则不会修改模板Available，
  1为启用模板，
  2为停用模板。
  启用后模板可以正常领取。停用后，推送方式为【自动推送】的模板则无法被子客使用，推送方式为【手动领取】的模板则无法出现被模板库被子客领用。如果Available更新失败，会直接返回错误。
     */
    Available?: number;
    /**
     * 暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * CreateChannelFlowEvidenceReport返回参数结构体
 */
export interface CreateChannelFlowEvidenceReportResponse {
    /**
     * 出证报告 ID，可用户DescribeChannelFlowEvidenceReport接口查询出证PDF的下载地址
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportId?: string;
    /**
     * 出征任务的执行状态,状态列表如下
  
  - EvidenceStatusExecuting : 出征任务正在执行中
  - EvidenceStatusSuccess : 出征任务执行成功
  - EvidenceStatusFailed : 出征任务执行失败
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
 * 同步经办人失败原因
 */
export interface SyncFailReason {
    /**
     * 对应Agent-ProxyOperator-OpenId。第三方应用平台自定义，对子客企业员的唯一标识。一个OpenId在一个子客企业内唯一对应一个真实员工，不可在其他子客企业内重复使用。（例如，可以使用经办人企业名+员工身份证的hash值，需要第三方应用平台保存），最大64位字符串
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
 * ChannelDescribeEmployees返回参数结构体
 */
export interface ChannelDescribeEmployeesResponse {
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
 * ChannelCreateReleaseFlow返回参数结构体
 */
export interface ChannelCreateReleaseFlowResponse {
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
 * DescribeChannelFlowEvidenceReport返回参数结构体
 */
export interface DescribeChannelFlowEvidenceReportResponse {
    /**
     * 出证报告下载 URL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReportUrl?: string;
    /**
     * 出征任务的执行状态,状态列表如下
  
  - EvidenceStatusExecuting : 出征任务正在执行中
  - EvidenceStatusSuccess : 出征任务执行成功
  - EvidenceStatusFailed : 出征任务执行失败
     */
    Status?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSealByImage请求参数结构体
 */
export interface CreateSealByImageRequest {
    /**
     * 代理企业和员工的信息。
  在集团企业代理子企业操作的场景中，需设置此参数。在此情境下，ProxyOrganizationId（子企业的组织ID）为必填项。
     */
    Agent: Agent;
    /**
     * 印章名称，最大长度不超过50字符
     */
    SealName: string;
    /**
     * 印章图片base64，大小不超过10M（原始图片不超过7.6M）
     */
    SealImage?: string;
    /**
     * 操作者的信息
     * @deprecated
     */
    Operator?: UserInfo;
    /**
     * 本接口支持上传图片印章及系统直接生成印章； 如果要使用系统生成印章，此值传：SealGenerateSourceSystem； 如果要使用图片上传请传字段 SealImage
     */
    GenerateSource?: string;
    /**
     * 电子印章类型：
  <ul><li>OFFICIAL-公章</li>
  <li>CONTRACT-合同专用章;</li>
  <li>FINANCE-合财务专用章;</li>
  <li>PERSONNEL-人事专用章
  </li>
  <li>默认：OFFICIAL</li>
  </ul>
     */
    SealType?: string;
    /**
     * 企业印章横向文字，最多可填15个汉字（若超过印章最大宽度，优先压缩字间距，其次缩小字号
     */
    SealHorizontalText?: string;
    /**
     * 印章样式:
  
  <ul><li>cycle:圆形印章</li>
  <li>ellipse:椭圆印章</li>
  <li> 注：默认圆形印章</li></ul>
     */
    SealStyle?: string;
    /**
     * 印章尺寸取值描述：<ul><li> 42_42 圆形企业公章直径42mm</li>
  <li> 40_40 圆形企业印章直径40mm</li>
  <li> 45_30 椭圆形印章45mm x 30mm</li>
  </ul>
     */
    SealSize?: string;
}
/**
 * ChannelDescribeUserAutoSignStatus返回参数结构体
 */
export interface ChannelDescribeUserAutoSignStatusResponse {
    /**
     * 是否开通
     */
    IsOpen?: boolean;
    /**
     * 自动签许可生效时间。当且仅当已开通自动签时有值。
     */
    LicenseFrom?: number;
    /**
     * 自动签许可到期时间。当且仅当已开通自动签时有值。
     */
    LicenseTo?: number;
    /**
     * 设置用户开通自动签时是否绑定个人自动签账号许可。一旦绑定后，将扣减购买的个人自动签账号许可一次（1年有效期），不可解绑释放。不传默认为绑定自动签账号许可。 0-绑定个人自动签账号许可，开通后将扣减购买的个人自动签账号许可一次
     */
    LicenseType?: number;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelUpdateSealStatus返回参数结构体
 */
export interface ChannelUpdateSealStatusResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelCreateFlowSignUrl请求参数结构体
 */
export interface ChannelCreateFlowSignUrlRequest {
    /**
     * 应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填
     */
    Agent: Agent;
    /**
     * 流程编号
     */
    FlowId: string;
    /**
     * 流程签署人，其中Name和Mobile必传，其他可不传，ApproverType目前只支持PERSON类型的签署人，如果不传默认为该值。还需注意签署人只能有手写签名和时间类型的签署控件，其他类型的填写控件和签署控件暂时都未支持。
     */
    FlowApproverInfos: Array<FlowApproverInfo>;
    /**
     * 用户信息，暂未开放
     * @deprecated
     */
    Operator?: UserInfo;
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
 * DescribeExtendedServiceAuthInfo返回参数结构体
 */
export interface DescribeExtendedServiceAuthInfoResponse {
    /**
     * 企业扩展服务授权信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AuthInfo?: Array<ExtentServiceAuthInfo>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ChannelCreateEmbedWebUrl请求参数结构体
 */
export interface ChannelCreateEmbedWebUrlRequest {
    /**
     * 渠道应用相关信息。 此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填。
     */
    Agent: Agent;
    /**
     * 要生成WEB嵌入界面的类型, 可以选择的值如下:
  
  - CREATE_SEAL: 生成创建印章的嵌入页面
  - CREATE_TEMPLATE：生成创建模板的嵌入页面
  - MODIFY_TEMPLATE：生成修改模板的嵌入页面
  - PREVIEW_TEMPLATE：生成预览模板的嵌入页面
  - PREVIEW_FLOW：生成预览合同文档的嵌入页面
  - PREVIEW_FLOW_DETAIL：生成预览合同详情的嵌入页面
  - PREVIEW_SEAL_LIST：生成预览印章列表的嵌入页面
  - PREVIEW_SEAL_DETAIL：生成预览印章详情的嵌入页面
  - EXTEND_SERVICE：生成扩展服务的嵌入页面
     */
    EmbedType: string;
    /**
     * WEB嵌入的业务资源ID
  
  - 当EmbedType取值MODIFY_TEMPLATE，PREVIEW_TEMPLATE时需要填写模板id作为BusinessId
  - 当EmbedType取值PREVIEW_FLOW，PREVIEW_FLOW_DETAIL时需要填写合同id作为BusinessId
  - 当EmbedType取值PREVIEW_SEAL_DETAIL需要填写印章id作为BusinessId
     */
    BusinessId?: string;
    /**
     * 是否隐藏控件，只有预览模板时生效
     */
    HiddenComponents?: boolean;
    /**
     * 渠道操作者信息
     * @deprecated
     */
    Operator?: UserInfo;
}
/**
 * 抄送信息
 */
export interface CcInfo {
    /**
     * 被抄送人手机号，大陆11位手机号
     */
    Mobile?: string;
    /**
     * 被抄送人姓名
     */
    Name?: string;
    /**
     * 被抄送人类型
  0--个人. 1--员工
     */
    CcType?: number;
    /**
     * 被抄送人权限
  0--可查看
  1--可查看也可下载
     */
    CcPermission?: number;
}
/**
 * ChannelDescribeFlowComponents请求参数结构体
 */
export interface ChannelDescribeFlowComponentsRequest {
    /**
     * 应用相关信息。此接口Agent.ProxyOrganizationOpenId、Agent. ProxyOperator.OpenId、Agent.AppId 必填
     */
    Agent: Agent;
    /**
     * 电子签流程的Id
     */
    FlowId: string;
}
