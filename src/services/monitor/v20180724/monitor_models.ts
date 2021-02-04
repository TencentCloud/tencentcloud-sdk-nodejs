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
  RegionId: string

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
 * ModifyAlarmPolicyNotice返回参数结构体
 */
export interface ModifyAlarmPolicyNoticeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

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
   * 如果通过模版创建，需要传入模版中该指标的对应RuleId
   */
  RuleId?: number
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
   * 产品类型过滤，比如"cvm"表示云服务器
   */
  ProductName?: Array<string>

  /**
   * 事件名称过滤，比如"guest_reboot"表示机器重启
   */
  EventName?: Array<string>

  /**
   * 影响对象，比如ins-19708ino
   */
  InstanceId?: Array<string>

  /**
   * 维度过滤，比如外网IP:10.0.0.1
   */
  Dimensions?: Array<DescribeProductEventListDimensions>

  /**
   * 地域过滤，比如gz
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
 * DescribeServiceDiscovery返回参数结构体
 */
export interface DescribeServiceDiscoveryResponse {
  /**
      * 返回服务发现列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ServiceDiscoverySet?: Array<ServiceDiscoveryItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindingPolicyObject请求参数结构体
 */
export interface BindingPolicyObjectRequest {
  /**
   * 策略组id，如传入PolicyId则该字段可传入任意值
   */
  GroupId: number

  /**
   * 必填。固定值"monitor"
   */
  Module: string

  /**
   * 实例分组ID
   */
  InstanceGroupId?: number

  /**
   * 需要绑定的对象维度信息
   */
  Dimensions?: Array<BindingPolicyObjectDimension>

  /**
   * 告警策略ID，使用此字段时GroupId可传入任意值
   */
  PolicyId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PutMonitorData返回参数结构体
 */
export interface PutMonitorDataResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * DeleteServiceDiscovery返回参数结构体
 */
export interface DeleteServiceDiscoveryResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
 * CreateAlarmPolicy请求参数结构体
 */
export interface CreateAlarmPolicyRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string

  /**
   * 策略名称，不超过20字符
   */
  PolicyName: string

  /**
   * 监控类型 MT_QCE=云产品监控
   */
  MonitorType: string

  /**
   * 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device
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
   * 项目 Id -1=无项目 0=默认项目，可不传 默认为-1
   */
  ProjectId?: number

  /**
   * 指标触发条件
   */
  Condition?: AlarmPolicyCondition

  /**
   * 事件触发条件
   */
  EventCondition?: AlarmPolicyEventCondition

  /**
   * 通知规则 Id 列表，由 DescribeAlarmNotices 获得
   */
  NoticeIds?: Array<string>

  /**
   * 触发任务列表
   */
  TriggerTasks?: Array<AlarmPolicyTriggerTask>
}

/**
 * DescribeAlarmEvents返回参数结构体
 */
export interface DescribeAlarmEventsResponse {
  /**
   * 告警事件列表
   */
  Events?: Array<AlarmEvent>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmPolicyNotice请求参数结构体
 */
export interface ModifyAlarmPolicyNoticeRequest {
  /**
   * 模块名，这里填“monitor”
   */
  Module: string

  /**
   * 告警策略 ID
   */
  PolicyId: string

  /**
   * 告警通知模板 ID 列表
   */
  NoticeIds?: Array<string>
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
}

/**
 * PutMonitorData请求参数结构体
 */
export interface PutMonitorDataRequest {
  /**
   * 一组指标和数据
   */
  Metrics: Array<MetricDatum>

  /**
   * 上报时自行指定的 IP
   */
  AnnounceIp?: string

  /**
   * 上报时自行指定的时间戳
   */
  AnnounceTimestamp?: number

  /**
   * 上报时自行指定的 IP 或 产品实例ID
   */
  AnnounceInstance?: string
}

/**
 * CreatePolicyGroup返回参数结构体
 */
export interface CreatePolicyGroupResponse {
  /**
   * 创建成功的策略组Id
   */
  GroupId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmPolicyTasks返回参数结构体
 */
export interface ModifyAlarmPolicyTasksResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Keys: Array<number>

