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
      * 画布宽度，即输出视频的宽度，取值范围：0~ 4096，单位：px。
默认值：0，表示和第一个视频轨的第一个视频片段的视频宽度一致。
      */
    Width?: number;
    /**
      * 画布高度，即输出视频的高度（或长边），取值范围：0~ 4096，单位：px。
默认值：0，表示和第一个视频轨的第一个视频片段的视频高度一致。
      */
    Height?: number;
}
/**
 * ModifySampleSnapshotTemplate返回参数结构体
 */
export interface ModifySampleSnapshotTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
 * 用户自定义文本智能识别任务控制参数。
 */
export interface UserDefineOcrTextReviewTemplateInfoForUpdate {
    /**
      * 用户自定文本智能识别任务开关，可选值：
<li>ON：开启自定义文本智能识别任务；</li>
<li>OFF：关闭自定义文本智能识别任务。</li>
      */
    Switch?: string;
    /**
      * 用户自定义文本过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则智能识别结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
      */
    LabelSet?: Array<string>;
    /**
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * DescribeAllClass请求参数结构体
 */
export interface DescribeAllClassRequest {
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 发布视频所对应的转码模板 ID，为0代表原始视频。
      */
    SourceDefinition?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
      */
    Container: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 转动图模板唯一标识过滤条件，数组长度限制：100。
      */
    Definitions?: Array<number>;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * LiveRealTimeClip返回参数结构体
 */
export interface LiveRealTimeClipResponse {
    /**
      * 剪辑后的视频播放 URL。
      */
    Url: string;
    /**
      * 剪辑固化后的视频的媒体文件的唯一标识。
      */
    FileId: string;
    /**
      * 剪辑固化后的视频任务流 ID。
      */
    VodTaskId: string;
    /**
      * 剪辑后的视频元信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetaData: MediaMetaData;
    /**
      * <span id="p_segmentset">剪辑后的视频片段信息。</span>
      */
    SegmentSet: Array<LiveRealTimeClipMediaSegmentInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 智能识别 Asr 文字鉴违禁任务结果类型
 */
export interface AiReviewTaskProhibitedAsrResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别 Asr 文字鉴违禁任务输入。
      */
    Input: AiReviewProhibitedAsrTaskInput;
    /**
      * 智能识别 Asr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiReviewProhibitedAsrTaskOutput;
}
/**
 * 转自适应码流模板详情
 */
export interface AdaptiveDynamicStreamingTemplate {
    /**
      * 转自适应码流模板唯一标识。
      */
    Definition: number;
    /**
      * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
      */
    Type: string;
    /**
      * 转自适应码流模板名称。
      */
    Name: string;
    /**
      * 转自适应码流模板描述信息。
      */
    Comment: string;
    /**
      * 自适应转码格式，取值范围：
<li>HLS。</li>
      */
    Format: string;
    /**
      * DRM 类型，取值范围：
<li>SimpleAES</li>
<li>Widevine</li>
<li>FairPlay</li>
如果取值为空字符串，代表不对视频做 DRM 保护。
      */
    DrmType: string;
    /**
      * 自适应转码输入流参数信息，最多输入10路流。
      */
    StreamInfos: Array<AdaptiveStreamTemplate>;
    /**
      * 是否禁止视频低码率转高码率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
      */
    DisableHigherVideoBitrate: number;
    /**
      * 是否禁止视频分辨率转高分辨率，取值范围：
<li>0：否，</li>
<li>1：是。</li>
      */
    DisableHigherVideoResolution: number;
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
 * DeleteAnimatedGraphicsTemplate返回参数结构体
 */
export interface DeleteAnimatedGraphicsTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 智能识别 Ocr 文字鉴违禁任务结果类型
 */
export interface AiReviewTaskProhibitedOcrResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别 Ocr 文字鉴违禁任务输入。
      */
    Input: AiReviewProhibitedOcrTaskInput;
    /**
      * 智能识别 Ocr 文字鉴违禁任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiReviewProhibitedOcrTaskOutput;
}
/**
 * 语音全文识别结果。
 */
export interface AiRecognitionTaskAsrFullTextResultOutput {
    /**
      * 语音全文识别片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<AiRecognitionTaskAsrFullTextSegmentItem>;
    /**
      * 语音全文识别片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * 语音全文识别片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。。
      */
    SegmentSetFileUrlExpireTime: string;
    /**
      * 字幕文件 Url。
      */
    SubtitleUrl: string;
}
/**
 * Ocr 文字涉违禁信息
 */
export interface AiReviewProhibitedOcrTaskOutput {
    /**
      * Ocr 文字涉违禁评分，分值为0到100。
      */
    Confidence: number;
    /**
      * Ocr 文字涉违禁结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * Ocr 文字有涉违禁嫌疑的视频片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<MediaContentReviewOcrTextSegmentItem>;
    /**
      * Ocr 文字有涉违禁嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * Ocr 文字有涉违禁嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    SegmentSetFileUrlExpireTime: string;
}
/**
 * 小程序智能识别概要元信息
 */
export interface MediaMiniProgramReviewElem {
    /**
      * 智能识别类型。
<li>Porn：画面涉及令人反感的信息，</li>
<li>Porn.Ocr：文字涉及令人反感的信息，</li>
<li>Porn.Asr：声音涉及令人反感的信息，</li>
<li>Terrorism：画面涉及令人不安全的信息，</li>
<li>Political：画面涉及令人不适宜的信息，</li>
<li>Political.Ocr：文字涉及令人不适宜的信息，</li>
<li>Political.Asr：声音涉及令人不适宜的信息。</li>
      */
    Type: string;
    /**
      * 智能识别意见。
<li>pass：确认正常，</li>
<li>block：确认违规，</li>
<li>review：疑似违规。</li>
      */
    Suggestion: string;
    /**
      * 智能识别结果置信度。取值 0~100。
      */
    Confidence: number;
}
/**
 * ManageTask返回参数结构体
 */
export interface ManageTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateImageProcessingTemplate请求参数结构体
 */
export interface CreateImageProcessingTemplateRequest {
    /**
      * 图片处理操作数组，操作将以其在数组中的顺序执行。
<li>长度限制：3。</li>
      */
    Operations: Array<ImageOperation>;
    /**
      * 图片处理模板名称，长度限制：64 个字符。
      */
    Name?: string;
    /**
      * 模板描述信息，长度限制：256 个字符。
      */
    Comment?: string;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * ModifyDefaultStorageRegion请求参数结构体
 */
export interface ModifyDefaultStorageRegionRequest {
    /**
      * 默认的存储地域，必须是已经开通的地域」，建议改成「默认的存储地域，必须是已经开通的地域（通过 DescribeStorageRegions 接口查询）。
      */
    StorageRegion: string;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * ModifyEventConfig返回参数结构体
 */
export interface ModifyEventConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * 点播文件指定时间点截图信息
 */
export interface MediaSnapshotByTimeOffsetItem {
    /**
      * 指定时间点截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
      */
    Definition: number;
    /**
      * 同一规格的截图信息集合，每个元素代表一张截图。
      */
    PicInfoSet: Array<MediaSnapshotByTimePicInfoItem>;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * 智能识别 Ocr 文字涉及令人不适宜信息的任务输入参数类型
 */
export interface AiReviewPoliticalOcrTaskInput {
    /**
      * 鉴别涉及令人不适宜信息的模板 ID。
      */
    Definition: number;
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
 * 智能识别 Ocr 文字涉及令人不适宜信息、违规任务结果类型
 */
export interface AiReviewTaskPoliticalOcrResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别 Ocr 文字涉及令人不适宜信息的任务输入。
      */
    Input: AiReviewPoliticalOcrTaskInput;
    /**
      * 智能识别 Ocr 文字涉及令人不适宜信息的任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiReviewPoliticalOcrTaskOutput;
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
      */
    RowCount: number;
    /**
      * 雪碧图中小图的列数。
      */
    ColumnCount: number;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    WaterMarkDefinition: Array<number>;
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
      */
    Metric?: string;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 用户自定义人物智能识别任务控制参数
 */
export interface UserDefineFaceReviewTemplateInfo {
    /**
      * 用户自定义人物智能识别任务开关，可选值：
<li>ON：开启自定义人物智能识别任务；</li>
<li>OFF：关闭自定义人物智能识别任务。</li>
      */
    Switch: string;
    /**
      * 用户自定义人物过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
      */
    LabelSet?: Array<string>;
    /**
      * 判定涉嫌违规的分数阈值，当智能智能识别达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * 智能识别模板详情
 */
export interface ContentReviewTemplateItem {
    /**
      * 智能识别模板唯一标识。
      */
    Definition: number;
    /**
      * 智能识别模板名称，长度限制：64 个字符。
      */
    Name: string;
    /**
      * 智能识别模板描述信息，长度限制：256 个字符。
      */
    Comment: string;
    /**
      * 鉴别涉及令人反感的信息的控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PornConfigure: PornConfigureInfo;
    /**
      * 鉴别涉及令人不安全的信息的控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TerrorismConfigure: TerrorismConfigureInfo;
    /**
      * 鉴别涉及令人不适宜的信息的控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PoliticalConfigure: PoliticalConfigureInfo;
    /**
      * 违禁控制参数。违禁内容包括：
<li>谩骂；</li>
<li>涉毒违法。</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProhibitedConfigure: ProhibitedConfigureInfo;
    /**
      * 用户自定义智能识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserDefineConfigure: UserDefineConfigureInfo;
    /**
      * 智能识别结果是否进入智能识别墙（对智能识别结果进行人工复核）的开关。
<li>ON：是；</li>
<li>OFF：否。</li>
      */
    ReviewWallSwitch: string;
    /**
      * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
      */
    ScreenshotInterval: number;
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
 * DeleteAIRecognitionTemplate返回参数结构体
 */
export interface DeleteAIRecognitionTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteContentReviewTemplate请求参数结构体
 */
export interface DeleteContentReviewTemplateRequest {
    /**
      * 内容智能识别模板唯一标识。
      */
    Definition: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 智能识别涉及令人不适宜信息的任务输入参数类型
 */
export interface AiReviewPoliticalTaskInput {
    /**
      * 鉴别涉及令人不适宜信息的模板 ID。
      */
    Definition: number;
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
 * ResetProcedureTemplate请求参数结构体
 */
export interface ResetProcedureTemplateRequest {
    /**
      * 任务流名字
      */
    Name: string;
    /**
      * 模板描述信息，长度限制：256 个字符。
      */
    Comment?: string;
    /**
      * 视频处理类型任务参数。
      */
    MediaProcessTask?: MediaProcessTaskInput;
    /**
      * AI 智能内容审核类型任务参数。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 图片Ocr 文字鉴别信息的任务结果类型
 */
export interface ContentReviewOcrResult {
    /**
      * Ocr 文字鉴别结果的评分，分值为0到100。
      */
    Confidence: number;
    /**
      * Ocr 文字鉴别的结果建议，取值范围：
<li>pass；</li>
<li>review；</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * Ocr 文字鉴别的嫌疑关键词列表。
      */
    KeywordSet: Array<string>;
    /**
      * Ocr 文字鉴别的嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
      */
    AreaCoordSet: Array<number>;
}
/**
 * ComposeMedia返回参数结构体
 */
export interface ComposeMediaResponse {
    /**
      * 制作媒体文件的任务 ID，可以通过该 ID 查询制作任务（任务类型为 MakeMedia）的状态。
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DeleteSampleSnapshotTemplate请求参数结构体
 */
export interface DeleteSampleSnapshotTemplateRequest {
    /**
      * 采样截图模板唯一标识。
      */
    Definition: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 当前低频存储量，单位是字节。
      */
    InfrequentStorage?: number;
    /**
      * 当前标准存储量，单位是字节。
      */
    StandardStorage?: number;
    /**
      * 各计费区域的存储用量。
      */
    StorageStat?: Array<StorageStatData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
<li>libfdk_aac；</li>
<li>libmp3lame。</li>
      */
    Codec?: string;
    /**
      * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。 当取值为 0，表示音频码率和原始音频保持一致。
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
    DailyPlayStatInfoSet: Array<DailyPlayStatInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySubAppIdInfo请求参数结构体
 */
export interface ModifySubAppIdInfoRequest {
    /**
      * 子应用 ID。
      */
    SubAppId: number;
    /**
      * 子应用名称，长度限制：40个字符。
      */
    Name?: string;
    /**
      * 子应用简介，长度限制： 300个字符。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
<li>libfdk_aac；</li>
<li>libmp3lame。</li>
      */
    Codec: string;
    /**
      * 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。
当取值为 0，表示音频码率和原始音频保持一致。
      */
    Bitrate: number;
    /**
      * 音频流的采样率，可选值：
<li>32000</li>
<li>44100</li>
<li>48000</li>
单位：Hz。
      */
    SampleRate: number;
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
 * ExecuteFunction返回参数结构体
 */
export interface ExecuteFunctionResponse {
    /**
      * 处理结果打包后的字符串，具体与后台一同协调。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 视频内容识别模板详情
 */
export interface AIRecognitionTemplateItem {
    /**
      * 视频内容识别模板唯一标识。
      */
    Definition: number;
    /**
      * 视频内容识别模板名称。
      */
    Name: string;
    /**
      * 视频内容识别模板描述信息。
      */
    Comment: string;
    /**
      * 头尾识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HeadTailConfigure: HeadTailConfigureInfo;
    /**
      * 拆条识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SegmentConfigure: SegmentConfigureInfo;
    /**
      * 人脸识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FaceConfigure: FaceConfigureInfo;
    /**
      * 文本全文识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrFullTextConfigure: OcrFullTextConfigureInfo;
    /**
      * 文本关键词识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrWordsConfigure: OcrWordsConfigureInfo;
    /**
      * 语音全文识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AsrFullTextConfigure: AsrFullTextConfigureInfo;
    /**
      * 语音关键词识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AsrWordsConfigure: AsrWordsConfigureInfo;
    /**
      * 物体识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObjectConfigure: ObjectConfigureInfo;
    /**
      * 截图时间间隔，单位：秒。
      */
    ScreenshotInterval: number;
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
 * 智能识别 Asr 文字涉及令人反感的信息的任务输入参数类型
 */
export interface AiReviewPornAsrTaskInput {
    /**
      * 鉴别涉及令人反感的信息的模板 ID。
      */
    Definition: number;
}
/**
 * 人脸识别结果。
 */
export interface AiRecognitionTaskFaceResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 人脸识别任务输入信息。
      */
    Input: AiRecognitionTaskFaceResultInput;
    /**
      * 人脸识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiRecognitionTaskFaceResultOutput;
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
<li>HLS。</li>
      */
    Format: string;
    /**
      * 自适应转码输出子流参数信息，最多输出10路子流。
注意：各个子流的帧率必须保持一致；如果不一致，采用第一个子流的帧率作为输出帧率。
      */
    StreamInfos: Array<AdaptiveStreamTemplate>;
    /**
      * 模板名称，长度限制：64 个字符。
      */
    Name?: string;
    /**
      * DRM 方案类型，取值范围：
<li>SimpleAES</li>
<li>Widevine</li>
<li>FairPlay</li>
如果取值为空字符串，代表不对视频做 DRM 保护。
      */
    DrmType?: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * PushUrlCache返回参数结构体
 */
export interface PushUrlCacheResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 对视频做采样截图任务输入。
      */
    Input: SampleSnapshotTaskInput;
    /**
      * 对视频做采样截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: MediaSampleSnapshotItem;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 画面鉴别涉及令人不安全的信息的过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核。取值范围：0~100。
      */
    ReviewConfidence?: number;
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
      * 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 智能精彩片段结果类型
 */
export interface AiAnalysisTaskHighlightResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能精彩片段任务输入。
      */
    Input: AiAnalysisTaskHighlightInput;
    /**
      * 智能精彩片段任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiAnalysisTaskHighlightOutput;
}
/**
 * DeleteAIAnalysisTemplate返回参数结构体
 */
export interface DeleteAIAnalysisTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * ApplyUpload返回参数结构体
 */
export interface ApplyUploadResponse {
    /**
      * 存储桶，用于上传接口 URL 的 bucket_name。
      */
    StorageBucket: string;
    /**
      * 存储园区，用于上传接口 Host 的 Region。
      */
    StorageRegion: string;
    /**
      * 点播会话，用于确认上传接口的参数 VodSessionKey。
      */
    VodSessionKey: string;
    /**
      * 媒体存储路径，用于上传接口存储媒体的对象键（Key）。
      */
    MediaStoragePath: string;
    /**
      * 封面存储路径，用于上传接口存储封面的对象键（Key）。
      */
    CoverStoragePath: string;
    /**
      * 临时凭证，用于上传接口的权限验证。
      */
    TempCertificate: TempCertificate;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDailyPlayStatFileList返回参数结构体
 */
export interface DescribeDailyPlayStatFileListResponse {
    /**
      * 播放统计文件列表。
      */
    PlayStatFileSet: Array<PlayStatFileInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 智能识别 Ocr 文字涉及令人不安全的信息的任务输入参数类型
 */
export interface AiReviewTerrorismOcrTaskInput {
    /**
      * 鉴别涉及令人不安全的信息的模板 ID。
      */
    Definition: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 智能识别涉及令人反感的信息的任务输入参数类型
 */
export interface AiReviewPornTaskInput {
    /**
      * 鉴别涉及令人反感的信息的模板 ID。
      */
    Definition: number;
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
      * 模板描述信息，长度限制：256 个字符。
      */
    Comment?: string;
    /**
      * 视频处理类型任务参数。
      */
    MediaProcessTask?: MediaProcessTaskInput;
    /**
      * AI 智能识别类型任务参数。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 查询视频处理任务类型，目前支持的任务类型包括：
<li> Transcoding: 普通转码</li>
<li> Transcoding-TESHD: 极速高清转码</li>
<li> Editing: 视频编辑</li>
<li> Editing-TESHD: 极速高清视频编辑</li>
<li> AdaptiveBitrateStreaming: 自适应码流</li>
<li> ContentAudit: 内容审核</li>
<li> RemoveWatermark: 去除水印</li>
<li>Transcode: 转码，包含普通转码、极速高清和视频编辑（不推荐使用）</li>
      */
    Type?: string;
    /**
      * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 存储地域信息
 */
export interface StorageRegionInfo {
    /**
      * 存储地域
      */
    Region: string;
    /**
      * 存储地域描述信息
      */
    Description: string;
    /**
      * 状态，是否开通，取值有：
<li>opened：已经开通。</li>
<li>unopened：未开通。</li>
      */
    Status: string;
    /**
      * 是否默认的存储地域，true：是；false：否
      */
    IsDefault: boolean;
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
      */
    Transitions?: Array<TransitionOpertion>;
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
 * ModifySuperPlayerConfig返回参数结构体
 */
export interface ModifySuperPlayerConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 视频内容识别模板唯一标识。
      */
    Definition: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
    FileId: string;
    /**
      * 上传完成后生成的媒体文件基础信息。
      */
    MediaBasicInfo: MediaBasicInfo;
    /**
      * 若视频上传时指定了视频处理流程，则该字段为流程任务 ID。
      */
    ProcedureTaskId: string;
    /**
      * 元信息。包括大小、时长、视频流信息、音频流信息等。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetaData: MediaMetaData;
}
/**
 * DescribeCDNStatDetails返回参数结构体
 */
export interface DescribeCDNStatDetailsResponse {
    /**
      * 每条数据的时间粒度，单位：分钟。
      */
    DataInterval: number;
    /**
      * CDN 用量数据。
      */
    Data: Array<StatDataItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 智能封面任务输入。
      */
    Input: AiAnalysisTaskCoverInput;
    /**
      * 智能封面任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiAnalysisTaskCoverOutput;
}
/**
 * DescribeEventConfig请求参数结构体
 */
export interface DescribeEventConfigRequest {
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    FileIdSet: Array<string>;
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
 * 用户自定义语音智能识别任务控制参数
 */
export interface UserDefineAsrTextReviewTemplateInfo {
    /**
      * 用户自定语音智能识别任务开关，可选值：
<li>ON：开启自定义语音智能识别任务；</li>
<li>OFF：关闭自定义语音智能识别任务。</li>
      */
    Switch: string;
    /**
      * 用户自定义语音过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
      */
    LabelSet?: Array<string>;
    /**
      * 判定涉嫌违规的分数阈值，当智能智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
    Definition: number;
    /**
      * 雪碧图小图的高度。
      */
    Height: number;
    /**
      * 雪碧图小图的宽度。
      */
    Width: number;
    /**
      * 每一张雪碧图大图里小图的数量。
      */
    TotalCount: number;
    /**
      * 每一张雪碧图大图的地址。
      */
    ImageUrlSet: Array<string>;
    /**
      * 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。
      */
    WebVttUrl: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 对视频转自适应码流任务结果类型
 */
export interface MediaProcessTaskAdaptiveDynamicStreamingResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 对视频转自适应码流任务的输入。
      */
    Input: AdaptiveDynamicStreamingTaskInput;
    /**
      * 对视频转自适应码流任务的输出。
      */
    Output: AdaptiveDynamicStreamingInfoItem;
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
      * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 视频内容识别模板详情列表。
      */
    AIRecognitionTemplateSet?: Array<AIRecognitionTemplateItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核。取值范围：0~100。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DescribeDailyMostPlayedStat返回参数结构体
 */
export interface DescribeDailyMostPlayedStatResponse {
    /**
      * 媒体文件播放统计信息。
      */
    DailyPlayStatInfoSet: Array<DailyPlayStatInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAIRecognitionTemplate返回参数结构体
 */
export interface ModifyAIRecognitionTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 新增的一组标签，单个媒体文件最多 16 个标签，单个标签最多 16 个字符。同一个请求里，AddTags 参数必须与 DeleteTags 都不同。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核。取值范围：0~100。
      */
    ReviewConfidence?: number;
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
      * 指定时间点截图模板唯一标识过滤条件，数组长度限制：100。
      */
    Definitions?: Array<number>;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * ModifyHeadTailTemplate返回参数结构体
 */
export interface ModifyHeadTailTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    ProductType: string;
    /**
      * 资源包实例起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
      */
    StartTime: string;
    /**
      * 资源包实例过期日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
      */
    ExpireTime: string;
    /**
      * 资源包实例ID。对应每个资源包，系统会分配相应的资源。续费或者升级资源包时，需要带上这个资源ID。
      */
    ProductInstanceId: string;
    /**
      * 系统最近一次扣除资源包的日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
      */
    LastConsumeDate: string;
    /**
      * 资源包绑定 License 状态，取值有：
<li>0：未绑定。</li>
<li>1：已绑定。</li>
      */
    BindStatus: number;
    /**
      * 预付费资源包实例中包含的资源包列表。
      */
    ProductInstanceResourceSet: Array<ProductInstanceRecource>;
    /**
      * 资源包实例的状态，取值有：
<li>Effective：生效，可用于计费抵扣。</li>
<li>Isolated：隔离，不可用于计费抵扣。</li>
      */
    ProductInstanceStatus: string;
    /**
      * 资源包实例的可退还状态，取值有：
<li>FullRefund：可全额退款。</li>
<li>Denied：不可退款。</li>
      */
    RefundStatus: string;
}
/**
 * CDN 日志信息
 */
export interface CdnLogInfo {
    /**
      * 日志所属日期， 格式为：yyyy-MM-dd ，如2018-03-01。
      */
    Date: string;
    /**
      * 日志名称，格式为：日期小时-域名
如 2018120101-test.vod2.mqcloud.com。
      */
    Name: string;
    /**
      * 日志下载链接，24小时内下载有效。
      */
    Url: string;
    /**
      * 日志起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
      */
    StartTime: string;
    /**
      * 日志结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
      */
    EndTime: string;
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
 * 小程序智能识别信息单元
 */
export interface MediaMiniProgramReviewInfoItem {
    /**
      * 模板id。小程序视频发布的视频所对应的转码模板ID，为0代表原始视频。
      */
    Definition: number;
    /**
      * 视频元信息。
      */
    MetaData?: MediaMetaData;
    /**
      * 小程序智能识别视频播放地址。
      */
    Url: string;
    /**
      * 小程序视频发布状态：
<li>Pass：成功。</li>
<li>Rejected：未通过。</li>
      */
    ReviewResult: string;
    /**
      * 小程序智能识别元素。
      */
    ReviewSummary: Array<MediaMiniProgramReviewElem>;
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
<li> ContentAudit: 智能识别</li>
<li> RemoveWatermark: 去水印</li>
<li>Transcode: 转码，包含普通转码、极速高清和视频编辑（不推荐使用）</li>
      */
    TaskType: string;
    /**
      * 任务数统计数据概览，用量单位为秒。
      */
    Summary: Array<TaskStatDataItem>;
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
去水印规格：
<li>480P: 分辨率640*480及以下</li>
<li>720P: 分辨率1280*720及以下</li>
<li>1080P: 分辨率1920*1080及以下</li>
<li>2K: 分辨率2560*1440及以下</li>
<li>4K: 分辨率3840*2160及以下</li>
<li>8K: 分辨率7680*4320及以下</li>
      */
    Details: Array<SpecificationDataItem>;
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
      * 需要开启 CDN 加速的区域：
<li>Chinese Mainland：中国境内（不包含港澳台）。</li>
<li>Outside Chinese Mainland: 中国境外。</li>
<li>Global: 全球范围。</li>
如果没有设置 AccelerateArea， 点播会根据用户在腾讯云设置的地域信息自动开通中国境内或者中国境外的 CDN 加速。开启中国境内加速的域名，需要先[备案域名](/document/product/243/18905)。
      */
    AccelerateArea?: string;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
      */
    SessionId?: string;
    /**
      * 保留字段，特殊用途时使用。
      */
    ExtInfo?: string;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * 资源包中包含的资源。
 */
export interface ProductInstanceRecource {
    /**
      * 资源类型。
<li>Storage：存储资源包。</li>
<li>Traffic：流量资源包。</li>
<li>Transcode：普通转码资源包。</li>
<li>TESHD：极速高清转码资源包。</li>
<li>Review：视频智能识别转码资源包。</li>
      */
    ResourceType: string;
    /**
      * 资源包额度。
<li>视频存储资源包，单位为字节。</li>
<li>视频转码资源包，单位为秒。</li>
<li>视频智能识别资源包，单位为秒。</li>
<li>视频极速高清资源包，单位为秒。</li>
<li>视频加速资源包，单位为字节。</li>
      */
    Amount: number;
    /**
      * 资源包余量。
<li>视频存储资源包，单位为字节。</li>
<li>视频转码资源包，单位为秒。</li>
<li>视频智能识别资源包，单位为秒。</li>
<li>视频极速高清资源包，单位为秒。</li>
<li>视频加速资源包，单位为字节。</li>
      */
    Left: number;
}
/**
 * 转动图任务结果类型
 */
export interface MediaProcessTaskAnimatedGraphicResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 转动图任务的输入。
      */
    Input: AnimatedGraphicTaskInput;
    /**
      * 转动图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: MediaAnimatedGraphicsItem;
}
/**
 * ProcessMedia返回参数结构体
 */
export interface ProcessMediaResponse {
    /**
      * 任务 ID
      */
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateWordSamples返回参数结构体
 */
export interface CreateWordSamplesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核。取值范围：0~100。
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
      * 人脸图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串集合。
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
      */
    CycleConfig?: WatermarkCycleConfigForUpdate;
}
/**
 * 智能识别 Ocr 文字鉴别涉及令人不安全的信息的任务结果类型
 */
export interface AiReviewTaskTerrorismOcrResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别 Ocr 文字涉及令人不安全的信息的任务输入。
      */
    Input: AiReviewTerrorismOcrTaskInput;
    /**
      * 智能识别 Ocr 文字涉及令人不安全的信息的任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiReviewTerrorismOcrTaskOutput;
}
/**
 * 文本关键识别结果。
 */
export interface AiRecognitionTaskOcrWordsResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 文本关键词识别任务输入信息。
      */
    Input: AiRecognitionTaskOcrWordsResultInput;
    /**
      * 文本关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiRecognitionTaskOcrWordsResultOutput;
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
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
      * 视频拆条任务输入信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Input: AiRecognitionTaskSegmentResultInput;
    /**
      * 视频拆条任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiRecognitionTaskSegmentResultOutput;
}
/**
 * 字幕信息。
 */
export interface MediaSubtitleItem {
    /**
      * 字幕的唯一标识。
      */
    Id: string;
    /**
      * 字幕名字。
      */
    Name: string;
    /**
      * 字幕语言。常见的取值如下：
<li>cn：中文</li>
<li>ja：日文</li>
<li>en-US：英文</li>
其他取值参考 [RFC5646](https://tools.ietf.org/html/rfc5646)
      */
    Language: string;
    /**
      * 字幕格式。取值范围如下：
<li>vtt</li>
      */
    Format: string;
    /**
      * 字幕 URL。
      */
    Url: string;
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * ModifyAnimatedGraphicsTemplate返回参数结构体
 */
export interface ModifyAnimatedGraphicsTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAIAnalysisTemplate返回参数结构体
 */
export interface ModifyAIAnalysisTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * LiveRealTimeClip请求参数结构体
 */
export interface LiveRealTimeClipRequest {
    /**
      * 推流[直播码](https://cloud.tencent.com/document/product/267/5959)。
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
      * 是否需要返回剪辑后的视频元信息。0 不需要，1 需要。默认不需要。
      */
    MetaDataRequired?: number;
    /**
      * 云点播中添加的用于时移播放的域名，必须在云直播已经[关联录制模板和开通时移服务](https://cloud.tencent.com/document/product/266/52220#.E6.AD.A5.E9.AA.A43.EF.BC.9A.E5.85.B3.E8.81.94.E5.BD.95.E5.88.B6.E6.A8.A1.E6.9D.BF.3Ca-id.3D.22step3.22.3E.3C.2Fa.3E)。**如果本接口的首次调用时间在 2021-01-01T00:00:00Z 之后，则此字段为必选字段。**
      */
    Host?: string;
    /**
      * 系统保留字段，请勿填写。
      */
    ExtInfo?: string;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
    Input: SplitMediaTaskInput;
    /**
      * 视频拆条任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: TaskOutputMediaInfo;
    /**
      * 若发起视频拆条任务时指定了视频处理流程，则该字段为流程任务 ID。
      */
    ProcedureTaskId: string;
}
/**
 * Asr 文字涉及令人反感的信息
 */
export interface AiReviewPornAsrTaskOutput {
    /**
      * Asr 文字涉及令人反感的信息的评分，分值为0到100。
      */
    Confidence: number;
    /**
      * Asr 文字涉及令人反感的信息的结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * Asr 文字有涉及令人反感的信息的嫌疑的视频片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<MediaContentReviewAsrTextSegmentItem>;
    /**
      * Asr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * Asr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    SegmentSetFileUrlExpireTime: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAIAnalysisTemplate请求参数结构体
 */
export interface DeleteAIAnalysisTemplateRequest {
    /**
      * 视频内容分析模板唯一标识。
      */
    Definition: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    Type: string;
    /**
      * 图片画面中的鉴别令人反感的信息结果，当 Type 为 Porn.Image 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PornImageResult: PornImageResult;
    /**
      * 图片画面中的鉴别令人不安全的信息结果，当 Type 为 Terrorism.Image 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TerrorismImageResult: TerrorismImageResult;
    /**
      * 图片画面中的鉴别令人不适宜信息结果，当 Type 为 Political.Image 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PoliticalImageResult: PoliticalImageResult;
    /**
      * 图片 OCR 文字中的鉴别令人反感的信息结果，当 Type 为 Porn.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PornOcrResult: ContentReviewOcrResult;
    /**
      * 图片 OCR 中的鉴别令人不安全的信息结果，当 Type 为 Terrorism.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TerrorismOcrResult: ContentReviewOcrResult;
    /**
      * 图片 OCR 文字中的鉴别令人不适宜信息结果，当 Type 为 Political.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PoliticalOcrResult: ContentReviewOcrResult;
}
/**
 * 对视频截雪碧图任务结果类型
 */
export interface MediaProcessTaskImageSpriteResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 对视频截雪碧图任务的输入。
      */
    Input: ImageSpriteTaskInput;
    /**
      * 对视频截雪碧图任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: MediaImageSpriteItem;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteProcedureTemplate返回参数结构体
 */
export interface DeleteProcedureTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 小程序智能识别信息
 */
export interface MediaMiniProgramReviewInfo {
    /**
      * 智能识别信息列表。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 转自适应码流模板唯一标识过滤条件，数组长度限制：100。
      */
    Definitions?: Array<number>;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
      */
    SubtitleFormat?: string;
}
/**
 * DeleteHeadTailTemplate返回参数结构体
 */
export interface DeleteHeadTailTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateContentReviewTemplate返回参数结构体
 */
export interface CreateContentReviewTemplateResponse {
    /**
      * 内容智能识别模板唯一标识。
      */
    Definition: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DescribeProcedureTemplates请求参数结构体
 */
export interface DescribeProcedureTemplatesRequest {
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 采样截图信息
 */
export interface MediaSampleSnapshotItem {
    /**
      * 采样截图规格 ID，参见[采样截图参数模板](https://cloud.tencent.com/document/product/266/33480#.E9.87.87.E6.A0.B7.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
      */
    Definition: number;
    /**
      * 采样方式，取值范围：
<li>Percent：根据百分比间隔采样。</li>
<li>Time：根据时间间隔采样。</li>
      */
    SampleType: string;
    /**
      * 采样间隔
<li>当 SampleType 为 Percent 时，该值表示多少百分比一张图。</li>
<li>当 SampleType 为 Time 时，该值表示多少时间间隔一张图，单位秒， 第一张图均为视频首帧。</li>
      */
    Interval: number;
    /**
      * 生成的截图 url 列表。
      */
    ImageUrlSet: Array<string>;
    /**
      * 截图如果被打上了水印，被打水印的模板 ID 列表。
      */
    WaterMarkDefinition: Array<number>;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    KeyList: Array<SimpleAesEdkPair>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMediaPlayStatDetails返回参数结构体
 */
export interface DescribeMediaPlayStatDetailsResponse {
    /**
      * 播放统计数据。
      */
    PlayStatInfoSet: Array<PlayStatInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 视频流配置参数
 */
export interface VideoTemplateInfo {
    /**
      * 视频流的编码格式，可选值：
<li>libx264：H.264 编码</li>
<li>libx265：H.265 编码</li>
<li>av1：AOMedia Video 1 编码</li>
目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。av1 编码容器目前只支持 mp4 。
      */
    Codec: string;
    /**
      * 视频帧率，取值范围：[0, 100]，单位：Hz。
当取值为 0，表示帧率和原始视频保持一致。
      */
    Fps: number;
    /**
      * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。
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
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
<li>white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。</li>
<li>gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。</li>
默认值：black 。
      */
    FillType?: string;
    /**
      * 视频恒定码率控制因子，取值范围为[1, 51]。
如果指定该参数，将使用 CRF 的码率控制方式做转码（视频码率将不再生效）。
如果没有特殊需求，不建议指定该参数。
      */
    Vcrf?: number;
    /**
      * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。
当填 0 或不填时，系统将自动设置 gop 长度。
      */
    Gop?: number;
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
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
 * 智能识别 Ocr 文字涉及令人反感的信息的任务结果类型
 */
export interface AiReviewTaskPornOcrResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别 Ocr 文字涉及令人反感的信息的任务输入。
      */
    Input: AiReviewPornOcrTaskInput;
    /**
      * Ocr 文字智能识别涉及令人反感的信息的任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiReviewPornOcrTaskOutput;
}
/**
 * ModifyContentReviewTemplate返回参数结构体
 */
export interface ModifyContentReviewTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWatermarkTemplates请求参数结构体
 */
export interface DescribeWatermarkTemplatesRequest {
    /**
      * 水印模板唯一标识过滤条件，数组长度限制：100。
      */
    Definitions?: Array<number>;
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
      * 返回记录条数
<li>默认值：10；</li>
<li>最大值：100。</li>
      */
    Limit?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * 用户自定义智能识别任务控制参数
 */
export interface UserDefineConfigureInfo {
    /**
      * 用户自定义人物智能识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FaceReviewInfo?: UserDefineFaceReviewTemplateInfo;
    /**
      * 用户自定义语音智能识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AsrReviewInfo?: UserDefineAsrTextReviewTemplateInfo;
    /**
      * 用户自定义文本智能识别控制参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrReviewInfo?: UserDefineOcrTextReviewTemplateInfo;
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
 * 智能识别 Ocr 文字涉及令人反感的信息的任务输入参数类型
 */
export interface AiReviewPornOcrTaskInput {
    /**
      * 鉴别涉及令人反感的信息的模板 ID。
      */
    Definition: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyAdaptiveDynamicStreamingTemplate请求参数结构体
 */
export interface ModifyAdaptiveDynamicStreamingTemplateRequest {
    /**
      * 自适应转码模板唯一标识。
      */
    Definition: number;
    /**
      * 模板名称，长度限制：64 个字符。
      */
    Name?: string;
    /**
      * 自适应转码格式，取值范围：
<li>HLS。</li>
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 视频转动图结果信息
 */
export interface MediaAnimatedGraphicsItem {
    /**
      * 转动图的文件地址。
      */
    Url: string;
    /**
      * 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/266/33481#.3Cspan-id-.3D-.22zdt.22.3E.3C.2Fspan.3E.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF)。
      */
    Definition: number;
    /**
      * 动图格式，如 gif。
      */
    Container: string;
    /**
      * 动图的高度，单位：px。
      */
    Height: number;
    /**
      * 动图的宽度，单位：px。
      */
    Width: number;
    /**
      * 动图码率，单位：bps。
      */
    Bitrate: number;
    /**
      * 动图大小，单位：字节。
      */
    Size: number;
    /**
      * 动图的md5值。
      */
    Md5: string;
    /**
      * 动图在视频中的起始时间偏移，单位：秒。
      */
    StartTimeOffset: number;
    /**
      * 动图在视频中的结束时间偏移，单位：秒。
      */
    EndTimeOffset: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    AreaCoordSet: Array<number>;
}
/**
 * DeleteMedia返回参数结构体
 */
export interface DeleteMediaResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySnapshotByTimeOffsetTemplate返回参数结构体
 */
export interface ModifySnapshotByTimeOffsetTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 智能标签任务输入。
      */
    Input: AiAnalysisTaskTagInput;
    /**
      * 智能标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiAnalysisTaskTagOutput;
}
/**
 * SearchMedia返回参数结构体
 */
export interface SearchMediaResponse {
    /**
      * 符合搜索条件的记录总数。
<li>最大值：5000。当命中记录数超过5000时，该字段将返回 5000，而非实际命中总数。</li>
      */
    TotalCount: number;
    /**
      * 媒体文件信息列表。
      */
    MediaInfoSet: Array<MediaInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyMediaStorageClass请求参数结构体
 */
export interface ModifyMediaStorageClassRequest {
    /**
      * 媒体文件唯一标识列表。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
 * 字幕信息输入参数。
 */
export interface MediaSubtitleInput {
    /**
      * 字幕名字，长度限制：64 个字符。
      */
    Name: string;
    /**
      * 字幕语言。常见的取值如下：
<li>cn：中文</li>
<li>ja：日文</li>
<li>en-US：英文</li>
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
      * 字幕的唯一标识。长度不能超过16个字符，可以使用大小写字母、数字、下划线（_）或横杠（-）。不能与媒资文件中现有字幕的唯一标识重复。
      */
    Id?: string;
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
      * 视频处理类型任务参数。
      */
    MediaProcessTask?: MediaProcessTaskInput;
    /**
      * 视频智能识别类型任务参数。
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
    /**
      * 保留字段，特殊用途时使用。
      */
    ExtInfo?: string;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 图片画面智能识别涉及令人反感的信息的任务结果类型
 */
export interface PornImageResult {
    /**
      * 鉴别涉及令人反感的信息的评分，分值为0到100。
      */
    Confidence: number;
    /**
      * 鉴别涉及令人反感的信息的结果建议，取值范围：
<li>pass；</li>
<li>review；</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * 鉴别涉及令人反感的信息的结果标签，取值范围：
<li>porn：色情；</li>
<li>sexy：性感；</li>
<li>vulgar：低俗；</li>
<li>intimacy：亲密行为。</li>
      */
    Label: string;
}
/**
 * ProcessImage返回参数结构体
 */
export interface ProcessImageResponse {
    /**
      * 图片内容智能识别任务结果。
      */
    ContentReviewResultSet: Array<ContentReviewResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * ModifyMediaInfo返回参数结构体
 */
export interface ModifyMediaInfoResponse {
    /**
      * 新的视频封面 URL。
* 注意：仅当请求携带 CoverData 时此返回值有效。 *
      */
    CoverUrl: string;
    /**
      * 新增的字幕信息。
      */
    AddedSubtitleSet: Array<MediaSubtitleItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 文本全文识别结果。
 */
export interface AiRecognitionTaskOcrFullTextResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 文本全文识别任务输入信息。
      */
    Input: AiRecognitionTaskOcrFullTextResultInput;
    /**
      * 文本全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiRecognitionTaskOcrFullTextResultOutput;
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
 * 对视频按指定时间点截图任务结果类型
 */
export interface MediaProcessTaskSnapshotByTimeOffsetResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 对视频按指定时间点截图任务输入。
      */
    Input: SnapshotByTimeOffsetTaskInput;
    /**
      * 对视频按指定时间点截图任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: MediaSnapshotByTimeOffsetItem;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 片头片尾模板号，数组长度限制：100。
      */
    Definitions?: Array<number>;
    /**
      * 分页偏移量，默认值：0。
      */
    Offset?: number;
    /**
      * 返回记录条数，默认值：10，最大值：100。
      */
    Limit?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * ModifyAdaptiveDynamicStreamingTemplate返回参数结构体
 */
export interface ModifyAdaptiveDynamicStreamingTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 转码任务的输入。
      */
    Input: TranscodeTaskInput;
    /**
      * 转码任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: MediaTranscodeItem;
    /**
      * 转码进度，取值范围 [0-100] 。
      */
    Progress: number;
    /**
      * 转码任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    BeginProcessTime: string;
    /**
      * 转码任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    FinishTime: string;
}
/**
 * 域名信息
 */
export interface DomainDetailInfo {
    /**
      * 域名名称。
      */
    Domain: string;
    /**
      * 加速地区信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccelerateAreaInfos: Array<AccelerateAreaInfo>;
    /**
      * 部署状态，取值有：
<li>Online：上线；</li>
<li>Deploying：部署中；</li>
<li>Locked: 锁定中，出现该状态时，无法对该域名进行部署变更。</li>
      */
    DeployStatus: string;
    /**
      * HTTPS 配置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HTTPSConfig: DomainHTTPSConfig;
    /**
      * [Key 防盗链](https://cloud.tencent.com/document/product/266/14047)配置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UrlSignatureAuthPolicy: UrlSignatureAuthPolicy;
    /**
      * [Referer 防盗链](https://cloud.tencent.com/document/product/266/14046)配置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RefererAuthPolicy: RefererAuthPolicy;
    /**
      * 域名添加到腾讯云点播系统中的时间。
<li>格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。</li>
      */
    CreateTime: string;
}
/**
 * 视频流配置信息
 */
export interface EditMediaVideoStream {
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
}
/**
 * 图片处理模板， 最多支持三次操作。例如：裁剪-缩略-裁剪。
 */
export interface ImageProcessingTemplate {
    /**
      * 图片处理模板唯一标识。
      */
    Definition: number;
    /**
      * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
      */
    Type: string;
    /**
      * 图片处理模板名称。
      */
    Name: string;
    /**
      * 模板描述信息。
      */
    Comment: string;
    /**
      * 图片处理操作数组，操作将以数组顺序执行。
<li>长度限制：3。</li>
      */
    Operations: Array<ImageOperation>;
    /**
      * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    CreateTime: string;
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
      * 指定本次需要删除的部分。默认值为 "[]", 表示删除媒体及其对应的全部视频处理文件。
      */
    DeleteParts?: Array<MediaDeleteItem>;
    /**
      * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 播放器对不于不同分辨率的子流展示名字，不填或者填空数组则使用默认配置：
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
}
/**
 * ModifySubAppIdInfo返回参数结构体
 */
export interface ModifySubAppIdInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * ModifySubAppIdStatus返回参数结构体
 */
export interface ModifySubAppIdStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 指定删除点播视频时的删除内容

