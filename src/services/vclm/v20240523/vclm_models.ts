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
 * DescribePortraitSingJob请求参数结构体
 */
export interface DescribePortraitSingJobRequest {
  /**
   * 任务ID
   */
  JobId: string
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
 * SubmitTemplateToVideoJob请求参数结构体
 */
export interface SubmitTemplateToVideoJobRequest {
  /**
   * 特效模板名称。请在 [视频特效模板列表](https://cloud.tencent.com/document/product/1616/119194)  中选择想要生成的特效对应的 template 名称。
   */
  Template: string
  /**
   * 参考图像，最多输入2张图。
- 支持传入图片Base64编码或图片URL（确保可访问）
- 图片格式：支持png、jpg、jpeg、webp、bmp、tiff
- 图片文件：大小不能超过10MB（base64后），图片分辨率不小于300\*300px，不大于4096\*4096，图片宽高比应在1:4 ~ 4:1之间

   */
  Images: Array<Image>
  /**
   * 为生成视频添加标识的开关，默认为1。
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
   * 视频输出分辨率，默认值：360p  - 枚举值：  720p  360p。
   */
  Resolution?: string
  /**
   * 是否为生成的视频添加背景音乐。默认：false，  传 true 时系统将从预设 BGM 库中自动挑选合适的音乐并添加；不传或为 false 则不添加 BGM。
   */
  BGM?: boolean
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
   * 为生成视频添加标识的开关，默认为1，0 需前往 控制台 申请开启显示标识自主完成方可生效。  1：添加标识；  0：不添加标识；  其他数值：默认按1处理。
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