  /**
   * 是否必须
   */
  Need: boolean
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
 * GetMonitorData请求参数结构体
 */
export interface GetMonitorDataRequest {
  /**
   * 命名空间，如QCE/CVM。各个云产品的详细命名空间说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档
   */
  Namespace: string

  /**
   * 指标名称，如CPUUsage。各个云产品的详细指标说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的指标英文名即为MetricName
   */
  MetricName: string

  /**
   * 实例对象的维度组合，格式为key-value键值对形式的集合。如[{"Name":"InstanceId","Value":"ins-j0hk02zo"}]。各个云产品的维度请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的维度列即为维度组合的key,value为key对应的值
   */
  Instances: Array<Instance>

  /**
   * 监控统计周期，如60。默认为取值为300，单位为s。每个指标支持的统计周期不一定相同，各个云产品支持的统计周期请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的统计周期列即为支持的统计周期
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
}

/**
 * 监控数据点
 */
export interface DataPoint {
  /**
   * 实例对象维度组合
   */
  Dimensions: Array<Dimension>

  /**
   * 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了
   */
  Timestamps: Array<number>

  /**
   * 监控值数组，该数组和Timestamps一一对应
   */
  Values: Array<number>
}

/**
 * DescribeAlarmPolicies返回参数结构体
 */
export interface DescribeAlarmPoliciesResponse {
  /**
   * 策略总数
   */
  TotalCount: number

  /**
   * 策略数组
   */
  Policies: Array<AlarmPolicy>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 告警条件模版
 */
export interface ConditionsTemp {
  /**
      * 模版名称
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
 * SendCustomAlarmMsg请求参数结构体
 */
export interface SendCustomAlarmMsgRequest {
  /**
   * 接口模块名，当前取值monitor
   */
  Module: string

  /**
   * 消息策略ID，在云监控自定义消息页面配置
   */
  PolicyId: string

  /**
   * 用户想要发送的自定义消息内容
   */
  Msg: string
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
  Keys: Array<number>

  /**
   * 是否必须
   */
  Need: boolean
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
   * 策略组id，如传入PolicyId则该字段可传入任意值
   */
  GroupId: number

  /**
   * 待删除对象实例的唯一id列表，UniqueId从调用[获取已绑定对象列表接口](https://cloud.tencent.com/document/api/248/40570)的出参的List中得到
   */
  UniqueId: Array<string>

  /**
   * 实例分组id, 如果按实例分组删除的话UniqueId参数是无效的
   */
  InstanceGroupId?: number

  /**
   * 告警策略ID，使用此字段时GroupId可传入任意值
   */
  PolicyId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * 维度信息
 */
export interface DimensionsDesc {
  /**
   * 维度名数组
   */
  Dimensions: Array<string>
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
   * 回调通知 最多3个
   */
  URLNotices?: Array<URLNotice>
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
   * 服务发现配置信息
   */
  Yaml: string
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
 * 告警策略详情
 */
export interface AlarmPolicy {
  /**
      * 告警策略 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyId: string

  /**
      * 告警策略名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyName: string

  /**
      * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Remark: string

  /**
      * 监控类型 MT_QCE=云产品监控
注意：此字段可能返回 null，表示取不到有效值。
      */
  MonitorType: string

  /**
      * 启停状态 0=停用 1=启用
注意：此字段可能返回 null，表示取不到有效值。
      */
  Enable: number

  /**
      * 策略组绑定的实例数
注意：此字段可能返回 null，表示取不到有效值。
      */
  UseSum: number

  /**
      * 项目 Id -1=无项目 0=默认项目
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectId: number

  /**
      * 项目名
注意：此字段可能返回 null，表示取不到有效值。
      */
  ProjectName: string

  /**
      * 告警策略类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  Namespace: string

  /**
      * 触发条件模板 Id
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConditionTemplateId: string

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

  /**
      * 通知规则 id 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoticeIds: Array<string>

  /**
      * 通知规则 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Notices: Array<AlarmNotice>

  /**
      * 触发任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TriggerTasks: Array<AlarmPolicyTriggerTask>

  /**
      * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConditionsTemp: ConditionsTemp

  /**
      * 最后编辑的用户uin
注意：此字段可能返回 null，表示取不到有效值。
      */
  LastEditUin: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdateTime: number

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InsertTime: number

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: Array<string>

