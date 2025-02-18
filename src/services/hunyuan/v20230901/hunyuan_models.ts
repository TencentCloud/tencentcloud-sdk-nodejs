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
 * ChatCompletions请求参数结构体
 */
export interface ChatCompletionsRequest {
  /**
   * 模型名称，可选值包括 hunyuan-lite、hunyuan-standard、hunyuan-standard-256K、hunyuan-code、hunyuan-role、hunyuan-functioncall、hunyuan-vision、hunyuan-turbo、hunyuan-turbo-latest、hunyuan-turbo-20241223、hunyuan-turbo-20241120、hunyuan-large、hunyuan-large-longcontext、hunyuan-turbo-vision、hunyuan-standard-vision、hunyuan-lite-vision。
各模型介绍请阅读 [产品概述](https://cloud.tencent.com/document/product/1729/104753) 中的说明。

注意：
不同的模型计费不同，请根据 [购买指南](https://cloud.tencent.com/document/product/1729/97731) 按需调用。
   */
  Model: string
  /**
   * 聊天上下文信息。
说明：
1. 长度最多为 40，按对话时间从旧到新在数组中排列。
2. Message.Role 可选值：system、user、assistant、 tool（functioncall场景）。
其中，system 角色可选，如存在则必须位于列表的最开始。user（tool） 和 assistant 需交替出现（一问一答），以 user 提问开始，user（tool）提问结束，其中tool可以连续出现多次，且 Content 不能为空。Role 的顺序示例：[system（可选） user assistant user（tool tool ...） assistant user（tool tool ...） ...]。
3. Messages 中 Content 总长度不能超过模型输入长度上限（可参考 [产品概述](https://cloud.tencent.com/document/product/1729/104753) 文档），超过则会截断最前面的内容，只保留尾部内容。
   */
  Messages: Array<Message>
  /**
   * 流式调用开关。
说明：
1. 未传值时默认为非流式调用（false）。
2. 流式调用时以 SSE 协议增量返回结果（返回值取 Choices[n].Delta 中的值，需要拼接增量数据才能获得完整结果）。
3. 非流式调用时：
调用方式与普通 HTTP 请求无异。
接口响应耗时较长，**如需更低时延建议设置为 true**。
只返回一次最终结果（返回值取 Choices[n].Message 中的值）。

注意：
通过 SDK 调用时，流式和非流式调用需用**不同的方式**获取返回值，具体参考 SDK 中的注释或示例（在各语言 SDK 代码仓库的 examples/hunyuan/v20230901/ 目录中）。
   */
  Stream?: boolean
  /**
   * 流式输出审核开关。
说明：
1. 当使用流式输出（Stream 字段值为 true）时，该字段生效。
2. 输出审核有流式和同步两种模式，**流式模式首包响应更快**。未传值时默认为流式模式（true）。
3. 如果值为 true，将对输出内容进行分段审核，审核通过的内容流式输出返回。如果出现审核不过，响应中的 FinishReason 值为 sensitive。
4. 如果值为 false，则不使用流式输出审核，需要审核完所有输出内容后再返回结果。

注意：
当选择流式输出审核时，可能会出现部分内容已输出，但中间某一段响应中的 FinishReason 值为 sensitive，此时说明安全审核未通过。如果业务场景有实时文字上屏的需求，需要自行撤回已上屏的内容，并建议自定义替换为一条提示语，如 “这个问题我不方便回答，不如我们换个话题试试”，以保障终端体验。
   */
  StreamModeration?: boolean
  /**
   * 说明：
1. 影响输出文本的多样性。模型已有默认参数，不传值时使用各模型推荐值，不推荐用户修改。
2. 取值区间为 [0.0, 1.0]。取值越大，生成文本的多样性越强。
   */
  TopP?: number
  /**
   * 说明：
1. 影响模型输出多样性，模型已有默认参数，不传值时使用各模型推荐值，不推荐用户修改。
2. 取值区间为 [0.0, 2.0]。较高的数值会使输出更加多样化和不可预测，而较低的数值会使其更加集中和确定。
   */
  Temperature?: number
  /**
   * 功能增强（如搜索）开关。
说明：
1. hunyuan-lite 无功能增强（如搜索）能力，该参数对 hunyuan-lite 版本不生效。
2. 未传值时默认打开开关。
3. 关闭时将直接由主模型生成回复内容，可以降低响应时延（对于流式输出时的首字时延尤为明显）。但在少数场景里，回复效果可能会下降。
4. 安全审核能力不属于功能增强范围，不受此字段影响。
   */
  EnableEnhancement?: boolean
  /**
   * 可调用的工具列表，仅对 hunyuan-turbo、hunyuan-functioncall 模型生效。
   */
  Tools?: Array<Tool>
  /**
   * 工具使用选项，可选值包括 none、auto、custom。说明：1. 仅对 hunyuan-turbo、hunyuan-functioncall 模型生效。2. none：不调用工具；auto：模型自行选择生成回复或调用工具；custom：强制模型调用指定的工具。3. 未设置时，默认值为auto
   */
  ToolChoice?: string
  /**
   * 强制模型调用指定的工具，当参数ToolChoice为custom时，此参数为必填
   */
  CustomTool?: Tool
  /**
   * 默认是false，在值为true且命中搜索时，接口会返回SearchInfo
   */
  SearchInfo?: boolean
  /**
   * 搜索引文角标开关。
说明：
1. 配合EnableEnhancement和SearchInfo参数使用。打开后，回答中命中搜索的结果会在片段后增加角标标志，对应SearchInfo列表中的链接。
2. false：开关关闭，true：开关打开。
3. 未传值时默认开关关闭（false）。
   */
  Citation?: boolean
  /**
   * 是否开启极速版搜索，默认false，不开启；在开启且命中搜索时，会启用极速版搜索，流式输出首字返回更快。
   */
  EnableSpeedSearch?: boolean
  /**
   * 多媒体开关。
详细介绍请阅读 [多媒体介绍](https://cloud.tencent.com/document/product/1729/111178) 中的说明。
说明：
1. 该参数目前仅对白名单内用户生效，如您想体验该功能请 [联系我们](https://cloud.tencent.com/act/event/Online_service)。
2. 该参数仅在功能增强（如搜索）开关开启（EnableEnhancement=true）并且极速版搜索开关关闭（EnableSpeedSearch=false）时生效。
3. hunyuan-lite 无多媒体能力，该参数对 hunyuan-lite 版本不生效。
4. 未传值时默认关闭。
5. 开启并搜索到对应的多媒体信息时，会输出对应的多媒体地址，可以定制个性化的图文消息。
   */
  EnableMultimedia?: boolean
  /**
   * 是否开启深度研究该问题，默认是false，在值为true且命中深度研究该问题时，会返回深度研究该问题信息。
   */
  EnableDeepSearch?: boolean
  /**
   * 说明： 1. 确保模型的输出是可复现的。 2. 取值区间为非0正整数，最大值10000。 3. 非必要不建议使用，不合理的取值会影响效果。
   */
  Seed?: number
  /**
   * 强制搜索增强开关。
说明：
1. 未传值时默认关闭。
2. 开启后，将强制走AI搜索，当AI搜索结果为空时，由大模型回复兜底话术。
   */
  ForceSearchEnhancement?: boolean
  /**
   * 自定义结束生成字符串

调用 OpenAI 的接口时，如果您指定了 `stop` 参数, 模型会停止在匹配到 `stop` 的内容之前。
在调用混元接口时，会停止在匹配到 `stop` 的内容之后。

**说明：**
未来我们可能会修改此行为以便和 OpenAI 保持一致。
但是目前有使用该参数的情况下，开发者需要注意该参数是否会对应用造成影响，以及未来该行为调整时带来的影响。
   */
  Stop?: Array<string>
  /**
   * 推荐问答开关。
说明：
1. 未传值时默认关闭。
2. 开启后，在返回值的最后一个包中会增加 RecommendedQuestions 字段表示推荐问答， 最多返回3条。
   */
  EnableRecommendedQuestions?: boolean
  /**
   * 是否开启深度阅读，默认是false，在值为true时，会返回深度阅读的结果信息。说明:1.深度阅读需要开启插件增强,即设置EnableEnhancement为true,当设置EnableDeepRead为true时EnableEnhancement默认为true；2.目前暂时只支持单文档单轮的深度阅读；3.深度阅读功能的文件上传可以使用FilesUploads接口，具体参数详见FilesUploads接口文档
   */
  EnableDeepRead?: boolean
}

