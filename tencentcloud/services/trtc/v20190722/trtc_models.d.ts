/**
 * DismissRoomByStrRoomId请求参数结构体
 */
export interface DismissRoomByStrRoomIdRequest {
    /**
      * TRTC的SDKAppId。
      */
    SdkAppId: number;
    /**
      * 房间号。
      */
    RoomId: string;
}
/**
 * DescribeAbnormalEvent返回参数结构体
 */
export interface DescribeAbnormalEventResponse {
    /**
      * 返回的数据总条数
      */
    Total: number;
    /**
      * 异常体验列表
      */
    AbnormalExperienceList: Array<AbnormalExperience>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 第三方云存储的账号信息。
 */
export interface CloudStorage {
    /**
      * 第三方云储存的供应商:
0：腾讯云存储 COS，暂不支持其他家。
      */
    Vendor: number;
    /**
      * 第三方云存储的地域信息。
      */
    Region: string;
    /**
      * 第三方存储桶信息。
      */
    Bucket: string;
    /**
      * 第三方存储的access_key账号信息。
      */
    AccessKey: string;
    /**
      * 第三方存储的secret_key账号信息。
      */
    SecretKey: string;
    /**
      * 第三方云存储bucket 的指定位置，由字符串数组组成。合法的字符串范围a~z,A~Z,0~9,'_'和'-'，举个例子，录制文件xxx.m3u8在 ["prefix1", "prefix2"]作用下，会变成prefix1/prefix2/TaskId/xxx.m3u8。
      */
    FileNamePrefix?: Array<string>;
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
      * 查询开始时间,本地unix时间戳（1592448600s）
      */
    StartTime: number;
    /**
      * 查询结束时间,本地unix时间戳（1592449080s）
      */
    EndTime: number;
    /**
      * 房间号，查询房间内任意20条以内异常体验事件
      */
    RoomId?: string;
}
/**
 * 查询旁路转码计费时长。
查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
 */
export interface SdkAppIdTrtcMcuTranscodeTimeUsage {
    /**
      * 本组数据对应的时间点，格式如：2020-09-07或2020-09-07 00:05:05。
      */
    TimeKey: string;
    /**
      * 语音时长，单位：秒。
      */
    AudioTime: number;
    /**
      * 视频时长-标清SD，单位：秒。
      */
    VideoTimeSd: number;
    /**
      * 视频时长-高清HD，单位：秒。
      */
    VideoTimeHd: number;
    /**
      * 视频时长-全高清FHD，单位：秒。
      */
    VideoTimeFhd: number;
}
/**
 * ModifyPicture返回参数结构体
 */
export interface ModifyPictureResponse {
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
 * DescribeCloudRecording返回参数结构体
 */
export interface DescribeCloudRecordingResponse {
    /**
      * 录制任务的唯一Id。
      */
    TaskId: string;
    /**
      * 云端录制任务的状态信息。
Idle：表示当前录制任务空闲中
InProgress：表示当前录制任务正在进行中。
Exited：表示当前录制任务正在退出的过程中。
      */
    Status: string;
    /**
      * 录制文件信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    StorageFileList: Array<StorageFile>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * StartMCUMixTranscodeByStrRoomId请求参数结构体
 */
export interface StartMCUMixTranscodeByStrRoomIdRequest {
    /**
      * TRTC的SDKAppId。
      */
    SdkAppId: number;
    /**
      * 字符串房间号。
      */
    StrRoomId: string;
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
    /**
      * 第三方CDN转推参数。
      */
    PublishCdnParams?: PublishCdnParams;
}
/**
 * CreatePicture请求参数结构体
 */
export interface CreatePictureRequest {
    /**
      * 应用id
      */
    SdkAppId: number;
    /**
      * 图片内容经base64编码后的string格式
      */
    Content: string;
    /**
      * 图片后缀名
      */
    Suffix: string;
    /**
      * 图片长度
      */
    Height: number;
    /**
      * 图片宽度
      */
    Width: number;
    /**
      * 显示位置x轴方向
      */
    XPosition: number;
    /**
      * 显示位置y轴方向
      */
    YPosition: number;
}
/**
 * DescribeTrtcMcuTranscodeTime请求参数结构体
 */
export interface DescribeTrtcMcuTranscodeTimeRequest {
    /**
      * 查询开始时间，格式为YYYY-MM-DD。
      */
    StartTime: string;
    /**
      * 查询结束时间，格式为YYYY-MM-DD。
单次查询统计区间最多不能超过31天。
      */
    EndTime: string;
    /**
      * 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。
      */
    SdkAppId?: number;
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
 * RemoveUserByStrRoomId请求参数结构体
 */
export interface RemoveUserByStrRoomIdRequest {
    /**
      * TRTC的SDKAppId。
      */
    SdkAppId: number;
    /**
      * 房间号。
      */
    RoomId: string;
    /**
      * 要移出的用户列表，最多10个。
      */
    UserIds: Array<string>;
}
/**
 * 指定订阅流白名单或者黑名单，音频的白名单和音频黑名单不能同时设置，视频亦然。同时实际并发订阅的媒体流路数最大支持25路流，混流场景下视频的多画面最大支持24画面。支持通过设置".*$"通配符，来前缀匹配黑白名单的UserId，注意房间里不能有和通配符规则相同的用户，否则将视为订阅具体用户，前缀规则会失效。
 */
export interface SubscribeStreamUserIds {
    /**
      * 订阅音频流白名单，指定订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表订阅UserId 1，2，3的音频流；["1.*$"], 代表订阅UserId前缀为1的音频流。默认不填订阅房间内所有的音频流，订阅列表用户数不超过32。
      */
    SubscribeAudioUserIds?: Array<string>;
    /**
      * 订阅音频流黑名单，指定不订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表不订阅UserId 1，2，3的音频流；["1.*$"], 代表不订阅UserId前缀为1的音频流。默认不填订阅房间内所有音频流，订阅列表用户数不超过32。
      */
    UnSubscribeAudioUserIds?: Array<string>;
    /**
      * 订阅视频流白名单，指定订阅哪几个UserId的视频流，例如["1", "2", "3"], 代表订阅UserId  1，2，3的视频流；["1.*$"], 代表订阅UserId前缀为1的视频流。默认不填订阅房间内所有视频流，订阅列表用户数不超过32。
      */
    SubscribeVideoUserIds?: Array<string>;
    /**
      * 订阅视频流黑名单，指定不订阅哪几个UserId的视频流，例如["1", "2", "3"], 代表不订阅UserId  1，2，3的视频流；["1.*$"], 代表不订阅UserId前缀为1的视频流。默认不填订阅房间内所有视频流，订阅列表用户数不超过32。
      */
    UnSubscribeVideoUserIds?: Array<string>;
}
/**
 * 录制的混流布局参数。

 */
export interface MixLayoutParams {
    /**
      * 布局模式:
1：悬浮布局；
2：屏幕分享布局；
3：九宫格布局（默认）；
4：自定义布局；

悬浮布局：默认第一个进入房间的主播（也可以指定一个主播）的视频画面会铺满整个屏幕。其他主播的视频画面从左下角开始依次按照进房顺序水平排列，显示为小画面，小画面悬浮于大画面之上。当画面数量小于等于17个时，每行4个（4 x 4排列）。当画面数量大于17个时，重新布局小画面为每行5个（5 x 5）排列。最多支持25个画面，如果用户只发送音频，仍然会占用画面位置。

屏幕分享布局：指定一个主播在屏幕左侧的大画面位置（如果不指定，那么大画面位置为背景色），其他主播自上而下依次垂直排列于右侧。当画面数量少于17个的时候，右侧每列最多8人，最多占据两列。当画面数量多于17个的时候，超过17个画面的主播从左下角开始依次水平排列。最多支持25个画面，如果主播只发送音频，仍然会占用画面位置。

九宫格布局：根据主播的数量自动调整每个画面的大小，每个主播的画面大小一致，最多支持25个画面。

自定义布局：根据需要在MixLayoutList内定制每个主播画面的布局。
      */
    MixLayoutMode: number;
    /**
      * 如果MixLayoutMode 选择为4自定义布局模式的话，设置此参数为每个主播所对应的布局画面的详细信息，最大不超过25个。
      */
    MixLayoutList?: Array<MixLayout>;
    /**
      * 录制背景颜色，RGB的颜色表的16进制表示，每个颜色通过8bit长度标识，默认为黑色。比如橙色对应的RGB为 R:255 G:165 B:0, 那么对应的字符串描述为#FFA500，格式规范：‘#‘开头，后面跟固定RGB的颜色值
      */
    BackGroundColor?: string;
    /**
      * 在布局模式为1：悬浮布局和 2：屏幕分享布局时，设定为显示大视频画面的UserId。不填的话：悬浮布局默认是第一个进房间的主播，屏幕分享布局默认是背景色
      */
    MaxResolutionUserId?: string;
    /**
      * 主辅路标识，
0：主流（默认）；
1：辅流（屏幕分享）；
这个位置的MediaId代表的是对应MaxResolutionUserId的主辅路，MixLayoutList内代表的是自定义用户的主辅路。
      */
    MediaId?: number;
    /**
      * 下载的url地址， 只支持jpg， png，大小限制不超过5M。
      */
    BackgroundImageUrl?: string;
    /**
      * 设置为1时代表启用占位图功能，0时代表不启用占位图功能，默认为0。启用占位图功能时，在预设位置的用户没有上行视频时可显示对应的占位图。
      */
    PlaceHolderMode?: number;
    /**
      * 背景画面宽高比不一致的时候处理方案，与MixLayoufList定义的RenderMode一致。
      */
    BackgroundImageRenderMode?: number;
    /**
      * 下载的url地址， 只支持jpg， png，大小限制不超过5M，宽高比不一致的处理方案同 RenderMode。
      */
    DefaultSubBackgroundImage?: string;
    /**
      * 水印布局参数， 最多支持25个。
      */
    WaterMarkList?: Array<WaterMark>;
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
 * DescribeRecordStatistic请求参数结构体
 */
export interface DescribeRecordStatisticRequest {
    /**
      * 查询开始日期，格式为YYYY-MM-DD。
      */
    StartTime: string;
    /**
      * 查询结束日期，格式为YYYY-MM-DD。
单次查询统计区间最多不能超过31天。
      */
    EndTime: string;
    /**
      * 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。
      */
    SdkAppId?: number;
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
      * 查询开始时间，14天内。本地unix时间戳（1590065777）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1590065877）
      */
    EndTime: number;
    /**
      * 用户SDKAppID（1400353843）
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
      * 查询开始时间，14天内。本地unix时间戳（1590065777s），查询实时数据时，查询起止时间不超过1个小时。
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1590065877s）
      */
    EndTime: number;
    /**
      * 用户SDKAppID（1400353843）
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
aBit：上/下行音频码率；单位：bps
aBlock：音频卡顿时长；单位：ms
bigvBit：上/下行视频码率；单位：bps
bigvCapFps：视频采集帧率；
bigvEncFps：视频发送帧率；
bigvDecFps：渲染帧率；
bigvBlock：视频卡顿时长；单位：ms
aLoss：上/下行音频丢包率；
bigvLoss：上/下行视频丢包率；
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
 * 第三方存储参数。
 */
export interface StorageParams {
    /**
      * 第三方云存储的账号信息。
      */
    CloudStorage?: CloudStorage;
    /**
      * 第三方云点播的账号信息。
      */
    CloudVod?: CloudVod;
}
/**
 * 点播相关参数。
 */
export interface CloudVod {
    /**
      * 腾讯云点播相关参数。
      */
    TencentVod?: TencentVod;
}
/**
 * MCU混流输出流编码参数
 */
export interface EncodeParams {
    /**
      * 混流-输出流音频采样率。取值为[48000, 44100, 32000, 24000, 16000, 8000]，单位是Hz。
      */
    AudioSampleRate: number;
    /**
      * 混流-输出流音频码率。取值范围[8,500]，单位为kbps。
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
      * 混流-输出流码率，音视频输出时必填。取值范围[1,10000]，单位为kbps。
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
      * 混流-输出流背景色，取值是十进制整数。常用的颜色有：
红色：0xff0000，对应的十进制整数是16724736。
黄色：0xffff00。对应的十进制整数是16776960。
绿色：0x33cc00。对应的十进制整数是3394560。
蓝色：0x0066ff。对应的十进制整数是26367。
黑色：0x000000。对应的十进制整数是0。
白色：0xFFFFFF。对应的十进制整数是16777215。
灰色：0x999999。对应的十进制整数是10066329。
      */
    BackgroundColor?: number;
    /**
      * 混流-输出流背景图片，取值为实时音视频控制台上传的图片ID。
      */
    BackgroundImageId?: number;
    /**
      * 混流-输出流音频编码类型，取值范围[0,1, 2]，0为LC-AAC，1为HE-AAC，2为HE-AACv2。默认值为0。当音频编码设置为HE-AACv2时，只支持输出流音频声道数为双声道。HE-AAC和HE-AACv2支持的输出流音频采样率范围为[48000, 44100, 32000, 24000, 16000]
      */
    AudioCodec?: number;
    /**
      * 混流-输出流背景图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。BackgroundImageUrl和BackgroundImageId参数都填时，以BackgroundImageUrl为准。图片大小限制不超过2MB。
      */
    BackgroundImageUrl?: string;
}
/**
 * ModifyPicture请求参数结构体
 */
export interface ModifyPictureRequest {
    /**
      * 图片id
      */
    PictureId: number;
    /**
      * 应用id
      */
    SdkAppId: number;
    /**
      * 图片长度
      */
    Height?: number;
    /**
      * 图片宽度
      */
    Width?: number;
    /**
      * 显示位置x轴方向
      */
    XPosition?: number;
    /**
      * 显示位置y轴方向
      */
    YPosition?: number;
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
    /**
      * 第三方CDN转推参数。
      */
    PublishCdnParams?: PublishCdnParams;
}
/**
 * DescribeCloudRecording请求参数结构体
 */
export interface DescribeCloudRecordingRequest {
    /**
      * TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。
      */
    SdkAppId: number;
    /**
      * 录制任务的唯一Id，在启动录制成功后会返回。
      */
    TaskId: string;
}
/**
 * 腾讯云点播相关参数。
 */
export interface TencentVod {
    /**
      * 媒体后续任务处理操作，即完成媒体上传后，可自动发起任务流操作。参数值为任务流模板名，云点播支持 创建任务流模板 并为模板命名。
      */
    Procedure?: string;
    /**
      * 媒体文件过期时间，为当前时间的绝对过期时间；保存一天，就填"86400"，永久保存就填"0"，默认永久保存。
      */
    ExpireTime?: number;
    /**
      * 指定上传园区，仅适用于对上传地域有特殊需求的用户。
      */
    StorageRegion?: string;
    /**
      * 分类ID，用于对媒体进行分类管理，可通过 创建分类 接口，创建分类，获得分类 ID。
默认值：0，表示其他分类。
      */
    ClassId?: number;
    /**
      * 点播 子应用 ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
    /**
      * 任务流上下文，任务完成回调时透传。
      */
    SessionContext?: string;
    /**
      * 上传上下文，上传完成回调时透传。
      */
    SourceContext?: string;
}
/**
 * 云端录制控制参数。
 */
export interface RecordParams {
    /**
      * 录制模式：
1：单流录制，分别录制房间的订阅UserId的音频和视频，将录制文件（M3U8/TS）上传至云存储；
2：混流录制，将房间内订阅UserId的音视频混录成一个音视频文件，将录制文件[M3U8/TS]上传至云存储；
      */
    RecordMode: number;
    /**
      * 房间内持续没有主播的状态超过MaxIdleTime的时长，自动停止录制，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。
      */
    MaxIdleTime?: number;
    /**
      * 录制的媒体流类型：
0：录制音频+视频流（默认）;
1：仅录制音频流；
2：仅录制视频流，
      */
    StreamType?: number;
    /**
      * 指定订阅流白名单或者黑名单。
      */
    SubscribeStreamUserIds?: SubscribeStreamUserIds;
    /**
      * 输出文件的格式。0：(默认)输出文件为hls格式。1：输出文件格式为hls+mp4（hls录制完成后转mp4文件）
      */
    OutputFormat?: number;
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
 * 用户自定义混流布局参数列表。
 */
export interface MixLayout {
    /**
      * 画布上该画面左上角的 y 轴坐标，取值范围 [0, 1920]，不能超过画布的高。
      */
    Top: number;
    /**
      * 画布上该画面左上角的 x 轴坐标，取值范围 [0, 1920]，不能超过画布的宽。
      */
    Left: number;
    /**
      * 画布上该画面宽度的相对值，取值范围 [0, 1920]，与Left相加不应超过画布的宽。
      */
    Width: number;
    /**
      * 画布上该画面高度的相对值，取值范围 [0, 1920]，与Top相加不应超过画布的高。
      */
    Height: number;
    /**
      * 字符串内容为待显示在该画面的主播对应的UserId，如果不指定，会按照主播加入房间的顺序匹配。
      */
    UserId?: string;
    /**
      * 画布的透明度值，取值范围[0, 255]。0表示不透明，255表示全透明。默认值为0。
      */
    Alpha?: number;
    /**
      * 0 ：拉伸模式，这个模式下整个视频内容会全部显示，并填满子画面，在源视频和目的视频宽高比不一致的时候，画面不会缺少内容，但是画面可能产生形变；

1 ：剪裁模式（默认），这个模式下会严格按照目的视频的宽高比对源视频剪裁之后再拉伸，并填满子画面画布，在源视频和目的视频宽高比不一致的时候，画面保持不变形，但是会被剪裁；

2 ：填黑模式，这个模式下会严格保持源视频的宽高比进行等比缩放，在源视频和目的视频宽高比不一致的时候，画面的上下侧边缘或者左右侧边缘会露出子画面画布的背景；

3 ：智能拉伸模式，这个模式类似剪裁模式，区别是在源视频和目的视频宽高比不一致的时候，限制了最大剪裁比例为画面的宽度或者高度的20%；
      */
    RenderMode?: number;
    /**
      * 对应订阅流的主辅路标识：
0：主流（默认）；
1：辅流；
      */
    MediaId?: number;
    /**
      * 该画布的图层顺序, 这个值越小表示图层越靠后。默认值为0。
      */
    ImageLayer?: number;
    /**
      * 下载的url地址， 只支持jpg， png，大小限制不超过5M，宽高比不一致的处理方案同 RenderMode。
      */
    SubBackgroundImage?: string;
}
/**
 * DescribeHistoryScale请求参数结构体
 */
export interface DescribeHistoryScaleRequest {
    /**
      * 用户sdkappid(1400188366)
      */
    SdkAppId: string;
    /**
      * 查询开始时间，5天内。本地unix时间戳（1587571000s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588034999s）
      */
    EndTime: number;
}
/**
 * DeletePicture请求参数结构体
 */
export interface DeletePictureRequest {
    /**
      * 图片id
      */
    PictureId: number;
    /**
      * 应用id
      */
    SdkAppId: number;
}
/**
 * MCU混流布局参数
 */
export interface LayoutParams {
    /**
      * 混流布局模板ID，0为悬浮模板(默认);1为九宫格模板;2为屏幕分享模板;3为画中画模板;4为自定义模板。
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
    /**
      * 自定义模板中有效，指定用户视频在混合画面中的位置。
      */
    PresetLayoutConfig?: Array<PresetLayoutConfig>;
    /**
      * 自定义模板中有效，设置为1时代表启用占位图功能，0时代表不启用占位图功能，默认为0。启用占位图功能时，在预设位置的用户没有上行视频时可显示对应的占位图。
      */
    PlaceHolderMode?: number;
    /**
      * 悬浮模板、九宫格、屏幕分享模板生效，用于控制纯音频上行是否占用画面布局位置。设置为0是代表后台默认处理方式，悬浮小画面占布局位置，九宫格画面占布局位置、屏幕分享小画面不占布局位置；设置为1时代表纯音频上行占布局位置；设置为2时代表纯音频上行不占布局位置。默认为0。
      */
    PureAudioHoldPlaceMode?: number;
    /**
      * 水印参数。
      */
    WaterMarkParams?: WaterMarkParams;
}
/**
 * DescribeRoomInformation返回参数结构体
 */
export interface DescribeRoomInformationResponse {
    /**
      * 返回当页数据总数
      */
    Total: number;
    /**
      * 房间信息列表
      */
    RoomList: Array<RoomState>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 录制的使用信息。
 */
export interface RecordUsage {
    /**
      * 本组数据对应的时间点，格式如:2020-09-07或2020-09-07 00:05:05。
      */
    TimeKey: string;
    /**
      * 视频时长-标清SD，单位：秒。
      */
    Class1VideoTime: number;
    /**
      * 视频时长-高清HD，单位：秒。
      */
    Class2VideoTime: number;
    /**
      * 视频时长-超清HD，单位：秒。
      */
    Class3VideoTime: number;
    /**
      * 语音时长，单位：秒。
      */
    AudioTime: number;
}
/**
 * CreateCloudRecording请求参数结构体
 */
export interface CreateCloudRecordingRequest {
    /**
      * TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351#sdkappid)，和录制的房间所对应的SdkAppId相同。
      */
    SdkAppId: number;
    /**
      * TRTC的[RoomId](https://cloud.tencent.com/document/product/647/46351#roomid)，录制的TRTC房间所对应的RoomId。
      */
    RoomId: string;
    /**
      * 录制服务在TRTC房间使用的[UserId](https://cloud.tencent.com/document/product/647/46351#userid)，注意这个userId不能与其他TRTC或者录制服务等已经使用的UserId重复，建议可以把房间ID作为userId的标识的一部分。
      */
    UserId: string;
    /**
      * 云端录制加入房间的用户签名，当前 UserId 对应的验证签名，相当于登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910#UserSig)的方案。
      */
    UserSig: string;
    /**
      * 云端录制控制参数。
      */
    RecordParams: RecordParams;
    /**
      * 云端录制文件上传到云存储的参数。
      */
    StorageParams: StorageParams;
    /**
      * TRTC房间号的类型，必须和录制的房间所对应的RoomId类型相同:
0: 字符串类型的RoomId
1: 32位整型的RoomId（默认）
      */
    RoomIdType?: number;
    /**
      * 混流的转码参数，录制模式为混流的时候可以设置。
      */
    MixTranscodeParams?: MixTranscodeParams;
    /**
      * 混流的布局参数，录制模式为混流的时候可以设置。
      */
    MixLayoutParams?: MixLayoutParams;
    /**
      * 接口可以调用的时效性，从成功开启录制并获得任务ID后开始计算，超时后无法调用查询、更新和停止等接口，但是录制任务不会停止。 参数的单位是小时，默认72小时（3天），最大可设置720小时（30天），最小设置6小时。举例说明：如果不设置该参数，那么开始录制成功后，查询、更新和停止录制的调用时效为72个小时。
      */
    ResourceExpiredHour?: number;
    /**
      * TRTC房间权限加密串，只有在TRTC控制台启用了高级权限控制的时候需要携带，在TRTC控制台如果开启高级权限控制后，TRTC 的后台服务系统会校验一个叫做 [PrivateMapKey]（https://cloud.tencent.com/document/product/647/32240） 的“权限票据”，权限票据中包含了一个加密后的 RoomId 和一个加密后的“权限位列表”。由于 PrivateMapKey 中包含 RoomId，所以只提供了 UserSig 没有提供 PrivateMapKey 时，并不能进入指定的房间。
      */
    PrivateMapKey?: string;
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
      * 自定义录制文件名称前缀。请先在实时音视频控制台开通录制功能，https://cloud.tencent.com/document/product/647/50768
      */
    RecordId?: string;
    /**
      * 取值范围[0,1]，填0无实际含义; 填1：指定录制文件格式为mp3。此参数不建议使用，建议在实时音视频控制台配置纯音频录制模板。
      */
    RecordAudioOnly?: number;
}
/**
 * 水印布局参数
 */
export interface WaterMark {
    /**
      * 水印类型，0为图片（默认），1为文字（暂不支持）。
      */
    WaterMarkType?: number;
    /**
      * 水印为图片时的参数列表，水印为图片时校验必填。
      */
    WaterMarkImage?: WaterMarkImage;
}
/**
 * DeleteCloudRecording返回参数结构体
 */
export interface DeleteCloudRecordingResponse {
    /**
      * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 录制的音视频转码参数。
 */
export interface MixTranscodeParams {
    /**
      * 录制视频转码参数，注意如果设置了这个参数，那么里面的字段都是必填的，没有默认值，如果不填这个参数，那么取值为默认值。
      */
    VideoParams?: VideoParams;
    /**
      * 录制音频转码参数，注意如果设置了这个参数，那么里面的字段都是必填的，没有默认值，如果不填这个参数，那么取值为默认值。
      */
    AudioParams?: AudioParams;
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
 * StopMCUMixTranscodeByStrRoomId请求参数结构体
 */
export interface StopMCUMixTranscodeByStrRoomIdRequest {
    /**
      * TRTC的SDKAppId。
      */
    SdkAppId: number;
    /**
      * 字符串房间号。
      */
    StrRoomId: string;
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
 * RemoveUserByStrRoomId返回参数结构体
 */
export interface RemoveUserByStrRoomIdResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StopMCUMixTranscodeByStrRoomId返回参数结构体
 */
export interface StopMCUMixTranscodeByStrRoomIdResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeletePicture返回参数结构体
 */
export interface DeletePictureResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCloudRecording请求参数结构体
 */
export interface ModifyCloudRecordingRequest {
    /**
      * TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。
      */
    SdkAppId: number;
    /**
      * 录制任务的唯一Id，在启动录制成功后会返回。
      */
    TaskId: string;
    /**
      * 需要更新的混流的布局参数。
      */
    MixLayoutParams?: MixLayoutParams;
    /**
      * 指定订阅流白名单或者黑名单。
      */
    SubscribeStreamUserIds?: SubscribeStreamUserIds;
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
 * 云端录制查询接口，录制文件的信息
 */
export interface StorageFile {
    /**
      * 录制文件对应的UserId，如果是混流的话的这里返回的是空串。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserId: string;
    /**
      * 录制索引文件名。
      */
    FileName: string;
    /**
      * 录制文件流信息。
video：视频录制文件
audio：音频录制文件
audio_video：音视频录制文件
注意：此字段可能返回 null，表示取不到有效值。
      */
    TrackType: string;
    /**
      * 录制文件开始Unix时间戳。
      */
    BeginTimeStamp: number;
}
/**
 * 图片列表信息
 */
export interface PictureInfo {
    /**
      * 图片长度
      */
    Height: number;
    /**
      * 图片宽度
      */
    Width: number;
    /**
      * 显示位置x轴方向
      */
    XPosition: number;
    /**
      * 显示位置y轴方向
      */
    YPosition: number;
    /**
      * 应用id
      */
    SdkAppId: number;
    /**
      * 图片id
      */
    PictureId: number;
}
/**
 * DescribeUserInformation返回参数结构体
 */
export interface DescribeUserInformationResponse {
    /**
      * 返回的用户总条数
      */
    Total: number;
    /**
      * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserList: Array<UserInformation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDetailEvent返回参数结构体
 */
export interface DescribeDetailEventResponse {
    /**
      * 返回的事件列表，若没有数据，会返回空数组。
      */
    Data: Array<EventList>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateCloudRecording返回参数结构体
 */
export interface CreateCloudRecordingResponse {
    /**
      * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。任务 ID需要业务保存下来，作为下次针对这个录制任务操作的参数。
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCallDetail返回参数结构体
 */
export interface DescribeCallDetailResponse {
    /**
      * 返回的用户总条数
      */
    Total: number;
    /**
      * 用户信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserList: Array<UserInformation>;
    /**
      * 质量数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<QualityData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 旁路转码时长的查询结果
 */
export interface OneSdkAppIdTranscodeTimeUsagesInfo {
    /**
      * 旁路转码时长查询结果数组
      */
    SdkAppIdTranscodeTimeUsages: Array<SdkAppIdTrtcMcuTranscodeTimeUsage>;
    /**
      * 查询记录数量
      */
    TotalNum: number;
    /**
      * 所查询的应用ID，可能值为:1-应用的应用ID，2-total，显示为total则表示查询的是所有应用的用量合计值。
      */
    SdkAppId: string;
}
/**
 * DescribeTrtcMcuTranscodeTime返回参数结构体
 */
export interface DescribeTrtcMcuTranscodeTimeResponse {
    /**
      * 应用的用量信息数组。
      */
    Usages: Array<OneSdkAppIdTranscodeTimeUsagesInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCloudRecording请求参数结构体
 */
export interface DeleteCloudRecordingRequest {
    /**
      * TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。
      */
    SdkAppId: number;
    /**
      * 录制任务的唯一Id，在启动录制成功后会返回。
      */
    TaskId: string;
}
/**
 * DescribePicture请求参数结构体
 */
export interface DescribePictureRequest {
    /**
      * 应用ID
      */
    SdkAppId: number;
    /**
      * 图片ID，不填时返回该应用下所有图片
      */
    PictureId?: number;
    /**
      * 每页数量，不填时默认为10
      */
    PageSize?: number;
    /**
      * 页码，不填时默认为1
      */
    PageNo?: number;
}
/**
 * SdkAppId级别录制时长数据。
 */
export interface SdkAppIdRecordUsage {
    /**
      * SdkAppId的值。
      */
    SdkAppId: string;
    /**
      * 统计的时间点数据。
      */
    Usages: Array<RecordUsage>;
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
 * RemoveUser返回参数结构体
 */
export interface RemoveUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 自定义模板中有效，指定用户视频在混合画面中的位置。
 */
export interface PresetLayoutConfig {
    /**
      * 指定显示在该画面上的用户ID。如果不指定用户ID，会按照用户加入房间的顺序自动匹配PresetLayoutConfig中的画面设置。
      */
    UserId?: string;
    /**
      * 当该画面指定用户时，代表用户的流类型。0为摄像头，1为屏幕分享。小画面为web用户时此值填0。
      */
    StreamType?: number;
    /**
      * 该画面在输出时的宽度，单位为像素值，不填默认为0。
      */
    ImageWidth?: number;
    /**
      * 该画面在输出时的高度，单位为像素值，不填默认为0。
      */
    ImageHeight?: number;
    /**
      * 该画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。
      */
    LocationX?: number;
    /**
      * 该画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。
      */
    LocationY?: number;
    /**
      * 该画面在输出时的层级，不填默认为0。
      */
    ZOrder?: number;
    /**
      * 该画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底。不填默认为0。
      */
    RenderMode?: number;
    /**
      * 该当前位置用户混入的流类型：0为混入音视频，1为只混入视频，2为只混入音频。默认为0，建议配合指定用户ID使用。
      */
    MixInputType?: number;
    /**
      * 占位图ID。启用占位图功能时，在当前位置的用户没有上行视频时显示占位图。占位图大小不能超过2M，在实时音视频控制台上传并生成，https://cloud.tencent.com/document/product/647/50769
      */
    PlaceImageId?: number;
}
/**
 * 录制视频转码参数。
 */
export interface VideoParams {
    /**
      * 视频的宽度值，单位为像素，默认值360。不能超过1920，与height的乘积不能超过1920*1080。
      */
    Width: number;
    /**
      * 视频的高度值，单位为像素，默认值640。不能超过1920，与width的乘积不能超过1920*1080。
      */
    Height: number;
    /**
      * 视频的帧率，范围[1, 60]，默认15。
      */
    Fps: number;
    /**
      * 视频的码率,单位是bps，范围[64000, 8192000]，默认550000bps。
      */
    BitRate: number;
    /**
      * 视频关键帧时间间隔，单位秒，默认值10秒。
      */
    Gop: number;
}
/**
 * 录制音频转码参数。
 */
export interface AudioParams {
    /**
      * 音频采样率:
1：48000Hz（默认）;
2：44100Hz
3：16000Hz。
      */
    SampleRate: number;
    /**
      * 声道数:
1：单身道;
2：双声道（默认）。
      */
    Channel: number;
    /**
      * 音频码率: 取值范围[32000, 128000] ，单位bps，默认64000bps。
      */
    BitRate: number;
}
/**
 * DescribePicture返回参数结构体
 */
export interface DescribePictureResponse {
    /**
      * 返回的图片记录数
      */
    Total: number;
    /**
      * 图片信息列表
      */
    PictureInfo: Array<PictureInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 水印类型为图片的参数列表
 */
export interface WaterMarkImage {
    /**
      * 下载的url地址， 只支持jpg， png，大小限制不超过5M。
      */
    WaterMarkUrl: string;
    /**
      * 画布上该画面左上角的 y 轴坐标，取值范围 [0, 2560]，不能超过画布的高。
      */
    Top: number;
    /**
      * 画布上该画面左上角的 x 轴坐标，取值范围 [0, 2560]，不能超过画布的宽。
      */
    Left: number;
    /**
      * 画布上该画面宽度的相对值，取值范围 [0, 2560]，与Left相加不应超过画布的宽。
      */
    Width: number;
    /**
      * 画布上该画面高度的相对值，取值范围 [0, 2560]，与Top相加不应超过画布的高。
      */
    Height: number;
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
 * 第三方CDN转推参数
 */
export interface PublishCdnParams {
    /**
      * 腾讯云直播BizId。
      */
    BizId: number;
    /**
      * 第三方CDN转推的目的地址，同时只支持转推一个第三方CDN地址。
      */
    PublishCdnUrls: Array<string>;
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
      * 查询开始时间，14天内。本地unix时间戳（1588031999）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588034999）
      */
    EndTime: number;
    /**
      * 字符串房间号
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
      * 查询开始时间，14天内。本地unix时间戳（1588055615s）
      */
    StartTime: number;
    /**
      * 查询结束时间，本地unix时间戳（1588058615s）
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
 * StartMCUMixTranscode返回参数结构体
 */
export interface StartMCUMixTranscodeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * CreatePicture返回参数结构体
 */
export interface CreatePictureResponse {
    /**
      * 图片id
      */
    PictureId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * MCU混流水印参数
 */
export interface WaterMarkParams {
    /**
      * 混流-水印图片ID。取值为实时音视频控制台上传的图片ID。
      */
    WaterMarkId: number;
    /**
      * 混流-水印宽。单位为像素值。水印宽+X偏移不能超过整个画布宽。
      */
    WaterMarkWidth: number;
    /**
      * 混流-水印高。单位为像素值。水印高+Y偏移不能超过整个画布高。
      */
    WaterMarkHeight: number;
    /**
      * 水印在输出时的X偏移。单位为像素值。水印宽+X偏移不能超过整个画布宽。
      */
    LocationX: number;
    /**
      * 水印在输出时的Y偏移。单位为像素值。水印高+Y偏移不能超过整个画布高。
      */
    LocationY: number;
    /**
      * 混流-水印图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。WaterMarkUrl和WaterMarkId参数都填时，以WaterMarkUrl为准。图片大小限制不超过2MB。
      */
    WaterMarkUrl?: string;
}
/**
 * DescribeRecordStatistic返回参数结构体
 */
export interface DescribeRecordStatisticResponse {
    /**
      * 应用的用量信息数组。
      */
    SdkAppIdUsages: Array<SdkAppIdRecordUsage>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DismissRoomByStrRoomId返回参数结构体
 */
export interface DismissRoomByStrRoomIdResponse {
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
    Total: number;
    /**
      * 返回的数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScaleList: Array<ScaleInfomation>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StartMCUMixTranscodeByStrRoomId返回参数结构体
 */
export interface StartMCUMixTranscodeByStrRoomIdResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyCloudRecording返回参数结构体
 */
export interface ModifyCloudRecordingResponse {
    /**
      * 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
