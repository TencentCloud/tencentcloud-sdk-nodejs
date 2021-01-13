/**
 * 图片段信息
 */
export interface ImageSegments {
    /**
      * 截帧时间。单位为秒。
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
      */
    OffsetTime: string;
    /**
      * 画面截帧结果详情
      */
    Result: ImageResult;
}
/**
 * 图片输出结果的子结果
 */
export interface ImageResultResult {
    /**
      * 场景
Porn 色情
Sexy 性感
Illegal 违法
Abuse 谩骂
Ad 广告
以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scene: string;
    /**
      * 是否命中
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
      */
    HitFlag: number;
    /**
      * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 识别结果一级标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 识别结果二级标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabel: string;
    /**
      * 分数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 适应特定场景，则该数据为名称列表，否则为null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Names: Array<string>;
    /**
      * 图片OCR文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 其他详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Details: Array<ImageResultsResultDetail>;
}
/**
 *  数据存储信息
 */
export interface StorageInfo {
    /**
      * 类型 可选：
URL 资源链接类型
COS 腾讯云对象存储类型
      */
    Type?: string;
    /**
      * 资源链接
      */
    Url?: string;
    /**
      * 腾讯云存储桶信息
      */
    BucketInfo?: BucketInfo;
}
/**
 * 文件桶信息
参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352
 */
export interface BucketInfo {
    /**
      * 腾讯云对象存储，存储桶名称
      */
    Bucket: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 对象Key
      */
    Object: string;
}
/**
 * CreateVideoModerationTask返回参数结构体
 */
export interface CreateVideoModerationTaskResponse {
    /**
      * 任务创建结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results?: Array<TaskResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 创建任务时的返回结果
 */
export interface TaskResult {
    /**
      * 请求时传入的DataId
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId: string;
    /**
      * TaskId，任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 错误码。如果code为OK，则表示创建成功，其他则参考公共错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * 如果错误，该字段表示错误详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
}
/**
 * CancelTask请求参数结构体
 */
export interface CancelTaskRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
    /**
      * 任务Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId?: string;
    /**
      * 审核时传入的数据Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId?: string;
    /**
      * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizType?: string;
    /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 状态，可选值：
FINISH 已完成
PENDING 等待中
RUNNING 进行中
ERROR 出错
CANCELLED 已取消
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 审核建议
可选：
Pass 通过
Reveiw 建议复审
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion?: string;
    /**
      * 审核结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Labels?: Array<TaskLabel>;
    /**
      * 媒体解码信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MediaInfo?: MediaInfo;
    /**
      * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InputInfo?: InputInfo;
    /**
      * 创建时间，格式为 ISO 8601
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedAt?: string;
    /**
      * 更新时间，格式为 ISO 8601
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedAt?: string;
    /**
      * 图片结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageSegments?: Array<ImageSegments>;
    /**
      * 音频结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    AudioSegments?: Array<AudioSegments>;
    /**
      * 如果返回的状态为ERROR，该字段会标记错误类型。
可选值：：
DECODE_ERROR: 解码失败。（输入资源中可能包含无法解码的视频）
URL_ERROR：下载地址验证失败。
TIMEOUT_ERROR：处理超时。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorType?: string;
    /**
      * 审核任务错误日志。当Error不为空时，会展示该字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorDescription?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
    /**
      * 每页展示多少条。（默认展示10条）
      */
    Limit?: number;
    /**
      * 过滤参数
      */
    Filter?: TaskFilter;
    /**
      * 翻页token，在向前或向后翻页时需要
      */
    PageToken?: string;
    /**
      * 开始时间。默认是最近3天。
      */
    StartTime?: string;
    /**
      * 结束时间。默认为空
      */
    EndTime?: string;
}
/**
 * 音视频任务结构
 */
export interface TaskInput {
    /**
      * 数据ID
      */
    DataId?: string;
    /**
      * 任务名
      */
    Name?: string;
    /**
      * 任务输入
      */
    Input?: StorageInfo;
}
/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
    /**
      * 任务ID，创建任务后返回的TaskId字段
      */
    TaskId: string;
    /**
      * 是否展示所有分片，默认只展示命中规则的分片
      */
    ShowAllSegments?: boolean;
}
/**
 * 任务输出标签
 */
export interface TaskLabel {
    /**
      * 命中的标签
Porn 色情
Sexy 性感
Illegal 违法
Abuse 谩骂
Ad 广告
以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 得分，分数是 0 ～ 100
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
}
/**
 * 具体场景下的图片识别结果
 */
export interface ImageResultsResultDetail {
    /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * OCR识别文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 位置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Location: ImageResultsResultDetailLocation;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 库ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibId: string;
    /**
      * 库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibName: string;
    /**
      * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keywords: Array<string>;
    /**
      * 建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 子标签码
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabelCode: string;
}
/**
 * 输入信息详情
 */
export interface InputInfo {
    /**
      * 传入的类型可选：URL，COS
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * Url地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 桶信息。当输入当时COS时，该字段不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    BucketInfo: string;
}
/**
 * CreateVideoModerationTask请求参数结构体
 */
export interface CreateVideoModerationTaskRequest {
    /**
      * 任务类型：可选VIDEO（点播视频），LIVE_VIDEO（直播视频）
      */
    Type: string;
    /**
      * 输入的任务信息，最多可以同时创建10个任务
      */
    Tasks: Array<TaskInput>;
    /**
      * 业务类型, 定义 模版策略，输出存储配置。默认为default，客户可以在视频审核控制台创建自己的 BizType
      */
    BizType?: string;
    /**
      * （可选）回调签名key，具体可以查看回调签名示例
      */
    Seed?: string;
    /**
      * 接收审核信息回调地址，如果设置，则审核过程中产生的违规音频片段和画面截帧发送此接口
      */
    CallbackUrl?: string;
    /**
      * 审核排队优先级。当您有多个视频审核任务排队时，可以根据这个参数控制排队优先级。用于处理插队等逻辑。默认该参数为0
      */
    Priority?: number;
}
/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
    /**
      * 任务总量，为 int 字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: string;
    /**
      * 当前页数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: Array<TaskData>;
    /**
      * 翻页Token，当已经到最后一页时，该字段为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    PageToken?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 音频小语种检测结果
 */
export interface AudioResultDetailLanguageResult {
    /**
      * 语言分类，如中文、英文等；
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: number;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: number;
    /**
      * 子标签码
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabelCode: string;
}
/**
 * 任务筛选器
 */
export interface TaskFilter {
    /**
      * 任务业务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizType?: Array<string>;
    /**
      * 任务类型，可选：VIDEO，AUDIO， LIVE_VIDEO, LIVE_AUDIO
      */
    Type?: string;
    /**
      * 建议，可选：Pass, Review,Block
      */
    Suggestion?: string;
    /**
      * 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED
      */
    TaskStatus?: string;
}
/**
 * CancelTask返回参数结构体
 */
export interface CancelTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 音频ASR文本审核结果
 */
export interface AudioResultDetailTextResult {
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keywords: Array<string>;
    /**
      * 命中的LibId
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibId: string;
    /**
      * 命中的LibName
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibName: string;
    /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 词库类型 1 黑白库 2 自定义库
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibType: number;
    /**
      * 审核建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
}
/**
 * 音频输出参数
 */
export interface AudioResult {
    /**
      * 是否命中
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
      */
    HitFlag: number;
    /**
      * 命中的标签
Porn 色情
Illegal 违法
Abuse 谩骂
Ad 广告
Moan 呻吟
以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 得分，0-100
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 音频ASR文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 音频片段存储URL，有效期为1天
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 音频时长
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration: string;
    /**
      * 拓展字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    Extra: string;
    /**
      * 文本审核结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextResults: Array<AudioResultDetailTextResult>;
    /**
      * 音频呻吟审核结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    MoanResults: Array<AudioResultDetailMoanResult>;
    /**
      * 音频语言类别检测结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    LanguageResults: Array<AudioResultDetailLanguageResult>;
}
/**
 * 音频呻吟审核结果
 */
export interface AudioResultDetailMoanResult {
    /**
      * 固定为Moan
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 分数
      */
    Score: number;
    /**
      * 开始时间
      */
    StartTime: number;
    /**
      * 结束时间
      */
    EndTime: number;
    /**
      * 子标签码
      */
    SubLabelCode: string;
}
/**
 * 任务数据
 */
export interface TaskData {
    /**
      * 输入的数据ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId: string;
    /**
      * 任务ID
      */
    TaskId: string;
    /**
      * 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED
      */
    Status: string;
    /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizType: string;
    /**
      * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 建议，可选：Pass， Block 和 Review
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 任务违规标签
      */
    Labels: Array<TaskLabel>;
    /**
      * 媒体信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MediaInfo: MediaInfo;
    /**
      * 创建时间（ iso 8601 格式）
      */
    CreatedAt: string;
    /**
      * 更新时间（ iso 8601 格式）
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedAt: string;
}
/**
 * 媒体类型
 */
export interface MediaInfo {
    /**
      * 流检测时分片时长
注意：此字段可能返回 0，表示取不到有效值。
      */
    Duration: number;
}
/**
 * 声音段信息
 */
export interface AudioSegments {
    /**
      * 截帧时间。
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
注意：此字段可能返回 null，表示取不到有效值。
      */
    OffsetTime: string;
    /**
      * 结果集
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: AudioResult;
}
/**
 * 图片详情位置信息
 */
export interface ImageResultsResultDetailLocation {
    /**
      * x坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    X: number;
    /**
      * y坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Y: number;
    /**
      * 宽度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Width: number;
    /**
      * 高度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Height: number;
    /**
      * 旋转角度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rotate: number;
}
/**
 * Result结果详情
 */
export interface ImageResult {
    /**
      * 违规标志
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
      */
    HitFlag: number;
    /**
      * 命中的标签
Porn 色情
Sexy 性感
Illegal 违法
Abuse 谩骂
Ad 广告
以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 画面截帧图片结果集
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<ImageResultResult>;
    /**
      * 图片URL地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 附加字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    Extra: string;
}
