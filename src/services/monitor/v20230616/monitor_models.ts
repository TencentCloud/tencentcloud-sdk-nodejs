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
 * 告警通知自定义Webhook内容模板
 */
export interface WebhookNoticeTmpl {
  /**
   * 请求体
   */
  Body: string
  /**
   * 请求体的类型，非必填、默认为JSON
注意：此字段可能返回 null，表示取不到有效值。
   */
  BodyContentType?: string
  /**
   * 请求头
注意：此字段可能返回 null，表示取不到有效值。
   */
  Headers?: Array<WebhookNoticeTmplHeader>
}

/**
 * 企业微信机器人通知模板的匹配器
 */
export interface TeamsRobotNoticeTmplMatcher {
  /**
   * 匹配状态 Invalid;
Trigger 告警触发; Recovery 告警恢复
   */
  MatchingStatus: Array<string>
  /**
   * 模板配置
   */
  Template: TeamsRobotNoticeTmpl
}

/**
 * ListAIWorkbenchMCPs请求参数结构体
 */
export interface ListAIWorkbenchMCPsRequest {
  /**
   * <p>每页数量</p>
   */
  PerPage?: number
  /**
   * <p>页码</p>
   */
  PageNo?: number
  /**
   * <p>按传输协议筛选</p>
   */
  Transport?: string
  /**
   * <p>搜索关键词</p>
   */
  Keyword?: string
  /**
   * <p>是否启用筛选</p>
   */
  Enabled?: boolean
  /**
   * <p>关联的mcp</p>
   */
  MCPIds?: Array<string>
  /**
   * <p>MCP类型（内置/私有）</p><p>枚举值：</p><ul><li>builtin： 平台内置</li><li>private： 用户自定义</li></ul>
   */
  Type?: string
}

/**
 * 飞书机器人通知模板的匹配器
 */
export interface FeiShuRobotNoticeTmplMatcher {
  /**
   * 匹配状态 Invalid;
Trigger 告警触发; Recovery 告警恢复
   */
  MatchingStatus: Array<string>
  /**
   * 模板配置
   */
  Template: FeiShuRobotNoticeTmpl
}

/**
 * AI工作台SRE数字分身任务
 */
export interface AIWorkbenchSREDigitalTwinTask {
  /**
   * 任务名称
   */
  Name: string
  /**
   * 任务类型
   */
  TaskType: string
  /**
   * 任务配置
   */
  TaskConfig: string
  /**
   * 唯一标识
   */
  ID?: number
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 所属数字分身ID
   */
  TwinID?: number
}

/**
 * TriggerAIWorkbenchTask返回参数结构体
 */
