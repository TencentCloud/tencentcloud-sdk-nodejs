/**
 * SubmitDrawPortraitJob返回参数结构体
 */
export interface SubmitDrawPortraitJobResponse {
    /**
     * 提交生成写真图片任务 ID。
  
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * logo参数
 */
export interface LogoParam {
    /**
     * 水印url
     */
    LogoUrl?: string;
    /**
     * 水印base64，url和base64二选一传入
     */
    LogoImage?: string;
    /**
     * 水印图片位于融合结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配
     */
    LogoRect?: LogoRect;
}
/**
 * ImageToImage请求参数结构体
 */
export interface ImageToImageRequest {
    /**
     * 输入图 Base64 数据。
  算法将根据输入的图片，结合文本描述智能生成与之相关的图像。
  Base64 和 Url 必须提供一个，如果都提供以 Base64 为准。
  图片限制：单边分辨率小于5000且大于50，转成 Base64 字符串后小于 8MB。
     */
    InputImage?: string;
    /**
     * 输入图 Url。
  算法将根据输入的图片，结合文本描述智能生成与之相关的图像。
  Base64 和 Url 必须提供一个，如果都提供以 Base64 为准。
  图片限制：单边分辨率小于5000且大于50，转成 Base64 字符串后小于8MB。
     */
    InputUrl?: string;
    /**
     * 文本描述。
  用于在输入图的基础上引导生成图效果，增加生成结果中出现描述内容的可能。
  推荐使用中文。最多支持256个 utf-8 字符。
     */
    Prompt?: string;
    /**
     * 反向文本描述。
  用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。
  推荐使用中文。最多可传256个 utf-8 字符。
     */
    NegativePrompt?: string;
    /**
     * 绘画风格。
  请在  [图像风格化风格列表](https://cloud.tencent.com/document/product/1668/86250) 中选择期望的风格，传入风格编号。
  推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。
     */
    Styles?: Array<string>;
    /**
     * 生成图结果的配置，包括输出图片分辨率和尺寸等。
  支持生成以下分辨率的图片：origin（与输入图分辨率一致，长边最高为2000，超出将做等比例缩小）、768:768（1:1）、768:1024（3:4）、1024:768（4:3）。
  不传默认使用origin。
     */
    ResultConfig?: ResultConfig;
    /**
     * 为生成结果图添加标识的开关，默认为1。
  1：添加标识。
  0：不添加标识。
  其他数值：默认按1处理。
  建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。
     */
    LogoAdd?: number;
    /**
     * 标识内容设置。
  默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
     */
    LogoParam?: LogoParam;
    /**
     * 生成自由度。
  Strength 值越小，生成图和原图越接近，取值范围(0, 1]，不传使用模型内置的默认值。
  推荐的取值范围为0.6 - 0.8。
     */
    Strength?: number;
    /**
     * 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。
     */
    RspImgType?: string;
}
/**
 * QueryTextToImageProJob返回参数结构体
 */
export interface QueryTextToImageProJobResponse {
    /**
     * 当前任务状态码：
  1：等待中、2：运行中、4：处理失败、5：处理完成。
     */
    JobStatusCode?: string;
    /**
     * 当前任务状态：排队中、处理中、处理失败或者处理完成。
  
     */
    JobStatusMsg?: string;
    /**
     * 任务处理失败错误码。
  
     */
    JobErrorCode?: string;
    /**
     * 任务处理失败错误信息。
  
     */
    JobErrorMsg?: string;
    /**
     * 生成图 URL 列表，有效期1小时，请及时保存。
  
     */
    ResultImage?: Array<string>;
    /**
     * 结果 detail 数组，Success 代表成功。
  
     */
    ResultDetails?: Array<string>;
    /**
     * 对应 SubmitTextToImageProJob 接口中 Revise 参数。开启扩写时，返回扩写后的 prompt 文本。 如果关闭扩写，将直接返回原始输入的 prompt。
     */
    RevisedPrompt?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadTrainPortraitImages请求参数结构体
 */
export interface UploadTrainPortraitImagesRequest {
    /**
     * 写真模型 ID。由英文大小写字母、数字及下划线组成。
  用于唯一标识一个写真模型，一个写真模型只能用于一个人物的写真图片生成。
     */
    ModelId: string;
    /**
     * 写真模型训练用的基础图像 URL，用于固定写真模型可生成的人物。
  图片数量：1张。
  图片内容：单人，脸部清晰。
  图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。
  
     */
    BaseUrl?: string;
    /**
     * 写真模型训练用的图像 URL 列表。
  图片数量：19 - 24 张。
  图片内容：单人，脸部清晰，和基础图像中的人物为同一人。
  图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。
  
     */
    Urls?: Array<string>;
    /**
     * 训练图像质量过滤开关配置。
  支持开启或关闭对训练图像分辨率下限、脸部区域大小、脸部遮挡的过滤，默认开启以上过滤。
  如果训练图像内包含多人脸或无人脸、和 Base 人像不为同一人也将被过滤，不可关闭该过滤条件。
  建议：关闭以上过滤可能导致写真生成效果受损，建议使用单人、正脸、脸部区域占比较大、脸部清晰无遮挡、无大角度偏转、无夸张表情的图像进行训练。
     */
    Filter?: Filter;
    /**
     * 是否开启快速训练模式。
  默认不开启。开启后只需要在 BaseUrl 中传入1张图片，Urls.N 中无需传入图片。
  0：不开启
  1：开启
     */
    TrainMode?: number;
}
/**
 * 返回结果配置
 */
export interface ResultConfig {
    /**
     * 生成图分辨率
  
  智能文生图支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3）、1080:1920（9:16）、1920:1080（16:9），不传默认使用768:768。
  
  智能图生图支持生成以下分辨率的图片：origin（与输入图分辨率一致，长边最高为2000，超出将做等比例缩小）、768:768（1:1）、768:1024（3:4）、1024:768（4:3），不传默认使用origin，如果指定生成的长宽比与输入图长宽比差异过大可能导致图片内容被裁剪。
     */
    Resolution?: string;
}
/**
 * QueryTrainPortraitModelJob请求参数结构体
 */
export interface QueryTrainPortraitModelJobRequest {
    /**
     * 写真模型 ID。
  
     */
    ModelId: string;
}
/**
 * SubmitTextToImageProJob请求参数结构体
 */
export interface SubmitTextToImageProJobRequest {
    /**
     * 文本描述。
  算法将根据输入的文本智能生成与之相关的图像。
  不能为空，推荐使用中文。最多可传100个 utf-8 字符。
     */
    Prompt: string;
    /**
     * 绘画风格。
  请在 [文生图（高级版）风格列表](https://cloud.tencent.com/document/product/1668/104567) 中选择期望的风格，传入风格编号。
  不传默认不指定风格。
     */
    Style?: string;
    /**
     * 生成图分辨率。
  支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3），不传默认使用1024:1024。
     */
    Resolution?: string;
    /**
     * 为生成结果图添加显式水印标识的开关，默认为1。
  1：添加。
  0：不添加。
  其他数值：默认按1处理。
  建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。
     */
    LogoAdd?: number;
    /**
     * 文生图模型，默认使用engine1。
  取值：
  engine1
  engine2
     */
    Engine?: string;
    /**
     * prompt 扩写开关。1为开启，0为关闭，不传默认开启。
  开启扩写后，将自动扩写原始输入的 prompt 并使用扩写后的 prompt 生成图片，返回生成图片结果时将一并返回扩写后的 prompt 文本。
  如果关闭扩写，将直接使用原始输入的 prompt 生成图片。
  建议开启，在多数场景下可提升生成图片效果、丰富生成图片细节。
     */
    Revise?: number;
}
/**
 * QueryDrawPortraitJob返回参数结构体
 */
export interface QueryDrawPortraitJobResponse {
    /**
     * 任务状态码。
  INIT: 初始化、WAIT：等待中、RUN：运行中、FAIL：处理失败、DONE：处理完成。
     */
    JobStatusCode?: string;
    /**
     * 任务状态信息。
     */
    JobStatusMsg?: string;
    /**
     * 任务错误码。
     */
    JobErrorCode?: string;
    /**
     * 任务错误信息。
     */
    JobErrorMsg?: string;
    /**
     * 结果 URL 数组。
  URL 有效期1小时，请及时保存。
     */
    ResultUrls?: Array<string>;
    /**
     * 结果描述数组。
     */
    ResultDetails?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryTrainPortraitModelJob返回参数结构体
 */
export interface QueryTrainPortraitModelJobResponse {
    /**
     * 任务状态码。
  INIT: 初始化、WAIT：等待中、RUN：运行中、FAIL：处理失败、DONE：处理完成。
     */
    JobStatusCode?: string;
    /**
     * 任务状态信息。
     */
    JobStatusMsg?: string;
    /**
     * 任务错误码。
     */
    JobErrorCode?: string;
    /**
     * 任务错误信息。
     */
    JobErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitTextToImageProJob返回参数结构体
 */
export interface SubmitTextToImageProJobResponse {
    /**
     * 任务 ID。
     */
    JobId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitTrainPortraitModelJob请求参数结构体
 */
export interface SubmitTrainPortraitModelJobRequest {
    /**
     * 在上传写真训练图片时指定的写真模型 ID。
  每个 AI 写真模型自训练完成起1年内有效，有效期内可使用模型生成图片，期满后需要重新训练模型。
  
     */
    ModelId: string;
}
/**
 * TextToImage请求参数结构体
 */
export interface TextToImageRequest {
    /**
     * 文本描述。
  算法将根据输入的文本智能生成与之相关的图像。建议详细描述画面主体、细节、场景等，文本描述越丰富，生成效果越精美。
  不能为空，推荐使用中文。最多可传256个 utf-8 字符。
     */
    Prompt: string;
    /**
     * 反向文本描述。
  用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。
  推荐使用中文。最多可传256个 utf-8 字符。
     */
    NegativePrompt?: string;
    /**
     * 绘画风格。
  请在 [智能文生图风格列表](https://cloud.tencent.com/document/product/1668/86249) 中选择期望的风格，传入风格编号。
  推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。
     */
    Styles?: Array<string>;
    /**
     * 生成图结果的配置，包括输出图片分辨率和尺寸等。
  
  支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3）、1080:1920（9:16）、1920:1080（16:9），不传默认使用768:768。
  
     */
    ResultConfig?: ResultConfig;
    /**
     * 为生成结果图添加标识的开关，默认为1。
  1：添加标识。
  0：不添加标识。
  其他数值：默认按1处理。
  建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。
     */
    LogoAdd?: number;
    /**
     * 标识内容设置。
  默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
     */
    LogoParam?: LogoParam;
    /**
     * 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。
     */
    RspImgType?: string;
}
/**
 * 输入框
 */
export interface LogoRect {
    /**
     * 左上角X坐标
     */
    X?: number;
    /**
     * 左上角Y坐标
     */
    Y?: number;
    /**
     * 方框宽度
     */
    Width?: number;
    /**
     * 方框高度
     */
    Height?: number;
}
/**
 * 训练图像质量过滤开关配置。
支持开启或关闭对训练图像分辨率下限、脸部区域大小、脸部遮挡、脸部角度的过滤，默认开启以上过滤。
如果训练图像内包含多人脸或无人脸、和 Base 人像不为同一人也将被过滤，不可关闭该过滤条件。
建议：关闭以上过滤可能导致写真生成效果受损，建议使用单人、正脸、脸部清晰、无遮挡、无夸张表情、脸部区域占比较大的图像进行训练。
 */
export interface Filter {
    /**
     * 过滤不满足分辨率下限的训练图像，默认开启过滤
  开启后将过滤横边<512或竖边<720的图片，横、竖边上限均为2000，不支持调整
  
  1：开启过滤
  0：关闭过滤
     */
    Resolution?: number;
    /**
     * 过滤脸部区域过小的训练图像，默认开启过滤
  
  1：开启过滤
  0：关闭过滤
     */
    Size?: number;
    /**
     * 过滤脸部存在明显遮挡、偏转角度过大等质量较差的训练图像，默认开启过滤
  
  1：开启过滤
  0：关闭过滤
     */
    Occlusion?: number;
}
/**
 * SubmitTrainPortraitModelJob返回参数结构体
 */
export interface SubmitTrainPortraitModelJobResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryDrawPortraitJob请求参数结构体
 */
export interface QueryDrawPortraitJobRequest {
    /**
     * 查询生成写真图片任务 ID。
     */
    JobId: string;
}
/**
 * ImageToImage返回参数结构体
 */
export interface ImageToImageResponse {
    /**
     * 根据入参 RspImgType 填入不同，返回不同的内容。
  如果传入 base64 则返回生成图 Base64 编码。
  如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。
     */
    ResultImage?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * UploadTrainPortraitImages返回参数结构体
 */
export interface UploadTrainPortraitImagesResponse {
    /**
     * 用于提示对应上传的Urls训练图片是否符合要求，如果未通过需要重新上传。如果基础图像不符合要求会直接通过ErrorCode提示。如果您选择了快速模式，该参数返回为空数组。
     */
    ResultDetails?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryTextToImageProJob请求参数结构体
 */
export interface QueryTextToImageProJobRequest {
    /**
     * 任务 ID。
     */
    JobId: string;
}
/**
 * TextToImage返回参数结构体
 */
export interface TextToImageResponse {
    /**
     * 根据入参 RspImgType 填入不同，返回不同的内容。
  如果传入 base64 则返回生成图 Base64 编码。
  如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。
     */
    ResultImage?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * SubmitDrawPortraitJob请求参数结构体
 */
export interface SubmitDrawPortraitJobRequest {
    /**
     * 写真模型 ID。
  
     */
    ModelId: string;
    /**
     * 写真风格模板。
  请在[ AI 写真风格列表](https://cloud.tencent.com/document/product/1668/105740) 中选择期望的风格，传入风格编号。
     */
    StyleId: string;
    /**
     * 本次生成的图片数量，取值范围[1,4]
     */
    ImageNum: number;
    /**
     * 为生成结果图添加标识的开关，默认为1。
  1：添加标识。
   0：不添加标识。
  其他数值：默认按1处理。
  建议您使用显著标识来提示结果图是 AI 生成的图片。
     */
    LogoAdd?: number;
    /**
     * 标识内容设置。
  默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
     */
    LogoParam?: LogoParam;
    /**
     * 清晰度，支持以下选项：
  sd：基础版，分辨率512:640
  hd：高清畅享版，分辨率1024:1280
  hdpro：高清优享版，分辨率1024:1280（推荐）
  uhd：超清版，分辨率2048:2560
  不填默认为sd。
  
     */
    Definition?: string;
}
