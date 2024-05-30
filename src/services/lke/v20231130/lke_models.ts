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
 * ModifyQAAttrRange返回参数结构体
 */
export interface ModifyQAAttrRangeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetWsToken返回参数结构体
 */
export interface GetWsTokenResponse {
  /**
   * token值
   */
  Token?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CheckAttributeLabelExist请求参数结构体
 */
export interface CheckAttributeLabelExistRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 属性名称
   */
  LabelName: string
  /**
   * 属性ID
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
   * 滚动加载，最后一个属性标签ID
   */
  LastLabelBizId?: string
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
   * 属性标签适用范围

   */
  AttrRange?: number
  /**
   * 属性标签
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ResetSession返回参数结构体
 */
export interface ResetSessionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeReleaseInfo请求参数结构体
 */
export interface DescribeReleaseInfoRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
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
   * 机器人ID
   */
  BotBizId: string
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
   */
  ImageUrls?: Array<string>
  /**
   * 当次 token 统计信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  TokenStat?: TokenStat
  /**
   * 回复方式
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
 * ExportQAList返回参数结构体
 */
export interface ExportQAListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 机器人回复
注意：此字段可能返回 null，表示取不到有效值。
   */
  Answer?: string
  /**
   * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Reasons?: Array<string>
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
 * ModifyDocAttrRange返回参数结构体
 */
export interface ModifyDocAttrRangeResponse {
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
 * 属性标签引用信息
 */
export interface AttrLabelRefer {
  /**
   * 属性标签来源，1：属性标签
   */
  Source?: number
  /**
   * 属性ID
   */
  AttributeBizId?: string
  /**
   * 标签ID
   */
  LabelBizIds?: Array<string>
}

/**
 * DescribeUnsatisfiedReplyContext请求参数结构体
 */
export interface DescribeUnsatisfiedReplyContextRequest {
  /**
   * 机器人ID
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
   * 机器人ID
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
}

/**
 * ListApp请求参数结构体
 */
export interface ListAppRequest {
  /**
   * 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取
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
}

/**
 * 属性标签详情信息
 */
export interface AttrLabel {
  /**
   * 属性标签来源
注意：此字段可能返回 null，表示取不到有效值。
   */
  Source?: number
  /**
   * 属性ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrBizId?: string
  /**
   * 属性标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrKey?: string
  /**
   * 属性名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrName?: string
  /**
   * 标签ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<Label>
}

/**
 * ModifyQAAttrRange请求参数结构体
 */
export interface ModifyQAAttrRangeRequest {
  /**
   * 机器人ID
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
 * ModifyDoc返回参数结构体
 */
export interface ModifyDocResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 检索配置
 */
export interface KnowledgeQaSearch {
  /**
   * 知识来源 doc：文档，qa：问答  taskflow：业务流程，search：搜索增强
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
}

/**
 * CreateCorp返回参数结构体
 */
export interface CreateCorpResponse {
  /**
   * 企业ID
   */
  CorpBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListQA请求参数结构体
 */
export interface ListQARequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页大小
   */
  PageSize: number
  /**
   * 查询问题
   */
  Query?: string
  /**
   * 校验状态(1未校验2采纳3不采纳)
   */
  AcceptStatus?: Array<number | bigint>
  /**
   * 发布状态(2待发布 3发布中 4已发布 7审核中 8审核失败 9人工申述中 11人工申述失败)
   */
  ReleaseStatus?: Array<number | bigint>
  /**
   * 文档ID
   */
  DocBizId?: string
  /**
   * 来源(1 文档生成 2 批量导入 3 手动添加)
   */
  Source?: number
  /**
   * 查询答案
   */
  QueryAnswer?: string
  /**
   * QA业务ID列表
   */
  QaBizIds?: Array<string>
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
}

/**
 * ListUnsatisfiedReply请求参数结构体
 */
export interface ListUnsatisfiedReplyRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 分页数量
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
   * 用户请求(问题或答案)
   */
  Query?: string
  /**
   * 错误类型检索
   */
  Reasons?: Array<string>
}

/**
 * DeleteQA请求参数结构体
 */
export interface DeleteQARequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 问答ID
   */
  QaBizIds: Array<string>
}

/**
 * ParseDoc请求参数结构体
 */
export interface ParseDocRequest {
  /**
   * 文件名称(需要包括文件后缀, 最大长度1024字节)
   */
  Name: string
  /**
   * 文件下载链接 (支持的文件类型: docx, txt, markdown, pdf), 该地址需要外网可以直接无状态访问
   */
  Url: string
  /**
   * 任务ID, 用于幂等去重, 业务自行定义(最大长度64字节)
   */
  TaskId: string
  /**
   * 切分策略
   */
  Policy?: string
  /**
   * 默认值: parse
   * @deprecated
   */
  Operate?: string
}

/**
 * ListRelease请求参数结构体
 */
export interface ListReleaseRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页数量
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
 * ModifyQA请求参数结构体
 */
export interface ModifyQARequest {
  /**
   * 机器人ID
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
   * 属性标签适用范围 1：全部，2：按条件
   */
  AttrRange?: number
  /**
   * 属性标签引用
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
   * 有效开始时间，unix时间戳
   */
  ExpireStart?: string
  /**
   * 有效结束时间，unix时间戳，0代表永久有效
   */
  ExpireEnd?: string
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
 * GetDocPreview请求参数结构体
 */
export interface GetDocPreviewRequest {
  /**
   * 文档业务ID
   */
  DocBizId: string
  /**
   * 机器人ID
   */
  BotBizId: string
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
 * DescribeCorp请求参数结构体
 */
export type DescribeCorpRequest = null

/**
 * ListAppCategory返回参数结构体
 */
export interface ListAppCategoryResponse {
  /**
   * 应用类型列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List?: Array<ListAppCategoryRspOption>
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAttributeLabel请求参数结构体
 */
export interface DescribeAttributeLabelRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 属性ID
   */
  AttributeBizId: string
  /**
   * 每次加载的数量
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
   * 查询标签或相似标签
   */
  Query?: string
  /**
   * 滚动加载游标的标签ID
   */
  LastLabelBizId?: string
}

/**
 * CreateQA请求参数结构体
 */
export interface CreateQARequest {
  /**
   * 机器人ID
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
   * 属性标签适用范围 1：全部，2：按条件
   */
  AttrRange: number
  /**
   * 自定义参数
   */
  CustomParam?: string
  /**
   * 属性标签引用
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
   * 有效开始时间，unix时间戳
   */
  ExpireStart?: string
  /**
   * 有效结束时间，unix时间戳，0代表永久有效
   */
  ExpireEnd?: string
}

/**
 * CreateCorp请求参数结构体
 */
export interface CreateCorpRequest {
  /**
   * 企业全称
   */
  FullName: string
  /**
   * 联系人名称
   */
  ContactName: string
  /**
   * 联系人邮箱
   */
  Email?: string
  /**
   * 联系人手机号
   */
  Telephone?: string
}

/**
 * RetryDocParse请求参数结构体
 */
export interface RetryDocParseRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizId: string
}

/**
 * QueryRewrite返回参数结构体
 */
export interface QueryRewriteResponse {
  /**
   * 改写结果
   */
  Content?: string
  /**
   * 消耗量，返回输入token数，输出token数以及总token数
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
}

/**
 * DeleteAttributeLabel请求参数结构体
 */
export interface DeleteAttributeLabelRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 属性ID
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
   * 机器人业务ID
   */
  BotBizId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 文档状态(5审核通过 7审核中 8审核不通过 9审核通过 10待发布 11发布中 12发布成功 13学习中 14学习失败)

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
   * 属性标签适用范围 1：全部，2：按条件范围
   */
  AttrRange?: number
  /**
   * 属性标签
   */
  AttrLabels?: Array<AttrLabel>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRelease请求参数结构体
 */
export interface CreateReleaseRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 发布描述
   */
  Desc?: string
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
}

/**
 * CheckAttributeLabelRefer请求参数结构体
 */
export interface CheckAttributeLabelReferRequest {
  /**
   * 机器人ID
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
   * 属性标签
   */
  LabelBizId?: string
  /**
   * 属性ID
   */
  AttributeBizId?: Array<string>
}

/**
 * ModifyQACate请求参数结构体
 */
export interface ModifyQACateRequest {
  /**
   * 机器人ID
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
 * ModifyAttributeLabel请求参数结构体
 */
export interface ModifyAttributeLabelRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 属性ID
   */
  AttributeBizId: string
  /**
   * 属性标识
   */
  AttrKey: string
  /**
   * 属性名称
   */
  AttrName: string
  /**
   * 登录用户主账号(集成商模式必填)
   */
  LoginUin?: string
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 删除的属性标签
   */
  DeleteLabelBizIds?: Array<string>
  /**
   * 新增或编辑的属性标签
   */
  Labels?: Array<AttributeLabel>
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
   * 机器人ID
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
}

/**
 * 属性标签
 */
export interface AttributeLabel {
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
  /**
   * 相似标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SimilarLabels?: Array<string>
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
 * 消耗量
 */
export interface Usage {
  /**
   * 文档页数
   */
  TotalPages?: number
  /**
   * 输入token数
   */
  InputTokens?: number
  /**
   * 输出token数
   */
  OutputTokens?: number
  /**
   * 总token数
   */
  TotalTokens?: number
}

/**
 * ResetSession请求参数结构体
 */
export interface ResetSessionRequest {
  /**
   * 会话ID
   */
  SessionId: string
  /**
   * 是否仅清空会话关联
   */
  IsOnlyEmptyTheDialog?: boolean
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
 * DeleteQACate返回参数结构体
 */
export interface DeleteQACateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * QueryParseDocResult返回参数结构体
 */
export interface QueryParseDocResultResponse {
  /**
   * 等待 / 执行中 / 成功 / 失败
   */
  Status?: string
  /**
   * 解析后的文件内容
   */
  Name?: string
  /**
   * 文件下载地址
   */
  Url?: string
  /**
   * 解析失败原因
   */
  Reason?: string
  /**
   * 消耗量，输出页数
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * GenerateQA返回参数结构体
 */
export interface GenerateQAResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeDoc请求参数结构体
 */
export interface DescribeDocRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizId: string
}

/**
 * RetryDocAudit请求参数结构体
 */
export interface RetryDocAuditRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizId: string
}

/**
 * SaveDoc请求参数结构体
 */
export interface SaveDocRequest {
  /**
   * 应用ID
   */
  BotBizId: string
  /**
   * 文件名
   */
  FileName: string
  /**
   * 文件类型(md|txt|docx|pdf|xlsx)
   */
  FileType: string
  /**
   * 平台cos路径，与DescribeStorageCredential接口查询UploadPath参数保持一致
   */
  CosUrl: string
  /**
   * ETag 全称为 Entity Tag，是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化
   */
  ETag: string
  /**
   * cos_hash x-cos-hash-crc64ecma 头部中的 CRC64编码进行校验上传到云端的文件和本地文件的一致性
   */
  CosHash: string
  /**
   * 文件大小
   */
  Size: string
  /**
   * 属性标签适用范围 1：全部，2：按条件范围
   */
  AttrRange: number
  /**
   * 来源(0 源文件导入 1 网页导入)
   */
  Source?: number
  /**
   * 网页(或自定义链接)地址
   */
  WebUrl?: string
  /**
   * 属性标签引用
   */
  AttrLabels?: Array<AttrLabelRefer>
  /**
   * 外部引用链接类型 0：系统链接 1：自定义链接
值为1时，WebUrl 字段不能为空，否则不生效。
   */
  ReferUrlType?: number
  /**
   * 有效开始时间，unix时间戳
   */
  ExpireStart?: string
  /**
   * 有效结束时间，unix时间戳，0代表永久有效
   */
  ExpireEnd?: string
  /**
   * 是否引用链接
   */
  IsRefer?: boolean
  /**
   * 文档操作类型：1：批量导入；2:文档导入
   */
  Opt?: number
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
 * RetryDocParse返回参数结构体
 */
export interface RetryDocParseResponse {
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
 * GetEmbedding返回参数结构体
 */
export interface GetEmbeddingResponse {
  /**
   * 特征
   */
  Data?: Array<EmbeddingObject>
  /**
   * 消耗量，返回TotalToken
   */
  Usage?: Usage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ExportUnsatisfiedReply请求参数结构体
 */
export interface ExportUnsatisfiedReplyRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 勾选导出ID列表
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
   * 机器人ID
   */
  BotBizId: string
  /**
   * 发布业务ID
   */
  ReleaseBizId: string
}

/**
 * CreateApp请求参数结构体
 */
export interface CreateAppRequest {
  /**
   * 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取
   */
  AppType: string
  /**
   * 应用基础配置
   */
  BaseConfig: BaseConfig
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
 * DescribeRelease请求参数结构体
 */
export interface DescribeReleaseRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 发布详情
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
   * 来源
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
 * ListAppCategory请求参数结构体
 */
export type ListAppCategoryRequest = null

/**
 * ListReleaseConfigPreview请求参数结构体
 */
export interface ListReleaseConfigPreviewRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页数量
   */
  PageSize: number
  /**
   * 查询内容
   */
  Query?: string
  /**
   * 发布单ID
   */
  ReleaseBizId?: string
  /**
   * 状态(1新增2更新3删除)
   */
  Actions?: Array<number | bigint>
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 发布状态
   */
  ReleaseStatus?: Array<number | bigint>
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
 * ModifyRejectedQuestion返回参数结构体
 */
export interface ModifyRejectedQuestionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListReleaseDocPreview请求参数结构体
 */
export interface ListReleaseDocPreviewRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页数量
   */
  PageSize: number
  /**
   * 查询内容
   */
  Query?: string
  /**
   * 发布业务ID
   */
  ReleaseBizId?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 状态(1新增2修改3删除)
   */
  Actions?: Array<number | bigint>
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
 * 一条message代表一条对话记录
role表示角色  user或者assistant
content表示对话内容
 */
export interface Message {
  /**
   * role表示角色  user标识用户提问，assistant标识返回的答案

注意：此字段可能返回 null，表示取不到有效值。
   */
  Role: string
  /**
   * 对话内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content: string
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
 * RateMsgRecord返回参数结构体
 */
export interface RateMsgRecordResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 属性标签详情
 */
export interface AttrLabelDetail {
  /**
   * 属性ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrBizId?: string
  /**
   * 属性标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrKey?: string
  /**
   * 属性名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  AttrName?: string
  /**
   * 标签名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  LabelNames?: Array<string>
  /**
   * 属性标签是否在更新中
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUpdating?: boolean
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
}

/**
 * ListDoc请求参数结构体
 */
export interface ListDocRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页数量
   */
  PageSize: number
  /**
   * 查询内容
   */
  Query?: string
  /**
   * 文档状态： 7 审核中、8 审核失败、10 待发布、11 发布中、12 已发布、13 学习中、14 学习失败 20 已过期
   */
  Status?: Array<number | bigint>
}

/**
 * GetEmbedding请求参数结构体
 */
export interface GetEmbeddingRequest {
  /**
   * 模型名称
   */
  Model: string
  /**
   * 需要 embedding 的文本, 单条文本最大长度500个字符, 总条数最大7条
   */
  Inputs: Array<string>
  /**
   * 是否在线, 后台异步任务使用离线, 实时任务使用在线, 默认值: false
   */
  Online?: boolean
}

/**
 * GroupQA请求参数结构体
 */
export interface GroupQARequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * QA业务ID列表
   */
  QaBizIds: Array<string>
  /**
   * 分组 ID
   */
  CateBizId: string
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
 * DescribeQA请求参数结构体
 */
export interface DescribeQARequest {
  /**
   * QA业务ID

   */
  QaBizId: string
  /**
   * 机器人ID

   */
  BotBizId: string
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
 * IgnoreUnsatisfiedReply请求参数结构体
 */
export interface IgnoreUnsatisfiedReplyRequest {
  /**
   * 机器人ID
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
   * 发布状态(1待发布 2发布中 3发布成功 4发布失败 5发布中 6发布中 7发布失败 9发布暂停)
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
}

/**
 * RateMsgRecord请求参数结构体
 */
export interface RateMsgRecordRequest {
  /**
   * 机器人appKey
   */
  BotAppKey: string
  /**
   * 消息ID
   */
  RecordId: string
  /**
   * 1点赞2点踩
   */
  Score: number
  /**
   * 原因
   */
  Reasons?: Array<string>
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
}

/**
 * CreateAttributeLabel请求参数结构体
 */
export interface CreateAttributeLabelRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 属性标识
   */
  AttrKey: string
  /**
   * 属性名称
   */
  AttrName: string
  /**
   * 属性标签
   */
  Labels: Array<AttributeLabel>
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
   * 标签列表
   */
  List?: Array<AppInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 模型别名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ModelAliasName?: string
}

/**
 * QueryParseDocResult请求参数结构体
 */
export interface QueryParseDocResultRequest {
  /**
   * 任务ID
   */
  TaskId: string
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
   * 角色描述，300字符以内
注意：此字段可能返回 null，表示取不到有效值。
   */
  RoleDescription?: string
  /**
   * 模型配置
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
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 状态描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusDesc?: string
  /**
   * 更新时间

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
}

/**
 * ListRejectedQuestionPreview请求参数结构体
 */
export interface ListRejectedQuestionPreviewRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页数量
   */
  PageSize: number
  /**
   * 查询内容
   */
  Query?: string
  /**
   * 发布单ID
   */
  ReleaseBizId?: string
  /**
   * 状态(1新增2更新3删除)
   */
  Actions?: Array<number | bigint>
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
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
}

/**
 * DeleteRejectedQuestion请求参数结构体
 */
export interface DeleteRejectedQuestionRequest {
  /**
   * 机器人ID
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
   * 高亮启始位置

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
 * ExportQAList请求参数结构体
 */
export interface ExportQAListRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * QA业务ID
   */
  QaBizIds: Array<string>
  /**
   * 查询参数
   */
  Filters?: QAQuery
}

/**
 * GetDocPreview返回参数结构体
 */
export interface GetDocPreviewResponse {
  /**
   * 文件名

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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * QueryRewrite请求参数结构体
 */
export interface QueryRewriteRequest {
  /**
   * 需要改写的问题
   */
  Question: string
  /**
   * 需要改写的多轮历史会话
   */
  Messages: Array<Message>
  /**
   * 模型名称
   */
  Model?: string
}

/**
 * ModifyApp请求参数结构体
 */
export interface ModifyAppRequest {
  /**
   * 应用 ID
   */
  AppBizId: string
  /**
   * 应用类型；knowledge_qa-知识问答管理；summary-知识摘要；classifys-知识标签提取
   */
  AppType: string
  /**
   * 应用基础配置
   */
  BaseConfig: BaseConfig
  /**
   * 登录用户子账号(集成商模式必填)
   */
  LoginSubAccountUin?: string
  /**
   * 应用配置
   */
  AppConfig?: AppConfig
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
 * DeleteQACate请求参数结构体
 */
export interface DeleteQACateRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 分类业务ID
   */
  CateBizId: string
}

/**
 * GenerateQA请求参数结构体
 */
export interface GenerateQARequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizIds?: Array<string>
}

/**
 * GetWsToken请求参数结构体
 */
export interface GetWsTokenRequest {
  /**
   * 接入类型
   */
  Type: number
  /**
   * 机器人AppKey
   */
  BotAppKey?: string
  /**
   * 坐席ID
   */
  VisitorBizId?: string
  /**
   * 坐席标签
   */
  VisitorLabels?: Array<GetWsTokenReq_Label>
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
}

/**
 * 向量
 */
export interface EmbeddingObject {
  /**
   * 向量
   */
  Embedding?: Array<number>
}

/**
 * ModifyDoc请求参数结构体
 */
export interface ModifyDocRequest {
  /**
   * 机器人ID
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
   * 属性标签适用范围 1：全部，2：按条件
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
   * 适用范围，关联的属性标签
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
   * 有效开始时间，unix时间戳
   */
  ExpireStart?: string
  /**
   * 有效结束时间，unix时间戳，0代表永久有效
   */
  ExpireEnd?: string
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
 * ListAttributeLabel请求参数结构体
 */
export interface ListAttributeLabelRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页数量
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
   * 查询内容
   */
  Query?: string
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
 * 应用基础配置
 */
export interface BaseConfig {
  /**
   * 应用名称
   */
  Name: string
  /**
   * 应用头像
   */
  Avatar: string
  /**
   * 应用描述
   */
  Desc?: string
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
 * UploadAttributeLabel请求参数结构体
 */
export interface UploadAttributeLabelRequest {
  /**
   * 机器人ID
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
 * ExportAttributeLabel请求参数结构体
 */
export interface ExportAttributeLabelRequest {
  /**
   * 机器人ID
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
   * 属性ID
   */
  AttributeBizIds?: Array<string>
  /**
   * 根据筛选数据导出
   */
  Filters?: AttributeFilters
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
 * CreateAttributeLabel返回参数结构体
 */
export interface CreateAttributeLabelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * StopDocParse返回参数结构体
 */
export interface StopDocParseResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ParseDoc返回参数结构体
 */
export interface ParseDocResponse {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListQACate请求参数结构体
 */
export interface ListQACateRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
}

/**
 * ListReleaseQAPreview请求参数结构体
 */
export interface ListReleaseQAPreviewRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码
   */
  PageNumber: number
  /**
   * 每页数量
   */
  PageSize: number
  /**
   * 查询内容
   */
  Query?: string
  /**
   * 发布单ID
   */
  ReleaseBizId?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 状态(1新增2修改3删除)
   */
  Actions?: Array<number | bigint>
  /**
   * 发布状态(4发布成功5发布失败)
   */
  ReleaseStatus?: Array<number | bigint>
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
   * 发布状态
   */
  Status?: number
  /**
   * 是否编辑过

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
 * IsTransferIntent请求参数结构体
 */
export interface IsTransferIntentRequest {
  /**
   * 内容
   */
  Content: string
  /**
   * 机器人appKey
   */
  BotAppKey: string
}

/**
 * DescribeRefer请求参数结构体
 */
export interface DescribeReferRequest {
  /**
   * 机器人ID
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
}

/**
 * 应用类型详情
 */
export interface ListAppCategoryRspOption {
  /**
   * 类型名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Text?: string
  /**
   * 类型值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 类型log
注意：此字段可能返回 null，表示取不到有效值。
   */
  Logo?: string
}

/**
 * DescribeStorageCredential请求参数结构体
 */
export interface DescribeStorageCredentialRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 文件类型
   */
  FileType?: string
  /**
   * 权限场景，是否公有权限
   */
  IsPublic?: boolean
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
 * DescribeCorp返回参数结构体
 */
export interface DescribeCorpResponse {
  /**
   * 企业ID

   */
  CorpBizId?: string
  /**
   * 机器人配额

   */
  RobotQuota?: number
  /**
   * 企业全称

   */
  FullName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 发布状态
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
 * GetMsgRecord请求参数结构体
 */
export interface GetMsgRecordRequest {
  /**
   * 类型
   */
  Type: number
  /**
   * 数量
   */
  Count: number
  /**
   * 会话sessionid
   */
  SessionId: string
  /**
   * 最后一条记录ID
   */
  LastRecordId?: string
  /**
   * 机器人AppKey
   */
  BotAppKey?: string
  /**
   * 场景, 体验: 1; 正式: 2
   */
  Scene?: number
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
   * 上传存储目录
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
   * 机器人ID
   */
  BotBizId: string
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDocAttrRange请求参数结构体
 */
export interface ModifyDocAttrRangeRequest {
  /**
   * 机器人ID
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
 * CreateQACate请求参数结构体
 */
export interface CreateQACateRequest {
  /**
   * 机器人ID
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
 * DescribeRobotBizIDByAppKey请求参数结构体
 */
export interface DescribeRobotBizIDByAppKeyRequest {
  /**
   * 机器人appkey
   */
  AppKey: string
}

/**
 * CreateRejectedQuestion请求参数结构体
 */
export interface CreateRejectedQuestionRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 拒答问题


