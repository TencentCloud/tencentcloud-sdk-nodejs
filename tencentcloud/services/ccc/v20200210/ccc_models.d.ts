/**
 * DescribeTelCdr请求参数结构体
 */
export interface DescribeTelCdrRequest {
    /**
      * 起始时间戳，Unix 时间戳
      */
    StartTimeStamp: number;
    /**
      * 结束时间戳，Unix 时间戳
      */
    EndTimeStamp: number;
    /**
      * 返回记录条数，上限 100
      */
    Limit: number;
    /**
      * 偏移量
      */
    Offset: number;
    /**
      * 实例 ID
      */
    InstanceId?: number;
    /**
      * 应用ID。
      */
    SdkAppId?: number;
}
/**
 * DescribeTelCdr返回参数结构体
 */
export interface DescribeTelCdrResponse {
    /**
      * 话单记录总数
      */
    TotalCount?: number;
    /**
      * 话单记录
      */
    TelCdrs?: Array<TelCdrInfo>;
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
 * DescribeChatMessages请求参数结构体
 */
export interface DescribeChatMessagesRequest {
    /**
      * 服务记录ID
      */
    CdrId: string;
    /**
      * 实例ID
      */
    InstanceId?: number;
    /**
      * 应用ID
      */
    SdkAppId?: number;
    /**
      * 返回记录条数 最大为100默认20
      */
    Limit?: number;
    /**
      * 返回记录偏移 默认为0
      */
    Offset?: number;
    /**
      * 1为从早到晚，2为从晚到早，默认为2
      */
    Order?: number;
}
/**
 * CreateSDKLoginToken返回参数结构体
 */
export interface CreateSDKLoginTokenResponse {
    /**
      * SDK 登录 Token。
      */
    Token?: string;
    /**
      * 过期时间戳，Unix 时间戳。
      */
    ExpiredTime?: number;
    /**
      * SDK 加载路径会随着 SDK 的发布而变动。
      */
    SdkURL?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeIMCdrs请求参数结构体
 */
export interface DescribeIMCdrsRequest {
    /**
      * 起始时间
      */
    StartTimestamp: number;
    /**
      * 结束时间
      */
    EndTimestamp: number;
    /**
      * 实例ID
      */
    InstanceId?: number;
    /**
      * 应用ID
      */
    SdkAppId?: number;
    /**
      * 返回记录条数 最大为100默认20
      */
    Limit?: number;
    /**
      * 返回记录偏移 默认为0
      */
    Offset?: number;
    /**
      * 1为全媒体，2为文本客服，不填则查询全部
      */
    Type?: number;
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
 * CreateSDKLoginToken请求参数结构体
 */
export interface CreateSDKLoginTokenRequest {
    /**
      * 应用ID。
      */
    SdkAppId: number;
    /**
      * 坐席账号。
      */
    SeatUserId: string;
}
/**
 * CreateStaff返回参数结构体
 */
export interface CreateStaffResponse {
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
    Caller: string;
    /**
      * 被叫号码
      */
    Callee: string;
    /**
      * 呼叫发起时间戳，Unix 时间戳
      */
    Time: number;
    /**
      * 呼入呼出方向 0 呼入 1 呼出
      */
    Direction: number;
    /**
      * 通话时长
      */
    Duration: number;
    /**
      * 录音信息
      */
    RecordURL: string;
    /**
      * 坐席信息
      */
    SeatUser: SeatUserInfo;
    /**
      * 结束状态 0 未知 1 正常通话 2 未接通
      */
    EndStatus: number;
    /**
      * 技能组
      */
    SkillGroup: string;
    /**
      * 主叫归属地
      */
    CallerLocation: string;
}
/**
 * 坐席用户信息
 */
export interface SeatUserInfo {
    /**
      * 坐席名称
      */
    Name?: string;
    /**
      * 坐席邮箱
      */
    Mail?: string;
    /**
      * 坐席电话号码
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
    /**
      * 工号
注意：此字段可能返回 null，表示取不到有效值。
      */
    StaffNumber?: string;
}
/**
 * CreateStaff请求参数结构体
 */
export interface CreateStaffRequest {
    /**
      * 应用ID
      */
    SdkAppId: number;
    /**
      * 客服信息，个数不超过 10
      */
    Staffs: Array<SeatUserInfo>;
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
      */
    Messages?: Array<MessageBody>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * 全媒体服务记录信息
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
}
