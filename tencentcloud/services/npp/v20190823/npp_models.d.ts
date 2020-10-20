/**
 * DescribeCallBackStatus请求参数结构体
 */
export interface DescribeCallBackStatusRequest {
    /**
      * 业务appid
      */
    BizAppId: string;
    /**
      * 回拨请求响应中返回的 callId
      */
    CallId: string;
    /**
      * 主叫号码
      */
    Src?: string;
    /**
      * 被叫号码
      */
    Dst?: string;
    /**
      * 通话最后状态：0：未知状态 1：主叫响铃中 2：主叫接听 3：被叫响铃中 4：正常通话中 5：通话结束
      */
    CallStatus?: string;
}
/**
 * DescribeCallBackCdr请求参数结构体
 */
export interface DescribeCallBackCdrRequest {
    /**
      * 业务appid
      */
    BizAppId: string;
    /**
      * 回拨请求响应中返回的 callId，按 callId 查询该话单详细信息
      */
    CallId?: string;
    /**
      * 查询主叫用户产生的呼叫话单，如填空表示拉取这个时间段所有话单
      */
    Src?: string;
    /**
      * 话单开始时间戳
      */
    StartTimeStamp?: string;
    /**
      * 话单结束时间戳
      */
    EndTimeStamp?: string;
}
/**
 * CreateCallBack请求参数结构体
 */
export interface CreateCallBackRequest {
    /**
      * 业务appid
      */
    BizAppId: string;
    /**
      * 主叫号码(必须为 11 位手机号，号码前加 0086，如 008613631686024)
      */
    Src: string;
    /**
      * 被叫号码(必须为 11 位手机或固话号码,号码前加 0086，如008613631686024，固话如：0086075586013388)
      */
    Dst: string;
    /**
      * 主叫显示系统分配的固话号码，如不填显示随机分配号码
      */
    SrcDisplayNum?: string;
    /**
      * 被叫显示系统分配的固话号码，如不填显示随机分配号码
      */
    DstDisplayNum?: string;
    /**
      * 是否录音，0 表示不录音，1 表示录音。默认为不录音
      */
    Record?: string;
    /**
      * 允许最大通话时间，不填默认为 30 分钟（单位：分钟）
      */
    MaxAllowTime?: string;
    /**
      * 主叫发起呼叫状态：1 被叫发起呼叫状态：256 主叫响铃状态：2 被叫响铃状态：512 主叫接听状态：4 被叫接听状态：1024 主叫拒绝接听状态：8 被叫拒绝接听状态：2048 主叫正常挂机状态：16 被叫正常挂机状态：4096 主叫呼叫异常：32 被叫呼叫异常：8192
例如：当值为 0：表示所有状态不需要推送；当值为 4：表示只要推送主叫接听状态；当值为 16191：表示所有状态都需要推送(上面所有值和)
      */
    StatusFlag?: string;
    /**
      * 状态回调通知地址，正式环境可以配置默认推送地址
      */
    StatusUrl?: string;
    /**
      * 话单回调通知地址，正式环境可以配置默认推送地址
      */
    HangupUrl?: string;
    /**
      * 录单 URL 回调通知地址，正式环境可以配置默认推送地址
      */
    RecordUrl?: string;
    /**
      * 业务应用 key，业务用该 key 可以区分内部业务或客户产品等，该 key 需保证在该 appId 下全局唯一，最大长度不超过 64 个字节，bizId 只能包含数字、字母。
      */
    BizId?: string;
    /**
      * 最后一次呼叫 callId，带上该字段以后，平台会参考该 callId 分配线路，优先不分配该 callId 通话线路（注：谨慎使用，这个会影响线路调度）
      */
    LastCallId?: string;
    /**
      * 结构体，主叫呼叫预处理操作，根据不同操作确认是否呼通被叫。如需使用，本结构体需要与 keyList 结构体配合使用，此时这两个参数都为必填项
      */
    PreCallerHandle?: RreCallerHandle;
    /**
      * 订单 ID，最大长度不超过64个字节，对于一些有订单状态 App 相关应用使用（如达人帮接入 App 应用)，该字段只在帐单中带上，其它回调不附带该字段
      */
    OrderId?: string;
}
/**
 * DeleteCallBack请求参数结构体
 */
