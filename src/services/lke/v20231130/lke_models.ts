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
 * GetWsToken返回参数结构体
 */
export interface GetWsTokenResponse {
  /**
   * token值（有效期60s，仅一次有效，多次校验会报错）
   */
  Token?: string
  /**
   * 余额; 余额大于 0 时表示有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Balance?: number
  /**
   * 对话窗输入字符限制
   */
  InputLenLimit?: number
  /**
   * 应用模式，standard:标准模式, agent: agent模式，single_workflow：单工作流模式
   */
  Pattern?: string
  /**
   * SingleWorkflow
   */
  SingleWorkflow?: KnowledgeQaSingleWorkflow
  /**
   * 使用视觉模型时对话窗口输入字符限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  VisionModelInputLimit?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAppSecret请求参数结构体
 */
export interface GetAppSecretRequest {
  /**
   * 应用ID
   */
  AppBizId: string
}

/**
 * 扩展信息
 */
export interface ExtraInfo {
  /**
   * ECharts信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  EChartsInfo?: Array<string>
}

/**
 * ListSelectDoc返回参数结构体
 */
export interface ListSelectDocResponse {
  /**
   * 下拉框内容
   */
  List?: Array<Option>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteDoc请求参数结构体
 */
export interface DeleteDocRequest {
  /**
   * 文档业务ID列表
   */
  DocBizIds: Array<string>
  /**
   * 应用ID
   */
  BotBizId: string
}

/**
 * Agent高级设置
 */
export interface AgentAdvancedConfig {
  /**
   * 是否开启澄清询问
   */
  EnableClarification?: boolean
  /**
   * 思考模式，0为效果优先，1为速度优先
   */
  ThinkingMode?: number
  /**
   * 最大推理轮数
   */
  MaxReasoningRound?: number
  /**
   * 上下文轮数
   */
  HistoryLimit?: number
  /**
   * 是否开启结构化输出
   */
  EnableStructuredOutput?: boolean
  /**
   * 结构化输出配置
   */
  StructuredOutputConfig?: StructuredOutputConfig
  /**
   * Agent输出配置
   */
  AgentOutputConfig?: AgentOutputConfig
  /**
   * 澄清询问配置
   */
  ClarificationConfig?: ClarificationConfig
}

/**
 * 工作流信息
 */
export interface WorkflowInfo {
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 工作流运行ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRunId?: string
  /**
   * 选项卡
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptionCards?: Array<string>
  /**
   * 多气泡的输出结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Outputs?: Array<string>
  /**
   * 工作流发布时间，unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowReleaseTime?: string
  /**
   * 工作流多气泡输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  Contents?: Array<Content>
}

/**
 * 文档类参考来源信息
 */
export interface DocReference {
  /**
   * 文档业务ID
   */
  DocBizId?: number
  /**
   * 文档片段参考ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReferBizId?: number
  /**
   * 文档名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocName?: string
  /**
   * 文档所在知识库业务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeBizId?: number
  /**
   * 文档所在知识库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeName?: string
  /**
   * 文档访问地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
}

/**
 * GetAppSecret返回参数结构体
 */
export interface GetAppSecretResponse {
  /**
   * 应用密钥
   */
  AppKey?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 是否发布
   */
  IsRelease?: boolean
  /**
   * 是否有查看权限
   */
  HasPermission?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadAttributeLabel返回参数结构体
 */
export interface UploadAttributeLabelResponse {
  /**
   * 导入错误
   */
  ErrorMsg?: string
  /**
   * 错误链接
   */
  ErrorLink?: string
  /**
   * 错误链接文本
   */
  ErrorLinkText?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSharedKnowledge请求参数结构体
 */
export interface CreateSharedKnowledgeRequest {
  /**
   * 共享知识库名称，字符数量范围：[1, 50]
   */
  KnowledgeName: string
  /**
   * 共享知识库描述，字符数量上限2000
   */
  KnowledgeDescription?: string
  /**
   * Embedding模型，字符数量上限128
   * @deprecated
   */
  EmbeddingModel?: string
  /**
   * 共享知识库类型，0普通，1公众号
   */
  KnowledgeType?: number
}

/**
 * 标签引用信息
 */
export interface AttrLabelRefer {
  /**
   * 标签来源，1：标签
   */
  Source?: number
  /**
   * 标签ID
   */
  AttributeBizId?: string
  /**
   * 标签值ID
   */
  LabelBizIds?: Array<string>
}

/**
 * 工作流的API参数
 */
export interface CustomVariable {
  /**
   * 参数名称
   */
  Name?: string
  /**
   * 参数的值
   */
  Value?: string
}

/**
 * 应用配置关联的agent信息
 */
export interface KnowledgeQaAgent {
  /**
   * 协同方式，1：自由转交，2：工作流编排，3：Plan-and-Execute
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentCollaboration?: number
  /**
   * 应用配置agent关联的工作流
注意：此字段可能返回 null，表示取不到有效值。
   */
  Workflow?: KnowledgeQaWorkflowInfo
}

/**
 * 标签详情信息
 */
export interface AttrLabel {
  /**
   * 标签来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: number
  /**
   * 标签ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrBizId?: string
  /**
   * 标签标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrKey?: string
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrName?: string
  /**
   * 标签值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<Label>
}

/**
 * 发布文档详情
 */
export interface ReleaseDoc {
  /**
   * 文件名
   */
  FileName?: string
  /**
   * 文件类型
   */
  FileType?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 状态
   */
  Action?: number
  /**
   * 状态描述
   */
  ActionDesc?: string
  /**
   * 失败原因
   */
  Message?: string
  /**
   * 文档业务ID
   */
  DocBizId?: string
}

/**
 * DescribeKnowledgeUsage返回参数结构体
 */
export interface DescribeKnowledgeUsageResponse {
  /**
   * 可用字符数上限
   */
  AvailableCharSize?: string
  /**
   * 超过可用字符数上限的字符数
   */
  ExceedCharSize?: string
  /**
   * 知识库使用字符总数
   */
  UsedCharSize?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSharedKnowledge返回参数结构体
 */
export interface DeleteSharedKnowledgeResponse {
  /**
   * 共享知识库业务ID
   */
  KnowledgeBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListUnsatisfiedReply请求参数结构体
 */
export interface ListUnsatisfiedReplyRequest {
  /**
   * 应用ID，获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 页码，取值范围：大于0
   */
  PageNumber: number
  /**
   * 分页数量，取值范围：大于0
   */
  PageSize: number
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 用户请求(问题或答案)，按关键词检索，可匹配用户问题或答案
   */
  Query?: string
  /**
   * 按错误类型检索
   */
  Reasons?: Array<string>
  /**
   * 按操作状态检索  0-全部 1-待处理  2-已处理【包括答案纠错，拒答，忽略】，不填时默认值为0
   */
  Status?: number
  /**
   * 处理状态 0-待处理 1-已拒答 2-已忽略 3-已添加为新问答 4-已添加为相似问
   */
  HandlingStatuses?: Array<number | bigint>
}

/**
 * DeleteQA请求参数结构体
 */
export interface DeleteQARequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 问答ID
   */
  QaBizIds: Array<string>
}

/**
 * CreateDocCate请求参数结构体
 */
export interface CreateDocCateRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 父级业务ID
   */
  ParentBizId: string
  /**
   * 分类名称

   */
  Name: string
}

/**
 * ListRejectedQuestionPreview返回参数结构体
 */
export interface ListRejectedQuestionPreviewResponse {
  /**
   * 文档数量
   */
  Total?: string
  /**
   * 文档列表
   */
  List?: Array<ReleaseRejectedQuestion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAttributeLabel请求参数结构体
 */
export interface DeleteAttributeLabelRequest {
  /**
   * 应用ID，获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 标签ID
   */
  AttributeBizIds: Array<string>
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * DescribeRobotBizIDByAppKey返回参数结构体
 */
export interface DescribeRobotBizIDByAppKeyResponse {
  /**
   * 应用业务ID
   */
  BotBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDocCate请求参数结构体
 */
export interface ListDocCateRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 分类查询类型：0-全量查询整棵标签树，1-根据父节点BizId分页查询子节点，2-关键词检索所有匹配的分类链路
   */
  QueryType?: number
  /**
   * QueryType=1时，父节点分类ID
   */
  ParentCateBizId?: string
  /**
   * QueryType=1时，页码（从1开始）
   */
  PageNumber?: number
  /**
   * 每页数量（默认10）
   */
  PageSize?: number
  /**
   * QueryType=2时，搜索内容
   */
  Query?: string
}

/**
 * DescribeDoc返回参数结构体
 */
export interface DescribeDocResponse {
  /**
   * 文档ID
   */
  DocBizId?: string
  /**
   * 文件名称
   */
  FileName?: string
  /**
   * 文件类型
   */
  FileType?: string
  /**
   * cos路径
   */
  CosUrl?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 文档状态： 1-未生成 2-生成中 3-生成成功 4-生成失败 5-删除中 6-删除成功 7-审核中 8-审核失败 9-审核成功 10-待发布 11-发布中 12-已发布 13-学习中 14-学习失败 15-更新中 16-更新失败 17-解析中 18-解析失败 19-导入失败 20-已过期 21-超量失效 22-超量失效恢复
   */
  Status?: number
  /**
   * 文档状态描述
   */
  StatusDesc?: string
  /**
   * 生成失败原因
   */
  Reason?: string
  /**
   * 答案中是否引用
   */
  IsRefer?: boolean
  /**
   * 问答对数量
   */
  QaNum?: number
  /**
   * 是否删除
   */
  IsDeleted?: boolean
  /**
   * 文档来源
   */
  Source?: number
  /**
   * 文档来源描述
   */
  SourceDesc?: string
  /**
   * 是否允许重新生成
   */
  IsAllowRestart?: boolean
  /**
   * qa是否已删除
   */
  IsDeletedQa?: boolean
  /**
   * 问答是否生成中
   */
  IsCreatingQa?: boolean
  /**
   * 是否允许删除
   */
  IsAllowDelete?: boolean
  /**
   * 是否允许操作引用开关
   */
  IsAllowRefer?: boolean
  /**
   * 是否生成过问答
   */
  IsCreatedQa?: boolean
  /**
   * 文档字符量
   */
  DocCharSize?: string
  /**
   * 是否允许编辑
   */
  IsAllowEdit?: boolean
  /**
   * 标签适用范围 1：全部，2：按条件范围
   */
  AttrRange?: number
  /**
   * 标签
   */
  AttrLabels?: Array<AttrLabel>
  /**
   * 分类ID
   */
  CateBizId?: string
  /**
   * 文档是否停用，false:未停用，true:已停用
   */
  IsDisabled?: boolean
  /**
   * 是否支持下载
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDownload?: boolean
  /**
   * 自定义切分规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  SplitRule?: string
  /**
   * 文档更新频率
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatePeriodInfo?: UpdatePeriodInfo
  /**
   * 从根节点开始的路径分类ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CateBizIdPath?: Array<string>
  /**
   * 从根节点开始的路径分类名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CateNamePath?: Array<string>
  /**
   * 文档生效域: 1-不生效；2-仅开发域生效；3-仅发布域生效；4-开发域和发布域均生效
   */
  EnableScope?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签ID
 */
export interface Label {
  /**
   * 标签ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelBizId?: string
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelName?: string
}

/**
 * DeleteVar返回参数结构体
 */
export interface DeleteVarResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListQACate返回参数结构体
 */
export interface ListQACateResponse {
  /**
   * 列表
   */
  List?: Array<QACate>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSharedKnowledge返回参数结构体
 */
export interface CreateSharedKnowledgeResponse {
  /**
   * 共享知识库业务ID
   */
  KnowledgeBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 问答列表
 */
export interface QAList {
  /**
   * 问答ID
   */
  QaBizId: string
  /**
   * 是否采纳
   */
  IsAccepted?: boolean
  /**
   * 分类ID
   */
  CateBizId?: string
  /**
   * 问题
   */
  Question?: string
  /**
   * 答案
   */
  Answer?: string
}

/**
 * 标签值
 */
export interface AttributeLabel {
  /**
   * 标准词ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelBizId?: string
  /**
   * 标准词名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelName?: string
  /**
   * 同义词名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SimilarLabels?: Array<string>
}

/**
 * Agent的工具信息
 */
export interface AgentToolInfo {
  /**
   * 插件id
   */
  PluginId?: string
  /**
   * 插件名称
   */
  PluginName?: string
  /**
   * 插件图标url
   */
  IconUrl?: string
  /**
   * 0 自定义插件
1 官方插件
2 第三方插件 目前用于第三方实现的mcp server
   */
  PluginType?: number
  /**
   * 工具id
   */
  ToolId?: string
  /**
   * 工具名称
   */
  ToolName?: string
  /**
   * 工具描述
   */
  ToolDesc?: string
  /**
   * 输入参数
   */
  Inputs?: Array<AgentToolReqParam>
  /**
   * 输出参数
   */
  Outputs?: Array<AgentToolRspParam>
  /**
   * 创建方式，0:服务创建，1:代码创建，2:MCP创建
   */
  CreateType?: number
  /**
   * MCP插件的配置信息
   */
  McpServer?: AgentMCPServerInfo
  /**
   * 该工具是否和知识库绑定
   */
  IsBindingKnowledge?: boolean
  /**
   * 插件状态，1:可用，2:不可用
   */
  Status?: number
  /**
   * header信息
   */
  Headers?: Array<AgentPluginHeader>
  /**
   * NON_STREAMING: 非流式  STREAMIN: 流式
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallingMethod?: string
  /**
   * query信息
   */
  Query?: Array<AgentPluginQuery>
  /**
   * 工具计费状态 0-不计费 1-可用 2-不可用（欠费、无资源等）
   */
  FinanceStatus?: number
  /**
   * 工具来源: 0-来自插件，1-来自工作流
   */
  ToolSource?: number
  /**
   * 计费状态；0-不计费，1-限时免费，2-官方收费
   */
  FinanceType?: number
  /**
   * 工具高级设置
   */
  ToolAdvanceConfig?: ToolAdvanceConfig
}

/**
 * RenameDoc请求参数结构体
 */
export interface RenameDocRequest {
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 应用ID
   */
  BotBizId?: string
  /**
   * 文档ID
   */
  DocBizId?: string
  /**
   * 新文档名，需要带上后缀
   */
  NewName?: string
}

/**
 * StopWorkflowRun返回参数结构体
 */
export interface StopWorkflowRunResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务流程信息
 */
export interface TaskFlowInfo {
  /**
   * 任务流程ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskFlowId?: string
  /**
   * 任务流程名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskFlowName?: string
  /**
   * Query 重写结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueryRewrite?: string
  /**
   * 命中意图
注意：此字段可能返回 null，表示取不到有效值。
   */
  HitIntent?: string
  /**
   * 任务流程回复类型
0: 任务流回复
1: 任务流静默
2: 任务流拉回话术
3: 任务流自定义回复
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
}

/**
 * GenerateQA返回参数结构体
 */
export interface GenerateQAResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 系统参数
 */
export interface AgentInputSystemVariable {
  /**
   * 系统参数名
   */
  Name?: string
  /**
   * 对话历史轮数的配置；如果Input是系统变量中的“对话历史”时才使用；
   */
  DialogHistoryLimit?: number
}

/**
 * 澄清询问配置
 */
export interface ClarificationConfig {
  /**
   * 输出类型，1-文本 3-widget
   */
  OutputType?: number
  /**
   * 澄清widget配置
   */
  WidgetConfigs?: Array<ClarificationWidgetConfig>
}

/**
 * SaveDoc请求参数结构体
 */
export interface SaveDocRequest {
  /**
   * 应用ID，获取方法参看[如何获取   BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 文件名，需要包含文件扩展名
   */
  FileName: string
  /**
   * 文档支持下面类型
pdf、doc、docx、ppt、mhtml、pptx、wps、ppsx，单个文件不超过200MB；
xlsx、xls、md、txt、csv、html，单个文件不超过20MB；

图片支持下面类型：
jpg、png、jpeg、tiff、bmp、gif，单个文件不超过50MB
   */
  FileType: string
  /**
   * 平台cos路径，与DescribeStorageCredential接口查询UploadPath参数保持一致
   */
  CosUrl: string
  /**
   * ETag 全称为 Entity Tag，是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化 成功上传cos后，从返回头中获取
   */
  ETag: string
  /**
   * cos_hash x-cos-hash-crc64ecma 头部中的 CRC64编码进行校验上传到云端的文件和本地文件的一致性  
成功上传cos后，从返回头中获取

请注意：
cos_hash为文档唯一性标识，与文件名无关 相同的cos_hash会被判定为重复文档
   */
  CosHash: string
  /**
   * 文件大小
   */
  Size: string
  /**
   * 标签适用范围，1:全部，2:按条件。默认为1。
   */
  AttrRange?: number
  /**
   * 来源（0 从本地文档导入），默认值为0
   */
  Source?: number
  /**
   * 自定义链接地址, IsRefer为true的时候，该值才有意义
   */
  WebUrl?: string
  /**
   * 标签引用
   */
  AttrLabels?: Array<AttrLabelRefer>
  /**
   * 外部引用链接类型 0：系统链接 1：自定义链接
值为1时，WebUrl 字段不能为空，否则不生效。
   */
  ReferUrlType?: number
  /**
   * 有效开始时间，unix秒级时间戳，默认为0
   */
  ExpireStart?: string
  /**
   * 有效结束时间，unix秒级时间戳，默认为0代表永久有效
   */
  ExpireEnd?: string
  /**
   * 是否显示引用的文档来源(false不显示 true显示）默认false
   */
  IsRefer?: boolean
  /**
   * 文档操作类型：1：批量导入（批量导入问答对）；2:文档导入（正常导入单个文档） 默认为2 <br> 请注意，opt=1的时候请从腾讯云智能体开发平台页面下载excel模板
   */
  Opt?: number
  /**
   * 分类ID
   */
  CateBizId?: string
  /**
   * 是否可下载，IsRefer为true并且ReferUrlType为0时，该值才有意义
   */
  IsDownload?: boolean
  /**
   * 重复文档处理方式，按顺序匹配第一个满足条件的方式处理
   */
  DuplicateFileHandles?: Array<DuplicateFileHandle>
  /**
   * 自定义切分规则

请求参数为一个 **JSON Object**，具体格式可参见接口示例值。包含以下主要字段：

| 字段名             | 类型      | 说明                                   |
|--------------------|--------|----------------------------------------|
| `xlsx_splitter`    | Object   | **Excel（xlsx）文件切分策略配置**，仅当处理 Excel 文件时有效 |
| `common_splitter`  | Object  | **通用文件（如 txt、pdf 等）切分策略配置**，按页或按标签切分 |
| `table_style`      | String | 表格内容的输出格式，如 HTML 或 Markdown |

---

## `xlsx_splitter`（Excel 切分策略）

用于配置 **表格文件的切分方式**。
**类型：Object**

```json
"xlsx_splitter": {
  "header_interval": [1, 2],
  "content_start": 10,
  "split_row": 2
}
```

### 字段说明：

| 字段名            | 类型   | 说明                                                                 |
|-------------------|--------|----------------------------------------------------------------------|
| `header_interval` | Array\<Number\>  | 表头所在的行区间，格式为 `[起始行, 结束行]`，**行号从 1 开始计数**。例如 `[1, 2]` 表示第 1~2 行为表头。 |
| `content_start`   | Number  | **表格内容的起始行号（从 1 开始）**。 |
| `split_row`       | Number   | **切分行数**。                   |

---
## `common_splitter`（通用文件切分策略）

用于配置 **非 Excel 文件（如 TXT、PDF、DOCX 等）的切分方式**，支持两种策略：**按页切分（page）** 或 **按标识符切分（tag）**。

**类型：Object**

```json
"common_splitter": {
  "splitter": "page",
  "page_splitter": {
    "chunk_length": 1000,
    "chunk_overlap_length": 100
  }
}
```

### 字段说明：

| 字段名            | 类型     | 说明                                                                 |
|-------------------|--------|---------------------------------------------------|
| `splitter`        | String  | 切分策略类型，可选值为：`"page"`（按页切分） 或 `"tag"`（按标识符切分）。 |
| `page_splitter`   | Object   | **按页切分的配置**。                                         |
| `page_splitter.chunk_length`   | 1000    | **切片最大长度**。              |
| `page_splitter.chunk_overlap_length`  | 100    | **切片重叠长度**。  |
| `tag_splitter`             | Object          | **自定义切分配置**。             |
| `tag_splitter.tag`         | Array\<String\>    | **切分标识符**。                             |
| `tag_splitter.chunk_length`| Number       | **切片最大长度**。                                                               |
| `tag_splitter.chunk_overlap_length` | Number    | **切块重叠长度**。                                                  |

🔹 **补充说明：**

- `splitter` 字段的值可以是：
  - `"page"`：只使用按页切分逻辑，此时只需要关心 `page_splitter` 相关字段。
  - `"tag"`：只使用按标识符（如分号、换行等）切分逻辑，此时关注 `tag_splitter`。
---

##  `table_style`（表格输出样式）

用于指定 **表格类内容（比如从 Excel 或 CSV 中提取的表格）最终以何种格式返回**，方便前端展示或后续处理。

**类型：String**

```json
"table_style": "md"
```

### 字段说明：

| 字段名       | 类型   | 说明                                                                 |
|--------------|--------|----------------------------------------------------------------------|
| `table_style` | String | 指定表格内容的输出格式。可用值：<br>• `"html"`：以 HTML 表格形式返回，适合网页展示。<br>• `"md"`：以 Markdown 表格语法返回，适合文档或 Markdown 渲染环境。|
   */
  SplitRule?: string
  /**
   * 文档更新频率，默认值为0不更新
   */
  UpdatePeriodInfo?: UpdatePeriodInfo
  /**
   * 文档生效域: 1-不生效；2-仅开发域生效；3-仅发布域生效；4-开发域和发布域均生效
默认值：应用内默认知识库为2，共享知识库为4。
   */
  EnableScope?: number
}

/**
 * ListSharedKnowledge返回参数结构体
 */
export interface ListSharedKnowledgeResponse {
  /**
   * 累计数量
   */
  Total?: number
  /**
   * 知识库列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeList?: Array<KnowledgeDetailInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttributeLabel返回参数结构体
 */
export interface DescribeAttributeLabelResponse {
  /**
   * 属性ID
   */
  AttributeBizId?: string
  /**
   * 属性标识
   */
  AttrKey?: string
  /**
   * 属性名称
   */
  AttrName?: string
  /**
   * 标签数量
   */
  LabelNumber?: string
  /**
   * 标签名称
   */
  Labels?: Array<AttributeLabel>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAttributeLabel返回参数结构体
 */
export interface ModifyAttributeLabelResponse {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 标签ID与名称
   */
  Labels?: Array<AttributeLabel>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 问答知识库单工作流模式下指定单工作流配置
 */
export interface KnowledgeQaSingleWorkflow {
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 工作流名称
   */
  WorkflowName?: string
  /**
   * 工作流描述
   */
  WorkflowDesc?: string
  /**
   * 工作流状态，发布状态(UNPUBLISHED: 待发布 PUBLISHING: 发布中 PUBLISHED: 已发布 FAIL:发布失败)
   */
  Status?: string
  /**
   * 工作流是否启用
   */
  IsEnable?: boolean
  /**
   * 是否开启异步调用工作流
   */
  AsyncWorkflow?: boolean
}

/**
 * RetryDocParse返回参数结构体
 */
export interface RetryDocParseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAgent返回参数结构体
 */
export interface DeleteAgentResponse {
  /**
   * Agent的ID
   */
  AgentId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GroupQA返回参数结构体
 */
export interface GroupQAResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RetryRelease请求参数结构体
 */
export interface RetryReleaseRequest {
  /**
   * 应用ID（获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)）
   */
  BotBizId: string
  /**
   * 发布单ID（可以通过[ListRelease](https://cloud.tencent.com/document/product/1759/105077)获得）
   */
  ReleaseBizId: string
}

/**
 * 应用配置
 */
export interface AppConfig {
  /**
   * 知识问答管理应用配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeQa?: KnowledgeQaConfig
  /**
   * 知识摘要应用配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Summary?: SummaryConfig
  /**
   * 标签提取应用配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Classify?: ClassifyConfig
}

/**
 * 会话内容参考文献信息
 */
export interface ContentReference {
  /**
   * 引用来源索引ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
  /**
   * 参考来源名称
   */
  Name?: string
  /**
   * 参考来源类型
1：问答
2：文档片段
4：联网检索到的内容
   */
  Type?: number
  /**
   * 文档片段参考信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocRefer?: DocReference
  /**
   * 问答参考信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  QaRefer?: QaReference
  /**
   * 联网检索内容参考信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebSearchRefer?: WebSearchReference
}

/**
 * Agent工具的请求参数定义
 */
export interface AgentToolReqParam {
  /**
   * 参数名称
   */
  Name?: string
  /**
   * 参数描述
   */
  Desc?: string
  /**
   * 参数类型，0:string, 1:int, 2:float，3:bool 4:object 5:array_string, 6:array_int, 7:array_float, 8:array_bool, 9:array_object
   */
  Type?: number
  /**
   * 参数是否必填
   */
  IsRequired?: boolean
  /**
   * 参数默认值
   */
  DefaultValue?: string
  /**
   * 子参数,ParamType 是OBJECT 或 ARRAY<>类型有用
   */
  SubParams?: Array<AgentToolReqParam>
  /**
   * 是否隐藏不可见
   */
  GlobalHidden?: boolean
  /**
   * agent模式下模型是否可见
   */
  AgentHidden?: boolean
  /**
   * 其中任意
   */
  AnyOf?: Array<AgentToolReqParam>
  /**
   * 其中一个
   */
  OneOf?: Array<AgentToolReqParam>
  /**
   * 输入
   */
  Input?: AgentInput
}

/**
 * 问答对参考信息
 */
export interface QaReference {
  /**
   * 问答业务ID
   */
  QaBizId?: number
  /**
   * 文档片段参考ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReferBizId?: number
  /**
   * 问答所在知识库业务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeBizId?: number
  /**
   * 问答所在知识库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeName?: string
}

/**
 * 标签详情
 */
export interface AttrLabelDetail {
  /**
   * 标签ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrBizId?: string
  /**
   * 标签标识
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  AttrKey?: string
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrName?: string
  /**
   * 标签值名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelNames?: Array<string>
  /**
   * 标签是否在更新中
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUpdating?: boolean
  /**
   * 发布状态(1 待发布 2 发布中 3 已发布 4 发布失败)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusDesc?: string
  /**
   * 标签值总数
   */
  LabelTotalCount?: string
}

/**
 * QA查询参数
 */
export interface QAQuery {
  /**
   * 页码


   */
  PageNumber: number
  /**
   * 每页数量

   */
  PageSize: number
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 查询内容

