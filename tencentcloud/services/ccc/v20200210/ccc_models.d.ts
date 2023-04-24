/**
 * DescribeExtension请求参数结构体
 */
export interface DescribeExtensionRequest {
    /**
      * TCCC 实例应用 ID
      */
    SdkAppId: number;
    /**
      * 分机号
      */
    ExtensionId: string;
}
/**
 * StopAutoCalloutTask请求参数结构体
 */
export interface StopAutoCalloutTaskRequest {
    /**
      * 呼叫中心实例Id
      */
    SdkAppId: number;
    /**
      * 任务Id
      */
    TaskId: number;
}
/**
 * HangUpCall请求参数结构体
 */
export interface HangUpCallRequest {
    /**
      * TCCC 实例应用 ID
      */
    SdkAppId: number;
    /**
      * 会话ID
      */
    SessionId: string;
}
/**
 * CreateSDKLoginToken返回参数结构体
 */
export interface CreateSDKLoginTokenResponse {
    /**
      * SDK 登录 Token。
      */
    Token: string;
    /**
      * 过期时间戳，Unix 时间戳。
      */
    ExpiredTime: number;
    /**
      * SDK 加载路径会随着 SDK 的发布而变动。
      */
    SdkURL: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyStaff请求参数结构体
 */
export interface ModifyStaffRequest {
    /**
      * 应用ID
      */
    SdkAppId: number;
    /**
      * 坐席账户
      */
    Email: string;
    /**
      * 坐席名称
      */
    Name?: string;
    /**
      * 坐席手机号（带0086前缀,示例：008618011111111）
      */
    Phone?: string;
    /**
      * 坐席昵称
      */
    Nick?: string;
    /**
      * 绑定技能组ID列表
      */
    SkillGroupIds?: Array<number>;
    /**
      * 是否开启手机外呼开关
      */
    UseMobileCallOut?: boolean;
    /**
      * 手机接听模式 0 - 关闭 | 1 - 仅离线 | 2 - 始终
      */
    UseMobileAccept?: number;
}
/**
 * ResetExtensionPassword请求参数结构体
 */
export interface ResetExtensionPasswordRequest {
    /**
      * TCCC 实例应用 ID
      */
    SdkAppId: number;
    /**
      * 分机号
      */
    ExtensionId: string;
}
/**
 * DisableCCCPhoneNumber返回参数结构体
 */
export interface DisableCCCPhoneNumberResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProtectedTelCdr返回参数结构体
 */
export interface DescribeProtectedTelCdrResponse {
    /**
      * 话单记录总数
      */
    TotalCount: number;
    /**
      * 话单记录
      */
    TelCdrs: Array<TelCdrInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAutoCalloutTask请求参数结构体
 */
export interface DescribeAutoCalloutTaskRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 任务Id
      */
    TaskId: number;
}
/**
 * CreateUserSig返回参数结构体
 */
export interface CreateUserSigResponse {
    /**
      * 签名结果
      */
    UserSig: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeIMCdrs返回参数结构体
 */
export interface DescribeIMCdrsResponse {
    /**
      * 总记录数
      */
    TotalCount?: number;
    /**
      * 服务记录列表
      */
    IMCdrs?: Array<IMCdrInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCallOutSession返回参数结构体
 */
export interface CreateCallOutSessionResponse {
    /**
      * 新创建的会话 ID
      */
    SessionId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCarrierPrivilegeNumberApplicants请求参数结构体
 */
export interface DescribeCarrierPrivilegeNumberApplicantsRequest {
    /**
      * 实例Id
      */
    SdkAppId: number;
    /**
      * 默认0，从0开始
      */
    PageNumber?: number;
    /**
      * 默认10，最大100
      */
    PageSize?: number;
    /**
      * 筛选条件,Name支持ApplicantId,PhoneNumber(按号码模糊查找)
      */
    Filters?: Array<Filter>;
}
/**
 * DisableCCCPhoneNumber请求参数结构体
 */
export interface DisableCCCPhoneNumberRequest {
    /**
      * 号码列表，0086开头
      */
    PhoneNumbers: Array<string>;
    /**
      * 停用开关，0启用 1停用
      */
    Disabled: number;
    /**
      * TCCC 实例应用 ID
      */
    SdkAppId?: number;
}
/**
 * 参与者信息
 */
export interface ServeParticipant {
    /**
      * 坐席邮箱
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mail: string;
    /**
      * 坐席电话
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phone: string;
    /**
      * 振铃时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    RingTimestamp: number;
    /**
      * 接听时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    AcceptTimestamp: number;
    /**
      * 结束时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndedTimestamp: number;
    /**
      * 录音 ID，能够索引到坐席侧的录音
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordId: string;
    /**
      * 参与者类型，"staffSeat", "outboundSeat", "staffPhoneSeat"
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 转接来源坐席信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransferFrom: string;
    /**
      * 转接去向坐席信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransferTo: string;
    /**
      * 转接去向参与者类型，取值与 Type 一致
注意：此字段可能返回 null，表示取不到有效值。
      */
    TransferToType: string;
    /**
      * 技能组 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkillGroupId: number;
    /**
      * 结束状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndStatusString: string;
    /**
      * 录音 URL
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordURL: string;
    /**
      * 参与者序号，从 0 开始
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sequence: number;
    /**
      * 开始时间戳，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTimestamp: number;
    /**
      * 技能组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkillGroupName: string;
    /**
      * 录音转存第三方COS地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomRecordURL: string;
}
/**
 * DescribeExtensions返回参数结构体
 */
export interface DescribeExtensionsResponse {
    /**
      * 查询总数
      */
    Total: number;
    /**
      * 话机信息列表
      */
    ExtensionList: Array<ExtensionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteExtension请求参数结构体
 */
export interface DeleteExtensionRequest {
    /**
      * TCCC 实例应用 ID
      */
    SdkAppId: number;
    /**
      * 分机号
      */
    ExtensionId: string;
}
/**
 * DescribeTelCallInfo返回参数结构体
 */
export interface DescribeTelCallInfoResponse {
    /**
      * 呼出套餐包消耗分钟数
      */
    TelCallOutCount?: number;
    /**
      * 呼入套餐包消耗分钟数
      */
    TelCallInCount?: number;
    /**
      * 坐席使用统计个数
      */
    SeatUsedCount?: number;
    /**
      * 音频套餐包消耗分钟数
      */
    VoipCallInCount?: number;
    /**
      * 离线语音转文字套餐包消耗分钟数
      */
    AsrOfflineCount?: number;
    /**
      * 实时语音转文字套餐包消耗分钟数
      */
    AsrRealtimeCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 坐席状态相关信息
 */
export interface StaffStatusMetrics {
    /**
      * 坐席邮箱
      */
    Email: string;
    /**
      * 坐席状态 free 示闲 | busy 忙碌 | rest 小休 | notReady 示忙 | afterCallWork 话后调整 | offline 离线
      */
    Status: string;
    /**
      * 坐席状态补充信息
      */
    StatusExtra: StaffStatusExtra;
    /**
      * 当天在线总时长
      */
    OnlineDuration: number;
    /**
      * 当天示闲总时长
      */
    FreeDuration: number;
    /**
      * 当天忙碌总时长
      */
    BusyDuration: number;
    /**
      * 当天示忙总时长
      */
    NotReadyDuration: number;
    /**
      * 当天小休总时长
      */
    RestDuration: number;
    /**
      * 当天话后调整总时长
      */
    AfterCallWorkDuration: number;
    /**
      * 小休原因
      */
    Reason: string;
    /**
      * 是否预约小休
      */
    ReserveRest: boolean;
    /**
      * 是否预约示忙
      */
    ReserveNotReady: boolean;
    /**
      * 手机接听模式： 0 - 关闭 | 1 - 仅离线 | 2- 始终
      */
    UseMobileAccept: number;
    /**
      * 手机外呼开关
      */
    UseMobileCallOut: boolean;
    /**
      * 最近一次上线时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastOnlineTimestamp?: number;
    /**
      * 最近一次状态时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastStatusTimestamp?: number;
}
/**
 * DescribeTelCdr请求参数结构体
 */
export interface DescribeTelCdrRequest {
    /**
      * 起始时间戳，Unix 秒级时间戳
      */
    StartTimeStamp: number;
    /**
      * 结束时间戳，Unix 秒级时间戳
      */
    EndTimeStamp: number;
    /**
      * 实例 ID（废弃）
      */
    InstanceId?: number;
    /**
      * 返回数据条数，上限（废弃）
      */
    Limit?: number;
    /**
      * 偏移（废弃）
      */
    Offset?: number;
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId?: number;
    /**
      * 分页尺寸（必填），上限 100
      */
    PageSize?: number;
    /**
      * 分页页码（必填），从 0 开始
      */
    PageNumber?: number;
    /**
      * 按手机号筛选
      */
    Phones?: Array<string>;
    /**
      * 按SessionId筛选
      */
    SessionIds?: Array<string>;
}
/**
 * DescribeAutoCalloutTasks返回参数结构体
 */
export interface DescribeAutoCalloutTasksResponse {
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 任务列表
      */
    Tasks: Array<AutoCalloutTaskInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 套餐包购买信息
 */
export interface PackageBuyInfo {
    /**
      * 套餐包Id
      */
    PackageId: string;
    /**
      * 套餐包类型，0-外呼套餐包|1-400呼入套餐包
      */
    Type: number;
    /**
      * 套餐包总量
      */
    CapacitySize: number;
    /**
      * 套餐包剩余量
      */
    CapacityRemain: number;
    /**
      * 购买时间戳
      */
    BuyTime: number;
    /**
      * 截至时间戳
      */
    EndTime: number;
}
/**
 * ModifyExtension返回参数结构体
 */
export interface ModifyExtensionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 坐席用户信息
 */
export interface SeatUserInfo {
    /**
      * 坐席名称
      */
    Name: string;
    /**
      * 坐席邮箱
      */
    Mail: string;
    /**
      * 工号
注意：此字段可能返回 null，表示取不到有效值。
      */
    StaffNumber: string;
    /**
      * 坐席电话号码（带0086前缀）
      */
    Phone?: string;
    /**
      * 坐席昵称
      */
    Nick?: string;
    /**
      * 用户ID
      */
    UserId?: string;
    /**
      * 坐席关联的技能组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkillGroupNameList?: Array<string>;
}
/**
 * CreateStaff返回参数结构体
 */
export interface CreateStaffResponse {
    /**
      * 错误坐席列表及错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorStaffList: Array<ErrStaffItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSkillGroupInfoList返回参数结构体
 */
export interface DescribeSkillGroupInfoListResponse {
    /**
      * 技能组总数
      */
    TotalCount: number;
    /**
      * 技能组信息列表
      */
    SkillGroupList: Array<SkillGroupInfoItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeNumbers返回参数结构体
 */
export interface DescribeNumbersResponse {
    /**
      * 总数量
      */
    TotalCount?: number;
    /**
      * 号码列表
      */
    Numbers?: Array<NumberInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStaffInfoList返回参数结构体
 */
export interface DescribeStaffInfoListResponse {
    /**
      * 坐席用户总数
      */
    TotalCount: number;
    /**
      * 坐席用户信息列表
      */
    StaffList: Array<StaffInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UnbindNumberCallOutSkillGroup请求参数结构体
 */
export interface UnbindNumberCallOutSkillGroupRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 待解绑的号码
      */
    Number: string;
    /**
      * 待解绑的技能组Id列表
      */
    SkillGroupIds: Array<number>;
}
/**
 * CreateCarrierPrivilegeNumberApplicant请求参数结构体
 */
export interface CreateCarrierPrivilegeNumberApplicantRequest {
    /**
      * SdkAppId
      */
    SdkAppId: number;
    /**
      * 主叫号码，必须为实例中存在的号码，格式为0086xxxx（暂时只支持国内号码）
      */
    Callers: Array<string>;
    /**
      * 被叫号码，必须为实例中坐席绑定的手机号码，格式为0086xxxx（暂时只支持国内号码）
      */
    Callees: Array<string>;
    /**
      * 描述
      */
    Description?: string;
}
/**
 * 呼入技能组相关指标
 */
export interface CallInSkillGroupMetrics {
    /**
      * 技能组ID
      */
    SkillGroupId: number;
    /**
      * 数据指标
      */
    Metrics: CallInMetrics;
    /**
      * 技能组名称
      */
    Name: string;
}
/**
 * CreateExtension返回参数结构体
 */
export interface CreateExtensionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateUserSig请求参数结构体
 */
export interface CreateUserSigRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 用户 ID
      */
    Uid: string;
    /**
      * 有效期，单位秒，不超过 1 小时
      */
    ExpiredTime: number;
    /**
      * 用户签名数据
      */
    ClientData?: string;
}
/**
 * CreateCCCSkillGroup请求参数结构体
 */
export interface CreateCCCSkillGroupRequest {
    /**
      * 应用 ID（必填）
      */
    SdkAppId: number;
    /**
      * 技能组名称
      */
    SkillGroupName: string;
    /**
      * 技能组类型0-电话，1-在线，3-音频，4-视频
      */
    SkillGroupType: number;
    /**
      * 技能组接待人数上限（该技能组中1个座席可接待的人数上限）默认为1。1、若技能组类型为在线，则接待上限可设置为1及以上
2、若技能组类型为电话、音频、视频，则接待上线必须只能为1
      */
    MaxConcurrency?: number;
}
/**
 * DescribeAutoCalloutTask返回参数结构体
 */
export interface DescribeAutoCalloutTaskResponse {
    /**
      * 任务名
      */
    Name: string;
    /**
      * 任务描述
      */
    Description: string;
    /**
      * 任务起始时间戳
      */
    NotBefore: number;
    /**
      * 任务结束时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    NotAfter: number;
    /**
      * 主叫列表
      */
    Callers: Array<string>;
    /**
      * 被叫信息列表
      */
    Callees: Array<AutoCalloutTaskCalleeInfo>;
    /**
      * 任务使用的IvrId
      */
    IvrId: number;
    /**
      * 任务状态 0初始 1运行中 2已完成 3结束中 4已终止
      */
    State: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCCCSkillGroup返回参数结构体
 */
export interface CreateCCCSkillGroupResponse {
    /**
      * 技能组ID
      */
    SkillGroupId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTelSession请求参数结构体
 */
export interface DescribeTelSessionRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 会话 ID
      */
    SessionId: string;
}
/**
 * DescribeIMCdrs请求参数结构体
 */
export interface DescribeIMCdrsRequest {
    /**
      * 起始时间（必填），Unix 秒级时间戳
      */
    StartTimestamp: number;
    /**
      * 结束时间（必填），Unix 秒级时间戳
      */
    EndTimestamp: number;
    /**
      * 实例 ID（废弃）
      */
    InstanceId?: number;
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId?: number;
    /**
      * 返回记录条数，最大为100默认20
      */
    Limit?: number;
    /**
      * 返回记录偏移，默认为 0
      */
    Offset?: number;
    /**
      * 1为全媒体，2为文本客服，不填则查询全部
      */
    Type?: number;
}
/**
 * DescribeSkillGroupInfoList请求参数结构体
 */
export interface DescribeSkillGroupInfoListRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 分页尺寸，上限 100
      */
    PageSize: number;
    /**
      * 分页页码，从 0 开始
      */
    PageNumber: number;
    /**
      * 技能组ID，查询单个技能组时使用
      */
    SkillGroupId?: number;
    /**
      * 查询修改时间大于等于ModifiedTime的技能组时使用
      */
    ModifiedTime?: number;
    /**
      * 技能组名称
      */
    SkillGroupName?: string;
}
/**
 * CreateCarrierPrivilegeNumberApplicant返回参数结构体
 */
export interface CreateCarrierPrivilegeNumberApplicantResponse {
    /**
      * 申请单Id
      */
    ApplicantId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 外呼任务被叫信息
 */
export interface AutoCalloutTaskCalleeInfo {
    /**
      * 被叫号码
      */
    Callee: string;
    /**
      * 呼叫状态 0初始 1已接听 2未接听 3呼叫中 4待重试
      */
    State: number;
    /**
      * 会话ID列表
      */
    Sessions: Array<string>;
}
/**
 * 运营商白名单号码申请单
 */
export interface CarrierPrivilegeNumberApplicant {
    /**
      * 实例Id
      */
    SdkAppId?: number;
    /**
      * 申请单Id
      */
    ApplicantId?: number;
    /**
      * 主叫号码列表
      */
    Callers?: Array<string>;
    /**
      * 被叫号码列表
      */
    Callees?: Array<string>;
    /**
      * 描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description?: string;
    /**
      * 审批状态:1 待审核、2 通过、3 拒绝
      */
    State?: number;
    /**
      * 创建时间，unix时间戳(秒)
      */
    CreateTime?: number;
    /**
      * 更新时间，unix时间戳(秒)
      */
    UpdateTime?: number;
}
/**
 * 批量添加客服时，返回出错客服的像个信息
 */
export interface ErrStaffItem {
    /**
      * 坐席邮箱地址
      */
    StaffEmail: string;
    /**
      * 错误码
      */
    Code: string;
    /**
      * 错误描述
      */
    Message: string;
}
/**
 * PSTN 会话类型。
 */
export interface PSTNSession {
    /**
      * 会话 ID
      */
    SessionID: string;
    /**
      * 会话临时房间 ID
      */
    RoomID: string;
    /**
      * 主叫
      */
    Caller: string;
    /**
      * 被叫
      */
    Callee: string;
    /**
      * 开始时间，Unix 时间戳
      */
    StartTimestamp: number;
    /**
      * 振铃时间，Unix 时间戳
      */
    RingTimestamp: number;
    /**
      * 接听时间，Unix 时间戳
      */
    AcceptTimestamp: number;
    /**
      * 坐席邮箱
      */
    StaffEmail: string;
    /**
      * 坐席工号
      */
    StaffNumber: string;
    /**
      * 会话状态
ringing 振铃中
seatJoining  等待坐席接听
inProgress 进行中
finished 已完成
      */
    SessionStatus: string;
    /**
      * 会话呼叫方向， 0 呼入 | 1 - 呼出
      */
    Direction: number;
    /**
      * 转外线使用的号码（转外线主叫）
      */
    OutBoundCaller: string;
    /**
      * 转外线被叫
      */
    OutBoundCallee: string;
    /**
      * 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空
      */
    ProtectedCaller: string;
    /**
      * 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空
      */
    ProtectedCallee: string;
}
/**
 * DescribeStaffInfoList请求参数结构体
 */
export interface DescribeStaffInfoListRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 分页尺寸，上限 9999
      */
    PageSize: number;
    /**
      * 分页页码，从 0 开始
      */
    PageNumber: number;
    /**
      * 坐席账号，查询单个坐席时使用
      */
    StaffMail?: string;
    /**
      * 查询修改时间大于等于ModifiedTime的坐席时使用
      */
    ModifiedTime?: number;
    /**
      * 技能组ID
      */
    SkillGroupId?: number;
}
/**
 * 自动外呼任务列表项
 */
export interface AutoCalloutTaskInfo {
    /**
      * 任务名
      */
    Name: string;
    /**
      * 被叫数量
      */
    CalleeCount: number;
    /**
      * 主叫号码列表
      */
    Callers: Array<string>;
    /**
      * 起始时间戳
      */
    NotBefore: number;
    /**
      * 结束时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    NotAfter: number;
    /**
      * 任务使用的IvrId
      */
    IvrId: number;
    /**
      * 任务状态0初始 1运行中 2已完成 3结束中 4已结束
      */
    State: number;
    /**
      * 任务Id
      */
    TaskId: number;
}
/**
 * 技能组信息
 */
export interface SkillGroupInfoItem {
    /**
      * 技能组ID
      */
    SkillGroupId?: number;
    /**
      * 技能组名称
      */
    SkillGroupName?: string;
    /**
      * （废弃）类型：IM、TEL、ALL（全媒体）
      */
    Type?: string;
    /**
      * 会话分配策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    RoutePolicy?: string;
    /**
      * 会话分配是否优先上次服务坐席
注意：此字段可能返回 null，表示取不到有效值。
      */
    UsingLastSeat?: number;
    /**
      * 单客服最大并发数（电话类型默认1）
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxConcurrency?: number;
    /**
      * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifyTimestamp?: number;
    /**
      * 技能组类型0-电话，1-在线，3-音频，4-视频
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkillGroupType?: number;
}
/**
 * ResetExtensionPassword返回参数结构体
 */
export interface ResetExtensionPasswordResponse {
    /**
      * 重置后密码
      */
    Password: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyExtension请求参数结构体
 */
export interface ModifyExtensionRequest {
    /**
      * TCCC 实例应用 ID
      */
    SdkAppId: number;
    /**
      * 分机号
      */
    ExtensionId: string;
    /**
      * 分机名称
      */
    ExtensionName?: string;
    /**
      * 所属技能组列表
      */
    SkillGroupIds?: Array<number>;
    /**
      * 绑定坐席邮箱账号
      */
    Relation?: string;
}
/**
 * PSTN 会话信息
 */
export interface PSTNSessionInfo {
    /**
      * 会话 ID
      */
    SessionID: string;
    /**
      * 会话临时房间 ID
      */
    RoomID: string;
    /**
      * 主叫
      */
    Caller: string;
    /**
      * 被叫
      */
    Callee: string;
    /**
      * 开始时间，Unix 时间戳
      */
    StartTimestamp: string;
    /**
      * 接听时间，Unix 时间戳
      */
    AcceptTimestamp: string;
    /**
      * 坐席邮箱
      */
    StaffEmail: string;
    /**
      * 坐席工号
      */
    StaffNumber: string;
    /**
      * 坐席状态 inProgress 进行中
      */
    SessionStatus: string;
    /**
      * 会话呼叫方向， 0 呼入 | 1 - 呼出
      */
    Direction: number;
    /**
      * 振铃时间，Unix 时间戳
      */
    RingTimestamp: number;
    /**
      * 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空
      */
    ProtectedCaller: string;
    /**
      * 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空
      */
    ProtectedCallee: string;
}
/**
 * 单条消息
 */
export interface Message {
    /**
      * 消息类型
      */
    Type: string;
    /**
      * 消息内容
      */
    Content: string;
}
/**
 * DescribeNumbers请求参数结构体
 */
export interface DescribeNumbersRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 页数，从0开始
      */
    PageNumber?: number;
    /**
      * 分页大小，默认20
      */
    PageSize?: number;
}
/**
 * 话机信息
 */
export interface ExtensionInfo {
    /**
      * 实例ID
      */
    SdkAppId: number;
    /**
      * 分机全名
      */
    FullExtensionId: string;
    /**
      * 分机号
      */
    ExtensionId: string;
    /**
      * 所属技能组列表
      */
    SkillGroupId: string;
    /**
      * 分机名称
      */
    ExtensionName: string;
    /**
      * 创建时间
      */
    CreateTime: number;
    /**
      * 最后修改时间
      */
    ModifyTime: number;
    /**
      * 话机状态(0 离线、100 空闲、200忙碌）
      */
    Status: number;
    /**
      * 是否注册
      */
    Register: boolean;
    /**
      * 绑定坐席邮箱
      */
    Relation: string;
    /**
      * 绑定坐席名称
      */
    RelationName: string;
}
/**
 * BindNumberCallOutSkillGroup请求参数结构体
 */
export interface BindNumberCallOutSkillGroupRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 待绑定的号码
      */
    Number: string;
    /**
      * 待绑定的技能组Id列表
      */
    SkillGroupIds: Array<number>;
}
/**
 * ivr 按键信息
 */
export interface IVRKeyPressedElement {
    /**
      * 按键
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 按键关联的标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
}
/**
 * UnbindNumberCallOutSkillGroup返回参数结构体
 */
export interface UnbindNumberCallOutSkillGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 带有技能组优先级的坐席信息
 */
export interface StaffInfo {
    /**
      * 坐席名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 坐席邮箱
      */
    Mail: string;
    /**
      * 坐席电话号码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Phone: string;
    /**
      * 坐席昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Nick: string;
    /**
      * 坐席工号
注意：此字段可能返回 null，表示取不到有效值。
      */
    StaffNumber: string;
    /**
      * 所属技能组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkillGroupList: Array<SkillGroupItem>;
    /**
      * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastModifyTimestamp: number;
}
/**
 * CreateAutoCalloutTask返回参数结构体
 */
export interface CreateAutoCalloutTaskResponse {
    /**
      * 任务Id
      */
    TaskId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 电话话单信息
 */
export interface TelCdrInfo {
    /**
      * 主叫号码
      */
    Caller?: string;
    /**
      * 被叫号码
      */
    Callee?: string;
    /**
      * 呼叫发起时间戳，Unix 时间戳
      */
    Time?: number;
    /**
      * 呼入呼出方向 0 呼入 1 呼出
      */
    Direction?: number;
    /**
      * 通话时长
      */
    Duration?: number;
    /**
      * 录音信息
      */
    RecordURL?: string;
    /**
      * 坐席信息
      */
    SeatUser?: SeatUserInfo;
    /**
      * EndStatus与EndStatusString一一对应，具体枚举如下：

**场景	         EndStatus	EndStatusString	状态说明**

电话呼入&呼出	1	        ok	                        正常结束

电话呼入&呼出	0	        error	                系统错误

电话呼入	             102	        ivrGiveUp	        IVR 期间用户放弃

电话呼入	             103	        waitingGiveUp	       会话排队期间用户放弃

电话呼入	             104	        ringingGiveUp	       会话振铃期间用户放弃

电话呼入	             105	        noSeatOnline	       无坐席在线

电话呼入              106	       notWorkTime	       非工作时间

电话呼入	            107	       ivrEnd	               IVR 后直接结束

电话呼入	            100	      CallinBlockedContact  呼入黑名单

电话呼出               2	              unconnected	未接通
                         
电话呼出             201            unknown	未知状态

电话呼出            203	    userReject	拒接挂断

电话呼出	          204	    powerOff	关机

电话呼出           205            numberNotExist	空号

电话呼出	         206	           busy	通话中

电话呼出   	 207	           outOfCredit	欠费

电话呼出	         208	           operatorError	运营商线路异常

电话呼出         	209	           callerCancel	主叫取消

电话呼出	        210	           notInService	不在服务区

      */
    EndStatus?: number;
    /**
      * 技能组名称
      */
    SkillGroup?: string;
    /**
      * 主叫归属地
      */
    CallerLocation?: string;
    /**
      * IVR 阶段耗时
注意：此字段可能返回 null，表示取不到有效值。
      */
    IVRDuration?: number;
    /**
      * 振铃时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    RingTimestamp?: number;
    /**
      * 接听时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    AcceptTimestamp?: number;
    /**
      * 结束时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndedTimestamp?: number;
    /**
      * IVR 按键信息 ，e.g. ["1","2","3"]
注意：此字段可能返回 null，表示取不到有效值。
      */
    IVRKeyPressed?: Array<string>;
    /**
      * 挂机方 seat 坐席 user 用户
注意：此字段可能返回 null，表示取不到有效值。
      */
    HungUpSide?: string;
    /**
      * 服务参与者列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServeParticipants?: Array<ServeParticipant>;
    /**
      * 技能组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkillGroupId?: number;
    /**
      * EndStatus与EndStatusString一一对应，具体枚举如下：

**场景	         EndStatus	EndStatusString	状态说明**

电话呼入&呼出	1	        ok	                        正常结束

电话呼入&呼出	0	        error	                系统错误

电话呼入	             102	        ivrGiveUp	        IVR 期间用户放弃

电话呼入	             103	        waitingGiveUp	       会话排队期间用户放弃

电话呼入	             104	        ringingGiveUp	       会话振铃期间用户放弃

电话呼入	             105	        noSeatOnline	       无坐席在线

电话呼入              106	       notWorkTime	       非工作时间

电话呼入	            107	       ivrEnd	               IVR 后直接结束

电话呼入	            100	      CallinBlockedContact  呼入黑名单

电话呼出               2	              unconnected	未接通
                         
电话呼出             201            unknown	未知状态
听
电话呼出            203	    userReject	拒接挂断

电话呼出	          204	    powerOff	关机

电话呼出           205            numberNotExist	空号

电话呼出	         206	           busy	通话中

电话呼出   	 207	           outOfCredit	欠费

电话呼出	         208	           operatorError	运营商线路异常

电话呼出         	209	           callerCancel	主叫取消

电话呼出	        210	           notInService	不在服务区


注意：此字段可能返回 null，表示取不到有效值。
      */
    EndStatusString?: string;
    /**
      * 会话开始时间戳，UNIX 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTimestamp?: number;
    /**
      * 进入排队时间，Unix 秒级时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    QueuedTimestamp?: number;
    /**
      * 后置IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]）
注意：此字段可能返回 null，表示取不到有效值。
      */
    PostIVRKeyPressed?: Array<IVRKeyPressedElement>;
    /**
      * 排队技能组Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    QueuedSkillGroupId?: number;
    /**
      * 会话 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionId?: string;
    /**
      * 主叫号码保护ID，开启号码保护映射功能时有效，且Caller字段置空
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProtectedCaller?: string;
    /**
      * 被叫号码保护ID，开启号码保护映射功能时有效，且Callee字段置空
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProtectedCallee?: string;
    /**
      * 客户自定义数据（User-to-User Interface）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Uui?: string;
    /**
      * IVR按键信息（e.g. [{"Key":"1","Label":"非常满意"}]）
注意：此字段可能返回 null，表示取不到有效值。
      */
    IVRKeyPressedEx?: Array<IVRKeyPressedElement>;
    /**
      * 获取录音ASR文本信息地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    AsrUrl?: string;
    /**
      * 录音转存第三方COS地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomRecordURL?: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark?: string;
    /**
      * 排队技能组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    QueuedSkillGroupName?: string;
    /**
      * 通话中语音留言录音URL
注意：此字段可能返回 null，表示取不到有效值。
      */
    VoicemailRecordURL?: Array<string>;
}
/**
 * 号码信息
 */
export interface NumberInfo {
    /**
      * 号码
      */
    Number?: string;
    /**
      * 绑定的外呼技能组
      */
    CallOutSkillGroupIds?: Array<number>;
}
/**
 * DeleteStaff请求参数结构体
 */
export interface DeleteStaffRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 待删除客服邮箱列表
      */
    StaffList: Array<string>;
}
/**
 * 呼入实时指标
 */
export interface CallInMetrics {
    /**
      * IVR驻留数量
      */
    IvrCount: number;
    /**
      * 排队中数量
      */
    QueueCount: number;
    /**
      * 振铃中数量
      */
    RingCount: number;
    /**
      * 接通中数量
      */
    AcceptCount: number;
    /**
      * 客服转接外线中数量
      */
    TransferOuterCount: number;
    /**
      * 最大排队时长
      */
    MaxQueueDuration: number;
    /**
      * 平均排队时长
      */
    AvgQueueDuration: number;
    /**
      * 最大振铃时长
      */
    MaxRingDuration: number;
    /**
      * 平均振铃时长
      */
    AvgRingDuration: number;
    /**
      * 最大接通时长
      */
    MaxAcceptDuration: number;
    /**
      * 平均接通时长
      */
    AvgAcceptDuration: number;
}
/**
 * DescribeCCCBuyInfoList请求参数结构体
 */
export interface DescribeCCCBuyInfoListRequest {
    /**
      * 应用ID列表，不传时查询所有应用
      */
    SdkAppIds?: Array<number>;
}
/**
 * DescribeTelCallInfo请求参数结构体
 */
export interface DescribeTelCallInfoRequest {
    /**
      * 起始时间戳，Unix 时间戳
      */
    StartTimeStamp: number;
    /**
      * 结束时间戳，Unix 时间戳，查询时间范围最大为90天
      */
    EndTimeStamp: number;
    /**
      * 应用ID列表，多个ID时，返回值为多个ID使用总和
      */
    SdkAppIdList: Array<number>;
}
/**
 * 变量
 */
export interface Variable {
    /**
      * 变量名
      */
    Key: string;
    /**
      * 变量值
      */
    Value: string;
}
/**
 * 呼入线路维度相关指标
 */
export interface CallInNumberMetrics {
    /**
      * 线路号码
      */
    Number: string;
    /**
      * 线路相关指标
      */
    Metrics: CallInMetrics;
    /**
      * 所属技能组相关指标
      */
    SkillGroupMetrics: Array<CallInSkillGroupMetrics>;
}
/**
 * CreateExtension请求参数结构体
 */
export interface CreateExtensionRequest {
    /**
      * TCCC 实例应用 ID
      */
    SdkAppId: number;
    /**
      * 分机号
      */
    ExtensionId: string;
    /**
      * 分机名称
      */
    ExtensionName: string;
}
/**
 * CreateAutoCalloutTask请求参数结构体
 */
export interface CreateAutoCalloutTaskRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 任务起始时间戳，Unix 秒级时间戳
      */
    NotBefore: number;
    /**
      * 被叫号码列表
      */
    Callees: Array<string>;
    /**
      * 主叫号码列表
      */
    Callers: Array<string>;
    /**
      * 呼叫使用的Ivr
      */
    IvrId: number;
    /**
      * 任务名
      */
    Name?: string;
    /**
      * 任务描述
      */
    Description?: string;
    /**
      * 任务停止时间戳，Unix 秒级时间戳
      */
    NotAfter?: number;
    /**
      * 最大尝试次数
      */
    Tries?: number;
    /**
      * 自定义变量（仅高级版支持）
      */
    Variables?: Array<Variable>;
}
/**
 * 筛选条件
 */
export interface Filter {
    /**
      * 筛选字段名
      */
    Name: string;
    /**
      * 筛选条件值
      */
    Values: Array<string>;
}
/**
 * UnbindStaffSkillGroupList请求参数结构体
 */
export interface UnbindStaffSkillGroupListRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 客服邮箱
      */
    StaffEmail: string;
    /**
      * 解绑技能组列表
      */
    SkillGroupList: Array<number>;
}
/**
 * BindNumberCallOutSkillGroup返回参数结构体
 */
export interface BindNumberCallOutSkillGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCallOutSession请求参数结构体
 */
export interface CreateCallOutSessionRequest {
    /**
      * 应用 ID
      */
    SdkAppId: number;
    /**
      * 客服用户 ID，一般为客服邮箱
      */
    UserId: string;
    /**
      * 被叫号码，须带 0086 前缀
      */
    Callee: string;
    /**
      * 主叫号码，须带 0086 前缀
      */
    Caller?: string;
    /**
      * 是否强制使用手机外呼，当前只支持 true，若为 true 请确保已配置白名单
      */
    IsForceUseMobile?: boolean;
    /**
      * 自定义数据，长度限制 1024 字节
      */
    Uui?: string;
}
/**
 * StopAutoCalloutTask返回参数结构体
 */
export interface StopAutoCalloutTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 技能组信息
 */
export interface SkillGroupItem {
    /**
      * 技能组ID
      */
    SkillGroupId: number;
    /**
      * 技能组名称
      */
    SkillGroupName: string;
    /**
      * 优先级
      */
    Priority: number;
    /**
      * 类型：IM、TEL、ALL（全媒体）
      */
    Type: string;
}
/**
 * 聊天消息
 */
export interface MessageBody {
    /**
      * 消息时间戳
      */
    Timestamp: number;
    /**
      * 发消息的用户ID
      */
    From: string;
    /**
      * 消息列表
      */
    Messages: Array<Message>;
}
/**
 * 号码购买信息
 */
export interface PhoneNumBuyInfo {
    /**
      * 电话号码
      */
    PhoneNum: string;
    /**
      * 号码类型，0-固话|1-虚商号码|2-运营商号码|3-400号码
      */
    Type: number;
    /**
      * 号码呼叫类型，1-呼入|2-呼出|3-呼入呼出
      */
    CallType: number;
    /**
      * 购买时间戳
      */
    BuyTime: number;
    /**
      * 截至时间戳
      */
    EndTime: number;
    /**
      * 号码状态，1正常|2欠费停用|4管理员停用|5违规停用
      */
    State: number;
}
/**
 * DescribeCCCBuyInfoList返回参数结构体
 */
export interface DescribeCCCBuyInfoListResponse {
    /**
      * 应用总数
      */
    TotalCount: number;
    /**
      * 应用购买信息列表
      */
    SdkAppIdBuyList: Array<SdkAppIdBuyInfo>;
    /**
      * 套餐包购买信息列表
      */
    PackageBuyList: Array<PackageBuyInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 生效运营商白名单号码
 */
export interface ActiveCarrierPrivilegeNumber {
    /**
      * 实例Id
      */
    SdkAppId?: number;
    /**
      * 主叫号码
      */
    Caller?: string;
    /**
      * 被叫号码
      */
    Callee?: string;
    /**
      * 生效unix时间戳(秒)
      */
    CreateTime?: number;
}
/**
 * UnbindStaffSkillGroupList返回参数结构体
 */
export interface UnbindStaffSkillGroupListResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteExtension返回参数结构体
 */
export interface DeleteExtensionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindStaffSkillGroupList请求参数结构体
 */
export interface BindStaffSkillGroupListRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 坐席邮箱
      */
    StaffEmail: string;
    /**
      * 绑定技能组列表
      */
    SkillGroupList: Array<number>;
}
/**
 * DescribePSTNActiveSessionList请求参数结构体
 */
export interface DescribePSTNActiveSessionListRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 数据偏移
      */
    Offset: number;
    /**
      * 返回的数据条数，最大 25
      */
    Limit: number;
}
/**
 * DescribeCallInMetrics返回参数结构体
 */
export interface DescribeCallInMetricsResponse {
    /**
      * 时间戳
      */
    Timestamp?: number;
    /**
      * 总体指标
      */
    TotalMetrics?: CallInMetrics;
    /**
      * 线路维度指标
注意：此字段可能返回 null，表示取不到有效值。
      */
    NumberMetrics?: Array<CallInNumberMetrics>;
    /**
      * 技能组维度指标
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkillGroupMetrics?: Array<CallInSkillGroupMetrics>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeActiveCarrierPrivilegeNumber返回参数结构体
 */
export interface DescribeActiveCarrierPrivilegeNumberResponse {
    /**
      * 总数量
      */
    TotalCount?: number;
    /**
      * 生效列表
      */
    ActiveCarrierPrivilegeNumbers?: Array<ActiveCarrierPrivilegeNumber>;
    /**
      * 待审核单号
      */
    PendingApplicantIds?: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * IM满意度
 */
export interface IMSatisfaction {
    /**
      * 满意度值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: number;
    /**
      * 满意度标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
}
/**
 * DescribeTelCdr返回参数结构体
 */
export interface DescribeTelCdrResponse {
    /**
      * 话单记录总数
      */
    TotalCount: number;
    /**
      * 话单记录
      */
    TelCdrs: Array<TelCdrInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStaffStatusMetrics请求参数结构体
 */
export interface DescribeStaffStatusMetricsRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 筛选坐席列表，默认不传返回全部坐席信息
      */
    StaffList?: Array<string>;
    /**
      * 筛选技能组ID列表
      */
    GroupIdList?: Array<number>;
    /**
      * 筛选坐席状态列表
      */
    StatusList?: Array<string>;
}
/**
 * DeleteStaff返回参数结构体
 */
export interface DeleteStaffResponse {
    /**
      * 无法删除的状态为在线的客服列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    OnlineStaffList: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 坐席状态补充信息
 */
export interface StaffStatusExtra {
    /**
      * im - 文本 | tel - 电话 | all - 全媒体
      */
    Type: string;
    /**
      * in - 呼入 | out - 呼出
      */
    Direct: string;
}
/**
 * CreateStaff请求参数结构体
 */
export interface CreateStaffRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 客服信息，个数不超过 10
      */
    Staffs: Array<SeatUserInfo>;
    /**
      * 是否发送密码邮件，默认true
      */
    SendPassword?: boolean;
}
/**
 * DescribeChatMessages返回参数结构体
 */
export interface DescribeChatMessagesResponse {
    /**
      * 总记录数
      */
    TotalCount?: number;
    /**
      * 消息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Messages?: Array<MessageBody>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 应用购买信息
 */
export interface SdkAppIdBuyInfo {
    /**
      * 应用ID
      */
    SdkAppId: number;
    /**
      * 应用名称
      */
    Name: string;
    /**
      * 坐席购买数（还在有效期内）
      */
    StaffBuyNum: number;
    /**
      * 坐席购买列表 （还在有效期内）
      */
    StaffBuyList: Array<StaffBuyInfo>;
    /**
      * 号码购买列表
      */
    PhoneNumBuyList: Array<PhoneNumBuyInfo>;
}
/**
 * DescribePSTNActiveSessionList返回参数结构体
 */
export interface DescribePSTNActiveSessionListResponse {
    /**
      * 列表总条数
      */
    Total: number;
    /**
      * 列表内容
      */
    Sessions: Array<PSTNSessionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文本会话服务记录信息
 */
export interface IMCdrInfo {
    /**
      * 服务记录ID
      */
    Id: string;
    /**
      * 服务时长秒数
      */
    Duration: number;
    /**
      * 结束状态
0 异常结束
1 正常结束
3 无坐席在线
17 坐席放弃接听
100 黑名单
101 坐席手动转接
102 IVR阶段放弃
108 用户超时自动结束
      */
    EndStatus: number;
    /**
      * 用户昵称
      */
    Nickname: string;
    /**
      * 服务类型 1为全媒体，2为文本客服
      */
    Type: number;
    /**
      * 客服ID
      */
    StaffId: string;
    /**
      * 服务时间戳
      */
    Timestamp: number;
    /**
      * 会话ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SessionId: string;
    /**
      * 技能组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkillGroupId: string;
    /**
      * 技能组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    SkillGroupName: string;
    /**
      * 满意度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Satisfaction: IMSatisfaction;
}
/**
 * DescribeAutoCalloutTasks请求参数结构体
 */
export interface DescribeAutoCalloutTasksRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 分页大小
      */
    PageSize: number;
    /**
      * 页数
      */
    PageNumber: number;
}
/**
 * DescribeChatMessages请求参数结构体
 */
export interface DescribeChatMessagesRequest {
    /**
      * 实例 ID（废弃）
      */
    InstanceId?: number;
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId?: number;
    /**
      * 服务记录ID（废弃）
      */
    CdrId?: string;
    /**
      * 返回记录条数，最大为100 默认20
      */
    Limit?: number;
    /**
      * 返回记录偏移，默认为 0
      */
    Offset?: number;
    /**
      * 1为从早到晚，2为从晚到早，默认为2
      */
    Order?: number;
    /**
      * 服务记录 SessionID（必填）
      */
    SessionId?: string;
}
/**
 * DescribeTelSession返回参数结构体
 */
export interface DescribeTelSessionResponse {
    /**
      * 会话信息
      */
    Session: PSTNSession;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyStaff返回参数结构体
 */
export interface ModifyStaffResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStaffStatusMetrics返回参数结构体
 */
export interface DescribeStaffStatusMetricsResponse {
    /**
      * 坐席状态实时信息
      */
    Metrics?: Array<StaffStatusMetrics>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCarrierPrivilegeNumberApplicants返回参数结构体
 */
export interface DescribeCarrierPrivilegeNumberApplicantsResponse {
    /**
      * 筛选出的总申请单数量
      */
    TotalCount?: number;
    /**
      * 申请单列表
      */
    Applicants?: Array<CarrierPrivilegeNumberApplicant>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * HangUpCall返回参数结构体
 */
export interface HangUpCallResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindStaffSkillGroupList返回参数结构体
 */
export interface BindStaffSkillGroupListResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExtensions请求参数结构体
 */
export interface DescribeExtensionsRequest {
    /**
      * TCCC 实例应用 ID
      */
    SdkAppId: number;
    /**
      * 分页页号（从0开始）
      */
    PageNumber: number;
    /**
      * 筛选分机号列表
      */
    ExtensionIds?: Array<string>;
    /**
      * 分页大小
      */
    PageSize?: number;
    /**
      * 模糊查询字段（模糊查询分机号、分机名称、坐席邮箱、坐席名称）
      */
    FuzzingKeyWord?: string;
    /**
      * 是否需要返回话机当前状态
      */
    IsNeedStatus?: boolean;
}
/**
 * DescribeProtectedTelCdr请求参数结构体
 */
export interface DescribeProtectedTelCdrRequest {
    /**
      * 起始时间戳，Unix 秒级时间戳
      */
    StartTimeStamp: number;
    /**
      * 结束时间戳，Unix 秒级时间戳
      */
    EndTimeStamp: number;
    /**
      * 应用 ID，可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 分页尺寸，上限 100
      */
    PageSize: number;
    /**
      * 分页页码，从 0 开始
      */
    PageNumber: number;
}
/**
 * CreateSDKLoginToken请求参数结构体
 */
export interface CreateSDKLoginTokenRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 坐席账号。
      */
    SeatUserId: string;
}
/**
 * DescribeActiveCarrierPrivilegeNumber请求参数结构体
 */
export interface DescribeActiveCarrierPrivilegeNumberRequest {
    /**
      * 实例Id
      */
    SdkAppId: number;
    /**
      * 默认0
      */
    PageNumber?: number;
    /**
      * 默认10，最大100
      */
    PageSize?: number;
    /**
      * 筛选条件 Name支持PhoneNumber(按号码模糊查找)
      */
    Filters?: Array<Filter>;
}
/**
 * 坐席购买信息
 */
export interface StaffBuyInfo {
    /**
      * 购买坐席数量
      */
    Num: number;
    /**
      * 购买时间戳
      */
    BuyTime: number;
    /**
      * 截至时间戳
      */
    EndTime: number;
}
/**
 * DescribeCallInMetrics请求参数结构体
 */
export interface DescribeCallInMetricsRequest {
    /**
      * 应用 ID（必填），可以查看 https://console.cloud.tencent.com/ccc
      */
    SdkAppId: number;
    /**
      * 是否返回技能组维度信息，默认“是”
      */
    EnabledSkillGroup?: boolean;
    /**
      * 是否返回线路维度信息，默认“否”
      */
    EnabledNumber?: boolean;
    /**
      * 筛选技能组列表
      */
    GroupIdList?: Array<number>;
}
/**
 * DescribeExtension返回参数结构体
 */
export interface DescribeExtensionResponse {
    /**
      * 分机号
      */
    ExtensionId: string;
    /**
      * 域名
      */
    ExtensionDomain: string;
    /**
      * 注册密码
      */
    Password: string;
    /**
      * 代理服务器地址
      */
    OutboundProxy: string;
    /**
      * 传输协议
      */
    Transport: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
