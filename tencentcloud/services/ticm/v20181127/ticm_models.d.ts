/**
 * 内容审核 Ocr 文字鉴政、敏感任务结果类型
 */
export interface VodPoliticalOcrReviewResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status: string;
    /**
     * 错误码，0：成功，其他值：失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code: number;
    /**
     * 错误信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msg: string;
    /**
     * Ocr 文字涉政、敏感评分，分值为0到100。
     */
    Confidence: number;
    /**
     * Ocr 文字涉政、敏感结果建议，取值范围：
  pass。
  review。
  block。
     */
    Suggestion: string;
    /**
     * Ocr 文字有涉政、敏感嫌疑的视频片段列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentSet: Array<VodOcrTextSegmentItem>;
}
/**
 * 识别出人脸对应的候选人。
 */
export interface Candidate {
    /**
     * 识别出人脸对应的候选人数组。当前返回相似度最高的候选人。
     */
    Name: string;
    /**
     * 相似度，0-100之间。
     */
    Confidence: number;
}
/**
 * 暴恐识别结果。
 */
export interface TerrorismResult {
    /**
     * 该识别场景的错误码：
  0表示成功，
  -1表示系统错误，
  -2表示引擎错误，
  -1400表示图片解码失败。
     */
    Code: number;
    /**
     * 错误码描述信息。
     */
    Msg: string;
    /**
     * 识别场景的审核结论：
  PASS：正常
  REVIEW：疑似
  BLOCK：违规
     */
    Suggestion: string;
    /**
     * 图像涉恐的分数，0-100之间，分数越高涉恐几率越大。
  Type为LABEL时：
  0到86，Suggestion建议为PASS
  86到91，Suggestion建议为REVIEW
  91到100，Suggestion建议为BLOCK
  Type为FACE时：
  0到55，Suggestion建议为PASS
  55到60，Suggestion建议为REVIEW
  60到100，Suggestion建议为BLOCK
     */
    Confidence: number;
    /**
     * Type取值为‘FACE’时，人脸识别的结果列表。基于图片中实际检测到的人脸数，返回数组最大值不超过5个。
     */
    FaceResults: Array<FaceResult>;
    /**
     * 暴恐识别返回的详细标签后期开放。
     */
    AdvancedInfo: string;
    /**
     * 取值'LABEL' 或‘FACE’，LABEL表示结论和置信度来自标签分类，FACE表示结论和置信度来自人脸识别。
     */
    Type: string;
}
/**
 * 内容审核 Asr 文字鉴政、敏感任务结果类型
 */
export interface VodPoliticalAsrReviewResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status: string;
    /**
     * 错误码，0：成功，其他值：失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code: number;
    /**
     * 错误信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msg: string;
    /**
     * 嫌疑片段审核结果建议，取值范围：
  pass。
  review。
  block。
  
  Asr 文字涉政、敏感评分，分值为0到100。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * Asr 文字涉政、敏感结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * Asr 文字有涉政、敏感嫌疑的视频片段列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentSet: Array<VodAsrTextSegmentItem>;
}
/**
 * VideoModeration返回参数结构体
 */
