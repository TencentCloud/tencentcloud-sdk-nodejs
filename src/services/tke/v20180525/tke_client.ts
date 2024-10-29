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
  DescribeClusterEndpointVipStatusRequest,
  DescribeClusterSecurityRequest,
  EksCiVolume,
  GetTkeAppChartListRequest,
  DescribeEdgeCVMInstancesRequest,
  InstallLogAgentRequest,
  DescribeClusterEndpointVipStatusResponse,
  DeleteClusterResponse,
  ContainerState,
  CreateClusterRouteTableResponse,
  SubnetInfos,
  ModifyClusterImageResponse,
  CbsVolume,
  DescribeAddonResponse,
  DescribeEKSClustersRequest,
  DescribePrometheusInstancesOverviewRequest,
  ServiceAccountAuthenticationOptions,
  ModifyOpenPolicyListResponse,
  Step,
  SwitchInfo,
  CreateClusterNodePoolRequest,
  UpgradeClusterReleaseRequest,
  Addon,
  OpenPolicyInfo,
  DescribeEdgeClusterUpgradeInfoRequest,
  RunInstancesForNode,
  DisableVpcCniNetworkTypeResponse,
  PodDeductionRate,
  DescribeClusterControllersResponse,
  DescribeExistedInstancesRequest,
  DeletePrometheusClusterAgentRequest,
  ClusterLevelChangeRecord,
  ModifyPrometheusAlertRuleResponse,
  DescribeEKSContainerInstanceEventResponse,
  RouteTableInfo,
  EnableClusterDeletionProtectionResponse,
  ClusterAsGroup,
  PrometheusTempModify,
  EnableClusterAuditResponse,
  CreateBackupStorageLocationResponse,
  KubeJarvisStateDiagnostic,
  EnvironmentVariable,
  UpdateImageCacheRequest,
  ManuallyAdded,
  Tag,
  DescribePrometheusAgentInstancesRequest,
  ModifyClusterAttributeRequest,
  DescribeClusterRoutesResponse,
  DescribeClustersRequest,
  UpgradeClusterInstancesRequest,
  ExtensionAddon,
  DescribeAddonValuesRequest,
  DescribeResourceUsageRequest,
  PrometheusRecordRuleYamlItem,
  Label,
  PodLimitsByType,
  DeletePrometheusTemplateSyncRequest,
  DisableVpcCniNetworkTypeRequest,
  DescribeClusterReleaseDetailsResponse,
  AutoscalingAdded,
  SyncPrometheusTempResponse,
  CreateEdgeLogConfigRequest,
  CreatePrometheusDashboardResponse,
  CancelClusterReleaseRequest,
  DescribeTKEEdgeClusterStatusResponse,
  ModifyClusterAsGroupOptionAttributeRequest,
  DescribeClusterStatusRequest,
  CreateBackupStorageLocationRequest,
  PrometheusConfigItem,
  DeleteClusterNodePoolRequest,
  DescribeEKSClusterCredentialResponse,
  CheckInstancesUpgradeAbleRequest,
  ModifyPrometheusTemplateRequest,
  DescribeEncryptionStatusRequest,
  DeleteClusterVirtualNodePoolRequest,
  DescribeImageCachesRequest,
  DeleteAddonRequest,
  DescribeEdgeAvailableExtraArgsRequest,
  ExistedInstance,
  CreateReservedInstancesResponse,
  AddNodeToNodePoolResponse,
  DescribePostNodeResourcesRequest,
  PrometheusInstancesOverview,
  DescribePrometheusInstanceInitStatusResponse,
  DisableEventPersistenceResponse,
  UpdateEKSContainerInstanceRequest,
  CUDNN,
  DescribeReservedInstancesResponse,
  KubeJarvisStateCatalogue,
  ModifyClusterTagsResponse,
  Event,
  Exec,
  DescribeEdgeAvailableExtraArgsResponse,
  CreatePrometheusRecordRuleYamlRequest,
  DescribeEnableVpcCniProgressRequest,
  Instance,
  ModifyClusterAttributeResponse,
  KubeJarvisStateInspectionResult,
  CreateEksLogConfigRequest,
  CreateClusterResponse,
  PrometheusClusterAgentPodConfig,
  RunSecurityServiceEnabled,
  ImageCache,
  DeletePrometheusAlertRuleResponse,
  DescribeClusterPendingReleasesRequest,
  DeletePrometheusConfigResponse,
  DescribeEksContainerInstanceLogRequest,
  CreatePrometheusRecordRuleYamlResponse,
  DescribeClusterInstancesRequest,
  PodLimitsInstance,
  ModifyPrometheusTempRequest,
  ControllerStatus,
  DeletePrometheusTempSyncResponse,
  DescribePrometheusRecordRulesRequest,
  VirtualNodePool,
  DescribeTKEEdgeClusterStatusRequest,
  AcquireClusterAdminRoleResponse,
  DescribeEdgeClusterInstancesResponse,
  UpdateEdgeClusterVersionRequest,
  GetTkeAppChartListResponse,
  DescribePrometheusTemplateSyncRequest,
  DescribeExternalNodeSupportConfigRequest,
  UpgradeAbleInstancesItem,
  ModifyClusterImageRequest,
  UpgradeClusterInstancesResponse,
  CustomDriver,
  DescribeClusterAsGroupOptionRequest,
  DescribePrometheusAgentInstancesResponse,
  AddExistedInstancesRequest,
  ClusterAsGroupOption,
  DeletePrometheusTempResponse,
  DescribeClusterNodePoolsRequest,
  DescribeClusterRouteTablesRequest,
  DeleteClusterRouteRequest,
  CreateCLSLogConfigResponse,
  DeleteClusterEndpointRequest,
  DeleteClusterVirtualNodeRequest,
  DescribeClusterNodePoolDetailRequest,
  DescribePrometheusTempSyncRequest,
  DescribePrometheusGlobalConfigResponse,
  KubeJarvisStateInspectionResultsItem,
  DescribeClusterReleaseHistoryResponse,
  DescribeImagesRequest,
  UninstallEdgeLogAgentResponse,
  DescribeSupportedRuntimeRequest,
  AddVpcCniSubnetsRequest,
  DescribePrometheusAlertHistoryResponse,
  ExistedInstancesPara,
  DescribeClusterAsGroupOptionResponse,
  CreateTKEEdgeClusterResponse,
  DescribeEdgeClusterExtraArgsResponse,
  ResourceDeleteOption,
  ListClusterInspectionResultsResponse,
  InstallEdgeLogAgentRequest,
  CheckEdgeClusterCIDRRequest,
  CreateImageCacheRequest,
  UpdateClusterVersionRequest,
  ModifyOpenPolicyListRequest,
  Probe,
  NodeCountSummary,
  EdgeCluster,
  DescribeClusterNodePoolDetailResponse,
  DeletePrometheusConfigRequest,
  DescribeEKSContainerInstanceEventRequest,
  ScaleOutClusterMasterResponse,
  DeleteClusterAsGroupsRequest,
  Toleration,
  CreateEKSContainerInstancesResponse,
  DeleteEdgeCVMInstancesResponse,
  DescribeIPAMDRequest,
  DescribeClusterKubeconfigResponse,
  DescribeClusterCommonNamesRequest,
  NfsVolume,
  RIUtilizationDetail,
  DescribeBatchModifyTagsStatusResponse,
  PrometheusNotification,
  DescribeRIUtilizationDetailRequest,
  ClusterCondition,
  BackupStorageLocation,
  DescribeEKSClustersResponse,
  VolumeMount,
  DeleteClusterRequest,
  DescribeTKEEdgeClustersResponse,
  KubeJarvisStateResultObjInfo,
  DescribeAvailableTKEEdgeVersionRequest,
  OpenConstraintInfo,
  DescribeClusterInspectionResultsOverviewRequest,
  ModifyPrometheusAlertPolicyRequest,
  ForwardApplicationRequestV3Request,
  DescribeOpenPolicyListRequest,
  PrometheusTemplateSyncTarget,
  DescribePrometheusTemplatesRequest,
  DescribePrometheusAlertPolicyResponse,
  EnableVpcCniNetworkTypeResponse,
  DescribePrometheusAlertRuleResponse,
  EksCiRegionInfo,
  DescribeEdgeClusterInstancesRequest,
  DisableClusterAuditRequest,
  SyncPrometheusTempRequest,
  DeleteBackupStorageLocationResponse,
  DescribePrometheusGlobalNotificationResponse,
  DescribeBatchModifyTagsStatusRequest,
  HttpGet,
  ResourceUsage,
  CreateClusterVirtualNodeRequest,
  DescribeTKEEdgeClustersRequest,
  DescribePrometheusAlertHistoryRequest,
  SetNodePoolNodeProtectionResponse,
  DeletePrometheusAlertPolicyRequest,
  ModifyPrometheusAgentExternalLabelsResponse,
  RollbackClusterReleaseRequest,
  DescribePodDeductionRateResponse,
  DeleteClusterInstancesRequest,
  UpgradeNodeResetParam,
  DriverVersion,
  CreateClusterInstancesRequest,
  DeleteBackupStorageLocationRequest,
  UninstallClusterReleaseResponse,
  ClusterCIDRSettings,
  Taint,
  ReservedInstanceUtilizationRate,
  ModifyNodePoolInstanceTypesRequest,
  AddClusterCIDRRequest,
  OIDCConfigAuthenticationOptions,
  CreateClusterRequest,
  CreateEdgeCVMInstancesRequest,
  DescribeClusterReleaseHistoryRequest,
  NodePoolOption,
  DescribeEdgeClusterExtraArgsRequest,
  DescribeClustersResponse,
  DeleteClusterVirtualNodeResponse,
  PrometheusAgentInfo,
  CreateEdgeCVMInstancesResponse,
  DescribeEdgeLogSwitchesResponse,
  CreatePrometheusClusterAgentResponse,
  DescribePrometheusTemplatesResponse,
  UpdateEKSContainerInstanceResponse,
  DnsServerConf,
  EksCluster,
  ModifyNodePoolInstanceTypesResponse,
  PrometheusAlertManagerConfig,
  GetClusterLevelPriceResponse,
  DescribeResourceUsageResponse,
  RenewReservedInstancesResponse,
  EdgeClusterInternalLB,
  ReservedInstanceScope,
  DescribeAvailableClusterVersionRequest,
  UpgradeClusterReleaseResponse,
  DescribePrometheusAlertPolicyRequest,
  DeleteClusterAsGroupsResponse,
  ModifyClusterRuntimeConfigRequest,
  RegionInstance,
  DescribePrometheusConfigRequest,
  DescribeEdgeLogSwitchesRequest,
  EdgeClusterAdvancedSettings,
  DescribeExternalNodeSupportConfigResponse,
  EnableEncryptionProtectionResponse,
  DeletePrometheusTemplateRequest,
  DeletePrometheusRecordRuleYamlResponse,
  DescribePrometheusTempSyncResponse,
  CreatePrometheusConfigResponse,
  DescribeClusterEndpointStatusResponse,
  RunAutomationServiceEnabled,
  AddExistedInstancesResponse,
  RestartEKSContainerInstancesResponse,
  DisableClusterDeletionProtectionResponse,
  EnableVpcCniNetworkTypeRequest,
  Container,
  CreateClusterEndpointRequest,
  DeletePrometheusClusterAgentResponse,
  DescribePrometheusInstanceResponse,
  Capabilities,
  UpdateTKEEdgeClusterRequest,
  DescribeOpenPolicyListResponse,
  CreateClusterInstancesResponse,
  DeleteReservedInstancesResponse,
  DescribeLogSwitchesResponse,
  ModifyClusterVirtualNodePoolResponse,
  SuperNodeResource,
  InstanceUpgradeClusterStatus,
  DescribeClusterRoutesRequest,
  DeleteECMInstancesRequest,
  ClusterLevelAttribute,
  PodChargeInfo,
  RemoveNodeFromNodePoolResponse,
  SetNodePoolNodeProtectionRequest,
  EnableClusterAuditRequest,
  CreateClusterRouteTableRequest,
  DisableClusterAuditResponse,
  DescribeClusterEndpointsResponse,
  RemoveNodeFromNodePoolRequest,
  DescribeEncryptionStatusResponse,
  DescribeClusterLevelChangeRecordsRequest,
  UpdateClusterVersionResponse,
  InstanceUpgradePreCheckResultItem,
  DeleteClusterNodePoolResponse,
  DeleteImageCachesRequest,
  ReleaseValues,
  CreateClusterNodePoolResponse,
  Filter,
  KMSConfiguration,
  UpdateTKEEdgeClusterResponse,
  EipAttribute,
  UpdateAddonResponse,
  DescribeEKSContainerInstancesRequest,
  DescribeClusterControllersRequest,
  ModifyPrometheusAlertRuleRequest,
  DescribeClusterSecurityResponse,
  RouteInfo,
  ModifyNodePoolDesiredCapacityAboutAsgResponse,
  DescribeReservedInstanceUtilizationRateRequest,
  CreateClusterRouteRequest,
  DescribeReservedInstanceUtilizationRateResponse,
  ModifyClusterEndpointSPRequest,
  DescribePrometheusConfigResponse,
  DeleteClusterEndpointResponse,
  PrometheusTemplateModify,
  RollbackClusterReleaseResponse,
  ClusterVersion,
  InstanceUpgradeProgressItem,
  DescribeClusterVirtualNodePoolsRequest,
  DescribePrometheusRecordRulesResponse,
  ClusterAdvancedSettings,
  DescribePodsBySpecResponse,
  SecurityContext,
  DNSConfig,
  ModifyPrometheusConfigResponse,
  DescribeTKEEdgeExternalKubeconfigRequest,
  CreatePrometheusAlertPolicyResponse,
  DNSConfigOption,
  DescribeClusterVirtualNodeRequest,
  DescribeClusterReleasesResponse,
  AddNodeToNodePoolRequest,
  CreateReservedInstancesRequest,
  NodePool,
  ModifyPrometheusGlobalNotificationResponse,
  UninstallClusterReleaseRequest,
  ModifyPrometheusTempResponse,
  VirtualNode,
  PodNodeInfo,
  DescribePodChargeInfoRequest,
  ForwardTKEEdgeApplicationRequestV3Response,
  CreateClusterVirtualNodePoolRequest,
  ModifyPrometheusConfigRequest,
  AutoScalingGroupRange,
  DescribePrometheusGlobalNotificationRequest,
  ClusterPublicLB,
  DescribePrometheusTemplateSyncResponse,
  CreateEksLogConfigResponse,
  ModifyPrometheusTemplateResponse,
  ModifyPrometheusAlertPolicyResponse,
  Cluster,
  DescribeClusterAuthenticationOptionsRequest,
  DescribeEksContainerInstanceLogResponse,
  DeleteEKSClusterResponse,
  RenewReservedInstancesRequest,
  VersionInstance,
  EksCi,
  UpdateImageCacheResponse,
  DescribeIPAMDResponse,
  CreatePrometheusConfigRequest,
  CreateCLSLogConfigRequest,
  CreateClusterVirtualNodeResponse,
  ImageCacheEvent,
  CreatePrometheusClusterAgentRequest,
  DescribeRouteTableConflictsResponse,
  DescribePrometheusInstancesOverviewResponse,
  DescribeEKSClusterCredentialRequest,
  EnableClusterDeletionProtectionRequest,
  RestartEKSContainerInstancesRequest,
  DrainClusterVirtualNodeRequest,
  DescribeClusterLevelAttributeRequest,
  DescribeClusterReleaseDetailsRequest,
  KubeJarvisStateResultsItem,
  CreateECMInstancesRequest,
  DescribeClusterReleasesRequest,
  ClusterCredential,
  DescribePrometheusOverviewsRequest,
  DescribeClusterPendingReleasesResponse,
  DataDisk,
  DeleteEKSClusterRequest,
  DescribeLogConfigsResponse,
  DescribeExistedInstancesResponse,
  CreatePrometheusTemplateRequest,
  DescribeEKSContainerInstancesResponse,
  CreatePrometheusAlertRuleResponse,
  ECMEnhancedService,
  InstanceDataDiskMountSetting,
  EdgeClusterPublicLB,
  EnableEncryptionProtectionRequest,
  EnhancedService,
  DeleteEKSContainerInstancesResponse,
  DescribePostNodeResourcesResponse,
  DescribePrometheusAlertRuleRequest,
  UninstallLogAgentRequest,
  TcpSocket,
  TagSpecification,
  KubeJarvisStateDiagnosticOverview,
  DeleteEdgeClusterInstancesResponse,
  DeleteTKEEdgeClusterRequest,
  CreatePrometheusGlobalNotificationResponse,
  ListClusterInspectionResultsItemsRequest,
  DescribeClusterAuthenticationOptionsResponse,
  CreateClusterReleaseRequest,
  DescribePrometheusAgentsRequest,
  AddClusterCIDRResponse,
  ReleaseDetails,
  DescribePrometheusInstanceInitStatusRequest,
  DescribeClusterLevelAttributeResponse,
  PrometheusGrafanaInfo,
  Switch,
  ImageInstance,
  CreatePrometheusAlertPolicyRequest,
  DescribeImageCachesResponse,
  ResourceUsageDetail,
  DescribeClusterVirtualNodePoolsResponse,
  CheckEdgeClusterCIDRResponse,
  DescribePrometheusClusterAgentsRequest,
  DescribeTKEEdgeExternalKubeconfigResponse,
  EdgeArgsFlag,
  CheckInstancesUpgradeAbleResponse,
  CreatePrometheusTempRequest,
  CreatePrometheusDashboardRequest,
  DeleteClusterRouteTableResponse,
  DescribeAddonValuesResponse,
  DisableClusterDeletionProtectionRequest,
  ListClusterInspectionResultsItemsResponse,
  PrometheusJobTargets,
  ModifyClusterAsGroupOptionAttributeResponse,
  UninstallLogAgentResponse,
  PrometheusClusterAgentBasic,
  DeleteTKEEdgeClusterResponse,
  CreatePrometheusTempResponse,
  DescribePrometheusTargetsRequest,
  RunPrometheusInstanceResponse,
  DeletePrometheusTemplateSyncResponse,
  DescribeClusterAsGroupsRequest,
  ECMRunMonitorServiceEnabled,
  GetMostSuitableImageCacheResponse,
  ModifyClusterEndpointSPResponse,
  ECMRunSecurityServiceEnabled,
  SyncPrometheusTemplateResponse,
  DescribeClusterExtraArgsResponse,
  ClusterAsGroupAttribute,
  ForwardTKEEdgeApplicationRequestV3Request,
  DisableEventPersistenceRequest,
  RunMonitorServiceEnabled,
  CreateEKSContainerInstancesRequest,
  DescribeTKEEdgeClusterCredentialResponse,
  InstanceAdvancedSettings,
  CancelClusterReleaseResponse,
  UpdateEdgeClusterVersionResponse,
  ModifyClusterAsGroupAttributeRequest,
  DescribeClusterExtraArgsRequest,
  DescribeClusterAsGroupsResponse,
  PrometheusAlertHistoryItem,
  DescribeLogSwitchesRequest,
  ScaleOutClusterMasterRequest,
  DeleteClusterInstancesResponse,
  CreatePrometheusGlobalNotificationRequest,
  DescribeRIUtilizationDetailResponse,
  PrometheusAlertRuleDetail,
  GetUpgradeInstanceProgressResponse,
  DescribeClusterInstancesResponse,
  CreatePrometheusAlertRuleRequest,
  UpdateEKSClusterRequest,
  CreateTKEEdgeClusterRequest,
  DescribeSupportedRuntimeResponse,
  CreateClusterVirtualNodePoolResponse,
  CreateEKSClusterResponse,
  CreateImageCacheResponse,
  CreateEdgeLogConfigResponse,
  DescribeAvailableTKEEdgeVersionResponse,
  ModifyPrometheusRecordRuleYamlRequest,
  DeletePrometheusAlertPolicyResponse,
  InstallEdgeLogAgentResponse,
  EdgeAvailableExtraArgs,
  IPAddress,
  DescribeTKEEdgeClusterCredentialRequest,
  DescribeLogConfigsRequest,
  AutoUpgradeClusterLevel,
  DisableEncryptionProtectionResponse,
  CreateEKSClusterRequest,
  CommonName,
  EnableEventPersistenceRequest,
  ModifyClusterAuthenticationOptionsResponse,
  UpdateAddonRequest,
  ModifyClusterVirtualNodePoolRequest,
  DescribeRegionsResponse,
  CreateClusterRouteResponse,
  Release,
  DescribeEKSContainerInstanceRegionsRequest,
  DescribeECMInstancesRequest,
  DrainClusterVirtualNodeResponse,
  ECMZoneInstanceCountISP,
  DescribeVpcCniPodLimitsResponse,
  DescribeVersionsResponse,
  OpenPolicySwitch,
  ScaleInClusterMasterRequest,
  DeleteEdgeClusterInstancesRequest,
  EnableEventPersistenceResponse,
  VirtualNodeSpec,
  ClusterNetworkSettings,
  DescribeImagesResponse,
  UninstallEdgeLogAgentRequest,
  ClusterExtraArgs,
  AnnotationValue,
  CreateClusterEndpointVipResponse,
  TaskStepInfo,
  DeletePrometheusAlertRuleRequest,
  NodePoolRuntime,
  ModifyReservedInstanceScopeResponse,
  DescribeRouteTableConflictsRequest,
  DeleteClusterEndpointVipResponse,
  ClusterBasicSettings,
  PrometheusTemp,
  DescribeBackupStorageLocationsResponse,
  OptionalRuntimes,
  ModifyClusterAsGroupAttributeResponse,
  DeletePrometheusTempRequest,
  DescribeTKEEdgeScriptResponse,
  DescribeClusterRouteTablesResponse,
  DeleteLogConfigsRequest,
  ModifyClusterTagsRequest,
  DescribeClusterKubeconfigRequest,
  DeletePrometheusTempSyncRequest,
  CreatePrometheusTemplateResponse,
  CreateClusterEndpointVipRequest,
  ClusterInternalLB,
  UpdateClusterKubeconfigRequest,
  DeleteReservedInstancesRequest,
  DescribePrometheusGlobalConfigRequest,
  CreateECMInstancesResponse,
  ModifyPrometheusGlobalNotificationRequest,
  FailedResource,
  DescribeClusterNodePoolsResponse,
  UnavailableReason,
  GetUpgradeInstanceProgressRequest,
  UpdateEKSClusterResponse,
  DescribeEdgeCVMInstancesResponse,
  DescribeRegionsRequest,
  ModifyNodePoolDesiredCapacityAboutAsgRequest,
  ReservedInstance,
  DeleteClusterRouteResponse,
  PrometheusNotificationItem,
  DeleteECMInstancesResponse,
  DescribeEdgeClusterUpgradeInfoResponse,
  ModifyClusterNodePoolResponse,
  PrometheusAlertPolicyItem,
  ModifyPrometheusAgentExternalLabelsRequest,
  DeleteClusterVirtualNodePoolResponse,
  PrometheusTarget,
  LoginSettings,
  SyncPrometheusTemplateRequest,
  DescribeClusterEndpointStatusRequest,
  DescribeClusterStatusResponse,
  ImageRegistryCredential,
  DescribePrometheusClusterAgentsResponse,
  DescribeVersionsRequest,
  DescribePrometheusTempRequest,
  DeleteAddonResponse,
  DeleteClusterRouteTableRequest,
  DescribeClusterEndpointsRequest,
  InstanceExtraArgs,
  PrometheusAlertRule,
  AcquireClusterAdminRoleRequest,
  ListClusterInspectionResultsRequest,
  DeletePrometheusTemplateResponse,
  DescribePodDeductionRateRequest,
  DescribeECMInstancesResponse,
  DescribePrometheusInstanceRequest,
  DescribePrometheusTempResponse,
  CreateClusterReleaseResponse,
  ClusterProperty,
  EdgeClusterExtraArgs,
  DescribePrometheusTargetsResponse,
  ReleaseHistory,
  DescribeEnableVpcCniProgressResponse,
  ReservedInstanceSpec,
  PrometheusAgentOverview,
  AppChart,
  DeleteEdgeCVMInstancesRequest,
  ModifyClusterNodePoolRequest,
  InstallLogAgentResponse,
  GetClusterLevelPriceRequest,
  CreateClusterEndpointResponse,
  DescribeReservedInstancesRequest,
  DescribePodsBySpecRequest,
  UpdateClusterKubeconfigResponse,
  ForwardApplicationRequestV3Response,
  RuntimeConfig,
  ModifyClusterAuthenticationOptionsRequest,
  DeleteClusterEndpointVipRequest,
  LivenessOrReadinessProbe,
  DescribeClusterLevelChangeRecordsResponse,
  ClusterStatus,
  DescribePrometheusAgentsResponse,
  DescribeVpcCniPodLimitsRequest,
  DeleteImageCachesResponse,
  DescribeEKSContainerInstanceRegionsResponse,
  ModifyClusterRuntimeConfigResponse,
  ModifyPrometheusRecordRuleYamlResponse,
  DescribeTKEEdgeScriptRequest,
  AddVpcCniSubnetsResponse,
  KubeJarvisStateStatistic,
  ExistedInstancesForNode,
  KubeJarvisStateInspectionOverview,
  DescribePrometheusOverviewsResponse,
  DescribeClusterInspectionResultsOverviewResponse,
  DescribePodChargeInfoResponse,
  DeletePrometheusRecordRuleYamlRequest,
  InstallAddonRequest,
  InstanceUpgradePreCheckResult,
  ScaleInClusterMasterResponse,
  DescribeAvailableClusterVersionResponse,
  GetMostSuitableImageCacheRequest,
  DeleteEKSContainerInstancesRequest,
  DescribeClusterCommonNamesResponse,
  DescribeAddonRequest,
  PrometheusTemplate,
  GPUArgs,
  RouteTableConflict,
  InstallAddonResponse,
  DeleteLogConfigsResponse,
  ModifyReservedInstanceScopeRequest,
  DisableEncryptionProtectionRequest,
  PrometheusInstanceOverview,
  DescribeClusterVirtualNodeResponse,
  ScaleInMaster,
  RunPrometheusInstanceRequest,
  PendingRelease,
  DescribeBackupStorageLocationsRequest,
  InstanceChargePrepaid,
} from "./tke_models"