   */
  Query?: string
  /**
   * 分类ID

   */
  CateBizId?: string
  /**
   * 校验状态

   */
  AcceptStatus?: Array<number | bigint>
  /**
   * 发布状态

   */
  ReleaseStatus?: Array<number | bigint>
  /**
   * 文档ID

   */
  DocBizId?: string
  /**
   * QAID

   */
  QaBizId?: string
  /**
   * 来源

   */
  Source?: number
  /**
   * 查询答案

   */
  QueryAnswer?: string
  /**
   * 查询类型 filename 名称、 attribute 标签
   */
  QueryType?: string
}

/**
 * DescribeKnowledgeUsage请求参数结构体
 */
export type DescribeKnowledgeUsageRequest = null

/**
 * DeleteSharedKnowledge请求参数结构体
 */
export interface DeleteSharedKnowledgeRequest {
  /**
   * 共享知识库业务ID
   */
  KnowledgeBizId: string
}

/**
 * 任务参数
 */
export interface TaskParams {
  /**
   * 下载地址,需要通过cos桶临时密钥去下载
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosPath?: string
}

/**
 * 文档列表详情描述
 */
export interface ListDocItem {
  /**
   * 文档ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocBizId?: string
  /**
   * 文件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 重命名的新文档名称，在重命名提交之后，文档发布之前都是这个名称
   */
  NewName?: string
  /**
   * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileType?: string
  /**
   * cos路径
注意：此字段可能返回 null，表示取不到有效值。
   */
  CosUrl?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 文档状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 文档状态描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusDesc?: string
  /**
   * 原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reason?: string
  /**
   * 答案中是否引用
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsRefer?: boolean
  /**
   * 问答对数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  QaNum?: number
  /**
   * 是否已删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDeleted?: boolean
  /**
   * 文档来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: number
  /**
   * 文档来源描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceDesc?: string
  /**
   * 是否允许重新生成
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAllowRestart?: boolean
  /**
   * qa是否已删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDeletedQa?: boolean
  /**
   * 问答是否生成中
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCreatingQa?: boolean
  /**
   * 是否允许删除
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAllowDelete?: boolean
  /**
   * 是否允许操作引用开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAllowRefer?: boolean
  /**
   * 问答是否生成过
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCreatedQa?: boolean
  /**
   * 文档字符量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocCharSize?: string
  /**
   * 属性标签适用范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrRange?: number
  /**
   * 属性标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrLabels?: Array<AttrLabel>
  /**
   * 是否允许编辑
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAllowEdit?: boolean
  /**
   * 外部引用链接类型 0：系统链接 1：自定义链接
值为1时，WebUrl 字段不能为空，否则不生效。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReferUrlType?: number
  /**
   * 网页(或自定义链接)地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebUrl?: string
  /**
   * 有效开始时间，unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireStart?: string
  /**
   * 有效结束时间，unix时间戳，0代表永久有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireEnd?: string
  /**
   * 是否允许重试，0：否，1：是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAllowRetry?: boolean
  /**
   * 0:文档比对处理 1:文档生成问答
注意：此字段可能返回 null，表示取不到有效值。
   */
  Processing?: Array<number | bigint>
  /**
   * 文档创建落库时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 文档所属分类ID
   */
  CateBizId?: string
  /**
   * 文档的用户自定义ID
   */
  CustomerKnowledgeId?: string
  /**
   * 文档的属性标记，0: 不做用户外部权限校验
   */
  AttributeFlags?: Array<number | bigint>
  /**
   * false:未停用，ture:已停用
   */
  IsDisabled?: boolean
  /**
   * 员工名称
   */
  StaffName?: string
  /**
   * 文档生效域: 1-停用；2-仅开发域；3-仅发布域；4-全域
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableScope?: number
}

/**
 * 计费统计信息
 */
export interface Stat {
  /**
   * X轴: 时间区域；根据查询条件的粒度返回“分/小时/日”三种区间范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  X?: string
  /**
   * Y轴: 该时间区域内的统计值，如token消耗量，调用次数或使用量等信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Y?: number
}

/**
 * 大模型token统计信息
 */
export interface StatisticInfo {
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * 首Token耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstTokenCost?: number
  /**
   * 总耗时
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCost?: number
  /**
   * 输入Token数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputTokens?: number
  /**
   * 输出Token数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputTokens?: number
  /**
   * 总Token数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalTokens?: number
}

/**
 * CreateAttributeLabel请求参数结构体
 */
export interface CreateAttributeLabelRequest {
  /**
   * 应用ID，获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 标签名
   */
  AttrName: string
  /**
   * 标签值
   */
  Labels: Array<AttributeLabel>
  /**
   * 标签标识（不生效，无需填写） 已作废
   */
  AttrKey?: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * ListApp返回参数结构体
 */
export interface ListAppResponse {
  /**
   * 数量
   */
  Total?: string
  /**
   * 应用列表
   */
  List?: Array<AppInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务流程参数信息
 */
export interface ValueInfo {
  /**
   * 值ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 值类型：0:未知或者空, 1:string, 2:int, 3:float, 4:bool, 5:array(字符串数组), 6: object_array(结构体数组), 7: object(结构体)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueType?: number
  /**
   * string
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueStr?: string
  /**
   * int（避免精度丢失使用字符串返回）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueInt?: string
  /**
   * float
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueFloat?: number
  /**
   * bool
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueBool?: boolean
  /**
   * array
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueStrArray?: Array<string>
}

/**
 * 发布拒答
 */
export interface RejectedQuestion {
  /**
   * 拒答问题ID


注意：此字段可能返回 null，表示取不到有效值。
   */
  RejectedBizId?: string
  /**
   * 被拒答的问题

注意：此字段可能返回 null，表示取不到有效值。
   */
  Question?: string
  /**
   * 发布状态(1 待发布 2 发布中 3 已发布 4 发布失败)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusDesc?: string
  /**
   * 更新时间, 秒级时间戳

注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 是否允许编辑

注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAllowEdit?: boolean
  /**
   * 是否允许删除

注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAllowDelete?: boolean
  /**
   * 操作人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
}

/**
 * ExportQAList请求参数结构体
 */
export interface ExportQAListRequest {
  /**
   * 应用ID
若要操作共享知识库，传KnowledgeBizId
   */
  BotBizId: string
  /**
   * QA业务ID
   */
  QaBizIds: Array<string>
  /**
   * 查询参数
Filters.pageNumber范围是>0,0<Filters.pageSize<=200
Filters.query用于内容检索，模糊匹配
Filters.AcceptStatus默认值是0，表示不筛选，返回所有状态
Filters.ReleaseStatus默认值是0，表示不筛选，返回所有状态
Filters.Source默认值是0，表示不筛选，返回所有来源。表示来源(1 文档生成 2 批量导入 3 手动添加)。
Filter.QueryType默认值是"filename"，表示查询类型。
ShowCurrCate表示，是否只展示当前分类的数据 0不是，1是
   */
  Filters?: QAQuery
}

/**
 * 执行过程信息记录
 */
export interface Procedure {
  /**
   * 执行过程英语名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 中文名, 用于展示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 状态常量: 使用中: processing, 成功: success, 失败: failed
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 消耗 token 数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
  /**
   * 调试信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Debugging?: ProcedureDebugging
  /**
   * 计费资源状态，1：可用，2：不可用
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceStatus?: number
  /**
   * 输入消耗 token 数
   */
  InputCount?: number
  /**
   * 输出消耗 token 数
   */
  OutputCount?: number
}

/**
 * CreateRelease返回参数结构体
 */
export interface CreateReleaseResponse {
  /**
   * 发布ID
   */
  ReleaseBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用使用知识库容量详情
 */
export interface KnowledgeDetail {
  /**
   * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppName?: string
  /**
   * 已用字符数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedCharSize?: string
  /**
   * 使用占比
注意：此字段可能返回 null，表示取不到有效值。
   */
  Proportion?: number
  /**
   * 超量字符数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExceedCharSize?: string
  /**
   * 废弃
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSharedKnowledge?: boolean
  /**
   * 知识库类型:0默认1共享
   */
  KnowledgeType?: number
}

/**
 * 文件信息内容
 */
export interface FileInfoContent {
  /**
   * 实时文档解析接口返回的 DocBizId
   */
  DocBizId?: number
  /**
   * 文件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileType?: string
  /**
   * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize?: number
  /**
   * 文件 URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileUrl?: string
}

/**
 * GenerateQA请求参数结构体
 */
export interface GenerateQARequest {
  /**
   * 应用ID,获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizIds: Array<string>
}

/**
 * ListReferShareKnowledge请求参数结构体
 */
export interface ListReferShareKnowledgeRequest {
  /**
   * 应用业务id
   */
  AppBizId: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * ListAttributeLabel请求参数结构体
 */
export interface ListAttributeLabelRequest {
  /**
   * 应用ID，获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 页码，取值范围：大于0
   */
  PageNumber: number
  /**
   * 每页数量，取值范围：大于0
   */
  PageSize: number
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 查询内容，同时匹配标签内容和标签值内容
   */
  Query?: string
  /**
   * 每个标签同步拉取的标签值数量。即在展示标签列表时，为每一个标签加载多少个具体的标签值。
   */
  LabelSize?: number
}

/**
 * Agent输出配置
 */
export interface AgentOutputConfig {
  /**
   * 输出类型，1-文本 2-json 3-widget
   */
  OutputType?: number
  /**
   * Json结构化输出参数列表
   */
  StructuredOutputParams?: Array<ParameterConfig>
  /**
   * widget id
   */
  WidgetId?: string
}

/**
 * Agent中的参考来源
 */
export interface AgentReference {
  /**
   * 来源文档ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocId?: string
  /**
   * id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 文档业务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocBizId?: string
  /**
   * 文档名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocName?: string
  /**
   * 问答业务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  QaBizId?: string
  /**
   * 搜索引擎索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
  /**
   * 标题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 知识库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeName?: string
  /**
   * 知识库标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeBizId?: string
}

/**
 * DeleteDoc返回参数结构体
 */
export interface DeleteDocResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSegments返回参数结构体
 */
export interface DescribeSegmentsResponse {
  /**
   * 片段列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<DocSegment>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UploadAttributeLabel请求参数结构体
 */
export interface UploadAttributeLabelRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 文件名
   */
  FileName: string
  /**
   * cos路径
   */
  CosUrl: string
  /**
   * x-cos-hash-crc64ecma 头部中的 CRC64编码进行校验上传到云端的文件和本地文件的一致性
   */
  CosHash: string
  /**
   * 文件大小
   */
  Size: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * DescribeAppAgentList请求参数结构体
 */
export interface DescribeAppAgentListRequest {
  /**
   * 应用ID
   */
  AppBizId?: string
}

/**
 * CreateQA返回参数结构体
 */
export interface CreateQAResponse {
  /**
   * 问答ID
   */
  QaBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 背景图相关配置
 */
export interface BackgroundImageConfig {
  /**
   * 横图(pc)
   */
  LandscapeImageUrl?: string
  /**
   * 原始图
   */
  OriginalImageUrl?: string
  /**
   * 长图(手机)
   */
  PortraitImageUrl?: string
  /**
   * 主题色
   */
  ThemeColor?: string
  /**
   * 亮度值
   */
  Brightness?: number
}

/**
 * DescribeReleaseInfo返回参数结构体
 */
export interface DescribeReleaseInfoResponse {
  /**
   * 最后发布时间
   */
  LastTime?: string
  /**
   * 发布状态 ， 1-待发布 , 2-发布中 , 3-发布成功 , 4-发布失败 , 5-审核中 , 6-审核成功 , 7-审核失败 , 8-发布成功回调处理中 , 9-发布暂停 , 10-申诉审核中 , 11-申诉审核通过 , 12-申诉审核不通过
   */
  Status?: number
  /**
   * 是否编辑过, 当为true的时候表示可以发布
   */
  IsUpdated?: boolean
  /**
   * 失败原因

   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRejectedQuestion请求参数结构体
 */
export interface ModifyRejectedQuestionRequest {
  /**
   * 应用ID, 获取方法参看如何获取 [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 拒答问题


   */
  Question: string
  /**
   * 拒答问题来源的数据源唯一id, 通过调用ListRejectedQuestion接口获取



   */
  RejectedBizId: string
}

/**
 * DescribeWorkflowRun返回参数结构体
 */
export interface DescribeWorkflowRunResponse {
  /**
   * 工作流运行实例详情
   */
  WorkflowRun?: WorkflowRunDetail
  /**
   * 节点列表
   */
  NodeRuns?: Array<NodeRunBase>
  /**
   * 子工作流对应的NodePath
   */
  SubWorkflowNodePath?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 选项卡索引
 */
export interface OptionCardIndex {
  /**
   * 唯一标识
   */
  RecordId?: string
  /**
   * 选项卡索引
   */
  Index?: number
}

/**
 * ListReleaseDocPreview请求参数结构体
 */
export interface ListReleaseDocPreviewRequest {
  /**
   * 应用ID（获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)）
   */
  BotBizId: string
  /**
   * 页码（必须大于0）
   */
  PageNumber: number
  /**
   * 每页数量（取值范围为1-200）
   */
  PageSize: number
  /**
   * 查询内容关键字，用于模糊查询，若未提供该参数，默认为查询全部。
   */
  Query?: string
  /**
   * 发布单ID（可以通过[ListRelease](https://cloud.tencent.com/document/product/1759/105077)获得）
   */
  ReleaseBizId?: string
  /**
   * 开始时间。Unix 时间戳，单位是秒，默认为空。
   */
  StartTime?: string
  /**
   * 结束时间。Unix 时间戳，单位是秒，默认为空。
   */
  EndTime?: string
  /**
   * 状态(1新增2修改3删除)，其和ReleaseStatus的区别为： Actions表示的是对数据/内容的操作状态，ReleaseStatus表示数据 / 内容本身的发布状态
   */
  Actions?: Array<number | bigint>
}

/**
 * 应用配置MCP插件header信息
 */
export interface AgentPluginHeader {
  /**
   * 参数名称
   */
  ParamName?: string
  /**
   * 参数值
   */
  ParamValue?: string
  /**
   * header参数配置是否隐藏不可见
   */
  GlobalHidden?: boolean
  /**
   * 输入的值
   */
  Input?: AgentInput
  /**
   * 参数是否可以为空
   */
  IsRequired?: boolean
}

/**
 * DescribeStorageCredential请求参数结构体
 */
export interface DescribeStorageCredentialRequest {
  /**
   * 应用ID，参数非必填不代表不需要填写，下面不同的参数组合会获取到不同的权限，具体请参考 https://cloud.tencent.com/document/product/1759/116238
   */
  BotBizId?: string
  /**
   * 文件类型,正常的文件名类型后缀，例如 xlsx、pdf、 docx、png 等
   */
  FileType?: string
  /**
   * IsPublic用于上传文件或图片时选择场景，当上传对话端图片时IsPublic为true，上传文件（包括文档库文件/图片等和对话端文件）时IsPublic为false

   */
  IsPublic?: boolean
  /**
   * 存储类型: offline:离线文件，realtime:实时文件；为空默认为offline
   */
  TypeKey?: string
}

/**
 * 知识库检索策略
 */
export interface SearchStrategy {
  /**
   * 检索策略类型 0:混合检索，1：语义检索
注意：此字段可能返回 null，表示取不到有效值。
   */
  StrategyType?: number
  /**
   * Excel检索增强开关, false关闭，true打开
注意：此字段可能返回 null，表示取不到有效值。
   */
  TableEnhancement?: boolean
  /**
   * 向量模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EmbeddingModel?: string
  /**
   * 结果重排序开关， on打开，off关闭
注意：此字段可能返回 null，表示取不到有效值。
   */
  RerankModelSwitch?: string
  /**
   * 结果重排序模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  RerankModel?: string
  /**
   * NL2SQL模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  NatureLanguageToSqlModelConfig?: NL2SQLModelConfig
}

/**
 * Widget输出参数配置
 */
export interface OutputWidgetConfig {
  /**
   * widget id
   */
  WidgetId?: string
  /**
   * widget名字
   */
  WidgetName?: string
  /**
   * 展示结果
   */
  WidgetParam?: Array<WidgetParam>
}

/**
 * ListRelease返回参数结构体
 */
export interface ListReleaseResponse {
  /**
   * 发布列表数量
   */
  Total?: string
  /**
   * 发布列表
   */
  List?: Array<ListReleaseItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListModel返回参数结构体
 */
export interface ListModelResponse {
  /**
   * 模型列表
   */
  List?: Array<ModelInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 文档列表筛选标识位
 */
export interface DocFilterFlag {
  /**
   * 标识位
   */
  Flag?: string
  /**
   * 标识值
   */
  Value?: boolean
}

/**
 * CreateVar返回参数结构体
 */
export interface CreateVarResponse {
  /**
   * 变量ID
   */
  VarId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateQACate请求参数结构体
 */
export interface CreateQACateRequest {
  /**
   * 应用ID
若要操作共享知识库，传KnowledgeBizId
   */
  BotBizId: string
  /**
   * 父级业务ID，创建顶级分类时传字符串"0"
   */
  ParentBizId: string
  /**
   * 创建的分类名称
   */
  Name: string
}

/**
 * 共享知识库配置
 */
export interface ShareKnowledgeBase {
  /**
   * 共享知识库ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeBizId?: string
  /**
   * 检索范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchRange?: SearchRange
  /**
   * 知识库模型设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeModelConfig?: KnowledgeModelConfig
  /**
   * 检索策略配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchStrategy?: SearchStrategy
  /**
   * 检索配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Search?: Array<KnowledgeQaSearch>
  /**
   * // 问答-回复灵活度 1：已采纳答案直接回复 2：已采纳润色后回复
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplyFlexibility?: number
  /**
   * 共享知识库名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeName?: string
}

/**
 * 多轮历史信息
 */
export interface HistorySummary {
  /**
   * 助手
注意：此字段可能返回 null，表示取不到有效值。
   */
  Assistant?: string
  /**
   * 用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: string
}

/**
 * DescribeSearchStatsGraph请求参数结构体
 */
export interface DescribeSearchStatsGraphRequest {
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * uin列表
   */
  UinAccount?: Array<string>
  /**
   * 子业务类型
   */
  SubBizType?: string
  /**
   * 模型标识
   */
  ModelName?: string
  /**
   * 开始时间戳, 单位为秒(废弃)
   */
  StartTime?: string
  /**
   * 结束时间戳, 单位为秒(废弃)
   */
  EndTime?: string
  /**
   * 应用id列表
   */
  AppBizIds?: Array<string>
  /**
   * 空间id
   */
  SpaceId?: string
  /**
   * 开始时间戳, 单位为秒
   */
  StatStartTime?: number
  /**
   * 结束时间戳, 单位为秒
   */
  StatEndTime?: number
}

/**
 * RateMsgRecord返回参数结构体
 */
export interface RateMsgRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRefer请求参数结构体
 */
export interface DescribeReferRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 引用ID
   */
  ReferBizIds: Array<string>
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * 问答知识库工作流配置
 */
export interface KnowledgeWorkflow {
  /**
   * 是否启用工作流
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEnabled?: boolean
  /**
   * 是否启用PDL
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsePdl?: boolean
}

/**
 * ReferShareKnowledge请求参数结构体
 */
export interface ReferShareKnowledgeRequest {
  /**
   * 应用业务id
   */
  AppBizId: string
  /**
   * 共享知识库业务id列表
   */
  KnowledgeBizId: Array<string>
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * GetAppKnowledgeCount请求参数结构体
 */
export interface GetAppKnowledgeCountRequest {
  /**
   * 类型：doc-文档；qa-问答对
   */
  Type: string
  /**
   * 应用ID
   */
  AppBizId: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * CreateWorkflowRun返回参数结构体
 */
export interface CreateWorkflowRunResponse {
  /**
   * 应用ID
   */
  AppBizId?: string
  /**
   * 工作流运行实例的ID
   */
  WorkflowRunId?: string
  /**
   * 运行环境。0: 测试环境； 1: 正式环境
   */
  RunEnv?: number
  /**
   * 用户输入的内容
   */
  Query?: string
  /**
   * API参数配置
   */
  CustomVariables?: Array<CustomVariable>
  /**
   * 创建时间（毫秒时间戳）
   */
  CreateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAnswerTypeDataCount请求参数结构体
 */
export interface GetAnswerTypeDataCountRequest {
  /**
   * 开始日期
   */
  StartTime: number
  /**
   * 结束日期
   */
  EndTime: number
  /**
   * 应用id
   */
  AppBizId?: Array<string>
  /**
   * 消息来源(1、分享用户端  2、对话API  3、对话测试  4、应用评测)
   */
  Type?: number
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * 问答详情数据
 */
export interface ListQaItem {
  /**
   * 问答ID
   */
  QaBizId?: string
  /**
   * 问题
   */
  Question?: string
  /**
   * 答案
   */
  Answer?: string
  /**
   * 来源
   */
  Source?: number
  /**
   * 来源描述
   */
  SourceDesc?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 状态描述
   */
  StatusDesc?: string
  /**
   * 文档ID
   */
  DocBizId?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 是否允许编辑
   */
  IsAllowEdit?: boolean
  /**
   * 是否允许删除
   */
  IsAllowDelete?: boolean
  /**
   * 是否允许校验
   */
  IsAllowAccept?: boolean
  /**
   * 文档名称
   */
  FileName?: string
  /**
   * 文档类型
   */
  FileType?: string
  /**
   * 问答字符数
   */
  QaCharSize?: string
  /**
   * 有效开始时间，unix时间戳
   */
  ExpireStart?: string
  /**
   * 有效结束时间，unix时间戳，0代表永久有效
   */
  ExpireEnd?: string
  /**
   * 属性标签适用范围 1：全部，2：按条件
   */
  AttrRange?: number
  /**
   * 属性标签
   */
  AttrLabels?: Array<AttrLabel>
  /**
   * 相似问个数
   */
  SimilarQuestionNum?: number
  /**
   * 返回问答关联的相似问,联动搜索,仅展示一条
   */
  SimilarQuestionTips?: string
  /**
   * 问答是否停用，false:未停用，ture:已停用
   */
  IsDisabled?: boolean
  /**
   * 员工名称
   */
  StaffName?: string
  /**
   * 问答生效域: 1-停用；2-仅开发域；3-仅发布域；4-全域
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableScope?: number
  /**
   * 问答关联的文档生效域
   */
  DocEnableScope?: number
}

/**
 * ListUnsatisfiedReply返回参数结构体
 */
export interface ListUnsatisfiedReplyResponse {
  /**
   * 总数
   */
  Total?: string
  /**
   * 不满意回复列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<UnsatisfiedReply>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 对话端Widget结构
 */
export interface Widget {
  /**
   * Widget配置ID

   */
  WidgetId?: string
  /**
   * Widget实例ID
   */
  WidgetRunId?: string
  /**
   * Widget状态数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: string
  /**
   * Widget位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position?: number
  /**
   * Base64编码的Widget信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  EncodedWidget?: string
  /**
   * 用户最近一次提交的payload
注意：此字段可能返回 null，表示取不到有效值。
   */
  Payload?: string
}

/**
 * CreateWorkflowRun请求参数结构体
 */
export interface CreateWorkflowRunRequest {
  /**
   * 应用ID, 获取方法参看如何获取 [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  AppBizId: string
  /**
   * 运行环境。0: 测试环境； 1: 正式环境
   */
  RunEnv?: number
  /**
   * 用户输入的内容
   */
  Query?: string
  /**
   * API参数配置
   */
  CustomVariables?: Array<CustomVariable>
}

/**
 * DescribeQA请求参数结构体
 */
export interface DescribeQARequest {
  /**
   * QA业务ID

   */
  QaBizId: string
  /**
   * 应用ID
   */
  BotBizId: string
}

/**
 * Widget参数配置
 */
export interface WidgetParam {
  /**
   * 参数名称
   */
  Name?: string
  /**
   * 参数类型
   */
  Type?: number
  /**
   * 子参数
   */
  SubParams?: Array<WidgetParam>
  /**
   * 默认值, Input未指定时，使用该值
   */
  DefaultValue?: string
  /**
   * 输入的值
   */
  Input?: AgentInput
}

/**
 * 联网检索内容参考详情
 */
export interface WebSearchReference {
  /**
   * 网页URL
   */
  Url?: string
}

/**
 * ListQA请求参数结构体
 */
export interface ListQARequest {
  /**
   * 应用ID
若要操作共享知识库，传KnowledgeBizId
   */
  BotBizId: string
  /**
   * 页码（取值范围>0）
   */
  PageNumber: number
  /**
   * 每页大小(取值范围1-200)
   */
  PageSize: number
  /**
   * 查询问题

输入特定标识 lke:system:untagged  将查询所有未关联标签的问答
   */
  Query?: string
  /**
   * 校验状态(1未校验2采纳3不采纳)
如果不填默认值为空数组，表示不筛选，返回所有状态
   */
  AcceptStatus?: Array<number | bigint>
  /**
   * 发布状态(2待发布 3发布中 4已发布 7审核中 8审核失败 9人工申述中 11人工申述失败 12已过期 13超量失效 14超量失效恢复)
如果不填默认值为空数组，表示不筛选返回所有状态
   */
  ReleaseStatus?: Array<number | bigint>
  /**
   * 文档ID
   */
  DocBizId?: string
  /**
   * 来源(1 文档生成 2 批量导入 3 手动添加)
不填默认值为0，表示不过滤，返回所有状态
   */
  Source?: number
  /**
   * 查询答案
   */
  QueryAnswer?: string
  /**
   * 分类ID
   */
  CateBizId?: string
  /**
   * QA业务ID列表
   */
  QaBizIds?: Array<string>
  /**
   * 查询类型 filename 名称、 attribute 标签
如果不填默认值为"filename"
   */
  QueryType?: string
  /**
   * 是否只展示当前分类的数据 0不是，1是
   */
  ShowCurrCate?: number
  /**
   * // 知识生效作用域枚举值 enum RetrievalEnableScope {   ENABLE_SCOPE_TYPE_UNKNOWN = 0; // 未知类型   ENABLE_SCOPE_TYPE_NONE = 1; // 停用   ENABLE_SCOPE_TYPE_DEV = 2; // 仅开发域   ENABLE_SCOPE_TYPE_RELEASE = 3; // 仅发布域   ENABLE_SCOPE_TYPE_ALL = 4; // 全域 }  问答生效域: 1-停用；2-仅开发域；3-仅发布域；4-全域
   */
  EnableScope?: number
}

/**
 * 知识库容量饼图详情
 */
export interface KnowledgeCapacityPieGraphDetail {
  /**
   * 当前应用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppName?: string
  /**
   * 当前应用使用的字符数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedCharSize?: string
  /**
   * 当前应用对于总用量的占比
注意：此字段可能返回 null，表示取不到有效值。
   */
  Proportion?: number
  /**
   * 知识库类型:0默认1共享
   */
  KnowledgeType?: number
}

/**
 * 模型参数范围
 */
export interface ModelParameter {
  /**
   * 超参名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 类型
   */
  Type?: string
  /**
   * 默认值
   */
  DefaultValue?: string
  /**
   * 枚举值
   */
  EnumValues?: Array<string>
  /**
   * 默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Default?: number
  /**
   * 最小值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Min?: number
  /**
   * 最大值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Max?: number
}

/**
 * 请求的API信息
 */
export interface InvokeAPI {
  /**
   * 请求方法，如GET/POST等
注意：此字段可能返回 null，表示取不到有效值。
   */
  Method?: string
  /**
   * 请求地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * header参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  HeaderValues?: Array<StrValue>
  /**
   * 入参Query
注意：此字段可能返回 null，表示取不到有效值。
   */
  QueryValues?: Array<StrValue>
  /**
   * Post请求的原始数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestPostBody?: string
  /**
   * 返回的原始数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResponseBody?: string
  /**
   * 出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResponseValues?: Array<ValueInfo>
  /**
   * 异常信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailMessage?: string
}

/**
 * mcp的服务信息
 */
export interface AgentMCPServerInfo {
  /**
   * mcp server URL地址
   */
  McpServerUrl?: string
  /**
   * mcp server header信息
   */
  Headers?: Array<AgentPluginHeader>
  /**
   * 超时时间，单位秒
   */
  Timeout?: number
  /**
   * sse服务超时时间，单位秒
   */
  SseReadTimeout?: number
  /**
   * mcp server query信息
   */
  Query?: Array<AgentPluginQuery>
}

/**
 * ModifyApp返回参数结构体
 */
export interface ModifyAppResponse {
  /**
   * 应用App
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppBizId?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IgnoreUnsatisfiedReply请求参数结构体
 */
export interface IgnoreUnsatisfiedReplyRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 不满意回复ID
   */
  ReplyBizIds: Array<string>
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * ListReleaseConfigPreview返回参数结构体
 */
export interface ListReleaseConfigPreviewResponse {
  /**
   * 数量
   */
  Total?: string
  /**
   * 配置项列表
   */
  List?: Array<ReleaseConfigs>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRelease返回参数结构体
 */
export interface DescribeReleaseResponse {
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 发布描述
   */
  Description?: string
  /**
   * 发布状态(1待发布 2发布中 3发布成功 4发布失败 5发布中(审核中) 6发布中(审核完成) 7发布失败(审核失败) 9发布暂停)
   */
  Status?: number
  /**
   * 发布状态描述
   */
  StatusDesc?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签过滤器
 */
export interface AgentKnowledgeFilterTag {
  /**
   * 标签之间的关系;0:AND, 1:OR
   */
  Operator?: number
  /**
   * 标签
   */
  Labels?: Array<AgentKnowledgeAttrLabel>
}

/**
 * 自定义变量和标签关系数据
 */
export interface ApiVarAttrInfo {
  /**
   * 自定义变量id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiVarId?: string
  /**
   * 标签id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrBizId?: string
}

/**
 * Agent的思考过程
 */
export interface AgentThought {
  /**
   * 会话 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * 请求 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestId?: string
  /**
   * 对应哪条会话, 会话 ID, 用于回答的消息存储使用, 可提前生成, 保存消息时使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordId?: string
  /**
   * 当前请求执行时间, 单位 ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  Elapsed?: number
  /**
   * 当前是否为工作流
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsWorkflow?: boolean
  /**
   * 如果当前是工作流，工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 具体思考过程详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Procedures?: Array<AgentProcedure>
  /**
   * TraceId
注意：此字段可能返回 null，表示取不到有效值。
   */
  TraceId?: string
  /**
   * 文件信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Files?: Array<FileInfo>
}

/**
 * CheckAttributeLabelRefer请求参数结构体
 */
export interface CheckAttributeLabelReferRequest {
  /**
   * 应用ID,获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 属性标签ID
   */
  LabelBizId?: string
  /**
   * 标签ID
   */
  AttributeBizId?: Array<string>
}

/**
 * Agent 知识库检索插件支持多知识库搜索
 */
export interface AgentKnowledge {
  /**
   * 知识库id
   */
  KnowledgeBizId?: string
  /**
   * 0-应用内知识库
1-共享知识库
   */
  KnowledgeType?: number
  /**
   * 0-全部知识
1-按文档和问答
2-按标签
   */
  Filter?: number
  /**
   * 文档id
   */
  DocBizIds?: Array<string>
  /**
   * true:包含所有问答
false:不包含问答
   */
  AllQa?: boolean
  /**
   * 文档标签过滤器
   */
  Tag?: AgentKnowledgeFilterTag
}

/**
 * UpdateVar返回参数结构体
 */
export interface UpdateVarResponse {
  /**
   * 变量ID
   */
  VarId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListWorkflowRuns请求参数结构体
 */
export interface ListWorkflowRunsRequest {
  /**
   * 应用ID, 获取方法参看如何获取 [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  AppBizId: string
  /**
   * 每页数量(取值范围1-200)
   */
  PageSize: number
  /**
   * 运行环境。0: 测试环境； 1: 正式环境
   */
  RunEnv?: number
  /**
   * 页码(必须大于0)
   */
  Page?: number
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * ListReleaseDocPreview返回参数结构体
 */
export interface ListReleaseDocPreviewResponse {
  /**
   * 文档数量
   */
  Total?: string
  /**
   * 文档列表
   */
  List?: Array<ReleaseDoc>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务流程调试信息
 */
export interface TaskFlowSummary {
  /**
   * 任务流程名
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntentName?: string
  /**
   * 实体列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedSlotValues?: Array<ValueInfo>
  /**
   * 节点列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunNodes?: Array<RunNodeInfo>
  /**
   * 意图判断
注意：此字段可能返回 null，表示取不到有效值。
   */
  Purposes?: Array<string>
}

/**
 * 重复文档处理方式
 */
export interface DuplicateFileHandle {
  /**
   * 重复文档判断方式，1：按文档内容，即cos_hash字段判断是否重复
   */
  CheckType?: number
  /**
   * 重复文档处理方式，1：返回报错，2：跳过，返回重复的文档业务ID
   */
  HandleType?: number
}

/**
 * 标签值引用的工作流详情
 */
export interface AttributeLabelRefByWorkflow {
  /**
   * 标签值id
   */
  AttributeLabelBizId?: string
  /**
   * 标签值引用的工作流列表
   */
  WorkflowList?: Array<WorkflowRef>
}

/**
 * RetryDocAudit请求参数结构体
 */
export interface RetryDocAuditRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizId: string
}

/**
 * ExportUnsatisfiedReply请求参数结构体
 */
export interface ExportUnsatisfiedReplyRequest {
  /**
   * 应用ID
若要操作共享知识库，传KnowledgeBizId
   */
  BotBizId: string
  /**
   * 勾选导出不满意回复的ID列表
   */
  ReplyBizIds: Array<string>
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 检索过滤器
   */
  Filters?: Filters
}

/**
 * 文件收集信息
 */
export interface FileCollection {
  /**
   * 最大上传文件的数量
   */
  MaxFileCount: number
  /**
   * 支持的上传文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportedFileTypes: Array<string>
}

/**
 * 当前执行的 token 统计信息
 */
export interface TokenStat {
  /**
   * 会话 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * 请求 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequestId?: string
  /**
   * 对应哪条会话, 会话 ID, 用于回答的消息存储使用, 可提前生成, 保存消息时使用
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordId?: string
  /**
   * token 已使用数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedCount?: number
  /**
   * 免费 token 数
注意：此字段可能返回 null，表示取不到有效值。
   */
  FreeCount?: number
  /**
   * 订单总 token 数
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrderCount?: number
  /**
   * 当前执行状态汇总, 常量: 使用中: processing, 成功: success, 失败: failed
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusSummary?: string
  /**
   * 当前执行状态汇总后中文展示
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusSummaryTitle?: string
  /**
   * 当前请求执行时间, 单位 ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  Elapsed?: number
  /**
   * 当前请求消耗 token 数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenCount?: number
  /**
   * 执行过程信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Procedures?: Array<Procedure>
  /**
   * 执行过程信息TraceId
注意：此字段可能返回 null，表示取不到有效值。
   */
  TraceId?: string
}

/**
 * 数智人配置
 */
export interface DigitalHumanConfig {
  /**
   * 数智人资产key
   */
  AssetKey?: string
  /**
   * 数智人名称
   */
  Name?: string
  /**
   * 图像
   */
  Avatar?: string
  /**
   * 预览图
   */
  PreviewUrl?: string
}

/**
 * ExportUnsatisfiedReply返回参数结构体
 */
export interface ExportUnsatisfiedReplyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRefer返回参数结构体
 */
export interface DescribeReferResponse {
  /**
   * 引用列表
   */
  List?: Array<ReferDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * WorkflowRef详情
 */
export interface WorkflowRef {
  /**
   * 任务流ID
   */
  WorkflowId?: string
  /**
   * 任务流名称
   */
  WorkflowName?: string
  /**
   * 任务流描述
   */
  WorkflowDesc?: string
  /**
   * 应用ID
   */
  AppBizId?: string
  /**
   * 更新时间
   */
  UpdateTime?: number
}

/**
 * ListDocCate返回参数结构体
 */
export interface ListDocCateResponse {
  /**
   * 列表
   */
  List?: Array<CateInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 知识检索筛选范围
 */
export interface AgentKnowledgeFilter {
  /**
   * 知识检索筛选方式; 0: 全部知识; 1:按文档和问答; 2: 按标签
   */
  FilterType?: number
  /**
   * 文档和问答过滤器
   */
  DocAndAnswer?: AgentKnowledgeFilterDocAndAnswer
  /**
   * 标签过滤器
   */
  Tag?: AgentKnowledgeFilterTag
  /**
   * 知识库列表
   */
  KnowledgeList?: Array<AgentKnowledge>
  /**
   * 是否检索全部知识
   */
  AllKnowledge?: boolean
}

/**
 * 应用管理输出配置
 */
export interface KnowledgeQaOutput {
  /**
   * 输出方式 1：流式 2：非流式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Method?: number
  /**
   * 通用模型回复
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseGeneralKnowledge?: boolean
  /**
   * 未知回复语，300字符以内
注意：此字段可能返回 null，表示取不到有效值。
   */
  BareAnswer?: string
  /**
   * 是否展示问题澄清开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowQuestionClarify?: boolean
  /**
   * 是否打开问题澄清
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseQuestionClarify?: boolean
  /**
   * 问题澄清关键词列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuestionClarifyKeywords?: Array<string>
  /**
   * 是否打开推荐问题开关
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseRecommended?: boolean
  /**
   * 推荐问模式，0.结合知识库&对话历史推荐问题Prompt(默认) 1.仅结合知识库输出推荐问的prompt
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecommendedPromptMode?: number
  /**
   * 输入框按钮配置
   */
  InputBoxConfig?: InputBoxConfig
}

/**
 * 工作流运行实例的基本信息
 */
export interface WorkflowRunBase {
  /**
   * 运行环境。0: 测试环境； 1: 正式环境
   */
  RunEnv?: number
  /**
   * 应用ID
   */
  AppBizId?: string
  /**
   * 工作流运行实例的ID
   */
  WorkflowRunId?: string
  /**
   * 所属工作流ID
   */
  WorkflowId?: string
  /**
   * 名称
   */
  Name?: string
  /**
   * 运行状态。0: 排队中；1: 运行中；2: 运行成功；3: 运行失败； 4: 已取消
   */
  State?: number
  /**
   * 错误信息
   */
  FailMessage?: string
  /**
   * 消耗的token总数
   */
  TotalTokens?: number
  /**
   * 创建时间（毫秒时间戳）
   */
  CreateTime?: string
  /**
   * 开始时间（毫秒时间戳）
   */
  StartTime?: string
  /**
   * 结束时间（毫秒时间戳）
   */
  EndTime?: string
}

/**
 * 应用模型配置
 */
export interface AppModel {
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 模型描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc?: string
  /**
   * 上下文指代轮次
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContextLimit?: number
  /**
   * 模型别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  AliasName?: string
  /**
   * token余量
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenBalance?: number
  /**
   * 是否使用上下文指代轮次
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUseContext?: boolean
  /**
   * 上下文记忆轮数
注意：此字段可能返回 null，表示取不到有效值。
   */
  HistoryLimit?: number
  /**
   * 使用类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsageType?: string
  /**
   * 模型温度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Temperature?: string
  /**
   * 模型TopP
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopP?: string
  /**
   * 模型资源状态 1：资源可用；2：资源已用尽
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceStatus?: number
  /**
   * 模型参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelParams?: ModelParams
}

/**
 * 工作流运行节点信息
 */
export interface WorkflowRunNodeInfo {
  /**
   * 节点ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeId?: string
  /**
   * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeType?: number
  /**
   * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 输入
注意：此字段可能返回 null，表示取不到有效值。
   */
  Input?: string
  /**
   * 输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: string
  /**
   * 任务输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskOutput?: string
  /**
   * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailMessage?: string
  /**
   * 花费时长
注意：此字段可能返回 null，表示取不到有效值。
   */
  CostMilliSeconds?: number
  /**
   * 大模型输出信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatisticInfos?: Array<StatisticInfo>
  /**
   * 错误代码
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailCode?: string
}

/**
 * GetLikeDataCount请求参数结构体
 */
export interface GetLikeDataCountRequest {
  /**
   * 开始日期
   */
  StartTime: number
  /**
   * 结束日期
   */
  EndTime: number
  /**
   * 应用id
   */
  AppBizId?: Array<string>
  /**
   * 消息来源(1、分享用户端  2、对话API)
   */
  Type?: number
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * ListAttributeLabel返回参数结构体
 */
export interface ListAttributeLabelResponse {
  /**
   * 总数
   */
  Total?: string
  /**
   * 列表
   */
  List?: Array<AttrLabelDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyQAAttrRange请求参数结构体
 */
export interface ModifyQAAttrRangeRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 问答ID
   */
  QaBizIds: Array<string>
  /**
   * 属性标签适用范围 1：全部，2：按条件
   */
  AttrRange: number
  /**
   * 属性标签引用
   */
  AttrLabels: Array<AttrLabelRefer>
}

/**
 * 分类信息
 */
export interface CateInfo {
  /**
   * 分类ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CateBizId?: string
  /**
   * 分类名称

注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 分类下的Record（如文档、同义词等）数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 是否可新增

注意：此字段可能返回 null，表示取不到有效值。
   */
  CanAdd?: boolean
  /**
   * 是否可编辑

注意：此字段可能返回 null，表示取不到有效值。
   */
  CanEdit?: boolean
  /**
   * 是否可删除

注意：此字段可能返回 null，表示取不到有效值。
   */
  CanDelete?: boolean
  /**
   * 子分类
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<CateInfo>
  /**
   * 是否为叶子节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLeaf?: boolean
}

/**
 * 网页搜索内容
 */
export interface WebSearchContent {
  /**
   * 网页搜索结果，json格式的string
   */
  Content?: string
}

/**
 * DeleteRejectedQuestion返回参数结构体
 */
export interface DeleteRejectedQuestionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListRejectedQuestionPreview请求参数结构体
 */
export interface ListRejectedQuestionPreviewRequest {
  /**
   * 应用ID（获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)）
   */
  BotBizId: string
  /**
   * 页码（必须大于0）
   */
  PageNumber: number
  /**
   * 每页数量（取值范围为1-200）
   */
  PageSize: number
  /**
   * 查询内容关键字，用于模糊查询，若未提供该参数，默认为查询全部。
   */
  Query?: string
  /**
   * 发布单ID（可以通过[ListRelease](https://cloud.tencent.com/document/product/1759/105077)获得）
   */
  ReleaseBizId?: string
  /**
   * 状态(1新增2更新3删除)
   */
  Actions?: Array<number | bigint>
  /**
   * 开始时间。Unix 时间戳，单位是秒，默认为空。
   */
  StartTime?: string
  /**
   * 结束时间。Unix 时间戳，单位是秒，默认为空。
   */
  EndTime?: string
}

/**
 * ListSelectDoc请求参数结构体
 */
export interface ListSelectDocRequest {
  /**
   * 应用ID,获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 文档名称。可通过文档名称检索支持生成问答的文档，不支持xlsx、xls、csv格式
   */
  FileName?: string
  /**
   * 文档状态筛选。文档状态对应码为7 审核中、8 审核失败、10 待发布、11 发布中、12 已发布、13 学习中、14 学习失败 20 已过期。其中仅状态为10 待发布、12 已发布的文档支持生成问答（未填写时默认值为空数组）
   */
  Status?: Array<number | bigint>
}

/**
 * 工具高级设置
 */
export interface ToolAdvanceConfig {
  /**
   * 工具调用结果是否直接返回给用户
   */
  EnableDirectResultReturn?: boolean
  /**
   * 输出样式 1-文本 2-json 3-widget
   */
  OutputType?: number
  /**
   * 原始结构化JSON输出
   */
  RawStructuredOutput?: string
  /**
   * 自定义文本输出，多行展示
   */
  CustomTextOutputs?: string
  /**
   * Widget输出配置
   */
  OutputWidgetConfig?: OutputWidgetConfig
}

/**
 * 实时上传的文件信息
 */
export interface FileInfo {
  /**
   * 文件名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 文件大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize?: string
  /**
   * 文件的URL地址，COS地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileUrl?: string
  /**
   * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileType?: string
  /**
   * 解析后返回的DocID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocId?: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
}

/**
 * ModifyApp请求参数结构体
 */
export interface ModifyAppRequest {
  /**
   * 应用ID, 获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)。
   */
  AppBizId: string
  /**
   * 应用类型；"knowledge_qa" 知识问答应用（包含标准模式 单工作流 Multi-Agent 等模式）
   */
  AppType: string
  /**
   * 应用基础配置
   */
  BaseConfig: BaseConfig
  /**
   * 应用配置
   */
  AppConfig: AppConfig
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * 字符串KV信息
 */
export interface StrValue {
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * 用户手写输入
 */
export interface AgentInputUserInputValue {
  /**
   * 用户输入的值
   */
  Values?: Array<string>
}

/**
 * 参数配置列表
 */
export interface ParameterConfig {
  /**
   * 字段名称
   */
  Name?: string
  /**
   * 字段描述
   */
  Description?: string
  /**
   * 字段类型
   */
  Type?: number
  /**
   * 是否必填
   */
  IsRequired?: boolean
  /**
   * 子参数
   */
  SubParams?: Array<ParameterConfig>
  /**
   * OneOf类型的参数
   */
  OneOf?: Array<ParameterConfig>
  /**
   * AnyOf类型的参数
   */
  AnyOf?: Array<ParameterConfig>
}

/**
 * DeleteDocCate请求参数结构体
 */
export interface DeleteDocCateRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 分类业务ID
   */
  CateBizId: string
}

/**
 * 标签提取配置
 */
export interface ClassifyConfig {
  /**
   * 模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model?: AppModel
  /**
   * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<ClassifyLabel>
  /**
   * 欢迎语，200字符以内
注意：此字段可能返回 null，表示取不到有效值。
   */
  Greeting?: string
}

/**
 * DescribeConcurrencyUsage请求参数结构体
 */
export interface DescribeConcurrencyUsageRequest {
  /**
   * 模型标识
   */
  ModelName: string
  /**
   * 开始时间戳, 单位为秒(废弃)
   */
  StartTime?: string
  /**
   * 结束时间戳, 单位为秒(废弃)
   */
  EndTime?: string
  /**
   * 应用id列表
   */
  AppBizIds?: Array<string>
  /**
   * 空间id
   */
  SpaceId?: string
  /**
   * 开始时间戳, 单位为秒
   */
  StatStartTime?: number
  /**
   * 结束时间戳, 单位为秒
   */
  StatEndTime?: number
}

/**
 * ListQACate请求参数结构体
 */
export interface ListQACateRequest {
  /**
   * 应用ID
若要操作共享知识库，传KnowledgeBizId
   */
  BotBizId: string
  /**
   * 分类查询类型：0-全量查询整棵标签树，1-根据父节点BizId分页查询子节点，2-关键词检索所有匹配的分类链路
   */
  QueryType?: number
  /**
   * QueryType=1时，父节点分类ID
   */
  ParentCateBizId?: string
  /**
   * QueryType=1时，页码（从1开始）
   */
  PageNumber?: number
  /**
   * 每页数量（默认10）
   */
  PageSize?: number
  /**
   * QueryType=2时，搜索内容
   */
  Query?: string
}

/**
 * ListReleaseQAPreview请求参数结构体
 */
export interface ListReleaseQAPreviewRequest {
  /**
   * 应用ID（获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)）
   */
  BotBizId: string
  /**
   * 页码（必须大于0）
   */
  PageNumber: number
  /**
   * 每页数量（取值范围为1-200）
   */
  PageSize: number
  /**
   * 查询内容关键字，用于模糊查询，若未提供该参数，默认为查询全部。
   */
  Query?: string
  /**
   * 发布单ID（可以通过[ListRelease](https://cloud.tencent.com/document/product/1759/105077)获得）
   */
  ReleaseBizId?: string
  /**
   * 开始时间。Unix 时间戳，单位是秒，默认为空。
   */
  StartTime?: string
  /**
   * 结束时间。Unix 时间戳，单位是秒，默认为空。
   */
  EndTime?: string
  /**
   * 状态(1新增2修改3删除)，其和ReleaseStatus的区别为：Actions表示的是对数据/内容的操作状态，ReleaseStatus表示数据/内容本身的发布状态
   */
  Actions?: Array<number | bigint>
  /**
   * 发布状态(4发布成功5发布失败)。其和Actions的区别为：Actions表示的是对数据/内容的操作状态，ReleaseStatus表示数据/内容本身的发布状态
   */
  ReleaseStatus?: Array<number | bigint>
}

/**
 * DescribeApp返回参数结构体
 */
export interface DescribeAppResponse {
  /**
   * 应用 ID
   */
  AppBizId?: string
  /**
   * 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取
   */
  AppType?: string
  /**
   * 应用类型说明
   */
  AppTypeDesc?: string
  /**
   * 应用类型说明
   */
  BaseConfig?: BaseConfig
  /**
   * 应用配置
   */
  AppConfig?: AppConfig
  /**
   * 头像是否在申诉中
   */
  AvatarInAppeal?: boolean
  /**
   * 角色描述是否在申诉中
   */
  RoleInAppeal?: boolean
  /**
   * 名称是否在申诉中
   */
  NameInAppeal?: boolean
  /**
   * 欢迎语是否在申诉中
   */
  GreetingInAppeal?: boolean
  /**
   * 未知问题回复语是否在申诉中
   */
  BareAnswerInAppeal?: boolean
  /**
   * 应用appKey
   */
  AppKey?: string
  /**
   * 应用状态，1：未上线，2：运行中，3：停用
   */
  AppStatus?: number
  /**
   * 状态说明
   */
  AppStatusDesc?: string
  /**
   * 应用是否在复制中
   */
  IsCopying?: boolean
  /**
   * 智能体类型 dialogue 对话式智能体，wechat 公众号智能体
   */
  AgentType?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteApp请求参数结构体
 */
export interface DeleteAppRequest {
  /**
   * 应用ID
   */
  AppBizId: string
  /**
   * 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取
   */
  AppType: string
}

/**
 * GetVarList返回参数结构体
 */
export interface GetVarListResponse {
  /**
   * 变量总数
   */
  Total?: number
  /**
   * 变量信息列表
   */
  List?: Array<TaskFLowVar>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 工作流程调试信息
 */
export interface WorkFlowSummary {
  /**
   * 工作流ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowId?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 工作流运行ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowRunId?: string
  /**
   * 节点信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RunNodes?: Array<WorkflowRunNodeInfo>
  /**
   * 选项卡
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptionCards?: Array<string>
  /**
   * 多气泡的输出结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Outputs?: Array<string>
  /**
   * 工作流发布时间，unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowReleaseTime?: string
  /**
   * 中间消息
   */
  PendingMessages?: Array<string>
  /**
   * 选项卡索引
   */
  OptionCardIndex?: OptionCardIndex
  /**
   * 工作流多气泡输出
注意：此字段可能返回 null，表示取不到有效值。
   */
  Contents?: Array<Content>
}

/**
 * DescribeNodeRun返回参数结构体
 */
export interface DescribeNodeRunResponse {
  /**
   * 节点运行实例详情
   */
  NodeRun?: NodeRunDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyQA返回参数结构体
 */
export interface ModifyQAResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteQA返回参数结构体
 */
export interface DeleteQAResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 调试信息
 */
export interface ProcedureDebugging {
  /**
   * 检索query
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * 系统prompt
注意：此字段可能返回 null，表示取不到有效值。
   */
  System?: string
  /**
   * 多轮历史信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Histories?: Array<HistorySummary>
  /**
   * 检索知识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Knowledge?: Array<KnowledgeSummary>
  /**
   * 任务流程
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskFlow?: TaskFlowSummary
  /**
   * 工作流调试信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlow?: WorkFlowSummary
  /**
   * Agent调试信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Agent?: AgentDebugInfo
  /**
   * 自定义参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomVariables?: Array<string>
}

/**
 * GetMsgRecord请求参数结构体
 */
export interface GetMsgRecordRequest {
  /**
   * 接入类型， 5-API 访客，目前仅支持传5
   */
  Type: number
  /**
   * 数量,  数量需大于2, 最大1000
   */
  Count: number
  /**
   * 会话sessionid。
   */
  SessionId: string
  /**
   * 应用AppKey, 当Type=5[API访客]时, 该字段必填  :</br>  获取方式:</br>   1、应用发布后在应用页面[发布管理]-[调用信息]-[API管理]处获取</br>   2、参考 https://cloud.tencent.com/document/product/1759/109469 第二项
   */
  BotAppKey?: string
  /**
   * 场景, 体验: 1; 正式: 2 。

体验用于创建应用测试的时候使用，正式是应用发布后对外的时候使用
   */
  Scene?: number
  /**
   * 最后一条记录ID， 消息从后往前获取

MidRecordId与LastRecordId只能选择一个

LastRecordId 和MidRecordId都不填的时候，默认从最新的消息ID开始取。
   */
  LastRecordId?: string
  /**
   * 传该值，代表拉取该记录id的前后总共count条消息记录

MidRecordId与LastRecordId只能选择一个

LastRecordId 和MidRecordId都不填的时候，默认从最新的消息Id开始取

   */
  MidRecordId?: string
}

/**
 * 输入框配置
 */
export interface InputBoxConfig {
  /**
   * 输入框按钮，1：上传图片、2：上传文档，3：腾讯文档，4：联网搜索
   */
  InputBoxButtons?: Array<number | bigint>
}

/**
 * 发布配置项
 */
export interface ReleaseConfigs {
  /**
   * 配置项描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigItem?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Action?: number
  /**
   * 变更后的内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 变更前的内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastValue?: string
  /**
   * 变更内容(优先级展示content内容,content为空取value内容)
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
}

/**
 * DescribeSearchStatsGraph返回参数结构体
 */
export interface DescribeSearchStatsGraphResponse {
  /**
   * 统计结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<Stat>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyQAAttrRange返回参数结构体
 */
export interface ModifyQAAttrRangeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopDocParse返回参数结构体
 */
export interface StopDocParseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAppAgentList返回参数结构体
 */
export interface DescribeAppAgentListResponse {
  /**
   * 入口启动AgentID
   */
  StaringAgentId?: string
  /**
   * 应用Agent信息列表
   */
  Agents?: Array<Agent>
  /**
   * Agent转交高级设置
   */
  HandoffAdvancedSetting?: AgentHandoffAdvancedSetting
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeQA返回参数结构体
 */
export interface DescribeQAResponse {
  /**
   * QA业务ID

   */
  QaBizId?: string
  /**
   * 问题

   */
  Question?: string
  /**
   * 答案

   */
  Answer?: string
  /**
   * 自定义参数
   */
  CustomParam?: string
  /**
   * 来源 1-文档生成问答对  2-批量导入问答对  3-单条手动录入问答对
   */
  Source?: number
  /**
   * 来源描述

   */
  SourceDesc?: string
  /**
   * 更新时间

   */
  UpdateTime?: string
  /**
   * 状态 <br>1-未校验  2-未发布 3-发布中 4-已发布  5-发布失败 6-不采纳 7-审核中  8-审核失败  9-审核失败申诉后人工审核中  11-审核失败申诉后人工审核不通过  12-已过期  13-超量失效  14-超量失效恢复 19-学习中  20-学习失败
   */
  Status?: number
  /**
   * 状态描述

   */
  StatusDesc?: string
  /**
   * 分类ID

   */
  CateBizId?: string
  /**
   * 是否允许校验

   */
  IsAllowAccept?: boolean
  /**
   * 是否允许删除

   */
  IsAllowDelete?: boolean
  /**
   * 是否允许编辑

   */
  IsAllowEdit?: boolean
  /**
   * 文档id

   */
  DocBizId?: string
  /**
   * 文档名称

   */
  FileName?: string
  /**
   * 文档类型

   */
  FileType?: string
  /**
   * 分片ID

   */
  SegmentBizId?: string
  /**
   * 分片内容
   */
  PageContent?: string
  /**
   * 分片高亮内容
   */
  Highlights?: Array<Highlight>
  /**
   * 分片内容

   */
  OrgData?: string
  /**
   * 标签适用范围
   */
  AttrRange?: number
  /**
   * 标签
   */
  AttrLabels?: Array<AttrLabel>
  /**
   * 有效开始时间，unix时间戳
   */
  ExpireStart?: string
  /**
   * 有效结束时间，unix时间戳，0代表永久有效
   */
  ExpireEnd?: string
  /**
   * 相似问列表信息
   */
  SimilarQuestions?: Array<SimilarQuestion>
  /**
   * 问题和答案文本审核状态 1审核失败
   */
  QaAuditStatus?: number
  /**
   * 答案中的图片审核状态 1审核失败
   */
  PicAuditStatus?: number
  /**
   * 答案中的视频审核状态 1审核失败
   */
  VideoAuditStatus?: number
  /**
   * 问题描述
   */
  QuestionDesc?: string
  /**
   * 问答是否停用，false:未停用，true已停用
   */
  IsDisabled?: boolean
  /**
   * 从根节点开始的路径分类ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CateBizIdPath?: Array<string>
  /**
   * 从根节点开始的路径分类名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  CateNamePath?: Array<string>
  /**
   * 问答生效域: 1-不生效；2-仅开发域生效；3-仅发布域生效；4-开发域和发布域均生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableScope?: number
  /**
   * 问答关联的文档生效域:1-不生效；2-仅开发域生效；3-仅发布域生效；4-开发域和发布域均生效.
若问答未关联文档，则该字段值同问答生效域
   */
  DocEnableScope?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeReleaseInfo请求参数结构体
 */
export interface DescribeReleaseInfoRequest {
  /**
   * 应用ID
   */
  BotBizId: string
}

/**
 * ModifyQA请求参数结构体
 */
export interface ModifyQARequest {
  /**
   * 应用ID
若要操作共享知识库，传KnowledgeBizId
   */
  BotBizId: string
  /**
   * 问答ID
   */
  QaBizId: string
  /**
   * 问题
   */
  Question: string
  /**
   * 答案
   */
  Answer: string
  /**
   * 自定义参数
   */
  CustomParam?: string
  /**
   * 标签适用范围 1：全部，2：按条件
默认值：当没有属性标签，labelRefers为空时，默认值为1
有属性标签，labelRefers不为空，默认值为2
   */
  AttrRange?: number
  /**
   * 标签引用
   */
  AttrLabels?: Array<AttrLabelRefer>
  /**
   * 文档ID
   */
  DocBizId?: string
  /**
   * 分类ID
   */
  CateBizId?: string
  /**
   * 有效开始时间，单位是unix时间戳，默认值为0，代表永久有效
   */
  ExpireStart?: string
  /**
   * 有效结束时间，单位是unix时间戳，默认值为0，代表永久有效
   */
  ExpireEnd?: string
  /**
   * 相似问修改信息(相似问没有修改则不传)
   */
  SimilarQuestionModify?: SimilarQuestionModify
  /**
   * 问题描述
   */
  QuestionDesc?: string
  /**
   * 问答生效范围: 1-不生效；2-仅开发域生效；3-仅发布域生效；4-开发域和发布域均生效。若不传该字段，则不修改问答的生效范围。
   */
  EnableScope?: number
}

/**
 * 消息详情
 */
export interface MsgRecord {
  /**
   * 内容
   */
  Content?: string
  /**
   * 当前记录所对应的 Session ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * 记录ID
   */
  RecordId?: string
  /**
   * 关联记录ID
   */
  RelatedRecordId?: string
  /**
   * 是否来自自己
   */
  IsFromSelf?: boolean
  /**
   * 发送者名称
   */
  FromName?: string
  /**
   * 发送者头像
   */
  FromAvatar?: string
  /**
   * 时间戳
   */
  Timestamp?: string
  /**
   * 是否已读
   */
  HasRead?: boolean
  /**
   * 评价
   */
  Score?: number
  /**
   * 是否评分
   */
  CanRating?: boolean
  /**
   * 是否展示反馈按钮
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanFeedback?: boolean
  /**
   * 记录类型
   */
  Type?: number
  /**
   * 引用来源
   */
  References?: Array<MsgRecordReference>
  /**
   * 评价原因
   */
  Reasons?: Array<string>
  /**
   * 是否大模型
   */
  IsLlmGenerated?: boolean
  /**
   * 图片链接，可公有读
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageUrls?: Array<string>
  /**
   * 当次 token 统计信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenStat?: TokenStat
  /**
   * 回复方式
1:大模型直接回复;
2:保守回复, 未知问题回复;
3:拒答问题回复;
4:敏感回复;
5:问答对直接回复, 已采纳问答对优先回复;
6:欢迎语回复;
7:并发超限回复;
8:全局干预知识;
9:任务流程过程回复, 当历史记录中 task_flow.type = 0 时, 为大模型回复;
10:任务流程答案回复;
11:搜索引擎回复;
12:知识润色后回复;
13:图片理解回复;
14:实时文档回复;
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplyMethod?: number
  /**
   * 选项卡, 用于多轮对话
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptionCards?: Array<string>
  /**
   * 任务信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskFlow?: TaskFlowInfo
  /**
   * 用户传入的文件信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileInfos?: Array<FileInfo>
  /**
   * 参考来源引用位置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuoteInfos?: Array<QuoteInfo>
  /**
   * Agent的思考过程信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentThought?: AgentThought
  /**
   * 扩展信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraInfo?: ExtraInfo
  /**
   * 工作流信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkFlow?: WorkflowInfo
  /**
   * Widget信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Widgets?: Array<Widget>
  /**
   * Widget动作信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WidgetAction?: WidgetAction
}

/**
 * DeleteDocCate返回参数结构体
 */
export interface DeleteDocCateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportAttributeLabel返回参数结构体
 */
export interface ExportAttributeLabelResponse {
  /**
   * 导出任务ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用配置关联的工作流信息
 */
export interface KnowledgeQaWorkflowInfo {
  /**
   * 工作流ID
   */
  WorkflowId?: string
  /**
   * 工作流名称
   */
  WorkflowName?: string
  /**
   * 工作流描述
   */
  WorkflowDesc?: string
  /**
   * 工作流状态，发布状态(UNPUBLISHED: 待发布 PUBLISHING: 发布中 PUBLISHED: 已发布 FAIL:发布失败)
   */
  Status?: string
  /**
   * 工作流是否启用
   */
  IsEnable?: boolean
}

/**
 * DescribeWorkflowRun请求参数结构体
 */
export interface DescribeWorkflowRunRequest {
  /**
   * 应用ID, 获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)。
   */
  AppBizId: string
  /**
   * 工作流运行实例ID
   */
  WorkflowRunId: string
  /**
   * 指定的子工作流对应的NodePath。
格式：`[<node_id>[<index>].]*<node_id>[<index>]`
- 此路径用于定位一个具体的工作流实例（Workflow Run），可以是主工作流实例或某个子工作流节点产生的子实例。
- 路径由点号（.）分隔的节点标识符组成，每个节点标识符格式为 `节点ID[实例索引]`。
- **节点ID (node_id)**：子工作流所属的节点的ID。
- **实例索引 (index)**：“实例索引” 在工作流节点的时候为空，循环、批处理节点非空，从1开始。
示例：
- "" 或 不设置 -> 查询主工作流实例 (父工作流)
- "node_id_a" -> 查询由主工作流中工作流节点`node_id_a`对应的子工作流实例
- "node_id_a.node_id_b[1]" -> 查询工作流节点`node_id_a`对应的子工作流的循环节点node_id_b的第1轮循环的子工作流运行状态
   */
  SubWorkflowNodePath?: string
  /**
   * 是否需要返回工作流的流程图配置
   */
  IncludeWorkflowGraph?: boolean
}

/**
 * DescribeUnsatisfiedReplyContext请求参数结构体
 */
export interface DescribeUnsatisfiedReplyContextRequest {
  /**
   * 应用ID，获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 回复ID
   */
  ReplyBizId: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * ListRejectedQuestion返回参数结构体
 */
export interface ListRejectedQuestionResponse {
  /**
   * 总数
   */
  Total?: string
  /**
   * 拒答问题列表
   */
  List?: Array<RejectedQuestion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 检索配置
 */
export interface KnowledgeQaSearch {
  /**
   * 知识来源 doc：文档，qa：问答  taskflow：业务流程，search：搜索增强，database:数据库
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 问答-回复灵活度 1：已采纳答案直接回复 2：已采纳润色后回复
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplyFlexibility?: number
  /**
   * 搜索增强-搜索引擎状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseSearchEngine?: boolean
  /**
   * 是否显示搜索引擎检索状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowSearchEngine?: boolean
  /**
   * 知识来源，是否选择
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsEnabled?: boolean
  /**
   * 问答最大召回数量, 默认2，限制5
注意：此字段可能返回 null，表示取不到有效值。
   */
  QaTopN?: number
  /**
   * 文档最大召回数量, 默认3，限制5
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocTopN?: number
  /**
   * 检索置信度，针对文档和问答有效，最小0.01，最大0.99
注意：此字段可能返回 null，表示取不到有效值。
   */
  Confidence?: number
  /**
   * 资源状态 1：资源可用；2：资源已用尽
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceStatus?: number
}

/**
 * ListRelease请求参数结构体
 */
export interface ListReleaseRequest {
  /**
   * 应用ID（获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)）
   */
  BotBizId: string
  /**
   * 页码(必须大于0)
   */
  PageNumber: number
  /**
   * 每页数量（取值范围为1-200）
   */
  PageSize: number
}

/**
 * ListModel请求参数结构体
 */
export interface ListModelRequest {
  /**
   * 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取
   */
  AppType: string
  /**
   * 应用模式 standard:标准模式, agent: agent模式，single_workflow：单工作流模式
   */
  Pattern?: string
  /**
   * 模型类别 generate：生成模型，thought：思考模型,embedding模型，rerank：rerank模型
   */
  ModelCategory?: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
}

/**
 * 知识摘要输出配置
 */
export interface SummaryOutput {
  /**
   * 输出方式 1：流式 2：非流式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Method?: number
  /**
   * 输出要求 1：文本总结 2：自定义要求
注意：此字段可能返回 null，表示取不到有效值。
   */
  Requirement?: number
  /**
   * 自定义要求指令
注意：此字段可能返回 null，表示取不到有效值。
   */
  RequireCommand?: string
}

/**
 * ListDoc返回参数结构体
 */
export interface ListDocResponse {
  /**
   * 文档数量
   */
  Total?: string
  /**
   * 文档列表
   */
  List?: Array<ListDocItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApp返回参数结构体
 */
export interface CreateAppResponse {
  /**
   * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppBizId?: string
  /**
   * 判断账户应用列表权限是否是自定义的，用户交互提示
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsCustomList?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent 的定义
 */
export interface Agent {
  /**
   * AgentID
   */
  AgentId?: string
  /**
   * WorkflowID，非空则当前Agent从workflow转换而来
   */
  WorkflowId?: string
  /**
   * Agent名称，同一个应用内，Agent名称不能重复
   */
  Name?: string
  /**
   * Agent图标url
   */
  IconUrl?: string
  /**
   * Agent指令；当该Agent被调用时，将作为“系统提示词”使用，描述Agent应执行的操作和响应方式
   */
  Instructions?: string
  /**
   * 当Agent作为转交目标时的描述，用于让其他Agent的LLM理解其功能和转交时机
   */
  HandoffDescription?: string
  /**
   * Agent可转交的子AgentId列表
   */
  Handoffs?: Array<string>
  /**
   * Agent调用LLM时使用的模型配置
   */
  Model?: AgentModelInfo
  /**
   * Agent可使用的工具列表
   */
  Tools?: Array<AgentToolInfo>
  /**
   * Agent可使用的插件列表
   */
  Plugins?: Array<AgentPluginInfo>
  /**
   * 当前Agent是否是启动Agent
   */
  IsStartingAgent?: boolean
  /**
   * Agent类型; 0: 未指定类型; 1: 知识库检索Agent
   */
  AgentType?: number
  /**
   * 0 自由转交，1 计划与执行
   */
  AgentMode?: number
  /**
   * 高级设置
   */
  AdvancedConfig?: AgentAdvancedConfig
}

/**
 * CreateQA请求参数结构体
 */
export interface CreateQARequest {
  /**
   * 应用ID
若要操作共享知识库，传KnowledgeBizId
   */
  BotBizId: string
  /**
   * 问题
   */
  Question: string
  /**
   * 答案
   */
  Answer: string
  /**
   * 标签适用范围 1：全部，2：按条件
   */
  AttrRange: number
  /**
   * 自定义参数
   */
  CustomParam?: string
  /**
   * 标签引用
   */
  AttrLabels?: Array<AttrLabelRefer>
  /**
   * 文档ID
   */
  DocBizId?: string
  /**
   * 分类ID
   */
  CateBizId?: string
  /**
   * 有效开始时间，单位是unix时间戳。默认值为0，表示问答为永久有效.
   */
  ExpireStart?: string
  /**
   * 有效结束时间，unix时间戳，0代表永久有效
   */
  ExpireEnd?: string
  /**
   * 相似问内容
   */
  SimilarQuestions?: Array<string>
  /**
   * 问题描述
   */
  QuestionDesc?: string
  /**
   * 问答生效域: 1-不生效；2-仅开发域生效；3-仅发布域生效；4-开发域和发布域均生效
默认值：应用内默认知识库为2，共享知识库为4。
   */
  EnableScope?: number
}

/**
 * RateMsgRecord请求参数结构体
 */
export interface RateMsgRecordRequest {
  /**
   * 应用appKey
   */
  BotAppKey: string
  /**
   * 消息ID 【大模型回复答案的RecordID】可以通过[GetMsgRecord](https://cloud.tencent.com/document/product/1759/105090)接口获取
   */
  RecordId: string
  /**
   * 0: 取消前置状态 ; 1: 点赞;   2: 点踩;   
注：
(1) 评测端不支持点赞、点踩
(2) 消息回复类型为欢迎语、并发超限、实时文档，不支持点赞、点踩
(3) 点赞或者点踩之后，如果想要取消状态，传值为0即可
   */
  Score: number
  /**
   * 支持通过API自定义，字符上限值为20字符；通过API 自定义标签，可以支持平台端用户在不满意问题错误类型中筛选、查看
   */
  Reasons?: Array<string>
  /**
   * 用户自定义反馈内容
   */
  FeedbackContent?: string
}

/**
 * RenameDoc返回参数结构体
 */
export interface RenameDocResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 聊天详情Refer
 */
export interface MsgRecordReference {
  /**
   * id
   */
  Id?: string
  /**
   * 链接
   */
  Url?: string
  /**
   * 类型
   */
  Type?: number
  /**
   * 名称
   */
  Name?: string
  /**
   * 来源文档ID
   */
  DocId?: string
  /**
   * 知识库名称
   */
  KnowledgeName?: string
  /**
   * 知识库业务id
   */
  KnowledgeBizId?: string
  /**
   * 文档业务id
   */
  DocBizId?: string
  /**
   * 问答业务id
   */
  QaBizId?: string
  /**
   * 文档索引id
   */
  Index?: number
}

/**
 * CreateRelease请求参数结构体
 */
export interface CreateReleaseRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 发布描述
   */
  Desc?: string
  /**
   * 渠道业务ID，从ListChannel接口的响应字段ChannelId获取
   */
  ChannelBizIds?: Array<string>
}

/**
 * 思考事件过程信息
 */
export interface AgentProcedure {
  /**
   * 索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
  /**
   * 执行过程英语名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 中文名, 用于展示
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 状态常量: 使用中: processing, 成功: success, 失败: failed
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 图标
注意：此字段可能返回 null，表示取不到有效值。
   */
  Icon?: string
  /**
   * Agent调试信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Debugging?: AgentProcedureDebugging
  /**
   * 是否切换Agent，取值为"main"或者"workflow",不切换为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  Switch?: string
  /**
   * 工作流名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  WorkflowName?: string
  /**
   * 当前请求执行时间, 单位 ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  Elapsed?: number
  /**
   * 工作流节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
  /**
   * 用于展示思考放在哪个回复气泡中
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplyIndex?: number
  /**
   * 主agent
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceAgentName?: string
  /**
   * 挂号agent
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetAgentName?: string
  /**
   * Agent的图标
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentIcon?: string
}

/**
 * ExportAttributeLabel请求参数结构体
 */
export interface ExportAttributeLabelRequest {
  /**
   * 应用ID，获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 标签ID
   */
  AttributeBizIds?: Array<string>
  /**
   * 根据筛选数据导出
   */
  Filters?: AttributeFilters
}

/**
 * ModifyQACate请求参数结构体
 */
export interface ModifyQACateRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 分类名称

