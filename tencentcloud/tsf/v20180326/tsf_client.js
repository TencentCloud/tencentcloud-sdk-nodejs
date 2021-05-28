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
const DescribePublicConfigSummaryRequest = models.DescribePublicConfigSummaryRequest;
const ModifyPathRewriteRequest = models.ModifyPathRewriteRequest;
const TsfPageContainerEvent = models.TsfPageContainerEvent;
const ApiDetailResponse = models.ApiDetailResponse;
const CosCredentials = models.CosCredentials;
const DeletePathRewritesResponse = models.DeletePathRewritesResponse;
const PathRewritePage = models.PathRewritePage;
const DescribeUnitApiUseDetailRequest = models.DescribeUnitApiUseDetailRequest;
const DescribeApiVersionsResponse = models.DescribeApiVersionsResponse;
const StopContainerGroupResponse = models.StopContainerGroupResponse;
const DeletePathRewritesRequest = models.DeletePathRewritesRequest;
const DeleteLaneResponse = models.DeleteLaneResponse;
const SimpleApplication = models.SimpleApplication;
const ContinueRunFailedTaskBatchRequest = models.ContinueRunFailedTaskBatchRequest;
const DescribeSimpleClustersResponse = models.DescribeSimpleClustersResponse;
const DeleteRepositoryResponse = models.DeleteRepositoryResponse;
const DeleteApplicationResponse = models.DeleteApplicationResponse;
const QuantileEntity = models.QuantileEntity;
const UpdateRepositoryRequest = models.UpdateRepositoryRequest;
const DescribePathRewriteResponse = models.DescribePathRewriteResponse;
const DescribeConfigsResponse = models.DescribeConfigsResponse;
const ModifyContainerReplicasRequest = models.ModifyContainerReplicasRequest;
const CreateGatewayApiResponse = models.CreateGatewayApiResponse;
const DescribeApiVersionsRequest = models.DescribeApiVersionsRequest;
const TsfPageConfigReleaseLog = models.TsfPageConfigReleaseLog;
const DescribeGroupBindedGatewaysResponse = models.DescribeGroupBindedGatewaysResponse;
const UnbindApiGroupRequest = models.UnbindApiGroupRequest;
const TaskRecord = models.TaskRecord;
const CreateNamespaceResponse = models.CreateNamespaceResponse;
const RedoTaskBatchRequest = models.RedoTaskBatchRequest;
const DescribeTaskLastStatusRequest = models.DescribeTaskLastStatusRequest;
const ModifyUploadInfoResponse = models.ModifyUploadInfoResponse;
const TsfPageConfig = models.TsfPageConfig;
const CreateApiRateLimitRuleRequest = models.CreateApiRateLimitRuleRequest;
const TaskRecordPage = models.TaskRecordPage;
const DeleteServerlessGroupRequest = models.DeleteServerlessGroupRequest;
const ChangeApiUsableStatusRequest = models.ChangeApiUsableStatusRequest;
const DescribeApiRateLimitRulesRequest = models.DescribeApiRateLimitRulesRequest;
const DescribeApiGroupsResponse = models.DescribeApiGroupsResponse;
const DeletePublicConfigRequest = models.DeletePublicConfigRequest;
const DeleteNamespaceResponse = models.DeleteNamespaceResponse;
const CreateMicroserviceRequest = models.CreateMicroserviceRequest;
const ReleaseConfigResponse = models.ReleaseConfigResponse;
const DescribeUnitRuleResponse = models.DescribeUnitRuleResponse;
const DeleteImageTagsRequest = models.DeleteImageTagsRequest;
const DescribeRepositoriesRequest = models.DescribeRepositoriesRequest;
const RollbackConfigRequest = models.RollbackConfigRequest;
const CreateGatewayApiRequest = models.CreateGatewayApiRequest;
const DescribeCreateGatewayApiStatusResponse = models.DescribeCreateGatewayApiStatusResponse;
const DeleteConfigResponse = models.DeleteConfigResponse;
const DescribeGroupGatewaysRequest = models.DescribeGroupGatewaysRequest;
const UpdateApiRateLimitRuleResponse = models.UpdateApiRateLimitRuleResponse;
const DescribeGatewayAllGroupApisResponse = models.DescribeGatewayAllGroupApisResponse;
const LaneRule = models.LaneRule;
const MsInstance = models.MsInstance;
const GatewayPluginBoundParam = models.GatewayPluginBoundParam;
const DescribeServerlessGroupsResponse = models.DescribeServerlessGroupsResponse;
const ImageRepository = models.ImageRepository;
const AddInstancesResponse = models.AddInstancesResponse;
const StartContainerGroupRequest = models.StartContainerGroupRequest;
const DescribeRepositoryResponse = models.DescribeRepositoryResponse;
const Instance = models.Instance;
const UpdateHealthCheckSettingsRequest = models.UpdateHealthCheckSettingsRequest;
const EnableUnitRuleRequest = models.EnableUnitRuleRequest;
const CreateClusterResponse = models.CreateClusterResponse;
const CreateMicroserviceResponse = models.CreateMicroserviceResponse;
const StopGroupRequest = models.StopGroupRequest;
const ShrinkGroupResponse = models.ShrinkGroupResponse;
const CosUploadInfo = models.CosUploadInfo;
const DescribeLanesResponse = models.DescribeLanesResponse;
const CreateNamespaceRequest = models.CreateNamespaceRequest;
const DescribeClusterInstancesRequest = models.DescribeClusterInstancesRequest;
const DescribeGroupBindedGatewaysRequest = models.DescribeGroupBindedGatewaysRequest;
const DescribeRepositoryRequest = models.DescribeRepositoryRequest;
const RedoTaskRequest = models.RedoTaskRequest;
const DeleteApiGroupResponse = models.DeleteApiGroupResponse;
const ImageTagsResult = models.ImageTagsResult;
const RepositoryInfo = models.RepositoryInfo;
const DraftApiGroupRequest = models.DraftApiGroupRequest;
const CreateLaneResponse = models.CreateLaneResponse;
const UpdateApiTimeoutsResponse = models.UpdateApiTimeoutsResponse;
const UnitRule = models.UnitRule;
const DescribePkgsResponse = models.DescribePkgsResponse;
const DescribeSimpleNamespacesResponse = models.DescribeSimpleNamespacesResponse;
const DeleteImageTag = models.DeleteImageTag;
const DescribeMicroservicesResponse = models.DescribeMicroservicesResponse;
const TaskLastExecuteStatus = models.TaskLastExecuteStatus;
const DescribePublicConfigRequest = models.DescribePublicConfigRequest;
const OverviewBasicResourceUsage = models.OverviewBasicResourceUsage;
const CreatePublicConfigResponse = models.CreatePublicConfigResponse;
const LaneRules = models.LaneRules;
const TsfPageVmGroup = models.TsfPageVmGroup;
const CreateConfigResponse = models.CreateConfigResponse;
const DescribeCreateGatewayApiStatusRequest = models.DescribeCreateGatewayApiStatusRequest;
const DescribeConfigReleaseLogsRequest = models.DescribeConfigReleaseLogsRequest;
const ModifyContainerGroupRequest = models.ModifyContainerGroupRequest;
const UpdateRepositoryResponse = models.UpdateRepositoryResponse;
const RollbackConfigResponse = models.RollbackConfigResponse;
const RevocationConfigRequest = models.RevocationConfigRequest;
const StartContainerGroupResponse = models.StartContainerGroupResponse;
const ModifyTaskRequest = models.ModifyTaskRequest;
const DeleteUnitNamespacesResponse = models.DeleteUnitNamespacesResponse;
const DisableTaskRequest = models.DisableTaskRequest;
const DescribeBasicResourceUsageResponse = models.DescribeBasicResourceUsageResponse;
const PkgBind = models.PkgBind;
const RemoveInstancesRequest = models.RemoveInstancesRequest;
const TsfPageInstance = models.TsfPageInstance;
const DeleteGroupResponse = models.DeleteGroupResponse;
const DescribeSimpleApplicationsResponse = models.DescribeSimpleApplicationsResponse;
const DeployContainerGroupRequest = models.DeployContainerGroupRequest;
const DescribeSimpleApplicationsRequest = models.DescribeSimpleApplicationsRequest;
const ContainGroup = models.ContainGroup;
const ContainGroupResult = models.ContainGroupResult;
const UpdateUnitRuleRequest = models.UpdateUnitRuleRequest;
const ReleasePublicConfigResponse = models.ReleasePublicConfigResponse;
const ReleaseApiGroupResponse = models.ReleaseApiGroupResponse;
const UpdateApiRateLimitRulesRequest = models.UpdateApiRateLimitRulesRequest;
const DescribeGroupInstancesRequest = models.DescribeGroupInstancesRequest;
const DescribeMsApiListRequest = models.DescribeMsApiListRequest;
const DescribeUploadInfoResponse = models.DescribeUploadInfoResponse;
const DescribeMsApiListResponse = models.DescribeMsApiListResponse;
const EnableTaskRequest = models.EnableTaskRequest;
const RevocationPublicConfigResponse = models.RevocationPublicConfigResponse;
const DisableTaskResponse = models.DisableTaskResponse;
const DescribeMicroserviceRequest = models.DescribeMicroserviceRequest;
const DescribePodInstancesResponse = models.DescribePodInstancesResponse;
const DescribeRepositoriesResponse = models.DescribeRepositoriesResponse;
const MonitorOverview = models.MonitorOverview;
const CreateGroupRequest = models.CreateGroupRequest;
const StopTaskBatchResponse = models.StopTaskBatchResponse;
const CreateContainGroupResponse = models.CreateContainGroupResponse;
const DescribeContainerGroupDetailResponse = models.DescribeContainerGroupDetailResponse;
const Ports = models.Ports;
const DescribeGroupGatewaysResponse = models.DescribeGroupGatewaysResponse;
const RevocationConfigResponse = models.RevocationConfigResponse;
const DeployServerlessGroupResponse = models.DeployServerlessGroupResponse;
const CreateAllGatewayApiAsyncResponse = models.CreateAllGatewayApiAsyncResponse;
const DeleteTaskResponse = models.DeleteTaskResponse;
const TsfPageMsInstance = models.TsfPageMsInstance;
const DeleteMicroserviceRequest = models.DeleteMicroserviceRequest;
const RemoveInstancesResponse = models.RemoveInstancesResponse;
const DescribeContainerEventsRequest = models.DescribeContainerEventsRequest;
const DisableUnitRuleRequest = models.DisableUnitRuleRequest;
const Namespace = models.Namespace;
const DescribeGroupResponse = models.DescribeGroupResponse;
const Env = models.Env;
const ResourceFieldRef = models.ResourceFieldRef;
const DeleteContainerGroupResponse = models.DeleteContainerGroupResponse;
const DeleteServerlessGroupResponse = models.DeleteServerlessGroupResponse;
const DeleteImageTagsResponse = models.DeleteImageTagsResponse;
const CreateLaneRuleRequest = models.CreateLaneRuleRequest;
const DisableUnitRouteResponse = models.DisableUnitRouteResponse;
const ExecuteTaskRequest = models.ExecuteTaskRequest;
const DescribeApplicationResponse = models.DescribeApplicationResponse;
const LaneInfo = models.LaneInfo;
const DescribeConfigReleaseLogsResponse = models.DescribeConfigReleaseLogsResponse;
const DeletePublicConfigResponse = models.DeletePublicConfigResponse;
const DescribeSimpleGroupsResponse = models.DescribeSimpleGroupsResponse;
const DescribeFlowLastBatchStateRequest = models.DescribeFlowLastBatchStateRequest;
const TsfPageCluster = models.TsfPageCluster;
const TerminateTaskFlowBatchResponse = models.TerminateTaskFlowBatchResponse;
const ShrinkInstancesRequest = models.ShrinkInstancesRequest;
const ValueFrom = models.ValueFrom;
const ShrinkInstancesResponse = models.ShrinkInstancesResponse;
const DescribeApiRateLimitRulesResponse = models.DescribeApiRateLimitRulesResponse;
const AddClusterInstancesRequest = models.AddClusterInstancesRequest;
const DescribeGroupUseDetailResponse = models.DescribeGroupUseDetailResponse;
const TsfPageNamespace = models.TsfPageNamespace;
const UpdateApiTimeoutsRequest = models.UpdateApiTimeoutsRequest;
const DescribeSimpleNamespacesRequest = models.DescribeSimpleNamespacesRequest;
const ExecuteTaskFlowResponse = models.ExecuteTaskFlowResponse;
const ExpandGroupResponse = models.ExpandGroupResponse;
const DescribePublicConfigsResponse = models.DescribePublicConfigsResponse;
const DescribeUnitNamespacesResponse = models.DescribeUnitNamespacesResponse;
const ContinueRunFailedTaskBatchResponse = models.ContinueRunFailedTaskBatchResponse;
const DescribeSimpleClustersRequest = models.DescribeSimpleClustersRequest;
const DeployServerlessGroupRequest = models.DeployServerlessGroupRequest;
const ApiDefinitionDescr = models.ApiDefinitionDescr;
const DescribeLaneRulesResponse = models.DescribeLaneRulesResponse;
const DescribeImageRepositoryRequest = models.DescribeImageRepositoryRequest;
const TsfPageUnitRule = models.TsfPageUnitRule;
const DescribeApiGroupRequest = models.DescribeApiGroupRequest;
const RedoTaskExecuteResponse = models.RedoTaskExecuteResponse;
const DescribeContainerGroupDetailRequest = models.DescribeContainerGroupDetailRequest;
const DescribeGroupsWithPluginRequest = models.DescribeGroupsWithPluginRequest;
const ImageRepositoryResult = models.ImageRepositoryResult;
const ModifyTaskResponse = models.ModifyTaskResponse;
const DeleteUnitNamespacesRequest = models.DeleteUnitNamespacesRequest;
const DescribeGroupRequest = models.DescribeGroupRequest;
const UnitRuleItem = models.UnitRuleItem;
const BindPluginRequest = models.BindPluginRequest;
const HealthCheckSetting = models.HealthCheckSetting;
const GatewayDeployGroup = models.GatewayDeployGroup;
const PkgList = models.PkgList;
const Cluster = models.Cluster;
const DescribeGroupUseDetailRequest = models.DescribeGroupUseDetailRequest;
const Microservice = models.Microservice;
const UpdateUnitRuleResponse = models.UpdateUnitRuleResponse;
const HealthCheckSettings = models.HealthCheckSettings;
const StartGroupResponse = models.StartGroupResponse;
const DescribePathRewritesRequest = models.DescribePathRewritesRequest;
const ShrinkGroupRequest = models.ShrinkGroupRequest;
const RepositoryList = models.RepositoryList;
const CreateLaneRuleResponse = models.CreateLaneRuleResponse;
const CreateTaskResponse = models.CreateTaskResponse;
const DescribeContainerGroupsResponse = models.DescribeContainerGroupsResponse;
const UpdateApiGroupResponse = models.UpdateApiGroupResponse;
const DescribeGroupsWithPluginResponse = models.DescribeGroupsWithPluginResponse;
const AddInstancesRequest = models.AddInstancesRequest;
const GatewayPlugin = models.GatewayPlugin;
const GatewayApiGroupVo = models.GatewayApiGroupVo;
const CreateApplicationRequest = models.CreateApplicationRequest;
const DeployGroupRequest = models.DeployGroupRequest;
const LaneInfos = models.LaneInfos;
const CreateTaskFlowRequest = models.CreateTaskFlowRequest;
const ModifyContainerReplicasResponse = models.ModifyContainerReplicasResponse;
const TsfPageGatewayPlugin = models.TsfPageGatewayPlugin;
const ApiUseStatisticsEntity = models.ApiUseStatisticsEntity;
const UnbindApiGroupResponse = models.UnbindApiGroupResponse;
const DescribePathRewriteRequest = models.DescribePathRewriteRequest;
const CreateApplicationResponse = models.CreateApplicationResponse;
const GatewayGroupIds = models.GatewayGroupIds;
const DeployGroupResponse = models.DeployGroupResponse;
const DescribeServerlessGroupResponse = models.DescribeServerlessGroupResponse;
const BindApiGroupResponse = models.BindApiGroupResponse;
const MetricDataPointMap = models.MetricDataPointMap;
const ModifyPathRewriteResponse = models.ModifyPathRewriteResponse;
const EnableUnitRuleResponse = models.EnableUnitRuleResponse;
const DescribeEnabledUnitRuleResponse = models.DescribeEnabledUnitRuleResponse;
const UpdateApiGroupRequest = models.UpdateApiGroupRequest;
const TsfApiListResponse = models.TsfApiListResponse;
const EnableUnitRouteResponse = models.EnableUnitRouteResponse;
const DisableUnitRuleResponse = models.DisableUnitRuleResponse;
const TsfPageGatewayDeployGroup = models.TsfPageGatewayDeployGroup;
const ImageTag = models.ImageTag;
const ExecuteTaskFlowRequest = models.ExecuteTaskFlowRequest;
const TerminateTaskFlowBatchRequest = models.TerminateTaskFlowBatchRequest;
const CreateUnitRuleResponse = models.CreateUnitRuleResponse;
const DescribeTaskRecordsResponse = models.DescribeTaskRecordsResponse;
const VmGroup = models.VmGroup;
const DescribeApiUseDetailResponse = models.DescribeApiUseDetailResponse;
const ServiceSetting = models.ServiceSetting;
const ModifyUploadInfoRequest = models.ModifyUploadInfoRequest;
const ApplicationForPage = models.ApplicationForPage;
const DescribeUnitRuleRequest = models.DescribeUnitRuleRequest;
const UpdateGatewayApiResponse = models.UpdateGatewayApiResponse;
const ContainerEvent = models.ContainerEvent;
const ModifyLaneResponse = models.ModifyLaneResponse;
const DescribePublicConfigSummaryResponse = models.DescribePublicConfigSummaryResponse;
const DescribePublicConfigReleaseLogsRequest = models.DescribePublicConfigReleaseLogsRequest;
const CreateServerlessGroupResponse = models.CreateServerlessGroupResponse;
const ShardArgument = models.ShardArgument;
const MetricDataPoint = models.MetricDataPoint;
const DescribeApplicationAttributeResponse = models.DescribeApplicationAttributeResponse;
const ModifyLaneRequest = models.ModifyLaneRequest;
const DescribeLanesRequest = models.DescribeLanesRequest;
const DescribeGatewayMonitorOverviewResponse = models.DescribeGatewayMonitorOverviewResponse;
const CreatePublicConfigRequest = models.CreatePublicConfigRequest;
const CreateAllGatewayApiAsyncRequest = models.CreateAllGatewayApiAsyncRequest;
const PathRewrite = models.PathRewrite;
const EnableTaskFlowResponse = models.EnableTaskFlowResponse;
const DeleteUnitRuleResponse = models.DeleteUnitRuleResponse;
const TsfPageConfigRelease = models.TsfPageConfigRelease;
const DisableTaskFlowResponse = models.DisableTaskFlowResponse;
const DescribeGatewayMonitorOverviewRequest = models.DescribeGatewayMonitorOverviewRequest;
const DescribeImageTagsResponse = models.DescribeImageTagsResponse;
const BindPluginResponse = models.BindPluginResponse;
const RedoTaskFlowBatchRequest = models.RedoTaskFlowBatchRequest;
const TsfPageUnitNamespace = models.TsfPageUnitNamespace;
const StopTaskExecuteRequest = models.StopTaskExecuteRequest;
const DescribePkgsRequest = models.DescribePkgsRequest;
const SchedulingStrategy = models.SchedulingStrategy;
const GatewayVo = models.GatewayVo;
const DescribeApplicationAttributeRequest = models.DescribeApplicationAttributeRequest;
const CreateTaskRequest = models.CreateTaskRequest;
const OperationInfo = models.OperationInfo;
const DescribePublicConfigResponse = models.DescribePublicConfigResponse;
const DescribeUsableUnitNamespacesResponse = models.DescribeUsableUnitNamespacesResponse;
const DescribeConfigResponse = models.DescribeConfigResponse;
const SimpleGroup = models.SimpleGroup;
const DescribeContainerEventsResponse = models.DescribeContainerEventsResponse;
const DescribeTaskRecordsRequest = models.DescribeTaskRecordsRequest;
const ModifyContainerGroupResponse = models.ModifyContainerGroupResponse;
const DeleteApplicationRequest = models.DeleteApplicationRequest;
const DescribeUnitNamespacesRequest = models.DescribeUnitNamespacesRequest;
const DeleteTaskRequest = models.DeleteTaskRequest;
const CreateUnitRuleRequest = models.CreateUnitRuleRequest;
const VmGroupSimple = models.VmGroupSimple;
const ApiResponseDescr = models.ApiResponseDescr;
const DescribePluginInstancesRequest = models.DescribePluginInstancesRequest;
const ApiRequestDescr = models.ApiRequestDescr;
const ApiVersionArray = models.ApiVersionArray;
const ConfigReleaseLog = models.ConfigReleaseLog;
const CreateConfigRequest = models.CreateConfigRequest;
const DescribeUploadInfoRequest = models.DescribeUploadInfoRequest;
const TaskFlowLastBatchState = models.TaskFlowLastBatchState;
const DescribeUnitRulesResponse = models.DescribeUnitRulesResponse;
const UpdateGatewayApiRequest = models.UpdateGatewayApiRequest;
const PathRewriteCreateObject = models.PathRewriteCreateObject;
const DescribeApiGroupsRequest = models.DescribeApiGroupsRequest;
const DescribeServerlessGroupRequest = models.DescribeServerlessGroupRequest;
const DeleteUnitRuleRequest = models.DeleteUnitRuleRequest;
const ApplicationAttribute = models.ApplicationAttribute;
const DeletePkgsResponse = models.DeletePkgsResponse;
const DescribeGroupsResponse = models.DescribeGroupsResponse;
const ModifyLaneRuleRequest = models.ModifyLaneRuleRequest;
const CreateTaskFlowResponse = models.CreateTaskFlowResponse;
const DescribeMicroservicesRequest = models.DescribeMicroservicesRequest;
const AddClusterInstancesResponse = models.AddClusterInstancesResponse;
const DescribeTaskLastStatusResponse = models.DescribeTaskLastStatusResponse;
const DescribePublicConfigsRequest = models.DescribePublicConfigsRequest;
const GatewayGroupApiVo = models.GatewayGroupApiVo;
const DescribeApplicationsRequest = models.DescribeApplicationsRequest;
const DescribeTaskDetailRequest = models.DescribeTaskDetailRequest;
const DescribePublicConfigReleasesRequest = models.DescribePublicConfigReleasesRequest;
const DescribeLaneRulesRequest = models.DescribeLaneRulesRequest;
const CreateServerlessGroupRequest = models.CreateServerlessGroupRequest;
const UnitRuleTag = models.UnitRuleTag;
const DescribePluginInstancesResponse = models.DescribePluginInstancesResponse;
const CreateRepositoryResponse = models.CreateRepositoryResponse;
const GroupUnitApiDailyUseStatistics = models.GroupUnitApiDailyUseStatistics;
const DescribeServerlessGroupsRequest = models.DescribeServerlessGroupsRequest;
const CosDownloadInfo = models.CosDownloadInfo;
const DeletePkgsRequest = models.DeletePkgsRequest;
const ServerlessGroupPage = models.ServerlessGroupPage;
const InstanceAdvancedSettings = models.InstanceAdvancedSettings;
const GroupApiUseStatistics = models.GroupApiUseStatistics;
const ChangeApiUsableStatusResponse = models.ChangeApiUsableStatusResponse;
const EnableTaskResponse = models.EnableTaskResponse;
const UpdateApiRateLimitRulesResponse = models.UpdateApiRateLimitRulesResponse;
const GroupUnitApiUseStatistics = models.GroupUnitApiUseStatistics;
const DescribeGroupInstancesResponse = models.DescribeGroupInstancesResponse;
const DescribeDownloadInfoRequest = models.DescribeDownloadInfoRequest;
const DeleteApiGroupRequest = models.DeleteApiGroupRequest;
const ReleaseApiGroupRequest = models.ReleaseApiGroupRequest;
const StartGroupRequest = models.StartGroupRequest;
const DescribeClusterInstancesResponse = models.DescribeClusterInstancesResponse;
const DescribeTaskDetailResponse = models.DescribeTaskDetailResponse;
const ExpandGroupRequest = models.ExpandGroupRequest;
const RevocationPublicConfigRequest = models.RevocationPublicConfigRequest;
const ModifyLaneRuleResponse = models.ModifyLaneRuleResponse;
const TsfPageSimpleGroup = models.TsfPageSimpleGroup;
const TaskRule = models.TaskRule;
const PkgInfo = models.PkgInfo;
const GroupPod = models.GroupPod;
const EnableTaskFlowRequest = models.EnableTaskFlowRequest;
const DescribeReleasedConfigRequest = models.DescribeReleasedConfigRequest;
const ApiInfo = models.ApiInfo;
const StopGroupResponse = models.StopGroupResponse;
const CreateRepositoryRequest = models.CreateRepositoryRequest;
const ModifyMicroserviceRequest = models.ModifyMicroserviceRequest;
const DescribeConfigReleasesRequest = models.DescribeConfigReleasesRequest;
const GroupDailyUseStatistics = models.GroupDailyUseStatistics;
const DescribeEnabledUnitRuleRequest = models.DescribeEnabledUnitRuleRequest;
const DescribeApiGroupResponse = models.DescribeApiGroupResponse;
const UpdateApiRateLimitRuleRequest = models.UpdateApiRateLimitRuleRequest;
const CreateLaneRequest = models.CreateLaneRequest;
const CreateApiGroupResponse = models.CreateApiGroupResponse;
const ServiceConfig = models.ServiceConfig;
const RedoTaskExecuteRequest = models.RedoTaskExecuteRequest;
const DescribeApplicationsResponse = models.DescribeApplicationsResponse;
const DescribeConfigRequest = models.DescribeConfigRequest;
const DisableUnitRouteRequest = models.DisableUnitRouteRequest;
const DescribeUnitRulesRequest = models.DescribeUnitRulesRequest;
const DescribeGatewayAllGroupApisRequest = models.DescribeGatewayAllGroupApisRequest;
const DeleteGroupRequest = models.DeleteGroupRequest;
const ContainerGroupDetail = models.ContainerGroupDetail;
const BindApiGroupRequest = models.BindApiGroupRequest;
const StopTaskBatchRequest = models.StopTaskBatchRequest;
const ServerlessGroup = models.ServerlessGroup;
const ApiDetailInfo = models.ApiDetailInfo;
const DescribeUnitApiUseDetailResponse = models.DescribeUnitApiUseDetailResponse;
const DescribeUsableUnitNamespacesRequest = models.DescribeUsableUnitNamespacesRequest;
const DescribeContainerGroupsRequest = models.DescribeContainerGroupsRequest;
const DisableTaskFlowRequest = models.DisableTaskFlowRequest;
const DescribePodInstancesRequest = models.DescribePodInstancesRequest;
const RedoTaskResponse = models.RedoTaskResponse;
const DescribeConfigsRequest = models.DescribeConfigsRequest;
const EnableUnitRouteRequest = models.EnableUnitRouteRequest;
const TsfPageApplication = models.TsfPageApplication;
const DeleteConfigRequest = models.DeleteConfigRequest;
const DescribePublicConfigReleaseLogsResponse = models.DescribePublicConfigReleaseLogsResponse;
const ExecuteTaskResponse = models.ExecuteTaskResponse;
const CreateApiRateLimitRuleResponse = models.CreateApiRateLimitRuleResponse;
const Config = models.Config;
const ProtocolPort = models.ProtocolPort;
const DescribeApiUseDetailRequest = models.DescribeApiUseDetailRequest;
const FieldRef = models.FieldRef;
const CreateClusterRequest = models.CreateClusterRequest;
const TsfPageMicroservice = models.TsfPageMicroservice;
const ConfigRelease = models.ConfigRelease;
const DeleteContainerGroupRequest = models.DeleteContainerGroupRequest;
const AdvanceSettings = models.AdvanceSettings;
const ReleaseConfigRequest = models.ReleaseConfigRequest;
const MsApiArray = models.MsApiArray;
const DescribeApiDetailRequest = models.DescribeApiDetailRequest;
const StopContainerGroupRequest = models.StopContainerGroupRequest;
const UpdateHealthCheckSettingsResponse = models.UpdateHealthCheckSettingsResponse;
const ApiRateLimitRule = models.ApiRateLimitRule;
const GroupUseStatisticsEntity = models.GroupUseStatisticsEntity;
const DescribePathRewritesResponse = models.DescribePathRewritesResponse;
const AddInstanceResult = models.AddInstanceResult;
const DescribeFlowLastBatchStateResponse = models.DescribeFlowLastBatchStateResponse;
const StopTaskExecuteResponse = models.StopTaskExecuteResponse;
const DescribeSimpleGroupsRequest = models.DescribeSimpleGroupsRequest;
const DescribeConfigReleasesResponse = models.DescribeConfigReleasesResponse;
const ApiGroupInfo = models.ApiGroupInfo;
const UnitNamespace = models.UnitNamespace;
const ModifyMicroserviceResponse = models.ModifyMicroserviceResponse;
const CreateApiGroupRequest = models.CreateApiGroupRequest;
const DescribeDownloadInfoResponse = models.DescribeDownloadInfoResponse;
const GroupPodResult = models.GroupPodResult;
const DescribeApplicationRequest = models.DescribeApplicationRequest;
const DeployContainerGroupResponse = models.DeployContainerGroupResponse;
const DescribeBasicResourceUsageRequest = models.DescribeBasicResourceUsageRequest;
const DeleteMicroserviceResponse = models.DeleteMicroserviceResponse;
const DescribeReleasedConfigResponse = models.DescribeReleasedConfigResponse;
const HealthCheckConfig = models.HealthCheckConfig;
const TsfPageSimpleApplication = models.TsfPageSimpleApplication;
const PropertyField = models.PropertyField;
const DescribeApiDetailResponse = models.DescribeApiDetailResponse;
const DescribeGroupsRequest = models.DescribeGroupsRequest;
const LaneRuleTag = models.LaneRuleTag;
const OperationInfoDetail = models.OperationInfoDetail;
const CreatePathRewritesRequest = models.CreatePathRewritesRequest;
const DeleteNamespaceRequest = models.DeleteNamespaceRequest;
const RedoTaskBatchResponse = models.RedoTaskBatchResponse;
const DescribeMicroserviceResponse = models.DescribeMicroserviceResponse;
const DescribeImageRepositoryResponse = models.DescribeImageRepositoryResponse;
const TaskId = models.TaskId;
const DescribeImageTagsRequest = models.DescribeImageTagsRequest;
const DescribeConfigSummaryResponse = models.DescribeConfigSummaryResponse;
const CreateContainGroupRequest = models.CreateContainGroupRequest;
const DescribePublicConfigReleasesResponse = models.DescribePublicConfigReleasesResponse;
const CreatePathRewritesResponse = models.CreatePathRewritesResponse;
const DeleteRepositoryRequest = models.DeleteRepositoryRequest;
const DraftApiGroupResponse = models.DraftApiGroupResponse;
const DescribeConfigSummaryRequest = models.DescribeConfigSummaryRequest;
const DeleteLaneRequest = models.DeleteLaneRequest;
const TsfPageApiGroupInfo = models.TsfPageApiGroupInfo;
const ReleasePublicConfigRequest = models.ReleasePublicConfigRequest;
const TaskFlowEdge = models.TaskFlowEdge;
const RedoTaskFlowBatchResponse = models.RedoTaskFlowBatchResponse;
const LaneGroup = models.LaneGroup;
const CreateGroupResponse = models.CreateGroupResponse;


