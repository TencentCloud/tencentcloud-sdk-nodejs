/**
 * 视频标签识别结果信息
 */
export interface TagTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 视频标签识别结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<TagTaskResultItem>;
}
/**
 * 视频标签识别任务参数信息
 */
export interface TagEditingInfo {
    /**
     * 是否开启视频标签识别。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 细节增强参数
 */
export interface Sharp {
    /**
     * 细节增强方式,取值：normal。
     */
    Type?: string;
    /**
     * 细节增强强度，可选项：0.0-1.0。小于0.0的默认为0.0，大于1.0的默认为1.0。
     */
    Ratio?: number;
}
/**
 * 视频标签识别结果项
 */
export interface TagTaskResultItem {
    /**
     * 标签名称。
     */
    Tag: string;
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * 画质增强参数信息
 */
export interface VideoEnhance {
    /**
     * 去编码毛刺、伪影参数。
     */
    ArtifactReduction?: ArtifactReduction;
    /**
     * 去噪声参数。
     */
    Denoising?: Denoising;
    /**
     * 颜色增强参数。
     */
    ColorEnhance?: ColorEnhance;
    /**
     * 细节增强参数。
     */
    Sharp?: Sharp;
    /**
     * 超分参数，可选项：2，目前仅支持2倍超分。
     */
    WdSuperResolution?: number;
    /**
     * 人脸保护信息。
     */
    FaceProtect?: FaceProtect;
    /**
        * 插帧，取值范围：[0, 60]，单位：Hz。
  注意：当取值为 0，表示帧率和原始视频保持一致。
        */
    WdFps?: number;
    /**
     * 去划痕参数
     */
    ScratchRepair?: ScratchRepair;
    /**
     * 低光照增强参数
     */
    LowLightEnhance?: LowLightEnhance;
}
/**
 * 任务视频cos信息
 */
export interface CosInfo {
    /**
     * cos 区域值。例如：ap-beijing。
     */
    Region: string;
    /**
     * cos 存储桶，格式为BuketName-AppId。例如：test-123456。
     */
    Bucket: string;
    /**
        * cos 路径。
  对于写表示目录，例如：/test；
  对于读表示文件路径，例如：/test/test.mp4。
        */
    Path: string;
    /**
     * cos 授权信息，不填默认为公有权限。
     */
    CosAuthMode?: CosAuthMode;
}
/**
 * 任务存储信息
 */
export interface SaveInfo {
    /**
        * 存储类型，可选值：
  1：CosInfo。
        */
    Type: number;
    /**
     * Cos形式存储信息，当Type等于1时必选。
     */
    CosInfo?: CosInfo;
}
/**
 * 去划痕参数
 */
export interface ScratchRepair {
    /**
     * 去划痕方式，取值：normal。
     */
    Type?: string;
    /**
     * 去划痕强度， 可选项：0.0-1.0。小于0.0的默认为0.0，大于1.0的默认为1.0。
     */
    Ratio?: number;
}
/**
 * 去编码毛刺、伪影参数
 */
export interface ArtifactReduction {
    /**
     * 去毛刺方式：weak,,strong
     */
    Type?: string;
    /**
        * 去毛刺算法，可选项：
  edaf,
  wdaf，
  默认edaf。
  注意：edaf：速度快，去毛刺效果强，保护边缘效果较弱；
  wdaf：速度慢，保护边缘效果好
        */
    Algorithm?: string;
}
/**
 * 任务视频cos授权信息
 */
export interface CosAuthMode {
    /**
        * 授权类型，可选值：
  0：bucket授权，需要将对应bucket授权给本服务帐号（3020447271），否则会读写cos失败；
  1：key托管，把cos的账号id和key托管于本服务，本服务会提供一个托管id；
  3：临时key授权。
  注意：目前智能编辑还不支持临时key授权；画质重生目前只支持bucket授权
        */
    Type: number;
    /**
     * cos账号托管id，Type等于1时必选。
     */
    HostedId?: string;
    /**
     * cos身份识别id，Type等于3时必选。
     */
    SecretId?: string;
    /**
     * cos身份秘钥，Type等于3时必选。
     */
    SecretKey?: string;
    /**
     * 临时授权 token，Type等于3时必选。
     */
    Token?: string;
}
/**
 * 媒体质检任务参数信息
 */
export interface QualityControlInfo {
    /**
     * 对流进行截图的间隔ms，默认1000ms
     */
    Interval?: number;
    /**
     * 是否保存截图
     */
    VideoShot?: boolean;
    /**
     * 是否检测抖动重影
     */
    Jitter?: boolean;
    /**
     * 是否检测模糊
     */
    Blur?: boolean;
    /**
     * 是否检测低光照、过曝
     */
    AbnormalLighting?: boolean;
    /**
     * 是否检测花屏
     */
    CrashScreen?: boolean;
    /**
     * 是否检测黑边、白边、黑屏、白屏、绿屏
     */
    BlackWhiteEdge?: boolean;
    /**
     * 是否检测噪点
     */
    Noise?: boolean;
    /**
     * 是否检测马赛克
     */
    Mosaic?: boolean;
    /**
     * 是否检测二维码，包括小程序码、条形码
     */
    QRCode?: boolean;
    /**
     * 是否开启画面质量评价
     */
    QualityEvaluation?: boolean;
    /**
     * 画面质量评价过滤阈值，结果只返回低于阈值的时间段，默认60
     */
    QualityEvalScore?: number;
    /**
     * 是否检测视频音频，包含静音、低音、爆音
     */
    Voice?: boolean;
}
/**
 * 片头片尾识别结果项
 */
export interface OpeningEndingTaskResultItem {
    /**
     * 视频片头的结束时间点，单位：秒。
     */
    OpeningTimeOffset: number;
    /**
     * 片头识别置信度，取值范围是 0 到 100。
     */
    OpeningConfidence: number;
    /**
     * 视频片尾的开始时间点，单位：秒。
     */
    EndingTimeOffset: number;
    /**
     * 片尾识别置信度，取值范围是 0 到 100。
     */
    EndingConfidence: number;
}
/**
 * 视频源信息
 */
export interface DownInfo {
    /**
        * 下载类型，可选值：
  0：UrlInfo；
  1：CosInfo。
        */
    Type: number;
    /**
     * Url形式下载信息，当Type等于0时必选。
     */
    UrlInfo?: UrlInfo;
    /**
     * Cos形式下载信息，当Type等于1时必选。
     */
    CosInfo?: CosInfo;
}
/**
 * 视频分类识别任务参数信息
 */
export interface ClassificationEditingInfo {
    /**
     * 是否开启视频分类识别。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 低光照增强参数
 */
export interface LowLightEnhance {
    /**
     * 低光照增强类型，可选项：normal。
     */
    Type: string;
}
/**
 * DescribeEditingTaskResult请求参数结构体
 */
export interface DescribeEditingTaskResultRequest {
    /**
     * 编辑任务 ID。
     */
    TaskId: string;
}
/**
 * 智能封面结果项
 */
export interface CoverTaskResultItem {
    /**
     * 智能封面地址。
     */
    CoverUrl: string;
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * 输出文件信息
 */
export interface TargetInfo {
    /**
     * 目标文件名
     */
    FileName: string;
    /**
     * 目标文件切片信息
     */
    SegmentInfo?: SegmentInfo;
}
/**
 * 智能拆条任务参数信息
 */
export interface StripEditingInfo {
    /**
     * 是否开启智能拆条。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 智能编辑任务参数信息
 */
export interface EditingInfo {
    /**
     * 视频标签识别任务参数，不填则不开启。
     */
    TagEditingInfo?: TagEditingInfo;
    /**
     * 视频分类识别任务参数，不填则不开启。
     */
    ClassificationEditingInfo?: ClassificationEditingInfo;
    /**
     * 智能拆条任务参数，不填则不开启。
     */
    StripEditingInfo?: StripEditingInfo;
    /**
     * 智能集锦任务参数，不填则不开启。
     */
    HighlightsEditingInfo?: HighlightsEditingInfo;
    /**
     * 智能封面任务参数，不填则不开启。
     */
    CoverEditingInfo?: CoverEditingInfo;
    /**
     * 片头片尾识别任务参数，不填则不开启。
     */
    OpeningEndingEditingInfo?: OpeningEndingEditingInfo;
}
/**
 * 画质重生任务结果
 */
export interface MediaQualityRestorationTaskResult {
    /**
     * 画质重生任务ID
     */
    TaskId: string;
    /**
     * 画质重生处理后文件的详细信息。
     */
    SubTaskResult: Array<SubTaskResultItem>;
}
/**
 * CreateMediaQualityRestorationTask请求参数结构体
 */
export interface CreateMediaQualityRestorationTaskRequest {
    /**
     * 源文件地址。
     */
    DownInfo: DownInfo;
    /**
     * 画质重生任务参数信息。
     */
    TransInfo: Array<SubTaskTranscodeInfo>;
    /**
     * 任务结束后文件存储信息。
     */
    SaveInfo: SaveInfo;
    /**
     * 任务结果回调地址信息。
     */
    CallbackInfo?: CallbackInfo;
}
/**
 * CreateEditingTask请求参数结构体
 */
export interface CreateEditingTaskRequest {
    /**
     * 智能编辑任务参数。
     */
    EditingInfo: EditingInfo;
    /**
     * 视频源信息。
     */
    DownInfo: DownInfo;
    /**
     * 结果存储信息。对于包含智能拆条、智能集锦或者智能封面的任务必选。
     */
    SaveInfo?: SaveInfo;
    /**
     * 任务结果回调地址信息。
     */
    CallbackInfo?: CallbackInfo;
}
/**
 * 任务结束后生成的文件音频信息
 */
export interface AudioInfoResultItem {
    /**
     * 音频流的流id
     */
    Stream: number;
    /**
        * 音频采样率 。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Sample: number;
    /**
        * 音频声道数。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Channel: number;
    /**
        * 编码格式，如aac, mp3等。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Codec: string;
    /**
        * 码率，单位：bps。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Bitrate: number;
    /**
        * 音频时长，单位：ms。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Duration: number;
}
/**
 * 去噪参数
 */
export interface Denoising {
    /**
        * 去噪方式，可选项：
  templ：时域降噪；
  spatial：空域降噪,
  fast-spatial：快速空域降噪。
  注意：可选择组合方式：
  1.type:"templ,spatial" ;
  2.type:"templ,fast-spatial"。
        */
    Type: string;
    /**
     * 时域去噪强度，可选值：0.0-1.0 。小于0.0的默认为0.0，大于1.0的默认为1.0。
     */
    TemplStrength?: number;
    /**
     * 空域去噪强度，可选值：0.0-1.0 。小于0.0的默认为0.0，大于1.0的默认为1.0。
     */
    SpatialStrength?: number;
}
/**
 * 人脸保护参数
 */
export interface FaceProtect {
    /**
     * 人脸区域增强强度，可选项：0.0-1.0。小于0.0的默认为0.0，大于1.0的默认为1.0。
     */
    FaceUsmRatio?: number;
}
/**
 * 任务结束后生成的文件视频信息
 */
export interface VideoInfoResultItem {
    /**
     * 视频流的流id。
     */
    Stream: number;
    /**
        * 视频宽度。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Width: number;
    /**
        * 视频高度。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Height: number;
    /**
        * 视频码率，单位：bps。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Bitrate: number;
    /**
        * 视频帧率，用分数格式表示，如：25/1, 99/32等等。
  注意：此字段可能返回 null，表示取不到有效值 。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Fps: string;
    /**
        * 编码格式，如h264,h265等等 。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Codec: string;
    /**
        * 播放旋转角度，可选值0-360。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Rotate: number;
    /**
        * 视频时长，单位：ms 。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Duration: number;
    /**
        * 颜色空间，如yuv420p，yuv444p等等。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    PixFormat: string;
}
/**
 * 智能集锦结果信息
 */
export interface HighlightsTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 智能集锦结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<HighlightsTaskResultItem>;
}
/**
 * 画质重生子任务视频剪辑参数
 */
export interface EditInfo {
    /**
     * 剪辑开始时间，单位：ms。
     */
    StartTime: number;
    /**
     * 剪辑结束时间，单位：ms
     */
    EndTime: number;
}
/**
 * 流封装信息
 */
export interface MuxInfo {
    /**
     * 删除流，可选项：video,audio。
     */
    DeleteStream?: string;
}
/**
 * DescribeMediaQualityRestorationTaskRusult请求参数结构体
 */
export interface DescribeMediaQualityRestorationTaskRusultRequest {
    /**
     * 画质重生任务ID
     */
    TaskId: string;
}
/**
 * 视频转码信息
 */
export interface VideoInfo {
    /**
        * 视频帧率，取值范围：[0, 60]，单位：Hz。
  注意：当取值为 0，表示帧率和原始视频保持一致。
        */
    Fps?: number;
    /**
        * 宽度，取值范围：0 和 [128, 4096]
  注意：
  当 Width、Height 均为 0，则分辨率同源；
  当 Width 为 0，Height 非 0，则 Width 按比例缩放；
  当 Width 非 0，Height 为 0，则 Height 按比例缩放；
  当 Width、Height 均非 0，则分辨率按用户指定。
        */
    Width?: number;
    /**
        * 高度，取值范围：0 和 [128, 4096]
  注意：
  当 Width、Height 均为 0，则分辨率同源；
  当 Width 为 0，Height 非 0，则 Width 按比例缩放；
  当 Width 非 0，Height 为 0，则 Height 按比例缩放；
  当 Width、Height 均非 0，则分辨率按用户指定。
        */
    Height?: number;
    /**
        * 长边分辨率，取值范围：0 和 [128, 4096]
  注意：
  当 LongSide、ShortSide 均为 0，则分辨率按照Width，Height；
  当 LongSide 为 0，ShortSide 非 0，则 LongSide 按比例缩放；
  当 LongSide非 0，ShortSide为 0，则 ShortSide 按比例缩放；
  当 LongSide、ShortSide 均非 0，则分辨率按用户指定。
  长短边优先级高于Weight,Height,设置长短边则忽略宽高。
        */
    LongSide?: number;
    /**
        * 短边分辨率，取值范围：0 和 [128, 4096]
  注意：
  当 LongSide、ShortSide 均为 0，则分辨率按照Width，Height；
  当 LongSide 为 0，ShortSide 非 0，则 LongSide 按比例缩放；
  当 LongSide非 0，ShortSide为 0，则 ShortSide 按比例缩放；
  当 LongSide、ShortSide 均非 0，则分辨率按用户指定。
  长短边优先级高于Weight,Height,设置长短边则忽略宽高。
        */
    ShortSide?: number;
    /**
     * 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。当取值为 0，表示视频码率和原始视频保持一致。
     */
    Bitrate?: number;
    /**
     * 固定I帧之间，视频帧数量，取值范围： [25, 2500]，如果不填，使用编码默认最优序列。
     */
    Gop?: number;
    /**
        * 编码器支持选项，可选值：
  h264,
  h265,
  av1
  。
  不填默认h264。
        */
    VideoCodec?: string;
    /**
     * 图片水印。
     */
    PicMarkInfo?: Array<PicMarkInfoItem>;
    /**
     * 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。
     */
    DarInfo?: DarInfo;
    /**
        * 支持hdr,可选项：
  hdr10,
  hlg。
  此时，VideoCodec会强制设置为h265, 编码位深为10
        */
    Hdr?: string;
    /**
     * 画质增强参数信息。
     */
    VideoEnhance?: VideoEnhance;
}
/**
 * 片头片尾识别结果信息
 */
export interface OpeningEndingTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 片头片尾识别结果项。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Item: OpeningEndingTaskResultItem;
}
/**
 * DescribeQualityControlTaskResult请求参数结构体
 */
export interface DescribeQualityControlTaskResultRequest {
    /**
     * 质检任务 ID
     */
    TaskId: string;
}
/**
 * DescribeEditingTaskResult返回参数结构体
 */
export interface DescribeEditingTaskResultResponse {
    /**
     * 编辑任务结果信息。
     */
    TaskResult?: EditingTaskResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateEditingTask返回参数结构体
 */
export interface CreateEditingTaskResponse {
    /**
     * 编辑任务 ID，可以通过该 ID 查询任务状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 媒体质检结果信息
 */
export interface QualityControlInfoTaskResult {
    /**
     * 质检任务 ID
     */
    TaskId: string;
    /**
        * 质检任务状态。
  1：执行中；2：成功；3：失败
        */
    Status: number;
    /**
     * 表示处理进度百分比
     */
    Progress: number;
    /**
     * 处理时长(s)
     */
    UsedTime: number;
    /**
     * 计费时长(s)
     */
    Duration: number;
    /**
        * 为true时表示视频无音频轨
  注意：此字段可能返回 null，表示取不到有效值。
        */
    NoAudio: boolean;
    /**
        * 为true时表示视频无视频轨
  注意：此字段可能返回 null，表示取不到有效值。
        */
    NoVideo: boolean;
    /**
        * 视频无参考质量打分，百分制
  注意：此字段可能返回 null，表示取不到有效值。
        */
    QualityEvaluationScore: number;
    /**
        * 视频画面无参考评分低于阈值的时间段
  注意：此字段可能返回 null，表示取不到有效值。
        */
    QualityEvaluationResults: Array<QualityControlResultItems>;
    /**
        * 视频画面抖动时间段
  注意：此字段可能返回 null，表示取不到有效值。
        */
    JitterResults: Array<QualityControlResultItems>;
    /**
        * 视频画面模糊时间段
  注意：此字段可能返回 null，表示取不到有效值。
        */
    BlurResults: Array<QualityControlResultItems>;
    /**
        * 视频画面低光、过曝时间段
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AbnormalLightingResults: Array<QualityControlResultItems>;
    /**
        * 视频画面花屏时间段
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CrashScreenResults: Array<QualityControlResultItems>;
    /**
        * 视频画面黑边、白边、黑屏、白屏、纯色屏时间段
  注意：此字段可能返回 null，表示取不到有效值。
        */
    BlackWhiteEdgeResults: Array<QualityControlResultItems>;
    /**
        * 视频画面有噪点时间段
  注意：此字段可能返回 null，表示取不到有效值。
        */
    NoiseResults: Array<QualityControlResultItems>;
    /**
        * 视频画面有马赛克时间段
  注意：此字段可能返回 null，表示取不到有效值。
        */
    MosaicResults: Array<QualityControlResultItems>;
    /**
        * 视频画面有二维码的时间段，包括小程序码、条形码
  注意：此字段可能返回 null，表示取不到有效值。
        */
    QRCodeResults: Array<QualityControlResultItems>;
    /**
        * 视频音频异常时间段，包括静音、低音、爆音
  注意：此字段可能返回 null，表示取不到有效值。
        */
    VoiceResults: Array<QualityControlResultItems>;
    /**
        * 任务错误码
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ErrCode: number;
    /**
        * 任务错误信息
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ErrMsg: string;
}
/**
 * StopMediaQualityRestorationTask返回参数结构体
 */
export interface StopMediaQualityRestorationTaskResponse {
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 任务视频Url形式下载信息。
 */
export interface UrlInfo {
    /**
        * 视频 URL。音视频支持mp4、ts等格式；直播流支持flv、rtmp格式。
  注意：目前智能编辑还不支持直播流场景。
        */
    Url: string;
    /**
        * 视频地址格式，可选值：
  0：音视频 ;
  1：直播流。
  默认为0。其他非0非1值默认为0。画质重生任务只支持0。
        */
    Format?: number;
    /**
     * 指定请求资源时，HTTP头部host的值。
     */
    Host?: string;
}
/**
 * StopMediaQualityRestorationTask请求参数结构体
 */
export interface StopMediaQualityRestorationTaskRequest {
    /**
     * 要删除的画质重生任务ID。
     */
    TaskId: string;
}
/**
 * DescribeQualityControlTaskResult返回参数结构体
 */
export interface DescribeQualityControlTaskResultResponse {
    /**
     * 质检任务结果信息
     */
    TaskResult?: QualityControlInfoTaskResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeMediaQualityRestorationTaskRusult返回参数结构体
 */
export interface DescribeMediaQualityRestorationTaskRusultResponse {
    /**
     * 画质重生任务结果信息
     */
    TaskResult?: MediaQualityRestorationTaskResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 视频分类识别结果项
 */
export interface ClassificationTaskResultItem {
    /**
     * 分类名称。
     */
    Classification: string;
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
}
/**
 * 视频Dar信息
 */
export interface DarInfo {
    /**
        * 填充模式，可选值：
  1：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。
  2：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“。
  默认为2。
        */
    FillMode?: number;
}
/**
 * 音频参数信息
 */
export interface AudioInfo {
    /**
        * 音频码率，取值范围：0 和 [26, 256]，单位：kbps。
  注意：当取值为 0，表示音频码率和原始音频保持一致。
        */
    Bitrate: number;
    /**
     * 音频编码器，可选项：aac,mp3,ac3,flac,mp2。
     */
    Codec: string;
    /**
        * 声道数，可选项：
  1：单声道，
  2：双声道，
  6：立体声。
        */
    Channel: number;
    /**
     * 采样率，单位：Hz。可选项：32000，44100,48000
     */
    SampleRate: number;
}
/**
 * CreateQualityControlTask返回参数结构体
 */
export interface CreateQualityControlTaskResponse {
    /**
        * 质检任务 ID
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 智能识别任务结果信息
 */
export interface EditingTaskResult {
    /**
     * 编辑任务 ID。
     */
    TaskId: string;
    /**
        * 编辑任务状态。
  1：执行中；2：已完成。
        */
    Status: number;
    /**
        * 视频标签识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TagTaskResult: TagTaskResult;
    /**
        * 视频分类识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ClassificationTaskResult: ClassificationTaskResult;
    /**
        * 智能拆条结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    StripTaskResult: StripTaskResult;
    /**
        * 智能集锦结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    HighlightsTaskResult: HighlightsTaskResult;
    /**
        * 智能封面结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    CoverTaskResult: CoverTaskResult;
    /**
        * 片头片尾识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    OpeningEndingTaskResult: OpeningEndingTaskResult;
}
/**
 * 画质重生子任务参数信息
 */
export interface SubTaskTranscodeInfo {
    /**
     * 子任务名称。
     */
    TaskName: string;
    /**
     * 目标文件信息。
     */
    TargetInfo: TargetInfo;
    /**
     * 视频剪辑信息。注意：如果填写了EditInfo，则VideoInfo和AudioInfo必填
     */
    EditInfo?: EditInfo;
    /**
     * 视频转码信息，不填保持和源文件一致。
     */
    VideoInfo?: VideoInfo;
    /**
     * 音频转码信息，不填保持和源文件一致。
     */
    AudioInfo?: AudioInfo;
    /**
     * 指定封装信息。
     */
    MuxInfo?: MuxInfo;
}
/**
 * 质检结果项数组
 */
export interface QualityControlResultItems {
    /**
        * 异常类型
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Id: string;
    /**
     * 质检结果项
     */
    QualityControlItems: Array<QualityControlItem>;
}
/**
 * 画质重生子任务结果
 */
export interface SubTaskResultItem {
    /**
        * 子任务名称。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    TaskName: string;
    /**
        * 子任务状态。
  0：成功；
  1：执行中；
  其他值：失败。
        */
    StatusCode: number;
    /**
     * 子任务状态描述。
     */
    StatusMsg: string;
    /**
        * 子任务进度。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ProgressRate: number;
    /**
        * 画质重生处理后文件的下载地址。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    DownloadUrl: string;
    /**
        * 画质重生处理后文件的MD5。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Md5: string;
    /**
        * 画质重生处理后文件的详细信息。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FileInfo: FileInfo;
}
/**
 * 质检结果项
 */
export interface QualityControlItem {
    /**
        * 置信度，取值范围是 0 到 100
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Confidence: number;
    /**
     * 出现的起始时间戳，秒
     */
    StartTimeOffset: number;
    /**
     * 出现的结束时间戳，秒
     */
    EndTimeOffset: number;
    /**
        * 区域坐标(px)，即左上角坐标、右下角坐标
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AreaCoordsSet: Array<number>;
}
/**
 * 智能集锦任务参数信息
 */
export interface HighlightsEditingInfo {
    /**
     * 是否开启智能集锦。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 画质重生处理后文件的详细信息
 */
export interface FileInfo {
    /**
        * 任务结束后生成的文件大小。
  注意：此字段可能返回 null，表示取不到有效值 。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FileSize: number;
    /**
        * 任务结束后生成的文件格式，例如：mp4,flv等等。
  注意：此字段可能返回 null，表示取不到有效值 。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    FileType: string;
    /**
        * 任务结束后生成的文件整体码率，单位：bps。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Bitrate: number;
    /**
        * 任务结束后生成的文件时长，单位：ms。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    Duration: number;
    /**
        * 任务结束后生成的文件视频信息。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    VideoInfoResult: Array<VideoInfoResultItem>;
    /**
        * 任务结束后生成的文件音频信息。
  注意：此字段可能返回 null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    AudioInfoResult: Array<AudioInfoResultItem>;
}
/**
 * CreateQualityControlTask请求参数结构体
 */
export interface CreateQualityControlTaskRequest {
    /**
     * 质检任务参数
     */
    QualityControlInfo: QualityControlInfo;
    /**
     * 视频源信息
     */
    DownInfo: DownInfo;
    /**
     * 任务结果回调地址信息
     */
    CallbackInfo?: CallbackInfo;
}
/**
 * 视频分类识别结果信息
 */
export interface ClassificationTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 视频分类识别结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<ClassificationTaskResultItem>;
}
/**
 * 智能拆条结果项
 */
export interface StripTaskResultItem {
    /**
     * 视频拆条片段地址。
     */
    SegmentUrl: string;
    /**
     * 拆条封面图片地址。
     */
    CovImgUrl: string;
    /**
     * 置信度，取值范围是 0 到 100。
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
}
/**
 * 智能集锦结果片段
 */
export interface HighlightsTaskResultItemSegment {
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
    /**
     * 集锦片段起始的偏移时间，单位：秒。
     */
    StartTimeOffset: number;
    /**
     * 集锦片段终止的偏移时间，单位：秒。
     */
    EndTimeOffset: number;
}
/**
 * 智能集锦结果项
 */
export interface HighlightsTaskResultItem {
    /**
     * 智能集锦地址。
     */
    HighlightUrl: string;
    /**
     * 智能集锦封面地址。
     */
    CovImgUrl: string;
    /**
     * 置信度，取值范围是 0 到 100。
     */
    Confidence: number;
    /**
     * 智能集锦持续时间，单位：秒。
     */
    Duration: number;
    /**
     * 智能集锦子片段结果集，集锦片段由这些子片段拼接生成。
     */
    SegmentSet: Array<HighlightsTaskResultItemSegment>;
}
/**
 * 图片水印信息
 */
export interface PicMarkInfoItem {
    /**
     * 图片水印的X坐标。
     */
    PosX: number;
    /**
     * 图片水印的Y坐标 。
     */
    PosY: number;
    /**
     * 图片水印路径,，如果不从Cos拉取水印，则必填
     */
    Path?: string;
    /**
     * 图片水印的Cos 信息，从Cos上拉取图片水印时必填。
     */
    CosInfo?: CosInfo;
    /**
     * 图片水印宽度，不填为图片原始宽度。
     */
    Width?: number;
    /**
     * 图片水印高度，不填为图片原始高度。
     */
    Height?: number;
    /**
     * 添加图片水印的开始时间,单位：ms。
     */
    StartTime?: number;
    /**
     * 添加图片水印的结束时间,单位：ms。
     */
    EndTime?: number;
}
/**
 * 智能封面任务参数信息
 */
export interface CoverEditingInfo {
    /**
     * 是否开启智能封面。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 颜色增强参数
 */
export interface ColorEnhance {
    /**
     * 颜色增强类型，可选项：weak,strong。
     */
    Type: string;
}
/**
 * CreateMediaQualityRestorationTask返回参数结构体
 */
export interface CreateMediaQualityRestorationTaskResponse {
    /**
     * 画质重生任务ID，可以通过该ID查询任务状态。
     */
    TaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 输出文件切片信息
 */
export interface SegmentInfo {
    /**
     * 每个切片平均时长，默认10s。
     */
    FragmentTime?: number;
    /**
     * 切片类型，可选项：hls，不填时默认hls。
     */
    SegmentType?: string;
    /**
        * 切片文件名字。注意：
  1.不填切片文件名时，默认按照按照如下格式命名：m3u8文件名{order}。
  2.若填了切片文件名字，则会按照如下格式命名：用户指定文件名{order}。
        */
    FragmentName?: string;
}
/**
 * 任务结果回调地址信息
 */
export interface CallbackInfo {
    /**
     * 回调URL。
     */
    Url: string;
}
/**
 * 片头片尾识别任务参数信息
 */
export interface OpeningEndingEditingInfo {
    /**
     * 是否开启片头片尾识别。0为关闭，1为开启。其他非0非1值默认为0。
     */
    Switch: number;
    /**
     * 额外定制化服务参数。参数为序列化的Json字符串，例如：{"k1":"v1"}。
     */
    CustomInfo?: string;
}
/**
 * 智能拆条结果信息
 */
export interface StripTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 智能拆条结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<StripTaskResultItem>;
}
/**
 * 智能封面结果信息
 */
export interface CoverTaskResult {
    /**
        * 编辑任务状态。
  1：执行中；2：成功；3：失败。
        */
    Status: number;
    /**
        * 编辑任务失败错误码。
  0：成功；其他值：失败。
        */
    ErrCode: number;
    /**
     * 编辑任务失败错误描述。
     */
    ErrMsg: string;
    /**
        * 智能封面结果集。
  注意：此字段可能返回 null，表示取不到有效值。
        */
    ItemSet: Array<CoverTaskResultItem>;
}
