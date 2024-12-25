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
  DescribePublicConfigSummaryRequest,
  TsfPageFileConfig,
  ModifyPathRewriteRequest,
  DescribeUnitRulesV2Response,
  ApiDetailResponse,
  UpdateApiRateLimitRuleRequest,
  DeleteClusterResponse,
  CosCredentials,
  DeletePathRewritesResponse,
  PathRewritePage,
  DescribeUnitApiUseDetailRequest,
  ClusterV2,
  ModifyApplicationResponse,
  DescribeApiVersionsResponse,
  ReassociateBusinessLogConfigRequest,
  StopContainerGroupResponse,
  CreateConfigTemplateWithDetailRespResponse,
  DeletePathRewritesRequest,
  DeleteLaneResponse,
  DescribeGroupReleaseRequest,
  DescribeConfigTemplateResponse,
  ContinueRunFailedTaskBatchRequest,
  DescribeDeliveryConfigResponse,
  ForceSchedule,
  SimpleApplication,
  DescribeSimpleNamespacesResponse,
  DescribeSimpleClustersResponse,
  DeleteRepositoryResponse,
  DeleteApplicationResponse,
  QuantileEntity,
  ModifyProgramRequest,
  DescribePathRewriteResponse,
  DescribeConfigsResponse,
  ModifyContainerReplicasRequest,
  ReleaseFileConfigRequest,
  Tag,
  DescribeInvocationMetricDataDimensionResponse,
  SearchStdoutLogResponse,
  CreateGatewayApiResponse,
  DescribeFileConfigsResponse,
  DescribeClustersRequest,
  DescribeApiVersionsRequest,
  DeleteConfigTemplateResponse,
  DescribeGroupBindedGatewaysResponse,
  DescribeJvmMonitorRequest,
  EnableLaneRuleRequest,
  TaskRule,
  UnbindApiGroupRequest,
  TaskRecord,
  CreateNamespaceResponse,
  RedoTaskBatchRequest,
  DescribeGroupsResponse,
  ModifyUploadInfoResponse,
  EnableLaneRuleResponse,
  TsfPageConfig,
  CreateProgramRequest,
  CreateApiRateLimitRuleRequest,
  DisableLaneRuleResponse,
  TaskRecordPage,
  AssociateBusinessLogConfigRequest,
  DescribeJvmMonitorResponse,
  DescribeDeliveryConfigRequest,
  DeleteServerlessGroupRequest,
  ChangeApiUsableStatusRequest,
  DescribeMicroservicesResponse,
  DescribeApiRateLimitRulesRequest,
  DescribeApiGroupsResponse,
  DeletePublicConfigRequest,
  DeleteNamespaceResponse,
  CreateMicroserviceRequest,
  ReleaseConfigResponse,
  DescribeUnitRuleResponse,
  DeleteImageTagsRequest,
  DescribeRepositoriesRequest,
  InvocationMetricScatterPlot,
  RollbackConfigRequest,
  DisassociateBusinessLogConfigResponse,
  CreateGatewayApiRequest,
  DescribeCreateGatewayApiStatusResponse,
  DeleteConfigResponse,
  DescribeGroupGatewaysRequest,
  UpdateApiRateLimitRuleResponse,
  DescribeGatewayAllGroupApisResponse,
  LaneRule,
  MsInstance,
  GatewayPluginBoundParam,
  ModifyNamespaceResponse,
  ModifyLaneRuleRequest,
  AddInstancesResponse,
  StartContainerGroupRequest,
  DescribeRepositoryResponse,
  ReleaseConfigWithDetailRespResponse,
  Instance,
  UpdateHealthCheckSettingsRequest,
  ScalableRule,
  EnableUnitRuleRequest,
  CreateClusterResponse,
  CreateMicroserviceResponse,
  CreateFileConfigWithDetailRespRequest,
  AgentProfile,
  ModifyContainerReplicasResponse,
  StopGroupRequest,
  ShrinkGroupResponse,
  CosUploadInfo,
  DescribeLanesResponse,
  StartGroupRequest,
  CreateNamespaceRequest,
  DescribeDownloadInfoRequest,
  DescribeClusterInstancesRequest,
  DescribeGroupBindedGatewaysRequest,
  DescribeRepositoryRequest,
  CreatePublicConfigWithDetailRespRequest,
  DescribeResourceTaskStatusResponse,
  RedoTaskRequest,
  DeleteApiGroupResponse,
  ImageTagsResult,
  RepositoryInfo,
  DraftApiGroupRequest,
  CreateLaneResponse,
  DescribeDeliveryConfigsResponse,
  TcrRepoInfo,
  UpdateApiTimeoutsResponse,
  TsfPageDimension,
  UnitRule,
  DescribePkgsResponse,
  ConfigMapOption,
  DeleteImageTag,
  DescribeContainerGroupDeployInfoResponse,
  DescribeOverviewInvocationRequest,
  TaskLastExecuteStatus,
  DescribeProgramsRequest,
  DescribePublicConfigRequest,
  ImageRepository,
  DescribeOverviewInvocationResponse,
  CommonOption,
  CreatePublicConfigResponse,
  LaneRules,
  TsfPageVmGroup,
  CreateConfigResponse,
  RevokeFileConfigRequest,
  DescribeCreateGatewayApiStatusRequest,
  RevocationPublicConfigResponse,
  DescribeConfigReleaseLogsRequest,
  AssociateConfigWithGroupResponse,
  UpdateRepositoryResponse,
  DisassociateKafkaConfigRequest,
  TsfConfigCenter,
  RollbackConfigResponse,
  RevocationConfigRequest,
  StartContainerGroupResponse,
  ModifyTaskRequest,
  DeleteUnitNamespacesResponse,
  DisableTaskRequest,
  DescribeStatisticsResponse,
  DescribeBasicResourceUsageResponse,
  CreateAllGatewayApiAsyncResponse,
  RemoveInstancesRequest,
  TsfPageInstance,
  ModifyLaneResponse,
  DeleteGroupResponse,
  DescribeSimpleApplicationsResponse,
  DeployContainerGroupRequest,
  CreateApiRateLimitRuleWithDetailRespRequest,
  CreateUnitRuleWithDetailRespRequest,
  DescribeContainerGroupAttributeRequest,
  DescribeSimpleApplicationsRequest,
  DescribeDeliveryConfigByGroupIdResponse,
  ModifyContainerGroupRequest,
  OperateApplicationTcrBindingRequest,
  ContainGroup,
  CreateConfigWithDetailRespResponse,
  DescribeGroupBusinessLogConfigsResponse,
  ContainGroupResult,
  UpdateUnitRuleRequest,
  ReleasePublicConfigResponse,
  ReleaseApiGroupResponse,
  InstanceAdvancedSettings,
  UpdateApiRateLimitRulesRequest,
  DescribeGroupInstancesRequest,
  DescribeMsApiListRequest,
  DescribeUploadInfoResponse,
  DescribeMsApiListResponse,
  EnableTaskRequest,
  BusinessLogV2,
  DisableTaskResponse,
  DescribeMicroserviceRequest,
  TsfPageCluster,
  InstanceEnrichedInfoPage,
  DescribePodInstancesResponse,
  FileConfigRelease,
  DescribeInvocationMetricDataPointRequest,
  DescribeRepositoriesResponse,
  MonitorOverview,
  CreateGroupRequest,
  DeleteClusterRequest,
  StopTaskBatchResponse,
  ServiceStatisticsResult,
  CreateContainGroupResponse,
  DescribeContainerGroupDetailResponse,
  CreatePathRewritesWithDetailRespResponse,
  Ports,
  UpdateRepositoryRequest,
  DescribeGroupGatewaysResponse,
  SimpleKafkaDeliveryConfig,
  RevocationConfigResponse,
  PkgBind,
  DeleteTaskResponse,
  TsfPageMsInstance,
  DeleteMicroserviceRequest,
  CreatePublicConfigWithDetailRespResponse,
  CreateConfigWithDetailRespRequest,
  RemoveInstancesResponse,
  DescribeContainerEventsRequest,
  DisableUnitRuleRequest,
  Namespace,
  DescribeGroupResponse,
  Env,
  ModifyClusterRequest,
  Resource,
  DeleteContainerGroupResponse,
  DeleteServerlessGroupResponse,
  DeleteImageTagsResponse,
  DeliveryKafkaInfo,
  GroupUnitApiDailyUseStatistics,
  DescribeFileConfigReleasesResponse,
  DisableUnitRouteResponse,
  ExecuteTaskRequest,
  DescribeGroupBusinessLogConfigsRequest,
  DescribeApplicationResponse,
  LaneInfo,
  DescribeConfigReleaseLogsResponse,
  DeletePublicConfigResponse,
  DescribeSimpleGroupsResponse,
  DescribeFlowLastBatchStateRequest,
  MetricDataCurve,
  GroupInfo,
  TerminateTaskFlowBatchResponse,
  DisassociateKafkaConfigResponse,
  ValueFrom,
  ShrinkInstancesResponse,
  DeleteLaneRuleResponse,
  DescribeApiRateLimitRulesResponse,
  ContainerGroupOther,
  AddClusterInstancesRequest,
  DescribeGroupUseDetailResponse,
  ContainerGroupDeploy,
  TsfPageNamespace,
  VolumeInfo,
  UpdateApiTimeoutsRequest,
  Metric,
  DescribeInovcationIndicatorsRequest,
  ShrinkInstancesRequest,
  DescribeSimpleNamespacesRequest,
  ExecuteTaskFlowResponse,
  DescribeClustersResponse,
  SearchBusinessLogRequest,
  ExpandGroupResponse,
  DescribePublicConfigsResponse,
  DescribeUnitNamespacesResponse,
  ContinueRunFailedTaskBatchResponse,
  DescribeSimpleClustersRequest,
  Program,
  KafkaDeliveryConfig,
  ApiDefinitionDescr,
  DescribeLaneRulesResponse,
  DescribeImageRepositoryRequest,
  IndicatorCoord,
  TsfPageUnitRule,
  DescribeApiGroupRequest,
  AssociateBusinessLogConfigResponse,
  DescribeGatewayApisRequest,
  AssociateConfigWithGroupRequest,
  TsfPageConfigReleaseLog,
  DescribeContainerGroupDetailRequest,
  JvmMonitorData,
  DescribeGroupsWithPluginRequest,
  ImageRepositoryResult,
  ModifyTaskResponse,
  RevokeFileConfigResponse,
  SearchBusinessLogResponse,
  DeleteUnitNamespacesRequest,
  DescribeGroupRequest,
  UnitRuleItem,
  UpdateConfigTemplateResponse,
  TrySchedule,
  BindPluginRequest,
  HealthCheckSetting,
  DeleteLaneRuleRequest,
  MetricDimension,
  GroupContainerInfo,
  CreateUnitRuleWithDetailRespResponse,
  GatewayDeployGroup,
  PkgList,
  CreateProgramResponse,
  Cluster,
  DescribeGroupUseDetailRequest,
  Microservice,
  UpdateUnitRuleResponse,
  CreateUnitRuleRequest,
  StartGroupResponse,
  GroupRelease,
  DescribePathRewritesRequest,
  ShrinkGroupRequest,
  TsfPageStdoutLogV2,
  RepositoryList,
  CreateLaneRuleResponse,
  CreateTaskResponse,
  DescribeContainerGroupsResponse,
  CreateUnitNamespacesResponse,
  UpdateApiGroupResponse,
  DescribeGroupsWithPluginResponse,
  AddInstancesRequest,
  GatewayPlugin,
  GatewayApiGroupVo,
  CreateApplicationRequest,
  ServiceStatisticsResults,
  DeployGroupRequest,
  LaneInfos,
  CreateTaskFlowRequest,
  CreateFileConfigWithDetailRespResponse,
  CreateConfigTemplateWithDetailRespRequest,
  TsfPageGatewayPlugin,
  ApiUseStatisticsEntity,
  UnbindApiGroupResponse,
  DescribeGroupReleaseResponse,
  DescribePathRewriteRequest,
  CreateApplicationResponse,
  GatewayGroupIds,
  DescribeInvocationMetricDataDimensionRequest,
  DeployGroupResponse,
  ModifyGroupResponse,
  DescribeUnitRulesV2Request,
  BindApiGroupResponse,
  MetricDataPointMap,
  DescribeGroupAttributeResponse,
  ModifyPathRewriteResponse,
  EnableUnitRuleResponse,
  DescribeEnabledUnitRuleResponse,
  UpdateApiGroupRequest,
  TsfApiListResponse,
  EnableUnitRouteResponse,
  GroupUseStatisticsEntity,
  DescribeBusinessLogConfigRequest,
  TsfPageGatewayDeployGroup,
  ImageTag,
  ExecuteTaskFlowRequest,
  DescribeBusinessLogConfigResponse,
  TerminateTaskFlowBatchRequest,
  CreateUnitRuleResponse,
  CreateUnitNamespacesRequest,
  DescribeTaskRecordsResponse,
  VmGroup,
  DescribeApiUseDetailResponse,
  ServiceSetting,
  ModifyUploadInfoRequest,
  DescribeGatewayApisResponse,
  DescribeUnitRuleRequest,
  UpdateGatewayApiResponse,
  DescribeInstancesResponse,
  AvailableZoneScatterScheduleRule,
  CreatePathRewritesWithDetailRespRequest,
  DeleteFileConfigResponse,
  ResourceTaskStatusResult,
  ContainerEvent,
  DeleteApiRateLimitRuleResponse,
  DeleteFileConfigRequest,
  DescribePublicConfigSummaryResponse,
  DescribePublicConfigReleaseLogsRequest,
  ShardArgument,
  MetricDimensionValue,
  MetricDataPoint,
  DescribeApplicationAttributeResponse,
  ModifyLaneRequest,
  DescribeLanesRequest,
  DescribeGatewayMonitorOverviewResponse,
  BusinesLogConfigAssociatedGroup,
  CreatePublicConfigRequest,
  CreateAllGatewayApiAsyncRequest,
  PathRewrite,
  EnableTaskFlowResponse,
  ApiDetailInfo,
  DeleteUnitRuleResponse,
  TsfPageConfigRelease,
  DisableTaskFlowResponse,
  DescribeGatewayMonitorOverviewRequest,
  DescribeImageTagsResponse,
  BindPluginResponse,
  RedoTaskFlowBatchRequest,
  TsfPageUnitNamespace,
  TsfPageContainerEvent,
  CreateMicroserviceWithDetailRespRequest,
  BusinessLogConfigSchema,
  MetricDataSingleValue,
  StopTaskExecuteRequest,
  DeleteApiRateLimitRuleRequest,
  DescribePkgsRequest,
  SchedulingStrategy,
  GatewayVo,
  DescribeApplicationAttributeRequest,
  ReleaseConfigWithDetailRespRequest,
  CreateTaskRequest,
  OperationInfo,
  DescribePublicConfigResponse,
  DescribeUsableUnitNamespacesResponse,
  ReleaseFileConfigResponse,
  ThreadPicture,
  DescribeConfigResponse,
  SimpleGroup,
  CreateApiRateLimitRuleWithDetailRespResponse,
  DescribeTaskRecordsRequest,
  CustomTolerateSchedule,
  ModifyContainerGroupResponse,
  ExclusiveInstance,
  DeleteApplicationRequest,
  DescribeUnitNamespacesRequest,
  DeleteTaskRequest,
  HealthCheckSettings,
  VmGroupSimple,
  ApiResponseDescr,
  DescribeBusinessLogConfigsRequest,
  DeleteConfigTemplateRequest,
  DescribePluginInstancesRequest,
  ApiRequestDescr,
  ApiVersionArray,
  GatewayConfig,
  DeliveryConfigBindGroups,
  DescribeInovcationIndicatorsResponse,
  MultiValueDataPoints,
  ConfigReleaseLog,
  CreateConfigRequest,
  TsfPageClusterV2,
  DeleteGatewayApiResponse,
  OverviewBasicResourceUsage,
  DescribeUnitRulesResponse,
  UpdateGatewayApiRequest,
  DescribeInstancesRequest,
  ReassociateBusinessLogConfigResponse,
  PathRewriteCreateObject,
  DescribeApiGroupsRequest,
  DeleteUnitRuleRequest,
  ApplicationAttribute,
  TaskFlowLastBatchState,
  DeletePkgsResponse,
  DescribeTaskLastStatusRequest,
  DescribeBusinessLogConfigsResponse,
  ApplicationForPage,
  DescribeInvocationMetricScatterPlotRequest,
  CreateTaskFlowResponse,
  DescribeMicroservicesRequest,
  AddClusterInstancesResponse,
  DescribeInvocationMetricDataCurveRequest,
  VmGroupOther,
  DescribeTaskLastStatusResponse,
  DescribePublicConfigsRequest,
  GatewayGroupApiVo,
  BusinessLogConfigAssociatedGroup,
  DescribeApplicationsRequest,
  DescribeTaskDetailRequest,
  MultiValue,
  DescribePublicConfigReleasesRequest,
  TsfPageFileConfigRelease,
  DescribeLaneRulesRequest,
  DescribeContainerEventsResponse,
  UnitRuleTag,
  DescribePluginInstancesResponse,
  CreateRepositoryResponse,
  CreateLaneRuleRequest,
  CurvePoint,
  CosDownloadInfo,
  DeletePkgsRequest,
  CreateFileConfigRequest,
  GroupApiUseStatistics,
  ChangeApiUsableStatusResponse,
  DescribeContainerGroupAttributeResponse,
  CreateFileConfigResponse,
  VolumeMountInfo,
  PagedProgram,
  GroupUnitApiUseStatistics,
  DescribeGroupInstancesResponse,
  DescribeContainerGroupDeployInfoRequest,
  DescribeDeliveryConfigsRequest,
  DisassociateBusinessLogConfigRequest,
  DescribePublicConfigReleaseLogsResponse,
  DeleteApiGroupRequest,
  ReleaseApiGroupRequest,
  DescribeFileConfigReleasesRequest,
  DescribeClusterInstancesResponse,
  DescribeTaskDetailResponse,
  EmptyDirOption,
  ExpandGroupRequest,
  RevocationPublicConfigRequest,
  ModifyLaneRuleResponse,
  TsfPageSimpleGroup,
  DescribeGroupAttributeRequest,
  ModifyClusterResponse,
  PkgInfo,
  GroupPod,
  EnableTaskFlowRequest,
  DescribeReleasedConfigRequest,
  ApiInfo,
  StopGroupResponse,
  CreatePathRewritesRequest,
  ModifyMicroserviceRequest,
  DescribeConfigReleasesRequest,
  CommonRef,
  StdoutLogV2,
  GroupDailyUseStatistics,
  DescribeEnabledUnitRuleRequest,
  CreateConfigTemplateRequest,
  DescribeApiGroupResponse,
  RedoTaskExecuteResponse,
  CreateLaneRequest,
  CreateApiGroupResponse,
  ServiceConfig,
  RedoTaskExecuteRequest,
  DescribeApplicationsResponse,
  InvocationIndicator,
  DescribeConfigRequest,
  OperateApplicationTcrBindingResponse,
  DisableUnitRouteRequest,
  DescribeUnitRulesRequest,
  UpdateConfigTemplateRequest,
  DescribeGatewayAllGroupApisRequest,
  DeleteGroupRequest,
  ContainerGroupDetail,
  BindApiGroupRequest,
  StopTaskBatchRequest,
  DescribeUploadInfoRequest,
  ConfigTemplate,
  DescribeUnitApiUseDetailResponse,
  DescribeInvocationMetricScatterPlotResponse,
  DescribeUsableUnitNamespacesRequest,
  DescribeContainerGroupsRequest,
  TsfPageBusinessLogConfig,
  DescribeProgramsResponse,
  ProgramItem,
  DisableTaskFlowRequest,
  DescribePodInstancesRequest,
  RedoTaskResponse,
  DeliveryConfigBindGroup,
  CustomPodSchedule,
  DescribeConfigsRequest,
  WarmupSetting,
  EnableUnitRouteRequest,
  TsfPageApplication,
  DisableLaneRuleRequest,
  InstanceEnrichedInfo,
  DescribeResourceTaskStatusRequest,
  DescribeInvocationMetricDataCurveResponse,
  DeleteConfigRequest,
  DescribeFileConfigsRequest,
  CreateConfigTemplateResponse,
  ExecuteTaskResponse,
  CreateApiRateLimitRuleResponse,
  Config,
  ProtocolPort,
  DescribeApiUseDetailRequest,
  CreateMicroserviceWithDetailRespResponse,
  TsfPageBusinessLogV2,
  FieldRef,
  CreateClusterRequest,
  DescribeDeliveryConfigByGroupIdRequest,
  TsfPageMicroservice,
  ConfigRelease,
  DeleteContainerGroupRequest,
  AdvanceSettings,
  EnableTaskResponse,
  ReleaseConfigRequest,
  MsApiArray,
  BusinessLogConfig,
  DescribeApiDetailRequest,
  StopContainerGroupRequest,
  UpdateHealthCheckSettingsResponse,
  ApiRateLimitRule,
  Filter,
  DescribeInvocationMetricDataPointResponse,
  ServiceGovernanceConfig,
  DisableUnitRuleResponse,
  ModifyApplicationRequest,
  DescribePathRewritesResponse,
  DeleteGatewayApiRequest,
  ModifyProgramResponse,
  AddInstanceResult,
  DescribeFlowLastBatchStateResponse,
  StopTaskExecuteResponse,
  TsfPageUnitRuleV2,
  UpdateApiRateLimitRulesResponse,
  DeleteRepositoryRequest,
  DescribeSimpleGroupsRequest,
  DescribeConfigReleasesResponse,
  ApiGroupInfo,
  UnitNamespace,
  ModifyMicroserviceResponse,
  CreateApiGroupRequest,
  DescribeDownloadInfoResponse,
  GroupPodResult,
  DescribeApplicationRequest,
  FileConfig,
  DeployContainerGroupResponse,
  TsfPageApiDetailInfo,
  DescribeBasicResourceUsageRequest,
  DeleteMicroserviceResponse,
  ResourceFieldRef,
  DescribeReleasedConfigResponse,
  HealthCheckConfig,
  TsfPageSimpleApplication,
  Affinity,
  PropertyField,
  DescribeApiDetailResponse,
  DescribeGroupsRequest,
  LaneRuleTag,
  ModifyNamespaceRequest,
  OperationInfoDetail,
  CreateRepositoryRequest,
  DeleteNamespaceRequest,
  SearchStdoutLogRequest,
  RedoTaskBatchResponse,
  DescribeStatisticsRequest,
  ModifyGroupRequest,
  DescribeMicroserviceResponse,
  DescribeImageRepositoryResponse,
  TaskId,
  DescribeImageTagsRequest,
  MemoryPicture,
  DescribeConfigSummaryResponse,
  CreateContainGroupRequest,
  DescribePublicConfigReleasesResponse,
  CreatePathRewritesResponse,
  DescribeConfigTemplateRequest,
  DraftApiGroupResponse,
  DescribeConfigSummaryRequest,
  DeleteLaneRequest,
  TsfPageApiGroupInfo,
  ReleasePublicConfigRequest,
  TaskFlowEdge,
  RedoTaskFlowBatchResponse,
  LaneGroup,
  CreateGroupResponse,
} from "./tsf_models"

