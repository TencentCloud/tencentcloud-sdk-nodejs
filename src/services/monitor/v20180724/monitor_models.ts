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
 * ModifyAlarmPolicyInfo请求参数结构体
 */
export interface ModifyAlarmPolicyInfoRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string
  /**
   * 告警策略 ID
   */
  PolicyId: string
  /**
   * 要修改的字段 NAME=策略名称 REMARK=策略备注
   */
  Key: string
  /**
   * 修改后的值
   */
  Value: string
}

/**
 * 告警策略触发任务
 */
export interface AlarmPolicyTriggerTask {
  /**
   * 触发任务类型 AS=弹性伸缩
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 用 json 表示配置信息 {"Key1":"Value1","Key2":"Value2"}
注意：此字段可能返回 null，表示取不到有效值。
   */
  TaskConfig: string
}

/**
 * DescribePrometheusRegions返回参数结构体
 */
export interface DescribePrometheusRegionsResponse {
  /**
   * 区域列表
   */
  RegionSet: Array<PrometheusRegionItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyGroupList返回参数结构体
 */
export interface DescribePolicyGroupListResponse {
  /**
   * 策略组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupList?: Array<DescribePolicyGroupListGroup>
  /**
   * 策略组总数
   */
  Total?: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Warning?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusInstancesOverview请求参数结构体
 */
export interface DescribePrometheusInstancesOverviewRequest {
  /**
   * 分页偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number
  /**
   * 过滤实例，目前支持：
ID: 通过实例ID来过滤 
Name: 通过实例名称来过滤
   */
  Filters?: Array<Filter>
}

/**
 * ModifyGrafanaInstance返回参数结构体
 */
export interface ModifyGrafanaInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 查询策略输出的用户回调信息
 */
export interface DescribePolicyGroupInfoCallback {
  /**
   * 用户回调接口地址
   */
  CallbackUrl: string
  /**
   * 用户回调接口状态，0表示未验证，1表示已验证，2表示存在url但没有通过验证
   */
  ValidFlag: number
  /**
   * 用户回调接口验证码
   */
  VerifyCode: string
}

/**
 * ModifyGrafanaInstance请求参数结构体
 */
export interface ModifyGrafanaInstanceRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
  /**
   * Grafana 实例名称，例如：test
   */
  InstanceName: string
}

/**
 * 告警历史的指标信息
 */
export interface AlarmHistoryMetric {
  /**
   * 云产品监控类型查询数据使用的命名空间
   */
  QceNamespace: string
  /**
   * 指标名
   */
  MetricName: string
  /**
   * 统计周期
   */
  Period: number
  /**
   * 触发告警的数值
   */
  Value: string
  /**
   * 指标的展示名
   */
  Description: string
}

/**
 * EnableGrafanaSSO返回参数结构体
 */
export interface EnableGrafanaSSOResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyGroupInfo返回参数结构体
 */
export interface DescribePolicyGroupInfoResponse {
  /**
   * 策略组名称
   */
  GroupName?: string
  /**
   * 策略组所属的项目id
   */
  ProjectId?: number
  /**
   * 是否为默认策略，0表示非默认策略，1表示默认策略
   */
  IsDefault?: number
  /**
   * 策略类型
   */
  ViewName?: string
  /**
   * 策略说明
   */
  Remark?: string
  /**
   * 策略类型名称
   */
  ShowName?: string
  /**
   * 最近编辑的用户uin
   */
  LastEditUin?: string
  /**
   * 最近编辑时间
   */
  UpdateTime?: string
  /**
   * 该策略支持的地域
   */
  Region?: Array<string>
  /**
   * 策略类型的维度列表
   */
  DimensionGroup?: Array<string>
  /**
   * 阈值规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionsConfig?: Array<DescribePolicyGroupInfoCondition>
  /**
   * 产品事件规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventConfig?: Array<DescribePolicyGroupInfoEventCondition>
  /**
   * 用户接收人列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverInfos?: Array<DescribePolicyGroupInfoReceiverInfo>
  /**
   * 用户回调信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Callback?: DescribePolicyGroupInfoCallback
  /**
   * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionsTemp?: DescribePolicyGroupInfoConditionTpl
  /**
   * 是否可以设置成默认策略
   */
  CanSetDefault?: boolean
  /**
   * 是否且规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUnionRule?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 策略标签
 */
export interface PolicyTag {
  /**
   * 标签Key
   */
  Key: string
  /**
   * 标签Value
   */
  Value: string
}

/**
 * DeletePrometheusClusterAgent请求参数结构体
 */
export interface DeletePrometheusClusterAgentRequest {
  /**
   * agent列表
   */
  Agents: Array<PrometheusAgentInfo>
  /**
   * 实例id
   */
  InstanceId: string
}

/**
 * DescribePrometheusScrapeJobs请求参数结构体
 */
export interface DescribePrometheusScrapeJobsRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * Agent ID
   */
  AgentId: string
  /**
   * 任务名
   */
  Name?: string
  /**
   * 任务 ID 列表
   */
  JobIds?: Array<string>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number
}

/**
 * CreatePolicyGroup返回参数结构体
 */
export interface CreatePolicyGroupResponse {
  /**
   * 创建成功的策略组Id
   */
  GroupId: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBaseMetrics返回参数结构体
 */
export interface DescribeBaseMetricsResponse {
  /**
   * 查询得到的指标描述列表
   */
  MetricSet?: Array<MetricSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusMultiTenantInstancePostPayMode请求参数结构体
 */
export interface CreatePrometheusMultiTenantInstancePostPayModeRequest {
  /**
   * 实例名
   */
  InstanceName: string
  /**
   * VPC ID(可通过 vpc:DescribeVpcs 接口获取，与实例同地域)
   */
  VpcId: string
  /**
   * 子网 ID(可通过 vpc:DescribeSubnets 接口获取)
   */
  SubnetId: string
  /**
   * 数据存储时间（单位天），限制值为15, 30, 45, 90, 180, 365, 730之一
   */
  DataRetentionTime: number
  /**
   * 可用区(与子网同可用区)
   */
  Zone: string
  /**
   * 实例的标签
   */
  TagSpecification?: Array<PrometheusTag>
  /**
   * 需要关联的 Grafana 实例
   */
  GrafanaInstanceId?: string
}

/**
 * DescribePolicyConditionListResponseDeprecatingInfo
 */
export interface DescribePolicyConditionListResponseDeprecatingInfo {
  /**
   * 是否隐藏
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hidden?: boolean
  /**
   * 新视图名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  NewViewNames?: Array<string>
  /**
   * 描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
}

/**
 * 云原生Prometheus模板可修改项
 */
export interface PrometheusTempModify {
  /**
   * 修改名称
   */
  Name?: string
  /**
   * 修改描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Describe?: string
  /**
   * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordRules?: Array<PrometheusConfigItem>
  /**
   * 修改内容，只有当模板类型是Alert时生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertDetailRules?: Array<PrometheusAlertPolicyItem>
}

/**
 * UnBindingPolicyObject请求参数结构体
 */
export interface UnBindingPolicyObjectRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 策略组id，如传入 PolicyId 则该字段被忽略可传入任意值如 0
   */
  GroupId: number
  /**
   * 待删除对象实例的唯一id列表，UniqueId从调用[获取已绑定对象列表接口](https://cloud.tencent.com/document/api/248/40570)的出参的List中得到
   */
  UniqueId: Array<string>
  /**
   * 实例分组id，如果按实例分组删除的话UniqueId参数是无效的
   */
  InstanceGroupId?: number
  /**
   * 告警策略ID，使用此字段时 GroupId 会被忽略
   */
  PolicyId?: string
  /**
   * 事件配置的告警
   */
  EbSubject?: string
  /**
   * 是否配置了事件告警
   */
  EbEventFlag?: number
}

/**
 * 策略类型信息
 */
export interface CommonNamespaceNew {
  /**
   * 命名空间标示
   */
  Id: string
  /**
   * 命名空间名称
   */
  Name: string
  /**
   * 监控类型
   */
  MonitorType: string
  /**
   * 维度信息
   */
  Dimensions: Array<DimensionNew>
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
 * DescribePrometheusAgentInstances请求参数结构体
 */
export interface DescribePrometheusAgentInstancesRequest {
  /**
   * 集群id
可以是tke, eks, edge的集群id
   */
  ClusterId: string
}

/**
 * UpdateServiceDiscovery请求参数结构体
 */
export interface UpdateServiceDiscoveryRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * <li>类型是 TKE，为对应的腾讯云容器服务集群 ID</li>
   */
  KubeClusterId: string
  /**
   * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
   */
  KubeType: number
  /**
   * 服务发现类型，取值如下：
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = JobMonitor</li>
   */
  Type: number
  /**
   * 服务发现配置信息，YAML 格式，[具体YAML参数内容请参考](https://cloud.tencent.com/document/product/1416/55995#service-monitor)
   */
  Yaml: string
}

/**
 * prometheus聚合规则实例详情，包含所属集群ID
 */
export interface PrometheusRecordRuleYamlItem {
  /**
   * 实例名称
   */
  Name?: string
  /**
   * 最近更新时间
   */
  UpdateTime?: string
  /**
   * 如果该聚合规则来至模板，则TemplateId为模板id
   */
  TemplateId?: string
  /**
   * Yaml内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content?: string
  /**
   * 该聚合规则如果来源于用户集群crd资源定义，则ClusterId为所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 规则数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Count?: number
}

/**
 * k8s中标签，一般以数组的方式存在
 */
export interface Label {
  /**
   * map表中的Name
   */
  Name: string
  /**
   * map表中的Value
   */
  Value: string
}

/**
 * DescribeGrafanaIntegrations返回参数结构体
 */
export interface DescribeGrafanaIntegrationsResponse {
  /**
   * 集成数组
   */
  IntegrationSet: Array<GrafanaIntegrationConfig>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusMultiTenantInstancePostPayMode返回参数结构体
 */
export interface CreatePrometheusMultiTenantInstancePostPayModeResponse {
  /**
   * 实例 ID
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePrometheusAgentStatus返回参数结构体
 */
export interface UpdatePrometheusAgentStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SyncPrometheusTemp返回参数结构体
 */
export interface SyncPrometheusTempResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateGrafanaWhiteList返回参数结构体
 */
export interface UpdateGrafanaWhiteListResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGrafanaEnvironments请求参数结构体
 */
export interface DescribeGrafanaEnvironmentsRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
}

/**
 * prometheus配置
 */
export interface PrometheusConfigItem {
  /**
   * 名称
   */
  Name: string
  /**
   * 配置内容
   */
  Config: string
  /**
   * 用于出参，如果该配置来至模板，则为模板id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 目标数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Targets?: Targets
}

/**
 * 告警策略详情
 */
export interface AlarmPolicy {
  /**
   * 告警策略 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyId?: string
  /**
   * 告警策略名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyName?: string
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remark?: string
  /**
   * 监控类型 MT_QCE=云产品监控
注意：此字段可能返回 null，表示取不到有效值。
   */
  MonitorType?: string
  /**
   * 启停状态 0=停用 1=启用
注意：此字段可能返回 null，表示取不到有效值。
   */
  Enable?: number
  /**
   * 策略组绑定的实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  UseSum?: number
  /**
   * 项目 Id -1=无项目 0=默认项目
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId?: number
  /**
   * 项目名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName?: string
  /**
   * 告警策略类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Namespace?: string
  /**
   * 触发条件模板 Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionTemplateId?: string
  /**
   * 指标触发条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Condition?: AlarmPolicyCondition
  /**
   * 事件触发条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventCondition?: AlarmPolicyEventCondition
  /**
   * 通知规则 id 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeIds?: Array<string>
  /**
   * 通知规则 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notices?: Array<AlarmNotice>
  /**
   * 触发任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TriggerTasks?: Array<AlarmPolicyTriggerTask>
  /**
   * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionsTemp?: ConditionsTemp
  /**
   * 最后编辑的用户uin
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastEditUin?: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InsertTime?: number
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: Array<string>
  /**
   * namespace显示名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceShowName?: string
  /**
   * 是否默认策略，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDefault?: number
  /**
   * 能否设置默认策略，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
   */
  CanSetDefault?: number
  /**
   * 实例分组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroupId?: number
  /**
   * 实例分组总实例数
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceSum?: number
  /**
   * 实例分组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroupName?: string
  /**
   * 触发条件类型 STATIC=静态阈值 DYNAMIC=动态类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleType?: string
  /**
   * 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  OriginId?: string
  /**
   * 标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagInstances?: Array<TagInstance>
  /**
   * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Filter?: AlarmConditionFilter
  /**
   * 聚合条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupBy?: Array<AlarmGroupByItem>
  /**
   * 策略关联的过滤维度信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FilterDimensionsParam?: string
  /**
   * 是否为一键告警策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsOneClick?: number
  /**
   * 一键告警策略是否开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  OneClickStatus?: number
  /**
   * 高级指标数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdvancedMetricNumber?: number
  /**
   * 策略是否是全部对象策略
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsBindAll?: number
  /**
   * 策略标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
  /**
   * 是否支持告警标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsSupportAlarmTag?: number
  /**
   * 多标签交/并集关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagOperation?: string
  /**
   * 通知模板绑定内容模板信息
   */
  NoticeTmplBindInfos?: Array<NoticeContentTmplBindInfo>
}

/**
 * DeleteExporterIntegration请求参数结构体
 */
export interface DeleteExporterIntegrationRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * 类型(可通过 DescribeExporterIntegrations获取)
   */
  Kind: string
  /**
   * 名字
   */
  Name: string
  /**
   * Kubernetes 集群类型，取值如下：
<li> 1= 容器集群(TKE) </li>
<li> 2=弹性集群(EKS) </li>
<li> 3= Prometheus管理的弹性集群(MEKS) </li>
   */
  KubeType?: number
  /**
   * 集群 ID，可不填
   */
  ClusterId?: string
}

/**
 * prometheus 报警规则 KV 参数
 */
export interface PrometheusRuleKV {
  /**
   * 键
   */
  Key: string
  /**
   * 值
   */
  Value: string
}

/**
 * DescribePolicyConditionList返回参数结构体
 */
export interface DescribePolicyConditionListResponse {
  /**
   * 告警策略条件列表
   */
  Conditions?: Array<DescribePolicyConditionListCondition>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * prometheus 报警规则集
 */
export interface PrometheusRuleSet {
  /**
   * 规则 ID
   */
  RuleId: string
  /**
   * 规则名称
   */
  RuleName: string
  /**
   * 规则状态码
   */
  RuleState: number
  /**
   * 规则类别
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 规则标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels: Array<PrometheusRuleKV>
  /**
   * 规则注释列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Annotations: Array<PrometheusRuleKV>
  /**
   * 规则表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expr: string
  /**
   * 规则报警持续时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration: string
  /**
   * 报警接收组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Receivers: Array<string>
  /**
   * 规则运行健康状态，取值如下：
<li>unknown 未知状态</li>
<li>pending 加载中</li>
<li>ok 运行正常</li>
<li>err 运行错误</li>
   */
  Health: string
  /**
   * 规则创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt: string
  /**
   * 规则更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt: string
}

/**
 * DescribeAllNamespaces返回参数结构体
 */
export interface DescribeAllNamespacesResponse {
  /**
   * 云产品的告警策略类型，已废弃
   */
  QceNamespaces: CommonNamespace
  /**
   * 其他告警策略类型，已废弃
   */
  CustomNamespaces: CommonNamespace
  /**
   * 云产品的告警策略类型
   */
  QceNamespacesNew: Array<CommonNamespace>
  /**
   * 其他告警策略类型，暂不支持
   */
  CustomNamespacesNew: Array<CommonNamespace>
  /**
   * 通用告警策略类型(包括：应用性能监控，前端性能监控，云拨测)
注意：此字段可能返回 null，表示取不到有效值。
   */
  CommonNamespaces: Array<CommonNamespaceNew>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlarmShield请求参数结构体
 */
export interface CreateAlarmShieldRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string
  /**
   * 屏蔽策略名称
   */
  Name: string
  /**
   * 监控类型
   */
  MonitorType: string
  /**
   * 命名空间即策略类型
   */
  NameSpace: string
  /**
   * 屏蔽时间类型 FOREVER_SHIELD:永久屏蔽 PERIOD_SHIELD:绝对时间范围屏蔽 LOOP_SHIELD:相对时间范围屏蔽
   */
  ShieldTimeType: string
  /**
   * 屏蔽对象
   */
  ShieldObject?: Array<string>
  /**
   * 屏蔽指标 为空则为全部指标
   */
  ShieldMetric?: Array<string>
  /**
   * 开始时间 相对时间范围:36000 绝对时间范围:1648742400 缺省:0
   */
  StartTime?: number
  /**
   * 结束时间 相对时间范围:72000 绝对时间范围:1649088000 缺省:0
   */
  EndTime?: number
  /**
   * 循环开始日期 2022/04/01 缺省:0
   */
  LoopStartDate?: number
  /**
   * 循环结束日期 2022/04/05 缺省:0
   */
  LoopEndDate?: number
  /**
   * 需要屏蔽的策略ID
   */
  ShieldPolicyId?: string
  /**
   * 需要屏蔽的告警等级，取值范围Warn,Remind,Serious
   */
  ShieldAlarmLevel?: Array<string>
  /**
   * 屏蔽类型，为OBJNAME是老版本实例名屏蔽，为POLICY是新版本维度匹配
   */
  VersionTag?: string
  /**
   * 屏蔽规则的描述
   */
  Description?: string
  /**
   *  时区，东八区+8，西八区减8，以此类推

   */
  TimeZone?: number
  /**
   * 屏蔽事件 为空则为全部指标
   */
  ShieldEvent?: Array<string>
  /**
   * 是否对指标屏蔽 1=是 0=否
   */
  ShieldMetricFlag?: number
  /**
   * 是否对事件屏蔽 1=是 0=否
   */
  ShieldEventFlag?: number
}

/**
 * TerminatePrometheusInstances请求参数结构体
 */
export interface TerminatePrometheusInstancesRequest {
  /**
   * 实例 ID 列表
   */
  InstanceIds: Array<string>
}

/**
 * InstallPlugins返回参数结构体
 */
export interface InstallPluginsResponse {
  /**
   * 已安装插件 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  PluginIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云产品监控支持的产品简要信息
 */
export interface ProductSimple {
  /**
   * 命名空间
   */
  Namespace: string
  /**
   * 产品中文名称
   */
  ProductName: string
  /**
   * 产品英文名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductEnName: string
}

/**
 * 告警策略触发条件
 */
export interface AlarmPolicyRule {
  /**
   * 指标名或事件名，支持的指标可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询，支持的事件可以从 [DescribeAlarmEvents](https://cloud.tencent.com/document/product/248/51284) 查询 。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricName?: string
  /**
   * 秒数 统计周期，支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Period?: number
  /**
   * 英文运算符
intelligent=无阈值智能检测
eq=等于
ge=大于等于
gt=大于
le=小于等于
lt=小于
ne=不等于
day_increase=天同比增长
day_decrease=天同比下降
day_wave=天同比波动
week_increase=周同比增长
week_decrease=周同比下降
week_wave=周同比波动
cycle_increase=环比增长
cycle_decrease=环比下降
cycle_wave=环比波动
re=正则匹配
支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operator?: string
  /**
   * 阈值，支持的范围可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
  /**
   * 周期数 持续通知周期 1=持续1个周期 2=持续2个周期...，支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContinuePeriod?: number
  /**
   * 秒数 告警间隔  0=不重复 300=每5分钟告警一次 600=每10分钟告警一次 900=每15分钟告警一次 1800=每30分钟告警一次 3600=每1小时告警一次 7200=每2小时告警一次 10800=每3小时告警一次 21600=每6小时告警一次 43200=每12小时告警一次 86400=每1天告警一次
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeFrequency?: number
  /**
   * 告警频率是否指数增长 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPowerNotice?: number
  /**
   * 对于单个触发规则的过滤条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Filter?: AlarmPolicyFilter
  /**
   * 指标展示名，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Description?: string
  /**
   * 单位，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unit?: string
  /**
   * 触发条件类型 STATIC=静态阈值 DYNAMIC=动态阈值。创建或编辑策略时，如不填则默认为 STATIC。
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleType?: string
  /**
   * 是否为高级指标，0否，1是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAdvanced?: number
  /**
   * 高级指标是否开通，0否，1是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsOpen?: number
  /**
   * 集成中心产品ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: string
  /**
   * 最大值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueMax?: number
  /**
   * 最小值
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValueMin?: number
  /**
   * 告警分级阈值配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  HierarchicalValue?: AlarmHierarchicalValue
  /**
   * 是否延迟指标
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLatenessMetric?: number
}

/**
 * CreateGrafanaIntegration请求参数结构体
 */
export interface CreateGrafanaIntegrationRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
  /**
   * 集成类型(接口DescribeGrafanaIntegrationOverviews返回的集成信息中的Code字段)
   */
  Kind: string
  /**
   * 集成配置
   */
  Content: string
}

/**
 * 实例对象的维度组合
 */
export interface Dimension {
  /**
   * 实例维度名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 实例维度值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * DescribeBindingPolicyObjectList返回参数结构体
 */
export interface DescribeBindingPolicyObjectListResponse {
  /**
   * 绑定的对象实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  List: Array<DescribeBindingPolicyObjectListInstance>
  /**
   * 绑定的对象实例总数
   */
  Total: number
  /**
   * 未屏蔽的对象实例数
   */
  NoShieldedSum: number
  /**
   * 绑定的实例分组信息，没有绑定实例分组则为空
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroup: DescribeBindingPolicyObjectListInstanceGroup
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmSmsQuota请求参数结构体
 */
export interface DescribeAlarmSmsQuotaRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
}

/**
 * DescribePrometheusInstanceInitStatus返回参数结构体
 */
export interface DescribePrometheusInstanceInitStatusResponse {
  /**
   * 实例初始化状态，取值：
uninitialized 未初始化 
initializing 初始化中
running 初始化完成，运行中
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 初始化任务步骤
注意：此字段可能返回 null，表示取不到有效值。
   */
  Steps?: Array<TaskStepInfo>
  /**
   * 实例eks集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EksClusterId?: string
  /**
   * eks集群内pod的安全组
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductEventList返回参数结构体
 */
export interface DescribeProductEventListResponse {
  /**
   * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Events: Array<DescribeProductEventListEvents>
  /**
   * 事件统计
   */
  OverView: DescribeProductEventListOverView
  /**
   * 事件总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 抓取目标数
 */
export interface Targets {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 在线数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Up?: number
  /**
   * 不在线数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Down?: number
  /**
   * 未知状态数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unknown?: number
}

/**
 * 聚合条件
 */
export interface AlarmGroupByItem {
  /**
   * Item Id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
}

/**
 * DescribeAlarmNoticeCallbacks返回参数结构体
 */
export interface DescribeAlarmNoticeCallbacksResponse {
  /**
   * 告警回调通知
注意：此字段可能返回 null，表示取不到有效值。
   */
  URLNotices?: Array<URLNotice>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusInstanceUsage请求参数结构体
 */
export interface DescribePrometheusInstanceUsageRequest {
  /**
   * 按照一个或者多个实例ID查询。实例ID形如：prom-xxxxxxxx。
   */
  InstanceIds: Array<string>
  /**
   * 开始时间
   */
  StartCalcDate: string
  /**
   * 结束时间
   */
  EndCalcDate: string
}

/**
 * DeleteSSOAccount请求参数结构体
 */
export interface DeleteSSOAccountRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
  /**
   * 用户账号 ID ，例如：10000000
   */
  UserId: string
}

/**
 * CreatePrometheusRecordRuleYaml请求参数结构体
 */
export interface CreatePrometheusRecordRuleYamlRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * yaml的内容
   */
  Content: string
  /**
   * 规则名称
   */
  Name?: string
}

/**
 * 实例维度组合数组
 */
export interface Instance {
  /**
   * 实例的维度组合
   */
  Dimensions: Array<Dimension>
}

/**
 * DescribeAlarmNotices返回参数结构体
 */
export interface DescribeAlarmNoticesResponse {
  /**
   * 告警通知模板总数
   */
  TotalCount?: number
  /**
   * 告警通知模板列表
   */
  Notices?: Array<AlarmNotice>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 关联集群时在集群内部署组件的pod额外配置
 */
export interface PrometheusClusterAgentPodConfig {
  /**
   * 是否使用HostNetWork
   */
  HostNet?: boolean
  /**
   * 指定pod运行节点
   */
  NodeSelector?: Array<Label>
  /**
   * 容忍污点
   */
  Tolerations?: Array<Toleration>
}

/**
 * DeletePrometheusAlertGroups请求参数结构体
 */
export interface DeletePrometheusAlertGroupsRequest {
  /**
   * prometheus实例id
   */
  InstanceId?: string
  /**
   * 需要删除的告警分组ID，形如alert-xxxxx
   */
  GroupIds?: Array<string>
}

/**
 * 查询 Grafana 实例时的实例类型
 */
export interface GrafanaInstanceInfo {
  /**
   * 实例名
   */
  InstanceName?: string
  /**
   * 实例 ID
   */
  InstanceId?: string
  /**
   * 地域
   */
  Region?: string
  /**
   * VPC ID
   */
  VpcId?: string
  /**
   * 子网 ID 数组
   */
  SubnetIds?: Array<string>
  /**
   * Grafana 公网地址
   */
  InternetUrl?: string
  /**
   * Grafana 内网地址
   */
  InternalUrl?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:停机中； 6:已停机； 7: 已删除）
   */
  InstanceStatus?: number
  /**
   * 实例的标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSpecification?: Array<PrometheusTag>
  /**
   * 实例的可用区
   */
  Zone?: string
  /**
   * 计费模式（1:包年包月）
   */
  InstanceChargeType?: number
  /**
   * VPC 名称
   */
  VpcName?: string
  /**
   * 子网名称
   */
  SubnetName?: string
  /**
   * 地域 ID
   */
  RegionId?: number
  /**
   * 可访问此实例的完整 URL
   */
  RootUrl?: string
  /**
   * 是否开启 SSO
   */
  EnableSSO?: boolean
  /**
   * 版本号
   */
  Version?: string
  /**
   * SSO登录时是否开启cam鉴权
   */
  EnableSSOCamCheck?: boolean
}

/**
 * DeletePrometheusConfig返回参数结构体
 */
export interface DeletePrometheusConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusRecordRuleYaml返回参数结构体
 */
export interface CreatePrometheusRecordRuleYamlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 指标数据的解释
 */
export interface MetricObjectMeaning {
  /**
   * 指标英文解释
   */
  En: string
  /**
   * 指标中文解释
   */
  Zh: string
}

/**
 * 告警事件
 */
export interface AlarmEvent {
  /**
   * 事件名
   */
  EventName: string
  /**
   * 展示的事件名
   */
  Description: string
  /**
   * 告警策略类型
   */
  Namespace: string
}

/**
 * ModifyPolicyGroup返回参数结构体
 */
export interface ModifyPolicyGroupResponse {
  /**
   * 策略组id
   */
  GroupId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UninstallGrafanaPlugins返回参数结构体
 */
export interface UninstallGrafanaPluginsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrometheusTemp请求参数结构体
 */
export interface ModifyPrometheusTempRequest {
  /**
   * 模板ID
   */
  TemplateId: string
  /**
   * 修改内容
   */
  Template: PrometheusTempModify
}

/**
 * UpgradeGrafanaInstance返回参数结构体
 */
export interface UpgradeGrafanaInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindingPolicyTag请求参数结构体
 */
export interface BindingPolicyTagRequest {
  /**
   * 固定取值 monitor
   */
  Module: string
  /**
   * 策略ID
   */
  PolicyId: string
  /**
   * 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID
   */
  GroupId: string
  /**
   * 产品类型
   */
  ServiceType: string
  /**
   * 策略标签
   */
  Tag?: PolicyTag
  /**
   * 实例分组ID
   */
  InstanceGroupId?: number
  /**
   * 批量绑定标签
   */
  BatchTag?: Array<PolicyTag>
  /**
   * 是否同步eb
   */
  EbEventFlag?: number
  /**
   * 事件配置的告警
   */
  EbSubject?: string
  /**
   * 标识标签取交/并集关系
   */
  TagOperation?: string
}

/**
 * DeletePrometheusTempSync返回参数结构体
 */
export interface DeletePrometheusTempSyncResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDNSConfig请求参数结构体
 */
export interface DescribeDNSConfigRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
}

/**
 * 查询策略输出的模板策略组信息
 */
export interface DescribePolicyGroupInfoConditionTpl {
  /**
   * 策略组id
   */
  GroupId: number
  /**
   * 策略组名称
   */
  GroupName: string
  /**
   * 策略类型
   */
  ViewName: string
  /**
   * 策略组说明
   */
  Remark: string
  /**
   * 最后编辑的用户uin
   */
  LastEditUin: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  InsertTime: number
  /**
   * 是否且规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUnionRule: number
}

/**
 * UnBindingPolicyObject返回参数结构体
 */
export interface UnBindingPolicyObjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusRecordRules请求参数结构体
 */
export interface DescribePrometheusRecordRulesRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 仅支持按Name, Values字段过滤。
   */
  Filters?: Array<Filter>
}

/**
 * ModifyAlarmPolicyStatus返回参数结构体
 */
export interface ModifyAlarmPolicyStatusResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeExporterIntegrations返回参数结构体
 */
export interface DescribeExporterIntegrationsResponse {
  /**
   * 集成配置列表
   */
  IntegrationSet?: Array<IntegrationConfiguration>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAlertRule返回参数结构体
 */
export interface UpdateAlertRuleResponse {
  /**
   * 规则 ID
   */
  RuleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBasicAlarmList返回的Alarms里的InstanceGroup
 */
export interface InstanceGroup {
  /**
   * 实例组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroupId: number
  /**
   * 实例组名
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroupName: string
}

/**
 * EnableGrafanaSSO请求参数结构体
 */
export interface EnableGrafanaSSORequest {
  /**
   * 是否开启 SSO，true为开启，false 为不开启
   */
  EnableSSO: boolean
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
}

/**
 * DescribePrometheusScrapeJobs返回参数结构体
 */
export interface DescribePrometheusScrapeJobsResponse {
  /**
   * 任务列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ScrapeJobSet?: Array<PrometheusScrapeJob>
  /**
   * 任务总量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableGrafanaInternet请求参数结构体
 */
export interface EnableGrafanaInternetRequest {
  /**
   * Grafana 实例 ID，例如：grafana-kleu3gt0
   */
  InstanceID: string
  /**
   * 开启或关闭公网访问，true为开启，false 为不开启
   */
  EnableInternet: boolean
}

/**
 * DescribePluginOverviews返回参数结构体
 */
export interface DescribePluginOverviewsResponse {
  /**
   * 插件列表
   */
  PluginSet?: Array<GrafanaPlugin>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Grafana可视化服务 账号权限
 */
export interface GrafanaAccountRole {
  /**
   * 组织
   */
  Organization?: string
  /**
   * 权限(Admin、Editor、Viewer)
   */
  Role?: string
}

/**
 * DeleteRecordingRules返回参数结构体
 */
export interface DeleteRecordingRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 2018版策略模板列表接收人信息
 */
export interface PolicyGroupReceiverInfo {
  /**
   * 有效时段结束时间
   */
  EndTime: number
  /**
   * 是否需要发送通知
   */
  NeedSendNotice: number
  /**
   * 告警接收渠道
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyWay: Array<string>
  /**
   * 电话告警对个人间隔（秒）
   */
  PersonInterval: number
  /**
   * 消息接收组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverGroupList: Array<number | bigint>
  /**
   * 接受者类型
   */
  ReceiverType: string
  /**
   * 接收人列表。通过平台接口查询到的接收人id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverUserList: Array<number | bigint>
  /**
   * 告警恢复通知方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecoverNotify: Array<string>
  /**
   * 电话告警每轮间隔（秒）
   */
  RoundInterval: number
  /**
   * 电话告警轮数
   */
  RoundNumber: number
  /**
   * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
注意：此字段可能返回 null，表示取不到有效值。
   */
  SendFor: Array<string>
  /**
   * 有效时段开始时间
   */
  StartTime: number
  /**
   * 电话告警接收者uid
注意：此字段可能返回 null，表示取不到有效值。
   */
  UIDList: Array<number | bigint>
}

/**
 * CreateGrafanaNotificationChannel请求参数结构体
 */
export interface CreateGrafanaNotificationChannelRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
  /**
   * 告警通道名称，例如：test
   */
  ChannelName: string
  /**
   * 接受告警通道 ID 数组，值为告警管理/基础配置/通知模板中的模板 ID
   */
  Receivers: Array<string>
  /**
   * 默认为1，建议使用 OrganizationIds
   */
  OrgId?: number
  /**
   * 额外组织 ID 数组，已废弃，请使用 OrganizationIds
   */
  ExtraOrgIds?: Array<string>
  /**
   * 生效的所有组织 ID 数组，默认为 ["1"]
   */
  OrganizationIds?: Array<string>
}

/**
 * DescribeMidDimensionValueList的查询条件
 */
export interface MidQueryCondition {
  /**
   * 维度
   */
  Key: string
  /**
   * 操作符，支持等于(eq)、不等于(ne)，以及in
   */
  Operator: string
  /**
   * 维度值，当Op是eq、ne时，只使用第一个元素
   */
  Value: Array<string>
}

/**
 * DescribeGrafanaInstances请求参数结构体
 */
export interface DescribeGrafanaInstancesRequest {
  /**
   * 查询偏移量
   */
  Offset: number
  /**
   * 查询数量
   */
  Limit: number
  /**
   * Grafana 实例 ID 数组
   */
  InstanceIds?: Array<string>
  /**
   * Grafana 实例名，支持前缀模糊搜索
   */
  InstanceName?: string
  /**
   * 查询状态
   */
  InstanceStatus?: Array<number | bigint>
  /**
   * 标签过滤数组
   */
  TagFilters?: Array<PrometheusTag>
}

/**
 * DescribePrometheusAgentInstances返回参数结构体
 */
export interface DescribePrometheusAgentInstancesResponse {
  /**
   * 关联该集群的实例列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Instances?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警通知模板 - 回调通知详情
 */
export interface URLNotice {
  /**
   * 回调 url（限长256字符）
注意：此字段可能返回 null，表示取不到有效值。
   */
  URL: string
  /**
   * 是否通过验证 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsValid?: number
  /**
   * 验证码
注意：此字段可能返回 null，表示取不到有效值。
   */
  ValidationCode?: string
  /**
   * 通知开始时间 一天开始的秒数
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: number
  /**
   * 通知结束时间 一天开始的秒数
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: number
  /**
   * 通知周期 1-7表示周一到周日
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weekday?: Array<number | bigint>
}

/**
 * DescribeProductList返回参数结构体
 */
export interface DescribeProductListResponse {
  /**
   * 产品信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductList?: Array<ProductSimple>
  /**
   * 产品总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusTemp返回参数结构体
 */
export interface DeletePrometheusTempResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建策略传入的阈值告警条件
 */
export interface CreatePolicyGroupCondition {
  /**
   * 指标Id
   */
  MetricId: number
  /**
   * 告警发送收敛类型。0连续告警，1指数告警
   */
  AlarmNotifyType: number
  /**
   * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
   */
  AlarmNotifyPeriod: number
  /**
   * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等。如果指标有配置默认比较类型值可以不填。
   */
  CalcType?: number
  /**
   * 比较的值，如果指标不必须CalcValue可不填
   */
  CalcValue?: number
  /**
   * 数据聚合周期(单位秒)，若指标有默认值可不填
   */
  CalcPeriod?: number
  /**
   * 持续几个检测周期触发规则会告警
   */
  ContinuePeriod?: number
  /**
   * 如果通过模板创建，需要传入模板中该指标的对应RuleId
   */
  RuleId?: number
}

/**
 * 查询策略输出的告警接收人信息
 */
export interface DescribePolicyGroupInfoReceiverInfo {
  /**
   * 告警接收组id列表
   */
  ReceiverGroupList: Array<number | bigint>
  /**
   * 告警接收人id列表
   */
  ReceiverUserList: Array<number | bigint>
  /**
   * 告警时间段开始时间。范围[0,86400)，作为 UNIX 时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
   */
  StartTime: number
  /**
   * 告警时间段结束时间。含义同StartTime
   */
  EndTime: number
  /**
   * 接收类型。“group”(接收组)或“user”(接收人)
   */
  ReceiverType: string
  /**
   * 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT"
   */
  NotifyWay: Array<string>
  /**
   * 电话告警接收者uid
注意：此字段可能返回 null，表示取不到有效值。
   */
  UidList: Array<number | bigint>
  /**
   * 电话告警轮数
   */
  RoundNumber: number
  /**
   * 电话告警每轮间隔（秒）
   */
  RoundInterval: number
  /**
   * 电话告警对个人间隔（秒）
   */
  PersonInterval: number
  /**
   * 是否需要电话告警触达提示。0不需要，1需要
   */
  NeedSendNotice: number
  /**
   * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
   */
  SendFor: Array<string>
  /**
   * 恢复通知方式。可选"SMS"
   */
  RecoverNotify: Array<string>
  /**
   * 告警发送语言
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiveLanguage: string
}

/**
 * Prometheus 聚合规则响应结构体内信息
 */
export interface RecordingRuleSet {
  /**
   * 规则 ID
   */
  RuleId?: string
  /**
   * 规则状态码
   */
  RuleState?: number
  /**
   * 分组名称
   */
  Name?: string
  /**
   * 规则内容组
   */
  Group?: string
  /**
   * 规则数量
   */
  Total?: number
  /**
   * 规则创建时间
   */
  CreatedAt?: string
  /**
   * 规则最近更新时间
   */
  UpdatedAt?: string
  /**
   * 规则名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName?: string
}

/**
 * DescribeBasicAlarmList请求参数结构体
 */
export interface DescribeBasicAlarmListRequest {
  /**
   * 接口模块名，当前取值monitor
   */
  Module: string
  /**
   * 起始时间，默认一天前的时间戳
   */
  StartTime?: number
  /**
   * 结束时间，默认当前时间戳
   */
  EndTime?: number
  /**
   * 分页参数，每页返回的数量，取值1~100，默认20
   */
  Limit?: number
  /**
   * 分页参数，页偏移量，从0开始计数，默认0
   */
  Offset?: number
  /**
   * 根据发生时间排序，取值ASC或DESC
   */
  OccurTimeOrder?: string
  /**
   * 根据项目ID过滤
   */
  ProjectIds?: Array<number | bigint>
  /**
   * 根据策略类型过滤
   */
  ViewNames?: Array<string>
  /**
   * 根据告警状态过滤
   */
  AlarmStatus?: Array<number | bigint>
  /**
   * 根据告警对象过滤
   */
  ObjLike?: string
  /**
   * 根据实例组ID过滤
   */
  InstanceGroupIds?: Array<number | bigint>
  /**
   * 根据指标名过滤
   */
  MetricNames?: Array<string>
}

/**
 * DescribePrometheusAlertGroups返回参数结构体
 */
export interface DescribePrometheusAlertGroupsResponse {
  /**
   * 告警分组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertGroupSet?: Array<PrometheusAlertGroupSet>
  /**
   * 告警分组总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusTempSync请求参数结构体
 */
export interface DescribePrometheusTempSyncRequest {
  /**
   * 模板ID
   */
  TemplateId: string
}

/**
 * DescribePrometheusGlobalConfig返回参数结构体
 */
export interface DescribePrometheusGlobalConfigResponse {
  /**
   * 配置内容
   */
  Config?: string
  /**
   * ServiceMonitors列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * PodMonitors列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * RawJobs列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * Probes列表以及对应targets信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Probes?: Array<PrometheusConfigItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRecordingRule返回参数结构体
 */
export interface CreateRecordingRuleResponse {
  /**
   * 规则 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateGrafanaNotificationChannel返回参数结构体
 */
export interface CreateGrafanaNotificationChannelResponse {
  /**
   * 通道 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChannelId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGrafanaNotificationChannels请求参数结构体
 */
export interface DescribeGrafanaNotificationChannelsRequest {
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 查询数量
   */
  Limit: number
  /**
   * 告警通道名称，例如：test
   */
  ChannelName?: string
  /**
   * 告警通道 ID，例如：nchannel-abcd1234
   */
  ChannelIDs?: Array<string>
  /**
   * 告警通道状态
   */
  ChannelState?: number
}

/**
 * CleanGrafanaInstance请求参数结构体
 */
export interface CleanGrafanaInstanceRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
}

/**
 * DescribeSSOAccount请求参数结构体
 */
export interface DescribeSSOAccountRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
  /**
   * 填写对应的账号 ID，将会按账号 ID 进行过滤，例如：10000
   */
  UserId?: string
}

/**
 * UpdateExporterIntegration返回参数结构体
 */
export interface UpdateExporterIntegrationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlarmNotice请求参数结构体
 */
export interface CreateAlarmNoticeRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string
  /**
   * 通知模板名称 60字符以内
   */
  Name: string
  /**
   * 通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=都通知
   */
  NoticeType: string
  /**
   * 通知语言 zh-CN=中文 en-US=英文
   */
  NoticeLanguage: string
  /**
   * 用户通知 最多5个
   */
  UserNotices?: Array<UserNotice>
  /**
   * 回调通知 最多6个
   */
  URLNotices?: Array<URLNotice>
  /**
   * 推送CLS日志服务的操作 最多1个
   */
  CLSNotices?: Array<CLSNotice>
  /**
   * 模板绑定的标签
   */
  Tags?: Array<Tag>
}

/**
 * 告警对象所属实例组
 */
export interface InstanceGroups {
  /**
   * 实例组 Id
   */
  Id: number
  /**
   * 实例组名称
   */
  Name: string
}

/**
 * UpdateGrafanaNotificationChannel返回参数结构体
 */
export interface UpdateGrafanaNotificationChannelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateExporterIntegration返回参数结构体
 */
export interface CreateExporterIntegrationResponse {
  /**
   * 返回创建成功的集成名称列表
   */
  Names?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UnBindingAllPolicyObject请求参数结构体
 */
export interface UnBindingAllPolicyObjectRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 策略组id，如传入 PolicyId 则该字段被忽略可传入任意值如 0
   */
  GroupId: number
  /**
   * 告警策略ID，使用此字段时 GroupId 会被忽略
   */
  PolicyId?: string
  /**
   * 事件配置的告警
   */
  EbSubject?: string
  /**
   * 是否配置了事件告警
   */
  EbEventFlag?: number
}

/**
 * 告警策略指标触发条件
 */
export interface AlarmPolicyCondition {
  /**
   * 告警触发条件的判断方式. 0: 任意; 1: 全部; 2: 复合. 当取值为2的时候为复合告警，与参数 ComplexExpression 配合使用.
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUnionRule: number
  /**
   * 告警触发条件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rules: Array<AlarmPolicyRule>
  /**
   * 复合告警触发条件的判断表达式，当 IsUnionRule 取值为2的时候有效. 其作用是描述多个触发条件需要满足表达式求值为True时才算是满足告警条件.
注意：此字段可能返回 null，表示取不到有效值。
   */
  ComplexExpression?: string
}

/**
 * 修改告警策略组传入的指标阈值条件
 */
export interface ModifyPolicyGroupCondition {
  /**
   * 指标id
   */
  MetricId: number
  /**
   * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等
   */
  CalcType: number
  /**
   * 检测阈值
   */
  CalcValue: string
  /**
   * 检测指标的数据周期
   */
  CalcPeriod: number
  /**
   * 持续周期个数
   */
  ContinuePeriod: number
  /**
   * 告警发送收敛类型。0连续告警，1指数告警
   */
  AlarmNotifyType: number
  /**
   * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
   */
  AlarmNotifyPeriod: number
  /**
   * 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改
   */
  RuleId?: number
}

/**
 * DescribeRemoteURLs请求参数结构体
 */
export interface DescribeRemoteURLsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * url数组
   */
  RemoteURLs?: Array<string>
}

/**
 * DescribeGrafanaConfig请求参数结构体
 */
export interface DescribeGrafanaConfigRequest {
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
}

/**
 * UpdateRecordingRule请求参数结构体
 */
export interface UpdateRecordingRuleRequest {
  /**
   * 聚合规则名称
   */
  Name: string
  /**
   * 聚合规则组内容，格式为 yaml，通过 base64 进行编码。
   */
  Group: string
  /**
   * Prometheus 实例 ID(可通过 DescribePrometheusInstances 接口获取)
   */
  InstanceId: string
  /**
   * Prometheus 聚合规则 ID(可通过 DescribeRecordingRules 接口获取)
   */
  RuleId: string
  /**
   * 规则状态码，取值如下：
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
默认状态码为 2 启用。
   */
  RuleState?: number
}

/**
 * DescribePolicyConditionList.ConfigManual.CalcValue
 */
export interface DescribePolicyConditionListConfigManualCalcValue {
  /**
   * 默认值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Default: string
  /**
   * 固定值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fixed: string
  /**
   * 最大值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Max: string
  /**
   * 最小值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Min: string
  /**
   * 是否必须
   */
  Need: boolean
}

/**
 * DescribePrometheusInstances请求参数结构体
 */
export interface DescribePrometheusInstancesRequest {
  /**
   * 按照一个或者多个实例ID查询。实例ID形如：prom-xxxxxxxx。请求的实例的上限为100。
   */
  InstanceIds?: Array<string>
  /**
   * 按照【实例状态】进行过滤。
<ul>
<li>1：正在创建</li>
<li>2：运行中</li>
<li>3：异常</li>
<li>4：重建中</li>
<li>5：销毁中</li>
<li>6：已停服</li>
<li>8：欠费停服中</li>
<li>9：欠费已停服</li>
</ul>
   */
  InstanceStatus?: Array<number | bigint>
  /**
   * 按照【实例名称】进行过滤。
   */
  InstanceName?: string
  /**
   * 按照【可用区】进行过滤。可用区形如：ap-guangzhou-1。
   */
  Zones?: Array<string>
  /**
   * 按照【标签键值对】进行过滤。tag-key使用具体的标签键进行替换。
   */
  TagFilters?: Array<PrometheusTag>
  /**
   * 按照【实例的IPv4地址】进行过滤。
   */
  IPv4Address?: Array<string>
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 按照【计费类型】进行过滤。
<li>2：包年包月</li>
<li>3：按量</li>
   */
  InstanceChargeType?: number
}

/**
 * kubernetes Taint
 */
export interface Toleration {
  /**
   * 容忍应用到的 taint key
   */
  Key?: string
  /**
   * 键与值的关系
   */
  Operator?: string
  /**
   * 要匹配的污点效果
   */
  Effect?: string
}

/**
 * 策略列表详情标签返回体
 */
export interface TagInstance {
  /**
   * 标签Key
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 标签Value
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
  /**
   * 实例个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceSum: number
  /**
   * 产品类型，如：cvm
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceType: string
  /**
   * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RegionId: number
  /**
   * 绑定状态，2：绑定成功，1：绑定中
注意：此字段可能返回 null，表示取不到有效值。
   */
  BindingStatus: number
  /**
   * 标签状态，2：标签存在，1：标签不存在
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagStatus: number
}

/**
 * DescribePolicyConditionList.ConfigManual
 */
export interface DescribePolicyConditionListConfigManual {
  /**
   * 检测方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcType: DescribePolicyConditionListConfigManualCalcType
  /**
   * 检测阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcValue: DescribePolicyConditionListConfigManualCalcValue
  /**
   * 持续时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContinueTime: DescribePolicyConditionListConfigManualContinueTime
  /**
   * 数据周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  Period: DescribePolicyConditionListConfigManualPeriod
  /**
   * 持续周期个数
注意：此字段可能返回 null，表示取不到有效值。
   */
  PeriodNum: DescribePolicyConditionListConfigManualPeriodNum
  /**
   * 聚合方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatType: DescribePolicyConditionListConfigManualStatType
}

/**
 * InstallPlugins请求参数结构体
 */
export interface InstallPluginsRequest {
  /**
   * 插件信息(可通过 DescribePluginOverviews 接口获取)
   */
  Plugins: Array<GrafanaPlugin>
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
}

/**
 * DescribeAlarmEvents返回参数结构体
 */
export interface DescribeAlarmEventsResponse {
  /**
   * 告警事件列表
   */
  Events: Array<AlarmEvent>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeServiceDiscovery返回参数结构体
 */
export interface DescribeServiceDiscoveryResponse {
  /**
   * 返回服务发现列表信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceDiscoverySet?: Array<ServiceDiscoveryItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Prometheus 托管服务标签
 */
export interface PrometheusTag {
  /**
   * 标签的健值
   */
  Key: string
  /**
   * 标签对应的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * 指标告警配置
 */
export interface DescribePolicyConditionListMetric {
  /**
   * 指标配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigManual: DescribePolicyConditionListConfigManual
  /**
   * 指标id
   */
  MetricId: number
  /**
   * 指标名称
   */
  MetricShowName: string
  /**
   * 指标单位
   */
  MetricUnit: string
}

/**
 * 通知内容模板绑定信息
 */
export interface NoticeContentTmplBindInfo {
  /**
   * 通知内容模板ID
   */
  ContentTmplID?: string
  /**
   * 通知模板ID
   */
  NoticeID?: string
}

/**
 * BindingPolicyObject请求参数结构体
 */
export interface BindingPolicyObjectRequest {
  /**
   * 必填。固定值"monitor"
   */
  Module: string
  /**
   * 策略组id，例如 4739573。逐渐弃用，建议使用 PolicyId 参数
   */
  GroupId?: number
  /**
   * 告警策略ID，例如“policy-gh892hg0”。PolicyId 参数与 GroupId 参数至少要填一个，否则会报参数错误，建议使用该参数。若两者同时存在则以该参数为准
   */
  PolicyId?: string
  /**
   * 实例分组ID
   */
  InstanceGroupId?: number
  /**
   * 需要绑定的对象维度信息
   */
  Dimensions?: Array<BindingPolicyObjectDimension>
  /**
   * 事件配置的告警
   */
  EbSubject?: string
  /**
   * 是否配置了事件告警
   */
  EbEventFlag?: number
}

/**
 * CreateServiceDiscovery返回参数结构体
 */
export interface CreateServiceDiscoveryResponse {
  /**
   * 创建成功之后，返回对应服务发现信息
   */
  ServiceDiscovery?: ServiceDiscoveryItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeClusterAgentCreatingProgress请求参数结构体
 */
export type DescribeClusterAgentCreatingProgressRequest = null

/**
 * UpdatePrometheusAlertGroup请求参数结构体
 */
export interface UpdatePrometheusAlertGroupRequest {
  /**
   * prometheus实例ID
   */
  InstanceId?: string
  /**
   * 告警分组ID，形如alert-xxxx
   */
  GroupId?: string
  /**
   * 告警分组名称，不能与其他告警分组重名
   */
  GroupName?: string
  /**
   * 告警分组状态：
2 -- 启用
3 -- 禁用
不为空时会覆盖 `Rules`字段下所有告警规则状态
   */
  GroupState?: number
  /**
   * 云监控告警通知模板ID列表，形如Consumer-xxxx或notice-xxxx
   */
  AMPReceivers?: Array<string>
  /**
   * 自定义告警通知模板
   */
  CustomReceiver?: PrometheusAlertCustomReceiver
  /**
   * 告警通知周期（收敛时间），为空默认1h
   */
  RepeatInterval?: string
  /**
   * 要创建的告警规则列表
   */
  Rules?: Array<PrometheusAlertGroupRuleSet>
}

/**
 * EnableSSOCamCheck返回参数结构体
 */
export interface EnableSSOCamCheckResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccidentEventList请求参数结构体
 */
export interface DescribeAccidentEventListRequest {
  /**
   * 接口模块名，当前接口取值monitor
   */
  Module: string
  /**
   * 起始时间，默认一天前的时间戳
   */
  StartTime?: number
  /**
   * 结束时间，默认当前时间戳
   */
  EndTime?: number
  /**
   * 分页参数，每页返回的数量，取值1~100，默认20
   */
  Limit?: number
  /**
   * 分页参数，页偏移量，从0开始计数，默认0
   */
  Offset?: number
  /**
   * 根据UpdateTime排序的规则，取值asc或desc
   */
  UpdateTimeOrder?: string
  /**
   * 根据OccurTime排序的规则，取值asc或desc（优先根据UpdateTimeOrder排序）
   */
  OccurTimeOrder?: string
  /**
   * 根据事件类型过滤，1表示服务问题，2表示其他订阅
   */
  AccidentType?: Array<number | bigint>
  /**
   * 根据事件过滤，1表示云服务器存储问题，2表示云服务器网络连接问题，3表示云服务器运行异常，202表示运营商网络抖动
   */
  AccidentEvent?: Array<number | bigint>
  /**
   * 根据事件状态过滤，0表示已恢复，1表示未恢复
   */
  AccidentStatus?: Array<number | bigint>
  /**
   * 根据事件地域过滤，gz表示广州，sh表示上海等
   */
  AccidentRegion?: Array<string>
  /**
   * 根据影响资源过滤，比如ins-19a06bka
   */
  AffectResource?: string
}

/**
 * CreatePrometheusScrapeJob返回参数结构体
 */
export interface CreatePrometheusScrapeJobResponse {
  /**
   * 成功创建抓取任务 Id
   */
  JobId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlarmPolicy请求参数结构体
 */
export interface CreateAlarmPolicyRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 策略名称，不超过60字符
   */
  PolicyName: string
  /**
   * 监控类型 MT_QCE=云产品监控
   */
  MonitorType: string
  /**
   * 告警策略类型，由 [DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 获得。对于云产品监控，取接口出参的 QceNamespacesNew.N.Id，例如 cvm_device
   */
  Namespace: string
  /**
   * 备注，不超过100字符，仅支持中英文、数字、下划线、-
   */
  Remark?: string
  /**
   * 是否启用 0=停用 1=启用，可不传 默认为1
   */
  Enable?: number
  /**
   * 项目 Id，对于区分项目的产品必须传入非 -1 的值。 -1=无项目 0=默认项目，如不传 默认为 -1。支持的项目 Id 可以在控制台 [账号中心-项目管理](https://console.cloud.tencent.com/project) 中查看。
   */
  ProjectId?: number
  /**
   * 触发条件模板 Id，该参数与 Condition 参数二选一。如果策略绑定触发条件模板，则传该参数；否则不传该参数，而是传 Condition 参数。触发条件模板 Id 可以从 [DescribeConditionsTemplateList](https://cloud.tencent.com/document/api/248/70250) 接口获取。
   */
  ConditionTemplateId?: number
  /**
   * 指标触发条件，支持的指标可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
   */
  Condition?: AlarmPolicyCondition
  /**
   * 事件触发条件，支持的事件可以从 [DescribeAlarmEvents](https://cloud.tencent.com/document/product/248/51284) 查询。
   */
  EventCondition?: AlarmPolicyEventCondition
  /**
   * 通知规则 Id 列表，由 [DescribeAlarmNotices](https://cloud.tencent.com/document/product/248/51280) 获得
   */
  NoticeIds?: Array<string>
  /**
   * 触发任务列表
   */
  TriggerTasks?: Array<AlarmPolicyTriggerTask>
  /**
   * 全局过滤条件
   */
  Filter?: AlarmPolicyFilter
  /**
   * 聚合维度列表，指定按哪些维度 key 来做 group by
   */
  GroupBy?: Array<string>
  /**
   * 模板绑定的标签
   */
  Tags?: Array<Tag>
  /**
   * 日志告警信息
   */
  LogAlarmReqInfo?: LogAlarmReq
  /**
   * 告警分级通知规则配置
   */
  HierarchicalNotices?: Array<AlarmHierarchicalNotice>
  /**
   * 迁移策略专用字段，0-走鉴权逻辑，1-跳过鉴权逻辑
   */
  MigrateFlag?: number
  /**
   * 事件配置的告警
   */
  EbSubject?: string
  /**
   * 附加告警内容
   */
  AdditionalAlarmContent?: string
  /**
   * 通知模板绑定信息
   */
  NoticeContentTmplBindInfos?: Array<NoticeContentTmplBindInfo>
}

/**
 * PrometheusZoneItem 响应结构体内的地域信息
 */
export interface PrometheusZoneItem {
  /**
   * 可用区
   */
  Zone?: string
  /**
   * 可用区 ID
   */
  ZoneId?: number
  /**
   * 可用区状态( 0: 不可用；1: 可用)
   */
  ZoneState?: number
  /**
   * 地域 ID
   */
  RegionId?: number
  /**
   * 可用区名（目前为中文）
   */
  ZoneName?: string
  /**
   * 可用区资源状态(0:资源不足，不可使用；1:资源足够)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneResourceState?: number
}

/**
 * DescribeAlarmSmsQuota接口的配额信息
 */
export interface DescribeAlarmSmsQuotaQuota {
  /**
   * 配额类型
   */
  Type: string
  /**
   * 配额名称
   */
  Name: string
  /**
   * 免费配额剩余量
   */
  FreeLeft: number
  /**
   * 付费配额剩余量
   */
  PurchaseLeft: number
  /**
   * 已使用量
   */
  Used: number
}

/**
 * ModifyPrometheusAlertPolicy请求参数结构体
 */
export interface ModifyPrometheusAlertPolicyRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * 告警配置，[具体参考](https://cloud.tencent.com/document/api/248/30354#PrometheusAlertPolicyItem)
   */
  AlertRule: PrometheusAlertPolicyItem
}

/**
 * ModifyPrometheusInstanceAttributes返回参数结构体
 */
export interface ModifyPrometheusInstanceAttributesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云原生Prometheus模板同步目标
 */
export interface PrometheusTemplateSyncTarget {
  /**
   * 目标所在地域
   */
  Region: string
  /**
   * 目标实例
   */
  InstanceId: string
  /**
   * 集群id，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * 最后一次同步时间， 用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  SyncTime?: string
  /**
   * 当前使用的模板版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 集群类型，只有当采集模板的Level为cluster的时候需要
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: string
  /**
   * 用于出参，实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName?: string
  /**
   * 用于出参，集群名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterName?: string
}

/**
 * DescribePrometheusAlertPolicy返回参数结构体
 */
export interface DescribePrometheusAlertPolicyResponse {
  /**
   * 告警详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertRules?: Array<PrometheusAlertPolicyItem>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateGrafanaEnvironments请求参数结构体
 */
export interface UpdateGrafanaEnvironmentsRequest {
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
  /**
   * JSON 序列化后的环境变量字符串，如 "{\"key1\":\"key2\"}"

   */
  Envs: string
}

/**
 * 统一的命名空间信息
 */
export interface CommonNamespace {
  /**
   * 命名空间标示
   */
  Id: string
  /**
   * 命名空间名称
   */
  Name: string
  /**
   * 命名空间值
   */
  Value: string
  /**
   * 产品名称
   */
  ProductName: string
  /**
   * 配置信息
   */
  Config: string
  /**
   * 支持地域列表
   */
  AvailableRegions: Array<string>
  /**
   * 排序Id
   */
  SortId: number
  /**
   * Dashboard中的唯一表示
   */
  DashboardId: string
}

/**
 * url鉴权
 */
export interface BasicAuth {
  /**
   * 用户名
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
}

/**
 * DeleteGrafanaNotificationChannel返回参数结构体
 */
export interface DeleteGrafanaNotificationChannelResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRemoteURLs请求参数结构体
 */
export interface ModifyRemoteURLsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 多写配置
   */
  RemoteWrites?: Array<RemoteWrite>
}

/**
 * 监控数据点
 */
export interface DataPoint {
  /**
   * 实例对象维度组合
   */
  Dimensions?: Array<Dimension>
  /**
   * 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了
   */
  Timestamps?: Array<number>
  /**
   * 监控值数组，该数组和Timestamps一一对应
   */
  Values?: Array<number>
  /**
   * 监控值数组，该数组和Timestamps一一对应
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxValues?: Array<number>
  /**
   * 监控值数组，该数组和Timestamps一一对应
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinValues?: Array<number>
  /**
   * 监控值数组，该数组和Timestamps一一对应
注意：此字段可能返回 null，表示取不到有效值。
   */
  AvgValues?: Array<number>
}

/**
 * DescribeAlarmPolicies返回参数结构体
 */
export interface DescribeAlarmPoliciesResponse {
  /**
   * 策略总数
   */
  TotalCount?: number
  /**
   * 策略数组
   */
  Policies?: Array<AlarmPolicy>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrometheusGlobalNotification请求参数结构体
 */
export interface ModifyPrometheusGlobalNotificationRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 告警通知渠道
   */
  Notification: PrometheusNotificationItem
}

/**
 * DescribePolicyConditionList.ConfigManual.Period
 */
export interface DescribePolicyConditionListConfigManualPeriod {
  /**
   * 默认周期，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Default: number
  /**
   * 可选周期，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys: Array<number | bigint>
  /**
   * 是否必须
   */
  Need: boolean
}

/**
 * DescribePrometheusRecordRules返回参数结构体
 */
export interface DescribePrometheusRecordRulesResponse {
  /**
   * 聚合规则
   */
  Records?: Array<PrometheusRecordRuleYamlItem>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusGlobalNotification返回参数结构体
 */
export interface DescribePrometheusGlobalNotificationResponse {
  /**
   * 全局告警通知渠道
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notification?: PrometheusNotificationItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警分组内告警规则信息
 */
export interface PrometheusAlertGroupRuleSet {
  /**
   * 告警规则名称，同一告警分组下不允许重名
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleName?: string
  /**
   * 标签列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<PrometheusRuleKV>
  /**
   * 注释列表

告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Annotations?: Array<PrometheusRuleKV>
  /**
   * 规则报警持续时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration?: string
  /**
   * 规则表达式，可参考<a href="https://cloud.tencent.com/document/product/1416/56008">告警规则说明</a>
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expr?: string
  /**
   * 告警规则状态:
2-启用
3-禁用
为空默认启用
注意：此字段可能返回 null，表示取不到有效值。
   */
  State?: number
}

/**
 * DescribeMonitorTypes请求参数结构体
 */
export interface DescribeMonitorTypesRequest {
  /**
   * 模块名，固定值 monitor
   */
  Module: string
}

/**
 * 维度信息
 */
export interface DimensionsDesc {
  /**
   * 维度名数组
   */
  Dimensions: Array<string>
}

/**
 * DeletePrometheusAlertPolicy请求参数结构体
 */
export interface DeletePrometheusAlertPolicyRequest {
  /**
   * 实例ID(可通过 DescribePrometheusInstances 接口获取)
   */
  InstanceId: string
  /**
   * 告警策略ID列表(可通过 DescribePrometheusAlertPolicy 接口获取)
   */
  AlertIds: Array<string>
  /**
   * 告警策略名称(可通过 DescribePrometheusAlertPolicy 接口获取)，名称完全相同的告警策略才会删除
   */
  Names?: Array<string>
}

/**
 * 多写配置
 */
export interface RemoteWrite {
  /**
   * 多写url
   */
  URL: string
  /**
   * RelabelConfig
注意：此字段可能返回 null，表示取不到有效值。
   */
  URLRelabelConfig?: string
  /**
   * 鉴权
注意：此字段可能返回 null，表示取不到有效值。
   */
  BasicAuth?: BasicAuth
  /**
   * 最大block
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  MaxBlockSize?: string
  /**
   * Label
注意：此字段可能返回 null，表示取不到有效值。
   * @deprecated
   */
  Label?: string
  /**
   * HTTP 额外添加的头
注意：此字段可能返回 null，表示取不到有效值。
   */
  Headers?: Array<RemoteWriteHeader>
}

/**
 * ModifyPrometheusAgentExternalLabels返回参数结构体
 */
export interface ModifyPrometheusAgentExternalLabelsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmNotice请求参数结构体
 */
export interface ModifyAlarmNoticeRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string
  /**
   * 告警通知规则名称 60字符以内
   */
  Name: string
  /**
   * 通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=都通知
   */
  NoticeType: string
  /**
   * 通知语言 zh-CN=中文 en-US=英文
   */
  NoticeLanguage: string
  /**
   * 告警通知模板 ID
   */
  NoticeId: string
  /**
   * 用户通知 最多5个
   */
  UserNotices?: Array<UserNotice>
  /**
   * 回调通知 最多6个
   */
  URLNotices?: Array<URLNotice>
  /**
   * 告警通知推送到CLS服务 最多1个
   */
  CLSNotices?: Array<CLSNotice>
  /**
   * 告警通知模板绑定的告警策略ID列表
   */
  PolicyIds?: Array<string>
}

/**
 * DescribeGrafanaWhiteList返回参数结构体
 */
export interface DescribeGrafanaWhiteListResponse {
  /**
   * 数组
   */
  WhiteList?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlertRules返回参数结构体
 */
export interface DescribeAlertRulesResponse {
  /**
   * 报警规则数量
   */
  TotalCount: number
  /**
   * 报警规则详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertRuleSet: Array<PrometheusRuleSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResumeGrafanaInstance请求参数结构体
 */
export interface ResumeGrafanaInstanceRequest {
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
}

/**
 * DescribeBasicAlarmList返回参数结构体
 */
export interface DescribeBasicAlarmListResponse {
  /**
   * 告警列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alarms?: Array<DescribeBasicAlarmListAlarms>
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Warning?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmReceivers请求参数结构体
 */
export interface ModifyAlarmReceiversRequest {
  /**
   * 需要修改接收人的策略组Id
   */
  GroupId: number
  /**
   * 必填。固定为“monitor”
   */
  Module: string
  /**
   * 新接收人信息, 没有填写则删除所有接收人
   */
  ReceiverInfos?: Array<ReceiverInfo>
}

/**
 * DescribeExporterIntegrations请求参数结构体
 */
export interface DescribeExporterIntegrationsRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * Kubernetes 集群类型，可不填。取值如下：
<li> 1= 容器集群(TKE) </li>
<li> 2=弹性集群(EKS) </li>
<li> 3= Prometheus管理的弹性集群(MEKS) </li>
   */
  KubeType?: number
  /**
   * 集群 ID，可不填
   */
  ClusterId?: string
  /**
   * 类型(不填返回全部集成。可通过 DescribePrometheusIntegrations 接口获取，取每一项中的 ExporterType 字段)
   */
  Kind?: string
  /**
   * 名字
   */
  Name?: string
}

/**
 * DescribeAlarmSmsQuota返回参数结构体
 */
export interface DescribeAlarmSmsQuotaResponse {
  /**
   * 配额总数
   */
  Total?: number
  /**
   * 总使用量
   */
  Used?: number
  /**
   * 短信配额信息列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  QuotaList?: Array<DescribeAlarmSmsQuotaQuota>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusInstanceDetail返回参数结构体
 */
export interface DescribePrometheusInstanceDetailResponse {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * VPC ID
   */
  VpcId?: string
  /**
   * 子网 ID
   */
  SubnetId?: string
  /**
   * 实例业务状态。取值范围：

1：正在创建
2：运行中
3：异常
4：重建中
5：销毁中
6：已停服
8：欠费停服中
9：欠费已停服
   */
  InstanceStatus?: number
  /**
   * 计费状态

1：正常
2：过期
3：销毁
4：分配中
5：分配失败
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeStatus?: number
  /**
   * 是否开启 Grafana
0：不开启
1：开启
   */
  EnableGrafana?: number
  /**
   * Grafana 面板 URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrafanaURL?: string
  /**
   * 实例计费模式。取值范围：

2：包年包月
3：按量
   */
  InstanceChargeType?: number
  /**
   * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecName?: string
  /**
   * 存储周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataRetentionTime?: number
  /**
   * 购买的实例过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 自动续费标记

0：不自动续费
1：开启自动续费
2：禁止自动续费
-1：无效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监控数据点
 */
export interface Point {
  /**
   * 该监控数据点生成的时间点
   */
  Timestamp: number
  /**
   * 监控数据点的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: number
}

/**
 * 修改告警策略组传入的事件告警条件
 */
export interface ModifyPolicyGroupEventCondition {
  /**
   * 事件id
   */
  EventId: number
  /**
   * 告警发送收敛类型。0连续告警，1指数告警
   */
  AlarmNotifyType: number
  /**
   * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
   */
  AlarmNotifyPeriod: number
  /**
   * 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改
   */
  RuleId?: number
}

/**
 * 指标，可用于设置告警、查询数据
 */
export interface Metric {
  /**
   * 告警策略类型
   */
  Namespace?: string
  /**
   * 指标名
   */
  MetricName?: string
  /**
   * 指标展示名
   */
  Description?: string
  /**
   * 最小值
   */
  Min?: number
  /**
   * 最大值
   */
  Max?: number
  /**
   * 维度列表
   */
  Dimensions?: Array<string>
  /**
   * 单位
   */
  Unit?: string
  /**
   * 指标配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricConfig?: MetricConfig
  /**
   * 是否为高级指标。1是 0否
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAdvanced?: number
  /**
   * 高级指标是否开通。1是 0否
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsOpen?: number
  /**
   * 集成中心产品ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: number
  /**
   * 匹配运算符
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operators?: Array<Operator>
  /**
   * 指标触发
注意：此字段可能返回 null，表示取不到有效值。
   */
  Periods?: Array<number | bigint>
  /**
   * 是否延迟指标
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsLatenessMetric?: number
}

/**
 * DescribePrometheusTargetsTMP返回参数结构体
 */
export interface DescribePrometheusTargetsTMPResponse {
  /**
   * 所有Job的targets信息
   */
  Jobs?: Array<PrometheusJobTargets>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusClusterAgents返回参数结构体
 */
export interface DescribePrometheusClusterAgentsResponse {
  /**
   * 被关联集群信息
   */
  Agents?: Array<PrometheusAgentOverview>
  /**
   * 被关联集群总量
   */
  Total?: number
  /**
   * 是否为首次绑定，如果是首次绑定则需要安装预聚合规则
   */
  IsFirstBind?: boolean
  /**
   * 实例组件是否需要更新镜像版本
   */
  ImageNeedUpdate?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePrometheusScrapeJob请求参数结构体
 */
export interface UpdatePrometheusScrapeJobRequest {
  /**
   * Prometheus 实例 ID(可通过 DescribePrometheusInstances 接口获取)
   */
  InstanceId: string
  /**
   * Agent ID(可通过DescribePrometheusAgents 接口获取)
   */
  AgentId: string
  /**
   * 抓取任务 ID(可通过 DescribePrometheusScrapeJobs 接口获取)
   */
  JobId: string
  /**
   * 抓取任务配置
   */
  Config: string
}

/**
 * 托管Prometheus agent信息
 */
export interface PrometheusAgentInfo {
  /**
   * 集群类型。可填入tke、eks、tkeedge、tdcc，分别代表标准集群、弹性集群、边缘集群、注册集群
   */
  ClusterType: string
  /**
   * 集成容器服务中关联的集群ID
   */
  ClusterId: string
  /**
   * 该参数未使用，不需要填写
   */
  Describe?: string
}

/**
 * Prometheus 服务发现信息
 */
export interface ServiceDiscoveryItem {
  /**
   * 服务发现名称
   */
  Name: string
  /**
   * 服务发现属于的 Namespace
   */
  Namespace: string
  /**
   * 服务发现类型: ServiceMonitor/PodMonitor
   */
  Kind: string
  /**
   * Namespace 选取方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  NamespaceSelector: string
  /**
   * Label 选取方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Selector: string
  /**
   * Endpoints 信息（PodMonitor 不含该参数）
   */
  Endpoints: string
  /**
   * 服务发现对应的配置信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Yaml: string
}

/**
 * CreatePrometheusClusterAgent返回参数结构体
 */
export interface CreatePrometheusClusterAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Prometheus自定义告警通知时间段
 */
export interface PrometheusAlertAllowTimeRange {
  /**
   * 从0点开始的秒数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Start?: string
  /**
   * 从0点开始的秒数
注意：此字段可能返回 null，表示取不到有效值。
   */
  End?: string
}

/**
 * CreateGrafanaIntegration返回参数结构体
 */
export interface CreateGrafanaIntegrationResponse {
  /**
   * 集成 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  IntegrationId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindPrometheusManagedGrafana请求参数结构体
 */
export interface BindPrometheusManagedGrafanaRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * Grafana 可视化服务实例 ID
   */
  GrafanaId: string
}

/**
 * UpdatePrometheusAlertGroupState请求参数结构体
 */
export interface UpdatePrometheusAlertGroupStateRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId?: string
  /**
   * 告警分组ID列表，形如alert-xxxx
   */
  GroupIds?: Array<string>
  /**
   * 告警分组状态
2 -- 启用
3 -- 禁用
   */
  GroupState?: number
}

/**
 * 告警渠道使用自建alertmanager的配置
 */
export interface PrometheusAlertManagerConfig {
  /**
   * alertmanager url
   */
  Url: string
  /**
   * alertmanager部署所在集群类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: string
  /**
   * alertmanager部署所在集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
}

/**
 * CreateGrafanaInstance请求参数结构体
 */
export interface CreateGrafanaInstanceRequest {
  /**
   * 实例名
   */
  InstanceName: string
  /**
   * VPC ID (私有网络 ID)
   */
  VpcId: string
  /**
   * 子网 ID 数组(VPC ID下的子网 ID，只取第一个)
   */
  SubnetIds: Array<string>
  /**
   * 是否启用外网
   */
  EnableInternet: boolean
  /**
   * Grafana 初始密码(国际站用户必填，国内站用户可不填，不填时会生成随机密码并给主账号发送通知)
   */
  GrafanaInitPassword?: string
  /**
   * 标签
   */
  TagSpecification?: Array<PrometheusTag>
  /**
   * 是否自动选择代金券，默认为 false
   */
  AutoVoucher?: boolean
}

/**
 * DescribePrometheusInstanceUsage返回参数结构体
 */
export interface DescribePrometheusInstanceUsageResponse {
  /**
   * 用量列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsageSet?: Array<PrometheusInstanceTenantUsage>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusGlobalNotification请求参数结构体
 */
export interface DescribePrometheusGlobalNotificationRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * DeleteExporterIntegration返回参数结构体
 */
export interface DeleteExporterIntegrationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateRecordingRule返回参数结构体
 */
export interface UpdateRecordingRuleResponse {
  /**
   * 规则 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusAgent返回参数结构体
 */
export interface CreatePrometheusAgentResponse {
  /**
   * 创建成功的 Agent Id
   */
  AgentId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusAlertPolicy请求参数结构体
 */
export interface DescribePrometheusAlertPolicyRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 分页偏移量，默认为0。 示例值：1
   */
  Offset?: number
  /**
   * 分页返回数量，默认为20，最大值为100
   */
  Limit?: number
  /**
   * 仅支持按Name, Values字段过滤:
- Name = Name 
  按照给定的告警规则名称列表匹配
- Name = ID
  按照给定的告警规则ID列表匹配
   */
  Filters?: Array<Filter>
}

/**
 * DescribeAlarmMetrics返回参数结构体
 */
export interface DescribeAlarmMetricsResponse {
  /**
   * 告警指标列表
   */
  Metrics?: Array<Metric>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGrafanaWhiteList请求参数结构体
 */
export interface DescribeGrafanaWhiteListRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
}

/**
 * DescribePrometheusConfig请求参数结构体
 */
export interface DescribePrometheusConfigRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 集群类型
   */
  ClusterType: string
}

/**
 * CreateGrafanaInstance返回参数结构体
 */
export interface CreateGrafanaInstanceResponse {
  /**
   * 实例名
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAlertRule请求参数结构体
 */
export interface UpdateAlertRuleRequest {
  /**
   * Prometheus 高警规则 ID
   */
  RuleId: string
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * 规则状态码，取值如下：
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
默认状态码为 2 启用。
   */
  RuleState: number
  /**
   * 告警规则名称
   */
  RuleName: string
  /**
   * 告警规则表达式
   */
  Expr: string
  /**
   * 告警规则持续时间
   */
  Duration: string
  /**
   * 告警规则接收组列表(当前规则绑定的接收组列表可通过 DescribeAlertRules 接口获取；用户已有的接收组列表可通过 DescribeAlarmNotices 接口获取)
   */
  Receivers: Array<string>
  /**
   * 报警规则标签列表
   */
  Labels?: Array<PrometheusRuleKV>
  /**
   * 报警规则注释列表。

告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。
   */
  Annotations?: Array<PrometheusRuleKV>
  /**
   * 报警策略模板分类(自定义，可不填)
   */
  Type?: string
}

/**
 * 告警策略事件触发条件
 */
export interface AlarmPolicyEventCondition {
  /**
   * 告警触发条件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rules: Array<AlarmPolicyRule>
}

/**
 * DeleteAlarmNotices请求参数结构体
 */
export interface DeleteAlarmNoticesRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string
  /**
   * 告警通知模板id列表
   */
  NoticeIds: Array<string>
  /**
   * 通知模板与策略绑定关系
   */
  NoticeBindPolicys?: Array<NoticeBindPolicys>
}

/**
 * DescribeGrafanaNotificationChannels返回参数结构体
 */
export interface DescribeGrafanaNotificationChannelsResponse {
  /**
   * 告警通道数组
   */
  NotificationChannelSet?: Array<GrafanaNotificationChannel>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyConditionList.ConfigManual.CalcType
 */
export interface DescribePolicyConditionListConfigManualCalcType {
  /**
   * CalcType 取值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys: Array<number | bigint>
  /**
   * 是否必须
   */
  Need: boolean
}

/**
 * ResumeGrafanaInstance返回参数结构体
 */
export interface ResumeGrafanaInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccidentEventList返回参数结构体
 */
export interface DescribeAccidentEventListResponse {
  /**
   * 平台事件列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Alarms?: Array<DescribeAccidentEventListAlarms>
  /**
   * 平台事件的总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusTempSync返回参数结构体
 */
export interface DescribePrometheusTempSyncResponse {
  /**
   * 同步目标详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Targets?: Array<PrometheusTemplateSyncTarget>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusConfig返回参数结构体
 */
export interface CreatePrometheusConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateDNSConfig请求参数结构体
 */
export interface UpdateDNSConfigRequest {
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
  /**
   * DNS 数组
   */
  NameServers: Array<string>
}

/**
 * DeletePrometheusClusterAgent返回参数结构体
 */
export interface DeletePrometheusClusterAgentResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDNSConfig返回参数结构体
 */
export interface DescribeDNSConfigResponse {
  /**
   * DNS 服务器数组
   */
  NameServers?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DestroyPrometheusInstance请求参数结构体
 */
export interface DestroyPrometheusInstanceRequest {
  /**
   * 实例 ID，该实例必须先被 terminate
   */
  InstanceId: string
}

/**
 * DeleteRecordingRules请求参数结构体
 */
export interface DeleteRecordingRulesRequest {
  /**
   * 规则 ID 列表(规则 ID 可通过 DescribeRecordingRules 接口获取)
   */
  RuleIds: Array<string>
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
}

/**
 * 策略类型
 */
export interface MonitorTypeNamespace {
  /**
   * 监控类型
   */
  MonitorType: string
  /**
   * 策略类型值
   */
  Namespace: string
}

/**
 * DeleteAlarmPolicy返回参数结构体
 */
export interface DeleteAlarmPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Remote Write 协议额外添加的 HTTP 头
 */
export interface RemoteWriteHeader {
  /**
   * HTTP 头的键
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * HTTP 头的值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value?: string
}

/**
 * UninstallGrafanaPlugins请求参数结构体
 */
export interface UninstallGrafanaPluginsRequest {
  /**
   * 插件 ID 数组，例如"PluginIds": [ "grafana-clock-panel" ]，可通过 DescribePluginOverviews 获取 PluginId
   */
  PluginIds: Array<string>
  /**
   * Grafana 实例 ID，例如：grafana-abcdefg
   */
  InstanceId: string
}

/**
 * DeleteSSOAccount返回参数结构体
 */
export interface DeleteSSOAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyGroupList.Group
 */
export interface DescribePolicyGroupListGroup {
  /**
   * 策略组id
   */
  GroupId: number
  /**
   * 策略组名称
   */
  GroupName: string
  /**
   * 是否开启
   */
  IsOpen: boolean
  /**
   * 策略视图名称
   */
  ViewName: string
  /**
   * 最近编辑的用户uin
   */
  LastEditUin: string
  /**
   * 最后修改时间
   */
  UpdateTime: number
  /**
   * 创建时间
   */
  InsertTime: number
  /**
   * 策略组绑定的实例数
   */
  UseSum: number
  /**
   * 策略组绑定的未屏蔽实例数
   */
  NoShieldedSum: number
  /**
   * 是否为默认策略，0表示非默认策略，1表示默认策略
   */
  IsDefault: number
  /**
   * 是否可以设置成默认策略
   */
  CanSetDefault: boolean
  /**
   * 父策略组id
   */
  ParentGroupId: number
  /**
   * 策略组备注
   */
  Remark: string
  /**
   * 策略组所属项目id
   */
  ProjectId: number
  /**
   * 阈值规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Conditions: Array<DescribePolicyGroupInfoCondition>
  /**
   * 产品事件规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventConditions: Array<DescribePolicyGroupInfoEventCondition>
  /**
   * 用户接收人列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverInfos: Array<DescribePolicyGroupInfoReceiverInfo>
  /**
   * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConditionsTemp: DescribePolicyGroupInfoConditionTpl
  /**
   * 策略组绑定的实例组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroup: DescribePolicyGroupListGroupInstanceGroup
  /**
   * 且或规则标识, 0表示或规则(任意一条规则满足阈值条件就告警), 1表示且规则(所有规则都满足阈值条件才告警)
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsUnionRule: number
}

/**
 * Grafana可视化服务 授权账户信息
 */
export interface GrafanaAccountInfo {
  /**
   * 用户账号ID
   */
  UserId?: string
  /**
   * 用户权限
   */
  Role?: Array<GrafanaAccountRole>
  /**
   * 备注
   */
  Notes?: string
  /**
   * 创建时间
   */
  CreateAt?: string
  /**
   * 实例 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 用户主账号 UIN
   */
  Uin?: string
}

/**
 * DescribePrometheusTargetsTMP请求参数结构体
 */
export interface DescribePrometheusTargetsTMPRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集成容器服务填绑定的集群id；
集成中心填 non-cluster
   */
  ClusterId: string
  /**
   * 集群类型(可不填)
   */
  ClusterType?: string
  /**
   * 过滤条件，支持Name=ServiceMonitor/PodMonitor/Probe/RawJob/Job, Value为采集配置名称；Name=Health, Value=up, down, unknown；Name=EndPoint, Value为EndPoint地址
   */
  Filters?: Array<Filter>
  /**
   * targets分页偏移量，默认为0
   */
  Offset?: number
  /**
   * targets返回数量，默认为20，最大值200
   */
  Limit?: number
}

/**
 * DescribeBindingPolicyObjectList返回的是实例分组信息
 */
export interface DescribeBindingPolicyObjectListInstanceGroup {
  /**
   * 实例分组id
   */
  InstanceGroupId: number
  /**
   * 告警策略类型名称
   */
  ViewName: string
  /**
   * 最后编辑uin
   */
  LastEditUin: string
  /**
   * 实例分组名称
   */
  GroupName: string
  /**
   * 实例数量
   */
  InstanceSum: number
  /**
   * 更新时间
   */
  UpdateTime: number
  /**
   * 创建时间
   */
  InsertTime: number
  /**
   * 实例所在的地域集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regions: Array<string>
}

/**
 * ModifyAlarmPolicyTasks请求参数结构体
 */
export interface ModifyAlarmPolicyTasksRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string
  /**
   * 告警策略 ID
   */
  PolicyId: string
  /**
   * 告警策略触发任务列表，空数据代表解绑
   */
  TriggerTasks?: Array<AlarmPolicyTriggerTask>
}

/**
 * GetPrometheusAgentManagementCommand请求参数结构体
 */
export interface GetPrometheusAgentManagementCommandRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * Prometheus Agent ID
   */
  AgentId: string
}

/**
 * DescribeBindingPolicyObjectList接口的Dimension
 */
export interface DescribeBindingPolicyObjectListDimension {
  /**
   * 地域id
   */
  RegionId: number
  /**
   * 地域简称
   */
  Region: string
  /**
   * 维度组合json字符串
   */
  Dimensions: string
  /**
   * 事件维度组合json字符串
   */
  EventDimensions: string
}

/**
 * 查询策略输出的事件告警条件
 */
export interface DescribePolicyGroupInfoEventCondition {
  /**
   * 事件id
   */
  EventId: number
  /**
   * 事件告警规则id
   */
  RuleId: number
  /**
   * 事件名称
   */
  EventShowName: string
  /**
   * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
   */
  AlarmNotifyPeriod: number
  /**
   * 告警发送收敛类型。0连续告警，1指数告警
   */
  AlarmNotifyType: number
}

/**
 * GetPrometheusAgentManagementCommand返回参数结构体
 */
export interface GetPrometheusAgentManagementCommandResponse {
  /**
   * Agent 管理命令
   */
  Command?: ManagementCommand
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMetricData接口出参
 */
export interface MetricData {
  /**
   * 指标名
   */
  MetricName: string
  /**
   * 监控数据点
   */
  Points: Array<MetricDataPoint>
}

/**
 * DescribeStatisticData返回参数结构体
 */
export interface DescribeStatisticDataResponse {
  /**
   * 统计周期
   */
  Period?: number
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 监控数据
   */
  Data?: Array<MetricData>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductEventList返回的OverView对象
 */
export interface DescribeProductEventListOverView {
  /**
   * 状态变更的事件数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusChangeAmount: number
  /**
   * 告警状态未配置的事件数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnConfigAlarmAmount: number
  /**
   * 异常事件数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnNormalEventAmount: number
  /**
   * 未恢复的事件数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnRecoverAmount: number
}

/**
 * UpdateDNSConfig返回参数结构体
 */
export interface UpdateDNSConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UninstallGrafanaDashboard返回参数结构体
 */
export interface UninstallGrafanaDashboardResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警分级阈值配置
 */
export interface AlarmHierarchicalValue {
  /**
   * 提醒等级阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Remind?: string
  /**
   * 警告等级阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Warn?: string
  /**
   * 严重等级阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Serious?: string
}

/**
 * UpdateGrafanaNotificationChannel请求参数结构体
 */
export interface UpdateGrafanaNotificationChannelRequest {
  /**
   * 通道 ID，例如：nchannel-abcd1234
   */
  ChannelId: string
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
  /**
   * 接受告警通道 ID 数组
   */
  Receivers: Array<string>
  /**
   * 告警通道名称，已废弃，名称不可修改。
   */
  ChannelName?: string
  /**
   * 已废弃，请使用 OrganizationIds
   */
  ExtraOrgIds?: Array<string>
  /**
   * 生效的组织 ID 数组
   */
  OrganizationIds?: Array<string>
}

/**
 * 创建策略传入的事件告警条件
 */
export interface CreatePolicyGroupEventCondition {
  /**
   * 告警事件的Id
   */
  EventId: number
  /**
   * 告警发送收敛类型。0连续告警，1指数告警
   */
  AlarmNotifyType: number
  /**
   * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
   */
  AlarmNotifyPeriod: number
  /**
   * 如果通过模板创建，需要传入模板中该指标的对应RuleId
   */
  RuleId?: number
}

/**
 * Grafana 插件
 */
export interface GrafanaPlugin {
  /**
   * Grafana 插件 ID
   */
  PluginId: string
  /**
   * Grafana 插件版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version: string
}

/**
 * DestroyPrometheusInstance返回参数结构体
 */
export interface DestroyPrometheusInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlertRules请求参数结构体
 */
export interface DescribeAlertRulesRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number
  /**
   * 偏移量，默认为 0
   */
  Offset?: number
  /**
   * 规则 ID
   */
  RuleId?: string
  /**
   * 规则状态码，取值如下：
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
   */
  RuleState?: number
  /**
   * 规则名称
   */
  RuleName?: string
  /**
   * 报警策略模板分类
   */
  Type?: string
}

/**
 * DescribePrometheusInstances返回参数结构体
 */
export interface DescribePrometheusInstancesResponse {
  /**
   * 实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceSet?: Array<PrometheusInstancesItem>
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志告警检索条件结构体
 */
export interface LogFilterInfo {
  /**
   * 字段名
   */
  Key: string
  /**
   * 比较符号
   */
  Operator: string
  /**
   * 字段值
   */
  Value: string
}

/**
 * DescribeGrafanaChannels请求参数结构体
 */
export interface DescribeGrafanaChannelsRequest {
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
  /**
   * 偏移量
   */
  Offset: number
  /**
   * 查询数量
   */
  Limit: number
  /**
   * 告警通道名称，例如：test
   */
  ChannelName?: string
  /**
   * 告警通道 ID，例如：nchannel-abcd1234
   */
  ChannelIds?: Array<string>
  /**
   * 告警通道状态(不用填写，目前只有可用和删除状态，默认只能查询可用的告警通道)
   */
  ChannelState?: number
}

/**
 * BindingPolicyTag返回参数结构体
 */
export interface BindingPolicyTagResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteServiceDiscovery返回参数结构体
 */
export interface DeleteServiceDiscoveryResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateExporterIntegration请求参数结构体
 */
export interface CreateExporterIntegrationRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * 类型(可通过 DescribePrometheusIntegrations 接口获取，取每一项中的 ExporterType 字段)
   */
  Kind: string
  /**
   * 集成配置
   */
  Content: string
  /**
   * Kubernetes 集群类型，可不填，取值如下：
<li> 1= 容器集群(TKE) </li>
<li> 2=弹性集群(EKS) </li>
<li> 3= Prometheus管理的弹性集群(MEKS) </li>
   */
  KubeType?: number
  /**
   * 集群 ID，可不填
   */
  ClusterId?: string
}

/**
 * ModifyPrometheusConfig返回参数结构体
 */
export interface ModifyPrometheusConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * prometheus agent
 */
export interface PrometheusAgent {
  /**
   * Agent 名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * Agent ID
   */
  AgentId: string
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * Agent IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ipv4: string
  /**
   * 心跳时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  HeartbeatTime: string
  /**
   * 最近一次错误
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastError: string
  /**
   * Agent 版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentVersion: string
  /**
   * Agent 状态
   */
  Status: number
}

/**
 * CreatePrometheusAlertPolicy返回参数结构体
 */
export interface CreatePrometheusAlertPolicyResponse {
  /**
   * 告警id
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusInstanceDetail请求参数结构体
 */
export interface DescribePrometheusInstanceDetailRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 告警通知模板 - 用户通知详情
 */
export interface UserNotice {
  /**
   * 接收者类型 USER=用户 GROUP=用户组
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverType: string
  /**
   * 通知开始时间 00:00:00 开始的秒数（取值范围0-86399）
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime: number
  /**
   * 通知结束时间 00:00:00 开始的秒数（取值范围0-86399）
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime: number
  /**
   * 通知渠道列表 EMAIL=邮件 SMS=短信 CALL=电话 WECHAT=微信 RTX=企业微信
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeWay: Array<string>
  /**
   * 用户 uid 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserIds?: Array<number | bigint>
  /**
   * 用户组 group id 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupIds?: Array<number | bigint>
  /**
   * 电话轮询列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneOrder?: Array<number | bigint>
  /**
   * 电话轮询次数 （取值范围1-5）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneCircleTimes?: number
  /**
   * 单次轮询内拨打间隔 秒数 （取值范围60-900）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneInnerInterval?: number
  /**
   * 两次轮询间隔 秒数（取值范围60-900）
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneCircleInterval?: number
  /**
   * 是否需要触达通知 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
   */
  NeedPhoneArriveNotice?: number
  /**
   * 电话拨打类型 SYNC=同时拨打 CIRCLE=轮询拨打 不指定时默认是轮询
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneCallType?: string
  /**
   * 通知周期 1-7表示周一到周日
注意：此字段可能返回 null，表示取不到有效值。
   */
  Weekday?: Array<number | bigint>
  /**
   * 值班表id列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  OnCallFormIDs?: Array<string>
  /**
   * 电话按键确认
注意：此字段可能返回 null，表示取不到有效值。
   */
  VoiceConfirmKey?: string
}

/**
 * Prometheus 服务响应体
 */
export interface PrometheusInstancesItem {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 实例计费模式。取值范围：
<ul>
<li>2：包年包月</li>
<li>3：按量</li>
</ul>
   */
  InstanceChargeType?: number
  /**
   * 地域 ID
   */
  RegionId?: number
  /**
   * 可用区
   */
  Zone?: string
  /**
   * VPC ID
   */
  VpcId?: string
  /**
   * 子网 ID
   */
  SubnetId?: string
  /**
   * 存储周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataRetentionTime?: number
  /**
   * 实例业务状态。取值范围：
<ul>
<li>1：正在创建</li>
<li>2：运行中</li>
<li>3：异常</li>
<li>4：重建中</li>
<li>5：销毁中</li>
<li>6：已停服</li>
<li>8：欠费停服中</li>
<li>9：欠费已停服</li>
</ul>
   */
  InstanceStatus?: number
  /**
   * Grafana 面板 URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrafanaURL?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 是否开启 Grafana
<li>0：不开启</li>
<li>1：开启</li>
   */
  EnableGrafana?: number
  /**
   * 实例IPV4地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  IPv4Address?: string
  /**
   * 实例关联的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagSpecification?: Array<PrometheusTag>
  /**
   * 购买的实例过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime?: string
  /**
   * 计费状态
<ul>
<li>1：正常</li>
<li>2：过期</li>
<li>3：销毁</li>
<li>4：分配中</li>
<li>5：分配失败</li>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeStatus?: number
  /**
   * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecName?: string
  /**
   * 自动续费标记
<ul>
<li>0：不自动续费</li>
<li>1：开启自动续费</li>
<li>2：禁止自动续费</li>
<li>-1：无效</li>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag?: number
  /**
   * 是否快过期
<ul>
<li>0：否</li>
<li>1：快过期</li>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsNearExpire?: number
  /**
   * 数据写入需要的 Token
注意：此字段可能返回 null，表示取不到有效值。
   */
  AuthToken?: string
  /**
   * Prometheus Remote Write 的地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  RemoteWrite?: string
  /**
   * Prometheus HTTP Api 根地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  ApiRootPath?: string
  /**
   * Proxy 的地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProxyAddress?: string
  /**
   * Grafana 运行状态
<ul>
<li>1：正在创建</li>
<li>2：运行中</li>
<li>3：异常</li>
<li>4：重启中</li>
<li>5：销毁中</li>
<li>6：已停机</li>
<li>7：已删除</li>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrafanaStatus?: number
  /**
   * Grafana IP 白名单列表，使用英文分号分隔
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrafanaIpWhiteList?: string
  /**
   * 实例的授权信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Grant?: PrometheusInstanceGrantInfo
  /**
   * 绑定的 Grafana 实例 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrafanaInstanceId?: string
  /**
   * 告警规则限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertRuleLimit?: number
  /**
   * 预聚合规则限制
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordingRuleLimit?: number
  /**
   * 迁移状态，0-不在迁移中，1-迁移中、原实例，2-迁移中、目标实例
注意：此字段可能返回 null，表示取不到有效值。
   */
  MigrationType?: number
}

/**
 * DescribeConditionsTemplateList请求参数结构体
 */
export interface DescribeConditionsTemplateListRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 视图名，由 [DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 获得。对于云产品监控，取接口出参的 QceNamespacesNew.N.Id，例如 cvm_device
   */
  ViewName?: string
  /**
   * 根据触发条件模板名称过滤查询
   */
  GroupName?: string
  /**
   * 根据触发条件模板ID过滤查询
   */
  GroupID?: string
  /**
   * 分页参数，每页返回的数量，取值1~100，默认20
   */
  Limit?: number
  /**
   * 分页参数，页偏移量，从0开始计数，默认0
   */
  Offset?: number
  /**
   * 指定按更新时间的排序方式，asc=升序, desc=降序
   */
  UpdateTimeOrder?: string
  /**
   * 指定按绑定策略数目的排序方式，asc=升序, desc=降序
   */
  PolicyCountOrder?: string
}

/**
 * DeletePrometheusRecordRuleYaml返回参数结构体
 */
export interface DeletePrometheusRecordRuleYamlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMetricData出参
 */
export interface MetricDataPoint {
  /**
   * 实例对象维度组合
   */
  Dimensions: Array<Dimension>
  /**
   * 数据点列表
   */
  Values: Array<Point>
}

/**
 * GetMonitorData请求参数结构体
 */
export interface GetMonitorDataRequest {
  /**
   * 命名空间，如QCE/CVM。各个云产品的详细命名空间说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档
   */
  Namespace: string
  /**
   * 指标名称，如CPUUsage，仅支持单指标拉取。各个云产品的详细指标说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的指标英文名即为MetricName
   */
  MetricName: string
  /**
   * 实例对象的维度组合，格式为key-value键值对形式的集合。不同类型的实例字段完全不同，如CVM为[{"Name":"InstanceId","Value":"ins-j0hk02zo"}]，Ckafka为[{"Name":"instanceId","Value":"ckafka-l49k54dd"}]，COS为[{"Name":"appid","Value":"1258344699"},{"Name":"bucket","Value":"rig-1258344699"}]。各个云产品的维度请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的维度列即为维度组合的key，value为key对应的值。单请求最多支持批量拉取10个实例的监控数据。
   */
  Instances: Array<Instance>
  /**
   * 监控统计周期，如60。默认为取值为300，单位为s。每个指标支持的统计周期不一定相同，各个云产品支持的统计周期请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的统计周期列即为支持的统计周期。单请求的数据点数限制为1440个。
   */
  Period?: number
  /**
   * 起始时间，如2018-09-22T19:51:23+08:00
   */
  StartTime?: string
  /**
   * 结束时间，如2018-09-22T20:51:23+08:00，默认为当前时间。 EndTime不能小于StartTime
   */
  EndTime?: string
  /**
   * 返回多种统计方式数据。avg, max, min (1,2,4)可以自由组合
   */
  SpecifyStatistics?: number
}

/**
 * CreateRecordingRule请求参数结构体
 */
export interface CreateRecordingRuleRequest {
  /**
   * 聚合规则名称
   */
  Name: string
  /**
   * 聚合规则组内容，格式为 yaml，通过 base64 进行编码。
   */
  Group: string
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * 规则状态码，取值如下：
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
默认状态码为 2 启用。
   */
  RuleState?: number
}

/**
 * ModifyPrometheusConfig请求参数结构体
 */
export interface ModifyPrometheusConfigRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群类型
   */
  ClusterType: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * ServiceMonitors配置
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * PodMonitors配置
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * prometheus原生Job配置
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * 0: 更新实例组件镜像版本；
1: 不更新实例组件镜像版本
   */
  UpdateImage?: number
}

/**
 * DescribeMonitorResourceInfo请求参数结构体
 */
export type DescribeMonitorResourceInfoRequest = null

/**
 * DescribeGrafanaEnvironments返回参数结构体
 */
export interface DescribeGrafanaEnvironmentsResponse {
  /**
   * 环境变量字符串
   */
  Envs?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlarmShield返回参数结构体
 */
export interface CreateAlarmShieldResponse {
  /**
   * 屏蔽规则的Id
   */
  ShieldId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyConditionList请求参数结构体
 */
export interface DescribePolicyConditionListRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
}

/**
 * DeletePolicyGroup返回参数结构体
 */
export interface DeletePolicyGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteGrafanaInstance请求参数结构体
 */
export interface DeleteGrafanaInstanceRequest {
  /**
   * 实例ID数组
   */
  InstanceIDs: Array<string>
}

/**
 * Grafana 集成实例配置
 */
export interface GrafanaIntegrationConfig {
  /**
   * 集成 ID
   */
  IntegrationId?: string
  /**
   * 集成类型
   */
  Kind?: string
  /**
   * 集成内容
   */
  Content?: string
  /**
   * 集成描述
   */
  Description?: string
  /**
   * Grafana 跳转地址(目前未使用，默认为空)
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrafanaURL?: string
}

/**
 * DeleteGrafanaIntegration请求参数结构体
 */
export interface DeleteGrafanaIntegrationRequest {
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
  /**
   * 集成 ID，可在实例详情-云产品集成-集成列表查看。例如：integration-abcd1234
   */
  IntegrationId: string
}

/**
 * ModifyPrometheusAlertPolicy返回参数结构体
 */
export interface ModifyPrometheusAlertPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePhoneAlarmFlowTotalCount返回参数结构体
 */
export interface DescribePhoneAlarmFlowTotalCountResponse {
  /**
   * 电话流水总数
   */
  Count: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateServiceDiscovery请求参数结构体
 */
export interface CreateServiceDiscoveryRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * <li>类型为TKE：对应集成的腾讯云容器服务集群 ID</li>
   */
  KubeClusterId: string
  /**
   * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
   */
  KubeType: number
  /**
   * 服务发现类型，取值如下：
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = JobMonitor</li>
   */
  Type: number
  /**
   * 服务发现配置信息，YAML 格式，[具体YAML参数内容请参考](https://cloud.tencent.com/document/product/1416/55995#service-monitor)
   */
  Yaml: string
}

/**
 * 周期内的统计方式
 */
export interface PeriodsSt {
  /**
   * 周期
   */
  Period: string
  /**
   * 统计方式
   */
  StatType: Array<string>
}

/**
 * ModifyAlarmReceivers返回参数结构体
 */
export interface ModifyAlarmReceiversResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Grafana 告警渠道
 */
export interface GrafanaChannel {
  /**
   * 渠道 ID
   */
  ChannelId: string
  /**
   * 渠道名
   */
  ChannelName: string
  /**
   * 告警通道模板 ID 数组
   */
  Receivers: Array<string>
  /**
   * 创建时间
   */
  CreatedAt: string
  /**
   * 更新时间
   */
  UpdatedAt: string
  /**
   * 告警渠道的所有生效组织
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationIds: Array<string>
}

/**
 * CreatePrometheusConfig请求参数结构体
 */
export interface CreatePrometheusConfigRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群类型
   */
  ClusterType: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * ServiceMonitors配置
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * PodMonitors配置
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * prometheus原生Job配置
   */
  RawJobs?: Array<PrometheusConfigItem>
}

/**
 * DescribeSSOAccount返回参数结构体
 */
export interface DescribeSSOAccountResponse {
  /**
   * 授权账号列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccountSet: Array<GrafanaAccountInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlarmPolicy返回参数结构体
 */
export interface CreateAlarmPolicyResponse {
  /**
   * 告警策略 ID
   */
  PolicyId?: string
  /**
   * 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID
   */
  OriginId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteGrafanaNotificationChannel请求参数结构体
 */
export interface DeleteGrafanaNotificationChannelRequest {
  /**
   * 通道 ID 数组。例如：nchannel-abcd1234，通过 DescribeGrafanaChannels 获取
   */
  ChannelIDs: Array<string>
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
}

/**
 * CreatePrometheusAlertGroup请求参数结构体
 */
export interface CreatePrometheusAlertGroupRequest {
  /**
   * prometheus实例ID
   */
  InstanceId?: string
  /**
   * 告警分组名称，不能与其他告警分组重名
   */
  GroupName?: string
  /**
   * 告警分组状态：
2 -- 启用
3 -- 禁用
不为空时会覆盖 `Rules`字段下所有告警规则状态

   */
  GroupState?: number
  /**
   * 云监控告警通知模板ID列表，形如Consumer-xxxx或notice-xxxx
   */
  AMPReceivers?: Array<string>
  /**
   * 自定义告警通知模板
   */
  CustomReceiver?: PrometheusAlertCustomReceiver
  /**
   * 告警通知周期（收敛时间），为空默认1h
   */
  RepeatInterval?: string
  /**
   * 要创建的告警规则列表
   */
  Rules?: Array<PrometheusAlertGroupRuleSet>
}

/**
 * 告警通知模板详情
 */
export interface AlarmNotice {
  /**
   * 告警通知模板 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 告警通知模板名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 上次修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * 上次修改人
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedBy?: string
  /**
   * 告警通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=全部通知
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeType?: string
  /**
   * 用户通知列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserNotices?: Array<UserNotice>
  /**
   * 回调通知列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  URLNotices?: Array<URLNotice>
  /**
   * 是否是系统预设通知模板 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsPreset?: number
  /**
   * 通知语言 zh-CN=中文 en-US=英文
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeLanguage?: string
  /**
   * 告警通知模板绑定的告警策略ID列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyIds?: Array<string>
  /**
   * 后台 amp consumer id
注意：此字段可能返回 null，表示取不到有效值。
   */
  AMPConsumerId?: string
  /**
   * 推送cls渠道
注意：此字段可能返回 null，表示取不到有效值。
   */
  CLSNotices?: Array<CLSNotice>
  /**
   * 通知模板绑定的标签
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags?: Array<Tag>
}

/**
 * DescribeProductEventList返回的Events的Dimensions
 */
export interface DescribeProductEventListEventsDimensions {
  /**
   * 维度名（英文）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Key: string
  /**
   * 维度名（中文）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 维度值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Value: string
}

/**
 * CreatePrometheusClusterAgent请求参数结构体
 */
export interface CreatePrometheusClusterAgentRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * agent列表
   */
  Agents: Array<PrometheusClusterAgentBasic>
}

/**
 * ModifyAlarmPolicyCondition返回参数结构体
 */
export interface ModifyAlarmPolicyConditionResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusInstancesOverview返回参数结构体
 */
export interface DescribePrometheusInstancesOverviewResponse {
  /**
   * 实例列表
   */
  Instances?: Array<PrometheusInstancesOverview>
  /**
   * 实例总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 对业务指标的单位及支持统计周期的描述
 */
export interface MetricSet {
  /**
   * 命名空间，每个云产品会有一个命名空间
   */
  Namespace: string
  /**
   * 指标名称
   */
  MetricName: string
  /**
   * 指标使用的单位
   */
  Unit: string
  /**
   * 指标使用的单位
   */
  UnitCname: string
  /**
   * 指标支持的统计周期，单位是秒，如60、300
   */
  Period: Array<number | bigint>
  /**
   * 统计周期内指标方式
   */
  Periods: Array<PeriodsSt>
  /**
   * 统计指标含义解释
   */
  Meaning: MetricObjectMeaning
  /**
   * 维度描述信息
   */
  Dimensions: Array<DimensionsDesc>
  /**
   * 指标中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricCName: string
  /**
   * 指标英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricEName: string
}

/**
 * 实例的授权信息
 */
export interface PrometheusInstanceGrantInfo {
  /**
   * 是否有计费操作权限(1=有，2=无)
   */
  HasChargeOperation: number
  /**
   * 是否显示VPC信息的权限(1=有，2=无)
   */
  HasVpcDisplay: number
  /**
   * 是否可修改Grafana的状态(1=有，2=无)
   */
  HasGrafanaStatusChange: number
  /**
   * 是否有管理agent的权限(1=有，2=无)
   */
  HasAgentManage: number
  /**
   * 是否有管理TKE集成的权限(1=有，2=无)
   */
  HasTkeManage: number
  /**
   * 是否显示API等信息(1=有, 2=无)
   */
  HasApiOperation: number
}

/**
 * 模板列表
 */
export interface TemplateGroup {
  /**
   * 指标告警规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  Conditions: Array<Condition>
  /**
   * 事件告警规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventConditions: Array<EventCondition>
  /**
   * 关联告警策略组
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyGroups: Array<PolicyGroup>
  /**
   * 模板策略组ID
   */
  GroupID: number
  /**
   * 模板策略组名称
   */
  GroupName: string
  /**
   * 创建时间
   */
  InsertTime: number
  /**
   * 最后修改人UIN
   */
  LastEditUin: number
  /**
   * 备注
   */
  Remark: string
  /**
   * 更新时间
   */
  UpdateTime: number
  /**
   * 视图
   */
  ViewName: string
  /**
   * 是否为与关系
   */
  IsUnionRule: number
}

/**
 * 查询策略绑定对象列表接口返回的对象实例信息
 */
export interface DescribeBindingPolicyObjectListInstance {
  /**
   * 对象唯一id
   */
  UniqueId: string
  /**
   * 表示对象实例的维度集合，jsonObj字符串
   */
  Dimensions: string
  /**
   * 对象是否被屏蔽，0表示未屏蔽，1表示被屏蔽
   */
  IsShielded: number
  /**
   * 对象所在的地域
   */
  Region: string
}

/**
 * UpdateGrafanaIntegration返回参数结构体
 */
export interface UpdateGrafanaIntegrationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmHistories返回参数结构体
 */
export interface DescribeAlarmHistoriesResponse {
  /**
   * 总数
   */
  TotalCount?: number
  /**
   * 告警历史列表
   */
  Histories?: Array<AlarmHistory>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmMetrics请求参数结构体
 */
export interface DescribeAlarmMetricsRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 监控类型过滤 "MT_QCE"=云产品监控
   */
  MonitorType: string
  /**
   * 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device
   */
  Namespace: string
}

/**
 * CreateSSOAccount请求参数结构体
 */
export interface CreateSSOAccountRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
  /**
   * 用户账号 ID ，例如：10000000
   */
  UserId: string
  /**
   * 权限(只取数组中的第一个，其中 Organization 暂未使用，可不填)
   */
  Role: Array<GrafanaAccountRole>
  /**
   * 备注
   */
  Notes?: string
}

/**
 * 告警策略过滤条件
 */
export interface AlarmPolicyFilter {
  /**
   * 过滤条件类型 DIMENSION=使用 Dimensions 做过滤
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * AlarmPolicyDimension 二维数组序列化后的json字符串，一维数组之间互为或关系，一维数组内的元素互为与关系
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dimensions?: string
}

/**
 * ModifyAlarmPolicyNotice返回参数结构体
 */
export interface ModifyAlarmPolicyNoticeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 通知模板与策略绑定关系
 */
export interface NoticeBindPolicys {
  /**
   * 告警通知模板 ID
   */
  NoticeId?: string
  /**
   * 告警通知模板绑定的告警策略ID列表
   */
  PolicyIds?: Array<string>
}

/**
 * Prometheus告警规则
 */
export interface PrometheusAlertRule {
  /**
   * 规则名称
   */
  Name: string
  /**
   * prometheus语句
   */
  Rule: string
  /**
   * 额外标签
   */
  Labels: Array<Label>
  /**
   * 告警发送模板
   */
  Template: string
  /**
   * 持续时间
   */
  For: string
  /**
   * 该条规则的描述信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Describe?: string
  /**
   * 参考prometheus rule中的annotations
注意：此字段可能返回 null，表示取不到有效值。
   */
  Annotations?: Array<Label>
  /**
   * 告警规则状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleState?: number
}

/**
 * UnbindPrometheusManagedGrafana返回参数结构体
 */
export interface UnbindPrometheusManagedGrafanaResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGrafanaChannels返回参数结构体
 */
export interface DescribeGrafanaChannelsResponse {
  /**
   * 告警通道数组
   */
  NotificationChannelSet?: Array<GrafanaChannel>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmPolicy返回参数结构体
 */
export interface DescribeAlarmPolicyResponse {
  /**
   * 策略详情
   */
  Policy: AlarmPolicy
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警通知渠道配置
 */
export interface PrometheusNotificationItem {
  /**
   * 是否启用
   */
  Enabled: boolean
  /**
   * 通道类型，默认为amp，支持以下
amp
webhook
alertmanager
   */
  Type: string
  /**
   * 如果Type为webhook, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
   */
  WebHook?: string
  /**
   * 如果Type为alertmanager, 则该字段为必填项
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertManager?: PrometheusAlertManagerConfig
  /**
   * 收敛时间
   */
  RepeatInterval?: string
  /**
   * 生效起始时间
   */
  TimeRangeStart?: string
  /**
   * 生效结束时间
   */
  TimeRangeEnd?: string
  /**
   * 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyWay?: Array<string>
  /**
   * 告警接收组（用户组）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverGroups?: Array<string>
  /**
   * 电话告警顺序。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneNotifyOrder?: Array<number | bigint>
  /**
   * 电话告警次数。
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneCircleTimes?: number
  /**
   * 电话告警轮内间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneInnerInterval?: number
  /**
   * 电话告警轮外间隔。单位：秒
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneCircleInterval?: number
  /**
   * 电话告警触达通知
注：NotifyWay选择CALL，采用该参数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  PhoneArriveNotice?: boolean
}

/**
 * DescribeMonitorTypes返回参数结构体
 */
export interface DescribeMonitorTypesResponse {
  /**
   * 监控类型，云产品监控为 MT_QCE
   */
  MonitorTypes?: Array<string>
  /**
   * 监控类型详情
   */
  MonitorTypeInfos?: Array<MonitorTypeInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpgradeGrafanaInstance请求参数结构体
 */
export interface UpgradeGrafanaInstanceRequest {
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
  /**
   * 版本别名，目前固定为 v9.1.5
   */
  Alias: string
}

/**
 * DescribeAccidentEventList接口的出参类型
 */
export interface DescribeAccidentEventListAlarms {
  /**
   * 事件分类
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessTypeDesc: string
  /**
   * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  AccidentTypeDesc: string
  /**
   * 事件分类的ID，1表示服务问题，2表示其他订阅
注意：此字段可能返回 null，表示取不到有效值。
   */
  BusinessID: number
  /**
   * 事件状态的ID，0表示已恢复，1表示未恢复
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventStatus: number
  /**
   * 影响的对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  AffectResource: string
  /**
   * 事件的地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 事件发生的时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  OccurTime: string
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: string
}

/**
 * CreatePrometheusGlobalNotification返回参数结构体
 */
export interface CreatePrometheusGlobalNotificationResponse {
  /**
   * 全局告警通知渠道ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmHistories请求参数结构体
 */
export interface DescribeAlarmHistoriesRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 页数，从 1 开始计数，默认 1
   */
  PageNumber?: number
  /**
   * 每页的数量，取值1~100，默认20
   */
  PageSize?: number
  /**
   * 默认按首次出现时间倒序排列 "ASC"=正序 "DESC"=逆序
   */
  Order?: string
  /**
   * 起始时间，默认一天前的时间戳。对应 `FirstOccurTime` 告警首次出现时间，告警历史的 `FirstOccurTime` 晚于 `StartTime` 才可能被搜索到。
   */
  StartTime?: number
  /**
   * 结束时间，默认当前时间戳。对应 `FirstOccurTime` 告警首次出现时间，告警历史的 `FirstOccurTime` 早于 `EndTime` 才可能被搜索到。
   */
  EndTime?: number
  /**
   * 根据监控类型过滤，不选默认查所有类型。"MT_QCE"=云产品监控，支持的枚举值有："MT_QCE"=云产品监控；"MT_TAW"=应用性能监控；"MT_RUM"=前端性能监控；"MT_PROBE"=云拨测，"MT_TRTC"=实时音视频，
"MT_RUMAPP"=终端性能监控
   */
  MonitorTypes?: Array<string>
  /**
   * 根据告警对象过滤 字符串模糊搜索
   */
  AlarmObject?: string
  /**
   * 根据告警状态过滤 ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足，不选默认查所有
   */
  AlarmStatus?: Array<string>
  /**
   * 根据项目ID过滤，-1=无项目 0=默认项目
可在此页面查询 [项目管理](https://console.cloud.tencent.com/project)
   */
  ProjectIds?: Array<number | bigint>
  /**
   * 根据实例组ID过滤
   */
  InstanceGroupIds?: Array<number | bigint>
  /**
   * 根据策略类型过滤，策略类型是监控类型之下的概念，在这里两者都需要传入，例如 `[{"MonitorType": "MT_QCE", "Namespace": "cvm_device"}]`
可使用 [查询所有名字空间 DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 接口查询
   */
  Namespaces?: Array<MonitorTypeNamespace>
  /**
   * 根据指标名过滤
   */
  MetricNames?: Array<string>
  /**
   * 根据策略名称模糊搜索,不支持大小写区分
   */
  PolicyName?: string
  /**
   * 根据告警内容模糊搜索
   */
  Content?: string
  /**
   * 根据接收人搜索，可以使用“访问管理”的 [拉取子用户 ListUsers](https://cloud.tencent.com/document/product/598/34587) 接口获取用户列表 或 [查询子用户 GetUser](https://cloud.tencent.com/document/product/598/34590) 接口查询子用户详情，此处填入返回结果中的 `Uid` 字段
   */
  ReceiverUids?: Array<number | bigint>
  /**
   * 根据接收组搜索，可以使用“访问管理”的 [查询用户组列表 ListGroups](https://cloud.tencent.com/document/product/598/34589) 接口获取用户组列表 或 [列出用户关联的用户组 ListGroupsForUser](https://cloud.tencent.com/document/product/598/34588) 查询某个子用户所在的用户组列表 ，此处填入返回结果中的 `GroupId ` 字段
   */
  ReceiverGroups?: Array<number | bigint>
  /**
   * 根据告警策略 Id 列表搜索
   */
  PolicyIds?: Array<string>
  /**
   * 告警等级,取值范围：Remind、Serious、Warn
   */
  AlarmLevels?: Array<string>
  /**
   * 收敛历史的唯一id
   */
  ConvergenceHistoryIDs?: Array<string>
  /**
   * 告警类型
   */
  AlarmTypes?: Array<string>
}

/**
 * DeletePolicyGroup请求参数结构体
 */
export interface DeletePolicyGroupRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 策略组id,即1.0的告警策略id,可以从策略详情获取
   */
  GroupId: Array<number | bigint>
}

/**
 * EnableSSOCamCheck请求参数结构体
 */
export interface EnableSSOCamCheckRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
  /**
   * 是否开启 cam 鉴权，true为开启，false 为不开启
   */
  EnableSSOCamCheck: boolean
}

/**
 * DeleteGrafanaIntegration返回参数结构体
 */
export interface DeleteGrafanaIntegrationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstalledPlugins请求参数结构体
 */
export interface DescribeInstalledPluginsRequest {
  /**
   * Grafana 实例 ID，例如：grafana-kleu3gt0
   */
  InstanceId: string
  /**
   * 按插件 ID 过滤，例如：grafana-piechart-panel，可通过接口 DescribeInstalledPlugins 查看已安装的插件 ID
   */
  PluginId?: string
}

/**
 * DescribePrometheusZones返回参数结构体
 */
export interface DescribePrometheusZonesResponse {
  /**
   * 区域列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneSet?: Array<PrometheusZoneItem>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusAgents请求参数结构体
 */
export interface DescribePrometheusAgentsRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * Agent 名称
   */
  Name?: string
  /**
   * Agent ID 列表
   */
  AgentIds?: Array<string>
  /**
   * 偏移量，默认为0
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100
   */
  Limit?: number
}

/**
 * 查询策略输出的阈值告警条件
 */
export interface DescribePolicyGroupInfoCondition {
  /**
   * 指标名称
   */
  MetricShowName: string
  /**
   * 数据聚合周期(单位秒)
   */
  Period: number
  /**
   * 指标id
   */
  MetricId: number
  /**
   * 阈值规则id
   */
  RuleId: number
  /**
   * 指标单位
   */
  Unit: string
  /**
   * 告警发送收敛类型。0连续告警，1指数告警
   */
  AlarmNotifyType: number
  /**
   * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
   */
  AlarmNotifyPeriod: number
  /**
   * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等，7表示日同比上涨，8表示日同比下降，9表示周同比上涨，10表示周同比下降，11表示周期环比上涨，12表示周期环比下降
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcType: number
  /**
   * 检测阈值
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcValue: string
  /**
   * 持续多长时间触发规则会告警(单位秒)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContinueTime: number
  /**
   * 告警指标名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricName: string
}

/**
 * DescribePrometheusInstanceInitStatus请求参数结构体
 */
export interface DescribePrometheusInstanceInitStatusRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * 策略过滤条件
 */
export interface AlarmConditionFilter {
  /**
   * 类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * 表达式
注意：此字段可能返回 null，表示取不到有效值。
   */
  Expression?: string
  /**
   * 过滤条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dimensions?: string
}

/**
 * CreatePrometheusAlertPolicy请求参数结构体
 */
export interface CreatePrometheusAlertPolicyRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 告警配置
   */
  AlertRule: PrometheusAlertPolicyItem
}

/**
 * DescribeBindingPolicyObjectList请求参数结构体
 */
export interface DescribeBindingPolicyObjectListRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 策略组id，如果有形如 policy-xxxx 的 id，请填到 PolicyId 字段中，本字段填 0
   */
  GroupId: number
  /**
   * 告警策略id，形如 policy-xxxx，如果填入，则GroupId可以填0
   */
  PolicyId?: string
  /**
   * 每次返回的数量，取值1~100，默认20
   */
  Limit?: number
  /**
   * 偏移量，从0开始计数，默认0。举例来说，参数 Offset=0&Limit=20 返回第 0 到 19 项，Offset=20&Limit=20 返回第 20 到 39 项，以此类推
   */
  Offset?: number
  /**
   * 筛选对象的维度信息
   */
  Dimensions?: Array<DescribeBindingPolicyObjectListDimension>
}

/**
 * DescribeProductEventList返回的Events
 */
export interface DescribeProductEventListEvents {
  /**
   * 事件ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventId: number
  /**
   * 事件中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventCName: string
  /**
   * 事件英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventEName: string
  /**
   * 事件简称
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventName: string
  /**
   * 产品中文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductCName: string
  /**
   * 产品英文名
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductEName: string
  /**
   * 产品简称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductName: string
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId: string
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceName: string
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId: string
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 是否支持告警
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportAlarm: number
  /**
   * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type: string
  /**
   * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime: number
  /**
   * 实例对象信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dimensions: Array<DescribeProductEventListEventsDimensions>
  /**
   * 实例对象附加信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AdditionMsg: Array<DescribeProductEventListEventsDimensions>
  /**
   * 是否配置告警
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsAlarmConfig: number
  /**
   * 策略信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupInfo: Array<DescribeProductEventListEventsGroupInfo>
  /**
   * 显示名称ViewName
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewName: string
}

/**
 * DescribePolicyConditionList.ConfigManual.PeriodNum
 */
export interface DescribePolicyConditionListConfigManualPeriodNum {
  /**
   * 默认周期数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Default: number
  /**
   * 可选周期数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys: Array<number | bigint>
  /**
   * 是否必须
   */
  Need: boolean
}

/**
 * UpgradeGrafanaDashboard返回参数结构体
 */
export interface UpgradeGrafanaDashboardResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAllNamespaces请求参数结构体
 */
export interface DescribeAllNamespacesRequest {
  /**
   * 根据使用场景过滤 目前仅有"ST_ALARM"=告警类型
   */
  SceneType: string
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 根据监控类型过滤 不填默认查所有类型 "MT_QCE"=云产品监控
   */
  MonitorTypes?: Array<string>
  /**
   * 根据namespace的Id过滤 不填默认查询所有
   */
  Ids?: Array<string>
}

/**
 * 策略组信息
 */
export interface PolicyGroup {
  /**
   * 是否可设为默认告警策略
   */
  CanSetDefault: boolean
  /**
   * 告警策略组ID
   */
  GroupID: number
  /**
   * 告警策略组名称
   */
  GroupName: string
  /**
   * 创建时间
   */
  InsertTime: number
  /**
   * 是否为默认告警策略
   */
  IsDefault: number
  /**
   * 告警策略启用状态
   */
  Enable: boolean
  /**
   * 最后修改人UIN
   */
  LastEditUin: number
  /**
   * 未屏蔽的实例数
   */
  NoShieldedInstanceCount: number
  /**
   * 父策略组ID
   */
  ParentGroupID: number
  /**
   * 所属项目ID
   */
  ProjectID: number
  /**
   * 告警接收对象信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReceiverInfos: Array<PolicyGroupReceiverInfo>
  /**
   * 备注信息
   */
  Remark: string
  /**
   * 修改时间
   */
  UpdateTime: number
  /**
   * 总绑定实例数
   */
  TotalInstanceCount: number
  /**
   * 视图
   */
  ViewName: string
  /**
   * 是否为与关系规则
   */
  IsUnionRule: number
}

/**
 * DescribePrometheusClusterAgents请求参数结构体
 */
export interface DescribePrometheusClusterAgentsRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 偏移量，默认为0。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
  /**
   * 用于通过集群id过滤被绑定集群
   */
  ClusterIds?: Array<string>
  /**
   * 用于通过集群类型过滤被绑定集群
   */
  ClusterTypes?: Array<string>
  /**
   * 用于通过名称搜索被绑定集群
   */
  ClusterName?: string
}

/**
 * UnbindPrometheusManagedGrafana请求参数结构体
 */
export interface UnbindPrometheusManagedGrafanaRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * Grafana 实例 ID
   */
  GrafanaId: string
}

/**
 * DescribePolicyGroupList接口策略组绑定的实例分组信息
 */
export interface DescribePolicyGroupListGroupInstanceGroup {
  /**
   * 实例分组名称id
   */
  InstanceGroupId: number
  /**
   * 策略类型视图名称
   */
  ViewName: string
  /**
   * 最近编辑的用户uin
   */
  LastEditUin: string
  /**
   * 实例分组名称
   */
  GroupName: string
  /**
   * 实例数量
   */
  InstanceSum: number
  /**
   * 更新时间
   */
  UpdateTime: number
  /**
   * 创建时间
   */
  InsertTime: number
}

/**
 * DescribeConditionsTemplateList返回参数结构体
 */
export interface DescribeConditionsTemplateListResponse {
  /**
   * 模板总数
   */
  Total?: number
  /**
   * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateGroupList?: Array<TemplateGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusAlertGroups返回参数结构体
 */
export interface DeletePrometheusAlertGroupsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreatePrometheusTemp请求参数结构体
 */
export interface CreatePrometheusTempRequest {
  /**
   * 模板设置
   */
  Template: PrometheusTemp
}

/**
 * ModifyAlarmPolicyInfo返回参数结构体
 */
export interface ModifyAlarmPolicyInfoResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 指标配置
 */
export interface MetricConfig {
  /**
   * 允许使用的运算符
   */
  Operator: Array<string>
  /**
   * 允许配置的数据周期，以秒为单位
   */
  Period: Array<number | bigint>
  /**
   * 允许配置的持续周期个数
   */
  ContinuePeriod: Array<number | bigint>
}

/**
 * 托管prometheusV2实例概览
 */
export interface PrometheusInstancesOverview {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 实例名
   */
  InstanceName: string
  /**
   * VPC ID
   */
  VpcId: string
  /**
   * 子网ID
   */
  SubnetId: string
  /**
   * 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:销毁中； 6:已停机； 7: 已删除）
   */
  InstanceStatus: number
  /**
   * 计费状态（1:正常；2:过期; 3:销毁; 4:分配中; 5:分配失败）
注意：此字段可能返回 null，表示取不到有效值。
   */
  ChargeStatus: number
  /**
   * 是否开启 Grafana（0:不开启，1:开启）
   */
  EnableGrafana: number
  /**
   * Grafana 面板 URL
注意：此字段可能返回 null，表示取不到有效值。
   */
  GrafanaURL: string
  /**
   * 实例付费类型（1:试用版；2:预付费）
   */
  InstanceChargeType: number
  /**
   * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  SpecName: string
  /**
   * 存储周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  DataRetentionTime: number
  /**
   * 购买的实例过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireTime: string
  /**
   * 自动续费标记(0:不自动续费；1:开启自动续费；2:禁止自动续费；-1:无效)
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag: number
  /**
   * 绑定集群总数
   */
  BoundTotal: number
  /**
   * 绑定集群正常状态总数
   */
  BoundNormal: number
  /**
   * 资源包状态，0-无可用资源包，1-有可用资源包
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourcePackageStatus?: number
  /**
   * 资源包规格名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourcePackageSpecName?: string
}

/**
 * DescribeAlarmEvents请求参数结构体
 */
export interface DescribeAlarmEventsRequest {
  /**
   * 模块名，固定值 monitor
   */
  Module: string
  /**
   * 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device
   */
  Namespace: string
  /**
   * 监控类型，如 MT_QCE。如果不填默认为 MT_QCE。
   */
  MonitorType?: string
}

/**
 * ModifyAlarmPolicyCondition请求参数结构体
 */
export interface ModifyAlarmPolicyConditionRequest {
  /**
   * 模块名，固定值 monitor
   */
  Module: string
  /**
   * 告警策略 ID
   */
  PolicyId: string
  /**
   * 触发条件模板 Id，可不传
   */
  ConditionTemplateId?: number
  /**
   * 指标触发条件
   */
  Condition?: AlarmPolicyCondition
  /**
   * 事件触发条件
   */
  EventCondition?: AlarmPolicyEventCondition
  /**
   * 全局过滤条件
   */
  Filter?: AlarmPolicyFilter
  /**
   * 聚合维度列表，指定按哪些维度 key 来做 group by
   */
  GroupBy?: Array<string>
  /**
   * 日志告警创建请求参数信息
   */
  LogAlarmReqInfo?: LogAlarmReq
  /**
   * 模板id，专供prom使用
   */
  NoticeIds?: Array<string>
  /**
   * 启停状态，0=停用，1=启用
   */
  Enable?: number
  /**
   * 专供prom策略名称
   */
  PolicyName?: string
  /**
   * 事件配置的告警
   */
  EbSubject?: string
}

/**
 * ModifyAlarmNotice返回参数结构体
 */
export interface ModifyAlarmNoticeResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * prometheus一个job的targets
 */
export interface PrometheusJobTargets {
  /**
   * 该Job的targets列表
   */
  Targets?: Array<PrometheusTarget>
  /**
   * job的名称
   */
  JobName?: string
  /**
   * targets总数
   */
  Total?: number
  /**
   * 健康的target总数
   */
  Up?: number
}

/**
 * UpdateGrafanaConfig请求参数结构体
 */
export interface UpdateGrafanaConfigRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * JSON 编码后的字符串，如 "{"server":{"root_url":"http://custom.domain"}}"
   */
  Config: string
}

/**
 * DescribeGrafanaIntegrations请求参数结构体
 */
export interface DescribeGrafanaIntegrationsRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * 集成 ID
   */
  IntegrationId?: string
  /**
   * 类型
   */
  Kind?: string
}

/**
 * 告警历史数据
 */
export interface AlarmHistory {
  /**
   * 告警历史Id
   */
  AlarmId?: string
  /**
   * 监控类型
   */
  MonitorType?: string
  /**
   * 策略类型
   */
  Namespace?: string
  /**
   * 告警对象
   */
  AlarmObject?: string
  /**
   * 告警内容
   */
  Content?: string
  /**
   * 时间戳，首次出现时间
   */
  FirstOccurTime?: number
  /**
   * 时间戳，最后出现时间
   */
  LastOccurTime?: number
  /**
   * 告警状态，ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足
   */
  AlarmStatus?: string
  /**
   * 告警策略 Id
   */
  PolicyId?: string
  /**
   * 策略名称
   */
  PolicyName?: string
  /**
   * 基础产品告警的告警对象所属网络
   */
  VPC?: string
  /**
   * 项目 Id
   */
  ProjectId?: number
  /**
   * 项目名字
   */
  ProjectName?: string
  /**
   * 告警对象所属实例组
   */
  InstanceGroup?: Array<InstanceGroups>
  /**
   * 接收人列表
   */
  ReceiverUids?: Array<number | bigint>
  /**
   * 接收组列表
   */
  ReceiverGroups?: Array<number | bigint>
  /**
   * 告警渠道列表 SMS=短信 EMAIL=邮件 CALL=电话 WECHAT=微信
   */
  NoticeWays?: Array<string>
  /**
   * 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID
   */
  OriginId?: string
  /**
   * 告警类型
   */
  AlarmType?: string
  /**
   * 事件Id
   */
  EventId?: number
  /**
   * 地域
   */
  Region?: string
  /**
   * 策略是否存在 0=不存在 1=存在
   */
  PolicyExists?: number
  /**
   * 指标信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricsInfo?: Array<AlarmHistoryMetric>
  /**
   * 告警实例的维度信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dimensions?: string
  /**
   * 告警等级
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmLevel?: string
  /**
   * 是否有配置告警屏蔽规则
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShieldFlag?: number
  /**
   * 屏蔽类型（英文）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmShieldingType?: string
  /**
   * 屏蔽时间（英文）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmShieldingTime?: string
  /**
   * 屏蔽类型（中文）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmShieldingShowType?: string
  /**
   * 屏蔽时间（中文）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmShieldingShowTime?: string
  /**
   * 屏蔽原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmShieldReason?: string
  /**
   * 告警实例的维度信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InternalDimensions?: string
  /**
   * 指标名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricName?: string
  /**
   * 策略是否有权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyPermissions?: number
}

/**
 * 与腾讯云可观测平台融合托管 Prometheus 实例，关联集群基础信息
 */
export interface PrometheusClusterAgentBasic {
  /**
   * 地域
   */
  Region: string
  /**
   * 集群类型。可填入tke、eks、tkeedge、tdcc，分别代表标准集群、弹性集群、边缘集群、注册集群
   */
  ClusterType: string
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 是否开启公网 CLB
   */
  EnableExternal: boolean
  /**
   * 集群内部署组件的pod 配置
   */
  InClusterPodConfig?: PrometheusClusterAgentPodConfig
  /**
   * 该集群采集的所有指标都会带上这些labels
   */
  ExternalLabels?: Array<Label>
  /**
   * 是否安装默认采集 exporter 和采集配置
   */
  NotInstallBasicScrape?: boolean
  /**
   * 是否安装采集配置，true 只安装采集 exporter 不会安装采集配置，false 会同时安装采集配置
   */
  NotScrape?: boolean
  /**
   * 是否丢弃所有指标，true 代表丢弃所有指标，false 代表采集默认指标
   */
  DropAll?: boolean
  /**
   * 是否开启默认预聚合规则
   */
  OpenDefaultRecord?: boolean
}

/**
 * CreatePolicyGroup请求参数结构体
 */
export interface CreatePolicyGroupRequest {
  /**
   * 组策略名称
   */
  GroupName: string
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 策略组所属视图的名称，若通过模板创建，可不传入
   */
  ViewName?: string
  /**
   * 策略组所属项目Id，会进行鉴权操作
   */
  ProjectId?: number
  /**
   * 模板策略组Id, 通过模板创建时才需要传
   */
  ConditionTempGroupId?: number
  /**
   * 是否屏蔽策略组，0表示不屏蔽，1表示屏蔽。不填默认为0
   */
  IsShielded?: number
  /**
   * 策略组的备注信息
   */
  Remark?: string
  /**
   * 插入时间，戳格式为Unix时间戳，不填则按后台处理时间填充
   */
  InsertTime?: number
  /**
   * 策略组中的阈值告警规则
   */
  Conditions?: Array<CreatePolicyGroupCondition>
  /**
   * 策略组中的事件告警规则
   */
  EventConditions?: Array<CreatePolicyGroupEventCondition>
  /**
   * 是否为后端调用。当且仅当值为1时，后台拉取策略模板中的规则填充入Conditions以及EventConditions字段
   */
  BackEndCall?: number
  /**
   * 指标告警规则的且或关系，0表示或规则(满足任意规则就告警)，1表示且规则(满足所有规则才告警)
   */
  IsUnionRule?: number
}

/**
 * CreatePrometheusScrapeJob请求参数结构体
 */
export interface CreatePrometheusScrapeJobRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * Agent ID(可通过DescribePrometheusAgents 接口获取)
   */
  AgentId: string
  /**
   * 抓取任务配置
   */
  Config?: string
}

/**
 * CreatePrometheusTemp返回参数结构体
 */
export interface CreatePrometheusTempResponse {
  /**
   * 模板Id
   */
  TemplateId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyConditionList.EventMetric
 */
export interface DescribePolicyConditionListEventMetric {
  /**
   * 事件id
   */
  EventId: number
  /**
   * 事件名称
   */
  EventShowName: string
  /**
   * 是否需要恢复
   */
  NeedRecovered: boolean
  /**
   * 事件类型，预留字段，当前固定取值为2
   */
  Type: number
}

/**
 * DescribePolicyGroupList请求参数结构体
 */
export interface DescribePolicyGroupListRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 分页参数，每页返回的数量，取值1~100
   */
  Limit: number
  /**
   * 分页参数，页偏移量，从0开始计数
   */
  Offset: number
  /**
   * 按策略名搜索
   */
  Like?: string
  /**
   * 实例分组id
   */
  InstanceGroupId?: number
  /**
   * 按更新时间排序, asc 或者 desc
   */
  UpdateTimeOrder?: string
  /**
   * 项目id列表
   */
  ProjectIds?: Array<number | bigint>
  /**
   * 告警策略类型列表
   */
  ViewNames?: Array<string>
  /**
   * 是否过滤无接收人策略组, 1表示过滤, 0表示不过滤
   */
  FilterUnuseReceiver?: number
  /**
   * 过滤条件, 接收组列表
   */
  Receivers?: Array<string>
  /**
   * 过滤条件, 接收人列表
   */
  ReceiverUserList?: Array<string>
  /**
   * 维度组合字段(json字符串), 例如[[{"name":"unInstanceId","value":"ins-6e4b2aaa"}]]
   */
  Dimensions?: string
  /**
   * 模板策略组id, 多个id用逗号分隔
   */
  ConditionTempGroupId?: string
  /**
   * 过滤条件, 接收人或者接收组, user表示接收人, group表示接收组
   */
  ReceiverType?: string
  /**
   * 过滤条件，告警策略是否已启动或停止
   */
  IsOpen?: boolean
}

/**
 * UnBindingAllPolicyObject返回参数结构体
 */
export interface UnBindingAllPolicyObjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmNotices请求参数结构体
 */
export interface DescribeAlarmNoticesRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string
  /**
   * 页码 最小为1
   */
  PageNumber: number
  /**
   * 分页大小 1～200
   */
  PageSize: number
  /**
   * 按更新时间排序方式 ASC=正序 DESC=倒序
   */
  Order: string
  /**
   * 主账号 uid 用于创建预设通知
   */
  OwnerUid?: number
  /**
   * 告警通知模板名称 用来模糊搜索
   */
  Name?: string
  /**
   * 根据接收人过滤告警通知模板需要选定通知用户类型 USER=用户 GROUP=用户组 传空=不按接收人过滤
   */
  ReceiverType?: string
  /**
   * 接收对象列表
   */
  UserIds?: Array<number | bigint>
  /**
   * 接收组列表
   */
  GroupIds?: Array<number | bigint>
  /**
   * 根据通知模板 id 过滤，空数组/不传则不过滤
   */
  NoticeIds?: Array<string>
  /**
   * 模板根据标签过滤
   */
  Tags?: Array<Tag>
  /**
   * 值班列表
   */
  OnCallFormIDs?: Array<string>
}

/**
 * RunPrometheusInstance返回参数结构体
 */
export interface RunPrometheusInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateExporterIntegration请求参数结构体
 */
export interface UpdateExporterIntegrationRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * 类型(可通过 DescribeExporterIntegrations 获取对应集成的 Kind)
   */
  Kind: string
  /**
   * 配置内容(可通过 DescribeExporterIntegrations 接口获取对应集成的 Content，并在此基础上做修改)
   */
  Content: string
  /**
   * Kubernetes 集群类型，可不填。取值如下：
<li> 1= 容器集群(TKE) </li>
<li> 2=弹性集群(EKS) </li>
<li> 3= Prometheus管理的弹性集群(MEKS) </li>
   */
  KubeType?: number
  /**
   * 集群 ID，可不填
   */
  ClusterId?: string
}

/**
 * Prometheus告警自定义通知模板
 */
export interface PrometheusAlertCustomReceiver {
  /**
   * 自定义通知类型
alertmanager -- vpc内自建alertmanager
webhook -- vpc内webhook地址
注意：此字段可能返回 null，表示取不到有效值。
   */
  Type?: string
  /**
   * alertmanager/webhook地址。（prometheus实例同vpc内ip）
注意：此字段可能返回 null，表示取不到有效值。
   */
  Url?: string
  /**
   * 允许发送告警的时间范围
注意：此字段可能返回 null，表示取不到有效值。
   */
  AllowedTimeRanges?: Array<PrometheusAlertAllowTimeRange>
  /**
   * alertmanager所在的内网集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
  /**
   * alertmanager所在的内网集群类型(tke/eks/tdcc)
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterType?: string
}

/**
 * DescribeAlarmNotice返回参数结构体
 */
export interface DescribeAlarmNoticeResponse {
  /**
   * 告警通知模板详细信息
   */
  Notice: AlarmNotice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAlertRules请求参数结构体
 */
export interface DeleteAlertRulesRequest {
  /**
   * 规则 ID 列表
   */
  RuleIds: Array<string>
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
}

/**
 * SyncPrometheusTemp请求参数结构体
 */
export interface SyncPrometheusTempRequest {
  /**
   * 实例id
   */
  TemplateId: string
  /**
   * 同步目标
   */
  Targets: Array<PrometheusTemplateSyncTarget>
}

/**
 * GetMonitorData返回参数结构体
 */
export interface GetMonitorDataResponse {
  /**
   * 统计周期
   */
  Period?: number
  /**
   * 指标名
   */
  MetricName?: string
  /**
   * 数据点数组
   */
  DataPoints?: Array<DataPoint>
  /**
   * 开始时间
   */
  StartTime?: string
  /**
   * 结束时间
   */
  EndTime?: string
  /**
   * 返回信息
   */
  Msg?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 接收人信息
 */
export interface ReceiverInfo {
  /**
   * 告警时间段开始时间。范围[0,86400)，作为 UNIX 时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
   */
  StartTime: number
  /**
   * 告警时间段结束时间。含义同StartTime
   */
  EndTime: number
  /**
   * 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT"
   */
  NotifyWay: Array<string>
  /**
   * 接收人类型。“group” 或 “user”
   */
  ReceiverType: string
  /**
   * ReceiverId
   */
  Id?: number
  /**
   * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
   */
  SendFor?: Array<string>
  /**
   * 电话告警接收者 UID
   */
  UidList?: Array<number | bigint>
  /**
   * 电话告警轮数
   */
  RoundNumber?: number
  /**
   * 电话告警对个人间隔（秒）
   */
  PersonInterval?: number
  /**
   * 电话告警每轮间隔（秒）
   */
  RoundInterval?: number
  /**
   * 恢复通知方式。可选"SMS"
   */
  RecoverNotify?: Array<string>
  /**
   * 是否需要电话告警触达提示。0不需要，1需要
   */
  NeedSendNotice?: number
  /**
   * 接收组列表。通过平台接口查询到的接收组 ID 列表
   */
  ReceiverGroupList?: Array<number | bigint>
  /**
   * 接收人列表。通过平台接口查询到的接收人 ID 列表
   */
  ReceiverUserList?: Array<number | bigint>
  /**
   * 告警接收语言，枚举值（zh-CN，en-US）
   */
  ReceiveLanguage?: string
}

/**
 * DescribeRecordingRules请求参数结构体
 */
export interface DescribeRecordingRulesRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number
  /**
   * 偏移量，默认为 0
   */
  Offset?: number
  /**
   * 规则 ID
   */
  RuleId?: string
  /**
   * 规则状态码，取值如下：
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
   */
  RuleState?: number
  /**
   * 规则名称
   */
  Name?: string
}

/**
 * UpgradeGrafanaDashboard请求参数结构体
 */
export interface UpgradeGrafanaDashboardRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * Prometheus 集成项 Code，升级对应的 Dashboard，取值如下：<li>qcloud</li><li>cvm_process_exporter</li><li>cvm_node_exporter</li><li>cvm</li><li>tps</li><li>nginx-ingress</li><li>nvidia-gpu</li><li>cdwch</li><li>emr</li><li>apache</li><li>rocketmq</li><li>rabbitmq</li><li>spring_mvc</li><li>mysql</li><li>mssql</li><li>go</li><li>redis</li><li>jvm</li><li>pgsql</li><li>ceph</li><li>docker</li><li>nginx</li><li>oracledb</li><li>mongo</li><li>kafka</li><li>es</li><li>flink</li><li>blackbox</li><li>consule</li><li>memcached</li><li>zk</li><li>tps</li><li>istio</li><li>etcd</li><li>pts</li><li>kong</li>
   */
  IntegrationCodes?: Array<string>
}

/**
 * DeleteServiceDiscovery请求参数结构体
 */
export interface DeleteServiceDiscoveryRequest {
  /**
   * Prometheus 实例 ID，例如：prom-sdfk2342a
   */
  InstanceId: string
  /**
   * <li>类型是 TKE，为对应的腾讯云容器服务集群 ID</li>
   */
  KubeClusterId: string
  /**
   * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
   */
  KubeType: number
  /**
   * 服务发现类型，取值如下：
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = PodMonitor</li>
   */
  Type: number
  /**
   * 服务发现配置信息，YAML 格式，[具体YAML参数内容请参考](https://cloud.tencent.com/document/product/1416/55995#service-monitor)
   */
  Yaml: string
}

/**
 * DescribeInstalledPlugins返回参数结构体
 */
export interface DescribeInstalledPluginsResponse {
  /**
   * 插件列表
   */
  PluginSet: Array<GrafanaPlugin>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateGrafanaConfig返回参数结构体
 */
export interface UpdateGrafanaConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusRegions 响应结构体
 */
export interface PrometheusRegionItem {
  /**
   * 区域
   */
  Region?: string
  /**
   * 区域 ID
   */
  RegionId?: number
  /**
   * 区域状态( 0: 不可用；1: 可用)
   */
  RegionState?: number
  /**
   * 区域名(中文)
   */
  RegionName?: string
  /**
   * 区域名(英文缩写)
   */
  RegionShortName?: string
  /**
   * 区域所在大区名
   */
  Area?: string
  /**
   * 1-仅支持预付费，2-仅支持后付费，3-支持两种计费模式实例
   */
  RegionPayMode?: number
}

/**
 * ModifyPrometheusInstanceAttributes请求参数结构体
 */
export interface ModifyPrometheusInstanceAttributesRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * 实例名称
   */
  InstanceName?: string
  /**
   * 数据存储时间（单位天），限制值为15, 30, 45, 90, 180, 365, 730之一
   */
  DataRetentionTime?: number
}

/**
 * DescribePrometheusConfig返回参数结构体
 */
export interface DescribePrometheusConfigResponse {
  /**
   * 全局配置
   */
  Config?: string
  /**
   * ServiceMonitor配置
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * PodMonitor配置
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * 原生Job
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * Probes
   */
  Probes?: Array<PrometheusConfigItem>
  /**
   * 实例组件是否需要升级
   */
  ImageNeedUpdate?: boolean
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateGrafanaEnvironments返回参数结构体
 */
export interface UpdateGrafanaEnvironmentsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductEventList请求参数结构体
 */
export interface DescribeProductEventListRequest {
  /**
   * 接口模块名，固定值"monitor"
   */
  Module: string
  /**
   * 产品类型过滤，例如"cvm"表示云服务器
   */
  ProductName?: Array<string>
  /**
   * 事件名称过滤，例如"guest_reboot"表示机器重启
   */
  EventName?: Array<string>
  /**
   * 影响对象，例如"ins-19708ino"
   */
  InstanceId?: Array<string>
  /**
   * 维度过滤，例如外网IP:10.0.0.1
   */
  Dimensions?: Array<DescribeProductEventListDimensions>
  /**
   * 产品事件地域过滤参数，例如gz，各地域缩写可参见[地域列表](https://cloud.tencent.com/document/product/248/50863)
   */
  RegionList?: Array<string>
  /**
   * 事件类型过滤，取值范围["status_change","abnormal"]，分别表示状态变更、异常事件
   */
  Type?: Array<string>
  /**
   * 事件状态过滤，取值范围["recover","alarm","-"]，分别表示已恢复、未恢复、无状态
   */
  Status?: Array<string>
  /**
   * 项目ID过滤
   */
  Project?: Array<string>
  /**
   * 告警状态配置过滤，1表示已配置，0表示未配置
   */
  IsAlarmConfig?: number
  /**
   * 按更新时间排序，ASC表示升序，DESC表示降序，默认DESC
   */
  TimeOrder?: string
  /**
   * 起始时间，默认一天前的时间戳
   */
  StartTime?: number
  /**
   * 结束时间，默认当前时间戳
   */
  EndTime?: number
  /**
   * 页偏移量，默认0
   */
  Offset?: number
  /**
   * 每页返回的数量，默认20
   */
  Limit?: number
}

/**
 * CreatePrometheusGlobalNotification请求参数结构体
 */
export interface CreatePrometheusGlobalNotificationRequest {
  /**
   * 实例ID(可通过 DescribePrometheusInstances 接口获取)
   */
  InstanceId: string
  /**
   * 告警通知渠道
   */
  Notification: PrometheusNotificationItem
}

/**
 * ModifyPrometheusTemp返回参数结构体
 */
export interface ModifyPrometheusTempResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRecordingRules返回参数结构体
 */
export interface DescribeRecordingRulesResponse {
  /**
   * 规则组数量
   */
  TotalCount?: number
  /**
   * 规则组详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordingRuleSet?: Array<RecordingRuleSet>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateGrafanaWhiteList请求参数结构体
 */
export interface UpdateGrafanaWhiteListRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
  /**
   * 白名单数组，输入白名单 IP 或 CIDR，如：127.0.0.1或127.0.0.1/24
如有多个 IP 可换行输入
   */
  Whitelist: Array<string>
}

/**
 * UpdatePrometheusAgentStatus请求参数结构体
 */
export interface UpdatePrometheusAgentStatusRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * Agent ID 列表，例如：agent-abcd1234，可在控制台 Agent 管理中获取
   */
  AgentIds: Array<string>
  /**
   * 要更新的状态
<li> 1= 开启 </li>
<li> 2= 关闭 </li>
   */
  Status: number
}

/**
 * DescribeGrafanaInstances返回参数结构体
 */
export interface DescribeGrafanaInstancesResponse {
  /**
   * 已废弃，请使用 Instances
   */
  InstanceSet?: Array<GrafanaInstanceInfo>
  /**
   * 符合查询条件的实例总数
   */
  TotalCount?: number
  /**
   * 实例列表
   */
  Instances?: Array<GrafanaInstanceInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRemoteURLs返回参数结构体
 */
export interface DescribeRemoteURLsResponse {
  /**
   * 多写配置
   */
  RemoteWrites?: Array<RemoteWrite>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyGroupInfo请求参数结构体
 */
export interface DescribePolicyGroupInfoRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 策略组id
   */
  GroupId: number
}

/**
 * UpdateAlertRuleState返回参数结构体
 */
export interface UpdateAlertRuleStateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrometheusRecordRuleYaml请求参数结构体
 */
export interface ModifyPrometheusRecordRuleYamlRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 聚合实例名称
   */
  Name: string
  /**
   * 新的内容
   */
  Content: string
}

/**
 * DeletePrometheusAlertPolicy返回参数结构体
 */
export interface DeletePrometheusAlertPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePrometheusRegions请求参数结构体
 */
export interface DescribePrometheusRegionsRequest {
  /**
   * 1-预付费，2-后付费，3-全地域（不填默认全地域）
   */
  PayMode?: number
}

/**
 * DescribeProductEventList的入参Dimensions
 */
export interface DescribeProductEventListDimensions {
  /**
   * 维度名
   */
  Name: string
  /**
   * 维度值
   */
  Value: string
}

/**
 * ModifyAlarmPolicyNotice请求参数结构体
 */
export interface ModifyAlarmPolicyNoticeRequest {
  /**
   * 模块名，这里填“monitor”。
   */
  Module: string
  /**
   * 告警策略 ID，如果该参数与PolicyIds参数同时存在，则以PolicyIds为准。
   */
  PolicyId?: string
  /**
   * 告警通知模板 ID 列表。
   */
  NoticeIds?: Array<string>
  /**
   * 告警策略ID数组，支持给多个告警策略批量绑定通知模板。最多30个。
   */
  PolicyIds?: Array<string>
  /**
   * 告警分级通知规则配置
   */
  HierarchicalNotices?: Array<AlarmHierarchicalNotice>
  /**
   * 通知内容模板绑定信息
   */
  NoticeContentTmplBindInfos?: Array<NoticeContentTmplBindInfo>
}

/**
 * DeleteAlarmPolicy请求参数结构体
 */
export interface DeleteAlarmPolicyRequest {
  /**
   * 模块名，固定值 monitor
   */
  Module: string
  /**
   * 告警策略 ID 列表
   */
  PolicyIds: Array<string>
  /**
   * prom的实例id
   */
  PromInsIds?: Array<string>
}

/**
 * 事件告警条件
 */
export interface EventCondition {
  /**
   * 告警通知频率
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmNotifyPeriod?: string
  /**
   * 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警）
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmNotifyType?: string
  /**
   * 事件ID
   */
  EventID?: string
  /**
   * 事件展示名称（对外）
   */
  EventDisplayName?: string
  /**
   * 规则ID
   */
  RuleID?: string
  /**
   * 指标名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricName?: string
}

/**
 * DescribeClusterAgentCreatingProgress返回参数结构体
 */
export interface DescribeClusterAgentCreatingProgressResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlertRule返回参数结构体
 */
export interface CreateAlertRuleResponse {
  /**
   * 规则 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePolicyConditionList.ConfigManual.ContinueTime
 */
export interface DescribePolicyConditionListConfigManualContinueTime {
  /**
   * 默认持续时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Default: number
  /**
   * 可选持续时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  Keys: Array<number | bigint>
  /**
   * 是否必须
   */
  Need: boolean
}

/**
 * ModifyAlarmPolicyTasks返回参数结构体
 */
export interface ModifyAlarmPolicyTasksResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监控类型详细信息
 */
export interface MonitorTypeInfo {
  /**
   * 监控类型ID
   */
  Id: string
  /**
   * 监控类型
   */
  Name: string
  /**
   * 排列顺序
   */
  SortId: number
}

/**
 * 策略类型的维度信息
 */
export interface DimensionNew {
  /**
   * 维度 key 标示，后台英文名
   */
  Key: string
  /**
   * 维度 key 名称，中英文前台展示名
   */
  Name: string
  /**
   * 是否必选
   */
  IsRequired: boolean
  /**
   * 支持的操作符列表
   */
  Operators: Array<Operator>
  /**
   * 是否支持多选
   */
  IsMultiple: boolean
  /**
   * 创建后是否可以修改
   */
  IsMutable: boolean
  /**
   * 是否展示给用户
   */
  IsVisible: boolean
  /**
   * 能否用来过滤策略列表
   */
  CanFilterPolicy: boolean
  /**
   * 能否用来过滤告警历史
   */
  CanFilterHistory: boolean
  /**
   * 能否作为聚合维度
   */
  CanGroupBy: boolean
  /**
   * 是否必须作为聚合维度
   */
  MustGroupBy: boolean
  /**
   * 前端翻译要替换的 key
注意：此字段可能返回 null，表示取不到有效值。
   */
  ShowValueReplace: string
}

/**
 * DeleteAlertRules返回参数结构体
 */
export interface DeleteAlertRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusScrapeJobs请求参数结构体
 */
export interface DeletePrometheusScrapeJobsRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * Agent ID(可通过 DescribePrometheusAgents 接口获取)
   */
  AgentId: string
  /**
   * 任务 ID 列表(可通过 DescribePrometheusScrapeJobs 接口获取)
   */
  JobIds: Array<string>
}

/**
 * ModifyAlarmPolicyStatus请求参数结构体
 */
export interface ModifyAlarmPolicyStatusRequest {
  /**
   * 模块名，固定值 monitor
   */
  Module: string
  /**
   * 告警策略 ID
   */
  PolicyId: string
  /**
   * 启停状态 0=停用 1=启用
   */
  Enable: number
}

/**
 * 告警条件模板
 */
export interface ConditionsTemp {
  /**
   * 模板名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateName: string
  /**
   * 指标触发条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Condition: AlarmPolicyCondition
  /**
   * 事件触发条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventCondition: AlarmPolicyEventCondition
}

/**
 * 维度支持的操作符信息
 */
export interface Operator {
  /**
   * 运算符标识
   */
  Id: string
  /**
   * 运算符展示名
   */
  Name: string
}

/**
 * DescribeServiceDiscovery请求参数结构体
 */
export interface DescribeServiceDiscoveryRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * <li>类型是 TKE，为对应的腾讯云容器服务集群 ID</li>
   */
  KubeClusterId: string
  /**
   * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
   */
  KubeType: number
}

/**
 * 任务步骤信息
 */
export interface TaskStepInfo {
  /**
   * 步骤名称
   */
  Step: string
  /**
   * 生命周期
pending : 步骤未开始
running: 步骤执行中
success: 步骤成功完成
failed: 步骤失败
   */
  LifeState: string
  /**
   * 步骤开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartAt: string
  /**
   * 步骤结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndAt: string
  /**
   * 若步骤生命周期为failed,则此字段显示错误信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedMsg: string
}

/**
 * DescribePrometheusTemp返回参数结构体
 */
export interface DescribePrometheusTempResponse {
  /**
   * 模板列表
   */
  Templates?: Array<PrometheusTemp>
  /**
   * 总数
   */
  Total?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeGrafanaConfig返回参数结构体
 */
export interface DescribeGrafanaConfigResponse {
  /**
   * JSON 编码后的字符串
   */
  Config: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmNotice请求参数结构体
 */
export interface DescribeAlarmNoticeRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string
  /**
   * 告警通知模板 id
   */
  NoticeId: string
}

/**
 * 模板实例
 */
export interface PrometheusTemp {
  /**
   * 模板名称
   */
  Name: string
  /**
   * 模板维度，支持以下类型
instance 实例级别
cluster 集群级别
   */
  Level: string
  /**
   * 模板描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  Describe?: string
  /**
   * 当Level为instance时有效，
模板中的聚合规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RecordRules?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的ServiceMonitor规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  ServiceMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的PodMonitors规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  PodMonitors?: Array<PrometheusConfigItem>
  /**
   * 当Level为cluster时有效，
模板中的RawJobs规则列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  RawJobs?: Array<PrometheusConfigItem>
  /**
   * 模板的ID, 用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 最近更新时间，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateTime?: string
  /**
   * 当前版本，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  Version?: string
  /**
   * 是否系统提供的默认模板，用于出参
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsDefault?: boolean
  /**
   * 当Level为instance时有效，
模板中的告警配置列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlertDetailRules?: Array<PrometheusAlertPolicyItem>
  /**
   * 关联实例数目
注意：此字段可能返回 null，表示取不到有效值。
   */
  TargetsTotal?: number
}

/**
 * DescribePolicyConditionList策略条件
 */
export interface DescribePolicyConditionListCondition {
  /**
   * 策略视图名称
   */
  PolicyViewName: string
  /**
   * 事件告警条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  EventMetrics: Array<DescribePolicyConditionListEventMetric>
  /**
   * 是否支持多地域
   */
  IsSupportMultiRegion: boolean
  /**
   * 指标告警条件
注意：此字段可能返回 null，表示取不到有效值。
   */
  Metrics: Array<DescribePolicyConditionListMetric>
  /**
   * 策略类型名称
   */
  Name: string
  /**
   * 排序id
   */
  SortId: number
  /**
   * 是否支持默认策略
   */
  SupportDefault: boolean
  /**
   * 支持该策略类型的地域列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SupportRegions: Array<string>
  /**
   * 弃用信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeprecatingInfo?: DescribePolicyConditionListResponseDeprecatingInfo
}

/**
 * DeletePrometheusTemp请求参数结构体
 */
export interface DeletePrometheusTempRequest {
  /**
   * 模板id
   */
  TemplateId: string
}

/**
 * EnableGrafanaInternet返回参数结构体
 */
export interface EnableGrafanaInternetResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeProductList请求参数结构体
 */
export interface DescribeProductListRequest {
  /**
   * 固定传值monitor
   */
  Module: string
  /**
   * 排序方式：DESC/ASC（区分大小写），默认值DESC
   */
  Order?: string
  /**
   * 分页查询的偏移量，默认值0
   */
  Offset?: number
  /**
   * 分页查询的每页数据量，默认值20
   */
  Limit?: number
}

/**
 * BindPrometheusManagedGrafana返回参数结构体
 */
export interface BindPrometheusManagedGrafanaResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Prometheus Agent 管理命令行
 */
export interface ManagementCommand {
  /**
   * Agent 安装命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  Install: string
  /**
   * Agent 重启命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  Restart: string
  /**
   * Agent 停止命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  Stop: string
  /**
   * Agent 状态检测命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  StatusCheck: string
  /**
   * Agent 日志检测命令
注意：此字段可能返回 null，表示取不到有效值。
   */
  LogCheck: string
}

/**
 * CreatePrometheusAgent请求参数结构体
 */
export interface CreatePrometheusAgentRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * Agent 名称
   */
  Name: string
}

/**
 * DeleteAlarmNotices返回参数结构体
 */
export interface DeleteAlarmNoticesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusTempSync请求参数结构体
 */
export interface DeletePrometheusTempSyncRequest {
  /**
   * 模板id
   */
  TemplateId: string
  /**
   * 取消同步的对象列表
   */
  Targets: Array<PrometheusTemplateSyncTarget>
}

/**
 * DescribePluginOverviews请求参数结构体
 */
export type DescribePluginOverviewsRequest = null

/**
 * DescribePrometheusGlobalConfig请求参数结构体
 */
export interface DescribePrometheusGlobalConfigRequest {
  /**
   * 实例级别抓取配置
   */
  InstanceId: string
  /**
   * 是否禁用统计
   */
  DisableStatistics?: boolean
}

/**
 * Prometheus用量信息
 */
export interface PrometheusInstanceTenantUsage {
  /**
   * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceId?: string
  /**
   * 计费周期
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcDate?: string
  /**
   * 总用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 基础指标用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Basic?: number
  /**
   * 付费指标用量
注意：此字段可能返回 null，表示取不到有效值。
   */
  Fee?: number
}

/**
 * DescribePrometheusZones请求参数结构体
 */
export interface DescribePrometheusZonesRequest {
  /**
   * 地域 ID（RegionId 和 RegionName 只需要填一个）
   */
  RegionId?: number
  /**
   * 地域名（RegionId 和 RegionName 只需要填一个）
   */
  RegionName?: string
}

/**
 * DescribePrometheusAlertGroups请求参数结构体
 */
export interface DescribePrometheusAlertGroupsRequest {
  /**
   * Prometheus 实例 ID
   */
  InstanceId?: string
  /**
   * 返回数量，默认为 20，最大值为 100
   */
  Limit?: number
  /**
   * 偏移量，默认为 0
   */
  Offset?: number
  /**
   * 告警分组ID，形如alert-xxxx。
查询给定ID的告警分组
   */
  GroupId?: string
  /**
   * 告警分组名称。
查询名称中包含给定字符串的告警分组
   */
  GroupName?: string
}

/**
 * ModifyPolicyGroup请求参数结构体
 */
export interface ModifyPolicyGroupRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 策略组id
   */
  GroupId: number
  /**
   * 告警类型
   */
  ViewName: string
  /**
   * 策略组名称
   */
  GroupName: string
  /**
   * 指标告警条件的且或关系，1表示且告警，所有指标告警条件都达到才告警，0表示或告警，任意指标告警条件达到都告警
   */
  IsUnionRule: number
  /**
   * 指标告警条件规则，不填表示删除已有的所有指标告警条件规则
   */
  Conditions?: Array<ModifyPolicyGroupCondition>
  /**
   * 事件告警条件，不填表示删除已有的事件告警条件
   */
  EventConditions?: Array<ModifyPolicyGroupEventCondition>
  /**
   * 模板策略组id
   */
  ConditionTempGroupId?: number
}

/**
 * DescribeBaseMetrics请求参数结构体
 */
export interface DescribeBaseMetricsRequest {
  /**
   * 业务命名空间，各个云产品的业务命名空间不同。如需获取业务命名空间，请前往各产品监控指标文档，例如云服务器的命名空间，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843)
   */
  Namespace: string
  /**
   * 指标名，各个云产品的指标名不同。如需获取指标名，请前往各产品监控指标文档，例如云服务器的指标名，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843)
   */
  MetricName?: string
  /**
   * 可选参数，按照维度过滤
   */
  Dimensions?: Array<string>
}

/**
 * DescribePhoneAlarmFlowTotalCount请求参数结构体
 */
export interface DescribePhoneAlarmFlowTotalCountRequest {
  /**
   * 默认monitor
   */
  Module: string
  /**
   * unix时间戳，单位：s
   */
  QueryTime: number
}

/**
 * DeletePrometheusConfig请求参数结构体
 */
export interface DeletePrometheusConfigRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 集群类型
   */
  ClusterType: string
  /**
   * 集群id
   */
  ClusterId: string
  /**
   * 要删除的ServiceMonitor名字列表
   */
  ServiceMonitors?: Array<string>
  /**
   * 要删除的PodMonitor名字列表
   */
  PodMonitors?: Array<string>
  /**
   * 要删除的RawJobs名字列表
   */
  RawJobs?: Array<string>
}

/**
 * 托管prometheus告警策略实例
 */
export interface PrometheusAlertPolicyItem {
  /**
   * 策略名称
   */
  Name: string
  /**
   * 规则列表
   */
  Rules: Array<PrometheusAlertRule>
  /**
   * 告警策略 id
注意：此字段可能返回 null，表示取不到有效值。
   */
  Id?: string
  /**
   * 如果该告警来自模板下发，则TemplateId为模板id
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 告警渠道，模板中使用可能返回null
注意：此字段可能返回 null，表示取不到有效值。
   */
  Notification?: PrometheusNotificationItem
  /**
   * 最后修改时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
  /**
   * 如果告警策略来源于用户集群CRD资源定义，则ClusterId为所属集群ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ClusterId?: string
}

/**
 * ModifyPrometheusAgentExternalLabels请求参数结构体
 */
export interface ModifyPrometheusAgentExternalLabelsRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 新的external_labels
   */
  ExternalLabels: Array<Label>
}

/**
 * Prometheus 抓取任务
 */
export interface PrometheusScrapeJob {
  /**
   * 任务名
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * Agent ID
   */
  AgentId?: string
  /**
   * 任务 ID
   */
  JobId?: string
  /**
   * 配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  Config?: string
}

/**
 * prometheus一个抓取目标的信息
 */
export interface PrometheusTarget {
  /**
   * 抓取目标的URL
   */
  Url?: string
  /**
   * target当前状态,当前支持
up = 健康
down = 不健康
unknown = 未知
   */
  State?: string
}

/**
 * 通知模板ID及通知等级列表，["Remind","Serious"]表示该通知模板仅接收提醒和严重类别的告警
 */
export interface AlarmHierarchicalNotice {
  /**
   * 通知模板ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NoticeId?: string
  /**
   * 通知等级列表，["Remind","Serious"]表示该通知模板仅接收提醒和严重类别的告警
注意：此字段可能返回 null，表示取不到有效值。
   */
  Classification?: Array<string>
  /**
   * 模板对应的策略id
注意：此字段可能返回 null，表示取不到有效值。
   */
  PolicyId?: string
}

/**
 * 策略绑定实例维度信息
 */
export interface BindingPolicyObjectDimension {
  /**
   * 地域名
   */
  Region: string
  /**
   * 地域ID
   */
  RegionId?: number
  /**
   * 实例的维度信息，格式为
{"unInstanceId":"ins-00jvv9mo"}。不同云产品的维度信息不同，详见
[指标维度信息Dimensions列表](https://cloud.tencent.com/document/product/248/50397)
   */
  Dimensions?: string
  /**
   * 事件维度信息
   */
  EventDimensions?: string
}

/**
 * DescribePrometheusTemp请求参数结构体
 */
export interface DescribePrometheusTempRequest {
  /**
   * 仅支持按Name, Values字段过滤:
* Name = Name
  按照给定的模板名称列表匹配
* Name = ID
  按照给定的模板ID列表匹配
* Name = Describe
  按照给定的模板描述列表匹配
* Name = Level
  按照给定的模板维度(instance, cluster)列表匹配
   */
  Filters?: Array<Filter>
  /**
   * 分页偏移量，默认为0
   */
  Offset?: number
  /**
   * 分页返回数量，默认为20，最大值为100
   */
  Limit?: number
}

/**
 * UpdateServiceDiscovery返回参数结构体
 */
export interface UpdateServiceDiscoveryResponse {
  /**
   * 更新成功之后，返回对应服务发现的信息
   */
  ServiceDiscovery?: ServiceDiscoveryItem
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePrometheusAlertGroupState返回参数结构体
 */
export interface UpdatePrometheusAlertGroupStateResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBasicAlarmList返回的Alarms
 */
export interface DescribeBasicAlarmListAlarms {
  /**
   * 该条告警的ID
   */
  Id: number
  /**
   * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectId: number
  /**
   * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProjectName: string
  /**
   * 告警状态ID，0表示未恢复；1表示已恢复；2,3,5表示数据不足；4表示已失效
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: number
  /**
   * 告警状态，ALARM表示未恢复；OK表示已恢复；NO_DATA表示数据不足；NO_CONF表示已失效
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmStatus: string
  /**
   * 策略组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId: number
  /**
   * 策略组名
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName: string
  /**
   * 发生时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  FirstOccurTime: string
  /**
   * 持续时间，单位s
注意：此字段可能返回 null，表示取不到有效值。
   */
  Duration: number
  /**
   * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  LastOccurTime: string
  /**
   * 告警内容
注意：此字段可能返回 null，表示取不到有效值。
   */
  Content: string
  /**
   * 告警对象
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjName: string
  /**
   * 告警对象ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ObjId: string
  /**
   * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ViewName: string
  /**
   * VPC，只有CVM有
注意：此字段可能返回 null，表示取不到有效值。
   */
  Vpc: string
  /**
   * 指标ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricId: number
  /**
   * 指标名
注意：此字段可能返回 null，表示取不到有效值。
   */
  MetricName: string
  /**
   * 告警类型，0表示指标告警，2表示产品事件告警，3表示平台事件告警
注意：此字段可能返回 null，表示取不到有效值。
   */
  AlarmType: number
  /**
   * 地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region: string
  /**
   * 告警对象维度信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Dimensions: string
  /**
   * 通知方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  NotifyWay: Array<string>
  /**
   * 所属实例组信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceGroup: Array<InstanceGroup>
}

/**
 * CreateAlarmNotice返回参数结构体
 */
export interface CreateAlarmNoticeResponse {
  /**
   * 告警通知模板ID
   */
  NoticeId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警条件
 */
export interface Condition {
  /**
   * 告警通知频率
   */
  AlarmNotifyPeriod?: number
  /**
   * 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警）
   */
  AlarmNotifyType?: number
  /**
   * 检测方式
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcType?: string
  /**
   * 检测值
注意：此字段可能返回 null，表示取不到有效值。
   */
  CalcValue?: string
  /**
   * 持续时间，单位秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  ContinueTime?: string
  /**
   * 指标ID
   */
  MetricID?: number
  /**
   * 指标展示名称（对外）
   */
  MetricDisplayName?: string
  /**
   * 周期
   */
  Period?: number
  /**
   * 规则ID
   */
  RuleID?: number
  /**
   * 指标单位
   */
  Unit?: string
  /**
   * 是否为高级指标，0：否；1：是
   */
  IsAdvanced?: number
  /**
   * 是否开通高级指标，0：否；1：是
   */
  IsOpen?: number
  /**
   * 产品ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ProductId?: string
  /**
   * 告警分级阈值配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  HierarchicalValue?: AlarmHierarchicalValue
  /**
   * 指标类型，用于区分动态指标
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuleType?: string
}

/**
 * DeleteGrafanaInstance返回参数结构体
 */
export interface DeleteGrafanaInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 托管prometheus agent概览
 */
export interface PrometheusAgentOverview {
  /**
   * 集群类型
   */
  ClusterType?: string
  /**
   * 集群id
   */
  ClusterId?: string
  /**
   * agent状态
normal = 正常
abnormal = 异常
   */
  Status?: string
  /**
   * 集群名称
   */
  ClusterName?: string
  /**
   * 额外labels
本集群的所有指标都会带上这几个label
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExternalLabels?: Array<Label>
  /**
   * 集群所在地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  Region?: string
  /**
   * 集群所在VPC ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 记录关联等操作的失败信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedReason?: string
  /**
   * agent名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 是否已开启公网访问，true 开启，false 未开启
注意：此字段可能返回 null，表示取不到有效值。
   */
  EnableExternal?: boolean
  /**
   * 采集agent期望pod数
注意：此字段可能返回 null，表示取不到有效值。
   */
  DesiredAgentNum?: number
  /**
   * 采集agent已正常启动pod数
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadyAgentNum?: number
}

/**
 * 查询过滤参数
 */
export interface Filter {
  /**
   * 过滤方式（=, !=, in）
   */
  Type?: string
  /**
   * 过滤维度名
   */
  Key?: string
  /**
   * 过滤值，in过滤方式用逗号分割多个值
   */
  Value?: string
  /**
   * 过滤条件名称
   */
  Name?: string
  /**
   * 过滤条件取值范围
   */
  Values?: Array<string>
}

/**
 * DescribeProductEventList返回的Events里的GroupInfo
 */
export interface DescribeProductEventListEventsGroupInfo {
  /**
   * 策略ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId: number
  /**
   * 策略名
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName: string
}

/**
 * UpdatePrometheusAlertGroup返回参数结构体
 */
export interface UpdatePrometheusAlertGroupResponse {
  /**
   * 更新的告警分组ID，满足正则表达式`alert-[a-z0-9]{8}`
   */
  GroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSSOAccount返回参数结构体
 */
export interface CreateSSOAccountResponse {
  /**
   * 已添加的用户 UIN
   */
  UserId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdatePrometheusScrapeJob返回参数结构体
 */
export interface UpdatePrometheusScrapeJobResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmPolicies请求参数结构体
 */
export interface DescribeAlarmPoliciesRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 页数，从 1 开始计数，默认 1
   */
  PageNumber?: number
  /**
   * 每页的数量，取值1~100，默认20
   */
  PageSize?: number
  /**
   * 按策略名称模糊搜索
   */
  PolicyName?: string
  /**
   * 根据监控类型过滤 不选默认查所有类型 "MT_QCE"=云产品监控,当Dimension不为空时，该项为必填项
   */
  MonitorTypes?: Array<string>
  /**
   * 根据命名空间过滤，不同策略类型的值详见
[策略类型列表](https://cloud.tencent.com/document/product/248/50397)当Dimension不为空时，该项为必填项
   */
  Namespaces?: Array<string>
  /**
   * 告警对象列表，JSON 字符串。外层数组，对应多个实例，内层为对象的维度。例如“云服务器-基础监控”可写为：
`[ {"Dimensions": {"unInstanceId": "ins-qr8d555g"}}, {"Dimensions": {"unInstanceId": "ins-qr8d555h"}} ]`
具体也可以参考下方的示例 2。

不同云产品参数示例详见 [维度信息Dimensions列表](https://cloud.tencent.com/document/product/248/50397)

注意：如果NeedCorrespondence传入1，即需要返回策略与实例对应关系，请传入不多于20个告警对象维度，否则容易请求超时
   */
  Dimensions?: string
  /**
   * 根据接收人搜索，可以使用“访问管理”的 [拉取子用户 ListUsers](https://cloud.tencent.com/document/product/598/34587) 接口获取用户列表 或 [查询子用户 GetUser](https://cloud.tencent.com/document/product/598/34590) 接口查询子用户详情，此处填入返回结果中的 `Uid` 字段
   */
  ReceiverUids?: Array<number | bigint>
  /**
   * 根据接收组搜索，可以使用“访问管理”的 [查询用户组列表 ListGroups](https://cloud.tencent.com/document/product/598/34589) 接口获取用户组列表 或 [列出用户关联的用户组 ListGroupsForUser](https://cloud.tencent.com/document/product/598/34588) 查询某个子用户所在的用户组列表 ，此处填入返回结果中的 `GroupId ` 字段
   */
  ReceiverGroups?: Array<number | bigint>
  /**
   * 根据默认策略筛选 不传展示全部策略 DEFAULT=展示默认策略 NOT_DEFAULT=展示非默认策略
   */
  PolicyType?: Array<string>
  /**
   * 排序字段，例如按照最后修改时间排序，Field: "UpdateTime"
   */
  Field?: string
  /**
   * 排序顺序：升序：ASC  降序：DESC
   */
  Order?: string
  /**
   * 策略所属项目的id数组，可在此页面查看
[项目管理](https://console.cloud.tencent.com/project)
   */
  ProjectIds?: Array<number | bigint>
  /**
   * 通知模板的id列表，可查询通知模板列表获取。
可使用 [查询通知模板列表](https://cloud.tencent.com/document/product/248/51280) 接口查询。
   */
  NoticeIds?: Array<string>
  /**
   * 根据触发条件筛选 不传展示全部策略 STATIC=展示静态阈值策略 DYNAMIC=展示动态阈值策略
   */
  RuleTypes?: Array<string>
  /**
   * 告警启停筛选，[1]：启用   [0]：停止，全部[0, 1]
   */
  Enable?: Array<number | bigint>
  /**
   * 传 1 查询未配置通知规则的告警策略；不传或传其他数值，查询所有策略。
   */
  NotBindingNoticeRule?: number
  /**
   * 实例分组id
   */
  InstanceGroupId?: number
  /**
   * 是否需要策略与入参过滤维度参数的对应关系，1：是  0：否，默认为0
   */
  NeedCorrespondence?: number
  /**
   * 按照触发任务（例如弹性伸缩）过滤策略。最多10个
   */
  TriggerTasks?: Array<AlarmPolicyTriggerTask>
  /**
   * 根据一键告警策略筛选 不传展示全部策略 ONECLICK=展示一键告警策略 NOT_ONECLICK=展示非一键告警策略
   */
  OneClickPolicyType?: Array<string>
  /**
   * 返回结果过滤掉绑定全部对象的策略，1代表需要过滤，0则无需过滤
   */
  NotBindAll?: number
  /**
   * 返回结果过滤掉关联实例为实例分组的策略，1代表需要过滤，0则无需过滤
   */
  NotInstanceGroup?: number
  /**
   * 策略根据标签过滤
   */
  Tags?: Array<Tag>
  /**
   * prom实例id，自定义指标策略时会用到
   */
  PromInsId?: string
  /**
   * 根据排班表搜索
   */
  ReceiverOnCallFormIDs?: Array<string>
  /**
   * 通知内容模板ID筛选
   */
  NoticeContentTmplIDs?: Array<string>
}

/**
 * UpdateSSOAccount请求参数结构体
 */
export interface UpdateSSOAccountRequest {
  /**
   * Grafana 实例 ID，例如：grafana-abcdefgh
   */
  InstanceId: string
  /**
   * 用户账号 ID ，例如：10000000
   */
  UserId: string
  /**
   * 权限
   */
  Role?: Array<GrafanaAccountRole>
  /**
   * 备注
   */
  Notes?: string
}

/**
 * DescribePolicyConditionList.ConfigManual.StatType
 */
export interface DescribePolicyConditionListConfigManualStatType {
  /**
   * 数据聚合方式，周期5秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  P5: string
  /**
   * 数据聚合方式，周期10秒
注意：此字段可能返回 null，表示取不到有效值。
   */
  P10: string
  /**
   * 数据聚合方式，周期1分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  P60: string
  /**
   * 数据聚合方式，周期5分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  P300: string
  /**
   * 数据聚合方式，周期10分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  P600: string
  /**
   * 数据聚合方式，周期30分钟
注意：此字段可能返回 null，表示取不到有效值。
   */
  P1800: string
  /**
   * 数据聚合方式，周期1小时
注意：此字段可能返回 null，表示取不到有效值。
   */
  P3600: string
  /**
   * 数据聚合方式，周期1天
注意：此字段可能返回 null，表示取不到有效值。
   */
  P86400: string
}

/**
 * export 集成配置
 */
export interface IntegrationConfiguration {
  /**
   * 名字
   */
  Name?: string
  /**
   * 类型
   */
  Kind?: string
  /**
   * 内容
   */
  Content?: string
  /**
   * 状态
   */
  Status?: number
  /**
   * 实例类型
   */
  Category?: string
  /**
   * 实例描述
   */
  InstanceDesc?: string
  /**
   * dashboard 的 URL
   */
  GrafanaDashboardURL?: string
}

/**
 * DescribePrometheusAgents返回参数结构体
 */
export interface DescribePrometheusAgentsResponse {
  /**
   * Agent 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  AgentSet?: Array<PrometheusAgent>
  /**
   * Agent 总量
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyPrometheusGlobalNotification返回参数结构体
 */
export interface ModifyPrometheusGlobalNotificationResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CleanGrafanaInstance返回参数结构体
 */
export interface CleanGrafanaInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAlertRule请求参数结构体
 */
export interface CreateAlertRuleRequest {
  /**
   * Prometheus 实例 ID，例如：prom-abcd1234
   */
  InstanceId: string
  /**
   * 规则名称
   */
  RuleName: string
  /**
   * 规则表达式，可参考<a href="https://cloud.tencent.com/document/product/1416/56008">告警规则说明</a>
   */
  Expr: string
  /**
   * 告警通知模板 ID 列表
   */
  Receivers: Array<string>
  /**
   * 规则状态码，取值如下：
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
   */
  RuleState?: number
  /**
   * 规则报警持续时间
   */
  Duration?: string
  /**
   * 标签列表
   */
  Labels?: Array<PrometheusRuleKV>
  /**
   * 注释列表。

告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。
   */
  Annotations?: Array<PrometheusRuleKV>
  /**
   * 报警策略模板分类
   */
  Type?: string
}

/**
 * ModifyPrometheusRecordRuleYaml返回参数结构体
 */
export interface ModifyPrometheusRecordRuleYamlResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusScrapeJobs返回参数结构体
 */
export interface DeletePrometheusScrapeJobsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmPolicy请求参数结构体
 */
export interface DescribeAlarmPolicyRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string
  /**
   * 告警策略ID
   */
  PolicyId: string
}

/**
 * UninstallGrafanaDashboard请求参数结构体
 */
export interface UninstallGrafanaDashboardRequest {
  /**
   * 实例 ID
   */
  InstanceId: string
  /**
   * Prometheus 集成项 Code，删除对应的 Dashboard，Code 如下：
<li>spring_mvc</li>
<li>mysql</li>
<li>go</li>
<li>redis</li>
<li>jvm</li>
<li>pgsql</li>
<li>mongo</li>
<li>kafka</li>
<li>es</li>
<li>flink</li>
<li>blackbox</li>
<li>consule</li>
<li>memcached</li>
<li>zk</li>
<li>tps</li>
<li>istio</li>
<li>etcd</li>
   */
  IntegrationCodes?: Array<string>
}

/**
 * UpdateGrafanaIntegration请求参数结构体
 */
export interface UpdateGrafanaIntegrationRequest {
  /**
   * 集成 ID，可在实例详情-云产品集成-集成列表查看。例如：integration-abcd1234
   */
  IntegrationId: string
  /**
   * Grafana 实例 ID，例如：grafana-12345678
   */
  InstanceId: string
  /**
   * 集成类型，可在实例详情-云产品集成-集成列表查看。例如：tencent-cloud-prometheus
   */
  Kind: string
  /**
   * 集成内容，请查看示例
   */
  Content: string
}

/**
 * CreatePrometheusAlertGroup返回参数结构体
 */
export interface CreatePrometheusAlertGroupResponse {
  /**
   * 创建的告警分组ID，满足正则表达式`alert-[a-z0-9]{8}`
   */
  GroupId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeletePrometheusRecordRuleYaml请求参数结构体
 */
export interface DeletePrometheusRecordRuleYamlRequest {
  /**
   * 实例id
   */
  InstanceId: string
  /**
   * 聚合规则列表
   */
  Names: Array<string>
}

/**
 * DescribeAlarmNoticeCallbacks请求参数结构体
 */
export interface DescribeAlarmNoticeCallbacksRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string
}

/**
 * DescribeStatisticData请求参数结构体
 */
export interface DescribeStatisticDataRequest {
  /**
   * 所属模块，固定值，为monitor
   */
  Module: string
  /**
   * 命名空间，目前支持QCE/TKE2(Conditions必填),QCE/KEEWIDB,QCE/CAMP
   */
  Namespace: string
  /**
   * 指标名列表，相关指标信息可参考对应 [云产品指标文档](https://cloud.tencent.com/document/product/248/62458)
   */
  MetricNames: Array<string>
  /**
   * 维度条件，操作符支持=、in，详情请参考对应 [指标维度信息](https://cloud.tencent.com/document/product/248/53821)
   */
  Conditions?: Array<MidQueryCondition>
  /**
   * 统计粒度。默认取值为300，单位为s；可选的值为60、300、3600、86400
受存储时长限制，统计粒度与统计的时间范围有关：
60s：EndTime-StartTime<12小时，且StartTime距当前时间不能超过15天；
300s：EndTime-StartTime<3天，且StartTime距当前时间不能超过31天；
3600s：EndTime-StartTime<30天，且StartTime距当前时间不能超过93天；
86400s：EndTime-StartTime<186天，且StartTime距当前时间不能超过186天。
   */
  Period?: number
  /**
   * 起始时间，默认为当前时间，如2020-12-08T19:51:23+08:00
   */
  StartTime?: string
  /**
   * 结束时间，默认为当前时间，如2020-12-08T19:51:23+08:00
   */
  EndTime?: string
  /**
   * 按指定维度groupBy
   */
  GroupBys?: Array<string>
}

/**
 * Grafana 告警渠道
 */
export interface GrafanaNotificationChannel {
  /**
   * 渠道 ID
   */
  ChannelId?: string
  /**
   * 渠道名
   */
  ChannelName?: string
  /**
   * 告警通道模板 ID 数组
   */
  Receivers?: Array<string>
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 更新时间
   */
  UpdatedAt?: string
  /**
   * 默认生效组织，已废弃，请使用 OrganizationIds
   */
  OrgId?: string
  /**
   * 额外生效组织，已废弃，请使用 OrganizationIds
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraOrgIds?: Array<string>
  /**
   * 生效组织，已废弃，请使用 OrganizationIds
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrgIds?: Array<string>
  /**
   * 告警渠道的所有生效组织
注意：此字段可能返回 null，表示取不到有效值。
   */
  OrganizationIds?: Array<string>
}

/**
 * Prometheus告警规则分组信息
 */
export interface PrometheusAlertGroupSet {
  /**
   * 告警分组ID，满足正则表达式`alert-[a-z0-9]{8}`
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupId?: string
  /**
   * 告警分组名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  GroupName?: string
  /**
   * 云监控告警模板ID ，返回告警模板转换后的notice ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  AMPReceivers?: Array<string>
  /**
   * 自定义告警模板
注意：此字段可能返回 null，表示取不到有效值。
   */
  CustomReceiver?: PrometheusAlertCustomReceiver
  /**
   * 告警通知间隔
注意：此字段可能返回 null，表示取不到有效值。
   */
  RepeatInterval?: string
  /**
   * 若告警分组通过模板创建，则返回模板ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TemplateId?: string
  /**
   * 分组内告警规则详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  Rules?: Array<PrometheusAlertGroupRuleSet>
  /**
   * 分组创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreatedAt?: string
  /**
   * 分组更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdatedAt?: string
}

/**
 * SetDefaultAlarmPolicy请求参数结构体
 */
export interface SetDefaultAlarmPolicyRequest {
  /**
   * 模块名，固定值 monitor
   */
  Module: string
  /**
   * 告警策略 ID
   */
  PolicyId: string
}

/**
 * 告警通知中的推送CLS操作
 */
export interface CLSNotice {
  /**
   * 地域
   */
  Region: string
  /**
   * 日志集Id
   */
  LogSetId: string
  /**
   * 主题Id
   */
  TopicId: string
  /**
   * 启停状态，可不传，默认启用。0=停用，1=启用
   */
  Enable?: number
}

/**
 * 日志告警请求信息
 */
export interface LogAlarmReq {
  /**
   * apm实例id
   */
  InstanceId: string
  /**
   * 检索条件信息
   */
  Filter: Array<LogFilterInfo>
  /**
   * 告警合并开启/暂停
   */
  AlarmMerge: string
  /**
   * 告警合并时间
   */
  AlarmMergeTime: string
}

/**
 * TerminatePrometheusInstances返回参数结构体
 */
export interface TerminatePrometheusInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRemoteURLs返回参数结构体
 */
export interface ModifyRemoteURLsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMonitorResourceInfo返回参数结构体
 */
export interface DescribeMonitorResourceInfoResponse {
  /**
   * 电话告警数量
   */
  PhoneAlarmNumber: number
  /**
   * 高级指标数量
   */
  AdvancedMetricNumber: number
  /**
   * API调用量
   */
  APIUsageNumber: number
  /**
   * 告警短信数量
   */
  AlarmSMSNumber: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateSSOAccount返回参数结构体
 */
export interface UpdateSSOAccountResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunPrometheusInstance请求参数结构体
 */
export interface RunPrometheusInstanceRequest {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 子网ID，默认使用实例所用子网初始化，也可通过该参数传递新的子网ID初始化
   */
  SubnetId?: string
}

/**
 * UpdateAlertRuleState请求参数结构体
 */
export interface UpdateAlertRuleStateRequest {
  /**
   * 规则 ID 列表
   */
  RuleIds: Array<string>
  /**
   * Prometheus 实例 ID
   */
  InstanceId: string
  /**
   * 规则状态码，取值如下：
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
默认状态码为 2 启用。
   */
  RuleState: number
}

/**
 * SetDefaultAlarmPolicy返回参数结构体
 */
export interface SetDefaultAlarmPolicyResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindingPolicyObject返回参数结构体
 */
export interface BindingPolicyObjectResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
