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
 * DescribeAlarmNotifyHistories请求参数结构体
 */
export interface DescribeAlarmNotifyHistoriesRequest {
  /**
   * 监控类型
   */
  MonitorType: string
  /**
   * 起始时间点，unix秒级时间戳
   */
  QueryBaseTime: number
  /**
   * 从 QueryBaseTime 开始，需要查询往前多久的时间，单位秒
   */
  QueryBeforeSeconds: number
  /**
   * 分页参数
   */
  PageParams: PageByNoParams
  /**
   * 当监控类型为 MT_QCE 时候需要填写，归属的命名空间
   */
  Namespace?: string
  /**
   * 当监控类型为 MT_QCE 时候需要填写， 告警策略类型
   */
  ModelName?: string
  /**
   * 查询某个策略的通知历史
   */
  PolicyId?: string
}

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
 * DeleteNoticeContentTmpls请求参数结构体
 */
export interface DeleteNoticeContentTmplsRequest {
  /**
   * 要删除的模板id
   */
  TmplIDs?: Array<string>
}

/**
 * 分页请求参数
 */
export interface PageByNoParams {
  /**
   * 每个分页的数量是多少
注意：此字段可能返回 null，表示取不到有效值。
   */
  PerPage?: number
  /**
   * 第几个分页，从1开始
注意：此字段可能返回 null，表示取不到有效值。
   */
  PageNo?: string
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
 * 接受人详情信息
 */
export interface ChannelsReceivers {
  /**
   * 通知渠道名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelName?: string
  /**
   * 接收者
注意：此字段可能返回 null，表示取不到有效值。
   */
  Receivers?: Array<string>
  /**
   * 发送结果,0-无效,1-成功,2-失败,3-无需发送
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendStatus?: string
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
 * CreateNoticeContentTmpl返回参数结构体
 */
export interface CreateNoticeContentTmplResponse {
  /**
   * 自定义内容模板ID
   */
  TmplID?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * TriggerAIWorkbenchSREDigitalTwinTask请求参数结构体
 */
export interface TriggerAIWorkbenchSREDigitalTwinTaskRequest {
  /**
   * 数字分身任务ID
   */
  TaskID: number
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
 * 触发数字分身任务响应
 */
export interface TriggerDigitalTwinTaskResp {
  /**
   * 数字分身任务ID
   */
  TaskID?: number
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
 * DescribeAIWorkbenchSREDigitalTwinWorkLogDetail请求参数结构体
 */
export interface DescribeAIWorkbenchSREDigitalTwinWorkLogDetailRequest {
  /**
   * 工作日志ID
   */
  WorkLogID: number
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
 * DescribeAlarmNotifyHistories返回参数结构体
 */
export interface DescribeAlarmNotifyHistoriesResponse {
  /**
   * 告警历史
   */
  AlarmNotifyHistoryList?: Array<AlarmNotifyHistory>
  /**
   * 分页情况
   */
  PageResult?: PageByNoResult
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
 * Google Chat 机器人内容模板配置
 */
export interface GoogleChatRobotNoticeTmpl {
  /**
   * 内容模板
   */
  ContentTmpl: string
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
 * 飞书机器人内容模板配置
 */
export interface FeiShuRobotNoticeTmpl {
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
 * 单个告警通知历史
 */
export interface AlarmNotifyHistory {
  /**
   * 通知的唯一ID
   */
  NotifyId?: string
  /**
   * 告警策略ID
   */
  PolicyId?: string
  /**
   * 告警周期iD
   */
  SessionId?: string
  /**
   * 通知时间 unix秒级时间戳
   */
  NotifyTime?: number
  /**
   * 触发时间 unix秒级时间戳
   */
  TriggerTime?: number
  /**
   * 告警级别 None 非分级告警级别; Note 提示级别; Warn 严重级别; Serious 紧急级别
   */
  TriggerLevel?: string
  /**
   * 告警内容
   */
  AlarmContent?: string
  /**
   * 告警对象
   */
  AlarmObject?: string
  /**
   * 本次告警通知涉及到的渠道合集
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelSet?: Array<string>
  /**
   * 渠道的接收人信息
   */
  ChannelsReceivers?: Array<ChannelsReceivers>
  /**
   * 告警策略名称
   */
  PolicyName?: string
  /**
   * Prometheus实例ID, 仅当 MT_PROME 时有效
   */
  PromeInstanceID?: string
  /**
   * Prometheus实例所在的地域, 仅当 MT_PROME 时有效
   */
  PromeInstanceRegion?: string
  /**
   * 通知模板相关的配置信息
   */
  Notices?: Array<NotifyRelatedNotice>
  /**
   * 告警触发状态  Trigger 告警状态触发; Recovery 告警状态恢复
   */
  TriggerStatus?: string
  /**
   * 与当前Prometheus通知历史相关控制台页面地址，仅当 MR_PROME 时有效
   */
  PromeConsoleURL?: string
  /**
   * 告警的lable
   */
  Labels?: Array<AlarmLable>
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
 * DeleteNoticeContentTmpls返回参数结构体
 */
export interface DeleteNoticeContentTmplsResponse {
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
 * 企业微信机器人内容模板配置
 */
export interface SlackRobotNoticeTmpl {
  /**
   * <p>内容模板</p>
   */
  ContentTmpl: string
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
 * CreateNoticeContentTmpl请求参数结构体
 */
export interface CreateNoticeContentTmplRequest {
  /**
   * 模板名称
   */
  TmplName: string
  /**
   * 监控类型
   */
  MonitorType: string
  /**
   * 模板内容
   */
  TmplContents: NoticeContentTmplItem
  /**
   * 模板语言 en/zh
   */
  TmplLanguage: string
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
 * 自定义通知内容模板
 */
export interface NoticeContentTmpl {
  /**
   * 自定义通知内容模板id，唯一id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmplID?: string
  /**
   * 自定义通知内容模板名
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmplName?: string
  /**
   * 通知内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  TmplContents?: NoticeContentTmplItem
  /**
   * Unix时间戳，秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: number
  /**
   * Unix时间戳，秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 最后修改人
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastModifier?: string
  /**
   * 创建人
注意：此字段可能返回 null，表示取不到有效值。
   */
  Creator?: string
  /**
   * 监控类型
   */
  MonitorType?: string
  /**
   * 模板语言 en/zh
   */
  TmplLanguage?: string
}
