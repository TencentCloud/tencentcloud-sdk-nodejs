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
 * DescribeImageToVideoGeneralJob返回参数结构体
 */
export interface DescribeImageToVideoGeneralJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 任务执行错误码。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorCode?: string
  /**
   * 任务执行错误信息。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorMessage?: string
  /**
   * 结果视频 URL。有效期 24 小时。
   */
  ResultVideoUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitVideoStylizationJob请求参数结构体
 */
export interface SubmitVideoStylizationJobRequest {
  /**
   * 风格ID。取值说明：
2d_anime：2D动漫；
3d_cartoon：3D卡通；
3d_china：3D国潮；
pixel_art：像素风。
   */
  StyleId: string
  /**
   * 输入视频URL。视频要求：
- 视频格式：mp4、mov；
- 视频时长：1～60秒；
- 视频分辨率：540P~2056P，即长宽像素数均在540px～2056px范围内；
- 视频大小：不超过200M；
- 视频FPS：15～60fps。
   */
  VideoUrl: string
  /**
   * 风格化强度。取值说明：
low：风格化强度弱；
medium：风格化强度中等；
high：风格化强度强。
默认值为medium。
   */
  StyleStrength?: string
}

/**
 * logo参数
 */
export interface LogoParam {
  /**
   * 水印 Url
   */
  LogoUrl?: string
  /**
   * 水印 Base64，Url 和 Base64 二选一传入，如果都提供以 Url 为准
   */
  LogoImage?: string
  /**
   * 水印图片位于生成结果图中的坐标及宽高，将按照坐标对标识图片进行位置和大小的拉伸匹配。
   */
  LogoRect?: LogoRect
}

/**
 * DescribeVideoVoiceJob返回参数结构体
 */
