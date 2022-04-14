/**
 * DescribeMusic返回参数结构体
 */
export interface DescribeMusicResponse {
    /**
      * 音乐相关信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Music: Music;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVSuggestions返回参数结构体
 */
export interface DescribeKTVSuggestionsResponse {
    /**
      * 联想词信息列表。返回总数最大为10。
      */
    KTVSuggestionInfoSet: Array<KTVSuggestionInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 副歌片段信息
 */
export interface ChorusClip {
    /**
      * 副歌时间，单位：毫秒
      */
    StartTime: number;
    /**
      * 副歌结束时间，单位：毫秒
      */
    EndTime: number;
}
/**
 * ModifyMusicOnShelves返回参数结构体
 */
export interface ModifyMusicOnShelvesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 分类内容
 */
export interface Station {
    /**
      * StationID
      */
    CategoryID: string;
    /**
      * Station MCCode
注意：此字段可能返回 null，表示取不到有效值。
      */
    CategoryCode: string;
    /**
      * Category Name
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * Station的排序值，供参考（返回结果已按其升序）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rank: number;
    /**
      * station图片集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImagePathMap: Array<ImagePath>;
}
/**
 * DescribeKTVMusicDetail请求参数结构体
 */
export interface DescribeKTVMusicDetailRequest {
    /**
      * 曲目 Id
      */
    MusicId: string;
}
/**
 * 排行榜结构
 */
export interface KTVMusicTopInfo {
    /**
      * 歌曲Id
      */
    MusicId: string;
    /**
      * 歌曲名称
      */
    Name: string;
    /**
      * 歌手名称列表
      */
    SingerInfoSet: Array<KTVSingerBaseInfo>;
    /**
      * 歌词名称列表
      */
    LyricistSet: Array<string>;
    /**
      * 作曲列表
      */
    ComposerSet: Array<string>;
    /**
      * 标签列表
      */
    TagSet: Array<string>;
    /**
      * 播放时长
      */
    Duration: number;
}
/**
 * DescribeKTVSingerCategories请求参数结构体
 */
export declare type DescribeKTVSingerCategoriesRequest = null;
/**
 * KTV 歌手基础信息
 */
export interface KTVSingerBaseInfo {
    /**
      * 歌手id
      */
    SingerId: string;
    /**
      * 歌手名
      */
    Name: string;
}
/**
 * ModifyMusicOnShelves请求参数结构体
 */
export interface ModifyMusicOnShelvesRequest {
    /**
      * 歌曲变更信息
      */
    MusicDetailInfos: MusicDetailInfo;
    /**
      * ame对接资源方密钥
      */
    AmeKey?: string;
}
/**
 * 播放指令输入参数
 */
export interface PlayCommandInput {
    /**
      * 歌曲位置索引。
      */
    Index: number;
}
/**
 * DescribeMusic请求参数结构体
 */
export interface DescribeMusicRequest {
    /**
      * 歌曲ID
      */
    ItemId: string;
    /**
      * 在应用前端播放音乐C端用户的唯一标识。无需是账户信息，用户唯一标识即可。
      */
    IdentityId: string;
    /**
      * MP3-320K-FTD-P  为获取320kbps歌曲热门片段。
MP3-320K-FTD 为获取320kbps已核验歌曲完整资源。
      */
    SubItemType?: string;
    /**
      * CDN URL Protocol:HTTP or HTTPS/SSL
Values:Y , N(default)
      */
    Ssl?: string;
}
/**
 * 即使广播曲库歌曲信息详情列表
 */
export interface KTVMusicDetailInfo {
    /**
      * 即使广播曲库歌曲基础信息
      */
    KTVMusicBaseInfo: KTVMusicBaseInfo;
    /**
      * 播放凭证
      */
    PlayToken: string;
    /**
      * 歌词下载地址
      */
    LyricsUrl: string;
    /**
      * 歌曲规格信息列表
      */
    DefinitionInfoSet: Array<KTVMusicDefinitionInfo>;
    /**
      * 音高数据文件下载地址
      */
    MidiJsonUrl: string;
    /**
      * 副歌片段数据列表
      */
    ChorusClipSet: Array<ChorusClip>;
    /**
      * 前奏间隔，单位：毫秒；注：若参数返回为0则无人声部分
      */
    PreludeInterval: number;
}
/**
 * DescribeMusicSaleStatus请求参数结构体
 */
export interface DescribeMusicSaleStatusRequest {
    /**
      * 歌曲Id集合，可传单个，也可传多个，上线查询单次50个
      */
    MusicIds: Array<string>;
    /**
      * 查询哪个渠道的数据，1为曲库包，2为单曲
      */
    PurchaseType: number;
}
/**
 * TakeMusicOffShelves请求参数结构体
 */
export interface TakeMusicOffShelvesRequest {
    /**
      * 资源方下架必传结构
      */
    TakeMusicOffShelves: Array<TakeMusicOffShelves>;
}
/**
 * DescribeCloudMusic返回参数结构体
 */
export interface DescribeCloudMusicResponse {
    /**
      * 歌曲Id
      */
    MusicId: string;
    /**
      * 歌曲名称
      */
    MusicName: string;
    /**
      * 歌曲时长
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration: number;
    /**
      * 歌曲链接
      */
    MusicUrl: string;
    /**
      * 歌曲图片
注意：此字段可能返回 null，表示取不到有效值。
      */
    MusicImageUrl: string;
    /**
      * 歌手列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Singers: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 歌曲变更细节
 */
export interface MusicDetailInfo {
    /**
      * 资源方音乐Id
      */
    MusicId: string;
    /**
      * 资源方识别信息
      */
    AmeId: string;
    /**
      * 分类标签
      */
    Tags?: Array<string>;
    /**
      * 关键词
      */
    HitWords?: Array<string>;
    /**
      * 节奏信息
      */
    Bpm?: number;
    /**
      * 商业化权益
      */
    Score?: number;
    /**
      * 应用歌曲信息,1.图文/短视频,2.网络直播,3.网络电台FM,4.免费游戏,5.商业游戏,6.网店网站设计,7.广告营销,8.网络长视频
      */
    Scene?: Array<string>;
    /**
      * 应用地域,1. 中国大陆,2. 中国含港澳台,3. 全球
      */
    Region?: Array<string>;
    /**
      * 授权时间,1. 1年, 5. 随片永久
      */
    AuthPeriod?: string;
    /**
      * 商业化授权，1. 支持商业化 ,2. 不支持商业化
      */
    Commercialization?: string;
    /**
      * 跨平台传播，1. 支持跨平台传播 ,2. 不支持跨平台传播
      */
    Platform?: string;
    /**
      * 传播渠道
      */
    Channel?: string;
}
/**
 * 图片路径
 */
export interface ImagePath {
    /**
      * station图片大小及类别
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * station图片地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 即使广播曲库歌曲标签信息
 */
export interface KTVMusicTagInfo {
    /**
      * 标签Id
      */
    TagId: string;
    /**
      * 标签
      */
    TagName: string;
}
/**
 * DestroyKTVRobot请求参数结构体
 */
export interface DestroyKTVRobotRequest {
    /**
      * 机器人Id。
      */
    RobotId: string;
}
/**
 * DescribeAuthInfo返回参数结构体
 */
export interface DescribeAuthInfoResponse {
    /**
      * 授权项目列表
      */
    AuthInfo?: Array<AuthInfo>;
    /**
      * 总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeLyric请求参数结构体
 */
export interface DescribeLyricRequest {
    /**
      * 歌曲ID
      */
    ItemId: string;
    /**
      * 格式，可选项，可不填写，默认值为：LRC-LRC。
<li>LRC-LRC：歌词；</li>
<li>JSON-ST：波形图。</li>
      */
    SubItemType?: string;
}
/**
 * ReportData请求参数结构体
 */
export interface ReportDataRequest {
    /**
      * 上报数据
注:reportData为客户端压缩后的上报数据进行16进制转换的字符串数据
压缩说明：
a) 上报的json格式字符串通过流的转换（ByteArrayInputStream, java.util.zip.GZIPOutputStream），获取到压缩后的字节数组。
b) 将压缩后的字节数组转成16进制字符串。

reportData由两部分数据组成：
1）report_type（上报类型）
2）data（歌曲上报数据）
不同的report_type对应的data数据结构不一样。

详细说明请参考文档reportdata.docx：
https://github.com/tencentyun/ame-documents
      */
    ReportData: string;
}
/**
 * 调整播放进度指令参数
 */
export interface SeekCommandInput {
    /**
      * 播放位置，单位：毫秒。
      */
    Position: number;
}
/**
 * DescribePkgOfflineMusic请求参数结构体
 */
export interface DescribePkgOfflineMusicRequest {
    /**
      * 订单id
      */
    PackageOrderId: string;
    /**
      * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条(注：单次上限为100)。
      */
    Limit?: number;
    /**
      * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
      */
    Offset?: number;
}
/**
 * 时间范围
 */
export interface TimeRange {
    /**
      * <li>大于等于此时间（起始时间）。</li>
<li>格式按照 ISO 8601标准表示，详见 <a href="https://cloud.tencent.com/document/product/266/11732#I" target="_blank">ISO 日期格式说明</a>。</li>
      */
    Before?: string;
    /**
      * <li>小于此时间（结束时间）。</li>
<li>格式按照 ISO 8601标准表示，详见 <a href="https://cloud.tencent.com/document/product/266/11732#I" target="_blank">ISO 日期格式说明</a>。</li>
      */
    After?: string;
}
/**
 * DescribeMusicSaleStatus返回参数结构体
 */
export interface DescribeMusicSaleStatusResponse {
    /**
      * musicId对应歌曲状态
      */
    MusicStatusSet: Array<MusicStatus>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateKTVRobot返回参数结构体
 */
export interface CreateKTVRobotResponse {
    /**
      * 机器人Id。
      */
    RobotId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePackageItems返回参数结构体
 */
export interface DescribePackageItemsResponse {
    /**
      * 已核销歌曲信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageItems?: Array<PackageItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudMusicPurchased返回参数结构体
 */
export interface DescribeCloudMusicPurchasedResponse {
    /**
      * 云音乐列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    MusicOpenDetail: Array<MusicOpenDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 即使广播曲库歌曲标签分组信息
 */
export interface KTVMusicTagGroup {
    /**
      * 标签分组英文名
      */
    EnglishGroupName: string;
    /**
      * 标签分组中文名
      */
    ChineseGroupName: string;
    /**
      * 标签分类下标签列表
      */
    TagSet: Array<KTVMusicTagInfo>;
}
/**
 * 数据信息
 */
export interface DataInfo {
    /**
      * Song Name
      */
    Name: string;
    /**
      * 歌曲版本
      */
    Version: string;
    /**
      * 歌曲总时长（非试听时长）
      */
    Duration: string;
    /**
      * 试听开始时间
      */
    AuditionBegin: number;
    /**
      * 试听结束时间
      */
    AuditionEnd: number;
    /**
      * 标签名称
      */
    TagNames: Array<string>;
}
/**
 * 用户license基础信息
 */
export interface ApplicationLicenseInput {
    /**
      * 应用名称，注：后面三个字段AndroidPackageName、IOSBundleId、PcIdentifier，三者选填一个
      */
    AppName: string;
    /**
      * app的安卓包名
      */
    AndroidPackageName?: string;
    /**
      * app的IOS的BundleId名
      */
    IOSBundleId?: string;
    /**
      * PC标识名
      */
    PcIdentifier?: string;
}
/**
 * Artist
 */
export interface Artist {
    /**
      * 歌手名
      */
    ArtistName: string;
}
/**
 * 设置销毁模式
 */
export interface SetDestroyModeCommandInput {
    /**
      * 销毁模式，取值有：
<li>Auto：房间没人时自动销毁</li>
<li>Expire：房间没人时过期自动销毁</li>
<li>Never：不自动销毁，需手动销毁</li>默认为：Auto。
      */
    DestroyMode: string;
    /**
      * 过期销毁时间，单位：秒，当DestroyMode取Expire时必填。
      */
    DestroyExpireTime?: number;
}
/**
 * ReportData返回参数结构体
 */
export interface ReportDataResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SearchKTVMusics返回参数结构体
 */
export interface SearchKTVMusicsResponse {
    /**
      * 总记录数
      */
    TotalCount: number;
    /**
      * KTV 曲目列表
      */
    KTVMusicInfoSet: Array<KTVMusicBaseInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeItemById请求参数结构体
 */
export interface DescribeItemByIdRequest {
    /**
      * 歌曲ID，目前暂不支持批量查询
      */
    ItemIDs: string;
}
/**
 * PutMusicOnTheShelves返回参数结构体
 */
export interface PutMusicOnTheShelvesResponse {
    /**
      * 操作成功数量
      */
    SuccessNum: number;
    /**
      * 操作失败数量
      */
    FailedNum: number;
    /**
      * 失败歌曲Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedMusicIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * KTV 机器人初始化参数，在创建后自动完成相关初始化工作。
 */
export interface SyncRobotCommand {
    /**
      * 可同时传入多个指令，顺序执行。取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>SwitchPrevious：上一首</li>
<li>SwitchNext：下一首</li>
<li>SetPlayMode：设置播放模式</li>
<li>Seek：调整播放进度</li>
<li>SetPlaylist：歌单变更</li>
<li>SetAudioParam：音频参数变更</li>
<li>SendMessage：发送自定义消息</li>
<li>SetDestroyMode：设置销毁模式</li>
<li>SetVolume：设置音量</li>
      */
    Command: string;
    /**
      * 播放参数。
      */
    PlayCommandInput?: PlayCommandInput;
    /**
      * 播放列表变更信息，当Command取SetPlaylist时，必填。
      */
    SetPlaylistCommandInput?: SetPlaylistCommandInput;
    /**
      * 播放进度，当Command取Seek时，必填。
      */
    SeekCommandInput?: SeekCommandInput;
    /**
      * 音频参数，当Command取SetAudioParam时，必填。
      */
    SetAudioParamCommandInput?: SetAudioParamCommandInput;
    /**
      * 自定义消息，当Command取SendMessage时，必填。
      */
    SendMessageCommandInput?: SendMessageCommandInput;
    /**
      * 播放模式，当Command取SetPlayMode时，必填。
      */
    SetPlayModeCommandInput?: SetPlayModeCommandInput;
    /**
      * 销毁模式，当Command取SetDestroyMode时，必填。
      */
    SetDestroyModeCommandInput?: SetDestroyModeCommandInput;
    /**
      * 音量，当Command取SetVolume时，必填。
      */
    SetVolumeCommandInput?: SetVolumeCommandInput;
}
/**
 * DescribeKTVSingerMusics返回参数结构体
 */
export interface DescribeKTVSingerMusicsResponse {
    /**
      * 总曲目数
      */
    TotalCount: number;
    /**
      * KTV 曲目列表
      */
    KTVMusicInfoSet: Array<KTVMusicBaseInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeItems返回参数结构体
 */
export interface DescribeItemsResponse {
    /**
      * 分页偏移量
      */
    Offset?: number;
    /**
      * 当前页歌曲数量
      */
    Size?: number;
    /**
      * 总数据条数
      */
    Total?: number;
    /**
      * 剩余数量（total-offset-size），通过这个值判断是否
还有下一页
      */
    HaveMore?: number;
    /**
      * Items 歌曲列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Items?: Array<Item>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePkgOfflineMusic返回参数结构体
 */
export interface DescribePkgOfflineMusicResponse {
    /**
      * 曲库包中不可用歌曲信息
      */
    OfflineMusicSet: Array<OfflineMusicDetail>;
    /**
      * 返回总量
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 直播互动歌曲的歌手信息。
 */
export interface KTVSingerInfo {
    /**
      * 歌手id
      */
    SingerId: string;
    /**
      * 歌手名
      */
    Name: string;
    /**
      * 歌手性别: 男，女，组合
      */
    Gender: string;
    /**
      * 地区: 大陆，港台，欧美，日本
      */
    Area: string;
    /**
      * 歌曲数
      */
    MusicCount: number;
    /**
      * 歌曲总播放次数
      */
    PlayCount: number;
}
/**
 * 设置音量。
 */
export interface SetVolumeCommandInput {
    /**
      * 音量大小，取值范围为 0~100，默认值为 50。
      */
    Volume: number;
}
/**
 * PutMusicOnTheShelves请求参数结构体
 */
export interface PutMusicOnTheShelvesRequest {
    /**
      * 资源方歌曲Id
      */
    MusicIds: Array<string>;
}
/**
 * DescribeCloudMusic请求参数结构体
 */
export interface DescribeCloudMusicRequest {
    /**
      * 歌曲Id
      */
    MusicId: string;
    /**
      * 歌曲类型，可选值有：
<li>MP3-128K-FTW：含有水印的试听资源；</li>
<li>MP3-320K-FTD-P：320kbps歌曲热门片段；</li>
<li>MP3-320K-FTD：320kbps已核验歌曲完整资源。</li>
默认为：MP3-128K-FTW
      */
    MusicType?: string;
}
/**
 * 排序依据
 */
export interface SortBy {
    /**
      * 排序字段
      */
    Field: string;
    /**
      * 排序方式，可选值：Asc（升序）、Desc（降序）
      */
    Order: string;
}
/**
 * DescribeKTVMusicDetail返回参数结构体
 */
export interface DescribeKTVMusicDetailResponse {
    /**
      * 歌曲基础信息
      */
    KTVMusicBaseInfo: KTVMusicBaseInfo;
    /**
      * 播放凭证
      */
    PlayToken: string;
    /**
      * 歌词下载地址
      */
    LyricsUrl: string;
    /**
      * 歌曲规格信息列表
      */
    DefinitionInfoSet: Array<KTVMusicDefinitionInfo>;
    /**
      * 音高数据文件下载地址
      */
    MidiJsonUrl: string;
    /**
      * 副歌片段数据列表
      */
    ChorusClipSet: Array<ChorusClip>;
    /**
      * 前奏间隔，单位：毫秒；注：若参数返回为0则无人声部分
      */
    PreludeInterval: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVRobots请求参数结构体
 */
export interface DescribeKTVRobotsRequest {
    /**
      * 机器人Id列表。
      */
    RobotIds?: Array<string>;
    /**
      * 机器人状态，取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>Destroy：销毁</li>
      */
    Statuses?: Array<string>;
    /**
      * 匹配创建时间在此时间段内的机器人。
<li>包含所指定的头尾时间点。</li>
      */
    CreateTime?: TimeRange;
    /**
      * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
      */
    Offset?: number;
    /**
      * 分页返回的起始偏移量，默认值：10。
      */
    Limit?: number;
}
/**
 * DescribeKTVMusicTags返回参数结构体
 */
export interface DescribeKTVMusicTagsResponse {
    /**
      * 标签分组列表
      */
    TagGroupSet: Array<KTVMusicTagGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVMusicTags请求参数结构体
 */
export declare type DescribeKTVMusicTagsRequest = null;
/**
 * 直播进房输入参数
 */
export interface JoinRoomInput {
    /**
      * TRTC进房参数
      */
    TRTCJoinRoomInput?: TRTCJoinRoomInput;
}
/**
 * DestroyKTVRobot返回参数结构体
 */
export interface DestroyKTVRobotResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateKTVRobot请求参数结构体
 */
export interface CreateKTVRobotRequest {
    /**
      * RTC厂商类型，取值有：
<li>TRTC</li>
      */
    RTCSystem: string;
    /**
      * 进房参数。
      */
    JoinRoomInput: JoinRoomInput;
    /**
      * license基础信息
      */
    ApplicationLicenseInput?: ApplicationLicenseInput;
    /**
      * 创建机器人时初始化参数。
      */
    SyncRobotCommands?: Array<SyncRobotCommand>;
}
/**
 * 即使广播曲库联想词信息
 */
export interface KTVSuggestionInfo {
    /**
      * 联想词
      */
    Suggestion: string;
}
/**
 * DescribeKTVTopList请求参数结构体
 */
export interface DescribeKTVTopListRequest {
    /**
      * 榜单类型。默认Hot
<li> Hot, 热歌榜。</li>
      */
    Type?: string;
    /**
      * 榜单周期 默认为Week
<li> Week, 周榜。</li>
<li> Month, 月榜。</li>
      */
    Period?: string;
}
/**
 * DescribeKTVPlaylistDetail请求参数结构体
 */
export interface DescribeKTVPlaylistDetailRequest {
    /**
      * 歌单Id
      */
    PlaylistId: string;
    /**
      * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
      */
    Offset?: number;
    /**
      * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
      */
    Limit?: number;
}
/**
 * 音乐详情
 */
export interface Music {
    /**
      * 音乐播放链接相对路径，必须通过在正版曲库直通车控制台上登记的域名进行拼接。
      */
    Url: string;
    /**
      * 音频文件大小
      */
    FileSize: number;
    /**
      * 音频文件类型
      */
    FileExtension: string;
    /**
      * Song fragment start.试听片段开始时间，试听时长为auditionEnd-auditionBegin
Unit :ms
      */
    AuditionBegin: number;
    /**
      * Song fragment end.试听片段结束时间, 试听时长为auditionEnd-auditionBegin
Unit :ms
      */
    AuditionEnd: number;
    /**
      * 音乐播放链接全路径，前提是在正版曲库直通车控制台添加过域名，否则返回空字符。
如果添加过多个域名只返回第一个添加域名的播放全路径。
      */
    FullUrl: string;
}
/**
 * DescribeStations返回参数结构体
 */
export interface DescribeStationsResponse {
    /**
      * 总数量
      */
    Total?: number;
    /**
      * 分页偏移量
      */
    Offset?: number;
    /**
      * 当前页station数量
      */
    Size?: number;
    /**
      * 剩余数量（total-offset-size），通过这个值判断是否还有下一页
      */
    HaveMore?: number;
    /**
      * Stations 素材库列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Stations?: Array<Station>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudMusicPurchased请求参数结构体
 */
export interface DescribeCloudMusicPurchasedRequest {
    /**
      * 授权项目Id
      */
    AuthInfoId: string;
}
/**
 * 曲库包歌曲信息
 */
export interface PackageItem {
    /**
      * 订单id
      */
    OrderId: string;
    /**
      * 歌曲名
      */
    TrackName: string;
    /**
      * 歌曲ID
      */
    ItemID: string;
    /**
      * 专辑图片
      */
    Img: string;
    /**
      * 歌手名
      */
    ArtistName: string;
    /**
      * 歌曲时长
      */
    Duration: string;
    /**
      * 授权区域，global: 全球 CN: 中国
      */
    AuthorizedArea: string;
    /**
      * 标签数组
      */
    Tags: Array<string>;
}
/**
 * DescribeKTVPlaylists请求参数结构体
 */
export interface DescribeKTVPlaylistsRequest {
    /**
      * 歌单类型，取值有：
·OfficialRec：官方推荐
·Normal：自定义
当该字段未填时，默认为取OfficialRec
      */
    Type?: string;
    /**
      * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
取值范围：Offset + Limit 不超过5000
      */
    Offset?: number;
    /**
      * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
取值范围：Offset + Limit 不超过5000
      */
    Limit?: number;
}
/**
 * TRTC推流进房信息
 */
export interface TRTCJoinRoomInput {
    /**
      * 签名。
      */
    Sign: string;
    /**
      * 房间号。
      */
    RoomId: string;
    /**
      * 推流应用ID。
      */
    SdkAppId: string;
    /**
      * 用户唯一标识。
      */
    UserId: string;
}
/**
 * DescribePackageItems请求参数结构体
 */
export interface DescribePackageItemsRequest {
    /**
      * 订单id，从获取已购曲库包列表中获取
      */
    OrderId: string;
    /**
      * 默认0，Offset=Offset+Length
      */
    Offset?: number;
    /**
      * 默认20
      */
    Length?: number;
}
/**
 * AuthInfo集合
 */
export interface AuthInfo {
    /**
      * 主体名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubjectName: string;
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectName: string;
    /**
      * 应用场景
      */
    AppScene: number;
    /**
      * 应用地域
      */
    AppRegion: number;
    /**
      * 授权时间
      */
    AuthPeriod: number;
    /**
      * 是否可商业化
      */
    Commercialization: number;
    /**
      * 是否可跨平台
      */
    Platform: number;
    /**
      * 加密后Id
      */
    Id: string;
}
/**
 * DescribeKTVRobots返回参数结构体
 */
export interface DescribeKTVRobotsResponse {
    /**
      * 机器人总数。
      */
    TotalCount: number;
    /**
      * 机器人信息集合。
      */
    KTVRobotInfoSet: Array<KTVRobotInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 曲库包用途信息
 */
export interface UseRange {
    /**
      * 用途id
      */
    UseRangeId: number;
    /**
      * 用途范围名称
      */
    Name: string;
}
/**
 * DescribeStations请求参数结构体
 */
export interface DescribeStationsRequest {
    /**
      * 条数，必须大于0
      */
    Limit: number;
    /**
      * offset (Default = 0)，Offset=Offset+Limit
      */
    Offset: number;
}
/**
 * DescribeKTVSingerMusics请求参数结构体
 */
export interface DescribeKTVSingerMusicsRequest {
    /**
      * 歌手id
      */
    SingerId: string;
    /**
      * 分页偏移量，默认值：0。
      */
    Offset?: number;
    /**
      * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
      */
    Limit?: number;
}
/**
 * DescribeKTVSingerCategories返回参数结构体
 */
export interface DescribeKTVSingerCategoriesResponse {
    /**
      * 歌手性别分类列表
      */
    GenderSet: Array<KTVSingerCategoryInfo>;
    /**
      * 歌手区域分类列表
      */
    AreaSet: Array<KTVSingerCategoryInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVSingers请求参数结构体
 */
export interface DescribeKTVSingersRequest {
    /**
      * 歌手id集合，精确匹配歌手id
<li> 数组长度限制10</li>
      */
    SingerIds?: Array<string>;
    /**
      * 歌手性别集合，不传为全部，精确匹配歌手性别类型，
<li>数组长度限制1</li>
<li>取值范围：直播互动曲库歌手分类信息接口，返回性别分类信息列表中，分类英文名</li>
      */
    Genders?: Array<string>;
    /**
      * 歌手区域集合，不传为全部，精确匹配歌手区域
<li>数组长度限制10</li>
<li>取值范围：直播互动曲库歌手分类信息接口，返回的区域分类信息列表中，分类英文名</li>
      */
    Areas?: Array<string>;
    /**
      * 排序方式。默认按照播放数倒序
<li> Sort.Field 可选 PlayCount。</li>
      */
    Sort?: SortBy;
    /**
      * 分页偏移量，默认值：0。
      */
    Offset?: number;
    /**
      * 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
      */
    Limit?: number;
}
/**
 * 设置播放列表指令参数
 */
export interface SetPlaylistCommandInput {
    /**
      * 变更类型，取值有：
<li>Add：添加</li>
<li>Delete：删除</li>
<li>ClearList：清空歌曲列表</li>
<li>Move：移动歌曲</li>
      */
    Type: string;
    /**
      * 歌单索引位置，
当 Type 取 Add 时，-1表示添加在列表最后位置，大于-1表示要添加的位置；
当 Type 取 Delete 时，表示待删除歌曲的位置；
当 Type 取 Move 时，表示待调整歌曲的位置。
      */
    Index?: number;
    /**
      * 当 Type 取 Move 时，必填，表示移动歌曲的目标位置。
      */
    ChangedIndex?: number;
    /**
      * 歌曲 ID 列表，当 Type 取 Add 时，必填。
      */
    MusicIds?: Array<string>;
}
/**
 * SyncKTVRobotCommand返回参数结构体
 */
export interface SyncKTVRobotCommandResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BatchDescribeKTVMusicDetails返回参数结构体
 */
export interface BatchDescribeKTVMusicDetailsResponse {
    /**
      * 歌曲详情列表信息
      */
    KTVMusicDetailInfoSet: Array<KTVMusicDetailInfo>;
    /**
      * 不存在的歌曲 ID 列表。
      */
    NotExistMusicIdSet: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SearchKTVMusics请求参数结构体
 */
export interface SearchKTVMusicsRequest {
    /**
      * 搜索关键词
      */
    KeyWord: string;
    /**
      * 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
取值范围：Offset + Limit 不超过5000。
      */
    Offset: number;
    /**
      * 分页返回的起始偏移量，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。
      */
    Limit: number;
    /**
      * 排序方式。默认按照匹配度排序
<li> Sort.Field 可选 CreateTime</li>
<li> Sort.Order 可选 Desc </li>
<li> 当 KeyWord 不为空时，Sort.Field 字段无效， 搜索结果将以匹配度排序。</li>
      */
    Sort?: SortBy;
    /**
      * 标签 ID 集合，匹配集合指定所有 ID 。
<li>数组长度限制：10。</li>
      */
    TagIds?: Array<string>;
}
/**
 * 推荐歌单基础信息
 */
export interface KTVPlaylistBaseInfo {
    /**
      * 歌单Id
      */
    PlaylistId: string;
    /**
      * 歌单标题
      */
    Title: string;
    /**
      * 歌单介绍
      */
    Description: string;
    /**
      * 歌曲数量
      */
    MusicNum: number;
}
/**
 * DescribeKTVSingers返回参数结构体
 */
export interface DescribeKTVSingersResponse {
    /**
      * 总歌手数
      */
    TotalCount: number;
    /**
      * KTV歌手列表
      */
    KTVSingerInfoSet: Array<KTVSingerInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeItemById返回参数结构体
 */
export interface DescribeItemByIdResponse {
    /**
      * 歌曲信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Items?: Array<Item>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 返回单曲页面歌曲是否在售状态
 */
export interface MusicStatus {
    /**
      * 歌曲Id
      */
    MusicId: string;
    /**
      * 在售状态,0为在售，1为临时下架，2为永久下架
      */
    SaleStatus: number;
}
/**
 * KTV歌手分类信息
 */
export interface KTVSingerCategoryInfo {
    /**
      * 分类中文名
      */
    ChineseName: string;
    /**
      * 分类英文名
      */
    EnglishName: string;
}
/**
 * BatchDescribeKTVMusicDetails请求参数结构体
 */
export interface BatchDescribeKTVMusicDetailsRequest {
    /**
      * 歌曲Id列表，注：列表最大长度为50
      */
    MusicIds: Array<string>;
}
/**
 * 发送自定义信息指令参数
 */
export interface SendMessageCommandInput {
    /**
      * 自定义消息，json格式字符串。
      */
    Message: string;
    /**
      * 消息重复次数，默认为 1。
      */
    Repeat?: number;
}
/**
 * 直播互动歌曲规格信息。
 */
export interface KTVMusicDefinitionInfo {
    /**
      * 规格，取值有：
<li>audio/mi：低规格；</li>
<li>audio/lo：中规格；</li>
<li>audio/hi：高规格。</li>
      */
    Definition: string;
    /**
      * 码率，单位为 bps。
      */
    Bitrate: number;
    /**
      * 文件大小，单位为字节。
      */
    Size: number;
}
/**
 * Album
 */
export interface Album {
    /**
      * 专辑名
      */
    AlbumName: string;
    /**
      * 专辑图片大小及类别
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImagePathMap: Array<ImagePath>;
}
/**
 * DescribeLyric返回参数结构体
 */
export interface DescribeLyricResponse {
    /**
      * 歌词或者波形图详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Lyric: Lyric;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * KTV 曲目基础信息
 */
export interface KTVMusicBaseInfo {
    /**
      * 歌曲 Id
      */
    MusicId: string;
    /**
      * 歌曲名称
      */
    Name: string;
    /**
      * 演唱者基础信息列表
      */
    SingerInfoSet: Array<KTVSingerBaseInfo>;
    /**
      * 已弃用，请使用SingerInfoSet
      */
    SingerSet: Array<string>;
    /**
      * 作词者列表
      */
    LyricistSet: Array<string>;
    /**
      * 作曲者列表
      */
    ComposerSet: Array<string>;
    /**
      * 标签列表
      */
    TagSet: Array<string>;
    /**
      * 歌曲时长
      */
    Duration: number;
}
/**
 * SyncKTVRobotCommand请求参数结构体
 */
export interface SyncKTVRobotCommandRequest {
    /**
      * 机器人Id。
      */
    RobotId: string;
    /**
      * 指令，取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>SwitchPrevious：上一首</li>
<li>SwitchNext：下一首</li>
<li>SetPlayMode：设置播放模式</li>
<li>Seek：调整播放进度</li>
<li>SetPlaylist：歌单变更</li>
<li>SetAudioParam：音频参数变更</li>
<li>SendMessage：发送自定义消息</li>
<li>SetDestroyMode：设置销毁模式</li>
<li>SetVolume：设置音量</li>
      */
    Command: string;
    /**
      * 播放参数。
      */
    PlayCommandInput?: PlayCommandInput;
    /**
      * 播放列表变更信息，当Command取SetPlaylist时，必填。
      */
    SetPlaylistCommandInput?: SetPlaylistCommandInput;
    /**
      * 播放进度，当Command取Seek时，必填。
      */
    SeekCommandInput?: SeekCommandInput;
    /**
      * 音频参数，当Command取SetAudioParam时，必填。
      */
    SetAudioParamCommandInput?: SetAudioParamCommandInput;
    /**
      * 自定义消息，当Command取SendMessage时，必填。
      */
    SendMessageCommandInput?: SendMessageCommandInput;
    /**
      * 播放模式，当Command取SetPlayMode时，必填。
      */
    SetPlayModeCommandInput?: SetPlayModeCommandInput;
    /**
      * 销毁模式，当Command取SetDestroyMode时，必填。
      */
    SetDestroyModeCommandInput?: SetDestroyModeCommandInput;
    /**
      * 音量，当Command取SetVolume时，必填。
      */
    SetVolumeCommandInput?: SetVolumeCommandInput;
}
/**
 * DescribeKTVSuggestions请求参数结构体
 */
export interface DescribeKTVSuggestionsRequest {
    /**
      * 联想关键词
      */
    KeyWord: string;
}
/**
 * DescribeKTVPlaylists返回参数结构体
 */
export interface DescribeKTVPlaylistsResponse {
    /**
      * 推荐歌单列表
      */
    PlaylistBaseInfoSet: Array<KTVPlaylistBaseInfo>;
    /**
      * 推荐歌单列表总数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeKTVPlaylistDetail返回参数结构体
 */
export interface DescribeKTVPlaylistDetailResponse {
    /**
      * 歌曲基础信息列表
      */
    KTVMusicInfoSet: Array<KTVMusicBaseInfo>;
    /**
      * 歌单基础信息
      */
    PlaylistBaseInfo: KTVPlaylistBaseInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 音频参数信息
 */
export interface SetAudioParamCommandInput {
    /**
      * 规格，取值有：
<li>audio/mi：低规格</li>
<li>audio/lo：中规格</li>
<li>audio/hi：高规格</li>
      */
    Definition?: string;
    /**
      * 音频类型，取值有：
<li>Original：原唱</li>
<li>Accompaniment：伴奏</li>
      */
    Type?: string;
}
/**
 * 下架歌曲复合结构
 */
export interface TakeMusicOffShelves {
    /**
      * 资源方对应音乐Id
      */
    MusicIds: string;
    /**
      * 当曲目临时下架时：已订购客户无影响，无需消息通知。当曲目封杀下架后，推送消息至已订购老客户，枚举值，判断是否上/下架
在售状态，0在售，1临时下架，2永久下架
      */
    SaleStatus: string;
}
/**
 * 曲库包已下架歌曲详细信息
 */
export interface OfflineMusicDetail {
    /**
      * 歌曲Id
      */
    ItemId: string;
    /**
      * 歌曲名称
      */
    MusicName: string;
    /**
      * 不可用原因
      */
    OffRemark: string;
    /**
      * 不可用时间
      */
    OffTime: string;
}
/**
 * DescribeAuthInfo请求参数结构体
 */
export interface DescribeAuthInfoRequest {
    /**
      * 偏移量：Offset=Offset+Limit
      */
    Offset?: number;
    /**
      * 数据条数
      */
    Limit?: number;
    /**
      * 搜索关键字
      */
    Key?: string;
}
/**
 * 曲库包信息
 */
export interface Package {
    /**
      * 订单id
      */
    OrderId: string;
    /**
      * 曲库包名称
      */
    Name: string;
    /**
      * 授权地区-global: 全球  CN: 中国
      */
    AuthorizedArea: string;
    /**
      * 授权次数
      */
    AuthorizedLimit: number;
    /**
      * 套餐有效期，单位:天
      */
    TermOfValidity: number;
    /**
      * 0:不可商业化；1:可商业化
      */
    Commercial: number;
    /**
      * 套餐价格，单位：元
      */
    PackagePrice: number;
    /**
      * 生效开始时间,格式yyyy-MM-dd HH:mm:ss
      */
    EffectTime: string;
    /**
      * 生效结束时间,格式yyyy-MM-dd HH:mm:ss
      */
    ExpireTime: string;
    /**
      * 剩余授权次数
      */
    UsedCount: number;
    /**
      * 曲库包用途信息
      */
    UseRanges: Array<UseRange>;
}
/**
 * 设置播放模式
 */
export interface SetPlayModeCommandInput {
    /**
      * 播放模式，取值有：
<li>RepeatPlaylist：列表循环</li>
<li>Order：顺序播放</li>
<li>RepeatSingle：单曲循环</li>
<li>Shuffle：随机播放</li>
      */
    PlayMode: string;
}
/**
 * 机器人信息
 */
export interface KTVRobotInfo {
    /**
      * 机器人Id。
      */
    RobotId: string;
    /**
      * 状态，取值有：
<li>Play：播放</li>
<li>Pause：暂停</li>
<li>Destroy：销毁</li>
      */
    Status: string;
    /**
      * 播放列表。
      */
    Playlists: Array<string>;
    /**
      * 当前歌单索引位置。
      */
    CurIndex: number;
    /**
      * 播放进度，单位：毫秒。
      */
    Position: number;
    /**
      * 音频参数。
      */
    SetAudioParamInput: SetAudioParamCommandInput;
    /**
      * 进房信息。
      */
    JoinRoomInput: JoinRoomInput;
    /**
      * RTC厂商类型，取值有：
<li>TRTC</li>
      */
    RTCSystem: string;
    /**
      * 播放模式，PlayMode取值有：
<li>RepeatPlaylist：列表循环</li>
<li>Order：顺序播放</li>
<li>RepeatSingle：单曲循环</li>
<li>Shuffle：随机播放</li>
      */
    SetPlayModeInput: SetPlayModeCommandInput;
    /**
      * 音量，范围 0~100，默认为 50。
      */
    SetVolumeInput: SetVolumeCommandInput;
}
/**
 * DescribeItems请求参数结构体
 */
export interface DescribeItemsRequest {
    /**
      * offset (Default = 0)，(当前页-1) * Limit
      */
    Offset: number;
    /**
      * 条数，必须大于0，最大值为30
      */
    Limit: number;
    /**
      * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
      */
    CategoryId?: string;
    /**
      * （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从<a href="https://cloud.tencent.com/document/product/1155/40109">获取分类内容（Station）列表接口</a>中获取。
      */
    CategoryCode?: string;
}
/**
 * 歌曲信息
 */
export interface Item {
    /**
      * Song ID
      */
    ItemID: string;
    /**
      * Song info
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataInfo: DataInfo;
    /**
      * 专辑信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Album: Album;
    /**
      * 多个歌手集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    Artists: Array<Artist>;
    /**
      * 歌曲状态，1:添加进购物车；2:核销进曲库包
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
}
/**
 * DescribeKTVTopList返回参数结构体
 */
export interface DescribeKTVTopListResponse {
    /**
      * 歌曲基础信息列表
      */
    KTVMusicTopInfoSet: Array<KTVMusicTopInfo>;
    /**
      * 返回总条数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 对外开放信息
 */
export interface MusicOpenDetail {
    /**
      * 音乐Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    MusicId: string;
    /**
      * 专辑名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlbumName: string;
    /**
      * 专辑图片路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlbumImageUrl: string;
    /**
      * 音乐名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    MusicName: string;
    /**
      * 音乐图片路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    MusicImageUrl: string;
    /**
      * 歌手
注意：此字段可能返回 null，表示取不到有效值。
      */
    Singers: Array<string>;
    /**
      * 播放时长
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration: number;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<string>;
    /**
      * 歌词url
注意：此字段可能返回 null，表示取不到有效值。
      */
    LyricUrl: string;
    /**
      * 波形图url
注意：此字段可能返回 null，表示取不到有效值。
      */
    WaveformUrl: string;
}
/**
 * DescribePackages请求参数结构体
 */
export interface DescribePackagesRequest {
    /**
      * 默认0，Offset=Offset+Length
      */
    Offset?: number;
    /**
      * 默认20
      */
    Length?: number;
}
/**
 * DescribePackages返回参数结构体
 */
export interface DescribePackagesResponse {
    /**
      * 已购曲库包列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Packages?: Array<Package>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 歌词信息
 */
export interface Lyric {
    /**
      * 歌词cdn地址
      */
    Url: string;
    /**
      * 歌词后缀名
      */
    FileNameExt: string;
    /**
      * 歌词类型
      */
    SubItemType: string;
}
/**
 * TakeMusicOffShelves返回参数结构体
 */
export interface TakeMusicOffShelvesResponse {
    /**
      * 返回成功数量
      */
    SuccessNum: number;
    /**
      * 返回失败数量
      */
    FailedNum: number;
    /**
      * 返回失败歌曲musicId
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailedMusicIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