/**
 * tsf client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tsf.tencentcloudapi.com", "2018-03-26", clientConfig)
  }

  /**
   * 创建任务
   */
  async CreateTask(
    req: CreateTaskRequest,
    cb?: (error: string, rep: CreateTaskResponse) => void
  ): Promise<CreateTaskResponse> {
    return this.request("CreateTask", req, cb)
  }

  /**
   * 删除公共配置项
   */
  async DeletePublicConfig(
    req: DeletePublicConfigRequest,
    cb?: (error: string, rep: DeletePublicConfigResponse) => void
  ): Promise<DeletePublicConfigResponse> {
    return this.request("DeletePublicConfig", req, cb)
  }

  /**
   * 查询配置
   */
  async DescribeConfig(
    req: DescribeConfigRequest,
    cb?: (error: string, rep: DescribeConfigResponse) => void
  ): Promise<DescribeConfigResponse> {
    return this.request("DescribeConfig", req, cb)
  }

  /**
   * 获取微服务列表
   */
  async DescribeMicroservices(
    req: DescribeMicroservicesRequest,
    cb?: (error: string, rep: DescribeMicroservicesResponse) => void
  ): Promise<DescribeMicroservicesResponse> {
    return this.request("DescribeMicroservices", req, cb)
  }

  /**
   * 修改容器部署组实例数
   */
  async ModifyContainerReplicas(
    req: ModifyContainerReplicasRequest,
    cb?: (error: string, rep: ModifyContainerReplicasResponse) => void
  ): Promise<ModifyContainerReplicasResponse> {
    return this.request("ModifyContainerReplicas", req, cb)
  }

  /**
   * 虚拟机部署组下线实例
   */
  async ShrinkInstances(
    req: ShrinkInstancesRequest,
    cb?: (error: string, rep: ShrinkInstancesResponse) => void
  ): Promise<ShrinkInstancesResponse> {
    return this.request("ShrinkInstances", req, cb)
  }

  /**
   * 禁用单元化规则
   */
  async DisableUnitRule(
    req: DisableUnitRuleRequest,
    cb?: (error: string, rep: DisableUnitRuleResponse) => void
  ): Promise<DisableUnitRuleResponse> {
    return this.request("DisableUnitRule", req, cb)
  }

  /**
   * 获取部署组实例列表
   */
  async DescribePodInstances(
    req: DescribePodInstancesRequest,
    cb?: (error: string, rep: DescribePodInstancesResponse) => void
  ): Promise<DescribePodInstancesResponse> {
    return this.request("DescribePodInstances", req, cb)
  }

  /**
   * 创建配置项，返回详细信息
   */
  async CreateConfigWithDetailResp(
    req: CreateConfigWithDetailRespRequest,
    cb?: (error: string, rep: CreateConfigWithDetailRespResponse) => void
  ): Promise<CreateConfigWithDetailRespResponse> {
    return this.request("CreateConfigWithDetailResp", req, cb)
  }

  /**
   * 创建命名空间
   */
  async CreateNamespace(
    req: CreateNamespaceRequest,
    cb?: (error: string, rep: CreateNamespaceResponse) => void
  ): Promise<CreateNamespaceResponse> {
    return this.request("CreateNamespace", req, cb)
  }

  /**
   * 添加云主机节点至TSF集群
   */
  async AddClusterInstances(
    req: AddClusterInstancesRequest,
    cb?: (error: string, rep: AddClusterInstancesResponse) => void
  ): Promise<AddClusterInstancesResponse> {
    return this.request("AddClusterInstances", req, cb)
  }

  /**
   * 删除泳道规则
   */
  async DeleteLaneRule(
    req: DeleteLaneRuleRequest,
    cb?: (error: string, rep: DeleteLaneRuleResponse) => void
  ): Promise<DeleteLaneRuleResponse> {
    return this.request("DeleteLaneRule", req, cb)
  }

  /**
   * 删除集群
   */
  async DeleteCluster(
    req: DeleteClusterRequest,
    cb?: (error: string, rep: DeleteClusterResponse) => void
  ): Promise<DeleteClusterResponse> {
    return this.request("DeleteCluster", req, cb)
  }

  /**
   * 重新执行工作流批次
   */
  async RedoTaskFlowBatch(
    req: RedoTaskFlowBatchRequest,
    cb?: (error: string, rep: RedoTaskFlowBatchResponse) => void
  ): Promise<RedoTaskFlowBatchResponse> {
    return this.request("RedoTaskFlowBatch", req, cb)
  }

  /**
   * 查询公共配置汇总列表
   */
  async DescribePublicConfigSummary(
    req: DescribePublicConfigSummaryRequest,
    cb?: (error: string, rep: DescribePublicConfigSummaryResponse) => void
  ): Promise<DescribePublicConfigSummaryResponse> {
    return this.request("DescribePublicConfigSummary", req, cb)
  }

  /**
   * 容器部署组列表
   */
  async DescribeContainerGroups(
    req: DescribeContainerGroupsRequest,
    cb?: (error: string, rep: DescribeContainerGroupsResponse) => void
  ): Promise<DescribeContainerGroupsResponse> {
    return this.request("DescribeContainerGroups", req, cb)
  }

  /**
   * 获取部署组其他属性
   */
  async DescribeGroupAttribute(
    req: DescribeGroupAttributeRequest,
    cb?: (error: string, rep: DescribeGroupAttributeResponse) => void
  ): Promise<DescribeGroupAttributeResponse> {
    return this.request("DescribeGroupAttribute", req, cb)
  }

  /**
   * 创建文件配置项，返回详细信息
   */
  async CreateFileConfigWithDetailResp(
    req: CreateFileConfigWithDetailRespRequest,
    cb?: (error: string, rep: CreateFileConfigWithDetailRespResponse) => void
  ): Promise<CreateFileConfigWithDetailRespResponse> {
    return this.request("CreateFileConfigWithDetailResp", req, cb)
  }

  /**
   * 创建参数模板
   */
  async CreateConfigTemplate(
    req: CreateConfigTemplateRequest,
    cb?: (error: string, rep: CreateConfigTemplateResponse) => void
  ): Promise<CreateConfigTemplateResponse> {
    return this.request("CreateConfigTemplate", req, cb)
  }

  /**
   * 查询服务API列表
   */
  async DescribeMsApiList(
    req: DescribeMsApiListRequest,
    cb?: (error: string, rep: DescribeMsApiListResponse) => void
  ): Promise<DescribeMsApiListResponse> {
    return this.request("DescribeMsApiList", req, cb)
  }

  /**
   * 撤回已发布的公共配置
   */
  async RevocationPublicConfig(
    req: RevocationPublicConfigRequest,
    cb?: (error: string, rep: RevocationPublicConfigResponse) => void
  ): Promise<RevocationPublicConfigResponse> {
    return this.request("RevocationPublicConfig", req, cb)
  }

  /**
   * 创建集群
   */
  async CreateCluster(
    req: CreateClusterRequest,
    cb?: (error: string, rep: CreateClusterResponse) => void
  ): Promise<CreateClusterResponse> {
    return this.request("CreateCluster", req, cb)
  }

  /**
   * 服务调用监控统计概览
   */
  async DescribeOverviewInvocation(
    req: DescribeOverviewInvocationRequest,
    cb?: (error: string, rep: DescribeOverviewInvocationResponse) => void
  ): Promise<DescribeOverviewInvocationResponse> {
    return this.request("DescribeOverviewInvocation", req, cb)
  }

  /**
   * 停止正在某个节点上执行的任务
   */
  async StopTaskExecute(
    req: StopTaskExecuteRequest,
    cb?: (error: string, rep: StopTaskExecuteResponse) => void
  ): Promise<StopTaskExecuteResponse> {
    return this.request("StopTaskExecute", req, cb)
  }

  /**
   * 查询任务详情
   */
  async DescribeTaskDetail(
    req: DescribeTaskDetailRequest,
    cb?: (error: string, rep: DescribeTaskDetailResponse) => void
  ): Promise<DescribeTaskDetailResponse> {
    return this.request("DescribeTaskDetail", req, cb)
  }

  /**
   * 修改集群信息
   */
  async ModifyCluster(
    req: ModifyClusterRequest,
    cb?: (error: string, rep: ModifyClusterResponse) => void
  ): Promise<ModifyClusterResponse> {
    return this.request("ModifyCluster", req, cb)
  }

  /**
   * 容器部署组详情（已废弃，请使用  DescribeContainerGroupDeployInfo）
   */
  async DescribeContainerGroupDetail(
    req: DescribeContainerGroupDetailRequest,
    cb?: (error: string, rep: DescribeContainerGroupDetailResponse) => void
  ): Promise<DescribeContainerGroupDetailResponse> {
    return this.request("DescribeContainerGroupDetail", req, cb)
  }

  /**
   * 启用单元化规则
   */
  async EnableUnitRule(
    req: EnableUnitRuleRequest,
    cb?: (error: string, rep: EnableUnitRuleResponse) => void
  ): Promise<EnableUnitRuleResponse> {
    return this.request("EnableUnitRule", req, cb)
  }

  /**
   * 回滚配置
   */
  async RollbackConfig(
    req: RollbackConfigRequest,
    cb?: (error: string, rep: RollbackConfigResponse) => void
  ): Promise<RollbackConfigResponse> {
    return this.request("RollbackConfig", req, cb)
  }

  /**
   * 镜像版本列表
   */
  async DescribeImageTags(
    req: DescribeImageTagsRequest,
    cb?: (error: string, rep: DescribeImageTagsResponse) => void
  ): Promise<DescribeImageTagsResponse> {
    return this.request("DescribeImageTags", req, cb)
  }

  /**
   * 查询文件配置项列表
   */
  async DescribeFileConfigs(
    req: DescribeFileConfigsRequest,
    cb?: (error: string, rep: DescribeFileConfigsResponse) => void
  ): Promise<DescribeFileConfigsResponse> {
    return this.request("DescribeFileConfigs", req, cb)
  }

  /**
   * 创建参数模板，并返回模板详细信息
   */
  async CreateConfigTemplateWithDetailResp(
    req: CreateConfigTemplateWithDetailRespRequest,
    cb?: (error: string, rep: CreateConfigTemplateWithDetailRespResponse) => void
  ): Promise<CreateConfigTemplateWithDetailRespResponse> {
    return this.request("CreateConfigTemplateWithDetailResp", req, cb)
  }

  /**
   * 查询简单集群列表
   */
  async DescribeSimpleClusters(
    req: DescribeSimpleClustersRequest,
    cb?: (error: string, rep: DescribeSimpleClustersResponse) => void
  ): Promise<DescribeSimpleClustersResponse> {
    return this.request("DescribeSimpleClusters", req, cb)
  }

  /**
   * 查询API详情
   */
  async DescribeApiDetail(
    req: DescribeApiDetailRequest,
    cb?: (error: string, rep: DescribeApiDetailResponse) => void
  ): Promise<DescribeApiDetailResponse> {
    return this.request("DescribeApiDetail", req, cb)
  }

  /**
   * 撤回已发布的文件配置
   */
  async RevokeFileConfig(
    req: RevokeFileConfigRequest,
    cb?: (error: string, rep: RevokeFileConfigResponse) => void
  ): Promise<RevokeFileConfigResponse> {
    return this.request("RevokeFileConfig", req, cb)
  }

  /**
   * 获取单个投递项配置信息
   */
  async DescribeDeliveryConfig(
    req: DescribeDeliveryConfigRequest,
    cb?: (error: string, rep: DescribeDeliveryConfigResponse) => void
  ): Promise<DescribeDeliveryConfigResponse> {
    return this.request("DescribeDeliveryConfig", req, cb)
  }

  /**
   * 查询某个插件下绑定或未绑定的API分组
   */
  async DescribeGroupsWithPlugin(
    req: DescribeGroupsWithPluginRequest,
    cb?: (error: string, rep: DescribeGroupsWithPluginResponse) => void
  ): Promise<DescribeGroupsWithPluginResponse> {
    return this.request("DescribeGroupsWithPlugin", req, cb)
  }

  /**
   * 启用泳道规则
   */
  async EnableLaneRule(
    req: EnableLaneRuleRequest,
    cb?: (error: string, rep: EnableLaneRuleResponse) => void
  ): Promise<EnableLaneRuleResponse> {
    return this.request("EnableLaneRule", req, cb)
  }

  /**
   * 禁用单元化路由
   */
  async DisableUnitRoute(
    req: DisableUnitRouteRequest,
    cb?: (error: string, rep: DisableUnitRouteResponse) => void
  ): Promise<DisableUnitRouteResponse> {
    return this.request("DisableUnitRoute", req, cb)
  }

  /**
   * 取消关联业务日志配置项和应用
   */
  async DisassociateBusinessLogConfig(
    req: DisassociateBusinessLogConfigRequest,
    cb?: (error: string, rep: DisassociateBusinessLogConfigResponse) => void
  ): Promise<DisassociateBusinessLogConfigResponse> {
    return this.request("DisassociateBusinessLogConfig", req, cb)
  }

  /**
   * 创建配置项
   */
  async CreateConfig(
    req: CreateConfigRequest,
    cb?: (error: string, rep: CreateConfigResponse) => void
  ): Promise<CreateConfigResponse> {
    return this.request("CreateConfig", req, cb)
  }

  /**
   * 新增微服务
   */
  async CreateMicroservice(
    req: CreateMicroserviceRequest,
    cb?: (error: string, rep: CreateMicroserviceResponse) => void
  ): Promise<CreateMicroserviceResponse> {
    return this.request("CreateMicroservice", req, cb)
  }

  /**
   * 批量删除镜像版本
   */
  async DeleteImageTags(
    req: DeleteImageTagsRequest,
    cb?: (error: string, rep: DeleteImageTagsResponse) => void
  ): Promise<DeleteImageTagsResponse> {
    return this.request("DeleteImageTags", req, cb)
  }

  /**
     * TSF上传的程序包存放在腾讯云对象存储（COS）中，通过该API可以获取从COS下载程序包需要的信息，包括包所在的桶、存储路径、鉴权信息等，之后使用COS API（或SDK）进行下载。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     */
  async DescribeDownloadInfo(
    req: DescribeDownloadInfoRequest,
    cb?: (error: string, rep: DescribeDownloadInfoResponse) => void
  ): Promise<DescribeDownloadInfoResponse> {
    return this.request("DescribeDownloadInfo", req, cb)
  }

  /**
   * 获取应用列表
   */
  async DescribeApplications(
    req: DescribeApplicationsRequest,
    cb?: (error: string, rep: DescribeApplicationsResponse) => void
  ): Promise<DescribeApplicationsResponse> {
    return this.request("DescribeApplications", req, cb)
  }

  /**
   * 创建路径重写，并返回路径重写规则信息
   */
  async CreatePathRewritesWithDetailResp(
    req: CreatePathRewritesWithDetailRespRequest,
    cb?: (error: string, rep: CreatePathRewritesWithDetailRespResponse) => void
  ): Promise<CreatePathRewritesWithDetailRespResponse> {
    return this.request("CreatePathRewritesWithDetailResp", req, cb)
  }

  /**
   * 获取部署组详情
   */
  async DescribeContainerGroupDeployInfo(
    req: DescribeContainerGroupDeployInfoRequest,
    cb?: (error: string, rep: DescribeContainerGroupDeployInfoResponse) => void
  ): Promise<DescribeContainerGroupDeployInfoResponse> {
    return this.request("DescribeContainerGroupDeployInfo", req, cb)
  }

  /**
   * 查询网关API监控明细数据（仅单元化网关），非单元化网关使用DescribeApiUseDetail
   */
  async DescribeUnitApiUseDetail(
    req: DescribeUnitApiUseDetailRequest,
    cb?: (error: string, rep: DescribeUnitApiUseDetailResponse) => void
  ): Promise<DescribeUnitApiUseDetailResponse> {
    return this.request("DescribeUnitApiUseDetail", req, cb)
  }

  /**
   * 插件与网关分组/API批量绑定
   */
  async BindPlugin(
    req: BindPluginRequest,
    cb?: (error: string, rep: BindPluginResponse) => void
  ): Promise<BindPluginResponse> {
    return this.request("BindPlugin", req, cb)
  }

  /**
   * 查询某个API分组已绑定的网关部署组信息列表
   */
  async DescribeGroupBindedGateways(
    req: DescribeGroupBindedGatewaysRequest,
    cb?: (error: string, rep: DescribeGroupBindedGatewaysResponse) => void
  ): Promise<DescribeGroupBindedGatewaysResponse> {
    return this.request("DescribeGroupBindedGateways", req, cb)
  }

  /**
   * 删除单元化规则
   */
  async DeleteUnitRule(
    req: DeleteUnitRuleRequest,
    cb?: (error: string, rep: DeleteUnitRuleResponse) => void
  ): Promise<DeleteUnitRuleResponse> {
    return this.request("DeleteUnitRule", req, cb)
  }

  /**
   * 获取应用详情
   */
  async DescribeApplication(
    req: DescribeApplicationRequest,
    cb?: (error: string, rep: DescribeApplicationResponse) => void
  ): Promise<DescribeApplicationResponse> {
    return this.request("DescribeApplication", req, cb)
  }

  /**
   * 更新单元化规则
   */
  async UpdateUnitRule(
    req: UpdateUnitRuleRequest,
    cb?: (error: string, rep: UpdateUnitRuleResponse) => void
  ): Promise<UpdateUnitRuleResponse> {
    return this.request("UpdateUnitRule", req, cb)
  }

  /**
   * 创建单元化规则
   */
  async CreateUnitRule(
    req: CreateUnitRuleRequest,
    cb?: (error: string, rep: CreateUnitRuleResponse) => void
  ): Promise<CreateUnitRuleResponse> {
    return this.request("CreateUnitRule", req, cb)
  }

  /**
   * 更新仓库信息
   */
  async UpdateRepository(
    req: UpdateRepositoryRequest,
    cb?: (error: string, rep: UpdateRepositoryResponse) => void
  ): Promise<UpdateRepositoryResponse> {
    return this.request("UpdateRepository", req, cb)
  }

  /**
   * 查询可用于被导入的命名空间列表
   */
  async DescribeUsableUnitNamespaces(
    req: DescribeUsableUnitNamespacesRequest,
    cb?: (error: string, rep: DescribeUsableUnitNamespacesResponse) => void
  ): Promise<DescribeUsableUnitNamespacesResponse> {
    return this.request("DescribeUsableUnitNamespaces", req, cb)
  }

  /**
   * 查询网关分组监控明细数据
   */
  async DescribeGroupUseDetail(
    req: DescribeGroupUseDetailRequest,
    cb?: (error: string, rep: DescribeGroupUseDetailResponse) => void
  ): Promise<DescribeGroupUseDetailResponse> {
    return this.request("DescribeGroupUseDetail", req, cb)
  }

  /**
   * 查询镜像仓库列表
   */
  async DescribeImageRepository(
    req: DescribeImageRepositoryRequest,
    cb?: (error: string, rep: DescribeImageRepositoryResponse) => void
  ): Promise<DescribeImageRepositoryResponse> {
    return this.request("DescribeImageRepository", req, cb)
  }

  /**
     * 后端服务已经删除这个接口,  API 接口下线处理

重关联业务日志配置
     */
  async ReassociateBusinessLogConfig(
    req: ReassociateBusinessLogConfigRequest,
    cb?: (error: string, rep: ReassociateBusinessLogConfigResponse) => void
  ): Promise<ReassociateBusinessLogConfigResponse> {
    return this.request("ReassociateBusinessLogConfig", req, cb)
  }

  /**
   * 批量更新API超时
   */
  async UpdateApiTimeouts(
    req: UpdateApiTimeoutsRequest,
    cb?: (error: string, rep: UpdateApiTimeoutsResponse) => void
  ): Promise<UpdateApiTimeoutsResponse> {
    return this.request("UpdateApiTimeouts", req, cb)
  }

  /**
   * 批量创建单元化命名空间
   */
  async CreateUnitNamespaces(
    req: CreateUnitNamespacesRequest,
    cb?: (error: string, rep: CreateUnitNamespacesResponse) => void
  ): Promise<CreateUnitNamespacesResponse> {
    return this.request("CreateUnitNamespaces", req, cb)
  }

  /**
   * 更新健康检查配置
   */
  async UpdateHealthCheckSettings(
    req: UpdateHealthCheckSettingsRequest,
    cb?: (error: string, rep: UpdateHealthCheckSettingsResponse) => void
  ): Promise<UpdateHealthCheckSettingsResponse> {
    return this.request("UpdateHealthCheckSettings", req, cb)
  }

  /**
   * 翻页查询任务列表
   */
  async DescribeTaskRecords(
    req: DescribeTaskRecordsRequest,
    cb?: (error: string, rep: DescribeTaskRecordsResponse) => void
  ): Promise<DescribeTaskRecordsResponse> {
    return this.request("DescribeTaskRecords", req, cb)
  }

  /**
   * 手动执行一次任务
   */
  async ExecuteTask(
    req: ExecuteTaskRequest,
    cb?: (error: string, rep: ExecuteTaskResponse) => void
  ): Promise<ExecuteTaskResponse> {
    return this.request("ExecuteTask", req, cb)
  }

  /**
   * 批量导入API至api分组(也支持新建API到分组)
   */
  async CreateGatewayApi(
    req: CreateGatewayApiRequest,
    cb?: (error: string, rep: CreateGatewayApiResponse) => void
  ): Promise<CreateGatewayApiResponse> {
    return this.request("CreateGatewayApi", req, cb)
  }

  /**
   * 查询简单命名空间列表
   */
  async DescribeSimpleNamespaces(
    req: DescribeSimpleNamespacesRequest,
    cb?: (error: string, rep: DescribeSimpleNamespacesResponse) => void
  ): Promise<DescribeSimpleNamespacesResponse> {
    return this.request("DescribeSimpleNamespaces", req, cb)
  }

  /**
   * 创建API限流规则
   */
  async CreateApiRateLimitRule(
    req: CreateApiRateLimitRuleRequest,
    cb?: (error: string, rep: CreateApiRateLimitRuleResponse) => void
  ): Promise<CreateApiRateLimitRuleResponse> {
    return this.request("CreateApiRateLimitRule", req, cb)
  }

  /**
   * 删除微服务
   */
  async DeleteMicroservice(
    req: DeleteMicroserviceRequest,
    cb?: (error: string, rep: DeleteMicroserviceResponse) => void
  ): Promise<DeleteMicroserviceResponse> {
    return this.request("DeleteMicroservice", req, cb)
  }

  /**
   * 删除文件配置项
   */
  async DeleteFileConfig(
    req: DeleteFileConfigRequest,
    cb?: (error: string, rep: DeleteFileConfigResponse) => void
  ): Promise<DeleteFileConfigResponse> {
    return this.request("DeleteFileConfig", req, cb)
  }

  /**
   * 停止容器部署组
   */
  async StopContainerGroup(
    req: StopContainerGroupRequest,
    cb?: (error: string, rep: StopContainerGroupResponse) => void
  ): Promise<StopContainerGroupResponse> {
    return this.request("StopContainerGroup", req, cb)
  }

  /**
   * 查询分组管理日志配置列表
   */
  async DescribeGroupBusinessLogConfigs(
    req: DescribeGroupBusinessLogConfigsRequest,
    cb?: (error: string, rep: DescribeGroupBusinessLogConfigsResponse) => void
  ): Promise<DescribeGroupBusinessLogConfigsResponse> {
    return this.request("DescribeGroupBusinessLogConfigs", req, cb)
  }

  /**
   * 查询部署组相关的发布信息
   */
  async DescribeGroupRelease(
    req: DescribeGroupReleaseRequest,
    cb?: (error: string, rep: DescribeGroupReleaseResponse) => void
  ): Promise<DescribeGroupReleaseResponse> {
    return this.request("DescribeGroupRelease", req, cb)
  }

  /**
   * 查询一键导入API分组任务的状态
   */
  async DescribeCreateGatewayApiStatus(
    req: DescribeCreateGatewayApiStatusRequest,
    cb?: (error: string, rep: DescribeCreateGatewayApiStatusResponse) => void
  ): Promise<DescribeCreateGatewayApiStatusResponse> {
    return this.request("DescribeCreateGatewayApiStatus", req, cb)
  }

  /**
   * 查询单值指标维度
   */
  async DescribeInvocationMetricDataPoint(
    req: DescribeInvocationMetricDataPointRequest,
    cb?: (error: string, rep: DescribeInvocationMetricDataPointResponse) => void
  ): Promise<DescribeInvocationMetricDataPointResponse> {
    return this.request("DescribeInvocationMetricDataPoint", req, cb)
  }

  /**
   * 修改任务
   */
  async ModifyTask(
    req: ModifyTaskRequest,
    cb?: (error: string, rep: ModifyTaskResponse) => void
  ): Promise<ModifyTaskResponse> {
    return this.request("ModifyTask", req, cb)
  }

  /**
   * 更新API限流规则
   */
  async UpdateApiRateLimitRule(
    req: UpdateApiRateLimitRuleRequest,
    cb?: (error: string, rep: UpdateApiRateLimitRuleResponse) => void
  ): Promise<UpdateApiRateLimitRuleResponse> {
    return this.request("UpdateApiRateLimitRule", req, cb)
  }

  /**
   * 分页查询网关分组/API绑定（或未绑定）的插件列表
   */
  async DescribePluginInstances(
    req: DescribePluginInstancesRequest,
    cb?: (error: string, rep: DescribePluginInstancesResponse) => void
  ): Promise<DescribePluginInstancesResponse> {
    return this.request("DescribePluginInstances", req, cb)
  }

  /**
   * API分组批量与网关解绑
   */
  async UnbindApiGroup(
    req: UnbindApiGroupRequest,
    cb?: (error: string, rep: UnbindApiGroupResponse) => void
  ): Promise<UnbindApiGroupResponse> {
    return this.request("UnbindApiGroup", req, cb)
  }

  /**
   * 查询虚拟机部署组云主机列表
   */
  async DescribeGroupInstances(
    req: DescribeGroupInstancesRequest,
    cb?: (error: string, rep: DescribeGroupInstancesResponse) => void
  ): Promise<DescribeGroupInstancesResponse> {
    return this.request("DescribeGroupInstances", req, cb)
  }

  /**
   * 创建泳道规则
   */
  async CreateLaneRule(
    req: CreateLaneRuleRequest,
    cb?: (error: string, rep: CreateLaneRuleResponse) => void
  ): Promise<CreateLaneRuleResponse> {
    return this.request("CreateLaneRule", req, cb)
  }

  /**
   * 删除容器部署组
   */
  async DeleteContainerGroup(
    req: DeleteContainerGroupRequest,
    cb?: (error: string, rep: DeleteContainerGroupResponse) => void
  ): Promise<DeleteContainerGroupResponse> {
    return this.request("DeleteContainerGroup", req, cb)
  }

  /**
   * 查询API 分组信息列表
   */
  async DescribeApiGroups(
    req: DescribeApiGroupsRequest,
    cb?: (error: string, rep: DescribeApiGroupsResponse) => void
  ): Promise<DescribeApiGroupsResponse> {
    return this.request("DescribeApiGroups", req, cb)
  }

  /**
   * 获取集群列表
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 查询日志配置项列表
   */
  async DescribeBusinessLogConfigs(
    req: DescribeBusinessLogConfigsRequest,
    cb?: (error: string, rep: DescribeBusinessLogConfigsResponse) => void
  ): Promise<DescribeBusinessLogConfigsResponse> {
    return this.request("DescribeBusinessLogConfigs", req, cb)
  }

  /**
   * 查询单元化规则列表V2
   */
  async DescribeUnitRulesV2(
    req: DescribeUnitRulesV2Request,
    cb?: (error: string, rep: DescribeUnitRulesV2Response) => void
  ): Promise<DescribeUnitRulesV2Response> {
    return this.request("DescribeUnitRulesV2", req, cb)
  }

  /**
   * 创建公共配置项，并返回配置项详细信息
   */
  async CreatePublicConfigWithDetailResp(
    req: CreatePublicConfigWithDetailRespRequest,
    cb?: (error: string, rep: CreatePublicConfigWithDetailRespResponse) => void
  ): Promise<CreatePublicConfigWithDetailRespResponse> {
    return this.request("CreatePublicConfigWithDetailResp", req, cb)
  }

  /**
   * 创建单元化规则, 并返回详细信息
   */
  async CreateUnitRuleWithDetailResp(
    req: CreateUnitRuleWithDetailRespRequest,
    cb?: (error: string, rep: CreateUnitRuleWithDetailRespResponse) => void
  ): Promise<CreateUnitRuleWithDetailRespResponse> {
    return this.request("CreateUnitRuleWithDetailResp", req, cb)
  }

  /**
   * 发布配置
   */
  async ReleaseConfig(
    req: ReleaseConfigRequest,
    cb?: (error: string, rep: ReleaseConfigResponse) => void
  ): Promise<ReleaseConfigResponse> {
    return this.request("ReleaseConfig", req, cb)
  }

  /**
   * 停止一个工作流批次
   */
  async TerminateTaskFlowBatch(
    req: TerminateTaskFlowBatchRequest,
    cb?: (error: string, rep: TerminateTaskFlowBatchResponse) => void
  ): Promise<TerminateTaskFlowBatchResponse> {
    return this.request("TerminateTaskFlowBatch", req, cb)
  }

  /**
   * 批量更新API限流规则
   */
  async UpdateApiRateLimitRules(
    req: UpdateApiRateLimitRulesRequest,
    cb?: (error: string, rep: UpdateApiRateLimitRulesResponse) => void
  ): Promise<UpdateApiRateLimitRulesResponse> {
    return this.request("UpdateApiRateLimitRules", req, cb)
  }

  /**
   * 获取虚拟机部署组列表
   */
  async DescribeGroups(
    req: DescribeGroupsRequest,
    cb?: (error: string, rep: DescribeGroupsResponse) => void
  ): Promise<DescribeGroupsResponse> {
    return this.request("DescribeGroups", req, cb)
  }

  /**
   * 查询文件配置项发布信息
   */
  async DescribeFileConfigReleases(
    req: DescribeFileConfigReleasesRequest,
    cb?: (error: string, rep: DescribeFileConfigReleasesResponse) => void
  ): Promise<DescribeFileConfigReleasesResponse> {
    return this.request("DescribeFileConfigReleases", req, cb)
  }

  /**
   * 查询仓库列表
   */
  async DescribeRepositories(
    req: DescribeRepositoriesRequest,
    cb?: (error: string, rep: DescribeRepositoriesResponse) => void
  ): Promise<DescribeRepositoriesResponse> {
    return this.request("DescribeRepositories", req, cb)
  }

  /**
   * 停用工作流
   */
  async DisableTaskFlow(
    req: DisableTaskFlowRequest,
    cb?: (error: string, rep: DisableTaskFlowResponse) => void
  ): Promise<DisableTaskFlowResponse> {
    return this.request("DisableTaskFlow", req, cb)
  }

  /**
   * 一键导入API分组
   */
  async CreateAllGatewayApiAsync(
    req: CreateAllGatewayApiAsyncRequest,
    cb?: (error: string, rep: CreateAllGatewayApiAsyncResponse) => void
  ): Promise<CreateAllGatewayApiAsyncResponse> {
    return this.request("CreateAllGatewayApiAsync", req, cb)
  }

  /**
   * 创建仓库
   */
  async CreateRepository(
    req: CreateRepositoryRequest,
    cb?: (error: string, rep: CreateRepositoryResponse) => void
  ): Promise<CreateRepositoryResponse> {
    return this.request("CreateRepository", req, cb)
  }

  /**
   * 查询集群实例
   */
  async DescribeClusterInstances(
    req: DescribeClusterInstancesRequest,
    cb?: (error: string, rep: DescribeClusterInstancesResponse) => void
  ): Promise<DescribeClusterInstancesResponse> {
    return this.request("DescribeClusterInstances", req, cb)
  }

  /**
   * 创建公共配置项
   */
  async CreatePublicConfig(
    req: CreatePublicConfigRequest,
    cb?: (error: string, rep: CreatePublicConfigResponse) => void
  ): Promise<CreatePublicConfigResponse> {
    return this.request("CreatePublicConfig", req, cb)
  }

  /**
   * 网关与API分组批量绑定
   */
  async BindApiGroup(
    req: BindApiGroupRequest,
    cb?: (error: string, rep: BindApiGroupResponse) => void
  ): Promise<BindApiGroupResponse> {
    return this.request("BindApiGroup", req, cb)
  }

  /**
   * 废弃
   */
  async DescribeInovcationIndicators(
    req: DescribeInovcationIndicatorsRequest,
    cb?: (error: string, rep: DescribeInovcationIndicatorsResponse) => void
  ): Promise<DescribeInovcationIndicatorsResponse> {
    return this.request("DescribeInovcationIndicators", req, cb)
  }

  /**
   * 用部署组id获取绑定信息
   */
  async DescribeDeliveryConfigByGroupId(
    req: DescribeDeliveryConfigByGroupIdRequest,
    cb?: (error: string, rep: DescribeDeliveryConfigByGroupIdResponse) => void
  ): Promise<DescribeDeliveryConfigByGroupIdResponse> {
    return this.request("DescribeDeliveryConfigByGroupId", req, cb)
  }

  /**
   * 查询简单部署组列表
   */
  async DescribeSimpleGroups(
    req: DescribeSimpleGroupsRequest,
    cb?: (error: string, rep: DescribeSimpleGroupsResponse) => void
  ): Promise<DescribeSimpleGroupsResponse> {
    return this.request("DescribeSimpleGroups", req, cb)
  }

  /**
   * 查询配置项列表
   */
  async DescribeConfigs(
    req: DescribeConfigsRequest,
    cb?: (error: string, rep: DescribeConfigsResponse) => void
  ): Promise<DescribeConfigsResponse> {
    return this.request("DescribeConfigs", req, cb)
  }

  /**
   * 服务统计页面：接口和服务维度
   */
  async DescribeStatistics(
    req: DescribeStatisticsRequest,
    cb?: (error: string, rep: DescribeStatisticsResponse) => void
  ): Promise<DescribeStatisticsResponse> {
    return this.request("DescribeStatistics", req, cb)
  }

  /**
   * 删除模板
   */
  async DeleteConfigTemplate(
    req: DeleteConfigTemplateRequest,
    cb?: (error: string, rep: DeleteConfigTemplateResponse) => void
  ): Promise<DeleteConfigTemplateResponse> {
    return this.request("DeleteConfigTemplate", req, cb)
  }

  /**
   * 发布文件配置
   */
  async ReleaseFileConfig(
    req: ReleaseFileConfigRequest,
    cb?: (error: string, rep: ReleaseFileConfigResponse) => void
  ): Promise<ReleaseFileConfigResponse> {
    return this.request("ReleaseFileConfig", req, cb)
  }

  /**
   * 删除API限流规则
   */
  async DeleteApiRateLimitRule(
    req: DeleteApiRateLimitRuleRequest,
    cb?: (error: string, rep: DeleteApiRateLimitRuleResponse) => void
  ): Promise<DeleteApiRateLimitRuleResponse> {
    return this.request("DeleteApiRateLimitRule", req, cb)
  }

  /**
   * 查询某个网关绑定的API 分组信息列表
   */
  async DescribeGroupGateways(
    req: DescribeGroupGatewaysRequest,
    cb?: (error: string, rep: DescribeGroupGatewaysResponse) => void
  ): Promise<DescribeGroupGatewaysResponse> {
    return this.request("DescribeGroupGateways", req, cb)
  }

  /**
   * 查询单元化命名空间列表
   */
  async DescribeUnitNamespaces(
    req: DescribeUnitNamespacesRequest,
    cb?: (error: string, rep: DescribeUnitNamespacesResponse) => void
  ): Promise<DescribeUnitNamespacesResponse> {
    return this.request("DescribeUnitNamespaces", req, cb)
  }

  /**
     * 调用该接口和COS的上传接口后，需要调用此接口更新TSF中保存的程序包状态。
调用此接口完成后，才标志上传包流程结束。
     */
  async ModifyUploadInfo(
    req: ModifyUploadInfoRequest,
    cb?: (error: string, rep: ModifyUploadInfoResponse) => void
  ): Promise<ModifyUploadInfoResponse> {
    return this.request("ModifyUploadInfo", req, cb)
  }

  /**
   * 添加云主机节点至TSF集群
   */
  async AddInstances(
    req: AddInstancesRequest,
    cb?: (error: string, rep: AddInstancesResponse) => void
  ): Promise<AddInstancesResponse> {
    return this.request("AddInstances", req, cb)
  }

  /**
   * 修改命名空间
   */
  async ModifyNamespace(
    req: ModifyNamespaceRequest,
    cb?: (error: string, rep: ModifyNamespaceResponse) => void
  ): Promise<ModifyNamespaceResponse> {
    return this.request("ModifyNamespace", req, cb)
  }

  /**
   * 查询配置汇总列表
   */
  async DescribeConfigSummary(
    req: DescribeConfigSummaryRequest,
    cb?: (error: string, rep: DescribeConfigSummaryResponse) => void
  ): Promise<DescribeConfigSummaryResponse> {
    return this.request("DescribeConfigSummary", req, cb)
  }

  /**
   * 查询调用指标数据散点图
   */
  async DescribeInvocationMetricScatterPlot(
    req: DescribeInvocationMetricScatterPlotRequest,
    cb?: (error: string, rep: DescribeInvocationMetricScatterPlotResponse) => void
  ): Promise<DescribeInvocationMetricScatterPlotResponse> {
    return this.request("DescribeInvocationMetricScatterPlot", req, cb)
  }

  /**
   * 创建文件配置项
   */
  async CreateFileConfig(
    req: CreateFileConfigRequest,
    cb?: (error: string, rep: CreateFileConfigResponse) => void
  ): Promise<CreateFileConfigResponse> {
    return this.request("CreateFileConfig", req, cb)
  }

  /**
   * 重新执行任务
   */
  async RedoTask(
    req: RedoTaskRequest,
    cb?: (error: string, rep: RedoTaskResponse) => void
  ): Promise<RedoTaskResponse> {
    return this.request("RedoTask", req, cb)
  }

  /**
   * 获取部署组其他字段-用于前端并发调用
   */
  async DescribeContainerGroupAttribute(
    req: DescribeContainerGroupAttributeRequest,
    cb?: (error: string, rep: DescribeContainerGroupAttributeResponse) => void
  ): Promise<DescribeContainerGroupAttributeResponse> {
    return this.request("DescribeContainerGroupAttribute", req, cb)
  }

  /**
   * 无
   */
  async DescribePkgs(
    req: DescribePkgsRequest,
    cb?: (error: string, rep: DescribePkgsResponse) => void
  ): Promise<DescribePkgsResponse> {
    return this.request("DescribePkgs", req, cb)
  }

  /**
   * 创建API分组
   */
  async CreateApiGroup(
    req: CreateApiGroupRequest,
    cb?: (error: string, rep: CreateApiGroupResponse) => void
  ): Promise<CreateApiGroupResponse> {
    return this.request("CreateApiGroup", req, cb)
  }

  /**
   * 查询数据集列表
   */
  async DescribePrograms(
    req: DescribeProgramsRequest,
    cb?: (error: string, rep: DescribeProgramsResponse) => void
  ): Promise<DescribeProgramsResponse> {
    return this.request("DescribePrograms", req, cb)
  }

  /**
   * 查询公共配置（单条）
   */
  async DescribePublicConfig(
    req: DescribePublicConfigRequest,
    cb?: (error: string, rep: DescribePublicConfigResponse) => void
  ): Promise<DescribePublicConfigResponse> {
    return this.request("DescribePublicConfig", req, cb)
  }

  /**
   * 查询API分组
   */
  async DescribeApiGroup(
    req: DescribeApiGroupRequest,
    cb?: (error: string, rep: DescribeApiGroupResponse) => void
  ): Promise<DescribeApiGroupResponse> {
    return this.request("DescribeApiGroup", req, cb)
  }

  /**
   * 修改应用
   */
  async ModifyApplication(
    req: ModifyApplicationRequest,
    cb?: (error: string, rep: ModifyApplicationResponse) => void
  ): Promise<ModifyApplicationResponse> {
    return this.request("ModifyApplication", req, cb)
  }

  /**
   * 删除路径重写
   */
  async DeletePathRewrites(
    req: DeletePathRewritesRequest,
    cb?: (error: string, rep: DeletePathRewritesResponse) => void
  ): Promise<DeletePathRewritesResponse> {
    return this.request("DeletePathRewrites", req, cb)
  }

  /**
   * 创建虚拟机部署组
   */
  async CreateGroup(
    req: CreateGroupRequest,
    cb?: (error: string, rep: CreateGroupResponse) => void
  ): Promise<CreateGroupResponse> {
    return this.request("CreateGroup", req, cb)
  }

  /**
   * 查询任务最近一次执行状态
   */
  async DescribeTaskLastStatus(
    req: DescribeTaskLastStatusRequest,
    cb?: (error: string, rep: DescribeTaskLastStatusResponse) => void
  ): Promise<DescribeTaskLastStatusResponse> {
    return this.request("DescribeTaskLastStatus", req, cb)
  }

  /**
   * 查询业务日志配置项信息
   */
  async DescribeBusinessLogConfig(
    req: DescribeBusinessLogConfigRequest,
    cb?: (error: string, rep: DescribeBusinessLogConfigResponse) => void
  ): Promise<DescribeBusinessLogConfigResponse> {
    return this.request("DescribeBusinessLogConfig", req, cb)
  }

  /**
   * 查询网关所有分组下Api列表
   */
  async DescribeGatewayAllGroupApis(
    req: DescribeGatewayAllGroupApisRequest,
    cb?: (error: string, rep: DescribeGatewayAllGroupApisResponse) => void
  ): Promise<DescribeGatewayAllGroupApisResponse> {
    return this.request("DescribeGatewayAllGroupApis", req, cb)
  }

  /**
     * 从软件仓库批量删除程序包。
一次最多支持删除1000个包，数量超过1000，返回UpperDeleteLimit错误。
     */
  async DeletePkgs(
    req: DeletePkgsRequest,
    cb?: (error: string, rep: DeletePkgsResponse) => void
  ): Promise<DeletePkgsResponse> {
    return this.request("DeletePkgs", req, cb)
  }

  /**
   * 停止执行中的任务批次， 非运行中的任务不可调用。
   */
  async StopTaskBatch(
    req: StopTaskBatchRequest,
    cb?: (error: string, rep: StopTaskBatchResponse) => void
  ): Promise<StopTaskBatchResponse> {
    return this.request("StopTaskBatch", req, cb)
  }

  /**
   * 查询公共配置项列表
   */
  async DescribePublicConfigs(
    req: DescribePublicConfigsRequest,
    cb?: (error: string, rep: DescribePublicConfigsResponse) => void
  ): Promise<DescribePublicConfigsResponse> {
    return this.request("DescribePublicConfigs", req, cb)
  }

  /**
   * 导入配置
   */
  async DescribeConfigTemplate(
    req: DescribeConfigTemplateRequest,
    cb?: (error: string, rep: DescribeConfigTemplateResponse) => void
  ): Promise<DescribeConfigTemplateResponse> {
    return this.request("DescribeConfigTemplate", req, cb)
  }

  /**
   * 取消关联投递信息和部署组
   */
  async DisassociateKafkaConfig(
    req: DisassociateKafkaConfigRequest,
    cb?: (error: string, rep: DisassociateKafkaConfigResponse) => void
  ): Promise<DisassociateKafkaConfigResponse> {
    return this.request("DisassociateKafkaConfig", req, cb)
  }

  /**
   * 查询调用指标数据变化曲线
   */
  async DescribeInvocationMetricDataCurve(
    req: DescribeInvocationMetricDataCurveRequest,
    cb?: (error: string, rep: DescribeInvocationMetricDataCurveResponse) => void
  ): Promise<DescribeInvocationMetricDataCurveResponse> {
    return this.request("DescribeInvocationMetricDataCurve", req, cb)
  }

  /**
   * 删除容器部署组
   */
  async DeleteGroup(
    req: DeleteGroupRequest,
    cb?: (error: string, rep: DeleteGroupResponse) => void
  ): Promise<DeleteGroupResponse> {
    return this.request("DeleteGroup", req, cb)
  }

  /**
   * 从 TSF 集群中批量移除云主机节点
   */
  async RemoveInstances(
    req: RemoveInstancesRequest,
    cb?: (error: string, rep: RemoveInstancesResponse) => void
  ): Promise<RemoveInstancesResponse> {
    return this.request("RemoveInstances", req, cb)
  }

  /**
   * 绑定解绑tcr仓库
   */
  async OperateApplicationTcrBinding(
    req: OperateApplicationTcrBindingRequest,
    cb?: (error: string, rep: OperateApplicationTcrBindingResponse) => void
  ): Promise<OperateApplicationTcrBindingResponse> {
    return this.request("OperateApplicationTcrBinding", req, cb)
  }

  /**
   * 虚拟机部署组添加实例
   */
  async ExpandGroup(
    req: ExpandGroupRequest,
    cb?: (error: string, rep: ExpandGroupResponse) => void
  ): Promise<ExpandGroupResponse> {
    return this.request("ExpandGroup", req, cb)
  }

  /**
   * 删除任务
   */
  async DeleteTask(
    req: DeleteTaskRequest,
    cb?: (error: string, rep: DeleteTaskResponse) => void
  ): Promise<DeleteTaskResponse> {
    return this.request("DeleteTask", req, cb)
  }

  /**
   * 查询路径重写列表
   */
  async DescribePathRewrites(
    req: DescribePathRewritesRequest,
    cb?: (error: string, rep: DescribePathRewritesResponse) => void
  ): Promise<DescribePathRewritesResponse> {
    return this.request("DescribePathRewrites", req, cb)
  }

  /**
   * 删除泳道
   */
  async DeleteLane(
    req: DeleteLaneRequest,
    cb?: (error: string, rep: DeleteLaneResponse) => void
  ): Promise<DeleteLaneResponse> {
    return this.request("DeleteLane", req, cb)
  }

  /**
   * 更新参数模板
   */
  async UpdateConfigTemplate(
    req: UpdateConfigTemplateRequest,
    cb?: (error: string, rep: UpdateConfigTemplateResponse) => void
  ): Promise<UpdateConfigTemplateResponse> {
    return this.request("UpdateConfigTemplate", req, cb)
  }

  /**
   * 查询配置发布信息
   */
  async DescribeConfigReleases(
    req: DescribeConfigReleasesRequest,
    cb?: (error: string, rep: DescribeConfigReleasesResponse) => void
  ): Promise<DescribeConfigReleasesResponse> {
    return this.request("DescribeConfigReleases", req, cb)
  }

  /**
   * 创建泳道
   */
  async CreateLane(
    req: CreateLaneRequest,
    cb?: (error: string, rep: CreateLaneResponse) => void
  ): Promise<CreateLaneResponse> {
    return this.request("CreateLane", req, cb)
  }

  /**
     * 获取容器事件列表
参数限制

- 当类型是 instance 时，GroupId是必填项
     */
  async DescribeContainerEvents(
    req: DescribeContainerEventsRequest,
    cb?: (error: string, rep: DescribeContainerEventsResponse) => void
  ): Promise<DescribeContainerEventsResponse> {
    return this.request("DescribeContainerEvents", req, cb)
  }

  /**
   * 查询网关监控概览
   */
  async DescribeGatewayMonitorOverview(
    req: DescribeGatewayMonitorOverviewRequest,
    cb?: (error: string, rep: DescribeGatewayMonitorOverviewResponse) => void
  ): Promise<DescribeGatewayMonitorOverviewResponse> {
    return this.request("DescribeGatewayMonitorOverview", req, cb)
  }

  /**
   * 部署虚拟机部署组应用
   */
  async DeployGroup(
    req: DeployGroupRequest,
    cb?: (error: string, rep: DeployGroupResponse) => void
  ): Promise<DeployGroupResponse> {
    return this.request("DeployGroup", req, cb)
  }

  /**
   * 获取多个投递项配置
   */
  async DescribeDeliveryConfigs(
    req: DescribeDeliveryConfigsRequest,
    cb?: (error: string, rep: DescribeDeliveryConfigsResponse) => void
  ): Promise<DescribeDeliveryConfigsResponse> {
    return this.request("DescribeDeliveryConfigs", req, cb)
  }

  /**
   * 更新Api分组
   */
  async UpdateApiGroup(
    req: UpdateApiGroupRequest,
    cb?: (error: string, rep: UpdateApiGroupResponse) => void
  ): Promise<UpdateApiGroupResponse> {
    return this.request("UpdateApiGroup", req, cb)
  }

  /**
   * 停止虚拟机部署组
   */
  async StopGroup(
    req: StopGroupRequest,
    cb?: (error: string, rep: StopGroupResponse) => void
  ): Promise<StopGroupResponse> {
    return this.request("StopGroup", req, cb)
  }

  /**
   * 更新泳道信息
   */
  async ModifyLane(
    req: ModifyLaneRequest,
    cb?: (error: string, rep: ModifyLaneResponse) => void
  ): Promise<ModifyLaneResponse> {
    return this.request("ModifyLane", req, cb)
  }

  /**
   * 启用任务
   */
  async EnableTask(
    req: EnableTaskRequest,
    cb?: (error: string, rep: EnableTaskResponse) => void
  ): Promise<EnableTaskResponse> {
    return this.request("EnableTask", req, cb)
  }

  /**
   * 新增微服务返回id
   */
  async CreateMicroserviceWithDetailResp(
    req: CreateMicroserviceWithDetailRespRequest,
    cb?: (error: string, rep: CreateMicroserviceWithDetailRespResponse) => void
  ): Promise<CreateMicroserviceWithDetailRespResponse> {
    return this.request("CreateMicroserviceWithDetailResp", req, cb)
  }

  /**
   * 修改微服务详情
   */
  async ModifyMicroservice(
    req: ModifyMicroserviceRequest,
    cb?: (error: string, rep: ModifyMicroserviceResponse) => void
  ): Promise<ModifyMicroserviceResponse> {
    return this.request("ModifyMicroservice", req, cb)
  }

  /**
   * 启用工作流
   */
  async EnableTaskFlow(
    req: EnableTaskFlowRequest,
    cb?: (error: string, rep: EnableTaskFlowResponse) => void
  ): Promise<EnableTaskFlowResponse> {
    return this.request("EnableTaskFlow", req, cb)
  }

  /**
   * 查询单元化规则详情
   */
  async DescribeUnitRule(
    req: DescribeUnitRuleRequest,
    cb?: (error: string, rep: DescribeUnitRuleResponse) => void
  ): Promise<DescribeUnitRuleResponse> {
    return this.request("DescribeUnitRule", req, cb)
  }

  /**
   * 创建路径重写
   */
  async CreatePathRewrites(
    req: CreatePathRewritesRequest,
    cb?: (error: string, rep: CreatePathRewritesResponse) => void
  ): Promise<CreatePathRewritesResponse> {
    return this.request("CreatePathRewrites", req, cb)
  }

  /**
   * 删除Api分组
   */
  async DeleteApiGroup(
    req: DeleteApiGroupRequest,
    cb?: (error: string, rep: DeleteApiGroupResponse) => void
  ): Promise<DeleteApiGroupResponse> {
    return this.request("DeleteApiGroup", req, cb)
  }

  /**
   * 创建应用
   */
  async CreateApplication(
    req: CreateApplicationRequest,
    cb?: (error: string, rep: CreateApplicationResponse) => void
  ): Promise<CreateApplicationResponse> {
    return this.request("CreateApplication", req, cb)
  }

  /**
   * 修改路径重写
   */
  async ModifyPathRewrite(
    req: ModifyPathRewriteRequest,
    cb?: (error: string, rep: ModifyPathRewriteResponse) => void
  ): Promise<ModifyPathRewriteResponse> {
    return this.request("ModifyPathRewrite", req, cb)
  }

  /**
   * 重新执行任务批次
   */
  async RedoTaskBatch(
    req: RedoTaskBatchRequest,
    cb?: (error: string, rep: RedoTaskBatchResponse) => void
  ): Promise<RedoTaskBatchResponse> {
    return this.request("RedoTaskBatch", req, cb)
  }

  /**
   * 发布Api分组
   */
  async ReleaseApiGroup(
    req: ReleaseApiGroupRequest,
    cb?: (error: string, rep: ReleaseApiGroupResponse) => void
  ): Promise<ReleaseApiGroupResponse> {
    return this.request("ReleaseApiGroup", req, cb)
  }

  /**
   * 关联日志配置项到应用
   */
  async AssociateBusinessLogConfig(
    req: AssociateBusinessLogConfigRequest,
    cb?: (error: string, rep: AssociateBusinessLogConfigResponse) => void
  ): Promise<AssociateBusinessLogConfigResponse> {
    return this.request("AssociateBusinessLogConfig", req, cb)
  }

  /**
   * 查询公共配置发布历史
   */
  async DescribePublicConfigReleaseLogs(
    req: DescribePublicConfigReleaseLogsRequest,
    cb?: (error: string, rep: DescribePublicConfigReleaseLogsResponse) => void
  ): Promise<DescribePublicConfigReleaseLogsResponse> {
    return this.request("DescribePublicConfigReleaseLogs", req, cb)
  }

  /**
   * 查询配置发布历史
   */
  async DescribeConfigReleaseLogs(
    req: DescribeConfigReleaseLogsRequest,
    cb?: (error: string, rep: DescribeConfigReleaseLogsResponse) => void
  ): Promise<DescribeConfigReleaseLogsResponse> {
    return this.request("DescribeConfigReleaseLogs", req, cb)
  }

  /**
   * 查询简单应用列表
   */
  async DescribeSimpleApplications(
    req: DescribeSimpleApplicationsRequest,
    cb?: (error: string, rep: DescribeSimpleApplicationsResponse) => void
  ): Promise<DescribeSimpleApplicationsResponse> {
    return this.request("DescribeSimpleApplications", req, cb)
  }

  /**
   * 查询路径重写
   */
  async DescribePathRewrite(
    req: DescribePathRewriteRequest,
    cb?: (error: string, rep: DescribePathRewriteResponse) => void
  ): Promise<DescribePathRewriteResponse> {
    return this.request("DescribePathRewrite", req, cb)
  }

  /**
   * 执行一次工作流
   */
  async ExecuteTaskFlow(
    req: ExecuteTaskFlowRequest,
    cb?: (error: string, rep: ExecuteTaskFlowResponse) => void
  ): Promise<ExecuteTaskFlowResponse> {
    return this.request("ExecuteTaskFlow", req, cb)
  }

  /**
   * 查询微服务详情
   */
  async DescribeMicroservice(
    req: DescribeMicroserviceRequest,
    cb?: (error: string, rep: DescribeMicroserviceResponse) => void
  ): Promise<DescribeMicroserviceResponse> {
    return this.request("DescribeMicroservice", req, cb)
  }

  /**
     * serverless 能力已下线。下线对应接口。

删除Serverless部署组
     */
  async DeleteServerlessGroup(
    req: DeleteServerlessGroupRequest,
    cb?: (error: string, rep: DeleteServerlessGroupResponse) => void
  ): Promise<DeleteServerlessGroupResponse> {
    return this.request("DeleteServerlessGroup", req, cb)
  }

  /**
   * 重新执行在某个节点上执行任务。
   */
  async RedoTaskExecute(
    req: RedoTaskExecuteRequest,
    cb?: (error: string, rep: RedoTaskExecuteResponse) => void
  ): Promise<RedoTaskExecuteResponse> {
    return this.request("RedoTaskExecute", req, cb)
  }

  /**
   * 查询java实例jvm监控数据,返回数据可选
   */
  async DescribeJvmMonitor(
    req: DescribeJvmMonitorRequest,
    cb?: (error: string, rep: DescribeJvmMonitorResponse) => void
  ): Promise<DescribeJvmMonitorResponse> {
    return this.request("DescribeJvmMonitor", req, cb)
  }

  /**
   * 查询工作流最新一个批次的状态信息
   */
  async DescribeFlowLastBatchState(
    req: DescribeFlowLastBatchStateRequest,
    cb?: (error: string, rep: DescribeFlowLastBatchStateResponse) => void
  ): Promise<DescribeFlowLastBatchStateResponse> {
    return this.request("DescribeFlowLastBatchState", req, cb)
  }

  /**
   * 发布配置,并且返回配置 ID
   */
  async ReleaseConfigWithDetailResp(
    req: ReleaseConfigWithDetailRespRequest,
    cb?: (error: string, rep: ReleaseConfigWithDetailRespResponse) => void
  ): Promise<ReleaseConfigWithDetailRespResponse> {
    return this.request("ReleaseConfigWithDetailResp", req, cb)
  }

  /**
   * 删除仓库
   */
  async DeleteRepository(
    req: DeleteRepositoryRequest,
    cb?: (error: string, rep: DeleteRepositoryResponse) => void
  ): Promise<DeleteRepositoryResponse> {
    return this.request("DeleteRepository", req, cb)
  }

  /**
   * 停用任务
   */
  async DisableTask(
    req: DisableTaskRequest,
    cb?: (error: string, rep: DisableTaskResponse) => void
  ): Promise<DisableTaskResponse> {
    return this.request("DisableTask", req, cb)
  }

  /**
   * 启动容器部署组
   */
  async StartContainerGroup(
    req: StartContainerGroupRequest,
    cb?: (error: string, rep: StartContainerGroupResponse) => void
  ): Promise<StartContainerGroupResponse> {
    return this.request("StartContainerGroup", req, cb)
  }

  /**
   * 业务日志搜索
   */
  async SearchBusinessLog(
    req: SearchBusinessLogRequest,
    cb?: (error: string, rep: SearchBusinessLogResponse) => void
  ): Promise<SearchBusinessLogResponse> {
    return this.request("SearchBusinessLog", req, cb)
  }

  /**
   * 部署容器应用-更新
   */
  async DeployContainerGroup(
    req: DeployContainerGroupRequest,
    cb?: (error: string, rep: DeployContainerGroupResponse) => void
  ): Promise<DeployContainerGroupResponse> {
    return this.request("DeployContainerGroup", req, cb)
  }

  /**
   * 更新数据集
   */
  async ModifyProgram(
    req: ModifyProgramRequest,
    cb?: (error: string, rep: ModifyProgramResponse) => void
  ): Promise<ModifyProgramResponse> {
    return this.request("ModifyProgram", req, cb)
  }

  /**
   * 标准输出日志搜索
   */
  async SearchStdoutLog(
    req: SearchStdoutLogRequest,
    cb?: (error: string, rep: SearchStdoutLogResponse) => void
  ): Promise<SearchStdoutLogResponse> {
    return this.request("SearchStdoutLog", req, cb)
  }

  /**
   * 批量删除API
   */
  async DeleteGatewayApi(
    req: DeleteGatewayApiRequest,
    cb?: (error: string, rep: DeleteGatewayApiResponse) => void
  ): Promise<DeleteGatewayApiResponse> {
    return this.request("DeleteGatewayApi", req, cb)
  }

  /**
   * 创建工作流
   */
  async CreateTaskFlow(
    req: CreateTaskFlowRequest,
    cb?: (error: string, rep: CreateTaskFlowResponse) => void
  ): Promise<CreateTaskFlowResponse> {
    return this.request("CreateTaskFlow", req, cb)
  }

  /**
   * 查询虚拟机部署组详情
   */
  async DescribeGroup(
    req: DescribeGroupRequest,
    cb?: (error: string, rep: DescribeGroupResponse) => void
  ): Promise<DescribeGroupResponse> {
    return this.request("DescribeGroup", req, cb)
  }

  /**
   * 删除应用
   */
  async DeleteApplication(
    req: DeleteApplicationRequest,
    cb?: (error: string, rep: DeleteApplicationResponse) => void
  ): Promise<DeleteApplicationResponse> {
    return this.request("DeleteApplication", req, cb)
  }

  /**
   * 查询API限流规则
   */
  async DescribeApiRateLimitRules(
    req: DescribeApiRateLimitRulesRequest,
    cb?: (error: string, rep: DescribeApiRateLimitRulesResponse) => void
  ): Promise<DescribeApiRateLimitRulesResponse> {
    return this.request("DescribeApiRateLimitRules", req, cb)
  }

  /**
   * 删除命名空间
   */
  async DeleteNamespace(
    req: DeleteNamespaceRequest,
    cb?: (error: string, rep: DeleteNamespaceResponse) => void
  ): Promise<DeleteNamespaceResponse> {
    return this.request("DeleteNamespace", req, cb)
  }

  /**
   * TSF基本资源信息概览接口
   */
  async DescribeBasicResourceUsage(
    req: DescribeBasicResourceUsageRequest,
    cb?: (error: string, rep: DescribeBasicResourceUsageResponse) => void
  ): Promise<DescribeBasicResourceUsageResponse> {
    return this.request("DescribeBasicResourceUsage", req, cb)
  }

  /**
   * 删除配置项
   */
  async DeleteConfig(
    req: DeleteConfigRequest,
    cb?: (error: string, rep: DeleteConfigResponse) => void
  ): Promise<DeleteConfigResponse> {
    return this.request("DeleteConfig", req, cb)
  }

  /**
   * 发布公共配置
   */
  async ReleasePublicConfig(
    req: ReleasePublicConfigRequest,
    cb?: (error: string, rep: ReleasePublicConfigResponse) => void
  ): Promise<ReleasePublicConfigResponse> {
    return this.request("ReleasePublicConfig", req, cb)
  }

  /**
   * 删除单元化命名空间
   */
  async DeleteUnitNamespaces(
    req: DeleteUnitNamespacesRequest,
    cb?: (error: string, rep: DeleteUnitNamespacesResponse) => void
  ): Promise<DeleteUnitNamespacesResponse> {
    return this.request("DeleteUnitNamespaces", req, cb)
  }

  /**
   * 无
   */
  async DescribeInstances(
    req: DescribeInstancesRequest,
    cb?: (error: string, rep: DescribeInstancesResponse) => void
  ): Promise<DescribeInstancesResponse> {
    return this.request("DescribeInstances", req, cb)
  }

  /**
   * 下线Api分组
   */
  async DraftApiGroup(
    req: DraftApiGroupRequest,
    cb?: (error: string, rep: DraftApiGroupResponse) => void
  ): Promise<DraftApiGroupResponse> {
    return this.request("DraftApiGroup", req, cb)
  }

  /**
   * 禁用泳道规则
   */
  async DisableLaneRule(
    req: DisableLaneRuleRequest,
    cb?: (error: string, rep: DisableLaneRuleResponse) => void
  ): Promise<DisableLaneRuleResponse> {
    return this.request("DisableLaneRule", req, cb)
  }

  /**
   * 查询API分组下的Api列表信息
   */
  async DescribeGatewayApis(
    req: DescribeGatewayApisRequest,
    cb?: (error: string, rep: DescribeGatewayApisResponse) => void
  ): Promise<DescribeGatewayApisResponse> {
    return this.request("DescribeGatewayApis", req, cb)
  }

  /**
   * 对执行失败的任务批次执行续跑
   */
  async ContinueRunFailedTaskBatch(
    req: ContinueRunFailedTaskBatchRequest,
    cb?: (error: string, rep: ContinueRunFailedTaskBatchResponse) => void
  ): Promise<ContinueRunFailedTaskBatchResponse> {
    return this.request("ContinueRunFailedTaskBatch", req, cb)
  }

  /**
   * 查询API 版本
   */
  async DescribeApiVersions(
    req: DescribeApiVersionsRequest,
    cb?: (error: string, rep: DescribeApiVersionsResponse) => void
  ): Promise<DescribeApiVersionsResponse> {
    return this.request("DescribeApiVersions", req, cb)
  }

  /**
   * 启用或禁用API
   */
  async ChangeApiUsableStatus(
    req: ChangeApiUsableStatusRequest,
    cb?: (error: string, rep: ChangeApiUsableStatusResponse) => void
  ): Promise<ChangeApiUsableStatusResponse> {
    return this.request("ChangeApiUsableStatus", req, cb)
  }

  /**
   * 更新部署组信息
   */
  async ModifyGroup(
    req: ModifyGroupRequest,
    cb?: (error: string, rep: ModifyGroupResponse) => void
  ): Promise<ModifyGroupResponse> {
    return this.request("ModifyGroup", req, cb)
  }

  /**
   * （已废弃，请使用 CreateGroup 和 DeployContainerGroup 创建和部署容器部署组）创建容器部署组
   */
  async CreateContainGroup(
    req: CreateContainGroupRequest,
    cb?: (error: string, rep: CreateContainGroupResponse) => void
  ): Promise<CreateContainGroupResponse> {
    return this.request("CreateContainGroup", req, cb)
  }

  /**
   * 查询生效的单元化规则
   */
  async DescribeEnabledUnitRule(
    req: DescribeEnabledUnitRuleRequest,
    cb?: (error: string, rep: DescribeEnabledUnitRuleResponse) => void
  ): Promise<DescribeEnabledUnitRuleResponse> {
    return this.request("DescribeEnabledUnitRule", req, cb)
  }

  /**
   * 创建数据集
   */
  async CreateProgram(
    req: CreateProgramRequest,
    cb?: (error: string, rep: CreateProgramResponse) => void
  ): Promise<CreateProgramResponse> {
    return this.request("CreateProgram", req, cb)
  }

  /**
   * 查询仓库信息
   */
  async DescribeRepository(
    req: DescribeRepositoryRequest,
    cb?: (error: string, rep: DescribeRepositoryResponse) => void
  ): Promise<DescribeRepositoryResponse> {
    return this.request("DescribeRepository", req, cb)
  }

  /**
   * 查询维度
   */
  async DescribeInvocationMetricDataDimension(
    req: DescribeInvocationMetricDataDimensionRequest,
    cb?: (error: string, rep: DescribeInvocationMetricDataDimensionResponse) => void
  ): Promise<DescribeInvocationMetricDataDimensionResponse> {
    return this.request("DescribeInvocationMetricDataDimension", req, cb)
  }

  /**
   * 获取应用列表其它字段，如实例数量信息等
   */
  async DescribeApplicationAttribute(
    req: DescribeApplicationAttributeRequest,
    cb?: (error: string, rep: DescribeApplicationAttributeResponse) => void
  ): Promise<DescribeApplicationAttributeResponse> {
    return this.request("DescribeApplicationAttribute", req, cb)
  }

  /**
   * 撤回已发布的配置
   */
  async RevocationConfig(
    req: RevocationConfigRequest,
    cb?: (error: string, rep: RevocationConfigResponse) => void
  ): Promise<RevocationConfigResponse> {
    return this.request("RevocationConfig", req, cb)
  }

  /**
   * 查询泳道规则列表
   */
  async DescribeLaneRules(
    req: DescribeLaneRulesRequest,
    cb?: (error: string, rep: DescribeLaneRulesResponse) => void
  ): Promise<DescribeLaneRulesResponse> {
    return this.request("DescribeLaneRules", req, cb)
  }

  /**
   * 更新泳道规则
   */
  async ModifyLaneRule(
    req: ModifyLaneRuleRequest,
    cb?: (error: string, rep: ModifyLaneRuleResponse) => void
  ): Promise<ModifyLaneRuleResponse> {
    return this.request("ModifyLaneRule", req, cb)
  }

  /**
   * 查询group发布的配置
   */
  async DescribeReleasedConfig(
    req: DescribeReleasedConfigRequest,
    cb?: (error: string, rep: DescribeReleasedConfigResponse) => void
  ): Promise<DescribeReleasedConfigResponse> {
    return this.request("DescribeReleasedConfig", req, cb)
  }

  /**
   * 查询公共配置发布信息
   */
  async DescribePublicConfigReleases(
    req: DescribePublicConfigReleasesRequest,
    cb?: (error: string, rep: DescribePublicConfigReleasesResponse) => void
  ): Promise<DescribePublicConfigReleasesResponse> {
    return this.request("DescribePublicConfigReleases", req, cb)
  }

  /**
   * 关联投递配置到部署组
   */
  async AssociateConfigWithGroup(
    req: AssociateConfigWithGroupRequest,
    cb?: (error: string, rep: AssociateConfigWithGroupResponse) => void
  ): Promise<AssociateConfigWithGroupResponse> {
    return this.request("AssociateConfigWithGroup", req, cb)
  }

  /**
   * 查询泳道列表
   */
  async DescribeLanes(
    req: DescribeLanesRequest,
    cb?: (error: string, rep: DescribeLanesResponse) => void
  ): Promise<DescribeLanesResponse> {
    return this.request("DescribeLanes", req, cb)
  }

  /**
   * 查询网关API监控明细数据
   */
  async DescribeApiUseDetail(
    req: DescribeApiUseDetailRequest,
    cb?: (error: string, rep: DescribeApiUseDetailResponse) => void
  ): Promise<DescribeApiUseDetailResponse> {
    return this.request("DescribeApiUseDetail", req, cb)
  }

  /**
     * TSF会将软件包上传到腾讯云对象存储（COS）。调用此接口获取上传信息，如目标地域，桶，包Id，存储路径，鉴权信息等，之后请使用COS API（或SDK）进行上传。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     */
  async DescribeUploadInfo(
    req: DescribeUploadInfoRequest,
    cb?: (error: string, rep: DescribeUploadInfoResponse) => void
  ): Promise<DescribeUploadInfoResponse> {
    return this.request("DescribeUploadInfo", req, cb)
  }

  /**
   * 启用单元化路由
   */
  async EnableUnitRoute(
    req: EnableUnitRouteRequest,
    cb?: (error: string, rep: EnableUnitRouteResponse) => void
  ): Promise<EnableUnitRouteResponse> {
    return this.request("EnableUnitRoute", req, cb)
  }

  /**
   * 更新API
   */
  async UpdateGatewayApi(
    req: UpdateGatewayApiRequest,
    cb?: (error: string, rep: UpdateGatewayApiResponse) => void
  ): Promise<UpdateGatewayApiResponse> {
    return this.request("UpdateGatewayApi", req, cb)
  }

  /**
   * 创建API限流规则,并返回规则信息
   */
  async CreateApiRateLimitRuleWithDetailResp(
    req: CreateApiRateLimitRuleWithDetailRespRequest,
    cb?: (error: string, rep: CreateApiRateLimitRuleWithDetailRespResponse) => void
  ): Promise<CreateApiRateLimitRuleWithDetailRespResponse> {
    return this.request("CreateApiRateLimitRuleWithDetailResp", req, cb)
  }

  /**
   * 下线部署组所有机器实例
   */
  async ShrinkGroup(
    req: ShrinkGroupRequest,
    cb?: (error: string, rep: ShrinkGroupResponse) => void
  ): Promise<ShrinkGroupResponse> {
    return this.request("ShrinkGroup", req, cb)
  }

  /**
   * 资源任务的执行状态描述接口
   */
  async DescribeResourceTaskStatus(
    req: DescribeResourceTaskStatusRequest,
    cb?: (error: string, rep: DescribeResourceTaskStatusResponse) => void
  ): Promise<DescribeResourceTaskStatusResponse> {
    return this.request("DescribeResourceTaskStatus", req, cb)
  }

  /**
   * 启动分组
   */
  async StartGroup(
    req: StartGroupRequest,
    cb?: (error: string, rep: StartGroupResponse) => void
  ): Promise<StartGroupResponse> {
    return this.request("StartGroup", req, cb)
  }

  /**
   * 修改容器部署组
   */
  async ModifyContainerGroup(
    req: ModifyContainerGroupRequest,
    cb?: (error: string, rep: ModifyContainerGroupResponse) => void
  ): Promise<ModifyContainerGroupResponse> {
    return this.request("ModifyContainerGroup", req, cb)
  }

  /**
   * 查询单元化规则列表
   */
  async DescribeUnitRules(
    req: DescribeUnitRulesRequest,
    cb?: (error: string, rep: DescribeUnitRulesResponse) => void
  ): Promise<DescribeUnitRulesResponse> {
    return this.request("DescribeUnitRules", req, cb)
  }
}
