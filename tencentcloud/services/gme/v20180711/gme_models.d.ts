/**
 * ScanVoice返回参数结构体
 */
export interface ScanVoiceResponse {
    /**
      * 语音检测返回。Data 字段是 JSON 数组，每一个元素包含：<li>DataId： 请求中对应的 DataId。</li>
<li>TaskID ：该检测任务的 ID，用于轮询语音检测结果。</li>
      */
    Data?: Array<ScanVoiceResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 应用用量统计数据
 */
export interface AppStatisticsItem {
    /**
      * 实时语音统计数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    RealtimeSpeechStatisticsItem: RealTimeSpeechStatisticsItem;
    /**
      * 语音消息统计数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    VoiceMessageStatisticsItem: VoiceMessageStatisticsItem;
    /**
      * 语音过滤统计数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    VoiceFilterStatisticsItem: VoiceFilterStatisticsItem;
    /**
      * 统计时间
      */
    Date: string;
}
/**
 * ModifyAppStatus请求参数结构体
 */
export interface ModifyAppStatusRequest {
    /**
      * 应用ID，创建应用后由后台生成并返回。
      */
    BizId: number;
    /**
      * 应用状态，取值：open/close
      */
    Status: string;
}
/**
 * 用户进出房间信息
 */
export interface InOutTimeInfo {
    /**
      * 进入房间时间
      */
    StartTime: number;
    /**
      * 退出房间时间
      */
    EndTime: number;
}
/**
 * DescribeScanResultList返回参数结构体
 */
export interface DescribeScanResultListResponse {
    /**
      * 要查询的语音检测任务的结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: Array<DescribeScanResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeApplicationData请求参数结构体
 */
export interface DescribeApplicationDataRequest {
    /**
      * 应用ID
      */
    BizId: number;
    /**
      * 数据开始时间，格式为 年-月-日，如: 2018-07-13
      */
    StartDate: string;
    /**
      * 数据结束时间，格式为 年-月-日，如: 2018-07-13
      */
    EndDate: string;
}
/**
 * VoiceFilter请求参数结构体
 */
export interface VoiceFilterRequest {
    /**
      * 应用ID，登录[控制台](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
      */
    BizId: number;
    /**
      * 文件ID，表示文件唯一ID
      */
    FileId: string;
    /**
      * 文件名
      */
    FileName: string;
    /**
      * 文件url，urlencode编码，FileUrl和FileContent二选一
      */
    FileUrl?: string;
    /**
      * 文件内容，base64编码，FileUrl和FileContent二选一
      */
    FileContent?: string;
    /**
      * 用户ID
      */
    OpenId?: string;
}
/**
 * 语音消息用量统计信息
 */
export interface VoiceMessageStatisticsItem {
    /**
      * 离线语音DAU
      */
    Dau: number;
}
/**
 * DescribeScanResultList请求参数结构体
 */
export interface DescribeScanResultListRequest {
    /**
      * 应用 ID，登录[控制台](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
      */
    BizId: number;
    /**
      * 查询的任务 ID 列表，任务 ID 列表最多支持 100 个。
      */
    TaskIdList: Array<string>;
    /**
      * 任务返回结果数量，默认10，上限500。大文件任务忽略此参数，返回全量结果
      */
    Limit?: number;
}
/**
 * 实时语音用量统计数据
 */
export interface RealTimeSpeechStatisticsItem {
    /**
      * 大陆地区DAU
      */
    MainLandDau: number;
    /**
      * 大陆地区PCU
      */
    MainLandPcu: number;
    /**
      * 大陆地区总使用时长，单位为min
      */
    MainLandDuration: number;
    /**
      * 海外地区DAU
      */
    OverseaDau: number;
    /**
      * 海外地区PCU
      */
    OverseaPcu: number;
    /**
      * 海外地区总使用时长，单位为min
      */
    OverseaDuration: number;
}
/**
 * VoiceFilter返回参数结构体
 */
export interface VoiceFilterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 标签列表
 */
export interface Tag {
    /**
      * 标签键
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagKey?: string;
    /**
      * 标签值
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagValue?: string;
}
/**
 * 离线语音服务配置数据
 */
export interface VoiceMessageConf {
    /**
      * 离线语音服务开关，取值：open/close
      */
    Status?: string;
    /**
      * 离线语音支持语种，取值： all-全部，cnen-中英文。默认为中英文
      */
    Language?: string;
}
/**
 * 应用统计数据
 */
export interface ApplicationDataStatistics {
    /**
      * 应用ID
      */
    BizId: number;
    /**
      * Dau统计项数目
      */
    DauDataNum: number;
    /**
      * 大陆地区Dau统计数据，单位人
      */
    DauDataMainland: Array<StatisticsItem>;
    /**
      * 海外地区Dau统计数据，单位人
      */
    DauDataOversea: Array<StatisticsItem>;
    /**
      * 大陆和海外地区Dau统计数据汇总，单位人
      */
    DauDataSum: Array<StatisticsItem>;
    /**
      * 实时语音时长统计项数目
      */
    DurationDataNum: number;
    /**
      * 大陆地区实时语音时长统计数据，单位分钟
      */
    DurationDataMainland: Array<StatisticsItem>;
    /**
      * 海外地区实时语音时长统计数据，单位分钟
      */
    DurationDataOversea: Array<StatisticsItem>;
    /**
      * 大陆和海外地区实时语音时长统计数据汇总，单位分钟
      */
    DurationDataSum: Array<StatisticsItem>;
    /**
      * Pcu统计项数目
      */
    PcuDataNum: number;
    /**
      * 大陆地区Pcu统计数据，单位人
      */
    PcuDataMainland: Array<StatisticsItem>;
    /**
      * 海外地区Pcu统计数据，单位人
      */
    PcuDataOversea: Array<StatisticsItem>;
    /**
      * 大陆和海外地区Pcu统计数据汇总，单位人
      */
    PcuDataSum: Array<StatisticsItem>;
}
/**
 * DescribeFilterResultList返回参数结构体
 */
export interface DescribeFilterResultListResponse {
    /**
      * 过滤结果总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount?: number;
    /**
      * 当前分页过滤结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: Array<VoiceFilterInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 获取应用用量统计数据输出参数
 */
export interface DescribeAppStatisticsResponse {
    /**
      * 应用用量统计数据
      */
    AppStatistics: Array<AppStatisticsItem>;
}
/**
 * DescribeApplicationData返回参数结构体
 */
export interface DescribeApplicationDataResponse {
    /**
      * 应用统计数据
      */
    Data: ApplicationDataStatistics;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 语音检测任务列表
 */
export interface Task {
    /**
      * 数据的唯一ID
      */
    DataId: string;
    /**
      * 数据文件的url，为 urlencode 编码，流式则为拉流地址
      */
    Url: string;
    /**
      * gme实时语音房间ID，通过gme实时语音进行语音分析时输入
      */
    RoomId?: string;
    /**
      * gme实时语音用户ID，通过gme实时语音进行语音分析时输入
      */
    OpenId?: string;
}
/**
 * 语音过滤用量统计数据
 */
export interface VoiceFilterStatisticsItem {
    /**
      * 语音过滤总时长
      */
    Duration: number;
}
/**
 * 用量数据单元
 */
export interface StatisticsItem {
    /**
      * 日期，格式为年-月-日，如2018-07-13
      */
    StatDate: string;
    /**
      * 统计值
      */
    Data: number;
}
/**
 * DescribeUserInAndOutTime返回参数结构体
 */
export interface DescribeUserInAndOutTimeResponse {
    /**
      * 用户在房间得进出时间列表
      */
    InOutList?: Array<InOutTimeInfo>;
    /**
      * 用户在房间中总时长
      */
    Duration?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 语音文件过滤详情
 */
export interface VoiceFilterInfo {
    /**
      * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizId?: number;
    /**
      * 文件ID，表示文件唯一ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileId: string;
    /**
      * 文件名
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileName: string;
    /**
      * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenId: string;
    /**
      * 数据创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Timestamp: string;
    /**
      * 过滤结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<VoiceFilter>;
}
/**
 * DescribeFilterResult返回参数结构体
 */
export interface DescribeFilterResultResponse {
    /**
      * 过滤结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: VoiceFilterInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 语音检测结果返回
 */
export interface DescribeScanResult {
    /**
      * 业务返回码
      */
    Code: number;
    /**
      * 数据唯一 ID
      */
    DataId: string;
    /**
      * 检测完成的时间戳
      */
    ScanFinishTime: number;
    /**
      * 是否违规
      */
    HitFlag: boolean;
    /**
      * 是否为流
      */
    Live: boolean;
    /**
      * 业务返回描述
注意：此字段可能返回 null，表示取不到有效值。
      */
    Msg: string;
    /**
      * 检测结果，Code 为 0 时返回
注意：此字段可能返回 null，表示取不到有效值。
      */
    ScanPiece: Array<ScanPiece>;
    /**
      * 提交检测的时间戳
      */
    ScanStartTime: number;
    /**
      * 语音检测场景，对应请求时的 Scene
      */
    Scenes: Array<string>;
    /**
      * 语音检测任务 ID，由后台分配
      */
    TaskId: string;
    /**
      * 文件或接流地址
      */
    Url: string;
    /**
      * 检测任务执行结果状态，分别为：
<li>Start: 任务开始</li>
<li>Success: 成功结束</li>
<li>Error: 异常</li>
      */
    Status: string;
}
/**
 * DescribeFilterResultList请求参数结构体
 */
export interface DescribeFilterResultListRequest {
    /**
      * 应用ID
      */
    BizId: number;
    /**
      * 开始时间，格式为 年-月-日，如: 2018-07-11
      */
    StartDate: string;
    /**
      * 结束时间，格式为 年-月-日，如: 2018-07-11
      */
    EndDate: string;
    /**
      * 偏移量，默认值为0。
      */
    Offset?: number;
    /**
      * 返回数量，默认值为10，最大值为100。
      */
    Limit?: number;
}
/**
 * 过滤结果
 */
export interface VoiceFilter {
    /**
      * 过滤类型，1：政治，2：色情，3：涉毒，4：谩骂
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: number;
    /**
      * 过滤命中关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
    Word: string;
}
/**
 * 语音检测详情
 */
export interface ScanDetail {
    /**
      * 违规场景，参照<a href="https://cloud.tencent.com/document/product/607/37622#Label_Value">Label</a>定义
      */
    Label: string;
    /**
      * 该场景下概率[0.00,100.00],分值越大违规概率越高
      */
    Rate: string;
    /**
      * 违规关键字
      */
    KeyWord: string;
    /**
      * 关键字在音频的开始时间，从0开始的偏移量，单位为毫秒
      */
    StartTime: number;
    /**
      * 关键字在音频的结束时间，从0开始的偏移量,，单位为毫秒
      */
    EndTime: number;
}
/**
 * CreateApp请求参数结构体
 */
export interface CreateAppRequest {
    /**
      * 应用名称
      */
    AppName: string;
    /**
      * 腾讯云项目ID，默认为0，表示默认项目
      */
    ProjectId?: number;
    /**
      * 需要支持的引擎列表，默认全选。
      */
    EngineList?: Array<string>;
    /**
      * 服务区域列表，默认全选。
      */
    RegionList?: Array<string>;
    /**
      * 实时语音服务配置数据
      */
    RealtimeSpeechConf?: RealtimeSpeechConf;
    /**
      * 语音消息及转文本服务配置数据
      */
    VoiceMessageConf?: VoiceMessageConf;
    /**
      * 语音分析服务配置数据
      */
    VoiceFilterConf?: VoiceFilterConf;
    /**
      * 需要添加的标签列表
      */
    Tags?: Array<Tag>;
}
/**
 * 实时语音配置数据
 */
export interface RealtimeSpeechConf {
    /**
      * 实时语音服务开关，取值：open/close
      */
    Status?: string;
    /**
      * 实时语音音质类型，取值：high-高音质，ordinary-普通音质。默认高音质。普通音质仅白名单开放，如需要普通音质，请联系腾讯云商务。
      */
    Quality?: string;
}
/**
 * 语音检测返回结果
 */
export interface ScanVoiceResult {
    /**
      * 数据ID
      */
    DataId: string;
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * CreateApp的输出参数
 */
export interface CreateAppResponse {
    /**
      * 应用ID，由后台自动生成。
      */
    BizId: number;
    /**
      * 应用名称，透传输入参数的AppName
      */
    AppName: string;
    /**
      * 项目ID，透传输入的ProjectId
      */
    ProjectId: number;
    /**
      * 应用密钥，GME SDK初始化时使用
      */
    SecretKey: string;
    /**
      * 服务创建时间戳
      */
    CreateTime: number;
    /**
      * 实时语音服务配置数据
      */
    RealtimeSpeechConf: RealtimeSpeechConf;
    /**
      * 语音消息及转文本服务配置数据
      */
    VoiceMessageConf: VoiceMessageConf;
    /**
      * 语音分析服务配置数据
      */
    VoiceFilterConf: VoiceFilterConf;
}
/**
 * DescribeAppStatistics请求参数结构体
 */
export interface DescribeAppStatisticsRequest {
    /**
      * GME应用ID
      */
    BizId: number;
    /**
      * 数据开始时间，东八区时间，格式: 年-月-日，如: 2018-07-13
      */
    StartDate: string;
    /**
      * 数据结束时间，东八区时间，格式: 年-月-日，如: 2018-07-13
      */
    EndDate: string;
    /**
      * 要查询的服务列表，取值：RealTimeSpeech/VoiceMessage/VoiceFilter
      */
    Services: Array<string>;
}
/**
 * 语音检测结果，Code 为 0 时返回
 */
export interface ScanPiece {
    /**
      * 流检测时返回，音频转存地址，保留30min
注意：此字段可能返回 null，表示取不到有效值。
      */
    DumpUrl: string;
    /**
      * 是否违规
      */
    HitFlag: boolean;
    /**
      * 违规主要类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    MainType: string;
    /**
      * 语音检测详情
      */
    ScanDetail: Array<ScanDetail>;
    /**
      * gme实时语音房间ID，透传任务传入时的RoomId
注意：此字段可能返回 null，表示取不到有效值。
      */
    RoomId: string;
    /**
      * gme实时语音用户ID，透传任务传入时的OpenId
注意：此字段可能返回 null，表示取不到有效值。
      */
    OpenId: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Info: string;
    /**
      * 流检测时分片在流中的偏移时间，单位毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    Offset: number;
    /**
      * 流检测时分片时长
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration: number;
    /**
      * 分片开始检测时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    PieceStartTime: number;
}
/**
 * ModifyAppStatus接口输出参数
 */
export interface ModifyAppStatusResponse {
    /**
      * GME应用ID
      */
    BizId: number;
    /**
      * 应用状态，取值：open/close
      */
    Status: string;
}
/**
 * ScanVoice请求参数结构体
 */
export interface ScanVoiceRequest {
    /**
      * 应用ID，登录[控制台 - 服务管理](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID
      */
    BizId: number;
    /**
      * 语音检测场景，参数值目前要求为 default。 预留场景设置： 谩骂、色情、涉政、广告、暴恐、违禁等场景，<a href="#Label_Value">具体取值见上述 Label 说明。</a>
      */
    Scenes: Array<string>;
    /**
      * 是否为直播流。值为 false 时表示普通语音文件检测；为 true 时表示语音流检测。
      */
    Live: boolean;
    /**
      * 语音检测任务列表，列表最多支持100个检测任务。结构体中包含：
<li>DataId：数据的唯一ID</li>
<li>Url：数据文件的url，为 urlencode 编码，流式则为拉流地址</li>
      */
    Tasks: Array<Task>;
    /**
      * 异步检测结果回调地址，具体见上述<a href="#Callback_Declare">回调相关说明</a>。（说明：该字段为空时，必须通过接口(查询语音检测结果)获取检测结果）。
      */
    Callback?: string;
}
/**
 * 语音过滤服务配置数据
 */
export interface VoiceFilterConf {
    /**
      * 语音过滤服务开关，取值：open/close
      */
    Status?: string;
}
/**
 * DescribeFilterResult请求参数结构体
 */
export interface DescribeFilterResultRequest {
    /**
      * 应用ID
      */
    BizId: number;
    /**
      * 文件ID
      */
    FileId: string;
}
/**
 * DescribeUserInAndOutTime请求参数结构体
 */
export interface DescribeUserInAndOutTimeRequest {
    /**
      * 应用ID
      */
    BizId: number;
    /**
      * 房间ID
      */
    RoomId: number;
    /**
      * 用户ID
      */
    UserId: number;
}
