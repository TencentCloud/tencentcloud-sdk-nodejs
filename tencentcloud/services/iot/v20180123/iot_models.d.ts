/**
 * AppUpdateDevice请求参数结构体
 */
export interface AppUpdateDeviceRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 设备别名
      */
    AliasName?: string;
}
/**
 * GetDevice返回参数结构体
 */
export interface GetDeviceResponse {
    /**
      * 设备信息
      */
    Device?: Device;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetDeviceData返回参数结构体
 */
export interface GetDeviceDataResponse {
    /**
      * 设备数据
      */
    DeviceData?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppResetPassword返回参数结构体
 */
export interface AppResetPasswordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteRule请求参数结构体
 */
export interface DeleteRuleRequest {
    /**
      * 规则Id
      */
    RuleId: string;
}
/**
 * ActivateRule返回参数结构体
 */
export interface ActivateRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateRule请求参数结构体
 */
export interface UpdateRuleRequest {
    /**
      * 规则Id
      */
    RuleId: string;
    /**
      * 名称
      */
    Name?: string;
    /**
      * 描述
      */
    Description?: string;
    /**
      * 查询
      */
    Query?: RuleQuery;
    /**
      * 转发动作列表
      */
    Actions?: Array<Action>;
    /**
      * 数据类型（0：文本，1：二进制）
      */
    DataType?: number;
}
/**
 * 设备签名
 */
export interface DeviceSignature {
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 设备签名
      */
    DeviceSignature: string;
}
/**
 * AppGetDevices请求参数结构体
 */
export interface AppGetDevicesRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
}
/**
 * AppGetDeviceData返回参数结构体
 */
export interface AppGetDeviceDataResponse {
    /**
      * 设备数据。
      */
    DeviceData?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTopic返回参数结构体
 */
export interface GetTopicResponse {
    /**
      * Topic信息
      */
    Topic?: Topic;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeactivateRule返回参数结构体
 */
export interface DeactivateRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IssueDeviceControl请求参数结构体
 */
export interface IssueDeviceControlRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 控制数据（json）
      */
    ControlData: string;
    /**
      * 是否发送metadata字段
      */
    Metadata?: boolean;
}
/**
 * GetDeviceStatistics请求参数结构体
 */
export interface GetDeviceStatisticsRequest {
    /**
      * 产品Id列表
      */
    Products?: Array<string>;
    /**
      * 开始日期
      */
    StartDate?: string;
    /**
      * 结束日期
      */
    EndDate?: string;
}
/**
 * ResetDevice返回参数结构体
 */
export interface ResetDeviceResponse {
    /**
      * 设备信息
      */
    Device?: Device;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetDeviceLog返回参数结构体
 */
export interface GetDeviceLogResponse {
    /**
      * 设备日志
      */
    DeviceLog?: Array<DeviceLogEntry>;
    /**
      * 查询游标
      */
    ScrollId?: string;
    /**
      * 游标超时
      */
    ScrollTimeout?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddRule请求参数结构体
 */
export interface AddRuleRequest {
    /**
      * 名称
      */
    Name: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 查询
      */
    Query?: RuleQuery;
    /**
      * 转发动作列表
      */
    Actions?: Array<Action>;
    /**
      * 数据类型（0：文本，1：二进制）
      */
    DataType?: number;
}
/**
 * ResetDevice请求参数结构体
 */
export interface ResetDeviceRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
}
/**
 * 转发到第三方http(s)服务
 */
export interface ServiceAction {
    /**
      * 服务url地址
      */
    Url: string;
}
/**
 * 数据模版
 */
export interface DataTemplate {
    /**
      * 数字类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Number?: NumberData;
    /**
      * 字符串类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    String?: StringData;
    /**
      * 枚举类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enum?: EnumData;
    /**
      * 布尔类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Bool?: BoolData;
}
/**
 * DeleteTopic请求参数结构体
 */
export interface DeleteTopicRequest {
    /**
      * TopicId
      */
    TopicId: string;
    /**
      * 产品Id
      */
    ProductId: string;
}
/**
 * AddProduct返回参数结构体
 */
export interface AddProductResponse {
    /**
      * 产品信息
      */
    Product?: Product;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateProduct返回参数结构体
 */
export interface UpdateProductResponse {
    /**
      * 更新后的产品信息
      */
    Product?: Product;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据历史条目
 */
export interface DataHistoryEntry {
    /**
      * 日志id
      */
    Id: string;
    /**
      * 时间戳
      */
    Timestamp: number;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 数据
      */
    Data: string;
}
/**
 * AppGetDevice返回参数结构体
 */
export interface AppGetDeviceResponse {
    /**
      * 绑定设备详情
      */
    AppDevice?: AppDeviceDetail;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateRule返回参数结构体
 */
export interface UpdateRuleResponse {
    /**
      * 规则
      */
    Rule?: Rule;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 绑定设备详情
 */
export interface AppDeviceDetail {
    /**
      * 设备Id
      */
    DeviceId: string;
    /**
      * 所属产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 别名
      */
    AliasName: string;
    /**
      * 地区
      */
    Region: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 设备信息（json）
      */
    DeviceInfo: string;
    /**
      * 数据模板
      */
    DataTemplate: Array<DataTemplate>;
}
/**
 * GetDeviceStatistics返回参数结构体
 */
export interface GetDeviceStatisticsResponse {
    /**
      * 统计数据
      */
    DeviceStatistics?: Array<DeviceStatData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnassociateSubDeviceFromGatewayProduct返回参数结构体
 */
export interface UnassociateSubDeviceFromGatewayProductResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Topic
 */
export interface Topic {
    /**
      * TopicId
      */
    TopicId: string;
    /**
      * Topic名称
      */
    TopicName: string;
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 消息最大生命周期
      */
    MsgLife: number;
    /**
      * 消息最大大小
      */
    MsgSize: number;
    /**
      * 消息最大数量
      */
    MsgCount: number;
    /**
      * 已删除
      */
    Deleted: number;
    /**
      * Topic完整路径
      */
    Path: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
}
/**
 * AssociateSubDeviceToGatewayProduct返回参数结构体
 */
export interface AssociateSubDeviceToGatewayProductResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetProduct请求参数结构体
 */
export interface GetProductRequest {
    /**
      * 产品Id
      */
    ProductId: string;
}
/**
 * AppGetToken请求参数结构体
 */
export interface AppGetTokenRequest {
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 密码
      */
    Password: string;
    /**
      * TTL
      */
    Expire?: number;
}
/**
 * GetRule请求参数结构体
 */
export interface GetRuleRequest {
    /**
      * 规则Id
      */
    RuleId: string;
}
/**
 * DeleteProduct请求参数结构体
 */
export interface DeleteProductRequest {
    /**
      * 产品Id
      */
    ProductId: string;
}
/**
 * AppGetUser请求参数结构体
 */
export interface AppGetUserRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
}
/**
 * GetProducts返回参数结构体
 */
export interface GetProductsResponse {
    /**
      * Product列表
      */
    Products?: Array<ProductEntry>;
    /**
      * Product总数
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppGetDevice请求参数结构体
 */
export interface AppGetDeviceRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
}
/**
 * GetDataHistory请求参数结构体
 */
export interface GetDataHistoryRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称列表，允许最多一次100台
      */
    DeviceNames: Array<string>;
    /**
      * 查询开始时间
      */
    StartTime: string;
    /**
      * 查询结束时间
      */
    EndTime: string;
    /**
      * 查询数据量
      */
    Size?: number;
    /**
      * 时间排序（desc/asc）
      */
    Order?: string;
    /**
      * 查询游标
      */
    ScrollId?: string;
}
/**
 * AddTopic返回参数结构体
 */
export interface AddTopicResponse {
    /**
      * Topic信息
      */
    Topic?: Topic;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AddProduct请求参数结构体
 */
export interface AddProductRequest {
    /**
      * 产品名称，同一区域产品名称需唯一，支持中文、英文字母、中划线和下划线，长度不超过31个字符，中文占两个字符
      */
    Name: string;
    /**
      * 产品描述
      */
    Description: string;
    /**
      * 数据模版
      */
    DataTemplate?: Array<DataTemplate>;
    /**
      * 产品版本（native表示基础版，template表示高级版，默认值为template）
      */
    DataProtocol?: string;
    /**
      * 设备认证方式（1：动态令牌，2：签名直连鉴权）
      */
    AuthType?: number;
    /**
      * 通信方式（other/wifi/cellular/nb-iot）
      */
    CommProtocol?: string;
    /**
      * 产品的设备类型（device: 直连设备；sub_device：子设备；gateway：网关设备）
      */
    DeviceType?: string;
}
/**
 * 产品条目
 */
export interface ProductEntry {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 产品Key
      */
    ProductKey: string;
    /**
      * AppId
      */
    AppId: number;
    /**
      * 产品名称
      */
    Name: string;
    /**
      * 产品描述
      */
    Description: string;
    /**
      * 连接域名
      */
    Domain: string;
    /**
      * 鉴权类型（0：直连，1：Token）
      */
    AuthType: number;
    /**
      * 数据协议（native/template）
      */
    DataProtocol: string;
    /**
      * 删除（0未删除）
      */
    Deleted: number;
    /**
      * 备注
      */
    Message: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 通信方式
      */
    CommProtocol: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 设备类型
      */
    DeviceType: string;
}
/**
 * GetRules返回参数结构体
 */
export interface GetRulesResponse {
    /**
      * 规则列表
      */
    Rules?: Array<Rule>;
    /**
      * 规则总数
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDevice请求参数结构体
 */
export interface DeleteDeviceRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
}
/**
 * AssociateSubDeviceToGatewayProduct请求参数结构体
 */
export interface AssociateSubDeviceToGatewayProductRequest {
    /**
      * 子设备产品Id
      */
    SubDeviceProductId: string;
    /**
      * 网关产品Id
      */
    GatewayProductId: string;
}
/**
 * GetDeviceSignatures返回参数结构体
 */
export interface GetDeviceSignaturesResponse {
    /**
      * 设备绑定签名列表
      */
    DeviceSignatures?: Array<DeviceSignature>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询
 */
export interface RuleQuery {
    /**
      * 字段
      */
    Field: string;
    /**
      * 过滤规则
      */
    Condition: string;
    /**
      * Topic
注意：此字段可能返回 null，表示取不到有效值。
      */
    Topic?: string;
    /**
      * 产品Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductId?: string;
}
/**
 * 应用用户
 */
export interface AppUser {
    /**
      * 应用Id
      */
    ApplicationId: string;
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 昵称
      */
    NickName: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 修改时间
      */
    UpdateTime: string;
}
/**
 * 布尔类型数据
 */
export interface BoolData {
    /**
      * 名称
      */
    Name: string;
    /**
      * 描述
      */
    Desc: string;
    /**
      * 读写模式
      */
    Mode: string;
    /**
      * 取值列表
      */
    Range: Array<boolean>;
}
/**
 * PublishMsg请求参数结构体
 */
export interface PublishMsgRequest {
    /**
      * Topic
      */
    Topic: string;
    /**
      * 消息内容
      */
    Message: string;
    /**
      * Qos(目前QoS支持0与1)
      */
    Qos?: number;
}
/**
 * GetProducts请求参数结构体
 */
export interface GetProductsRequest {
    /**
      * 偏移
      */
    Offset?: number;
    /**
      * 长度
      */
    Length?: number;
}
/**
 * AddTopic请求参数结构体
 */
export interface AddTopicRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * Topic名称
      */
    TopicName: string;
}
/**
 * AppGetDeviceStatuses请求参数结构体
 */
export interface AppGetDeviceStatusesRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
    /**
      * 设备Id列表（单次限制1000个设备）
      */
    DeviceIds: Array<string>;
}
/**
 * 设备日志条目
 */
export interface DeviceLogEntry {
    /**
      * 日志id
      */
    Id: string;
    /**
      * 日志内容
      */
    Msg: string;
    /**
      * 状态码
      */
    Code: string;
    /**
      * 时间戳
      */
    Timestamp: number;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 设备动作
      */
    Method: string;
}
/**
 * GetDebugLog请求参数结构体
 */
export interface GetDebugLogRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称列表，最大支持100台
      */
    DeviceNames: Array<string>;
    /**
      * 查询开始时间
      */
    StartTime: string;
    /**
      * 查询结束时间
      */
    EndTime: string;
    /**
      * 查询数据量
      */
    Size?: number;
    /**
      * 时间排序（desc/asc）
      */
    Order?: string;
    /**
      * 查询游标
      */
    ScrollId?: string;
    /**
      * 日志类型（shadow/action/mqtt）
      */
    Type?: string;
}
/**
 * GetDevice请求参数结构体
 */
export interface GetDeviceRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
}
/**
 * GetDeviceData请求参数结构体
 */
export interface GetDeviceDataRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
}
/**
 * DeactivateRule请求参数结构体
 */
export interface DeactivateRuleRequest {
    /**
      * 规则Id
      */
    RuleId: string;
}
/**
 * GetTopic请求参数结构体
 */
export interface GetTopicRequest {
    /**
      * TopicId
      */
    TopicId: string;
    /**
      * 产品Id
      */
    ProductId: string;
}
/**
 * GetDevices返回参数结构体
 */
export interface GetDevicesResponse {
    /**
      * 设备列表
      */
    Devices?: Array<DeviceEntry>;
    /**
      * 设备总数
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数字类型数据
 */
export interface NumberData {
    /**
      * 名称
      */
    Name: string;
    /**
      * 描述
      */
    Desc: string;
    /**
      * 读写模式
      */
    Mode: string;
    /**
      * 取值范围
      */
    Range: Array<number>;
}
/**
 * GetDevices请求参数结构体
 */
export interface GetDevicesRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 偏移
      */
    Offset?: number;
    /**
      * 长度
      */
    Length?: number;
    /**
      * 关键字查询
      */
    Keyword?: string;
}
/**
 * AppGetToken返回参数结构体
 */
export interface AppGetTokenResponse {
    /**
      * 访问Token
      */
    AccessToken?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetProduct返回参数结构体
 */
export interface GetProductResponse {
    /**
      * 产品信息
      */
    Product?: Product;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppAddUser请求参数结构体
 */
export interface AppAddUserRequest {
    /**
      * 用户名
      */
    UserName: string;
    /**
      * 密码
      */
    Password: string;
}
/**
 * AddRule返回参数结构体
 */
export interface AddRuleResponse {
    /**
      * 规则
      */
    Rule?: Rule;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppDeleteDevice返回参数结构体
 */
export interface AppDeleteDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppIssueDeviceControl请求参数结构体
 */
export interface AppIssueDeviceControlRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 控制数据（json）
      */
    ControlData: string;
    /**
      * 是否发送metadata字段
      */
    Metadata?: boolean;
}
/**
 * 设备状态
 */
export interface DeviceStatus {
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 设备状态（inactive, online, offline）
      */
    Status: string;
    /**
      * 首次上线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstOnline: string;
    /**
      * 最后上线时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastOnline: string;
    /**
      * 上线次数
      */
    OnlineTimes: number;
}
/**
 * DeleteProduct返回参数结构体
 */
export interface DeleteProductResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppGetUser返回参数结构体
 */
export interface AppGetUserResponse {
    /**
      * 用户信息
      */
    AppUser?: AppUser;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppUpdateUser请求参数结构体
 */
export interface AppUpdateUserRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
    /**
      * 昵称
      */
    NickName?: string;
}
/**
 * GetDebugLog返回参数结构体
 */
export interface GetDebugLogResponse {
    /**
      * 调试日志
      */
    DebugLog?: Array<DebugLogEntry>;
    /**
      * 查询游标
      */
    ScrollId?: string;
    /**
      * 游标超时
      */
    ScrollTimeout?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppUpdateUser返回参数结构体
 */
export interface AppUpdateUserResponse {
    /**
      * 应用用户
      */
    AppUser?: AppUser;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 设备
 */
export interface Device {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 设备密钥
      */
    DeviceSecret: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 设备信息（json）
      */
    DeviceInfo: string;
}
/**
 * GetRules请求参数结构体
 */
export interface GetRulesRequest {
    /**
      * 偏移
      */
    Offset?: number;
    /**
      * 长度
      */
    Length?: number;
}
/**
 * 规则
 */
export interface Rule {
    /**
      * 规则Id
      */
    RuleId: string;
    /**
      * AppId
      */
    AppId: number;
    /**
      * 名称
      */
    Name: string;
    /**
      * 描述
      */
    Description: string;
    /**
      * 查询
      */
    Query: RuleQuery;
    /**
      * 转发
      */
    Actions: Array<Action>;
    /**
      * 已启动
      */
    Active: number;
    /**
      * 已删除
      */
    Deleted: number;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 消息顺序
      */
    MsgOrder: number;
    /**
      * 数据类型（0：文本，1：二进制）
      */
    DataType: number;
}
/**
 * IssueDeviceControl返回参数结构体
 */
export interface IssueDeviceControlResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetDataHistory返回参数结构体
 */
export interface GetDataHistoryResponse {
    /**
      * 数据历史
      */
    DataHistory?: Array<DataHistoryEntry>;
    /**
      * 查询游标
      */
    ScrollId?: string;
    /**
      * 查询游标超时
      */
    ScrollTimeout?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 规则引擎转发动作
 */
export interface Action {
    /**
      * 转发至topic
注意：此字段可能返回 null，表示取不到有效值。
      */
    Topic?: TopicAction;
    /**
      * 转发至第三发
注意：此字段可能返回 null，表示取不到有效值。
      */
    Service?: ServiceAction;
    /**
      * 转发至第三发Ckafka
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ckafka?: CkafkaAction;
}
/**
 * PublishMsg返回参数结构体
 */
export interface PublishMsgResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppGetDevices返回参数结构体
 */
export interface AppGetDevicesResponse {
    /**
      * 绑定设备列表
      */
    Devices?: Array<AppDevice>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 转发至Ckafka
 */
export interface CkafkaAction {
    /**
      * 实例Id
      */
    InstanceId: string;
    /**
      * topic名称
      */
    TopicName: string;
    /**
      * 地域
      */
    Region: string;
}
/**
 * AddDevice请求参数结构体
 */
export interface AddDeviceRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称，唯一标识某产品下的一个设备
      */
    DeviceName: string;
}
/**
 * UpdateProduct请求参数结构体
 */
export interface UpdateProductRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 产品名称
      */
    Name?: string;
    /**
      * 产品描述
      */
    Description?: string;
    /**
      * 数据模版
      */
    DataTemplate?: Array<DataTemplate>;
}
/**
 * DeleteRule返回参数结构体
 */
export interface DeleteRuleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetDeviceSignatures请求参数结构体
 */
export interface GetDeviceSignaturesRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 设备名称列表（单次限制1000个设备）
      */
    DeviceNames: Array<string>;
    /**
      * 过期时间
      */
    Expire?: number;
}
/**
 * GetRule返回参数结构体
 */
export interface GetRuleResponse {
    /**
      * 规则
      */
    Rule?: Rule;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppUpdateDevice返回参数结构体
 */
export interface AppUpdateDeviceResponse {
    /**
      * 设备信息
      */
    AppDevice?: AppDevice;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 产品
 */
export interface Product {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 产品Key
      */
    ProductKey: string;
    /**
      * AppId
      */
    AppId: number;
    /**
      * 产品名称
      */
    Name: string;
    /**
      * 产品描述
      */
    Description: string;
    /**
      * 连接域名
      */
    Domain: string;
    /**
      * 产品规格
      */
    Standard: number;
    /**
      * 鉴权类型（0：直连，1：Token）
      */
    AuthType: number;
    /**
      * 删除（0未删除）
      */
    Deleted: number;
    /**
      * 备注
      */
    Message: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 数据模版
      */
    DataTemplate: Array<DataTemplate>;
    /**
      * 数据协议（native/template）
      */
    DataProtocol: string;
    /**
      * 直连用户名
      */
    Username: string;
    /**
      * 直连密码
      */
    Password: string;
    /**
      * 通信方式
      */
    CommProtocol: string;
    /**
      * qps
      */
    Qps: number;
    /**
      * 地域
      */
    Region: string;
    /**
      * 产品的设备类型
      */
    DeviceType: string;
    /**
      * 关联的产品列表
      */
    AssociatedProducts: Array<string>;
}
/**
 * 设备日志条目
 */
export interface DebugLogEntry {
    /**
      * 日志id
      */
    Id: string;
    /**
      * 行为（事件）
      */
    Event: string;
    /**
      * shadow/action/mqtt, 分别表示：影子/规则引擎/上下线日志
      */
    LogType: string;
    /**
      * 时间戳
      */
    Timestamp: number;
    /**
      * success/fail
      */
    Result: string;
    /**
      * 日志详细内容
      */
    Data: string;
    /**
      * 数据来源topic
      */
    Topic: string;
    /**
      * 设备名称
      */
    DeviceName: string;
}
/**
 * GetDeviceStatuses请求参数结构体
 */
export interface GetDeviceStatusesRequest {
    /**
      * 产品ID
      */
    ProductId: string;
    /**
      * 设备名称列表（单次限制1000个设备）
      */
    DeviceNames: Array<string>;
}
/**
 * GetDeviceStatuses返回参数结构体
 */
export interface GetDeviceStatusesResponse {
    /**
      * 设备状态列表
      */
    DeviceStatuses?: Array<DeviceStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnassociateSubDeviceFromGatewayProduct请求参数结构体
 */
export interface UnassociateSubDeviceFromGatewayProductRequest {
    /**
      * 子设备产品Id
      */
    SubDeviceProductId: string;
    /**
      * 网关设备产品Id
      */
    GatewayProductId: string;
}
/**
 * AppDeleteDevice请求参数结构体
 */
export interface AppDeleteDeviceRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
}
/**
 * 数字类型数据
 */
export interface StringData {
    /**
      * 名称
      */
    Name: string;
    /**
      * 描述
      */
    Desc: string;
    /**
      * 读写模式
      */
    Mode: string;
    /**
      * 长度范围
      */
    Range: Array<number>;
}
/**
 * AppGetDeviceStatuses返回参数结构体
 */
export interface AppGetDeviceStatusesResponse {
    /**
      * 设备状态
      */
    DeviceStatuses?: Array<DeviceStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTopics返回参数结构体
 */
export interface GetTopicsResponse {
    /**
      * Topic列表
      */
    Topics?: Array<Topic>;
    /**
      * Topic总数
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppGetDeviceData请求参数结构体
 */
export interface AppGetDeviceDataRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
}
/**
 * AppAddUser返回参数结构体
 */
export interface AppAddUserResponse {
    /**
      * 应用用户
      */
    AppUser?: AppUser;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 设备条目
 */
export interface DeviceEntry {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 设备密钥
      */
    DeviceSecret: string;
    /**
      * 创建时间
      */
    CreateTime: string;
}
/**
 * GetDeviceLog请求参数结构体
 */
export interface GetDeviceLogRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 设备名称列表，最大支持100台
      */
    DeviceNames: Array<string>;
    /**
      * 查询开始时间
      */
    StartTime: string;
    /**
      * 查询结束时间
      */
    EndTime: string;
    /**
      * 查询数据量
      */
    Size?: number;
    /**
      * 时间排序（desc/asc）
      */
    Order?: string;
    /**
      * 查询游标
      */
    ScrollId?: string;
    /**
      * 日志类型（comm/status）
      */
    Type?: string;
}
/**
 * AddDevice返回参数结构体
 */
export interface AddDeviceResponse {
    /**
      * 设备信息
      */
    Device?: Device;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ActivateRule请求参数结构体
 */
export interface ActivateRuleRequest {
    /**
      * 规则Id
      */
    RuleId: string;
}
/**
 * AppResetPassword请求参数结构体
 */
export interface AppResetPasswordRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
    /**
      * 旧密码
      */
    OldPassword: string;
    /**
      * 新密码
      */
    NewPassword: string;
}
/**
 * DeleteTopic返回参数结构体
 */
export interface DeleteTopicResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 绑定设备
 */
export interface AppDevice {
    /**
      * 设备Id
      */
    DeviceId: string;
    /**
      * 所属产品Id
      */
    ProductId: string;
    /**
      * 设备名称
      */
    DeviceName: string;
    /**
      * 别名
      */
    AliasName: string;
    /**
      * 地区
      */
    Region: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
}
/**
 * GetTopics请求参数结构体
 */
export interface GetTopicsRequest {
    /**
      * 产品Id
      */
    ProductId: string;
    /**
      * 偏移
      */
    Offset?: number;
    /**
      * 长度
      */
    Length?: number;
}
/**
 * 设备统计数据
 */
export interface DeviceStatData {
    /**
      * 时间点
      */
    Datetime: string;
    /**
      * 在线设备数
      */
    DeviceOnline: number;
    /**
      * 激活设备数
      */
    DeviceActive: number;
    /**
      * 设备总数
      */
    DeviceTotal: number;
}
/**
 * 枚举类型数据
 */
export interface EnumData {
    /**
      * 名称
      */
    Name: string;
    /**
      * 描述
      */
    Desc: string;
    /**
      * 读写模式
      */
    Mode: string;
    /**
      * 取值列表
      */
    Range: Array<string>;
}
/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppSecureAddDevice返回参数结构体
 */
export interface AppSecureAddDeviceResponse {
    /**
      * 绑定设备信息
      */
    AppDevice?: AppDevice;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * AppSecureAddDevice请求参数结构体
 */
export interface AppSecureAddDeviceRequest {
    /**
      * 访问Token
      */
    AccessToken: string;
    /**
      * 设备签名
      */
    DeviceSignature: string;
}
/**
 * AppIssueDeviceControl返回参数结构体
 */
export interface AppIssueDeviceControlResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 转发到topic动作
 */
export interface TopicAction {
    /**
      * 目标topic
      */
    Topic: string;
}
