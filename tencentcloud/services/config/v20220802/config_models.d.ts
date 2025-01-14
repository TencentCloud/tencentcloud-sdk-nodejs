/**
 * 资源列列表信息
 */
export interface ResourceListInfo {
    /**
     * 资源类型
     */
    ResourceType: string;
    /**
     * 资源名称
     */
    ResourceName: string;
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceRegion: string;
    /**
     * 资源状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceStatus: string;
    /**
     * 1 :已删除 2：未删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceDelete: number;
    /**
     * 资源创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceCreateTime: string;
    /**
     * 标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags: Array<Tag>;
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceZone: string;
    /**
     * 合规状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComplianceResult: string;
}
/**
 * ListAggregateDiscoveredResources请求参数结构体
 */
export interface ListAggregateDiscoveredResourcesRequest {
    /**
     * 每页显示数量
     */
    MaxResults: number;
    /**
     * 账号组ID
     */
    AccountGroupId: string;
    /**
     * resourceName：资源名  resourceId ：资源ID resourceType：资源类型
     */
    Filters?: Array<Filter>;
    /**
     * 标签
     */
    Tags?: Array<Tag>;
    /**
     * 下一页token
     */
    NextToken?: string;
    /**
     * 排序方式 asc、desc
     */
    OrderType?: string;
}
/**
 * DescribeAggregateDiscoveredResource请求参数结构体
 */
export interface DescribeAggregateDiscoveredResourceRequest {
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 资源类型
     */
    ResourceType: string;
    /**
     * 资源地域
     */
    ResourceRegion: string;
    /**
     * 账号组ID
     */
    AccountGroupId: string;
    /**
     * 资源所属用户ID
     */
    ResourceOwnerId: number;
}
/**
 * 管理端规则条件
 */
export interface SourceConditionForManage {
    /**
     * 条件为空，合规：COMPLIANT，不合规：NON_COMPLIANT，无法应用：NOT_APPLICABLE
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EmptyAs?: string;
    /**
     * 配置路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelectPath?: string;
    /**
     * 操作运算符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 是否必须
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Required?: boolean;
    /**
     * 期望值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DesiredValue?: string;
}
/**
 * ListAggregateConfigRules请求参数结构体
 */
export interface ListAggregateConfigRulesRequest {
    /**
     * 每页限制
     */
    Limit: number;
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 账号组ID
     */
    AccountGroupId: string;
    /**
     * 排序类型, 倒序：desc，顺序：asc
     */
    OrderType?: string;
    /**
     * 风险等级
  1：高风险。
  2：中风险。
  3：低风险。
     */
    RiskLevel?: Array<number | bigint>;
    /**
     * 规则状态
     */
    State?: string;
    /**
     * 评估结果
     */
    ComplianceResult?: Array<string>;
    /**
     * 规则名
     */
    RuleName?: string;
    /**
     * 规则所属账号ID
     */
    RuleOwnerId?: number;
}
/**
 * DescribeDiscoveredResource请求参数结构体
 */
export interface DescribeDiscoveredResourceRequest {
    /**
     * 资源ID
     */
    ResourceId: string;
    /**
     * 资源类型
     */
    ResourceType: string;
    /**
     * 资源地域
     */
    ResourceRegion: string;
}
/**
 * PutEvaluations返回参数结构体
 */
export interface PutEvaluationsResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 自定义规则评估结果
 */
export interface Evaluation {
    /**
     * 已评估资源ID。长度为0~256个字符
     */
    ComplianceResourceId: string;
    /**
     * 已评估资源类型。
  支持:
  QCS::CVM::Instance、 QCS::CBS::Disk、QCS::VPC::Vpc、QCS::VPC::Subnet、QCS::VPC::SecurityGroup、 QCS::CAM::User、QCS::CAM::Group、QCS::CAM::Policy、QCS::CAM::Role、QCS::COS::Bucket
     */
    ComplianceResourceType: string;
    /**
     * 已评估资源地域。
  长度为0~32个字符
     */
    ComplianceRegion: string;
    /**
     * 合规类型。取值：
  COMPLIANT：合规、
  NON_COMPLIANT：不合规
     */
    ComplianceType: string;
    /**
     * 不合规资源的补充信息。
     */
    Annotation?: Annotation;
}
/**
 * DescribeDiscoveredResource返回参数结构体
 */
export interface DescribeDiscoveredResourceResponse {
    /**
     * 资源Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType?: string;
    /**
     * 资源名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 资源地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceRegion?: string;
    /**
     * 资源可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceZone?: string;
    /**
     * 资源配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Configuration?: string;
    /**
     * 资源创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceCreateTime?: string;
    /**
     * 资源标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
    /**
     * 资源更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则入参
 */
export interface InputParameterForManage {
    /**
     * 值类型。数值：Integer， 字符串：String
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueType?: string;
    /**
     * 参数Key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParameterKey?: string;
    /**
     * 参数类型。必填类型：Require，可选类型：Optional。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 默认值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultValue?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * ListConfigRules返回参数结构体
 */
export interface ListConfigRulesResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 详情
     */
    Items?: Array<ConfigRule>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签
 */
export interface Tag {
    /**
     * 标签key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagKey?: string;
    /**
     * 标签value
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagValue?: string;
}
/**
 * ListDiscoveredResources请求参数结构体
 */
export interface ListDiscoveredResourcesRequest {
    /**
     * 每页显示数量
     */
    MaxResults: number;
    /**
     * resourceName：资源名  resourceId ：资源ID
     */
    Filters?: Array<Filter>;
    /**
     * 标签
     */
    Tags?: Array<Tag>;
    /**
     * 下一页token
     */
    NextToken?: string;
    /**
     * 排序方式 asc、desc
     */
    OrderType?: string;
}
/**
 * 合规详情
 */
export interface Annotation {
    /**
     * 资源当前实际配置。长度为0~256位字符，即资源不合规配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Configuration: string;
    /**
     * 资源期望配置。长度为0~256位字符，即资源合规配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DesiredValue: string;
    /**
     * 资源当前配置和期望配置之间的比较运算符。长度为0~16位字符，自定义规则上报评估结果此字段可能为空
     */
    Operator?: string;
    /**
     * 当前配置在资源属性结构体中的JSON路径。长度为0~256位字符，自定义规则上报评估结果此字段可能为空
     */
    Property?: string;
}
/**
 * 规则详情
 */
export interface ConfigRule {
    /**
     * 规则标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Identifier?: string;
    /**
     * 规则名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName?: string;
    /**
     * 规则参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputParameter?: Array<InputParameter>;
    /**
     * 规则触发条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceCondition?: Array<SourceConditionForManage>;
    /**
     * 规则支持的资源类型，规则仅对指定资源类型的资源生效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType?: Array<string>;
    /**
     * 规则所属标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels?: Array<string>;
    /**
     * 规则风险等级
  1:低风险
  2:中风险
  3:高风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskLevel?: number;
    /**
     * 规则对应的函数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceFunction?: string;
    /**
     * 创建时间
  格式：YYYY-MM-DD h:i:s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 规则描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
    /**
     * ACTIVE：启用
  NO_ACTIVE：停止
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 合规： 'COMPLIANT'
  不合规： 'NON_COMPLIANT'
  无法应用规则： 'NOT_APPLICABLE'
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComplianceResult?: string;
    /**
     * ["",""]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Annotation?: Annotation;
    /**
     * 规则评估时间
  格式：YYYY-MM-DD h:i:s
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigRuleInvokedTime?: string;
    /**
     * 规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigRuleId?: string;
    /**
     * CUSTOMIZE：自定义规则、
  SYSTEM：托管规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentifierType?: string;
    /**
     * 合规包ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompliancePackId?: string;
    /**
     * 触发类型
  ScheduledNotification：周期触发、
  ConfigurationItemChangeNotification：变更触发
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerType?: Array<TriggerType>;
    /**
     * 参数详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ManageInputParameter?: Array<InputParameterForManage>;
    /**
     * 合规包名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompliancePackName?: string;
    /**
     * 关联地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionsScope?: Array<string>;
    /**
     * 关联标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagsScope?: Array<Tag>;
    /**
     *  规则对指定资源ID无效，即不对该资源执行评估。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExcludeResourceIdsScope?: Array<string>;
    /**
     * 账号组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountGroupId?: string;
    /**
     * 账号组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountGroupName?: string;
    /**
     * 规则所属用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleOwnerId?: number;
    /**
     * 预设规则支持的触发方式
  ScheduledNotification：周期触发
  ConfigurationItemChangeNotification：变更触发
     */
    ManageTriggerType?: Array<string>;
}
/**
 * 规则支持触发类型
 */
export interface TriggerType {
    /**
     * 触发类型
     */
    MessageType: string;
    /**
     * 触发时间周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaximumExecutionFrequency?: string;
}
/**
 * PutEvaluations请求参数结构体
 */
export interface PutEvaluationsRequest {
    /**
     * 回调令牌。从自定义规则所选的scf云函数入参中取参数ResultToken值
  <a href="https://cloud.tencent.com/document/product/583/9210#.E5.87.BD.E6.95.B0.E5.85.A5.E5.8F.82.3Ca-id.3D.22input.22.3E.3C.2Fa.3E" target="_blank">云函数入参说明</a>
     */
    ResultToken: string;
    /**
     * 自定义规则评估结果信息。
     */
    Evaluations: Array<Evaluation>;
}
/**
 * 资源列表筛选
 */
export interface Filter {
    /**
     * 查询字段名称 资源名称：resourceName  资源ID：resourceId 资源类型：resourceType 资源地域：resourceRegion    删除状态：resourceDelete 0未删除，1已删除  resourceRegionAndZone地域/可用区
     */
    Name?: string;
    /**
     * 查询字段值
     */
    Values?: Array<string>;
}
/**
 * ListAggregateConfigRules返回参数结构体
 */
export interface ListAggregateConfigRulesResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 详情
     */
    Items?: Array<ConfigRule>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListAggregateDiscoveredResources返回参数结构体
 */
export interface ListAggregateDiscoveredResourcesResponse {
    /**
     * 详情
     */
    Items?: Array<AggregateResourceInfo>;
    /**
     * 下一页
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextToken?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAggregateDiscoveredResource返回参数结构体
 */
export interface DescribeAggregateDiscoveredResourceResponse {
    /**
     * 资源Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceId?: string;
    /**
     * 资源类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType?: string;
    /**
     * 资源名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceName?: string;
    /**
     * 资源地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceRegion?: string;
    /**
     * 资源可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceZone?: string;
    /**
     * 资源配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Configuration?: string;
    /**
     * 资源创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceCreateTime?: string;
    /**
     * 资源标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
    /**
     * 资源更新时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UpdateTime?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ListConfigRules请求参数结构体
 */
export interface ListConfigRulesRequest {
    /**
     * 每页数量。
  取值范围：1~200
     */
    Limit: number;
    /**
     * 偏移量。
  取值范围：最小值为0
     */
    Offset: number;
    /**
     * 排序类型(规则名称)。
  倒序：desc，
  顺序：asc
     */
    OrderType?: string;
    /**
     * 风险等级。
  1：高风险，
  2：中风险，
  3：低风险。
     */
    RiskLevel?: Array<number | bigint>;
    /**
     * 规则状态。
  ACTIVE：启用
  UN_ACTIVE：停用
  
     */
    State?: string;
    /**
     * 评估结果。
  COMPLIANT：合规
  NON_COMPLIANT：不合规
     */
    ComplianceResult?: Array<string>;
    /**
     * 规则名
     */
    RuleName?: string;
}
/**
 * 资源列列表信息
 */
export interface AggregateResourceInfo {
    /**
     * 资源类型
     */
    ResourceType?: string;
    /**
     * 资源名称
     */
    ResourceName?: string;
    /**
     * 资源ID
     */
    ResourceId?: string;
    /**
     * 地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceRegion?: string;
    /**
     * 资源状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceStatus?: string;
    /**
     * 是否删除 1:已删除 0:未删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceDelete?: number;
    /**
     * 资源创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceCreateTime?: string;
    /**
     * 标签信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceZone?: string;
    /**
     * 合规状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComplianceResult?: string;
    /**
     * 资源所属用户ID
     */
    ResourceOwnerId?: number;
    /**
     * 用户昵称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceOwnerName?: string;
}
/**
 * ListDiscoveredResources返回参数结构体
 */
export interface ListDiscoveredResourcesResponse {
    /**
     * 详情
     */
    Items?: Array<ResourceListInfo>;
    /**
     * 下一页
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NextToken?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 参数值
 */
export interface InputParameter {
    /**
     * 参数名
     */
    ParameterKey: string;
    /**
     * 参数类型。必填类型：Require，可选类型：Optional。
     */
    Type?: string;
    /**
     * 参数值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
