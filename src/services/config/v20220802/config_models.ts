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
 * 资源列列表信息
 */
export interface ResourceListInfo {
  /**
   * 资源类型
   */
  ResourceType?: string
  /**
   * 资源名称
   */
  ResourceName?: string
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 地域
   */
  ResourceRegion?: string
  /**
   * 资源状态
   */
  ResourceStatus?: string
  /**
   * 1 :已删除 2：未删除
   */
  ResourceDelete?: number
  /**
   * 资源创建时间
   */
  ResourceCreateTime?: string
  /**
   * 标签信息
   */
  Tags?: Array<Tag>
  /**
   * 可用区
   */
  ResourceZone?: string
  /**
   * 合规状态
   */
  ComplianceResult?: string
}

/**
 * ListAggregateDiscoveredResources请求参数结构体
 */
export interface ListAggregateDiscoveredResourcesRequest {
  /**
   * 每页显示数量
   */
  MaxResults: number
  /**
   * 账号组ID
   */
  AccountGroupId: string
  /**
   * resourceName：资源名  resourceId ：资源ID resourceType：资源类型
   */
  Filters?: Array<Filter>
  /**
   * 标签
   */
  Tags?: Array<Tag>
  /**
   * 下一页token
   */
  NextToken?: string
  /**
   * 排序方式 asc、desc
   */
  OrderType?: string
}

/**
 * AddAggregateCompliancePack返回参数结构体
 */