  /**
      * namespace显示名字
注意：此字段可能返回 null，表示取不到有效值。
      */
  NamespaceShowName: string

  /**
      * 是否默认策略，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsDefault: number

  /**
      * 能否设置默认策略，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
      */
  CanSetDefault: number

  /**
      * 实例分组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceGroupId: number

  /**
      * 实例分组总实例数
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceSum: number

  /**
      * 实例分组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceGroupName: string

  /**
      * 触发条件类型 STATIC=静态阈值 DYNAMIC=动态类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleType: string

  /**
      * 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  OriginId: string

  /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagInstances: Array<TagInstance>
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
   * 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID
   */
  OriginId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAlarmReceivers返回参数结构体
 */
export interface ModifyAlarmReceiversResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAllNamespaces返回参数结构体
 */
export interface DescribeAllNamespacesResponse {
  /**
   * 云产品的告警策略类型，已废弃
   */
  QceNamespaces?: CommonNamespace

  /**
   * 其他告警策略类型，已废弃
   */
  CustomNamespaces?: CommonNamespace

  /**
   * 云产品的告警策略类型
   */
  QceNamespacesNew?: Array<CommonNamespace>

  /**
   * 其他告警策略类型，暂不支持
   */
  CustomNamespacesNew?: Array<CommonNamespace>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAlarmNotices返回参数结构体
 */
export interface DeleteAlarmNoticesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云监控支持的产品简要信息
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
 * 告警策略触发条件
 */
export interface AlarmPolicyRule {
  /**
      * 指标名
注意：此字段可能返回 null，表示取不到有效值。
      */
  MetricName?: string

  /**
      * 秒数 统计周期
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
注意：此字段可能返回 null，表示取不到有效值。
      */
  Operator?: string

  /**
      * 阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value?: string

  /**
      * 周期数 持续通知周期 1=持续1个周期 2=持续2个周期...
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
      * 触发条件类型 STATIC=静态阈值 DYNAMIC=动态阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
  RuleType?: string
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
 * ModifyAlarmPolicyCondition返回参数结构体
 */
export interface ModifyAlarmPolicyConditionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例对象的维度组合
 */
export interface Dimension {
  /**
   * 实例维度名称
   */
  Name: string

  /**
   * 实例维度值
   */
  Value: string
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
  Namespace: string

  /**
   * 指标名
   */
  MetricName: string

  /**
   * 指标展示名
   */
  Description: string

  /**
   * 最小值
   */
  Min: number

  /**
   * 最大值
   */
  Max: number

  /**
   * 维度列表
   */
  Dimensions: Array<string>

  /**
   * 单位
   */
  Unit: string

  /**
      * 指标配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  MetricConfig: MetricConfig
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
 * DescribeAlarmHistories返回参数结构体
 */
export interface DescribeAlarmHistoriesResponse {
  /**
   * 总数
   */
  TotalCount: number

  /**
   * 告警历史列表
   */
  Histories: Array<AlarmHistory>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
}

/**
 * 云监控告警通知模板 - 用户通知详情
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
      * 通知渠道列表 EMAIL=邮件 SMS=短信 CALL=电话 WECHAT=微信
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoticeWay: Array<string>

  /**
      * 用户 uid 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserIds?: Array<number>

  /**
      * 用户组 group id 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupIds?: Array<number>

  /**
      * 电话轮询列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PhoneOrder?: Array<number>

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
 * DescribeAlarmNoticeCallbacks返回参数结构体
 */
export interface DescribeAlarmNoticeCallbacksResponse {
  /**
      * 告警回调通知
注意：此字段可能返回 null，表示取不到有效值。
      */
  URLNotices?: Array<URLNotice>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 指标触发条件
   */
  Condition?: AlarmPolicyCondition

  /**
   * 事件触发条件
   */
  EventCondition?: AlarmPolicyEventCondition
}

/**
 * ModifyAlarmPolicyStatus返回参数结构体
 */
export interface ModifyAlarmPolicyStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 维度信息
   */
  Dimensions?: string

