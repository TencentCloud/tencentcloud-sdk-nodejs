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
 * SubmitImageToVideoJob请求参数结构体
 */
export interface SubmitImageToVideoJobRequest {
  /**
   * <p>模型名称。<br>v1.6：Kling-V1-6<br>v2.0：Kling-V2-Master<br>v2.1：Kling-V2-1<br>v2.5：Kling-V2-5-Turbo<br>v2.6：Kling-V2-6<br>V3.0：kling-v3</p>
   */
  Model?: string
  /**
   * <p>参考图像。</p><ul><li>支持传入图片Base64编码或图片URL（确保可访问）</li><li>图片文件大小不能超过10MB，图片分辨率不小于300*300px，图片宽高比要在1:2.5 ~ 2.5:1之间</li><li>Image 参数与 ImageTail 参数至少二选一，二者不能同时为空</li><li>图片格式支持.jpg / .jpeg / .png</li></ul>
   */
  Image?: Image
  /**
   * <p>参考尾帧图像。</p><ul><li>支持传入图片Base64编码或图片URL（确保可访问）</li><li>图片文件大小不能超过10MB，图片分辨率不小于300*300px，图片宽高比要在1:2.5 ~ 2.5:1之间</li><li>Image 参数与 ImageTail 参数至少二选一，二者不能同时为空</li><li>图片格式支持.jpg / .jpeg / .png</li><li>ImageTail参数、DynamicMasks/StaticMask参数、CameraControl参数三选一，不能同时使用</li></ul>
   */
  ImageTail?: Image
  /**
   * <p>正向文本提示词。不能超过2500个字符</p>
   */
  Prompt?: string
  /**
   * <p>负向文本提示词。不能超过2500个字符</p>
   */
  NegativePrompt?: string
  /**
   * <p>生成视频时长，单位s。默认值为5。<br>枚举值：3，4，5，6，7，8，9，10，11，12，13，14，15</p><p>不同模型支持时长不同</p><ul><li>模型v1.6、v2.0、v2.5、v2.6：支持5、10</li><li>模型v3.0：支持3～15s</li></ul>
   */
  Duration?: string
  /**
   * <p>生成视频的模式<br>枚举值：std，pro<br>其中std：标准模式（标准），基础模式，性价比高<br>其中pro：专家模式（高品质），高表现模式，生成视频质量更佳</p><p>不同模型版本、视频模式支持范围不同</p><ul><li>v1.6：首尾帧与仅首帧情况下只支持pro</li><li>v2.0、v3.0 ：无需配置</li><li>v2.1、v2.5、v2.6：首尾帧情况下只支持pro</li></ul>
   */
  Mode?: string
  /**
   * <p>生成视频的自由度；值越大，模型自由度越小，与用户输入的提示词相关性越强。<br>v2.0、v2.5、v2.6模型的不支持当前参数<br>取值范围：[0, 1]</p>
   */
  CfgScale?: number
  /**
   * <p>生成视频时是否同时生成声音<br>枚举值：on，off<br>不同模型版本、视频模式支持范围不同</p><ul><li>v2.6：有首尾帧的pro模式只能生成无声的视频</li></ul>
   */
  Sound?: string
  /**
   * <p>为生成视频添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示，该视频是 AI 生成的视频。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成视频的右下角添加“视频由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>是否生成多镜头视频</p><ul><li>当前参数为true时，Prompt参数无效，且不支持设定首尾帧生视频</li><li>当前参数为false时，ShotType参数及MultiPrompt参数无效</li></ul>
   */
  MultiShot?: boolean
  /**
   * <p>分镜方式</p><ul><li>枚举值：customize，intelligence</li><li>当MultiShot参数为true时，当前参数必填</li></ul>
   */
  ShotType?: string
  /**
   * <p>各分镜信息，如提示词、时长等<br>通过Index、Prompt、Duration参数定义分镜序号及相应提示词和时长，其中：</p><ul><li>最多支持6个分镜，最小支持1个分镜</li><li>每个分镜相关内容的最大长度不超过512</li><li>每个分镜的时长不大于当前任务的总时长，不小于1</li><li>所有分镜的时长之和等于当前任务的总时长</li></ul><p>用key:value承载，如下：<br>&quot;MultiPrompt&quot;:[<br>    {<br>      &quot;Index&quot;:int,<br>    &quot;Prompt&quot;: &quot;string&quot;,<br>    &quot;Duration&quot;: &quot;5&quot;<br>  },<br>  {<br>      &quot;Index&quot;:int,<br>    &quot;Prompt&quot;: &quot;string&quot;,<br>    &quot;Duration&quot;: &quot;5&quot;<br>  }<br>]</p><ul><li>当MultiShot参数为true且ShotType参数为customize时，当前参数不得为空</li></ul>
   */
  MultiPrompt?: Array<MultiPrompt>
  /**
   * <p>参考主体列表</p><ul><li><p>基于主体库中主体的ID配置，用key:value承载，如下：</p><pre><code>  &quot;ElementList&quot;:[      {         &quot;ElementId&quot;:long    },    {         &quot;ElementId&quot;:long    }  ]</code></pre></li><li><p>最多支持3个参考主体</p></li><li><p>主体分为视频定制主体（简称：视频角色主体）和图片定制主体（简称：多图主体），适用范围不同，请注意区分</p></li><li><p>更多主体信息详见：可灵「主体库 3.0」使用指南</p></li></ul>
   */
  ElementList?: Array<Element>
  /**
   * <p>静态笔刷涂抹区域（用户通过运动笔刷涂抹的 mask 图片）<br>“运动笔刷”能力包含“动态笔刷 DynamicMasks”和“静态笔刷 StaticMask”两种<br>支持传入图片Base64编码或图片URL（确保可访问，格式要求同 Image 字段）<br>图片格式支持.jpg / .jpeg / .png<br>图片长宽比必须与输入图片相同（即Image字段），否则任务失败（failed）<br>StaticMask和 DynamicMasks.Mask这两张图片的分辨率必须一致，否则任务失败（failed）</p>
   */
  StaticMask?: string
  /**
   * <p>动态笔刷配置列表<br>可配置多组（最多6组），每组包含“涂抹区域 Mask”与“运动轨迹 Trajectories”序列</p>
   */
  DynamicMasks?: Array<DynamicMask>
  /**
   * <p>控制摄像机运动的协议（如未指定，模型将根据输入的文本/图片进行智能匹配）</p>
   */
  CameraControl?: CameraControl
  /**
   * <p>本次任务结果回调通知地址，如果配置，服务端会在任务状态发生变更时主动通知</p>
   */
  CallbackUrl?: string
  /**
   * <p>生成视频时所引用的音色的列表</p><p>一次视频生成任务至多引用2个音色<br>当VoiceList参数不为空且Prompt参数中引用音色ID时，视频生成任务按“有指定音色”计量计费<br>VoiceId参数值通过音色定制接口返回，也可使用系统预置音色，详见音色定制相关API；非对口型API的VoiceId<br>ElementList参数与VoiceList参数互斥，不能共存<br>v3模型不支持指定音色<br>用key:value承载，如下：<br>&quot;VoiceList&quot;:[<br>  {&quot;VoiceId&quot;:&quot;VoiceId_1&quot;},<br>  {&quot;VoiceId&quot;:&quot;VoiceId_2&quot;}<br>]</p>
   */
  VoiceList?: Array<Voice>
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
 * DescribeImageToVideoViduJob返回参数结构体
 */
export interface DescribeImageToVideoViduJobResponse {
  /**
   * <p>任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功</p>
   */
  Status?: string
  /**
   * <p>任务执行错误码。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorCode?: string
  /**
   * <p>任务执行错误信息。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorMessage?: string
  /**
   * <p>结果视频 URL。有效期 24 小时。</p>
   */
  ResultVideoUrl?: string
  /**
   * <p>该任务消耗的积分数量。</p>
   */
  Credits?: number
  /**
   * <p>任务调用时传入的透传参数。</p>
   */
  Payload?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTextToVideoViduJob请求参数结构体
 */
export interface SubmitTextToVideoViduJobRequest {
  /**
   * <p>文本提示词<br>生成视频的文本描述。<br>注：字符长度不能超过 2000 个字符</p>
   */
  Prompt: string
  /**
   * <p>模型名称，可选值，默认viduq2</p><ul><li>viduq2：最新模型</li><li>viduq3-turbo：对比viduq3-pro，生成速度更快</li><li>viduq3-pro：高效生成优质音视频内容，让视频内容更生动、更形象、更立体，效果更好</li></ul>
   */
  Model?: string
  /**
   * <p>视频时长参数，默认值依据模型而定：</p><ul><li>viduq3-pro、viduq3-turbo: 默认5秒，可选：1-16</li><li>viduq2 : 默认5秒，可选：1-10</li></ul>
   */
  Duration?: number
  /**
   * <p>是否为生成的视频添加背景音乐。<br>默认：false，可选值 true 、false<br>传 true 时系统将从预设 BGM 库中自动挑选合适的音乐并添加；不传或为 false 则不添加 BGM。</p><ul><li>BGM不限制时长，系统根据视频时长自动适配</li><li>BGM参数在q2模型的duration为 9秒 或 10秒 时不生效；该参数在q3系列模型中不生效</li></ul>
   */
  Bgm?: boolean
  /**
   * <p>比例<br>默认 16:9，可选值如下：16:9、9:16、4:3、3:4、1:1</p>
   */
  AspectRatio?: string
  /**
   * <p>分辨率参数，默认值依据模型和视频时长而定：</p><ul><li>viduq3-pro、viduq3-turbo(1-16秒)：默认 720p，可选：540p、720p、1080p</li><li>viduq2(1-10秒)：默认 720p，可选：540p、720p、1080p</li></ul>
   */
  Resolution?: string
  /**
   * <p>风格<br>默认 general，可选值：general、anime<br>general：通用风格，可以通过提示词来控制风格<br>anime：动漫风格，仅在动漫风格表现突出，可以通过不同的动漫风格提示词来控制<br>注：使用q2、q3系列模型时该参数不生效</p>
   */
  Style?: string
  /**
   * <p>运动幅度<br>默认 auto，可选值：auto、small、medium、large<br>注：使用q2、q3系列模型时该参数不生效</p>
   */
  MovementAmplitude?: string
  /**
   * <p>是否使用音视频直出能力，默认为true，枚举值为：</p><ul><li>false：不需要音视频直出，输出静音视频</li><li>true：需要音画同步，输出声音的视频（包括台词和音效）<br>注1：仅q3系列模型支持该参数</li></ul>
   */
  Audio?: boolean
  /**
   * <p>元数据标识，json格式字符串，透传字段，您可以 自定义格式 或使用 示例格式 ，示例如下：<br>{<br>&quot;Label&quot;: &quot;your_label&quot;,<br>&quot;ContentProducer&quot;: &quot;your_content_producer&quot;,<br>&quot;ContentPropagator&quot;: &quot;your_content_propagator&quot;,<br>&quot;ProduceID&quot;: &quot;your_product_id&quot;,<br>&quot;PropagateID&quot;: &quot;your_propagate_id&quot;,<br>&quot;ReservedCode1&quot;: &quot;your_reserved_code1&quot;,<br>&quot;ReservedCode2&quot;: &quot;your_reserved_code2&quot;<br>}<br>该参数为空时，默认使用vidu生成的元数据标识</p>
   */
  MetaData?: string
  /**
   * <p>Callback 协议<br>需要您在创建任务时主动设置 callback_url，请求方法为 POST，当视频生成任务完成时，将向此地址发送包含任务最新状态的回调请求。回调请求内容结构与查询任务API的返回体一致<br>回调返回的&quot;status&quot;包括以下状态：</p><ul><li>success 任务完成（如发送失败，回调三次）</li><li>failed 任务失败（如发送失败，回调三次）</li></ul>
   */
  CallbackUrl?: string
  /**
   * <p>透传参数 不做任何处理，仅数据传输 注：最多 1048576个字符</p>
   */
  Payload?: string
  /**
   * <p>错峰模式，默认为：false，可选值：</p><ul><li>true：错峰生成视频；</li><li>false：即时生成视频；<br>注1：错峰模式消耗的积分更低<br>注2：错峰模式下提交的任务，会在48小时内生成，未能完成的任务会被自动取消，并返还该任务的积分</li></ul>
   */
  OffPeak?: boolean
  /**
   * <p>为生成结果图添加显式水印标识的开关，默认为1。<br>1：添加。<br>0：不添加。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。<br>示例值：1</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
}

/**
 * SubmitVideoEditJob请求参数结构体
 */
export interface SubmitVideoEditJobRequest {
  /**
   * <p>参考视频URL。默认为待编辑视频。</p><ul><li>视频格式：支持MP4</li><li>视频时长：输入视频时长≤10秒</li><li>视频大小：不超过200M</li><li>视频文件：输入的视频帧率及分辨率不做限制（建议输入16：9或9：16的视频；分辨率建议在2160px内，帧率建议在60fps内）；输出视频是帧率会≥16fps，分辨率为720p</li></ul>
   */
  VideoUrl: string
  /**
   * <p>视频内容的描述，中文正向提示词。支持视频内容增加、删除、修改等能力</p><ul><li>最多支持200个 utf-8 字符（首尾空格不计入字符数）</li><li>不传prompt的时候，Images.N参考图列表必须要传图，且传的图片是经过图片编辑之后的结果图</li></ul>
   */
  Prompt?: string
  /**
   * <p>参考图列表。用于对视频内容做风格迁移、内容替换、内容删减、内容增加做参考。</p><ul><li>支持传入图片Base64编码或图片URL</li><li>图片格式：支持jpg，png，jpeg，webp，bmp，tiff 格式</li><li>图片文件：大小不能超过10MB（base64后）。单边分辨率不超过5000px，不小于50px，图片长宽限制1:4 ~ 4:1。<br>示例值：[{ &quot;Url&quot;: &quot;https://console.cloud.tencent.com/cos/image.png&quot;}]</li></ul>
   */
  Images?: Array<Image>
  /**
   * <p>图片base64或者图片url</p><ul><li>Base64 和 Url 必须提供一个，如果都提供以Url为准。</li><li>上传图url大小不超过 8M</li><li>支持jpg，png，jpeg，webp，bmp，tiff 格式</li><li>单边分辨率不超过5000，不小于50，长宽限制1:4 ~ 4:1</li></ul>
   * @deprecated
   */
  Image?: Image
  /**
   * <p>扩展字段。</p>
   */
  VideoEditParam?: VideoEditParam
  /**
   * <p>为生成视频添加标识的开关，默认为1。传0 需前往  <a href="https://console.cloud.tencent.com/vtc/setting">控制台</a>  申请开启显式标识自主完成后方可生效。<br>1：添加标识；<br>0：不添加标识；<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示，该视频是 AI 生成的视频。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成视频的右下角添加“ AI 生成”或“视频由 AI 生成”字样，如需替换为其他的标识图片，需前往   <a href="https://console.cloud.tencent.com/vtc/setting">控制台</a>  申请开启显式标识自主完成。</p>
   */
  LogoParam?: LogoParam
}

/**
 * DescribeVideoExtendKlingJob请求参数结构体
 */
export interface DescribeVideoExtendKlingJobRequest {
  /**
   * <p>任务ID。</p>
   */
  JobId?: string
}

/**
 * SubmitVideoEditKlingJob请求参数结构体
 */
export interface SubmitVideoEditKlingJobRequest {
  /**
   * <p>文本提示词，可包含正向描述和负向描述</p><p>可将提示词模板化来满足不同的视频生成需求</p><p>不能超过2500个字</p>
   */
  Prompt?: string
  /**
   * <p>模型名称，支持kling-video-o1，kling-v3-omni。默认kling-video-o1。</p>
   */
  Model?: string
  /**
   * <p>参考图列表</p><p>包括主体、场景、风格等参考图片，也可作为首帧或尾帧生成视频；当作为首帧或尾帧生成视频时：</p><p>通过type参数来定义图片是否为首尾帧：first_frame为首帧，end_frame为尾帧</p><p>暂时不支持仅尾帧，即有尾帧图时必须有首帧图</p><p>首帧或首尾帧生视频时，不能使用视频编辑功能</p><p>用key:value承载，如下：</p><p>&quot;ImageInfo&quot;:[<br>    {<br>      &quot;ImageUrl&quot;:&quot;https://cos.ap-guangzhou.myqcloud.com/test.png&quot;,<br>    &quot;Type&quot;:&quot;first_frame&quot;<br>  },<br>  {<br>      &quot;ImageUrl&quot;:&quot;https://cos.ap-guangzhou.myqcloud.com/test.png&quot;,<br>    &quot;Type&quot;:&quot;end_frame&quot;<br>  }<br>]<br>支持传入图片URL（确保可访问）</p><p>图片格式支持.jpg / .jpeg / .png</p><p>图片文件大小不能超过10MB，图片宽高尺寸不小于300px，不大于8000px，图片宽高比要在1:2.5 ~ 2.5:1之间</p><p>有参考视频时，参考图片数量不得超过4；无参考视频时，参考图片数量不得超过7</p><p>数组中超过2张图片时，不支持设置尾帧</p>
   */
  ImageList?: Array<ImageInfo>
  /**
   * <p>生成视频的画面纵横比（宽:高）</p><p>枚举值：16:9, 9:16, 1:1</p><p>未使用首帧参考或视频编辑功能时，当前参数必填</p>
   */
  AspectRatio?: string
  /**
   * <p>生成视频时长，单位s</p><p>枚举值：3，4，5，6，7，8，9，10，其中：使用文生视频、首帧图生视频时，仅支持5和10s<br>使用视频编辑功能（“refer_type”:“base”）时，输出结果与传入视频时长相同，此时当前参数无效；此时，按输入视频时长四舍五入取整计量计费</p>
   */
  Duration?: number
  /**
   * <p>为生成视频添加标识的开关，默认为1，0 需前往 控制台 申请开启显示标识自主完成方可生效。 1：添加标识； 0：不添加标识； 其他数值：默认按1处理。</p>
   */
  LogoAdd?: number
  /**
   * <p>默认在生成视频的右下角添加“ AI 生成”字样，如需替换为其他的标识图片，需前往 控制台 申请开启显示标识自主完成。</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>生成视频的模式</p><p>枚举值：std，pro<br>其中std：标准模式（标准），基础模式，性价比高<br>其中pro：专家模式（高品质），高表现模式，生成视频质量更佳</p>
   */
  Mode?: string
  /**
   * <p>参考视频，通过URL方式获取</p><p>可作为特征参考视频，也可作为待编辑视频，默认为待编辑视频；可选择性保留视频原声<br>通过ReferType参数区分参考视频类型：feature为特征参考视频，base为待编辑视频<br>参考视频为待编辑视频时，不能定义视频首尾帧<br>通过KeepOriginalSound参数选择是否保留视频原声，yes为保留，no为不保留；当前参数对特征参考视频（feature）也生效</p><ul><li>视频格式仅支持MP4/MOV</li><li>仅支持时长≥3秒且≤10秒的视频</li><li>视频宽高尺寸需介于720px（含）和2160px（含）之间</li><li>视频帧率基于24fps～60fps，生成视频时会输出为24fps</li><li>至多仅支持上传1段视频，视频大小不超过200MB</li></ul>
   */
  VideoList?: Array<ReferVideoInfo>
  /**
   * <p>是否生成多镜头视频  当前参数为true时，prompt参数无效，且不支持设定首尾帧生视频  当前参数为false时，shot_type参数及multi_prompt参数无效</p>
   */
  MultiShot?: boolean
  /**
   * <p>分镜方式  枚举值：customize  当multi_shot参数为true时，当前参数必填</p>
   */
  ShotType?: string
  /**
   * <p>各分镜信息，如提示词、时长等  通过index、prompt、duration参数定义分镜序号及相应提示词和时长，其中：  最多支持6个分镜，最小支持1个分镜  每个分镜相关内容的最大长度不超过512  每个分镜的时长不大于当前任务的总时长，不小于1  所有分镜的时长之和等于当前任务的总时长</p>
   */
  MultiPrompt?: Array<MultiPrompt>
  /**
   * <p>参考主体列表  基于主体库中主体的ID配置，用key:value承载，如下：  &quot;element_list&quot;:[     {        &quot;element_id&quot;:long   },   {        &quot;element_id&quot;:long   } ] 参考主体数量与有无参考视频、参考图片数量有关，其中：  当使用首帧生成视频时，最多支持3个主体；  当使用首尾帧生成视频时，kling-v3-omni模型最多支持3个主体，kling-video-o1模不支持主体；  有参考视频时，参考图片数量和参考主体数量之和不得超过4，且不支持使用视频角色主体；  无参考视频时，参考图片数量和参考主体数量之和不得超过7；</p>
   */
  ElementList?: Array<Element>
  /**
   * <p>本次任务结果回调通知地址，如果配置，服务端会在任务状态发生变更时主动通知</p>
   */
  CallbackUrl?: string
  /**
   * <p>是否开启声音</p>
   */
  Sound?: string
}

/**
 * 生成视频时所引用的音色
 */
export interface Voice {
  /**
   * <p>音色id</p>
   */
  VoiceId?: string
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
 * DescribeReferenceToVideoViduJob返回参数结构体
 */
export interface DescribeReferenceToVideoViduJobResponse {
  /**
   * <p>任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功</p>
   */
  Status?: string
  /**
   * <p>任务执行错误码。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorCode?: string
  /**
   * <p>任务执行错误信息。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorMessage?: string
  /**
   * <p>结果视频 URL。有效期 24 小时。</p>
   */
  ResultVideoUrl?: string
  /**
   * <p>该任务消耗的积分数量。</p>
   */
  Credits?: number
  /**
   * <p>任务调用时传入的透传参数。</p>
   */
  Payload?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitMotionControlKlingJob请求参数结构体
 */
export interface SubmitMotionControlKlingJobRequest {
  /**
   * <p>模型名称  枚举值：kling-v2-6, kling-v3。</p>
   */
  Model?: string
  /**
   * <p>文本提示词，可包含正向描述和负向描述</p><p>可将提示词模板化来满足不同的视频生成需求</p><p>不能超过2500个字</p>
   */
  Prompt?: string
  /**
   * <p>参考图像，生成视频中的人物、背景等元素均以参考图为准  视频内容需满足以下要求：  人物比例尽量与参考动作比例一致，尽量避免全身动作驱动半身人物进行生成  人物需要露出清晰的上半身或全身的肢体及头部，避免遮挡  画面中人物避免存在极端朝向，比如倒立、平卧等。人物占画面比例不得太低  支持真实/风格化的角色（包括人物/类人动物/部分纯动物/部分类人肢体比例的角色）通过  包含支持传入图片Base64编码或图片URL（确保可访问）。</p>
   */
  Image?: string
  /**
   * <p>参考视频的获取链接。生成视频中的人物动作与参考视频一致。  视频内容需满足以下要求：  人物需要漏出清晰的上半身或全身的全部肢体及头部，避免遮挡  建议上传1人动作视频，2人及以上会取画面占比最大的人物动作进行生成  推荐使用真人动作，部分风格化的人物/类人肢体比例可以通过  动作视频一镜到底，角色始终出现在画面中，避免切镜、运镜等。否则会被截取  动作避免过快，相对平稳的动作生成效果更佳  视频文件支持.mp4/.mov，文件大小不超过100MB，仅支持长宽的边长均位于340px~3850px之间，上述校验不通过会返回错误码等信息  视频时长下限不短于3秒，时长上限与人物朝向参考（character_orientation）有关：  当人物朝向与视频中人物一致时，视频时长最长可达30秒；  当人物朝向与图片中人物一致时，视频时长最长可达10秒；  如果您的动作难度比较高、速度比较快，有一定概率生成不足上传视频时长的结果，因为模型只能提取有效动作时长进行生成，最短提取出3s可用连续动作即可生成。请注意，因此消耗的积分将无法退还，建议适当调整动作难度与速度  系统会校验视频内容，如有问题会返回错误码等信息。</p>
   */
  Video?: string
  /**
   * <p>生成视频的模式</p><p>枚举值：std，pro<br>其中std：标准模式（标准），基础模式，性价比高<br>其中pro：专家模式（高品质），高表现模式，生成视频质量更佳</p>
   */
  Mode?: string
  /**
   * <p>可选择是否保留视频原声  枚举值：yes，no  其中yes：保留视频原声  其中no：不保留视频原声。</p>
   */
  KeepOriginalSound?: string
  /**
   * <p>生成视频中人物的朝向，可选择与图片一致或与视频一致  枚举值：image，video，其中：  其中image：与图片中人物朝向一致；此时参考视频时长不得超过10秒；  其中video：与视频中人物朝向一致；此时参考视频时长不得超过30秒；  引用主体时，生成的视频暂时只能参考视频中的人物朝向。</p>
   */
  CharacterOrientation?: string
  /**
   * <p>参考主体列表  基于主体库中主体的ID配置，用key:value承载，如下：  &quot;element_list&quot;:[     {        &quot;element_id&quot;:long   },   {        &quot;element_id&quot;:long   } ] 参考主体数量与有无参考视频、参考图片数量有关，其中：  当使用首帧生成视频时，最多支持3个主体；  当使用首尾帧生成视频时，kling-v3-omni模型最多支持3个主体，kling-video-o1模不支持主体；  有参考视频时，参考图片数量和参考主体数量之和不得超过4，且不支持使用视频角色主体；  无参考视频时，参考图片数量和参考主体数量之和不得超过7；</p>
   */
  ElementList?: Array<Element>
  /**
   * <p>本次任务结果回调通知地址，如果配置，服务端会在任务状态发生变更时主动通知</p>
   */
  CallbackUrl?: string
  /**
   * <p>为生成视频添加标识的开关，默认为1，0 需前往 控制台 申请开启显示标识自主完成方可生效。 1：添加标识； 0：不添加标识； 其他数值：默认按1处理。</p>
   */
  LogoAdd?: number
  /**
   * <p>默认在生成视频的右下角添加“ AI 生成”字样，如需替换为其他的标识图片，需前往 控制台 申请开启显示标识自主完成。</p>
   */
  LogoParam?: LogoParam
}

/**
 * SubmitVideoExtendKlingJob请求参数结构体
 */
export interface SubmitVideoExtendKlingJobRequest {
  /**
   * <p>视频ID  支持通过文本、图片和视频延长生成的视频的ID（原视频不能超过3分钟）  请注意，基于目前的清理策略、视频生成30天之后会被清理，则无法进行延长</p>
   */
  VideoId: string
  /**
   * <p>正向文本提示词  不能超过2500个字符</p>
   */
  Prompt?: string
  /**
   * <p>负向文本提示词  不能超过2500个字符</p>
   */
  NegativePrompt?: string
  /**
   * <p>提示词参考强度  取值范围：[0,1]，数值越大参考强度越大</p>
   */
  CfgScale?: number
  /**
   * <p>本次任务结果回调通知地址，如果配置，服务端会在任务状态发生变更时主动通知</p>
   */
  CallbackUrl?: string
  /**
   * <p>为生成视频添加标识的开关，默认为1。传0 需前往  <a href="https://console.cloud.tencent.com/vtc/setting">控制台</a>  申请开启显式标识自主完成后方可生效。<br>1：添加标识；<br>0：不添加标识；<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示，该视频是 AI 生成的视频。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成视频的右下角添加“ AI 生成”或“视频由 AI 生成”字样，如需替换为其他的标识图片，需前往   <a href="https://console.cloud.tencent.com/vtc/setting">控制台</a>  申请开启显式标识自主完成。</p>
   */
  LogoParam?: LogoParam
}

/**
 * SubmitTemplateToVideoJob返回参数结构体
 */
export interface SubmitTemplateToVideoJobResponse {
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
 * SubmitTemplateToVideoJob请求参数结构体
 */
export interface SubmitTemplateToVideoJobRequest {
  /**
   * <p>特效模板名称。请在 <a href="https://cloud.tencent.com/document/product/1616/119194">视频特效模板列表</a>  中选择想要生成的特效对应的 template 名称。</p>
   */
  Template: string
  /**
   * <p>参考图像，不同特效输入图片的数量详见： <a href="https://cloud.tencent.com/document/product/1616/119194">视频特效模板-图片要求说明</a></p><ul><li>支持传入图片Base64编码或图片URL（确保可访问）</li><li>图片格式：支持png、jpg、jpeg、webp、bmp、tiff</li><li>图片文件：大小不能超过10MB（base64后），图片分辨率不小于300×300px，不大于4096×4096，图片宽高比应在1:4 ~ 4:1之间</li></ul>
   */
  Images: Array<Image>
  /**
   * <p>为生成视频添加标识的开关，默认为1。传0 需前往  <a href="https://console.cloud.tencent.com/vtc/setting">控制台</a> 申请开启显式标识自主完成后方可生效。<br>1：添加标识；<br>0：不添加标识；<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示，该视频是 AI 生成的视频。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成视频的右下角添加“ AI 生成”或“视频由 AI 生成”字样，如需替换为其他的标识图片，需前往  <a href="https://console.cloud.tencent.com/vtc/setting">控制台</a> 申请开启显式标识自主完成。</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>视频输出分辨率，默认值：360p 。不同特效支持的清晰度及消耗积分数详见：<a href="https://cloud.tencent.com/document/product/1616/119194">视频特效模板-单次调用消耗积分数列</a></p>
   */
  Resolution?: string
  /**
   * <p>是否为生成的视频添加背景音乐。默认：false，  传 true 时系统将从预设 BGM 库中自动挑选合适的音乐并添加；不传或为 false 则不添加 BGM。</p>
   */
  BGM?: boolean
  /**
   * <p>扩展字段。</p>
   */
  ExtraParam?: ExtraParam
}

/**
 * 水印图输入框
 */
export interface LogoRect {
  /**
   * <p>水印图框X坐标值。当值大于0时，坐标轴原点位于原图左侧，方向指右；当值小于0时，坐标轴原点位于原图右侧，方向指左。</p>
   */
  X?: number
  /**
   * <p>水印图框Y坐标值。当值大于0时，坐标轴原点位于原图上侧，方向指下；当值小于0时，坐标轴原点位于原图下侧，方向指上。</p>
   */
  Y?: number
  /**
   * <p>水印图框宽度。<br>单位：px</p>
   */
  Width?: number
  /**
   * <p>水印图框高度。<br>单位：px</p>
   */
  Height?: number
}

/**
 * DescribeVideoEditKlingJob请求参数结构体
 */
export interface DescribeVideoEditKlingJobRequest {
  /**
   * <p>任务ID</p>
   */
  JobId: string
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
 * DescribeTextToVideoJob返回参数结构体
 */
export interface DescribeTextToVideoJobResponse {
  /**
   * <p>任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功</p>
   */
  Status?: string
  /**
   * <p>任务执行错误码。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorCode?: string
  /**
   * <p>任务执行错误信息。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorMessage?: string
  /**
   * <p>结果视频 URL。有效期 24 小时。</p>
   */
  ResultVideoUrl?: string
  /**
   * <p>视频id</p>
   */
  VideoId?: string
  /**
   * <p>视频总时长，单位s</p>
   */
  Duration?: string
  /**
   * <p>任务最终扣减积分数值</p>
   */
  FinalUnitDeduction?: string
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
   * <p>预签名的上传url，支持把视频直接传到客户指定的地址。</p>
   */
  UserDesignatedUrl?: string
  /**
   * <p>回调地址<br>需要您在创建任务时主动设置 CallbackUrl，请求方法为 POST，当视频生成结束时，我们将向此地址发送生成结果。<br>数据格式如下：<br>{<br>    &quot;JobId&quot;: &quot;1397428070633955328&quot;,<br>    &quot;Status&quot;: &quot;DONE&quot;,<br>    &quot;ErrorCode&quot;: &quot;&quot;,<br>    &quot;ErrorMessage&quot;: &quot;&quot;,<br>    &quot;ResultVideoUrl&quot;: &quot;https://vcg.cos.tencentcos.cn/template_to_video/fa80b846-b933-4981-afad-8a39b46ef2ca.mp4&quot;<br>}</p>
   */
  CallbackUrl?: string
  /**
   * <p>BGM音频文本。</p>
   */
  BGMText?: string
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
   * 视频素材下载地址。用户自定义模板视频下载地址，使用前需要先调用视频审核接口进行内容审核。视频限制：分辨率≤4k，fps≤25，视频大小≤1G，时长≤20 秒，支持格式mp4。

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
 * SubmitReferenceToVideoViduJob请求参数结构体
 */
export interface SubmitReferenceToVideoViduJobRequest {
  /**
   * <p>文本提示词<br>生成视频的文本描述。<br>注1：字符长度不能超过 2000 个字符<br>注2：使用Subjects主体参数时，可以通过@主体id 来表示主体内容，例如：&quot;@1 和 @2 在一起吃火锅，并且旁白音说火锅大家都爱吃。&quot;</p>
   */
  Prompt: string
  /**
   * <p>图像参考<br>【非主体调用时传入】<br>支持上传1～7张图片，模型将以此参数中传入的图片中的主题为参考生成具备主体一致的视频。<br>支持传入图片 Base64 编码或图片URL（确保可访问）<br>图片支持 png、jpeg、jpg、webp格式<br>图片像素不能小于 128*128，且比例需要小于1:4或者4:1，且大小不超过50M。</p>
   */
  Images?: Array<string>
  /**
   * <p>参考生图主体信息，支持1-7个主体，主体图片共1 ～ 7张<br>【主体调用时传入】</p>
   */
  Subjects?: Array<ReferenceSubject>
  /**
   * <p>视频参考支持上传1～2个视频，模型将以此参数中传入的视频作为参考，生成具备主体一致的视频。<br>注1： 仅viduq2-pro模型支持该参数<br>注2：使用视频参考功能时，最多支持上传 1个8秒 视频 或 2个5秒 视频<br>注3：视频支持 mp4、avi、mov格式<br>注4：视频像素不能小于 128*128，且比例需要小于1:4或者4:1，且大小不超过100M。</p>
   */
  Videos?: Array<string>
  /**
   * <p>模型名称，可选值，当前仅可并且默认viduq2</p><ul><li>viduq2：最新模型</li></ul>
   */
  Model?: string
  /**
   * <p>是否使用音视频直出能力，默认false，可选值 true、false</p><ul><li>true：使用音视频直出能力。</li><li>false：不使用音视频直出能力。<br>仅上传主体时支持此功能</li></ul>
   */
  Audio?: boolean
  /**
   * <p>音频类型，audio为true时必填，默认为all</p><p>枚举值：</p><ul><li>all： 音效+人声</li><li>speech_only： 仅人声</li><li>sound_effect_only： 仅音效</li></ul>
   */
  AudioType?: string
  /**
   * <p>是否为生成的视频添加背景音乐。<br>默认：false，可选值 true 、false<br>【仅支持非主体调用时生效】</p><ul><li>传 true 时系统将从预设 BGM 库中自动挑选合适的音乐并添加；不传或为 false 则不添加 BGM。</li><li>BGM不限制时长，系统根据视频时长自动适配</li><li>BGM参数在q2系列模型的duration为 9秒 或 10秒 时不生效</li></ul>
   */
  Bgm?: boolean
  /**
   * <p>视频时长参数：<br>默认5秒，可选：1-10（整数）</p>
   */
  Duration?: number
  /**
   * <p>比例<br>默认值：16:9<br>【非主体调用时】<br>可选值如下：16:9、9:16、4:3、3:4、1:1</p><p>【主体调用时】<br>可选值如下：16:9、9:16、1:1<br>注：q2模型 支持任意宽高比</p>
   */
  AspectRatio?: string
  /**
   * <p>分辨率参数<br>默认 720p, 可选：540p、720p、1080p</p>
   */
  Resolution?: string
  /**
   * <p>运动幅度默认 auto，可选值：auto、small、medium、large<br>注：使用q2系列模型时该参数不生效</p>
   */
  MovementAmplitude?: string
  /**
   * <p>元数据标识，json格式字符串，透传字段，您可以 自定义格式 或使用 示例格式 ，示例如下：<br>{<br>&quot;Label&quot;: &quot;your_label&quot;,&quot;ContentProducer&quot;: &quot;yourcontentproducer&quot;,&quot;ContentPropagator&quot;: &quot;your_content_propagator&quot;,&quot;ProduceID&quot;: &quot;yourproductid&quot;, &quot;PropagateID&quot;: &quot;your_propagate_id&quot;,&quot;ReservedCode1&quot;: &quot;yourreservedcode1&quot;, &quot;ReservedCode2&quot;: &quot;your_reserved_code2&quot;<br>}<br>该参数为空时，默认使用vidu生成的元数据标识</p>
   */
  MetaData?: string
  /**
   * <p>Callback 协议<br>需要您在创建任务时主动设置 callback_url，请求方法为 POST，当视频生成完成时，将向此地址发送包含任务最新状态的回调请求。回调请求内容结构与查询任务API的返回体一致<br>回调返回的&quot;status&quot;包括以下状态：</p><ul><li>success 任务完成（如发送失败，回调三次）</li><li>failed 任务失败（如发送失败，回调三次）</li></ul>
   */
  CallbackUrl?: string
  /**
   * <p>透传参数不做任何处理，仅数据传输注：最多 1048576个字符</p>
   */
  Payload?: string
  /**
   * <p>错峰模式，默认为：false，可选值：</p><ul><li>true：错峰生成视频；</li><li>false：即时生成视频；<br>注1：错峰模式消耗的积分更低<br>注2：错峰模式下提交的任务，会在48小时内生成，未能完成的任务会被自动取消，并返还该任务的积分</li></ul>
   */
  OffPeak?: boolean
  /**
   * <p>为生成结果图添加显式水印标识的开关，默认为1。<br>1：添加。<br>0：不添加。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。<br>示例值：1</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
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
   * 生成视频的帧率，从16, 24, 30中选择。默认值：30
   */
  Fps?: number
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
 * SubmitImageToVideoViduJob请求参数结构体
 */
export interface SubmitImageToVideoViduJobRequest {
  /**
   * <p>上传单张图时【首帧生视频】：</p><p>模型将以此参数中传入的图片为首帧画面来生成视频。<br>注1：支持传入图片 Base64 编码或图片URL（确保可访问）；<br>注2：支持上传1 张图；<br>注3：图片支持 png、jpeg、jpg、webp格式；<br>注4：图片比例需要小于 1:4 或者 4:1 ；<br>注5：图片大小不超过50M。</p><p>上传两张图时【首尾帧生视频】：<br>上传的第一张图片视作首帧图，第二张图片视作尾帧图，模型将以此参数中传入的图片来生成视频<br>注1: 首尾帧两张输入图的分辨率需相近，首帧图的分辨率/尾帧图的分辨率要在0.8～1.25之间。且图片比例需要小于1:4或者4:1；<br>注2: 支持传入图片 Base64 编码或图片URL（确保可访问）；<br>注3: 图片支持 png、jpeg、jpg、webp格式；<br>注4: 图片大小不超过50M；</p>
   */
  Images: Array<string>
  /**
   * <p>模型名称，可选值，默认值viduq2-turbo</p><ul><li>viduq2-pro：新模型，效果好，细节丰富</li><li>viduq2-turbo：新模型，效果好，生成快</li><li>viduq3-turbo：对比viduq3-pro，生成速度更快</li><li>viduq3-pro：高效生成优质音视频内容，让视频内容更生动、更形象、更立体，效果更好</li></ul>
   */
  Model?: string
  /**
   * <p>文本提示词<br>生成视频的文本描述。<br>注1：字符长度不能超过 2000 个字符<br>注2：若使用is_rec推荐提示词参数，模型将不考虑此参数所输入的提示词</p>
   */
  Prompt?: string
  /**
   * <p>是否使用推荐提示词，默认关闭<br>-true：是，由系统自动推荐提示词，并使用提示词内容生成视频，推荐提示词数量=1<br>-false：否，根据输入的prompt生成视频<br>注意：启用推荐提示词后，每个任务多消耗1积分</p>
   */
  IsRec?: boolean
  /**
   * <p>【首帧生视频】</p><p>是否使用音视频直出能力，默认关闭，枚举值为：</p><ul><li>false：不需要音视频直出，输出静音视频</li><li>true：需要音视频直出，输出带台词以及背景音的视频<br>注1：该参数为true时，voice_id参数才生效<br>注2：该参数为true时，仅q3模型支持错峰<br>注3：当model 为q3-pro或q3-turbo 时，该参数默认值为true</li></ul><p>【首尾帧生视频】</p><ul><li>false：不需要音视频直出，输出静音视频</li><li>true：需要音画同步，输出声音的视频（包括台词和音效）<br>注1：仅q3系列模型支持该参数</li></ul>
   */
  Audio?: boolean
  /**
   * <p>音色id<br>用来决定视频中的声音音色，为空时系统会自动推荐，可选枚举值参考列表：新音色列表<br>暂不支持声音复刻功能</p>
   */
  VoiceId?: string
  /**
   * <p>视频时长参数：<br>【首帧生视频】：<br>viduq3-pro、viduq3-turboxa0默认为 5，可选：1 - 16<br>viduq2-pro、viduq2-turboxa0默认为 5，可选：1 - 10</p><p>【首尾帧生视频】：<br>viduq3-proxa0、viduq3-turbo默认为 5，可选：1 - 16<br>viduq2-pro、viduq2-turboxa0默认为 5，可选：1 - 8</p>
   */
  Duration?: number
  /**
   * <p>分辨率参数<br>【首帧生视频】：</p><ul><li>viduq3-pro 、viduq3-turbo 1-16秒：默认 720p，可选：540p、720p、1080p</li><li>viduq2-pro、viduq2-turbo 1-10秒：默认 720p，可选：720p、1080p<br>示例值：720p</li></ul><p>【首尾帧生视频】：<br>-xa0viduq3-proxa0、viduq3-turbo1-16秒：默认 720p，可选：540p、720p、1080p<br>-xa0viduq2-proxa0、xa0viduq2-turbo1-8秒：默认 720p，可选：540p、720p、1080p</p>
   */
  Resolution?: string
  /**
   * <p>运动幅度<br>默认 auto，可选值：auto、small、medium、large<br>注：q2、q3系列模型改参数不生效</p>
   */
  MovementAmplitude?: string
  /**
   * <p>bgm</p>
   */
  Bgm?: boolean
  /**
   * <p>音频类型，audio为true时必填，默认为all<br>注：该参数目前仅支持q2、q1、2.0系列模型的音频拆分</p><p>枚举值：</p><ul><li>all： 音效+人声</li><li>speech_only： 仅人声</li><li>sound_effect_only： 仅音效</li></ul>
   */
  AudioType?: string
  /**
   * <p>元数据标识，json格式字符串，透传字段，您可以 自定义格式 或使用 示例格式 ，示例如下：<br>{<br>&quot;Label&quot;: &quot;your_label&quot;,<br>&quot;ContentProducer&quot;: &quot;your_content_producer&quot;,<br>&quot;ContentPropagator&quot;: &quot;your_content_propagator&quot;,<br>&quot;ProduceID&quot;: &quot;your_product_id&quot;,<br>&quot;PropagateID&quot;: &quot;your_propagate_id&quot;,<br>&quot;ReservedCode1&quot;: &quot;your_reserved_code1&quot;,<br>&quot;ReservedCode2&quot;: &quot;your_reserved_code2&quot;<br>}<br>该参数为空时，默认使用vidu生成的元数据标识</p>
   */
  MetaData?: string
  /**
   * <p>Callback 协议<br>需要您在创建任务时主动设置 callback_url，请求方法为 POST，当视频生成完成时，将向此地址发送包含任务最新状态的回调请求。回调请求内容结构与查询任务API的返回体一致<br>回调返回的&quot;status&quot;包括以下状态：</p><ul><li>success 任务完成（如发送失败，回调三次）</li><li>failed 任务失败（如发送失败，回调三次）</li></ul>
   */
  CallbackUrl?: string
  /**
   * <p>透传参数<br>不做任何处理，仅数据传输<br>注：最多 1048576个字符</p>
   */
  Payload?: string
  /**
   * <p>错峰模式，默认为：false，可选值：</p><ul><li>true：错峰生成视频；</li><li>false：即时生成视频；<br>注1：错峰模式消耗的积分更低<br>注2：错峰模式下提交的任务，会在48小时内生成，未能完成的任务会被自动取消，并返还该任务的积分</li></ul>
   */
  OffPeak?: boolean
  /**
   * <p>为生成结果图添加显式水印标识的开关，默认为1。<br>1：添加。<br>0：不添加。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。<br>示例值：1</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
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
 * SubmitAigcVideoJob返回参数结构体
 */
export interface SubmitAigcVideoJobResponse {
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
 * SubmitImageToVideoViduJob返回参数结构体
 */
export interface SubmitImageToVideoViduJobResponse {
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
 * DescribeImageToVideoJob返回参数结构体
 */
export interface DescribeImageToVideoJobResponse {
  /**
   * <p>任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功</p>
   */
  Status?: string
  /**
   * <p>任务执行错误码。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorCode?: string
  /**
   * <p>任务执行错误信息。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorMessage?: string
  /**
   * <p>结果视频 URL。有效期 24 小时。</p>
   */
  ResultVideoUrl?: string
  /**
   * <p>视频id</p>
   */
  VideoId?: string
  /**
   * <p>视频总时长，单位s</p>
   */
  Duration?: string
  /**
   * <p>任务最终扣减积分数值</p>
   */
  FinalUnitDeduction?: string
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
 * DescribeHunyuanToVideoJob请求参数结构体
 */
export interface DescribeHunyuanToVideoJobRequest {
  /**
   * 任务ID
   */
  JobId: string
}

/**
 * DescribeMotionControlKlingJob请求参数结构体
 */
export interface DescribeMotionControlKlingJobRequest {
  /**
   * <p>任务ID</p>
   */
  JobId: string
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
   * <p>任务ID。</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 视频编辑参数
 */
export interface VideoEditParam {
  /**
   * 魔法词，针对特定场景生效。不同场景传不同的值。默认不传。
- 换人场景：1
   */
  Magic?: string
}

/**
 * 参考主体，主要用作参考图生视频。由主体id、主体图（三视图）以及声音组成。
 */
export interface ReferenceSubject {
  /**
   * <p>主体id，后续生成时在提示词中可以通过@主体id的方式使用。</p>
   */
  Id: string
  /**
   * <p>该主体对应的图片url，每个主体最多支持3张图片<br>注1：支持传入图片URL（确保可访问）<br>注2：图片支持 png、jpeg、jpg、webp格式<br>注3：图片像素不能小于 128*128，且比例需要小于1:4或者4:1，且大小不超过50M。</p>
   */
  Images: Array<string>
  /**
   * <p>主体id，后续生成时可以通过@主体id的方式使用</p>
   */
  Name?: string
  /**
   * <p>主体视频，该主体对应的视频url，与videos必填一个<br>注1： 仅viduq2-pro模型支持使用视频主体<br>注2：每个主体中的图片和视频，共享3个槽位<br>注3：支持1个5秒视频<br>注4：支持传入视频 URL（确保可访问）<br>注5：视频支持 mp4、avi、mov格式<br>注6：视频像素不能小于 128*128，且比例需要小于1:4或者4:1<br>注7：请注意，base64 decode之后的字节长度需要小于20M，且编码必须包含适当的内容类型字符串</p>
   */
  Videos?: Array<string>
  /**
   * <p>音色ID用来决定视频中的声音音色，为空时系统会自动推荐，可选枚举值参考列表：[音色列表](URL https://shengshu.feishu.cn/sheets/EgFvs6DShhiEBStmjzccr5gonOg)</p>
   */
  VoiceId?: string
}

/**
 * 参考图列表
 */
export interface ImageInfo {
  /**
   * 图片URL
   */
  ImageUrl: string
  /**
   * 首帧：first_frame
尾帧：end_frame
其他：空

   */
  Type?: string
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
 * DescribeMotionControlKlingJob返回参数结构体
 */
export interface DescribeMotionControlKlingJobResponse {
  /**
   * <p>任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功</p>
   */
  Status?: string
  /**
   * <p>任务执行错误码。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorCode?: string
  /**
   * <p>任务执行错误信息。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorMessage?: string
  /**
   * <p>结果视频 URL。有效期 24 小时。</p>
   */
  ResultVideoUrl?: string
  /**
   * <p>视频时长。</p>
   */
  Duration?: string
  /**
   * <p>消耗积分数。</p>
   */
  FinalUnitDeduction?: string
  /**
   * <p>视频id</p>
   */
  VideoId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参考视频信息
 */
export interface ReferVideoInfo {
  /**
   * 视频地址
   */
  VideoUrl?: string
  /**
   * 视频类型
feature为特征参考视频
base为待编辑视频
   */
  ReferType?: string
  /**
   * 否保留视频原声，yes为保留，no为不保留；
当前参数对特征参考视频（feature）也生效。
   */
  KeepOriginalSound?: string
}

/**
 * SubmitAigcVideoJob请求参数结构体
 */
export interface SubmitAigcVideoJobRequest {
  /**
   * <p>模型名称。</p><p>枚举值：</p><p>● Vidu；</p><p>● Kling：可灵；</p><p>● HY：混元；</p><p>● YT：优图；</p><p>示例值：Vidu</p>
   */
  Vendor: string
  /**
   * <p>模型版本。</p><p>枚举值：</p><p>● 当Vendor为Vidu时，可选值[q2, q2-pro, q2-turbo, q3-pro, q3-turbo]</p><p>● 当Vendor为Kling时，可选值[v1.6, v2.0, v2.1, v2.5, v2.6]</p><p>● 当Vendor为HY时，默认值：[v1.5]</p><p>● 当Vendor为YT时，默认值：[v2.0]</p>
   */
  Model: string
  /**
   * <p>模型参数Json-Format字符串<br> <a href="https://cloud.tencent.com/document/product/1616/128996">模型参数列表</a></p>
   */
  ModelParam?: string
  /**
   * <p>正向文本提示词。不能超过2000个字符</p><p>示例值：一只小猫在草地奔跑</p>
   */
  Prompt?: string
  /**
   * <p>为生成结果图添加显式水印标识的开关，默认为1。<br>1：添加。<br>0：不添加。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。<br>示例值：1</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
}

/**
 * SubmitReferenceToVideoViduJob返回参数结构体
 */
export interface SubmitReferenceToVideoViduJobResponse {
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
 * DescribeAigcVideoJob请求参数结构体
 */
export interface DescribeAigcVideoJobRequest {
  /**
   * 任务ID。

示例值：1194931538865782784
   */
  JobId?: string
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
 * DescribeVideoFaceFusionJob请求参数结构体
 */
export interface DescribeVideoFaceFusionJobRequest {
  /**
   * 任务ID
   */
  JobId?: string
}

/**
 * DescribeImageToVideoViduJob请求参数结构体
 */
export interface DescribeImageToVideoViduJobRequest {
  /**
   * <p>任务ID</p>
   */
  JobId: string
}

/**
 * SubmitVideoEditKlingJob返回参数结构体
 */
export interface SubmitVideoEditKlingJobResponse {
  /**
   * <p>任务ID</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 指定摄像机在不同方向上的运动或变化
 */
export interface CameraControlConfig {
  /**
   * 水平运镜，控制摄像机在水平方向上的移动量（沿x轴平移）

取值范围：[-10, 10]，负值表示向左平移，正值表示向右平移
   */
  Horizontal?: number
  /**
   * 垂直运镜，控制摄像机在垂直方向上的移动量（沿y轴平移）

取值范围：[-10, 10]，负值表示向下平移，正值表示向上平移
   */
  Vertical?: number
  /**
   * 水平摇镜，控制摄像机在水平面上的旋转量（绕y轴旋转）

取值范围：[-10, 10]，负值表示绕y轴向左旋转，正值表示绕y轴向右旋转
   */
  Pan?: number
  /**
   * 垂直摇镜，控制摄像机在垂直面上的旋转量（沿x轴旋转）

取值范围：[-10, 10]，负值表示绕x轴向下旋转，正值表示绕x轴向上旋转
   */
  Tilt?: number
  /**
   * 旋转运镜，控制摄像机的滚动量（绕z轴旋转）

取值范围：[-10, 10]，负值表示绕z轴逆时针旋转，正值表示绕z轴顺时针旋转
   */
  Roll?: number
  /**
   * 变焦，控制摄像机的焦距变化，影响视野的远近

取值范围：[-10, 10]，负值表示焦距变长、视野范围变小，正值表示焦距变短、视野范围变大
   */
  Zoom?: number
}

/**
 * DescribeReferenceToVideoViduJob请求参数结构体
 */
export interface DescribeReferenceToVideoViduJobRequest {
  /**
   * <p>任务ID</p>
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
 * DescribeAigcVideoJob返回参数结构体
 */
export interface DescribeAigcVideoJobResponse {
  /**
   * 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功
示例值：RUN
   */
  Status?: string
  /**
   * 任务执行错误码。当任务状态不为 FAIL 时，该值为""。
示例值：FailedOperation.DriverFailed
   */
  ErrorCode?: string
  /**
   * 任务执行错误信息。当任务状态不为 FAIL 时，该值为""。
示例值：驱动失败
   */
  ErrorMessage?: string
  /**
   * 结果视频 URL。有效期 24 小时。

示例值：https://console.cloud.tencent.com/result.mp4
   */
  ResultUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitVideoExtendKlingJob返回参数结构体
 */
export interface SubmitVideoExtendKlingJobResponse {
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
 * SubmitMotionControlKlingJob返回参数结构体
 */
export interface SubmitMotionControlKlingJobResponse {
  /**
   * <p>任务ID</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SubmitTextToVideoJob返回参数结构体
 */
export interface SubmitTextToVideoJobResponse {
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
 * 各分镜信息，如提示词、时长等

通过index、prompt、duration参数定义分镜序号及相应提示词和时长，其中：

最多支持6个分镜，最小支持1个分镜

每个分镜相关内容的最大长度不超过512

每个分镜的时长不大于当前任务的总时长，不小于1

所有分镜的时长之和等于当前任务的总时长

用key:value承载，如下：

"multi_prompt":[
	{
  	"index":int,
    "prompt": "string",
    "duration": "5"
  },
  {
  	"index":int,
    "prompt": "string",
    "duration": "5"
  }
]
当mult_shot参数为true且shot_type参数为customize时，当前参数不得为空
 */
export interface MultiPrompt {
  /**
   * <p>分镜序号</p>
   */
  Index?: number
  /**
   * <p>分镜提示词</p>
   */
  Prompt?: string
  /**
   * <p>时长</p>
   */
  Duration?: string
}

/**
 * DescribeTextToVideoJob请求参数结构体
 */
export interface DescribeTextToVideoJobRequest {
  /**
   * <p>任务ID。</p>
   */
  JobId: string
}

/**
 * DescribeImageToVideoJob请求参数结构体
 */
export interface DescribeImageToVideoJobRequest {
  /**
   * <p>任务ID。</p>
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
 * SubmitTextToVideoViduJob返回参数结构体
 */
export interface SubmitTextToVideoViduJobResponse {
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

/**
 * DescribeTextToVideoViduJob请求参数结构体
 */
export interface DescribeTextToVideoViduJobRequest {
  /**
   * <p>任务ID</p>
   */
  JobId: string
}

/**
 * 运动轨迹坐标序列
 */
export interface Trajectory {
  /**
   * 轨迹点横坐标（在像素二维坐标系下，以输入图片image左下为原点的像素坐标）
   */
  X?: number
  /**
   * 轨迹点纵坐标（在像素二维坐标系下，以输入图片image左下为原点的像素坐标）
   */
  Y?: number
}

/**
 * DescribeTextToVideoViduJob返回参数结构体
 */
export interface DescribeTextToVideoViduJobResponse {
  /**
   * <p>任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功</p>
   */
  Status?: string
  /**
   * <p>任务执行错误码。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorCode?: string
  /**
   * <p>任务执行错误信息。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorMessage?: string
  /**
   * <p>结果视频 URL。有效期 24 小时。</p>
   */
  ResultVideoUrl?: string
  /**
   * <p>该任务消耗的积分数量。</p>
   */
  Credits?: number
  /**
   * <p>任务调用时传入的透传参数。</p>
   */
  Payload?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 控制摄像机运动的协议
 */
export interface CameraControl {
  /**
   * 枚举值：“simple”, “down_back”, “forward_up”, “right_turn_forward”, “left_turn_forward”
simple：简单运镜，此类型下可在"config"中六选一进行运镜
down_back：镜头下压并后退 -> 下移拉远，此类型下config参数无需填写
forward_up：镜头前进并上仰 -> 推进上移，此类型下config参数无需填写
right_turn_forward：先右旋转后前进 -> 右旋推进，此类型下config参数无需填写
left_turn_forward：先左旋并前进 -> 左旋推进，此类型下config参数无需填写
   */
  Type?: string
  /**
   * 包含六个字段，用于指定摄像机在不同方向上的运动或变化。
- 当运镜类型指定simple时必填，指定其他类型时不填
- 参数6选1，即只能有一个参数不为0，其余参数为0
   */
  Config?: CameraControlConfig
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
 * DescribeVideoExtendKlingJob返回参数结构体
 */
export interface DescribeVideoExtendKlingJobResponse {
  /**
   * <p>任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功</p>
   */
  Status?: string
  /**
   * <p>任务执行错误码。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorCode?: string
  /**
   * <p>任务执行错误信息。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorMessage?: string
  /**
   * <p>结果视频 URL。有效期 24 小时。</p>
   */
  ResultVideoUrl?: string
  /**
   * <p>视频时长。</p>
   */
  Duration?: string
  /**
   * <p>消耗积分数。</p>
   */
  FinalUnitDeduction?: string
  /**
   * <p>视频id</p>
   */
  VideoId?: string
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
 * Element
 */
export interface Element {
  /**
   * <p>ID配置</p>
   */
  ElementId?: string
}

/**
 * 动态笔刷
 */
export interface DynamicMask {
  /**
   * <p>动态笔刷涂抹区域（用户通过运动笔刷涂抹的 mask 图片）</p><p>支持传入图片Base64编码或图片URL（确保可访问，格式要求同 Image 字段）<br>图片格式支持.jpg / .jpeg / .png<br>图片长宽比必须与输入图片相同（即Image字段），否则任务失败<br>StaticMask 和 DynamicMasks.Mask 这两张图片的分辨率必须一致，否则任务失败</p>
   */
  Mask?: string
  /**
   * <p>运动轨迹坐标序列</p><p>生成5s的视频，轨迹长度不超过77，即坐标个数取值范围：[2, 77]<br>轨迹坐标系，以图片左下角为坐标原点<br>注1：坐标点个数越多轨迹刻画越准确，如只有2个轨迹点则为这两点连接的直线<br>注2：轨迹方向以传入顺序为指向，以最先传入的坐标为轨迹起点，依次连接后续坐标形成运动轨迹</p>
   */
  Trajectories?: Array<Trajectory>
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
 * SubmitTextToVideoJob请求参数结构体
 */
export interface SubmitTextToVideoJobRequest {
  /**
   * <p>正向文本提示词。不能超过2500个字符</p>
   */
  Prompt?: string
  /**
   * <p>模型名称。<br>v1.6：Kling-V1-6<br>v2.0：Kling-V2-Master<br>v2.5：Kling-V2-5-Turbo<br>v2.6：Kling-V2-6<br>v3.0：kling-v3</p>
   */
  Model?: string
  /**
   * <p>负向文本提示词。不能超过2500个字符</p>
   */
  NegativePrompt?: string
  /**
   * <p>生成视频时长，单位s。默认值为5。<br>枚举值：3，4，5，6，7，8，9，10，11，12，13，14，15</p><p>不同模型支持时长不同</p><ul><li>模型v1.6、v2.0、v2.5、v2.6：支持5、10</li><li>模型v3.0：支持3～15s</li></ul>
   */
  Duration?: string
  /**
   * <p>生成视频的模式；</p><p>枚举值：std，pro</p><ul><li>其中std：标准模式（标准），基础模式，性价比高</li><li>其中pro：专家模式（高品质），高表现模式，生成视频质量更佳</li></ul><p>不同模型版本、视频模式支持范围不同</p><ul><li>v1.6：std、pro。</li><li>v2.0、v3.0：模型无需配置。</li><li>v2.5：首尾帧情况下支持pro。</li><li>v2.6：仅支持pro，选择v2.6模型时，默认自动生成高品质pro视频。</li></ul>
   */
  Mode?: string
  /**
   * <p>生成视频的自由度；值越大，模型自由度越小，与用户输入的提示词相关性越强。<br>取值范围：[0, 1]<br>v2.0、v2.5、v2.6 模型不支持当前参数<br>默认值：0.5。</p>
   */
  CfgScale?: number
  /**
   * <p>生成视频的画面纵横比（宽:高）<br>枚举值：16:9, 9:16, 1:1<br>默认值：16:9</p>
   */
  AspectRatio?: string
  /**
   * <p>生成视频时是否同时生成声音</p><ul><li>枚举值：on，off</li></ul><p>仅V2.6及后续版本模型支持当前参数，v2.6模型的std模式只能生成无声的视频</p>
   */
  Sound?: string
  /**
   * <p>为生成视频添加标识的开关，默认为1。<br>1：添加标识。<br>0：不添加标识。<br>其他数值：默认按1处理。<br>建议您使用显著标识来提示，该视频是 AI 生成的视频。</p>
   */
  LogoAdd?: number
  /**
   * <p>标识内容设置。<br>默认在生成视频的右下角添加“视频由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。</p>
   */
  LogoParam?: LogoParam
  /**
   * <p>是否生成多镜头视频</p><ul><li>当前参数为true时，prompt参数无效</li><li>当前参数为false时，shot_type参数及multi_prompt参数无效</li></ul>
   */
  MultiShot?: boolean
  /**
   * <p>分镜方式</p><p>枚举值：customize，intelligence<br>当MultiShot参数为true时，当前参数必填</p>
   */
  ShotType?: string
  /**
   * <p>各分镜提示词，可包含正向描述和负向描述</p><p>通过index、prompt、duration参数定义分镜序号及相应提示词和时长，其中：</p><ul><li>最多支持6个分镜，最小支持1个分镜</li><li>每个分镜相关内容的最大长度不超过512</li><li>每个分镜的时长不大于当前任务的总时长，不小于1</li><li>所有分镜的时长之和等于当前任务的总时长</li><li>当MultiShot参数为true且ShotType参数为customize时，当前参数不得为空<br>用key:value承载，如下：<pre><code> &quot;MultiPrompt&quot;:[              {                &quot;Index&quot;:int,              &quot;Prompt&quot;: &quot;string&quot;,              &quot;Duration&quot;: &quot;5&quot;            }  ]</code></pre></li></ul>
   */
  MultiPrompt?: Array<MultiPrompt>
  /**
   * <p>控制摄像机运动的协议（如未指定，模型将根据输入的文本/图片进行智能匹配）</p>
   */
  CameraControl?: CameraControl
  /**
   * <p>本次任务结果回调通知地址，如果配置，服务端会在任务状态发生变更时主动通知</p>
   */
  CallbackUrl?: string
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
 * DescribeVideoEditJob请求参数结构体
 */
export interface DescribeVideoEditJobRequest {
  /**
   * 任务ID。
   */
  JobId: string
}

/**
 * DescribeVideoEditKlingJob返回参数结构体
 */
export interface DescribeVideoEditKlingJobResponse {
  /**
   * <p>任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功</p>
   */
  Status?: string
  /**
   * <p>任务执行错误码。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorCode?: string
  /**
   * <p>任务执行错误信息。当任务状态不为 FAIL 时，该值为&quot;&quot;。</p>
   */
  ErrorMessage?: string
  /**
   * <p>结果视频 URL。有效期 24 小时。</p>
   */
  ResultVideoUrl?: string
  /**
   * <p>视频id</p>
   */
  VideoId?: string
  /**
   * <p>时长</p>
   */
  Duration?: string
  /**
   * <p>消耗积分数</p>
   */
  FinalUnitDeduction?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 人脸框信息。
 */
export interface FaceRect {
  /**
   * <p>人脸框左上角横坐标。</p>
   */
  X?: number
  /**
   * <p>人脸框左上角纵坐标。</p>
   */
  Y?: number
  /**
   * <p>人脸框宽度。<br>单位：px</p>
   */
  Width?: number
  /**
   * <p>人脸框高度。<br>单位：px</p>
   */
  Height?: number
}

/**
 * SubmitImageToVideoJob返回参数结构体
 */
export interface SubmitImageToVideoJobResponse {
  /**
   * <p>任务ID。</p>
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
