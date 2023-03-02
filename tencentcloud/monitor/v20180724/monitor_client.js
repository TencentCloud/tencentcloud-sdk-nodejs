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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const ModifyAlarmPolicyInfoRequest = models.ModifyAlarmPolicyInfoRequest;
const AlarmPolicyTriggerTask = models.AlarmPolicyTriggerTask;
const DescribePolicyGroupListResponse = models.DescribePolicyGroupListResponse;
const DescribePrometheusInstancesOverviewRequest = models.DescribePrometheusInstancesOverviewRequest;
const ModifyGrafanaInstanceResponse = models.ModifyGrafanaInstanceResponse;
const DescribePolicyGroupInfoCallback = models.DescribePolicyGroupInfoCallback;
const ModifyGrafanaInstanceRequest = models.ModifyGrafanaInstanceRequest;
const AlarmHistoryMetric = models.AlarmHistoryMetric;
const EnableGrafanaSSOResponse = models.EnableGrafanaSSOResponse;
const DescribePolicyGroupInfoResponse = models.DescribePolicyGroupInfoResponse;
const PolicyTag = models.PolicyTag;
const DeletePrometheusClusterAgentRequest = models.DeletePrometheusClusterAgentRequest;
const DescribePrometheusScrapeJobsRequest = models.DescribePrometheusScrapeJobsRequest;
const CreatePolicyGroupResponse = models.CreatePolicyGroupResponse;
const DescribeBaseMetricsResponse = models.DescribeBaseMetricsResponse;
const CreatePrometheusMultiTenantInstancePostPayModeRequest = models.CreatePrometheusMultiTenantInstancePostPayModeRequest;
const DescribePolicyConditionListResponseDeprecatingInfo = models.DescribePolicyConditionListResponseDeprecatingInfo;
const PrometheusTempModify = models.PrometheusTempModify;
const SendCustomAlarmMsgRequest = models.SendCustomAlarmMsgRequest;
const UnBindingPolicyObjectRequest = models.UnBindingPolicyObjectRequest;
const CommonNamespaceNew = models.CommonNamespaceNew;
const Tag = models.Tag;
const DescribePrometheusAgentInstancesRequest = models.DescribePrometheusAgentInstancesRequest;
const UpdateServiceDiscoveryRequest = models.UpdateServiceDiscoveryRequest;
const PrometheusRecordRuleYamlItem = models.PrometheusRecordRuleYamlItem;
const Label = models.Label;
const DescribeGrafanaIntegrationsResponse = models.DescribeGrafanaIntegrationsResponse;
const CreatePrometheusMultiTenantInstancePostPayModeResponse = models.CreatePrometheusMultiTenantInstancePostPayModeResponse;
const UpdatePrometheusAgentStatusResponse = models.UpdatePrometheusAgentStatusResponse;
const SyncPrometheusTempResponse = models.SyncPrometheusTempResponse;
const UpdateGrafanaWhiteListResponse = models.UpdateGrafanaWhiteListResponse;
const DescribeGrafanaEnvironmentsRequest = models.DescribeGrafanaEnvironmentsRequest;
const PrometheusConfigItem = models.PrometheusConfigItem;
const AlarmPolicy = models.AlarmPolicy;
const DeleteExporterIntegrationRequest = models.DeleteExporterIntegrationRequest;
const PrometheusRuleKV = models.PrometheusRuleKV;
const DescribePolicyConditionListResponse = models.DescribePolicyConditionListResponse;
const PrometheusRuleSet = models.PrometheusRuleSet;
const DescribeAllNamespacesResponse = models.DescribeAllNamespacesResponse;
const TerminatePrometheusInstancesRequest = models.TerminatePrometheusInstancesRequest;
const InstallPluginsResponse = models.InstallPluginsResponse;
const ProductSimple = models.ProductSimple;
const AlarmPolicyRule = models.AlarmPolicyRule;
const CreateGrafanaIntegrationRequest = models.CreateGrafanaIntegrationRequest;
const Dimension = models.Dimension;
const DescribeBindingPolicyObjectListResponse = models.DescribeBindingPolicyObjectListResponse;
const PrometheusInstancesOverview = models.PrometheusInstancesOverview;
const DescribePrometheusInstanceInitStatusResponse = models.DescribePrometheusInstanceInitStatusResponse;
const DescribeProductEventListResponse = models.DescribeProductEventListResponse;
const DescribeAlarmNoticeCallbacksResponse = models.DescribeAlarmNoticeCallbacksResponse;
const DescribePrometheusInstanceUsageRequest = models.DescribePrometheusInstanceUsageRequest;
const DeletePrometheusScrapeJobsRequest = models.DeletePrometheusScrapeJobsRequest;
const CreatePrometheusRecordRuleYamlRequest = models.CreatePrometheusRecordRuleYamlRequest;
const Instance = models.Instance;
const DescribeAlarmNoticesResponse = models.DescribeAlarmNoticesResponse;
const PrometheusClusterAgentPodConfig = models.PrometheusClusterAgentPodConfig;
const GrafanaInstanceInfo = models.GrafanaInstanceInfo;
const DeletePrometheusConfigResponse = models.DeletePrometheusConfigResponse;
const CreatePrometheusRecordRuleYamlResponse = models.CreatePrometheusRecordRuleYamlResponse;
const MetricObjectMeaning = models.MetricObjectMeaning;
const AlarmEvent = models.AlarmEvent;
const ModifyPolicyGroupResponse = models.ModifyPolicyGroupResponse;
const UninstallGrafanaPluginsResponse = models.UninstallGrafanaPluginsResponse;
const ModifyPrometheusTempRequest = models.ModifyPrometheusTempRequest;
const UpgradeGrafanaInstanceResponse = models.UpgradeGrafanaInstanceResponse;
const BindingPolicyTagRequest = models.BindingPolicyTagRequest;
const DeletePrometheusTempSyncResponse = models.DeletePrometheusTempSyncResponse;
const DescribeDNSConfigRequest = models.DescribeDNSConfigRequest;
const DescribePolicyGroupInfoConditionTpl = models.DescribePolicyGroupInfoConditionTpl;
const UnBindingPolicyObjectResponse = models.UnBindingPolicyObjectResponse;
const DescribePrometheusRecordRulesRequest = models.DescribePrometheusRecordRulesRequest;
const DescribeExporterIntegrationsResponse = models.DescribeExporterIntegrationsResponse;
const UpdateAlertRuleResponse = models.UpdateAlertRuleResponse;
const InstanceGroup = models.InstanceGroup;
const EnableGrafanaSSORequest = models.EnableGrafanaSSORequest;
const DescribePrometheusScrapeJobsResponse = models.DescribePrometheusScrapeJobsResponse;
const EnableGrafanaInternetRequest = models.EnableGrafanaInternetRequest;
const DescribePluginOverviewsResponse = models.DescribePluginOverviewsResponse;
const GrafanaAccountRole = models.GrafanaAccountRole;
const DestroyPrometheusInstanceRequest = models.DestroyPrometheusInstanceRequest;
const PolicyGroupReceiverInfo = models.PolicyGroupReceiverInfo;
const Metric = models.Metric;
const MidQueryCondition = models.MidQueryCondition;
const DeleteSSOAccountRequest = models.DeleteSSOAccountRequest;
const DescribePrometheusAgentInstancesResponse = models.DescribePrometheusAgentInstancesResponse;
const URLNotice = models.URLNotice;
const DescribeProductListResponse = models.DescribeProductListResponse;
const DeletePrometheusTempResponse = models.DeletePrometheusTempResponse;
const CreatePolicyGroupCondition = models.CreatePolicyGroupCondition;
const DescribePolicyGroupInfoReceiverInfo = models.DescribePolicyGroupInfoReceiverInfo;
const RecordingRuleSet = models.RecordingRuleSet;
const DescribeBasicAlarmListRequest = models.DescribeBasicAlarmListRequest;
const ModifyAlarmPolicyStatusResponse = models.ModifyAlarmPolicyStatusResponse;
const DescribeGrafanaInstancesRequest = models.DescribeGrafanaInstancesRequest;
const DescribePrometheusTempSyncRequest = models.DescribePrometheusTempSyncRequest;
const DescribePrometheusGlobalConfigResponse = models.DescribePrometheusGlobalConfigResponse;
const CreateRecordingRuleResponse = models.CreateRecordingRuleResponse;
const CreateGrafanaNotificationChannelResponse = models.CreateGrafanaNotificationChannelResponse;
const DescribeGrafanaNotificationChannelsRequest = models.DescribeGrafanaNotificationChannelsRequest;
const CleanGrafanaInstanceRequest = models.CleanGrafanaInstanceRequest;
const DescribeSSOAccountRequest = models.DescribeSSOAccountRequest;
const UpdateExporterIntegrationResponse = models.UpdateExporterIntegrationResponse;
const CreateAlarmNoticeRequest = models.CreateAlarmNoticeRequest;
const InstanceGroups = models.InstanceGroups;
const UpdateGrafanaNotificationChannelResponse = models.UpdateGrafanaNotificationChannelResponse;
const CreateExporterIntegrationResponse = models.CreateExporterIntegrationResponse;
const UnBindingAllPolicyObjectRequest = models.UnBindingAllPolicyObjectRequest;
const SendCustomAlarmMsgResponse = models.SendCustomAlarmMsgResponse;
const AlarmPolicyCondition = models.AlarmPolicyCondition;
const DescribeGrafanaChannelsRequest = models.DescribeGrafanaChannelsRequest;
const DescribePolicyGroupListRequest = models.DescribePolicyGroupListRequest;
const DescribeGrafanaConfigRequest = models.DescribeGrafanaConfigRequest;
const UpdateRecordingRuleRequest = models.UpdateRecordingRuleRequest;
const DescribePolicyConditionListConfigManualCalcValue = models.DescribePolicyConditionListConfigManualCalcValue;
const DescribePrometheusInstancesRequest = models.DescribePrometheusInstancesRequest;
const Toleration = models.Toleration;
const TagInstance = models.TagInstance;
const DescribePolicyConditionListConfigManual = models.DescribePolicyConditionListConfigManual;
const InstallPluginsRequest = models.InstallPluginsRequest;
const DescribeAlarmEventsResponse = models.DescribeAlarmEventsResponse;
const DescribeServiceDiscoveryResponse = models.DescribeServiceDiscoveryResponse;
const PrometheusTag = models.PrometheusTag;
const DescribePolicyConditionListMetric = models.DescribePolicyConditionListMetric;
const BindingPolicyObjectRequest = models.BindingPolicyObjectRequest;
const CreateServiceDiscoveryResponse = models.CreateServiceDiscoveryResponse;
const EnableSSOCamCheckResponse = models.EnableSSOCamCheckResponse;
const DescribeAccidentEventListRequest = models.DescribeAccidentEventListRequest;
const CreatePrometheusScrapeJobResponse = models.CreatePrometheusScrapeJobResponse;
const CreateAlarmPolicyRequest = models.CreateAlarmPolicyRequest;
const PrometheusZoneItem = models.PrometheusZoneItem;
const ModifyPrometheusAlertPolicyRequest = models.ModifyPrometheusAlertPolicyRequest;
const ModifyPrometheusInstanceAttributesResponse = models.ModifyPrometheusInstanceAttributesResponse;
const PrometheusTemplateSyncTarget = models.PrometheusTemplateSyncTarget;
const DescribePrometheusAlertPolicyResponse = models.DescribePrometheusAlertPolicyResponse;
const UpdateGrafanaEnvironmentsRequest = models.UpdateGrafanaEnvironmentsRequest;
const CommonNamespace = models.CommonNamespace;
const DeleteGrafanaNotificationChannelResponse = models.DeleteGrafanaNotificationChannelResponse;
const DataPoint = models.DataPoint;
const DescribeAlarmPoliciesResponse = models.DescribeAlarmPoliciesResponse;
const ModifyPrometheusGlobalNotificationRequest = models.ModifyPrometheusGlobalNotificationRequest;
const DescribePolicyConditionListConfigManualPeriod = models.DescribePolicyConditionListConfigManualPeriod;
const DescribePrometheusRecordRulesResponse = models.DescribePrometheusRecordRulesResponse;
const DescribePrometheusGlobalNotificationResponse = models.DescribePrometheusGlobalNotificationResponse;
const DescribeMonitorTypesRequest = models.DescribeMonitorTypesRequest;
const DimensionsDesc = models.DimensionsDesc;
const DeletePrometheusAlertPolicyRequest = models.DeletePrometheusAlertPolicyRequest;
const ServiceDiscoveryItem = models.ServiceDiscoveryItem;
const ModifyPrometheusAgentExternalLabelsResponse = models.ModifyPrometheusAgentExternalLabelsResponse;
const ModifyAlarmNoticeRequest = models.ModifyAlarmNoticeRequest;
const DescribeGrafanaWhiteListResponse = models.DescribeGrafanaWhiteListResponse;
const DescribeAlertRulesResponse = models.DescribeAlertRulesResponse;
const ResumeGrafanaInstanceRequest = models.ResumeGrafanaInstanceRequest;
const DescribeBasicAlarmListResponse = models.DescribeBasicAlarmListResponse;
const ModifyAlarmReceiversRequest = models.ModifyAlarmReceiversRequest;
const DescribeExporterIntegrationsRequest = models.DescribeExporterIntegrationsRequest;
const DescribePrometheusInstanceDetailResponse = models.DescribePrometheusInstanceDetailResponse;
const Point = models.Point;
const ModifyPolicyGroupEventCondition = models.ModifyPolicyGroupEventCondition;
const CreateGrafanaNotificationChannelRequest = models.CreateGrafanaNotificationChannelRequest;
const DescribePrometheusTargetsTMPResponse = models.DescribePrometheusTargetsTMPResponse;
const DescribePrometheusClusterAgentsResponse = models.DescribePrometheusClusterAgentsResponse;
const UpdatePrometheusScrapeJobRequest = models.UpdatePrometheusScrapeJobRequest;
const PrometheusAgentInfo = models.PrometheusAgentInfo;
const CreatePrometheusClusterAgentResponse = models.CreatePrometheusClusterAgentResponse;
const CreateGrafanaIntegrationResponse = models.CreateGrafanaIntegrationResponse;
const BindPrometheusManagedGrafanaRequest = models.BindPrometheusManagedGrafanaRequest;
const PrometheusAlertManagerConfig = models.PrometheusAlertManagerConfig;
const CreateGrafanaInstanceRequest = models.CreateGrafanaInstanceRequest;
const DescribePrometheusInstanceUsageResponse = models.DescribePrometheusInstanceUsageResponse;
const DescribePrometheusGlobalNotificationRequest = models.DescribePrometheusGlobalNotificationRequest;
const DeleteExporterIntegrationResponse = models.DeleteExporterIntegrationResponse;
const UpdateRecordingRuleResponse = models.UpdateRecordingRuleResponse;
const CreatePrometheusAgentResponse = models.CreatePrometheusAgentResponse;
const DescribePrometheusAlertPolicyRequest = models.DescribePrometheusAlertPolicyRequest;
const DescribeAlarmMetricsResponse = models.DescribeAlarmMetricsResponse;
const DescribePrometheusRecordRuleYamlRequest = models.DescribePrometheusRecordRuleYamlRequest;
const DescribeGrafanaWhiteListRequest = models.DescribeGrafanaWhiteListRequest;
const DescribePrometheusConfigRequest = models.DescribePrometheusConfigRequest;
const CreateGrafanaInstanceResponse = models.CreateGrafanaInstanceResponse;
const UpdateAlertRuleRequest = models.UpdateAlertRuleRequest;
const AlarmPolicyEventCondition = models.AlarmPolicyEventCondition;
const DeleteAlarmNoticesRequest = models.DeleteAlarmNoticesRequest;
const DescribeGrafanaNotificationChannelsResponse = models.DescribeGrafanaNotificationChannelsResponse;
const DescribePolicyConditionListConfigManualCalcType = models.DescribePolicyConditionListConfigManualCalcType;
const ResumeGrafanaInstanceResponse = models.ResumeGrafanaInstanceResponse;
const DescribeAccidentEventListResponse = models.DescribeAccidentEventListResponse;
const DescribePrometheusTempSyncResponse = models.DescribePrometheusTempSyncResponse;
const CreatePrometheusConfigResponse = models.CreatePrometheusConfigResponse;
const UpdateDNSConfigRequest = models.UpdateDNSConfigRequest;
const DeletePrometheusClusterAgentResponse = models.DeletePrometheusClusterAgentResponse;
const DescribeDNSConfigResponse = models.DescribeDNSConfigResponse;
const DeleteRecordingRulesRequest = models.DeleteRecordingRulesRequest;
const MonitorTypeNamespace = models.MonitorTypeNamespace;
const DeleteAlarmPolicyResponse = models.DeleteAlarmPolicyResponse;
const UninstallGrafanaPluginsRequest = models.UninstallGrafanaPluginsRequest;
const DeleteSSOAccountResponse = models.DeleteSSOAccountResponse;
const DescribePolicyGroupListGroup = models.DescribePolicyGroupListGroup;
const GrafanaAccountInfo = models.GrafanaAccountInfo;
const DescribeBindingPolicyObjectListInstanceGroup = models.DescribeBindingPolicyObjectListInstanceGroup;
const ModifyAlarmPolicyTasksRequest = models.ModifyAlarmPolicyTasksRequest;
const GetPrometheusAgentManagementCommandRequest = models.GetPrometheusAgentManagementCommandRequest;
const DescribeBindingPolicyObjectListDimension = models.DescribeBindingPolicyObjectListDimension;
const DescribePolicyGroupInfoEventCondition = models.DescribePolicyGroupInfoEventCondition;
const GetPrometheusAgentManagementCommandResponse = models.GetPrometheusAgentManagementCommandResponse;
const MetricData = models.MetricData;
const DescribeStatisticDataResponse = models.DescribeStatisticDataResponse;
const DescribeProductEventListOverView = models.DescribeProductEventListOverView;
const UpdateDNSConfigResponse = models.UpdateDNSConfigResponse;
const UninstallGrafanaDashboardResponse = models.UninstallGrafanaDashboardResponse;
const AlarmHierarchicalValue = models.AlarmHierarchicalValue;
const UpdateGrafanaNotificationChannelRequest = models.UpdateGrafanaNotificationChannelRequest;
const CreatePolicyGroupEventCondition = models.CreatePolicyGroupEventCondition;
const GrafanaPlugin = models.GrafanaPlugin;
const DestroyPrometheusInstanceResponse = models.DestroyPrometheusInstanceResponse;
const DescribeAlertRulesRequest = models.DescribeAlertRulesRequest;
const DescribePrometheusInstancesResponse = models.DescribePrometheusInstancesResponse;
const LogFilterInfo = models.LogFilterInfo;
const BindingPolicyTagResponse = models.BindingPolicyTagResponse;
const DeleteServiceDiscoveryResponse = models.DeleteServiceDiscoveryResponse;
const CreateExporterIntegrationRequest = models.CreateExporterIntegrationRequest;
const ModifyPrometheusConfigResponse = models.ModifyPrometheusConfigResponse;
const PrometheusAgent = models.PrometheusAgent;
const CreatePrometheusAlertPolicyResponse = models.CreatePrometheusAlertPolicyResponse;
const DescribePrometheusInstanceDetailRequest = models.DescribePrometheusInstanceDetailRequest;
const UserNotice = models.UserNotice;
const PrometheusInstancesItem = models.PrometheusInstancesItem;
const DescribeConditionsTemplateListRequest = models.DescribeConditionsTemplateListRequest;
const DeletePrometheusRecordRuleYamlResponse = models.DeletePrometheusRecordRuleYamlResponse;
const MetricDataPoint = models.MetricDataPoint;
const GetMonitorDataRequest = models.GetMonitorDataRequest;
const CreateRecordingRuleRequest = models.CreateRecordingRuleRequest;
const ModifyPrometheusConfigRequest = models.ModifyPrometheusConfigRequest;
const DescribeGrafanaEnvironmentsResponse = models.DescribeGrafanaEnvironmentsResponse;
const DescribePolicyConditionListRequest = models.DescribePolicyConditionListRequest;
const DeletePolicyGroupResponse = models.DeletePolicyGroupResponse;
const DeleteGrafanaInstanceRequest = models.DeleteGrafanaInstanceRequest;
const GrafanaIntegrationConfig = models.GrafanaIntegrationConfig;
const DeleteGrafanaIntegrationRequest = models.DeleteGrafanaIntegrationRequest;
const ModifyPrometheusAlertPolicyResponse = models.ModifyPrometheusAlertPolicyResponse;
const DescribePrometheusTargetsTMPRequest = models.DescribePrometheusTargetsTMPRequest;
const CreateServiceDiscoveryRequest = models.CreateServiceDiscoveryRequest;
const PeriodsSt = models.PeriodsSt;
const ModifyAlarmReceiversResponse = models.ModifyAlarmReceiversResponse;
const GrafanaChannel = models.GrafanaChannel;
const CreatePrometheusConfigRequest = models.CreatePrometheusConfigRequest;
const DescribeSSOAccountResponse = models.DescribeSSOAccountResponse;
const CreateAlarmPolicyResponse = models.CreateAlarmPolicyResponse;
const DeleteGrafanaNotificationChannelRequest = models.DeleteGrafanaNotificationChannelRequest;
const AlarmNotice = models.AlarmNotice;
const DescribeProductEventListEventsDimensions = models.DescribeProductEventListEventsDimensions;
const CreatePrometheusClusterAgentRequest = models.CreatePrometheusClusterAgentRequest;
const ModifyAlarmPolicyConditionResponse = models.ModifyAlarmPolicyConditionResponse;
const DescribePrometheusInstancesOverviewResponse = models.DescribePrometheusInstancesOverviewResponse;
const MetricSet = models.MetricSet;
const PrometheusInstanceGrantInfo = models.PrometheusInstanceGrantInfo;
const TemplateGroup = models.TemplateGroup;
const DescribeBindingPolicyObjectListInstance = models.DescribeBindingPolicyObjectListInstance;
const UpdateGrafanaIntegrationResponse = models.UpdateGrafanaIntegrationResponse;
const DescribeAlarmHistoriesResponse = models.DescribeAlarmHistoriesResponse;
const DescribeAlarmMetricsRequest = models.DescribeAlarmMetricsRequest;
const CreateSSOAccountRequest = models.CreateSSOAccountRequest;
const AlarmPolicyFilter = models.AlarmPolicyFilter;
const ModifyAlarmPolicyNoticeResponse = models.ModifyAlarmPolicyNoticeResponse;
const PrometheusAlertRule = models.PrometheusAlertRule;
const UnbindPrometheusManagedGrafanaResponse = models.UnbindPrometheusManagedGrafanaResponse;
const DescribeGrafanaChannelsResponse = models.DescribeGrafanaChannelsResponse;
const DescribeAlarmPolicyResponse = models.DescribeAlarmPolicyResponse;
const PrometheusNotificationItem = models.PrometheusNotificationItem;
const DescribeMonitorTypesResponse = models.DescribeMonitorTypesResponse;
const UpgradeGrafanaInstanceRequest = models.UpgradeGrafanaInstanceRequest;
const DescribeAccidentEventListAlarms = models.DescribeAccidentEventListAlarms;
const CreatePrometheusGlobalNotificationResponse = models.CreatePrometheusGlobalNotificationResponse;
const DescribeAlarmHistoriesRequest = models.DescribeAlarmHistoriesRequest;
const DescribePrometheusRecordRuleYamlResponse = models.DescribePrometheusRecordRuleYamlResponse;
const DeletePolicyGroupRequest = models.DeletePolicyGroupRequest;
const EnableSSOCamCheckRequest = models.EnableSSOCamCheckRequest;
const DeleteGrafanaIntegrationResponse = models.DeleteGrafanaIntegrationResponse;
const DescribeInstalledPluginsRequest = models.DescribeInstalledPluginsRequest;
const DescribePrometheusZonesResponse = models.DescribePrometheusZonesResponse;
const DescribePrometheusAgentsRequest = models.DescribePrometheusAgentsRequest;
const DescribePolicyGroupInfoCondition = models.DescribePolicyGroupInfoCondition;
const DescribePrometheusInstanceInitStatusRequest = models.DescribePrometheusInstanceInitStatusRequest;
const CreatePrometheusAlertPolicyRequest = models.CreatePrometheusAlertPolicyRequest;
const DescribeBindingPolicyObjectListRequest = models.DescribeBindingPolicyObjectListRequest;
const DescribeProductEventListEvents = models.DescribeProductEventListEvents;
const DescribePolicyConditionListConfigManualPeriodNum = models.DescribePolicyConditionListConfigManualPeriodNum;
const UpgradeGrafanaDashboardResponse = models.UpgradeGrafanaDashboardResponse;
const DescribeAllNamespacesRequest = models.DescribeAllNamespacesRequest;
const PolicyGroup = models.PolicyGroup;
const DescribePrometheusClusterAgentsRequest = models.DescribePrometheusClusterAgentsRequest;
const UnbindPrometheusManagedGrafanaRequest = models.UnbindPrometheusManagedGrafanaRequest;
const DescribePolicyGroupListGroupInstanceGroup = models.DescribePolicyGroupListGroupInstanceGroup;
const DescribeConditionsTemplateListResponse = models.DescribeConditionsTemplateListResponse;
const CreatePrometheusTempRequest = models.CreatePrometheusTempRequest;
const ModifyAlarmPolicyInfoResponse = models.ModifyAlarmPolicyInfoResponse;
const MetricConfig = models.MetricConfig;
const DescribeAlarmEventsRequest = models.DescribeAlarmEventsRequest;
const ModifyAlarmPolicyConditionRequest = models.ModifyAlarmPolicyConditionRequest;
const ModifyAlarmNoticeResponse = models.ModifyAlarmNoticeResponse;
const PrometheusJobTargets = models.PrometheusJobTargets;
const UpdateGrafanaConfigRequest = models.UpdateGrafanaConfigRequest;
const DescribeGrafanaIntegrationsRequest = models.DescribeGrafanaIntegrationsRequest;
const AlarmHistory = models.AlarmHistory;
const PrometheusClusterAgentBasic = models.PrometheusClusterAgentBasic;
const CreatePolicyGroupRequest = models.CreatePolicyGroupRequest;
const CreatePrometheusScrapeJobRequest = models.CreatePrometheusScrapeJobRequest;
const CreatePrometheusTempResponse = models.CreatePrometheusTempResponse;
const DescribePolicyConditionListEventMetric = models.DescribePolicyConditionListEventMetric;
const NoticeBindPolicys = models.NoticeBindPolicys;
const UnBindingAllPolicyObjectResponse = models.UnBindingAllPolicyObjectResponse;
const DescribeAlarmNoticesRequest = models.DescribeAlarmNoticesRequest;
const RunPrometheusInstanceResponse = models.RunPrometheusInstanceResponse;
const UpdateExporterIntegrationRequest = models.UpdateExporterIntegrationRequest;
const CheckIsPrometheusNewUserRequest = models.CheckIsPrometheusNewUserRequest;
const DescribeAlarmNoticeResponse = models.DescribeAlarmNoticeResponse;
const DeleteAlertRulesRequest = models.DeleteAlertRulesRequest;
const SyncPrometheusTempRequest = models.SyncPrometheusTempRequest;
const GetMonitorDataResponse = models.GetMonitorDataResponse;
const ReceiverInfo = models.ReceiverInfo;
const DescribeRecordingRulesRequest = models.DescribeRecordingRulesRequest;
const UpgradeGrafanaDashboardRequest = models.UpgradeGrafanaDashboardRequest;
const DeleteServiceDiscoveryRequest = models.DeleteServiceDiscoveryRequest;
const DescribeInstalledPluginsResponse = models.DescribeInstalledPluginsResponse;
const UpdateGrafanaConfigResponse = models.UpdateGrafanaConfigResponse;
const ModifyPrometheusInstanceAttributesRequest = models.ModifyPrometheusInstanceAttributesRequest;
const DescribePrometheusConfigResponse = models.DescribePrometheusConfigResponse;
const UpdateGrafanaEnvironmentsResponse = models.UpdateGrafanaEnvironmentsResponse;
const DescribeProductEventListRequest = models.DescribeProductEventListRequest;
const CreatePrometheusGlobalNotificationRequest = models.CreatePrometheusGlobalNotificationRequest;
const ModifyPrometheusTempResponse = models.ModifyPrometheusTempResponse;
const DescribeRecordingRulesResponse = models.DescribeRecordingRulesResponse;
const DeleteRecordingRulesResponse = models.DeleteRecordingRulesResponse;
const UpdateGrafanaWhiteListRequest = models.UpdateGrafanaWhiteListRequest;
const UpdatePrometheusAgentStatusRequest = models.UpdatePrometheusAgentStatusRequest;
const DescribeAlarmNoticeCallbacksRequest = models.DescribeAlarmNoticeCallbacksRequest;
const CheckIsPrometheusNewUserResponse = models.CheckIsPrometheusNewUserResponse;
const PutMonitorDataResponse = models.PutMonitorDataResponse;
const DescribePolicyGroupInfoRequest = models.DescribePolicyGroupInfoRequest;
const UpdateAlertRuleStateResponse = models.UpdateAlertRuleStateResponse;
const ModifyPrometheusRecordRuleYamlRequest = models.ModifyPrometheusRecordRuleYamlRequest;
const DeletePrometheusAlertPolicyResponse = models.DeletePrometheusAlertPolicyResponse;
const DescribeProductEventListDimensions = models.DescribeProductEventListDimensions;
const ModifyAlarmPolicyNoticeRequest = models.ModifyAlarmPolicyNoticeRequest;
const DeleteAlarmPolicyRequest = models.DeleteAlarmPolicyRequest;
const EventCondition = models.EventCondition;
const CreateAlertRuleResponse = models.CreateAlertRuleResponse;
const DescribePolicyConditionListConfigManualContinueTime = models.DescribePolicyConditionListConfigManualContinueTime;
const ModifyAlarmPolicyTasksResponse = models.ModifyAlarmPolicyTasksResponse;
const MonitorTypeInfo = models.MonitorTypeInfo;
const DimensionNew = models.DimensionNew;
const DeleteAlertRulesResponse = models.DeleteAlertRulesResponse;
const ModifyAlarmPolicyStatusRequest = models.ModifyAlarmPolicyStatusRequest;
const ConditionsTemp = models.ConditionsTemp;
const Operator = models.Operator;
const DescribeServiceDiscoveryRequest = models.DescribeServiceDiscoveryRequest;
const TaskStepInfo = models.TaskStepInfo;
const DescribePrometheusTempResponse = models.DescribePrometheusTempResponse;
const DescribeGrafanaConfigResponse = models.DescribeGrafanaConfigResponse;
const DescribeAlarmNoticeRequest = models.DescribeAlarmNoticeRequest;
const PrometheusTemp = models.PrometheusTemp;
const DescribePolicyConditionListCondition = models.DescribePolicyConditionListCondition;
const DeletePrometheusTempRequest = models.DeletePrometheusTempRequest;
const EnableGrafanaInternetResponse = models.EnableGrafanaInternetResponse;
const DescribeProductListRequest = models.DescribeProductListRequest;
const BindPrometheusManagedGrafanaResponse = models.BindPrometheusManagedGrafanaResponse;
const ManagementCommand = models.ManagementCommand;
const CreatePrometheusAgentRequest = models.CreatePrometheusAgentRequest;
const DeleteAlarmNoticesResponse = models.DeleteAlarmNoticesResponse;
const DeletePrometheusTempSyncRequest = models.DeletePrometheusTempSyncRequest;
const DescribePluginOverviewsRequest = models.DescribePluginOverviewsRequest;
const DescribePrometheusGlobalConfigRequest = models.DescribePrometheusGlobalConfigRequest;
const PrometheusInstanceTenantUsage = models.PrometheusInstanceTenantUsage;
const DescribePrometheusZonesRequest = models.DescribePrometheusZonesRequest;
const ModifyPolicyGroupCondition = models.ModifyPolicyGroupCondition;
const ModifyPolicyGroupRequest = models.ModifyPolicyGroupRequest;
const DescribeBaseMetricsRequest = models.DescribeBaseMetricsRequest;
const DeletePrometheusConfigRequest = models.DeletePrometheusConfigRequest;
const PrometheusAlertPolicyItem = models.PrometheusAlertPolicyItem;
const ModifyPrometheusAgentExternalLabelsRequest = models.ModifyPrometheusAgentExternalLabelsRequest;
const PrometheusScrapeJob = models.PrometheusScrapeJob;
const AlarmHierarchicalNotice = models.AlarmHierarchicalNotice;
const BindingPolicyObjectDimension = models.BindingPolicyObjectDimension;
const DescribePrometheusTempRequest = models.DescribePrometheusTempRequest;
const UpdateServiceDiscoveryResponse = models.UpdateServiceDiscoveryResponse;
const DescribeBasicAlarmListAlarms = models.DescribeBasicAlarmListAlarms;
const CreateAlarmNoticeResponse = models.CreateAlarmNoticeResponse;
const Condition = models.Condition;
const DeleteGrafanaInstanceResponse = models.DeleteGrafanaInstanceResponse;
const PrometheusAgentOverview = models.PrometheusAgentOverview;
const Filter = models.Filter;
const DescribeProductEventListEventsGroupInfo = models.DescribeProductEventListEventsGroupInfo;
const UpdateSSOAccountRequest = models.UpdateSSOAccountRequest;
const CreateSSOAccountResponse = models.CreateSSOAccountResponse;
const PutMonitorDataRequest = models.PutMonitorDataRequest;
const UpdatePrometheusScrapeJobResponse = models.UpdatePrometheusScrapeJobResponse;
const DescribeAlarmPoliciesRequest = models.DescribeAlarmPoliciesRequest;
const DescribePolicyConditionListConfigManualStatType = models.DescribePolicyConditionListConfigManualStatType;
const IntegrationConfiguration = models.IntegrationConfiguration;
const DescribePrometheusAgentsResponse = models.DescribePrometheusAgentsResponse;
const ModifyPrometheusGlobalNotificationResponse = models.ModifyPrometheusGlobalNotificationResponse;
const CleanGrafanaInstanceResponse = models.CleanGrafanaInstanceResponse;
const CreateAlertRuleRequest = models.CreateAlertRuleRequest;
const ModifyPrometheusRecordRuleYamlResponse = models.ModifyPrometheusRecordRuleYamlResponse;
const DeletePrometheusScrapeJobsResponse = models.DeletePrometheusScrapeJobsResponse;
const DescribeAlarmPolicyRequest = models.DescribeAlarmPolicyRequest;
const UninstallGrafanaDashboardRequest = models.UninstallGrafanaDashboardRequest;
const UpdateGrafanaIntegrationRequest = models.UpdateGrafanaIntegrationRequest;
const DeletePrometheusRecordRuleYamlRequest = models.DeletePrometheusRecordRuleYamlRequest;
const MetricDatum = models.MetricDatum;
const DescribeStatisticDataRequest = models.DescribeStatisticDataRequest;
const GrafanaNotificationChannel = models.GrafanaNotificationChannel;
const SetDefaultAlarmPolicyRequest = models.SetDefaultAlarmPolicyRequest;
const CLSNotice = models.CLSNotice;
const LogAlarmReq = models.LogAlarmReq;
const TerminatePrometheusInstancesResponse = models.TerminatePrometheusInstancesResponse;
const UpdateSSOAccountResponse = models.UpdateSSOAccountResponse;
const DescribeGrafanaInstancesResponse = models.DescribeGrafanaInstancesResponse;
const RunPrometheusInstanceRequest = models.RunPrometheusInstanceRequest;
const UpdateAlertRuleStateRequest = models.UpdateAlertRuleStateRequest;
const SetDefaultAlarmPolicyResponse = models.SetDefaultAlarmPolicyResponse;
const BindingPolicyObjectResponse = models.BindingPolicyObjectResponse;


