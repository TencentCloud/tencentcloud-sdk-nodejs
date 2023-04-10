/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  ModifyAlarmPolicyInfoRequest,
  AlarmPolicyTriggerTask,
  DescribePolicyGroupListResponse,
  DescribePrometheusInstancesOverviewRequest,
  ModifyGrafanaInstanceResponse,
  DescribePolicyGroupInfoCallback,
  ModifyGrafanaInstanceRequest,
  AlarmHistoryMetric,
  EnableGrafanaSSOResponse,
  DescribePolicyGroupInfoResponse,
  PolicyTag,
  DeletePrometheusClusterAgentRequest,
  DescribePrometheusScrapeJobsRequest,
  CreatePolicyGroupResponse,
  DescribeBaseMetricsResponse,
  CreatePrometheusMultiTenantInstancePostPayModeRequest,
  DescribePolicyConditionListResponseDeprecatingInfo,
  PrometheusTempModify,
  SendCustomAlarmMsgRequest,
  UnBindingPolicyObjectRequest,
  CommonNamespaceNew,
  Tag,
  DescribePrometheusAgentInstancesRequest,
  UpdateServiceDiscoveryRequest,
  PrometheusRecordRuleYamlItem,
  Label,
  DescribeGrafanaIntegrationsResponse,
  CreatePrometheusMultiTenantInstancePostPayModeResponse,
  UpdatePrometheusAgentStatusResponse,
  SyncPrometheusTempResponse,
  UpdateGrafanaWhiteListResponse,
  DescribeGrafanaEnvironmentsRequest,
  PrometheusConfigItem,
  AlarmPolicy,
  DeleteExporterIntegrationRequest,
  PrometheusRuleKV,
  DescribePolicyConditionListResponse,
  PrometheusRuleSet,
  DescribeAllNamespacesResponse,
  TerminatePrometheusInstancesRequest,
  InstallPluginsResponse,
  ProductSimple,
  AlarmPolicyRule,
  CreateGrafanaIntegrationRequest,
  Dimension,
  DescribeBindingPolicyObjectListResponse,
  PrometheusInstancesOverview,
  DescribePrometheusInstanceInitStatusResponse,
  DescribeProductEventListResponse,
  DescribeAlarmNoticeCallbacksResponse,
  DescribePrometheusInstanceUsageRequest,
  DeletePrometheusScrapeJobsRequest,
  CreatePrometheusRecordRuleYamlRequest,
  Instance,
  DescribeAlarmNoticesResponse,
  PrometheusClusterAgentPodConfig,
  GrafanaInstanceInfo,
  DeletePrometheusConfigResponse,
  CreatePrometheusRecordRuleYamlResponse,
  MetricObjectMeaning,
  AlarmEvent,
  ModifyPolicyGroupResponse,
  UninstallGrafanaPluginsResponse,
  ModifyPrometheusTempRequest,
  UpgradeGrafanaInstanceResponse,
  BindingPolicyTagRequest,
  DeletePrometheusTempSyncResponse,
  DescribeDNSConfigRequest,
  DescribePolicyGroupInfoConditionTpl,
  UnBindingPolicyObjectResponse,
  DescribePrometheusRecordRulesRequest,
  DescribeExporterIntegrationsResponse,
  UpdateAlertRuleResponse,
  InstanceGroup,
  EnableGrafanaSSORequest,
  DescribePrometheusScrapeJobsResponse,
  EnableGrafanaInternetRequest,
  DescribePluginOverviewsResponse,
  GrafanaAccountRole,
  DestroyPrometheusInstanceRequest,
  PolicyGroupReceiverInfo,
  Metric,
  MidQueryCondition,
  DeleteSSOAccountRequest,
  DescribePrometheusAgentInstancesResponse,
  URLNotice,
  DescribeProductListResponse,
  DeletePrometheusTempResponse,
  CreatePolicyGroupCondition,
  DescribePolicyGroupInfoReceiverInfo,
  RecordingRuleSet,
  DescribeBasicAlarmListRequest,
  ModifyAlarmPolicyStatusResponse,
  DescribeGrafanaInstancesRequest,
  DescribePrometheusTempSyncRequest,
  DescribePrometheusGlobalConfigResponse,
  CreateRecordingRuleResponse,
  CreateGrafanaNotificationChannelResponse,
  DescribeGrafanaNotificationChannelsRequest,
  CleanGrafanaInstanceRequest,
  DescribeSSOAccountRequest,
  UpdateExporterIntegrationResponse,
  CreateAlarmNoticeRequest,
  InstanceGroups,
  UpdateGrafanaNotificationChannelResponse,
  CreateExporterIntegrationResponse,
  UnBindingAllPolicyObjectRequest,
  SendCustomAlarmMsgResponse,
  AlarmPolicyCondition,
  DescribeGrafanaChannelsRequest,
  DescribePolicyGroupListRequest,
  DescribeGrafanaConfigRequest,
  UpdateRecordingRuleRequest,
  DescribePolicyConditionListConfigManualCalcValue,
  DescribePrometheusInstancesRequest,
  Toleration,
  TagInstance,
  DescribePolicyConditionListConfigManual,
  InstallPluginsRequest,
  DescribeAlarmEventsResponse,
  DescribeServiceDiscoveryResponse,
  PrometheusTag,
  DescribePolicyConditionListMetric,
  BindingPolicyObjectRequest,
  CreateServiceDiscoveryResponse,
  EnableSSOCamCheckResponse,
  DescribeAccidentEventListRequest,
  CreatePrometheusScrapeJobResponse,
  CreateAlarmPolicyRequest,
  PrometheusZoneItem,
  ModifyPrometheusAlertPolicyRequest,
  ModifyPrometheusInstanceAttributesResponse,
  PrometheusTemplateSyncTarget,
  DescribePrometheusAlertPolicyResponse,
  UpdateGrafanaEnvironmentsRequest,
  CommonNamespace,
  DeleteGrafanaNotificationChannelResponse,
  DataPoint,
  DescribeAlarmPoliciesResponse,
  ModifyPrometheusGlobalNotificationRequest,
  DescribePolicyConditionListConfigManualPeriod,
  DescribePrometheusRecordRulesResponse,
  DescribePrometheusGlobalNotificationResponse,
  DescribeMonitorTypesRequest,
  DimensionsDesc,
  DeletePrometheusAlertPolicyRequest,
  ServiceDiscoveryItem,
  ModifyPrometheusAgentExternalLabelsResponse,
  ModifyAlarmNoticeRequest,
  DescribeGrafanaWhiteListResponse,
  DescribeAlertRulesResponse,
  ResumeGrafanaInstanceRequest,
  DescribeBasicAlarmListResponse,
  ModifyAlarmReceiversRequest,
  DescribeExporterIntegrationsRequest,
  DescribePrometheusInstanceDetailResponse,
  Point,
  ModifyPolicyGroupEventCondition,
  CreateGrafanaNotificationChannelRequest,
  DescribePrometheusTargetsTMPResponse,
  DescribePrometheusClusterAgentsResponse,
  UpdatePrometheusScrapeJobRequest,
  PrometheusAgentInfo,
  CreatePrometheusClusterAgentResponse,
  CreateGrafanaIntegrationResponse,
  BindPrometheusManagedGrafanaRequest,
  PrometheusAlertManagerConfig,
  CreateGrafanaInstanceRequest,
  DescribePrometheusInstanceUsageResponse,
  DescribePrometheusGlobalNotificationRequest,
  DeleteExporterIntegrationResponse,
  UpdateRecordingRuleResponse,
  CreatePrometheusAgentResponse,
  DescribePrometheusAlertPolicyRequest,
  DescribeAlarmMetricsResponse,
  DescribePrometheusRecordRuleYamlRequest,
  DescribeGrafanaWhiteListRequest,
  DescribePrometheusConfigRequest,
  CreateGrafanaInstanceResponse,
  UpdateAlertRuleRequest,
  AlarmPolicyEventCondition,
  DeleteAlarmNoticesRequest,
  DescribeGrafanaNotificationChannelsResponse,
  DescribePolicyConditionListConfigManualCalcType,
  ResumeGrafanaInstanceResponse,
  DescribeAccidentEventListResponse,
  DescribePrometheusTempSyncResponse,
  CreatePrometheusConfigResponse,
  UpdateDNSConfigRequest,
  DeletePrometheusClusterAgentResponse,
  DescribeDNSConfigResponse,
  DeleteRecordingRulesRequest,
  MonitorTypeNamespace,
  DeleteAlarmPolicyResponse,
  UninstallGrafanaPluginsRequest,
  DeleteSSOAccountResponse,
  DescribePolicyGroupListGroup,
  GrafanaAccountInfo,
  DescribeBindingPolicyObjectListInstanceGroup,
  ModifyAlarmPolicyTasksRequest,
  GetPrometheusAgentManagementCommandRequest,
  DescribeBindingPolicyObjectListDimension,
  DescribePolicyGroupInfoEventCondition,
  GetPrometheusAgentManagementCommandResponse,
  MetricData,
  DescribeStatisticDataResponse,
  DescribeProductEventListOverView,
  UpdateDNSConfigResponse,
  UninstallGrafanaDashboardResponse,
  AlarmHierarchicalValue,
  UpdateGrafanaNotificationChannelRequest,
  CreatePolicyGroupEventCondition,
  GrafanaPlugin,
  DestroyPrometheusInstanceResponse,
  DescribeAlertRulesRequest,
  DescribePrometheusInstancesResponse,
  LogFilterInfo,
  BindingPolicyTagResponse,
  DeleteServiceDiscoveryResponse,
  CreateExporterIntegrationRequest,
  ModifyPrometheusConfigResponse,
  PrometheusAgent,
  CreatePrometheusAlertPolicyResponse,
  DescribePrometheusInstanceDetailRequest,
  UserNotice,
  PrometheusInstancesItem,
  DescribeConditionsTemplateListRequest,
  DeletePrometheusRecordRuleYamlResponse,
  MetricDataPoint,
  GetMonitorDataRequest,
  CreateRecordingRuleRequest,
  ModifyPrometheusConfigRequest,
  DescribeGrafanaEnvironmentsResponse,
  DescribePolicyConditionListRequest,
  DeletePolicyGroupResponse,
  DeleteGrafanaInstanceRequest,
  GrafanaIntegrationConfig,
  DeleteGrafanaIntegrationRequest,
  ModifyPrometheusAlertPolicyResponse,
  DescribePrometheusTargetsTMPRequest,
  CreateServiceDiscoveryRequest,
  PeriodsSt,
  ModifyAlarmReceiversResponse,
  GrafanaChannel,
  CreatePrometheusConfigRequest,
  DescribeSSOAccountResponse,
  CreateAlarmPolicyResponse,
  DeleteGrafanaNotificationChannelRequest,
  AlarmNotice,
  DescribeProductEventListEventsDimensions,
  CreatePrometheusClusterAgentRequest,
  ModifyAlarmPolicyConditionResponse,
  DescribePrometheusInstancesOverviewResponse,
  MetricSet,
  PrometheusInstanceGrantInfo,
  TemplateGroup,
  DescribeBindingPolicyObjectListInstance,
  UpdateGrafanaIntegrationResponse,
  DescribeAlarmHistoriesResponse,
  DescribeAlarmMetricsRequest,
  CreateSSOAccountRequest,
  AlarmPolicyFilter,
  ModifyAlarmPolicyNoticeResponse,
  PrometheusAlertRule,
  UnbindPrometheusManagedGrafanaResponse,
  DescribeGrafanaChannelsResponse,
  DescribeAlarmPolicyResponse,
  PrometheusNotificationItem,
  DescribeMonitorTypesResponse,
  UpgradeGrafanaInstanceRequest,
  DescribeAccidentEventListAlarms,
  CreatePrometheusGlobalNotificationResponse,
  DescribeAlarmHistoriesRequest,
  DescribePrometheusRecordRuleYamlResponse,
  DeletePolicyGroupRequest,
  EnableSSOCamCheckRequest,
  DeleteGrafanaIntegrationResponse,
  DescribeInstalledPluginsRequest,
  DescribePrometheusZonesResponse,
  DescribePrometheusAgentsRequest,
  DescribePolicyGroupInfoCondition,
  DescribePrometheusInstanceInitStatusRequest,
  CreatePrometheusAlertPolicyRequest,
  DescribeBindingPolicyObjectListRequest,
  DescribeProductEventListEvents,
  DescribePolicyConditionListConfigManualPeriodNum,
  UpgradeGrafanaDashboardResponse,
  DescribeAllNamespacesRequest,
  PolicyGroup,
  DescribePrometheusClusterAgentsRequest,
  UnbindPrometheusManagedGrafanaRequest,
  DescribePolicyGroupListGroupInstanceGroup,
  DescribeConditionsTemplateListResponse,
  CreatePrometheusTempRequest,
  ModifyAlarmPolicyInfoResponse,
  MetricConfig,
  Targets,
  DescribeAlarmEventsRequest,
  ModifyAlarmPolicyConditionRequest,
  ModifyAlarmNoticeResponse,
  PrometheusJobTargets,
  UpdateGrafanaConfigRequest,
  DescribeGrafanaIntegrationsRequest,
  AlarmHistory,
  PrometheusClusterAgentBasic,
  CreatePolicyGroupRequest,
  CreatePrometheusScrapeJobRequest,
  CreatePrometheusTempResponse,
  DescribePolicyConditionListEventMetric,
  NoticeBindPolicys,
  UnBindingAllPolicyObjectResponse,
  DescribeAlarmNoticesRequest,
  RunPrometheusInstanceResponse,
  UpdateExporterIntegrationRequest,
  CheckIsPrometheusNewUserRequest,
  DescribeAlarmNoticeResponse,
  DeleteAlertRulesRequest,
  SyncPrometheusTempRequest,
  GetMonitorDataResponse,
  ReceiverInfo,
  DescribeRecordingRulesRequest,
  UpgradeGrafanaDashboardRequest,
  DeleteServiceDiscoveryRequest,
  DescribeInstalledPluginsResponse,
  UpdateGrafanaConfigResponse,
  ModifyPrometheusInstanceAttributesRequest,
  DescribePrometheusConfigResponse,
  UpdateGrafanaEnvironmentsResponse,
  DescribeProductEventListRequest,
  CreatePrometheusGlobalNotificationRequest,
  ModifyPrometheusTempResponse,
  DescribeRecordingRulesResponse,
  DeleteRecordingRulesResponse,
  UpdateGrafanaWhiteListRequest,
  UpdatePrometheusAgentStatusRequest,
  DescribeAlarmNoticeCallbacksRequest,
  CheckIsPrometheusNewUserResponse,
  PutMonitorDataResponse,
  DescribePolicyGroupInfoRequest,
  UpdateAlertRuleStateResponse,
  ModifyPrometheusRecordRuleYamlRequest,
  DeletePrometheusAlertPolicyResponse,
  DescribeProductEventListDimensions,
  ModifyAlarmPolicyNoticeRequest,
  DeleteAlarmPolicyRequest,
  EventCondition,
  CreateAlertRuleResponse,
  DescribePolicyConditionListConfigManualContinueTime,
  ModifyAlarmPolicyTasksResponse,
  MonitorTypeInfo,
  DimensionNew,
  DeleteAlertRulesResponse,
  ModifyAlarmPolicyStatusRequest,
  ConditionsTemp,
  Operator,
  DescribeServiceDiscoveryRequest,
  TaskStepInfo,
  DescribePrometheusTempResponse,
  DescribeGrafanaConfigResponse,
  DescribeAlarmNoticeRequest,
  PrometheusTemp,
  DescribePolicyConditionListCondition,
  DeletePrometheusTempRequest,
  EnableGrafanaInternetResponse,
  DescribeProductListRequest,
  BindPrometheusManagedGrafanaResponse,
  ManagementCommand,
  CreatePrometheusAgentRequest,
  DeleteAlarmNoticesResponse,
  DeletePrometheusTempSyncRequest,
  DescribePluginOverviewsRequest,
  DescribePrometheusGlobalConfigRequest,
  PrometheusInstanceTenantUsage,
  DescribePrometheusZonesRequest,
  ModifyPolicyGroupCondition,
  ModifyPolicyGroupRequest,
  DescribeBaseMetricsRequest,
  DeletePrometheusConfigRequest,
  PrometheusAlertPolicyItem,
  ModifyPrometheusAgentExternalLabelsRequest,
  PrometheusScrapeJob,
  AlarmHierarchicalNotice,
  BindingPolicyObjectDimension,
  DescribePrometheusTempRequest,
  UpdateServiceDiscoveryResponse,
  DescribeBasicAlarmListAlarms,
  CreateAlarmNoticeResponse,
  Condition,
  DeleteGrafanaInstanceResponse,
  PrometheusAgentOverview,
  Filter,
  DescribeProductEventListEventsGroupInfo,
  UpdateSSOAccountRequest,
  CreateSSOAccountResponse,
  PutMonitorDataRequest,
  UpdatePrometheusScrapeJobResponse,
  DescribeAlarmPoliciesRequest,
  DescribePolicyConditionListConfigManualStatType,
  IntegrationConfiguration,
  DescribePrometheusAgentsResponse,
  ModifyPrometheusGlobalNotificationResponse,
  CleanGrafanaInstanceResponse,
  CreateAlertRuleRequest,
  ModifyPrometheusRecordRuleYamlResponse,
  DeletePrometheusScrapeJobsResponse,
  DescribeAlarmPolicyRequest,
  UninstallGrafanaDashboardRequest,
  UpdateGrafanaIntegrationRequest,
  DeletePrometheusRecordRuleYamlRequest,
  MetricDatum,
  DescribeStatisticDataRequest,
  GrafanaNotificationChannel,
  SetDefaultAlarmPolicyRequest,
  CLSNotice,
  LogAlarmReq,
  TerminatePrometheusInstancesResponse,
  UpdateSSOAccountResponse,
  DescribeGrafanaInstancesResponse,
  RunPrometheusInstanceRequest,
  UpdateAlertRuleStateRequest,
  SetDefaultAlarmPolicyResponse,
  BindingPolicyObjectResponse,
} from "./monitor_models"

