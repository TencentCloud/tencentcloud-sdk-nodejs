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
 * 情感分析结果
 */
export interface SentimentAnalysis {
  /**
   * 情感标签
   */
  Label?: string
  /**
   * 标签分数，取值范围0到100
   */
  Score?: number
  /**
   * 情感分析明细
   */
  Detail?: SentimentDetail
  /**
   * 响应码，成功为"OK"，失败为"InternalError"
   */
  Code?: string
  /**
   * 异常信息
   */
  Message?: string
}

/**
 * GetFinancialLLMTaskResult请求参数结构体
 */
export interface GetFinancialLLMTaskResultRequest {
  /**
   * 该值对应创建任务接口里返回的TaskId字段值，创建任务接口见[创建金融大模型审校任务](https://cloud.tencent.com/document/product/1124/124463)。
   */
  TaskId: string
}

/**
 * 账号风险检测结果
 */
export interface RiskDetails {
  /**
   * 该字段用于返回账号信息检测对应的风险类别，取值为：**RiskAccount**（账号存在风险）、**RiskIP**（IP地址存在风险）、**RiskIMEI**（移动设备识别码存在风险）。
   */
  Label?: string
  /**
   * 该字段用于返回账号信息检测对应的风险等级，取值为：**1**（疑似存在风险）和**2**（存在恶意风险）。
   */
  Level?: number
}

/**
 * GetFinancialLLMTaskResult返回参数结构体
 */