/**
 * tke client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("tke.tencentcloudapi.com", "2018-05-25", clientConfig)
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
   * 创建边缘计算ECM机器
   */
  async CreateECMInstances(
    req: CreateECMInstancesRequest,
    cb?: (error: string, rep: CreateECMInstancesResponse) => void
  ): Promise<CreateECMInstancesResponse> {
    return this.request("CreateECMInstances", req, cb)
  }

  /**
   * 查看超级节点列表
   */
  async DescribeClusterVirtualNode(
    req: DescribeClusterVirtualNodeRequest,
    cb?: (error: string, rep: DescribeClusterVirtualNodeResponse) => void
  ): Promise<DescribeClusterVirtualNodeResponse> {
    return this.request("DescribeClusterVirtualNode", req, cb)
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
   * 根据K8S版本获取可选运行时版本
   */
  async DescribeSupportedRuntime(
    req: DescribeSupportedRuntimeRequest,
    cb?: (error: string, rep: DescribeSupportedRuntimeResponse) => void
  ): Promise<DescribeSupportedRuntimeResponse> {
    return this.request("DescribeSupportedRuntime", req, cb)
  }

  /**
   * 在tke@edge集群的边缘节点上安装日志采集组件
   */
  async InstallEdgeLogAgent(
    req: InstallEdgeLogAgentRequest,
    cb?: (error: string, rep: InstallEdgeLogAgentResponse) => void
  ): Promise<InstallEdgeLogAgentResponse> {
    return this.request("InstallEdgeLogAgent", req, cb)
  }

  /**
   * 查询opa策略列表
   */
  async DescribeOpenPolicyList(
    req: DescribeOpenPolicyListRequest,
    cb?: (error: string, rep: DescribeOpenPolicyListResponse) => void
  ): Promise<DescribeOpenPolicyListResponse> {
    return this.request("DescribeOpenPolicyList", req, cb)
  }

  /**
   * 创建超级节点池
   */
  async CreateClusterVirtualNodePool(
    req: CreateClusterVirtualNodePoolRequest,
    cb?: (error: string, rep: CreateClusterVirtualNodePoolResponse) => void
  ): Promise<CreateClusterVirtualNodePoolResponse> {
    return this.request("CreateClusterVirtualNodePool", req, cb)
  }

  /**
   * 修改集群弹性伸缩属性
   */
  async ModifyClusterAsGroupOptionAttribute(
    req: ModifyClusterAsGroupOptionAttributeRequest,
    cb?: (error: string, rep: ModifyClusterAsGroupOptionAttributeResponse) => void
  ): Promise<ModifyClusterAsGroupOptionAttributeResponse> {
    return this.request("ModifyClusterAsGroupOptionAttribute", req, cb)
  }

  /**
   * GR集群可以通过本接口附加vpc-cni容器网络插件，开启vpc-cni容器网络能力
   */
  async EnableVpcCniNetworkType(
    req: EnableVpcCniNetworkTypeRequest,
    cb?: (error: string, rep: EnableVpcCniNetworkTypeResponse) => void
  ): Promise<EnableVpcCniNetworkTypeResponse> {
    return this.request("EnableVpcCniNetworkType", req, cb)
  }

  /**
   * 删除集群(YUNAPI V3版本)
   */
  async DeleteCluster(
    req: DeleteClusterRequest,
    cb?: (error: string, rep: DeleteClusterResponse) => void
  ): Promise<DeleteClusterResponse> {
    return this.request("DeleteCluster", req, cb)
  }

  /**
   * 升级边缘集群组件到指定版本，此版本为TKEEdge专用版本。
   */
  async UpdateEdgeClusterVersion(
    req: UpdateEdgeClusterVersionRequest,
    cb?: (error: string, rep: UpdateEdgeClusterVersionResponse) => void
  ): Promise<UpdateEdgeClusterVersionResponse> {
    return this.request("UpdateEdgeClusterVersion", req, cb)
  }

  /**
   * 从tke@edge集群边缘节点上卸载日志采集组件
   */
  async UninstallEdgeLogAgent(
    req: UninstallEdgeLogAgentRequest,
    cb?: (error: string, rep: UninstallEdgeLogAgentResponse) => void
  ): Promise<UninstallEdgeLogAgentResponse> {
    return this.request("UninstallEdgeLogAgent", req, cb)
  }

  /**
   * 查看开启第三方节点池配置信息
   */
  async DescribeExternalNodeSupportConfig(
    req: DescribeExternalNodeSupportConfigRequest,
    cb?: (error: string, rep: DescribeExternalNodeSupportConfigResponse) => void
  ): Promise<DescribeExternalNodeSupportConfigResponse> {
    return this.request("DescribeExternalNodeSupportConfig", req, cb)
  }

  /**
   * 删除边缘计算实例
   */
  async DeleteEdgeClusterInstances(
    req: DeleteEdgeClusterInstancesRequest,
    cb?: (error: string, rep: DeleteEdgeClusterInstancesResponse) => void
  ): Promise<DeleteEdgeClusterInstancesResponse> {
    return this.request("DeleteEdgeClusterInstances", req, cb)
  }

  /**
   * 包括 Pod 资源统计和绑定的预留券资源统计。
   */
  async DescribePostNodeResources(
    req: DescribePostNodeResourcesRequest,
    cb?: (error: string, rep: DescribePostNodeResourcesResponse) => void
  ): Promise<DescribePostNodeResourcesResponse> {
    return this.request("DescribePostNodeResources", req, cb)
  }

  /**
   * 仅能设置节点池中处于伸缩组的节点
   */
  async SetNodePoolNodeProtection(
    req: SetNodePoolNodeProtectionRequest,
    cb?: (error: string, rep: SetNodePoolNodeProtectionResponse) => void
  ): Promise<SetNodePoolNodeProtectionResponse> {
    return this.request("SetNodePoolNodeProtection", req, cb)
  }

  /**
   * 查询容器实例的事件
   */
  async DescribeEKSContainerInstanceEvent(
    req: DescribeEKSContainerInstanceEventRequest,
    cb?: (error: string, rep: DescribeEKSContainerInstanceEventResponse) => void
  ): Promise<DescribeEKSContainerInstanceEventResponse> {
    return this.request("DescribeEKSContainerInstanceEvent", req, cb)
  }

  /**
   * 查询边缘容器集群可用的自定义参数
   */
  async DescribeEdgeAvailableExtraArgs(
    req: DescribeEdgeAvailableExtraArgsRequest,
    cb?: (error: string, rep: DescribeEdgeAvailableExtraArgsResponse) => void
  ): Promise<DescribeEdgeAvailableExtraArgsResponse> {
    return this.request("DescribeEdgeAvailableExtraArgs", req, cb)
  }

  /**
   * 获取指定子账户在RBAC授权模式中对应kube-apiserver客户端证书的CommonName字段，如果没有客户端证书，将会签发一个，此接口有最大传入子账户数量上限，当前为50
   */
  async DescribeClusterCommonNames(
    req: DescribeClusterCommonNamesRequest,
    cb?: (error: string, rep: DescribeClusterCommonNamesResponse) => void
  ): Promise<DescribeClusterCommonNamesResponse> {
    return this.request("DescribeClusterCommonNames", req, cb)
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
   * 开启事件持久化功能
   */
  async EnableEventPersistence(
    req: EnableEventPersistenceRequest,
    cb?: (error: string, rep: EnableEventPersistenceResponse) => void
  ): Promise<EnableEventPersistenceResponse> {
    return this.request("EnableEventPersistence", req, cb)
  }

  /**
   * 获取告警历史
   */
  async DescribePrometheusAlertHistory(
    req: DescribePrometheusAlertHistoryRequest,
    cb?: (error: string, rep: DescribePrometheusAlertHistoryResponse) => void
  ): Promise<DescribePrometheusAlertHistoryResponse> {
    return this.request("DescribePrometheusAlertHistory", req, cb)
  }

  /**
   * 获取eniipamd组件信息
   */
  async DescribeIPAMD(
    req: DescribeIPAMDRequest,
    cb?: (error: string, rep: DescribeIPAMDResponse) => void
  ): Promise<DescribeIPAMDResponse> {
    return this.request("DescribeIPAMD", req, cb)
  }

  /**
   * 创建集群路由表
   */
  async CreateClusterRouteTable(
    req: CreateClusterRouteTableRequest,
    cb?: (error: string, rep: CreateClusterRouteTableResponse) => void
  ): Promise<CreateClusterRouteTableResponse> {
    return this.request("CreateClusterRouteTable", req, cb)
  }

  /**
   * 获得节点升级当前的进度，若集群未处于节点升级状态，则接口会报错：任务未找到。
   */
  async GetUpgradeInstanceProgress(
    req: GetUpgradeInstanceProgressRequest,
    cb?: (error: string, rep: GetUpgradeInstanceProgressResponse) => void
  ): Promise<GetUpgradeInstanceProgressResponse> {
    return this.request("GetUpgradeInstanceProgress", req, cb)
  }

  /**
   * 创建一个云原生Prometheus模板实例
   */
  async CreatePrometheusTemplate(
    req: CreatePrometheusTemplateRequest,
    cb?: (error: string, rep: CreatePrometheusTemplateResponse) => void
  ): Promise<CreatePrometheusTemplateResponse> {
    return this.request("CreatePrometheusTemplate", req, cb)
  }

  /**
   * 查询可以用预留券抵扣的 Pod 信息。
   */
  async DescribePodsBySpec(
    req: DescribePodsBySpecRequest,
    cb?: (error: string, rep: DescribePodsBySpecResponse) => void
  ): Promise<DescribePodsBySpecResponse> {
    return this.request("DescribePodsBySpec", req, cb)
  }

  /**
   * 查询预留实例列表
   */
  async DescribeReservedInstances(
    req: DescribeReservedInstancesRequest,
    cb?: (error: string, rep: DescribeReservedInstancesResponse) => void
  ): Promise<DescribeReservedInstancesResponse> {
    return this.request("DescribeReservedInstances", req, cb)
  }

  /**
   * 删除超级节点
   */
  async DeleteClusterVirtualNode(
    req: DeleteClusterVirtualNodeRequest,
    cb?: (error: string, rep: DeleteClusterVirtualNodeResponse) => void
  ): Promise<DeleteClusterVirtualNodeResponse> {
    return this.request("DeleteClusterVirtualNode", req, cb)
  }

  /**
   * 删除备份仓库
   */
  async DeleteBackupStorageLocation(
    req: DeleteBackupStorageLocationRequest,
    cb?: (error: string, rep: DeleteBackupStorageLocationResponse) => void
  ): Promise<DeleteBackupStorageLocationResponse> {
    return this.request("DeleteBackupStorageLocation", req, cb)
  }

  /**
   * 边缘计算支持版本和k8s版本
   */
  async DescribeAvailableTKEEdgeVersion(
    req: DescribeAvailableTKEEdgeVersionRequest,
    cb?: (error: string, rep: DescribeAvailableTKEEdgeVersionResponse) => void
  ): Promise<DescribeAvailableTKEEdgeVersionResponse> {
    return this.request("DescribeAvailableTKEEdgeVersion", req, cb)
  }

  /**
   * 查询边缘集群列表
   */
  async DescribeTKEEdgeClusters(
    req: DescribeTKEEdgeClustersRequest,
    cb?: (error: string, rep: DescribeTKEEdgeClustersResponse) => void
  ): Promise<DescribeTKEEdgeClustersResponse> {
    return this.request("DescribeTKEEdgeClusters", req, cb)
  }

  /**
   * 从TKE集群中卸载CLS日志采集组件
   */
  async UninstallLogAgent(
    req: UninstallLogAgentRequest,
    cb?: (error: string, rep: UninstallLogAgentResponse) => void
  ): Promise<UninstallLogAgentResponse> {
    return this.request("UninstallLogAgent", req, cb)
  }

  /**
   * 查询正在运行中Pod的计费信息。可以通过 Namespace 和 Name 来查询某个 Pod 的信息，也可以通过 Pod 的 Uid 批量查询。
   */
  async DescribePodChargeInfo(
    req: DescribePodChargeInfoRequest,
    cb?: (error: string, rep: DescribePodChargeInfoResponse) => void
  ): Promise<DescribePodChargeInfoResponse> {
    return this.request("DescribePodChargeInfo", req, cb)
  }

  /**
   * 获取集群版本信息
   */
  async DescribeVersions(
    req?: DescribeVersionsRequest,
    cb?: (error: string, rep: DescribeVersionsResponse) => void
  ): Promise<DescribeVersionsResponse> {
    return this.request("DescribeVersions", req, cb)
  }

  /**
   * 操作TKE集群的addon
   */
  async ForwardApplicationRequestV3(
    req: ForwardApplicationRequestV3Request,
    cb?: (error: string, rep: ForwardApplicationRequestV3Response) => void
  ): Promise<ForwardApplicationRequestV3Response> {
    return this.request("ForwardApplicationRequestV3", req, cb)
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
   * 查询边缘集群自定义参数
   */
  async DescribeEdgeClusterExtraArgs(
    req: DescribeEdgeClusterExtraArgsRequest,
    cb?: (error: string, rep: DescribeEdgeClusterExtraArgsResponse) => void
  ): Promise<DescribeEdgeClusterExtraArgsResponse> {
    return this.request("DescribeEdgeClusterExtraArgs", req, cb)
  }

  /**
   * 删除弹性集群(yunapiv3)
   */
  async DeleteEKSCluster(
    req: DeleteEKSClusterRequest,
    cb?: (error: string, rep: DeleteEKSClusterResponse) => void
  ): Promise<DeleteEKSClusterResponse> {
    return this.request("DeleteEKSCluster", req, cb)
  }

  /**
   * 获取事件、审计和日志的状态
   */
  async DescribeEdgeLogSwitches(
    req: DescribeEdgeLogSwitchesRequest,
    cb?: (error: string, rep: DescribeEdgeLogSwitchesResponse) => void
  ): Promise<DescribeEdgeLogSwitchesResponse> {
    return this.request("DescribeEdgeLogSwitches", req, cb)
  }

  /**
   * 修改预留券的抵扣范围，抵扣范围取值：Region、Zone 和 Node。
   */
  async ModifyReservedInstanceScope(
    req: ModifyReservedInstanceScopeRequest,
    cb?: (error: string, rep: ModifyReservedInstanceScopeResponse) => void
  ): Promise<ModifyReservedInstanceScopeResponse> {
    return this.request("ModifyReservedInstanceScope", req, cb)
  }

  /**
   * 获取边缘计算外部访问的kubeconfig
   */
  async DescribeTKEEdgeExternalKubeconfig(
    req: DescribeTKEEdgeExternalKubeconfigRequest,
    cb?: (error: string, rep: DescribeTKEEdgeExternalKubeconfigResponse) => void
  ): Promise<DescribeTKEEdgeExternalKubeconfigResponse> {
    return this.request("DescribeTKEEdgeExternalKubeconfig", req, cb)
  }

  /**
   * 修改集群标签
   */
  async ModifyClusterTags(
    req: ModifyClusterTagsRequest,
    cb?: (error: string, rep: ModifyClusterTagsResponse) => void
  ): Promise<ModifyClusterTagsResponse> {
    return this.request("ModifyClusterTags", req, cb)
  }

  /**
   * 创建日志采集配置
   */
  async CreateCLSLogConfig(
    req: CreateCLSLogConfigRequest,
    cb?: (error: string, rep: CreateCLSLogConfigResponse) => void
  ): Promise<CreateCLSLogConfigResponse> {
    return this.request("CreateCLSLogConfig", req, cb)
  }

  /**
   * 开启集群审计
   */
  async EnableClusterAudit(
    req: EnableClusterAuditRequest,
    cb?: (error: string, rep: EnableClusterAuditResponse) => void
  ): Promise<EnableClusterAuditResponse> {
    return this.request("EnableClusterAudit", req, cb)
  }

  /**
   * 创建备份仓库，指定了存储仓库类型（如COS）、COS桶地区、名称等信息，当前最多允许创建100个仓库， 注意此接口当前是全局接口，多个地域的TKE集群如果要备份到相同的备份仓库中，不需要重复创建备份仓库
   */
  async CreateBackupStorageLocation(
    req: CreateBackupStorageLocationRequest,
    cb?: (error: string, rep: CreateBackupStorageLocationResponse) => void
  ): Promise<CreateBackupStorageLocationResponse> {
    return this.request("CreateBackupStorageLocation", req, cb)
  }

  /**
   * 修改超级节点池
   */
  async ModifyClusterVirtualNodePool(
    req: ModifyClusterVirtualNodePoolRequest,
    cb?: (error: string, rep: ModifyClusterVirtualNodePoolResponse) => void
  ): Promise<ModifyClusterVirtualNodePoolResponse> {
    return this.request("ModifyClusterVirtualNodePool", req, cb)
  }

  /**
   * 获取集群可以升级的所有版本
   */
  async DescribeAvailableClusterVersion(
    req: DescribeAvailableClusterVersionRequest,
    cb?: (error: string, rep: DescribeAvailableClusterVersionResponse) => void
  ): Promise<DescribeAvailableClusterVersionResponse> {
    return this.request("DescribeAvailableClusterVersion", req, cb)
  }

  /**
   * 修改集群采集配置
   */
  async ModifyPrometheusConfig(
    req: ModifyPrometheusConfigRequest,
    cb?: (error: string, rep: ModifyPrometheusConfigResponse) => void
  ): Promise<ModifyPrometheusConfigResponse> {
    return this.request("ModifyPrometheusConfig", req, cb)
  }

  /**
   * 本接口查询当前用户和地域在指定可用区下的机型可支持的最大 TKE VPC-CNI 网络模式的 Pod 数量
   */
  async DescribeVpcCniPodLimits(
    req: DescribeVpcCniPodLimitsRequest,
    cb?: (error: string, rep: DescribeVpcCniPodLimitsResponse) => void
  ): Promise<DescribeVpcCniPodLimitsResponse> {
    return this.request("DescribeVpcCniPodLimits", req, cb)
  }

  /**
   * 升级集群 Master 组件到指定版本
   */
  async UpdateClusterVersion(
    req: UpdateClusterVersionRequest,
    cb?: (error: string, rep: UpdateClusterVersionResponse) => void
  ): Promise<UpdateClusterVersionResponse> {
    return this.request("UpdateClusterVersion", req, cb)
  }

  /**
   * 在应用市场中查询正在安装中的应用列表
   */
  async DescribeClusterPendingReleases(
    req: DescribeClusterPendingReleasesRequest,
    cb?: (error: string, rep: DescribeClusterPendingReleasesResponse) => void
  ): Promise<DescribeClusterPendingReleasesResponse> {
    return this.request("DescribeClusterPendingReleases", req, cb)
  }

  /**
   * 创建聚合规则yaml方式
   */
  async CreatePrometheusRecordRuleYaml(
    req: CreatePrometheusRecordRuleYamlRequest,
    cb?: (error: string, rep: CreatePrometheusRecordRuleYamlResponse) => void
  ): Promise<CreatePrometheusRecordRuleYamlResponse> {
    return this.request("CreatePrometheusRecordRuleYaml", req, cb)
  }

  /**
   * 批量删除镜像缓存
   */
  async DeleteImageCaches(
    req: DeleteImageCachesRequest,
    cb?: (error: string, rep: DeleteImageCachesResponse) => void
  ): Promise<DeleteImageCachesResponse> {
    return this.request("DeleteImageCaches", req, cb)
  }

  /**
   * 删除集群路由表
   */
  async DeleteClusterRouteTable(
    req: DeleteClusterRouteTableRequest,
    cb?: (error: string, rep: DeleteClusterRouteTableResponse) => void
  ): Promise<DeleteClusterRouteTableResponse> {
    return this.request("DeleteClusterRouteTable", req, cb)
  }

  /**
   * 获取边缘脚本链接，此接口用于添加第三方节点，通过下载脚本从而将节点添加到边缘集群。
   */
  async DescribeTKEEdgeScript(
    req: DescribeTKEEdgeScriptRequest,
    cb?: (error: string, rep: DescribeTKEEdgeScriptResponse) => void
  ): Promise<DescribeTKEEdgeScriptResponse> {
    return this.request("DescribeTKEEdgeScript", req, cb)
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
   * 更新一个addon的参数和版本
   */
  async UpdateAddon(
    req: UpdateAddonRequest,
    cb?: (error: string, rep: UpdateAddonResponse) => void
  ): Promise<UpdateAddonResponse> {
    return this.request("UpdateAddon", req, cb)
  }

  /**
   * 查看集群认证配置
   */
  async DescribeClusterAuthenticationOptions(
    req: DescribeClusterAuthenticationOptionsRequest,
    cb?: (error: string, rep: DescribeClusterAuthenticationOptionsResponse) => void
  ): Promise<DescribeClusterAuthenticationOptionsResponse> {
    return this.request("DescribeClusterAuthenticationOptions", req, cb)
  }

  /**
   * 修改集群伸缩组属性
   */
  async ModifyClusterAsGroupAttribute(
    req: ModifyClusterAsGroupAttributeRequest,
    cb?: (error: string, rep: ModifyClusterAsGroupAttributeResponse) => void
  ): Promise<ModifyClusterAsGroupAttributeResponse> {
    return this.request("ModifyClusterAsGroupAttribute", req, cb)
  }

  /**
   * 为目标集群安装一个addon
   */
  async InstallAddon(
    req: InstallAddonRequest,
    cb?: (error: string, rep: InstallAddonResponse) => void
  ): Promise<InstallAddonResponse> {
    return this.request("InstallAddon", req, cb)
  }

  /**
   * 删除ECM实例
   */
  async DeleteECMInstances(
    req: DeleteECMInstancesRequest,
    cb?: (error: string, rep: DeleteECMInstancesResponse) => void
  ): Promise<DeleteECMInstancesResponse> {
    return this.request("DeleteECMInstances", req, cb)
  }

  /**
   * 查询节点池详情
   */
  async DescribeClusterNodePoolDetail(
    req: DescribeClusterNodePoolDetailRequest,
    cb?: (error: string, rep: DescribeClusterNodePoolDetailResponse) => void
  ): Promise<DescribeClusterNodePoolDetailResponse> {
    return this.request("DescribeClusterNodePoolDetail", req, cb)
  }

  /**
   * 取消模板同步，这将会删除目标中该模板所生产的配置
   */
  async DeletePrometheusTemplateSync(
    req: DeletePrometheusTemplateSyncRequest,
    cb?: (error: string, rep: DeletePrometheusTemplateSyncResponse) => void
  ): Promise<DeletePrometheusTemplateSyncResponse> {
    return this.request("DeletePrometheusTemplateSync", req, cb)
  }

  /**
   * 扩展(新建)集群节点
   */
  async CreateClusterInstances(
    req: CreateClusterInstancesRequest,
    cb?: (error: string, rep: CreateClusterInstancesResponse) => void
  ): Promise<CreateClusterInstancesResponse> {
    return this.request("CreateClusterInstances", req, cb)
  }

  /**
   * 修改集群属性
   */
  async ModifyClusterAttribute(
    req: ModifyClusterAttributeRequest,
    cb?: (error: string, rep: ModifyClusterAttributeResponse) => void
  ): Promise<ModifyClusterAttributeResponse> {
    return this.request("ModifyClusterAttribute", req, cb)
  }

  /**
   * 删除集群伸缩组
   */
  async DeleteClusterAsGroups(
    req: DeleteClusterAsGroupsRequest,
    cb?: (error: string, rep: DeleteClusterAsGroupsResponse) => void
  ): Promise<DeleteClusterAsGroupsResponse> {
    return this.request("DeleteClusterAsGroups", req, cb)
  }

  /**
   * 删除集群路由
   */
  async DeleteClusterRoute(
    req: DeleteClusterRouteRequest,
    cb?: (error: string, rep: DeleteClusterRouteResponse) => void
  ): Promise<DeleteClusterRouteResponse> {
    return this.request("DeleteClusterRoute", req, cb)
  }

  /**
   * 在应用市场中集群删除某个应用
   */
  async UninstallClusterRelease(
    req: UninstallClusterReleaseRequest,
    cb?: (error: string, rep: UninstallClusterReleaseResponse) => void
  ): Promise<UninstallClusterReleaseResponse> {
    return this.request("UninstallClusterRelease", req, cb)
  }

  /**
   * 针对VPC-CNI模式的集群，增加集群容器网络可使用的子网
   */
  async AddVpcCniSubnets(
    req: AddVpcCniSubnetsRequest,
    cb?: (error: string, rep: AddVpcCniSubnetsResponse) => void
  ): Promise<AddVpcCniSubnetsResponse> {
    return this.request("AddVpcCniSubnets", req, cb)
  }

  /**
   * 获取镜像信息
   */
  async DescribeImages(
    req?: DescribeImagesRequest,
    cb?: (error: string, rep: DescribeImagesResponse) => void
  ): Promise<DescribeImagesResponse> {
    return this.request("DescribeImages", req, cb)
  }

  /**
   * 查询已经存在的节点，判断是否可以加入集群
   */
  async DescribeExistedInstances(
    req: DescribeExistedInstancesRequest,
    cb?: (error: string, rep: DescribeExistedInstancesResponse) => void
  ): Promise<DescribeExistedInstancesResponse> {
    return this.request("DescribeExistedInstances", req, cb)
  }

  /**
   * 查询指定集群的巡检结果信息
   */
  async ListClusterInspectionResults(
    req: ListClusterInspectionResultsRequest,
    cb?: (error: string, rep: ListClusterInspectionResultsResponse) => void
  ): Promise<ListClusterInspectionResultsResponse> {
    return this.request("ListClusterInspectionResults", req, cb)
  }

  /**
   * 查询节点池列表
   */
  async DescribeClusterNodePools(
    req: DescribeClusterNodePoolsRequest,
    cb?: (error: string, rep: DescribeClusterNodePoolsResponse) => void
  ): Promise<DescribeClusterNodePoolsResponse> {
    return this.request("DescribeClusterNodePools", req, cb)
  }

  /**
   * 获取边缘计算集群的认证信息
   */
  async DescribeTKEEdgeClusterCredential(
    req: DescribeTKEEdgeClusterCredentialRequest,
    cb?: (error: string, rep: DescribeTKEEdgeClusterCredentialResponse) => void
  ): Promise<DescribeTKEEdgeClusterCredentialResponse> {
    return this.request("DescribeTKEEdgeClusterCredential", req, cb)
  }

  /**
   * 给集群的一批work节点进行升级
   */
  async UpgradeClusterInstances(
    req: UpgradeClusterInstancesRequest,
    cb?: (error: string, rep: UpgradeClusterInstancesResponse) => void
  ): Promise<UpgradeClusterInstancesResponse> {
    return this.request("UpgradeClusterInstances", req, cb)
  }

  /**
   * 查询集群路由表
   */
  async DescribeClusterRouteTables(
    req?: DescribeClusterRouteTablesRequest,
    cb?: (error: string, rep: DescribeClusterRouteTablesResponse) => void
  ): Promise<DescribeClusterRouteTablesResponse> {
    return this.request("DescribeClusterRouteTables", req, cb)
  }

  /**
   * 删除边缘容器CVM实例
   */
  async DeleteEdgeCVMInstances(
    req: DeleteEdgeCVMInstancesRequest,
    cb?: (error: string, rep: DeleteEdgeCVMInstancesResponse) => void
  ): Promise<DeleteEdgeCVMInstancesResponse> {
    return this.request("DeleteEdgeCVMInstances", req, cb)
  }

  /**
   * 将集群内节点移入节点池
   */
  async AddNodeToNodePool(
    req: AddNodeToNodePoolRequest,
    cb?: (error: string, rep: AddNodeToNodePoolResponse) => void
  ): Promise<AddNodeToNodePoolResponse> {
    return this.request("AddNodeToNodePool", req, cb)
  }

  /**
   * 查询集群列表
   */
  async DescribeClusters(
    req: DescribeClustersRequest,
    cb?: (error: string, rep: DescribeClustersResponse) => void
  ): Promise<DescribeClustersResponse> {
    return this.request("DescribeClusters", req, cb)
  }

  /**
   * 查询集群访问端口状态(独立集群开启内网/外网访问，托管集群支持开启内网访问)
   */
  async DescribeClusterEndpointStatus(
    req: DescribeClusterEndpointStatusRequest,
    cb?: (error: string, rep: DescribeClusterEndpointStatusResponse) => void
  ): Promise<DescribeClusterEndpointStatusResponse> {
    return this.request("DescribeClusterEndpointStatus", req, cb)
  }

  /**
   * 预留券实例的购买会预先扣除本次实例购买所需金额，在调用本接口前请确保账户余额充足。
   */
  async CreateReservedInstances(
    req: CreateReservedInstancesRequest,
    cb?: (error: string, rep: CreateReservedInstancesResponse) => void
  ): Promise<CreateReservedInstancesResponse> {
    return this.request("CreateReservedInstances", req, cb)
  }

  /**
   * 更新镜像缓存接口
   */
  async UpdateImageCache(
    req: UpdateImageCacheRequest,
    cb?: (error: string, rep: UpdateImageCacheResponse) => void
  ): Promise<UpdateImageCacheResponse> {
    return this.request("UpdateImageCache", req, cb)
  }

  /**
   * 查询批量修改标签状态
   */
  async DescribeBatchModifyTagsStatus(
    req: DescribeBatchModifyTagsStatusRequest,
    cb?: (error: string, rep: DescribeBatchModifyTagsStatusResponse) => void
  ): Promise<DescribeBatchModifyTagsStatusResponse> {
    return this.request("DescribeBatchModifyTagsStatus", req, cb)
  }

  /**
   * 获取容器服务支持的所有地域
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
  }

  /**
   * 查询各种规格类型的预留券使用率
   */
  async DescribeReservedInstanceUtilizationRate(
    req: DescribeReservedInstanceUtilizationRateRequest,
    cb?: (error: string, rep: DescribeReservedInstanceUtilizationRateResponse) => void
  ): Promise<DescribeReservedInstanceUtilizationRateResponse> {
    return this.request("DescribeReservedInstanceUtilizationRate", req, cb)
  }

  /**
   * 添加已经存在的实例到集群
   */
  async AddExistedInstances(
    req: AddExistedInstancesRequest,
    cb?: (error: string, rep: AddExistedInstancesResponse) => void
  ): Promise<AddExistedInstancesResponse> {
    return this.request("AddExistedInstances", req, cb)
  }

  /**
   * 修改告警规则
   */
  async ModifyPrometheusAlertRule(
    req: ModifyPrometheusAlertRuleRequest,
    cb?: (error: string, rep: ModifyPrometheusAlertRuleResponse) => void
  ): Promise<ModifyPrometheusAlertRuleResponse> {
    return this.request("ModifyPrometheusAlertRule", req, cb)
  }

  /**
   * 修改托管集群外网端口的安全策略（老的方式，仅支持托管集群外网端口）
   */
  async ModifyClusterEndpointSP(
    req: ModifyClusterEndpointSPRequest,
    cb?: (error: string, rep: ModifyClusterEndpointSPResponse) => void
  ): Promise<ModifyClusterEndpointSPResponse> {
    return this.request("ModifyClusterEndpointSP", req, cb)
  }

  /**
   * 关闭集群删除保护
   */
  async DisableClusterDeletionProtection(
    req: DisableClusterDeletionProtectionRequest,
    cb?: (error: string, rep: DisableClusterDeletionProtectionResponse) => void
  ): Promise<DisableClusterDeletionProtectionResponse> {
    return this.request("DisableClusterDeletionProtection", req, cb)
  }

  /**
   * 获取targets信息
   */
  async DescribePrometheusTargets(
    req: DescribePrometheusTargetsRequest,
    cb?: (error: string, rep: DescribePrometheusTargetsResponse) => void
  ): Promise<DescribePrometheusTargetsResponse> {
    return this.request("DescribePrometheusTargets", req, cb)
  }

  /**
   * 删除容器实例，可批量删除
   */
  async DeleteEKSContainerInstances(
    req: DeleteEKSContainerInstancesRequest,
    cb?: (error: string, rep: DeleteEKSContainerInstancesResponse) => void
  ): Promise<DeleteEKSContainerInstancesResponse> {
    return this.request("DeleteEKSContainerInstances", req, cb)
  }

  /**
   * 查询集群下节点实例信息
   */
  async DescribeClusterInstances(
    req: DescribeClusterInstancesRequest,
    cb?: (error: string, rep: DescribeClusterInstancesResponse) => void
  ): Promise<DescribeClusterInstancesResponse> {
    return this.request("DescribeClusterInstances", req, cb)
  }

  /**
   * 获取边缘容器CVM实例相关信息
   */
  async DescribeEdgeCVMInstances(
    req: DescribeEdgeCVMInstancesRequest,
    cb?: (error: string, rep: DescribeEdgeCVMInstancesResponse) => void
  ): Promise<DescribeEdgeCVMInstancesResponse> {
    return this.request("DescribeEdgeCVMInstances", req, cb)
  }

  /**
   * 用于查询Kubernetes的各个原生控制器是否开启
   */
  async DescribeClusterControllers(
    req: DescribeClusterControllersRequest,
    cb?: (error: string, rep: DescribeClusterControllersResponse) => void
  ): Promise<DescribeClusterControllersResponse> {
    return this.request("DescribeClusterControllers", req, cb)
  }

  /**
   * 获取一个addon的参数
   */
  async DescribeAddonValues(
    req: DescribeAddonValuesRequest,
    cb?: (error: string, rep: DescribeAddonValuesResponse) => void
  ): Promise<DescribeAddonValuesResponse> {
    return this.request("DescribeAddonValues", req, cb)
  }

  /**
   * 给GR集群增加可用的ClusterCIDR（开白才能使用此功能，如需要请联系我们）
   */
  async AddClusterCIDR(
    req: AddClusterCIDRRequest,
    cb?: (error: string, rep: AddClusterCIDRResponse) => void
  ): Promise<AddClusterCIDRResponse> {
    return this.request("AddClusterCIDR", req, cb)
  }

  /**
   * 创建镜像缓存的接口。创建过程中，请勿删除EKSCI实例和云盘，否则镜像缓存将创建失败。
   */
  async CreateImageCache(
    req: CreateImageCacheRequest,
    cb?: (error: string, rep: CreateImageCacheResponse) => void
  ): Promise<CreateImageCacheResponse> {
    return this.request("CreateImageCache", req, cb)
  }

  /**
   * 删除超级节点池
   */
  async DeleteClusterVirtualNodePool(
    req: DeleteClusterVirtualNodePoolRequest,
    cb?: (error: string, rep: DeleteClusterVirtualNodePoolResponse) => void
  ): Promise<DeleteClusterVirtualNodePoolResponse> {
    return this.request("DeleteClusterVirtualNodePool", req, cb)
  }

  /**
   * 关闭加密信息保护
   */
  async DisableEncryptionProtection(
    req: DisableEncryptionProtectionRequest,
    cb?: (error: string, rep: DisableEncryptionProtectionResponse) => void
  ): Promise<DisableEncryptionProtectionResponse> {
    return this.request("DisableEncryptionProtection", req, cb)
  }

  /**
   * 更新容器实例
   */
  async UpdateEKSContainerInstance(
    req: UpdateEKSContainerInstanceRequest,
    cb?: (error: string, rep: UpdateEKSContainerInstanceResponse) => void
  ): Promise<UpdateEKSContainerInstanceResponse> {
    return this.request("UpdateEKSContainerInstance", req, cb)
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
   * 删除一个addon
   */
  async DeleteAddon(
    req: DeleteAddonRequest,
    cb?: (error: string, rep: DeleteAddonResponse) => void
  ): Promise<DeleteAddonResponse> {
    return this.request("DeleteAddon", req, cb)
  }

  /**
   * 为弹性集群创建日志采集配置
   */
  async CreateEksLogConfig(
    req: CreateEksLogConfigRequest,
    cb?: (error: string, rep: CreateEksLogConfigResponse) => void
  ): Promise<CreateEksLogConfigResponse> {
    return this.request("CreateEksLogConfig", req, cb)
  }

  /**
   * 驱逐超级节点
   */
  async DrainClusterVirtualNode(
    req: DrainClusterVirtualNodeRequest,
    cb?: (error: string, rep: DrainClusterVirtualNodeResponse) => void
  ): Promise<DrainClusterVirtualNodeResponse> {
    return this.request("DrainClusterVirtualNode", req, cb)
  }

  /**
   * 重启弹性容器实例，支持批量操作
   */
  async RestartEKSContainerInstances(
    req: RestartEKSContainerInstancesRequest,
    cb?: (error: string, rep: RestartEKSContainerInstancesResponse) => void
  ): Promise<RestartEKSContainerInstancesResponse> {
    return this.request("RestartEKSContainerInstances", req, cb)
  }

  /**
   * 删除集群采集配置
   */
  async DeletePrometheusConfig(
    req: DeletePrometheusConfigRequest,
    cb?: (error: string, rep: DeletePrometheusConfigResponse) => void
  ): Promise<DeletePrometheusConfigResponse> {
    return this.request("DeletePrometheusConfig", req, cb)
  }

  /**
   * 修改节点池关联伸缩组的期望实例数
   */
  async ModifyNodePoolDesiredCapacityAboutAsg(
    req: ModifyNodePoolDesiredCapacityAboutAsgRequest,
    cb?: (error: string, rep: ModifyNodePoolDesiredCapacityAboutAsgResponse) => void
  ): Promise<ModifyNodePoolDesiredCapacityAboutAsgResponse> {
    return this.request("ModifyNodePoolDesiredCapacityAboutAsg", req, cb)
  }

  /**
   * 修改集群认证配置
   */
  async ModifyClusterAuthenticationOptions(
    req: ModifyClusterAuthenticationOptionsRequest,
    cb?: (error: string, rep: ModifyClusterAuthenticationOptionsResponse) => void
  ): Promise<ModifyClusterAuthenticationOptionsResponse> {
    return this.request("ModifyClusterAuthenticationOptions", req, cb)
  }

  /**
   * 创建弹性集群
   */
  async CreateEKSCluster(
    req: CreateEKSClusterRequest,
    cb?: (error: string, rep: CreateEKSClusterResponse) => void
  ): Promise<CreateEKSClusterResponse> {
    return this.request("CreateEKSCluster", req, cb)
  }

  /**
   * 查询集群自定义参数
   */
  async DescribeClusterExtraArgs(
    req: DescribeClusterExtraArgsRequest,
    cb?: (error: string, rep: DescribeClusterExtraArgsResponse) => void
  ): Promise<DescribeClusterExtraArgsResponse> {
    return this.request("DescribeClusterExtraArgs", req, cb)
  }

  /**
   * 对集群的Kubeconfig信息进行更新
   */
  async UpdateClusterKubeconfig(
    req: UpdateClusterKubeconfigRequest,
    cb?: (error: string, rep: UpdateClusterKubeconfigResponse) => void
  ): Promise<UpdateClusterKubeconfigResponse> {
    return this.request("UpdateClusterKubeconfig", req, cb)
  }

  /**
   * 查看集群状态列表
   */
  async DescribeClusterStatus(
    req: DescribeClusterStatusRequest,
    cb?: (error: string, rep: DescribeClusterStatusResponse) => void
  ): Promise<DescribeClusterStatusResponse> {
    return this.request("DescribeClusterStatus", req, cb)
  }

  /**
   * 修改节点池的机型配置
   */
  async ModifyNodePoolInstanceTypes(
    req: ModifyNodePoolInstanceTypesRequest,
    cb?: (error: string, rep: ModifyNodePoolInstanceTypesResponse) => void
  ): Promise<ModifyNodePoolInstanceTypesResponse> {
    return this.request("ModifyNodePoolInstanceTypes", req, cb)
  }

  /**
   * 修改集群镜像
   */
  async ModifyClusterImage(
    req: ModifyClusterImageRequest,
    cb?: (error: string, rep: ModifyClusterImageResponse) => void
  ): Promise<ModifyClusterImageResponse> {
    return this.request("ModifyClusterImage", req, cb)
  }

  /**
   * 查询日志采集规则
   */
  async DescribeLogConfigs(
    req: DescribeLogConfigsRequest,
    cb?: (error: string, rep: DescribeLogConfigsResponse) => void
  ): Promise<DescribeLogConfigsResponse> {
    return this.request("DescribeLogConfigs", req, cb)
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
   * 查询集群巡检结果历史列表
   */
  async ListClusterInspectionResultsItems(
    req: ListClusterInspectionResultsItemsRequest,
    cb?: (error: string, rep: ListClusterInspectionResultsItemsResponse) => void
  ): Promise<ListClusterInspectionResultsItemsResponse> {
    return this.request("ListClusterInspectionResultsItems", req, cb)
  }

  /**
   * 开启加密数据保护，需要先开启KMS能力，完成KMS授权
   */
  async EnableEncryptionProtection(
    req: EnableEncryptionProtectionRequest,
    cb?: (error: string, rep: EnableEncryptionProtectionResponse) => void
  ): Promise<EnableEncryptionProtectionResponse> {
    return this.request("EnableEncryptionProtection", req, cb)
  }

  /**
   * 获取模板同步信息
   */
  async DescribePrometheusTemplateSync(
    req: DescribePrometheusTemplateSyncRequest,
    cb?: (error: string, rep: DescribePrometheusTemplateSyncResponse) => void
  ): Promise<DescribePrometheusTemplateSyncResponse> {
    return this.request("DescribePrometheusTemplateSync", req, cb)
  }

  /**
   * 提供给附加了VPC-CNI能力的Global-Route集群关闭VPC-CNI
   */
  async DisableVpcCniNetworkType(
    req: DisableVpcCniNetworkTypeRequest,
    cb?: (error: string, rep: DisableVpcCniNetworkTypeResponse) => void
  ): Promise<DisableVpcCniNetworkTypeResponse> {
    return this.request("DisableVpcCniNetworkType", req, cb)
  }

  /**
   * 获取实例详细信息
   */
  async DescribePrometheusInstance(
    req: DescribePrometheusInstanceRequest,
    cb?: (error: string, rep: DescribePrometheusInstanceResponse) => void
  ): Promise<DescribePrometheusInstanceResponse> {
    return this.request("DescribePrometheusInstance", req, cb)
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
   * 查询集群开启端口流程状态(仅支持托管集群外网端口)
   */
  async DescribeClusterEndpointVipStatus(
    req: DescribeClusterEndpointVipStatusRequest,
    cb?: (error: string, rep: DescribeClusterEndpointVipStatusResponse) => void
  ): Promise<DescribeClusterEndpointVipStatusResponse> {
    return this.request("DescribeClusterEndpointVipStatus", req, cb)
  }

  /**
   * 查询容器实例
   */
  async DescribeEKSContainerInstances(
    req: DescribeEKSContainerInstancesRequest,
    cb?: (error: string, rep: DescribeEKSContainerInstancesResponse) => void
  ): Promise<DescribeEKSContainerInstancesResponse> {
    return this.request("DescribeEKSContainerInstances", req, cb)
  }

  /**
   * 查询集群日志（审计、事件、普通日志）开关列表
   */
  async DescribeLogSwitches(
    req: DescribeLogSwitchesRequest,
    cb?: (error: string, rep: DescribeLogSwitchesResponse) => void
  ): Promise<DescribeLogSwitchesResponse> {
    return this.request("DescribeLogSwitches", req, cb)
  }

  /**
   * 通过此接口，可以获取集群的tke:admin的ClusterRole，即管理员角色，可以用于CAM侧高权限的用户，通过CAM策略给予子账户此接口权限，进而可以通过此接口直接获取到kubernetes集群内的管理员角色。
   */
  async AcquireClusterAdminRole(
    req: AcquireClusterAdminRoleRequest,
    cb?: (error: string, rep: AcquireClusterAdminRoleResponse) => void
  ): Promise<AcquireClusterAdminRoleResponse> {
    return this.request("AcquireClusterAdminRole", req, cb)
  }

  /**
   * 创建集群路由
   */
  async CreateClusterRoute(
    req: CreateClusterRouteRequest,
    cb?: (error: string, rep: CreateClusterRouteResponse) => void
  ): Promise<CreateClusterRouteResponse> {
    return this.request("CreateClusterRoute", req, cb)
  }

  /**
   * 查询集群在应用市场中某个已安装应用的版本历史
   */
  async DescribeClusterReleaseHistory(
    req: DescribeClusterReleaseHistoryRequest,
    cb?: (error: string, rep: DescribeClusterReleaseHistoryResponse) => void
  ): Promise<DescribeClusterReleaseHistoryResponse> {
    return this.request("DescribeClusterReleaseHistory", req, cb)
  }

  /**
   * 在应用市场中集群回滚应用至某个历史版本
   */
  async RollbackClusterRelease(
    req: RollbackClusterReleaseRequest,
    cb?: (error: string, rep: RollbackClusterReleaseResponse) => void
  ): Promise<RollbackClusterReleaseResponse> {
    return this.request("RollbackClusterRelease", req, cb)
  }

  /**
   * 编辑节点池
   */
  async ModifyClusterNodePool(
    req: ModifyClusterNodePoolRequest,
    cb?: (error: string, rep: ModifyClusterNodePoolResponse) => void
  ): Promise<ModifyClusterNodePoolResponse> {
    return this.request("ModifyClusterNodePool", req, cb)
  }

  /**
   * 查询etcd数据是否进行加密
   */
  async DescribeEncryptionStatus(
    req: DescribeEncryptionStatusRequest,
    cb?: (error: string, rep: DescribeEncryptionStatusResponse) => void
  ): Promise<DescribeEncryptionStatusResponse> {
    return this.request("DescribeEncryptionStatus", req, cb)
  }

  /**
   * 创建容器实例
   */
  async CreateEKSContainerInstances(
    req: CreateEKSContainerInstancesRequest,
    cb?: (error: string, rep: CreateEKSContainerInstancesResponse) => void
  ): Promise<CreateEKSContainerInstancesResponse> {
    return this.request("CreateEKSContainerInstances", req, cb)
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
   * 删除告警规则
   */
  async DeletePrometheusAlertRule(
    req: DeletePrometheusAlertRuleRequest,
    cb?: (error: string, rep: DeletePrometheusAlertRuleResponse) => void
  ): Promise<DeletePrometheusAlertRuleResponse> {
    return this.request("DeletePrometheusAlertRule", req, cb)
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
   * 缩容独立集群master节点，本功能为内测能力，使用之前请先提单联系我们。
   */
  async ScaleInClusterMaster(
    req: ScaleInClusterMasterRequest,
    cb?: (error: string, rep: ScaleInClusterMasterResponse) => void
  ): Promise<ScaleInClusterMasterResponse> {
    return this.request("ScaleInClusterMaster", req, cb)
  }

  /**
   * 查询集群变配记录
   */
  async DescribeClusterLevelChangeRecords(
    req: DescribeClusterLevelChangeRecordsRequest,
    cb?: (error: string, rep: DescribeClusterLevelChangeRecordsResponse) => void
  ): Promise<DescribeClusterLevelChangeRecordsResponse> {
    return this.request("DescribeClusterLevelChangeRecords", req, cb)
  }

  /**
   * 创建集群访问端口
   */
  async CreateClusterEndpoint(
    req: CreateClusterEndpointRequest,
    cb?: (error: string, rep: CreateClusterEndpointResponse) => void
  ): Promise<CreateClusterEndpointResponse> {
    return this.request("CreateClusterEndpoint", req, cb)
  }

  /**
   * 查询各个规格的 Pod 的抵扣率
   */
  async DescribePodDeductionRate(
    req: DescribePodDeductionRateRequest,
    cb?: (error: string, rep: DescribePodDeductionRateResponse) => void
  ): Promise<DescribePodDeductionRateResponse> {
    return this.request("DescribePodDeductionRate", req, cb)
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
   * 预留券实例如符合退还规则，可通过本接口主动退还。
   */
  async DeleteReservedInstances(
    req: DeleteReservedInstancesRequest,
    cb?: (error: string, rep: DeleteReservedInstancesResponse) => void
  ): Promise<DeleteReservedInstancesResponse> {
    return this.request("DeleteReservedInstances", req, cb)
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
   * 扩容独立集群master节点
   */
  async ScaleOutClusterMaster(
    req: ScaleOutClusterMasterRequest,
    cb?: (error: string, rep: ScaleOutClusterMasterResponse) => void
  ): Promise<ScaleOutClusterMasterResponse> {
    return this.request("ScaleOutClusterMaster", req, cb)
  }

  /**
   * 创建告警规则
   */
  async CreatePrometheusAlertRule(
    req: CreatePrometheusAlertRuleRequest,
    cb?: (error: string, rep: CreatePrometheusAlertRuleResponse) => void
  ): Promise<CreatePrometheusAlertRuleResponse> {
    return this.request("CreatePrometheusAlertRule", req, cb)
  }

  /**
   * 删除聚合规则
   */
  async DeletePrometheusRecordRuleYaml(
    req: DeletePrometheusRecordRuleYamlRequest,
    cb?: (error: string, rep: DeletePrometheusRecordRuleYamlResponse) => void
  ): Promise<DeletePrometheusRecordRuleYamlResponse> {
    return this.request("DeletePrometheusRecordRuleYaml", req, cb)
  }

  /**
   * 查询备份仓库信息
   */
  async DescribeBackupStorageLocations(
    req: DescribeBackupStorageLocationsRequest,
    cb?: (error: string, rep: DescribeBackupStorageLocationsResponse) => void
  ): Promise<DescribeBackupStorageLocationsResponse> {
    return this.request("DescribeBackupStorageLocations", req, cb)
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
   * 修改聚合规则yaml方式
   */
  async ModifyPrometheusRecordRuleYaml(
    req: ModifyPrometheusRecordRuleYamlRequest,
    cb?: (error: string, rep: ModifyPrometheusRecordRuleYamlResponse) => void
  ): Promise<ModifyPrometheusRecordRuleYamlResponse> {
    return this.request("ModifyPrometheusRecordRuleYaml", req, cb)
  }

  /**
   * 获取集群规模
   */
  async DescribeClusterLevelAttribute(
    req: DescribeClusterLevelAttributeRequest,
    cb?: (error: string, rep: DescribeClusterLevelAttributeResponse) => void
  ): Promise<DescribeClusterLevelAttributeResponse> {
    return this.request("DescribeClusterLevelAttribute", req, cb)
  }

  /**
   * 集群的密钥信息
   */
  async DescribeClusterSecurity(
    req: DescribeClusterSecurityRequest,
    cb?: (error: string, rep: DescribeClusterSecurityResponse) => void
  ): Promise<DescribeClusterSecurityResponse> {
    return this.request("DescribeClusterSecurity", req, cb)
  }

  /**
   * 续费时请确保账户余额充足。
   */
  async RenewReservedInstances(
    req: RenewReservedInstancesRequest,
    cb?: (error: string, rep: RenewReservedInstancesResponse) => void
  ): Promise<RenewReservedInstancesResponse> {
    return this.request("RenewReservedInstances", req, cb)
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
   * 删除节点池
   */
  async DeleteClusterNodePool(
    req: DeleteClusterNodePoolRequest,
    cb?: (error: string, rep: DeleteClusterNodePoolResponse) => void
  ): Promise<DeleteClusterNodePoolResponse> {
    return this.request("DeleteClusterNodePool", req, cb)
  }

  /**
   * 创建边缘计算集群
   */
  async CreateTKEEdgeCluster(
    req: CreateTKEEdgeClusterRequest,
    cb?: (error: string, rep: CreateTKEEdgeClusterResponse) => void
  ): Promise<CreateTKEEdgeClusterResponse> {
    return this.request("CreateTKEEdgeCluster", req, cb)
  }

  /**
   * 获取集群资源使用量
   */
  async DescribeResourceUsage(
    req: DescribeResourceUsageRequest,
    cb?: (error: string, rep: DescribeResourceUsageResponse) => void
  ): Promise<DescribeResourceUsageResponse> {
    return this.request("DescribeResourceUsage", req, cb)
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
   * 删除托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
   */
  async DeleteClusterEndpointVip(
    req: DeleteClusterEndpointVipRequest,
    cb?: (error: string, rep: DeleteClusterEndpointVipResponse) => void
  ): Promise<DeleteClusterEndpointVipResponse> {
    return this.request("DeleteClusterEndpointVip", req, cb)
  }

  /**
   * 获取ECM实例相关信息
   */
  async DescribeECMInstances(
    req: DescribeECMInstancesRequest,
    cb?: (error: string, rep: DescribeECMInstancesResponse) => void
  ): Promise<DescribeECMInstancesResponse> {
    return this.request("DescribeECMInstances", req, cb)
  }

  /**
   * 删除边缘计算集群
   */
  async DeleteTKEEdgeCluster(
    req: DeleteTKEEdgeClusterRequest,
    cb?: (error: string, rep: DeleteTKEEdgeClusterResponse) => void
  ): Promise<DeleteTKEEdgeClusterResponse> {
    return this.request("DeleteTKEEdgeCluster", req, cb)
  }

  /**
   * 根据镜像列表，查询匹配的镜像缓存
   */
  async GetMostSuitableImageCache(
    req: GetMostSuitableImageCacheRequest,
    cb?: (error: string, rep: GetMostSuitableImageCacheResponse) => void
  ): Promise<GetMostSuitableImageCacheResponse> {
    return this.request("GetMostSuitableImageCache", req, cb)
  }

  /**
   * 获取集群的访问地址，包括内网地址，外网地址，外网域名，外网访问安全策略
   */
  async DescribeClusterEndpoints(
    req: DescribeClusterEndpointsRequest,
    cb?: (error: string, rep: DescribeClusterEndpointsResponse) => void
  ): Promise<DescribeClusterEndpointsResponse> {
    return this.request("DescribeClusterEndpoints", req, cb)
  }

  /**
   * 与云监控融合的2.0实例关联集群
   */
  async CreatePrometheusClusterAgent(
    req: CreatePrometheusClusterAgentRequest,
    cb?: (error: string, rep: CreatePrometheusClusterAgentResponse) => void
  ): Promise<CreatePrometheusClusterAgentResponse> {
    return this.request("CreatePrometheusClusterAgent", req, cb)
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
   * 获取弹性容器集群的接入认证信息
   */
  async DescribeEKSClusterCredential(
    req: DescribeEKSClusterCredentialRequest,
    cb?: (error: string, rep: DescribeEKSClusterCredentialResponse) => void
  ): Promise<DescribeEKSClusterCredentialResponse> {
    return this.request("DescribeEKSClusterCredential", req, cb)
  }

  /**
   * 查询通过应用市场安装的某个应用详情
   */
  async DescribeClusterReleaseDetails(
    req: DescribeClusterReleaseDetailsRequest,
    cb?: (error: string, rep: DescribeClusterReleaseDetailsResponse) => void
  ): Promise<DescribeClusterReleaseDetailsResponse> {
    return this.request("DescribeClusterReleaseDetails", req, cb)
  }

  /**
   * 关闭集群审计
   */
  async DisableClusterAudit(
    req: DisableClusterAuditRequest,
    cb?: (error: string, rep: DisableClusterAuditResponse) => void
  ): Promise<DisableClusterAuditResponse> {
    return this.request("DisableClusterAudit", req, cb)
  }

  /**
   * 创建边缘容器CVM机器
   */
  async CreateEdgeCVMInstances(
    req: CreateEdgeCVMInstancesRequest,
    cb?: (error: string, rep: CreateEdgeCVMInstancesResponse) => void
  ): Promise<CreateEdgeCVMInstancesResponse> {
    return this.request("CreateEdgeCVMInstances", req, cb)
  }

  /**
   * 查询集群路由
   */
  async DescribeClusterRoutes(
    req: DescribeClusterRoutesRequest,
    cb?: (error: string, rep: DescribeClusterRoutesResponse) => void
  ): Promise<DescribeClusterRoutesResponse> {
    return this.request("DescribeClusterRoutes", req, cb)
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
   * 同步模板到实例或者集群，针对V2版本实例
   */
  async SyncPrometheusTemp(
    req: SyncPrometheusTempRequest,
    cb?: (error: string, rep: SyncPrometheusTempResponse) => void
  ): Promise<SyncPrometheusTempResponse> {
    return this.request("SyncPrometheusTemp", req, cb)
  }

  /**
   * 批量修改opa策略
   */
  async ModifyOpenPolicyList(
    req: ModifyOpenPolicyListRequest,
    cb?: (error: string, rep: ModifyOpenPolicyListResponse) => void
  ): Promise<ModifyOpenPolicyListResponse> {
    return this.request("ModifyOpenPolicyList", req, cb)
  }

  /**
   * 查询容器实例中容器日志
   */
  async DescribeEksContainerInstanceLog(
    req: DescribeEksContainerInstanceLogRequest,
    cb?: (error: string, rep: DescribeEksContainerInstanceLogResponse) => void
  ): Promise<DescribeEksContainerInstanceLogResponse> {
    return this.request("DescribeEksContainerInstanceLog", req, cb)
  }

  /**
   * 检查给定节点列表中哪些是可升级的
   */
  async CheckInstancesUpgradeAble(
    req: CheckInstancesUpgradeAbleRequest,
    cb?: (error: string, rep: CheckInstancesUpgradeAbleResponse) => void
  ): Promise<CheckInstancesUpgradeAbleResponse> {
    return this.request("CheckInstancesUpgradeAble", req, cb)
  }

  /**
   * 创建grafana监控面板
   */
  async CreatePrometheusDashboard(
    req: CreatePrometheusDashboardRequest,
    cb?: (error: string, rep: CreatePrometheusDashboardResponse) => void
  ): Promise<CreatePrometheusDashboardResponse> {
    return this.request("CreatePrometheusDashboard", req, cb)
  }

  /**
   * 获取实例列表
   */
  async DescribePrometheusOverviews(
    req: DescribePrometheusOverviewsRequest,
    cb?: (error: string, rep: DescribePrometheusOverviewsResponse) => void
  ): Promise<DescribePrometheusOverviewsResponse> {
    return this.request("DescribePrometheusOverviews", req, cb)
  }

  /**
   * 移出节点池节点，但保留在集群内
   */
  async RemoveNodeFromNodePool(
    req: RemoveNodeFromNodePoolRequest,
    cb?: (error: string, rep: RemoveNodeFromNodePoolResponse) => void
  ): Promise<RemoveNodeFromNodePoolResponse> {
    return this.request("RemoveNodeFromNodePool", req, cb)
  }

  /**
   * 获取边缘计算集群的当前状态以及过程信息
   */
  async DescribeTKEEdgeClusterStatus(
    req: DescribeTKEEdgeClusterStatusRequest,
    cb?: (error: string, rep: DescribeTKEEdgeClusterStatusResponse) => void
  ): Promise<DescribeTKEEdgeClusterStatusResponse> {
    return this.request("DescribeTKEEdgeClusterStatus", req, cb)
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
   * 删除一个云原生Prometheus配置模板
   */
  async DeletePrometheusTemplate(
    req: DeletePrometheusTemplateRequest,
    cb?: (error: string, rep: DeletePrometheusTemplateResponse) => void
  ): Promise<DeletePrometheusTemplateResponse> {
    return this.request("DeletePrometheusTemplate", req, cb)
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
   * 获取被关联集群列表
   */
  async DescribePrometheusAgents(
    req: DescribePrometheusAgentsRequest,
    cb?: (error: string, rep: DescribePrometheusAgentsResponse) => void
  ): Promise<DescribePrometheusAgentsResponse> {
    return this.request("DescribePrometheusAgents", req, cb)
  }

  /**
   * 关闭事件持久化功能
   */
  async DisableEventPersistence(
    req: DisableEventPersistenceRequest,
    cb?: (error: string, rep: DisableEventPersistenceResponse) => void
  ): Promise<DisableEventPersistenceResponse> {
    return this.request("DisableEventPersistence", req, cb)
  }

  /**
   * 删除集群访问端口
   */
  async DeleteClusterEndpoint(
    req: DeleteClusterEndpointRequest,
    cb?: (error: string, rep: DeleteClusterEndpointResponse) => void
  ): Promise<DeleteClusterEndpointResponse> {
    return this.request("DeleteClusterEndpoint", req, cb)
  }

  /**
   * 集群创建应用
   */
  async CreateClusterRelease(
    req: CreateClusterReleaseRequest,
    cb?: (error: string, rep: CreateClusterReleaseResponse) => void
  ): Promise<CreateClusterReleaseResponse> {
    return this.request("CreateClusterRelease", req, cb)
  }

  /**
   * 同步模板到实例或者集群
   */
  async SyncPrometheusTemplate(
    req: SyncPrometheusTemplateRequest,
    cb?: (error: string, rep: SyncPrometheusTemplateResponse) => void
  ): Promise<SyncPrometheusTemplateResponse> {
    return this.request("SyncPrometheusTemplate", req, cb)
  }

  /**
   * 查看超级节点池列表
   */
  async DescribeClusterVirtualNodePools(
    req: DescribeClusterVirtualNodePoolsRequest,
    cb?: (error: string, rep: DescribeClusterVirtualNodePoolsResponse) => void
  ): Promise<DescribeClusterVirtualNodePoolsResponse> {
    return this.request("DescribeClusterVirtualNodePools", req, cb)
  }

  /**
   * 获取集群规模价格
   */
  async GetClusterLevelPrice(
    req: GetClusterLevelPriceRequest,
    cb?: (error: string, rep: GetClusterLevelPriceResponse) => void
  ): Promise<GetClusterLevelPriceResponse> {
    return this.request("GetClusterLevelPrice", req, cb)
  }

  /**
   * 预留实例用量查询
   */
  async DescribeRIUtilizationDetail(
    req: DescribeRIUtilizationDetailRequest,
    cb?: (error: string, rep: DescribeRIUtilizationDetailResponse) => void
  ): Promise<DescribeRIUtilizationDetailResponse> {
    return this.request("DescribeRIUtilizationDetail", req, cb)
  }

  /**
   * 获取集群的kubeconfig文件，不同子账户获取自己的kubeconfig文件，该文件中有每个子账户自己的kube-apiserver的客户端证书，默认首次调此接口时候创建客户端证书，时效20年，未授予任何权限，如果是集群所有者或者主账户，则默认是cluster-admin权限。
   */
  async DescribeClusterKubeconfig(
    req: DescribeClusterKubeconfigRequest,
    cb?: (error: string, rep: DescribeClusterKubeconfigResponse) => void
  ): Promise<DescribeClusterKubeconfigResponse> {
    return this.request("DescribeClusterKubeconfig", req, cb)
  }

  /**
   * 可以查询边缘集群升级信息，包含可以升级的组件，当前升级状态和升级错误信息
   */
  async DescribeEdgeClusterUpgradeInfo(
    req: DescribeEdgeClusterUpgradeInfoRequest,
    cb?: (error: string, rep: DescribeEdgeClusterUpgradeInfoResponse) => void
  ): Promise<DescribeEdgeClusterUpgradeInfoResponse> {
    return this.request("DescribeEdgeClusterUpgradeInfo", req, cb)
  }

  /**
   * 删除集群内采集规则
   */
  async DeleteLogConfigs(
    req: DeleteLogConfigsRequest,
    cb?: (error: string, rep: DeleteLogConfigsResponse) => void
  ): Promise<DeleteLogConfigsResponse> {
    return this.request("DeleteLogConfigs", req, cb)
  }

  /**
   * 获取集群采集配置
   */
  async DescribePrometheusConfig(
    req: DescribePrometheusConfigRequest,
    cb?: (error: string, rep: DescribePrometheusConfigResponse) => void
  ): Promise<DescribePrometheusConfigResponse> {
    return this.request("DescribePrometheusConfig", req, cb)
  }

  /**
   * 在应用市场中取消安装失败的应用
   */
  async CancelClusterRelease(
    req: CancelClusterReleaseRequest,
    cb?: (error: string, rep: CancelClusterReleaseResponse) => void
  ): Promise<CancelClusterReleaseResponse> {
    return this.request("CancelClusterRelease", req, cb)
  }

  /**
   * 查询边缘计算集群的节点信息
   */
  async DescribeEdgeClusterInstances(
    req: DescribeEdgeClusterInstancesRequest,
    cb?: (error: string, rep: DescribeEdgeClusterInstancesResponse) => void
  ): Promise<DescribeEdgeClusterInstancesResponse> {
    return this.request("DescribeEdgeClusterInstances", req, cb)
  }

  /**
   * 集群弹性伸缩配置
   */
  async DescribeClusterAsGroupOption(
    req: DescribeClusterAsGroupOptionRequest,
    cb?: (error: string, rep: DescribeClusterAsGroupOptionResponse) => void
  ): Promise<DescribeClusterAsGroupOptionResponse> {
    return this.request("DescribeClusterAsGroupOption", req, cb)
  }

  /**
   * 查询弹性集群列表
   */
  async DescribeEKSClusters(
    req: DescribeEKSClustersRequest,
    cb?: (error: string, rep: DescribeEKSClustersResponse) => void
  ): Promise<DescribeEKSClustersResponse> {
    return this.request("DescribeEKSClusters", req, cb)
  }

  /**
   * 集群关联的伸缩组列表
   */
  async DescribeClusterAsGroups(
    req: DescribeClusterAsGroupsRequest,
    cb?: (error: string, rep: DescribeClusterAsGroupsResponse) => void
  ): Promise<DescribeClusterAsGroupsResponse> {
    return this.request("DescribeClusterAsGroups", req, cb)
  }

  /**
   * 创建节点池
   */
  async CreateClusterNodePool(
    req: CreateClusterNodePoolRequest,
    cb?: (error: string, rep: CreateClusterNodePoolResponse) => void
  ): Promise<CreateClusterNodePoolResponse> {
    return this.request("CreateClusterNodePool", req, cb)
  }

  /**
   * 创建边缘集群日志采集配置
   */
  async CreateEdgeLogConfig(
    req: CreateEdgeLogConfigRequest,
    cb?: (error: string, rep: CreateEdgeLogConfigResponse) => void
  ): Promise<CreateEdgeLogConfigResponse> {
    return this.request("CreateEdgeLogConfig", req, cb)
  }

  /**
   * 查询用户单个Region下的所有集群巡检结果概览信息
   */
  async DescribeClusterInspectionResultsOverview(
    req: DescribeClusterInspectionResultsOverviewRequest,
    cb?: (error: string, rep: DescribeClusterInspectionResultsOverviewResponse) => void
  ): Promise<DescribeClusterInspectionResultsOverviewResponse> {
    return this.request("DescribeClusterInspectionResultsOverview", req, cb)
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
   * 本接口用于查询开启vpc-cni模式的任务进度
   */
  async DescribeEnableVpcCniProgress(
    req: DescribeEnableVpcCniProgressRequest,
    cb?: (error: string, rep: DescribeEnableVpcCniProgressResponse) => void
  ): Promise<DescribeEnableVpcCniProgressResponse> {
    return this.request("DescribeEnableVpcCniProgress", req, cb)
  }

  /**
   * 获取告警规则列表
   */
  async DescribePrometheusAlertRule(
    req: DescribePrometheusAlertRuleRequest,
    cb?: (error: string, rep: DescribePrometheusAlertRuleResponse) => void
  ): Promise<DescribePrometheusAlertRuleResponse> {
    return this.request("DescribePrometheusAlertRule", req, cb)
  }

  /**
   * 启用集群删除保护
   */
  async EnableClusterDeletionProtection(
    req: EnableClusterDeletionProtectionRequest,
    cb?: (error: string, rep: EnableClusterDeletionProtectionResponse) => void
  ): Promise<EnableClusterDeletionProtectionResponse> {
    return this.request("EnableClusterDeletionProtection", req, cb)
  }

  /**
   * 操作TKEEdge集群的addon
   */
  async ForwardTKEEdgeApplicationRequestV3(
    req: ForwardTKEEdgeApplicationRequestV3Request,
    cb?: (error: string, rep: ForwardTKEEdgeApplicationRequestV3Response) => void
  ): Promise<ForwardTKEEdgeApplicationRequestV3Response> {
    return this.request("ForwardTKEEdgeApplicationRequestV3", req, cb)
  }

  /**
   * 查询镜像缓存信息接口
   */
  async DescribeImageCaches(
    req: DescribeImageCachesRequest,
    cb?: (error: string, rep: DescribeImageCachesResponse) => void
  ): Promise<DescribeImageCachesResponse> {
    return this.request("DescribeImageCaches", req, cb)
  }

  /**
   * 查询集群在应用市场中已安装应用列表
   */
  async DescribeClusterReleases(
    req: DescribeClusterReleasesRequest,
    cb?: (error: string, rep: DescribeClusterReleasesResponse) => void
  ): Promise<DescribeClusterReleasesResponse> {
    return this.request("DescribeClusterReleases", req, cb)
  }

  /**
   * 升级集群中已安装的应用
   */
  async UpgradeClusterRelease(
    req: UpgradeClusterReleaseRequest,
    cb?: (error: string, rep: UpgradeClusterReleaseResponse) => void
  ): Promise<UpgradeClusterReleaseResponse> {
    return this.request("UpgradeClusterRelease", req, cb)
  }

  /**
   * 查询容器实例支持的地域
   */
  async DescribeEKSContainerInstanceRegions(
    req?: DescribeEKSContainerInstanceRegionsRequest,
    cb?: (error: string, rep: DescribeEKSContainerInstanceRegionsResponse) => void
  ): Promise<DescribeEKSContainerInstanceRegionsResponse> {
    return this.request("DescribeEKSContainerInstanceRegions", req, cb)
  }

  /**
   * 修改边缘计算集群名称等属性
   */
  async UpdateTKEEdgeCluster(
    req: UpdateTKEEdgeClusterRequest,
    cb?: (error: string, rep: UpdateTKEEdgeClusterResponse) => void
  ): Promise<UpdateTKEEdgeClusterResponse> {
    return this.request("UpdateTKEEdgeCluster", req, cb)
  }

  /**
   * 修改模板内容
   */
  async ModifyPrometheusTemplate(
    req: ModifyPrometheusTemplateRequest,
    cb?: (error: string, rep: ModifyPrometheusTemplateResponse) => void
  ): Promise<ModifyPrometheusTemplateResponse> {
    return this.request("ModifyPrometheusTemplate", req, cb)
  }

  /**
   * 拉取模板列表，默认模板将总是在最前面
   */
  async DescribePrometheusTemplates(
    req: DescribePrometheusTemplatesRequest,
    cb?: (error: string, rep: DescribePrometheusTemplatesResponse) => void
  ): Promise<DescribePrometheusTemplatesResponse> {
    return this.request("DescribePrometheusTemplates", req, cb)
  }

  /**
   * 获取addon列表
   */
  async DescribeAddon(
    req: DescribeAddonRequest,
    cb?: (error: string, rep: DescribeAddonResponse) => void
  ): Promise<DescribeAddonResponse> {
    return this.request("DescribeAddon", req, cb)
  }

  /**
   * 获取与云监控融合实例列表
   */
  async DescribePrometheusInstancesOverview(
    req: DescribePrometheusInstancesOverviewRequest,
    cb?: (error: string, rep: DescribePrometheusInstancesOverviewResponse) => void
  ): Promise<DescribePrometheusInstancesOverviewResponse> {
    return this.request("DescribePrometheusInstancesOverview", req, cb)
  }

  /**
   * 删除集群中的实例
   */
  async DeleteClusterInstances(
    req: DeleteClusterInstancesRequest,
    cb?: (error: string, rep: DeleteClusterInstancesResponse) => void
  ): Promise<DeleteClusterInstancesResponse> {
    return this.request("DeleteClusterInstances", req, cb)
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
   * 创建集群采集配置
   */
  async CreatePrometheusConfig(
    req: CreatePrometheusConfigRequest,
    cb?: (error: string, rep: CreatePrometheusConfigResponse) => void
  ): Promise<CreatePrometheusConfigResponse> {
    return this.request("CreatePrometheusConfig", req, cb)
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
   * 修改弹性集群名称等属性
   */
  async UpdateEKSCluster(
    req: UpdateEKSClusterRequest,
    cb?: (error: string, rep: UpdateEKSClusterResponse) => void
  ): Promise<UpdateEKSClusterResponse> {
    return this.request("UpdateEKSCluster", req, cb)
  }

  /**
   * 获取TKE支持的App列表
   */
  async GetTkeAppChartList(
    req: GetTkeAppChartListRequest,
    cb?: (error: string, rep: GetTkeAppChartListResponse) => void
  ): Promise<GetTkeAppChartListResponse> {
    return this.request("GetTkeAppChartList", req, cb)
  }

  /**
   * 创建按量计费超级节点
   */
  async CreateClusterVirtualNode(
    req: CreateClusterVirtualNodeRequest,
    cb?: (error: string, rep: CreateClusterVirtualNodeResponse) => void
  ): Promise<CreateClusterVirtualNodeResponse> {
    return this.request("CreateClusterVirtualNode", req, cb)
  }

  /**
   * 在TKE集群中安装CLS日志采集组件
   */
  async InstallLogAgent(
    req: InstallLogAgentRequest,
    cb?: (error: string, rep: InstallLogAgentResponse) => void
  ): Promise<InstallLogAgentResponse> {
    return this.request("InstallLogAgent", req, cb)
  }

  /**
   * 检查边缘计算集群的CIDR是否冲突
   */
  async CheckEdgeClusterCIDR(
    req: CheckEdgeClusterCIDRRequest,
    cb?: (error: string, rep: CheckEdgeClusterCIDRResponse) => void
  ): Promise<CheckEdgeClusterCIDRResponse> {
    return this.request("CheckEdgeClusterCIDR", req, cb)
  }

  /**
   * 创建托管集群外网访问端口（不再维护，准备下线）请使用新接口：CreateClusterEndpoint
   */
  async CreateClusterEndpointVip(
    req: CreateClusterEndpointVipRequest,
    cb?: (error: string, rep: CreateClusterEndpointVipResponse) => void
  ): Promise<CreateClusterEndpointVipResponse> {
    return this.request("CreateClusterEndpointVip", req, cb)
  }

  /**
   * 修改集群及节点池纬度运行时配置
   */
  async ModifyClusterRuntimeConfig(
    req: ModifyClusterRuntimeConfigRequest,
    cb?: (error: string, rep: ModifyClusterRuntimeConfigResponse) => void
  ): Promise<ModifyClusterRuntimeConfigResponse> {
    return this.request("ModifyClusterRuntimeConfig", req, cb)
  }

  /**
   * 查询路由表冲突列表
   */
  async DescribeRouteTableConflicts(
    req: DescribeRouteTableConflictsRequest,
    cb?: (error: string, rep: DescribeRouteTableConflictsResponse) => void
  ): Promise<DescribeRouteTableConflictsResponse> {
    return this.request("DescribeRouteTableConflicts", req, cb)
  }
}