export interface AddAggregateCompliancePackResponse {
  /**
   * <p>合规包Id</p>
   */
  CompliancePackId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseAggregateConfigRule返回参数结构体
 */
export interface CloseAggregateConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddCompliancePack请求参数结构体
 */
export interface AddCompliancePackRequest {
  /**
   * <p>合规包规则</p>
   */
  ConfigRules: Array<CompliancePackRule>
  /**
   * <p>风险等级<br>1：高风险。<br>2：中风险。<br>3：低风险。</p>
   */
  RiskLevel: number
  /**
   * <p>合规包名称</p>
   */
  CompliancePackName: string
  /**
   * <p>描述</p>
   */
  Description?: string
}

/**
 * ListRemediations请求参数结构体
 */
export interface ListRemediationsRequest {
  /**
   * 分页条数。默认20， 取值1~200
   */
  Limit?: number
  /**
   * 规则ID
   */
  RuleIds?: Array<string>
}

/**
 * DescribeAggregator请求参数结构体
 */
export interface DescribeAggregatorRequest {
  /**
   * <p>账号组ID</p>
   */
  AccountGroupId: string
  /**
   * <p>账号组创建者ID</p>
   */
  OwnerUin: number
}

/**
 * PutEvaluations返回参数结构体
 */
export interface PutEvaluationsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenAggregateConfigRule返回参数结构体
 */
export interface OpenAggregateConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AddAggregateCompliancePack请求参数结构体
 */
export interface AddAggregateCompliancePackRequest {
  /**
   * <p>合规包规则</p>
   */
  ConfigRules: Array<CompliancePackRule>
  /**
   * <p>风险等级<br>1：高风险。<br>2：中风险。<br>3：低风险。</p>
   */
  RiskLevel: number
  /**
   * <p>合规包名称</p>
   */
  CompliancePackName: string
  /**
   * <p>账号组ID</p>
   */
  AccountGroupId: string
  /**
   * <p>描述</p>
   */
  Description?: string
}

/**
 * DescribeAggregateCompliancePack返回参数结构体
 */
export interface DescribeAggregateCompliancePackResponse {
  /**
   * 合规包名称
   */
  CompliancePackName: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 风险等级
   */
  RiskLevel: number
  /**
   * 合规包规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigRules: Array<ComplianceConfigRule>
  /**
   * 合规包id
   */
  CompliancePackId: string
  /**
   * 合规包状态
   */
  Status: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartAggregateConfigRuleEvaluation返回参数结构体
 */
export interface StartAggregateConfigRuleEvaluationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseConfigRecorder请求参数结构体
 */
export type CloseConfigRecorderRequest = null

/**
 * DescribeSystemRule请求参数结构体
 */
export interface DescribeSystemRuleRequest {
  /**
   * 规则唯一标识
   */
  Identifier?: string
}

/**
 * ListConfigRules返回参数结构体
 */
export interface ListConfigRulesResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 详情
   */
  Items?: Array<ConfigRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 系统合规包信息
 */
export interface SystemCompliancePack {
  /**
   * 合规包ID
   */
  CompliancePackId: string
  /**
   * 名称
   */
  CompliancePackName: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 合规包风险等级1：高风险。
2：中风险。
3：低风险。
   */
  RiskLevel: number
  /**
   * 合规包规则信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigRules: Array<CompliancePackRuleForManage>
}

/**
 * DeleteConfigRule返回参数结构体
 */
export interface DeleteConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合规详情
 */
export interface Annotation {
  /**
   * 资源当前实际配置。长度为0~256位字符，即资源不合规配置
   */
  Configuration: string
  /**
   * 资源期望配置。长度为0~256位字符，即资源合规配置
   */
  DesiredValue: string
  /**
   * 资源当前配置和期望配置之间的比较运算符。长度为0~16位字符，自定义规则上报评估结果此字段可能为空
   */
  Operator?: string
  /**
   * 当前配置在资源属性结构体中的JSON路径。长度为0~256位字符，自定义规则上报评估结果此字段可能为空
   */
  Property?: string
}

/**
 * UpdateRemediation返回参数结构体
 */
export interface UpdateRemediationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListSystemRules返回参数结构体
 */
export interface ListSystemRulesResponse {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 详情
   */
  Items: Array<SystemConfigRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAggregator返回参数结构体
 */
export interface CreateAggregatorResponse {
  /**
   * <p>账号组Id</p>
   */
  AccountGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateConfigRecorder请求参数结构体
 */
export interface UpdateConfigRecorderRequest {
  /**
   * 资源类型列表
   */
  ResourceTypes?: Array<string>
}

/**
 * ListAggregateCompliancePacks返回参数结构体
 */
export interface ListAggregateCompliancePacksResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>详情</p>
   */
  Items?: Array<ConfigCompliancePack>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListSystemCompliancePacks返回参数结构体
 */
export interface ListSystemCompliancePacksResponse {
  /**
   * 总数
   */
  Total: number
  /**
   * 详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items: Array<SystemCompliancePack>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAggregateConfigRuleEvaluationResults返回参数结构体
 */
export interface ListAggregateConfigRuleEvaluationResultsResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>详情</p>
   */
  Items?: Array<AggregateEvaluationResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseAggregateConfigRule请求参数结构体
 */
export interface CloseAggregateConfigRuleRequest {
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 账号组Id
   */
  AccountGroupId: string
}

/**
 * DescribeAggregateDiscoveredResource返回参数结构体
 */
export interface DescribeAggregateDiscoveredResourceResponse {
  /**
   * 资源Id
   */
  ResourceId?: string
  /**
   * 资源类型
   */
  ResourceType?: string
  /**
   * 资源名
   */
  ResourceName?: string
  /**
   * 资源地域
   */
  ResourceRegion?: string
  /**
   * 资源可用区
   */
  ResourceZone?: string
  /**
   * 资源配置
   */
  Configuration?: string
  /**
   * 资源创建时间
   */
  ResourceCreateTime?: string
  /**
   * 资源标签
   */
  Tags?: Array<Tag>
  /**
   * 资源更新时间
   */
  UpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 成员信息
 */
export interface AggregatorAccount {
  /**
   * 成员ID
   */
  MemberUin: number
  /**
   * 成员名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemberName: string
}

/**
 * 规则入参
 */
export interface InputParameterForManage {
  /**
   * 值类型。数值：Integer， 字符串：String
   */
  ValueType?: string
  /**
   * 参数Key
   */
  ParameterKey?: string
  /**
   * 参数类型。必填类型：Require，可选类型：Optional。
   */
  Type?: string
  /**
   * 默认值
   */
  DefaultValue?: string
  /**
   * 描述
   */
  Description?: string
}

/**
 * ListConfigRules请求参数结构体
 */
export interface ListConfigRulesRequest {
  /**
   * 每页数量。
取值范围：1~200
   */
  Limit: number
  /**
   * 偏移量。
取值范围：最小值为0
   */
  Offset: number
  /**
   * 排序类型(规则名称)。
倒序：desc，
顺序：asc
   */
  OrderType?: string
  /**
   * 风险等级。
1：高风险，
2：中风险，
3：低风险。
   */
  RiskLevel?: Array<number | bigint>
  /**
   * 规则状态。
ACTIVE：启用
UN_ACTIVE：停用

   */
  State?: string
  /**
   * 评估结果。
COMPLIANT：合规
NON_COMPLIANT：不合规
   */
  ComplianceResult?: Array<string>
  /**
   * 规则名
   */
  RuleName?: string
}

/**
 * DescribeAggregateConfigRule请求参数结构体
 */
export interface DescribeAggregateConfigRuleRequest {
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 账号组
   */
  AccountGroupId: string
}

/**
 * 规则编号信息
 */
export interface Control {
  /**
   * <p>规则编号</p>
   */
  Id?: string
  /**
   * <p>编号描述</p>
   */
  Description?: string
}

/**
 * ListAggregateConfigRules请求参数结构体
 */
export interface ListAggregateConfigRulesRequest {
  /**
   * <p>每页限制</p>
   */
  Limit: number
  /**
   * <p>偏移量</p>
   */
  Offset: number
  /**
   * <p>账号组ID</p>
   */
  AccountGroupId: string
  /**
   * <p>排序类型, 倒序：desc，顺序：asc</p>
   */
  OrderType?: string
  /**
   * <p>风险等级<br>1：高风险。<br>2：中风险。<br>3：低风险。</p>
   */
  RiskLevel?: Array<number | bigint>
  /**
   * <p>规则状态</p>
   */
  State?: string
  /**
   * <p>评估结果</p>
   */
  ComplianceResult?: Array<string>
  /**
   * <p>规则名</p>
   */
  RuleName?: string
  /**
   * <p>规则所属账号ID</p>
   */
  RuleOwnerId?: number
}

/**
 * ListConfigRuleEvaluationResults返回参数结构体
 */
export interface ListConfigRuleEvaluationResultsResponse {
  /**
   * 总数
   */
  Total: number
  /**
   * 详情
   */
  Items: Array<EvaluationResult>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCompliancePack请求参数结构体
 */
export interface DescribeCompliancePackRequest {
  /**
   * 合规包ID
   */
  CompliancePackId?: string
}

/**
 * ListDiscoveredResources返回参数结构体
 */
export interface ListDiscoveredResourcesResponse {
  /**
   * 详情
   */
  Items?: Array<ResourceListInfo>
  /**
   * 下一页
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextToken?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAggregateCompliancePackStatus返回参数结构体
 */
export interface UpdateAggregateCompliancePackStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用户组列表信息
 */
export interface Aggregator {
  /**
   * 账号组名称
   */
  Name: string
  /**
   * 账号组描述
   */
  Description: string
  /**
   * 创建者用户ID
   */
  OwnerUin: number
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 账号组成员数量
   */
  AccountCount: number
  /**
   * RD:全局账号组
   */
  Type: string
  /**
   * 账号组ID
   */
  AccountGroupId: string
  /**
   * 账号组状态
   */
  AggregatorStatus?: number
  /**
   * 账号组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MemberName?: string
}

/**
 * DescribeAggregateConfigDeliver返回参数结构体
 */
export interface DescribeAggregateConfigDeliverResponse {
  /**
   * 投递名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverName?: string
  /**
   * 资源六段式
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetArn?: string
  /**
   * 投递状态 DeliverStatus：0 关闭  1 开启
   */
  Status?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 日志前缀
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverPrefix?: string
  /**
   * 投递类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverType?: string
  /**
   * 支持跨账号投递的成员账号uin，只能是委派管理员。默认为0，即投递到管理员账号下
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverUin?: number
  /**
   * 1：配置变更 2： 资源列表 3：全部
   */
  DeliverContentType?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenConfigRecorder返回参数结构体
 */
export interface OpenConfigRecorderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateConfigDeliver返回参数结构体
 */
export interface UpdateConfigDeliverResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigRule返回参数结构体
 */
export interface DescribeConfigRuleResponse {
  /**
   * 规则详情
   */
  ConfigRule: ConfigRule
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateCompliancePack请求参数结构体
 */
export interface UpdateCompliancePackRequest {
  /**
   * 合规包名称
   */
  CompliancePackName: string
  /**
   * 风险等级
   */
  RiskLevel: number
  /**
   * 合规包ID
   */
  CompliancePackId: string
  /**
   * 合规包规则
   */
  ConfigRules: Array<CompliancePackRule>
  /**
   * 描述
   */
  Description?: string
}

/**
 * ListCompliancePacks请求参数结构体
 */
export interface ListCompliancePacksRequest {
  /**
   * 数量
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 合规包名称
   */
  CompliancePackName?: string
  /**
   * 风险等级
1：高风险。
2：中风险。
3：低风险。
   */
  RiskLevel?: Array<number | bigint>
  /**
   * 合规包状态 ACTIVE、NO_ACTIVE
   */
  Status?: string
  /**
   * 评估状态合规： 'COMPLIANT'
不合规： 'NON_COMPLIANT'
   */
  ComplianceResult?: Array<string>
  /**
   * 排序类型, 倒序：desc，顺序：asc
   */
  OrderType?: string
}

/**
 * UpdateCompliancePackStatus返回参数结构体
 */
export interface UpdateCompliancePackStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAggregateCompliancePackStatus请求参数结构体
 */
export interface UpdateAggregateCompliancePackStatusRequest {
  /**
   * 合规包ID
   */
  CompliancePackId: string
  /**
   * ACTIVE：启用
UN_ACTIVE ：停用
   */
  Status: string
  /**
   * 账号组ID
   */
  AccountGroupId: string
}

/**
 * UpdateConfigRecorder返回参数结构体
 */
export interface UpdateConfigRecorderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSystemCompliancePack返回参数结构体
 */
export interface DescribeSystemCompliancePackResponse {
  /**
   * 合规包ID
   */
  CompliancePackId?: string
  /**
   * 合规包名称
   */
  CompliancePackName?: string
  /**
   * 合规包描述
   */
  Description?: string
  /**
   * 风险等级
   */
  RiskLevel?: number
  /**
   * 合规包规则列表
   */
  ConfigRules?: Array<CompliancePackRuleForManage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 合规包规则信息
 */
export interface CompliancePackRules {
  /**
   * <p>规则标识</p>
   */
  Identifier: string
  /**
   * <p>规则编号信息</p>
   */
  Control?: Array<Control>
  /**
   * <p>资源类型</p>
   */
  ResourceTypes?: Array<string>
}

/**
 * 合规包规则信息
 */
export interface ComplianceConfigRule {
  /**
   * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName: string
  /**
   * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskLevel: number
  /**
   * 规则状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 规则ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigRuleId: string
  /**
   * 评估结果
合规： 'COMPLIANT'
不合规： 'NON_COMPLIANT'
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComplianceResult: string
  /**
   * 关键字
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels: Array<string>
  /**
   * 入参
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputParameter: Array<InputParameter>
  /**
   * 参数格式
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceCondition: Array<SourceConditionForManage>
  /**
   * 规则标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Identifier: string
  /**
   * 创建方式 user、compliancePack、system
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateByType: string
  /**
   * 规则描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 参数描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManageInputParameter: Array<InputParameterForManage>
}

/**
 * OpenAggregateConfigRule请求参数结构体
 */
export interface OpenAggregateConfigRuleRequest {
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 账号组ID
   */
  AccountGroupId: string
}

/**
 * ListSystemCompliancePacks请求参数结构体
 */
export interface ListSystemCompliancePacksRequest {
  /**
   * 每页限制
   */
  Limit: number
  /**
   * 偏移量
   */
  Offset: number
}

/**
 * 标签
 */
export interface Tag {
  /**
   * 标签key
   */
  TagKey?: string
  /**
   * 标签value
   */
  TagValue?: string
}

/**
 * ListAggregators返回参数结构体
 */
export interface ListAggregatorsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 账号组列表
   */
  Items?: Array<Aggregator>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListConfigRuleEvaluationResults请求参数结构体
 */
export interface ListConfigRuleEvaluationResultsRequest {
  /**
   * 规则ID
   */
  ConfigRuleId: string
  /**
   * 偏移量
   */
  Limit: number
  /**
   * 当前页
   */
  Offset: number
  /**
   * 类型
   */
  ResourceType?: Array<string>
  /**
   * 评估结果 COMPLIANT：合规   NON_COMPLIANT：不合规
   */
  ComplianceType?: Array<string>
}

/**
 * DeleteAggregateConfigRule返回参数结构体
 */
export interface DeleteAggregateConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAggregator请求参数结构体
 */
export interface CreateAggregatorRequest {
  /**
   * <p>账号组名称</p>
   */
  Name: string
  /**
   * <p>账号组描述</p>
   */
  Description: string
  /**
   * <p>账号组类型 </p><p>枚举值：</p><ul><li>RD： 全局账号组</li><li>CUSTOM： 自定义账号组</li></ul>
   */
  Type: string
  /**
   * <p>账号组成员信息列表，最多100个</p>
   */
  AggregatorAccounts?: Array<AggregatorAccount>
}

/**
 * DescribeConfigRecorder返回参数结构体
 */
export interface DescribeConfigRecorderResponse {
  /**
   * 用户监控资源列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Items?: Array<UserConfigResource>
  /**
   * 0 关闭1 打开
   */
  Status?: number
  /**
   * 当日快照次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerCount?: number
  /**
   * 当日打开监控次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpenCount?: number
  /**
   * 当日修改监控范围次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateCount?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAggregateCompliancePack请求参数结构体
 */
export interface UpdateAggregateCompliancePackRequest {
  /**
   * 合规包名称
   */
  CompliancePackName: string
  /**
   * 风险等级
   */
  RiskLevel: number
  /**
   * 合规包ID
   */
  CompliancePackId: string
  /**
   * 合规包规则
   */
  ConfigRules: Array<CompliancePackRule>
  /**
   * 账号组ID
   */
  AccountGroupId: string
  /**
   * 描述
   */
  Description?: string
}

/**
 * CreateRemediation请求参数结构体
 */
export interface CreateRemediationRequest {
  /**
   * <p>规则 ID</p>
   */
  RuleId: string
  /**
   * <p>修正类型取值：   SCF：云函数（自定义修正）。</p>
   */
  RemediationType: string
  /**
   * <p>修正模板 ID</p>
   */
  RemediationTemplateId: string
  /**
   * <p>修正执行方式。<br>取值：   MANUAL_EXECUTION：手动执行</p>
   */
  InvokeType: string
  /**
   * <p>执行修正的模板来源<br>CUSTOM：自定义模板。</p>
   */
  SourceType?: string
}

/**
 * AddCompliancePack返回参数结构体
 */
export interface AddCompliancePackResponse {
  /**
   * <p>合规包Id</p>
   */
  CompliancePackId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 资源类型信息
 */
export interface ConfigResource {
  /**
   * 产品
注意：此字段可能返回 null，表示取不到有效值。
   */
  Product: string
  /**
   * 产品名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName: string
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType: string
  /**
   * 资源类型名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceTypeName: string
}

/**
 * DescribeAggregateConfigDeliver请求参数结构体
 */
export interface DescribeAggregateConfigDeliverRequest {
  /**
   * 账号组ID
   */
  AccountGroupId: string
}

/**
 * ListAggregators请求参数结构体
 */
export interface ListAggregatorsRequest {
  /**
   * 每页显示数量
   */
  Limit: number
  /**
   * 起始
   */
  Offset: number
}

/**
 * UpdateAggregateConfigDeliver请求参数结构体
 */
export interface UpdateAggregateConfigDeliverRequest {
  /**
   * 0 关闭  1 开启
   */
  Status: number
  /**
   * 账号组ID
   */
  AccountGroupId: string
  /**
   * 投递服务名称
   */
  DeliverName?: string
  /**
   * 资源六段式  
COS：qcs::cos:$region:$account:prefix/$appid/$BucketName
CLS:
qcs::cls:$region:$account:cls/topicId
   */
  TargetArn?: string
  /**
   * 资源前缀
   */
  DeliverPrefix?: string
  /**
   * 投递类型  COS CLS
   */
  DeliverType?: string
  /**
   * 支持跨账号投递的成员账号uin，只能是委派管理员。默认为0，即投递到管理员账号下
   */
  DeliverUin?: number
  /**
   * 1：配置变更 2： 资源列表 3：全选
   */
  DeliverContentType?: number
}

/**
 * PutEvaluations请求参数结构体
 */
export interface PutEvaluationsRequest {
  /**
   * 回调令牌。从自定义规则所选的scf云函数入参中取参数ResultToken值
<a href="https://cloud.tencent.com/document/product/583/9210#.E5.87.BD.E6.95.B0.E5.85.A5.E5.8F.82.3Ca-id.3D.22input.22.3E.3C.2Fa.3E" target="_blank">云函数入参说明</a>
   */
  ResultToken: string
  /**
   * 自定义规则评估结果信息。
   */
  Evaluations: Array<Evaluation>
}

/**
 * UpdateConfigRule请求参数结构体
 */
export interface UpdateConfigRuleRequest {
  /**
   * 触发类型，最多支持两种
   */
  TriggerType: Array<TriggerType>
  /**
   * 风险等级
1：高风险。
2：中风险。
3：低风险。
   */
  RiskLevel: number
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 入参
   */
  InputParameter?: Array<InputParameter>
  /**
   * 描述
   */
  Description?: string
  /**
   * 规则评估地域范围，规则仅对指定地域中的资源生效。
支持的地域范围config:ListResourceRegions返回的地域
   */
  RegionsScope?: Array<string>
  /**
   * 规则评估标签范围，规则仅对绑定指定标签的资源生效。
   */
  TagsScope?: Array<Tag>
  /**
   * 规则对指定资源ID无效，即不对该资源执行评估。
   */
  ExcludeResourceIdsScope?: Array<string>
}

/**
 * 资源类型
 */
export interface UserConfigResource {
  /**
   * 产品
注意：此字段可能返回 null，表示取不到有效值。
   */
  Product: string
  /**
   * 产品名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName: string
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType: string
  /**
   * 资源类型名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceTypeName: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: string
}

/**
 * DetachConfigRuleToCompliancePack请求参数结构体
 */
export interface DetachConfigRuleToCompliancePackRequest {
  /**
   * 合规包ID
   */
  CompliancePackId: string
  /**
   * 规则ID
   */
  ConfigRuleId: string
}

/**
 * UpdateRemediation请求参数结构体
 */
export interface UpdateRemediationRequest {
  /**
   * 修正设置 ID
   */
  RemediationId: string
  /**
   * 修正类型。取值： SCF：函数计算（自定义修正）。
   */
  RemediationType?: string
  /**
   * 修正模板 ID
   */
  RemediationTemplateId?: string
  /**
   * 修正执行方式。取值：  NON_EXECUTION：不执行。  AUTO_EXECUTION：自动执行。  MANUAL_EXECUTION：手动执行。  NOT_CONFIG：未设置。
   */
  InvokeType?: string
  /**
   * 执行修正来源
   */
  SourceType?: string
}

/**
 * 评估结果
 */
export interface AggregateEvaluationResult {
  /**
   * 资源id
   */
  ResourceId: string
  /**
   * 资源类型
   */
  ResourceType: string
  /**
   * 资源地域
   */
  ResourceRegion: string
  /**
   * 资源名称
   */
  ResourceName: string
  /**
   * 规则id
   */
  ConfigRuleId: string
  /**
   * 规则名称
   */
  ConfigRuleName: string
  /**
   * 合规包id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompliancePackId: string
  /**
   * 风险等级
   */
  RiskLevel: number
  /**
   * 评估结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Annotation: Annotation
  /**
   * 合规类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComplianceType: string
  /**
   * 规则发起类型
   */
  InvokingEventMessageType: string
  /**
   * 评估发起时间
   */
  ConfigRuleInvokedTime: string
  /**
   * 评估实际时间
   */
  ResultRecordedTime: string
  /**
   * 资源所属用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceOwnerId: number
  /**
   * 资源所属用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceOwnerName?: string
}

/**
 * 管理端规则详情
 */
export interface SystemConfigRule {
  /**
   * 规则标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  Identifier: string
  /**
   * 规则名
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName: string
  /**
   * 规则参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  InputParameter: Array<InputParameterForManage>
  /**
   * 规则触发条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  SourceCondition: Array<SourceConditionForManage>
  /**
   * 支持的资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType: Array<string>
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Label: Array<string>
  /**
   * 风险等级，1，2，3
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskLevel: number
  /**
   * 对应的函数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceFunction: string
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: string
  /**
   * 触发类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerType: Array<string>
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 使用次数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReferenceCount: number
  /**
   * 规则类型
   */
  IdentifierType: string
}

/**
 * DetachAggregateConfigRuleToCompliancePack返回参数结构体
 */
export interface DetachAggregateConfigRuleToCompliancePackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAggregateDiscoveredResource请求参数结构体
 */
export interface DescribeAggregateDiscoveredResourceRequest {
  /**
   * 资源ID
   */
  ResourceId: string
  /**
   * 资源类型
   */
  ResourceType: string
  /**
   * 资源地域
   */
  ResourceRegion: string
  /**
   * 账号组ID
   */
  AccountGroupId: string
  /**
   * 资源所属用户ID
   */
  ResourceOwnerId: number
}

/**
 * AddConfigRule返回参数结构体
 */
export interface AddConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 管理端规则条件
 */
export interface SourceConditionForManage {
  /**
   * 条件为空，合规：COMPLIANT，不合规：NON_COMPLIANT，无法应用：NOT_APPLICABLE
   */
  EmptyAs?: string
  /**
   * 配置路径
   */
  SelectPath?: string
  /**
   * 操作运算符
   */
  Operator?: string
  /**
   * 是否必须
   */
  Required?: boolean
  /**
   * 期望值
   */
  DesiredValue?: string
}

/**
 * AddConfigRule请求参数结构体
 */
export interface AddConfigRuleRequest {
  /**
   * 规则模板标识，预设规则模板为Identifier, 自定义规则为云函数arn（region:functionName）
   */
  Identifier: string
  /**
   * 规则模板类型，SYSTEM, CUSTOMIZE
   */
  IdentifierType: string
  /**
   * 规则名称
   */
  RuleName: string
  /**
   * 规则支持的资源
   */
  ResourceType: Array<string>
  /**
   * 触发类型，最多支持两种
   */
  TriggerType: Array<TriggerType>
  /**
   * 风险等级
1：高风险。
2：中风险。
3：低风险。
   */
  RiskLevel: number
  /**
   * 入参
   */
  InputParameter?: Array<InputParameter>
  /**
   * 规则描述。长度范围0~1024字符
   */
  Description?: string
  /**
   * 规则评估地域范围，规则仅对指定地域中的资源生效。
支持的地域范围config:ListResourceRegions返回的地域
   */
  RegionsScope?: Array<string>
  /**
   * 规则评估标签范围，规则仅对绑定指定标签的资源生效。
   */
  TagsScope?: Array<Tag>
  /**
   * 规则对指定资源ID无效，即不对该资源执行评估。
   */
  ExcludeResourceIdsScope?: Array<string>
}

/**
 * ListCompliancePacks返回参数结构体
 */
export interface ListCompliancePacksResponse {
  /**
   * 总数
   */
  Total: number
  /**
   * 详情
   */
  Items: Array<ConfigCompliancePack>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigDeliver返回参数结构体
 */
export interface DescribeConfigDeliverResponse {
  /**
   * 投递名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverName?: string
  /**
   * 资源六段式
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetArn?: string
  /**
   * 投递状态 DeliverStatus：0 关闭  1 开启
   */
  Status?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 日志前缀
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverPrefix?: string
  /**
   * 投递类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeliverType?: string
  /**
   * 1：配置变更   2： 资源列表 3：全部
   */
  DeliverContentType?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachConfigRuleToCompliancePack返回参数结构体
 */
export interface DetachConfigRuleToCompliancePackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseConfigRule请求参数结构体
 */
export interface CloseConfigRuleRequest {
  /**
   * 规则ID
   */
  RuleId: string
}

/**
 * DescribeSystemCompliancePack请求参数结构体
 */
export interface DescribeSystemCompliancePackRequest {
  /**
   * 合规包ID
   */
  CompliancePackId: string
}

/**
 * 自定义规则评估结果
 */
export interface Evaluation {
  /**
   * 已评估资源ID。长度为0~256个字符
   */
  ComplianceResourceId: string
  /**
   * 已评估资源类型。
支持:
QCS::CVM::Instance、 QCS::CBS::Disk、QCS::VPC::Vpc、QCS::VPC::Subnet、QCS::VPC::SecurityGroup、 QCS::CAM::User、QCS::CAM::Group、QCS::CAM::Policy、QCS::CAM::Role、QCS::COS::Bucket
   */
  ComplianceResourceType: string
  /**
   * 已评估资源地域。
长度为0~32个字符
   */
  ComplianceRegion: string
  /**
   * 合规类型。取值：
COMPLIANT：合规、
NON_COMPLIANT：不合规
   */
  ComplianceType: string
  /**
   * 不合规资源的补充信息。
   */
  Annotation?: Annotation
}

/**
 * AddAggregateConfigRule返回参数结构体
 */
export interface AddAggregateConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OpenConfigRule返回参数结构体
 */
export interface OpenConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDiscoveredResource返回参数结构体
 */
export interface DescribeDiscoveredResourceResponse {
  /**
   * 资源Id
   */
  ResourceId?: string
  /**
   * 资源类型
   */
  ResourceType?: string
  /**
   * 资源名
   */
  ResourceName?: string
  /**
   * 资源地域
   */
  ResourceRegion?: string
  /**
   * 资源可用区
   */
  ResourceZone?: string
  /**
   * 资源配置
   */
  Configuration?: string
  /**
   * 资源创建时间
   */
  ResourceCreateTime?: string
  /**
   * 资源标签
   */
  Tags?: Array<Tag>
  /**
   * 资源更新时间
   */
  UpdateTime?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修正记录
 */
export interface RemediationExecutions {
  /**
   * 修正状态 1：运行中 2：成功 3：失败
   */
  ExecutionStatus?: number
  /**
   * 资源类型
   */
  ExecutionResourceType?: string
  /**
   * 修复时间
   */
  ExecutionCreateDate?: string
  /**
   * 错误信息
   */
  ExecutionStatusMessage?: string
  /**
   * 资源ID
   */
  ExecutionResourceIds?: string
}

/**
 * UpdateConfigRule返回参数结构体
 */
export interface UpdateConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DetachAggregateConfigRuleToCompliancePack请求参数结构体
 */
export interface DetachAggregateConfigRuleToCompliancePackRequest {
  /**
   * 合规包ID
   */
  CompliancePackId: string
  /**
   * 规则ID
   */
  ConfigRuleId: string
  /**
   * 账号组ID
   */
  AccountGroupId: string
}

/**
 * ListAggregateCompliancePacks请求参数结构体
 */
export interface ListAggregateCompliancePacksRequest {
  /**
   * <p>数量</p>
   */
  Limit: number
  /**
   * <p>偏移量</p>
   */
  Offset: number
  /**
   * <p>账号组ID</p>
   */
  AccountGroupId: string
  /**
   * <p>合规包名称</p>
   */
  CompliancePackName?: string
  /**
   * <p>风险等级<br>1：高风险。<br>2：中风险。<br>3：低风险。</p>
   */
  RiskLevel?: Array<number | bigint>
  /**
   * <p>合规包状态 ACTIVE、NO_ACTIVE</p>
   */
  Status?: string
  /**
   * <p>评估状态合规： &#39;COMPLIANT&#39;<br>不合规： &#39;NON_COMPLIANT&#39;</p>
   */
  ComplianceResult?: Array<string>
  /**
   * <p>排序类型, 倒序：desc，顺序：asc</p>
   */
  OrderType?: string
  /**
   * <p>包含合规包结果定义</p><p>枚举值：</p><ul><li>NO： 不包含</li></ul><p>默认值：空</p><p>此字段为新增，因此不传或者传了YES都会默认返回包含合规结果数据，其他枚举值后面视情况丰富</p>
   */
  IncludeCompliancePackRuleResult?: string
}

/**
 * ListResourceTypes返回参数结构体
 */
export interface ListResourceTypesResponse {
  /**
   * 详情
   */
  Items: Array<ConfigResource>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRemediations返回参数结构体
 */
export interface DeleteRemediationsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteConfigRule请求参数结构体
 */
export interface DeleteConfigRuleRequest {
  /**
   * 规则ID
   */
  RuleId: string
}

/**
 * 资源列表筛选
 */
export interface Filter {
  /**
   * 查询字段名称 资源名称：resourceName  资源ID：resourceId 资源类型：resourceType 资源地域：resourceRegion    删除状态：resourceDelete 0未删除，1已删除  resourceRegionAndZone地域/可用区
   */
  Name?: string
  /**
   * 查询字段值
   */
  Values?: Array<string>
}

/**
 * ListAggregateConfigRuleEvaluationResults请求参数结构体
 */
export interface ListAggregateConfigRuleEvaluationResultsRequest {
  /**
   * <p>规则ID</p>
   */
  ConfigRuleId: string
  /**
   * <p>偏移量</p>
   */
  Limit: number
  /**
   * <p>当前页</p>
   */
  Offset: number
  /**
   * <p>账号组ID</p>
   */
  AccountGroupId: string
  /**
   * <p>类型</p>
   */
  ResourceType?: Array<string>
  /**
   * <p>评估结果 COMPLIANT：合规   NON_COMPLIANT：不合规</p>
   */
  ComplianceType?: Array<string>
  /**
   * <p>资源所属用户ID</p>
   */
  ResourceOwnerId?: number
  /**
   * <p>筛选的资源拥有者uin集合</p>
   */
  ResourceOwnerIds?: Array<number | bigint>
}

/**
 * UpdateCompliancePackStatus请求参数结构体
 */
export interface UpdateCompliancePackStatusRequest {
  /**
   * 合规包ID
   */
  CompliancePackId: string
  /**
   * ACTIVE：启用
UN_ACTIVE ：停用
   */
  Status: string
}

/**
 * DeleteAggregateConfigRule请求参数结构体
 */
export interface DeleteAggregateConfigRuleRequest {
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 账号组ID
   */
  AccountGroupId: string
}

/**
 * DeleteCompliancePack返回参数结构体
 */
export interface DeleteCompliancePackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRemediation返回参数结构体
 */
export interface CreateRemediationResponse {
  /**
   * <p>修正设置Id</p>
   */
  RemediationId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAggregateConfigDeliver返回参数结构体
 */
export interface UpdateAggregateConfigDeliverResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAggregateCompliancePack返回参数结构体
 */
export interface UpdateAggregateCompliancePackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 管理端系统合规包规则
 */
export interface CompliancePackRuleForManage {
  /**
   * <p>规则唯一身份标识</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Identifier?: string
  /**
   * <p>规则名称</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName?: string
  /**
   * <p>描述</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * <p>风险等级</p><p>1：高风险 2：中风险  3：低风险</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskLevel?: number
  /**
   * <p>创建时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * <p>更新时间</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * <p>合规包规则</p>
   */
  CompliancePackRules?: Array<CompliancePackRules>
  /**
   * <p>规则编号信息</p>
   */
  Control?: Array<Control>
  /**
   * <p>资源类型</p>
   */
  ResourceTypes?: Array<string>
}

/**
 * DeleteAggregateCompliancePack请求参数结构体
 */
export interface DeleteAggregateCompliancePackRequest {
  /**
   * 合规包ID
   */
  CompliancePackId: string
  /**
   * 账号组ID
   */
  AccountGroupId: string
}

/**
 * ListSystemRules请求参数结构体
 */
export interface ListSystemRulesRequest {
  /**
   * 每页数量
   */
  Limit: number
  /**
   * 当前页
   */
  Offset: number
  /**
   * 搜索关键字。支持标识/名称/标签/描述搜索
   */
  Keyword?: string
  /**
   * 风险等级
   */
  RiskLevel?: number
}

/**
 * 资源列列表信息
 */
export interface AggregateResourceInfo {
  /**
   * 资源类型
   */
  ResourceType?: string
  /**
   * 资源名称
   */
  ResourceName?: string
  /**
   * 资源ID
   */
  ResourceId?: string
  /**
   * 地域
   */
  ResourceRegion?: string
  /**
   * 资源状态
   */
  ResourceStatus?: string
  /**
   * 是否删除 1:已删除 0:未删除
   */
  ResourceDelete?: number
  /**
   * 资源创建时间
   */
  ResourceCreateTime?: string
  /**
   * 标签信息
   */
  Tags?: Array<Tag>
  /**
   * 可用区
   */
  ResourceZone?: string
  /**
   * 合规状态
   */
  ComplianceResult?: string
  /**
   * 资源所属用户ID
   */
  ResourceOwnerId?: number
  /**
   * 用户昵称
   */
  ResourceOwnerName?: string
}

/**
 * DescribeAggregator返回参数结构体
 */
export interface DescribeAggregatorResponse {
  /**
   * <p>账号组名称</p>
   */
  Name?: string
  /**
   * <p>账号组描述</p>
   */
  Description?: string
  /**
   * <p>账号组类型</p>
   */
  Type?: string
  /**
   * <p>成员信息</p>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AggregatorAccounts?: Array<AggregatorAccount>
  /**
   * <p>创建状态</p>
   */
  AggregatorStatus?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 规则支持触发类型
 */
export interface TriggerType {
  /**
   * 触发类型
   */
  MessageType: string
  /**
   * 触发时间周期
   */
  MaximumExecutionFrequency?: string
}

/**
 * 评估结果
 */
export interface EvaluationResult {
  /**
   * 资源id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceId: string
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType: string
  /**
   * 资源地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceRegion: string
  /**
   * 资源名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceName: string
  /**
   * 规则id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigRuleId: string
  /**
   * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigRuleName: string
  /**
   * 合规包id
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompliancePackId: string
  /**
   * 风险等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  RiskLevel: number
  /**
   * 评估结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  Annotation: Annotation
  /**
   * 合规类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComplianceType: string
  /**
   * 规则发起类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  InvokingEventMessageType: string
  /**
   * 评估发起时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigRuleInvokedTime: string
  /**
   * 评估实际时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResultRecordedTime: string
}

/**
 * 用户合规包信息
 */
export interface ConfigCompliancePack {
  /**
   * 合规包状态
   */
  Status: string
  /**
   * 合规包ID
   */
  CompliancePackId: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 合规包名称
   */
  CompliancePackName: string
  /**
   * 风险等级
   */
  RiskLevel: number
  /**
   * 评估结果
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComplianceResult: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 不合规规则名
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoCompliantNames: Array<string>
  /**
   * 合规包规则数
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleCount: number
}

/**
 * DescribeAggregateConfigRule返回参数结构体
 */
export interface DescribeAggregateConfigRuleResponse {
  /**
   * 规则详情
   */
  ConfigRule?: ConfigRule
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartAggregateConfigRuleEvaluation请求参数结构体
 */
export interface StartAggregateConfigRuleEvaluationRequest {
  /**
   * 手动触发：MANUAL  周期触发：SCHEDULE
   */
  TriggerType: string
  /**
   * 账号组ID
   */
  AccountGroupId: string
  /**
   * 规则ID
   */
  RuleId?: string
  /**
   * 合规包ID
   */
  CompliancePackId?: string
}

/**
 * ListRemediationExecutions请求参数结构体
 */
export interface ListRemediationExecutionsRequest {
  /**
   * 规则 ID
   */
  RuleId: string
  /**
   * 分页条数。默认20， 取值1~200
   */
  Limit?: number
  /**
   * 分页偏移量。
   */
  Offset?: number
  /**
   * 修正状态 1：运行中 2：成功 3：失败
   */
  ExecutionStatus?: number
}

/**
 * 合规包规则信息
 */
export interface CompliancePackRule {
  /**
   * 规则名称
   */
  RuleName: string
  /**
   * 风险等级
   */
  RiskLevel: number
  /**
   * 入参
   */
  InputParameter: Array<InputParameter>
  /**
   * 规则身份标识
   */
  Identifier?: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 预设规则身份标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManagedRuleIdentifier?: string
  /**
   * 规则ID
   */
  ConfigRuleId?: string
  /**
   * 合规包ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  CompliancePackId?: string
}

/**
 * DescribeDiscoveredResource请求参数结构体
 */
export interface DescribeDiscoveredResourceRequest {
  /**
   * 资源ID
   */
  ResourceId: string
  /**
   * 资源类型
   */
  ResourceType: string
  /**
   * 资源地域
   */
  ResourceRegion: string
}

/**
 * ListRemediationExecutions返回参数结构体
 */
export interface ListRemediationExecutionsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 修复记录
   */
  RemediationExecutions?: Array<RemediationExecutions>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CloseConfigRecorder返回参数结构体
 */
export interface CloseConfigRecorderResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigRecorder请求参数结构体
 */
export type DescribeConfigRecorderRequest = null

/**
 * StartConfigRuleEvaluation请求参数结构体
 */
export interface StartConfigRuleEvaluationRequest {
  /**
   * 规则ID
   */
  RuleId?: string
  /**
   * 合规包ID
   */
  CompliancePackId?: string
}

/**
 * DescribeConfigRule请求参数结构体
 */
export interface DescribeConfigRuleRequest {
  /**
   * 规则ID
   */
  RuleId: string
}

/**
 * UpdateConfigDeliver请求参数结构体
 */
export interface UpdateConfigDeliverRequest {
  /**
   * 0 关闭  1 开启
   */
  Status: number
  /**
   * 投递服务名称
   */
  DeliverName?: string
  /**
   * 资源六段式  
COS：qcs::cos:$region:$account:prefix/$appid/$BucketName
CLS:
qcs::cls:$region:$account:cls/topicId
   */
  TargetArn?: string
  /**
   * clonfig_fix
   */
  DeliverPrefix?: string
  /**
   * 投递类型
   */
  DeliverType?: string
  /**
   * 1：配置变更 2： 资源列表 3：全选
   */
  DeliverContentType?: number
}

/**
 * ListDiscoveredResources请求参数结构体
 */
export interface ListDiscoveredResourcesRequest {
  /**
   * 每页显示数量
   */
  MaxResults: number
  /**
   * resourceName：资源名  resourceId ：资源ID
   */
  Filters?: Array<Filter>
  /**
   * 标签
   */
  Tags?: Array<Tag>
  /**
   * 下一页token
   */
  NextToken?: string
  /**
   * 排序方式 asc、desc
   */
  OrderType?: string
}

/**
 * 修复设置
 */
export interface Remediation {
  /**
   * 修正模板 ID。
   */
  RemediationTemplateId?: string
  /**
   * 修正设置 ID。
   */
  RemediationId?: string
  /**
   * 执行修正的模板来源
   */
  RemediationSourceType?: string
  /**
   * 修正类型。取值：
SCF：函数计算（自定义修正）。
   */
  RemediationType?: string
  /**
   * 账号ID
   */
  OwnerUin?: string
  /**
   * 修正执行方式。取值：
MANUAL_EXECUTION：手动执行。
   */
  InvokeType?: string
  /**
   * 规则 ID。
   */
  RuleId?: string
}

/**
 * 规则详情
 */
export interface ConfigRule {
  /**
   * 规则标识
   */
  Identifier?: string
  /**
   * 规则名
   */
  RuleName?: string
  /**
   * 规则参数
   */
  InputParameter?: Array<InputParameter>
  /**
   * 规则触发条件
   */
  SourceCondition?: Array<SourceConditionForManage>
  /**
   * 规则支持的资源类型，规则仅对指定资源类型的资源生效。
   */
  ResourceType?: Array<string>
  /**
   * 规则所属标签
   */
  Labels?: Array<string>
  /**
   * 规则风险等级
1:低风险
2:中风险
3:高风险
   */
  RiskLevel?: number
  /**
   * 规则对应的函数
   */
  ServiceFunction?: string
  /**
   * 创建时间
格式：YYYY-MM-DD h:i:s
   */
  CreateTime?: string
  /**
   * 规则描述
   */
  Description?: string
  /**
   * ACTIVE：启用
NO_ACTIVE：停止
   */
  Status?: string
  /**
   * 合规： 'COMPLIANT'
不合规： 'NON_COMPLIANT'
无法应用规则： 'NOT_APPLICABLE'
   */
  ComplianceResult?: string
  /**
   * ["",""]
   */
  Annotation?: Annotation
  /**
   * 规则评估时间
格式：YYYY-MM-DD h:i:s

   */
  ConfigRuleInvokedTime?: string
  /**
   * 规则ID
   */
  ConfigRuleId?: string
  /**
   * CUSTOMIZE：自定义规则、
SYSTEM：托管规则
   */
  IdentifierType?: string
  /**
   * 合规包ID
   */
  CompliancePackId?: string
  /**
   * 触发类型
ScheduledNotification：周期触发、
ConfigurationItemChangeNotification：变更触发
   */
  TriggerType?: Array<TriggerType>
  /**
   * 参数详情
   */
  ManageInputParameter?: Array<InputParameterForManage>
  /**
   * 合规包名称
   */
  CompliancePackName?: string
  /**
   * 关联地域
   */
  RegionsScope?: Array<string>
  /**
   * 关联标签
   */
  TagsScope?: Array<Tag>
  /**
   *  规则对指定资源ID无效，即不对该资源执行评估。
   */
  ExcludeResourceIdsScope?: Array<string>
  /**
   * 账号组ID
   */
  AccountGroupId?: string
  /**
   * 账号组名称
   */
  AccountGroupName?: string
  /**
   * 规则所属用户ID
   */
  RuleOwnerId?: number
  /**
   * 预设规则支持的触发方式
ScheduledNotification：周期触发
ConfigurationItemChangeNotification：变更触发
   */
  ManageTriggerType?: Array<string>
}

/**
 * ListResourceTypes请求参数结构体
 */
export type ListResourceTypesRequest = null

/**
 * UpdateCompliancePack返回参数结构体
 */
export interface UpdateCompliancePackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAggregateConfigRules返回参数结构体
 */
export interface ListAggregateConfigRulesResponse {
  /**
   * <p>总数</p>
   */
  Total?: number
  /**
   * <p>详情</p>
   */
  Items?: Array<ConfigRule>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartRemediation返回参数结构体
 */
export interface StartRemediationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAggregateCompliancePack返回参数结构体
 */
export interface DeleteAggregateCompliancePackResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCompliancePack返回参数结构体
 */
export interface DescribeCompliancePackResponse {
  /**
   * 合规包名称
   */
  CompliancePackName: string
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description: string
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 风险等级
   */
  RiskLevel: number
  /**
   * 合规包规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigRules: Array<ComplianceConfigRule>
  /**
   * 合规包id
   */
  CompliancePackId: string
  /**
   * 合规包状态
   */
  Status: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAggregateCompliancePack请求参数结构体
 */
export interface DescribeAggregateCompliancePackRequest {
  /**
   * 账号组ID
   */
  AccountGroupId: string
  /**
   * 合规包ID
   */
  CompliancePackId?: string
}

/**
 * OpenConfigRule请求参数结构体
 */
export interface OpenConfigRuleRequest {
  /**
   * 规则ID
   */
  RuleId: string
}

/**
 * StartRemediation请求参数结构体
 */
export interface StartRemediationRequest {
  /**
   * 规则 ID
   */
  RuleId: string
}

/**
 * CloseConfigRule返回参数结构体
 */
export interface CloseConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSystemRule返回参数结构体
 */
export interface DescribeSystemRuleResponse {
  /**
   * 详情
   */
  SystemConfigRule: SystemConfigRule
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeConfigDeliver请求参数结构体
 */
export type DescribeConfigDeliverRequest = null

/**
 * UpdateAggregateConfigRule请求参数结构体
 */
export interface UpdateAggregateConfigRuleRequest {
  /**
   * 触发类型，最多支持两种
   */
  TriggerType: Array<TriggerType>
  /**
   * 风险等级
1：高风险。
2：中风险。
3：低风险。
   */
  RiskLevel: number
  /**
   * 规则ID
   */
  RuleId: string
  /**
   * 账号组ID
   */
  AccountGroupId: string
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 入参
   */
  InputParameter?: Array<InputParameter>
  /**
   * 描述
   */
  Description?: string
  /**
   * 关联地域
   */
  RegionScope?: Array<string>
  /**
   * 关联标签
   */
  TagsScope?: Array<Tag>
  /**
   * 排除的资源ID
   */
  ExcludeResourceIdsScope?: Array<string>
}

/**
 * OpenConfigRecorder请求参数结构体
 */
export type OpenConfigRecorderRequest = null

/**
 * AddAggregateConfigRule请求参数结构体
 */
export interface AddAggregateConfigRuleRequest {
  /**
   * 规则模板标识，预设规则模板为Identifier, 自定义规则为云函数arn（region:functionName）
   */
  Identifier: string
  /**
   * 规则模板类型，SYSTEM, CUSTOMIZE
   */
  IdentifierType: string
  /**
   * 规则名称
   */
  RuleName: string
  /**
   * 规则支持的资源
   */
  ResourceType: Array<string>
  /**
   * 触发类型，最多支持两种
   */
  TriggerType: Array<TriggerType>
  /**
   * 风险等级
1：高风险。
2：中风险。
3：低风险。
   */
  RiskLevel: number
  /**
   * 账号组Id
   */
  AccountGroupId: string
  /**
   * 入参
   */
  InputParameter?: Array<InputParameter>
  /**
   * 描述
   */
  Description?: string
  /**
   * 关联地域
   */
  RegionScope?: Array<string>
  /**
   * 关联标签
   */
  TagsScope?: Array<Tag>
  /**
   * 排除的资源ID
   */
  ExcludeResourceIdsScope?: Array<string>
}

/**
 * DeleteCompliancePack请求参数结构体
 */
export interface DeleteCompliancePackRequest {
  /**
   * 合规包ID
   */
  CompliancePackId: string
}

/**
 * StartConfigRuleEvaluation返回参数结构体
 */
export interface StartConfigRuleEvaluationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListAggregateDiscoveredResources返回参数结构体
 */
export interface ListAggregateDiscoveredResourcesResponse {
  /**
   * 详情
   */
  Items?: Array<AggregateResourceInfo>
  /**
   * 下一页
注意：此字段可能返回 null，表示取不到有效值。
   */
  NextToken?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAggregateConfigRule返回参数结构体
 */
export interface UpdateAggregateConfigRuleResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 参数值
 */
export interface InputParameter {
  /**
   * 参数名
   */
  ParameterKey: string
  /**
   * 参数类型。必填类型：Require，可选类型：Optional。
   */
  Type?: string
  /**
   * 参数值
   */
  Value?: string
}

/**
 * ListRemediations返回参数结构体
 */
export interface ListRemediationsResponse {
  /**
   * 总数
   */
  Total?: number
  /**
   * 修正设置
   */
  Remediations?: Array<Remediation>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRemediations请求参数结构体
 */
export interface DeleteRemediationsRequest {
  /**
   * 修正设置ID
   */
  RemediationIds: Array<string>
}