   */
  Name: string
  /**
   * 分类业务ID
   */
  CateBizId: string
}

/**
 * UpdateSharedKnowledge请求参数结构体
 */
export interface UpdateSharedKnowledgeRequest {
  /**
   * 共享知识库业务ID
   */
  KnowledgeBizId: string
  /**
   * 共享知识库更新信息
   */
  Info?: KnowledgeUpdateInfo
}

/**
 * StopDocParse请求参数结构体
 */
export interface StopDocParseRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizId: string
}

/**
 * DeleteQACate返回参数结构体
 */
export interface DeleteQACateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListChannel返回参数结构体
 */
export interface ListChannelResponse {
  /**
   * 返回总数
   */
  Total?: number
  /**
   * 渠道信息列表
   */
  ListChannel?: Array<ChannelListInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDoc请求参数结构体
 */
export interface DescribeDocRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizId: string
}

/**
 * Agent思考过程调试信息
 */
export interface AgentProcedureDebugging {
  /**
   * 模型思考内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * 展示的具体文本内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayContent?: string
  /**
   * 1：搜索引擎参考来源；2：知识库参考来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayType?: number
  /**
   * 搜索引擎展示的索引
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuoteInfos?: Array<QuoteInfo>
  /**
   * 具体的参考来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  References?: Array<AgentReference>
  /**
   * 展示正在执行的状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayStatus?: string
  /**
   * 云桌面的URL地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  SandboxUrl?: string
  /**
   * 云桌面里面通过浏览器打开的URL地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayUrl?: string
}

/**
 * DescribeTokenUsageGraph请求参数结构体
 */
export interface DescribeTokenUsageGraphRequest {
  /**
   * 子账号标识列表，支持批量查询多个子账号。不填时查询主账号下所有子账号的汇总数据
   */
  UinAccount?: Array<string>
  /**
   * 知识引擎子业务类型:  FileParse(文档解析)、Embedding、Rewrite(多轮改写)、 Concurrency(并发)、KnowledgeSummary(知识总结)   KnowledgeQA(知识问答)、KnowledgeCapacity(知识库容量)、SearchEngine(搜索引擎)
   */
  SubBizType?: string
  /**
   * 模型标识
   */
  ModelName?: string
  /**
   * 开始时间戳, 单位为秒(废弃)
   * @deprecated
   */
  StartTime?: string
  /**
   * 结束时间戳, 单位为秒(废弃)
   * @deprecated
   */
  EndTime?: string
  /**
   * 应用ID列表。不填时：若指定SpaceId则查该空间所有应用；否则查用户下所有应用
   */
  AppBizIds?: Array<string>
  /**
   * 应用类型。可选值：knowledge_qa(知识问答)/plugin_parsing_qa(插件)/shared_knowledge(知识库)/evaluate_test(评测)。不填时查所有类型
   */
  AppType?: string
  /**
   * 筛选子场景
   */
  SubScenes?: Array<string>
  /**
   * 开始时间。Unix 时间戳，单位是秒，默认为空。
   */
  StatStartTime?: number
  /**
   * 结束时间。Unix 时间戳，单位是秒，默认为空。
   */
  StatEndTime?: number
}

/**
 * DescribeConcurrencyUsageGraph请求参数结构体
 */
export interface DescribeConcurrencyUsageGraphRequest {
  /**
   * 模型标识
   */
  ModelName: string
  /**
   * 开始时间戳, 单位为秒(废弃)
   */
  StartTime?: string
  /**
   * 结束时间戳, 单位为秒(废弃)
   */
  EndTime?: string
  /**
   * uin
   */
  UinAccount?: Array<string>
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 子业务类型
   */
  SubBizType?: string
  /**
   * 应用id列表
   */
  AppBizIds?: Array<string>
  /**
   * 空间id
   */
  SpaceId?: string
  /**
   * 开始时间戳, 单位为秒
   */
  StatStartTime?: number
  /**
   * 结束时间戳, 单位为秒
   */
  StatEndTime?: number
}

/**
 * DescribeRelease请求参数结构体
 */
export interface DescribeReleaseRequest {
  /**
   * 应用ID。获取方法参看如何获取 [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 发布ID
   */
  ReleaseBizId?: string
}

/**
 * 发布问答
 */
export interface ReleaseQA {
  /**
   * 问题
   */
  Question?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 状态
   */
  Action?: number
  /**
   * 状态描述
   */
  ActionDesc?: string
  /**
   * 来源1:文档生成，2：批量导入，3：手动添加
   */
  Source?: number
  /**
   * 来源描述
   */
  SourceDesc?: string
  /**
   * 文件名字
   */
  FileName?: string
  /**
   * 文档类型
   */
  FileType?: string
  /**
   * 失败原因
   */
  Message?: string
  /**
   * 发布状态
   */
  ReleaseStatus?: number
  /**
   * QAID
   */
  QaBizId?: string
  /**
   * 文档业务ID
   */
  DocBizId?: string
}

/**
 * 不满意回复
 */
export interface UnsatisfiedReply {
  /**
   * 不满意回复ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplyBizId?: string
  /**
   * 消息记录ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordBizId?: string
  /**
   * 用户问题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Question?: string
  /**
   * 问题回复
注意：此字段可能返回 null，表示取不到有效值。
   */
  Answer?: string
  /**
   * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reasons?: Array<string>
  /**
   * 处理状态，0：待处理，1：已拒答，2：已忽略，3：已纠错
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 创建时间，秒级时间戳
   */
  CreateTime?: string
  /**
   * 更新时间,秒级时间戳
   */
  UpdateTime?: string
  /**
   * 操作人
   */
  Operator?: string
  /**
   * 自定义反馈
   */
  FeedbackContent?: string
}

/**
 * Agent工具的响应参数定义
 */
export interface AgentToolRspParam {
  /**
   * 参数名称
   */
  Name?: string
  /**
   * 参数描述
   */
  Desc?: string
  /**
   * 参数类型，0:string, 1:int, 2:float，3:bool 4:object 5:array_string, 6:array_int, 7:array_float, 8:array_bool, 9:array_object
   */
  Type?: number
  /**
   * 子参数,ParamType 是OBJECT 或 ARRAY<>类型有用
   */
  SubParams?: Array<AgentToolRspParam>
  /**
   * agent模式下模型是否可见
   */
  AgentHidden?: boolean
  /**
   * 是否隐藏不可见
   */
  GlobalHidden?: boolean
  /**
   * COVER: 覆盖解析 INCREMENT:增量解析
   */
  AnalysisMethod?: string
}

/**
 * CreateRejectedQuestion请求参数结构体
 */
export interface CreateRejectedQuestionRequest {
  /**
   * 应用ID, 获取方式参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 拒答问题


   */
  Question: string
  /**
   * 拒答问题来源， 1- 来源于不满意回复;  2 - 来源于手动添加
   */
  BusinessSource: number
  /**
   * 拒答问题来源的数据源唯一id


   */
  BusinessId?: string
}

/**
 * 结构化输出的配置项
 */
export interface StructuredOutputConfig {
  /**
   * 参数列表
   */
  StructuredOutputParams?: Array<ParameterConfig>
}

/**
 * 检索范围配置
 */
export interface SearchRange {
  /**
   * 检索条件and/or
注意：此字段可能返回 null，表示取不到有效值。
   */
  Condition?: string
  /**
   * 自定义变量和标签关系数据	
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiVarAttrInfos?: Array<ApiVarAttrInfo>
}

/**
 * ModifyDocAttrRange返回参数结构体
 */
export interface ModifyDocAttrRangeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCallStatsGraph请求参数结构体
 */
export interface DescribeCallStatsGraphRequest {
  /**
   * 子账号标识列表，支持批量查询多个子账号。不填时查询主账号下所有子账号的汇总数据
   */
  UinAccount?: Array<string>
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 子业务类型，用于筛选不同业务场景的调用统计
   */
  SubBizType?: string
  /**
   * 模型标识
   */
  ModelName?: string
  /**
   * 开始时间戳, 单位为秒(废弃)
   * @deprecated
   */
  StartTime?: string
  /**
   * 结束时间戳, 单位为秒(废弃)
   * @deprecated
   */
  EndTime?: string
  /**
   * 应用id列表
   */
  AppBizIds?: Array<string>
  /**
   * 筛选子场景(文档解析场景使用)
   */
  SubScenes?: Array<string>
  /**
   * 应用类型(knowledge_qa应用管理， shared_knowlege 共享知识库)
   */
  AppType?: string
  /**
   * 空间ID，用于限定查询范围。不填时查询所有空间的数据
   */
  SpaceId?: string
  /**
   * 开始时间。Unix 时间戳，单位是秒，默认为空。
   */
  StatStartTime?: number
  /**
   * 结束时间。Unix 时间戳，单位是秒，默认为空。
   */
  StatEndTime?: number
}

/**
 * ListQA返回参数结构体
 */
export interface ListQAResponse {
  /**
   * 问答数量
   */
  Total?: string
  /**
   * 待校验问答数量
   */
  WaitVerifyTotal?: string
  /**
   * 未采纳问答数量
   */
  NotAcceptedTotal?: string
  /**
   * 已采纳问答数量
   */
  AcceptedTotal?: string
  /**
   * 页码
   */
  PageNumber?: number
  /**
   * 问答详情
   */
  List?: Array<ListQaItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VerifyQA请求参数结构体
 */
export interface VerifyQARequest {
  /**
   * 问答列表
   */
  List: Array<QAList>
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 用于操作共享知识库
   */
  KnowledgeBizId?: string
}

/**
 * ListAppKnowledgeDetail返回参数结构体
 */
export interface ListAppKnowledgeDetailResponse {
  /**
   * 列表总数
   */
  Total?: number
  /**
   * 应用使用知识库容量详情
   */
  List?: Array<KnowledgeDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRejectedQuestion返回参数结构体
 */
export interface CreateRejectedQuestionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTokenUsageGraph返回参数结构体
 */
export interface DescribeTokenUsageGraphResponse {
  /**
   * Token消耗总量
   */
  Total?: Array<Stat>
  /**
   * 输入Token消耗量
   */
  Input?: Array<Stat>
  /**
   * 输出Token消耗量
   */
  Output?: Array<Stat>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 相似问修改(更新)信息
 */
export interface SimilarQuestionModify {
  /**
   * 需要添加的相似问(内容)列表
   */
  AddQuestions?: Array<string>
  /**
   * 需要更新的相似问列表
   */
  UpdateQuestions?: Array<SimilarQuestion>
  /**
   * 需要删除的相似问列表
   */
  DeleteQuestions?: Array<SimilarQuestion>
}

/**
 * ModifyDocCate请求参数结构体
 */
export interface ModifyDocCateRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 分类名称

