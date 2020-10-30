/**
 * DescribeAbnormalEvent返回参数结构体
 */
export interface DescribeAbnormalEventResponse {
    /**
      * 返回的数据总条数
      */
    Total?: number;
    /**
      * 异常体验列表
      */
    AbnormalExperienceList?: Array<AbnormalExperience>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询秒级监控返回的数据
 */
export interface RealtimeData {
    /**
      * 返回的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: Array<TimeValue>;
    /**
      * 数据类型字段
      */
    DataType: string;
}
/**
 * DescribeAbnormalEvent请求参数结构体
 */
export interface DescribeAbnormalEventRequest {
    /**
      * 用户SDKAppID，查询SDKAppID下任意20条异常体验事件（可能不同房间）
      */
    SdkAppId: string;
    /**
      * 查询开始时间
      */
    StartTime: number;
    /**
      * 查询结束时间
      */
    EndTime: number;
    /**
      * 房间号，查询房间内任意20条以内异常体验事件
      */
    RoomId?: string;
}
/**
 * MCU混流布局参数
 */
export interface LayoutParams {
    /**
      * 混流布局模板ID，0为悬浮模板(默认);1为九宫格模板;2为屏幕分享模板;3为画中画模板。
      */
    Template?: number;
    /**
      * 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的用户ID。
      */
    MainVideoUserId?: string;
    /**
      * 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的流类型，0为摄像头，1为屏幕分享。左侧大画面为web用户时此值填0。
      */
    MainVideoStreamType?: number;
    /**
      * 画中画模板中有效，代表小画面的布局参数。
      */
    SmallVideoLayoutParams?: SmallVideoLayoutParams;
    /**
      * 屏幕分享模板有效。设置为1时代表大画面居右，小画面居左布局。默认为0。
      */
    MainVideoRightAlign?: number;
    /**
      * 悬浮模板、九宫格、屏幕分享模板有效。设置此参数后，输出流混合此参数中包含用户的音视频，以及其他用户的纯音频。最多可设置16个用户。
      */
    MixVideoUids?: Array<string>;
}
/**
 * 返回的质量数据，时间:值
 */
export interface TimeValue {
    /**
      * 时间，unix时间戳（1590065877s)
      */
    Time: number;
    /**
      * 当前时间返回参数取值，如（bigvCapFps在1590065877取值为0，则Value：0 ）
      */
    Value: number;
}
/**
 * StopMCUMixTranscode返回参数结构体
 */
export interface StopMCUMixTranscodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRealtimeScale返回参数结构体
 */
export interface DescribeRealtimeScaleResponse {
    /**
      * 返回的数据数组
      */
    Data?: Array<RealtimeData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DismissRoom返回参数结构体
 */
export interface DismissRoomResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRealtimeNetwork返回参数结构体
 */
export interface DescribeRealtimeNetworkResponse {
    /**
      * 查询返回的数据
      */
    Data?: Array<RealtimeData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeUserInformation请求参数结构体
 */
export interface DescribeUserInformationRequest {
    /**
      * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位为s）例：1400353843_218695_1590065777。通过 DescribeRoomInformation（查询房间列表）接口获取（链接：https://cloud.tencent.com/document/product/647/44050）
      */
    CommId: string;
    /**
      * 查询开始时间，5天内。本地unix时间戳（1588031999s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588031999s）
      */
    EndTime: number;
    /**
      * 用户SDKAppID（1400188366）
      */
    SdkAppId: string;
    /**
      * 需查询的用户数组，不填默认返回6个用户,最多可填6个用户
      */
    UserIds?: Array<string>;
    /**
      * 设置分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回6条数据）
      */
    PageNumber?: string;
    /**
      * 设置分页大小（PageNumber和PageSize 其中一个不填均默认返回6条数据,PageSize最大不超过100）
      */
    PageSize?: string;
}
/**
 * DescribeCallDetail请求参数结构体
 */
export interface DescribeCallDetailRequest {
    /**
      * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位为s）例：1400353843_218695_1590065777。通过 DescribeRoomInformation（查询房间列表）接口获取（链接：https://cloud.tencent.com/document/product/647/44050）
      */
    CommId: string;
    /**
      * 查询开始时间，5天内。本地unix时间戳（1588031999s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588031999s）
      */
    EndTime: number;
    /**
      * 用户SDKAppID（1400188366）
      */
    SdkAppId: string;
    /**
      * 需查询的用户数组，不填默认返回6个用户,最多可填6个用户
      */
    UserIds?: Array<string>;
    /**
      * 需查询的指标，不填则只返回用户列表，填all则返回所有指标。
appCpu：APP CPU使用率；
sysCpu：系统 CPU使用率；
aBit：上/下行音频码率；
aBlock：音频卡顿时长；
bigvBit：上/下行视频码率；
bigvCapFps：视频采集帧率；
bigvEncFps：视频发送帧率；
bigvDecFps：渲染帧率；
bigvBlock：视频卡顿时长；
aLoss：上/下行音频丢包；
bigvLoss：上/下行视频丢包；
bigvWidth：上/下行分辨率宽；
bigvHeight：上/下行分辨率高
      */
    DataType?: Array<string>;
    /**
      * 设置分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回6条数据）
      */
    PageNumber?: string;
    /**
      * 设置分页大小（PageNumber和PageSize 其中一个不填均默认返回6条数据,DataType，UserIds不为null，PageSize最大不超过6，DataType，UserIds为null，PageSize最大不超过100）
      */
    PageSize?: string;
}
/**
 * DescribeRealtimeNetwork请求参数结构体
 */
export interface DescribeRealtimeNetworkRequest {
    /**
      * 查询开始时间，24小时内，本地unix时间戳（1588031999s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588031999s）
      */
    EndTime: number;
    /**
      * 用户sdkappid
      */
    SdkAppId: string;
    /**
      * 需查询的数据类型
sendLossRateRaw：上行丢包率
recvLossRateRaw：下行丢包率
      */
    DataType?: Array<string>;
}
/**
 * DescribeUserInformation返回参数结构体
 */
export interface DescribeUserInformationResponse {
    /**
      * 返回的用户总条数
      */
    Total?: number;
    /**
      * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserList?: Array<UserInformation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * MCU混流输出流编码参数
 */
export interface EncodeParams {
    /**
      * 混流-输出流音频采样率。取值为[48000, 44100, 32000,24000,, 16000, 12000, 8000]，单位是Hz。
      */
    AudioSampleRate: number;
    /**
      * 混流-输出流音频码率。取值范围[8,500]，单位为Kbps。
      */
    AudioBitrate: number;
    /**
      * 混流-输出流音频声道数，取值范围[1,2]，1表示混流输出音频为单声道，2表示混流输出音频为双声道。
      */
    AudioChannels: number;
    /**
      * 混流-输出流宽，音视频输出时必填。取值范围[0,1920]，单位为像素值。
      */
    VideoWidth?: number;
    /**
      * 混流-输出流高，音视频输出时必填。取值范围[0,1080]，单位为像素值。
      */
    VideoHeight?: number;
    /**
      * 混流-输出流码率，音视频输出时必填。取值范围[1,10000]，单位为Kbps。
      */
    VideoBitrate?: number;
    /**
      * 混流-输出流帧率，音视频输出时必填。取值范围[1,60]，表示混流的输出帧率可选范围为1到60fps。
      */
    VideoFramerate?: number;
    /**
      * 混流-输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。
      */
    VideoGop?: number;
    /**
      * 混流-输出流背景色。
      */
    BackgroundColor?: number;
    /**
      * 混流-输出流背景图片，取值为实时音视频控制台上传的图片ID。
      */
    BackgroundImageId?: number;
}
/**
 * StartMCUMixTranscode请求参数结构体
 */
export interface StartMCUMixTranscodeRequest {
    /**
      * TRTC的SDKAppId。
      */
    SdkAppId: number;
    /**
      * 房间号。
      */
    RoomId: number;
    /**
      * 混流输出控制参数。
      */
    OutputParams: OutputParams;
    /**
      * 混流输出编码参数。
      */
    EncodeParams: EncodeParams;
    /**
      * 混流输出布局参数。
      */
    LayoutParams: LayoutParams;
}
/**
 * DescribeRealtimeQuality返回参数结构体
 */
export interface DescribeRealtimeQualityResponse {
    /**
      * 返回的数据类型
      */
    Data?: Array<RealtimeData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopMCUMixTranscode请求参数结构体
 */
export interface StopMCUMixTranscodeRequest {
    /**
      * TRTC的SDKAppId。
      */
    SdkAppId: number;
    /**
      * 房间号。
      */
    RoomId: number;
}
/**
 * 用户信息，包括用户进房时间，退房时间等
 */
export interface UserInformation {
    /**
      * 房间号
      */
    RoomStr: string;
    /**
      * 用户Id
      */
    UserId: string;
    /**
      * 用户进房时间
      */
    JoinTs: number;
    /**
      * 用户退房时间，用户没有退房则返回当前时间
      */
    LeaveTs: number;
    /**
      * 终端类型
      */
    DeviceType: string;
    /**
      * Sdk版本号
      */
    SdkVersion: string;
    /**
      * 客户端IP地址
      */
    ClientIp: string;
    /**
      * 判断用户是否已经离开房间
      */
    Finished: boolean;
}
/**
 * DescribeHistoryScale请求参数结构体
 */
export interface DescribeHistoryScaleRequest {
    /**
      * 用户sdkappid
      */
    SdkAppId: string;
    /**
      * 查询开始时间，5天内。本地unix时间戳（1588031999s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588031999s）
      */
    EndTime: number;
}
/**
 * DescribeRoomInformation返回参数结构体
 */
export interface DescribeRoomInformationResponse {
    /**
      * 返回的数据总条数
      */
    Total?: number;
    /**
      * 房间信息列表
      */
    RoomList?: Array<RoomState>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RemoveUser请求参数结构体
 */
export interface RemoveUserRequest {
    /**
      * TRTC的SDKAppId。
      */
    SdkAppId: number;
    /**
      * 房间号。
      */
    RoomId: number;
    /**
      * 要移出的用户列表，最多10个。
      */
    UserIds: Array<string>;
}
/**
 * MCU混流的输出参数
 */
export interface OutputParams {
    /**
      * 直播流 ID，由用户自定义设置，该流 ID 不能与用户旁路的流 ID 相同。
      */
    StreamId: string;
    /**
      * 取值范围[0,1]， 填0：直播流为音视频(默认); 填1：直播流为纯音频
      */
    PureAudioStream?: number;
    /**
      * 自定义录制文件名
      */
    RecordId?: string;
    /**
      * 取值范围[0,1]，填0无实际含义; 填1：指定录制文件格式为mp3
      */
    RecordAudioOnly?: number;
}
/**
 * 事件信息，包括，事件时间戳，事件ID,
 */
export interface EventMessage {
    /**
      * 视频流类型：
0：与视频无关的事件；
2：视频为大画面；
3：视频为小画面；
7：视频为旁路画面；
      */
    Type: number;
    /**
      * 事件上报的时间戳，unix时间（1589891188801ms)
      */
    Time: number;
    /**
      * 事件Id：分为sdk的事件和webrtc的事件，详情见：附录/事件 ID 映射表：https://cloud.tencent.com/document/product/647/44916
      */
    EventId: number;
    /**
      * 事件的第一个参数，如视频分辨率宽
      */
    ParamOne: number;
    /**
      * 事件的第二个参数，如视频分辨率高
      */
    ParamTwo: number;
}
/**
 * CreateTroubleInfo返回参数结构体
 */
export interface CreateTroubleInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Es返回的质量数据
 */
export interface QualityData {
    /**
      * 数据内容
      */
    Content: Array<TimeValue>;
    /**
      * 用户ID
      */
    UserId: string;
    /**
      * 对端Id,为空时表示上行数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    PeerId: string;
    /**
      * 数据类型
      */
    DataType: string;
}
/**
 * 造成异常体验可能的异常事件类型
 */
export interface AbnormalEvent {
    /**
      * 异常事件ID，具体值查看附录：异常体验ID映射表：https://cloud.tencent.com/document/product/647/44916
      */
    AbnormalEventId: number;
    /**
      * 远端用户ID,""：表示异常事件不是由远端用户产生
注意：此字段可能返回 null，表示取不到有效值。
      */
    PeerId: string;
}
/**
 * DescribeRealtimeQuality请求参数结构体
 */
export interface DescribeRealtimeQualityRequest {
    /**
      * 查询开始时间，24小时内。本地unix时间戳（1588031999s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588031999s）
      */
    EndTime: number;
    /**
      * 用户sdkappid
      */
    SdkAppId: string;
    /**
      * 查询的数据类型
enterTotalSuccPercent：进房成功率
fistFreamInSecRate：首帧秒开率
blockPercent：视频卡顿率
audioBlockPercent：音频卡顿率
      */
    DataType?: Array<string>;
}
/**
 * 历史规模信息
 */
export interface ScaleInfomation {
    /**
      * 每天开始的时间
      */
    Time: number;
    /**
      * 房间人数，用户重复进入同一个房间为1次
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserNumber: number;
    /**
      * 房间人次，用户每次进入房间为一次
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserCount: number;
    /**
      * sdkappid下一天内的房间数
注意：此字段可能返回 null，表示取不到有效值。
      */
    RoomNumbers: number;
}
/**
 * CreateTroubleInfo请求参数结构体
 */
export interface CreateTroubleInfoRequest {
    /**
      * 应用的ID
      */
    SdkAppId: string;
    /**
      * 房间ID
      */
    RoomId: string;
    /**
      * 老师用户ID
      */
    TeacherUserId: string;
    /**
      * 学生用户ID
      */
    StudentUserId: string;
    /**
      * 体验异常端（老师或学生）的用户 ID。
      */
    TroubleUserId: string;
    /**
      * 异常类型。
1. 仅视频异常
2. 仅声音异常
3. 音视频都异常
5. 进房异常
4. 切课
6. 求助
7. 问题反馈
8. 投诉
      */
    TroubleType: number;
    /**
      * 异常发生的UNIX 时间戳，单位为秒。
      */
    TroubleTime: number;
    /**
      * 异常详情
      */
    TroubleMsg: string;
}
/**
 * sdk或webrtc的事件列表。
 */
export interface EventList {
    /**
      * 数据内容
      */
    Content: Array<EventMessage>;
    /**
      * 发送端的userId
      */
    PeerId: string;
}
/**
 * DismissRoom请求参数结构体
 */
export interface DismissRoomRequest {
    /**
      * TRTC的SDKAppId。
      */
    SdkAppId: number;
    /**
      * 房间号。
      */
    RoomId: number;
}
/**
 * DescribeDetailEvent返回参数结构体
 */
export interface DescribeDetailEventResponse {
    /**
      * 返回的事件列表
      */
    Data?: Array<EventList>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartMCUMixTranscode返回参数结构体
 */
export interface StartMCUMixTranscodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 画中画模板中有效，代表小画面的布局参数
 */
export interface SmallVideoLayoutParams {
    /**
      * 代表小画面对应的用户ID。
      */
    UserId: string;
    /**
      * 代表小画面对应的流类型，0为摄像头，1为屏幕分享。小画面为web用户时此值填0。
      */
    StreamType: number;
    /**
      * 小画面在输出时的宽度，单位为像素值，不填默认为0。
      */
    ImageWidth?: number;
    /**
      * 小画面在输出时的高度，单位为像素值，不填默认为0。
      */
    ImageHeight?: number;
    /**
      * 小画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。
      */
    LocationX?: number;
    /**
      * 小画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。
      */
    LocationY?: number;
}
/**
 * DescribeRealtimeScale请求参数结构体
 */
export interface DescribeRealtimeScaleRequest {
    /**
      * 查询开始时间，24小时内。本地unix时间戳（1588031999s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588031999s）
      */
    EndTime: number;
    /**
      * 用户sdkappid
      */
    SdkAppId: string;
    /**
      * 查询的数据类型
UserNum：通话人数；
RoomNum：房间数
      */
    DataType?: Array<string>;
}
/**
 * DescribeCallDetail返回参数结构体
 */
export interface DescribeCallDetailResponse {
    /**
      * 返回的用户总条数
      */
    Total?: number;
    /**
      * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserList?: Array<UserInformation>;
    /**
      * 质量数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: Array<QualityData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRoomInformation请求参数结构体
 */
export interface DescribeRoomInformationRequest {
    /**
      * 用户sdkappid
      */
    SdkAppId: string;
    /**
      * 查询开始时间，5天内。本地unix时间戳（1588031999s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588031999s）
      */
    EndTime: number;
    /**
      * 数字房间号
      */
    RoomId?: string;
    /**
      * 分页index，从0开始（PageNumber和PageSize 其中一个不填均默认返回10条数据）
      */
    PageNumber?: string;
    /**
      * 分页大小（PageNumber和PageSize 其中一个不填均默认返回10条数据,最大不超过100）
      */
    PageSize?: string;
}
/**
 * DescribeDetailEvent请求参数结构体
 */
export interface DescribeDetailEventRequest {
    /**
      * 通话 ID（唯一标识一次通话）： sdkappid_roomgString（房间号_createTime（房间创建时间，unix时间戳，单位s）。通过 DescribeRoomInformation（查询房间列表）接口获取。（链接：https://cloud.tencent.com/document/product/647/44050）
      */
    CommId: string;
    /**
      * 查询开始时间，5天内。本地unix时间戳（1588031999s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588031999s）
      */
    EndTime: number;
    /**
      * 用户id
      */
    UserId: string;
    /**
      * 房间号
      */
    RoomId: string;
}
/**
 * 用户的异常体验及可能的原因
 */
export interface AbnormalExperience {
    /**
      * 用户ID
      */
    UserId: string;
    /**
      * 异常体验ID
      */
    ExperienceId: number;
    /**
      * 字符串房间号
      */
    RoomId: string;
    /**
      * 异常事件数组
      */
    AbnormalEventList: Array<AbnormalEvent>;
    /**
      * 异常事件的上报时间
      */
    EventTime: number;
}
/**
 * 房间信息列表
 */
export interface RoomState {
    /**
      * 通话ID（唯一标识一次通话）
      */
    CommId: string;
    /**
      * 房间号
      */
    RoomString: string;
    /**
      * 房间创建时间
      */
    CreateTime: number;
    /**
      * 房间销毁时间
      */
    DestroyTime: number;
    /**
      * 房间是否已经结束
      */
    IsFinished: boolean;
    /**
      * 房间创建者Id
      */
    UserId: string;
}
/**
 * RemoveUser返回参数结构体
 */
export interface RemoveUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeHistoryScale返回参数结构体
 */
export interface DescribeHistoryScaleResponse {
    /**
      * 返回的数据条数
      */
    Total?: number;
    /**
      * 返回的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScaleList?: Array<ScaleInfomation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