export interface DeleteCallBackRequest {
    /**
      * 业务appid
      */
    BizAppId: string;
    /**
      * 回拨请求响应中返回的 callId
      */
    CallId: string;
    /**
      * 0：不管通话状态直接拆线（默认) 1：主叫响铃以后状态不拆线 2：主叫接听以后状态不拆线 3：被叫响铃以后状态不拆线 4：被叫接听以后状态不拆线
      */
    CancelFlag?: string;
}
/**
 * GetVirtualNum返回参数结构体
 */
export interface GetVirtualNumResponse {
    /**
      * 错误码
      */
    ErrorCode?: string;
    /**
      * 绑定 ID，该 ID 全局唯一
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindId?: string;
    /**
      * 中间号还剩引用计数，如果计数为 0 会解绑
注意：此字段可能返回 null，表示取不到有效值。
      */
    RefNum?: string;
    /**
      * 中间号
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirtualNum?: string;
    /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Msg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DelVirtualNum返回参数结构体
 */
export interface DelVirtualNumResponse {
    /**
      * 错误码
      */
    ErrorCode?: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Msg?: string;
    /**
      * 绑定 ID，该 ID 全局唯一
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindId?: string;
    /**
      * 中间号还剩引用计数，如果计数为 0 会解绑
注意：此字段可能返回 null，表示取不到有效值。
      */
    RefLeftNum?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 话单详情
 */
export interface CallBackCdr {
    /**
      * 呼叫通话 ID
      */
    CallId: string;
    /**
      * 主叫号码
      */
    Src: string;
    /**
      * 被叫号码
      */
    Dst: string;
    /**
      * 主叫呼叫开始时间
      */
    StartSrcCallTime: string;
    /**
      * 主叫响铃开始时间
      */
    StartSrcRingTime: string;
    /**
      * 主叫接听时间
      */
    SrcAcceptTime: string;
    /**
      * 被叫呼叫开始时间
      */
    StartDstCallTime: string;
    /**
      * 被叫响铃开始时间
      */
    StartDstRingTime: string;
    /**
      * 被叫接听时间
      */
    DstAcceptTime: string;
    /**
      * 用户挂机通话结束时间
      */
    EndCallTime: string;
    /**
      * 通话最后状态：0：未知状态 1：正常通话 2：主叫未接 3：主叫接听，被叫未接 4：主叫未接通 5：被叫未接通
      */
    CallEndStatus: string;
    /**
      * 通话计费时间
      */
    Duration: string;
    /**
      * 录音 URL，如果不录音或录音失败，该值为空
      */
    RecordUrl: string;
    /**
      * 通话类型(1: VOIP 2:IP TO PSTN 3: PSTN TO PSTN)，如果话单中没有该字段，默认值为回拨 3 (PSTN TO PSTN)
注意：此字段可能返回 null，表示取不到有效值。
      */
    CallType: string;
    /**
      * 同回拨请求中的 bizId，如果回拨请求中带 bizId 会有该字段返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizId: string;
    /**
      * 订单 ID,最大长度不超过 64 个字节，对于一些有订单状态 App 相关应用（如达人帮接入 App 应用)，该字段只在帐单中带上，其它回调不附带该字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrderId: string;
}
/**
 * 结构体，主叫呼叫预处理操作，根据不同操作确认是否呼通被叫。如需使用，本结构体需要与 keyList 结构体配合使用，此时这两个参数都为必填项
 */
export interface RreCallerHandle {
    /**
      * 呼叫主叫以后，给主叫用户的语音提示，播放该提示时用户所有按键无效
      */
    ReadPrompt: string;
    /**
      * 可中断提示，播放该提示时，用户可以按键
      */
    InterruptPrompt: string;
    /**
      * 对应按键操作,如果没有结构体里定义按键操作用户按键以后都从 interruptPrompt 重新播放
      */
    KeyList: Array<KeyList>;
    /**
      * 最多重复播放次数，超过该次数拆线
      */
    RepeatTimes: string;
    /**
      * 用户按键回调通知地址，如果为空不回调
      */
    KeyPressUrl: string;
    /**
      * 提示音男声女声：1女声，2男声。默认女声
      */
    PromptGender: string;
}
/**
 * DescribeCallerDisplayList请求参数结构体
 */
export interface DescribeCallerDisplayListRequest {
    /**
      * 业务appid
      */
    BizAppId: string;
}
/**
 * DescribeCallerDisplayList返回参数结构体
 */
export interface DescribeCallerDisplayListResponse {
    /**
      * appid
注意：此字段可能返回 null，表示取不到有效值。
      */
    AppId?: string;
    /**
      * 主叫显号号码集合，codeList[0...*] 结构体数组，如果业务是主被叫互显，该字段为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeList?: Array<CallBackPhoneCode>;
    /**
      * 错误码
      */
    ErrorCode?: string;
    /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Msg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 回拨号码字段
 */
export interface CallBackPhoneCode {
    /**
      * 国家码，统一以 00 开头
      */
    Nation: string;
    /**
      * 号码（固话区号前加 0，如075586013388）
      */
    Phone: string;
}
/**
 * CreateCallBack返回参数结构体
 */
export interface CreateCallBackResponse {
    /**
      * 话单id
注意：此字段可能返回 null，表示取不到有效值。
      */
    CallId?: string;
    /**
      * 主叫显示系统分配的固话号码
注意：此字段可能返回 null，表示取不到有效值。
      */
    SrcDisplayNum?: string;
    /**
      * 被叫显示系统分配的固话号码
注意：此字段可能返回 null，表示取不到有效值。
      */
    DstDisplayNum?: string;
    /**
      * 错误码
      */
    ErrorCode?: string;
    /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Msg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DelVirtualNum请求参数结构体
 */
export interface DelVirtualNumRequest {
    /**
      * 业务appid
      */
    BizAppId: string;
    /**
      * 双方号码 + 中间号绑定 ID，该 ID 全局唯一
      */
    BindId: string;
    /**
      * 应用二级业务 ID，bizId 需保证在该 appId 下全局唯一，最大长度不超过 16 个字节。
      */
    BizId?: string;
}
/**
 * GetVirtualNum请求参数结构体
 */
export interface GetVirtualNumRequest {
    /**
      * 业务appid
      */
    BizAppId: string;
    /**
      * 被叫号码(号码前加 0086，如 008613631686024)
      */
    Dst: string;
    /**
      * 主叫号码(号码前加 0086，如 008613631686024)，xb 模式下是不用填写，axb 模式下是必选
      */
    Src?: string;
    /**
      * {“accreditList”:[“008613631686024”,”008612345678910”]}，主要用于 N-1 场景，号码绑定非共享是独占型，指定了 dst 独占中间号绑定，accreditList 表示这个列表成员可以拨打 dst 绑 定的中间号，默认值为空，表示所有号码都可以拨打独占型中间号绑定，最大集合不允许超过 30 个，仅适用于xb模式
      */
    AccreditList?: Array<string>;
    /**
      * 指定中间号（格式：008617013541251），如果该中间号已被使用则返回绑定失败。如果不带该字段则由腾讯侧从号码池里自动分配
      */
    AssignVirtualNum?: string;
    /**
      * 是否录音，0表示不录音，1表示录音。默认为不录音，注意如果需要录音回调，通话完成后需要等待一段时间，收到录音回调之后，再解绑中间号。
      */
    Record?: string;
    /**
      * 主被叫显号号码归属地，指定该参数说明显号归属该城市，如果没有该城市号码会随机选取一个城市或者后台配置返回107，返回码详见 《腾讯-中间号-城市id.xlsx》
      */
    CityId?: string;
    /**
      * 应用二级业务 ID，bizId 需保证在该 appId 下全局唯一，最大长度不超过 16 个字节。
      */
    BizId?: string;
    /**
      * 号码最大绑定时间，不填默认为 24 小时，最长绑定时间是168小时，单位秒
      */
    MaxAssignTime?: string;
    /**
      * 主叫发起呼叫状态：1
被叫发起呼叫状态：256
主叫响铃状态：2
被叫响铃状态：512
主叫接听状态：4
被叫接听状态：1024
主叫拒绝接听状态：8
被叫拒绝接听状态：2048
主叫正常挂机状态：16
被叫正常挂机状态：4096
主叫呼叫异常：32
被叫呼叫异常：8192

例如：
值为 0：表示所有状态不需要推送
值为 4：表示只要推送主叫接听状态
值为 16191：表示所有状态都需要推送（上面所有值和）
      */
    StatusFlag?: string;
    /**
      * 请填写statusFlag并设置值，状态回调通知地址，正式环境可以配置默认推送地址
      */
    StatusUrl?: string;
    /**
      * 话单回调通知地址，正式环境可以配置默认推送地址
      */
    HangupUrl?: string;
    /**
      * 录单 URL 回调通知地址，正式环境可以配置默认推送地址
      */
    RecordUrl?: string;
}
/**
 * DeleteCallBack返回参数结构体
 */
export interface DeleteCallBackResponse {
    /**
      * 错误码
      */
    ErrorCode?: string;
    /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Msg?: string;
    /**
      * 话单id
注意：此字段可能返回 null，表示取不到有效值。
      */
    CallId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Get400Cdr请求参数结构体
 */
export interface Get400CdrRequest {
    /**
      * 业务appid
      */
    BizAppId: string;
    /**
      * 通话唯一标识 callId，即直拨呼叫响应中返回的 callId
      */
    CallId?: string;
    /**
      * 查询主叫用户产生的呼叫话单（0086开头），设置为空表示拉取该时间段的所有话单
      */
    Src?: string;
    /**
      * 话单开始时间戳
      */
    StartTimeStamp?: string;
    /**
      * 话单结束时间戳
      */
    EndTimeStamp?: string;
}
/**
 * DescribeCallBackCdr返回参数结构体
 */
export interface DescribeCallBackCdrResponse {
    /**
      * 话单列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cdr?: Array<CallBackCdr>;
    /**
      * 偏移
注意：此字段可能返回 null，表示取不到有效值。
      */
    Offset?: string;
    /**
      * 错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorCode?: string;
    /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Msg?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 对应按键操作,如果没有结构体里定义按键操作用户按键以后都从 interruptPrompt 重新播放
 */
export interface KeyList {
    /**
      * 用户按键（0-9、*、#、A-D)
      */
    Key: string;
    /**
      * 1: 呼通被叫 2：interruptPrompt 重播提示 3：拆线
      */
    Operate: string;
}
/**
 * 直拨话单详情
 */
export interface VirturalNumCdr {
    /**
      * 呼叫通话 ID
      */
    CallId: string;
    /**
      * 双方号码 + 中间号绑定 ID，该 ID 全局唯一
      */
    BindId: string;
    /**
      * 主叫号码
      */
    Src: string;
    /**
      * 被叫号码
      */
    Dst: string;
    /**
      * 主叫通讯录直拨虚拟保护号码
      */
    DstVirtualNum: string;
    /**
      * 虚拟保护号码平台收到呼叫时间
      */
    CallCenterAcceptTime: string;
    /**
      * 被叫呼叫开始时间
      */
    StartDstCallTime: string;
    /**
      * 被叫响铃开始时间
      */
    StartDstRingTime: string;
    /**
      * 被叫接听时间
      */
    DstAcceptTime: string;
    /**
      * 用户挂机通话结束时间
      */
    EndCallTime: string;
    /**
      * 通话最后状态：0：未知状态 1：正常通话 2：查询呼叫转移被叫号异常 3：未接通 4：未接听 5：拒接挂断 6：关机 7：空号 8：通话中 9：欠费 10：运营商线路或平台异常
      */
    CallEndStatus: string;
    /**
      * 主叫接通虚拟保护号码到通话结束通话时间
      */
    SrcDuration: string;
    /**
      * 呼叫转接被叫接通到通话结束通话时间
      */
    DstDuration: string;
    /**
      * 录音 URL，如果不录音或录音失败，该值为空
      */
    RecordUrl: string;
}
/**
 * Get400Cdr返回参数结构体
 */
export interface Get400CdrResponse {
    /**
      * 错误码
      */
    ErrorCode?: string;
    /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    Msg?: string;
    /**
      * 偏移
注意：此字段可能返回 null，表示取不到有效值。
      */
    Offset?: string;
    /**
      * 话单列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cdr?: Array<VirturalNumCdr>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCallBackStatus返回参数结构体
 */
export interface DescribeCallBackStatusResponse {
    /**
      * 错误码
      */
    ErrorCode?: string;
    /**
      * 错误信息
      */
    Msg?: string;
    /**
      * 业务appid
      */
    AppId?: string;
    /**
      * 回拨请求响应中返回的 callId
      */
    CallId?: string;
    /**
      * 主叫号码
      */
    Src?: string;
    /**
      * 被叫号码
      */
    Dst?: string;
    /**
      * 通话最后状态：0：未知状态 1：主叫响铃中 2：主叫接听 3：被叫响铃中 4：正常通话中 5：通话结束
      */
    CallStatus?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
