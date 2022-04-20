/**
 * 策略列表详情标签返回体
 */
export interface TagInstance {
    /**
      * 标签Key
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 标签Value
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 实例个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceSum: number;
    /**
      * 产品类型，如：cvm
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceType: string;
    /**
      * 地域ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RegionId: number;
    /**
      * 绑定状态，2：绑定成功，1：绑定中
注意：此字段可能返回 null，表示取不到有效值。
      */
    BindingStatus: number;
    /**
      * 标签状态，2：标签存在，1：标签不存在
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagStatus: number;
}
/**
 * DescribePolicyConditionList.ConfigManual
 */
export interface DescribePolicyConditionListConfigManual {
    /**
      * 检测方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    CalcType: DescribePolicyConditionListConfigManualCalcType;
    /**
      * 检测阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
    CalcValue: DescribePolicyConditionListConfigManualCalcValue;
    /**
      * 持续时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContinueTime: DescribePolicyConditionListConfigManualContinueTime;
    /**
      * 数据周期
注意：此字段可能返回 null，表示取不到有效值。
      */
    Period: DescribePolicyConditionListConfigManualPeriod;
    /**
      * 持续周期个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    PeriodNum: DescribePolicyConditionListConfigManualPeriodNum;
    /**
      * 聚合方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatType: DescribePolicyConditionListConfigManualStatType;
}
/**
 * ModifyAlarmPolicyNotice返回参数结构体
 */
export interface ModifyAlarmPolicyNoticeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAlarmPolicyInfo请求参数结构体
 */
export interface ModifyAlarmPolicyInfoRequest {
    /**
      * 模块名，这里填“monitor”
      */
    Module: string;
    /**
      * 告警策略 ID
      */
    PolicyId: string;
    /**
      * 要修改的字段 NAME=策略名称 REMARK=策略备注
      */
    Key: string;
    /**
      * 修改后的值
      */
    Value: string;
}
/**
 * 创建策略传入的事件告警条件
 */
export interface CreatePolicyGroupEventCondition {
    /**
      * 告警事件的Id
      */
    EventId: number;
    /**
      * 告警发送收敛类型。0连续告警，1指数告警
      */
    AlarmNotifyType: number;
    /**
      * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
      */
    AlarmNotifyPeriod: number;
    /**
      * 如果通过模版创建，需要传入模版中该指标的对应RuleId
      */
    RuleId?: number;
}
/**
 * DescribeProductEventList请求参数结构体
 */
export interface DescribeProductEventListRequest {
    /**
      * 接口模块名，固定值"monitor"
      */
    Module: string;
    /**
      * 产品类型过滤，比如"cvm"表示云服务器
      */
    ProductName?: Array<string>;
    /**
      * 事件名称过滤，比如"guest_reboot"表示机器重启
      */
    EventName?: Array<string>;
    /**
      * 影响对象，比如"ins-19708ino"
      */
    InstanceId?: Array<string>;
    /**
      * 维度过滤，比如外网IP:10.0.0.1
      */
    Dimensions?: Array<DescribeProductEventListDimensions>;
    /**
      * 产品事件地域过滤参数，比如gz，各地域缩写可参见[地域列表](https://cloud.tencent.com/document/product/248/50863)
      */
    RegionList?: Array<string>;
    /**
      * 事件类型过滤，取值范围["status_change","abnormal"]，分别表示状态变更、异常事件
      */
    Type?: Array<string>;
    /**
      * 事件状态过滤，取值范围["recover","alarm","-"]，分别表示已恢复、未恢复、无状态
      */
    Status?: Array<string>;
    /**
      * 项目ID过滤
      */
    Project?: Array<string>;
    /**
      * 告警状态配置过滤，1表示已配置，0表示未配置
      */
    IsAlarmConfig?: number;
    /**
      * 按更新时间排序，ASC表示升序，DESC表示降序，默认DESC
      */
    TimeOrder?: string;
    /**
      * 起始时间，默认一天前的时间戳
      */
    StartTime?: number;
    /**
      * 结束时间，默认当前时间戳
      */
    EndTime?: number;
    /**
      * 页偏移量，默认0
      */
    Offset?: number;
    /**
      * 每页返回的数量，默认20
      */
    Limit?: number;
}
/**
 * 告警策略触发任务
 */
export interface AlarmPolicyTriggerTask {
    /**
      * 触发任务类型 AS=弹性伸缩
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 用 json 表示配置信息 {"Key1":"Value1","Key2":"Value2"}
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskConfig: string;
}
/**
 * DescribeServiceDiscovery返回参数结构体
 */
export interface DescribeServiceDiscoveryResponse {
    /**
      * 返回服务发现列表信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServiceDiscoverySet?: Array<ServiceDiscoveryItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * Prometheus 托管服务标签
 */
export interface PrometheusTag {
    /**
      * 标签的健值
      */
    Key: string;
    /**
      * 标签对应的值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * 指标告警配置
 */
export interface DescribePolicyConditionListMetric {
    /**
      * 指标配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConfigManual: DescribePolicyConditionListConfigManual;
    /**
      * 指标id
      */
    MetricId: number;
    /**
      * 指标名称
      */
    MetricShowName: string;
    /**
      * 指标单位
      */
    MetricUnit: string;
}
/**
 * DescribeAlertRules请求参数结构体
 */
export interface DescribeAlertRulesRequest {
    /**
      * Prometheus 实例 ID
      */
    InstanceId: string;
    /**
      * 返回数量，默认为 20，最大值为 100
      */
    Limit?: number;
    /**
      * 偏移量，默认为 0
      */
    Offset?: number;
    /**
      * 规则 ID
      */
    RuleId?: string;
    /**
      * 规则状态码，取值如下：
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
      */
    RuleState?: number;
    /**
      * 规则名称
      */
    RuleName?: string;
    /**
      * 报警策略模板分类
      */
    Type?: string;
}
/**
 * DescribePrometheusInstances返回参数结构体
 */
export interface DescribePrometheusInstancesResponse {
    /**
      * 实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceSet: Array<PrometheusInstancesItem>;
    /**
      * 符合条件的实例数量。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePolicyGroupList返回参数结构体
 */
export interface DescribePolicyGroupListResponse {
    /**
      * 策略组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupList?: Array<DescribePolicyGroupListGroup>;
    /**
      * 策略组总数
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindingPolicyObject请求参数结构体
 */
export interface BindingPolicyObjectRequest {
    /**
      * 必填。固定值"monitor"
      */
    Module: string;
    /**
      * 策略组id，例如 4739573。逐渐弃用，建议使用 PolicyId 参数
      */
    GroupId?: number;
    /**
      * 告警策略ID，例如“policy-gh892hg0”。PolicyId 参数与 GroupId 参数至少要填一个，否则会报参数错误，建议使用该参数。若两者同时存在则以该参数为准
      */
    PolicyId?: string;
    /**
      * 实例分组ID
      */
    InstanceGroupId?: number;
    /**
      * 需要绑定的对象维度信息
      */
    Dimensions?: Array<BindingPolicyObjectDimension>;
}
/**
 * CreateServiceDiscovery返回参数结构体
 */
export interface CreateServiceDiscoveryResponse {
    /**
      * 创建成功之后，返回对应服务发现信息
      */
    ServiceDiscovery?: ServiceDiscoveryItem;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * prometheus 报警规则 KV 参数
 */
export interface PrometheusRuleKV {
    /**
      * 键
      */
    Key: string;
    /**
      * 值
      */
    Value: string;
}
/**
 * PutMonitorData返回参数结构体
 */
export interface PutMonitorDataResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePolicyGroupInfo请求参数结构体
 */
export interface DescribePolicyGroupInfoRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 策略组id
      */
    GroupId: number;
}
/**
 * UpdateAlertRuleState返回参数结构体
 */
export interface UpdateAlertRuleStateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindingPolicyTag返回参数结构体
 */
export interface BindingPolicyTagResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteServiceDiscovery返回参数结构体
 */
export interface DeleteServiceDiscoveryResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询策略输出的用户回调信息
 */
export interface DescribePolicyGroupInfoCallback {
    /**
      * 用户回调接口地址
      */
    CallbackUrl: string;
    /**
      * 用户回调接口状态，0表示未验证，1表示已验证，2表示存在url但没有通过验证
      */
    ValidFlag: number;
    /**
      * 用户回调接口验证码
      */
    VerifyCode: string;
}
/**
 * 告警历史的指标信息
 */
export interface AlarmHistoryMetric {
    /**
      * 云产品监控类型查询数据使用的命名空间
      */
    QceNamespace: string;
    /**
      * 指标名
      */
    MetricName: string;
    /**
      * 统计周期
      */
    Period: number;
    /**
      * 触发告警的数值
      */
    Value: string;
    /**
      * 指标的展示名
      */
    Description: string;
}
/**
 * CreateAlarmPolicy请求参数结构体
 */
export interface CreateAlarmPolicyRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 策略名称，不超过20字符
      */
    PolicyName: string;
    /**
      * 监控类型 MT_QCE=云产品监控
      */
    MonitorType: string;
    /**
      * 告警策略类型，由 [DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 获得。对于云产品监控，取接口出参的 QceNamespacesNew.N.Id，例如 cvm_device
      */
    Namespace: string;
    /**
      * 备注，不超过100字符，仅支持中英文、数字、下划线、-
      */
    Remark?: string;
    /**
      * 是否启用 0=停用 1=启用，可不传 默认为1
      */
    Enable?: number;
    /**
      * 项目 Id，对于区分项目的产品必须传入非 -1 的值。 -1=无项目 0=默认项目，如不传 默认为 -1。支持的项目 Id 可以在控制台 [账号中心-项目管理](https://console.cloud.tencent.com/project) 中查看。
      */
    ProjectId?: number;
    /**
      * 触发条件模板 Id，该参数与 Condition 参数二选一。如果策略绑定触发条件模板，则传该参数；否则不传该参数，而是传 Condition 参数。触发条件模板 Id 可以从 [DescribeConditionsTemplateList](https://cloud.tencent.com/document/api/248/70250) 接口获取。
      */
    ConditionTemplateId?: number;
    /**
      * 指标触发条件，支持的指标可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
      */
    Condition?: AlarmPolicyCondition;
    /**
      * 事件触发条件，支持的事件可以从 [DescribeAlarmEvents](https://cloud.tencent.com/document/product/248/51284) 查询。
      */
    EventCondition?: AlarmPolicyEventCondition;
    /**
      * 通知规则 Id 列表，由 [DescribeAlarmNotices](https://cloud.tencent.com/document/product/248/51280) 获得
      */
    NoticeIds?: Array<string>;
    /**
      * 触发任务列表
      */
    TriggerTasks?: Array<AlarmPolicyTriggerTask>;
    /**
      * 全局过滤条件
      */
    Filter?: AlarmPolicyFilter;
    /**
      * 聚合维度列表，指定按哪些维度 key 来做 group by
      */
    GroupBy?: Array<string>;
}
/**
 * DescribeAlarmEvents返回参数结构体
 */
export interface DescribeAlarmEventsResponse {
    /**
      * 告警事件列表
      */
    Events: Array<AlarmEvent>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProductEventList的入参Dimensions
 */
export interface DescribeProductEventListDimensions {
    /**
      * 维度名
      */
    Name: string;
    /**
      * 维度值
      */
    Value: string;
}
/**
 * DescribePolicyGroupInfo返回参数结构体
 */
export interface DescribePolicyGroupInfoResponse {
    /**
      * 策略组名称
      */
    GroupName?: string;
    /**
      * 策略组所属的项目id
      */
    ProjectId?: number;
    /**
      * 是否为默认策略，0表示非默认策略，1表示默认策略
      */
    IsDefault?: number;
    /**
      * 策略类型
      */
    ViewName?: string;
    /**
      * 策略说明
      */
    Remark?: string;
    /**
      * 策略类型名称
      */
    ShowName?: string;
    /**
      * 最近编辑的用户uin
      */
    LastEditUin?: string;
    /**
      * 最近编辑时间
      */
    UpdateTime?: string;
    /**
      * 该策略支持的地域
      */
    Region?: Array<string>;
    /**
      * 策略类型的维度列表
      */
    DimensionGroup?: Array<string>;
    /**
      * 阈值规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionsConfig?: Array<DescribePolicyGroupInfoCondition>;
    /**
      * 产品事件规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventConfig?: Array<DescribePolicyGroupInfoEventCondition>;
    /**
      * 用户接收人列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiverInfos?: Array<DescribePolicyGroupInfoReceiverInfo>;
    /**
      * 用户回调信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Callback?: DescribePolicyGroupInfoCallback;
    /**
      * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionsTemp?: DescribePolicyGroupInfoConditionTpl;
    /**
      * 是否可以设置成默认策略
      */
    CanSetDefault?: boolean;
    /**
      * 是否且规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsUnionRule?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAlarmPolicyNotice请求参数结构体
 */
export interface ModifyAlarmPolicyNoticeRequest {
    /**
      * 模块名，这里填“monitor”。
      */
    Module: string;
    /**
      * 告警策略 ID，如果该参数与PolicyIds参数同时存在，则以PolicyIds为准。
      */
    PolicyId?: string;
    /**
      * 告警通知模板 ID 列表。
      */
    NoticeIds?: Array<string>;
    /**
      * 告警策略ID数组，支持给多个告警策略批量绑定通知模板。最多30个。
      */
    PolicyIds?: Array<string>;
}
/**
 * DeleteAlarmPolicy请求参数结构体
 */
export interface DeleteAlarmPolicyRequest {
    /**
      * 模块名，固定值 monitor
      */
    Module: string;
    /**
      * 告警策略 ID 列表
      */
    PolicyIds: Array<string>;
}
/**
 * 策略标签
 */
export interface PolicyTag {
    /**
      * 标签Key
      */
    Key: string;
    /**
      * 标签Value
      */
    Value: string;
}
/**
 * 事件告警条件
 */
export interface EventCondition {
    /**
      * 告警通知频率
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlarmNotifyPeriod: string;
    /**
      * 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警）
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlarmNotifyType: string;
    /**
      * 事件ID
      */
    EventID: string;
    /**
      * 事件展示名称（对外）
      */
    EventDisplayName: string;
    /**
      * 规则ID
      */
    RuleID: string;
}
/**
 * Prometheus 服务响应体
 */
export interface PrometheusInstancesItem {
    /**
      * 实例ID。
      */
    InstanceId: string;
    /**
      * 实例名称。
      */
    InstanceName: string;
    /**
      * 实例计费模式。取值范围：
<ul>
<li>2：包年包月</li>
<li>3：按量</li>
</ul>
      */
    InstanceChargeType: number;
    /**
      * 地域 ID
      */
    RegionId: number;
    /**
      * 可用区
      */
    Zone: string;
    /**
      * VPC ID
      */
    VpcId: string;
    /**
      * 子网 ID
      */
    SubnetId: string;
    /**
      * 存储周期
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataRetentionTime: number;
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
    InstanceStatus: number;
    /**
      * Grafana 面板 URL
注意：此字段可能返回 null，表示取不到有效值。
      */
    GrafanaURL: string;
    /**
      * 创建时间
      */
    CreatedAt: string;
    /**
      * 是否开启 Grafana
<li>0：不开启</li>
<li>1：开启</li>
      */
    EnableGrafana: number;
    /**
      * 实例IPV4地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    IPv4Address: string;
    /**
      * 实例关联的标签列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagSpecification: Array<PrometheusTag>;
    /**
      * 购买的实例过期时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExpireTime: string;
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
    ChargeStatus: number;
    /**
      * 规格名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecName: string;
    /**
      * 自动续费标记
<ul>
<li>0：不自动续费</li>
<li>1：开启自动续费</li>
<li>2：禁止自动续费</li>
<li>-1：无效</ii>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoRenewFlag: number;
    /**
      * 是否快过期
<ul>
<li>0：否</li>
<li>1：快过期</li>
</ul>
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsNearExpire: number;
    /**
      * 数据写入需要的 Token
注意：此字段可能返回 null，表示取不到有效值。
      */
    AuthToken: string;
    /**
      * Prometheus Remote Write 的地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    RemoteWrite: string;
    /**
      * Prometheus HTTP Api 根地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ApiRootPath: string;
    /**
      * Proxy 的地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProxyAddress: string;
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
    GrafanaStatus: number;
    /**
      * Grafana IP 白名单列表，使用英文分号分隔
注意：此字段可能返回 null，表示取不到有效值。
      */
    GrafanaIpWhiteList: string;
    /**
      * 实例的授权信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Grant: PrometheusInstanceGrantInfo;
    /**
      * 绑定的 Grafana 实例 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GrafanaInstanceId: string;
}
/**
 * DescribeConditionsTemplateList请求参数结构体
 */
export interface DescribeConditionsTemplateListRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 视图名，由 [DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 获得。对于云产品监控，取接口出参的 QceNamespacesNew.N.Id，例如 cvm_device
      */
    ViewName?: string;
    /**
      * 根据触发条件模板名称过滤查询
      */
    GroupName?: string;
    /**
      * 根据触发条件模板ID过滤查询
      */
    GroupID?: string;
    /**
      * 分页参数，每页返回的数量，取值1~100，默认20
      */
    Limit?: number;
    /**
      * 分页参数，页偏移量，从0开始计数，默认0
      */
    Offset?: number;
    /**
      * 指定按更新时间的排序方式，asc=升序, desc=降序
      */
    UpdateTimeOrder?: string;
}
/**
 * CreateAlertRule返回参数结构体
 */
export interface CreateAlertRuleResponse {
    /**
      * 规则 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreatePolicyGroup返回参数结构体
 */
export interface CreatePolicyGroupResponse {
    /**
      * 创建成功的策略组Id
      */
    GroupId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAlarmPolicyTasks返回参数结构体
 */
export interface ModifyAlarmPolicyTasksResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBaseMetrics返回参数结构体
 */
export interface DescribeBaseMetricsResponse {
    /**
      * 查询得到的指标描述列表
      */
    MetricSet: Array<MetricSet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMetricData出参
 */
export interface MetricDataPoint {
    /**
      * 实例对象维度组合
      */
    Dimensions: Array<Dimension>;
    /**
      * 数据点列表
      */
    Values: Array<Point>;
}
/**
 * DescribePolicyConditionList.ConfigManual.ContinueTime
 */
export interface DescribePolicyConditionListConfigManualContinueTime {
    /**
      * 默认持续时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    Default: number;
    /**
      * 可选持续时间，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keys: Array<number>;
    /**
      * 是否必须
      */
    Need: boolean;
}
/**
 * DeleteAlertRules返回参数结构体
 */
export interface DeleteAlertRulesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetMonitorData请求参数结构体
 */
export interface GetMonitorDataRequest {
    /**
      * 命名空间，如QCE/CVM。各个云产品的详细命名空间说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档
      */
    Namespace: string;
    /**
      * 指标名称，如CPUUsage，仅支持单指标拉取。各个云产品的详细指标说明请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的指标英文名即为MetricName
      */
    MetricName: string;
    /**
      * 实例对象的维度组合，格式为key-value键值对形式的集合。不同类型的实例字段完全不同，如CVM为[{"Name":"InstanceId","Value":"ins-j0hk02zo"}]，Ckafka为[{"Name":"instanceId","Value":"ckafka-l49k54dd"}]，COS为[{"Name":"appid","Value":"1258344699"},{"Name":"bucket","Value":"rig-1258344699"}]。各个云产品的维度请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的维度列即为维度组合的key，value为key对应的值。单请求最多支持批量拉取10个实例的监控数据。
      */
    Instances: Array<Instance>;
    /**
      * 监控统计周期，如60。默认为取值为300，单位为s。每个指标支持的统计周期不一定相同，各个云产品支持的统计周期请参阅各个产品[监控指标](https://cloud.tencent.com/document/product/248/6140)文档，对应的统计周期列即为支持的统计周期。单请求的数据点数限制为1440个。
      */
    Period?: number;
    /**
      * 起始时间，如2018-09-22T19:51:23+08:00
      */
    StartTime?: string;
    /**
      * 结束时间，如2018-09-22T20:51:23+08:00，默认为当前时间。 EndTime不能小于StartTime
      */
    EndTime?: string;
}
/**
 * 监控数据点
 */
export interface DataPoint {
    /**
      * 实例对象维度组合
      */
    Dimensions: Array<Dimension>;
    /**
      * 时间戳数组，表示那些时间点有数据，缺失的时间戳，没有数据点，可以理解为掉点了
      */
    Timestamps: Array<number>;
    /**
      * 监控值数组，该数组和Timestamps一一对应
      */
    Values: Array<number>;
}
/**
 * DescribeAlarmPolicies返回参数结构体
 */
export interface DescribeAlarmPoliciesResponse {
    /**
      * 策略总数
      */
    TotalCount: number;
    /**
      * 策略数组
      */
    Policies: Array<AlarmPolicy>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStatisticData请求参数结构体
 */
export interface DescribeStatisticDataRequest {
    /**
      * 所属模块，固定值，为monitor
      */
    Module: string;
    /**
      * 命名空间，目前只支持QCE/TKE
      */
    Namespace: string;
    /**
      * 指标名列表
      */
    MetricNames: Array<string>;
    /**
      * 维度条件，操作符支持=、in
      */
    Conditions?: Array<MidQueryCondition>;
    /**
      * 统计粒度。默认取值为300，单位为s；可选的值为60、300、3600、86400
受存储时长限制，统计粒度与统计的时间范围有关：
60s：EndTime-StartTime<12小时，且StartTime距当前时间不能超过15天；
300s：EndTime-StartTime<3天，且StartTime距当前时间不能超过31天；
3600s：EndTime-StartTime<30天，且StartTime距当前时间不能超过93天；
86400s：EndTime-StartTime<186天，且StartTime距当前时间不能超过186天。
      */
    Period?: number;
    /**
      * 起始时间，默认为当前时间，如2020-12-08T19:51:23+08:00
      */
    StartTime?: string;
    /**
      * 结束时间，默认为当前时间，如2020-12-08T19:51:23+08:00
      */
    EndTime?: string;
    /**
      * 按指定维度groupBy
      */
    GroupBys?: Array<string>;
}
/**
 * 告警条件模版
 */
export interface ConditionsTemp {
    /**
      * 模版名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateName: string;
    /**
      * 指标触发条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    Condition: AlarmPolicyCondition;
    /**
      * 事件触发条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventCondition: AlarmPolicyEventCondition;
}
/**
 * SendCustomAlarmMsg请求参数结构体
 */
export interface SendCustomAlarmMsgRequest {
    /**
      * 接口模块名，当前取值monitor
      */
    Module: string;
    /**
      * 消息策略ID，在云监控自定义消息页面配置
      */
    PolicyId: string;
    /**
      * 用户想要发送的自定义消息内容
      */
    Msg: string;
}
/**
 * DescribePolicyConditionList.ConfigManual.Period
 */
export interface DescribePolicyConditionListConfigManualPeriod {
    /**
      * 默认周期，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    Default: number;
    /**
      * 可选周期，单位：秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keys: Array<number>;
    /**
      * 是否必须
      */
    Need: boolean;
}
/**
 * UnBindingPolicyObject请求参数结构体
 */
export interface UnBindingPolicyObjectRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 策略组id，如传入 PolicyId 则该字段被忽略可传入任意值如 0
      */
    GroupId: number;
    /**
      * 待删除对象实例的唯一id列表，UniqueId从调用[获取已绑定对象列表接口](https://cloud.tencent.com/document/api/248/40570)的出参的List中得到
      */
    UniqueId: Array<string>;
    /**
      * 实例分组id，如果按实例分组删除的话UniqueId参数是无效的
      */
    InstanceGroupId?: number;
    /**
      * 告警策略ID，使用此字段时 GroupId 会被忽略
      */
    PolicyId?: string;
}
/**
 * DescribeServiceDiscovery请求参数结构体
 */
export interface DescribeServiceDiscoveryRequest {
    /**
      * Prometheus 实例 ID
      */
    InstanceId: string;
    /**
      * <li>类型是 TKE，为对应的腾讯云容器服务集群 ID</li>
      */
    KubeClusterId: string;
    /**
      * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
      */
    KubeType: number;
}
/**
 * 统一的命名空间信息
 */
export interface CommonNamespace {
    /**
      * 命名空间标示
      */
    Id: string;
    /**
      * 命名空间名称
      */
    Name: string;
    /**
      * 命名空间值
      */
    Value: string;
    /**
      * 产品名称
      */
    ProductName: string;
    /**
      * 配置信息
      */
    Config: string;
    /**
      * 支持地域列表
      */
    AvailableRegions: Array<string>;
    /**
      * 排序Id
      */
    SortId: number;
    /**
      * Dashboard中的唯一表示
      */
    DashboardId: string;
}
/**
 * DescribePolicyConditionList请求参数结构体
 */
export interface DescribePolicyConditionListRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
}
/**
 * DeletePolicyGroup返回参数结构体
 */
export interface DeletePolicyGroupResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAccidentEventList返回参数结构体
 */
export interface DescribeAccidentEventListResponse {
    /**
      * 平台事件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alarms?: Array<DescribeAccidentEventListAlarms>;
    /**
      * 平台事件的总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMonitorTypes请求参数结构体
 */
export interface DescribeMonitorTypesRequest {
    /**
      * 模块名，固定值 monitor
      */
    Module: string;
}
/**
 * DescribeAlarmNotices返回参数结构体
 */
export interface DescribeAlarmNoticesResponse {
    /**
      * 告警通知模板总数
      */
    TotalCount: number;
    /**
      * 告警通知模板列表
      */
    Notices: Array<AlarmNotice>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAlarmPolicyTasks请求参数结构体
 */
export interface ModifyAlarmPolicyTasksRequest {
    /**
      * 模块名，这里填“monitor”
      */
    Module: string;
    /**
      * 告警策略 ID
      */
    PolicyId: string;
    /**
      * 告警策略触发任务列表，空数据代表解绑
      */
    TriggerTasks?: Array<AlarmPolicyTriggerTask>;
}
/**
 * 维度信息
 */
export interface DimensionsDesc {
    /**
      * 维度名数组
      */
    Dimensions: Array<string>;
}
/**
 * Prometheus 服务发现信息
 */
export interface ServiceDiscoveryItem {
    /**
      * 服务发现名称
      */
    Name: string;
    /**
      * 服务发现属于的 Namespace
      */
    Namespace: string;
    /**
      * 服务发现类型: ServiceMonitor/PodMonitor
      */
    Kind: string;
    /**
      * Namespace 选取方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceSelector: string;
    /**
      * Label 选取方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Selector: string;
    /**
      * Endpoints 信息（PodMonitor 不含该参数）
      */
    Endpoints: string;
    /**
      * 服务发现对应的配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Yaml: string;
}
/**
 * SetDefaultAlarmPolicy请求参数结构体
 */
export interface SetDefaultAlarmPolicyRequest {
    /**
      * 模块名，固定值 monitor
      */
    Module: string;
    /**
      * 告警策略 ID
      */
    PolicyId: string;
}
/**
 * ModifyAlarmNotice请求参数结构体
 */
export interface ModifyAlarmNoticeRequest {
    /**
      * 模块名，这里填“monitor”
      */
    Module: string;
    /**
      * 告警通知规则名称 60字符以内
      */
    Name: string;
    /**
      * 通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=都通知
      */
    NoticeType: string;
    /**
      * 通知语言 zh-CN=中文 en-US=英文
      */
    NoticeLanguage: string;
    /**
      * 告警通知模板 ID
      */
    NoticeId: string;
    /**
      * 用户通知 最多5个
      */
    UserNotices?: Array<UserNotice>;
    /**
      * 回调通知 最多3个
      */
    URLNotices?: Array<URLNotice>;
    /**
      * 告警通知推送到CLS服务 最多1个
      */
    CLSNotices?: Array<CLSNotice>;
}
/**
 * CreateServiceDiscovery请求参数结构体
 */
export interface CreateServiceDiscoveryRequest {
    /**
      * Prometheus 实例 ID
      */
    InstanceId: string;
    /**
      * <li>类型为TKE：对应集成的腾讯云容器服务集群 ID</li>
      */
    KubeClusterId: string;
    /**
      * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
      */
    KubeType: number;
    /**
      * 服务发现类型，取值如下：
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = JobMonitor</li>
      */
    Type: number;
    /**
      * 服务发现配置信息
      */
    Yaml: string;
}
/**
 * DescribeAlertRules返回参数结构体
 */
export interface DescribeAlertRulesResponse {
    /**
      * 报警规则数量
      */
    TotalCount: number;
    /**
      * 报警规则详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlertRuleSet: Array<PrometheusRuleSet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProductList请求参数结构体
 */
export interface DescribeProductListRequest {
    /**
      * 固定传值monitor
      */
    Module: string;
    /**
      * 排序方式：DESC/ASC（区分大小写），默认值DESC
      */
    Order?: string;
    /**
      * 分页查询的偏移量，默认值0
      */
    Offset?: number;
    /**
      * 分页查询的每页数据量，默认值20
      */
    Limit?: number;
}
/**
 * 周期内的统计方式
 */
export interface PeriodsSt {
    /**
      * 周期
      */
    Period: string;
    /**
      * 统计方式
      */
    StatType: Array<string>;
}
/**
 * 告警策略详情
 */
export interface AlarmPolicy {
    /**
      * 告警策略 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyId: string;
    /**
      * 告警策略名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyName: string;
    /**
      * 备注信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 监控类型 MT_QCE=云产品监控
注意：此字段可能返回 null，表示取不到有效值。
      */
    MonitorType: string;
    /**
      * 启停状态 0=停用 1=启用
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enable: number;
    /**
      * 策略组绑定的实例数
注意：此字段可能返回 null，表示取不到有效值。
      */
    UseSum: number;
    /**
      * 项目 Id -1=无项目 0=默认项目
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: number;
    /**
      * 项目名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectName: string;
    /**
      * 告警策略类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Namespace: string;
    /**
      * 触发条件模板 Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionTemplateId: string;
    /**
      * 指标触发条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    Condition: AlarmPolicyCondition;
    /**
      * 事件触发条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventCondition: AlarmPolicyEventCondition;
    /**
      * 通知规则 id 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    NoticeIds: Array<string>;
    /**
      * 通知规则 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Notices: Array<AlarmNotice>;
    /**
      * 触发任务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TriggerTasks: Array<AlarmPolicyTriggerTask>;
    /**
      * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionsTemp: ConditionsTemp;
    /**
      * 最后编辑的用户uin
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastEditUin: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: number;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTime: number;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: Array<string>;
    /**
      * namespace显示名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    NamespaceShowName: string;
    /**
      * 是否默认策略，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDefault: number;
    /**
      * 能否设置默认策略，1是，0否
注意：此字段可能返回 null，表示取不到有效值。
      */
    CanSetDefault: number;
    /**
      * 实例分组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceGroupId: number;
    /**
      * 实例分组总实例数
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceSum: number;
    /**
      * 实例分组名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceGroupName: string;
    /**
      * 触发条件类型 STATIC=静态阈值 DYNAMIC=动态类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleType: string;
    /**
      * 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    OriginId: string;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    TagInstances: Array<TagInstance>;
    /**
      * 策略关联的过滤维度信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilterDimensionsParam: string;
}
/**
 * CreateAlarmPolicy返回参数结构体
 */
export interface CreateAlarmPolicyResponse {
    /**
      * 告警策略 ID
      */
    PolicyId: string;
    /**
      * 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID
      */
    OriginId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAlarmReceivers返回参数结构体
 */
export interface ModifyAlarmReceiversResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePolicyConditionList返回参数结构体
 */
export interface DescribePolicyConditionListResponse {
    /**
      * 告警策略条件列表
      */
    Conditions?: Array<DescribePolicyConditionListCondition>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * prometheus 报警规则集
 */
export interface PrometheusRuleSet {
    /**
      * 规则 ID
      */
    RuleId: string;
    /**
      * 规则名称
      */
    RuleName: string;
    /**
      * 规则状态码
      */
    RuleState: number;
    /**
      * 规则类别
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 规则标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Labels: Array<PrometheusRuleKV>;
    /**
      * 规则注释列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Annotations: Array<PrometheusRuleKV>;
    /**
      * 规则表达式
注意：此字段可能返回 null，表示取不到有效值。
      */
    Expr: string;
    /**
      * 规则报警持续时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration: string;
    /**
      * 报警接收组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Receivers: Array<string>;
    /**
      * 规则运行健康状态，取值如下：
<li>unknown 未知状态</li>
<li>pending 加载中</li>
<li>ok 运行正常</li>
<li>err 运行错误</li>
      */
    Health: string;
    /**
      * 规则创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedAt: string;
    /**
      * 规则更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedAt: string;
}
/**
 * DescribeAllNamespaces返回参数结构体
 */
export interface DescribeAllNamespacesResponse {
    /**
      * 云产品的告警策略类型，已废弃
      */
    QceNamespaces: CommonNamespace;
    /**
      * 其他告警策略类型，已废弃
      */
    CustomNamespaces: CommonNamespace;
    /**
      * 云产品的告警策略类型
      */
    QceNamespacesNew: Array<CommonNamespace>;
    /**
      * 其他告警策略类型，暂不支持
      */
    CustomNamespacesNew: Array<CommonNamespace>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteAlarmNotices返回参数结构体
 */
export interface DeleteAlarmNoticesResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBasicAlarmList返回参数结构体
 */
export interface DescribeBasicAlarmListResponse {
    /**
      * 告警列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Alarms?: Array<DescribeBasicAlarmListAlarms>;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 云监控支持的产品简要信息
 */
export interface ProductSimple {
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 产品中文名称
      */
    ProductName: string;
    /**
      * 产品英文名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductEnName: string;
}
/**
 * ModifyAlarmReceivers请求参数结构体
 */
export interface ModifyAlarmReceiversRequest {
    /**
      * 需要修改接收人的策略组Id
      */
    GroupId: number;
    /**
      * 必填。固定为“monitor”
      */
    Module: string;
    /**
      * 新接收人信息, 没有填写则删除所有接收人
      */
    ReceiverInfos?: Array<ReceiverInfo>;
}
/**
 * 告警策略触发条件
 */
export interface AlarmPolicyRule {
    /**
      * 指标名或事件名，支持的指标可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询，支持的事件可以从 [DescribeAlarmEvents](https://cloud.tencent.com/document/product/248/51284) 查询 。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricName?: string;
    /**
      * 秒数 统计周期，支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Period?: number;
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
    Operator?: string;
    /**
      * 阈值，支持的范围可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value?: string;
    /**
      * 周期数 持续通知周期 1=持续1个周期 2=持续2个周期...，支持的值可以从 [DescribeAlarmMetrics](https://cloud.tencent.com/document/product/248/51283) 查询
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContinuePeriod?: number;
    /**
      * 秒数 告警间隔  0=不重复 300=每5分钟告警一次 600=每10分钟告警一次 900=每15分钟告警一次 1800=每30分钟告警一次 3600=每1小时告警一次 7200=每2小时告警一次 10800=每3小时告警一次 21600=每6小时告警一次 43200=每12小时告警一次 86400=每1天告警一次
注意：此字段可能返回 null，表示取不到有效值。
      */
    NoticeFrequency?: number;
    /**
      * 告警频率是否指数增长 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsPowerNotice?: number;
    /**
      * 对于单个触发规则的过滤条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    Filter?: AlarmPolicyFilter;
    /**
      * 指标展示名，用于出参
注意：此字段可能返回 null，表示取不到有效值。
      */
    Description?: string;
    /**
      * 单位，用于出参
注意：此字段可能返回 null，表示取不到有效值。
      */
    Unit?: string;
    /**
      * 触发条件类型 STATIC=静态阈值 DYNAMIC=动态阈值。创建或编辑策略时，如不填则默认为 STATIC。
注意：此字段可能返回 null，表示取不到有效值。
      */
    RuleType?: string;
}
/**
 * DescribeAlarmNoticeCallbacks请求参数结构体
 */
export interface DescribeAlarmNoticeCallbacksRequest {
    /**
      * 模块名，这里填“monitor”
      */
    Module: string;
}
/**
 * DescribeProductEventList返回的Events的Dimensions
 */
export interface DescribeProductEventListEventsDimensions {
    /**
      * 维度名（英文）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Key: string;
    /**
      * 维度名（中文）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 维度值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
}
/**
 * ModifyAlarmPolicyCondition返回参数结构体
 */
export interface ModifyAlarmPolicyConditionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 告警对象所属实例组
 */
export interface InstanceGroups {
    /**
      * 实例组 Id
      */
    Id: number;
    /**
      * 实例组名称
      */
    Name: string;
}
/**
 * 实例对象的维度组合
 */
export interface Dimension {
    /**
      * 实例维度名称
      */
    Name: string;
    /**
      * 实例维度值
      */
    Value: string;
}
/**
 * 实例的授权信息
 */
export interface PrometheusInstanceGrantInfo {
    /**
      * 是否有计费操作权限(1=有，2=无)
      */
    HasChargeOperation: number;
    /**
      * 是否显示VPC信息的权限(1=有，2=无)
      */
    HasVpcDisplay: number;
    /**
      * 是否可修改Grafana的状态(1=有，2=无)
      */
    HasGrafanaStatusChange: number;
    /**
      * 是否有管理agent的权限(1=有，2=无)
      */
    HasAgentManage: number;
    /**
      * 是否有管理TKE集成的权限(1=有，2=无)
      */
    HasTkeManage: number;
    /**
      * 是否显示API等信息(1=有, 2=无)
      */
    HasApiOperation: number;
}
/**
 * 模板列表
 */
export interface TemplateGroup {
    /**
      * 指标告警规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    Conditions: Array<Condition>;
    /**
      * 事件告警规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventConditions: Array<EventCondition>;
    /**
      * 关联告警策略组
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyGroups: Array<PolicyGroup>;
    /**
      * 模板策略组ID
      */
    GroupID: number;
    /**
      * 模板策略组名称
      */
    GroupName: string;
    /**
      * 创建时间
      */
    InsertTime: number;
    /**
      * 最后修改人UIN
      */
    LastEditUin: number;
    /**
      * 备注
      */
    Remark: string;
    /**
      * 更新时间
      */
    UpdateTime: number;
    /**
      * 视图
      */
    ViewName: string;
    /**
      * 是否为与关系
      */
    IsUnionRule: number;
}
/**
 * 查询策略绑定对象列表接口返回的对象实例信息
 */
export interface DescribeBindingPolicyObjectListInstance {
    /**
      * 对象唯一id
      */
    UniqueId: string;
    /**
      * 表示对象实例的维度集合，jsonObj字符串
      */
    Dimensions: string;
    /**
      * 对象是否被屏蔽，0表示未屏蔽，1表示被屏蔽
      */
    IsShielded: number;
    /**
      * 对象所在的地域
      */
    Region: string;
}
/**
 * 监控数据点
 */
export interface Point {
    /**
      * 该监控数据点生成的时间点
      */
    Timestamp: number;
    /**
      * 监控数据点的值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: number;
}
/**
 * UpdateAlertRuleState请求参数结构体
 */
export interface UpdateAlertRuleStateRequest {
    /**
      * 规则 ID 列表
      */
    RuleIds: Array<string>;
    /**
      * Prometheus 实例 ID
      */
    InstanceId: string;
    /**
      * 规则状态码，取值如下：
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
默认状态码为 2 启用。
      */
    RuleState: number;
}
/**
 * 修改告警策略组传入的事件告警条件
 */
export interface ModifyPolicyGroupEventCondition {
    /**
      * 事件id
      */
    EventId: number;
    /**
      * 告警发送收敛类型。0连续告警，1指数告警
      */
    AlarmNotifyType: number;
    /**
      * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
      */
    AlarmNotifyPeriod: number;
    /**
      * 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改
      */
    RuleId?: number;
}
/**
 * 指标，可用于设置告警、查询数据
 */
export interface Metric {
    /**
      * 告警策略类型
      */
    Namespace: string;
    /**
      * 指标名
      */
    MetricName: string;
    /**
      * 指标展示名
      */
    Description: string;
    /**
      * 最小值
      */
    Min: number;
    /**
      * 最大值
      */
    Max: number;
    /**
      * 维度列表
      */
    Dimensions: Array<string>;
    /**
      * 单位
      */
    Unit: string;
    /**
      * 指标配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricConfig: MetricConfig;
}
/**
 * ModifyPolicyGroup请求参数结构体
 */
export interface ModifyPolicyGroupRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 策略组id
      */
    GroupId: number;
    /**
      * 告警类型
      */
    ViewName: string;
    /**
      * 策略组名称
      */
    GroupName: string;
    /**
      * 指标告警条件的且或关系，1表示且告警，所有指标告警条件都达到才告警，0表示或告警，任意指标告警条件达到都告警
      */
    IsUnionRule: number;
    /**
      * 指标告警条件规则，不填表示删除已有的所有指标告警条件规则
      */
    Conditions?: Array<ModifyPolicyGroupCondition>;
    /**
      * 事件告警条件，不填表示删除已有的事件告警条件
      */
    EventConditions?: Array<ModifyPolicyGroupEventCondition>;
    /**
      * 模板策略组id
      */
    ConditionTempGroupId?: number;
}
/**
 * DescribeAlarmHistories返回参数结构体
 */
export interface DescribeAlarmHistoriesResponse {
    /**
      * 总数
      */
    TotalCount: number;
    /**
      * 告警历史列表
      */
    Histories: Array<AlarmHistory>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAlarmMetrics请求参数结构体
 */
export interface DescribeAlarmMetricsRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 监控类型过滤 "MT_QCE"=云产品监控
      */
    MonitorType: string;
    /**
      * 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device
      */
    Namespace: string;
}
/**
 * DescribeBaseMetrics请求参数结构体
 */
export interface DescribeBaseMetricsRequest {
    /**
      * 业务命名空间，各个云产品的业务命名空间不同。如需获取业务命名空间，请前往各产品监控指标文档，例如云服务器的命名空间，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843)
      */
    Namespace: string;
    /**
      * 指标名，各个云产品的指标名不同。如需获取指标名，请前往各产品监控指标文档，例如云服务器的指标名，可参见 [云服务器监控指标](https://cloud.tencent.com/document/product/248/6843)
      */
    MetricName?: string;
    /**
      * 可选参数，按照维度过滤
      */
    Dimensions?: Array<string>;
}
/**
 * 云监控告警通知模板 - 用户通知详情
 */
export interface UserNotice {
    /**
      * 接收者类型 USER=用户 GROUP=用户组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiverType: string;
    /**
      * 通知开始时间 00:00:00 开始的秒数（取值范围0-86399）
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: number;
    /**
      * 通知结束时间 00:00:00 开始的秒数（取值范围0-86399）
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: number;
    /**
      * 通知渠道列表 EMAIL=邮件 SMS=短信 CALL=电话 WECHAT=微信 RTX=企业微信
注意：此字段可能返回 null，表示取不到有效值。
      */
    NoticeWay: Array<string>;
    /**
      * 用户 uid 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserIds?: Array<number>;
    /**
      * 用户组 group id 列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupIds?: Array<number>;
    /**
      * 电话轮询列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneOrder?: Array<number>;
    /**
      * 电话轮询次数 （取值范围1-5）
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneCircleTimes?: number;
    /**
      * 单次轮询内拨打间隔 秒数 （取值范围60-900）
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneInnerInterval?: number;
    /**
      * 两次轮询间隔 秒数（取值范围60-900）
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneCircleInterval?: number;
    /**
      * 是否需要触达通知 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
      */
    NeedPhoneArriveNotice?: number;
    /**
      * 电话拨打类型 SYNC=同时拨打 CIRCLE=轮询拨打 不指定时默认是轮询
注意：此字段可能返回 null，表示取不到有效值。
      */
    PhoneCallType?: string;
    /**
      * 通知周期 1-7表示周一到周日
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weekday?: Array<number>;
}
/**
 * 告警策略过滤条件
 */
export interface AlarmPolicyFilter {
    /**
      * 过滤条件类型 DIMENSION=使用 Dimensions 做过滤
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * AlarmPolicyDimension 二维数组序列化后的json字符串，一维数组之间互为或关系，一维数组内的元素互为与关系
注意：此字段可能返回 null，表示取不到有效值。
      */
    Dimensions?: string;
}
/**
 * DescribeAlarmNoticeCallbacks返回参数结构体
 */
export interface DescribeAlarmNoticeCallbacksResponse {
    /**
      * 告警回调通知
注意：此字段可能返回 null，表示取不到有效值。
      */
    URLNotices?: Array<URLNotice>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyAlarmPolicyCondition请求参数结构体
 */
export interface ModifyAlarmPolicyConditionRequest {
    /**
      * 模块名，固定值 monitor
      */
    Module: string;
    /**
      * 告警策略 ID
      */
    PolicyId: string;
    /**
      * 触发条件模板 Id，可不传
      */
    ConditionTemplateId?: number;
    /**
      * 指标触发条件
      */
    Condition?: AlarmPolicyCondition;
    /**
      * 事件触发条件
      */
    EventCondition?: AlarmPolicyEventCondition;
    /**
      * 全局过滤条件
      */
    Filter?: AlarmPolicyFilter;
    /**
      * 聚合维度列表，指定按哪些维度 key 来做 group by
      */
    GroupBy?: Array<string>;
}
/**
 * ModifyAlarmPolicyStatus返回参数结构体
 */
export interface ModifyAlarmPolicyStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 实例维度组合数组
 */
export interface Instance {
    /**
      * 实例的维度组合
      */
    Dimensions: Array<Dimension>;
}
/**
 * 策略绑定实例维度信息
 */
export interface BindingPolicyObjectDimension {
    /**
      * 地域名
      */
    Region: string;
    /**
      * 地域ID
      */
    RegionId?: number;
    /**
      * 实例的维度信息，格式为
{"unInstanceId":"ins-00jvv9mo"}。不同云产品的维度信息不同，详见
[指标维度信息Dimensions列表](https://cloud.tencent.com/document/product/248/50397)
      */
    Dimensions?: string;
    /**
      * 事件维度信息
      */
    EventDimensions?: string;
}
/**
 * DeletePolicyGroup请求参数结构体
 */
export interface DeletePolicyGroupRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 策略组id
      */
    GroupId: Array<number>;
}
/**
 * DescribeAlarmPolicy返回参数结构体
 */
export interface DescribeAlarmPolicyResponse {
    /**
      * 策略详情
      */
    Policy?: AlarmPolicy;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateServiceDiscovery返回参数结构体
 */
export interface UpdateServiceDiscoveryResponse {
    /**
      * 更新成功之后，返回对应服务发现的信息
      */
    ServiceDiscovery?: ServiceDiscoveryItem;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeMonitorTypes返回参数结构体
 */
export interface DescribeMonitorTypesResponse {
    /**
      * 监控类型，云产品监控为 MT_QCE
      */
    MonitorTypes: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 对业务指标的单位及支持统计周期的描述
 */
export interface MetricSet {
    /**
      * 命名空间，每个云产品会有一个命名空间
      */
    Namespace: string;
    /**
      * 指标名称
      */
    MetricName: string;
    /**
      * 指标使用的单位
      */
    Unit: string;
    /**
      * 指标使用的单位
      */
    UnitCname: string;
    /**
      * 指标支持的统计周期，单位是秒，如60、300
      */
    Period: Array<number>;
    /**
      * 统计周期内指标方式
      */
    Periods: Array<PeriodsSt>;
    /**
      * 统计指标含义解释
      */
    Meaning: MetricObjectMeaning;
    /**
      * 维度描述信息
      */
    Dimensions: Array<DimensionsDesc>;
    /**
      * 指标中文名
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricCName: string;
    /**
      * 指标英文名
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricEName: string;
}
/**
 * DescribeBasicAlarmList返回的Alarms
 */
export interface DescribeBasicAlarmListAlarms {
    /**
      * 该条告警的ID
      */
    Id: number;
    /**
      * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: number;
    /**
      * 项目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectName: string;
    /**
      * 告警状态ID，0表示未恢复；1表示已恢复；2,3,5表示数据不足；4表示已失效
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 告警状态，ALARM表示未恢复；OK表示已恢复；NO_DATA表示数据不足；NO_CONF表示已失效
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlarmStatus: string;
    /**
      * 策略组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: number;
    /**
      * 策略组名
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
    /**
      * 发生时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    FirstOccurTime: string;
    /**
      * 持续时间，单位s
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration: number;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastOccurTime: string;
    /**
      * 告警内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    Content: string;
    /**
      * 告警对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObjName: string;
    /**
      * 告警对象ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ObjId: string;
    /**
      * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    ViewName: string;
    /**
      * VPC，只有CVM有
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vpc: string;
    /**
      * 指标ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricId: number;
    /**
      * 指标名
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricName: string;
    /**
      * 告警类型，0表示指标告警，2表示产品事件告警，3表示平台事件告警
注意：此字段可能返回 null，表示取不到有效值。
      */
    AlarmType: number;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 告警对象维度信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Dimensions: string;
    /**
      * 通知方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    NotifyWay: Array<string>;
    /**
      * 所属实例组信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceGroup: Array<InstanceGroup>;
}
/**
 * UpdateServiceDiscovery请求参数结构体
 */
export interface UpdateServiceDiscoveryRequest {
    /**
      * Prometheus 实例 ID
      */
    InstanceId: string;
    /**
      * <li>类型是 TKE，为对应的腾讯云容器服务集群 ID</li>
      */
    KubeClusterId: string;
    /**
      * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
      */
    KubeType: number;
    /**
      * 服务发现类型，取值如下：
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = JobMonitor</li>
      */
    Type: number;
    /**
      * 服务发现配置信息
      */
    Yaml: string;
}
/**
 * CreateAlarmNotice返回参数结构体
 */
export interface CreateAlarmNoticeResponse {
    /**
      * 告警通知模板ID
      */
    NoticeId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAlarmHistories请求参数结构体
 */
export interface DescribeAlarmHistoriesRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 页数，从 1 开始计数，默认 1
      */
    PageNumber?: number;
    /**
      * 每页的数量，取值1~100，默认20
      */
    PageSize?: number;
    /**
      * 默认按首次出现时间倒序排列 "ASC"=正序 "DESC"=逆序
      */
    Order?: string;
    /**
      * 起始时间，默认一天前的时间戳。对应 `FirstOccurTime` 告警首次出现时间，告警历史的 `FirstOccurTime` 晚于 `StartTime` 才可能被搜索到。
      */
    StartTime?: number;
    /**
      * 结束时间，默认当前时间戳。对应 `FirstOccurTime` 告警首次出现时间，告警历史的 `FirstOccurTime` 早于 `EndTime` 才可能被搜索到。
      */
    EndTime?: number;
    /**
      * 根据监控类型过滤 不选默认查所有类型 "MT_QCE"=云产品监控
      */
    MonitorTypes?: Array<string>;
    /**
      * 根据告警对象过滤 字符串模糊搜索
      */
    AlarmObject?: string;
    /**
      * 根据告警状态过滤 ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足，不选默认查所有
      */
    AlarmStatus?: Array<string>;
    /**
      * 根据项目ID过滤，-1=无项目 0=默认项目
可在此页面查询 [项目管理](https://console.cloud.tencent.com/project)
      */
    ProjectIds?: Array<number>;
    /**
      * 根据实例组ID过滤
      */
    InstanceGroupIds?: Array<number>;
    /**
      * 根据策略类型过滤，策略类型是监控类型之下的概念，在这里两者都需要传入，例如 `[{"MonitorType": "MT_QCE", "Namespace": "cvm_device"}]`
可使用 [查询所有名字空间 DescribeAllNamespaces](https://cloud.tencent.com/document/product/248/48683) 接口查询
      */
    Namespaces?: Array<MonitorTypeNamespace>;
    /**
      * 根据指标名过滤
      */
    MetricNames?: Array<string>;
    /**
      * 根据策略名称模糊搜索
      */
    PolicyName?: string;
    /**
      * 根据告警内容模糊搜索
      */
    Content?: string;
    /**
      * 根据接收人搜索，可以使用“访问管理”的 [拉取子用户 ListUsers](https://cloud.tencent.com/document/product/598/34587) 接口获取用户列表 或 [查询子用户 GetUser](https://cloud.tencent.com/document/product/598/34590) 接口查询子用户详情，此处填入返回结果中的 `Uid` 字段
      */
    ReceiverUids?: Array<number>;
    /**
      * 根据接收组搜索，可以使用“访问管理”的 [查询用户组列表 ListGroups](https://cloud.tencent.com/document/product/598/34589) 接口获取用户组列表 或 [列出用户关联的用户组 ListGroupsForUser](https://cloud.tencent.com/document/product/598/34588) 查询某个子用户所在的用户组列表 ，此处填入返回结果中的 `GroupId ` 字段
      */
    ReceiverGroups?: Array<number>;
    /**
      * 根据告警策略 Id 列表搜索
      */
    PolicyIds?: Array<string>;
}
/**
 * 指标数据的解释
 */
export interface MetricObjectMeaning {
    /**
      * 指标英文解释
      */
    En: string;
    /**
      * 指标中文解释
      */
    Zh: string;
}
/**
 * DescribeAccidentEventList接口的出参类型
 */
export interface DescribeAccidentEventListAlarms {
    /**
      * 事件分类
注意：此字段可能返回 null，表示取不到有效值。
      */
    BusinessTypeDesc: string;
    /**
      * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    AccidentTypeDesc: string;
    /**
      * 事件分类的ID，1表示服务问题，2表示其他订阅
注意：此字段可能返回 null，表示取不到有效值。
      */
    BusinessID: number;
    /**
      * 事件状态的ID，0表示已恢复，1表示未恢复
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventStatus: number;
    /**
      * 影响的对象
注意：此字段可能返回 null，表示取不到有效值。
      */
    AffectResource: string;
    /**
      * 事件的地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 事件发生的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    OccurTime: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: string;
}
/**
 * ModifyPolicyGroup返回参数结构体
 */
export interface ModifyPolicyGroupResponse {
    /**
      * 策略组id
      */
    GroupId?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePolicyConditionList.ConfigManual.CalcType
 */
export interface DescribePolicyConditionListConfigManualCalcType {
    /**
      * CalcType 取值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keys: Array<number>;
    /**
      * 是否必须
      */
    Need: boolean;
}
/**
 * 告警条件
 */
export interface Condition {
    /**
      * 告警通知频率
      */
    AlarmNotifyPeriod: number;
    /**
      * 重复通知策略预定义（0 - 只告警一次， 1 - 指数告警，2 - 连接告警）
      */
    AlarmNotifyType: number;
    /**
      * 检测方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    CalcType: string;
    /**
      * 检测值
注意：此字段可能返回 null，表示取不到有效值。
      */
    CalcValue: string;
    /**
      * 持续时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContinueTime: string;
    /**
      * 指标ID
      */
    MetricID: number;
    /**
      * 指标展示名称（对外）
      */
    MetricDisplayName: string;
    /**
      * 周期
      */
    Period: number;
    /**
      * 规则ID
      */
    RuleID: number;
    /**
      * 指标单位
      */
    Unit: string;
}
/**
 * PutMonitorData请求参数结构体
 */
export interface PutMonitorDataRequest {
    /**
      * 一组指标和数据
      */
    Metrics: Array<MetricDatum>;
    /**
      * 上报时自行指定的 IP
      */
    AnnounceIp?: string;
    /**
      * 上报时自行指定的时间戳
      */
    AnnounceTimestamp?: number;
    /**
      * 上报时自行指定的 IP 或 产品实例ID
      */
    AnnounceInstance?: string;
}
/**
 * ModifyAlarmPolicyStatus请求参数结构体
 */
export interface ModifyAlarmPolicyStatusRequest {
    /**
      * 模块名，固定值 monitor
      */
    Module: string;
    /**
      * 告警策略 ID
      */
    PolicyId: string;
    /**
      * 启停状态 0=停用 1=启用
      */
    Enable: number;
}
/**
 * DescribeMetricData接口出参
 */
export interface MetricData {
    /**
      * 指标名
      */
    MetricName: string;
    /**
      * 监控数据点
      */
    Points: Array<MetricDataPoint>;
}
/**
 * 告警事件
 */
export interface AlarmEvent {
    /**
      * 事件名
      */
    EventName: string;
    /**
      * 展示的事件名
      */
    Description: string;
    /**
      * 告警策略类型
      */
    Namespace: string;
}
/**
 * BindingPolicyTag请求参数结构体
 */
export interface BindingPolicyTagRequest {
    /**
      * 固定取值 monitor
      */
    Module: string;
    /**
      * 策略ID
      */
    PolicyId: string;
    /**
      * 用于实例、实例组绑定和解绑接口（BindingPolicyObject、UnBindingAllPolicyObject、UnBindingPolicyObject）的策略 ID
      */
    GroupId: string;
    /**
      * 策略标签
      */
    Tag: PolicyTag;
    /**
      * 产品类型
      */
    ServiceType: string;
    /**
      * 实例分组ID
      */
    InstanceGroupId?: number;
}
/**
 * UpdateAlertRule请求参数结构体
 */
export interface UpdateAlertRuleRequest {
    /**
      * Prometheus 报警规则 ID
      */
    RuleId: string;
    /**
      * Prometheus 实例 ID
      */
    InstanceId: string;
    /**
      * 规则状态码，取值如下：
<li>1=RuleDeleted</li>
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
默认状态码为 2 启用。
      */
    RuleState: number;
    /**
      * 报警规则名称
      */
    RuleName: string;
    /**
      * 报警规则表达式
      */
    Expr: string;
    /**
      * 报警规则持续时间
      */
    Duration: string;
    /**
      * 报警规则接收组列表
      */
    Receivers: Array<string>;
    /**
      * 报警规则标签列表
      */
    Labels?: Array<PrometheusRuleKV>;
    /**
      * 报警规则注释列表。

告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。
      */
    Annotations?: Array<PrometheusRuleKV>;
    /**
      * 报警策略模板分类
      */
    Type?: string;
}
/**
 * DescribeBindingPolicyObjectList返回参数结构体
 */
export interface DescribeBindingPolicyObjectListResponse {
    /**
      * 绑定的对象实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    List: Array<DescribeBindingPolicyObjectListInstance>;
    /**
      * 绑定的对象实例总数
      */
    Total: number;
    /**
      * 未屏蔽的对象实例数
      */
    NoShieldedSum: number;
    /**
      * 绑定的实例分组信息，没有绑定实例分组则为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceGroup: DescribeBindingPolicyObjectListInstanceGroup;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询策略输出的模板策略组信息
 */
export interface DescribePolicyGroupInfoConditionTpl {
    /**
      * 策略组id
      */
    GroupId: number;
    /**
      * 策略组名称
      */
    GroupName: string;
    /**
      * 策略类型
      */
    ViewName: string;
    /**
      * 策略组说明
      */
    Remark: string;
    /**
      * 最后编辑的用户uin
      */
    LastEditUin: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: number;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InsertTime: number;
    /**
      * 是否且规则
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsUnionRule: number;
}
/**
 * DescribeBindingPolicyObjectList请求参数结构体
 */
export interface DescribeBindingPolicyObjectListRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 策略组id，如果有形如 policy-xxxx 的 id，请填到 PolicyId 字段中，本字段填 0
      */
    GroupId: number;
    /**
      * 告警策略id，形如 policy-xxxx，如果填入，则GroupId可以填0
      */
    PolicyId?: string;
    /**
      * 每次返回的数量，取值1~100，默认20
      */
    Limit?: number;
    /**
      * 偏移量，从0开始计数，默认0。举例来说，参数 Offset=0&Limit=20 返回第 0 到 19 项，Offset=20&Limit=20 返回第 20 到 39 项，以此类推
      */
    Offset?: number;
    /**
      * 筛选对象的维度信息
      */
    Dimensions?: Array<DescribeBindingPolicyObjectListDimension>;
}
/**
 * UnBindingPolicyObject返回参数结构体
 */
export interface UnBindingPolicyObjectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBasicAlarmList返回的Alarms里的InstanceGroup
 */
export interface InstanceGroup {
    /**
      * 实例组ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceGroupId: number;
    /**
      * 实例组名
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceGroupName: string;
}
/**
 * DescribeProductEventList返回的Events
 */
export interface DescribeProductEventListEvents {
    /**
      * 事件ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventId: number;
    /**
      * 事件中文名
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventCName: string;
    /**
      * 事件英文名
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventEName: string;
    /**
      * 事件简称
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventName: string;
    /**
      * 产品中文名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductCName: string;
    /**
      * 产品英文名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductEName: string;
    /**
      * 产品简称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductName: string;
    /**
      * 实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceId: string;
    /**
      * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceName: string;
    /**
      * 项目ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId: string;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 是否支持告警
注意：此字段可能返回 null，表示取不到有效值。
      */
    SupportAlarm: number;
    /**
      * 事件类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: number;
    /**
      * 实例对象信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Dimensions: Array<DescribeProductEventListEventsDimensions>;
    /**
      * 实例对象附加信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    AdditionMsg: Array<DescribeProductEventListEventsDimensions>;
    /**
      * 是否配置告警
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsAlarmConfig: number;
    /**
      * 策略信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupInfo: Array<DescribeProductEventListEventsGroupInfo>;
    /**
      * 显示名称ViewName
注意：此字段可能返回 null，表示取不到有效值。
      */
    ViewName: string;
}
/**
 * DeleteAlarmNotices请求参数结构体
 */
export interface DeleteAlarmNoticesRequest {
    /**
      * 模块名，这里填“monitor”
      */
    Module: string;
    /**
      * 告警通知模板id列表
      */
    NoticeIds: Array<string>;
}
/**
 * DescribePolicyConditionList.ConfigManual.PeriodNum
 */
export interface DescribePolicyConditionListConfigManualPeriodNum {
    /**
      * 默认周期数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Default: number;
    /**
      * 可选周期数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keys: Array<number>;
    /**
      * 是否必须
      */
    Need: boolean;
}
/**
 * DescribeAllNamespaces请求参数结构体
 */
export interface DescribeAllNamespacesRequest {
    /**
      * 根据使用场景过滤 目前仅有"ST_ALARM"=告警类型
      */
    SceneType: string;
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 根据监控类型过滤 不填默认查所有类型 "MT_QCE"=云产品监控
      */
    MonitorTypes?: Array<string>;
    /**
      * 根据namespace的Id过滤 不填默认查询所有
      */
    Ids?: Array<string>;
}
/**
 * 策略组信息
 */
export interface PolicyGroup {
    /**
      * 是否可设为默认告警策略
      */
    CanSetDefault: boolean;
    /**
      * 告警策略组ID
      */
    GroupID: number;
    /**
      * 告警策略组名称
      */
    GroupName: string;
    /**
      * 创建时间
      */
    InsertTime: number;
    /**
      * 是否为默认告警策略
      */
    IsDefault: number;
    /**
      * 告警策略启用状态
      */
    Enable: boolean;
    /**
      * 最后修改人UIN
      */
    LastEditUin: number;
    /**
      * 未屏蔽的实例数
      */
    NoShieldedInstanceCount: number;
    /**
      * 父策略组ID
      */
    ParentGroupID: number;
    /**
      * 所属项目ID
      */
    ProjectID: number;
    /**
      * 告警接收对象信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiverInfos: Array<PolicyGroupReceiverInfo>;
    /**
      * 备注信息
      */
    Remark: string;
    /**
      * 修改时间
      */
    UpdateTime: number;
    /**
      * 总绑定实例数
      */
    TotalInstanceCount: number;
    /**
      * 视图
      */
    ViewName: string;
    /**
      * 是否为与关系规则
      */
    IsUnionRule: number;
}
/**
 * UpdateAlertRule返回参数结构体
 */
export interface UpdateAlertRuleResponse {
    /**
      * 规则 ID
      */
    RuleId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAlarmMetrics返回参数结构体
 */
export interface DescribeAlarmMetricsResponse {
    /**
      * 告警指标列表
      */
    Metrics?: Array<Metric>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePolicyGroupList接口策略组绑定的实例分组信息
 */
export interface DescribePolicyGroupListGroupInstanceGroup {
    /**
      * 实例分组名称id
      */
    InstanceGroupId: number;
    /**
      * 策略类型视图名称
      */
    ViewName: string;
    /**
      * 最近编辑的用户uin
      */
    LastEditUin: string;
    /**
      * 实例分组名称
      */
    GroupName: string;
    /**
      * 实例数量
      */
    InstanceSum: number;
    /**
      * 更新时间
      */
    UpdateTime: number;
    /**
      * 创建时间
      */
    InsertTime: number;
}
/**
 * DescribeAlarmPolicies请求参数结构体
 */
export interface DescribeAlarmPoliciesRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 页数，从 1 开始计数，默认 1
      */
    PageNumber?: number;
    /**
      * 每页的数量，取值1~100，默认20
      */
    PageSize?: number;
    /**
      * 按策略名称模糊搜索
      */
    PolicyName?: string;
    /**
      * 根据监控类型过滤 不选默认查所有类型 "MT_QCE"=云产品监控
      */
    MonitorTypes?: Array<string>;
    /**
      * 根据命名空间过滤，不同策略类型的值详见
[策略类型列表](https://cloud.tencent.com/document/product/248/50397)
      */
    Namespaces?: Array<string>;
    /**
      * 告警对象列表，JSON 字符串。外层数组，对应多个实例，内层为对象的维度。例如“云服务器-基础监控”可写为：
`[ {"Dimensions": {"unInstanceId": "ins-qr8d555g"}}, {"Dimensions": {"unInstanceId": "ins-qr8d555h"}} ]`
具体也可以参考下方的示例 2。

不同云产品参数示例详见 [维度信息Dimensions列表](https://cloud.tencent.com/document/product/248/50397)

注意：如果NeedCorrespondence传入1，即需要返回策略与实例对应关系，请传入不多于20个告警对象维度，否则容易请求超时
      */
    Dimensions?: string;
    /**
      * 根据接收人搜索，可以使用“访问管理”的 [拉取子用户 ListUsers](https://cloud.tencent.com/document/product/598/34587) 接口获取用户列表 或 [查询子用户 GetUser](https://cloud.tencent.com/document/product/598/34590) 接口查询子用户详情，此处填入返回结果中的 `Uid` 字段
      */
    ReceiverUids?: Array<number>;
    /**
      * 根据接收组搜索，可以使用“访问管理”的 [查询用户组列表 ListGroups](https://cloud.tencent.com/document/product/598/34589) 接口获取用户组列表 或 [列出用户关联的用户组 ListGroupsForUser](https://cloud.tencent.com/document/product/598/34588) 查询某个子用户所在的用户组列表 ，此处填入返回结果中的 `GroupId ` 字段
      */
    ReceiverGroups?: Array<number>;
    /**
      * 根据默认策略筛选 不传展示全部策略 DEFAULT=展示默认策略 NOT_DEFAULT=展示非默认策略
      */
    PolicyType?: Array<string>;
    /**
      * 排序字段，例如按照最后修改时间排序，Field: "UpdateTime"
      */
    Field?: string;
    /**
      * 排序顺序：升序：ASC  降序：DESC
      */
    Order?: string;
    /**
      * 策略所属项目的id数组，可在此页面查看
[项目管理](https://console.cloud.tencent.com/project)
      */
    ProjectIds?: Array<number>;
    /**
      * 通知模版的id列表，可查询通知模版列表获取。
可使用 [查询通知模板列表](https://cloud.tencent.com/document/product/248/51280) 接口查询。
      */
    NoticeIds?: Array<string>;
    /**
      * 根据触发条件筛选 不传展示全部策略 STATIC=展示静态阈值策略 DYNAMIC=展示动态阈值策略
      */
    RuleTypes?: Array<string>;
    /**
      * 告警启停筛选，[1]：启用   [0]：停止，全部[0, 1]
      */
    Enable?: Array<number>;
    /**
      * 传 1 查询未配置通知规则的告警策略；不传或传其他数值，查询所有策略。
      */
    NotBindingNoticeRule?: number;
    /**
      * 实例分组id
      */
    InstanceGroupId?: number;
    /**
      * 是否需要策略与入参过滤维度参数的对应关系，1：是  0：否，默认为0
      */
    NeedCorrespondence?: number;
    /**
      * 按照触发任务（例如弹性伸缩）过滤策略。最多10个
      */
    TriggerTasks?: Array<AlarmPolicyTriggerTask>;
}
/**
 * DescribeConditionsTemplateList返回参数结构体
 */
export interface DescribeConditionsTemplateListResponse {
    /**
      * 模板总数
      */
    Total: number;
    /**
      * 模板列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    TemplateGroupList: Array<TemplateGroup>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePolicyConditionList.ConfigManual.StatType
 */
export interface DescribePolicyConditionListConfigManualStatType {
    /**
      * 数据聚合方式，周期5秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    P5: string;
    /**
      * 数据聚合方式，周期10秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    P10: string;
    /**
      * 数据聚合方式，周期1分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
    P60: string;
    /**
      * 数据聚合方式，周期5分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
    P300: string;
    /**
      * 数据聚合方式，周期10分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
    P600: string;
    /**
      * 数据聚合方式，周期30分钟
注意：此字段可能返回 null，表示取不到有效值。
      */
    P1800: string;
    /**
      * 数据聚合方式，周期1小时
注意：此字段可能返回 null，表示取不到有效值。
      */
    P3600: string;
    /**
      * 数据聚合方式，周期1天
注意：此字段可能返回 null，表示取不到有效值。
      */
    P86400: string;
}
/**
 * ModifyAlarmPolicyInfo返回参数结构体
 */
export interface ModifyAlarmPolicyInfoResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 告警通知模板详情
 */
export interface AlarmNotice {
    /**
      * 告警通知模板 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: string;
    /**
      * 告警通知模板名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 上次修改时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedAt: string;
    /**
      * 上次修改人
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedBy: string;
    /**
      * 告警通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=全部通知
注意：此字段可能返回 null，表示取不到有效值。
      */
    NoticeType: string;
    /**
      * 用户通知列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    UserNotices: Array<UserNotice>;
    /**
      * 回调通知列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    URLNotices: Array<URLNotice>;
    /**
      * 是否是系统预设通知模板 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsPreset: number;
    /**
      * 通知语言 zh-CN=中文 en-US=英文
注意：此字段可能返回 null，表示取不到有效值。
      */
    NoticeLanguage: string;
    /**
      * 告警通知模板绑定的告警策略ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyIds: Array<string>;
    /**
      * 推送cls渠道
注意：此字段可能返回 null，表示取不到有效值。
      */
    CLSNotices: Array<CLSNotice>;
}
/**
 * 指标配置
 */
export interface MetricConfig {
    /**
      * 允许使用的运算符
      */
    Operator: Array<string>;
    /**
      * 允许配置的数据周期，以秒为单位
      */
    Period: Array<number>;
    /**
      * 允许配置的持续周期个数
      */
    ContinuePeriod: Array<number>;
}
/**
 * 2018版策略模板列表接收人信息
 */
export interface PolicyGroupReceiverInfo {
    /**
      * 有效时段结束时间
      */
    EndTime: number;
    /**
      * 是否需要发送通知
      */
    NeedSendNotice: number;
    /**
      * 告警接收渠道
注意：此字段可能返回 null，表示取不到有效值。
      */
    NotifyWay: Array<string>;
    /**
      * 电话告警对个人间隔（秒）
      */
    PersonInterval: number;
    /**
      * 消息接收组列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiverGroupList: Array<number>;
    /**
      * 接受者类型
      */
    ReceiverType: string;
    /**
      * 接收人列表。通过平台接口查询到的接收人id列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiverUserList: Array<number>;
    /**
      * 告警恢复通知方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecoverNotify: Array<string>;
    /**
      * 电话告警每轮间隔（秒）
      */
    RoundInterval: number;
    /**
      * 电话告警轮数
      */
    RoundNumber: number;
    /**
      * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
注意：此字段可能返回 null，表示取不到有效值。
      */
    SendFor: Array<string>;
    /**
      * 有效时段开始时间
      */
    StartTime: number;
    /**
      * 电话告警接收者uid
注意：此字段可能返回 null，表示取不到有效值。
      */
    UIDList: Array<number>;
}
/**
 * DescribeAlarmEvents请求参数结构体
 */
export interface DescribeAlarmEventsRequest {
    /**
      * 模块名，固定值 monitor
      */
    Module: string;
    /**
      * 告警策略类型，由 DescribeAllNamespaces 获得，例如 cvm_device
      */
    Namespace: string;
    /**
      * 监控类型，如 MT_QCE。如果不填默认为 MT_QCE。
      */
    MonitorType?: string;
}
/**
 * DescribeMidDimensionValueList的查询条件
 */
export interface MidQueryCondition {
    /**
      * 维度
      */
    Key: string;
    /**
      * 操作符，支持等于(eq)、不等于(ne)，以及in
      */
    Operator: string;
    /**
      * 维度值，当Op是eq、ne时，只使用第一个元素
      */
    Value: Array<string>;
}
/**
 * ModifyAlarmNotice返回参数结构体
 */
export interface ModifyAlarmNoticeResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAlertRule请求参数结构体
 */
export interface CreateAlertRuleRequest {
    /**
      * Prometheus 实例 ID
      */
    InstanceId: string;
    /**
      * 规则名称
      */
    RuleName: string;
    /**
      * 规则表达式
      */
    Expr: string;
    /**
      * 告警通知模板 ID 列表
      */
    Receivers: Array<string>;
    /**
      * 规则状态码，取值如下：
<li>2=RuleEnabled</li>
<li>3=RuleDisabled</li>
      */
    RuleState?: number;
    /**
      * 规则报警持续时间
      */
    Duration?: string;
    /**
      * 标签列表
      */
    Labels?: Array<PrometheusRuleKV>;
    /**
      * 注释列表。

告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description。
      */
    Annotations?: Array<PrometheusRuleKV>;
    /**
      * 报警策略模板分类
      */
    Type?: string;
}
/**
 * DescribeProductList返回参数结构体
 */
export interface DescribeProductListResponse {
    /**
      * 产品信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProductList: Array<ProductSimple>;
    /**
      * 产品总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeProductEventList返回参数结构体
 */
export interface DescribeProductEventListResponse {
    /**
      * 事件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Events: Array<DescribeProductEventListEvents>;
    /**
      * 事件统计
      */
    OverView: DescribeProductEventListOverView;
    /**
      * 事件总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 告警历史数据
 */
export interface AlarmHistory {
    /**
      * 告警历史Id
      */
    AlarmId: string;
    /**
      * 监控类型
      */
    MonitorType: string;
    /**
      * 策略类型
      */
    Namespace: string;
    /**
      * 告警对象
      */
    AlarmObject: string;
    /**
      * 告警内容
      */
    Content: string;
    /**
      * 时间戳，首次出现时间
      */
    FirstOccurTime: number;
    /**
      * 时间戳，最后出现时间
      */
    LastOccurTime: number;
    /**
      * 告警状态，ALARM=未恢复 OK=已恢复 NO_CONF=已失效 NO_DATA=数据不足
      */
    AlarmStatus: string;
    /**
      * 告警策略 Id
      */
    PolicyId: string;
    /**
      * 策略名称
      */
    PolicyName: string;
    /**
      * 基础产品告警的告警对象所属网络
      */
    VPC: string;
    /**
      * 项目 Id
      */
    ProjectId: number;
    /**
      * 项目名字
      */
    ProjectName: string;
    /**
      * 告警对象所属实例组
      */
    InstanceGroup: Array<InstanceGroups>;
    /**
      * 接收人列表
      */
    ReceiverUids: Array<number>;
    /**
      * 接收组列表
      */
    ReceiverGroups: Array<number>;
    /**
      * 告警渠道列表 SMS=短信 EMAIL=邮件 CALL=电话 WECHAT=微信
      */
    NoticeWays: Array<string>;
    /**
      * 可用于实例、实例组的绑定和解绑接口（[BindingPolicyObject](https://cloud.tencent.com/document/product/248/40421)、[UnBindingAllPolicyObject](https://cloud.tencent.com/document/product/248/40568)、[UnBindingPolicyObject](https://cloud.tencent.com/document/product/248/40567)）的策略 ID
      */
    OriginId: string;
    /**
      * 告警类型
      */
    AlarmType: string;
    /**
      * 事件Id
      */
    EventId: number;
    /**
      * 地域
      */
    Region: string;
    /**
      * 策略是否存在 0=不存在 1=存在
      */
    PolicyExists: number;
    /**
      * 指标信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricsInfo: Array<AlarmHistoryMetric>;
    /**
      * 告警实例的维度信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Dimensions: string;
}
/**
 * 策略类型
 */
export interface MonitorTypeNamespace {
    /**
      * 监控类型
      */
    MonitorType: string;
    /**
      * 策略类型值
      */
    Namespace: string;
}
/**
 * DeleteAlarmPolicy返回参数结构体
 */
export interface DeleteAlarmPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 云监控告警通知模板 - 回调通知详情
 */
export interface URLNotice {
    /**
      * 回调 url（限长256字符）
注意：此字段可能返回 null，表示取不到有效值。
      */
    URL: string;
    /**
      * 是否通过验证 0=否 1=是
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsValid?: number;
    /**
      * 验证码
注意：此字段可能返回 null，表示取不到有效值。
      */
    ValidationCode?: string;
    /**
      * 通知开始时间 一天开始的秒数
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime?: number;
    /**
      * 通知结束时间 一天开始的秒数
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime?: number;
    /**
      * 通知周期 1-7表示周一到周日
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weekday?: Array<number>;
}
/**
 * DescribeAlarmPolicy请求参数结构体
 */
export interface DescribeAlarmPolicyRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 告警策略ID
      */
    PolicyId: string;
}
/**
 * CreatePolicyGroup请求参数结构体
 */
export interface CreatePolicyGroupRequest {
    /**
      * 组策略名称
      */
    GroupName: string;
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 策略组所属视图的名称，若通过模版创建，可不传入
      */
    ViewName?: string;
    /**
      * 策略组所属项目Id，会进行鉴权操作
      */
    ProjectId?: number;
    /**
      * 模版策略组Id, 通过模版创建时才需要传
      */
    ConditionTempGroupId?: number;
    /**
      * 是否屏蔽策略组，0表示不屏蔽，1表示屏蔽。不填默认为0
      */
    IsShielded?: number;
    /**
      * 策略组的备注信息
      */
    Remark?: string;
    /**
      * 插入时间，戳格式为Unix时间戳，不填则按后台处理时间填充
      */
    InsertTime?: number;
    /**
      * 策略组中的阈值告警规则
      */
    Conditions?: Array<CreatePolicyGroupCondition>;
    /**
      * 策略组中的事件告警规则
      */
    EventConditions?: Array<CreatePolicyGroupEventCondition>;
    /**
      * 是否为后端调用。当且仅当值为1时，后台拉取策略模版中的规则填充入Conditions以及EventConditions字段
      */
    BackEndCall?: number;
    /**
      * 指标告警规则的且或关系，0表示或规则(满足任意规则就告警)，1表示且规则(满足所有规则才告警)
      */
    IsUnionRule?: number;
}
/**
 * 创建策略传入的阈值告警条件
 */
export interface CreatePolicyGroupCondition {
    /**
      * 指标Id
      */
    MetricId: number;
    /**
      * 告警发送收敛类型。0连续告警，1指数告警
      */
    AlarmNotifyType: number;
    /**
      * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
      */
    AlarmNotifyPeriod: number;
    /**
      * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等。如果指标有配置默认比较类型值可以不填。
      */
    CalcType?: number;
    /**
      * 比较的值，如果指标不必须CalcValue可不填
      */
    CalcValue?: number;
    /**
      * 数据聚合周期(单位秒)，若指标有默认值可不填
      */
    CalcPeriod?: number;
    /**
      * 持续几个检测周期触发规则会告警
      */
    ContinuePeriod?: number;
    /**
      * 如果通过模版创建，需要传入模版中该指标的对应RuleId
      */
    RuleId?: number;
}
/**
 * 查询策略输出的告警接收人信息
 */
export interface DescribePolicyGroupInfoReceiverInfo {
    /**
      * 告警接收组id列表
      */
    ReceiverGroupList: Array<number>;
    /**
      * 告警接收人id列表
      */
    ReceiverUserList: Array<number>;
    /**
      * 告警时间段开始时间。范围[0,86400)，作为unix时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
      */
    StartTime: number;
    /**
      * 告警时间段结束时间。含义同StartTime
      */
    EndTime: number;
    /**
      * 接收类型。“group”(接收组)或“user”(接收人)
      */
    ReceiverType: string;
    /**
      * 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT"
      */
    NotifyWay: Array<string>;
    /**
      * 电话告警接收者uid
注意：此字段可能返回 null，表示取不到有效值。
      */
    UidList: Array<number>;
    /**
      * 电话告警轮数
      */
    RoundNumber: number;
    /**
      * 电话告警每轮间隔（秒）
      */
    RoundInterval: number;
    /**
      * 电话告警对个人间隔（秒）
      */
    PersonInterval: number;
    /**
      * 是否需要电话告警触达提示。0不需要，1需要
      */
    NeedSendNotice: number;
    /**
      * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
      */
    SendFor: Array<string>;
    /**
      * 恢复通知方式。可选"SMS"
      */
    RecoverNotify: Array<string>;
    /**
      * 告警发送语言
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiveLanguage: string;
}
/**
 * DescribeStatisticData返回参数结构体
 */
export interface DescribeStatisticDataResponse {
    /**
      * 统计周期
      */
    Period: number;
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 监控数据
      */
    Data: Array<MetricData>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePolicyConditionList.EventMetric
 */
export interface DescribePolicyConditionListEventMetric {
    /**
      * 事件id
      */
    EventId: number;
    /**
      * 事件名称
      */
    EventShowName: string;
    /**
      * 是否需要恢复
      */
    NeedRecovered: boolean;
    /**
      * 事件类型，预留字段，当前固定取值为2
      */
    Type: number;
}
/**
 * DescribePolicyGroupList请求参数结构体
 */
export interface DescribePolicyGroupListRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 分页参数，每页返回的数量，取值1~100
      */
    Limit: number;
    /**
      * 分页参数，页偏移量，从0开始计数
      */
    Offset: number;
    /**
      * 按策略名搜索
      */
    Like?: string;
    /**
      * 实例分组id
      */
    InstanceGroupId?: number;
    /**
      * 按更新时间排序, asc 或者 desc
      */
    UpdateTimeOrder?: string;
    /**
      * 项目id列表
      */
    ProjectIds?: Array<number>;
    /**
      * 告警策略类型列表
      */
    ViewNames?: Array<string>;
    /**
      * 是否过滤无接收人策略组, 1表示过滤, 0表示不过滤
      */
    FilterUnuseReceiver?: number;
    /**
      * 过滤条件, 接收组列表
      */
    Receivers?: Array<string>;
    /**
      * 过滤条件, 接收人列表
      */
    ReceiverUserList?: Array<string>;
    /**
      * 维度组合字段(json字符串), 例如[[{"name":"unInstanceId","value":"ins-6e4b2aaa"}]]
      */
    Dimensions?: string;
    /**
      * 模板策略组id, 多个id用逗号分隔
      */
    ConditionTempGroupId?: string;
    /**
      * 过滤条件, 接收人或者接收组, user表示接收人, group表示接收组
      */
    ReceiverType?: string;
    /**
      * 过滤条件，告警策略是否已启动或停止
      */
    IsOpen?: boolean;
}
/**
 * DescribeBasicAlarmList请求参数结构体
 */
export interface DescribeBasicAlarmListRequest {
    /**
      * 接口模块名，当前取值monitor
      */
    Module: string;
    /**
      * 起始时间，默认一天前的时间戳
      */
    StartTime?: number;
    /**
      * 结束时间，默认当前时间戳
      */
    EndTime?: number;
    /**
      * 分页参数，每页返回的数量，取值1~100，默认20
      */
    Limit?: number;
    /**
      * 分页参数，页偏移量，从0开始计数，默认0
      */
    Offset?: number;
    /**
      * 根据发生时间排序，取值ASC或DESC
      */
    OccurTimeOrder?: string;
    /**
      * 根据项目ID过滤
      */
    ProjectIds?: Array<number>;
    /**
      * 根据策略类型过滤
      */
    ViewNames?: Array<string>;
    /**
      * 根据告警状态过滤
      */
    AlarmStatus?: Array<number>;
    /**
      * 根据告警对象过滤
      */
    ObjLike?: string;
    /**
      * 根据实例组ID过滤
      */
    InstanceGroupIds?: Array<number>;
    /**
      * 根据指标名过滤
      */
    MetricNames?: Array<string>;
}
/**
 * UnBindingAllPolicyObject返回参数结构体
 */
export interface UnBindingAllPolicyObjectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAlarmNotices请求参数结构体
 */
export interface DescribeAlarmNoticesRequest {
    /**
      * 模块名，这里填“monitor”
      */
    Module: string;
    /**
      * 页码 最小为1
      */
    PageNumber: number;
    /**
      * 分页大小 1～200
      */
    PageSize: number;
    /**
      * 按更新时间排序方式 ASC=正序 DESC=倒序
      */
    Order: string;
    /**
      * 主账号 uid 用于创建预设通知
      */
    OwnerUid?: number;
    /**
      * 告警通知模板名称 用来模糊搜索
      */
    Name?: string;
    /**
      * 根据接收人过滤告警通知模板需要选定通知用户类型 USER=用户 GROUP=用户组 传空=不按接收人过滤
      */
    ReceiverType?: string;
    /**
      * 接收对象列表
      */
    UserIds?: Array<number>;
    /**
      * 接收组列表
      */
    GroupIds?: Array<number>;
    /**
      * 根据通知模板 id 过滤，空数组/不传则不过滤
      */
    NoticeIds?: Array<string>;
}
/**
 * DescribePolicyGroupList.Group
 */
export interface DescribePolicyGroupListGroup {
    /**
      * 策略组id
      */
    GroupId: number;
    /**
      * 策略组名称
      */
    GroupName: string;
    /**
      * 是否开启
      */
    IsOpen: boolean;
    /**
      * 策略视图名称
      */
    ViewName: string;
    /**
      * 最近编辑的用户uin
      */
    LastEditUin: string;
    /**
      * 最后修改时间
      */
    UpdateTime: number;
    /**
      * 创建时间
      */
    InsertTime: number;
    /**
      * 策略组绑定的实例数
      */
    UseSum: number;
    /**
      * 策略组绑定的未屏蔽实例数
      */
    NoShieldedSum: number;
    /**
      * 是否为默认策略，0表示非默认策略，1表示默认策略
      */
    IsDefault: number;
    /**
      * 是否可以设置成默认策略
      */
    CanSetDefault: boolean;
    /**
      * 父策略组id
      */
    ParentGroupId: number;
    /**
      * 策略组备注
      */
    Remark: string;
    /**
      * 策略组所属项目id
      */
    ProjectId: number;
    /**
      * 阈值规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Conditions: Array<DescribePolicyGroupInfoCondition>;
    /**
      * 产品事件规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventConditions: Array<DescribePolicyGroupInfoEventCondition>;
    /**
      * 用户接收人列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReceiverInfos: Array<DescribePolicyGroupInfoReceiverInfo>;
    /**
      * 模板策略组
注意：此字段可能返回 null，表示取不到有效值。
      */
    ConditionsTemp: DescribePolicyGroupInfoConditionTpl;
    /**
      * 策略组绑定的实例组信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InstanceGroup: DescribePolicyGroupListGroupInstanceGroup;
    /**
      * 且或规则标识, 0表示或规则(任意一条规则满足阈值条件就告警), 1表示且规则(所有规则都满足阈值条件才告警)
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsUnionRule: number;
}
/**
 * DescribeAccidentEventList请求参数结构体
 */
export interface DescribeAccidentEventListRequest {
    /**
      * 接口模块名，当前接口取值monitor
      */
    Module: string;
    /**
      * 起始时间，默认一天前的时间戳
      */
    StartTime?: number;
    /**
      * 结束时间，默认当前时间戳
      */
    EndTime?: number;
    /**
      * 分页参数，每页返回的数量，取值1~100，默认20
      */
    Limit?: number;
    /**
      * 分页参数，页偏移量，从0开始计数，默认0
      */
    Offset?: number;
    /**
      * 根据UpdateTime排序的规则，取值asc或desc
      */
    UpdateTimeOrder?: string;
    /**
      * 根据OccurTime排序的规则，取值asc或desc（优先根据UpdateTimeOrder排序）
      */
    OccurTimeOrder?: string;
    /**
      * 根据事件类型过滤，1表示服务问题，2表示其他订阅
      */
    AccidentType?: Array<number>;
    /**
      * 根据事件过滤，1表示云服务器存储问题，2表示云服务器网络连接问题，3表示云服务器运行异常，202表示运营商网络抖动
      */
    AccidentEvent?: Array<number>;
    /**
      * 根据事件状态过滤，0表示已恢复，1表示未恢复
      */
    AccidentStatus?: Array<number>;
    /**
      * 根据事件地域过滤，gz表示广州，sh表示上海等
      */
    AccidentRegion?: Array<string>;
    /**
      * 根据影响资源过滤，比如ins-19a06bka
      */
    AffectResource?: string;
}
/**
 * 指标名称和值的封装
 */
export interface MetricDatum {
    /**
      * 指标名称
      */
    MetricName: string;
    /**
      * 指标的值
      */
    Value: number;
}
/**
 * DescribeAlarmNotice返回参数结构体
 */
export interface DescribeAlarmNoticeResponse {
    /**
      * 告警通知模板详细信息
      */
    Notice: AlarmNotice;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeBindingPolicyObjectList返回的是实例分组信息
 */
export interface DescribeBindingPolicyObjectListInstanceGroup {
    /**
      * 实例分组id
      */
    InstanceGroupId: number;
    /**
      * 告警策略类型名称
      */
    ViewName: string;
    /**
      * 最后编辑uin
      */
    LastEditUin: string;
    /**
      * 实例分组名称
      */
    GroupName: string;
    /**
      * 实例数量
      */
    InstanceSum: number;
    /**
      * 更新时间
      */
    UpdateTime: number;
    /**
      * 创建时间
      */
    InsertTime: number;
    /**
      * 实例所在的地域集合
注意：此字段可能返回 null，表示取不到有效值。
      */
    Regions: Array<string>;
}
/**
 * DescribeProductEventList返回的Events里的GroupInfo
 */
export interface DescribeProductEventListEventsGroupInfo {
    /**
      * 策略ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupId: number;
    /**
      * 策略名
注意：此字段可能返回 null，表示取不到有效值。
      */
    GroupName: string;
}
/**
 * DeleteAlertRules请求参数结构体
 */
export interface DeleteAlertRulesRequest {
    /**
      * 规则 ID 列表
      */
    RuleIds: Array<string>;
    /**
      * Prometheus 实例 ID
      */
    InstanceId: string;
}
/**
 * DescribeAlarmNotice请求参数结构体
 */
export interface DescribeAlarmNoticeRequest {
    /**
      * 模块名，这里填“monitor”
      */
    Module: string;
    /**
      * 告警通知模板 id
      */
    NoticeId: string;
}
/**
 * DescribeBindingPolicyObjectList接口的Dimension
 */
export interface DescribeBindingPolicyObjectListDimension {
    /**
      * 地域id
      */
    RegionId: number;
    /**
      * 地域简称
      */
    Region: string;
    /**
      * 维度组合json字符串
      */
    Dimensions: string;
    /**
      * 事件维度组合json字符串
      */
    EventDimensions: string;
}
/**
 * CreateAlarmNotice请求参数结构体
 */
export interface CreateAlarmNoticeRequest {
    /**
      * 模块名，这里填“monitor”
      */
    Module: string;
    /**
      * 通知模板名称 60字符以内
      */
    Name: string;
    /**
      * 通知类型 ALARM=未恢复通知 OK=已恢复通知 ALL=都通知
      */
    NoticeType: string;
    /**
      * 通知语言 zh-CN=中文 en-US=英文
      */
    NoticeLanguage: string;
    /**
      * 用户通知 最多5个
      */
    UserNotices?: Array<UserNotice>;
    /**
      * 回调通知 最多3个
      */
    URLNotices?: Array<URLNotice>;
    /**
      * 推送CLS日志服务的操作 最多1个
      */
    CLSNotices?: Array<CLSNotice>;
}
/**
 * 查询策略输出的阈值告警条件
 */
export interface DescribePolicyGroupInfoCondition {
    /**
      * 指标名称
      */
    MetricShowName: string;
    /**
      * 数据聚合周期(单位秒)
      */
    Period: number;
    /**
      * 指标id
      */
    MetricId: number;
    /**
      * 阈值规则id
      */
    RuleId: number;
    /**
      * 指标单位
      */
    Unit: string;
    /**
      * 告警发送收敛类型。0连续告警，1指数告警
      */
    AlarmNotifyType: number;
    /**
      * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
      */
    AlarmNotifyPeriod: number;
    /**
      * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等，7表示日同比上涨，8表示日同比下降，9表示周同比上涨，10表示周同比下降，11表示周期环比上涨，12表示周期环比下降
注意：此字段可能返回 null，表示取不到有效值。
      */
    CalcType: number;
    /**
      * 检测阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
    CalcValue: string;
    /**
      * 持续多长时间触发规则会告警(单位秒)
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContinueTime: number;
    /**
      * 告警指标名
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricName: string;
}
/**
 * GetMonitorData返回参数结构体
 */
export interface GetMonitorDataResponse {
    /**
      * 统计周期
      */
    Period: number;
    /**
      * 指标名
      */
    MetricName: string;
    /**
      * 数据点数组
      */
    DataPoints: Array<DataPoint>;
    /**
      * 开始时间
      */
    StartTime: string;
    /**
      * 结束时间
      */
    EndTime: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 接收人信息
 */
export interface ReceiverInfo {
    /**
      * 告警时间段开始时间。范围[0,86400)，作为unix时间戳转成北京时间后去掉日期，例如7200表示"10:0:0"
      */
    StartTime: number;
    /**
      * 告警时间段结束时间。含义同StartTime
      */
    EndTime: number;
    /**
      * 告警通知方式。可选 "SMS","SITE","EMAIL","CALL","WECHAT"
      */
    NotifyWay: Array<string>;
    /**
      * 接收人类型。“group” 或 “user”
      */
    ReceiverType: string;
    /**
      * ReceiverId
      */
    Id?: number;
    /**
      * 电话告警通知时机。可选"OCCUR"(告警时通知),"RECOVER"(恢复时通知)
      */
    SendFor?: Array<string>;
    /**
      * 电话告警接收者uid
      */
    UidList?: Array<number>;
    /**
      * 电话告警轮数
      */
    RoundNumber?: number;
    /**
      * 电话告警对个人间隔（秒）
      */
    PersonInterval?: number;
    /**
      * 电话告警每轮间隔（秒）
      */
    RoundInterval?: number;
    /**
      * 恢复通知方式。可选"SMS"
      */
    RecoverNotify?: Array<string>;
    /**
      * 是否需要电话告警触达提示。0不需要，1需要
      */
    NeedSendNotice?: number;
    /**
      * 接收组列表。通过平台接口查询到的接收组id列表
      */
    ReceiverGroupList?: Array<number>;
    /**
      * 接收人列表。通过平台接口查询到的接收人id列表
      */
    ReceiverUserList?: Array<number>;
    /**
      * 告警接收语言，枚举值（zh-CN，en-US）
      */
    ReceiveLanguage?: string;
}
/**
 * UnBindingAllPolicyObject请求参数结构体
 */
export interface UnBindingAllPolicyObjectRequest {
    /**
      * 固定值，为"monitor"
      */
    Module: string;
    /**
      * 策略组id，如传入 PolicyId 则该字段被忽略可传入任意值如 0
      */
    GroupId: number;
    /**
      * 告警策略ID，使用此字段时 GroupId 会被忽略
      */
    PolicyId?: string;
}
/**
 * 告警通知中的推送CLS操作
 */
export interface CLSNotice {
    /**
      * 地域
      */
    Region: string;
    /**
      * 日志集Id
      */
    LogSetId: string;
    /**
      * 主题Id
      */
    TopicId: string;
    /**
      * 启停状态，可不传，默认启用。0=停用，1=启用
      */
    Enable?: number;
}
/**
 * 查询策略输出的事件告警条件
 */
export interface DescribePolicyGroupInfoEventCondition {
    /**
      * 事件id
      */
    EventId: number;
    /**
      * 事件告警规则id
      */
    RuleId: number;
    /**
      * 事件名称
      */
    EventShowName: string;
    /**
      * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
      */
    AlarmNotifyPeriod: number;
    /**
      * 告警发送收敛类型。0连续告警，1指数告警
      */
    AlarmNotifyType: number;
}
/**
 * SendCustomAlarmMsg返回参数结构体
 */
export interface SendCustomAlarmMsgResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 告警策略指标触发条件
 */
export interface AlarmPolicyCondition {
    /**
      * 指标触发与或条件，0=或，1=与
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsUnionRule: number;
    /**
      * 告警触发条件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rules: Array<AlarmPolicyRule>;
}
/**
 * 修改告警策略组传入的指标阈值条件
 */
export interface ModifyPolicyGroupCondition {
    /**
      * 指标id
      */
    MetricId: number;
    /**
      * 比较类型，1表示大于，2表示大于等于，3表示小于，4表示小于等于，5表示相等，6表示不相等
      */
    CalcType: number;
    /**
      * 检测阈值
      */
    CalcValue: string;
    /**
      * 检测指标的数据周期
      */
    CalcPeriod: number;
    /**
      * 持续周期个数
      */
    ContinuePeriod: number;
    /**
      * 告警发送收敛类型。0连续告警，1指数告警
      */
    AlarmNotifyType: number;
    /**
      * 告警发送周期单位秒。<0 不触发, 0 只触发一次, >0 每隔triggerTime秒触发一次
      */
    AlarmNotifyPeriod: number;
    /**
      * 规则id，不填表示新增，填写了ruleId表示在已存在的规则基础上进行修改
      */
    RuleId?: number;
}
/**
 * DescribePolicyConditionList策略条件
 */
export interface DescribePolicyConditionListCondition {
    /**
      * 策略视图名称
      */
    PolicyViewName: string;
    /**
      * 事件告警条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    EventMetrics: Array<DescribePolicyConditionListEventMetric>;
    /**
      * 是否支持多地域
      */
    IsSupportMultiRegion: boolean;
    /**
      * 指标告警条件
注意：此字段可能返回 null，表示取不到有效值。
      */
    Metrics: Array<DescribePolicyConditionListMetric>;
    /**
      * 策略类型名称
      */
    Name: string;
    /**
      * 排序id
      */
    SortId: number;
    /**
      * 是否支持默认策略
      */
    SupportDefault: boolean;
    /**
      * 支持该策略类型的地域列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    SupportRegions: Array<string>;
}
/**
 * DeleteServiceDiscovery请求参数结构体
 */
export interface DeleteServiceDiscoveryRequest {
    /**
      * Prometheus 实例 ID
      */
    InstanceId: string;
    /**
      * <li>类型是 TKE，为对应的腾讯云容器服务集群 ID</li>
      */
    KubeClusterId: string;
    /**
      * 用户 Kubernetes 集群类型：
<li> 1 = 容器服务集群(TKE) </li>
      */
    KubeType: number;
    /**
      * 服务发现类型，取值如下：
<li> 1 = ServiceMonitor</li>
<li> 2 = PodMonitor</li>
<li> 3 = PodMonitor</li>
      */
    Type: number;
    /**
      * 服务发现配置信息
      */
    Yaml: string;
}
/**
 * 告警策略事件触发条件
 */
export interface AlarmPolicyEventCondition {
    /**
      * 告警触发条件列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rules: Array<AlarmPolicyRule>;
}
/**
 * DescribePrometheusInstances请求参数结构体
 */
export interface DescribePrometheusInstancesRequest {
    /**
      * 按照一个或者多个实例ID查询。实例ID形如：prom-xxxxxxxx。请求的实例的上限为100。
      */
    InstanceIds?: Array<string>;
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
    InstanceStatus?: Array<number>;
    /**
      * 按照【实例名称】进行过滤。
      */
    InstanceName?: string;
    /**
      * 按照【可用区】进行过滤。可用区形如：ap-guangzhou-1。
      */
    Zones?: Array<string>;
    /**
      * 按照【标签键值对】进行过滤。tag-key使用具体的标签键进行替换。
      */
    TagFilters?: Array<PrometheusTag>;
    /**
      * 按照【实例的IPv4地址】进行过滤。
      */
    IPv4Address?: Array<string>;
    /**
      * 返回数量，默认为20，最大值为100。
      */
    Limit?: number;
    /**
      * 偏移量，默认为0。
      */
    Offset?: number;
    /**
      * 按照【计费类型】进行过滤。
<li>2：包年包月</li>
<li>3：按量</li>
      */
    InstanceChargeType?: number;
}
/**
 * DescribeProductEventList返回的OverView对象
 */
export interface DescribeProductEventListOverView {
    /**
      * 状态变更的事件数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatusChangeAmount: number;
    /**
      * 告警状态未配置的事件数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnConfigAlarmAmount: number;
    /**
      * 异常事件数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnNormalEventAmount: number;
    /**
      * 未恢复的事件数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnRecoverAmount: number;
}
/**
 * DescribePolicyConditionList.ConfigManual.CalcValue
 */
export interface DescribePolicyConditionListConfigManualCalcValue {
    /**
      * 默认值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Default: string;
    /**
      * 固定值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Fixed: string;
    /**
      * 最大值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Max: string;
    /**
      * 最小值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Min: string;
    /**
      * 是否必须
      */
    Need: boolean;
}
/**
 * SetDefaultAlarmPolicy返回参数结构体
 */
export interface SetDefaultAlarmPolicyResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * BindingPolicyObject返回参数结构体
 */
export interface BindingPolicyObjectResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