  /**
   * 事件维度信息
   */
  EventDimensions?: string
}

/**
 * DescribeAlarmPolicy返回参数结构体
 */
export interface DescribeAlarmPolicyResponse {
  /**
   * 策略详情
   */
  Policy?: AlarmPolicy

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Period: Array<number>

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
   * 服务发现配置信息
   */
  Yaml: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
   * 起始时间，默认一天前的时间戳
   */
  StartTime?: number

  /**
   * 结束时间，默认当前时间戳
   */
  EndTime?: number

  /**
   * 根据监控类型过滤 不选默认查所有类型 "MT_QCE"=云产品监控 "
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
   */
  ProjectIds?: Array<number>

  /**
   * 根据实例组ID过滤
   */
  InstanceGroupIds?: Array<number>

  /**
   * 根据策略类型过滤
   */
  Namespaces?: Array<MonitorTypeNamespace>

  /**
   * 根据指标名过滤
   */
  MetricNames?: Array<string>

  /**
   * 根据策略名称模糊搜索
   */
  PolicyName?: string

  /**
   * 根据告警内容模糊搜索
   */
  Content?: string

  /**
   * 根据接收人搜索
   */
  ReceiverUids?: Array<number>

  /**
   * 根据接收组搜索
   */
  ReceiverGroups?: Array<number>

  /**
   * 根据告警策略 Id 列表搜索
   */
  PolicyIds?: Array<string>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Keys: Array<number>

  /**
   * 是否必须
   */
  Need: boolean
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
 * DeletePolicyGroup请求参数结构体
 */
export interface DeletePolicyGroupRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string

  /**
   * 策略组id
   */
  GroupId: Array<number>
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
 * DescribeBindingPolicyObjectList返回参数结构体
 */
export interface DescribeBindingPolicyObjectListResponse {
  /**
      * 绑定的对象实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  List?: Array<DescribeBindingPolicyObjectListInstance>

  /**
   * 绑定的对象实例总数
   */
  Total?: number

  /**
   * 未屏蔽的对象实例数
   */
  NoShieldedSum?: number

  /**
      * 绑定的实例分组信息，没有绑定实例分组则为空
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceGroup?: DescribeBindingPolicyObjectListInstanceGroup

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeBindingPolicyObjectList请求参数结构体
 */
export interface DescribeBindingPolicyObjectListRequest {
  /**
   * 固定值，为"monitor"
   */
  Module: string

  /**
   * 策略组id
   */
  GroupId: number

  /**
   * 分页参数，每页返回的数量，取值1~100，默认20
   */
  Limit?: number

  /**
   * 分页参数，页偏移量，从0开始计数，默认0
   */
  Offset?: number

  /**
   * 筛选对象的维度信息
   */
  Dimensions?: Array<DescribeBindingPolicyObjectListDimension>
}

/**
 * UnBindingPolicyObject返回参数结构体
 */
export interface UnBindingPolicyObjectResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
  Keys: Array<number>

  /**
   * 是否必须
   */
  Need: boolean
}

/**
 * DescribeAllNamespaces请求参数结构体
 */
export interface DescribeAllNamespacesRequest {
  /**
   * 根据使用场景过滤 "ST_DASHBOARD"=Dashboard类型 或 "ST_ALARM"=告警类型
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
 * DescribeAlarmMetrics返回参数结构体
 */
export interface DescribeAlarmMetricsResponse {
  /**
   * 告警指标列表
   */
  Metrics?: Array<Metric>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 根据监控类型过滤 不选默认查所有类型 "MT_QCE"=云产品监控
   */
  MonitorTypes?: Array<string>

  /**
   * 根据命名空间过滤
   */
  Namespaces?: Array<string>

  /**
   * 告警对象列表
   */
  Dimensions?: string

  /**
   * 根据接收人搜索
   */
  ReceiverUids?: Array<number>

  /**
   * 根据接收组搜索
   */
  ReceiverGroups?: Array<number>

  /**
   * 根据默认策略筛选 不传展示全部策略 DEFAULT=展示默认策略 NOT_DEFAULT=展示非默认策略
   */
  PolicyType?: Array<string>

  /**
   * 排序字段
   */
  Field?: string

  /**
   * 排序顺序：升序：ASC  降序：DESC
   */
  Order?: string

