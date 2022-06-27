import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyAlarmPolicyNoticeResponse, ModifyAlarmPolicyInfoRequest, DescribeProductEventListRequest, DescribeServiceDiscoveryResponse, DescribeRecordingRulesResponse, DestroyPrometheusInstanceResponse, DescribeAlertRulesRequest, DescribePrometheusInstancesResponse, DescribePolicyGroupListResponse, BindingPolicyObjectRequest, DescribeAlarmNoticeCallbacksRequest, DescribeBindingPolicyObjectListResponse, PutMonitorDataResponse, DescribePolicyGroupInfoRequest, UpdateAlertRuleStateResponse, BindingPolicyTagResponse, DeleteServiceDiscoveryResponse, CreatePrometheusScrapeJobResponse, CreateAlarmPolicyRequest, CreateExporterIntegrationRequest, DescribeAlarmEventsResponse, DescribePolicyGroupInfoResponse, ModifyAlarmPolicyNoticeRequest, DeleteAlarmPolicyRequest, DescribeConditionsTemplateListRequest, DescribePrometheusScrapeJobsRequest, CreateAlertRuleResponse, CreatePolicyGroupResponse, ModifyAlarmPolicyTasksResponse, DescribeBaseMetricsResponse, CreatePrometheusMultiTenantInstancePostPayModeRequest, DeleteAlertRulesResponse, GetMonitorDataRequest, DescribeAlarmPoliciesResponse, DescribeStatisticDataRequest, SendCustomAlarmMsgRequest, CreateRecordingRuleRequest, ModifyPrometheusInstanceAttributesRequest, DescribeServiceDiscoveryRequest, DescribePolicyConditionListRequest, DeletePolicyGroupResponse, DescribeConditionsTemplateListResponse, DescribeMonitorTypesRequest, DescribeAlarmNoticesResponse, ModifyAlarmPolicyTasksRequest, ModifyAlarmPolicyStatusRequest, CreatePrometheusMultiTenantInstancePostPayModeResponse, UpdatePrometheusAgentStatusResponse, SetDefaultAlarmPolicyRequest, ModifyAlarmNoticeRequest, CreateServiceDiscoveryRequest, DescribeAlertRulesResponse, DescribeBasicAlarmListResponse, DescribeProductListRequest, BindPrometheusManagedGrafanaResponse, DeleteExporterIntegrationRequest, ModifyAlarmReceiversResponse, DescribePolicyConditionListResponse, DescribeAllNamespacesResponse, GetPrometheusAgentManagementCommandRequest, ModifyPrometheusInstanceAttributesResponse, DeleteAlarmNoticesResponse, TerminatePrometheusInstancesRequest, UnbindPrometheusManagedGrafanaResponse, UpdatePrometheusAgentStatusRequest, CreateAlarmPolicyResponse, ModifyAlarmReceiversRequest, CreateServiceDiscoveryResponse, CreatePrometheusAgentResponse, DescribeExporterIntegrationsRequest, ModifyAlarmPolicyConditionResponse, UpgradeGrafanaDashboardRequest, DestroyPrometheusInstanceRequest, UnbindPrometheusManagedGrafanaRequest, UpdateAlertRuleStateRequest, ModifyPolicyGroupRequest, DescribeAlarmHistoriesResponse, DescribeAlarmMetricsRequest, DescribeBaseMetricsRequest, UpdatePrometheusScrapeJobRequest, DescribeAlarmNoticeCallbacksResponse, UpdateExporterIntegrationResponse, ModifyAlarmPolicyConditionRequest, ModifyAlarmNoticeResponse, BindPrometheusManagedGrafanaRequest, DeletePolicyGroupRequest, DescribeAlarmPolicyResponse, DeleteExporterIntegrationResponse, UpdateServiceDiscoveryResponse, DescribeMonitorTypesResponse, UpdateRecordingRuleResponse, CreateAlarmNoticeResponse, DescribeAlarmHistoriesRequest, ModifyPolicyGroupResponse, DescribeAlarmMetricsResponse, UpdateAlertRuleResponse, PutMonitorDataRequest, DescribePrometheusAgentsRequest, TerminatePrometheusInstancesResponse, BindingPolicyTagRequest, UpdateAlertRuleRequest, DescribeBindingPolicyObjectListRequest, UnBindingPolicyObjectResponse, SendCustomAlarmMsgResponse, DeleteAlarmNoticesRequest, DescribeExporterIntegrationsResponse, UpgradeGrafanaDashboardResponse, DescribeAllNamespacesRequest, DeleteRecordingRulesRequest, UpdatePrometheusScrapeJobResponse, DescribeAlarmPoliciesRequest, DescribeAccidentEventListResponse, DescribePrometheusScrapeJobsResponse, ModifyAlarmPolicyInfoResponse, DeleteRecordingRulesResponse, DescribePrometheusAgentsResponse, DescribeAlarmEventsRequest, DeletePrometheusScrapeJobsRequest, UnBindingPolicyObjectRequest, CreateAlertRuleRequest, DescribeProductListResponse, DescribeProductEventListResponse, DeleteAlarmPolicyResponse, DeletePrometheusScrapeJobsResponse, DescribeAlarmPolicyRequest, CreatePolicyGroupRequest, DescribeStatisticDataResponse, CreatePrometheusScrapeJobRequest, CreateExporterIntegrationResponse, DescribePolicyGroupListRequest, DescribeBasicAlarmListRequest, UnBindingAllPolicyObjectResponse, DescribeAlarmNoticesRequest, UpdateExporterIntegrationRequest, DescribeAccidentEventListRequest, CreateRecordingRuleResponse, DescribeAlarmNoticeResponse, UpdateServiceDiscoveryRequest, DeleteAlertRulesRequest, DescribeAlarmNoticeRequest, UninstallGrafanaDashboardRequest, CreatePrometheusAgentRequest, CreateAlarmNoticeRequest, GetMonitorDataResponse, DescribeRecordingRulesRequest, UnBindingAllPolicyObjectRequest, ModifyAlarmPolicyStatusResponse, GetPrometheusAgentManagementCommandResponse, UpdateRecordingRuleRequest, DeleteServiceDiscoveryRequest, DescribePrometheusInstancesRequest, SetDefaultAlarmPolicyResponse, UninstallGrafanaDashboardResponse, BindingPolicyObjectResponse } from "./monitor_models";
/**
 * monitor client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     */
    PutMonitorData(req: PutMonitorDataRequest, cb?: (error: string, rep: PutMonitorDataResponse) => void): Promise<PutMonitorDataResponse>;
    /**
     * 查询告警策略列表
     */
    DescribeAlarmPolicies(req: DescribeAlarmPoliciesRequest, cb?: (error: string, rep: DescribeAlarmPoliciesResponse) => void): Promise<DescribeAlarmPoliciesResponse>;
    /**
     * 删除策略的关联对象
     */
    UnBindingPolicyObject(req: UnBindingPolicyObjectRequest, cb?: (error: string, rep: UnBindingPolicyObjectResponse) => void): Promise<UnBindingPolicyObjectResponse>;
    /**
     * 创建 Prometheus 告警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
    CreateAlertRule(req: CreateAlertRuleRequest, cb?: (error: string, rep: CreateAlertRuleResponse) => void): Promise<CreateAlertRuleResponse>;
    /**
     * 发送自定义消息告警
     */
    SendCustomAlarmMsg(req: SendCustomAlarmMsgRequest, cb?: (error: string, rep: SendCustomAlarmMsgResponse) => void): Promise<SendCustomAlarmMsgResponse>;
    /**
     * 获取条件模板列表
     */
    DescribeConditionsTemplateList(req: DescribeConditionsTemplateListRequest, cb?: (error: string, rep: DescribeConditionsTemplateListResponse) => void): Promise<DescribeConditionsTemplateListResponse>;
    /**
     * 获取已绑定对象列表
     */
    DescribeBindingPolicyObjectList(req: DescribeBindingPolicyObjectListRequest, cb?: (error: string, rep: DescribeBindingPolicyObjectListResponse) => void): Promise<DescribeBindingPolicyObjectListResponse>;
    /**
     * 列出 Prometheus 抓取任务
     */
    DescribePrometheusScrapeJobs(req: DescribePrometheusScrapeJobsRequest, cb?: (error: string, rep: DescribePrometheusScrapeJobsResponse) => void): Promise<DescribePrometheusScrapeJobsResponse>;
    /**
     * 云监控告警修改告警策略绑定的告警通知模板
     */
    ModifyAlarmPolicyNotice(req: ModifyAlarmPolicyNoticeRequest, cb?: (error: string, rep: ModifyAlarmPolicyNoticeResponse) => void): Promise<ModifyAlarmPolicyNoticeResponse>;
    /**
     * 删除在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    DeleteServiceDiscovery(req: DeleteServiceDiscoveryRequest, cb?: (error: string, rep: DeleteServiceDiscoveryResponse) => void): Promise<DeleteServiceDiscoveryResponse>;
    /**
     * 删除 Grafana Dashboard
     */
    UninstallGrafanaDashboard(req: UninstallGrafanaDashboardRequest, cb?: (error: string, rep: UninstallGrafanaDashboardResponse) => void): Promise<UninstallGrafanaDashboardResponse>;
    /**
     * 获取基础策略告警组列表
     */
    DescribePolicyGroupList(req: DescribePolicyGroupListRequest, cb?: (error: string, rep: DescribePolicyGroupListResponse) => void): Promise<DescribePolicyGroupListResponse>;
    /**
     * 修改 Prometheus 实例相关属性
     */
    ModifyPrometheusInstanceAttributes(req: ModifyPrometheusInstanceAttributesRequest, cb?: (error: string, rep: ModifyPrometheusInstanceAttributesResponse) => void): Promise<ModifyPrometheusInstanceAttributesResponse>;
    /**
     * 删除告警策略
     */
    DeleteAlarmPolicy(req: DeleteAlarmPolicyRequest, cb?: (error: string, rep: DeleteAlarmPolicyResponse) => void): Promise<DeleteAlarmPolicyResponse>;
    /**
     * 获取云产品的监控数据。此接口不适用于拉取容器服务监控数据，如需拉取容器服务监控数据，请使用[根据维度条件查询监控数据](https://cloud.tencent.com/document/product/248/51845)接口。
传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。
     */
    GetMonitorData(req: GetMonitorDataRequest, cb?: (error: string, rep: GetMonitorDataResponse) => void): Promise<GetMonitorDataResponse>;
    /**
     * 创建按量 Prometheus 实例，根据用量收费实例
     */
    CreatePrometheusMultiTenantInstancePostPayMode(req: CreatePrometheusMultiTenantInstancePostPayModeRequest, cb?: (error: string, rep: CreatePrometheusMultiTenantInstancePostPayModeResponse) => void): Promise<CreatePrometheusMultiTenantInstancePostPayModeResponse>;
    /**
     * 本接口 (DescribePrometheusInstances) 用于查询一个或多个实例的详细信息。
<ul>
<li>可以根据实例ID、实例名称或者实例状态等信息来查询实例的详细信息</li>
<li>如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的实例。</li>
</ul>
     */
    DescribePrometheusInstances(req: DescribePrometheusInstancesRequest, cb?: (error: string, rep: DescribePrometheusInstancesResponse) => void): Promise<DescribePrometheusInstancesResponse>;
    /**
     * 获取基础告警策略条件
     */
    DescribePolicyConditionList(req: DescribePolicyConditionListRequest, cb?: (error: string, rep: DescribePolicyConditionListResponse) => void): Promise<DescribePolicyConditionListResponse>;
    /**
     * 修改告警策略触发条件
     */
    ModifyAlarmPolicyCondition(req: ModifyAlarmPolicyConditionRequest, cb?: (error: string, rep: ModifyAlarmPolicyConditionResponse) => void): Promise<ModifyAlarmPolicyConditionResponse>;
    /**
     * 获取基础告警列表
     */
    DescribeBasicAlarmList(req: DescribeBasicAlarmListRequest, cb?: (error: string, rep: DescribeBasicAlarmListResponse) => void): Promise<DescribeBasicAlarmListResponse>;
    /**
     * 创建 Prometheus CVM Agent
     */
    CreatePrometheusAgent(req: CreatePrometheusAgentRequest, cb?: (error: string, rep: CreatePrometheusAgentResponse) => void): Promise<CreatePrometheusAgentResponse>;
    /**
     * 将告警策略绑定到特定对象
     */
    BindingPolicyObject(req: BindingPolicyObjectRequest, cb?: (error: string, rep: BindingPolicyObjectResponse) => void): Promise<BindingPolicyObjectResponse>;
    /**
     * 告警2.0编辑告警策略基本信息，包括策略名、备注
     */
    ModifyAlarmPolicyInfo(req: ModifyAlarmPolicyInfoRequest, cb?: (error: string, rep: ModifyAlarmPolicyInfoResponse) => void): Promise<ModifyAlarmPolicyInfoResponse>;
    /**
     * 创建通知模板
     */
    CreateAlarmNotice(req: CreateAlarmNoticeRequest, cb?: (error: string, rep: CreateAlarmNoticeResponse) => void): Promise<CreateAlarmNoticeResponse>;
    /**
     * 更新 Prometheus 报警策略状态
     */
    UpdateAlertRuleState(req: UpdateAlertRuleStateRequest, cb?: (error: string, rep: UpdateAlertRuleStateResponse) => void): Promise<UpdateAlertRuleStateResponse>;
    /**
     * 更新 exporter 集成配置
     */
    UpdateExporterIntegration(req: UpdateExporterIntegrationRequest, cb?: (error: string, rep: UpdateExporterIntegrationResponse) => void): Promise<UpdateExporterIntegrationResponse>;
    /**
     * 更新 Prometheus 抓取任务
     */
    UpdatePrometheusScrapeJob(req: UpdatePrometheusScrapeJobRequest, cb?: (error: string, rep: UpdatePrometheusScrapeJobResponse) => void): Promise<UpdatePrometheusScrapeJobResponse>;
    /**
     * 解除实例绑定的 Grafana 可视化实例
     */
    UnbindPrometheusManagedGrafana(req: UnbindPrometheusManagedGrafanaRequest, cb?: (error: string, rep: UnbindPrometheusManagedGrafanaResponse) => void): Promise<UnbindPrometheusManagedGrafanaResponse>;
    /**
     * 创建云监控告警策略
     */
    CreateAlarmPolicy(req: CreateAlarmPolicyRequest, cb?: (error: string, rep: CreateAlarmPolicyResponse) => void): Promise<CreateAlarmPolicyResponse>;
    /**
     * 获取基础策略组详情
     */
    DescribePolicyGroupInfo(req: DescribePolicyGroupInfoRequest, cb?: (error: string, rep: DescribePolicyGroupInfoResponse) => void): Promise<DescribePolicyGroupInfoResponse>;
    /**
     * 查询云监控产品列表，支持云服务器CVM、云数据库、云消息队列、负载均衡、容器服务、专线等云产品。
     */
    DescribeProductList(req: DescribeProductListRequest, cb?: (error: string, rep: DescribeProductListResponse) => void): Promise<DescribeProductListResponse>;
    /**
     * 查询 exporter 集成列表
     */
    DescribeExporterIntegrations(req: DescribeExporterIntegrationsRequest, cb?: (error: string, rep: DescribeExporterIntegrationsResponse) => void): Promise<DescribeExporterIntegrationsResponse>;
    /**
     * 查询所有名字空间
     */
    DescribeAllNamespaces(req: DescribeAllNamespacesRequest, cb?: (error: string, rep: DescribeAllNamespacesResponse) => void): Promise<DescribeAllNamespacesResponse>;
    /**
     * 在腾讯云容器服务下创建 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    CreateServiceDiscovery(req: CreateServiceDiscoveryRequest, cb?: (error: string, rep: CreateServiceDiscoveryResponse) => void): Promise<CreateServiceDiscoveryResponse>;
    /**
     * 删除全部的关联对象
     */
    UnBindingAllPolicyObject(req: UnBindingAllPolicyObjectRequest, cb?: (error: string, rep: UnBindingAllPolicyObjectResponse) => void): Promise<UnBindingAllPolicyObjectResponse>;
    /**
     * 根据维度条件查询监控数据
     */
    DescribeStatisticData(req: DescribeStatisticDataRequest, cb?: (error: string, rep: DescribeStatisticDataResponse) => void): Promise<DescribeStatisticDataResponse>;
    /**
     * 升级 Grafana Dashboard
     */
    UpgradeGrafanaDashboard(req: UpgradeGrafanaDashboardRequest, cb?: (error: string, rep: UpgradeGrafanaDashboardResponse) => void): Promise<UpgradeGrafanaDashboardResponse>;
    /**
     * 绑定 Grafana 可视化服务实例
     */
    BindPrometheusManagedGrafana(req: BindPrometheusManagedGrafanaRequest, cb?: (error: string, rep: BindPrometheusManagedGrafanaResponse) => void): Promise<BindPrometheusManagedGrafanaResponse>;
    /**
     * 查询通知模板列表
     */
    DescribeAlarmNotices(req: DescribeAlarmNoticesRequest, cb?: (error: string, rep: DescribeAlarmNoticesResponse) => void): Promise<DescribeAlarmNoticesResponse>;
    /**
     * 策略绑定标签
     */
    BindingPolicyTag(req: BindingPolicyTagRequest, cb?: (error: string, rep: BindingPolicyTagResponse) => void): Promise<BindingPolicyTagResponse>;
    /**
     * 启停告警策略
     */
    ModifyAlarmPolicyStatus(req: ModifyAlarmPolicyStatusRequest, cb?: (error: string, rep: ModifyAlarmPolicyStatusResponse) => void): Promise<ModifyAlarmPolicyStatusResponse>;
    /**
     * 云监控告警获取告警通知模板所有回调URL
     */
    DescribeAlarmNoticeCallbacks(req: DescribeAlarmNoticeCallbacksRequest, cb?: (error: string, rep: DescribeAlarmNoticeCallbacksResponse) => void): Promise<DescribeAlarmNoticeCallbacksResponse>;
    /**
     * 修改告警接收人
     */
    ModifyAlarmReceivers(req: ModifyAlarmReceiversRequest, cb?: (error: string, rep: ModifyAlarmReceiversResponse) => void): Promise<ModifyAlarmReceiversResponse>;
    /**
     * 彻底删除 Prometheus 实例相关数据，给定的实例必须先被 Terminate
     */
    DestroyPrometheusInstance(req: DestroyPrometheusInstanceRequest, cb?: (error: string, rep: DestroyPrometheusInstanceResponse) => void): Promise<DestroyPrometheusInstanceResponse>;
    /**
     * 删除告警策略组
     */
    DeletePolicyGroup(req: DeletePolicyGroupRequest, cb?: (error: string, rep: DeletePolicyGroupResponse) => void): Promise<DeletePolicyGroupResponse>;
    /**
     * 获取 Prometheus Agent 管理相关的命令行
     */
    GetPrometheusAgentManagementCommand(req: GetPrometheusAgentManagementCommandRequest, cb?: (error: string, rep: GetPrometheusAgentManagementCommandResponse) => void): Promise<GetPrometheusAgentManagementCommandResponse>;
    /**
     * 在腾讯云容器服务下更新 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    UpdateServiceDiscovery(req: UpdateServiceDiscoveryRequest, cb?: (error: string, rep: UpdateServiceDiscoveryResponse) => void): Promise<UpdateServiceDiscoveryResponse>;
    /**
     * 云监控告警编辑告警通知模板
     */
    ModifyAlarmNotice(req: ModifyAlarmNoticeRequest, cb?: (error: string, rep: ModifyAlarmNoticeResponse) => void): Promise<ModifyAlarmNoticeResponse>;
    /**
     * 云监控支持多种类型的监控，此接口列出支持的所有类型
     */
    DescribeMonitorTypes(req: DescribeMonitorTypesRequest, cb?: (error: string, rep: DescribeMonitorTypesResponse) => void): Promise<DescribeMonitorTypesResponse>;
    /**
     * 更新 Prometheus 的报警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
    UpdateAlertRule(req: UpdateAlertRuleRequest, cb?: (error: string, rep: UpdateAlertRuleResponse) => void): Promise<UpdateAlertRuleResponse>;
    /**
     * 创建 exporter 集成
     */
    CreateExporterIntegration(req: CreateExporterIntegrationRequest, cb?: (error: string, rep: CreateExporterIntegrationResponse) => void): Promise<CreateExporterIntegrationResponse>;
    /**
     * 批量删除 Prometheus 预聚合规则
     */
    DeleteRecordingRules(req: DeleteRecordingRulesRequest, cb?: (error: string, rep: DeleteRecordingRulesResponse) => void): Promise<DeleteRecordingRulesResponse>;
    /**
     * 增加策略组
     */
    CreatePolicyGroup(req: CreatePolicyGroupRequest, cb?: (error: string, rep: CreatePolicyGroupResponse) => void): Promise<CreatePolicyGroupResponse>;
    /**
     * 销毁按量 Prometheus 实例
     */
    TerminatePrometheusInstances(req: TerminatePrometheusInstancesRequest, cb?: (error: string, rep: TerminatePrometheusInstancesResponse) => void): Promise<TerminatePrometheusInstancesResponse>;
    /**
     * 删除 Prometheus 抓取任务
     */
    DeletePrometheusScrapeJobs(req: DeletePrometheusScrapeJobsRequest, cb?: (error: string, rep: DeletePrometheusScrapeJobsResponse) => void): Promise<DeletePrometheusScrapeJobsResponse>;
    /**
     * 分页获取产品事件的列表
     */
    DescribeProductEventList(req: DescribeProductEventListRequest, cb?: (error: string, rep: DescribeProductEventListResponse) => void): Promise<DescribeProductEventListResponse>;
    /**
     * 获取平台事件列表
     */
    DescribeAccidentEventList(req: DescribeAccidentEventListRequest, cb?: (error: string, rep: DescribeAccidentEventListResponse) => void): Promise<DescribeAccidentEventListResponse>;
    /**
     * 批量删除 Prometheus 报警规则
     */
    DeleteAlertRules(req: DeleteAlertRulesRequest, cb?: (error: string, rep: DeleteAlertRulesResponse) => void): Promise<DeleteAlertRulesResponse>;
    /**
     * 查询告警历史

请注意，**如果使用子用户进行告警历史的查询，只能查询到被授权项目下的告警历史**，或不区分项目的产品的告警历史。如何对子账户授予项目的权限，请参考 [访问管理-项目与标签](https://cloud.tencent.com/document/product/598/32738)。
     */
    DescribeAlarmHistories(req: DescribeAlarmHistoriesRequest, cb?: (error: string, rep: DescribeAlarmHistoriesResponse) => void): Promise<DescribeAlarmHistoriesResponse>;
    /**
     * 查询告警指标列表
     */
    DescribeAlarmMetrics(req: DescribeAlarmMetricsRequest, cb?: (error: string, rep: DescribeAlarmMetricsResponse) => void): Promise<DescribeAlarmMetricsResponse>;
    /**
     * 设置一个策略为该告警策略类型、该项目的默认告警策略。
同一项目下相同的告警策略类型，就会被设置为非默认。
     */
    SetDefaultAlarmPolicy(req: SetDefaultAlarmPolicyRequest, cb?: (error: string, rep: SetDefaultAlarmPolicyResponse) => void): Promise<SetDefaultAlarmPolicyResponse>;
    /**
     * 云监控告警修改告警策略的触发任务，TriggerTasks字段放触发任务列表，TriggerTasks传空数组时，代表解绑该策略的所有触发任务。
     */
    ModifyAlarmPolicyTasks(req: ModifyAlarmPolicyTasksRequest, cb?: (error: string, rep: ModifyAlarmPolicyTasksResponse) => void): Promise<ModifyAlarmPolicyTasksResponse>;
    /**
     * 根据条件查询 Prometheus 预聚合规则
     */
    DescribeRecordingRules(req: DescribeRecordingRulesRequest, cb?: (error: string, rep: DescribeRecordingRulesResponse) => void): Promise<DescribeRecordingRulesResponse>;
    /**
     * 删除 exporter 集成
     */
    DeleteExporterIntegration(req: DeleteExporterIntegrationRequest, cb?: (error: string, rep: DeleteExporterIntegrationResponse) => void): Promise<DeleteExporterIntegrationResponse>;
    /**
     * 获取基础指标属性
     */
    DescribeBaseMetrics(req: DescribeBaseMetricsRequest, cb?: (error: string, rep: DescribeBaseMetricsResponse) => void): Promise<DescribeBaseMetricsResponse>;
    /**
     * 查询单个通知模板的详情
     */
    DescribeAlarmNotice(req: DescribeAlarmNoticeRequest, cb?: (error: string, rep: DescribeAlarmNoticeResponse) => void): Promise<DescribeAlarmNoticeResponse>;
    /**
     * 查询告警事件列表
     */
    DescribeAlarmEvents(req: DescribeAlarmEventsRequest, cb?: (error: string, rep: DescribeAlarmEventsResponse) => void): Promise<DescribeAlarmEventsResponse>;
    /**
     * 更新 Prometheus CVM Agent 状态
     */
    UpdatePrometheusAgentStatus(req: UpdatePrometheusAgentStatusRequest, cb?: (error: string, rep: UpdatePrometheusAgentStatusResponse) => void): Promise<UpdatePrometheusAgentStatusResponse>;
    /**
     * 云监控告警删除告警通知模板
     */
    DeleteAlarmNotices(req: DeleteAlarmNoticesRequest, cb?: (error: string, rep: DeleteAlarmNoticesResponse) => void): Promise<DeleteAlarmNoticesResponse>;
    /**
     * 更新 Prometheus 的预聚合规则
     */
    UpdateRecordingRule(req: UpdateRecordingRuleRequest, cb?: (error: string, rep: UpdateRecordingRuleResponse) => void): Promise<UpdateRecordingRuleResponse>;
    /**
     * 列出在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    DescribeServiceDiscovery(req: DescribeServiceDiscoveryRequest, cb?: (error: string, rep: DescribeServiceDiscoveryResponse) => void): Promise<DescribeServiceDiscoveryResponse>;
    /**
     * 创建 Prometheus 的预聚合规则
     */
    CreateRecordingRule(req: CreateRecordingRuleRequest, cb?: (error: string, rep: CreateRecordingRuleResponse) => void): Promise<CreateRecordingRuleResponse>;
    /**
     * 更新策略组
     */
    ModifyPolicyGroup(req: ModifyPolicyGroupRequest, cb?: (error: string, rep: ModifyPolicyGroupResponse) => void): Promise<ModifyPolicyGroupResponse>;
    /**
     * Prometheus 报警规则查询接口
     */
    DescribeAlertRules(req: DescribeAlertRulesRequest, cb?: (error: string, rep: DescribeAlertRulesResponse) => void): Promise<DescribeAlertRulesResponse>;
    /**
     * 获取单个告警策略详情
     */
    DescribeAlarmPolicy(req: DescribeAlarmPolicyRequest, cb?: (error: string, rep: DescribeAlarmPolicyResponse) => void): Promise<DescribeAlarmPolicyResponse>;
    /**
     * 创建 Prometheus 抓取任务
     */
    CreatePrometheusScrapeJob(req: CreatePrometheusScrapeJobRequest, cb?: (error: string, rep: CreatePrometheusScrapeJobResponse) => void): Promise<CreatePrometheusScrapeJobResponse>;
    /**
     * 列出 Prometheus CVM Agent
     */
    DescribePrometheusAgents(req: DescribePrometheusAgentsRequest, cb?: (error: string, rep: DescribePrometheusAgentsResponse) => void): Promise<DescribePrometheusAgentsResponse>;
}