export interface TriggerAIWorkbenchTaskResponse {
  /**
   * <p>执行 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通知历史中关联的通知模板信息
 */
export interface NotifyRelatedNotice {
  /**
   * 通知模板ID
   */
  NoticeId?: string
  /**
   * 通知模板的名称
   */
  NoticeName?: string
}

/**
 * 内容通知模板元素
 */
export interface NoticeContentTmplItem {
  /**
   * <p>官网通知渠道配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  QCloudYehe?: Array<QCloudYeheNoticeTmplMatcher>
  /**
   * <p>企业微信机器人通知渠道配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeWorkRobot?: Array<WeWorkRobotNoticeTmplMatcher>
  /**
   * <p>钉钉机器人通知渠道配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DingDingRobot?: Array<DingDingRobotNoticeTmplMatcher>
  /**
   * <p>飞书机器人通知渠道配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeiShuRobot?: Array<FeiShuRobotNoticeTmplMatcher>
  /**
   * <p>自定义Webhook通知渠道配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Webhook?: Array<WebhookNoticeTmplMatcher>
  /**
   * <p>Teams机器人通知渠道配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TeamsRobot?: Array<TeamsRobotNoticeTmplMatcher>
  /**
   * <p>PagerDutyRobot机器人通知渠道配置</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PagerDutyRobot?: Array<PagerDutyRobotNoticeTmplMatcher>
  /**
   * <p>GoogleChat</p>
   */
  GoogleChatRobot?: Array<GoogleChatRobotNoticeTmplMatcher>
  /**
   * <p>Slack</p>
   */
  SlackRobot?: Array<SlackRobotNoticeTmplMatcher>
  /**
   * <p>Teams 工作流渠道</p>
   */
  TeamsWorkflowRobot?: Array<TeamsWorkflowRobotNoticeTmplMatcher>
}

/**
 * 资源地图实体
 */
export interface ResourceMapInfo {
  /**
   * <p>资源地图 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceMapId?: string
  /**
   * <p>资源地图名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>资源地图描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>总实例数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceCount?: number
}

/**
 * Agent 信息
 */
export interface AgentInfo {
  /**
   * <p>Agent ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentId?: string
  /**
   * <p>Agent 名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>Agent 描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>Agent 分类</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Category?: string
  /**
   * <p>状态: draft/configured/running/standby/disabled</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>关联技能 ID 列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkillIds?: Array<string>
  /**
   * <p>关联的资源地图 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceMapId?: string
  /**
   * <p>关联的mcp id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MCPIds?: Array<string>
  /**
   * <p>资源标签</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CamTags?: Array<Tag>
  /**
   * <p>agent运行时所需环境变量</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnvVars?: Array<EnvVar>
}

/**
 * CreateNoticeContentTmpl返回参数结构体
 */
export interface CreateNoticeContentTmplResponse {
  /**
   * <p>自定义内容模板ID</p>
   */
  TmplID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI工作台SRE数字分身工作日志
 */
export interface AIWorkbenchSREDigitalTwinWorkLog {
  /**
   * 唯一标识符
   */
  ID?: number
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 所属数字分身ID
   */
  TwinID?: number
  /**
   * 所属数字分身任务ID
   */
  TaskID?: number
  /**
   * 分析时间
   */
  StartTime?: string
  /**
   * 分析状态
   */
  Status?: string
  /**
   * 分析结果摘要
   */
  Result?: string
  /**
   * 所属任务名称
   */
  TaskName?: string
  /**
   * 所属任务类型
   */
  TaskType?: string
}

/**
 * DeleteAIWorkbenchTask请求参数结构体
 */
export interface DeleteAIWorkbenchTaskRequest {
  /**
   * <p>任务 ID</p>
   */
  TaskId?: string
}

/**
 * 触发数字分身任务响应
 */
export interface TriggerDigitalTwinTaskResp {
  /**
   * 数字分身任务ID
   */
  TaskID?: number
}

/**
 * DescribeAIWorkbenchArtifact请求参数结构体
 */
export interface DescribeAIWorkbenchArtifactRequest {
  /**
   * <p>产物 ID</p>
   */
  ArtifactId: string
  /**
   * <p>是否需要下载 URL</p><p><code>1</code> = 需要，<code>0</code> 或不传 = 不需要</p>
   */
  NeedDownloadURL?: number
}

/**
 * 企业微信机器人内容模板配置
 */
export interface SlackRobotNoticeTmpl {
  /**
   * <p>内容模板</p>
   */
  ContentTmpl: string
}

/**
 * ModifyDispenseExternalRuleStatus请求参数结构体
 */
export interface ModifyDispenseExternalRuleStatusRequest {
  /**
   * 规则id列表
   */
  RuleIdList: Array<number | bigint>
  /**
   * 状态
   */
  Status: number
}

/**
 * ListAIWorkbenchSessions请求参数结构体
 */
export interface ListAIWorkbenchSessionsRequest {
  /**
   * <p>每页数量</p>
   */
  PerPage?: number
  /**
   * <p>页码</p>
   */
  PageNo?: number
  /**
   * <p>按 Agent 筛选</p>
   */
  AgentId?: string
  /**
   * <p>搜索关键词</p>
   */
  Keyword?: string
  /**
   * <p>会话 ID 列表筛选</p>
   */
  SessionIds?: Array<string>
}

/**
 * DescribeAIWorkbenchSREDigitalTwinWorkLogDetail请求参数结构体
 */
export interface DescribeAIWorkbenchSREDigitalTwinWorkLogDetailRequest {
  /**
   * 工作日志ID
   */
  WorkLogID: number
}

/**
 * ListAIWorkbenchAgents返回参数结构体
 */
export interface ListAIWorkbenchAgentsResponse {
  /**
   * <p>Agent 列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Agents?: Array<AgentInfo>
  /**
   * <p>分页结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageResult?: PageByNumResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAIWorkbenchSkills请求参数结构体
 */
export interface ListAIWorkbenchSkillsRequest {
  /**
   * <p>每页数量</p>
   */
  PerPage?: number
  /**
   * <p>页码</p>
   */
  PageNo?: number
  /**
   * <p>按类型筛选</p>
   */
  Type?: string
  /**
   * <p>搜索关键词</p>
   */
  Keyword?: string
  /**
   * <p>是否启用筛选</p>
   */
  Enabled?: boolean
  /**
   * <p>技能 ID 列表筛选</p>
   */
  SkillIds?: Array<string>
}

/**
 * 企业微信机器人通知模板的匹配器
 */
export interface SlackRobotNoticeTmplMatcher {
  /**
   * <p>匹配状态 Invalid;<br>Trigger 告警触发; Recovery 告警恢复</p>
   */
  MatchingStatus: Array<string>
  /**
   * <p>模板配置</p>
   */
  Template: SlackRobotNoticeTmpl
}

/**
 * 钉钉机器人内容模板配置
 */
export interface DingDingRobotNoticeTmpl {
  /**
   * 内容模板
   */
  ContentTmpl: string
  /**
   * 标题模板
   */
  TitleTmpl?: string
}

/**
 * 过滤表
 */
export interface DispenseFilter {
  /**
   * 维度名称
   */
  Key?: string
  /**
   * 维度值列表
   */
  Values?: Array<string>
  /**
   * 表示式
   */
  Expression?: string
}

/**
 * 告警通知自定义Webhook模板中的请求体头部描述
 */
export interface WebhookNoticeTmplHeader {
  /**
   * http请求中header的key
   */
  Key: string
  /**
   * http请求中header的value
   */
  Values: Array<string>
}

/**
 * 按第几页进行分页的入参
 */
export interface PageByNumParams {
  /**
   * <p>每个分页的数量</p>
   */
  PerPage?: number
  /**
   * <p>第几个分页，从1开始</p>
   */
  PageNo?: number
}

/**
 * GetAIWorkbenchArtifactDownloadURL请求参数结构体
 */
export interface GetAIWorkbenchArtifactDownloadURLRequest {
  /**
   * <p>会话ID</p>
   */
  SessionId: string
  /**
   * <p>制品ID</p>
   */
  ArtifactId?: string
}

/**
 * 钉钉机器人通知模板的匹配器
 */
export interface DingDingRobotNoticeTmplMatcher {
  /**
   * 匹配状态 Invalid;
Trigger 告警触发; Recovery 告警恢复
   */
  MatchingStatus: Array<string>
  /**
   * 模板配置
   */
  Template: DingDingRobotNoticeTmpl
}

/**
 * 单个告警通知历史
 */
export interface AlarmNotifyHistory {
  /**
   * <p>通知的唯一ID</p>
   */
  NotifyId?: string
  /**
   * <p>告警策略ID</p>
   */
  PolicyId?: string
  /**
   * <p>告警周期iD</p>
   */
  SessionId?: string
  /**
   * <p>通知时间 unix秒级时间戳</p>
   */
  NotifyTime?: number
  /**
   * <p>触发时间 unix秒级时间戳</p>
   */
  TriggerTime?: number
  /**
   * <p>告警级别 None 非分级告警级别; Note 提示级别; Warn 严重级别; Serious 紧急级别</p>
   */
  TriggerLevel?: string
  /**
   * <p>告警内容</p>
   */
  AlarmContent?: string
  /**
   * <p>告警对象</p>
   */
  AlarmObject?: string
  /**
   * <p>本次告警通知涉及到的渠道合集</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelSet?: Array<string>
  /**
   * <p>渠道的接收人信息</p>
   */
  ChannelsReceivers?: Array<ChannelsReceivers>
  /**
   * <p>告警策略名称</p>
   */
  PolicyName?: string
  /**
   * <p>Prometheus实例ID, 仅当 MT_PROME 时有效</p>
   */
  PromeInstanceID?: string
  /**
   * <p>Prometheus实例所在的地域, 仅当 MT_PROME 时有效</p>
   */
  PromeInstanceRegion?: string
  /**
   * <p>通知模板相关的配置信息</p>
   */
  Notices?: Array<NotifyRelatedNotice>
  /**
   * <p>告警触发状态  Trigger 告警状态触发; Recovery 告警状态恢复</p>
   */
  TriggerStatus?: string
  /**
   * <p>与当前Prometheus通知历史相关控制台页面地址，仅当 MR_PROME 时有效</p>
   */
  PromeConsoleURL?: string
  /**
   * <p>告警的lable</p>
   */
  Labels?: Array<AlarmLable>
  /**
   * <p>该条通知实际执行的接收人/组明细。一条元素对应通知模板里的一条渠道发送规则</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverGroups?: Array<ReceiverGroup>
}

/**
 * DescribeAIWorkbenchSession请求参数结构体
 */
export interface DescribeAIWorkbenchSessionRequest {
  /**
   * <p>会话 ID</p>
   */
  SessionId?: string
}

/**
 * ListAIWorkbenchSessions返回参数结构体
 */
export interface ListAIWorkbenchSessionsResponse {
  /**
   * <p>会话列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sessions?: Array<SessionInfo>
  /**
   * <p>分页结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageResult?: PageByNumResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转发目标对象信息
 */
export interface Producer {
  /**
   * 转发协议类型，0-stormRetPb, 1-tcbDispensePb, 2-stormRetJson, 3-ADPPb(废弃)，4-中台pb
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProtocolType: number
  /**
   * 目标类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 转发kafka地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Brokers: string
  /**
   * 转发kafka topic
注意：此字段可能返回 null，表示取不到有效值。
   */
  Topic: string
  /**
   * 是否合并指标,默认是1，合并
   */
  Merge?: number
  /**
   * 全局维度组
   */
  GlobalTags?: Array<DispenseGlobalTag>
  /**
   * 默认维度组，只提供维度即可
   */
  DefaultTags?: Array<string>
  /**
   * Kafka用户名
   */
  Username?: string
  /**
   * Kafka密码
   */
  Password?: string
}

/**
 * DeleteDispenseExternalRule请求参数结构体
 */
export interface DeleteDispenseExternalRuleRequest {
  /**
   * 需要删除的规则Id
   */
  RuleIdList: Array<number | bigint>
}

/**
 * DescribeExtNamespace返回参数结构体
 */
export interface DescribeExtNamespaceResponse {
  /**
   * 对外命名空间列表
   */
  ExtNamespaceList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIWorkbenchExecution返回参数结构体
 */
export interface DescribeAIWorkbenchExecutionResponse {
  /**
   * <p>执行记录</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Execution?: ExecutionInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源实例
 */
export interface ResourceInstance {
  /**
   * <p>实例 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * <p>服务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Service?: string
  /**
   * <p>地域</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * <p>是否就绪</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsReady?: boolean
}

/**
 * TriggerAIWorkbenchSREDigitalTwinTask返回参数结构体
 */
export interface TriggerAIWorkbenchSREDigitalTwinTaskResponse {
  /**
   * Json序列化路径
   */
  JSONStrPaths?: Array<string>
  /**
   * 数字分身任务信息
   */
  Data?: TriggerDigitalTwinTaskResp
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警通知自定义PagerDutyRobot内容模板
 */
export interface PagerDutyRobotNoticeTmpl {
  /**
   * 请求体模板 仅支持json
   */
  Body?: string
  /**
   * 请求头 暂时未支持
注意：此字段可能返回 null，表示取不到有效值。
   */
  Headers?: Array<PagerDutyRobotNoticeTmplHeader>
  /**
   * 标题模板
   */
  TitleTmpl?: string
}

/**
 * ListAIWorkbenchTasks返回参数结构体
 */
export interface ListAIWorkbenchTasksResponse {
  /**
   * <p>任务列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tasks?: Array<TaskInfo>
  /**
   * <p>分页结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageResult?: PageByNumResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签
 */
export interface Tag {
  /**
   * 标签key
   */
  Key: string
  /**
   * 标签value
   */
  Value: string
}

/**
 * DeleteAIWorkbenchAgent返回参数结构体
 */
export interface DeleteAIWorkbenchAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转发地域信息
 */
export interface DispenseRegion {
  /**
   * 地域缩写
   */
  Region?: string
  /**
   * 地域中文名
   */
  RegionCnName?: string
  /**
   * 地域英文名
   */
  RegionEnName?: string
  /**
   * 规则数量
   */
  RuleNumber?: number
}

/**
 * DescribeAIWorkbenchSREDigitalTwinWorkLogList请求参数结构体
 */
export interface DescribeAIWorkbenchSREDigitalTwinWorkLogListRequest {
  /**
   * 数字分身ID
   */
  TwinID: number
  /**
   * 分页偏移量
   */
  Offset?: number
  /**
   * 分页限制条数
   */
  Limit?: number
}

/**
 * 对外指标
 */
export interface ExtMetric {
  /**
   * 指标名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricName?: string
  /**
   * 中文指标名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricCName?: string
  /**
   * 中文含义
注意：此字段可能返回 null，表示取不到有效值。
   */
  CNMeaning?: string
  /**
   * 英文含义
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnMeaning?: string
  /**
   * 单位
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unit?: string
  /**
   * 是否配置对外维度
   */
  DimensionFlag?: boolean
}

/**
 * DescribeKafka返回参数结构体
 */
export interface DescribeKafkaResponse {
  /**
   * 连通性列表
   */
  KafkaConnectivityList?: Array<KafkaConnectivity>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmNotifyHistories请求参数结构体
 */
export interface DescribeAlarmNotifyHistoriesRequest {
  /**
   * <p>监控类型</p>
   */
  MonitorType: string
  /**
   * <p>起始时间点，unix秒级时间戳</p>
   */
  QueryBaseTime: number
  /**
   * <p>从 QueryBaseTime 开始，需要查询往前多久的时间，单位秒</p>
   */
  QueryBeforeSeconds: number
  /**
   * <p>分页参数</p>
   */
  PageParams: PageByNoParams
  /**
   * <p>当监控类型为 MT_QCE 时候需要填写，归属的命名空间</p>
   */
  Namespace?: string
  /**
   * <p>当监控类型为 MT_QCE 时候需要填写， 告警策略类型</p>
   */
  ModelName?: string
  /**
   * <p>查询某个策略的通知历史</p>
   */
  PolicyId?: string
  /**
   * <p>详情页展示所需id</p>
   */
  NotifyId?: string
}

/**
 * UpdateAIWorkbenchAgent返回参数结构体
 */
export interface UpdateAIWorkbenchAgentResponse {
  /**
   * <p>更新后的 Agent 信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Agent?: AgentInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业微信机器人内容模板配置
 */
export interface TeamsRobotNoticeTmpl {
  /**
   * 内容模板
   */
  ContentTmpl: string
}

/**
 * DeleteAIWorkbenchAgent请求参数结构体
 */
export interface DeleteAIWorkbenchAgentRequest {
  /**
   * <p>Agent ID</p>
   */
  AgentId?: string
}

/**
 * 自定义通知内容模板
 */
export interface NoticeContentTmpl {
  /**
   * <p>自定义通知内容模板id，唯一id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmplID?: string
  /**
   * <p>自定义通知内容模板名</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmplName?: string
  /**
   * <p>通知内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmplContents?: NoticeContentTmplItem
  /**
   * <p>Unix时间戳，秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * <p>Unix时间戳，秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * <p>最后修改人</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastModifier?: string
  /**
   * <p>创建人</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * <p>监控类型</p>
   */
  MonitorType?: string
  /**
   * <p>模板语言 en/zh</p>
   */
  TmplLanguage?: string
}

/**
 * 会话实体
 */
export interface SessionInfo {
  /**
   * <p>会话 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * <p>Agent ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentId?: string
  /**
   * <p>会话标题</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Title?: string
  /**
   * <p>状态: active / archived / deleted</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>如果该会话由任务触发，则携带触发其会话的任务ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
}

/**
 * 分页结果参数
 */
export interface PageByNoResult {
  /**
   * 总共有多少数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 总共有多少个分页
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * 当前的分页号
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentPageNo?: number
  /**
   * 【已弃用】是否遍历到末尾
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  IsEnd?: boolean
  /**
   * 是否遍历到末尾
   */
  End?: boolean
}

/**
 * ListAIWorkbenchResourceMaps返回参数结构体
 */
export interface ListAIWorkbenchResourceMapsResponse {
  /**
   * <p>资源地图列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceMaps?: Array<ResourceMapInfo>
  /**
   * <p>分页结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageResult?: PageByNumResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExtMetric请求参数结构体
 */
export interface DescribeExtMetricRequest {
  /**
   * 对外命名空间
   */
  ExtNamespace: string
}

/**
 * Microsoft Teams 工作流内容模板配置
 */
export interface TeamsWorkflowRobotNoticeTmpl {
  /**
   * <p>内容模板</p>
   */
  ContentTmpl: string
  /**
   * <p>区分 TeamsWorkflow 是自定义内容还是自定义 POST BODY</p><p>枚举值：</p><ul><li>WorkflowText： 自定义内容</li><li>WorkflowJson： 自定义 POST BODY</li></ul>
   */
  Version: string
  /**
   * <p>标题模版</p>
   */
  TitleTmpl?: string
}

/**
 * ListAIWorkbenchMCPs返回参数结构体
 */
export interface ListAIWorkbenchMCPsResponse {
  /**
   * <p>MCP 列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MCPs?: Array<MCPInfo>
  /**
   * <p>分页结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageResult?: PageByNumResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 技能实体
 */
export interface SkillInfo {
  /**
   * <p>技能 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkillId?: string
  /**
   * <p>技能名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>技能描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>是否启用</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled?: boolean
}

/**
 * ListAIWorkbenchSkills返回参数结构体
 */
export interface ListAIWorkbenchSkillsResponse {
  /**
   * <p>技能列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Skills?: Array<SkillInfo>
  /**
   * <p>分页结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageResult?: PageByNumResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Microsoft Teams 工作流通知模板的匹配器
 */
export interface TeamsWorkflowRobotNoticeTmplMatcher {
  /**
   * <p>匹配状态 Invalid; Trigger 告警触发; Recovery 告警恢复</p><p>枚举值：</p><ul><li>Trigger： 告警触发</li><li>Recovery： 告警恢复</li></ul>
   */
  MatchingStatus: Array<string>
  /**
   * <p>模板配置</p>
   */
  Template: TeamsWorkflowRobotNoticeTmpl
}

/**
 * DescribeNoticeContentTmpl返回参数结构体
 */
export interface DescribeNoticeContentTmplResponse {
  /**
   * 自定义通知内容模板
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeContentTmpls?: Array<NoticeContentTmpl>
  /**
   * 通知内容模板绑定的告警策略数量
   */
  NoticeContentTmplBindPolicyCounts?: Array<NoticeContentTmplBindPolicyCount>
  /**
   * 分页数
   */
  PageNumber?: number
  /**
   * 分页大小
   */
  PageSize?: number
  /**
   * 结果总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAIWorkbenchResourceMaps请求参数结构体
 */
export interface ListAIWorkbenchResourceMapsRequest {
  /**
   * <p>每页数量</p>
   */
  PerPage?: number
  /**
   * <p>页码</p>
   */
  PageNo?: number
  /**
   * <p>按名称搜索</p>
   */
  Keyword?: string
}

/**
 * ListAIWorkbenchArtifacts返回参数结构体
 */
export interface ListAIWorkbenchArtifactsResponse {
  /**
   * <p>产物列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Artifacts?: Array<ArtifactInfo>
  /**
   * <p>分页结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageResult?: PageByNumResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelAIWorkbenchChat请求参数结构体
 */
export interface CancelAIWorkbenchChatRequest {
  /**
   * <p>会话id</p>
   */
  SessionId?: string
}

/**
 * ModifyDispenseExternalRule请求参数结构体
 */
export interface ModifyDispenseExternalRuleRequest {
  /**
   * 规则名称
   */
  Name: string
  /**
   * 云监控对外命名空间
   */
  ExtNamespace: string
  /**
   * 转发目标消信息
   */
  Producer: Producer
  /**
   * 规则ID
   */
  RuleId: number
  /**
   * 转发部署地域列表
   */
  DispenseRegions?: Array<string>
  /**
   * 云监控对外指标
   */
  ExtMetrics?: Array<string>
  /**
   * 指标统计周期
   */
  Period?: Array<number | bigint>
  /**
   * 转发过滤信息
   */
  DispenseConditions?: Array<DispenseCondition>
}

/**
 * DescribeAlarmNotifyHistories返回参数结构体
 */
export interface DescribeAlarmNotifyHistoriesResponse {
  /**
   * <p>告警历史</p>
   */
  AlarmNotifyHistoryList?: Array<AlarmNotifyHistory>
  /**
   * <p>分页情况</p>
   */
  PageResult?: PageByNoResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 分身提示词配置
 */
export interface InstructionConfig {
  /**
   * <p>角色定义</p>
   */
  RolePosition?: string
  /**
   * <p>核心职责</p>
   */
  CoreDuty?: string
  /**
   * <p>核心原则</p>
   */
  CoreTruths?: string
  /**
   * <p>风格约束</p>
   */
  Vibe?: string
  /**
   * <p>注意事项</p>
   */
  Boundaries?: string
}

/**
 * DeleteAIWorkbenchTask返回参数结构体
 */
export interface DeleteAIWorkbenchTaskResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIWorkbenchSREDigitalTwinTaskList返回参数结构体
 */
export interface DescribeAIWorkbenchSREDigitalTwinTaskListResponse {
  /**
   * Json序列化路径
   */
  JSONStrPaths?: Array<string>
  /**
   * 数字分身任务列表
   */
  Data?: AIWorkbenchSREDigitalTwinTaskList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIWorkbenchSession返回参数结构体
 */
export interface DescribeAIWorkbenchSessionResponse {
  /**
   * <p>会话信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Session?: SessionInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAIWorkbenchTasks请求参数结构体
 */
export interface ListAIWorkbenchTasksRequest {
  /**
   * <p>每页数量</p>
   */
  PerPage?: number
  /**
   * <p>页码</p>
   */
  PageNo?: number
  /**
   * <p>按 Agent 筛选</p>
   */
  AgentId?: string
  /**
   * <p>按触发类型筛选</p>
   */
  TriggerType?: string
  /**
   * <p>搜索关键词</p>
   */
  Keyword?: string
  /**
   * <p>任务 ID 列表筛选</p>
   */
  TaskIds?: Array<string>
  /**
   * <p>是否启用筛选</p>
   */
  Enabled?: boolean
}

/**
 * 企业微信机器人内容模板配置
 */
export interface WeWorkRobotNoticeTmpl {
  /**
   * 内容模板
   */
  ContentTmpl: string
}

/**
 * DescribeAIWorkbenchSREDigitalTwinWorkLogDetail返回参数结构体
 */
export interface DescribeAIWorkbenchSREDigitalTwinWorkLogDetailResponse {
  /**
   * Json序列化路径
   */
  JSONStrPaths?: Array<string>
  /**
   * 数字分身详细信息
   */
  Data?: AIWorkbenchSREDigitalTwinWorkLogDetail
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TriggerAIWorkbenchTask请求参数结构体
 */
export interface TriggerAIWorkbenchTaskRequest {
  /**
   * <p>任务 ID</p>
   */
  TaskId?: string
}

/**
 * DescribeNoticeContentTmpl请求参数结构体
 */
export interface DescribeNoticeContentTmplRequest {
  /**
   * 分页数
   */
  PageNumber: number
  /**
   * 分页大小
   */
  PageSize: number
  /**
   * 指定模板ID查询，查询参数都为空则默认查询账号下所有模板
   */
  TmplIDs?: Array<string>
  /**
   * 指定模板名称查询，查询参数都为空则默认查询账号下所有模板
   */
  TmplName?: string
  /**
   * 指定通知模板ID查询，查询参数都为空则默认查询账号下所有模板
   */
  NoticeID?: string
  /**
   * 模板语言 en/zh 缺省不过滤
   */
  TmplLanguage?: string
  /**
   * 监控类型
   */
  MonitorType?: string
}

/**
 * ListAIWorkbenchMessages返回参数结构体
 */
export interface ListAIWorkbenchMessagesResponse {
  /**
   * <p>消息列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Messages?: Array<MessageInfo>
  /**
   * <p>下一个游标</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextCursor?: string
  /**
   * <p>还有后续吗</p>
   */
  HasMore?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务实体
 */
export interface TaskInfo {
  /**
   * <p>任务 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * <p>任务名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>任务描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>关联 Agent ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentId?: string
  /**
   * <p>提示词模板</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PromptTemplate?: string
  /**
   * <p>输出格式: markdown / json</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  OutputFormat?: string
  /**
   * <p>触发类型: manual / cron / webhook</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: string
  /**
   * <p>Cron 表达式</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CronExpr?: string
  /**
   * <p>Cron 时区</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CronTimezone?: string
  /**
   * <p>关联技能 ID 列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkillIds?: Array<string>
  /**
   * <p>关联 MCP 端点 ID 列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  McpEndpointIds?: Array<string>
  /**
   * <p>超时时间(秒)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeoutSec?: number
  /**
   * <p>重试次数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryCount?: number
  /**
   * <p>通知id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyIds?: Array<string>
  /**
   * <p>是否启用</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled?: boolean
}

/**
 * DescribeDispenseExternalRule请求参数结构体
 */
export interface DescribeDispenseExternalRuleRequest {
  /**
   * 规则id
   */
  RuleId: number
}

/**
 * DescribeKafka请求参数结构体
 */
export interface DescribeKafkaRequest {
  /**
   * kafka地址
   */
  Brokers: string
  /**
   * 转发部署地域列表
   */
  DispenseRegions?: Array<string>
}

/**
 * ListAIWorkbenchArtifacts请求参数结构体
 */
export interface ListAIWorkbenchArtifactsRequest {
  /**
   * <p>每页数量</p>
   */
  PerPage?: number
  /**
   * <p>页码</p>
   */
  PageNo?: number
  /**
   * <p>会话ID</p>
   */
  SessionIds?: Array<string>
  /**
   * <p>消息内容类型</p>
   */
  MimeTypes?: Array<string>
  /**
   * <p>排序</p><p>枚举值：</p><ul><li>ASC： 正序</li><li>DESC： 倒序</li></ul>
   */
  OrderDirection?: string
  /**
   * <p>数字分身ID</p>
   */
  AgentId?: string
  /**
   * <p>模糊搜索制品信息</p>
   */
  NameKeyword?: string
}

/**
 * CreateAIWorkbenchAgent返回参数结构体
 */
export interface CreateAIWorkbenchAgentResponse {
  /**
   * <p>Agent ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNoticeContentTmpls请求参数结构体
 */
export interface DeleteNoticeContentTmplsRequest {
  /**
   * <p>要删除的模板id</p>
   */
  TmplIDs?: Array<string>
}

/**
 * 分页请求参数
 */
export interface PageByNoParams {
  /**
   * <p>每个分页的数量是多少</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PerPage?: number
  /**
   * <p>第几个分页，从1开始</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNo?: string
}

/**
 * 承载消息接收人/组明细
 */
export interface ReceiverGroup {
  /**
   * <p>本条发送规则的接收者类型</p><p>枚举值：</p><ul><li>UIDs： 按用户 UID</li><li>UINs： 按账号 UIN</li><li>Group： 按用户分组。ReceiverIds 为分组 ID</li><li>Oncall： 按值班表，且未被发送时的真实接收人覆盖</li><li>RtxName： 发送时解析出的员工 RTX 英文名</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverType?: string
  /**
   * <p>本条规则配置的原始接收者 ID 列表。具体是哪一种 ID，由 ReceiverType 决定</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverIds?: Array<string>
  /**
   * <p>接收者展示名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Names?: Array<string>
  /**
   * <p>用户分组展开后的成员用户 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemberIds?: Array<string>
  /**
   * <p>该规则允许通知的星期。语义与 time.Weekday 一致</p><p>枚举值：</p><ul><li>0： 周日</li><li>1： 周一</li><li>2： 周二</li><li>3： 周三</li><li>4： 周四</li><li>5： 周五</li><li>6： 周六</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeekDay?: Array<number | bigint>
  /**
   * <p>通知时段相对当日零点的秒数偏移，需配合 TimeZoneName 解读</p><p>单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DayStartSeconds?: number
  /**
   * <p>通知时段相对当日零点的秒数偏移，需配合 TimeZoneName 解读</p><p>单位：秒</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DayEndSeconds?: number
  /**
   * <p>DayStartSeconds、DayEndSeconds 所属时区</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TimeZoneName?: string
  /**
   * <p>该规则实际发送的接收渠道全名列表</p><p>枚举值：</p><ul><li>QCloudYehe_site： 腾讯云野鹤，站内信</li><li>QCloudYehe_email： 腾讯云野鹤，电子邮件</li><li>QCloudYehe_sms： 腾讯云野鹤，短信</li><li>QCloudYehe_wechat： 腾讯云野鹤，微信</li><li>QCloudYehe_voice： 腾讯云野鹤，语音</li><li>QCloudYehe_qywx： 腾讯云野鹤，企业微信</li><li>QCloudYehe_andon： 腾讯云野鹤，安灯</li><li>TOF_weWorkMessage： TOF，企业微信消息</li><li>TOF_email： TOF，企业邮箱</li><li>TOF_phoneCall： TOF，电话</li><li>WeWork： 企业微信机器人</li><li>WebHook： 自定义 WebHook</li><li>FeiShu： 飞书</li><li>DingDing： 钉钉</li><li>Slack： Slack</li><li>GoogleChat： Google Chat</li><li>Teams： Teams</li><li>TeamsWorkflow： Teams Workflow</li><li>PagerDuty： PagerDuty</li><li>CLS： 日志服务 CLS</li><li>AS： 弹性伸缩</li><li>TCSYehe： TCS 野鹤。正文的 SubChannel 取渠道名本身</li><li>SCF： 云函数。不返回 Contents</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelNames?: Array<string>
}

/**
 * CreateDispenseExternalRule请求参数结构体
 */
export interface CreateDispenseExternalRuleRequest {
  /**
   * 规则名称
   */
  Name: string
  /**
   * 云监控对外命名空间
   */
  ExtNamespace: string
  /**
   * 转发目标消信息
   */
  Producer: Producer
  /**
   * 转发部署地域列表
   */
  DispenseRegions?: Array<string>
  /**
   * 云监控对外指标
   */
  ExtMetrics?: Array<string>
  /**
   * 指标统计周期
   */
  Period?: Array<number | bigint>
  /**
   * 转发过滤条件信息
   */
  DispenseConditions?: Array<DispenseCondition>
}

/**
 * ListAIWorkbenchResourceInstances请求参数结构体
 */
export interface ListAIWorkbenchResourceInstancesRequest {
  /**
   * <p>资源地图 ID</p>
   */
  ResourceMapId?: string
  /**
   * <p>分页参数</p>
   */
  PageParams?: PageByNumParams
}

/**
 * 接受人详情信息和通知详情页展示
 */
export interface ChannelsReceivers {
  /**
   * <p>通知渠道名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelName?: string
  /**
   * <p>接收者</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Receivers?: Array<string>
  /**
   * <p>发送结果,0-无效,1-成功,2-失败,3-无需发送</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendStatus?: string
  /**
   * <p>参数定义 渠道返回的原始状态码。</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendStatusCode?: string
  /**
   * <p>Ark 发起该渠道调用的时间</p><p>单位：Unix 秒级时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendTime?: number
  /**
   * <p>该渠道本次实际发送的子渠道全名，格式为 父渠道_子渠道</p><p>枚举值：</p><ul><li>QCloudYehe_site： 腾讯云野鹤，站内信</li><li>QCloudYehe_email： 腾讯云野鹤，电子邮件</li><li>QCloudYehe_sms： 腾讯云野鹤，短信</li><li>QCloudYehe_wechat： 腾讯云野鹤，微信</li><li>QCloudYehe_voice： 腾讯云野鹤，语音</li><li>QCloudYehe_qywx： 腾讯云野鹤，企业微信</li><li>QCloudYehe_andon： 腾讯云野鹤，安灯</li><li>TOF_weWorkMessage： TOF，企业微信消息</li><li>TOF_email： TOF，企业邮箱</li><li>TOF_phoneCall： TOF，电话</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubChannels?: Array<string>
  /**
   * <p>该渠道本次执行情况的文字描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecDetail?: string
  /**
   * <p>短信真实投递状态，来自野鹤 smsStatus 回调的 reportStatus 原值</p><p>枚举值：</p><ul><li>SUCCESS： 短信已真实送达</li><li>FAIL： 短信真实投递失败，失败原因见 RealDeliverErrMsg</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealDeliverStatus?: string
  /**
   * <p>用户真实收到短信的时间，取野鹤回调 userReceiverTime 原文字符串</p><p>参数格式：YYYY-MM-DD HH:mm:ss</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealDeliverTime?: string
  /**
   * <p>短信真实投递回执中的结果码，取野鹤回调 errmsg 原值</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealDeliverErrMsg?: string
  /**
   * <p>该渠道下各子渠道的消息正文明细</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Contents?: Array<ChannelContent>
}

/**
 * CreateAIWorkbenchTask返回参数结构体
 */
export interface CreateAIWorkbenchTaskResponse {
  /**
   * <p>任务 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDispenseExternalRule返回参数结构体
 */
export interface DescribeDispenseExternalRuleResponse {
  /**
   * 规则
   */
  Rule?: Rule
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIWorkbenchExecution请求参数结构体
 */
export interface DescribeAIWorkbenchExecutionRequest {
  /**
   * <p>执行 ID</p>
   */
  ExecutionId?: string
}

/**
 * DescribeAIWorkbenchSREDigitalTwinTaskList请求参数结构体
 */
export interface DescribeAIWorkbenchSREDigitalTwinTaskListRequest {
  /**
   * 数字分身ID
   */
  TwinID: number
  /**
   * 偏移量
   */
  Offset?: number
  /**
   * 数量限制
   */
  Limit?: number
}

/**
 * AI工作台SRE数字分身工作日志列表
 */
export interface AIWorkbenchSREDigitalTwinWorkLogList {
  /**
   * 工作日志列表
   */
  WorkLogs?: Array<AIWorkbenchSREDigitalTwinWorkLog>
  /**
   * 总数
   */
  Total?: number
}

/**
 * ListAIWorkbenchExecutions请求参数结构体
 */
export interface ListAIWorkbenchExecutionsRequest {
  /**
   * <p>每页数量</p>
   */
  PerPage?: number
  /**
   * <p>页码</p>
   */
  PageNo?: number
  /**
   * <p>按 Agent 筛选</p>
   */
  AgentId?: string
  /**
   * <p>按状态筛选</p>
   */
  Status?: string
  /**
   * <p>执行 ID 列表筛选</p>
   */
  ExecutionIds?: Array<string>
  /**
   * <p>任务id</p>
   */
  TaskIds?: Array<string>
  /**
   * <p>触发方式</p>
   */
  TriggerType?: string
  /**
   * <p>关键值</p>
   */
  Keyword?: string
  /**
   * <p>是否启用</p>
   */
  Enabled?: boolean
}

/**
 * DescribeAIWorkbenchSkill返回参数结构体
 */
export interface DescribeAIWorkbenchSkillResponse {
  /**
   * <p>技能信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Skill?: SkillInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警中的Label
 */
export interface AlarmLable {
  /**
   * label name
   */
  Name?: string
  /**
   * label value
   */
  Value?: string
}

/**
 * 分页结果参数
 */
export interface PageByNumResult {
  /**
   * <p>总共有多少数据</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * <p>总共有多少个分页</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalPage?: number
  /**
   * <p>当前的分页号</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CurrentPageNo?: number
}

/**
 * CreateAIWorkbenchAgent请求参数结构体
 */
export interface CreateAIWorkbenchAgentRequest {
  /**
   * <p>Agent 名称</p>
   */
  Name?: string
  /**
   * <p>Agent 描述</p>
   */
  Description?: string
  /**
   * <p>Agent 分类</p>
   */
  Category?: string
  /**
   * <p>Agent 标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>Agent 提示词</p>
   */
  Instruction?: InstructionConfig
  /**
   * <p>关联技能 ID 列表</p>
   */
  SkillIds?: Array<string>
  /**
   * <p>来源: builtin / custom</p>
   */
  Source?: string
  /**
   * <p>关联的资源地图 ID</p>
   */
  ResourceMapId?: string
  /**
   * <p>关联的mcp工具</p>
   */
  MCPIds?: Array<string>
  /**
   * <p>资源标签</p>
   */
  CamTags?: Array<Tag>
  /**
   * <p>agent运行时环境变量</p>
   */
  EnvVars?: Array<EnvVar>
}

/**
 * 环境变量entry
 */
export interface EnvEntry {
  /**
   * <p>环境变量value</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * <p>是否脱敏</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Sensitive?: boolean
}

/**
 * 告警通知内容模版自定义标题颜色 key-value 匹配规则
 */
export interface RobotNoticeTitleColorRules {
  /**
   * <p>通知内容模版自定义颜色 Label 匹配的 Key</p>
   */
  Key: string
  /**
   * <p>通知内容模版自定义颜色 Label 匹配的 Value</p>
   */
  Value: string
  /**
   * <p>通知内容模版自定义颜色</p>
   */
  Color: string
}

/**
 * kafka连通性
 */
export interface KafkaConnectivity {
  /**
   * 地域
   */
  Region?: string
  /**
   * 连通
   */
  Result?: boolean
}

/**
 * 官网内容通知模板的匹配器
 */
export interface QCloudYeheNoticeTmplMatcher {
  /**
   * 匹配状态 Invalid;
Trigger 告警触发; Recovery 告警恢复
   */
  MatchingStatus: Array<string>
  /**
   * 模板配置
   */
  Template: QCloudYeheNoticeTmpl
}

/**
 * ListAIWorkbenchMessages请求参数结构体
 */
export interface ListAIWorkbenchMessagesRequest {
  /**
   * <p>会话 ID</p>
   */
  SessionId?: string
  /**
   * <p>游标分页的定位标记</p>
   */
  Cursor?: string
  /**
   * <p>窗口大小</p>
   */
  Limit?: number
  /**
   * <p>拉取顺序</p>
   */
  Direction?: string
}

/**
 * 官网通知内容模板元素
 */
export interface QCloudYeheNoticeTmplItem {
  /**
   * 内容模板
   */
  ContentTmpl: string
  /**
   * 标题
   */
  TitleTmpl?: string
}

/**
 * ListAIWorkbenchExecutions返回参数结构体
 */
export interface ListAIWorkbenchExecutionsResponse {
  /**
   * <p>执行列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Executions?: Array<ExecutionInfo>
  /**
   * <p>分页结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageResult?: PageByNumResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAIWorkbenchAgent请求参数结构体
 */
export interface DescribeAIWorkbenchAgentRequest {
  /**
   * <p>Agent ID</p>
   */
  AgentId?: string
}

/**
 * Google Chat 机器人内容模板配置
 */
export interface GoogleChatRobotNoticeTmpl {
  /**
   * 内容模板
   */
  ContentTmpl: string
}

/**
 * 转发规则
 */
export interface Rule {
  /**
   * 规则Id
   */
  RuleId?: number
  /**
   * 规则名称
   */
  Name?: string
  /**
   * 对外namespace
   */
  ExtNamespace?: string
  /**
   * 对外指标列表
   */
  ExtMetric?: Array<ExtMetric>
  /**
   * 输出信息
   */
  Producer?: Producer
  /**
   * 更新时间
   */
  UpdateTime?: number
  /**
   * 规则触发状态
   */
  Status?: number
  /**
   * 指标粒度周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Period?: Array<number | bigint>
  /**
   * 转发过滤条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  DispenseConditions?: Array<DispenseCondition>
  /**
   * 转发地域列表
   */
  DispenseRegions?: Array<string>
}

/**
 * 产物实体
 */
export interface ArtifactInfo {
  /**
   * <p>产物 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ArtifactId?: string
  /**
   * <p>产物名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>物理类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MimeType?: string
  /**
   * <p>文件大小(字节)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SizeBytes?: number
  /**
   * <p>是否公共</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsGlobal?: boolean
  /**
   * <p>创建时间 Unix 秒时间戳</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: number
  /**
   * <p>修改时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: number
  /**
   * <p>产生该制品的 Agent ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentId?: string
  /**
   * <p>产生该制品的 Skill ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SkillId?: string
  /**
   * <p>用于解析调用下载接口</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  StoragePath?: string
  /**
   * <p>来源类型</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceType?: string
  /**
   * <p>来源名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceName?: string
  /**
   * <p>预览摘要</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionSummary?: string
}

/**
 * ListAIWorkbenchResourceInstances返回参数结构体
 */
export interface ListAIWorkbenchResourceInstancesResponse {
  /**
   * <p>资源实例列表</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instances?: Array<ResourceInstance>
  /**
   * <p>分页结果</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageResult?: PageByNumResult
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI工作台SRE数字分身工作日志详细信息
 */
export interface AIWorkbenchSREDigitalTwinWorkLogDetail {
  /**
   * 工作日志详细内容
   */
  Content?: string
  /**
   * 工作日志任务类型
   */
  TaskType?: string
  /**
   * 工作日志相关对话ID
   */
  DialogID?: number
}

/**
 * DescribeAIWorkbenchSkill请求参数结构体
 */
export interface DescribeAIWorkbenchSkillRequest {
  /**
   * <p>技能 ID</p>
   */
  SkillId?: string
}

/**
 * Google Chat 机器人通知模板的匹配器
 */
export interface GoogleChatRobotNoticeTmplMatcher {
  /**
   * 匹配状态 Invalid;
Trigger 告警触发; Recovery 告警恢复
   */
  MatchingStatus: Array<string>
  /**
   * 模板配置
   */
  Template: GoogleChatRobotNoticeTmpl
}

/**
 * DescribeDispenseExternalRuleList返回参数结构体
 */
export interface DescribeDispenseExternalRuleListResponse {
  /**
   * 指标列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleList?: Array<Rule>
  /**
   * 列表大小
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消息实体
 */
export interface MessageInfo {
  /**
   * <p>实体id</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  EntryId?: string
  /**
   * <p>会话 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * <p>角色: user / assistant</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Role?: string
  /**
   * <p>消息内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * <p>状态</p>
   */
  Status?: string
  /**
   * <p>块内容</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContentBlocks?: Array<ContentBlockInfo>
}

/**
 * 官网通知内容模板
 */
export interface QCloudYeheNoticeTmpl {
  /**
   * 邮件通知渠道
   */
  Email?: QCloudYeheNoticeTmplItem
  /**
   * 企业微信通知渠道
   */
  QYWX?: QCloudYeheNoticeTmplItem
  /**
   * 短信通知渠道
   */
  SMS?: QCloudYeheNoticeTmplItem
  /**
   * 语音通知渠道
   */
  Voice?: QCloudYeheNoticeTmplItem
  /**
   * 微信通知渠道
   */
  WeChat?: QCloudYeheWeChatNoticeTmplItem
  /**
   * 站内信通知渠道
   */
  Site?: QCloudYeheNoticeTmplItem
  /**
   * 安灯通知渠道
   */
  Andon?: QCloudYeheNoticeTmplItem
}

/**
 * MCP 实体
 */
export interface MCPInfo {
  /**
   * <p>mcp的ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  MCPId?: string
  /**
   * <p>MCP 名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * <p>MCP 描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>MCP URL</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * <p>传输协议: sse / streamable_http / stdio</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Transport?: string
  /**
   * <p>认证类型: none / bearer / basic / api_key</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthType?: string
  /**
   * <p>认证密钥(响应时脱敏)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthSecret?: string
  /**
   * <p>超时时间(秒)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Timeout?: number
  /**
   * <p>重试次数</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RetryCount?: number
  /**
   * <p>请求头 JSON</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Headers?: string
  /**
   * <p>是否启用</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enabled?: boolean
}

/**
 * 告警通知内容模版自定义标题颜色
 */
export interface RobotNoticeTitleColor {
  /**
   * <p>通知内容模版自定义标题颜色默认颜色</p>
   */
  Default?: string
  /**
   * <p>通知内容模版自定义标题颜色规则，label 匹配设置颜色</p>
   */
  Rules?: Array<RobotNoticeTitleColorRules>
}

/**
 * CreateDispenseExternalRule返回参数结构体
 */
export interface CreateDispenseExternalRuleResponse {
  /**
   * 转发规则Id
   */
  RuleId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateNoticeContentTmpl请求参数结构体
 */
export interface CreateNoticeContentTmplRequest {
  /**
   * <p>模板名称</p>
   */
  TmplName: string
  /**
   * <p>监控类型</p>
   */
  MonitorType: string
  /**
   * <p>模板内容</p>
   */
  TmplContents: NoticeContentTmplItem
  /**
   * <p>模板语言 en/zh</p>
   */
  TmplLanguage: string
}

/**
 * 官网通知内容模板元素
 */
export interface QCloudYeheWeChatNoticeTmplItem {
  /**
   * 告警内容模板
   */
  AlarmContentTmpl?: string
  /**
   * 告警对象模板
   */
  AlarmObjectTmpl?: string
  /**
   * 告警地域模板
   */
  AlarmRegionTmpl?: string
  /**
   * 告警时间模板
   */
  AlarmTimeTmpl?: string
}

/**
 * DescribeExtNamespace请求参数结构体
 */
export type DescribeExtNamespaceRequest = null

/**
 * 告警通知自定义Webhook的通知内容模板匹配器
 */
export interface WebhookNoticeTmplMatcher {
  /**
   * 匹配状态 Invalid; Trigger 告警触发; Recovery 告警恢复
   */
  MatchingStatus?: Array<string>
  /**
   * 自定义Webhook内容模板
   */
  Template?: WebhookNoticeTmpl
}

/**
 * 转发过滤条件信息
 */
export interface DispenseCondition {
  /**
   * 对外指标名
   */
  ExtMetric?: string
  /**
   * 过滤条件表
   */
  DispenseFilters?: Array<DispenseFilter>
  /**
   * 过滤条件id
   */
  ConditionId?: number
}

/**
 * DescribeAIWorkbenchAgent返回参数结构体
 */
export interface DescribeAIWorkbenchAgentResponse {
  /**
   * <p>Agent 信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Agent?: AgentInfo
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 消息正文
 */
export interface ChannelContent {
  /**
   * <p>本段正文所属的渠道或子渠道全名</p><p>枚举值：</p><ul><li>QCloudYehe_site： 腾讯云野鹤，站内信</li><li>QCloudYehe_email： 腾讯云野鹤，电子邮件</li><li>QCloudYehe_sms： 腾讯云野鹤，短信</li><li>QCloudYehe_wechat： 腾讯云野鹤，微信</li><li>QCloudYehe_voice： 腾讯云野鹤，语音</li><li>QCloudYehe_qywx： 腾讯云野鹤，企业微信</li><li>QCloudYehe_andon： 腾讯云野鹤，安灯</li><li>TOF_weWorkMessage： TOF，企业微信消息</li><li>TOF_email： TOF，企业邮箱</li><li>TOF_phoneCall： TOF，电话</li><li>WeWork： 企业微信机器人</li><li>WebHook： 自定义 WebHook</li><li>FeiShu： 飞书</li><li>DingDing： 钉钉</li><li>Slack： Slack</li><li>GoogleChat： Google Chat</li><li>Teams： Teams</li><li>TeamsWorkflow： Teams Workflow</li><li>PagerDuty： PagerDuty</li><li>CLS： 日志服务 CLS</li><li>AS： 弹性伸缩</li><li>TCSYehe： TCS 野鹤。正文的 SubChannel 取渠道名本身</li><li>SCF： 云函数。不返回 Contents</li></ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubChannel?: string
  /**
   * <p>该渠道实际发送的消息正文，由 Ark 按写时捕获的内容还原</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
}

/**
 * 执行记录实体
 */
export interface ExecutionInfo {
  /**
   * <p>任务名</p>
   */
  Name?: string
  /**
   * <p>任务 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskId?: string
  /**
   * <p>执行 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExecutionId?: string
  /**
   * <p>Agent ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentId?: string
  /**
   * <p>会话 ID</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  SessionId?: string
  /**
   * <p>触发类型: manual / cron / webhook</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType?: string
  /**
   * <p>状态: pending/running/completed/failed/timeout/cancelled</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * <p>执行摘要</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Summary?: string
  /**
   * <p>执行耗时(毫秒)</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DurationMs?: number
}

/**
 * GetAIWorkbenchArtifactDownloadURL返回参数结构体
 */
export interface GetAIWorkbenchArtifactDownloadURLResponse {
  /**
   * <p>COS 预签名 HTTPS 下载 URL</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownloadURL?: string
  /**
   * <p>URL 过期时间（RFC3339 格式）</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredAt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警通知自定义PagerDutyRobot模板中的请求体头部描述
 */
export interface PagerDutyRobotNoticeTmplHeader {
  /**
   * http请求中header的key
   */
  Key: string
  /**
   * http请求中header的value
   */
  Values: Array<string>
}

/**
 * 通知内容模板绑定告警策略数量
 */
export interface NoticeContentTmplBindPolicyCount {
  /**
   * 通知内容模板ID
   */
  NoticeContentTmplID?: string
  /**
   * 绑定告警策略数量
   */
  BindCount?: number
}

/**
 * DescribeDispenseRegion请求参数结构体
 */
export type DescribeDispenseRegionRequest = null

/**
 * DescribeDispenseExternalRuleList请求参数结构体
 */
export interface DescribeDispenseExternalRuleListRequest {
  /**
   * 页数
   */
  Page: number
  /**
   * 页面大小
   */
  PageSize: number
  /**
   * 转发部署地域
   */
  DispenseRegions?: Array<string>
  /**
   * 关键字搜索规则名
   */
  Keyword?: string
}

/**
 * TriggerAIWorkbenchSREDigitalTwinTask请求参数结构体
 */
export interface TriggerAIWorkbenchSREDigitalTwinTaskRequest {
  /**
   * 数字分身任务ID
   */
  TaskID: number
}

/**
 * DescribeAIWorkbenchSREDigitalTwinWorkLogList返回参数结构体
 */
export interface DescribeAIWorkbenchSREDigitalTwinWorkLogListResponse {
  /**
   * Json序列化路径
   */
  JSONStrPaths?: Array<string>
  /**
   * 数字分身工作日志列表
   */
  Data?: AIWorkbenchSREDigitalTwinWorkLogList
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAIWorkbenchTask请求参数结构体
 */
export interface CreateAIWorkbenchTaskRequest {
  /**
   * <p>任务名称</p>
   */
  Name?: string
  /**
   * <p>任务描述</p>
   */
  Description?: string
  /**
   * <p>关联 Agent ID</p>
   */
  AgentId?: string
  /**
   * <p>提示词模板</p>
   */
  PromptTemplate?: string
  /**
   * <p>输出格式: markdown / json</p>
   */
  OutputFormat?: string
  /**
   * <p>触发类型: manual / cron / webhook</p>
   */
  TriggerType?: string
  /**
   * <p>Cron 表达式</p>
   */
  CronExpr?: string
  /**
   * <p>Cron 时区</p>
   */
  CronTimezone?: string
  /**
   * <p>关联资源地图 ID</p>
   */
  ResourceMapId?: string
  /**
   * <p>技能 ID 列表</p>
   */
  SkillIds?: Array<string>
  /**
   * <p>MCP 端点 ID 列表</p>
   */
  McpEndpointIds?: Array<string>
  /**
   * <p>超时时间(秒)</p>
   */
  TimeoutSec?: number
  /**
   * <p>重试次数</p>
   */
  RetryCount?: number
  /**
   * <p>是否启用</p>
   */
  Enabled?: boolean
}

/**
 * DescribeAIWorkbenchArtifact返回参数结构体
 */
export interface DescribeAIWorkbenchArtifactResponse {
  /**
   * <p>产物信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Artifact?: ArtifactInfo
  /**
   * <p>COS 预签名下载 URL</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  DownloadURL?: string
  /**
   * <p>下载 URL 过期时间（RFC3339 格式）</p>
   */
  DownloadURLExpiredAt?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CancelAIWorkbenchChat返回参数结构体
 */
export interface CancelAIWorkbenchChatResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyNoticeContentTmpl返回参数结构体
 */
export interface ModifyNoticeContentTmplResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDispenseExternalRuleStatus返回参数结构体
 */
export interface ModifyDispenseExternalRuleStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 企业微信机器人通知模板的匹配器
 */
export interface WeWorkRobotNoticeTmplMatcher {
  /**
   * 匹配状态 Invalid;
Trigger 告警触发; Recovery 告警恢复
   */
  MatchingStatus: Array<string>
  /**
   * 模板配置
   */
  Template: WeWorkRobotNoticeTmpl
}

/**
 * 每个 ContentBlockInfo 对应下游 ContentBlock 转换而来的一个 AGUI 事件。
 */
export interface ContentBlockInfo {
  /**
   * <p>类型</p>
   */
  Type?: string
  /**
   * <p>数据内容</p>
   */
  Data?: string
}

/**
 * 告警通知自定义PagerDutyRobot的通知内容模板匹配器
 */
export interface PagerDutyRobotNoticeTmplMatcher {
  /**
   * 匹配状态 Invalid; Trigger 告警触发; Recovery 告警恢复
   */
  MatchingStatus?: Array<string>
  /**
   * 自定义PagerDutyRobot内容模板
   */
  Template?: PagerDutyRobotNoticeTmpl
}

/**
 * DeleteDispenseExternalRule返回参数结构体
 */
export interface DeleteDispenseExternalRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 飞书机器人内容模板配置
 */
export interface FeiShuRobotNoticeTmpl {
  /**
   * <p>内容模板</p>
   */
  ContentTmpl: string
  /**
   * <p>标题模板</p>
   */
  TitleTmpl?: string
  /**
   * <p>通知内容模版标题自定义颜色</p>
   */
  TitleColor?: RobotNoticeTitleColor
}

/**
 * 全局维度
 */
export interface DispenseGlobalTag {
  /**
   * 维度key
   */
  Key?: string
  /**
   * 维度值
   */
  Value?: string
}

/**
 * ListAIWorkbenchAgents请求参数结构体
 */
export interface ListAIWorkbenchAgentsRequest {
  /**
   * <p>每页数量</p>
   */
  PerPage?: number
  /**
   * <p>页码</p>
   */
  PageNo?: number
  /**
   * <p>状态筛选</p>
   */
  Status?: string
  /**
   * <p>分类筛选</p>
   */
  Category?: string
  /**
   * <p>搜索关键词</p>
   */
  Keyword?: string
  /**
   * <p>来源筛选</p>
   */
  Source?: string
  /**
   * <p>Agent ID 列表筛选</p>
   */
  AgentIds?: Array<string>
}

/**
 * DescribeDispenseRegion返回参数结构体
 */
export interface DescribeDispenseRegionResponse {
  /**
   * 转发地域列表
   */
  RegionList?: Array<DispenseRegion>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNoticeContentTmpls返回参数结构体
 */
export interface DeleteNoticeContentTmplsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AI工作台SRE数字分身任务列表
 */
export interface AIWorkbenchSREDigitalTwinTaskList {
  /**
   * 任务列表
   */
  Tasks?: Array<AIWorkbenchSREDigitalTwinTask>
  /**
   * 任务总数
   */
  Total?: number
}

/**
 * UpdateAIWorkbenchAgent请求参数结构体
 */
export interface UpdateAIWorkbenchAgentRequest {
  /**
   * <p>Agent ID</p>
   */
  AgentId?: string
  /**
   * <p>Agent 名称</p>
   */
  Name?: string
  /**
   * <p>Agent 描述</p>
   */
  Description?: string
  /**
   * <p>Agent 分类</p>
   */
  Category?: string
  /**
   * <p>Agent 标签</p>
   */
  Tags?: Array<string>
  /**
   * <p>Agent 提示词</p>
   */
  Instruction?: InstructionConfig
  /**
   * <p>关联技能 ID 列表</p>
   */
  SkillIds?: Array<string>
  /**
   * <p>来源</p>
   */
  Source?: string
  /**
   * <p>状态</p>
   */
  Status?: string
  /**
   * <p>关联的资源地图 ID</p>
   */
  ResourceMapId?: string
  /**
   * <p>关联的mcp</p>
   */
  MCPIds?: Array<string>
  /**
   * <p>agent运行时环境变量</p>
   */
  EnvVars?: Array<EnvVar>
}

/**
 * ModifyNoticeContentTmpl请求参数结构体
 */
export interface ModifyNoticeContentTmplRequest {
  /**
   * 模板名称
   */
  TmplName: string
  /**
   * 模板内容
   */
  TmplContents: NoticeContentTmplItem
  /**
   * 需要修改的模板ID
   */
  TmplID: string
}

/**
 * DescribeExtMetric返回参数结构体
 */
export interface DescribeExtMetricResponse {
  /**
   * 对外指标
   */
  ExtMetricList?: Array<ExtMetric>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * agent运行时所需环境变量
 */
export interface EnvVar {
  /**
   * <p>环境变量key</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key?: string
  /**
   * <p>环境变量value</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: EnvEntry
}

/**
 * ModifyDispenseExternalRule返回参数结构体
 */
export interface ModifyDispenseExternalRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