  /**
   * 项目id数组
   */
  ProjectIds?: Array<number>

  /**
   * 告警通知id列表
   */
  NoticeIds?: Array<string>

  /**
   * 根据触发条件筛选 不传展示全部策略 STATIC=展示静态阈值策略 DYNAMIC=展示动态阈值策略
   */
  RuleTypes?: Array<string>

  /**
   * 启停，1：启用   0：停止
   */
  Enable?: Array<number>

  /**
   * 是否未配置通知规则，1：未配置，0：配置
   */
  NotBindingNoticeRule?: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * ModifyAlarmPolicyInfo返回参数结构体
 */
export interface ModifyAlarmPolicyInfoResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警通知模板详情
 */
export interface AlarmNotice {
  /**
      * 告警通知模板 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  Id: string

  /**
      * 告警通知模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 上次修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdatedAt: string

  /**
      * 上次修改人
注意：此字段可能返回 null，表示取不到有效值。
      */
  UpdatedBy: string

  /**
      * 告警通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=全部通知
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoticeType: string

  /**
      * 用户通知列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  UserNotices: Array<UserNotice>

  /**
      * 回调通知列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  URLNotices: Array<URLNotice>

  /**
      * 是否是系统预设通知模板 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsPreset: number

  /**
      * 通知语言 zh-CN=中文 en-US=英文
注意：此字段可能返回 null，表示取不到有效值。
      */
  NoticeLanguage: string

  /**
      * 告警通知模板绑定的告警策略ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  PolicyIds: Array<string>
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
  Period: Array<number>

  /**
   * 允许配置的持续周期个数
   */
  ContinuePeriod: Array<number>
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
 * ModifyAlarmNotice返回参数结构体
 */
export interface ModifyAlarmNoticeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  Events?: Array<DescribeProductEventListEvents>

  /**
   * 事件统计
   */
  OverView?: DescribeProductEventListOverView

  /**
      * 事件总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警历史数据
 */
export interface AlarmHistory {
  /**
   * 告警历史Id
   */
  AlarmId: string

  /**
   * 监控类型
   */
  MonitorType: string

  /**
   * 策略类型
   */
  Namespace: string

  /**
   * 告警对象
   */
  AlarmObject: string

  /**
   * 告警内容
   */
  Content: string

  /**
   * 时间戳，首次出现时间
   */
  FirstOccurTime: number

  /**
   * 时间戳，最后出现时间
   */
  LastOccurTime: number

  /**
   * 告警状态，ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足
   */
  AlarmStatus: string

  /**
   * 告警策略 Id
   */
  PolicyId: string

  /**
   * 策略名称
   */
  PolicyName: string

  /**
   * 基础产品告警的告警对象所属网络
   */
  VPC: string

  /**
   * 项目 Id
   */
  ProjectId: number

  /**
   * 项目名字
   */
  ProjectName: string

  /**
   * 告警对象所属实例组
   */
  InstanceGroup: Array<InstanceGroups>

  /**
   * 接收人列表
   */
  ReceiverUids: Array<number>

  /**
   * 接收组列表
   */
  ReceiverGroups: Array<number>

  /**
   * 告警渠道列表 SMS=短信 EMAIL=邮件 CALL=电话 WECHAT=微信
   */
  NoticeWays: Array<string>

  /**
   * 兼容告警1.0策略组 Id
   */
  OriginId: string

  /**
   * 告警类型
   */
  AlarmType: string

  /**
   * 事件Id
   */
  EventId: number

  /**
   * 地域
   */
  Region: string

  /**
   * 策略是否存在 0=不存在 1=存在
   */
  PolicyExists: number
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云监控告警通知模板 - 回调通知详情
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
   * 策略组所属视图的名称，若通过模版创建，可不传入
   */
  ViewName?: string

  /**
   * 策略组所属项目Id，会进行鉴权操作
   */
  ProjectId?: number

  /**
   * 模版策略组Id, 通过模版创建时才需要传
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
   * 是否为后端调用。当且仅当值为1时，后台拉取策略模版中的规则填充入Conditions以及EventConditions字段
   */
  BackEndCall?: number