/**
 * 搜索引文信息
 */
export interface SearchResult {
  /**
   * 搜索引文序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
  /**
   * 搜索引文标题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 搜索引文链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 搜索引文站点名
   */
  Text?: string
  /**
   * 搜索引文图标
   */
  Icon?: string
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
 * FilesUploads请求参数结构体
 */
export interface FilesUploadsRequest {
  /**
   * 文件名。
   */
  Name: string
  /**
   * 文件链接。目前支持 csv, doc, docx, pdf, ppt, pptx, txt, xls, xlsx 格式，单文件大小限制为100M。
   */
  URL: string
}

/**
 * GetEmbedding请求参数结构体
 */
export interface GetEmbeddingRequest {
  /**
   * 输入文本。总长度不超过 1024 个 Token，超过则会截断最后面的内容。
   */
  Input?: string
  /**
   * 输入文本数组。输入数组总长度不超过 200 。
   */
  InputList?: Array<string>
}

/**
 * 具体的图片内容
 */
export interface ImageUrl {
  /**
   * 图片的 Url（以 http:// 或 https:// 开头）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url: string
}

/**
 * 多媒体详情
 */
export interface Multimedia {
  /**
   * 多媒体类型，可选值包括 image、music、album、playlist。
说明：
1. image：图片；music：单曲，类型为单曲时，会返回详细歌手和歌曲信息；album：专辑；playlist：歌单。
2. 当 type 为 music、album、playlist 时，需要配合 [QQ音乐SDK](https://developer.y.qq.com/) 使用。
   */
  Type?: string
  /**
   * 多媒体地址。
说明：
1. type 为 image 时，地址为图片的预览地址；其他类型时，地址为封面图地址。
   */
  Url?: string
  /**
   * 多媒体详情地址。
说明：
1. 仅 type 为 image 时，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  JumpUrl?: string
  /**
   * 名称。
说明：
1. type 为 image 时，该字段为空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc?: string
  /**
   * 歌手名称。
说明：
1. 仅 type 为 music 时，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Singer?: string
  /**
   * 歌曲详情。
说明：
1. 仅 type 为 music 时，该字段有值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ext?: SongExt
}

/**
 * ActivateService请求参数结构体
 */
export interface ActivateServiceRequest {
  /**
   * 开通之后，是否关闭后付费；默认为0，不关闭；1为关闭
   */
  PayMode?: number
}

/**
 * GetThread请求参数结构体
 */
export interface GetThreadRequest {
  /**
   * 会话 ID
   */
  ThreadID: string
}

/**
 * 可以传入多种类型的内容，如图片或文本。
 */
export interface Content {
  /**
   * 内容类型
注意：
需包含至少一个 Type 为"text"的参数及至少一个 Type 为"image_url"的参数。
参数值可选范围：[text", "image_url"]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 当 Type 为 text 时使用，表示具体的文本内容。当 Type 为 image_url 时，当前字段内容需保持为空，传递内容不生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Text?: string
  /**
   * 图片的url，当 Type 为 image_url 时使用，表示具体的图片内容
如"https://example.com/1.png" 或 图片的base64（注意 "data:image/jpeg;base64," 为必要部分）："data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA......"。当 Type 为 text 时，当前字段内容需保持为空，传递内容不生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageUrl?: ImageUrl
}

/**
 * 翻译接口返回的回复，支持多个
 */
export interface TranslationChoice {
  /**
   * 结束标志位，可能为 stop、 sensitive。
stop 表示输出正常结束。
sensitive 只在开启流式输出审核时会出现，表示安全审核未通过。
   */
  FinishReason?: string
  /**
   * 索引值，流式调用时使用该字段。
   */
  Index?: number
  /**
   * 增量返回值，流式调用时使用该字段。
   */
  Delta?: TranslationDelta
  /**
   * 返回值，非流式调用时使用该字段。
   */
  Message?: TranslationMessage
}

/**
 * ChatTranslations返回参数结构体
 */
export interface ChatTranslationsResponse {
  /**
   * 本次请求的 RequestId。
   */
  Id?: string
  /**
   * 免责声明。
   */
  Note?: string
  /**
   * Unix 时间戳，单位为秒。
   */
  Created?: number
  /**
   * Token 统计信息。
按照总 Token 数量计费。
   */
  Usage?: Usage
  /**
   * 回复内容。
   */
  Choices?: Array<TranslationChoice>
  /**
   * 错误信息。
如果流式返回中服务处理异常，返回该错误信息。
   */
  ErrorMsg?: ErrorMsg
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * SubmitHunyuanImageJob请求参数结构体
 */
export interface SubmitHunyuanImageJobRequest {
  /**
   * 文本描述。 
算法将根据输入的文本智能生成与之相关的图像。 
不能为空，推荐使用中文。最多可传1024个 utf-8 字符。
   */
  Prompt: string
  /**
   * 反向提示词。 
推荐使用中文。最多可传1024个 utf-8 字符。
   */
  NegativePrompt?: string
  /**
   * 绘画风格。
请在 [混元生图风格列表](https://cloud.tencent.com/document/product/1729/105846) 中选择期望的风格，传入风格编号。
不传默认不指定风格。
   */
  Style?: string
  /**
   * 生成图分辨率。
支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3），不传默认使用1024:1024。
   */
  Resolution?: string
  /**
   * 图片生成数量。
支持1 ~ 4张，默认生成1张。
   */
  Num?: number
  /**
   * 随机种子，默认随机。
不传：随机种子生成。
正数：固定种子生成。
   */
  Seed?: number
  /**
   * 超分选项，默认不做超分，可选开启。
 x2：2倍超分
 x4：4倍超分
   */
  Clarity?: string
  /**
   * prompt 扩写开关。1为开启，0为关闭，不传默认开启。
开启扩写后，将自动扩写原始输入的 prompt 并使用扩写后的 prompt 生成图片，返回生成图片结果时将一并返回扩写后的 prompt 文本。
如果关闭扩写，将直接使用原始输入的 prompt 生成图片。
建议开启，在多数场景下可提升生成图片效果、丰富生成图片细节。
   */
  Revise?: number
  /**
   * 为生成结果图添加显式水印标识的开关，默认为1。  
1：添加。  
0：不添加。  
其他数值：默认按1处理。  
建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。
   */
  LogoAdd?: number
  /**
   * 标识内容设置。
默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
   */
  LogoParam?: LogoParam
}

/**
 * Token 数量
 */
export interface Usage {
  /**
   * 输入 Token 数量。
   */
  PromptTokens?: number
  /**
   * 输出 Token 数量。
   */
  CompletionTokens?: number
  /**
   * 总 Token 数量。
   */
  TotalTokens?: number
}

/**
 * 多媒体占位符替换信息
 */
export interface Replace {
  /**
   * 占位符序号
   */
  Id?: string
  /**
   * 多媒体详情
   */
  Multimedia?: Array<Multimedia>
}

/**
 * SubmitHunyuanImageChatJob返回参数结构体
 */
export interface SubmitHunyuanImageChatJobResponse {
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
 * QueryHunyuanImageChatJob请求参数结构体
 */
export interface QueryHunyuanImageChatJobRequest {
  /**
   * 任务 ID。
   */
  JobId?: string
}

/**
 * RunThread请求参数结构体
 */
export interface RunThreadRequest {
  /**
   * 会话 ID
   */
  ThreadID: string
  /**
   * 助手 ID（目前未使用，留空）
   */
  AssistantID?: string
  /**
   * 模型名称，可选值包括 hunyuan-lite、hunyuan-standard、hunyuan-standard-256K、hunyuan-pro、 hunyuan-code、 hunyuan-role、 hunyuan-functioncall、 hunyuan-vision、 hunyuan-turbo。各模型介绍请阅读 [产品概述](https://cloud.tencent.com/document/product/1729/104753) 中的说明。注意：不同的模型计费不同，请根据 [购买指南](https://cloud.tencent.com/document/product/1729/97731) 按需调用。
   */
  Model?: string
  /**
   * 附加消息
   */
  AdditionalMessages?: Array<ThreadAdditionalMessage>
  /**
   * 说明：1. 影响模型输出多样性，模型已有默认参数，不传值时使用各模型推荐值，不推荐用户修改。2. 取值区间为 [0.0, 2.0]。较高的数值会使输出更加多样化和不可预测，而较低的数值会使其更加集中和确定。
   */
  Temperature?: number
  /**
   * 说明：1. 影响输出文本的多样性。模型已有默认参数，不传值时使用各模型推荐值，不推荐用户修改。2. 取值区间为 [0.0, 1.0]。取值越大，生成文本的多样性越强。
   */
  TopP?: number
  /**
   * 是否流式输出，当前只允许 true
   */
  Stream?: boolean
  /**
   * 运行过程中可使用的 token 最大数量。
   */
  MaxPromptTokens?: number
  /**
   * 运行过程中可使用的完成 token 的最大数量。
   */
  MaxCompletionTokens?: number
  /**
   * 可调用的工具列表，仅对 hunyuan-pro、hunyuan-turbo、hunyuan-functioncall 模型生效。
   */
  Tools?: Array<Tool>
  /**
   * 工具使用选项，可选值包括 none、auto、custom。说明：1. 仅对 hunyuan-pro、hunyuan-turbo、hunyuan-functioncall 模型生效。2. none：不调用工具；auto：模型自行选择生成回复或调用工具；custom：强制模型调用指定的工具。3. 未设置时，默认值为auto
   */
  ToolChoice?: string
}

/**
 * SubmitHunyuanImageChatJob请求参数结构体
 */
export interface SubmitHunyuanImageChatJobRequest {
  /**
   * 本轮对话的文本描述。
提交一个任务请求对应发起一轮生图对话，每轮对话中可输入一条 Prompt，生成一张图像，支持通过多轮输入 Prompt 来不断调整图像内容。
推荐使用中文，最多可传1024个 utf-8 字符。
输入示例：
<li> 第一轮对话：一颗红色的苹果 </li>
<li> 第二轮对话：将苹果改为绿色 </li>
<li> 第三轮对话：苹果放在桌子上 </li>
   */
  Prompt: string
  /**
   * 上传上一轮对话的 ChatId，本轮对话将在指定的上一轮对话结果基础上继续生成图像。
如果不传代表新建一个对话组，重新开启一轮新的对话。
一个对话组中，最多支持进行100轮对话。
   */
  ChatId?: string
  /**
   * 为生成结果图添加显式水印标识的开关，默认为1。  
1：添加。  
0：不添加。  
其他数值：默认按1处理。  
建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。
   */
  LogoAdd?: number
  /**
   * 标识内容设置。
默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。
   */
  LogoParam?: LogoParam
}

/**
 * ChatTranslations请求参数结构体
 */
export interface ChatTranslationsRequest {
  /**
   * 模型名称，可选值包括 hunyuan-translation、hunyuan-translation-lite。
各模型介绍请阅读 [产品概述](https://cloud.tencent.com/document/product/1729/104753) 中的说明。

注意：
不同的模型计费不同，请根据 [购买指南](https://cloud.tencent.com/document/product/1729/97731) 按需调用。
   */
  Model: string
  /**
   * 流式调用开关。
说明：
1. 未传值时默认为非流式调用（false）。
2. 流式调用时以 SSE 协议增量返回结果（返回值取 Choices[n].Delta 中的值，需要拼接增量数据才能获得完整结果）。
3. 非流式调用时：
调用方式与普通 HTTP 请求无异。
接口响应耗时较长，**如需更低时延建议设置为 true**。
只返回一次最终结果（返回值取 Choices[n].Message 中的值）。

注意：
通过 SDK 调用时，流式和非流式调用需用**不同的方式**获取返回值，具体参考 SDK 中的注释或示例（在各语言 SDK 代码仓库的 examples/hunyuan/v20230901/ 目录中）。
   */
  Stream?: boolean
  /**
   * 待翻译的文本
   */
  Text?: string
  /**
   * 源语言。
支持语言列表: 1. 简体中文：zh，2. 粤语：yue，3. 英语：en，4. 法语：fr，5. 葡萄牙语：pt，6. 西班牙语：es，7. 日语：ja，8. 土耳其语：tr，9. 俄语：ru，10. 阿拉伯语：ar，11. 韩语：ko，12. 泰语：th，13. 意大利语：it，14. 德语：de，15. 越南语：vi，16. 马来语：ms，17. 印尼语：id
   */
  Source?: string
  /**
   * 目标语言。
支持语言列表: 1. 简体中文：zh，2. 粤语：yue，3. 英语：en，4. 法语：fr，5. 葡萄牙语：pt，6. 西班牙语：es，7. 日语：ja，8. 土耳其语：tr，9. 俄语：ru，10. 阿拉伯语：ar，11. 韩语：ko，12. 泰语：th，13. 意大利语：it，14. 德语：de，15. 越南语：vi，16. 马来语：ms，17. 印尼语：id
   */
  Target?: string
  /**
   * 待翻译文本所属领域，例如游戏剧情等
   */
  Field?: string
  /**
   * 参考示例，最多10个
   */
  References?: Array<Reference>
}

/**
 * GetThreadMessage返回参数结构体
 */
export interface GetThreadMessageResponse {
  /**
   * 消息 ID
   */
  ID?: string
  /**
   * 对象类型
   */
  Object?: string
  /**
   * 创建时间
   */
  CreatedAt?: number
  /**
   * 会话 ID
   */
  ThreadID?: string
  /**
   * 状态，处理中 in_progress，已完成 completed，未完成 incomplete。
   */
  Status?: string
  /**
   * 未完成原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCompleteDetails?: ThreadMessageInCompleteDetailsObject
  /**
   * 完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompletedAt?: number
  /**
   * 未完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCompleteAt?: number
  /**
   * 角色
   */
  Role?: string
  /**
   * 内容
   */
  Content?: string
  /**
   * 助手 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssistantID?: string
  /**
   * 运行 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunID?: string
  /**
   * 附件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Attachments?: Array<ThreadMessageAttachmentObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 会话消息未完成原因
 */
export interface ThreadMessageInCompleteDetailsObject {
  /**
   * 会话消息未完成原因
   */
  Reason?: string
}

/**
 * 用户指定模型使用的工具
 */
export interface Tool {
  /**
   * 工具类型，当前只支持function
   */
  Type: string
  /**
   * 具体要调用的function
   */
  Function: ToolFunction
}

/**
 * GetThreadMessageList请求参数结构体
 */
export interface GetThreadMessageListRequest {
  /**
   * 会话 ID
   */
  ThreadID: string
  /**
   * 返回的消息条数，1 - 100 条
   */
  Limit?: number
  /**
   * 排序方式，按创建时间升序（asc）或降序（desc），默认为 desc
   */
  Order?: string
}

/**
 * 返回的回复, 支持多个
 */
export interface Choice {
  /**
   * 结束标志位，可能为 stop、 sensitive或者tool_calls。
stop 表示输出正常结束。
sensitive 只在开启流式输出审核时会出现，表示安全审核未通过。
tool_calls 标识函数调用。
   */
  FinishReason?: string
  /**
   * 增量返回值，流式调用时使用该字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Delta?: Delta
  /**
   * 返回值，非流式调用时使用该字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: Message
  /**
   * 索引值，流式调用时使用该字段。
   */
  Index?: number
  /**
   * 多轮会话风险审核，值为1时，表明存在信息安全风险，建议终止客户多轮会话。
   */
  ModerationLevel?: string
}

/**
 * GetTokenCount返回参数结构体
 */
export interface GetTokenCountResponse {
  /**
   * token计数
   */
  TokenCount?: number
  /**
   * 字符计数
   */
  CharacterCount?: number
  /**
   * 切分后的列表
   */
  Tokens?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryHunyuanImageChatJob返回参数结构体
 */
export interface QueryHunyuanImageChatJobResponse {
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
   * 本轮对话的 ChatId，ChatId 用于唯一标识一轮对话。
一个对话组中，最多支持进行100轮对话。
每轮对话数据有效期为7天，到期后 ChatId 失效，有效期内的历史对话数据可通过 History 查询，如有长期使用需求请及时保存输入输出数据。
   */
  ChatId?: string
  /**
   * 生成图 URL 列表，有效期7天，请及时保存。
   */
  ResultImage?: Array<string>
  /**
   * 结果 detail 数组，Success 代表成功。

   */
  ResultDetails?: Array<string>
  /**
   * 本轮对话前置的历史对话数据（不含生成图）。
   */
  History?: Array<History>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Embedding 信息。
 */
export interface EmbeddingData {
  /**
   * Embedding 信息，目前为 1024 维浮点数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Embedding?: Array<number>
  /**
   * 下标，目前不支持批量，因此固定为 0。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
  /**
   * 目前固定为 "embedding"。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Object?: string
}

/**
 * function定义
 */
export interface ToolFunction {
  /**
   * function名称，只能包含a-z，A-Z，0-9，\_或-
   */
  Name: string
  /**
   * function参数，一般为json字符串
   */
  Parameters: string
  /**
   * function的简单描述
   */
  Description?: string
}

/**
 * 返回的内容（流式返回）
 */
export interface Delta {
  /**
   * 角色名称。
   */
  Role?: string
  /**
   * 内容详情。
   */
  Content?: string
  /**
   * 模型生成的工具调用，仅 hunyuan-functioncall 模型支持
说明：
对于每一次的输出值应该以Id为标识对Type、Name、Arguments字段进行合并。

注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolCalls?: Array<ToolCall>
}

/**
 * SetPayMode返回参数结构体
 */
export interface SetPayModeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 歌曲详情。具体含义参考  [QQ音乐SDK](https://developer.y.qq.com/)
 */
export interface SongExt {
  /**
   * 歌曲id
   */
  SongId?: number
  /**
   * 歌曲mid
   */
  SongMid?: string
  /**
   * 歌曲是否为vip。1：vip歌曲； 0：普通歌曲。
   */
  Vip?: number
}

/**
 * 翻译接口返回的内容（流式返回）
 */
export interface TranslationDelta {
  /**
   * 角色名称。
   */
  Role?: string
  /**
   * 内容详情。
   */
  Content?: string
}

/**
 * 模型生成的工具调用
 */
export interface ToolCall {
  /**
   * 工具调用id
   */
  Id: string
  /**
   * 工具调用类型，当前只支持function
   */
  Type: string
  /**
   * 具体的function调用
   */
  Function: ToolCallFunction
  /**
   * 索引值
   */
  Index?: number
}

/**
 * 会话额外消息
 */
export interface ThreadAdditionalMessage {
  /**
   * 角色
   */
  Role?: string
  /**
   * 内容
   */
  Content?: string
  /**
   * 附件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Attachments?: Array<ThreadMessageAttachmentObject>
}

/**
 * 具体的function调用
 */
export interface ToolCallFunction {
  /**
   * function名称
   */
  Name: string
  /**
   * function参数，一般为json字符串
   */
  Arguments: string
}

/**
 * SetPayMode请求参数结构体
 */
export interface SetPayModeRequest {
  /**
   * 设置后付费状态，0：后付费打开；1：后付费关闭
   */
  PayMode: number
}

/**
 * TextToImageLite请求参数结构体
 */
export interface TextToImageLiteRequest {
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
请在 [文生图轻量版风格列表](https://cloud.tencent.com/document/product/1729/108992) 中选择期望的风格，传入风格编号。不传默认使用201（日系动漫风格）。
   */
  Style?: string
  /**
   * 生成图分辨率。
支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3）、1080:1920（9:16）、1920:1080（16:9），不传默认使用768:768。
   */
  Resolution?: string
  /**
   * 为生成结果图添加标识的开关，默认为1。
1：添加标识。
0：不添加标识。
其他数值：默认按0处理。
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
 * 相关组织及人物
 */
export interface RelevantEntity {
  /**
   * 相关组织及人物名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 相关组织及人物内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content: string
  /**
   * 相关事件引用文章标号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reference: Array<number | bigint>
}

/**
 * CreateThread返回参数结构体
 */
export interface CreateThreadResponse {
  /**
   * 会话 ID
   */
  ID?: string
  /**
   * 对象类型
   */
  Object?: string
  /**
   * 创建时间，Unix 时间戳，单位为秒。
   */
  CreatedAt?: number
  /**
   * 提供给工具的资源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolResources?: ThreadToolResources
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * SubmitHunyuanImageJob返回参数结构体
 */
export interface SubmitHunyuanImageJobResponse {
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
 * GetThread返回参数结构体
 */
export interface GetThreadResponse {
  /**
   * 会话 ID
   */
  ID?: string
  /**
   * 对象类型
   */
  Object?: string
  /**
   * 创建时间，Unix 时间戳，单位为秒。
   */
  CreatedAt?: number
  /**
   * 提供给工具的资源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolResources?: ThreadToolResources
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * ActivateService返回参数结构体
 */
export interface ActivateServiceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryHunyuanImageJob返回参数结构体
 */
export interface QueryHunyuanImageJobResponse {
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
   * 对应 SubmitHunyuanImageJob 接口中 Revise 参数。开启扩写时，返回扩写后的 prompt 文本。 如果关闭扩写，将直接返回原始输入的 prompt。
   */
  RevisedPrompt?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FilesUploads返回参数结构体
 */
export interface FilesUploadsResponse {
  /**
   * 文件标识符，可在各个API中引用。
   */
  ID?: string
  /**
   * 对象类型，始终为 file。
   */
  Object?: string
  /**
   * 文件大小，单位为字节。
   */
  Bytes?: number
  /**
   * 文件创建时的 Unix 时间戳（秒）。
   */
  CreatedAt?: number
  /**
   * 文件名。
   */
  Filename?: string
  /**
   * 上传文件的用途。
   */
  Purpose?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * FilesDeletions返回参数结构体
 */
export interface FilesDeletionsResponse {
  /**
   * 文件标识符。
   */
  ID?: string
  /**
   * 对象类型，始终为 file。
   */
  Object?: string
  /**
   * 是否删除成功。
   */
  Deleted?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 脑图
 */
export interface Mindmap {
  /**
   * 脑图缩略图链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThumbUrl: string
  /**
   * 脑图图片链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url: string
}

/**
 * 在会话中提供给助手工具的一系列资源。不同类型的工具会有各自对应的资源。比如代码解释器需要一个文件 ID 的列表，而文件搜索工具则需要一个向量存储 ID 的列表。
 */
export interface ThreadToolResources {
  /**
   * 文件 ID 列表
   */
  CodeInterpreter?: Array<string>
  /**
   * 向量存储 ID 列表
   */
  VectorStoreIDs?: Array<string>
}

/**
 * 会话消息
 */
export interface ThreadMessage {
  /**
   * 消息 ID
   */
  ID?: string
  /**
   * 对象类型
   */
  Object?: string
  /**
   * 创建时间
   */
  CreatedAt?: number
  /**
   * 会话 ID
   */
  ThreadID?: string
  /**
   * 状态，处理中 in_progress，已完成 completed，未完成 incomplete。
   */
  Status?: string
  /**
   * 未完成原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCompleteDetails?: ThreadMessageInCompleteDetailsObject
  /**
   * 完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompletedAt?: number
  /**
   * 未完成时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  InCompleteAt?: number
  /**
   * 角色
   */
  Role?: string
  /**
   * 内容
   */
  Content?: string
  /**
   * 助手 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssistantID?: string
  /**
   * 运行 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunID?: string
  /**
   * 附件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Attachments?: Array<ThreadMessageAttachmentObject>
}

/**
 * 已上传的文件对象。
 */
export interface FileObject {
  /**
   * 文件标识符，可在各个API中引用。
   */
  ID?: string
  /**
   * 对象类型，始终为 file。
   */
  Object?: string
  /**
   * 文件大小，单位为字节。
   */
  Bytes?: number
  /**
   * 文件创建时的 Unix 时间戳（秒）。
   */
  CreatedAt?: number
  /**
   * 文件名。
   */
  Filename?: string
  /**
   * 上传文件的用途。
   */
  Purpose?: string
}

/**
 * 混元生图多轮对话历史记录。
 */
export interface History {
  /**
   * 对话的 ID，用于唯一标识一轮对话
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChatId?: string
  /**
   * 原始输入的 Prompt 文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Prompt?: string
  /**
   * 扩写后的 Prompt 文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  RevisedPrompt?: string
  /**
   * 生成图的随机种子
注意：此字段可能返回 null，表示取不到有效值。
   */
  Seed?: number
}

/**
 * GetEmbedding返回参数结构体
 */
export interface GetEmbeddingResponse {
  /**
   * 返回的 Embedding 信息。
   */
  Data?: Array<EmbeddingData>
  /**
   * Token 使用计数，按照总 Token 数量收费。
   */
  Usage?: EmbeddingUsage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetThreadMessageList返回参数结构体
 */
export interface GetThreadMessageListResponse {
  /**
   * 消息列表
   */
  Data?: Array<ThreadMessage>
  /**
   * 第一条消息 ID
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  FirstID?: string
  /**
   * 已废弃
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  LastID?: number
  /**
   * 是否还有更多消息
   */
  HasMore?: boolean
  /**
   * 对象类型
   */
  Object?: string
  /**
   * 第一条消息 ID
   */
  FirstMsgID?: string
  /**
   * 最后一条消息 ID
   */
  LastMsgID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * QueryHunyuanImageJob请求参数结构体
 */
export interface QueryHunyuanImageJobRequest {
  /**
   * 任务 ID。
   */
  JobId: string
}

/**
 * 翻译对话参考示例
 */
export interface Reference {
  /**
   * 翻译文本类型，枚举"sentence"表示句子, "term"表示术语
   */
  Type?: string
  /**
   * 原文
   */
  Text?: string
  /**
   * 译文
   */
  Translation?: string
}

/**
 * FilesList请求参数结构体
 */
export interface FilesListRequest {
  /**
   * 分页偏移量。
   */
  Offset?: number
  /**
   * 每页数量，最大 100。
   */
  Limit?: number
}

/**
 * 运行时异常信息。
 */
export interface ErrorMsg {
  /**
   * 错误提示信息。
   */
  Msg?: string
  /**
   * 错误码。
4000 服务内部异常。
4001 请求模型超时。

   */
  Code?: number
}

/**
 * 搜索结果信息
 */
export interface SearchInfo {
  /**
   * 搜索引文信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchResults?: Array<SearchResult>
  /**
   * 脑图（回复中不一定存在，流式协议中，仅在最后一条流式数据中返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mindmap?: Mindmap
  /**
   * 相关事件（回复中不一定存在，流式协议中，仅在最后一条流式数据中返回，深度模式下返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelevantEvents?: Array<RelevantEvent>
  /**
   * 相关组织及人物（回复中不一定存在，流式协议中，仅在最后一条流式数据中返回，深度模式下返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  RelevantEntities?: Array<RelevantEntity>
  /**
   * 时间线（回复中不一定存在，流式协议中，仅在最后一条流式数据中返回，深度模式下返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timeline?: Array<Timeline>
  /**
   * 是否命中搜索深度模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportDeepSearch?: boolean
  /**
   * 搜索回复大纲（深度模式下返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Outline?: Array<string>
}

/**
 * RunThread返回参数结构体
 */
export interface RunThreadResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * FilesDeletions请求参数结构体
 */
export interface FilesDeletionsRequest {
  /**
   * 文件标识符。
   */
  ID: string
}

/**
 * FilesList返回参数结构体
 */
export interface FilesListResponse {
  /**
   * 文件数量。
   */
  Total?: number
  /**
   * 对象类型，始终为 list。
   */
  Object?: string
  /**
   * FileObject 列表。
   */
  Data?: Array<FileObject>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * GetTokenCount请求参数结构体
 */
export interface GetTokenCountRequest {
  /**
   * 输入文本
   */
  Prompt: string
}

/**
 * TextToImageLite返回参数结构体
 */
export interface TextToImageLiteResponse {
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
 * GetThreadMessage请求参数结构体
 */
export interface GetThreadMessageRequest {
  /**
   * 会话 ID
   */
  ThreadID: string
  /**
   * 消息 ID
   */
  MessageID: string
}

/**
 * CreateThread请求参数结构体
 */
export type CreateThreadRequest = null

/**
 * 会话消息附件
 */
export interface ThreadMessageAttachmentObject {
  /**
   * 文件 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileID?: string
}

/**
 * 时间线
 */
export interface Timeline {
  /**
   * 标题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Datetime?: string
  /**
   * 相关网页链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
}

/**
 * 相关事件
 */
export interface RelevantEvent {
  /**
   * 相关事件标题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title: string
  /**
   * 相关事件内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content: string
  /**
   * 相关事件时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Datetime: string
  /**
   * 相关事件引用文章标号
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reference: Array<number | bigint>
}

/**
 * 会话内容
 */
export interface Message {
  /**
   * 角色，可选值包括 system、user、assistant、 tool。
   */
  Role: string
  /**
   * 文本内容
   */
  Content?: string
  /**
   * 多种类型内容（目前支持图片和文本），仅 hunyuan-vision 和 hunyuan-turbo-vision 模型支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  Contents?: Array<Content>
  /**
   * 当role为tool时传入，标识具体的函数调用
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolCallId?: string
  /**
   * 模型生成的工具调用，仅 hunyuan-pro 或者 hunyuan-functioncall 模型支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  ToolCalls?: Array<ToolCall>
  /**
   * 文件标识符。单次最大 50 个文件。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileIDs?: Array<string>
}

/**
 * 翻译接口会话内容
 */
export interface TranslationMessage {
  /**
   * 角色，可选值包括 system、user、assistant、 tool。
   */
  Role?: string
  /**
   * 文本内容
   */
  Content?: string
}

/**
 * ChatCompletions返回参数结构体
 */
export interface ChatCompletionsResponse {
  /**
   * Unix 时间戳，单位为秒。
   */
  Created?: number
  /**
   * Token 统计信息。
按照总 Token 数量计费。
   */
  Usage?: Usage
  /**
   * 免责声明。
   */
  Note?: string
  /**
   * 本次请求的 RequestId。
   */
  Id?: string
  /**
   * 回复内容。
   */
  Choices?: Array<Choice>
  /**
   * 错误信息。
如果流式返回中服务处理异常，返回该错误信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: ErrorMsg
  /**
   * 多轮会话风险审核，值为1时，表明存在信息安全风险，建议终止客户多轮会话。
   * @deprecated
   */
  ModerationLevel?: string
  /**
   * 搜索结果信息
   */
  SearchInfo?: SearchInfo
  /**
   * 多媒体信息。
说明：
1. 可以用多媒体信息替换回复内容里的占位符，得到完整的消息。
2. 可能会出现回复内容里存在占位符，但是因为审核等原因没有返回多媒体信息。
   */
  Replaces?: Array<Replace>
  /**
   * 推荐问答。
   */
  RecommendedQuestions?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * Token 使用计数。
 */
export interface EmbeddingUsage {
  /**
   * 输入 Token 数。
   */
  PromptTokens?: number
  /**
   * 总 Token 数。
   */
  TotalTokens?: number
}
