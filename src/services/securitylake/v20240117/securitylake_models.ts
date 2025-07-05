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
 * 被归并的原始告警信息
 */
export interface SecurityGroupAlertInfo {
  /**
   * 告警Uuid
   */
  AlarmUuid?: string
  /**
   * 告警生成时间
   */
  Timestamp?: string
}

/**
 * DescribeSecurityAlarmTableList返回参数结构体
 */
export interface DescribeSecurityAlarmTableListResponse {
  /**
   * 字段列表
   */
  AlarmList?: Array<SecurityAlarmTable>
  /**
   * 数量
   */
  TotalCount?: number
  /**
   * 限制
   */
  Limit?: number
  /**
   * 偏移
   */
  Offset?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警列表
 */
export interface SecurityAlarmTable {
  /**
   * 时间
   */
  Timestamp?: string
  /**
   * 告警名称
   */
  AlarmName?: string
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 告警id
   */
  AlarmId?: number
  /**
   * 安全性
   */
  Severity?: number
  /**
   * 评分
   */
  Score?: number
  /**
   * 分类
   */
  Category?: string
  /**
   * 子分类
   */
  SubCategory?: string
  /**
   * 标签
   */
  Tags?: string
  /**
   * 有效载荷
   */
  Payload?: string
  /**
   * 结果
   */
  Result?: string
  /**
   * 可信度
   */
  Confidence?: number
  /**
   * 状态
   */
  Status?: string
  /**
   * 规则主题
   */
  RuleTopic?: string
  /**
   * 处理时间
   */
  HandleTime?: string
  /**
   * 建议
   */
  Suggestion?: string
  /**
   * 描述
   */
  Description?: string
  /**
   * 来源名称
   */
  SourceName?: string
  /**
   * APPID
   */
  AppId?: number
  /**
   * 规则ID
   */
  RuleId?: number
  /**
   * 事件时间
   */
  EventTime?: string
  /**
   * 规则类型
   */
  RuleType?: string
  /**
   * 攻击次数
   */
  AttackNum?: number
  /**
   * 告警数量
   */
  AlarmCount?: number
  /**
   * ATT&CK子技术
   */
  AttackSubTechnique?: string
  /**
   * ATT&CK技术
   */
  AttackTechnique?: string
  /**
   * ATT&CK战术
   */
  AttackTactic?: string
  /**
   * ATT&CK子技术名称
   */
  AttackSubTechniqueName?: string
  /**
   * ATT&CK技术名称
   */
  AttackTechniqueName?: string
  /**
   * 凭证访问
   */
  AttackTacticName?: string
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 规则表达式
   */
  RuleExpression?: string
  /**
   * 表达式类型
   */
  ExpressionType?: string
  /**
   * 下钻表达式
   */
  DrillDownExpression?: string
  /**
   * 源IP
   */
  SrcIp?: string
  /**
   * 源端口
   */
  SrcPort?: number
  /**
   * 目的IP
   */
  DstIp?: string
  /**
   * 目的端口
   */
  DstPort?: number
  /**
   * 主机IP
   */
  HostIp?: string
  /**
   * 主机资产
   */
  HostAsset?: string
  /**
   * 实例id
   */
  SdlId?: string
  /**
   * 自定义富化字段信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RichCustomInfos?: Array<string>
  /**
   * 攻击者ip
   */
  AttackerIp?: string
  /**
   * 攻击者资产ID
   */
  AttackerAsset?: string
  /**
   * 受害者ip
   */
  VictimIp?: string
  /**
   * 受害者资产ID
   */
  VictimAsset?: string
  /**
   * 攻击方向
   */
  AttackDirection?: string
  /**
   * 流量方向
   */
  TrafficDirection?: string
  /**
   * 测试
   */
  SecurityGroupAlertInfos?: Array<SecurityGroupAlertInfo>
}

/**
 * DescribeSecurityAlarmTableList请求参数结构体
 */
export interface DescribeSecurityAlarmTableListRequest {
  /**
   * 实例ID
   */
  SdlId?: string
  /**
   * 过滤条件
   */
  Filters?: Array<WebSearchFilter>
  /**
   * 长度
   */
  Limit?: number
  /**
   * 偏移
   */
  Offset?: number
  /**
   * 排序
   */
  Order?: string
  /**
   * 排序字段
   */
  By?: string
  /**
   * 开始时间,毫秒
   */
  StartTime?: number
  /**
   * 结束时间
   */
  EndTime?: number
}

/**
 * web搜索过滤
 */
export interface WebSearchFilter {
  /**
   * 过滤字段
   */
  Name?: string
  /**
   * 值
   */
  Values?: Array<string>
  /**
   * 是否全匹配
   */
  ExactMatch?: boolean
}
