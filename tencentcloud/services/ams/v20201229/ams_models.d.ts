/**
 * 音频文本内容审核结果
 */
export interface TextResult {
    /**
     * 恶意标签，Normal：正常，Porn：色情，Abuse：谩骂，Ad：广告。
  以及其他令人反感、不安全或不适宜的内容类型。
  
  如音频中无复杂类型「TextResults」的返回则代表该音频中无相关违规内容；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label?: string;
    /**
     * 命中的关键词，为空则代表该违规内容出自于模型的判断；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Keywords?: Array<string>;
    /**
     * 命中关键词库的库标识；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LibId?: string;
    /**
     * 命中关键词库的名字；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LibName?: string;
    /**
     * 机器判断当前分类的置信度，取值范围：0~100。分数越高，表示越有可能属于当前分类。
  （如：Porn 99，则该样本属于色情的置信度非常高。）
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: number;
    /**
     * 建议您拿到判断结果后的执行操作。
  建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion?: string;
    /**
     * 自定义词库的类型，自定义词库相关的信息可登录控制台中查看；
  
  1：自定义黑白库；
  
  2：自定义库；
     */
    LibType?: number;
    /**
     * 该字段用于返回当前标签（Lable）下的二级标签。
  注意：此字段可能返回null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubLabel?: string;
}
/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
    /**
     * 该参数表示任务列表每页展示的任务条数，**默认值为10**（每页展示10条任务）。
     */
    Limit?: number;
    /**
     * 该参数表示任务筛选器的输入参数，可根据业务类型、审核文件类型、处理建议及任务状态筛选想要查看的审核任务，具体参数内容请参见TaskFilter数据结构的详细描述。
     */
    Filter?: TaskFilter;
    /**
     * 该参数表示翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。
     */
    PageToken?: string;
    /**
     * 该参数表示任务列表的开始时间，格式为ISO8601标准的时间戳。**默认值为最近3天**，若传入该参数，则在这一时间到EndTime之间的任务将会被筛选出来。<br>备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。
     */
    StartTime?: string;
    /**
     * 该参数表示任务列表的结束时间，格式为ISO8601标准的时间戳。**默认值为空**，若传入该参数，则在这StartTime到这一时间之间的任务将会被筛选出来。<br>备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。
     */
    EndTime?: string;
}
/**
 * 音频说话人声纹识别返回结果
 */
