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
 * 内容通知模板元素
 */
export interface NoticeContentTmplItem {
  /**
   * 官网通知渠道配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  QCloudYehe?: Array<QCloudYeheNoticeTmplMatcher>
  /**
   * 企业微信机器人通知渠道配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  WeWorkRobot?: Array<WeWorkRobotNoticeTmplMatcher>
  /**
   * 钉钉机器人通知渠道配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  DingDingRobot?: Array<DingDingRobotNoticeTmplMatcher>
  /**
   * 飞书机器人通知渠道配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  FeiShuRobot?: Array<FeiShuRobotNoticeTmplMatcher>
  /**
   * 自定义Webhook通知渠道配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Webhook?: Array<WebhookNoticeTmplMatcher>
  /**
   * Teams机器人通知渠道配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  TeamsRobot?: Array<TeamsRobotNoticeTmplMatcher>
  /**
   * PagerDutyRobot机器人通知渠道配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  PagerDutyRobot?: Array<PagerDutyRobotNoticeTmplMatcher>
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
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 企业微信机器人内容模板配置
 */
export interface TeamsRobotNoticeTmpl {
  /**
   * 内容模板
   */
  ContentTmpl: string
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