/**
 * monitor client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("monitor.tencentcloudapi.com", "2018-07-24", clientConfig)
  }

  /**
   * 更新 Grafana 告警通道
   */
  async UpdateGrafanaNotificationChannel(
    req: UpdateGrafanaNotificationChannelRequest,
    cb?: (error: string, rep: UpdateGrafanaNotificationChannelResponse) => void
  ): Promise<UpdateGrafanaNotificationChannelResponse> {
    return this.request("UpdateGrafanaNotificationChannel", req, cb)
  }

  /**
     * 创建 Prometheus 告警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
  async CreateAlertRule(
    req: CreateAlertRuleRequest,
    cb?: (error: string, rep: CreateAlertRuleResponse) => void
  ): Promise<CreateAlertRuleResponse> {
    return this.request("CreateAlertRule", req, cb)
  }

  /**
   * 解除TMP实例的集群关联
   */
  async DeletePrometheusClusterAgent(
    req: DeletePrometheusClusterAgentRequest,
    cb?: (error: string, rep: DeletePrometheusClusterAgentResponse) => void
  ): Promise<DeletePrometheusClusterAgentResponse> {
    return this.request("DeletePrometheusClusterAgent", req, cb)
  }

  /**
   * 获取已绑定对象列表
   */
  async DescribeBindingPolicyObjectList(
    req: DescribeBindingPolicyObjectListRequest,
    cb?: (error: string, rep: DescribeBindingPolicyObjectListResponse) => void
  ): Promise<DescribeBindingPolicyObjectListResponse> {
    return this.request("DescribeBindingPolicyObjectList", req, cb)
  }

  /**
     * 更新 Prometheus 的报警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
  async UpdateAlertRule(
    req: UpdateAlertRuleRequest,
    cb?: (error: string, rep: UpdateAlertRuleResponse) => void
  ): Promise<UpdateAlertRuleResponse> {
    return this.request("UpdateAlertRule", req, cb)
  }

  /**
   * 修改2.0实例告警策略
   */
  async ModifyPrometheusAlertPolicy(
    req: ModifyPrometheusAlertPolicyRequest,
    cb?: (error: string, rep: ModifyPrometheusAlertPolicyResponse) => void
  ): Promise<ModifyPrometheusAlertPolicyResponse> {
    return this.request("ModifyPrometheusAlertPolicy", req, cb)
  }

  /**
   *  查询Prometheus按量实例用量
   */
  async DescribePrometheusInstanceUsage(
    req: DescribePrometheusInstanceUsageRequest,
    cb?: (error: string, rep: DescribePrometheusInstanceUsageResponse) => void
  ): Promise<DescribePrometheusInstanceUsageResponse> {
    return this.request("DescribePrometheusInstanceUsage", req, cb)
  }

  /**
   * 修改告警接收人
   */
  async ModifyAlarmReceivers(
    req: ModifyAlarmReceiversRequest,
    cb?: (error: string, rep: ModifyAlarmReceiversResponse) => void
  ): Promise<ModifyAlarmReceiversResponse> {
    return this.request("ModifyAlarmReceivers", req, cb)
  }

  /**
   * 将告警策略绑定到特定对象
   */
  async BindingPolicyObject(
    req: BindingPolicyObjectRequest,
    cb?: (error: string, rep: BindingPolicyObjectResponse) => void
  ): Promise<BindingPolicyObjectResponse> {
    return this.request("BindingPolicyObject", req, cb)
  }

  /**
   * 创建 Grafana 实例
   */
  async CreateGrafanaInstance(
    req: CreateGrafanaInstanceRequest,
    cb?: (error: string, rep: CreateGrafanaInstanceResponse) => void
  ): Promise<CreateGrafanaInstanceResponse> {
    return this.request("CreateGrafanaInstance", req, cb)
  }

  /**
   * 创建告警策略
   */
  async CreateAlarmPolicy(
    req: CreateAlarmPolicyRequest,
    cb?: (error: string, rep: CreateAlarmPolicyResponse) => void
  ): Promise<CreateAlarmPolicyResponse> {
    return this.request("CreateAlarmPolicy", req, cb)
  }

  /**
   * 查询腾讯云可观测平台云产品列表，支持云服务器CVM、云数据库、云消息队列、负载均衡、容器服务、专线等云产品。
   */
  async DescribeProductList(
    req: DescribeProductListRequest,
    cb?: (error: string, rep: DescribeProductListResponse) => void
  ): Promise<DescribeProductListResponse> {
    return this.request("DescribeProductList", req, cb)
  }

  /**
   * 获取聚合规则列表，包含关联集群内crd资源创建的record rule
   */
  async DescribePrometheusRecordRules(
    req: DescribePrometheusRecordRulesRequest,
    cb?: (error: string, rep: DescribePrometheusRecordRulesResponse) => void
  ): Promise<DescribePrometheusRecordRulesResponse> {
    return this.request("DescribePrometheusRecordRules", req, cb)
  }

  /**
   * 更新已授权账号的备注、权限信息，会直接覆盖原有的信息，不传则不会更新。
   */
  async UpdateSSOAccount(
    req: UpdateSSOAccountRequest,
    cb?: (error: string, rep: UpdateSSOAccountResponse) => void
  ): Promise<UpdateSSOAccountResponse> {
    return this.request("UpdateSSOAccount", req, cb)
  }

  /**
   * 获取TMP实例关联集群列表
   */
  async DescribePrometheusClusterAgents(
    req: DescribePrometheusClusterAgentsRequest,
    cb?: (error: string, rep: DescribePrometheusClusterAgentsResponse) => void
  ): Promise<DescribePrometheusClusterAgentsResponse> {
    return this.request("DescribePrometheusClusterAgents", req, cb)
  }

  /**
   * 判断用户是否为云原生监控新用户，即在任何地域下均未创建过监控实例的用户
   */
  async CheckIsPrometheusNewUser(
    req?: CheckIsPrometheusNewUserRequest,
    cb?: (error: string, rep: CheckIsPrometheusNewUserResponse) => void
  ): Promise<CheckIsPrometheusNewUserResponse> {
    return this.request("CheckIsPrometheusNewUser", req, cb)
  }

  /**
   * 列出 Grafana 环境变量
   */
  async DescribeGrafanaEnvironments(
    req: DescribeGrafanaEnvironmentsRequest,
    cb?: (error: string, rep: DescribeGrafanaEnvironmentsResponse) => void
  ): Promise<DescribeGrafanaEnvironmentsResponse> {
    return this.request("DescribeGrafanaEnvironments", req, cb)
  }

  /**
   * 更新 Prometheus 的预聚合规则
   */
  async UpdateRecordingRule(
    req: UpdateRecordingRuleRequest,
    cb?: (error: string, rep: UpdateRecordingRuleResponse) => void
  ): Promise<UpdateRecordingRuleResponse> {
    return this.request("UpdateRecordingRule", req, cb)
  }

  /**
   * 删除 Grafana 告警通道
   */
  async DeleteGrafanaNotificationChannel(
    req: DeleteGrafanaNotificationChannelRequest,
    cb?: (error: string, rep: DeleteGrafanaNotificationChannelResponse) => void
  ): Promise<DeleteGrafanaNotificationChannelResponse> {
    return this.request("DeleteGrafanaNotificationChannel", req, cb)
  }

  /**
   * 根据维度条件查询监控数据
   */
  async DescribeStatisticData(
    req: DescribeStatisticDataRequest,
    cb?: (error: string, rep: DescribeStatisticDataResponse) => void
  ): Promise<DescribeStatisticDataResponse> {
    return this.request("DescribeStatisticData", req, cb)
  }

  /**
   * 列出 Grafana 的设置，即 grafana.ini 文件内容
   */
  async DescribeGrafanaConfig(
    req: DescribeGrafanaConfigRequest,
    cb?: (error: string, rep: DescribeGrafanaConfigResponse) => void
  ): Promise<DescribeGrafanaConfigResponse> {
    return this.request("DescribeGrafanaConfig", req, cb)
  }

  /**
   * 告警2.0编辑告警策略基本信息，包括策略名、备注
   */
  async ModifyAlarmPolicyInfo(
    req: ModifyAlarmPolicyInfoRequest,
    cb?: (error: string, rep: ModifyAlarmPolicyInfoResponse) => void
  ): Promise<ModifyAlarmPolicyInfoResponse> {
    return this.request("ModifyAlarmPolicyInfo", req, cb)
  }

  /**
   * 启停告警策略
   */
  async ModifyAlarmPolicyStatus(
    req: ModifyAlarmPolicyStatusRequest,
    cb?: (error: string, rep: ModifyAlarmPolicyStatusResponse) => void
  ): Promise<ModifyAlarmPolicyStatusResponse> {
    return this.request("ModifyAlarmPolicyStatus", req, cb)
  }

  /**
   * 删除 Prometheus 抓取任务
   */
  async DeletePrometheusScrapeJobs(
    req: DeletePrometheusScrapeJobsRequest,
    cb?: (error: string, rep: DeletePrometheusScrapeJobsResponse) => void
  ): Promise<DeletePrometheusScrapeJobsResponse> {
    return this.request("DeletePrometheusScrapeJobs", req, cb)
  }

  /**
   * 设置 Grafana 单点登录，使用腾讯云账号
   */
  async EnableGrafanaSSO(
    req: EnableGrafanaSSORequest,
    cb?: (error: string, rep: EnableGrafanaSSOResponse) => void
  ): Promise<EnableGrafanaSSOResponse> {
    return this.request("EnableGrafanaSSO", req, cb)
  }

  /**
   * 批量删除 Prometheus 报警规则
   */
  async DeleteAlertRules(
    req: DeleteAlertRulesRequest,
    cb?: (error: string, rep: DeleteAlertRulesResponse) => void
  ): Promise<DeleteAlertRulesResponse> {
    return this.request("DeleteAlertRules", req, cb)
  }

  /**
   * 获取基础指标属性
   */
  async DescribeBaseMetrics(
    req: DescribeBaseMetricsRequest,
    cb?: (error: string, rep: DescribeBaseMetricsResponse) => void
  ): Promise<DescribeBaseMetricsResponse> {
    return this.request("DescribeBaseMetrics", req, cb)
  }

  /**
   * 查询告警事件列表
   */
  async DescribeAlarmEvents(
    req: DescribeAlarmEventsRequest,
    cb?: (error: string, rep: DescribeAlarmEventsResponse) => void
  ): Promise<DescribeAlarmEventsResponse> {
    return this.request("DescribeAlarmEvents", req, cb)
  }

  /**
   * 删除告警通知模板
   */
  async DeleteAlarmNotices(
    req: DeleteAlarmNoticesRequest,
    cb?: (error: string, rep: DeleteAlarmNoticesResponse) => void
  ): Promise<DeleteAlarmNoticesResponse> {
    return this.request("DeleteAlarmNotices", req, cb)
  }

  /**
   * 编辑告警通知模板
   */
  async ModifyAlarmNotice(
    req: ModifyAlarmNoticeRequest,
    cb?: (error: string, rep: ModifyAlarmNoticeResponse) => void
  ): Promise<ModifyAlarmNoticeResponse> {
    return this.request("ModifyAlarmNotice", req, cb)
  }

  /**
   * 获取TMP实例详情
   */
  async DescribePrometheusInstanceDetail(
    req: DescribePrometheusInstanceDetailRequest,
    cb?: (error: string, rep: DescribePrometheusInstanceDetailResponse) => void
  ): Promise<DescribePrometheusInstanceDetailResponse> {
    return this.request("DescribePrometheusInstanceDetail", req, cb)
  }

  /**
   * 创建 Prometheus 抓取任务
   */
  async CreatePrometheusScrapeJob(
    req: CreatePrometheusScrapeJobRequest,
    cb?: (error: string, rep: CreatePrometheusScrapeJobResponse) => void
  ): Promise<CreatePrometheusScrapeJobResponse> {
    return this.request("CreatePrometheusScrapeJob", req, cb)
  }

  /**
   * 删除策略的关联对象
   */
  async UnBindingPolicyObject(
    req: UnBindingPolicyObjectRequest,
    cb?: (error: string, rep: UnBindingPolicyObjectResponse) => void
  ): Promise<UnBindingPolicyObjectResponse> {
    return this.request("UnBindingPolicyObject", req, cb)
  }

  /**
   * 获取条件模板列表
   */
  async DescribeConditionsTemplateList(
    req: DescribeConditionsTemplateListRequest,
    cb?: (error: string, rep: DescribeConditionsTemplateListResponse) => void
  ): Promise<DescribeConditionsTemplateListResponse> {
    return this.request("DescribeConditionsTemplateList", req, cb)
  }

  /**
   * 列出 Prometheus 抓取任务
   */
  async DescribePrometheusScrapeJobs(
    req: DescribePrometheusScrapeJobsRequest,
    cb?: (error: string, rep: DescribePrometheusScrapeJobsResponse) => void
  ): Promise<DescribePrometheusScrapeJobsResponse> {
    return this.request("DescribePrometheusScrapeJobs", req, cb)
  }

  /**
     * 删除在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
  async DeleteServiceDiscovery(
    req: DeleteServiceDiscoveryRequest,
    cb?: (error: string, rep: DeleteServiceDiscoveryResponse) => void
  ): Promise<DeleteServiceDiscoveryResponse> {
    return this.request("DeleteServiceDiscovery", req, cb)
  }

  /**
   * 与腾讯云可观测融合的2.0实例关联集群
   */
  async CreatePrometheusClusterAgent(
    req: CreatePrometheusClusterAgentRequest,
    cb?: (error: string, rep: CreatePrometheusClusterAgentResponse) => void
  ): Promise<CreatePrometheusClusterAgentResponse> {
    return this.request("CreatePrometheusClusterAgent", req, cb)
  }

  /**
   * 策略绑定标签
   */
  async BindingPolicyTag(
    req: BindingPolicyTagRequest,
    cb?: (error: string, rep: BindingPolicyTagResponse) => void
  ): Promise<BindingPolicyTagResponse> {
    return this.request("BindingPolicyTag", req, cb)
  }

  /**
   * 创建按量 Prometheus 实例，根据用量收费实例
   */
  async CreatePrometheusMultiTenantInstancePostPayMode(
    req: CreatePrometheusMultiTenantInstancePostPayModeRequest,
    cb?: (error: string, rep: CreatePrometheusMultiTenantInstancePostPayModeResponse) => void
  ): Promise<CreatePrometheusMultiTenantInstancePostPayModeResponse> {
    return this.request("CreatePrometheusMultiTenantInstancePostPayMode", req, cb)
  }

  /**
   * 更新 Grafana 环境变量
   */
  async UpdateGrafanaEnvironments(
    req: UpdateGrafanaEnvironmentsRequest,
    cb?: (error: string, rep: UpdateGrafanaEnvironmentsResponse) => void
  ): Promise<UpdateGrafanaEnvironmentsResponse> {
    return this.request("UpdateGrafanaEnvironments", req, cb)
  }

  /**
   * 获取基础告警策略条件
   */
  async DescribePolicyConditionList(
    req: DescribePolicyConditionListRequest,
    cb?: (error: string, rep: DescribePolicyConditionListResponse) => void
  ): Promise<DescribePolicyConditionListResponse> {
    return this.request("DescribePolicyConditionList", req, cb)
  }

  /**
   * 修改告警策略触发条件
   */
  async ModifyAlarmPolicyCondition(
    req: ModifyAlarmPolicyConditionRequest,
    cb?: (error: string, rep: ModifyAlarmPolicyConditionResponse) => void
  ): Promise<ModifyAlarmPolicyConditionResponse> {
    return this.request("ModifyAlarmPolicyCondition", req, cb)
  }

  /**
   * 获取 Prometheus Agent 管理相关的命令行
   */
  async GetPrometheusAgentManagementCommand(
    req: GetPrometheusAgentManagementCommandRequest,
    cb?: (error: string, rep: GetPrometheusAgentManagementCommandResponse) => void
  ): Promise<GetPrometheusAgentManagementCommandResponse> {
    return this.request("GetPrometheusAgentManagementCommand", req, cb)
  }

  /**
   * 更新 exporter 集成配置
   */
  async UpdateExporterIntegration(
    req: UpdateExporterIntegrationRequest,
    cb?: (error: string, rep: UpdateExporterIntegrationResponse) => void
  ): Promise<UpdateExporterIntegrationResponse> {
    return this.request("UpdateExporterIntegration", req, cb)
  }

  /**
   * 更新 Prometheus 抓取任务
   */
  async UpdatePrometheusScrapeJob(
    req: UpdatePrometheusScrapeJobRequest,
    cb?: (error: string, rep: UpdatePrometheusScrapeJobResponse) => void
  ): Promise<UpdatePrometheusScrapeJobResponse> {
    return this.request("UpdatePrometheusScrapeJob", req, cb)
  }

  /**
   * 获取2.0实例初始化任务状态
   */
  async DescribePrometheusInstanceInitStatus(
    req: DescribePrometheusInstanceInitStatusRequest,
    cb?: (error: string, rep: DescribePrometheusInstanceInitStatusResponse) => void
  ): Promise<DescribePrometheusInstanceInitStatusResponse> {
    return this.request("DescribePrometheusInstanceInitStatus", req, cb)
  }

  /**
   * 升级 Grafana 实例
   */
  async UpgradeGrafanaInstance(
    req: UpgradeGrafanaInstanceRequest,
    cb?: (error: string, rep: UpgradeGrafanaInstanceResponse) => void
  ): Promise<UpgradeGrafanaInstanceResponse> {
    return this.request("UpgradeGrafanaInstance", req, cb)
  }

  /**
   * 列出 Grafana 所有告警通道
   */
  async DescribeGrafanaChannels(
    req: DescribeGrafanaChannelsRequest,
    cb?: (error: string, rep: DescribeGrafanaChannelsResponse) => void
  ): Promise<DescribeGrafanaChannelsResponse> {
    return this.request("DescribeGrafanaChannels", req, cb)
  }

  /**
   * 删除 Grafana 集成配置
   */
  async DeleteGrafanaIntegration(
    req: DeleteGrafanaIntegrationRequest,
    cb?: (error: string, rep: DeleteGrafanaIntegrationResponse) => void
  ): Promise<DeleteGrafanaIntegrationResponse> {
    return this.request("DeleteGrafanaIntegration", req, cb)
  }

  /**
   * 绑定 Grafana 可视化服务实例
   */
  async BindPrometheusManagedGrafana(
    req: BindPrometheusManagedGrafanaRequest,
    cb?: (error: string, rep: BindPrometheusManagedGrafanaResponse) => void
  ): Promise<BindPrometheusManagedGrafanaResponse> {
    return this.request("BindPrometheusManagedGrafana", req, cb)
  }

  /**
   * 删除全部的关联对象
   */
  async UnBindingAllPolicyObject(
    req: UnBindingAllPolicyObjectRequest,
    cb?: (error: string, rep: UnBindingAllPolicyObjectResponse) => void
  ): Promise<UnBindingAllPolicyObjectResponse> {
    return this.request("UnBindingAllPolicyObject", req, cb)
  }

  /**
   * 删除告警策略组
   */
  async DeletePolicyGroup(
    req: DeletePolicyGroupRequest,
    cb?: (error: string, rep: DeletePolicyGroupResponse) => void
  ): Promise<DeletePolicyGroupResponse> {
    return this.request("DeletePolicyGroup", req, cb)
  }

  /**
     * 在腾讯云容器服务下更新 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
  async UpdateServiceDiscovery(
    req: UpdateServiceDiscoveryRequest,
    cb?: (error: string, rep: UpdateServiceDiscoveryResponse) => void
  ): Promise<UpdateServiceDiscoveryResponse> {
    return this.request("UpdateServiceDiscovery", req, cb)
  }

  /**
   * 腾讯云可观测平台支持多种类型的监控，此接口列出支持的所有类型
   */
  async DescribeMonitorTypes(
    req: DescribeMonitorTypesRequest,
    cb?: (error: string, rep: DescribeMonitorTypesResponse) => void
  ): Promise<DescribeMonitorTypesResponse> {
    return this.request("DescribeMonitorTypes", req, cb)
  }

  /**
   * SSO单点登录时，设置是否cam鉴权
   */
  async EnableSSOCamCheck(
    req: EnableSSOCamCheckRequest,
    cb?: (error: string, rep: EnableSSOCamCheckResponse) => void
  ): Promise<EnableSSOCamCheckResponse> {
    return this.request("EnableSSOCamCheck", req, cb)
  }

  /**
   * 安装 Grafana Plugin
   */
  async InstallPlugins(
    req: InstallPluginsRequest,
    cb?: (error: string, rep: InstallPluginsResponse) => void
  ): Promise<InstallPluginsResponse> {
    return this.request("InstallPlugins", req, cb)
  }

  /**
   * 创建 exporter 集成
   */
  async CreateExporterIntegration(
    req: CreateExporterIntegrationRequest,
    cb?: (error: string, rep: CreateExporterIntegrationResponse) => void
  ): Promise<CreateExporterIntegrationResponse> {
    return this.request("CreateExporterIntegration", req, cb)
  }

  /**
   * 批量删除 Prometheus 预聚合规则
   */
  async DeleteRecordingRules(
    req: DeleteRecordingRulesRequest,
    cb?: (error: string, rep: DeleteRecordingRulesResponse) => void
  ): Promise<DeleteRecordingRulesResponse> {
    return this.request("DeleteRecordingRules", req, cb)
  }

  /**
   * 分页获取产品事件的列表
   */
  async DescribeProductEventList(
    req: DescribeProductEventListRequest,
    cb?: (error: string, rep: DescribeProductEventListResponse) => void
  ): Promise<DescribeProductEventListResponse> {
    return this.request("DescribeProductEventList", req, cb)
  }

  /**
     * 查询告警历史

请注意，**如果使用子用户进行告警历史的查询，只能查询到被授权项目下的告警历史**，或不区分项目的产品的告警历史。如何对子账户授予项目的权限，请参考 [访问管理-项目与标签](https://cloud.tencent.com/document/product/598/32738)。
     */
  async DescribeAlarmHistories(
    req: DescribeAlarmHistoriesRequest,
    cb?: (error: string, rep: DescribeAlarmHistoriesResponse) => void
  ): Promise<DescribeAlarmHistoriesResponse> {
    return this.request("DescribeAlarmHistories", req, cb)
  }

  /**
   * 创建通知模板
   */
  async CreateAlarmNotice(
    req: CreateAlarmNoticeRequest,
    cb?: (error: string, rep: CreateAlarmNoticeResponse) => void
  ): Promise<CreateAlarmNoticeResponse> {
    return this.request("CreateAlarmNotice", req, cb)
  }

  /**
   * Grafana可视化服务 删除授权用户
   */
  async DeleteSSOAccount(
    req: DeleteSSOAccountRequest,
    cb?: (error: string, rep: DeleteSSOAccountResponse) => void
  ): Promise<DeleteSSOAccountResponse> {
    return this.request("DeleteSSOAccount", req, cb)
  }

  /**
   * 查询单个通知模板的详情
   */
  async DescribeAlarmNotice(
    req: DescribeAlarmNoticeRequest,
    cb?: (error: string, rep: DescribeAlarmNoticeResponse) => void
  ): Promise<DescribeAlarmNoticeResponse> {
    return this.request("DescribeAlarmNotice", req, cb)
  }

  /**
   * 创建 Grafana 集成配置
   */
  async CreateGrafanaIntegration(
    req: CreateGrafanaIntegrationRequest,
    cb?: (error: string, rep: CreateGrafanaIntegrationResponse) => void
  ): Promise<CreateGrafanaIntegrationResponse> {
    return this.request("CreateGrafanaIntegration", req, cb)
  }

  /**
   * 拉取模板列表，默认模板将总是在最前面
   */
  async DescribePrometheusTemp(
    req: DescribePrometheusTempRequest,
    cb?: (error: string, rep: DescribePrometheusTempResponse) => void
  ): Promise<DescribePrometheusTempResponse> {
    return this.request("DescribePrometheusTemp", req, cb)
  }

  /**
   * 更新 Grafana 白名单
   */
  async UpdateGrafanaWhiteList(
    req: UpdateGrafanaWhiteListRequest,
    cb?: (error: string, rep: UpdateGrafanaWhiteListResponse) => void
  ): Promise<UpdateGrafanaWhiteListResponse> {
    return this.request("UpdateGrafanaWhiteList", req, cb)
  }

  /**
     * 设置一个策略为该告警策略类型、该项目的默认告警策略。
同一项目下相同的告警策略类型，就会被设置为非默认。
     */
  async SetDefaultAlarmPolicy(
    req: SetDefaultAlarmPolicyRequest,
    cb?: (error: string, rep: SetDefaultAlarmPolicyResponse) => void
  ): Promise<SetDefaultAlarmPolicyResponse> {
    return this.request("SetDefaultAlarmPolicy", req, cb)
  }

  /**
   * 删除 Grafana 实例
   */
  async DeleteGrafanaInstance(
    req: DeleteGrafanaInstanceRequest,
    cb?: (error: string, rep: DeleteGrafanaInstanceResponse) => void
  ): Promise<DeleteGrafanaInstanceResponse> {
    return this.request("DeleteGrafanaInstance", req, cb)
  }

  /**
   * 删除Prometheus配置，如果目标不存在，将返回成功
   */
  async DeletePrometheusConfig(
    req: DeletePrometheusConfigRequest,
    cb?: (error: string, rep: DeletePrometheusConfigResponse) => void
  ): Promise<DeletePrometheusConfigResponse> {
    return this.request("DeletePrometheusConfig", req, cb)
  }

  /**
   * Grafana实例授权其他腾讯云用户
   */
  async CreateSSOAccount(
    req: CreateSSOAccountRequest,
    cb?: (error: string, rep: CreateSSOAccountResponse) => void
  ): Promise<CreateSSOAccountResponse> {
    return this.request("CreateSSOAccount", req, cb)
  }

  /**
   * 发送自定义消息告警
   */
  async SendCustomAlarmMsg(
    req: SendCustomAlarmMsgRequest,
    cb?: (error: string, rep: SendCustomAlarmMsgResponse) => void
  ): Promise<SendCustomAlarmMsgResponse> {
    return this.request("SendCustomAlarmMsg", req, cb)
  }

  /**
   * 告警修改告警策略绑定的告警通知模板
   */
  async ModifyAlarmPolicyNotice(
    req: ModifyAlarmPolicyNoticeRequest,
    cb?: (error: string, rep: ModifyAlarmPolicyNoticeResponse) => void
  ): Promise<ModifyAlarmPolicyNoticeResponse> {
    return this.request("ModifyAlarmPolicyNotice", req, cb)
  }

  /**
   * 设置 Grafana 公网访问
   */
  async EnableGrafanaInternet(
    req: EnableGrafanaInternetRequest,
    cb?: (error: string, rep: EnableGrafanaInternetResponse) => void
  ): Promise<EnableGrafanaInternetResponse> {
    return this.request("EnableGrafanaInternet", req, cb)
  }

  /**
   * 创建 Grafana 告警通道
   */
  async CreateGrafanaNotificationChannel(
    req: CreateGrafanaNotificationChannelRequest,
    cb?: (error: string, rep: CreateGrafanaNotificationChannelResponse) => void
  ): Promise<CreateGrafanaNotificationChannelResponse> {
    return this.request("CreateGrafanaNotificationChannel", req, cb)
  }

  /**
   * 修改 Grafana 实例属性
   */
  async ModifyGrafanaInstance(
    req: ModifyGrafanaInstanceRequest,
    cb?: (error: string, rep: ModifyGrafanaInstanceResponse) => void
  ): Promise<ModifyGrafanaInstanceResponse> {
    return this.request("ModifyGrafanaInstance", req, cb)
  }

  /**
   * 恢复 Grafana 实例
   */
  async ResumeGrafanaInstance(
    req: ResumeGrafanaInstanceRequest,
    cb?: (error: string, rep: ResumeGrafanaInstanceResponse) => void
  ): Promise<ResumeGrafanaInstanceResponse> {
    return this.request("ResumeGrafanaInstance", req, cb)
  }

  /**
   * 创建一个云原生Prometheus模板
   */
  async CreatePrometheusTemp(
    req: CreatePrometheusTempRequest,
    cb?: (error: string, rep: CreatePrometheusTempResponse) => void
  ): Promise<CreatePrometheusTempResponse> {
    return this.request("CreatePrometheusTemp", req, cb)
  }

  /**
   * 列出当前grafana实例的所有授权账号
   */
  async DescribeSSOAccount(
    req: DescribeSSOAccountRequest,
    cb?: (error: string, rep: DescribeSSOAccountResponse) => void
  ): Promise<DescribeSSOAccountResponse> {
    return this.request("DescribeSSOAccount", req, cb)
  }

  /**
   * 获取基础告警列表
   */
  async DescribeBasicAlarmList(
    req: DescribeBasicAlarmListRequest,
    cb?: (error: string, rep: DescribeBasicAlarmListResponse) => void
  ): Promise<DescribeBasicAlarmListResponse> {
    return this.request("DescribeBasicAlarmList", req, cb)
  }

  /**
   * 创建 Prometheus CVM Agent
   */
  async CreatePrometheusAgent(
    req: CreatePrometheusAgentRequest,
    cb?: (error: string, rep: CreatePrometheusAgentResponse) => void
  ): Promise<CreatePrometheusAgentResponse> {
    return this.request("CreatePrometheusAgent", req, cb)
  }

  /**
   * 同步模板到实例或者集群，针对V2版本实例
   */
  async SyncPrometheusTemp(
    req: SyncPrometheusTempRequest,
    cb?: (error: string, rep: SyncPrometheusTempResponse) => void
  ): Promise<SyncPrometheusTempResponse> {
    return this.request("SyncPrometheusTemp", req, cb)
  }

  /**
   * 创建全局告警通知渠道
   */
  async CreatePrometheusGlobalNotification(
    req: CreatePrometheusGlobalNotificationRequest,
    cb?: (error: string, rep: CreatePrometheusGlobalNotificationResponse) => void
  ): Promise<CreatePrometheusGlobalNotificationResponse> {
    return this.request("CreatePrometheusGlobalNotification", req, cb)
  }

  /**
   * 更新 Prometheus 报警策略状态
   */
  async UpdateAlertRuleState(
    req: UpdateAlertRuleStateRequest,
    cb?: (error: string, rep: UpdateAlertRuleStateResponse) => void
  ): Promise<UpdateAlertRuleStateResponse> {
    return this.request("UpdateAlertRuleState", req, cb)
  }

  /**
   * 修改模板内容
   */
  async ModifyPrometheusTemp(
    req: ModifyPrometheusTempRequest,
    cb?: (error: string, rep: ModifyPrometheusTempResponse) => void
  ): Promise<ModifyPrometheusTempResponse> {
    return this.request("ModifyPrometheusTemp", req, cb)
  }

  /**
   * 解除实例绑定的 Grafana 可视化实例
   */
  async UnbindPrometheusManagedGrafana(
    req: UnbindPrometheusManagedGrafanaRequest,
    cb?: (error: string, rep: UnbindPrometheusManagedGrafanaResponse) => void
  ): Promise<UnbindPrometheusManagedGrafanaResponse> {
    return this.request("UnbindPrometheusManagedGrafana", req, cb)
  }

  /**
   * 初始化TMP实例，开启集成中心时调用
   */
  async RunPrometheusInstance(
    req: RunPrometheusInstanceRequest,
    cb?: (error: string, rep: RunPrometheusInstanceResponse) => void
  ): Promise<RunPrometheusInstanceResponse> {
    return this.request("RunPrometheusInstance", req, cb)
  }

  /**
   * 查询 exporter 集成列表
   */
  async DescribeExporterIntegrations(
    req: DescribeExporterIntegrationsRequest,
    cb?: (error: string, rep: DescribeExporterIntegrationsResponse) => void
  ): Promise<DescribeExporterIntegrationsResponse> {
    return this.request("DescribeExporterIntegrations", req, cb)
  }

  /**
   * 列出实例已安装的插件
   */
  async DescribeInstalledPlugins(
    req: DescribeInstalledPluginsRequest,
    cb?: (error: string, rep: DescribeInstalledPluginsResponse) => void
  ): Promise<DescribeInstalledPluginsResponse> {
    return this.request("DescribeInstalledPlugins", req, cb)
  }

  /**
   * 查询全局告警通知渠道
   */
  async DescribePrometheusGlobalNotification(
    req: DescribePrometheusGlobalNotificationRequest,
    cb?: (error: string, rep: DescribePrometheusGlobalNotificationResponse) => void
  ): Promise<DescribePrometheusGlobalNotificationResponse> {
    return this.request("DescribePrometheusGlobalNotification", req, cb)
  }

  /**
   * 升级 Grafana Dashboard
   */
  async UpgradeGrafanaDashboard(
    req: UpgradeGrafanaDashboardRequest,
    cb?: (error: string, rep: UpgradeGrafanaDashboardResponse) => void
  ): Promise<UpgradeGrafanaDashboardResponse> {
    return this.request("UpgradeGrafanaDashboard", req, cb)
  }

  /**
   * 查询通知模板列表
   */
  async DescribeAlarmNotices(
    req: DescribeAlarmNoticesRequest,
    cb?: (error: string, rep: DescribeAlarmNoticesResponse) => void
  ): Promise<DescribeAlarmNoticesResponse> {
    return this.request("DescribeAlarmNotices", req, cb)
  }

  /**
   * 列出 Grafana DNS 配置
   */
  async DescribeDNSConfig(
    req: DescribeDNSConfigRequest,
    cb?: (error: string, rep: DescribeDNSConfigResponse) => void
  ): Promise<DescribeDNSConfigResponse> {
    return this.request("DescribeDNSConfig", req, cb)
  }

  /**
   * 修改全局告警通知渠道
   */
  async ModifyPrometheusGlobalNotification(
    req: ModifyPrometheusGlobalNotificationRequest,
    cb?: (error: string, rep: ModifyPrometheusGlobalNotificationResponse) => void
  ): Promise<ModifyPrometheusGlobalNotificationResponse> {
    return this.request("ModifyPrometheusGlobalNotification", req, cb)
  }

  /**
   * 获取关联目标集群的实例列表
   */
  async DescribePrometheusAgentInstances(
    req: DescribePrometheusAgentInstancesRequest,
    cb?: (error: string, rep: DescribePrometheusAgentInstancesResponse) => void
  ): Promise<DescribePrometheusAgentInstancesResponse> {
    return this.request("DescribePrometheusAgentInstances", req, cb)
  }

  /**
   * 删除聚合实例
   */
  async DeletePrometheusRecordRuleYaml(
    req: DeletePrometheusRecordRuleYamlRequest,
    cb?: (error: string, rep: DeletePrometheusRecordRuleYamlResponse) => void
  ): Promise<DeletePrometheusRecordRuleYamlResponse> {
    return this.request("DeletePrometheusRecordRuleYaml", req, cb)
  }

  /**
     * 本接口 (DescribePrometheusInstances) 用于查询一个或多个实例的详细信息。
<ul>
<li>可以根据实例ID、实例名称或者实例状态等信息来查询实例的详细信息</li>
<li>如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的实例。</li>
</ul>
     */
  async DescribePrometheusInstances(
    req: DescribePrometheusInstancesRequest,
    cb?: (error: string, rep: DescribePrometheusInstancesResponse) => void
  ): Promise<DescribePrometheusInstancesResponse> {
    return this.request("DescribePrometheusInstances", req, cb)
  }

  /**
   * 列出用户所有的 Grafana 服务
   */
  async DescribeGrafanaInstances(
    req: DescribeGrafanaInstancesRequest,
    cb?: (error: string, rep: DescribeGrafanaInstancesResponse) => void
  ): Promise<DescribeGrafanaInstancesResponse> {
    return this.request("DescribeGrafanaInstances", req, cb)
  }

  /**
   * 通过yaml的方式修改Prometheus聚合实例
   */
  async ModifyPrometheusRecordRuleYaml(
    req: ModifyPrometheusRecordRuleYamlRequest,
    cb?: (error: string, rep: ModifyPrometheusRecordRuleYamlResponse) => void
  ): Promise<ModifyPrometheusRecordRuleYamlResponse> {
    return this.request("ModifyPrometheusRecordRuleYaml", req, cb)
  }

  /**
   * 更新 Grafana 配置
   */
  async UpdateGrafanaConfig(
    req: UpdateGrafanaConfigRequest,
    cb?: (error: string, rep: UpdateGrafanaConfigResponse) => void
  ): Promise<UpdateGrafanaConfigResponse> {
    return this.request("UpdateGrafanaConfig", req, cb)
  }

  /**
   * 列出 Grafana 告警通道
   */
  async DescribeGrafanaNotificationChannels(
    req: DescribeGrafanaNotificationChannelsRequest,
    cb?: (error: string, rep: DescribeGrafanaNotificationChannelsResponse) => void
  ): Promise<DescribeGrafanaNotificationChannelsResponse> {
    return this.request("DescribeGrafanaNotificationChannels", req, cb)
  }

  /**
   * 修改被关联集群的external labels
   */
  async ModifyPrometheusAgentExternalLabels(
    req: ModifyPrometheusAgentExternalLabelsRequest,
    cb?: (error: string, rep: ModifyPrometheusAgentExternalLabelsResponse) => void
  ): Promise<ModifyPrometheusAgentExternalLabelsResponse> {
    return this.request("ModifyPrometheusAgentExternalLabels", req, cb)
  }

  /**
   * 更新策略组
   */
  async ModifyPolicyGroup(
    req: ModifyPolicyGroupRequest,
    cb?: (error: string, rep: ModifyPolicyGroupResponse) => void
  ): Promise<ModifyPolicyGroupResponse> {
    return this.request("ModifyPolicyGroup", req, cb)
  }

  /**
   * 获取平台事件列表
   */
  async DescribeAccidentEventList(
    req: DescribeAccidentEventListRequest,
    cb?: (error: string, rep: DescribeAccidentEventListResponse) => void
  ): Promise<DescribeAccidentEventListResponse> {
    return this.request("DescribeAccidentEventList", req, cb)
  }

  /**
   * 获取模板关联实例信息，针对V2版本实例
   */
  async DescribePrometheusTempSync(
    req: DescribePrometheusTempSyncRequest,
    cb?: (error: string, rep: DescribePrometheusTempSyncResponse) => void
  ): Promise<DescribePrometheusTempSyncResponse> {
    return this.request("DescribePrometheusTempSync", req, cb)
  }

  /**
   * 列出 Prometheus 服务可用区
   */
  async DescribePrometheusZones(
    req: DescribePrometheusZonesRequest,
    cb?: (error: string, rep: DescribePrometheusZonesResponse) => void
  ): Promise<DescribePrometheusZonesResponse> {
    return this.request("DescribePrometheusZones", req, cb)
  }

  /**
   * 查询告警指标列表
   */
  async DescribeAlarmMetrics(
    req: DescribeAlarmMetricsRequest,
    cb?: (error: string, rep: DescribeAlarmMetricsResponse) => void
  ): Promise<DescribeAlarmMetricsResponse> {
    return this.request("DescribeAlarmMetrics", req, cb)
  }

  /**
   * 修改告警策略的触发任务，TriggerTasks字段放触发任务列表，TriggerTasks传空数组时，代表解绑该策略的所有触发任务。
   */
  async ModifyAlarmPolicyTasks(
    req: ModifyAlarmPolicyTasksRequest,
    cb?: (error: string, rep: ModifyAlarmPolicyTasksResponse) => void
  ): Promise<ModifyAlarmPolicyTasksResponse> {
    return this.request("ModifyAlarmPolicyTasks", req, cb)
  }

  /**
   * 删除 exporter 集成
   */
  async DeleteExporterIntegration(
    req: DeleteExporterIntegrationRequest,
    cb?: (error: string, rep: DeleteExporterIntegrationResponse) => void
  ): Promise<DeleteExporterIntegrationResponse> {
    return this.request("DeleteExporterIntegration", req, cb)
  }

  /**
   * 删除2.0实例告警策略
   */
  async DeletePrometheusAlertPolicy(
    req: DeletePrometheusAlertPolicyRequest,
    cb?: (error: string, rep: DeletePrometheusAlertPolicyResponse) => void
  ): Promise<DeletePrometheusAlertPolicyResponse> {
    return this.request("DeletePrometheusAlertPolicy", req, cb)
  }

  /**
   * 更新 Prometheus CVM Agent 状态
   */
  async UpdatePrometheusAgentStatus(
    req: UpdatePrometheusAgentStatusRequest,
    cb?: (error: string, rep: UpdatePrometheusAgentStatusResponse) => void
  ): Promise<UpdatePrometheusAgentStatusResponse> {
    return this.request("UpdatePrometheusAgentStatus", req, cb)
  }

  /**
   * 创建 Prometheus 的预聚合规则
   */
  async CreateRecordingRule(
    req: CreateRecordingRuleRequest,
    cb?: (error: string, rep: CreateRecordingRuleResponse) => void
  ): Promise<CreateRecordingRuleResponse> {
    return this.request("CreateRecordingRule", req, cb)
  }

  /**
   * Prometheus 报警规则查询接口
   */
  async DescribeAlertRules(
    req: DescribeAlertRulesRequest,
    cb?: (error: string, rep: DescribeAlertRulesResponse) => void
  ): Promise<DescribeAlertRulesResponse> {
    return this.request("DescribeAlertRules", req, cb)
  }

  /**
   * 获得实例级别抓取配置
   */
  async DescribePrometheusGlobalConfig(
    req: DescribePrometheusGlobalConfigRequest,
    cb?: (error: string, rep: DescribePrometheusGlobalConfigResponse) => void
  ): Promise<DescribePrometheusGlobalConfigResponse> {
    return this.request("DescribePrometheusGlobalConfig", req, cb)
  }

  /**
   * 列出 Prometheus CVM Agent
   */
  async DescribePrometheusAgents(
    req: DescribePrometheusAgentsRequest,
    cb?: (error: string, rep: DescribePrometheusAgentsResponse) => void
  ): Promise<DescribePrometheusAgentsResponse> {
    return this.request("DescribePrometheusAgents", req, cb)
  }

  /**
   * 查询告警策略列表
   */
  async DescribeAlarmPolicies(
    req: DescribeAlarmPoliciesRequest,
    cb?: (error: string, rep: DescribeAlarmPoliciesResponse) => void
  ): Promise<DescribeAlarmPoliciesResponse> {
    return this.request("DescribeAlarmPolicies", req, cb)
  }

  /**
   * 获取targets信息
   */
  async DescribePrometheusTargetsTMP(
    req: DescribePrometheusTargetsTMPRequest,
    cb?: (error: string, rep: DescribePrometheusTargetsTMPResponse) => void
  ): Promise<DescribePrometheusTargetsTMPResponse> {
    return this.request("DescribePrometheusTargetsTMP", req, cb)
  }

  /**
   * 列出 Grafana 白名单
   */
  async DescribeGrafanaWhiteList(
    req: DescribeGrafanaWhiteListRequest,
    cb?: (error: string, rep: DescribeGrafanaWhiteListResponse) => void
  ): Promise<DescribeGrafanaWhiteListResponse> {
    return this.request("DescribeGrafanaWhiteList", req, cb)
  }

  /**
   * 创建告警策略
   */
  async CreatePrometheusAlertPolicy(
    req: CreatePrometheusAlertPolicyRequest,
    cb?: (error: string, rep: CreatePrometheusAlertPolicyResponse) => void
  ): Promise<CreatePrometheusAlertPolicyResponse> {
    return this.request("CreatePrometheusAlertPolicy", req, cb)
  }

  /**
   * 强制销毁 Grafana 实例
   */
  async CleanGrafanaInstance(
    req: CleanGrafanaInstanceRequest,
    cb?: (error: string, rep: CleanGrafanaInstanceResponse) => void
  ): Promise<CleanGrafanaInstanceResponse> {
    return this.request("CleanGrafanaInstance", req, cb)
  }

  /**
   * 删除 Grafana Dashboard
   */
  async UninstallGrafanaDashboard(
    req: UninstallGrafanaDashboardRequest,
    cb?: (error: string, rep: UninstallGrafanaDashboardResponse) => void
  ): Promise<UninstallGrafanaDashboardResponse> {
    return this.request("UninstallGrafanaDashboard", req, cb)
  }

  /**
   * 获取2.0实例告警策略列表
   */
  async DescribePrometheusAlertPolicy(
    req: DescribePrometheusAlertPolicyRequest,
    cb?: (error: string, rep: DescribePrometheusAlertPolicyResponse) => void
  ): Promise<DescribePrometheusAlertPolicyResponse> {
    return this.request("DescribePrometheusAlertPolicy", req, cb)
  }

  /**
   * 获取基础策略告警组列表
   */
  async DescribePolicyGroupList(
    req: DescribePolicyGroupListRequest,
    cb?: (error: string, rep: DescribePolicyGroupListResponse) => void
  ): Promise<DescribePolicyGroupListResponse> {
    return this.request("DescribePolicyGroupList", req, cb)
  }

  /**
   * 修改 Prometheus 实例相关属性
   */
  async ModifyPrometheusInstanceAttributes(
    req: ModifyPrometheusInstanceAttributesRequest,
    cb?: (error: string, rep: ModifyPrometheusInstanceAttributesResponse) => void
  ): Promise<ModifyPrometheusInstanceAttributesResponse> {
    return this.request("ModifyPrometheusInstanceAttributes", req, cb)
  }

  /**
   * 删除告警策略
   */
  async DeleteAlarmPolicy(
    req: DeleteAlarmPolicyRequest,
    cb?: (error: string, rep: DeleteAlarmPolicyResponse) => void
  ): Promise<DeleteAlarmPolicyResponse> {
    return this.request("DeleteAlarmPolicy", req, cb)
  }

  /**
     * 获取云产品的监控数据。此接口不适用于拉取容器服务监控数据，如需拉取容器服务监控数据，请使用[根据维度条件查询监控数据](https://cloud.tencent.com/document/product/248/51845)接口。
传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用限制：单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。

>?
>- 2022年9月1日起，云监控开始对GetMonitorData接口计费。每个主账号每月可获得100万次免费请求额度，超过免费额度后如需继续调用接口需要开通 [API请求按量付费](https://buy.cloud.tencent.com/APIRequestBuy)。计费规则可查看[API计费文档](https://cloud.tencent.com/document/product/248/77914)。
     */
  async GetMonitorData(
    req: GetMonitorDataRequest,
    cb?: (error: string, rep: GetMonitorDataResponse) => void
  ): Promise<GetMonitorDataResponse> {
    return this.request("GetMonitorData", req, cb)
  }

  /**
     * 对应的功能控制台及后端服务已于2年前下线，剩余该API接口未下线。

默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     */
  async PutMonitorData(
    req: PutMonitorDataRequest,
    cb?: (error: string, rep: PutMonitorDataResponse) => void
  ): Promise<PutMonitorDataResponse> {
    return this.request("PutMonitorData", req, cb)
  }

  /**
   * 更新 Grafana 的 DNS 配置
   */
  async UpdateDNSConfig(
    req: UpdateDNSConfigRequest,
    cb?: (error: string, rep: UpdateDNSConfigResponse) => void
  ): Promise<UpdateDNSConfigResponse> {
    return this.request("UpdateDNSConfig", req, cb)
  }

  /**
     * 列出在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
  async DescribeServiceDiscovery(
    req: DescribeServiceDiscoveryRequest,
    cb?: (error: string, rep: DescribeServiceDiscoveryResponse) => void
  ): Promise<DescribeServiceDiscoveryResponse> {
    return this.request("DescribeServiceDiscovery", req, cb)
  }

  /**
   * 列出 Grafana 已安装的集成
   */
  async DescribeGrafanaIntegrations(
    req: DescribeGrafanaIntegrationsRequest,
    cb?: (error: string, rep: DescribeGrafanaIntegrationsResponse) => void
  ): Promise<DescribeGrafanaIntegrationsResponse> {
    return this.request("DescribeGrafanaIntegrations", req, cb)
  }

  /**
   * 拉取Prometheus配置
   */
  async DescribePrometheusConfig(
    req: DescribePrometheusConfigRequest,
    cb?: (error: string, rep: DescribePrometheusConfigResponse) => void
  ): Promise<DescribePrometheusConfigResponse> {
    return this.request("DescribePrometheusConfig", req, cb)
  }

  /**
   * 获取基础策略组详情
   */
  async DescribePolicyGroupInfo(
    req: DescribePolicyGroupInfoRequest,
    cb?: (error: string, rep: DescribePolicyGroupInfoResponse) => void
  ): Promise<DescribePolicyGroupInfoResponse> {
    return this.request("DescribePolicyGroupInfo", req, cb)
  }

  /**
   * 拉取Prometheus聚合规则yaml列表
   */
  async DescribePrometheusRecordRuleYaml(
    req: DescribePrometheusRecordRuleYamlRequest,
    cb?: (error: string, rep: DescribePrometheusRecordRuleYamlResponse) => void
  ): Promise<DescribePrometheusRecordRuleYamlResponse> {
    return this.request("DescribePrometheusRecordRuleYaml", req, cb)
  }

  /**
   * 查询所有名字空间
   */
  async DescribeAllNamespaces(
    req: DescribeAllNamespacesRequest,
    cb?: (error: string, rep: DescribeAllNamespacesResponse) => void
  ): Promise<DescribeAllNamespacesResponse> {
    return this.request("DescribeAllNamespaces", req, cb)
  }

  /**
     * 在腾讯云容器服务下创建 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
  async CreateServiceDiscovery(
    req: CreateServiceDiscoveryRequest,
    cb?: (error: string, rep: CreateServiceDiscoveryResponse) => void
  ): Promise<CreateServiceDiscoveryResponse> {
    return this.request("CreateServiceDiscovery", req, cb)
  }

  /**
   * 以Yaml的方式创建聚合规则
   */
  async CreatePrometheusRecordRuleYaml(
    req: CreatePrometheusRecordRuleYamlRequest,
    cb?: (error: string, rep: CreatePrometheusRecordRuleYamlResponse) => void
  ): Promise<CreatePrometheusRecordRuleYamlResponse> {
    return this.request("CreatePrometheusRecordRuleYaml", req, cb)
  }

  /**
   * 删除一个云原生Prometheus配置模板
   */
  async DeletePrometheusTemp(
    req: DeletePrometheusTempRequest,
    cb?: (error: string, rep: DeletePrometheusTempResponse) => void
  ): Promise<DeletePrometheusTempResponse> {
    return this.request("DeletePrometheusTemp", req, cb)
  }

  /**
   * 获取告警通知模板所有回调URL
   */
  async DescribeAlarmNoticeCallbacks(
    req: DescribeAlarmNoticeCallbacksRequest,
    cb?: (error: string, rep: DescribeAlarmNoticeCallbacksResponse) => void
  ): Promise<DescribeAlarmNoticeCallbacksResponse> {
    return this.request("DescribeAlarmNoticeCallbacks", req, cb)
  }

  /**
   * 彻底删除 Prometheus 实例相关数据，给定的实例必须先被 Terminate
   */
  async DestroyPrometheusInstance(
    req: DestroyPrometheusInstanceRequest,
    cb?: (error: string, rep: DestroyPrometheusInstanceResponse) => void
  ): Promise<DestroyPrometheusInstanceResponse> {
    return this.request("DestroyPrometheusInstance", req, cb)
  }

  /**
   * 删除已安装的插件
   */
  async UninstallGrafanaPlugins(
    req: UninstallGrafanaPluginsRequest,
    cb?: (error: string, rep: UninstallGrafanaPluginsResponse) => void
  ): Promise<UninstallGrafanaPluginsResponse> {
    return this.request("UninstallGrafanaPlugins", req, cb)
  }

  /**
   * 更新 Grafana 集成配置
   */
  async UpdateGrafanaIntegration(
    req: UpdateGrafanaIntegrationRequest,
    cb?: (error: string, rep: UpdateGrafanaIntegrationResponse) => void
  ): Promise<UpdateGrafanaIntegrationResponse> {
    return this.request("UpdateGrafanaIntegration", req, cb)
  }

  /**
   * 增加策略组
   */
  async CreatePolicyGroup(
    req: CreatePolicyGroupRequest,
    cb?: (error: string, rep: CreatePolicyGroupResponse) => void
  ): Promise<CreatePolicyGroupResponse> {
    return this.request("CreatePolicyGroup", req, cb)
  }

  /**
   * 销毁按量 Prometheus 实例
   */
  async TerminatePrometheusInstances(
    req: TerminatePrometheusInstancesRequest,
    cb?: (error: string, rep: TerminatePrometheusInstancesResponse) => void
  ): Promise<TerminatePrometheusInstancesResponse> {
    return this.request("TerminatePrometheusInstances", req, cb)
  }

  /**
   * 获取与 Prometheus 监控融合实例列表
   */
  async DescribePrometheusInstancesOverview(
    req: DescribePrometheusInstancesOverviewRequest,
    cb?: (error: string, rep: DescribePrometheusInstancesOverviewResponse) => void
  ): Promise<DescribePrometheusInstancesOverviewResponse> {
    return this.request("DescribePrometheusInstancesOverview", req, cb)
  }

  /**
   * 解除模板同步，这将会删除目标中该模板所生产的配置，针对V2版本实例
   */
  async DeletePrometheusTempSync(
    req: DeletePrometheusTempSyncRequest,
    cb?: (error: string, rep: DeletePrometheusTempSyncResponse) => void
  ): Promise<DeletePrometheusTempSyncResponse> {
    return this.request("DeletePrometheusTempSync", req, cb)
  }

  /**
   * 创建prometheus配置
   */
  async CreatePrometheusConfig(
    req: CreatePrometheusConfigRequest,
    cb?: (error: string, rep: CreatePrometheusConfigResponse) => void
  ): Promise<CreatePrometheusConfigResponse> {
    return this.request("CreatePrometheusConfig", req, cb)
  }

  /**
   * 列出可安装的所有 Grafana 插件
   */
  async DescribePluginOverviews(
    req?: DescribePluginOverviewsRequest,
    cb?: (error: string, rep: DescribePluginOverviewsResponse) => void
  ): Promise<DescribePluginOverviewsResponse> {
    return this.request("DescribePluginOverviews", req, cb)
  }

  /**
   * 根据条件查询 Prometheus 预聚合规则
   */
  async DescribeRecordingRules(
    req: DescribeRecordingRulesRequest,
    cb?: (error: string, rep: DescribeRecordingRulesResponse) => void
  ): Promise<DescribeRecordingRulesResponse> {
    return this.request("DescribeRecordingRules", req, cb)
  }

  /**
   * 修改prometheus配置，如果配置项不存在，则会新增
   */
  async ModifyPrometheusConfig(
    req: ModifyPrometheusConfigRequest,
    cb?: (error: string, rep: ModifyPrometheusConfigResponse) => void
  ): Promise<ModifyPrometheusConfigResponse> {
    return this.request("ModifyPrometheusConfig", req, cb)
  }

  /**
   * 获取单个告警策略详情
   */
  async DescribeAlarmPolicy(
    req: DescribeAlarmPolicyRequest,
    cb?: (error: string, rep: DescribeAlarmPolicyResponse) => void
  ): Promise<DescribeAlarmPolicyResponse> {
    return this.request("DescribeAlarmPolicy", req, cb)
  }
}