   */
  Name: string
  /**
   * 分类业务ID
   */
  CateBizId: string
}

/**
 * 模型参数
 */
export interface ModelParams {
  /**
   * 温度
   */
  Temperature?: number
  /**
   * Top_P
   */
  TopP?: number
  /**
   * 随机种子
   */
  Seed?: number
  /**
   * 存在惩罚
   */
  PresencePenalty?: number
  /**
   * 频率惩罚
   */
  FrequencyPenalty?: number
  /**
   * 重复惩罚
   */
  RepetitionPenalty?: number
  /**
   * 最大输出长度
   */
  MaxTokens?: number
  /**
   * 停止序列
   */
  StopSequences?: Array<string>
  /**
   * 输出格式
   */
  ReplyFormat?: string
  /**
   * 深度思考值
disabled
enabled
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeepThinking?: string
  /**
   * 效果 disabled low medium high
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReasoningEffort?: string
}

/**
 * Agent输入值，支持直接赋值和引用
 */
export interface AgentInput {
  /**
   * 输入来源类型：0 用户输入，3 自定义变量（API参数）
   */
  InputType?: number
  /**
   * 用户手写输入
   */
  UserInputValue?: AgentInputUserInputValue
  /**
   * 自定义变量（API参数）
   */
  CustomVarId?: string
  /**
   * 环境变量参数
   */
  EnvVarId?: string
  /**
   * 应用变量参数
   */
  AppVarId?: string
  /**
   * 系统参数
   */
  SystemVariable?: AgentInputSystemVariable
  /**
   * 工具参数
   */
  ToolParam?: string
}

/**
 * DeleteVar请求参数结构体
 */
export interface DeleteVarRequest {
  /**
   * 应用ID
   */
  AppBizId: string
  /**
   * 变量ID
   */
  VarId: string
  /**
   * 参数类型
   */
  VarModuleType?: number
}

/**
 * 知识问答配置
 */
export interface KnowledgeQaConfig {
  /**
   * 欢迎语，200字符以内
注意：此字段可能返回 null，表示取不到有效值。
   */
  Greeting?: string
  /**
   * 角色描述，4000字符以内。通过填写描述，设定应用的 #角色名称、 #风格特点 及可达成的#意图。建议按照下面的模板填写，且自定义意图建议不超过5个。

#角色名称：
#风格特点：
#输出要求：
#能力限制：

能够达成以下用户意图
##意图名称：
##意图描述：
##意图示例：
##意图实现：

注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleDescription?: string
  /**
   * 生成模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model?: AppModel
  /**
   * 知识搜索配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Search?: Array<KnowledgeQaSearch>
  /**
   * 知识管理输出配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: KnowledgeQaOutput
  /**
   * 工作流程配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Workflow?: KnowledgeWorkflow
  /**
   * 检索范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchRange?: SearchRange
  /**
   * 应用模式，standard:标准模式, agent: agent模式，single_workflow：单工作流模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Pattern?: string
  /**
   * 检索策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchStrategy?: SearchStrategy
  /**
   * 单工作流ID，Pattern为single_workflow时传入
注意：此字段可能返回 null，表示取不到有效值。
   */
  SingleWorkflow?: KnowledgeQaSingleWorkflow
  /**
   * 应用关联插件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Plugins?: Array<KnowledgeQaPlugin>
  /**
   * 思考模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThoughtModel?: AppModel
  /**
   * 意图达成方式优先级
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntentAchievements?: Array<IntentAchievement>
  /**
   * 是否开启图文检索
注意：此字段可能返回 null，表示取不到有效值。
   */
  ImageTextRetrieval?: boolean
  /**
   * 配置语音通话参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  AiCall?: AICallConfig
  /**
   * 共享知识库关联配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShareKnowledgeBases?: Array<ShareKnowledgeBase>
  /**
   * 背景图相关信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackgroundImage?: BackgroundImageConfig
  /**
   * 开场问题
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpeningQuestions?: Array<string>
  /**
   * 长期记忆开关
   */
  LongMemoryOpen?: boolean
  /**
   * 长期记忆时效
   */
  LongMemoryDay?: number
  /**
   * agent配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Agent?: KnowledgeQaAgent
  /**
   * 知识库模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeModelConfig?: KnowledgeModelConfig
  /**
   * 知识库高级设置
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeAdvancedConfig?: KnowledgeAdvancedConfig
}

/**
 * 图片信息
 */
export interface ImageInfoContent {
  /**
   * 图片文件链接
   */
  Url?: string
}

/**
 * GetDocPreview返回参数结构体
 */
export interface GetDocPreviewResponse {
  /**
   * 文件名, 发布端固定使用这个名称
   */
  FileName?: string
  /**
   * 文件类型
   */
  FileType?: string
  /**
   * cos路径

   */
  CosUrl?: string
  /**
   * cos临时地址

   */
  Url?: string
  /**
   * cos桶

   */
  Bucket?: string
  /**
   * 存在文档重命名情况下的新名称, 评测端优先使用这个名称
   */
  NewName?: string
  /**
   * 文件md结果cos临时地址
   */
  ParseResultCosUrl?: string
  /**
   * 是否可下载
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDownload?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 模型信息
 */
export interface ModelInfo {
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * 模型描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelDesc?: string
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AliasName?: string
  /**
   * 资源状态 1：资源可用；2：资源已用尽
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceStatus?: number
  /**
   * 提示词内容字符限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  PromptWordsLimit?: string
  /**
   * 通过核心采样控制内容生成的多样性，较高的Top P值会导致生成更多样的内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  TopP?: ModelParameter
  /**
   * 温度控制随机性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Temperature?: ModelParameter
  /**
   * 最多能生成的token数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxTokens?: ModelParameter
  /**
   * 模型来源 Hunyuan：腾讯混元大模型,Industry：腾讯云行业大模型,Experience：新模型体验,Custom自定义模型
   */
  Source?: string
  /**
   * 模型图标
   */
  Icon?: string
  /**
   * 是否免费
   */
  IsFree?: boolean
  /**
   * 模型对话框可输入的上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputLenLimit?: number
  /**
   * 支持工作流的类型 0:模型不支持; 1: 模型支持工作流； 2： 模型支持效果不佳；
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportWorkflowStatus?: number
  /**
   * 模型类别 generate：生成模型，thought：思考模型
   */
  ModelCategory?: string
  /**
   * 是否默认模型
   */
  IsDefault?: boolean
  /**
   * 角色提示词输入长度限制
   */
  RoleLenLimit?: number
  /**
   * 是否专属并发模型
   */
  IsExclusive?: boolean
  /**
   * 模型支持智能通话效果
   */
  SupportAiCallStatus?: number
  /**
   * 专属并发数
   */
  Concurrency?: number
  /**
   * 模型标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelTags?: Array<string>
  /**
   * 模型超参定义
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelParams?: Array<ModelParameter>
  /**
   * 提供商名称
   */
  ProviderName?: string
  /**
   * 提供商别名
   */
  ProviderAliasName?: string
  /**
   * 提供商类型 Self:提供商，Custom：自定义模型提供商，Third：第三方模型提供商
   */
  ProviderType?: string
  /**
   * 是否关闭模型超参
   */
  IsCloseModelParams?: boolean
  /**
   * 是否支持深度思考
   */
  IsDeepThinking?: boolean
}

/**
 * DeleteRejectedQuestion请求参数结构体
 */
export interface DeleteRejectedQuestionRequest {
  /**
   * 应用ID, 获取方法参看如何获取 [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)。
   */
  BotBizId: string
  /**
   * 拒答问题来源的数据源唯一id



   */
  RejectedBizIds: Array<string>
}

/**
 * 分片高亮内容
 */
export interface Highlight {
  /**
   * 高亮起始位置

注意：此字段可能返回 null，表示取不到有效值。
   */
  StartPos?: string
  /**
   * 高亮结束位置

注意：此字段可能返回 null，表示取不到有效值。
   */
  EndPos?: string
  /**
   * 高亮子文本

注意：此字段可能返回 null，表示取不到有效值。
   */
  Text?: string
}

/**
 * 变量详情
 */
export interface TaskFLowVar {
  /**
   * 变量ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VarId?: string
  /**
   * 变量名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VarName?: string
  /**
   * 变量描述（默认为"-"）
   */
  VarDesc?: string
  /**
   * 变量类型 (STRING,INT,FLOAT,BOOL,OBJECT,ARRAY_STRING,ARRAY_INT,ARRAY_FLOAT,ARRAY_BOOL,ARRAY_OBJECT,FILE,DOCUMENT,IMAGE,AUDIO)

   */
  VarType?: string
  /**
   * 自定义变量默认值
   */
  VarDefaultValue?: string
  /**
   * 自定义变量文件默认名称
   */
  VarDefaultFileName?: string
  /**
   * 变量类型
   */
  VarModuleType?: number
}

/**
 * 共享知识库基础信息
 */
export interface KnowledgeBaseInfo {
  /**
   * 共享知识库业务ID
   */
  KnowledgeBizId?: string
  /**
   * 共享知识库名称
   */
  KnowledgeName?: string
  /**
   * 共享知识库描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeDescription?: string
  /**
   * Embedding模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  EmbeddingModel?: string
  /**
   * 问答提取模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  QaExtractModel?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 共享知识库类型，0普通，1公众号
   */
  KnowledgeType?: number
  /**
   * 拥有者id
   */
  OwnerStaffId?: string
  /**
   * 知识库文档数量,当前仅支持公众号知识库
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocTotal?: number
  /**
   * 知识库处理中状态标记，1：向量embedding变更中
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProcessingFlags?: Array<number | bigint>
  /**
   * 知识库拥有者的名字
   */
  OwnerStaffName?: string
}

/**
 * GetLikeDataCount返回参数结构体
 */
export interface GetLikeDataCountResponse {
  /**
   * 可评价消息数
   */
  Total?: number
  /**
   * 评价数
   */
  AppraisalTotal?: number
  /**
   * 参评率
   */
  ParticipationRate?: number
  /**
   * 点赞数
   */
  LikeTotal?: number
  /**
   * 点赞率
   */
  LikeRate?: number
  /**
   * 点踩数
   */
  DislikeTotal?: number
  /**
   * 点踩率
   */
  DislikeRate?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListChannel请求参数结构体
 */
export interface ListChannelRequest {
  /**
   * 应用ID（获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)）
   */
  AppBizId: string
  /**
   * 应用ID
   * @deprecated
   */
  BotBizId?: string
  /**
   * 页码（必须大于0）
   */
  PageNumber?: number
  /**
   * 分页数量（取值范围为1-200）
   */
  PageSize?: number
  /**
   * 渠道类型, 10000: 微信订阅号，10001: 微信服务号，10002：企微应用，10004：微信客服，10005：小程序，10009：企微智能机器人 。（默认为[]）
   */
  ChannelType?: Array<number | bigint>
  /**
   * 渠道状态 1未发布 2运行中 3已下线 （默认为[]）
   */
  ChannelStatus?: Array<number | bigint>
}

/**
 * DeleteAttributeLabel返回参数结构体
 */
export interface DeleteAttributeLabelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 意图达成方式
 */
export interface IntentAchievement {
  /**
   * 意图达成方式，qa:问答回复、doc：文档回复、workflow：工作流回复，llm：大模型回复
   */
  Name?: string
  /**
   * 意图达成方式描述
   */
  Desc?: string
}

/**
 * VerifyQA返回参数结构体
 */
export interface VerifyQAResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSharedKnowledge请求参数结构体
 */
export interface DescribeSharedKnowledgeRequest {
  /**
   * 共享知识库业务ID
   */
  KnowledgeBizId: string
}

/**
 * ModifyDoc请求参数结构体
 */
export interface ModifyDocRequest {
  /**
   * 应用ID，获取方法参看[如何获取   BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizId: string
  /**
   * 是否引用链接
   */
  IsRefer: boolean
  /**
   * 标签适用范围，1:全部，2:按条件。默认为1。
   */
  AttrRange: number
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 关联的标签
   */
  AttrLabels?: Array<AttrLabelRefer>
  /**
   * 网页(或自定义链接)地址
   */
  WebUrl?: string
  /**
   * 外部引用链接类型 0：系统链接 1：自定义链接
值为1时，WebUrl 字段不能为空，否则不生效。
   */
  ReferUrlType?: number
  /**
   * 有效开始时间，单位为unix时间戳
   */
  ExpireStart?: string
  /**
   * 有效结束时间，单位为unix时间戳，默认值为0代表永久有效
   */
  ExpireEnd?: string
  /**
   * 分类ID
   */
  CateBizId?: string
  /**
   * 是否可下载，IsRefer为true并且ReferUrlType为0时，该值才有意义
   */
  IsDownload?: boolean
  /**
   * 需要修改的内容类型  0  无效 1 更新文档cos信息 2 更新文档引用信息 3 更新文档刷新频率 4 腾讯文档刷新
   */
  ModifyTypes?: Array<number | bigint>
  /**
   * 文档更新频率
   */
  UpdatePeriodInfo?: UpdatePeriodInfo
  /**
   * 自定义切分规则
   */
  SplitRule?: string
  /**
   * 文档生效域: 1-不生效；2-仅开发域生效；3-仅发布域生效；4-开发域和发布域均生效。
若不传，则不会修改文档生效域。
   */
  EnableScope?: number
}

/**
 * 知识库模型设置
 */
export interface KnowledgeModelConfig {
  /**
   * 向量模型，该字段只有共享知识库有，应用知识库没有
注意：此字段可能返回 null，表示取不到有效值。
   */
  EmbeddingModel?: string
  /**
   * 问答对生成模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  QaExtractModel?: string
  /**
   * schema生成模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  SchemaModel?: string
}

/**
 * ListWorkflowRuns返回参数结构体
 */
export interface ListWorkflowRunsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 工作流运行列表
   */
  WorkflowRuns?: Array<WorkflowRunBase>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * //智能体应用可见范围，public-所有人可见 private-仅自己可见 share-通过分享可见
 */
export interface YuanQi {
  /**
   * public-所有人可见
   */
  VisibleRange?: string
}

/**
 * 工作流节点运行详情
 */
export interface NodeRunDetail {
  /**
   * 节点运行的ID
   */
  NodeRunId?: string
  /**
   * 节点ID
   */
  NodeId?: string
  /**
   * 工作流运行实例的ID
   */
  WorkflowRunId?: string
  /**
   * 节点名称
   */
  NodeName?: string
  /**
   * 节点类型。
1： 开始节点
2：参数提取节点
3：大模型节点
4：知识问答节点
5：知识检索节点
6：标签提取节点
7：代码执行节点
8：工具节点
9：逻辑判断节点
10：回复节点
11：选项卡节点
12：循环节点
13：意图识别节点
14：工作流节点
15：插件节点
16：结束节点
17: 变量聚合节点数据
18: 批处理节点
19: 消息队列节点
   */
  NodeType?: number
  /**
   * 运行状态。0: 初始状态；1: 运行中；2: 运行成功； 3: 运行失败； 4: 已取消
   */
  State?: number
  /**
   * 错误码
   */
  FailCode?: string
  /**
   * 错误信息
   */
  FailMessage?: string
  /**
   * 消耗时间（毫秒）
   */
  CostMilliseconds?: number
  /**
   * 消耗的token总数
   */
  TotalTokens?: number
  /**
   * 输入变量信息
   */
  Input?: string
  /**
   * 节点的输入的完整内容的链接。（当Input内容超过限制的时候此字段才有值）
   */
  InputRef?: string
  /**
   * 输出变量信息
   */
  Output?: string
  /**
   * 节点的输出的完整内容的链接。（当Output内容超过限制的时候此字段才有值）
   */
  OutputRef?: string
  /**
   * 原始输出信息。部分节点才有值，如工具节点、代码节点
   */
  TaskOutput?: string
  /**
   * 任务的原始输出的完整内容的链接。（当TaskOutput内容超过限制的时候此字段才有值）
   */
  TaskOutputRef?: string
  /**
   * 节点的日志
   */
  Log?: string
  /**
   * 节点的日志的完整内容的链接志（当Log内容超过限制的时候才有值）
   */
  LogRef?: string
  /**
   * 开始时间戳（毫秒）
   */
  StartTime?: string
  /**
   * 结束时间戳（毫秒）
   */
  EndTime?: string
  /**
   * LLM统计信息。
   */
  StatisticInfos?: Array<StatisticInfo>
}

/**
 * 应用基础配置
 */
export interface BaseConfig {
  /**
   * 应用名称
   */
  Name: string
  /**
   * 应用头像url，在CreateApp和ModifyApp中作为入参必填。
作为入参传入说明：
1. 传入的url图片限制为jpeg和png，大小限制为500KB，url链接需允许head请求。
2. 如果用户没有对象存储，可使用“获取文件上传临时密钥”(DescribeStorageCredential)接口，获取cos临时密钥和上传路径，自行上传头像至cos中并获取访问链接。
   */
  Avatar: string
  /**
   * 应用描述
   */
  Desc?: string
}

/**
 * 相似问信息
 */
export interface SimilarQuestion {
  /**
   * 相似问ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SimBizId?: string
  /**
   * 相似问内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Question?: string
  /**
   * 相似问审核状态，1审核失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuditStatus?: number
}

/**
 * 文档信息
 */
export interface MsgFileInfo {
  /**
   * 文档名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileName?: string
  /**
   * 文档大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileSize?: string
  /**
   * 文档URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileUrl?: string
  /**
   * 文档类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileType?: string
  /**
   * 文档ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocId?: string
}

/**
 * 对话记录内容详情
 */
export interface Content {
  /**
   * 消息内容类型
text：文本
image：图片
file：文件
option_cards：选项卡
custom_params：用户自定义业务参数
sandbox：云桌面
custom_variables：自定义输入参数
web_search: 网页搜索内容
file_collection：文件收集信息
widget：widget信息
widget_action：用户端widget动作信息
   */
  Type?: string
  /**
   * 文本内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Text?: string
  /**
   * 引用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuoteInfos?: Array<QuoteInfo>
  /**
   * 参考文献信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  References?: Array<ContentReference>
  /**
   * 图片信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Image?: ImageInfoContent
  /**
   * 文件信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  File?: FileInfoContent
  /**
   * 选项卡信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  OptionCards?: Array<string>
  /**
   * 用户自定义业务参数信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomParams?: Array<string>
  /**
   * 自定义变量
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomVariables?: Array<string>
  /**
   * 沙盒信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sandbox?: SandboxContent
  /**
   * 网页搜索内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebSearch?: WebSearchContent
  /**
   * 文件收集信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileCollection?: FileCollection
  /**
   * Widget信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Widget?: Widget
  /**
   * Widget动作信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  WidgetAction?: WidgetAction
}

/**
 * DescribeTokenUsage请求参数结构体
 */
export interface DescribeTokenUsageRequest {
  /**
   * 子账号标识列表，用于筛选指定子账号的统计数据，不填时查询主账号下所有子账号的汇总数据
   */
  UinAccount?: Array<string>
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 知识引擎子业务类型:  FileParse(文档解析)、Embedding、Rewrite(多轮改写)、 Concurrency(并发)、KnowledgeSummary(知识总结)   KnowledgeQA(知识问答)、KnowledgeCapacity(知识库容量)、SearchEngine(搜索引擎)
   */
  SubBizType?: string
  /**
   * 模型标识
   */
  ModelName?: string
  /**
   * 开始时间戳, 单位为秒(默认值0)(废弃)
   * @deprecated
   */
  StartTime?: string
  /**
   * 结束时间戳, 单位为秒(默认值0， 必须大于开始时间戳)(废弃)
   * @deprecated
   */
  EndTime?: string
  /**
   * 应用id列表
   */
  AppBizIds?: Array<string>
  /**
   * 筛选子场景(文档解析场景使用)
   */
  SubScenes?: Array<string>
  /**
   * 应用类型(knowledge_qa应用管理， shared_knowlege 共享知识库)
   */
  AppType?: string
  /**
   * 空间ID，用于限定查询范围。不填时查询所有空间的数据
   */
  SpaceId?: string
  /**
   * 开始时间。Unix 时间戳，单位是秒，默认为空。
   */
  StatStartTime?: number
  /**
   * 结束时间。Unix 时间戳，单位是秒，默认为空。
   */
  StatEndTime?: number
}

/**
 * 文档和问答过滤器
 */
export interface AgentKnowledgeFilterDocAndAnswer {
  /**
   * 文档ID列表
   */
  DocBizIds?: Array<string>
  /**
   * 问答
   */
  AllQa?: boolean
}

/**
 * CreateAttributeLabel返回参数结构体
 */
export interface CreateAttributeLabelResponse {
  /**
   * 标签ID
   */
  AttrBizId?: string
  /**
   * 标签值ID与名称
   */
  Labels?: Array<AttributeLabel>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsTransferIntent请求参数结构体
 */
export interface IsTransferIntentRequest {
  /**
   * 内容
   */
  Content: string
  /**
   * 应用appKey
   */
  BotAppKey: string
}

/**
 * ModifyRejectedQuestion返回参数结构体
 */
export interface ModifyRejectedQuestionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 澄清widget配置
 */
export interface ClarificationWidgetConfig {
  /**
   * widget id
   */
  WidgetId?: string
  /**
   * 澄清widget类型
   */
  ClarificationWidgetType?: number
  /**
   * Widget名称
   */
  WidgetName?: string
  /**
   * Widget预览
   */
  WidgetPreview?: string
  /**
   * 是否启用该Widget作为澄清样式
   */
  Enabled?: boolean
}

/**
 * ModifyDocCate返回参数结构体
 */
export interface ModifyDocCateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 搜索引擎参考来源索引
 */
export interface QuoteInfo {
  /**
   * 参考来源位置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Position?: number
  /**
   * 参考来源索引顺序
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: string
}

/**
 * DescribeCallStatsGraph返回参数结构体
 */
export interface DescribeCallStatsGraphResponse {
  /**
   * 接口调用次数统计信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<Stat>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStorageCredential返回参数结构体
 */
export interface DescribeStorageCredentialResponse {
  /**
   * 密钥信息
   */
  Credentials?: Credentials
  /**
   * 失效时间
   */
  ExpiredTime?: number
  /**
   * 开始时间
   */
  StartTime?: number
  /**
   * 对象存储桶
   */
  Bucket?: string
  /**
   * 对象存储可用区
   */
  Region?: string
  /**
   * 文件存储目录
   */
  FilePath?: string
  /**
   * 存储类型
   */
  Type?: string
  /**
   * 主号
   */
  CorpUin?: string
  /**
   * 图片存储目录
   */
  ImagePath?: string
  /**
   * 上传存储路径，到具体文件
   */
  UploadPath?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckAttributeLabelExist返回参数结构体
 */
export interface CheckAttributeLabelExistResponse {
  /**
   * 是否存在
   */
  IsExist?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetTaskStatus请求参数结构体
 */
export interface GetTaskStatusRequest {
  /**
   * 任务ID
   */
  TaskId: string
  /**
   * 任务类型
   */
  TaskType: string
  /**
   * 应用ID
   */
  BotBizId: string
}

/**
 * 应用配置MCP插件query信息
 */
export interface AgentPluginQuery {
  /**
   * 参数名称
   */
  ParamName?: string
  /**
   * 参数值
   */
  ParamValue?: string
  /**
   * query参数配置是否隐藏不可见，true-隐藏不可见，false-可见
   */
  GlobalHidden?: boolean
  /**
   * 参数是否可以为空
   */
  IsRequired?: boolean
  /**
   * 输入的值
   */
  Input?: AgentInput
}

/**
 * DescribeRobotBizIDByAppKey请求参数结构体
 */
export interface DescribeRobotBizIDByAppKeyRequest {
  /**
   * 应用appkey
   */
  AppKey: string
}

/**
 * CreateVar请求参数结构体
 */
export interface CreateVarRequest {
  /**
   * 应用ID
   */
  AppBizId: string
  /**
   * 变量名称，不允许重复，最大支持50个字符
   */
  VarName: string
  /**
   * 变量描述，最大支持120个字符
   */
  VarDesc?: string
  /**
   * 变量类型定义，支持类型如下：(STRING,INT,FLOAT,BOOL,OBJECT,ARRAY_STRING,ARRAY_INT,ARRAY_FLOAT,ARRAY_BOOL,ARRAY_OBJECT,FILE,DOCUMENT,IMAGE,AUDIO);传输过程是json字符串，标签中仅支持"STRING"类型使用
   */
  VarType?: string
  /**
   * 自定义变量默认值
   */
  VarDefaultValue?: string
  /**
   * 自定义变量文件默认名称
   */
  VarDefaultFileName?: string
  /**
   * 参数类型
   */
  VarModuleType?: number
}

/**
 * 获取QA分类分组
 */
export interface QACate {
  /**
   * QA分类的业务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CateBizId?: string
  /**
   * 分类名称

注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 分类下QA数量

注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 是否可新增

注意：此字段可能返回 null，表示取不到有效值。
   */
  CanAdd?: boolean
  /**
   * 是否可编辑

注意：此字段可能返回 null，表示取不到有效值。
   */
  CanEdit?: boolean
  /**
   * 是否可删除

注意：此字段可能返回 null，表示取不到有效值。
   */
  CanDelete?: boolean
  /**
   * 子分类
注意：此字段可能返回 null，表示取不到有效值。
   */
  Children?: Array<QACate>
  /**
   * 是否是叶子节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLeaf?: boolean
}

/**
 * ListRejectedQuestion请求参数结构体
 */
export interface ListRejectedQuestionRequest {
  /**
   * 应用ID, 获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)。
   */
  BotBizId: string
  /**
   * 页码（必须大于0）
   */
  PageNumber: number
  /**
   * 每页数量（取值范围1-200）
   */
  PageSize: number
  /**
   * 查询内容

   */
  Query?: string
}

/**
 * ModifyDoc返回参数结构体
 */
export interface ModifyDocResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签过滤器
 */
export interface AgentKnowledgeAttrLabel {
  /**
   * 属性ID
   */
  AttributeBizId?: string
  /**
   * 标签值，标签值之间是或的关系，只有匹配的，才会进行知识检索，否则报检索不到
   */
  Inputs?: Array<AgentInput>
}

/**
 * 插件参数请求结构
 */
export interface PluginToolReqParam {
  /**
   * 参数名称
   */
  Name?: string
  /**
   * 参数描述
   */
  Desc?: string
  /**
   * 参数类型，0:string, 1:int, 2:float，3:bool 4:object 5:array_string, 6:array_int, 7:array_float, 8:array_bool, 9:array_object, 99:null, 100:upspecified
   */
  Type?: number
  /**
   * 参数是否必填
   */
  IsRequired?: boolean
  /**
   * 参数默认值
   */
  DefaultValue?: string
  /**
   * 子参数,ParamType 是OBJECT 或 ARRAY<>类型有用
   */
  SubParams?: Array<PluginToolReqParam>
  /**
   * 插件参数配置是否隐藏不可见，true-隐藏不可见，false-可见
   */
  GlobalHidden?: boolean
  /**
   * OneOf类型参数
   */
  OneOf?: Array<PluginToolReqParam>
  /**
   * AnyOf类型参数
   */
  AnyOf?: Array<PluginToolReqParam>
}

/**
 * UpdateSharedKnowledge返回参数结构体
 */
export interface UpdateSharedKnowledgeResponse {
  /**
   * 共享知识库业务ID
   */
  KnowledgeBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAgent请求参数结构体
 */
export interface DeleteAgentRequest {
  /**
   * Agent的ID
   */
  AgentId: string
  /**
   * 应用ID
   */
  AppBizId?: string
}

/**
 * CheckAttributeLabelExist请求参数结构体
 */
export interface CheckAttributeLabelExistRequest {
  /**
   * 应用ID，获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 标签名称
   */
  LabelName: string
  /**
   * 标签ID
   */
  AttributeBizId: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 最后一个标签ID。用于滚动加载：是一种分批、滚动式的存在性检查机制。客户端需要持续调用接口，并每次传入上一次返回的最后一个记录的ID，直到接口明确返回“存在”或“已检查全部数据且不存在”为止。
   */
  LastLabelBizId?: string
}

/**
 * 模型详情
 */
export interface AppModelDetailInfo {
  /**
   * 模型名称
   */
  ModelName?: string
  /**
   * 模型参数
   */
  ModelParams?: ModelParams
  /**
   * 限制
   */
  HistoryLimit?: number
  /**
   * 模型别名
   */
  AliasName?: string
}

/**
 * ListApp请求参数结构体
 */
export interface ListAppRequest {
  /**
   * 应用类型；knowledge_qa - 知识问答管理
   */
  AppType?: string
  /**
   * 每页数目，整型
   */
  PageSize?: number
  /**
   * 页码，整型
   */
  PageNumber?: number
  /**
   * 关键词：应用/修改人
   */
  Keyword?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 智能体类型 dialogue：对话智能体，wechat：公众号智能体
   */
  AgentType?: string
  /**
   * 应用状态 1:未上线   2：运行中
   */
  AppStatus?: string
}

/**
 * 获取ws token label
 */
export interface GetWsTokenReq_Label {
  /**
   * 标签名
   */
  Name?: string
  /**
   * 标签值
   */
  Values?: Array<string>
}

/**
 * ListReferShareKnowledge返回参数结构体
 */
export interface ListReferShareKnowledgeResponse {
  /**
   * 共享知识库信息列表
   */
  List?: Array<KnowledgeBaseInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 节点信息
 */
export interface RunNodeInfo {
  /**
   * 节点类型，0:未指定，1:开始节点，2:API节点，3:询问节点，4:答案节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeType?: number
  /**
   * 节点ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeId?: string
  /**
   * 节点名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName?: string
  /**
   * 请求的API
注意：此字段可能返回 null，表示取不到有效值。
   */
  InvokeApi?: InvokeAPI
  /**
   * 当前节点的所有槽位的值，key：SlotID。没有值的时候也要返回空。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlotValues?: Array<ValueInfo>
}

/**
 * Agent调试信息
 */
export interface AgentDebugInfo {
  /**
   * 工具、大模型的输入信息，json
注意：此字段可能返回 null，表示取不到有效值。
   */
  Input?: string
  /**
   * 工具、大模型的输出信息，json
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: string
  /**
   * 模型名
   */
  ModelName?: string
}

/**
 * CreateDocCate返回参数结构体
 */
export interface CreateDocCateResponse {
  /**
   * 是否可新增

   */
  CanAdd?: boolean
  /**
   * 是否可编辑
   */
  CanEdit?: boolean
  /**
   * 是否可删除

   */
  CanDelete?: boolean
  /**
   * 分类业务ID
   */
  CateBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 渠道详情信息
 */
export interface ChannelListInfo {
  /**
   * 渠道类型 10000 微信订阅号 10001 微信服务号 10002 企微应用
   */
  ChannelType?: number
  /**
   * 渠道状态 1未发布 2运行中 3已下线
   */
  ChannelStatus?: number
  /**
   * 渠道名称
   */
  ChannelName?: string
  /**
   * 渠道id 数据库主键
   */
  ChannelId?: string
  /**
   * 备注
   */
  Comment?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 最后更新人
   */
  UpdatedUser?: string
  /**
   * 智能体应用可见范围，public-所有人可见 private-仅自己可见 share-通过分享可见
注意：此字段可能返回 null，表示取不到有效值。
   */
  YuanQiInfo?: YuanQi
}

/**
 * ExportQAList返回参数结构体
 */
export interface ExportQAListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateQACate返回参数结构体
 */
export interface CreateQACateResponse {
  /**
   * 是否可新增

   */
  CanAdd?: boolean
  /**
   * 是否可编辑
   */
  CanEdit?: boolean
  /**
   * 是否可删除

   */
  CanDelete?: boolean
  /**
   * 分类业务ID
   */
  CateBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListDoc请求参数结构体
 */
export interface ListDocRequest {
  /**
   * 应用ID, 获取方式参看 [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 页码(必须大于0)
   */
  PageNumber: number
  /**
   * 每页数量(取值范围1-200)
   */
  PageSize: number
  /**
   * 查询内容

输入特定标识 lke:system:untagged  将查询所有未关联标签的文档
   */
  Query?: string
  /**
   * 文档状态： 1-未生成 2-生成中 3-生成成功 4-生成失败 5-删除中 6-删除成功  7-审核中  8-审核失败 9-审核成功  10-待发布  11-发布中  12-已发布  13-学习中  14-学习失败  15-更新中  16-更新失败  17-解析中  18-解析失败  19-导入失败   20-已过期 21-超量失效 22-超量失效恢复
   */
  Status?: Array<number | bigint>
  /**
   * 查询类型 filename 文档、 attribute 标签
   */
  QueryType?: string
  /**
   * 分类ID, 调用接口[ListDocCate](https://capi.woa.com/api/detail?product=lke&version=2023-11-30&action=ListDocCate)获取
   */
  CateBizId?: string
  /**
   * 文件类型分类筛选
   */
  FileTypes?: Array<string>
  /**
   * 文档列表筛选标识位
   */
  FilterFlag?: Array<DocFilterFlag>
  /**
   * 是否只展示当前分类的数据 0不是，1是
   */
  ShowCurrCate?: number
  /**
   * 文档生效域；不检索默认为0
   */
  EnableScope?: number
}

/**
 * GetAnswerTypeDataCount返回参数结构体
 */
export interface GetAnswerTypeDataCountResponse {
  /**
   * 总消息数
   */
  Total?: number
  /**
   * 大模型直接回复总数
   */
  ModelReplyCount?: number
  /**
   * 知识型回复总数
   */
  KnowledgeCount?: number
  /**
   * 任务流回复总数
   */
  TaskFlowCount?: number
  /**
   * 搜索引擎回复总数
   */
  SearchEngineCount?: number
  /**
   * 图片理解回复总数
   */
  ImageUnderstandingCount?: number
  /**
   * 拒答回复总数
   */
  RejectCount?: number
  /**
   * 敏感回复总数
   */
  SensitiveCount?: number
  /**
   * 并发超限回复总数
   */
  ConcurrentLimitCount?: number
  /**
   * 未知问题回复总数
   */
  UnknownIssuesCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetMsgRecord返回参数结构体
 */
export interface GetMsgRecordResponse {
  /**
   * 会话记录
   */
  Records?: Array<MsgRecord>
  /**
   * session 清除关联上下文时间, 单位 ms
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionDisassociatedTimestamp?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReferShareKnowledge返回参数结构体
 */
export interface ReferShareKnowledgeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent 配置里面的模型定义
 */
export interface AgentModelInfo {
  /**
   * 模型名称
   */
  ModelName?: string
  /**
   * 模型别名
   */
  ModelAliasName?: string
  /**
   * 模型温度
   */
  Temperature?: number
  /**
   * 模型TopP
   */
  TopP?: number
  /**
   * 模型是否可用
   */
  IsEnabled?: boolean
  /**
   * 对话历史条数限制
   */
  HistoryLimit?: number
  /**
   * 模型上下文长度字符限制
   */
  ModelContextWordsLimit?: string
  /**
   * 指令长度字符限制
   */
  InstructionsWordsLimit?: number
  /**
   * 单次会话最大推理轮数
   */
  MaxReasoningRound?: number
  /**
   * 模型参数
   */
  ModelParams?: ModelParams
}

/**
 * 知识库问答插件
 */
export interface AgentKnowledgeQAPlugin {
  /**
   * 知识检索筛选范围
   */
  Filter?: AgentKnowledgeFilter
}

/**
 * 沙盒信息内容
 */
export interface SandboxContent {
  /**
   * 沙盒的URL地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 沙盒通过浏览器打开的URL地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayUrl?: string
  /**
   * 沙盒输出内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
}

/**
 * 引用来源详情
 */
export interface ReferDetail {
  /**
   * 引用ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReferBizId?: string
  /**
   * 文档类型 (1 QA, 2 文档段)
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocType?: number
  /**
   * 文档名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocName?: string
  /**
   * 分片内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageContent?: string
  /**
   * 问题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Question?: string
  /**
   * 答案
注意：此字段可能返回 null，表示取不到有效值。
   */
  Answer?: string
  /**
   * 置信度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Confidence?: number
  /**
   * 标记
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mark?: number
  /**
   * 分片高亮内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Highlights?: Array<Highlight>
  /**
   * 原始内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrgData?: string
  /**
   * 页码信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageInfos?: Array<number | bigint>
  /**
   * sheet信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  SheetInfos?: Array<string>
  /**
   * 文档ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocBizId?: string
  /**
   * 知识库ID
   */
  KnowledgeBizId?: string
}

/**
 * 共享知识库更新信息
 */
export interface KnowledgeUpdateInfo {
  /**
   * 共享知识库名称
   */
  KnowledgeName?: string
  /**
   * 共享知识库描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  KnowledgeDescription?: string
  /**
   * Embedding模型
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  EmbeddingModel?: string
  /**
   * 问答提取模型
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  QaExtractModel?: string
  /**
   * 拥有者id
   */
  OwnerStaffId?: string
}

/**
 * GetDocPreview请求参数结构体
 */
export interface GetDocPreviewRequest {
  /**
   * 文档BizID
   */
  DocBizId: string
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 存储类型: offline:离线文件，realtime:实时文件；为空默认为offline
   */
  TypeKey?: string
}

/**
 * DescribeAttributeLabel请求参数结构体
 */
export interface DescribeAttributeLabelRequest {
  /**
   * 应用ID，获取方法参看如何获取[BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)
   */
  BotBizId: string
  /**
   * 标签ID
   */
  AttributeBizId: string
  /**
   * 每次请求返回的最大标签数量​，限制单次接口返回的标签数量，避免数据量过大。取值范围：大于0。

   */
  Limit: number
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 搜索关键词，用于查询标签标准词或相似词
   */
  Query?: string
  /**
   * 滚动加载游标，上一次请求返回的最后一个标签ID
   */
  LastLabelBizId?: string
  /**
   * 查询范围 all(或者传空):标准词和相似词 standard:标准词 similar:相似词
   */
  QueryScope?: string
}

/**
 * 检索知识
 */
export interface KnowledgeSummary {
  /**
   * 1是问答 2是文档片段
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: number
  /**
   * 知识内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
}

/**
 * ListSharedKnowledge请求参数结构体
 */
export interface ListSharedKnowledgeRequest {
  /**
   * 分页序号，编码从1开始
   */
  PageNumber: number
  /**
   * 分页大小，有效范围为[1,200]
   */
  PageSize: number
  /**
   * 搜索关键字
   */
  Keyword?: string
  /**
   * 共享知识库类型，0普通，1公众号
   */
  KnowledgeTypes?: Array<number | bigint>
}

/**
 * RetryDocParse请求参数结构体
 */
export interface RetryDocParseRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 废弃
   */
  DocBizId?: string
  /**
   * 集合最大上限50个，DocBizIds有值使用DocBizIds，为空时则使用DocBizId(兼容废弃字段)
   */
  DocBizIds?: Array<string>
}

/**
 * 对话端Widget动作提交结构
 */
export interface WidgetAction {
  /**
   * Widget配置ID
   */
  WidgetId?: string
  /**
   * Widget实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  WidgetRunId?: string
  /**
   * Widget动作
   */
  ActionType?: string
  /**
   * Widget动作提交的数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Payload?: string
}

/**
 * GroupDoc请求参数结构体
 */
export interface GroupDocRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 操作对象的业务ID列表
   */
  BizIds: Array<string>
  /**
   * 分组 ID
   */
  CateBizId: string
}

/**
 * GroupQA请求参数结构体
 */
export interface GroupQARequest {
  /**
   * 应用ID
若要操作共享知识库，传KnowledgeBizId
   */
  BotBizId: string
  /**
   * QaBizID列表
   */
  QaBizIds: Array<string>
  /**
   * 分组 ID
   */
  CateBizId: string
}

/**
 * ModifyAttributeLabel请求参数结构体
 */
export interface ModifyAttributeLabelRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 标签ID
   */
  AttributeBizId: string
  /**
   * 标签名称
   */
  AttrName: string
  /**
   * 标签标识 （已作废）
   */
  AttrKey?: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 删除的标签值
   */
  DeleteLabelBizIds?: Array<string>
  /**
   * 新增或编辑的标签
   */
  Labels?: Array<AttributeLabel>
}

/**
 * 下拉框选项
 */
export interface Option {
  /**
   * 文本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Text?: string
  /**
   * 值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 文件字符数
注意：此字段可能返回 null，表示取不到有效值。
   */
  CharSize?: string
  /**
   * 文件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileType?: string
}

/**
 * ListUsageCallDetail请求参数结构体
 */
export interface ListUsageCallDetailRequest {
  /**
   * 模型标识
   */
  ModelName: string
  /**
   * 页码（从1开始）
   */
  PageNumber: number
  /**
   * 分页数量(最大值1000)
   */
  PageSize: number
  /**
   * 开始时间(废弃)
   */
  StartTime?: string
  /**
   * 结束时间(废弃)
   */
  EndTime?: string
  /**
   * uin列表
   */
  UinAccount?: Array<string>
  /**
   * 应用ID列表
   */
  AppBizIds?: Array<string>
  /**
   * 调用类型列表
   */
  CallType?: string
  /**
   * 筛选子场景
   */
  SubScenes?: Array<string>
  /**
   * 应用类型(knowledge_qa应用管理， shared_knowlege 共享知识库)
   */
  AppType?: string
  /**
   * 账单明细对应的自定义tag
   */
  BillingTag?: string
  /**
   * 空间id
   */
  SpaceId?: string
  /**
   * 开始时间戳, 单位为秒
   */
  StatStartTime?: number
  /**
   * 开始时间戳, 单位为秒
   */
  StatEndTime?: number
}

/**
 * GetTaskStatus返回参数结构体
 */
export interface GetTaskStatusResponse {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务类型
   */
  TaskType?: string
  /**
   * 任务状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 任务消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
  /**
   * 任务参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Params?: TaskParams
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeKnowledgeUsagePieGraph返回参数结构体
 */
export interface DescribeKnowledgeUsagePieGraphResponse {
  /**
   * 所有应用已用的字符总数
   */
  AvailableCharSize?: string
  /**
   * 应用饼图详情列表
   */
  List?: Array<KnowledgeCapacityPieGraphDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetVarList请求参数结构体
 */
export interface GetVarListRequest {
  /**
   * 应用ID
   */
  AppBizId: string
  /**
   * 变量ID数组
   */
  VarIds?: Array<string>
  /**
   * 按变量名称关键词搜索
   */
  Keyword?: string
  /**
   * 起始偏移量（默认0）
   */
  Offset?: number
  /**
   * 限定数量（默认15）
   */
  Limit?: number
  /**
   * 按变量类型过滤，默认查询所有类型(STRING,INT,FLOAT,BOOL,OBJECT,ARRAY_STRING,ARRAY_INT,ARRAY_FLOAT,ARRAY_BOOL,ARRAY_OBJECT,FILE,DOCUMENT,IMAGE,AUDIO)
   */
  VarType?: string
  /**
   * 是否需要内部变量(默认false)
   */
  NeedInternalVar?: boolean
  /**
   * 变量类型
   */
  VarModuleType?: number
}

/**
 * 标签信息
 */
export interface ClassifyLabel {
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 标签描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 标签取值范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  Values?: Array<string>
}

/**
 * ListReleaseQAPreview返回参数结构体
 */
export interface ListReleaseQAPreviewResponse {
  /**
   * 文档数量
   */
  Total?: string
  /**
   * 文档列表
   */
  List?: Array<ReleaseQA>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApp请求参数结构体
 */
export interface CreateAppRequest {
  /**
   * 应用类型；knowledge_qa-知识问答管理
   */
  AppType: string
  /**
   * 应用基础配置
   */
  BaseConfig: BaseConfig
  /**
   * 应用模式 standard:标准模式, agent: agent模式，single_workflow：单工作流模式
   */
  Pattern?: string
  /**
   * 智能体类型 dialogue 对话式智能体，wechat 公众号智能体
   */
  AgentType?: string
}

/**
 * DeleteApp返回参数结构体
 */
export interface DeleteAppResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 调用类型
 */
export interface CallDetail {
  /**
   * 关联ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 调用时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallTime?: string
  /**
   * 总token消耗
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalTokenUsage?: number
  /**
   * 输入token消耗
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputTokenUsage?: number
  /**
   * 输出token消耗
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputTokenUsage?: number
  /**
   * 搜索服务调用次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  SearchUsage?: number
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * 调用类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  CallType?: string
  /**
   * 账号
注意：此字段可能返回 null，表示取不到有效值。
   */
  UinAccount?: string
  /**
   * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppName?: string
  /**
   * 总消耗页数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageUsage?: number
  /**
   * 筛选子场景
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubScene?: string
  /**
   * 账单明细对应的自定义tag
   */
  BillingTag?: string
}

/**
 * 用户基础信息
 */
export interface UserBaseInfo {
  /**
   * 用户ID
   */
  UserBizId?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
}

/**
 * 文档片段
 */
export interface DocSegment {
  /**
   * 片段ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 业务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessId?: string
  /**
   * 文件类型(markdown,word,txt)
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileType?: string
  /**
   * 文档切片类型(segment-文档切片 table-表格)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SegmentType?: string
  /**
   * 标题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * 段落内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageContent?: string
  /**
   * 段落原文
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrgData?: string
  /**
   * 文章ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocId?: string
  /**
   * 文档业务ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocBizId?: string
  /**
   * 文档链接
注意：此字段可能返回 null，表示取不到有效值。
   */
  DocUrl?: string
  /**
   * 文档的自定义链接
   */
  WebUrl?: string
  /**
   * 页码信息
   */
  PageInfos?: Array<number | bigint>
}

/**
 * DescribeUnsatisfiedReplyContext返回参数结构体
 */
export interface DescribeUnsatisfiedReplyContextResponse {
  /**
   * 不满意回复上下文
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<Context>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDocAttrRange请求参数结构体
 */
export interface ModifyDocAttrRangeRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizIds: Array<string>
  /**
   * 属性标签适用范围 1：全部，2：按条件
   */
  AttrRange: number
  /**
   * 属性标签引用
   */
  AttrLabels: Array<AttrLabelRefer>
}

/**
 * DescribeKnowledgeUsagePieGraph请求参数结构体
 */
export interface DescribeKnowledgeUsagePieGraphRequest {
  /**
   * 应用ID数组
   */
  AppBizIds?: Array<string>
  /**
   * 空间ID，用于限定查询范围。不填时查询所有空间的数据
   */
  SpaceId?: string
}

/**
 * 导出知识标签过滤器
 */
export interface AttributeFilters {
  /**
   * 检索，属性或标签名称
   */
  Query?: string
}

/**
 * 更新时间策略
 */
export interface UpdatePeriodInfo {
  /**
   * 文档更新频率类型：0不更新 -H 小时粒度,当前仅支持24(1天)，72(3天)，168(7天) 仅source=2 腾讯文档类型有效
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatePeriodH?: number
}

/**
 * IsTransferIntent返回参数结构体
 */
export interface IsTransferIntentResponse {
  /**
   * 是否意图转人工
   */
  Hit?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApp请求参数结构体
 */
export interface DescribeAppRequest {
  /**
   * 应用ID
   */
  AppBizId: string
  /**
   * 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取
   */
  AppType?: string
  /**
   * 是否发布后的配置
   */
  IsRelease?: boolean
}

/**
 * DescribeNodeRun请求参数结构体
 */
export interface DescribeNodeRunRequest {
  /**
   * 应用ID
   */
  AppBizId: string
  /**
   * 节点运行实例ID
   */
  NodeRunId: string
}

/**
 * DescribeConcurrencyUsageGraph返回参数结构体
 */
export interface DescribeConcurrencyUsageGraphResponse {
  /**
   * X轴: 时间区域；根据查询条件的粒度返回“分/小时/日”两种区间范围
   */
  X?: Array<string>
  /**
   * 可用并发y轴坐标
   */
  AvailableY?: Array<number | bigint>
  /**
   * 成功调用并发y轴坐标
   */
  SuccessCallY?: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent 的插件信息
 */
export interface AgentPluginInfo {
  /**
   * 插件id
   */
  PluginId?: string
  /**
   * 应用配置的插件header信息
   */
  Headers?: Array<AgentPluginHeader>
  /**
   * 插件调用LLM时使用的模型配置，一般用于指定知识库问答插件的生成模型
   */
  Model?: AgentModelInfo
  /**
   * 插件信息类型; 0: 未指定类型; 1: 知识库问答插件
   */
  PluginInfoType?: number
  /**
   * 知识库问答插件配置
   */
  KnowledgeQa?: AgentKnowledgeQAPlugin
  /**
   * 是否使用一键授权
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableRoleAuth?: boolean
  /**
   * 应用配置的插件query信息
   */
  Query?: Array<AgentPluginQuery>
  /**
   * MCP类型
   */
  McpType?: number
}

/**
 * 知识摘要应用配置
 */
export interface SummaryConfig {
  /**
   * 模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model?: AppModel
  /**
   * 知识摘要输出配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Output?: SummaryOutput
  /**
   * 欢迎语，200字符以内
注意：此字段可能返回 null，表示取不到有效值。
   */
  Greeting?: string
}

/**
 * RetryDocAudit返回参数结构体
 */
export interface RetryDocAuditResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RetryRelease返回参数结构体
 */
export interface RetryReleaseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 节点运行的基本信息
 */
export interface NodeRunBase {
  /**
   * 节点运行的ID
   */
  NodeRunId?: string
  /**
   * 节点ID
   */
  NodeId?: string
  /**
   * 工作流运行实例的ID
   */
  WorkflowRunId?: string
  /**
   * 节点名称
   */
  NodeName?: string
  /**
   * 节点类型。
1： 开始节点
2：参数提取节点
3：大模型节点
4：知识问答节点
5：知识检索节点
6：标签提取节点
7：代码执行节点
8：工具节点
9：逻辑判断节点
10：回复节点
11：选项卡节点
12：循环节点
13：意图识别节点
14：工作流节点
15：插件节点
16：结束节点
17: 变量聚合节点数据
18: 批处理节点
19: 消息队列节点
   */
  NodeType?: number
  /**
   * 运行状态。0: 初始状态；1: 运行中；2: 运行成功； 3: 运行失败； 4: 已取消
   */
  State?: number
  /**
   * 错误码
   */
  FailCode?: string
  /**
   * 错误信息
   */
  FailMessage?: string
  /**
   * 消耗时间（毫秒）
   */
  CostMilliseconds?: number
  /**
   * 消耗的token总数
   */
  TotalTokens?: number
}

/**
 * 智能通话
 */
export interface AICallConfig {
  /**
   * 启用语音互动功能
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableVoiceInteract?: boolean
  /**
   * 启用语音通话
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableVoiceCall?: boolean
  /**
   * 启用数智人
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableDigitalHuman?: boolean
  /**
   * 音色配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Voice?: VoiceConfig
  /**
   * 数智人配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  DigitalHuman?: DigitalHumanConfig
}

/**
 * 临时密钥结构
 */
export interface Credentials {
  /**
   * token
注意：此字段可能返回 null，表示取不到有效值。
   */
  Token?: string
  /**
   * 临时证书密钥ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpSecretId?: string
  /**
   * 临时证书密钥Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmpSecretKey?: string
  /**
   * 临时证书appid
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppId?: number
}

/**
 * 应用详情
 */
export interface AppInfo {
  /**
   * 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppType?: string
  /**
   * 应用类型描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppTypeDesc?: string
  /**
   * 应用ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppBizId?: string
  /**
   * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 应用头像
注意：此字段可能返回 null，表示取不到有效值。
   */
  Avatar?: string
  /**
   * 应用描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Desc?: string
  /**
   * 应用状态，1：未上线，2：运行中，3：停用
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppStatus?: number
  /**
   * 状态说明
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppStatusDesc?: string
  /**
   * 修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 最后修改人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 模型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelName?: string
  /**
   * 生成模型别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAliasName?: string
  /**
   * 应用模式 standard:标准模式, agent: agent模式，single_workflow：单工作流模式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Pattern?: string
  /**
   * 思考模型别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ThoughtModelAliasName?: string
  /**
   * 权限位信息
   */
  PermissionIds?: Array<string>
  /**
   * 创建人昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
}

/**
 * DescribeSharedKnowledge返回参数结构体
 */
export interface DescribeSharedKnowledgeResponse {
  /**
   * 知识库详情列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Info?: KnowledgeDetailInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Nl2Sql模型配置
 */
export interface NL2SQLModelConfig {
  /**
   * 模型配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Model?: AppModelDetailInfo
}

/**
 * 发布列表详情
 */
export interface ListReleaseItem {
  /**
   * 版本ID
   */
  ReleaseBizId?: string
  /**
   * 发布人
   */
  Operator?: string
  /**
   * 发布描述
   */
  Desc?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
  /**
   * 发布状态，1：待发布，2：发布中，3：发布成功，5：发布失败
   */
  Status?: number
  /**
   * 发布状态描述
   */
  StatusDesc?: string
  /**
   * 失败原因
   */
  Reason?: string
  /**
   * 发布成功数
   */
  SuccessCount?: number
  /**
   * 发布失败数
   */
  FailCount?: number
  /**
   * 版本号，格式是 v{date}{time}
   */
  ReleaseVersion?: string
  /**
   * 是否可还原
   */
  CanRollback?: boolean
}

/**
 * DescribeConcurrencyUsage返回参数结构体
 */
export interface DescribeConcurrencyUsageResponse {
  /**
   * 可用并发数上限
   */
  AvailableConcurrency?: number
  /**
   * 并发峰值
   */
  ConcurrencyPeak?: number
  /**
   * 超出可用并发数上限的次数
   */
  ExceedUsageTime?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用关联插件信息
 */
export interface KnowledgeQaPlugin {
  /**
   * 插件ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PluginId?: string
  /**
   * 插件名称
   */
  PluginName?: string
  /**
   * 插件图标
   */
  PluginIcon?: string
  /**
   * 工具ID
   */
  ToolId?: string
  /**
   * 工具名称
   */
  ToolName?: string
  /**
   * 工具描述
   */
  ToolDesc?: string
  /**
   * 工具输入参数
   */
  Inputs?: Array<PluginToolReqParam>
  /**
   * 插件是否和知识库绑定
   */
  IsBindingKnowledge?: boolean
}

/**
 * UpdateVar请求参数结构体
 */
export interface UpdateVarRequest {
  /**
   * 应用ID
   */
  AppBizId: string
  /**
   * 变量ID
   */
  VarId: string
  /**
   * 变量名称，最大支持50个字符
   */
  VarName: string
  /**
   * 参数描述
   */
  VarDesc?: string
  /**
   * 参数类型
   */
  VarType?: string
  /**
   * 自定义变量默认值
   */
  VarDefaultValue?: string
  /**
   * 自定义变量文件默认名称
   */
  VarDefaultFileName?: string
  /**
   * 变量类型
   */
  VarModuleType?: number
}

/**
 * DeleteQACate请求参数结构体
 */
export interface DeleteQACateRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 分类业务ID
   */
  CateBizId: string
}

/**
 * GetWsToken请求参数结构体
 */
export interface GetWsTokenRequest {
  /**
   * 接入类型， 5-API 访客，目前仅支持传5
   */
  Type: number
  /**
   *   应用AppKey </br>   获取方式:</br>   1、应用发布后在应用页面[发布管理]-[调用信息]-[API管理]处获取</br>   2、参考 https://cloud.tencent.com/document/product/1759/109469 第二项
   */
  BotAppKey?: string
  /**
   * 访客ID（外部输入，建议唯一，标识当前接入会话的用户）
长度限制： string(64)，即最长不超过64个字符
   */
  VisitorBizId?: string
  /**
   * 知识标签，用于知识库中知识的检索过滤。该字段即将下线，请使用对话端接口中的 custom_variables 字段替代该字段。
   * @deprecated
   */
  VisitorLabels?: Array<GetWsTokenReq_Label>
}

/**
 * 音色参数
 */
export interface VoiceConfig {
  /**
   * 公有云音色id
注意：此字段可能返回 null，表示取不到有效值。
   */
  VoiceType?: number
  /**
   * 音色key
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimbreKey?: string
  /**
   * 音色名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  VoiceName?: string
}

/**
 * DescribeTokenUsage返回参数结构体
 */
export interface DescribeTokenUsageResponse {
  /**
   * 总token消耗量
   */
  TotalTokenUsage?: number
  /**
   * 输入token消耗
   */
  InputTokenUsage?: number
  /**
   * 输出token消耗
   */
  OutputTokenUsage?: number
  /**
   * 接口调用次数
   */
  ApiCallStats?: number
  /**
   * 搜索服务调用次数
   */
  SearchUsage?: number
  /**
   * 文档解析消耗页数
   */
  PageUsage?: number
  /**
   * 拆分token消耗量
   */
  SplitTokenUsage?: number
  /**
   * Rag检索次数
   */
  RagSearchUsage?: number
  /**
   * 联网搜索次数
   */
  InternetSearchUsage?: number
  /**
   * dosage配额限制
   */
  DosageTypeLimit?: number
  /**
   * dosage当前用量
   */
  DosageTypeCurr?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListReleaseConfigPreview请求参数结构体
 */
export interface ListReleaseConfigPreviewRequest {
  /**
   * 应用ID（获取方法参看如何获取   [BotBizId](https://cloud.tencent.com/document/product/1759/109469#4eecb8c1-6ce4-45f5-8fa2-b269449d8efa)）
   */
  BotBizId: string
  /**
   * 页码（必须大于0）
   */
  PageNumber: number
  /**
   * 每页数量（取值范围为1-200）
   */
  PageSize: number
  /**
   * 查询内容关键字，用于模糊查询，若未提供该参数，默认为查询全部。
   */
  Query?: string
  /**
   * 发布单ID（可以通过[ListRelease](https://cloud.tencent.com/document/product/1759/105077)获得）
   */
  ReleaseBizId?: string
  /**
   * 状态(1新增2更新3删除)
   */
  Actions?: Array<number | bigint>
  /**
   * 开始时间。Unix 时间戳，单位是秒，默认为空。
   */
  StartTime?: string
  /**
   * 结束时间。Unix 时间戳，单位是秒，默认为空。
   */
  EndTime?: string
  /**
   * 发布状态(2 待发布 3 发布中 4 已发布 5 发布失败)，默认为空
   */
  ReleaseStatus?: Array<number | bigint>
}

/**
 * 知识库高级设置
 */
export interface KnowledgeAdvancedConfig {
  /**
   * 重排序模型
注意：此字段可能返回 null，表示取不到有效值。
   */
  RerankModel?: string
  /**
   * 召回数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  RerankRecallNum?: number
}

/**
 * StopWorkflowRun请求参数结构体
 */
export interface StopWorkflowRunRequest {
  /**
   * 应用ID
   */
  AppBizId: string
  /**
   * 工作流运行实例ID
   */
  WorkflowRunId: string
}

/**
 * 应用基础信息
 */
export interface AppBaseInfo {
  /**
   * 应用ID
   */
  AppBizId?: string
  /**
   * 应用名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppName?: string
}

/**
 * GroupDoc返回参数结构体
 */
export interface GroupDocResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListUsageCallDetail返回参数结构体
 */
export interface ListUsageCallDetailResponse {
  /**
   * 列表总数
   */
  Total?: number
  /**
   * 列表
   */
  List?: Array<CallDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAppKnowledgeCount返回参数结构体
 */
export interface GetAppKnowledgeCountResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAppKnowledgeDetail请求参数结构体
 */
export interface ListAppKnowledgeDetailRequest {
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 页面大小
   */
  PageSize: number
  /**
   * 应用ID列表
   */
  AppBizIds?: Array<string>
  /**
   * 空间列表
   */
  SpaceId?: string
}

/**
 * 工作流运行实例详情
 */
export interface WorkflowRunDetail {
  /**
   * 运行环境。0: 测试环境； 1: 正式环境
   */
  RunEnv?: number
  /**
   * 应用ID
   */
  AppBizId?: string
  /**
   * 工作流运行实例的ID
   */
  WorkflowRunId?: string
  /**
   * 所属工作流ID
   */
  WorkflowId?: string
  /**
   * 名称
   */
  Name?: string
  /**
   * 工作流输出
   */
  Output?: string
  /**
   * 运行状态。0: 排队中；1: 运行中；2: 运行成功；3: 运行失败； 4: 已取消
   */
  State?: number
  /**
   * 错误信息
   */
  FailMessage?: string
  /**
   * 消耗的token总数
   */
  TotalTokens?: number
  /**
   * 创建时间（毫秒时间戳）
   */
  CreateTime?: string
  /**
   * 开始时间（毫秒时间戳）
   */
  StartTime?: string
  /**
   * 结束时间（毫秒时间戳）
   */
  EndTime?: string
  /**
   * 工作流画布Json
   * @deprecated
   */
  DialogJson?: string
  /**
   * 用户的输入
   */
  Query?: string
  /**
   * 主模型名称
   */
  MainModelName?: string
  /**
   * API参数配置
   */
  CustomVariables?: Array<CustomVariable>
  /**
   * 工作流的流程图
   */
  WorkflowGraph?: string
}

/**
 * 知识库详情信息
 */
export interface KnowledgeDetailInfo {
  /**
   * 知识库信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Knowledge?: KnowledgeBaseInfo
  /**
   * 应用列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AppList?: Array<AppBaseInfo>
  /**
   * 用户信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  User?: UserBaseInfo
  /**
   * 权限位信息
   */
  PermissionIds?: Array<string>
}

/**
 * SaveDoc返回参数结构体
 */
export interface SaveDocResponse {
  /**
   * 文档ID
   */
  DocBizId?: string
  /**
   * 导入错误信息
   */
  ErrorMsg?: string
  /**
   * 错误链接
   */
  ErrorLink?: string
  /**
   * 错误链接文本
   */
  ErrorLinkText?: string
  /**
   * 重复类型，0：未重复，其他取值请参考入参DuplicateFileHandle结构体的CheckType字段
   */
  DuplicateFileCheckType?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 获取不满意回复上下文响
 */
export interface Context {
  /**
   * 消息记录ID信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordBizId?: string
  /**
   * 是否为用户
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsVisitor?: boolean
  /**
   * 昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NickName?: string
  /**
   * 头像
注意：此字段可能返回 null，表示取不到有效值。
   */
  Avatar?: string
  /**
   * 消息内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * 文档信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FileInfos?: Array<MsgFileInfo>
  /**
   * 回复方式，15：澄清确认回复
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplyMethod?: number
}

/**
 * ModifyQACate返回参数结构体
 */
export interface ModifyQACateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckAttributeLabelRefer返回参数结构体
 */
export interface CheckAttributeLabelReferResponse {
  /**
   * 是否引用
   */
  IsRefer?: boolean
  /**
   * 引用的工作流详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<AttributeLabelRefByWorkflow>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 发布拒答
 */
export interface ReleaseRejectedQuestion {
  /**
   * 问题
注意：此字段可能返回 null，表示取不到有效值。
   */
  Question?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Action?: number
  /**
   * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActionDesc?: string
  /**
   * 失败原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: string
}

/**
 * DescribeSegments请求参数结构体
 */
export interface DescribeSegmentsRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 文档片段ID
   */
  SegBizId?: Array<string>
}

/**
 * 不满意回复检索过滤
 */
export interface Filters {
  /**
   * 检索，用户问题或答案
   */
  Query?: string
  /**
   * 错误类型检索

   */
  Reasons?: Array<string>
  /**
   * 处理状态 0-待处理 1-已拒答 2-已忽略 3-已添加为新问答 4-已添加为相似问
   */
  HandlingStatuses?: Array<number | bigint>
}

/**
 * IgnoreUnsatisfiedReply返回参数结构体
 */
export interface IgnoreUnsatisfiedReplyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Agent转交高级设置
 */
export interface AgentHandoffAdvancedSetting {
  /**
   * 对话流转策略；0-由上一轮回复用户的 Agent 继续发起，1- 回到主Agent
   */
  ConversationPolicy?: number
}
