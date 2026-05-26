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
 * DestroyMemoryPlusSpace返回参数结构体
 */
export interface DestroyMemoryPlusSpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMemoryPlusSpaces请求参数结构体
 */
export interface DescribeMemoryPlusSpacesRequest {
  /**
   * <p>查询列表的起始位置（偏移量）。用于分页查询，指明从符合条件的第几条数据开始返回。</p>
   */
  Offset?: number
  /**
   * <p>单次查询返回的记录数量上限（分页大小）。</p>
   */
  Limit?: number
  /**
   * <p>查询实例名称或者实例id</p>
   */
  SearchKeys?: Array<string>
  /**
   * <p>实例状态</p><p>枚举值：</p><ul><li>1： 运行中</li><li>2： 创建中</li><li>3： 删除中</li><li>4： 已删除</li><li>5： 隔离中</li><li>6： 已隔离（进入回收站）</li><li>7： 恢复中（从回收站恢复）</li></ul>
   */
  Status?: Array<number | bigint>
  /**
   * <p>资源标签</p>
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * <p>排序字段</p>
   */
  Orderby?: string
  /**
   * <p>排序方向</p><p>枚举值：</p><ul><li>ASC： 升序</li><li>DESC： 降序</li></ul>
   */
  OrderDirection?: string
}

/**
 * 发货步骤描述
 */
export interface CreatingProgress {
  /**
   * <p>总步骤数</p>
   */
  TotalSteps?: number
  /**
   * <p>当前步骤</p>
   */
  CurrentStep?: number
  /**
   * <p>步骤详情</p>
   */
  Steps?: Array<CreatingStepInfo>
}

/**
 * 智能体值守任务信息
 */
export interface AgentDutyTask {
  /**
   * 任务ID
   */
  TaskId?: string
  /**
   * 任务创建时间
   */
  CreateTime?: string
  /**
   * 任务开始运行时间
   */
  StartTime?: string
  /**
   * 任务结束时间
   */
  FinishTime?: string
  /**
   * 任务状态
   */
  Status?: string
  /**
   * 对外展示的Extra信息
   */
  ResultExtraKey?: Array<string>
  /**
   * 业务的额外敏感信息
   */
  Extra?: Array<ExtraInfo>
}

/**
 * DescribeMemoryPlusSpace返回参数结构体
 */
