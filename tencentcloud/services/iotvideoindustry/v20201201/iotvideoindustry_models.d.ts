/**
 * DescribePresetList请求参数结构体
 */
export interface DescribePresetListRequest {
    /**
     * 视频通道唯一标识
     */
    ChannelId: string;
    /**
     * 设备唯一标识
     */
    DeviceId: string;
}
/**
 * ControlRecordStream请求参数结构体
 */
export interface ControlRecordStreamRequest {
    /**
     * 设备Id，设备的唯一标识
     */
    DeviceId: string;
    /**
     * 流Id，流的唯一标识
     */
    StreamId: string;
    /**
     * |控制参数，CmdJson结构转义的json字符串。| Action  | string  |是|控制动作，play(用于暂停后恢复播放)、pause（暂停）、teardown(停止)、jump(拖动播放)
  | Offset  | uint  |否|拖动播放时的时间偏移量（相对于起始时间）,单位：秒
  目前支持的command：
  "Command": "{"Action":"PAUSE"}" 暂停
  "Command": "{"Action":"PLAY"}" 暂停恢复
  "Command": "{"Action":"PLAY","Offset":"15"}" 位置偏移，可以替代jump操作
     */
    Command: string;
    /**
     * 通道唯一标识
     */
    ChannelId?: string;
}
/**
 * CreateRecordingPlan返回参数结构体
 */
