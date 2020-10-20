/**
 * DescribeProject返回参数结构体
 */
export interface DescribeProjectResponse {
    /**
      * 项目id
      */
    ProjectId?: string;
    /**
      * 项目名称
      */
    ProjectName?: string;
    /**
      * 项目预算
      */
    ProjectBudget?: number;
    /**
      * 项目机构
      */
    ProjectOrg?: string;
    /**
      * 项目简介
      */
    ProjectIntroduction?: string;
    /**
      * 子项目列表
      */
    SubProjectList?: Array<SubProjectInfo>;
    /**
      * 项目状态
      */
    ProjectStatus?: string;
    /**
      * 项目机构Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectOrgId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckStaffChUser请求参数结构体
 */
export interface CheckStaffChUserRequest {
    /**
      * 员工ID
      */
    UserId: Array<string>;
    /**
      * 渠道状态：checkpass审核通过, checkreject审核拒绝, enableoperate启用, stopoperate停用
      */
    OperateType: string;
}
/**
 * DescribeResourceTemplateHeaders返回参数结构体
 */
export interface DescribeResourceTemplateHeadersResponse {
    /**
      * 记录条数
      */
    TotalCount?: number;
    /**
      * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TmplList?: Array<ResourceTemplateHeader>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteProject请求参数结构体
 */
export interface DeleteProjectRequest {
    /**
      * 项目ID
      */
    ProjectId: string;
}
/**
 * ReplenishProjectStock返回参数结构体
 */
export interface ReplenishProjectStockResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendWxTouchTask返回参数结构体
 */
export interface SendWxTouchTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomers请求参数结构体
 */
export interface DescribeCustomersRequest {
    /**
      * 查询类型，0.个人，1负责部门，2.指定部门
      */
    QueryType: string;
    /**
      * 分组ID
      */
    GroupId?: string;
    /**
      * 是否星级标记 1是 0否
      */
    MarkFlag?: number;
    /**
      * 客户标签，多个标签用逗号隔开
      */
    TagIds?: string;
    /**
      * 员工标识筛选，0：非员工，1：员工
      */
    RelChannelFlag?: string;
    /**
      * 必须存在手机 1是 0否
      */
    NeedPhoneFlag?: number;
    /**
      * 省份
      */
    Province?: string;
    /**
      * 城市
      */
    City?: string;
    /**
      * 性别 1男 2女
      */
    Sex?: string;
    /**
      * 城市
      */
    KeyWord?: string;
    /**
      * 查询开始位置
      */
    Offset?: number;
    /**
      * 每页记录条数
      */
    Limit?: number;
    /**
      * 子项目ID
      */
    SubProjectId?: string;
}
/**
 * DescribeProjects请求参数结构体
 */
export interface DescribeProjectsRequest {
    /**
      * 页码
      */
    PageNo: number;
    /**
      * 页面大小
      */
    PageSize: number;
    /**
      * 过滤规则
      */
    SearchWord?: string;
    /**
      * 部门范围过滤
      */
    Filters?: Filters;
    /**
      * 项目状态, 0:编辑中 1:运营中 2:已下线 3:已删除 4:审批中
      */
    ProjectStatus?: number;
}
/**
 * ModifyProject请求参数结构体
 */
export interface ModifyProjectRequest {
    /**
      * 项目ID
      */
    ProjectId: string;
    /**
      * 项目名称
      */
    ProjectName: string;
    /**
      * 项目预算
      */
    ProjectBudget: string;
    /**
      * 项目机构
      */
    ProjectOrg: string;
    /**
      * 项目简介
      */
    ProjectIntroduction: string;
    /**
      * 项目机构Id
      */
    ProjectOrgId?: string;
}
/**
 * OffLineProject请求参数结构体
 */
export interface OffLineProjectRequest {
    /**
      * 项目ID
      */
    ProjectId: string;
}
/**
 * DescribeSubProject请求参数结构体
 */
export interface DescribeSubProjectRequest {
    /**
      * 子项目id
      */
    SubProjectId: string;
}
/**
 * ExpireFlow请求参数结构体
 */
export interface ExpireFlowRequest {
    /**
      * 工单ID
      */
    FlowId: string;
}
/**
 * CopyActivityChannel请求参数结构体
 */
export interface CopyActivityChannelRequest {
    /**
      * 活动ID
      */
    ActivityId: string;
    /**
      * 来源渠道ID
      */
    ChannelFrom: string;
    /**
      * 目的渠道id
      */
    ChannelTo: Array<string>;
}
/**
 * CopyActivityChannel返回参数结构体
 */
export interface CopyActivityChannelResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProjects返回参数结构体
 */
export interface DescribeProjectsResponse {
    /**
      * 项目列表
      */
    ProjectList?: Array<ProjectInfo>;
    /**
      * 项目数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReplenishProjectStock请求参数结构体
 */
export interface ReplenishProjectStockRequest {
    /**
      * 项目id
      */
    SubProjectId: string;
    /**
      * 奖品id
      */
    PrizeId: string;
    /**
      * 奖品数量
      */
    PrizeNum: number;
    /**
      * 奖池索引
      */
    PoolIndex: number;
    /**
      * 奖池名称
      */
    PoolName?: string;
}
/**
 * 项目奖品库存
 */
export interface ProjectStock {
    /**
      * 奖品id
      */
    PrizeId: string;
    /**
      * 奖品批次
      */
    PrizeBat: number;
    /**
      * 奖品名称
      */
    PrizeName: string;
    /**
      * 已分配奖品数量
      */
    UsedStock: number;
    /**
      * 该奖品剩余库存数量
      */
    RemainStock: number;
    /**
      * 奖品所在奖池index
      */
    PoolIdx: number;
    /**
      * 奖品所在奖池名称
      */
    PoolName: string;
}
/**
 * DescribeProjectStock返回参数结构体
 */
export interface DescribeProjectStockResponse {
    /**
      * 项目库存列表
      */
    ProjectStocks?: Array<ProjectStock>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckStaffChUser返回参数结构体
 */
export interface CheckStaffChUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomer请求参数结构体
 */
export interface DescribeCustomerRequest {
    /**
      * 用户ID
      */
    UserId: string;
}
/**
 * 内容页结构
 */
export interface ProductInfo {
    /**
      * 模板id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateId: string;
    /**
      * 模板主题
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductTitle: string;
    /**
      * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductDesc: string;
    /**
      * 模板封面地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductCover: string;
    /**
      * 内容作品id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductId: string;
    /**
      * 作品预览链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductUrl: string;
    /**
      * 作品名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductName: string;
}
/**
 * 子项目信息
 */
export interface SubProjectInfo {
    /**
      * 子项目id
      */
    SubProjectId: string;
    /**
      * 子项目名称
      */
    SubProjectName: string;
    /**
      * 子项目状态
      */
    SubProjectStatus: string;
}
/**
 * 素材模板消息标题的样例列表
 */
export interface ResourceTemplateHeader {
    /**
      * 模板预览区内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: string;
    /**
      * 模板预览示例
注意：此字段可能返回 null，表示取不到有效值。
      */
    Example: string;
    /**
      * 模板预览区域键数组
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyArray: string;
    /**
      * 模板id
      */
    TemplateId: string;
    /**
      * 模板标题
注意：此字段可能返回 null，表示取不到有效值。
      */
    Title: string;
}
/**
 * CreateSubProject返回参数结构体
 */
export interface CreateSubProjectResponse {
    /**
      * 子项目id
      */
    SubProjectId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 可见范围过滤参数
 */
export interface Filters {
    /**
      * 过滤类型, 0: 默认(可见部门+自创) 1: 自创 2: 指定部门(部门在可见范围内)
      */
    Type?: number;
    /**
      * 指定部门Id, 类型2使用
      */
    DeptIds?: Array<string>;
    /**
      * 用户Id列表
      */
    UserIds?: Array<string>;
}
/**
 * 项目基础信息
 */
export interface ProjectInfo {
    /**
      * 项目ID
      */
    ProjectId: string;
    /**
      * 项目名称
      */
    ProjectName: string;
    /**
      * 项目所属机构
      */
    ProjectOrg: string;
    /**
      * 项目预算
      */
    ProjectBudget: number;
    /**
      * 项目状态
      */
    ProjectStatus: string;
    /**
      * 项目创建时间
      */
    CreateTime: string;
    /**
      * 项目简介
      */
    ProjectIntroduction: string;
    /**
      * 项目所属机构Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectOrgId: string;
}
/**
 * DescribeCustomer返回参数结构体
 */
export interface DescribeCustomerResponse {
    /**
      * 地址列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddressList?: Array<string>;
    /**
      * 用户id
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId?: string;
    /**
      * 头像
注意：此字段可能返回 null，表示取不到有效值。
      */
    Avatar?: string;
    /**
      * 生日
注意：此字段可能返回 null，表示取不到有效值。
      */
    Birthday?: string;
    /**
      * 城市
注意：此字段可能返回 null，表示取不到有效值。
      */
    City?: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 设备
注意：此字段可能返回 null，表示取不到有效值。
      */
    Device?: string;
    /**
      * 行业
注意：此字段可能返回 null，表示取不到有效值。
      */
    Industrys?: Array<string>;
    /**
      * 上次登录时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastActiveTime?: string;
    /**
      * 是否星标 1是 0否
注意：此字段可能返回 null，表示取不到有效值。
      */
    MarkFlag?: string;
    /**
      * 手机型号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Model?: string;
    /**
      * 微信openid
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenId?: string;
    /**
      * 消费特点
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayFeature?: string;
    /**
      * 手机号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phone?: string;
    /**
      * 手机号码列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneList?: string;
    /**
      * 最近记录省份
注意：此字段可能返回 null，表示取不到有效值。
      */
    Province?: string;
    /**
      * 姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealName?: string;
    /**
      * 员工标识 0：非员工 1：员工
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelChannelFlag?: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark?: string;
    /**
      * 性别 1男 2女
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sex?: string;
    /**
      * 最初来源
注意：此字段可能返回 null，表示取不到有效值。
      */
    SourceAudienceVo?: string;
    /**
      * 关注公众号列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubWechats?: Array<string>;
    /**
      * 微信unionid
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnionId?: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: string;
    /**
      * 用户类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserTypes?: Array<string>;
    /**
      * 城市
注意：此字段可能返回 null，表示取不到有效值。
      */
    WxCity?: string;
    /**
      * 国家
注意：此字段可能返回 null，表示取不到有效值。
      */
    WxCountry?: string;
    /**
      * 昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
    WxNickname?: string;
    /**
      * 省份
注意：此字段可能返回 null，表示取不到有效值。
      */
    WxProvince?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCustomers返回参数结构体
 */
export interface DescribeCustomersResponse {
    /**
      * 总记录条数
      */
    TotalCount?: number;
    /**
      * 数据列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserList?: Array<CustomerInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSubProject请求参数结构体
 */
export interface CreateSubProjectRequest {
    /**
      * 所属项目id
      */
    ProjectId: string;
    /**
      * 子项目名称
      */
    SubProjectName: string;
}
/**
 * ModifyProject返回参数结构体
 */
export interface ModifyProjectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProject返回参数结构体
 */
export interface CreateProjectResponse {
    /**
      * 项目ID
      */
    ProjectId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProjectStock请求参数结构体
 */
export interface DescribeProjectStockRequest {
    /**
      * 子项目id
      */
    SubProjectId: string;
}
/**
 * DeleteProject返回参数结构体
 */
export interface DeleteProjectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendWxTouchTask请求参数结构体
 */
export interface SendWxTouchTaskRequest {
    /**
      * 客户分组ID
      */
    GroupId: string;
    /**
      * 去除今日已发送的客户
      */
    DistinctFlag: boolean;
    /**
      * 是否立马发送
      */
    IsSendNow: boolean;
    /**
      * 发送时间，一般为0
      */
    SendDate: number;
    /**
      * 任务名称
      */
    TaskName: string;
    /**
      * 微信触达类型，text, news, smallapp, tmplmsg
      */
    WxTouchType: string;
    /**
      * 标题
      */
    Title?: string;
    /**
      * 文本内容
      */
    Content?: string;
    /**
      * 图文素材ID
      */
    NewsId?: string;
    /**
      * 小程序卡片ID
      */
    SmallProgramId?: string;
    /**
      * 模板消息ID
      */
    TemplateId?: string;
    /**
      * 微信公众号appId
      */
    WxAppId?: string;
}
/**
 * DescribeProject请求参数结构体
 */
export interface DescribeProjectRequest {
    /**
      * 项目ID
      */
    ProjectId: string;
}
/**
 * OffLineProject返回参数结构体
 */
export interface OffLineProjectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 客户档案
 */
export interface CustomerInfo {
    /**
      * 总活跃度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Activity: number;
    /**
      * 客户ID
      */
    AudienceUserId: string;
    /**
      * 头像
注意：此字段可能返回 null，表示取不到有效值。
      */
    Avatar: string;
    /**
      * 最近记录城市
注意：此字段可能返回 null，表示取不到有效值。
      */
    City: string;
    /**
      * 最活跃时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastActiveTime: string;
    /**
      * 是否星标客户
注意：此字段可能返回 null，表示取不到有效值。
      */
    MarkFlag: string;
    /**
      * 30天活跃度
注意：此字段可能返回 null，表示取不到有效值。
      */
    MonthActive: number;
    /**
      * 30天推荐度
注意：此字段可能返回 null，表示取不到有效值。
      */
    MonthRecommend: number;
    /**
      * 手机号
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phone: string;
    /**
      * 最近记录省份
注意：此字段可能返回 null，表示取不到有效值。
      */
    Province: string;
    /**
      * 姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealName: string;
    /**
      * 员工标识 0 未关联 1 已关联
注意：此字段可能返回 null，表示取不到有效值。
      */
    RelChannelFlag: number;
    /**
      * 性别 1男 2女
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sex: number;
    /**
      * 传播力（好友数）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Spread: number;
    /**
      * 7天活跃度
注意：此字段可能返回 null，表示取不到有效值。
      */
    WeekActive: number;
    /**
      * 7天推荐度
注意：此字段可能返回 null，表示取不到有效值。
      */
    WeekRecommend: number;
    /**
      * 微信城市
注意：此字段可能返回 null，表示取不到有效值。
      */
    WxCity: string;
    /**
      * 微信国家或地区
注意：此字段可能返回 null，表示取不到有效值。
      */
    WxCountry: string;
    /**
      * 微信呢称
注意：此字段可能返回 null，表示取不到有效值。
      */
    WxNickname: string;
    /**
      * 微信省份
注意：此字段可能返回 null，表示取不到有效值。
      */
    WxProvince: string;
}
/**
 * 活动详情
 */
export interface ActivityInfo {
    /**
      * 活动使用模板id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateId: string;
    /**
      * 活动标题
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActivityTitle: string;
    /**
      * 活动描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActivityDesc: string;
    /**
      * 活动封面地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActivityCover: string;
    /**
      * 活动类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActivityType: string;
    /**
      * 活动id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActivityId: string;
    /**
      * 活动模板自定义配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    PersonalConfig: string;
}
/**
 * DescribeResourceTemplateHeaders请求参数结构体
 */
export interface DescribeResourceTemplateHeadersRequest {
    /**
      * 微信公众号appId
      */
    WxAppId?: string;
}
/**
 * ExpireFlow返回参数结构体
 */
export interface ExpireFlowResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSubProject返回参数结构体
 */
export interface DescribeSubProjectResponse {
    /**
      * 作品信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductInfo?: ProductInfo;
    /**
      * 活动信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActivityInfo?: ActivityInfo;
    /**
      * 分享标题
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShareTitle?: string;
    /**
      * 分享描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShareDesc?: string;
    /**
      * 分享图标
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShareImg?: string;
    /**
      * 是否已创建策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    HasStrategy?: number;
    /**
      * 子项目状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubProjectStatus?: string;
    /**
      * 分享公众号的appId
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShareAppId?: string;
    /**
      * 分享公众号的wsId
注意：此字段可能返回 null，表示取不到有效值。
      */
    ShareWsId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateProject请求参数结构体
 */
export interface CreateProjectRequest {
    /**
      * 项目名称
      */
    ProjectName: string;
    /**
      * 项目机构
      */
    ProjectOrg: string;
    /**
      * 项目预算
      */
    ProjectBudget: string;
    /**
      * 项目简介
      */
    ProjectIntroduction: string;
    /**
      * 所属部门ID
      */
    ProjectOrgId?: string;
}
