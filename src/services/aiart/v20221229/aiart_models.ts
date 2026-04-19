/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * SubmitDrawPortraitJob返回参数结构体
 */
export interface SubmitDrawPortraitJobResponse {
  /**
   * <p>提交生成写真图片任务 ID。</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RefineImage请求参数结构体
 */
export interface RefineImageRequest {
  /**
   * 输入图 Url。
Base64 和 Url 必须提供一个，如果都提供以 Url 为准。
图片限制：转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。
   */
  InputUrl?: string
  /**
   * 输入图 Base64 数据。
Base64 和 Url 必须提供一个，如果都提供以 Url 为准。
图片限制：转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。
   */
  InputImage?: string
  /**
   * 返回图像方式（base64 或 url），二选一，默认为 base64。url 有效期为1小时。 示例值：url
   */
  RspImgType?: string
}

/**
 * QueryTextToImageJob返回参数结构体
 */
export interface QueryTextToImageJobResponse {
  /**
   * 当前任务状态码：
1：等待中、2：运行中、4：处理失败、5：处理完成。
   */
  JobStatusCode?: string
  /**
   * 当前任务状态：排队中、处理中、处理失败或者处理完成。

   */
  JobStatusMsg?: string
  /**
   * 任务处理失败错误码。

   */
  JobErrorCode?: string
  /**
   * 任务处理失败错误信息。

   */
  JobErrorMsg?: string
  /**
   * 生成图 URL 列表，有效期1小时，请及时保存。

   */
  ResultImage?: Array<string>
  /**
   * 结果 detail 数组，Success 代表成功。

   */
  ResultDetails?: Array<string>
  /**
   * 对应 SubmitTextToImageProJob 接口中 Revise 参数。开启扩写时，返回扩写后的 prompt 文本。 如果关闭扩写，将直接返回原始输入的 prompt。
   */
  RevisedPrompt?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * logo参数
 */
export interface LogoParam {
  /**
   * 水印 Url
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogoUrl?: string
  /**
   * 水印 Base64，Url 和 Base64 二选一传入，如果都提供以 Url 为准
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogoImage?: string
  /**
   * 水印图片位于生成结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogoRect?: LogoRect
}

/**
 * ImageToImage请求参数结构体
 */
export interface ImageToImageRequest {
  /**
   * <p>输入图 Base64 数据。<br>算法将根据输入的图片，结合文本描述智能生成与之相关的图像。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px且大于50px，转成 Base64 字符串后小于 8MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputImage?: string
  /**
   * <p>输入图 Url。<br>算法将根据输入的图片，结合文本描述智能生成与之相关的图像。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px且大于50px，转成 Base64 字符串后小于 8MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputUrl?: string
  /**
   * <p>文本描述。<br>用于在输入图的基础上引导生成图效果，增加生成结果中出现描述内容的可能。<br>推荐使用中文。最多支持256个 utf-8 字符。</p>
   */
  Prompt?: string
  /**
   * <p>反向文本描述。<br>用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。<br>推荐使用中文。最多可传256个 utf-8 字符。</p>
   */
  NegativePrompt?: string
  /**
   * <p>绘画风格。<br>请在  <a href="https://cloud.tencent.com/document/product/1668/86250">图像风格化风格列表</a> 中选择期望的风格，传入风格编号。<br>推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。</p>
   */
  Styles?: Array<string>
  /**
   * <p>生成图结果的配置，包括输出图片分辨率和尺寸等。<br>支持生成以下分辨率的图片：origin（与输入图分辨率一致，长边最高为2000，超出将做等比例缩小）、768:768（1:1）、768:1024（3:4）、1024:768（4:3）。<br>不传默认使用origin。<br>单位为 px。</p>
   */
  ResultConfig?: ResultConfig
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>生成自由度。<br>Strength 值越小，生成图和原图越接近，取值范围(0, 1]，不传使用模型内置的默认值。<br>推荐的取值范围为0.6 - 0.8。</p>
   */
  Strength?: number
  /**
   * <p>返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。</p>
   */
  RspImgType?: string
  /**
   * <p>画质增强开关，默认关闭。<br>1：开启<br>0：关闭<br>开启后将增强图像的画质清晰度，生成耗时有所增加。</p>
   */
  EnhanceImage?: number
  /**
   * <p>细节优化的面部数量上限，支持0 ~ 6，默认为0。<br>若上传大于0的值，将以此为上限对每张图片中面积占比较小的面部进行细节修复，生成耗时根据实际优化的面部个数有所增加。</p>
   */
  RestoreFace?: number
}

/**
 * QueryTrainPortraitModelJob请求参数结构体
 */
export interface QueryTrainPortraitModelJobRequest {
  /**
   * 写真模型 ID。

   */
  ModelId: string
}

/**
 * GenerateAvatar请求参数结构体
 */
export interface GenerateAvatarRequest {
  /**
   * <p>图像类型，默认为人像。<br>human：人像头像，仅支持人像图片输入，建议避免上传无人、多人、人像过小的图片。<br>pet：萌宠贴纸，仅支持动物图片输入，建议避免上传无动物、多动物、动物过小的图片。</p>
   */
  Type?: string
  /**
   * <p>头像风格，仅在人像模式下生效。<br>若使用人像模式，请在  <a href="https://cloud.tencent.com/document/product/1668/107741">百变头像风格列表</a> 中选择期望的风格，传入风格编号，不传默认使用 flower 风格。<br>若使用萌宠贴纸模式，无需选择风格，该参数不生效。</p>
   */
  Style?: string
  /**
   * <p>输入图 Base64 数据。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputImage?: string
  /**
   * <p>输入图 Url。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputUrl?: string
  /**
   * <p>输入人像图的质量检测开关，默认开启，仅在人像模式下生效。<br>1：开启<br>0：关闭<br>建议开启检测，可提升生成效果，关闭检测可能因输入图像质量较差导致生成效果受损。<br>开启后，将增强对输入图像的质量要求，如果输入图像单边分辨率&lt;500、图像中人脸占比较小、存在多人、没有检测到人脸、人脸不完整、人脸遮挡等，将被拦截。<br>关闭后，将降低对输入图像的质量要求，如果图像中没有检测到人脸或人脸占比过小等，将被拦截。</p>
   */
  Filter?: number
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。</p>
   */
  RspImgType?: string
}

/**
 * UploadTrainPortraitImages返回参数结构体
 */
export interface UploadTrainPortraitImagesResponse {
  /**
   * <p>用于提示对应上传的Urls训练图片是否符合要求，如果未通过需要重新上传。如果基础图像不符合要求会直接通过ErrorCode提示。如果您选择了快速模式，该参数返回为空数组。</p>
   */
  ResultDetails?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadTrainPortraitImages请求参数结构体
 */
export interface UploadTrainPortraitImagesRequest {
  /**
   * <p>写真模型 ID。由英文大小写字母、数字及下划线组成。<br>用于唯一标识一个写真模型，一个写真模型只能用于一个人物的写真图片生成。</p>
   */
  ModelId: string
  /**
   * <p>写真模型训练用的基础图像 URL，用于固定写真模型可生成的人物。<br>图片数量：1张。<br>图片内容：单人，脸部清晰。<br>图片限制：单边分辨率小于2000px，转成 Base64 字符串后小于 5MB。</p>
   */
  BaseUrl?: string
  /**
   * <p>写真模型训练用的图像 URL 列表，仅常规训练模式需要上传。<br>图片数量：19 - 24 张。<br>图片内容：单人，脸部清晰，和基础图像中的人物为同一人。<br>图片限制：单边分辨率小于2000px，转成 Base64 字符串后小于 5MB。</p>
   */
  Urls?: Array<string>
  /**
   * <p>训练图像质量过滤开关配置。<br>支持开启或关闭对训练图像分辨率下限、脸部区域大小、脸部遮挡的过滤，默认开启以上过滤。<br>如果训练图像内包含多人脸或无人脸、和 Base 人像不为同一人也将被过滤，不可关闭该过滤条件。<br>建议：关闭以上过滤可能导致写真生成效果受损，建议使用单人、正脸、脸部区域占比较大、脸部清晰无遮挡、无大角度偏转、无夸张表情的图像进行训练。<br>示例值：{&quot;Resolution&quot;:1,&quot;Size&quot;:1,&quot;Occlusion&quot;:1}</p>
   */
  Filter?: Filter
  /**
   * <p>训练模式。<br>默认使用常规训练模式。如果使用快速训练模式和免训练模式，只需要在 BaseUrl 中传入1张图片，Urls.N 中无需传入图片。<br>0：常规训练模式，上传多张图片用于模型训练，完成训练后可生成写真图片。<br>1：快速训练模式，仅需上传1张图片用于模型训练，训练速度更快，完成训练后可生成写真图片。<br>2：免训练模式，仅需上传1张图片，跳过模型训练环节，直接生成写真图片。</p>
   */
  TrainMode?: number
}

/**
 * 返回结果配置
 */
export interface ResultConfig {
  /**
   * 生成图分辨率

图像风格化（图生图）支持生成以下分辨率的图片：origin（与输入图分辨率一致，长边最高为2000，超出将做等比例缩小）、768:768（1:1）、768:1024（3:4）、1024:768（4:3），不传默认使用origin，如果指定生成的长宽比与输入图长宽比差异过大可能导致图片内容被裁剪。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Resolution?: string
}

/**
 * QueryMemeJob请求参数结构体
 */
export interface QueryMemeJobRequest {
  /**
   * 查询表情动图生成任务 ID。
   */
  JobId: string
}

/**
 * QueryGlamPicJob返回参数结构体
 */
export interface QueryGlamPicJobResponse {
  /**
   * 当前任务状态码：
1：等待中、2：运行中、4：处理失败、5：处理完成。
   */
  JobStatusCode?: string
  /**
   * 当前任务状态：排队中、处理中、处理失败或者处理完成。

   */
  JobStatusMsg?: string
  /**
   * 任务处理失败错误码。

   */
  JobErrorCode?: string
  /**
   * 任务处理失败错误信息。

   */
  JobErrorMsg?: string
  /**
   * 生成图 URL 列表，有效期1小时，请及时保存。

   */
  ResultImage?: Array<string>
  /**
   * 结果 detail 数组，Success 代表成功。

   */
  ResultDetails?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImageOutpainting请求参数结构体
 */
export interface ImageOutpaintingRequest {
  /**
   * <p>扩展后的比例（宽:高），需要不等于原图比例。<br>支持：1:1、4:3、3:4、16:9、9:16</p>
   */
  Ratio: string
  /**
   * <p>输入图 Base64 数据。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputImage?: string
  /**
   * <p>输入图 Url。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputUrl?: string
  /**
   * <p>返回图像方式（base64 或 url），二选一，默认为 base64。url 有效期为1小时。</p>
   */
  RspImgType?: string
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
}

/**
 * ReplaceBackground返回参数结构体
 */
export interface ReplaceBackgroundResponse {
  /**
   * <p>根据入参 RspImgType 填入不同，返回不同的内容。<br>如果传入 base64 则返回生成图 Base64 编码。<br>如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。</p>
   */
  ResultImage?: string
  /**
   * <p>如果 MaskUrl 未传，则返回使用内置商品分割算法得到的 Mask 结果。</p>
   */
  MaskImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryMemeJob返回参数结构体
 */
export interface QueryMemeJobResponse {
  /**
   * 当前任务状态码：
1：等待中、2：运行中、4：处理失败、5：处理完成。
   */
  JobStatusCode?: string
  /**
   * 当前任务状态：排队中、处理中、处理失败或者处理完成。
   */
  JobStatusMsg?: string
  /**
   * 任务处理失败错误码。

   */
  JobErrorCode?: string
  /**
   * 任务处理失败错误信息。

   */
  JobErrorMsg?: string
  /**
   * 生成图 URL，有效期1小时，请及时保存。
   */
  ResultImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryDrawPortraitJob返回参数结构体
 */
export interface QueryDrawPortraitJobResponse {
  /**
   * 任务状态码。
INIT: 初始化、WAIT：等待中、RUN：运行中、FAIL：处理失败、DONE：处理完成。
   */
  JobStatusCode?: string
  /**
   * 任务状态信息。
   */
  JobStatusMsg?: string
  /**
   * 任务错误码。
   */
  JobErrorCode?: string
  /**
   * 任务错误信息。
   */
  JobErrorMsg?: string
  /**
   * 结果 URL 数组。
URL 有效期1小时，请及时保存。
   */
  ResultUrls?: Array<string>
  /**
   * 结果描述数组。
   */
  ResultDetails?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryTrainPortraitModelJob返回参数结构体
 */
export interface QueryTrainPortraitModelJobResponse {
  /**
   * 任务状态码。
INIT: 初始化、WAIT：等待中、RUN：运行中、FAIL：处理失败、DONE：处理完成。
   */
  JobStatusCode?: string
  /**
   * 任务状态信息。
   */
  JobStatusMsg?: string
  /**
   * 任务错误码。
   */
  JobErrorCode?: string
  /**
   * 任务错误信息。
   */
  JobErrorMsg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ChangeClothes返回参数结构体
 */
export interface ChangeClothesResponse {
  /**
   * 根据入参 RspImgType 填入不同，返回不同的内容。
如果传入 base64 则返回生成图 Base64 编码。
如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。
   */
  ResultImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTextToImageJob请求参数结构体
 */
export interface SubmitTextToImageJobRequest {
  /**
   * <p>文本描述。<br>算法将根据输入的文本智能生成与之相关的图像。<br>不能为空，推荐使用中文。最多可传8192个 utf-8 字符。</p>
   */
  Prompt: string
  /**
   * <p>参考图，最多三张图。  - Base64 或 Url 。</p><ul><li>单张图片限制：输入图分辨率单边最小50px，最大5000px；图片base64后大小小于6M ；格式支持 jpg、jpeg、png、bmp、tiff、webp。</li></ul>
   */
  Images?: Array<string>
  /**
   * <p>生成图分辨率<br>单位为 px。<br>格式：&quot;${宽}:${高}&quot;，说明：分辨率的设置和输入是否有参考图（image_urls/images参数）有关：<br>一、文生图（无参考图）<br>默认分辨率：1024:1024；<br>尺寸约束：宽、高均在 [512, 2048] 像素范围内，宽高乘积 ≤ 1024:1024 像素。<br>二、图生图（有参考图）<br>尺寸约束：宽、高均在 [512, 2048] 像素范围内，宽高乘积 ≤ 1024:1024 像素。</p><p>传入尺寸时（输出自适应，不严格遵循传入尺寸）：<br>输入图分辨率分桶与传入尺寸分桶一致时：按输入图长宽比，缩放至接近 1024:1024 面积输出；<br>输入图分辨率分桶与传入尺寸分桶不一致时：从 尺寸列表 中选取最接近传入尺寸的尺寸输出<br>尺寸列表：2048:512、1984:512、1920:512、1856:512、1792:512、<br>1728:512、1664:512、1600:512、1536:512、1472:576、<br>1408:640、1344:704、1280:768、1216:832、1152:896、<br>1088:960、1024:1024、960:1088、896:1152、832:1216、<br>768:1280、704:1344、640:1408、576:1472、512:1536、<br>512:1600、512:1664、512:1728、512:1792、512:1856、<br>512:1920、512:1984、512:2048、768:1024、720:1280、<br>1024:768、1280:720<br>不传入尺寸时：将传入默认值1024:1024。</p>
   */
  Resolution?: string
  /**
   * <p>随机种子，默认随机。<br>不传：随机种子生成。<br>正数：固定种子生成。<br>扩写开启时固定种子不生效，将保持随机。<br>取值范围：1 - 4294967295</p>
   */
  Seed?: number
  /**
   * <p>为生成结果图添加显式水印标识的开关，默认为1。<br>1：添加。<br>0：不添加。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>是否开启prompt改写，为空时默认开启，改写预计会增加20s左右耗时。<br>0：关闭改写<br>1：开启改写<br>建议默认开启，如果关闭改写，需要调用方自己接改写，否则对生图效果有较大影响，改写方法可以参考：<a href="https://github.com/Tencent-Hunyuan/HunyuanImage-3.0/tree/main/PE">改写</a><br>示例值：1</p>
   */
  Revise?: number
}

/**
 * SubmitGlamPicJob返回参数结构体
 */
export interface SubmitGlamPicJobResponse {
  /**
   * <p>任务ID。</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitMemeJob返回参数结构体
 */
export interface SubmitMemeJobResponse {
  /**
   * <p>任务id</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTrainPortraitModelJob请求参数结构体
 */
export interface SubmitTrainPortraitModelJobRequest {
  /**
   * 在上传写真训练图片时指定的写真模型 ID。 
每个 AI 写真模型自训练完成起1年内有效，有效期内可使用模型生成图片，期满后需要重新训练模型。

   */
  ModelId: string
}

/**
 * SketchToImage请求参数结构体
 */
export interface SketchToImageRequest {
  /**
   * <p>用于线稿生图的文本描述。<br>最多支持200个 utf-8 字符。<br>建议格式：线稿中的主体对象+画面场景+配色/材质/元素/风格等</p>
   */
  Prompt: string
  /**
   * <p>线稿图 Base64 数据。<br>Base64 和 Url 必须提供一个，如果都提供以Url 为准。<br>图片限制：黑白线稿图片，单边分辨率小于5000px且大于128px（分辨率过小会导致效果受损），转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputImage?: string
  /**
   * <p>线稿图 Url。<br>Base64 和 Url 必须提供一个，如果都提供以Url 为准。<br>图片限制：黑白线稿图片，单边分辨率小于5000px且大于128px（分辨率过小会导致效果受损），转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputUrl?: string
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。<br>示例值：{&quot;LogoUrl&quot;: &quot;https://cos.ap-guangzhou.myqcloud.com/logo.jpg&quot;, &quot;LogoRect&quot;: {&quot;X&quot;: 10, &quot;Y&quot;: 10, &quot;Width&quot;: 20, &quot;Height&quot;: 20}}</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。生成图分辨率较大时建议选择 url，使用 base64 可能因图片过大导致返回失败。</p>
   */
  RspImgType?: string
}

/**
 * 人脸框坐标
 */
export interface Rect {
  /**
   * 人脸框左上角横坐标。
   */
  X?: number
  /**
   * 人脸框左上角纵坐标。
   */
  Y?: number
  /**
   * 人脸框宽度。
   */
  Width?: number
  /**
   * 人脸框高度。
   */
  Height?: number
}

/**
 * 融合信息
 */
export interface FaceInfo {
  /**
   * 用户图 URL 列表
   */
  ImageUrls?: Array<string>
  /**
   * 模板图人脸坐标。
   */
  TemplateFaceRect?: Rect
}

/**
 * SubmitTextToImageProJob返回参数结构体
 */
export interface SubmitTextToImageProJobResponse {
  /**
   * 任务 ID。
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitGlamPicJob请求参数结构体
 */
export interface SubmitGlamPicJobRequest {
  /**
   * <p>美照模板图 URL。<br>图片限制：模板图中最多出现5张人脸，单边分辨率大于300px，转成 Base64 字符串后小于 10MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  TemplateUrl: string
  /**
   * <p>用户图 URL 列表，以及模板图中需要替换成用户的人脸框信息。<br>一张美照中可包含1 ~ 5个用户形象。每个用户需上传1 ~ 6张照片，仅支持单人照。<br>模板图中的人脸数量需要大于等于用户个数。如果不传每个用户在模板图中的人脸框位置，默认按照模板图人脸框从大到小的顺序进行替换。如需自定义顺序，需要依次上传每个用户在模板图中的人脸框位置。<br>图片限制：每张图片转成 Base64 字符串后小于 10MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。建议使用单人、正脸、脸部区域占比较大、脸部清晰无遮挡、无大角度偏转、无夸张表情的用户图。<br>示例值：[{&quot;ImageUrls&quot;: [&quot;https://cos.ap-guangzhou.myqcloud.com/image.jpg&quot;]}]</p>
   */
  FaceInfos?: Array<FaceInfo>
  /**
   * <p>美照生成数量。<br>支持1 ~ 4张，默认生成4张。</p>
   */
  Num?: number
  /**
   * <p>美照生成风格。<br>仅对单人美照生效，单人可支持选择不同风格。需按照美照生成数量，在数组中逐一填入每张美照的风格名称。如果不传，默认取不重复的随机风格顺序。<br>多人美照只支持 balanced 一种风格，该参数不生效。<br>可选风格：<ul><li>real：面部相似度更高。</li><li>balanced：平衡面部真实感和美观度。</li><li>textured：脸部皮肤更具真实感。</li><li>beautiful：脸部美观度更高。</li></ul></p>
   */
  Style?: Array<string>
  /**
   * <p>相似度系数，越高越像用户图。<br>取值范围[0, 1]，默认为0.6。</p>
   */
  Similarity?: number
  /**
   * <p>超分选项，默认不做超分，可选开启。<br>x2：2倍超分<br>x4：4倍超分</p>
   */
  Clarity?: string
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。<br>示例值：{&quot;LogoUrl&quot;: &quot;https://cos.ap-guangzhou.myqcloud.com/logo.jpg&quot;, &quot;LogoRect&quot;: {&quot;X&quot;: 10, &quot;Y&quot;: 10, &quot;Width&quot;: 20, &quot;Height&quot;: 20}}</p>
   */
  LogoParam?: LogoParam
}

/**
 * QueryTextToImageProJob返回参数结构体
 */
export interface QueryTextToImageProJobResponse {
  /**
   * 当前任务状态码：
1：等待中、2：运行中、4：处理失败、5：处理完成。
   */
  JobStatusCode?: string
  /**
   * 当前任务状态：排队中、处理中、处理失败或者处理完成。

   */
  JobStatusMsg?: string
  /**
   * 任务处理失败错误码。

   */
  JobErrorCode?: string
  /**
   * 任务处理失败错误信息。

   */
  JobErrorMsg?: string
  /**
   * 生成图 URL 列表，有效期1小时，请及时保存。

   */
  ResultImage?: Array<string>
  /**
   * 结果 detail 数组，Success 代表成功。

   */
  ResultDetails?: Array<string>
  /**
   * 对应 SubmitTextToImageProJob 接口中 Revise 参数。开启扩写时，返回扩写后的 prompt 文本。 如果关闭扩写，将直接返回原始输入的 prompt。
   */
  RevisedPrompt?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 输入框
 */
export interface LogoRect {
  /**
   * <p>左上角X坐标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  X?: number
  /**
   * <p>左上角Y坐标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Y?: number
  /**
   * <p>方框宽度<br>单位为 px</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Width?: number
  /**
   * <p>方框高度<br>单位为 px</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Height?: number
}

/**
 * TextToImageLite请求参数结构体
 */
export interface TextToImageLiteRequest {
  /**
   * <p>文本描述。将根据输入的文本智能生成与之相关的图像。<br>不能为空，推荐使用中文。最多可传1024个 utf-8 字符。</p>
   */
  Prompt: string
  /**
   * <p>反向提示词。 减少生成结果中出现描述内容。<br>推荐使用中文。最多可传1024个 utf-8 字符。</p>
   */
  NegativePrompt?: string
  /**
   * <p>生成图分辨率，默认1024:1024。<br>支持的图像宽高比例: 1:1，3:4，4:3，9:16，16:9。<br>支持的长边分辨率: 160，200，225，258，512，520，608，768，1024，1080，1280，1600，1620，1920，2048，2400，2560，2592，3440，3840，4096。<br>单位为px。</p>
   */
  Resolution?: string
  /**
   * <p>随机种子，默认随机。<br>0：随机种子生成。<br>不传：随机种子生成。<br>正数：固定种子生成。</p>
   */
  Seed?: number
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>返回图像方式（base64 或 url），二选一，默认为 base64。url 有效期为1小时。</p>
   */
  RspImgType?: string
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
  Resolution?: number
  /**
   * 过滤脸部区域过小的训练图像，默认开启过滤

1：开启过滤
0：关闭过滤
   */
  Size?: number
  /**
   * 过滤脸部存在明显遮挡、偏转角度过大等质量较差的训练图像，默认开启过滤

1：开启过滤
0：关闭过滤
   */
  Occlusion?: number
}

/**
 * TextToImageRapid返回参数结构体
 */
export interface TextToImageRapidResponse {
  /**
   * <p>根据入参 RspImgType 填入不同，返回不同的内容。<br>如果传入 base64 则返回生成图 Base64 编码。<br>如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。</p>
   */
  ResultImage?: string
  /**
   * <p>Seed</p>
   */
  Seed?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTextToImageJob返回参数结构体
 */
export interface SubmitTextToImageJobResponse {
  /**
   * <p>任务 ID。</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImageInpaintingRemoval返回参数结构体
 */
export interface ImageInpaintingRemovalResponse {
  /**
   * <p>根据入参 RspImgType 填入不同，返回不同的内容。 如果传入 base64 则返回生成图 Base64 编码。 如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。</p>
   */
  ResultImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitMemeJob请求参数结构体
 */
export interface SubmitMemeJobRequest {
  /**
   * <p>表情模板。<br>请在 <a href="https://cloud.tencent.com/document/product/1668/115327">表情动图模板列表</a>  中选择期望的模板，传入 Pose 名称。</p>
   */
  Pose: string
  /**
   * <p>人像参考图 Base64 数据。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputImage?: string
  /**
   * <p>人像参考图 Url。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputUrl?: string
  /**
   * <p>生成分辨率，单位为 px。<br>真人类型支持256、512，默认为256，<br>卡通类型仅支持512。</p>
   */
  Resolution?: number
  /**
   * <p>自定义文案。<br>仅对真人类型的 Pose 生效，将在生成的表情动图中显示指定的文字。如果传入的字符串长度大于10，只截取前10个显示。<br>如果不传，默认使用自带的文案。<br>如果 text = &quot;&quot; 空字符串，代表不在表情动图中添加文案。</p>
   */
  Text?: string
  /**
   * <p>头发遮罩开关。<br>true：裁剪过长的头发。<br>false：不裁剪过长的头发。<br>仅对卡通类型的 Pose 生效，默认为 false。</p>
   */
  Haircut?: boolean
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。<br>示例值：{&quot;LogoUrl&quot;: &quot;https://cos.ap-guangzhou.myqcloud.com/logo.jpg&quot;, &quot;LogoRect&quot;: {&quot;X&quot;: 10, &quot;Y&quot;: 10, &quot;Width&quot;: 20, &quot;Height&quot;: 20}}</p>
   */
  LogoParam?: LogoParam
}

/**
 * QueryTextToImageJob请求参数结构体
 */
export interface QueryTextToImageJobRequest {
  /**
   * 任务 ID。
   */
  JobId: string
}

/**
 * ReplaceBackground请求参数结构体
 */
export interface ReplaceBackgroundRequest {
  /**
   * <p>商品原图 Url。<br>图片限制：单边分辨率小于4000px，长宽比在2:5 ~ 5:2之间，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  ProductUrl: string
  /**
   * <p>对新背景的文本描述。<br>最多支持256个 utf-8 字符，支持中、英文。<br>如果 Prompt = &quot;BackgroundTemplate&quot; 代表启用背景模板，需要在参数 BackgroundTemplate 中指定一个背景名称。</p>
   */
  Prompt: string
  /**
   * <p>反向提示词。<br>最多支持256个 utf-8 字符，支持中、英文。</p>
   */
  NegativePrompt?: string
  /**
   * <p>商品图中的商品主体名称。<br>最多支持50个 utf-8 字符，支持中、英文。<br>建议说明商品主体，否则影响生成效果。</p>
   */
  Product?: string
  /**
   * <p>背景模板。<br>仅当 Prompt = &quot;BackgroundTemplate&quot; 时生效，可支持的模板详见 <a href="https://cloud.tencent.com/document/product/1668/115391">商品背景模板列表</a> ，请传入字段“背景名称”中的值。</p>
   */
  BackgroundTemplate?: string
  /**
   * <p>商品 Mask 图 Url，要求背景透明，保留商品主体。<br>如果不传，将自动使用内置的商品分割算法得到 Mask。<br>支持自定义上传 Mask，如果该参数不为空，则以实际上传的数据为准。<br>图片限制：Mask 图必须和商品原图分辨率一致，转成 Base64 字符串后小于 6MB，格式仅支持 png。</p>
   */
  MaskUrl?: string
  /**
   * <p>替换背景后生成的商品图分辨率。<br>支持生成单边分辨率大于500px且小于4000px、长宽比在2:5 ~ 5:2之间的图片，不传默认生成1280:1280。<br>建议图片比例为1:1、9:16、16:9，生成效果更佳，使用其他比例的生成效果可能不如建议比例。</p>
   */
  Resolution?: string
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。<br>示例值：{&quot;LogoUrl&quot;: &quot;https://cos.ap-guangzhou.myqcloud.com/logo.jpg&quot;, &quot;LogoRect&quot;: {&quot;X&quot;: 10, &quot;Y&quot;: 10, &quot;Width&quot;: 20, &quot;Height&quot;: 20}}</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。<br>生成图分辨率较大时建议选择 url，使用 base64 可能因图片过大导致返回失败。</p>
   */
  RspImgType?: string
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
  Prompt: string
  /**
   * 绘画风格。
请在 [文生图（高级版）风格列表](https://cloud.tencent.com/document/product/1668/104567) 中选择期望的风格，传入风格编号。
不传默认不指定风格。
   */
  Style?: string
  /**
   * 生成图分辨率。
支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3），不传默认使用1024:1024。
   */
  Resolution?: string
  /**
   * 为生成结果图添加显式水印标识的开关，默认为1。  
1：添加。  
0：不添加。  
其他数值：默认按1处理。  
建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。
   */
  LogoAdd?: number
  /**
   * 文生图模型，默认使用engine1。
取值：
engine1
engine2
   */
  Engine?: string
  /**
   * prompt 扩写开关。1为开启，0为关闭，不传默认开启。
开启扩写后，将自动扩写原始输入的 prompt 并使用扩写后的 prompt 生成图片，返回生成图片结果时将一并返回扩写后的 prompt 文本。
如果关闭扩写，将直接使用原始输入的 prompt 生成图片。
建议开启，在多数场景下可提升生成图片效果、丰富生成图片细节。
   */
  Revise?: number
}

/**
 * SubmitTrainPortraitModelJob返回参数结构体
 */
export interface SubmitTrainPortraitModelJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryDrawPortraitJob请求参数结构体
 */
export interface QueryDrawPortraitJobRequest {
  /**
   * 查询生成写真图片任务 ID。
   */
  JobId: string
}

/**
 * ImageToImage返回参数结构体
 */
export interface ImageToImageResponse {
  /**
   * <p>根据入参 RspImgType 填入不同，返回不同的内容。<br>如果传入 base64 则返回生成图 Base64 编码。<br>如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。</p>
   */
  ResultImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextToImageRapid请求参数结构体
 */
export interface TextToImageRapidRequest {
  /**
   * <p>文本描述。<br>算法将根据输入的文本智能生成与之相关的图像。建议详细描述画面主体、细节、场景等，文本描述越丰富，生成效果越精美。<br>不能为空，推荐使用中文。最多可传256个 utf-8 字符。</p>
   */
  Prompt: string
  /**
   * <p>生成图分辨率，默认1024:1024。<br>支持的图像宽高比例: 1:1，3:4，4:3，9:16，16:9。<br>支持的长边分辨率: 160，200，225，258，512，520，608，768，1024，1080，1280，1600，1620，1920，2048，2400，2560，2592，3440，3840，4096。<br>单位为 px。</p>
   */
  Resolution?: string
  /**
   * <p>随机种子，默认随机。<br>0：随机种子生成。<br>不传：随机种子生成。<br>正数：固定种子生成。</p>
   */
  Seed?: number
  /**
   * <p>参考图。</p><ul><li>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。</li><li>当传入Image参数时，Style和Resolution参数不生效，输出图分辨率将保持Image传入图分辨率。</li><li>图片限制：单边分辨率大于128px且小于2048px；图片小于6M；格式支持 jpg、jpeg、png、bmp、tiff、webp。</li></ul>
   */
  Image?: Image
  /**
   * <p>生成的图片风格，参考值：</p><p>1：宫崎骏风格；<br>2：新海诚风格；<br>3：去旅行风格；<br>4：水彩风格；<br>5：像素风格；<br>6：童话世界风格；<br>7：奇趣卡通风格；<br>8：赛博朋克风格；<br>9：极简风格；<br>10：复古风格；<br>11：暗黑系风格；<br>12：波普风风格；<br>13：糖果色风格；<br>14：胶片电影风格；<br>15：素描风格；<br>16：水墨画风格；<br>17：油画风格；<br>18：粉笔风格；<br>19：粘土风格；<br>20：毛毡风格；<br>21：刺绣风格；<br>22：彩铅风格；<br>23：莫奈风格；<br>24：毕加索风格；<br>25：穆夏风格；<br>26：古风二次元风格；<br>27：都市二次元风格；<br>28：悬疑风格；<br>29：校园风格；<br>30：都市异能风格。</p>
   */
  Style?: string
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>返回图像方式（base64 或 url），二选一，默认为 base64。url 有效期为1小时。</p>
   */
  RspImgType?: string
}

/**
 * 图片
 */
export interface Image {
  /**
   * 图片Base64
   */
  Base64?: string
  /**
   * 图片Url
   */
  Url?: string
}

/**
 * QueryGlamPicJob请求参数结构体
 */
export interface QueryGlamPicJobRequest {
  /**
   * 任务ID。
   */
  JobId: string
}

/**
 * ImageInpaintingRemoval请求参数结构体
 */
export interface ImageInpaintingRemovalRequest {
  /**
   * <p>输入图 Base64 数据。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputImage?: string
  /**
   * <p>输入图 Url。<br>Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：单边分辨率小于5000px，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。</p>
   */
  InputUrl?: string
  /**
   * <p>消除区域 Mask 图 Base64 数据。<br>Mask 为单通道灰度图，待消除部分呈白色区域，原图保持部分呈黑色区域。<br>Mask 的 Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：Mask 分辨率需要和输入原图保持一致，转成 Base64 字符串后小于 6MB。</p>
   */
  Mask?: string
  /**
   * <p>消除区域 Mask 图 Url。<br>Mask 为单通道灰度图，待消除部分呈白色区域，原图保持部分呈黑色区域。<br>Mask 的 Base64 和 Url 必须提供一个，如果都提供以 Url 为准。<br>图片限制：Mask 分辨率需要和输入原图保持一致，转成 Base64 字符串后小于 6MB。</p>
   */
  MaskUrl?: string
  /**
   * <p>返回图像方式（base64 或 url），二选一，默认为 base64。url 有效期为1小时。</p>
   */
  RspImgType?: string
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
}

/**
 * ChangeClothes请求参数结构体
 */
export interface ChangeClothesRequest {
  /**
   * 模特图片 Url。
图片限制：单边分辨率小于3000，且大于512，转成 Base64 字符串后小于 8MB。
输入要求：
1、建议上传正面模特图片，至少完整露出应穿着输入指定服装的身体部位（全身、上半身或下半身），无大角度身体偏转或异常姿势。
2、建议上传3:4比例的图片，生成效果更佳。
3、建议模特图片中的原始服装和更换后的服装类别一致，或原始服装在身体上的覆盖范围小于等于更换后的服装（例如需要给模特换上短裤，则原始模特图片中也建议穿短裤，不建议穿长裤），否则会影响人像生成效果。

   */
  ModelUrl: string
  /**
   * 服装图片 Url。
图片限制：单边分辨率小于3000，大于512，转成 Base64 字符串后小于 8MB。
输入要求：
建议上传服装完整的正面平铺图片，仅包含1个服装主体，服装类型支持上衣、下装、连衣裙，三选一。算法将根据输入的图片，结合服装图片给模特换装。
   */
  ClothesUrl: string
  /**
   * 服装类型，需要和服装图片保持一致。
取值：
Upper-body：上衣
Lower-body：下装
Dress：连衣裙
   */
  ClothesType: string
  /**
   * 为生成结果图添加标识的开关，默认为1。
1：添加标识。
0：不添加标识。
其他数值：默认按1处理。
建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。
   */
  LogoAdd?: number
  /**
   * 标识内容设置。
默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
   */
  LogoParam?: LogoParam
  /**
   * 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。
生成图分辨率较大时建议选择 url，使用 base64 可能因图片过大导致返回失败。
   */
  RspImgType?: string
}

/**
 * ImageOutpainting返回参数结构体
 */
export interface ImageOutpaintingResponse {
  /**
   * <p>根据入参 RspImgType 填入不同，返回不同的内容。<br>如果传入 base64 则返回生成图 Base64 编码。<br>如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。</p>
   */
  ResultImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TextToImageLite返回参数结构体
 */
export interface TextToImageLiteResponse {
  /**
   * <p>根据入参 RspImgType 填入不同，返回不同的内容。<br>如果传入 base64 则返回生成图 Base64 编码。<br>如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。</p>
   */
  ResultImage?: string
  /**
   * <p>Seed</p>
   */
  Seed?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryTextToImageProJob请求参数结构体
 */
export interface QueryTextToImageProJobRequest {
  /**
   * 任务 ID。
   */
  JobId: string
}

/**
 * GenerateAvatar返回参数结构体
 */
export interface GenerateAvatarResponse {
  /**
   * <p>根据入参 RspImgType 填入不同，返回不同的内容。<br>如果传入 base64 则返回生成图 Base64 编码。<br>如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。</p>
   */
  ResultImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RefineImage返回参数结构体
 */
export interface RefineImageResponse {
  /**
   * 根据入参 RspImgType 填入不同，返回不同的内容。
如果传入 base64 则返回生成图 Base64 编码。
如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。
   */
  ResultImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SketchToImage返回参数结构体
 */
export interface SketchToImageResponse {
  /**
   * <p>根据入参 RspImgType 填入不同，返回不同的内容。<br>如果传入 base64 则返回生成图 Base64 编码。<br>如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。</p>
   */
  ResultImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitDrawPortraitJob请求参数结构体
 */
export interface SubmitDrawPortraitJobRequest {
  /**
   * <p>写真模型 ID。</p>
   */
  ModelId: string
  /**
   * <p>写真风格模板。<br>请在<a href="https://cloud.tencent.com/document/product/1668/105740"> AI 写真风格列表</a> 中选择期望的风格，传入风格编号。</p>
   */
  StyleId: string
  /**
   * <p>本次生成的图片数量，取值范围[1,4]</p>
   */
  ImageNum: number
  /**
   * <p>为生成结果图添加标识的开关，默认为1。<br>1：添加标识。<br> 0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图是 AI 生成的图片。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。<br>示例值：{&quot;LogoUrl&quot;: &quot;https://cos.ap-guangzhou.myqcloud.com/logo.jpg&quot;, &quot;LogoRect&quot;: {&quot;X&quot;: 10, &quot;Y&quot;: 10, &quot;Width&quot;: 20, &quot;Height&quot;: 20}}</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>清晰度，单位为 px。<br>支持以下选项：<br>sd：基础版，分辨率512:640<br>hd：高清畅享版，分辨率1024:1280<br>hdpro：高清优享版，分辨率1024:1280（推荐）<br>uhd：超清版，分辨率2048:2560<br>不填默认为sd。</p>
   */
  Definition?: string
}