/**
 * tsf client
 * @class
 */
class TsfClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tsf.tencentcloudapi.com", "2018-03-26", credential, region, profile);
    }
    
    /**
     * 创建任务
     * @param {CreateTaskRequest} req
     * @param {function(string, CreateTaskResponse):void} cb
     * @public
     */
    CreateTask(req, cb) {
        let resp = new CreateTaskResponse();
        this.request("CreateTask", req, resp, cb);
    }

    /**
     * 删除公共配置项
     * @param {DeletePublicConfigRequest} req
     * @param {function(string, DeletePublicConfigResponse):void} cb
     * @public
     */
    DeletePublicConfig(req, cb) {
        let resp = new DeletePublicConfigResponse();
        this.request("DeletePublicConfig", req, resp, cb);
    }

    /**
     * 查询配置
     * @param {DescribeConfigRequest} req
     * @param {function(string, DescribeConfigResponse):void} cb
     * @public
     */
    DescribeConfig(req, cb) {
        let resp = new DescribeConfigResponse();
        this.request("DescribeConfig", req, resp, cb);
    }

    /**
     * 对执行失败的任务批次执行续跑
     * @param {ContinueRunFailedTaskBatchRequest} req
     * @param {function(string, ContinueRunFailedTaskBatchResponse):void} cb
     * @public
     */
    ContinueRunFailedTaskBatch(req, cb) {
        let resp = new ContinueRunFailedTaskBatchResponse();
        this.request("ContinueRunFailedTaskBatch", req, resp, cb);
    }

    /**
     * 修改容器部署组实例数
     * @param {ModifyContainerReplicasRequest} req
     * @param {function(string, ModifyContainerReplicasResponse):void} cb
     * @public
     */
    ModifyContainerReplicas(req, cb) {
        let resp = new ModifyContainerReplicasResponse();
        this.request("ModifyContainerReplicas", req, resp, cb);
    }

    /**
     * 虚拟机部署组下线实例
     * @param {ShrinkInstancesRequest} req
     * @param {function(string, ShrinkInstancesResponse):void} cb
     * @public
     */
    ShrinkInstances(req, cb) {
        let resp = new ShrinkInstancesResponse();
        this.request("ShrinkInstances", req, resp, cb);
    }

    /**
     * 启用工作流
     * @param {EnableTaskFlowRequest} req
     * @param {function(string, EnableTaskFlowResponse):void} cb
     * @public
     */
    EnableTaskFlow(req, cb) {
        let resp = new EnableTaskFlowResponse();
        this.request("EnableTaskFlow", req, resp, cb);
    }

    /**
     * 获取部署组实例列表
     * @param {DescribePodInstancesRequest} req
     * @param {function(string, DescribePodInstancesResponse):void} cb
     * @public
     */
    DescribePodInstances(req, cb) {
        let resp = new DescribePodInstancesResponse();
        this.request("DescribePodInstances", req, resp, cb);
    }

    /**
     * 查询可用于被导入的命名空间列表
     * @param {DescribeUsableUnitNamespacesRequest} req
     * @param {function(string, DescribeUsableUnitNamespacesResponse):void} cb
     * @public
     */
    DescribeUsableUnitNamespaces(req, cb) {
        let resp = new DescribeUsableUnitNamespacesResponse();
        this.request("DescribeUsableUnitNamespaces", req, resp, cb);
    }

    /**
     * 创建命名空间
     * @param {CreateNamespaceRequest} req
     * @param {function(string, CreateNamespaceResponse):void} cb
     * @public
     */
    CreateNamespace(req, cb) {
        let resp = new CreateNamespaceResponse();
        this.request("CreateNamespace", req, resp, cb);
    }

    /**
     * 添加云主机节点至TSF集群
     * @param {AddClusterInstancesRequest} req
     * @param {function(string, AddClusterInstancesResponse):void} cb
     * @public
     */
    AddClusterInstances(req, cb) {
        let resp = new AddClusterInstancesResponse();
        this.request("AddClusterInstances", req, resp, cb);
    }

    /**
     * 重新执行工作流批次
     * @param {RedoTaskFlowBatchRequest} req
     * @param {function(string, RedoTaskFlowBatchResponse):void} cb
     * @public
     */
    RedoTaskFlowBatch(req, cb) {
        let resp = new RedoTaskFlowBatchResponse();
        this.request("RedoTaskFlowBatch", req, resp, cb);
    }

    /**
     * 查询公共配置汇总列表
     * @param {DescribePublicConfigSummaryRequest} req
     * @param {function(string, DescribePublicConfigSummaryResponse):void} cb
     * @public
     */
    DescribePublicConfigSummary(req, cb) {
        let resp = new DescribePublicConfigSummaryResponse();
        this.request("DescribePublicConfigSummary", req, resp, cb);
    }

    /**
     * 容器部署组列表
     * @param {DescribeContainerGroupsRequest} req
     * @param {function(string, DescribeContainerGroupsResponse):void} cb
     * @public
     */
    DescribeContainerGroups(req, cb) {
        let resp = new DescribeContainerGroupsResponse();
        this.request("DescribeContainerGroups", req, resp, cb);
    }

    /**
     * 查询配置项列表
     * @param {DescribeConfigsRequest} req
     * @param {function(string, DescribeConfigsResponse):void} cb
     * @public
     */
    DescribeConfigs(req, cb) {
        let resp = new DescribeConfigsResponse();
        this.request("DescribeConfigs", req, resp, cb);
    }

    /**
     * 停用任务
     * @param {DisableTaskRequest} req
     * @param {function(string, DisableTaskResponse):void} cb
     * @public
     */
    DisableTask(req, cb) {
        let resp = new DisableTaskResponse();
        this.request("DisableTask", req, resp, cb);
    }

    /**
     * 查询服务API列表
     * @param {DescribeMsApiListRequest} req
     * @param {function(string, DescribeMsApiListResponse):void} cb
     * @public
     */
    DescribeMsApiList(req, cb) {
        let resp = new DescribeMsApiListResponse();
        this.request("DescribeMsApiList", req, resp, cb);
    }

    /**
     * 撤回已发布的公共配置
     * @param {RevocationPublicConfigRequest} req
     * @param {function(string, RevocationPublicConfigResponse):void} cb
     * @public
     */
    RevocationPublicConfig(req, cb) {
        let resp = new RevocationPublicConfigResponse();
        this.request("RevocationPublicConfig", req, resp, cb);
    }

    /**
     * 创建集群
     * @param {CreateClusterRequest} req
     * @param {function(string, CreateClusterResponse):void} cb
     * @public
     */
    CreateCluster(req, cb) {
        let resp = new CreateClusterResponse();
        this.request("CreateCluster", req, resp, cb);
    }

    /**
     * 停止正在某个节点上执行的任务
     * @param {StopTaskExecuteRequest} req
     * @param {function(string, StopTaskExecuteResponse):void} cb
     * @public
     */
    StopTaskExecute(req, cb) {
        let resp = new StopTaskExecuteResponse();
        this.request("StopTaskExecute", req, resp, cb);
    }

    /**
     * 查询任务详情
     * @param {DescribeTaskDetailRequest} req
     * @param {function(string, DescribeTaskDetailResponse):void} cb
     * @public
     */
    DescribeTaskDetail(req, cb) {
        let resp = new DescribeTaskDetailResponse();
        this.request("DescribeTaskDetail", req, resp, cb);
    }

    /**
     *  容器部署组详情
     * @param {DescribeContainerGroupDetailRequest} req
     * @param {function(string, DescribeContainerGroupDetailResponse):void} cb
     * @public
     */
    DescribeContainerGroupDetail(req, cb) {
        let resp = new DescribeContainerGroupDetailResponse();
        this.request("DescribeContainerGroupDetail", req, resp, cb);
    }

    /**
     * 启用单元化规则
     * @param {EnableUnitRuleRequest} req
     * @param {function(string, EnableUnitRuleResponse):void} cb
     * @public
     */
    EnableUnitRule(req, cb) {
        let resp = new EnableUnitRuleResponse();
        this.request("EnableUnitRule", req, resp, cb);
    }

    /**
     * 回滚配置
     * @param {RollbackConfigRequest} req
     * @param {function(string, RollbackConfigResponse):void} cb
     * @public
     */
    RollbackConfig(req, cb) {
        let resp = new RollbackConfigResponse();
        this.request("RollbackConfig", req, resp, cb);
    }

    /**
     * 镜像版本列表
     * @param {DescribeImageTagsRequest} req
     * @param {function(string, DescribeImageTagsResponse):void} cb
     * @public
     */
    DescribeImageTags(req, cb) {
        let resp = new DescribeImageTagsResponse();
        this.request("DescribeImageTags", req, resp, cb);
    }

    /**
     * 调用该接口和COS的上传接口后，需要调用此接口更新TSF中保存的程序包状态。
调用此接口完成后，才标志上传包流程结束。
     * @param {ModifyUploadInfoRequest} req
     * @param {function(string, ModifyUploadInfoResponse):void} cb
     * @public
     */
    ModifyUploadInfo(req, cb) {
        let resp = new ModifyUploadInfoResponse();
        this.request("ModifyUploadInfo", req, resp, cb);
    }

    /**
     * 查询简单集群列表
     * @param {DescribeSimpleClustersRequest} req
     * @param {function(string, DescribeSimpleClustersResponse):void} cb
     * @public
     */
    DescribeSimpleClusters(req, cb) {
        let resp = new DescribeSimpleClustersResponse();
        this.request("DescribeSimpleClusters", req, resp, cb);
    }

    /**
     * 查询API详情
     * @param {DescribeApiDetailRequest} req
     * @param {function(string, DescribeApiDetailResponse):void} cb
     * @public
     */
    DescribeApiDetail(req, cb) {
        let resp = new DescribeApiDetailResponse();
        this.request("DescribeApiDetail", req, resp, cb);
    }

    /**
     * 查询某个插件下绑定或未绑定的API分组
     * @param {DescribeGroupsWithPluginRequest} req
     * @param {function(string, DescribeGroupsWithPluginResponse):void} cb
     * @public
     */
    DescribeGroupsWithPlugin(req, cb) {
        let resp = new DescribeGroupsWithPluginResponse();
        this.request("DescribeGroupsWithPlugin", req, resp, cb);
    }

    /**
     * 禁用单元化路由
     * @param {DisableUnitRouteRequest} req
     * @param {function(string, DisableUnitRouteResponse):void} cb
     * @public
     */
    DisableUnitRoute(req, cb) {
        let resp = new DisableUnitRouteResponse();
        this.request("DisableUnitRoute", req, resp, cb);
    }

    /**
     * 部署Serverless应用
     * @param {DeployServerlessGroupRequest} req
     * @param {function(string, DeployServerlessGroupResponse):void} cb
     * @public
     */
    DeployServerlessGroup(req, cb) {
        let resp = new DeployServerlessGroupResponse();
        this.request("DeployServerlessGroup", req, resp, cb);
    }

    /**
     * 创建配置项
     * @param {CreateConfigRequest} req
     * @param {function(string, CreateConfigResponse):void} cb
     * @public
     */
    CreateConfig(req, cb) {
        let resp = new CreateConfigResponse();
        this.request("CreateConfig", req, resp, cb);
    }

    /**
     * 新增微服务
     * @param {CreateMicroserviceRequest} req
     * @param {function(string, CreateMicroserviceResponse):void} cb
     * @public
     */
    CreateMicroservice(req, cb) {
        let resp = new CreateMicroserviceResponse();
        this.request("CreateMicroservice", req, resp, cb);
    }

    /**
     * 批量删除镜像版本
     * @param {DeleteImageTagsRequest} req
     * @param {function(string, DeleteImageTagsResponse):void} cb
     * @public
     */
    DeleteImageTags(req, cb) {
        let resp = new DeleteImageTagsResponse();
        this.request("DeleteImageTags", req, resp, cb);
    }

    /**
     * TSF上传的程序包存放在腾讯云对象存储（COS）中，通过该API可以获取从COS下载程序包需要的信息，包括包所在的桶、存储路径、鉴权信息等，之后使用COS API（或SDK）进行下载。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     * @param {DescribeDownloadInfoRequest} req
     * @param {function(string, DescribeDownloadInfoResponse):void} cb
     * @public
     */
    DescribeDownloadInfo(req, cb) {
        let resp = new DescribeDownloadInfoResponse();
        this.request("DescribeDownloadInfo", req, resp, cb);
    }

    /**
     * 获取应用列表
     * @param {DescribeApplicationsRequest} req
     * @param {function(string, DescribeApplicationsResponse):void} cb
     * @public
     */
    DescribeApplications(req, cb) {
        let resp = new DescribeApplicationsResponse();
        this.request("DescribeApplications", req, resp, cb);
    }

    /**
     * 查询网关API监控明细数据（仅单元化网关），非单元化网关使用DescribeApiUseDetail
     * @param {DescribeUnitApiUseDetailRequest} req
     * @param {function(string, DescribeUnitApiUseDetailResponse):void} cb
     * @public
     */
    DescribeUnitApiUseDetail(req, cb) {
        let resp = new DescribeUnitApiUseDetailResponse();
        this.request("DescribeUnitApiUseDetail", req, resp, cb);
    }

    /**
     * 插件与网关分组/API批量绑定
     * @param {BindPluginRequest} req
     * @param {function(string, BindPluginResponse):void} cb
     * @public
     */
    BindPlugin(req, cb) {
        let resp = new BindPluginResponse();
        this.request("BindPlugin", req, resp, cb);
    }

    /**
     * 查询某个API分组已绑定的网关部署组信息列表
     * @param {DescribeGroupBindedGatewaysRequest} req
     * @param {function(string, DescribeGroupBindedGatewaysResponse):void} cb
     * @public
     */
    DescribeGroupBindedGateways(req, cb) {
        let resp = new DescribeGroupBindedGatewaysResponse();
        this.request("DescribeGroupBindedGateways", req, resp, cb);
    }

    /**
     * 删除单元化规则
     * @param {DeleteUnitRuleRequest} req
     * @param {function(string, DeleteUnitRuleResponse):void} cb
     * @public
     */
    DeleteUnitRule(req, cb) {
        let resp = new DeleteUnitRuleResponse();
        this.request("DeleteUnitRule", req, resp, cb);
    }

    /**
     * 获取应用详情
     * @param {DescribeApplicationRequest} req
     * @param {function(string, DescribeApplicationResponse):void} cb
     * @public
     */
    DescribeApplication(req, cb) {
        let resp = new DescribeApplicationResponse();
        this.request("DescribeApplication", req, resp, cb);
    }

    /**
     * 更新单元化规则
     * @param {UpdateUnitRuleRequest} req
     * @param {function(string, UpdateUnitRuleResponse):void} cb
     * @public
     */
    UpdateUnitRule(req, cb) {
        let resp = new UpdateUnitRuleResponse();
        this.request("UpdateUnitRule", req, resp, cb);
    }

    /**
     * 创建单元化规则
     * @param {CreateUnitRuleRequest} req
     * @param {function(string, CreateUnitRuleResponse):void} cb
     * @public
     */
    CreateUnitRule(req, cb) {
        let resp = new CreateUnitRuleResponse();
        this.request("CreateUnitRule", req, resp, cb);
    }

    /**
     * 查询Serverless部署组列表
     * @param {DescribeServerlessGroupsRequest} req
     * @param {function(string, DescribeServerlessGroupsResponse):void} cb
     * @public
     */
    DescribeServerlessGroups(req, cb) {
        let resp = new DescribeServerlessGroupsResponse();
        this.request("DescribeServerlessGroups", req, resp, cb);
    }

    /**
     * 查询网关分组监控明细数据
     * @param {DescribeGroupUseDetailRequest} req
     * @param {function(string, DescribeGroupUseDetailResponse):void} cb
     * @public
     */
    DescribeGroupUseDetail(req, cb) {
        let resp = new DescribeGroupUseDetailResponse();
        this.request("DescribeGroupUseDetail", req, resp, cb);
    }

    /**
     * 查询公共配置（单条）
     * @param {DescribePublicConfigRequest} req
     * @param {function(string, DescribePublicConfigResponse):void} cb
     * @public
     */
    DescribePublicConfig(req, cb) {
        let resp = new DescribePublicConfigResponse();
        this.request("DescribePublicConfig", req, resp, cb);
    }

    /**
     * 更新仓库信息
     * @param {UpdateRepositoryRequest} req
     * @param {function(string, UpdateRepositoryResponse):void} cb
     * @public
     */
    UpdateRepository(req, cb) {
        let resp = new UpdateRepositoryResponse();
        this.request("UpdateRepository", req, resp, cb);
    }

    /**
     * 批量更新API超时
     * @param {UpdateApiTimeoutsRequest} req
     * @param {function(string, UpdateApiTimeoutsResponse):void} cb
     * @public
     */
    UpdateApiTimeouts(req, cb) {
        let resp = new UpdateApiTimeoutsResponse();
        this.request("UpdateApiTimeouts", req, resp, cb);
    }

    /**
     * 查询泳道列表
     * @param {DescribeLanesRequest} req
     * @param {function(string, DescribeLanesResponse):void} cb
     * @public
     */
    DescribeLanes(req, cb) {
        let resp = new DescribeLanesResponse();
        this.request("DescribeLanes", req, resp, cb);
    }

    /**
     * 更新健康检查配置
     * @param {UpdateHealthCheckSettingsRequest} req
     * @param {function(string, UpdateHealthCheckSettingsResponse):void} cb
     * @public
     */
    UpdateHealthCheckSettings(req, cb) {
        let resp = new UpdateHealthCheckSettingsResponse();
        this.request("UpdateHealthCheckSettings", req, resp, cb);
    }

    /**
     * 翻页查询任务列表
     * @param {DescribeTaskRecordsRequest} req
     * @param {function(string, DescribeTaskRecordsResponse):void} cb
     * @public
     */
    DescribeTaskRecords(req, cb) {
        let resp = new DescribeTaskRecordsResponse();
        this.request("DescribeTaskRecords", req, resp, cb);
    }

    /**
     * 手动执行一次任务。
     * @param {ExecuteTaskRequest} req
     * @param {function(string, ExecuteTaskResponse):void} cb
     * @public
     */
    ExecuteTask(req, cb) {
        let resp = new ExecuteTaskResponse();
        this.request("ExecuteTask", req, resp, cb);
    }

    /**
     * 批量导入API至api分组(也支持新建API到分组)
     * @param {CreateGatewayApiRequest} req
     * @param {function(string, CreateGatewayApiResponse):void} cb
     * @public
     */
    CreateGatewayApi(req, cb) {
        let resp = new CreateGatewayApiResponse();
        this.request("CreateGatewayApi", req, resp, cb);
    }

    /**
     * 查询简单命名空间列表 
     * @param {DescribeSimpleNamespacesRequest} req
     * @param {function(string, DescribeSimpleNamespacesResponse):void} cb
     * @public
     */
    DescribeSimpleNamespaces(req, cb) {
        let resp = new DescribeSimpleNamespacesResponse();
        this.request("DescribeSimpleNamespaces", req, resp, cb);
    }

    /**
     * 创建API限流规则
     * @param {CreateApiRateLimitRuleRequest} req
     * @param {function(string, CreateApiRateLimitRuleResponse):void} cb
     * @public
     */
    CreateApiRateLimitRule(req, cb) {
        let resp = new CreateApiRateLimitRuleResponse();
        this.request("CreateApiRateLimitRule", req, resp, cb);
    }

    /**
     * 创建Serverless部署组
     * @param {CreateServerlessGroupRequest} req
     * @param {function(string, CreateServerlessGroupResponse):void} cb
     * @public
     */
    CreateServerlessGroup(req, cb) {
        let resp = new CreateServerlessGroupResponse();
        this.request("CreateServerlessGroup", req, resp, cb);
    }

    /**
     * 停止容器部署组
     * @param {StopContainerGroupRequest} req
     * @param {function(string, StopContainerGroupResponse):void} cb
     * @public
     */
    StopContainerGroup(req, cb) {
        let resp = new StopContainerGroupResponse();
        this.request("StopContainerGroup", req, resp, cb);
    }

    /**
     * 查询一键导入API分组任务的状态
     * @param {DescribeCreateGatewayApiStatusRequest} req
     * @param {function(string, DescribeCreateGatewayApiStatusResponse):void} cb
     * @public
     */
    DescribeCreateGatewayApiStatus(req, cb) {
        let resp = new DescribeCreateGatewayApiStatusResponse();
        this.request("DescribeCreateGatewayApiStatus", req, resp, cb);
    }

    /**
     * 修改任务
     * @param {ModifyTaskRequest} req
     * @param {function(string, ModifyTaskResponse):void} cb
     * @public
     */
    ModifyTask(req, cb) {
        let resp = new ModifyTaskResponse();
        this.request("ModifyTask", req, resp, cb);
    }

    /**
     * 更新API限流规则
     * @param {UpdateApiRateLimitRuleRequest} req
     * @param {function(string, UpdateApiRateLimitRuleResponse):void} cb
     * @public
     */
    UpdateApiRateLimitRule(req, cb) {
        let resp = new UpdateApiRateLimitRuleResponse();
        this.request("UpdateApiRateLimitRule", req, resp, cb);
    }

    /**
     * 分页查询网关分组/API绑定（或未绑定）的插件列表
     * @param {DescribePluginInstancesRequest} req
     * @param {function(string, DescribePluginInstancesResponse):void} cb
     * @public
     */
    DescribePluginInstances(req, cb) {
        let resp = new DescribePluginInstancesResponse();
        this.request("DescribePluginInstances", req, resp, cb);
    }

    /**
     * API分组批量与网关解绑
     * @param {UnbindApiGroupRequest} req
     * @param {function(string, UnbindApiGroupResponse):void} cb
     * @public
     */
    UnbindApiGroup(req, cb) {
        let resp = new UnbindApiGroupResponse();
        this.request("UnbindApiGroup", req, resp, cb);
    }

    /**
     * 创建泳道规则
     * @param {CreateLaneRuleRequest} req
     * @param {function(string, CreateLaneRuleResponse):void} cb
     * @public
     */
    CreateLaneRule(req, cb) {
        let resp = new CreateLaneRuleResponse();
        this.request("CreateLaneRule", req, resp, cb);
    }

    /**
     * 删除容器部署组
     * @param {DeleteContainerGroupRequest} req
     * @param {function(string, DeleteContainerGroupResponse):void} cb
     * @public
     */
    DeleteContainerGroup(req, cb) {
        let resp = new DeleteContainerGroupResponse();
        this.request("DeleteContainerGroup", req, resp, cb);
    }

    /**
     * 查询API 分组信息列表
     * @param {DescribeApiGroupsRequest} req
     * @param {function(string, DescribeApiGroupsResponse):void} cb
     * @public
     */
    DescribeApiGroups(req, cb) {
        let resp = new DescribeApiGroupsResponse();
        this.request("DescribeApiGroups", req, resp, cb);
    }

    /**
     * 发布配置
     * @param {ReleaseConfigRequest} req
     * @param {function(string, ReleaseConfigResponse):void} cb
     * @public
     */
    ReleaseConfig(req, cb) {
        let resp = new ReleaseConfigResponse();
        this.request("ReleaseConfig", req, resp, cb);
    }

    /**
     * 停止一个工作流批次
     * @param {TerminateTaskFlowBatchRequest} req
     * @param {function(string, TerminateTaskFlowBatchResponse):void} cb
     * @public
     */
    TerminateTaskFlowBatch(req, cb) {
        let resp = new TerminateTaskFlowBatchResponse();
        this.request("TerminateTaskFlowBatch", req, resp, cb);
    }

    /**
     * 批量更新API限流规则
     * @param {UpdateApiRateLimitRulesRequest} req
     * @param {function(string, UpdateApiRateLimitRulesResponse):void} cb
     * @public
     */
    UpdateApiRateLimitRules(req, cb) {
        let resp = new UpdateApiRateLimitRulesResponse();
        this.request("UpdateApiRateLimitRules", req, resp, cb);
    }

    /**
     * 获取虚拟机部署组列表
     * @param {DescribeGroupsRequest} req
     * @param {function(string, DescribeGroupsResponse):void} cb
     * @public
     */
    DescribeGroups(req, cb) {
        let resp = new DescribeGroupsResponse();
        this.request("DescribeGroups", req, resp, cb);
    }

    /**
     * 镜像仓库列表 
     * @param {DescribeImageRepositoryRequest} req
     * @param {function(string, DescribeImageRepositoryResponse):void} cb
     * @public
     */
    DescribeImageRepository(req, cb) {
        let resp = new DescribeImageRepositoryResponse();
        this.request("DescribeImageRepository", req, resp, cb);
    }

    /**
     * 查询仓库列表
     * @param {DescribeRepositoriesRequest} req
     * @param {function(string, DescribeRepositoriesResponse):void} cb
     * @public
     */
    DescribeRepositories(req, cb) {
        let resp = new DescribeRepositoriesResponse();
        this.request("DescribeRepositories", req, resp, cb);
    }

    /**
     * 停用工作流
     * @param {DisableTaskFlowRequest} req
     * @param {function(string, DisableTaskFlowResponse):void} cb
     * @public
     */
    DisableTaskFlow(req, cb) {
        let resp = new DisableTaskFlowResponse();
        this.request("DisableTaskFlow", req, resp, cb);
    }

    /**
     * 一键导入API分组
     * @param {CreateAllGatewayApiAsyncRequest} req
     * @param {function(string, CreateAllGatewayApiAsyncResponse):void} cb
     * @public
     */
    CreateAllGatewayApiAsync(req, cb) {
        let resp = new CreateAllGatewayApiAsyncResponse();
        this.request("CreateAllGatewayApiAsync", req, resp, cb);
    }

    /**
     * 创建仓库
     * @param {CreateRepositoryRequest} req
     * @param {function(string, CreateRepositoryResponse):void} cb
     * @public
     */
    CreateRepository(req, cb) {
        let resp = new CreateRepositoryResponse();
        this.request("CreateRepository", req, resp, cb);
    }

    /**
     * 查询集群实例
     * @param {DescribeClusterInstancesRequest} req
     * @param {function(string, DescribeClusterInstancesResponse):void} cb
     * @public
     */
    DescribeClusterInstances(req, cb) {
        let resp = new DescribeClusterInstancesResponse();
        this.request("DescribeClusterInstances", req, resp, cb);
    }

    /**
     * 创建公共配置项
     * @param {CreatePublicConfigRequest} req
     * @param {function(string, CreatePublicConfigResponse):void} cb
     * @public
     */
    CreatePublicConfig(req, cb) {
        let resp = new CreatePublicConfigResponse();
        this.request("CreatePublicConfig", req, resp, cb);
    }

    /**
     * 网关与API分组批量绑定
     * @param {BindApiGroupRequest} req
     * @param {function(string, BindApiGroupResponse):void} cb
     * @public
     */
    BindApiGroup(req, cb) {
        let resp = new BindApiGroupResponse();
        this.request("BindApiGroup", req, resp, cb);
    }

    /**
     * 查询简单部署组列表
     * @param {DescribeSimpleGroupsRequest} req
     * @param {function(string, DescribeSimpleGroupsResponse):void} cb
     * @public
     */
    DescribeSimpleGroups(req, cb) {
        let resp = new DescribeSimpleGroupsResponse();
        this.request("DescribeSimpleGroups", req, resp, cb);
    }

    /**
     * 查询某个网关绑定的API 分组信息列表
     * @param {DescribeGroupGatewaysRequest} req
     * @param {function(string, DescribeGroupGatewaysResponse):void} cb
     * @public
     */
    DescribeGroupGateways(req, cb) {
        let resp = new DescribeGroupGatewaysResponse();
        this.request("DescribeGroupGateways", req, resp, cb);
    }

    /**
     * 查询单元化命名空间列表
     * @param {DescribeUnitNamespacesRequest} req
     * @param {function(string, DescribeUnitNamespacesResponse):void} cb
     * @public
     */
    DescribeUnitNamespaces(req, cb) {
        let resp = new DescribeUnitNamespacesResponse();
        this.request("DescribeUnitNamespaces", req, resp, cb);
    }

    /**
     * 添加云主机节点至TSF集群
     * @param {AddInstancesRequest} req
     * @param {function(string, AddInstancesResponse):void} cb
     * @public
     */
    AddInstances(req, cb) {
        let resp = new AddInstancesResponse();
        this.request("AddInstances", req, resp, cb);
    }

    /**
     * 查询配置汇总列表
     * @param {DescribeConfigSummaryRequest} req
     * @param {function(string, DescribeConfigSummaryResponse):void} cb
     * @public
     */
    DescribeConfigSummary(req, cb) {
        let resp = new DescribeConfigSummaryResponse();
        this.request("DescribeConfigSummary", req, resp, cb);
    }

    /**
     * 禁用单元化规则
     * @param {DisableUnitRuleRequest} req
     * @param {function(string, DisableUnitRuleResponse):void} cb
     * @public
     */
    DisableUnitRule(req, cb) {
        let resp = new DisableUnitRuleResponse();
        this.request("DisableUnitRule", req, resp, cb);
    }

    /**
     * 重新执行任务
     * @param {RedoTaskRequest} req
     * @param {function(string, RedoTaskResponse):void} cb
     * @public
     */
    RedoTask(req, cb) {
        let resp = new RedoTaskResponse();
        this.request("RedoTask", req, resp, cb);
    }

    /**
     * 无
     * @param {DescribePkgsRequest} req
     * @param {function(string, DescribePkgsResponse):void} cb
     * @public
     */
    DescribePkgs(req, cb) {
        let resp = new DescribePkgsResponse();
        this.request("DescribePkgs", req, resp, cb);
    }

    /**
     * 创建API分组
     * @param {CreateApiGroupRequest} req
     * @param {function(string, CreateApiGroupResponse):void} cb
     * @public
     */
    CreateApiGroup(req, cb) {
        let resp = new CreateApiGroupResponse();
        this.request("CreateApiGroup", req, resp, cb);
    }

    /**
     * 查询简单应用列表
     * @param {DescribeSimpleApplicationsRequest} req
     * @param {function(string, DescribeSimpleApplicationsResponse):void} cb
     * @public
     */
    DescribeSimpleApplications(req, cb) {
        let resp = new DescribeSimpleApplicationsResponse();
        this.request("DescribeSimpleApplications", req, resp, cb);
    }

    /**
     * 查询API分组
     * @param {DescribeApiGroupRequest} req
     * @param {function(string, DescribeApiGroupResponse):void} cb
     * @public
     */
    DescribeApiGroup(req, cb) {
        let resp = new DescribeApiGroupResponse();
        this.request("DescribeApiGroup", req, resp, cb);
    }

    /**
     * 发布Api分组
     * @param {ReleaseApiGroupRequest} req
     * @param {function(string, ReleaseApiGroupResponse):void} cb
     * @public
     */
    ReleaseApiGroup(req, cb) {
        let resp = new ReleaseApiGroupResponse();
        this.request("ReleaseApiGroup", req, resp, cb);
    }

    /**
     * 删除路径重写
     * @param {DeletePathRewritesRequest} req
     * @param {function(string, DeletePathRewritesResponse):void} cb
     * @public
     */
    DeletePathRewrites(req, cb) {
        let resp = new DeletePathRewritesResponse();
        this.request("DeletePathRewrites", req, resp, cb);
    }

    /**
     * 创建虚拟机部署组
     * @param {CreateGroupRequest} req
     * @param {function(string, CreateGroupResponse):void} cb
     * @public
     */
    CreateGroup(req, cb) {
        let resp = new CreateGroupResponse();
        this.request("CreateGroup", req, resp, cb);
    }

    /**
     * 查询任务最近一次执行状态
     * @param {DescribeTaskLastStatusRequest} req
     * @param {function(string, DescribeTaskLastStatusResponse):void} cb
     * @public
     */
    DescribeTaskLastStatus(req, cb) {
        let resp = new DescribeTaskLastStatusResponse();
        this.request("DescribeTaskLastStatus", req, resp, cb);
    }

    /**
     * 查询虚拟机部署组云主机列表
     * @param {DescribeGroupInstancesRequest} req
     * @param {function(string, DescribeGroupInstancesResponse):void} cb
     * @public
     */
    DescribeGroupInstances(req, cb) {
        let resp = new DescribeGroupInstancesResponse();
        this.request("DescribeGroupInstances", req, resp, cb);
    }

    /**
     * 删除仓库
     * @param {DeleteRepositoryRequest} req
     * @param {function(string, DeleteRepositoryResponse):void} cb
     * @public
     */
    DeleteRepository(req, cb) {
        let resp = new DeleteRepositoryResponse();
        this.request("DeleteRepository", req, resp, cb);
    }

    /**
     * 从软件仓库批量删除程序包。
一次最多支持删除1000个包，数量超过1000，返回UpperDeleteLimit错误。
     * @param {DeletePkgsRequest} req
     * @param {function(string, DeletePkgsResponse):void} cb
     * @public
     */
    DeletePkgs(req, cb) {
        let resp = new DeletePkgsResponse();
        this.request("DeletePkgs", req, resp, cb);
    }

    /**
     * 查询公共配置项列表
     * @param {DescribePublicConfigsRequest} req
     * @param {function(string, DescribePublicConfigsResponse):void} cb
     * @public
     */
    DescribePublicConfigs(req, cb) {
        let resp = new DescribePublicConfigsResponse();
        this.request("DescribePublicConfigs", req, resp, cb);
    }

    /**
     * 查询路径重写
     * @param {DescribePathRewriteRequest} req
     * @param {function(string, DescribePathRewriteResponse):void} cb
     * @public
     */
    DescribePathRewrite(req, cb) {
        let resp = new DescribePathRewriteResponse();
        this.request("DescribePathRewrite", req, resp, cb);
    }

    /**
     * 启用任务
     * @param {EnableTaskRequest} req
     * @param {function(string, EnableTaskResponse):void} cb
     * @public
     */
    EnableTask(req, cb) {
        let resp = new EnableTaskResponse();
        this.request("EnableTask", req, resp, cb);
    }

    /**
     * 删除容器部署组
     * @param {DeleteGroupRequest} req
     * @param {function(string, DeleteGroupResponse):void} cb
     * @public
     */
    DeleteGroup(req, cb) {
        let resp = new DeleteGroupResponse();
        this.request("DeleteGroup", req, resp, cb);
    }

    /**
     * 从 TSF 集群中批量移除云主机节点
     * @param {RemoveInstancesRequest} req
     * @param {function(string, RemoveInstancesResponse):void} cb
     * @public
     */
    RemoveInstances(req, cb) {
        let resp = new RemoveInstancesResponse();
        this.request("RemoveInstances", req, resp, cb);
    }

    /**
     * 虚拟机部署组添加实例
     * @param {ExpandGroupRequest} req
     * @param {function(string, ExpandGroupResponse):void} cb
     * @public
     */
    ExpandGroup(req, cb) {
        let resp = new ExpandGroupResponse();
        this.request("ExpandGroup", req, resp, cb);
    }

    /**
     * 删除任务
     * @param {DeleteTaskRequest} req
     * @param {function(string, DeleteTaskResponse):void} cb
     * @public
     */
    DeleteTask(req, cb) {
        let resp = new DeleteTaskResponse();
        this.request("DeleteTask", req, resp, cb);
    }

    /**
     * 查询路径重写列表
     * @param {DescribePathRewritesRequest} req
     * @param {function(string, DescribePathRewritesResponse):void} cb
     * @public
     */
    DescribePathRewrites(req, cb) {
        let resp = new DescribePathRewritesResponse();
        this.request("DescribePathRewrites", req, resp, cb);
    }

    /**
     * 删除泳道
     * @param {DeleteLaneRequest} req
     * @param {function(string, DeleteLaneResponse):void} cb
     * @public
     */
    DeleteLane(req, cb) {
        let resp = new DeleteLaneResponse();
        this.request("DeleteLane", req, resp, cb);
    }

    /**
     * 查询配置发布信息
     * @param {DescribeConfigReleasesRequest} req
     * @param {function(string, DescribeConfigReleasesResponse):void} cb
     * @public
     */
    DescribeConfigReleases(req, cb) {
        let resp = new DescribeConfigReleasesResponse();
        this.request("DescribeConfigReleases", req, resp, cb);
    }

    /**
     * 创建泳道
     * @param {CreateLaneRequest} req
     * @param {function(string, CreateLaneResponse):void} cb
     * @public
     */
    CreateLane(req, cb) {
        let resp = new CreateLaneResponse();
        this.request("CreateLane", req, resp, cb);
    }

    /**
     * 停止虚拟机部署组
     * @param {StopGroupRequest} req
     * @param {function(string, StopGroupResponse):void} cb
     * @public
     */
    StopGroup(req, cb) {
        let resp = new StopGroupResponse();
        this.request("StopGroup", req, resp, cb);
    }

    /**
     * 查询网关监控概览
     * @param {DescribeGatewayMonitorOverviewRequest} req
     * @param {function(string, DescribeGatewayMonitorOverviewResponse):void} cb
     * @public
     */
    DescribeGatewayMonitorOverview(req, cb) {
        let resp = new DescribeGatewayMonitorOverviewResponse();
        this.request("DescribeGatewayMonitorOverview", req, resp, cb);
    }

    /**
     * 部署虚拟机部署组应用
     * @param {DeployGroupRequest} req
     * @param {function(string, DeployGroupResponse):void} cb
     * @public
     */
    DeployGroup(req, cb) {
        let resp = new DeployGroupResponse();
        this.request("DeployGroup", req, resp, cb);
    }

    /**
     * 更新Api分组
     * @param {UpdateApiGroupRequest} req
     * @param {function(string, UpdateApiGroupResponse):void} cb
     * @public
     */
    UpdateApiGroup(req, cb) {
        let resp = new UpdateApiGroupResponse();
        this.request("UpdateApiGroup", req, resp, cb);
    }

    /**
     * 更新泳道信息
     * @param {ModifyLaneRequest} req
     * @param {function(string, ModifyLaneResponse):void} cb
     * @public
     */
    ModifyLane(req, cb) {
        let resp = new ModifyLaneResponse();
        this.request("ModifyLane", req, resp, cb);
    }

    /**
     * 修改微服务详情
     * @param {ModifyMicroserviceRequest} req
     * @param {function(string, ModifyMicroserviceResponse):void} cb
     * @public
     */
    ModifyMicroservice(req, cb) {
        let resp = new ModifyMicroserviceResponse();
        this.request("ModifyMicroservice", req, resp, cb);
    }

    /**
     * 删除命名空间
     * @param {DeleteNamespaceRequest} req
     * @param {function(string, DeleteNamespaceResponse):void} cb
     * @public
     */
    DeleteNamespace(req, cb) {
        let resp = new DeleteNamespaceResponse();
        this.request("DeleteNamespace", req, resp, cb);
    }

    /**
     * 查询单元化规则详情
     * @param {DescribeUnitRuleRequest} req
     * @param {function(string, DescribeUnitRuleResponse):void} cb
     * @public
     */
    DescribeUnitRule(req, cb) {
        let resp = new DescribeUnitRuleResponse();
        this.request("DescribeUnitRule", req, resp, cb);
    }

    /**
     * 创建路径重写
     * @param {CreatePathRewritesRequest} req
     * @param {function(string, CreatePathRewritesResponse):void} cb
     * @public
     */
    CreatePathRewrites(req, cb) {
        let resp = new CreatePathRewritesResponse();
        this.request("CreatePathRewrites", req, resp, cb);
    }

    /**
     * 删除Api分组
     * @param {DeleteApiGroupRequest} req
     * @param {function(string, DeleteApiGroupResponse):void} cb
     * @public
     */
    DeleteApiGroup(req, cb) {
        let resp = new DeleteApiGroupResponse();
        this.request("DeleteApiGroup", req, resp, cb);
    }

    /**
     * 创建应用
     * @param {CreateApplicationRequest} req
     * @param {function(string, CreateApplicationResponse):void} cb
     * @public
     */
    CreateApplication(req, cb) {
        let resp = new CreateApplicationResponse();
        this.request("CreateApplication", req, resp, cb);
    }

    /**
     * 修改路径重写
     * @param {ModifyPathRewriteRequest} req
     * @param {function(string, ModifyPathRewriteResponse):void} cb
     * @public
     */
    ModifyPathRewrite(req, cb) {
        let resp = new ModifyPathRewriteResponse();
        this.request("ModifyPathRewrite", req, resp, cb);
    }

    /**
     * 重新执行任务批次
     * @param {RedoTaskBatchRequest} req
     * @param {function(string, RedoTaskBatchResponse):void} cb
     * @public
     */
    RedoTaskBatch(req, cb) {
        let resp = new RedoTaskBatchResponse();
        this.request("RedoTaskBatch", req, resp, cb);
    }

    /**
     * 查询公共配置发布历史
     * @param {DescribePublicConfigReleaseLogsRequest} req
     * @param {function(string, DescribePublicConfigReleaseLogsResponse):void} cb
     * @public
     */
    DescribePublicConfigReleaseLogs(req, cb) {
        let resp = new DescribePublicConfigReleaseLogsResponse();
        this.request("DescribePublicConfigReleaseLogs", req, resp, cb);
    }

    /**
     * 查询配置发布历史
     * @param {DescribeConfigReleaseLogsRequest} req
     * @param {function(string, DescribeConfigReleaseLogsResponse):void} cb
     * @public
     */
    DescribeConfigReleaseLogs(req, cb) {
        let resp = new DescribeConfigReleaseLogsResponse();
        this.request("DescribeConfigReleaseLogs", req, resp, cb);
    }

    /**
     * 执行一次工作流
     * @param {ExecuteTaskFlowRequest} req
     * @param {function(string, ExecuteTaskFlowResponse):void} cb
     * @public
     */
    ExecuteTaskFlow(req, cb) {
        let resp = new ExecuteTaskFlowResponse();
        this.request("ExecuteTaskFlow", req, resp, cb);
    }

    /**
     * 查询微服务详情
     * @param {DescribeMicroserviceRequest} req
     * @param {function(string, DescribeMicroserviceResponse):void} cb
     * @public
     */
    DescribeMicroservice(req, cb) {
        let resp = new DescribeMicroserviceResponse();
        this.request("DescribeMicroservice", req, resp, cb);
    }

    /**
     * 删除Serverless部署组
     * @param {DeleteServerlessGroupRequest} req
     * @param {function(string, DeleteServerlessGroupResponse):void} cb
     * @public
     */
    DeleteServerlessGroup(req, cb) {
        let resp = new DeleteServerlessGroupResponse();
        this.request("DeleteServerlessGroup", req, resp, cb);
    }

    /**
     * 重新执行在某个节点上执行任务。
     * @param {RedoTaskExecuteRequest} req
     * @param {function(string, RedoTaskExecuteResponse):void} cb
     * @public
     */
    RedoTaskExecute(req, cb) {
        let resp = new RedoTaskExecuteResponse();
        this.request("RedoTaskExecute", req, resp, cb);
    }

    /**
     * 查询工作流最新一个批次的状态信息
     * @param {DescribeFlowLastBatchStateRequest} req
     * @param {function(string, DescribeFlowLastBatchStateResponse):void} cb
     * @public
     */
    DescribeFlowLastBatchState(req, cb) {
        let resp = new DescribeFlowLastBatchStateResponse();
        this.request("DescribeFlowLastBatchState", req, resp, cb);
    }

    /**
     * 查询网关所有分组下Api列表
     * @param {DescribeGatewayAllGroupApisRequest} req
     * @param {function(string, DescribeGatewayAllGroupApisResponse):void} cb
     * @public
     */
    DescribeGatewayAllGroupApis(req, cb) {
        let resp = new DescribeGatewayAllGroupApisResponse();
        this.request("DescribeGatewayAllGroupApis", req, resp, cb);
    }

    /**
     * 启动容器部署组
     * @param {StartContainerGroupRequest} req
     * @param {function(string, StartContainerGroupResponse):void} cb
     * @public
     */
    StartContainerGroup(req, cb) {
        let resp = new StartContainerGroupResponse();
        this.request("StartContainerGroup", req, resp, cb);
    }

    /**
     * 部署容器应用
     * @param {DeployContainerGroupRequest} req
     * @param {function(string, DeployContainerGroupResponse):void} cb
     * @public
     */
    DeployContainerGroup(req, cb) {
        let resp = new DeployContainerGroupResponse();
        this.request("DeployContainerGroup", req, resp, cb);
    }

    /**
     * 创建工作流
     * @param {CreateTaskFlowRequest} req
     * @param {function(string, CreateTaskFlowResponse):void} cb
     * @public
     */
    CreateTaskFlow(req, cb) {
        let resp = new CreateTaskFlowResponse();
        this.request("CreateTaskFlow", req, resp, cb);
    }

    /**
     * 查询虚拟机部署组详情
     * @param {DescribeGroupRequest} req
     * @param {function(string, DescribeGroupResponse):void} cb
     * @public
     */
    DescribeGroup(req, cb) {
        let resp = new DescribeGroupResponse();
        this.request("DescribeGroup", req, resp, cb);
    }

    /**
     * 删除应用
     * @param {DeleteApplicationRequest} req
     * @param {function(string, DeleteApplicationResponse):void} cb
     * @public
     */
    DeleteApplication(req, cb) {
        let resp = new DeleteApplicationResponse();
        this.request("DeleteApplication", req, resp, cb);
    }

    /**
     * 查询API限流规则
     * @param {DescribeApiRateLimitRulesRequest} req
     * @param {function(string, DescribeApiRateLimitRulesResponse):void} cb
     * @public
     */
    DescribeApiRateLimitRules(req, cb) {
        let resp = new DescribeApiRateLimitRulesResponse();
        this.request("DescribeApiRateLimitRules", req, resp, cb);
    }

    /**
     * 删除微服务
     * @param {DeleteMicroserviceRequest} req
     * @param {function(string, DeleteMicroserviceResponse):void} cb
     * @public
     */
    DeleteMicroservice(req, cb) {
        let resp = new DeleteMicroserviceResponse();
        this.request("DeleteMicroservice", req, resp, cb);
    }

    /**
     * TSF基本资源信息概览接口
     * @param {DescribeBasicResourceUsageRequest} req
     * @param {function(string, DescribeBasicResourceUsageResponse):void} cb
     * @public
     */
    DescribeBasicResourceUsage(req, cb) {
        let resp = new DescribeBasicResourceUsageResponse();
        this.request("DescribeBasicResourceUsage", req, resp, cb);
    }

    /**
     * 删除配置项
     * @param {DeleteConfigRequest} req
     * @param {function(string, DeleteConfigResponse):void} cb
     * @public
     */
    DeleteConfig(req, cb) {
        let resp = new DeleteConfigResponse();
        this.request("DeleteConfig", req, resp, cb);
    }

    /**
     * 发布公共配置
     * @param {ReleasePublicConfigRequest} req
     * @param {function(string, ReleasePublicConfigResponse):void} cb
     * @public
     */
    ReleasePublicConfig(req, cb) {
        let resp = new ReleasePublicConfigResponse();
        this.request("ReleasePublicConfig", req, resp, cb);
    }

    /**
     * 删除单元化命名空间
     * @param {DeleteUnitNamespacesRequest} req
     * @param {function(string, DeleteUnitNamespacesResponse):void} cb
     * @public
     */
    DeleteUnitNamespaces(req, cb) {
        let resp = new DeleteUnitNamespacesResponse();
        this.request("DeleteUnitNamespaces", req, resp, cb);
    }

    /**
     * 下线Api分组
     * @param {DraftApiGroupRequest} req
     * @param {function(string, DraftApiGroupResponse):void} cb
     * @public
     */
    DraftApiGroup(req, cb) {
        let resp = new DraftApiGroupResponse();
        this.request("DraftApiGroup", req, resp, cb);
    }

    /**
     * 停止执行中的任务批次， 非运行中的任务不可调用。
     * @param {StopTaskBatchRequest} req
     * @param {function(string, StopTaskBatchResponse):void} cb
     * @public
     */
    StopTaskBatch(req, cb) {
        let resp = new StopTaskBatchResponse();
        this.request("StopTaskBatch", req, resp, cb);
    }

    /**
     * 获取微服务列表
     * @param {DescribeMicroservicesRequest} req
     * @param {function(string, DescribeMicroservicesResponse):void} cb
     * @public
     */
    DescribeMicroservices(req, cb) {
        let resp = new DescribeMicroservicesResponse();
        this.request("DescribeMicroservices", req, resp, cb);
    }

    /**
     * 查询API 版本
     * @param {DescribeApiVersionsRequest} req
     * @param {function(string, DescribeApiVersionsResponse):void} cb
     * @public
     */
    DescribeApiVersions(req, cb) {
        let resp = new DescribeApiVersionsResponse();
        this.request("DescribeApiVersions", req, resp, cb);
    }

    /**
     * 启用或禁用API
     * @param {ChangeApiUsableStatusRequest} req
     * @param {function(string, ChangeApiUsableStatusResponse):void} cb
     * @public
     */
    ChangeApiUsableStatus(req, cb) {
        let resp = new ChangeApiUsableStatusResponse();
        this.request("ChangeApiUsableStatus", req, resp, cb);
    }

    /**
     * 创建容器部署组
     * @param {CreateContainGroupRequest} req
     * @param {function(string, CreateContainGroupResponse):void} cb
     * @public
     */
    CreateContainGroup(req, cb) {
        let resp = new CreateContainGroupResponse();
        this.request("CreateContainGroup", req, resp, cb);
    }

    /**
     * 查询生效的单元化规则
     * @param {DescribeEnabledUnitRuleRequest} req
     * @param {function(string, DescribeEnabledUnitRuleResponse):void} cb
     * @public
     */
    DescribeEnabledUnitRule(req, cb) {
        let resp = new DescribeEnabledUnitRuleResponse();
        this.request("DescribeEnabledUnitRule", req, resp, cb);
    }

    /**
     * 查询Serverless部署组明细
     * @param {DescribeServerlessGroupRequest} req
     * @param {function(string, DescribeServerlessGroupResponse):void} cb
     * @public
     */
    DescribeServerlessGroup(req, cb) {
        let resp = new DescribeServerlessGroupResponse();
        this.request("DescribeServerlessGroup", req, resp, cb);
    }

    /**
     * 查询仓库信息
     * @param {DescribeRepositoryRequest} req
     * @param {function(string, DescribeRepositoryResponse):void} cb
     * @public
     */
    DescribeRepository(req, cb) {
        let resp = new DescribeRepositoryResponse();
        this.request("DescribeRepository", req, resp, cb);
    }

    /**
     * 获取应用列表其它字段，如实例数量信息等
     * @param {DescribeApplicationAttributeRequest} req
     * @param {function(string, DescribeApplicationAttributeResponse):void} cb
     * @public
     */
    DescribeApplicationAttribute(req, cb) {
        let resp = new DescribeApplicationAttributeResponse();
        this.request("DescribeApplicationAttribute", req, resp, cb);
    }

    /**
     * 撤回已发布的配置
     * @param {RevocationConfigRequest} req
     * @param {function(string, RevocationConfigResponse):void} cb
     * @public
     */
    RevocationConfig(req, cb) {
        let resp = new RevocationConfigResponse();
        this.request("RevocationConfig", req, resp, cb);
    }

    /**
     * 查询泳道规则列表
     * @param {DescribeLaneRulesRequest} req
     * @param {function(string, DescribeLaneRulesResponse):void} cb
     * @public
     */
    DescribeLaneRules(req, cb) {
        let resp = new DescribeLaneRulesResponse();
        this.request("DescribeLaneRules", req, resp, cb);
    }

    /**
     * 更新泳道规则
     * @param {ModifyLaneRuleRequest} req
     * @param {function(string, ModifyLaneRuleResponse):void} cb
     * @public
     */
    ModifyLaneRule(req, cb) {
        let resp = new ModifyLaneRuleResponse();
        this.request("ModifyLaneRule", req, resp, cb);
    }

    /**
     * 查询group发布的配置
     * @param {DescribeReleasedConfigRequest} req
     * @param {function(string, DescribeReleasedConfigResponse):void} cb
     * @public
     */
    DescribeReleasedConfig(req, cb) {
        let resp = new DescribeReleasedConfigResponse();
        this.request("DescribeReleasedConfig", req, resp, cb);
    }

    /**
     * 查询公共配置发布信息
     * @param {DescribePublicConfigReleasesRequest} req
     * @param {function(string, DescribePublicConfigReleasesResponse):void} cb
     * @public
     */
    DescribePublicConfigReleases(req, cb) {
        let resp = new DescribePublicConfigReleasesResponse();
        this.request("DescribePublicConfigReleases", req, resp, cb);
    }

    /**
     * 查询网关API监控明细数据
     * @param {DescribeApiUseDetailRequest} req
     * @param {function(string, DescribeApiUseDetailResponse):void} cb
     * @public
     */
    DescribeApiUseDetail(req, cb) {
        let resp = new DescribeApiUseDetailResponse();
        this.request("DescribeApiUseDetail", req, resp, cb);
    }

    /**
     * TSF会将软件包上传到腾讯云对象存储（COS）。调用此接口获取上传信息，如目标地域，桶，包Id，存储路径，鉴权信息等，之后请使用COS API（或SDK）进行上传。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     * @param {DescribeUploadInfoRequest} req
     * @param {function(string, DescribeUploadInfoResponse):void} cb
     * @public
     */
    DescribeUploadInfo(req, cb) {
        let resp = new DescribeUploadInfoResponse();
        this.request("DescribeUploadInfo", req, resp, cb);
    }

    /**
     * 启用单元化路由
     * @param {EnableUnitRouteRequest} req
     * @param {function(string, EnableUnitRouteResponse):void} cb
     * @public
     */
    EnableUnitRoute(req, cb) {
        let resp = new EnableUnitRouteResponse();
        this.request("EnableUnitRoute", req, resp, cb);
    }

    /**
     * 更新API
     * @param {UpdateGatewayApiRequest} req
     * @param {function(string, UpdateGatewayApiResponse):void} cb
     * @public
     */
    UpdateGatewayApi(req, cb) {
        let resp = new UpdateGatewayApiResponse();
        this.request("UpdateGatewayApi", req, resp, cb);
    }

    /**
     * 获取容器事件列表
     * @param {DescribeContainerEventsRequest} req
     * @param {function(string, DescribeContainerEventsResponse):void} cb
     * @public
     */
    DescribeContainerEvents(req, cb) {
        let resp = new DescribeContainerEventsResponse();
        this.request("DescribeContainerEvents", req, resp, cb);
    }

    /**
     * 下线部署组所有机器实例
     * @param {ShrinkGroupRequest} req
     * @param {function(string, ShrinkGroupResponse):void} cb
     * @public
     */
    ShrinkGroup(req, cb) {
        let resp = new ShrinkGroupResponse();
        this.request("ShrinkGroup", req, resp, cb);
    }

    /**
     * 启动分组
     * @param {StartGroupRequest} req
     * @param {function(string, StartGroupResponse):void} cb
     * @public
     */
    StartGroup(req, cb) {
        let resp = new StartGroupResponse();
        this.request("StartGroup", req, resp, cb);
    }

    /**
     * 修改容器部署组
     * @param {ModifyContainerGroupRequest} req
     * @param {function(string, ModifyContainerGroupResponse):void} cb
     * @public
     */
    ModifyContainerGroup(req, cb) {
        let resp = new ModifyContainerGroupResponse();
        this.request("ModifyContainerGroup", req, resp, cb);
    }

    /**
     * 查询单元化规则列表
     * @param {DescribeUnitRulesRequest} req
     * @param {function(string, DescribeUnitRulesResponse):void} cb
     * @public
     */
    DescribeUnitRules(req, cb) {
        let resp = new DescribeUnitRulesResponse();
        this.request("DescribeUnitRules", req, resp, cb);
    }


}
module.exports = TsfClient;
