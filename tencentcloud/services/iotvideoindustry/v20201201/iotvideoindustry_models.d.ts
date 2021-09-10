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
      */
    Command: string;
    /**
      * 通道唯一标识
      */
    ChannelId?: string;
}
/**
 * DeleteTimeTemplate返回参数结构体
 */
export interface DeleteTimeTemplateResponse {
    /**
      * 操作结果，OK：成功，其他：失败
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetTimeTemplates请求参数结构体
 */
export declare type GetTimeTemplatesRequest = null;
/**
 * SIIP服务器相关配置项
 */
export interface ServerConfiguration {
    /**
      * SIP服务器地址
      */
    Host: string;
    /**
      * SIP服务器端口
      */
    Port: number;
    /**
      * SIP服务器编码
      */
    Serial: string;
    /**
      * SIP服务器域
      */
    Realm: string;
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
    Dates: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Data: DescribeDeviceStreamsData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSIPServer请求参数结构体
 */
export declare type DescribeSIPServerRequest = null;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateDeviceGroup返回参数结构体
 */
export interface UpdateDeviceGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 偏移量，默认0
      */
    Offset: number;
    /**
      * 限制量，默认200
      */
    Limit: number;
    /**
      * 0：查询指定日期的录像；1：查询最近一天的录像；默认0
      */
    LatestDay?: number;
    /**
      * 指定某天。取值【YYYY-MM-DD】
当LatestDay为空或为0时，本参数不允许为空。
      */
    Date?: string;
    /**
      * 通道唯一标识
      */
    ChannelId?: string;
    /**
      * 1: 云端录制 2: 本地录制
      */
    Type?: number;
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
    ChannelTypes?: Array<number>;
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
    Status: string;
    /**
      * 分组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    VideoList: Array<RecordTaskItem>;
    /**
      * 录像总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateTimeTemplate返回参数结构体
 */
export interface UpdateTimeTemplateResponse {
    /**
      * 操作结果，“OK”表示成功，其他表示失败。
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * GetRecordPlanById返回参数结构体
 */
export interface GetRecordPlanByIdResponse {
    /**
      * 录制计划详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Plan: RecordPlanItem;
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
      * 设备类型过滤
      */
    DeviceTypes?: Array<number>;
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
}
/**
 * GetRecordPlanByDev返回参数结构体
 */
export interface GetRecordPlanByDevResponse {
    /**
      * 录制计划详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Plan: RecordPlanItem;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      */
    StatisticField: string;
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
 * CreateDevice返回参数结构体
 */
export interface CreateDeviceResponse {
    /**
      * 设备编码
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeviceCode: string;
    /**
      * 设备唯一标识
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeviceId: string;
    /**
      * 设备虚拟组信息，仅在创建NVR/VMS时返回该值
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirtualGroupId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 设备类型 2:国标IPC设备; 3:NVR设备
      */
    DeviceType?: number;
    /**
      * 设备需要绑定的分组ID，参数为空则默认绑定到根分组
      */
    GroupId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 流失效时间
      */
    ExpireTime: number;
    /**
      * 录像文件Id
      */
    RecordId?: string;
    /**
      * 录像流开始时间，当录像文件Id为空时有效
      */
    StartTime?: number;
    /**
      * 录像流结束时间，当录像文件Id为空时有效
      */
    EndTime?: number;
    /**
      * 通道唯一标识
      */
    ChannelId?: string;
}
/**
 * GetTimeTemplateById返回参数结构体
 */
export interface GetTimeTemplateByIdResponse {
    /**
      * 时间模板详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Template: TimeTemplateItem;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ControlDevicePTZ返回参数结构体
 */
export interface ControlDevicePTZResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
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
      * 当Group是普通组的时候，支持根据deviceTypes筛选类型
 0: 普通摄像头1:  国标VMS设备 2: 国标IPC设备 3: 国标NVR设备  4: 国标NVR通道 5: 国标VMS通道 6: 国标IPC通道 9: 智能告警设备 10: 带有RTSP固定地址的设备
      */
    DeviceTypes?: Array<number>;
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
 * UpdateDevicePassWord返回参数结构体
 */
export interface UpdateDevicePassWordResponse {
    /**
      * 操作结果，“OK”表示成功，其他表示失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 通道唯一标识
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    PlanId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DeleteDeviceGroup请求参数结构体
 */
export interface DeleteDeviceGroupRequest {
    /**
      * 分组ID
      */
    GroupId: string;
}
/**
 * DescribeDeviceGroup返回参数结构体
 */
export interface DescribeDeviceGroupResponse {
    /**
      * 设备所在分组信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    DevGroups: Array<DevGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * GetRecordDatesByDev请求参数结构体
 */
export interface GetRecordDatesByDevRequest {
    /**
      * 设备唯一标识
      */
    DeviceId: string;
    /**
      * 偏移量，默认0
      */
    Offset: number;
    /**
      * 限制量，默认200
      */
    Limit: number;
    /**
      * 通道唯一标识
      */
    ChannelId?: string;
    /**
      * 1: 云端录制 2: 本地录制
      */
    Type?: number;
}
/**
 * GetTimeTemplates返回参数结构体
 */
export interface GetTimeTemplatesResponse {
    /**
      * 时间模板列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Templates: Array<TimeTemplateItem>;
    /**
      * 时间模板总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDevicePassWord返回参数结构体
 */
export interface DescribeDevicePassWordResponse {
    /**
      * 设备密码
      */
    PassWord: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAllDeviceList返回参数结构体
 */
export interface DescribeAllDeviceListResponse {
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    RtspAddr: string;
    /**
      * rtmp地址
      */
    RtmpAddr: string;
    /**
      * hls地址
      */
    HlsAddr: string;
    /**
      * flv地址
      */
    FlvAddr: string;
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
 * CreateTimeTemplate返回参数结构体
 */
export interface CreateTimeTemplateResponse {
    /**
      * 时间模板ID
      */
    TemplateId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 某天的统计数额
 */
export interface StatisticItem {
    /**
      * 日期。格式【YYYY-MM-DD】
注意：此字段可能返回 null，表示取不到有效值。
      */
    Date: string;
    /**
      * 统计数额
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sum: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * UpdateRecordPlan返回参数结构体
 */
export interface UpdateRecordPlanResponse {
    /**
      * 操作结果
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 是否全时录制，即7*24小时录制
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsAllWeek: number;
    /**
      * 是否为自定义模板
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
 * DescribeDeviceGroup请求参数结构体
 */
export interface DescribeDeviceGroupRequest {
    /**
      * 设备唯一标识列表
      */
    DeviceIds?: Array<string>;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteTimeTemplate请求参数结构体
 */
export interface DeleteTimeTemplateRequest {
    /**
      * 时间模板ID
      */
    TemplateId: string;
}
/**
 * DescribeVideoList返回参数结构体
 */
export interface DescribeVideoListResponse {
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 已废弃
      */
    VideoList: RecordTaskItem;
    /**
      * 录像详情列表
      */
    RecordList: Array<RecordTaskItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ControlRecordStream返回参数结构体
 */
export interface ControlRecordStreamResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindGroupDevices返回参数结构体
 */
export interface BindGroupDevicesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
}
/**
 * ModifyDeviceData返回参数结构体
 */
export interface ModifyDeviceDataResponse {
    /**
      * 操作结果,“OK”表示成功，其他表示失败。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDevice返回参数结构体
 */
export interface DeleteDeviceResponse {
    /**
      * 操作结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
