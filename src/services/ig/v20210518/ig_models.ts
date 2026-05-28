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
 * GetLLMDiagnosisHealth返回参数结构体
 */
export interface GetLLMDiagnosisHealthResponse {
  /**
   * <p>错误码，0成功，非0失败</p>
   */
  Code?: number
  /**
   * <p>错误信息</p>
   */
  Message?: string
  /**
   * <p>返回数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Data?: LLMDiagnosisHealthData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 高亮词信息
 */
export interface HighlightWordInfo {
  /**
   * 名称
   */
  Name?: string
  /**
   * 类型 1:疾病，2:检验/检查，3:药品，4:科室，5:自定义配置
   */
  Type?: number
  /**
   * 跳转类型 h5:h5类型，mini_wx:微信小程序
   */
  JumpType?: string
  /**
   * 跳转URL
   */
  JumpUrl?: string
  /**
   * 跳转小程序Appid
   */
  JumpAppid?: string
  /**
   * 跳转小程序原始ID
   */
  JumpOriginId?: string
}

/**
 * GetLLMDiagnosisDrugChat请求参数结构体
 */
export interface GetLLMDiagnosisDrugChatRequest {
  /**
   * <p>合作方ID</p>
   */
  PartnerId: string
  /**
   * <p>合作方密钥</p>
   */
  PartnerSecret: string
  /**
   * <p>医院应用ID</p>
   */
  HospitalAppId: string
  /**
   * <p>对话ID，由接入方生成，相同对话ID会保持相同的上下文，接入方根据业务场景使用相同或新建对话ID（建议使用UUID值）</p><p>入参限制：长度限制10-50</p>
   */
  DialogueId: string
  /**
   * <p>本次问答用户输入的问题，（最大长度1000）</p>
   */
  Message: string
  /**
   * <p>返回类型：0:正常返回； 1:流式返回； 默认：0</p>
   */
  ResultType?: number
  /**
   * <p>提示词</p>
   */
  Prompt?: string
}

/**
 * 大模型症状自查返回数据
 */
export interface LLMDiagnosisHealthData {
  /**
   * <p>大模型返回问答内容</p>
   */
  Content?: string
  /**
   * <p>大模型返回思考内容</p>
   */
  Think?: string
  /**
   * <p>序号，无业务含义，标识流式结果的序号</p>
   */
  Sort?: number
  /**
   * <p>流式输出结束标识，false:未结束，true:结束</p>
   */
  IsFinish?: boolean
  /**
   * <p>是否命中敏感词，false:否，true:是；</p>
   */
  IsSensitive?: boolean
  /**
   * <p>结果类型，0：正常结果，1：追问问题</p>
   */
  Kind?: number
  /**
   * <p>风险提示</p>
   */
  RiskReminder?: string
  /**
   * <p>引用资料列表，流式输出方式，只在流式输出第一次返回；</p>
   */
  ReferResourceItems?: Array<ReferResourceInfo>
  /**
   * <p>猜你想问列表，流式输出方式，只在流式结束输出结果；</p>
   */
  GuessQuestions?: Array<GuessQuestion>
  /**
   * <p>高亮词列表，流式输出方式在流式过程中输出结果。</p>
   */
  HighlightWords?: Array<HighlightWordInfo>
  /**
   * <p>追问问题列表，流式输出方式，只在流式结束输出结果。只会在kind=1追问类型时有结果。</p>
   */
  FollowUpQuestions?: Array<HealthFollowUpQuestion>
  /**
   * <p>药品列表，流式输出方式，只在流式结束输出结果。</p>
   */
  DrugList?: Array<StandardDrugCardInfo>
}

/**
 * 标准药品卡片信息
 */
export interface StandardDrugCardInfo {
  /**
   * 标准药品名
   */
  StandardDrugName?: string
  /**
   * 药品列表
   */
  DrugInfos?: Array<DrugCardInfo>
}

/**
 * GetLLMDiagnosisDrugChat返回参数结构体
 */
export interface GetLLMDiagnosisDrugChatResponse {
  /**
   * <p>错误码，0成功，非0失败</p>
   */
  Code?: number
  /**
   * <p>错误信息</p>
   */
  Message?: string
  /**
   * <p>返回数据</p>
   */
  Data?: LLMDiagnosisDrugData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 猜你想问信息
 */
export interface GuessQuestion {
  /**
   * 问题标题
   */
  Title?: string
}

/**
 * GetLLMReportInterpretation请求参数结构体
 */
export interface GetLLMReportInterpretationRequest {
  /**
   * <p>合作方ID</p>
   */
  PartnerId: string
  /**
   * <p>合作方密钥</p>
   */
  PartnerSecret: string
  /**
   * <p>接入医院id</p>
   */
  HospitalId: string
  /**
   * <p>对话ID，由接入方生成，相同对话ID会保持相同的上下文，接入方根据业务场景使用相同或新建对话ID（建议使用UUID值）</p><p>入参限制：长度限制10-50</p>
   */
  DialogueId: string
  /**
   * <p>本次问答用户输入的问题</p>
   */
  Message: string
  /**
   * <p>报告文件信息</p>
   */
  ReportFileInfos?: Array<ReportFileInfoReq>
  /**
   * <p>返回类型：0:正常返回； 1:流式返回； 默认：0</p>
   */
  ResultType?: number
  /**
   * <p>报告解读提示词</p>
   */
  Prompt?: string
  /**
   * <p>无报告问答提示词</p>
   */
  QaPrompt?: string
}

/**
 * 引用资料信息
 */
export interface ReferResourceInfo {
  /**
   * 资料标题
   */
  Title?: string
  /**
   * 资料来源类型，1:问答库，2:文档，3:医典百科，4:临床指南，5:药品说明书
   */
  Type?: string
  /**
   * 资料详情链接
   */
  Url?: string
}

/**
 * 报告文件信息参数
 */
export interface ReportFileInfoReq {
  /**
   * <p>报告文件链接</p>
   */
  ReportFileUrl: string
  /**
   * <p>报告文件类型，1:pdf，2:图片</p>
   */
  ReportFileType: number
  /**
   * <p>报告id</p>
   */
  ReportId?: string
}

/**
 * DescribeIgOrderList返回参数结构体
 */
export interface DescribeIgOrderListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetLLMDiagnosisDrug返回参数结构体
 */
export interface GetLLMDiagnosisDrugResponse {
  /**
   * <p>错误码，0成功，非0失败</p>
   */
  Code?: number
  /**
   * <p>错误信息</p>
   */
  Message?: string
  /**
   * <p>返回数据</p>
   */
  Data?: LLMDiagnosisDrugData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 报告文件信息返回
 */
export interface ReportFileInfoRsp {
  /**
   * <p>报告id</p>
   */
  ReportId?: string
  /**
   * <p>是否解析成功</p>
   */
  IsAnalysis?: boolean
  /**
   * <p>解析错误信息</p>
   */
  ErrInfo?: string
}

/**
 * QueryDrugInstructions请求参数结构体
 */
export interface QueryDrugInstructionsRequest {
  /**
   * <p>合作方ID</p>
   */
  PartnerId: string
  /**
   * <p>合作方密钥</p>
   */
  PartnerSecret: string
  /**
   * <p>医院应用ID</p>
   */
  HospitalAppId: string
  /**
   * <p>本次问答用户输入的问题，（最大长度1000）</p>
   */
  Message: string
}

/**
 * GetLLMReportInterpretation返回参数结构体
 */
export interface GetLLMReportInterpretationResponse {
  /**
   * <p>错误码，0成功，非0失败</p>
   */
  Code?: number
  /**
   * <p>错误信息</p>
   */
  Message?: string
  /**
   * <p>返回数据</p>
   */
  Data?: LLMReportInterpretationData
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 药品说明书信息
 */
export interface DrugInstructionInfo {
  /**
   * 药品id
   */
  DrugId?: string
  /**
   * 药品名称
   */
  DrugName?: string
  /**
   * 商品名称
   */
  TradeName?: string
  /**
   * 规格
   */
  Specification?: string
  /**
   * 生产企业
   */
  Manufacturer?: string
  /**
   * 用法用量
   */
  DrugUsage?: string
  /**
   * 适应症
   */
  Indication?: string
  /**
   * 不良反应
   */
  AdverseReaction?: string
  /**
   * 是否处方药，0:非处方药，1:处方药
   */
  DrugRxType?: number
  /**
   * 药品说明书URL
   */
  DocUrl?: string
}

/**
 * 大模型症状自查返回数据
 */
export interface LLMReportInterpretationData {
  /**
   * <p>大模型返回问答内容</p>
   */
  Content?: string
  /**
   * <p>大模型返回思考内容</p>
   */
  Think?: string
  /**
   * <p>序号，无业务含义，标识流式结果的序号</p>
   */
  Sort?: number
  /**
   * <p>流式输出结束标识，false:未结束，true:结束</p>
   */
  IsFinish?: boolean
  /**
   * <p>是否命中敏感词，false:否，true:是；</p>
   */
  IsSensitive?: boolean
  /**
   * <p>是否支持报告类型，false:否，true:是； 默认返回true，不支持的报告类型返回false</p>
   */
  IsSupportFile?: boolean
  /**
   * <p>返回的报告列表，和传入报告文件顺序一致</p>
   */
  ReportInfos?: Array<ReportFileInfoRsp>
  /**
   * <p>引用资料列表，流式输出方式，只在流式输出第一次返回；</p>
   */
  ReferResourceItems?: Array<ReferResourceInfo>
  /**
   * <p>猜你想问列表，流式输出方式，只在流式结束输出结果；</p>
   */
  GuessQuestions?: Array<GuessQuestion>
  /**
   * <p>高亮词列表，流式输出方式在流式过程中输出结果。</p>
   */
  HighlightWords?: Array<HighlightWordInfo>
}

/**
 * GetLLMDiagnosisHealth请求参数结构体
 */
export interface GetLLMDiagnosisHealthRequest {
  /**
   * <p>合作方ID</p>
   */
  PartnerId: string
  /**
   * <p>合作方密钥</p>
   */
  PartnerSecret: string
  /**
   * <p>医院应用ID</p>
   */
  HospitalAppId: string
  /**
   * <p>对话ID，由接入方生成，相同对话ID会保持相同的上下文，接入方根据业务场景使用相同或新建对话ID（建议使用UUID值）</p><p>入参限制：长度限制10-50</p>
   */
  DialogueId: string
  /**
   * <p>本次问答用户输入的问题，（最大长度1000）</p>
   */
  Message: string
  /**
   * <p>返回类型：0:正常返回； 1:流式返回； 默认：0</p>
   */
  ResultType?: number
  /**
   * <p>性别，0:未知，1:男，2:女</p>
   */
  Sex?: number
  /**
   * <p>年龄，0:未知，最大值：120</p>
   */
  Age?: number
  /**
   * <p>追问轮数，-1:不追问；0:使用默认规则； 1-10:按指定轮数追问；（最大值10轮）； 默认：0</p>
   */
  RoundNumber?: number
  /**
   * <p>是否追问结构化结果，0：否，1：是；</p>
   */
  OutputStructured?: number
}

/**
 * 大模型问药返回数据
 */
export interface LLMDiagnosisDrugData {
  /**
   * <p>大模型返回问答内容</p>
   */
  Content?: string
  /**
   * <p>大模型返回思考内容</p>
   */
  Think?: string
  /**
   * <p>序号，无业务含义，标识流式结果的序号</p>
   */
  Sort?: number
  /**
   * <p>流式输出结束标识，false:未结束，true:结束</p>
   */
  IsFinish?: boolean
  /**
   * <p>是否命中敏感词，false:否，true:是；</p>
   */
  IsSensitive?: boolean
  /**
   * <p>引用资料列表，流式输出方式，只在流式输出第一次返回；</p>
   */
  ReferResourceItems?: Array<ReferResourceInfo>
  /**
   * <p>猜你想问列表，流式输出方式，只在流式结束输出结果；</p>
   */
  GuessQuestions?: Array<GuessQuestion>
  /**
   * <p>高亮词列表，流式输出方式在流式过程中输出结果。</p>
   */
  HighlightWords?: Array<HighlightWordInfo>
  /**
   * <p>药品列表，流式输出方式，只在流式结束输出结果。</p>
   */
  DrugList?: Array<StandardDrugCardInfo>
}

/**
 * 药品说明书标准药品结果
 */
export interface StandardDrugInstructionInfo {
  /**
   * 标准药品名
   */
  StandardDrugName?: string
  /**
   * 药品列表
   */
  DrugInfos?: Array<DrugInstructionInfo>
}

/**
 * GetLLMDiagnosisDrug请求参数结构体
 */
export interface GetLLMDiagnosisDrugRequest {
  /**
   * <p>合作方ID</p>
   */
  PartnerId: string
  /**
   * <p>合作方密钥</p>
   */
  PartnerSecret: string
  /**
   * <p>医院应用ID</p>
   */
  HospitalAppId: string
  /**
   * <p>对话ID，由接入方生成，相同对话ID会保持相同的上下文，接入方根据业务场景使用相同或新建对话ID（建议使用UUID值）</p><p>入参限制：长度限制10-50</p>
   */
  DialogueId: string
  /**
   * <p>本次问答用户输入的问题，（最大长度1000，传了图片链接，此参数可为空）</p>
   */
  Message?: string
  /**
   * <p>药品图片链接</p>
   */
  ImageUrl?: string
  /**
   * <p>返回类型：0:正常返回； 1:流式返回； 默认：0</p>
   */
  ResultType?: number
  /**
   * <p>提示词</p>
   */
  Prompt?: string
}

/**
 * 症状自查追问问题
 */
export interface HealthFollowUpQuestion {
  /**
   * <p>追问类型</p>
   */
  PromptType?: string
  /**
   * <p>追问选项列表</p>
   */
  Choices?: Array<string>
  /**
   * <p>追问题型，单选或多选</p>
   */
  QuestionType?: string
  /**
   * <p>追问特殊类型，如部位题、时间题</p>
   */
  SpecialType?: string
  /**
   * <p>追问问题内容</p>
   */
  Question?: string
}

/**
 * 药品卡片信息
 */
export interface DrugCardInfo {
  /**
   * 药品id
   */
  DrugId?: string
  /**
   * 药品名称
   */
  DrugName?: string
  /**
   * 商品名称
   */
  TradeName?: string
  /**
   * 规格
   */
  Specification?: string
  /**
   * 生产厂商
   */
  Manufacturer?: string
  /**
   * 是否处方药，0:非处方药，1:处方药
   */
  DrugRxType?: number
  /**
   * 药品说明书URL
   */
  DocUrl?: string
  /**
   * 识别来源，1:药品图片，2:用户输入
   */
  IdentifySource?: number
}

/**
 * DescribeIgOrderList请求参数结构体
 */
export interface DescribeIgOrderListRequest {
  /**
   * <p>页码</p>
   */
  PageNumber: number
  /**
   * <p>每页数目</p>
   */
  PageSize: number
  /**
   * <p>产品类型</p><p>枚举值：</p><ul><li>ig： 导诊</li><li>ipc： 预问诊</li></ul><p>默认值：ig</p>
   */
  ProductType: string
  /**
   * <p>订单状态</p><p>枚举值：</p><ul><li>0： 无状态</li><li>1： 未激活</li><li>2： 使用中</li><li>3： 暂停使用</li><li>4： 已到期</li><li>5： 已删除</li><li>6： 已失效</li></ul><p>默认值：0</p>
   */
  OrderStatus?: number
  /**
   * <p>搜索关键字</p>
   */
  KeyWord?: string
}

/**
 * QueryDrugInstructions返回参数结构体
 */
export interface QueryDrugInstructionsResponse {
  /**
   * <p>错误码，0成功，非0失败</p>
   */
  Code?: number
  /**
   * <p>错误信息</p>
   */
  Message?: string
  /**
   * <p>返回数据</p>
   */
  Data?: Array<StandardDrugInstructionInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