export interface DescribeVideoVoiceJobResponse {
  /**
   * 任务状态。  WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 结果视频URL。有效期 24 小时。
   */
  ResultVideoUrl?: string
  /**
   * 任务执行错误码。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorCode?: string
  /**
   * 任务执行错误信息。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitHumanActorJob请求参数结构体
 */
export interface SubmitHumanActorJobRequest {
  /**
   * 文本提示词，不能超过5000字符。
提示词支持全局和局部控制：

- 全局控制：正常输入提示词即可
- 局部控制：可用双井号进行特定时间的提示词约束，例如： "画面中的人物正在对着镜头讲话，偶尔做些手势匹配说话的内容。镜头保持固定。#3#画面中的人物正在对着镜头讲话，同时做出单手做向左方引导的手势。镜头保持固定。"（意思是第三秒的时候让人物做出左方引导手势）
 -- 局部控制时间建议整数，最大可读小数点后两位。
   */
  Prompt: string
  /**
   * 传入音频URL地址，音频要求：
- 音频时长：2秒 - 60秒
- 音频格式：mp3、wav
- 音频大小：10M以内
   */
  AudioUrl: string
  /**
   * 传入图片URL地址，图片要求：
- 图片格式：jpg、jpeg、png、bmp、webp
- 图片分辨率：192～4096
- 图片大小：不超过10M
- 图片宽高比：图片【宽：高】在1:4到4:1范围内
- 图片内容：避免上传无人脸、无宠物脸或脸部过小、不完整、不清晰、偏转角度过大、嘴部被遮挡的图片。
   */
  ImageUrl?: string
  /**
   * 传入图片Base64编码，编码后请求体大小不超过10M。
图片Base64编码与URL地址必传其一，如果都传以ImageUrl为准。
   */
  ImageBase64?: string
  /**
   * 生成视频分辨率
枚举值：720p，1080p
默认1080p
   */
  Resolution?: string
  /**
   * 生成视频帧数，单位fps。
枚举值：25，50
默认50帧
   */
  FrameRate?: number
  /**
   * 为生成视频添加标识的开关，默认为1。 1：添加标识。 0：不添加标识。 其他数值：默认按1处理。 建议您使用显著标识来提示，该视频是 AI 生成的视频。
   */
  LogoAdd?: number
  /**
   * 标识内容设置。 默认在生成视频的右下角添加“视频由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
   */
  LogoParam?: LogoParam
}

/**
 * SubmitImageAnimateJob返回参数结构体
 */
export interface SubmitImageAnimateJobResponse {
  /**
   * 图片跳舞任务ID。
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模板信息
 */
export interface FaceTemplateInfo {
  /**
   * 角色ID。需要与MergeInfos中的TemplateFaceID依次对应。需要填数字，建议填"0"、"1"，依次累加。
   */
  TemplateFaceID?: string
  /**
   * 视频模板中要替换的人脸图片
   */
  TemplateFaceImage?: Image
  /**
   * 视频模板中要替换的人脸图片的人脸框。不填默认取要替换的人脸图片中最大人脸。
   */
  TemplateFaceRect?: FaceRect
}

/**
 * SubmitImageAnimateJob请求参数结构体
 */
export interface SubmitImageAnimateJobRequest {
  /**
   * 图片格式：支持PNG、JPG、JPEG、BMP、WEBP格式；
图片分辨率：长边分辨率范围【192，4096】；
图片大小：不超过10M；
图片宽高比：【宽：高】数值在 1:2 到 1:1.2 范围内
   */
  ImageUrl?: string
  /**
   * 图片base64数据。
图片格式：支持PNG、JPG、JPEG、BMP、WEBP格式；
图片分辨率：长边分辨率范围【192，4096】；
图片大小：不超过10M；
图片宽高比：【宽：高】数值在 1:2 到 1:1.2 范围内
   */
  ImageBase64?: string
  /**
   * 动作模板ID。取值说明：ke3 科目三；tuziwu 兔子舞；huajiangwu 划桨舞。

   */
  TemplateId?: string
  /**
   * 结果视频是否保留模板音频。默认为true
   */
  EnableAudio?: boolean
  /**
   * 是否对输入图采用加强检测方案。

默认不加强检测（false），仅对输入图做必要的基础检测。

开启加强检测（true）有助于提升效果稳定性，将根据选择的动作模板提取建议的人体关键点，并判断输入图中是否包含这些人体关键点。加强检测仅对人像输入图生效，对非人输入图不生效。
   */
  EnableBodyJoins?: boolean
  /**
   * 是否对结果视频背景进行分割，默认值为false。
true：分割结果视频，结果视频（ResultVideoUrl）将为去除背景的绿幕视频，并返回掩码视频（MaskVideoUrl）；
false：不分割结果视频，结果视频（ResultVideoUrl）为带背景的视频，掩码视频（MaskVideoUrl）为空字符串。
   */
  EnableSegment?: boolean
  /**
   * 为生成视频添加标识的开关，默认为0。
1：添加标识。
0：不添加标识。
其他数值：默认按1处理。
建议您使用显著标识来提示，该视频是 AI 生成的视频。
   */
  LogoAdd?: number
  /**
   * 标识内容设置。
默认在生成视频的右下角添加“视频由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
   */
  LogoParam?: LogoParam
  /**
   * 是否开启人脸检测。

默认开启人脸检测（true），拦截主体为人像但无人脸、人脸不完整或被遮挡的输入图。可选关闭人脸检测（false）。
   */
  EnableFace?: boolean
}

/**
 * DescribeVideoVoiceJob请求参数结构体
 */
export interface DescribeVideoVoiceJobRequest {
  /**
   * 任务ID。
   */
  JobId?: string
}

/**
 * SubmitImageToVideoGeneralJob返回参数结构体
 */
export interface SubmitImageToVideoGeneralJobResponse {
  /**
   * 任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoFaceFusionJob返回参数结构体
 */
export interface DescribeVideoFaceFusionJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 任务执行错误码。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorCode?: string
  /**
   * 任务执行错误信息。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorMessage?: string
  /**
   * 结果视频 URL。有效期 24 小时。
   */
  ResultVideoUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoFaceFusionJob请求参数结构体
 */
export interface DescribeVideoFaceFusionJobRequest {
  /**
   * 任务ID
   */
  JobId?: string
}

/**
 * 人脸框信息。
 */
export interface FaceRect {
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
 * DescribePortraitSingJob请求参数结构体
 */
export interface DescribePortraitSingJobRequest {
  /**
   * 任务ID
   */
  JobId: string
}

/**
 * DescribeHunyuanToVideoJob请求参数结构体
 */
export interface DescribeHunyuanToVideoJobRequest {
  /**
   * 任务ID
   */
  JobId: string
}

/**
 * SubmitVideoFaceFusionJob返回参数结构体
 */
export interface SubmitVideoFaceFusionJobResponse {
  /**
   * 视频人脸融合任务的job id（job有效期24小时）
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTemplateToVideoJob返回参数结构体
 */
export interface DescribeTemplateToVideoJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 任务执行错误码。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorCode?: string
  /**
   * 任务执行错误信息。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorMessage?: string
  /**
   * 结果视频 URL。有效期 24 小时。
   */
  ResultVideoUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitVideoVoiceJob返回参数结构体
 */
export interface SubmitVideoVoiceJobResponse {
  /**
   * 任务ID。
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 人脸图片和待被融合的素材模板图的人脸位置信息。
 */
export interface FaceMergeInfo {
  /**
   * 融合图片
   */
  MergeFaceImage?: Image
  /**
   * 上传的图片人脸位置信息（人脸框）
Width、Height >= 30。
   */
  MergeFaceRect?: FaceRect
  /**
   * 素材人脸ID，不填默认取上传图片中最大人脸。
   */
  TemplateFaceID?: string
}

/**
 * CheckAnimateImageJob返回参数结构体
 */
export interface CheckAnimateImageJobResponse {
  /**
   * 输入图是否通过校验。
   */
  CheckPass?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitVideoEditJob返回参数结构体
 */
export interface SubmitVideoEditJobResponse {
  /**
   * 任务ID。
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTemplateToVideoJob返回参数结构体
 */
export interface SubmitTemplateToVideoJobResponse {
  /**
   * 任务ID。
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckAnimateImageJob请求参数结构体
 */
export interface CheckAnimateImageJobRequest {
  /**
   * 动作模板ID。
   */
  TemplateId: string
  /**
   * 图片格式：支持PNG、JPG、JPEG、BMP、WEBP格式；
图片分辨率：长边分辨率范围【192，4096】；
图片大小：不超过10M；
图片宽高比：【宽：高】数值在 1:2 到 1:1.2 范围内
   */
  ImageUrl?: string
  /**
   * 图片base64数据。
图片格式：支持PNG、JPG、JPEG、BMP、WEBP格式；
图片分辨率：长边分辨率范围【192，4096】；
图片大小：不超过10M；
图片宽高比：【宽：高】数值在 1:2 到 1:1.2 范围内
   */
  ImageBase64?: string
  /**
   * 是否对输入图采用加强检测方案。

默认不加强检测（false），仅对输入图做必要的基础检测。

开启加强检测（true）有助于提升效果稳定性，将根据选择的动作模板提取建议的人体关键点，并判断输入图中是否包含这些人体关键点。加强检测仅对人像输入图生效，对非人输入图不生效。
   */
  EnableBodyJoins?: boolean
  /**
   * 是否开启人脸检测。

默认开启人脸检测（true），拦截主体为人像但无人脸、人脸不完整或被遮挡的输入图。可选关闭人脸检测（false）。
   */
  EnableFace?: boolean
}

/**
 * DescribeVideoStylizationJob请求参数结构体
 */
export interface DescribeVideoStylizationJobRequest {
  /**
   * 任务ID
   */
  JobId: string
}

/**
 * SubmitHumanActorJob返回参数结构体
 */
export interface SubmitHumanActorJobResponse {
  /**
   * 任务ID。
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeImageAnimateJob返回参数结构体
 */
export interface DescribeImageAnimateJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 错误码。
   */
  ErrorCode?: string
  /**
   * 错误信息。
   */
  ErrorMessage?: string
  /**
   * 结果视频URL。有效期 24 小时。
   */
  ResultVideoUrl?: string
  /**
   * 掩码视频链接
   */
  MaskVideoUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitPortraitSingJob请求参数结构体
 */
export interface SubmitPortraitSingJobRequest {
  /**
   * 传入音频URL地址，音频要求：
- 音频时长：2秒 - 60秒
- 音频格式：mp3、wav、m4a
   */
  AudioUrl: string
  /**
   * 传入图片URL地址，图片要求：
- 图片格式：jpg、jpeg、png、bmp、webp
- 图片分辨率：192～4096
- 图片大小：不超过10M
- 图片宽高比：图片【宽：高】在1:2到2:1范围内
- 图片内容：避免上传无人脸、无宠物脸或脸部过小、不完整、不清晰、偏转角度过大、嘴部被遮挡的图片。
   */
  ImageUrl?: string
  /**
   * 传入图片Base64编码，编码后请求体大小不超过10M。
图片Base64编码与URL地址必传其一，如果都传以ImageBase64为准。
   */
  ImageBase64?: string
  /**
   * 唱演模式，默认使用人像模式。
Person：人像模式，仅支持上传人像图片，人像生成效果更好，如果图中未检测到有效人脸将被拦截，生成时会将视频短边分辨率放缩至512。
Pet：宠物模式，支持宠物等非人像图片，固定生成512:512分辨率视频。
   */
  Mode?: string
  /**
   * 生成视频尺寸。可选取值："512:512"。

人像模式下，如果不传该参数，默认生成视频的短边分辨率为512，长边分辨率不固定、由模型根据生成效果自动适配得到。如需固定生成分辨率可传入512:512。

宠物模式下，如果不传该参数，默认将脸部唱演视频回贴原图，生成视频分辨率与原图一致。如不需要脸部回贴，仅保留脸部唱演视频，可传入512:512。
   */
  Resolution?: string
  /**
   * 为生成视频添加标识的开关，默认为1。 
1：添加标识；
 0：不添加标识；
其他数值：默认按1处理。 
建议您使用显著标识来提示，该视频是 AI 生成的视频。
   */
  LogoAdd?: number
  /**
   * 标识内容设置。 默认在生成视频的右下角添加“视频由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
   */
  LogoParam?: LogoParam
}

/**
 * 水印图输入框
 */
export interface LogoRect {
  /**
   * 水印图框X坐标值。当值大于0时，坐标轴原点位于原图左侧，方向指右；当值小于0时，坐标轴原点位于原图右侧，方向指左。
   */
  X?: number
  /**
   * 水印图框Y坐标值。当值大于0时，坐标轴原点位于原图上侧，方向指下；当值小于0时，坐标轴原点位于原图下侧，方向指上。
   */
  Y?: number
  /**
   * 水印图框宽度。
   */
  Width?: number
  /**
   * 水印图框高度。
   */
  Height?: number
}

/**
 * SubmitVideoVoiceJob请求参数结构体
 */
export interface SubmitVideoVoiceJobRequest {
  /**
   * 输入视频的Url  上传视频时长限制：1-15s 视频格式：MP4，MOV 视频大小：不超过1 GB URL地址中不能包含中文字符。
   */
  VideoUrl?: string
  /**
   * 描述音效内容的正向提示词。输入上限50个字符。
   */
  Prompt?: string
  /**
   * 音效内容的原始负向提示词。输入上限50个字符。
   */
  NegativePrompt?: string
  /**
   * 为生成视频添加标识的开关，默认为1。 1：添加标识。 0：不添加标识。 其他数值：默认按1处理。 建议您使用显著标识来提示，该视频是 AI 生成的视频。
   */
  LogoAdd?: number
  /**
   * 标识内容设置。 默认在生成视频的右下角添加“视频由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
   */
  LogoParam?: LogoParam
}

/**
 * SubmitHunyuanToVideoJob返回参数结构体
 */
export interface SubmitHunyuanToVideoJobResponse {
  /**
   * 任务ID
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHumanActorJob返回参数结构体
 */
export interface DescribeHumanActorJobResponse {
  /**
   * 任务状态。  WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 结果视频URL。有效期 24 小时。
   */
  ResultVideoUrl?: string
  /**
   * 任务执行错误码。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorCode?: string
  /**
   * 任务执行错误信息。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 扩展字段。
 */
export interface ExtraParam {
  /**
   * 预签名的上传url，支持把视频直接传到客户指定的地址。
   */
  UserDesignatedUrl?: string
}

/**
 * DescribeVideoEditJob返回参数结构体
 */
export interface DescribeVideoEditJobResponse {
  /**
   * 任务状态。  WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 结果视频URL。有效期 24 小时。
   */
  ResultVideoUrl?: string
  /**
   * 任务执行错误码。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorCode?: string
  /**
   * 任务执行错误信息。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorMessage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoStylizationJob返回参数结构体
 */
export interface DescribeVideoStylizationJobResponse {
  /**
   * 任务ID。
   */
  JobId?: string
  /**
   * 任务状态码。取值说明：
JobInit:  "初始化中"；
JobModerationFailed: "审核失败"；
JobRunning: "处理中"；
JobFailed: "处理失败"；
JobSuccess: "处理完成"。
   */
  StatusCode?: string
  /**
   * 任务状态描述。取值说明：
JobInit:  "初始化中"；
JobModerationFailed: "审核失败"；
JobRunning: "处理中"；
JobFailed: "处理失败"；
JobSuccess: "处理完成"。
   */
  StatusMsg?: string
  /**
   * 处理结果视频Url。URL有效期为24小时。
   */
  ResultVideoUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitVideoStylizationJob返回参数结构体
 */
export interface SubmitVideoStylizationJobResponse {
  /**
   * 任务ID。任务有效期为48小时。
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitVideoFaceFusionJob请求参数结构体
 */
export interface SubmitVideoFaceFusionJobRequest {
  /**
   * 视频素材下载地址。用户自定义模版视频下载地址，使用前需要先调用视频审核接口进行内容审核。视频限制：分辨率≤4k，fps≤25，视频大小≤1G，时长≤20 秒，支持格式mp4。

输入视频建议：
姿态：人脸相对镜头水平方向角度转动不超过 90°,垂直方向角度转动不超过 20°。遮挡：脸部遮挡面积不超过 50%，不要完全遮挡五官，不要有半透明遮挡（强光，玻璃，透明眼镜等）、以及细碎离散的脸部遮挡（如飘落的花瓣）。妆容及光照：避免浓妆、复杂妆容，避免复杂光照、闪烁，这些属性无法完全恢复，并对稳定性有影响。针对特殊表情和微表情，针对局部肌肉控制下的微表情，以及过于夸张的特殊表情等不保证表情效果完全恢复。
   */
  VideoUrl?: string
  /**
   * 视频素材模板的人脸位置信息。
目前最多支持融合视频素材中的 6 张人脸  
输入图片要求：  
1、用户图限制大小不超过 10MB  
2、图片最大分辨率不超过 4k，建议最小为 128，  人脸框最小为 68
3、支持格式 jpg，png  
4、如果用户图中未指定人脸且有多张人脸，  默认融合最大人脸  
输入图片建议：  包含上述视频中出现的人物的单人照，并且正面、清晰、无遮挡
   */
  TemplateInfos?: Array<FaceTemplateInfo>
  /**
   * 用户人脸图片位置信息。
输入图片要求：
1、用户图限制大小不超过 10MB
2、图片最大分辨率不超过 4k，建议最小为 128，人脸框最小为 68
3、支持格式 jpg，png
4、如果未指定人脸且用户图中有多张人脸，
默认融合最大人脸
输入图建议：
正脸无遮挡
   */
  MergeInfos?: Array<FaceMergeInfo>
  /**
   * 为生成视频添加标识的开关，默认为1。 
1：添加标识。 0：不添加标识。 其他数值：默认按1处理。 
建议您使用显著标识来提示，该视频是 AI 生成的视频。
   */
  LogoAdd?: number
  /**
   * 视频水印Logo参数标识内容设置。   
默认在融合结果图右下角添加“AI生成”类似字样，您可根据自身需要替换为其他的Logo图片。   
输入建议：输入水印图片宽高需小于视频宽高
   */
  LogoParam?: LogoParam
}

/**
 * SubmitPortraitSingJob返回参数结构体
 */
export interface SubmitPortraitSingJobResponse {
  /**
   * 任务ID。任务有效期为48小时。
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTemplateToVideoJob请求参数结构体
 */
export interface SubmitTemplateToVideoJobRequest {
  /**
   * 特效模板名称。请在 [视频特效模板列表](https://cloud.tencent.com/document/product/1616/119194)  中选择想要生成的特效对应的 template 名称。
   */
  Template: string
  /**
   * 参考图像，不同特效输入图片的数量详见： [视频特效模板-图片要求说明](https://cloud.tencent.com/document/product/1616/119194)
- 支持传入图片Base64编码或图片URL（确保可访问）
- 图片格式：支持png、jpg、jpeg、webp、bmp、tiff
- 图片文件：大小不能超过10MB（base64后），图片分辨率不小于300*300px，不大于4096*4096，图片宽高比应在1:4 ~ 4:1之间
   */
  Images: Array<Image>
  /**
   * 为生成视频添加标识的开关，默认为1。传0 需前往  [控制台](https://console.cloud.tencent.com/vtc/setting) 申请开启显式标识自主完成后方可生效。
1：添加标识；
0：不添加标识；
其他数值：默认按1处理。
建议您使用显著标识来提示，该视频是 AI 生成的视频。
   */
  LogoAdd?: number
  /**
   * 标识内容设置。
默认在生成视频的右下角添加“ AI 生成”或“视频由 AI 生成”字样，如需替换为其他的标识图片，需前往  [控制台](https://console.cloud.tencent.com/vtc/setting) 申请开启显式标识自主完成。

   */
  LogoParam?: LogoParam
  /**
   * 视频输出分辨率，默认值：360p 。不同特效支持的清晰度及消耗积分数详见：[视频特效模板-单次调用消耗积分数列](https://cloud.tencent.com/document/product/1616/119194 )
   */
  Resolution?: string
  /**
   * 是否为生成的视频添加背景音乐。默认：false，  传 true 时系统将从预设 BGM 库中自动挑选合适的音乐并添加；不传或为 false 则不添加 BGM。
   */
  BGM?: boolean
  /**
   * 扩展字段。
   */
  ExtraParam?: ExtraParam
}

/**
 * SubmitImageToVideoGeneralJob请求参数结构体
 */
export interface SubmitImageToVideoGeneralJobRequest {
  /**
   * 输入图片
Base64 和 Url 必须提供一个，如果都提供以ImageUrl为准。
上传图url大小不超过 8M
支持jpg，png，jpeg，webp，bmp，tiff 格式
单边分辨率不超过5000，不小于50，长宽限制1:4 ~ 4:1
   */
  Image: Image
  /**
   * 视频内容的描述，中文正向提示词。最多支持200个 utf-8 字符（首尾空格不计入字符数）。
   */
  Prompt?: string
  /**
   * 输出视频分辨率。可选择：480p、720p、1080p。
   */
  Resolution?: string
  /**
   * 为生成视频添加标识的开关，默认为1，0 需前往 控制台 申请开启显示标识自主完成方可生效。  1：添加标识；  0：不添加标识；  其他数值：默认按1处理。
   */
  LogoAdd?: number
  /**
   * 默认在生成视频的右下角添加“ AI 生成”字样，如需替换为其他的标识图片，需前往 控制台 申请开启显示标识自主完成。
   */
  LogoParam?: LogoParam
}

/**
 * SubmitHunyuanToVideoJob请求参数结构体
 */
export interface SubmitHunyuanToVideoJobRequest {
  /**
   * 视频内容的描述，中文正向提示词。最多支持200个 utf-8 字符（首尾空格不计入字符数）。 示例值：一只猫在草原上奔跑，写实风格
   */
  Prompt: string
  /**
   * 输入图片
上传图url大小不超过 10M，base64不超过8M。
支持jpg，png，jpeg，webp，bmp，tiff 格式
单边分辨率不超过5000，不小于50，长宽限制1:4 ~ 4:1
   */
  Image?: Image
  /**
   * 目前仅支持720p视频分辨率，默认720p。
   */
  Resolution?: string
  /**
   * 为生成视频添加标识的开关，默认为1，0 需前往 控制台 申请开启显示标识自主完成方可生效。
 1：添加标识； 0：不添加标识； 其他数值：默认按1处理。
   */
  LogoAdd?: number
  /**
   * 默认在生成视频的右下角添加“ AI 生成”字样，如需替换为其他的标识图片，需前往 控制台 申请开启显示标识自主完成。
   */
  LogoParam?: LogoParam
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
 * DescribeVideoEditJob请求参数结构体
 */
export interface DescribeVideoEditJobRequest {
  /**
   * 任务ID。
   */
  JobId: string
}

/**
 * DescribeHumanActorJob请求参数结构体
 */
export interface DescribeHumanActorJobRequest {
  /**
   * 任务ID。
   */
  JobId: string
}

/**
 * DescribeImageToVideoGeneralJob请求参数结构体
 */
export interface DescribeImageToVideoGeneralJobRequest {
  /**
   * 任务ID
   */
  JobId: string
}

/**
 * DescribeTemplateToVideoJob请求参数结构体
 */
export interface DescribeTemplateToVideoJobRequest {
  /**
   * 任务ID。
   */
  JobId: string
}

/**
 * SubmitVideoEditJob请求参数结构体
 */
export interface SubmitVideoEditJobRequest {
  /**
   * 输入视频

- 视频格式：MP4
- 视频时长：5s以内
- 视频分辨率：无限制（待验证是否可以无损输出）
   */
  VideoUrl: string
  /**
   * 视频内容的描述，中文正向提示词。最多支持200个 utf-8 字符（首尾空格不计入字符数）。
支持风格迁移、替换、元素增加、删除控制
   */
  Prompt: string
  /**
   * 图片base64或者图片url

- Base64 和 Url 必须提供一个，如果都提供以Url为准。
- 上传图url大小不超过 8M
- 支持jpg，png，jpeg，webp，bmp，tiff 格式
- 单边分辨率不超过5000，不小于50，长宽限制1:4 ~ 4:1
   */
  Image?: Image
  /**
   * 为生成视频添加标识的开关，默认为1。 1：添加标识。 0：不添加标识。 其他数值：默认按1处理。 建议您使用显著标识来提示，该视频是 AI 生成的视频。
   */
  LogoAdd?: number
  /**
   * 标识内容设置。 默认在生成视频的右下角添加“视频由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
   */
  LogoParam?: LogoParam
}

/**
 * DescribeImageAnimateJob请求参数结构体
 */
export interface DescribeImageAnimateJobRequest {
  /**
   * 任务ID。
   */
  JobId?: string
}

/**
 * DescribePortraitSingJob返回参数结构体
 */
export interface DescribePortraitSingJobResponse {
  /**
   * 任务ID
   */
  JobId?: string
  /**
   * 任务状态码
—RUN：处理中
—FAIL：处理失败
—STOP：处理终止
—DONE：处理完成
   */
  StatusCode?: string
  /**
   * 任务状态信息
   */
  StatusMsg?: string
  /**
   * 任务执行错误码。当任务状态不为FAIL时，该值为""。
   */
  ErrorCode?: string
  /**
   * 任务执行错误信息。当任务状态不为FAIL时，该值为""。
   */
  ErrorMessage?: string
  /**
   * 生成视频的URL地址。有效期24小时。
   */
  ResultVideoUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHunyuanToVideoJob返回参数结构体
 */
export interface DescribeHunyuanToVideoJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
   */
  Status?: string
  /**
   * 任务执行错误码。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorCode?: string
  /**
   * 任务执行错误信息。当任务状态不为 FAIL 时，该值为""。
   */
  ErrorMessage?: string
  /**
   * 结果视频 URL。有效期 24 小时。
   */
  ResultVideoUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