export interface DescribeMemoryPlusSpaceResponse {
  /**
   * <p>Memory 实例 ID。</p>
   */
  SpaceId?: string
  /**
   * <p>Memory 实例的自定义名称。</p>
   */
  Name?: string
  /**
   * <p>Memory 实例的简要描述，包括使用场景、用途或背景信息，便于日常运维识别。</p>
   */
  Description?: string
  /**
   * <p>腾讯云账号的 APPID。</p>
   */
  AppId?: number
  /**
   * <p>Memroy 实例所属地域。</p>
   */
  Region?: string
  /**
   * <p>Memory 实例的标签信息。</p>
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * <p>Memory 实例当前运行状态。</p><ul><li>1：运行中。</li><li>2：创建中。</li><li>3：销毁中。</li><li>4：已销毁。</li><li>5：隔离中。</li><li>6：已隔离。</li><li>7：恢复中。</li></ul>
   */
  Status?: number
  /**
   * <p>Memory 实例计费模式。</p><ul><li>-1：免费体验。</li><li>0：包年包月。</li><li>1：按量计费。</li></ul>
   */
  PayMode?: number
  /**
   * <p>Memory 版本信息：v1。</p>
   */
  Version?: string
  /**
   * <p>Memory 当前已写入的记忆条数。</p>
   */
  MemoryUsage?: number
  /**
   * <p>Memory 实例记忆条数配额上限。</p>
   */
  MemoryLimit?: number
  /**
   * <p>Memory 实例当前 Credit 的使用数量。</p>
   */
  CreditUsage?: number
  /**
   * <p>Memory 实例 Credit 的最大使用数量。</p>
   */
  CreditLimit?: number
  /**
   * <p>Memory 实例的内网访问地址。</p>
   */
  AccessUrl?: string
  /**
   * <p>Memory 实例的外网访问地址。</p>
   */
  WanAccessUrl?: string
  /**
   * <p>Memory 实例的创建时间。</p>
   */
  CreatedAt?: string
  /**
   * <p>Memory 实例的到期时间。</p>
   */
  ExpiredAt?: string
  /**
   * <p>Memory 实例的隔离时间。</p>
   */
  IsolatedAt?: string
  /**
   * <p>到期销毁时间</p>
   */
  DestroyAt?: string
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
  BeginStreamingTokenId?: number
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
  /**
   * 架构，共享版-intranet，企业版-userVpc
   */
  DeployPlace?: string
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
   * <p>智能体ID</p>
   */
  AgentId?: string
  /**
   * <p>智能体版本</p>
   */
  AgentVersion?: string
  /**
   * <p>实例名</p>
   */
  InstanceName?: string
  /**
   * <p>智能体实例的参数列表</p>
   */
  Parameters?: Array<Parameter>
  /**
   * <p>资源的标签信息</p>
   */
  Tags?: Array<TagItem>
  /**
   * <p>无</p>
   */
  InstanceType?: string
  /**
   * <p>无</p>
   */
  TemplateId?: number
  /**
   * <p>无</p>
   */
  Skills?: Array<string>
  /**
   * <p>无</p>
   */
  SoulId?: number
  /**
   * <p>无</p>
   */
  Description?: string
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
 * databaseClaw实例配置信息
 */
export interface ClawConfigInfo {
  /**
   * <p>无</p>
   */
  TemplateId?: number
  /**
   * <p>无</p>
   */
  DbTypes?: Array<string>
  /**
   * <p>无</p>
   */
  Deploy?: ClawDeployInfo
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
   * 任务详细信息
   */
  DutyTasks?: Array<AgentDutyTask>
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
 * vdb数据库文档中键值结构
 */
export interface VDBFieldMap {
  /**
   * <p>vdb document字段名</p>
   */
  Name?: string
  /**
   * <p>vdb document字段值</p>
   */
  Value?: string
  /**
   * <p>vdb document字段类型</p>
   */
  Type?: string
  /**
   * <p>字段描述</p>
   */
  Description?: string
}

/**
 * databaseClaw实例部署详情
 */
export interface ClawDeployInfo {
  /**
   * <p>无</p>
   */
  UserVpcId?: string
  /**
   * <p>无</p>
   */
  UserSubnetId?: string
  /**
   * <p>无</p>
   */
  UserVpcRegion?: string
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
 * DescribeMemoryPlusRecord返回参数结构体
 */
export interface DescribeMemoryPlusRecordResponse {
  /**
   * <p>查询结果总数量。</p>
   */
  TotalCount?: number
  /**
   * <p>查询的记忆数据。</p>
   */
  Documents?: Array<VDBDocument>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * <p>实例ID，为空时查询所有，如果填写则会根据InstanceId筛选</p>
   */
  InstanceId?: string
  /**
   * <p>实例名，为空时查询所有，如果填写则会根据InstanceName筛选</p>
   */
  InstanceName?: string
  /**
   * <p>智能体ID，为空时查询所有，如果填写则会根据AgentId筛选</p>
   */
  AgentId?: string
  /**
   * <p>智能体名称，为空时查询所有，如果填写则会根据AgentName筛选</p>
   */
  AgentName?: string
  /**
   * <p>智能体类型，为空时查询所有，如果填写则会根据AgentName筛选</p>
   */
  AgentInternalName?: string
  /**
   * <p>智能体实例状态，为空时查询所有，如果填写则会根据Status筛选</p>
   */
  Status?: string
  /**
   * <p>标签过滤信息</p>
   */
  TagFilter?: Array<TagFilter>
  /**
   * <p>实例类型</p>
   */
  InstanceType?: string
}

/**
 * DestroyMemoryPlusSpace请求参数结构体
 */
export interface DestroyMemoryPlusSpaceRequest {
  /**
   * <p>指定需要销毁的 Memory 实例 ID 列表。</p>
   */
  SpaceIds: Array<string>
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
 * 发货步骤详情
 */
export interface CreatingStepInfo {
  /**
   * <p>步骤名称</p>
   */
  StepName?: string
  /**
   * <p>步骤描述</p>
   */
  StepDesc?: string
  /**
   * <p>步骤状态</p>
   */
  Status?: string
  /**
   * <p>完成时间</p>
   */
  FinishTime?: string
  /**
   * <p>错误信息描述</p>
   */
  ErrMsg?: string
}

/**
 * CreateChatCompletion请求参数结构体
 */
export interface CreateChatCompletionRequest {
  /**
   * <p>输入内容</p>
   */
  InputContent: string
  /**
   * <p>实例ID</p>
   */
  InstanceId: string
  /**
   * <p>对话窗口ID，空值表示新的会话</p>
   */
  ChatId?: string
  /**
   * <p>是否隐藏</p>
   */
  IsHidden?: boolean
  /**
   * <p>是否隐藏会话</p>
   */
  IsChatHidden?: boolean
}

/**
 * ModifyMemoryPlusSpace返回参数结构体
 */
export interface ModifyMemoryPlusSpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServiceAccessKey请求参数结构体
 */
export interface DescribeServiceAccessKeyRequest {
  /**
   * <p>指定 Memroy 实例 ID。</p>
   */
  ServiceId: string
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
 * CreateMemoryPlusSpace返回参数结构体
 */
export interface CreateMemoryPlusSpaceResponse {
  /**
   * <p>实例 ID 列表。</p>
   */
  SpaceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMemoryPlusSpace请求参数结构体
 */
export interface DescribeMemoryPlusSpaceRequest {
  /**
   * <p>指定查询的 Memory 实例 ID。</p>
   */
  SpaceId: string
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
 * vdb数据库文档结构
 */
export interface VDBDocument {
  /**
   * <p>vdb document数据id</p>
   */
  Id?: string
  /**
   * <p>vdb document数据标量字段</p>
   */
  Fields?: Array<VDBFieldMap>
}

/**
 * CreateMemoryPlusSpace请求参数结构体
 */
export interface CreateMemoryPlusSpaceRequest {
  /**
   * <p>Memory 实例的自定义名称，用于唯一标识和管理实例。支持 60 个字符内的中英文、数字、中划线（-）及下划线（_）。</p>
   */
  Name?: string
  /**
   * <p>emory 实例的简要描述，包括使用场景、用途或背景信息，便于日常运维识别。长度限制为 0-200 个字符。</p>
   */
  Description?: string
  /**
   * <p>以键值对（Key-Value）形式为 Memory 实例绑定的标签，用于项目管理、成本分摊、环境隔离等场景。</p>
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * <p>单次批量创建 Memory 实例的数量。取值范围为 1-50。</p>
   */
  GoodsNum?: number
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
 * RecoverMemoryPlusSpace返回参数结构体
 */
export interface RecoverMemoryPlusSpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 智能体值守任务额外信息
 */
export interface ExtraInfo {
  /**
   * 出参额外信息的Key
   */
  Key?: string
  /**
   * 额外信息描述
   */
  Description?: string
  /**
   * ExtraInfo的值
   */
  Value?: string
  /**
   * 值的数据结构类型
   */
  ValueType?: string
}

/**
 * CreateAgentInstance返回参数结构体
 */
export interface CreateAgentInstanceResponse {
  /**
   * <p>智能体实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>智能体实例名称</p>
   */
  InstanceName?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RecoverMemoryPlusSpace请求参数结构体
 */
export interface RecoverMemoryPlusSpaceRequest {
  /**
   * <p>指定需要恢复的 Memory 实例 ID 列表。</p>
   */
  SpaceIds: Array<string>
}

/**
 * DescribeAgentDutyTasks请求参数结构体
 */
export interface DescribeAgentDutyTasksRequest {
  /**
   * agent实例ID
   */
  InstanceId: string
  /**
   * 会话ID
   */
  ChatId?: string
  /**
   * 查询开始位置
   */
  Offset?: number
  /**
   * 列表查询数量
   */
  Limit?: number
  /**
   * 任务启动时间
   */
  StartTime?: string
  /**
   * 任务结束时间
   */
  EndTime?: string
  /**
   * 任务类型
   */
  AgentTaskType?: string
  /**
   * 业务参数
   */
  Parameters?: Array<Parameter>
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
 * DescribeMemoryPlusRecord请求参数结构体
 */
export interface DescribeMemoryPlusRecordRequest {
  /**
   * <p>查询的 Memory 实例 ID。</p>
   */
  SpaceId: string
  /**
   * <p>查询列表的起始位置（偏移量）。用于分页查询，指明从符合条件的第几条数据开始返回。</p>
   */
  Offset?: number
  /**
   * <p>单次查询返回的记录数量上限（分页大小）。</p>
   */
  Limit?: number
  /**
   * <p>查询的记忆类型。</p><ul><li>conversation：L0 原始对话。</li><li>memory：L1 原子记忆。</li><li>scene：L2 场景记忆。</li><li>persona：L3 个性化画像。</li><li>memory/persona：L1 原子记忆-画像型。</li><li>memory/episodic：L1 原子记忆-事件型。</li><li>memory/instruction：L1 原子记忆-指令型。</li></ul>
   */
  RecordType?: string
  /**
   * <p>指定返回记录中的特定字段。</p>
   */
  Output?: Array<string>
  /**
   * <p>过滤条件，当前仅支持 <strong>RecordType</strong> 为 <strong>conversation</strong> 的 <strong>session_id</strong> 过滤。</p>
   */
  Filters?: Array<VDBFieldMap>
  /**
   * <p>查询结果列表的排序规则。</p><ul><li>ASC：升序。</li><li>DESC：降序。</li></ul>
   */
  OrderDirection?: string
  /**
   * <p>查询时间范围的起始时间点。</p>
   */
  StartTime?: string
  /**
   * <p>查询时间范围的结束时间点。</p>
   */
  EndTime?: string
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
 * Memory正式版实例列表元素信息
 */
export interface MemoryPlusInfo {
  /**
   * <p>实例id</p>
   */
  SpaceId?: string
  /**
   * <p>实例名称</p>
   */
  Name?: string
  /**
   * <p>描述</p>
   */
  Description?: string
  /**
   * <p>实例状态</p>
   */
  Status?: number
  /**
   * <p>地域</p>
   */
  Region?: string
  /**
   * <p>记忆条数</p>
   */
  MemoryUsage?: number
  /**
   * <p>当月积分数</p>
   */
  CreditUsage?: number
  /**
   * <p>资源标签</p>
   */
  ResourceTags?: Array<ResourceTag>
  /**
   * <p>创建时间</p>
   */
  CreatedAt?: string
  /**
   * <p>隔离时间</p>
   */
  IsolatedAt?: string
  /**
   * <p>到期时间</p>
   */
  ExpiredAt?: string
  /**
   * <p>到期销毁时间</p>
   */
  DestroyAt?: string
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
 * IsolateMemoryPlusSpace返回参数结构体
 */
export interface IsolateMemoryPlusSpaceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMemoryPlusSpaces返回参数结构体
 */
export interface DescribeMemoryPlusSpacesResponse {
  /**
   * <p>查询结果总数量。</p>
   */
  TotalCount?: number
  /**
   * <p>实例列表信息</p>
   */
  Items?: Array<MemoryPlusInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateMemoryPlusSpace请求参数结构体
 */
export interface IsolateMemoryPlusSpaceRequest {
  /**
   * <p>指定需要放入回收站的 Memory 实例 ID 列表。</p>
   */
  SpaceIds: Array<string>
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
 * DescribeServiceAccessKey返回参数结构体
 */
export interface DescribeServiceAccessKeyResponse {
  /**
   * <p>访问密钥。</p>
   */
  AuthKey?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartAgentTask返回参数结构体
 */
export interface StartAgentTaskResponse {
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
 * DescribeAgentInstances返回参数结构体
 */
export interface DescribeAgentInstancesResponse {
  /**
   * 查询结果总数量
   */
  TotalCount?: number
  /**
   * <p>智能体实例列表</p>
   */
  Items?: Array<AgentInstance>
  /**
   * <p>无</p>
   */
  StatusCounts?: Array<StatusItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartAgentTask请求参数结构体
 */
export interface StartAgentTaskRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 配置Token
   */
  InstanceToken?: string
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
   * 架构：共享版-intranet，企业版-userVpc
   */
  DeployPlace?: string
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
 * 实例状态描述
 */
export interface StatusItem {
  /**
   * <p>无</p>
   */
  Status?: string
  /**
   * <p>无</p>
   */
  Count?: number
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
   * 任务详细信息
   */
  AgentDutyTask?: AgentDutyTask
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyMemoryPlusSpace请求参数结构体
 */
export interface ModifyMemoryPlusSpaceRequest {
  /**
   * <p>指定需要修改的 Memory 实例 ID。</p>
   */
  SpaceId: string
  /**
   * <p>指定修改后的实例名称。支持 60 个字符内 的中英文、数字、中划线（-）及下划线（_）。</p>
   */
  Name?: string
  /**
   * <p>指定修改后的实例描述。最多支持 200 个字符。</p>
   */
  Description?: string
}

/**
 * 智能体实例
 */
export interface AgentInstance {
  /**
   * <p>智能体实例ID</p>
   */
  InstanceId?: string
  /**
   * <p>智能体实例名称</p>
   */
  InstanceName?: string
  /**
   * <p>智能体ID</p>
   */
  AgentId?: string
  /**
   * <p>智能体名称</p>
   */
  AgentName?: string
  /**
   * <p>智能体类型</p>
   */
  AgentInternalName?: string
  /**
   * <p>智能体服务模式</p>
   */
  AgentType?: string
  /**
   * <p>智能体版本</p>
   */
  AgentVersion?: string
  /**
   * <p>智能体实例状态</p>
   */
  Status?: string
  /**
   * <p>智能体实例参数列表</p>
   */
  Parameters?: Array<Parameter>
  /**
   * <p>创建时间</p>
   */
  CreateTime?: string
  /**
   * <p>修改时间</p>
   */
  UpdateTime?: string
  /**
   * <p>资源绑定Tag列表</p>
   */
  Tags?: Array<TagItem>
  /**
   * <p>部署位置,intranet-共享版，userVpc-专享版</p>
   */
  DeployPlace?: string
  /**
   * <p>关联的告警策略ID。</p>
   */
  PolicyIds?: Array<string>
  /**
   * <p>无</p>
   */
  ClawConfig?: ClawConfigInfo
  /**
   * <p>无</p>
   */
  InstanceType?: string
  /**
   * <p>无</p>
   */
  AllowedActions?: Array<string>
  /**
   * <p>无</p>
   */
  LastActiveTime?: string
  /**
   * <p>无</p>
   */
  Description?: string
  /**
   * <p>发货进度详情</p>
   */
  CreatingProgress?: CreatingProgress
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
 * PauseAgentWork返回参数结构体
 */
export interface PauseAgentWorkResponse {
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

/**
 * 资源tag
 */
export interface ResourceTag {
  /**
   * 标签键
   */
  TagKey?: string
  /**
   * 标签值
   */
  TagValue?: string
}