  /**
   * 指标告警规则的且或关系，0表示或规则(满足任意规则就告警)，1表示且规则(满足所有规则才告警)
   */
  IsUnionRule?: number
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
   * 如果通过模版创建，需要传入模版中该指标的对应RuleId
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
  ReceiverGroupList: Array<number>

  /**
   * 告警接收人id列表
   */
  ReceiverUserList: Array<number>

  /**
   * 告警时间段开始时间。范围[0,86400)，作为unix时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
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
  UidList: Array<number>

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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  ProjectIds?: Array<number>

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
  ProjectIds?: Array<number>

  /**
   * 根据策略类型过滤
   */
  ViewNames?: Array<string>

  /**
   * 根据告警状态过滤
   */
  AlarmStatus?: Array<number>

  /**
   * 根据告警对象过滤
   */
  ObjLike?: string

  /**
   * 根据实例组ID过滤
   */
  InstanceGroupIds?: Array<number>

  /**
   * 根据指标名过滤
   */
  MetricNames?: Array<string>
}

/**
 * UnBindingAllPolicyObject返回参数结构体
 */
export interface UnBindingAllPolicyObjectResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
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
  UserIds?: Array<number>

  /**
   * 接收组列表
   */
  GroupIds?: Array<number>
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
  AccidentType?: Array<number>

  /**
   * 根据事件过滤，1表示云服务器存储问题，2表示云服务器网络连接问题，3表示云服务器运行异常，202表示运营商网络抖动
   */
  AccidentEvent?: Array<number>

  /**
   * 根据事件状态过滤，0表示已恢复，1表示未恢复
   */
  AccidentStatus?: Array<number>

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
 * 指标名称和值的封装
 */
export interface MetricDatum {
  /**
   * 指标名称
   */
  MetricName: string

  /**
   * 指标的值
   */
  Value: number
}

/**
 * DescribeAlarmNotice返回参数结构体
 */
export interface DescribeAlarmNoticeResponse {
  /**
   * 告警通知模板详细信息
   */
  Notice?: AlarmNotice

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
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
 * DescribeStatisticData请求参数结构体
 */
export interface DescribeStatisticDataRequest {
  /**
   * 所属模块，固定值，为monitor
   */
  Module: string

  /**
   * 命名空间，目前只支持QCE/TKE
   */
  Namespace: string

  /**
   * 指标名列表
   */
  MetricNames: Array<string>

  /**
   * 维度条件，操作符支持=、in
   */
  Conditions?: Array<MidQueryCondition>

  /**
   * 统计粒度。默认取值为300，单位为s
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
   * 回调通知 最多3个
   */
  URLNotices?: Array<URLNotice>
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
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 接收人信息
 */
export interface ReceiverInfo {
  /**
   * 告警时间段开始时间。范围[0,86400)，作为unix时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
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
   * 电话告警接收者uid
   */
  UidList?: Array<number>

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
   * 接收组列表。通过平台接口查询到的接收组id列表
   */
  ReceiverGroupList?: Array<number>

  /**
   * 接收人列表。通过平台接口查询到的接收人id列表
   */
  ReceiverUserList?: Array<number>

  /**
   * 告警接收语言，枚举值（zh-CN，en-US）
   */
  ReceiveLanguage?: string
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
   * 策略组id，如传入PolicyId则该字段可传入任意值
   */
  GroupId: number

  /**
   * 告警策略ID，使用此字段时GroupId可传入任意值
   */
  PolicyId?: string
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
 * SendCustomAlarmMsg返回参数结构体
 */
export interface SendCustomAlarmMsgResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 告警策略指标触发条件
 */
export interface AlarmPolicyCondition {
  /**
      * 指标触发与或条件，0=或，1=与
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsUnionRule: number

  /**
      * 告警触发条件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rules: Array<AlarmPolicyRule>
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
 * DeleteServiceDiscovery请求参数结构体
 */
export interface DeleteServiceDiscoveryRequest {
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
<li> 3 = PodMonitor</li>
      */
  Type: number

  /**
   * 服务发现配置信息
   */
  Yaml: string
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
 * SetDefaultAlarmPolicy返回参数结构体
 */
export interface SetDefaultAlarmPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BindingPolicyObject返回参数结构体
 */
export interface BindingPolicyObjectResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