export interface VideoModerationResponse {
    /**
     * 视频审核任务ID
     */
    VodTaskId?: string;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 媒体文件元信息。
 */
export interface VodMetaData {
    /**
     * 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size: number;
    /**
     * 容器类型，例如 m4a，mp4 等。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Container: string;
    /**
     * 视频流码率平均值与音频流码率平均值之和，单位：bps。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bitrate: number;
    /**
     * 视频流高度的最大值，单位：px。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Height: number;
    /**
     * 视频流宽度的最大值，单位：px。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Width: number;
    /**
     * 视频时长，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Duration: number;
    /**
     * 视频拍摄时的选择角度，单位：度。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rotate: number;
    /**
     * 视频流信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoStreamSet: Array<VodVideoStreamItem>;
    /**
     * 音频流信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioStreamSet: Array<VodAudioStreamItem>;
    /**
     * 视频时长，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VideoDuration: number;
    /**
     * 音频时长，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioDuration: number;
}
/**
 * ImageModeration返回参数结构体
 */
export interface ImageModerationResponse {
    /**
     * 识别场景的审核结论：
  PASS：正常
  REVIEW：疑似
  BLOCK：违规
     */
    Suggestion?: string;
    /**
     * 色情识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PornResult?: PornResult;
    /**
     * 暴恐识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TerrorismResult?: TerrorismResult;
    /**
     * 政治敏感识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PoliticsResult?: PoliticsResult;
    /**
     * 透传字段，透传简单信息。
     */
    Extra?: string;
    /**
     * 恶心内容识别结果。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DisgustResult?: DisgustResult;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 文件视频流信息
 */
export interface VodVideoStreamItem {
    /**
     * 视频流的码率，单位：bps。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bitrate: number;
    /**
     * 视频流的高度，单位：px。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Height: number;
    /**
     * 视频流的宽度，单位：px。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Width: number;
    /**
     * 视频流的编码格式，例如 h264。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Codec: string;
    /**
     * 帧率，单位：hz。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Fps: number;
}
/**
 * ImageModeration请求参数结构体
 */
export interface ImageModerationRequest {
    /**
     * 本次调用支持的识别场景，可选值如下：
  1. PORN，即色情识别
  2. TERRORISM，即暴恐识别
  3. POLITICS，即政治敏感识别
  
  支持多场景（Scenes）一起检测。例如，使用 Scenes=["PORN", "TERRORISM"]，即对一张图片同时进行色情识别和暴恐识别。
     */
    Scenes: Array<string>;
    /**
     * 图片URL地址。
  图片限制：
   • 图片格式：PNG、JPG、JPEG。
   • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。
   • 图片像素：大于50*50像素，否则影响识别效果；
   • 长宽比：长边：短边<5；
  接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。
     */
    ImageUrl?: string;
    /**
     * 预留字段，后期用于展示更多识别信息。
     */
    Config?: string;
    /**
     * 透传字段，透传简单信息。
     */
    Extra?: string;
    /**
     * 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。
     */
    ImageBase64?: string;
}
/**
 * VideoModeration请求参数结构体
 */
export interface VideoModerationRequest {
    /**
     * 需要审核的视频的URL地址
     */
    VideoUrl: string;
    /**
     * 开发者标识
     */
    DeveloperId?: string;
    /**
     * 审核完成后回调地址
     */
    CBUrl?: string;
    /**
     * 透传字段，透传简单信息。
     */
    Extra?: string;
}
/**
 * 内容审核鉴政任务结果类型
 */
export interface VodPoliticalReviewSegmentItem {
    /**
     * 嫌疑片段起始的偏移时间，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTimeOffset: number;
    /**
     * 嫌疑片段结束的偏移时间，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTimeOffset: number;
    /**
     * 嫌疑片段涉政分数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * 嫌疑片段鉴政结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * 涉政人物、违规图标名字。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 嫌疑片段鉴政结果标签。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 嫌疑图片 URL （图片不会永久存储，到达
  PicUrlExpireTime 时间点后图片将被删除）。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Url: string;
    /**
     * 嫌疑图片 URL 失效时间，使用 ISO 日期格式。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PicUrlExpireTimeStamp: number;
    /**
     * 涉政人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AreaCoordSet: Array<number | bigint>;
}
/**
 * 内容审核鉴黄任务结果类型
 */
export interface VodPornReviewResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status: string;
    /**
     * 错误码，0：成功，其他值：失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code: number;
    /**
     * 错误信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msg: string;
    /**
     * 视频鉴黄评分，分值为0到100。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * 鉴黄结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * 视频鉴黄结果标签，取值范围：
  porn：色情。
  sexy：性感。
  vulgar：低俗。
  intimacy：亲密行为。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 有涉黄嫌疑的视频片段列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentSet: Array<VodPornReviewSegmentItem>;
}
/**
 * 恶心识别结果。
 */
export interface DisgustResult {
    /**
     * 该识别场景的错误码：
  0表示成功，
  -1表示系统错误，
  -2表示引擎错误。
     */
    Code: number;
    /**
     * 错误码描述信息。
     */
    Msg: string;
    /**
     * 识别场景的审核结论：
  PASS：正常
  REVIEW：疑似
  BLOCK：违规
     */
    Suggestion: string;
    /**
     * 图像恶心的分数，0-100之间，分数越高恶心几率越大。
     */
    Confidence: number;
}
/**
 * 内容审核涉黄/暴恐嫌疑片段
 */
export interface VodPornReviewSegmentItem {
    /**
     * 嫌疑片段起始的偏移时间，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTimeOffset: number;
    /**
     * 嫌疑片段结束的偏移时间，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTimeOffset: number;
    /**
     * 嫌疑片段涉黄分数。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * 嫌疑片段鉴黄结果标签。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 嫌疑片段鉴黄结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * 嫌疑图片 URL （图片不会永久存储，到达
  PicUrlExpireTime 时间点后图片将被删除）。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Url: string;
    /**
     * 嫌疑图片 URL 失效时间，使用 ISO 日期格式。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PicUrlExpireTimeStamp: number;
}
/**
 * 涉政信息
 */
export interface VodPoliticalReviewResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status: string;
    /**
     * 错误码，0：成功，其他值：失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code: number;
    /**
     * 错误信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msg: string;
    /**
     * 视频涉政评分，分值为0到100。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * 涉政结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * 视频鉴政结果标签，取值范围：
  politician：政治人物。
  violation_photo：违规图标。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 有涉政嫌疑的视频片段列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentSet: Array<VodPoliticalReviewSegmentItem>;
}
/**
 * 文件音频流信息
 */
export interface VodAudioStreamItem {
    /**
     * 音频流的码率，单位：bps。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bitrate: number;
    /**
     * 音频流的采样率，单位：hz。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SamplingRate: number;
    /**
     * 音频流的编码格式，例如 aac。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Codec: string;
}
/**
 * 内容审核 Ocr 文字审核嫌疑片段
 */
export interface VodOcrTextSegmentItem {
    /**
     * 嫌疑片段起始的偏移时间，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTimeOffset: number;
    /**
     * 嫌疑片段结束的偏移时间，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTimeOffset: number;
    /**
     * 嫌疑片段置信度。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * 嫌疑片段审核结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * 嫌疑关键词列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeywordSet: Array<string>;
    /**
     * 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AreaCoordSet: Array<number | bigint>;
}
/**
 * 政治敏感识别结果。
 */
export interface PoliticsResult {
    /**
     * 该识别场景的错误码：
  0表示成功，
  -1表示系统错误，
  -2表示引擎错误，
  -1400表示图片解码失败，
  -1401表示图片不符合规范。
     */
    Code: number;
    /**
     * 错误码描述信息。
     */
    Msg: string;
    /**
     * 识别场景的审核结论：
  PASS：正常
  REVIEW：疑似
  BLOCK：违规
     */
    Suggestion: string;
    /**
     * 图像涉政的分数，0-100之间，分数越高涉政几率越大。
  Type为DNA时：
  0到75，Suggestion建议为PASS
  75到90，Suggestion建议为REVIEW
  90到100，Suggestion建议为BLOCK
  Type为FACE时：
  0到55，Suggestion建议为PASS
  55到60，Suggestion建议为REVIEW
  60到100，Suggestion建议为BLOCK
     */
    Confidence: number;
    /**
     * Type取值为‘FACE’时，人脸识别的结果列表。基于图片中实际检测到的人脸数，返回数组最大值不超过5个。
     */
    FaceResults: Array<FaceResult>;
    /**
     * 取值'DNA' 或‘FACE’。DNA表示结论和置信度来自图像指纹，FACE表示结论和置信度来自人脸识别。
     */
    Type: string;
    /**
     * 鉴政识别返回的详细标签后期开放。
     */
    AdvancedInfo: string;
}
/**
 * 内容审核 Asr 文字审核嫌疑片段
 */
export interface VodAsrTextSegmentItem {
    /**
     * 嫌疑片段起始的偏移时间，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTimeOffset: number;
    /**
     * 嫌疑片段结束的偏移时间，单位：秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTimeOffset: number;
    /**
     * 嫌疑片段置信度。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * 嫌疑片段审核结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * 嫌疑关键词列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeywordSet: Array<string>;
}
/**
 * 色情识别结果。
 */
export interface PornResult {
    /**
     * 该识别场景的错误码：
  0表示成功，
  -1表示系统错误，
  -2表示引擎错误，
  -1400表示图片解码失败。
     */
    Code: number;
    /**
     * 错误码描述信息。
     */
    Msg: string;
    /**
     * 识别场景的审核结论：
  PASS：正常
  REVIEW：疑似
  BLOCK：违规
     */
    Suggestion: string;
    /**
     * 算法对于Suggestion的置信度，0-100之间，值越高，表示对于Suggestion越确定。
     */
    Confidence: number;
    /**
     * 预留字段，后期用于展示更多识别信息。
     */
    AdvancedInfo: string;
    /**
     * 取值'LABEL‘，LABEL表示结论和置信度来自标签分类。
     */
    Type: string;
}
/**
 * DescribeVideoTask请求参数结构体
 */
export interface DescribeVideoTaskRequest {
    /**
     * 需要查询的视频审核的任务ID
     */
    VodTaskId: string;
}
/**
 * 暴恐信息
 */
export interface VodTerrorismReviewResult {
    /**
     * 视频暴恐评分，分值为0到100。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * 暴恐结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * 视频暴恐结果标签，取值范围：
  guns：武器枪支。
  crowd：人群聚集。
  police：警察部队。
  bloody：血腥画面。
  banners：暴恐旗帜。
  militant：武装分子。
  explosion：爆炸火灾。
  terrorists：暴恐人物。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status: string;
    /**
     * 错误码，0：成功，其他值：失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code: number;
    /**
     * 错误信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msg: string;
    /**
     * 有暴恐嫌疑的视频片段列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentSet: Array<VodPornReviewSegmentItem>;
}
/**
 * 人脸识别结果。
 */
export interface FaceResult {
    /**
     * 检测出的人脸框位置。
     */
    FaceRect: FaceRect;
    /**
     * 候选人列表。当前返回相似度最高的候选人。
     */
    Candidates: Array<Candidate>;
}
/**
 * Asr 文字涉黄信息
 */
export interface VodPornAsrReviewResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status: string;
    /**
     * 错误码，0：成功，其他值：失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code: number;
    /**
     * 错误信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msg: string;
    /**
     * Asr 文字涉黄评分，分值为0到100。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * Asr 文字涉黄结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * Asr 文字有涉黄嫌疑的视频片段列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentSet: Array<VodAsrTextSegmentItem>;
}
/**
 * DescribeVideoTask返回参数结构体
 */
export interface DescribeVideoTaskResponse {
    /**
     * 任务状态，取值：
  WAITING：等待中；
  PROCESSING：处理中；
  FINISH：已完成。
     */
    Status?: string;
    /**
     * 任务开始执行的时间，采用 ISO 日期格式。
     */
    BeginProcessTime?: string;
    /**
     * 任务执行完毕的时间，采用 ISO 日期格式。
     */
    FinishTime?: string;
    /**
     * 视频内容审核智能画面鉴黄任务的查询结果。
     */
    PornResult?: VodPornReviewResult;
    /**
     * 视频内容审核智能画面鉴恐任务的查询结果。
     */
    TerrorismResult?: VodTerrorismReviewResult;
    /**
     * 视频内容审核智能画面鉴政任务的查询结果。
     */
    PoliticalResult?: VodPoliticalReviewResult;
    /**
     * 视频内容审核 Ocr 文字鉴政任务的查询结果。
     */
    PoliticalOcrResult?: VodPoliticalOcrReviewResult;
    /**
     * 视频内容审核 Asr 文字鉴黄任务的查询结果。
     */
    PornAsrResult?: VodPornAsrReviewResult;
    /**
     * 视频内容审核 Asr 文字鉴政任务的查询结果。
     */
    PoliticalAsrResult?: VodPoliticalAsrReviewResult;
    /**
     * 视频内容审核 Ocr 文字鉴黄任务的查询结果。
     */
    PornOcrResult?: VodPornOcrResult;
    /**
     * 原始视频的元信息。
     */
    MetaData?: VodMetaData;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 识别出的人脸在图片中的位置。

 */
export interface FaceRect {
    /**
     * 人脸区域左上角横坐标。
     */
    X: number;
    /**
     * 人脸区域左上角纵坐标。
     */
    Y: number;
    /**
     * 人脸区域宽度。
     */
    Width: number;
    /**
     * 人脸区域高度。
     */
    Height: number;
}
/**
 * 内容审核 Ocr 文字鉴黄任务结果类型
 */
export interface VodPornOcrResult {
    /**
     * 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。
     */
    Status: string;
    /**
     * 错误码，0：成功，其他值：失败。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code: number;
    /**
     * 错误信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Msg: string;
    /**
     * Ocr 文字涉黄评分，分值为0到100。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Confidence: number;
    /**
     * Ocr 文字涉黄结果建议，取值范围：
  pass。
  review。
  block。
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * Ocr 文字有涉黄嫌疑的视频片段列表。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SegmentSet: Array<VodOcrTextSegmentItem>;
}