export interface CreateRecordingPlanResponse {
    /**
     * 录制计划ID
     */
    PlanId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySubscriptionStatus请求参数结构体
 */
export interface ModifySubscriptionStatusRequest {
    /**
     * 设备ID
     */
    DeviceId: string;
    /**
     * 订阅状态 1：关闭订阅 2：开启订阅
     */
    Status: number;
    /**
     * 订阅类型 Alarm:告警订阅 Catalog:目录订阅 MobilePosition:移动位置订阅
     */
    SubscriptionItem?: string;
}
/**
 * CreateScene返回参数结构体
 */
export interface CreateSceneResponse {
    /**
     * 场景ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTimeTemplate返回参数结构体
 */
export interface DeleteTimeTemplateResponse {
    /**
     * 操作结果，OK：成功，其他：失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeMonitorDataByDate请求参数结构体
 */
export interface DescribeMonitorDataByDateRequest {
    /**
     * 开始时间戳
     */
    StartTime: number;
    /**
     * 结束时间戳 最多显示30天数据
     */
    EndTime: number;
}
/**
 * ModifyLiveChannel返回参数结构体
 */
export interface ModifyLiveChannelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SIIP服务器相关配置项
 */
export interface ServerConfiguration {
    /**
     * SIP服务器地址
     */
    Host?: string;
    /**
     * SIP服务器端口
     */
    Port?: number;
    /**
     * SIP服务器编码
     */
    Serial?: string;
    /**
     * SIP服务器域
     */
    Realm?: string;
}
/**
 * DescribeLiveVideoList请求参数结构体
 */
export interface DescribeLiveVideoListRequest {
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 分页的每页数量
     */
    Limit: number;
    /**
     * 直播频道ID
     */
    LiveChannelId: string;
    /**
     * 开始录制开始时间
     */
    StartRecordTime?: number;
    /**
     * 开始录制结束时间
     */
    EndRecordTime?: number;
    /**
     * 过期开始时间
     */
    StartExpireTime?: number;
    /**
     * 过期结束时间
     */
    EndExpireTime?: number;
    /**
     * 文件大小范围 Byte
     */
    StartFileSize?: number;
    /**
     * 文件大小范围 Byte
     */
    EndFileSize?: number;
    /**
     * 录制状态，5: 录制回写完
     */
    IsRecording?: number;
}
/**
 * GetRecordPlanByDev请求参数结构体
 */
export interface GetRecordPlanByDevRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
}
/**
 * GetRecordDatesByDev返回参数结构体
 */
export interface GetRecordDatesByDevResponse {
    /**
     * 含有录像文件的日期列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Dates?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ControlChannelPTZ返回参数结构体
 */
export interface ControlChannelPTZResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChannels请求参数结构体
 */
export interface DescribeChannelsRequest {
    /**
     * 设备Id
     */
    DeviceId: string;
    /**
     * 限制，默认0
     */
    Limit?: number;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 通道类型  0: 未知类型 1: 视频通道 2:  音频通道 3: 告警通道
     */
    ChannelTypes?: Array<number | bigint>;
    /**
     * 录制计划ID， 当为"null"值时未绑定录制计划
     */
    PlanId?: string;
    /**
     * 告警联动场景ID， 当为 -1 值时未绑定场景
     */
    SceneId?: number;
}
/**
 * DescribeLiveChannel请求参数结构体
 */
export interface DescribeLiveChannelRequest {
    /**
     * 频道ID
     */
    LiveChannelId: string;
}
/**
 * DescribeRecordDatesByChannel返回参数结构体
 */
export interface DescribeRecordDatesByChannelResponse {
    /**
     * 含有录像文件的日期列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Dates?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRecordDatesByChannel请求参数结构体
 */
export interface DescribeRecordDatesByChannelRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * 通道唯一标识
     */
    ChannelId: string;
    /**
     * 1: 云端录制 2: 本地录制
     */
    Type: number;
    /**
     * 限制量，默认200
     */
    Limit?: number;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
}
/**
 * DescribeVideoListByChannel请求参数结构体
 */
export interface DescribeVideoListByChannelRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * 通道唯一标识
     */
    ChannelId: string;
    /**
     * 1: 云端录制 2: 本地录制
     */
    Type: number;
    /**
     * 指定某天。取值【YYYY-MM-DD】
  为空时默认查询最近一天的记录
     */
    Date?: string;
    /**
     * 限制量，默认2000
     */
    Limit?: number;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
}
/**
 * ModifyPreset返回参数结构体
 */
export interface ModifyPresetResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupByPath返回参数结构体
 */
export interface DescribeGroupByPathResponse {
    /**
     * 分组信息详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Group: GroupItem;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAbnormalEvents请求参数结构体
 */
export interface DescribeAbnormalEventsRequest {
    /**
     * 开始时间
     */
    StartTime: number;
    /**
     * 结束时间
     */
    EndTime: number;
}
/**
 * ModifyPreset请求参数结构体
 */
export interface ModifyPresetRequest {
    /**
     * 通道ID
     */
    ChannelId: string;
    /**
     * 预置位编码 范围1-8
     */
    PresetId: number;
    /**
     * 预制位名称
     */
    PresetName: string;
    /**
     * 设备Id
     */
    DeviceId: string;
}
/**
 * DescribeSubscriptionStatus返回参数结构体
 */
export interface DescribeSubscriptionStatusResponse {
    /**
     * 设备GB28181报警订阅状态 1：未开启订阅；2：已开启订阅
     */
    AlarmStatus: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeScenes返回参数结构体
 */
export interface DescribeScenesResponse {
    /**
     * 场景总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 场景列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List: Array<SceneItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRecordingPlan请求参数结构体
 */
export interface DeleteRecordingPlanRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
}
/**
 * DescribeBindSceneChannels返回参数结构体
 */
export interface DescribeBindSceneChannelsResponse {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 通道列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List: Array<ChannelItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSIPServer请求参数结构体
 */
export declare type DescribeSIPServerRequest = null;
/**
 * DescribeVideoListByChannel返回参数结构体
 */
export interface DescribeVideoListByChannelResponse {
    /**
     * 录像详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoList: Array<RecordTaskItem>;
    /**
     * 录像总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateLiveRecordPlan返回参数结构体
 */
export interface CreateLiveRecordPlanResponse {
    /**
     * 录制计划名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlanId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetRecordPlans请求参数结构体
 */
export declare type GetRecordPlansRequest = null;
/**
 * 用于描述唯一一个设备
 */
export interface DeviceItem {
    /**
     * 设备唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId?: string;
    /**
     * 通道唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelId?: string;
}
/**
 * DeleteDeviceGroup返回参数结构体
 */
export interface DeleteDeviceGroupResponse {
    /**
     * 响应结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWarnings返回参数结构体
 */
export interface DescribeWarningsResponse {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 告警列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<WarningsData>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRecordPlan返回参数结构体
 */
export interface DeleteRecordPlanResponse {
    /**
     * 操作结果，OK：成功，其他：失败
     */
    Status: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteMessageForward返回参数结构体
 */
export interface DeleteMessageForwardResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetTimeTemplates请求参数结构体
 */
export declare type GetTimeTemplatesRequest = null;
/**
 * UpdateDeviceGroup返回参数结构体
 */
export interface UpdateDeviceGroupResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRecordingPlan请求参数结构体
 */
export interface ModifyRecordingPlanRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
    /**
     * 计划名称
     */
    Name?: string;
    /**
     * 时间模板ID
     */
    TimeTemplateId?: string;
}
/**
 * DescribeDeviceEvent请求参数结构体
 */
export interface DescribeDeviceEventRequest {
    /**
     * 开始时间，秒级时间戳
     */
    StartTime: number;
    /**
     * 结束时间，秒级时间戳
     */
    EndTime: number;
    /**
     * 设备Id
     */
    DeviceId?: string;
    /**
     * 默认为全部 事件类型 1:注册 2:心跳 4:录制异常 5:播放异常 6:流中断
     */
    EventTypes?: Array<number | bigint>;
    /**
     * 偏移值
     */
    Offset?: number;
    /**
     * limit限制值
     */
    Limit?: number;
}
/**
 * GetVideoListByCon请求参数结构体
 */
export interface GetVideoListByConRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 限制量
     */
    Limit: number;
    /**
     * 通道唯一标识，对于NVR设备，多通道IPC设备，设备编码与通道编码不一致的IPC设备，此字段为必填
     */
    ChannelId?: string;
    /**
     * 0：查询指定日期的录像；1：查询最近一天的录像；默认0
     */
    LatestDay?: number;
    /**
     * 指定某天。取值【YYYY-MM-DD】
  为空时默认查询最近一天的记录
     */
    Date?: string;
    /**
     * 1: 云端录制 2: 本地录制
     */
    Type?: number;
}
/**
 * ResetWarning请求参数结构体
 */
export interface ResetWarningRequest {
    /**
     * 告警ID
     */
    Id?: number;
    /**
     * Es中告警ID
     */
    Index?: string;
}
/**
 * DescribeDeviceMonitorData返回参数结构体
 */
export interface DescribeDeviceMonitorDataResponse {
    /**
     * 查询设备统计monitor信息列表
     */
    Data: Array<DeviceMonitorValue>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 设备所在分组信息
 */
export interface DevGroupInfo {
    /**
     * 设备唯一标识
     */
    DeviceId?: string;
    /**
     * 分组ID
     */
    GroupId?: string;
    /**
     * 分组路径
     */
    GroupPath?: string;
    /**
     * 父分组ID
     */
    ParentId?: string;
    /**
     * 设备错误，仅在用户没权限或者设备已删除时返回具体结果
     */
    Error?: string;
}
/**
 * DescribeDeviceList请求参数结构体
 */
export interface DescribeDeviceListRequest {
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 限制，默认200
     */
    Limit?: number;
    /**
     * 设备名前缀
     */
    NickName?: string;
    /**
     * 设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型)
     */
    DeviceTypes?: Array<number | bigint>;
}
/**
 * DescribeRecordingPlans返回参数结构体
 */
export interface DescribeRecordingPlansResponse {
    /**
     * 录制计划详情·列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Plans?: Array<RecordPlanDetail>;
    /**
     * 录制计划总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ControlHomePosition返回参数结构体
 */
export interface ControlHomePositionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLiveRecordPlanById请求参数结构体
 */
export interface DescribeLiveRecordPlanByIdRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
}
/**
 * 直播录制计划详情
 */
export interface LiveRecordPlanItem {
    /**
     * 计划ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlanId: string;
    /**
     * 计划名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlanName: string;
}
/**
 * DescribeVideoList返回参数结构体
 */
export interface DescribeVideoListResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 已废弃
     */
    VideoList?: RecordTaskItem;
    /**
     * 录像详情列表
     */
    RecordList?: Array<RecordTaskItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 录制计划详情
 */
export interface RecordPlanDetail {
    /**
     * 计划ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlanId: string;
    /**
     * 计划名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 时间模板ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeTemplateId: string;
    /**
     * 时间模板名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeTemplateName: string;
    /**
     * 绑定的通道列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Channels: Array<ChannelItem>;
    /**
     * 存储周期（天）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordStorageTime: number;
}
/**
 * 普通设备的录像详情
 */
export interface RecordTaskItem {
    /**
     * 录像任务ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordTaskId: string;
    /**
     * 录制计划ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordPlanId: string;
    /**
     * 本录制片段开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: number;
    /**
     * 本录制片段结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: number;
    /**
     * 录制模式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventId: number;
    /**
     * 本录制片段对应的录制文件URL
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoUrl: string;
    /**
     * 本录制片段当前的录制状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordStatus: number;
    /**
     * 场景ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SceneId: number;
    /**
     * 告警ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarnId: number;
    /**
     * 录制id，NVR下属设备有效
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordId: string;
}
/**
 * GB28181通道
 */
export interface ChannelItem {
    /**
     * 设备唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId: string;
    /**
     * 通道唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelId: string;
}
/**
 * DescribeIPCChannels请求参数结构体
 */
export interface DescribeIPCChannelsRequest {
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 限制，默认0
     */
    Limit?: number;
    /**
     * 设备Id
     */
    DeviceId?: string;
    /**
     * 通道类型  0: 未知类型 1: 视频通道 2:  音频通道 3: 告警通道
     */
    ChannelTypes?: Array<number | bigint>;
}
/**
 * DescribeSubGroups请求参数结构体
 */
export interface DescribeSubGroupsRequest {
    /**
     * 分组ID
     */
    GroupId?: string;
    /**
     * 分组名称，根据名称模糊匹配子分组时为必填
     */
    GroupName?: string;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 限制数，默认200
     */
    Limit?: number;
    /**
     * 是否统计子分组下的设备数，0：统计，1：不统计
     */
    OnlyGroup?: number;
}
/**
 * UpdateTimeTemplate请求参数结构体
 */
export interface UpdateTimeTemplateRequest {
    /**
     * 时间模板ID
     */
    TemplateId: string;
    /**
     * 时间模板名称
     */
    Name?: string;
    /**
     * 是否全时录制，即7*24小时录制。
  0：非全时录制；1：全时录制。默认1
     */
    IsAllWeek?: number;
    /**
     * 录制时间片段
     */
    TimeTemplateSpecs?: Array<TimeTemplateSpec>;
}
/**
 * DeleteRecordPlan请求参数结构体
 */
export interface DeleteRecordPlanRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
}
/**
 * CreateDeviceGroup返回参数结构体
 */
export interface CreateDeviceGroupResponse {
    /**
     * 响应结果，“OK”为成功，其他为失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 分组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetVideoListByCon返回参数结构体
 */
export interface GetVideoListByConResponse {
    /**
     * 录像详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoList?: Array<RecordTaskItem>;
    /**
     * 录像总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCurrentDeviceData请求参数结构体
 */
export declare type DescribeCurrentDeviceDataRequest = null;
/**
 * 直播录制详情item
 */
export interface LiveRecordItem {
    /**
     * 录制文件自增ID
     */
    IntID: number;
    /**
     * 直播频道ID
     */
    LiveChannelId: string;
    /**
     * 过期时间
     */
    ExpectDeleteTime: number;
    /**
     * 录制时长
     */
    RecordTimeLen: number;
    /**
     * 文件大小
     */
    FileSize: number;
    /**
     * 录制文件url
     */
    VideoUrl: string;
    /**
     * 录制计划ID
     */
    RecordPlanId: string;
    /**
     * 录制开始时间
     */
    StartTime: number;
    /**
     * 录制结束时间
     */
    EndTime: number;
}
/**
 * DescribeIPCChannels返回参数结构体
 */
export interface DescribeIPCChannelsResponse {
    /**
     * 通道总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 通道详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceList: Array<GroupDeviceItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateRecordPlan请求参数结构体
 */
export interface UpdateRecordPlanRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
    /**
     * 计划名称
     */
    Name?: string;
    /**
     * 时间模板ID
     */
    TimeTemplateId?: string;
    /**
     * 触发录制的事件 1：全部
     */
    EventId?: number;
    /**
     * 录制设备列表
     */
    Devices?: Array<DeviceItem>;
    /**
     * 是否更新绑定此录制计划的设备列表
  0 - 不更新
  1 - 更新，如果Devices参数为空则清空设备列表，Devices不为空则全量更新设备列表
     */
    IsModifyDevices?: number;
}
/**
 * DescribeRecordingPlanById请求参数结构体
 */
export interface DescribeRecordingPlanByIdRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
}
/**
 * ModifyDeviceData返回参数结构体
 */
export interface ModifyDeviceDataResponse {
    /**
     * 操作结果,“OK”表示成功，其他表示失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeStatisticDetails返回参数结构体
 */
export interface DescribeStatisticDetailsResponse {
    /**
     * 统计详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<StatisticItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWarnMod返回参数结构体
 */
export interface DescribeWarnModResponse {
    /**
     * 告警类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 分组下设备信息
 */
export interface GroupDeviceItem {
    /**
     * 设备唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId: string;
    /**
     * 设备名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NickName?: string;
    /**
     * 设备状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInformation?: string;
    /**
     * 设备类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceType?: number;
    /**
     * rtsp地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RTSPUrl?: string;
    /**
     * 设备编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceCode?: string;
    /**
     * 是否存在录像
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsRecord?: number;
    /**
     * 该设备是否可录制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Recordable?: number;
    /**
     * 设备接入协议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocol?: string;
    /**
     * 设备创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 设备通道总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelNum?: number;
    /**
     * 设备视频通道总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoChannelNum?: number;
}
/**
 * DescribeSubGroups返回参数结构体
 */
export interface DescribeSubGroupsResponse {
    /**
     * 子分组详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupList: Array<GroupItem>;
    /**
     * 子分组总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChannelStreamURL返回参数结构体
 */
export interface DescribeChannelStreamURLResponse {
    /**
     * 设备实时流地址列表
     */
    Data: DescribeDeviceStreamsData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeStatisticDetails请求参数结构体
 */
export interface DescribeStatisticDetailsRequest {
    /**
     * 开始日期，格式【YYYY-MM-DD】
     */
    StartDate: string;
    /**
     * 结束日期，格式【YYYY-MM-DD】
     */
    EndDate: string;
    /**
     * 统计项。取值范围：
  1.录制设备数：RecordingDevice
  2.非录制设备数：NonRecordingDevice
  3.观看流量总数：WatchFlux
  4.已用存储容量总数：StorageUsage
  5. X-P2P分享流量: P2PFluxTotal
  6. X-P2P峰值带宽: P2PPeakValue
  7. RTMP推流路数(直播推流): LivePushTotal
     */
    StatisticField: string;
}
/**
 * DeleteDevice请求参数结构体
 */
export interface DeleteDeviceRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
}
/**
 * UpdateDevicePassWord请求参数结构体
 */
export interface UpdateDevicePassWordRequest {
    /**
     * 设备密码
     */
    PassWord: string;
    /**
     * 设备唯一标识
     */
    DeviceId: string;
}
/**
 * DescribeMessageForward请求参数结构体
 */
export interface DescribeMessageForwardRequest {
    /**
     * 配置ID
     */
    IntId: number;
}
/**
 * CreateTimeTemplate请求参数结构体
 */
export interface CreateTimeTemplateRequest {
    /**
     * 时间模板名称
     */
    Name: string;
    /**
     * 是否为每周全时录制（即7*24h录制），0：非全时录制，1；全时录制，默认0
     */
    IsAllWeek: number;
    /**
     * 当IsAllWeek为0时必选，用于描述模板的各个时间片段
     */
    TimeTemplateSpecs?: Array<TimeTemplateSpec>;
}
/**
 * ModifyBindSceneChannels返回参数结构体
 */
export interface ModifyBindSceneChannelsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateMessageForward请求参数结构体
 */
export interface CreateMessageForwardRequest {
    /**
     * 区域ID
     */
    RegionId: string;
    /**
     * 区域名称
     */
    RegionName: string;
    /**
     * 实例ID
     */
    Instance: string;
    /**
     * 实例名称
     */
    InstanceName: string;
    /**
     * json数组， 转发类型 1: 告警 2:GPS
     */
    MessageType: string;
    /**
     * kafka topic id
     */
    TopicId: string;
    /**
     * kafka topic 名称
     */
    TopicName: string;
}
/**
 * 分组信息
 */
export interface GroupItem {
    /**
     * 分组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName: string;
    /**
     * 父分组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParentId: string;
    /**
     * 分组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId: string;
    /**
     * 分组路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupPath?: string;
    /**
     * 分组描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupDescribe?: string;
    /**
     * 分组绑定设备数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceNum?: number;
    /**
     * 子分组数量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubGroupNum?: number;
    /**
     * 分组附加信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInformation?: string;
    /**
     * 分组类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupType?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 分组状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupStatus?: number;
}
/**
 * DeleteWarning请求参数结构体
 */
export interface DeleteWarningRequest {
    /**
     * 告警ID
     */
    Id?: number;
    /**
     * 告警索引
     */
    Index?: string;
}
/**
 * ModifyBindPlanLiveChannel请求参数结构体
 */
export interface ModifyBindPlanLiveChannelRequest {
    /**
     * 直播录制计划ID
     */
    PlanId: string;
    /**
     * 1: 绑定 2: 解绑
     */
    Type: number;
    /**
     * 直播频道ID列表
     */
    LiveChannelIds: Array<string>;
}
/**
 * DescribeLiveStream请求参数结构体
 */
export interface DescribeLiveStreamRequest {
    /**
     * 频道ID
     */
    LiveChannelId: string;
    /**
     * 过期时间 秒级unix时间戳
     */
    ExpireTime: number;
}
/**
 * ModifyMessageForward请求参数结构体
 */
export interface ModifyMessageForwardRequest {
    /**
     * 配置ID
     */
    IntId: number;
    /**
     * json数组， 转发类型 1: 告警 2:GPS
     */
    MessageType: string;
}
/**
 * ModifyLiveRecordPlan返回参数结构体
 */
export interface ModifyLiveRecordPlanResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeXP2PData返回参数结构体
 */
export interface DescribeXP2PDataResponse {
    /**
     * [log_time,cdn_bytes , p2p_bytes, online_people, stuck_times, stuck_people,request,request_success,request_fail,play_fail]
  [时间戳,cdn流量(字节) , p2p流量(字节), 在线人数, 卡播次数, 卡播人数,起播请求次数,起播成功次数,起播失败次数,播放失败次数, pcdn cdn流量（字节), pcdn路由流量(字节), 上传流量(字节)]
  [1481016480, 46118502414, 75144943171, 61691, 3853, 0,0,0,0,0, 0, 0, 0]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceEvent返回参数结构体
 */
export interface DescribeDeviceEventResponse {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 事件列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Events: Array<Events>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 大盘统计-录像存储统计 出参Value
 */
export interface RecordStatisticValue {
    /**
     * 期望执行时间 秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpectTimeLen: number;
    /**
     * 实际执行时间 秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordTimeLen: number;
    /**
     * 存储大小 G
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileSize: number;
}
/**
 * ModifyScene请求参数结构体
 */
export interface ModifySceneRequest {
    /**
     * 场景ID
     */
    IntId: number;
    /**
     * 场景名称
     */
    SceneName?: string;
    /**
     * 触发条件
     */
    SceneTrigger?: string;
    /**
     * 录制时长(秒)
     */
    RecordDuration?: number;
}
/**
 * DescribeAllDeviceList请求参数结构体
 */
export interface DescribeAllDeviceListRequest {
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 限制，默认200
     */
    Limit?: number;
    /**
     * 设备名称，需要模糊匹配设备名称时为必填
     */
    NickName?: string;
    /**
     * DeviceId列表，需要精确查找设备时为必填
     */
    DeviceIds?: Array<string>;
    /**
     * 设备类型过滤，设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型)
     */
    DeviceTypes?: Array<number | bigint>;
}
/**
 * DescribeRecordDatesByLive请求参数结构体
 */
export interface DescribeRecordDatesByLiveRequest {
    /**
     * 直播频道ID
     */
    LiveChannelId: string;
    /**
     * 分页值，本地录制时参数无效
     */
    Offset: number;
    /**
     * 限制值，本地录制时参数无效
     */
    Limit: number;
}
/**
 * DescribeDevicePassWord请求参数结构体
 */
export interface DescribeDevicePassWordRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
}
/**
 * GetRecordPlanById请求参数结构体
 */
export interface GetRecordPlanByIdRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
}
/**
 * ModifyRecordingPlan返回参数结构体
 */
export interface ModifyRecordingPlanResponse {
    /**
     * 操作结果
     */
    Status?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLiveChannelList请求参数结构体
 */
export interface DescribeLiveChannelListRequest {
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 最大数
     */
    Limit: number;
    /**
     * 直播频道类型，1：固定直播；2：移动直播
     */
    LiveChannelType?: number;
    /**
     * 直播录制计划ID, null: 直播录制计划为空
     */
    RecordPlanId?: string;
    /**
     * 频道名称 (支持模糊搜索)
     */
    LiveChannelName?: string;
}
/**
 * GetRecordPlanByDev返回参数结构体
 */
export interface GetRecordPlanByDevResponse {
    /**
     * 录制计划详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Plan?: RecordPlanItem;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteVideoList请求参数结构体
 */
export interface DeleteVideoListRequest {
    /**
     * 视频ID列表长度限制100内
     */
    InitIDs: Array<number | bigint>;
}
/**
 * 分组信息详情
 */
export interface GroupInfo {
    /**
     * 分组ID
     */
    GroupId?: string;
    /**
     * 分组名称
     */
    GroupName?: string;
    /**
     * 分组类型
     */
    GroupType?: string;
    /**
     * 分组路径
     */
    GroupPath?: string;
    /**
     * 父分组ID
     */
    ParentId?: string;
    /**
     * 分组描述
     */
    GroupDescribe?: string;
    /**
     * 扩展信息
     */
    ExtraInformation?: string;
    /**
     * 创建时间
     */
    CreateTime?: number;
    /**
     * 分组状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupStatus?: number;
    /**
     * 设备不存在时产生的错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Error?: string;
}
/**
 * ControlPreset请求参数结构体
 */
export interface ControlPresetRequest {
    /**
     * 通道ID
     */
    ChannelId: string;
    /**
     * 控制命令：
  Set-设置当前位置为预置位
  Del-删除指定的预置位
  Call-调用指定的预置位
     */
    Command: string;
    /**
     * 预置位编码 范围1-8
     */
    PresetId: number;
    /**
     * 设备Id
     */
    DeviceId: string;
}
/**
 * CreateRecordPlan请求参数结构体
 */
export interface CreateRecordPlanRequest {
    /**
     * 计划名称
     */
    Name: string;
    /**
     * 时间模板ID
     */
    TimeTemplateId: string;
    /**
     * 触发录制的事件类别 1:全部
     */
    EventId: number;
    /**
     * 该录制计划绑定的设备列表
     */
    Devices?: Array<DeviceItem>;
    /**
     * 存储周期
     */
    RecordStorageTime?: number;
}
/**
 * DescribeRecordStreamData 复杂类型
 */
export interface DescribeRecordStreamData {
    /**
     * Rtsp地址
     */
    RtspAddr: string;
    /**
     * Rtmp地址
     */
    RtmpAddr: string;
    /**
     * Hls地址
     */
    HlsAddr: string;
    /**
     * Flv地址
     */
    FlvAddr: string;
    /**
     * 流Id
     */
    StreamId: string;
}
/**
 * DeleteRecordingPlan返回参数结构体
 */
export interface DeleteRecordingPlanResponse {
    /**
     * 操作结果，OK：成功，其他：失败
     */
    Status: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDeviceGroup请求参数结构体
 */
export interface CreateDeviceGroupRequest {
    /**
     * 分组名称
     */
    GroupName: string;
    /**
     * 父分组ID
     */
    ParentId: string;
    /**
     * 分组描述
     */
    GroupDescribe?: string;
}
/**
 * 场景列表元素
 */
export interface SceneItem {
    /**
     * 场景ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntId: number;
    /**
     * 用户UIN
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin: string;
    /**
     * 场景名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SceneName: string;
    /**
     * 触发规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SceneTrigger: string;
    /**
     * 录制时长 秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordDuration: number;
    /**
     * 存储时长 天
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StoreDuration: number;
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
 * ModifyBindSceneChannels请求参数结构体
 */
export interface ModifyBindSceneChannelsRequest {
    /**
     * 场景ID
     */
    SceneId: number;
    /**
     * 1: 绑定 2: 解绑
     */
    Type: number;
    /**
     * 通道列表
     */
    Channels: Array<ChannelItem>;
}
/**
 * DescribeLiveRecordPlanIds返回参数结构体
 */
export interface DescribeLiveRecordPlanIdsResponse {
    /**
     * 总个数
     */
    TotalCount: number;
    /**
     * 计划数组
     */
    Plans: Array<LiveRecordPlanItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBindSceneDevice请求参数结构体
 */
export interface ModifyBindSceneDeviceRequest {
    /**
     * 场景ID
     */
    SceneId: number;
    /**
     * 1: 绑定 2: 解绑
     */
    Type: number;
    /**
     * 设备列表
     */
    Devices: Array<DeviceItem>;
}
/**
 * CreateDevice返回参数结构体
 */
export interface CreateDeviceResponse {
    /**
     * 设备编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceCode?: string;
    /**
     * 设备唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId?: string;
    /**
     * 设备虚拟组信息，仅在创建NVR时返回该值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VirtualGroupId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDevice请求参数结构体
 */
export interface CreateDeviceRequest {
    /**
     * 设备名称
     */
    NickName: string;
    /**
     * 设备密码
     */
    PassWord: string;
    /**
     * 设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型)
     */
    DeviceType?: number;
    /**
     * 设备需要绑定的分组ID，参数为空则默认绑定到根分组
     */
    GroupId?: string;
}
/**
 * 告警列表出参
 */
export interface WarningsData {
    /**
     * 唯一ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * 设备ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId?: string;
    /**
     * 设备名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceName?: string;
    /**
     * 告警通道
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarnChannel?: string;
    /**
     * 告警级别 1: "一级警情", 2: "二级警情", 3: "三级警情", 4: "四级警情",
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarnLevel?: number;
    /**
     * 告警级别名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarnLevelName?: string;
    /**
     * 告警方式 2 设备报警 5 视频报警 6 设备故障报警
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarnMode?: number;
    /**
     * 告警方式名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarnModeName?: string;
    /**
     * 告警类型  2: {
              Name: "设备报警",
              WarnType: map[int]string{
                  1: "视频丢失报警",
                  2: "设备防拆报警",
                  3: "存储设备磁盘满报警",
                  4: "设备高温报警",
                  5: "设备低温报警",
              },
          },
          5: {
              Name: "视频报警",
              WarnType: map[int]string{
                  1:  "人工视频报警",
                  2:  "运动目标检测报警",
                  3:  "遗留物检测报警",
                  4:  "物体移除检测报警",
                  5:  "绊线检测报警",
                  6:  "入侵检测报警",
                  7:  "逆行检测报警",
                  8:  "徘徊检测报警",
                  9:  "流量统计报警",
                  10: "密度检测报警",
                  11: "视频异常检测报警",
                  12: "快速移动报警",
              },
          },
          6: {
              Name: "设备故障报警",
              WarnType: map[int]string{
                  1: "存储设备磁盘故障报警",
                  2: "存储设备风扇故障报警",
              },
          }
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WarnType?: number;
    /**
     * 是否删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Del?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
}
/**
 * DescribeStatisticSummary返回参数结构体
 */
export interface DescribeStatisticSummaryResponse {
    /**
     * 录制设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordingDevice: number;
    /**
     * 非录制设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NonRecordingDevice: number;
    /**
     * 观看流量总数。为直播观看流量与点播观看流量之和。单位：GB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WatchFlux: number;
    /**
     * 累计有效存储容量总数。单位：GB
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StorageUsage: number;
    /**
     * X-P2P分享流量。单位 Byte
  注意：此字段可能返回 null，表示取不到有效值。
     */
    P2PFluxTotal: number;
    /**
     * X-P2P峰值带宽。 单位bps
  注意：此字段可能返回 null，表示取不到有效值。
     */
    P2PPeakValue: number;
    /**
     * RTMP推流路数 ( 直播推流)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LivePushTotal: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBindPlanLiveChannel返回参数结构体
 */
export interface ModifyBindPlanLiveChannelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRecordStream请求参数结构体
 */
export interface DescribeRecordStreamRequest {
    /**
     * 设备Id
     */
    DeviceId: string;
    /**
     * 流失效时间，UNIX时间戳，30天内
     */
    ExpireTime: number;
    /**
     * 录像文件ID
     */
    RecordId?: string;
    /**
     * 录像流开始时间，当录像文件ID为空时有效，UNIX时间戳
     */
    StartTime?: number;
    /**
     * 录像流结束时间，当录像文件iD为空时有效，UNIX时间戳
     */
    EndTime?: number;
    /**
     * 通道唯一标识（此接口升级为必填字段）
     */
    ChannelId?: string;
}
/**
 * 预置位结构出参
 */
export interface PresetItem {
    /**
     * 预置位ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PresetId: number;
    /**
     * 预置位名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PresetName: string;
    /**
     * 预置位状态 0:未设置预置位 1:已设置预置位 2:已设置预置位&看守位
     */
    Status: number;
    /**
     * 预置位启用时的自动归位时间
     */
    ResetTime: number;
}
/**
 * BindGroupDevices请求参数结构体
 */
export interface BindGroupDevicesRequest {
    /**
     * 分组ID
     */
    GroupId: string;
    /**
     * 设备唯一标识列表
     */
    DeviceList: Array<string>;
}
/**
 * ControlHomePosition请求参数结构体
 */
export interface ControlHomePositionRequest {
    /**
     * 通道ID
     */
    ChannelId: string;
    /**
     * 设备Id
     */
    DeviceId: string;
    /**
     * 看守位使能 0-停用看守位 1-启用看守位
     */
    Enable?: number;
    /**
     * 预置位编码 范围1-8，启用看守位时必填
     */
    PresetId?: number;
    /**
     * 看守位自动归位时间， 启用看守位时必填
     */
    ResetTime?: number;
}
/**
 * ModifyLiveRecordPlan请求参数结构体
 */
export interface ModifyLiveRecordPlanRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
    /**
     * 录制计划名
     */
    PlanName: string;
    /**
     * 时间模板ID，固定直播时为必填
     */
    TemplateId?: string;
}
/**
 * DescribeScene返回参数结构体
 */
export interface DescribeSceneResponse {
    /**
     * 场景ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntId: number;
    /**
     * 录制时长(秒)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordDuration: number;
    /**
     * 场景名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SceneName: string;
    /**
     * 场景触发规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SceneTrigger: string;
    /**
     * 存储时长 (天)
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StoreDuration: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * 用户Uin
     */
    Uin: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDevice返回参数结构体
 */
export interface DescribeDeviceResponse {
    /**
     * 设备详情信息
     */
    Device: AllDeviceInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetTimeTemplateById返回参数结构体
 */
export interface GetTimeTemplateByIdResponse {
    /**
     * 时间模板详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Template?: TimeTemplateItem;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLiveChannel返回参数结构体
 */
export interface DescribeLiveChannelResponse {
    /**
     * 频道ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveChannelId: string;
    /**
     * 频道名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveChannelName: string;
    /**
     * 直播频道类型 1：固定直播；2：移动直播
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveChannelType: number;
    /**
     * 通道直播状态：1: 未推流，2: 推流中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveStatus: number;
    /**
     * 推流地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PushStreamAddress: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: Array<string>;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChannels返回参数结构体
 */
export interface DescribeChannelsResponse {
    /**
     * 通道总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 通道详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Channels: Array<ChannelDetail>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 查询设备统计返回值
 */
export interface DeviceMonitorValue {
    /**
     * 统计值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: number;
    /**
     * 统计时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time: number;
}
/**
 * DescribeMessageForwards请求参数结构体
 */
export interface DescribeMessageForwardsRequest {
    /**
     * 数量限制
     */
    Limit: number;
    /**
     * 偏移
     */
    Offset?: number;
}
/**
 * ControlDevicePTZ返回参数结构体
 */
export interface ControlDevicePTZResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRecordingPlans请求参数结构体
 */
export declare type DescribeRecordingPlansRequest = null;
/**
 * 在操作时间模板时，用于描述各个时间片段
 */
export interface TimeTemplateSpec {
    /**
     * 一周中的周几
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DayofWeek: number;
    /**
     * 时间片段的开始时分。格式【HH:MM】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeginTime: string;
    /**
     * 时间片段的结束时分。格式【HH:MM】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: string;
}
/**
 * ControlDevicePTZ请求参数结构体
 */
export interface ControlDevicePTZRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * PTZ控制命令类型：
  stop - 停止当前PTZ信令
  left - 向左移动
  right - 向右移动
  up - 向上移动
  down - 向下移动
  leftUp - 左上移动
  leftDown - 左下移动
  rightUp - 右上移动
  rightDown - 右下移动
  zoomOut - 镜头缩小
  zoomIn - 镜头放大
  irisIn - 光圈缩小
  irisOut - 光圈放大
  focusIn - 焦距变近
  focusOut - 焦距变远
     */
    Command: string;
    /**
     * 通道唯一标识
     */
    ChannelId?: string;
}
/**
 * UpdateDeviceGroup请求参数结构体
 */
export interface UpdateDeviceGroupRequest {
    /**
     * 分组名称
     */
    GroupName: string;
    /**
     * 分组ID
     */
    GroupId: string;
    /**
     * 分组描述
     */
    GroupDescribe?: string;
    /**
     * 新父分组ID，用于修改分组路径
     */
    NewParentId?: string;
}
/**
 * DescribeChannelsByLiveRecordPlan返回参数结构体
 */
export interface DescribeChannelsByLiveRecordPlanResponse {
    /**
     * 总个数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 通道详情数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveChannels: Array<LiveChannelItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupDevices请求参数结构体
 */
export interface DescribeGroupDevicesRequest {
    /**
     * 分组ID
     */
    GroupId: string;
    /**
     * 偏移量，默认0
     */
    Offset?: number;
    /**
     * 限制值，默认200
     */
    Limit?: number;
    /**
     * 设备名称，根据设备名称模糊匹配时必填
     */
    NickName?: string;
    /**
     * 过滤不可录制设备
     */
    Recordable?: number;
    /**
     * 当Group是普通组的时候，支持根据DeviceTypes筛选类型，
   设备类型，1：国标VMS设备(公有云不支持此类型)，2：国标IPC设备，3：国标NVR设备，9：智能告警设备(公有云不支持此类型)
     */
    DeviceTypes?: Array<number | bigint>;
}
/**
 * DescribeGroupById请求参数结构体
 */
export interface DescribeGroupByIdRequest {
    /**
     * 分组ID
     */
    GroupId: string;
}
/**
 * 设备事件列表
 */
export interface Events {
    /**
     * 开始时间，秒级时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventTime?: number;
    /**
     * 事件类型 1:注册 2:心跳 4:录制异常 5:播放异常 6:流中断
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventType?: number;
    /**
     * 事件描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventDesc?: string;
    /**
     * 设备类型
     */
    DeviceType?: number;
    /**
     * 设备地址
     */
    DeviceAddress?: string;
    /**
     * 设备Id
     */
    DeviceId?: string;
    /**
     * 通道Id
     */
    ChannelId?: string;
    /**
     * 事件日志
     */
    EventLog?: string;
    /**
     * 设备备注名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceName?: string;
}
/**
 * UpdateDevicePassWord返回参数结构体
 */
export interface UpdateDevicePassWordResponse {
    /**
     * 操作结果，“OK”表示成功，其他表示失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLiveRecordPlanById返回参数结构体
 */
export interface DescribeLiveRecordPlanByIdResponse {
    /**
     * 计划名称
     */
    PlanName: string;
    /**
     * 模板ID
     */
    TemplateId: string;
    /**
     * 模板名称
     */
    TemplateName: string;
    /**
     * 存储时间
     */
    RecordStorageTime: number;
    /**
     * 计划类型
     */
    PlanType: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteChannel请求参数结构体
 */
export interface DeleteChannelRequest {
    /**
     * 设备ID
     */
    DeviceId: string;
    /**
     * 通道ID
     */
    ChannelId: string;
}
/**
 * DescribeXP2PData请求参数结构体
 */
export interface DescribeXP2PDataRequest {
    /**
     * P2P应用ID
     */
    P2PAppId: string;
    /**
     * 查询开始时间，时间戳秒
     */
    From: number;
    /**
     * 查询结束时间，时间戳秒
     */
    To: number;
    /**
     * P2P通路ID
     */
    P2PChannelId?: string;
}
/**
 * UpdateTimeTemplate返回参数结构体
 */
export interface UpdateTimeTemplateResponse {
    /**
     * 操作结果，“OK”表示成功，其他表示失败。
     */
    Status?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSubscriptionStatus请求参数结构体
 */
export interface DescribeSubscriptionStatusRequest {
    /**
     * 设备ID
     */
    DeviceId: string;
}
/**
 * DescribeDeviceStreams请求参数结构体
 */
export interface DescribeDeviceStreamsRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * 流地址失效时间
     */
    ExpireTime: number;
    /**
     * 通道唯一标识（接口升级字段为必填）
     */
    ChannelId?: string;
}
/**
 * DescribeRecordStream返回参数结构体
 */
export interface DescribeRecordStreamResponse {
    /**
     * 结果
     */
    Data: DescribeRecordStreamData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRecordPlan返回参数结构体
 */
export interface CreateRecordPlanResponse {
    /**
     * 录制计划ID
     */
    PlanId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWarnings请求参数结构体
 */
export interface DescribeWarningsRequest {
    /**
     * 1:创建时间倒序 2：创建时间升序 3：level倒序 4：leve升序
     */
    OrderType: number;
    /**
     * 可选设备id
     */
    DeviceId?: string;
    /**
     * 如果不传则查询所有，取值参见配置
     */
    WarnLevelArray?: Array<number | bigint>;
    /**
     * 如果不传则查询所有，取值参见配置
     */
    WarnModeArray?: Array<number | bigint>;
    /**
     * 不传认为是0
     */
    Offset?: number;
    /**
     * 不传认为是20
     */
    Limit?: number;
    /**
     * 形似：2021-05-21 00:00:00 .取值在当前日前30天内，不传默认是当前日前30天日期
     */
    DateBegin?: string;
    /**
     * 形似：2021-05-21 23:59:59 .取值在当前日前30天内，不传默认是当前日前30天日期
     */
    DateEnd?: string;
}
/**
 * CreateScene请求参数结构体
 */
export interface CreateSceneRequest {
    /**
     * 场景名称
     */
    SceneName: string;
    /**
     * 场景触发规则
     */
    SceneTrigger: string;
    /**
     * 录制时长 (秒)
     */
    RecordDuration: number;
    /**
     * 录像存储时长(天)
     */
    StoreDuration: number;
    /**
     * 设备列表(不推荐使用)
     */
    Devices?: Array<DeviceItem>;
    /**
     * 通道列表
     */
    Channels?: Array<ChannelItem>;
}
/**
 * 查询全部设备出参
 */
export interface AllDeviceInfo {
    /**
     * 设备唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId: string;
    /**
     * 设备类型；2：IPC
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceType: number;
    /**
     * 设备状态；0：设备不在线；1：设备在线；2：设备隔离中；3：设备未注册
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: number;
    /**
     * 设备扩展属性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInformation?: string;
    /**
     * 设备名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NickName?: string;
    /**
     * 设备绑定分组路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupPath?: string;
    /**
     * 设备编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceCode?: string;
    /**
     * 是否存在录像,，0:不存在；1：存在
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsRecord?: number;
    /**
     * 该设备是否可录制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Recordable?: number;
    /**
     * 设备接入协议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Protocol?: string;
    /**
     * 组Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupId?: string;
    /**
     * 组名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GroupName?: string;
}
/**
 * DescribeAbnormalEvents返回参数结构体
 */
export interface DescribeAbnormalEventsResponse {
    /**
     * 异动事件走势列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<AbnormalEvents>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceStreams返回参数结构体
 */
export interface DescribeDeviceStreamsResponse {
    /**
     * 设备实时流地址列表
     */
    Data?: DescribeDeviceStreamsData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLiveVideoList返回参数结构体
 */
export interface DescribeLiveVideoListResponse {
    /**
     * 总的条数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 录制任务详情数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordList?: Array<LiveRecordItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteDeviceGroup请求参数结构体
 */
export interface DeleteDeviceGroupRequest {
    /**
     * 分组ID
     */
    GroupId: string;
}
/**
 * DescribeScene请求参数结构体
 */
export interface DescribeSceneRequest {
    /**
     * 场景ID
     */
    IntId: number;
}
/**
 * DescribeDevice请求参数结构体
 */
export interface DescribeDeviceRequest {
    /**
     * 设备ID
     */
    DeviceId: string;
}
/**
 * ControlPreset返回参数结构体
 */
export interface ControlPresetResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceGroup返回参数结构体
 */
export interface DescribeDeviceGroupResponse {
    /**
     * 设备所在分组信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DevGroups?: Array<DevGroupInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteChannel返回参数结构体
 */
export interface DeleteChannelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySubscriptionStatus返回参数结构体
 */
export interface ModifySubscriptionStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 消息转发配置信息
 */
export interface MessageForward {
    /**
     * 配置ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntId: number;
    /**
     * 用户Uin
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin: string;
    /**
     * json数组， 转发类型 1: 告警 2:GPS
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MessageType: string;
    /**
     * 区域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId: string;
    /**
     * 区域名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionName: string;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Instance: string;
    /**
     * 实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName: string;
    /**
     * kafka topic id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
    /**
     * topic 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName: string;
}
/**
 * ResetWarning返回参数结构体
 */
export interface ResetWarningResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyDeviceData请求参数结构体
 */
export interface ModifyDeviceDataRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * 设备名称
     */
    NickName: string;
}
/**
 * DeleteScene返回参数结构体
 */
export interface DeleteSceneResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetRecordDatesByDev请求参数结构体
 */
export interface GetRecordDatesByDevRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * 限制量，默认200
     */
    Limit: number;
    /**
     * 偏移量，默认0
     */
    Offset: number;
    /**
     * 通道唯一标识，对于NVR设备，多通道IPC设备，设备编码与通道编码不一致的IPC设备，此字段为必填
     */
    ChannelId?: string;
    /**
     * 1: 云端录制 2: 本地录制
     */
    Type?: number;
}
/**
 * DescribeLiveChannelList返回参数结构体
 */
export interface DescribeLiveChannelListResponse {
    /**
     * 频道总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: number;
    /**
     * 频道信息数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveChannels?: Array<LiveChannelInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetTimeTemplates返回参数结构体
 */
export interface GetTimeTemplatesResponse {
    /**
     * 时间模板列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Templates?: Array<TimeTemplateItem>;
    /**
     * 时间模板总数
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateLiveChannel返回参数结构体
 */
export interface CreateLiveChannelResponse {
    /**
     * 直播频道ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveChannelId: string;
    /**
     * 直播频道推流地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PushStreamAddress: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteVideoList返回参数结构体
 */
export interface DeleteVideoListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyLiveVideo返回参数结构体
 */
export interface ModifyLiveVideoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChannelStreamURL请求参数结构体
 */
export interface DescribeChannelStreamURLRequest {
    /**
     * 设备唯一标识，必填参数
     */
    DeviceId: string;
    /**
     * 流地址失效时间，固定值填写0，其他参数无效，必填参数
     */
    ExpireTime: number;
    /**
     * 通道唯一标识（接口升级字段为必填），必填参数
     */
    ChannelId?: string;
}
/**
 * DescribeAllDeviceList返回参数结构体
 */
export interface DescribeAllDeviceListResponse {
    /**
     * 设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 设备详细信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Devices?: Array<AllDeviceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeStatisticSummary请求参数结构体
 */
export interface DescribeStatisticSummaryRequest {
    /**
     * 指定日期。格式【YYYY-MM-DD】
     */
    Date: string;
}
/**
 * DescribeGroups返回参数结构体
 */
export interface DescribeGroupsResponse {
    /**
     * 分组详细信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Groups: Array<GroupInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 国标通道详细信息
 */
export interface ChannelDetail {
    /**
     * 通道名称
     */
    ChannelName?: string;
    /**
     * 通道唯一标识
     */
    ChannelId?: string;
    /**
     * 通道类型 0：未知；1：视频通道；2：音频通道；3：告警通道
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelType?: number;
    /**
     * 20位国标通道编码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChannelCode?: string;
    /**
     * 通道扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtraInformation?: string;
    /**
     * 通道在线状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 通道是否存在录像标识 0：无录像；1：有录像
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsRecord?: number;
    /**
     * 通道所属设备唯一标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceId?: string;
    /**
     * 通道所属虚拟组织的ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BusinessGroupId?: string;
}
/**
 * DescribeChannelLiveStreamURL返回参数结构体
 */
export interface DescribeChannelLiveStreamURLResponse {
    /**
     * 设备实时流地址列表
     */
    Data: DescribeDeviceStreamsData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceStreams的出参复杂类型
 */
export interface DescribeDeviceStreamsData {
    /**
     * rtsp地址
     */
    RtspAddr?: string;
    /**
     * rtmp地址
     */
    RtmpAddr?: string;
    /**
     * hls地址
     */
    HlsAddr?: string;
    /**
     * flv地址
     */
    FlvAddr?: string;
}
/**
 * DeleteLiveRecordPlan请求参数结构体
 */
export interface DeleteLiveRecordPlanRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
}
/**
 * ModifyBindRecordingPlan请求参数结构体
 */
export interface ModifyBindRecordingPlanRequest {
    /**
     * 操作类型： 1-绑定设备 ；2-解绑设备
     */
    Type: number;
    /**
     * 录制计划ID
     */
    PlanId: string;
    /**
     * 录制通道列表
     */
    Channels?: Array<ChannelItem>;
}
/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
    /**
     * 操作结果 OK-成功； 其他-失败
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteLiveVideoList返回参数结构体
 */
export interface DeleteLiveVideoListResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceMonitorData请求参数结构体
 */
export interface DescribeDeviceMonitorDataRequest {
    /**
     * 开始时间戳
     */
    StartTime: number;
    /**
     * 结束时间戳
     */
    EndTime: number;
    /**
     * 类型 支持 OnlineChannels/OnlineDevices/RecordingChannels
     */
    Type: string;
    /**
     * 时间粒度 目前只支持 1h
     */
    TimesSpec: string;
}
/**
 * CreateTimeTemplate返回参数结构体
 */
export interface CreateTimeTemplateResponse {
    /**
     * 时间模板ID
     */
    TemplateId: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteLiveChannel请求参数结构体
 */
export interface DeleteLiveChannelRequest {
    /**
     * 直播频道ID
     */
    LiveChannelId: string;
}
/**
 * 某天的统计数额
 */
export interface StatisticItem {
    /**
     * 日期。格式【YYYY-MM-DD】
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Date?: string;
    /**
     * 统计数额
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Sum?: number;
}
/**
 * DescribeChannelLiveStreamURL请求参数结构体
 */
export interface DescribeChannelLiveStreamURLRequest {
    /**
     * 设备唯一标识，必填参数
     */
    DeviceId: string;
    /**
     * 通道唯一标识（接口升级字段为必填），必填参数
     */
    ChannelId: string;
}
/**
 * DescribeSIPServer返回参数结构体
 */
export interface DescribeSIPServerResponse {
    /**
     * SIP服务器相关配置项
     */
    Data: ServerConfiguration;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupByPath请求参数结构体
 */
export interface DescribeGroupByPathRequest {
    /**
     * 分组路径，格式为/aaa(/bbb/ccc)
     */
    GroupPath: string;
}
/**
 * DescribeRecordDatesByLive返回参数结构体
 */
export interface DescribeRecordDatesByLiveResponse {
    /**
     * 录制日期数组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Dates?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UpdateRecordPlan返回参数结构体
 */
export interface UpdateRecordPlanResponse {
    /**
     * 操作结果
     */
    Status?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyBindSceneDevice返回参数结构体
 */
export interface ModifyBindSceneDeviceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 异动事件走势元素
 */
export interface AbnormalEventsInfo {
    /**
     * 类型值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Key: number;
    /**
     * 类型总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Count: number;
}
/**
 * 时间模板详情
 */
export interface TimeTemplateItem {
    /**
     * 时间模板ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TemplateId: string;
    /**
     * 模板名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 是否全时录制，即7*24小时录制 0-否 1-是
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsAllWeek: number;
    /**
     * 是否为自定义模板 0-否 1-是
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: number;
    /**
     * 时间片段详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeTemplateSpecs?: Array<TimeTemplateSpec>;
}
/**
 * 异动事件走势列表
 */
export interface AbnormalEvents {
    /**
     * 对应查询日期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Date: string;
    /**
     * 列表信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Info: Array<AbnormalEventsInfo>;
}
/**
 * DescribeDeviceGroup请求参数结构体
 */
export interface DescribeDeviceGroupRequest {
    /**
     * 设备唯一标识列表
     */
    DeviceIds?: Array<string>;
}
/**
 * 频道信息
 */
export interface LiveChannelInfo {
    /**
     * 频道ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveChannelId: string;
    /**
     * 频道名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveChannelName: string;
    /**
     * 频道类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveChannelType: number;
    /**
     * 通道直播状态：1: 未推流，2: 推流中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveStatus: number;
    /**
     * 推流地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PushStreamAddress: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 修改时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime: string;
}
/**
 * 直播频道详情
 */
export interface LiveChannelItem {
    /**
     * 频道ID
     */
    ChannelId: string;
    /**
     * 频道名称
     */
    ChannelName: string;
}
/**
 * DescribeGroups请求参数结构体
 */
export interface DescribeGroupsRequest {
    /**
     * 分组ID列表
     */
    GroupIds?: Array<string>;
}
/**
 * ControlChannelPTZ请求参数结构体
 */
export interface ControlChannelPTZRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * 通道唯一标识
     */
    ChannelId: string;
    /**
     * PTZ控制命令类型：
  stop - 停止当前PTZ信令
  left - 向左移动
  right - 向右移动
  up - 向上移动
  down - 向下移动
  leftUp - 左上移动
  leftDown - 左下移动
  rightUp - 右上移动
  rightDown - 右下移动
  zoomOut - 镜头缩小
  zoomIn - 镜头放大
  irisIn - 光圈缩小
  irisOut - 光圈放大
  focusIn - 焦距变近
  focusOut - 焦距变远
     */
    Command: string;
}
/**
 * GetRecordPlans返回参数结构体
 */
export interface GetRecordPlansResponse {
    /**
     * 录制计划详情·列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Plans: Array<RecordPlanItem>;
    /**
     * 录制计划总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChannelsByLiveRecordPlan请求参数结构体
 */
export interface DescribeChannelsByLiveRecordPlanRequest {
    /**
     * 录制计划ID
     */
    PlanId: string;
    /**
     * 分页偏移量
     */
    Offset?: number;
    /**
     * 分页大小
     */
    Limit?: number;
}
/**
 * ControlChannelLocalRecord请求参数结构体
 */
export interface ControlChannelLocalRecordRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * 通道唯一标识
     */
    ChannelId: string;
    /**
     * 流Id，流的唯一标识
     */
    StreamId: string;
    /**
     * 控制参数，转义的json字符串
  
  目前支持的command：
  "Command": "{"Action":"PAUSE"}" 暂停
  "Command": "{"Action":"PLAY"}" 暂停恢复
  "Command": "{"Action":"PLAY","Offset":"15"}" 基于文件起始时间点的位置偏移，单位秒
     */
    Command: string;
}
/**
 * ControlChannelLocalRecord返回参数结构体
 */
export interface ControlChannelLocalRecordResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetTimeTemplateById请求参数结构体
 */
export interface GetTimeTemplateByIdRequest {
    /**
     * 时间模板ID
     */
    TemplateId: string;
}
/**
 * 录制计划详情
 */
export interface RecordPlanItem {
    /**
     * 计划ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PlanId: string;
    /**
     * 计划名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 时间模板ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeTemplateId: string;
    /**
     * 时间模板名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeTemplateName: string;
    /**
     * 录制类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventId: number;
    /**
     * 绑定的设备列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Devices: Array<DeviceItem>;
    /**
     * 录像存储天数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecordStorageTime?: number;
}
/**
 * DescribeMessageForwards返回参数结构体
 */
export interface DescribeMessageForwardsResponse {
    /**
     * 配置总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 配置列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List: Array<MessageForward>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyVideoInfo请求参数结构体
 */
export interface ModifyVideoInfoRequest {
    /**
     * 视频ID列表长度限制100内
     */
    InitIDs: Array<number | bigint>;
    /**
     * 过期时间 时间戳 -1: 永不过期 0: 无效值
     */
    ExpireTime: number;
}
/**
 * DescribeCurrentDeviceData返回参数结构体
 */
export interface DescribeCurrentDeviceDataResponse {
    /**
     * 通道数
     */
    Channels: number;
    /**
     * 设备数
     */
    Devices: number;
    /**
     * 在线通道数
     */
    OnlineChannels: number;
    /**
     * 在线设备数
     */
    OnlineDevices: number;
    /**
     * 正在录制通道数
     */
    RecordingChannels: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * GetRecordPlanById返回参数结构体
 */
export interface GetRecordPlanByIdResponse {
    /**
     * 录制计划详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Plan?: RecordPlanItem;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTimeTemplate请求参数结构体
 */
export interface DeleteTimeTemplateRequest {
    /**
     * 时间模板ID
     */
    TemplateId: string;
}
/**
 * DeleteWarning返回参数结构体
 */
export interface DeleteWarningResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyLiveChannel请求参数结构体
 */
export interface ModifyLiveChannelRequest {
    /**
     * 直播频道ID
     */
    LiveChannelId: string;
    /**
     * 直播频道名
     */
    LiveChannelName: string;
}
/**
 * DescribeMessageForward返回参数结构体
 */
export interface DescribeMessageForwardResponse {
    /**
     * 区域ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId: string;
    /**
     * 区域名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionName: string;
    /**
     * 实例ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Instance: string;
    /**
     * 实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName: string;
    /**
     * 配置ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntId: number;
    /**
     * json数组， 转发类型 1: 告警 2:GPS
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MessageType: string;
    /**
     * kafka topic id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId: string;
    /**
     * 配置创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 用户Uin信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Uin: string;
    /**
     * kafka topic 名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRecordingPlanById返回参数结构体
 */
export interface DescribeRecordingPlanByIdResponse {
    /**
     * 录制计划详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Plan?: RecordPlanDetail;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWarnMod请求参数结构体
 */
export declare type DescribeWarnModRequest = null;
/**
 * ModifyBindRecordingPlan返回参数结构体
 */
export interface ModifyBindRecordingPlanResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeLiveRecordPlanIds请求参数结构体
 */
export interface DescribeLiveRecordPlanIdsRequest {
    /**
     * 时间模板ID
     */
    TemplateId?: string;
    /**
     * 分页偏移量
     */
    Offset?: number;
    /**
     * 分页大小
     */
    Limit?: number;
}
/**
 * DeleteLiveVideoList请求参数结构体
 */
export interface DeleteLiveVideoListRequest {
    /**
     * 视频ID 列表, 大小限制(100)
     */
    IntIDs: Array<number | bigint>;
}
/**
 * ModifyVideoInfo返回参数结构体
 */
export interface ModifyVideoInfoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyMessageForward返回参数结构体
 */
export interface ModifyMessageForwardResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDeviceList返回参数结构体
 */
export interface DescribeDeviceListResponse {
    /**
     * 设备总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 设备详细信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Devices: Array<AllDeviceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeScenes请求参数结构体
 */
export interface DescribeScenesRequest {
    /**
     * 条数限制
     */
    Limit: number;
    /**
     * 偏移
     */
    Offset?: number;
}
/**
 * DeleteLiveRecordPlan返回参数结构体
 */
export interface DeleteLiveRecordPlanResponse {
    /**
     * 删除状态描述
     */
    Status: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBindSceneChannels请求参数结构体
 */
export interface DescribeBindSceneChannelsRequest {
    /**
     * 条数限制最大不能超过1000
     */
    Limit: number;
    /**
     * 场景ID
     */
    SceneId?: number;
    /**
     * 偏移值
     */
    Offset?: number;
}
/**
 * DescribePresetList返回参数结构体
 */
export interface DescribePresetListResponse {
    /**
     * 预置列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<PresetItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeGroupById返回参数结构体
 */
export interface DescribeGroupByIdResponse {
    /**
     * 分组信息详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Group: GroupItem;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ControlRecordStream返回参数结构体
 */
export interface ControlRecordStreamResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteMessageForward请求参数结构体
 */
export interface DeleteMessageForwardRequest {
    /**
     * 配置ID
     */
    IntId: number;
}
/**
 * DeleteLiveChannel返回参数结构体
 */
export interface DeleteLiveChannelResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 拉流地址，只有在推流情况下才有
 */
export interface StreamAddress {
    /**
     * 流ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StreamId?: string;
    /**
     * rtsp流地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RtspAddr?: string;
    /**
     * rtmp流地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RtmpAddr?: string;
    /**
     * hls流地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HlsAddr?: string;
    /**
     * flv流地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlvAddr?: string;
}
/**
 * BindGroupDevices返回参数结构体
 */
export interface BindGroupDevicesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeChannelLocalRecordURL返回参数结构体
 */
export interface DescribeChannelLocalRecordURLResponse {
    /**
     * 结果
     */
    Data: DescribeRecordStreamData;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 大盘统计-录像存储统计 出参RecordStatistic
 */
export interface RecordStatistic {
    /**
     * 时间戳
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Time: number;
    /**
     * 统计结果
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value: RecordStatisticValue;
}
/**
 * DescribeVideoList请求参数结构体
 */
export interface DescribeVideoListRequest {
    /**
     * 偏移
     */
    Offset: number;
    /**
     * 限制
     */
    Limit: number;
    /**
     * 开始时间戳，秒级
     */
    StartTime?: number;
    /**
     * 结束时间戳，秒级
     */
    EndTime?: number;
    /**
     * 设备Id
     */
    DeviceId?: string;
    /**
     * 开始录制范围 开始
     */
    StartRecordTime?: number;
    /**
     * 开始录制范围 结束
     */
    EndRecordTime?: number;
    /**
     * 过期时间范围 开始
     */
    StartExpireTime?: number;
    /**
     * 过期时间范围 结束
     */
    EndExpireTime?: number;
    /**
     * 文件大小范围 开始 单位byte
     */
    StartFileSize?: number;
    /**
     * 文件大小范围 结束 单位byte
     */
    EndFileSize?: number;
    /**
     * 录制状态 99: 录制方已经回写状态 1: 开始录制了，等待回写 2: 已经到了时间模板的停止时间，在等待录制方回写
     */
    IsRecording?: number;
    /**
     * 通道ID默认必传
     */
    ChannelId?: string;
    /**
     * 录制计划ID
     */
    PlanId?: string;
    /**
     * 场景ID
     */
    SceneId?: number;
    /**
     * 告警ID
     */
    WarnId?: number;
    /**
     * 录制类型 1: 联动计划录制 2: 告警录制
     */
    RecordType?: Array<number | bigint>;
}
/**
 * CreateLiveRecordPlan请求参数结构体
 */
export interface CreateLiveRecordPlanRequest {
    /**
     * 录制计划名
     */
    PlanName: string;
    /**
     * 计划类型 1：固定直播 2：移动直播
     */
    PlanType: number;
    /**
     * 时间模板ID,固定直播时为必填
     */
    TemplateId?: string;
    /**
     * 录制文件存储时长，单位天，默认30天
     */
    RecordStorageTime?: number;
    /**
     * 绑定的直播频道ID列表
     */
    LiveChannelIds?: Array<string>;
}
/**
 * DescribeDevicePassWord返回参数结构体
 */
export interface DescribeDevicePassWordResponse {
    /**
     * 设备密码
     */
    PassWord?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyScene返回参数结构体
 */
export interface ModifySceneResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBindSceneDevices请求参数结构体
 */
export interface DescribeBindSceneDevicesRequest {
    /**
     * 场景ID
     */
    SceneId?: number;
    /**
     * 偏移值
     */
    Offset?: number;
    /**
     * 条数限制最大不能超过1000
     */
    Limit?: number;
}
/**
 * DescribeBindSceneDevices返回参数结构体
 */
export interface DescribeBindSceneDevicesResponse {
    /**
     * 总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total: number;
    /**
     * 设备列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List: Array<DeviceItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeMonitorDataByDate返回参数结构体
 */
export interface DescribeMonitorDataByDateResponse {
    /**
     * 统计数据列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: Array<RecordStatistic>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyLiveVideo请求参数结构体
 */
export interface ModifyLiveVideoRequest {
    /**
     * 视频ID 列表, 大小限制(100)
     */
    IntIDs: Array<number | bigint>;
    /**
     * 过期时间 秒 (-1: 为永不过期)
     */
    ExpireTime: number;
}
/**
 * DescribeChannelLocalRecordURL请求参数结构体
 */
export interface DescribeChannelLocalRecordURLRequest {
    /**
     * 设备唯一标识
     */
    DeviceId: string;
    /**
     * 通道唯一标识
     */
    ChannelId: string;
    /**
     * 录像文件Id，通过获取本地录像返回
     */
    RecordId: string;
    /**
     * UNIX 时间戳，30天内，URL失效时间，如180s无人观看此流则URL提前失效
     */
    ExpireTime: number;
    /**
     * 录像文件推送的开始时间，需要在RecordId参数起始时间内，可以通过此参数控制回放流起始点
     */
    StartTime?: number;
    /**
     * 录像文件推送的结束时间，需要在RecordId参数起始时间内，可以通过此参数控制回放流起始点
     */
    EndTime?: number;
}
/**
 * CreateMessageForward返回参数结构体
 */
export interface CreateMessageForwardResponse {
    /**
     * 配置ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IntId: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateLiveChannel请求参数结构体
 */
export interface CreateLiveChannelRequest {
    /**
     * 直播频道名称
     */
    LiveChannelName: string;
    /**
     * 直播频道类型 1：固定直播；2：移动直播
     */
    LiveChannelType: number;
}
/**
 * DescribeGroupDevices返回参数结构体
 */
export interface DescribeGroupDevicesResponse {
    /**
     * 分组绑定的设备数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount: number;
    /**
     * 设备详情列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeviceList: Array<GroupDeviceItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteScene请求参数结构体
 */
export interface DeleteSceneRequest {
    /**
     * 场景ID
     */
    IntId: number;
}
/**
 * CreateRecordingPlan请求参数结构体
 */
export interface CreateRecordingPlanRequest {
    /**
     * 计划名称
     */
    Name: string;
    /**
     * 时间模板ID
     */
    TimeTemplateId: string;
    /**
     * 该录制计划绑定的通道列表
     */
    Channels?: Array<ChannelItem>;
    /**
     * 存储周期(天)；默认存储30天
     */
    RecordStorageTime?: number;
}
/**
 * DescribeLiveStream返回参数结构体
 */
export interface DescribeLiveStreamResponse {
    /**
     * 拉流地址，只有在推流情况下才有
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data: StreamAddress;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
