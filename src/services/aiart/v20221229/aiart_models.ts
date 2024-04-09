/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
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
 * ImageToImage返回参数结构体
 */
export interface ImageToImageResponse {
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
   * 文生图引擎，默认使用engine1。 
取值：  
engine1  
engine2
   */
  Engine?: string
}

/**
 * logo参数
 */
export interface LogoParam {
  /**
   * 水印url
   */
  LogoUrl?: string
  /**
   * 水印base64，url和base64二选一传入
   */
  LogoImage?: string
  /**
   * 水印图片位于融合结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配
   */
  LogoRect?: LogoRect
}

/**
 * ImageToImage请求参数结构体
 */
export interface ImageToImageRequest {
  /**
   * 输入图 Base64 数据。
算法将根据输入的图片，结合文本描述智能生成与之相关的图像。
Base64 和 Url 必须提供一个，如果都提供以 Base64 为准。
图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。
   */
  InputImage?: string
  /**
   * 输入图 Url。
算法将根据输入的图片，结合文本描述智能生成与之相关的图像。
Base64 和 Url 必须提供一个，如果都提供以 Base64 为准。
图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。
   */
  InputUrl?: string
  /**
   * 文本描述。
用于在输入图的基础上引导生成图效果，增加生成结果中出现描述内容的可能。
推荐使用中文。最多支持256个 utf-8 字符。
   */
  Prompt?: string
  /**
   * 反向文本描述。
用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。
推荐使用中文。最多可传256个 utf-8 字符。
   */
  NegativePrompt?: string
  /**
   * 绘画风格。
请在  [智能图生图风格列表](https://cloud.tencent.com/document/product/1668/86250) 中选择期望的风格，传入风格编号。
推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。
   */
  Styles?: Array<string>
  /**
   * 生成图结果的配置，包括输出图片分辨率和尺寸等。
支持生成以下分辨率的图片：origin（与输入图分辨率一致）、768:768（1:1）、768:1024（3:4）、1024:768（4:3），不传默认使用origin。
   */
  ResultConfig?: ResultConfig
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
   * 生成自由度。
Strength 值越小，生成图和原图越接近，取值范围0 - 1，不传使用模型内置的默认值。
推荐的取值范围为0.6 - 0.8。
   */
  Strength?: number
  /**
   * 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。
   */
  RspImgType?: string
}

/**
 * 输入框
 */
export interface LogoRect {
  /**
   * 左上角X坐标
   */
  X?: number
  /**
   * 左上角Y坐标
   */
  Y?: number
  /**
   * 方框宽度
   */
  Width?: number
  /**
   * 方框高度
   */
  Height?: number
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
 * 返回结果配置
 */
export interface ResultConfig {
  /**
   * 生成图分辨率

智能文生图支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3）、1080:1920（9:16）、1920:1080（16:9），不传默认使用768:768

智能图生图支持生成以下分辨率的图片：origin（与输入图分辨率一致）、768:768（1:1）、768:1024（3:4）、1024:768（4:3），不传默认使用origin，如果指定生成的长宽比与输入图长宽比差异过大可能导致图片内容被裁剪
   */
  Resolution?: string
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
 * TextToImage请求参数结构体
 */
export interface TextToImageRequest {
  /**
   * 文本描述。
算法将根据输入的文本智能生成与之相关的图像。建议详细描述画面主体、细节、场景等，文本描述越丰富，生成效果越精美。
不能为空，推荐使用中文。最多可传256个 utf-8 字符。
   */
  Prompt: string
  /**
   * 反向文本描述。
用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。
推荐使用中文。最多可传256个 utf-8 字符。
   */
  NegativePrompt?: string
  /**
   * 绘画风格。
请在 [智能文生图风格列表](https://cloud.tencent.com/document/product/1668/86249) 中选择期望的风格，传入风格编号。
推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。
   */
  Styles?: Array<string>
  /**
   * 生成图结果的配置，包括输出图片分辨率和尺寸等。

支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3）、1080:1920（9:16）、1920:1080（16:9），不传默认使用768:768。

   */
  ResultConfig?: ResultConfig
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
   */
  RspImgType?: string
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
  ResultImage?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
