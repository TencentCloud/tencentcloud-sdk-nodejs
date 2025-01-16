/**
 * 画布信息。制作视频时，如果源素材（视频或者图片）不能填满输出的视频窗口，将用设置的画布进行背景绘制。
 */
export interface Canvas {
    /**
     * 背景颜色，取值有：
  <li>Black：黑色背景</li>
  <li>White：白色背景</li>
  默认值：Black。
     */
    Color?: string;
    /**
     * 画布宽度，即输出视频的宽度，取值范围：0~ 3840，单位：px。
  默认值：0，表示和第一个视频轨的第一个视频片段的视频宽度一致。
     */
    Width?: number;
    /**
     * 画布高度，即输出视频的高度（或长边），取值范围：0~ 3840，单位：px。
  默认值：0，表示和第一个视频轨的第一个视频片段的视频高度一致。
     */
    Height?: number;
}
/**
 * ModifySampleSnapshotTemplate返回参数结构体
 */
export interface ModifySampleSnapshotTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWatermarkTemplate请求参数结构体
 */
export interface ModifyWatermarkTemplateRequest {
    /**
     * 水印模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 水印模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 原点位置，可选值：
  <li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
  <li>TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
  <li>BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
  <li>BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
     */
    CoordinateOrigin?: string;
    /**
     * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
     */
    XPos?: string;
    /**
     * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
     */
    YPos?: string;
    /**
     * 图片水印模板，该字段仅对图片水印模板有效。
     */
    ImageTemplate?: ImageWatermarkInputForUpdate;
    /**
     * 文字水印模板，该字段仅对文字水印模板有效。
     */
    TextTemplate?: TextWatermarkTemplateInputForUpdate;
    /**
     * SVG 水印模板，该字段仅对 SVG 水印模板有效。
     */
    SvgTemplate?: SvgWatermarkInputForUpdate;
}
/**
 * 域名推送 CLS 目标。
 */
export interface DomainCLSTargetInfo {
    /**
     * 域名。
     */
    Domain?: string;
    /**
     * 中国大陆地区的日志推送目标。
     */
    ChineseMainlandCLSTargetInfo?: AreaCLSTargetInfo;
    /**
     * 中国大陆以外地区的日志推送目标。
     */
    OutsideChineseMainlandCLSTargetInfo?: AreaCLSTargetInfo;
}
/**
 * CreateStorageRegion请求参数结构体
 */
export interface CreateStorageRegionRequest {
    /**
     * 待开通的存储地域，必须是系统支持的地域。
     */
    StorageRegion: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 语音全文识别片段。
 */
export interface AiRecognitionTaskAsrFullTextSegmentItem {
    /**
     * 识别片段置信度。取值：0~100。
     */
    Confidence: number;
    /**
     * 识别片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 识别片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
    /**
     * 识别文本。
     */
    Text: string;
}
/**
 * 获取文件属性任务信息
 */
export interface DescribeFileAttributesTask {
    /**
     * 任务 ID。
     */
    TaskId: string;
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status: string;
    /**
     * 错误码，0 表示成功，其他值表示失败：
  <li>40000：输入参数不合法，请检查输入参数；</li>
  <li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
  <li>70000：内部服务错误，建议重试。</li>
     */
    ErrCode: number;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt: string;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 任务进度，取值范围 [0-100] 。
     */
    Progress: number;
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * 获取媒体文件属性任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output: DescribeFileAttributesTaskOutput;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext: string;
}
/**
 * 视频画面质量评价的控制参数。
 */
export interface QualityEvaluationConfigureInfo {
    /**
     * 视频画面质量评价检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
    /**
     * 视频画面质量评价过滤阈值，结果只返回低于该值的时间段，默认值为 60。
     */
    Score?: number;
}
/**
 * 音视频审核任务的输入。
 */
export interface ReviewAudioVideoTaskInput {
    /**
     * 媒体文件 ID。
     */
    FileId?: string;
    /**
     * 音视频审核模板 ID。
     */
    Definition?: number;
    /**
     * 审核的内容，可选值：
  <li>Media：原始音视频；</li>
  <li>Cover：封面。</li>
     */
    ReviewContents?: Array<string>;
}
/**
 * DescribeAllClass请求参数结构体
 */
export interface DescribeAllClassRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DescribeRoundPlays请求参数结构体
 */
export interface DescribeRoundPlaysRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 过滤条件：轮播播单标识，数组长度限制：100。
     */
    RoundPlayIds?: Array<string>;
    /**
     * 过滤条件，轮播播单状态，可选值： <li>Enabled：启动状态；</li> <li>Disabled：停止状态。</li>
     */
    Status?: string;
    /**
     * 过滤条件：轮播播单创建时间。
     */
    CreateTime?: TimeRange;
    /**
     * 过滤条件：轮播播单更新时间。
     */
    UpdateTime?: TimeRange;
    /**
     * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
     */
    ScrollToken?: string;
    /**
     * 分页偏移量，默认值：0。已经废弃，请根据 ScrollToken 参数进行分批次查询。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * WeChatMiniProgramPublish请求参数结构体
 */
export interface WeChatMiniProgramPublishRequest {
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 发布视频所对应的转码模板 ID，为0代表原始视频。
     */
    SourceDefinition?: number;
}
/**
 * 智能分类任务输入类型
 */
export interface AiAnalysisTaskClassificationInput {
    /**
     * 视频智能分类模板 ID。
     */
    Definition: number;
}
/**
 * SVG水印模板输入参数
 */
export interface SvgWatermarkInput {
    /**
     * 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：
  <li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且
   Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；</li>
  <li>当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；</li>
  <li>当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；</li>
  <li>当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；</li>
  <li>当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；</li>
  <li>当字符串以 % 结尾时，含义同 W%。</li>
  默认值为 10W%。
     */
    Width?: string;
    /**
     * 水印的高度，支持 px，W%，H%，S%，L% 六种格式：
  <li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且
   Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；</li>
  <li>当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；</li>
  <li>当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；</li>
  <li>当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；</li>
  <li>当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；</li>
  <li>当字符串以 % 结尾时，含义同 H%。</li>
  默认值为 0px。
     */
    Height?: string;
}
/**
 * CreateTranscodeTemplate请求参数结构体
 */
export interface CreateTranscodeTemplateRequest {
    /**
     * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a、wav。其中，mp3、flac、ogg、m4a、wav 为纯音频文件。
     */
    Container: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 转码模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 是否去除视频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值：0。
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值：0。
     */
    RemoveAudio?: number;
    /**
     * 视频流配置参数，当 RemoveVideo 为 0，该字段必填。
     */
    VideoTemplate?: VideoTemplateInfo;
    /**
     * 音频流配置参数，当 RemoveAudio 为 0，该字段必填。
     */
    AudioTemplate?: AudioTemplateInfo;
    /**
     * 极速高清转码参数。
     */
    TEHDConfig?: TEHDConfig;
    /**
     * 切片类型，当 Container 为 hls 时有效，可选值：
  <li>ts：ts 切片；</li>
  <li>fmp4：fmp4 切片。</li>
  默认值：ts。
     */
    SegmentType?: string;
}
/**
 * 转场操作
 */
export interface TransitionOpertion {
    /**
     * 转场类型，取值有：
  <ul>
  <li>图像的转场操作，用于两个视频片段图像间的转场处理：
  <ul>
  <li>ImageFadeInFadeOut：图像淡入淡出。 </li>
  <li>BowTieHorizontal：水平蝴蝶结。 </li>
  <li>BowTieVertical：垂直蝴蝶结。 </li>
  <li>ButterflyWaveScrawler：晃动。 </li>
  <li>Cannabisleaf：枫叶。 </li>
  <li>Circle：弧形收放。 </li>
  <li>CircleCrop：圆环聚拢。 </li>
  <li>Circleopen：椭圆聚拢。 </li>
  <li>Crosswarp：横向翘曲。 </li>
  <li>Cube：立方体。 </li>
  <li>DoomScreenTransition：幕布。 </li>
  <li>Doorway：门廊。 </li>
  <li>Dreamy：波浪。 </li>
  <li>DreamyZoom：水平聚拢。 </li>
  <li>FilmBurn：火烧云。 </li>
  <li>GlitchMemories：抖动。 </li>
  <li>Heart：心形。 </li>
  <li>InvertedPageCurl：翻页。 </li>
  <li>Luma：腐蚀。 </li>
  <li>Mosaic：九宫格。 </li>
  <li>Pinwheel：风车。 </li>
  <li>PolarFunction：椭圆扩散。 </li>
  <li>PolkaDotsCurtain：弧形扩散。 </li>
  <li>Radial：雷达扫描 </li>
  <li>RotateScaleFade：上下收放。 </li>
  <li>Squeeze：上下聚拢。 </li>
  <li>Swap：放大切换。 </li>
  <li>Swirl：螺旋。 </li>
  <li>UndulatingBurnOutSwirl：水流蔓延。 </li>
  <li>Windowblinds：百叶窗。 </li>
  <li>WipeDown：向下收起。 </li>
  <li>WipeLeft：向左收起。 </li>
  <li>WipeRight：向右收起。 </li>
  <li>WipeUp：向上收起。 </li>
  <li>ZoomInCircles：水波纹。 </li>
  </ul>
  </li>
  <li>音频的转场操作，用于两个音频片段间的转场处理：
  <ul>
  <li>AudioFadeInFadeOut：声音淡入淡出。 </li>
  </ul>
  </li>
  </ul>
     */
    Type: string;
}
/**
 * 音频轨道上的音频片段信息。
 */
export interface AudioTrackItem {
    /**
     * 音频片段的媒体素材来源，可以是：
  <li>点播的媒体文件 ID；</li>
  <li>其他媒体文件的下载 URL。</li>
  注意：当使用其他媒体文件的下载 URL 作为素材来源，且开启了访问控制（如防盗链）时，需要在 URL 携带访问控制参数（如防盗链签名）。
     */
    SourceMedia: string;
    /**
     * 音频片段取自素材文件的起始时间，单位为秒。0 表示从素材开始位置截取。默认为0。
     */
    SourceMediaStartTime?: number;
    /**
     * 音频片段的时长，单位为秒。默认和素材本身长度一致，表示截取全部素材。
     */
    Duration?: number;
    /**
     * 音频片段目标时长，单位为秒。
  <li>当 TargetDuration 不填或填0时，表示目标时长和 Duration 一致；</li>
  <li>当 TargetDuration 取大于0的值时，将对音频片段做快进或慢放等处理，使得输出片段的时长等于 TargetDuration。</li>
     */
    TargetDuration?: number;
    /**
     * 对音频片段进行的操作，如音量调节等。
     */
    AudioOperations?: Array<AudioTransform>;
}
/**
 * 智能精彩片段信息
 */
export interface MediaAiAnalysisHighlightItem {
    /**
     * 智能精彩集锦地址。
     */
    HighlightUrl: string;
    /**
     * 智能精彩集锦封面地址。
     */
    CovImgUrl: string;
    /**
     * 智能精彩集锦的可信度，取值范围是 0 到 100。
     */
    Confidence: number;
    /**
     * 智能精彩集锦持续时间。
     */
    Duration: number;
    /**
     * 智能精彩集锦子片段列表，精彩集锦片段由这些子片段拼接生成。
     */
    SegmentSet: Array<HighlightSegmentItem>;
}
/**
 * DescribeAnimatedGraphicsTemplates请求参数结构体
 */
export interface DescribeAnimatedGraphicsTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 转动图模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
}
/**
 * LiveRealTimeClip返回参数结构体
 */
export interface LiveRealTimeClipResponse {
    /**
     * 剪辑后的视频播放 URL。
     */
    Url?: string;
    /**
     * 剪辑固化后的视频的媒体文件的唯一标识。
     */
    FileId?: string;
    /**
     * 剪辑固化后的视频任务流 ID。
     */
    VodTaskId?: string;
    /**
     * 剪辑后的视频元信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaData?: MediaMetaData;
    /**
     * <span id="p_segmentset">剪辑后的视频片段信息。</span>
     */
    SegmentSet?: Array<LiveRealTimeClipMediaSegmentInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音视频审核 Asr 文字鉴违禁任务结果类型
 */
export interface AiReviewTaskProhibitedAsrResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核 Asr 文字鉴违禁任务输入。
     */
    Input?: AiReviewProhibitedAsrTaskInput;
    /**
     * 音视频审核 Asr 文字鉴违禁任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiReviewProhibitedAsrTaskOutput;
    /**
     * 音视频审核 Asr 文字鉴违禁任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * 转自适应码流模板详情
 */
export interface AdaptiveDynamicStreamingTemplate {
    /**
     * 转自适应码流模板唯一标识。
     */
    Definition?: number;
    /**
     * 模板类型，取值范围：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 转自适应码流模板名称。
     */
    Name?: string;
    /**
     * 转自适应码流模板描述信息。
     */
    Comment?: string;
    /**
     * 自适应转码格式，取值范围：
  <li>HLS。</li>
     */
    Format?: string;
    /**
     * DRM 类型，取值范围：
  <li>SimpleAES</li>
  <li>Widevine</li>
  <li>FairPlay</li>
  如果取值为空字符串，代表不对视频做 DRM 保护。
     */
    DrmType?: string;
    /**
     * DRM 的密钥提供商，取值范围：
  <li>SDMC：华曦达；</li>
  <li>VOD：云点播。</li>
  默认值为 VOD 。
     */
    DrmKeyProvider?: string;
    /**
     * 自适应转码输入流参数信息，最多输入10路流。
     */
    StreamInfos?: Array<AdaptiveStreamTemplate>;
    /**
     * 是否禁止视频低码率转高码率，取值范围：
  <li>0：否，</li>
  <li>1：是。</li>
     */
    DisableHigherVideoBitrate?: number;
    /**
     * 是否禁止视频分辨率转高分辨率，取值范围：
  <li>0：否，</li>
  <li>1：是。</li>
     */
    DisableHigherVideoResolution?: number;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
    /**
     * 切片类型，仅当 Format 为 HLS 时有效。
     */
    SegmentType?: string;
}
/**
 * DeleteJustInTimeTranscodeTemplate请求参数结构体
 */
export interface DeleteJustInTimeTranscodeTemplateRequest {
    /**
     * 模板名字。
     */
    Name: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DeleteAnimatedGraphicsTemplate返回参数结构体
 */
export interface DeleteAnimatedGraphicsTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音视频审核 Ocr 文字鉴违禁任务结果类型
 */
export interface AiReviewTaskProhibitedOcrResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核 Ocr 文字鉴违禁任务输入。
     */
    Input?: AiReviewProhibitedOcrTaskInput;
    /**
     * 音视频审核 Ocr 文字鉴违禁任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiReviewProhibitedOcrTaskOutput;
    /**
     * 音视频审核 Ocr 文字鉴违禁任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * 语音全文识别结果。
 */
export interface AiRecognitionTaskAsrFullTextResultOutput {
    /**
     * 语音全文识别片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<AiRecognitionTaskAsrFullTextSegmentItem>;
    /**
     * 语音全文识别片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * 语音全文识别片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
    /**
     * 生成的字幕列表，对应 [语音全文识别任务控制参数](https://cloud.tencent.com/document/api/266/31773#AsrFullTextConfigureInfo) SubtitleFormats。
     */
    SubtitleSet?: Array<AiRecognitionTaskAsrFullTextResultOutputSubtitleItem>;
    /**
     * 生成的字幕文件 Url，对应 [语音全文识别任务控制参数](https://cloud.tencent.com/document/api/266/31773#AsrFullTextConfigureInfo) SubtitleFormat。
     */
    SubtitleUrl?: string;
}
/**
 * Ocr 文字涉违禁信息
 */
export interface AiReviewProhibitedOcrTaskOutput {
    /**
     * Ocr 文字涉违禁评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * Ocr 文字涉违禁结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * Ocr 文字有涉违禁嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<MediaContentReviewOcrTextSegmentItem>;
    /**
     * Ocr 文字有涉违禁嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * Ocr 文字有涉违禁嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * 小程序音视频审核概要元信息
 */
export interface MediaMiniProgramReviewElem {
    /**
     * 音视频审核类型。
  <li>Porn：画面涉及令人反感的信息，</li>
  <li>Porn.Ocr：文字涉及令人反感的信息，</li>
  <li>Porn.Asr：声音涉及令人反感的信息，</li>
  <li>Terrorism：画面涉及令人不安全的信息，</li>
  <li>Political：画面涉及令人不适宜的信息，</li>
  <li>Political.Ocr：文字涉及令人不适宜的信息，</li>
  <li>Political.Asr：声音涉及令人不适宜的信息。</li>
     */
    Type?: string;
    /**
     * 音视频审核意见。
  <li>pass：确认正常，</li>
  <li>block：确认违规，</li>
  <li>review：疑似违规。</li>
     */
    Suggestion?: string;
    /**
     * 音视频审核结果置信度。取值 0~100。
     */
    Confidence?: number;
}
/**
 * ManageTask返回参数结构体
 */
export interface ManageTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateImageProcessingTemplate请求参数结构体
 */
export interface CreateImageProcessingTemplateRequest {
    /**
     * 图片处理操作数组，操作将以其在数组中的顺序执行。
  <li>长度限制：10。</li>
     */
    Operations: Array<ImageOperation>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 图片处理模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
}
/**
 * ModifyDefaultStorageRegion请求参数结构体
 */
export interface ModifyDefaultStorageRegionRequest {
    /**
     * 默认的存储地域，必须是已经开通的地域（通过 DescribeStorageRegions 接口查询）。
     */
    StorageRegion: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * ModifyEventConfig返回参数结构体
 */
export interface ModifyEventConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音画质检测任务的输出。
 */
export interface QualityInspectTaskOutput {
    /**
     * 媒体文件是否无音频轨，取值范围：
  <li>0：否，即有音频轨；</li>
  <li>1：是，即无音频轨。</li>
     */
    NoAudio?: number;
    /**
     * 媒体文件是否无视频轨，取值范围：
  <li>0：否，即有视频轨；</li>
  <li>1：是，即无视频轨。</li>
     */
    NoVideo?: number;
    /**
     * 视频画面质量评分，取值范围：[0, 100]。
     */
    QualityEvaluationScore?: number;
    /**
     * 音画质检测出的异常项列表。
     */
    QualityInspectResultSet?: Array<QualityInspectResultItem>;
}
/**
 * 音画质重生任务的输入。
 */
export interface QualityEnhanceTaskInput {
    /**
     * 媒体文件 ID。
     */
    FileId?: string;
    /**
     * 音画质重生模板 ID。
     */
    Definition?: number;
}
/**
 * ResetProcedureTemplate返回参数结构体
 */
export interface ResetProcedureTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 点播文件指定时间点截图信息
 */
export interface MediaSnapshotByTimeOffsetItem {
    /**
     * 指定时间点截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
     */
    Definition?: number;
    /**
     * 同一规格的截图信息集合，每个元素代表一张截图。
     */
    PicInfoSet?: Array<MediaSnapshotByTimePicInfoItem>;
}
/**
 * 画质重生目标参数
 */
export interface RebuildMediaTargetInfo {
    /**
     * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
     */
    MediaName?: string;
    /**
     * 描述信息，最长 128 个字符。缺省描述信息为空。
     */
    Description?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId?: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime?: string;
    /**
     * 输出文件封装格式，可选值：mp4、flv、hls。默认mp4。
     */
    Container?: string;
    /**
     * 输出的视频信息。
     */
    VideoStream?: RebuildMediaTargetVideoStream;
    /**
     * 输出的音频信息。
     */
    AudioStream?: RebuildMediaTargetAudioStream;
    /**
     * 是否去除视频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  
  默认值：0。
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  
  默认值：0。
     */
    RemoveAudio?: number;
}
/**
 * ModifySampleSnapshotTemplate请求参数结构体
 */
export interface ModifySampleSnapshotTemplateRequest {
    /**
     * 采样截图模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 采样截图模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width?: number;
    /**
     * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 采样截图类型，取值：
  <li>Percent：按百分比。</li>
  <li>Time：按时间间隔。</li>
     */
    SampleType?: string;
    /**
     * 采样间隔。
  <li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
  <li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
     */
    SampleInterval?: number;
    /**
     * 图片格式，取值为 jpg 和 png。
     */
    Format?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  <li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
  <li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
  默认值：black 。
     */
    FillType?: string;
}
/**
 * 音视频审核 Ocr 文字涉及令人不适宜信息的任务输入参数类型
 */
export interface AiReviewPoliticalOcrTaskInput {
    /**
     * 鉴别涉及令人不适宜信息的模板 ID。
     */
    Definition?: number;
}
/**
 * ModifyJustInTimeTranscodeTemplate请求参数结构体
 */
export interface ModifyJustInTimeTranscodeTemplateRequest {
    /**
     * 模板名字。
     */
    Name: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 视频参数配置。
     */
    VideoConfigure?: VideoConfigureInfoForUpdate;
    /**
     * 水印参数配置。
     */
    WatermarkConfigure?: WatermarkConfigureInfoForUpdate;
    /**
     * 模板描述，长度限制256个字符。
     */
    Comment?: string;
}
/**
 * DescribePrepaidProducts请求参数结构体
 */
export declare type DescribePrepaidProductsRequest = null;
/**
 * 要处理的源视频信息，视频名称、视频自定义 ID。
 */
export interface MediaInputInfo {
    /**
     * 视频 URL。
     */
    Url: string;
    /**
     * 视频名称。
     */
    Name?: string;
    /**
     * 视频自定义 ID。
     */
    Id?: string;
}
/**
 * 视频截取雪碧图任务，该结构仅用于对 2017 版[截取雪碧图](https://cloud.tencent.com/document/product/266/8101)接口发起的任务。
 */
export interface CreateImageSpriteTask2017 {
    /**
     * 截图雪碧图任务 ID。
     */
    TaskId: string;
    /**
     * 错误码
  <li>0：成功；</li>
  <li>其他值：失败。</li>
     */
    ErrCode: number;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 截取雪碧图文件 ID。
     */
    FileId: string;
    /**
     * 雪碧图规格，参见[雪碧图截图模板](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
     */
    Definition: number;
    /**
     * 雪碧图小图总数量。
     */
    TotalCount: number;
    /**
     * 截取雪碧图输出的地址。
     */
    ImageSpriteUrlSet: Array<string>;
    /**
     * 雪碧图子图位置与时间关系 WebVtt 文件地址。
     */
    WebVttUrl: string;
}
/**
 * 视频裁剪结果文件信息（2017 版）
 */
export interface ClipFileInfo2017 {
    /**
     * 错误码
  <li>0：成功；</li>
  <li>其他值：失败。</li>
     */
    ErrCode: number;
    /**
     * 错误描述。
     */
    Message: string;
    /**
     * 输出目标文件的文件 ID。
     */
    FileId: string;
    /**
     * 输出目标文件的文件地址。
     */
    FileUrl: string;
    /**
     * 输出目标文件的文件类型。
     */
    FileType: string;
}
/**
 * 临时凭证
 */
export interface TempCertificate {
    /**
     * 临时安全证书 Id。
     */
    SecretId: string;
    /**
     * 临时安全证书 Key。
     */
    SecretKey: string;
    /**
     * Token 值。
     */
    Token: string;
    /**
     * 证书无效的时间，返回 Unix 时间戳，精确到秒。
     */
    ExpiredTime: number;
}
/**
 * DescribeDefaultDistributionConfig请求参数结构体
 */
export interface DescribeDefaultDistributionConfigRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 音视频审核 Ocr 文字涉及令人不适宜信息、违规任务结果类型
 */
export interface AiReviewTaskPoliticalOcrResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核 Ocr 文字涉及令人不适宜信息的任务输入。
     */
    Input?: AiReviewPoliticalOcrTaskInput;
    /**
     * 音视频审核 Ocr 文字涉及令人不适宜信息的任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiReviewPoliticalOcrTaskOutput;
    /**
     * 音视频审核 Ocr 文字涉及令人不适宜信息的任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * 音画质重生任务
 */
export interface QualityEnhanceTask {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 任务流状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败：
  <li>40000：输入参数不合法，请检查输入参数；</li>
  <li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
  <li>70000：内部服务错误，建议重试。</li>
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 音画质重生任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 音画质重生任务的输入。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input?: QualityEnhanceTaskInput;
    /**
     * 音画质重生任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: QualityEnhanceTaskOutput;
    /**
     * 音画质重生输出视频的元信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaData?: MediaMetaData;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
}
/**
 * AI 样本管理，关键词输出信息。
 */
export interface AiSampleWord {
    /**
     * 关键词。
     */
    Keyword: string;
    /**
     * 关键词标签。
     */
    TagSet: Array<string>;
    /**
     * 关键词应用场景。
     */
    UsageSet: Array<string>;
    /**
     * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime: string;
    /**
     * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime: string;
}
/**
 * CreateImageSpriteTemplate请求参数结构体
 */
export interface CreateImageSpriteTemplateRequest {
    /**
     * 采样类型，取值：
  <li>Percent：按百分比。</li>
  <li>Time：按时间间隔。</li>
     */
    SampleType: string;
    /**
     * 采样间隔。
  <li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
  <li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
     */
    SampleInterval: number;
    /**
     * 雪碧图中小图的行数。
  注意：小图的行数会影响最终大图的高度，大图的高度最大为15000像素，其中大图的高度为小图行数与小图高度的乘积。
     */
    RowCount: number;
    /**
     * 雪碧图中小图的列数。
  注意：小图的列数会影响最终大图的宽度，大图的宽度最大为15000像素，其中大图的宽度为小图列数与小图宽度的乘积。
     */
    ColumnCount: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 雪碧图模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  默认值：black 。
     */
    FillType?: string;
    /**
     * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
  注意：小图的宽度会影响最终大图的宽度，大图的宽度最大为15000像素，其中大图的宽度为小图列数与小图宽度的乘积。
     */
    Width?: number;
    /**
     * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
  注意：小图的高度会影响最终大图的高度，大图的高度最大为15000像素，其中大图的高度为小图行数与小图高度的乘积。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 图片格式，取值：
  <li> jpg：jpg 格式；</li>
  <li> png：png 格式；</li>
  <li> webp：webp 格式。</li>
  默认值：jpg。
     */
    Format?: string;
}
/**
 * 指定时间点截图信息
 */
export interface MediaSnapshotByTimePicInfoItem {
    /**
     * 该张截图对应视频文件中的时间偏移，单位为<font color=red>毫秒</font>。
     */
    TimeOffset: number;
    /**
     * 该张截图的 URL 地址。
     */
    Url: string;
    /**
     * 截图如果被打上了水印，被打水印的模板 ID 列表。
     */
    WaterMarkDefinition: Array<number | bigint>;
}
/**
 * DescribeDailyMostPlayedStat请求参数结构体
 */
export interface DescribeDailyMostPlayedStatRequest {
    /**
     * 查询日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。该参数仅日期部分有效。
     */
    Date: string;
    /**
     * 域名。查询该域名播放 Top100 的媒体文件的统计数据。默认查询所有域名的播放统计数据。
     */
    DomainName?: string;
    /**
     * Top 数据的统计指标，取值有：
  <li>Traffic：播放流量，按播放流量统计 Top100 的数据。</li>
  <li>PlayTimes：播放次数，按播放次数统计播放 Top100 的数据。</li>
  默认值为Traffic。
     */
    Metric?: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 用户自定义人物音视频审核任务控制参数
 */
export interface UserDefineFaceReviewTemplateInfo {
    /**
     * 用户自定义人物音视频审核任务开关，可选值：
  <li>ON：开启自定义人物音视频审核任务；</li>
  <li>OFF：关闭自定义人物音视频审核任务。</li>
     */
    Switch: string;
    /**
     * 用户自定义人物过滤标签，音视频审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * RefreshUrlCache请求参数结构体
 */
export interface RefreshUrlCacheRequest {
    /**
     * 刷新的 URL 列表，单次最多指定20个 URL。
     */
    Urls: Array<string>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 音视频审核模板详情
 */
export interface ContentReviewTemplateItem {
    /**
     * 音视频审核模板唯一标识。
     */
    Definition?: number;
    /**
     * 音视频审核模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 音视频审核模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 鉴别涉及令人反感的信息的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PornConfigure?: PornConfigureInfo;
    /**
     * 鉴别涉及令人不安全的信息的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerrorismConfigure?: TerrorismConfigureInfo;
    /**
     * 鉴别涉及令人不适宜的信息的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PoliticalConfigure?: PoliticalConfigureInfo;
    /**
     * 违禁控制参数。违禁内容包括：
  <li>谩骂；</li>
  <li>涉毒违法。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProhibitedConfigure?: ProhibitedConfigureInfo;
    /**
     * 用户自定义音视频审核控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserDefineConfigure?: UserDefineConfigureInfo;
    /**
     * 音视频审核结果是否进入音视频审核墙（对音视频审核结果进行人工复核）的开关。
  <li>ON：是；</li>
  <li>OFF：否。</li>
     */
    ReviewWallSwitch?: string;
    /**
     * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
     */
    ScreenshotInterval?: number;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
}
/**
 * DeleteAIRecognitionTemplate返回参数结构体
 */
export interface DeleteAIRecognitionTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteContentReviewTemplate请求参数结构体
 */
export interface DeleteContentReviewTemplateRequest {
    /**
     * 内容审核模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 视频画面噪点检测的控制参数。
 */
export interface NoiseConfigureInfo {
    /**
     * 视频画面噪点检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
}
/**
 * 音视频审核涉及令人不适宜信息的任务输入参数类型
 */
export interface AiReviewPoliticalTaskInput {
    /**
     * 鉴别涉及令人不适宜信息的模板 ID。
     */
    Definition?: number;
}
/**
 * VerifyDomainRecord返回参数结构体
 */
export interface VerifyDomainRecordResponse {
    /**
     * 是否验证成功。
     */
    Result?: boolean;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音频操作
 */
export interface AudioTransform {
    /**
     * 音频操作类型，取值有：
  <li>Volume：音量调节。</li>
     */
    Type: string;
    /**
     * 音量调节参数， 当 Type = Volume 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VolumeParam?: AudioVolumeParam;
}
/**
 * 视频转码任务信息，该结构仅用于对 2017 版[视频转码](https://cloud.tencent.com/document/product/266/7822)接口发起的任务。
 */
export interface TranscodeTask2017 {
    /**
     * 转码任务 ID。
     */
    TaskId: string;
    /**
     * 错误码
  <li>0：成功；</li>
  <li>其他值：失败。</li>
     */
    ErrCode: number;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 被转码文件 ID。
     */
    FileId: string;
    /**
     * 被转码文件名称。
     */
    FileName: string;
    /**
     * 视频时长，单位：秒。
     */
    Duration: number;
    /**
     * 封面地址。
     */
    CoverUrl: string;
    /**
     * 视频转码后生成的播放信息。
     */
    PlayInfoSet: Array<TranscodePlayInfo2017>;
}
/**
 * DescribeCurrentPlaylist返回参数结构体
 */
export interface DescribeCurrentPlaylistResponse {
    /**
     * 当前播放列表信息。
     */
    CurrentPlaylist?: Array<RoundPlayFilePlayInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySuperPlayerConfig请求参数结构体
 */
export interface ModifySuperPlayerConfigRequest {
    /**
     * 播放器配置名称。
     */
    Name: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 播放的音视频类型，可选值：
  <li>AdaptiveDynamicStream：自适应码流输出；</li>
  <li>Transcode：转码输出；</li>
  <li>Original：原始音视频。</li>
     */
    AudioVideoType?: string;
    /**
     * 播放 DRM 保护的自适应码流开关：
  <li>ON：开启，表示仅播放 DRM  保护的自适应码流输出；</li>
  <li>OFF：关闭，表示播放未加密的自适应码流输出。</li>
     */
    DrmSwitch?: string;
    /**
     * 允许输出的未加密的自适应码流模板 ID。
     */
    AdaptiveDynamicStreamingDefinition?: number;
    /**
     * 允许输出的 DRM 自适应码流模板内容。
     */
    DrmStreamingsInfo?: DrmStreamingsInfoForUpdate;
    /**
     * 允许输出的转码模板 ID。
     */
    TranscodeDefinition?: number;
    /**
     * 允许输出的雪碧图模板 ID。
     */
    ImageSpriteDefinition?: number;
    /**
     * 播放器对于不同分辨率的子流展示名字。
     */
    ResolutionNames?: Array<ResolutionNameInfo>;
    /**
     * 播放时使用的域名。填 Default 表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。
     */
    Domain?: string;
    /**
     * 播放时使用的 Scheme。取值范围：
  <li>Default：使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme；</li>
  <li>HTTP；</li>
  <li>HTTPS。</li>
     */
    Scheme?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
}
/**
 * ResetProcedureTemplate请求参数结构体
 */
export interface ResetProcedureTemplateRequest {
    /**
     * 任务流名字
     */
    Name: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 视频处理类型任务参数。
     */
    MediaProcessTask?: MediaProcessTaskInput;
    /**
     * AI 智能内容审核类型任务参数 \*。
  <font color=red>\*：该参数用于发起旧版审核，不建议使用。推荐使用 ReviewAudioVideoTask 参数发起审核。</font>
     */
    AiContentReviewTask?: AiContentReviewTaskInput;
    /**
     * AI 智能内容分析类型任务参数。
     */
    AiAnalysisTask?: AiAnalysisTaskInput;
    /**
     * AI 内容识别类型任务参数。
     */
    AiRecognitionTask?: AiRecognitionTaskInput;
    /**
     * 音视频审核类型任务参数。
     */
    ReviewAudioVideoTask?: ProcedureReviewAudioVideoTaskInput;
}
/**
 * 图片Ocr 文字鉴别信息的任务结果类型
 */
export interface ContentReviewOcrResult {
    /**
     * Ocr 文字鉴别结果的评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * Ocr 文字鉴别的结果建议，取值范围：
  <li>pass；</li>
  <li>review；</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * Ocr 文字鉴别的嫌疑关键词列表。
     */
    KeywordSet?: Array<string>;
    /**
     * Ocr 文字鉴别的嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
     */
    AreaCoordSet?: Array<number | bigint>;
}
/**
 * ComposeMedia返回参数结构体
 */
export interface ComposeMediaResponse {
    /**
     * 制作媒体文件的任务 ID，可以通过该 ID 查询制作任务（任务类型为 MakeMedia）的状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 轮播任务信息
 */
export interface RoundPlayInfo {
    /**
     * 轮播播单标识。
     */
    RoundPlayId?: string;
    /**
     * 启播时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    StartTime?: string;
    /**
     * 轮播列表。
     */
    RoundPlaylist?: Array<RoundPlayListItemInfo>;
    /**
     * 轮播播单名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 轮播播单描述信息，长度限制：256 个字符。
     */
    Desc?: string;
    /**
     * 播放状态，可选值：
  <li>Enabled：启动状态；</li>
  <li>Disabled：停止状态。</li>
  默认值：Enabled。
     */
    Status?: string;
    /**
     * 播放模式，可选值：
  <li>Loop：循环播放播单；</li>
  <li>Linear：单次播放，播单播放完停止播放。</li>
  默认值：Loop。
     */
    PlayBackMode?: string;
    /**
     * 轮播播放地址。
     */
    Url?: string;
    /**
     * 创建时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 更新时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 过期时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)，过期后将停止播单的播放。“9999-12-31T23:59:59+08:00”表示永不过期。
     */
    ExpiredTime?: string;
}
/**
 * DescribeLicenseUsageData返回参数结构体
 */
export interface DescribeLicenseUsageDataResponse {
    /**
     * License 查询次数统计数据，展示所查询 License 次数的明细数据。
     */
    LicenseUsageDataSet?: Array<LicenseUsageDataItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DRM 自适应码流播放信息修改对象
 */
export interface DrmStreamingsInfoForUpdate {
    /**
     * 保护类型为 SimpleAES 的转自适应码流模板 ID。
     */
    SimpleAesDefinition?: number;
    /**
     * 保护类型为 Widevine 的转自适应码流模板 ID。
     */
    WidevineDefinition?: number;
    /**
     * 保护类型为 FairPlay 的转自适应码流模板 ID。
     */
    FairPlayDefinition?: number;
}
/**
 * 智能分类任务控制参数
 */
export interface ClassificationConfigureInfo {
    /**
     * 智能分类任务开关，可选值：
  <li>ON：开启智能分类任务；</li>
  <li>OFF：关闭智能分类任务。</li>
     */
    Switch: string;
}
/**
 * 视频画面低光、过曝检测的控制参数。
 */
export interface AbnormalLightingConfigureInfoForUpdate {
    /**
     * 视频画面低光、过曝检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
}
/**
 * ModifyWordSample返回参数结构体
 */
export interface ModifyWordSampleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音频流配置参数
 */
export interface AudioTemplateInfoForUpdate {
    /**
     * 音频流的编码格式。
  当外层参数 Container 为 mp3 时，可选值为：
  <li>libmp3lame。</li>
  当外层参数 Container 为 ogg 或 flac 时，可选值为：
  <li>flac。</li>
  当外层参数 Container 为 m4a 时，可选值为：
  <li>libfdk_aac；</li>
  <li>libmp3lame；</li>
  <li>ac3。</li>
  当外层参数 Container 为 mp4 或 flv 时，可选值为：
  <li>libfdk_aac：更适合 mp4；</li>
  <li>libmp3lame：更适合 flv；</li>
  <li>mp2。</li>
  当外层参数 Container 为 hls 时，可选值为：
  <li>libfdk_aac。</li>
  当外层参数 Format 为 HLS 或 MPEG-DASH 时，可选值为：
  <li>libfdk_aac。</li>
  当外层参数 Container 为 wav 时，可选值为：
  <li>pcm16。</li>
     */
    Codec?: string;
    /**
     * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。 当取值为 0，表示音频码率和原始音频保持一致。
     */
    Bitrate?: number;
    /**
     * 音频流的采样率，可选值：
  <li>16000，仅当 Codec 为 pcm16 时可选。</li>
  <li>32000</li>
  <li>44100</li>
  <li>48000</li>
  单位：Hz。
     */
    SampleRate?: number;
    /**
     * 音频通道，可选值：
  <li>1：单通道</li>
  <li>2：双通道</li>
  <li>6：立体声</li>
  <li>0：音频声道数和原始音频保持一致</li>
  当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。
     */
    AudioChannel?: number;
}
/**
 * DescribeDailyMediaPlayStat返回参数结构体
 */
export interface DescribeDailyMediaPlayStatResponse {
    /**
     * 播放统计数据。
     */
    DailyPlayStatInfoSet?: Array<DailyPlayStatInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySubAppIdInfo请求参数结构体
 */
export interface ModifySubAppIdInfoRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId: number;
    /**
     * 应用名称，长度限制：40个字符。
     */
    Name?: string;
    /**
     * 应用简介，长度限制： 300个字符。
     */
    Description?: string;
}
/**
 * DeletePersonSample请求参数结构体
 */
export interface DeletePersonSampleRequest {
    /**
     * 素材 ID。
     */
    PersonId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 任务流模板音视频审核输入参数类型。
 */
export interface ProcedureReviewAudioVideoTaskInput {
    /**
     * 审核模板。
     */
    Definition: number;
    /**
     * 审核的内容，可选值：
  <li>Media：原始音视频；</li>
  <li>Cover：封面。</li>
  不填或填空数组时，默认为审核 Media。
     */
    ReviewContents?: Array<string>;
}
/**
 * 语音识别片段。
 */
export interface AiRecognitionTaskAsrWordsSegmentItem {
    /**
     * 识别片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 识别片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
    /**
     * 识别片段置信度。取值：0~100。
     */
    Confidence: number;
}
/**
 * 文字水印模板
 */
export interface TextWatermarkTemplateInput {
    /**
     * 字体类型，目前可以支持两种：
  <li>simkai.ttf：可以支持中文和英文；</li>
  <li>arial.ttf：仅支持英文。</li>
     */
    FontType: string;
    /**
     * 字体大小，格式：Npx，N 为数值。
     */
    FontSize: string;
    /**
     * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。
     */
    FontColor: string;
    /**
     * 文字透明度，取值范围：(0, 1]
  <li>0：完全透明</li>
  <li>1：完全不透明</li>
  默认值：1。
     */
    FontAlpha: number;
}
/**
 * 用户自定义语音审核任务控制参数
 */
export interface UserDefineAsrTextReviewTemplateInfoForUpdate {
    /**
     * 用户自定语音审核任务开关，可选值：
  <li>ON：开启自定义语音审核任务；</li>
  <li>OFF：关闭自定义语音审核任务。</li>
     */
    Switch?: string;
    /**
     * 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 视频画面质量评价的控制参数。
 */
export interface QualityEvaluationConfigureInfoForUpdate {
    /**
     * 视频画面质量评价开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
    /**
     * 视频画面质量评价过滤阈值，结果只返回低于该值的时间段。
     */
    Score?: number;
}
/**
 * 视频内容识别输入参数类型
 */
export interface AiRecognitionTaskInput {
    /**
     * 视频智能识别模板 ID 。
     */
    Definition: number;
}
/**
 * 音频流配置参数
 */
export interface AudioTemplateInfo {
    /**
     * 音频流的编码格式。
  当外层参数 Container 为 mp3 时，可选值为：
  <li>libmp3lame。</li>
  当外层参数 Container 为 ogg 或 flac 时，可选值为：
  <li>flac。</li>
  当外层参数 Container 为 m4a 时，可选值为：
  <li>libfdk_aac；</li>
  <li>libmp3lame；</li>
  <li>ac3。</li>
  当外层参数 Container 为 mp4 或 flv 时，可选值为：
  <li>libfdk_aac：更适合 mp4；</li>
  <li>libmp3lame：更适合 flv；</li>
  <li>mp2。</li>
  当外层参数 Container 为 hls 时，可选值为：
  <li>libfdk_aac。</li>
  当外层参数 Format 为 HLS 或 MPEG-DASH 时，可选值为：
  <li>libfdk_aac。</li>
  当外层参数 Container 为 wav 时，可选值为：
  <li>pcm16。</li>
     */
    Codec: string;
    /**
     * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。
  当取值为 0，表示音频码率和原始音频保持一致。
     */
    Bitrate: number;
    /**
     * 音频流的采样率，可选值：
  <li>16000，仅当 Codec 为 pcm16 时可选。</li>
  <li>32000</li>
  <li>44100</li>
  <li>48000</li>
  单位：Hz。
     */
    SampleRate: number;
    /**
     * 音频通道，可选值：
  <li>1：单通道</li>
  <li>2：双通道</li>
  <li>6：立体声</li>
  <li>0：音频声道数和原始音频保持一致</li>
  当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。
  默认值：2。
     */
    AudioChannel?: number;
}
/**
 * ExecuteFunction返回参数结构体
 */
export interface ExecuteFunctionResponse {
    /**
     * 处理结果打包后的字符串，具体与后台一同协调。
     */
    Result?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能封面任务控制参数
 */
export interface CoverConfigureInfo {
    /**
     * 智能封面任务开关，可选值：
  <li>ON：开启智能封面任务；</li>
  <li>OFF：关闭智能封面任务。</li>
     */
    Switch: string;
}
/**
 * DescribeClientUploadAccelerationUsageData返回参数结构体
 */
export interface DescribeClientUploadAccelerationUsageDataResponse {
    /**
     * 客户端上传加速统计数据。
     */
    ClientUploadAccelerationUsageDataSet?: Array<StatDataItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRebuildMediaTemplate请求参数结构体
 */
export interface ModifyRebuildMediaTemplateRequest {
    /**
     * 视频重生模板号。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: string;
    /**
     * 视频重生模板名称。
     */
    Name?: string;
    /**
     * 视频重生模板描述。
     */
    Comment?: string;
    /**
     * 视频重生视频控制信息。
     */
    RebuildVideoInfo?: RebuildVideoInfo;
    /**
     * 视频重生音频控制信息。
     */
    RebuildAudioInfo?: RebuildAudioInfo;
    /**
     * 输出目标视频控制信息。
     */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /**
     * 输出目标音频控制信息。
     */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /**
     * 输出文件封装格式，可选值：mp4、flv、hls。
     */
    Container?: string;
    /**
     * 是否去除视频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
     */
    RemoveAudio?: number;
}
/**
 * ComposeMedia请求参数结构体
 */
export interface ComposeMediaRequest {
    /**
     * 输入的媒体轨道列表，包括视频、音频、图片等素材组成的多个轨道信息，其中：<li>输入的多个轨道在时间轴上和输出媒体文件的时间轴对齐；</li><li>时间轴上相同时间点的各个轨道的素材进行重叠，视频或者图片按轨道顺序进行图像的叠加，轨道顺序高的素材叠加在上面，音频素材进行混音；</li><li>视频、音频、图片，每一种类型的轨道最多支持 10 个。</li><li>所有类型的轨道上放置的媒体片段数量总和最多支持 500 个。</li>
     */
    Tracks: Array<MediaTrack>;
    /**
     * 输出的媒体文件信息。
     */
    Output: ComposeMediaOutput;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 制作视频文件时使用的画布。
     */
    Canvas?: Canvas;
    /**
     * 标识来源上下文，用于透传用户请求信息，在ComposeMediaComplete回调将返回该字段值，最长 1000个字符。
     */
    SessionContext?: string;
    /**
     * 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
}
/**
 * DescribeCLSTopics请求参数结构体
 */
export interface DescribeCLSTopicsRequest {
    /**
     * 日志集所属的地域，取值有： <li>ap-guangzhou：广州；</li> <li>ap-beijing：北京；</li> <li>ap-chengdu：成都；</li> <li>ap-chongqing：重庆；</li> <li>ap-nanjing：南京；</li> <li>ap-shanghai：上海；</li> <li>ap-singapore：新加坡。</li>
     */
    CLSRegion: string;
    /**
     * 日志主题所属日志集 ID。
     */
    LogsetId: string;
    /**
     * 日志主题 ID 列表。如果不填，表示查询所有的日志主题。
     */
    TopicIds?: Array<string>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：20，最大值：100。
     */
    Limit?: number;
}
/**
 * 视频内容识别模板详情
 */
export interface AIRecognitionTemplateItem {
    /**
     * 视频内容识别模板唯一标识。
     */
    Definition?: number;
    /**
     * 视频内容识别模板名称。
     */
    Name?: string;
    /**
     * 视频内容识别模板描述信息。
     */
    Comment?: string;
    /**
     * 模板类型，取值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 头尾识别控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeadTailConfigure?: HeadTailConfigureInfo;
    /**
     * 拆条识别控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentConfigure?: SegmentConfigureInfo;
    /**
     * 人脸识别控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceConfigure?: FaceConfigureInfo;
    /**
     * 文本全文识别控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcrFullTextConfigure?: OcrFullTextConfigureInfo;
    /**
     * 文本关键词识别控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcrWordsConfigure?: OcrWordsConfigureInfo;
    /**
     * 语音全文识别控制参数。
  <font color=red>注意：本参数已不再维护，推荐使用 AsrTranslateConfigure 参数发起语音翻译识别（当 DstLanguage 不填或填空字符串时，则不进行翻译，计费项和语音全文识别一致）。</font>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrFullTextConfigure?: AsrFullTextConfigureInfo;
    /**
     * 语音关键词识别控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrWordsConfigure?: AsrWordsConfigureInfo;
    /**
     * 语音翻译识别控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrTranslateConfigure?: AsrTranslateConfigureInfo;
    /**
     * 物体识别控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectConfigure?: ObjectConfigureInfo;
    /**
     * 截图时间间隔，单位：秒。
     */
    ScreenshotInterval?: number;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
}
/**
 * 音视频审核 Asr 文字涉及令人反感的信息的任务输入参数类型
 */
export interface AiReviewPornAsrTaskInput {
    /**
     * 鉴别涉及令人反感的信息的模板 ID。
     */
    Definition?: number;
}
/**
 * 人脸识别结果。
 */
export interface AiRecognitionTaskFaceResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 人脸识别任务输入信息。
     */
    Input?: AiRecognitionTaskFaceResultInput;
    /**
     * 人脸识别任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiRecognitionTaskFaceResultOutput;
    /**
     * 人脸识别任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 人脸识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 人脸识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * 视频片头片尾识别的输入。
 */
export interface AiRecognitionTaskHeadTailResultInput {
    /**
     * 视频片头片尾识别模板 ID。
     */
    Definition: number;
}
/**
 * CreateAdaptiveDynamicStreamingTemplate请求参数结构体
 */
export interface CreateAdaptiveDynamicStreamingTemplateRequest {
    /**
     * 自适应转码格式，取值范围：
  <li>HLS；</li>
  <li>MPEG-DASH。</li>
     */
    Format: string;
    /**
     * 自适应转码输出子流参数信息，最多输出10路子流。
  注意：各个子流的帧率必须保持一致；如果不一致，采用第一个子流的帧率作为输出帧率。
     */
    StreamInfos: Array<AdaptiveStreamTemplate>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * DRM 方案类型，取值范围：
  <li>SimpleAES</li>
  <li>Widevine</li>
  <li>FairPlay</li>
  默认值为空字符串，如果取值为空字符串，代表不对视频做 DRM 保护。
     */
    DrmType?: string;
    /**
     * DRM 的密钥提供商，取值范围：
  <li>SDMC：华曦达；</li>
  <li>VOD：云点播。</li>
  默认为 VOD 。
     */
    DrmKeyProvider?: string;
    /**
     * 是否禁止视频低码率转高码率，取值范围：
  <li>0：否，</li>
  <li>1：是。</li>
  默认为否。
     */
    DisableHigherVideoBitrate?: number;
    /**
     * 是否禁止视频分辨率转高分辨率，取值范围：
  <li>0：否，</li>
  <li>1：是。</li>
  默认为否。
     */
    DisableHigherVideoResolution?: number;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 切片类型，当 Format 为 HLS 时有效，可选值：
  <li>ts：ts 切片；</li>
  <li>fmp4：fmp4 切片。</li>
  默认值：ts。
     */
    SegmentType?: string;
}
/**
 * PushUrlCache返回参数结构体
 */
export interface PushUrlCacheResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 对视频做采样截图任务结果类型
 */
export interface MediaProcessTaskSampleSnapshotResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 对视频做采样截图任务输入。
     */
    Input?: SampleSnapshotTaskInput;
    /**
     * 对视频做采样截图任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: MediaSampleSnapshotItem;
    /**
     * 对视频做采样截图任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 采样截图任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 采样截图任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * DescribeDailyMediaPlayStat请求参数结构体
 */
export interface DescribeDailyMediaPlayStatRequest {
    /**
     * 媒体文件 ID 。
     */
    FileId: string;
    /**
     * 起始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。该参数仅日期部分有效。
     */
    StartDate: string;
    /**
     * 结束日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。该参数仅日期部分有效。
     */
    EndDate: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 画面鉴别涉及令人不安全的信息的任务控制参数。
 */
export interface TerrorismImgReviewTemplateInfoForUpdate {
    /**
     * 画面鉴别涉及令人不安全的信息的任务开关，可选值：
  <li>ON：开启画面鉴别涉及令人不安全的信息的任务；</li>
  <li>OFF：关闭画面鉴别涉及令人不安全的信息的任务。</li>
     */
    Switch?: string;
    /**
     * 画面鉴别涉及令人不安全的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
  <li>guns：武器枪支；</li>
  <li>crowd：人群聚集；</li>
  <li>bloody：血腥画面；</li>
  <li>police：警察部队；</li>
  <li>banners：暴恐旗帜；</li>
  <li>militant：武装分子；</li>
  <li>explosion：爆炸火灾；</li>
  <li>terrorists：暴恐人物；</li>
  <li>scenario：暴恐画面。</li>
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 人脸识别任务控制参数
 */
export interface FaceConfigureInfoForUpdate {
    /**
     * 人脸识别任务开关，可选值：
  <li>ON：开启智能人脸识别任务；</li>
  <li>OFF：关闭智能人脸识别任务。</li>
     */
    Switch?: string;
    /**
     * 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。取值范围：0-100。
     */
    Score?: number;
    /**
     * 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：
  <li>entertainment：娱乐明星；</li>
  <li>sport：体育明星；</li>
  <li>politician：相关人物。</li>
     */
    DefaultLibraryLabelSet?: Array<string>;
    /**
     * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
  标签个数最多 100 个，每个标签长度最多 16 个字符。
     */
    UserDefineLibraryLabelSet?: Array<string>;
    /**
     * 人物库选择，可选值：
  <li>Default：使用默认人物库；</li>
  <li>UserDefine：使用用户自定义人物库。</li>
  <li>All：同时使用默认人物库和用户自定义人物库。</li>
     */
    FaceLibrary?: string;
}
/**
 * ModifyTranscodeTemplate请求参数结构体
 */
export interface ModifyTranscodeTemplateRequest {
    /**
     * 转码模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a、wav。其中，mp3、flac、ogg、m4a、wav 为纯音频文件。
     */
    Container?: string;
    /**
     * 转码模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 是否去除视频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
     */
    RemoveAudio?: number;
    /**
     * 视频流配置参数。
     */
    VideoTemplate?: VideoTemplateInfoForUpdate;
    /**
     * 音频流配置参数。
     */
    AudioTemplate?: AudioTemplateInfoForUpdate;
    /**
     * 极速高清转码参数。
     */
    TEHDConfig?: TEHDConfigForUpdate;
    /**
     * 切片类型，当 Container 为 hls 时有效，可选值：
  <li>ts：ts 切片；</li>
  <li>fmp4：fmp4 切片。</li>
     */
    SegmentType?: string;
}
/**
 * 编辑视频任务的输入。
 */
export interface EditMediaTaskInput {
    /**
     * 输入视频的来源类型，可以取的值为 File，Stream 两种。
     */
    InputType: string;
    /**
     * 输入的视频文件信息，当 InputType 为 File 时，该字段有值。
     */
    FileInfoSet: Array<EditMediaFileInfo>;
    /**
     * 输入的流信息，当 InputType 为 Stream 时，该字段有值。
     */
    StreamInfoSet: Array<EditMediaStreamInfo>;
}
/**
 * DescribeImageSpriteTemplates请求参数结构体
 */
export interface DescribeImageSpriteTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 雪碧图模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
}
/**
 * DeleteImageProcessingTemplate请求参数结构体
 */
export interface DeleteImageProcessingTemplateRequest {
    /**
     * 图片处理模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DescribeDailyPlayStatFileList返回参数结构体
 */
export interface DescribeDailyPlayStatFileListResponse {
    /**
     * 播放统计文件列表。
     */
    PlayStatFileSet?: Array<PlayStatFileInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CLS日志主题信息。
 */
export interface CLSTopicInfo {
    /**
     * 日志主题 ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicId?: string;
    /**
     * 日志主题名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TopicName?: string;
    /**
     * 日志集 ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LogsetId?: string;
}
/**
 * 视频画面低光、过曝检测的控制参数。
 */
export interface AbnormalLightingConfigureInfo {
    /**
     * 视频画面低光、过曝检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
}
/**
 * 文字水印模板
 */
export interface TextWatermarkTemplateInputForUpdate {
    /**
     * 字体类型，目前可以支持两种：
  <li>simkai.ttf：可以支持中文和英文；</li>
  <li>arial.ttf：仅支持英文。</li>
     */
    FontType?: string;
    /**
     * 字体大小，格式：Npx，N 为数值。
     */
    FontSize?: string;
    /**
     * 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。
     */
    FontColor?: string;
    /**
     * 文字透明度，取值范围：(0, 1]
  <li>0：完全透明</li>
  <li>1：完全不透明</li>
     */
    FontAlpha?: number;
}
/**
 * DeleteSuperPlayerConfig请求参数结构体
 */
export interface DeleteSuperPlayerConfigRequest {
    /**
     * 播放器配置名称。
     */
    Name: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 音视频审核 Ocr 文字涉及令人不安全的信息的任务输入参数类型
 */
export interface AiReviewTerrorismOcrTaskInput {
    /**
     * 鉴别涉及令人不安全的信息的模板 ID。
     */
    Definition?: number;
}
/**
 * 文本关键词识别输入。
 */
export interface AiRecognitionTaskOcrWordsResultInput {
    /**
     * 文本关键词识别模板 ID。
     */
    Definition: number;
}
/**
 * ModifyMediaStorageClass返回参数结构体
 */
export interface ModifyMediaStorageClassResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音视频审核涉及令人反感的信息的任务输入参数类型
 */
export interface AiReviewPornTaskInput {
    /**
     * 鉴别涉及令人反感的信息的模板 ID。
     */
    Definition: number;
}
/**
 * 视频画面抖动重影检测的控制参数。
 */
export interface JitterConfigureInfoForUpdate {
    /**
     * 视频画面抖动重影检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
}
/**
 * 用户自定义语音审核任务控制参数
 */
export interface UserDefineAsrTextReviewTemplateInfo {
    /**
     * 用户自定语音审核任务开关，可选值：
  <li>ON：开启自定义语音审核任务；</li>
  <li>OFF：关闭自定义语音审核任务。</li>
     */
    Switch: string;
    /**
     * 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * CreateProcedureTemplate请求参数结构体
 */
export interface CreateProcedureTemplateRequest {
    /**
     * 任务流名字（支持中文，不超过20个字）。
     */
    Name: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 视频处理类型任务参数。
     */
    MediaProcessTask?: MediaProcessTaskInput;
    /**
     * AI 内容审核类型任务参数 \*。
  <font color=red>\*：该参数用于发起旧版审核，不建议使用。推荐使用 ReviewAudioVideoTask 参数发起审核。</font>
     */
    AiContentReviewTask?: AiContentReviewTaskInput;
    /**
     * AI 内容分析类型任务参数。
     */
    AiAnalysisTask?: AiAnalysisTaskInput;
    /**
     * AI 内容识别类型任务参数。
     */
    AiRecognitionTask?: AiRecognitionTaskInput;
    /**
     * 音视频审核类型任务参数。
     */
    ReviewAudioVideoTask?: ProcedureReviewAudioVideoTaskInput;
}
/**
 * 转动图任务结果类型
 */
export interface MediaProcessTaskAnimatedGraphicResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 转动图任务的输入。
     */
    Input?: AnimatedGraphicTaskInput;
    /**
     * 转动图任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: MediaAnimatedGraphicsItem;
    /**
     * 转动图任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 转动图任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 转动图任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * DescribeMediaProcessUsageData请求参数结构体
 */
export interface DescribeMediaProcessUsageDataRequest {
    /**
     * 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    StartTime: string;
    /**
     * 结束日期，需大于等于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 查询视频处理任务类型，目前支持的任务类型包括：
  <li> Transcoding: 普通转码</li>
  <li> Transcoding-TESHD: 极速高清转码</li>
  <li> Editing: 视频编辑</li>
  <li> Editing-TESHD: 极速高清视频编辑</li>
  <li> AdaptiveBitrateStreaming: 自适应码流</li>
  <li> ContentAudit: 内容审核</li>
  <li> ContentRecognition: 内容识别</li>
  <li> RemoveWatermark: 去除水印</li>
  <li> ExtractTraceWatermark: 提取水印</li>
  <li> AddTraceWatermark: 添加水印</li>
  <li> RebuildMedia: 音画质重生</li>
  <li> QualityInspect: 音画质检测</li>
  <li> VideoHighlight: 视频智能集锦</li>
  <li> VideoTag: 视频智能标签</li>
  <li> VideoClassification:  视频智能分类</li>
  <li> VideoCover: 视频智能封面</li>
  <li> VideoSegment: 视频智能拆条</li>
  <li> VideoProduce: 视频制作</li>
  <li> MediaCast: 媒体转推</li>
  <li>Transcode: 转码，包含普通转码、极速高清和视频编辑（不推荐使用）</li>
  <li>VoiceTranslation: 语音翻译</li>
  <li>JITTranscoding: 即时转码</li>
     */
    Type?: string;
}
/**
 * CreatePersonSample请求参数结构体
 */
export interface CreatePersonSampleRequest {
    /**
     * 素材名称，长度限制：20 个字符。
     */
    Name: string;
    /**
     * 素材应用场景，可选值：
  1. Recognition：用于内容识别，等价于 Recognition.Face。
  2. Review：用于内容不适宜，等价于 Review.Face。
  3. All：包含以上全部，等价于 1+2。
     */
    Usages: Array<string>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 素材描述，长度限制：1024 个字符。
     */
    Description?: string;
    /**
     * 素材图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 jpeg、png 图片格式。数组长度限制：5 张图片。
  注意：图片必须是单人像五官较清晰的照片，像素不低于 200*200。
     */
    FaceContents?: Array<string>;
    /**
     * 素材标签
  <li>数组长度限制：20 个标签；</li>
  <li>单个标签长度限制：128 个字符。</li>
     */
    Tags?: Array<string>;
}
/**
 * 智能去除水印任务信息，仅当 TaskType 为 RemoveWatermark，该字段有值。
 */
export interface RemoveWatermarkTask {
    /**
     * 任务 ID 。
     */
    TaskId: string;
    /**
     * 任务流状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt: string;
    /**
     * 错误码，0 表示成功，其他值表示失败：
  <li>40000：输入参数不合法，请检查输入参数；</li>
  <li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
  <li>70000：内部服务错误，建议重试。</li>
     */
    ErrCode: number;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 智能去除水印任务的输入。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input: RemoveWaterMarkTaskInput;
    /**
     * 智能去除水印任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output: RemoveWaterMarkTaskOutput;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext: string;
}
/**
 * ReviewAudioVideo请求参数结构体
 */
export interface ReviewAudioVideoRequest {
    /**
     * 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。
     */
    FileId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 审核的内容，可选值有：
  <li>Media：原始音视频；</li>
  <li>Cover：封面。</li>
  不填或填空数组时，默认为审核 Media。
     */
    ReviewContents?: Array<string>;
    /**
     * 审核模板 ID，默认值为 10。取值范围：
  <li>10：[预置模板](https://cloud.tencent.com/document/product/266/33476#.E9.A2.84.E7.BD.AE.E9.9F.B3.E8.A7.86.E9.A2.91.E5.AE.A1.E6.A0.B8.E6.A8.A1.E6.9D.BF.5B.5D(id.3Averify))，支持检测的违规标签包括色情（Porn）、暴力（Terror）、不适宜的信息（Polity）和娇喘（Moan）。</li>
     */
    Definition?: number;
    /**
     * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 来源上下文，用于透传用户请求信息，音视频审核完成回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * 存储地域信息
 */
export interface StorageRegionInfo {
    /**
     * 存储地域。
     */
    Region?: string;
    /**
     * 存储地域描述信息。
     */
    Description?: string;
    /**
     * 状态，是否开通，取值有：
  <li>opened：已经开通。</li>
  <li>unopened：未开通。</li>
     */
    Status?: string;
    /**
     * 是否默认的存储地域，true：是；false：否。
     */
    IsDefault?: boolean;
    /**
     * 存储区域，取值有：
  <li>Chinese Mainland：中国境内（不包含港澳台）。</li>
  <li>Outside Chinese Mainland：中国境外。</li>
     */
    Area?: string;
}
/**
 * 转场信息
 */
export interface MediaTransitionItem {
    /**
     * 转场持续时间，单位为秒。进行转场处理的两个媒体片段，第二个片段在轨道上的起始时间会自动进行调整，设置为前面一个片段的结束时间减去转场的持续时间。
     */
    Duration: number;
    /**
     * 转场操作列表。图像转场操作和音频转场操作各自最多支持一个。
     * @deprecated
     */
    Transitions?: Array<TransitionOpertion>;
    /**
     * 转场操作列表。图像转场操作和音频转场操作各自最多支持一个。
     */
    MediaTransitions?: Array<TransitionOperation>;
}
/**
 * 智能封面信息
 */
export interface MediaAiAnalysisCoverItem {
    /**
     * 智能封面地址。
     */
    CoverUrl: string;
    /**
     * 智能封面的可信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * 自适应码流任务多语言字幕的输入参数。
 */
export interface ComplexAdaptiveDynamicStreamingTaskSubtitleInput {
    /**
     * 字幕 ID。该字幕必须归属于自适应码流任务的输入主媒体。
     */
    Id: string;
    /**
     * 是否设置为自适应码流的默认字幕。取值：
  <li>YES：设置为默认字幕；</li>
  <li>NO：不设置为默认字幕（默认值）。</li>
     */
    Default?: string;
}
/**
 * 智能标签任务控制参数
 */
export interface TagConfigureInfo {
    /**
     * 智能标签任务开关，可选值：
  <li>ON：开启智能标签任务；</li>
  <li>OFF：关闭智能标签任务。</li>
     */
    Switch: string;
}
/**
 * 细节增强控制
 */
export interface SharpEnhanceInfo {
    /**
     * 细节增强控制开关，可选值：
  <li>ON：开启细节增强；</li>
  <li>OFF：关闭细节增强。</li>
     */
    Switch: string;
    /**
     * 细节增强强度，仅当细节增强控制开关为 ON 时有效，取值范围：0.0~1.0。
  默认：0.0。
     */
    Intensity?: number;
}
/**
 * ModifySuperPlayerConfig返回参数结构体
 */
export interface ModifySuperPlayerConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWordSamples返回参数结构体
 */
export interface DescribeWordSamplesResponse {
    /**
     * 符合条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 关键词信息。
     */
    WordSet?: Array<AiSampleWord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RefreshUrlCache返回参数结构体
 */
export interface RefreshUrlCacheResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频拼接任务信息，该结构仅用于对 2017 版[视频拼接](https://cloud.tencent.com/document/product/266/7821)接口发起的任务。
 */
export interface ConcatTask2017 {
    /**
     * 视频拼接任务 ID。
     */
    TaskId: string;
    /**
     * 视频拼接源文件信息。
     */
    FileInfoSet: Array<ConcatFileInfo2017>;
}
/**
 * DeleteAIRecognitionTemplate请求参数结构体
 */
export interface DeleteAIRecognitionTemplateRequest {
    /**
     * 音视频内容识别模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 文件上传任务信息
 */
export interface FileUploadTask {
    /**
     * 文件唯一 ID。
     */
    FileId?: string;
    /**
     * 上传完成后生成的媒体文件基础信息。
     */
    MediaBasicInfo?: MediaBasicInfo;
    /**
     * 任务类型为 Procedure 的任务 ID。若视频[上传时指定要执行的任务(procedure)](https://cloud.tencent.com/document/product/266/33475#.E4.BB.BB.E5.8A.A1.E5.8F.91.E8.B5.B7)，当该任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。
     */
    ProcedureTaskId?: string;
    /**
     * 任务类型为 ReviewAudioVideo 的任务 ID。若视频[上传时指定要执行的任务(procedure)](https://cloud.tencent.com/document/product/266/33475#.E4.BB.BB.E5.8A.A1.E5.8F.91.E8.B5.B7)，当该任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。
     */
    ReviewAudioVideoTaskId?: string;
    /**
     * 元信息。包括大小、时长、视频流信息、音频流信息等。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaData?: MediaMetaData;
}
/**
 * DescribeCDNStatDetails返回参数结构体
 */
export interface DescribeCDNStatDetailsResponse {
    /**
     * 每条数据的时间粒度，单位：分钟。
     */
    DataInterval?: number;
    /**
     * CDN 用量数据。
     */
    Data?: Array<StatDataItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * AttachMediaSubtitles请求参数结构体
 */
export interface AttachMediaSubtitlesRequest {
    /**
     * 媒体文件唯一标识。
     */
    FileId: string;
    /**
     * 操作。取值如下：
  <li>Attach：关联字幕。</li>
  <li>Detach：解除关联字幕。</li>
     */
    Operation: string;
    /**
     * [转自适应码流模板号](https://cloud.tencent.com/document/product/266/34071#zsy)。
     */
    AdaptiveDynamicStreamingDefinition: number;
    /**
     * 字幕的唯一标识。
     */
    SubtitleIds: Array<string>;
    /**
     * 默认字幕的唯一标识。不填则不设置默认字幕。
     */
    DefaultSubtitleId?: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 智能封面结果类型
 */
export interface AiAnalysisTaskCoverResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 智能封面任务输入。
     */
    Input?: AiAnalysisTaskCoverInput;
    /**
     * 智能封面任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiAnalysisTaskCoverOutput;
    /**
     * 智能封面任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 智能封面任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 智能封面任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * DescribeEventConfig请求参数结构体
 */
export interface DescribeEventConfigRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 音视频审核 Ocr 文字的嫌疑片段
 */
export interface MediaContentReviewOcrTextSegmentItem {
    /**
     * 嫌疑片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 嫌疑片段结束的偏移时间，单位：秒。
     */
    EndTimeOffset?: number;
    /**
     * 嫌疑片段置信度。
     */
    Confidence?: number;
    /**
     * 嫌疑片段音视频审核的结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * 嫌疑关键词列表。
     */
    KeywordSet?: Array<string>;
    /**
     * 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
     */
    AreaCoordSet?: Array<number | bigint>;
    /**
     * 嫌疑图片 URL （图片不会永久存储，到达
  PicUrlExpireTime 时间点后图片将被删除）。
     */
    Url?: string;
    /**
     * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    PicUrlExpireTime?: string;
}
/**
 * 智能分类结果信息
 */
export interface AiAnalysisTaskClassificationOutput {
    /**
     * 视频智能分类列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ClassificationSetFileUrl 对应的文件中获取。
     */
    ClassificationSet: Array<MediaAiAnalysisClassificationItem>;
    /**
     * 视频智能分类列表文件 URL。文件的内容为 JSON，数据结构与 ClassificationSet 字段一致。 （文件不会永久存储，到达 ClassificationSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    ClassificationSetFileUrl: string;
    /**
     * 视频智能分类列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ClassificationSetFileUrlExpireTime: string;
}
/**
 * 文件删除任务
 */
export interface FileDeleteTask {
    /**
     * 删除文件 ID 列表。
     */
    FileIdSet?: Array<string>;
    /**
     * 删除文件结果信息列表。
     */
    FileDeleteResultInfo?: Array<FileDeleteResultItem>;
}
/**
 * 标签键值。参考[标签](https://cloud.tencent.com/document/product/651)。
 */
export interface ResourceTag {
    /**
     * 标签键。
     */
    TagKey: string;
    /**
     * 标签值。
     */
    TagValue: string;
}
/**
 * 文本全文识别输出。
 */
export interface AiRecognitionTaskOcrFullTextResultOutput {
    /**
     * 文本全文识别结果集。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet: Array<AiRecognitionTaskOcrFullTextSegmentItem>;
    /**
     * 文本全文识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl: string;
    /**
     * 文本全文识别结果集文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime: string;
}
/**
 * 智能精彩片段结果类型
 */
export interface AiAnalysisTaskHighlightResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 智能精彩片段任务输入。
     */
    Input?: AiAnalysisTaskHighlightInput;
    /**
     * 智能精彩片段任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiAnalysisTaskHighlightOutput;
    /**
     * 智能精彩片段任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 智能精彩片段任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 智能精彩片段任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * SetVodDomainCertificate请求参数结构体
 */
export interface SetVodDomainCertificateRequest {
    /**
     * 域名。
     */
    Domain: string;
    /**
     * 本次接口调用的操作类型，可选值：
  <li>Set：设置域名的 HTTPS 所需证书；</li>
  <li>Clear: 清空域名 HTTPS 配置，清空后该域名无法支持 HTTPS 访问。</li>
     */
    Operation: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * [腾讯云SSL](/document/product/400/7572) 上传的证书 ID。清空域名 HTTPS 配置时无需填写该字段。
     */
    CertID?: string;
}
/**
 * CreateRebuildMediaTemplate返回参数结构体
 */
export interface CreateRebuildMediaTemplateResponse {
    /**
     * 视频重生模板 ID。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文本关键词识别输出。
 */
export interface AiRecognitionTaskOcrWordsResultOutput {
    /**
     * 文本关键词识别结果集。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ResultSetFileUrl 对应的文件中获取。
     */
    ResultSet: Array<AiRecognitionTaskOcrWordsResultItem>;
    /**
     * 文本关键词识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达ResultSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    ResultSetFileUrl: string;
    /**
     * 文本关键词识别结果集文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ResultSetFileUrlExpireTime: string;
}
/**
 * AI 样本管理，人脸信息。
 */
export interface AiSampleFaceInfo {
    /**
     * 人脸图片 ID。
     */
    FaceId: string;
    /**
     * 人脸图片地址。
     */
    Url: string;
}
/**
 * 雪碧图信息
 */
export interface MediaImageSpriteItem {
    /**
     * 雪碧图规格，参见[雪碧图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
     */
    Definition?: number;
    /**
     * 雪碧图小图的高度。
     */
    Height?: number;
    /**
     * 雪碧图小图的宽度。
     */
    Width?: number;
    /**
     * 每一张雪碧图大图里小图的数量。
     */
    TotalCount?: number;
    /**
     * 每一张雪碧图大图的地址。
     */
    ImageUrlSet?: Array<string>;
    /**
     * 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
     */
    WebVttUrl?: string;
}
/**
 * 音画质检测任务信息。
 */
export interface QualityInspectTask {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 任务状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音画质检测输入音视频的元信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaData?: MediaMetaData;
    /**
     * 音画质检测任务输入。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input?: QualityInspectTaskInput;
    /**
     * 音画质检测任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: QualityInspectTaskOutput;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，音画质检测完成回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
}
/**
 * DescribeEnhanceMediaTemplates返回参数结构体
 */
export interface DescribeEnhanceMediaTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 音画质重生模板详情列表。
     */
    RebuildMediaTemplateSet?: Array<RebuildMediaTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图片模糊处理。
 */
export interface ImageBlur {
    /**
     * 图片模糊的操作类型。可选模式有：
  <li>Gaussian : 高斯模糊。</li>
     */
    Type: string;
    /**
     * 模糊半径，取值范围为1 - 50。当 Type 取值为 Gaussian 时此字段有效。
     */
    Radius?: number;
    /**
     * 正态分布的标准差，必须大于0。当 Type 取值为 Gaussian 时此字段有效。
     */
    Sigma?: number;
}
/**
 * ModifyVodDomainAccelerateConfig请求参数结构体
 */
export interface ModifyVodDomainAccelerateConfigRequest {
    /**
     * 需要设置加速配置的域名。
     */
    Domain: string;
    /**
     * 区域，可选值：
  <li>Chinese Mainland：中国境内（不包含港澳台）。</li>
  <li>Outside Chinese Mainland: 中国境外。</li>
  <li>Global: 全球范围。</li>
     */
    Area: string;
    /**
     * 开启或者关闭所选区域的域名加速，可选值：
  <li>Enabled: 开启。</li>
  <li>Disabled：关闭。</li>
  开启中国境内加速的域名，需要先[备案域名](/document/product/243/18905)。
     */
    Status: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 鉴别涉及令人不适宜的信息的控制参数。
 */
export interface PoliticalConfigureInfoForUpdate {
    /**
     * 画面鉴别涉及令人不适宜的信息的控制参数。
     */
    ImgReviewInfo?: PoliticalImgReviewTemplateInfoForUpdate;
    /**
     * 语音鉴别涉及令人不适宜的信息的控制参数。
     */
    AsrReviewInfo?: PoliticalAsrReviewTemplateInfoForUpdate;
    /**
     * 文本鉴别涉及令人不适宜的信息的控制参数。
     */
    OcrReviewInfo?: PoliticalOcrReviewTemplateInfoForUpdate;
}
/**
 * 对视频转自适应码流任务结果类型
 */
export interface MediaProcessTaskAdaptiveDynamicStreamingResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 转自适应码流任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 对视频转自适应码流任务的输入。
     */
    Input?: AdaptiveDynamicStreamingTaskInput;
    /**
     * 对视频转自适应码流任务的输出。
     */
    Output?: AdaptiveDynamicStreamingInfoItem;
    /**
     * 转自适应码流任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 转自适应码流任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * 文本关键词识别控制参数。
 */
export interface OcrWordsConfigureInfoForUpdate {
    /**
     * 文本关键词识别任务开关，可选值：
  <li>ON：开启文本关键词识别任务；</li>
  <li>OFF：关闭文本关键词识别任务。</li>
     */
    Switch?: string;
    /**
     * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
}
/**
 * 文件审核信息。
 */
export interface FileReviewInfo {
    /**
     * 媒体审核信息\*。
  
  \* 只展示通过 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 或 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 发起的审核结果信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MediaReviewInfo?: ReviewInfo;
    /**
     * 媒体封面审核信息\*。
  
  \* 只展示通过 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 或 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 发起的审核结果信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoverReviewInfo?: ReviewInfo;
}
/**
 * 水印模板详情
 */
export interface WatermarkTemplate {
    /**
     * 水印模板唯一标识。
     */
    Definition: number;
    /**
     * 水印类型，取值：
  <li>image：图片水印；</li>
  <li>text：文字水印。</li>
     */
    Type: string;
    /**
     * 水印模板名称。
     */
    Name: string;
    /**
     * 模板描述信息。
     */
    Comment: string;
    /**
     * 水印图片原点距离视频图像原点的水平位置。
  <li>当字符串以 % 结尾，表示水印 Left 为视频宽度指定百分比的位置，如 10% 表示 Left 为视频宽度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 Left 为视频宽度指定像素的位置，如 100px 表示 Left 为 100 像素。</li>
     */
    XPos: string;
    /**
     * 水印图片原点距离视频图像原点的垂直位置。
  <li>当字符串以 % 结尾，表示水印 Top 为视频高度指定百分比的位置，如 10% 表示 Top 为视频高度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 Top 为视频高度指定像素的位置，如 100px 表示 Top 为 100 像素。</li>
     */
    YPos: string;
    /**
     * 图片水印模板，仅当 Type 为 image，该字段有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageTemplate: ImageWatermarkTemplate;
    /**
     * 文字水印模板，仅当 Type 为 text，该字段有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TextTemplate: TextWatermarkTemplateInput;
    /**
     * SVG 水印模板，当 Type 为 svg，该字段有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SvgTemplate: SvgWatermarkInput;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime: string;
    /**
     * 原点位置，可选值：
  <li>topLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
  <li>topRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
  <li>bottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
  <li>bottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下。；</li>
     */
    CoordinateOrigin: string;
}
/**
 * 对视频截图做封面任务输出类型
 */
export interface CoverBySnapshotTaskOutput {
    /**
     * 封面 URL。
     */
    CoverUrl: string;
}
/**
 * ModifyQualityInspectTemplate返回参数结构体
 */
export interface ModifyQualityInspectTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeProcedureTemplates请求参数结构体
 */
export interface DescribeProcedureTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 任务流模板名字过滤条件，数组长度限制：100。
     */
    Names?: Array<string>;
    /**
     * 任务流模板类型过滤条件，可选值：
  <li>Preset：系统预置任务流模板；</li>
  <li>Custom：用户自定义任务流模板。</li>
     */
    Type?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * 即时转码视频模板更新配置。
 */
export interface VideoConfigureInfoForUpdate {
    /**
     * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 1920]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  
  默认值：0。
     */
    Width?: number;
    /**
     * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 1920]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  
  默认值：0。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 视频流的码率，取值范围：0 和 [128, 10000]，单位：kbps。
  当取值为 0，表示视频码率和原始视频保持一致。
     */
    Bitrate?: number;
}
/**
 * ModifyAdaptiveDynamicStreamingTemplate请求参数结构体
 */
export interface ModifyAdaptiveDynamicStreamingTemplateRequest {
    /**
     * 自适应转码模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 自适应转码格式，取值范围：
  <li>HLS；</li>
  <li>MPEG-DASH。</li>
     */
    Format?: string;
    /**
     * 是否禁止视频低码率转高码率，取值范围：
  <li>0：否，</li>
  <li>1：是。</li>
     */
    DisableHigherVideoBitrate?: number;
    /**
     * 是否禁止视频分辨率转高分辨率，取值范围：
  <li>0：否，</li>
  <li>1：是。</li>
     */
    DisableHigherVideoResolution?: number;
    /**
     * 自适应转码输入流参数信息，最多输入10路流。
  注意：各个流的帧率必须保持一致；如果不一致，采用第一个流的帧率作为输出帧率。
     */
    StreamInfos?: Array<AdaptiveStreamTemplate>;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 切片类型，当 Format 为 HLS 时有效，可选值：
  <li>ts：ts 切片；</li>
  <li>fmp4：fmp4 切片。</li>
     */
    SegmentType?: string;
}
/**
 * ForbidMediaDistribution请求参数结构体
 */
export interface ForbidMediaDistributionRequest {
    /**
     * 媒体文件列表，每次最多可提交 20 条。
     */
    FileIds: Array<string>;
    /**
     * forbid：禁播，recover：解禁。
     */
    Operation: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DescribeAIRecognitionTemplates返回参数结构体
 */
export interface DescribeAIRecognitionTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 音视频内容识别模板详情列表。
     */
    AIRecognitionTemplateSet?: Array<AIRecognitionTemplateItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EditMedia返回参数结构体
 */
export interface EditMediaResponse {
    /**
     * 编辑视频的任务 ID，可以通过该 ID 查询编辑任务（任务类型为 EditMedia）的状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文本鉴别涉及令人不适宜的信息的任务控制参数。
 */
export interface PoliticalOcrReviewTemplateInfoForUpdate {
    /**
     * 文本鉴别涉及令人不适宜的信息的任务开关，可选值：
  <li>ON：开启文本鉴别涉及令人不适宜的信息的任务；</li>
  <li>OFF：关闭文本鉴别涉及令人不适宜的信息的任务。</li>
     */
    Switch?: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 视频处理任务的输出媒体文件信息
 */
export interface TaskOutputMediaInfo {
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * 转拉完成后生成的媒体文件基础信息。
     */
    MediaBasicInfo: MediaBasicInfo;
}
/**
 * ProcessMediaByUrl请求参数结构体
 */
export interface ProcessMediaByUrlRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * API 已经<font color='red'>不再维护</font>。推荐使用的替代 API 请参考接口描述。
     */
    InputInfo?: MediaInputInfo;
    /**
     * 输出文件 COS 路径信息。
     */
    OutputInfo?: MediaOutputInfo;
    /**
     * 视频内容审核类型任务参数。
     */
    AiContentReviewTask?: AiContentReviewTaskInput;
    /**
     * 视频内容分析类型任务参数。
     */
    AiAnalysisTask?: AiAnalysisTaskInput;
    /**
     * 视频内容识别类型任务参数。
     */
    AiRecognitionTask?: AiRecognitionTaskInput;
    /**
     * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。
     */
    TasksNotifyMode?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
}
/**
 * DescribeDailyMostPlayedStat返回参数结构体
 */
export interface DescribeDailyMostPlayedStatResponse {
    /**
     * 媒体文件播放统计信息。
     */
    DailyPlayStatInfoSet?: Array<DailyPlayStatInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAIRecognitionTemplate返回参数结构体
 */
export interface ModifyAIRecognitionTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频拆条任务配置信息。
 */
export interface SplitMediaTaskConfig {
    /**
     * 视频拆条起始的偏移时间，单位：秒。
  <li>不填或填0，表示转码后的视频从原始视频的起始位置开始；</li>
  <li>当数值大于0时（假设为 n），表示转码后的视频从原始视频的第 n 秒位置开始；</li>
  <li>当数值小于0时（假设为 -n），表示转码后的视频从原始视频结束 n 秒前的位置开始。</li>
     */
    StartTimeOffset?: number;
    /**
     * 视频拆条结束的偏移时间，单位：秒。
  <li>不填或填0，表示转码后的视频持续到原始视频的末尾终止；</li>
  <li>当数值大于0时（假设为 n），表示转码后的视频持续到原始视频第 n 秒时终止；</li>
  <li>当数值小于0时（假设为 -n），表示转码后的视频持续到原始视频结束 n 秒前终止。</li>
     */
    EndTimeOffset?: number;
    /**
     * [任务流模板](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF)名字，如果要对生成的新视频执行任务流时填写。
     */
    ProcedureName?: string;
    /**
     * 视频拆条输出信息。
     */
    OutputConfig?: SplitMediaOutputConfig;
}
/**
 * 播放统计文件信息
 */
export interface PlayStatFileInfo {
    /**
     * 播放统计数据所属日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    Date: string;
    /**
     * 播放统计文件的 URL 地址。播放统计文件内容为：
  <li> date：播放日期。</li>
  <li> file_id：视频文件 ID。</li>
  <li> ip_count：去重后的客户端 IP 数。</li>
  <li> flux：播放流量，单位：字节。</li>
  <li> play_times：总的播放次数。</li>
  <li> pc_play_times：PC 端播放次数。</li>
  <li> mobile_play_times：移动端播放次数。</li>
  <li> iphone_play_times：iPhone 端播放次数。</li>
  <li> android_play_times：Android 端播放次数。</li>
  <li> host_name	域名。</li>
     */
    Url: string;
}
/**
 * ModifyMediaInfo请求参数结构体
 */
export interface ModifyMediaInfoRequest {
    /**
     * 媒体文件唯一标识。
     */
    FileId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 媒体文件名称，最长 64 个字符。
     */
    Name?: string;
    /**
     * 媒体文件描述，最长 128 个字符。
     */
    Description?: string;
    /**
     * 媒体文件分类 ID。
     */
    ClassId?: number;
    /**
     * 媒体文件过期时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。
     */
    ExpireTime?: string;
    /**
     * 视频封面图片文件（如 jpeg, png 等）进行 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 gif、jpeg、png 三种图片格式。
     */
    CoverData?: string;
    /**
     * 新增的一组视频打点信息，如果某个偏移时间已存在打点，则会进行覆盖操作，单个媒体文件最多 100 个打点信息。同一个请求里，AddKeyFrameDescs 的时间偏移参数必须与 DeleteKeyFrameDescs 都不同。
     */
    AddKeyFrameDescs?: Array<MediaKeyFrameDescItem>;
    /**
     * 要删除的一组视频打点信息的时间偏移，单位：秒。同一个请求里，AddKeyFrameDescs 的时间偏移参数必须与 DeleteKeyFrameDescs 都不同。
     */
    DeleteKeyFrameDescs?: Array<number>;
    /**
     * 取值 1 表示清空视频打点信息，其他值无意义。
  同一个请求里，ClearKeyFrameDescs 与 AddKeyFrameDescs 不能同时出现。
     */
    ClearKeyFrameDescs?: number;
    /**
     * 新增的一组标签，单个媒体文件最多 16 个标签，单个标签最多 32 个字符。同一个请求里，AddTags 参数必须与 DeleteTags 都不同。
     */
    AddTags?: Array<string>;
    /**
     * 要删除的一组标签。同一个请求里，AddTags 参数必须与 DeleteTags 都不同。
     */
    DeleteTags?: Array<string>;
    /**
     * 取值 1 表示清空媒体文件所有标签，其他值无意义。
  同一个请求里，ClearTags 与 AddTags 不能同时出现。
     */
    ClearTags?: number;
    /**
     * 新增一组字幕。单个媒体文件最多 16 个字幕。同一个请求中，AddSubtitles 中指定的字幕 Id 必须与 DeleteSubtitleIds 都不相同。
     */
    AddSubtitles?: Array<MediaSubtitleInput>;
    /**
     * 待删除字幕的唯一标识。同一个请求中，AddSubtitles 中指定的字幕 Id 必须与 DeleteSubtitleIds 都不相同。
     */
    DeleteSubtitleIds?: Array<string>;
    /**
     * 取值 1 表示清空媒体文件所有的字幕信息，其他值无意义。
  同一个请求里，ClearSubtitles 与 AddSubtitles不能同时出现。
     */
    ClearSubtitles?: number;
}
/**
 * 溯源水印参数
 */
export interface TraceWatermarkInput {
    /**
     * 溯源水印任务开关，此字段必填，可选值：
  <li>ON：开启溯源水印；</li>
  <li>OFF：关闭溯源水印。</li>
     */
    Switch?: string;
    /**
     * 该字段已废弃，请勿使用。
     */
    Definition?: number;
}
/**
 * 语音鉴别涉及令人反感的信息的任务控制参数。
 */
export interface PornAsrReviewTemplateInfoForUpdate {
    /**
     * 语音鉴别涉及令人反感的信息的任务开关，可选值：
  <li>ON：开启语音鉴别涉及令人反感的信息的任务；</li>
  <li>OFF：关闭语音鉴别涉及令人反感的信息的任务。</li>
     */
    Switch?: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 音视频审核片段。
 */
export interface ReviewAudioVideoSegmentItem {
    /**
     * 嫌疑片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 嫌疑片段结束的偏移时间，单位：秒。
     */
    EndTimeOffset?: number;
    /**
     * 嫌疑片段涉及令人反感的信息的分数。
     */
    Confidence?: number;
    /**
     * 嫌疑片段鉴别涉及违规信息的结果建议，取值范围：
  <li>review：疑似违规，建议复审；</li>
  <li>block：确认违规，建议封禁。</li>
     */
    Suggestion?: string;
    /**
     * 嫌疑片段最可能的违规的标签，取值范围：
  <li>Porn：色情；</li>
  <li>Terror：暴力；</li>
  <li>Polity：不适宜的信息；</li>
  <li>Ad：广告；</li>
  <li>Illegal：违法；</li>
  <li>Abuse：谩骂；</li>
  <li>Moan：娇喘。</li>
     */
    Label?: string;
    /**
     * 违规子标签。
     */
    SubLabel?: string;
    /**
     * 嫌疑片段违禁的形式，取值范围：
  <li>Image：画面上的人物或图标；</li>
  <li>OCR：画面上的文字；</li>
  <li>ASR：语音中的文字；</li>
  <li>Voice：声音。</li>
     */
    Form?: string;
    /**
     * 当 Form 为 Image 或 OCR 时有效，表示嫌疑人物、图标或文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
     */
    AreaCoordSet?: Array<number | bigint>;
    /**
     * 当 Form 为 OCR 或 ASR 时有效，表示识别出来的 OCR 或 ASR 文本内容。
     */
    Text?: string;
    /**
     * 当 Form 为 OCR 或 ASR 时有效，表示嫌疑片段命中的违规关键词列表。
     */
    KeywordSet?: Array<string>;
    /**
     * 嫌疑图片 URL （图片不会永久存储，到达
   PicUrlExpireTime 时间点后图片将被删除）。
     */
    Url?: string;
    /**
     * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    PicUrlExpireTime?: string;
}
/**
 * 点播文件视频转动图结果信息
 */
export interface MediaAnimatedGraphicsInfo {
    /**
     * 视频转动图结果信息
     */
    AnimatedGraphicsSet: Array<MediaAnimatedGraphicsItem>;
}
/**
 * DescribeSnapshotByTimeOffsetTemplates请求参数结构体
 */
export interface DescribeSnapshotByTimeOffsetTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 指定时间点截图模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
}
/**
 * ModifyHeadTailTemplate返回参数结构体
 */
export interface ModifyHeadTailTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 预付费商品实例
 */
export interface ProductInstance {
    /**
     * 预付费商品实例类型，取值有：
  <li>StarterPackage：点播新手包。</li>
  <li>MiniProgramPlugin：点播小程序插件。</li>
  <li>ResourcePackage：点播资源包。</li>
     */
    ProductType?: string;
    /**
     * 资源包实例起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    StartTime?: string;
    /**
     * 资源包实例过期日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    ExpireTime?: string;
    /**
     * 资源包实例ID。对应每个资源包，系统会分配相应的资源。续费或者升级资源包时，需要带上这个资源ID。
     */
    ProductInstanceId?: string;
    /**
     * 系统最近一次扣除资源包的日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    LastConsumeDate?: string;
    /**
     * 资源包绑定 License 状态，取值有：
  <li>0：未绑定。</li>
  <li>1：已绑定。</li>
     */
    BindStatus?: number;
    /**
     * 预付费资源包实例中包含的资源包列表。
     * @deprecated
     */
    ProductInstanceResourceSet?: Array<ProductInstanceRecource>;
    /**
     * 预付费资源包实例中包含的资源包列表。
     */
    ResourceSet?: Array<ProductInstanceResource>;
    /**
     * 资源包实例的状态，取值有：
  <li>Effective：生效，可用于计费抵扣。</li>
  <li>Isolated：隔离，不可用于计费抵扣。</li>
     */
    ProductInstanceStatus?: string;
    /**
     * 资源包实例的可退还状态，取值有：
  <li>FullRefund：可全额退款。</li>
  <li>Denied：不可退款。</li>
     */
    RefundStatus?: string;
    /**
     * 自动续费状态，取值有：
  <li>Never：不自动续费。</li>
  <li>Expire：到期自动续费。</li>
  <li>ExpireOrUseOut：到期或用完自动续费。</li>
  <li>NotSupport：不支持。</li>
     */
    RenewStatus?: string;
}
/**
 * 画质修复控制参数
 */
export interface RepairInfo {
    /**
     * 画质修复控制开关，可选值：
  <li>ON：开启画质修复；</li>
  <li>OFF：关闭画质修复。</li>
     */
    Switch: string;
    /**
     * 画质修复类型，仅当画质修复控制开关为 ON 时有效，可选值：
  <li>weak：轻画质修复；</li>
  <li>normal：正常画质修复；</li>
  <li>strong：强画质修复。</li>
  默认值：weak。
     */
    Type?: string;
}
/**
 * CDN 日志信息
 */
export interface CdnLogInfo {
    /**
     * 日志所属日期， 格式为：yyyy-MM-dd ，如2018-03-01。
     */
    Date?: string;
    /**
     * 日志名称，格式为：日期小时-域名
  如 2018120101-test.vod2.mqcloud.com。
     */
    Name?: string;
    /**
     * 日志下载链接，24小时内下载有效。
     */
    Url?: string;
    /**
     * 日志起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    StartTime?: string;
    /**
     * 日志结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    EndTime?: string;
}
/**
 * 降码率任务转码结果类型
 */
export interface ReduceMediaBitrateTranscodeResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 转码任务的输入。
     */
    Input?: TranscodeTaskInput;
    /**
     * 转码任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: MediaTranscodeItem;
    /**
     * 转码进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 转码任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 转码任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * 简单加密加解密密钥对。
 */
export interface SimpleAesEdkPair {
    /**
     * 加密后的数据密钥。
     */
    Edk: string;
    /**
     * 数据密钥。返回的数据密钥 DK 为 Base64 编码字符串。
     */
    Dk: string;
}
/**
 * 字幕信息。
 */
export interface MediaSubtitleInfo {
    /**
     * 字幕信息列表。
     */
    SubtitleSet: Array<MediaSubtitleItem>;
}
/**
 * 语音全文识别的输入。
 */
export interface AiRecognitionTaskAsrFullTextResultInput {
    /**
     * 语音全文识别模板 ID。
     */
    Definition: number;
}
/**
 * 小程序音视频审核信息单元
 */
export interface MediaMiniProgramReviewInfoItem {
    /**
     * 模板id。小程序视频发布的视频所对应的转码模板ID，为0代表原始视频。
     */
    Definition?: number;
    /**
     * 视频元信息。
     */
    MetaData?: MediaMetaData;
    /**
     * 小程序音视频审核视频播放地址。
     */
    Url?: string;
    /**
     * 小程序视频发布状态：
  <li>Pass：成功。</li>
  <li>Rejected：未通过。</li>
     */
    ReviewResult?: string;
    /**
     * 小程序音视频审核元素。
     */
    ReviewSummary?: Array<MediaMiniProgramReviewElem>;
}
/**
 * 视频处理任务统计数据。
 */
export interface TaskStatData {
    /**
     * 任务类型。
  <li> Transcoding: 普通转码</li>
  <li> Transcoding-TESHD: 极速高清转码</li>
  <li> Editing: 视频编辑</li>
  <li> Editing-TESHD: 极速高清视频编辑</li>
  <li> AdaptiveBitrateStreaming: 自适应码流</li>
  <li> ContentAudit: 内容审核</li>
  <li> ContentRecognition: 内容识别</li>
  <li> RemoveWatermark: 去水印</li>
  <li> ExtractTraceWatermark: 提取水印</li>
  <li> AddTraceWatermark: 添加水印</li>
  <li> RebuildMedia: 音画质重生</li>
  <li> QualityInspect: 音画质检测</li>
  <li>Transcode: 转码，包含普通转码、极速高清和视频编辑（不推荐使用）</li>
  <li>VoiceTranslation: 语音翻译</li>
  <li>JITTranscoding: 即时转码</li>
     */
    TaskType?: string;
    /**
     * 任务数统计数据概览，用量单位为秒。
     */
    Summary?: Array<TaskStatDataItem>;
    /**
     * 不同规格任务统计数据详情。
  转码规格：
  <li>Remuxing: 转封装</li>
  <li>Audio: 音频转码</li>
  <li>Standard.H264.SD: H.264编码方式标清转码</li>
  <li>Standard.H264.HD: H.264编码方式高清转码</li>
  <li>Standard.H264.FHD: H.264编码方式全高清转码</li>
  <li>Standard.H264.2K: H.264编码方式2K转码</li>
  <li>Standard.H264.4K: H.264编码方式4K转码</li>
  <li>Standard.H265.SD: H.265编码方式标清转码</li>
  <li>Standard.H265.HD: H.265编码方式高清转码</li>
  <li>Standard.H265.FHD: H.265编码方式全高清转码</li>
  <li>Standard.H265.2K: H.265编码方式2K转码</li>
  <li>Standard.H265.4K: H.265编码方式4K转码</li>
  <li>TESHD-10.H264.SD: H.264编码方式标清极速高清转码</li>
  <li>TESHD-10.H264.HD: H.264编码方式高清极速高清转码</li>
  <li>TESHD-10.H264.FHD: H.264编码方式全高清极速高清转码</li>
  <li>TESHD-10.H264.2K: H.264编码方式2K极速高清转码</li>
  <li>TESHD-10.H264.4K: H.264编码方式4K极速高清转码</li>
  <li>TESHD-10.H265.SD: H.265编码方式标清极速高清转码</li>
  <li>TESHD-10.H265.HD: H.265编码方式高清极速高清转码</li>
  <li>TESHD-10.H265.FHD: H.265编码方式全高清极速高清转码</li>
  <li>TESHD-10.H265.2K: H.265编码方式2K极速高清转码</li>
  <li>TESHD-10.H265.4K: H.265编码方式4K极速高清转码</li>
  <li>Edit.Audio: 音频编辑</li>
  <li>Edit.H264.SD: H.264编码方式标清视频编辑</li>
  <li>Edit.H264.HD: H.264编码方式高清视频编辑</li>
  <li>Edit.H264.FHD: H.264编码方式全高清视频编辑</li>
  <li>Edit.H264.2K: H.264编码方式2K视频编辑</li>
  <li>Edit.H264.4K: H.264编码方式4K视频编辑</li>
  <li>Edit.H265.SD: H.265编码方式标清视频编辑</li>
  <li>Edit.H265.HD: H.265编码方式高清视频编辑</li>
  <li>Edit.H265.FHD: H.265编码方式全高清视频编辑</li>
  <li>Edit.H265.2K: H.265编码方式2K视频编辑</li>
  <li>Edit.H265.4K: H.265编码方式4K视频编辑</li>
  <li>Edit.TESHD-10.H264.SD: H.264编码方式标清极速高清视频编辑</li>
  <li>Edit.TESHD-10.H264.HD: H.264编码方式高清极速高清视频编辑</li>
  <li>Edit.TESHD-10.H264.FHD: H.264编码方式全高清极速高清视频编辑</li>
  <li>Edit.TESHD-10.H264.2K: H.264编码方式2K极速高清视频编辑</li>
  <li>Edit.TESHD-10.H264.4K: H.264编码方式4K极速高清视频编辑</li>
  <li>Edit.TESHD-10.H265.SD: H.265编码方式标清极速高清视频编辑</li>
  <li>Edit.TESHD-10.H265.HD: H.265编码方式高清极速高清视频编辑</li>
  <li>Edit.TESHD-10.H265.FHD: H.265编码方式全高清极速高清视频编辑</li>
  <li>Edit.TESHD-10.H265.2K: H.265编码方式2K极速高清视频编辑</li>
  <li>Edit.TESHD-10.H265.4K: H.265编码方式4K极速高清视频编辑</li>
  去水印、音画质重生规格：
  <li>480P: 短边 ≤ 480px</li>
  <li>720P: 短边 ≤ 720px</li>
  <li>1080P: 短边 ≤ 1080px</li>
  <li>2K: 短边 ≤ 1440px</li>
  <li>4K: 短边 ≤ 2160px</li>
  <li>8K: 短边 ≤ 4320px</li>
  <li>Audio: 音频</li>
  即时转码规格：
  <li>JITTranscoding.H264.SD: H.264编码方式标清即时转码</li>
  <li>JITTranscoding.H264.HD: H.264编码方式高清即时转码</li>
  <li>JITTranscoding.H264.FHD: H.264编码方式全高清即时转码</li>
  <li>JITTranscoding.H264.2K: H.264编码方式2K即时转码</li>
  <li>JITTranscoding.Audio: 音频即时转码</li>
  <li>JITTranscoding.Copy: 转封装即时转码</li>
     */
    Details?: Array<SpecificationDataItem>;
}
/**
 * CreateVodDomain请求参数结构体
 */
export interface CreateVodDomainRequest {
    /**
     * 需要接入点播的加速域名。注意：不支持填写泛域名。
     */
    Domain: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 需要开启 CDN 加速的区域：
  <li>Chinese Mainland：中国境内（不包含港澳台）。</li>
  <li>Outside Chinese Mainland: 中国境外。</li>
  <li>Global: 全球范围。</li>
  如果没有设置 AccelerateArea， 点播会根据用户在腾讯云设置的地域信息自动开通中国境内或者中国境外的 CDN 加速。开启中国境内加速的域名，需要先[备案域名](/document/product/243/18905)。
     */
    AccelerateArea?: string;
    /**
     * 域名类型，取值有： <li>VOD：使用 VOD 产品分发的域名；</li> <li>EdgeOne：使用 EdgeOne 产品分发的域名。</li>不填默认取值为 VOD 。
     */
    Type?: string;
}
/**
 * 文本全文本识别任务控制参数
 */
export interface OcrFullTextConfigureInfoForUpdate {
    /**
     * 文本全文识别任务开关，可选值：
  <li>ON：开启智能文本全文识别任务；</li>
  <li>OFF：关闭智能文本全文识别任务。</li>
     */
    Switch?: string;
}
/**
 * DeleteRoundPlay请求参数结构体
 */
export interface DeleteRoundPlayRequest {
    /**
     * 轮播播单唯一标识。
     */
    RoundPlayId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 画面超分控制参数
 */
export interface SuperResolutionInfo {
    /**
     * 画面超分控制开关，可选值：
  <li>ON：开启画面超分；</li>
  <li>OFF：关闭画面超分。</li>
  当开启画面超分时，默认2倍超分。
     */
    Switch: string;
    /**
     * 画面超分类型，仅当画面超分控制开关为 ON 时有效，可选值：
  <li>lq：针对低清晰度有较多噪声视频的超分；</li>
  <li>hq：针对高清晰度视频超分。</li>
  默认值：lq。
     */
    Type?: string;
    /**
     * 超分倍数，可选值：2。
  默认值：2。
     */
    Size?: number;
}
/**
 * 点播文件雪碧图信息
 */
export interface MediaImageSpriteInfo {
    /**
     * 特定规格的雪碧图信息集合，每个元素代表一套相同规格的雪碧图。
     */
    ImageSpriteSet: Array<MediaImageSpriteItem>;
}
/**
 * EnhanceMediaQuality请求参数结构体
 */
export interface EnhanceMediaQualityRequest {
    /**
     * 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。
     */
    FileId: string;
    /**
     * 音画质重生模板 ID。
  针对典型的使用场景，云点播提供了多个[预置模板](https://cloud.tencent.com/document/product/266/102586#50604b3f-0286-4a10-a3f7-18218116aff7)。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音画质重生后的媒体文件配置。
     */
    OutputConfig?: EnhanceMediaQualityOutputConfig;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，音画质重生完成回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
}
/**
 * 资源包中包含的资源。
 */
export interface ProductInstanceRecource {
    /**
     * 资源类型。
  <li>Storage：存储资源包。</li>
  <li>Traffic：流量资源包。</li>
  <li>Transcode：普通转码资源包。</li>
  <li>TESHD：极速高清转码资源包。</li>
  <li>Review：音视频审核转码资源包。</li>
  <li>MediaProcess：媒体处理时长资源包。</li>
     */
    ResourceType?: string;
    /**
     * 资源包额度。
  <li>音视频存储资源包，单位为字节。</li>
  <li>音视频转码资源包，单位为秒。</li>
  <li>音视频审核资源包，单位为秒。</li>
  <li>音视频极速高清资源包，单位为秒。</li>
  <li>音视频加速资源包，单位为字节。</li>
  <li>媒体处理时长资源包，单位为秒。</li>
     */
    Amount?: number;
    /**
     * 资源包余量。
  <li>音视频存储资源包，单位为字节。</li>
  <li>音视频转码资源包，单位为秒。</li>
  <li>音视频审核资源包，单位为秒。</li>
  <li>音视频极速高清资源包，单位为秒。</li>
  <li>音视频加速资源包，单位为字节。</li>
  <li>媒体处理时长资源包，单位为秒。</li>
     */
    Left?: number;
}
/**
 * 剪辑固化任务信息。
 */
export interface PersistenceCompleteTask {
    /**
     * 固化生成的媒体 ID。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileId?: string;
    /**
     * 剪辑固化的来源，有以下三种。
  <li>SimpleHlsClip：来自简单 HLS 剪辑；</li>
  <li>FastEditMedia：来自快速媒体编辑；</li>
  <li>LiveRealTimeClip:来自直播即时剪辑。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PersistenceSource?: string;
}
/**
 * 人脸识别结果片段
 */
export interface AiRecognitionTaskFaceSegmentItem {
    /**
     * 识别片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 识别片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
    /**
     * 识别片段置信度。取值：0~100。
     */
    Confidence: number;
    /**
     * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
     */
    AreaCoordSet: Array<number | bigint>;
}
/**
 * ProcessMedia返回参数结构体
 */
export interface ProcessMediaResponse {
    /**
     * 任务 ID
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWordSamples返回参数结构体
 */
export interface CreateWordSamplesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能分类任务控制参数
 */
export interface ClassificationConfigureInfoForUpdate {
    /**
     * 智能分类任务开关，可选值：
  <li>ON：开启智能分类任务；</li>
  <li>OFF：关闭智能分类任务。</li>
     */
    Switch?: string;
}
/**
 * DeleteAdaptiveDynamicStreamingTemplate返回参数结构体
 */
export interface DeleteAdaptiveDynamicStreamingTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateWordSamples请求参数结构体
 */
export interface CreateWordSamplesRequest {
    /**
     * <b>关键词应用场景，可选值：</b>
  1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
  2. Recognition.Asr：通过音频识别技术，进行内容识别；
  3. Review.Ocr：通过光学字符识别技术，进行不适宜内容识别；
  4. Review.Asr：通过音频识别技术，进行不适宜内容识别；
  <b>可合并简写为：</b>
  5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；
  6. Review：通过光学字符识别技术、音频识别技术，进行不适宜内容识别，等价于 3+4；
  7. All：通过光学字符识别技术、音频识别技术，进行内容识别、不适宜内容识别，等价于 1+2+3+4。
     */
    Usages: Array<string>;
    /**
     * 关键词，数组长度限制：100。
     */
    Words: Array<AiSampleWordInfo>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 视频画面模糊检测的控制参数。
 */
export interface BlurConfigureInfo {
    /**
     * 视频画面模糊检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
}
/**
 * 语音鉴别涉及令人不适宜的信息的任务控制参数。
 */
export interface PoliticalAsrReviewTemplateInfoForUpdate {
    /**
     * 语音鉴别涉及令人不适宜的信息的任务开关，可选值：
  <li>ON：开启语音鉴别涉及令人不适宜的信息的任务；</li>
  <li>OFF：关闭语音鉴别涉及令人不适宜的信息的任务。</li>
     */
    Switch?: string;
    /**
     * 判定涉嫌违规的分数阈值，当音视频审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当音视频审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 微信小程序发布任务类型
 */
export interface WechatMiniProgramPublishTaskInput {
    /**
     * 发布视频所对应的转码模板 ID，为 0 代表原始视频。
     */
    SourceDefinition: number;
}
/**
 * SetCLSPushTarget请求参数结构体
 */
export interface SetCLSPushTargetRequest {
    /**
     * 域名。
     */
    Domain: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 要设置的中国大陆地区的日志推送目标。
     */
    ChineseMainlandCLSTargetInfo?: AreaCLSTargetInfo;
    /**
     * 要设置的中国大陆以外地区的日志推送目标。
     */
    OutsideChineseMainlandCLSTargetInfo?: AreaCLSTargetInfo;
}
/**
 * AI 样本管理，人脸数据操作。
 */
export interface AiSampleFaceOperation {
    /**
     * 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。重置操作将清空该人物已有人脸数据，并添加 FaceContents 指定人脸数据。
     */
    Type: string;
    /**
     * 人脸 ID 集合，当 Type为delete 时，该字段必填。
     */
    FaceIds?: Array<string>;
    /**
     * 人脸图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串集合，仅支持 jpeg、png 图片格式。
  <li>当 Type为add 或 reset 时，该字段必填；</li>
  <li>数组长度限制：5 张图片。</li>
  注意：图片必须是单人像正面人脸较清晰的照片，像素不低于 200*200。
     */
    FaceContents?: Array<string>;
}
/**
 * SVG水印模板输入参数
 */
export interface SvgWatermarkInputForUpdate {
    /**
     * 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：
  <li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且
   Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；</li>
  <li>当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；</li>
  <li>当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；</li>
  <li>当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；</li>
  <li>当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；</li>
  <li>当字符串以 % 结尾时，含义同 W%。</li>
  默认值为 10W%。
     */
    Width?: string;
    /**
     * 水印的高度，支持 px，%，W%，H%，S%，L% 六种格式：
  <li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且
   Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；</li>
  <li>当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；</li>
  <li>当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；</li>
  <li>当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；</li>
  <li>当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；</li>
  <li>当字符串以 % 结尾时，含义同 H%。
  默认值为 0px。
     */
    Height?: string;
    /**
     * 水印周期配置，用于配置水印周期性地显示与隐藏。
  主要使用场景是：为了视频防遮标，在视频多个地方设置水印，这些水印按固定顺序周期性地显示与隐藏。
  例如，设置 A、B、C、D 4 个水印分别位于视频的左上角、右上角、右下角、左下角处，视频开始时，{ A 显示 5 秒 -> B 显示 5 秒 -> C 显示 5 秒 -> D 显示 5 秒 } -> A 显示 5 秒 -> B 显示 5 秒 -> ...，任何时刻只显示一处水印。
  花括号 {} 表示由 A、B、C、D 4 个水印组成的大周期，可以看出每个大周期持续 20 秒。
  可以看出，A、B、C、D 都是周期性地显示 5 秒、隐藏 15 秒，且四者有固定的显示顺序。
  此配置项即用来描述单个水印的周期配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CycleConfig?: WatermarkCycleConfigForUpdate;
}
/**
 * 音视频审核 Ocr 文字鉴别涉及令人不安全的信息的任务结果类型
 */
export interface AiReviewTaskTerrorismOcrResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核 Ocr 文字涉及令人不安全的信息的任务输入。
     */
    Input?: AiReviewTerrorismOcrTaskInput;
    /**
     * 音视频审核 Ocr 文字涉及令人不安全的信息的任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiReviewTerrorismOcrTaskOutput;
    /**
     * 音视频审核 Ocr 文字涉及令人不安全的信息的任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * 即时转码水印模板更新配置。
 */
export interface WatermarkConfigureInfoForUpdate {
    /**
     * 是否启用水印。可取值：
  <li>ON：表示启用水印；</li>
  <li>OFF：表示关闭水印。</li>
     */
    Switch?: string;
    /**
     * 水印图片 Base64 编码后的字符串。支持 jpeg、png 图片格式。
     */
    ImageContent?: string;
    /**
     * 水印的宽度。
  <li>字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
     */
    Width?: string;
    /**
     * 水印的高度。
  <li>字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
     */
    Height?: string;
    /**
     * 水印原点距离视频图像坐标原点的水平位置。字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；
     */
    XPos?: string;
    /**
     * 水印原点距离视频图像坐标原点的垂直位置。当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%。
     */
    YPos?: string;
}
/**
 * 文本关键识别结果。
 */
export interface AiRecognitionTaskOcrWordsResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 文本关键词识别任务输入信息。
     */
    Input?: AiRecognitionTaskOcrWordsResultInput;
    /**
     * 文本关键词识别任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiRecognitionTaskOcrWordsResultOutput;
    /**
     * 文本关键词识别任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 文本关键词识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 文本关键词识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * 语音鉴别涉及令人反感的信息的任务控制参数
 */
export interface PornAsrReviewTemplateInfo {
    /**
     * 语音鉴别涉及令人反感的信息的任务开关，可选值：
  <li>ON：开启语音鉴别涉及令人反感的信息的任务；</li>
  <li>OFF：关闭语音鉴别涉及令人反感的信息的任务。</li>
     */
    Switch: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 视频拆条结果。
 */
export interface AiRecognitionTaskSegmentResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 视频拆条任务输入信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input?: AiRecognitionTaskSegmentResultInput;
    /**
     * 视频拆条任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiRecognitionTaskSegmentResultOutput;
    /**
     * 视频拆条任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 视频拆条任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 视频拆条任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * 视频画面抖动重影检测的控制参数。
 */
export interface JitterConfigureInfo {
    /**
     * 视频画面抖动重影检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
}
/**
 * 字幕信息。
 */
export interface MediaSubtitleItem {
    /**
     * 字幕的唯一标识。
     */
    Id?: string;
    /**
     * 字幕名字。
     */
    Name?: string;
    /**
     * 字幕语言。常见的取值如下：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>ja：日文；</li>
  <li>ko：韩文；</li>
  <li>vi：越南语；</li>
  <li>ms：马来语；</li>
  <li>th：泰语；</li>
  <li>pt：葡萄牙语；</li>
  <li>tr：土耳其语；</li>
  <li>ar：阿拉伯语；</li>
  <li>es：西班牙语；</li>
  <li>hi：印地语；</li>
  <li>fr：法语。</li>
  其他取值参考 [RFC5646](https://tools.ietf.org/html/rfc5646)
     */
    Language?: string;
    /**
     * 字幕格式。取值范围如下：
  <li>vtt</li>
     */
    Format?: string;
    /**
     * 字幕 URL。
     */
    Url?: string;
    /**
     * 字幕来源，取值范围：
  <li>UserUploaded：用户上传；</li>
  <li>AIRecognition：AI 识别，通过语音识别或语音翻译生成。</li>
     */
    Source?: string;
}
/**
 * 音视频审核任务的输出。
 */
export interface ReviewAudioVideoTaskOutput {
    /**
     * 音视频内容审核的结果建议，取值范围：
  <li>pass：建议通过；</li>
  <li>review：建议复审；</li>
  <li>block：建议封禁。</li>
     */
    Suggestion?: string;
    /**
     * 当 Suggestion 为 review 或 block 时有效，表示音视频最可能的违规的标签，取值范围：
  <li>Porn：色情；</li>
  <li>Terror：暴力；</li>
  <li>Polity：不适宜的信息；</li>
  <li>Ad：广告；</li>
  <li>Illegal：违法；</li>
  <li>Abuse：谩骂；</li>
  <li>Moan：娇喘。</li>
     */
    Label?: string;
    /**
     * 当 Suggestion 为 review 或 block 时有效，表示音视频最可能的违禁的形式，取值范围：
  <li>Image：画面上的人物或图标；</li>
  <li>OCR：画面上的文字；</li>
  <li>ASR：语音中的文字；</li>
  <li>Voice：声音。</li>
     */
    Form?: string;
    /**
     * 有违规信息的嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 10个 元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<ReviewAudioVideoSegmentItem>;
    /**
     * 涉及违规信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * 涉及违规信息的嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
    /**
     * 封面审核结果。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoverReviewResult?: ReviewImageResult;
}
/**
 * 语音违禁任务控制参数
 */
export interface ProhibitedAsrReviewTemplateInfoForUpdate {
    /**
     * 语音违禁任务开关，可选值：
  <li>ON：开启语音违禁任务；</li>
  <li>OFF：关闭语音违禁任务。</li>
     */
    Switch?: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * ModifyAnimatedGraphicsTemplate返回参数结构体
 */
export interface ModifyAnimatedGraphicsTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 语音翻译识别片段。
 */
export interface AiRecognitionTaskAsrTranslateSegmentItem {
    /**
     * 语音翻译识别片段置信度。取值：0~100。
     */
    Confidence?: number;
    /**
     * 语音翻译识别片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 语音翻译识别片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset?: number;
    /**
     * 识别文本。
     */
    Text?: string;
    /**
     * 翻译文本。
     */
    Translation?: string;
}
/**
 * DeleteCLSTopic返回参数结构体
 */
export interface DeleteCLSTopicResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * LiveRealTimeClip请求参数结构体
 */
export interface LiveRealTimeClipRequest {
    /**
     * 推流直播码。
     */
    StreamId: string;
    /**
     * 流剪辑的开始时间，格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    StartTime: string;
    /**
     * 流剪辑的结束时间，格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 是否固化。0 不固化，1 固化。默认不固化。
     */
    IsPersistence?: number;
    /**
     * 剪辑固化后的视频存储过期时间。格式参照 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。仅 IsPersistence 为 1 时有效，默认剪辑固化的视频永不过期。
     */
    ExpireTime?: string;
    /**
     * 剪辑固化后的视频点播任务流处理，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。仅 IsPersistence 为 1 时有效。
     */
    Procedure?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
  仅 IsPersistence 为 1 时有效。
     */
    ClassId?: number;
    /**
     * 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。仅 IsPersistence 为 1 时有效。
     */
    SourceContext?: string;
    /**
     * 会话上下文，用于透传用户请求信息，当指定 Procedure 参数后，[任务流状态变更回调](/document/product/266/9636) 将返回该字段值，最长 1000 个字符。仅 IsPersistence 为 1 时有效。
     */
    SessionContext?: string;
    /**
     * 是否需要返回剪辑后的视频元信息。0 不需要，1 需要。默认不需要。
     */
    MetaDataRequired?: number;
    /**
     * 云点播中添加的用于时移播放的域名，必须在云直播已经[关联录制模板和开通时移服务](https://cloud.tencent.com/document/product/266/52220#.E6.AD.A5.E9.AA.A43.EF.BC.9A.E5.85.B3.E8.81.94.E5.BD.95.E5.88.B6.E6.A8.A1.E6.9D.BF.3Ca-id.3D.22step3.22.3E.3C.2Fa.3E)。**如果本接口的首次调用时间在 2021-01-01T00:00:00Z 之后，则此字段为必选字段。**
     */
    Host?: string;
    /**
     * 剪辑的直播流信息：
  <li>默认剪辑直播原始流。</li>
  <li>当StreamInfo中指定的Type为Transcoding，则剪辑TemplateId对应的直播转码流。</li>
     */
    StreamInfo?: LiveRealTimeClipStreamInfo;
    /**
     * 系统保留字段，请勿填写。
     */
    ExtInfo?: string;
}
/**
 * DeleteAdaptiveDynamicStreamingTemplate请求参数结构体
 */
export interface DeleteAdaptiveDynamicStreamingTemplateRequest {
    /**
     * 自适应转码模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 文本全文识别片段。
 */
export interface AiRecognitionTaskOcrFullTextSegmentItem {
    /**
     * 识别片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 识别片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
    /**
     * 识别片段结果集。
     */
    TextSet: Array<AiRecognitionTaskOcrFullTextSegmentTextItem>;
}
/**
 * 色彩增强控制参数
 */
export interface ColorEnhanceInfo {
    /**
     * 色彩增强控制开关，可选值：
  <li>ON：开启综合增强；</li>
  <li>OFF：关闭综合增强。</li>
     */
    Switch: string;
    /**
     * 色彩增强类型，仅当色彩增强控制开关为 ON 时有效，可选值：
  <li>weak：轻色彩增强；</li>
  <li>normal：正常色彩增强；</li>
  <li>strong：强色彩增强。</li>
  默认值：weak。
     */
    Type?: string;
}
/**
 * DeleteEnhanceMediaTemplate返回参数结构体
 */
export interface DeleteEnhanceMediaTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 编辑视频的结果文件输出。
 */
export interface EditMediaOutputConfig {
    /**
     * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
     */
    MediaName?: string;
    /**
     * 输出文件格式，可选值：mp4、hls。默认是 mp4。
     */
    Type?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId?: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime?: string;
    /**
     * 输出的视频信息。
     */
    VideoStream?: EditMediaVideoStream;
    /**
     * 极速高清转码参数。
     */
    TEHDConfig?: EditMediaTEHDConfig;
}
/**
 * 视频拆条任务信息。
 */
export interface SplitMediaTaskSegmentInfo {
    /**
     * 视频拆条任务输入信息。
     */
    Input?: SplitMediaTaskInput;
    /**
     * 视频拆条任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: TaskOutputMediaInfo;
    /**
     * 任务类型为 Procedure 的任务 ID。若发起[视频拆条](https://cloud.tencent.com/document/api/266/51098)任务时，视频拆条任务信息列表指定了任务流模板(ProcedureName)，当该任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。
     */
    ProcedureTaskId?: string;
    /**
     * 任务类型为 ReviewAudioVideo 的任务 ID。若发起[视频拆条](https://cloud.tencent.com/document/api/266/51098)任务时，视频拆条任务信息列表指定了任务流模板(ProcedureName)，当该任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。
     */
    ReviewAudioVideoTaskId?: string;
}
/**
 * Asr 文字涉及令人反感的信息
 */
export interface AiReviewPornAsrTaskOutput {
    /**
     * Asr 文字涉及令人反感的信息的评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * Asr 文字涉及令人反感的信息的结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * Asr 文字有涉及令人反感的信息的嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<MediaContentReviewAsrTextSegmentItem>;
    /**
     * Asr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * Asr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * 字幕信息。
 */
export interface AiRecognitionTaskAsrFullTextResultOutputSubtitleItem {
    /**
     * 媒资字幕 ID，用于媒资字幕管理，仅当 Format 为 vtt 时有效。
  <font color=red>注意：</font>2024-11-01T10:00:00Z 之前的任务返回此字段无效。
     */
    Id?: string;
    /**
     * 媒资字幕名字，用于播放器展示，仅当 Format 为 vtt 时有效。
  <font color=red>注意：</font>2024-11-01T10:00:00Z 之前的任务返回此字段无效。
     */
    Name?: string;
    /**
     * 字幕语言。
     */
    Language?: string;
    /**
     * 字幕文件格式，取值范围：
  <li>vtt：WebVTT 字幕文件；</li>
  <li>srt：SRT 字幕文件。</li>
     */
    Format?: string;
    /**
     * 字幕文件 Url。
     */
    Url?: string;
}
/**
 * SimpleHlsClip返回参数结构体
 */
export interface SimpleHlsClipResponse {
    /**
     * 裁剪后的视频地址。
     */
    Url?: string;
    /**
     * 裁剪后的视频元信息。目前`Size`，`Rotate`，`VideoDuration`，`AudioDuration` 几个字段暂时缺省，没有真实数据。
     */
    MetaData?: MediaMetaData;
    /**
     * 剪辑固化后的视频的媒体文件的唯一标识。
     */
    FileId?: string;
    /**
     * 剪辑固化后的视频任务流 ID。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteAIAnalysisTemplate请求参数结构体
 */
export interface DeleteAIAnalysisTemplateRequest {
    /**
     * 音视频内容分析模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 智能插帧控制参数
 */
export interface VideoFrameInterpolationInfo {
    /**
     * 智能插帧控制开关，可选值：
  <li>ON：开启智能插帧；</li>
  <li>OFF：关闭智能插帧。</li>
     */
    Switch: string;
    /**
     * 智能插帧帧率，帧率范围为 (0, 100]，仅当智能插帧控制开关为 ON 时有效。默认跟源文件帧率一致。
     */
    Fps?: number;
}
/**
 * EditMedia请求参数结构体
 */
export interface EditMediaRequest {
    /**
     * 输入视频的类型，可以取的值为  File，Stream 两种。
     */
    InputType: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 输入的视频文件信息，当 InputType 为 File 时必填。
     */
    FileInfos?: Array<EditMediaFileInfo>;
    /**
     * 输入的流信息，当 InputType 为 Stream 时必填。
     */
    StreamInfos?: Array<EditMediaStreamInfo>;
    /**
     * 编辑模板 ID，取值有 10，20，不填代表使用 10 模板。
  <li>10：拼接时，以分辨率最高的输入为基准；</li>
  <li>20：拼接时，以码率最高的输入为基准。</li>
     */
    Definition?: number;
    /**
     * [任务流模板](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF)名字，如果要对生成的新视频执行任务流时填写。
     */
    ProcedureName?: string;
    /**
     * 编辑后生成的文件配置。
     */
    OutputConfig?: EditMediaOutputConfig;
    /**
     * 标识来源上下文，用于透传用户请求信息，在EditMediaComplete回调和任务流状态变更回调将返回该字段值，最长 1000个字符。
     */
    SessionContext?: string;
    /**
     * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * CreateComplexAdaptiveDynamicStreamingTask请求参数结构体
 */
export interface CreateComplexAdaptiveDynamicStreamingTaskRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。</b>
     */
    SubAppId: number;
    /**
     * 主媒体文件的媒体 ID。
     */
    FileId: string;
    /**
     * 自适应码流参数，最大支持8个。
     */
    StreamParaSet: Array<ComplexAdaptiveDynamicStreamingTaskStreamPara>;
    /**
     * 片头片尾列表，支持多片头片尾，最大可支持 4 个。如果填写了该字段，AudioSet 和 SubtitleSet 中指定的媒体的起始时间将会自动调整，和主媒体保持同步。
     */
    HeadTailSet?: Array<HeadTailTaskInput>;
    /**
     * 多语言音频流参数，最大支持16个。每个数组元素对应自适应码流中的一条音频流。如果要将主媒体文件中的音频流添加到输出的自适应码流中，那么也需要在此处指定。数组中元素的顺序将决定自适应码流中的音频流顺序。如果输入的媒体文件同时带有视频流和音频流，那么视频流将被忽略。
     */
    AudioSet?: Array<ComplexAdaptiveDynamicStreamingTaskAudioInput>;
    /**
     * 多语言字幕参数，最大可支持16个。每个数组元素对应自适应码流中的一条字幕流。数组中元素的顺序将决定自适应码流中的字幕流顺序。
     */
    SubtitleSet?: Array<ComplexAdaptiveDynamicStreamingTaskSubtitleInput>;
}
/**
 * 语音翻译结果。
 */
export interface AiRecognitionTaskAsrTranslateResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 语音翻译任务输入信息。
     */
    Input?: AiRecognitionTaskAsrTranslateResultInput;
    /**
     * 语音翻译任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiRecognitionTaskAsrTranslateResultOutput;
    /**
     * 语音翻译任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 语音翻译任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 语音翻译任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * DescribeFileAttributes返回参数结构体
 */
export interface DescribeFileAttributesResponse {
    /**
     * 任务 ID 。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * License 请求次数统计数据。
 */
export interface LicenseUsageDataItem {
    /**
     * 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。
     */
    Time: string;
    /**
     * License 请求次数。
     */
    Count: number;
}
/**
 * 画质重生输出的音频信息
 */
export interface RebuildMediaTargetAudioStream {
    /**
     * 音频流的编码格式。
  当外层参数 Container 为 mp3 时，可选值为：
  <li>libmp3lame。</li>
  当外层参数 Container 为 ogg 或 flac 时，可选值为：
  <li>flac。</li>
  当外层参数 Container 为 m4a 时，可选值为：
  <li>libfdk_aac；</li>
  <li>libmp3lame；</li>
  <li>ac3。</li>
  当外层参数 Container 为 mp4 或 flv 时，可选值为：
  <li>libfdk_aac：更适合 mp4；</li>
  <li>libmp3lame：更适合 flv；</li>
  <li>mp2。</li>
  当外层参数 Container 为 hls 时，可选值为：
  <li>libfdk_aac。</li>
     */
    Codec?: string;
    /**
     * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。
  当取值为 0，表示音频码率和原始音频保持一致。
     */
    Bitrate?: number;
    /**
     * 音频流的采样率，可选值：
  <li>32000</li>
  <li>44100</li>
  <li>48000</li>
  
  单位：Hz。
     */
    SampleRate?: number;
    /**
     * 音频通道方式，可选值：
  <li>1：单通道</li>
  <li>2：双通道</li>
  <li>6：立体声</li>
  
  当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。
  默认值：2。
     */
    AudioChannel?: number;
}
/**
 * 视频拼接源文件信息（2017 版）
 */
export interface ConcatFileInfo2017 {
    /**
     * 错误码
  <li>0：成功；</li>
  <li>其他值：失败。</li>
     */
    ErrCode: number;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 视频拼接源文件的 ID。
     */
    FileId: string;
    /**
     * 视频拼接源文件的地址。
     */
    FileUrl: string;
    /**
     * 视频拼接源文件的格式。
     */
    FileType: string;
}
/**
 * 图片智能内容识别任务结果
 */
export interface ContentReviewResult {
    /**
     * 结果类型，取值范围：
  <li>Porn.Image：图片画面中的鉴别令人反感的信息结果；</li>
  <li>Terrorism.Image：图片画面中的鉴别令人不安全的信息结果；</li>
  <li>Political.Image：图片画面中的鉴别令人不适宜信息结果；</li>
  <li>Porn.Ocr：图片 OCR 文字中的鉴别令人反感的信息结果；</li>
  <li>Terrorism.Ocr：图片 OCR 文字中的鉴别令人不安全的信息结果；</li>
  <li>Political.Ocr：图片 OCR 文字中的鉴别令人不适宜信息结果。</li>
     */
    Type?: string;
    /**
     * 图片画面中的鉴别令人反感的信息结果，当 Type 为 Porn.Image 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PornImageResult?: PornImageResult;
    /**
     * 图片画面中的鉴别令人不安全的信息结果，当 Type 为 Terrorism.Image 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerrorismImageResult?: TerrorismImageResult;
    /**
     * 图片画面中的鉴别令人不适宜信息结果，当 Type 为 Political.Image 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PoliticalImageResult?: PoliticalImageResult;
    /**
     * 图片 OCR 文字中的鉴别令人反感的信息结果，当 Type 为 Porn.Ocr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PornOcrResult?: ContentReviewOcrResult;
    /**
     * 图片 OCR 中的鉴别令人不安全的信息结果，当 Type 为 Terrorism.Ocr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerrorismOcrResult?: ContentReviewOcrResult;
    /**
     * 图片 OCR 文字中的鉴别令人不适宜信息结果，当 Type 为 Political.Ocr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PoliticalOcrResult?: ContentReviewOcrResult;
}
/**
 * 对视频截雪碧图任务结果类型
 */
export interface MediaProcessTaskImageSpriteResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 对视频截雪碧图任务的输入。
     */
    Input?: ImageSpriteTaskInput;
    /**
     * 对视频截雪碧图任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: MediaImageSpriteItem;
    /**
     * 对视频截雪碧图任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 截雪碧图任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 截雪碧图任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * DescribeJustInTimeTranscodeTemplates返回参数结构体
 */
export interface DescribeJustInTimeTranscodeTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 模板详情列表。
     */
    JustInTimeTranscodeTemplateSet?: Array<JustInTimeTranscodeTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频画面花屏检测的控制参数。
 */
export interface CrashScreenConfigureInfo {
    /**
     * 视频画面花屏检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
}
/**
 * CreateReviewTemplate请求参数结构体
 */
export interface CreateReviewTemplateRequest {
    /**
     * 需要返回的违规标签列表，可选值为：
  <li>Porn：色情；</li>
  <li>Terror：暴力；</li>
  <li>Polity：不适宜的信息；</li>
  <li>Illegal：违法；</li>
  <li>Abuse：谩骂；</li>
  <li>Ad：广告；</li>
  <li>Moan：娇喘。</li>
     */
    Labels: Array<string>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: string;
    /**
     * 审核模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 审核模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
}
/**
 * DescribeMediaInfos返回参数结构体
 */
export interface DescribeMediaInfosResponse {
    /**
     * 媒体文件信息列表。
     */
    MediaInfoSet?: Array<MediaInfo>;
    /**
     * 不存在的文件 ID 列表。
     */
    NotExistFileIdSet?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProcedureTemplate返回参数结构体
 */
export interface DeleteProcedureTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeReviewTemplates返回参数结构体
 */
export interface DescribeReviewTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 审核模板详情列表。
     */
    ReviewTemplateSet?: Array<ReviewTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAdaptiveDynamicStreamingTemplates返回参数结构体
 */
export interface DescribeAdaptiveDynamicStreamingTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 转自适应码流模板详情列表。
     */
    AdaptiveDynamicStreamingTemplateSet?: Array<AdaptiveDynamicStreamingTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 小程序音视频审核信息
 */
export interface MediaMiniProgramReviewInfo {
    /**
     * 音视频审核信息列表。
     */
    MiniProgramReviewList: Array<MediaMiniProgramReviewInfoItem>;
}
/**
 * ForbidMediaDistribution返回参数结构体
 */
export interface ForbidMediaDistributionResponse {
    /**
     * 不存在的文件 ID 列表。
     */
    NotExistFileIdSet?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用于描述一个时间段的通用数据类型。
 */
export interface TimeRange {
    /**
     * <li>大于等于此时间（起始时间）。</li>
  <li>格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。</li>
     */
    After?: string;
    /**
     * <li>小于此时间（结束时间）。</li>
  <li>格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。</li>
     */
    Before?: string;
}
/**
 * DescribeAdaptiveDynamicStreamingTemplates请求参数结构体
 */
export interface DescribeAdaptiveDynamicStreamingTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 转自适应码流模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
}
/**
 * ModifyRoundPlay请求参数结构体
 */
export interface ModifyRoundPlayRequest {
    /**
     * 轮播播单唯一标识。
     */
    RoundPlayId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 启播时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    StartTime?: string;
    /**
     * 轮播列表。
  <li>数组长度限制：100。</li>
     */
    RoundPlaylist?: Array<RoundPlayListItemInfo>;
    /**
     * 轮播播单名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 轮播播单描述信息，长度限制：256 个字符。
     */
    Desc?: string;
    /**
     * 播放状态，可选值：<li>Disabled：停止播放。</li><li>Enabled：启播时长到达后启动播放。</li>
     */
    Status?: string;
    /**
     * 播放模式，可选值：
  <li>Loop：循环播放播单；</li>
  <li>Linear：单次播放，播单播放完停止播放。</li>
     */
    PlayBackMode?: string;
    /**
     * 过期时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)，过期后将停止播放。“9999-12-31T23:59:59+08:00”表示不过期。
     */
    ExpiredTime?: string;
}
/**
 * 图片水印模板输入参数
 */
export interface ImageWatermarkInput {
    /**
     * 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png、gif 图片格式。
     */
    ImageContent: string;
    /**
     * 水印的宽度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。</li>
  默认值：10%。
     */
    Width?: string;
    /**
     * 水印的高度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。</li>
  默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。
     */
    Height?: string;
    /**
     * 水印重复类型。使用场景：水印为动态图像。取值范围：
  <li>once：动态水印播放完后，不再出现；</li>
  <li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
  <li>repeat：水印循环播放，直到视频结束（默认值）。</li>
     */
    RepeatType?: string;
    /**
     * 图片透明度，取值范围：[0, 100]
  <li>0：完全不透明</li>
  <li>100：完全透明</li>
  默认值：0。
     */
    Transparency?: number;
}
/**
 * 物体识别任务控制参数
 */
export interface ObjectConfigureInfo {
    /**
     * 物体识别任务开关，可选值：
  <li>ON：开启智能物体识别任务；</li>
  <li>OFF：关闭智能物体识别任务。</li>
     */
    Switch: string;
    /**
     * 物体库选择，可选值：
  <li>Default：使用默认物体库；</li>
  <li>UserDefine：使用用户自定义物体库。</li>
  <li>All：同时使用默认物体库和用户自定义物体库。</li>
  默认值： All，同时使用默认物体库和用户自定义物体库。
     */
    ObjectLibrary?: string;
}
/**
 * 语音全文识别任务控制参数
 */
export interface AsrFullTextConfigureInfoForUpdate {
    /**
     * 语音全文识别任务开关，可选值：
  <li>ON：开启智能语音全文识别任务；</li>
  <li>OFF：关闭智能语音全文识别任务。</li>
     */
    Switch?: string;
    /**
     * 字幕格式列表操作信息。
     */
    SubtitleFormatsOperation?: SubtitleFormatsOperation;
    /**
     * 生成的字幕文件格式，<font color='red'>填空字符串</font>表示不生成字幕文件，可选值：
  <li>vtt：生成 WebVTT 字幕文件；</li>
  <li>srt：生成 SRT 字幕文件。</li>
  <font color='red'>注意：此字段已废弃，建议使用 SubtitleFormatsOperation。</font>
     */
    SubtitleFormat?: string;
    /**
     * 媒体源语言，取值范围：
  <li>zh：中文普通话；</li>
  <li>en：英语；</li>
  <li>ja：日语；</li>
  <li>zh-ca：粤语。</li>
     */
    SrcLanguage?: string;
    /**
     * 指定字幕名称，长度限制：64 个字符。该值将用于播放器展示。
     */
    SubtitleName?: string;
}
/**
 * DeleteHeadTailTemplate返回参数结构体
 */
export interface DeleteHeadTailTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音画质重生音频控制控制信息。
 */
export interface RebuildAudioInfo {
    /**
     * 音频降噪控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioDenoiseInfo?: AudioDenoiseInfo;
}
/**
 * RemoveWatermark返回参数结构体
 */
export interface RemoveWatermarkResponse {
    /**
     * 任务 ID 。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音画质重生模板详情。
 */
export interface RebuildMediaTemplate {
    /**
     * 音画质重生模板号。
     */
    Definition?: number;
    /**
     * 模板类型，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 音画质重生模板名称。
     */
    Name?: string;
    /**
     * 音画质重生模板描述。
     */
    Comment?: string;
    /**
     * 音画质重生视频控制信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RebuildVideoInfo?: RebuildVideoInfo;
    /**
     * 音画质重生音频控制信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RebuildAudioInfo?: RebuildAudioInfo;
    /**
     * 输出视频控制信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /**
     * 输出音频控制信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /**
     * 封装格式。可选值：mp4、hls。默认是 mp4。
     */
    Container?: string;
    /**
     * 是否去除视频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值 0。
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值 0。
     */
    RemoveAudio?: number;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
}
/**
 * CreatePersonSample返回参数结构体
 */
export interface CreatePersonSampleResponse {
    /**
     * 素材信息。
     */
    Person?: AiSamplePerson;
    /**
     * 处理失败的五官定位信息。
     */
    FailFaceInfoSet?: Array<AiSampleFailFaceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateContentReviewTemplate返回参数结构体
 */
export interface CreateContentReviewTemplateResponse {
    /**
     * 音视频内容审核模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAnimatedGraphicsTemplate请求参数结构体
 */
export interface ModifyAnimatedGraphicsTemplateRequest {
    /**
     * 转动图模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 转动图模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width?: number;
    /**
     * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 动图格式，取值为 gif 和 webp。
     */
    Format?: string;
    /**
     * 帧率，取值范围：[1, 30]，单位：Hz。
     */
    Fps?: number;
    /**
     * 图片质量，取值范围：[1, 100]，默认值为 75。
     */
    Quality?: number;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
}
/**
 * DescribeAIAnalysisTemplates请求参数结构体
 */
export interface DescribeAIAnalysisTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音视频内容分析模板唯一标识过滤条件，数组长度最大值：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * CreateHeadTailTemplate请求参数结构体
 */
export interface CreateHeadTailTemplateRequest {
    /**
     * 模板名，长度限制 64 个字符。
     */
    Name: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 模板描述信息，长度限制 256 个字符。
     */
    Comment?: string;
    /**
     * 片头候选列表，填写视频的 FileId。转码时将自动选择与正片宽高比最接近的一个片头（相同宽高比时，靠前的候选项优先）。最多支持 5 个候选片头。
     */
    HeadCandidateSet?: Array<string>;
    /**
     * 片尾候选列表，填写视频的 FileId。转码时将自动选择与正片宽高比最接近的一个片尾（相同宽高比时，靠前的候选项优先）。最多支持 5 个候选片尾。
     */
    TailCandidateSet?: Array<string>;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li> gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊；</li>
  <li> white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充；</li>
  <li> black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  默认值：stretch 。
     */
    FillType?: string;
}
/**
 * 采样截图信息
 */
export interface MediaSampleSnapshotItem {
    /**
     * 采样截图规格 ID，参见[采样截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.87.87.E6.A0.B7.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
     */
    Definition?: number;
    /**
     * 采样方式，取值范围：
  <li>Percent：根据百分比间隔采样。</li>
  <li>Time：根据时间间隔采样。</li>
     */
    SampleType?: string;
    /**
     * 采样间隔
  <li>当 SampleType 为 Percent 时，该值表示多少百分比一张图。</li>
  <li>当 SampleType 为 Time 时，该值表示多少时间间隔一张图，单位秒， 第一张图均为视频首帧。</li>
     */
    Interval?: number;
    /**
     * 生成的截图 url 列表。
     */
    ImageUrlSet?: Array<string>;
    /**
     * 截图如果被打上了水印，被打水印的模板 ID 列表。
     */
    WaterMarkDefinition?: Array<number | bigint>;
}
/**
 * 智能标签任务控制参数
 */
export interface TagConfigureInfoForUpdate {
    /**
     * 智能标签任务开关，可选值：
  <li>ON：开启智能标签任务；</li>
  <li>OFF：关闭智能标签任务。</li>
     */
    Switch?: string;
}
/**
 * DeleteWordSamples请求参数结构体
 */
export interface DeleteWordSamplesRequest {
    /**
     * 关键词，数组长度限制：100 个词。
     */
    Keywords: Array<string>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * FastEditMedia返回参数结构体
 */
export interface FastEditMediaResponse {
    /**
     * 快速编辑后的视频的媒体文件的唯一标识。
     */
    FileId?: string;
    /**
     * 快速编辑后的媒体播放地址。
     */
    Url?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 空的轨道片段，用来进行时间轴的占位。如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。
 */
export interface EmptyTrackItem {
    /**
     * 持续时间，单位为秒。
     */
    Duration: number;
}
/**
 * 贴图轨上的贴图信息。
 */
export interface StickerTrackItem {
    /**
     * 贴图片段的媒体素材来源，可以是：
  <li>点播的媒体文件 ID；</li>
  <li>其他媒体文件的下载 URL。</li>
  注意：当使用其他媒体文件的下载 URL 作为素材来源，且开启了访问控制（如防盗链）时，需要在 URL 携带访问控制参数（如防盗链签名）。
     */
    SourceMedia: string;
    /**
     * 贴图的持续时间，单位为秒。
     */
    Duration: number;
    /**
     * 贴图在轨道上的起始时间，单位为秒。
     */
    StartTime?: number;
    /**
     * 原点位置，取值有：
  <li>Center：坐标原点为中心位置，如画布中心。</li>
  默认值：Center。
     */
    CoordinateOrigin?: string;
    /**
     * 贴图原点距离画布原点的水平位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示贴图 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布宽度的 10%。</li><li>当字符串以 px 结尾，表示贴图 XPos 单位为像素，如 100px 表示 XPos 为 100 像素。</li>
  默认值：0px。
     */
    XPos?: string;
    /**
     * 贴图原点距离画布原点的垂直位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示贴图 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
  <li>当字符串以 px 结尾，表示贴图 YPos 单位为像素，如 100px 表示 YPos 为 100 像素。</li>
  默认值：0px。
     */
    YPos?: string;
    /**
     * 贴图的宽度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示贴图 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。</li>
  <li>当字符串以 px 结尾，表示贴图 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
  <li>当 Width、Height 均为空，则 Width 和 Height 取贴图素材本身的 Width、Height。</li>
  <li>当 Width 为空0，Height 非空，则 Width 按比例缩放</li>
  <li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
     */
    Width?: string;
    /**
     * 贴图的高度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示贴图 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%。</li>
  <li>当字符串以 px 结尾，表示贴图 Height 单位为像素，如 100px 表示 Hieght 为 100 像素。</li>
  <li>当 Width、Height 均为空，则 Width 和 Height 取贴图素材本身的 Width、Height。</li>
  <li>当 Width 为空，Height 非空，则 Width 按比例缩放</li>
  <li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
     */
    Height?: string;
    /**
     * 对贴图进行的操作，如图像旋转等。
     */
    ImageOperations?: Array<ImageTransform>;
}
/**
 * DescribeDrmDataKey返回参数结构体
 */
export interface DescribeDrmDataKeyResponse {
    /**
     * 密钥列表，包含加密的数据密钥。
     */
    KeyList?: Array<SimpleAesEdkPair>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ProcessMedia请求参数结构体
 */
export interface ProcessMediaRequest {
    /**
     * 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。
     */
    FileId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 视频处理类型任务参数。
     */
    MediaProcessTask?: MediaProcessTaskInput;
    /**
     * 音视频内容审核类型任务参数 \*。
  <font color=red>\* 不建议使用</font>，推荐使用 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 或 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217)。
     */
    AiContentReviewTask?: AiContentReviewTaskInput;
    /**
     * 音视频内容分析类型任务参数。
     */
    AiAnalysisTask?: AiAnalysisTaskInput;
    /**
     * 音视频内容识别类型任务参数。
     */
    AiRecognitionTask?: AiRecognitionTaskInput;
    /**
     * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。
     */
    TasksNotifyMode?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * DescribeMediaPlayStatDetails返回参数结构体
 */
export interface DescribeMediaPlayStatDetailsResponse {
    /**
     * 播放统计数据。
     */
    PlayStatInfoSet?: Array<PlayStatInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频流配置参数
 */
export interface VideoTemplateInfo {
    /**
     * 视频流的编码格式，可选值：
  <li>libx264：H.264 编码；</li>
  <li>libx265：H.265 编码；</li>
  <li>av1：AOMedia Video 1 编码；</li>
  <li>H.266：H.266 编码。</li>
  <font color=red>注意：</font>
  <li> av1，H.266 编码容器目前只支持 mp4 ；</li>
  <li> H.266 目前只支持恒定 CRF 码率控制方式。 </li>
     */
    Codec: string;
    /**
     * 视频帧率，取值范围：[0, 100]，单位：Hz。
  当取值为 0，表示帧率和原始视频保持一致。
     */
    Fps: number;
    /**
     * 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。
  当取值为 0，表示视频码率和原始视频保持一致。
     */
    Bitrate: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 8192]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width?: number;
    /**
     * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 8192]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height?: number;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  <li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
  <li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。</li>
  默认值：black 。
     */
    FillType?: string;
    /**
     * 视频恒定码率控制因子，取值范围为[1, 51]。
  
  <font color=red>注意：</font>
  <li>如果指定该参数，将使用 CRF 的码率控制方式做转码（视频码率将不再生效）；</li>
  <li>当指定视频流编码格式为 H.266 时，该字段必填，推荐值为 28；</li>
  <li>如果没有特殊需求，不建议指定该参数。</li>
     */
    Vcrf?: number;
    /**
     * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。
  当填 0 或不填时，系统将自动设置 gop 长度。
     */
    Gop?: number;
    /**
     * 当原始视频为 HDR（High Dynamic Range）时，转码输出是否依然保持 HDR。取值范围：
  <li>ON: 如果原始文件是 HDR，则转码输出保持 HDR；否则转码输出为 SDR （Standard Dynamic Range）。</li>
  <li>OFF: 无论原始文件是 HDR 还是 SDR，转码输出均为 SDR。</li>
  默认值：OFF。
     */
    PreserveHDRSwitch?: string;
    /**
     * 编码标签，仅当视频流的编码格式为 H.265 编码时有效，可选值：
  <li>hvc1 表示 hvc1 标签；</li>
  <li>hev1 表示 hev1 标签。 </li>
  默认值：hvc1。
     */
    CodecTag?: string;
}
/**
 * 文本鉴别涉及令人不适宜的信息的任务控制参数
 */
export interface PoliticalOcrReviewTemplateInfo {
    /**
     * 文本鉴别涉及令人不适宜的信息的任务开关，可选值：
  <li>ON：开启文本鉴别涉及令人不适宜的信息的任务；</li>
  <li>OFF：关闭文本鉴别涉及令人不适宜的信息的任务。</li>
     */
    Switch: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 文本鉴别涉及令人反感的信息的任务控制参数。
 */
export interface PornOcrReviewTemplateInfoForUpdate {
    /**
     * 文本鉴别涉及令人反感的信息的任务开关，可选值：
  <li>ON：开启文本鉴别涉及令人反感的信息的任务；</li>
  <li>OFF：关闭文本鉴别涉及令人反感的信息的任务。</li>
     */
    Switch?: string;
    /**
     * 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 音视频审核 Ocr 文字涉及令人反感的信息的任务结果类型
 */
export interface AiReviewTaskPornOcrResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核 Ocr 文字涉及令人反感的信息的任务输入。
     */
    Input?: AiReviewPornOcrTaskInput;
    /**
     * Ocr 文字音视频审核涉及令人反感的信息的任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiReviewPornOcrTaskOutput;
    /**
     * Ocr 文字音视频审核涉及令人反感的信息的任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * ModifyContentReviewTemplate返回参数结构体
 */
export interface ModifyContentReviewTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeWatermarkTemplates请求参数结构体
 */
export interface DescribeWatermarkTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 水印类型过滤条件，可选值：
  <li>image：图片水印；</li>
  <li>text：文字水印；</li>
  <li>svg：SVG 水印。</li>
     */
    Type?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 水印模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 返回记录条数
  <li>默认值：10；</li>
  <li>最大值：100。</li>
     */
    Limit?: number;
}
/**
 * 去伪影（毛刺）控制信息
 */
export interface ArtifactRepairInfo {
    /**
     * 去伪影（毛刺）控制开关，可选值：
  <li>ON：开启去伪影（毛刺）；</li>
  <li>OFF：关闭去伪影（毛刺）。</li>
     */
    Switch: string;
    /**
     * 去伪影（毛刺）类型，仅当去伪影（毛刺）控制开关为 ON 时有效，可选值：
  <li>weak：轻去伪影（毛刺）；</li>
  <li>strong：强去伪影（毛刺）。</li>
  默认值：weak。
     */
    Type?: string;
}
/**
 * 对视频截图做封面任务输入参数类型
 */
export interface CoverBySnapshotTaskInput {
    /**
     * 指定时间点截图模板 ID。
     */
    Definition: number;
    /**
     * 截图方式。包含：
  <li>Time：依照时间点截图</li>
  <li>Percent：依照百分比截图</li>
     */
    PositionType: string;
    /**
     * 截图位置：
  <li>对于依照时间点截图，该值表示指定视频第几秒的截图作为封面</li>
  <li>对于依照百分比截图，该值表示使用视频百分之多少的截图作为封面</li>
     */
    PositionValue: number;
    /**
     * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
     */
    WatermarkSet?: Array<WatermarkInput>;
}
/**
 * 视频拆条识别任务控制参数
 */
export interface SegmentConfigureInfoForUpdate {
    /**
     * 视频拆条识别任务开关，可选值：
  <li>ON：开启智能视频拆条识别任务；</li>
  <li>OFF：关闭智能视频拆条识别任务。</li>
     */
    Switch?: string;
}
/**
 * 音画质重生任务的输入。
 */
export interface RebuildMediaTaskInput {
    /**
     * 媒体文件 ID。
     */
    FileId?: string;
    /**
     * 起始偏移时间，单位：秒，不填表示从视频开始截取。
     */
    StartTimeOffset?: number;
    /**
     * 结束偏移时间，单位：秒，不填表示截取到视频末尾。
     */
    EndTimeOffset?: number;
    /**
     * 音画质重生模版号。
     */
    Definition?: number;
    /**
     * 画质修复控制参数。
     */
    RepairInfo?: RepairInfo;
    /**
     * 智能插帧控制参数。
     */
    VideoFrameInterpolationInfo?: VideoFrameInterpolationInfo;
    /**
     * 画面超分控制参数。
     */
    SuperResolutionInfo?: SuperResolutionInfo;
    /**
     * 高动态范围类型控制参数。
     */
    HDRInfo?: HDRInfo;
    /**
     * 视频降噪控制参数。
     */
    VideoDenoiseInfo?: VideoDenoiseInfo;
    /**
     * 音频降噪控制参数。
     */
    AudioDenoiseInfo?: AudioDenoiseInfo;
    /**
     * 色彩增强控制参数。
     */
    ColorInfo?: ColorEnhanceInfo;
    /**
     * 细节增强控制参数。
     */
    SharpInfo?: SharpEnhanceInfo;
    /**
     * 人脸增强控制参数。
     */
    FaceInfo?: FaceEnhanceInfo;
    /**
     * 低光照控制参数。
     */
    LowLightInfo?: LowLightEnhanceInfo;
    /**
     * 去划痕控制参数。
     */
    ScratchRepairInfo?: ScratchRepairInfo;
    /**
     * 去伪影（毛刺）控制参数。
     */
    ArtifactRepairInfo?: ArtifactRepairInfo;
    /**
     * 音画质重生输出目标参数。
     */
    TargetInfo?: RebuildMediaTargetInfo;
}
/**
 * 用户自定义音视频审核任务控制参数
 */
export interface UserDefineConfigureInfo {
    /**
     * 用户自定义人物音视频审核控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceReviewInfo?: UserDefineFaceReviewTemplateInfo;
    /**
     * 用户自定义语音音视频审核控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrReviewInfo?: UserDefineAsrTextReviewTemplateInfo;
    /**
     * 用户自定义文本音视频审核控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcrReviewInfo?: UserDefineOcrTextReviewTemplateInfo;
}
/**
 * 视频画面噪点检测的控制参数。
 */
export interface NoiseConfigureInfoForUpdate {
    /**
     * 视频画面噪点检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
}
/**
 * 直播录制信息
 */
export interface LiveRecordInfo {
    /**
     * 直播录制流 ID。
     */
    StreamId?: string;
    /**
     * 录制起始时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    RecordStartTime?: string;
    /**
     * 录制结束时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    RecordEndTime?: string;
}
/**
 * 视频拆条片段。
 */
export interface AiRecognitionTaskSegmentSegmentItem {
    /**
     * 文件 ID。仅当处理的是点播文件并且拆条生成的子片段为点播文件时有效。
     */
    FileId: string;
    /**
     * 视频拆条片段 Url。
     */
    SegmentUrl: string;
    /**
     * 拆条片段置信度。取值：0~100。
     */
    Confidence: number;
    /**
     * 拆条片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 拆条片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
    /**
     * 拆条封面图片 Url。
     */
    CovImgUrl: string;
    /**
     * 特殊字段，请忽略。
     */
    SpecialInfo: string;
}
/**
 * 取回视频任务信息
 */
export interface RestoreMediaTask {
    /**
     * 文件ID。
     */
    FileId: string;
    /**
     * 文件原始存储类型。
     */
    OriginalStorageClass: string;
    /**
     * 文件目标存储类型。对于临时取回，目标存储类型与原始存储类型相同。
     */
    TargetStorageClass: string;
    /**
     * 取回模式，取值：
  <li>Expedited：极速模式</li>
  <li>Standard：标准模式</li>
  <li>Bulk：批量模式</li>
     */
    RestoreTier: string;
    /**
     * 临时取回副本有效期，单位：天。对于永久取回，取值为0。
     */
    RestoreDay: number;
    /**
     * 该字段已废弃。
     */
    Status: number;
    /**
     * 该字段已废弃。
     */
    Message: string;
}
/**
 * 音视频审核 Ocr 文字涉及令人反感的信息的任务输入参数类型
 */
export interface AiReviewPornOcrTaskInput {
    /**
     * 鉴别涉及令人反感的信息的模板 ID。
     */
    Definition?: number;
}
/**
 * 文本关键词识别控制参数。
 */
export interface OcrWordsConfigureInfo {
    /**
     * 文本关键词识别任务开关，可选值：
  <li>ON：开启文本关键词识别任务；</li>
  <li>OFF：关闭文本关键词识别任务。</li>
     */
    Switch: string;
    /**
     * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
}
/**
 * CreateSuperPlayerConfig返回参数结构体
 */
export interface CreateSuperPlayerConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能按帧标签结果信息
 */
export interface AiAnalysisTaskFrameTagOutput {
    /**
     * 视频按帧标签列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet: Array<MediaAiAnalysisFrameTagSegmentItem>;
    /**
     * 视频按帧标签列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl: string;
    /**
     * 视频按帧标签列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime: string;
}
/**
 * CreateEnhanceMediaTemplate返回参数结构体
 */
export interface CreateEnhanceMediaTemplateResponse {
    /**
     * 音画质重生模板 ID。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteReviewTemplate返回参数结构体
 */
export interface DeleteReviewTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DNS解析验证信息
 */
export interface DNSVerifyInfo {
    /**
     * 子解析。
     */
    SubDomain?: string;
    /**
     * 解析值。
     */
    Record?: string;
    /**
     * 解析类型。
     */
    RecordType?: string;
}
/**
 * 视频转动图结果信息
 */
export interface MediaAnimatedGraphicsItem {
    /**
     * 转动图的文件地址。
     */
    Url?: string;
    /**
     * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/266/33481#.3Cspan-id-.3D-.22zdt.22.3E.3C.2Fspan.3E.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
     */
    Definition?: number;
    /**
     * 动图格式，如 gif。
     */
    Container?: string;
    /**
     * 动图的高度，单位：px。
     */
    Height?: number;
    /**
     * 动图的宽度，单位：px。
     */
    Width?: number;
    /**
     * 动图码率，单位：bps。
     */
    Bitrate?: number;
    /**
     * 动图大小，单位：字节。
     */
    Size?: number;
    /**
     * 动图的md5值。
     */
    Md5?: string;
    /**
     * 动图在视频中的起始时间偏移，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 动图在视频中的结束时间偏移，单位：秒。
     */
    EndTimeOffset?: number;
}
/**
 * 语音翻译的输入。
 */
export interface AiRecognitionTaskAsrTranslateResultInput {
    /**
     * 语音翻译模板 ID。
     */
    Definition?: number;
}
/**
 * 全景录制信息
 */
export interface WebPageRecordInfo {
    /**
     * 全景录制地址。
     */
    RecordUrl?: string;
    /**
     * 全景录制任务 ID。
     */
    RecordTaskId?: string;
}
/**
 * DescribeCDNUsageData返回参数结构体
 */
export interface DescribeCDNUsageDataResponse {
    /**
     * 时间粒度，单位：分钟。
     */
    DataInterval?: number;
    /**
     * CDN 统计数据。
     */
    Data?: Array<StatDataItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWordSample请求参数结构体
 */
export interface ModifyWordSampleRequest {
    /**
     * 关键词，长度限制：128 个字符。
     */
    Keyword: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * <b>关键词应用场景，可选值：</b>
  1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
  2. Recognition.Asr：通过音频识别技术，进行内容识别；
  3. Review.Ocr：通过光学字符识别技术，进行不适宜的内容识别；
  4. Review.Asr：通过音频识别技术，进行不适宜的内容识别；
  <b>可合并简写为：</b>
  5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；
  6. Review：通过光学字符识别技术、音频识别技术，进行不适宜的内容识别，等价于 3+4；
  7. All：包含以上全部，等价于 1+2+3+4。
     */
    Usages?: Array<string>;
    /**
     * 标签操作信息。
     */
    TagOperationInfo?: AiSampleTagOperation;
}
/**
 * 编辑视频任务信息
 */
export interface EditMediaTask {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 任务流状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败：
  <li>40000：输入参数不合法，请检查输入参数；</li>
  <li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
  <li>70000：内部服务错误，建议重试。</li>
     */
    ErrCode?: number;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 编辑视频任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 视频编辑任务的输入。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input?: EditMediaTaskInput;
    /**
     * 视频编辑任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: EditMediaTaskOutput;
    /**
     * 输出视频的元信息。
     */
    MetaData?: MediaMetaData;
    /**
     * 任务类型为 Procedure 的任务 ID。若发起[编辑视频](https://cloud.tencent.com/document/api/266/34783)任务时指定了任务流模板(ProcedureName)，当该任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。
     */
    ProcedureTaskId?: string;
    /**
     * 任务类型为 ReviewAudioVideo 的任务 ID。若发起[编辑视频](https://cloud.tencent.com/document/api/266/34783)任务时指定了任务流模板(ProcedureName)，当该任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。
     */
    ReviewAudioVideoTaskId?: string;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
}
/**
 * CreateJustInTimeTranscodeTemplate返回参数结构体
 */
export interface CreateJustInTimeTranscodeTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 即时转码水印模板配置。
 */
export interface WatermarkConfigureData {
    /**
     * 是否启用水印。可取值：
  <li>ON：表示启用水印；</li>
  <li>OFF：表示关闭水印。</li>
     */
    Switch?: string;
    /**
     * 水印 Url。
     */
    Url?: string;
    /**
     * 水印的宽度。
  <li>字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
     */
    Width?: string;
    /**
     * 水印的高度。
  <li>字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
     */
    Height?: string;
    /**
     * 水印原点距离视频图像坐标原点的水平位置。字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；
     */
    XPos?: string;
    /**
     * 水印原点距离视频图像坐标原点的垂直位置。当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%。
     */
    YPos?: string;
}
/**
 * DeleteMedia返回参数结构体
 */
export interface DeleteMediaResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySnapshotByTimeOffsetTemplate返回参数结构体
 */
export interface ModifySnapshotByTimeOffsetTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteHeadTailTemplate请求参数结构体
 */
export interface DeleteHeadTailTemplateRequest {
    /**
     * 片头片尾模板号。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 智能标签结果类型
 */
export interface AiAnalysisTaskTagResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 智能标签任务输入。
     */
    Input?: AiAnalysisTaskTagInput;
    /**
     * 智能标签任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiAnalysisTaskTagOutput;
    /**
     * 智能标签任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 智能标签任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 智能标签任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * SearchMedia返回参数结构体
 */
export interface SearchMediaResponse {
    /**
     * 符合搜索条件的记录总数。
  <li>最大值：5000。当命中记录数超过5000时，该字段将返回 5000，而非实际命中总数。</li>
     */
    TotalCount?: number;
    /**
     * 媒体文件信息列表。
     */
    MediaInfoSet?: Array<MediaInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyAIAnalysisTemplate返回参数结构体
 */
export interface ModifyAIAnalysisTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能去除水印任务的输出。
 */
export interface RemoveWaterMarkTaskOutput {
    /**
     * 媒体文件 ID。
     */
    FileId?: string;
    /**
     * 文件类型，例如 mp4、mp3 等。
     */
    FileType?: string;
    /**
     * 媒体文件播放地址。
     */
    FileUrl?: string;
    /**
     * 文件名称，最长 64 个字符。
     */
    MediaName?: string;
    /**
     * 元信息。包括大小、时长、视频流信息、音频流信息等。
     */
    MetaData?: MediaMetaData;
}
/**
 * ModifyMediaStorageClass请求参数结构体
 */
export interface ModifyMediaStorageClassRequest {
    /**
     * 媒体文件唯一标识列表，最大长度：100。
     */
    FileIds: Array<string>;
    /**
     * 目标存储类型。可选值有：
  <li> STANDARD：标准存储。</li>
  <li> STANDARD_IA：低频存储。</li>
  <li> ARCHIVE：归档存储。</li>
  <li> DEEP_ARCHIVE：深度归档存储。</li>
     */
    StorageClass: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 取回模式。当文件的存储类型从归档或深度归档转换为标准存储时，需要指定取回（也称为解冻）操作的模式，具体说明请参考[数据取回及取回模式](https://cloud.tencent.com/document/product/266/56196#retake)。
  当媒体文件目前的存储类型为归档存储时，有以下取值：
  <li>Expedited：极速模式。</li>
  <li>Standard：标准模式。</li>
  <li>Bulk：批量模式。</li>
  当媒体文件目前的存储类型为深度归档存储时，有以下取值：
  <li>Standard：标准模式。</li>
  <li>Bulk：批量模式。</li>
     */
    RestoreTier?: string;
}
/**
 * 智能标签结果信息
 */
export interface AiAnalysisTaskTagOutput {
    /**
     * 视频智能标签列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 TagSetFileUrl 对应的文件中获取。
     */
    TagSet: Array<MediaAiAnalysisTagItem>;
    /**
     * 视频智能标签列表文件 URL。文件的内容为 JSON，数据结构与 TagSet 字段一致。 （文件不会永久存储，到达 TagSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    TagSetFileUrl: string;
    /**
     * 视频智能标签列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    TagSetFileUrlExpireTime: string;
}
/**
 * 视频画面马赛克检测的控制参数。
 */
export interface MosaicConfigureInfo {
    /**
     * 视频画面马赛克检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
}
/**
 * 智能精彩片段结果信息
 */
export interface AiAnalysisTaskHighlightOutput {
    /**
     * 视频智能精彩片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 HighlightSetFileUrl 对应的文件中获取。
     */
    HighlightSet: Array<MediaAiAnalysisHighlightItem>;
    /**
     * 视频智能精彩片段列表文件 URL。文件的内容为 JSON，数据结构与 HighlightSet 字段一致。 （文件不会永久存储，到达 HighlightSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    HighlightSetFileUrl: string;
    /**
     * 视频智能精彩片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    HighlightSetFileUrlExpireTime: string;
}
/**
 * DescribeRebuildMediaTemplates请求参数结构体
 */
export interface DescribeRebuildMediaTemplatesRequest {
    /**
     * 视频重生模板列表。
     */
    Definitions?: Array<number | bigint>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * 图片审核片段。
 */
export interface ReviewImageSegmentItem {
    /**
     * 嫌疑片段涉及令人反感的信息的分数。
     */
    Confidence?: number;
    /**
     * 嫌疑片段鉴别涉及违规信息的结果建议，取值范围：
  <li>review：疑似违规，建议复审；</li>
  <li>block：确认违规，建议封禁。</li>
     */
    Suggestion?: string;
    /**
     * 嫌疑片段最可能的违规的标签，取值范围：
  <li>Porn：色情；</li>
  <li>Terror：暴力；</li>
  <li>Polity：不适宜的信息；</li>
  <li>Ad：广告；</li>
  <li>Illegal：违法；</li>
  <li>Abuse：谩骂。</li>
     */
    Label?: string;
    /**
     * 违规子标签。
     */
    SubLabel?: string;
    /**
     * 嫌疑片段违禁的形式，取值范围：
  <li>Image：画面上的人物或图标；</li>
  <li>OCR：画面上的文字。</li>
     */
    Form?: string;
    /**
     * 嫌疑人物、图标或文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
     */
    AreaCoordSet?: Array<number | bigint>;
    /**
     * 当 Form 为 OCR 时有效，表示识别出来的 OCR 文本内容。
     */
    Text?: string;
    /**
     * 当 Form 为 OCR 时有效，表示嫌疑片段命中的违规关键词列表。
     */
    KeywordSet?: Array<string>;
}
/**
 * CreateCLSTopic返回参数结构体
 */
export interface CreateCLSTopicResponse {
    /**
     * 日志主题 ID。
     */
    TopicId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateRoundPlay返回参数结构体
 */
export interface CreateRoundPlayResponse {
    /**
     * 轮播播单唯一标识。
     */
    RoundPlayId?: string;
    /**
     * 轮播播放地址。
     */
    Url?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 字幕信息输入参数。
 */
export interface MediaSubtitleInput {
    /**
     * 字幕名字，长度限制：64 个字符。
     */
    Name: string;
    /**
     * 字幕语言。常见的取值如下：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>ja：日文；</li>
  <li>ko：韩文；</li>
  <li>vi：越南语；</li>
  <li>ms：马来语；</li>
  <li>th：泰语；</li>
  <li>pt：葡萄牙语；</li>
  <li>tr：土耳其语；</li>
  <li>ar：阿拉伯语；</li>
  <li>es：西班牙语；</li>
  <li>hi：印地语；</li>
  <li>fr：法语。</li>
  其他取值参考 [RFC5646](https://tools.ietf.org/html/rfc5646)
     */
    Language: string;
    /**
     * 字幕格式。取值范围如下：
  <li>vtt</li>
     */
    Format: string;
    /**
     * 字幕内容，进行 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。
     */
    Content: string;
    /**
     * 字幕的唯一标识。长度不能超过16个字符，可以使用大小写字母、数字、下划线（_）或横杠（-）。不能与媒体文件中现有字幕的唯一标识重复。
     */
    Id?: string;
}
/**
 * 文件验证信息
 */
export interface FileVerifyInfo {
    /**
     * 文件验证 URL 指引。
     */
    FileVerifyUrl?: string;
    /**
     * 文件校验域名列表。
     */
    FileVerifyDomains?: Array<string>;
    /**
     * 文件校验文件名。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileVerifyName?: string;
}
/**
 * 人脸增强控制
 */
export interface FaceEnhanceInfo {
    /**
     * 人脸增强控制开关，可选值：
  <li>ON：开启人脸增强；</li>
  <li>OFF：关闭人脸增强。</li>
     */
    Switch: string;
    /**
     * 人脸增强强度，仅当人脸增强控制开关为 ON 时有效，取值范围：0.0~1.0。
  默认：0.0。
     */
    Intensity?: number;
}
/**
 * 图片画面审核涉及令人反感的信息的任务结果类型
 */
export interface PornImageResult {
    /**
     * 鉴别涉及令人反感的信息的评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * 鉴别涉及令人反感的信息的结果建议，取值范围：
  <li>pass；</li>
  <li>review；</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * 鉴别涉及令人反感的信息的结果标签，取值范围：
  <li>porn：色情；</li>
  <li>sexy：性感；</li>
  <li>vulgar：低俗；</li>
  <li>intimacy：亲密行为。</li>
     */
    Label?: string;
}
/**
 * ProcessImage返回参数结构体
 */
export interface ProcessImageResponse {
    /**
     * 图片内容智能识别任务结果。
     */
    ContentReviewResultSet?: Array<ContentReviewResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ProcessImage请求参数结构体
 */
export interface ProcessImageRequest {
    /**
     * 媒体文件 ID，即该文件在云点播上的全局唯一标识符。本接口要求媒体文件必须是图片格式。
     */
    FileId: string;
    /**
     * 操作类型。现在仅支持填 ContentReview，表示内容智能识别。
     */
    Operation: string;
    /**
     * 图片内容智能识别参数，当 Operation 为 ContentReview 时该字段有效。
     */
    ContentReviewInput?: ImageContentReviewInput;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 自适应码流任务信息。
 */
export interface ComplexAdaptiveDynamicStreamingTask {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 任务状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
  
     */
    Status?: string;
    /**
     * 自适应码流任务的执行状态与结果，每个元素对应一个自适应码流模版。
     */
    ComplexAdaptiveDynamicStreamingTaskResultSet?: Array<ComplexAdaptiveDynamicStreamingTaskResult>;
}
/**
 * ModifyMediaInfo返回参数结构体
 */
export interface ModifyMediaInfoResponse {
    /**
     * 新的视频封面 URL。
  * 注意：仅当请求携带 CoverData 时此返回值有效。 *
     */
    CoverUrl?: string;
    /**
     * 新增的字幕信息。
     */
    AddedSubtitleSet?: Array<MediaSubtitleItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyReviewTemplate请求参数结构体
 */
export interface ModifyReviewTemplateRequest {
    /**
     * 审核模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 审核模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 审核模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 需要返回的违规标签列表，可选值为：
  <li>Porn：色情；</li>
  <li>Terror：暴力；</li>
  <li>Polity：不适宜的信息；</li>
  <li>Illegal：违法；</li>
  <li>Abuse：谩骂；</li>
  <li>Ad：广告；</li>
  <li>Moan：娇喘。</li>
  
  注意：不填表示不更新。
     */
    Labels?: Array<string>;
}
/**
 * 文本全文识别结果。
 */
export interface AiRecognitionTaskOcrFullTextResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 文本全文识别任务输入信息。
     */
    Input?: AiRecognitionTaskOcrFullTextResultInput;
    /**
     * 文本全文识别任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiRecognitionTaskOcrFullTextResultOutput;
    /**
     * 文本全文识别任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 文本全文识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 文本全文识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * DescribeCLSTopics返回参数结构体
 */
export interface DescribeCLSTopicsResponse {
    /**
     * 日志主题总数量。
     */
    TotalCount?: number;
    /**
     * 日志主题列表。
     */
    Topics?: Array<CLSTopicInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 媒体轨道的片段信息
 */
export interface MediaTrackItem {
    /**
     * 片段类型。取值有：
  <li>Video：视频片段。</li>
  <li>Audio：音频片段。</li>
  <li>Sticker：贴图片段。</li>
  <li>Transition：转场。</li>
  <li>Empty：空白片段。</li>
     */
    Type: string;
    /**
     * 视频片段，当 Type = Video 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoItem?: VideoTrackItem;
    /**
     * 音频片段，当 Type = Audio 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioItem?: AudioTrackItem;
    /**
     * 贴图片段，当 Type = Sticker 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StickerItem?: StickerTrackItem;
    /**
     * 转场，当 Type = Transition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TransitionItem?: MediaTransitionItem;
    /**
     * 空白片段，当 Type = Empty 时有效。空片段用于时间轴的占位。<li>如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。</li>
  <li>使用 EmptyTrackItem 进行占位，来定位某个Item。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EmptyItem?: EmptyTrackItem;
}
/**
 * RestoreMedia返回参数结构体
 */
export interface RestoreMediaResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 对视频按指定时间点截图任务结果类型
 */
export interface MediaProcessTaskSnapshotByTimeOffsetResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 对视频按指定时间点截图任务输入。
     */
    Input?: SnapshotByTimeOffsetTaskInput;
    /**
     * 对视频按指定时间点截图任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: MediaSnapshotByTimeOffsetItem;
    /**
     * 对视频按指定时间点截图任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 时间点截图任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 时间点截图任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * ModifyEnhanceMediaTemplate返回参数结构体
 */
export interface ModifyEnhanceMediaTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * EnhanceMediaByTemplate返回参数结构体
 */
export interface EnhanceMediaByTemplateResponse {
    /**
     * 音画质重生的任务 ID，可以通过该 ID 查询音画质重生任务的状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateJustInTimeTranscodeTemplate请求参数结构体
 */
export interface CreateJustInTimeTranscodeTemplateRequest {
    /**
     * 模板名字，长度限制64个字符。
     */
    Name: string;
    /**
     * 视频参数配置。
     */
    VideoConfigure: VideoConfigureInfo;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 水印参数配置。
     */
    WatermarkConfigure?: WatermarkConfigureInfo;
    /**
     * 模板描述，长度限制256个字符。
     */
    Comment?: string;
}
/**
 * 自适应码流任务多语言音频流输入参数。
 */
export interface ComplexAdaptiveDynamicStreamingTaskAudioInput {
    /**
     * 音频源的媒体 ID。固定取该媒体中的首个音频流，视频流和其它音频流（如有）将被忽略。
     */
    FileId: string;
    /**
     * 输出的自适应码流中的音频流名称，长度限制为16个字符。
     */
    Name: string;
    /**
     * 输出的自适应码流中的音频流语言，长度限制为16个字符。要求符合 RFC5646 规范。
     */
    Language: string;
    /**
     * 是否设置为自适应码流的默认音频。取值：
  <li>YES：设置为默认音频；</li>
  <li>NO：不设置为默认音频（默认值）。</li>
  
     */
    Default?: string;
}
/**
 * ManageTask请求参数结构体
 */
export interface ManageTaskRequest {
    /**
     * 视频处理的任务 ID。
     */
    TaskId: string;
    /**
     * 操作类型，取值范围：
  <li>Abort：终止任务。只能终止已发起且状态为等待中（WAITING）的任务。</li>
     */
    OperationType: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 轮播播放节目信息
 */
export interface RoundPlayListItemInfo {
    /**
     * 媒体文件标识。
     */
    FileId: string;
    /**
     * 播放的音视频类型，可选值：
  <li>Transcode：转码输出；转码输出会有多个模版，必须指定 Definition 字段</li>
  <li>Original：原始音视频。</li>
  Type 对应的格式必须为 HLS 格式。
     */
    AudioVideoType: string;
    /**
     * 播放节目的 ID，由系统分配。
     */
    ItemId?: string;
    /**
     * 指定播放的转码模板，当 AudioVideoType 为 Transcode 时必须指定。
     */
    Definition?: number;
}
/**
 * ModifyEventConfig请求参数结构体
 */
export interface ModifyEventConfigRequest {
    /**
     * 接收事件通知的方式。
  <li>PUSH：[HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779)；</li>
  <li>PULL：[基于消息队列的可靠通知](https://cloud.tencent.com/document/product/266/33779)。</li>
     */
    Mode?: string;
    /**
     * 采用 [HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779) 接收方式时，用于接收 3.0 格式回调的地址。
  注意：如果带 NotificationUrl  参数且值为空字符串时将会清空 3.0 格式回调地址。
     */
    NotificationUrl?: string;
    /**
     * 是否接收 [视频上传完成](https://cloud.tencent.com/document/product/266/7830) 事件通知， 默认 "OFF" 为忽略该事件通知，"ON" 为接收事件通知。
     */
    UploadMediaCompleteEventSwitch?: string;
    /**
     * 是否接收 [视频删除完成](https://cloud.tencent.com/document/product/266/13434) 事件通知，  默认 "OFF" 为忽略该事件通知，"ON" 为接收事件通知。
     */
    DeleteMediaCompleteEventSwitch?: string;
    /**
     * 是否接收剪辑固化完成事件通知，  默认 "OFF" 为忽略该事件通知，"ON" 为接收事件通知。
     */
    PersistenceCompleteEventSwitch?: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 语音关键词识别输出。
 */
export interface AiRecognitionTaskAsrWordsResultOutput {
    /**
     * 语音关键词识别结果集。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ResultSetFileUrl 对应的文件中获取。
     */
    ResultSet: Array<AiRecognitionTaskAsrWordsResultItem>;
    /**
     * 语音关键词识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达ResultSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    ResultSetFileUrl: string;
    /**
     * 语音关键词识别结果集文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ResultSetFileUrlExpireTime: string;
}
/**
 * DescribeHeadTailTemplates请求参数结构体
 */
export interface DescribeHeadTailTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 片头片尾模板号，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * ModifyAdaptiveDynamicStreamingTemplate返回参数结构体
 */
export interface ModifyAdaptiveDynamicStreamingTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 转码任务结果类型
 */
export interface MediaProcessTaskTranscodeResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 转码任务的输入。
     */
    Input?: TranscodeTaskInput;
    /**
     * 转码任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: MediaTranscodeItem;
    /**
     * 转码进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 转码任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 转码任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * 视频画面模糊检测的控制参数。
 */
export interface BlurConfigureInfoForUpdate {
    /**
     * 视频画面模糊检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
}
/**
 * 视频流配置信息
 */
export interface EditMediaVideoStream {
    /**
     * 视频流的编码格式，可选值：
  <li>libx264：H.264 编码；</li>
  <li>libx265：H.265 编码；</li>
  <li>av1：AOMedia Video 1 编码；</li>
  <li>H.266：H.266 编码。</li>
     */
    Codec?: string;
    /**
     * 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。
  当取值为 0 或不填时，表示自动选择最佳视频码率。
     */
    Bitrate?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率取基准分辨率；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按基准分辨率比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按基准分辨率比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width?: number;
    /**
     * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率取基准分辨率；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按基准分辨率比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按基准分辨率比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height?: number;
    /**
     * 视频帧率，取值范围：[0, 100]，单位：Hz。
  当取值为0，将自动为视频设置帧率。
  默认值为 0。
     */
    Fps?: number;
}
/**
 * 提取溯源水印任务。
 */
export interface ExtractTraceWatermarkTask {
    /**
     * 任务 ID。
     */
    TaskId: string;
    /**
     * 任务状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status: string;
    /**
     * 错误码，0 表示成功，其他值表示失败：
  <li>40000：输入参数不合法，请检查输入参数；</li>
  <li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
  <li>70000：内部服务错误，建议重试。</li>
     */
    ErrCode: number;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt: string;
    /**
     * 提取溯源水印任务输入信息。
     */
    Input: ExtractTraceWatermarkTaskInput;
    /**
     * 提取溯源水印任务输出信息。
     */
    Output: ExtractTraceWatermarkTaskOutput;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext: string;
}
/**
 * 视频拆条输出。
 */
export interface AiRecognitionTaskSegmentResultOutput {
    /**
     * 视频拆条片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet: Array<AiRecognitionTaskSegmentSegmentItem>;
    /**
     * 视频拆条片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl: string;
    /**
     * 视频拆条片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime: string;
}
/**
 * 对视频截雪碧图任务输入参数类型
 */
export interface ImageSpriteTaskInput {
    /**
     * 雪碧图模板 ID。
     */
    Definition: number;
}
/**
 * 物体识别任务控制参数
 */
export interface ObjectConfigureInfoForUpdate {
    /**
     * 物体识别任务开关，可选值：
  <li>ON：开启智能物体识别任务；</li>
  <li>OFF：关闭智能物体识别任务。</li>
     */
    Switch?: string;
    /**
     * 物体库选择，可选值：
  <li>Default：使用默认物体库；</li>
  <li>UserDefine：使用用户自定义物体库。</li>
  <li>All：同时使用默认物体库和用户自定义物体库。</li>
     */
    ObjectLibrary?: string;
}
/**
 * DeleteMedia请求参数结构体
 */
export interface DeleteMediaRequest {
    /**
     * 媒体文件的唯一标识。
     */
    FileId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 指定本次需要删除的部分。默认值为 "[]", 表示删除媒体及其对应的全部视频处理文件。
     */
    DeleteParts?: Array<MediaDeleteItem>;
}
/**
 * DescribeReviewTemplates请求参数结构体
 */
export interface DescribeReviewTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 审核模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * CreateSuperPlayerConfig请求参数结构体
 */
export interface CreateSuperPlayerConfigRequest {
    /**
     * 播放器配置名称，长度限制：64 个字符。只允许出现 [0-9a-zA-Z] 及 _- 字符（如 test_ABC-123），同一个用户该名称唯一。
     */
    Name: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 播放的音视频类型，可选值：
  <li>AdaptiveDynamicStream：自适应码流输出；</li>
  <li>Transcode：转码输出；</li>
  <li>Original：原始音视频。</li>
  默认为 AdaptiveDynamicStream。
     */
    AudioVideoType?: string;
    /**
     * 播放 DRM 保护的自适应码流开关：
  <li>ON：开启，表示仅播放 DRM  保护的自适应码流输出；</li>
  <li>OFF：关闭，表示播放未加密的自适应码流输出。</li>
  默认为 OFF。
  当 AudioVideoType 为 AdaptiveDynamicStream 时，此参数有效。
     */
    DrmSwitch?: string;
    /**
     * 允许输出的未加密的自适应码流模板 ID。
  
  当 AudioVideoType 为 AdaptiveDynamicStream 并且 DrmSwitch 为 OFF 时，此参数为必填。
     */
    AdaptiveDynamicStreamingDefinition?: number;
    /**
     * 允许输出的 DRM 自适应码流模板内容。
  
  当 AudioVideoType 为 AdaptiveDynamicStream 并且 DrmSwitch 为 ON 时，此参数为必填。
     */
    DrmStreamingsInfo?: DrmStreamingsInfo;
    /**
     * 允许输出的转码模板 ID。
  
  当 AudioVideoType 为 Transcode 时必填。
     */
    TranscodeDefinition?: number;
    /**
     * 允许输出的雪碧图模板 ID。
     */
    ImageSpriteDefinition?: number;
    /**
     * 播放器对于不同分辨率的子流展示名字，不填或者填空数组则使用默认配置：
  <li>MinEdgeLength：240，Name：流畅；</li>
  <li>MinEdgeLength：480，Name：标清；</li>
  <li>MinEdgeLength：720，Name：高清；</li>
  <li>MinEdgeLength：1080，Name：全高清；</li>
  <li>MinEdgeLength：1440，Name：2K；</li>
  <li>MinEdgeLength：2160，Name：4K；</li>
  <li>MinEdgeLength：4320，Name：8K。</li>
     */
    ResolutionNames?: Array<ResolutionNameInfo>;
    /**
     * 播放时使用的域名。不填或者填 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。
     */
    Domain?: string;
    /**
     * 播放时使用的 Scheme。不填或者填 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme。其他可选值：
  <li>HTTP；</li>
  <li>HTTPS。</li>
     */
    Scheme?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
}
/**
 * 图片水印模板
 */
export interface ImageWatermarkTemplate {
    /**
     * 水印图片地址。
     */
    ImageUrl: string;
    /**
     * 水印的宽度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
     */
    Width: string;
    /**
     * 水印的高度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；</li>
  0px：表示 Height 按照 Width 对视频宽度的比例缩放。
     */
    Height: string;
    /**
     * 水印重复类型。使用场景：水印为动态图像。取值范围：
  <li>once：动态水印播放完后，不再出现；</li>
  <li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
  <li>repeat：水印循环播放，直到视频结束。</li>
     */
    RepeatType: string;
    /**
     * 图片透明度，取值范围：[0, 100]
  <li>0：完全不透明</li>
  <li>100：完全透明。</li>
     */
    Transparency: number;
}
/**
 * ModifySubAppIdInfo返回参数结构体
 */
export interface ModifySubAppIdInfoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 语音关键词识别控制参数。
 */
export interface AsrWordsConfigureInfo {
    /**
     * 语音关键词识别任务开关，可选值：
  <li>ON：开启语音关键词识别任务；</li>
  <li>OFF：关闭语音关键词识别任务。</li>
     */
    Switch: string;
    /**
     * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
}
/**
 * 日志推送目标。
 */
export interface AreaCLSTargetInfo {
    /**
     * 日志集所属地区：
  <li>ap-guangzhou：广州；</li>
  <li>ap-beijing：北京；</li>
  <li>ap-chengdu：成都；</li>
  <li>ap-chongqing：重庆；</li>
  <li>ap-nanjing：南京；</li>
  <li>ap-shanghai：上海；</li>
  <li>ap-singapore：新加坡。</li>
     */
    CLSRegion: string;
    /**
     * 投递的目标主题 ID。
     */
    TopicId: string;
    /**
     * 投递的目标集 ID。
     */
    LogsetId: string;
    /**
     * 日志投递状态。
   ON：启用；
   OFF：停用。
     */
    Switch?: string;
}
/**
 * DeleteRebuildMediaTemplate返回参数结构体
 */
export interface DeleteRebuildMediaTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSubAppIds返回参数结构体
 */
export interface DescribeSubAppIdsResponse {
    /**
     * 应用信息集合。
     */
    SubAppIdInfoSet?: Array<SubAppIdInfo>;
    /**
     * 应用总数量。
     */
    TotalCount?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SimpleHlsClip请求参数结构体
 */
export interface SimpleHlsClipRequest {
    /**
     * 需要裁剪的腾讯云点播 HLS 视频 URL。
     */
    Url: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 裁剪的开始偏移时间，单位秒。默认 0，即从视频开头开始裁剪。负数表示距离视频结束多少秒开始裁剪。例如 -10 表示从倒数第 10 秒开始裁剪。
     */
    StartTimeOffset?: number;
    /**
     * 裁剪的结束偏移时间，单位秒。默认 0，即裁剪到视频尾部。负数表示距离视频结束多少秒结束裁剪。例如 -10 表示到倒数第 10 秒结束裁剪。
     */
    EndTimeOffset?: number;
    /**
     * 是否固化。0 不固化，1 固化。默认不固化。
     */
    IsPersistence?: number;
    /**
     * 剪辑固化后的视频存储过期时间。格式参照 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。仅 IsPersistence 为 1 时有效，默认剪辑固化的视频永不过期。
     */
    ExpireTime?: string;
    /**
     * 剪辑固化后的视频点播任务流处理，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。仅 IsPersistence 为 1 且 Precision 为 Rough 时有效。
     */
    Procedure?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
  仅 IsPersistence 为 1 时有效。
     */
    ClassId?: number;
    /**
     * 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。仅 IsPersistence 为 1 时有效。
     */
    SourceContext?: string;
    /**
     * 会话上下文，用于透传用户请求信息，当指定 Procedure 参数后，[任务流状态变更回调](/document/product/266/9636) 将返回该字段值，最长 1000 个字符。仅 IsPersistence 为 1 时有效。
     */
    SessionContext?: string;
    /**
     * 裁剪精度，取值有：<li>Rough: 粗略裁剪，最小剪辑精度是单个 ts 分片；</li><li>Precise: 精确裁剪，做到按照剪辑时间点的毫秒级精确剪辑。</li> 默认取值 Rough。
     */
    Precision?: string;
    /**
     * 输出视频类型，取值有：<li>hls: 输出 hls 文件；</li><li>mp4：输出 mp4 文件，MP4 文件的大小不超过5G，时长小于2小时。仅当 Precision 选择 Precise 且 IsPersistence  选择0时有效，即只有非固化的精确剪辑时支持输出 MP4。</li>默认取值 hls。
     */
    OutputMediaType?: string;
    /**
     * 保留字段，特殊用途时使用。 示例值：""
     */
    ExtInfo?: string;
}
/**
 * 指定删除点播视频时的删除内容
 */
export interface MediaDeleteItem {
    /**
     * 所指定的删除部分。如果未填写该字段则参数无效。可选值有：
  <li>OriginalFiles（删除原文件，删除后无法发起转码、微信发布等任何视频处理操作）；</li>
  <li>TranscodeFiles（删除转码文件）；</li>
  <li>AdaptiveDynamicStreamingFiles（删除转自适应码流文件）；</li>
  <li>WechatPublishFiles（删除微信发布文件）；</li>
  <li>WechatMiniProgramPublishFiles（删除微信小程序发布文件）。</li>
  <font color=red>注意：</font> <li>取值为OriginalFiles时，文件上传时携带的封面文件会被删除；</li>
  <li>取值为TranscodeFiles时，媒体处理产生的封面文件会被删除。</li>
     */
    Type: string;
    /**
     * 删除由Type参数指定的种类下的视频模板号，模板定义参见[转码模板](https://cloud.tencent.com/document/product/266/33478#.3Cspan-id-.3D-.22zm.22-.3E.3C.2Fspan.3E.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
  默认值为0，表示删除参数Type指定种类下所有的视频。
     */
    Definition?: number;
}
/**
 * 图片画面审核涉及令人不适宜信息的任务结果类型
 */
export interface PoliticalImageResult {
    /**
     * 鉴别涉及令人不适宜信息的评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * 鉴别涉及令人不适宜信息的结果建议，取值范围：
  <li>pass；</li>
  <li>review；</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * 涉及令人不适宜的信息、违规图标名字。
     */
    Name?: string;
    /**
     * 涉及令人不适宜的信息、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
     */
    AreaCoordSet?: Array<number | bigint>;
}
/**
 * AI 样本管理，人物信息。
 */
export interface AiSamplePerson {
    /**
     * 人物 ID。
     */
    PersonId: string;
    /**
     * 人物名称。
     */
    Name: string;
    /**
     * 人物描述。
     */
    Description: string;
    /**
     * 人脸信息。
     */
    FaceInfoSet: Array<AiSampleFaceInfo>;
    /**
     * 人物标签。
     */
    TagSet: Array<string>;
    /**
     * 应用场景。
     */
    UsageSet: Array<string>;
    /**
     * 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime: string;
    /**
     * 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime: string;
}
/**
 * 转自适应码流信息
 */
export interface MediaAdaptiveDynamicStreamingInfo {
    /**
     * 转自适应码流信息数组。
     */
    AdaptiveDynamicStreamingSet: Array<AdaptiveDynamicStreamingInfoItem>;
}
/**
 * DescribeDailyPlayStatFileList请求参数结构体
 */
export interface DescribeDailyPlayStatFileListRequest {
    /**
     * 起始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    StartTime: string;
    /**
     * 结束日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DescribeSuperPlayerConfigs返回参数结构体
 */
export interface DescribeSuperPlayerConfigsResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 播放器配置数组。
     */
    PlayerConfigSet?: Array<PlayerConfig>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 语音关键词识别控制参数。
 */
export interface AsrWordsConfigureInfoForUpdate {
    /**
     * 语音关键词识别任务开关，可选值：
  <li>ON：开启语音关键词识别任务；</li>
  <li>OFF：关闭语音关键词识别任务。</li>
     */
    Switch?: string;
    /**
     * 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
}
/**
 * DescribeStorageData请求参数结构体
 */
export interface DescribeStorageDataRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 即时剪辑后媒体的片段信息。
 */
export interface LiveRealTimeClipMediaSegmentInfo {
    /**
     * 片段的起始时间。格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    StartTime?: string;
    /**
     * 片段的结束时间。格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    EndTime?: string;
}
/**
 * DeleteImageSpriteTemplate返回参数结构体
 */
export interface DeleteImageSpriteTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 低光照增强控制
 */
export interface LowLightEnhanceInfo {
    /**
     * 低光照增强控制开关，可选值：
  <li>ON：开启低光照增强；</li>
  <li>OFF：关闭低光照增强。</li>
     */
    Switch: string;
    /**
     * 低光照增强类型，仅当低光照增强控制开关为 ON 时有效，可选值：
  <li>normal：正常低光照增强；</li>
  默认值：normal。
     */
    Type?: string;
}
/**
 * DescribeContentReviewTemplates返回参数结构体
 */
export interface DescribeContentReviewTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 内容审核模板详情列表。
     */
    ContentReviewTemplateSet?: Array<ContentReviewTemplateItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 极速高清参数配置。
 */
export interface TEHDConfig {
    /**
     * 极速高清类型，可选值：<li>TEHD-100 表示极速高清-100;</li> <li>OFF 表示关闭极速高清。</li>不填表示 OFF。
     */
    Type: string;
    /**
     * 视频码率上限，当 Type 指定了极速高清类型时有效。
  不填或填0表示不设视频码率上限。
     */
    MaxVideoBitrate?: number;
}
/**
 * 图片审核次数统计数据。
 */
export interface ImageReviewUsageDataItem {
    /**
     * 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。
     */
    Time: string;
    /**
     * 次数。
     */
    Count: number;
}
/**
 * 转动图模板详情。
 */
export interface AnimatedGraphicsTemplate {
    /**
     * 转动图模板唯一标识。
     */
    Definition: number;
    /**
     * 模板类型，取值范围：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type: string;
    /**
     * 转动图模板名称。
     */
    Name: string;
    /**
     * 转动图模板描述信息。
     */
    Comment: string;
    /**
     * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width: number;
    /**
     * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive: string;
    /**
     * 动图格式。
     */
    Format: string;
    /**
     * 帧率。
     */
    Fps: number;
    /**
     * 图片质量。
     */
    Quality: number;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime: string;
}
/**
 * ExtractCopyRightWatermark请求参数结构体
 */
export interface ExtractCopyRightWatermarkRequest {
    /**
     * 需要提取水印的媒体 URL。
     */
    Url: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 标识来源上下文，用于透传用户请求信息，在 ExtractCopyRightWatermarkComplete 回调和任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * DescribeEnhanceMediaTemplates请求参数结构体
 */
export interface DescribeEnhanceMediaTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音画质重生模板列表。长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * 播放统计信息。
 */
export interface DailyPlayStatInfo {
    /**
     * 播放媒体文件的日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    Date?: string;
    /**
     * 媒体文件ID。
     */
    FileId?: string;
    /**
     * 播放次数。
     */
    PlayTimes?: number;
    /**
     * 播放流量，单位：字节。
     */
    Traffic?: number;
}
/**
 * 文本鉴别涉及令人不安全的信息的任务控制参数
 */
export interface TerrorismOcrReviewTemplateInfoForUpdate {
    /**
     * 文本鉴别涉及令人不安全的信息的任务开关，可选值：
  <li>ON：开启文本鉴别涉及令人不安全的信息的任务；</li>
  <li>OFF：关闭文本鉴别涉及令人不安全的信息的任务。</li>
     */
    Switch?: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * DescribeEventsState返回参数结构体
 */
export interface DescribeEventsStateResponse {
    /**
     * 待进行拉取的事件通知数，为近似值，约5秒延迟。
     */
    CountOfEventsToPull?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 版权水印参数
 */
export interface CopyRightWatermarkInput {
    /**
     * 版权信息，最大长度为 200 个字符。
     */
    Text: string;
}
/**
 * 视频片头片尾识别输出。
 */
export interface AiRecognitionTaskHeadTailResultOutput {
    /**
     * 片头识别置信度。取值：0~100。
     */
    HeadConfidence: number;
    /**
     * 视频片头的结束时间点，单位：秒。
     */
    HeadTimeOffset: number;
    /**
     * 片尾识别置信度。取值：0~100。
     */
    TailConfidence: number;
    /**
     * 视频片尾的开始时间点，单位：秒。
     */
    TailTimeOffset: number;
}
/**
 * ModifyImageSpriteTemplate返回参数结构体
 */
export interface ModifyImageSpriteTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SetVodDomainCertificate返回参数结构体
 */
export interface SetVodDomainCertificateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 提取溯源水印输出信息
 */
export interface ExtractTraceWatermarkTaskOutput {
    /**
     * 播放者的 ID，以十六进制表示，共6位。
     */
    Uv?: string;
    /**
     * 该字段已废弃。
     */
    Uid?: string;
}
/**
 * 对视频截图做封面任务结果类型
 */
export interface MediaProcessTaskCoverBySnapshotResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 对视频截图做封面任务的输入。
     */
    Input?: CoverBySnapshotTaskInput;
    /**
     * 对视频截图做封面任务的输出。
     */
    Output?: CoverBySnapshotTaskOutput;
    /**
     * 对视频截图做封面任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 截图做封面任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 截图做封面任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * CreateWatermarkTemplate请求参数结构体
 */
export interface CreateWatermarkTemplateRequest {
    /**
     * 水印类型，可选值：
  <li>image：图片水印；</li>
  <li>text：文字水印；</li>
  <li>svg：SVG 水印。</li>
     */
    Type: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 水印模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 原点位置，可选值：
  <li>TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；</li>
  <li>TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；</li>
  <li>BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；</li>
  <li>BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。</li>
  默认值：TopLeft。
     */
    CoordinateOrigin?: string;
    /**
     * 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
  默认值：0px。
     */
    XPos?: string;
    /**
     * 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
  默认值：0px。
     */
    YPos?: string;
    /**
     * 图片水印模板，当 Type 为 image，该字段必填。当 Type 为 text，该字段无效。
     */
    ImageTemplate?: ImageWatermarkInput;
    /**
     * 文字水印模板，当 Type 为 text，该字段必填。当 Type 为 image，该字段无效。
     */
    TextTemplate?: TextWatermarkTemplateInput;
    /**
     * SVG水印模板，当 Type 为 svg，该字段必填。当 Type 为 image 或 text，该字段无效。
     */
    SvgTemplate?: SvgWatermarkInput;
}
/**
 * 自适应码流任务的输入参数。
 */
export interface ComplexAdaptiveDynamicStreamingTaskInput {
    /**
     * 自适应码流参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StreamPara: ComplexAdaptiveDynamicStreamingTaskStreamPara;
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
 * 鉴别涉及令人不安全的信息的任务控制参数。
 */
export interface TerrorismConfigureInfoForUpdate {
    /**
     * 画面鉴别涉及令人不安全的信息的任务控制参数。
     */
    ImgReviewInfo?: TerrorismImgReviewTemplateInfoForUpdate;
    /**
     * 文本鉴别涉及令人不安全的信息的任务控制参数。
     */
    OcrReviewInfo?: TerrorismOcrReviewTemplateInfoForUpdate;
}
/**
 * DescribeEventsState请求参数结构体
 */
export interface DescribeEventsStateRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 微信小程序发布任务信息
 */
export interface WechatMiniProgramPublishTask {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 任务状态，取值：
  WAITING：等待中；
  PROCESSING：处理中；
  FINISH：已完成。
     */
    Status?: string;
    /**
     * 错误码
  <li>0：成功；</li>
  <li>其他值：失败。</li>
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 发布视频文件 ID。
     */
    FileId?: string;
    /**
     * 发布视频所对应的转码模板 ID，为 0 代表原始视频。
     */
    SourceDefinition?: number;
    /**
     * 微信小程序视频发布状态，取值：
  <li>Pass：发布成功；</li>
  <li>Failed：发布失败；</li>
  <li>Rejected：音视频审核未通过。</li>
     */
    PublishResult?: string;
}
/**
 * DescribeDrmKeyProviderInfo请求参数结构体
 */
export interface DescribeDrmKeyProviderInfoRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * ModifyDefaultStorageRegion返回参数结构体
 */
export interface ModifyDefaultStorageRegionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateImageProcessingTemplate返回参数结构体
 */
export interface CreateImageProcessingTemplateResponse {
    /**
     * 图片处理模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 制作媒体文件任务信息
 */
export interface ComposeMediaTask {
    /**
     * 任务 ID。
     */
    TaskId: string;
    /**
     * 任务流状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status: string;
    /**
     * 错误码
  <li>0：成功；</li>
  <li>其他值：失败。</li>
     */
    ErrCode: number;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 制作媒体文件任务进度，取值范围 [0-100] 。
     */
    Progress: number;
    /**
     * 制作媒体文件任务的输入。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input: ComposeMediaTaskInput;
    /**
     * 制作媒体文件任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output: ComposeMediaTaskOutput;
    /**
     * 输出视频的元信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaData: MediaMetaData;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext: string;
}
/**
 * 视频片头片尾识别任务控制参数
 */
export interface HeadTailConfigureInfoForUpdate {
    /**
     * 视频片头片尾识别任务开关，可选值：
  <li>ON：开启智能视频片头片尾识别任务；</li>
  <li>OFF：关闭智能视频片头片尾识别任务。</li>
     */
    Switch?: string;
}
/**
 * 图片缩放处理。
 */
export interface ImageScale {
    /**
     * 图片缩放的操作类型。可选模式有：
  <li>WidthFirst : 指定图片的宽为 Width ，高度等比缩放。</li>
  <li>HeightFirst : 指定图片的高为 Height ，宽度等比缩放。</li>
  <li>LongEdgeFirst : 指定图片的长边为 LongEdge ，短边等比缩放。</li>
  <li>ShortEdgeFirst : 指定图片的短边为 ShortEdge ，长边等比缩放。</li>
  <li>Force : 忽略原图宽高比例，指定图片宽度为 Width，高度为 Height ，强行缩放图片，可能导致目标图片变形。</li>
     */
    Type: string;
    /**
     * 输出图片的高度，单位为像素。当 Type 取值为 HeightFirst 或 Force 时此字段有效。
     */
    Height?: number;
    /**
     * 输出图片的宽度，单位为像素。当 Type 取值为 WidthFirst 或 Force 时此字段有效。
     */
    Width?: number;
    /**
     * 输出图片的长边长度，单位为像素。当 Type 取值为 LongEdgeFirst 时此字段有效。
     */
    LongEdge?: number;
    /**
     * 输出图片的短边长度，单位为像素。当 Type 取值为 ShortEdgeFirst 时此字段有效。
     */
    ShortEdge?: number;
}
/**
 * ModifyJustInTimeTranscodeTemplate返回参数结构体
 */
export interface ModifyJustInTimeTranscodeTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图片智能内容识别任务输入
 */
export interface ImageContentReviewInput {
    /**
     * 图片智能内容审核模板 ID。当前只支持：
  <li>10：所有审核类型均打开。</li>
     */
    Definition: number;
}
/**
 * 视频转码播放信息（2017 版）
 */
export interface TranscodePlayInfo2017 {
    /**
     * 播放地址。
     */
    Url: string;
    /**
     * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/33476)。
     */
    Definition: number;
    /**
     * 视频流码率平均值与音频流码率平均值之和， 单位：bps。
     */
    Bitrate: number;
    /**
     * 视频流高度的最大值，单位：px。
     */
    Height: number;
    /**
     * 视频流宽度的最大值，单位：px。
     */
    Width: number;
}
/**
 * 视频拆条任务信息，仅当 TaskType 为 SplitMedia，该字段有值。
 */
export interface SplitMediaTask {
    /**
     * 任务 ID。
     */
    TaskId: string;
    /**
     * 任务流状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode: number;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 视频拆条任务详细信息列表。
     */
    FileInfoSet: Array<SplitMediaTaskSegmentInfo>;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext: string;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId: string;
    /**
     * 视频拆条任务进度，取值范围 [0-100] 。
     */
    Progress: number;
}
/**
 * 制作媒体文件任务的输入。
 */
export interface ComposeMediaTaskInput {
    /**
     * 输入的媒体轨道列表，包括视频、音频、图片等素材组成的多个轨道信息。
     */
    Tracks: Array<MediaTrack>;
    /**
     * 制作视频文件时使用的画布。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Canvas: Canvas;
    /**
     * 输出的媒体文件信息。
     */
    Output: ComposeMediaOutput;
}
/**
 * ModifyQualityInspectTemplate请求参数结构体
 */
export interface ModifyQualityInspectTemplateRequest {
    /**
     * 模板 ID。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 截帧间隔，单位为秒，最小值为 1。
     */
    ScreenshotInterval?: number;
    /**
     * 视频画面抖动重影检测的控制参数。
     */
    JitterConfigure?: JitterConfigureInfoForUpdate;
    /**
     * 视频画面模糊检测的控制参数。
     */
    BlurConfigure?: BlurConfigureInfoForUpdate;
    /**
     * 视频画面低光、过曝检测的控制参数。
     */
    AbnormalLightingConfigure?: AbnormalLightingConfigureInfoForUpdate;
    /**
     * 视频画面花屏检测的控制参数。
     */
    CrashScreenConfigure?: CrashScreenConfigureInfoForUpdate;
    /**
     * 视频画面黑边、白边、黑屏、白屏检测的控制参数。
     */
    BlackWhiteEdgeConfigure?: BlackWhiteEdgeConfigureInfoForUpdate;
    /**
     * 视频画面噪点检测的控制参数。
     */
    NoiseConfigure?: NoiseConfigureInfoForUpdate;
    /**
     * 视频画面马赛克检测的控制参数。
     */
    MosaicConfigure?: MosaicConfigureInfoForUpdate;
    /**
     * 视频画面二维码检测的控制参数。
     */
    QRCodeConfigure?: QRCodeConfigureInfoForUpdate;
    /**
     * 音频（静音、低音、爆音）检测的控制参数。
     */
    VoiceConfigure?: VoiceConfigureInfoForUpdate;
    /**
     * 视频画面质量评价的控制参数。
     */
    QualityEvaluationConfigure?: QualityEvaluationConfigureInfoForUpdate;
}
/**
 * 转动图任务类型
 */
export interface AnimatedGraphicTaskInput {
    /**
     * 视频转动图模板 ID
     */
    Definition: number;
    /**
     * 动图在视频中的起始时间偏移，单位为秒。
  <li>不填或填0，表示从视频的起始位置开始；</li>
  <li>当数值大于0时（假设为 n），表示从视频的第 n 秒位置开始；</li>
  <li>当数值小于0时（假设为 -n），表示从视频结束 n 秒前的位置开始。</li>
     */
    StartTimeOffset: number;
    /**
     * 动图在视频中的终止时间偏移，单位为秒。
  <li>不填或填0，表示持续到视频的末尾终止；</li>
  <li>当数值大于0时（假设为 n），表示持续到视频第 n 秒时终止；</li>
  <li>当数值小于0时（假设为 -n），表示持续到视频结束 n 秒前终止。</li>
     */
    EndTimeOffset: number;
}
/**
 * 视频处理任务中的马赛克参数类型
 */
export interface MosaicInput {
    /**
     * 原点位置，目前仅支持：
  <li>TopLeft：表示坐标原点位于视频图像左上角，马赛克原点为图片或文字的左上角。</li>
  默认值：TopLeft。
     */
    CoordinateOrigin?: string;
    /**
     * 马赛克原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示马赛克 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；</li>
  <li>当字符串以 px 结尾，表示马赛克 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。</li>
  默认值：0px。
     */
    XPos?: string;
    /**
     * 马赛克原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示马赛克 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；</li>
  <li>当字符串以 px 结尾，表示马赛克 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。</li>
  默认值：0px。
     */
    YPos?: string;
    /**
     * 马赛克的宽度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示马赛克 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
  <li>当字符串以 px 结尾，表示马赛克 Width 单位为像素，如 100px 表示 Width 为 100 像素。</li>
  默认值：10%。
     */
    Width?: string;
    /**
     * 马赛克的高度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示马赛克 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
  <li>当字符串以 px 结尾，表示马赛克 Height 单位为像素，如 100px 表示 Height 为 100 像素。</li>
  默认值：10%。
     */
    Height?: string;
    /**
     * 马赛克的起始时间偏移，单位：秒。不填或填0，表示马赛克从画面出现时开始显现。
  <li>不填或填0，表示马赛克从画面开始就出现；</li>
  <li>当数值大于0时（假设为 n），表示马赛克从画面开始的第 n 秒出现；</li>
  <li>当数值小于0时（假设为 -n），表示马赛克从离画面结束 n 秒前开始出现。</li>
     */
    StartTimeOffset?: number;
    /**
     * 马赛克的结束时间偏移，单位：秒。
  <li>不填或填0，表示马赛克持续到画面结束；</li>
  <li>当数值大于0时（假设为 n），表示马赛克持续到第 n 秒时消失；</li>
  <li>当数值小于0时（假设为 -n），表示马赛克持续到离画面结束 n 秒前消失。</li>
     */
    EndTimeOffset?: number;
}
/**
 * AI 智能分析模板详情
 */
export interface AIAnalysisTemplateItem {
    /**
     * 智能分析模板唯一标识。
     */
    Definition: number;
    /**
     * 智能分析模板名称。
     */
    Name: string;
    /**
     * 智能分析模板描述信息。
     */
    Comment: string;
    /**
     * 智能分类任务控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClassificationConfigure: ClassificationConfigureInfo;
    /**
     * 智能标签任务控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagConfigure: TagConfigureInfo;
    /**
     * 智能封面任务控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoverConfigure: CoverConfigureInfo;
    /**
     * 智能按帧标签任务控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FrameTagConfigure: FrameTagConfigureInfo;
    /**
     * 智能精彩集锦任务控制参数。
     */
    HighlightConfigure: HighlightsConfigureInfo;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime: string;
}
/**
 * 单个物体识别结果。
 */
export interface AiRecognitionTaskObjectResultItem {
    /**
     * 识别的物体名称。
     */
    Name?: string;
    /**
     * 物体出现的片段列表。
     * @deprecated
     */
    SegmentSet?: Array<AiRecognitionTaskObjectSeqmentItem>;
    /**
     * 物体出现的片段列表。
     */
    RecognitionSegmentSet?: Array<AiRecognitionTaskObjectSegmentItem>;
}
/**
 * 基于签名的 Key 防盗链信息
 */
export interface UrlSignatureAuthPolicy {
    /**
     * [Key 防盗链](https://cloud.tencent.com/document/product/266/14047)设置状态，可选值：
  <li>Enabled: 启用。</li>
  <li>Disabled: 禁用。</li>
     */
    Status: string;
    /**
     * [Key 防盗链](https://cloud.tencent.com/document/product/266/14047)中用于生成签名的密钥。
  EncryptedKey 字符串的长度为8~40个字节，不能包含不可见字符。
     */
    EncryptedKey?: string;
}
/**
 * ModifyVodDomainConfig返回参数结构体
 */
export interface ModifyVodDomainConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 点播文件指定时间点截图信息
 */
export interface MediaSnapshotByTimeOffsetInfo {
    /**
     * 特定规格的指定时间点截图信息集合。目前每种规格只能有一套截图。
     */
    SnapshotByTimeOffsetSet: Array<MediaSnapshotByTimeOffsetItem>;
}
/**
 * 即时转码视频模板配置。
 */
export interface VideoConfigureInfo {
    /**
     * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 1920]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  
  默认值：0。
     */
    Width?: number;
    /**
     * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 1920]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  
  默认值：0。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 视频流的码率，取值范围：0 和 [128, 10000]，单位：kbps。
  当取值为 0，表示视频码率和原始视频保持一致。
     */
    Bitrate?: number;
}
/**
 * DeleteAIAnalysisTemplate返回参数结构体
 */
export interface DeleteAIAnalysisTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyRebuildMediaTemplate返回参数结构体
 */
export interface ModifyRebuildMediaTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEnhanceMediaTemplate请求参数结构体
 */
export interface CreateEnhanceMediaTemplateRequest {
    /**
     * 输出文件封装格式，可选值：mp4、flv、hls。
     */
    Container: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音画质重生模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 音画质重生视频控制控制信息。
     */
    RebuildVideoInfo?: RebuildVideoInfo;
    /**
     * 音画质重生音频控制控制信息。
     */
    RebuildAudioInfo?: RebuildAudioInfo;
    /**
     * 输出目标视频控制信息。
     */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /**
     * 输出目标音频控制信息。
     */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /**
     * 是否去除视频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值 0。
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值 0。
     */
    RemoveAudio?: number;
}
/**
 * 视频打点信息
 */
export interface MediaKeyFrameDescItem {
    /**
     * 打点的视频偏移时间，单位：秒。
     */
    TimeOffset: number;
    /**
     * 打点的内容字符串，限制 1-128 个字符。
     */
    Content: string;
}
/**
 * 语音翻译识别控制参数
 */
export interface AsrTranslateConfigureInfoForUpdate {
    /**
     * 语音翻译识别任务开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li><font color=red>注意：</font>语音翻译识别任务本身会返回 ASR 全文识别结果，为避免重复收费，因此禁止同时开启语音翻译识别和 ASR 全文识别功能项。
     */
    Switch?: string;
    /**
     * 媒体源语言，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>ja：日文；</li>
  <li>ko：韩文；</li>
  <li>vi：越南语；</li>
  <li>ms：马来语；</li>
  <li>th：泰语；</li>
  <li>pt：葡萄牙语；</li>
  <li>tr：土耳其语；</li>
  <li>ar：阿拉伯语；</li>
  <li>es：西班牙语；</li>
  <li>hi：印地语；</li>
  <li>fr：法语。</li>
     */
    SrcLanguage?: string;
    /**
     * 翻译目标语言。
  若此参数填写空字符串，则表示只进行语音全文识别，不进行翻译（计费项与 AsrFullTextConfigure 语音全文识别一致）；
  否则，此参数的取值范围分为如下几种情况：
  当 SrcLanguage 为 zh（中文）时，取值范围：
  <li>en：英文；</li>
  <li>ja：日文；</li>
  <li>ko：韩文；</li>
  <li>fr：法语；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语；</li>
  <li>vi：越南语；</li>
  <li>id：印尼语；</li>
  <li>th：泰语；</li>
  <li>ms：马来语。</li>
  当 SrcLanguage 为 en（英文）时，取值范围：
  <li>zh：中文；</li>
  <li>ja：日文；</li>
  <li>ko：韩文；</li>
  <li>fr：法语；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语；</li>
  <li>vi：越南语；</li>
  <li>id：印尼语；</li>
  <li>th：泰语；</li>
  <li>ms：马来语；</li>
  <li>ar：阿拉伯语；</li>
  <li>hi：印地语。</li>
  当 SrcLanguage 为 ja（日文）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>ko：韩文。</li>
  当 SrcLanguage 为 ko（韩文）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>ja：日文。</li>
  当 SrcLanguage 为 vi（越南语）或 ms（马来语）或 th（泰语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文。</li>
  当 SrcLanguage 为 pt（葡萄牙语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>fr：法语；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语。</li>
  当 SrcLanguage 为 tr（土耳其语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>fr：法语；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语。</li>
  当 SrcLanguage 为 es（西班牙语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>fr：法语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语。</li>
  当 SrcLanguage 为 ar（阿拉伯语）或 hi（印地语）时，取值范围：
  <li>en：英文。</li>
  当 SrcLanguage 为 fr（法语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语。</li>
     */
    DstLanguage?: string;
    /**
     * 字幕格式列表操作信息。
     */
    SubtitleFormatsOperation?: SubtitleFormatsOperation;
    /**
     * 指定字幕名称，长度限制：64 个字符。该值将用于播放器展示。
     */
    SubtitleName?: string;
}
/**
 * RebuildMediaByTemplate请求参数结构体
 */
export interface RebuildMediaByTemplateRequest {
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * 视频重生模板 ID。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: string;
    /**
     * 起始偏移时间，单位：秒，不填表示从视频开始截取。
     */
    StartTimeOffset?: number;
    /**
     * 结束偏移时间，单位：秒，不填表示截取到视频末尾。
     */
    EndTimeOffset?: number;
    /**
     * 视频重生后的文件配置。
     */
    OutputConfig?: RebuildMediaOutputConfig;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * ModifyVodDomainConfig请求参数结构体
 */
export interface ModifyVodDomainConfigRequest {
    /**
     * 域名。
     */
    Domain: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * [Referer 防盗链](/document/product/266/14046)规则。
     */
    RefererAuthPolicy?: RefererAuthPolicy;
    /**
     * [Key 防盗链](/document/product/266/14047)规则。
     */
    UrlSignatureAuthPolicy?: UrlSignatureAuthPolicy;
    /**
     * QUIC 配置。
     */
    QUICConfig?: DomainQUICConfig;
    /**
     * IP 访问限制规则。
     */
    IPFilterPolicy?: IPFilterPolicy;
}
/**
 * AI 样本管理，标签操作。
 */
export interface AiSampleTagOperation {
    /**
     * 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。
     */
    Type: string;
    /**
     * 标签，长度限制：128 个字符。
     */
    Tags: Array<string>;
}
/**
 * 自适应码流任务的输出结果。
 */
export interface ComplexAdaptiveDynamicStreamingTaskOutput {
    /**
     * 自适应码流模版 ID。
     */
    Definition?: number;
    /**
     * 自适应码流打包格式。可选值：
  <li>HLS；</li>
  <li>MPEG-DASH。</li>
     */
    Format?: string;
    /**
     * DRM 方案类型。可选值：
  <li>空字符串：无加密；</li>
  <li>SimpleAES；</li>
  <li>Widevine；</li>
  <li>FairPlay。</li>
     */
    DrmType?: string;
    /**
     * 自适应码流的播放地址。
     */
    Url?: string;
}
/**
 * 播放器配置详情
 */
export interface PlayerConfig {
    /**
     * 播放器配置名字。
     */
    Name?: string;
    /**
     * 播放器配置类型，取值范围：
  <li>Preset：系统预置配置；</li>
  <li>Custom：用户自定义配置。</li>
     */
    Type?: string;
    /**
     * 播放的音视频类型，可选值有：
  <li>AdaptiveDynamicStream：自适应码流输出；</li>
  <li>Transcode：转码输出；</li>
  <li>Original：原始音视频。</li>
     */
    AudioVideoType?: string;
    /**
     * 播放 DRM 保护的自适应码流开关：
  <li>ON：开启，表示仅播放 DRM  保护的自适应码流输出；</li>
  <li>OFF：关闭，表示播放未加密的自适应码流输出。</li>
     */
    DrmSwitch?: string;
    /**
     * 允许输出的未加密的自适应码流模板 ID。
     */
    AdaptiveDynamicStreamingDefinition?: number;
    /**
     * 允许输出的 DRM 自适应码流模板内容。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DrmStreamingsInfo?: DrmStreamingsInfo;
    /**
     * 允许输出的转码模板 ID。
     */
    TranscodeDefinition?: number;
    /**
     * 允许输出的雪碧图模板 ID。
     */
    ImageSpriteDefinition?: number;
    /**
     * 播放器对不于不同分辨率的子流展示名字。
     */
    ResolutionNameSet?: Array<ResolutionNameInfo>;
    /**
     * 播放器配置创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    CreateTime?: string;
    /**
     * 播放器配置最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    UpdateTime?: string;
    /**
     * 播放时使用的域名。值为 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。
     */
    Domain?: string;
    /**
     * 播放时使用的 Scheme。取值范围：
  <li>Default：使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme；</li>
  <li>HTTP；</li>
  <li>HTTPS。</li>
     */
    Scheme?: string;
    /**
     * 模板描述信息。
     */
    Comment?: string;
}
/**
 * 自适应码流任务信息。
 */
export interface ComplexAdaptiveDynamicStreamingTaskResult {
    /**
     * 任务状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>SUCCESS：已完成；</li>
  <li>FAIL：失败。</li>
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 转码进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 自适应码流任务的输入。
     */
    Input?: ComplexAdaptiveDynamicStreamingTaskInput;
    /**
     * 自适应码流任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: ComplexAdaptiveDynamicStreamingTaskOutput;
}
/**
 * ConfirmEvents请求参数结构体
 */
export interface ConfirmEventsRequest {
    /**
     * 事件句柄，即 [拉取事件通知](/document/product/266/33433) 接口输出参数中的 EventSet. EventHandle 字段。
  数组长度限制：16。
     */
    EventHandles: Array<string>;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * CreateAIRecognitionTemplate返回参数结构体
 */
export interface CreateAIRecognitionTemplateResponse {
    /**
     * 音视频内容识别模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySubAppIdStatus请求参数结构体
 */
export interface ModifySubAppIdStatusRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId: number;
    /**
     * 应用状态，取值范围：
  <li>On：启用。</li>
  <li>Off：停用。</li>
  <li>Destroyed：销毁。</li>
  当前状态如果是 Destoying ，不能进行启用操作，需要等待销毁完成后才能重新启用。
     */
    Status: string;
}
/**
 * CreateSubAppId返回参数结构体
 */
export interface CreateSubAppIdResponse {
    /**
     * 新创建的应用 ID。
     */
    SubAppId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteTranscodeTemplate请求参数结构体
 */
export interface DeleteTranscodeTemplateRequest {
    /**
     * 转码模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 暴恐信息
 */
export interface AiReviewTerrorismTaskOutput {
    /**
     * 视频暴恐评分，分值为0到100。
     */
    Confidence: number;
    /**
     * 暴恐结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion: string;
    /**
     * 视频暴恐结果标签，取值范围：
  <li>guns：武器枪支。</li>
  <li>crowd：人群聚集。</li>
  <li>police：警察部队。</li>
  <li>bloody：血腥画面。</li>
  <li>banners：暴恐旗帜。</li>
  <li>militant：武装分子。</li>
  <li>explosion：爆炸火灾。</li>
  <li>terrorists：暴恐人物。</li>
  <li>scenario：暴恐画面。</li>
     */
    Label: string;
    /**
     * 有暴恐嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet: Array<MediaContentReviewSegmentItem>;
    /**
     * 暴恐嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl: string;
    /**
     * 暴恐嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime: string;
}
/**
 * ModifyReviewTemplate返回参数结构体
 */
export interface ModifyReviewTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageProcessingTemplates请求参数结构体
 */
export interface DescribeImageProcessingTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 图片处理模板标识列表。长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * 音画质检测任务的输入。
 */
export interface QualityInspectTaskInput {
    /**
     * 媒体文件 ID。
     */
    FileId?: string;
    /**
     * 音画质检测模板 ID。
     */
    Definition?: number;
}
/**
 * 违禁任务控制参数
 */
export interface ProhibitedConfigureInfo {
    /**
     * 语音违禁控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrReviewInfo?: ProhibitedAsrReviewTemplateInfo;
    /**
     * 文本违禁控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcrReviewInfo?: ProhibitedOcrReviewTemplateInfo;
}
/**
 * DRM 自适应码流播放信息
 */
export interface DrmStreamingsInfo {
    /**
     * 保护类型为 SimpleAES 的转自适应码流模板 ID。
     */
    SimpleAesDefinition?: number;
    /**
     * 保护类型为 Widevine 的转自适应码流模板 ID。
     */
    WidevineDefinition?: number;
    /**
     * 保护类型为 FairPlay 的转自适应码流模板 ID。
     */
    FairPlayDefinition?: number;
}
/**
 * SplitMedia请求参数结构体
 */
export interface SplitMediaRequest {
    /**
     * 视频的 ID。
     */
    FileId: string;
    /**
     * 视频拆条任务信息列表，最多同时支持100个拆条信息。
     */
    Segments: Array<SplitMediaTaskConfig>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 标识来源上下文，用于透传用户请求信息，在 SplitMediaComplete 回调和任务流状态变更回调将返回该字段值，最长 1000个字符。
     */
    SessionContext?: string;
    /**
     * 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
}
/**
 * Ocr 文字涉及令人不安全的信息
 */
export interface AiReviewTerrorismOcrTaskOutput {
    /**
     * Ocr 文字有涉及令人不安全信息的评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * Ocr 文字有涉及令人不安全信息的结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * Ocr 文字有涉及令人不安全信息嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<MediaContentReviewOcrTextSegmentItem>;
    /**
     * Ocr 文字有涉及令人不安全信息嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * Ocr 文字有涉及令人不安全信息嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * 智能分析结果
 */
export interface AiAnalysisResult {
    /**
     * 任务的类型，可以取的值有：
  <li>Classification：智能分类</li>
  <li>Cover：智能封面</li>
  <li>Tag：智能标签</li>
  <li>FrameTag：智能按帧标签</li>
  <li>Highlight：智能精彩集锦</li>
     */
    Type: string;
    /**
     * 视频内容分析智能分类任务的查询结果，当任务类型为 Classification 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClassificationTask: AiAnalysisTaskClassificationResult;
    /**
     * 视频内容分析智能封面任务的查询结果，当任务类型为 Cover 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoverTask: AiAnalysisTaskCoverResult;
    /**
     * 视频内容分析智能标签任务的查询结果，当任务类型为 Tag 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagTask: AiAnalysisTaskTagResult;
    /**
     * 视频内容分析智能按帧标签任务的查询结果，当任务类型为 FrameTag 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FrameTagTask: AiAnalysisTaskFrameTagResult;
    /**
     * 视频内容分析智能精彩集锦任务的查询结果，当任务类型为 Highlight 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HighlightTask: AiAnalysisTaskHighlightResult;
}
/**
 * 降码率任务转自适应码流结果类型
 */
export interface ReduceMediaBitrateAdaptiveDynamicStreamingResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 对视频转自适应码流任务的输入。
     */
    Input?: AdaptiveDynamicStreamingTaskInput;
    /**
     * 对视频转自适应码流任务的输出。
     */
    Output?: AdaptiveDynamicStreamingInfoItem;
}
/**
 * AttachMediaSubtitles返回参数结构体
 */
export interface AttachMediaSubtitlesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateDomainVerifyRecord返回参数结构体
 */
export interface CreateDomainVerifyRecordResponse {
    /**
     * DNS解析信息
     */
    DNSVerifyInfo?: DNSVerifyInfo;
    /**
     * 文件验证信息
     */
    FileVerifyInfo?: FileVerifyInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExtractCopyRightWatermark返回参数结构体
 */
export interface ExtractCopyRightWatermarkResponse {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 点播文件转码信息
 */
export interface MediaTranscodeInfo {
    /**
     * 各规格的转码信息集合，每个元素代表一个规格的转码结果。
     */
    TranscodeSet: Array<MediaTranscodeItem>;
}
/**
 * 播放器子流名字信息
 */
export interface ResolutionNameInfo {
    /**
     * 视频短边长度，单位：像素。
     */
    MinEdgeLength: number;
    /**
     * 展示名字。
     */
    Name: string;
}
/**
 * VerifyDomainRecord请求参数结构体
 */
export interface VerifyDomainRecordRequest {
    /**
     * 需要接入点播的加速域名。
     */
    Domain: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2024年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 验证方式：
  <li>dns：DNS 解析验证；</li>
  <li>fIle：文件验证。</li>
  
  默认值：dns。
     */
    VerifyType?: string;
}
/**
 * 文本关键词识别结果。
 */
export interface AiRecognitionTaskOcrWordsResultItem {
    /**
     * 文本关键词。
     */
    Word: string;
    /**
     * 文本关键出现的片段列表。
     */
    SegmentSet: Array<AiRecognitionTaskOcrWordsSegmentItem>;
}
/**
 * ParseStreamingManifest请求参数结构体
 */
export interface ParseStreamingManifestRequest {
    /**
     * 待解析的索引文件内容。
     */
    MediaManifestContent: string;
    /**
     * 视频索引文件格式。默认 m3u8 格式。
  <li>m3u8</li>
  <li>mpd</li>
     */
    ManifestType?: string;
}
/**
 * 图片审核结果。
 */
export interface ReviewImageResult {
    /**
     * 图片审核的结果建议，取值范围：
  <li>pass：建议通过；</li>
  <li>review：建议复审；</li>
  <li>block：建议封禁。</li>
     */
    Suggestion?: string;
    /**
     * 当 Suggestion 为 review 或 block 时有效，表示最可能的违规的标签，取值范围：
  <li>Porn：色情；</li>
  <li>Terror：暴力；</li>
  <li>Polity：不适宜的信息；</li>
  <li>Ad：广告；</li>
  <li>Illegal：违法；</li>
  <li>Abuse：谩骂。</li>
     */
    Label?: string;
    /**
     * 当 Suggestion 为 review 或 block 时有效，表示最可能的违禁的形式，取值范围：
  <li>Image：画面上的人物或图标；</li>
  <li>OCR：画面上的文字。</li>
     */
    Form?: string;
    /**
     * 有违规信息的嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 10个 元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<ReviewImageSegmentItem>;
    /**
     * 涉及违规信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * 涉及违规信息的嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * DeleteSampleSnapshotTemplate返回参数结构体
 */
export interface DeleteSampleSnapshotTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能标签任务输入类型
 */
export interface AiAnalysisTaskTagInput {
    /**
     * 视频智能标签模板 ID。
     */
    Definition: number;
}
/**
 * 片头片尾模板详情
 */
export interface HeadTailTemplate {
    /**
     * 片头片尾模板号。
     */
    Definition?: number;
    /**
     * 模板名，最大支持 64 个字符。
     */
    Name?: string;
    /**
     * 模板描述，最大支持 256 个字符。
     */
    Comment?: string;
    /**
     * 片头候选列表。使用时会选择跟正片分辨率最贴近的一个使用，当存在相同的候选时，选择第一个使用，最大支持 5 个。
     */
    HeadCandidateSet?: Array<string>;
    /**
     * 片尾候选列表。使用时会选择跟正片分辨率最贴近的一个使用，当存在相同的候选时，选择第一个使用，最大支持 5 个。
     */
    TailCandidateSet?: Array<string>;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li> gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊；</li>
  <li> white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充；</li>
  <li> black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  默认值：stretch 。
     */
    FillType?: string;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
}
/**
 * DescribeStorageDetails返回参数结构体
 */
export interface DescribeStorageDetailsResponse {
    /**
     * 存储统计数据，每5分钟或每天一条数据。
     */
    Data?: Array<StatDataItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PullEvents返回参数结构体
 */
export interface PullEventsResponse {
    /**
     * 事件列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EventSet?: Array<EventContent>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 物体识别任务输入类型。
 */
export interface AiRecognitionTaskObjectResultInput {
    /**
     * 物体识别模板 ID。
     */
    Definition: number;
}
/**
 * DescribeCdnLogs请求参数结构体
 */
export interface DescribeCdnLogsRequest {
    /**
     * 域名。
     */
    DomainName: string;
    /**
     * 获取日志起始时间点，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    StartTime: string;
    /**
     * 结束时间需大于起始时间；使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 分页拉取的最大返回结果数。默认值：100；最大值：1000。
     */
    Limit?: number;
    /**
     * 分页拉取的起始偏移量。默认值：0。
     */
    Offset?: number;
}
/**
 * 视频处理任务类型
 */
export interface MediaProcessTaskInput {
    /**
     * 视频转码任务列表。
     */
    TranscodeTaskSet?: Array<TranscodeTaskInput>;
    /**
     * 视频转动图任务列表。
     */
    AnimatedGraphicTaskSet?: Array<AnimatedGraphicTaskInput>;
    /**
     * 对视频按时间点截图任务列表。
     */
    SnapshotByTimeOffsetTaskSet?: Array<SnapshotByTimeOffsetTaskInput>;
    /**
     * 对视频采样截图任务列表。
     */
    SampleSnapshotTaskSet?: Array<SampleSnapshotTaskInput>;
    /**
     * 对视频截雪碧图任务列表。
     */
    ImageSpriteTaskSet?: Array<ImageSpriteTaskInput>;
    /**
     * 对视频截图做封面任务列表。
     */
    CoverBySnapshotTaskSet?: Array<CoverBySnapshotTaskInput>;
    /**
     * 对视频转自适应码流任务列表。
     */
    AdaptiveDynamicStreamingTaskSet?: Array<AdaptiveDynamicStreamingTaskInput>;
}
/**
 * 输出的视频流信息
 */
export interface OutputVideoStream {
    /**
     * 视频流的编码格式，可选值：
  <li>libx264：H.264 编码 </li>
  默认值：libx264。
     */
    Codec?: string;
    /**
     * 视频帧率，取值范围：[0, 60]，单位：Hz。
  默认值：0，表示和第一个视频轨的第一个视频片段的视频帧率一致。
     */
    Fps?: number;
}
/**
 * ModifyDefaultDistributionConfig请求参数结构体
 */
export interface ModifyDefaultDistributionConfigRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 分发域名，取值为点播域名列表里的域名。不填或者填空，表示不修改域名。
     */
    Domain?: string;
    /**
     * 分发协议，取值为 HTTP 或者 HTTPS。
     */
    Scheme?: string;
    /**
     * 播放密钥，由大小写字母（a - Z）或者数字（0 - 9）组成，长度在8 - 20个字符之间。
     */
    PlayKey?: string;
}
/**
 * 任务流模板详情
 */
export interface ProcedureTemplate {
    /**
     * 任务流名字。
     */
    Name?: string;
    /**
     * 任务流模板类型，取值范围：
  <li>Preset：系统预置任务流模板；</li>
  <li>Custom：用户自定义任务流模板。</li>
     */
    Type?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 视频处理类型任务参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MediaProcessTask?: MediaProcessTaskInput;
    /**
     * AI 智能审核类型任务参数 \*。
  <font color=red>\*：该参数用于发起旧版审核，不建议使用。推荐使用 ReviewAudioVideoTask 参数发起审核。</font>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AiContentReviewTask?: AiContentReviewTaskInput;
    /**
     * AI 智能内容分析类型任务参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AiAnalysisTask?: AiAnalysisTaskInput;
    /**
     * AI 内容识别类型任务参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AiRecognitionTask?: AiRecognitionTaskInput;
    /**
     * 微信小程序发布任务参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MiniProgramPublishTask?: WechatMiniProgramPublishTaskInput;
    /**
     * 音视频审核类型任务参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReviewAudioVideoTask?: ProcedureReviewAudioVideoTaskInput;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
}
/**
 * 域名信息
 */
export interface DomainDetailInfo {
    /**
     * 域名名称。
     */
    Domain?: string;
    /**
     * 加速地区信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccelerateAreaInfos?: Array<AccelerateAreaInfo>;
    /**
     * 部署状态，取值有：
  <li>Online：上线；</li>
  <li>Deploying：部署中；</li>
  <li>Locked: 锁定中，出现该状态时，无法对该域名进行部署变更。</li>
     */
    DeployStatus?: string;
    /**
     * HTTPS 配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HTTPSConfig?: DomainHTTPSConfig;
    /**
     * [Key 防盗链](https://cloud.tencent.com/document/product/266/14047)配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UrlSignatureAuthPolicy?: UrlSignatureAuthPolicy;
    /**
     * [Referer 防盗链](https://cloud.tencent.com/document/product/266/14046)配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RefererAuthPolicy?: RefererAuthPolicy;
    /**
     * 域名添加到腾讯云点播系统中的时间。
  <li>格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。</li>
     */
    CreateTime?: string;
    /**
     * 域名 QUIC 配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QUICConfig?: DomainQUICConfig;
    /**
     * IP 访问限制配置信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IPFilterPolicy?: IPFilterPolicy;
    /**
     * 域名类型，取值有： <li>VOD：使用 VOD 产品分发的域名；</li> <li>EdgeOne：使用 EdgeOne 产品分发的域名。</li>
     */
    Type?: string;
}
/**
 * 音视频审核涉及令人不安全的信息的任务结果类型
 */
export interface AiReviewTaskTerrorismResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核涉及令人不安全的信息的任务输入。
     */
    Input?: AiReviewTerrorismTaskInput;
    /**
     * 音视频审核涉及令人不安全的信息的任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiReviewTerrorismTaskOutput;
    /**
     * 音视频审核涉及令人不安全的信息的任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * ProcessMediaByUrl返回参数结构体
 */
export interface ProcessMediaByUrlResponse {
    /**
     * 任务 ID
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeImageReviewUsageData请求参数结构体
 */
export interface DescribeImageReviewUsageDataRequest {
    /**
     * 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    StartTime: string;
    /**
     * 结束日期，需大于等于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 音视频审核 Asr 文字的嫌疑片段
 */
export interface MediaContentReviewAsrTextSegmentItem {
    /**
     * 嫌疑片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 嫌疑片段结束的偏移时间，单位：秒。
     */
    EndTimeOffset?: number;
    /**
     * 嫌疑片段置信度。
     */
    Confidence?: number;
    /**
     * 嫌疑片段音视频审核的结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * 嫌疑关键词列表。
     */
    KeywordSet?: Array<string>;
}
/**
 * DescribeEventConfig返回参数结构体
 */
export interface DescribeEventConfigResponse {
    /**
     * 接收事件通知的方式。"PUSH" 为 [HTTP 回调通知](https://cloud.tencent.com/document/product/266/7829#http.E5.9B.9E.E8.B0.83)，"PULL" 为 [基于消息队列的可靠通知](https://cloud.tencent.com/document/product/266/7829#.E5.9F.BA.E4.BA.8E.E6.B6.88.E6.81.AF.E9.98.9F.E5.88.97.E7.9A.84.E5.8F.AF.E9.9D.A0.E9.80.9A.E7.9F.A5)。
     */
    Mode?: string;
    /**
     * 采用 [HTTP 回调通知](https://cloud.tencent.com/document/product/266/7829#http.E5.9B.9E.E8.B0.83) 接收方式时，用于接收 V3 版本事件通知的地址。
     */
    NotificationUrl?: string;
    /**
     * 是否接收 [视频上传完成](https://cloud.tencent.com/document/product/266/7830) 事件通知，"OFF" 为忽略该事件通知，"ON" 为接收事件通知。
     */
    UploadMediaCompleteEventSwitch?: string;
    /**
     * 是否接收 [视频删除完成](https://cloud.tencent.com/document/product/266/13434) 事件通知，"OFF" 为忽略该事件通知，"ON" 为接收事件通知。
     */
    DeleteMediaCompleteEventSwitch?: string;
    /**
     * 是否接收剪辑固化完成事件通知，"OFF" 为忽略该事件通知，"ON" 为接收事件通知。
     */
    PersistenceCompleteEventSwitch?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCdnLogs返回参数结构体
 */
export interface DescribeCdnLogsResponse {
    /**
     * 日志下载链接总数量。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCount?: number;
    /**
     * 海外CDN节点的日志下载列表。如果域名没有开启海外加速，忽略该参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OverseaCdnLogs?: Array<CdnLogInfo>;
    /**
     * 国内CDN节点的日志下载列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DomesticCdnLogs?: Array<CdnLogInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音视频审核涉及令人不适宜信息的嫌疑片段
 */
export interface MediaContentReviewPoliticalSegmentItem {
    /**
     * 嫌疑片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 嫌疑片段结束的偏移时间，单位：秒。
     */
    EndTimeOffset?: number;
    /**
     * 嫌疑片段分数。
     */
    Confidence?: number;
    /**
     * 嫌疑片段涉及令人不适宜的信息的结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * 涉及令人不适宜的信息、违规图标名字。
     */
    Name?: string;
    /**
     * 嫌疑片段涉及令人不适宜的信息的结果标签。音视频审核模板[画面涉及令人不适宜的信息的任务控制参数](https://cloud.tencent.com/document/api/266/31773#PoliticalImgReviewTemplateInfo)里 LabelSet 参数与此参数取值范围的对应关系：
  violation_photo：
  <li>violation_photo：违规图标。</li>
  politician：
  <li>nation_politician：国家领导人；</li>
  <li>province_politician: 省部级领导人；</li>
  <li>bureau_politician：厅局级领导人；</li>
  <li>county_politician：县处级领导人；</li>
  <li>rural_politician：乡科级领导人；</li>
  <li>sensitive_politician：违规相关人物；</li>
  <li>foreign_politician：国外领导人。</li>
  entertainment：
  <li>sensitive_entertainment：违规娱乐人物。</li>
  sport：
  <li>sensitive_sport：违规体育人物。</li>
  entrepreneur：
  <li>sensitive_entrepreneur：违规商业人物。</li>
  scholar：
  <li>sensitive_scholar：违规教育学者。</li>
  celebrity：
  <li>sensitive_celebrity：违规知名人物；</li>
  <li>historical_celebrity：历史知名人物。</li>
  military：
  <li>sensitive_military：违规相关人物。</li>
     */
    Label?: string;
    /**
     * 嫌疑图片 URL （图片不会永久存储，到达
   PicUrlExpireTime 时间点后图片将被删除）。
     */
    Url?: string;
    /**
     * 涉及令人不适宜的信息、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
     */
    AreaCoordSet?: Array<number | bigint>;
    /**
     * 该字段已废弃，请使用 PicUrlExpireTime。
     */
    PicUrlExpireTimeStamp?: number;
    /**
     * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    PicUrlExpireTime?: string;
}
/**
 * DeletePersonSample返回参数结构体
 */
export interface DeletePersonSampleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSnapshotByTimeOffsetTemplate返回参数结构体
 */
export interface CreateSnapshotByTimeOffsetTemplateResponse {
    /**
     * 时间点截图模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音频（静音、低音、爆音）检测的控制参数。
 */
export interface VoiceConfigureInfoForUpdate {
    /**
     * 音频（静音、低音、爆音）检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
}
/**
 * ModifyContentReviewTemplate请求参数结构体
 */
export interface ModifyContentReviewTemplateRequest {
    /**
     * 内容审核模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 内容审核模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 内容审核模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 令人不安全的信息的控制参数。
     */
    TerrorismConfigure?: TerrorismConfigureInfoForUpdate;
    /**
     * 令人反感的信息的控制参数。
     */
    PornConfigure?: PornConfigureInfoForUpdate;
    /**
     * 令人不适宜的信息控制参数。
     */
    PoliticalConfigure?: PoliticalConfigureInfoForUpdate;
    /**
     * 违禁控制参数。违禁内容包括：
  <li>谩骂；</li>
  <li>涉毒违法。</li>
     */
    ProhibitedConfigure?: ProhibitedConfigureInfoForUpdate;
    /**
     * 用户自定义内容审核控制参数。
     */
    UserDefineConfigure?: UserDefineConfigureInfoForUpdate;
    /**
     * 截帧间隔，单位为秒，最小值为 0.5 秒。
     */
    ScreenshotInterval?: number;
    /**
     * 审核结果是否进入审核墙（对审核结果进行人工识别）的开关。
  <li>ON：是；</li>
  <li>OFF：否。</li>
     */
    ReviewWallSwitch?: string;
}
/**
 * 雪碧图模板详情
 */
export interface ImageSpriteTemplate {
    /**
     * 雪碧图模板唯一标识。
     */
    Definition?: number;
    /**
     * 模板类型，取值范围：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 雪碧图模板名称。
     */
    Name?: string;
    /**
     * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width?: number;
    /**
     * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 采样类型。
     */
    SampleType?: string;
    /**
     * 采样间隔。
     */
    SampleInterval?: number;
    /**
     * 雪碧图中小图的行数。
     */
    RowCount?: number;
    /**
     * 雪碧图中小图的列数。
     */
    ColumnCount?: number;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  默认值：black 。
     */
    FillType?: string;
    /**
     * 模板描述信息。
     */
    Comment?: string;
    /**
     * 图片格式。
     */
    Format?: string;
}
/**
 * DeleteReviewTemplate请求参数结构体
 */
export interface DeleteReviewTemplateRequest {
    /**
     * 审核模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 智能封面结果信息
 */
export interface AiAnalysisTaskCoverOutput {
    /**
     * 智能封面列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 CoverSetFileUrl 对应的文件中获取。
     */
    CoverSet: Array<MediaAiAnalysisCoverItem>;
    /**
     * 智能封面列表文件 URL。文件的内容为 JSON，数据结构与 CoverSet 字段一致。 （文件不会永久存储，到达 CoverSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    CoverSetFileUrl: string;
    /**
     * 智能封面列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CoverSetFileUrlExpireTime: string;
}
/**
 * 音视频审核任务类型
 */
export interface AiContentReviewTaskInput {
    /**
     * 音视频审核模板 ID。
     */
    Definition: number;
}
/**
 * CreateAdaptiveDynamicStreamingTemplate返回参数结构体
 */
export interface CreateAdaptiveDynamicStreamingTemplateResponse {
    /**
     * 自适应转码模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteSampleSnapshotTemplate请求参数结构体
 */
export interface DeleteSampleSnapshotTemplateRequest {
    /**
     * 采样截图模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DescribeTranscodeTemplates返回参数结构体
 */
export interface DescribeTranscodeTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 转码模板详情列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TranscodeTemplateSet?: Array<TranscodeTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能标签结果信息
 */
export interface MediaAiAnalysisTagItem {
    /**
     * 标签名称。
     */
    Tag: string;
    /**
     * 标签的可信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * DescribeStorageData返回参数结构体
 */
export interface DescribeStorageDataResponse {
    /**
     * 当前媒体总量。
     */
    MediaCount?: number;
    /**
     * 当前总存储量，单位是字节。
     */
    TotalStorage?: number;
    /**
     * 当前标准存储量，单位是字节。
     */
    StandardStorage?: number;
    /**
     * 当前低频存储量，单位是字节。
     */
    InfrequentStorage?: number;
    /**
     * 当前归档存储量，单位是字节。
     */
    ArchiveStorage?: number;
    /**
     * 当前深度归档存储量，单位是字节。
     */
    DeepArchiveStorage?: number;
    /**
     * 各计费区域的存储用量。
     */
    StorageStat?: Array<StorageStatData>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文本全文识别片段。
 */
export interface AiRecognitionTaskOcrFullTextSegmentTextItem {
    /**
     * 识别片段置信度。取值：0~100。
     */
    Confidence: number;
    /**
     * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
     */
    AreaCoordSet: Array<number | bigint>;
    /**
     * 识别文本。
     */
    Text: string;
}
/**
 * 图片处理模板， 最多支持三次操作。例如：裁剪-缩略-裁剪。
 */
export interface ImageProcessingTemplate {
    /**
     * 图片处理模板唯一标识。
     */
    Definition?: number;
    /**
     * 模板类型，取值范围：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 图片处理模板名称。
     */
    Name?: string;
    /**
     * 模板描述信息。
     */
    Comment?: string;
    /**
     * 图片处理操作数组，操作将以数组顺序执行。
  <li>长度限制：3。</li>
     */
    Operations?: Array<ImageOperation>;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
}
/**
 * 视频拆条任务识别控制参数
 */
export interface SegmentConfigureInfo {
    /**
     * 视频拆条识别任务开关，可选值：
  <li>ON：开启智能视频拆条识别任务；</li>
  <li>OFF：关闭智能视频拆条识别任务。</li>
     */
    Switch: string;
}
/**
 * 去划痕控制信息
 */
export interface ScratchRepairInfo {
    /**
     * 去划痕控制开关，可选值：
  <li>ON：开启去划痕；</li>
  <li>OFF：关闭去划痕。</li>
     */
    Switch: string;
    /**
     * 去划痕强度，仅当去划痕控制开关为 ON 时有效，取值范围：0.0~1.0。
  默认：0.0。
     */
    Intensity?: number;
    /**
     * 去划痕类型，仅当去划痕控制开关为 ON 时有效，可选值：
  <li>normal：正常去划痕；</li>
  默认值：normal。
     */
    Type?: string;
}
/**
 * 文件删除结果信息
 */
export interface FileDeleteResultItem {
    /**
     * 删除的文件 ID 。
     */
    FileId: string;
    /**
     * 本次删除的文件部分。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DeleteParts: Array<MediaDeleteItem>;
}
/**
 * 对视频按指定时间点截图任务输入参数类型
 */
export interface SnapshotByTimeOffsetTaskInput {
    /**
     * 指定时间点截图模板 ID。
     */
    Definition: number;
    /**
     * 截图时间点列表，时间点支持 s、% 两种格式：
  <li>当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；</li>
  <li>当字符串以 % 结尾，表示时间点为视频时长的百分比大小，如10%表示时间点为视频前第10%的时间。</li>
     */
    ExtTimeOffsetSet?: Array<string>;
    /**
     * 截图时间点列表，单位为<font color=red>毫秒</font>。此参数已不再建议使用，建议您使用 ExtTimeOffsetSet 参数。
     */
    TimeOffsetSet?: Array<number>;
    /**
     * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
     */
    WatermarkSet?: Array<WatermarkInput>;
}
/**
 * Referer 防盗链配置
 */
export interface RefererAuthPolicy {
    /**
     * [Referer 防盗链](https://cloud.tencent.com/document/product/266/14046)设置状态，可选值：
  <li>Enabled: 启用；</li>
  <li>Disabled: 禁用。</li>
     */
    Status: string;
    /**
     * Referer 校验类型，可选值：
  <li>Black：黑名单方式校验。HTTP 请求携带了 Referers 列表中的某个 Referer 将被拒绝访问。</li>
  <li>White：白名单方式校验。HTTP 请求携带了 Referers 列表中的 Referer 时才允许访问。</li>
  当 Status 取值为 Enabled 时，AuthType 必须赋值。
     */
    AuthType?: string;
    /**
     * 用于校验的 Referer 列表，最大支持20个 Referer。当 Status 取值为 Enabled 时， Referers 不能为空数组。Referer 的格式参考域名的格式。
     */
    Referers?: Array<string>;
    /**
     * 是否允许空 Referer 访问本域名，可选值：
  <li>Yes： 是。</li>
  <li>No： 否。</li>
  当 Status 取值为 Enabled 时，BlankRefererAllowed 必须赋值。
     */
    BlankRefererAllowed?: string;
}
/**
 * 任务统计数据，包括任务数和用量。
 */
export interface TaskStatDataItem {
    /**
     * 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。
     */
    Time: string;
    /**
     * 任务数。
     */
    Count: number;
    /**
     * 任务用量。
     */
    Usage: number;
}
/**
 * 物体识别结果片段。
 */
export interface AiRecognitionTaskObjectSegmentItem {
    /**
     * 识别片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 识别片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset?: number;
    /**
     * 识别片段置信度。取值：0~100。
     */
    Confidence?: number;
    /**
     * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
     */
    AreaCoordSet?: Array<number | bigint>;
}
/**
 * CreateCLSTopic请求参数结构体
 */
export interface CreateCLSTopicRequest {
    /**
     * 日志集所属的地域，取值有： <li>ap-guangzhou：广州；</li> <li>ap-beijing：北京；</li> <li>ap-chengdu：成都；</li> <li>ap-chongqing：重庆；</li> <li>ap-nanjing：南京；</li> <li>ap-shanghai：上海；</li> <li>ap-singapore：新加坡。</li>
     */
    CLSRegion: string;
    /**
     * 日志主题名。
     */
    TopicName: string;
    /**
     * 日志集 ID。
     */
    LogsetId: string;
}
/**
 * Ocr 文字涉及令人反感的信息
 */
export interface AiReviewPornOcrTaskOutput {
    /**
     * Ocr 文字涉及令人反感的信息的评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * Ocr 文字涉及令人反感的信息的结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * Ocr 文字有涉及令人反感的信息的嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<MediaContentReviewOcrTextSegmentItem>;
    /**
     * Ocr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * Ocr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * ApplyUpload请求参数结构体
 */
export interface ApplyUploadRequest {
    /**
     * 媒体类型，可选值请参考 [上传能力综述](/document/product/266/9760#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B)。
     */
    MediaType: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 媒体名称。
     */
    MediaName?: string;
    /**
     * 封面类型，可选值请参考 [上传能力综述](/document/product/266/9760#.E6.96.87.E4.BB.B6.E7.B1.BB.E5.9E.8B)。
     */
    CoverType?: string;
    /**
     * 媒体后续任务处理操作，即完成媒体上传后，可自动发起任务流操作。参数值为任务流模板名，云点播支持 [创建任务流模板](/document/product/266/33819) 并为模板命名。
     */
    Procedure?: string;
    /**
     * 媒体文件过期时间，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
     */
    ExpireTime?: string;
    /**
     * 指定上传园区，仅适用于对上传地域有特殊需求的用户。
     */
    StorageRegion?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId?: number;
    /**
     * 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。
     */
    SourceContext?: string;
    /**
     * 会话上下文，用于透传用户请求信息，当指定 Procedure 参数后，[任务流状态变更回调](/document/product/266/9636) 将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * CreateSampleSnapshotTemplate返回参数结构体
 */
export interface CreateSampleSnapshotTemplateResponse {
    /**
     * 采样截图模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能精彩片段任务输入类型
 */
export interface AiAnalysisTaskHighlightInput {
    /**
     * 视频智能精彩片段模板 ID。
     */
    Definition: number;
}
/**
 * DeleteContentReviewTemplate返回参数结构体
 */
export interface DeleteContentReviewTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 点播媒体文件基础信息
 */
export interface MediaBasicInfo {
    /**
     * 媒体文件名称。
     */
    Name?: string;
    /**
     * 媒体文件描述。
     */
    Description?: string;
    /**
     * 媒体文件的创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 媒体文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
    /**
     * 媒体文件的过期时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。“9999-12-31T23:59:59Z”表示永不过期。
     */
    ExpireTime?: string;
    /**
     * 媒体文件的分类 ID。
     */
    ClassId?: number;
    /**
     * 媒体文件的分类名称。
     */
    ClassName?: string;
    /**
     * 媒体文件的分类路径，分类间以“-”分隔，如“新的一级分类 - 新的二级分类”。
     */
    ClassPath?: string;
    /**
     * 媒体文件的封面图片地址。
     */
    CoverUrl?: string;
    /**
     * 媒体文件的封装格式，例如 mp4、flv 等。
     */
    Type?: string;
    /**
     * 原始媒体文件的 URL 地址。
     */
    MediaUrl?: string;
    /**
     * 该媒体文件的来源信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceInfo?: MediaSourceData;
    /**
     * 媒体文件存储地区，如 ap-chongqing，参见[地域列表](https://cloud.tencent.com/document/product/266/9760#.E5.B7.B2.E6.94.AF.E6.8C.81.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)。
     */
    StorageRegion?: string;
    /**
     * 媒体文件的标签信息。
     */
    TagSet?: Array<string>;
    /**
     * 直播录制文件的唯一标识。
     */
    Vid?: string;
    /**
     * 文件类型：
  <li>Video: 视频文件</li>
  <li>Audio: 音频文件</li>
  <li>Image: 图片文件</li>
     */
    Category?: string;
    /**
     * 文件状态：Normal：正常，Forbidden：封禁。
     */
    Status?: string;
    /**
     * 媒体文件的存储类别：
  <li> STANDARD：标准存储。</li>
  <li> STANDARD_IA：低频存储。</li>
  <li> ARCHIVE：归档存储。</li>
  <li> DEEP_ARCHIVE：深度归档存储。</li>
     */
    StorageClass?: string;
}
/**
 * 音视频审核 Asr 文字涉及令人不适宜的信息、违规任务输入参数类型
 */
export interface AiReviewPoliticalAsrTaskInput {
    /**
     * 鉴别涉及令人不适宜信息的模板 ID。
     */
    Definition?: number;
}
/**
 * PullUpload请求参数结构体
 */
export interface PullUploadRequest {
    /**
     * 要拉取的媒体 URL，暂不支持拉取 Dash 格式（可以支持 HLS）。
  支持的扩展名详见[媒体类型](https://cloud.tencent.com/document/product/266/9760#.E5.AA.92.E4.BD.93.E7.B1.BB.E5.9E.8B)。请确保媒体 URL 可以访问。
     */
    MediaUrl: string;
    /**
     * 媒体文件类型（扩展名），支持的类型详见[媒体类型](https://cloud.tencent.com/document/product/266/9760#.E5.AA.92.E4.BD.93.E7.B1.BB.E5.9E.8B)。
  如果 MediaType 不填或取值为空字符串，将根据 MediaUrl 自动获取文件类型。
     */
    MediaType?: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 媒体名称。
     */
    MediaName?: string;
    /**
     * 要拉取的视频封面 URL。支持的文件格式：gif、jpeg（jpg）、png。
     */
    CoverUrl?: string;
    /**
     * 媒体后续任务操作，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。
     */
    Procedure?: string;
    /**
     * 媒体文件过期时间，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime?: string;
    /**
     * 指定上传园区，仅适用于对上传地域有特殊需求的用户：
  <li>不填默认上传至您的[默认地域](https://cloud.tencent.com/document/product/266/14059?from=11329#.E5.AD.98.E5.82.A8.E5.9C.B0.E5.9F.9F.E6.AD.A5.E9.AA.A4)。</li>
  <li>若指定上传园区，请先确认[上传存储设置](https://cloud.tencent.com/document/product/266/14059?from=11329#.E5.AD.98.E5.82.A8.E5.9C.B0.E5.9F.9F.E6.AD.A5.E9.AA.A4)已经开启相应的存储地域。</li>
     */
    StorageRegion?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过[创建分类](https://cloud.tencent.com/document/product/266/7812)接口，创建分类，获得分类 ID。
     */
    ClassId?: number;
    /**
     * 来源上下文，用于透传用户请求信息，当指定 Procedure 任务后，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
    /**
     * 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。
     */
    SourceContext?: string;
}
/**
 * CreateQualityInspectTemplate请求参数结构体
 */
export interface CreateQualityInspectTemplateRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音画质检测模板名称。
     */
    Name?: string;
    /**
     * 音画质检测模板描述。
     */
    Comment?: string;
    /**
     * 截帧间隔，单位为秒，最小值为 1。当不填时，默认截帧间隔为 1 秒。
     */
    ScreenshotInterval?: number;
    /**
     * 视频画面抖动重影检测的控制参数。
     */
    JitterConfigure?: JitterConfigureInfo;
    /**
     * 视频画面模糊检测的控制参数。
     */
    BlurConfigure?: BlurConfigureInfo;
    /**
     * 视频画面低光、过曝检测的控制参数。
     */
    AbnormalLightingConfigure?: AbnormalLightingConfigureInfo;
    /**
     * 视频画面花屏检测的控制参数。
     */
    CrashScreenConfigure?: CrashScreenConfigureInfo;
    /**
     * 视频画面黑边、白边、黑屏、白屏检测的控制参数。
     */
    BlackWhiteEdgeConfigure?: BlackWhiteEdgeConfigureInfo;
    /**
     * 视频画面噪点检测的控制参数。
     */
    NoiseConfigure?: NoiseConfigureInfo;
    /**
     * 视频画面马赛克检测的控制参数。
     */
    MosaicConfigure?: MosaicConfigureInfo;
    /**
     * 视频画面二维码检测的控制参数。
     */
    QRCodeConfigure?: QRCodeConfigureInfo;
    /**
     * 音频（静音、低音、爆音）检测的控制参数。
     */
    VoiceConfigure?: VoiceConfigureInfo;
    /**
     * 视频画面质量评价的控制参数。
     */
    QualityEvaluationConfigure?: QualityEvaluationConfigureInfo;
}
/**
 * ProcessMediaByProcedure请求参数结构体
 */
export interface ProcessMediaByProcedureRequest {
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * [任务流模板](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF)名字。
     */
    ProcedureName: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 任务流的优先级，数值越大优先级越高，取值范围是-10到10，不填代表0。
     */
    TasksPriority?: number;
    /**
     * 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。
     */
    TasksNotifyMode?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果 7 天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * 画质重生输出的视频信息
 */
export interface RebuildMediaTargetVideoStream {
    /**
     * 视频流的编码格式，可选值：
  <li>libx264：H.264 编码；</li>
  <li>libx265：H.265 编码；</li>
  <li>av1：AOMedia Video 1 编码。</li>
  默认视频流的编码格式为 H.264 编码。
     */
    Codec?: string;
    /**
     * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。
  当取值为 0，表示视频码率和原始视频保持一致。
     */
    Bitrate?: number;
    /**
     * 视频帧率，取值范围：[0, 100]，单位：Hz。 当取值为 0，表示帧率和原始视频保持一致。
     */
    Fps?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  
  默认值：0。
     */
    Width?: number;
    /**
     * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  
  默认值：0。
     */
    Height?: number;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li>stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  
  默认值：stretch 。
     */
    FillType?: string;
    /**
     * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。
  当填 0 或不填时，系统将自动设置 gop 长度。
     */
    Gop?: number;
}
/**
 * 音频（静音、低音、爆音）检测的控制参数。
 */
export interface VoiceConfigureInfo {
    /**
     * 音频（静音、低音、爆音）检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
}
/**
 * SetCLSPushTarget返回参数结构体
 */
export interface SetCLSPushTargetResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频剪辑任务信息，该结构仅用于对 2017 版[视频剪辑](https://cloud.tencent.com/document/product/266/10156)接口发起的任务。
 */
export interface ClipTask2017 {
    /**
     * 视频剪辑任务 ID。
     */
    TaskId: string;
    /**
     * 视频剪辑任务源文件 ID。
     */
    SrcFileId: string;
    /**
     * 视频剪辑输出的文件信息。
     */
    FileInfo: ClipFileInfo2017;
}
/**
 * 转码模板详情
 */
export interface TranscodeTemplate {
    /**
     * 转码模板唯一标识。
     */
    Definition?: string;
    /**
     * 封装格式，取值：mp4、flv、hls、mp3、flac、ogg。
     */
    Container?: string;
    /**
     * 转码模板名称。
     */
    Name?: string;
    /**
     * 模板描述信息。
     */
    Comment?: string;
    /**
     * 模板类型，取值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 是否去除视频数据，取值：
  <li>0：保留；</li>
  <li>1：去除。</li>
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，取值：
  <li>0：保留；</li>
  <li>1：去除。</li>
     */
    RemoveAudio?: number;
    /**
     * 视频流配置参数，仅当 RemoveVideo 为 0，该字段有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoTemplate?: VideoTemplateInfo;
    /**
     * 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioTemplate?: AudioTemplateInfo;
    /**
     * 极速高清转码参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TEHDConfig?: TEHDConfig;
    /**
     * 封装格式过滤条件，可选值：
  <li>Video：视频格式，可以同时包含视频流和音频流的封装格式；</li>
  <li>PureAudio：纯音频格式，只能包含音频流的封装格式板。</li>
     */
    ContainerType?: string;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
    /**
     * 切片类型，仅当 Container 为 hls 时有效。
     */
    SegmentType?: string;
}
/**
 * DescribeCDNUsageData请求参数结构体
 */
export interface DescribeCDNUsageDataRequest {
    /**
     * 起始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    StartTime: string;
    /**
     * 结束日期，需大于开始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    EndTime: string;
    /**
     * CDN 统计数据类型，有效值：
  <li>Flux：流量，单位为 byte。</li>
  <li>Bandwidth：带宽，单位为 bps。</li>
     */
    DataType: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 用量数据的时间粒度，单位：分钟，取值有：
  <li>5：5 分钟粒度，返回指定查询时间内5分钟粒度的明细数据。</li>
  <li>60：小时粒度，返回指定查询时间内1小时粒度的数据。</li>
  <li>1440：天粒度，返回指定查询时间内1天粒度的数据。</li>
  默认值为1440，返回天粒度的数据。
     */
    DataInterval?: number;
    /**
     * 域名列表。一次最多查询20个域名的用量数据。可以指定多个域名，查询这些域名叠加的用量数据。默认返回所有域名叠加的用量数据。
     */
    DomainNames?: Array<string>;
}
/**
 * 即时转码模板详情。
 */
export interface JustInTimeTranscodeTemplate {
    /**
     * 模板类型。
     */
    Type?: string;
    /**
     * 模板名。
     */
    Name?: string;
    /**
     * 模板描述。
     */
    Comment?: string;
    /**
     * 视频参数配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoConfigure?: VideoConfigureInfo;
    /**
     * 水印参数配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WatermarkConfigure?: WatermarkConfigureData;
}
/**
 * 文本鉴别涉及令人反感的信息的任务控制参数
 */
export interface PornOcrReviewTemplateInfo {
    /**
     * 文本鉴别涉及令人反感的信息的任务开关，可选值：
  <li>ON：开启文本鉴别涉及令人反感的信息的任务；</li>
  <li>OFF：关闭文本鉴别涉及令人反感的信息的任务。</li>
     */
    Switch: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 音视频审核 Asr 文字涉及令人不适宜信息、违规任务结果类型
 */
export interface AiReviewTaskPoliticalAsrResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核 Asr 文字涉及令人不适宜信息的任务输入。
     */
    Input?: AiReviewPoliticalAsrTaskInput;
    /**
     * 音视频审核 Asr 文字涉及令人不适宜信息的任务输出。
     */
    Output?: AiReviewPoliticalAsrTaskOutput;
    /**
     * 音视频审核 Asr 文字涉及令人不适宜信息的任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * 获取文件属性任务输出
 */
export interface DescribeFileAttributesTaskOutput {
    /**
     * 媒体文件的 Md5 值。
     */
    Md5: string;
    /**
     * 媒体文件的 Sha1 值。
     */
    Sha1?: string;
}
/**
 * TRTC伴生录制信息。
 */
export interface TrtcRecordInfo {
    /**
     * TRTC 应用 ID。
     */
    SdkAppId?: number;
    /**
     * TRTC 房间 ID。
     */
    RoomId?: string;
    /**
     * 录制任务 ID。
     */
    TaskId?: string;
    /**
     * 参与录制的用户 ID 列表。
     */
    UserIds?: Array<string>;
}
/**
 * DescribeReviewDetails请求参数结构体
 */
export interface DescribeReviewDetailsRequest {
    /**
     * 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    StartTime: string;
    /**
     * 结束日期，需大于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 鉴别涉及令人反感的信息的任务控制参数。
 */
export interface PornConfigureInfoForUpdate {
    /**
     * 画面鉴别涉及令人反感的信息的控制参数。
     */
    ImgReviewInfo?: PornImgReviewTemplateInfoForUpdate;
    /**
     * 语音鉴别涉及令人反感的信息的控制参数。
     */
    AsrReviewInfo?: PornAsrReviewTemplateInfoForUpdate;
    /**
     * 文本鉴别涉及令人反感的信息的控制参数。
     */
    OcrReviewInfo?: PornOcrReviewTemplateInfoForUpdate;
}
/**
 * 音视频审核 Asr 文字鉴违禁任务输入参数类型
 */
export interface AiReviewProhibitedAsrTaskInput {
    /**
     * 鉴违禁模板 ID。
     */
    Definition?: number;
}
/**
 * DeleteCLSTopic请求参数结构体
 */
export interface DeleteCLSTopicRequest {
    /**
     * 日志集所属的地域，取值有： <li>ap-guangzhou：广州；</li> <li>ap-beijing：北京；</li> <li>ap-chengdu：成都；</li> <li>ap-chongqing：重庆；</li> <li>ap-nanjing：南京；</li> <li>ap-shanghai：上海；</li> <li>ap-singapore：新加坡。</li>
     */
    CLSRegion?: string;
    /**
     * 日志主题 ID。
     */
    TopicId?: string;
}
/**
 * ParseStreamingManifest返回参数结构体
 */
export interface ParseStreamingManifestResponse {
    /**
     * 分片文件列表。
     */
    MediaSegmentSet?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文本鉴别涉及令人不安全的信息的任务控制参数
 */
export interface TerrorismOcrReviewTemplateInfo {
    /**
     * 文本鉴别涉及令人不安全的信息的任务开关，可选值：
  <li>ON：开启文本鉴别涉及令人不安全的信息的任务；</li>
  <li>OFF：关闭文本鉴别涉及令人不安全的信息的任务。</li>
     */
    Switch: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * CreateRoundPlay请求参数结构体
 */
export interface CreateRoundPlayRequest {
    /**
     * 启播时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    StartTime: string;
    /**
     * 轮播列表。
  <li>数组长度限制：100。</li>
     */
    RoundPlaylist: Array<RoundPlayListItemInfo>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 轮播播单名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 轮播播单描述信息，长度限制：256 个字符。
     */
    Desc?: string;
    /**
     * 播放模式，可选值：
  <li>Loop：循环播放播单；</li>
  <li>Linear：单次播放，播单播放完停止播放。</li>
  默认值：Loop。
     */
    PlayBackMode?: string;
    /**
     * 播单唯一标识 ID，长度限制为64个字符，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）和连字符（-）。如果存在相同 RoundPlayId 的播单，返回 InvalidParameterValue.RoundPlayAlreadyExists 错误。默认取值为空，表示由系统分配。
     */
    RoundPlayId?: string;
    /**
     * 过期时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。过期后的播单将停止播放，“9999-12-31T23:59:59+08:00”表示不过期。默认值：9999-12-31T23:59:59+08:00。
     */
    ExpiredTime?: string;
}
/**
 * 音视频审核涉及令人反感的信息的任务结果类型
 */
export interface AiReviewTaskPornResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核涉及令人反感的信息的任务输入。
     */
    Input?: AiReviewPornTaskInput;
    /**
     * 音视频审核涉及令人反感的信息的任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiReviewPornTaskOutput;
    /**
     * 音视频审核涉及令人反感的信息的任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * 智能物体识别输出。
 */
export interface AiRecognitionTaskObjectResultOutput {
    /**
     * 智能物体识别结果集。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ResultSetFileUrl 对应的文件中获取。
     */
    ResultSet: Array<AiRecognitionTaskObjectResultItem>;
    /**
     * 智能物体识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达ResultSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    ResultSetFileUrl: string;
    /**
     * 智能物体识别结果集文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ResultSetFileUrlExpireTime: string;
}
/**
 * DescribeMediaPlayStatDetails请求参数结构体
 */
export interface DescribeMediaPlayStatDetailsRequest {
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * 起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    StartTime: string;
    /**
     * 结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 统计时间粒度，有效值：
  <li>Hour：以小时为粒度。</li>
  <li>Day：以天为粒度。</li>
  默认按时间跨度决定，小于1天以小时为粒度，大于等于1天则以天为粒度。
     */
    Interval?: string;
}
/**
 * Asr 文字涉违禁信息
 */
export interface AiReviewProhibitedAsrTaskOutput {
    /**
     * Asr 文字涉违禁评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * Asr 文字涉违禁结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * Asr 文字有涉违禁嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<MediaContentReviewAsrTextSegmentItem>;
    /**
     * Asr 文字有涉违禁嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * Asr 文字有涉违禁嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * CreateClass返回参数结构体
 */
export interface CreateClassResponse {
    /**
     * 分类 ID
     */
    ClassId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteSuperPlayerConfig返回参数结构体
 */
export interface DeleteSuperPlayerConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频画面花屏检测的控制参数。
 */
export interface CrashScreenConfigureInfoForUpdate {
    /**
     * 视频画面花屏检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
}
/**
 * DescribeSampleSnapshotTemplates请求参数结构体
 */
export interface DescribeSampleSnapshotTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 采样截图模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
}
/**
 * 智能封面任务控制参数
 */
export interface CoverConfigureInfoForUpdate {
    /**
     * 智能封面任务开关，可选值：
  <li>ON：开启智能封面任务；</li>
  <li>OFF：关闭智能封面任务。</li>
     */
    Switch?: string;
}
/**
 * 智能分类任务结果类型
 */
export interface AiAnalysisTaskClassificationResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 智能分类任务输入。
     */
    Input?: AiAnalysisTaskClassificationInput;
    /**
     * 智能分类任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiAnalysisTaskClassificationOutput;
    /**
     * 智能分类任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 智能分类任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 智能分类任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * 画面鉴别涉及令人不适宜的信息的任务控制参数。
 */
export interface PoliticalImgReviewTemplateInfoForUpdate {
    /**
     * 画面鉴别涉及令人不适宜的信息的任务开关，可选值：
  <li>ON：开启画面鉴别涉及令人不适宜的信息的任务；</li>
  <li>OFF：关闭画面鉴别涉及令人不适宜的信息的任务。</li>
     */
    Switch?: string;
    /**
     * 画面鉴别涉及令人不适宜的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
  <li>violation_photo：违规图标；</li>
  <li>politician：相关人物；</li>
  <li>entertainment：娱乐人物；</li>
  <li>sport：体育人物；</li>
  <li>entrepreneur：商业人物；</li>
  <li>scholar：教育学者；</li>
  <li>celebrity：知名人物；</li>
  <li>military：相关人物。</li>
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 用户自定义文本音视频审核任务控制参数
 */
export interface UserDefineOcrTextReviewTemplateInfo {
    /**
     * 用户自定文本音视频审核任务开关，可选值：
  <li>ON：开启自定义文本音视频审核任务；</li>
  <li>OFF：关闭自定义文本音视频审核任务。</li>
     */
    Switch: string;
    /**
     * 用户自定义文本过滤标签，音视频审核结果包含选择的标签则返回结果，如果过滤标签为空，则音视频审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * DescribeVodDomains返回参数结构体
 */
export interface DescribeVodDomainsResponse {
    /**
     * 域名总数量。
     */
    TotalCount?: number;
    /**
     * 域名信息列表。
     */
    DomainSet?: Array<DomainDetailInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 自适应转码流参数模板
 */
export interface AdaptiveStreamTemplate {
    /**
     * 视频参数信息。
     */
    Video: VideoTemplateInfo;
    /**
     * 音频参数信息。
     */
    Audio: AudioTemplateInfo;
    /**
     * 是否移除音频流，取值范围：
  <li>0：否，</li>
  <li>1：是。</li>
     */
    RemoveAudio?: number;
    /**
     * 是否移除视频流，取值范围：
  <li>0：否，</li>
  <li>1：是。</li>
     */
    RemoveVideo?: number;
    /**
     * 极速高清转码参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TEHDConfig?: TEHDConfig;
}
/**
 * 转码任务输入参数类型
 */
export interface TranscodeTaskInput {
    /**
     * 视频转码模板 ID。
     */
    Definition: number;
    /**
     * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
     */
    WatermarkSet?: Array<WatermarkInput>;
    /**
     * 溯源水印，该功能已不再支持使用。
     */
    TraceWatermark?: TraceWatermarkInput;
    /**
     * 版权水印，该功能已不再支持使用。
     */
    CopyRightWatermark?: CopyRightWatermarkInput;
    /**
     * 马赛克列表，最大可支持 10 张。
     */
    MosaicSet?: Array<MosaicInput>;
    /**
     * 片头片尾列表，支持多片头片尾，最大可支持 10 个。
     */
    HeadTailSet?: Array<HeadTailTaskInput>;
    /**
     * 转码后的视频的起始时间偏移，单位：秒。
  <li>不填或填0，表示转码后的视频从原始视频的起始位置开始；</li>
  <li>当数值大于0时（假设为 n），表示转码后的视频从原始视频的第 n 秒位置开始；</li>
  <li>当数值小于0时（假设为 -n），表示转码后的视频从原始视频结束 n 秒前的位置开始。</li>
     */
    StartTimeOffset?: number;
    /**
     * 转码后视频的终止时间偏移，单位：秒。
  <li>不填或填0，表示转码后的视频持续到原始视频的末尾终止；</li>
  <li>当数值大于0时（假设为 n），表示转码后的视频持续到原始视频第 n 秒时终止；</li>
  <li>当数值小于0时（假设为 -n），表示转码后的视频持续到原始视频结束 n 秒前终止。</li>
     */
    EndTimeOffset?: number;
}
/**
 * DescribeClientUploadAccelerationUsageData请求参数结构体
 */
export interface DescribeClientUploadAccelerationUsageDataRequest {
    /**
     * 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    StartTime: string;
    /**
     * 结束日期，需大于等于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 客户端上传加速类型，取值有：
  <li> AccelerationWithHTTP：HTTP 传输方式的上传加速。</li>
  <li> AccelerationWithQUIC：QUIC 传输方式的上传加速。</li>
  默认查询所有加速类型的用量 。
     */
    Type?: string;
}
/**
 * ModifyAIRecognitionTemplate请求参数结构体
 */
export interface ModifyAIRecognitionTemplateRequest {
    /**
     * 音视频内容识别模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音视频内容识别模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 音视频内容识别模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 视频片头片尾识别控制参数。
     */
    HeadTailConfigure?: HeadTailConfigureInfoForUpdate;
    /**
     * 视频拆条识别控制参数。
     */
    SegmentConfigure?: SegmentConfigureInfoForUpdate;
    /**
     * 人脸识别控制参数。
     */
    FaceConfigure?: FaceConfigureInfoForUpdate;
    /**
     * 文本全文识别控制参数。
     */
    OcrFullTextConfigure?: OcrFullTextConfigureInfoForUpdate;
    /**
     * 文本关键词识别控制参数。
     */
    OcrWordsConfigure?: OcrWordsConfigureInfoForUpdate;
    /**
     * 语音全文识别控制参数。
  <font color=red>注意：本参数已不再维护，推荐使用 AsrTranslateConfigure 参数发起语音翻译识别（当 DstLanguage 不填或填空字符串时，则不进行翻译，计费项和语音全文识别一致）。</font>
     */
    AsrFullTextConfigure?: AsrFullTextConfigureInfoForUpdate;
    /**
     * 语音关键词识别控制参数。
     */
    AsrWordsConfigure?: AsrWordsConfigureInfoForUpdate;
    /**
     * 语音翻译识别控制参数。
     */
    AsrTranslateConfigure?: AsrTranslateConfigureInfoForUpdate;
    /**
     * 物体识别控制参数。
     */
    ObjectConfigure?: ObjectConfigureInfoForUpdate;
    /**
     * 截帧间隔，单位为秒，最小值为 0.5 秒。
     */
    ScreenshotInterval?: number;
}
/**
 * 视频画面二维码检测的控制参数。
 */
export interface QRCodeConfigureInfo {
    /**
     * 视频画面二维码检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
}
/**
 * DescribeStorageRegions请求参数结构体
 */
export interface DescribeStorageRegionsRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 微信发布任务信息
 */
export interface WechatPublishTask {
    /**
     * 任务 ID。
     */
    TaskId: string;
    /**
     * 任务状态，取值：
  WAITING：等待中；
  PROCESSING：处理中；
  FINISH：已完成。
     */
    Status: string;
    /**
     * 错误码
  <li>0：成功；</li>
  <li>其他值：失败。</li>
     */
    ErrCode: number;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 发布视频文件 ID。
     */
    FileId: string;
    /**
     * 微信发布模板 ID。
     */
    Definition: number;
    /**
     * 发布视频所对应的转码模板 ID，为 0 代表原始视频。
     */
    SourceDefinition: number;
    /**
     * 微信发布状态，取值：
  <li>FAIL：失败；</li>
  <li>SUCCESS：成功；</li>
  <li>AUDITNOTPASS：审核未通过；</li>
  <li>NOTTRIGGERED：尚未发起微信发布。</li>
     */
    WechatStatus: string;
    /**
     * 微信 Vid。
     */
    WechatVid: string;
    /**
     * 微信地址。
     */
    WechatUrl: string;
}
/**
 * DescribeCDNStatDetails请求参数结构体
 */
export interface DescribeCDNStatDetailsRequest {
    /**
     * 查询指标，取值有：
  <li>Traffic：流量，单位为 Byte。</li>
  <li>Bandwidth：带宽，单位为 Bps。</li>
  <li>Requests：请求数。</li>
  <li>QUICRequests：QUIC 请求数。</li>
  <li>IpVisit：IP 访问数。</li>
     */
    Metric: string;
    /**
     * 起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    StartTime: string;
    /**
     * 结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 域名列表。一次最多查询20个域名的数据。默认返回所有域名叠加的用量数据。
     */
    DomainNames?: Array<string>;
    /**
     * 服务区域，取值有：
  <li>Chinese Mainland：中国大陆。 </li>
  <li>Asia Pacific Region 1：亚太一区，包括中国香港、中国澳门、新加坡、越南、泰国。 </li>
  <li>Asia Pacific Region 2：亚太二区，包括中国台湾、日本、马来西亚、印度尼西亚、韩国。 </li>
  <li>Asia Pacific Region 3：亚太三区，包括菲律宾、印度、澳大利亚和亚太其它国家和地区。 </li>
  <li>Middle East：中东。 </li>
  <li>Europe：欧洲。</li>
  <li>North America：北美。</li>
  <li>South America：南美。</li>
  <li>Africa：非洲。</li>
  默认为中国大陆。
     */
    Area?: string;
    /**
     * 用户所在地区，Area 为 Chinese Mainland 时，取值为以下地区信息，当 Area 为其它值时， 忽略 Districts 参数。
  <li>Beijing：北京。</li>
  <li>Inner Mongolia：内蒙古。</li>
  <li>Shanxi：山西。</li>
  <li>Hebei：河北。</li>
  <li>Tianjin：天津。</li>
  <li>Ningxia：宁夏。</li>
  <li>Shaanxi：陕西。</li>
  <li>Gansu：甘肃。</li>
  <li>Qinghai：青海。</li>
  <li>Xinjiang：新疆。</li>
  <li>Heilongjiang：黑龙江。</li>
  <li>Jilin：吉林。</li>
  <li>Liaoning：辽宁。</li>
  <li>Fujian：福建。</li>
  <li>Jiangsu：江苏。</li>
  <li>Anhui：安徽。</li>
  <li>Shandong：山东。</li>
  <li>Shanghai：上海。</li>
  <li>Zhejiang：浙江。</li>
  <li>Henan：河南。</li>
  <li>Hubei：湖北。</li>
  <li>Jiangxi：江西。</li>
  <li>Hunan：湖南。</li>
  <li>Guizhou：贵州。</li>
  <li>Yunnan：云南。</li>
  <li>Chongqing：重庆。</li>
  <li>Sichuan：四川。</li>
  <li>Tibet：西藏。</li>
  <li>Guangdong：广东。</li>
  <li>Guangxi：广西。</li>
  <li>Hainan：海南。</li>
  <li>Hong Kong, Macao and Taiwan：港澳台。</li>
  <li>Outside Chinese Mainland：海外。</li>
  <li>Other：其他 。</li>
     */
    Districts?: Array<string>;
    /**
     * 用户所属运营商信息，Area 为 Chinese Mainland 时，取值为以下运营商信息。当 Area 为其它值时忽略 Isps 参数。
  <li>China Telecom：中国电信。 </li>
  <li>China Unicom：中国联通。 </li>
  <li>CERNET：教育网。</li>
  <li>Great Wall Broadband Network：长城宽带。</li>
  <li>China Mobile：中国移动。</li>
  <li>China Mobile Tietong：中国铁通。</li>
  <li>ISPs outside Chinese Mainland：海外运营商。</li>
  <li>Other ISPs：其他运营商。</li>
     */
    Isps?: Array<string>;
    /**
     * 每条数据的时间粒度，单位：分钟，取值有：
  <li>5：5 分钟粒度，返回指定查询时间内5分钟粒度的明细数据。</li>
  <li>1440：天粒度，返回指定查询时间内1天粒度的数据。起始时间和结束时间跨度大于24小时，只支持天粒度的数据。</li>
  当 StartTime 和 EndTime 时间跨度大于24小时时，DataInterval 默认为 1440。
     */
    DataInterval?: number;
}
/**
 * 片尾任务输入类型。
 */
export interface HeadTailTaskInput {
    /**
     * 片头片尾模板号。
     */
    Definition: number;
}
/**
 * DescribeImageReviewUsageData返回参数结构体
 */
export interface DescribeImageReviewUsageDataResponse {
    /**
     * 图片审核次数统计数据，展示查询时间范围内的图片审核次数的概览数据。
     */
    ImageReviewUsageDataSet?: Array<ImageReviewUsageDataItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRoundPlay返回参数结构体
 */
export interface DeleteRoundPlayResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 统计数据
 */
export interface StatDataItem {
    /**
     * 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。
  <li>表示小时级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日0点到1点的统计数据。</li>
  <li>表示天级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日的统计数据。</li>
     */
    Time?: string;
    /**
     * 数据大小。
  <li>存储空间的数据，单位是字节。</li>
  <li>转码时长的数据，单位是秒。</li>
  <li>流量数据，单位是字节。</li>
  <li>带宽数据，单位是比特每秒。</li>
  <li>直播剪辑数据，单位是秒。</li>
  <li>轮播数据，单位是秒。</li>
  <li>子应用数量数据，单位是个。</li>
  <li>日志服务用量数据，单位是条。</li>
     */
    Value?: number;
}
/**
 * CreateStorageRegion返回参数结构体
 */
export interface CreateStorageRegionResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 域名的地区加速信息
 */
export interface AccelerateAreaInfo {
    /**
     * 加速地区，可选值：
  <li>Chinese Mainland：中国境内（不包含港澳台）。</li>
  <li>Outside Chinese Mainland：中国境外。</li>
     */
    Area?: string;
    /**
     * 腾讯禁用原因，可选值：
  <li>ForLegalReasons：因法律原因导致关闭加速；</li>
  <li>ForOverdueBills：因欠费停服导致关闭加速。</li>
     */
    TencentDisableReason?: string;
    /**
     * 加速域名对应的 CNAME 域名。
     */
    TencentEdgeDomain?: string;
}
/**
 * 来源文件信息
 */
export interface MediaSourceData {
    /**
     * 媒体文件的来源类别：
  <li>Record：来自录制。如直播录制、直播时移录制等。</li>
  <li>Upload：来自上传。如拉取上传、服务端上传、客户端 UGC 上传等。</li>
  <li>VideoProcessing：来自视频处理。如视频拼接、视频剪辑等。</li>
  <li>TrtcRecord：来自TRTC 伴生录制。</li>
  <li>WebPageRecord：来自全景录制。</li>
  <li>Unknown：未知来源。</li>
     */
    SourceType?: string;
    /**
     * 用户创建文件时透传的字段。
     */
    SourceContext?: string;
    /**
     * 直播录制信息，当文件来源为 Record 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LiveRecordInfo?: LiveRecordInfo;
    /**
     * TRTC 伴生录制信息，当文件来源为 TrtcRecord 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TrtcRecordInfo?: TrtcRecordInfo;
    /**
     * 全景录制信息，当文件来源为 WebPageRecord 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WebPageRecordInfo?: WebPageRecordInfo;
}
/**
 * DescribePrepaidProducts返回参数结构体
 */
export interface DescribePrepaidProductsResponse {
    /**
     * 购买的预付费商品实例列表。
     */
    ProductInstanceSet?: Array<ProductInstance>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 语音违禁任务控制参数
 */
export interface ProhibitedAsrReviewTemplateInfo {
    /**
     * 语音违禁任务开关，可选值：
  <li>ON：开启语音违禁任务；</li>
  <li>OFF：关闭语音违禁任务。</li>
     */
    Switch: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * HandleCurrentPlaylist返回参数结构体
 */
export interface HandleCurrentPlaylistResponse {
    /**
     * 操作成功的节目列表。
     */
    RoundPlaylist?: Array<RoundPlayListItemInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PushUrlCache请求参数结构体
 */
export interface PushUrlCacheRequest {
    /**
     * 预热的 URL 列表，单次最多指定20个 URL。
     */
    Urls: Array<string>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * CreateAIAnalysisTemplate返回参数结构体
 */
export interface CreateAIAnalysisTemplateResponse {
    /**
     * 音视频内容分析模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频片头片尾识别任务控制参数
 */
export interface HeadTailConfigureInfo {
    /**
     * 视频片头片尾识别任务开关，可选值：
  <li>ON：开启智能视频片头片尾识别任务；</li>
  <li>OFF：关闭智能视频片头片尾识别任务。</li>
     */
    Switch: string;
}
/**
 * 事件通知内容，其中，TranscodeCompleteEvent、ConcatCompleteEvent、ClipCompleteEvent、CreateImageSpriteCompleteEvent、SnapshotByTimeOffsetCompleteEvent 为兼容 2017 版接口发起任务的事件通知。
 */
export interface EventContent {
    /**
     * 事件句柄，调用方必须调用 ConfirmEvents 来确认消息已经收到，确认有效时间 30 秒。失效后，事件可重新被获取。
     */
    EventHandle?: string;
    /**
     * <b>支持事件类型：</b>
  <li>NewFileUpload：视频上传完成；</li>
  <li>ProcedureStateChanged：任务流状态变更；</li>
  <li>FileDeleted：视频删除完成；</li>
  <li>RestoreMediaComplete：视频取回完成；</li>
  <li>PullComplete：视频转拉完成；</li>
  <li>EditMediaComplete：视频编辑完成；</li>
  <li>SplitMediaComplete：视频拆分完成；</li>
  <li>ComposeMediaComplete：制作媒体文件完成；</li>
  <li>WechatMiniProgramPublishComplete：微信小程序发布完成。</li>
  <li>RemoveWatermark：智能去除水印完成。</li>
  <li>RebuildMediaComplete：音画质重生完成事件（不推荐使用）。</li>
  <li>ReviewAudioVideoComplete：音视频审核完成；</li>
  <li>ExtractTraceWatermarkComplete：提取溯源水印完成；</li>
  <li>ExtractCopyRightWatermarkComplete：提取版权水印完成；</li>
  <li>DescribeFileAttributesComplete：获取文件属性完成；</li>
  <li>QualityInspectComplete：音画质检测完成；</li>
  <li>QualityEnhanceComplete：音画质重生任务完成；</li>
  <li>PersistenceComplete：剪辑固化完成；</li>
  <li>ComplexAdaptiveDynamicStreamingComplete：复杂自适应码流任务完成。</li>
  <b>兼容 2017 版的事件类型：</b>
  <li>TranscodeComplete：视频转码完成；</li>
  <li>ConcatComplete：视频拼接完成；</li>
  <li>ClipComplete：视频剪辑完成；</li>
  <li>CreateImageSpriteComplete：视频截取雪碧图完成；</li>
  <li>CreateSnapshotByTimeOffsetComplete：视频按时间点截图完成。</li>
     */
    EventType?: string;
    /**
     * 视频上传完成事件，当事件类型为 NewFileUpload 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileUploadEvent?: FileUploadTask;
    /**
     * 任务流状态变更事件，当事件类型为 ProcedureStateChanged 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcedureStateChangeEvent?: ProcedureTask;
    /**
     * 文件删除事件，当事件类型为 FileDeleted 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileDeleteEvent?: FileDeleteTask;
    /**
     * 视频转拉完成事件，当事件类型为 PullComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PullCompleteEvent?: PullUploadTask;
    /**
     * 视频编辑完成事件，当事件类型为 EditMediaComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EditMediaCompleteEvent?: EditMediaTask;
    /**
     * 视频拆分完成事件，当事件类型为 SplitMediaComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SplitMediaCompleteEvent?: SplitMediaTask;
    /**
     * 制作媒体文件任务完成事件，当事件类型为 ComposeMediaComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComposeMediaCompleteEvent?: ComposeMediaTask;
    /**
     * 视频剪辑完成事件，当事件类型为 ClipComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClipCompleteEvent?: ClipTask2017;
    /**
     * 视频转码完成事件，当事件类型为 TranscodeComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TranscodeCompleteEvent?: TranscodeTask2017;
    /**
     * 视频截取雪碧图完成事件，当事件类型为 CreateImageSpriteComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateImageSpriteCompleteEvent?: CreateImageSpriteTask2017;
    /**
     * 视频拼接完成事件，当事件类型为 ConcatComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConcatCompleteEvent?: ConcatTask2017;
    /**
     * 视频按时间点截图完成事件，当事件类型为 CreateSnapshotByTimeOffsetComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotByTimeOffsetCompleteEvent?: SnapshotByTimeOffsetTask2017;
    /**
     * 微信发布完成事件，当事件类型为 WechatPublishComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WechatPublishCompleteEvent?: WechatPublishTask;
    /**
     * 微信小程序发布任务完成事件，当事件类型为 WechatMiniProgramPublishComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WechatMiniProgramPublishCompleteEvent?: WechatMiniProgramPublishTask;
    /**
     * 智能去除水印完成事件，当事件类型为 RemoveWatermark 有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemoveWatermarkCompleteEvent?: RemoveWatermarkTask;
    /**
     * 视频取回完成事件，当事件类型为 RestoreMediaComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RestoreMediaCompleteEvent?: RestoreMediaTask;
    /**
     * 音画质重生完成事件，当事件类型为 RebuildMediaComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RebuildMediaCompleteEvent?: RebuildMediaTask;
    /**
     * 溯源水印提取完成事件，当事件类型为 ExtractTraceWatermarkComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtractTraceWatermarkCompleteEvent?: ExtractTraceWatermarkTask;
    /**
     * 版权水印提取完成事件，当事件类型为 ExtractCopyRightWatermarkComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtractCopyRightWatermarkCompleteEvent?: ExtractCopyRightWatermarkTask;
    /**
     * 音视频审核完成事件，当事件类型为 ReviewAudioVideoComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReviewAudioVideoCompleteEvent?: ReviewAudioVideoTask;
    /**
     * 该字段已无效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReduceMediaBitrateCompleteEvent?: ReduceMediaBitrateTask;
    /**
     * 获取文件属性完成事件，当事件类型为 DescribeFileAttributesComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DescribeFileAttributesCompleteEvent?: DescribeFileAttributesTask;
    /**
     * 音画质检测完成事件，当事件类型为 QualityInspectComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualityInspectCompleteEvent?: QualityInspectTask;
    /**
     * 音画质重生完成事件，当事件类型为 QualityEnhanceComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualityEnhanceCompleteEvent?: QualityEnhanceTask;
    /**
     * 媒体转推状态变化事件，当事件类型为 MediaCastStatusChanged 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MediaCastStatusChangedEvent?: MediaCastEvent;
    /**
     * 剪辑固化完成事件，当事件类型为 PersistenceComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PersistenceCompleteEvent?: PersistenceCompleteTask;
    /**
     * 自适应码流任务信息，仅当 EventType 为ComplexAdaptiveDynamicStreamingComplete 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComplexAdaptiveDynamicStreamingCompleteEvent?: ComplexAdaptiveDynamicStreamingTask;
}
/**
 * 智能精彩片段任务控制参数
 */
export interface HighlightsConfigureInfoForUpdate {
    /**
     * 智能精彩片段任务开关，可选值：
  <li>ON：开启智能精彩片段任务；</li>
  <li>OFF：关闭智能精彩片段任务。</li>
     */
    Switch?: string;
}
/**
 * IP 访问限制规则，当前支持配置 IP 黑名单和白名单。
 */
export interface IPFilterPolicy {
    /**
     * IP 访问限制状态，可选值：
  <li>Enabled：启用；</li>
  <li>Disabled：禁用。</li>
     */
    Status: string;
    /**
     * IP 访问限制类型：  <li>Black：黑名单方式校验。只有来自 IPList 列表中的 IP 请求会被拦截。</li>
  <li>White：白名单方式校验。只有来自 IPList 列表中的 IP 请求会被放行。</li>当 Status 取值为 Enabled 时，FilterType  必须赋值。
     */
    FilterType?: string;
    /**
     * IP 列表，支持 X.X.X.X 格式 IPV4 地址，或 X:X:X:X:X:X:X:X 格式 IPV6 地址，或网段格式 /N（IPV4:1≤N≤32；IPV6:1≤N≤128）；最多可填充 200 个 IP 或网段。当 Status 取值为 Enabled 时，IPList 必须赋值。
     */
    IPList?: Array<string>;
}
/**
 * 用户自定义音视频审核任务控制参数。
 */
export interface UserDefineConfigureInfoForUpdate {
    /**
     * 用户自定义人物音视频审核控制参数。
     */
    FaceReviewInfo?: UserDefineFaceReviewTemplateInfoForUpdate;
    /**
     * 用户自定义语音音视频审核控制参数。
     */
    AsrReviewInfo?: UserDefineAsrTextReviewTemplateInfoForUpdate;
    /**
     * 用户自定义文本音视频审核控制参数。
     */
    OcrReviewInfo?: UserDefineOcrTextReviewTemplateInfoForUpdate;
}
/**
 * 提取溯源水印输入
 */
export interface ExtractTraceWatermarkTaskInput {
    /**
     * 需要提取水印的媒体 URL。
     */
    Url?: string;
    /**
     * 媒体文件 ID。Url 对应的原始媒体文件 ID。
     */
    FileId?: string;
}
/**
 * Asr 文字涉及令人不适宜的信息
 */
export interface AiReviewPoliticalAsrTaskOutput {
    /**
     * Asr 文字涉及令人不适宜的信息、违规评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * Asr 文字涉及令人不适宜的信息、违规结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * Asr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<MediaContentReviewAsrTextSegmentItem>;
    /**
     * Asr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * Asr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * 输出的音频流信息
 */
export interface OutputAudioStream {
    /**
     * 音频流的编码格式，可选值：
  <li>libfdk_aac：适合 mp4 文件。</li>
  默认值：libfdk_aac。
     */
    Codec?: string;
    /**
     * 音频流的采样率，可选值：
  <li>16000</li>
  <li>32000</li>
  <li>44100</li>
  <li>48000</li>
  单位：Hz。
  默认值：16000。
     */
    SampleRate?: number;
    /**
     * 音频声道数，可选值：
  <li>1：单声道 。</li>
  <li>2：双声道</li>
  默认值：2。
     */
    AudioChannel?: number;
    /**
     * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。
  当取值为 0，将自动设置音频码率。
     */
    Bitrate?: number;
}
/**
 * ModifyClass请求参数结构体
 */
export interface ModifyClassRequest {
    /**
     * 分类 ID
     */
    ClassId: number;
    /**
     * 分类名称。长度限制：1-64 个字符。
     */
    ClassName: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 视频画面二维码检测的控制参数。
 */
export interface QRCodeConfigureInfoForUpdate {
    /**
     * 视频画面二维码检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
}
/**
 * 指定规格任务统计数据。
 */
export interface SpecificationDataItem {
    /**
     * 任务规格。
     */
    Specification: string;
    /**
     * 统计数据。
     */
    Data: Array<TaskStatDataItem>;
}
/**
 * 极速高清参数配置。
 */
export interface TEHDConfigForUpdate {
    /**
     * 极速高清类型，可选值：<li>TEHD-100 表示极速高清-100;</li> <li>OFF 表示关闭极速高清。</li>不填表示不修改。
     */
    Type?: string;
    /**
     * 视频码率上限，不填代表不修改。
     */
    MaxVideoBitrate?: number;
}
/**
 * 制作媒体文件任务的输出。
 */
export interface ComposeMediaTaskOutput {
    /**
     * 文件类型，例如 mp4、mp3 等。
     */
    FileType: string;
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * 媒体文件播放地址。
     */
    FileUrl: string;
    /**
     * 文件名称，最长 64 个字符。
     */
    MediaName: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime: string;
}
/**
 * DescribeQualityInspectTemplates请求参数结构体
 */
export interface DescribeQualityInspectTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音画质检测模板列表。长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * DescribeMediaInfos请求参数结构体
 */
export interface DescribeMediaInfosRequest {
    /**
     * 媒体文件 ID 列表，N 从 0 开始取值，最大 19。
     */
    FileIds: Array<string>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 指定所有媒体文件需要返回的信息，可同时指定多个信息，N 从 0 开始递增。如果未填写该字段，默认返回所有信息。选项有：
  <li>basicInfo（视频基础信息）。</li>
  <li>metaData（视频元信息）。</li>
  <li>transcodeInfo（视频转码结果信息）。</li>
  <li>animatedGraphicsInfo（视频转动图结果信息）。</li>
  <li>imageSpriteInfo（视频雪碧图信息）。</li>
  <li>snapshotByTimeOffsetInfo（视频指定时间点截图信息）。</li>
  <li>sampleSnapshotInfo（采样截图信息）。</li>
  <li>keyFrameDescInfo（打点信息）。</li>
  <li>adaptiveDynamicStreamingInfo（转自适应码流信息）。</li>
  <li>miniProgramReviewInfo（小程序审核信息）。</li>
  <li>subtitleInfo（字幕信息）。</li>
  <li>reviewInfo（审核信息）。</li>
     */
    Filters?: Array<string>;
}
/**
 * ModifyPersonSample请求参数结构体
 */
export interface ModifyPersonSampleRequest {
    /**
     * 素材 ID。
     */
    PersonId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 名称，长度限制：128 个字符。
     */
    Name?: string;
    /**
     * 描述，长度限制：1024 个字符。
     */
    Description?: string;
    /**
     * 素材应用场景，可选值：
  1. Recognition：用于内容识别，等价于 Recognition.Face。
  2. Review：用于不适宜的内容识别，等价于 Review.Face。
  3. All：用于内容识别、不适宜的内容识别，等价于 1+2。
     */
    Usages?: Array<string>;
    /**
     * 五官操作信息。
     */
    FaceOperationInfo?: AiSampleFaceOperation;
    /**
     * 标签操作信息。
     */
    TagOperationInfo?: AiSampleTagOperation;
}
/**
 * DescribeDrmDataKey请求参数结构体
 */
export interface DescribeDrmDataKeyRequest {
    /**
     * 加密后的数据密钥列表，最大支持10个。
     */
    EdkList: Array<string>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 语音全文识别任务控制参数。
<font color=red>注意：本参数已不再维护，推荐使用 AsrTranslateConfigure 参数发起语音翻译识别（当 DstLanguage 不填或填空字符串时，则不进行翻译，计费项和语音全文识别一致）。</font>
 */
export interface AsrFullTextConfigureInfo {
    /**
     * 语音全文识别任务开关，可选值：
  <li>ON：开启智能语音全文识别任务；</li>
  <li>OFF：关闭智能语音全文识别任务。</li>
     */
    Switch: string;
    /**
     * 生成的字幕文件格式列表，不填或者填空数组表示不生成字幕文件，可选值：
  <li>vtt：生成 WebVTT 字幕文件；</li>
  <li>srt：生成 SRT 字幕文件。</li><font color=red>注意：</font>云点播媒资信息仅支持添加 vtt 字幕，因此当且仅当 SubtitleFormats 包含 vtt 时，云点播将生成的字幕添加到媒资。
     */
    SubtitleFormats?: Array<string>;
    /**
     * 生成的字幕文件格式，不填或者填空字符串表示不生成字幕文件，可选值：
  <li>vtt：生成 WebVTT 字幕文件；</li>
  <li>srt：生成 SRT 字幕文件。</li>
  <font color='red'>注意：此字段已废弃，建议使用 SubtitleFormats。</font>
     */
    SubtitleFormat?: string;
    /**
     * 媒体源语言，取值范围：
  <li>zh：中文普通话；</li>
  <li>en：英语；</li>
  <li>ja：日语；</li>
  <li>zh-ca：粤语。</li>
  <font color=red>注意：</font> 填空字符串，或者不填该参数，则自动识别（效果较难保证，推荐填写原始媒体对应的语言，以提高识别的准确率）。
     */
    SrcLanguage?: string;
    /**
     * 指定字幕名称，长度限制：64 个字符。该值将用于播放器展示，若不填则云点播自动生成。
  <font color=red>注意：</font>仅当 SubtitleFormats 包含 vtt 时，该字段有效。
     */
    SubtitleName?: string;
}
/**
 * 图片画面审核涉及令人不安全的信息的任务结果类型
 */
export interface TerrorismImageResult {
    /**
     * 鉴别涉及令人不安全的信息的评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * 鉴别涉及令人不安全的信息的结果建议，取值范围：
  <li>pass；</li>
  <li>review；</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * 鉴别涉及令人不安全的信息的结果标签，取值范围：
  <li>guns：武器枪支；</li>
  <li>crowd：人群聚集；</li>
  <li>police：警察部队；</li>
  <li>bloody：血腥画面；</li>
  <li>banners：暴恐旗帜；</li>
  <li>explosion：爆炸火灾；</li>
  <li>scenario：暴恐画面。</li>
     */
    Label?: string;
}
/**
 * DeleteVodDomain请求参数结构体
 */
export interface DeleteVodDomainRequest {
    /**
     * 要删除的点播加速域名。
     */
    Domain: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DescribeDrmKeyProviderInfo返回参数结构体
 */
export interface DescribeDrmKeyProviderInfoResponse {
    /**
     * 华曦达（SDMC）相关的 DRM 密钥提供商信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SDMCInfo?: SDMCDrmKeyProviderInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ExtractTraceWatermark返回参数结构体
 */
export interface ExtractTraceWatermarkResponse {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAIRecognitionTemplate请求参数结构体
 */
export interface CreateAIRecognitionTemplateRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音视频内容识别模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 音视频内容识别模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 视频片头片尾识别控制参数。
     */
    HeadTailConfigure?: HeadTailConfigureInfo;
    /**
     * 视频拆条识别控制参数。
     */
    SegmentConfigure?: SegmentConfigureInfo;
    /**
     * 人脸识别控制参数。
     */
    FaceConfigure?: FaceConfigureInfo;
    /**
     * 文本全文识别控制参数。
     */
    OcrFullTextConfigure?: OcrFullTextConfigureInfo;
    /**
     * 文本关键词识别控制参数。
     */
    OcrWordsConfigure?: OcrWordsConfigureInfo;
    /**
     * 语音全文识别控制参数。
  <font color=red>注意：本参数已不再维护，推荐使用 AsrTranslateConfigure 参数发起语音翻译识别（当 DstLanguage 不填或填空字符串时，则不进行翻译，计费项和语音全文识别一致）。</font>
     */
    AsrFullTextConfigure?: AsrFullTextConfigureInfo;
    /**
     * 语音关键词识别控制参数。
     */
    AsrWordsConfigure?: AsrWordsConfigureInfo;
    /**
     * 语音翻译识别控制参数。
     */
    AsrTranslateConfigure?: AsrTranslateConfigureInfo;
    /**
     * 物体识别控制参数。
     */
    ObjectConfigure?: ObjectConfigureInfo;
    /**
     * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
     */
    ScreenshotInterval?: number;
}
/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
    /**
     * 视频处理任务的任务 ID。
     */
    TaskId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 智能分类结果
 */
export interface MediaAiAnalysisClassificationItem {
    /**
     * 智能分类的类别名称。
     */
    Classification: string;
    /**
     * 智能分类的可信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * 智能按帧标签结果类型
 */
export interface AiAnalysisTaskFrameTagResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 智能按帧标签任务输入。
     */
    Input?: AiAnalysisTaskFrameTagInput;
    /**
     * 智能按帧标签任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiAnalysisTaskFrameTagOutput;
    /**
     * 智能按帧标签任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 智能按帧标签任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 智能按帧标签任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * 鉴别涉及令人反感的信息的结果信息
 */
export interface AiReviewPornTaskOutput {
    /**
     * 视频鉴别涉及令人反感的信息的评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * 鉴别涉及令人反感的信息的结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * 视频鉴别涉及令人反感的信息的结果标签，取值范围：
  <li>porn：色情。</li>
  <li>sexy：性感。</li>
  <li>vulgar：低俗。</li>
  <li>intimacy：亲密行为。</li>
     */
    Label?: string;
    /**
     * 有涉及令人反感的信息的嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<MediaContentReviewSegmentItem>;
    /**
     * 涉及令人反感的信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * 涉及令人反感的信息的嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * 华曦达（SDMC）相关的 DRM 密钥提供商信息。
 */
export interface SDMCDrmKeyProviderInfo {
    /**
     * 华曦达分配的用户 ID。最大长度为128个字符。
     */
    Uid: string;
    /**
     * 华曦达分配的用户密钥 ID。最大长度为128个字符。
     */
    SecretId: string;
    /**
     * 华曦达分配的用户密钥内容。最大长度为128个字符。
     */
    SecretKey: string;
    /**
     * 华曦达分配的 FairPlay 证书地址。该地址需使用 HTTPS 协议，最大长度为1024个字符。
     */
    FairPlayCertificateUrl: string;
}
/**
 * 语音全文识别结果。
 */
export interface AiRecognitionTaskAsrFullTextResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 语音全文识别任务输入信息。
     */
    Input?: AiRecognitionTaskAsrFullTextResultInput;
    /**
     * 语音全文识别任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiRecognitionTaskAsrFullTextResultOutput;
    /**
     * 语音全文识别任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 语音全文识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 语音全文识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * DeleteQualityInspectTemplate返回参数结构体
 */
export interface DeleteQualityInspectTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 播放统计信息。
 */
export interface PlayStatInfo {
    /**
     * 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。
  <li>表示小时级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日0点到1点的统计数据。</li>
  <li>表示天级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日的统计数据。</li>
     */
    Time?: string;
    /**
     * 媒体文件ID。
     */
    FileId?: string;
    /**
     * 播放次数。
     */
    PlayTimes?: number;
    /**
     * 播放流量，单位：字节。
     */
    Traffic?: number;
}
/**
 * 语音翻译结果。
 */
export interface AiRecognitionTaskAsrTranslateResultOutput {
    /**
     * 语音翻译片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<AiRecognitionTaskAsrTranslateSegmentItem>;
    /**
     * 语音翻译片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * 语音翻译片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
    /**
     * 生成的字幕列表。
     */
    SubtitleSet?: Array<AiRecognitionTaskAsrFullTextResultOutputSubtitleItem>;
}
/**
 * 画面鉴别涉及令人不适宜的信息的任务控制参数
 */
export interface PoliticalImgReviewTemplateInfo {
    /**
     * 画面鉴别涉及令人不适宜的信息的任务开关，可选值：
  <li>ON：开启画面鉴别涉及令人不适宜的信息的任务；</li>
  <li>OFF：关闭画面鉴别涉及令人不适宜的信息的任务。</li>
     */
    Switch: string;
    /**
     * 画面鉴别涉及令人不适宜的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
  <li>violation_photo：违规图标；</li>
  <li>politician：相关人物；</li>
  <li>entertainment：娱乐人物；</li>
  <li>sport：体育人物；</li>
  <li>entrepreneur：商业人物；</li>
  <li>scholar：教育学者；</li>
  <li>celebrity：知名人物；</li>
  <li>military：相关人物。</li>
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 鉴别涉及令人不适宜的信息的任务控制参数
 */
export interface PoliticalConfigureInfo {
    /**
     * 画面鉴别涉及令人不适宜的信息的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImgReviewInfo?: PoliticalImgReviewTemplateInfo;
    /**
     * 语音鉴别涉及令人不适宜的信息的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrReviewInfo?: PoliticalAsrReviewTemplateInfo;
    /**
     * 文本鉴别涉及令人不适宜的信息的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcrReviewInfo?: PoliticalOcrReviewTemplateInfo;
}
/**
 * 智能精彩片段任务控制参数
 */
export interface HighlightsConfigureInfo {
    /**
     * 智能精彩片段任务开关，可选值：
  <li>ON：开启智能精彩片段任务；</li>
  <li>OFF：关闭智能精彩片段任务。</li>
     */
    Switch: string;
}
/**
 * CreateHeadTailTemplate返回参数结构体
 */
export interface CreateHeadTailTemplateResponse {
    /**
     * 片头片尾模板号。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文本识别片段。
 */
export interface AiRecognitionTaskOcrWordsSegmentItem {
    /**
     * 识别片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 识别片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
    /**
     * 识别片段置信度。取值：0~100。
     */
    Confidence: number;
    /**
     * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
     */
    AreaCoordSet: Array<number | bigint>;
}
/**
 * 任务查询结果类型
 */
export interface MediaProcessTaskResult {
    /**
     * 任务的类型，可以取的值有：
  <li>Transcode：转码</li>
  <li>AnimatedGraphics：转动图</li>
  <li>SnapshotByTimeOffset：时间点截图</li>
  <li>SampleSnapshot：采样截图</li>
  <li>ImageSprites：雪碧图</li>
  <li>CoverBySnapshot：截图做封面</li>
  <li>AdaptiveDynamicStreaming：自适应码流</li>
     */
    Type: string;
    /**
     * 视频转码任务的查询结果，当任务类型为 Transcode 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TranscodeTask: MediaProcessTaskTranscodeResult;
    /**
     * 视频转动图任务的查询结果，当任务类型为 AnimatedGraphics 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AnimatedGraphicTask: MediaProcessTaskAnimatedGraphicResult;
    /**
     * 对视频按时间点截图任务的查询结果，当任务类型为 SnapshotByTimeOffset 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotByTimeOffsetTask: MediaProcessTaskSnapshotByTimeOffsetResult;
    /**
     * 对视频采样截图任务的查询结果，当任务类型为 SampleSnapshot 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SampleSnapshotTask: MediaProcessTaskSampleSnapshotResult;
    /**
     * 对视频截雪碧图任务的查询结果，当任务类型为 ImageSprite 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageSpriteTask: MediaProcessTaskImageSpriteResult;
    /**
     * 对视频截图做封面任务的查询结果，当任务类型为 CoverBySnapshot 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoverBySnapshotTask: MediaProcessTaskCoverBySnapshotResult;
    /**
     * 对视频转自适应码流任务的查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdaptiveDynamicStreamingTask: MediaProcessTaskAdaptiveDynamicStreamingResult;
}
/**
 * DeleteWordSamples返回参数结构体
 */
export interface DeleteWordSamplesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 媒体转推事件通知消息。
 */
export interface MediaCastEvent {
    /**
     * 媒体转推 ID。
     */
    CastId?: string;
    /**
     * 转推状态，取值有：
  <li>Working ：运行中；</li>
  <li>Scheduled ：等待定时时间到达后启动；</li>
  <li>Stopped ：已经停止转推；</li>
  <li>Idle ：空闲。</li>
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
}
/**
 * DescribeDefaultDistributionConfig返回参数结构体
 */
export interface DescribeDefaultDistributionConfigResponse {
    /**
     * 分发配置的域名(已废弃）。
     * @deprecated
     */
    DomainName?: string;
    /**
     * 分发配置的域名。
     */
    Domain?: string;
    /**
     * 分发配置的协议，为 HTTP 或 HTTPS。
     */
    Scheme?: string;
    /**
     * 播放密钥，由大小写字母（a - Z）或者数字（0 - 9）组成，长度在8 - 20个字符之间。
     */
    PlayKey?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteProcedureTemplate请求参数结构体
 */
export interface DeleteProcedureTemplateRequest {
    /**
     * 任务流名字。
     */
    Name: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 视频处理任务中的水印参数类型
 */
export interface WatermarkInput {
    /**
     * 水印模板 ID。
     */
    Definition: number;
    /**
     * 文字内容，长度不超过100个字符。仅当水印类型为文字水印时填写。
  文字水印不支持截图打水印。
     */
    TextContent?: string;
    /**
     * SVG 内容。长度不超过 2000000 个字符。仅当水印类型为 SVG 水印时填写。
  SVG 水印不支持截图打水印。
     */
    SvgContent?: string;
    /**
     * 水印的起始时间偏移，单位：秒。不填或填0，表示水印从画面出现时开始显现。
  <li>不填或填0，表示水印从画面开始就出现；</li>
  <li>当数值大于0时（假设为 n），表示水印从画面开始的第 n 秒出现；</li>
  <li>当数值小于0时（假设为 -n），表示水印从离画面结束 n 秒前开始出现。</li>
     */
    StartTimeOffset?: number;
    /**
     * 水印的结束时间偏移，单位：秒。
  <li>不填或填0，表示水印持续到画面结束；</li>
  <li>当数值大于0时（假设为 n），表示水印持续到第 n 秒时消失；</li>
  <li>当数值小于0时（假设为 -n），表示水印持续到离画面结束 n 秒前消失。</li>
     */
    EndTimeOffset?: number;
}
/**
 * AI 样本管理，关键词输入信息。
 */
export interface AiSampleWordInfo {
    /**
     * 关键词，长度限制：20 个字符。
     */
    Keyword: string;
    /**
     * 关键词标签
  <li>数组长度限制：20 个标签；</li>
  <li>单个标签长度限制：128 个字符。</li>
     */
    Tags?: Array<string>;
}
/**
 * 转自适应码流信息
 */
export interface AdaptiveDynamicStreamingInfoItem {
    /**
     * 转自适应码流规格。
     */
    Definition?: number;
    /**
     * 打包格式，取值范围：
  <li>HLS；</li>
  <li>DASH。</li>
     */
    Package?: string;
    /**
     * 加密类型。
     */
    DrmType?: string;
    /**
     * 播放地址。
     */
    Url?: string;
    /**
     * 媒体文件大小，单位：字节。
  <li>当媒体文件为 HLS 时，大小是 m3u8 和 ts 文件大小的总和；</li>
  <li>当媒体文件为 DASH 时，大小是 mpd 和分片文件大小的总和；</li>
  <li><font color=red>注意</font>：在 2022-01-10T16:00:00Z 前处理生成的自适应码流文件此字段为0。</li>
     */
    Size?: number;
    /**
     * 数字水印类型。可选值：
  <li>Trace 表示经过溯源水印处理；</li>
  <li>CopyRight 表示经过版权水印处理；</li>
  <li>None 表示没有经过数字水印处理。</li>
     */
    DigitalWatermarkType?: string;
    /**
     * 子流信息列表。
     */
    SubStreamSet?: Array<MediaSubStreamInfoItem>;
    /**
     * 版权信息。
     */
    CopyRightWatermarkText?: string;
    /**
     * 字幕信息列表。
     */
    SubtitleSet?: Array<MediaSubtitleItem>;
    /**
     * 默认字幕的唯一标识。
     */
    DefaultSubtitleId?: string;
}
/**
 * 直播即时剪辑流信息
 */
export interface LiveRealTimeClipStreamInfo {
    /**
     * 直播流类型，可选值：
  <li>Original（原始流，<b>默认值</b>）。</li>
  <li>Transcoding（转码流）。</li>
     */
    Type?: string;
    /**
     * 直播转码模板ID。
  <b>当Type值为"Transcoding"时，必须填写。</b>
     */
    TemplateId?: number;
}
/**
 * 文本违禁任务控制参数
 */
export interface ProhibitedOcrReviewTemplateInfo {
    /**
     * 文本违禁任务开关，可选值：
  <li>ON：开启文本违禁任务；</li>
  <li>OFF：关闭文本违禁任务。</li>
     */
    Switch: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * DeleteClass返回参数结构体
 */
export interface DeleteClassResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyTranscodeTemplate返回参数结构体
 */
export interface ModifyTranscodeTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 点播媒体文件元信息
 */
export interface MediaMetaData {
    /**
     * 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
     */
    Size: number;
    /**
     * 容器类型，例如 m4a，mp4 等。
     */
    Container: string;
    /**
     * 视频流码率平均值与音频流码率平均值之和，单位：bps。
     */
    Bitrate: number;
    /**
     * 视频流高度的最大值，单位：px。
     */
    Height: number;
    /**
     * 视频流宽度的最大值，单位：px。
     */
    Width: number;
    /**
     * 视频时长，单位：秒。
     */
    Duration: number;
    /**
     * 视频拍摄时的选择角度，单位：度。
     */
    Rotate: number;
    /**
     * 视频流信息。
     */
    VideoStreamSet: Array<MediaVideoStreamItem>;
    /**
     * 音频流信息。
     */
    AudioStreamSet: Array<MediaAudioStreamItem>;
    /**
     * 视频时长，单位：秒。
     */
    VideoDuration: number;
    /**
     * 音频时长，单位：秒。
     */
    AudioDuration: number;
    /**
     * 媒体文件的 Md5 值。
  <li><font color=red>注意</font>：如需要获取媒体文件的 Md5，调用 DescribeFileAttributes 接口，待任务执行完成后获取。</li>
     */
    Md5: string;
}
/**
 * 点播文件采样截图信息
 */
export interface MediaSampleSnapshotInfo {
    /**
     * 特定规格的采样截图信息集合，每个元素代表一套相同规格的采样截图。
     */
    SampleSnapshotSet: Array<MediaSampleSnapshotItem>;
}
/**
 * InspectMediaQuality返回参数结构体
 */
export interface InspectMediaQualityResponse {
    /**
     * 音画质检测任务 ID。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteRebuildMediaTemplate请求参数结构体
 */
export interface DeleteRebuildMediaTemplateRequest {
    /**
     * 视频重生模板号。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * CreateDomainVerifyRecord请求参数结构体
 */
export interface CreateDomainVerifyRecordRequest {
    /**
     * 需要接入点播的加速域名。
     */
    Domain: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2024年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 点播文件信息
 */
export interface MediaInfo {
    /**
     * 基础信息。包括视频名称、分类、播放地址、封面图片等。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BasicInfo?: MediaBasicInfo;
    /**
     * 元信息。包括大小、时长、视频流信息、音频流信息等。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaData?: MediaMetaData;
    /**
     * 转码结果信息。包括该视频转码生成的各种码率的视频的地址、规格、码率、分辨率等。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TranscodeInfo?: MediaTranscodeInfo;
    /**
     * 转动图结果信息。对视频转动图（如 gif）后，动图相关信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AnimatedGraphicsInfo?: MediaAnimatedGraphicsInfo;
    /**
     * 采样截图信息。对视频采样截图后，相关截图信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SampleSnapshotInfo?: MediaSampleSnapshotInfo;
    /**
     * 雪碧图信息。对视频截取雪碧图之后，雪碧的相关信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImageSpriteInfo?: MediaImageSpriteInfo;
    /**
     * 指定时间点截图信息。对视频依照指定时间点截图后，各个截图的信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotByTimeOffsetInfo?: MediaSnapshotByTimeOffsetInfo;
    /**
     * 视频打点信息。对视频设置的各个打点信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyFrameDescInfo?: MediaKeyFrameDescInfo;
    /**
     * 转自适应码流信息。包括规格、加密类型、打包格式等相关信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdaptiveDynamicStreamingInfo?: MediaAdaptiveDynamicStreamingInfo;
    /**
     * 小程序审核信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MiniProgramReviewInfo?: MediaMiniProgramReviewInfo;
    /**
     * 字幕信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubtitleInfo?: MediaSubtitleInfo;
    /**
     * 媒体文件唯一标识 ID。
     */
    FileId?: string;
    /**
     * 审核信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReviewInfo?: FileReviewInfo;
}
/**
 * 视频流配置参数
 */
export interface VideoTemplateInfoForUpdate {
    /**
     * 视频流的编码格式，可选值：
  <li>libx264：H.264 编码；</li>
  <li>libx265：H.265 编码；</li>
  <li>av1：AOMedia Video 1 编码；</li>
  <li>H.266：H.266 编码。</li>
  <font color=red>注意：</font>
  <li> av1，H.266 编码容器目前只支持 mp4 ；</li>
  <li> H.266 目前只支持恒定 CRF 码率控制方式。 </li>
     */
    Codec?: string;
    /**
     * 视频帧率，取值范围：[0, 100]，单位：Hz。
  当取值为 0，表示帧率和原始视频保持一致。
     */
    Fps?: number;
    /**
     * 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。
  当取值为 0，表示视频码率和原始视频保持一致。
     */
    Bitrate?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
     */
    ResolutionAdaptive?: string;
    /**
     * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 8192]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
     */
    Width?: number;
    /**
     * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 8192]，单位：px。
     */
    Height?: number;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  <li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
  <li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。</li>
     */
    FillType?: string;
    /**
     * 视频恒定码率控制因子，取值范围为[1, 51]，填 0 表示禁用该参数。
  
  <font color=red>注意：</font>
  <li>如果指定该参数，将使用 CRF 的码率控制方式做转码（视频码率将不再生效）；</li>
  <li>当指定视频流编码格式为 H.266 时，该字段必填，推荐值为 28；</li>
  <li>如果没有特殊需求，不建议指定该参数。</li>
     */
    Vcrf?: number;
    /**
     * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。
  当填 0 或不填时，系统将自动设置 gop 长度。
     */
    Gop?: number;
    /**
     * 当原始视频为 HDR（High Dynamic Range）时，转码输出是否依然保持 HDR。取值范围：
  <li>ON: 如果原始文件是 HDR，则转码输出保持 HDR；否则转码输出为 SDR （Standard Dynamic Range）。</li>
  <li>OFF: 无论原始文件是 HDR 还是 SDR，转码输出均为 SDR。</li>
     */
    PreserveHDRSwitch?: string;
    /**
     * 编码标签，仅当视频流的编码格式为 H.265 编码时有效，可选值：
  <li>hvc1 表示 hvc1 标签；</li>
  <li>hev1 表示 hev1 标签。 </li>
  默认值：hvc1。
     */
    CodecTag?: string;
}
/**
 * CreateContentReviewTemplate请求参数结构体
 */
export interface CreateContentReviewTemplateRequest {
    /**
     * 音视频审核结果是否进入音视频审核墙（对识别结果进行人工复核）的开关。
  <li>ON：是；</li>
  <li>OFF：否。</li>
     */
    ReviewWallSwitch: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 内容审核模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 内容审核模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 令人反感的信息的控制参数。
     */
    PornConfigure?: PornConfigureInfo;
    /**
     * 令人不安全的信息的控制参数。
     */
    TerrorismConfigure?: TerrorismConfigureInfo;
    /**
     * 令人不适宜的控制参数。
     */
    PoliticalConfigure?: PoliticalConfigureInfo;
    /**
     * 违禁控制参数。违禁内容包括：
  <li>谩骂；</li>
  <li>涉毒违法。</li>
     */
    ProhibitedConfigure?: ProhibitedConfigureInfo;
    /**
     * 用户自定义内容审核控制参数。
     */
    UserDefineConfigure?: UserDefineConfigureInfo;
    /**
     * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
     */
    ScreenshotInterval?: number;
}
/**
 * DescribeContentReviewTemplates请求参数结构体
 */
export interface DescribeContentReviewTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 内容审核模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * CreateComplexAdaptiveDynamicStreamingTask返回参数结构体
 */
export interface CreateComplexAdaptiveDynamicStreamingTaskResponse {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 对视频转自适应码流的输入参数类型
 */
export interface AdaptiveDynamicStreamingTaskInput {
    /**
     * 转自适应码流模板 ID。
     */
    Definition: number;
    /**
     * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
     */
    WatermarkSet?: Array<WatermarkInput>;
    /**
     * 溯源水印，该功能已不再支持使用。
     */
    TraceWatermark?: TraceWatermarkInput;
    /**
     * 版权水印，该功能已不再支持使用。
     */
    CopyRightWatermark?: CopyRightWatermarkInput;
    /**
     * 字幕列表，元素为字幕 ID，支持多个字幕，最大可支持16个。
     */
    SubtitleSet?: Array<string>;
}
/**
 * DescribeImageSpriteTemplates返回参数结构体
 */
export interface DescribeImageSpriteTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 雪碧图模板详情列表。
     */
    ImageSpriteTemplateSet?: Array<ImageSpriteTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCLSLogsets请求参数结构体
 */
export interface DescribeCLSLogsetsRequest {
    /**
     * 日志集所属的地域，取值有： <li>ap-guangzhou：广州；</li> <li>ap-beijing：北京；</li> <li>ap-chengdu：成都；</li> <li>ap-chongqing：重庆；</li> <li>ap-nanjing：南京；</li> <li>ap-shanghai：上海；</li> <li>ap-singapore：新加坡。</li>
     */
    CLSRegion: string;
}
/**
 * InspectMediaQuality请求参数结构体
 */
export interface InspectMediaQualityRequest {
    /**
     * 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。
     */
    FileId: string;
    /**
     * 音画质检测模板 ID。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 来源上下文，用于透传用户请求信息，音画质检测完成回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * 转场操作
 */
export interface TransitionOperation {
    /**
     * 转场类型，取值有：
  <ul>
  <li>图像的转场操作，用于两个视频片段图像间的转场处理：
  <ul>
  <li>ImageFadeInFadeOut：图像淡入淡出。 </li>
  <li>BowTieHorizontal：水平蝴蝶结。 </li>
  <li>BowTieVertical：垂直蝴蝶结。 </li>
  <li>ButterflyWaveScrawler：晃动。 </li>
  <li>Cannabisleaf：枫叶。 </li>
  <li>Circle：弧形收放。 </li>
  <li>CircleCrop：圆环聚拢。 </li>
  <li>Circleopen：椭圆聚拢。 </li>
  <li>Crosswarp：横向翘曲。 </li>
  <li>Cube：立方体。 </li>
  <li>DoomScreenTransition：幕布。 </li>
  <li>Doorway：门廊。 </li>
  <li>Dreamy：波浪。 </li>
  <li>DreamyZoom：水平聚拢。 </li>
  <li>FilmBurn：火烧云。 </li>
  <li>GlitchMemories：抖动。 </li>
  <li>Heart：心形。 </li>
  <li>InvertedPageCurl：翻页。 </li>
  <li>Luma：腐蚀。 </li>
  <li>Mosaic：九宫格。 </li>
  <li>Pinwheel：风车。 </li>
  <li>PolarFunction：椭圆扩散。 </li>
  <li>PolkaDotsCurtain：弧形扩散。 </li>
  <li>Radial：雷达扫描 </li>
  <li>RotateScaleFade：上下收放。 </li>
  <li>Squeeze：上下聚拢。 </li>
  <li>Swap：放大切换。 </li>
  <li>Swirl：螺旋。 </li>
  <li>UndulatingBurnOutSwirl：水流蔓延。 </li>
  <li>Windowblinds：百叶窗。 </li>
  <li>WipeDown：向下收起。 </li>
  <li>WipeLeft：向左收起。 </li>
  <li>WipeRight：向右收起。 </li>
  <li>WipeUp：向上收起。 </li>
  <li>ZoomInCircles：水波纹。 </li>
  </ul>
  </li>
  <li>音频的转场操作，用于两个音频片段间的转场处理：
  <ul>
  <li>AudioFadeInFadeOut：声音淡入淡出。 </li>
  </ul>
  </li>
  </ul>
     */
    Type: string;
}
/**
 * 即时转码水印模板配置。
 */
export interface WatermarkConfigureInfo {
    /**
     * 是否启用水印。可取值：
  <li>ON：表示启用水印；</li>
  <li>OFF：表示关闭水印。</li>
     */
    Switch: string;
    /**
     * 水印图片 Base64 编码后的字符串。支持 jpeg、png 图片格式。
     */
    ImageContent?: string;
    /**
     * 水印的宽度。
  <li>字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
     */
    Width?: string;
    /**
     * 水印的高度。
  <li>字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
     */
    Height?: string;
    /**
     * 水印原点距离视频图像坐标原点的水平位置。字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；
     */
    XPos?: string;
    /**
     * 水印原点距离视频图像坐标原点的垂直位置。当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%。
     */
    YPos?: string;
}
/**
 * 智能按帧标签任务输入类型
 */
export interface AiAnalysisTaskFrameTagInput {
    /**
     * 视频智能按帧标签模板 ID。
     */
    Definition: number;
}
/**
 * 按帧标签片段列表
 */
export interface MediaAiAnalysisFrameTagSegmentItem {
    /**
     * 按帧标签起始的偏移时间。
     */
    StartTimeOffset: number;
    /**
     * 按帧标签结束的偏移时间。
     */
    EndTimeOffset: number;
    /**
     * 时间片段内的标签列表。
     */
    TagSet: Array<MediaAiAnalysisFrameTagItem>;
}
/**
 * 语音关键词识别结果。
 */
export interface AiRecognitionTaskAsrWordsResultItem {
    /**
     * 语音关键词。
     */
    Word: string;
    /**
     * 语音关键词出现的时间片段列表。
     */
    SegmentSet: Array<AiRecognitionTaskAsrWordsSegmentItem>;
}
/**
 * CreateQualityInspectTemplate返回参数结构体
 */
export interface CreateQualityInspectTemplateResponse {
    /**
     * 音画质检测模板 ID。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音画质重生任务输出
 */
export interface RebuildMediaTaskOutput {
    /**
     * 文件类型，例如 mp4、flv 等。
     */
    FileType: string;
    /**
     * 媒体文件播放地址。
     */
    FileUrl: string;
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
     */
    MediaName: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime: string;
}
/**
 * 音画质重生结果文件输出。
 */
export interface EnhanceMediaQualityOutputConfig {
    /**
     * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
     */
    MediaName?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId?: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime?: string;
}
/**
 * RebuildMedia请求参数结构体
 */
export interface RebuildMediaRequest {
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 起始偏移时间，单位：秒，不填表示从视频开始截取。
     */
    StartTimeOffset?: number;
    /**
     * 结束偏移时间，单位：秒，不填表示截取到视频末尾。
     */
    EndTimeOffset?: number;
    /**
     * 画质修复控制参数。
     */
    RepairInfo?: RepairInfo;
    /**
     * 智能插帧控制参数。
     */
    VideoFrameInterpolationInfo?: VideoFrameInterpolationInfo;
    /**
     * 画面超分控制参数。
     */
    SuperResolutionInfo?: SuperResolutionInfo;
    /**
     * 高动态范围类型控制参数。
     */
    HDRInfo?: HDRInfo;
    /**
     * 视频降噪控制参数。
     */
    VideoDenoiseInfo?: VideoDenoiseInfo;
    /**
     * 音频降噪控制参数。
     */
    AudioDenoiseInfo?: AudioDenoiseInfo;
    /**
     * 色彩增强控制参数。
     */
    ColorInfo?: ColorEnhanceInfo;
    /**
     * 细节增强控制参数。
     */
    SharpInfo?: SharpEnhanceInfo;
    /**
     * 人脸增强控制参数。
     */
    FaceInfo?: FaceEnhanceInfo;
    /**
     * 低光照控制参数。
     */
    LowLightInfo?: LowLightEnhanceInfo;
    /**
     * 去划痕控制参数。
     */
    ScratchRepairInfo?: ScratchRepairInfo;
    /**
     * 去伪影（毛刺）控制参数。
     */
    ArtifactRepairInfo?: ArtifactRepairInfo;
    /**
     * 音画质重生输出目标参数。
     */
    TargetInfo?: RebuildMediaTargetInfo;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
    /**
     * 任务类型，取值：<li>Procedure：视频处理任务；</li><li>EditMedia：视频编辑任务；</li><li>SplitMedia：视频拆条任务；</li><li>ComposeMedia：制作媒体文件任务；</li><li>WechatPublish：微信发布任务；</li><li>WechatMiniProgramPublish：微信小程序视频发布任务；</li><li>PullUpload：拉取上传媒体文件任务；</li><li>FastClipMedia：快速剪辑任务；</li><li>RemoveWatermarkTask：智能去除水印任务；</li><li>DescribeFileAttributesTask：获取文件属性任务；</li><li>RebuildMedia：音画质重生任务（不推荐使用）；</li><li>ReviewAudioVideo：音视频审核任务；</li><li>ExtractTraceWatermark：提取溯源水印任务；</li><li>ExtractCopyRightWatermark：提取版权水印任务；</li><li>QualityInspect：音画质检测任务；</li><li>QualityEnhance：音画质重生任务；</li><li>ComplexAdaptiveDynamicStreaming：复杂自适应码流任务。</li>
     */
    TaskType?: string;
    /**
     * 任务状态，取值：
  <li>WAITING：等待中；</li>
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成；</li>
  <li>ABORTED：已终止。</li>
     */
    Status?: string;
    /**
     * 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
    /**
     * 视频处理任务信息，仅当 TaskType 为 Procedure，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProcedureTask?: ProcedureTask;
    /**
     * 视频编辑任务信息，仅当 TaskType 为 EditMedia，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EditMediaTask?: EditMediaTask;
    /**
     * 微信发布任务信息，仅当 TaskType 为 WechatPublish，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WechatPublishTask?: WechatPublishTask;
    /**
     * 制作媒体文件任务信息，仅当 TaskType 为 ComposeMedia，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComposeMediaTask?: ComposeMediaTask;
    /**
     * 视频拆条任务信息，仅当 TaskType 为 SplitMedia，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SplitMediaTask?: SplitMediaTask;
    /**
     * 微信小程序发布任务信息，仅当 TaskType 为 WechatMiniProgramPublish，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WechatMiniProgramPublishTask?: WechatMiniProgramPublishTask;
    /**
     * 拉取上传媒体文件任务信息，仅当 TaskType 为 PullUpload，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PullUploadTask?: PullUploadTask;
    /**
     * 视频转码任务信息，仅当 TaskType 为 Transcode，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TranscodeTask?: TranscodeTask2017;
    /**
     * 视频拼接任务信息，仅当 TaskType 为 Concat，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConcatTask?: ConcatTask2017;
    /**
     * 视频剪辑任务信息，仅当 TaskType 为 Clip，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClipTask?: ClipTask2017;
    /**
     * 截取雪碧图任务信息，仅当 TaskType 为 ImageSprite，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateImageSpriteTask?: CreateImageSpriteTask2017;
    /**
     * 视频指定时间点截图任务信息，仅当 TaskType 为 SnapshotByTimeOffset，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapshotByTimeOffsetTask?: SnapshotByTimeOffsetTask2017;
    /**
     * 智能去除水印任务信息，仅当 TaskType 为 RemoveWatermark，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemoveWatermarkTask?: RemoveWatermarkTask;
    /**
     * 音画质重生任务信息，仅当 TaskType 为 RebuildMedia，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RebuildMediaTask?: RebuildMediaTask;
    /**
     * 提取溯源水印任务信息，仅当 TaskType 为 ExtractTraceWatermark，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtractTraceWatermarkTask?: ExtractTraceWatermarkTask;
    /**
     * 提取版权水印任务信息，仅当 TaskType 为 ExtractCopyRightWatermark，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExtractCopyRightWatermarkTask?: ExtractCopyRightWatermarkTask;
    /**
     * 音视频审核任务信息，仅当 TaskType 为 ReviewAudioVideo，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReviewAudioVideoTask?: ReviewAudioVideoTask;
    /**
     * 该字段已无效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReduceMediaBitrateTask?: ReduceMediaBitrateTask;
    /**
     * 获取文件属性任务信息，仅当 TaskType 为 DescribeFileAttributes，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DescribeFileAttributesTask?: DescribeFileAttributesTask;
    /**
     * 音画质检测任务信息，仅当 TaskType 为 QualityInspect 时该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualityInspectTask?: QualityInspectTask;
    /**
     * 音画质重生任务信息，仅当 TaskType 为 QualityEnhance，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualityEnhanceTask?: QualityEnhanceTask;
    /**
     * 复杂自适应码流任务信息，仅当 TaskType 为 ComplexAdaptiveDynamicStreaming，该字段有值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComplexAdaptiveDynamicStreamingTask?: ComplexAdaptiveDynamicStreamingTask;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频打点信息
 */
export interface MediaKeyFrameDescInfo {
    /**
     * 视频打点信息数组。
     */
    KeyFrameDescSet: Array<MediaKeyFrameDescItem>;
}
/**
 * DeleteImageSpriteTemplate请求参数结构体
 */
export interface DeleteImageSpriteTemplateRequest {
    /**
     * 雪碧图模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * ModifyDefaultDistributionConfig返回参数结构体
 */
export interface ModifyDefaultDistributionConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateClass请求参数结构体
 */
export interface CreateClassRequest {
    /**
     * 父类 ID，一级分类填写 -1。
     */
    ParentId: number;
    /**
     * 分类名称，长度限制：1-64 个字符。
     */
    ClassName: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * AI 样本管理，处理失败的人脸信息
 */
export interface AiSampleFailFaceInfo {
    /**
     * 对应入参 FaceContents 中错误图片下标，从 0 开始。
     */
    Index: number;
    /**
     * 错误码，取值：
  <li>0：成功；</li>
  <li>其他：失败。</li>
     */
    ErrCode: number;
    /**
     * 错误描述。
     */
    Message: string;
}
/**
 * 用户自定义人物音视频审核任务控制参数。
 */
export interface UserDefineFaceReviewTemplateInfoForUpdate {
    /**
     * 用户自定义人物音视频审核任务开关，可选值：
  <li>ON：开启自定义人物音视频审核任务；</li>
  <li>OFF：关闭自定义人物音视频审核任务。</li>
     */
    Switch?: string;
    /**
     * 用户自定义人物过滤标签，音视频审核结果包含选择的标签则返回结果，如果过滤标签为空，则音视频审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当音视频审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当音视频审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * ModifyRoundPlay返回参数结构体
 */
export interface ModifyRoundPlayResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateProcedureTemplate返回参数结构体
 */
export interface CreateProcedureTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCLSLogsets返回参数结构体
 */
export interface DescribeCLSLogsetsResponse {
    /**
     * 查询到的日志集列表。
     */
    Logsets?: Array<CLSLogsetInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyEnhanceMediaTemplate请求参数结构体
 */
export interface ModifyEnhanceMediaTemplateRequest {
    /**
     * 音画质重生模板号。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音画质重生模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 音画质重生视频控制控制信息。
     */
    RebuildVideoInfo?: RebuildVideoInfo;
    /**
     * 音画质重生音频控制控制信息。
     */
    RebuildAudioInfo?: RebuildAudioInfo;
    /**
     * 输出目标视频控制信息。
     */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /**
     * 输出目标音频控制信息。
     */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /**
     * 输出文件封装格式，可选值：mp4、flv、hls。
     */
    Container?: string;
    /**
     * 是否去除视频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值 0。
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值 0。
     */
    RemoveAudio?: number;
}
/**
 * RebuildMedia返回参数结构体
 */
export interface RebuildMediaResponse {
    /**
     * 音画质重生的任务 ID，可以通过该 ID 查询音画质重生任务的状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 域名 HTTPS 配置信息
 */
export interface DomainHTTPSConfig {
    /**
     * 证书过期时间。
  <li>格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。</li>
     */
    CertExpireTime: string;
    /**
     * 腾讯云 SSL 产品中的证书 ID。
     */
    CloudCertId?: string;
}
/**
 * DescribeMediaProcessUsageData返回参数结构体
 */
export interface DescribeMediaProcessUsageDataResponse {
    /**
     * 视频处理统计数据概览，展示所查询任务的概览以及详细数据。
     */
    MediaProcessDataSet?: Array<TaskStatData>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSuperPlayerConfigs请求参数结构体
 */
export interface DescribeSuperPlayerConfigsRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 播放器配置名字过滤条件，数组长度限制：100。
     */
    Names?: Array<string>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
    /**
     * 播放器配置类型过滤条件，可选值：
  <li>Preset：系统预置配置；</li>
  <li>Custom：用户自定义配置。</li>
     */
    Type?: string;
}
/**
 * 降码率任务结果
 */
export interface ReduceMediaBitrateMediaProcessTaskResult {
    /**
     * 任务的类型，可以取的值有：
  <li>Transcode：转码</li>
  <li>AdaptiveDynamicStreaming：自适应码流</li>
     */
    Type?: string;
    /**
     * 降码率任务中视频转码任务的查询结果，当任务类型为 Transcode 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TranscodeTask?: ReduceMediaBitrateTranscodeResult;
    /**
     * 降码率任务中对视频转自适应码流任务的查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AdaptiveDynamicStreamingTask?: ReduceMediaBitrateAdaptiveDynamicStreamingResult;
}
/**
 * 文本全文识别输入。
 */
export interface AiRecognitionTaskOcrFullTextResultInput {
    /**
     * 文本全文识别模板 ID。
     */
    Definition: number;
}
/**
 * 视频拆条的结果文件输出。
 */
export interface SplitMediaOutputConfig {
    /**
     * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
     */
    MediaName?: string;
    /**
     * 输出文件格式，可选值：mp4、hls。默认是 mp4。
     */
    Type?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId?: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime?: string;
}
/**
 * CreateVodDomain返回参数结构体
 */
export interface CreateVodDomainResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyVodDomainAccelerateConfig返回参数结构体
 */
export interface ModifyVodDomainAccelerateConfigResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频拆条输入。
 */
export interface AiRecognitionTaskSegmentResultInput {
    /**
     * 视频拆条模板 ID。
     */
    Definition: number;
}
/**
 * ModifyHeadTailTemplate请求参数结构体
 */
export interface ModifyHeadTailTemplateRequest {
    /**
     * 片头片尾模板号。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 模板名，长度限制 64 个字符。不传代表不修改。
     */
    Name?: string;
    /**
     * 模板描述，长度限制 256 个字符。不传代表不修改，传空代表清空。
     */
    Comment?: string;
    /**
     * 片头候选列表，填写视频的 FileId。转码时将自动选择与正片宽高比最接近的一个片头（相同宽高比时，靠前的候选项优先）。最多支持 5 个候选片头。不传代表不修改，传空数组代表清空。
     */
    HeadCandidateSet?: Array<string>;
    /**
     * 片尾候选列表，填写视频的 FileId。转码时将自动选择与正片宽高比最接近的一个片尾（相同宽高比时，靠前的候选项优先）。最多支持 5 个候选片头。不传代表不修改，传空数组代表清空。
     */
    TailCandidateSet?: Array<string>;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li> gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊；</li>
  <li> white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充；</li>
  <li> black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  默认值为不修改。
     */
    FillType?: string;
}
/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
    /**
     * 任务概要列表。
     */
    TaskSet?: Array<TaskSimpleInfo>;
    /**
     * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空，说明已无更多数据。
     */
    ScrollToken?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSubAppIds请求参数结构体
 */
export interface DescribeSubAppIdsRequest {
    /**
     * 应用名称。
     */
    Name?: string;
    /**
     * 标签信息，查询指定标签的应用列表。
     */
    Tags?: Array<ResourceTag>;
    /**
     * 分页拉取的起始偏移量。默认值：0。
     */
    Offset?: number;
    /**
     * 分页拉取的最大返回结果数。默认值：200；最大值：200。
     */
    Limit?: number;
}
/**
 * 人脸识别输入。
 */
export interface AiRecognitionTaskFaceResultInput {
    /**
     * 人脸识别模板 ID。
     */
    Definition: number;
}
/**
 * 音画质重生结果文件输出。
 */
export interface RebuildMediaOutputConfig {
    /**
     * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
     */
    MediaName?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId?: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime?: string;
}
/**
 * 涉及令人不适宜的信息
 */
export interface AiReviewPoliticalTaskOutput {
    /**
     * 视频涉及令人不适宜信息的评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * 涉及令人不适宜信息的结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * 视频涉及令人不适宜信息的结果标签。音视频审核模板[画面鉴政任务控制参数](https://cloud.tencent.com/document/api/266/31773#PoliticalImgReviewTemplateInfo)里 LabelSet 参数与此参数取值范围的对应关系：
  violation_photo：
  <li>violation_photo：违规图标。</li>
  其他（即 politician/entertainment/sport/entrepreneur/scholar/celebrity/military）：
  <li>politician：相关人物。</li>
     */
    Label?: string;
    /**
     * 有涉及令人不适宜信息嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<MediaContentReviewPoliticalSegmentItem>;
    /**
     * 有涉及令人不适宜的信息嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * 有涉及令人不适宜的信息嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * 音视频审核涉及令人不适宜信息的任务结果类型
 */
export interface AiReviewTaskPoliticalResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核涉及令人不适宜信息的任务输入。
     */
    Input?: AiReviewPoliticalTaskInput;
    /**
     * 音视频审核涉及令人不适宜信息的任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiReviewPoliticalTaskOutput;
    /**
     * 音视频审核涉及令人不适宜信息的任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * ModifySubAppIdStatus返回参数结构体
 */
export interface ModifySubAppIdStatusResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReviewImage返回参数结构体
 */
export interface ReviewImageResponse {
    /**
     * 图片审核任务结果。
  <font color=red>注意：该字段已废弃，建议使用 MediaReviewResult。</font>
     */
    ReviewResultSet?: Array<ContentReviewResult>;
    /**
     * 图片审核任务结果。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MediaReviewResult?: ReviewImageResult;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeStorageRegions返回参数结构体
 */
export interface DescribeStorageRegionsResponse {
    /**
     * 存储地域信息列表。
     */
    StorageRegionInfos?: Array<StorageRegionInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifySnapshotByTimeOffsetTemplate请求参数结构体
 */
export interface ModifySnapshotByTimeOffsetTemplateRequest {
    /**
     * 指定时间点截图模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 指定时间点截图模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width?: number;
    /**
     * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 图片格式，取值可以为 jpg 和 png。
     */
    Format?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  <li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
  <li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
  默认值：black 。
     */
    FillType?: string;
}
/**
 * 音视频处理任务信息
 */
export interface ProcedureTask {
    /**
     * 音视频处理任务 ID。
     */
    TaskId?: string;
    /**
     * 任务流状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status?: string;
    /**
     * 已弃用，请使用各个具体任务的 ErrCode。
     */
    ErrCode?: number;
    /**
     * 已弃用，请使用各个具体任务的 Message。
     */
    Message?: string;
    /**
     * 媒体文件 ID
  <li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 FileId；</li>
  <li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Id。</li>
     */
    FileId?: string;
    /**
     * 媒体文件名称
  <li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 BasicInfo.Name；</li>
  <li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Name。</li>
     */
    FileName?: string;
    /**
     * 媒体文件地址
  <li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 BasicInfo.MediaUrl；</li>
  <li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Url。</li>
     */
    FileUrl?: string;
    /**
     * 原始音视频的元信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaData?: MediaMetaData;
    /**
     * 音视频处理任务的执行状态与结果。
     */
    MediaProcessResultSet?: Array<MediaProcessTaskResult>;
    /**
     * 音视频审核任务的执行状态与结果。
     */
    AiContentReviewResultSet?: Array<AiContentReviewResult>;
    /**
     * 音视频内容分析任务的执行状态与结果。
     */
    AiAnalysisResultSet?: Array<AiAnalysisResult>;
    /**
     * 音视频内容识别任务的执行状态与结果。
     */
    AiRecognitionResultSet?: Array<AiRecognitionResult>;
    /**
     * 任务流的优先级，取值范围为 [-10, 10]。
     */
    TasksPriority?: number;
    /**
     * 任务流状态变更通知模式。
  <li>Finish：只有当任务流全部执行完毕时，才发起一次事件通知；</li>
  <li>Change：只要任务流中每个子任务的状态发生变化，都进行事件通知；</li>
  <li>None：不接受该任务流回调。</li>
     */
    TasksNotifyMode?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 操作者。取值范围：
  <li>System: 表示系统触发。</li>
     */
    Operator?: string;
    /**
     * 操作类型。取值范围：
  <li>TSC: 表示使用极速高清进行智能降码。</li>
     */
    OperationType?: string;
}
/**
 * CreateCLSLogset请求参数结构体
 */
export interface CreateCLSLogsetRequest {
    /**
     * 日志集所属的地域，取值有： <li>ap-guangzhou：广州；</li> <li>ap-beijing：北京；</li> <li>ap-chengdu：成都；</li> <li>ap-chongqing：重庆；</li> <li>ap-nanjing：南京；</li> <li>ap-shanghai：上海；</li> <li>ap-singapore：新加坡。</li>
     */
    CLSRegion: string;
}
/**
 * ExtractTraceWatermark请求参数结构体
 */
export interface ExtractTraceWatermarkRequest {
    /**
     * 需要提取水印的媒体 URL。
     */
    Url: string;
    /**
     * 媒体文件 ID。Url 对应的原始媒体文件 ID。
  <li><font color=red>注意</font>：此字段必填。</li>
     */
    FileId?: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 标识来源上下文，用于透传用户请求信息，在ExtractTraceWatermarkComplete回调和任务流状态变更回调将返回该字段值，最长 1000个字符。
     */
    SessionContext?: string;
    /**
     * 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * 任务概要信息
 */
export interface TaskSimpleInfo {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 任务状态。取值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）、ABORTED（已终止）。
     */
    Status?: string;
    /**
     * 视频 ID。
     */
    FileId?: string;
    /**
     * 任务类型，取值：
  <li>Procedure：视频处理任务；</li>
  <li>EditMedia：视频编辑任务；</li>
  <li>ReduceMediaBitrate：降码率任务；</li>
  <li>WechatDistribute：微信发布任务；</li>
  <li>ReviewAudioVideo：音视频审核任务。</li>
  兼容 2017 版的任务类型：
  <li>Transcode：视频转码任务；</li>
  <li>SnapshotByTimeOffset：视频截图任务；</li>
  <li>Concat：视频拼接任务；</li>
  <li>Clip：视频剪辑任务；</li>
  <li>ImageSprites：截取雪碧图任务。</li>
     */
    TaskType?: string;
    /**
     * 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。若任务尚未开始，该字段为空。
     */
    BeginProcessTime?: string;
    /**
     * 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。若任务尚未完成，该字段为空。
     */
    FinishTime?: string;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息。
     */
    SessionContext?: string;
}
/**
 * 音视频审核任务信息。
 */
export interface ReviewAudioVideoTask {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 任务状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核任务的输入。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input?: ReviewAudioVideoTaskInput;
    /**
     * 音视频审核任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: ReviewAudioVideoTaskOutput;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，音视频审核完成回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
}
/**
 * DescribeSnapshotByTimeOffsetTemplates返回参数结构体
 */
export interface DescribeSnapshotByTimeOffsetTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 指定时间点截图模板详情列表。
     */
    SnapshotByTimeOffsetTemplateSet?: Array<SnapshotByTimeOffsetTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 域名 QUIC 配置信息
 */
export interface DomainQUICConfig {
    /**
     * QUIC 配置状态，可选值：
  <li>Enabled: 启用；</li>
  <li>Disabled: 禁用。</li>
     */
    Status: string;
}
/**
 * SetDrmKeyProviderInfo请求参数结构体
 */
export interface SetDrmKeyProviderInfoRequest {
    /**
     * 华曦达（SDMC）相关的 DRM 密钥提供商信息。
     */
    SDMCInfo?: SDMCDrmKeyProviderInfo;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 指定时间点截图模板详情
 */
export interface SnapshotByTimeOffsetTemplate {
    /**
     * 指定时间点截图模板唯一标识。
     */
    Definition: number;
    /**
     * 模板类型，取值范围：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type: string;
    /**
     * 指定时间点截图模板名称。
     */
    Name: string;
    /**
     * 模板描述信息。
     */
    Comment: string;
    /**
     * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width: number;
    /**
     * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive: string;
    /**
     * 图片格式。
     */
    Format: string;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime: string;
    /**
     * 填充方式，当截图配置宽高参数与原始视频的宽高比不一致时，对截图的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  <li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
  <li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
  默认值：black 。
     */
    FillType: string;
}
/**
 * DeleteSnapshotByTimeOffsetTemplate返回参数结构体
 */
export interface DeleteSnapshotByTimeOffsetTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文本违禁任务控制参数
 */
export interface ProhibitedOcrReviewTemplateInfoForUpdate {
    /**
     * 文本违禁任务开关，可选值：
  <li>ON：开启文本违禁任务；</li>
  <li>OFF：关闭文本违禁任务。</li>
     */
    Switch?: string;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * DescribeCLSPushTargets请求参数结构体
 */
export interface DescribeCLSPushTargetsRequest {
    /**
     * 点播域名。
     */
    Domains: Array<string>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 过滤条件：任务状态，可选值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）。
     */
    Status?: string;
    /**
     * 过滤条件：文件 ID。
     */
    FileId?: string;
    /**
     * 过滤条件：任务创建时间。
     */
    CreateTime?: TimeRange;
    /**
     * 过滤条件：任务结束时间。
     */
    FinishTime?: TimeRange;
    /**
     * 排序方式。Sort.Field 可选：
  <li> CreateTime 任务创建时间。</li>
  <li>FinishTime 任务结束时间。</li>
     */
    Sort?: SortBy;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
    /**
     * 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。
     */
    ScrollToken?: string;
}
/**
 * DescribeReviewDetails返回参数结构体
 */
export interface DescribeReviewDetailsResponse {
    /**
     * 发起内容智能识别次数。
     */
    TotalCount?: number;
    /**
     * 内容智能识别总时长。
     */
    TotalDuration?: number;
    /**
     * 内容智能识别时长统计数据，每天一个数据。
     */
    Data?: Array<StatDataItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateTranscodeTemplate返回参数结构体
 */
export interface CreateTranscodeTemplateResponse {
    /**
     * 转码模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音频降噪控制信息
 */
export interface AudioDenoiseInfo {
    /**
     * 音频降噪控制开关，可选值：
  <li>ON：开启音频降噪；</li>
  <li>OFF：关闭音频降噪。</li>
     */
    Switch: string;
    /**
     * 音频降噪类型，仅当音频降噪控制开关为 ON 时有效，可选值：
  <li>weak：轻音频降噪；</li>
  <li>normal：正常音频降噪；</li>
  <li>strong：强音频降噪。</li>
  默认值：weak。
     */
    Type?: string;
}
/**
 * 语音关键词识别输入。
 */
export interface AiRecognitionTaskAsrWordsResultInput {
    /**
     * 语音关键词识别模板 ID。
     */
    Definition: number;
}
/**
 * 截图输出信息（2017 版）
 */
export interface SnapshotByTimeOffset2017 {
    /**
     * 错误码
  <li>0：成功；</li>
  <li>其他值：失败。</li>
     */
    ErrCode: number;
    /**
     * 截图的具体时间点，单位：毫秒。
     */
    TimeOffset: number;
    /**
     * 截图输出文件地址。
     */
    Url: string;
}
/**
 * CreateAIAnalysisTemplate请求参数结构体
 */
export interface CreateAIAnalysisTemplateRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音视频内容分析模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 音视频内容分析模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 智能分类任务控制参数。
     */
    ClassificationConfigure?: ClassificationConfigureInfo;
    /**
     * 智能标签任务控制参数。
     */
    TagConfigure?: TagConfigureInfo;
    /**
     * 智能封面任务控制参数。
     */
    CoverConfigure?: CoverConfigureInfo;
    /**
     * 智能按帧标签任务控制参数。
     */
    FrameTagConfigure?: FrameTagConfigureInfo;
    /**
     * 智能精彩集锦任务控制参数。
     */
    HighlightConfigure?: HighlightsConfigureInfo;
}
/**
 * 音视频审核涉及令人不安全的信息的任务输入参数类型
 */
export interface AiReviewTerrorismTaskInput {
    /**
     * 鉴别涉及令人不安全的信息的模板 ID。
     */
    Definition?: number;
}
/**
 * 自适应码流任务的流参数。
 */
export interface ComplexAdaptiveDynamicStreamingTaskStreamPara {
    /**
     * 自适应码流模板 ID。
     */
    Definition: number;
}
/**
 * RebuildMediaByTemplate返回参数结构体
 */
export interface RebuildMediaByTemplateResponse {
    /**
     * 视频重生的任务 ID，可以通过该 ID 查询视频重生任务的状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 点播文件音频流信息
 */
export interface MediaAudioStreamItem {
    /**
     * 音频流的码率，单位：bps。
     */
    Bitrate?: number;
    /**
     * 音频流的采样率，单位：hz。
     */
    SamplingRate?: number;
    /**
     * 音频流的编码格式，例如 aac。
     */
    Codec?: string;
}
/**
 * EnhanceMediaByTemplate请求参数结构体
 */
export interface EnhanceMediaByTemplateRequest {
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * 音画质重生模板 ID。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 起始偏移时间，单位：秒，不填表示从视频开始截取。
     */
    StartTimeOffset?: number;
    /**
     * 结束偏移时间，单位：秒，不填表示截取到视频末尾。
     */
    EndTimeOffset?: number;
    /**
     * 音画质重生后的文件配置。
     */
    OutputConfig?: RebuildMediaOutputConfig;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * 子应用信息。
 */
export interface SubAppIdInfo {
    /**
     * 子应用 ID。
     */
    SubAppId?: number;
    /**
     * 子应用名称。
     */
    SubAppIdName?: string;
    /**
     * 子应用简介。
     */
    Description?: string;
    /**
     * 子应用创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 子应用状态，有效值：
  <li>On：启用；</li>
  <li>Off：停用。</li>
  <li>Destroying：销毁中。</li>
  <li>Destroyed：销毁完成。</li>
     */
    Status?: string;
    /**
     * 子应用名称（该字段已不推荐使用，建议使用新的子应用名称字段 SubAppIdName）。
     */
    Name?: string;
}
/**
 * DescribeAllClass返回参数结构体
 */
export interface DescribeAllClassResponse {
    /**
     * 分类信息集合
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClassInfoSet?: Array<MediaClassInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyImageSpriteTemplate请求参数结构体
 */
export interface ModifyImageSpriteTemplateRequest {
    /**
     * 雪碧图模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 雪碧图模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 雪碧图中小图的宽度，取值范围： [128, 4096]，单位：px。
     */
    Width?: number;
    /**
     * 雪碧图中小图的高度，取值范围： [128, 4096]，单位：px。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 采样类型，取值：
  <li>Percent：按百分比。</li>
  <li>Time：按时间间隔。</li>
     */
    SampleType?: string;
    /**
     * 采样间隔。
  <li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
  <li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
     */
    SampleInterval?: number;
    /**
     * 雪碧图中小图的行数。
     */
    RowCount?: number;
    /**
     * 雪碧图中小图的列数。
     */
    ColumnCount?: number;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  默认值：black 。
     */
    FillType?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 图片格式，取值：
  <li> jpg：jpg 格式；</li>
  <li> png：png 格式；</li>
  <li> webp：webp 格式。</li>
     */
    Format?: string;
}
/**
 * 音视频审核 Ocr 文字鉴违禁任务输入参数类型
 */
export interface AiReviewProhibitedOcrTaskInput {
    /**
     * 鉴违禁模板 ID。
     */
    Definition?: number;
}
/**
 * DeleteWatermarkTemplate请求参数结构体
 */
export interface DeleteWatermarkTemplateRequest {
    /**
     * 水印模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DeleteVodDomain返回参数结构体
 */
export interface DeleteVodDomainResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 编辑视频流信息
 */
export interface EditMediaStreamInfo {
    /**
     * 录制的流 ID
     */
    StreamId: string;
    /**
     * 流剪辑的起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    StartTime?: string;
    /**
     * 流剪辑的结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    EndTime?: string;
}
/**
 * DescribeWordSamples请求参数结构体
 */
export interface DescribeWordSamplesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * <b>关键词应用场景过滤条件，可选值：</b>
  1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；
  2. Recognition.Asr：通过音频识别技术，进行内容识别；
  3. Review.Ocr：通过光学字符识别技术，进行不适宜的内容识别；
  4. Review.Asr：通过音频识别技术，进行不适宜的内容识别；
  <b>可合并简写为：</b>
  5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；
  6. Review：通过光学字符识别技术、音频识别技术，进行不适宜的内容识别，等价于 3+4；
  可多选，元素间关系为 or，即关键词的应用场景包含该字段集合中任意元素的记录，均符合该条件。
     */
    Usages?: Array<string>;
    /**
     * 关键词过滤条件，数组长度限制：100 个词。
     */
    Keywords?: Array<string>;
    /**
     * 标签过滤条件，数组长度限制：20 个词。
     */
    Tags?: Array<string>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：100，最大值：100。
     */
    Limit?: number;
}
/**
 * 图片中心裁剪处理。
 */
export interface ImageCenterCut {
    /**
     * 图片的裁剪模式，可选 Circle 和 Rectangle。
  <li>Circle ： 内切圆裁剪，输出图片半径为 Radius。</li>
  <li>Rectangle ： 矩形裁剪，输出图片宽为 Width ， 高为 Height。</li>
     */
    Type: string;
    /**
     * 输出图片的宽度，单位为像素，当 Type 取值为 Rectangle 时有效。
     */
    Width?: number;
    /**
     * 输出图片的高度，单位为像素，当 Type 取值为 Rectangle 时有效。
     */
    Height?: number;
    /**
     * 输出图片的半径，单位为像素，当 Type 取值为 Circle 时有效。
     */
    Radius?: number;
}
/**
 * ModifyAIAnalysisTemplate请求参数结构体
 */
export interface ModifyAIAnalysisTemplateRequest {
    /**
     * 音视频内容分析模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音视频内容分析模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 音视频内容分析模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 智能分类任务控制参数。
     */
    ClassificationConfigure?: ClassificationConfigureInfoForUpdate;
    /**
     * 智能标签任务控制参数。
     */
    TagConfigure?: TagConfigureInfoForUpdate;
    /**
     * 智能封面任务控制参数。
     */
    CoverConfigure?: CoverConfigureInfoForUpdate;
    /**
     * 智能按帧标签任务控制参数。
     */
    FrameTagConfigure?: FrameTagConfigureInfoForUpdate;
    /**
     * 智能精彩集锦任务控制参数。
     */
    HighlightConfigure?: HighlightsConfigureInfoForUpdate;
}
/**
 * CommitUpload返回参数结构体
 */
export interface CommitUploadResponse {
    /**
     * 媒体文件的唯一标识。
     */
    FileId?: string;
    /**
     * 媒体播放地址。
     */
    MediaUrl?: string;
    /**
     * 媒体封面地址。
     */
    CoverUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 提取版权水印任务输入
 */
export interface ExtractCopyRightWatermarkTaskInput {
    /**
     * 需要提取水印的媒体 URL。
     */
    Url?: string;
}
/**
 * 语音翻译识别任务控制参数
 */
export interface AsrTranslateConfigureInfo {
    /**
     * 语音翻译识别任务开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li><font color=red>注意：</font>语音翻译识别任务本身会返回 ASR 全文识别结果，为避免重复收费，因此禁止同时开启语音翻译识别和 ASR 全文识别功能项。
  
     */
    Switch: string;
    /**
     * 媒体源语言，当 Switch 为 ON 时，此参数必填。取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>ja：日文；</li>
  <li>ko：韩文；</li>
  <li>vi：越南语；</li>
  <li>ms：马来语；</li>
  <li>th：泰语；</li>
  <li>pt：葡萄牙语；</li>
  <li>tr：土耳其语；</li>
  <li>ar：阿拉伯语；</li>
  <li>es：西班牙语；</li>
  <li>hi：印地语；</li>
  <li>fr：法语。</li>
     */
    SrcLanguage?: string;
    /**
     * 翻译目标语言，当 Switch 为 ON 时，此参数有效。
  若此参数不填或者填写空字符串，则表示只进行语音全文识别，不进行翻译（计费项与 AsrFullTextConfigure 语音全文识别一致）；
  否则，此参数的取值范围分为如下几种情况：
  当 SrcLanguage 为 zh（中文）时，取值范围：
  <li>en：英文；</li>
  <li>ja：日文；</li>
  <li>ko：韩文；</li>
  <li>fr：法语；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语；</li>
  <li>vi：越南语；</li>
  <li>id：印尼语；</li>
  <li>th：泰语；</li>
  <li>ms：马来语。</li>
  当 SrcLanguage 为 en（英文）时，取值范围：
  <li>zh：中文；</li>
  <li>ja：日文；</li>
  <li>ko：韩文；</li>
  <li>fr：法语；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语；</li>
  <li>vi：越南语；</li>
  <li>id：印尼语；</li>
  <li>th：泰语；</li>
  <li>ms：马来语；</li>
  <li>ar：阿拉伯语；</li>
  <li>hi：印地语。</li>
  当 SrcLanguage 为 ja（日文）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>ko：韩文。</li>
  当 SrcLanguage 为 ko（韩文）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>ja：日文。</li>
  当 SrcLanguage 为 vi（越南语）或 ms（马来语）或 th（泰语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文。</li>
  当 SrcLanguage 为 pt（葡萄牙语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>fr：法语；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语。</li>
  当 SrcLanguage 为 tr（土耳其语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>fr：法语；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语。</li>
  当 SrcLanguage 为 es（西班牙语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>fr：法语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语。</li>
  当 SrcLanguage 为 ar（阿拉伯语）或 hi（印地语）时，取值范围：
  <li>en：英文。</li>
  当 SrcLanguage 为 fr（法语）时，取值范围：
  <li>zh：中文；</li>
  <li>en：英文；</li>
  <li>es：西班牙语；</li>
  <li>it：意大利语；</li>
  <li>de：德语；</li>
  <li>tr：土耳其语；</li>
  <li>ru：俄语；</li>
  <li>pt：葡萄牙语。</li>
     */
    DstLanguage?: string;
    /**
     * 生成的字幕文件格式列表，不填或者填空数组表示不生成字幕文件，可选值：
  <li>vtt：生成 WebVTT 字幕文件；</li>
  <li>srt：生成 SRT 字幕文件。</li><font color=red>注意：</font> 云点播媒资信息仅支持添加 vtt 字幕，因此当且仅当 SubtitleFormats 包含 vtt 时，云点播将生成的字幕添加到媒资。
     */
    SubtitleFormats?: Array<string>;
    /**
     * 指定字幕名称，长度限制：64 个字符。该值将用于播放器展示，若不填则云点播自动生成。
  <font color=red>注意：</font>仅当 SubtitleFormats 包含 vtt 时，该字段有效。
  
     */
    SubtitleName?: string;
}
/**
 * DescribeSampleSnapshotTemplates返回参数结构体
 */
export interface DescribeSampleSnapshotTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 采样截图模板详情列表。
     */
    SampleSnapshotTemplateSet?: Array<SampleSnapshotTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音视频审核涉及令人反感的信息、涉及令人不安全的信息的嫌疑片段
 */
export interface MediaContentReviewSegmentItem {
    /**
     * 嫌疑片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 嫌疑片段结束的偏移时间，单位：秒。
     */
    EndTimeOffset?: number;
    /**
     * 嫌疑片段涉及令人反感的信息的分数。
     */
    Confidence?: number;
    /**
     * 嫌疑片段涉及令人反感的信息的结果标签。
     */
    Label?: string;
    /**
     * 嫌疑片段鉴别涉及令人反感的信息的结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * 嫌疑图片 URL （图片不会永久存储，到达
   PicUrlExpireTime 时间点后图片将被删除）。
     */
    Url?: string;
    /**
     * 该字段已废弃，请使用 PicUrlExpireTime。
     */
    PicUrlExpireTimeStamp?: number;
    /**
     * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    PicUrlExpireTime?: string;
}
/**
 * 音视频审核结果
 */
export interface AiContentReviewResult {
    /**
     * 任务的类型，可以取的值有：
  <li>Porn：图片鉴别是否涉及令人反感的信息</li>
  <li>Terrorism：图片鉴别是否涉及令人不安全的信息</li>
  <li>Political：图片鉴别是否涉及令人不适宜的信息</li>
  <li>Porn.Asr：Asr 文字（ 音频中的文字）鉴别是否涉及令人反感的信息</li>
  <li>Porn.Ocr：Ocr 文字鉴别是否涉及令人反感的信息</li>
  <li>Political.Asr：Asr 文字（ 音频中的文字）鉴别是否涉及令人不适宜的信息</li>
  <li>Political.Ocr：Ocr 文字鉴别是否涉及令人不适宜的信息</li>
  <li>Terrorism.Ocr：Ocr 文字鉴别是否涉及令人不安全的信息</li>
  <li>Prohibited.Asr：Asr 文字（ 音频中的文字）鉴违禁</li>
  <li>Prohibited.Ocr：Ocr 文字鉴违禁</li>
     */
    Type?: string;
    /**
     * 视频音视频审核任务（画面涉及令人反感的信息）的查询结果，当任务类型为 Porn 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PornTask?: AiReviewTaskPornResult;
    /**
     * 视频音视频审核任务（画面涉及令人不安全的信息）的查询结果，当任务类型为 Terrorism 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerrorismTask?: AiReviewTaskTerrorismResult;
    /**
     * 视频音视频审核任务（画面涉及令人不适宜的信息）的查询结果，当任务类型为 Political 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PoliticalTask?: AiReviewTaskPoliticalResult;
    /**
     * 视频音视频审核任务（Asr 文字涉及令人反感的信息）的查询结果，当任务类型为 Porn.Asr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PornAsrTask?: AiReviewTaskPornAsrResult;
    /**
     * 视频音视频审核任务（Ocr 文字涉及令人反感的信息）的查询结果，当任务类型为 Porn.Ocr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PornOcrTask?: AiReviewTaskPornOcrResult;
    /**
     * 视频音视频审核任务（Asr 文字涉及令人不适宜的信息）的查询结果，当任务类型为 Political.Asr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PoliticalAsrTask?: AiReviewTaskPoliticalAsrResult;
    /**
     * 视频音视频审核任务（Ocr 文字涉及令人不适宜的信息）的查询结果，当任务类型为 Political.Ocr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PoliticalOcrTask?: AiReviewTaskPoliticalOcrResult;
    /**
     * 视频音视频审核任务（ Ocr 文字涉及令人不安全的信息）的查询结果，当任务类型为 Terrorism.Ocr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerrorismOcrTask?: AiReviewTaskTerrorismOcrResult;
    /**
     * 视频音视频审核 Ocr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Ocr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProhibitedOcrTask?: AiReviewTaskProhibitedOcrResult;
    /**
     * 视频音视频审核 Asr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Asr 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ProhibitedAsrTask?: AiReviewTaskProhibitedAsrResult;
}
/**
 * 降码率任务信息
 */
export interface ReduceMediaBitrateTask {
    /**
     * 视频处理任务 ID。
     */
    TaskId?: string;
    /**
     * 任务流状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status?: string;
    /**
     * 媒体文件 ID。
     */
    FileId?: string;
    /**
     * 媒体文件名称。
     */
    FileName?: string;
    /**
     * 媒体文件地址。
     */
    FileUrl?: string;
    /**
     * 原始视频的元信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaData?: MediaMetaData;
    /**
     * 降码率任务执行状态与结果。
     */
    MediaProcessResultSet?: Array<ReduceMediaBitrateMediaProcessTaskResult>;
    /**
     * 任务流的优先级，取值范围为 [-10, 10]。
     */
    TasksPriority?: number;
    /**
     * 任务流状态变更通知模式。
  <li>Finish：只有当任务流全部执行完毕时，才发起一次事件通知；</li>
  <li>None：不接受该任务流回调。</li>
     */
    TasksNotifyMode?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
}
/**
 * 画面鉴别涉及令人不安全的信息的任务控制参数
 */
export interface TerrorismImgReviewTemplateInfo {
    /**
     * 画面鉴别涉及令人不安全的信息的任务开关，可选值：
  <li>ON：开启画面鉴别涉及令人不安全的信息的任务；</li>
  <li>OFF：关闭画面鉴别涉及令人不安全的信息的任务。</li>
     */
    Switch: string;
    /**
     * 画面鉴别涉及令人不安全的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
  <li>guns：武器枪支；</li>
  <li>crowd：人群聚集；</li>
  <li>bloody：血腥画面；</li>
  <li>police：警察部队；</li>
  <li>banners：暴恐旗帜；</li>
  <li>militant：武装分子；</li>
  <li>explosion：爆炸火灾；</li>
  <li>terrorists：暴恐人物；</li>
  <li>scenario：暴恐画面。</li>
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 80 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * ApplyUpload返回参数结构体
 */
export interface ApplyUploadResponse {
    /**
     * 存储桶，用于上传接口 URL 的 bucket_name。
     */
    StorageBucket?: string;
    /**
     * 存储园区，用于上传接口 Host 的 Region。
     */
    StorageRegion?: string;
    /**
     * 点播会话，用于确认上传接口的参数 VodSessionKey。
     */
    VodSessionKey?: string;
    /**
     * 媒体存储路径，用于上传接口存储媒体的对象键（Key）。
     */
    MediaStoragePath?: string;
    /**
     * 封面存储路径，用于上传接口存储封面的对象键（Key）。
     */
    CoverStoragePath?: string;
    /**
     * 临时凭证，用于上传接口的权限验证。
     */
    TempCertificate?: TempCertificate;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReviewAudioVideo返回参数结构体
 */
export interface ReviewAudioVideoResponse {
    /**
     * 任务 ID
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteClass请求参数结构体
 */
export interface DeleteClassRequest {
    /**
     * 分类 ID
     */
    ClassId: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DescribeTranscodeTemplates请求参数结构体
 */
export interface DescribeTranscodeTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 转码模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 封装格式过滤条件，可选值：
  <li>Video：视频格式，可以同时包含视频流和音频流的封装格式板；</li>
  <li>PureAudio：纯音频格式，只能包含音频流的封装格式。</li>
     */
    ContainerType?: string;
    /**
     * 极速高清过滤条件，用于过滤普通转码或极速高清转码模板，可选值：
  <li>Common：普通转码模板；</li>
  <li>TEHD：极速高清模板。</li>
     */
    TEHDType?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * 音画质重生任务输出
 */
export interface QualityEnhanceTaskOutput {
    /**
     * 文件类型，例如 mp4、flv 等。
     */
    FileType?: string;
    /**
     * 媒体文件播放地址。
     */
    FileUrl?: string;
    /**
     * 媒体文件 ID。
     */
    FileId?: string;
    /**
     * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
     */
    MediaName?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId?: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime?: string;
}
/**
 * 审核模版详情
 */
export interface ReviewTemplate {
    /**
     * 审核模版唯一标签。
     */
    Definition?: number;
    /**
     * 模板名称。
     */
    Name?: string;
    /**
     * 模板描述信息。
     */
    Comment?: string;
    /**
     * 模板类型，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 需要返回的违规标签列表。
     */
    Labels?: Array<string>;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
}
/**
 * DescribeCurrentPlaylist请求参数结构体
 */
export interface DescribeCurrentPlaylistRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。</b>
     */
    SubAppId: number;
    /**
     * 轮播播单唯一标识。
     */
    RoundPlayId: string;
    /**
     * 返回的播放列表的长度。最大10，默认值为5。
     */
    Limit?: number;
}
/**
 * FastEditMedia请求参数结构体
 */
export interface FastEditMediaRequest {
    /**
     * 输入的媒体文件信息。最多支持传入100个媒体。
     */
    FileInfos: Array<FastEditMediaFileInfo>;
    /**
     * ClipMode 用来表示剪辑时间点落在一个 TS 分片中间时，是否包含这个分片。共有两种取值： <li>StartInclusiveEndInclusive：当剪辑起始时间点和结束时间点落在一个分片的中间时，都会包含这个分片；</li> <li>StartInclusiveEndExclusive：当起始时间点落在一个分片的中间时，会包含这个分片；而当结束时间点落在一个分片的中间时，不会包含这个分片。</li> 不填时，默认为 StartInclusiveEndInclusive。
     */
    ClipMode?: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 点播文件视频流信息
 */
export interface MediaVideoStreamItem {
    /**
     * 视频流的码率，单位：bps。
     */
    Bitrate?: number;
    /**
     * 视频流的高度，单位：px。
     */
    Height?: number;
    /**
     * 视频流的宽度，单位：px。
     */
    Width?: number;
    /**
     * 视频流的编码格式，例如 h264。
     */
    Codec?: string;
    /**
     * 帧率，单位：hz。
     */
    Fps?: number;
    /**
     * 编码标签，仅当 Codec 为 hevc 时有效。
     */
    CodecTag?: string;
    /**
     * 画面动态范围信息。
  <li><font color=red>注意</font>：在 2023-01-10T00:00:00Z 后处理的转码文件，此字段有效。</li>
     */
    DynamicRangeInfo?: DynamicRangeInfo;
}
/**
 * CreateRebuildMediaTemplate请求参数结构体
 */
export interface CreateRebuildMediaTemplateRequest {
    /**
     * 输出文件封装格式，可选值：mp4、flv、hls。
     */
    Container: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音画质重生模板名称。
     */
    Name?: string;
    /**
     * 模板描述。
     */
    Comment?: string;
    /**
     * 音画质重生视频控制控制信息。
     */
    RebuildVideoInfo?: RebuildVideoInfo;
    /**
     * 音画质重生音频控制控制信息。
     */
    RebuildAudioInfo?: RebuildAudioInfo;
    /**
     * 输出目标视频控制信息。
     */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /**
     * 输出目标音频控制信息。
     */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /**
     * 是否去除视频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值 0。
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值 0。
     */
    RemoveAudio?: string;
}
/**
 * 单个图片处理操作。
 */
export interface ImageOperation {
    /**
     * 图片处理类型。可选类型有：
  <li>Scale : 图片缩略处理；</li>
  <li>CenterCut : 图片裁剪处理；</li>
  <li>Blur : 图片模糊处理。</li>
     */
    Type: string;
    /**
     * 图片缩略处理，仅当 Type 为 Scale 时有效。
     */
    Scale?: ImageScale;
    /**
     * 图片裁剪处理，仅当 Type 为 CenterCut 时有效。
     */
    CenterCut?: ImageCenterCut;
    /**
     * 图片模糊处理，仅当 Type 为 Blur 时有效。
     */
    Blur?: ImageBlur;
}
/**
 * 转自适应码流子流信息。
 */
export interface MediaSubStreamInfoItem {
    /**
     * 子流类型，取值范围：
  <li>audio：纯音频；</li>
  <li>video：视频（可能包含音频流）。</li>
     */
    Type?: string;
    /**
     * 当子流为视频流时，视频画面宽度，单位：px。
     */
    Width?: number;
    /**
     * 当子流为视频流时，视频画面高度，单位：px。
     */
    Height?: number;
    /**
     * 子流媒体文件大小，单位：Byte。
  <font color=red>注意：</font>在 2023-02-09T16:00:00Z 前处理生成的自适应码流文件此字段为0。
     */
    Size?: number;
}
/**
 * 视频画面马赛克检测的控制参数。
 */
export interface MosaicConfigureInfoForUpdate {
    /**
     * 视频画面马赛克检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
}
/**
 * DescribeWatermarkTemplates返回参数结构体
 */
export interface DescribeWatermarkTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 水印模板详情列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WatermarkTemplateSet?: Array<WatermarkTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * WeChatMiniProgramPublish返回参数结构体
 */
export interface WeChatMiniProgramPublishResponse {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRoundPlays返回参数结构体
 */
export interface DescribeRoundPlaysResponse {
    /**
     * 符合过滤条件的轮播播单总数。已经废弃，分批次查询请请使用 ScrollToken 参数。
     */
    TotalCount?: number;
    /**
     * 轮播播单详情列表。
     */
    RoundPlaySet?: Array<RoundPlayInfo>;
    /**
     * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空，说明已无更多数据。
     */
    ScrollToken?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 图像旋转、翻转等操作
 */
export interface ImageTransform {
    /**
     * 类型，取值有：
  <li> Rotate：图像旋转。</li>
  <li> Flip：图像翻转。</li>
     */
    Type: string;
    /**
     * 图像以中心点为原点进行旋转的角度，取值范围0~360。当 Type = Rotate 时有效。
     */
    RotateAngle?: number;
    /**
     * 图像翻转动作，取值有：
  <li>Horizental：水平翻转，即左右镜像。</li>
  <li>Vertical：垂直翻转，即上下镜像。</li>
  当 Type = Flip 时有效。
     */
    Flip?: string;
}
/**
 * CreateAnimatedGraphicsTemplate请求参数结构体
 */
export interface CreateAnimatedGraphicsTemplateRequest {
    /**
     * 帧率，取值范围：[1, 30]，单位：Hz。
     */
    Fps: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width?: number;
    /**
     * 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 动图格式，取值为 gif 和 webp。默认为 gif。
     */
    Format?: string;
    /**
     * 图片质量，取值范围：[1, 100]，默认值为 75。
     */
    Quality?: number;
    /**
     * 转动图模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
}
/**
 * 智能按帧标签任务控制参数
 */
export interface FrameTagConfigureInfo {
    /**
     * 智能按帧标签任务开关，可选值：
  <li>ON：开启智能按帧标签任务；</li>
  <li>OFF：关闭智能按帧标签任务。</li>
     */
    Switch: string;
    /**
     * 截帧间隔，单位为秒，当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
     */
    ScreenshotInterval?: number;
}
/**
 * RemoveWatermark请求参数结构体
 */
export interface RemoveWatermarkRequest {
    /**
     * 媒体文件 ID 。
     */
    FileId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。
     */
    TasksPriority?: number;
    /**
     * 该字段已无效。
     */
    TasksNotifyMode?: string;
}
/**
 * ExecuteFunction请求参数结构体
 */
export interface ExecuteFunctionRequest {
    /**
     * 调用后端接口名称。
     */
    FunctionName: string;
    /**
     * 接口参数，具体参数格式调用时与后端协调。
     */
    FunctionArg: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * 音画质重生任务
 */
export interface RebuildMediaTask {
    /**
     * 任务 ID。
     */
    TaskId: string;
    /**
     * 任务流状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status: string;
    /**
     * 错误码，0 表示成功，其他值表示失败：
  <li>40000：输入参数不合法，请检查输入参数；</li>
  <li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
  <li>70000：内部服务错误，建议重试。</li>
     */
    ErrCode: number;
    /**
     * 错误信息。
     */
    Message: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt: string;
    /**
     * 音画质重生任务进度，取值范围 [0-100] 。
     */
    Progress: number;
    /**
     * 音画质重生任务的输入。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input: RebuildMediaTaskInput;
    /**
     * 音画质重生任务的输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output: RebuildMediaTaskOutput;
    /**
     * 音画质重生输出视频的元信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MetaData: MediaMetaData;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext: string;
}
/**
 * ConfirmEvents返回参数结构体
 */
export interface ConfirmEventsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyPersonSample返回参数结构体
 */
export interface ModifyPersonSampleResponse {
    /**
     * 素材信息。
     */
    Person?: AiSamplePerson;
    /**
     * 处理失败的五官信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FailFaceInfoSet?: Array<AiSampleFailFaceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频轨的视频片段信息。
 */
export interface VideoTrackItem {
    /**
     * 视频片段的媒体素材来源，可以是：
  <li>点播的媒体文件 ID；</li>
  <li>其他媒体文件的下载 URL。</li>
  注意：当使用其他媒体文件的下载 URL 作为素材来源，且开启了访问控制（如防盗链）时，需要在 URL 携带访问控制参数（如防盗链签名）。
     */
    SourceMedia: string;
    /**
     * 视频片段取自素材文件的起始时间，单位为秒。默认为0。
     */
    SourceMediaStartTime?: number;
    /**
     * 视频片段时长，单位为秒。默认取视频素材本身长度，表示截取全部素材。如果源文件是图片，Duration需要大于0。
     */
    Duration?: number;
    /**
     * 视频片段目标时长，单位为秒。
  <li>当 TargetDuration 不填或填0时，表示目标时长和 Duration 一致；</li>
  <li>当 TargetDuration 取大于0的值时，将对视频片段做快进或慢放等处理，使得输出片段的时长等于 TargetDuration。</li>
     */
    TargetDuration?: number;
    /**
     * 视频原点位置，取值有：
  <li>Center：坐标原点为中心位置，如画布中心。</li>
  默认值 ：Center。
     */
    CoordinateOrigin?: string;
    /**
     * 视频片段原点距离画布原点的水平位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示视频片段 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布口宽度的 10%。</li>
  <li>当字符串以 px 结尾，表示视频片段 XPos 单位为像素，如 100px 表示 XPos 为100像素。</li>
  默认值：0px。
     */
    XPos?: string;
    /**
     * 视频片段原点距离画布原点的垂直位置。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示视频片段 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。</li>
  <li>当字符串以 px 结尾，表示视频片段 YPos 单位为像素，如 100px 表示 YPos 为100像素。</li>
  默认值：0px。
     */
    YPos?: string;
    /**
     * 视频片段的宽度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示视频片段 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。</li>
  <li>当字符串以 px 结尾，表示视频片段 Width 单位为像素，如 100px 表示 Width 为100像素。</li>
  <li>当 Width、Height 均为空，则 Width 和 Height 取视频素材本身的 Width、Height。</li>
  <li>当 Width 为空，Height 非空，则 Width 按比例缩放</li>
  <li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
     */
    Width?: string;
    /**
     * 视频片段的高度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示视频片段 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%；
  </li><li>当字符串以 px 结尾，表示视频片段 Height 单位为像素，如 100px 表示 Height 为100像素。</li>
  <li>当 Width、Height 均为空，则 Width 和 Height 取视频素材本身的 Width、Height。</li>
  <li>当 Width 为空，Height 非空，则 Width 按比例缩放</li>
  <li>当 Width 非空，Height 为空，则 Height 按比例缩放。</li>
     */
    Height?: string;
    /**
     * 对音频进行操作，如静音等。
     */
    AudioOperations?: Array<AudioTransform>;
    /**
     * 对图像进行的操作，如图像旋转等。
     */
    ImageOperations?: Array<ImageTransform>;
}
/**
 * 视频降噪控制参数
 */
export interface VideoDenoiseInfo {
    /**
     * 视频降噪控制开关，可选值：
  <li>ON：开启视频降噪；</li>
  <li>OFF：关闭视频降噪。</li>
     */
    Switch: string;
    /**
     * 视频降噪类型，仅当视频降噪控制开关为 ON 时有效，可选值：
  <li>weak：轻视频降噪；</li>
  <li>strong：强视频降噪。</li>
  默认值：weak。
     */
    Type?: string;
}
/**
 * DescribeLicenseUsageData请求参数结构体
 */
export interface DescribeLicenseUsageDataRequest {
    /**
     * 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    StartTime: string;
    /**
     * 结束日期，需大于等于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    EndTime: string;
    /**
     * License 类型，默认为 DRM 。目前支持的 License 类型包括：
  <li> DRM: DRM 加密播放 License</li>
     */
    LicenseType?: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DeleteTranscodeTemplate返回参数结构体
 */
export interface DeleteTranscodeTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 转码信息
 */
export interface MediaTranscodeItem {
    /**
     * 转码后的视频文件地址。
     */
    Url?: string;
    /**
     * 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/33476)。
  <font color=red>注意：取值 0 表示原始文件。</font>
     */
    Definition?: number;
    /**
     * 视频流码率平均值与音频流码率平均值之和， 单位：bps。
     */
    Bitrate?: number;
    /**
     * 视频流高度的最大值，单位：px。
     */
    Height?: number;
    /**
     * 视频流宽度的最大值，单位：px。
     */
    Width?: number;
    /**
     * 媒体文件总大小，单位：字节。
  <li>当媒体文件为 HLS 时，大小是 m3u8 和 ts 文件大小的总和。</li>
     */
    Size?: number;
    /**
     * 视频时长，单位：秒。
     */
    Duration?: number;
    /**
     * 视频的 md5 值。
     */
    Md5?: string;
    /**
     * 容器类型，例如 m4a，mp4 等。
     */
    Container?: string;
    /**
     * 视频流信息。
     */
    VideoStreamSet?: Array<MediaVideoStreamItem>;
    /**
     * 音频流信息。
     */
    AudioStreamSet?: Array<MediaAudioStreamItem>;
    /**
     * 数字水印类型。可选值：
  <li>Trace 表示经过溯源水印处理；</li>
  <li>CopyRight 表示经过版权水印处理；</li>
  <li>None 表示没有经过数字水印处理。</li>
     */
    DigitalWatermarkType?: string;
    /**
     * 版权信息。
     */
    CopyRightWatermarkText?: string;
}
/**
 * CLS 日志集信息
 */
export interface CLSLogsetInfo {
    /**
     * 日志集 ID。
     */
    LogsetId?: string;
    /**
     * 日志集名。
     */
    LogsetName?: string;
}
/**
 * DescribePersonSamples返回参数结构体
 */
export interface DescribePersonSamplesResponse {
    /**
     * 符合条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 人物信息。
     */
    PersonSet?: Array<AiSamplePerson>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 提取版权水印输出信息
 */
export interface ExtractCopyRightWatermarkTaskOutput {
    /**
     * 版权信息。
     */
    Text?: string;
}
/**
 * 视频拆条任务输入信息
 */
export interface SplitMediaTaskInput {
    /**
     * 视频的 ID。
     */
    FileId: string;
    /**
     * 视频拆条起始的偏移时间，单位：秒。
  <li>不填或填0，表示转码后的视频从原始视频的起始位置开始；</li>
  <li>当数值大于0时（假设为 n），表示转码后的视频从原始视频的第 n 秒位置开始；</li>
  <li>当数值小于0时（假设为 -n），表示转码后的视频从原始视频结束 n 秒前的位置开始。</li>
     */
    StartTimeOffset: number;
    /**
     * 视频拆条结束的偏移时间，单位：秒。
  <li>不填或填0，表示转码后的视频持续到原始视频的末尾终止；</li>
  <li>当数值大于0时（假设为 n），表示转码后的视频持续到原始视频第 n 秒时终止；</li>
  <li>当数值小于0时（假设为 -n），表示转码后的视频持续到原始视频结束 n 秒前终止。</li>
     */
    EndTimeOffset: number;
    /**
     * [任务流模板](/document/product/266/11700#.E4.BB.BB.E5.8A.A1.E6.B5.81.E6.A8.A1.E6.9D.BF)名字，如果要对生成的新视频执行任务流时填写。
     */
    ProcedureName: string;
    /**
     * 视频拆条输出信息。
     */
    OutputConfig: SplitMediaOutputConfig;
}
/**
 * DescribeVodDomains请求参数结构体
 */
export interface DescribeVodDomainsRequest {
    /**
     * 域名列表。当该字段不填时，则默认列出所有域名信息。本字段限制如下：
  <li>域名个数度最大为 20。</li>
     */
    Domains?: Array<string>;
    /**
     * 分页拉取的最大返回结果数。默认值：20。
     */
    Limit?: number;
    /**
     * 分页拉取的起始偏移量。默认值：0。
     */
    Offset?: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 鉴别涉及令人反感的信息的任务控制参数
 */
export interface PornConfigureInfo {
    /**
     * 画面鉴别涉及令人反感的信息的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImgReviewInfo?: PornImgReviewTemplateInfo;
    /**
     * 语音鉴别涉及令人反感的信息的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrReviewInfo?: PornAsrReviewTemplateInfo;
    /**
     * 文本鉴别涉及令人反感的信息的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcrReviewInfo?: PornOcrReviewTemplateInfo;
}
/**
 * 物体识别结果片段。
 */
export interface AiRecognitionTaskObjectSeqmentItem {
    /**
     * 识别片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 识别片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
    /**
     * 识别片段置信度。取值：0~100。
     */
    Confidence: number;
    /**
     * 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
     */
    AreaCoordSet: Array<number | bigint>;
}
/**
 * SplitMedia返回参数结构体
 */
export interface SplitMediaResponse {
    /**
     * 视频拆条的任务 ID，可以通过该 ID 查询拆条任务（任务类型为 SplitMedia）的状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RestoreMedia请求参数结构体
 */
export interface RestoreMediaRequest {
    /**
     * 媒体文件唯一标识列表，最大长度：100。
     */
    FileIds: Array<string>;
    /**
     * 解冻出的临时媒体文件的可访问持续时长，必须大于0，单位为“天”。
     */
    RestoreDay: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 解冻模式。当媒体文件当前的存储类型为归档存储时，有以下取值：
  <li>极速模式：Expedited，解冻任务在5分钟后完成。</li>
  <li>标准模式：Standard，解冻任务在5小时后完成 。</li>
  <li>批量模式：Bulk，，解冻任务在12小时后完成。</li>
  当媒体文件的存储类型为深度归档存储时，有以下取值：
  <li>标准模式：Standard，解冻任务在24小时后完成。</li>
  <li>批量模式：Bulk，解冻任务在48小时后完成。</li>
     */
    RestoreTier?: string;
}
/**
 * PullEvents请求参数结构体
 */
export interface PullEventsRequest {
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
  
     */
    SubAppId?: number;
}
/**
 * 物体识别结果。
 */
export interface AiRecognitionTaskObjectResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 物体识别任务输入信息。
     */
    Input?: AiRecognitionTaskObjectResultInput;
    /**
     * 物体识别任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiRecognitionTaskObjectResultOutput;
    /**
     * 物体识别任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 物体识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 物体识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * DescribeAIAnalysisTemplates返回参数结构体
 */
export interface DescribeAIAnalysisTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 音视频内容分析模板详情列表。
     */
    AIAnalysisTemplateSet?: Array<AIAnalysisTemplateItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateSnapshotByTimeOffsetTemplate请求参数结构体
 */
export interface CreateSnapshotByTimeOffsetTemplateRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 指定时间点截图模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width?: number;
    /**
     * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 图片格式，取值可以为 jpg 和 png。默认为 jpg。
     */
    Format?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  <li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
  <li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
  默认值：black 。
     */
    FillType?: string;
}
/**
 * DescribeQualityInspectTemplates返回参数结构体
 */
export interface DescribeQualityInspectTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 音画质检测模板详情列表。
     */
    QualityInspectTemplateSet?: Array<QualityInspectTemplateItem>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 语音关键词识别结果。
 */
export interface AiRecognitionTaskAsrWordsResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 语音关键词识别任务输入信息。
     */
    Input?: AiRecognitionTaskAsrWordsResultInput;
    /**
     * 语音关键词识别任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiRecognitionTaskAsrWordsResultOutput;
    /**
     * 语音关键词识别任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 语音关键词识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 语音关键词识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * CreateSubAppId请求参数结构体
 */
export interface CreateSubAppIdRequest {
    /**
     * 应用名称，长度限制：40个字符。
     */
    Name: string;
    /**
     * 应用简介，长度限制： 300个字符。
     */
    Description?: string;
}
/**
 * DescribeProcedureTemplates返回参数结构体
 */
export interface DescribeProcedureTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 任务流模板详情列表。
     */
    ProcedureTemplateSet?: Array<ProcedureTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SearchMedia请求参数结构体
 */
export interface SearchMediaRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 文件 ID 集合，匹配集合中的任意元素。
  <li>数组长度限制：10。</li>
  <li>单个 ID 长度限制：40个字符。</li>
     */
    FileIds?: Array<string>;
    /**
     * 文件名集合，模糊匹配媒体文件的文件名，匹配度越高，排序越优先。
  <li>单个文件名长度限制：100个字符。</li>
  <li>数组长度限制：10。</li>
     */
    Names?: Array<string>;
    /**
     * 文件名前缀，前缀匹配媒体文件的文件名。
  <li>单个文件名前缀长度限制：100个字符。</li>
  <li>数组长度限制：10。</li>
     */
    NamePrefixes?: Array<string>;
    /**
     * 文件描述集合，模糊匹配媒体文件的描述，匹配度越高，排序越优先。
  <li>单个描述长度限制：100个字符。</li>
  <li>数组长度限制：10。</li>
     */
    Descriptions?: Array<string>;
    /**
     * 分类 ID 集合，匹配集合指定 ID 的分类及其所有子类。
  <li>数组长度限制：10。</li>
     */
    ClassIds?: Array<number | bigint>;
    /**
     * 标签集合，匹配集合中任意元素。
  <li>单个标签长度限制：32个字符。</li>
  <li>数组长度限制：16。</li>
     */
    Tags?: Array<string>;
    /**
     * 文件类型。匹配集合中的任意元素：
  <li>Video: 视频文件</li>
  <li>Audio: 音频文件</li>
  <li>Image: 图片文件</li>
     */
    Categories?: Array<string>;
    /**
     * 媒体文件来源集合，来源取值参见 [SourceType](https://cloud.tencent.com/document/product/266/31773#MediaSourceData)。
  <li>数组长度限制：10。</li>
     */
    SourceTypes?: Array<string>;
    /**
     * 推流直播码集合。匹配集合中的任意元素。
  <li>数组长度限制：10。</li>
     */
    StreamIds?: Array<string>;
    /**
     * 匹配创建时间在此时间段内的文件。
  <li>包含所指定的头尾时间点。</li>
     */
    CreateTime?: TimeRange;
    /**
     * 匹配过期时间在此时间段内的文件，无法检索到已过期文件。
  <li>包含所指定的头尾时间点。</li>
     */
    ExpireTime?: TimeRange;
    /**
     * 媒体文件存储地区，如 ap-chongqing，参见[地域列表](https://cloud.tencent.com/document/product/266/9760#.E5.B7.B2.E6.94.AF.E6.8C.81.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)。
  <li>单个存储地区长度限制：20个字符。</li>
  <li>数组长度限制：20。</li>
     */
    StorageRegions?: Array<string>;
    /**
     * 存储类型数组。可选值有：
  <li> STANDARD：标准存储。</li>
  <li> STANDARD_IA：低频存储。</li>
  <li> ARCHIVE：归档存储。</li>
  <li> DEEP_ARCHIVE：深度归档存储。</li>
     */
    StorageClasses?: Array<string>;
    /**
     * 媒体文件封装格式集合，匹配集合中任意元素。
  <li>数组长度限制：10。</li>
     */
    MediaTypes?: Array<string>;
    /**
     * 媒体文件状态，匹配集合中任意元素。
  <li> Normal：正常；</li>
  <li> SystemForbidden：平台封禁；</li>
  <li> Forbidden：主动封禁。</li>
     */
    Status?: Array<string>;
    /**
     * 媒体文件审核结果，匹配集合中任意元素。
  <li> pass：审核通过；</li>
  <li> review：疑似违规，建议复审；</li>
  <li> block：确认违规，建议封禁；</li>
  <li> notModerated：未审核。</li>
     */
    ReviewResults?: Array<string>;
    /**
     * TRTC 应用 ID 集合。匹配集合中的任意元素。
  <li>数组长度限制：10。</li>
     */
    TrtcSdkAppIds?: Array<number | bigint>;
    /**
     * TRTC 房间 ID 集合。匹配集合中的任意元素。
  <li>单个房间 ID 长度限制：64个字符；</li>
  <li>数组长度限制：10。</li>
     */
    TrtcRoomIds?: Array<string>;
    /**
     * 指定所有媒体文件需要返回的信息，可同时指定多个信息，N 从 0 开始递增。如果未填写该字段，默认返回所有信息。选项有：
  <li>basicInfo（视频基础信息）。</li>
  <li>metaData（视频元信息）。</li>
  <li>transcodeInfo（视频转码结果信息）。</li>
  <li>animatedGraphicsInfo（视频转动图结果信息）。</li>
  <li>imageSpriteInfo（视频雪碧图信息）。</li>
  <li>snapshotByTimeOffsetInfo（视频指定时间点截图信息）。</li>
  <li>sampleSnapshotInfo（采样截图信息）。</li>
  <li>keyFrameDescInfo（打点信息）。</li>
  <li>adaptiveDynamicStreamingInfo（转自适应码流信息）。</li>
  <li>miniProgramReviewInfo（小程序审核信息）。</li>
     */
    Filters?: Array<string>;
    /**
     * 排序方式。
  <li>Sort.Field 可选 CreateTime 。</li>
  <li>当 Text、 Names 或 Descriptions 不为空时，Sort.Field 字段无效， 搜索结果将以匹配度排序。</li>
     */
    Sort?: SortBy;
    /**
     * <div id="p_offset">分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。
  <li>取值范围：Offset + Limit 不超过5000。（参见：<a href="#maxResultsDesc">接口返回结果数限制</a>）</li></div>
     */
    Offset?: number;
    /**
     * <div id="p_limit">分页返回的记录条数，默认值：10。将返回第 Offset 到第 Offset+Limit-1 条。
  <li>取值范围：Offset + Limit 不超过5000。（参见：<a href="#maxResultsDesc">接口返回结果数限制</a>）</li></div>
     */
    Limit?: number;
    /**
     * （不推荐：应使用 Names、NamePrefixes 或 Descriptions 替代）
  搜索文本，模糊匹配媒体文件名称或描述信息，匹配项越多，匹配度越高，排序越优先。长度限制：64个字符。
     */
    Text?: string;
    /**
     * （不推荐：应使用 SourceTypes 替代）
  媒体文件来源，来源取值参见 [SourceType](https://cloud.tencent.com/document/product/266/31773#MediaSourceData)。
     */
    SourceType?: string;
    /**
     * （不推荐：应使用 StreamIds 替代）
  推流直播码。
     */
    StreamId?: string;
    /**
     * （不推荐：应使用 CreateTime 替代）
  创建时间的开始时间。
  <li>大于等于开始时间。</li>
  <li>当 CreateTime.After 也存在时，将优先使用 CreateTime.After。</li>
  <li>格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。</li>
     */
    StartTime?: string;
    /**
     * （不推荐：应使用 CreateTime 替代）
  创建时间的结束时间。
  <li>小于结束时间。</li>
  <li>当 CreateTime.Before 也存在时，将优先使用 CreateTime.Before。</li>
  <li>格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。</li>
     */
    EndTime?: string;
    /**
     * 该字段已无效。
     */
    Vids?: Array<string>;
    /**
     * 该字段已无效。
     */
    Vid?: string;
}
/**
 * 画面动态范围信息。
 */
export interface DynamicRangeInfo {
    /**
     * 画面动态范围信息。可取值：
  <li>SDR：Standard Dynamic Range 标准动态范围；</li>
  <li>HDR：High Dynamic Range 高动态范围。</li>
     */
    Type?: string;
    /**
     * 高动态范围类型，当 Type 为 HDR 时有效。目前支持的可取值：
  <li>hdr10：表示 hdr10 标准；</li>
  <li>hlg：表示 hlg 标准。</li>
     */
    HDRType?: string;
}
/**
 * CreateSampleSnapshotTemplate请求参数结构体
 */
export interface CreateSampleSnapshotTemplateRequest {
    /**
     * 采样截图类型，取值：
  <li>Percent：按百分比。</li>
  <li>Time：按时间间隔。</li>
     */
    SampleType: string;
    /**
     * 采样间隔。
  <li>当 SampleType 为 Percent 时，指定采样间隔的百分比。</li>
  <li>当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。</li>
     */
    SampleInterval: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 采样截图模板名称，长度限制：64 个字符。
     */
    Name?: string;
    /**
     * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width?: number;
    /**
     * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height?: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive?: string;
    /**
     * 图片格式，取值为 jpg 和 png。默认为 jpg。
     */
    Format?: string;
    /**
     * 模板描述信息，长度限制：256 个字符。
     */
    Comment?: string;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  <li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
  <li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
  默认值：black 。
     */
    FillType?: string;
}
/**
 * DescribeRebuildMediaTemplates返回参数结构体
 */
export interface DescribeRebuildMediaTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 视频重生模板详情列表。
     */
    RebuildMediaTemplateSet?: Array<RebuildMediaTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音频增益调节参数
 */
export interface AudioVolumeParam {
    /**
     * 是否静音，取值范围0或1。
  <li>0表示不静音。</li>
  <li>1表示静音。</li>
  默认是0。
     */
    Mute?: number;
    /**
     * 音频增益，取值范围0~10。
  <li>大于1表示增加音量。</li>
  <li>小于1表示降低音量。</li>
  <li>0和1：表示不改变。</li>
  默认是0。
     */
    Gain?: number;
}
/**
 * 音视频审核 Asr 文字涉及令人反感的信息的任务结果类型
 */
export interface AiReviewTaskPornAsrResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 音视频审核 Asr 文字涉及令人反感的信息的任务输入。
     */
    Input?: AiReviewPornAsrTaskInput;
    /**
     * 音视频审核 Asr 文字涉及令人反感的信息的任务输出。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiReviewPornAsrTaskOutput;
    /**
     * 音视频审核 Asr 文字涉及令人反感的信息的任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * 资源包中包含的资源。
 */
export interface ProductInstanceResource {
    /**
     * 资源类型。
  <li>Storage：存储资源包。</li>
  <li>Traffic：流量资源包。</li>
  <li>Transcode：普通转码资源包。</li>
  <li>TESHD：极速高清转码资源包。</li>
  <li>Review：音视频审核转码资源包。</li>
  <li>MediaProcess：媒体处理时长资源包。</li>
     */
    ResourceType?: string;
    /**
     * 资源包额度。
  <li>音视频存储资源包，单位为字节。</li>
  <li>音视频转码资源包，单位为秒。</li>
  <li>音视频审核资源包，单位为秒。</li>
  <li>音视频极速高清资源包，单位为秒。</li>
  <li>音视频加速资源包，单位为字节。</li>
  <li>媒体处理时长资源包，单位为秒。</li>
     */
    Amount?: number;
    /**
     * 资源包余量。
  <li>音视频存储资源包，单位为字节。</li>
  <li>音视频转码资源包，单位为秒。</li>
  <li>音视频审核资源包，单位为秒。</li>
  <li>音视频极速高清资源包，单位为秒。</li>
  <li>音视频加速资源包，单位为字节。</li>
  <li>媒体处理时长资源包，单位为秒。</li>
     */
    Left?: number;
}
/**
 * ModifyClass返回参数结构体
 */
export interface ModifyClassResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频画面黑边、白边、黑屏、白屏检测的控制参数。
 */
export interface BlackWhiteEdgeConfigureInfoForUpdate {
    /**
     * 视频画面黑边、白边、黑屏、白屏检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch?: string;
}
/**
 * 编辑点播视频文件信息
 */
export interface EditMediaFileInfo {
    /**
     * 视频的 ID。
     */
    FileId: string;
    /**
     * 视频剪辑起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 视频剪辑结束的偏移时间，单位：秒。
     */
    EndTimeOffset?: number;
}
/**
 * 视频画面黑边、白边、黑屏、白屏检测的控制参数。
 */
export interface BlackWhiteEdgeConfigureInfo {
    /**
     * 视频画面黑边、白边、黑屏、白屏检测开关，可选值：
  <li>ON：开启；</li>
  <li>OFF：关闭。</li>
     */
    Switch: string;
}
/**
 * 图片水印模板输入参数
 */
export interface ImageWatermarkInputForUpdate {
    /**
     * 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。
     */
    ImageContent?: string;
    /**
     * 水印的宽度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。</li>
     */
    Width?: string;
    /**
     * 水印的高度。支持 %、px 两种格式：
  <li>当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；</li>
  <li>当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。</li>
     */
    Height?: string;
    /**
     * 水印重复类型。使用场景：水印为动态图像。取值范围：
  <li>once：动态水印播放完后，不再出现；</li>
  <li>repeat_last_frame：水印播放完后，停留在最后一帧；</li>
  <li>repeat：水印循环播放，直到视频结束。</li>
     */
    RepeatType?: string;
    /**
     * 图片透明度，取值范围：[0, 100]
  <li>0：完全不透明</li>
  <li>100：完全透明。</li>
     */
    Transparency?: number;
}
/**
 * ProcessMediaByProcedure返回参数结构体
 */
export interface ProcessMediaByProcedureResponse {
    /**
     * 任务类型为 Procedure 的任务 ID，当入参 ProcedureName 对应的任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。
     */
    TaskId?: string;
    /**
     * 任务类型为 ReviewAudioVideo 的任务 ID，当入参 ProcedureName 对应的任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。
     */
    ReviewAudioVideoTaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * PullUpload返回参数结构体
 */
export interface PullUploadResponse {
    /**
     * 拉取上传视频的任务 ID，可以通过该 ID 查询拉取上传任务的状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能去除水印任务的输入。
 */
export interface RemoveWaterMarkTaskInput {
    /**
     * 媒体文件 ID。
     */
    FileId: string;
}
/**
 * 人脸识别任务控制参数
 */
export interface FaceConfigureInfo {
    /**
     * 人脸识别任务开关，可选值：
  <li>ON：开启智能人脸识别任务；</li>
  <li>OFF：关闭智能人脸识别任务。</li>
     */
    Switch: string;
    /**
     * 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。默认 95 分。取值范围：0 - 100。
     */
    Score?: number;
    /**
     * 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：
  <li>entertainment：娱乐明星；</li>
  <li>sport：体育明星；</li>
  <li>politician：相关人物。</li>
     */
    DefaultLibraryLabelSet?: Array<string>;
    /**
     * 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。
  标签个数最多 100 个，每个标签长度最多 16 个字符。
     */
    UserDefineLibraryLabelSet?: Array<string>;
    /**
     * 人物库选择，可选值：
  <li>Default：使用默认人物库；</li>
  <li>UserDefine：使用用户自定义人物库。</li>
  <li>All：同时使用默认人物库和用户自定义人物库。</li>
  默认值：All，使用系统默认人物库及用户自定义人物库。
     */
    FaceLibrary?: string;
}
/**
 * 智能人脸识别输出。
 */
export interface AiRecognitionTaskFaceResultOutput {
    /**
     * 智能人脸识别结果集。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ResultSetFileUrl 对应的文件中获取。
     */
    ResultSet: Array<AiRecognitionTaskFaceResultItem>;
    /**
     * 智能人脸识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达ResultSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    ResultSetFileUrl: string;
    /**
     * 智能人脸识别结果集文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ResultSetFileUrlExpireTime: string;
}
/**
 * DeleteImageProcessingTemplate返回参数结构体
 */
export interface DeleteImageProcessingTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 画面鉴别涉及令人反感的信息的任务控制参数。
 */
export interface PornImgReviewTemplateInfoForUpdate {
    /**
     * 画面鉴别涉及令人反感的信息的任务开关，可选值：
  <li>ON：开启画面鉴别涉及令人反感的信息的任务；</li>
  <li>OFF：关闭画面鉴别涉及令人反感的信息的任务。</li>
     */
    Switch?: string;
    /**
     * 画面鉴别涉及令人反感的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
  <li>porn：色情；</li>
  <li>vulgar：低俗；</li>
  <li>intimacy：亲密行为；</li>
  <li>sexy：性感。</li>
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * CreateWatermarkTemplate返回参数结构体
 */
export interface CreateWatermarkTemplateResponse {
    /**
     * 水印模板唯一标识。
     */
    Definition?: number;
    /**
     * 水印图片地址，仅当 Type 为 image，该字段有效。
     */
    ImageUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 画面鉴别涉及令人反感的信息的任务控制参数
 */
export interface PornImgReviewTemplateInfo {
    /**
     * 画面鉴别涉及令人反感的信息的任务开关，可选值：
  <li>ON：开启画面鉴别涉及令人反感的信息的任务；</li>
  <li>OFF：关闭画面鉴别涉及令人反感的信息的任务。</li>
     */
    Switch: string;
    /**
     * 画面鉴别涉及令人反感的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
  <li>porn：色情；</li>
  <li>vulgar：低俗；</li>
  <li>intimacy：亲密行为；</li>
  <li>sexy：性感。</li>
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 0 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 音画质检测模板详情。
 */
export interface QualityInspectTemplateItem {
    /**
     * 模板 ID。
     */
    Definition?: number;
    /**
     * 模板类型，可选值：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type?: string;
    /**
     * 模板名称。
     */
    Name?: string;
    /**
     * 模板描述。
     */
    Comment?: string;
    /**
     * 截帧间隔，单位为秒。
     */
    ScreenshotInterval?: number;
    /**
     * 视频画面抖动重影检测的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JitterConfigure?: JitterConfigureInfo;
    /**
     * 视频画面模糊检测的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlurConfigure?: BlurConfigureInfo;
    /**
     * 视频画面低光、过曝检测的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AbnormalLightingConfigure?: AbnormalLightingConfigureInfo;
    /**
     * 视频画面花屏检测的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CrashScreenConfigure?: CrashScreenConfigureInfo;
    /**
     * 视频画面黑边、白边、黑屏、白屏检测的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BlackWhiteEdgeConfigure?: BlackWhiteEdgeConfigureInfo;
    /**
     * 视频画面噪点检测的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NoiseConfigure?: NoiseConfigureInfo;
    /**
     * 视频画面马赛克检测的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MosaicConfigure?: MosaicConfigureInfo;
    /**
     * 视频画面二维码检测的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QRCodeConfigure?: QRCodeConfigureInfo;
    /**
     * 视频画面质量评价的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QualityEvaluationConfigure?: QualityEvaluationConfigureInfo;
    /**
     * 音频（静音、低音、爆音）检测的控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VoiceConfigure?: VoiceConfigureInfo;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime?: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime?: string;
}
/**
 * Ocr 文字涉及令人不适宜的信息
 */
export interface AiReviewPoliticalOcrTaskOutput {
    /**
     * Ocr 文字涉及令人不适宜的信息、违规评分，分值为0到100。
     */
    Confidence?: number;
    /**
     * Ocr 文字涉及令人不适宜的信息、违规结果建议，取值范围：
  <li>pass。</li>
  <li>review。</li>
  <li>block。</li>
     */
    Suggestion?: string;
    /**
     * Ocr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表。
  <font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<MediaContentReviewOcrTextSegmentItem>;
    /**
     * Ocr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * Ocr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * 文本全文本识别任务控制参数
 */
export interface OcrFullTextConfigureInfo {
    /**
     * 文本全文识别任务开关，可选值：
  <li>ON：开启智能文本全文识别任务；</li>
  <li>OFF：关闭智能文本全文识别任务。</li>
     */
    Switch: string;
}
/**
 * CommitUpload请求参数结构体
 */
export interface CommitUploadRequest {
    /**
     * 点播会话，取申请上传接口的返回值 VodSessionKey。
     */
    VodSessionKey: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 水印周期配置。
 */
export interface WatermarkCycleConfigForUpdate {
    /**
     * 水印在视频里第一次出现的播放时间点，单位：秒。
     */
    StartTime?: number;
    /**
     * 在一个水印周期内，水印显示的持续时间，单位：秒。
     */
    DisplayDuration?: number;
    /**
     * 一个水印周期的持续时间，单位：秒。
  填 0 表示水印只持续一个水印周期（即在整个视频里只显示 DisplayDuration 秒）。
     */
    CycleDuration?: number;
}
/**
 * 视频指定时间点截图任务信息，该结构仅用于 2017 版[指定时间点截图](https://cloud.tencent.com/document/product/266/8102)接口发起的任务。
 */
export interface SnapshotByTimeOffsetTask2017 {
    /**
     * 截图任务 ID。
     */
    TaskId: string;
    /**
     * 截图文件 ID。
     */
    FileId: string;
    /**
     * 截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
     */
    Definition: number;
    /**
     * 截图结果信息。
     */
    SnapshotInfoSet: Array<SnapshotByTimeOffset2017>;
}
/**
 * 审核信息。
 */
export interface ReviewInfo {
    /**
     * 审核模板 ID。
     */
    Definition?: number;
    /**
     * 审核的结果建议，取值范围：
  <li>pass：建议通过；</li>
  <li>review：建议复审；</li>
  <li>block：建议封禁。</li>
     */
    Suggestion?: string;
    /**
     * 审核类型，当 Suggestion 为 review 或 block 时有效，格式为：Form.Label。
  Form 表示违禁的形式，取值范围：
  <li>Image：画面上的人物或图标；</li>
  <li>OCR：画面上的文字；</li>
  <li>ASR：语音中的文字；</li>
  <li>Voice：声音。</li>
  Label 表示违禁的标签，取值范围：
  <li>Porn：色情；</li>
  <li>Terror：暴力；</li>
  <li>Polity：不适宜的信息；</li>
  <li>Ad：广告；</li>
  <li>Illegal：违法；</li>
  <li>Abuse：谩骂；</li>
  <li>Moan：娇喘。</li>
     */
    TypeSet?: Array<string>;
    /**
     * 审核时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ReviewTime?: string;
}
/**
 * 分类信息描述
 */
export interface MediaClassInfo {
    /**
     * 分类 ID。
     */
    ClassId: number;
    /**
     * 父类 ID，一级分类的父类 ID 为 -1。
     */
    ParentId: number;
    /**
     * 分类名称。
     */
    Name: string;
    /**
     * 分类级别，一级分类为 0，最大值为 3，即最多允许 4 级分类层次。
     */
    Level: number;
    /**
     * 当前分类的第一级子类 ID 集合。
     */
    SubClassIdSet: Array<number | bigint>;
    /**
     * 分类名称（该字段已不推荐使用，建议使用新的分类名称字段 Name）。
     */
    ClassName: string;
}
/**
 * AI 视频智能分析输入参数类型
 */
export interface AiAnalysisTaskInput {
    /**
     * 视频内容分析模板 ID。
     */
    Definition: number;
}
/**
 * DeleteAnimatedGraphicsTemplate请求参数结构体
 */
export interface DeleteAnimatedGraphicsTemplateRequest {
    /**
     * 转动图模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DeleteSnapshotByTimeOffsetTemplate请求参数结构体
 */
export interface DeleteSnapshotByTimeOffsetTemplateRequest {
    /**
     * 指定时间点截图模板唯一标识。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * DescribeAnimatedGraphicsTemplates返回参数结构体
 */
export interface DescribeAnimatedGraphicsTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 转动图模板详情列表。
     */
    AnimatedGraphicsTemplateSet?: Array<AnimatedGraphicsTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 提取版权水印任务。
 */
export interface ExtractCopyRightWatermarkTask {
    /**
     * 任务 ID。
     */
    TaskId?: string;
    /**
     * 任务状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败：
  <li>40000：输入参数不合法，请检查输入参数；</li>
  <li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
  <li>70000：内部服务错误，建议重试。</li>
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 提取版权水印任务输入信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Input?: ExtractCopyRightWatermarkTaskInput;
    /**
     * 提取版权水印任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: ExtractCopyRightWatermarkTaskOutput;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
}
/**
 * 智能按帧标签结果信息
 */
export interface MediaAiAnalysisFrameTagItem {
    /**
     * 按帧标签名称。
     */
    Tag: string;
    /**
     * 按帧标签名称的分类列表，CategorySet.N 表示第 N+1级分类。
  比如 Tag 为“塔楼”时，CategorySet 包含两个元素：CategorySet.0 为“场景”，CategorySet.1为 “建筑”，表示按帧标签为“塔楼”，且第1级分类是“场景”，第2级分类是“建筑”。
     */
    CategorySet: Array<string>;
    /**
     * 按帧标签的可信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * 音画质检测异常片段信息。
 */
export interface QualityInspectItem {
    /**
     * 异常片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 异常片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset?: number;
    /**
     * 检测出异常的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。
  <font color=red>注意：</font> 仅当 Type 取值为下列之一时，本字段取值有效：
  <li>BlackWhiteEdge：黑白边；</li>
  <li>Mosaic：马赛克；</li>
  <li>QRCode：二维码；</li>
  <li>AppletCode：小程序码；</li>
  <li>BarCode：条形码。</li>
     */
    AreaCoordSet?: Array<number | bigint>;
    /**
     * 置信度，取值范围：[0, 100]。
  <font color=red>注意：</font> 仅当 Type 取值为下列之一时，本字段取值有效：
  <li>Mosaic：马赛克；</li>
  <li>QRCode：二维码；</li>
  <li>AppletCode：小程序码；</li>
  <li>BarCode：条形码。</li>
     */
    Confidence?: number;
}
/**
 * DescribeCLSPushTargets返回参数结构体
 */
export interface DescribeCLSPushTargetsResponse {
    /**
     * 域名推送总数量。
     */
    TotalCount?: number;
    /**
     * 域名推送 CLS 目标列表。
     */
    DomainCLSTargets?: Array<DomainCLSTargetInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 拉取上传任务信息
 */
export interface PullUploadTask {
    /**
     * 拉取上传任务 ID。
     */
    TaskId?: string;
    /**
     * 任务流状态，取值：
  <li>PROCESSING：处理中；</li>
  <li>FINISH：已完成。</li>
     */
    Status?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败：
  <li>40000：输入参数不合法，请检查输入参数；</li>
  <li>60000：源文件错误（如视频数据损坏），请确认源文件是否正常；</li>
  <li>70000：内部服务错误，建议重试。</li>
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 拉取上传完成后生成的视频 ID。
     */
    FileId?: string;
    /**
     * 拉取上传完成后生成的媒体文件基础信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MediaBasicInfo?: MediaBasicInfo;
    /**
     * 输出视频的元信息。
     */
    MetaData?: MediaMetaData;
    /**
     * 拉取上传完成后生成的播放地址。
     */
    FileUrl?: string;
    /**
     * 任务类型为 Procedure 的任务 ID。若[拉取上传](https://cloud.tencent.com/document/api/266/35575)时指定了媒体后续任务操作(Procedure)，当该任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。
     */
    ProcedureTaskId?: string;
    /**
     * 任务类型为 ReviewAudioVideo 的任务 ID。若[拉取上传](https://cloud.tencent.com/document/api/266/35575)时指定了媒体后续任务操作(Procedure)，当该任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。
     */
    ReviewAudioVideoTaskId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，[URL 拉取视频上传完成](https://cloud.tencent.com/document/product/266/7831)将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 拉取上传进度，取值范围 [0-100] 。
     */
    Progress?: number;
}
/**
 * DescribeImageProcessingTemplates返回参数结构体
 */
export interface DescribeImageProcessingTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 图片处理模板详情列表。
     */
    ImageProcessingTemplateSet?: Array<ImageProcessingTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用户自定义文本音视频审核任务控制参数。
 */
export interface UserDefineOcrTextReviewTemplateInfoForUpdate {
    /**
     * 用户自定文本音视频审核任务开关，可选值：
  <li>ON：开启自定义文本音视频审核任务；</li>
  <li>OFF：关闭自定义文本音视频审核任务。</li>
     */
    Switch?: string;
    /**
     * 用户自定义文本过滤标签，音视频审核结果包含选择的标签则返回结果，如果过滤标签为空，则音视频审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
  标签个数最多 10 个，每个标签长度最多 16 个字符。
     */
    LabelSet?: Array<string>;
    /**
     * 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。
     */
    BlockConfidence?: number;
    /**
     * 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。
     */
    ReviewConfidence?: number;
}
/**
 * 对视频做采样截图任务输入参数类型
 */
export interface SampleSnapshotTaskInput {
    /**
     * 采样截图模板 ID。
     */
    Definition: number;
    /**
     * 水印列表，支持多张图片或文字水印，最大可支持 10 张。
     */
    WatermarkSet?: Array<WatermarkInput>;
}
/**
 * ReviewImage请求参数结构体
 */
export interface ReviewImageRequest {
    /**
     * 媒体文件 ID，即该文件在云点播上的全局唯一标识符。本接口要求媒体文件必须是图片格式。
     */
    FileId: string;
    /**
     * 图片审核模板 ID，取值范围：
  <li>10：预置模板，支持检测的违规标签包括色情（Porn）、暴力（Terror）和不适宜的信息（Polity）。</li>
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 音画质重生视频控制控制信息。
 */
export interface RebuildVideoInfo {
    /**
     * 画质修复控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RepairInfo?: RepairInfo;
    /**
     * 智能插帧控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoFrameInterpolationInfo?: VideoFrameInterpolationInfo;
    /**
     * 画面超分控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SuperResolutionInfo?: SuperResolutionInfo;
    /**
     * 高动态范围类型控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HDRInfo?: HDRInfo;
    /**
     * 视频降噪控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoDenoiseInfo?: VideoDenoiseInfo;
    /**
     * 色彩增强控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ColorInfo?: ColorEnhanceInfo;
    /**
     * 细节增强控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SharpInfo?: SharpEnhanceInfo;
    /**
     * 人脸增强控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceInfo?: FaceEnhanceInfo;
    /**
     * 低光照控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LowLightInfo?: LowLightEnhanceInfo;
    /**
     * 去划痕控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ScratchRepairInfo?: ScratchRepairInfo;
    /**
     * 去伪影控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ArtifactRepairInfo?: ArtifactRepairInfo;
}
/**
 * DescribeHeadTailTemplates返回参数结构体
 */
export interface DescribeHeadTailTemplatesResponse {
    /**
     * 符合过滤条件的记录总数。
     */
    TotalCount?: number;
    /**
     * 片头片尾模板详情列表。
     */
    HeadTailTemplateSet?: Array<HeadTailTemplate>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * HandleCurrentPlaylist请求参数结构体
 */
export interface HandleCurrentPlaylistRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。</b>
     */
    SubAppId: number;
    /**
     * 轮播播单唯一标识。
     */
    RoundPlayId: string;
    /**
     * 操作类型，取值有：<li>Insert：向当前播放列表插入播放节目。</li> <li>InsertTemporary：向当前播放列表临时插入播放节目。只能插入到当前正在播放的节目后面，临时插入的节目只在本次轮播过程生效。</li><li>Delete：删除播放列表中的播放节目。不能删除正在播放的节目。</li>
     */
    Operation: string;
    /**
     * 播单节目 ID。当 Operation 为 Insert 时必填，表示插入的节目列表位于该播放节目之后。插入的位置必须在当前正在播放的节目之后。
     */
    ItemId?: string;
    /**
     * 节目列表。当 Operation 为 Insert、InsertTemporary、Delete 时必填，表示要操作的节目列表。列表长度最大为10。
     */
    RoundPlaylist?: Array<RoundPlayListItemInfo>;
}
/**
 * 鉴别涉及令人不安全的信息的任务控制参数
 */
export interface TerrorismConfigureInfo {
    /**
     * 画面鉴别涉及令人不安全的信息的任务控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ImgReviewInfo?: TerrorismImgReviewTemplateInfo;
    /**
     * 文字鉴别涉及令人不安全的信息的任务控制参数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcrReviewInfo?: TerrorismOcrReviewTemplateInfo;
}
/**
 * CreateCLSLogset返回参数结构体
 */
export interface CreateCLSLogsetResponse {
    /**
     * 日志集 ID。
     */
    LogsetId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 语音鉴别涉及令人不适宜的信息的任务控制参数
 */
export interface PoliticalAsrReviewTemplateInfo {
    /**
     * 语音鉴别涉及令人不适宜的信息的任务开关，可选值：
  <li>ON：开启语音鉴别涉及令人不适宜的信息的任务；</li>
  <li>OFF：关闭语音鉴别的涉及令人不适宜的信息的任务。</li>
     */
    Switch: string;
    /**
     * 判定需人工复核是否违规的分数阈值，当音视频审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
     */
    ReviewConfidence?: number;
    /**
     * 判定涉嫌违规的分数阈值，当音视频审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
     */
    BlockConfidence?: number;
}
/**
 * CreateAnimatedGraphicsTemplate返回参数结构体
 */
export interface CreateAnimatedGraphicsTemplateResponse {
    /**
     * 转动图模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 采样截图模板详情
 */
export interface SampleSnapshotTemplate {
    /**
     * 采样截图模板唯一标识。
     */
    Definition: number;
    /**
     * 模板类型，取值范围：
  <li>Preset：系统预置模板；</li>
  <li>Custom：用户自定义模板。</li>
     */
    Type: string;
    /**
     * 采样截图模板名称。
     */
    Name: string;
    /**
     * 模板描述信息。
     */
    Comment: string;
    /**
     * 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Width: number;
    /**
     * 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
  <li>当 Width、Height 均为 0，则分辨率同源；</li>
  <li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
  <li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
  <li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
  默认值：0。
     */
    Height: number;
    /**
     * 分辨率自适应，可选值：
  <li>open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；</li>
  <li>close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。</li>
  默认值：open。
     */
    ResolutionAdaptive: string;
    /**
     * 图片格式。
     */
    Format: string;
    /**
     * 采样截图类型。
     */
    SampleType: string;
    /**
     * 采样间隔。
     */
    SampleInterval: number;
    /**
     * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    CreateTime: string;
    /**
     * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    UpdateTime: string;
    /**
     * 填充方式，当截图配置宽高参数与原始视频的宽高比不一致时，对截图的处理方式，即为“填充”。可选填充方式：
  <li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
  <li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
  <li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
  <li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。</li>
  默认值：black 。
     */
    FillType: string;
}
/**
 * 视频片头片尾识别结果。
 */
export interface AiRecognitionTaskHeadTailResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status?: string;
    /**
     * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
     */
    ErrCodeExt?: string;
    /**
     * 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。
     */
    ErrCode?: number;
    /**
     * 错误信息。
     */
    Message?: string;
    /**
     * 视频片头片尾识别任务输入信息。
     */
    Input?: AiRecognitionTaskHeadTailResultInput;
    /**
     * 视频片头片尾识别任务输出信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Output?: AiRecognitionTaskHeadTailResultOutput;
    /**
     * 视频片头片尾识别任务进度，取值范围 [0-100] 。
     */
    Progress?: number;
    /**
     * 视频片头片尾识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    BeginProcessTime?: string;
    /**
     * 视频片头片尾识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    FinishTime?: string;
}
/**
 * DescribePersonSamples请求参数结构体
 */
export interface DescribePersonSamplesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 拉取的素材类型，可选值：
  <li>UserDefine：用户自定义素材库；</li>
  <li>Default：系统默认素材库。</li>
  
  默认值：UserDefine，拉取用户自定义素材库素材。
  说明：如果是拉取系统默认素材库，只能使用素材名字或者素材 ID + 素材名字的方式进行拉取，且五官图片只返回一张。
     */
    Type?: string;
    /**
     * 素材 ID，数组长度限制：100。
     */
    PersonIds?: Array<string>;
    /**
     * 素材名称，数组长度限制：20。
     */
    Names?: Array<string>;
    /**
     * 素材标签，数组长度限制：20。
     */
    Tags?: Array<string>;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：100，最大值：100。
     */
    Limit?: number;
}
/**
 * 人脸识别结果
 */
export interface AiRecognitionTaskFaceResultItem {
    /**
     * 人物唯一标识 ID。
     */
    Id: string;
    /**
     * 人物库类型，表示识别出的人物来自哪个人物库：
  <li>Default：默认人物库；</li>
  <li>UserDefine：用户自定义人物库。</li>
     */
    Type: string;
    /**
     * 人物名称。
     */
    Name: string;
    /**
     * 人物出现的片段结果集。
     */
    SegmentSet: Array<AiRecognitionTaskFaceSegmentItem>;
}
/**
 * 智能分类任务输入类型
 */
export interface AiAnalysisTaskCoverInput {
    /**
     * 视频智能封面模板 ID。
     */
    Definition: number;
}
/**
 * DeleteEnhanceMediaTemplate请求参数结构体
 */
export interface DeleteEnhanceMediaTemplateRequest {
    /**
     * 音画质重生模板号。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * SetDrmKeyProviderInfo返回参数结构体
 */
export interface SetDrmKeyProviderInfoResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeStorageDetails请求参数结构体
 */
export interface DescribeStorageDetailsRequest {
    /**
     * 起始时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    StartTime: string;
    /**
     * 结束时间，需大于开始日期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    EndTime: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 统计时间粒度，有效值：
  <li>Minute：以5分钟为粒度。</li>
  <li>Day：以天为粒度。</li>
  默认按时间跨度决定，小于等于1天以5分钟为粒度，大于1天则以天为粒度。
     */
    Interval?: string;
    /**
     * 查询的存储类型，有效值：
  <li>TotalStorage：存储总量，标准、低频、归档和深度归档存储量之和，不含提前删除量。</li>
  <li>StandardStorage：标准存储。</li>
  <li>InfrequentStorage：低频存储。</li>
  <li>ArchiveStorage：归档存储。</li>
  <li>DeepArchiveStorage：深度归档存储。</li>
  <li>DeletedInfrequentStorage：低频存储提前删除量。</li>
  <li>DeletedArchiveStorage：归档提前删除量。</li>
  <li>DeletedDeepArchiveStorage：深度归档提前删除量。</li>
  <li>ArchiveStandardRetrieval：归档标准取回量。</li>
  <li>ArchiveExpeditedRetrieval：归档快速取回量。</li>
  <li>ArchiveBulkRetrieval：归档批量取回量。</li>
  <li>DeepArchiveStandardRetrieval：深度归档标准取回量。</li>
  <li>DeepArchiveBulkRetrieval：深度归档批量取回量。</li>
  <li>InfrequentRetrieval：低频存储取回量。</li>
  默认值为 TotalStorage。
     */
    StorageType?: string;
    /**
     * 查询的存储区域，有效值：
  <li>Chinese Mainland：中国境内（不包含港澳台）。</li>
  <li>Outside Chinese Mainland：中国境外。</li>
  默认值为 Chinese Mainland。
     */
    Area?: string;
}
/**
 * EnhanceMediaQuality返回参数结构体
 */
export interface EnhanceMediaQualityResponse {
    /**
     * 音画质重生任务 ID。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 字幕格式列表操作。
 */
export interface SubtitleFormatsOperation {
    /**
     * 操作类型，取值范围：
  <li>add：添加 Formats 指定的格式列表；</li>
  <li>delete：删除 Formats 指定的格式列表；<l/i>
  <li>reset：将已配置的格式列表重置为  Formats 指定的格式列表。</li>
     */
    Type: string;
    /**
     * 字幕格式列表，取值范围：
  <li>vtt：生成 WebVTT 字幕文件；</li>
  <li>srt：生成 SRT 字幕文件。</li>
     */
    Formats: Array<string>;
}
/**
 * 轨道信息
 */
export interface MediaTrack {
    /**
     * 轨道类型，取值有：
  <ul>
  <li>Video ：视频轨道。视频轨道由以下 Item 组成：<ul><li>VideoTrackItem</li><li>MediaTransitionItem</li> <li>EmptyTrackItem</li></ul> </li>
  <li>Audio ：音频轨道。音频轨道由以下 Item 组成：<ul><li>AudioTrackItem</li><li>MediaTransitionItem</li><li>EmptyTrackItem</li></ul></li>
  <li>Sticker ：贴图轨道。贴图轨道以下 Item 组成：<ul><li> StickerTrackItem</li><li>EmptyTrackItem</li></ul></li>
  </ul>
     */
    Type: string;
    /**
     * 轨道上的媒体片段列表。
     */
    TrackItems: Array<MediaTrackItem>;
}
/**
 * 快速媒体编辑操作的输入媒体类型
 */
export interface FastEditMediaFileInfo {
    /**
     * 媒体的 ID。
     */
    FileId: string;
    /**
     * 操作的音视频类型，可选值有：
  <li>Transcode：转码输出；</li>
  <li>Original：原始音视频。</li>
  注意：操作的音视频，必须为 HLS 格式。
     */
    AudioVideoType: string;
    /**
     * 当 AudioVideoType 为 Transcode 时有效，表示操作媒体的的转码模板 ID。
     */
    TranscodeDefinition?: number;
    /**
     * 媒体剪辑起始的偏移时间，单位：秒。
     */
    StartTimeOffset?: number;
    /**
     * 媒体剪辑结束的时间偏移，单位：秒。
     */
    EndTimeOffset?: number;
}
/**
 * 云点播存储用量的分区统计数据
 */
export interface StorageStatData {
    /**
     * 点播存储的计费区域，可能值：
  <li>Chinese Mainland：中国境内（不包含港澳台）。</li>
  <li>Outside Chinese Mainland：中国境外。</li>
     */
    Area: string;
    /**
     * 当前总存储量，单位是字节。
     */
    TotalStorage: number;
    /**
     * 当前低频存储量，单位是字节。
     */
    InfrequentStorage: number;
    /**
     * 当前标准存储量，单位是字节。
     */
    StandardStorage: number;
    /**
     * 当前归档存储量，单位是字节。
     */
    ArchiveStorage: number;
    /**
     * 当前深度归档存储量，单位是字节。
     */
    DeepArchiveStorage: number;
}
/**
 * 轮播节目播放信息
 */
export interface RoundPlayFilePlayInfo {
    /**
     * 播单节目的 ID，由系统分配。
     */
    ItemId?: string;
    /**
     * 媒体文件标识。
     */
    FileId?: string;
    /**
     * 启播时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#52)。
     */
    StartPlayTime?: string;
    /**
     * 播放时长，单位为秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Duration?: number;
    /**
     * 播放进度，单位为秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Progress?: number;
}
/**
 * DescribeFileAttributes请求参数结构体
 */
export interface DescribeFileAttributesRequest {
    /**
     * 媒体文件 ID
     */
    FileId: string;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
     */
    SessionId?: string;
    /**
     * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
     */
    SessionContext?: string;
    /**
     * 任务优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。
     */
    TasksPriority?: number;
    /**
     * 保留字段，特殊用途时使用。
     */
    ExtInfo?: string;
}
/**
 * 音画质检测异常结果信息。
 */
export interface QualityInspectResultItem {
    /**
     * 异常类型，取值范围：
  <li>Jitter：抖动；</li>
  <li>Blur：模糊；</li>
  <li>LowLighting：低光照；</li>
  <li>HighLighting：过曝；</li>
  <li>CrashScreen：花屏；</li>
  <li>BlackWhiteEdge：黑白边；</li>
  <li>SolidColorScreen：纯色屏；</li>
  <li>Noise：噪点；</li>
  <li>Mosaic：马赛克；</li>
  <li>QRCode：二维码；</li>
  <li>AppletCode：小程序码；</li>
  <li>BarCode：条形码；</li>
  <li>LowVoice：低音；</li>
  <li>HighVoice：爆音；</li>
  <li>NoVoice：静音；</li>
  <li>LowEvaluation：无参考打分低于阈值。</li>
     */
    Type?: string;
    /**
     * 异常片段列表。
  <font color=red>注意：</font> 该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
     */
    SegmentSet?: Array<QualityInspectItem>;
    /**
     * 异常片段列表文件 URL。文件 内容 为  JSON，数据结构与 SegmentSet 字段一致。（文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
     */
    SegmentSetFileUrl?: string;
    /**
     * 异常片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    SegmentSetFileUrlExpireTime?: string;
}
/**
 * 视频处理输出文件信息参数。
 */
export interface MediaOutputInfo {
    /**
     * 输出文件 Bucket 所属地域，如 ap-guangzhou  。
     */
    Region?: string;
    /**
     * 输出文件 Bucket 。
     */
    Bucket?: string;
    /**
     * 输出文件目录，目录名必须以 "/" 结尾。
     */
    Dir?: string;
}
/**
 * 编辑视频任务的输出
 */
export interface EditMediaTaskOutput {
    /**
     * 文件类型，例如 mp4、flv 等。
     */
    FileType: string;
    /**
     * 媒体文件播放地址。
     */
    FileUrl: string;
    /**
     * 媒体文件 ID。
     */
    FileId: string;
    /**
     * 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。
     */
    MediaName: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime: string;
}
/**
 * 智能精彩集锦片段列表。
 */
export interface HighlightSegmentItem {
    /**
     * 置信度。
     */
    Confidence: number;
    /**
     * 片段起始时间偏移。
     */
    StartTimeOffset: number;
    /**
     * 片段结束时间偏移。
     */
    EndTimeOffset: number;
}
/**
 * CreateReviewTemplate返回参数结构体
 */
export interface CreateReviewTemplateResponse {
    /**
     * 审核模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteWatermarkTemplate返回参数结构体
 */
export interface DeleteWatermarkTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteQualityInspectTemplate请求参数结构体
 */
export interface DeleteQualityInspectTemplateRequest {
    /**
     * 音画质检测模板 ID。
     */
    Definition: number;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
}
/**
 * 输出的媒体文件信息。
 */
export interface ComposeMediaOutput {
    /**
     * 文件名称，最长 64 个字符。
     */
    FileName: string;
    /**
     * 描述信息，最长 128 个字符。
     */
    Description?: string;
    /**
     * 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。
  <li>默认值：0，表示其他分类。</li>
     */
    ClassId?: number;
    /**
     * 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
     */
    ExpireTime?: string;
    /**
     * 封装格式，可选值：mp4、mp3。其中，mp3 为纯音频文件。
     */
    Container?: string;
    /**
     * 输出的视频信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoStream?: OutputVideoStream;
    /**
     * 输出的音频信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioStream?: OutputAudioStream;
    /**
     * 是否去除视频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值：0。
     */
    RemoveVideo?: number;
    /**
     * 是否去除音频数据，可选值：
  <li>0：保留</li>
  <li>1：去除</li>
  默认值：0。
     */
    RemoveAudio?: number;
}
/**
 * DeleteJustInTimeTranscodeTemplate返回参数结构体
 */
export interface DeleteJustInTimeTranscodeTemplateResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWatermarkTemplate返回参数结构体
 */
export interface ModifyWatermarkTemplateResponse {
    /**
     * 图片水印地址，仅当 ImageTemplate.ImageContent 非空，该字段有值。
     */
    ImageUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeJustInTimeTranscodeTemplates请求参数结构体
 */
export interface DescribeJustInTimeTranscodeTemplatesRequest {
    /**
     * 模板名过滤条件，数组长度限制：100。
     */
    Names?: Array<string>;
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 模板类型过滤条件，可选值：
  <li>Preset：系统预置任务流模板；</li>
  <li>Custom：用户自定义任务流模板。</li>
     */
    Type?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * 违禁任务控制参数
 */
export interface ProhibitedConfigureInfoForUpdate {
    /**
     * 语音违禁控制参数。
     */
    AsrReviewInfo?: ProhibitedAsrReviewTemplateInfoForUpdate;
    /**
     * 文本违禁控制参数。
     */
    OcrReviewInfo?: ProhibitedOcrReviewTemplateInfoForUpdate;
}
/**
 * 智能按帧标签任务控制参数
 */
export interface FrameTagConfigureInfoForUpdate {
    /**
     * 智能按帧标签任务开关，可选值：
  <li>ON：开启智能按帧标签任务；</li>
  <li>OFF：关闭智能按帧标签任务。</li>
     */
    Switch?: string;
    /**
     * 截帧间隔，单位为秒，最小值为 0.5 秒。
     */
    ScreenshotInterval?: number;
}
/**
 * CreateImageSpriteTemplate返回参数结构体
 */
export interface CreateImageSpriteTemplateResponse {
    /**
     * 雪碧图模板唯一标识。
     */
    Definition?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAIRecognitionTemplates请求参数结构体
 */
export interface DescribeAIRecognitionTemplatesRequest {
    /**
     * <b>点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。</b>
     */
    SubAppId?: number;
    /**
     * 音视频内容识别模板唯一标识过滤条件，数组长度限制：100。
     */
    Definitions?: Array<number | bigint>;
    /**
     * 模板类型过滤条件，可选值：<li>Preset：系统预置模板；</li><li>Custom：用户自定义模板。</li>不填默认为空，即不对模板类型过滤。
     */
    Type?: string;
    /**
     * 分页偏移量，默认值：0。
     */
    Offset?: number;
    /**
     * 返回记录条数，默认值：10，最大值：100。
     */
    Limit?: number;
}
/**
 * 高动态范围类型控制参数。
 */
export interface HDRInfo {
    /**
     * 高动态范围类型控制开关，可选值：
  <li>ON：开启高动态范围类型转换；</li>
  <li>OFF：关闭高动态范围类型转换。</li>
     */
    Switch: string;
    /**
     * 高动态范围类型，可选值：
  <li>hdr10：表示 hdr10 标准；</li>
  <li>hlg：表示 hlg 标准。</li>
  
  注意：
  <li> 仅当高动态范围类型控制开关为 ON 时有效；</li>
  <li>当画质重生目标参数中指定视频输出参数的视频流编码格式 Codec 为 libx265 时有效。</li>
     */
    Type?: string;
}
/**
 * 视频编辑极速高清参数配置。
 */
export interface EditMediaTEHDConfig {
    /**
     * 极速高清类型，可选值：<li>TEHD-100 表示极速高清-100;</li> <li>OFF 表示关闭极速高清。</li>不填表示 OFF。
     */
    Type: string;
    /**
     * 视频码率上限，当 Type 指定了极速高清类型时有效。
  不填或填0表示不设视频码率上限。
     */
    MaxVideoBitrate?: number;
}
/**
 * 智能识别结果。
 */
export interface AiRecognitionResult {
    /**
     * 任务的类型，取值范围：
  <li>FaceRecognition：人脸识别，</li>
  <li>AsrWordsRecognition：语音关键词识别，</li>
  <li>OcrWordsRecognition：文本关键词识别，</li>
  <li>AsrFullTextRecognition：语音全文识别，</li>
  <li>AsrTranslateRecognition：语音翻译识别，</li>
  <li>OcrFullTextRecognition：文本全文识别，</li>
  <li>HeadTailRecognition：视频片头片尾识别，</li>
  <li>ObjectRecognition：物体识别。</li>
     */
    Type?: string;
    /**
     * 视频片头片尾识别结果，当 Type 为
   HeadTailRecognition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HeadTailTask?: AiRecognitionTaskHeadTailResult;
    /**
     * 视频拆条识别结果，当 Type 为
   SegmentRecognition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentTask?: AiRecognitionTaskSegmentResult;
    /**
     * 人脸识别结果，当 Type 为
   FaceRecognition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FaceTask?: AiRecognitionTaskFaceResult;
    /**
     * 语音关键词识别结果，当 Type 为
   AsrWordsRecognition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrWordsTask?: AiRecognitionTaskAsrWordsResult;
    /**
     * 语音全文识别结果，当 Type 为
   AsrFullTextRecognition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrFullTextTask?: AiRecognitionTaskAsrFullTextResult;
    /**
     * 语音翻译结果，当 Type 为 AsrTranslateRecognition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrTranslateTask?: AiRecognitionTaskAsrTranslateResult;
    /**
     * 文本关键词识别结果，当 Type 为
   OcrWordsRecognition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcrWordsTask?: AiRecognitionTaskOcrWordsResult;
    /**
     * 文本全文识别结果，当 Type 为
   OcrFullTextRecognition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OcrFullTextTask?: AiRecognitionTaskOcrFullTextResult;
    /**
     * 物体识别结果，当 Type 为
   ObjectRecognition 时有效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ObjectTask?: AiRecognitionTaskObjectResult;
}