   */
  Question: string
  /**
   * 拒答问题来源的数据源唯一id，取值1，2


   */
  BusinessSource: number
  /**
   * 拒答问题来源的数据源唯一id


   */
  BusinessId?: string
}

/**
 * ListRejectedQuestion请求参数结构体
 */
export interface ListRejectedQuestionRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 页码

   */
  PageNumber: number
  /**
   * 每页数量

   */
  PageSize: number
  /**
   * 查询内容

   */
  Query?: string
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
}

/**
 * ModifyRejectedQuestion请求参数结构体
 */
export interface ModifyRejectedQuestionRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 拒答问题


   */
  Question: string
  /**
   * 拒答问题来源的数据源唯一id



   */
  RejectedBizId: string
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
 * StopDocParse请求参数结构体
 */
export interface StopDocParseRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 文档ID
   */
  DocBizId: string
}

/**
 * ListSelectDoc请求参数结构体
 */
export interface ListSelectDocRequest {
  /**
   * 机器人ID
   */
  BotBizId: string
  /**
   * 文档名称

   */
  FileName?: string
  /**
   * 文档状态： 7 审核中、8 审核失败、10 待发布、11 发布中、12 已发布、13 学习中、14 学习失败 20 已过期
   */
  Status?: Array<number | bigint>
}