 */
export interface MediaDeleteItem {
    /**
      * 所指定的删除部分。如果未填写该字段则参数无效。可选值有：
<li>OriginalFiles（删除原文件，删除后无法发起转码、微信发布等任何视频处理操作）。</li>
<li>TranscodeFiles（删除转码文件）。</li>
<li>WechatPublishFiles（删除微信发布文件）。</li>
      */
    Type: string;
    /**
      * 删除由Type参数指定的种类下的视频模板号，模板定义参见[转码模板](https://cloud.tencent.com/document/product/266/33478#.3Cspan-id-.3D-.22zm.22-.3E.3C.2Fspan.3E.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF)。
默认值为0，表示删除参数Type指定种类下所有的视频。
      */
    Definition?: number;
}
/**
 * 图片画面智能识别涉及令人不适宜信息的任务结果类型
 */
export interface PoliticalImageResult {
    /**
      * 鉴别涉及令人不适宜信息的评分，分值为0到100。
      */
    Confidence: number;
    /**
      * 鉴别涉及令人不适宜信息的结果建议，取值范围：
<li>pass；</li>
<li>review；</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * 涉及令人不适宜的信息、违规图标名字。
      */
    Name: string;
    /**
      * 涉及令人不适宜的信息、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
      */
    AreaCoordSet: Array<number>;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 即时剪辑后媒资的片段信息。
 */
export interface LiveRealTimeClipMediaSegmentInfo {
    /**
      * 片段的起始时间。格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    StartTime: string;
    /**
      * 片段的结束时间。格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    EndTime: string;
}
/**
 * DeleteImageSpriteTemplate返回参数结构体
 */
export interface DeleteImageSpriteTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeContentReviewTemplates返回参数结构体
 */
export interface DescribeContentReviewTemplatesResponse {
    /**
      * 符合过滤条件的记录总数。
      */
    TotalCount: number;
    /**
      * 内容智能识别模板详情列表。
      */
    ContentReviewTemplateSet: Array<ContentReviewTemplateItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * 图片智能识别次数统计数据。
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
 * 播放统计信息。
 */
export interface DailyPlayStatInfo {
    /**
      * 播放媒体文件的日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    Date: string;
    /**
      * 媒体文件ID。
      */
    FileId: string;
    /**
      * 播放次数。
      */
    PlayTimes: number;
    /**
      * 播放流量，单位：字节。
      */
    Traffic: number;
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 字幕列表，元素为字幕 ID，支持多个字幕，最大可支持16个。
      */
    SubtitleSet?: Array<string>;
}
/**
 * ModifyImageSpriteTemplate返回参数结构体
 */
export interface ModifyImageSpriteTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 对视频截图做封面任务结果类型
 */
export interface MediaProcessTaskCoverBySnapshotResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 对视频截图做封面任务的输入。
      */
    Input: CoverBySnapshotTaskInput;
    /**
      * 对视频截图做封面任务的输出。
      */
    Output: CoverBySnapshotTaskOutput;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 发布视频所对应的转码模板 ID，为 0 代表原始视频。
      */
    SourceDefinition: number;
    /**
      * 微信小程序视频发布状态，取值：
<li>Pass：发布成功；</li>
<li>Failed：发布失败；</li>
<li>Rejected：智能识别未通过。</li>
      */
    PublishResult: string;
}
/**
 * ModifyDefaultStorageRegion返回参数结构体
 */
export interface ModifyDefaultStorageRegionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Definition: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Name: string;
    /**
      * 物体出现的片段列表。
      */
    SegmentSet: Array<AiRecognitionTaskObjectSeqmentItem>;
}
/**
 * ModifyVodDomainConfig返回参数结构体
 */
export interface ModifyVodDomainConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeImageSpriteTemplates请求参数结构体
 */
export interface DescribeImageSpriteTemplatesRequest {
    /**
      * 雪碧图模板唯一标识过滤条件，数组长度限制：100。
      */
    Definitions?: Array<number>;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * ModifyVodDomainConfig请求参数结构体
 */
export interface ModifyVodDomainConfigRequest {
    /**
      * 域名。
      */
    Domain: string;
    /**
      * [Referer 防盗链](/document/product/266/14046)规则。
      */
    RefererAuthPolicy?: RefererAuthPolicy;
    /**
      * [Key 防盗链](/document/product/266/14047)规则。
      */
    UrlSignatureAuthPolicy?: UrlSignatureAuthPolicy;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * 播放器配置详情
 */
export interface PlayerConfig {
    /**
      * 播放器配置名字。
      */
    Name: string;
    /**
      * 播放器配置类型，取值范围：
<li>Preset：系统预置配置；</li>
<li>Custom：用户自定义配置。</li>
      */
    Type: string;
    /**
      * 播放 DRM 保护的自适应码流开关：
<li>ON：开启，表示仅播放 DRM  保护的自适应码流输出；</li>
<li>OFF：关闭，表示播放未加密的自适应码流输出。</li>
      */
    DrmSwitch: string;
    /**
      * 允许输出的未加密的自适应码流模板 ID。
      */
    AdaptiveDynamicStreamingDefinition: number;
    /**
      * 允许输出的 DRM 自适应码流模板内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DrmStreamingsInfo: DrmStreamingsInfo;
    /**
      * 允许输出的雪碧图模板 ID。
      */
    ImageSpriteDefinition: number;
    /**
      * 播放器对不于不同分辨率的子流展示名字。
      */
    ResolutionNameSet: Array<ResolutionNameInfo>;
    /**
      * 播放器配置创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
      */
    CreateTime: string;
    /**
      * 播放器配置最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F)。
      */
    UpdateTime: string;
    /**
      * 播放时使用的域名。值为 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。
      */
    Domain: string;
    /**
      * 播放时使用的 Scheme。取值范围：
<li>Default：使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme；</li>
<li>HTTP；</li>
<li>HTTPS。</li>
      */
    Scheme: string;
    /**
      * 模板描述信息。
      */
    Comment: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * CreateAIRecognitionTemplate返回参数结构体
 */
export interface CreateAIRecognitionTemplateResponse {
    /**
      * 视频内容识别模板唯一标识。
      */
    Definition: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySubAppIdStatus请求参数结构体
 */
export interface ModifySubAppIdStatusRequest {
    /**
      * 子应用 ID。
      */
    SubAppId: number;
    /**
      * 子应用状态，取值范围：
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
      * 新创建的子应用 ID。
      */
    SubAppId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DescribeImageProcessingTemplates请求参数结构体
 */
export interface DescribeImageProcessingTemplatesRequest {
    /**
      * 图片处理模板标识列表。长度限制：100。
      */
    Definitions?: Array<number>;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * ResetProcedureTemplate返回参数结构体
 */
export interface ResetProcedureTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * Ocr 文字涉及令人不安全的信息
 */
export interface AiReviewTerrorismOcrTaskOutput {
    /**
      * Ocr 文字有涉及令人不安全信息的评分，分值为0到100。
      */
    Confidence: number;
    /**
      * Ocr 文字有涉及令人不安全信息的结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * Ocr 文字有涉及令人不安全信息嫌疑的视频片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<MediaContentReviewOcrTextSegmentItem>;
    /**
      * Ocr 文字有涉及令人不安全信息嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * Ocr 文字有涉及令人不安全信息嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    SegmentSetFileUrlExpireTime: string;
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
}
/**
 * DescribeAIAnalysisTemplates请求参数结构体
 */
export interface DescribeAIAnalysisTemplatesRequest {
    /**
      * 视频内容分析模板唯一标识过滤条件，数组长度最大值：100。
      */
    Definitions?: Array<number>;
    /**
      * 分页偏移量，默认值：0。
      */
    Offset?: number;
    /**
      * 返回记录条数，默认值：10，最大值：100。
      */
    Limit?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * DeleteSampleSnapshotTemplate返回参数结构体
 */
export interface DeleteSampleSnapshotTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Definition: number;
    /**
      * 模板名，最大支持 64 个字符。
      */
    Name: string;
    /**
      * 模板描述，最大支持 256 个字符。
      */
    Comment: string;
    /**
      * 片头候选列表。使用时会选择跟正片分辨率最贴近的一个使用，当存在相同的候选时，选择第一个使用，最大支持 5 个。
      */
    HeadCandidateSet: Array<string>;
    /**
      * 片尾候选列表。使用时会选择跟正片分辨率最贴近的一个使用，当存在相同的候选时，选择第一个使用，最大支持 5 个。
      */
    TailCandidateSet: Array<string>;
    /**
      * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li> gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊；</li>
<li> white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充；</li>
<li> black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：stretch 。
      */
    FillType: string;
}
/**
 * DescribeStorageDetails返回参数结构体
 */
export interface DescribeStorageDetailsResponse {
    /**
      * 存储统计数据，每5分钟或每天一条数据。
      */
    Data: Array<StatDataItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    EventSet: Array<EventContent>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 分页拉取的最大返回结果数。默认值：100；最大值：1000。
      */
    Limit?: number;
    /**
      * 分页拉取的起始偏移量。默认值：0。
      */
    Offset?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * 任务流模板详情
 */
export interface ProcedureTemplate {
    /**
      * 任务流名字。
      */
    Name: string;
    /**
      * 任务流模板类型，取值范围：
<li>Preset：系统预置任务流模板；</li>
<li>Custom：用户自定义任务流模板。</li>
      */
    Type: string;
    /**
      * 模板描述信息，长度限制：256 个字符。
      */
    Comment: string;
    /**
      * 视频处理类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MediaProcessTask: MediaProcessTaskInput;
    /**
      * AI 智能识别类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AiContentReviewTask: AiContentReviewTaskInput;
    /**
      * AI 智能内容分析类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AiAnalysisTask: AiAnalysisTaskInput;
    /**
      * AI 内容识别类型任务参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AiRecognitionTask: AiRecognitionTaskInput;
    /**
      * 微信小程序发布任务参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MiniProgramPublishTask: WechatMiniProgramPublishTaskInput;
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
 * 智能识别涉及令人不安全的信息的任务结果类型
 */
export interface AiReviewTaskTerrorismResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别涉及令人不安全的信息的任务输入。
      */
    Input: AiReviewTerrorismTaskInput;
    /**
      * 智能识别涉及令人不安全的信息的任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiReviewTerrorismTaskOutput;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 智能识别 Asr 文字的嫌疑片段
 */
export interface MediaContentReviewAsrTextSegmentItem {
    /**
      * 嫌疑片段起始的偏移时间，单位：秒。
      */
    StartTimeOffset: number;
    /**
      * 嫌疑片段结束的偏移时间，单位：秒。
      */
    EndTimeOffset: number;
    /**
      * 嫌疑片段置信度。
      */
    Confidence: number;
    /**
      * 嫌疑片段智能识别的结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * 嫌疑关键词列表。
      */
    KeywordSet: Array<string>;
}
/**
 * DescribeEventConfig返回参数结构体
 */
export interface DescribeEventConfigResponse {
    /**
      * 接收事件通知的方式。"PUSH" 为 [HTTP 回调通知](https://cloud.tencent.com/document/product/266/7829#http.E5.9B.9E.E8.B0.83)，"PULL" 为 [基于消息队列的可靠通知](https://cloud.tencent.com/document/product/266/7829#.E5.9F.BA.E4.BA.8E.E6.B6.88.E6.81.AF.E9.98.9F.E5.88.97.E7.9A.84.E5.8F.AF.E9.9D.A0.E9.80.9A.E7.9F.A5)。
      */
    Mode: string;
    /**
      * 采用 [HTTP 回调通知](https://cloud.tencent.com/document/product/266/7829#http.E5.9B.9E.E8.B0.83) 接收方式时，用于接收 V3 版本事件通知的地址。
      */
    NotificationUrl: string;
    /**
      * 是否接收 [视频上传完成](https://cloud.tencent.com/document/product/266/7830) 事件通知，"OFF" 为忽略该事件通知，"ON" 为接收事件通知。
      */
    UploadMediaCompleteEventSwitch: string;
    /**
      * 是否接收 [视频删除完成](https://cloud.tencent.com/document/product/266/13434) 事件通知，"OFF" 为忽略该事件通知，"ON" 为接收事件通知。
      */
    DeleteMediaCompleteEventSwitch: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    TotalCount: number;
    /**
      * 海外CDN节点的日志下载列表。如果域名没有开启海外加速，忽略该参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OverseaCdnLogs: Array<CdnLogInfo>;
    /**
      * 国内CDN节点的日志下载列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomesticCdnLogs: Array<CdnLogInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 智能识别涉及令人不适宜信息的嫌疑片段
 */
export interface MediaContentReviewPoliticalSegmentItem {
    /**
      * 嫌疑片段起始的偏移时间，单位：秒。
      */
    StartTimeOffset: number;
    /**
      * 嫌疑片段结束的偏移时间，单位：秒。
      */
    EndTimeOffset: number;
    /**
      * 嫌疑片段分数。
      */
    Confidence: number;
    /**
      * 嫌疑片段涉及令人不适宜的信息的结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * 涉及令人不适宜的信息、违规图标名字。
      */
    Name: string;
    /**
      * 嫌疑片段涉及令人不适宜的信息的结果标签。智能识别模板[画面涉及令人不适宜的信息的任务控制参数](https://cloud.tencent.com/document/api/266/31773#PoliticalImgReviewTemplateInfo)里 LabelSet 参数与此参数取值范围的对应关系：
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
    Label: string;
    /**
      * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
      */
    Url: string;
    /**
      * 涉及令人不适宜的信息、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
      */
    AreaCoordSet: Array<number>;
    /**
      * 该字段已废弃，请使用 PicUrlExpireTime。
      */
    PicUrlExpireTimeStamp: number;
    /**
      * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    PicUrlExpireTime: string;
}
/**
 * DeletePersonSample返回参数结构体
 */
export interface DeletePersonSampleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyContentReviewTemplate请求参数结构体
 */
export interface ModifyContentReviewTemplateRequest {
    /**
      * 内容智能识别模板唯一标识。
      */
    Definition: number;
    /**
      * 内容智能识别模板名称，长度限制：64 个字符。
      */
    Name?: string;
    /**
      * 内容智能识别模板描述信息，长度限制：256 个字符。
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
      * 用户自定义内容智能识别控制参数。
      */
    UserDefineConfigure?: UserDefineConfigureInfoForUpdate;
    /**
      * 截帧间隔，单位为秒，最小值为 0.5 秒。
      */
    ScreenshotInterval?: number;
    /**
      * 智能识别结果是否进入智能识别墙（对智能识别结果进行人工识别）的开关。
<li>ON：是；</li>
<li>OFF：否。</li>
      */
    ReviewWallSwitch?: string;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * AttachMediaSubtitles返回参数结构体
 */
export interface AttachMediaSubtitlesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 智能识别任务类型
 */
export interface AiContentReviewTaskInput {
    /**
      * 智能识别模板 ID。
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
    Definition: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * AI 视频智能分析输入参数类型
 */
export interface AiAnalysisTaskInput {
    /**
      * 视频内容分析模板 ID。
      */
    Definition: number;
}
/**
 * 雪碧图模板详情
 */
export interface ImageSpriteTemplate {
    /**
      * 雪碧图模板唯一标识。
      */
    Definition: number;
    /**
      * 模板类型，取值范围：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
      */
    Type: string;
    /**
      * 雪碧图模板名称。
      */
    Name: string;
    /**
      * 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
默认值：0。
      */
    Width: number;
    /**
      * 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
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
      * 采样类型。
      */
    SampleType: string;
    /**
      * 采样间隔。
      */
    SampleInterval: number;
    /**
      * 雪碧图中小图的行数。
      */
    RowCount: number;
    /**
      * 雪碧图中小图的列数。
      */
    ColumnCount: number;
    /**
      * 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    CreateTime: string;
    /**
      * 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    UpdateTime: string;
    /**
      * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：
<li> stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；</li>
<li>black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。</li>
默认值：black 。
      */
    FillType: string;
    /**
      * 模板描述信息。
      */
    Comment: string;
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
    AreaCoordSet: Array<number>;
    /**
      * 识别文本。
      */
    Text: string;
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
 * ParseStreamingManifest返回参数结构体
 */
export interface ParseStreamingManifestResponse {
    /**
      * 分片文件列表。
      */
    MediaSegmentSet?: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Ocr 文字涉及令人反感的信息
 */
export interface AiReviewPornOcrTaskOutput {
    /**
      * Ocr 文字涉及令人反感的信息的评分，分值为0到100。
      */
    Confidence: number;
    /**
      * Ocr 文字涉及令人反感的信息的结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * Ocr 文字有涉及令人反感的信息的嫌疑的视频片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<MediaContentReviewOcrTextSegmentItem>;
    /**
      * Ocr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * Ocr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    SegmentSetFileUrlExpireTime: string;
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
    /**
      * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Name: string;
    /**
      * 媒体文件描述。
      */
    Description: string;
    /**
      * 媒体文件的创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    CreateTime: string;
    /**
      * 媒体文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    UpdateTime: string;
    /**
      * 媒体文件的过期时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。“9999-12-31T23:59:59Z”表示永不过期。
      */
    ExpireTime: string;
    /**
      * 媒体文件的分类 ID。
      */
    ClassId: number;
    /**
      * 媒体文件的分类名称。
      */
    ClassName: string;
    /**
      * 媒体文件的分类路径，分类间以“-”分隔，如“新的一级分类 - 新的二级分类”。
      */
    ClassPath: string;
    /**
      * 媒体文件的封面图片地址。
      */
    CoverUrl: string;
    /**
      * 媒体文件的封装格式，例如 mp4、flv 等。
      */
    Type: string;
    /**
      * 原始媒体文件的 URL 地址。
      */
    MediaUrl: string;
    /**
      * 该媒体文件的来源信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SourceInfo: MediaSourceData;
    /**
      * 媒体文件存储地区，如 ap-chongqing，参见[地域列表](https://cloud.tencent.com/document/product/266/9760#.E5.B7.B2.E6.94.AF.E6.8C.81.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)。
      */
    StorageRegion: string;
    /**
      * 媒体文件的标签信息。
      */
    TagSet: Array<string>;
    /**
      * 直播录制文件的唯一标识。
      */
    Vid: string;
    /**
      * 文件类型：
<li>Video: 视频文件</li>
<li>Audio: 音频文件</li>
<li>Image: 图片文件</li>
      */
    Category: string;
    /**
      * 文件状态：Normal：正常，Forbidden：封禁。

*注意：此字段暂不支持。
      */
    Status: string;
    /**
      * 媒体文件的存储类别：
<li> STANDARD：标准存储。</li>
<li> STANDARD_IA：低频存储。</li>
<li> ARCHIVE：归档存储。</li>
<li> DEEP_ARCHIVE：深度归档存储。</li>
      */
    StorageClass: string;
}
/**
 * 智能识别 Asr 文字涉及令人不适宜的信息、违规任务输入参数类型
 */
export interface AiReviewPoliticalAsrTaskInput {
    /**
      * 鉴别涉及令人不适宜信息的模板 ID。
      */
    Definition: number;
}
/**
 * PullUpload请求参数结构体
 */
export interface PullUploadRequest {
    /**
      * 要拉取的媒体 URL，暂不支持拉取 Dash 格式（可以支持 HLS）。
支持的扩展名详见[媒体类型](https://cloud.tencent.com/document/product/266/9760#.E5.AA.92.E4.BD.93.E7.B1.BB.E5.9E.8B)。
      */
    MediaUrl: string;
    /**
      * 媒体名称。
      */
    MediaName?: string;
    /**
      * 要拉取的视频封面 URL。仅支持 gif、jpeg、png 三种图片格式。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
    /**
      * 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。
      */
    SourceContext?: string;
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
    Definition: string;
    /**
      * 封装格式，取值：mp4、flv、hls、mp3、flac、ogg。
      */
    Container: string;
    /**
      * 转码模板名称。
      */
    Name: string;
    /**
      * 模板描述信息。
      */
    Comment: string;
    /**
      * 模板类型，取值：
<li>Preset：系统预置模板；</li>
<li>Custom：用户自定义模板。</li>
      */
    Type: string;
    /**
      * 是否去除视频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
      */
    RemoveVideo: number;
    /**
      * 是否去除音频数据，取值：
<li>0：保留；</li>
<li>1：去除。</li>
      */
    RemoveAudio: number;
    /**
      * 视频流配置参数，仅当 RemoveVideo 为 0，该字段有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    VideoTemplate: VideoTemplateInfo;
    /**
      * 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AudioTemplate: AudioTemplateInfo;
    /**
      * 极速高清转码参数。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TEHDConfig: TEHDConfig;
    /**
      * 封装格式过滤条件，可选值：
<li>Video：视频格式，可以同时包含视频流和音频流的封装格式；</li>
<li>PureAudio：纯音频格式，只能包含音频流的封装格式板。</li>
      */
    ContainerType: string;
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
    /**
      * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
当该字段为1时，表示以管理员身份查询所有子应用（含主应用）的用量合计，此时时间粒度只支持天粒度。
      */
    SubAppId?: number;
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * 智能识别 Asr 文字涉及令人不适宜信息、违规任务结果类型
 */
export interface AiReviewTaskPoliticalAsrResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别 Asr 文字涉及令人不适宜信息的任务输入。
      */
    Input: AiReviewPoliticalAsrTaskInput;
    /**
      * 智能识别 Asr 文字涉及令人不适宜信息的任务输出。
      */
    Output: AiReviewPoliticalAsrTaskOutput;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
 * 智能识别 Asr 文字鉴违禁任务输入参数类型
 */
export interface AiReviewProhibitedAsrTaskInput {
    /**
      * 鉴违禁模板 ID。
      */
    Definition: number;
}
/**
 * 智能识别涉及令人反感的信息、涉及令人不安全的信息的嫌疑片段
 */
export interface MediaContentReviewSegmentItem {
    /**
      * 嫌疑片段起始的偏移时间，单位：秒。
      */
    StartTimeOffset: number;
    /**
      * 嫌疑片段结束的偏移时间，单位：秒。
      */
    EndTimeOffset: number;
    /**
      * 嫌疑片段涉及令人反感的信息的分数。
      */
    Confidence: number;
    /**
      * 嫌疑片段涉及令人反感的信息的结果标签。
      */
    Label: string;
    /**
      * 嫌疑片段鉴别涉及令人反感的信息的结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * 嫌疑图片 URL （图片不会永久存储，到达
 PicUrlExpireTime 时间点后图片将被删除）。
      */
    Url: string;
    /**
      * 该字段已废弃，请使用 PicUrlExpireTime。
      */
    PicUrlExpireTimeStamp: number;
    /**
      * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    PicUrlExpireTime: string;
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * 智能识别涉及令人反感的信息的任务结果类型
 */
export interface AiReviewTaskPornResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别涉及令人反感的信息的任务输入。
      */
    Input: AiReviewPornTaskInput;
    /**
      * 智能识别涉及令人反感的信息的任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiReviewPornTaskOutput;
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
      * 统计时间粒度，有效值：
<li>Hour：以小时为粒度。</li>
<li>Day：以天为粒度。</li>
默认按时间跨度决定，小于1天以小时为粒度，大于等于1天则以天为粒度。
      */
    Interval?: string;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * Asr 文字涉违禁信息
 */
export interface AiReviewProhibitedAsrTaskOutput {
    /**
      * Asr 文字涉违禁评分，分值为0到100。
      */
    Confidence: number;
    /**
      * Asr 文字涉违禁结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * Asr 文字有涉违禁嫌疑的视频片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<MediaContentReviewAsrTextSegmentItem>;
    /**
      * Asr 文字有涉违禁嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * Asr 文字有涉违禁嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    SegmentSetFileUrlExpireTime: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteSuperPlayerConfig返回参数结构体
 */
export interface DeleteSuperPlayerConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSampleSnapshotTemplates请求参数结构体
 */
export interface DescribeSampleSnapshotTemplatesRequest {
    /**
      * 采样截图模板唯一标识过滤条件，数组长度限制：100。
      */
    Definitions?: Array<number>;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 智能分类任务输入。
      */
    Input: AiAnalysisTaskClassificationInput;
    /**
      * 智能分类任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiAnalysisTaskClassificationOutput;
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
      * 画面鉴别涉及令人不适宜的信息的过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则智能识别结果全部返回，可选值为：
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * 用户自定义文本智能识别任务控制参数
 */
export interface UserDefineOcrTextReviewTemplateInfo {
    /**
      * 用户自定文本智能识别任务开关，可选值：
<li>ON：开启自定义文本智能识别任务；</li>
<li>OFF：关闭自定义文本智能识别任务。</li>
      */
    Switch: string;
    /**
      * 用户自定义文本过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则智能识别结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
      */
    LabelSet?: Array<string>;
    /**
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
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
    TotalCount: number;
    /**
      * 域名信息列表。
      */
    DomainSet: Array<DomainDetailInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * ModifyAIRecognitionTemplate请求参数结构体
 */
export interface ModifyAIRecognitionTemplateRequest {
    /**
      * 视频内容识别模板唯一标识。
      */
    Definition: number;
    /**
      * 视频内容识别模板名称，长度限制：64 个字符。
      */
    Name?: string;
    /**
      * 视频内容识别模板描述信息，长度限制：256 个字符。
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
      */
    AsrFullTextConfigure?: AsrFullTextConfigureInfoForUpdate;
    /**
      * 语音关键词识别控制参数。
      */
    AsrWordsConfigure?: AsrWordsConfigureInfoForUpdate;
    /**
      * 物体识别控制参数。
      */
    ObjectConfigure?: ObjectConfigureInfoForUpdate;
    /**
      * 截帧间隔，单位为秒，最小值为 0.5 秒。
      */
    ScreenshotInterval?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DescribeStorageRegions请求参数结构体
 */
export interface DescribeStorageRegionsRequest {
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * DescribeImageReviewUsageData返回参数结构体
 */
export interface DescribeImageReviewUsageDataResponse {
    /**
      * 图片智能识别次数统计数据，展示查询时间范围内的图片智能识别次数的概览数据。
      */
    ImageReviewUsageDataSet: Array<ImageReviewUsageDataItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Time: string;
    /**
      * 数据大小。
<li>存储空间的数据，单位是字节。</li>
<li>转码时长的数据，单位是秒。</li>
<li>流量数据，单位是字节。</li>
<li>带宽数据，单位是比特每秒。</li>
      */
    Value: number;
}
/**
 * CreateStorageRegion返回参数结构体
 */
export interface CreateStorageRegionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Area: string;
    /**
      * 腾讯禁用原因，可选值：
<li>ForLegalReasons：因法律原因导致关闭加速；</li>
<li>ForOverdueBills：因欠费停服导致关闭加速。</li>
      */
    TencentDisableReason: string;
    /**
      * 加速域名对应的 CNAME 域名。
      */
    TencentEdgeDomain: string;
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
<li>WebPageRecord：来自全景录制。</li>
<li>Unknown：未知来源。</li>
      */
    SourceType: string;
    /**
      * 用户创建文件时透传的字段
      */
    SourceContext: string;
}
/**
 * DescribePrepaidProducts返回参数结构体
 */
export interface DescribePrepaidProductsResponse {
    /**
      * 购买的预付费商品实例列表。
      */
    ProductInstanceSet: Array<ProductInstance>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * CreateAIAnalysisTemplate返回参数结构体
 */
export interface CreateAIAnalysisTemplateResponse {
    /**
      * 视频内容分析模板唯一标识。
      */
    Definition?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    EventHandle: string;
    /**
      * <b>支持事件类型：</b>
<li>NewFileUpload：视频上传完成；</li>
<li>ProcedureStateChanged：任务流状态变更；</li>
<li>FileDeleted：视频删除完成；</li>
<li>PullComplete：视频转拉完成；</li>
<li>EditMediaComplete：视频编辑完成；</li>
<li>SplitMediaComplete：视频拆分完成；</li>
<li>WechatPublishComplete：微信发布完成；</li>
<li>ComposeMediaComplete：制作媒体文件完成；</li>
<li>WechatMiniProgramPublishComplete：微信小程序发布完成。</li>
<b>兼容 2017 版的事件类型：</b>
<li>TranscodeComplete：视频转码完成；</li>
<li>ConcatComplete：视频拼接完成；</li>
<li>ClipComplete：视频剪辑完成；</li>
<li>CreateImageSpriteComplete：视频截取雪碧图完成；</li>
<li>CreateSnapshotByTimeOffsetComplete：视频按时间点截图完成。</li>
      */
    EventType: string;
    /**
      * 视频上传完成事件，当事件类型为 NewFileUpload 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileUploadEvent: FileUploadTask;
    /**
      * 任务流状态变更事件，当事件类型为 ProcedureStateChanged 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcedureStateChangeEvent: ProcedureTask;
    /**
      * 文件删除事件，当事件类型为 FileDeleted 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FileDeleteEvent: FileDeleteTask;
    /**
      * 视频转拉完成事件，当事件类型为 PullComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PullCompleteEvent: PullUploadTask;
    /**
      * 视频编辑完成事件，当事件类型为 EditMediaComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EditMediaCompleteEvent: EditMediaTask;
    /**
      * 视频拆条完成事件，当事件类型为 SplitMediaComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SplitMediaCompleteEvent: SplitMediaTask;
    /**
      * 制作媒体文件任务完成事件，当事件类型为 ComposeMediaComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ComposeMediaCompleteEvent: ComposeMediaTask;
    /**
      * 视频剪辑完成事件，当事件类型为 ClipComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClipCompleteEvent: ClipTask2017;
    /**
      * 视频转码完成事件，当事件类型为 TranscodeComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranscodeCompleteEvent: TranscodeTask2017;
    /**
      * 视频截取雪碧图完成事件，当事件类型为 CreateImageSpriteComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateImageSpriteCompleteEvent: CreateImageSpriteTask2017;
    /**
      * 视频拼接完成事件，当事件类型为 ConcatComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConcatCompleteEvent: ConcatTask2017;
    /**
      * 视频按时间点截图完成事件，当事件类型为 CreateSnapshotByTimeOffsetComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotByTimeOffsetCompleteEvent: SnapshotByTimeOffsetTask2017;
    /**
      * 微信发布完成事件，当事件类型为 WechatPublishComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    WechatPublishCompleteEvent: WechatPublishTask;
    /**
      * 微信小程序发布任务完成事件，当事件类型为 WechatMiniProgramPublishComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    WechatMiniProgramPublishCompleteEvent: WechatMiniProgramPublishTask;
    /**
      * 视频取回完成事件，当事件类型为RestoreMediaComplete 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RestoreMediaCompleteEvent: RestoreMediaTask;
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
 * 物体识别结果。
 */
export interface AiRecognitionTaskObjectResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 物体识别任务输入信息。
      */
    Input: AiRecognitionTaskObjectResultInput;
    /**
      * 物体识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiRecognitionTaskObjectResultOutput;
}
/**
 * 用户自定义智能识别任务控制参数。
 */
export interface UserDefineConfigureInfoForUpdate {
    /**
      * 用户自定义人物智能识别控制参数。
      */
    FaceReviewInfo?: UserDefineFaceReviewTemplateInfoForUpdate;
    /**
      * 用户自定义语音智能识别控制参数。
      */
    AsrReviewInfo?: UserDefineAsrTextReviewTemplateInfoForUpdate;
    /**
      * 用户自定义文本智能识别控制参数。
      */
    OcrReviewInfo?: UserDefineOcrTextReviewTemplateInfoForUpdate;
}
/**
 * Asr 文字涉及令人不适宜的信息
 */
export interface AiReviewPoliticalAsrTaskOutput {
    /**
      * Asr 文字涉及令人不适宜的信息、违规评分，分值为0到100。
      */
    Confidence: number;
    /**
      * Asr 文字涉及令人不适宜的信息、违规结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * Asr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<MediaContentReviewAsrTextSegmentItem>;
    /**
      * Asr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * Asr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    SegmentSetFileUrlExpireTime: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * DescribeMediaInfos请求参数结构体
 */
export interface DescribeMediaInfosRequest {
    /**
      * 媒体文件 ID 列表，N 从 0 开始取值，最大 19。
      */
    FileIds: Array<string>;
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
      * 点播[子应用](/document/product/266/14574) ID 。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DescribeDrmDataKey请求参数结构体
 */
export interface DescribeDrmDataKeyRequest {
    /**
      * 加密后的数据密钥列表，最大支持10个。
      */
    EdkList: Array<string>;
}
/**
 * 语音全文识别任务控制参数
 */
export interface AsrFullTextConfigureInfo {
    /**
      * 语音全文识别任务开关，可选值：
<li>ON：开启智能语音全文识别任务；</li>
<li>OFF：关闭智能语音全文识别任务。</li>
      */
    Switch: string;
    /**
      * 生成的字幕文件格式，不填或者填空字符串表示不生成字幕文件，可选值：
<li>vtt：生成 WebVTT 字幕文件。</li>
      */
    SubtitleFormat?: string;
}
/**
 * 图片画面智能识别涉及令人不安全的信息的任务结果类型
 */
export interface TerrorismImageResult {
    /**
      * 鉴别涉及令人不安全的信息的评分，分值为0到100。
      */
    Confidence: number;
    /**
      * 鉴别涉及令人不安全的信息的结果建议，取值范围：
<li>pass；</li>
<li>review；</li>
<li>block。</li>
      */
    Suggestion: string;
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
    Label: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * CreateAIRecognitionTemplate请求参数结构体
 */
export interface CreateAIRecognitionTemplateRequest {
    /**
      * 视频内容识别模板名称，长度限制：64 个字符。
      */
    Name?: string;
    /**
      * 视频内容识别模板描述信息，长度限制：256 个字符。
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
      */
    AsrFullTextConfigure?: AsrFullTextConfigureInfo;
    /**
      * 语音关键词识别控制参数。
      */
    AsrWordsConfigure?: AsrWordsConfigureInfo;
    /**
      * 物体识别控制参数。
      */
    ObjectConfigure?: ObjectConfigureInfo;
    /**
      * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
      */
    ScreenshotInterval?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 智能按帧标签任务输入。
      */
    Input: AiAnalysisTaskFrameTagInput;
    /**
      * 智能按帧标签任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiAnalysisTaskFrameTagOutput;
}
/**
 * 鉴别涉及令人反感的信息的结果信息
 */
export interface AiReviewPornTaskOutput {
    /**
      * 视频鉴别涉及令人反感的信息的评分，分值为0到100。
      */
    Confidence: number;
    /**
      * 鉴别涉及令人反感的信息的结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * 视频鉴别涉及令人反感的信息的结果标签，取值范围：
<li>porn：色情。</li>
<li>sexy：性感。</li>
<li>vulgar：低俗。</li>
<li>intimacy：亲密行为。</li>
      */
    Label: string;
    /**
      * 有涉及令人反感的信息的嫌疑的视频片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<MediaContentReviewSegmentItem>;
    /**
      * 涉及令人反感的信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * 涉及令人反感的信息的嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    SegmentSetFileUrlExpireTime: string;
}
/**
 * 语音全文识别结果。
 */
export interface AiRecognitionTaskAsrFullTextResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 语音全文识别任务输入信息。
      */
    Input: AiRecognitionTaskAsrFullTextResultInput;
    /**
      * 语音全文识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiRecognitionTaskAsrFullTextResultOutput;
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
 * 播放统计信息。
 */
export interface PlayStatInfo {
    /**
      * 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。
<li>表示小时级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日0点到1点的统计数据。</li>
<li>表示天级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日的统计数据。</li>
      */
    Time: string;
    /**
      * 媒体文件ID。
      */
    FileId: string;
    /**
      * 播放次数。
      */
    PlayTimes: number;
    /**
      * 播放流量，单位：字节。
      */
    Traffic: number;
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
      * 画面鉴别涉及令人不适宜的信息的过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则智能识别结果全部返回，可选值为：
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。
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
    Definition: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    AreaCoordSet: Array<number>;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
    Definition: number;
    /**
      * 打包格式，只能为 HLS。
      */
    Package: string;
    /**
      * 加密类型。
      */
    DrmType: string;
    /**
      * 播放地址。
      */
    Url: string;
    /**
      * 媒体文件大小，单位：字节。
<li>当媒体文件为 HLS 时，大小是 m3u8 和 ts 文件大小的总和；</li>
<li>当媒体文件为 DASH 时，大小是 mpd 和分片文件大小的总和；</li>
<li><font color=red>注意</font>：在 2022-01-10T16:00:00Z 前处理生成的自适应码流文件此字段为0。</li>
      */
    Size?: number;
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * DeleteClass返回参数结构体
 */
export interface DeleteClassResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyTranscodeTemplate返回参数结构体
 */
export interface ModifyTranscodeTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DescribeSubAppIds返回参数结构体
 */
export interface DescribeSubAppIdsResponse {
    /**
      * 子应用信息集合。
      */
    SubAppIdInfoSet: Array<SubAppIdInfo>;
    /**
      * 子应用总数量。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 点播文件信息
 */
export interface MediaInfo {
    /**
      * 基础信息。包括视频名称、分类、播放地址、封面图片等。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BasicInfo: MediaBasicInfo;
    /**
      * 元信息。包括大小、时长、视频流信息、音频流信息等。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetaData: MediaMetaData;
    /**
      * 转码结果信息。包括该视频转码生成的各种码率的视频的地址、规格、码率、分辨率等。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranscodeInfo: MediaTranscodeInfo;
    /**
      * 转动图结果信息。对视频转动图（如 gif）后，动图相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AnimatedGraphicsInfo: MediaAnimatedGraphicsInfo;
    /**
      * 采样截图信息。对视频采样截图后，相关截图信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SampleSnapshotInfo: MediaSampleSnapshotInfo;
    /**
      * 雪碧图信息。对视频截取雪碧图之后，雪碧的相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageSpriteInfo: MediaImageSpriteInfo;
    /**
      * 指定时间点截图信息。对视频依照指定时间点截图后，各个截图的信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotByTimeOffsetInfo: MediaSnapshotByTimeOffsetInfo;
    /**
      * 视频打点信息。对视频设置的各个打点信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    KeyFrameDescInfo: MediaKeyFrameDescInfo;
    /**
      * 转自适应码流信息。包括规格、加密类型、打包格式等相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdaptiveDynamicStreamingInfo: MediaAdaptiveDynamicStreamingInfo;
    /**
      * 小程序审核信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MiniProgramReviewInfo: MediaMiniProgramReviewInfo;
    /**
      * 字幕信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubtitleInfo: MediaSubtitleInfo;
    /**
      * 媒体文件唯一标识 ID。
      */
    FileId: string;
}
/**
 * 视频流配置参数
 */
export interface VideoTemplateInfoForUpdate {
    /**
      * 视频流的编码格式，可选值：
<li>libx264：H.264 编码</li>
<li>libx265：H.265 编码</li>
<li>av1：AOMedia Video 1 编码</li>
目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。av1 编码容器目前只支持 mp4 。
      */
    Codec?: string;
    /**
      * 视频帧率，取值范围：[0, 100]，单位：Hz。
当取值为 0，表示帧率和原始视频保持一致。
      */
    Fps?: number;
    /**
      * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。
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
      * 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
<li>当 Width、Height 均为 0，则分辨率同源；</li>
<li>当 Width 为 0，Height 非 0，则 Width 按比例缩放；</li>
<li>当 Width 非 0，Height 为 0，则 Height 按比例缩放；</li>
<li>当 Width、Height 均非 0，则分辨率按用户指定。</li>
      */
    Width?: number;
    /**
      * 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。
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
      * 视频恒定码率控制因子。取值范围为[0, 51]，填0表示禁用该参数。
如果没有特殊需求，不建议指定该参数。
      */
    Vcrf?: number;
    /**
      * 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。
当填 0 或不填时，系统将自动设置 gop 长度。
      */
    Gop?: number;
}
/**
 * CreateContentReviewTemplate请求参数结构体
 */
export interface CreateContentReviewTemplateRequest {
    /**
      * 智能识别结果是否进入智能识别墙（对识别结果进行人工复核）的开关。
<li>ON：是；</li>
<li>OFF：否。</li>
      */
    ReviewWallSwitch: string;
    /**
      * 内容智能识别模板名称，长度限制：64 个字符。
      */
    Name?: string;
    /**
      * 内容智能识别模板描述信息，长度限制：256 个字符。
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
      * 用户自定义内容智能识别控制参数。
      */
    UserDefineConfigure?: UserDefineConfigureInfo;
    /**
      * 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。
      */
    ScreenshotInterval?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DescribeContentReviewTemplates请求参数结构体
 */
export interface DescribeContentReviewTemplatesRequest {
    /**
      * 内容智能识别模板唯一标识过滤条件，数组长度限制：100。
      */
    Definitions?: Array<number>;
    /**
      * 分页偏移量，默认值：0。
      */
    Offset?: number;
    /**
      * 返回记录条数，默认值：10，最大值：100。
      */
    Limit?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 单个图片处理操作。
 */
export interface ImageOperation {
    /**
      * 图片处理类型。可选类型有：
<li>Scale : 图片缩略处理。</li>
<li>CenterCut : 图片裁剪处理。</li>
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
    /**
      * 任务类型，取值：
<li>Procedure：视频处理任务；</li>
<li>EditMedia：视频编辑任务；</li>
<li>SplitMedia：视频拆条任务；</li>
<li>ComposeMedia：制作媒体文件任务；</li>
<li>WechatPublish：微信发布任务；</li>
<li>WechatMiniProgramPublish：微信小程序视频发布任务；</li>
<li>PullUpload：拉取上传媒体文件任务。</li>
<li>FastClipMedia：快速剪辑任务。</li>

兼容 2017 版的任务类型：
<li>Transcode：视频转码任务；</li>
<li>SnapshotByTimeOffset：视频截图任务；</li>
<li>Concat：视频拼接任务；</li>
<li>Clip：视频剪辑任务；</li>
<li>ImageSprites：截取雪碧图任务。</li>
      */
    TaskType: string;
    /**
      * 任务状态，取值：
<li>WAITING：等待中；</li>
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
      */
    Status: string;
    /**
      * 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    CreateTime: string;
    /**
      * 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    BeginProcessTime: string;
    /**
      * 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    FinishTime: string;
    /**
      * 视频处理任务信息，仅当 TaskType 为 Procedure，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProcedureTask: ProcedureTask;
    /**
      * 视频编辑任务信息，仅当 TaskType 为 EditMedia，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    EditMediaTask: EditMediaTask;
    /**
      * 微信发布任务信息，仅当 TaskType 为 WechatPublish，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    WechatPublishTask: WechatPublishTask;
    /**
      * 制作媒体文件任务信息，仅当 TaskType 为 ComposeMedia，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ComposeMediaTask: ComposeMediaTask;
    /**
      * 视频拆条任务信息，仅当 TaskType 为 SplitMedia，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SplitMediaTask: SplitMediaTask;
    /**
      * 微信小程序发布任务信息，仅当 TaskType 为 WechatMiniProgramPublish，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    WechatMiniProgramPublishTask: WechatMiniProgramPublishTask;
    /**
      * 拉取上传媒体文件任务信息，仅当 TaskType 为 PullUpload，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PullUploadTask: PullUploadTask;
    /**
      * 视频转码任务信息，仅当 TaskType 为 Transcode，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TranscodeTask: TranscodeTask2017;
    /**
      * 视频拼接任务信息，仅当 TaskType 为 Concat，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConcatTask: ConcatTask2017;
    /**
      * 视频剪辑任务信息，仅当 TaskType 为 Clip，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClipTask: ClipTask2017;
    /**
      * 截取雪碧图任务信息，仅当 TaskType 为 ImageSprite，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateImageSpriteTask: CreateImageSpriteTask2017;
    /**
      * 视频指定时间点截图任务信息，仅当 TaskType 为 SnapshotByTimeOffset，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotByTimeOffsetTask: SnapshotByTimeOffsetTask2017;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
 * 用户自定义人物智能识别任务控制参数。
 */
export interface UserDefineFaceReviewTemplateInfoForUpdate {
    /**
      * 用户自定义人物智能识别任务开关，可选值：
<li>ON：开启自定义人物智能识别任务；</li>
<li>OFF：关闭自定义人物智能识别任务。</li>
      */
    Switch?: string;
    /**
      * 用户自定义人物过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则智能识别结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
      */
    LabelSet?: Array<string>;
    /**
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * CreateProcedureTemplate返回参数结构体
 */
export interface CreateProcedureTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
}
/**
 * DescribeMediaProcessUsageData返回参数结构体
 */
export interface DescribeMediaProcessUsageDataResponse {
    /**
      * 视频处理统计数据概览，展示所查询任务的概览以及详细数据。
      */
    MediaProcessDataSet: Array<TaskStatData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSuperPlayerConfigs请求参数结构体
 */
export interface DescribeSuperPlayerConfigsRequest {
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyVodDomainAccelerateConfig返回参数结构体
 */
export interface ModifyVodDomainAccelerateConfigResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
    /**
      * 任务概要列表。
      */
    TaskSet: Array<TaskSimpleInfo>;
    /**
      * 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空，说明已无更多数据。
      */
    ScrollToken: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSubAppIds请求参数结构体
 */
export interface DescribeSubAppIdsRequest {
    /**
      * 子应用名称。
      */
    Name?: string;
    /**
      * 标签信息，查询指定标签的子应用列表。
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
 * 涉及令人不适宜的信息
 */
export interface AiReviewPoliticalTaskOutput {
    /**
      * 视频涉及令人不适宜信息的评分，分值为0到100。
      */
    Confidence: number;
    /**
      * 涉及令人不适宜信息的结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * 视频涉及令人不适宜信息的结果标签。智能识别模板[画面鉴政任务控制参数](https://cloud.tencent.com/document/api/266/31773#PoliticalImgReviewTemplateInfo)里 LabelSet 参数与此参数取值范围的对应关系：
violation_photo：
<li>violation_photo：违规图标。</li>
其他（即 politician/entertainment/sport/entrepreneur/scholar/celebrity/military）：
<li>politician：相关人物。</li>
      */
    Label: string;
    /**
      * 有涉及令人不适宜信息嫌疑的视频片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<MediaContentReviewPoliticalSegmentItem>;
    /**
      * 有涉及令人不适宜的信息嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * 有涉及令人不适宜的信息嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    SegmentSetFileUrlExpireTime: string;
}
/**
 * 智能识别涉及令人不适宜信息的任务结果类型
 */
export interface AiReviewTaskPoliticalResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别涉及令人不适宜信息的任务输入。
      */
    Input: AiReviewPoliticalTaskInput;
    /**
      * 智能识别涉及令人不适宜信息的任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiReviewPoliticalTaskOutput;
}
/**
 * ReviewImage返回参数结构体
 */
export interface ReviewImageResponse {
    /**
      * 图片智能识别任务结果。
      */
    ReviewResultSet: Array<ContentReviewResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * 视频处理任务信息
 */
export interface ProcedureTask {
    /**
      * 视频处理任务 ID。
      */
    TaskId: string;
    /**
      * 任务流状态，取值：
<li>PROCESSING：处理中；</li>
<li>FINISH：已完成。</li>
      */
    Status: string;
    /**
      * 已弃用，请使用各个具体任务的 ErrCode。
      */
    ErrCode: number;
    /**
      * 已弃用，请使用各个具体任务的 Message。
      */
    Message: string;
    /**
      * 媒体文件 ID
<li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 FileId；</li>
<li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Id。</li>
      */
    FileId: string;
    /**
      * 媒体文件名称
<li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 BasicInfo.Name；</li>
<li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Name。</li>
      */
    FileName: string;
    /**
      * 媒体文件地址
<li>若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773#MediaInfo) 的 BasicInfo.MediaUrl；</li>
<li>若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773#MediaInputInfo) 的 Url。</li>
      */
    FileUrl: string;
    /**
      * 原始视频的元信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetaData: MediaMetaData;
    /**
      * 视频处理任务的执行状态与结果。
      */
    MediaProcessResultSet: Array<MediaProcessTaskResult>;
    /**
      * 视频智能识别任务的执行状态与结果。
      */
    AiContentReviewResultSet: Array<AiContentReviewResult>;
    /**
      * 视频内容分析任务的执行状态与结果。
      */
    AiAnalysisResultSet: Array<AiAnalysisResult>;
    /**
      * 视频内容识别任务的执行状态与结果。
      */
    AiRecognitionResultSet: Array<AiRecognitionResult>;
    /**
      * 任务流的优先级，取值范围为 [-10, 10]。
      */
    TasksPriority: number;
    /**
      * 任务流状态变更通知模式。
<li>Finish：只有当任务流全部执行完毕时，才发起一次事件通知；</li>
<li>Change：只要任务流中每个子任务的状态发生变化，都进行事件通知；</li>
<li>None：不接受该任务流回调。</li>
      */
    TasksNotifyMode: string;
    /**
      * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
      */
    SessionContext: string;
    /**
      * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
      */
    SessionId: string;
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
      * 播放器对不于不同分辨率的子流展示名字。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 任务概要信息
 */
export interface TaskSimpleInfo {
    /**
      * 任务 ID。
      */
    TaskId: string;
    /**
      * 任务状态。取值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）。
      */
    Status: string;
    /**
      * 视频 ID。
      */
    FileId: string;
    /**
      * 任务类型，取值：
<li>Procedure：视频处理任务；</li>
<li>EditMedia：视频编辑任务</li>
<li>WechatDistribute：微信发布任务。</li>
兼容 2017 版的任务类型：
<li>Transcode：视频转码任务；</li>
<li>SnapshotByTimeOffset：视频截图任务；</li>
<li>Concat：视频拼接任务；</li>
<li>Clip：视频剪辑任务；</li>
<li>ImageSprites：截取雪碧图任务。</li>
      */
    TaskType: string;
    /**
      * 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    CreateTime: string;
    /**
      * 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。若任务尚未开始，该字段为空。
      */
    BeginProcessTime: string;
    /**
      * 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。若任务尚未完成，该字段为空。
      */
    FinishTime: string;
    /**
      * 用于去重的识别码，如果七天内曾有过相同的识别码的请求。
      */
    SessionId: string;
    /**
      * 来源上下文，用于透传用户请求信息。
      */
    SessionContext: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 点播文件视频流信息
 */
export interface MediaVideoStreamItem {
    /**
      * 视频流的码率，单位：bps。
      */
    Bitrate: number;
    /**
      * 视频流的高度，单位：px。
      */
    Height: number;
    /**
      * 视频流的宽度，单位：px。
      */
    Width: number;
    /**
      * 视频流的编码格式，例如 h264。
      */
    Codec: string;
    /**
      * 帧率，单位：hz。
      */
    Fps: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * DescribeVodDomains请求参数结构体
 */
export interface DescribeVodDomainsRequest {
    /**
      * 域名列表。当该字段不填时，则默认列出所有域名信息。本字段字段限制如下：
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    Definition: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 视频内容分析模板名称，长度限制：64 个字符。
      */
    Name?: string;
    /**
      * 视频内容分析模板描述信息，长度限制：256 个字符。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 智能识别涉及令人不安全的信息的任务输入参数类型
 */
export interface AiReviewTerrorismTaskInput {
    /**
      * 鉴别涉及令人不安全的信息的模板 ID。
      */
    Definition: number;
}
/**
 * 点播文件音频流信息
 */
export interface MediaAudioStreamItem {
    /**
      * 音频流的码率，单位：bps。
      */
    Bitrate: number;
    /**
      * 音频流的采样率，单位：hz。
      */
    SamplingRate: number;
    /**
      * 音频流的编码格式，例如 aac。
      */
    Codec: string;
}
/**
 * 子应用信息。
 */
export interface SubAppIdInfo {
    /**
      * 子应用 ID。
      */
    SubAppId: number;
    /**
      * 子应用名称。
      */
    Name: string;
    /**
      * 子应用简介。
      */
    Description: string;
    /**
      * 子应用创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    CreateTime: string;
    /**
      * 子应用状态，有效值：
<li>On：启用；</li>
<li>Off：停用。</li>
<li>Destroying：销毁中。</li>
<li>Destroyed：销毁完成。</li>
      */
    Status: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 智能识别 Ocr 文字鉴违禁任务输入参数类型
 */
export interface AiReviewProhibitedOcrTaskInput {
    /**
      * 鉴违禁模板 ID。
      */
    Definition: number;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DeleteVodDomain返回参数结构体
 */
export interface DeleteVodDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
      * 视频内容分析模板唯一标识。
      */
    Definition: number;
    /**
      * 视频内容分析模板名称，长度限制：64 个字符。
      */
    Name?: string;
    /**
      * 视频内容分析模板描述信息，长度限制：256 个字符。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
注意：此字段可能返回 null，表示取不到有效值。
      */
    MediaUrl?: string;
    /**
      * 媒体封面地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CoverUrl?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyWordSample返回参数结构体
 */
export interface ModifyWordSampleResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 智能识别结果
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
    Type: string;
    /**
      * 视频智能识别任务（画面涉及令人反感的信息）的查询结果，当任务类型为 Porn 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PornTask: AiReviewTaskPornResult;
    /**
      * 视频智能识别任务（画面涉及令人不安全的信息）的查询结果，当任务类型为 Terrorism 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TerrorismTask: AiReviewTaskTerrorismResult;
    /**
      * 视频智能识别任务（画面涉及令人不适宜的信息）的查询结果，当任务类型为 Political 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PoliticalTask: AiReviewTaskPoliticalResult;
    /**
      * 视频智能识别任务（Asr 文字涉及令人反感的信息）的查询结果，当任务类型为 Porn.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PornAsrTask: AiReviewTaskPornAsrResult;
    /**
      * 视频智能识别任务（Ocr 文字涉及令人反感的信息）的查询结果，当任务类型为 Porn.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PornOcrTask: AiReviewTaskPornOcrResult;
    /**
      * 视频智能识别任务（Asr 文字涉及令人不适宜的信息）的查询结果，当任务类型为 Political.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PoliticalAsrTask: AiReviewTaskPoliticalAsrResult;
    /**
      * 视频智能识别任务（Ocr 文字涉及令人不适宜的信息）的查询结果，当任务类型为 Political.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PoliticalOcrTask: AiReviewTaskPoliticalOcrResult;
    /**
      * 视频智能识别任务（ Ocr 文字涉及令人不安全的信息）的查询结果，当任务类型为 Terrorism.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TerrorismOcrTask: AiReviewTaskTerrorismOcrResult;
    /**
      * 视频智能识别 Ocr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Ocr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProhibitedOcrTask: AiReviewTaskProhibitedOcrResult;
    /**
      * 视频智能识别 Asr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Asr 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProhibitedAsrTask: AiReviewTaskProhibitedAsrResult;
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
      * 画面鉴别涉及令人不安全的信息的过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则智能识别结果全部返回，可选值为：
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
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 80 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
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
 * DeleteClass请求参数结构体
 */
export interface DeleteClassRequest {
    /**
      * 分类 ID
      */
    ClassId: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DescribeTranscodeTemplates请求参数结构体
 */
export interface DescribeTranscodeTemplatesRequest {
    /**
      * 转码模板唯一标识过滤条件，数组长度限制：100。
      */
    Definitions?: Array<number>;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 用户自定义语音智能识别任务控制参数
 */
export interface UserDefineAsrTextReviewTemplateInfoForUpdate {
    /**
      * 用户自定语音智能识别任务开关，可选值：
<li>ON：开启自定义语音智能识别任务；</li>
<li>OFF：关闭自定义语音智能识别任务。</li>
      */
    Switch?: string;
    /**
      * 用户自定义语音过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则智能识别结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。
标签个数最多 10 个，每个标签长度最多 16 个字符。
      */
    LabelSet?: Array<string>;
    /**
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核。取值范围：0~100。
      */
    ReviewConfidence?: number;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    TaskId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * ConfirmEvents返回参数结构体
 */
export interface ConfirmEventsResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 对图像进行的操作，如图像旋转等。
      */
    ImageOperations?: Array<ImageTransform>;
    /**
      * 对音频进行操作，如静音等。
      */
    AudioOperations?: Array<AudioTransform>;
}
/**
 * DeleteTranscodeTemplate返回参数结构体
 */
export interface DeleteTranscodeTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
    /**
      * 媒体文件总大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
      */
    Size: number;
    /**
      * 视频时长，单位：秒。
      */
    Duration: number;
    /**
      * 容器类型，例如 m4a，mp4 等。
      */
    Container: string;
    /**
      * 视频的 md5 值。
      */
    Md5: string;
    /**
      * 音频流信息。
      */
    AudioStreamSet: Array<MediaAudioStreamItem>;
    /**
      * 视频流信息。
      */
    VideoStreamSet: Array<MediaVideoStreamItem>;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
    AreaCoordSet: Array<number>;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * DescribeAIAnalysisTemplates返回参数结构体
 */
export interface DescribeAIAnalysisTemplatesResponse {
    /**
      * 符合过滤条件的记录总数。
      */
    TotalCount?: number;
    /**
      * 视频内容分析模板详情列表。
      */
    AIAnalysisTemplateSet?: Array<AIAnalysisTemplateItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateSnapshotByTimeOffsetTemplate请求参数结构体
 */
export interface CreateSnapshotByTimeOffsetTemplateRequest {
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * 语音关键词识别结果。
 */
export interface AiRecognitionTaskAsrWordsResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 语音关键词识别任务输入信息。
      */
    Input: AiRecognitionTaskAsrWordsResultInput;
    /**
      * 语音关键词识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiRecognitionTaskAsrWordsResultOutput;
}
/**
 * CreateSubAppId请求参数结构体
 */
export interface CreateSubAppIdRequest {
    /**
      * 子应用名称，长度限制：40个字符。
      */
    Name: string;
    /**
      * 子应用简介，长度限制： 300个字符。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SearchMedia请求参数结构体
 */
export interface SearchMediaRequest {
    /**
      * 文件 ID 集合，匹配集合中的任意元素。
<li>数组长度限制：10。</li>
<li>单个 ID 长度限制：40个字符。</li>
      */
    FileIds?: Array<string>;
    /**
      * 文件名集合，模糊匹配媒体文件的文件名，匹配度越高，排序越优先。
<li>单个文件名长度限制：40个字符。</li>
<li>数组长度限制：10。</li>
      */
    Names?: Array<string>;
    /**
      * 文件名前缀，前缀匹配媒体文件的文件名。
<li>单个文件名前缀长度限制：20个字符。</li>
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
    ClassIds?: Array<number>;
    /**
      * 标签集合，匹配集合中任意元素。
<li>单个标签长度限制：8个字符。</li>
<li>数组长度限制：10。</li>
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
      * 直播录制文件的唯一标识。匹配集合中的任意元素。
<li>数组长度限制：10。</li>
      */
    Vids?: Array<string>;
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
      * 媒体文件存储地区，如 ap-chongqing，参见[地域列表](https://cloud.tencent.com/document/product/266/9760#.E5.B7.B2.E6.94.AF.E6.8C.81.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8)。
<li>单个存储地区长度限制：20个字符。</li>
<li>数组长度限制：20。</li>
      */
    StorageRegions?: Array<string>;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
    /**
      * 存储类型数组。可选值有：
<li> STANDARD：标准存储。</li>
<li> STANDARD_IA：低频存储。</li>
<li> ARCHIVE：归档存储。</li>
<li> DEEP_ARCHIVE：深度归档存储。</li>
      */
    StorageClasses?: Array<string>;
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
      * （不推荐：应使用 Vids 替代）
直播录制文件的唯一标识。
      */
    Vid?: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
 * 智能识别 Ocr 文字的嫌疑片段
 */
export interface MediaContentReviewOcrTextSegmentItem {
    /**
      * 嫌疑片段起始的偏移时间，单位：秒。
      */
    StartTimeOffset: number;
    /**
      * 嫌疑片段结束的偏移时间，单位：秒。
      */
    EndTimeOffset: number;
    /**
      * 嫌疑片段置信度。
      */
    Confidence: number;
    /**
      * 嫌疑片段智能识别的结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * 嫌疑关键词列表。
      */
    KeywordSet: Array<string>;
    /**
      * 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
      */
    AreaCoordSet: Array<number>;
    /**
      * 嫌疑图片 URL （图片不会永久存储，到达
PicUrlExpireTime 时间点后图片将被删除）。
      */
    Url: string;
    /**
      * 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    PicUrlExpireTime: string;
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
 * 智能识别 Asr 文字涉及令人反感的信息的任务结果类型
 */
export interface AiReviewTaskPornAsrResult {
    /**
      * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
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
      * 智能识别 Asr 文字涉及令人反感的信息的任务输入。
      */
    Input: AiReviewPornAsrTaskInput;
    /**
      * 智能识别 Asr 文字涉及令人反感的信息的任务输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiReviewPornAsrTaskOutput;
}
/**
 * ModifyClass返回参数结构体
 */
export interface ModifyClassResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 视频剪辑的起始偏移时间偏移，单位：秒。
      */
    StartTimeOffset?: number;
    /**
      * 视频剪辑的起始结束时间偏移，单位：秒。
      */
    EndTimeOffset?: number;
}
/**
 * ProcessMediaByProcedure返回参数结构体
 */
export interface ProcessMediaByProcedureResponse {
    /**
      * 任务 ID。
      */
    TaskId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 画面鉴别涉及令人反感的信息的过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则智能识别结果全部返回，可选值为：
<li>porn：色情；</li>
<li>vulgar：低俗；</li>
<li>intimacy：亲密行为；</li>
<li>sexy：性感。</li>
      */
    LabelSet?: Array<string>;
    /**
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * 编辑视频任务信息
 */
export interface EditMediaTask {
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
      * 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368#.E8.A7.86.E9.A2.91.E5.A4.84.E7.90.86.E7.B1.BB.E9.94.99.E8.AF.AF.E7.A0.81) 列表。
      */
    ErrCodeExt: string;
    /**
      * 错误信息。
      */
    Message: string;
    /**
      * 编辑视频任务进度，取值范围 [0-100] 。
      */
    Progress: number;
    /**
      * 视频编辑任务的输入。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Input: EditMediaTaskInput;
    /**
      * 视频编辑任务的输出。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: EditMediaTaskOutput;
    /**
      * 输出视频的元信息。
      */
    MetaData: MediaMetaData;
    /**
      * 若发起视频编辑任务时指定了视频处理流程，则该字段为流程任务 ID。
      */
    ProcedureTaskId: string;
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
      * 画面鉴别涉及令人反感的信息的过滤标签，智能识别结果包含选择的标签则返回结果，如果过滤标签为空，则智能识别结果全部返回，可选值为：
<li>porn：色情；</li>
<li>vulgar：低俗；</li>
<li>intimacy：亲密行为；</li>
<li>sexy：性感。</li>
      */
    LabelSet?: Array<string>;
    /**
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。
      */
    BlockConfidence?: number;
    /**
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 0 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
}
/**
 * Ocr 文字涉及令人不适宜的信息
 */
export interface AiReviewPoliticalOcrTaskOutput {
    /**
      * Ocr 文字涉及令人不适宜的信息、违规评分，分值为0到100。
      */
    Confidence: number;
    /**
      * Ocr 文字涉及令人不适宜的信息、违规结果建议，取值范围：
<li>pass。</li>
<li>review。</li>
<li>block。</li>
      */
    Suggestion: string;
    /**
      * Ocr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表。
<font color=red>注意</font> ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。
      */
    SegmentSet: Array<MediaContentReviewOcrTextSegmentItem>;
    /**
      * Ocr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。
      */
    SegmentSetFileUrl: string;
    /**
      * Ocr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL 失效时间，使用  [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732#I)。
      */
    SegmentSetFileUrlExpireTime: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
 * 分类信息描述
 */
export interface MediaClassInfo {
    /**
      * 分类 ID
      */
    ClassId: number;
    /**
      * 父类 ID，一级分类的父类 ID 为 -1。
      */
    ParentId: number;
    /**
      * 分类名称
      */
    ClassName: string;
    /**
      * 分类级别，一级分类为 0，最大值为 3，即最多允许 4 级分类层次。
      */
    Level: number;
    /**
      * 当前分类的第一级子类 ID 集合
      */
    SubClassIdSet: Array<number>;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * DescribeImageProcessingTemplates返回参数结构体
 */
export interface DescribeImageProcessingTemplatesResponse {
    /**
      * 符合过滤条件的记录总数。
      */
    TotalCount: number;
    /**
      * 图片处理模板详情列表。
      */
    ImageProcessingTemplateSet: Array<ImageProcessingTemplate>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
      * 图片智能识别模板 ID，当前固定填 10。
      */
    Definition: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * DescribeHeadTailTemplates返回参数结构体
 */
export interface DescribeHeadTailTemplatesResponse {
    /**
      * 符合过滤条件的记录总数。
      */
    TotalCount: number;
    /**
      * 片头片尾模板详情列表。
      */
    HeadTailTemplateSet: Array<HeadTailTemplate>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
    OcrReviewInfo: TerrorismOcrReviewTemplateInfo;
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
      * 判定需人工复核是否违规的分数阈值，当智能识别达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。
      */
    ReviewConfidence?: number;
    /**
      * 判定涉嫌违规的分数阈值，当智能识别达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
      * 视频片头片尾识别任务输入信息。
      */
    Input: AiRecognitionTaskHeadTailResultInput;
    /**
      * 视频片头片尾识别任务输出信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Output: AiRecognitionTaskHeadTailResultOutput;
}
/**
 * DescribePersonSamples请求参数结构体
 */
export interface DescribePersonSamplesRequest {
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
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
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
<li>DeletedDeepArchiveStorage：深度归档提前删除量。
<li>ArchiveStandardRetrieval：归档标准取回量。</li>
<li>ArchiveExpeditedRetrieval：归档快速取回量。</li>
<li>ArchiveBulkRetrieval：归档批量取回量。</li>
<li>DeepArchiveStandardRetrieval：深度归档标准取回量。</li>
<li>DeepArchiveBulkRetrieval：深度归档批量取回量。</li>
默认值为 TotalStorage。
      */
    StorageType?: string;
    /**
      * 点播 [子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
当该字段为1时，表示以管理员身份查询所有子应用（含主应用）的用量合计。
      */
    SubAppId?: number;
    /**
      * 查询的存储区域，有效值：
<li>Chinese Mainland：中国境内（不包含港澳台）。</li>
<li>Outside Chinese Mainland：中国境外。</li>
默认值为 Chinese Mainland。
      */
    Area?: string;
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
 * DeleteWatermarkTemplate返回参数结构体
 */
export interface DeleteWatermarkTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
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
 * ModifyWatermarkTemplate返回参数结构体
 */
export interface ModifyWatermarkTemplateResponse {
    /**
      * 图片水印地址，仅当 ImageTemplate.ImageContent 非空，该字段有值。
      */
    ImageUrl?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 视频转拉任务信息
 */
export interface PullUploadTask {
    /**
      * 转拉上传任务 ID。
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
      * 转拉上传完成后生成的视频 ID。
      */
    FileId: string;
    /**
      * 转拉完成后生成的媒体文件基础信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MediaBasicInfo: MediaBasicInfo;
    /**
      * 输出视频的元信息。
      */
    MetaData: MediaMetaData;
    /**
      * 转拉上传完成后生成的播放地址。
      */
    FileUrl: string;
    /**
      * 若转拉上传时指定了视频处理流程，则该参数为流程任务 ID。
      */
    ProcedureTaskId: string;
    /**
      * 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。
      */
    SessionContext: string;
    /**
      * 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。
      */
    SessionId: string;
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
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAIRecognitionTemplates请求参数结构体
 */
export interface DescribeAIRecognitionTemplatesRequest {
    /**
      * 视频内容识别模板唯一标识过滤条件，数组长度限制：100。
      */
    Definitions?: Array<number>;
    /**
      * 分页偏移量，默认值：0。
      */
    Offset?: number;
    /**
      * 返回记录条数，默认值：10，最大值：100。
      */
    Limit?: number;
    /**
      * 点播[子应用](/document/product/266/14574) ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。
      */
    SubAppId?: number;
}
/**
 * 视频编辑极速高清参数配置。
 */
export interface EditMediaTEHDConfig {
    /**
      * 极速高清类型，可选值：<li>TEHD-100 表示极速高清-100;</li> <li>OFF 表示关闭极速高清。</li>不填表示 OFF。
      */
    Type: string;
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
<li>OcrFullTextRecognition：文本全文识别，</li>
<li>HeadTailRecognition：视频片头片尾识别，</li>
<li>ObjectRecognition：物体识别。</li>
      */
    Type: string;
    /**
      * 视频片头片尾识别结果，当 Type 为
 HeadTailRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HeadTailTask: AiRecognitionTaskHeadTailResult;
    /**
      * 视频拆条识别结果，当 Type 为
 SegmentRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SegmentTask: AiRecognitionTaskSegmentResult;
    /**
      * 人脸识别结果，当 Type 为
 FaceRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FaceTask: AiRecognitionTaskFaceResult;
    /**
      * 语音关键词识别结果，当 Type 为
 AsrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AsrWordsTask: AiRecognitionTaskAsrWordsResult;
    /**
      * 语音全文识别结果，当 Type 为
 AsrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AsrFullTextTask: AiRecognitionTaskAsrFullTextResult;
    /**
      * 文本关键词识别结果，当 Type 为
 OcrWordsRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrWordsTask: AiRecognitionTaskOcrWordsResult;
    /**
      * 文本全文识别结果，当 Type 为
 OcrFullTextRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    OcrFullTextTask: AiRecognitionTaskOcrFullTextResult;
    /**
      * 物体识别结果，当 Type 为
 ObjectRecognition 时有效。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObjectTask: AiRecognitionTaskObjectResult;
}