/**
 * monitor client
 * @class
 */
class MonitorClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("monitor.tencentcloudapi.com", "2018-07-24", credential, region, profile);
    }
    
    /**
     * 更新 Grafana 告警通道
     * @param {UpdateGrafanaNotificationChannelRequest} req
     * @param {function(string, UpdateGrafanaNotificationChannelResponse):void} cb
     * @public
     */
    UpdateGrafanaNotificationChannel(req, cb) {
        let resp = new UpdateGrafanaNotificationChannelResponse();
        this.request("UpdateGrafanaNotificationChannel", req, resp, cb);
    }

    /**
     * 创建 Prometheus 告警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     * @param {CreateAlertRuleRequest} req
     * @param {function(string, CreateAlertRuleResponse):void} cb
     * @public
     */
    CreateAlertRule(req, cb) {
        let resp = new CreateAlertRuleResponse();
        this.request("CreateAlertRule", req, resp, cb);
    }

    /**
     * 解除TMP实例的集群关联
     * @param {DeletePrometheusClusterAgentRequest} req
     * @param {function(string, DeletePrometheusClusterAgentResponse):void} cb
     * @public
     */
    DeletePrometheusClusterAgent(req, cb) {
        let resp = new DeletePrometheusClusterAgentResponse();
        this.request("DeletePrometheusClusterAgent", req, resp, cb);
    }

    /**
     * 获取已绑定对象列表
     * @param {DescribeBindingPolicyObjectListRequest} req
     * @param {function(string, DescribeBindingPolicyObjectListResponse):void} cb
     * @public
     */
    DescribeBindingPolicyObjectList(req, cb) {
        let resp = new DescribeBindingPolicyObjectListResponse();
        this.request("DescribeBindingPolicyObjectList", req, resp, cb);
    }

    /**
     * 更新 Prometheus 的报警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     * @param {UpdateAlertRuleRequest} req
     * @param {function(string, UpdateAlertRuleResponse):void} cb
     * @public
     */
    UpdateAlertRule(req, cb) {
        let resp = new UpdateAlertRuleResponse();
        this.request("UpdateAlertRule", req, resp, cb);
    }

    /**
     * 修改2.0实例告警策略
     * @param {ModifyPrometheusAlertPolicyRequest} req
     * @param {function(string, ModifyPrometheusAlertPolicyResponse):void} cb
     * @public
     */
    ModifyPrometheusAlertPolicy(req, cb) {
        let resp = new ModifyPrometheusAlertPolicyResponse();
        this.request("ModifyPrometheusAlertPolicy", req, resp, cb);
    }

    /**
     *  查询Prometheus按量实例用量
     * @param {DescribePrometheusInstanceUsageRequest} req
     * @param {function(string, DescribePrometheusInstanceUsageResponse):void} cb
     * @public
     */
    DescribePrometheusInstanceUsage(req, cb) {
        let resp = new DescribePrometheusInstanceUsageResponse();
        this.request("DescribePrometheusInstanceUsage", req, resp, cb);
    }

    /**
     * 修改告警接收人
     * @param {ModifyAlarmReceiversRequest} req
     * @param {function(string, ModifyAlarmReceiversResponse):void} cb
     * @public
     */
    ModifyAlarmReceivers(req, cb) {
        let resp = new ModifyAlarmReceiversResponse();
        this.request("ModifyAlarmReceivers", req, resp, cb);
    }

    /**
     * 将告警策略绑定到特定对象
     * @param {BindingPolicyObjectRequest} req
     * @param {function(string, BindingPolicyObjectResponse):void} cb
     * @public
     */
    BindingPolicyObject(req, cb) {
        let resp = new BindingPolicyObjectResponse();
        this.request("BindingPolicyObject", req, resp, cb);
    }

    /**
     * 创建 Grafana 实例
     * @param {CreateGrafanaInstanceRequest} req
     * @param {function(string, CreateGrafanaInstanceResponse):void} cb
     * @public
     */
    CreateGrafanaInstance(req, cb) {
        let resp = new CreateGrafanaInstanceResponse();
        this.request("CreateGrafanaInstance", req, resp, cb);
    }

    /**
     * 创建云监控告警策略
     * @param {CreateAlarmPolicyRequest} req
     * @param {function(string, CreateAlarmPolicyResponse):void} cb
     * @public
     */
    CreateAlarmPolicy(req, cb) {
        let resp = new CreateAlarmPolicyResponse();
        this.request("CreateAlarmPolicy", req, resp, cb);
    }

    /**
     * 查询云监控产品列表，支持云服务器CVM、云数据库、云消息队列、负载均衡、容器服务、专线等云产品。
     * @param {DescribeProductListRequest} req
     * @param {function(string, DescribeProductListResponse):void} cb
     * @public
     */
    DescribeProductList(req, cb) {
        let resp = new DescribeProductListResponse();
        this.request("DescribeProductList", req, resp, cb);
    }

    /**
     * 获取聚合规则列表，包含关联集群内crd资源创建的record rule
     * @param {DescribePrometheusRecordRulesRequest} req
     * @param {function(string, DescribePrometheusRecordRulesResponse):void} cb
     * @public
     */
    DescribePrometheusRecordRules(req, cb) {
        let resp = new DescribePrometheusRecordRulesResponse();
        this.request("DescribePrometheusRecordRules", req, resp, cb);
    }

    /**
     * 更新已授权账号的备注、权限信息，会直接覆盖原有的信息，不传则不会更新。
     * @param {UpdateSSOAccountRequest} req
     * @param {function(string, UpdateSSOAccountResponse):void} cb
     * @public
     */
    UpdateSSOAccount(req, cb) {
        let resp = new UpdateSSOAccountResponse();
        this.request("UpdateSSOAccount", req, resp, cb);
    }

    /**
     * 获取TMP实例关联集群列表
     * @param {DescribePrometheusClusterAgentsRequest} req
     * @param {function(string, DescribePrometheusClusterAgentsResponse):void} cb
     * @public
     */
    DescribePrometheusClusterAgents(req, cb) {
        let resp = new DescribePrometheusClusterAgentsResponse();
        this.request("DescribePrometheusClusterAgents", req, resp, cb);
    }

    /**
     * 判断用户是否为云原生监控新用户，即在任何地域下均未创建过监控实例的用户
     * @param {CheckIsPrometheusNewUserRequest} req
     * @param {function(string, CheckIsPrometheusNewUserResponse):void} cb
     * @public
     */
    CheckIsPrometheusNewUser(req, cb) {
        let resp = new CheckIsPrometheusNewUserResponse();
        this.request("CheckIsPrometheusNewUser", req, resp, cb);
    }

    /**
     * 列出 Grafana 环境变量
     * @param {DescribeGrafanaEnvironmentsRequest} req
     * @param {function(string, DescribeGrafanaEnvironmentsResponse):void} cb
     * @public
     */
    DescribeGrafanaEnvironments(req, cb) {
        let resp = new DescribeGrafanaEnvironmentsResponse();
        this.request("DescribeGrafanaEnvironments", req, resp, cb);
    }

    /**
     * 更新 Prometheus 的预聚合规则
     * @param {UpdateRecordingRuleRequest} req
     * @param {function(string, UpdateRecordingRuleResponse):void} cb
     * @public
     */
    UpdateRecordingRule(req, cb) {
        let resp = new UpdateRecordingRuleResponse();
        this.request("UpdateRecordingRule", req, resp, cb);
    }

    /**
     * 删除 Grafana 告警通道
     * @param {DeleteGrafanaNotificationChannelRequest} req
     * @param {function(string, DeleteGrafanaNotificationChannelResponse):void} cb
     * @public
     */
    DeleteGrafanaNotificationChannel(req, cb) {
        let resp = new DeleteGrafanaNotificationChannelResponse();
        this.request("DeleteGrafanaNotificationChannel", req, resp, cb);
    }

    /**
     * 根据维度条件查询监控数据
     * @param {DescribeStatisticDataRequest} req
     * @param {function(string, DescribeStatisticDataResponse):void} cb
     * @public
     */
    DescribeStatisticData(req, cb) {
        let resp = new DescribeStatisticDataResponse();
        this.request("DescribeStatisticData", req, resp, cb);
    }

    /**
     * 列出 Grafana 的设置，即 grafana.ini 文件内容
     * @param {DescribeGrafanaConfigRequest} req
     * @param {function(string, DescribeGrafanaConfigResponse):void} cb
     * @public
     */
    DescribeGrafanaConfig(req, cb) {
        let resp = new DescribeGrafanaConfigResponse();
        this.request("DescribeGrafanaConfig", req, resp, cb);
    }

    /**
     * 告警2.0编辑告警策略基本信息，包括策略名、备注
     * @param {ModifyAlarmPolicyInfoRequest} req
     * @param {function(string, ModifyAlarmPolicyInfoResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyInfo(req, cb) {
        let resp = new ModifyAlarmPolicyInfoResponse();
        this.request("ModifyAlarmPolicyInfo", req, resp, cb);
    }

    /**
     * 启停告警策略
     * @param {ModifyAlarmPolicyStatusRequest} req
     * @param {function(string, ModifyAlarmPolicyStatusResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyStatus(req, cb) {
        let resp = new ModifyAlarmPolicyStatusResponse();
        this.request("ModifyAlarmPolicyStatus", req, resp, cb);
    }

    /**
     * 删除 Prometheus 抓取任务
     * @param {DeletePrometheusScrapeJobsRequest} req
     * @param {function(string, DeletePrometheusScrapeJobsResponse):void} cb
     * @public
     */
    DeletePrometheusScrapeJobs(req, cb) {
        let resp = new DeletePrometheusScrapeJobsResponse();
        this.request("DeletePrometheusScrapeJobs", req, resp, cb);
    }

    /**
     * 设置 Grafana 单点登录，使用腾讯云账号
     * @param {EnableGrafanaSSORequest} req
     * @param {function(string, EnableGrafanaSSOResponse):void} cb
     * @public
     */
    EnableGrafanaSSO(req, cb) {
        let resp = new EnableGrafanaSSOResponse();
        this.request("EnableGrafanaSSO", req, resp, cb);
    }

    /**
     * 批量删除 Prometheus 报警规则
     * @param {DeleteAlertRulesRequest} req
     * @param {function(string, DeleteAlertRulesResponse):void} cb
     * @public
     */
    DeleteAlertRules(req, cb) {
        let resp = new DeleteAlertRulesResponse();
        this.request("DeleteAlertRules", req, resp, cb);
    }

    /**
     * 获取基础指标属性
     * @param {DescribeBaseMetricsRequest} req
     * @param {function(string, DescribeBaseMetricsResponse):void} cb
     * @public
     */
    DescribeBaseMetrics(req, cb) {
        let resp = new DescribeBaseMetricsResponse();
        this.request("DescribeBaseMetrics", req, resp, cb);
    }

    /**
     * 查询告警事件列表
     * @param {DescribeAlarmEventsRequest} req
     * @param {function(string, DescribeAlarmEventsResponse):void} cb
     * @public
     */
    DescribeAlarmEvents(req, cb) {
        let resp = new DescribeAlarmEventsResponse();
        this.request("DescribeAlarmEvents", req, resp, cb);
    }

    /**
     * 云监控告警删除告警通知模板
     * @param {DeleteAlarmNoticesRequest} req
     * @param {function(string, DeleteAlarmNoticesResponse):void} cb
     * @public
     */
    DeleteAlarmNotices(req, cb) {
        let resp = new DeleteAlarmNoticesResponse();
        this.request("DeleteAlarmNotices", req, resp, cb);
    }

    /**
     * 云监控告警编辑告警通知模板
     * @param {ModifyAlarmNoticeRequest} req
     * @param {function(string, ModifyAlarmNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmNotice(req, cb) {
        let resp = new ModifyAlarmNoticeResponse();
        this.request("ModifyAlarmNotice", req, resp, cb);
    }

    /**
     * 获取TMP实例详情
     * @param {DescribePrometheusInstanceDetailRequest} req
     * @param {function(string, DescribePrometheusInstanceDetailResponse):void} cb
     * @public
     */
    DescribePrometheusInstanceDetail(req, cb) {
        let resp = new DescribePrometheusInstanceDetailResponse();
        this.request("DescribePrometheusInstanceDetail", req, resp, cb);
    }

    /**
     * 创建 Prometheus 抓取任务
     * @param {CreatePrometheusScrapeJobRequest} req
     * @param {function(string, CreatePrometheusScrapeJobResponse):void} cb
     * @public
     */
    CreatePrometheusScrapeJob(req, cb) {
        let resp = new CreatePrometheusScrapeJobResponse();
        this.request("CreatePrometheusScrapeJob", req, resp, cb);
    }

    /**
     * 删除策略的关联对象
     * @param {UnBindingPolicyObjectRequest} req
     * @param {function(string, UnBindingPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingPolicyObject(req, cb) {
        let resp = new UnBindingPolicyObjectResponse();
        this.request("UnBindingPolicyObject", req, resp, cb);
    }

    /**
     * 获取条件模板列表
     * @param {DescribeConditionsTemplateListRequest} req
     * @param {function(string, DescribeConditionsTemplateListResponse):void} cb
     * @public
     */
    DescribeConditionsTemplateList(req, cb) {
        let resp = new DescribeConditionsTemplateListResponse();
        this.request("DescribeConditionsTemplateList", req, resp, cb);
    }

    /**
     * 列出 Prometheus 抓取任务
     * @param {DescribePrometheusScrapeJobsRequest} req
     * @param {function(string, DescribePrometheusScrapeJobsResponse):void} cb
     * @public
     */
    DescribePrometheusScrapeJobs(req, cb) {
        let resp = new DescribePrometheusScrapeJobsResponse();
        this.request("DescribePrometheusScrapeJobs", req, resp, cb);
    }

    /**
     * 删除在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     * @param {DeleteServiceDiscoveryRequest} req
     * @param {function(string, DeleteServiceDiscoveryResponse):void} cb
     * @public
     */
    DeleteServiceDiscovery(req, cb) {
        let resp = new DeleteServiceDiscoveryResponse();
        this.request("DeleteServiceDiscovery", req, resp, cb);
    }

    /**
     * 与云监控融合的2.0实例关联集群
     * @param {CreatePrometheusClusterAgentRequest} req
     * @param {function(string, CreatePrometheusClusterAgentResponse):void} cb
     * @public
     */
    CreatePrometheusClusterAgent(req, cb) {
        let resp = new CreatePrometheusClusterAgentResponse();
        this.request("CreatePrometheusClusterAgent", req, resp, cb);
    }

    /**
     * 策略绑定标签
     * @param {BindingPolicyTagRequest} req
     * @param {function(string, BindingPolicyTagResponse):void} cb
     * @public
     */
    BindingPolicyTag(req, cb) {
        let resp = new BindingPolicyTagResponse();
        this.request("BindingPolicyTag", req, resp, cb);
    }

    /**
     * 创建按量 Prometheus 实例，根据用量收费实例
     * @param {CreatePrometheusMultiTenantInstancePostPayModeRequest} req
     * @param {function(string, CreatePrometheusMultiTenantInstancePostPayModeResponse):void} cb
     * @public
     */
    CreatePrometheusMultiTenantInstancePostPayMode(req, cb) {
        let resp = new CreatePrometheusMultiTenantInstancePostPayModeResponse();
        this.request("CreatePrometheusMultiTenantInstancePostPayMode", req, resp, cb);
    }

    /**
     * 更新 Grafana 环境变量
     * @param {UpdateGrafanaEnvironmentsRequest} req
     * @param {function(string, UpdateGrafanaEnvironmentsResponse):void} cb
     * @public
     */
    UpdateGrafanaEnvironments(req, cb) {
        let resp = new UpdateGrafanaEnvironmentsResponse();
        this.request("UpdateGrafanaEnvironments", req, resp, cb);
    }

    /**
     * 获取基础告警策略条件
     * @param {DescribePolicyConditionListRequest} req
     * @param {function(string, DescribePolicyConditionListResponse):void} cb
     * @public
     */
    DescribePolicyConditionList(req, cb) {
        let resp = new DescribePolicyConditionListResponse();
        this.request("DescribePolicyConditionList", req, resp, cb);
    }

    /**
     * 修改告警策略触发条件
     * @param {ModifyAlarmPolicyConditionRequest} req
     * @param {function(string, ModifyAlarmPolicyConditionResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyCondition(req, cb) {
        let resp = new ModifyAlarmPolicyConditionResponse();
        this.request("ModifyAlarmPolicyCondition", req, resp, cb);
    }

    /**
     * 获取 Prometheus Agent 管理相关的命令行
     * @param {GetPrometheusAgentManagementCommandRequest} req
     * @param {function(string, GetPrometheusAgentManagementCommandResponse):void} cb
     * @public
     */
    GetPrometheusAgentManagementCommand(req, cb) {
        let resp = new GetPrometheusAgentManagementCommandResponse();
        this.request("GetPrometheusAgentManagementCommand", req, resp, cb);
    }

    /**
     * 更新 exporter 集成配置
     * @param {UpdateExporterIntegrationRequest} req
     * @param {function(string, UpdateExporterIntegrationResponse):void} cb
     * @public
     */
    UpdateExporterIntegration(req, cb) {
        let resp = new UpdateExporterIntegrationResponse();
        this.request("UpdateExporterIntegration", req, resp, cb);
    }

    /**
     * 更新 Prometheus 抓取任务
     * @param {UpdatePrometheusScrapeJobRequest} req
     * @param {function(string, UpdatePrometheusScrapeJobResponse):void} cb
     * @public
     */
    UpdatePrometheusScrapeJob(req, cb) {
        let resp = new UpdatePrometheusScrapeJobResponse();
        this.request("UpdatePrometheusScrapeJob", req, resp, cb);
    }

    /**
     * 获取2.0实例初始化任务状态
     * @param {DescribePrometheusInstanceInitStatusRequest} req
     * @param {function(string, DescribePrometheusInstanceInitStatusResponse):void} cb
     * @public
     */
    DescribePrometheusInstanceInitStatus(req, cb) {
        let resp = new DescribePrometheusInstanceInitStatusResponse();
        this.request("DescribePrometheusInstanceInitStatus", req, resp, cb);
    }

    /**
     * 升级 Grafana 实例
     * @param {UpgradeGrafanaInstanceRequest} req
     * @param {function(string, UpgradeGrafanaInstanceResponse):void} cb
     * @public
     */
    UpgradeGrafanaInstance(req, cb) {
        let resp = new UpgradeGrafanaInstanceResponse();
        this.request("UpgradeGrafanaInstance", req, resp, cb);
    }

    /**
     * 列出 Grafana 所有告警通道
     * @param {DescribeGrafanaChannelsRequest} req
     * @param {function(string, DescribeGrafanaChannelsResponse):void} cb
     * @public
     */
    DescribeGrafanaChannels(req, cb) {
        let resp = new DescribeGrafanaChannelsResponse();
        this.request("DescribeGrafanaChannels", req, resp, cb);
    }

    /**
     * 删除 Grafana 集成配置
     * @param {DeleteGrafanaIntegrationRequest} req
     * @param {function(string, DeleteGrafanaIntegrationResponse):void} cb
     * @public
     */
    DeleteGrafanaIntegration(req, cb) {
        let resp = new DeleteGrafanaIntegrationResponse();
        this.request("DeleteGrafanaIntegration", req, resp, cb);
    }

    /**
     * 绑定 Grafana 可视化服务实例
     * @param {BindPrometheusManagedGrafanaRequest} req
     * @param {function(string, BindPrometheusManagedGrafanaResponse):void} cb
     * @public
     */
    BindPrometheusManagedGrafana(req, cb) {
        let resp = new BindPrometheusManagedGrafanaResponse();
        this.request("BindPrometheusManagedGrafana", req, resp, cb);
    }

    /**
     * 删除全部的关联对象
     * @param {UnBindingAllPolicyObjectRequest} req
     * @param {function(string, UnBindingAllPolicyObjectResponse):void} cb
     * @public
     */
    UnBindingAllPolicyObject(req, cb) {
        let resp = new UnBindingAllPolicyObjectResponse();
        this.request("UnBindingAllPolicyObject", req, resp, cb);
    }

    /**
     * 删除告警策略组
     * @param {DeletePolicyGroupRequest} req
     * @param {function(string, DeletePolicyGroupResponse):void} cb
     * @public
     */
    DeletePolicyGroup(req, cb) {
        let resp = new DeletePolicyGroupResponse();
        this.request("DeletePolicyGroup", req, resp, cb);
    }

    /**
     * 在腾讯云容器服务下更新 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     * @param {UpdateServiceDiscoveryRequest} req
     * @param {function(string, UpdateServiceDiscoveryResponse):void} cb
     * @public
     */
    UpdateServiceDiscovery(req, cb) {
        let resp = new UpdateServiceDiscoveryResponse();
        this.request("UpdateServiceDiscovery", req, resp, cb);
    }

    /**
     * 云监控支持多种类型的监控，此接口列出支持的所有类型
     * @param {DescribeMonitorTypesRequest} req
     * @param {function(string, DescribeMonitorTypesResponse):void} cb
     * @public
     */
    DescribeMonitorTypes(req, cb) {
        let resp = new DescribeMonitorTypesResponse();
        this.request("DescribeMonitorTypes", req, resp, cb);
    }

    /**
     * SSO单点登录时，设置是否cam鉴权
     * @param {EnableSSOCamCheckRequest} req
     * @param {function(string, EnableSSOCamCheckResponse):void} cb
     * @public
     */
    EnableSSOCamCheck(req, cb) {
        let resp = new EnableSSOCamCheckResponse();
        this.request("EnableSSOCamCheck", req, resp, cb);
    }

    /**
     * 安装 Grafana Plugin
     * @param {InstallPluginsRequest} req
     * @param {function(string, InstallPluginsResponse):void} cb
     * @public
     */
    InstallPlugins(req, cb) {
        let resp = new InstallPluginsResponse();
        this.request("InstallPlugins", req, resp, cb);
    }

    /**
     * 创建 exporter 集成
     * @param {CreateExporterIntegrationRequest} req
     * @param {function(string, CreateExporterIntegrationResponse):void} cb
     * @public
     */
    CreateExporterIntegration(req, cb) {
        let resp = new CreateExporterIntegrationResponse();
        this.request("CreateExporterIntegration", req, resp, cb);
    }

    /**
     * 批量删除 Prometheus 预聚合规则
     * @param {DeleteRecordingRulesRequest} req
     * @param {function(string, DeleteRecordingRulesResponse):void} cb
     * @public
     */
    DeleteRecordingRules(req, cb) {
        let resp = new DeleteRecordingRulesResponse();
        this.request("DeleteRecordingRules", req, resp, cb);
    }

    /**
     * 分页获取产品事件的列表
     * @param {DescribeProductEventListRequest} req
     * @param {function(string, DescribeProductEventListResponse):void} cb
     * @public
     */
    DescribeProductEventList(req, cb) {
        let resp = new DescribeProductEventListResponse();
        this.request("DescribeProductEventList", req, resp, cb);
    }

    /**
     * 查询告警历史

请注意，**如果使用子用户进行告警历史的查询，只能查询到被授权项目下的告警历史**，或不区分项目的产品的告警历史。如何对子账户授予项目的权限，请参考 [访问管理-项目与标签](https://cloud.tencent.com/document/product/598/32738)。
     * @param {DescribeAlarmHistoriesRequest} req
     * @param {function(string, DescribeAlarmHistoriesResponse):void} cb
     * @public
     */
    DescribeAlarmHistories(req, cb) {
        let resp = new DescribeAlarmHistoriesResponse();
        this.request("DescribeAlarmHistories", req, resp, cb);
    }

    /**
     * 创建通知模板
     * @param {CreateAlarmNoticeRequest} req
     * @param {function(string, CreateAlarmNoticeResponse):void} cb
     * @public
     */
    CreateAlarmNotice(req, cb) {
        let resp = new CreateAlarmNoticeResponse();
        this.request("CreateAlarmNotice", req, resp, cb);
    }

    /**
     * Grafana可视化服务 删除授权用户
     * @param {DeleteSSOAccountRequest} req
     * @param {function(string, DeleteSSOAccountResponse):void} cb
     * @public
     */
    DeleteSSOAccount(req, cb) {
        let resp = new DeleteSSOAccountResponse();
        this.request("DeleteSSOAccount", req, resp, cb);
    }

    /**
     * 查询单个通知模板的详情
     * @param {DescribeAlarmNoticeRequest} req
     * @param {function(string, DescribeAlarmNoticeResponse):void} cb
     * @public
     */
    DescribeAlarmNotice(req, cb) {
        let resp = new DescribeAlarmNoticeResponse();
        this.request("DescribeAlarmNotice", req, resp, cb);
    }

    /**
     * 创建 Grafana 集成配置
     * @param {CreateGrafanaIntegrationRequest} req
     * @param {function(string, CreateGrafanaIntegrationResponse):void} cb
     * @public
     */
    CreateGrafanaIntegration(req, cb) {
        let resp = new CreateGrafanaIntegrationResponse();
        this.request("CreateGrafanaIntegration", req, resp, cb);
    }

    /**
     * 拉取模板列表，默认模板将总是在最前面
     * @param {DescribePrometheusTempRequest} req
     * @param {function(string, DescribePrometheusTempResponse):void} cb
     * @public
     */
    DescribePrometheusTemp(req, cb) {
        let resp = new DescribePrometheusTempResponse();
        this.request("DescribePrometheusTemp", req, resp, cb);
    }

    /**
     * 更新 Grafana 白名单
     * @param {UpdateGrafanaWhiteListRequest} req
     * @param {function(string, UpdateGrafanaWhiteListResponse):void} cb
     * @public
     */
    UpdateGrafanaWhiteList(req, cb) {
        let resp = new UpdateGrafanaWhiteListResponse();
        this.request("UpdateGrafanaWhiteList", req, resp, cb);
    }

    /**
     * 设置一个策略为该告警策略类型、该项目的默认告警策略。
同一项目下相同的告警策略类型，就会被设置为非默认。
     * @param {SetDefaultAlarmPolicyRequest} req
     * @param {function(string, SetDefaultAlarmPolicyResponse):void} cb
     * @public
     */
    SetDefaultAlarmPolicy(req, cb) {
        let resp = new SetDefaultAlarmPolicyResponse();
        this.request("SetDefaultAlarmPolicy", req, resp, cb);
    }

    /**
     * 删除 Grafana 实例
     * @param {DeleteGrafanaInstanceRequest} req
     * @param {function(string, DeleteGrafanaInstanceResponse):void} cb
     * @public
     */
    DeleteGrafanaInstance(req, cb) {
        let resp = new DeleteGrafanaInstanceResponse();
        this.request("DeleteGrafanaInstance", req, resp, cb);
    }

    /**
     * 删除Prometheus配置，如果目标不存在，将返回成功
     * @param {DeletePrometheusConfigRequest} req
     * @param {function(string, DeletePrometheusConfigResponse):void} cb
     * @public
     */
    DeletePrometheusConfig(req, cb) {
        let resp = new DeletePrometheusConfigResponse();
        this.request("DeletePrometheusConfig", req, resp, cb);
    }

    /**
     * Grafana实例授权其他腾讯云用户
     * @param {CreateSSOAccountRequest} req
     * @param {function(string, CreateSSOAccountResponse):void} cb
     * @public
     */
    CreateSSOAccount(req, cb) {
        let resp = new CreateSSOAccountResponse();
        this.request("CreateSSOAccount", req, resp, cb);
    }

    /**
     * 发送自定义消息告警
     * @param {SendCustomAlarmMsgRequest} req
     * @param {function(string, SendCustomAlarmMsgResponse):void} cb
     * @public
     */
    SendCustomAlarmMsg(req, cb) {
        let resp = new SendCustomAlarmMsgResponse();
        this.request("SendCustomAlarmMsg", req, resp, cb);
    }

    /**
     * 云监控告警修改告警策略绑定的告警通知模板
     * @param {ModifyAlarmPolicyNoticeRequest} req
     * @param {function(string, ModifyAlarmPolicyNoticeResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyNotice(req, cb) {
        let resp = new ModifyAlarmPolicyNoticeResponse();
        this.request("ModifyAlarmPolicyNotice", req, resp, cb);
    }

    /**
     * 设置 Grafana 公网访问
     * @param {EnableGrafanaInternetRequest} req
     * @param {function(string, EnableGrafanaInternetResponse):void} cb
     * @public
     */
    EnableGrafanaInternet(req, cb) {
        let resp = new EnableGrafanaInternetResponse();
        this.request("EnableGrafanaInternet", req, resp, cb);
    }

    /**
     * 创建 Grafana 告警通道
     * @param {CreateGrafanaNotificationChannelRequest} req
     * @param {function(string, CreateGrafanaNotificationChannelResponse):void} cb
     * @public
     */
    CreateGrafanaNotificationChannel(req, cb) {
        let resp = new CreateGrafanaNotificationChannelResponse();
        this.request("CreateGrafanaNotificationChannel", req, resp, cb);
    }

    /**
     * 修改 Grafana 实例属性
     * @param {ModifyGrafanaInstanceRequest} req
     * @param {function(string, ModifyGrafanaInstanceResponse):void} cb
     * @public
     */
    ModifyGrafanaInstance(req, cb) {
        let resp = new ModifyGrafanaInstanceResponse();
        this.request("ModifyGrafanaInstance", req, resp, cb);
    }

    /**
     * 恢复 Grafana 实例
     * @param {ResumeGrafanaInstanceRequest} req
     * @param {function(string, ResumeGrafanaInstanceResponse):void} cb
     * @public
     */
    ResumeGrafanaInstance(req, cb) {
        let resp = new ResumeGrafanaInstanceResponse();
        this.request("ResumeGrafanaInstance", req, resp, cb);
    }

    /**
     * 创建一个云原生Prometheus模板
     * @param {CreatePrometheusTempRequest} req
     * @param {function(string, CreatePrometheusTempResponse):void} cb
     * @public
     */
    CreatePrometheusTemp(req, cb) {
        let resp = new CreatePrometheusTempResponse();
        this.request("CreatePrometheusTemp", req, resp, cb);
    }

    /**
     * 列出当前grafana实例的所有授权账号
     * @param {DescribeSSOAccountRequest} req
     * @param {function(string, DescribeSSOAccountResponse):void} cb
     * @public
     */
    DescribeSSOAccount(req, cb) {
        let resp = new DescribeSSOAccountResponse();
        this.request("DescribeSSOAccount", req, resp, cb);
    }

    /**
     * 获取基础告警列表
     * @param {DescribeBasicAlarmListRequest} req
     * @param {function(string, DescribeBasicAlarmListResponse):void} cb
     * @public
     */
    DescribeBasicAlarmList(req, cb) {
        let resp = new DescribeBasicAlarmListResponse();
        this.request("DescribeBasicAlarmList", req, resp, cb);
    }

    /**
     * 创建 Prometheus CVM Agent
     * @param {CreatePrometheusAgentRequest} req
     * @param {function(string, CreatePrometheusAgentResponse):void} cb
     * @public
     */
    CreatePrometheusAgent(req, cb) {
        let resp = new CreatePrometheusAgentResponse();
        this.request("CreatePrometheusAgent", req, resp, cb);
    }

    /**
     * 同步模板到实例或者集群，针对V2版本实例
     * @param {SyncPrometheusTempRequest} req
     * @param {function(string, SyncPrometheusTempResponse):void} cb
     * @public
     */
    SyncPrometheusTemp(req, cb) {
        let resp = new SyncPrometheusTempResponse();
        this.request("SyncPrometheusTemp", req, resp, cb);
    }

    /**
     * 创建全局告警通知渠道
     * @param {CreatePrometheusGlobalNotificationRequest} req
     * @param {function(string, CreatePrometheusGlobalNotificationResponse):void} cb
     * @public
     */
    CreatePrometheusGlobalNotification(req, cb) {
        let resp = new CreatePrometheusGlobalNotificationResponse();
        this.request("CreatePrometheusGlobalNotification", req, resp, cb);
    }

    /**
     * 更新 Prometheus 报警策略状态
     * @param {UpdateAlertRuleStateRequest} req
     * @param {function(string, UpdateAlertRuleStateResponse):void} cb
     * @public
     */
    UpdateAlertRuleState(req, cb) {
        let resp = new UpdateAlertRuleStateResponse();
        this.request("UpdateAlertRuleState", req, resp, cb);
    }

    /**
     * 修改模板内容
     * @param {ModifyPrometheusTempRequest} req
     * @param {function(string, ModifyPrometheusTempResponse):void} cb
     * @public
     */
    ModifyPrometheusTemp(req, cb) {
        let resp = new ModifyPrometheusTempResponse();
        this.request("ModifyPrometheusTemp", req, resp, cb);
    }

    /**
     * 解除实例绑定的 Grafana 可视化实例
     * @param {UnbindPrometheusManagedGrafanaRequest} req
     * @param {function(string, UnbindPrometheusManagedGrafanaResponse):void} cb
     * @public
     */
    UnbindPrometheusManagedGrafana(req, cb) {
        let resp = new UnbindPrometheusManagedGrafanaResponse();
        this.request("UnbindPrometheusManagedGrafana", req, resp, cb);
    }

    /**
     * 初始化TMP实例，开启集成中心时调用
     * @param {RunPrometheusInstanceRequest} req
     * @param {function(string, RunPrometheusInstanceResponse):void} cb
     * @public
     */
    RunPrometheusInstance(req, cb) {
        let resp = new RunPrometheusInstanceResponse();
        this.request("RunPrometheusInstance", req, resp, cb);
    }

    /**
     * 查询 exporter 集成列表
     * @param {DescribeExporterIntegrationsRequest} req
     * @param {function(string, DescribeExporterIntegrationsResponse):void} cb
     * @public
     */
    DescribeExporterIntegrations(req, cb) {
        let resp = new DescribeExporterIntegrationsResponse();
        this.request("DescribeExporterIntegrations", req, resp, cb);
    }

    /**
     * 列出实例已安装的插件
     * @param {DescribeInstalledPluginsRequest} req
     * @param {function(string, DescribeInstalledPluginsResponse):void} cb
     * @public
     */
    DescribeInstalledPlugins(req, cb) {
        let resp = new DescribeInstalledPluginsResponse();
        this.request("DescribeInstalledPlugins", req, resp, cb);
    }

    /**
     * 查询全局告警通知渠道
     * @param {DescribePrometheusGlobalNotificationRequest} req
     * @param {function(string, DescribePrometheusGlobalNotificationResponse):void} cb
     * @public
     */
    DescribePrometheusGlobalNotification(req, cb) {
        let resp = new DescribePrometheusGlobalNotificationResponse();
        this.request("DescribePrometheusGlobalNotification", req, resp, cb);
    }

    /**
     * 升级 Grafana Dashboard
     * @param {UpgradeGrafanaDashboardRequest} req
     * @param {function(string, UpgradeGrafanaDashboardResponse):void} cb
     * @public
     */
    UpgradeGrafanaDashboard(req, cb) {
        let resp = new UpgradeGrafanaDashboardResponse();
        this.request("UpgradeGrafanaDashboard", req, resp, cb);
    }

    /**
     * 查询通知模板列表
     * @param {DescribeAlarmNoticesRequest} req
     * @param {function(string, DescribeAlarmNoticesResponse):void} cb
     * @public
     */
    DescribeAlarmNotices(req, cb) {
        let resp = new DescribeAlarmNoticesResponse();
        this.request("DescribeAlarmNotices", req, resp, cb);
    }

    /**
     * 列出 Grafana DNS 配置
     * @param {DescribeDNSConfigRequest} req
     * @param {function(string, DescribeDNSConfigResponse):void} cb
     * @public
     */
    DescribeDNSConfig(req, cb) {
        let resp = new DescribeDNSConfigResponse();
        this.request("DescribeDNSConfig", req, resp, cb);
    }

    /**
     * 修改全局告警通知渠道
     * @param {ModifyPrometheusGlobalNotificationRequest} req
     * @param {function(string, ModifyPrometheusGlobalNotificationResponse):void} cb
     * @public
     */
    ModifyPrometheusGlobalNotification(req, cb) {
        let resp = new ModifyPrometheusGlobalNotificationResponse();
        this.request("ModifyPrometheusGlobalNotification", req, resp, cb);
    }

    /**
     * 获取关联目标集群的实例列表
     * @param {DescribePrometheusAgentInstancesRequest} req
     * @param {function(string, DescribePrometheusAgentInstancesResponse):void} cb
     * @public
     */
    DescribePrometheusAgentInstances(req, cb) {
        let resp = new DescribePrometheusAgentInstancesResponse();
        this.request("DescribePrometheusAgentInstances", req, resp, cb);
    }

    /**
     * 删除聚合实例
     * @param {DeletePrometheusRecordRuleYamlRequest} req
     * @param {function(string, DeletePrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    DeletePrometheusRecordRuleYaml(req, cb) {
        let resp = new DeletePrometheusRecordRuleYamlResponse();
        this.request("DeletePrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * 本接口 (DescribePrometheusInstances) 用于查询一个或多个实例的详细信息。
<ul>
<li>可以根据实例ID、实例名称或者实例状态等信息来查询实例的详细信息</li>
<li>如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的实例。</li>
</ul>
     * @param {DescribePrometheusInstancesRequest} req
     * @param {function(string, DescribePrometheusInstancesResponse):void} cb
     * @public
     */
    DescribePrometheusInstances(req, cb) {
        let resp = new DescribePrometheusInstancesResponse();
        this.request("DescribePrometheusInstances", req, resp, cb);
    }

    /**
     * 列出用户所有的 Grafana 服务
     * @param {DescribeGrafanaInstancesRequest} req
     * @param {function(string, DescribeGrafanaInstancesResponse):void} cb
     * @public
     */
    DescribeGrafanaInstances(req, cb) {
        let resp = new DescribeGrafanaInstancesResponse();
        this.request("DescribeGrafanaInstances", req, resp, cb);
    }

    /**
     * 通过yaml的方式修改Prometheus聚合实例
     * @param {ModifyPrometheusRecordRuleYamlRequest} req
     * @param {function(string, ModifyPrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    ModifyPrometheusRecordRuleYaml(req, cb) {
        let resp = new ModifyPrometheusRecordRuleYamlResponse();
        this.request("ModifyPrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * 更新 Grafana 配置
     * @param {UpdateGrafanaConfigRequest} req
     * @param {function(string, UpdateGrafanaConfigResponse):void} cb
     * @public
     */
    UpdateGrafanaConfig(req, cb) {
        let resp = new UpdateGrafanaConfigResponse();
        this.request("UpdateGrafanaConfig", req, resp, cb);
    }

    /**
     * 列出 Grafana 告警通道
     * @param {DescribeGrafanaNotificationChannelsRequest} req
     * @param {function(string, DescribeGrafanaNotificationChannelsResponse):void} cb
     * @public
     */
    DescribeGrafanaNotificationChannels(req, cb) {
        let resp = new DescribeGrafanaNotificationChannelsResponse();
        this.request("DescribeGrafanaNotificationChannels", req, resp, cb);
    }

    /**
     * 修改被关联集群的external labels
     * @param {ModifyPrometheusAgentExternalLabelsRequest} req
     * @param {function(string, ModifyPrometheusAgentExternalLabelsResponse):void} cb
     * @public
     */
    ModifyPrometheusAgentExternalLabels(req, cb) {
        let resp = new ModifyPrometheusAgentExternalLabelsResponse();
        this.request("ModifyPrometheusAgentExternalLabels", req, resp, cb);
    }

    /**
     * 更新策略组
     * @param {ModifyPolicyGroupRequest} req
     * @param {function(string, ModifyPolicyGroupResponse):void} cb
     * @public
     */
    ModifyPolicyGroup(req, cb) {
        let resp = new ModifyPolicyGroupResponse();
        this.request("ModifyPolicyGroup", req, resp, cb);
    }

    /**
     * 获取平台事件列表
     * @param {DescribeAccidentEventListRequest} req
     * @param {function(string, DescribeAccidentEventListResponse):void} cb
     * @public
     */
    DescribeAccidentEventList(req, cb) {
        let resp = new DescribeAccidentEventListResponse();
        this.request("DescribeAccidentEventList", req, resp, cb);
    }

    /**
     * 获取模板关联实例信息，针对V2版本实例
     * @param {DescribePrometheusTempSyncRequest} req
     * @param {function(string, DescribePrometheusTempSyncResponse):void} cb
     * @public
     */
    DescribePrometheusTempSync(req, cb) {
        let resp = new DescribePrometheusTempSyncResponse();
        this.request("DescribePrometheusTempSync", req, resp, cb);
    }

    /**
     * 列出 Prometheus 服务可用区
     * @param {DescribePrometheusZonesRequest} req
     * @param {function(string, DescribePrometheusZonesResponse):void} cb
     * @public
     */
    DescribePrometheusZones(req, cb) {
        let resp = new DescribePrometheusZonesResponse();
        this.request("DescribePrometheusZones", req, resp, cb);
    }

    /**
     * 查询告警指标列表
     * @param {DescribeAlarmMetricsRequest} req
     * @param {function(string, DescribeAlarmMetricsResponse):void} cb
     * @public
     */
    DescribeAlarmMetrics(req, cb) {
        let resp = new DescribeAlarmMetricsResponse();
        this.request("DescribeAlarmMetrics", req, resp, cb);
    }

    /**
     * 云监控告警修改告警策略的触发任务，TriggerTasks字段放触发任务列表，TriggerTasks传空数组时，代表解绑该策略的所有触发任务。
     * @param {ModifyAlarmPolicyTasksRequest} req
     * @param {function(string, ModifyAlarmPolicyTasksResponse):void} cb
     * @public
     */
    ModifyAlarmPolicyTasks(req, cb) {
        let resp = new ModifyAlarmPolicyTasksResponse();
        this.request("ModifyAlarmPolicyTasks", req, resp, cb);
    }

    /**
     * 删除 exporter 集成
     * @param {DeleteExporterIntegrationRequest} req
     * @param {function(string, DeleteExporterIntegrationResponse):void} cb
     * @public
     */
    DeleteExporterIntegration(req, cb) {
        let resp = new DeleteExporterIntegrationResponse();
        this.request("DeleteExporterIntegration", req, resp, cb);
    }

    /**
     * 删除2.0实例告警策略
     * @param {DeletePrometheusAlertPolicyRequest} req
     * @param {function(string, DeletePrometheusAlertPolicyResponse):void} cb
     * @public
     */
    DeletePrometheusAlertPolicy(req, cb) {
        let resp = new DeletePrometheusAlertPolicyResponse();
        this.request("DeletePrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * 更新 Prometheus CVM Agent 状态
     * @param {UpdatePrometheusAgentStatusRequest} req
     * @param {function(string, UpdatePrometheusAgentStatusResponse):void} cb
     * @public
     */
    UpdatePrometheusAgentStatus(req, cb) {
        let resp = new UpdatePrometheusAgentStatusResponse();
        this.request("UpdatePrometheusAgentStatus", req, resp, cb);
    }

    /**
     * 创建 Prometheus 的预聚合规则
     * @param {CreateRecordingRuleRequest} req
     * @param {function(string, CreateRecordingRuleResponse):void} cb
     * @public
     */
    CreateRecordingRule(req, cb) {
        let resp = new CreateRecordingRuleResponse();
        this.request("CreateRecordingRule", req, resp, cb);
    }

    /**
     * Prometheus 报警规则查询接口
     * @param {DescribeAlertRulesRequest} req
     * @param {function(string, DescribeAlertRulesResponse):void} cb
     * @public
     */
    DescribeAlertRules(req, cb) {
        let resp = new DescribeAlertRulesResponse();
        this.request("DescribeAlertRules", req, resp, cb);
    }

    /**
     * 获得实例级别抓取配置
     * @param {DescribePrometheusGlobalConfigRequest} req
     * @param {function(string, DescribePrometheusGlobalConfigResponse):void} cb
     * @public
     */
    DescribePrometheusGlobalConfig(req, cb) {
        let resp = new DescribePrometheusGlobalConfigResponse();
        this.request("DescribePrometheusGlobalConfig", req, resp, cb);
    }

    /**
     * 列出 Prometheus CVM Agent
     * @param {DescribePrometheusAgentsRequest} req
     * @param {function(string, DescribePrometheusAgentsResponse):void} cb
     * @public
     */
    DescribePrometheusAgents(req, cb) {
        let resp = new DescribePrometheusAgentsResponse();
        this.request("DescribePrometheusAgents", req, resp, cb);
    }

    /**
     * 查询告警策略列表
     * @param {DescribeAlarmPoliciesRequest} req
     * @param {function(string, DescribeAlarmPoliciesResponse):void} cb
     * @public
     */
    DescribeAlarmPolicies(req, cb) {
        let resp = new DescribeAlarmPoliciesResponse();
        this.request("DescribeAlarmPolicies", req, resp, cb);
    }

    /**
     * 获取targets信息
     * @param {DescribePrometheusTargetsTMPRequest} req
     * @param {function(string, DescribePrometheusTargetsTMPResponse):void} cb
     * @public
     */
    DescribePrometheusTargetsTMP(req, cb) {
        let resp = new DescribePrometheusTargetsTMPResponse();
        this.request("DescribePrometheusTargetsTMP", req, resp, cb);
    }

    /**
     * 列出 Grafana 白名单
     * @param {DescribeGrafanaWhiteListRequest} req
     * @param {function(string, DescribeGrafanaWhiteListResponse):void} cb
     * @public
     */
    DescribeGrafanaWhiteList(req, cb) {
        let resp = new DescribeGrafanaWhiteListResponse();
        this.request("DescribeGrafanaWhiteList", req, resp, cb);
    }

    /**
     * 创建告警策略
     * @param {CreatePrometheusAlertPolicyRequest} req
     * @param {function(string, CreatePrometheusAlertPolicyResponse):void} cb
     * @public
     */
    CreatePrometheusAlertPolicy(req, cb) {
        let resp = new CreatePrometheusAlertPolicyResponse();
        this.request("CreatePrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * 强制销毁 Grafana 实例
     * @param {CleanGrafanaInstanceRequest} req
     * @param {function(string, CleanGrafanaInstanceResponse):void} cb
     * @public
     */
    CleanGrafanaInstance(req, cb) {
        let resp = new CleanGrafanaInstanceResponse();
        this.request("CleanGrafanaInstance", req, resp, cb);
    }

    /**
     * 删除 Grafana Dashboard
     * @param {UninstallGrafanaDashboardRequest} req
     * @param {function(string, UninstallGrafanaDashboardResponse):void} cb
     * @public
     */
    UninstallGrafanaDashboard(req, cb) {
        let resp = new UninstallGrafanaDashboardResponse();
        this.request("UninstallGrafanaDashboard", req, resp, cb);
    }

    /**
     * 获取2.0实例告警策略列表
     * @param {DescribePrometheusAlertPolicyRequest} req
     * @param {function(string, DescribePrometheusAlertPolicyResponse):void} cb
     * @public
     */
    DescribePrometheusAlertPolicy(req, cb) {
        let resp = new DescribePrometheusAlertPolicyResponse();
        this.request("DescribePrometheusAlertPolicy", req, resp, cb);
    }

    /**
     * 获取基础策略告警组列表
     * @param {DescribePolicyGroupListRequest} req
     * @param {function(string, DescribePolicyGroupListResponse):void} cb
     * @public
     */
    DescribePolicyGroupList(req, cb) {
        let resp = new DescribePolicyGroupListResponse();
        this.request("DescribePolicyGroupList", req, resp, cb);
    }

    /**
     * 修改 Prometheus 实例相关属性
     * @param {ModifyPrometheusInstanceAttributesRequest} req
     * @param {function(string, ModifyPrometheusInstanceAttributesResponse):void} cb
     * @public
     */
    ModifyPrometheusInstanceAttributes(req, cb) {
        let resp = new ModifyPrometheusInstanceAttributesResponse();
        this.request("ModifyPrometheusInstanceAttributes", req, resp, cb);
    }

    /**
     * 删除告警策略
     * @param {DeleteAlarmPolicyRequest} req
     * @param {function(string, DeleteAlarmPolicyResponse):void} cb
     * @public
     */
    DeleteAlarmPolicy(req, cb) {
        let resp = new DeleteAlarmPolicyResponse();
        this.request("DeleteAlarmPolicy", req, resp, cb);
    }

    /**
     * 获取云产品的监控数据。此接口不适用于拉取容器服务监控数据，如需拉取容器服务监控数据，请使用[根据维度条件查询监控数据](https://cloud.tencent.com/document/product/248/51845)接口。
传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用频率限制为：20次/秒，1200次/分钟。单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。

>?
>- 2022年9月1日起，云监控开始对GetMonitorData接口计费。每个主账号每月可获得100万次免费请求额度，超过免费额度后如需继续调用接口需要开通 [API请求按量付费](https://buy.cloud.tencent.com/APIRequestBuy)。计费规则可查看[API计费文档](https://cloud.tencent.com/document/product/248/77914)。
     * @param {GetMonitorDataRequest} req
     * @param {function(string, GetMonitorDataResponse):void} cb
     * @public
     */
    GetMonitorData(req, cb) {
        let resp = new GetMonitorDataResponse();
        this.request("GetMonitorData", req, resp, cb);
    }

    /**
     * 默认接口请求频率限制：50次/秒。
默认单租户指标上限：100个。
单次上报最多 30 个指标/值对，请求返回错误时，请求中所有的指标/值均不会被保存。

上报的时间戳为期望保存的时间戳，建议构造整数分钟时刻的时间戳。
时间戳时间范围必须为当前时间到 300 秒前之间。
同一 IP 指标对的数据需按分钟先后顺序上报。
     * @param {PutMonitorDataRequest} req
     * @param {function(string, PutMonitorDataResponse):void} cb
     * @public
     */
    PutMonitorData(req, cb) {
        let resp = new PutMonitorDataResponse();
        this.request("PutMonitorData", req, resp, cb);
    }

    /**
     * 更新 Grafana 的 DNS 配置
     * @param {UpdateDNSConfigRequest} req
     * @param {function(string, UpdateDNSConfigResponse):void} cb
     * @public
     */
    UpdateDNSConfig(req, cb) {
        let resp = new UpdateDNSConfigResponse();
        this.request("UpdateDNSConfig", req, resp, cb);
    }

    /**
     * 列出在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     * @param {DescribeServiceDiscoveryRequest} req
     * @param {function(string, DescribeServiceDiscoveryResponse):void} cb
     * @public
     */
    DescribeServiceDiscovery(req, cb) {
        let resp = new DescribeServiceDiscoveryResponse();
        this.request("DescribeServiceDiscovery", req, resp, cb);
    }

    /**
     * 列出 Grafana 已安装的集成
     * @param {DescribeGrafanaIntegrationsRequest} req
     * @param {function(string, DescribeGrafanaIntegrationsResponse):void} cb
     * @public
     */
    DescribeGrafanaIntegrations(req, cb) {
        let resp = new DescribeGrafanaIntegrationsResponse();
        this.request("DescribeGrafanaIntegrations", req, resp, cb);
    }

    /**
     * 拉取Prometheus配置
     * @param {DescribePrometheusConfigRequest} req
     * @param {function(string, DescribePrometheusConfigResponse):void} cb
     * @public
     */
    DescribePrometheusConfig(req, cb) {
        let resp = new DescribePrometheusConfigResponse();
        this.request("DescribePrometheusConfig", req, resp, cb);
    }

    /**
     * 获取基础策略组详情
     * @param {DescribePolicyGroupInfoRequest} req
     * @param {function(string, DescribePolicyGroupInfoResponse):void} cb
     * @public
     */
    DescribePolicyGroupInfo(req, cb) {
        let resp = new DescribePolicyGroupInfoResponse();
        this.request("DescribePolicyGroupInfo", req, resp, cb);
    }

    /**
     * 拉取Prometheus聚合规则yaml列表
     * @param {DescribePrometheusRecordRuleYamlRequest} req
     * @param {function(string, DescribePrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    DescribePrometheusRecordRuleYaml(req, cb) {
        let resp = new DescribePrometheusRecordRuleYamlResponse();
        this.request("DescribePrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * 查询所有名字空间
     * @param {DescribeAllNamespacesRequest} req
     * @param {function(string, DescribeAllNamespacesResponse):void} cb
     * @public
     */
    DescribeAllNamespaces(req, cb) {
        let resp = new DescribeAllNamespacesResponse();
        this.request("DescribeAllNamespaces", req, resp, cb);
    }

    /**
     * 在腾讯云容器服务下创建 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     * @param {CreateServiceDiscoveryRequest} req
     * @param {function(string, CreateServiceDiscoveryResponse):void} cb
     * @public
     */
    CreateServiceDiscovery(req, cb) {
        let resp = new CreateServiceDiscoveryResponse();
        this.request("CreateServiceDiscovery", req, resp, cb);
    }

    /**
     * 以Yaml的方式创建聚合规则
     * @param {CreatePrometheusRecordRuleYamlRequest} req
     * @param {function(string, CreatePrometheusRecordRuleYamlResponse):void} cb
     * @public
     */
    CreatePrometheusRecordRuleYaml(req, cb) {
        let resp = new CreatePrometheusRecordRuleYamlResponse();
        this.request("CreatePrometheusRecordRuleYaml", req, resp, cb);
    }

    /**
     * 删除一个云原生Prometheus配置模板
     * @param {DeletePrometheusTempRequest} req
     * @param {function(string, DeletePrometheusTempResponse):void} cb
     * @public
     */
    DeletePrometheusTemp(req, cb) {
        let resp = new DeletePrometheusTempResponse();
        this.request("DeletePrometheusTemp", req, resp, cb);
    }

    /**
     * 云监控告警获取告警通知模板所有回调URL
     * @param {DescribeAlarmNoticeCallbacksRequest} req
     * @param {function(string, DescribeAlarmNoticeCallbacksResponse):void} cb
     * @public
     */
    DescribeAlarmNoticeCallbacks(req, cb) {
        let resp = new DescribeAlarmNoticeCallbacksResponse();
        this.request("DescribeAlarmNoticeCallbacks", req, resp, cb);
    }

    /**
     * 彻底删除 Prometheus 实例相关数据，给定的实例必须先被 Terminate
     * @param {DestroyPrometheusInstanceRequest} req
     * @param {function(string, DestroyPrometheusInstanceResponse):void} cb
     * @public
     */
    DestroyPrometheusInstance(req, cb) {
        let resp = new DestroyPrometheusInstanceResponse();
        this.request("DestroyPrometheusInstance", req, resp, cb);
    }

    /**
     * 删除已安装的插件
     * @param {UninstallGrafanaPluginsRequest} req
     * @param {function(string, UninstallGrafanaPluginsResponse):void} cb
     * @public
     */
    UninstallGrafanaPlugins(req, cb) {
        let resp = new UninstallGrafanaPluginsResponse();
        this.request("UninstallGrafanaPlugins", req, resp, cb);
    }

    /**
     * 更新 Grafana 集成配置
     * @param {UpdateGrafanaIntegrationRequest} req
     * @param {function(string, UpdateGrafanaIntegrationResponse):void} cb
     * @public
     */
    UpdateGrafanaIntegration(req, cb) {
        let resp = new UpdateGrafanaIntegrationResponse();
        this.request("UpdateGrafanaIntegration", req, resp, cb);
    }

    /**
     * 增加策略组
     * @param {CreatePolicyGroupRequest} req
     * @param {function(string, CreatePolicyGroupResponse):void} cb
     * @public
     */
    CreatePolicyGroup(req, cb) {
        let resp = new CreatePolicyGroupResponse();
        this.request("CreatePolicyGroup", req, resp, cb);
    }

    /**
     * 销毁按量 Prometheus 实例
     * @param {TerminatePrometheusInstancesRequest} req
     * @param {function(string, TerminatePrometheusInstancesResponse):void} cb
     * @public
     */
    TerminatePrometheusInstances(req, cb) {
        let resp = new TerminatePrometheusInstancesResponse();
        this.request("TerminatePrometheusInstances", req, resp, cb);
    }

    /**
     * 获取与云监控融合实例列表
     * @param {DescribePrometheusInstancesOverviewRequest} req
     * @param {function(string, DescribePrometheusInstancesOverviewResponse):void} cb
     * @public
     */
    DescribePrometheusInstancesOverview(req, cb) {
        let resp = new DescribePrometheusInstancesOverviewResponse();
        this.request("DescribePrometheusInstancesOverview", req, resp, cb);
    }

    /**
     * 解除模板同步，这将会删除目标中该模板所生产的配置，针对V2版本实例
     * @param {DeletePrometheusTempSyncRequest} req
     * @param {function(string, DeletePrometheusTempSyncResponse):void} cb
     * @public
     */
    DeletePrometheusTempSync(req, cb) {
        let resp = new DeletePrometheusTempSyncResponse();
        this.request("DeletePrometheusTempSync", req, resp, cb);
    }

    /**
     * 创建prometheus配置
     * @param {CreatePrometheusConfigRequest} req
     * @param {function(string, CreatePrometheusConfigResponse):void} cb
     * @public
     */
    CreatePrometheusConfig(req, cb) {
        let resp = new CreatePrometheusConfigResponse();
        this.request("CreatePrometheusConfig", req, resp, cb);
    }

    /**
     * 列出可安装的所有 Grafana 插件
     * @param {DescribePluginOverviewsRequest} req
     * @param {function(string, DescribePluginOverviewsResponse):void} cb
     * @public
     */
    DescribePluginOverviews(req, cb) {
        let resp = new DescribePluginOverviewsResponse();
        this.request("DescribePluginOverviews", req, resp, cb);
    }

    /**
     * 根据条件查询 Prometheus 预聚合规则
     * @param {DescribeRecordingRulesRequest} req
     * @param {function(string, DescribeRecordingRulesResponse):void} cb
     * @public
     */
    DescribeRecordingRules(req, cb) {
        let resp = new DescribeRecordingRulesResponse();
        this.request("DescribeRecordingRules", req, resp, cb);
    }

    /**
     * 修改prometheus配置，如果配置项不存在，则会新增
     * @param {ModifyPrometheusConfigRequest} req
     * @param {function(string, ModifyPrometheusConfigResponse):void} cb
     * @public
     */
    ModifyPrometheusConfig(req, cb) {
        let resp = new ModifyPrometheusConfigResponse();
        this.request("ModifyPrometheusConfig", req, resp, cb);
    }

    /**
     * 获取单个告警策略详情
     * @param {DescribeAlarmPolicyRequest} req
     * @param {function(string, DescribeAlarmPolicyResponse):void} cb
     * @public
     */
    DescribeAlarmPolicy(req, cb) {
        let resp = new DescribeAlarmPolicyResponse();
        this.request("DescribeAlarmPolicy", req, resp, cb);
    }


}
module.exports = MonitorClient;