export interface GetFinancialLLMTaskResultResponse {
  /**
   * TaskId对应的任务的状态：
- Success: 任务已完成
- Processing: 任务进行中，建议10秒后再查询
- Failed: 任务失败

   */
  Status?: string
  /**
   * 该字段标识服务检测到的违规点，具体内容参阅数据结构[FinancialLLMViolationDetail](https://cloud.tencent.com/document/api/1124/51861#FinancialLLMViolationDetail)
   */
  Details?: Array<FinancialLLMViolationDetail>
  /**
   * 本次检测的违规点列表
   */
  ReviewedLabels?: Array<string>
  /**
   * 审校任务的开始时间
   */
  StartTime?: string
  /**
   * 若审校任务失败（Status="Failed"），该字段返回失败的具体原因。
   */
  FailureReason?: string
  /**
   * 该字段为历史结构字段，不再推荐使用。
   */
  ModerationResult?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文本审核返回的详细结果
 */
export interface DetailResults {
  /**
   * 该字段用于返回检测结果所对应的全部恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告；以及其他令人反感、不安全或不适宜的内容类型。
   */
  Label?: string
  /**
   * 该字段用于返回对应当前标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
   */
  Suggestion?: string
  /**
   * 该字段用于返回检测文本命中的关键词信息，用于标注文本违规的具体原因（如：*加我微信*）。该参数可能会有多个返回值，代表命中的多个关键词；如返回值为空且Score不为空，则代表识别结果所对应的恶意标签（Label）是来自于语义模型判断的返回值。
   */
  Keywords?: Array<string>
  /**
   * 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容；*色情 0*，则表明该文本不属于色情内容。
   */
  Score?: number
  /**
   * 该字段用于返回自定义关键词对应的词库类型，取值为**1**（黑白库）和**2**（自定义关键词库），若未配置自定义关键词库,则默认值为1（黑白库匹配）。
   */
  LibType?: number
  /**
   * 该字段用于返回自定义库的ID，以方便自定义库管理和配置。
   */
  LibId?: string
  /**
   * 该字段用于返回自定义库的名称,以方便自定义库管理和配置。
   */
  LibName?: string
  /**
   * 该字段用于返回当前标签（Label）下的二级标签。
   */
  SubLabel?: string
  /**
   * 该字段用于返回当前一级标签（Label）下的关键词、子标签及分数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 该字段用于返回违规文本命中信息
   */
  HitInfos?: Array<HitInfo>
}

/**
 * TextModeration请求参数结构体
 */
export interface TextModerationRequest {
  /**
   * 待检测的文本内容，需为UTF-8编码并以Base64格式传入。

   */
  Content: string
  /**
   * 接口使用的识别策略编号，需在[控制台](https://console.cloud.tencent.com/cms/clouds/manage)获取。详细获取方式请参考以下链接：
- **内容安全**（详见步骤四：策略配置）：[点击这里](https://cloud.tencent.com/document/product/1124/37119)
- **AI生成识别**（详见服务对接->方式二）：[点击这里](https://cloud.tencent.com/document/product/1124/118694)
   */
  BizType?: string
  /**
   * 该字段表示您为待检测文本分配的数据ID，作用是方便您对数据进行标识和管理。
取值：可由英文字母、数字、四种特殊符号（_，-，@，#）组成，**长度不超过64个字符**。
   */
  DataId?: string
  /**
   * 该字段标识用户信息，传入后可增强甄别有违规风险的发布者账号。
   */
  User?: User
  /**
   * 该字段标识设备信息，传入后可增强甄别有违规风险的发布者设备。
   */
  Device?: Device
  /**
   * Content字段的原始语种，枚举值包括 zh 和 en：
- 推荐使用 zh
- en 适用于纯英文内容，耗时较高。若需使用 en，请先通过[反馈工单](https://console.cloud.tencent.com/workorder/category?level1_id=141&level2_id=1287&source=14&data_title=%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8&step=1)确认

   */
  SourceLanguage?: string
  /**
   * 服务类型，枚举值包括 TEXT 和 TEXT_AIGC：
TEXT：内容安全
TEXT_AIGC：AI生成识别
   */
  Type?: string
  /**
   * 适用于上下文关联审核场景，若多条文本内容需要联合审核，通过该字段关联会话。
   */
  SessionId?: string
}

/**
 * 关键词命中位置信息
 */
export interface HitInfo {
  /**
   * 标识模型命中还是关键词命中
   */
  Type?: string
  /**
   * 命中关键词
   */
  Keyword?: string
  /**
   * 自定义词库名称
   */
  LibName?: string
  /**
   * 位置信息
   */
  Positions?: Array<Positions>
}

/**
 * 金融大模型审校-违规原因
 */
export interface FinancialLLMViolationReason {
  /**
   * 违规原文片段
   */
  TargetText?: string
  /**
   * 违规原因
   */
  Reason?: string
}

/**
 * CreateFinancialLLMTask返回参数结构体
 */
export interface CreateFinancialLLMTaskResponse {
  /**
   * 本次请求返回的任务ID将用于后续查询接口，以获取对应的审校结果。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 该字段用于返回审核结果明细字段的标签及分数
 */
export interface Tag {
  /**
   * 该字段用于返回命中的关键词
   */
  Keyword?: string
  /**
   * 该字段用于返回子标签
   */
  SubLabel?: string
  /**
   * 该字段用于返回子标签对应的分数
   */
  Score?: number
}

/**
 * CreateFinancialLLMTask请求参数结构体
 */
export interface CreateFinancialLLMTaskRequest {
  /**
   * 接口使用的识别策略 ID，请参考 [快速指引](https://cloud.tencent.com/document/product/1124/124604) 获取该值。
   */
  BizType: string
  /**
   * 送审内容的格式，有两个可选值：
- 1：代表送审内容为**文档**，如DOC文档
- 2：代表送审内容为**纯文本**
   */
  ContentType?: number
  /**
   * 若送审内容为文档（ContentType=1），需要传入具体格式，当前支持：DOC、DOCX、PDF。  
说明：若送审内容为纯文本（ContentType=2），则本字段传空（FileType=""）。
   */
  FileType?: string
  /**
   * 送审内容的传入方式如下：
- 若为文档类，需传入文档的URL（原文档文字数不超过10,000字），例如：http://xxxxxxxxxxxx/financial_test.doc
- 若为纯文本类，请以UTF-8格式进行Base64编码后传入（编码后字符数不超过10,000字），例如：5piO5aSpNjAz5LiA5a6a5rao
   */
  Content?: string
}

/**
 * 金融大模型审校 违规明细
 */
export interface FinancialLLMViolationDetail {
  /**
   * 违规点
   */
  Label?: string
  /**
   * 处置建议
   */
  Suggestion?: string
  /**
   * 违规原因列表
   */
  Reasons?: Array<FinancialLLMViolationReason>
}

/**
 * 用于表示业务用户对应的设备信息
 */
export interface Device {
  /**
   * 该字段表示业务用户对应设备的IP地址。<br>
备注:目前仅支持IPv4地址记录，不支持IPv6地址记录。
   */
  IP?: string
  /**
   * 该字段表示业务用户对应的MAC地址，以方便设备识别与管理；其格式与取值与标准MAC地址一致。
   */
  Mac?: string
  /**
   * *内测中，敬请期待。*
   */
  TokenId?: string
  /**
   * *内测中，敬请期待。*
   */
  DeviceId?: string
  /**
   * 该字段表示业务用户对应设备的**IMEI码**（国际移动设备识别码），该识别码可用于识别每一部独立的手机等移动通信设备，方便设备识别与管理。<br>备注：格式为**15-17位纯数字**。
   */
  IMEI?: string
  /**
   * **iOS设备专用**，该字段表示业务用户对应的**IDFA**(广告标识符),这是由苹果公司提供的用于标识用户的广告标识符，由一串16进制的32位数字和字母组成。<br>
备注：苹果公司自2021年iOS14更新后允许用户手动关闭或者开启IDFA，故此字符串标记有效性可能有所降低。
   */
  IDFA?: string
  /**
   * **iOS设备专用**，该字段表示业务用户对应的**IDFV**(应用开发商标识符),这是由苹果公司提供的用于标注应用开发商的标识符，由一串16进制的32位数字和字母组成，可被用于唯一标识设备。
   */
  IDFV?: string
}

/**
 * 情感分析明细
 */
export interface SentimentDetail {
  /**
   * 正向分数，取值范围0到100
   */
  Positive?: number
  /**
   * 负向分数，取值范围0到100
   */
  Negative?: number
}

/**
 * TextModeration返回参数结构体
 */
export interface TextModerationResponse {
  /**
   * 该字段用于回显检测对象请求参数中的 BizType，与输入的 BizType 值对应。
   */
  BizType?: string
  /**
   * 用于标识对本次请求的处置建议，共三种返回值。
返回值：**Block**: 建议直接做违规处置，**Review**: 建议人工二次确认，**Pass**: 未识别到风险。
   */
  Suggestion?: string
  /**
   * 该字段用于返回检测结果（DetailResults）中所对应的**优先级最高的恶意标签**，表示模型推荐的审核结果，建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告；以及其他令人反感、不安全或不适宜的内容类型
   */
  Label?: string
  /**
   * 对应 Label 字段下的二级子标签，表示该 Label 下更细分的违规点。
   */
  SubLabel?: string
  /**
   * 该字段标识 SubLabel 的置信度，取值范围为 0 - 100，值越高代表置信度越高。
   */
  Score?: number
  /**
   * 该字段标识被检测文本所命中的关键词，可能返回0个或多个关键词。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keywords?: Array<string>
  /**
   * 该字段返回的检测的详细信息，返回值信息可参阅对应数据结构 DetailResults 的详细描述。
注意：此字段可能返回 null，表示取不到有效值。
   */
  DetailResults?: Array<DetailResults>
  /**
   * 该字段标识入参 User 的检测结果，具体内容参阅数据结构 RiskDetails。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskDetails?: Array<RiskDetails>
  /**
   * 该字段用于返回根据您的需求配置的附加信息（Extra），如未配置则默认返回值为空。
备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。
   */
  Extra?: string
  /**
   * 该字段用于回显检测对象请求参数中的 DataId，与输入的 DataId 值对应。
   */
  DataId?: string
  /**
   * 历史上下文关联的字段，不再推荐使用。上下文关联审核可通过入参的 SessionId 来实现。
   */
  ContextText?: string
  /**
   * 该字段为历史结构字段，不再推荐使用。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SentimentAnalysis?: SentimentAnalysis
  /**
   * 该字段为历史结构字段，不再推荐使用。
   */
  HitType?: string
  /**
   * 该字段用于回显检测对象请求参数中的 SessionId，与输入的 SessionId 值对应。
   */
  SessionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标识命中的违规关键词位置信息
 */
export interface Positions {
  /**
   * 关键词起始位置
   */
  Start?: number
  /**
   * 关键词结束位置
   */
  End?: number
}

/**
 * 用于表示业务用户的账号相关信息
 */
export interface User {
  /**
   * 该字段表示业务用户ID,填写后，系统可根据账号过往违规历史优化审核结果判定，有利于存在可疑违规风险时的辅助判断。<br>
备注：该字段可传入微信openid、QQopenid、字符串等账号信息，与账号类别参数（AccountType）配合使用可确定唯一账号。
   */
  UserId?: string
  /**
   * 该字段表示业务用户对应的账号昵称信息。
   */
  Nickname?: string
  /**
   * 该字段表示业务用户ID对应的账号类型，取值：**1**-微信uin，**2**-QQ号，**3**-微信群uin，**4**-qq群号，**5**-微信openid，**6**-QQopenid，**7**-其它string。<br>
该字段与账号ID参数（UserId）配合使用可确定唯一账号。
   */
  AccountType?: number
  /**
   * 该字段表示业务用户对应账号的性别信息。<br>
取值：**0**（默认值，代表性别未知）、**1**（男性）、**2**（女性）。
   */
  Gender?: number
  /**
   * 该字段表示业务用户对应账号的年龄信息。<br>
取值：**0**（默认值，代表年龄未知）-（**自定义年龄上限**）之间的整数。
   */
  Age?: number
  /**
   * 该字段表示业务用户对应账号的等级信息。<br>
取值：**0**（默认值，代表等级未知）、**1**（等级较低）、**2**（等级中等）、**3**（等级较高），目前**暂不支持自定义等级**。
   */
  Level?: number
  /**
   * 该字段表示业务用户对应账号的手机号信息，支持全球各地区手机号的记录。<br>
备注：请保持手机号格式的统一，如区号格式（086/+86）等。
   */
  Phone?: string
  /**
   * 该字段表示业务用户头像图片的访问链接(URL)，支持PNG、JPG、JPEG、BMP、GIF、WEBP格式。
备注：头像图片大小不超过5MB，建议分辨率不低于256x256；图片下载时间限制为3秒，超过则会返回下载超时。
   */
  HeadUrl?: string
  /**
   * 该字段表示业务用户的简介信息，支持汉字、英文及特殊符号，长度不超过5000个汉字字符。
   */
  Desc?: string
  /**
   * 该字段表示业务群聊场景时的房间ID。
   */
  RoomId?: string
  /**
   * 该字段表示消息接受者ID
   */
  ReceiverId?: string
  /**
   * 消息生成时间，精确到毫秒
   */
  SendTime?: number
}
