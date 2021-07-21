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
 * 响应体的返回码
 */
export interface ResponseCode {
  /**
   * 如果成功则返回Success，失败则返回yunapi定义的错误码
   */
  Code: string

  /**
   * 如果成功则返回Success，失败则返回WAF定义的二级错误码
   */
  Message: string
}

/**
 * DescribeCustomRules接口回包中的复杂类型
 */
export interface DescribeCustomRulesRspRuleListItem {
  /**
   * 动作类型
   */
  ActionType: string

  /**
   * 跳过的策略
   */
  Bypass: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 策略名称
   */
  Name: string

  /**
   * 重定向地址
   */
  Redirect: string

  /**
   * 策略ID
   */
  RuleId: string

  /**
   * 优先级
   */
  SortId: string

  /**
   * 状态
   */
  Status: string

  /**
   * 策略详情
   */
  Strategies: Array<Strategy>
}

/**
 * ModifyCustomRuleStatus返回参数结构体
 */
export interface ModifyCustomRuleStatusResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success: ResponseCode

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeUserClbWafRegions返回参数结构体
 */
export interface DescribeUserClbWafRegionsResponse {
  /**
      * 地域（标准的ap-格式）列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAttackDownloadRecord返回参数结构体
 */
export interface DeleteAttackDownloadRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccessPeriod返回参数结构体
 */
export interface ModifyAccessPeriodResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowTrend请求参数结构体
 */
export interface DescribeFlowTrendRequest {
  /**
   * 需要获取流量趋势的域名, all表示所有域名
   */
  Domain: string

  /**
   * 起始时间戳，精度秒
   */
  StartTs: number

  /**
   * 结束时间戳，精度秒
   */
  EndTs: number
}

/**
 * ModifyCustomRuleStatus请求参数结构体
 */
export interface ModifyCustomRuleStatusRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 规则ID
   */
  RuleId: number

  /**
   * 开关的状态，1是开启、0是关闭
   */
  Status: number

  /**
   * WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。
   */
  Edition?: string
}

/**
 * DeleteDownloadRecord返回参数结构体
 */
export interface DeleteDownloadRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAccessPeriod请求参数结构体
 */
export interface ModifyAccessPeriodRequest {
  /**
   * 访问日志保存期限，范围为[1, 30]
   */
  Period: number

  /**
   * 日志主题
   */
  TopicId: string
}

/**
 * DescribeUserClbWafRegions请求参数结构体
 */
export type DescribeUserClbWafRegionsRequest = null

/**
 * DeleteAttackDownloadRecord请求参数结构体
 */
export interface DeleteAttackDownloadRecordRequest {
  /**
   * 下载任务记录唯一标记
   */
  Id: number
}

/**
 * DeleteSession返回参数结构体
 */
export interface DeleteSessionResponse {
  /**
      * 结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * bot的趋势图对象
 */
export interface BotStatPointItem {
  /**
   * 横坐标
   */
  TimeStamp: string

  /**
   * value的所属对象
   */
  Key: string

  /**
   * 纵列表
   */
  Value: number

  /**
   * Key对应的页面展示内容
   */
  Label: string
}

/**
 * DescribeCustomRules返回参数结构体
 */
export interface DescribeCustomRulesResponse {
  /**
   * 规则详情
   */
  RuleList: Array<DescribeCustomRulesRspRuleListItem>

  /**
   * 规则条数
   */
  TotalCount: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSession请求参数结构体
 */
export interface DeleteSessionRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * clb-waf 或者 sprta-waf
   */
  Edition?: string
}

/**
 * CreateAttackDownloadTask返回参数结构体
 */
export interface CreateAttackDownloadTaskResponse {
  /**
   * 任务ID
   */
  Flow: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自定义规则的匹配条件结构体
 */
export interface Strategy {
  /**
   * 匹配字段
   */
  Field: string

  /**
   * 逻辑符号
   */
  CompareFunc: string

  /**
   * 匹配内容
   */
  Content: string

  /**
   * 匹配参数
   */
  Arg: string
}

/**
 * AddCustomRule返回参数结构体
 */
export interface AddCustomRuleResponse {
  /**
   * 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败
   */
  Success: ResponseCode

  /**
      * 添加成功的规则ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleId: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlowTrend返回参数结构体
 */
export interface DescribeFlowTrendResponse {
  /**
   * 流量趋势数据
   */
  Data: Array<BotStatPointItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCustomRule请求参数结构体
 */
export interface AddCustomRuleRequest {
  /**
   * 规则名称
   */
  Name: string

  /**
   * 优先级
   */
  SortId: string

  /**
   * 过期时间
   */
  ExpireTime: string

  /**
   * 策略详情
   */
  Strategies: Array<Strategy>

  /**
   * 需要添加策略的域名
   */
  Domain: string

  /**
   * 动作类型
   */
  ActionType: string

  /**
   * 如果动作是重定向，则表示重定向的地址；其他情况可以为空
   */
  Redirect?: string

  /**
   * "clb-waf"或者"sparta-waf"
   */
  Edition?: string

  /**
   * 放行的详情
   */
  Bypass?: string
}

/**
 * DescribeCustomRules请求参数结构体
 */
export interface DescribeCustomRulesRequest {
  /**
   * 域名
   */
  Domain: string

  /**
   * 分页参数
   */
  Paging: DescribeCustomRulesPagingInfo

  /**
   * clb-waf或者sparta-waf
   */
  Edition?: string

  /**
   * 过滤参数：动作类型：0放行，1阻断，2人机识别，3观察，4重定向
   */
  ActionType?: string

  /**
   * 过滤参数：规则名称过滤条件
   */
  Search?: string
}

/**
 * DescribeCustomRules接口的翻页参数
 */
export interface DescribeCustomRulesPagingInfo {
  /**
   * 当前页码
   */
  Offset: number

  /**
   * 当前页的最大数据条数
   */
  Limit: number
}

/**
 * DeleteDownloadRecord请求参数结构体
 */
export interface DeleteDownloadRecordRequest {
  /**
   * 记录id
   */
  Flow: string
}

/**
 * CreateAttackDownloadTask请求参数结构体
 */
export interface CreateAttackDownloadTaskRequest {
  /**
   * 域名，所有域名填写all
   */
  Domain: string

  /**
   * 查询起始时间
   */
  FromTime: string

  /**
   * 查询结束时间
   */
  ToTime: string

  /**
   * 下载任务名字
   */
  Name: string

  /**
   * 风险等级
   */
  RiskLevel?: number

  /**
   * 拦截状态
   */
  Status?: number

  /**
   * 自定义策略ID
   */
  RuleId?: number

  /**
   * 攻击者IP
   */
  AttackIp?: string

  /**
   * 攻击类型
   */
  AttackType?: string
}