export interface AudioResultDetailSpeakerResult {
    /**
     * 该字段用于返回检测结果需要检测的内容类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 该字段用于返回呻吟检测的置信度，取值范围：0（置信度最低）-100（置信度最高），越高代表音频越有可能属于说话人声纹。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score: number;
    /**
     * 该字段用于返回对应说话人的片段在音频文件内的开始时间，单位为秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: number;
    /**
     * 该字段用于返回对应说话人的片段在音频文件内的结束时间，单位为秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: number;
}
/**
 * CreateAudioModerationSyncTask请求参数结构体
 */
export interface CreateAudioModerationSyncTaskRequest {
    /**
     * Biztype为策略的具体的编号，用于接口调度，在内容安全控制台中可配置。不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；调用时不传入Biztype代表采用默认的识别策略。
     */
    BizType: string;
    /**
     * 数据标识，可以由英文字母、数字、下划线、-、@#组成，不超过64个字符
     */
    DataId: string;
    /**
     * 音频文件资源格式，当前支持格式：wav、mp3、m4a，请按照实际文件格式填入。
     */
    FileFormat: string;
    /**
     * 文件名称，可以由英文字母、数字、下划线、-、@#组成，不超过64个字符
     */
    Name?: string;
    /**
     * 数据Base64编码，短音频同步接口仅传入可音频内容；
  支持范围：文件大小不能超过5M，时长不可超过60s；
  支持格式：wav (PCM编码)、mp3、m4a (采样率：16kHz~48kHz，位深：16bit 小端，声道数：单声道/双声道，建议格式：16kHz/16bit/单声道)。
     */
    FileContent?: string;
    /**
     * 音频资源访问链接，与FileContent参数必须二选一输入；
  支持范围及格式：同FileContent；
     */
    FileUrl?: string;
}
/**
 * 文件桶信息
参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352
 */
export interface BucketInfo {
    /**
     * 该字段用于标识腾讯云对象存储的存储桶名称,关于文件桶的详细信息敬请参考 [腾讯云存储相关说明](https://cloud.tencent.com/document/product/436/44352)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket: string;
    /**
     * 该字段用于标识腾讯云对象存储的托管机房的分布地区，对象存储 COS 的数据存放在这些地域的存储桶中。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region: string;
    /**
     * 该字段用于标识腾讯云对象存储的对象Key,对象作为基本单元被存放在存储桶中；用户可以通过腾讯云控制台、API、SDK 等多种方式管理对象。有关对象的详细描述敬请参阅相应 [产品文档](https://cloud.tencent.com/document/product/436/13324)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Object: string;
}
/**
 * CreateAudioModerationTask返回参数结构体
 */
export interface CreateAudioModerationTaskResponse {
    /**
     * 该字段用于返回任务创建的结果，具体输出内容请参见TaskResult数据结构的详细描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Results?: Array<TaskResult>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 创建任务时的返回结果
 */
export interface TaskResult {
    /**
     * 该字段用于返回创建音频审核任务时在TaskInput结构内传入的DataId，用于标识具体审核任务。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataId: string;
    /**
     * 该字段用于返回音频审核任务所生成的任务ID，用于标识具体审核任务，方便后续查询和管理。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId: string;
    /**
     * 该字段用于返回任务创建的状态，如返回OK则代表任务创建成功，其他返回值可参考公共错误码。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Code: string;
    /**
     * **仅在Code的返回值为错误码时生效**，用于返回错误的详情内容。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message: string;
}
/**
 * CancelTask请求参数结构体
 */
export interface CancelTaskRequest {
    /**
     * 该字段表示创建音频审核任务后返回的任务ID（在Results参数中），用于标识需要取消的审核任务。
     */
    TaskId: string;
}
/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
    /**
     * 该字段用于返回创建音频审核任务后返回的任务ID（在Results参数中），用于标识需要查询任务详情的审核任务。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: string;
    /**
     * 该字段用于返回调用音频审核接口时在Tasks参数内传入的数据ID参数，方便数据的辨别和管理。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataId?: string;
    /**
     * 该字段用于返回调用音频审核接口时传入的BizType参数，方便数据的辨别和管理。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizType?: string;
    /**
     * 该字段用于返回调用音频审核接口时传入的TaskInput参数中的任务名称，方便任务的识别与管理。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 该字段用于返回所查询内容的任务状态。
  <br>取值：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 该字段用于返回调用音频审核接口时输入的音频审核类型，取值为：**AUDIO**（点播音频）和**LIVE_AUDIO**（直播音频），默认值为AUDIO。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion?: string;
    /**
     * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<TaskLabel>;
    /**
     * 该字段用于返回审核服务的媒体内容信息，主要包括传入文件类型和访问地址。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputInfo?: InputInfo;
    /**
     * 该字段用于返回音频文件识别出的对应文本内容，最大支持**前1000个字符**。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioText?: string;
    /**
     * 该字段用于返回音频片段的审核结果，主要包括开始时间和音频审核的相应结果。<br>具体输出内容请参见AudioSegments及AudioResult数据结构的详细描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioSegments?: Array<AudioSegments>;
    /**
     * 当任务状态为Error时，该字段用于返回对应错误的类型；任务状态非Error时，默认返回为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorType?: string;
    /**
     * 当任务状态为Error时，该字段用于返回对应错误的详细描述，任务状态非Error时默认返回为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorDescription?: string;
    /**
     * 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedAt?: string;
    /**
     * 该字段用于返回被查询任务最后更新时间，格式采用 ISO 8601标准。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedAt?: string;
    /**
     * 该字段用于返回检测结果所对应的标签。如果未命中恶意，返回Normal，如果命中恶意，则返回Labels中优先级最高的标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label?: string;
    /**
     * 媒体信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MediaInfo?: MediaInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CreateAudioModerationTask请求参数结构体
 */
export interface CreateAudioModerationTaskRequest {
    /**
     * 该字段表示输入的音频审核任务信息，具体输入内容请参见TaskInput数据结构的详细描述。<br> 备注：最多同时可创建**10个任务**。
     */
    Tasks: Array<TaskInput>;
    /**
     * 该字段表示策略的具体编号，用于接口调度，在内容安全控制台中可配置。若不传入Biztype参数（留空），则代表采用默认的识别策略；传入则会在审核时根据业务场景采取不同的审核策略。<br>备注：Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。
     */
    BizType?: string;
    /**
     * 该字段表示输入的音频审核类型，取值为：**AUDIO**（点播音频）和 **LIVE_AUDIO**（直播音频），默认值为AUDIO。
     */
    Type?: string;
    /**
     * 验证签名参数，具体可以参考[验签说明](https://cloud.tencent.com/document/product/1219/104000#42dd87d2-580f-46cf-a953-639a787d1eda)。
     */
    Seed?: string;
    /**
     * 接收审核信息回调地址。如果设置了该字段，在审核过程中发现违规音频片段结果将发送至该接口。更多详情请参阅[回调配置说明](https://cloud.tencent.com/document/product/1219/104000)。
     */
    CallbackUrl?: string;
    /**
     * 该字段表示待检测对象对应的用户相关信息，若填入则可甄别相应违规风险用户
     */
    User?: User;
}
/**
 * 音视频任务数据结构
 */
export interface TaskInput {
    /**
     * 选填参数，该字段表示您为待检测对象分配的数据ID，传入后可方便您对文件进行标识和管理。<br>取值：由英文字母（大小写均可）、数字及四个特殊符号（_，-，@，#）组成，**长度不超过64个字符**。
     */
    DataId?: string;
    /**
     * 选填参数，该字段表示音频审核任务所对应的任务名称，方便后续查询和管理审核任务。
     */
    Name?: string;
    /**
     * 必填参数，该字段表示审核文件的访问参数，用于获取审核媒体文件，该参数内包括访问类型和访问地址。
     */
    Input?: StorageInfo;
}
/**
 * 歌曲识别结果
 */
export interface LabelResults {
    /**
     * 场景
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Scene?: string;
    /**
     * 建议
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion?: number;
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label?: string;
    /**
     * 名称：歌曲名，语种名，说话人名 等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 得分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: number;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: number;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: number;
}
/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
    /**
     * 该字段表示创建音频审核任务后返回的任务ID（在Results参数中），用于标识需要查询任务详情的审核任务。
  <br>备注：查询接口单次最大查询量为**20条每次**。
     */
    TaskId: string;
    /**
     * 该布尔字段表示是否展示全部的音频片段，取值：True(展示全部的音频分片)、False(只展示命中审核规则的音频分片)；默认值为False。
     */
    ShowAllSegments?: boolean;
}
/**
 * CreateAudioModerationSyncTask返回参数结构体
 */
export interface CreateAudioModerationSyncTaskResponse {
    /**
     * 请求接口时传入的数据标识
     */
    DataId?: string;
    /**
     * 文件名称，可以由英文字母、数字、下划线、-、@#组成，不超过64个字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * Biztype为策略的具体的编号，用于接口调度，在内容安全控制台中可配置。不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；调用时不传入Biztype代表采用默认的识别策略。
     */
    BizType?: string;
    /**
     * 智能审核服务对于内容违规类型的等级，可选值：
  Pass 建议通过；
  Reveiw 建议复审；
  Block 建议屏蔽；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion?: string;
    /**
     * 智能审核服务对于内容违规类型的判断，详见返回值列表
  如：Label：Porn（色情）；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label?: string;
    /**
     * 音频文本，备注：这里的文本最大只返回前1000个字符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AsrText?: string;
    /**
     * 音频中对话内容审核结果；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TextResults?: Array<TextResult>;
    /**
     * 音频中低俗内容审核结果；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MoanResults?: Array<MoanResult>;
    /**
     * 该字段用于返回当前标签（Lable）下的二级标签。
  注意：此字段可能返回null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubLabel?: string;
    /**
     * 该字段用于返回音频小语种检测的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LanguageResults?: Array<AudioResultDetailLanguageResult>;
    /**
     * 音频中说话人识别返回结果；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpeakerResults?: Array<AudioResultDetailSpeakerResult>;
    /**
     * 识别类标签结果信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecognitionResults?: Array<RecognitionResult>;
    /**
     * 识别音频时长，单位为毫秒；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Duration?: string;
    /**
     * 是否命中(0:否, 1: 是)
     */
    HitFlag?: number;
    /**
     * 得分
     */
    Score?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * User结果
 */
export interface User {
    /**
     * 用户等级，默认0 未知 1 低 2 中 3 高
     */
    Level?: number;
    /**
     * 性别 默认0 未知 1 男性 2 女性
     */
    Gender?: number;
    /**
     * 年龄 默认0 未知
     */
    Age?: number;
    /**
     * 业务用户ID 如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。
     */
    UserId?: string;
    /**
     * 手机号
     */
    Phone?: string;
    /**
     * 业务用户ID类型 "1-微信uin 2-QQ号 3-微信群uin 4-qq群号 5-微信openid 6-QQopenid 7-其它string"
     */
    AccountType?: string;
    /**
     * 用户昵称
     */
    Nickname?: string;
    /**
     * 用户头像图片链接
     */
    HeadUrl?: string;
    /**
     * 用户简介，长度不超过5000字
     */
    Desc?: string;
    /**
     * 群聊场景房间ID
     */
    RoomId?: string;
    /**
     * 群聊场景群ID
     */
    GroupId?: string;
    /**
     * 群聊场景群用户数
     */
    GroupSize?: number;
    /**
     * 消息接收者ID
     */
    ReceiverId?: string;
    /**
     * 消息生成时间，毫秒
     */
    SendTime?: string;
}
/**
 * 用于返回审核任务输出的标签
 */
export interface TaskLabel {
    /**
     * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 该字段用于返回当前标签对应的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容；*色情 0*，则表明该文本不属于色情内容。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score: number;
    /**
     * 该字段用于返回当前标签（Lable）下的二级标签。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubLabel: string;
}
/**
 * 任务筛选器
 */
export interface TaskFilter {
    /**
     * 该字段用于传入任务对应的业务类型供筛选器进行筛选。Biztype为策略的具体的编号，用于接口调度，在内容安全控制台中可配置。不同Biztype关联不同的业务场景与审核策略，调用前请确认正确的Biztype。Biztype仅为**数字、字母与下划线的组合**，长度为3-32个字符。<br>备注：在不传入该参数时筛选器默认不筛选业务类型。
     */
    BizType?: string;
    /**
     * 该字段用于传入音频审核对应的任务类型供筛选器进行筛选，取值为：**VIDEO**（点播视频审核），**AUDIO**（点播音频审核）， **LIVE_VIDEO**（直播视频审核）, **LIVE_AUDIO**（直播音频审核）。<br>备注：在不传入该参数时筛选器默认不筛选任务类型。
     */
    Type?: string;
    /**
     * 该字段用于传入音频审核对应的建议操作供筛选器进行筛选，取值为：**Block**：建议屏蔽，**Review**：建议人工复审，**Pass**：建议通过。<br>备注：在不传入该参数时筛选器默认不筛选建议操作。
     */
    Suggestion?: string;
    /**
     * 该字段用于传入审核任务的任务状态供筛选器进行筛选，取值为：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。<br>备注：在不传入该参数时筛选器默认不筛选任务状态。
     */
    TaskStatus?: string;
}
/**
 * 输入信息详情
 */
export interface InputInfo {
    /**
     * 该字段表示文件访问类型，取值为**URL**（资源链接）和**COS** (腾讯云对象存储)。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type: string;
    /**
     * 该字段表示文件访问的链接地址，格式为标准URL格式。<br> 备注：当Type为URL时此字段不为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Url: string;
    /**
     * 该字段表示文件访问的腾讯云存储桶信息。<br> 备注：当Type为COS时此字段不为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BucketInfo: BucketInfo;
}
/**
 * 用于表示数据存储的相关信息
 */
export interface StorageInfo {
    /**
     * 该字段表示文件访问类型，取值为**URL**（资源链接）和**COS** (腾讯云对象存储)；该字段应当与传入的访问类型相对应，可用于强校验并方便系统快速识别访问地址；若不传入此参数，则默认值为URL，此时系统将自动判定访问地址类型。
     */
    Type?: string;
    /**
     * 该字段表示文件访问的链接地址，格式为标准URL格式。<br> 备注：当Type为URL时此字段不为空，该参数与BucketInfo参数须传入其中之一
     */
    Url?: string;
    /**
     * 该字段表示文件访问的腾讯云存储桶信息。<br> 备注：当Type为COS时此字段不为空，该参数与Url参数须传入其中之一。
     */
    BucketInfo?: BucketInfo;
}
/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
    /**
     * 该字段用于返回当前查询的任务总量，格式为int字符串。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Total?: string;
    /**
     * 该字段用于返回当前页的任务详细数据，具体输出内容请参见TaskData数据结构的详细描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: Array<TaskData>;
    /**
     * 该字段用于返回翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PageToken?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音频语言种类检测结果
 */
export interface AudioResultDetailLanguageResult {
    /**
     * 该字段用于返回对应的语言种类信息。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 该参数用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于当前返回的语种标签；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score: number;
    /**
     * 该参数用于返回对应语种标签的片段在音频文件内的开始时间，单位为秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: number;
    /**
     * 该参数用于返回对应语种标签的片段在音频文件内的结束时间，单位为秒。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: number;
    /**
     * *内测中，敬请期待*
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubLabelCode: string;
}
/**
 * 识别类标签结果信息
 */
export interface RecognitionResult {
    /**
     * 可能的取值有：Teenager 、Gender
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 识别标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<Tag>;
}
/**
 * 呻吟低俗检测结果
 */
export interface MoanResult {
    /**
     * 固定取值为Moan（呻吟/娇喘），如音频中无复杂类型「MoanResult」的返回则代表该音频中无呻吟/娇喘相关违规内容；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label?: string;
    /**
     * 机器判断当前分类的置信度，取值范围：0~100。分数越高，表示越有可能属于当前分类。
  （如：Moan 99，则该样本属于呻吟/娇喘的置信度非常高。）
     */
    Score?: number;
    /**
     * 建议您拿到判断结果后的执行操作。
  建议值，Block：建议屏蔽，Review：建议复审，Pass：建议通过
     */
    Suggestion?: string;
    /**
     * 违规事件开始时间，单位为秒（s）；
     */
    StartTime?: number;
    /**
     * 违规事件结束时间，单位为秒（s）；
     */
    EndTime?: number;
    /**
     * 该字段用于返回当前标签（Lable）下的二级标签。
  注意：此字段可能返回null，表示取不到有效值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubLabel?: string;
}
/**
 * CancelTask返回参数结构体
 */
export interface CancelTaskResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 音频ASR文本审核结果
 */
export interface AudioResultDetailTextResult {
    /**
     * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label: string;
    /**
     * 该字段用于返回ASR识别出的文本内容命中的关键词信息，用于标注内容违规的具体原因（如：加我微信）。该参数可能会有多个返回值，代表命中的多个关键词；若返回值为空，Score不为空，则代表识别结果所对应的恶意标签（Label）来自于语义模型判断的返回值。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Keywords: Array<string>;
    /**
     * 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LibId: string;
    /**
     * 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的名称,以方便自定义库管理和配置。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LibName: string;
    /**
     * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score: number;
    /**
     * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
  返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion: string;
    /**
     * 该字段用于返回自定义关键词对应的词库类型，取值为**1**（黑白库）和**2**（自定义关键词库），若未配置自定义关键词库,则默认值为1（黑白库匹配）。
     */
    LibType: number;
    /**
     * 该字段用于返回当前标签（Lable）下的二级标签。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubLabel: string;
}
/**
 * 说话人结果
 */
export interface SpeakerResults {
    /**
     * 标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label?: string;
    /**
     * 得分
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: number;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: number;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: string;
}
/**
 * 出行结果
 */
export interface TravelResults {
    /**
     * 一级标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label?: string;
    /**
     * 二级标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubLabel?: string;
    /**
     * 风险等级
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskLevel?: string;
    /**
     * 出行音频角色
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioRole?: string;
    /**
     * 出行语音文本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AudioText?: string;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime?: number;
    /**
     * 结束时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime?: number;
}
/**
 * 音频审核输出参数
 */
export interface AudioResult {
    /**
     * 该字段用于返回审核内容是否命中审核模型；取值：0（**未命中**）、1（**命中**）。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HitFlag?: number;
    /**
     * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label?: string;
    /**
     * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
  返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion?: string;
    /**
     * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score?: number;
    /**
     * 该字段用于返回音频文件经ASR识别后的文本信息。最长可识别**5小时**的音频文件，若超出时长限制，接口将会报错。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Text?: string;
    /**
     * 该字段用于返回审核结果的访问链接（URL）。<br>备注：链接默认有效期为12小时。如果您需要更长时效的链接，请使用[COS预签名](https://cloud.tencent.com/document/product/1265/104001)功能更新签名时效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Url?: string;
    /**
     * 该字段用于返回音频文件的时长，单位为毫秒。
     */
    Duration?: string;
    /**
     * 该字段用于返回额外附加信息，不同客户或Biztype下返回信息不同。
     */
    Extra?: string;
    /**
     * 该字段用于返回音频文件经ASR识别后产生的文本的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
     */
    TextResults?: Array<AudioResultDetailTextResult>;
    /**
     * 该字段用于返回音频文件呻吟检测的详细审核结果。具体结果内容请参见AudioResultDetailMoanResult数据结构的细节描述。
     */
    MoanResults?: Array<AudioResultDetailMoanResult>;
    /**
     * 该字段用于返回音频小语种检测的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
     */
    LanguageResults?: Array<AudioResultDetailLanguageResult>;
    /**
     * 该字段用于返回当前标签（Lable）下的二级标签。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubLabel?: string;
    /**
     * 识别类标签结果信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RecognitionResults?: Array<RecognitionResult>;
    /**
     * 说话人结果
     */
    SpeakerResults?: Array<SpeakerResults>;
    /**
     * 歌曲识别结果
     */
    LabelResults?: Array<LabelResults>;
    /**
     * 出行结果
     */
    TravelResults?: Array<TravelResults>;
}
/**
 * 音频呻吟审核结果
 */
export interface AudioResultDetailMoanResult {
    /**
     * 该字段用于返回检测结果需要检测的内容类型，此处固定为**Moan**（呻吟）以调用呻吟检测功能。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Label?: string;
    /**
     * 该字段用于返回呻吟检测的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于呻吟内容。
     */
    Score?: number;
    /**
     * 该字段用于返回对应呻吟标签的片段在音频文件内的开始时间，单位为秒。
     */
    StartTime?: number;
    /**
     * 该字段用于返回对应呻吟标签的片段在音频文件内的结束时间，单位为秒。
     */
    EndTime?: number;
    /**
     * *内测中，敬请期待*
     * @deprecated
     */
    SubLabelCode?: string;
    /**
     * 该字段用于返回当前标签（Lable）下的二级标签。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubLabel?: string;
    /**
     * 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
     */
    Suggestion?: string;
}
/**
 * 任务数据
 */
export interface TaskData {
    /**
     * 该字段用于返回音频审核任务数据所对应的数据ID，方便后续查询和管理审核任务。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataId?: string;
    /**
     * 该字段用于返回音频审核任务所生成的任务ID，用于标识具体审核任务，方便后续查询和管理。
     */
    TaskId?: string;
    /**
     * 该字段用于返回所查询内容的任务状态。
  <br>取值：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。
     */
    Status?: string;
    /**
     * 该字段用于返回音频审核任务所对应的任务名称，方便后续查询和管理审核任务。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name?: string;
    /**
     * 该字段用于返回调用音频审核接口时传入的BizType参数，方便数据的辨别和管理。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BizType?: string;
    /**
     * 该字段用于返回调用音频审核接口时输入的音频审核类型，取值为：**AUDIO**（点播音频）和**LIVE_AUDIO**（直播音频），默认值为AUDIO。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Suggestion?: string;
    /**
     * 输入信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MediaInfo?: MediaInfo;
    /**
     * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<TaskLabel>;
    /**
     * 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。
     */
    CreatedAt?: string;
    /**
     * 该字段用于返回被查询任务最后更新时间，格式采用 ISO 8601标准。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdatedAt?: string;
    /**
     * 任务信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputInfo?: InputInfo;
}
/**
 * 媒体类型
 */
export interface MediaInfo {
    /**
     * 该字段用于返回传入的媒体文件的编码格式，如wav、mp3、aac、flac、amr、3gp、 m4a、wma、ogg、ape等。
     */
    Codecs: string;
    /**
     * 该字段用于返回对传入的流媒体文件进行分片的片段时长，单位为毫秒。**默认值为15秒**，支持用户自定义配置。
     */
    Duration: number;
    /**
     * *内测中，敬请期待*
     */
    Width: number;
    /**
     * *内测中，敬请期待*
     */
    Height: number;
    /**
     * *内测中，敬请期待*
     */
    Thumbnail: string;
}
/**
 * 音频切片识别标签
 */
export interface Tag {
    /**
     * 根据Label字段确定具体名称：
  当Label 为Teenager 时 Name可能取值有：Teenager
  当Label 为Gender 时 Name可能取值有：Male 、Female
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 置信分：0～100，数值越大表示置信度越高
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Score: number;
    /**
     * 识别开始偏移时间，单位：毫秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StartTime: number;
    /**
     * 识别结束偏移时间，单位：毫秒
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EndTime: number;
}
/**
 * 表示声音段信息
 */
export interface AudioSegments {
    /**
     * 该字段用于返回音频片段的开始时间，单位为秒。对于点播文件，该参数代表对应音频相对于完整音轨的偏移时间，如0（代表不偏移），5（音轨开始后5秒），10（音轨开始后10秒）；对于直播文件，该参数则返回对应音频片段开始时的Unix时间戳，如：1594650717。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OffsetTime?: string;
    /**
     * 该字段用于返回音频片段的具体审核结果，详细内容敬请参考AudioResult数据结构的描述。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Result?: AudioResult;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreatedAt?: string;
}
