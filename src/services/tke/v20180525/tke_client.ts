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
  InstallLogAgentRequest,
  DescribeClusterEndpointVipStatusResponse,
  DeleteClusterResponse,
  ContainerState,
  CreateClusterRouteTableResponse,
  CbsVolume,
  DescribeEKSClustersRequest,
  DescribePrometheusInstancesOverviewRequest,
  ServiceAccountAuthenticationOptions,
  RunInstancesForNode,
  DisableVpcCniNetworkTypeResponse,
  DescribeClusterControllersResponse,
  DescribeExistedInstancesRequest,
  ClusterLevelChangeRecord,
  ModifyPrometheusAlertRuleResponse,
  DescribeEKSContainerInstanceEventResponse,
  RouteTableInfo,
  EnableClusterDeletionProtectionResponse,
  ClusterAsGroup,
  PrometheusTempModify,
  EnableClusterAuditResponse,
  EnvironmentVariable,
  UpdateImageCacheRequest,
  ManuallyAdded,
  Tag,
  DescribePrometheusAgentInstancesRequest,
  ModifyClusterAttributeRequest,
  AutoscalingAdded,
  DescribeClustersRequest,
  UpgradeClusterInstancesRequest,
  ExtensionAddon,
  RegionInstance,
  PrometheusRecordRuleYamlItem,
  Label,
  PodLimitsByType,
  DeletePrometheusTemplateSyncRequest,
  DisableVpcCniNetworkTypeRequest,
  SyncPrometheusTempResponse,
  CreatePrometheusDashboardResponse,
  DescribeClusterStatusRequest,
  PrometheusConfigItem,
  DeleteClusterNodePoolRequest,
  DescribeEKSClusterCredentialResponse,
  CheckInstancesUpgradeAbleRequest,
  ModifyPrometheusTemplateRequest,
  DescribeImageCachesRequest,
  DescribePrometheusAlertRuleRequest,
  AddNodeToNodePoolResponse,
  PrometheusInstancesOverview,
  DisableEventPersistenceResponse,
  UpdateEKSContainerInstanceRequest,
  GetMostSuitableImageCacheResponse,
  DescribeEnableVpcCniProgressRequest,
  Instance,
  DescribePrometheusAgentInstancesResponse,
  RunAutomationServiceEnabled,
  CreateClusterResponse,
  RunSecurityServiceEnabled,
  ImageCache,
  DeletePrometheusAlertRuleResponse,
  DescribeEksContainerInstanceLogRequest,
  DescribeClusterInstancesRequest,
  PodLimitsInstance,
  ModifyPrometheusTempRequest,
  ControllerStatus,
  DeletePrometheusTempSyncResponse,
  DescribePrometheusRecordRulesRequest,
  AcquireClusterAdminRoleResponse,
  GetTkeAppChartListResponse,
  DescribePrometheusTemplateSyncRequest,
  UpgradeAbleInstancesItem,
  UpgradeClusterInstancesResponse,
  DescribeClusterAsGroupOptionRequest,
  ModifyClusterAttributeResponse,
  AddExistedInstancesRequest,
  ClusterAsGroupOption,
  DeletePrometheusTempResponse,
  DescribeClusterNodePoolsRequest,
  DescribeClusterRouteTablesRequest,
  DescribeRegionsRequest,
  DeleteClusterRouteRequest,
  DeleteClusterEndpointRequest,
  DescribeClusterNodePoolDetailRequest,
  DescribePrometheusTempSyncRequest,
  DescribePrometheusClusterAgentsResponse,
  DescribeImagesRequest,
  AddVpcCniSubnetsRequest,
  DescribePrometheusAlertHistoryResponse,
  ExistedInstancesPara,
  DescribeClusterAsGroupOptionResponse,
  NodePoolOption,
  CreateImageCacheRequest,
  UpdateClusterVersionRequest,
  Probe,
  NodeCountSummary,
  RemoveNodeFromNodePoolRequest,
  DescribeClusterNodePoolDetailResponse,
  DescribeEKSContainerInstanceEventRequest,
  ScaleOutClusterMasterResponse,
  CreateEKSContainerInstancesResponse,
  DescribeClusterKubeconfigResponse,
  DescribeClusterCommonNamesRequest,
  NfsVolume,
  AddNodeToNodePoolRequest,
  NodePool,
  DescribeEKSClustersResponse,
  VolumeMount,
  DeleteClusterRequest,
  DeleteClusterAsGroupsRequest,
  ModifyPrometheusAlertPolicyRequest,
  ForwardApplicationRequestV3Request,
  PrometheusAlertHistoryItem,
  PrometheusTemplateSyncTarget,
  DescribePrometheusTemplatesRequest,
  DescribePrometheusAlertPolicyResponse,
  EnableVpcCniNetworkTypeResponse,
  DescribePrometheusAlertRuleResponse,
  EksCiRegionInfo,
  DisableClusterAuditRequest,
  Event,
  DescribePrometheusGlobalNotificationResponse,
  HttpGet,
  ResourceUsage,
  DescribePrometheusAlertHistoryRequest,
  SetNodePoolNodeProtectionResponse,
  DeletePrometheusAlertPolicyRequest,
  RouteTableConflict,
  DeleteClusterInstancesRequest,
  UpgradeNodeResetParam,
  CreateClusterInstancesRequest,
  ClusterCIDRSettings,
  Taint,
  ModifyNodePoolInstanceTypesRequest,
  AddClusterCIDRRequest,
  DescribeClustersResponse,
  DescribePrometheusTemplatesResponse,
  UpdateEKSContainerInstanceResponse,
  DnsServerConf,
  EksCluster,
  ModifyNodePoolInstanceTypesResponse,
  PrometheusAlertManagerConfig,
  GetClusterLevelPriceResponse,
  DescribeResourceUsageResponse,
  DescribeClusterRoutesResponse,
  DescribeAvailableClusterVersionRequest,
  DescribePrometheusAlertPolicyRequest,
  DeleteClusterAsGroupsResponse,
  DescribeResourceUsageRequest,
  DeletePrometheusTemplateRequest,
  DescribePrometheusTempSyncResponse,
  Cluster,
  DescribeClusterEndpointStatusResponse,
  DescribeExternalClusterSpecResponse,
  AddExistedInstancesResponse,
  RestartEKSContainerInstancesResponse,
  DisableClusterDeletionProtectionResponse,
  EnableVpcCniNetworkTypeRequest,
  Container,
  CreateClusterEndpointRequest,
  DescribePrometheusInstanceResponse,
  Capabilities,
  CreateClusterInstancesResponse,
  InstanceUpgradeClusterStatus,
  DescribeClusterRoutesRequest,
  ClusterLevelAttribute,
  RemoveNodeFromNodePoolResponse,
  SetNodePoolNodeProtectionRequest,
  EnableClusterAuditRequest,
  CreateClusterRouteTableRequest,
  DisableClusterAuditResponse,
  DescribeClusterLevelChangeRecordsRequest,
  UpdateClusterVersionResponse,
  InstanceUpgradePreCheckResultItem,
  ModifyNodePoolDesiredCapacityAboutAsgRequest,
  DeleteImageCachesRequest,
  CreateClusterNodePoolResponse,
  EipAttribute,
  InstanceUpgradePreCheckResult,
  DescribeClusterControllersRequest,
  ModifyPrometheusAlertRuleRequest,
  DescribeClusterSecurityResponse,
  RouteInfo,
  ModifyNodePoolDesiredCapacityAboutAsgResponse,
  CreateClusterRouteRequest,
  ModifyClusterEndpointSPRequest,
  DeleteClusterEndpointResponse,
  PrometheusTemplateModify,
  ClusterVersion,
  InstanceUpgradeProgressItem,
  GetMostSuitableImageCacheRequest,
  SecurityContext,
  DNSConfig,
  CreatePrometheusAlertPolicyResponse,
  DNSConfigOption,
  PrometheusNotification,
  DescribeExternalClusterSpecRequest,
  AutoScalingGroupRange,
  DescribePrometheusGlobalNotificationRequest,
  ClusterPublicLB,
  DescribePrometheusTemplateSyncResponse,
  ModifyPrometheusTemplateResponse,
  ModifyPrometheusAlertPolicyResponse,
  DescribeClusterAuthenticationOptionsRequest,
  DescribeEksContainerInstanceLogResponse,
  DeleteEKSClusterResponse,
  VersionInstance,
  EksCi,
  UpdateImageCacheResponse,
  ImageCacheEvent,
  DeleteEKSContainerInstancesResponse,
  DescribePrometheusInstancesOverviewResponse,
  DescribeEKSClusterCredentialRequest,
  EnableClusterDeletionProtectionRequest,
  RestartEKSContainerInstancesRequest,
  DescribeClusterLevelAttributeRequest,
  DisableClusterDeletionProtectionRequest,
  ModifyClusterAsGroupOptionAttributeRequest,
  ClusterCredential,
  DescribePrometheusOverviewsRequest,
  DataDisk,
  DeleteEKSClusterRequest,
  GetUpgradeInstanceProgressResponse,
  DescribeExistedInstancesResponse,
  CreatePrometheusTemplateRequest,
  DeleteImageCachesResponse,
  CreatePrometheusAlertRuleResponse,
  ResourceDeleteOption,
  ModifyClusterAuthenticationOptionsResponse,
  CreateClusterNodePoolFromExistingAsgResponse,
  PrometheusAlertRule,
  EnhancedService,
  DescribeClusterNodePoolsResponse,
  UninstallLogAgentRequest,
  TcpSocket,
  TagSpecification,
  PrometheusNotificationItem,
  CreatePrometheusGlobalNotificationResponse,
  DescribeClusterAuthenticationOptionsResponse,
  DescribePrometheusAgentsRequest,
  AddClusterCIDRResponse,
  DescribeClusterLevelAttributeResponse,
  PrometheusGrafanaInfo,
  ImageInstance,
  CreatePrometheusAlertPolicyRequest,
  GetTkeAppChartListRequest,
  ResourceUsageDetail,
  CreateClusterNodePoolRequest,
  DescribePrometheusClusterAgentsRequest,
  CheckInstancesUpgradeAbleResponse,
  CreatePrometheusTempRequest,
  CreatePrometheusDashboardRequest,
  DeleteClusterRouteTableResponse,
  DescribeImageCachesResponse,
  PrometheusJobTargets,
  ModifyClusterAsGroupOptionAttributeResponse,
  UninstallLogAgentResponse,
  CreatePrometheusTempResponse,
  DescribePrometheusTargetsRequest,
  DeletePrometheusTemplateSyncResponse,
  DescribeClusterAsGroupsRequest,
  SyncPrometheusTempRequest,
  ModifyClusterEndpointSPResponse,
  ClusterAsGroupAttribute,
  DisableEventPersistenceRequest,
  RunMonitorServiceEnabled,
  CreateEKSContainerInstancesRequest,
  InstanceAdvancedSettings,
  ModifyClusterAsGroupAttributeRequest,
  DescribeClusterAsGroupsResponse,
  ScaleOutClusterMasterRequest,
  DeleteClusterInstancesResponse,
  CreatePrometheusGlobalNotificationRequest,
  ModifyPrometheusTempResponse,
  PrometheusAlertRuleDetail,
  DescribeClusterInstancesResponse,
  CreatePrometheusAlertRuleRequest,
  UpdateEKSClusterRequest,
  CreateEKSClusterResponse,
  CreateImageCacheResponse,
  Exec,
  DeletePrometheusAlertPolicyResponse,
  IPAddress,
  AutoUpgradeClusterLevel,
  CreateEKSClusterRequest,
  CommonName,
  EnableEventPersistenceRequest,
  DescribeRegionsResponse,
  CreateClusterRouteResponse,
  DescribeEKSContainerInstanceRegionsRequest,
  DescribeVpcCniPodLimitsResponse,
  DescribeVersionsResponse,
  ScaleInClusterMasterRequest,
  CreateClusterNodePoolFromExistingAsgRequest,
  EnableEventPersistenceResponse,
  ClusterNetworkSettings,
  DescribeImagesResponse,
  ClusterExtraArgs,
  SyncPrometheusTemplateResponse,
  CreateClusterEndpointVipResponse,
  TaskStepInfo,
  DeletePrometheusAlertRuleRequest,
  DescribeRouteTableConflictsRequest,
  DeleteClusterEndpointVipResponse,
  ClusterBasicSettings,
  PrometheusTemplate,
  InstanceDataDiskMountSetting,
  ModifyClusterAsGroupAttributeResponse,
  DeletePrometheusTempRequest,
  DescribeTKEEdgeScriptResponse,
  DescribeClusterRouteTablesResponse,
  DescribeClusterKubeconfigRequest,
  DeletePrometheusTempSyncRequest,
  CreatePrometheusTemplateResponse,
  CreateClusterEndpointVipRequest,
  ClusterInternalLB,
  ExistedInstance,
  ModifyPrometheusGlobalNotificationRequest,
  GetUpgradeInstanceProgressRequest,
  UpdateEKSClusterResponse,
  DescribePrometheusRecordRulesResponse,
  DeleteClusterNodePoolResponse,
  DeleteClusterRouteResponse,
  ModifyClusterNodePoolResponse,
  PrometheusAlertPolicyItem,
  PrometheusTarget,
  LoginSettings,
  SyncPrometheusTemplateRequest,
  DescribeClusterEndpointStatusRequest,
  DescribeClusterStatusResponse,
  ImageRegistryCredential,
  DescribeRouteTableConflictsResponse,
  DescribeVersionsRequest,
  DescribePrometheusTempRequest,
  DescribeEKSContainerInstancesResponse,
  DeleteClusterRouteTableRequest,
  CreateClusterRequest,
  InstanceExtraArgs,
  AcquireClusterAdminRoleRequest,
  DeletePrometheusTemplateResponse,
  DescribePrometheusInstanceRequest,
  DescribePrometheusTempResponse,
  DescribePrometheusTargetsResponse,
  DescribeEnableVpcCniProgressResponse,
  PrometheusAgentOverview,
  AppChart,
  Filter,
  ModifyClusterNodePoolRequest,
  InstallLogAgentResponse,
  GetClusterLevelPriceRequest,
  CreateClusterEndpointResponse,
  ClusterAdvancedSettings,
  ForwardApplicationRequestV3Response,
  ModifyClusterAuthenticationOptionsRequest,
  DeleteClusterEndpointVipRequest,
  LivenessOrReadinessProbe,
  DescribeClusterLevelChangeRecordsResponse,
  ClusterStatus,
  DescribePrometheusAgentsResponse,
  DescribeVpcCniPodLimitsRequest,
  ModifyPrometheusGlobalNotificationResponse,
  DescribeEKSContainerInstanceRegionsResponse,
  DescribeTKEEdgeScriptRequest,
  AddVpcCniSubnetsResponse,
  ExistedInstancesForNode,
  DescribePrometheusOverviewsResponse,
  DescribeEKSContainerInstancesRequest,
  ScaleInClusterMasterResponse,
  DescribeAvailableClusterVersionResponse,
  DeleteEKSContainerInstancesRequest,
  DescribeClusterCommonNamesResponse,
  PrometheusTemp,
  PrometheusInstanceOverview,
  ScaleInMaster,
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
   * 更新镜像缓存接口
   */
  async UpdateImageCache(
    req: UpdateImageCacheRequest,
    cb?: (error: string, rep: UpdateImageCacheResponse) => void
  ): Promise<UpdateImageCacheResponse> {
    return this.request("UpdateImageCache", req, cb)
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
   * 修改告警规则
   */
  async ModifyPrometheusAlertRule(
    req: ModifyPrometheusAlertRuleRequest,
    cb?: (error: string, rep: ModifyPrometheusAlertRuleResponse) => void
  ): Promise<ModifyPrometheusAlertRuleResponse> {
    return this.request("ModifyPrometheusAlertRule", req, cb)
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
   * 获取指定子账户在RBAC授权模式中对应kube-apiserver客户端证书的CommonName字段，如果没有客户端证书，将会签发一个，此接口有最大传入子账户数量上限，当前为50
   */
  async DescribeClusterCommonNames(
    req: DescribeClusterCommonNamesRequest,
    cb?: (error: string, rep: DescribeClusterCommonNamesResponse) => void
  ): Promise<DescribeClusterCommonNamesResponse> {
    return this.request("DescribeClusterCommonNames", req, cb)
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
   * 创建集群路由表
   */
  async CreateClusterRouteTable(
    req: CreateClusterRouteTableRequest,
    cb?: (error: string, rep: CreateClusterRouteTableResponse) => void
  ): Promise<CreateClusterRouteTableResponse> {
    return this.request("CreateClusterRouteTable", req, cb)
  }

  /**
   * 获得节点升级当前的进度
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
   * 根据镜像列表，查询匹配的镜像缓存
   */
  async GetMostSuitableImageCache(
    req: GetMostSuitableImageCacheRequest,
    cb?: (error: string, rep: GetMostSuitableImageCacheResponse) => void
  ): Promise<GetMostSuitableImageCacheResponse> {
    return this.request("GetMostSuitableImageCache", req, cb)
  }

  /**
   * 从伸缩组创建节点池
   */
  async CreateClusterNodePoolFromExistingAsg(
    req: CreateClusterNodePoolFromExistingAsgRequest,
    cb?: (error: string, rep: CreateClusterNodePoolFromExistingAsgResponse) => void
  ): Promise<CreateClusterNodePoolFromExistingAsgResponse> {
    return this.request("CreateClusterNodePoolFromExistingAsg", req, cb)
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
   * 获取集群版本信息
   */
  async DescribeVersions(
    req?: DescribeVersionsRequest,
    cb?: (error: string, rep: DescribeVersionsResponse) => void
  ): Promise<DescribeVersionsResponse> {
    return this.request("DescribeVersions", req, cb)
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
   * 开启集群审计
   */
  async EnableClusterAudit(
    req: EnableClusterAuditRequest,
    cb?: (error: string, rep: EnableClusterAuditResponse) => void
  ): Promise<EnableClusterAuditResponse> {
    return this.request("EnableClusterAudit", req, cb)
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
   * 查询镜像缓存信息接口
   */
  async DescribeImageCaches(
    req: DescribeImageCachesRequest,
    cb?: (error: string, rep: DescribeImageCachesResponse) => void
  ): Promise<DescribeImageCachesResponse> {
    return this.request("DescribeImageCaches", req, cb)
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
   * 获取集群可以升级的所有版本
   */
  async DescribeAvailableClusterVersion(
    req: DescribeAvailableClusterVersionRequest,
    cb?: (error: string, rep: DescribeAvailableClusterVersionResponse) => void
  ): Promise<DescribeAvailableClusterVersionResponse> {
    return this.request("DescribeAvailableClusterVersion", req, cb)
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
   * 修改2.0实例告警策略
   */
  async ModifyPrometheusAlertPolicy(
    req: ModifyPrometheusAlertPolicyRequest,
    cb?: (error: string, rep: ModifyPrometheusAlertPolicyResponse) => void
  ): Promise<ModifyPrometheusAlertPolicyResponse> {
    return this.request("ModifyPrometheusAlertPolicy", req, cb)
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
   * 查看集群状态列表
   */
  async DescribeClusterStatus(
    req: DescribeClusterStatusRequest,
    cb?: (error: string, rep: DescribeClusterStatusResponse) => void
  ): Promise<DescribeClusterStatusResponse> {
    return this.request("DescribeClusterStatus", req, cb)
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
   * 针对VPC-CNI模式的集群，增加集群容器网络可使用的子网
   */
  async AddVpcCniSubnets(
    req: AddVpcCniSubnetsRequest,
    cb?: (error: string, rep: AddVpcCniSubnetsResponse) => void
  ): Promise<AddVpcCniSubnetsResponse> {
    return this.request("AddVpcCniSubnets", req, cb)
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
   * 查询节点池列表
   */
  async DescribeClusterNodePools(
    req: DescribeClusterNodePoolsRequest,
    cb?: (error: string, rep: DescribeClusterNodePoolsResponse) => void
  ): Promise<DescribeClusterNodePoolsResponse> {
    return this.request("DescribeClusterNodePools", req, cb)
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
   * 获取容器服务支持的所有地域
   */
  async DescribeRegions(
    req?: DescribeRegionsRequest,
    cb?: (error: string, rep: DescribeRegionsResponse) => void
  ): Promise<DescribeRegionsResponse> {
    return this.request("DescribeRegions", req, cb)
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
   *  查询集群下节点实例信息
   */
  async DescribeClusterInstances(
    req: DescribeClusterInstancesRequest,
    cb?: (error: string, rep: DescribeClusterInstancesResponse) => void
  ): Promise<DescribeClusterInstancesResponse> {
    return this.request("DescribeClusterInstances", req, cb)
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
   * 给GR集群增加可用的ClusterCIDR
   */
  async AddClusterCIDR(
    req: AddClusterCIDRRequest,
    cb?: (error: string, rep: AddClusterCIDRResponse) => void
  ): Promise<AddClusterCIDRResponse> {
    return this.request("AddClusterCIDR", req, cb)
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
   * 获取告警规则列表
   */
  async DescribePrometheusAlertRule(
    req: DescribePrometheusAlertRuleRequest,
    cb?: (error: string, rep: DescribePrometheusAlertRuleResponse) => void
  ): Promise<DescribePrometheusAlertRuleResponse> {
    return this.request("DescribePrometheusAlertRule", req, cb)
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
   * 获取边缘脚本链接
   */
  async DescribeTKEEdgeScript(
    req: DescribeTKEEdgeScriptRequest,
    cb?: (error: string, rep: DescribeTKEEdgeScriptResponse) => void
  ): Promise<DescribeTKEEdgeScriptResponse> {
    return this.request("DescribeTKEEdgeScript", req, cb)
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
   * 创建弹性集群
   */
  async CreateEKSCluster(
    req: CreateEKSClusterRequest,
    cb?: (error: string, rep: CreateEKSClusterResponse) => void
  ): Promise<CreateEKSClusterResponse> {
    return this.request("CreateEKSCluster", req, cb)
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
   * 修改节点池的机型配置
   */
  async ModifyNodePoolInstanceTypes(
    req: ModifyNodePoolInstanceTypesRequest,
    cb?: (error: string, rep: ModifyNodePoolInstanceTypesResponse) => void
  ): Promise<ModifyNodePoolInstanceTypesResponse> {
    return this.request("ModifyNodePoolInstanceTypes", req, cb)
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
   * 创建一个云原生Prometheus模板
   */
  async CreatePrometheusTemp(
    req: CreatePrometheusTempRequest,
    cb?: (error: string, rep: CreatePrometheusTempResponse) => void
  ): Promise<CreatePrometheusTempResponse> {
    return this.request("CreatePrometheusTemp", req, cb)
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
   * 获取模板同步信息
   */
  async DescribePrometheusTemplateSync(
    req: DescribePrometheusTemplateSyncRequest,
    cb?: (error: string, rep: DescribePrometheusTemplateSyncResponse) => void
  ): Promise<DescribePrometheusTemplateSyncResponse> {
    return this.request("DescribePrometheusTemplateSync", req, cb)
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
   * 查询路由表冲突列表
   */
  async DescribeRouteTableConflicts(
    req: DescribeRouteTableConflictsRequest,
    cb?: (error: string, rep: DescribeRouteTableConflictsResponse) => void
  ): Promise<DescribeRouteTableConflictsResponse> {
    return this.request("DescribeRouteTableConflicts", req, cb)
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
   * 获取导入第三方集群YAML定义
   */
  async DescribeExternalClusterSpec(
    req: DescribeExternalClusterSpecRequest,
    cb?: (error: string, rep: DescribeExternalClusterSpecResponse) => void
  ): Promise<DescribeExternalClusterSpecResponse> {
    return this.request("DescribeExternalClusterSpec", req, cb)
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
   * 查询集群变配记录
   */
  async DescribeClusterLevelChangeRecords(
    req: DescribeClusterLevelChangeRecordsRequest,
    cb?: (error: string, rep: DescribeClusterLevelChangeRecordsResponse) => void
  ): Promise<DescribeClusterLevelChangeRecordsResponse> {
    return this.request("DescribeClusterLevelChangeRecords", req, cb)
  }

  /**
   * 创建集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
   */
  async CreateClusterEndpoint(
    req: CreateClusterEndpointRequest,
    cb?: (error: string, rep: CreateClusterEndpointResponse) => void
  ): Promise<CreateClusterEndpointResponse> {
    return this.request("CreateClusterEndpoint", req, cb)
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
   * 操作TKE集群的addon
   */
  async ForwardApplicationRequestV3(
    req: ForwardApplicationRequestV3Request,
    cb?: (error: string, rep: ForwardApplicationRequestV3Response) => void
  ): Promise<ForwardApplicationRequestV3Response> {
    return this.request("ForwardApplicationRequestV3", req, cb)
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
   * 修改模板内容
   */
  async ModifyPrometheusTemp(
    req: ModifyPrometheusTempRequest,
    cb?: (error: string, rep: ModifyPrometheusTempResponse) => void
  ): Promise<ModifyPrometheusTempResponse> {
    return this.request("ModifyPrometheusTemp", req, cb)
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
   * 集群的密钥信息
   */
  async DescribeClusterSecurity(
    req: DescribeClusterSecurityRequest,
    cb?: (error: string, rep: DescribeClusterSecurityResponse) => void
  ): Promise<DescribeClusterSecurityResponse> {
    return this.request("DescribeClusterSecurity", req, cb)
  }

  /**
   * 获取2.0实例关联集群列表
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
   * 在TKE集群中安装CLS日志采集组件
   */
  async InstallLogAgent(
    req: InstallLogAgentRequest,
    cb?: (error: string, rep: InstallLogAgentResponse) => void
  ): Promise<InstallLogAgentResponse> {
    return this.request("InstallLogAgent", req, cb)
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
   * 拉取模板列表，默认模板将总是在最前面
   */
  async DescribePrometheusTemplates(
    req: DescribePrometheusTemplatesRequest,
    cb?: (error: string, rep: DescribePrometheusTemplatesResponse) => void
  ): Promise<DescribePrometheusTemplatesResponse> {
    return this.request("DescribePrometheusTemplates", req, cb)
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
   * 关闭集群审计
   */
  async DisableClusterAudit(
    req: DisableClusterAuditRequest,
    cb?: (error: string, rep: DisableClusterAuditResponse) => void
  ): Promise<DisableClusterAuditResponse> {
    return this.request("DisableClusterAudit", req, cb)
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
   * 查询集群路由
   */
  async DescribeClusterRoutes(
    req: DescribeClusterRoutesRequest,
    cb?: (error: string, rep: DescribeClusterRoutesResponse) => void
  ): Promise<DescribeClusterRoutesResponse> {
    return this.request("DescribeClusterRoutes", req, cb)
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
   * 创建镜像缓存的接口。创建过程中，请勿删除EKSCI实例和云盘，否则镜像缓存将创建失败。
   */
  async CreateImageCache(
    req: CreateImageCacheRequest,
    cb?: (error: string, rep: CreateImageCacheResponse) => void
  ): Promise<CreateImageCacheResponse> {
    return this.request("CreateImageCache", req, cb)
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
   * 删除集群访问端口(独立集群开启内网/外网访问，托管集群支持开启内网访问)
   */
  async DeleteClusterEndpoint(
    req: DeleteClusterEndpointRequest,
    cb?: (error: string, rep: DeleteClusterEndpointResponse) => void
  ): Promise<DeleteClusterEndpointResponse> {
    return this.request("DeleteClusterEndpoint", req, cb)
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
   * 修改模板内容
   */
  async ModifyPrometheusTemplate(
    req: ModifyPrometheusTemplateRequest,
    cb?: (error: string, rep: ModifyPrometheusTemplateResponse) => void
  ): Promise<ModifyPrometheusTemplateResponse> {
    return this.request("ModifyPrometheusTemplate", req, cb)
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
   * 集群弹性伸缩配置
   */
  async DescribeClusterAsGroupOption(
    req: DescribeClusterAsGroupOptionRequest,
    cb?: (error: string, rep: DescribeClusterAsGroupOptionResponse) => void
  ): Promise<DescribeClusterAsGroupOptionResponse> {
    return this.request("DescribeClusterAsGroupOption", req, cb)
  }

  /**
   * 缩容独立集群master节点
   */
  async ScaleInClusterMaster(
    req: ScaleInClusterMasterRequest,
    cb?: (error: string, rep: ScaleInClusterMasterResponse) => void
  ): Promise<ScaleInClusterMasterResponse> {
    return this.request("ScaleInClusterMaster", req, cb)
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
   * 创建节点池
   */
  async CreateClusterNodePool(
    req: CreateClusterNodePoolRequest,
    cb?: (error: string, rep: CreateClusterNodePoolResponse) => void
  ): Promise<CreateClusterNodePoolResponse> {
    return this.request("CreateClusterNodePool", req, cb)
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
   * 启用集群删除保护
   */
  async EnableClusterDeletionProtection(
    req: EnableClusterDeletionProtectionRequest,
    cb?: (error: string, rep: EnableClusterDeletionProtectionResponse) => void
  ): Promise<EnableClusterDeletionProtectionResponse> {
    return this.request("EnableClusterDeletionProtection", req, cb)
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
   * 查询容器实例支持的地域
   */
  async DescribeEKSContainerInstanceRegions(
    req?: DescribeEKSContainerInstanceRegionsRequest,
    cb?: (error: string, rep: DescribeEKSContainerInstanceRegionsResponse) => void
  ): Promise<DescribeEKSContainerInstanceRegionsResponse> {
    return this.request("DescribeEKSContainerInstanceRegions", req, cb)
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
   * 提供给附加了VPC-CNI能力的Global-Route集群关闭VPC-CNI
   */
  async DisableVpcCniNetworkType(
    req: DisableVpcCniNetworkTypeRequest,
    cb?: (error: string, rep: DisableVpcCniNetworkTypeResponse) => void
  ): Promise<DisableVpcCniNetworkTypeResponse> {
    return this.request("DisableVpcCniNetworkType", req, cb)
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
   * 删除2.0实例告警策略
   */
  async DeletePrometheusAlertPolicy(
    req: DeletePrometheusAlertPolicyRequest,
    cb?: (error: string, rep: DeletePrometheusAlertPolicyResponse) => void
  ): Promise<DeletePrometheusAlertPolicyResponse> {
    return this.request("DeletePrometheusAlertPolicy", req, cb)
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
   * 创建托管集群外网访问端口（老的方式，仅支持托管集群外网端口）
   */
  async CreateClusterEndpointVip(
    req: CreateClusterEndpointVipRequest,
    cb?: (error: string, rep: CreateClusterEndpointVipResponse) => void
  ): Promise<CreateClusterEndpointVipResponse> {
    return this.request("CreateClusterEndpointVip", req, cb)
  }
}
