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
 * RemoveChat请求参数结构体
 */
export interface RemoveChatRequest {
  /**
   * 智能体ID
   */
  InstanceId: string
  /**
   * 会话Id
   */
  ChatId?: string
}

/**
 * 风险SQL智能体参数
 */
export interface SqlAgentParameter {
  /**
   * 数据库实例信息列表
   */
  InstanceInfos?: Array<InstanceInfos>
  /**
   * 代码仓库信息
   */
  CodeRepo?: CodeRepo
}

/**
 * DescribeReportUrl返回参数结构体
 */
export interface DescribeReportUrlResponse {
  /**
   * 下载地址
   */
  DownloadUrl?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentDutyTaskDetail请求参数结构体
 */
export interface DescribeAgentDutyTaskDetailRequest {
  /**
   * 业务参数列表
   */
  Parameters?: Array<Parameter>
}

/**
 * 流式接口当前消息数据详细内容
 */
export interface UploadDelta {
  /**
   * 步骤摘要
   */
  StepBrief?: string
  /**
   * 步骤详情
   */
  Content?: string
}

/**
 * DescribeChatDetail请求参数结构体
 */
export interface DescribeChatDetailRequest {
  /**
   * 智能体ID
   */
  InstanceId: string
  /**
   * 会话Id
   */
  ChatId?: string
  /**
   * 流ID
   */
  StreamingId?: string
  /**
   * 开始拉取的流式TokenID。0表示从该流最早的TokenID开始获取
   */
  BeginStreamingTokenId?: string
  /**
   * 单次获取的token数量，默认2000
   */
  TokenLimit?: number
}

/**
 * DescribeAgents请求参数结构体
 */
export interface DescribeAgentsRequest {
  /**
   * 查询开始位置
   */
  Offset?: number
  /**
   * 列表查询数量
   */
  Limit?: number
  /**
   * 智能体ID，为空时查询所有，如果填写则会根据AgentId筛选
   */
  AgentId?: string
  /**
   * 智能体名称，为空时查询所有，如果填写则会根据AgentName筛选
   */
  AgentName?: string
  /**
   * 智能体类型，为空时查询所有，如果填写则会根据AgentName筛选
   */
  AgentInternalName?: string
  /**
   * 智能体状态，为空时查询所有，如果填写则会根据AgentStatus筛选
   */
  AgentStatus?: string
}

/**
 * DescribeChats请求参数结构体
 */
export interface DescribeChatsRequest {
  /**
   * 智能体ID
   */
  InstanceId: string
  /**
   * 查询开始位置
   */
  Offset?: number
  /**
   * 列表查询数量
   */
  Limit?: number
}

/**
 * ModifyChatTitle返回参数结构体
 */
export interface ModifyChatTitleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAgentInstance请求参数结构体
 */
export interface CreateAgentInstanceRequest {
  /**
   * 智能体ID
   */
  AgentId?: string
  /**
   * 智能体版本
   */
  AgentVersion?: string
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 智能体实例的参数列表
   */
  Parameters?: Array<Parameter>
  /**
   * 资源的标签信息
   */
  Tags?: Array<TagItem>
}

/**
 * 流式输出消息数据体
 */
export interface UploadChoice {
  /**
   * 消息索引
   */
  Index?: number
  /**
   * 当前消息步骤
   */
  StepNo?: number
  /**
   * 当前步骤
   */
  CurrentStep?: string
  /**
   * 增量信息
   */
  Delta?: UploadDelta
  /**
   * 结束原因
   */
  FinishReason?: string
  /**
   * 错误信息，FinishReason为error时有效
   */
  ErrorMessage?: string
}

/**
 * DescribeAgentDutyTasks返回参数结构体
 */
export interface DescribeAgentDutyTasksResponse {
  /**
   * 查询结果总数量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能体实例的参数值
 */
export interface Parameter {
  /**
   * 参数键
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 参数值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
  /**
   * 枚举值，可取值包括：string(字符串), int(整型), float(浮点型), bool(布尔型), struct(结构体), array(数组), 
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueType: string
}

/**
 * RecoverAgentInstance返回参数结构体
 */
export interface RecoverAgentInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例信息
 */
export interface InstanceInfos {
  /**
   * 数据库地域
   */
  Region: string
  /**
   * 数据库实例id
   */
  InstanceId: string
  /**
   * 数据库名称
   */
  DatabaseName?: string
  /**
   * 表名称
   */
  TableName?: string
}

/**
 * DescribeAgents返回参数结构体
 */
export interface DescribeAgentsResponse {
  /**
   * 查询结果总数量
   */
  TotalCount?: number
  /**
   * 智能体列表
   */
  Items?: Array<Agent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateChatCompletion请求参数结构体
 */
export interface CreateChatCompletionRequest {
  /**
   * 是否隐藏
   */
  IsHidden?: boolean
}

/**
 * ModifyChatTitle请求参数结构体
 */
export interface ModifyChatTitleRequest {
  /**
   * 智能体ID
   */
  InstanceId: string
  /**
   * 会话Id
   */
  ChatId?: string
  /**
   * 标题
   */
  Title?: string
}

/**
 * DescribeAgentInstances请求参数结构体
 */
export interface DescribeAgentInstancesRequest {
  /**
   * 查询开始位置
   */
  Offset?: number
  /**
   * 列表查询数量
   */
  Limit?: number
  /**
   * 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选
   */
  InstanceId?: string
  /**
   * 实例名，为空时查询所有，如果填写则会根据InstanceName筛选
   */
  InstanceName?: string
  /**
   * 智能体ID，为空时查询所有，如果填写则会根据AgentId筛选
   */
  AgentId?: string
  /**
   * 智能体名称，为空时查询所有，如果填写则会根据AgentName筛选
   */
  AgentName?: string
  /**
   * 智能体类型，为空时查询所有，如果填写则会根据AgentName筛选
   */
  AgentInternalName?: string
  /**
   * 智能体实例状态，为空时查询所有，如果填写则会根据Status筛选
   */
  Status?: string
  /**
   * 标签过滤信息
   */
  TagFilter?: Array<TagFilter>
}

/**
 * IsolateAgentInstance返回参数结构体
 */
export interface IsolateAgentInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PauseAgentWork请求参数结构体
 */
export interface PauseAgentWorkRequest {
  /**
   * 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选
   */
  InstanceId: string
  /**
   * Agent任务类型
   */
  AgentTaskType?: string
}

/**
 * CreateAgentInstance返回参数结构体
 */
export interface CreateAgentInstanceResponse {
  /**
   * 智能体实例ID
   */
  InstanceId?: string
  /**
   * 智能体实例名称
   */
  InstanceName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentDutyTasks请求参数结构体
 */
export interface DescribeAgentDutyTasksRequest {
  /**
   * 查询开始位置
   */
  Offset?: number
  /**
   * 列表查询数量
   */
  Limit?: number
}

/**
 * PauseAgentWork返回参数结构体
 */
export interface PauseAgentWorkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeChatDetail返回参数结构体
 */
export interface DescribeChatDetailResponse {
  /**
   * 主账号ID
   */
  AppId?: number
  /**
   * 主账号Uin
   */
  Uin?: string
  /**
   * 子账号Uin
   */
  OwnerUin?: string
  /**
   * 智能体实例ID
   */
  InstanceId?: string
  /**
   * 会话ID
   */
  ChatId?: string
  /**
   * 最后一条流式TokenID
   */
  LastStreamingTokenId?: number
  /**
   * Streaming数量
   */
  StreamingCount?: number
  /**
   * 对话流列表
   */
  Streamings?: Array<ChatDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateAgentInstance返回参数结构体
 */
export interface TerminateAgentInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAgentInstanceParameters返回参数结构体
 */
export interface ModifyAgentInstanceParametersResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateAgentInstance请求参数结构体
 */
export interface IsolateAgentInstanceRequest {
  /**
   * 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选
   */
  InstanceId: string
}

/**
 * 通过标签对资源进行过滤
 */
export interface TagFilter {
  /**
   * 标签键
   */
  TagKey?: string
  /**
   * 标签值
   */
  TagValue?: Array<string>
}

/**
 * DescribeAgentInstance请求参数结构体
 */
export interface DescribeAgentInstanceRequest {
  /**
   * 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选
   */
  InstanceId?: string
}

/**
 * ModifyAgentInstanceParameters请求参数结构体
 */
export interface ModifyAgentInstanceParametersRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 任务类型, 可选，默认default
   */
  TaskType?: string
  /**
   * 更新的参数列表
   */
  Parameters?: Parameter
  /**
   * 风险SQL智能体参数列表
   */
  SqlAgentParameter?: SqlAgentParameter
}

/**
 * ContinueAgentWork返回参数结构体
 */
export interface ContinueAgentWorkResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAgentInstances返回参数结构体
 */
export interface DescribeAgentInstancesResponse {
  /**
   * 查询结果总数量
   */
  TotalCount?: number
  /**
   * 智能体实例列表
   */
  Items?: Array<AgentInstance>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源标签
 */
export interface TagItem {
  /**
   * 标签键
   */
  TagKey?: string
  /**
   * 标签值
   */
  TagValue?: string
}

/**
 * 对话接口出参
 */
export interface CreateChatCompletionRes {
  /**
   * 枚举值，返回的数据类型
   */
  Object?: string
  /**
   * 消息时间戳
   */
  Created?: number
  /**
   * 输出模型
   */
  Model?: string
  /**
   * 用户标识
   */
  AppId?: number
  /**
   * 主账户标识
   */
  OwnerUin?: string
  /**
   * 当前账户标识
   */
  Uin?: string
  /**
   * Request ID

   */
  RequestId?: string
  /**
   * 当前会话ID
   */
  ChatId?: string
  /**
   * 当前流ID
   */
  StreamingId?: string
  /**
   * 当前任务ID
   */
  TaskId?: string
  /**
   * 消息的数据详情
   */
  Choices?: Array<UploadChoice>
}

/**
 * RecoverAgentInstance请求参数结构体
 */
export interface RecoverAgentInstanceRequest {
  /**
   * 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选
   */
  InstanceId: string
}

/**
 * 仓库信息
 */
export interface CodeRepo {
  /**
   * 代码仓库地址
   */
  RepoUrl: string
  /**
   * 分支名
   */
  Branch: string
  /**
   * Commit信息
   */
  GitCommitPipelines?: Array<string>
  /**
   * 数据库ORM类型
   */
  GitORMType?: string
  /**
   * 代码编写语言
   */
  GitCodeLanguage?: string
}

/**
 * ContinueAgentWork请求参数结构体
 */
export interface ContinueAgentWorkRequest {
  /**
   * 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选
   */
  InstanceId: string
  /**
   * Agent任务类型
   */
  AgentTaskType?: string
}

/**
 * 会话信息
 */
export interface ChatBrief {
  /**
   * 主账号Id
   */
  AppId?: number
  /**
   * 主账号uin
   */
  Uin?: string
  /**
   * 子账号uin
   */
  OwnerUin?: string
  /**
   * 智能体实例ID
   */
  InstanceId?: string
  /**
   * 会话ID
   */
  ChatId?: string
  /**
   * 创建时间
   */
  CreateTime?: number
  /**
   * 会话标题
   */
  Title?: string
  /**
   * 会话状态
   */
  Status?: string
  /**
   * 最后一条流式ID
   */
  LastStreamingId?: string
  /**
   * 最后一条流式TokenID
   */
  LastStreamingTokenId?: number
}

/**
 * DescribeChats返回参数结构体
 */
export interface DescribeChatsResponse {
  /**
   * 查询结果总数量
   */
  TotalCount?: number
  /**
   * 对话流列表
   */
  Chats?: Array<ChatBrief>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能体
 */
export interface Agent {
  /**
   * 智能体Id
   */
  AgentId?: string
  /**
   * 智能体名称
   */
  AgentName?: string
  /**
   * 智能体类型
   */
  AgentInternalName?: string
  /**
   * 智能体状态
   */
  AgentStatus?: string
  /**
   * 默认版本
   */
  DefaultVersion?: string
  /**
   * 智能体模式
   */
  AgentType?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 创建者
   */
  Creator?: string
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 更新者
   */
  Updater?: string
  /**
   * 更新时间
   */
  UpdateTime?: string
}

/**
 * DescribeAgentInstance返回参数结构体
 */
export interface DescribeAgentInstanceResponse {
  /**
   * 智能体实例详情
   */
  AgentInstance?: AgentInstance
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateChatCompletion返回参数结构体
 */
export interface CreateChatCompletionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * DescribeReportUrl请求参数结构体
 */
export type DescribeReportUrlRequest = null

/**
 * DescribeAgentDutyTaskDetail返回参数结构体
 */
export interface DescribeAgentDutyTaskDetailResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能体实例
 */
export interface AgentInstance {
  /**
   * 智能体实例ID
   */
  InstanceId?: string
  /**
   * 智能体实例名称
   */
  InstanceName?: string
  /**
   * 智能体ID
   */
  AgentId?: string
  /**
   * 智能体名称
   */
  AgentName?: string
  /**
   * 智能体类型
   */
  AgentInternalName?: string
  /**
   * 智能体服务模式
   */
  AgentType?: string
  /**
   * 智能体版本
   */
  AgentVersion?: string
  /**
   * 智能体实例状态
   */
  Status?: string
  /**
   * 智能体实例参数列表
   */
  Parameters?: Array<Parameter>
  /**
   * 创建时间
   */
  CreateTime?: string
  /**
   * 修改时间
   */
  UpdateTime?: string
  /**
   * 资源绑定Tag列表
   */
  Tags?: Array<TagItem>
}

/**
 * 会话详情
 */
export interface ChatDetail {
  /**
   * 角色
   */
  Role?: string
  /**
   * 用户消息
   */
  UserMessage?: string
  /**
   * 助手消息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AssistantMessage?: Array<CreateChatCompletionRes>
}

/**
 * RemoveChat返回参数结构体
 */
export interface RemoveChatResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateAgentInstance请求参数结构体
 */
export interface TerminateAgentInstanceRequest {
  /**
   * 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选
   */
  InstanceId: string
}
